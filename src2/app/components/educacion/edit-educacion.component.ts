import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})
export class EditeducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService,
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
    this.educacionS.detail(id).subscribe(
      (data) => {
        this.educacion = data;
      },
      (err) => {
        Swal.fire('Se encontro un error en la lista','Volver al inicio','error');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    this.IsLoadding = true;
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
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
 /* async newUploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'educacion_' + id;
    this.imageService.uploadImage($event, name);
  }*/

  /*
  async newImageUpload(event: any) {
    const path = 'educacion';
    const name = this.educacion.nombreE;
    const file = event.target.files[0];
    const res = await this.educacionS.uploadImage(file, path, name);
    this.educacion.logo_institucion_url = res;

  }
  */

}
