import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { Employee } from './employee';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formValue!: FormGroup; 
  sports:string[]=['cricket', 'football','hockey','snooker'];

 

  constructor(private formBuilder:FormBuilder, private api:ServiceService ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fullname:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['', [ Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[a-zA-Z0-9_.-]*$")
    ]],
      gender:['', [Validators.required]],
      dateofbirth:[''],
      mobile:['',[Validators.required,Validators.pattern("@^[0-9]{10}$")]],
      skills:[''],

    })
    
  }
   OnSubmit(){
    this.api.postEmployee(this.formValue.value).subscribe();
   }
  

}
