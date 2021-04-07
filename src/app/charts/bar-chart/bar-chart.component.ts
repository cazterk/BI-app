import { Component, OnInit } from '@angular/core';
const SAMPLE_BARCHART_DATA: any[] = [
  { data: [23, 34, 44, 56, 78, 90,13], label: 'Q1 Sales' },
  { data: [50, 71, 66, 56, 34, 95,45], label: 'Q2 Sales' },

];

const SAMPLE_BARCHART_LEBELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] =SAMPLE_BARCHART_LEBELS;
  public barChartType= 'bar';
  public barChartLegend=true;
  public barChartOptions: any= {scaleShowVerticalLines:false,
  responsive:true
};

  ngOnInit(): void {
  }

}
