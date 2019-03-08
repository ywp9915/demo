var str = "aabbbcccc";
var obj = {};//定义一个对象来保存str拆分出来的元素，把一个字符当做key，字符出现的次数当做value 保存在obj中
for (var i = 0; i < str.length; i++) {
    if (obj[str[i]]) { //遍历
        obj[str[i]]++  //如果存在就让它的值加1
        console.log("1:",obj);
    }
    else {
        obj[str[i]] = 1  // 不存在则添加一个1，比如：“a”:1
        console.log("2:",obj);
    }
}
console.log(obj);
//程序执行到这一步的时候 obj={ "a":2 , "b":3 , "c":4 }
//然后用for in 来遍历 obj 对象里面的值

var maxValue = 0;
var maxStr = "";
for (var i in obj) {
    if (obj[i] > maxValue) {
        maxValue = obj[i];
        maxStr = i
    }
}
console.log("出现最多的元素为：" + maxStr + "出现" + maxValue + "次");
