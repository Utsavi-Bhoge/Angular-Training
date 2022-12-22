import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsAssignment2';
  projectname:string="";
  email:string="";
  projectstatus:string="";


  submit(login: { projectname: string; email: string; projectstatus: string; }){
    console.log(login.projectname);
    console.log(login.email);
    console.log(login.projectstatus);
   
   }
}
