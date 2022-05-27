import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { BackofficeRoutingModule } from './Backoffice-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
