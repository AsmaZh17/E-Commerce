import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { ClientComponent } from './client.component';
import { ShopModule } from './shop/shop.module';
import { BlogModule } from './blog/blog.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    ShopModule,
    BlogModule,
    AuthentificationModule,
    ContactModule,
    AboutModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
