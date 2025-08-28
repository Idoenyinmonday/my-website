function myFunction(){
   var form=document.getElementById('form').value;
var email=document.getElementById('email').value;
var password=document.getElementById('Password').value;
var main=document.getElementById('error').value;
console.log(email);

if (email==="") {

   var getmain=document.getElementById('error').innerHTML='input email credential';
}

else if(password==="") { 
   var display=document.getElementById('error').innerHTML='input password credential';
}else  {
   window.location.href='index.html';
   alert('successfull');
console.log('ok');
    
}
}










