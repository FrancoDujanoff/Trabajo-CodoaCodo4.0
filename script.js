const cantidad= document.getElementById("cantidad");
const descuento= document.getElementById("categoria");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("email");

function estudiante(){
    const descuento= document.getElementById("categoria");
    descuento.value = "estudiante";
}
function trainee(){
    const descuento= document.getElementById("categoria");
    descuento.value = "trainee";
}
function junior(){
    const descuento= document.getElementById("categoria");
    descuento.value = "junior";
}

function norecargar(){
    let form = document.querySelector("form");
    if (form.checkValidity()){
        event.preventDefault();
        resumen()
    }
}

function norecargar2(){
    event.preventDefault();
    borrar()
}

function borrar(){
    const cantidad= document.getElementById("cantidad");
    const descuento= document.getElementById("categoria");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("email");
    const boton = document.getElementById("botonEnviar");
    const div = document.getElementById("no");

    cantidad.value = 0;
    descuento.value = 0;
    nombre.value = "";
    apellido.value = "";
    correo.value = "";

    boton.disabled = false;
    nombre.disabled = false;
    apellido.disabled = false;
    correo.disabled = false;
    cantidad.disabled = false;
    div.innerHTML = "";

    document.getElementById("total_a_pagar").innerHTML = "Total a pagar:$";
}

function resumen(){
    const cantidad= document.getElementById("cantidad");
    const descuento= document.getElementById("categoria");

    let c = cantidad.value;
    let d = descuento.value;
    let d1 = 0;

    if(d=="estudiante"){
        d1 = 0.80;
    }
    if(d=="trainee"){
        d1 = 0.50;
    }
    if(d=="junior"){
        d1= 0.15;
    }

    let total = 200*c;
    let totalfinal = total - (total*d1);

    document.getElementById("total_a_pagar").innerHTML = "Total a pagar:$" + totalfinal;
}

function botonEnvio(){
    const clase = document.getElementById("categoria").value;
    const boton = document.getElementById("botonEnviar");
    const div = document.getElementById("no");
    const cantidad= document.getElementById("cantidad");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("email");

    if(clase === "nada"){
        boton.disabled = true;
        nombre.disabled = true;
        apellido.disabled = true;
        correo.disabled = true;
        cantidad.disabled = true;
        div.innerHTML = "<p>*La compra esta deshabilitada para personas sin descuento*</p>"
    } else {
        boton.disabled = false;
        nombre.disabled = false;
        apellido.disabled = false;
        correo.disabled = false;
        cantidad.disabled = false;
        div.innerHTML = "";
    }

}
