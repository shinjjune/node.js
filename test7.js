var relationship1={
    name: 'zero',
    friends:['nero','hero','xero'],
    logFriends: function() {
        var that=this;  //relationship1 을 가리키는 this를 that 에 저장
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();
console.log("--------------------");

var relationship2={
    name: 'zero',
    friends:['nero','hero','xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();