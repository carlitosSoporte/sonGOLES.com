let botonEnviar = document.getElementById("enviar")
let nombres = document.getElementById("nombres")
let apelidos = document.getElementById("apellidos")
let fechaNacimiento = document.getElementById("fechaNacimiento")
let ciudad = document.getElementById("ciudad")
let email = document.getElementById("email")
let terminosCondiciones = document.getElementById("terminosCondiciones")

botonEnviar.addEventListener("click",(evento)=>{

    evento.preventDefault

    if(nombres.value==""){
        nombres.classList.remove("is-valid")
        nombres.classList.add("is-invalid")
    }
    else{
        nombres.classList.remove("is-invalid")
        nombres.classList.add("is-valid")
    }

    if(apelidos.value==""){
        apelidos.classList.remove("is-valid")
        apelidos.classList.add("is-invalid")
    }
    else{
        apelidos.classList.remove("is-invalid")
        apelidos.classList.add("is-valid")
    }

    if(fechaNacimiento.value==""){
        fechaNacimiento.classList.remove("is-valid")
        fechaNacimiento.classList.add("is-invalid")
    }
    else{
        fechaNacimiento.classList.remove("is-invalid")
        fechaNacimiento.classList.add("is-valid")
    }

    if(ciudad.value==""){
        ciudad.classList.add("is-invalid")
    }
    else{
        ciudad.classList.remove("is-invalid")
        ciudad.classList.add("is-valid")
    }

    if(email.value==""){
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
    }
    else{
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
    }

    if(!terminosCondiciones.checked){
        terminosCondiciones.classList.add("is-valid")
        terminosCondiciones.classList.add("is-invalid")
    }
    else{
        terminosCondiciones.classList.remove("is-invalid")
        terminosCondiciones.classList.add("is-valid")
    }

})