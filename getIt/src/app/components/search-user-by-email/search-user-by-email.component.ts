import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/user.model';
import { ApiService } from "src/app/api-service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-user-by-email',
  templateUrl: './search-user-by-email.component.html',
  styleUrls: ['./search-user-by-email.component.scss'],
})
export class SearchUserByEmailComponent implements OnInit {
	public users: Users[] = [];
	public txtToSearch: String = "";

	constructor(private apiService: ApiService, private router: Router) {}

	ngOnInit() {
		this.loadUsers();
	}

	async loadUsers() {
		await this.apiService
		  .getAll<Users[]>("users")
		  .subscribe((response) => {
			this.users = response;
			console.log('fvdf', this.users );
			
		  });
	  }

	search(event) {
		this.txtToSearch = event.detail.value;
	}

}
