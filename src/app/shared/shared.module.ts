import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
