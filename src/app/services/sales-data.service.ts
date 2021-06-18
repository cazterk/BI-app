import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class SalesDataService {
  constructor(private _http: HttpClient) {}

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get(
      "http://localhost:5000/api/order/" + pageIndex + "/" + pageSize
    );
    // .pipe(map(res => res));
  }
}
