/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/
/*document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}
*/
// 图片切换练习
let myImg = document.querySelector('img');
myImg.onclick = function(){
    let imgName = myImg.getAttribute('src');
    if(imgName === 'images/carton.jpg'){
        myImg.setAttribute('src','images/lyf2.jpg');
    }
    else{
        myImg.setAttribute('src','images/carton.jpg');
    }
}
//自定义用户欢迎语练习
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName; 
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

myButton.onclick = function() {
    setUserName();
};

