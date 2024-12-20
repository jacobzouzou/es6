
# JavaScript
Babel: is new js generation compiler for old browser (TC39 web site)  
Declare  block scope var with : let  
Use Object.freeze() to freeze object

## REACT JS
React : javascript UI library  
HTML: declarative programmation for static data  
React: declarative programmation for dynamic data (user object and so on)

## JSX ( JavaScript and XML)
Declarative syntax of what a component UI should be
describe.  
UI not with string but with XHTML and JavaScript
HTML attribute standard in React is camelCasing: 
    
    "onchange" becomes "onChange"

## Ecma Script 2015 : es6
```const``` like ```let```: have block scope.  
```this``` in arrow function inherit from execution context:
    arrow function is not suited as object methods and event callback (handler).

### Interpolation:
    const str= `${var}`;
    Template tags - see interpolation.js -:used by a lot of libraries like GraphQL, Appolo, styledComponents, ...
    
    Examples:
      import styled from "styled-components"    
      const btn = styled.button `
            font-size:1.5em;
            background-color: blalck;
            color:white    
        `
      GraphQL:
        const query = qql`
            query{
                ...
            }    
        `

     Promise: return value proxy; it allow to work with asynchronous method without write callback;
     You can orchestrate several promises: Promise.all(), Promise.race(), Promise.resolve();

     Asynchronous roadmap: callback => Promise => async/await


### Babel
compile (transpiling) js from one standard to an other standard

#### Example
compile  "JSX" => "DOM API" (regular JS) 
transpilling must happen in  build time: set up in "webpack"
in JSX, all JS script is put in bracket:{}

#### Install 

    npm install --save-dev @babel/core @babel/cli  
    
    //to don't install babel-cli locally use npx to run it locally
    npx babel script_file.js

#### Cnfigure babel with plugins: arrow functions (for example)

    npm install --save-dev @babel/plugin-transform-arrow-functions  
    npm install --save-dev @babel/preset-env

  add config file to project root folder: ".babelrc"

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

