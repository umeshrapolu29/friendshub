import { Component, OnInit ,ElementRef ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-dialogbox2',
  templateUrl: './dialogbox2.component.html',
  styleUrls: ['./dialogbox2.component.sass']
})
export class Dialogbox2Component implements OnInit {
  @ViewChild('myId')myId: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.myId.nativeElement.innerHTML);
    
  }

}
