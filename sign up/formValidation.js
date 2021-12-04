function formValidation(){
 
 var firstname = document.getElementById('fname');
 var lastname = document.getElementById('lname');

 
 
 var email = document.getElementById('email');
 var pswd = document.getElementById('pass');
 var rpswd = document.getElementById('cpass');
 
 var chk = document.getElementById('check');
 
 if(firstname.value.length == 0){
 document.getElementById('head').innerText = "* This field is mandatory *";

 firstname.focus();
 return false;
 }
 if(addr.value.length == 0){
 document.getElementById('formm').innerText = "* This field is mandatory *";

 addr.focus();
 return false;
 }
  if(pswd.value.length == 0){
 document.getElementById('formm').innerText = "* This field is mandatory *";

 addr.focus();
 return false;
 }
 if(rpswd.value.length == 0){
 document.getElementById('formm').innerText = "* This field is mandatory *";

 addr.focus();
 return false;
 }
 if(dobt.value.length == 0){
 document.getElementById('formm').innerText = "* This field is mandatory *";

 addr.focus();
 return false;
 }
  if(chk.value.length == 0){
 document.getElementById('formm').innerText = "* This field is mandatory *";

 addr.focus();
 return false;
 }

 if(inputAlphabet(firstname, "* Please use alphabets only for your first name *")){
	 
 if(inputAlphabet(lastname, "* Please use alphabets only for your last name *")){

 if(emailValidation(email, "* Please enter a valid email address *")){

 if(textNumeric(cont, "* Please enter a valid phone number *")){
	 
 if(lengthDefine(cont,10,"* Please enter 10 numbers of your phone number *")){
	 
 if(trueSelection(state, "* Please Choose any one option")){

 

 return true;
 }
 }
 }
 }
 }
 }


 return false;

}

function textNumeric(inputtext, alertMsg){
 var numericExpression = /^[0-9]+$/;
 if(inputtext.value.match(numericExpression)){
 return true;
 }else{document.getElementById('p4').innerText = alertMsg; 
 inputtext.focus();
 return false;
 }
}

function inputAlphabet(inputtext, alertMsg){
 var alphaExp = /^[a-zA-Z]+$/;
 if(inputtext.value.match(alphaExp)){
 return true;
 }else{
 document.getElementById('p1').innerText = alertMsg;
 document.getElementById('p2').innerText = alertMsg; 
inputtext.focus();
 return false;
 }
}
function textAlphanumeric(inputtext, alertMsg){
 var alphaExp = /^[0-9a-zA-Z]+$/;
 if(inputtext.value.match(alphaExp)){
 return true;
 }else{
 document.getElementById('p3').innerText = alertMsg; 
 inputtext.focus();
 return false;
 }
}
function lengthDefine(inputtext,max){
 var uInput = inputtext.value;
 if(uInput.length <= max){
 return true;
 }else{

 document.getElementById('p4').innerText = alertMsg;

 inputtext.focus();
 return false;
 }
}

function trueSelection(inputtext, alertMsg){
 if(inputtext.value == "Please Choose"){
 document.getElementById('p').innerText = alertMsg; 
 inputtext.focus();
 return false;
 }else{
 return true;
 }
}

function emailValidation(inputtext, alertMsg){
 var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
 if(inputtext.value.match(emailExp)){
 return true;
 }else{
 document.getElementById('p3').innerText = alertMsg; 
 inputtext.focus();
 return false;
 }
}
