export class Skill {
    idskill?: number;
    nombreH: string;
    porcentaje: number;

    constructor(nombreH:string, porcentaje: number){
        this.nombreH = nombreH;
        this.porcentaje = porcentaje;
    }
}