import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { PublishOfferAndDemandComponent } from "./components/publish-offer-and-demand/publish-offer-and-demand.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomePage } from "./pages/home/home.page";
import { SearchUserByEmailComponent } from "./components/search-user-by-email/search-user-by-email.component";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
  },
  {
    path: "search-user-by-email",
    component: SearchUserByEmailComponent,
  },
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
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: 'view-profile',
    loadChildren: () => import('./pages/view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
