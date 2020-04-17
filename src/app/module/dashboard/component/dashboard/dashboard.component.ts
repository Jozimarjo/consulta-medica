import {Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from "@angular/router";
import {LoginService} from "../../../../login/login.service";
import {DashboardService} from "../../dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public currentPage;

  constructor(private router: Router, private loginService: LoginService, private  dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.dashboardService.currentUrl$.subscribe(
      () => this.currentPage = this.router.url
    )
  }


  route() {
    this.router.navigate(['dashboard/appointment'])
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login'])

  }
}
