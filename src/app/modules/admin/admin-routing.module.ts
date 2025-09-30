import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateTestComponent } from './Components/create-test/create-test.component';
import { AddQuestionInTestComponent } from './Components/add-question-in-test/add-question-in-test.component';
import { ViewTestComponent } from './Components/view-test/view-test.component';
import { ViewTestResultsComponent } from './Components/view-test-results/view-test-results.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create-test', component: CreateTestComponent},
  {path: 'add-question/:id', component: AddQuestionInTestComponent},
  {path: 'view-test/:id', component: ViewTestComponent},
  {path: 'view-test-result', component: ViewTestResultsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
