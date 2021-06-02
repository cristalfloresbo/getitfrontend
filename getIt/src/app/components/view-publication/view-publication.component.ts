import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ApiService } from 'src/app/api-service/api.service';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';
import data from "../../helpers/photos";

@Component({
  selector: 'app-view-publication',
  templateUrl: './view-publication.component.html',
  styleUrls: ['./view-publication.component.scss'],
})
export class ViewPublicationComponent implements OnInit {

  public publication;
  public createdAt;
  public images = data;
  public showAlertMessage = new ShowAlertMessage();
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.getById<any>('publication', this.route.snapshot.params.id).subscribe(response => {
      this.publication = response;
      this.createdAt = moment(this.publication.created).format('LLL');
    }, (error: HttpErrorResponse) => {
      this.showAlertMessage.showErrorAlert(error.error.message_error);
    });
  }

}
