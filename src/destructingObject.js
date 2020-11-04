// const PI=Math.PI;
// const E= Math.E;
// const SQRTZ= Math.SQRTZ;

const {PI, E, SQRTZ}= Math;

console.log(PI);
console.log(E);
console.log(SQRTZ);

const circle={
    label:'circleX',
    radius:2,
}


// //get radius form circle destruction
// const {radius,label}=circle;
// const circleArea=(radius)=> (PI*radius*radius).toFixed(2);
// console.log(circleArea(radius));

// //short template
// const circleArea=({radius, label})=> (PI*radius*radius).toFixed(2);
// console.log(circleArea(circle));

// //very short template                   
// const circleArea=({radius})=> (PI*radius*radius).toFixed(2);
// console.log(circleArea(circle));

// //several destruct arg with default value
// const circleArea=({radius},{precision=3}={})=> (PI*radius*radius).toFixed(precision);
// console.log(circleArea(circle));
// console.log(circleArea(circle, {precision:6}));



