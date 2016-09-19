const FIELDS = ['submissionDate', 'customerName', 'customerEmail',
'description', 'openClosed', 'closedDate', 'employeeName'];

class DataController {
  public data: Array<{}> = [];

  /** @ngInject */
  constructor(public dataService: any) {}

  $onInit() {
    this.dataService.getDataCsv()
      .then(raw => this.data = this.parseData(raw));
  }

  parseData(raw: string): Array<{}> {
    return raw.split('\n').map(function(row: string){
      return row.split(',').reduce(function(res: {}, cell: string, index: number){
        res[FIELDS[index]] = cell;
        return res;
      }, {});
    });
  }
}

export const Data: angular.IComponentOptions = {
  template: require('./Data.html'),
  controller: DataController
};
