import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LesDirectivesComponent } from './les-directives/les-directives.component';
import { QuizComponent } from './quiz/quiz.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'not-found', component : NotFoundComponent},
  {path : 'todo', component : TodoComponent},
  {path : 'todo/:name', component : DetailTodoComponent},
  {path : 'quiz', component : QuizComponent},
  {path : 'directive', component : LesDirectivesComponent},
  {path : '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
