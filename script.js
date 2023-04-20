let botonEncriptar = document.getElementById("btnEncriptar");
let botonDesencriptar = document.getElementById("btnDesencriptar");
let botonCopiar = document.getElementById("btnCopiar");
let outputTextBox = document.getElementById("textoEncriptado");
/* para probar si los botones los estoy agarrando*/
function clickTest() {
  alert("clicked");
}

/*aca tengo que agregar que el output vaya a la caja de output de texto*/
/*esta funcion encripta el texto ingresado*/
// function encriptar() {
//   let mensajeSecretoIngresado = document.getElementById("textoIngresado").value;
//   alert(mensajeSecretoIngresado);
//   textoIngresado.value = ""; /*pone en blanco la cajita de texto*/
// }
let arrayEncrypted = []; //creo un array vacio que va a ser el mensaje encriptado

function encriptar() {
  let mensajeSecretoIngresado = document.getElementById("textoIngresado").value; //1. obtiene el texto ingresado y lo guarda
  let arrayMensajeSecretoIngresado = Array.from(mensajeSecretoIngresado); //2. creo un array de characters del string ingresado
  for (let i = 0; i <= arrayMensajeSecretoIngresado.length; i++) {
    // 3. corro un for loop en el nuevo array, y sigue los if
    if (arrayMensajeSecretoIngresado[i] == "a") {
      arrayEncrypted.push("ai"); //
    } else if (arrayMensajeSecretoIngresado[i] == "e") {
      // importante usar el valor en posicion i, y no solo i
      arrayEncrypted.push("enter"); //
    } else if (arrayMensajeSecretoIngresado[i] == "i") {
      arrayEncrypted.push("imes"); //
    } else if (arrayMensajeSecretoIngresado[i] == "o") {
      arrayEncrypted.push("ober"); //
    } else if (arrayMensajeSecretoIngresado[i] == "u") {
      arrayEncrypted.push("ufat"); //
    } else {
      arrayEncrypted.push(arrayMensajeSecretoIngresado[i]); //agrega el valor en i, sin cambiarlo al array nuevo
    }
  }
  mensajeEncrypted = arrayEncrypted.join(""); // 4. convierte el array en un string sin espacios ni commas
  outputTextBox.value = mensajeEncrypted; //5. cambia el "value" property del input box del output, para mostrar el texto
  textoIngresado.value = ""; //6. pone en blanco la cajita de texto
}

/*aca tengo que agregar que el output vaya a la caja de input de texto*/
/*esta funcion desencripta el texto ingresado*/
function desencriptar() {
  let mensajeEncriptado = document.getElementById("textoEncriptado").value;
  alert(mensajeEncriptado);
  textoEncriptado.value = ""; /*pone en blanco la cajita de texto*/
}

/* copia el texto en el campo de mensaje encriptado */
function copiarTexto() {
  let textoCopiado = document.getElementById("textoEncriptado");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textoCopiado.value);
  alert("Copied the text: " + textoCopiado.value);
}

/* escucha el click del boton encriptar */
botonEncriptar.addEventListener("click", encriptar);

/* escucha el click del boton desencriptar */
botonDesencriptar.addEventListener("click", desencriptar);

/* escucha el click del boton copiar */
botonCopiar.addEventListener("click", copiarTexto);
