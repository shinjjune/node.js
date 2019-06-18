var candyMachine ={
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
    a:10,
    b:20,
    c:30
};
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;
const {getCandy,status: {count},a,b,c}=candyMachine;

console.log(getCandy());