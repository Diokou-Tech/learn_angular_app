import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { DetailTodoComponent } from './components/detail-todo/detail-todo.component';
import { LesDirectivesComponent } from './components/les-directives/les-directives.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontofficeComponent } from './frontoffice.component';

@NgModule({
  declarations: [
    QuizComponent,
    HomeComponent,
    DetailTodoComponent,
    LesDirectivesComponent,
    FrontofficeComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    NgModule,
    FormsModule,
    BrowserAnimationsModule,
    FrontofficeRoutingModule
  ]
})
export class FrontofficeModule { }