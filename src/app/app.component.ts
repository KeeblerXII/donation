import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'donation';
  windowRef = null;

  ngOnInit(){}

  openForm(){
    this.windowRef= window.open("/login","child", "toolbar=no,location=no,directories=no,status=no,menubar=no,titlebar=no,fullscreen=no,scrollbars=1,resizable=no,width=430,height=220,left=500,top=100");

    this.windowRef.addEventListener("message",this.receivemessage.bind(this), false);
  }
  
  receivemessage(evt:any){
  console.log(evt.data)
  }
}
