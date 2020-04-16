import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AppointmentFormService} from "../appointment-form.service";
import {map} from "rxjs/operators";

class Appointment {
  doctor: any;
  date: any;
  user: User;
}

class User {
  id: number;
  name: string;
}


@Component({
  selector: 'app-apppointment-form',
  templateUrl: './apppointment-form.component.html',
  styleUrls: ['./apppointment-form.component.css']
})

export class ApppointmentFormComponent implements OnInit {

  doctors: any = [];
  public model: Appointment = new Appointment();
  public hour;
  public hora: any;

  constructor(private appointService: AppointmentFormService) {


  }

  ngOnInit() {
    this.appointService.getAllDoctors().subscribe(
      res => this.doctors = res,
      err => console.log(err)
    );
  }

  loadHours(date) {
    this.hour = []
    this.appointService.getAllHoursForDoctorandDay(this.model.doctor.id, date.toISOString()).pipe(map((res: number[]) => res.map(re => re.toString().concat(':00')))).subscribe(
      res => this.hour = res
    )

  }

  resetValues() {
    this.hour = [];
    this.model.date = ''
  }

  onSubmit(form: NgForm) {
    let formatDate = new Date(this.model.date.getFullYear(), this.model.date.getMonth(), this.model.date.getDate(), (parseInt(this.hora) - 4)).toISOString();
    let appointment: Appointment = {
      doctor: this.model.doctor, user: {id: 1, name: ''}, date: formatDate
    }
    this.appointService.createAppointment(appointment).subscribe(
      res => this.cleanForm(form),
      err => console.log(err)
    )
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    // this.model = new Appointment();
    // console.log(this.model)
    this.hora = ''
    this.hour = ''
  }
}
