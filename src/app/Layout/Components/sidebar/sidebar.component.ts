import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../theme-options';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import{AuthService} from '../../../auth.service';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public extraParameter: any;
  array:any;
  Arraylength:string=''

  postingData={
  
    username:localStorage.getItem('username')
 }
 file:string=''
 name:string=''
 id:string=''

  constructor(public globals: ThemeOptions, private activatedRoute: ActivatedRoute,private _httpclient:HttpClient,private auth:AuthService ,private _router:Router) {

  }

  @select('config') public config$: Observable<any>;

  private newInnerWidth: number;
  private innerWidth: number;
  activeId = 'dashboardsMenu';

  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
  }

  sidebarHover() {
    this.globals.sidebarHover = !this.globals.sidebarHover;
  }

  ngOnInit() {
    const payload = new FormData();
    payload.append('requestto',localStorage.getItem('username'));

    console.log(localStorage.getItem('username')+"is")
    this.name=localStorage.getItem('username');
    console.log(this.name);
    this.file=localStorage.getItem('file1');
    console.log(this.file)

    this.auth.friendrequest(payload).subscribe(res=>{
      console.log(res)

      this.array=res;
      this.Arraylength=this.array.data.length
      console.log(this.array.length+"length is")


    })


     this.auth.getdetails(this.postingData).subscribe(res=>
     {
      console.log(res[0].file);
      this.file=res[0].file;
      this.name=res[0].firstname;
      this.id=res[0].id;
      //console.log(this.id);
      localStorage.setItem('id',this.id);
      localStorage.setItem('file',this.file);

     })
    setTimeout(() => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1200) {
        this.globals.toggleSidebar = true;
      }
    });

    this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }

  }
}
