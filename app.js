document.getElementById('clicked').addEventListener('click', function(){

const myName = document.getElementById('my-name');
 const myNameValue = myName.value;
 const my = myNameValue + ''

 const mydearname = document.getElementById('my-dear-name');
 let mydearnamevalue = mydearname.value;
 const dear = mydearnamevalue + ''
 const luck = document.getElementById('wish');
 const mathNumber = Math.round(Math.random() * 100);
 if (mathNumber > 10 && dear.length >= 2 && my.length >= 2) {
   
    const showBord = document.getElementById('show-bord');
    const number = showBord.value;
 
    showBord.innerText = parseFloat(mathNumber)
     
    
    luck.style.visibility='visible'
 } else {
    alert('Are you Robot')
    luck.style.visibility='hidden'
 }
});
