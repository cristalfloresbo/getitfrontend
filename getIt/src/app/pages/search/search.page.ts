import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }


  public redirectTo(event: CustomEvent) {
    if (event.detail.value === 'email') {
      this.router.navigate(['getit/search/by-email']);
    }
    if (event.detail.value === 'address') {
      this.router.navigate(['getit/seach']);
    }
    if (event.detail.value === 'age') {
      this.router.navigate(['getit/seach']);
    }
    if (event.detail.value === 'fee') {
      this.router.navigate(['getit/home']);
    }
  }

}
