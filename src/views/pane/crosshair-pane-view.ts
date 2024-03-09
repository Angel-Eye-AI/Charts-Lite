import { ensureNotNull } from '../../helpers/assertions';

import { Crosshair, CrosshairMode } from '../../model/crosshair';
import { CrosshairRenderer, CrosshairRendererData } from '../../renderers/crosshair-renderer';
import { IPaneRenderer } from '../../renderers/ipane-renderer';

import { IPaneView } from './ipane-view';

export class CrosshairPaneView implements IPaneView {
	private _invalidated: boolean = true;
	private readonly _source: Crosshair;
	private readonly _rendererData: CrosshairRendererData = {
		vertLine: {
			lineWidth: 1,
			lineStyle: 0,
			color: '',
			visible: false,
		},
		horzLine: {
			lineWidth: 1,
			lineStyle: 0,
			color: '',
			visible: false,
		},
		x: 0,
		y: 0,
	};
	private _renderer: CrosshairRenderer = new CrosshairRenderer(this._rendererData);

	public constructor(source: Crosshair) {
		this._source = source;
	}

	public update(): void {
		this._invalidated = true;
	}

	public renderer(): IPaneRenderer {
		if (this._invalidated) {
			this._updateImpl();
			this._invalidated = false;
		}

		return this._renderer;
	}

	private _updateImpl(): void {
		const visible = this._source.visible();
		const pane = ensureNotNull(this._source.pane());
		const crosshairOptions = pane.model().options().crosshair;

		const data = this._rendererData;

		if (crosshairOptions.mode === CrosshairMode.Hidden) {
			data.horzLine.visible = false;
			data.vertLine.visible = false;
			return;
		}

		data.horzLine.visible = visible && this._source.horzLineVisible(pane);
		data.vertLine.visible = visible && this._source.vertLineVisible();

		data.horzLine.lineWidth = crosshairOptions.horzLine.width;
		data.horzLine.lineStyle = crosshairOptions.horzLine.style;
		data.horzLine.color = crosshairOptions.horzLine.color;

		data.vertLine.lineWidth = crosshairOptions.vertLine.width;
		data.vertLine.lineStyle = crosshairOptions.vertLine.style;
		data.vertLine.color = crosshairOptions.vertLine.color;

		data.x = this._source.appliedX();
		data.y = this._source.appliedY();
	}
}
