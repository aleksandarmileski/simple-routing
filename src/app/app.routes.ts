import {RouterModule} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";
const routes = [
  {path: '', loadChildren: "app/home/home.module"},
  {path: 'contacts', loadChildren: "app/contacts/contacts.module"},
];

export var router = RouterModule.forRoot(routes);
