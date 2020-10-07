/**
* Copyright 2012-2020, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

exports.isGrouped = function isGrouped(legendLayout) {
    return (legendLayout.traceorder || '').indexOf('grouped') !== -1;
};

exports.isVertical = function isVertical(legendLayout) {
    return legendLayout.orientation !== 'h';
};

exports.isReversed = function isReversed(legendLayout) {
    return (legendLayout.traceorder || '').indexOf('reversed') !== -1;
};

exports.isSorted = function isSorted(legendLayout) {
    return (legendLayout.traceorder || '').indexOf('sorted') !== -1;
};

// Split labels in multi-lines
exports.splitLines = function splitLines(text, opts) {
    if (text.indexOf("<br>") < 0) {
        var lines = [];
        
        while (text.length > opts.linelen && (!opts.maxlines || lines.length + 1 < opts.maxlines)) {
            var i = text.lastIndexOf(' ', opts.linelen);
            var spaceFound = i > opts.linelen - 11 && i > 0;
            if (spaceFound) {
                lines.push(text.substr(0, i));
                text = text.substr(i + 1);        
            } else  {
                // Truncate word
                lines.push(text.substr(0, opts.linelen));
                text = text.substr(opts.linelen);
            }
        }

        if (text.length > 0) {
            if (text.length > opts.linelen) {
                lines.push(text.substr(0, opts.linelen - 3) + "...");
            } else {
                lines.push(text);
            }
        }
        return lines.join("<br>");
    }
    return text;
}
