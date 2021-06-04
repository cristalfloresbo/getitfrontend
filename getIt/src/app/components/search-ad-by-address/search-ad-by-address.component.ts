import { Component, OnInit } from '@angular/core';
import { Ad } from '../../models/ad.model';
import { ApiService } from "src/app/api-service/api.service";

@Component({
  selector: 'app-search-ad-by-address',
  templateUrl: './search-ad-by-address.component.html',
  styleUrls: ['./search-ad-by-address.component.scss'],
})
export class SearchAdByAddressComponent implements OnInit {
	public ads: Ad[] = [];
	public txtToSearch: String = "";
	constructor(private apiService: ApiService) { }

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
		this.txtToSearch = event.detail.value;
	}
}
