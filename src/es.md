"const" like "let" have block scope.
"this" in arrow function inherit from execution context:
    arrow function is not suited as object methods and event callback (handler).
Interpolation:
    const str= `${var}`;
    Template tags - 1_ interpolation.js-:used by a lot of libraries like GraphQL, Appolo, styledComponents, ...
    
    Examples:
    styledComponents, ...

    import styled from "styled-components"
    
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

     Promise: return value proxy; it allow to work with asynchronous method without write callback;
     You can orchestrate several promises: Promise.all(), Promise.race(), Promise.resolve();

     Asynchronous: callback =>Promise => async/await


