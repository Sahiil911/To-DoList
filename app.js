const input = document.querySelector('.pass')
let str= '';
let arr=[];
const newUl= document.createElement('ul');
const head= document.querySelector('header');
head.appendChild(newUl);
input.addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        if(str===''){
        }
        else{
        arr.push(str);
    const newLi= document.createElement('li');
    newLi.innerHTML=str;
    newUl.appendChild(newLi);
str='';
input.value = " ";
}}
else{
    str +=e.key;
}

});

