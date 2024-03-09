---
title: Release Notes
description: List of changes made for each release of the library.
keywords:
    - charts
    - changelog
    - canvas
    - charting library
    - charting
    - html5 charts
    - financial charting library
sidebar_position: 8
---

<!-- markdownlint-disable no-emphasis-as-heading -->
<!-- ^ using emphasis as headings so we don't have duplicate headers -->

## 3.8.0

We're happy to announce the next release of Lightweight Charts™ library. This release includes many improvements and bug fixes (as usual), but we are thrilled to say that from this version the library has its own [documentation website](https://tradingview.github.io/lightweight-charts/) that replaces the documentation in the repository. Check it out and share your feedback in [this discussion thread](https://github.com/tradingview/lightweight-charts/discussions/921).

**Enhancement**

- Documentation website (see [#875](https://github.com/tradingview/lightweight-charts/issues/875), [#918](https://github.com/tradingview/lightweight-charts/issues/918), [#411](https://github.com/tradingview/lightweight-charts/issues/411), [#919](https://github.com/tradingview/lightweight-charts/issues/919), [#922](https://github.com/tradingview/lightweight-charts/issues/922), [#983](https://github.com/tradingview/lightweight-charts/issues/983), [#980](https://github.com/tradingview/lightweight-charts/issues/980), [#1006](https://github.com/tradingview/lightweight-charts/issues/1006))
- Quick tracking mode (see [#830](https://github.com/tradingview/lightweight-charts/issues/830))
- Improved mouse behaviour on touch devices (like mouse connected to mobile phone/tablet) (see [#106](https://github.com/tradingview/lightweight-charts/issues/106))
- Custom color for items of candlestick and line series (see [#195](https://github.com/tradingview/lightweight-charts/issues/195))
- Labels might be cut off when disabling scale and scroll ([#947](https://github.com/tradingview/lightweight-charts/issues/947))
- Add ability to disable visibility of price line line (see [#969](https://github.com/tradingview/lightweight-charts/issues/969))

**Fixed**

- timeScale.fitContent is not working correctly (see [#966](https://github.com/tradingview/lightweight-charts/issues/966))
- Delegate.unsubscribeAll method works in opposite way (see [#995](https://github.com/tradingview/lightweight-charts/issues/995))
- Last price animation is active when no data added to the right (but to the left) (see [#886](https://github.com/tradingview/lightweight-charts/issues/886))
- subscribeClick on mobile always get the last index of all the items (see [#657](https://github.com/tradingview/lightweight-charts/issues/657))
- Incorrect crosshair position on scrolling by dragging by mouse (see [#987](https://github.com/tradingview/lightweight-charts/issues/987))
- A painting slows down after a while with tons of updates (see [#946](https://github.com/tradingview/lightweight-charts/issues/946))
- Bars disappear with devicePixelRatio less than 1 (see [#982](https://github.com/tradingview/lightweight-charts/issues/982))
- There are no tick marks on the price axis (see [#939](https://github.com/tradingview/lightweight-charts/issues/939))
- Disabling scrolling by disabled horzTouchDrag and vertTouchDrag options disables moving crosshair in tracking mode (see [#434](https://github.com/tradingview/lightweight-charts/issues/434))
- Reducing precision doesn't update price scale width (see [#550](https://github.com/tradingview/lightweight-charts/issues/550))
- Chart width is jumping on series change from area to candles (see [#943](https://github.com/tradingview/lightweight-charts/issues/943))
- Log axis is not scaling on small number (see [#874](https://github.com/tradingview/lightweight-charts/issues/874))
- Overlay series title is not rendered when no series use right price scale (see [#926](https://github.com/tradingview/lightweight-charts/issues/926))
- scrollToPosition with big negative value and when no data breaks the chart (see [#889](https://github.com/tradingview/lightweight-charts/issues/889))
- When rendering multiple charts with baseline series, baseValue of the last element is used on all charts series. (see [#898](https://github.com/tradingview/lightweight-charts/issues/898))

Thanks to our contributors:

- [@zaleGZL](https://github.com/zaleGZL) zale

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/23?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.7.0..v3.8.0).

## 3.7.0

**Enhancement**

- The new baseline series chart (see [#151](https://github.com/tradingview/lightweight-charts/issues/151))
- Documentation about time zones support (see [#781](https://github.com/tradingview/lightweight-charts/issues/781))
- Added methods to get time axis size and subscribe on size change (see [#853](https://github.com/tradingview/lightweight-charts/issues/853))
- Improved performance of setting/updating series data (see [#418](https://github.com/tradingview/lightweight-charts/issues/418) and [#838](https://github.com/tradingview/lightweight-charts/issues/838))
- Use lowerbound in TimeScale timeToIndex search (see [#767](https://github.com/tradingview/lightweight-charts/issues/767))
- Add JSDoc comments for existing API docs (see [#870](https://github.com/tradingview/lightweight-charts/issues/870))

**Fixed**

- Increased min price tick mark step up to 1e-14 (from 1e-9) (see [#841](https://github.com/tradingview/lightweight-charts/issues/841))
- Fix typo in customization docs (see [#844](https://github.com/tradingview/lightweight-charts/issues/844))
- Do not paint time axis if it not visible (see [#865](https://github.com/tradingview/lightweight-charts/issues/865))
- Remove color customisation from settings.json (see [#869](https://github.com/tradingview/lightweight-charts/issues/869))

Thanks to our contributors:

- [@thanhlmm](https://github.com/thanhlmm) Thanh Le

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/22?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.6.1..v3.7.0).

## 3.6.1

**Fixed**

- In v3.6.0 there was a typo in `LasPriceAnimationMode` const enum (`Last` without `t`), which was fixed in this release. The incorrect name is still available to import and could be used in your code so no breaking change so far (see e5133cb0c50fc557182aba4011e170aaf30a5b1a)

See [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.6.0..v3.6.1).

## 3.6.0

On this day 10 years ago, 10th September 2011, the very first version of the TradingView website was deployed. To celebrate 10th anniversary we're happy to announce the new version of lightweight-charts library v3.6.0 🎉🎉🎉

**Enhancement**

- Gradient chart background color (see [#831](https://github.com/tradingview/lightweight-charts/issues/831))
- How to add buffer animation to price jump (see [#567](https://github.com/tradingview/lightweight-charts/issues/567))
- Kinetic scroll (see [#832](https://github.com/tradingview/lightweight-charts/issues/832))

**Fixed**

- Incorrect initial barSpacing when both fixRightEdge and fixLeftEdge are enabled (see [#823](https://github.com/tradingview/lightweight-charts/issues/823))
- Time axis label get cut on the edge if a fix edge option is enabled (see [#835](https://github.com/tradingview/lightweight-charts/issues/835))
- Price axis doesn't respect the width of crosshair label (see [#834](https://github.com/tradingview/lightweight-charts/issues/834))
- Fixed both timescale edges make lockVisibleTimeRangeOnResize turn wrong (see [#814](https://github.com/tradingview/lightweight-charts/issues/814))
- `Error: Value is null` error while set the data is container has 0x0 size (see [#821](https://github.com/tradingview/lightweight-charts/issues/821))

Thanks to our contributors:

- [@thanhlmm](https://github.com/thanhlmm) Thanh Le

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/21?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.5.0..v3.6.0).

## 3.5.0

**A note about rendering order of series, which might be interpret as a bug or breaking change since this release**

This is not really a breaking change, but might be interpret like that. In [#794](https://github.com/tradingview/lightweight-charts/issues/794) we've fixed the wrong order of series, thus now all series will be displayed in opposite order (they will be displayed in order of creating now; previously they were displayed in reversed order).

To fix that, just change the order of creating the series (thus instead of create series A, then series B create series B first and then series A) - see [#812](https://github.com/tradingview/lightweight-charts/issues/812).

**Fixed**

- Screenshot output missing piece on bottom right (see [#798](https://github.com/tradingview/lightweight-charts/issues/798))
- Overlapped line chart show wrong color order when hover (see [#794](https://github.com/tradingview/lightweight-charts/issues/794))
- Price line label show on both axis (see [#795](https://github.com/tradingview/lightweight-charts/issues/795))

Thanks to our contributors:

- [@thanhlmm](https://github.com/thanhlmm) Thanh Le

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/20?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.4.0..v3.5.0).

## 3.4.0

**Enhancement**

- Add option to fix right edge (see [#218](https://github.com/tradingview/lightweight-charts/issues/218))
- Drop restriction for min bar spacing value (see [#558](https://github.com/tradingview/lightweight-charts/issues/558))
- Round corners of the line-style plots (see [#731](https://github.com/tradingview/lightweight-charts/issues/731))

**Fixed**

- AutoscaleProvider documentation error (see [#773](https://github.com/tradingview/lightweight-charts/issues/773))
- Candlestick upColor and downColor is not changed on applyOptions (see [#750](https://github.com/tradingview/lightweight-charts/issues/750))
- Cleared and reset data appears at visually different location (see [#757](https://github.com/tradingview/lightweight-charts/issues/757))
- Remove unused internal method from SeriesApi (see [#768](https://github.com/tradingview/lightweight-charts/issues/768))
- Removing data for the last series doesn't actually remove the data (see [#752](https://github.com/tradingview/lightweight-charts/issues/752))
- `to` date of getVisibleRange contains partially visible data item and it's impossible to hover it (see [#624](https://github.com/tradingview/lightweight-charts/issues/624))
- series.priceFormatter().format(price) does not work (see [#790](https://github.com/tradingview/lightweight-charts/issues/790))

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/19?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.3.0..v3.4.0).

## 3.3.0

**Enhancement**

- Add type predicates for series type (see [#670](https://github.com/tradingview/lightweight-charts/issues/670))
- Create Grid instance for every pane (see [#382](https://github.com/tradingview/lightweight-charts/issues/382))
- Add possibility to chose crosshairMarker color, so it will be independent from line-series color (see [#310](https://github.com/tradingview/lightweight-charts/issues/310))
- Implement option not to shift the time scale at all when data is added with `setData` (see [#584](https://github.com/tradingview/lightweight-charts/issues/584))

**Fixed**

- Incorrect bar height when its value is more than chart's height (see [#673](https://github.com/tradingview/lightweight-charts/issues/673))
- Disabling autoScale for non-visible series (see [#687](https://github.com/tradingview/lightweight-charts/issues/687))

Thanks to our contributors:

- [@dubroff](https://github.com/dubroff)
- [@SuperPenguin](https://github.com/SuperPenguin) Andree Yosua
- [@mecm1993](https://github.com/mecm1993) Manuel Cepeda

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/17?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.2.0..v3.3.0).

## 3.2.0

**Enhancement**

- Feat/gzip friendly colors (see [#598](https://github.com/tradingview/lightweight-charts/issues/598))
- Add coordinateToLogical and logicalToCoordinate (see [#587](https://github.com/tradingview/lightweight-charts/issues/587))
- Add API to show/hide series without removing it (see [#471](https://github.com/tradingview/lightweight-charts/issues/471))
- Add run-time validation of inputs in debug mode (see [#315](https://github.com/tradingview/lightweight-charts/issues/315))
- Pixel perfect renderers fixes (see [#535](https://github.com/tradingview/lightweight-charts/issues/535))
- Add title option to createPriceLine (see [#357](https://github.com/tradingview/lightweight-charts/issues/357))

**Fixed**

- Set rightOffset and scrollToPosition async as well as setVisibleRange (see [#406](https://github.com/tradingview/lightweight-charts/issues/406))
- timeScale() changes visible range on setData() (see [#549](https://github.com/tradingview/lightweight-charts/issues/549))
- Remove chart's size restriction or make it smaller (see [#366](https://github.com/tradingview/lightweight-charts/issues/366))
- LineStyle.Dotted make no effect (see [#572](https://github.com/tradingview/lightweight-charts/issues/572))
- If priceScaleId is empty string, invalid price scale api is returned (see [#537](https://github.com/tradingview/lightweight-charts/issues/537))
- Incorrect Selection seen on long press in ios webview on chart (see [#609](https://github.com/tradingview/lightweight-charts/issues/609))
- One-point line series is invisible (see [#597](https://github.com/tradingview/lightweight-charts/issues/597))
- Empty price scale after creating series with the same price range (see [#615](https://github.com/tradingview/lightweight-charts/issues/615))

**Infra and dev env**

- Compress artifacts in graphics tests in CI (see [#145](https://github.com/tradingview/lightweight-charts/issues/145))
- Run tests against production build (see [#503](https://github.com/tradingview/lightweight-charts/issues/503))
- Add test to check code usage coverage (see [#495](https://github.com/tradingview/lightweight-charts/issues/495))
- Migrate from codechecks (see [#356](https://github.com/tradingview/lightweight-charts/issues/356))
- Updated dev deps

Thanks to our contributors:

- Andree Yosua [@SuperPenguin](https://github.com/SuperPenguin)
- Christos [@christose](https://github.com/christose)
- Shergin Rodion [@beholderrk](https://github.com/beholderrk)
- wenhoujx [@wenhoujx](https://github.com/wenhoujx)

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/11?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.1.5..v3.2.0).

## 3.1.5

It's a just re-published accidentally published 3.1.4 version, which didn't actually fix the issue [#536](https://github.com/tradingview/lightweight-charts/issues/536).

Version 3.1.4 has been deprecated.

**Fixed**

- TypeError `_internal_priceScale is not a function` while getting series price scale (see [#536](https://github.com/tradingview/lightweight-charts/issues/536))

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/16?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.1.3..v3.1.5).

## 3.1.3

**Fixed**

- `handleScroll` and `handleScale` options aren't applied (see [#527](https://github.com/tradingview/lightweight-charts/issues/527))

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/14?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.1.2..v3.1.3).

## 3.1.2

**Fixed**

- Crosshair doesn't work on touch devices (see [#511](https://github.com/tradingview/lightweight-charts/issues/511))

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/13?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.1.1..v3.1.2).

## 3.1.1

**Fixed**

- Fixed production build of 3.1 version (see [#502](https://github.com/tradingview/lightweight-charts/issues/502) and [62aa93724e40fbb1b678d9b44655279a1df529c5](https://github.com/tradingview/lightweight-charts/commit/62aa93724e40fbb1b678d9b44655279a1df529c5))

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/12?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.1.0..v3.1.1).

## 3.1.0

**Enhancement**

- Whitespaces support (see [#209](https://github.com/tradingview/lightweight-charts/issues/209))
- Custom font families for watermarks (see [#437](https://github.com/tradingview/lightweight-charts/issues/437))

**Fixed**

- Added support for 'transparent' color (see [#491](https://github.com/tradingview/lightweight-charts/issues/491))
- Refactor DataLayer/ChartApi (see [#270](https://github.com/tradingview/lightweight-charts/issues/270))
- Remove series then scroll to right after not working (see [#355](https://github.com/tradingview/lightweight-charts/issues/355))
- Scaling via mouse click and drag doesn't work if chart is inside shadow root (see [#427](https://github.com/tradingview/lightweight-charts/issues/427))
- Applying watermark in setTimeout doesn't make an effect (see [#485](https://github.com/tradingview/lightweight-charts/issues/485))
- Importing the library in server-side context caused `ReferenceError` (see [#446](https://github.com/tradingview/lightweight-charts/issues/446))

**Undocumented breaking changes**

We know that some of users probably used some hacky-workarounds calling internal methods to achieve multi-pane support. In this release, to reduce size of the bundle we [dropped out a code for pane's separator](https://github.com/tradingview/lightweight-charts/pull/496) (which allows to resize panes).

As soon this workaround is undocumented and we don't support this feature yet - we don't bump a major version. But we think it's better to let you know that it has been changed.

**Development**

- Dropped support NodeJS < 12.18
- Migrated from TSLint to ESLint (see [#314](https://github.com/tradingview/lightweight-charts/issues/314))
- Migrated from clean-publish to in-house script to clear package.json (see [#474](https://github.com/tradingview/lightweight-charts/issues/474))

Thanks to our contributors:

- Meet Mangukiya [@meetmangukiya](https://github.com/meetmangukiya)
- NekitCorp [@NekitCorp](https://github.com/NekitCorp)

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/9?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.0.1..v3.1.0).

## 3.0.1

**Fixed**

- Correctly handle `overlay: true` in series options while create series to backward compat (see [#475](https://github.com/tradingview/lightweight-charts/issues/475))

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/10?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v3.0.0..v3.0.1).

## 3.0.0

**Breaking changes**

We have some breaking changes since the latest version due some features and API improvements:

- Methods `subscribeVisibleTimeRangeChange` and `unsubscribeVisibleTimeRangeChange` has been moved from ChartApi to TimeScaleApi
- Since 3.0 you can specify price axis you'd like to place the series on. The same for moving the series between price scales (see migration guide below)

See [breaking changes doc](https://github.com/tradingview/lightweight-charts/blob/master/docs/3.0-breaking-changes.md) with migration guide to migrate smoothly.

**Enhancement**

- Added ability to customize time scale tick marks formatter (see [#226](https://github.com/tradingview/lightweight-charts/issues/226))
- Added ability to put text for series markers (see [#207](https://github.com/tradingview/lightweight-charts/issues/207))
- Added ability to specify your own date formatter (see [#368](https://github.com/tradingview/lightweight-charts/issues/368))
- Improved tick marks generation algorithm for the first point (see [#387](https://github.com/tradingview/lightweight-charts/issues/387))
- Made inbound types weakly (outbound ones should be strict) (see [#374](https://github.com/tradingview/lightweight-charts/issues/374))
- Removed non-exported const enum's JS code (see [#432](https://github.com/tradingview/lightweight-charts/issues/432))
- Introduced [ts-transformer-properties-rename](https://github.com/timocov/ts-transformer-properties-rename) instead of [ts-transformer-minify-privates](https://github.com/timocov/ts-transformer-minify-privates) (see [#436](https://github.com/tradingview/lightweight-charts/issues/436))

**Added**

- Add ability to override series' autoscale range (see [#392](https://github.com/tradingview/lightweight-charts/issues/392))
- Add API to get price scale's width (see [#452](https://github.com/tradingview/lightweight-charts/issues/452))
- Disabling/enabling scaling axis for both price and time (see [#440](https://github.com/tradingview/lightweight-charts/issues/440))
- Get screen coordinate by a time point (see [#435](https://github.com/tradingview/lightweight-charts/issues/435))
- Remove tick mark from price label (see [#378](https://github.com/tradingview/lightweight-charts/issues/378))
- Support the second price axis (see [#129](https://github.com/tradingview/lightweight-charts/issues/129))
- Visible time range should have bars count of the space from left/right (see [#335](https://github.com/tradingview/lightweight-charts/issues/335))

**Fixed**

- `series.setMarkers` requires at least one data point (see [#372](https://github.com/tradingview/lightweight-charts/issues/372))
- Impossible to override the only width or height in constructor (see [#353](https://github.com/tradingview/lightweight-charts/issues/353))
- Incorrect alignment of markers if series has gaps (see [#464](https://github.com/tradingview/lightweight-charts/issues/464))
- Multiple series: error while trying to scroll the chart (see [#373](https://github.com/tradingview/lightweight-charts/issues/373))
- Replace const enums with enums to let use them in projects with enabled isolatedModules option (see [#375](https://github.com/tradingview/lightweight-charts/issues/375))

Thanks to our contributors:

- Ben Guidarelli [@barnjamin](https://github.com/barnjamin)
- gkaindl [@gkaindl](https://github.com/gkaindl)
- scrwdrv [@scrwdrv](https://github.com/scrwdrv)
- Yusuf Sahin HAMZA [@yusufsahinhamza](https://github.com/yusufsahinhamza)

See [issues assigned to this version's milestone](https://github.com/tradingview/lightweight-charts/milestone/7?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v2.0.0..v3.0.0).

## 2.0.0

**Breaking changes**

- Removed unused `lineWidth` property from `HistogramStyleOptions` interface (it affects nothing, but could break your compilation)
- Changed order of `width` and `height` args in `resize` method ([#157](https://github.com/tradingview/lightweight-charts/issues/157))
- Pattern for all non-solid (dotted, dashed, large dashed and sparse dotted) line styles was a bit changed ([#274](https://github.com/tradingview/lightweight-charts/issues/274))

**Enhancement**

- Pixel-perfect rendering ([#274](https://github.com/tradingview/lightweight-charts/issues/274))
- Time scale enhancements ([#352](https://github.com/tradingview/lightweight-charts/issues/352))

**Added**

- Disable all kinds of scrolls and touch with one option ([#230](https://github.com/tradingview/lightweight-charts/issues/230))
- Added to the acceptable date formats ([#296](https://github.com/tradingview/lightweight-charts/issues/296))
- Add option to show the "global" last value of the series instead of the last visible ([#203](https://github.com/tradingview/lightweight-charts/issues/203))

**Fixed**

- Price line didn`t hightlight price ([#273](https://github.com/tradingview/lightweight-charts/issues/273))
- CreatePriceLine not removed ([#285](https://github.com/tradingview/lightweight-charts/issues/285))
- Crosshair line not visible when priceScale position set to none ([#302](https://github.com/tradingview/lightweight-charts/issues/302))
- chart.resize parameter is inverted ([#157](https://github.com/tradingview/lightweight-charts/issues/157))
- Removed unnecessary spacing from left/right (1 bar from each side) in `fitContent` ([#345](https://github.com/tradingview/lightweight-charts/issues/345))

Thanks to our contributors:

- Andree Yosua [@SuperPenguin](https://github.com/SuperPenguin)
- kpaape [@kpaape](https://github.com/kpaape)
- Matt Conway [@RetWolf](https://github.com/RetWolf)

See [issues assigned to this version’s milestone](https://github.com/tradingview/lightweight-charts/milestone/6?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v1.2.2..v2.0.0).

## 1.2.2

**Fixed**

- Bug while rendering few datasets with not equal timescale ([#321](https://github.com/tradingview/lightweight-charts/issues/321))

## 1.2.1

**Added**

- Add custom price lines ([#183](https://github.com/tradingview/lightweight-charts/issues/183))
- Migrate canvas-related logic to fancy-canvas library ([#141](https://github.com/tradingview/lightweight-charts/issues/141))
- Add coordinateToPrice method to ISeriesApi ([#171](https://github.com/tradingview/lightweight-charts/issues/171))

**Fixed**

- Scrolling by price is incorrect ([#213](https://github.com/tradingview/lightweight-charts/issues/213))
- Histogram (volume) does not honor color setting (sometimes) ([#233](https://github.com/tradingview/lightweight-charts/issues/233))
- Logarithmic scaling is applied to volume ([#227](https://github.com/tradingview/lightweight-charts/issues/227))
- hoveredSeries in mouse events params is always undefined ([#190](https://github.com/tradingview/lightweight-charts/issues/190))
- `lineType` option does not work for area/line series ([#220](https://github.com/tradingview/lightweight-charts/issues/220))
- Double clicking on time scale will reset fix left edge ([#224](https://github.com/tradingview/lightweight-charts/issues/224))
- Series' marker does not aligned after autoscale ([#212](https://github.com/tradingview/lightweight-charts/issues/212))
- Error on setData empty array for overlay histogram series ([#267](https://github.com/tradingview/lightweight-charts/issues/267))
- Added some missing docs ([#211](https://github.com/tradingview/lightweight-charts/issues/211) [#193](https://github.com/tradingview/lightweight-charts/issues/193) [#245](https://github.com/tradingview/lightweight-charts/issues/245))

See [issues assigned to this version’s milestone](https://github.com/tradingview/lightweight-charts/milestone/4?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v1.1.0...v1.2.1).

## 1.1.0

**Added**

- Apply localization to specific series ([#62](https://github.com/tradingview/lightweight-charts/issues/62))
- Series-based markers ([#24](https://github.com/tradingview/lightweight-charts/issues/24))
- Reduced size of the library by using [`ts-transformer-minify-privates`](https://github.com/timocov/ts-transformer-minify-privates) transformer ([#98](https://github.com/tradingview/lightweight-charts/issues/98))

**Fixed**

- The chart can't start from the left ([#144](https://github.com/tradingview/lightweight-charts/issues/144))
- OHLC charts render incorrect when `value` is provided ([#165](https://github.com/tradingview/lightweight-charts/issues/165))
- Price axis is not shown if series is created inside promise chain ([#164](https://github.com/tradingview/lightweight-charts/issues/164))
- The line chart can't move to the left ([#143](https://github.com/tradingview/lightweight-charts/issues/143))
- Lots of non-passive event listener warnings ([#139](https://github.com/tradingview/lightweight-charts/issues/139))
- applyOptions of histogram series with color doesn't affect the data ([#112](https://github.com/tradingview/lightweight-charts/issues/112))
- Price Axis Scaling Bug ([#122](https://github.com/tradingview/lightweight-charts/issues/122))
- LineSeries is not displayed if starting x value is out of viewport ([#116](https://github.com/tradingview/lightweight-charts/issues/116))
- Crosshair isn't updated when timescale is changed ([#120](https://github.com/tradingview/lightweight-charts/issues/120))
- Pinch isn't prevented by long tap ([#95](https://github.com/tradingview/lightweight-charts/issues/95))

Thanks to our contributors:

- zach [@n8tb1t](https://github.com/n8tb1t)
- Chris Kaczor [@krzkaczor](https://github.com/krzkaczor)

See [issues assigned to this version’s milestone](https://github.com/tradingview/lightweight-charts/milestone/2?closed=1) or [changes since the last published version](https://github.com/tradingview/lightweight-charts/compare/v1.0.2...v1.1.0).

## 1.0.2

**Fixed**

- The histogram last bar not hide in chart ([#133](https://github.com/tradingview/lightweight-charts/issues/133))

## 1.0.1

**Fixed**

- Setting the data to series fails after setting the data to histogram series with custom color ([#110](https://github.com/tradingview/lightweight-charts/issues/110))

## 1.0.0

The first release.

The docs for this version are available [here](https://github.com/tradingview/lightweight-charts/tree/v1.0.0/docs).
