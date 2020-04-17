import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Subject} from "rxjs";


class User {
  id: number;
  name: string;
  email: string;

}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public login = new BehaviorSubject<any>(null);
  public login$ = this.login.asObservable();

  public user: User;
  public userTemp;

  constructor(private httpClient: HttpClient) {
    this.login$.subscribe(res => {
      this.userTemp = JSON.parse(localStorage.getItem('usuario'));
      if (this.userTemp)
        this.user = {...this.userTemp};
    })
  }


  signin(login) {
    return this.httpClient.post(`http://localhost:8080/session`, login)
  }

  signup(login) {
    return this.httpClient.post(`http://localhost:8080/session/signup`, login)
  }

  logout() {
    localStorage.removeItem('usuario');
  }
}
