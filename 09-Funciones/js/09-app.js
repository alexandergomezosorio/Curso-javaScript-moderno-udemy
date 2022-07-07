const reproductor = {
    //Metodos de propiedad
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con el id: ${id}`)
    },
    pausar: function () {
        console.log('Pausando...')
    },
    borrar: function (id) {
        console.log(`Borrando cancion...${id}`);
    },
    playList: function (nombre) {
        console.log(`Reproduciendo la play list de: ${nombre}`);
    },
    cancion: function (nombreCancion) {
        console.log(`Cancion: ${nombreCancion}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(60);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playList('Mana');
reproductor.cancion('Clavado en un bar');