var funciones = require('tecsup-mg');

// Variables para usar 
var diaDeNacimmiento = "12-12-2001";
var datos = {
    email : "abrahamguzz",
    password : "abrahamguzz",
    fecha : "12",
    celular : "Zzzz"
};

// Edad
edad = funciones.edad.edad(diaDeNacimmiento);
console.log(`Mi edad es de ${edad} años`);

// Dias para Navidad
diasParaNavidad = funciones.diasParaNavidad.diasParaNavidad();
console.log(`Faltan ${diasParaNavidad} días para Navidad`)

// Validar Formulario
validarFormulario = funciones.validarFormulario.validarFormulario(datos);
console.log(`Hay errores en los siguietes campos: ${validarFormulario}`)