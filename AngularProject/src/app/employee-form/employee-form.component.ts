import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Employee } from './employee';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  formValue!: FormGroup; 

  employeeobj: Employee = new Employee;

  allemployee: any;

  btnUpdateShow:boolean = false;

  btnSaveShow:boolean = true;


  constructor(private formBuilder:FormBuilder, private api:ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[''],
      mob:[''],
      addr:[''],
      
    })
    this.AllEmployee();
  }

  AddEmployee(){
    
    this.employeeobj.name = this.formValue.value.name;
    this.employeeobj.addr = this.formValue.value.addr;
    this.employeeobj.mob = this.formValue.value.mob;

    this.api.postEmployee(this.employeeobj).subscribe({
      next: (v) => {console.log(v)},
    error: (e) => {
      alert("Error")
      console.log(e)},
    complete: () => {
      console.log('complete')
      alert("Data Saved")
      this.AllEmployee();
      this.formValue.reset();
    } })

  }

  AllEmployee(){
    this.api.getEmployee().subscribe(res => {
      this.allemployee = res;
    })
  }

  EditEmployee(data:any){
    this.formValue.controls['name'].setValue(data.name);
   
    this.formValue.controls['addr'].setValue(data.addr);
    this.formValue.controls['mob'].setValue(data.mob);
    this.employeeobj.id = data.id;
    this.UpdateShowBtn();
  }
  ClearEmployee(){
    this.formValue.controls['name'].setValue("");
   
    this.formValue.controls['addr'].setValue("");
    this.formValue.controls['mob'].setValue("");
    
    this.UpdateShowBtn();
  }

  UpdateEmployee(){
    
    this.employeeobj.name = this.formValue.value.name;
    this.employeeobj.addr = this.formValue.value.addr;
    this.employeeobj.mob = this.formValue.value.mob;
    this.api.putEmployee(this.employeeobj,this.employeeobj.id).subscribe(res => {
      alert("Data Updated");
      this.AllEmployee();
      this.SaveShowBtn();
    })


  }


  DeleteEmployee(data:any){
    this.api.deleteEmployee(data.id).subscribe(res => {
      alert("Record Deleted");
      this.AllEmployee();
    })

  }

  UpdateShowBtn()
  {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }
  SaveShowBtn()
  {
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }



}
