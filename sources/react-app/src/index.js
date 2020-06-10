/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';
import Cookies from 'js-cookie';
import { siteName } from './shared/utils';
// import * as serviceWorker from './serviceWorker';

if (Cookies.get('crafterSite') !== siteName) {
  Cookies.set('crafterSite', siteName);
}

// On occasions, Crafter's jQuery overrides the site's jQuery
// briefly. This will get fixed on next releases of Crafter CMS,
// but for now, adding jQuery to the global context to 'cache' it.
ReactDOM.render(
  <React.StrictMode>
    <App jQuery={window.jQuery} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
