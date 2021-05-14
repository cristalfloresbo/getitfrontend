import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchByEmailPage } from './search-by-email.page';

const routes: Routes = [
  {
    path: '',
    component: SearchByEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchByEmailPageRoutingModule {}
