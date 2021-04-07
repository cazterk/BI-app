import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../shared/server';
import { from } from 'rxjs';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string;
  buttunText: string;

  @Input() serverInput: Server;

  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.color = '#66BB6A';
      this.buttunText = 'Shut Down';
    } else {
      this.serverInput.isOnline = false;
      this.color = '#FF6B6B';
      this.buttunText = 'Start';
    }
  }

  toggleStatus(onLineStatus: boolean) {
    console.log(this.serverInput.name, ':', onLineStatus)
    this.setServerStatus(!onLineStatus)
  }
}
