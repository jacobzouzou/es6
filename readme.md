# REACT JS
## React is JavaScript UI library
HTML is declarative programmation for static data.  
React is declarative programmation for dynamic data like user object and so on.

## JSX ( JavaScript and XML)
JSX is a declarative syntax of what a component UI should be looked like.  
It describes UI with XHTML and JavaScript.  
Html attribute standard in React is camelCasing : Html `onchange` becomes in JSX `onChange`.

## Babel
Babel il a  new JS generation compiler for old browser (TC39 web site).  
It declares  block scope with : let.  
It uses Object.freeze() to freeze object

# ECMA Script 2015 : es6 overview 
## Some examples
 - "const" like "let" : have block scope.  
- "this" in arrow function inherit from execution context : arrow function is not suited as object methods and event callback (handler).

## Interpolation
### Example:
    var value= 10;
    const str= `${value}`;
  
  
  Tagget template is used by a lot of libraries like GraphQL, Appolo, styledComponents, ...

  Examples:

    import styled from "styled-components";  
      const btn = styled.button `
            font-size:1.5em;
            background-color: blalck;
            color:white    
      `;

    GraphQL:
        const query=qql`
            query{
                ...
            }    
        `;
  

  ## Promise
  Promise returns value proxy ; it allows to work with asynchronous method without write callback ;  
  You can orchestrate several promises: 
  
    Promise.all(), Promise.race(), Promise.resolve();

  Asynchronous: callback => Promise => async/await


# Install REACT
React can be installed from scratch or from "create-react-app" tool
## [From scratch](https://jscomplete.com/reactful)
      Full stack install: 
        For production: 
        1 init project folder: create app folder and run `npm init -y` from it
        2 install express (web server): npm -i --save-dev express 
        [npm install http-server concurrently --save-dev ]
        3 install react-Dom: npm install --save-dev react-dom
        4 install webpack: npm install --save-dev webpack
        5 install webpack-cli: npm install --save-dev webpack-cli
        6 install babel: npm install -D babel-loader @babel/core @babel/preset-env webpack
        7 install development packages:
            nodemon,
            eslint, 
            babel-eslint,
            eslint-plugin-react,
            jest, babel-jest,
            react-jest-renderer

  ### Configuration
    add file: index.html
    add file: main.js 
    add file: App.js
    add fle: .eslintrc [.js] [esling.config.js]
    add file: .babelrc [.js] [babel.config.js]
    add file: webpack.config.js
    write  package.json scripts section:
        "dev-server": "nodemon --exec babel-node scr/server/server.js --ignore dist/"
        "dev-bundle": "webpack -wd"
        "start": "concurrently \"http-server -a localhost -p 5000\" "
        or
        "start": "npm run open",
        "open": "concurrently \"http-server -a localhost -p 5000\""
    add "src" folder
    run: npx babel --watch src --out-dir "./dist" --presets react-app/prod 

  ## Run app
    "npm start" or "npm run start"

    run app (in separate terminals):
      npm run dev-server
      npm run dev-bundle: package app in "dist/main.js"
  ## From scratch summary: 
    1. npm init -y
    2. npm install react react-dom --save 
    3. npm install webpack webpack-dev-server webpack-cli --save 
    4. npm install babel-core babel-loader babel-preset-env babel-preset-react babel-webpack-plugin --save-dev  
    5. npm install --save-dev @babel/cli 

  ## Dev environment settings
    Multiple tools: APIs, Configurations, Releases
    Environments: dev, prod, and test

# Create app from existing application
## Create app
>1. npm install -g create-react-app
>2. create-react-app app_name or (npx create-react-app app_name)
>3. move to "app_name" folder
>4. ["npm run eject" (display config files in project root folder)]

## Create app with "reactfule"
 >Create app: `npx reactful app_name` 

 >Replace `App.js` code with existing app code

 Run app: `npm start`

# Babel

Compile (transpiling) JS from one standard to an other standard. For example it can compile  JSX to DOM API (regular JS). Transpilling must happen in build time (setup in webpack). in JSX, all JS script is put in bracket:`{}`

## Install Babel
    npm install --save-dev @babel/core @babel/cli    

Nb: don't install babel-cli locally

## Run babel script localy  
    npx babel script_file.js

## configure babel with plugins
Example: for arrow functions

    npm install --save-dev @babel/plugin-transform-arrow-functions  

  Add babel config file  ".babelrc" to project root folder

    {
        // "plugins": [
        //     ["@babel/plugin-transform-arrow-functions", {"spec":"true"}]
        // ]
        "plugins": [
            "@babel/plugin-transform-arrow-functions"
        ],
        "presets": [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "browsers": [
                            "last 2 versions",
                            "safari >= 7"
                        ]
                    }
                }
            ]
        ]    
    }

