import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { PublishOfferAndDemandComponent } from "./components/publish-offer-and-demand/publish-offer-and-demand.component";
import { RegisterComponent } from "./components/register/register.component";
import { SearchAdByAddressComponent } from "./components/search-ad-by-address/search-ad-by-address.component";
import { SearchAdByFeeComponent } from "./components/search-ad-by-fee/search-ad-by-fee.component";
import { SearchAdByRequiredTimeComponent } from "./components/search-ad-by-required-time/search-ad-by-required-time.component";
import { SearchAdByWorkareaComponent } from "./components/search-ad-by-workarea/search-ad-by-workarea.component";
import { SearchUserByEmailComponent } from "./components/search-user-by-email/search-user-by-email.component";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "new-publication",
    component: PublishOfferAndDemandComponent,
  },
  {
    path: "",
    redirectTo: "getit",
    pathMatch: "full",
  },
  {
    path: 'getit',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
