import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(
    private educacionS: EducacionService,
    private tokenService: TokenService,
    private router: Router
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      (data) => {
      this.educacion = data;
    },(err) => {
      Swal.fire(
        'Se encontro un error en la lista',
        'Volver al inicio',
        'error'
      );
      this.router.navigate(['']);
    }
    );
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(
        (data) => {
          Swal.fire('Se elimino la institucion', 'Press Ok', 'success');
          this.cargarEducacion();
        },
        (err) => {
          Swal.fire(
            'No se ha podido eliminar la institucion',
            'Volver a intertarlo',
            'error'
          );
        }
      );
    }
  }
}
