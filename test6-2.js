// {
//     f(){

var txt = "aaa";
var numbers = [45, 4, 9, 16, 25];
var myFunction=function() {
numbers.forEach(function (ele,i) {
    this.txt = this.txt+":" +i+ ":"+ele+"\n"; 
});
  console.log(txt);
}
obj.myFunction();
console.log(obj.txt);
console.log(this.txt);
//  }
// }