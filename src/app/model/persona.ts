export class persona{
    idpersona?: number;
    nombre: string;
    apellido: string;
    profesion:string;
    descripcion: string;
    pais:string;
    fecha_nacimiento:Date;
    telefono: string;
    foto_perfil_url:string

    constructor(nombre:string, apellido:string,profesion:string, descripcion:string, pais:string, fecha_nacimiento:Date, telefono: string, foto_perfil_url:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.descripcion = descripcion;
        this.pais = pais;
        this.fecha_nacimiento = fecha_nacimiento;
        this.telefono = telefono;
        this.foto_perfil_url = foto_perfil_url;
}
}