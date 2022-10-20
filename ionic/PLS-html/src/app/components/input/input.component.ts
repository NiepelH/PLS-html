import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  
  txtValue: String;
  txtValue2: String;

  // constructor
  constructor() {
    this.txtValue ="Test123";
    this.txtValue2 ="Test000";
  }

  // event-listener
  btnWriteClick(event) {
    console.log("Button 'Write' in component 'input' clicked. Event-Object:");
    console.log(event);
    this.txtValue = this.txtValue2;
    this.txtValue += ".";
    
  }


  // initial-events
  ngOnInit() {}

}
