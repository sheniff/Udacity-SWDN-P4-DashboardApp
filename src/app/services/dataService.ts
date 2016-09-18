import { ITimeData } from '../services/payloads';

export class DataService {
  /** ngInject */
  constructor(public $http: angular.IHttpService) {}

  getReportedIssues() {
    return this.$http
      .get(`https://s3-us-west-1.amazonaws.com/swdn4/reportedIssues${Math.floor(Math.random() * 4) + 1}.json`)
      .then(res => (<Array<ITimeData>>res.data).map((i: ITimeData) => [i.date, i.value]));
  }

  getPayingCustomers() {
    return this.$http
      .get(`https://s3-us-west-1.amazonaws.com/swdn4/payingCustomers${Math.floor(Math.random() * 4) + 1}.json`)
      .then(res => (<Array<ITimeData>>res.data).map((i: ITimeData) => [i.date, i.value]));
  }

  getDataCsv() {
    return this.$http
      .get(`https://s3-us-west-1.amazonaws.com/swdn4/data.csv`)
      .then(res => res.data);
  }

  getOverview() {
    return this.$http
      .get(`https://s3-us-west-1.amazonaws.com/swdn4/overview1.json`)
      .then(res => res.data);
  }

  getMapData() {
    return this.$http
      .get(`https://s3-us-west-1.amazonaws.com/swdn4/map.json`)
      .then(res => res.data);
  }
}
