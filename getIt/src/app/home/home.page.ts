import { Component, OnInit } from '@angular/core';
import { AdService } from './ad.service';
import { Ad } from './ad.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ads: Ad[];
  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAllAd();
  }

}
