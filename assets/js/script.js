function increaseHr(event) {

    document.getElementsByTagName("hr")[
      event.target.lastChild.previousSibling.id
    ].style.width = "45px";
    document.getElementsByTagName("hr")[
        event.target.lastChild.previousSibling.id
    ].style.visibility = "visible";
    if (event.target.lastChild.previousSibling.id == "3") {
      document.getElementsByTagName("hr")[
        event.target.lastChild.previousSibling.id
      ].style.width = "65px";
    }
    if (event.target.lastChild.previousSibling.id == "4") {
      document.getElementsByTagName("hr")[
        event.target.lastChild.previousSibling.id
      ].style.width = "80px";
    }
    if (event.target.lastChild.previousSibling.id == "2") {
      document.getElementsByTagName("hr")[
        event.target.lastChild.previousSibling.id
      ].style.width = "40px";
    }
  }
  function decreaseHr(event) {
    document.getElementsByTagName("hr")[
      event.target.lastChild.previousSibling.id
    ].style.width = "0px";
    document.getElementsByTagName("hr")[
        event.target.lastChild.previousSibling.id
    ].style.visibility = "hidden";
  }


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