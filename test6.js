        var obj={
    txt: "aaa",
    numbers : [45, 4, 9, 16, 25],
    myFunction:function() {
        this.numbers.forEach(function (ele,i) {
            this.txt = this.txt+":" +i+ ":"+ele+"\n"; 
        });
          console.log(txt);
    }
}
obj.myFunction();
console.log(obj.txt);
console.log(this.txt);

