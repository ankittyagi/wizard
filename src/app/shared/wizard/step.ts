import { Type } from '@angular/core';

export class Step {
  constructor(
    public sequence: number,
    public title: string,
    public nextButtonText: string,
    public editButtonText: string,
    public component: Type<any>) {}
}
