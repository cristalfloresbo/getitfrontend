import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublishOfferAndDemandComponent } from './components/publish-offer-and-demand/publish-offer-and-demand.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { ViewUserProfileComponent } from './components/view-user-profile/view-user-profile.component';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'new-publication',
    component: PublishOfferAndDemandComponent
  },
  {
    path: 'view-user-profile/:',
    component: ViewUserProfileComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabBarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
