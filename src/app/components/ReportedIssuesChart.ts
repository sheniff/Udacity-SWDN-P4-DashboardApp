import * as Highcharts from 'highcharts';
import { ITimeData, generateRandomTimeline } from '../services/payloads';

class ReportedIssuesChartController {
  private chartConfig = {
    chart: { type: 'bar', height: 300 },
    title: { text: null },
    xAxis: {
      type: 'datetime',
      title: { text: null }
    },
    yAxis: {
      min: 0,
      title: { text: 'Reported issues', align: 'high' },
      labels: { overflow: 'justify' }
    },
    plotOptions: {
      bar: {
        dataLabels: { enabled: true }
      }
    },
    credits: { enabled: false }
  };

  /** ngInject */
  constructor(
    public $element: angular.IRootElementService
  ) {}

  $onInit() {
    // get data...
    let data = generateRandomTimeline(7).map(function(i: ITimeData){
      return [i.date, i.value];
    });
    // ... and print chart
    this.printChart(data);
  }

  private printChart(pairs: Array<Array<number>>) {
    Highcharts.chart(
      this.$element.find('div')[2],
      Object.assign(
        { series: [{
          name: 'Reported issues',
          data: pairs
        }] },
        this.chartConfig
      )
    );
  }
}

export const ReportedIssuesChart: angular.IComponentOptions = {
  template: require('./ReportedIssuesChart.html'),
  controller: ReportedIssuesChartController
};
