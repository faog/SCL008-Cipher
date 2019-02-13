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

//1) Constante que obtiene el evento click del boton btnEncode
const button_encode = document.getElementById('btnEncode');

/*Arrow function que ocurre cuando el usuario presionar el boton de cifrado, oculta la sección 2 
y muestra la sección 3 con el texto cifrado*/
button_encode.addEventListener('click',()=>{

    //constantes para guardar los datos desde el html
    const inputOffset=document.getElementById('offset');
    const inputText=document.getElementById('text');

    //Guarda en las variables (valueOffset y valueText) los datos, para traspasarlas al cipher.js
    let valueOffset=inputOffset.value;
    let valueText=inputText.value;

    //Se trae del cipher.js el resultado de cipher.encode y los guardo en una variable
    let encodeResult=cipher.encode(valueOffset, valueText);
    
    //condición para evaluar los casos en que ingresan carácteres incorrectos
    if(encodeResult){
        //Si no ocurre un error de validación, se escribre el valor decifrado
        document.getElementById("resultText").innerHTML
        += encodeResult;
    }else{
        return;
    }

    //Activa la ventana n°3
    let resultEncodeScreen=document.getElementById("boxThree");
    resultEncodeScreen.style.display="block";
    //Desactiva la ventana n°2
    let cipherScreen=document.getElementById("boxTwo");
    cipherScreen.style.display="none";

})

//2) Constante que obtiene el evento click del boton btnDecode
const button_decode = document.getElementById('btnDecode');

/*Arrow function que ocurre cuando el usuario presionar el boton de decifrado, oculta la sección 2 
y muestra la sección 3 con el texto decifrado*/
button_decode.addEventListener('click',()=>{

    //constantes para guardar los datos desde el html
    const inputOffset=document.getElementById('offset');
    const inputText=document.getElementById('text');

    //Guarda en las variables (valueOffset y valueText) los datos, para traspasarlas al cipher.js
    let valueOffset=inputOffset.value;
    let valueText=inputText.value;

    //Se trae del cipher.js el resultado de cipher.decode y los guardo en una variable  
    let decodeResult=cipher.decode(valueOffset, valueText);

    //condición para evaluar los casos en que ingresan carácteres incorrectos
    if(decodeResult){
        //Si no ocurre un error de validación, se escribre el valor decifrado
        document.getElementById("resultText").innerHTML
        += decodeResult;
    }else{
        return;
    }

    //Activa la ventana n°3
    let resultEncodeScreen=document.getElementById("boxThree");
    resultEncodeScreen.style.display="block";
    //Desactiva la ventana n°2
    let cipherScreen=document.getElementById("boxTwo");
    cipherScreen.style.display="none";

})

/*III. Implementación para ingresar nuevo texto a evaluar (ocultar sección 3 (boxThree) 
y mostrar sección 2 (boxTwo))*/

const button_newText = document.getElementById('btnNewText');

/*Arrow function que ocurre cuando el usuario presionar el boton "nuevo texto", 
oculta la sección 3 y muestra la sección 2*/

button_newText.addEventListener('click',()=>{

    let cipherScreen=document.getElementById("boxTwo");
    cipherScreen.style.display="block"; 

    let resultDecodeScreen=document.getElementById("boxThree");
    resultDecodeScreen.style.display="none";

    //Limpia el offset y la caja de texto
    document.getElementById("offset").value = "";
    document.getElementById("text").value = "";
    //Limpia el texto cifrado/decifrado
    document.getElementById("resultText").innerHTML = "";
})

//IV. Implementación boton salir (redirije a google)

const button_exit = document.getElementById('btnExit');

/*Arrow function que redireeciona a la pagina de google*/
button_exit.addEventListener('click',()=>{
    
    alert("Gracias por usar SimpleyKey. Hasta la próxima");
   
})

//V.Implementacion barra Nav

//enlace Página de inicio
const nav_index = document.getElementById('index');

nav_index.addEventListener('click',()=>{

    let welcomeScreen=document.getElementById("boxOne");
    welcomeScreen.style.display="block";  
    let cipherScreen=document.getElementById("boxTwo");
    cipherScreen.style.display="none";
    let resultDecodeScreen=document.getElementById("boxThree");
    resultDecodeScreen.style.display="none";
    let informationScreen=document.getElementById("boxFour");
    informationScreen.style.display="none";

    document.getElementById("offset").value = "";
    document.getElementById("text").value = "";
    document.getElementById("resultText").innerHTML = "";

})

//enlace "Utilice Simpleykey"
const nav_use = document.getElementById('use');

nav_use.addEventListener('click',()=>{

    let cipherScreen=document.getElementById("boxTwo");
    cipherScreen.style.display="block";
    let welcomeScreen=document.getElementById("boxOne");
    welcomeScreen.style.display="none";  
    let resultDecodeScreen=document.getElementById("boxThree");
    resultDecodeScreen.style.display="none";
    let informationScreen=document.getElementById("boxFour");
    informationScreen.style.display="none";

    document.getElementById("offset").value = "";
    document.getElementById("text").value = "";
    document.getElementById("resultText").innerHTML = "";


})

//enlace "Como funciona"
const nav_information = document.getElementById('information');

nav_information.addEventListener('click',()=>{

    let informationScreen=document.getElementById("boxFour");
    informationScreen.style.display="block"
    let welcomeScreen=document.getElementById("boxOne");
    welcomeScreen.style.display="none";
    let cipherScreen=document.getElementById("boxTwo");
    cipherScreen.style.display="none";
    let resultDecodeScreen=document.getElementById("boxThree");
    resultDecodeScreen.style.display="none";

    document.getElementById("offset").value = "";
    document.getElementById("text").value = "";
    document.getElementById("resultText").innerHTML = "";

})

