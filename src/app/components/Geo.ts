declare var window: any;
import { mapData } from '../services/payloads';

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
      data: mapData,
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

  $onInit() {
    this.printChart();
  }

  private printChart() {
    this.chartConfig.series[0].mapData = window.Highcharts.maps['custom/world'];
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
