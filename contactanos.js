const logform = document.querySelector(".form");
const nombres = document.getElementById("nombres");
const user = document.getElementById("user");
const password = document.getElementById("password");
const formContainer = document.querySelector(".contact_form")

const dataUser = {
    nombres:"Felipe",
    user: "Feli.Panda",
    password: "soyunpanda"
}

const infoLS = (key, value) => {
    localStorage.setItem(key,JSON.stringify(value));
}

const getInfoLS= (key) => {
    return JSON.parse(localStorage.getItem(key));
}

logform.onsubmit = (e) => {
    e.preventDefault()
    if(nombres.value === dataUser.nombres && user.value === dataUser.user && password.value === dataUser.password){
        infoLS("login", true);
        formContainer.style.display = "none"
        validationLogin(getInfoLS("login"))
        swal({
            icon: 'success',
            text: '¡Iniciaste sesión con exito!',
            button: 'Inicio'
        })
        // window.location.href = "../index.html"
    } else{
        swal(
            '¡Error al iniciar sesión!',
            'intente nuevamente',
            'error'
        )     
    }
}

//It validates if you are logged in and if so then it sends you to the home page
//corregir que al darle click a boton del sweet alert me lleve a la pagina de inicio.

const validationLogin = (value) => {
    if (value === true){
        formContainer.style.display = "none"
        // window.location.href = "../index.html"
    }
}

validationLogin(getInfoLS("login"))