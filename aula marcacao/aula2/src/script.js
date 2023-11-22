function subtrair() {
    var numero1 = document.querySelector("#n1");
    var numero2 = document.querySelector("#n2");
    if (numero1 && numero2) {
        alert(parseFloat(numero1.value) - parseFloat(numero2.value));
    }
}
