const formulario = {
    nombre: '',
    edad: '',
    sexo: '',
    pais: ''
};

formulario.nombre = prompt('Ingrese su nombre:');


let edadValida = false;
while (!edadValida) {
    formulario.edad = prompt('Ingrese su edad:');
    if (isNaN(formulario.edad) || formulario.edad === '') {
        alert('Por favor, ingrese una edad válida.');
    } else {
        edadValida = true;
    }
}


const validarSexo = (valor) => valor === 'M' || valor === 'F';
let sexoValido = false;
while (!sexoValido) {
    formulario.sexo = prompt('Ingrese su sexo (M o F):');
    if (!validarSexo(formulario.sexo)) {
        alert('Por favor, ingrese un sexo válido (M o F).');
    } else {
        sexoValido = true;
    }
}


const paises = {
    'ARG': 'Argentina',
    'BRA': 'Brasil',
    'CHL': 'Chile',
    'COL': 'Colombia',
    'MEX': 'México',
    'USA': 'Estados Unidos'
};
let paisValido = false;
while (!paisValido) {
    formulario.pais = prompt('Ingrese su país (ARG, BRA, CHL, COL, MEX o USA):');
    if (!paises[formulario.pais]) {
        alert('Por favor, ingrese un país válido (ARG, BRA, CHL, COL, MEX o USA).');
    } else {
        paisValido = true;
    }
}


alert(`
    Nombre: ${formulario.nombre}
    Edad: ${formulario.edad}
    Sexo: ${formulario.sexo}
    País: ${paises[formulario.pais]}
`);
