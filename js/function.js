
/*document.getElementById('boton').onclick =function () {
    console.log('Capturamos el evento click');
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer evento en JS"
}


document.addEventListener('click', function() {
    console.log("Hola Mundo desde EventListener");
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer evento en JS"
});
*/

document.getElementById('boton').addEventListener('click', function() {
    console.log("Hola Mundo desde EventListener");
    document.getElementById('demo').innerHTML = "Estamos probando nuestro primer evento en JS"
});

document.getElementById('boton-color').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});

document.getElementById('boton-default').addEventListener('click', function() {
    document.body.style.backgroundColor = 'aquamarine';
});

document.getElementById('boton-ocultar').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
});

const collection = document.getElementsByClassName("ejemplo");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}