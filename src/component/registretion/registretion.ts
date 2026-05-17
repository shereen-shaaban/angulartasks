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
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern('^[A-Za-z].*$')]),
    age:new FormControl(null,[Validators.min(1),Validators.max(20),Validators.pattern('^[0-9]+$')])
})

@Output() anyevent = new EventEmitter()
get namenotexist()
{
  return this .myform.controls.name.errors?.['required']&&this.myform.controls.name.touched
}
get namepattern()
{
  return this.myform.controls.name.errors?.['pattern']?.requiredPattern
}
get nameminlength()
{
  return this.myform.controls.name.errors?.['minlength']?.requiredLength
  
}
get namemaxlength()
{
  return this.myform.controls.name.errors?.['maxlength']?.requiredLength
  
}
get minage()
{
  return this.myform.controls.age.errors?.['min']
}
get maxage()
{
  return this.myform.controls.age.errors?.['max']?.max
}

get agepattern()
{
  return this.myform.controls.age.errors?.['pattern']?.requiredPattern
}
addstudents2()
{
  console.log(this.myform.controls.name.errors?.['pattern']?.requiredPattern)
  if(this.myform.valid)
{
this.anyevent.emit(this.myform.value)
console.log(this.myform.controls.name.value)
this.myform.reset()
}
}

}
