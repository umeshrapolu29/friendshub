import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
 array:any;
 array1:any;
 array2:any;
 array3:any;
  constructor(private _httpclient:HttpClient,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    const payload = new FormData();
    payload.append('requestto',localStorage.getItem('username'));
    console.log(localStorage.getItem('username'))
    this.auth.requestaccepted(payload).subscribe(res=>{
      console.log(res);
      console.log("res is")
      this.array=res;
      this.array1=this.array.data;

    })
    const payload1 = new FormData();
    payload1.append('requestfrom',localStorage.getItem('username'));
    console.log(localStorage.getItem('username'))
    this.auth.requestacceptedfromdata(payload1).subscribe(res=>{
      console.log(res)
      this.array2=res
      this.array3=this.array2.data;
    })
  }
  viewdetails(selected:any){
    console.log("Selected item Id: ",selected.requestfromname);
    localStorage.setItem('frdienddetailsname',selected.requestfrom)
    console.log(selected.requestfrom+"fromdata")
    this.router.navigate(['/elements/friendsdetails']);
  }
  viewdetails1(selected:any){
    console.log("Selected item Id: ",selected.requestfromname);
    localStorage.setItem('frdienddetailsname',selected.requestto)
    console.log(selected.requestto+"todata")
    this.router.navigate(['/elements/friendsdetails']);
  }

}
