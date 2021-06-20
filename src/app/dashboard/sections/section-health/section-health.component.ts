import { Component, OnInit } from "@angular/core";
import { ServerService } from "src/app/services/server.service";
import { Server } from "../../../shared/server";

const SAMPLE_SERVERS = [
  { id: 1, name: "dev-web", isOnline: true },
  { id: 2, name: "dev-mail", isOnline: false },
  { id: 3, name: "prod-web", isOnline: true },
  { id: 4, name: "prod-mail", isOnline: true },
  { id: 1, name: "sales-serv", isOnline: true },
  { id: 2, name: "sales-mail", isOnline: false },
  { id: 3, name: "main-web", isOnline: true },
  { id: 4, name: "main-mail", isOnline: true }
];

@Component({
  selector: "app-section-health",
  templateUrl: "./section-health.component.html",
  styleUrls: ["./section-health.component.css"]
})
export class SectionHealthComponent implements OnInit {
  constructor(private _serverService: ServerService) {}

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
    this._serverService.getServers().subscribe(res => {
      console.log(res);
    });
  }
}
