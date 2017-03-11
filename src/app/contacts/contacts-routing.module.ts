import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactsComponent} from "./contacts.component";
import {ContactComponent} from "./contact.component";

const routes: Routes = [
  {path: '', component: ContactsComponent},
  {path: ':id', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContactsRoutingModule {
}
