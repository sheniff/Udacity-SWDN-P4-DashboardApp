class CountdownBarController {
  private COUNTDOWN_MAX = 15;
  public current: number;
  public currentPerc: number;
  public onTick;

  constructor(public $timeout: angular.ITimeoutService) {
    this.current = 0;
    this.countdown();
  }

  countdown() {
    if(this.current >= this.COUNTDOWN_MAX) {
      this.onTick();
      this.current = 0;
    } else {
      this.current++;
    }

    this.currentPerc = this.current / this.COUNTDOWN_MAX * 100;
    this.$timeout(() => this.countdown(), 1000);
  }
}

export const CountdownBar: angular.IComponentOptions = {
  template: require('./CountdownBar.html'),
  controller: CountdownBarController,
  bindings: {
    onTick: '&'
  }
};
