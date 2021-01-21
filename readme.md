# REACT JS
## Resources
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
## React : JavaScript UI library
HTML: declarative programmation for static data.  
React: declarative programmation for dynamic data (user object and so on).

## JSX ( JavaScript and XML)
Declarative syntax of what a component UI should be looked like.  
Describe UI with XHTML and JavaScript.  
Html attribute standard in React is camelCasing : Html "onchange" becomes  JSX "onChange".

## Babel
New js generation compiler for old browser (TC39 web site).  
Declare  block scope with : let.  
Use Object.freeze() to freeze object

# ECMA Script 2015 : es6 overview 

"const" like "let" : have block scope.  
"this" in arrow function inherit from execution context : arrow function is not suited as object methods and event callback (handler).

## Interpolation
### Example:
    var value= 10;
    const str= `${value}`;
  
  
  Template tags (see interpolation.js) is used by a lot of libraries like GraphQL, Appolo, styledComponents, ...

  Examples:

  import styled from "styled-components":   
  
      const btn = styled.button `
            font-size:1.5em;
            background-color: blalck;
            color:white    
      `

    GraphQL:
        const query=qql`
            query{
                ...
            }    
        `
  

  ### Promise
  Return value proxy; it allow to work with asynchronous method without write callback;  
  You can orchestrate several promises: Promise.all(), Promise.race(), Promise.resolve();

  Asynchronous: callback => Promise => async/await


# Install REACT
React can be install from scratch or from "create-react-app" tool
## From scratch (https://jscomplete.com/reactful
      Full stack install: 
        prod: 
        1 init project folder: create app folder and run in "npm init -y"
        2 install express (web server): npm -i --save-dev express [npm install http-server concurrently --save-dev ]
        3 install react-Dom: npm install --save-dev react-dom
        4 install webpack: npm install --save-dev webpack
        5 install webpack-cli: npm install --save-dev webpack-cli
        6 install babel: npm install -D babel-loader @babel/core @babel/preset-env webpack
        7 install for DEV packages:
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
    run app: "npm start" or "npm run start"
    run app (in separate terminals):
      npm run dev-server
      npm run dev-bundle: package app in "dist/main.js"
  ## From scratch summary: 
    npm init -y
    npm install react react-dom --save 
    npm install webpack webpack-dev-server webpack-cli --save 
    npm install babel-core babel-loader babel-preset-env babel-preset-react babel-webpack-plugin --save-dev  
    npm install --save-dev @babel/cli 

  ## Dev environment settings
    Multiple tools: APIs, Configurations, Releases
    Environments: dev & prod,  test

# Create app from existing application with "reactful" tool
  1. create app: npx reactful app_name
  2. replace App.js code with existing app code

## with "create-react-app" tool
  1. npm install -g create-react-app
  2. create-react-app app_name or (npx create-react-app app_name)
  3. move to "app_name" folder
  4. ["npm run eject" (display config files in project root folder)]
  5. run app: npm start

# Babel

Compile (transpiling) js from one standard to an other standard. For example it can compile  "JSX" toward "DOM API" (regular JS). Transpilling must happen in build time: setup in "webpack". in JSX, all JS script is put in bracket:{}

## Install
    npm install --save-dev @babel/core @babel/cli"  //don't install babel-cli locally

## How run babel script localy  
    "npx babel script_file.js"

## configure babel with plugins
    npm install --save-dev @babel/plugin-transform-arrow-functions  //for arrow functions (for example)
    npm install --save-dev @babel/preset-env //is not plugin

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

plugins url: https://bablejs.io/docs/en/plugins

Babel presets: 

env: what "env" variable you want to support  
React:

# React component
Component is a function which receive inputs and return UI (output): can manage private state, and reactive update (useEffect).

Virtual view (a copy of DOM tree) in memory: 

    Generate HTML using JS (not HTML template language),  
    Tree reconciliation for UI updating DOM,  
    UI reflect DOM. 

## Two types of react components
Component name guide is PascalCasing

Function component

    const  = ()=>{
        return (
            <>
                UI (html elements)
            </>
        ); 
    }

class component 

    export class myComponent extend React.Component {

      //other components

      constructor(){
        this.sate={
          name="Jacob"
        }
      }
      //mandatory
      render(){
        return (
            <div>
              //UI
            <div/>       
        )
      }
    }

## Use ReactDOM to render compoment in browser
    ReactDOM.render(
      return (
        </MyComponent>,
        target
      );
    )

### Different renderers
* DOM: document object model
* SSR: server side render

# Component state
## State
* Use app logic to change state
* Use UI logic to display state
* Centralize state in top component 
* Child component must be stateless

## Props
* Use by parent to pass value to child component
* Never be changed in child component
* Allow child to access parent methods

# JSX
## HTML attribut standard guide
- Attribut name : camelCasing
- Class name camelCasing : <p className="header"></p> 
- Attribute "for" : becames "htmlFor"

## Form
- JSX add some changes to how HTML form works
- More consistent "onChange" event on : input, textarea, checkbox, radio, select  
- Vertical whitespace is eliminated

# Deploy app
    > npm run-script build
    > npm install -g serve
    > serve -s bulid (to run app)

## HOC (High Order Component)
- Component which take component as arg and returns component
- It is used to extend or decorate an other component (composition)
- Component name convention: begin with  "with..." (withButton)

# Routing
## Install
    npm install react-router-dom

Two kinds of routes: 

BrowserRouter : build classic url like `https://himoci.com/home`.  
HashRouter : build url with # like `https://himoci.com/#/home`.  

