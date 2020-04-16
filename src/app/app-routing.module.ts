import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./module/dashboard/component/dashboard/dashboard.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {
    path: 'login', component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
