import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css'],
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(
    private proyectoS: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService,
    private tokenService: TokenService
  ) {}

  IsLoadding = false;
  isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      (data) => {
        this.proyecto = data;
      },
      (err) => {
        alert('Error al modificar el proyecto');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    this.IsLoadding = true;
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(
      (data) => {
        Swal.fire('Registro modificado', 'Press Ok', 'success');
        this.router.navigate(['']);
      },
      (err) => {
        this.IsLoadding = false;
        Swal.fire(
          'Error al modificar el registro',
          'Vuelva a intentarlo',
          'error'
        );
        this.router.navigate(['']);
      }
    );
  }

  //Metodo para llamar al Servicio de Imagen
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event, name);
  }
}
