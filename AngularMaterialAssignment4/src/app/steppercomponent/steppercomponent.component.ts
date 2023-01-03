import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-steppercomponent',
  templateUrl: './steppercomponent.component.html',
  styleUrls: ['./steppercomponent.component.css']
})
export class SteppercomponentComponent {
  firstFormGroup!:FormGroup
  
  constructor(private formBuilder:FormBuilder, private api:ServiceService ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      fullname:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['', [ Validators.required, Validators.email]],
      fathername:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      mothername:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      gender:['', [Validators.required]],
      dateofbirth:[''],
      mobile:['',[Validators.required,Validators.pattern("@^[0-9]{10}$")]],
      bankaccountnumber:['',[Validators.required,,Validators.pattern("@^[0-9]{10}$")]],  
    bankname:['',[Validators.required]],
    ifsccode:['',[Validators.required]],
    internetbanking:[''],
    mobilebanking:[''],
    presentaddress:[''],
    permanentaddress:[''],
    
    })
    
  }
   OnSubmit(){
    this.api.stepperData(this.firstFormGroup.value).subscribe();
   }
}
