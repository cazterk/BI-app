import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class SalesDataService {
  constructor(private _http: HttpClient) {}

  getOrders(pageIndex: number, pageSize: number): Observable<any> {
    return this._http.get(
      "http://localhost:5000/api/order/" + pageIndex + "/" + pageSize
    );
  }

  getOrdersByCustomer(n: number): Observable<any> {
    return this._http.get("http://localhost:5000/api/order/bycustomer/" + n);
  }

  getOrdersByState(): Observable<any> {
    return this._http.get("http://localhost:5000/api/order/bystate/");
  }
}
