/**
* Copyright 2012-2016, Plotly, Inc.
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
    require('./scattergeo'),
    require('./choropleth')
]);

module.exports = Plotly;
