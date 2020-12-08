import { Component, OnInit } from '@angular/core';
import {AutentificacaoService} from '../../servicos/autentificacao.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Credencial} from '../../modelos/credencial.class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  frmCredencial: FormGroup;

  constructor(private autentificacaoService: AutentificacaoService,
      private fb: FormBuilder, private router: Router        ) { }

  ngOnInit() {

    this.frmCredencial = this.fb.group({usuario: [''], senha: ['']});

  }


  logar(): void{

    alert('logar');

    let credencial = new Credencial();

    credencial.email = this.frmCredencial.get('usuario').value;
    credencial.senha = this.frmCredencial.get('senha').value;

    this.autentificacaoService.logar(credencial).subscribe((res) => {

        if(res.authenticated ) {
          localStorage.setItem('token', res.accessToken);
          this.router.navigateByUrl('/home');
        }else{
          alert('falhou');
        }

    });

  }

}
