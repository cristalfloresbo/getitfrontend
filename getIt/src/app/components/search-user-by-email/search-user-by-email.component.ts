import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/user.model';
import { ApiService } from "src/app/api-service/api.service";

@Component({
  selector: 'app-search-user-by-email',
  templateUrl: './search-user-by-email.component.html',
  styleUrls: ['./search-user-by-email.component.scss'],
})
export class SearchUserByEmailComponent implements OnInit {
	public users: Users[] = [];
	public txtToSearch: String = "";

	constructor(private apiService: ApiService) {}

	ngOnInit() {
		this.loadUsers();
	}

	async loadUsers() {
		await this.apiService
		  .getAll<Users[]>("users")
		  .subscribe((response) => {
			this.users = response;
		  });
	  }

	search(event) {
		this.txtToSearch = event.detail.value;
	}
}
