import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/api-service/api.service';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  public user: UserModel;
  public age: number;
  public images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public showAlertMessage = new ShowAlertMessage();

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
  }

  public getUser() {
    this.apiService.getById<UserModel>('user', +this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.user = response;
      this.age = moment(new Date()).diff(moment(this.user.birthdate), 'years');
    }, (error: HttpErrorResponse) => {
      this.showAlertMessage.showErrorAlert(error.error.message_error);
    });
  }

}
