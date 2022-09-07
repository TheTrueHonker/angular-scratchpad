import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { RegisterLoginComponent } from './register-login/register-login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'create-notes', component: CreateNotesComponent},
  {path: 'register-login', component: RegisterLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
