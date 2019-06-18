console.log(this===global);//false
var obj={
txt : "aaa",//local
numbers : [45, 4, 9, 16, 25],
myFunction :function () { 
//console.log(this===global);//true  ==> 여기서 this가 콜백 안에서 쓰일 수 없음
this.numbers.forEach(function (ele,i) {
// console.log(this===obj); //false
//console.log(this===global); //true
this.txt += (":"+ i +"번째 값" +ele +"\t");
});
console.log("==="+this.txt);
console.log(">>>"+global.txt);
}
}
// console.log(this===obj); //false
obj.myFunction();
// console.log(obj.txt);
// console.log(this.txt);
