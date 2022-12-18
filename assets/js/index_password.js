function definicionVar() {
    let selector1value = document.querySelector("#selector1").value;
    let selector2value = document.querySelector("#selector2").value;
    let selector3value = document.querySelector("#selector3").value;
    password = selector1value+selector2value+selector3value;
    return password
}

function verificar(passwordReturn) {
    if (passwordReturn == "911") {
        document.querySelector("#respuesta").innerHTML = "PASSWORD 1 ESTA CORRECTO";
    } else if (passwordReturn == "714") {
        document.querySelector("#respuesta").innerHTML = "PASSWORD 2 ESTA CORRECTO";
    } else {
        document.querySelector("#respuesta").innerHTML = "PASSWORD INCORRECTO, VUELVE A INTENTARLO";
    }
}

