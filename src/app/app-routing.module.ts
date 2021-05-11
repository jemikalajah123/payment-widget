import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from './_components/alert/alert.component';
import { CountrySelectorComponent } from './_components/country-selector/country-selector.component';
import { MethodFormComponent } from './_components/method-form/method-form.component';
import { MethodSelectorComponent } from './_components/method-selector/method-selector.component';

const routes: Routes = [
  { path: '', component: CountrySelectorComponent },
  { path: 'payment-method', component: MethodSelectorComponent },
  { path: 'pay', component: MethodFormComponent },
  { path: 'response', component: AlertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
