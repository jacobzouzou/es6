***********************************
INSTALL WEBPACK:
***********************************
npm i --save-dev webpack webpack-cli 
add package.json to project

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