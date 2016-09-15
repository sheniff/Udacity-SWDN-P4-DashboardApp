class MetricsController implements angular.IComponentController {
  public customersOverTime: Array<{}>;

  // TODO: move this to every component so that they fetch their
  // own data
  $onInit() {
    this.getCustomersOverTime();
  }

  getCustomersOverTime() {
    // this.customersOverTime = generateRandomTimeline(30);
  }
}

export const Metrics: angular.IComponentOptions = {
  template: require('./Metrics.html'),
  controller: MetricsController
};
