# Nuxt Auth Firebase Micro

A project for testing the simplest and fastest authentication solutions for a web application. Possibly also for UI libraries. Built with Nuxt, because it's the simplest choice. Eventually, it will include multiple ready-made variants across different branches.

## Nuxt 3 + Firebase Auth

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Development

I will use Bun for now:

```bash
bun i
bun dev
```

Start the development server on [http://localhost:3000](http://localhost:3000)

### Notes from testing

#### test 1 - only new fresh nuxt 3.16.2
https://pagespeed.web.dev/analysis/https-dev-vitae-website/5c1oqq9c2z?form_factor=mobile
https://pagespeed.web.dev/analysis/https-dev-vitae-website/5m77cwhpsq?form_factor=mobile


initial budle 63.3 kB
css 2.8 kB
ssr 16.7kB
all 89.8kb trnsfered
400kB resources


#### test 2 - clean nuxt 3.16.2 - hello word
https://pagespeed.web.dev/analysis/https-dev-vitae-website/rvwmrsi14t?form_factor=mobile

initial budle 47.7 kB
css 0
ssr 794 B
all 55.9kB trnsfered
130kB resources