// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115.c97a870d5f40667f68a3.js
// Retrieved at 4/2/2020, 4:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"], {
		"./src/reddit/components/HTML5StreamPlayer/BlurImage/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_1chxf6wi6yizUXVYKuz67P",
				component: "_1chxf6wi6yizUXVYKuz67P"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less": function(e, t, s) {
			e.exports = {
				baseControlStyles: "_2rtFq5-gNnsnqTzEcTSmVx",
				TooltipControl: "_1mDDkogVo82R5-IFxvyPRX",
				tooltipControl: "_1mDDkogVo82R5-IFxvyPRX",
				NormalControl: "_3MU1RfVON0x2Jtnz9Zq3FA",
				normalControl: "_3MU1RfVON0x2Jtnz9Zq3FA",
				baseIconStyles: "_2c7UOdkceyJz77qZPoGPAL",
				ControlSnoo: "_2Zt53GmI1y_S0N7pA0jMc0",
				controlSnoo: "_2Zt53GmI1y_S0N7pA0jMc0",
				ControlPlay: "fqsG3oqeIwcEC-HTRf23d",
				controlPlay: "fqsG3oqeIwcEC-HTRf23d",
				ControlVolume: "_2W9KLflUho3xU7KURAaHwH",
				controlVolume: "_2W9KLflUho3xU7KURAaHwH",
				AnimatedSettingIconParent: "_3KjMjt45Pg4_LoShJNFMEf",
				animatedSettingIconParent: "_3KjMjt45Pg4_LoShJNFMEf",
				ControlExpand: "_3ly5pJnuzH6jga1JGXpOXD",
				controlExpand: "_3ly5pJnuzH6jga1JGXpOXD",
				ControlCollapse: "_3uhleNVV7YkJm0tszcz4z9",
				controlCollapse: "_3uhleNVV7YkJm0tszcz4z9",
				Time: "_1z-qg2gzYKkI37gkYYJCi0",
				time: "_1z-qg2gzYKkI37gkYYJCi0",
				LeftTime: "_3-_K1uspRApIM1_dkDMKnM",
				leftTime: "_3-_K1uspRApIM1_dkDMKnM",
				RightTime: "_1HVKaY4Y3yukzOicpaGXLB",
				rightTime: "_1HVKaY4Y3yukzOicpaGXLB",
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
				mHasZeroOpacity: "_1RZSSlyqzokrcxh0ESwE2e"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M14.41,13H17a1,1,0,0,0,0-2H12a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14.41l3.24,3.24a1,1,0,0,0,1.41-1.41Z",
					fill: "#FFFFFF"
				}), n.a.createElement("path", {
					d: "M8,2A1,1,0,0,0,7,3V5.59L3.76,2.34A1,1,0,0,0,2.34,3.76L5.59,7H3A1,1,0,0,0,3,9H8A1,1,0,0,0,9,8V3A1,1,0,0,0,8,2Z",
					fill: "#FFFFFF"
				})),
				d = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M9,3A1,1,0,0,0,8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V5.41L7.24,8.66A1,1,0,0,0,8.66,7.24L5.41,4H8A1,1,0,0,0,9,3Z",
					fill: "#FFFFFF"
				}), n.a.createElement("path", {
					d: "M17,11a1,1,0,0,0-1,1v2.59l-3.24-3.24a1,1,0,0,0-1.41,1.41L14.59,16H12a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V12A1,1,0,0,0,17,11Z",
					fill: "#FFFFFF"
				})),
				h = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				p = s("./src/reddit/icons/svgs/VideoPause/index.tsx"),
				u = s("./src/reddit/icons/svgs/VideoPlay/index.tsx"),
				m = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				g = s("./src/reddit/components/HTML5StreamPlayer/ControlGradient/index.m.less"),
				f = s.n(g),
				v = r.a.div("Component", f.a),
				y = s("./node_modules/lodash/clamp.js"),
				x = s.n(y),
				S = s("./node_modules/react-dom/index.js"),
				P = s.n(S),
				b = s("./src/lib/fastdom/index.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			const E = e => {
					const t = Math.floor(e / 60).toString();
					let s = Math.trunc(e % 60).toString();
					return s = "0".concat(s).slice(-2), "".concat(t, ":").concat(s)
				},
				w = (e, t) => {
					let s = Math.floor(e / 60).toString(),
						i = Math.trunc(e % 60).toString();
					const a = Math.floor(t / 60).toString();
					return s.length < a.length && (s = "0".concat(s).slice(-2)), i = "0".concat(i).slice(-2), "".concat(s, ":").concat(i)
				};
			var C = s("./src/reddit/constants/keycodes.ts"),
				T = s("./src/reddit/components/HTML5StreamPlayer/SeekBar/index.m.less"),
				M = s.n(T);
			const V = r.a.div("Thumb", M.a),
				_ = r.a.div("ProgressBar", M.a),
				B = r.a.div("Floating", M.a),
				L = r.a.video("PreviewVideo", M.a),
				F = r.a.div("PreviewTime", M.a),
				k = r.a.div("VideoSeekbar", M.a);
			class O extends n.a.PureComponent {
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
							this.props.updatePosition(e), this.progressBar && this.progressThumb && (this.progressBar.style.width = null, this.progressThumb.style.marginLeft = null)
						}
					}, this.handleMouseLeave = e => {
						this.setLookahead(0)
					}, this.handleKeyDown = e => {
						switch (e.key) {
							case C.b.ArrowRight:
								return void this.jumpPlayback(5);
							case C.b.ArrowLeft:
								return void this.jumpPlayback(-5);
							case C.b.Space:
								return this.props.playPauseVideo(), void e.preventDefault()
						}
					}, this.setProgressThumbRef = e => {
						this.progressThumb = e, e && b.a.read(() => {
							const t = e.getBoundingClientRect().width / 2;
							b.a.write(() => {
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
					} = this.props, i = x()(t + e, 0, s);
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
						isNaN(s) || (this.previewThumbnailVideo && (this.previewThumbnailVideo.currentTime = s), this.previewThumbnailTime.innerHTML = w(s, t));
						const i = P.a.findDOMNode(this);
						if (!i || !i.parentNode) return;
						const a = i.parentNode;
						if (!(a instanceof Element)) return;
						const n = a.getBoundingClientRect(),
							o = this.parentRect.getBoundingClientRect(),
							r = this.previewThumbnailContainer.getBoundingClientRect(),
							l = n.left - o.left,
							c = n.right - o.left - r.width,
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
					for (let a = 0; a < e.length; a++) e[a].start <= s && (i = e[a].end);
					return i = x()(i, 0, 100), {
						width: "".concat(i, "%")
					}
				}
				render() {
					const {
						active: e
					} = this.props, {
						progressPercent: t
					} = this.state, s = this.getCurrentPercent();
					let a = e ? t : s;
					a = x()(a, 0, 100);
					const r = {
							width: this.getProgressWidth(a) || "0"
						},
						l = {
							marginLeft: this.getThumbMargin(a),
							opacity: e ? 1 : 0
						};
					return n.a.createElement(k, {
						innerRef: this.setParentRect,
						onKeyDown: this.handleKeyDown,
						onMouseLeave: this.handleMouseLeave,
						onMouseMove: this.handleMouseMove
					}, n.a.createElement("div", {
						"aria-label": i.fbt._("Seek Slider", null, {
							hk: "1fNTBw"
						}),
						"aria-valuemax": Math.round(this.props.totalTime),
						"aria-valuemin": 0,
						"aria-valuenow": this.props.currentTime,
						className: M.a.Mainbar,
						role: "slider",
						tabIndex: 0
					}, n.a.createElement("div", {
						className: Object(o.a)(M.a.Bar, M.a.Background)
					}), n.a.createElement("div", {
						className: Object(o.a)(M.a.Bar, M.a.Lookahead),
						ref: e => this.lookaheadBar = e
					}), n.a.createElement("div", {
						className: Object(o.a)(M.a.Bar, M.a.Buffered),
						style: this.getBufferedStyle()
					}), n.a.createElement(_, {
						className: this.props.isLive && M.a.Live,
						innerRef: this.setProgressBar,
						style: r
					})), n.a.createElement(V, {
						className: this.props.isLive && M.a.Live,
						innerRef: this.setProgressThumbRef,
						style: l
					}), !this.props.controlBarIsHidden && n.a.createElement(B, {
						innerRef: this.setPreviewThumbnailContainer
					}, this.props.thumbSource && n.a.createElement(L, {
						innerRef: this.setPreviewThumbnailVideo,
						src: this.props.thumbSource
					}), n.a.createElement(F, {
						innerRef: this.setPreviewThumbnailTime
					})))
				}
			}
			var N = s("./node_modules/react-router-dom/esm/react-router-dom.js");
			var R = e => n.a.createElement("svg", {
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
				}))),
				j = s("./src/reddit/components/HTML5StreamPlayer/SnooButton/index.m.less"),
				H = s.n(j);
			var A = r.a.wrapped(e => n.a.createElement("div", {
					className: e.className
				}, "string" == typeof e.postUrl ? n.a.createElement("a", {
					href: e.postUrl
				}, n.a.createElement(R, null)) : n.a.createElement(N.a, {
					to: e.postUrl
				}, n.a.createElement(R, null))), "Component", H.a),
				I = s("./src/reddit/components/HTML5StreamPlayer/Tooltip/index.tsx"),
				D = s("./src/reddit/components/HTML5StreamPlayer/VolumeControl/index.m.less"),
				U = s.n(D);
			class z extends a.Component {
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
					const t = x()(e, this.min, this.max);
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
					const t = x()(e, this.min, this.max);
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
						volume: a
					} = this.props, {
						value: r
					} = this.state, l = i ? 0 : e ? r : a, c = this.convertVolumeToPercent(l);
					return n.a.createElement("div", {
						className: Object(o.a)(U.a.VolumeControl, t),
						ref: e => this.container = e
					}, n.a.createElement("div", {
						className: Object(o.a)(U.a.SliderTrack, U.a.SliderBar),
						ref: e => this.track = e
					}, n.a.createElement("div", {
						className: Object(o.a)(U.a.SliderProgress, U.a.SliderBar, {
							[U.a.Live]: s
						}),
						ref: e => this.progress = e,
						style: {
							height: "".concat(c, "%")
						}
					}, n.a.createElement("div", {
						className: U.a.SliderThumb
					}))))
				}
			}
			var W = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				G = s.n(W);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var K = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
				}
				return s
			};
			const Z = r.a.wrapped(I.a, "TooltipControl", G.a),
				Q = r.a.div("NormalControl", G.a),
				J = r.a.wrapped(Z, "ControlSnoo", G.a),
				q = r.a.wrapped(Z, "ControlPlay", G.a),
				X = r.a.wrapped(Q, "Time", G.a),
				$ = r.a.wrapped(X, "LeftTime", G.a),
				ee = r.a.wrapped(X, "RightTime", G.a),
				te = r.a.div("LiveLabel", G.a),
				se = r.a.wrapped(Q, "ControlScrubber", G.a),
				ie = r.a.wrapped(Q, "ControlVolume", G.a),
				ae = r.a.wrapped(Z, "ControlExpand", G.a),
				ne = r.a.wrapped(Z, "ControlCollapse", G.a),
				oe = e => {
					var {
						className: t,
						isFullScreen: s,
						zeroOpacity: i,
						innerRef: a
					} = e, r = K(e, ["className", "isFullScreen", "zeroOpacity", "innerRef"]);
					return n.a.createElement("div", Y({
						className: Object(o.a)(G.a.ControlBarContainer, t, {
							[G.a.mIsFullScreen]: s,
							[G.a.mHasZeroOpacity]: i
						}),
						ref: a
					}, r))
				};
			class re extends n.a.Component {
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
						isListing: a,
						isLive: o,
						settingsButton: r,
						settingChange: h,
						hideLiveLabel: m,
						showSettingsIcon: g
					} = this.props, f = i.fbt._("View Comments", null, {
						hk: "2Vf8xl"
					}), y = i.fbt._("Play", null, {
						hk: "2cQV3h"
					}), x = i.fbt._("Pause", null, {
						hk: "2YnRgT"
					}), S = i.fbt._("Exit Fullscreen", null, {
						hk: "LnrWa"
					}), P = i.fbt._("Fullscreen", null, {
						hk: "3JvSdn"
					}), {
						currentTime: b
					} = this.state, {
						totalTime: C
					} = o ? this.state : this.props, T = this.props.isPaused ? y : x;
					return n.a.createElement(n.a.Fragment, null, !t && n.a.createElement(v, null), s && a && n.a.createElement(J, {
						tooltip: f
					}, n.a.createElement("div", {
						onClick: this.props.clickSnoo
					}, n.a.createElement(A, {
						postUrl: s
					}))), n.a.createElement(q, {
						tooltip: T
					}, n.a.createElement("button", {
						"aria-label": T,
						onClick: this.props.playPauseVideo
					}, this.props.isPaused ? n.a.createElement(u.a, null) : n.a.createElement(p.a, null))), n.a.createElement($, null, w(b, C)), n.a.createElement(se, null, n.a.createElement(O, {
						active: h === l.a.SeekBar,
						bufferedRanges: this.state.bufferedRanges,
						controlBarIsHidden: this.props.hideControlBar,
						currentTime: b,
						isLive: o,
						ref: this.props.seekBarRef,
						thumbSource: this.props.scrubberThumbSource,
						totalTime: C,
						playPauseVideo: this.props.playPauseVideo,
						updatePosition: this.props.setVideoPosition,
						updateContinuousStartTime: this.props.updateContinuousStartTime
					})), o && !m ? n.a.createElement(te, {
						"aria-label": i.fbt._("live", null, {
							hk: "1rkHRc"
						}),
						onClick: () => this.props.setVideoPosition(C)
					}, i.fbt._("Live", null, {
						hk: "3bCYlO"
					})) : n.a.createElement(ee, null, E(C)), g && r, !e && (this.props.isFullScreen ? n.a.createElement(ne, {
						tooltip: S
					}, n.a.createElement("button", {
						"aria-label": S,
						onClick: this.props.exitFullScreen
					}, n.a.createElement(c, null))) : n.a.createElement(ae, {
						tooltip: P
					}, n.a.createElement("button", {
						"aria-label": P,
						onClick: this.props.enterFullScreen
					}, n.a.createElement(d, null)))))
				}
				render() {
					const {
						controlBarRef: e,
						isLive: t
					} = this.props;
					return n.a.createElement(oe, {
						className: this.props.className,
						innerRef: t => e && e(t),
						isFullScreen: this.props.isFullScreen,
						zeroOpacity: this.props.hideControlBar
					}, this.renderContent(), this.props.hasAudio && n.a.createElement(ie, {
						className: this.props.showVolumeIcon ? "disableHide" : ""
					}, n.a.createElement(z, {
						className: G.a.VolumeControl,
						ref: e => this.props.volumeRef(e),
						active: this.props.settingChange === l.a.Volume,
						isMuted: this.props.isMuted,
						isLive: t,
						setVolume: this.props.setVolume,
						volume: this.props.volume
					}), n.a.createElement("button", {
						onClick: this.props.toggleMute
					}, this.props.isMuted ? n.a.createElement(h.a, null) : n.a.createElement(m.a, null))))
				}
			}
			t.a = re
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
				VideoResolutionContainer: "_3IZDbV1r5OQ2PtnsjF02A",
				videoResolutionContainer: "_3IZDbV1r5OQ2PtnsjF02A",
				VideoResolutionButton: "bAXkjkzl_SYFOHtU-04DK",
				videoResolutionButton: "bAXkjkzl_SYFOHtU-04DK",
				AutoplayContainer: "_2BOpKj2--T_MqNo_ZMRxNG",
				autoplayContainer: "_2BOpKj2--T_MqNo_ZMRxNG",
				SetAutoplayButton: "_3FgC5gbpQJUntY23YtQ89Z",
				setAutoplayButton: "_3FgC5gbpQJUntY23YtQ89Z",
				VideoResolutionDescription: "_1n_g7VROCpBaLnT_3bzFIL",
				videoResolutionDescription: "_1n_g7VROCpBaLnT_3bzFIL",
				AutoplayDescription: "_2NY4rl5z4S5VUOfEs8PdJ_",
				autoplayDescription: "_2NY4rl5z4S5VUOfEs8PdJ_",
				VideoHd: "UyJedjQe5dUxEFYt6pF_G",
				videoHd: "UyJedjQe5dUxEFYt6pF_G"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/SnooButton/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_1f5l9XSRXju5gjEllP1vw6",
				component: "_1f5l9XSRXju5gjEllP1vw6"
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
				a = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
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
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
				}
				return s
			};
			const p = 8,
				u = c.a.span("TooltipPopup", l.a),
				m = e => {
					var {
						className: t,
						setRef: s,
						disable: i
					} = e, o = h(e, ["className", "setRef", "disable"]);
					return a.a.createElement("div", d({
						className: Object(n.a)(l.a.TooltipControl, t, {
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
								a = e.parentNode.getBoundingClientRect(),
								n = a.left - i.left + p,
								r = a.right - i.left - s.width - p,
								l = i.width / 2 - s.width / 2;
							o.a.write(() => {
								t.style.left = Math.max(n, Math.min(l, r)) + "px"
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
					return a.a.createElement(m, {
						onMouseEnter: this.onMouseEnter,
						setRef: e => this.container = e,
						className: e,
						disable: s
					}, a.a.createElement(u, {
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
				return xt
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			var i = s("./node_modules/bowser/src/bowser.js"),
				a = s.n(i),
				n = s("./node_modules/crypto-js/sha256.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/debounce.js"),
				l = s.n(r),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				h = s("./node_modules/react-redux/es/index.js"),
				p = s("./src/reddit/models/Media/index.ts"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/helpers/overlay/index.ts"),
				g = s("./src/config.ts"),
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/domUtils/index.ts");
			const y = () => {
					const e = navigator.userAgent || navigator.vendor || window.opera;
					return /android/i.test(e) ? "Android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "iOS" : "unknown"
				},
				x = () => "Android" === y() || "iOS" === y();
			var S = s("./src/lib/loadWithRetries/index.ts"),
				P = s("./src/lib/sentry/index.ts"),
				b = s("./src/reddit/actions/media.ts"),
				E = s("./src/reddit/actions/preferences.ts"),
				w = s("./src/reddit/actions/video.ts"),
				C = () => Object(S.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				T = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				M = s("./src/reddit/components/PlayButton/index.tsx"),
				V = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/experiments.ts"),
				B = s("./src/reddit/constants/video.ts"),
				L = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/helpers/media/index.ts"),
				k = s("./src/reddit/helpers/trackers/media.ts"),
				O = s("./src/reddit/helpers/chooseVariant/index.ts");
			const N = e => {
					const t = Object(O.c)(e, {
						experimentEligibilitySelector: O.a,
						experimentName: _.hb
					});
					return Object(_.Zb)(t) ? void 0 : t
				},
				R = e => e === _.kb.On,
				j = e => {
					const t = Object(O.c)(e, {
						experimentEligibilitySelector: O.a,
						experimentName: _.ib
					});
					return Object(_.Zb)(t) ? void 0 : t
				},
				H = e => e === _.kb.On;
			var A = s("./src/reddit/selectors/experiments/utils.ts");
			const I = Object(u.a)(e => Object(O.c)(e, {
					experimentName: _.Ub,
					experimentEligibilitySelector: O.a
				}), A.a),
				D = Object(u.a)(I, (function(e) {
					switch (e) {
						case _.Wb.BufferTwoSeconds:
							return 2;
						case _.Wb.BufferFiveSeconds:
							return 5;
						case _.Wb.BufferTenSeconds:
							return 10;
						default:
							return
					}
				}));
			var U = s("./src/reddit/selectors/media.ts"),
				z = s("./src/reddit/selectors/platform.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/selectors/video.ts"),
				K = s("./src/reddit/components/HTML5StreamPlayer/BlurImage/index.m.less"),
				Z = s.n(K),
				Q = s("./src/lib/lessComponent.tsx"),
				J = Q.a.img("Component", Z.a),
				q = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				X = s("./src/app/strings/index.ts"),
				$ = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				ee = e => d.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 77.06 60"
				}, d.a.createElement("g", {
					fill: "none"
				}, d.a.createElement("path", {
					d: "M75.17,11.35l-44.9,46.7a6.17,6.17,0,0,1-9,0L1.88,37.55a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l15,15.8L66.27,2a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,75.17,11.35Z",
					fill: "#FFFFFF"
				}))),
				te = s("./src/reddit/components/HTML5StreamPlayer/SettingControl/index.m.less"),
				se = s.n(te);

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var ae = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
				}
				return s
			};
			const ne = 0,
				oe = [1080, 720],
				re = [...oe, 480, 360, 240, ne],
				le = e => d.a.createElement("button", {
					"aria-checked": e.isChecked,
					className: se.a.SetAutoplayButton,
					onClick: e.onClick,
					role: "checkbox",
					tabIndex: 0
				}, d.a.createElement(ee, null), d.a.createElement("div", {
					className: se.a.AutoplayDescription
				}, $.fbt._("Autoplay", null, {
					hk: "1x30w1"
				}))),
				ce = e => {
					const {
						resolution: t,
						onClick: s,
						isChecked: i
					} = e;
					return d.a.createElement("button", {
						"aria-checked": i,
						className: se.a.VideoResolutionButton,
						onClick: s,
						role: "radio",
						tabIndex: 0
					}, d.a.createElement(ee, null), d.a.createElement("div", {
						className: se.a.VideoResolutionDescription
					}, t === ne ? $.fbt._("Auto", null, {
						hk: "6zgZT"
					}) : d.a.createElement(d.a.Fragment, null, d.a.createElement("span", null, t, "p"), oe.includes(t) && d.a.createElement("span", {
						className: se.a.VideoHd
					}, " ", $.fbt._("HD", null, {
						hk: "2KjxjH"
					})))))
				},
				de = e => {
					var {
						isActive: t,
						className: s,
						innerRef: i
					} = e, a = ae(e, ["isActive", "className", "innerRef"]);
					return d.a.createElement("div", ie({
						className: Object(f.a)(se.a.SettingControlContainer, s, {
							[se.a.mIsActive]: t
						}),
						ref: i
					}, a))
				};
			class he extends c.Component {
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
						resolution: a
					} = this.props, n = [...t.map(e => e.height), ne];
					return d.a.createElement(de, {
						innerRef: this.setContainerRef,
						className: Object(f.a)(se.a.VideoSettingContainer, s),
						isActive: e
					}, i && d.a.createElement("div", {
						className: se.a.AutoplayContainer
					}, d.a.createElement(le, {
						isChecked: this.state.autoplayPref,
						onClick: this.setAutoplay
					})), d.a.createElement("div", {
						className: se.a.VideoResolutionContainer,
						role: "radiogroup"
					}, re.map((e, t) => n.includes(e) ? d.a.createElement(ce, {
						key: t,
						resolution: e,
						onClick: () => this.setResolution(e),
						isChecked: a === e
					}) : null)))
				}
			}
			var pe = s("./src/reddit/components/HTML5StreamPlayer/Tooltip/index.tsx");
			var ue = e => d.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, d.a.createElement("path", {
					fill: "#fff",
					d: "M18.5,8.94,16.32,8.5h0a6.46,6.46,0,0,0-.79-1.9h0l1.23-1.85a1.08,1.08,0,0,0-1.5-1.5L13.41,4.47h0a6.45,6.45,0,0,0-1.9-.79h0L11.06,1.5a1.08,1.08,0,0,0-2.12,0L8.5,3.68h0a6.45,6.45,0,0,0-1.9.79h0L4.74,3.24a1.08,1.08,0,0,0-1.5,1.5L4.47,6.59h0a6.45,6.45,0,0,0-.79,1.9h0L1.5,8.94a1.08,1.08,0,0,0,0,2.12l2.18.44h0a6.45,6.45,0,0,0,.79,1.9h0L3.24,15.26a1.08,1.08,0,0,0,1.5,1.5l1.85-1.23h0a6.45,6.45,0,0,0,1.9.79h0l.44,2.18a1.08,1.08,0,0,0,2.12,0l.44-2.18h0a6.45,6.45,0,0,0,1.9-.79h0l1.85,1.23a1.08,1.08,0,0,0,1.5-1.5l-1.23-1.85h0a6.45,6.45,0,0,0,.79-1.9h0l2.18-.44a1.08,1.08,0,0,0,0-2.12ZM10,13.5A3.5,3.5,0,1,1,13.5,10,3.5,3.5,0,0,1,10,13.5Z"
				})),
				me = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				ge = s.n(me);
			const fe = Q.a.wrapped(pe.a, "TooltipControl", ge.a),
				ve = Q.a.wrapped(fe, "ControlSetting", ge.a),
				ye = Object(X.a)("en", "video.settingTooltip");
			class xe extends c.Component {
				render() {
					const {
						autoplayPref: e,
						bitrateInfo: t,
						isLoggedIn: s,
						resolution: i,
						setAutoplay: a,
						setResolution: n,
						settingChange: o,
						settingRef: r,
						toggleSetting: l
					} = this.props;
					return d.a.createElement(ve, {
						key: "setting",
						className: ge.a.AnimatedSettingIconParent,
						tooltip: ye,
						disable: o === xt.Settings
					}, o === xt.Settings && d.a.createElement(he, {
						className: ge.a.VideoSettingContainer,
						isLoggedIn: s,
						autoplayPref: e,
						active: o === xt.Settings,
						ref: e => r(e),
						resolution: i,
						setResolution: n,
						setAutoplay: a,
						bitrateInfo: t
					}), d.a.createElement("button", {
						"aria-expanded": o === xt.Settings,
						"aria-haspopup": !0,
						"aria-label": ye,
						onClick: l
					}, d.a.createElement(ue, {
						className: ge.a.SettingIcon
					})))
				}
			}
			var Se = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				Pe = s("./src/reddit/selectors/telemetry.ts"),
				be = s("./src/reddit/icons/svgs/VideoApplyNow/index.m.less"),
				Ee = s.n(be);
			var we = e => d.a.createElement("svg", {
					className: Object(f.a)(Ee.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
				}))),
				Ce = s("./src/reddit/icons/svgs/VideoContactUs/index.m.less"),
				Te = s.n(Ce);
			var Me = e => d.a.createElement("svg", {
					className: Object(f.a)(Te.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M34.5 23.7s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1-.1-.1-.1-.2-.1l-15.4-7.2c-.1-.1-.3-.1-.5 0-.1.1-.2.2-.2.4v4.3c0 .2.2.4.4.5l10.3 1.9H18.2c-.1 0-.2 0-.2.1L15.6 25c-.2.1-.3.3-.2.6.1.2.2.3.5.3l2.4-.2v5.5c0 .2.1.3.2.4.1 0 .2.1.3.1h.2l15.4-7.2s.1 0 .1-.1c0 0 .1 0 .1-.1.1-.1.1-.2.1-.3-.1-.1-.2-.2-.2-.3"
				}))),
				Ve = s("./src/reddit/icons/svgs/VideoGetAQuote/index.m.less"),
				_e = s.n(Ve);
			var Be = e => d.a.createElement("svg", {
					className: Object(f.a)(_e.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M19.5 17.3h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5zm8.5 0h3.1l-1.8 5h2.3v6.5h-6.8v-6l3.2-5.5z"
				}))),
				Le = s("./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less"),
				Fe = s.n(Le);
			var ke = e => d.a.createElement("svg", {
					className: Object(f.a)(Fe.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
				}))),
				Oe = s("./src/reddit/icons/svgs/VideoInstall/index.m.less"),
				Ne = s.n(Oe);
			var Re = e => d.a.createElement("svg", {
					className: Object(f.a)(Ne.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M30.7 25c.5 0 1 .4 1 1v2.9c0 1.6-1.3 2.9-2.9 2.9h-9.6c-1.6 0-2.9-1.3-2.9-2.9v-3c0-.5.4-1 1-1s1 .4 1 1v2.9c0 .5.4 1 1 1h9.6c.5 0 1-.4 1-1v-2.9c-.1-.5.3-.9.8-.9zm-7.4 1.6l-2.9-2.9c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l1.2 1.3v-6.3c0-.5.4-1 1-1 .5 0 1 .4 1 1v6.3l1.2-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-2.9 2.8c-.1.1-.2.2-.3.2-.2.1-.3.1-.4.1-.1 0-.2 0-.4-.1-.1 0-.2-.1-.3-.2z"
				}))),
				je = s("./src/reddit/icons/svgs/VideoLearnMore/index.m.less"),
				He = s.n(je);
			var Ae = e => d.a.createElement("svg", {
					className: Object(f.a)(He.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M25.4 24c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4zm5.3 0c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4zm-10.5 0c0 .8-.6 1.4-1.4 1.4s-1.5-.6-1.5-1.4.6-1.4 1.4-1.4 1.5.6 1.5 1.4z"
				}))),
				Ie = s("./src/reddit/icons/svgs/VideoPlayNow/index.m.less"),
				De = s.n(Ie);
			var Ue = e => d.a.createElement("svg", {
					className: Object(f.a)(De.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M32.5,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4 C33.8,22.8,33.2,23.5,32.5,23.5 M29.8,26.2c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C31.1,25.6,30.5,26.2,29.8,26.2 M27.1,23.5c-0.7,0-1.4-0.6-1.4-1.4c0-0.7,0.6-1.4,1.4-1.4c0.7,0,1.4,0.6,1.4,1.4 C28.4,22.8,27.8,23.5,27.1,23.5 M21.6,23.1H20v1.7c0,0.6-0.5,1-1,1s-1-0.5-1-1v-1.7h-1.7c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1H18 v-1.7c0-0.6,0.5-1,1-1s1,0.5,1,1v1.7h1.7c0.6,0,1,0.5,1,1C22.7,22.7,22.2,23.1,21.6,23.1 M29.8,18c0.7,0,1.4,0.6,1.4,1.4 c0,0.7-0.6,1.4-1.4,1.4c-0.7,0-1.4-0.6-1.4-1.4C28.4,18.6,29,18,29.8,18 M37.3,28.1l-1.7-9.5c-0.4-1.9-2-3.3-4-3.3H17.1 c-2,0-3.6,1.4-4,3.3l-1.7,9.5c-0.2,1.2,0.1,2.4,0.9,3.3c0.8,0.9,1.9,1.5,3.1,1.5h0.2c1.8,0,3.3-1.1,3.9-2.8l0.4-1.3h8.9 l0.4,1.3c0.6,1.7,2.1,2.8,3.9,2.8h0.2c1.2,0,2.3-0.5,3.1-1.5C37.2,30.5,37.5,29.3,37.3,28.1"
				}))),
				ze = s("./src/reddit/icons/svgs/VideoSeeMenu/index.m.less"),
				We = s.n(ze);
			var Ge = e => d.a.createElement("svg", {
					className: Object(f.a)(We.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M29.3 20.2h-5.8c-.2 0-.5-.3-.5-.5 0-.3.2-.5.5-.5h5.8c.3 0 .5.2.5.5 0 .2-.3.5-.5.5zm0 4.3h-5.8c-.2 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-5.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm-8.2-8.2c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm0 4.4c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v2zm0 4.3c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm8.7-13H18.2c-1.1 0-1.9.9-1.9 1.9v11.5c0 1.1.9 1.9 1.9 1.9h11.5c1.1 0 1.9-.9 1.9-1.9V18.2c.1-1-.8-1.9-1.8-1.9z"
				}))),
				Ye = s("./src/reddit/icons/svgs/VideoShopNow/index.m.less"),
				Ke = s.n(Ye);
			var Ze = e => d.a.createElement("svg", {
					className: Object(f.a)(Ke.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M29 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm-6.9-6c0-.5.4-1 1-1H27c.6 0 1 .4 1 1v2.1h-5.9V20zM21 26c-.6 0-1-.4-1-1 0-.5.4-1 1-1s1 .4 1 1-.5 1-1 1zm11.7-3.6c-.2-.2-.5-.3-.7-.3h-2V20c0-1.6-1.3-3-3-3h-3.9c-1.7 0-3 1.3-3 3v2.1H18c-.3 0-.6.1-.7.3-.2.2-.3.5-.2.8l1 9c.1.5.5.9 1 .9h12c.5 0 .9-.4 1-.9l1-9c-.1-.4-.2-.6-.4-.8z"
				}))),
				Qe = s("./src/reddit/icons/svgs/VideoSignUp/index.m.less"),
				Je = s.n(Qe);
			var qe = e => d.a.createElement("svg", {
					className: Object(f.a)(Je.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
				}))),
				Xe = s("./src/reddit/icons/svgs/VideoViewMore/index.m.less"),
				$e = s.n(Xe);
			var et = e => d.a.createElement("svg", {
					className: Object(f.a)($e.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M29.8 23H25v-4.8c0-.5-.4-1-1-1s-1 .4-1 1V23h-4.8c-.5 0-1 .4-1 1s.4 1 1 1H23v4.8c0 .5.4 1 1 1s1-.4 1-1V25h4.8c.5 0 1-.4 1-1s-.5-1-1-1"
				}))),
				tt = s("./src/reddit/icons/svgs/VideoWatchNow/index.m.less"),
				st = s.n(tt);
			var it = e => d.a.createElement("svg", {
					className: Object(f.a)(st.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, d.a.createElement("g", {
					transform: "translate(1 1)"
				}, d.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), d.a.createElement("path", {
					fill: "#fff",
					d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
				}))),
				at = s("./src/reddit/components/VideoCTA/index.m.less"),
				nt = s.n(at);
			const ot = {
				"Apply Now": d.a.createElement(we, null),
				"Contact Us": d.a.createElement(Me, null),
				"Learn More": d.a.createElement(Ae, null),
				"Get a Quote": d.a.createElement(Be, null),
				"Get Showtimes": d.a.createElement(ke, null),
				Install: d.a.createElement(Re, null),
				Download: d.a.createElement(Re, null),
				"Learn More": d.a.createElement(Ae, null),
				"Play Now": d.a.createElement(Ue, null),
				"See Menu": d.a.createElement(Ge, null),
				"Shop Now": d.a.createElement(Ze, null),
				"Sign Up": d.a.createElement(qe, null),
				"View More": d.a.createElement(et, null),
				"Watch Now": d.a.createElement(it, null)
			};
			var rt = Object(V.c)(e => {
					const {
						callToAction: t,
						postId: s,
						sendEvent: i,
						source: a
					} = e;
					return d.a.createElement(Se.a, {
						className: nt.a.ctaLink,
						onClick: e => i(e => Object.assign({}, Object(Pe.defaults)(e), {
							source: "videoplayer",
							action: "click",
							noun: "callToAction"
						})),
						href: a.url,
						isSponsored: !0,
						postId: s,
						source: a
					}, d.a.createElement("div", {
						className: nt.a.ctaWrapper
					}, (e => ot[e = e || "Learn More"])(t), d.a.createElement("span", {
						className: nt.a.ctaText
					}, t || "Learn More")))
				}),
				lt = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				ct = s("./src/reddit/components/HTML5StreamPlayer/ReplayVideo/index.m.less"),
				dt = s.n(ct);
			const ht = Q.a.div("Centered", dt.a),
				pt = Q.a.div("EndedOverlay", dt.a),
				ut = Q.a.span("ReplayText", dt.a),
				mt = Q.a.button("ReplayButton", dt.a);
			var gt = e => {
					const {
						onClick: t,
						source: s,
						callToAction: i,
						postId: a
					} = e;
					return d.a.createElement(pt, {
						onClick: t
					}, d.a.createElement(ht, null, d.a.createElement(mt, null, d.a.createElement(lt.a, null), d.a.createElement(ut, {
						className: "replay-video"
					}, $.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					}))), s && i && d.a.createElement(rt, {
						callToAction: i,
						postId: a,
						source: s
					})))
				},
				ft = s("./src/reddit/components/HTML5StreamPlayer/VideoContainer/index.m.less"),
				vt = s.n(ft);

			function yt() {
				return (yt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var xt, St = function(e, t) {
					var s = {};
					for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (i = Object.getOwnPropertySymbols(e); a < i.length; a++) t.indexOf(i[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (s[i[a]] = e[i[a]])
					}
					return s
				},
				Pt = e => {
					var {
						className: t,
						isVisible: s,
						setRef: i
					} = e, a = St(e, ["className", "isVisible", "setRef"]);
					return d.a.createElement("div", yt({
						className: Object(f.a)(vt.a.Component, t, {
							[vt.a.mIsNotVisible]: !s
						}),
						ref: i
					}, a))
				},
				bt = s("./src/reddit/components/HTML5StreamPlayer/VideoOverlay/index.m.less"),
				Et = s.n(bt),
				wt = Q.a.div("Component", Et.a),
				Ct = s("./src/reddit/components/HTML5StreamPlayer/index.m.less"),
				Tt = s.n(Ct);
			! function(e) {
				e[e.SeekBar = 0] = "SeekBar", e[e.Settings = 1] = "Settings", e[e.Volume = 2] = "Volume"
			}(xt || (xt = {}));
			const Mt = 3e3,
				Vt = 6e3,
				_t = 100,
				Bt = Object(h.b)(() => Object(u.c)({
					isLoggedIn: G.G,
					autoplayPref: G.b,
					currentTime: Y.d,
					currentUser: G.i,
					isMutedPreference: U.a,
					isOverlayOpen: z.h,
					language: G.O,
					loadTimes: Y.f,
					metadata: Y.g,
					muxSamplingAVariant: N,
					muxSamplingBVariant: j,
					postUrl: W.P,
					started: Y.i,
					videoBufferTime: D,
					videoBufferVariant: I,
					volume: U.b
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						exitVideoFullscreen: () => e(w.A()),
						onLoadStarted: t => {
							s && e(w.w(s, t))
						},
						onMetadataReceived: t => e(w.L({
							metadata: t,
							postId: t.id
						})),
						onPlayable: t => {
							s && e(w.I(s, t))
						},
						onUpdateVideoTime: l()(t => {
							s && e(w.P({
								postId: s,
								time: t
							}))
						}, B.k, {
							maxWait: B.l
						}),
						openLightbox: t => {
							t ? e(Object(m.a)(t)) : P.c.withScope(e => {
								e.setExtra("info", {
									postId: s,
									postUrl: t
								}), P.c.captureMessage("Post lightbox cannot be opened with a falsy postUrl")
							})
						},
						setPlaying: t => {
							s && e(w.O({
								postId: s,
								isPlaying: t
							}))
						},
						setAutoplayPref: t => e(E.r(t)),
						setVideoFullscreen: () => {
							s && e(w.N(s))
						},
						setVideoMuted: t => e(b.d(t, s)),
						setVideoVolume: t => e(b.e(t)),
						onWatchedPercent: t => {
							s && e(w.S(t, s))
						},
						onWatchedSeconds: t => {
							s && e(w.T(t, s))
						},
						onUpdateContinuousViewStartTime: t => {
							s && e(w.z({
								postId: s,
								time: t
							}))
						},
						onVideoStarted: () => {
							s && e(w.R(s))
						}
					}
				});
			class Lt extends c.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.percentagePixelsFired = {
						[B.b]: !1,
						[B.c]: !1,
						[B.d]: !1,
						[B.e]: !1,
						[B.a]: !1
					}, this.timePixelsFired = {
						[B.g]: !1,
						[B.h]: !1,
						[B.f]: !1
					}, this.sendEvent = function(e, s) {
						let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						const a = t.HTML5StreamPlayerVideo;
						if (a && null != t.props.postId) {
							const a = i ? k.b(t.props.postId, e, s) : k.a(t.props.postId, e, s);
							t.props.sendEvent(a)
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
							settingChange: xt.Volume
						}), s.handleMouseDown(e)) : t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: xt.SeekBar
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
							case xt.SeekBar:
								s && s.handleMouseMove(e);
								break;
							case xt.Volume:
								i && i.handleMouseMove(e);
								break;
							case xt.Settings:
						}
					}, this.handleMouseUp = e => {
						e.stopPropagation();
						const {
							controlBar: t,
							seekBar: s,
							volumeControl: i
						} = this;
						switch (this.state.settingChange) {
							case xt.SeekBar:
								if (s) {
									this.setState({
										ignoreUnderrunsUntil: Date.now() + _t
									}), s.handleMouseUp(e), this.sendEvent("click", "seek");
									const t = this.HTML5StreamPlayerVideo;
									this.state.videoEnded && t && t.currentTime !== t.duration && this.playVideo()
								}
								break;
							case xt.Volume:
								i && (i.handleMouseUp(e), this.sendEvent("click", "volume"));
								break;
							case xt.Settings:
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
							case xt.SeekBar:
							case xt.Volume:
							case xt.Settings:
							default:
								this.setState({
									settingChange: void 0
								})
						}
					}, this.handleClick = e => {
						e.stopPropagation()
					}, this.setContainerRef = e => this.HTML5StreamPlayerContainer = e, this.setControlBarRef = e => this.controlBar = e, this.setControlBarApi = e => this.controlBarApi = e, this.setVolumeRef = e => this.volumeControl = e, this.setSeekBarRef = e => this.seekBar = e, this.setSettingRef = e => this.settingControl = e, this.onCanPlay = () => {
						this.HTML5StreamPlayerVideo && !this.state.videoLoaded && (this.setState({
							videoLoaded: !0,
							videoWaiting: !1
						}), this.props.autoPlay && (this.props.autoplayPref || this.props.shouldIgnoreAutoplayPref) || this.props.isExpando ? this.playVideo() : this.pauseVideo())
					}, this.clearControlBarFadeTimer = () => {
						const {
							controlBarFadeTimer: e
						} = this;
						e && clearTimeout(e)
					}, this.resetControlBarFadeTimer = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mt;
						t.clearControlBarFadeTimer(), t.setState({
							hideControlBar: !1
						}), t.controlBarFadeTimer = window.setTimeout(() => {
							t.setState({
								hideControlBar: !0
							})
						}, e)
					}, this.exitHandler = () => {
						this.state.videoFullScreen && !Object(v.b)() && this.exitFullScreen()
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
							await e.play(), e.currentTime < 1 && this.props.onVideoStarted(), this.setVideoMute(this.state.isMuted), this.props.setPlaying(!0), this.setState({
								videoEnded: !1
							})
						} catch (t) {}
					}, this.pauseVideo = () => {
						const e = this.HTML5StreamPlayerVideo;
						e && (e.pause(), this.props.setPlaying(!1), this.setState({
							videoPaused: !0
						}))
					}, this.resetVideo = e => {
						this.state.videoEnded && (this.playVideo(), this.sendEvent("click", "replay"), this.setState({
							ignoreUnderrunsUntil: Date.now() + _t,
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
						s && (t ? 0 !== e && this.props.setVideoVolume(e) : (s.volume = e, e || this.state.isMuted ? e && this.state.isMuted && this.setVideoMute(!1) : this.setVideoMute(!0)))
					}, this.toggleMuteVideo = e => {
						if (e.stopPropagation(), this.HTML5StreamPlayerVideo) {
							const e = !this.state.isMuted;
							this.setVideoMute(e);
							const t = e ? "mute" : "unmute";
							this.sendEvent("click", t)
						}
					}, this.setVideoMute = e => {
						const t = this.HTML5StreamPlayerVideo;
						this.setState({
							isMuted: e
						}), this.props.setVideoMuted(e), t && (t.muted = e, e || (t.volume = this.props.volume))
					}, this.clickSnoo = e => {
						this.state.videoFullScreen && this.exitFullScreen(), this.sendEvent("click", "snoo")
					}, this.setAutoplay = e => {
						this.props.setAutoplayPref(e), e ? this.sendEvent("click", "video_autoplay_on") : this.sendEvent("click", "video_autoplay_off")
					}, this.setResolution = e => {
						const {
							bitrateInfo: t
						} = this.state;
						if (t && this.dashPlayer) {
							if (e === ne) this.dashPlayer.setAutoSwitchQualityFor("video", !0);
							else {
								const s = t.findIndex(t => t.height === e);
								this.dashPlayer.setAutoSwitchQualityFor("video", !1), this.dashPlayer.setQualityFor("video", s)
							}
							this.setState({
								resolution: e
							})
						}
					}, this.toggleSetting = e => {
						this.state.settingChange === xt.Settings ? this.setState({
							settingChange: void 0
						}) : this.setState({
							settingChange: xt.Settings
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
						s >= t && this.triggerPercentagePixels(B.a), this.triggerPercentagePixels(i);
						s / t >= .95 && this.triggerTimeWatchedPixels(B.f), this.triggerTimeWatchedPixels(s)
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
					}, Lt.dashjs || (Lt.dashjs = Object(S.a)(() => s.e("vendors~dashjs").then(s.t.bind(null, "./node_modules/dashjs/build/es5/index.js", 7)))), this.state = {
						bitrateInfo: [],
						hasAudio: !1,
						hasHovered: !1,
						hideControlBar: !0,
						isMuted: e.isListing || e.isMutedPreference,
						lastUpdate: null,
						ignoreUnderrunsUntil: 0,
						maxTimeServed: 0,
						muxPlayerInitTime: 0,
						resolution: ne,
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
					}
				}
				componentDidMount() {
					Lt.dashjs.then(e => {
						const t = this.HTML5StreamPlayerVideo,
							s = this.props.mpegDashSource;
						if (!t || !s) return;
						const i = this.props.videoBufferVariant;
						this.dashPlayer = e.MediaPlayer().create(), this.dashPlayer.getDebug().setLogToBrowserConsole(!1), this.dashPlayer.extend("RequestModifier", (function() {
							return {
								modifyRequestHeader(e) {
									const {
										appName: t
									} = g.a;
									let s = "".concat("Reddit/Version Build", " ").concat("d7b8028-production", " ").concat(t);
									return i && (s += " [".concat(_.Ub, ":").concat(i, "]")), e.setRequestHeader("X-Reddit-Agent", s), e
								},
								modifyRequestURL: e => e
							}
						}), !1);
						try {
							const {
								videoBufferTime: e
							} = this.props;
							this.dashPlayer.initialize(t, s, t.autoplay), e && this.setBufferTime(e), this.setState({
								muxPlayerInitTime: Date.now()
							}), this.dashPlayer.setFastSwitchEnabled(!0), this.dashPlayer.setInitialBitrateFor("video", 999999999), this.dashPlayer.setAutoSwitchQualityFor("video", !0)
						} catch (n) {
							return
						}
						null != this.props.postId && this.props.onLoadStarted(performance.now()), this.dashPlayer.on(e.MediaPlayer.events.STREAM_INITIALIZED, () => {
							this.getVideoQualityList(), this.getAudioInfo(), null != this.props.postId && this.props.onPlayable(performance.now()), this.controlBarApi && !this.state.hideControlBar && this.controlBarApi.setCurrentTime(0)
						}), this.dashPlayer.on(e.MediaPlayer.events.BUFFER_EMPTY, e => {
							if (null != this.props.postId && Date.now() > this.state.ignoreUnderrunsUntil) {
								const e = k.c(this.props.postId);
								this.props.sendEvent(e), this.setState({
									ignoreUnderrunsUntil: Date.now() + _t
								})
							}
						}), this.dashPlayer.on(e.MediaPlayer.events.METRIC_ADDED, e => {
							if (null == this.props.postId) return;
							if (!e || !e.value || !e.metric) return;
							if ("HttpList" !== e.metric) return;
							const t = e.value;
							if ("MediaSegment" !== t.type) return;
							let s, i, a;
							if (t._responseHeaders.split("\n").forEach(e => {
									const t = e.split(":");
									if (2 !== t.length) return;
									const n = t[0].trim(),
										o = t[1].trim();
									"x-cdn-server-region" === n && (s = o), "x-cdn-client-region" === n && (i = o), "x-cdn-name" === n && (a = o)
								}), !s || !i || !a) return;
							Lt.lastGeoPathSeen = Object(F.n)(a, s, i);
							parseInt(o()(this.props.postId).toString(), 16)
						});
						let a = !1;
						Lt.lastGeoPathSeen && ("NA-NA" === Lt.lastGeoPathSeen && this.props.muxSamplingAVariant && R(this.props.muxSamplingAVariant) && (a = !0), "NA-NA" !== Lt.lastGeoPathSeen && this.props.muxSamplingBVariant && H(this.props.muxSamplingBVariant) && (a = !0)), a && C().then(e => {
							if (void 0 !== typeof e) {
								const s = Object(p.y)(this.props.mpegDashSource);
								e.monitor(t, {
									debug: !1,
									disableCookies: !0,
									respectDoNotTrack: !0,
									dashjs: this.dashPlayer,
									data: {
										env_key: "p4fn8p6669977uf0tf86rmkoi",
										player_name: "Reddit Player",
										player_init_time: this.state.muxPlayerInitTime,
										viewer_user_id: null,
										experiment_name: Lt.lastGeoPathSeen,
										video_id: s,
										video_duration: void 0 !== this.props.metadata ? this.props.metadata.length : 0,
										video_stream_type: "on-demand",
										video_cdn: "Fastly"
									}
								})
							}
						})
					});
					const e = this.HTML5StreamPlayerVideo;
					document.addEventListener("webkitfullscreenchange", this.exitHandler, !1), document.addEventListener("fullscreenchange", this.exitHandler, !1), document.addEventListener("mozfullscreenchange", this.exitHandler, !1), document.addEventListener("MSFullscreenChange", this.exitHandler, !1), e && (x() ? e.play() : a.a.safari && !this.props.mpegDashSource && setTimeout(async () => {
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
				resetMediaPlayer() {
					this.dashPlayer && this.dashPlayer.reset()
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.exitHandler, !1), document.removeEventListener("fullscreenchange", this.exitHandler, !1), document.removeEventListener("mozfullscreenchange", this.exitHandler, !1), document.removeEventListener("MSFullscreenChange", this.exitHandler, !1), this.resetMediaPlayer(), this.clearControlBarFadeTimer(), null == this.props.postId || this.state.videoScrollPaused || this.sendEvent("served", "video", !0)
				}
				shouldComponentUpdate(e, t) {
					const s = !!this.props.isListing && !this.props.isOverlayOpen && e.isOverlayOpen,
						i = !!this.props.isListing && this.props.isOverlayOpen && !e.isOverlayOpen,
						a = this.props.isOverlayOpen !== e.isOverlayOpen;
					return t.videoFullScreen !== this.state.videoFullScreen || t.videoPaused !== this.state.videoPaused || t.isMuted !== this.state.isMuted || t.hideControlBar !== this.state.hideControlBar || t.settingChange !== this.state.settingChange || t.videoScrollPaused !== this.state.videoScrollPaused || t.videoWaiting !== this.state.videoWaiting || e.shouldPause !== this.props.shouldPause || e.shouldStop !== this.props.shouldStop || t.videoLoaded !== this.state.videoLoaded || t.usingKeys !== this.state.usingKeys || t.resolution !== this.state.resolution || s || i || a
				}
				componentWillReceiveProps(e) {
					const t = this.HTML5StreamPlayerVideo,
						s = t && !t.paused,
						i = !e.shouldStop && this.props.shouldStop,
						a = e.shouldStop && !this.props.shouldStop,
						n = !e.shouldPause && this.props.shouldPause,
						o = e.shouldPause && !this.props.shouldPause,
						r = !this.props.shouldPause && !this.props.shouldStop,
						l = !e.isOverlay && !this.props.isOverlay,
						c = e.isOverlayOpen && !this.props.isOverlayOpen,
						d = !e.isOverlayOpen && this.props.isOverlayOpen,
						h = (r || s) && l && c,
						p = r && l && d;
					if (i && (this.setState({
							videoScrollPaused: !1
						}), this.sendEvent("view", "autoplay")), (n || p) && (!this.state.videoManualPaused && t && t.currentTime < t.duration && (e.currentTime && (t.currentTime = e.currentTime), (this.props.autoplayPref || this.props.shouldIgnoreAutoplayPref || this.props.isOverlay) && this.playVideo()), p && this.sendEvent("change", "pagetype", !0)), (o || h) && (this.pauseVideo(), h && this.sendEvent("change", "pagetype", !0)), a && (this.setState({
							videoScrollPaused: !0
						}), this.sendEvent("served", "video", !0), this.state.videoEnded || (this.sendEvent("scroll", "pause"), this.setVideoMute(!0))), e.mpegDashSource && this.props.mpegDashSource !== e.mpegDashSource) {
						const {
							dashPlayer: t
						} = this;
						try {
							t.setAutoPlay(e.autoPlay), t.attachSource(e.mpegDashSource)
						} catch (u) {}
					}
				}
				updateUsingKeyStatus(e) {
					if (0 !== e.location) return;
					this.state.usingKeys || this.setState({
						usingKeys: !0
					});
					let t = Vt;
					this.state.settingChange === xt.Settings && (t = 5 * Vt), this.resetControlBarFadeTimer(t)
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
					return 1 === s ? B.a : s >= .95 ? B.e : s >= .75 ? B.d : s >= .5 ? B.c : s >= .25 ? B.b : 0
				}
				triggerPercentagePixels(e) {
					B.i.forEach(t => {
						t <= e && !this.percentagePixelsFired[t] && (this.props.onWatchedPercent(t), this.percentagePixelsFired[t] = !0)
					})
				}
				triggerTimeWatchedPixels(e) {
					B.j.forEach(t => {
						t <= e && !this.timePixelsFired[t] && (this.props.onWatchedSeconds(t), this.timePixelsFired[t] = !0)
					})
				}
				render() {
					const {
						className: e,
						hideUntilLoaded: t,
						playerClickPlay: s = !0,
						showControlBar: i = !0,
						showSettingsIcon: a = !0
					} = this.props, {
						hasAudio: n,
						hasHovered: o,
						hideControlBar: r,
						isMuted: l,
						settingChange: c,
						videoEnded: h,
						videoLoaded: p
					} = this.state, u = this.HTML5StreamPlayerVideo, m = c === xt.SeekBar, g = p || !t, v = g && u && 0 !== u.currentTime, y = !o && l, x = h && !m, S = Object.assign({}, this.props, {
						bitrateInfo: this.state.bitrateInfo,
						resolution: this.state.resolution,
						setAutoplay: this.setAutoplay,
						setResolution: this.setResolution,
						settingChange: c,
						settingRef: this.setSettingRef,
						toggleSetting: this.toggleSetting
					});
					return d.a.createElement(Pt, {
						setRef: this.setContainerRef,
						className: Object(f.a)(e, this.state.videoFullScreen ? Tt.a.RedditVideoPlayerRoot__Fullscreen : Tt.a.RedditVideoPlayerRoot, this.state.usingKeys ? "using-keys" : null),
						isVisible: g,
						onClick: this.handleClick,
						onKeyDown: this.handleKeyDown,
						onKeyUp: this.handleKeyUp,
						onMouseDown: this.handleMouseDown,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave,
						onMouseMove: this.handleMouseMove,
						onMouseUp: this.handleMouseUp
					}, this.props.blurImageSrc && d.a.createElement(J, {
						src: this.props.blurImageSrc
					}), d.a.createElement("video", {
						poster: this.props.posterUrl,
						loop: this.props.isGif,
						autoPlay: this.props.autoPlay,
						muted: l,
						onTimeUpdate: this.updateTime,
						preload: "metadata",
						ref: e => this.HTML5StreamPlayerVideo = e,
						className: this.state.videoFullScreen ? Tt.a.HTML5StreamPlayer__VideoFullscreen : Tt.a.HTML5StreamPlayer__VideoRegular
					}, this.props.hlsSource && d.a.createElement("source", {
						src: this.props.hlsSource,
						type: "application/vnd.apple.mpegURL"
					}), this.props.otherSource && d.a.createElement("source", {
						src: this.props.otherSource
					})), x ? d.a.createElement(gt, {
						onClick: this.resetVideo,
						postId: this.props.postId,
						source: this.props.callToActionSource,
						callToAction: this.props.callToActionText
					}) : d.a.createElement(wt, null), this.state.videoWaiting ? v && d.a.createElement(T.a, null) : this.state.videoPaused && !x && d.a.createElement(M.a, {
						onClick: s ? void 0 : this.playPauseVideo
					}), i && d.a.createElement(q.a, {
						clickSnoo: this.clickSnoo,
						controlBarRef: this.setControlBarRef,
						currentTime: u ? u.currentTime : 0,
						hasAudio: n,
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
						settingsButton: d.a.createElement(xe, S),
						scrubberThumbSource: this.props.scrubberThumbSource,
						seekBarRef: this.setSeekBarRef,
						settingChange: c,
						setVideoPosition: this.setVideoPos,
						setVolume: this.setVolume,
						showSettingsIcon: a,
						showVolumeIcon: y,
						toggleMute: this.toggleMuteVideo,
						totalTime: this.state.totalTime,
						volume: this.props.volume,
						volumeRef: this.setVolumeRef
					}))
				}
			}
			t.b = Bt(Object(V.c)(Object(L.b)(Lt)))
		},
		"./src/reddit/components/Media/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_1Wd26c2ichqUxeZVJStEJT"
			}
		},
		"./src/reddit/components/Media/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/config.ts"),
				o = s("./src/reddit/components/Media/LoadingIcon/index.m.less"),
				r = s.n(o);
			t.a = () => a.a.createElement("img", {
				className: r.a.image,
				src: "".concat(n.a.assetPath, "/img/loading.gif")
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
				a = s.n(i),
				n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less"),
				l = s.n(r);
			var c = e => a.a.createElement("svg", {
					className: Object(o.a)(l.a.icon, e.className),
					viewBox: "0 0 50 50",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					transform: "translate(1 1)"
				}, a.a.createElement("circle", {
					cx: "24",
					cy: "24",
					r: "24",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "1.92"
				}), a.a.createElement("path", {
					fill: "#fff",
					d: "M33.1 22.2l-11.5-6.7c-.3-.2-.7-.2-1 0-.3.2-.4.5-.4.8v13.4c0 .3.2.7.5.8.1.1.3.1.5.1s.3 0 .5-.1l11.5-6.7c.3-.2.5-.5.5-.8-.1-.3-.3-.6-.6-.8"
				}))),
				d = s("./src/reddit/components/PlayButton/index.m.less"),
				h = s.n(d);
			const p = n.a.wrapped(c, "PlayIcon", h.a),
				u = n.a.div("PlayContainer", h.a);
			t.a = e => a.a.createElement(u, {
				className: e.className,
				onClick: e.onClick
			}, a.a.createElement(p, null))
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
		"./src/reddit/icons/svgs/VideoContactUs/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11XLCF2uLCEj35_lDddpNT"
			}
		},
		"./src/reddit/icons/svgs/VideoGetAQuote/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "Ui8OEQfWnkN9BO2o-qSXV"
			}
		},
		"./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "o2NVVhdZrQ3VeGMHO8aA0"
			}
		},
		"./src/reddit/icons/svgs/VideoInstall/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3DFi9BDKHWFWnty75sJhyJ"
			}
		},
		"./src/reddit/icons/svgs/VideoLearnMore/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1PkP2GybP9Bh6mN4gmbPN4"
			}
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				a = s.n(i);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), a.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "eI6Ep6BNFA5DZjPWNVb4O"
			}
		},
		"./src/reddit/icons/svgs/VideoPause/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				a = s.n(i);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("rect", {
				x: "11",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}), a.a.createElement("rect", {
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
				a = s.n(i);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M18.5,9.14l-12-7A1,1,0,0,0,5,3V17a1,1,0,0,0,1.5.86l12-7a1,1,0,0,0,0-1.73Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoPlayNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1EfHCA6m0dIgLYzGW2aor1"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				r = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(n.a)(r.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				transform: "translate(1 1)"
			}, a.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), a.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoSeeMenu/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "G2_89gx6TwcALtRI4k7hc"
			}
		},
		"./src/reddit/icons/svgs/VideoShopNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2kG3YOJULmYUC8YtVtNO9J"
			}
		},
		"./src/reddit/icons/svgs/VideoSignUp/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1NxifIlpri3Af8fEoxkaUr"
			}
		},
		"./src/reddit/icons/svgs/VideoViewMore/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2X_GdgwreX3clU-MfCHx-Y"
			}
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				a = s.n(i);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), a.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), a.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoWatchNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "egx9Z9oH6-wpjLKKhAEoM"
			}
		},
		"./src/reddit/selectors/media.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			const i = e => e.mediaPlayback.isMuted,
				a = e => e.mediaPlayback.volume
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115.c97a870d5f40667f68a3.js.map