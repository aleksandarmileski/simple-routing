import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/startWith";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {

  contact$ = new BehaviorSubject({
    name: "Loading...",
    image: "",
  });
  api = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';

  constructor(private route: ActivatedRoute,
              private http: Http) {
    route.params
      .map((p: any) => p.id)
      .switchMap(id => http.get(this.api + 'people/' + id)
        .map(res => res.json())
        .map(contact => Object.assign({}, contact, {image: this.api + contact.image}))
      )
      .subscribe(this.contact$);
  }

  ngOnInit() {
  }

}
