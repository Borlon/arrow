export class EjercicioBean {

    titulo: string;
    descripcion: string;
    musculo: string;
    imagen: string;

    constructor(data?: any) {
        this.titulo = data.titulo;
        this.descripcion = data.descripcion;
        this.musculo = data.musculo;
        this.imagen = data.imagen;
    }
}
