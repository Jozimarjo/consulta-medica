import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../login.service";

class Login {
  email: string;
  password: string;
  name: string
}

class Error {
  error: boolean;
  message: string;
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public login = new Login();
  public error = new Error();

  @Output() changeSignup: EventEmitter<boolean> = new EventEmitter();

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  toggleError() {
    this.error.error = false
  }

  onSubmit() {
    this.loginService.signup(this.login).subscribe(
      res => {
        this.changeSignup.next();
      },
      err => {
        this.error.message = err.error;
        this.error.error = true;
      }
    )
  }
}
