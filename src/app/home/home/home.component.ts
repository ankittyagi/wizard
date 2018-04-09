import { Component, OnInit } from '@angular/core';
import { Step } from '../../shared/wizard/step';
import { StepOneComponent } from './../step-one/step-one.component';
import { StepThreeComponent } from './../step-three/step-three.component';
import { StepTwoComponent } from './../step-two/step-two.component';
import { StepFourComponent } from '../step-four/step-four.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   steps: Step[];
   constructor() {
     this.steps = [
       new Step(1, 'Step One', 'Next', '', StepOneComponent),
       new Step(2, 'Step Two', 'Next', 'Back', StepTwoComponent ),
       new Step(3, 'Step Three', 'Next', 'Back', StepThreeComponent),
       new Step(4, 'Step Four', 'Finish', 'Back', StepFourComponent)
     ];
   }

  ngOnInit() {
  }

}
