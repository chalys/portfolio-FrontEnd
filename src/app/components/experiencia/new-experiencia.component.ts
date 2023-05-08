import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  fecha_inicio:Date = new Date();
  fecha_fin:Date = new Date();
  descripcion: string = '';
 /* revisar las tres lineas*/ 
  isLogged = false;
  hasPermission = false;
  IsLoadding = false;

  constructor(private sExperiencia: SExperienciaService, private router: Router, private tokenService: TokenService) { }
/*
  ngOnInit(): void {
  } */

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE,this.fecha_inicio,this.fecha_fin, this.descripcion);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
