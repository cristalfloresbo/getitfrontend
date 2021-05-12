import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api-service/api.service';
import { Publication } from 'src/app/models/publication.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-offer-and-demand',
  templateUrl: './publish-offer-and-demand.component.html',
  styleUrls: ['./publish-offer-and-demand.component.scss']
})
export class PublishOfferAndDemandComponent implements OnInit {

  publicationForm: FormGroup;
  workareas = [];
  private publication: Publication;
  private USER_ID = 1;

  constructor(public formBuilder: FormBuilder, private apiService: ApiService, private route: Router) { }

  ngOnInit() {
    this.createPublicationForm();
    this.loadWorkAreas();
  }

  public goToHome() {
    this.route.navigate(['/home']);
  }

  public async savePublication() {
    this.publication = this.publicationForm.value as Publication;
    this.publication.userId = this.USER_ID;
    await this.apiService.post(`/publishing`, this.publication)
      .subscribe(
        data => this.goToHome(),
        error => alert(error)
      );
  }

  public isInvalid(formControlName: string) {
    let control = this.publicationForm.controls[formControlName];
    return !control.valid && (control.dirty || control.touched);
  }
  
  public hasErrorControl(formControlName, errorType) {
    return this.publicationForm.controls[formControlName].errors[errorType];
  }
  
  private createPublicationForm() {
    this.publicationForm = this.formBuilder.group({
      typePublishing: ['', [Validators.required]],
      workAreaId: ['', [Validators.required]],
      address: ['', [Validators.minLength(10), Validators.maxLength(50)]],
      timeRequiredOrOffered: ['', [Validators.min(1)]],
      tariff: ['', [Validators.min(1)]],
      descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]]
      })
    }
    
  private async loadWorkAreas() {
    await this.apiService.getAll('/workareas').subscribe(response => {
      this.workareas = response
    });
  }
}
