import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import  { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './_components/country-selector/country-selector.component';
import { MethodSelectorComponent } from './_components/method-selector/method-selector.component';
import { MethodFormComponent } from './_components/method-form/method-form.component';
import { AlertComponent } from './_components/alert/alert.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';


@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
    MethodSelectorComponent,
    MethodFormComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, CountrySelectorComponent, MethodSelectorComponent, MethodFormComponent,AlertComponent, HeaderComponent, FooterComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(AppComponent, injector);
    const el = createCustomElement(AppComponent, { injector , strategyFactory});
    customElements.define('app-widget', el);
  }
  ngDoBootstrap() {}
}
