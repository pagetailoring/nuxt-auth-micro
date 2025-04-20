# Nuxt Auth Firebase Micro

A project focused on analyzing bundle size with different tools, using the simplest and fastest authentication solutions for a web application. It also considers styling, performance, and potential UI library integrations. Built with Nuxt for simplicity. Eventually, it will include multiple ready-made variants across different branches.

## Tests table

|        | build kB | bd. gzip |     DIFF. |     ssr |    css |    xfr. |   res. | req. |   chunk |
| :----- | -------: | -------: | --------: | ------: | -----: | ------: | -----: | ---: | ------: |
| router |   276.31 | 96.23 kB | +14.84 kB |  1.3 kB |      0 |  110 kB | 296 kB |   13 | 96.5 kB |
| legal  |   237.49 | 81.39 kB |   -2.5 kB |  1.2 kB |      0 | 94.4 kB | 257 kB |   12 | 81.6 kB |
| auth   |   297.05 | 83.85 kB |  +36.5 kB |  1.3 kB |      0 | 96.9 kB | 317 kB |      | 84.2 kB |
| clean  |          | 47.70 kB |  -15.6 kB |   794 B |      0 | 55.9 kB | 285 kB |      | 47.7 kB |
| init   |   220.49 | 63.31 kB |         - | 16.7 kB | 2.8 kB | 89.8 kB | 400 kB |      | 63.3 kB |

### Legend columns

- `ver`: version / test / try
- `build`: first JS chunk size (from build by `nuxt generate`)
- `bd. gzip`: gzipped build size
- `DIFF`: difference between versions
- `ssr`: SSR size **(all data _below_ from network test in** `Chrome DevTools`**)**
- `css`: first CSS file (only or largest)
- `xfr.`: transferred over network
- `res.`: resources loaded by page
- `req.`: number of requests
- `chunk`: first JS chunk size (largest)

### Change log / versions

- router: Add `vue-router` by creating two pages in the Nuxt `pages` folder. (0.1.2)
- legal: Extract legal LICENSES from chunks and consolidate them into /LICENSES.txt. (0.1.1) -2.4 kB.
- auth: Initialize Firebase Authentication and get a reference to the service in plugin, login, logout components. Tools as eslint and prettier. Typescript. Minimal css in inline styles. (version `0.1.0`)
- **_clean:_** `reference point` _just removed NuxtRouteAnnouncer and NuxtWelcome components_
- init: Nuxt Minimal Starter

## Minimal 36.4 kB growth of bundle size

The initial JS bundle size increased by 36.4 kB compared to a bare Nuxt setup, just by adding Firebase Auth in the most minimal way, even without using routing. (version `0.1.0`)

## Nuxt 3 + Firebase Auth

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
[Firebase Authentication](https://firebase.google.com/docs/auth) [web documentation](https://firebase.google.com/docs/auth/web/start)

- [@nuxt/eslint](https://eslint.nuxt.com/packages/module)
- [typescript && vue-tsc](https://nuxt.com/docs/guide/concepts/typescript)

### Development

I will use Bun for now:

```bash
bun i
bun dev
```

Start the development server on [http://localhost:3000](http://localhost:3000)

### Notes from testing

Table with test results of Gzip sizes in Chrome Incognito mode (Not perfect, but fast).

| bd. kB |  gzip | `diff` | step & note              |     SSR | chunk |   css | xfr. | res. | req |
| -----: | ----: | -----: | :----------------------- | ------: | ----: | ----: | ---: | ---: | --- |
| 220.49 | 63.31 |      - | fresh nuxt 3.16.2        | 16.7 kB |  63.3 | 2.8kB | 89.8 |  400 |     |
|        | 47.70 |  -15.6 | clean nuxt 3.16.2        |   794 B |  47.7 |     0 | 55.9 |  130 |     |
|        |       |        | firebase auth init       |   801 B |  79.4 |     0 | 87.6 |  285 |     |
|        |       |        | stylling, web vitals fix |   954 B |  79.4 |     0 | 89.4 |  296 |     |
|        |       |        | + login form             |  1.2 kB |    84 |     0 | 94.3 |  315 |     |
|        |       |        | + login form is Lazy     |  1.2 kB |  83.5 |     0 | 94.9 |  315 |     |
|        |       |        | login check plugin       |  1.2 kB |  83.9 |     0 |   96 |  316 |     |
|        |       |        | logout                   |  1.3 kB |  84.1 |     0 | 96.9 |  317 |     |
| 276.31 | 96.23 | +14.84 | `router`                 |  1.3 kB |  96.5 |     0 |  110 |  296 | 13  |
| 276.47 | 96.31 |  +0.08 | add isAuthCheck          |  1.3 kB |  96.5 |     0 |  109 |  296 | 12  |

### ergo from 2 to 8 initial js bundle size grow 36,4 kB

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

#### step 5 - minimal styling + Accessibility and SEO

- https://pagespeed.web.dev/analysis/https-dev-vitae-website/8xdi6zh61o?form_factor=mobile
- 100 / 100 / 100 / 100
- 0.8s / 0.8s / 0 / 0 / 0.8s

#### step 6 - login component

- https://pagespeed.web.dev/analysis/https-dev-vitae-website/6vtfquzajk?form_factor=mobile

#### step 7 + 8 - login check + logout

- https://pagespeed.web.dev/analysis/https-dev-vitae-website/os7uypxifl?form_factor=mobile
- 100 / 100 / 100 / 100
- 0.8s / 0.8s / 0 / 0 / 0.8s
