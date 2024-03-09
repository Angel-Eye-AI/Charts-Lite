function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 1000; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = (window.chart = LightweightCharts.createChart(container, {
		autoSize: true,
	}));
	const series = chart.addLineSeries();
	series.setData(generateData());

	return new Promise(resolve => {
		setTimeout(() => {
			chart.resize(400, 350);
			requestAnimationFrame(() => {
				resolve();
			});
		}, 500);
	});
}
