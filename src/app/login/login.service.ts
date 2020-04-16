import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {
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
