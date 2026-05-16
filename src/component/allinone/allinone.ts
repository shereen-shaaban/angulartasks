import { Component, input } from '@angular/core';
import { Registretion } from '../registretion/registretion';
import { Students } from '../students/students';
// import {  CommonModule} from '@angular/common'
@Component({
  selector: 'app-allinone',
  imports: [Registretion,Students],
  templateUrl: './allinone.html',
  styles: ``,
})
export class Allinone {
onestudent  :Istudent= {name:'',age:''};

eventfire(e:any){
//  this.arrofstudents.push(e)
this.onestudent=e
}
}
