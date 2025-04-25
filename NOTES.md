### Notes @todo

- test: https://vueuse.org/functions.html#category=%40Firebase

### Notes @todo

- test with ui frameworks

### Notes from testing

Table with test results of Gzip sizes in Chrome Incognito mode (Not perfect, but fast).

| bd. kB |  gzip |   `diff` | step & note              | req |     SSR |   css | xfr. | res. |
| -----: | ----: | -------: | :----------------------- | --: | ------: | ----: | ---: | ---: |
| 220.49 | 63.31 |        - | fresh nuxt 3.16.2        |     | 16.7 kB | 2.8kB | 89.8 |  400 |
|        | 47.70 |    -15.6 | clean nuxt 3.16.2        |     |   794 B |     0 | 55.9 |  130 |
|        |       |          | firebase auth init       |     |   801 B |     0 | 87.6 |  285 |
|        |       |          | stylling, web vitals fix |     |   954 B |     0 | 89.4 |  296 |
|        |       |          | + login form             |     |  1.2 kB |     0 | 94.3 |  315 |
|        |       |          | + login form is Lazy     |     |  1.2 kB |     0 | 94.9 |  315 |
|        |       |          | login check plugin       |     |  1.2 kB |     0 |   96 |  316 |
|        |       |          | logout                   |     |  1.3 kB |     0 | 96.9 |  317 |
| 276.31 | 96.23 |   +14.84 | `router`                 |  13 |  1.3 kB |     0 |  110 |  296 |
| 276.47 | 96.31 |    +0.08 | add isAuthCheck          |  12 |  1.3 kB |     0 |  109 |  296 |
| 273.80 | 95.36 |    -0.95 | router in if             |  13 |         |       |      |      |
| 237.45 | 81.39 |   -13.97 | router to component      |  13 |         |       |      |      |
| 273.90 | 95.41 |        - | step back                |  18 |         |       |      |      |
| 273.91 | 95.39 |        - | ....                     |  18 |         |       |      |      |
| 273.91 | 95.39 |        - | ....                     |  18 |         |       |      |      |
| 273.87 | 95.40 |        - | 12:38 21 april..         |  18 |         |       |      |      |
| 273.89 | 95.41 |    +0.02 | login errors             |  18 |   879 B |       |  116 |  299 |
|     -- |    -- |        - | ....                     |  -- |         |       |      |      |
| 278.58 | 96.85 | +1.15 kB | errors v2.0              |  13 |   879 B |       |      |      |
| 279.19 | 96.91 |  +0.1 kB | instal pinia             |  13 |   828 B |       |      |      |
|  282.2 | 98.21 | +1.36 kB | instal pinia             |  12 |   828 B |       |      |      |

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
