import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from '../sharedmodule/components/error/not-found/not-found.component';
import { TodoComponent } from './components/todo/todo.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { DetailTodoComponent } from './components/detail-todo/detail-todo.component';
import { LesDirectivesComponent } from './components/les-directives/les-directives.component';

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
export class FrontofficeRoutingModule { }
