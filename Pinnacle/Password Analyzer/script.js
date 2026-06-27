const passwordInput = document.getElementById("password");
const checkBtn = document.getElementById("checkBtn");
const toggleBtn = document.getElementById("toggleBtn");
const generateBtn = document.getElementById("generateBtn");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const scoreText = document.getElementById("score");

const lengthItem = document.getElementById("length");
const upperItem = document.getElementById("upper");
const lowerItem = document.getElementById("lower");
const numberItem = document.getElementById("number");
const symbolItem = document.getElementById("symbol");

const suggestions = document.getElementById("suggestions");

const commonPasswords = [
"123456",
"password",
"admin",
"qwerty",
"abc123",
"welcome",
"letmein",
"password123"
];

checkBtn.addEventListener("click", analyzePassword);
function analyzePassword(){

const password = passwordInput.value;

let score = 0;

suggestions.innerHTML = "";

const hasUpper = /[A-Z]/.test(password);
const hasLower = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);
const hasSymbol = /[^A-Za-z0-9]/.test(password);

if(password.length >= 8){

score +=20;
lengthItem.innerHTML="✅ Minimum 8 Characters";

}else{

lengthItem.innerHTML="❌ Minimum 8 Characters";
addSuggestion("Password should contain at least 8 characters.");

}

if(hasUpper){

score+=20;
upperItem.innerHTML="✅ Uppercase Letter";

}else{

upperItem.innerHTML="❌ Uppercase Letter";
addSuggestion("Add at least one uppercase letter.");

}

if(hasLower){

score+=20;
lowerItem.innerHTML="✅ Lowercase Letter";

}else{

lowerItem.innerHTML="❌ Lowercase Letter";
addSuggestion("Add at least one lowercase letter.");

}

if(hasNumber){

score+=20;
numberItem.innerHTML="✅ Number";

}else{

numberItem.innerHTML="❌ Number";
addSuggestion("Include at least one number.");

}

if(hasSymbol){

score+=20;
symbolItem.innerHTML="✅ Special Character";

}else{

symbolItem.innerHTML="❌ Special Character";
addSuggestion("Use special characters like @,#,$,%,&.");

}

if(commonPasswords.includes(password.toLowerCase())){

score=10;

addSuggestion("This password is very common. Choose a stronger password.");

}

scoreText.innerHTML="Score : "+score+"/100";


if(score<=20){

strengthText.innerHTML="Strength : Very Weak";
strengthBar.style.width="20%";
strengthBar.style.background="red";

}

else if(score<=40){

strengthText.innerHTML="Strength : Weak";
strengthBar.style.width="40%";
strengthBar.style.background="orange";

}

else if(score<=60){

strengthText.innerHTML="Strength : Medium";
strengthBar.style.width="60%";
strengthBar.style.background="gold";

}

else if(score<=80){

strengthText.innerHTML="Strength : Strong";
strengthBar.style.width="80%";
strengthBar.style.background="limegreen";

}

else{

strengthText.innerHTML="Strength : Very Strong";
strengthBar.style.width="100%";
strengthBar.style.background="green";

}

}

function addSuggestion(message){

const li=document.createElement("li");

li.textContent=message;

suggestions.appendChild(li);

}


toggleBtn.addEventListener("click",()=>{

if(passwordInput.type==="password"){

passwordInput.type="text";
toggleBtn.innerHTML="Hide";

}

else{

passwordInput.type="password";
toggleBtn.innerHTML="Show";

}

});


generateBtn.addEventListener("click",()=>{

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

let password="";

for(let i=0;i<16;i++){

password+=chars.charAt(Math.floor(Math.random()*chars.length));

}

passwordInput.value=password;

});