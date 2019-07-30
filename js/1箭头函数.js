function sum(n, m) {
    return n + m;

}
//箭头函数
let sum = (n, m) => {
    return n + m;
}
//如果函数体中只有return一行语句，可以省略return和大括号

let sum = (n, m) => n + m;
//复杂实例
function fn(n) {
    return function (m) {
        return n + m;
    }

}
//改写为箭头函数
let fn = n => m => n + m;
//步骤分解


//将这个函数改为箭头函数
function sum(n,m){
    if(typeof n==='undefined'){
        n=0;
    }
    if(typeof m==='undefined'){
        m=0;
    }
}
//形参赋值默认值：当没有给形参传递实参时，执行默认值
let sum = (n = 0, m = 0) => n + m;
//箭头函数中没有arguments
//箭头函数中有剩余运算符...arg获取到传递的实参集合，而且它是数组
//实现任意数求和
let sum=(...arg)=>eval(arg.join('+'));
