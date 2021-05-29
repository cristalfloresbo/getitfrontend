import { Component, OnInit } from '@angular/core';
import data from "../../helpers/searchOptions";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public routes = {
    email: 'getit/search/by-email',
    address: 'getit/search',
    requiredTime: 'getit/search',
    fee: 'getit/home'
  };

  public searchOptions = data;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public redirectTo(event: CustomEvent) {
    this.router.navigate([this.routes[event.detail.value]]);
  }

}