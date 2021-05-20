import { Component, OnInit } from '@angular/core';
import { Ad } from '../../models/ad.model';
import { ApiService } from "src/app/api-service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-ad-by-required-time',
  templateUrl: './search-ad-by-required-time.component.html',
  styleUrls: ['./search-ad-by-required-time.component.scss'],
})
export class SearchAdByRequiredTimeComponent implements OnInit {
	public ads: Ad[] = [];
	public txtToSearch: number = 0;
	constructor(private apiService: ApiService, private router: Router) { }

	ngOnInit() {
		this.loadAds();
	}

	async loadAds() {
		await this.apiService
		  .getAll<Ad[]>("publications")
		  .subscribe((response) => {
			this.ads = response;
		  });
	  }

	search(event) {
		this.txtToSearch = +event.detail.value;
	}

}
