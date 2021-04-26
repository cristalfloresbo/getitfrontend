import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Publication } from 'src/app/models/publication.model';

@Component({
  selector: 'app-publish-offer-and-demand',
  templateUrl: './publish-offer-and-demand.component.html',
  styleUrls: ['./publish-offer-and-demand.component.scss'],
})

export class PublishOfferAndDemandComponent implements OnInit {
 
  private publication: Publication;
  publicationForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { 
     
  }  
  
  ngOnInit (){
    this.createPublicationForm();
  }

  private createPublicationForm() {
    this.publicationForm = this.formBuilder.group({
      typePublishing: ['', [Validators.required]],
      workAreaId: ['', [Validators.required]],
      tariff: ['', [Validators.pattern('^[0-9]*$'), Validators.minLength(1)]],
      address: ['', [ Validators.maxLength(50), Validators.minLength(10) ]],
      timeRequiredOrOffered: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      Validators.maxLength(100), Validators.minLength(10) ]]
    })
  }

  public savePublication() {
      //this.publication = this.publicationForm.controls.value;

  }
  

}
