import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { Router } from '@angular/router';
import { SExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(
    private experienciaS: SExperienciaService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaS.lista().subscribe(
      (data) => {
        this.expe = data;
      },
      (err) => {
        Swal.fire('Se encontro un error en la lista','Volver al inicio','error');
        this.router.navigate(['']);
      }
    );
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experienciaS.delete(id).subscribe(
        (data) => {
          Swal.fire('Se elimino la experiencia', 'Press Ok', 'success');
          this.cargarExperiencia();
        },
        (err) => {
          Swal.fire(
            'No se ha podido eliminar la experiencia',
            'Volver a intertarlo',
            'error'
          );
        }
      );
    }
  }
}
