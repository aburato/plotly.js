/**
* Copyright 2012-2018, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var Registry = require('../../registry');


module.exports = function handleOHLC(traceIn, traceOut, coerce, layout) {
    var x = coerce('x');
    var open = coerce('open');
    var high = coerce('high');
    var low = coerce('low');
    var close = coerce('close');

    coerce('hoverlabel.split');
    var x = coerce('x'),
        open = coerce('open'),
        high = coerce('high'),
        low = coerce('low'),
        close = coerce('close'),
        text = coerce('text'),
        textbox = coerce('textbox');

    var handleCalendarDefaults = Registry.getComponentMethod('calendars', 'handleTraceDefaults');
    handleCalendarDefaults(traceIn, traceOut, ['x'], layout);

    if(!(open && high && low && close)) return;

    var len = Math.min(open.length, high.length, low.length, close.length);

    if(x) len = Math.min(len, x.length);
    if(len < text.length) traceOut.text = text.slice(0, len);
    if(len < textbox.length) traceOut.textbox = textbox.slice(0, len);

    traceOut._length = len;

    return len;
};
