import { Component } from '@angular/core';
import {form} from './form';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
  email: any;
  subscriptions:any;
  password:any;
  array1:form[]=[];
 
  
  submit(login: { email: string; subscriptions: string; password: string; }){
   let obj=new form();
   obj.email= login.email;
   obj.subscriptions= login.subscriptions;
   obj.password= login.password;
    this.array1.push(obj)
  }
  
}
