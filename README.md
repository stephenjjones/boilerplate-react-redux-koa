# Boilerplate-react-redux-koa

A starter kit for a web app using [React](https://facebook.github.io/react/), [Redux](http://rackt.org/redux/), and [Koa](http://koajs.com/)

| **Tech** | **Description** |
|----------|-----------------|
| [React](https://facebook.github.io/react/) | views |
| [Redux](http://redux.js.org) | client side data store and actions |
|  [Babel](http://babeljs.io) | Transpiles javascript for both client and server |
| [Webpack](http://webpack.github.io) | Used to build client side code  |
| [ESLint](http://eslint.org/) |  |
| [npm Scripts](https://docs.npmjs.com/misc/scripts) |  |
| [Koa](http://koajs.com/) |  |

## Setup
Requirements:  Node v5.3+

```
$ git clone https://github.com/stephenjjones/boilerplate-react-redux-koa.git
$ npm install
$ npm run build # must build first because es6 features used in server side code
$ npm run start # starts the development server on localhost:3003
```

## Overview of project structure

Client and Server are put in separate top level directories with their own src/ and dist/ directories. This
is done so that they can evolve independently or easily be swapped out as the technologies or choice of libraries/frameworks
changes. They could potentially be pulled into separate packages altogether, but currently an integrated, opinionated solution
is preferred.

```
.
├── .babelrc                # 
├── .eslintignore           #
├── .eslintrc               #
├── .webpack.config.js      #
├── examples/               #
├── client/                 #
    ├── build/              # compiled and ready for development
    ├── dist/               # minified and ready for production distribution
    ├── src
        ├── client.js       #
        ├── assets/         #
        └── .js             #
├── server/                 #
    ├── build/              # transpiled and ready for development/production serving
    ├── src
        ├── server.js       #
        └── .js             #
├── config/                 # project config, created at top level to enable shared config between client/server as needed
└── bin/                    #
    ├── createDb.js         # 
    └── .js                 #
```

## Running scripts with es6 features
```
$ babel-node bin/script-filename.js
```

## Linting

* [airbnb javascript style guide](https://github.com/airbnb/javascript)
* [airbnb eslint plugin](https://www.npmjs.com/package/eslint-config-airbnb)

| **Script** | ** Description ** |
|------------|-------------------|
| build      |                   |
| start      |                   |
| test       |                   |
| clean      |                   |
