import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandComponent } from './command/command.component';
import { AddComponent } from './command/add/add.component';
import { ViewComponent } from './command/view/view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'HowTo', component: CommandComponent },
  /* 
   { path: 'Reports', component: ReportComponent } ,
   { path: 'Dashboard', component: DashboardComponent } ,
   */
  { path: 'Home', component: HomeComponent },
  { path: 'Add', component: AddComponent },
  { path: 'View', component: ViewComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
