class CountdownBarController {
  public current: number;
  public currentPerc: number;
  public onTick;
  private COUNTDOWN_MAX = 15;
  private timer: angular.IPromise<any>;

  constructor(public $timeout: angular.ITimeoutService) {
    this.current = 0;
    this.countdown();
  }

  $onDestroy() {
    console.log('destroying timer...');
    this.$timeout.cancel(this.timer);
  }

  countdown() {
    if (this.current >= this.COUNTDOWN_MAX) {
      this.onTick();
      this.current = 0;
    } else {
      this.current++;
    }

    this.currentPerc = this.current / this.COUNTDOWN_MAX * 100;
    this.timer = this.$timeout(() => this.countdown(), 1000);
  }
}

export const CountdownBar: angular.IComponentOptions = {
  template: require('./CountdownBar.html'),
  controller: CountdownBarController,
  bindings: {
    onTick: '&'
  }
};
