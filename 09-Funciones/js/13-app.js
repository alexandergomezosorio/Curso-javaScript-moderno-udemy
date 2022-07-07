const reproductor = {
    //Con arrow function el codigo se reduce
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id: ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando cancion...${id}`),
    playList: nombre => console.log(`Reproduciendo la play list de: ${nombre}`),
    cancion: nombreCancion => console.log(`Cancion: ${nombreCancion}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}
reproductor.nuevaCancion = 'En el muelle de san blas';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(60);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playList('Mana');
reproductor.cancion('Clavado en un bar');