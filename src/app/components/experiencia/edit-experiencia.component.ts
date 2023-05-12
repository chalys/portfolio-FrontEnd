import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;



  constructor(
    private experienciaS: SExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) {}
  
  IsLoadding = false;
  isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(id);
    this.experienciaS.detail(id).subscribe(
      (data) => {
        this.expLab = data;
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
    this.experienciaS.update(id, this.expLab).subscribe(
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
}