[Webpack plugins urls](https://bablejs.io/docs/en/plugins)
## Babel presets
A preset is a set of plugins used to support particular language features.   
The two presets Babel uses by default:  
- es2015 : Adds support for ES2015 (or ES6)  
- JavaScript. react : Adds support for JSX.
### Install preset (present/env)

    npm install --save-dev @babel/preset-env

@babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller.

# React component
Component is a function which receive inputs and return UI (output): can manage private state, and reactive update (`useEffect`).

Component is a virtual view (a copy of DOM tree) in memory: 

- Generate HTML using JS (not HTML template language),  
- Tree reconciliation for UI updating DOM,  
- UI reflect DOM. 

## Two types of react components
Component name guide is PascalCasing

### Function component

    const MyComponent  = ()=>{
        return (
            <>
                UI (html elements)
            </>
        ); 
    }

### Class component 

    export class myComponent extend React.Component {
      ...
      constructor(){
        this.sate={
          name="Jacob"
        }
      }
      render(){
        return (
            <div>
              //UI
            <div/>       
        )
      }
    }

### Use ReactDOM to render compoment in browser
    ReactDOM.render(
      return (
        </MyComponent>,
        target
      );
    )

### Different renderers
* DOM: document object model.
* SSR: server side render.

# Component state
## State (guidelines)
* Use app logic to change state
* Use UI logic to display state
* Centralize state in top component 
* Child component must be stateless

## Props (guidelines)
* Use by parent to pass value to child component
* Never be changed in child component
* Allow child to access parent methods

# JSX
## HTML attribut standard guide in JSX
Class and Attribut name : camelCasing
>\<p className="header"></p>
>\<p htmlFor="Name"></p> 

## Form
JSX add some changes to how HTML form works. More consistent `onChange` event to: input, textarea, checkbox, radio, select  
>\<form><input type="text" onChange=""\>\</from>

Vertical whitespace is eliminated

# Deploy app
    > npm run-script build
    > npm install -g serve
 ### Run app

    > serve -s bulid

## HOC (High Order Component)
- Component which take component as arg and returns component
- It is used to extend or decorate an other component (composition)
- Component name convention: begin with  `with...`; ex: withButton.

# Routing
## Install
    npm install react-router-dom

Two kinds of routes: 

BrowserRouter : build classic url like : `https://himoci.com/home`.  
HashRouter : build url with # like : `https://himoci.com/#/home`.  

Three components for routing: BrowserRouter (Router), Route, and Link

# Redux
- Use context API rather Redux (for mid app).
- Is a way to manage application state in external global store (like "vuex" in "vue.js").
- Whole state of application is representated by one JS object  called "State" (State tree).
- Action (must have a type): JS object whick describes a change in minimal. way

## Example
  ### Define action type
    const ADD_ITEM = 'ADD_ITEM'

  ### Set action definition

    const action = { 
      type: ADD_ITEM, 
      title: 'First item' 
      }

  ### Define action creator (constructor)

    function addItem(title){
      return {
        type: ADD_ITEM,
        title
      }
    }

## Run action
  ### From dispatch
      dispatch(addItem("Hello Redux !"));

  ### From dispatch function:
    const dispatchAddItem=(title)=> dispatch(addItem(title));
    dispatchAddItem("Hello Redux World !");

## Reducer (can be multiple)
Reducer is pure JS function which takes args and returns output without changing input or anything else.  
Pure function calculates next state based on previous state, and returns a new state to replace the previous one.

## Never mutate function args
- Never mutate the sate: create new state with  `Object.assign({},...)`.
- No side effect: no api call to change anything.
- Never call no pure function as `Date.now(),...` to change something.

### Examples
  For only one state 

    const title = (state = '', action) => {
      if (action.type === 'CHANGE_LIST_TITLE') {
        return action.title
        } else {
        return state
      }
    }

  For several states

    const list = (state = [], action) => {
      switch (action.type) {
        case 'ADD_ITEM':
          return state.concat([{ title: action.title }])
        case 'REMOVE_ITEM':
          return state.map((item, index) =>
            action.index === index ? { title: item.title } : item))
        default:
          return state
        }
    }

For whole state object

    const listManager = (state = {}, action) => {
      return {
        title: title(state.title, action),
        list: list(state.list, action)
      }
    }
# Store
- Hold state of an app.
- Expose the state via with: `getState()`.
- Allow to update state via: `dispatch()`.
- Allow us to (un)register a state change listner with: `subscribe()`.

## Example 
    import { createStore } from 'redux';
    import listManager from './reducers';

    let store = createStore(listManager);// or
    let store = createStore(listManager, preexistingState);

    store.getState();
    store.dispatch(addItem('Item Title'));

    const unsubscribe = store.subscribe(() =>
      const newState = store.getState();  
    )

    unsubscribe();

## Data flow in redux is one way (unidirectional)
1. Call `dispatch()` on store, passing an action.
2. Store takes care of passing action to the Reducer to generating new state tree.
3. Store (observable) updates state and notify observer.

# Gatsby
JAMstack: JavaScript, API, Markup stack.

1. Install: `npm install -g gatsby-cli`
3. Create project: `gatsby new project_name`
4. Run project: `gastby develop` or `npm start`


# Next.js
Next use Server side render (called also "static pre-rendering").  
___Nb: SEO (Search Engine Optimization) issue for indexing content in client mode___

