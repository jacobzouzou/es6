// {
//     entry: [
//         'babel-polyfill',
//         // your app scripts should be here
//     ],
//         module: {
//         loaders: [
//             // Babel loader compiles ES2015 into ES5 for
//             // complete cross-browser support
//             {
//                 loader: 'babel-loader',
//                 test: /\.js$/,
//                 // only include files present in the `src` subdirectory
//                 include: [path.resolve(__dirname, "src")],
//                 // exclude node_modules, equivalent to the above line
//                 exclude: /node_modules/,
//                 query: {
//                     // Use the default ES2015 preset
//                     // to include all ES2015 features
//                     presets: ['es2015'],
//                     pplugins: ['transform-runtime']
//                 }
//             }
//         ]
//     }
// }