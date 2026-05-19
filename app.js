let submitBtn = document.querySelector("#submitBtn");
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let category = document.querySelector('#gender');
submitBtn.addEventListener("click", function (event) {
event.preventDefault(); 
console.log('your first name is ' , fname.value , ' , your last name is ' , lname.value, 'and your gender is ' , category .value );

});
