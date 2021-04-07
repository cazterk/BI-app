import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors'

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [35, 56, 33, 27, 78, 60], label: 'Sentiment Analysis' },
  { data: [47, 50, 22, 11, 44, 67], label: 'Image Recognition' },
  { data: [20, 11, 47, 89, 70, 55], label: 'Forecasting' },

];
const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

}
