export class EjercicioBean {

    titulo: string;
    descripcion: string;
    musculo: string;
    imagenes: ImageBitmap[];

    constructor(data?: any) {
        this.titulo = data.titulo;
        this.descripcion = data.descripcion;
        this.musculo = data.musculo;
        this.imagenes = new Array<ImageBitmap>();
    }
}
