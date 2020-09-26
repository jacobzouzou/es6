// tagged templates: parse template with function
//first arg of function : array of string values
//remaining args are related to expression
//Function return string

//Example: 1

const interpolate = (literals, ...expressions) => {
    let string =``;        
    for (const [i, val] in expressions) {
        string += literals[i] + expressions[i];
    }
    string += literals[literals.length - 1];
    return string;

}
const result1 = interpolate`I paid ${100} €`;
console.log(result1);

//Example: 2
function template(literals, ...expressions){
    return (function(...values) {
      let dict = values[values.length - 1] || {};

      let result = [literals[0]];
      expressions.forEach(function(key, i) {
        let value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, literals[i + 1]);
      });
      return result.join('');
    });
}

const interpolated = template`I paid ${0} €`;
const result2= interpolated('100');
console.log(result2);

//Example: 3
const _interpolate = (literals, ...expressions) => {
    //must return a function
    return((...values)=>{

        let string =``;
        
        for (const [i, val] in values) {
            string += literals[i] + values[i];
        }
        string += literals[literals.length - 1];
        return string;
    })
}
const _interpolated = _interpolate`I paid ${0} ${1}`;
const result3= _interpolated('500','£');
console.log(result3);


