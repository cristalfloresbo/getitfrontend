import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  defaultDate = "2002-01-01";

  constructor(public formBuilder: FormBuilder) {}
    
  user = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    linkNum: ['', [Validators.required, Validators.minLength(32)]],
    dateOfBirth: [this.defaultDate, [Validators.required, Validators.minLength(4)]],
    address: ['', [Validators.required, Validators.minLength(4)]],
    workArea: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.pattern('[a-z0-9._%+-]+[A-Z0-9.-]')]],
  });
  
    ngOnInit(){}

  saveDate(){
    console.log(this.user.value);
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.user.get('dateOfBirth').setValue(date, {
      onlyself: true
    })
  }

}