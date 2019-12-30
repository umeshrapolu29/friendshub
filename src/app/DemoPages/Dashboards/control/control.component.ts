import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import{AuthService} from '../../../auth.service';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})

export class ControlComponent implements OnInit {
  name:string;
 name1:string;
 id:string;
 deptid:string;
 arrayData: any = []
 arrayData1: any = []
 array1Data: any [] = []
 
  constructor(private _httpclient:HttpClient,private auth:AuthService)  {
  
   }
   onselected(val:any)
   {
     this.name=val;
     localStorage.setItem('value', val);
     console.log(this.name);
     let param=new HttpParams().set('dept',this.name)
      this._httpclient.get('http://localhost:4000/access/getqueues',{params:param})
      .subscribe(
        (res)=>{
         this.arrayData = res;
 
         console.log('===> ', this.arrayData.data);
         this.array1Data = this.arrayData.data;
         //console.log(JSON.stringify(this.arrayData.data))
         
          console.log(this.arrayData);
         //  console.log(this.arrayData.msg);
         //  console.log(this.arrayData.data[0].id);
     
        })
     
   }
   onselected1(val:any)

  {
    console.log("event");
    this.name1=val;
  
    console.log(this.name1);
    let param1=new HttpParams().set('dept',this.name1)
     this._httpclient.get('http://localhost:4000/access/deletepending',{params:param1})
     .subscribe(
       (res)=>{
        this.arrayData1 = res;
        console.log(this.arrayData1)

       
    
       })
    
  }

 data= { conditions:{
    department:localStorage.getItem('value'),
    queueId:localStorage.getItem('queueId'),  
   },
   updateFields:{
     running:1
   }
  }

   ngOnInit() {}
 
 
  selectedButton = {}


 
  onSelect(selectedItem: any) {

    console.log("Selected item Id: ", selectedItem.id); // You get the Id of the selected item here
    this.selectedButton[selectedItem.id]= !this.selectedButton[selectedItem.id];
    localStorage.setItem('queueId',  selectedItem.id);
    console.log(this.deptid)
    console.log(selectedItem.id)
    //console.log(this.data)
    this.auth.Accesscontrol(this.data)
    .subscribe(
      res => {
        console.log(this.data);
        console.log(res);
        
        console.log("control is");
      })
  
  
  
   
     
    
  
  }

    // let btn = document.getElementById("toggleBtn");
    //   btn.addEventListener("click",function(event){		 
    //   event.preventDefault();
    //    if(event.target.parentElement.nodeName == "BUTTON"){
    //   if(play){
    //   event.target.parentElement.innerHTML = "<i class='fas fa-pause text-success'>";
    //   play = !play;
    //   }
    //   else{
    //     event.target.parentElement.innerHTML = "<i class='fas fa-play text-danger'>";
    //     play = !play;
    //   }
    //   }		 		 
    // })
  }
    

