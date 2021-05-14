import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api-service/api.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  public userId = 1;
  public user: User;
  public age = 26;
  public images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getUser();
  }

  public getUser() {
    this.apiService.getById('user', this.userId).subscribe(response => {
      this.user = response;
    });
  }

}
