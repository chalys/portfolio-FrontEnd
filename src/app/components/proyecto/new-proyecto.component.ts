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
  nombreP: string = '';
  fechaP: string = '';
  descripcionP: string = '';
  linkP: string = '';
  imgP: string = '';

  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyecto(this.nombreP, this.fechaP, this.descripcionP, this.linkP, this.imgP);
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