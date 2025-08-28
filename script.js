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
   alert('successful');
console.log('ok');
    
}
}












// Save this as script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  // Email validation pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Check if any field is empty
  if (!name || !email || !message) {
    errorMsg.textContent = 'Please fill in all fields.';
    return;
  }

  // Check if email is valid
  if (!email.match(emailPattern)) {
    errorMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  // If all is good
  errorMsg.textContent = '';
  alert('Form submitted successfully!');
});