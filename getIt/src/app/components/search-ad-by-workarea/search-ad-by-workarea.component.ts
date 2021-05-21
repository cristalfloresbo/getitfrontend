import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api-service/api.service";
import { WorkArea } from "src/app/models/workArea.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-search-ad-by-workarea',
  templateUrl: './search-ad-by-workarea.component.html',
  styleUrls: ['./search-ad-by-workarea.component.scss'],
})
export class SearchAdByWorkareaComponent implements OnInit {

	public workareas: WorkArea[] = [];
	form: FormGroup;
  
	constructor(
		public formBuilder: FormBuilder,
	  	private apiService: ApiService
	) {}
  
	ngOnInit() {
		this.createForm();
	  	this.loadWorkAreas();
	}

	async loadWorkAreas() {
		await this.apiService
		  .getAll<WorkArea[]>("workareas")
		  .subscribe((response) => {
			this.workareas = response;
		  });
	}

	private createForm() {
		this.form = this.formBuilder.group({
		  workAreaId: ["", [Validators.required]],
		});
	}
}
