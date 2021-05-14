import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishOfferAndDemandComponent } from './publish-offer-and-demand.component';


const routes: Routes = [
  {
    path: '',
    component: PublishOfferAndDemandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishOfferAndDemandComponentRoutingModule {}
