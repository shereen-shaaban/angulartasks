import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Form } from '../form/form';
@Component({
  selector: 'app-home',
  imports: [Navbar,Footer,Form],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
arrofposts:{title:string;post:string}[] = [];
eventfire(e:any){
  this.arrofposts.push(e)
  
}
}
