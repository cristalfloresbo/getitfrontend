import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/user.model';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-search-by-email',
  templateUrl: './search-by-email.page.html',
  styleUrls: ['./search-by-email.page.scss'],
})
export class SearchByEmailPage implements OnInit {

  public users: Users[] = [];
  public txtToSearch: String = "";

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.apiService.getAll<Users[]>("users").subscribe((response) => {
      this.users = response;
    });
  }

  search(event) {
    this.txtToSearch = event.detail.value;
  }
}
