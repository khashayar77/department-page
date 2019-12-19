import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { DashboardService } from '../services/dashboard.service';
import { ICallingStatics } from '../interfaces/dashboard.interface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loaded = false;
  statics: ICallingStatics;
  barChartOptions = {
    maintainAspectRatio: false,
    responsive: true
  };

  barChartLabels = [];
  barChartType = 'bar';
  barChartLegend = true;

  barChartData = [];

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.call_statics().subscribe(statics => {
      this.statics = statics;
      // statics.TodayNumberOfCalls.push({ FaildCalledCount: "300", SuccessfullCall: "250", departmentName: "test" })
      // statics.YesterdayNumberOfCalls.push({ FaildCalledCount: "600", SuccessfullCall: "100", departmentName: "test" })
      this.barChartLabels = statics.TodayNumberOfCalls.map(i => i.departmentName);
      this.barChartData[0] = { data: statics.TodayNumberOfCalls.map(i => i.FaildCalledCount), label: 'تماس ناموفق امروز' };
      this.barChartData[1] = { data: statics.TodayNumberOfCalls.map(i => i.SuccessfullCall), label: 'تماس موفق امروز' };
      this.barChartData[2] = { data: statics.YesterdayNumberOfCalls.map(i => i.FaildCalledCount), label: 'تماس ناموفق دیروز' };
      this.barChartData[3] = { data: statics.YesterdayNumberOfCalls.map(i => i.SuccessfullCall), label: 'تماس موفق دیروز' };
      this.loaded = true;
    });
  }

  ngOnInit() { }
}
