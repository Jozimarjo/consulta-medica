import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {DashboardModule} from "./module/dashboard/dashboard.module";
import {LoginService} from "./login/login.service";
import {HttpClientModule} from "@angular/common/http";
import { SignupComponent } from './login/signup/signup.component';
import {MatIconModule} from '@angular/material/icon';
import { ErrorMessageComponent } from './component/error-message/error-message.component';
import {RouterGuard} from "./guard/router.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule

  ],
  entryComponents: [LoginComponent],
  providers: [LoginService, RouterGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
