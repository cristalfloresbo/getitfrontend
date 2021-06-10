import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { ApiService } from 'src/app/api-service/api.service';
import { ViewPublicationComponent } from 'src/app/components/view-publication/view-publication.component';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import { Rating } from 'src/app/models/rating.model';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  public user: UserModel;
  public age: number;
  public ratingModel: Rating = {
    raterUserId: 1,
    rating: 0
  };
  public publications;
  public showAlertMessage = new ShowAlertMessage();

  constructor(private apiService: ApiService, private route: ActivatedRoute, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.getUser();
  }

  public getUser() {
    this.apiService.getById<UserModel>('user', this.route.snapshot.params.id).subscribe(response => {
      this.user = response;
      this.getPublications();
      this.age = moment(new Date()).diff(moment(this.user.birthdate), 'years');
    }, (error: HttpErrorResponse) => {
      this.showAlertMessage.showErrorAlert(error.error.message_error);
    });
  }

  public async viewPublication( publication: any) {
    const modal = await this.modalCtrl.create({
      component: ViewPublicationComponent,
      componentProps: {
        publicationList: publication
      }
    });
    await modal.present();
  }

  public rating(event) {
    this.ratingModel.rating = event.detail.value;
    this.apiService.put('rating', this.user.id, this.ratingModel).subscribe(response => {
      // tslint:disable-next-line:no-unused-expression
      response;
    }, (error: HttpErrorResponse) => {
      this.showAlertMessage.showErrorAlert(error.name);
    });
  }

  public getPublications() {
    this.apiService.getById<any>('photos-gallery', this.route.snapshot.params.id).subscribe(response => {
      this.publications = response;
    }, (error: HttpErrorResponse) => {
      this.showAlertMessage.showErrorAlert(error.error.message_error);
    });
  }
}
