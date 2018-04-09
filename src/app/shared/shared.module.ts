import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';
import { StepDirective } from './../shared/wizard/step.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WizardComponent, StepDirective],
  exports: [WizardComponent]
})
export class SharedModule { }
