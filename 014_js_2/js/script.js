let btn = document.querySelector('.arrow');
let arrow = document.querySelector('.fas');
let pic = document.querySelector('.item1');

function downFunction(){
    pic.classList.toggle('show');
    if(pic.classList.contains('show'))
        arrow.style.transform= 'rotate(180deg)'
    else
        arrow.style.transform= 'rotate(0deg)'
};

btn.addEventListener('click', downFunction);