import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';
//import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

//import { RegisterPageRoutingModule } from './register-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    //ExploreContainerComponentModule,
   // RegisterPageRoutingModule
    

  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
