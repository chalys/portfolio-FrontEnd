import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css'],
})
export class NewProyectoComponent implements OnInit {
  idproyecto: string = '';
  nombreP: string = '';
  fecha_inicio: Date = new Date();
  fecha_fin: Date = new Date();
  descripcion: string = '';
  url_proyecto: string = '';
  foto_proyecto_url: string = '';

  isLogged = false;

  constructor(
    private proyectoS: ProyectoService,
    private activatedRouter: ActivatedRoute,
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
    const proy = new Proyecto(
      this.nombreP,
      this.fecha_inicio,
      this.fecha_fin,
      this.descripcion,
      this.url_proyecto,
      this.foto_proyecto_url
    );
    
    this.proyectoS.save(proy).subscribe(
      (data) => {
        Swal.fire('Proyecto añadido', 'Press Ok', 'success');
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
    const name = 'proyecto_' + id;
    this.imageService.uploadImage($event, name);
  }
}
