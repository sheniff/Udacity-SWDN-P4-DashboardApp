import { csvRawData } from '../services/payloads';

const FIELDS = ['submissionDate', 'customerName', 'customerEmail',
'description', 'openClosed', 'closedDate', 'employeeName'];

class DataController {
  public data: Array<{}> = [];

  $onInit() {
    this.data = this.parseData(csvRawData);
  }

  parseData(raw: string): Array<{}> {
    return raw.split('\n').map(function(row){
      return row.split(',').reduce(function(res, cell, index){
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
