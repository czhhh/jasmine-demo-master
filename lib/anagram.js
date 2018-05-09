function anagram(str){
    if(!str){
        return [];
    }
    var arr = [];
    if(str.length == 1){
        arr.push(str);
        return arr;
    }
    for(var i = 0 ;i < str.length; i ++){
        var s = str.substring(i,i+1); 
        var res = str.substring(0,i)+str.substring(i+1,str.length);
        var arr2 = sort(res);  //递归
        for(var j = 0 ;j < arr2.length; j ++){
            arr.push(s + arr2[j]);
        }
    }
    return arr;
}
module.exports=anagram