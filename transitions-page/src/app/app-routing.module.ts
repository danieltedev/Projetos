import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursosComponent } from "./recursos/recursos.component";
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: []
  },
  {
    path: '', component: HomeComponent,
    children: []
  },
  {
    path: 'contato', component: ContatoComponent,
    children: []
  },
  {
    path: 'recursos', component: RecursosComponent,
    children: []
  },
  {
    path: 'login', component: LoginComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
