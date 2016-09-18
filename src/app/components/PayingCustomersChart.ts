declare var window: any;

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
    public $element: angular.IRootElementService,
    public dataService
  ) {}

  $onInit() {
    this.getData();
  }

  getData() {
    this.dataService.getPayingCustomers()
      .then(data => this.printChart(data));
  }

  private printChart(pairs: Array<Array<number>>) {
    window.Highcharts.chart(
      document.querySelector('#payingCustomersChart'),
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
