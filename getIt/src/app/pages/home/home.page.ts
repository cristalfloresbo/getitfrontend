import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service/api.service';
import { Ad } from '../../models/ad.model';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
    public ad$: Observable<Ad[]>;

    constructor(private apiService: ApiService, private router: Router) {}

    ngOnInit() {
      this.ad$ = this.apiService.getAll<Ad[]>("publications");
    }
}
