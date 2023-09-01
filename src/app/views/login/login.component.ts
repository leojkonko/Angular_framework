import { Component } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent {

  public requestLogin: RequestLogin = new RequestLogin();

  constructor(private loginService: LoginService, private alertService: AlertService){}

  public doLogin() :void{
    console.log(this.requestLogin);
    this.loginService.doLogin(this.requestLogin).subscribe(
    data => {
      this.alertService.info("",'Funcionalidade ainda não implementada!');
      //console.log(data);
    }, 
    (httpError) => {
      this.alertService.error("",httpError.error.message);
      //console.error();
    })
  }
}

