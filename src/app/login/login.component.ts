import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";

class Login {
  email: string;
  password: string;
}

class Error {
  error: boolean;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public signup = false;
  public login = new Login();
  public error = new Error();

  constructor(private router: Router,
              private loginService: LoginService,
              public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeSignup() {
    this.signup = false;
  }

  toggleError() {
    this.error.error = false
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.signin(this.login).subscribe(
      res => this.dialogRef.close(res),
      err => {
        this.error.message = err.error
        this.error.error = true;
      }
    )
  }

}
