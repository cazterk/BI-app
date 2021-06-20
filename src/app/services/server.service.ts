import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { ServerMessage } from "../shared/server.message";
import { Server } from "../shared/server";

const headers = new HttpHeaders({
  Accept: "application/json",
  "Content-Type": "application/json"
});
let options = { headers: headers };

@Injectable()
export class ServerService {
  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "q=0.8;application/json;q=0.9"
    });

    options = { headers: headers };
  }

  headers: HttpHeaders;

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

  handleServerMessage(msg: ServerMessage): Observable<Response> {
    const url = "http://localhost:5000/api/server/" + msg.id;
    return this._http.put<Response>(url, msg, options);
  }
}
