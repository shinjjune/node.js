
    // console.log(global);
    console.log(this===global);
    var a=10;
    b=20;  //global variable
    this.c=40;
    function f(){
        var d=30;  // local variable
        console.log(this.c);
    }
    console.log(a);
    console.log(global.b);
    console.log(this.c);
    f();
    console.log(global.d);
