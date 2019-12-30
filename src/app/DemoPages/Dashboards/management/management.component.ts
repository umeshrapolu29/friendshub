import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import{AuthService} from '../../../auth.service';
import { HttpClient } from '@angular/common/http';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
import { Dialogbox1Component } from '../../Elements/dialogbox1/dialogbox1.component';
import { Dialogbox3Component } from '../../Elements/dialogbox3/dialogbox3.component';
import{NgForm} from '@angular/forms'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  registerData={

  }
  arrayData: any = []
  message:string=''
  msg:string='Success'
  constructor( private auth:AuthService,private _httpclient:HttpClient,public dialog: MatDialog) { }

  ngOnInit() {
  }
  addPost(form: NgForm){
    console.log("form")
    
   
    form.reset(); 
}
 



  registeruser(){
    console.log(this.registerData);
    this.auth.register(this.registerData)
    .subscribe(
      res => {
        console.log('res===> ', res);
        
        this.arrayData = res;
        console.log('response===> ', this.arrayData);
        this.message=this.arrayData.msg
          
        console.log(this.message);
        console.log(this.msg);

        if(this.message==this.msg)
        {
         
          Swal.fire('','Registration Successful','success')
         
        
            // dialogRef.afterClosed().subscribe(result => {
            //   console.log('The dialog was closed');
             
            // });
          }
        
        else{
          // const dialogRef = this.dialog.open(Dialogbox3Component, {
          //   width: '250px',
       
          // });
      
          // dialogRef.afterClosed().subscribe(result => {
          //   console.log('The dialog was closed');
           
          // });
          Swal.fire('',' User already registered with portal','error')
         
        }

        
      }     
    )
  }

}
