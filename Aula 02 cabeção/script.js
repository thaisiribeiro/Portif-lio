function calcularSoma() {
    //Pega os números digitados nos campos de entrada
    var numeroA = parseFloat(document.getElementById('numeroA').value);
    var numeroB = parseFloat(document.getElementById('numero B').value);

    // Verifica se os números são válidos ( ou seja, se são números mesmo) 
    if (!isNaN(numeroA) && !isNaN(numeroB)) { 
        // Realize a soma dos números
        var resultado = numeroA + numeroB;

        // Exibe o resultado na pagina
        document.getElementById('resultado').innerHTML = "A soma de " + numeroA + " é:"
