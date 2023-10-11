const userMail=localStorage.getItem("userE-mail");
const logoutButton=document.querySelector(".logout-click")
const getinfo=document.querySelector("h1");
getinfo.textContent=`Hello,${userMail} `;

logoutButton.addEventListener("click",()=>
{
    localStorage.removeItem("userE-mail");
    window.location.href="index.html";
   
})