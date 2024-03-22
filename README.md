# React + ReduxTK + TypeScript + Vite + MUI

Digital Object Identifier available for citation at:

[![DOI](https://zenodo.org/badge/360168321.svg)](https://zenodo.org/badge/latestdoi/360168321)
[![Production Build](https://github.com/baharalidurrani/material-domain/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/baharalidurrani/material-domain/actions?query=event%3Apush)
[![Preview Build](https://github.com/baharalidurrani/material-domain/actions/workflows/firebase-hosting-pull-request.yml/badge.svg)](https://github.com/baharalidurrani/material-domain/actions?query=event%3Apull_request)

## Features included

- Built using Typescript.
- Built using the official `redux-toolkit` template.
- All the dependencies in package.json are up-to-date.
- Redux folder structure is all set. Everything is decoupled upon store, slices, actions.
- Common, Type Definitions, Enums, Utils.
- Console Logs disabled in Prod Environment.
- Basic routing is integrated.
- Protected routes.
- Components are divided into Modules, Pages, Components, Molecule and Atom. (Modules being biggest and atom being smallest).
- Module Level Lazy Loading added.
- Material-UI (MUI) is integrated including fonts and icons.
- Basic Material Responsive Layout is added (Header/AppBar, SideNav/Drawer, MainContent).
- Centralized/Global MUI theme is added. (Almost zero CSS is used in the app).
- Auto/Manual Dark/Light theme is added.

### To be added

- OpenAPI/Swagger Service Generator
- or axios interceptors.
- API Service unit tests.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode securely with TLS.<br />
Make sure you have [mkCert](https://github.com/FiloSottile/mkcert) configured properly.
Open [🔒https://localhost:5173](https://localhost:5173) to view it in the browser.

### `yarn build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/static-deploy.html) for more information.

### `yarn preview`

Mimic static hosting from dist folder.

### `yarn serve`

Clean Build and Preview. Handy for testing PWA features.

### `yarn dep:upgrade`

Run to update all packages to their latest version.

### `yarn pretty`

Run to format all files using prettier.

### `yarn lint`

Run to Dry Lint all files.

### `yarn lint:fix`

Run to fix all auto fixable eslint error.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
