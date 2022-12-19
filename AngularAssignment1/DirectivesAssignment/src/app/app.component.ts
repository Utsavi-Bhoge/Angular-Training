import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DirectivesAssignment';
  StringName:string='Utsavi Bhoge';
  isDirective=false;
  logArray:number[]=[];
  count:number=0;
 

  constructor()
  {

  }

  ngOnChanges()  

  {

   
  }

  ngOnInit(): void { //Initialize the directive or component after displays the data bound properties

    

  }

  ngDoCheck()

  {

    console.log('ngDocheck');
    
  }

  

  ngAfterContentInit()

  {

    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked() 
  {

    console.log('ngAfterContentchecked');

  }

  ngAfterViewinit()

  {

    console.log('ngAfterViewInit');

  }

  ngAfterViewChecked() 
  {

    console.log('ngAfterViewChecked');

  }

  ngOnDestroy() 

  {

    console.log('ngondestroy');

  }
   
  OnClick()
  {
    
    this.isDirective=!this.isDirective;
    this.count++;
    this.logArray.push(this.count);
    
  }
  
  getColor(i:number)

  {

    if(i>=5)

    return "blue";

    else

    return "white";

  }
}
