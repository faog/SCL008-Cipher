//I. Implementación para ocultar sección 1 (boxOne) y mostrar sección 2 (boxTwo)

//Constante que obtiene el evento click del boton btnUse
const button_use = document.getElementById('btnUse');

//Arrow function que ocurre cuando el usuario presionar el boton "Usar", oculta la sección 1 y muestra la sección 2
button_use.addEventListener('click',()=>{

    let cipherScreen=document.getElementById("boxTwo");
    cipherScreen.style.display="block";
    let welcomeScreen=document.getElementById("boxOne");
    welcomeScreen.style.display="none";  

})

//II. Implementación para ocultar sección 2 (boxTwo) y mostrar sección 3 (boxThree)

//a) Constante que obtiene el evento click del boton btnEncode
const button_encode = document.getElementById('btnEncode');

//Arrow function que ocurre cuando el usuario presionar el boton "Cifrar", oculta la sección 2 
//y muestra la sección 3 con el texto cifrado
button_encode.addEventListener('click',()=>{
    //constantes para guardar los datos desde el html
    const inputOffset=document.getElementById('offset')
    const inputText=document.getElementById('text')

    //Guarda en las variables (valueOffset y valueText) los datos, para traspasarlas al cipher.js
    let valueOffset=inputOffset.value;
    let valueText=inputText.value;

    //Se trae del cipher.js el resultado de ccipher.encode y lo imprime en la pantalla de resultados
    //(resultText)
    document.getElementById("resultText").innerHTML
    += cipher.encode(valueOffset, valueText);

    //Activa la ventana n°3
    let resultEncodeScreen=document.getElementById("boxThree");
    resultEncodeScreen.style.display="block";
    //Desactiva la ventana n°2
    let cipherScreen=document.getElementById("boxTwo");
    cipherScreen.style.display="none";

})

//b) Constante que obtiene el evento click del boton btnDecode
const button_decode = document.getElementById('btnDecode');

//Arrow function que ocurre cuando el usuario presionar el boton "Cifrar", oculta la sección 2 
//y muestra la sección 3 con el texto cifrado
button_decode.addEventListener('click',()=>{
    //constantes para guardar los datos desde el html
    const inputOffset=document.getElementById('offset')
    const inputText=document.getElementById('text')

    //Guarda en las variables (valueOffset y valueText) los datos, para traspasarlas al cipher.js
    let valueOffset=inputOffset.value;
    let valueText=inputText.value;

    //Se trae del cipher.js el resultado de ccipher.encode y lo imprime en la pantalla de resultados
    //(resultText)
    document.getElementById("resultText").innerHTML
    += cipher.decode(valueOffset, valueText);

    //Activa la ventana n°3
    let resultEncodeScreen=document.getElementById("boxThree");
    resultEncodeScreen.style.display="block";
    //Desactiva la ventana n°2
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