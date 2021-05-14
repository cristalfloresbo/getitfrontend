import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api-service/api.service';
import { Ad } from '../../models/ad.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public ad$: Observable<Ad[]>;

    constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.ad$ = this.apiService.getAll<Ad[]>("/publications");
  }

}
