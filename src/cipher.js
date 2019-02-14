window.cipher = {
  encode: (valueOffset, valueText) => {
    let result="";
    let form="";
    
    //Condición que valida que se debe ingresar un offset (no debe ser vacio)
       
    if(valueOffset===""){     
      alert("Debe ingresar un nivel de seguridad");     
      return false;         
    }

       
    //Condición que valida que el offset debe ser tipo de dato number
    if(isNaN(valueOffset)){
      return alert("El nivel de seguridad debe ser un dígito");
    }
    
    //Condición que valida que el offset no debe ser igual a 0
    if(valueOffset===0){
      return alert("el nivel de seguridad debe ser distinto a 0");
    }

    //Condición que valida que se debe ingresar un texto (no debe ser vacio)
    if (valueText==="") {
      alert("Debe ingresar un texto");
      return false;
      
    }

    //Recorrer el texto
    for(let i=0; i<valueText.length; i++){
      //variable para almacenar el codigo ascii de cada letra
      let numberAscii=0;
      numberAscii=valueText.charCodeAt(i);

      //Condicional para evaluar si el offset es digito negativo o positivo

      //si valueOffset es negativo
      if(valueOffset<0){
        if (numberAscii>=65 && numberAscii<=90) {
          //mayusculas
            form = String.fromCharCode(((valueText.charCodeAt(i))-90+parseInt(valueOffset))%26+90);
            result+=form;  
        }else if(numberAscii===32){
          //espacios
            result+=" ";
        }else if(numberAscii>=97 && numberAscii<=122) {
          //minusculas
          form = String.fromCharCode(((valueText.charCodeAt(i))-122+parseInt(valueOffset))%26+122);
          result+=form;  
        }else if(numberAscii>=33 && numberAscii<=64){
          //digitos y caracteres
          form = String.fromCharCode(((valueText.charCodeAt(i))-64+parseInt(valueOffset))%32+64);
          result+=form; 
        }else if(numberAscii>=191 && numberAscii<=253){
          //caracteres
          form = String.fromCharCode(((valueText.charCodeAt(i))-253+parseInt(valueOffset))%63+253);
          result+=form; 
        }else{
          form=String.fromCharCode(numberAscii);      
          return alert(`No esta permitido el carácter ${form}`);
        } 
        //si valueOffset es positivo
      }else{
        //condicional if para evaluar cada letra
        if (numberAscii>=65 && numberAscii<=90) {
          //mayusculas
          form = String.fromCharCode(((valueText.charCodeAt(i))-65+parseInt(valueOffset))%26+65);
          result+=form;  
        }else if(numberAscii===32){
          //espacios
          result+=" ";
        }else if(numberAscii>=97 && numberAscii<=122) {
          //minusculas
          form = String.fromCharCode(((valueText.charCodeAt(i))-97+parseInt(valueOffset))%26+97);
          result+=form;  
        }else if(numberAscii>=33 && numberAscii<=64){
          //digitos y caracteres
          form = String.fromCharCode(((valueText.charCodeAt(i))-33+parseInt(valueOffset))%32+33);
          result+=form; 
        }else if(numberAscii>=191 && numberAscii<=253){
          //caracteres
          form = String.fromCharCode(((valueText.charCodeAt(i))-191+parseInt(valueOffset))%63+191);
          result+=form; 
        }else{
          form=String.fromCharCode(numberAscii);      
          return alert(`No esta permitido el carácter ${form}`);
        }    
      }

    }
  
    return `Tu nueva contraseña es: <p>${result}</p>`;
  },
  
  decode: (valueOffset, valueText) => {
    let result="";
    let form="";

    //Condición que valida que se debe ingresar un offset (no debe ser vacio)
    if(valueOffset===""){
      return alert("Debe ingresar un nivel de seguridad");
    }
    
    //Condición que valida que el offset debe ser un number
    if(isNaN(valueOffset)){
      return alert("El nivel de seguridad debe ser un un dígito");
    }
    
    //Condición que valida que el offset no debe ser igual a 0
    if(valueOffset===0){
      return alert("el nivel de seguridad debe ser distinto a 0");
    }

    //Condición que valida que se debe ingresar un texto (no debe ser vacio)
    if (valueText==="") {
      return alert("Debe ingresar un texto");
    }

    //Recorrer el texto
    for(let i=0; i<valueText.length; i++){
      //variable para almacenar el codigo ascii de cada letra
      let numberAscii=0;      
      numberAscii=valueText.charCodeAt(i);

      //Condicional para evaluar si el offset es digito negativo o positivo
       
      //si valueOffset es negativo
      if(valueOffset<0){
        //condicional if para evaluar cada letra
        if (numberAscii>=65 && numberAscii<=90) {
          //mayusculas
          form = String.fromCharCode(((valueText.charCodeAt(i))-65-parseInt(valueOffset))%26+65);
          result+=form;  
        }else if(numberAscii===32){
          //espacios
          result+=" ";
        }else if(numberAscii>=97 && numberAscii<=122) {
          //minusculas
          form = String.fromCharCode(((valueText.charCodeAt(i))-97-parseInt(valueOffset))%26+97);
          result+=form;  
        }else if(numberAscii>=33 && numberAscii<=64){
          //digitos y caracteres
          form = String.fromCharCode(((valueText.charCodeAt(i))-33-parseInt(valueOffset))%32+33);
          result+=form; 
        }else if(numberAscii>=191 && numberAscii<=253){
          //caracteres
          form = String.fromCharCode(((valueText.charCodeAt(i))-191-parseInt(valueOffset))%63+191);
          result+=form; 
        }else{
          form=String.fromCharCode(numberAscii);      
          return alert(`No esta permitido el carácter ${form}`);
        }    
      //si valueOffset es negativo
      }else{
          //condicional if para evaluar cada letra
        if (numberAscii>=65 && numberAscii<=90) {
          //mayusculas
            form = String.fromCharCode(((valueText.charCodeAt(i))-90-parseInt(valueOffset))%26+90);
            result+=form;  
        }else if(numberAscii===32){
          //espacios
            result+=" ";
        }else if(numberAscii>=97 && numberAscii<=122) {
          //minusculas
          form = String.fromCharCode(((valueText.charCodeAt(i))-122-parseInt(valueOffset))%26+122);
          result+=form;  
        }else if(numberAscii>=33 && numberAscii<=64){
          //digitos y caracteres
          form = String.fromCharCode(((valueText.charCodeAt(i))-64-parseInt(valueOffset))%32+64);
          result+=form; 
        }else if(numberAscii>=191 && numberAscii<=253){
          //caracteres
          form = String.fromCharCode(((valueText.charCodeAt(i))-253-parseInt(valueOffset))%63+253);
          result+=form; 
        }else{
          form=String.fromCharCode(numberAscii);      
          return alert(`No esta permitido el carácter ${form}`);
        } 
      }
  }
  return `La contraseña fue generada de: <p>${result}</p>`;
  }
};


