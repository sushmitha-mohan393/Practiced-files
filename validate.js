
const form=document.getElementById("form")
var error = document.getElementById("errors");

form.addEventListener("submit", (e) => {
  
    e.preventDefault(); 
 
  if(validateForm()){
      window.location.href="finance.html";
     
    var lgnbtn=document.getElementById("lgn");
        var textbt=document.getElementById("btntext");
        var ldn=document.getElementById("loader");
          textbt.textContent="Logging in" ;
          
                    ldn.style.display="inline-block";
          setTimeout(()=>
          {
            lgnbtn.closest("form").submit();},300000000);
                }
       
    });



function validateForm() 
{
    let messages = [];
    
    
    var email = document.getElementById('emailval').value;
    if (email.length === 0) {
        messages.push("Email is required");
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)) {
        messages.push("Email is invalid");
    }

    
 
    var pw = document.getElementById('passval').value;
    if (pw.length === 0) {
        messages.push("Password is required");

    } 

 else if(pw.length<8)
         {
          messages.push("Password must be at least 8 characters");
         } 
    else if (!(pw.match(/(?=.*\d)/)))
         {
        messages.push("Password must at least contain one digit");
       
    }
    else if(!pw.match(/(?=.*[a-z])/))
    {
      messages.push("Password must at least contain one lowercase character");
        
    }
    else if(!pw.match(/(?=.*[A-Z])/))
    {
      messages.push("Password must at least contain one uppercase character");
    }
       
    else if(!pw.match(/(?=.*[@$!%*?&])/))
    {
         messages.push("Password must at least contain one special character");
      
    }
         
     if (messages.length > 0) {
        error.innerHTML = messages.join(", ");
        return false;
    }

   error.innerHTML ="";
    return true;
}