## Install
1. Create project folder
2. Install: npm install next react react-dom
3. Create "pages" folder in project folder
4. Edit package.json : `{
    "scripts":{
      "dev":"next"
    }
  }`
5. Run next : `npm run dev`

Static site hosts : Netlify, Firebase hosting, ...  
Process require to declare the urls that compose the site 

## Deployment
    npm run build
    npm run start

# Customize component
## With CSS (styles are autofixed when use "create-react-app")
- Style - inline or object -: style is local to component (see HOC.js))
- Class and css file: import "./file.css" (see HOC.js)
- Use css module to scope css to component (see Hook.js)
- Module name guide: `component_name.module.css`
- To use sass/scss: `import .scss file`

## With styled component
css in JS: React Style, jsxstyle, Radium

### Styled component
#### Install
    npm install styled-component;
    

#### use style

    import styled from "styled-components";
    const btn = styled.button `
        font-size:1.5em;
        background-color: blalck;
        color:white    
    `
    ...

# Webpack 
It Let us compile JS modules: module bundler (like Gulp, Brocolli, and Grant, are taks runners).  
It receives several files as input, and generate a single file (or a few files) that run your app.

It can perform many operations like : 
  - watch task and re-run them,
  - bundle resources, 
  - run babel,
  - run dev server,
  - ... 

  Webpack receives an entry point (can be html file with script tage), analyse and generate a single JS file needed to run app.

  ## Install 
  Intall options : --save-dev or -D for local install  

    npm i --save-dev webpack webpack-cli 
    npm install -D babel-loader @babel/core @babel/preset-env 
    npm install @babel/polyfill @babel/runtime @babel/plugin-transform-runtime

## Default conventions

> Entry: ./src/index.js

> Output: ./dist/main.js

> Mode: production  

## Customize webpack

Add `webpack.config.js` in project root folder.

  Example

    const path = require('path');
    const webpack = require('webpack');

    //add plugins if needed
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");

    module.exports = (env, options) => {
        return {
          mode: "development",
          entry: './src/async.js',
          output: {
              path: path.resolve(__dirname, 'build'),
              filename: 'main.js',
          },

          //rule.test: condition, rule.use: action
          module: {
              rules: [
                { test: /\.css$/, use: 'css-loader' }, //allow to use "import "style.css""
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                ...

              ]
          }

        }
    }

## Run Webpack
Edit `package.json` script section with:

    "build":"webpack build"
Run package

    npm run-script build

Example off result

    Hash: 973f1b178daddeb9a42a
    Version: webpack 4.44.2
    Time: 1156ms
    Built at: 2020-09-22 08:28:18
      Asset      Size  Chunks             Chunk Names
    main.js  5.27 KiB    main  [emitted]  main
    Entrypoint main = main.js
    [./src/async.js] 1.45 KiB {main} [built]


# Testing 
## jest
Library for testing JS code (like "Mocha", ...).  
Install : `npm install -D jest`  
By default, jest search file with "test" in name  like : `App.test.js`

## Mocking
Allow to test functionalities that depends on: network, database, files, external system.  
Test only concerns code, not infrastructure.  
Avoid side effect in testing.  
Snapshot : allow to test UI.

Use  for snapshot test:

    npm install react-testing-library //or
    npm install react-test-renderer

## Test coverage
  ### Edit `package.json` script section

    "coverage": "npm run test -- --coverage"
  ### Run test coverage

    npm [run] coverage

## Debug resources
 Google: dev tool  
 Stackoverflow  
 Reactiflux  
 reactjs.org > github : create new bug  
 Flow (tool): to debug code

# Production

``` npm
build prod:   npm build
entry point .src/index.js
output: ./dist/main.js
```
# Other resources

[Webpack link](https://webpack.js.org/plugins/)  
https://webpack.js.org/plugins  
<https://webpack.js.org/plugins>  
<jacob@isi.com>  

[~~Google~~][ref]  

[ref]:http://google.fr

## JS learning sites: 
https://react.org : material.angular.io, vuetity.com
https://jscomplete.com/react-cfp
https://jscomplete.com/playground (or https://codepen.io/)
https://github.com/MicheleBertoli/css-in-js

https://jscomplete.com/react-beyond-basics
https://jscomplete.com/why-graphql
https://jscomplete.com/closures

https://www.netlify.com
https://reactnative.dev

https://github.com/vercel/next.js/blob/canary/readme.md
https://github.com/vercel/next.js#multi-zones
https://github.com/vercel/next.js#multi-zones
https://glitch.com

https://codesandbox.io/s/new?file=/src/App.js

## Mcking libraries
https://github.com/jefflau/jest-fetch-mock 

## Markdown
https://stackedit.io/  
https://tablegenerator.com/markdown_tables  
https://daringfireball.net/projects/markdown  
http://goo.gl/pp7lHb  
https://commonmark.org  
http://johnmacfarlane.net/babelmark2  
http://www.writeapp.net  
http://ia.net/writer/mac  
http://www.bloomingsoft.com/listacular  
http://lab.hakim.se/reveal-js
