class DashboardController {
  /** ngInject */
  constructor(public $rootScope: any) {}

  toggleSidebar() {
    this.$rootScope.sidebarVisible = !this.$rootScope.sidebarVisible;
  }
}

export const Dashboard: angular.IComponentOptions = {
  template: require('./Dashboard.html'),
  controller: DashboardController
};
