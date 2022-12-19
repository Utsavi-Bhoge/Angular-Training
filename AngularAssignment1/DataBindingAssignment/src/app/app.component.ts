import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name1:string="Utsavi";
  title="DataBindingAssignment";
 
  isDisable:boolean=false;

  constructor()
  {
    
  }
  
  ngOnChanges()  
  {

    console.log('ngonchanges ');

  }

  ngOnInit(): void { 
    console.log('ngonchanges data is');

  }

  ngDoCheck()

  {

    if(this.name1!='')
    {  
  
      this.isDisable=true;
    }
    else
    {
      this.isDisable=false;
    }

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
CheckString()
{
    
    this.name1='';
 
}
}
