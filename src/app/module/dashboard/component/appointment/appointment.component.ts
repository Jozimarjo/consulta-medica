import {Component, OnInit, ViewChild} from '@angular/core';
import {AppointmentFormService} from "./appointment-form.service";
import {MatSort, MatTableDataSource} from "@angular/material";

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
  displayedColumns: string[] = ['doctor', 'date','hour'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private appointmentService: AppointmentFormService,) {
  }

  ngOnInit() {


    this.appointmentService.getAllAppointments().subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
        console.log(this.dataSource)
        this.dataSource.sort = this.sort;
      }
      , err => console.log(err)
    );
  }

}
