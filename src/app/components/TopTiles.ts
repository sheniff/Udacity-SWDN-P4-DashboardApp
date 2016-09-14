import { issuesOverview } from '../services/payloads';

class TopTilesController {
  public issues: {};

  /** ngInject */
  // TODO: use http and show loader meanwhile :)
  constructor(
    public $http: angular.IHttpService
  ) {}

  $onInit() {
    this.issues = issuesOverview;
  }
}

export const TopTiles: angular.IComponentOptions = {
  template: require('./TopTiles.html'),
  controller: TopTilesController
};
