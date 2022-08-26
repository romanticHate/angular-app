import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandComponent } from './command/command.component';
import { AddComponent } from './command/add/add.component';
import { ViewComponent } from './command/view/view.component';
import {SharedService} from './shared/shared.service';
import { NavbarComponent } from './navbar/navbar.component'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DelComponent } from './command/del/del.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    AddComponent,
    ViewComponent,
    NavbarComponent,
    HomeComponent,
    DelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
