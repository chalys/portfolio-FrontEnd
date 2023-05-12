import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent implements OnInit {
  nombreH: string = '';
  porcentaje: number = 0;

  isLogged = false;

  constructor(
    private skillS: SkillService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onCreate(): void {
    const skill = new Skill(this.nombreH, this.porcentaje);
    this.skillS.save(skill).subscribe(
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
