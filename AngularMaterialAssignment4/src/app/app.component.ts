import { Component } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

import { MatDialog } from '@angular/material/dialog';




@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {



  title = 'angularmaterialassignment';

  constructor(public dialog: MatDialog) {}

  openDialog() {



    this.dialog.open(CeoMessage,{



      width: '250px',



      height:'250px'



    });

  }



  openDialog1(){

    this.dialog.open(ContactDetails,{



      width: '250px',



      height:'250px'



    });

  }



}



@Component({



  selector: 'CeoMessage',



  templateUrl: 'ceomessage.html',


})



export class CeoMessage {}




@Component({



  selector: 'ContactDetails',



  templateUrl: 'contactdetails.html',

})



export class ContactDetails {}