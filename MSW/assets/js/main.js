// document.querySelector(".icon").onclick=function() {myFunction()};
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
var list = document.querySelector(".list");
var member = list.querySelectorAll(".list-member a");
for (var i = 0; i < member.length; i++) {
    member[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  return false;
 
  });
}
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}
toggle.addEventListener("click", toggleMenu, false);


const nav = document.querySelector('nav');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);
let main=document.querySelector("main")
let getstarted = document.getElementsByClassName('get-started-btn');
for (var i = 0; i < getstarted.length; i++) {
  getstarted[i].addEventListener('click', function openPlan()  {
    var payment=document.querySelector("#payment");
    const plansection = document.getElementById('plan');
    if (payment.style.display === 'none') {
    //   // 👇️ this SHOWS the form
      payment.style.display = 'table-cell';
      if (payment.style.display = 'table-cell') {
        var closePayment=document.querySelector(".closeBtn")
        closePayment.onclick=function() {
        payment.style.display="none";
      }
      }

    } 
    else {
    //   // 👇️ this HIDES the form
      payment.style.display = 'none';
    }
   });
  
}



var signinbtn=document.querySelector(".btn-signin");
var modal = document.getElementById('signin-part');
signinbtn.onclick=function () {
  modal.style.display="block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    // if (event.target == payment) {
    //   payment.style.display = "none";
    // }
}
var closeSignin=document.querySelector(".closeButton")
closeSignin.onclick=function() {
  modal.style.display="none";
}

function paymentAction() {
  document.querySelector(".modal-content").action = "/action_page.php";
  document.getElementById("demo").innerHTML = "The value of the action attribute was changed to /action_page.php.";
}
 let search=document.querySelector(".search");
 let searchform=document.querySelector(".header__search")
 search.onclick=function () {
  searchform.style.display="block";
 }