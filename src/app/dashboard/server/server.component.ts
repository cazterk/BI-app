import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Server } from "../../shared/server";
import { ServerMessage } from "../../shared/server.message";
import { from } from "rxjs";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  constructor() {}

  color: string;
  buttunText: string;
  serverStatus: string;
  isLoading: boolean;

  @Input() serverInput: Server;
  @Output() serverAction = new EventEmitter<ServerMessage>();

  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline: boolean) {
    if (isOnline) {
      this.serverInput.isOnline = true;
      this.serverStatus = "Online";
      this.color = "#66BB6A";
      this.buttunText = "Shut Down";
    } else {
      this.serverInput.isOnline = false;
      this.serverStatus = "Offline";
      this.color = "#FF6B6B";
      this.buttunText = "Start";
    }
  }
  makeLoading() {
    this.color = "#FFCA28";
    this.buttunText = "Pending...";
    this.isLoading = true;
    this.serverStatus = "Loading";
  }

  sendServerAction(isOnline: boolean) {
    console.log("sendServerAction!");
    this.makeLoading();
    const payload = this.buildPayload(isOnline);
    this.serverAction.emit(payload);
  }

  buildPayload(isOnline: boolean): ServerMessage {
    if (isOnline) {
      return {
        id: this.serverInput.id,
        payload: "deactivate"
      };
    } else {
      return {
        id: this.serverInput.id,
        payload: "activate"
      };
    }
  }
}
