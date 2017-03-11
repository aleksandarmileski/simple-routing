import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactsComponent} from "./contacts.component";
import {ContactComponent} from './contact.component';
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpModule
  ],
  declarations: [
    ContactsComponent,
    ContactComponent
  ]
})
export default class ContactsModule {
}
