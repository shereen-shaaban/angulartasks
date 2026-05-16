import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styles: ``,
})
export class Students implements OnChanges {
@Input() onestudent:Istudent={name:'',age:''};
allstudents:Istudent[]=[];

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
  if(!changes['onestudent'].firstChange)
 
    this.allstudents.push(this.onestudent);
  }
}





