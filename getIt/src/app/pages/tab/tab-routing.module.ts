import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'view-profile',
        loadChildren: () => import('../../pages/view-profile/view-profile.module').then(m => m.ViewProfilePageModule )
      },
      {
        path: 'publish',
        // tslint:disable-next-line:max-line-length
        loadChildren: () => import('../../pages/publish-offer-and-demand/publish-offer-and-demand.module').then(m => m.PublishOfferAndDemandPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
