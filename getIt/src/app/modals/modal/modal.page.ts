import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( public modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }


  closeModal() {
    this.modalController.dismiss();
  }

  reload() {
    this.router.navigateByUrl('/RegisterPage');
    this.modalController.dismiss();
  }

}
