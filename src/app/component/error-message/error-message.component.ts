import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  @Input() public error;
  @Output() public toggleError = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
