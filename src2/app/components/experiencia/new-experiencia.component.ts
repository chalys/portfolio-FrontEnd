import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css'],
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  fecha_inicio: Date = new Date();
  fecha_fin: Date = new Date();
  descripcion: string = '';

  isLogged = false;

  constructor(
    private experienciaS: SExperienciaService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onCreate(): void {
    const expe = new Experiencia(
      this.nombreE,
      this.fecha_inicio,
      this.fecha_fin,
      this.descripcion
    );

    this.experienciaS.save(expe).subscribe(
      (data) => {
        Swal.fire('Experiencia añadida', 'Press Ok', 'success');
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire('Fallo la operacion', 'Vuelva a intentarlo', 'error');
        this.router.navigate(['']);
      }
    );
  }
}
