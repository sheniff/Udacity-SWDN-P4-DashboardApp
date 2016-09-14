import { generateRandomTimeline } from '../services/payloads';

class MetricsController implements angular.IComponentController {
  public customersOverTime: Array<{}>;
  public issuesOverTime: Array<{}>;

  // TODO: move this to every component so that they fetch their
  // own data
  $onInit() {
    this.getCustomersOverTime();
    this.getIssuesOverTime();
  }

  getCustomersOverTime() {
    this.customersOverTime = generateRandomTimeline(30);
  }

  getIssuesOverTime() {
    this.issuesOverTime = generateRandomTimeline(30);
  }
}

export const Metrics: angular.IComponentOptions = {
  template: require('./Metrics.html'),
  controller: MetricsController
};
