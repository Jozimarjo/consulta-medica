import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AppointmentFormService} from "../appointment-form.service";
import {map} from "rxjs/operators";
import {LoginService} from "../../../../../login/login.service";
import {DashboardService} from "../../../dashboard.service";

class Appointment {
  doctor: any;
  date: any;
  user: User;
}

class User {
  id: number;
  name: string;
  email: string
}

class Message {
  show: boolean;
  error: boolean;
  msg: string
}

@Component({
  selector: 'app-apppointment-form',
  templateUrl: './apppointment-form.component.html',
  styleUrls: ['./apppointment-form.component.css']
})

export class ApppointmentFormComponent implements OnInit {

  public model: Appointment = new Appointment();

  public doctors: any = [];

  public hour: any = [];

  public hora: any;

  public user: User;

  public alertMessage: Message;

  constructor(private appointService: AppointmentFormService,
              private loginService: LoginService,
              private dashboardService: DashboardService) {
    this.user = loginService.user;
    this.alertMessage = new Message();
  }

  ngOnInit() {
    this.dashboardService.currentUrl.next()
    this.appointService.getAllDoctors().subscribe(
      res => this.doctors = res,
      err => console.log(err)
    );
  }

  loadHours(date) {
    this.hour = []
    if (this.model.doctor)
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
      doctor: this.model.doctor, user: this.user, date: formatDate
    }
    this.appointService.createAppointment(appointment).subscribe(
      res => {
        this.alertMessage.msg = 'Consulta marcada com sucesso';
        this.alertMessage.error = false;
        this.alertMessage.show = true;
        this.cleanForm(form)
      },
      err => {
        this.alertMessage.msg = 'Error ao marcar a consulta';
        this.alertMessage.msg = err.message;
        this.alertMessage.error = true;
        this.alertMessage.show = true;
      }
    )
  }

  toggleMsg() {
    this.alertMessage.show = false
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    // this.model = new Appointment();
    // console.log(this.model)
    this.hora = ''
    this.hour = ''
  }
}
