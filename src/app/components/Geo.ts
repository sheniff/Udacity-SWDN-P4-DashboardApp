declare var window: any;

class GeoController {
  private chartConfig = {
    chart: { height: 500 },
    title: { text: '' },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    colorAxis: { min: 0 },
    series: [{
      data: null,
      mapData: null,
      joinBy: 'hc-key',
      name: 'Offices per country',
      states: { hover: { color: '#BADA55' } },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }]
  };

  /** @ngInject */
  constructor(public dataService: any) {}

  $onInit() {
    this.getData();
  }

  getData() {
    this.dataService.getMapData()
      .then(data => this.printChart(data));
  }

  private printChart(data: Array<any>) {
    this.chartConfig.series[0].mapData = window.Highcharts.maps['custom/world'];
    this.chartConfig.series[0].data = data;

    window.Highcharts.Map(
      document.querySelector('#world-map-gdp'),
      this.chartConfig
    );
  }
}

export const Geo: angular.IComponentOptions = {
  template: require('./Geo.html'),
  controller: GeoController
};
