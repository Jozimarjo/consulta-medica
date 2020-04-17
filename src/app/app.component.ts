import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginComponent} from "./login/login.component";
import {Router} from "@angular/router";
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-agendamento';

  constructor(public dialog: MatDialog, private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    if (!localStorage.getItem('usuario') && this.router.url == '/login') {
      const dialogRef = this.dialog.open(LoginComponent, {
          width: '460px',
          height: '507px',
          data: {name: "Jozimar", animal: "Ragnar"},
          disableClose: true
        })
      ;
      dialogRef.afterClosed().subscribe(result => {
        localStorage.setItem('usuario', JSON.stringify(result));
        this.loginService.login.next(true);

        this.router.navigate(['/dashboard/appointment']);
      });
    } else this.router.navigate(['/dashboard/appointment']);

  }
}
