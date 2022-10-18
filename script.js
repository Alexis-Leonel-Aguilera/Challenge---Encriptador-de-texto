const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
const desa = document.querySelector(".desaparece");
btnCopy.style.display = "none"
mensaje.style.display = "none"

function btnEncriptar(){

	const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	mensaje.style.display = "block"
	inputTexto.value = ""
	btnCopy.style.display = "block"
	desa.style.display = "none"
}

function btnDesencriptar(){

	const textoEncriptado = desencriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	inputTexto.value = ""
}

function encriptar(stringEncriptada){

	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for( let i = 0; i < matrizCodigo.length; i++){

		if(stringEncriptada.includes(matrizCodigo[i][0])){

			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

		}

	}
	return stringEncriptada;
}

function desencriptar(stringDesencriptada){

	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for( let i = 0; i < matrizCodigo.length; i++){

		if(stringDesencriptada.includes(matrizCodigo[i][1])){

			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

		}

	}
	return stringDesencriptada;
}

function copiar(){

	mensaje.select();
	navigator.clipboard.writeText(mensaje.value)
	mensaje.value = "";
	alert("Texto Copiado")
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/