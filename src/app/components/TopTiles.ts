class TopTilesController {
  public issues: {};

  /** @ngInject */
  constructor(public dataService: any) {}

  $onInit() {
    this.getData();
  }

  getData() {
    this.dataService.getOverview()
      .then(issues => this.issues = issues);
  }
}

export const TopTiles: angular.IComponentOptions = {
  template: require('./TopTiles.html'),
  controller: TopTilesController
};
