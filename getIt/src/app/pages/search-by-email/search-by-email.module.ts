import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchByEmailPageRoutingModule } from './search-by-email-routing.module';

import { SearchByEmailPage } from './search-by-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchByEmailPageRoutingModule
  ],
  declarations: [SearchByEmailPage]
})
export class SearchByEmailPageModule {}
