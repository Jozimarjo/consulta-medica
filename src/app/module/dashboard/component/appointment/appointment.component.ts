import {Component, OnInit, ViewChild} from '@angular/core';
import {AppointmentFormService} from "./appointment-form.service";
import {MatSort, MatTableDataSource} from "@angular/material";
import {LoginService} from "../../../../login/login.service";
import {DashboardService} from "../../dashboard.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  public dataSource: any = [
    // {position: 1, doctor: 'Hydrogen', date: 1.0079},
    // {position: 2, doctor: 'Helium', date: 4.0026}
  ];
  displayedColumns: string[] = ['doctor', 'date', 'hour'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public user;

  constructor(private appointmentService: AppointmentFormService,
              private loginsService: LoginService,
              private dashboardService: DashboardService
  ) {
    this.user = loginsService.user;
  }

  ngOnInit() {
    this.appointmentService.getAllAppointments(this.user).subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
      }
      , err => console.log(err)
    );
    this.dashboardService.currentUrl.next()
  }

}
