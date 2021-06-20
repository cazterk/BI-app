import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { ServerMessage } from "../shared/server.message";
import { Server } from "../shared/server";

@Injectable()
export class ServerService {
  constructor(private _http: HttpClient) {}

  getServers(): Observable<Server[]> {
    return this._http
      .get<Server[]>("http://localhost:5000/api/server")
      .catch(this.handleError);
  }

  handleError(error: any) {
    const errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : "Server error";

    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
