import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { HomeModule } from "./client/home/home.module";
import { NavbarComponent } from './client/navbar/navbar.component';
import { FooterComponent } from './client/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    HomeModule
],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FooterComponent
  ]
})
export class AppModule { }
