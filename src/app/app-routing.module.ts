import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/error/not-found/not-found.component';

const routes: Routes = [
  {
  path : '',
    redirectTo : 'portail',
    pathMatch: 'full'
  },
  {
    path : 'portail',
    loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule)
  },
  {
    path : 'admin',
    loadChildren : () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule)
  },
  {path : 'not-found', component : NotFoundComponent},
  {path : '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
