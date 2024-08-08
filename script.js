const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

let matrizClaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function validarTexto(texto) {
    const letrasValidas = "abcdefghijklmnopqrstuvwxyz "; // Conjunto de caracteres permitidos

    for (let i = 0; i < texto.length; i++) {
        if (!letrasValidas.includes(texto[i])) {
            return false; // Retorna false si se encuentra un carácter no permitido
        }
    }
    return true; // Retorna true si todos los caracteres son válidos
}

function btnEcriptar(){
    const texto = textArea.value;

    if (!validarTexto(texto)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return; // No continúa con la encriptación si no pasa la validación
    }

    const textoEncriptado = encriptar(texto);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDescriptar(){
    const texto = textArea.value;

    if (!validarTexto(texto)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return; // No continúa con la desencriptación si no pasa la validación
    }

    const textoDesencriptado = desencriptar(texto);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function encriptar(StringAEncriptar){
    let matrizClaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];  
    StringAEncriptar = StringAEncriptar.toLowerCase();
    for(let i = 0; i < matrizClaves.length; i++){
        if(StringAEncriptar.includes(matrizClaves[i][0])){
            StringAEncriptar = StringAEncriptar.replaceAll(matrizClaves[i][0], matrizClaves[i][1]);
        }
    }
    return StringAEncriptar;
}

function desencriptar(StringADesncriptar){
    let matrizClaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];  
    StringADesncriptar = StringADesncriptar.toLowerCase();
    for(let i = 0; i < matrizClaves.length; i++){
        if(StringADesncriptar.includes(matrizClaves[i][1])){
            StringADesncriptar = StringADesncriptar.replaceAll(matrizClaves[i][1], matrizClaves[i][0]);
        }
    }
    return StringADesncriptar;
}

function copiarTexto() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}
