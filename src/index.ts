/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-ui-router';

import routesConfig from './routes';

import {Dashboard} from './app/containers/Dashboard';
import {Sidebar} from './app/components/Sidebar';
import {TopNav} from './app/components/TopNav';
import {Geo} from './app/components/Geo';
import {Metrics} from './app/components/Metrics';
import {Data} from './app/components/Data';
import {TopTiles} from './app/components/TopTiles';
import {PayingCustomersChart} from './app/components/PayingCustomersChart';
import {ReportedIssuesChart} from './app/components/ReportedIssuesChart';
import {CountdownBar} from './app/components/CountdownBar.ts';
import {DataService} from './app/services/dataService.ts';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('dataService', DataService)
  .component('dashboard', Dashboard)
  .component('sidebarComponent', Sidebar)
  .component('topnavComponent', TopNav)
  .component('geo', Geo)
  .component('metrics', Metrics)
  .component('data', Data)
  .component('topTilesComponent', TopTiles)
  .component('countdownBar', CountdownBar)
  .component('payingCustomersChartComponent', PayingCustomersChart)
  .component('reportedIssuesChartComponent', ReportedIssuesChart);
