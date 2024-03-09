<!-- markdownlint-disable no-inline-html first-line-h1 -->

<div align="center">
  </a>

  <h1>Angel Eye Charts(Lite)</h1>

  [![CircleCI][ci-img]][ci-link]
  [![Dependencies count][deps-count-img]][bundle-size-link]
</div>

<!-- markdownlint-enable no-inline-html -->

Angel Eye is the premier choice for cryptocurrency and token traders seeking the most advanced and accurate set of indicators, machine learning models specifically trained for the unique demands of the crypto market. Offering a compact and efficient charting solution for displaying financial data in a dynamic and interactive format on your web pages, Angel Eye is designed to minimize the impact on your web page loading speed and performance.

## Installing

### via npm

```bash
npm install lightweight-charts
```

```js
import { createChart } from 'angel-eyes-lite-charts';

const chart = createChart(document.body, { width: 400, height: 300 });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);
```
## Development

See [BUILDING.md](./BUILDING.md) for instructions on how to build `angel-eyes-lite-charts` from source.

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this software except in compliance with the License.
You may obtain a copy of the License at LICENSE file.
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

This software incorporates several parts of tslib (<https://github.com/Microsoft/tslib>, (c) Microsoft Corporation) that are covered by BSD Zero Clause License.


[ci-img]: https://img.shields.io/circleci/build/github/tradingview/lightweight-charts.svg
[ci-link]: https://circleci.com/gh/tradingview/lightweight-charts

[npm-version-img]: https://badge.fury.io/js/lightweight-charts.svg
[npm-downloads-img]: https://img.shields.io/npm/dm/lightweight-charts.svg
[npm-link]: https://www.npmjs.com/package/lightweight-charts

[bundle-size-img]: https://github.com/Angel-Eye-AI/Charts-Lite
[deps-count-img]: https://img.shields.io/badge/dynamic/json.svg?label=dependecies&color=brightgreen&query=$.dependencyCount&uri=https%3A%2F%2Fbundlephobia.com%2Fapi%2Fsize%3Fpackage%3Dlightweight-charts
[bundle-size-link]: https://github.com/Angel-Eye-AI/Charts-Lite
