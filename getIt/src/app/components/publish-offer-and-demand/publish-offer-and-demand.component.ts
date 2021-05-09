import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/api-service/api.service";
import { Publication } from "src/app/models/publication.model";
import { WorkArea } from "src/app/models/workArea.model";
import { ShowAlertMessage } from "src/app/helpers/showAlertMessage";
import { IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-publish-offer-and-demand",
  templateUrl: "./publish-offer-and-demand.component.html",
  styleUrls: ["./publish-offer-and-demand.component.scss"],
})
export class PublishOfferAndDemandComponent implements OnInit {
  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  publicationForm: FormGroup;
  public workareas: WorkArea[] = [];
  private publication: Publication;
  private USER_ID = 1;
  private showMessage = new ShowAlertMessage();

  constructor(
    public formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.createPublicationForm();
    this.loadWorkAreas();
  }

  async loadWorkAreas() {
    await this.apiService
      .getAll<WorkArea[]>("/workareas")
      .subscribe((response) => {
        this.workareas = response;
      });
  }

  private createPublicationForm() {
    this.publicationForm = this.formBuilder.group({
      typePublishing: ["", [Validators.required]],
      workAreaId: ["", [Validators.required]],
      tariff: ["", [Validators.pattern("^[0-9]*$"), Validators.min(1)]],
      address: ["", [Validators.maxLength(50), Validators.minLength(10)]],
      timeRequiredOrOffered: ["", [Validators.pattern("^[0-9]+$")]],
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

  async savePublication() {
    this.publication = this.publicationForm.value as Publication;
    this.publication.userId = this.USER_ID;
    await this.apiService
      .post(`/publishing`, this.publication)
      .subscribe((results) => {
        this.showMessage.showSuccessAlert(
          `publication with id: ${results} registered successfully!`
        );
      });
  }
  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }

  private cancel(): void {
    this.showMessage.showCancelAlert(
      "¿Esta seguro que no desea registrar la publicacion?",
      ""
    );
  }
}
