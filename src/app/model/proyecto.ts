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


/*
Origina
export class Proyecto {
    id? : number;
    nombreP : string;
    fechaP:string;
    descripcionP : string;
    linkP:string;
    imgP:string;

    constructor(nombreP: string, fechaP: string, descripcionP: string, linkP: string, imgP: string){
        this.nombreP = nombreP;
        this.fechaP = fechaP;
        this.descripcionP = descripcionP;
        this.linkP = linkP;
        this.imgP = imgP;
    }
}
*/

/*
A donde llegar
import { persona } from './persona.model';
export class Proyectos {
  idproyecto? : number;
  nombre : string;
  descripcion : string;
  fecha_inicio : Date;
  fecha_fin : Date;
  url_proyecto : string;
  persona : persona;

  constructor(
    nombre : string,
    descripcion : string,
    fecha_inicio : Date,
    fecha_fin : Date,
    url_proyecto : string,
    persona : persona
  ){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.url_proyecto = url_proyecto;
    this.persona = persona;
  }
}
*/