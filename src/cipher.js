window.cipher = {
  encode: (valueOffset, valueText) => {
    let result="";
    let form="";
    for(let i=0; i<valueText.length; i++){
      //variable para almacenar el codigo ascii de cada letra
      let numberAscii=0;
      numberAscii=valueText.charCodeAt(i);
      //condicional if para evaluar cada codigo, generando un alert si no es mayuscula o espacio
      if (numberAscii>=65 && numberAscii<=90) {
          form = String.fromCharCode(((valueText.charCodeAt(i))-65+parseInt(valueOffset))%26+65);
          result+=form;  
      }else if(numberAscii===32){
          result+=" ";
      }else if(numberAscii>=97 && numberAscii<=122) {
          return alert("No esta permitido ingresar letras minúsculas");
      }else if(numberAscii>=48 && numberAscii<=57){
          return alert("No esta permitido ingresar dígitos");
      }else{
          return alert("No estan permitidos los caracteres especiales");
      }    
  }
  return result;
  },
  
  decode: (valueOffset, valueText) => {
    let result="";
    let form="";
    for(let i=0; i<valueText.length; i++){
      //variable para almacenar el codigo ascii de cada letra
      let numberAscii=0;
      numberAscii=valueText.charCodeAt(i);
      //condicional if para evaluar cada codigo, generando un alert si no es mayuscula o espacio
      if (numberAscii>=65 && numberAscii<=90) {
          form = String.fromCharCode(((valueText.charCodeAt(i))-90-parseInt(valueOffset))%26+90);
          result+=form;  
      }else if(numberAscii===32){
          result+=" ";
      }else if(numberAscii>=97 && numberAscii<=122) {
          return alert("No esta permitido ingresar letras minúsculas");
      }else if(numberAscii>=48 && numberAscii<=57){
          return alert("No esta permitido ingresar dígitos");
      }else{
          return alert("No estan permitidos los caracteres especiales");
      }    
  }
  return result;
  }
};
