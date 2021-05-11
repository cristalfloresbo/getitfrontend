import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublishOfferAndDemandComponent } from './components/publish-offer-and-demand/publish-offer-and-demand.component';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: 'home',
    component: PublishOfferAndDemandComponent
  },
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'register',
    component: RegisterPage 

  },
  
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
