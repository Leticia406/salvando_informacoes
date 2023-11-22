function somar(){
    let numero1: HTMLInputElement | null = document.querySelector("#n1");
    let numero2: HTMLInputElement | null = document.querySelector("#n2");

   
    if(numero1 && numero2){
        alert(parseFloat( numero1.value) - parseFloat( numero2.value));
    }
}