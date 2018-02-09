---
date: "2017-10-05"
description: "How to automate your workflow with CircleCi 2.0 & Zeit's Now platform."
draft: false
keywords: "continuous integration, continuous deployment, CircleCi, command-line, now-cli, Zeit, deploying, hosting"
title: "Automating with CircleCi 2.0"
tags: ["ci/cd", "cli", "deploying"]
---

I’ve been playing around with CircleCi 2.0 for the last month or two on various projects and wanted to share what I have learned during that time. A project I will be starting soon will be using [create-react-app](https://github.com/facebookincubator/create-react-app) & the static build will be deployed to [Now](https://zeit.co/now) using the `now-cli`. So this article will show a method for automating this with CircleCi using workflows.

## Getting Started

```bash
yarn global add now create-react-app
now login # your email
create-react-app circleci-deployment
```

While `create-react-app` does it’s thing go make some coffee or watch this YouTube [video](https://youtu.be/L59eDcrAk8Q)…tis my favorite time of year!

A few minor notes can be found in the [README](https://github.com/rockchalkwushock/circleci-deployment/blob/development/README.md) on the repository about some of the configuration that has changed with `react@16` as well as `create-react-app` & `jest`.

I use some devDependencies that I like in my stack, use them or don’t totally up to you:

```bash
yarn add -D codecov commitizen cz-conventional-changelog husky lint-staged nsp prettier raf
```

Explanation the devDependencies & their configuration can be found in the [README](https://github.com/rockchalkwushock/circleci-deployment/blob/development/README.md#devdependencies--configurations) since I wanted to focus more on the CircleCi setup with this article.

## Circle CI 2.0

I had never used CircleCi prior to 2.0; however, the documentation just in the last 2 months has gotten increasingly better & there are many examples on Github for one to look at. To add a configuration to your project you will need to add the following:

```bash
mkdir .circleci && touch ./circleci/config.yml
```

The first thing we must do is state what version of CircleCi we are using:

```yaml
version: 2
```

With CircleCi we can create jobs that will run specific segments of our build,test, or deployment process. These jobs as of 2.0 can then be ran in a [workflow](https://circleci.com/docs/2.0/workflows/) meaning we can run jobs in series or parallel depending on the requirements of those jobs. There is a general starting pattern that will be the same for each job we create:

```yaml
<job_name>
	docker|machine
	working_directory
	steps
	  - one
	  - two
```

> _**NOTE**: If you are new or unfamiliar with YAML syntax I would highly encourage you to use a YAML validator. If your code editor does not have an extension CircleCi provides a link to the following [site](https://codebeautify.org/yaml-validator). I am using the [vscode-yaml-validation](https://marketplace.visualstudio.com/items?itemName=djabraham.vscode-yaml-validation) extension with Visual Studio Code._

The first job we will need setup is telling CircleCi to go get the code from Github & install the project dependencies. We will create a job called `checkout_code` and use one of the many pre-built `docker` images provided by CircleCi, find a list [here](https://circleci.com/docs/2.0/circleci-images/). CircleCi operates by spinning up a container environment that your code can be ran in. If you are working on a team chances are everyone's machines are slightly different with what versions of software they are running, etc, etc. Using continuous integration services like CircleCi, Travis CI, or the many many others your team can rest assured that the code is operating in the same environment every time it is tested, built, & deployed which means less surprises!

```yaml
version: 2
jobs:
  checkout_code:
    docker:
      - image: circleci/node:latest
    working_directory: ~/circleci-deployment
    steps:
      - checkout
      - attach_workspace:
          at: ~/circleci-deployment
      - restore_cache:
          keys:
            - yarn-cache-{{ .Branch }}-{{ checksum "yarn.lock" }}
            - yarn-cache-{{ .Branch }}
            - yarn-cache-
      - run: yarn install
      - save_cache:
          key: yarn-cache-{{ .Branch }}-{{ checksum "yarn.lock" }}
          paths: node_modules
      - persist_to_workspace:
          root: .
paths: .
```

We will also want to specify the working directory for the environment. By default the file structure on CircleCi will look like this now:

```bash
Container 0 > home/circleci/circleci-deployment
```

## Working in the Workspace with Workflows

CircleCi 2.0 gives us workflows and to make use of this feature we will use two commands `attach_workspace` & `persist_to_workspace`. At the beginning of any job in which we want to use the current workspace data in the container we will add:

```yaml
steps:
  - attach_workspace
	  at: ~/circleci-deployment
```

Adding this command lets the current job have access to any _persisted_ data from jobs ran **before** it. So having access to, for instance, the `./node_modules` directory from here on out would probably be a pretty good thing.

When _persisting_ data we will add at the end of the job:

```yaml
- persist_to_workspace:
	root: .
	paths: .
```

Now when we move on to a job that _attaches_ the workspace we will have `~/circleci-deployment/node_modules`. If you are wondering why `node_modules` is inside of `circleci-deployment/` remember at the beginning of each job we state the `working_directory` and that `.` denotes the current directory we are located.

By using these commands in specific jobs we can now run certain jobs in parallel instead of running all jobs in series.

> _**NOTE**: When persisting to the workspace keep in mind that you cannot persist concurrently running jobs, this can only be done in series._

## Caching

Caching can significantly cut down on the time it takes CircleCi to run the entire process from start to finish. The first process we tell CircleCi to do is to `restore_cache`. This step will look to see if a cache exists in the working directory. If it does not this step will be skipped and CircleCi will run `yarn install` to install the dependencies and then `save_cache` to `node_modules` in the working directory.

We tell CircleCi to save using a specific `key` for the `save_cache` step to use with `restore_cache`. Should a cache exist when the `checkout_code` job is ran it will first look for a specific `yarn.lock` on the current branch, or it will look for a cache on any build on this branch, or finally the most recent cache from any branch. By setting up `restore_cache` in this manner CircleCi will search for the most recent & specific cache. In the event nothing has changed `yarn install` will not need to pull in new or updated dependencies, no wasted time! However let’s say we are currently using `react@15.6.0` and we update to `react@16` before pushing to our new branch: `react-16-woot-woot`. First CircleCi will look for a `yarn.lock` on this branch, but it’s a new branch so no dice and since it’s a new branch there are no prior builds so it reverts to the most recent cache from the most recent branch. When restoring the cache the diff will show that `react` has changed and when running `yarn install` yarn will go fetch and update **only** `react` in our dependencies in the container instead of fetching all our dependencies that are listed saving a lot of time (remember how long installing `create-react-app` took!).

## Using Node Security Platform

I found this one day while aimlessly roaming the net and gave it a try. Similar to [Snyk](https://snyk.io/) it will scan your dependencies looking for vulnerabilities. The package can be used by running `yarn install -D nsp` and adding `nsp check` to your scripts. I like using this with continuous integration because I can fail a build prior to releasing to production if a vulnerability is found. I can then check to see if this vulnerability is truly something I should be concerned about and begin work on a fix.

> _Many thanks to [Mark Erikson](https://twitter.com/acemarke) for showing me how to use `yarn why` to find out why a dependency is being used and to the Yarn team for this nifty feature!_

In the below I check to see if this is the _production branch_ and check for vulnerabilities; any other branch regardless if there is a fail will pass the step with `|| true` for sake of _getting $@#% done_ (I can always go look at the logs before pushing to production to see if nsp has been catching issues. A quick aside, you can write `bash` directly into your YAML or reference an external script `command: bash ./some_script.sh`.

For more information on Node Security Platform visit their [website](https://nodesecurity.io/).

```yaml
check_vulnerabilities:
    docker:
      - image: circleci/node:latest
    working_directory: ~/circleci-deployment
    steps:
      - attach_workspace:
          at: ~/circleci-deployment
      - run: yarn install
      - run: |
            if [ "${CIRCLE_BRANCH}" == "production" ]; then
              yarn validate:dependencies
            else
              yarn validate:dependencies || true
            fi
```

## Testing

From the `create-react-app` docs we must pass `CI=true` when running the build and test script; and we will run the `test:coverage` script to generate the coverage data needed by [CodeCov](https://codecov.io/). Notice we don’t _persist_ the workspace here because we have no need for any of the data generated by this job in any following jobs. However we do need access the `node_modules` thus we _attach_ the workspace. Then we store our artifacts & test results in the container before finishing the job.

```yaml
test_and_report:
    docker:
      - image: circleci/node:latest
    working_directory: ~/circleci-deployment
    steps:
      - attach_workspace:
          at: ~/circleci-deployment
      - run: yarn install
      - run: CI=true yarn test:coverage
      - run: yarn reportCoverage
      - store_artifacts:
          path: ./coverage/clover.xml
          prefix: tests
      - store_artifacts:
          path: coverage
          prefix: coverage
      - store_test_results:
path: ./coverage/clover.xml
```

## Building

```yaml
build:
    docker:
      - image: circleci/node:latest
    working_directory: ~/circleci-deployment
    steps:
      - attach_workspace:
          at: ~/circleci-deployment
      - run: yarn install
      - run:
          name: yarn build
          command: |
            if [ "${CIRCLE_BRANCH}" == "production" ]; then
              CI=true PUBLIC_URL=https://circleci-deployment-production.now.sh yarn build
            elif [ "${CIRCLE_BRANCH}" == "development" ]; then
              CI=true PUBLIC_URL=https://circleci-deployment-alpha.now.sh yarn build
            elif [ "${CIRCLE_BRANCH}" == "master" ]; then
              CI=true PUBLIC_URL=https://circleci-deployment-beta.now.sh yarn build
            else
              echo "This failed miserably!"
            fi
      - persist_to_workspace:
          root: .
paths: .
```

I ran into a bit of a problem when deploying initially and it dealt with the `PUBLIC_URL` environment variable from `create-react-app`. When running locally this will be set to the path on your local machine (i.e. `/chucknorris/my-project/build`). When running on CI this will end up being the path for the container. It presents a pretty sweet CORS related problem because our deployment instance from Zeit is `https://someUrl-hash.now.sh` and our assets even though deployed and in the cloud do not correlate with this url.

```html
<!-- PUBLIC_URL if not explicitly set to alias. -->
<link href="/rockchalkwushock/home/circleci/circleci-deployment/static/css/main.c17080f1.css" rel="stylesheet">

<!-- PUBLIC_URL when explicitly set. -->
<link href="https://circleci-deployment-beta.now.sh/static/css/main.c17080f1.css" rel="stylesheet">
```

The fix I found was to set `PUBLIC_URL` at the time of the build process; by doing this I could then alias the deployment instance to whatever I had set that env var to be later on in the deployment job.

> _**NOTE**: use `now.sh` if you do not have a domain or you will be asked to purchase the domain by Zeit and the CI will hang at this prompt. If you have your own domain already just supply it as shown._

## Deploying

Before writing the deployment job we will need to get the `NOW_TOKEN` from Zeit and supply it as an environment variable to CircleCi.

> _**NOTE**: You will need to create an account with Zeit and can do so very easily. If you are new to Zeit’s Now platform checkout this [article](https://medium.com/@RockChalkDev/deploying-with-zeits-now-cli-796e41f05102)!_

Visit [Zeit](https://zeit.co) & login to your account. Click on your avatar and navigate to Account Settings > Tokens. Copy the token and then navigate to CircleCi. From your homepage find the project deployment and click on it. Now click on the gear in the right corner. You should see Environment Variables in the left hand side bar, click this. Now you can add the token as an environment variable to your deployment. At build time this will be injected in place of `NOW_TOKEN` authenticating the process with Zeit.

In the deployment job we must install `now` globally to the container so it has access to this command.

```yaml
deployment:
    docker:
      - image: circleci/node:latest
    working_directory: ~/circleci-deployment
    steps:
      - attach_workspace:
          at: ~/circleci-deployment
      - run: yarn install
      - run: sudo yarn global add now
      - deploy:
          name: Deploy & Alias.
          command: |
            if [ "${CIRCLE_BRANCH}" == "production" ]; then
              now build -t ${NOW_TOKEN} -n=circleci-deployment --static
              now -t ${NOW_TOKEN} alias circleci-deployment-production.now.sh
            elif [ "${CIRCLE_BRANCH}" == "development" ]; then
              now build -t ${NOW_TOKEN} -n=circleci-deployment --static
              now -t ${NOW_TOKEN} alias circleci-deployment-alpha.now.sh
            elif [ "${CIRCLE_BRANCH}" == "master" ]; then
              now build -t ${NOW_TOKEN} -n=circleci-deployment --static
              now -t ${NOW_TOKEN} alias circleci-deployment-beta.now.sh
            else
              echo "This failed miserably!"
            fi
```

> _I am currently still working on figuring out how to cache the global install since we don’t need to install this command every time we run the deployment job._

CircleCi gives us a `deploy` command which works similarly to run. We will check which branch we are currently on and based on that we will know how to alias the deployment.

```bash
now build -t ${NOW_TOKEN} -n=circleci-deployment --static
```

In the above command we tell `now` to deploy (`now deploy` is the default command when calling `now`) the `./build directory`. We then authenticate via the CLI with the `NOW_TOKEN`. We will name the deployment so that our instance comes back looking like: `https://circleci-deployment-1gaff324r.now.sh` and lastly we will explicitly tell `now` this is a static deployment with `--static`.

> _**NOTE**: If you omit `--static` `now` will default to a `node` deployment because it sees a `package.json` & will run the `build` & `start` scripts from this file._

```bash
now -t ${NOW_TOKEN} alias circle-deployment.now.sh
```

The above command once again authenticates with Zeit, but will now take `https://circleci-deployment-1gaff324r.now.sh` and point it to `https://circleci-deployment-beta.now.sh` a little friendlier url to show your team or customer when in development. If you have your own domain like `my-domain.com` you can use that as well.

## Writing the Workflow

After our `deployment` job we can now begin writing the workflow for CircleCi to use. Below is what the general format will look like:

```yaml
version: 2
jobs:
 <job_name>:
	docker|machine:
	working_directory:
	steps:
	  - one
	  - two
workflows:
  version: 2
  <workflow_name>:
	jobs:
	  - job_1
	  - job_2
```

We will want to use some added bells and whistles in our workflow like `requires` & `filters`.

```yaml
workflows:
  version: 2
  test_build_deploy:
    jobs:
      - checkout_code
      - check_vulnerabilities:
          requires:
            - checkout_code
      - test_and_report:
          requires:
            - checkout_code
      - build:
          requires:
            - checkout_code
          filters:
            branches:
              only:
                - development
                - master
                - production
      - deployment:
          requires:
            - check_vulnerabilities
            - test_and_report
            - build
          filters:
            branches:
              only:
                - development
                - master
                - production
```

When using `requires` we are setting the jobs to run in series and should, for example, `checkout_code` fail the entire build will fail and stop. You can require any job as long as it was **before** the current job you are requiring it on. I really only want to build & deploy to Zeit when on specific branches. So if I had a branch like [feat/button](https://circleci.com/workflow-run/c983c64a-78e9-4a8d-8fdc-2eeb6fdcdaaa) I don’t want to build & deploy this I only want to test that it is not breaking the code base. This is where the `filters` option comes into play. You can provide it with options like `branches` and `tags` and to those options two more options `only` and `ignore`. So in my example I am only ever wanting to build & deploy when on `development`, `master`, or the `production` branch. You can see what the workflow looks like [here](https://circleci.com/workflow-run/2348a715-e98a-48b3-a745-d3afafc9335f) on the `development` branch and see that the same workflow fails on the `production` branch because there is currently a vulnerability [here](https://circleci.com/workflow-run/488701b9-7ecd-489e-a7fc-824a8d40c220). By using the workflows we can have 3 of our jobs running concurrently because these jobs don’t depend on one another, and we can choose which jobs will fail the `deployment` job.

## Wrap Up

Now you have seen some of the new firepower that CircleCi 2.0 can provide you with when automating your tests, build, & deployment process. For more information and to get started with CircleCi’s examples visit the [2.0 Documentation](https://circleci.com/docs/2.0/). You can find the complete `config.yml` file in this [gist](https://gist.github.com/rockchalkwushock/f2946819e0d28f79028da5e2d8d1ee16) and checkout the other code at the [repository](https://github.com/rockchalkwushock/circleci-deployment). As stated at the beginning this is only one of many ways you can configure things and you should experiment and find out what will work best for your project needs.

Many thanks to [Macklin Underwood](https://twitter.com/macklinu) for his [post](http://macklin.underdown.me/2017/07/27/deploy-to-now-from-circleci).

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
