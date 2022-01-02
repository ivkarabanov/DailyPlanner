import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { WeekComponent } from './week/week.component';
import { SprintComponent } from './sprint/sprint.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DealModule } from './deal-module/deal-module.module';


@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    WeekComponent,
    SprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    DealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
