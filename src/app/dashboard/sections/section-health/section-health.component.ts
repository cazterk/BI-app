import { Component, OnInit, OnDestroy } from "@angular/core";
"@angular/core";
import { Observable } from "rxjs/RX";
import { ServerService } from "src/app/services/server.service";
import { Server } from "../../../shared/server";
import { AnonymousSubscription } from "rxjs/Subscription";
import { ServerMessage } from "src/app/shared/server.message";

// const SAMPLE_SERVERS = [
//   { id: 1, name: "dev-web", isOnline: true },
//   { id: 2, name: "dev-mail", isOnline: false },
//   { id: 3, name: "prod-web", isOnline: true },
//   { id: 4, name: "prod-mail", isOnline: true },
//   { id: 1, name: "sales-serv", isOnline: true },
//   { id: 2, name: "sales-mail", isOnline: false },
//   { id: 3, name: "main-web", isOnline: true },
//   { id: 4, name: "main-mail", isOnline: true }
// ];

@Component({
  selector: "app-section-health",
  templateUrl: "./section-health.component.html",
  styleUrls: ["./section-health.component.css"]
})
export class SectionHealthComponent implements OnInit, OnDestroy {
  constructor(private _serverService: ServerService) {}

  servers: Server[];
  timerSubscription: AnonymousSubscription;

  ngOnInit() {
    this.refreshdata();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  refreshdata() {
    this._serverService.getServers().subscribe(res => {
      this.servers = res;
    });
    this.subscribeToData();
  }

  subscribeToData() {
    this.timerSubscription = Observable.timer(5000)
      .first()
      .subscribe(() => this.refreshdata());
  }

  sendMessage(msg: ServerMessage) {
    this._serverService.handleServerMessage(msg).subscribe(
      res => console.log("message sent to server:", msg),
      err => console.log("error!:", err)
    );
  }
}
