export class Educacion {
    ideducacion?: number;
    nombreE: string;
    fecha_inicio:Date;
    fecha_fin:Date;
    descripcion: string;
    logo_institucion_url: string;

    constructor(nombreE: string, fecha_inicio: Date, fecha_fin: Date, descripcion: string, logo_institucion_url: string){
        this.nombreE = nombreE;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
        this.logo_institucion_url = logo_institucion_url;
    }
}