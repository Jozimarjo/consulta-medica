import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() msg;
  @Input() error;
  @Output() public toggleMsg= new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

}
