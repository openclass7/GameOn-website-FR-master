function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



//my work begin here 
const form=document.getElementById('form');
const firstName=document.getElementById('first');
const lastName=document.getElementById('last');
const email=document.getElementById('email');
const birthDate=document.getElementById('birthdate');
const quantity=document.getElementById('quantity');
let town=document.reserve.location;
//let town=document.getElementsByClassName('checkbox-label');
let email_v=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 

form.addEventListener('submit', e=>{
 e.preventDefault();
checkData();


});

function checkData(){
//check firstName
  if (firstName.value===''){
    sentDenied(firstName, 'Saissir un prénom');
  }
  else if(firstName.value.length<2) {
    sentDenied(firstName, 'Prénom moins de 2 caractères, non valide');
  } else{
    sentPermitted(firstName);
  }
  
  //check lastName
  if (lastName.value===''){
    sentDenied(lastName, 'Saissir un nom');
  }
  else if(lastName.value.length<2) {
    sentDenied(lastName, 'Nom moins de 2 caractères, non valide');
  } else{
    sentPermitted(lastName);
  }
   //check Email
   if (email.value===''){
    sentDenied(email, 'Saissir un email');
  }
  else if(email_v.test(email.value)===false) {
    sentDenied(email, 'Saissir un email valid');
  } else{
    sentPermitted(email);
  }
  //check birthday
  if(birthDate.value===''){
    sentDenied(birthDate,'Saisir une date de naissance');
  } else{
    sentPermitted(birthDate);
  }
  //check participation's number
  if(quantity.value===''){
    sentDenied(quantity,'Choisir un nombre');
  } else{
    sentPermitted(quantity);
  }

  //check radio


  for(let i=0; i<town.length;i++){
    
    if(!town[i].checked){
   
      alert('choisir une ville');
    
      break;
    }else{
      return true;
        
      
    }
  }
 
  




  /*let data_array=document.reserve.location;
function checkRadio(){
// let data_radio =false;
for(let i=0; i<data_array.length;i++){
  if(data_array[i].checked){
   return true;
    break;
  }else{
    return false;
    alert('Choisir une ville');
  }
}

}*/



}


function sentDenied(input, message){
  const formData =input.parentElement;
  const span =formData.querySelector('span');
  input.style.border="solid 2px red";
  span.innerText=message;
  span.style.color="red";
  span.style.fontSize="15px";
}

function sentPermitted(input){
  const formData =input.parentElement;
  const span =formData.querySelector('span');
  input.style.border="solid 3px lightgreen";
  span.innerText='';
  
}




// avoir regex pour l'email valide
//la case valide ne redevient pas verte quand je clique sur la case suivant , elle passe au vert aprés "submit"
// function validate(){
//   let radio1=document.getElementById('');
//   let radio2=document.getElementById('');
//   let radio3=document.getElementById('');
//   let radio4=document.getElementById('');
//   let radio5=document.getElementById('');
//   if(radio1==""&&radio2==''&&radio3==''){
//     return false;
//   } else{
//     return true;
//   }
// }