import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { ImageService } from 'src/app/service/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css'],
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(
    private personaS: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService,
    private tokenService: TokenService

  ) {}

  isLogged = false;
  IsLoadding = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    this.IsLoadding = true;
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.foto_perfil_url = this.imageService.url;
    this.personaS.update(id, this.persona).subscribe(
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
