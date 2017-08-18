import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { RecursosComponent } from './recursos/recursos.component';
import { OnScrollService } from "./shared/on-scroll.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    LoginComponent,
    RecursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    OnScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
