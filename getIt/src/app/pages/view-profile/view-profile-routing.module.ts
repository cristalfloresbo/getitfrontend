import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewPublicationComponent } from 'src/app/components/view-publication/view-publication.component';

import { ViewProfilePage } from './view-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProfilePage
  }, {
    path: 'publication/:id',
    component: ViewPublicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProfilePageRoutingModule {}
