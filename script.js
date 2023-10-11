const formSubmit=document.querySelector(".form-submission")
const userMail=document.querySelector("#email-input")
const userPass=document.querySelector("#password-input")
const emailRegex=/^\w{3,}@\w{2,}\.\w{2,}$/
const passRegx=/^\S{6,}$/

formSubmit.addEventListener("submit",(e)=>
{
const emailValidation=document.querySelector(".isvalid")
const submitMessage=document.getElementById("submit-result");

const emailIsValid=emailRegex.test(userMail.value)
const passIsValid=passRegx.test(userPass.value)
if(emailIsValid===true && passIsValid==true)
{
    submitMessage.textContent="All Field is Valid";
    localStorage.setItem("userE-mail",userMail.value)
    localStorage.setItem("password",userPass.value)
    window.location.href="profilepage.html"
  }
    else if(emailIsValid===false && passIsValid===true)
{
    emailValidation.textContent="Email is not valid"
}
else if(passIsValid===false && emailIsValid===true)
{
    const passValidation=document.querySelector(".validation")
    passValidation.textContent="password is not valid";
}
else if(emailIsValid===false && passIsValid==false)
{
    emailValidation.textContent="Email is not valid"
    const passValidation=document.querySelector(".validation")
    passValidation.textContent="password is not valid";
}

e.preventDefault();

}

);