/**
 * MD5
 * ts: 1000
 * private key:
 * public key:
 * private_key
 */
let btn_Borrar = document.getElementById('btn-Borrar');

let public_key = '08066e59f8350bbfbd52de46eb5890b9';
let private_key = '08dffc852508a4fa3fd49a93debcc26d944fe481';
let hash = '1b9b7f994c0cb6a318a2e905e4f802d9';

let url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${public_key}&ts=1000&hash=${hash}`;

// async function marvel(){;
//     let response = await fetch(url);
//     let data = await response.json();
//     let results = data.data.results;
//     console.log(results);
//     results.map( item => {
//         let nombre = item.name;
//         let img = document.createElement('img');
//         img.src = item.thumbnail.path + "." + item.thumbnail.extension;

//         console.log(item.name)
//         document.body.append(img);
//     })
// }

// marvel();

async function buscarImagen () {
    let response = await fetch(url);
    let data = await response.json();
    let results = data.data.results;

    results.map( item => {
        
    })
    let img = document.createElement('img');
    img.src = item.thumbnail.path + "." + item.thumbnail.extension;


    console.log(results);
}

buscarImagen();


// function marvel(){;

//     // Encadenado de promesas 
//     fetch(url)
//         .then((results) => {
//             return results.json();
//         })
//         .then((json) => {
//             let results = json.data.results;
//             results.map((item) => {
//                 let img = document.createElement('img');
//                 img.src = item.thumbnail.path + "." + item.thumbnail.extension;
//                 document.body.append(img);

//             })
//         });
// }
// // Crear un input donde reciba las letras con las cuales empieza a buscar el personaje, antes de la imagen poner el nombre del personaje y un boton de limpiar 
// marvel();


// function Borrar () {
    
// }