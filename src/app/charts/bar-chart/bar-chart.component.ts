import { Component, OnInit } from "@angular/core";
import { SalesDataService } from "src/app/services/sales-data.service";
import * as moment from "moment";

// const SAMPLE_BARCHART_DATA: any[] = [
//   { data: [23, 34, 44, 56, 78, 90,13], label: 'Q1 Sales' },
//   { data: [50, 71, 66, 56, 34, 95,45], label: 'Q2 Sales' },

// ];

// const SAMPLE_BARCHART_LEBELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  constructor(private _salesDataService: SalesDataService) {}

  orders: any;
  orderLabels: string[];
  orderData: number;

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
    this._salesDataService.getOrders(1, 100).subscribe(res => {
      // console.log(res["page"]["data"]);
      const localChartData = this.getChartData(res);
      console.log(localChartData.map(x => x[1]));
      this.barChartLabels = localChartData.map(x => x[0]).reverse();
      this.barChartData = [
        { data: localChartData.map(x => x[1]), label: "Sales" }
      ];
    });
  }

  getChartData(res: Response) {
    this.orders = res["page"]["data"];
    const data = this.orders.map(o => o.total);

    const formattedOrders = this.orders.reduce((r, e) => {
      r.push([moment(e.placed).format("DD-MM-YY"), e.total]);
      return r;
    }, []);

    const p = [];
    // console.log("formattedOrders:", formattedOrders);

    const chartData = formattedOrders.reduce((r, e) => {
      const key = e[0];
      if (!p[key]) {
        p[key] = e;
        r.push(p[key]);
      } else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    // const myData = [3, 4, 5].reduce((sum, value) => {
    //   console.log("sum:", sum, "value:", value);
    //   return sum + value;
    // }, 0);
    // console.log("myData:", myData);
    // console.log(formattedOrders);
    return chartData;
  }
}
