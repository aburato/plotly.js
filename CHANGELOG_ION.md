# plotly.js ION changelog

## [1.33.1-ion7] -- 2018-03-26

### [ARCBUGS-4454] GUI throws unhandled exception intermittently when a user changes scatter chart to world chart. Due to bad params passed to map chart.
### [CORESDK-3299] Charts: tooltip customization for boxes in boxplots and candles in candlestick. Fix for a missing textbox parameter.


## [1.33.1-ion6] -- 2018-03-23

### [CORESDK-3299] Charts: tooltip customization for boxes in boxplots and candles in candlestick. Fix due to double series for positive vs negative candles.


## [1.33.1-ion5] -- 2018-03-19

### [CORESDK-3299] Charts: tooltip customization for boxes in boxplots and candles in candlestick


## [1.33.1-ion4] -- 2018-02-14

### [IONWEBQA-1381] Charts: donut raises exception on click


## [1.33.1-ion3] -- 2018-02-13

### [IONWEBQA-1375] Charts: pannning and zooming are broken
### [IONWEBQA-1374] Charts raise exception upon clicking on legend labels
### [ATPWM-928] Unhandled Exception - Cannot read property '_hoverlayer' of undefined.


## [1.28.3-ion49] -- 2018-02-01

### [ATPWM-898] Support for correct management of dates on mobile devices. Earlier it worked accidentally on desktop envs.


## [1.28.3-ion48] -- 2018-01-02

### Disable autoscroll on windowed axes while dragged in the past
### Fix: "Bad container" exception
### If vertical tap disabled, scroll outer container on touch devices


## [1.28.3-ion47] -- 2018-01-02

### Initial drag touch gesture support in charts
- Now charts supports dragging horizontally to move the X-axis. This a merge of a commit on Plotly 1.29.


## [1.28.3-ion46] -- 2017-11-27

### CandleStick with bar chart
- Disabled code that rescaled multi-bar chart due to negative side effect in candlestick charts


## [1.28.3-ion45] -- 2017-11-22

### CandleStick
- Added possibility to render CandleStick charts


## [1.28.3-ion44] -- 2017-10-20

### Fix
- Legend labels overlap pie charts when widget resized at a specific small size


## [1.28.3-ion43] -- 2017-10-20

### Fix part I
- Legend labels do not have any more ellipsis


## [1.28.3-ion42] -- 2017-10-19

### Fixed
- Maximum call stack size exceeded while resizing chart to a small area


## [1.28.3-ion41] -- 2017-09-14

### Fixed
- hoverinfo labels in treemap charts displaced when browser is zoomed


## [1.28.3-ion40] -- 2017-06-28

### Merged
- Restart clean from the 1.28.3 Plotly.js original tag

### Fixed
- ion version numbering is now -ion* instead of -d*
- ALL REPO IS NOW CHECKED OUT WITH LF ENDINGS, in order to avoid the "header" build
  script failure

### Added
- Custom ionbuild npm script (skips stats which fail on windows anyway)