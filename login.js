const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "talha" && password === "password"){
        return true
    }else{
        return false
    }
}
// const logoutBtn = document.querySelector(".logout-btn")
// logoutBtn.addEventListener("click",()=>{
//     window.location.replace("login.html")
// })