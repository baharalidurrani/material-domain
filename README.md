This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

Digital Object Identifier available for citation at:

[![DOI](https://zenodo.org/badge/360168321.svg)](https://zenodo.org/badge/latestdoi/360168321)

[![Production Build](https://github.com/baharalidurrani/material-domain/actions/workflows/firebase-hosting-merge.yml/badge.svg)](https://github.com/baharalidurrani/material-domain/actions?query=event%3Apush)
[![Preview Build](https://github.com/baharalidurrani/material-domain/actions/workflows/firebase-hosting-pull-request.yml/badge.svg)](https://github.com/baharalidurrani/material-domain/actions?query=event%3Apull_request)

## Features included

- Built using Typescript.
- Built using the official `redux-toolkit` template.
- Merged features from the official `create-react-app` template.
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

### `npm run starts`

Runs the app in the development mode securely with TLS.<br />
Make sure you have [mkCert](https://github.com/FiloSottile/mkcert) configured properly.
Open [🔒https://localhost:3000](https://localhost:3000) to view it in the browser.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run dep:upgrade`

Run to update all packages to their latest version.

### `npm run pretty`

Run to format all files using prettier.

### `npm run lint`

Run to Dry Lint all files.

### `npm run lint:fix`

Run to fix all auto fixable eslint error.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
