import { Component, Output,EventEmitter } from '@angular/core';
import {  CommonModule} from '@angular/common'
import { isNgTemplate } from '@angular/compiler';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-registretion',
  imports: [FormsModule,CommonModule],
  templateUrl: './registretion.html',
  styles: ``,
})
export class Registretion {

  // stdName:string = "";
  // stdAge:string = "";
//   get AgeNotValid(){
//     return +this.refAge > 25 || this.stdAge == '0' || +this.stdAge < 0 || Number.isNaN(+this.stdAge)
//   }
// get NameNotValid(){
//   return this.stdName.length <3&& this .stdName!=""
// }
  @Output() anyevent = new EventEmitter()


//   addstudents()
//   {
//    if(!this.AgeNotValid && !this.NameNotValid){
//       let stdObj = {name:this.stdName, age:this.stdAge}
//       this.anyevent.emit(stdObj)
//       this.stdName = ''
//       this.stdAge = ''
//     }

// }

addstudents2(name:string,age:string)
{
  //  if(!this.AgeNotValid && !this.NameNotValid){
      let stdObj = {name:name, age:age}
      this.anyevent.emit(stdObj)
      // console.log(name,age)
     name = ''
     age = ''
    // }


}



}
