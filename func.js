const {odd, even}= require('./js/var');

function checkOddOrEven(num) {
    if(num%2) { //홀수면
    return odd;
    }
    return even;
}

module.exports=checkOddOrEven