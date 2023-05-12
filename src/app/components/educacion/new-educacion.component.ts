import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css'],
})
export class NeweducacionComponent implements OnInit {
  nombreE: string = '';
  fecha_inicio: Date = new Date();
  fecha_fin: Date = new Date();
  descripcion: string = '';
  logo_institucion_url: string = '';

  isLogged = false;

  constructor(
    private educacionS: EducacionService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    private tokenService: TokenService,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onCreate(): void {
    const edu = new Educacion(
      this.nombreE,
      this.fecha_inicio,
      this.fecha_fin,
      this.descripcion,
      this.logo_institucion_url
    );

    this.educacionS.save(edu).subscribe(
      (data) => {
        Swal.fire('Educacion añadida', 'Press Ok', 'success');
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire('Fallo la operacion', 'Vuelva a intentarlo', 'error');
        this.router.navigate(['']);
      }
    );
  }

    //Metodo para llamar al Servicio de Imagen
    uploadImage($event: any) {
      const id = this.activatedRouter.snapshot.params['id'];
      const name = 'perfil_' + id;
      this.imageService.uploadImage($event, name)
    }
    
}
