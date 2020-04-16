import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {AppointmentComponent} from './component/appointment/appointment.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatOptionModule, MatSelectModule,
  MatSidenavModule, MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import { ApppointmentFormComponent } from './component/appointment/appointment-form/apppointment-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppointmentFormService} from "./component/appointment/appointment-form.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    DashboardComponent,
    AppointmentComponent,
    ApppointmentFormComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSortModule,
    MatNativeDateModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  bootstrap: [DashboardComponent],
  providers:[AppointmentFormService]
})
export class DashboardModule {
}
