import { Component, OnInit } from '@angular/core';
import { UIChart } from "primeng/primeng";

// Default colors grabbed out of google charts 
const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
  '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
  '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
  '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// For displaying statistics board
  hoursByProject = [
    { id: 1, name: 'Payroll App', hoursSpent: 8 },
    { id: 2, name: 'Agile Times App', hoursSpent: 16 },
    { id: 3, name: 'Point of Sale App', hoursSpent: 24 },
  ]

// using map operator to get the pie data series 
  pieLabels = this.hoursByProject.map((proj) => proj.name);
// using map operator to get the pie data series 
  pieData = this.hoursByProject.map((proj) => proj.hoursSpent);
// using the configure default colors- assigning colors to the chart 
  pieColors = this.configureDefaultColours(this.pieData);

  // For loading pie chart - data type needs to be in array
/*   hoursByProjectChartData = {
    labels: ['PayrollApp', 'Agile App', 'Point of Sales App'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
      }
    ]
  }
 */
// For loading pie chart - using map operator dynamic method 

  hoursByProjectChartData = {
    labels: this.pieLabels,
    datasets: [
      {
        data: this.pieData,
        backgroundColor: this.pieColors
      }
    ]
  }
  private configureDefaultColours(data: number[]): string[] {
    let customColours = []
    if (data.length) {

      customColours = data.map((element, idx) => {
        return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
      });
    }

    return customColours;
  }

}
