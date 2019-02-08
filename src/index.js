//I. Implementación para ocultar sección 1 (boxOne) y mostrar sección 2 (boxTwo)

//Constante para almacenar la caja 2 (boxTwo)
const containerTwo = document.getElementById('boxTwo');

//Constante que obtiene el evento click del boton btnUse
const button_use = document.getElementById('btnUse');

//Arrow function que ocurre cuando el usuariopresionar el boton "Usar", oculta la sección 1 y muestra la sección 2
button_use.addEventListener('click',()=>{

let cipherScreen=document.getElementById("boxTwo");
cipherScreen.style.display="block";
let welcomeScreen=document.getElementById("boxOne");
welcomeScreen.style.display="none";  

})

//II. Implementación para ocultar sección 2 (boxTwo) y mostrar sección 3 (boxThree)

//Constante para almacenar la sección 3 (boxTwo)
const containerThree = document.getElementById('boxThree');

//a) Constante que obtiene el evento click del boton btnEncode
const button_encode = document.getElementById('btnEncode');

//Arrow function que ocurre cuando el usuariopresionar el boton "Cifrar", oculta la sección 2 y muestra la sección 3
button_encode.addEventListener('click',()=>{

let resultEncodeScreen=document.getElementById("boxThree");
resultEncodeScreen.style.display="block";

let cipherScreen=document.getElementById("boxTwo");
cipherScreen.style.display="none";  

})

//b) Constante que obtiene el evento click del boton btnDecode
const button_decode = document.getElementById('btnDecode');

//Arrow function que ocurre cuando el usuario presionar el boton "Decifrar", oculta la sección 2 y muestra la sección 3
button_decode.addEventListener('click',()=>{

let resultDecodeScreen=document.getElementById("boxThree");
resultDecodeScreen.style.display="block";

let cipherScreen=document.getElementById("boxTwo");
cipherScreen.style.display="none";  

})

/*III. Implementación para ingresar nuevo texto a evaluar (ocultar sección 2 (boxTwo) 
/y mostrar sección 3 (boxThree))*/

const button_newText = document.getElementById('btnNewText');

/*Arrow function que ocurre cuando el usuario presionar el boton "Decifrar", 
oculta la sección 3 y muestra la sección 2*/

button_newText.addEventListener('click',()=>{

let cipherScreen=document.getElementById("boxTwo");
cipherScreen.style.display="block"; 

let resultDecodeScreen=document.getElementById("boxThree");
resultDecodeScreen.style.display="none";

})

//IV. Implementación boton salir (redirije a google)

const button_exit = document.getElementById('btnExit');

/*Arrow function que ocurre cuando el usuario presionar el boton "Decifrar", 
oculta la sección 3 y muestra la sección 2*/

button_exit.addEventListener('click',()=>{
    
    return alert("Gracias por usar esta aplicación. Hasta la próxima");

})