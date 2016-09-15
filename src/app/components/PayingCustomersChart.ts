import * as Highcharts from 'highcharts';
import { ITimeData, generateRandomTimeline } from '../services/payloads';

class PayingCustomersChartController {
  private chartConfig = {
    chart: { type: 'line', height: 300 },
    title: { text: null },
    xAxis: {
      type: 'datetime',
      title: { text: null }
    },
    yAxis: {
      min: 0,
      title: { text: 'Paying customers', align: 'high' },
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
    let data = generateRandomTimeline(30).map(function(i: ITimeData){
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
          name: 'Paying customers',
          data: pairs
        }] },
        this.chartConfig
      )
    );
  }
}

export const PayingCustomersChart: angular.IComponentOptions = {
  template: require('./PayingCustomersChart.html'),
  controller: PayingCustomersChartController
};
