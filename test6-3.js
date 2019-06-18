console.log(this===global);//false
var txt= "aaa";//local
var numbers = [45, 4, 9, 16, 25];

var myFunction=function () { ///function 이름을 b라고 한다면
console.log(this===global);//true
numbers.forEach(function (ele,i) {
//console.log(this===global); //true
this.txt += (":"+ i +"번째 값" +ele +"\t");
});
console.log("==="+this.txt);
console.log(">>>"+global.txt);
}

myFunction();
console.log("txt="+txt);//local
console.log("global.txt="+global.txt);
console.log("this.txt="+this.txt);//문서 객체에는 txt없음