---
date: "2017-12-18"
description: "What I learned while rebuilding my site/blog with Hugo."
draft: false
keywords: "Hugo, CMS, blog, now-cli, Zeit"
title: "Rewriting my site with Hugo"
tags: ["Hugo", "cli"]
---

I had heard of [Hugo](https://gohugo.io) a while back, but never really looked into much until recently. I decided I wanted to give it a go with rewriting my website and this post is about what I learned along the way.

## Getting Started

Super easy and you gotta love that as a developer. I’m on a Mac and use `homebrew` :

```bash
brew update
brew install hugo
# verify install
hugo version
```

## Generating a new site

With `hugo` you have quite a few commands and I advise you to run `hugo help` to get more acquainted with what you have available to you. To generate a new _site_ or project:

```bash
hugo new site my-first-hugo-site
```

You now have a directory by this name with the basic starting point for any `hugo` site. The most important thing to look at first is that file with the weird extension I’d never heard of the `config.toml`.

## File structure & configuration

`hugo` bases everything it does off of the `config.<toml|yaml|json>`. I personally like `yaml` syntax better so I went with that. `hugo` has some predefined keys that you can find [here](https://gohugo.io/getting-started/configuration/). This file basically holds the default variables you set for your site. You can create custom variables and should place them under `.Site.Params.<your-var-here>`. I say this because `hugo` does have some other keys defined already like `menu`, `params`, & `social`. They are all there for their own reason so saying something like `menu: true` will make `hugo`’s internals get really angry with you :joy:

The file structure is very important with `hugo` so I will touch on each briefly.

### Archetypes

The `archetypes` directory is going to hold these template like markdown files that you can customize. Basically when you run a command to generate new content `hugo` will add the default front matter to the file. If you want to customize the front matter that is placed in content then you can create custom archetypes such as `archetypes/posts.md` then when executing the below command `hugo` will look to `posts.md` instead of the default archetype values:

```bash
hugo new posts/post-1.md
```

### Content

The `content` directory is just what it sounds like: the content of your site. Any post, blog, etc etc that you make needs to go here and further more should be generated using the CLI commands like shown above to take advantage of the archetypes. You can have nested directories as well: `posts/2017/`. Your directories in `content/` can make use of `_index.md` to populate front matter or content on your list pages. For instance if you travel to `/posts/` on this site an `_index.md` is supplying front matter to determine the scripts and CSS to be loaded as well as the title and meta data.

### Data

This directory is like a miniature database for your site. You can use `toml|yaml|json` files and the data is accessible in your pages as `.Site.Data.<filename>`. You can find an [example](https://github.com/rockchalkwushock/codybrunner.rocks/blob/master/data/projects.json) of this being used on my [portfolio](https://codybrunner.rocks/portfolio/) page.

### Layouts

The `layouts` directory is where all your templates that will render out as beautiful views are to reside. This directory can be a real pain in the ass to understand because there are so many different ways to go about building your templates. `hugo`’s site discusses at great lengths the [_look up order_](https://gohugo.io/templates/lookup-order/) of templates so you understand where it will look first and how what you are doing might be getting overridden if you have two conflicting entities. For example if you use the `_default/baseof.html` and define a `content/index.html` with no reference in the `index.html` to _defining the main block_ `hugo` will ignore your `baseof.html` and only render the `index.html`. Very important to understand this directory and the different ways to load templates.

A really cool feature that `hugo` has that I personally love are `shortcodes` and the directory for them will be located in the `layouts` directory too because they technically are templates, that you will call in your markdown content. Basically the development team for `hugo` said it looks really crappy to put a bunch of html markup directly in your markdown that you want to yield to the browser as html markup so to cut down on all that garbage we will make these functions that render templates. If you look at this [post](https://github.com/rockchalkwushock/codybrunner.rocks/blob/master/content/posts/2017/hello-world.md) I am using two custom `shortcodes` to render the Scrimba and YouTube links as embedded videos straight from my markdown file.

### Static

This directory is where all your static assets should go. Its contents will be copied at compile time into the `public` directory by `hugo`.

### Themes

This directory is where `hugo` will look to see if you are using any predefined themes. You can see how to make use of predefined themes in the [quick start guide](https://gohugo.io/getting-started/quick-start/) on `hugo`'s site.

## Templating, me no likey

Coming from `react` I can say I’m not a fan of templates, but I understand now how they are really similar to what I’m doing in `react`. The only downside I felt was knowing what variables were available to me and how to call them properly. In `react` I know what _props_ are available from the parent and `props.<someKey>` will get me what I want. Call me picky and familiar with a framework I don't care :joy:

> _"Do I use .Site, maybe .Page, maybe...screw it throw the kitchen sink at it and see what works!"_

### React

```jsx
// Post.jsx
const Post props =>
  <div>
    <h2>{props.title}</h2>
    <h5>{props.date}</h5>
    <p>{props.content}</p>
    { props.highlight
      ? <script>hljs.initHighlightingOnLoad();</script>
      : null
    }
  </div>
```

### Hugo

```html
<!-- _default/single.html -->
<div>
  <h2>{{ .Title }}</h2>
  <h5>{{ .Date }}</h5>
  <p>{{ .Content }}</p>
  <!-- .<Variable> but then .Params.<variable> seriously wtf?!?! -->
  {{ if .Params.highlight }}
    <script>hljs.initHighlightingOnLoad();</script>
  {{ end }}
</div>
```

As I said in the intro to this post `hugo` wants to display data to your end users in one of two formats: a _list_ or a _single_ piece of data. You could think of when you traveled to the _blog section_ of this site you were presented with a list of posts and this post you are reading now is a single post or piece of data.

### Lists

When you were on the `/posts/` route of this site `hugo` was making use of a `list.html` template. In the case of my site I used the `layouts/section/<section>.html` method for all my list views. For example when you travel to my portfolio or certifications these are also list views, but the styling and markup is different from the posts list. Instead of having a `_default/list.html` with a lot of conditionals to determine what markup to make use of I decided to make use of the `sections` directory. The key with using this is that if you have `/content/posts/` then you should have `/section/posts.html`. This will tell `hugo` when a user navigates to `/posts/` render the list template for that section.

### Singles

The bulk of the data in a `single` template will revolved around `{{ .Content }}`. This post you are reading now is essentially all coming from the _content_ of a the related markdown file. Most of the front matter deals with meta data or script/CSS injection.

## _WTF is front matter?_ :confused:

Front matter is basically the data you want to render on the page accessible through page variables and their key/value pairs. I kind of viewed this as my _state_ local to that page. For instance all the individual posts have a substantial amount of front matter:

```yaml
---
title: "Rewriting My Site With Hugo"
date: 2017-12-14T09:13:16-06:00
lastMod: 2017-12-14T09:13:16-06:00
draft: true
author: "Cody Brunner"
description: "What I learned rewriting my website using Hugo."
type: "post"
keywords: ["hugo", "golang", "javascript", "static site generator", "CMS"]
tags: ["hugo", "javascript", "cms"]
# Custom front matter below
cloud: false
evil: true
flip: false
highlight: true
onMedium: false
mediumUrl: ""
share: ["Like it?", "Love it?", "Don't forget to share it!"]
---
```

In my case it's through the front matter of each post that I can control when certain scripts and CSS are loaded or not; or even inject extra content based on if the article was published on Medium as well as on my site.

## Context, and variables, and functions _Oh my!_

In `hugo` there is this thing called _context_ or `{{ . }}`. You will get really familiar with it in a hurry because it is the basis for how data is delivered to your templates. Each page has _context_ and depending on the type of page or content you are working with that _context_ could be slightly different. All of the variables are based off of context: `.Site`, `.Page`, etc. Get familiar with the [variables](https://gohugo.io/variables/) and when they are available to you to save yourself a lot of headaches.

Probably the most significant function that will be used time and time again is the `range` function which if you are coming from a JavaScript background can be looked at as the `map` function. To see all the functions offered to you look [here](https://gohugo.io/functions/).

```jsx
const list = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }]

const ProjectList = ({ list }) => (
  <ul>{list.map(prj => <li key={prj.id}>{prj.name}</li>)}</ul>
)
```

```html
<!-- The array of data comes from ./data/projects.json -->
<ul>
  {{ range .Site.Data.projects }}
    <li>{{ .name }}</li>
  {{ end }}
</ul>
```

## Publishing & Deploying

To generate your production ready site simply run,

```bash
hugo
```

and you will see the `public/` directory has been generated. Since this is static content it can be deployed just about anywhere with relative ease. I am a Zeit fan so I made use of the `now-cli`. To streamline things I made my own function to handle the generation of the site, deployment, and aliasing of the instance to the domain name.

```bash
# ~/.zshrc
# Publish Hugo Site to Now
# $1 - name of deployment
# $2 - alias
# ex: publish my-blog codybrunner.rocks
publish() {
  if [ "$PWD" == $HOME ]; then
    # macOS will throw "permission denied" on rm -rf public anyways
    # but this makes it a lot less scary looking.
    echo "ERROR: Cannot call from home directory."
    return 1
  else
    # Look for 'public/'
    if [ -d "public" ]; then
      # Remove old 'public/'
      command rm -rf public
      echo "Removed old public directory."
      # Generate new 'public/'
      command hugo
      echo "Generated site!"
      # Deploy and pipe the instance url to variable.
      local url=$(now public -n=$1 --static 2>/dev/null)
      echo "Sited deployed to ${url}"
      # Alias deployment with arg and deployment $url
      command now alias $url $2
    else
      command hugo -D
      echo "Generated site!"
      local url=$(now public -n=$1 --static 2>/dev/null)
      echo "Sited deployed to ${url}"
      command now alias $url $2
    fi
  fi
}
```

## My advice for you

Don’t be a stubborn ass like this guy! Use the themes that are already there for you use. Yes there will be a slight learning curve on what those themes are requiring you to pass on certain variables, but most have really good documentation and I believe all include and _example site_ for you to look at and understand better how content is being generated. Unless you just really love building views (_cough cough not this guy_) I suggest use a theme. Read through the variables and templating docs and definitely make use of the [tutorials](https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3) offered up by Mike from [Giraffe Academy](http://www.giraffeacademy.com/) they were a life saver! :raised_hands:

## Wrap Up

I really enjoy using `hugo`…_now_ that things are in place and I don’t have to mess with templates and variables and other craziness that I did not understand initially. Like everything in life there is a learning curve and this one kicked my butt! The simple fact that generating new and consistent looking content is so easy makes me give `hugo` two big :thumbsup: :thumbsup:

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
