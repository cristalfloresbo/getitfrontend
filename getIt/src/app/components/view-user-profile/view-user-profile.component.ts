import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api-service/api.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.scss'],
})
export class ViewUserProfileComponent implements OnInit {

  public userId = 1;
  public user: User;
  public age = 26;
  public images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
  }

  public getUser() {
    this.apiService.getById('user', this.userId).subscribe(response => {
      this.user = response;
    });
  }

}
