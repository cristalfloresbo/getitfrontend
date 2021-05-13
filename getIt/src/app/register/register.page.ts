import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api-service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import {ModalController, NavController} from '@ionic/angular';

import {ModalPage} from '../modal/modal.page';
 
@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  defaultDate = "2002-01-01";

  constructor(public formBuilder: FormBuilder, public modalController: ModalController, public navController: NavController, private apiService: ApiService) {}
    
  user = this.formBuilder.group({
    firsname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    birthdate: [this.defaultDate, [Validators.required]],
    address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
    idWorkArea: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
  });

  saveData(){
    this.apiService.post('/registerUser', this.user.value).subscribe(
      (idUser: number) => { 
        console.log(idUser);
      }, (error: HttpErrorResponse) => {
        console.log('Ha ocurrido un error, vuelva a intentarlo');
      }
    )

    console.log(this.user.value);
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.user.get('birthdate').setValue(date, {
      onlyself: true
    })
  }
  async openModal() {
    let modal = await this.modalController.create({
      component: ModalPage,
    });
    return await modal.present();
  }

}