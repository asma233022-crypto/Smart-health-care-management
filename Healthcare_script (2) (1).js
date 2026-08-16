function openModal(name,speciality,experience,qualification,days,hours,image){

document.getElementById("doctorModal").style.display="flex";

document.getElementById("modalName").innerHTML=name;

document.getElementById("modalSpeciality").innerHTML=speciality;

document.getElementById("modalExperience").innerHTML=experience;

document.getElementById("modalQualification").innerHTML=qualification;

document.getElementById("modalDays").innerHTML=days;

document.getElementById("modalHours").innerHTML=hours;

document.getElementById("modalImage").src=image;

}

function closeModal(){

document.getElementById("doctorModal").style.display="none";

}

window.onclick=function(event){

let modal=document.getElementById("doctorModal");

if(event.target==modal){

modal.style.display="none";

}


}

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank you! Your message has been sent successfully.");

contactForm.reset();

});

}

function openAbout(
title,
tagline,
heading1,
content1,
heading2,
content2,
heading3,
content3,
heading4,
content4,
heading5,
content5,
){

document.getElementById("aboutTitle").innerHTML = title;
document.getElementById("aboutTagline").innerHTML = tagline;

document.getElementById("heading1").innerHTML = heading1;
document.getElementById("content1").innerHTML = content1;

document.getElementById("heading2").innerHTML = heading2;
document.getElementById("content2").innerHTML = content2;

document.getElementById("heading3").innerHTML = heading3;
document.getElementById("content3").innerHTML = content3;

document.getElementById("heading4").innerHTML = heading4;
document.getElementById("content4").innerHTML = content4;

document.getElementById("heading5").innerHTML = heading5;
document.getElementById("content5").innerHTML = content5;

document.getElementById("aboutModal").style.display = "block";
}

function closeAbout(){

document.getElementById("aboutModal").style.display = "none";

}

function calculateBMI(){

let height = document.getElementById("height").value;

let weight = document.getElementById("weight").value;

if(height==="" || weight===""){

document.getElementById("bmiResult").innerHTML=
"Please enter both height and weight.";

return;

}

height = height/100;

let bmi = weight/(height*height);

let category="";
let advice="";

if(bmi<18.5){

category="Underweight";

advice="Eat a balanced, nutritious diet and consult a healthcare professional if needed.";

}

else if(bmi<25){

category="Normal Weight";

advice="Great! Maintain your healthy lifestyle with regular exercise and a balanced diet.";

}

else if(bmi<30){

category="Overweight";

advice="Increase physical activity and reduce high-calorie foods for better health.";

}

else{

category="Obese";

advice="Consult a healthcare professional for personalized guidance on weight management.";

}

document.getElementById("bmiResult").innerHTML=

"<h3>Your BMI: "+bmi.toFixed(2)+"</h3>"+

"<p><strong>Category:</strong> "+category+"</p>"+

"<p>"+advice+"</p>";

}

function calculateCalories(){

let age = parseInt(document.getElementById("age").value);

let gender = document.getElementById("gender").value;

let height = parseFloat(document.getElementById("calHeight").value);

let weight = parseFloat(document.getElementById("calWeight").value);

let activity = parseFloat(document.getElementById("activity").value);

if(!age || !gender || !height || !weight){

document.getElementById("calorieResult").innerHTML =
"Please complete all fields.";

return;

}

let bmr;

if(gender==="male"){

bmr = 10*weight + 6.25*height - 5*age + 5;

}else{

bmr = 10*weight + 6.25*height - 5*age -161;

}

let calories = bmr * activity;

document.getElementById("calorieResult").innerHTML =

"<h3>Daily Calories Needed</h3>" +

"<p><strong>"+Math.round(calories)+" kcal/day</strong></p>" +

"<p>Maintain a balanced diet and regular physical activity for a healthy lifestyle.</p>";

}

function calculateWater(){

let weight = parseFloat(document.getElementById("waterWeight").value);

let activity = parseFloat(document.getElementById("waterActivity").value);

if(!weight){

document.getElementById("waterResult").innerHTML =
"Please enter your weight.";

return;

}

// Base recommendation: 35 mL per kg
let waterML = (weight * 35) + activity;

let liters = waterML / 1000;

let glasses = Math.round(waterML / 250);

document.getElementById("waterResult").innerHTML =

"<h3>Recommended Daily Water Intake</h3>" +

"<p><strong>" + liters.toFixed(2) + " Liters</strong></p>" +

"<p>Approximately <strong>" + glasses + " glasses</strong> of water per day.</p>" +

"<p>💧 Drink water regularly throughout the day to stay hydrated.</p>";

}

function addReminder(){

let name=document.getElementById("medicineName").value;

let dosage=document.getElementById("dosage").value;

let time=document.getElementById("medicineTime").value;

let note=document.getElementById("medicineNote").value;

if(name==="" || dosage==="" || time===""){

alert("Please complete all required fields.");

return;

}

let list=document.getElementById("medicineList");

let item=document.createElement("li");

item.innerHTML=

"<strong>"+name+"</strong><br>"+

"Dosage: "+dosage+"<br>"+

"Time: "+time+"<br>"+

"Notes: "+note+

"<br><button onclick='this.parentElement.remove()'>Delete</button>";

item.style.background="white";

item.style.padding="20px";

item.style.marginBottom="15px";

item.style.borderRadius="12px";

item.style.boxShadow="0 4px 10px rgba(0,0,0,.1)";

list.appendChild(item);

document.getElementById("medicineName").value="";
document.getElementById("dosage").value="";
document.getElementById("medicineTime").value="";
document.getElementById("medicineNote").value="";

}

function openLoginModal(){

document.getElementById("loginModal").style.display="block";

}

function closeLoginModal(){

document.getElementById("loginModal").style.display="none";

}

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let email=document.getElementById("loginEmail").value;

let password=document.getElementById("loginPassword").value;

if(email==="admin@lifecare.com" && password==="123456"){

alert("✅ Login Successful!");

closeLoginModal();

}else{

alert("❌ Invalid email or password.");

}

});

}

function openEmergency(title, subtitle, content){

document.getElementById("emergencyTitle").innerHTML = title;

document.getElementById("emergencySubtitle").innerHTML = subtitle;

document.getElementById("emergencyContent").innerHTML = content;

document.getElementById("emergencyModal").style.display = "block";

}

function closeEmergency(){

document.getElementById("emergencyModal").style.display = "none";

}


function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

}

window.onload=function(){

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark-mode");

}

}