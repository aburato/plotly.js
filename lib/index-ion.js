/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
 * ION custom build. 
 */

'use strict';

var Plotly = require('./core');

Plotly.register([
    require('./bar'),
    require('./pie'),
    require('./box'),
    require('./scattergeo'),
    require('./choropleth')
]);

module.exports = Plotly;
