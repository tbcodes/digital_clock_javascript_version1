function generateTime() {
    // Capturamos la hora actual mediante la creación de una nueva instancia del objeto Date
    let timeNow = new Date();
    // Queremos que la hora se muestre siempre con 2 dígitos. Para eso, hacemos lo siguiente:
    // Usamos un ternario para saber si el número de digitos es menor que 2
    let hours = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
    let minutes = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
    let seconds = timeNow.getSeconds().toString().length < 2 ? "0" + timeNow.getSeconds() : timeNow.getSeconds();

    //  Concatenando variables | Usando ES5 
    // let mainTime = hours + ":" + minutes + ":" + seconds;
     //  Concatenando variables | Usando ES6: Template Strings (Template literals) 
    let mainTime = `${hours}:${minutes}:${seconds}`;
    // Escribo la hora en el elemento h1 con id="time"
    document.getElementById("time").innerHTML = mainTime;
  
}

// Si quiero que el efecto del reloj se vea correctamente, tengo que usar un setInterval de 1000
// setInterval - ES6 - Javascript Moderno
setInterval(() => {
    generateTime();
}, 1000);

// setInterval - ES5 - Manera tradicional
// setInterval(function() {
//     generateTime();
// }, 1000);

