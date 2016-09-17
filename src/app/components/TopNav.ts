class TopNavController {}

export const TopNav: angular.IComponentOptions = {
  template: require('./TopNav.html'),
  controller: TopNavController,
  bindings: {
    onToggleClick: '&'
  }
};
