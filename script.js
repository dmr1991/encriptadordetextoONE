let botonEncriptar = document.getElementById("btnEncriptar");
let botonDesencriptar = document.getElementById("btnDesencriptar");
let botonCopiar = document.getElementById("btnCopiar");
let outputTextBox = document.getElementById("textoEncriptado");
let inputTextBox = document.getElementById("textoIngresado");
let botonNuevaPalabra = document.getElementById("btnNuevaPalabra");
/* para probar si los botones los estoy agarrando*/
function clickTest() {
  alert("clicked");
}
/*esta funcion encripta el texto ingresado*/
let arrayEncrypted = []; //creo un array vacio que va a ser el mensaje encriptado
function resetArrayEncrypted() {
  arrayEncrypted = [];
}
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
  let mensajeEncrypted = arrayEncrypted.join(""); // 4. convierte el array en un string sin espacios ni commas
  outputTextBox.value = mensajeEncrypted; //5. cambia el "value" property del input box del output, para mostrar el texto
  inputTextBox.value = ""; //6. pone en blanco la cajita de texto
  resetArrayEncrypted();
}
/*esta funcion desencripta el texto encriptado*/
let arrayUnencrypted = [];
function resetArrayUnencrypted() {
  arrayUnencrypted = [];
}
function desencriptar() {
  let mensajeSecretoEncriptado =
    document.getElementById("textoEncriptado").value;
  let reemplazoKey = {
    //creo que creo objeto con los que quiero reemplazar y el valor nuevo?
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  let mensajeDesencriptado = mensajeSecretoEncriptado.replace(
    /ai|enter|imes|ober|ufat/gi,
    function (matched) {
      return reemplazoKey[matched];
    }
  );
  console.log(mensajeDesencriptado);
  inputTextBox.value = mensajeDesencriptado;
  outputTextBox.value = "";
  resetArrayUnencrypted();
}

function clearBtn() {
  inputTextBox.value = "";
}

// textoIngresado.value = ""; /*pone en blanco la cajita de texto*//
//}

/* copia el texto en el campo de mensaje encriptado */
// function copiarTexto() {
//   let cb = navigator.clipboard;
//   let mensajeEncriptadoParaCopia =
//     document.getElementById("textoEncriptado").value;
//   document
//     .writeText(mensajeEncriptadoParaCopia)
//     .then(() => {
//       alert("successfully copied");
//     })
//     .catch(() => {
//       alert("something went wrong");
//     });
// mensajeEncriptadoParaCopia.select();
// mensajeEncriptadoParaCopia.setSelectionRange(0, 99999);
// navigator.clipboard
//   .writeText(mensajeEncriptadoParaCopia)
//   .then(() => {
//     alert("successfully copied");
//   })
//   .catch(() => {
//     alert("something went wrong");
//   });
// alert("Copied the text: " + mensajeEncriptadoParaCopia);

/* escucha el click del boton encriptar */
botonEncriptar.addEventListener("click", encriptar);

/* escucha el click del boton desencriptar */
botonDesencriptar.addEventListener("click", desencriptar);

/* escucha el click del boton copiar */
botonCopiar.addEventListener("click", clickTest);
botonNuevaPalabra.addEventListener("click", clearBtn);
