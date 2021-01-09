let down = document.querySelector('.down');
let up = document.querySelector('.up');
let color = document.querySelector('.color');
let text = document.querySelector('.text p');

let i = 20;

function funDown(){
    i-=3;
    text.style.fontSize= i + 'px';
};

function funUp(){
    i+=3;
    text.style.fontSize= i + 'px';
};

function funColor(){
    text.style.color= 'gold';
};

down.addEventListener('click', funDown);
up.addEventListener('click', funUp);
color.addEventListener('click', funColor);

