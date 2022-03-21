
function changeOrientation(){ 
    if(screen.width<700){
    document.getElementsByTagName('nav')[0].innerHTML=`<img src="./assets/images/icons/modern-menu-icon-for-mobile-apps-and-websites-vector-16849184.png" class='menu-icon'  onclick="dropDown()">`
    document.getElementsByTagName('h1')[1].innerText='Lorem ipsum, dolor sit amet consectetur adipisicing.'
    document.querySelector('.firstpage-back').innerHTML=`<div class="boxone"></div>
    <div class="boxtwo"></div>`
    console.log(screen.width);
  }
    else{
      document.getElementsByTagName('h1')[1].innerText='Welcome to Devhub'
      document.querySelector('.firstpage-back').innerHTML=''
    }
    document.querySelector('.listed-items').style.visibility='hidden'
    document.getElementsByTagName('header')[0].style.height='0vh'
}


function dropDown(){
    if(document.getElementsByTagName('header')[0].style.height==='110vh'){
    document.getElementsByTagName('header')[0].style.height='0vh'
    document.getElementsByTagName('nav')[0].innerHTML=`<img src="./assets/images/icons/modern-menu-icon-for-mobile-apps-and-websites-vector-16849184.png" class='menu-icon'  onclick="dropDown()">`
    document.querySelector('.listed-items').style.visibility='hidden'
}
else{
    document.getElementsByTagName('header')[0].style.height='110vh'
    document.getElementsByTagName('nav')[0].innerHTML=`<img src="./assets/images/icons/images.png" class="cancel" onclick="dropDown()">`

    setTimeout(()=>{
        document.querySelector('.listed-items').style.visibility='visible'
    },500)
    }
}

goToTeam=()=>{
  
}
console.log('Hello World!');


const all = (arr,fn) => arr.every(fn);

console.log(typeof Number)// true
console.log(all(["tu", 2, 3],x=>x>10)); // true


