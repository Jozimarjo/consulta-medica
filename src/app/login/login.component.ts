import {Component, Inject, OnInit} from '@angular/core';
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
export class LoginComponent implements OnInit {
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

  ngOnInit() {
    console.log('INIT LOGIN')
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
