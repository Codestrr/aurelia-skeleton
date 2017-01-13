import {Aurelia} from 'aurelia-framework';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'material-design-lite/material.css';
import 'toastr/build/toastr.css';
import 'mdl-ext/lib/mdl-ext.css';
import '../styles/styles.scss';
import 'bootstrap';
import 'material-design-lite';
import 'mdl-ext';

import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use.plugin('aurelia-mdl-plugin', mdl => {
    mdl.addClasses('mdlext-js-accordion');
  });

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
