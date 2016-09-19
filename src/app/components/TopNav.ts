class TopNavController implements angular.IComponentController {
  public sectionName: string;
  private sectionMap: {};

  /** @ngInject */
  constructor(public $location: angular.ILocationService) {
    this.sectionMap = {
      '/geo': 'Geo distribution',
      '/metrics': 'Key metrics',
      '/data': 'Data view'
    };
  }

  $onInit() {
    this.sectionName = this.sectionMap[this.$location.path()];
  }

  $doCheck() {
    this.sectionName = this.sectionMap[this.$location.path()];
  }
}

export const TopNav: angular.IComponentOptions = {
  template: require('./TopNav.html'),
  controller: TopNavController,
  bindings: {
    onToggleClick: '&'
  }
};
