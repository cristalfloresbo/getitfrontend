import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublishOfferAndDemandComponent } from './components/publish-offer-and-demand/publish-offer-and-demand.component';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {
    path: 'new-publication',
    component: PublishOfferAndDemandComponent
  },
    {
    path: '',
    redirectTo: 'tab/home',
    pathMatch: 'full'
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
