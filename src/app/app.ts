import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Allinone } from '../component/allinone/allinone';  
import {Home} from '../component/posted/home/home'  ;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Allinone,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task2');
}
