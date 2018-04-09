import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HomeComponent, StepOneComponent, StepTwoComponent, StepThreeComponent, StepFourComponent],
  entryComponents: [StepOneComponent, StepTwoComponent, StepThreeComponent, StepFourComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
