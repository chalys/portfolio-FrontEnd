import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
/*  nombreP: string = '';
  fechaP: string = '';
  descripcionP: string = '';
  linkP: string = '';
  imgP: string = '';*/

  nombreP : string='';
  fecha_inicio : Date=new Date();
  fecha_fin : Date=new Date();
  descripcion : string='';
  url_proyecto:string='';
  foto_proyecto_url:string='';

  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyecto(this.nombreP, this.fecha_inicio, this.fecha_fin, this.descripcion, this.url_proyecto, this.foto_proyecto_url);
    this.sProyecto.save(expe).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
  /*
  async newImageUpload(event: any) {
    const path = 'proyecto';
    const name = this.nombreP;
    const file = event.target.files[0];
    const res = await this.sProyecto.uploadImage(file, path, name);
    this.imgP = res;

  }*/
}