[plugins](https://babeljs.io/docs/plugins)

#### Install Reat
##### Install HTTP server:
1.  npm install http-server --save-dev
2.  npm install concurrently --save-dev

- React component 
  - Component: function which receives inputs and return UI (output): can manage private state, and reactive update (useEffect).
  - virtual view (a copy of DOM tree) in memory: 
    generate HTML using js (not HTML template language),
    tree reconciliation for UI updating DOM.
  - UI reflect DOM 

- Two type of react components: 
    //function component

      const  = ()=>{
          return (
              <>
                  UI (html elements)
              </>
          ); 
      }

  //class component 

    export class myComponent extend React.Component {

      //other components

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

//Use ReactDOM to render compoment
ReactDOM.render(
  return (
    </MyComponent>,
    target
  );
)

Component name guide: PascalCasing

  ***************************************
  prepare dev environnement from scratch
  ***************************************
    create project folder: 
      npm init -y
      npm install --save-dev @babel/core @babel/cli 
      [npm install babel-preset-react-app@3 ]

    create source folder: 'src'
      run: npx babel --watch src --out-dir . --presets react-app/prod 

    add script in package.json
      "start": "concurrently \"http-server -a localhost -p 5000\" "
      or
      "start": "npm run open",
      "open": "concurrently \"http-server -a localhost -p 5000\""

    run package.json/script: 
      start: "npm run start" or "npm start"

    Dev environment settings
      Multiple tools
        APIs
        Configurations
        Releases

      Environments: 
        dev & prod
        test

  Different renderers:
    DOM: document object model
    SSR: server side render

  create-react-app: (popular tool to create react app)
    1 "npm i -g create-react-app"
    2 "create-react-app app_name" or ["npx create-react-app app_name"] 
    3 move to "app_name" folder
    4 ["npm run eject" (display config files in project root folder)]
    5 run app: mpm start

  create app from scratch (see advise project architecture):
    https://jscomplete.com/reactful:
      install guide, 
        full stack install: 
          prod: 
          1 init project in project folder: npm init -y
          2 install express: npm -i --save-dev express,
          3 install react-Dom: npm install --save-dev react-dom
          4 install webpack: npm install --save-dev webpack
          5 install webpack-cli: npm install --save-dev webpack-cli
          6 install babel: 
            npm install -D babel-loader @babel/core @babel/preset-env [webpack]

          7 install for dev:
              nodemon,
              eslint, 
              babel-eslint,
              eslint-plugin-react,
              jest, babel-jest,
              react-jest-renderer

        Config after install:
          add fle: .eslintrc [.js] [esling.config.js]
          add file: .babelrc [.js] [babel.config.js]
          add file: webpack.config.js
          write  package.json scripts section:
              dev-server: "nodemon --exec babel-node scr/server/server.js --ignore dist/"
              dev-bundle: "webpack -wd"

    run app (in separate terminals):
      npm run dev-server
      npm run dev-bundle: package app in "dist/main.js"

  Create app from existing application with "reactful" tool :
    1 create app: "npx reactful app_name"
    2 replace App.js code with existing app code

  *****************************
  * component state
  *****************************
  state:
  use app logic to change state
  use UI logic to display state
  centralize state in top component 
  child component must be stateless

  props:
  use by parent to pass value to child
  never be changed in child component
  allow child to access parent methods

  *****************************
  * JSX
  *****************************
  HTML attribut standard guide:
  - attribut name: camelCasing
  - class name camelCasing: <p className="header"></p> 
  - attribute for: becames "htmlFor"

  Form
  JSX add some changes to how HTML form works
  more consistent "onChange" event on : input, textarea, checkbox, radio, select  
  vertical whitespace is eliminated

  **********************************
  DEPLOY APP
  **********************************
  npm run-script build
  npm install -g serve
  run app> serve -s bulid

  HOC (High Order Component)
  component which take component as arg and returns component
  it use to extend or decorate an other component (composition)
  component name convention: begin with  "with..." (withButton)

  ******************************************************
  ROUTING
  *******************************************************
  install: npm install react-router-dom

  Two kind of routes: 
  BrowserRouter (build classic url): https://manyoh.com/home
  HashRouter: https://manyoh.com/#/home

  Three components for routing: BrowserRouter (Router), Route, and Link

  **********************************************************
  REDUX
  **********************************************************
  use context API rather Redux (for mid app)
  a way to manage application state in external global store (like "vuex" in "vue.js")
  whole state of application is representated by one js object  called "State" (State tree)
  Action (must have a type): js object that describes a change in minimal way

  example:
    Action type:
      const ADD_ITEM = 'ADD_ITEM'

    Action definition:

      const action = { 
        type: ADD_ITEM, 
        title: 'first item' 
        }

    Action creator:

      function addItem(title){
        return {
          type: ADD_ITEM,
          title
        }
      }

  Run action:
    from dispatch:
        dispatch(addItem("item title"));

    or from dispatch function:
      const dispatchAddItem=(title)=> dispatch(addItem("item title"));
      dispatchAddItem("React js");

  Reducer (can be multiple):
  pure function that takes args and return output without changing input or anything else.
  pure function that calculates next state, base on previous state.
  it returns a new state which replace the previous one

  never mutate its args
  never mutate the sate: create new with: Object.assign({},...);
  no side effect: no api call to change anything
  never call no pure function to change something: example "Date.now(),..."

  example:
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

  STORE
  hold state of app
  expose the state via: getState()
  allow to update state via: dispatch()
  allow us to (un)register a state change listner with: subscribe()

  example:  
  import { createStore } from 'redux'
  import listManager from './reducers'

  let store = createStore(listManager) or
  let store = createStore(listManager, preexistingState)

  store.getState();
  store.dispatch(addItem('Something'));

  const unsubscribe = store.subscribe(() =>n
    const newState = store.getState();  
  )
  unsubscribe();

  Data flow in redux is unidirectional:
  1 call dispatch on store, passing an action
  2 store takes care of passing action to the Reducer, generating new state tree
  3 store (observable) updates state and notify observer

  ********************************************************************************
  Gatsby
  ********************************************************************************
  JAMstack: JavaScript, API, Markup stack
  install: npm install -g gatsby-cli
  create project: gatsby new project_name
  run project: gastby develop (or npm start)

  ********************************************************************************
  Next.js
  ********************************************************************************
  server side render: called also "static pre-rendering"
  SEO (Search Engine Optimization) issue for indexing content in client mode

  Install
  1 create project folder
  2 install: npm install next react react-dom
  3 create "pages" folder in project folder
  4 add package.json with :
    {
      "scripts":{
        "dev":"next"
      }
    }
  5 run next: npm run dev

  Static site hosts: Netlify, Firebase hosting,...
  process require to declare urls that compose the site 

  Deployment: 
  npm run build
  npm run start

  **********************************************************************************************************
  CUSTOMIZE COMPONENT
  **********************************************************************************************************
  With CSS (styles are autofixed when use "create-react-app")
  1 style - inline or object -: style is local to component (see HOC.js))
  2 class and css file: import "./file.css" - see HOC.js -
  3 use css module to scope css to component -see Hook.js -
    module name guide: "component_name.module.css"
    to use sass/scss: import .scss file

  With styled component
  css in js: React Style, jsxstyle, Radium
  styled component:
  install: npm install styled-component
  import styled from "styled-components":
    use "tagged template" (interpolation ) to customize components

    example:
      const btn = styled.button `
          font-size:1.5em;
          background-color: blalck;
          color:white    
      `
    use props 

  ***********************************
  webpack 
  ***********************************
  let us compile js modules: module bundler (like Gulp, Brocolli, and Grant: are taks runners)
  receive several files as input, and generate a single file (or a few files) that run your app
  it can perform many operations: 
    - watch task and re-run them,
    - bundle resources, 
    - run babel,
    - run dev server,
    - ... 

    receive an entry point (can be html file with script tage), analyse and generate a single js needed to run app
    Install (--save-dev or -D: local install):
      npm i --save-dev webpack webpack-cli 
      npm install -D babel-loader @babel/core @babel/preset-env 
      npm install @babel/polyfill @babel/runtime @babel/plugin-transform-runtime

    default (convention): ./src/index.js (entry), ./dist/main.js (output), and production mode
    customize webpack: add webpack.config.js in project root folder

    Example:
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

Run webpack:
write "build":"webpack build" in package.json scripts section
npm run-script build

//example off result

Hash: 973f1b178daddeb9a42a
Version: webpack 4.44.2
Time: 1156ms
Built at: 2020-09-22 08:28:18
  Asset      Size  Chunks             Chunk Names
main.js  5.27 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/async.js] 1.45 KiB {main} [built]


************************************
TESTING 
************************************
jest:
lib for testing js code like "Mocha"
nstall :npm install -D jest
by default: jest search file with "test" in name: example: "App.test.js"

Mocking:
allow to test functionalities that depends on: network, database, files, external system
test only concerns code, not infrastructure
avoid side effect in testing

snapshot:
allow to test UI

Test coverage:
write package.json script section: 
"coverage": "npm run test -- --coverage

Debug resources:
 google
 stackoverflow
 Reactiflux
 reactjs.org =>github: create new bug
 user also "flow" to debug code
************************************
PROD
************************************
build prod:   npm build
s
entry point .src/index.js
output: ./dist/main.js


https://webpack.js.org/plugins/
