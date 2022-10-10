
const {PI, E, sqrt}= Math;

console.log(PI);
console.log(E);
console.log(sqrt(25));

const circle={
    label:'Circle',
    radius:5,
}

// const circleCircumference=(radius)=> {
//     console.log("Circle circumference :",(PI*2*radius).toFixed(2),"cm");
// }
// or                   
const circleCircumference=({radius})=> {
    console.log("Circle circumference :",(PI*2*radius).toFixed(2),"cm");
}
const circleArea=({radius, label})=> {
    console.log(label +" area : ", (PI*radius**2).toFixed(2), "cm²");
}
const circleAreaWithdefaultValue=({radius},{precision=3}={})=> {
    console.log(`Circle area with precision of ${precision}: `,(PI*radius**2).toFixed(precision));
}

const {radius,label}=circle;

//get radius param from destructuration
// circleCircumference({radius}); 
circleCircumference({radius});
circleArea(circle);
circleAreaWithdefaultValue(circle);
circleAreaWithdefaultValue(circle, {precision:6});



