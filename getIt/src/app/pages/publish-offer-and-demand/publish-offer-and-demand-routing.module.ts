import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublishOfferAndDemandPage } from './publish-offer-and-demand.page';

const routes: Routes = [
  {
    path: '',
    component: PublishOfferAndDemandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishOfferAndDemandPageRoutingModule {}
