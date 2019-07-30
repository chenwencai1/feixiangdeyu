var tabBox = document.getElementById('tabBox');
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');
//循环绑定事件
for (var i = 0; i < navList.length; i++) {
    navList[i].zfIndex = i;
    navList[i].onmouseout = function () {
        changeTab(this.zfIndex);
    }
    navList[i].onmouseover = function () {
        changeTab(this.zfIndex);
    }
}
//创建函数，实现功能
function changeTab(clickIndex) {
    //1.让所有的LI都没有active样式
    for (var i = 0; i < navList.length; i++) {
        navList[i].className = '';
        tabList[i].className = '';
    }
    //2.当前操作有active样式
    for (var i = 0; i < navList.length; i++) {
        navList[clickIndex].className = 'active';
        tabList[clickIndex].className = 'active';
    }
}