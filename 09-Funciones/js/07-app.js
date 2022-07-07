iniciarApp();

function iniciarApp() {
    console.log('Iniciando app...');
    segundaFuncion(); //Asi si se pone dentro de la primera y esta segunda se pone dentro para que salga despues
}

function segundaFuncion() {
    console.log('Desde segunda app');
    autenticarUsuario('Alexander');
}

function autenticarUsuario(usuario) {
    console.log('Autenticando usuario...espera un momento');
    console.log(`Usuario autenticado exitosamente ${usuario}`);
}