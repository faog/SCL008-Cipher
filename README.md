# SimplyKey

El presente readme tiene como finalidad documentar el proceso de creación de una aplicación web que tenga como eje central el uso del [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)  

Los invito a que me acompañen en la documentación de todo el proceso creativo (definicion de contexto, perfil de usuario, prototipos) siendo la base del desarrollo del [producto viable mínimo](https://es.wikipedia.org/wiki/Producto_viable_m%C3%ADnimo). 

## Comenzando: Empatizar y definición del producto 🚀

Luego de ser entregado el desafio y pensar en varias ideas, decidí desarrollar una aplicación que sea capaz de crear contraseñas para usar en la web (o bien, para otras finalidades); naciendo de esta forma SimplyKey.

Siendo realista, es probable que está no sea la idea más innovadora; sin embargo, espero lograr captar la atención del usuario ideal, entregando un producto que responda a sus necesidades.

Para trabajar bajo los estandares de la industria, se desarrolla un  producto que se encuentre centrado sus necesidades, siendo el desarrollo de un producto eficiente y adaptable al usuario. A modo de documentar, se realizó la siguiente [planificación](https://trello.com/b/2wyMcXYv/caesar-cipher) del proyecto.

## Definición del usuario e ideación 📋

### **¿Cuáles son las necesidades de mis usuarios?**

Cabe mencionar, que SimplyKey puede ser usada por cualquier persona (hombre o mujer), que sepan leer y que tengan un nivel básico en cuando al uso de un computador.

Dejando en claro el punto anterior, estos presentan las siguientes necesidades:

- Necesitan generar contraseñas seguras, pero tienen dificultad para recordarlas.

- Desconfían de o encuentran muy complejos los administradores de contraseñas que se encuentran en el mercado.
	
- No pueden usar un administrador de contraseñas por que necesitan claves para sistemas o equipos que no disponen de uno, ya sea por que se no se acceden a través de un navegador o un teléfono móvil, o son equipos industriales, cajas fuertes, alarmas, etc.

- Necesitan una solución que no almacene información de la persona que lo ocupa, resguardando la provacidad del usuario.

### **¿Cómo SimplyKey soluciona estás necesidades?**

El principal problema relacionado con las contraseñas, es la dificultad de idear una contraseña que sea fácil de recordar pero difícil de averiguar. Muchas personas terminan usando como contraseñas nombres o frases las cuales son muy vulnerables a ser descubiertas, o claves complejas que se olvidan con facilidad. 

SimplyKey permite tomar una frase fácil de recordar y un número, y convertirlo en una clave cifrada que no se asemeja a ninguna palabra existente en un diccionario, y en caso de que el usuario la olvide, solo necesita el número original y la frase para regenerar la clave y así recuperar el acceso a sus sitios.

SimplyKey es una aplicación sencilla de ocupar, que solo requiere un mínimo de interacción y que además no guarda ninguna información del usuario, por lo que la privacidad de este está asegurada.

### **Es asi que...**

- La aplicación debe ser intuitiva, donde el usuario no requiera aprendizaje para poder usarla.
- Que no sea compleja ni tenga funciones innecesarias.
- Que satisfaga una necesidad o un problema.

## Prototipado 📄✒️

Ya definido nuestro usuario, viene una de las etapas más divertidas (bueno, depende de cada persona) que corresponde a plasmar en papel los primeros diseños de nuestra aplicación.

## *Prototipado baja fidelidad*

A continuación, se presenta los sketch realizados para la aplicación:

### **a) Diagrama de flujo**

La siguiente imagen corresponde al flujo de la aplicación, donde se aprecia los distintos caminos que puede tomar el usuario al momento de usar la aplicación.

![Diagrama de flujo](https://github.com/faog/SCL008-Cipher/blob/master/src/image/Prototype/Diagrama.jpg)

### **b) Primera pantalla**

Esta corresponde a la pantalla de inicio, donde se da la bienvenida al usuario junto a las instrucciones de uso. Desde esta pantalla, se puede comenzar a usar la aplicación.

![Pantalla 1](https://github.com/faog/SCL008-Cipher/blob/master/src/image/Prototype/Image1.jpg)

### **c) Segunda pantalla**

Esta corresponde a la pantalla donde el usuario ingresa un nivel de seguridad (debe ser un dígito) y el texto a transformar. En esta pantalla, el usuario puede elegir (a partir de botones) si desea cifrar o decifrar su texto.

![Pantalla 2](https://github.com/faog/SCL008-Cipher/blob/master/src/image/Prototype/Image2.jpg)

Además, es posible mostrar información de ayuda al usuario, al momento posicionar el puntero del mouse sobre el campo a rellenar.

![Pantalla 2b](https://github.com/faog/SCL008-Cipher/blob/master/src/image/Prototype/Image2b.jpg)

*¿Que sucede si el usuario ingresa carácteres invalidos?*

SimplyKey tiene cubierto esto generando una mensaje de alerta, indicando cual es el error encontrado.

![Pantalla 4](https://github.com/faog/SCL008-Cipher/blob/master/src/image/Prototype/Image4.jpg)

### **d) Tercera pantalla**

Luego de eligir la opción de cifrado (o decifrado), se aprecia una nueva ventana, donde el usuario obtiene su texto modificado. Aqui, el usuario puede decidir 2 opciones, a partir de los botones *nuevo texto* (que se retrocede a la ventana de cifrado).

![Pantalla 3](https://github.com/faog/SCL008-Cipher/blob/master/src/image/Prototype/Image3.jpg)

Aqui, el usuario puede decidir 2 opciones, a partir de los botones *nuevo texto* (que se retrocede a la ventana de cifrado); o bien, presionar el botón salir, generando un mensaje de agradecimiento.

![Pantalla 3b](https://github.com/faog/SCL008-Cipher/blob/master/src/image/Prototype/Image3b.jpg)

y redireccionar a google.

![Pantalla 5](https://github.com/faog/SCL008-Cipher/blob/master/src/image/Prototype/Image5.jpg)

## Testing ⚙️

Con los sketch propuestos se realizó el proceso de testing; obteniendo el siguiente feedback:

- Dejar las indicaciones de uso en una ventana diferente.
- No todas las personas saben lo que significa cifrar y decifrar, generando confusión; por lo tanto se decide cambiar el nombre de estos botones por palabras adecuadas al contexto.
- En general, usar un lenguaje más en entendible por el usuario.

## Prototipado (2 iteración) 📄✒️

Considerando el feedback recibido, se hizo modificaciones a la aplicación.

Para su desarrollo, se usa html5 para la maqueta compuesta por 4 pantallas; y de acuerdo a la psicología del color, se selecciona una paleta de colores, donde el azul debido a que transmite seguridad  por lo que se usa como principal en la aplicación, complementado con tonos de naranjo, grises y blanco.

[Aquí](https://faog.github.io/SCL008-Cipher/src/index.html), podrás ver el resultado final y empezar a crear tus contraseñas de manera más sencilla.

## Consideraciones en el desarrollo 🛠️

- Para el desarrollo de SimplyKey, se utilizó [bootstrap](https://getbootstrap.com/docs/4.3/layout/grid/) para el sistema de grilla.

- SimplyKey está implementado para cifrar o decifrar textos que incluya letras (mayúsculas y minúsculas), dígitos y carácteres. Si por algún motivo, ingresas un carácter no válido, la aplicación genera un mensaje de alerta indicando el error.

- Se realizaron test para probar el funcionamiento de la aplicación, alcanzando los siguientes resultados:

    - % Statements: 76,27

    - % Branch: 77,27

    - % Functions: 100

    - % Lines: 75,44

## Futuras mejoras ⌨️

- Implementar el cifrado de carácteres de puntuación.

- Implementar que el usuario pueda ingresar un nivel de seguridad (offset) negativo.

- A modo de desafío, seria interesante que el usuario pueda elegir (a partir de un filtro) un rango en que carácteres desea obtener.

- Realizar mas entrevistas, para obtener mayor cantidad de feedback y poder adaptar la aplicación más a las necesidades que genere el usuario.

##  Autor 📌

- Fabiola Orellana G, estudiante de Laboratoria (8° Generación).





