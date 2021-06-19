import { Component, OnInit } from "@angular/core";
import { SalesDataService } from "src/app/services/sales-data.service";
import { LINE_CHART_COLORS } from "../../shared/chart.colors";

// const LINE_CHART_SAMPLE_DATA: any[] = [
//   { data: [35, 56, 33, 27, 78, 60], label: 'Sentiment Analysis' },
//   { data: [47, 50, 22, 11, 44, 67], label: 'Image Recognition' },
//   { data: [20, 11, 47, 89, 70, 55], label: 'Forecasting' },

// ];
// const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"]
})
export class LineChartComponent implements OnInit {
  constructor(private _salesDataService: SalesDataService) {}

  topCustomers: string[];
  allOrders: any[];

  lineChartData: any;
  lineChartLabels: any;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;
  lineChartType = "line";
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
    this._salesDataService.getOrders(1, 100).subscribe(res => {
      this.allOrders = res["page"]["data"];

      this._salesDataService.getOrdersByCustomer(3).subscribe(cus => {
        this.topCustomers = cus.map(x => x["name"]);

        const allChartData = this.topCustomers.reduce((result, i) => {
          result.push(this.getChartData(this.allOrders, i));
          return result;
        }, []);

        let dates = allChartData
          .map(x => x["data"])
          .reduce((a, i) => {
            a.push(i.map(o => new Date(o[0])));
            return a;
          }, []);
        console.log("dates:", dates);
      });
    });
  }

  getChartData(allOrders: any, name: string) {
    const customerOrders = allOrders.filter(o => o.customer.name === name);
    //console.log("name:", name, "customerOrders:", customerOrders);

    const formattedOrders = customerOrders.reduce((r, e) => {
      r.push([e.placed, e.total]);
      return r;
    }, []);

    // console.log("formattedOrders:", formattedOrders);
    const result = { customer: name, data: formattedOrders };
    return result;
  }
}
