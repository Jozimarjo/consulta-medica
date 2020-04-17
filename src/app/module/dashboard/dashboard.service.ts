import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public currentUrl = new Subject();
  public currentUrl$ = this.currentUrl.asObservable();

  constructor() {
  }
}
