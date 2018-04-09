import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Step } from './step';
import { StepDirective } from './step.directive';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

   @Input() steps: Step[];
   @Input() activeStep = 1;

   beforeSteps: Step[];
   afterSteps: Step[];
   currentStep: Step;
   isValid: boolean;

   @ViewChild(StepDirective) stepHost: StepDirective;

   constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

   ngOnInit() {
     this.isValid = true;
     this.loadComponent();
     this.updateStepLists();
   }

   loadComponent() {
     this.currentStep = this.steps[this.activeStep - 1];

     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentStep.component);

     const viewContainerRef = this.stepHost.viewContainerRef;
     viewContainerRef.clear();

     const componentRef = viewContainerRef.createComponent(componentFactory);
     if (componentRef.instance && componentRef.instance.hasOwnProperty('isComponentValid')) {
         this.isValid = false;
       componentRef.instance.isComponentValid.subscribe(data => {
         this.isValid = data;
       });
     }
   }

   onNextClick() {
     if (this.activeStep < this.steps.length) {
       this.activeStep++;
       this.loadComponent();
       this.updateStepLists();
     }
   }

   onPrevClick(stepSequence: number) {
      if (!this.isValid ) {
         return false;
      }
     this.activeStep = stepSequence - 1;
     this.loadComponent();
     this.updateStepLists();
   }

   updateStepLists() {
     this.beforeSteps = this.steps.slice(0, this.activeStep - 1);
     this.afterSteps = this.steps.slice(this.activeStep);
   }

   calculateBarValue() {
      return this.currentStep.sequence * (100 / this.steps.length);
   }


}
