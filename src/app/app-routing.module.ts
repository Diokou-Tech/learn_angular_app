import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path : '', component : HomeComponent},
  // {path : 'not-found', component : NotFoundComponent},
  // {path : 'todo', component : TodoComponent},
  // {path : 'todo/:name', component : DetailTodoComponent},
  // {path : 'quiz', component : QuizComponent},
  // {path : 'directive', component : LesDirectivesComponent},
  // {path : '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
