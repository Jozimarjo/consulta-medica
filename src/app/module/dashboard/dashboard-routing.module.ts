import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {AppointmentComponent} from "./component/appointment/appointment.component";
import {ApppointmentFormComponent} from "./component/appointment/appointment-form/apppointment-form.component";
import {RouterGuard} from "../../guard/router.guard";


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [RouterGuard],
    children: [
      {
        path: 'appointment', component: AppointmentComponent,
      },
      {
        path: 'appointment/form', component: ApppointmentFormComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
