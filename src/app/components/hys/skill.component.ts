import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hys',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];

  constructor(
    private skillS: SkillService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
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
      this.skillS.delete(id).subscribe(
        (data) => {
          Swal.fire('Se elimino el Skill', 'Press Ok', 'success');
          this.cargarSkills();
        },
        (err) => {
          Swal.fire(
            'No se ha podido eliminar el Skill',
            'Volver a intertarlo',
            'error'
          );
        }
      );
    }
  }
}
