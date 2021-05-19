import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/api-service/api.service";
import { Publication } from "src/app/models/publication.model";
import { WorkArea } from "src/app/models/workArea.model";
import { ShowAlertMessage } from "src/app/helpers/showAlertMessage";
import { Router } from '@angular/router';

@Component({
  selector: "app-publish-offer-and-demand",
  templateUrl: "./publish-offer-and-demand.component.html",
  styleUrls: ["./publish-offer-and-demand.component.scss"],
})
export class PublishOfferAndDemandComponent implements OnInit {

  publicationForm: FormGroup;
  public workareas: WorkArea[] = [];
  private publication: Publication;
  private USER_ID = 1;
  private showMessage = new ShowAlertMessage();

  constructor(public formBuilder: FormBuilder, private apiService: ApiService, private route: Router) { }

  ngOnInit() {
    this.createPublicationForm();
    this.loadWorkAreas();
  }

  public async loadWorkAreas() {
    await this.apiService
      .getAll<WorkArea[]>("workareas")
      .subscribe((response) => {
        this.workareas = response;
      });
  }

  public save() {
    this.publication = this.publicationForm.value as Publication;
    this.publication.userId = this.USER_ID;
    this.apiService
      .post(`/publishing`, this.publication)
      .subscribe((results) => {
        this.showMessage.showSuccessAlert(
          `publication with id: ${results} registered successfully!`
        );
      });
  }

  public isInvalid(formControlName: string) {
    const control = this.publicationForm.controls[formControlName];
    return !control.valid && (control.dirty || control.touched);
  }

  public hasErrorControl(formControlName, errorType) {
    return this.publicationForm.controls[formControlName].errors[errorType];
  }

  public cancel(): void {
    this.showMessage.showCancelAlert(
      "¿Esta seguro que no desea registrar la publicacion?",
      ""
    );
  }

  private createPublicationForm() {
    this.publicationForm = this.formBuilder.group({
      typePublishing: ["", [Validators.required]],
      workAreaId: ["", [Validators.required]],
      address: ["", [Validators.maxLength(50), Validators.minLength(10)]],
      timeRequiredOrOffered: ["", [Validators.min(1)]],
      tariff: ["", [Validators.min(1)]],
      description: [
        "",
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(10),
        ],
      ],
    });
  }

}
