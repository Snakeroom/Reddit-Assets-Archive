// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66.65a6f90d338d4e54d017.js
// Retrieved at 10/19/2020, 12:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"], {
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/BlurImage/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_1chxf6wi6yizUXVYKuz67P",
				component: "_1chxf6wi6yizUXVYKuz67P"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less": function(e, t, s) {
			e.exports = {
				baseControlStyles: "_2rtFq5-gNnsnqTzEcTSmVx",
				NormalControl: "_3MU1RfVON0x2Jtnz9Zq3FA",
				normalControl: "_3MU1RfVON0x2Jtnz9Zq3FA",
				TooltipControl: "_1mDDkogVo82R5-IFxvyPRX",
				tooltipControl: "_1mDDkogVo82R5-IFxvyPRX",
				AnimatedSettingIconParent: "_3KjMjt45Pg4_LoShJNFMEf",
				animatedSettingIconParent: "_3KjMjt45Pg4_LoShJNFMEf",
				baseIconStyles: "_2c7UOdkceyJz77qZPoGPAL",
				ControlCollapse: "_3uhleNVV7YkJm0tszcz4z9",
				controlCollapse: "_3uhleNVV7YkJm0tszcz4z9",
				ControlExpand: "_3ly5pJnuzH6jga1JGXpOXD",
				controlExpand: "_3ly5pJnuzH6jga1JGXpOXD",
				ControlPlay: "fqsG3oqeIwcEC-HTRf23d",
				controlPlay: "fqsG3oqeIwcEC-HTRf23d",
				ControlSnoo: "_2Zt53GmI1y_S0N7pA0jMc0",
				controlSnoo: "_2Zt53GmI1y_S0N7pA0jMc0",
				ControlVolume: "_2W9KLflUho3xU7KURAaHwH",
				controlVolume: "_2W9KLflUho3xU7KURAaHwH",
				Time: "_1z-qg2gzYKkI37gkYYJCi0",
				time: "_1z-qg2gzYKkI37gkYYJCi0",
				LiveLabel: "_1s8L9kNAgwvsmhnrpHl4Ef",
				liveLabel: "_1s8L9kNAgwvsmhnrpHl4Ef",
				ControlScrubber: "_3YQsKErciDXsBNWhb0bzul",
				controlScrubber: "_3YQsKErciDXsBNWhb0bzul",
				VolumeControl: "_3nTkqMMtsoqxVmhplDRef3",
				volumeControl: "_3nTkqMMtsoqxVmhplDRef3",
				SettingIcon: "X3KvZpgZg_2f0etJY2Ba7",
				settingIcon: "X3KvZpgZg_2f0etJY2Ba7",
				VideoSettingContainer: "_1s7GuSZPqjgn0QP60a6asr",
				videoSettingContainer: "_1s7GuSZPqjgn0QP60a6asr",
				ControlBarContainer: "gUpEQXQu8G8UvISmBIPsj",
				controlBarContainer: "gUpEQXQu8G8UvISmBIPsj",
				mIsFullScreen: "IlN7iDYa9yzeFlgOo0JQe",
				mHasZeroOpacity: "_1RZSSlyqzokrcxh0ESwE2e",
				button: "_15cvJJTKClcHJuPN2mcpY4"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = s("./src/reddit/icons/svgs/VideoCollapse/index.tsx"),
				d = s("./src/reddit/icons/svgs/VideoExpand/index.tsx"),
				h = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				u = s("./src/reddit/icons/svgs/VideoPause/index.tsx"),
				p = s("./src/reddit/icons/svgs/VideoPlay/index.tsx"),
				m = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				g = s("./src/reddit/components/HTML5StreamPlayer/ControlGradient/index.m.less"),
				f = s.n(g),
				v = r.a.div("Component", f.a),
				x = s("./node_modules/lodash/clamp.js"),
				y = s.n(x),
				S = s("./node_modules/react-dom/index.js"),
				b = s.n(S),
				P = s("./src/lib/fastdom/index.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const w = e => {
					const t = Math.floor(e / 60).toString();
					let s = Math.trunc(e % 60).toString();
					return s = "0".concat(s).slice(-2), "".concat(t, ":").concat(s)
				},
				V = (e, t) => {
					let s = Math.floor(e / 60).toString(),
						i = Math.trunc(e % 60).toString();
					const n = Math.floor(t / 60).toString();
					return s.length < n.length && (s = "0".concat(s).slice(-2)), i = "0".concat(i).slice(-2), "".concat(s, ":").concat(i)
				};
			var E = s("./src/reddit/constants/keycodes.ts"),
				C = s("./src/reddit/components/HTML5StreamPlayer/SeekBar/index.m.less"),
				T = s.n(C);
			const M = r.a.div("Thumb", T.a),
				_ = r.a.div("ProgressBar", T.a),
				F = r.a.div("Floating", T.a),
				L = r.a.video("PreviewVideo", T.a),
				B = r.a.div("PreviewTime", T.a),
				N = r.a.div("VideoSeekbar", T.a);
			class O extends a.a.PureComponent {
				constructor(e) {
					super(e), this.setParentRect = e => this.parentRect = e, this.setPreviewThumbnailContainer = e => this.previewThumbnailContainer = e, this.setPreviewThumbnailVideo = e => this.previewThumbnailVideo = e, this.setPreviewThumbnailTime = e => this.previewThumbnailTime = e, this.setProgressBar = e => this.progressBar = e, this.handleMouseDown = e => {
						if (0 === e.button && this.parentRect) {
							const t = this.parentRect.getBoundingClientRect();
							let s = (e.clientX - t.left) / t.width * 100;
							s = Math.min(Math.max(s, 0), 100), this.setProgress(s, !0)
						}
					}, this.handleMouseMove = e => {
						if (e.stopPropagation(), this.parentRect) {
							const t = this.parentRect.getBoundingClientRect();
							let s = (e.clientX - t.left) / t.width * 100;
							s = Math.min(Math.max(s, 0), 100), this.setLookahead(s), this.props.active && this.setProgress(s, !0)
						}
					}, this.handleMouseUp = e => {
						if (this.props.active) {
							const e = this.state.progressPercent * this.props.totalTime / 100;
							this.props.updatePosition(e), this.progressBar && this.progressThumb && (this.progressBar.style.width = "", this.progressThumb.style.marginLeft = "")
						}
					}, this.handleMouseLeave = e => {
						this.setLookahead(0)
					}, this.handleKeyDown = e => {
						switch (e.key) {
							case E.b.ArrowRight:
								return void this.jumpPlayback(5);
							case E.b.ArrowLeft:
								return void this.jumpPlayback(-5);
							case E.b.Space:
								return this.props.playPauseVideo(), void e.preventDefault()
						}
					}, this.setProgressThumbRef = e => {
						this.progressThumb = e, e && P.a.read(() => {
							const t = e.getBoundingClientRect().width / 2;
							P.a.write(() => {
								this.setState({
									thumbOffset: t
								})
							})
						})
					}, this.state = {
						thumbMargin: "",
						thumbOffset: null,
						isMouseDown: !1,
						progressPercent: 0,
						percent: 0
					}
				}
				jumpPlayback(e) {
					const {
						currentTime: t,
						totalTime: s
					} = this.props, i = y()(t + e, 0, s);
					i !== t && this.props.updatePosition(i)
				}
				getCurrentPercent() {
					const {
						currentTime: e,
						totalTime: t
					} = this.props;
					return e && t ? 100 * e / t : 0
				}
				setProgress(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					this.progressBar && this.progressThumb && (!this.props.active || t) && (this.progressBar.style.width = "calc(" + e + "% + " + this.state.thumbOffset + "px)", this.progressThumb.style.marginLeft = "calc(" + e + "% - " + this.state.thumbOffset + "px)", this.setState({
						progressPercent: e
					}), this.props.updateContinuousStartTime && this.props.updateContinuousStartTime(1e3 * this.props.currentTime))
				}
				getThumbMargin(e) {
					return this.props.active && this.progressThumb ? this.progressThumb.style.marginLeft || "0" : "calc(".concat(e, "% - ").concat(this.state.thumbOffset || 0, "px)")
				}
				getProgressWidth(e) {
					return this.props.active && this.progressBar ? this.progressBar.style.width : "".concat(e, "%")
				}
				setLookahead(e) {
					if (this.lookaheadBar && this.previewThumbnailContainer && this.previewThumbnailTime && this.parentRect) {
						this.lookaheadBar.style.width = e + "%";
						const {
							totalTime: t
						} = this.props, s = t * (e / 100);
						isNaN(s) || (this.previewThumbnailVideo && (this.previewThumbnailVideo.currentTime = s), this.previewThumbnailTime.innerHTML = V(s, t));
						const i = b.a.findDOMNode(this);
						if (!i || !i.parentNode) return;
						const n = i.parentNode;
						if (!(n instanceof Element)) return;
						const a = n.getBoundingClientRect(),
							o = this.parentRect.getBoundingClientRect(),
							r = this.previewThumbnailContainer.getBoundingClientRect(),
							l = a.left - o.left,
							c = a.right - o.left - r.width,
							d = e / 100 * o.width - r.width / 2;
						this.previewThumbnailContainer.style.left = Math.max(l, Math.min(d, c)) + "px"
					}
				}
				getBufferedStyle() {
					const {
						bufferedRanges: e
					} = this.props, {
						progressPercent: t
					} = this.state, s = this.getCurrentPercent();
					let i = t;
					for (let n = 0; n < e.length; n++) e[n].start <= s && (i = e[n].end);
					return i = y()(i, 0, 100), {
						width: "".concat(i, "%")
					}
				}
				render() {
					const {
						active: e
					} = this.props, {
						progressPercent: t
					} = this.state, s = this.getCurrentPercent();
					let n = e ? t : s;
					n = y()(n, 0, 100);
					const r = {
							width: this.getProgressWidth(n) || "0"
						},
						l = {
							marginLeft: this.getThumbMargin(n),
							opacity: e ? 1 : 0
						};
					return a.a.createElement(N, {
						innerRef: this.setParentRect,
						onKeyDown: this.handleKeyDown,
						onMouseLeave: this.handleMouseLeave,
						onMouseMove: this.handleMouseMove
					}, a.a.createElement("div", {
						"aria-label": i.fbt._("Seek Slider", null, {
							hk: "1fNTBw"
						}),
						"aria-valuemax": Math.round(this.props.totalTime),
						"aria-valuemin": 0,
						"aria-valuenow": this.props.currentTime,
						className: T.a.Mainbar,
						role: "slider",
						tabIndex: 0
					}, a.a.createElement("div", {
						className: Object(o.a)(T.a.Bar, T.a.Background)
					}), a.a.createElement("div", {
						className: Object(o.a)(T.a.Bar, T.a.Lookahead),
						ref: e => this.lookaheadBar = e
					}), a.a.createElement("div", {
						className: Object(o.a)(T.a.Bar, T.a.Buffered),
						style: this.getBufferedStyle()
					}), a.a.createElement(_, {
						className: this.props.isLive && T.a.Live,
						innerRef: this.setProgressBar,
						style: r
					})), a.a.createElement(M, {
						className: this.props.isLive && T.a.Live,
						innerRef: this.setProgressThumbRef,
						style: l
					}), !this.props.controlBarIsHidden && a.a.createElement(F, {
						innerRef: this.setPreviewThumbnailContainer
					}, this.props.thumbSource && a.a.createElement(L, {
						innerRef: this.setPreviewThumbnailVideo,
						src: this.props.thumbSource
					}), a.a.createElement(B, {
						innerRef: this.setPreviewThumbnailTime
					})))
				}
			}
			var k = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				R = s("./src/reddit/icons/svgs/VideoSnoo/index.tsx"),
				j = s("./src/reddit/components/HTML5StreamPlayer/SnooButton/index.m.less"),
				I = s.n(j);
			const H = () => a.a.createElement("div", {
				className: I.a.icon
			}, a.a.createElement(R.a, null));
			var A = e => "string" == typeof e.postUrl ? a.a.createElement("a", {
					href: e.postUrl,
					className: I.a.button
				}, a.a.createElement(H, null)) : a.a.createElement(k.a, {
					to: e.postUrl,
					className: I.a.button
				}, a.a.createElement(H, null)),
				U = s("./src/reddit/components/HTML5StreamPlayer/Tooltip/index.tsx"),
				D = s("./src/reddit/components/HTML5StreamPlayer/VolumeControl/index.m.less"),
				W = s.n(D);
			class z extends n.Component {
				constructor(e) {
					super(e), this.step = .1, this.max = 1, this.min = 0, this.handleMouseDown = e => {
						if (0 === e.button && this.track) {
							e.preventDefault(), this.setState({
								isMouseDown: !0
							});
							const t = this.track.getBoundingClientRect(),
								s = 100 - (e.clientY - t.top) / t.height * 100,
								i = (this.max - this.min) * (s / 100);
							this.setState({
								value: this.adjustValue(i)
							})
						}
					}, this.handleMouseMove = e => {
						if (this.state.isMouseDown && this.track) {
							const t = this.track.getBoundingClientRect(),
								s = 100 - (e.clientY - t.top) / t.height * 100,
								i = (this.max - this.min) * (s / 100);
							this.setState({
								value: this.adjustValue(i)
							})
						}
					}, this.handleMouseUp = e => {
						this.state.isMouseDown && this.setState({
							isMouseDown: !1
						}), this.props.setVolume(this.state.value, !0)
					}, this.state = {
						isMouseDown: !1,
						value: 0
					}
				}
				convertVolumeToPercent(e) {
					if ("number" != typeof e) return 100;
					const t = y()(e, this.min, this.max);
					let s = 0;
					if (t) {
						s = 20 * Math.log10(t) / 40 + 1
					}
					return this.calculatePercent(s)
				}
				calculatePercent(e) {
					return (e - this.min) / (this.max - this.min) * 100
				}
				adjustValue(e) {
					const t = y()(e, this.min, this.max);
					let s;
					if (1 === t || 0 === t) s = t;
					else {
						const e = 40 * (t - 1);
						s = Math.pow(10, e / 20)
					}
					return this.props.setVolume(s, !1), s
				}
				render() {
					const {
						active: e,
						className: t,
						isLive: s,
						isMuted: i,
						volume: n
					} = this.props, {
						value: r
					} = this.state, l = i ? 0 : e ? r : n, c = this.convertVolumeToPercent(l);
					return a.a.createElement("div", {
						className: Object(o.a)(W.a.VolumeControl, t),
						ref: e => this.container = e
					}, a.a.createElement("div", {
						className: Object(o.a)(W.a.SliderTrack, W.a.SliderBar),
						ref: e => this.track = e
					}, a.a.createElement("div", {
						className: Object(o.a)(W.a.SliderProgress, W.a.SliderBar, {
							[W.a.Live]: s
						}),
						ref: e => this.progress = e,
						style: {
							height: "".concat(c, "%")
						}
					}, a.a.createElement("div", {
						className: W.a.SliderThumb
					}))))
				}
			}
			var G = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Y = s.n(G);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var Z = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
				}
				return s
			};
			const K = r.a.wrapped(U.a, "TooltipControl", Y.a),
				Q = r.a.div("NormalControl", Y.a),
				q = r.a.wrapped(K, "ControlSnoo", Y.a),
				X = r.a.wrapped(K, "ControlPlay", Y.a),
				$ = r.a.wrapped(Q, "Time", Y.a),
				ee = r.a.wrapped($, "LeftTime", Y.a),
				te = r.a.wrapped($, "RightTime", Y.a),
				se = r.a.div("LiveLabel", Y.a),
				ie = r.a.wrapped(Q, "ControlScrubber", Y.a),
				ne = r.a.wrapped(Q, "ControlVolume", Y.a),
				ae = r.a.wrapped(K, "ControlExpand", Y.a),
				oe = r.a.wrapped(K, "ControlCollapse", Y.a),
				re = e => {
					var {
						className: t,
						isFullScreen: s,
						zeroOpacity: i,
						innerRef: n
					} = e, r = Z(e, ["className", "isFullScreen", "zeroOpacity", "innerRef"]);
					return a.a.createElement("div", J({
						className: Object(o.a)(Y.a.ControlBarContainer, t, {
							[Y.a.mIsFullScreen]: s,
							[Y.a.mHasZeroOpacity]: i
						}),
						ref: n
					}, r))
				};
			class le extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						currentTime: e.currentTime,
						totalTime: e.totalTime,
						bufferedRanges: []
					}
				}
				setCurrentTime(e) {
					this.setState({
						currentTime: e
					})
				}
				setTotalTime(e) {
					this.setState({
						totalTime: e
					})
				}
				setBufferedRanges(e) {
					this.setState({
						bufferedRanges: e
					})
				}
				renderContent() {
					const {
						hideFullScreenButton: e,
						hideGradient: t,
						postUrl: s,
						isListing: n,
						isLive: o,
						settingsButton: r,
						settingChange: h,
						hideLiveLabel: m,
						showSettingsIcon: g
					} = this.props, f = i.fbt._("View Comments", null, {
						hk: "2Vf8xl"
					}), x = i.fbt._("Play", null, {
						hk: "2cQV3h"
					}), y = i.fbt._("Pause", null, {
						hk: "2YnRgT"
					}), S = i.fbt._("Exit Fullscreen", null, {
						hk: "LnrWa"
					}), b = i.fbt._("Fullscreen", null, {
						hk: "3JvSdn"
					}), {
						currentTime: P
					} = this.state, {
						totalTime: E
					} = o ? this.state : this.props, C = this.props.isPaused ? x : y;
					return a.a.createElement(a.a.Fragment, null, !t && a.a.createElement(v, null), s && n && a.a.createElement(q, {
						tooltip: f
					}, a.a.createElement("div", {
						onClick: this.props.clickSnoo
					}, a.a.createElement(A, {
						postUrl: s
					}))), a.a.createElement(X, {
						tooltip: C
					}, a.a.createElement("button", {
						"aria-label": C,
						className: Y.a.button,
						onClick: this.props.playPauseVideo
					}, this.props.isPaused ? a.a.createElement(p.a, null) : a.a.createElement(u.a, null))), a.a.createElement(ee, null, V(P, E)), a.a.createElement(ie, null, a.a.createElement(O, {
						active: h === l.a.SeekBar,
						bufferedRanges: this.state.bufferedRanges,
						controlBarIsHidden: this.props.hideControlBar,
						currentTime: P,
						isLive: o,
						ref: this.props.seekBarRef,
						thumbSource: this.props.scrubberThumbSource,
						totalTime: E,
						playPauseVideo: this.props.playPauseVideo,
						updatePosition: this.props.setVideoPosition,
						updateContinuousStartTime: this.props.updateContinuousStartTime
					})), o && !m ? a.a.createElement(se, {
						"aria-label": i.fbt._("live", null, {
							hk: "1rkHRc"
						}),
						onClick: () => this.props.setVideoPosition(E)
					}, i.fbt._("Live", null, {
						hk: "3bCYlO"
					})) : a.a.createElement(te, null, w(E)), g && r, !e && (this.props.isFullScreen ? a.a.createElement(oe, {
						tooltip: S
					}, a.a.createElement("button", {
						"aria-label": S,
						className: Y.a.button,
						onClick: this.props.exitFullScreen
					}, a.a.createElement(c.a, null))) : a.a.createElement(ae, {
						tooltip: b
					}, a.a.createElement("button", {
						"aria-label": b,
						className: Y.a.button,
						onClick: this.props.enterFullScreen
					}, a.a.createElement(d.a, null)))))
				}
				render() {
					const {
						controlBarRef: e,
						isLive: t
					} = this.props;
					return a.a.createElement(re, {
						className: this.props.className,
						innerRef: t => e && e(t),
						isFullScreen: this.props.isFullScreen,
						zeroOpacity: this.props.hideControlBar
					}, this.renderContent(), this.props.hasAudio && a.a.createElement(ne, {
						className: this.props.showVolumeIcon ? "disableHide" : ""
					}, a.a.createElement(z, {
						className: Y.a.VolumeControl,
						ref: e => this.props.volumeRef(e),
						active: this.props.settingChange === l.a.Volume,
						isMuted: this.props.isMuted,
						isLive: t,
						setVolume: this.props.setVolume,
						volume: this.props.volume
					}), a.a.createElement("button", {
						className: Y.a.button,
						onClick: this.props.toggleMute
					}, this.props.isMuted ? a.a.createElement(h.a, null) : a.a.createElement(m.a, null))))
				}
			}
			t.a = le
		},
		"./src/reddit/components/HTML5StreamPlayer/ControlGradient/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3YDPJHFl8YQG4TIAGQwHwK",
				component: "_3YDPJHFl8YQG4TIAGQwHwK"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ReplayVideo/index.m.less": function(e, t, s) {
			e.exports = {
				Centered: "_241TIL5Gnyx3yLobU95FlI",
				centered: "_241TIL5Gnyx3yLobU95FlI",
				EndedOverlay: "_3G7xHJZQMrQlpjhNDQI2fe",
				endedOverlay: "_3G7xHJZQMrQlpjhNDQI2fe",
				ReplayText: "qDCxOHuaGNjcgDp5-rvJr",
				replayText: "qDCxOHuaGNjcgDp5-rvJr",
				ReplayButton: "_2KpvSaYm8FNb5KzZzf4-TO",
				replayButton: "_2KpvSaYm8FNb5KzZzf4-TO"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/SeekBar/index.m.less": function(e, t, s) {
			e.exports = {
				Thumb: "_2MDmJfq0z5K-d2xH--GnRU",
				thumb: "_2MDmJfq0z5K-d2xH--GnRU",
				ProgressBar: "_3fnsfWuIyofBJBBCbeOZzM",
				progressBar: "_3fnsfWuIyofBJBBCbeOZzM",
				Floating: "AZ2rAoFxu6aiCBbBq02Sr",
				floating: "AZ2rAoFxu6aiCBbBq02Sr",
				PreviewVideo: "V26VfIGfGxnmQGCoWYGY7",
				previewVideo: "V26VfIGfGxnmQGCoWYGY7",
				PreviewTime: "_2PInUKITfsesytaTfWfG42",
				previewTime: "_2PInUKITfsesytaTfWfG42",
				VideoSeekbar: "_3-Dc7BBLD7JWsyF3pV-rsH",
				videoSeekbar: "_3-Dc7BBLD7JWsyF3pV-rsH",
				Mainbar: "_2uVDwsKlmWPhYjwe_hYwKZ",
				mainbar: "_2uVDwsKlmWPhYjwe_hYwKZ",
				Bar: "_4UI_04IgDx06P4biEkiF3",
				bar: "_4UI_04IgDx06P4biEkiF3",
				Background: "_2uPlpBWBrO4n82P3YvBGF_",
				background: "_2uPlpBWBrO4n82P3YvBGF_",
				Lookahead: "l8jnP9bxmZRCAmhfPBTa1",
				lookahead: "l8jnP9bxmZRCAmhfPBTa1",
				Buffered: "_169ZVSyFxp9z4y1H0OYA7w",
				buffered: "_169ZVSyFxp9z4y1H0OYA7w",
				Progress: "_3LxsYVQvMOr6phpuWaScdt",
				progress: "_3LxsYVQvMOr6phpuWaScdt",
				Live: "YTPNvBfuKbdKUEJL6hPJT",
				live: "YTPNvBfuKbdKUEJL6hPJT"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/SettingControl/index.m.less": function(e, t, s) {
			e.exports = {
				SettingControlContainer: "_2XC4hSYLNzvTJ9n8Qx5t2E",
				settingControlContainer: "_2XC4hSYLNzvTJ9n8Qx5t2E",
				mIsActive: "KE4seaOPBFBF1jhkJyWzD",
				VideoSettingContainer: "C_R5GVVZDJEPfB_2ZVw_j",
				videoSettingContainer: "C_R5GVVZDJEPfB_2ZVw_j",
				AutoplayContainer: "_2BOpKj2--T_MqNo_ZMRxNG",
				autoplayContainer: "_2BOpKj2--T_MqNo_ZMRxNG",
				SetAutoplayButton: "_3FgC5gbpQJUntY23YtQ89Z",
				setAutoplayButton: "_3FgC5gbpQJUntY23YtQ89Z",
				VideoResolutionButton: "bAXkjkzl_SYFOHtU-04DK",
				videoResolutionButton: "bAXkjkzl_SYFOHtU-04DK",
				VideoResolutionContainer: "_3IZDbV1r5OQ2PtnsjF02A",
				videoResolutionContainer: "_3IZDbV1r5OQ2PtnsjF02A",
				AutoplayDescription: "_2NY4rl5z4S5VUOfEs8PdJ_",
				autoplayDescription: "_2NY4rl5z4S5VUOfEs8PdJ_",
				VideoResolutionDescription: "_1n_g7VROCpBaLnT_3bzFIL",
				videoResolutionDescription: "_1n_g7VROCpBaLnT_3bzFIL",
				VideoHd: "UyJedjQe5dUxEFYt6pF_G",
				videoHd: "UyJedjQe5dUxEFYt6pF_G"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/SnooButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "sm5fCodJsfJ3dJgv8LoJU",
				icon: "_1JylLL_Ux6Orq3W6Gpj0I5"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/Tooltip/index.m.less": function(e, t, s) {
			e.exports = {
				TooltipPopup: "_1BLNYd_poiSXsApjISxu_9",
				tooltipPopup: "_1BLNYd_poiSXsApjISxu_9",
				TooltipControl: "_7xWC34a6DkOCXgS96vOSO",
				tooltipControl: "_7xWC34a6DkOCXgS96vOSO",
				mNotDisable: "_2BgDJndeb40Gp_YvmIR_81"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/Tooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/components/HTML5StreamPlayer/Tooltip/index.m.less"),
				l = s.n(r),
				c = s("./src/lib/lessComponent.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
				}
				return s
			};
			const u = 8,
				p = c.a.span("TooltipPopup", l.a),
				m = e => {
					var {
						className: t,
						setRef: s,
						disable: i
					} = e, o = h(e, ["className", "setRef", "disable"]);
					return n.a.createElement("div", d({
						className: Object(a.a)(l.a.TooltipControl, t, {
							[l.a.mNotDisable]: !i
						}),
						ref: s
					}, o))
				};
			class g extends i.Component {
				constructor() {
					super(...arguments), this.onMouseEnter = () => {
						o.a.read(this.setPosition)
					}, this.setPosition = () => {
						const {
							container: e,
							tooltipContainer: t
						} = this;
						if (e && t && this.props.tooltip) {
							const s = t.getBoundingClientRect(),
								i = e.getBoundingClientRect(),
								n = e.parentNode.getBoundingClientRect(),
								a = n.left - i.left + u,
								r = n.right - i.left - s.width - u,
								l = i.width / 2 - s.width / 2;
							o.a.write(() => {
								t.style.left = Math.max(a, Math.min(l, r)) + "px"
							})
						}
					}
				}
				componentDidMount() {
					this.container && this.container.addEventListener("focusin", this.setPosition)
				}
				componentWillUnmount() {
					this.container && this.container.removeEventListener("focusin", this.setPosition)
				}
				render() {
					const {
						className: e,
						children: t,
						disable: s,
						tooltip: i
					} = this.props;
					return n.a.createElement(m, {
						onMouseEnter: this.onMouseEnter,
						setRef: e => this.container = e,
						className: e,
						disable: s
					}, n.a.createElement(p, {
						className: l.a.TooltipPopup,
						innerRef: e => this.tooltipContainer = e
					}, i), t)
				}
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/VideoContainer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2UrTEvz_DRsDezLCxNpGnZ",
				component: "_2UrTEvz_DRsDezLCxNpGnZ",
				mIsNotVisible: "ziid7jHsA37M8sq6Set2x"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/VideoOverlay/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3UEq__yL-82zX4EyuluREz",
				component: "_3UEq__yL-82zX4EyuluREz"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/VolumeControl/index.m.less": function(e, t, s) {
			e.exports = {
				VolumeControl: "_3IYkqm44eWg992tFnELzuW",
				volumeControl: "_3IYkqm44eWg992tFnELzuW",
				SliderBar: "_1iy-RNoDbjuTYxfwaLdPRO",
				sliderBar: "_1iy-RNoDbjuTYxfwaLdPRO",
				SliderTrack: "gzyVgIvE9b8wMmHefFf6i",
				sliderTrack: "gzyVgIvE9b8wMmHefFf6i",
				SliderProgress: "_2mdWr-OXgnLh-fdDgEEb6E",
				sliderProgress: "_2mdWr-OXgnLh-fdDgEEb6E",
				Live: "_2GyJbEWZL04QA2bbVtv_Qu",
				live: "_2GyJbEWZL04QA2bbVtv_Qu",
				SliderThumb: "_320cReGqgLhY1pPA-fM8Z7",
				sliderThumb: "_320cReGqgLhY1pPA-fM8Z7"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/index.m.less": function(e, t, s) {
			e.exports = {
				RedditVideoPlayerRoot: "_3QOPLw8PZipW3i8kDxod81",
				redditVideoPlayerRoot: "_3QOPLw8PZipW3i8kDxod81",
				RedditVideoPlayerRoot__Fullscreen: "_1znUHTb50VqdFqfWmai1ts",
				redditVideoPlayerRootFullscreen: "_1znUHTb50VqdFqfWmai1ts",
				HTML5StreamPlayer__VideoFullscreen: "_6p8buRs-LijHSXx1H4MGe",
				html5StreamPlayerVideoFullscreen: "_6p8buRs-LijHSXx1H4MGe",
				HTML5StreamPlayer: "zRGpGBNtA_hojI_RK9ouQ",
				html5StreamPlayer: "zRGpGBNtA_hojI_RK9ouQ",
				HTML5StreamPlayer__VideoRegular: "_1EQJpXY7ExS04odI1YBBlj",
				html5StreamPlayerVideoRegular: "_1EQJpXY7ExS04odI1YBBlj"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Ue
			}));
			var i = s("./node_modules/bowser/src/bowser.js"),
				n = s.n(i),
				a = s("./node_modules/lodash/debounce.js"),
				o = s.n(a),
				r = s("./node_modules/react/index.js"),
				l = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				h = s("./src/reddit/helpers/overlay/index.ts"),
				u = s("./src/config.ts"),
				p = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/combineRefs/index.tsx"),
				g = s("./src/lib/domUtils/index.ts");
			const f = () => {
					const e = navigator.userAgent || navigator.vendor || window.opera;
					return /android/i.test(e) ? "Android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "iOS" : "unknown"
				},
				v = () => "Android" === f() || "iOS" === f();
			var x = s("./src/lib/loadWithRetries/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				S = s("./src/reddit/actions/media.ts"),
				b = s("./src/reddit/actions/preferences.ts"),
				P = s("./src/reddit/actions/video.ts"),
				w = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				V = s("./src/reddit/components/PlayButton/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/constants/experiments.ts"),
				T = s("./src/reddit/constants/video.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				_ = s("./src/reddit/helpers/trackers/media.ts"),
				F = s("./src/reddit/selectors/experiments/video.ts"),
				L = s("./src/reddit/helpers/chooseVariant/index.ts"),
				B = s("./src/reddit/selectors/experiments/utils.ts");
			const N = Object(d.a)(e => Object(L.c)(e, {
					experimentName: C.Cc,
					experimentEligibilitySelector: L.a
				}), B.a),
				O = Object(d.a)(N, (function(e) {
					switch (e) {
						case C.Gc.BufferTwoSeconds:
							return 2;
						case C.Gc.BufferFiveSeconds:
							return 5;
						case C.Gc.BufferTenSeconds:
							return 10;
						default:
							return
					}
				}));
			var k = s("./src/reddit/selectors/media.ts"),
				R = s("./src/reddit/selectors/platform.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/selectors/video.ts"),
				A = s("./src/reddit/components/HTML5StreamPlayer/BlurImage/index.m.less"),
				U = s.n(A),
				D = s("./src/lib/lessComponent.tsx"),
				W = D.a.img("Component", U.a),
				z = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				G = s("./node_modules/fbt/lib/FbtPublic.js"),
				Y = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/icons/svgs/VideoCheckmark/index.tsx")),
				J = s("./src/reddit/components/HTML5StreamPlayer/SettingControl/index.m.less"),
				Z = s.n(J);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var Q = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
				}
				return s
			};
			const q = 0,
				X = [1080, 720],
				$ = [...X, 480, 360, 240, q],
				ee = e => l.a.createElement("button", {
					"aria-checked": e.isChecked,
					className: Z.a.SetAutoplayButton,
					onClick: e.onClick,
					role: "checkbox",
					tabIndex: 0
				}, l.a.createElement(Y.a, null), l.a.createElement("div", {
					className: Z.a.AutoplayDescription
				}, G.fbt._("Autoplay", null, {
					hk: "1x30w1"
				}))),
				te = e => {
					const {
						resolution: t,
						onClick: s,
						isChecked: i
					} = e;
					return l.a.createElement("button", {
						"aria-checked": i,
						className: Z.a.VideoResolutionButton,
						onClick: s,
						role: "radio",
						tabIndex: 0
					}, l.a.createElement(Y.a, null), l.a.createElement("div", {
						className: Z.a.VideoResolutionDescription
					}, t === q ? G.fbt._("Auto", null, {
						hk: "6zgZT"
					}) : l.a.createElement(l.a.Fragment, null, l.a.createElement("span", null, t, "p"), X.includes(t) && l.a.createElement("span", {
						className: Z.a.VideoHd
					}, " ", G.fbt._("HD", null, {
						hk: "2KjxjH"
					})))))
				},
				se = e => {
					var {
						isActive: t,
						className: s,
						innerRef: i
					} = e, n = Q(e, ["isActive", "className", "innerRef"]);
					return l.a.createElement("div", K({
						className: Object(p.a)(Z.a.SettingControlContainer, s, {
							[Z.a.mIsActive]: t
						}),
						ref: i
					}, n))
				};
			class ie extends r.Component {
				constructor() {
					super(...arguments), this.container = null, this.state = {
						autoplayPref: this.props.autoplayPref
					}, this.setContainerRef = e => this.container = e, this.setResolution = e => {
						this.props.setResolution(e)
					}, this.setAutoplay = e => {
						const t = !this.state.autoplayPref;
						this.setState({
							autoplayPref: t
						}), this.props.setAutoplay(t)
					}
				}
				componentDidMount() {
					if (this.container) {
						const e = this.container.querySelector("[tabindex]");
						e && e.focus()
					}
				}
				render() {
					const {
						active: e,
						bitrateInfo: t,
						className: s,
						isLoggedIn: i,
						resolution: n
					} = this.props, a = [...t.map(e => e.height), q];
					return l.a.createElement(se, {
						innerRef: this.setContainerRef,
						className: Object(p.a)(Z.a.VideoSettingContainer, s),
						isActive: e
					}, i && l.a.createElement("div", {
						className: Z.a.AutoplayContainer
					}, l.a.createElement(ee, {
						isChecked: this.state.autoplayPref,
						onClick: this.setAutoplay
					})), l.a.createElement("div", {
						className: Z.a.VideoResolutionContainer,
						role: "radiogroup"
					}, $.map((e, t) => a.includes(e) ? l.a.createElement(te, {
						key: t,
						resolution: e,
						onClick: () => this.setResolution(e),
						isChecked: n === e
					}) : null)))
				}
			}
			var ne = s("./src/reddit/components/HTML5StreamPlayer/Tooltip/index.tsx"),
				ae = s("./src/reddit/icons/svgs/VideoSetting/index.tsx"),
				oe = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				re = s.n(oe);
			const le = D.a.wrapped(ne.a, "TooltipControl", re.a),
				ce = D.a.wrapped(le, "ControlSetting", re.a);
			class de extends r.Component {
				render() {
					const {
						autoplayPref: e,
						bitrateInfo: t,
						isLoggedIn: s,
						resolution: i,
						setAutoplay: n,
						setResolution: a,
						settingChange: o,
						settingRef: r,
						toggleSetting: c
					} = this.props;
					return l.a.createElement(ce, {
						key: "setting",
						className: re.a.AnimatedSettingIconParent,
						tooltip: G.fbt._("Settings", null, {
							hk: "1AhVBJ"
						}),
						disable: o === Ue.Settings
					}, o === Ue.Settings && l.a.createElement(ie, {
						className: re.a.VideoSettingContainer,
						isLoggedIn: s,
						autoplayPref: e,
						active: o === Ue.Settings,
						ref: e => r(e),
						resolution: i,
						setResolution: a,
						setAutoplay: n,
						bitrateInfo: t
					}), l.a.createElement("button", {
						"aria-expanded": o === Ue.Settings,
						"aria-haspopup": !0,
						"aria-label": G.fbt._("Settings", null, {
							hk: "4jfIa6"
						}),
						className: re.a.button,
						onClick: c
					}, l.a.createElement(ae.a, {
						className: re.a.SettingIcon
					})))
				}
			}
			var he = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				ue = s("./src/reddit/selectors/telemetry.ts"),
				pe = s("./src/reddit/icons/svgs/VideoApplyNow/index.tsx"),
				me = s("./src/reddit/icons/svgs/VideoContactUs/index.tsx"),
				ge = s("./src/reddit/icons/svgs/VideoGetAQuote/index.tsx"),
				fe = s("./src/reddit/icons/svgs/VideoGetShowtimes/index.tsx"),
				ve = s("./src/reddit/icons/svgs/VideoInstall/index.tsx"),
				xe = s("./src/reddit/icons/svgs/VideoLearnMore/index.tsx"),
				ye = s("./src/reddit/icons/svgs/VideoPlayNow/index.tsx"),
				Se = s("./src/reddit/icons/svgs/VideoSeeMenu/index.tsx"),
				be = s("./src/reddit/icons/svgs/VideoShopNow/index.tsx"),
				Pe = s("./src/reddit/icons/svgs/VideoSignUp/index.tsx"),
				we = s("./src/reddit/icons/svgs/VideoViewMore/index.tsx"),
				Ve = s("./src/reddit/icons/svgs/VideoWatchNow/index.tsx"),
				Ee = s("./src/reddit/components/VideoCTA/index.m.less"),
				Ce = s.n(Ee);
			const Te = {
				"Apply Now": l.a.createElement(pe.a, null),
				"Contact Us": l.a.createElement(me.a, null),
				"Learn More": l.a.createElement(xe.a, null),
				"Get a Quote": l.a.createElement(ge.a, null),
				"Get Showtimes": l.a.createElement(fe.a, null),
				Install: l.a.createElement(ve.a, null),
				Download: l.a.createElement(ve.a, null),
				"Learn More": l.a.createElement(xe.a, null),
				"Play Now": l.a.createElement(ye.a, null),
				"See Menu": l.a.createElement(Se.a, null),
				"Shop Now": l.a.createElement(be.a, null),
				"Sign Up": l.a.createElement(Pe.a, null),
				"View More": l.a.createElement(we.a, null),
				"Watch Now": l.a.createElement(Ve.a, null)
			};
			var Me = Object(E.c)(e => {
					const {
						callToAction: t,
						postId: s,
						sendEvent: i,
						source: n
					} = e;
					return l.a.createElement(he.a, {
						className: Ce.a.ctaLink,
						onClick: e => i(e => Object.assign(Object.assign({}, Object(ue.defaults)(e)), {
							source: "videoplayer",
							action: "click",
							noun: "callToAction"
						})),
						href: n.url,
						isSponsored: !0,
						postId: s,
						source: n
					}, l.a.createElement("div", {
						className: Ce.a.ctaWrapper
					}, (e => Te[e = e || "Learn More"])(t), l.a.createElement("span", {
						className: Ce.a.ctaText
					}, t || "Learn More")))
				}),
				_e = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				Fe = s("./src/reddit/components/HTML5StreamPlayer/ReplayVideo/index.m.less"),
				Le = s.n(Fe);
			const Be = D.a.div("Centered", Le.a),
				Ne = D.a.div("EndedOverlay", Le.a),
				Oe = D.a.span("ReplayText", Le.a),
				ke = D.a.button("ReplayButton", Le.a);
			var Re = e => {
					const {
						onClick: t,
						source: s,
						callToAction: i,
						postId: n
					} = e;
					return l.a.createElement(Ne, {
						onClick: t
					}, l.a.createElement(Be, null, l.a.createElement(ke, null, l.a.createElement(_e.a, null), l.a.createElement(Oe, {
						className: "replay-video"
					}, G.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					}))), s && i && l.a.createElement(Me, {
						callToAction: i,
						postId: n,
						source: s
					})))
				},
				je = s("./src/reddit/components/HTML5StreamPlayer/VideoContainer/index.m.less"),
				Ie = s.n(je);

			function He() {
				return (He = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var Ae = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (s[i[n]] = e[i[n]])
				}
				return s
			};
			var Ue, De = e => {
					var {
						className: t,
						isVisible: s,
						setRef: i
					} = e, n = Ae(e, ["className", "isVisible", "setRef"]);
					return l.a.createElement("div", He({
						className: Object(p.a)(Ie.a.Component, t, {
							[Ie.a.mIsNotVisible]: !s
						}),
						ref: i
					}, n))
				},
				We = s("./src/reddit/components/HTML5StreamPlayer/VideoOverlay/index.m.less"),
				ze = s.n(We),
				Ge = D.a.div("Component", ze.a),
				Ye = s("./src/reddit/components/HTML5StreamPlayer/index.m.less"),
				Je = s.n(Ye);
			! function(e) {
				e[e.SeekBar = 0] = "SeekBar", e[e.Settings = 1] = "Settings", e[e.Volume = 2] = "Volume"
			}(Ue || (Ue = {}));
			const Ze = 3e3,
				Ke = 6e3,
				Qe = 100,
				qe = Object(c.b)(() => Object(d.c)({
					isLoggedIn: I.I,
					autoplayPref: I.b,
					currentTime: H.d,
					currentUser: I.i,
					inVideoNewVolumePolicyFeed: F.a,
					inVideoNewVolumePolicyTheatre: F.b,
					isMutedPreference: k.c,
					isOverlayOpen: R.i,
					loadTimes: H.g,
					metadata: H.i,
					mutedInFeed: H.j,
					postUrl: j.P,
					started: H.l,
					videoBufferTime: O,
					videoBufferVariant: N,
					volume: k.d
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						exitVideoFullscreen: () => e(P.u()),
						onLoadStarted: t => {
							s && e(P.q(s, t))
						},
						onMetadataReceived: t => e(P.E({
							metadata: t,
							postId: t.id
						})),
						onPlayable: t => {
							s && e(P.B(s, t))
						},
						onUpdateVideoTime: o()(t => {
							s && e(P.J({
								postId: s,
								time: t
							}))
						}, T.k, {
							maxWait: T.l
						}),
						openLightbox: t => {
							t ? e(Object(h.a)(t)) : y.c.withScope(e => {
								e.setExtra("info", {
									postId: s,
									postUrl: t
								}), y.c.captureMessage("Post lightbox cannot be opened with a falsy postUrl")
							})
						},
						setPlaying: t => {
							s && e(P.I({
								postId: s,
								isPlaying: t
							}))
						},
						setAutoplayPref: t => e(b.s(t)),
						setVideoFullscreen: () => {
							s && e(P.G(s))
						},
						setVideoMuted: (t, i) => e(S.g(t, i, s)),
						setVideoVolume: t => e(S.h(t)),
						onWatchedPercent: t => {
							s && e(P.M(t, s))
						},
						onWatchedSeconds: t => {
							s && e(P.N(t, s))
						},
						onUpdateContinuousViewStartTime: t => {
							s && e(P.t({
								postId: s,
								time: t
							}))
						},
						onVideoStarted: () => {
							s && e(P.L(s))
						},
						setMutedInFeed: t => e(P.H(t))
					}
				});
			class Xe extends r.Component {
				constructor(e) {
					var t;
					let i;
					super(e), t = this, this.percentagePixelsFired = {
						[T.b]: !1,
						[T.c]: !1,
						[T.d]: !1,
						[T.e]: !1,
						[T.a]: !1
					}, this.timePixelsFired = {
						[T.g]: !1,
						[T.h]: !1,
						[T.f]: !1
					}, this.sendEvent = function(e, s) {
						let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						const n = t.HTML5StreamPlayerVideo;
						if (n && null != t.props.postId) {
							const n = i ? _.b(t.props.postId, e, s) : _.a(t.props.postId, e, s);
							t.props.sendEvent(n)
						}
					}, this.getVideoQualityList = () => {
						if (this.dashPlayer) {
							const e = this.dashPlayer.getBitrateInfoListFor("video");
							this.setState({
								bitrateInfo: e
							})
						}
					}, this.getAudioInfo = () => {
						if (this.props.isGif) this.setState({
							hasAudio: !1
						});
						else if (this.dashPlayer) {
							const e = this.dashPlayer.getActiveStream(),
								t = !!e && e.hasMedia("audio");
							this.setState({
								hasAudio: t
							})
						}
					}, this.handleKeyDown = e => {
						this.updateUsingKeyStatus(e)
					}, this.handleKeyUp = e => {
						this.updateUsingKeyStatus(e)
					}, this.handleMouseEnter = e => {
						const t = this.HTML5StreamPlayerVideo;
						t && this.controlBarApi && this.controlBarApi.setCurrentTime(t.currentTime), this.resetControlBarFadeTimer()
					}, this.handleMouseDown = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						s && s.container && s.container.contains(e.target) ? (this.setState({
							settingChange: Ue.Volume
						}), s.handleMouseDown(e)) : t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: Ue.SeekBar
						}), t.handleMouseDown(e)), this.state.usingKeys && this.setState({
							usingKeys: !1
						})
					}, this.handleMouseMove = e => {
						const {
							controlBar: t,
							seekBar: s,
							volumeControl: i
						} = this;
						switch (this.setState({
							hasHovered: !0
						}), t && t.contains(e.target) ? this.clearControlBarFadeTimer() : this.resetControlBarFadeTimer(), this.state.settingChange) {
							case Ue.SeekBar:
								s && s.handleMouseMove(e);
								break;
							case Ue.Volume:
								i && i.handleMouseMove(e);
								break;
							case Ue.Settings:
						}
					}, this.handleMouseUp = e => {
						e.stopPropagation();
						const {
							controlBar: t,
							seekBar: s,
							volumeControl: i
						} = this;
						switch (this.state.settingChange) {
							case Ue.SeekBar:
								if (s) {
									this.setState({
										ignoreUnderrunsUntil: Date.now() + Qe
									}), s.handleMouseUp(e), this.sendEvent("click", "seek");
									const t = this.HTML5StreamPlayerVideo;
									this.state.videoEnded && t && t.currentTime !== t.duration && this.playVideo()
								}
								break;
							case Ue.Volume:
								i && (i.handleMouseUp(e), this.sendEvent("click", "volume"));
								break;
							case Ue.Settings:
								if (t && t.contains(e.target)) return;
								break;
							default:
								if (t && !t.contains(e.target)) {
									const {
										playerClickPlay: t = !0
									} = this.props;
									if (this.props.trackPostClick && this.props.trackPostClick("media")(), this.resetControlBarFadeTimer(), this.state.videoEnded) return;
									this.props.isGif && this.props.isListing && !this.state.videoPaused ? this.props.openLightbox(this.props.postUrl) : !t && this.state.videoPaused || this.playPauseVideo(e)
								}
						}
						this.setState({
							settingChange: void 0
						})
					}, this.handleMouseLeave = e => {
						switch (this.clearControlBarFadeTimer(), this.setState({
							hideControlBar: !0
						}), this.state.settingChange) {
							case Ue.SeekBar:
							case Ue.Volume:
							case Ue.Settings:
							default:
								this.setState({
									settingChange: void 0
								})
						}
					}, this.handleClick = e => {
						e.stopPropagation()
					}, this.setContainerRef = e => this.HTML5StreamPlayerContainer = e, this.setControlBarRef = e => this.controlBar = e, this.setControlBarApi = e => this.controlBarApi = e, this.setVolumeRef = e => this.volumeControl = e, this.setSeekBarRef = e => this.seekBar = e, this.setSettingRef = e => this.settingControl = e, this.onCanPlay = () => {
						if (this.HTML5StreamPlayerVideo && !this.state.videoLoaded) {
							if (this.setState({
									videoLoaded: !0,
									videoWaiting: !1
								}), this.props.playFromStart) return this.setVideoPos(0), void(this.isUnobscured && this.playVideo());
							this.isUnobscured && (this.props.autoPlay && (this.props.autoplayPref || this.props.shouldIgnoreAutoplayPref) || this.props.isExpando) ? this.playVideo() : this.pauseVideo()
						}
					}, this.clearControlBarFadeTimer = () => {
						const {
							controlBarFadeTimer: e
						} = this;
						e && clearTimeout(e)
					}, this.resetControlBarFadeTimer = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ze;
						t.clearControlBarFadeTimer(), t.setState({
							hideControlBar: !1
						}), t.controlBarFadeTimer = window.setTimeout(() => {
							t.setState({
								hideControlBar: !0
							})
						}, e)
					}, this.exitHandler = () => {
						this.state.videoFullScreen && !Object(g.b)() && this.exitFullScreen()
					}, this.playPauseVideo = e => {
						const t = this.HTML5StreamPlayerVideo;
						t && (t.paused && this.state.videoPaused ? (this.playVideo(), this.sendEvent("click", "play"), this.setState({
							videoManualPaused: !1
						})) : (this.pauseVideo(), this.sendEvent("click", "pause"), this.setState({
							videoManualPaused: !0
						})))
					}, this.playVideo = async () => {
						const e = this.HTML5StreamPlayerVideo;
						if (e) try {
							await e.play(), e.currentTime < 1 && this.props.onVideoStarted(), this.setVideoMute(this.state.isMuted, !1), this.props.setPlaying(!0), this.setState({
								videoEnded: !1
							})
						} catch (t) {}
					}, this.pauseVideo = () => {
						const e = this.HTML5StreamPlayerVideo;
						e && (e.pause(), this.props.setPlaying(!1), this.setState({
							videoPaused: !0
						}))
					}, this.resetVideo = e => {
						this.isUnobscured && this.state.videoEnded && (this.playVideo(), this.sendEvent("click", "replay"), this.setState({
							ignoreUnderrunsUntil: Date.now() + Qe,
							videoEnded: !1,
							videoManualPaused: !1
						}))
					}, this.exitFullScreen = () => {
						document.exitFullScreen ? document.exitFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(), this.setState({
							videoFullScreen: !1
						}), null != this.props.postId && (this.sendEvent("change", "pagetype", !0), this.props.exitVideoFullscreen())
					}, this.enterFullScreen = () => {
						const e = this.HTML5StreamPlayerContainer;
						e && (e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen && e.mozRequestFullScreen()), this.setState({
							videoFullScreen: !0
						}), this.sendEvent("click", "fullscreen"), null != this.props.postId && (this.sendEvent("change", "pagetype", !0), this.props.setVideoFullscreen())
					}, this.setVolume = (e, t) => {
						const s = this.HTML5StreamPlayerVideo;
						s && (t ? 0 !== e ? (this.props.setVideoVolume(e), this.props.inVideoNewVolumePolicyFeed && this.props.setMutedInFeed(!1)) : this.props.inVideoNewVolumePolicyFeed && this.props.setMutedInFeed(!0) : (s.volume = e, e || this.state.isMuted ? e && this.state.isMuted && this.setVideoMute(!1, !0) : this.setVideoMute(!0, !0)))
					}, this.toggleMuteVideo = e => {
						if (e.stopPropagation(), this.HTML5StreamPlayerVideo) {
							const e = !this.state.isMuted;
							this.setVideoMute(e, !0), this.props.inVideoNewVolumePolicyFeed && this.props.setMutedInFeed(e);
							const t = e ? "mute" : "unmute";
							this.sendEvent("click", t)
						}
					}, this.setVideoMute = (e, t) => {
						const s = this.HTML5StreamPlayerVideo;
						this.setState({
							isMuted: e
						}), this.props.setVideoMuted(e, t), s && (s.muted = e, e || (s.volume = this.props.volume))
					}, this.clickSnoo = e => {
						this.state.videoFullScreen && this.exitFullScreen(), this.sendEvent("click", "snoo")
					}, this.setAutoplay = e => {
						this.props.setAutoplayPref(e), e ? this.sendEvent("click", "video_autoplay_on") : this.sendEvent("click", "video_autoplay_off")
					}, this.setResolution = e => {
						const {
							bitrateInfo: t
						} = this.state;
						if (t && this.dashPlayer) {
							if (e === q) this.dashPlayer.setAutoSwitchQualityFor("video", !0);
							else {
								const s = t.findIndex(t => t.height === e);
								this.dashPlayer.setAutoSwitchQualityFor("video", !1), this.dashPlayer.setQualityFor("video", s)
							}
							this.setState({
								resolution: e
							})
						}
					}, this.toggleSetting = e => {
						this.state.settingChange === Ue.Settings ? this.setState({
							settingChange: void 0
						}) : this.setState({
							settingChange: Ue.Settings
						})
					}, this.setVideoPos = e => {
						const t = this.HTML5StreamPlayerVideo;
						t && (this.controlBarApi && !this.state.hideControlBar && this.controlBarApi.setCurrentTime(e), t.currentTime = e)
					}, this.updateTime = () => {
						const e = performance.now(),
							t = this.HTML5StreamPlayerVideo;
						if (t) {
							let s = this.state.maxTimeServed;
							if (this.state.lastUpdate && !this.state.videoPaused && (s += e - this.state.lastUpdate), t.currentTime && t.duration) {
								let i = !1;
								this.triggerAdWatchedPixels(t.currentTime, t.duration, s / 1e3), t.currentTime >= t.duration && (this.props.isGif || (i = !0, this.pauseVideo())), this.controlBarApi && !this.state.hideControlBar && this.controlBarApi.setCurrentTime(t.currentTime), this.setState({
									videoEnded: i,
									maxTimeServed: s,
									lastUpdate: e
								})
							}
							if (this.props.postId) {
								const e = {
									currentTime: 1e3 * t.currentTime,
									maxTimeServed: s
								};
								this.props.onUpdateVideoTime(e)
							}
						}
					}, this.triggerAdWatchedPixels = (e, t, s) => {
						const i = this.getWatchedPercentRange(e, t);
						this.triggerPercentagePixels(i);
						s / t >= .95 && this.triggerTimeWatchedPixels(T.f), this.triggerTimeWatchedPixels(s)
					}, this.updateContinuousStartTime = e => {
						this.props.onUpdateContinuousViewStartTime(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e)
					}, this.onPlaying = e => {
						const t = performance.now();
						this.props.metadata || this.sendTransformedMetadata(e), this.setState({
							videoWaiting: !1,
							videoPaused: !1,
							lastUpdate: t
						})
					}, this.sendTransformedMetadata = e => {
						null != this.props.postId && this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						}), this.setState({
							totalTime: e.target.duration
						})
					}, this.videoRef = e => {
						this.HTML5StreamPlayerVideo = e
					}, Xe.dashjs || (Xe.dashjs = Object(x.a)(() => s.e("vendors~dashjs").then(s.t.bind(null, "./node_modules/dashjs/build/es5/index.js", 7)))), i = this.props.inVideoNewVolumePolicyFeed && this.props.isListing ? e.mutedInFeed : !(this.props.inVideoNewVolumePolicyTheatre && !this.props.isListing) && (e.isListing || e.isMutedPreference), this.state = {
						bitrateInfo: [],
						hasAudio: !1,
						hasHovered: !1,
						hideControlBar: !0,
						isMuted: i,
						lastUpdate: null,
						ignoreUnderrunsUntil: 0,
						maxTimeServed: 0,
						resolution: q,
						scrubPosition: 0,
						settingChange: void 0,
						settingSeekBar: !1,
						settingVolume: !1,
						thumbPosition: 0,
						totalTime: 0,
						videoEnded: !1,
						videoFullScreen: !1,
						videoInView: !1,
						videoLoaded: !1,
						videoManualPaused: !1,
						videoPaused: !e.autoPlay,
						videoScrollPaused: !0,
						videoWaiting: !0,
						usingKeys: !1
					}, this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
				}
				get isUnobscured() {
					return this.props.isOverlay || !this.props.isOverlayOpen
				}
				componentDidMount() {
					Xe.dashjs.then(e => {
						const t = this.HTML5StreamPlayerVideo,
							s = this.props.mpegDashSource;
						if (!t || !s) return;
						const i = this.props.videoBufferVariant;
						this.dashPlayer = e.MediaPlayer().create(), this.props.onDashCreate && this.props.onDashCreate(this.dashPlayer), this.dashPlayer.getDebug().setLogToBrowserConsole(!1), this.dashPlayer.extend("RequestModifier", (function() {
							return {
								modifyRequestHeader(e) {
									const {
										appName: t
									} = u.a;
									let s = "".concat("Reddit/Version Build", " ").concat("98bda2c-production", " ").concat(t);
									return i && (s += " [".concat(C.Cc, ":").concat(i, "]")), e.setRequestHeader("X-Reddit-Agent", s), e
								},
								modifyRequestURL: e => e
							}
						}), !1);
						try {
							const {
								videoBufferTime: e
							} = this.props;
							this.dashPlayer.initialize(t, s, t.autoplay), e && this.setBufferTime(e), this.dashPlayer.setFastSwitchEnabled(!0), this.dashPlayer.setInitialBitrateFor("video", 999999999), this.dashPlayer.setAutoSwitchQualityFor("video", !0)
						} catch (n) {
							return
						}
						null != this.props.postId && this.props.onLoadStarted(performance.now()), this.dashPlayer.on(e.MediaPlayer.events.STREAM_INITIALIZED, () => {
							this.getVideoQualityList(), this.getAudioInfo(), null != this.props.postId && this.props.onPlayable(performance.now()), this.controlBarApi && !this.state.hideControlBar && this.controlBarApi.setCurrentTime(0)
						}), this.dashPlayer.on(e.MediaPlayer.events.BUFFER_EMPTY, e => {
							if (null != this.props.postId && Date.now() > this.state.ignoreUnderrunsUntil) {
								const e = _.c(this.props.postId);
								this.props.sendEvent(e), this.setState({
									ignoreUnderrunsUntil: Date.now() + Qe
								})
							}
						})
					});
					const e = this.HTML5StreamPlayerVideo;
					document.addEventListener("webkitfullscreenchange", this.exitHandler, !1), document.addEventListener("fullscreenchange", this.exitHandler, !1), document.addEventListener("mozfullscreenchange", this.exitHandler, !1), document.addEventListener("MSFullscreenChange", this.exitHandler, !1), e && (v() ? e.play() : n.a.safari && !this.props.mpegDashSource && setTimeout(async () => {
						try {
							await e.play()
						} catch (t) {} finally {
							e.pause()
						}
					}), e.oncanplay = () => this.onCanPlay(), e.onprogress = () => this.setBuffered(), e.onseeked = () => this.setState({
						videoWaiting: !1
					}), e.onwaiting = () => this.setState({
						videoWaiting: !0
					}), e.onplaying = e => this.onPlaying(e), e.onloadeddata = e => this.onVideoPlayable(e), e.onloadedmetadata = e => this.sendTransformedMetadata(e), this.props.currentTime && (e.currentTime = this.props.currentTime))
				}
				componentDidUpdate(e) {
					this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef)), this.props.inVideoNewVolumePolicyFeed && this.props.isListing && this.props.mutedInFeed !== e.mutedInFeed && this.state.videoPaused && this.setState({
						isMuted: this.props.mutedInFeed
					})
				}
				resetMediaPlayer() {
					this.dashPlayer && (this.dashPlayer.reset(), this.props.onDashDestroy && this.props.onDashDestroy(this.dashPlayer))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.exitHandler, !1), document.removeEventListener("fullscreenchange", this.exitHandler, !1), document.removeEventListener("mozfullscreenchange", this.exitHandler, !1), document.removeEventListener("MSFullscreenChange", this.exitHandler, !1), this.resetMediaPlayer(), this.clearControlBarFadeTimer(), null == this.props.postId || this.state.videoScrollPaused || this.sendEvent("served", "video", !0)
				}
				shouldComponentUpdate(e, t) {
					const s = !!this.props.isListing && !this.props.isOverlayOpen && e.isOverlayOpen,
						i = !!this.props.isListing && this.props.isOverlayOpen && !e.isOverlayOpen,
						n = this.props.isOverlayOpen !== e.isOverlayOpen,
						a = this.props.inVideoNewVolumePolicyFeed && !!this.props.isListing && e.mutedInFeed !== this.props.mutedInFeed;
					return t.videoFullScreen !== this.state.videoFullScreen || t.videoPaused !== this.state.videoPaused || t.isMuted !== this.state.isMuted || t.hideControlBar !== this.state.hideControlBar || t.settingChange !== this.state.settingChange || t.videoScrollPaused !== this.state.videoScrollPaused || t.videoWaiting !== this.state.videoWaiting || e.shouldPause !== this.props.shouldPause || e.shouldStop !== this.props.shouldStop || t.videoLoaded !== this.state.videoLoaded || t.usingKeys !== this.state.usingKeys || t.resolution !== this.state.resolution || s || i || n || a
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.HTML5StreamPlayerVideo,
						s = t && !t.paused,
						i = !e.shouldStop && this.props.shouldStop,
						n = e.shouldStop && !this.props.shouldStop,
						a = !e.shouldPause && this.props.shouldPause,
						o = e.shouldPause && !this.props.shouldPause,
						r = !this.props.shouldPause && !this.props.shouldStop,
						l = !e.isOverlay && !this.props.isOverlay,
						c = e.isOverlayOpen && !this.props.isOverlayOpen,
						d = !e.isOverlayOpen && this.props.isOverlayOpen,
						h = (r || s) && l && c,
						u = r && l && d,
						p = e.isOverlay || !e.isOverlayOpen;
					if (i && (this.setState({
							videoScrollPaused: !1
						}), this.sendEvent("view", "autoplay")), (a || u) && (!this.state.videoManualPaused && t && t.currentTime < t.duration && (e.currentTime && (t.currentTime = e.currentTime), p && (this.props.autoplayPref || this.props.shouldIgnoreAutoplayPref) && this.playVideo()), u && this.sendEvent("change", "pagetype", !0)), (o || h) && (this.pauseVideo(), h && this.sendEvent("change", "pagetype", !0)), n && (this.setState({
							videoScrollPaused: !0
						}), this.sendEvent("served", "video", !0), this.state.videoEnded || (this.sendEvent("scroll", "pause"), this.props.inVideoNewVolumePolicyFeed && this.props.isListing || this.setVideoMute(!0, !1))), e.mpegDashSource && this.props.mpegDashSource !== e.mpegDashSource) {
						const {
							dashPlayer: t
						} = this;
						try {
							t.setAutoPlay(p && e.autoPlay), t.attachSource(e.mpegDashSource)
						} catch (m) {}
					}
				}
				updateUsingKeyStatus(e) {
					if (0 !== e.location) return;
					this.state.usingKeys || this.setState({
						usingKeys: !0
					});
					let t = Ke;
					this.state.settingChange === Ue.Settings && (t = 5 * Ke), this.resetControlBarFadeTimer(t)
				}
				setBuffered() {
					const e = this.HTML5StreamPlayerVideo;
					if (e && this.controlBarApi) {
						const t = [];
						for (let s = 0; s < e.buffered.length; s++) {
							const i = {
								start: e.buffered.start(s) / e.duration * 100,
								end: e.buffered.end(s) / e.duration * 100
							};
							t.push(i)
						}
						this.controlBarApi.setBufferedRanges(t)
					}
				}
				setBufferTime(e) {
					this.dashPlayer && (this.dashPlayer.setBufferTimeAtTopQuality(e), this.dashPlayer.setBufferTimeAtTopQualityLongForm(e), this.dashPlayer.setStableBufferTime(e))
				}
				getWatchedPercentRange(e, t) {
					const s = e / t;
					return 1 === s ? T.a : s >= .95 ? T.e : s >= .75 ? T.d : s >= .5 ? T.c : s >= .25 ? T.b : 0
				}
				triggerPercentagePixels(e) {
					T.i.forEach(t => {
						t <= e && !this.percentagePixelsFired[t] && (this.props.onWatchedPercent(t), this.percentagePixelsFired[t] = !0)
					})
				}
				triggerTimeWatchedPixels(e) {
					T.j.forEach(t => {
						t <= e && !this.timePixelsFired[t] && (this.props.onWatchedSeconds(t), this.timePixelsFired[t] = !0)
					})
				}
				combineExternalVideoRef(e) {
					return e ? Object(m.a)(this.videoRef, e) : this.videoRef
				}
				render() {
					const {
						className: e,
						hideUntilLoaded: t,
						playerClickPlay: s = !0,
						showControlBar: i = !0,
						showSettingsIcon: n = !0
					} = this.props, {
						hasAudio: a,
						hasHovered: o,
						hideControlBar: r,
						isMuted: c,
						settingChange: d,
						videoEnded: h,
						videoLoaded: u
					} = this.state, m = this.HTML5StreamPlayerVideo, g = d === Ue.SeekBar, f = u || !t, v = f && m && 0 !== m.currentTime, x = !o && c, y = h && !g, S = Object.assign(Object.assign({}, this.props), {
						bitrateInfo: this.state.bitrateInfo,
						resolution: this.state.resolution,
						setAutoplay: this.setAutoplay,
						setResolution: this.setResolution,
						settingChange: d,
						settingRef: this.setSettingRef,
						toggleSetting: this.toggleSetting
					});
					return l.a.createElement(De, {
						setRef: this.setContainerRef,
						className: Object(p.a)(e, this.state.videoFullScreen ? Je.a.RedditVideoPlayerRoot__Fullscreen : Je.a.RedditVideoPlayerRoot, this.state.usingKeys ? "using-keys" : null),
						isVisible: f,
						onClick: this.handleClick,
						onKeyDown: this.handleKeyDown,
						onKeyUp: this.handleKeyUp,
						onMouseDown: this.handleMouseDown,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave,
						onMouseMove: this.handleMouseMove,
						onMouseUp: this.handleMouseUp
					}, this.props.blurImageSrc && l.a.createElement(W, {
						src: this.props.blurImageSrc
					}), l.a.createElement("video", {
						poster: this.props.posterUrl,
						loop: this.props.isGif,
						autoPlay: this.isUnobscured && this.props.autoPlay,
						muted: c,
						onTimeUpdate: this.updateTime,
						preload: "metadata",
						ref: this.combinedVideoRefs,
						className: this.state.videoFullScreen ? Je.a.HTML5StreamPlayer__VideoFullscreen : Je.a.HTML5StreamPlayer__VideoRegular
					}, this.props.hlsSource && l.a.createElement("source", {
						src: this.props.hlsSource,
						type: "application/vnd.apple.mpegURL"
					}), this.props.otherSource && l.a.createElement("source", {
						src: this.props.otherSource
					})), y ? l.a.createElement(Re, {
						onClick: this.resetVideo,
						postId: this.props.postId,
						source: this.props.callToActionSource,
						callToAction: this.props.callToActionText
					}) : l.a.createElement(Ge, null), this.state.videoWaiting ? v && l.a.createElement(w.a, null) : this.state.videoPaused && !y && l.a.createElement(V.a, {
						onClick: s ? void 0 : this.playPauseVideo
					}), i && l.a.createElement(z.a, {
						clickSnoo: this.clickSnoo,
						controlBarRef: this.setControlBarRef,
						currentTime: m ? m.currentTime : 0,
						hasAudio: a,
						updateContinuousStartTime: this.updateContinuousStartTime,
						enterFullScreen: this.enterFullScreen,
						exitFullScreen: this.exitFullScreen,
						hideControlBar: r,
						isFullScreen: this.state.videoFullScreen,
						isListing: this.props.isListing,
						isMuted: this.state.isMuted,
						isPaused: this.state.videoPaused,
						playPauseVideo: this.playPauseVideo,
						postUrl: this.props.postUrl,
						ref: this.setControlBarApi,
						settingsButton: l.a.createElement(de, S),
						scrubberThumbSource: this.props.scrubberThumbSource,
						seekBarRef: this.setSeekBarRef,
						settingChange: d,
						setVideoPosition: this.setVideoPos,
						setVolume: this.setVolume,
						showSettingsIcon: n,
						showVolumeIcon: x,
						toggleMute: this.toggleMuteVideo,
						totalTime: this.state.totalTime,
						volume: this.props.volume,
						volumeRef: this.setVolumeRef
					}))
				}
			}
			t.b = qe(Object(E.c)(Object(M.b)(Xe)))
		},
		"./src/reddit/components/Media/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_1Wd26c2ichqUxeZVJStEJT"
			}
		},
		"./src/reddit/components/Media/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/config.ts"),
				o = s("./src/reddit/components/Media/LoadingIcon/index.m.less"),
				r = s.n(o);
			t.a = () => n.a.createElement("img", {
				className: r.a.image,
				src: "".concat(a.a.assetPath, "/img/loading.gif")
			})
		},
		"./src/reddit/components/PlayButton/index.m.less": function(e, t, s) {
			e.exports = {
				PlayIcon: "_2XQ3ZY6qCbEm9_WtvLLFru",
				playIcon: "_2XQ3ZY6qCbEm9_WtvLLFru",
				PlayContainer: "vLH0XV-l8Y4mNGUvw4HHy",
				playContainer: "vLH0XV-l8Y4mNGUvw4HHy"
			}
		},
		"./src/reddit/components/PlayButton/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/icons/svgs/VideoNewPlayButton/index.tsx"),
				r = s("./src/reddit/components/PlayButton/index.m.less"),
				l = s.n(r);
			const c = a.a.wrapped(o.a, "PlayIcon", l.a),
				d = a.a.div("PlayContainer", l.a);
			t.a = e => n.a.createElement(d, {
				className: e.className,
				onClick: e.onClick
			}, n.a.createElement(c, {
				className: e.playIconClassName
			}))
		},
		"./src/reddit/components/VideoCTA/index.m.less": function(e, t, s) {
			e.exports = {
				ctaLink: "_2FH_xFiDZCFtYKBJAmSpeD",
				ctaText: "_3uyGw8SwblJ37jvDUd-0Z_",
				ctaWrapper: "_267SSeon8aryjeoh4UclX8"
			}
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1x0QJr7iXMkiGpOnQbAvYN"
			}
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoApplyNow/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoCheckmark/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 77.06 60"
			}, n.a.createElement("g", {
				fill: "none"
			}, n.a.createElement("path", {
				d: "M75.17,11.35l-44.9,46.7a6.17,6.17,0,0,1-9,0L1.88,37.55a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l15,15.8L66.27,2a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,75.17,11.35Z",
				fill: "#FFFFFF"
			})))
		},
		"./src/reddit/icons/svgs/VideoCollapse/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M14.41,13H17a1,1,0,0,0,0-2H12a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14.41l3.24,3.24a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M8,2A1,1,0,0,0,7,3V5.59L3.76,2.34A1,1,0,0,0,2.34,3.76L5.59,7H3A1,1,0,0,0,3,9H8A1,1,0,0,0,9,8V3A1,1,0,0,0,8,2Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11XLCF2uLCEj35_lDddpNT"
			}
		},
		"./src/reddit/icons/svgs/VideoContactUs/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoContactUs/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M34.5 23.7s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1-.1-.1-.1-.2-.1l-15.4-7.2c-.1-.1-.3-.1-.5 0-.1.1-.2.2-.2.4v4.3c0 .2.2.4.4.5l10.3 1.9H18.2c-.1 0-.2 0-.2.1L15.6 25c-.2.1-.3.3-.2.6.1.2.2.3.5.3l2.4-.2v5.5c0 .2.1.3.2.4.1 0 .2.1.3.1h.2l15.4-7.2s.1 0 .1-.1c0 0 .1 0 .1-.1.1-.1.1-.2.1-.3-.1-.1-.2-.2-.2-.3"
			})))
		},
		"./src/reddit/icons/svgs/VideoExpand/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M9,3A1,1,0,0,0,8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V5.41L7.24,8.66A1,1,0,0,0,8.66,7.24L5.41,4H8A1,1,0,0,0,9,3Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M17,11a1,1,0,0,0-1,1v2.59l-3.24-3.24a1,1,0,0,0-1.41,1.41L14.59,16H12a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V12A1,1,0,0,0,17,11Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "Ui8OEQfWnkN9BO2o-qSXV"
			}
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoGetAQuote/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M19.5 17.3h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5zm8.5 0h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5z"
			})))
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "o2NVVhdZrQ3VeGMHO8aA0"
			}
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoInstall/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3DFi9BDKHWFWnty75sJhyJ"
			}
		},
		"./src/reddit/icons/svgs/VideoInstall/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoInstall/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M30.7 25c.5 0 1 .4 1 1v2.9c0 1.6-1.3 2.9-2.9 2.9h-9.6c-1.6 0-2.9-1.3-2.9-2.9v-3c0-.5.4-1 1-1s1 .4 1 1v2.9c0 .5.4 1 1 1h9.6c.5 0 1-.4 1-1v-2.9c-.1-.5.3-.9.8-.9zm-7.4 1.6l-2.9-2.9c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.2 1.3v-6.3c0-.5.4-1 1-1 .5 0 1 .4 1 1v6.3l1.2-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-2.9 2.8c-.1.1-.2.2-.3.2-.2.1-.3.1-.4.1-.1 0-.2 0-.4-.1-.1 0-.2-.1-.3-.2z"
			})))
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1PkP2GybP9Bh6mN4gmbPN4"
			}
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoLearnMore/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M25.4 24c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4zm5.3 0c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4zm-10.5 0c0 .8-.6 1.4-1.4 1.4s-1.5-.6-1.5-1.4.6-1.4 1.4-1.4 1.5.6 1.5 1.4z"
			})))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "eI6Ep6BNFA5DZjPWNVb4O"
			}
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M33.1 22.2l-11.5-6.7c-.3-.2-.7-.2-1 0-.3.2-.4.5-.4.8v13.4c0 .3.2.7.5.8.1.1.3.1.5.1s.3 0 .5-.1l11.5-6.7c.3-.2.5-.5.5-.8-.1-.3-.3-.6-.6-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoPause/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("rect", {
				x: "11",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}), n.a.createElement("rect", {
				x: "3",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlay/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M18.5,9.14l-12-7A1,1,0,0,0,5,3V17a1,1,0,0,0,1.5.86l12-7a1,1,0,0,0,0-1.73Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1EfHCA6m0dIgLYzGW2aor1"
			}
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoPlayNow/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M32.5,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4 C33.8,22.8,33.2,23.5,32.5,23.5 M29.8,26.2c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C31.1,25.6,30.5,26.2,29.8,26.2 M27.1,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C28.4,22.8,27.8,23.5,27.1,23.5 M21.6,23.1H20v1.7c0,0.6-0.5,1-1,1s-1-0.5-1-1v-1.7h-1.7c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1H18 v-1.7c0-0.6,0.5-1,1-1s1,0.5,1,1v1.7h1.7c0.6,0,1,0.5,1,1C22.7,22.7,22.2,23.1,21.6,23.1 M29.8,18c0.7,0,1.4,0.6,1.4,1.4 c0,0.7-0.6,1.4-1.4,1.4c-0.7,0-1.4-0.6-1.4-1.4C28.4,18.6,29,18,29.8,18 M37.3,28.1l-1.7-9.5c-0.4-1.9-2-3.3-4-3.3H17.1 c-2,0-3.6,1.4-4,3.3l-1.7,9.5c-0.2,1.2,0.1,2.4,0.9,3.3c0.8,0.9,1.9,1.5,3.1,1.5h0.2c1.8,0,3.3-1.1,3.9-2.8l0.4-1.3h8.9 l0.4,1.3c0.6,1.7,2.1,2.8,3.9,2.8h0.2c1.2,0,2.3-0.5,3.1-1.5C37.2,30.5,37.5,29.3,37.3,28.1"
			})))
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "G2_89gx6TwcALtRI4k7hc"
			}
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoSeeMenu/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M29.3 20.2h-5.8c-.2 0-.5-.3-.5-.5 0-.3.2-.5.5-.5h5.8c.3 0 .5.2.5.5 0 .2-.3.5-.5.5zm0 4.3h-5.8c-.2 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-5.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm-8.2-8.2c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm0 4.4c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v2zm0 4.3c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm8.7-13H18.2c-1.1 0-1.9.9-1.9 1.9v11.5c0 1.1.9 1.9 1.9 1.9h11.5c1.1 0 1.9-.9 1.9-1.9V18.2c.1-1-.8-1.9-1.8-1.9z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSetting/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				fill: "#fff",
				d: "M18.5,8.94,16.32,8.5h0a6.46,6.46,0,0,0-.79-1.9h0l1.23-1.85a1.08,1.08,0,0,0-1.5-1.5L13.41,4.47h0a6.45,6.45,0,0,0-1.9-.79h0L11.06,1.5a1.08,1.08,0,0,0-2.12,0L8.5,3.68h0a6.45,6.45,0,0,0-1.9.79h0L4.74,3.24a1.08,1.08,0,0,0-1.5,1.5L4.47,6.59h0a6.45,6.45,0,0,0-.79,1.9h0L1.5,8.94a1.08,1.08,0,0,0,0,2.12l2.18.44h0a6.45,6.45,0,0,0,.79,1.9h0L3.24,15.26a1.08,1.08,0,0,0,1.5,1.5l1.85-1.23h0a6.45,6.45,0,0,0,1.9.79h0l.44,2.18a1.08,1.08,0,0,0,2.12,0l.44-2.18h0a6.45,6.45,0,0,0,1.9-.79h0l1.85,1.23a1.08,1.08,0,0,0,1.5-1.5l-1.23-1.85h0a6.45,6.45,0,0,0,.79-1.9h0l2.18-.44a1.08,1.08,0,0,0,0-2.12ZM10,13.5A3.5,3.5,0,1,1,13.5,10,3.5,3.5,0,0,1,10,13.5Z"
			}))
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2kG3YOJULmYUC8YtVtNO9J"
			}
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoShopNow/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M29 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm-6.9-6c0-.5.4-1 1-1H27c.6 0 1 .4 1 1v2.1h-5.9V20zM21 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm11.7-3.6c-.2-.2-.5-.3-.7-.3h-2V20c0-1.6-1.3-3-3-3h-3.9c-1.7 0-3 1.3-3 3v2.1H18c-.3 0-.6.1-.7.3-.2.2-.3.5-.2.8l1 9c.1.5.5.9 1 .9h12c.5 0 .9-.4 1-.9l1-9c-.1-.4-.2-.6-.4-.8z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1NxifIlpri3Af8fEoxkaUr"
			}
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoSignUp/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoSnoo/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16px",
				height: "16px",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("path", {
				fill: "#FFF",
				d: "M13.43,13.02125 C12.5683333,13.02125 11.8675,12.3204167 11.8675,11.45875 C11.8675,10.5970833 12.5683333,9.89583333 13.43,9.89583333 C14.2916667,9.89583333 14.9925,10.5970833 14.9925,11.45875 C14.9925,12.3204167 14.2916667,13.02125 13.43,13.02125 M13.705,15.5875 C12.63875,16.6525 10.595,16.735 9.99416667,16.735 C9.39333333,16.735 7.34958333,16.6525 6.28458333,15.5870833 C6.12625,15.4291667 6.12625,15.1725 6.28458333,15.0145833 C6.4425,14.8566667 6.69916667,14.85625 6.85708333,15.0145833 C7.52916667,15.6866667 8.96708333,15.9254167 9.99416667,15.9254167 C11.02125,15.9254167 12.4595833,15.6866667 13.1329167,15.0141667 C13.29125,14.85625 13.5475,14.8566667 13.7054167,15.0145833 C13.8633333,15.1729167 13.8633333,15.4291667 13.705,15.5875 M4.9925,11.45875 C4.9925,10.5970833 5.69375,9.89583333 6.55583333,9.89583333 C7.41666667,9.89583333 8.1175,10.5970833 8.1175,11.45875 C8.1175,12.32 7.41666667,13.0208333 6.55583333,13.0208333 C5.69375,13.0208333 4.9925,12.32 4.9925,11.45875 M19.99,9.89583333 C19.99,8.68791667 19.0108333,7.70833333 17.8025,7.70833333 C17.2129167,7.70833333 16.67875,7.94291667 16.2854167,8.32208333 C14.79,7.24333333 12.73,6.54625 10.4354167,6.46625 L11.4316667,1.77833333 L14.6875,2.47041667 C14.7270833,3.29791667 15.405,3.95833333 16.2425,3.95833333 C17.1054167,3.95833333 17.805,3.25875 17.805,2.39583333 C17.805,1.53291667 17.1054167,0.833333333 16.2425,0.833333333 C15.62875,0.833333333 15.1029167,1.19083333 14.8475,1.70541667 L11.2120833,0.932916667 C11.1108333,0.910833333 11.005,0.930833333 10.9183333,0.987083333 C10.83125,1.04375 10.7704167,1.1325 10.74875,1.23375 L9.65541667,6.37791667 C9.64916667,6.4075 9.65416667,6.43541667 9.65458333,6.46458333 C7.31875,6.52583333 5.21875,7.22458333 3.7,8.31833333 C3.30708333,7.94125 2.775,7.70833333 2.1875,7.70833333 C0.979166667,7.70833333 0,8.68791667 0,9.89583333 C0,10.785 0.530833333,11.5483333 1.29208333,11.8904167 C1.25833333,12.1079167 1.24,12.32875 1.24,12.5520833 C1.24,15.9179167 5.1575,18.6458333 9.99,18.6458333 C14.8225,18.6458333 18.74,15.9179167 18.74,12.5520833 C18.74,12.33 18.7220833,12.1108333 18.68875,11.895 C19.455,11.5545833 19.99,10.7883333 19.99,9.89583333"
			})))
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2X_GdgwreX3clU-MfCHx-Y"
			}
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoViewMore/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M29.8 23H25v-4.8c0-.5-.4-1-1-1s-1 .4-1 1V23h-4.8c-.5 0-1 .4-1 1s.4 1 1 1H23v4.8c0 .5.4 1 1 1s1-.4 1-1V25h4.8c.5 0 1-.4 1-1s-.5-1-1-1"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "egx9Z9oH6-wpjLKKhAEoM"
			}
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoWatchNow/index.m.less"),
				r = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/selectors/experiments/video.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return h
			}));
			var i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Dc
				}),
				r = [n.Hc.FeedAndTheatre, n.Hc.FeedOnly],
				l = Object(i.a)(o, e => r.includes(e)),
				c = [n.Hc.FeedAndTheatre, n.Hc.TheatreOnly],
				d = Object(i.a)(o, e => c.includes(e)),
				h = Object(i.a)(e => Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Ec
				}), e => e === n.Ic.Enabled)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66.65a6f90d338d4e54d017.js.map