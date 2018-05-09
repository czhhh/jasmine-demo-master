// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
console.log("Hello world");
function isLeapyear(n){
    if(n%400==0)
    return true;
    if(n%100==0)
    return false;
    if(n%4==0)
    return true;

    return false;
}

console.log("2000:"+isLeapyear(2000));


function ff(n){
    var before =1;
    var now=1;
    var behind=0;
    for(i=1;i<n+1;i++)
    {
        if(n==1||n==2)
        return 1;
        behind=before+now;
        if(i==n)
        return before;
        before=now;
        now=behind;
    }
}
console.log("fabonaqi:"+ff(7));