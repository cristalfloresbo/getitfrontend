import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PublishOfferAndDemandComponent } from './components/publish-offer-and-demand/publish-offer-and-demand.component';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { homedir } from 'node:os';
import { HomePage } from './home/home.page';
const routes: Routes = [
  {
    path: 'home',
    component: PublishOfferAndDemandComponent
  },
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
