import { Component, Output,EventEmitter } from '@angular/core';
import {  CommonModule} from '@angular/common'
import { isNgTemplate } from '@angular/compiler';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
@Component({
  selector: 'app-registretion',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './registretion.html',
  styles: ``,
})
export class Registretion {
 myform=new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    age:new FormControl(null,[Validators.min(1),Validators.max(20)])
})

@Output() anyevent = new EventEmitter()
get minage()
{
  return this.myform.controls.age.errors?.['min']
}
get maxage()
{
  return this.myform.controls.age.errors?.['max']
}
get nameexist()
{
  return this .myform.controls.name.errors?.['required']&& this.myform.controls.name.value !==null
}
get nameminlength()
{
  return this.myform.controls.name.errors?.['minlength']?.requiredLength&& this.myform.controls.name.value!==null 
 
}
get namemaxlength()
{
  return this.myform.controls.name.errors?.['maxlength'].requiredLength&& this.myform.controls.name.value!==null
 
}

addstudents2()
{
  if(this.myform.valid)
{
this.anyevent.emit(this.myform.value)
console.log(this.myform.controls.name.errors?.['required'])
console.log(this.myform.controls.name.errors?.['minlength'])
this.myform.reset()
}
}

}
