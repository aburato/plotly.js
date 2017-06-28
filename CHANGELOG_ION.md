# plotly.js ION changelog


## [1.28.3-ion40] -- 2017-06-28

### Merged
- Restart clean from the 1.28.3 Plotly.js original tag

### Fixed
- ion version numbering is now -ion* instead of -d*
- ALL REPO IS NOW CHECKED OUT WITH LF ENDINGS, in order to avoid the "header" build
  script failure

### Added
- Custom ionbuild npm script (skips stats which fail on windows anyway)