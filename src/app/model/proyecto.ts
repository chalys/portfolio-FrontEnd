export class Proyecto {
    idproyecto? : number;
    nombreP : string;
    fecha_inicio : Date;
    fecha_fin : Date;
    descripcion : string;
    url_proyecto:string;
    foto_proyecto_url:string;


    constructor(nombreP: string, fecha_inicio: Date, fecha_fin: Date, descripcion: string, url_proyecto: string, foto_proyecto_url: string){
        this.nombreP = nombreP;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
        this.url_proyecto = url_proyecto;
        this.foto_proyecto_url = foto_proyecto_url;
    }
}