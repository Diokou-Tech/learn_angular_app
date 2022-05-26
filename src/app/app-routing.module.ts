import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/error/not-found/not-found.component';
import {QuizComponent} from "./frontoffice/components/quiz/quiz.component";
import {LesDirectivesComponent} from "./frontoffice/components/les-directives/les-directives.component";

const routes: Routes = [
  {path : 'quiz', component : QuizComponent},
  {path : 'directive', component : LesDirectivesComponent},
  {path : 'not-found', component : NotFoundComponent},
  {path : '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
