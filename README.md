# Nuxt Auth Firebase Micro

A project focused on analyzing bundle size with different tools, using the simplest and fastest authentication solutions for a web application. It also considers styling, performance, and potential UI library integrations. Built with Nuxt for simplicity. Eventually, it will include multiple ready-made variants across different branches.

## Tests table +47,9 kB

|         | build kB | bd. gzip |      diff |     ssr |    css |    xfr. |   res. | req. |   chunk |
| :------ | -------: | -------: | --------: | ------: | -----: | ------: | -----: | ---: | ------: |
| error   |   278.58 | 96.85 kB |  +1.15 kB |   828 B |      0 |  108 kB | 298 kB |   13 | 97.1 kB |
| login   |   274.38 | 95.60 kB |  +0.19 kB |   914 B |      0 |  118 kB | 300 kB |   19 | 95.8 kB |
| login   |   273.89 | 95.41 kB | -14.02 kB |   879 B |      0 |  116 kB | 299 kB |   18 | 95.6 kB |
| lazy    |   237.45 | 81.39 kB | -14,84 kB |  1.3 kB |      0 |   95 kB | 258 kB |   13 | 81.6 kB |
| router  |   276.31 | 96.23 kB | +14.84 kB |  1.3 kB |      0 |  110 kB | 296 kB |   13 | 96.5 kB |
| legal   |   237.49 | 81.39 kB |   -2.5 kB |  1.2 kB |      0 | 94.4 kB | 257 kB |   12 | 81.6 kB |
| auth    |   297.05 | 83.85 kB |  +36.5 kB |  1.3 kB |      0 | 96.9 kB | 317 kB |      | 84.2 kB |
| `clean` |          | 47.70 kB |  -15.6 kB |   794 B |      0 | 55.9 kB | 285 kB |      | 47.7 kB |
| init    |   220.49 | 63.31 kB |         - | 16.7 kB | 2.8 kB | 89.8 kB | 400 kB |      | 63.3 kB |

96.85 - 47.70 = + 49,15 kB minimum with Firebase Auth & routing

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

- error: Add [error.vue](https://nuxt.com/docs/guide/directory-structure/error) nuxt file, for handling errors (`0.2.0`) +1.15 kB in initial chunk but less requests.
- login: Login refactor etc., handling error in login form, step back with lazy loding rooting, blocking of prerender protected rootes, console info (`0.1.3`)
- _lazy: Lazy `vue-router` by moving it to component (`0.1.3`)_
- router: Add `vue-router` by creating two pages in the Nuxt `pages` folder. (`0.1.2`)
- legal: Extract legal LICENSES from chunks and consolidate them into /LICENSES.txt. (`0.1.1`) -2.4 kB.
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

Configure your firebase project at [console.firebase.google.com](https://console.firebase.google.com)

Rename `utils/firebaseConfig.example.ts` to `utils/firebaseConfig.ts`, and update it with your app's information.

I'm using `Bun` for now, but you can use any bundler like `npm`, `pnpm`, `yarn`, or `deno`.

```bash
bun i
bun dev
```

Start the development server on [http://localhost:3000](http://localhost:3000)
