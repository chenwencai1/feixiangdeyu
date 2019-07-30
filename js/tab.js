var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');
//循环LI，给每个LI绑定点击事件
for (let i = 0; i < navList.length; i++) {
    //navList[i]:当前循环中操作的LI（i变量存储的值是我们需要的索引值）
    navList[i].onclick = function () {
        //解决方法一：自定义属性思想
        /* 在循环给每一个LI绑定点击事件的时候，给每一个LI（元素对象）设置一个自定义属性值zfIndex,属性值存储的是当前LI的所以索引 ,this.zfIndex调用*/
        //navList[i].zfIndex=i;
        //循环是var时，等执行changeTab(i)时，i=3
        changeTab(i);//this.zfIndex
        /* 只有JS代码加载完毕才能看到页面，看到页面才能点击，此时绑定是没有执行，函数是代码字符串 */

    }
}

    //封装函数，实现选项卡切换
    //clickIndex:创建函数的时候还不知道创建的是谁，所以定义一个形参，（点击这项的索引），执行方法吧点击的索引传过来。
    function changeTab(clickIndex) {
        //1.想让所有的li和div都没有active样式
        for (var i = 0; i < navList.length; i++) {
            navList[i].className = '';
            tabList[i].className = '';
        }
        //2.让选中的li和div拥有active样式
        for (var i = 0; i < navList.length; i++) {
            navList[clickIndex].className = 'active';
            tabList[clickIndex].className = 'active';
        }

    }
    /* =====其他解决方法======= */
    /* 
    
    
    */
