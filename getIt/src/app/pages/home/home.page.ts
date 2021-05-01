import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service/api.service';
import { Ad } from '../../models/ad.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ads: Ad[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.ads = this.apiService.getAllAd();
  }

}
