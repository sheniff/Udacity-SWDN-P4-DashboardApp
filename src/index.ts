/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import 'gentelella/vendors/bootstrap/dist/css/bootstrap.min.css';
import 'gentelella/vendors/font-awesome/css/font-awesome.min.css';
import 'gentelella/production/css/maps/jquery-jvectormap-2.0.3.css';
import './app/gentelella/css/custom.min.css';

import {TodoService} from './app/todos/todos';
import {App} from './app/containers/App';
import {Header} from './app/components/Header';
import {MainSection} from './app/components/MainSection';
import {TodoTextInput} from './app/components/TodoTextInput';
import {TodoItem} from './app/components/TodoItem';
import {Footer} from './app/components/Footer';
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

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('todoService', TodoService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem)
  .component('dashboard', Dashboard)
  .component('sidebarComponent', Sidebar)
  .component('topnavComponent', TopNav)
  .component('geo', Geo)
  .component('metrics', Metrics)
  .component('data', Data)
  .component('topTilesComponent', TopTiles)
  .component('payingCustomersChartComponent', PayingCustomersChart)
  .component('reportedIssuesChartComponent', ReportedIssuesChart);
