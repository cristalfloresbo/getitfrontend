import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublishOfferAndDemandComponent } from './components/publish-offer-and-demand/publish-offer-and-demand.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

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
    path: 'getit',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'modal',
    loadChildren: () => import('./modals/modal/modal.module').then( m => m.ModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
