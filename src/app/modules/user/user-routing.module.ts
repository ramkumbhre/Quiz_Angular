import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TakeTestComponent } from './Components/take-test/take-test.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'take-test/:id', component: TakeTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), DashboardComponent],
  exports: [RouterModule]
})
export class UserRoutingModule { }

