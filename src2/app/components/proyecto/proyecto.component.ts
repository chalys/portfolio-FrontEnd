import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(
    private proyectoS: ProyectoService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoS.lista().subscribe(
      (data) => {
        this.proyecto = data;
      },
      (err) => {
        Swal.fire('Se encontro un error en la lista','Volver al inicio','error');
        this.router.navigate(['']);
      }
    );
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectoS.delete(id).subscribe(
        (data) => {
          Swal.fire('Se elimino el proyecto', 'Press Ok', 'success');
          this.cargarProyecto();
        },
        (err) => {
          Swal.fire(
            'No se ha podido eliminar el proyecto',
            'Volver a intertarlo',
            'error'
          );
        }
      );
    }
  }
}
