import { Component,EventEmitter,Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms'
@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.html',
  styles: ``,
})
export class Form {
title:string = "postt title"
post:string = "post content"
@Output() anyevent = new EventEmitter()


addpost(){
if(this.title.length>10 && this.post.length>20){
let postobj = {title:this.title, post:this.post}
this.anyevent.emit(postobj)
this.title = ''
this.post = ''
console.log("add  ")
}}
}
