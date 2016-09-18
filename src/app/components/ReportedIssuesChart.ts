declare var window: any;

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
  constructor(public dataService) {}

  $onInit() {
    this.getData();
  }

  getData() {
    this.dataService.getReportedIssues()
      .then(data => this.printChart(data));
  }

  private printChart(pairs: Array<Array<number>>) {
    window.Highcharts.chart(
      document.querySelector('#reportedIssuesChart'),
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
