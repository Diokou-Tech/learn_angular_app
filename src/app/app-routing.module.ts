import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'not-found', component : NotFoundComponent},
  {path : 'todo', component : TodoComponent},
  {path : 'quiz', component : QuizComponent},
  {path : '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
