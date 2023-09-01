import { Component } from '@angular/core';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent {

  public requestLogin: RequestLogin = new RequestLogin();

  constructor(private loginService: LoginService){}

  public doLogin() :void{
    console.log(this.requestLogin);
    this.loginService.doLogin(this.requestLogin).subscribe(
      data => {
      console.log(data);
    },
    error => {
      console.error();
    })
  }
}

