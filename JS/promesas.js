// let promise = new Promise(function(resolve, reject){
//     // Ejecutor del codigo, el cantante
//     // setTimeout(() => resolve("hecho"), 1000);
//     setTimeout(() => reject(new Error("Ops!")), 1000);
// });

// // promise.then(
// //     result => alert(result),
// //     error => alert(error)
// // )

// promise.then(
//     result => alert(result)
// )

// promise.catch(
//     error => alert(error)
// )

// consumir informacion desde github 

async function showAvatar(){
    let response = await fetch('/JS/user.json');
    let user = await response.json();

    console.log(user);

    //Leer el usuario de github
    let gitHubResponse = await fetch(`https://api.github.com/users/${user.username}`)
    let gitHubUser = await gitHubResponse.json();

    console.log(gitHubUser);

    //Mostrar el avatar del usuario
    let img = document.createElement('img');
    img.src = gitHubUser.avatar_url;
    document.body.append(img);

    /*
    Utilizando promesas cumplidos 5 segundos elimine la imagen
    */

    await new Promise((resolve, reject) => setTimeout(resolve,5000));

    img.remove();
}

showAvatar();