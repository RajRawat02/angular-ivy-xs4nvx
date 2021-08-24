import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PolicyService } from './../services/policy.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  constructor(private policy: PolicyService) {}

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartLabels: Label[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];
  regions = [
    {
      id: 1,
      name: 'North'
    },
    {
      id: 2,
      name: 'South'
    },
    {
      id: 3,
      name: 'East'
    },
    {
      id: 4,
      name: 'West'
    }
  ];

  onChange(type, value) {
    console.log('changes,', type, value);
    this.getChartData(value);
  }

  ngOnInit() {
    this.getChartData(0);
  }

  setChartData(data) {
    //data= [65, 59, 80, 81, 56, 55, 40]
    this.barChartData = [{ data: data, label: 'Policies' }];
  }

  getChartData(regionid) {
    this.policy.getAllPolicieswithRegion(regionid).subscribe((data: any) => {
      if (data.data !== null) this.setChartData(data.data);
    });
  }
}
