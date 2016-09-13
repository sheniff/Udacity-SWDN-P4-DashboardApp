class SidebarController {
  public curr: string;

  /** @ngInject */
  constructor(public $state: angular.ui.IStateService) {
    this.curr = $state.current.name;
  }

  setCurrentSection(section: string) {
    this.curr = section;
  }
}

export const Sidebar: angular.IComponentOptions = {
  template: require('./Sidebar.html'),
  controller: SidebarController
};
