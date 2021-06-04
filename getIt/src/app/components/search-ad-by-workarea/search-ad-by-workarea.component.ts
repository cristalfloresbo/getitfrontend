import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api-service/api.service";
import { WorkArea } from "src/app/models/workArea.model";
import { Ad } from '../../models/ad.model';

@Component({
  selector: 'app-search-ad-by-workarea',
  templateUrl: './search-ad-by-workarea.component.html',
  styleUrls: ['./search-ad-by-workarea.component.scss'],
})
export class SearchAdByWorkareaComponent implements OnInit {

	public workareas: WorkArea[] = [];
	public ads: Ad[] = [];

	constructor(private apiService: ApiService) {}

	ngOnInit() {
	  	this.loadWorkAreas();
	}

	loadWorkAreas() {
		this.apiService
		  .getAll<WorkArea[]>("workareas")
		  .subscribe((response) => {
			this.workareas = response;
		  });
	}

	OnChange(event) {
		this.apiService
		  .getByParams<Ad[]>("publications", { workarea: event.target.value })
		  .subscribe((response) => {
			this.ads = response;
		  });
	}
}
