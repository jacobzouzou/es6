***********************************
INSTALL WEBPACK:
***********************************
npm i --save-dev webpack webpack-cli 
npm install --save-dev webpack
add package.json to project

npm install @babel/polyfill @babel/runtime @babel/plugin-transform-runtime


customize webpack:
 add file: webpack.config.js
 npm install -D babel-loader @babel/core @babel/preset-env webpack
 ...

************************************
PROD
************************************
run build: 
    npm build:
        entry point .src/index.js
        output: ./dist/main.js


https://webpack.js.org/plugins/