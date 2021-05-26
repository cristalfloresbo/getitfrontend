import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PublishOfferAndDemandPage } from './publish-offer-and-demand.page';
import { PublishOfferAndDemandPageRoutingModule } from './publish-offer-and-demand-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublishOfferAndDemandPageRoutingModule
  ],
  declarations: [PublishOfferAndDemandPage]
})
export class PublishOfferAndDemandPageModule {}
