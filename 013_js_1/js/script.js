let redBtn = document.querySelector('#btn1');
let blueBtn = document.querySelector('.btn2');
let colorSq = document.querySelector('.color');
let revColor = document.querySelector('.remove-color');

function redColor(){
    //colorSq.classList.add('red');
    //colorSq.classList.remove('blue');
    colorSq.classList.toggle('red');    //przełącznik
};

function blueColor(){
    colorSq.classList.add('blue');
    colorSq.classList.remove('red');
};

function removeColor(){
    colorSq.classList.remove('red', 'blue')
}

redBtn.addEventListener('click', redColor);
blueBtn.addEventListener('click', blueColor);
revColor.addEventListener('click', removeColor);
