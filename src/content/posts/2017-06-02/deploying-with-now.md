---
date: "2017-06-02"
description: "How to deploy with Zeit's Now platform."
draft: false
keywords: "now-cli, Zeit, command-line, JavaScript, Docker, deployments, hosting"
title: "Deploying with Now"
tags: ["cli", "deploying", "Docker", "hosting", "JavaScript"]
---

I am a huge fan of what [Zeit.co](https://zeit.co) is doing these days. Seems whatever they put out is a winner & the [now-cli](https://zeit.co/now) is no different. One three letter word can deploy your product in literally a matter of seconds. In this post I will walk through the basics of deploying using the now-cli as well as touch on some of the configurations, aliasing, buying domains, & scaling with the new `now scale` command. Please note this is being written from the standpoint of deploying node based projects; however information on static & docker deployments can be found as well.

The now-cli offers developers the ability to deploy immutable instances of their code base instead of updating the same deployment over and over again as changes are made to the code base. This provides the developer the ability to:

1. see their product in a live production sandbox,
1. catch any bugs before aliasing to the production domain,
1. and the ability to provide a functional product instance for testing or review by other developers &/or customers.

Developers can deploy git repositories, static sites, npm, & docker projects via urls ending with now.sh. These instances of your project can easily be generated using, `now`, & removed using, `now rm <url>`. When you are ready to show the world your new shiny toy aliasing the now.sh to a domain is a breeze: `now alias set <url> <your-domain>`. I have cooked up a few examples in this repository that demonstrate deploying next.js, static, create-react-app, & docker projects.

## Downloading the CLI

The first thing you will need to do is to install the now-cli, or use the [now-desktop-client](https://zeit.co/download).

```bash
npm install now -g
# or
yarn global add now
```

If you are wanting to use pre-built binaries they can be found [here](https://zeit.co/download#command-line) as a third option for installation. Now that we have now-cli installed we can get started. From your user directory you can run either `now` or `now login`:

```bash
rcws-dev in ~ $ now login
> Enter your email: rockchalkwushock@icloud.com
> Please follow the link sent to rockchalkwushock@icloud.com to log in.
> Verify that the provided security code in the email matches Calm Zebu.

Confirmed email address!

> Logged in successfully. Token saved to ~/.now.json.
> Run now to deploy the current directory, or now --help for usage info.
```

Now that you have an account set up with Zeit it is as easy as navigating to your project directory and running the command `now`.

```bash
rcws-dev in deploying-with-now on master $ now
> Deploying ~/Desktop/deploying-with-now under rockchalkwushock
> Using Node.js 8.0.0 (default)
> Ready! https://now-deployment-elnwzhlhee.now.sh (copied to the clipboard) [2s]
> Initializing...
> Building
> npm install
> Using "yarn.lock"
> Installing 8 main dependencies..
> Installed 591 modules [11s]
> npm run build
> deploying-with-now@0.1.0 build /home/nowuser/src
> next build
> Using external babel configuration
> location: "/home/nowuser/src/.babelrc"
> Using "webpack" config function defined in next.config.js.
> Webpack Bundle Analyzer saved stats file to /tmp/045587b0-a8a5-4a66-aaff-1718a11a1167/.next/stats.json
> npm start
> deploying-with-now@0.1.0 start /home/nowuser/src
> next start
> Deployment complete!
```

You will see the following logs indicating the deployment was successful and upon navigating to the now.sh url present in the logs you will see your project live and in production! It is seriously that easy...however there are some caveats when it comes to the _type of deployment_ that we will need to touch on:

1. static: easy peasy, no build process so just run `now`!
1. npm: now specifically looks for 1 of 3 options: `npm start`, `now-start`, `./server.js` **please take note the naming of this file is explicit**! If none are present then you will get a nasty error message.
1. docker: now will be searching for a `DockerFile`.
1. git-repository: will depend on which of the above 3 types the repository happens to be. `now username/repository` will be enough unless there are environment variables that must be passed as well.

As long as the criteria for your given type of deployment are met `now` will do its job & deploy your project. As an aside the now-cli does offer commands to enforce a type of deployment:

```bash
now --npm
now --docker
now --static
```

## Configuring Environment Variables

Through the cli options you can set your env vars in the cloud with Zeit by performing:

```bash
now secrets add ENV_VAR "env_var"
# other useful now secrets commands
now secrets rm ENV_VAR
now secrets ls
```

When using this env var you will need to reference it via `@env_var` for the now-cli to recognize it. So as an example from a script in your `package.json` you would run:

```bash
now -e ENV_VAR=@env_var
```

Passing the `-e` flag tells now to utilize this env var in the deployment at runtime.

## Naming Deployments

`now` by default will look at `package.name` in the `package.json` when naming your deployment; but should you want to name it something different, perhaps this deployment is a mock up for your customer to review you can run the following:

```bash
now -n "mock-up"
```

When you see your deployment url you would now see the following:

```bash
https://mock-up-8t6u7t5o3n0e9.now.sh
```

## Creating Aliases for your Deployments

Should you be ready to show the world your new and improved Facebook or Medium you probably do not want to hand them a url with a hash in it and ending in now.sh. Zeit makes it easy to alias your shell instance to a domain using the cli:

```bash
now alias set https://now-deployment-elnwzhlhee.now.sh nowDep.com
# other useful now alias commands
now alias rm <aliasId>
now alias ls
```

## No repeating commands with `now.json`

We tend to do a lot of typing and unfortunately at times a lot of repetitive typing. You can save yourself those keystrokes by placing those commands in a `now.json`. This file will be the first thing that now looks for & any runtime configurations that have been set here will be taken into account for the deployment. You can also create `package.now` in your `package.json` to achieve the same. The following is an example of the `now.json`:

```json
{
  "alias": "nowDep.com",
  "env": {
    "ENV_VAR": "@env_var",
    "NODE_ENV": "production"
  },
  "files": [
    "components",
    "pages",
    ".babelrc",
    ".env-config.js",
    "next.config.js",
    "now.json",
    "package.json",
    "yarn.lock"
  ],
  "name": "now-deployment"
}
```

For more information on the now.json you can refer to the documentation found [here](https://zeit.co/docs/features/configuration).

**NOTE** when setting `NODE_ENV=production`:

1. the syntax does not require the `@` character prefix,
1. and **ONLY** your dependencies will be installed.

For more information on this topic look [here](https://zeit.co/docs/deployment-types/node#ignoring-%5Bobject-object%5D).

**NOTE**: `now` by default looks at the `.gitignore` file for referencing what should and should not be deployed from your project directory. Should the project contain a `.npmignore` `now` will default to what has been set inside of it and disregard the `.gitignore`. In all cases however if you have set the `files` to explicitly be added in the `now.json` the prior files will be ignored completely. So if you absolutely want some file or directory deployed then you should list it in the `now.json` under the `files` array or in `package.now.files`. For more information on this topic look [here](https://zeit.co/docs/features/now-cli#selecting-files-and-directories-to-be-uploaded).

## Buying Domains through the CLI

Zeit has its own global DNS available to you through [zeit.world](https://zeit.co/world). Of course you can bring your own domain if you would like and you can find info on how to do that [here](https://zeit.co/docs/features/aliases#custom-domains). To use the Zeit DNS you will need to put a credit card on file using the CLI:

```bash
now billing add
# other useful now billing commands
now billing rm <id>
now billing ls
```

Once you have a credit card on file you can simply run:

```bash
now domains buy <url>
# other useful now domains commands
now domains rm <url | domainId>
now domains ls
```

The Zeit DNS will search to make sure the domain is available for purchase and tell you the cost of the domain. After purchasing you can alias the domain as discussed above.

## Scaling with Now

On May 22nd Zeit introduced `now scale` a command for developers to use for scaling their deployments with ease by giving them access to some of Zeit's scaling capabilities. To read what the dev team has to say about this feature [read this](https://zeit.co/blog/scale). In short scaling is now as easy as:

```bash
now scale <url>
```

You are able to declare added options like the minimum & maximum number of instances to be running and can use the _auto_ option with these to tell Zeit to auto-scale the range of instances given based on traffic to your site.

```bash
now scale <url> 1 5
# a minimum of 1 instance should always be running.
# a maximum of 5 instances should be running when traffic increases.
```

## Pricing Plans

Zeit recently restructured their [pricing plans](https://zeit.co/pricing) making it possible even on the free OSS plan to deploy infinite instances & static deployments are free & unlimited, [more here](https://zeit.co/blog/unlimited-static). The way this works is that you may deploy N number of instances; but depending on your plan you can only have X number of concurrent instances running, X being a finite number defined by your plan. As an example I am on the Premium plan. I can deploy as many instances as my heart desires; however I can only have 10 concurrently running instances. Should I exceed that number all instance in excess are now priced via the on-demand plan.

If a deployment has not been scaled using `now scale` it will go to a frozen state after being inactive for X amount of time. It will now no longer be an active instance so it does not count against you anymore on your number of concurrent instances. You can check the number of active instance you have running via `now ls`:

```bash
rcws-dev in deploying-with-now on master $ now ls
> 5 deployments found under rockchalkwushock [507ms]

now-deployment (1 of 1 total)
url                                        inst #    state                 age
now-deployment-jxcaxfnyza.now.sh                1    READY                  3d

static (1 of 1 total)
url                                        inst #    state                 age
static-eqlwnjuwht.now.sh                        ✖    READY                  3d

docker (1 of 1 total)
url                                        inst #    state                 age
docker-ztczsemvmg.now.sh                        0    FROZEN                 3d

create-react-app (1 of 1 total)
url                                        inst #    state                 age
create-react-app-lblarmapmp.now.sh              0    FROZEN                 3d

rcws-blog (1 of 1 total)
url                                        inst #    state                 age
rcws-blog-piswirhdom.now.sh                     1    READY                  9d
```

As talked about before all static deployments are free so you see the X for the static deployment and you can see that I have 2 instances that are running. These being scaled to never sleep. You can also see this from your dashboard on Zeit’s website.

As the supporting dev team & the open source community work together this amazing tool from Zeit will only continue to get better and better. The next time you are thinking about who to deploy one of your projects with my hope is you will join the Zeit community & deploy with now!

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
