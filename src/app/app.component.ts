import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'data-binding-app';
  buttonCounter:number =0;
  hide:boolean = true;
onButtonClick(){
this.buttonCounter++;
}
onDbClick(){
  console.log("img clicked");
if(this.hide==true){
this.hide=false;
}
else{
  this.hide=true;
}
}
}
