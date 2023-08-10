let subtituloName = document.getElementById('subtituloName');
let nameUser = document.getElementById('nameUser');
let imagen = document.getElementById('imagen');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

let url = "https://randomuser.me/api/";

async function getUser(){
    let response = await fetch(url);
    let data = await response.json();
    let results = data.results[0];

    //IMAGEN USER
    let img = results.picture.large;
    imagen.src = img;

    //Sacar nombre
    let nombre = results.name.first;
    let apellido = results.name.last
    let nombreCompleto = nombre + " " + apellido;
    btn1.addEventListener('mouseover', () => {
        subtituloName.innerHTML = "Hi, My name is";
        nameUser.innerHTML = nombreCompleto;
    })
    
    // Sacar email
    let email = results.email;
    btn2.addEventListener('mouseover', () => {
        subtituloName.innerHTML = "My email address is";
        nameUser.innerHTML = email;
    })

    //Sacar Cumpleaños
    let Cumpleaños = results.dob.date;
    btn3.addEventListener('mouseover', () => {
        subtituloName.innerHTML = "My birthday is";
        nameUser.innerHTML = Cumpleaños;
    })

    //Sacar Direccion
    let Direccion = results.location.street.number + " " + results.location.street.name;
    btn4.addEventListener('mouseover', () => {
        subtituloName.innerHTML = "My address is";
        nameUser.innerHTML = Direccion
    })

    //Sacar Telefono
    let Telefono = results.phone
    btn5.addEventListener('mouseover', () => {
        subtituloName.innerHTML = "My phone number is";
        nameUser.innerHTML = Telefono;
    })

    //Sacar Contraseña
    let Contraseña = results.login.password;
    btn6.addEventListener('mouseover', () => {
        subtituloName.innerHTML = "My password is"
        nameUser.innerHTML = Contraseña;
    })
    // console.log(results.name.first + " " + results.name.last); 
}

getUser();