Three components for routing: BrowserRouter (Router), Route, and Link

# Redux
- Use context API rather Redux (for mid app).
- A way to manage application state in external global store (like "vuex" in "vue.js").
- Whole state of application is representated by one js object  called "State" (State tree).
- Action (must have a type): js object whick describes a change in minimal. way

## Examples
  ### Action type
    const ADD_ITEM = 'ADD_ITEM'

  ### Action definition:

    const action = { 
      type: ADD_ITEM, 
      title: 'first item' 
      }

  ### Action creator

    function addItem(title){
      return {
        type: ADD_ITEM,
        title
      }
    }

## Run action
  ### From dispatch
      dispatch(addItem("item title"));

  ### From dispatch function:
    const dispatchAddItem=(title)=> dispatch(addItem("item title"));
    dispatchAddItem("React js");

## Reducer (can be multiple)
Pure function that takes args and return output without changing input or anything else.  
Pure function that calculates next state, base on previous state.
it returns a new state which replace the previous one.

## Never mutate its args
- Never mutate the sate: create new with: Object.assign({},...);
- No side effect: no api call to change anything
- Never call no pure function to change something: example "Date.now(),..."

### Example
    //for one state

    const title = (state = '', action) => {
      if (action.type === 'CHANGE_LIST_TITLE') {
        return action.title
        } else {
        return state
      }
    }

    //for several states
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

    //for whole state
    const listManager = (state = {}, action) => {
      return {
        title: title(state.title, action),
        list: list(state.list, action)
      }
    }
# Store
- Hold state of an app.
- Expose the state via: getState().
- Allow to update state via: dispatch().
- Allow us to (un)register a state change listner with: subscribe().

## Example 
    import { createStore } from 'redux';
    import listManager from './reducers';

    let store = createStore(listManager);// or
    let store = createStore(listManager, preexistingState);

    store.getState();
    store.dispatch(addItem('Something'));

    const unsubscribe = store.subscribe(() =>n
      const newState = store.getState();  
    )

    unsubscribe();

## Data flow in redux is unidirectional:
1. Call dispatch on store, passing an action
2. Store takes care of passing action to the Reducer, generating new state tree
3. Store (observable) updates state and notify observer

# Gatsby
JAMstack: JavaScript, API, Markup stack.

1. Install: npm install -g gatsby-cli
3. Create project: gatsby new project_name
4. Run project: gastby develop (or npm start)


# Next.js
Server side render: called also "static pre-rendering".  
SEO (Search Engine Optimization) issue for indexing content in client mode

## Install
1. create project folder
2. install: npm install next react react-dom
3. create "pages" folder in project folder
4. add package.json with :
  `
    {
      "scripts":{
        "dev":"next"
      }
    }
  `
5. Run next: npm run dev

- Static site hosts: Netlify, Firebase hosting,...
- Process require to declare urls that compose the site 

## Deployment
    npm run build
    npm run start

# Customize component
## With CSS (styles are autofixed when use "create-react-app")
- Style - inline or object -: style is local to component (see HOC.js))
- Class and css file: import "./file.css" - see HOC.js -
- Use css module to scope css to component -see Hook.js -
- Module name guide: "component_name.module.css"
- To use sass/scss: import .scss file

## With styled component
css in js: React Style, jsxstyle, Radium

### Styled component
  
    1. intall styled component: npm install styled-component
    2. import styled from "styled-components": use "tagged template" (interpolation ) to customize components

Example

    const btn = styled.button `
        font-size:1.5em;
        background-color: blalck;
        color:white    
    `
  use props 

# webpack 
Let us compile js modules: module bundler (like Gulp, Brocolli, and Grant: are taks runners).  
Receive several files as input, and generate a single file (or a few files) that run your app.

It can perform many operations: 
  - watch task and re-run them,
  - bundle resources, 
  - run babel,
  - run dev server,
  - ... 

  Receive an entry point (can be html file with script tage), analyse and generate a single js needed to run app

  ## Install (--save-dev or -D for local install)
    npm i --save-dev webpack webpack-cli 
    npm install -D babel-loader @babel/core @babel/preset-env 
    npm install @babel/polyfill @babel/runtime @babel/plugin-transform-runtime

  Default (convention): ./src/index.js (entry), ./dist/main.js (output), and production mode.  
  Customize webpack: add webpack.config.js in project root folder

  Example

    const path = require('path');
    const webpack = require('webpack');

    //add plugins
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

## Run webpack
    write "build":"webpack build" in package.json scripts section
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
Library for testing js code (like "Mocha", ...)  
install: `npm install -D jest`  
by default: jest search file with "test" in name  
Example: `App.test.js`

## Mocking
Allow to test functionalities that depends on: network, database, files, external system.  
Test only concerns code, not infrastructure.  
Avoid side effect in testing.  
Snapshot: allow to test UI.

## Test coverage:
  write package.json script section

    "coverage": "npm run test -- --coverage"

## Debug resources
 Google  
 Stackoverflow  
 Reactiflux  
 reactjs.org => github : create new bug  
 user also "flow" to debug code

# Production

``` npm
build prod:   npm build
entry point .src/index.js
output: ./dist/main.js
```


[Webpack link](https://webpack.js.org/plugins/)  
https://webpack.js.org/plugins  
<https://webpack.js.org/plugins>  
<jacob@isi.com>  

[~~Google~~][ref]  

[ref]:http://google.fr

    >>>>>>d97fc768ab7262e699c9315630062e8cc84107dd
