import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { WeekComponent } from './week/week.component';
import { SprintComponent } from './sprint/sprint.component';

const routes: Routes = [
  { path: '', component: TodayComponent },
  { path: 'week', component: WeekComponent},
  { path:'sprint', component:SprintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }