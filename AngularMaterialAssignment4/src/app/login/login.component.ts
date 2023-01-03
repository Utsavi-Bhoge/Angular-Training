import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  flag=0;
  loginFormGroup!:FormGroup;
  registeredUsers:any=[];
  ngOnInit(): void {this.loginFormGroup = this.formBuilder.group({
    email:['', [ Validators.required, Validators.email]],
    password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]]
    
  })}
  
  
 constructor(private registerService:ServiceService,private formBuilder:FormBuilder,private router:Router){}
  loginUser()
  {
    this.registerService.getLoginData().subscribe({
      next:(response)=>{
        console.log(response);
        this.registeredUsers=response;
        // if(this.loginFormGroup.valid)
        // {
          this.registeredUsers.forEach((student:any) => {
            if(this.loginFormGroup.value.email==student.email && this.loginFormGroup.value.password==student.password)
            {
              this.flag=1;
              alert("login Success");
              this.router.navigateByUrl("/Home");
            }
          });
          if(this.flag==0)
          {
            alert("Login Failed");
          }
        //}
      },
      error:()=>{
        console.log("login Failed");
      }
    })
  }
}
