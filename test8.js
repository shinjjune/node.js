// console.log(this);
function add1(x,y) {
    console.log(this===global);
    return x+y;
}
var add2=function(x,y) {
    console.log(this===global);
    return x+y;
}
const add3=(x,y) => (x+y);
const add4=x => {
    ++x; 
    return ++x;
}
    console.log("값은" +add4(10));

add1(1,2);
add2(1,3);
add3(1,4);
add4(10);