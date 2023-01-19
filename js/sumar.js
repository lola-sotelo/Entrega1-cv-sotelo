
document.getElementById('sumar').addEventListener('click', function() {
    let numeroA = document.getElementById('numero 1').value;
   
    console.log('El valor del número A es:'+numeroA);
   
    let numeroB = document.getElementById('numero 2').value;

    console.log('El valor del número B es:'+numeroB);

    let resultado = sumar(parseInt(numeroA), parseInt(numeroB));

    console.log('El resultado es:'+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
});

function sumar(a,b){
    return a+b;
}