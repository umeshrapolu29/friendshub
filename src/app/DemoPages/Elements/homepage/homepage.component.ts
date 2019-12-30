import { Component, OnInit,AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Button } from 'selenium-webdriver';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit,AfterViewInit {
  @ViewChild('id1') p1:ElementRef;
 array:any;
 array1:any;
 array2:any;
 array3:any;
 image:string=''
 count:any=0;
 likescount:any;
 value:string=''
 postid:string='';
 addfriend={
    id:localStorage.getItem('id')
 }

  constructor(private _httpclient:HttpClient,private auth:AuthService) { }

  ngOnInit() {
    
    this._httpclient.get('http://localhost:3001/user/getpostdata').subscribe(
      res=>{
        console.log(res);
        this.array=res;
        this.array3=this.array.data;
        
        console.log(this.array3);
    
  
        //this.image=this.array[0].postimg
         
      }
    )
    
    this._httpclient.get('http://localhost:3001/user/usernames').subscribe(
      res=>{
        console.log(res);
        this.array1=res;
        console.log("hello get profiles")
        this.array2=this.array1.data
        // console.log(this.array2)
        // console.log(this.array1.data[10].file);
        // this.image=this.array1[0].postimg
       
        
       
        console.log(this.postid +"postid is");
      }
    )

  }
  ngAfterViewInit(){
    console.log(this.p1.nativeElement );
    this.p1.nativeElement.style.color='red';
  }
  data={
    likes:localStorage.getItem('likes'), 
    
  }

  displaycount(selected:any){
    console.log("Selected item Id: ", selected.username);
    console.log("Selected item Id: ", selected.likes);
    console.log("Selected item Id: ", selected.postid);
    localStorage.setItem('likes',  selected.username);
    console.log(localStorage.getItem('likes'));
    

  

    if(this.count<=0)
    {
     this.count=this.count+1;
     console.log(this.count);
    }
    else{
      console.log("stop");
    }
  
    this.count=this.count+parseInt(selected.likes);
    console.log(this.count);
    const payload = new FormData();

    payload.append('username',localStorage.getItem('likes'));
    payload.append('likes',this.count);
    payload.append('id',selected._id);
    console.log(selected._id+"id is")
     this.auth.postlikes(payload).subscribe(res=>{
        console.log(res)
        window.location.reload();




     })
  

     
   
   }
   request( selected:any){
    const payload = new FormData();
   
    this.p1.nativeElement.innerHTML = "Requested";
    this.p1.nativeElement.style.background="green";
    this.p1.nativeElement.value=this.value;
    console.log(this.value+"value is");
 

   

    payload.append('requestfrom',localStorage.getItem('username'));
    //payload.append('requestfromname',localStorage.getItem('username'));
    payload.append('file',localStorage.getItem('file1'));
    //console.log(localStorage.getItem('file'))

    payload.append("requestto", selected.username);
    payload.append("requesttofile", selected.file);
    console.log(selected.username)
    console.log(selected.file+"file is")

    console.log(localStorage.getItem('username'))
     
  
      console.log(this.addfriend);
    this.auth.addfriend(payload).subscribe(res=>{
      console.log(res);
    }

    )


   }
   

}
