---
name: Portfolio
shortName: portfolio
shortDescription: Hosted personal portfolio and CV
languages: ['TypeScript']
frameworks: ['Vue', 'Svelte', 'Astro']
type: hobby
start: 2022-09
---

# Portfolio

This webpage, started originally in 2022 September. Acts as my portfolio and CV. Uses [Astro](https://astro.build/) framework
as the base, with some components written in Vue and Svelte.

[See source code on GitHub.](https://github.com/joonas175/portfolio)

## First implementation

Started project with [SvelteKit](https://kit.svelte.dev/), and I had many ideas for the portfolio.
With SvelteKit, I went with the server side rendering option, including Express.js backend
for serving static content and endpoints. The server was made to run on my Raspberry Pi server,
[which can be seen from the old commits](https://github.com/joonas175/portfolio/commit/cf8648d672a4955b23873dd0a52fdd58713b1b1d).

The [Jenkins](https://www.jenkins.io/) pipeline for deploying the portfolio to a [Docker](https://www.docker.com/) 
container on my server was the only "complete" feature I got.
Initial UI sketching was done, but I wasn't satisfied with it ever. I planned an entire [CMS](https://en.wikipedia.org/wiki/Content_management_system) 
for the portfolio, with simple control panel and content editor, thus removing the need to deploy the project every time
new content was made available. Never got to the implementation part.

## Current implementation

After scrapping the CMS idea, I started the project from scratch with Astro. CMS functionality
was too much to implement at the time, and Astro seemed to provide an easier alternative.
Some ideas were taken from the previous implementation though, like the site title header.
Choosing Astro with static site generation over CMS was a good choice. My new apartments
internet connection seemed to cut off every now and then, requiring router reboot, which made hosting on 
my own server not so optimal.

The new project started easily. In just one day, I got the first sketch up and running on GitHub Pages.
Not much later, I added my own domain. Then, a couple of months went by with no additional features done,
as I was so focused on my job. Then came the 2 week vacation, when I was supposed to continue writing
my master's thesis, but decided to procrastinate it even further and continued on my portfolio. 
In just a week, I was pretty satisfied with the UI. Adding content was also really easy with 
[content collections](https://docs.astro.build/en/guides/content-collections/). After the UI implementation,
there wasn't much else to do than start writing markdown files for content.

## Future?

Tbh, I'm pretty satisfied with result as of writing. I do have plans to continue on this in future with 
additional features, and content will be kept up-do-date.
One thing I would like to see, is a blog page at some point. I have no idea what I'm going to write about,
but my experiments with honey mead and beer brewing might be one topic. I'm not sure about about making
blog posts about programming, since most of my thoughts about my projects and work are written in these project pages.
We'll see.
