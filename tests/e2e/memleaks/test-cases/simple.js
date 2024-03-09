/** @type {import('@memlab/core/dist/lib/Types').IScenario} */
const scenario = {
	setup: async function(page) {
		await page.addScriptTag({
			url: 'library.js',
		});
	},
	action: async function(page) {
		await page.evaluate(() => {
			function generateData() {
				const res = [];
				const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
				for (let i = 0; i < 500; ++i) {
					res.push({
						time: time.getTime() / 1000,
						value: i,
					});
					time.setUTCDate(time.getUTCDate() + 1);
				}
				return res;
			}
			window.chart = LightweightCharts.createChart(
				document.getElementById('container')
			);
			const mainSeries = window.chart.addLineSeries({
				priceFormat: {
					minMove: 1,
					precision: 0,
				},
			});
			mainSeries.setData(generateData());
		});
	},
	back: async function(page) {
		await page.evaluate(() => {
			if (window.chart) {
				window.chart.remove();
				delete window.chart;
				delete window.LightweightCharts;
			}
		});
	},
};

// eslint-disable-next-line no-undef
exports.scenario = scenario;
