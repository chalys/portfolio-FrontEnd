export class Experiencia {
    idexperiencia? : number;    
    nombreE : string;
    fecha_inicio:Date;
    fecha_fin:Date;
    descripcion : string;

    constructor(nombreE: string, fecha_inicio:Date, fecha_fin:Date, descripcion: string){
        this.nombreE = nombreE;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
    }
}
