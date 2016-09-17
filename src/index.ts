/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import 'gentelella/vendors/bootstrap/dist/css/bootstrap.min.css';
import 'gentelella/vendors/font-awesome/css/font-awesome.min.css';
import 'gentelella/production/css/maps/jquery-jvectormap-2.0.3.css';
import './app/gentelella/css/custom.min.css';

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

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('dashboard', Dashboard)
  .component('sidebarComponent', Sidebar)
  .component('topnavComponent', TopNav)
  .component('geo', Geo)
  .component('metrics', Metrics)
  .component('data', Data)
  .component('topTilesComponent', TopTiles)
  .component('payingCustomersChartComponent', PayingCustomersChart)
  .component('reportedIssuesChartComponent', ReportedIssuesChart);
