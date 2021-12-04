// 经过上次讨论会后我发现我的轮播图还存在许多不足
// 甚至还有许多大问题，所以我决定重新完成一次轮播图

// 相较于上次的轮播图有许多的改进，但还是有很多不足之处
//有一个致命问题就是：使用了！important，使IE浏览器无法显示

//获取图片节点，数组
let pictures = document.querySelectorAll('.pictures li');
//获取button节点
let rightBtn = document.querySelector('.rightBtn');
let leftBtn = document.querySelector('.leftBtn');
let i = 0;//连接各事件
let max = pictures.length-1;//采用max作为图片的最大值使点的数量可以随着图片数量而改变

let points = document.querySelector('.points');
//创建点节点
for (let a = 0;a<pictures.length;a++) {
    let li = document.createElement('li');
    points.appendChild(li);
}
let arrPoints = document.querySelectorAll('.points li');//获取点节点，数组
arrPoints[0].classList.add('showPoint');//第0个点设置样式



console.log(max);//4
//清楚类名函数
function clear() {
    for(let a in pictures){
        pictures[a].className = 'all';//清楚图片类名
        arrPoints[a].className = '';//清楚点的类名
    };
};
//i=0时的展示
function showMin() {
    clear();//先清楚类名在对相应图片和点添加类名
    pictures[0].classList.add('showPicture');
    pictures[1].classList.add('showRightPicture');
    pictures[max].classList.add('showLeftPicture');
    arrPoints[0].classList.add('showPoint');
}
showMin();
// i>0且i<max的展示
function show() {
    clear();
    pictures[i].classList.add('showPicture');
    pictures[i-1].classList.add('showLeftPicture');
    pictures[i+1].classList.add('showRightPicture');
    arrPoints[i].classList.add('showPoint');

} 
//i=max的展示
function showMax() {
    clear();
    pictures[max].classList.add('showPicture');
    pictures[0].classList.add('showRightPicture');
    pictures[max-1].classList.add('showLeftPicture');
    arrPoints[max].classList.add('showPoint');
}
//向右函数
function goRight() {
    i = i + 1;
    if(i>0 && i<max) {
        show();
    } else if(i == max) {
        showMax();
    } else {
        i = 0;//当i大于max时，将i重新赋值为0，并展示i=0；
        showMin();
    }
}
//右按钮点击事件注册
rightBtn.addEventListener('click',function(){
    goRight();
});
//向左函数
function goLeft() {
    i = i - 1;
    if(i>0 && i<max) {
        show();
    } else if(i == 0) {
        showMin();
    } else {
        i = max;
        showMax();
    }
}
//左按钮点击事件注册
leftBtn.addEventListener('click',function(){
    goLeft();
});

//自动轮播定时器
let setTime = setInterval(() => {
    goRight();
}, 3000);

for(let a = 0;a<arrPoints.length;a++) {
    //鼠标移入事件注册
    arrPoints[a].addEventListener('mouseover',function(){
        i = a-1;
        goRight();
        clearInterval(setTime);//停止自动轮播
    });
    //鼠标移出继续执行自动轮播
    arrPoints[a].addEventListener('mouseout',function(){
        setTime = setInterval(() =>{
            goRight();
        },3000);
    })
}

