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

Table with test results of Gzip sizes in Chrome Incognito mode (Not perfect, but fast).

| ~SSR    | initial budle |    css |   trnsfered | recurces | step & note          |
| ------- | ------------: | -----: | ----------: | -------: | :------------------- |
| 16.7 kB |       63.3 kB | 2.8 kB |     89.8 kB |   400 kB | 1 fresh nuxt 3.16.2  |
| 794 B   |   **47.7 kB** |      0 | **55.9 kB** |   130 kB | 2 clean nuxt 3.16.2  |
| 801 B   |       79.4 kb |      0 |     87.6 kB |   285 kB | 4 firebase auth init |

#### step 1 - only new fresh nuxt 3.16.2

- https://pagespeed.web.dev/analysis/https-dev-vitae-website/5c1oqq9c2z?form_factor=mobile
- https://pagespeed.web.dev/analysis/https-dev-vitae-website/5m77cwhpsq?form_factor=mobile
- 100 / 95 / 100 / 83
- 1.4s / 1.5s / 0 / 0 / 1.4s

#### step 2 - clean nuxt 3.16.2 - hello word

- https://pagespeed.web.dev/analysis/https-dev-vitae-website/rvwmrsi14t?form_factor=mobile
- Performance / Accessibility / Best Practices / SEO
- 100 / 68 / 100 / 82
- First Contentful Paint / Largest Contentful Paint / Total Blocking Time / Cumulative Layout Shift / Speed Index
- FCP / LCP/ TBT / CLS / Speed Index
- 0.8s / 0.8s / 0 / 0 / 0.8s

#### step 3 - dev dependencies

https://pagespeed.web.dev/analysis/https-dev-vitae-website/cij810gcea?form_factor=mobile

No changes.

```
bun add -D @nuxt/eslint eslint typescript vue-tsc
bun add -D prettier eslint-config-prettier eslint-plugin-prettier
```

#### step 4 - initialize firebase dependencies in plugin

```
  const firebaseConfig = { ... }
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  return auth
```

- https://pagespeed.web.dev/analysis/https-dev-vitae-website/cij810gcea?form_factor=mobile
- 100 / 73 / 100 / 82
- 0.8s / 0.8s / 0 / 0 / 0.8s
