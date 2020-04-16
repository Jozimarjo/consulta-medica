import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map} from "rxjs/operators";

class User {
  id: number;
  name: string;
  email:string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentFormService {
  private user: User = new User();

  constructor(private httpClient: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }

  public getAllDoctors() {
    return this.httpClient.get('http://localhost:8080/doctor')
  }

  getAllHoursForDoctorandDay(idDoctor: number, date: String) {
    return this.httpClient.get(`http://localhost:8080/availableAppointment/${idDoctor}/${date}`)

  }

  createAppointment(apointment: any) {
    return this.httpClient.post(`http://localhost:8080/appointment`, apointment)

  }

  public getAllAppointments() {
    return this.httpClient.get(`http://localhost:8080/appointment/${this.user.id}`).pipe(map((res: HttpResponse<any>) => res.body), map(valor => {
      valor.forEach(value => value.date = new Date(value.date));
      return valor;
    }))

  }
}
