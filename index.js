import { Usuario } from "./classes/Usuario.js";

const btn = document.getElementById('btn')


let usuario = Usuario.crear("Martin", "adas@asdas.com", 27);

btn.addEventListener('click', () => {
    const oldPin = document.getElementById('oldPin').value
    const newPin = document.getElementById('newPin').value
    const confirmPin = document.getElementById('confirmPin').value

    if(newPin == confirmPin){
        if(usuario.cambiarPin(oldPin,newPin)){
            alert("Pin cambiado con exito!")
        } else {
            alert("Pin actual incorrecto, no se pudo cambiar")
        }
    } else {
        alert('Los pines nuevos no coinciden, asegurate de escribirlos correctamente para que coincidan')
    }
})