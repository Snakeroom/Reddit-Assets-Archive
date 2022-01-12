// https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-Com~82e48dd3.256c40041e9be2d6fd74.js
// Retrieved at 1/12/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation~Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-Com~82e48dd3"], {
		"./src/lib/colors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			}));
			const n = "#000",
				i = "#FFF",
				r = "#FF4500",
				o = "#0079D3",
				a = "#24A0ED",
				c = "#46D160",
				d = {
					black: n,
					white: i,
					orangered: r,
					alienblue: o,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: a,
					secondary: "#006CBF",
					upvote: r,
					downvote: "#7193FF",
					positive: c,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: r,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: r,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				l = {
					...d,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js");

			function i(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				i = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const o = Object(n.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : o;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", o.modifiers)), t
			}

			function c(e) {
				const [t, s] = Object(i.useState)(null), [o, c] = Object(i.useState)(null), [d, l] = Object(i.useState)(null), [u, m] = Object(i.useState)(!1), h = Object(i.useCallback)(async () => m(!0), []), p = Object(i.useCallback)(() => m(!1), []), f = Object(i.useCallback)(() => m(!u), [u]), b = Object(i.useMemo)(() => {
					const t = a(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: v,
					styles: g,
					update: x
				} = Object(r.a)(t, o, b);
				return Object(i.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...v.arrow
					},
					hide: p,
					popperProps: {
						ref: c,
						style: g.popper,
						...v.popper
					},
					show: h,
					target: {
						element: t,
						ref: s
					},
					toggle: f,
					visible: u,
					update: x
				}), [l, v, c, p, h, g, t, s, f, u, x])
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const i of e) t++, s += i.length, n[t] = s;
					return n
				},
				i = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const i of e) {
						for (let e = 0; e < i.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./src/reddit/featureFlags/component.tsx");
			const r = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(i.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
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
				AudioOnlyControlBar: "_35yCa6dYJNzUGsRDLtEoWU",
				audioOnlyControlBar: "_35yCa6dYJNzUGsRDLtEoWU",
				mIsFullScreen: "IlN7iDYa9yzeFlgOo0JQe",
				mHasZeroOpacity: "_1RZSSlyqzokrcxh0ESwE2e",
				button: "_15cvJJTKClcHJuPN2mcpY4"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ce
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/icons/svgs/VideoCollapse/index.tsx"),
				l = s("./src/reddit/icons/svgs/VideoExpand/index.tsx"),
				u = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				m = s("./src/reddit/icons/svgs/VideoPause/index.tsx"),
				h = s("./src/reddit/icons/svgs/VideoPlay/index.tsx"),
				p = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				f = s("./src/reddit/components/HTML5StreamPlayer/ControlGradient/index.m.less"),
				b = s.n(f),
				v = a.a.div("Component", b.a),
				g = s("./node_modules/lodash/clamp.js"),
				x = s.n(g),
				y = s("./node_modules/react-dom/index.js"),
				E = s.n(y),
				S = s("./src/lib/fastdom/index.ts");
			const C = e => {
					const t = Math.floor(e / 60).toString();
					let s = Math.trunc(e % 60).toString();
					return `${t}:${s=`0${s}`.slice(-2)}`
				},
				P = (e, t) => {
					let s = Math.floor(e / 60).toString(),
						n = Math.trunc(e % 60).toString();
					const i = Math.floor(t / 60).toString();
					return s.length < i.length && (s = `0${s}`.slice(-2)), `${s}:${n=`0${n}`.slice(-2)}`
				};
			var w = s("./src/reddit/constants/keycodes.ts"),
				T = s("./src/reddit/components/HTML5StreamPlayer/SeekBar/index.m.less"),
				_ = s.n(T);
			const O = a.a.div("Thumb", _.a),
				M = a.a.div("ProgressBar", _.a),
				j = a.a.div("Floating", _.a),
				k = a.a.video("PreviewVideo", _.a),
				L = a.a.div("PreviewTime", _.a),
				V = a.a.div("VideoSeekbar", _.a);
			class N extends r.a.PureComponent {
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
							case w.b.ArrowRight:
								return void this.jumpPlayback(5);
							case w.b.ArrowLeft:
								return void this.jumpPlayback(-5);
							case w.b.Space:
								return this.props.playPauseVideo(), void e.preventDefault()
						}
					}, this.setProgressThumbRef = e => {
						this.progressThumb = e, e && S.a.read(() => {
							const t = e.getBoundingClientRect().width / 2;
							S.a.write(() => {
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
					} = this.props, n = x()(t + e, 0, s);
					n !== t && this.props.updatePosition(n)
				}
				getCurrentPercent() {
					const {
						currentTime: e,
						totalTime: t
					} = this.props;
					return e && t ? 100 * e / t : 0
				}
				setProgress(e, t = !1) {
					this.progressBar && this.progressThumb && (!this.props.active || t) && (this.progressBar.style.width = "calc(" + e + "% + " + this.state.thumbOffset + "px)", this.progressThumb.style.marginLeft = "calc(" + e + "% - " + this.state.thumbOffset + "px)", this.setState({
						progressPercent: e
					}), this.props.updateContinuousStartTime && this.props.updateContinuousStartTime(1e3 * this.props.currentTime))
				}
				getThumbMargin(e) {
					return this.props.active && this.progressThumb ? this.progressThumb.style.marginLeft || "0" : `calc(${e}% - ${this.state.thumbOffset||0}px)`
				}
				getProgressWidth(e) {
					return this.props.active && this.progressBar ? this.progressBar.style.width : `${e}%`
				}
				setLookahead(e) {
					if (this.lookaheadBar && this.previewThumbnailContainer && this.previewThumbnailTime && this.parentRect) {
						this.lookaheadBar.style.width = e + "%";
						const {
							totalTime: t
						} = this.props, s = t * (e / 100);
						isNaN(s) || (this.previewThumbnailVideo && (this.previewThumbnailVideo.currentTime = s), this.previewThumbnailTime.innerHTML = P(s, t));
						const n = E.a.findDOMNode(this);
						if (!n || !n.parentNode) return;
						const i = n.parentNode;
						if (!(i instanceof Element)) return;
						const r = i.getBoundingClientRect(),
							o = this.parentRect.getBoundingClientRect(),
							a = this.previewThumbnailContainer.getBoundingClientRect(),
							c = r.left - o.left,
							d = r.right - o.left - a.width,
							l = e / 100 * o.width - a.width / 2;
						this.previewThumbnailContainer.style.left = Math.max(c, Math.min(l, d)) + "px"
					}
				}
				getBufferedStyle() {
					const {
						bufferedRanges: e
					} = this.props, {
						progressPercent: t
					} = this.state, s = this.getCurrentPercent();
					let n = t;
					for (let i = 0; i < e.length; i++) e[i].start <= s && (n = e[i].end);
					return {
						width: `${n=x()(n,0,100)}%`
					}
				}
				render() {
					const {
						active: e
					} = this.props, {
						progressPercent: t
					} = this.state, s = this.getCurrentPercent();
					let i = e ? t : s;
					i = x()(i, 0, 100);
					const a = {
							width: this.getProgressWidth(i) || "0"
						},
						c = {
							marginLeft: this.getThumbMargin(i),
							opacity: e ? 1 : 0
						};
					return r.a.createElement(V, {
						innerRef: this.setParentRect,
						onKeyDown: this.handleKeyDown,
						onMouseLeave: this.handleMouseLeave,
						onMouseMove: this.handleMouseMove
					}, r.a.createElement("div", {
						"aria-label": n.fbt._("Seek Slider", null, {
							hk: "1fNTBw"
						}),
						"aria-valuemax": Math.round(this.props.totalTime),
						"aria-valuemin": 0,
						"aria-valuenow": this.props.currentTime,
						className: _.a.Mainbar,
						role: "slider",
						tabIndex: 0
					}, r.a.createElement("div", {
						className: Object(o.a)(_.a.Bar, _.a.Background)
					}), r.a.createElement("div", {
						className: Object(o.a)(_.a.Bar, _.a.Lookahead),
						ref: e => this.lookaheadBar = e
					}), r.a.createElement("div", {
						className: Object(o.a)(_.a.Bar, _.a.Buffered),
						style: this.getBufferedStyle()
					}), r.a.createElement(M, {
						className: Object(o.a)(this.props.isLive && _.a.Live),
						innerRef: this.setProgressBar,
						style: a
					})), r.a.createElement(O, {
						className: Object(o.a)(this.props.isLive && _.a.Live),
						innerRef: this.setProgressThumbRef,
						style: c
					}), !this.props.controlBarIsHidden && r.a.createElement(j, {
						innerRef: this.setPreviewThumbnailContainer
					}, this.props.thumbSource && r.a.createElement(k, {
						innerRef: this.setPreviewThumbnailVideo,
						src: this.props.thumbSource
					}), r.a.createElement(L, {
						innerRef: this.setPreviewThumbnailTime
					})))
				}
			}
			var B = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				F = s("./src/reddit/icons/svgs/VideoSnoo/index.tsx"),
				R = s("./src/reddit/components/HTML5StreamPlayer/SnooButton/index.m.less"),
				I = s.n(R);
			const H = () => r.a.createElement("div", {
				className: I.a.icon
			}, r.a.createElement(F.a, null));
			var A = e => "string" == typeof e.postUrl ? r.a.createElement("a", {
					href: e.postUrl,
					className: I.a.button
				}, r.a.createElement(H, null)) : r.a.createElement(B.a, {
					to: e.postUrl,
					className: I.a.button
				}, r.a.createElement(H, null)),
				D = s("./src/reddit/components/HTML5StreamPlayer/Tooltip/index.tsx"),
				U = s("./src/reddit/components/HTML5StreamPlayer/VolumeControl/index.m.less"),
				W = s.n(U);
			class G extends i.Component {
				constructor(e) {
					super(e), this.step = .1, this.max = 1, this.min = 0, this.handleMouseDown = e => {
						if (0 === e.button && this.track) {
							e.preventDefault(), this.setState({
								isMouseDown: !0
							});
							const t = this.track.getBoundingClientRect(),
								s = 100 - (e.clientY - t.top) / t.height * 100,
								n = (this.max - this.min) * (s / 100);
							this.setState({
								value: this.adjustValue(n)
							})
						}
					}, this.handleMouseMove = e => {
						if (this.state.isMouseDown && this.track) {
							const t = this.track.getBoundingClientRect(),
								s = 100 - (e.clientY - t.top) / t.height * 100,
								n = (this.max - this.min) * (s / 100);
							this.setState({
								value: this.adjustValue(n)
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
						isMuted: n,
						volume: i
					} = this.props, {
						value: a
					} = this.state, c = n ? 0 : e ? a : i, d = this.convertVolumeToPercent(c);
					return r.a.createElement("div", {
						className: Object(o.a)(W.a.VolumeControl, t),
						ref: e => this.container = e
					}, r.a.createElement("div", {
						className: Object(o.a)(W.a.SliderTrack, W.a.SliderBar),
						ref: e => this.track = e
					}, r.a.createElement("div", {
						className: Object(o.a)(W.a.SliderProgress, W.a.SliderBar, {
							[W.a.Live]: s
						}),
						ref: e => this.progress = e,
						style: {
							height: `${d}%`
						}
					}, r.a.createElement("div", {
						className: W.a.SliderThumb
					}))))
				}
			}
			var J = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Y = s.n(J);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const K = a.a.wrapped(D.a, "TooltipControl", Y.a),
				Z = a.a.div("NormalControl", Y.a),
				q = a.a.wrapped(K, "ControlSnoo", Y.a),
				Q = a.a.wrapped(K, "ControlPlay", Y.a),
				X = a.a.wrapped(Z, "Time", Y.a),
				$ = a.a.wrapped(X, "LeftTime", Y.a),
				ee = a.a.wrapped(X, "RightTime", Y.a),
				te = a.a.div("LiveLabel", Y.a),
				se = a.a.wrapped(Z, "ControlScrubber", Y.a),
				ne = a.a.wrapped(Z, "ControlVolume", Y.a),
				ie = a.a.wrapped(K, "ControlExpand", Y.a),
				re = a.a.wrapped(K, "ControlCollapse", Y.a),
				oe = ({
					className: e,
					isFullScreen: t,
					zeroOpacity: s,
					innerRef: n,
					...i
				}) => r.a.createElement("div", z({
					className: Object(o.a)(Y.a.ControlBarContainer, e, {
						[Y.a.mIsFullScreen]: t,
						[Y.a.mHasZeroOpacity]: s
					}),
					ref: n
				}, i));
			class ae extends r.a.Component {
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
						isListing: i,
						isLive: o,
						settingsButton: a,
						settingChange: u,
						hideLiveLabel: p,
						showSettingsIcon: f
					} = this.props, b = n.fbt._("View Comments", null, {
						hk: "2Vf8xl"
					}), g = n.fbt._("Play", null, {
						hk: "2cQV3h"
					}), x = n.fbt._("Pause", null, {
						hk: "2YnRgT"
					}), y = n.fbt._("Exit Fullscreen", null, {
						hk: "LnrWa"
					}), E = n.fbt._("Fullscreen", null, {
						hk: "3JvSdn"
					}), {
						currentTime: S
					} = this.state, {
						totalTime: w
					} = o ? this.state : this.props, T = this.props.isPaused ? g : x;
					return r.a.createElement(r.a.Fragment, null, !t && r.a.createElement(v, null), s && i && r.a.createElement(q, {
						tooltip: b
					}, r.a.createElement("div", {
						onClick: this.props.clickSnoo
					}, r.a.createElement(A, {
						postUrl: s
					}))), r.a.createElement(Q, {
						tooltip: T
					}, r.a.createElement("button", {
						"aria-label": T,
						className: Y.a.button,
						onClick: this.props.playPauseVideo
					}, this.props.isPaused ? r.a.createElement(h.a, null) : r.a.createElement(m.a, null))), r.a.createElement($, null, P(S, w)), r.a.createElement(se, null, r.a.createElement(N, {
						active: u === c.a.SeekBar,
						bufferedRanges: this.state.bufferedRanges,
						controlBarIsHidden: this.props.hideControlBar,
						currentTime: S,
						isLive: o,
						ref: this.props.seekBarRef,
						thumbSource: this.props.scrubberThumbSource,
						totalTime: w,
						playPauseVideo: this.props.playPauseVideo,
						updatePosition: this.props.setVideoPosition,
						updateContinuousStartTime: this.props.updateContinuousStartTime
					})), o ? p ? null : r.a.createElement(te, {
						"aria-label": n.fbt._("live", null, {
							hk: "1rkHRc"
						}),
						onClick: () => this.props.setVideoPosition(w)
					}, n.fbt._("Live", null, {
						hk: "3bCYlO"
					})) : r.a.createElement(ee, null, C(w)), f && a, !e && (this.props.isFullScreen ? r.a.createElement(re, {
						tooltip: y
					}, r.a.createElement("button", {
						"aria-label": y,
						className: Y.a.button,
						onClick: this.props.exitFullScreen
					}, r.a.createElement(d.a, null))) : r.a.createElement(ie, {
						tooltip: E
					}, r.a.createElement("button", {
						"aria-label": E,
						className: Y.a.button,
						onClick: this.props.enterFullScreen
					}, r.a.createElement(l.a, null)))))
				}
				render() {
					const {
						controlBarRef: e,
						isLive: t
					} = this.props;
					return r.a.createElement(oe, {
						className: this.props.className,
						innerRef: t => e && e(t),
						isFullScreen: this.props.isFullScreen,
						zeroOpacity: this.props.hideControlBar
					}, this.renderContent(), this.props.hasAudio && r.a.createElement(ne, {
						className: this.props.showVolumeIcon ? "disableHide" : ""
					}, r.a.createElement(G, {
						className: Y.a.VolumeControl,
						ref: e => this.props.volumeRef(e),
						active: this.props.settingChange === c.a.Volume,
						isMuted: this.props.isMuted,
						isLive: t,
						setVolume: this.props.setVolume,
						volume: this.props.volume
					}), r.a.createElement("button", {
						className: Y.a.button,
						onClick: this.props.toggleMute
					}, this.props.isMuted ? r.a.createElement(u.a, null) : r.a.createElement(p.a, null))))
				}
			}
			t.b = ae;
			const ce = e => r.a.createElement(oe, {
				className: Y.a.AudioOnlyControlBar,
				isFullScreen: e.isFullScreen,
				zeroOpacity: e.hideControlBar
			}, r.a.createElement(ne, null, r.a.createElement(G, {
				className: Y.a.VolumeControl,
				ref: t => e.volumeRef(t),
				active: e.settingChange === c.a.Volume,
				isMuted: e.isMuted,
				isLive: e.isLive,
				setVolume: e.setVolume,
				volume: e.volume
			}), r.a.createElement("button", {
				className: Y.a.button,
				onClick: e.toggleMute
			}, e.isMuted ? r.a.createElement(u.a, null) : r.a.createElement(p.a, null))))
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
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				a = s("./src/reddit/components/HTML5StreamPlayer/Tooltip/index.m.less"),
				c = s.n(a),
				d = s("./src/lib/lessComponent.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = 8,
				m = d.a.span("TooltipPopup", c.a),
				h = ({
					className: e,
					setRef: t,
					disable: s,
					...n
				}) => i.a.createElement("div", l({
					className: Object(r.a)(c.a.TooltipControl, e, {
						[c.a.mNotDisable]: !s
					}),
					ref: t
				}, n));
			class p extends n.Component {
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
								n = e.getBoundingClientRect(),
								i = e.parentNode.getBoundingClientRect(),
								r = i.left - n.left + u,
								a = i.right - n.left - s.width - u,
								c = n.width / 2 - s.width / 2;
							o.a.write(() => {
								t.style.left = Math.max(r, Math.min(c, a)) + "px"
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
						tooltip: n
					} = this.props;
					return i.a.createElement(h, {
						onMouseEnter: this.onMouseEnter,
						setRef: e => this.container = e,
						className: e,
						disable: s
					}, i.a.createElement(m, {
						className: c.a.TooltipPopup,
						innerRef: e => this.tooltipContainer = e
					}, n), t)
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
				html5StreamPlayerVideoRegular: "_1EQJpXY7ExS04odI1YBBlj",
				VideoBackgroundStyles: "_14LIEiRn-naKqUT7DJ8vwV",
				videoBackgroundStyles: "_14LIEiRn-naKqUT7DJ8vwV"
			}
		},
		"./src/reddit/components/HTML5StreamPlayer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Ve
			}));
			var n = s("./node_modules/bowser/src/bowser.js"),
				i = s.n(n),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/colors/constants.ts"),
				h = s("./src/lib/combineRefs/index.tsx"),
				p = s("./src/lib/domUtils/index.ts");
			const f = () => {
					const e = navigator.userAgent || navigator.vendor || window.opera;
					return /android/i.test(e) ? "Android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "iOS" : "unknown"
				},
				b = () => "Android" === f() || "iOS" === f();
			var v = s("./src/lib/loadWithRetries/index.ts"),
				g = s("./src/lib/sentry/index.ts"),
				x = s("./src/reddit/actions/media.ts"),
				y = s("./src/reddit/actions/preferences.ts"),
				E = s("./src/reddit/actions/video.ts"),
				S = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				C = s("./src/reddit/components/PlayButton/index.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/constants/video.ts"),
				T = s("./src/reddit/contexts/InsideOverlay.tsx"),
				_ = s("./src/reddit/helpers/overlay/index.ts"),
				O = s("./src/reddit/helpers/trackers/media.ts"),
				M = s("./src/reddit/selectors/media.ts"),
				j = s("./src/reddit/selectors/platform.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/selectors/video.ts"),
				N = s("./src/reddit/components/HTML5StreamPlayer/BlurImage/index.m.less"),
				B = s.n(N),
				F = s("./src/lib/lessComponent.tsx"),
				R = F.a.img("Component", B.a),
				I = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				H = s("./node_modules/fbt/lib/FbtPublic.js"),
				A = s("./src/reddit/icons/svgs/VideoCheckmark/index.tsx"),
				D = s("./src/reddit/components/HTML5StreamPlayer/SettingControl/index.m.less"),
				U = s.n(D);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const G = 0,
				J = [1080, 720],
				Y = [...J, 480, 360, 240, G],
				z = e => c.a.createElement("button", {
					"aria-checked": e.isChecked,
					className: U.a.SetAutoplayButton,
					onClick: e.onClick,
					role: "checkbox",
					tabIndex: 0
				}, c.a.createElement(A.a, null), c.a.createElement("div", {
					className: U.a.AutoplayDescription
				}, H.fbt._("Autoplay", null, {
					hk: "1x30w1"
				}))),
				K = e => {
					const {
						resolution: t,
						onClick: s,
						isChecked: n
					} = e;
					return c.a.createElement("button", {
						"aria-checked": n,
						className: U.a.VideoResolutionButton,
						onClick: s,
						role: "radio",
						tabIndex: 0
					}, c.a.createElement(A.a, null), c.a.createElement("div", {
						className: U.a.VideoResolutionDescription
					}, t === G ? H.fbt._("Auto", null, {
						hk: "6zgZT"
					}) : c.a.createElement(c.a.Fragment, null, c.a.createElement("span", null, t, "p"), J.includes(t) && c.a.createElement("span", {
						className: U.a.VideoHd
					}, " ", H.fbt._("HD", null, {
						hk: "2KjxjH"
					})))))
				},
				Z = ({
					isActive: e,
					className: t,
					innerRef: s,
					...n
				}) => c.a.createElement("div", W({
					className: Object(u.a)(U.a.SettingControlContainer, t, {
						[U.a.mIsActive]: e
					}),
					ref: s
				}, n));
			class q extends a.Component {
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
						isLoggedIn: n,
						resolution: i
					} = this.props, r = [...t.map(e => e.height), G];
					return c.a.createElement(Z, {
						innerRef: this.setContainerRef,
						className: Object(u.a)(U.a.VideoSettingContainer, s),
						isActive: e
					}, n && c.a.createElement("div", {
						className: U.a.AutoplayContainer
					}, c.a.createElement(z, {
						isChecked: this.state.autoplayPref,
						onClick: this.setAutoplay
					})), c.a.createElement("div", {
						className: U.a.VideoResolutionContainer,
						role: "radiogroup"
					}, Y.map((e, t) => r.includes(e) ? c.a.createElement(K, {
						key: t,
						resolution: e,
						onClick: () => this.setResolution(e),
						isChecked: i === e
					}) : null)))
				}
			}
			var Q = s("./src/reddit/components/HTML5StreamPlayer/Tooltip/index.tsx"),
				X = s("./src/reddit/icons/svgs/VideoSetting/index.tsx"),
				$ = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				ee = s.n($);
			const te = F.a.wrapped(Q.a, "TooltipControl", ee.a),
				se = F.a.wrapped(te, "ControlSetting", ee.a);
			class ne extends a.Component {
				render() {
					const {
						autoplayPref: e,
						bitrateInfo: t,
						isLoggedIn: s,
						resolution: n,
						setAutoplay: i,
						setResolution: r,
						settingChange: o,
						settingRef: a,
						toggleSetting: d
					} = this.props;
					return c.a.createElement(se, {
						key: "setting",
						className: ee.a.AnimatedSettingIconParent,
						tooltip: H.fbt._("Settings", null, {
							hk: "1AhVBJ"
						}),
						disable: o === Ve.Settings
					}, o === Ve.Settings && c.a.createElement(q, {
						className: ee.a.VideoSettingContainer,
						isLoggedIn: s,
						autoplayPref: e,
						active: o === Ve.Settings,
						ref: e => a(e),
						resolution: n,
						setResolution: r,
						setAutoplay: i,
						bitrateInfo: t
					}), c.a.createElement("button", {
						"aria-expanded": o === Ve.Settings,
						"aria-haspopup": !0,
						"aria-label": H.fbt._("Settings", null, {
							hk: "4jfIa6"
						}),
						className: ee.a.button,
						onClick: d
					}, c.a.createElement(X.a, {
						className: ee.a.SettingIcon
					})))
				}
			}
			var ie = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				re = s("./src/reddit/selectors/telemetry.ts"),
				oe = s("./src/reddit/icons/svgs/VideoApplyNow/index.tsx"),
				ae = s("./src/reddit/icons/svgs/VideoContactUs/index.tsx"),
				ce = s("./src/reddit/icons/svgs/VideoGetAQuote/index.tsx"),
				de = s("./src/reddit/icons/svgs/VideoGetShowtimes/index.tsx"),
				le = s("./src/reddit/icons/svgs/VideoInstall/index.tsx"),
				ue = s("./src/reddit/icons/svgs/VideoLearnMore/index.tsx"),
				me = s("./src/reddit/icons/svgs/VideoPlayNow/index.tsx"),
				he = s("./src/reddit/icons/svgs/VideoSeeMenu/index.tsx"),
				pe = s("./src/reddit/icons/svgs/VideoShopNow/index.tsx"),
				fe = s("./src/reddit/icons/svgs/VideoSignUp/index.tsx"),
				be = s("./src/reddit/icons/svgs/VideoViewMore/index.tsx"),
				ve = s("./src/reddit/icons/svgs/VideoWatchNow/index.tsx"),
				ge = s("./src/reddit/components/VideoCTA/index.m.less"),
				xe = s.n(ge);
			const ye = {
				"Apply Now": c.a.createElement(oe.a, null),
				"Contact Us": c.a.createElement(ae.a, null),
				"Learn More": c.a.createElement(ue.a, null),
				"Get a Quote": c.a.createElement(ce.a, null),
				"Get Showtimes": c.a.createElement(de.a, null),
				Install: c.a.createElement(le.a, null),
				Download: c.a.createElement(le.a, null),
				"Learn More": c.a.createElement(ue.a, null),
				"Play Now": c.a.createElement(me.a, null),
				"See Menu": c.a.createElement(he.a, null),
				"Shop Now": c.a.createElement(pe.a, null),
				"Sign Up": c.a.createElement(fe.a, null),
				"View More": c.a.createElement(be.a, null),
				"Watch Now": c.a.createElement(ve.a, null)
			};
			var Ee = Object(P.c)(e => {
					const {
						callToAction: t,
						postId: s,
						sendEvent: n,
						source: i
					} = e;
					return c.a.createElement(ie.a, {
						className: xe.a.ctaLink,
						onClick: e => n(e => ({
							...Object(re.o)(e),
							source: "videoplayer",
							action: "click",
							noun: "callToAction"
						})),
						href: i.url,
						isSponsored: !0,
						postId: s,
						source: i
					}, c.a.createElement("div", {
						className: xe.a.ctaWrapper
					}, (e => ye[e = e || "Learn More"])(t), c.a.createElement("span", {
						className: xe.a.ctaText
					}, t || "Learn More")))
				}),
				Se = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				Ce = s("./src/reddit/components/HTML5StreamPlayer/ReplayVideo/index.m.less"),
				Pe = s.n(Ce);
			const we = F.a.div("Centered", Pe.a),
				Te = F.a.div("EndedOverlay", Pe.a),
				_e = F.a.span("ReplayText", Pe.a),
				Oe = F.a.button("ReplayButton", Pe.a);
			var Me = e => {
					const {
						onClick: t,
						source: s,
						callToAction: n,
						postId: i
					} = e;
					return c.a.createElement(Te, {
						onClick: t
					}, c.a.createElement(we, null, c.a.createElement(Oe, null, c.a.createElement(Se.a, null), c.a.createElement(_e, {
						className: "replay-video"
					}, H.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					}))), s && n && c.a.createElement(Ee, {
						callToAction: n,
						postId: i,
						source: s
					})))
				},
				je = s("./src/reddit/components/HTML5StreamPlayer/VideoContainer/index.m.less"),
				ke = s.n(je);

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Ve, Ne = ({
					className: e,
					isVisible: t,
					setRef: s,
					...n
				}) => c.a.createElement("div", Le({
					className: Object(u.a)(ke.a.Component, e, {
						[ke.a.mIsNotVisible]: !t
					}),
					ref: s
				}, n)),
				Be = s("./src/reddit/components/HTML5StreamPlayer/VideoOverlay/index.m.less"),
				Fe = s.n(Be),
				Re = F.a.div("Component", Fe.a),
				Ie = s("./src/reddit/components/HTML5StreamPlayer/index.m.less"),
				He = s.n(Ie);
			! function(e) {
				e[e.SeekBar = 0] = "SeekBar", e[e.Settings = 1] = "Settings", e[e.Volume = 2] = "Volume"
			}(Ve || (Ve = {}));
			const Ae = 3e3,
				De = 6e3,
				Ue = 100,
				We = Object(d.b)(() => Object(l.c)({
					isLoggedIn: L.J,
					autoplayPref: L.b,
					currentTime: V.c,
					currentUser: L.k,
					isOverlayOpen: j.i,
					loadTimes: V.f,
					metadata: V.h,
					mutedInFeed: V.i,
					postUrl: k.J,
					started: V.k,
					volume: M.d
				}), (e, {
					postId: t
				}) => ({
					exitVideoFullscreen: () => e(E.t()),
					onLoadStarted: s => {
						t && e(E.q(t, s))
					},
					onMetadataReceived: t => e(E.D({
						metadata: t,
						postId: t.id
					})),
					onPlayable: s => {
						t && e(E.A(t, s))
					},
					onUpdateVideoTime: o()(s => {
						t && e(E.I({
							postId: t,
							time: s
						}))
					}, w.l, {
						maxWait: w.m
					}),
					openLightbox: s => {
						s ? e(Object(_.a)(s)) : g.c.withScope(e => {
							e.setExtra("info", {
								postId: t,
								postUrl: s
							}), g.c.captureMessage("Post lightbox cannot be opened with a falsy postUrl")
						})
					},
					setPlaying: s => {
						t && e(E.H({
							postId: t,
							isPlaying: s
						}))
					},
					setAutoplayPref: t => e(y.t(t)),
					setVideoFullscreen: () => {
						t && e(E.F(t))
					},
					setVideoMuted: (s, n) => e(x.g(s, n, t)),
					setVideoVolume: t => e(x.h(t)),
					onWatchedPercent: s => {
						t && e(E.N(s, t))
					},
					onWatchedSeconds: s => {
						t && e(E.O(s, t))
					},
					onUpdateContinuousViewStartTime: s => {
						t && e(E.K(t, s))
					},
					onVideoStarted: () => {
						t && e(E.M(t))
					},
					onVideoReset: () => {
						t && e(E.L(t))
					},
					setMutedInFeed: t => e(E.G(t))
				}));
			class Ge extends a.Component {
				constructor(e) {
					super(e), this.isSeekingWithRetry = !1, this.percentagePixelsFired = {
						[w.b]: !1,
						[w.c]: !1,
						[w.d]: !1,
						[w.e]: !1,
						[w.a]: !1
					}, this.timePixelsFired = {
						[w.g]: !1,
						[w.h]: !1,
						[w.f]: !1
					}, this.sendEvent = (e, t, s = !1) => {
						if (this.HTML5StreamPlayerVideo && null != this.props.postId) {
							const n = s ? O.b(this.props.postId, e, t) : O.a(this.props.postId, e, t);
							this.props.sendEvent(n)
						}
					}, this.resetMediaPlayer = () => {
						const e = this.HTML5StreamPlayerVideo,
							t = this.props.mpegDashSource;
						if (!e || !t) return;
						const {
							currentTime: s
						} = e;
						this.setState({
							isRecovering: !0
						}), e.addEventListener("loadedmetadata", async () => {
							e.currentTime = s, await e.play(), this.setState({
								isRecovering: !1
							})
						}, {
							once: !0
						}), this.dashPlayer.attachSource(t)
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
								t = !!e && e.getHasAudioTrack();
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
							settingChange: Ve.Volume
						}), s.handleMouseDown(e)) : t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: Ve.SeekBar
						}), t.handleMouseDown(e)), this.state.usingKeys && this.setState({
							usingKeys: !1
						})
					}, this.handleMouseMove = e => {
						const {
							controlBar: t,
							seekBar: s,
							volumeControl: n
						} = this;
						switch (this.setState({
							hasHovered: !0
						}), t && t.contains(e.target) ? this.clearControlBarFadeTimer() : this.resetControlBarFadeTimer(), this.state.settingChange) {
							case Ve.SeekBar:
								s && s.handleMouseMove(e);
								break;
							case Ve.Volume:
								n && n.handleMouseMove(e);
								break;
							case Ve.Settings:
						}
					}, this.handleMouseUp = e => {
						e.stopPropagation();
						const {
							controlBar: t,
							seekBar: s,
							volumeControl: n
						} = this;
						switch (this.state.settingChange) {
							case Ve.SeekBar:
								if (s) {
									this.setState({
										ignoreUnderrunsUntil: Date.now() + Ue
									}), s.handleMouseUp(e), this.sendEvent("click", "seek");
									const t = this.HTML5StreamPlayerVideo;
									this.state.videoEnded && t && t.currentTime !== t.duration && this.playVideo()
								}
								break;
							case Ve.Volume:
								n && (n.handleMouseUp(e), this.sendEvent("click", "volume"));
								break;
							case Ve.Settings:
								if (t && t.contains(e.target)) return;
								break;
							default:
								if (t && !t.contains(e.target)) {
									const {
										playerClickPlay: t = !0
									} = this.props;
									if (this.props.trackPostClick && this.props.trackPostClick("media")(), this.resetControlBarFadeTimer(), this.state.videoEnded) return;
									if (this.props.isGif && this.props.isListing && !this.state.videoPaused) {
										if (this.props.isSponsored && this.props.onAdPostClick) return void this.props.onAdPostClick(e);
										this.props.openLightbox(this.props.postUrl)
									} else !t && this.state.videoPaused || this.playPauseVideo(e)
								}
						}
						this.setState({
							settingChange: void 0
						})
					}, this.handleMouseLeave = e => {
						switch (this.clearControlBarFadeTimer(), this.setState({
							hideControlBar: !0
						}), this.state.settingChange) {
							case Ve.SeekBar:
							case Ve.Volume:
							case Ve.Settings:
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
								}), this.props.playFromStart) return this.setVideoPos(0), void(this.isUnobscured() && this.playVideo());
							this.autoplay() && this.playVideo()
						}
					}, this.clearControlBarFadeTimer = () => {
						const {
							controlBarFadeTimer: e
						} = this;
						e && clearTimeout(e)
					}, this.resetControlBarFadeTimer = (e = Ae) => {
						this.clearControlBarFadeTimer(), this.setState({
							hideControlBar: !1
						}), this.controlBarFadeTimer = window.setTimeout(() => {
							this.setState({
								hideControlBar: !0
							})
						}, e)
					}, this.exitHandler = () => {
						this.state.videoFullScreen && !Object(p.b)() && this.exitFullScreen()
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
							this.setVideoMute(this.state.isMuted, !1), await e.play(), e.currentTime < 1 && this.props.onVideoStarted(), this.setState({
								videoStarted: !0,
								videoEnded: !1
							})
						} catch (t) {}
					}, this.pauseVideo = () => {
						const e = this.HTML5StreamPlayerVideo;
						e && e.pause()
					}, this.resetVideo = e => {
						this.isUnobscured && this.state.videoEnded && (this.resetVideoWithRetry(), this.sendEvent("click", "replay"), this.setState({
							ignoreUnderrunsUntil: Date.now() + Ue,
							videoEnded: !1,
							videoManualPaused: !1
						}), this.props.onVideoReset())
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
						s && (s.volume = e);
						const n = !e,
							i = this.state.isMuted !== n,
							r = this.state.volume !== e;
						t ? (e && (r && this.setState({
							volume: e
						}), this.props.setVideoVolume(e)), this.props.setMutedInFeed(n)) : i && this.setState({
							isMuted: n
						})
					}, this.toggleMuteVideo = e => {
						e.stopPropagation();
						const t = !this.state.isMuted;
						this.setVideoMute(t, !0);
						const s = t ? "mute" : "unmute";
						this.sendEvent("click", s)
					}, this.setVideoMute = (e, t) => {
						const s = this.HTML5StreamPlayerVideo;
						s && (e || (s.volume = this.state.volume), s.muted = e), this.setState({
							isMuted: e
						}), this.props.setVideoMuted(e, t), this.props.setMutedInFeed(e)
					}, this.clickSnoo = e => {
						this.state.videoFullScreen && this.exitFullScreen(), this.sendEvent("click", "snoo")
					}, this.setAutoplay = e => {
						this.props.setAutoplayPref(e), e ? this.sendEvent("click", "video_autoplay_on") : this.sendEvent("click", "video_autoplay_off")
					}, this.setResolution = e => {
						const {
							bitrateInfo: t
						} = this.state;
						if (t && this.dashPlayer) {
							if (e === G) this.dashPlayer.updateSettings({
								streaming: {
									abr: {
										autoSwitchBitrate: {
											video: !0
										}
									}
								}
							});
							else {
								const s = t.findIndex(t => t.height === e);
								this.dashPlayer.updateSettings({
									streaming: {
										abr: {
											autoSwitchBitrate: {
												video: !1
											}
										}
									}
								}), this.dashPlayer.setQualityFor("video", s)
							}
							this.setState({
								resolution: e
							})
						}
					}, this.toggleSetting = e => {
						this.state.settingChange === Ve.Settings ? this.setState({
							settingChange: void 0
						}) : this.setState({
							settingChange: Ve.Settings
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
								let n = !1;
								this.triggerAdWatchedPixels(t.currentTime, t.duration, s / 1e3), t.currentTime >= t.duration && (this.props.isGif || (n = !0, this.pauseVideo())), this.controlBarApi && !this.state.hideControlBar && this.controlBarApi.setCurrentTime(t.currentTime), this.setState({
									videoEnded: n,
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
						const n = this.getWatchedPercentRange(e, t);
						this.triggerPercentagePixels(n);
						s / t >= .95 && this.triggerTimeWatchedPixels(w.f), this.triggerTimeWatchedPixels(s)
					}, this.updateContinuousStartTime = e => {
						this.props.onUpdateContinuousViewStartTime(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e)
					}, this.onPlay = e => {
						const t = performance.now();
						this.setState({
							videoPaused: !1,
							lastUpdate: t,
							videoStarted: !0
						}), this.props.setPlaying(!0)
					}, this.onPause = e => {
						this.setState({
							videoPaused: !0
						}), this.props.setPlaying(!1)
					}, this.onPlaying = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.setState({
							videoWaiting: !1,
							videoStarted: !0
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
						this.HTML5StreamPlayerVideo = e, this.HTML5StreamPlayerVideo && (this.HTML5StreamPlayerVideo.volume = this.state.volume)
					}, Ge.dashjs || (Ge.dashjs = Object(v.a)(() => s.e("vendors~dashjs").then(s.t.bind(null, "./node_modules/dashjs/build/es5/index.js", 7))));
					const t = !!e.isListing && e.mutedInFeed;
					this.state = {
						bitrateInfo: [],
						hasAudio: !1,
						hasHovered: !1,
						hideControlBar: !0,
						isMuted: t,
						isRecovering: !1,
						lastUpdate: null,
						ignoreUnderrunsUntil: 0,
						maxTimeServed: 0,
						resolution: G,
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
						videoStarted: !1,
						videoWaiting: !0,
						volume: e.volume,
						usingKeys: !1
					}, this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
				}
				autoplayPref(e = this.props) {
					return e.autoplayPref || e.isOverlay || e.isExpando || !!e.shouldIgnoreAutoplayPref
				}
				shouldAutoplay(e = this.props) {
					return !!e.autoPlay && this.autoplayPref(e)
				}
				isUnobscured(e = this.props) {
					return !e.isListing || e.isOverlay || !e.isOverlayOpen
				}
				isInViewport(e = this.props, t = this.state) {
					return !e.isListing || e.isOverlay || !!e.isExpando || !t.videoScrollPaused
				}
				autoplay(e = this.props, t = this.state) {
					return this.shouldAutoplay(e) && this.isUnobscured(e) && this.isInViewport(e, t)
				}
				componentDidMount() {
					Ge.dashjs.then(e => {
						var t, s;
						const n = this.HTML5StreamPlayerVideo,
							i = this.props.mpegDashSource;
						if (n && i) {
							this.dashPlayer = e.MediaPlayer().create();
							try {
								this.dashPlayer.initialize(n, i, n.autoplay || !n.paused), this.setBufferTime(w.i), this.dashPlayer.updateSettings({
									streaming: {
										fastSwitchEnabled: !0,
										abr: {
											initialBitrate: {
												video: 999999999
											},
											autoSwitchBitrate: {
												video: !0
											}
										}
									}
								})
							} catch (r) {
								return
							}
							null != this.props.postId && this.props.onLoadStarted(performance.now()), this.dashPlayer.on(e.MediaPlayer.events.STREAM_INITIALIZED, () => {
								this.getVideoQualityList(), this.getAudioInfo(), null != this.props.postId && this.props.onPlayable(performance.now()), this.controlBarApi && !this.state.hideControlBar && this.controlBarApi.setCurrentTime(0)
							}), this.dashPlayer.on(e.MediaPlayer.events.BUFFER_EMPTY, e => {
								if (null != this.props.postId && Date.now() > this.state.ignoreUnderrunsUntil) {
									const e = O.c(this.props.postId);
									this.props.sendEvent(e), this.setState({
										ignoreUnderrunsUntil: Date.now() + Ue
									})
								}
							}), n.addEventListener("error", this.resetMediaPlayer), null === (s = (t = this.props).onDashCreate) || void 0 === s || s.call(t, this.dashPlayer)
						}
					});
					const e = this.HTML5StreamPlayerVideo;
					document.addEventListener("webkitfullscreenchange", this.exitHandler, !1), document.addEventListener("fullscreenchange", this.exitHandler, !1), document.addEventListener("mozfullscreenchange", this.exitHandler, !1), document.addEventListener("MSFullscreenChange", this.exitHandler, !1), e && (b() ? e.play() : i.a.safari && !this.props.mpegDashSource && setTimeout(async () => {
						try {
							await e.play()
						} catch (t) {} finally {
							e.pause()
						}
					}), e.oncanplay = () => this.onCanPlay(), e.onprogress = () => this.setBuffered(), e.onseeked = () => this.setState({
						videoWaiting: !1
					}), e.onwaiting = () => this.setState({
						videoWaiting: !0
					}), e.onplaying = e => this.onPlaying(e), e.onplay = e => this.onPlay(e), e.onpause = e => this.onPause(e), e.onloadeddata = e => this.onVideoPlayable(e), e.onloadedmetadata = e => this.sendTransformedMetadata(e), this.props.currentTime && (e.currentTime = this.props.currentTime))
				}
				componentDidUpdate(e) {
					const {
						isListing: t,
						mutedInFeed: s,
						videoRef: n,
						volume: i
					} = this.props;
					n !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(n)), t && this.state.videoPaused && (s !== e.mutedInFeed && s !== this.state.isMuted && this.setState({
						isMuted: s
					}), i !== e.volume && (this.HTML5StreamPlayerVideo && (this.HTML5StreamPlayerVideo.volume = i), i !== this.state.volume && this.setState({
						volume: i
					}))), t || s === this.state.isMuted || this.setState({
						isMuted: s
					})
				}
				async destroyMediaPlayer() {
					var e, t;
					this.dashPlayer && (await (null === (t = (e = this.props).onDashDestroy) || void 0 === t ? void 0 : t.call(e, this.dashPlayer)), this.dashPlayer.destroy(), this.dashPlayer = null)
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.exitHandler, !1), document.removeEventListener("fullscreenchange", this.exitHandler, !1), document.removeEventListener("mozfullscreenchange", this.exitHandler, !1), document.removeEventListener("MSFullscreenChange", this.exitHandler, !1), this.destroyMediaPlayer(), this.clearControlBarFadeTimer(), null == this.props.postId || this.state.videoScrollPaused || this.sendEvent("served", "video", !0)
				}
				shouldComponentUpdate(e, t) {
					const s = !!this.props.isListing && !this.props.isOverlayOpen && e.isOverlayOpen,
						n = !!this.props.isListing && this.props.isOverlayOpen && !e.isOverlayOpen,
						i = this.props.isOverlayOpen !== e.isOverlayOpen,
						r = !!this.props.isListing && e.mutedInFeed !== this.props.mutedInFeed,
						o = e.volume !== this.props.volume;
					return t.videoFullScreen !== this.state.videoFullScreen || t.videoPaused !== this.state.videoPaused || t.isMuted !== this.state.isMuted || t.hideControlBar !== this.state.hideControlBar || t.settingChange !== this.state.settingChange || t.videoScrollPaused !== this.state.videoScrollPaused || t.videoWaiting !== this.state.videoWaiting || t.isRecovering !== this.state.isRecovering || e.shouldPause !== this.props.shouldPause || e.shouldStop !== this.props.shouldStop || t.videoLoaded !== this.state.videoLoaded || t.usingKeys !== this.state.usingKeys || t.resolution !== this.state.resolution || t.videoStarted !== this.state.videoStarted || s || n || i || r || o
				}
				UNSAFE_componentWillReceiveProps(e, t) {
					const s = this.HTML5StreamPlayerVideo,
						n = s && !s.paused,
						i = !e.shouldStop && this.props.shouldStop,
						r = e.shouldStop && !this.props.shouldStop,
						o = !e.shouldPause && this.props.shouldPause,
						a = e.shouldPause && !this.props.shouldPause,
						c = !this.props.shouldPause && !this.props.shouldStop,
						d = !e.isOverlay && !this.props.isOverlay,
						l = e.isOverlayOpen && !this.props.isOverlayOpen,
						u = !e.isOverlayOpen && this.props.isOverlayOpen,
						m = (c || n) && d && l,
						h = c && d && u;
					if (i && (this.setState({
							videoScrollPaused: !1
						}), this.sendEvent("view", "autoplay")), (o || h) && (!this.state.videoManualPaused && s && s.currentTime < s.duration && (e.currentTime && (s.currentTime = e.currentTime), this.autoplay(e, t) && this.playVideo()), h && this.sendEvent("change", "pagetype", !0)), (a || m) && (this.pauseVideo(), m && this.sendEvent("change", "pagetype", !0)), r && (this.pauseVideo(), this.setState({
							videoScrollPaused: !0
						}), this.sendEvent("served", "video", !0), this.state.videoEnded || (this.sendEvent("scroll", "pause"), this.props.isListing || this.setVideoMute(!0, !1))), e.mpegDashSource && this.props.mpegDashSource !== e.mpegDashSource) {
						const {
							dashPlayer: s
						} = this;
						try {
							s.setAutoPlay(this.autoplay(e, t)), s.attachSource(this.props.mpegDashSource)
						} catch (p) {}
					}
				}
				updateUsingKeyStatus(e) {
					if (0 !== e.location) return;
					this.state.usingKeys || this.setState({
						usingKeys: !0
					});
					let t = De;
					this.state.settingChange === Ve.Settings && (t = 5 * De), this.resetControlBarFadeTimer(t)
				}
				setBuffered() {
					const e = this.HTML5StreamPlayerVideo;
					if (e && this.controlBarApi) {
						const t = [];
						for (let s = 0; s < e.buffered.length; s++) {
							const n = {
								start: e.buffered.start(s) / e.duration * 100,
								end: e.buffered.end(s) / e.duration * 100
							};
							t.push(n)
						}
						this.controlBarApi.setBufferedRanges(t)
					}
				}
				resetVideoWithRetry() {
					const e = this.HTML5StreamPlayerVideo;
					if (this.isSeekingWithRetry || !e) return;
					this.isSeekingWithRetry = !0;
					let t = 0,
						s = 0;
					const n = () => {
							this.isSeekingWithRetry = !1, window.clearInterval(i), e.removeEventListener("seeked", n)
						},
						i = window.setInterval(() => {
							!e || e.paused || s !== e.currentTime || t > 5 ? n() : (s = .016 * Math.pow(2, t), e.currentTime = s, t++)
						}, 100);
					e.addEventListener("seeked", n, {
						once: !0
					}), this.setVideoPos(s), this.playVideo()
				}
				setBufferTime(e) {
					this.dashPlayer && this.dashPlayer.updateSettings({
						streaming: {
							bufferTimeAtTopQuality: e,
							bufferTimeAtTopQualityLongForm: e,
							stableBufferTime: e
						}
					})
				}
				getWatchedPercentRange(e, t) {
					const s = e / t;
					return s >= 1 ? w.a : s >= .95 ? w.e : s >= .75 ? w.d : s >= .5 ? w.c : s >= .25 ? w.b : 0
				}
				triggerPercentagePixels(e) {
					w.j.forEach(t => {
						t <= e && !this.percentagePixelsFired[t] && (this.props.onWatchedPercent(t), this.percentagePixelsFired[t] = !0)
					})
				}
				triggerTimeWatchedPixels(e) {
					w.k.forEach(t => {
						t <= e && !this.timePixelsFired[t] && (this.props.onWatchedSeconds(t), this.timePixelsFired[t] = !0)
					})
				}
				combineExternalVideoRef(e) {
					return e ? Object(h.a)(this.videoRef, e) : this.videoRef
				}
				render() {
					const {
						className: e,
						hideUntilLoaded: t,
						playerClickPlay: s = !0,
						showControlBar: n = !0,
						showSettingsIcon: i = !0
					} = this.props, {
						hasAudio: r,
						hasHovered: o,
						hideControlBar: a,
						isMuted: d,
						isRecovering: l,
						settingChange: h,
						videoEnded: p,
						videoLoaded: f,
						videoStarted: b
					} = this.state, v = this.HTML5StreamPlayerVideo, g = h === Ve.SeekBar, x = f || !t, y = x && v && 0 !== v.currentTime, E = !o && d, P = p && !g, w = {
						...this.props,
						bitrateInfo: this.state.bitrateInfo,
						resolution: this.state.resolution,
						setAutoplay: this.setAutoplay,
						setResolution: this.setResolution,
						settingChange: h,
						settingRef: this.setSettingRef,
						toggleSetting: this.toggleSetting
					};
					return c.a.createElement(Ne, {
						setRef: this.setContainerRef,
						className: Object(u.a)(e, this.state.videoFullScreen ? He.a.RedditVideoPlayerRoot__Fullscreen : He.a.RedditVideoPlayerRoot, this.state.usingKeys ? "using-keys" : null),
						isVisible: x,
						onClick: this.handleClick,
						onKeyDown: this.handleKeyDown,
						onKeyUp: this.handleKeyUp,
						onMouseDown: this.handleMouseDown,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave,
						onMouseMove: this.handleMouseMove,
						onMouseUp: this.handleMouseUp
					}, this.props.blurImageSrc && c.a.createElement(R, {
						src: this.props.blurImageSrc
					}), !b && c.a.createElement("div", {
						style: {
							backgroundColor: m.b,
							backgroundImage: `url(${this.props.posterUrl})`,
							zIndex: 10
						},
						className: this.state.videoFullScreen ? He.a.HTML5StreamPlayer__VideoFullscreen : He.a.HTML5StreamPlayer__VideoRegular
					}), c.a.createElement("video", {
						style: {
							backgroundColor: m.b
						},
						loop: this.props.isGif,
						muted: d,
						onTimeUpdate: this.updateTime,
						preload: "metadata",
						ref: this.combinedVideoRefs,
						className: this.state.videoFullScreen ? He.a.HTML5StreamPlayer__VideoFullscreen : He.a.HTML5StreamPlayer__VideoRegular
					}, this.props.hlsSource && c.a.createElement("source", {
						src: this.props.hlsSource,
						type: "application/vnd.apple.mpegURL"
					}), this.props.otherSource && c.a.createElement("source", {
						src: this.props.otherSource
					})), P ? c.a.createElement(Me, {
						onClick: this.resetVideo,
						postId: this.props.postId,
						source: this.props.callToActionSource,
						callToAction: this.props.callToActionText
					}) : c.a.createElement(Re, null), l ? c.a.createElement(S.a, null) : this.state.videoWaiting ? y && c.a.createElement(S.a, null) : this.state.videoPaused && !P && c.a.createElement(C.a, {
						onClick: s ? void 0 : this.playPauseVideo
					}), n && c.a.createElement(I.b, {
						clickSnoo: this.clickSnoo,
						controlBarRef: this.setControlBarRef,
						currentTime: v ? v.currentTime : 0,
						hasAudio: r,
						updateContinuousStartTime: this.updateContinuousStartTime,
						enterFullScreen: this.enterFullScreen,
						exitFullScreen: this.exitFullScreen,
						hideControlBar: a,
						isFullScreen: this.state.videoFullScreen,
						isListing: this.props.isListing,
						isMuted: this.state.isMuted,
						isPaused: this.state.videoPaused,
						playPauseVideo: this.playPauseVideo,
						postUrl: this.props.postUrl,
						ref: this.setControlBarApi,
						settingsButton: c.a.createElement(ne, w),
						scrubberThumbSource: this.props.scrubberThumbSource,
						seekBarRef: this.setSeekBarRef,
						settingChange: h,
						setVideoPosition: this.setVideoPos,
						setVolume: this.setVolume,
						showSettingsIcon: i,
						showVolumeIcon: E,
						toggleMute: this.toggleMuteVideo,
						totalTime: this.state.totalTime,
						volume: this.state.volume,
						volumeRef: this.setVolumeRef
					}))
				}
			}
			t.b = We(Object(P.c)(Object(T.b)(Ge)))
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "f", (function() {
				return w
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/lodash/isNil.js"),
				c = s.n(a),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
								...n
							}
						} = this;
						l.a.publish(d.a, n, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? i.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && i.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var h = Object(r.b)(u, {})(m),
				p = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const s = Object(f.b)(e, t),
					n = Object(b.G)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var g = Object(r.b)(() => Object(o.a)(v, p.j, (e, t) => ({
				...e,
				depth: t
			})))(e => i.a.createElement(h, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const x = (e, t) => {
				const s = Object(f.b)(e, t),
					n = Object(b.G)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var y = Object(r.b)(() => Object(o.a)(x, e => e))(e => i.a.createElement(h, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var E = Object(r.b)(() => Object(o.c)({
					subreddit: b.R
				}))(e => i.a.createElement(h, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				S = s("./src/reddit/hooks/usePostContext.ts");
			var C = e => {
				const t = Object(S.a)(),
					s = Object(n.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? i.a.createElement(h, {
					className: e.className,
					type: "post",
					data: s
				}) : null
			};
			var P = e => {
				const t = Object(S.a)(),
					s = Object(n.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? i.a.createElement(h, {
					className: e.className,
					type: "postAuthor",
					data: s
				}) : null
			};
			var w = e => {
				const t = Object(S.a)(),
					s = Object(n.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? i.a.createElement(h, {
					className: e.className,
					type: "postModTools",
					data: s
				}) : null
			};
			var T = Object(r.b)(() => Object(o.c)({
				subreddit: b.R
			}))(e => i.a.createElement(h, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var _ = Object(r.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(b.J)(e, {
					identifier: t
				})
			}))(e => i.a.createElement(h, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var O = Object(r.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(b.R)(e, {
					subredditId: t
				}) : null
			}))(e => i.a.createElement(h, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/reddit/components/Media/index.m.less"),
				a = s.n(o);
			const c = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? n.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? n.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = ({
					isNSFW: e,
					isSpoiler: t
				}) => r.a.createElement("div", {
					className: a.a.unblurButtonContainer
				}, r.a.createElement("button", {
					className: a.a.unblurButton
				}, c(e, t)))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				p = s.n(h);
			const f = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				b = Object(r.b)(() => Object(o.c)({
					isNightmodeOn: m.W
				}));
			t.a = b(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), i.a.createElement("iframe", {
					className: Object(c.a)(l.a, p.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: f,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = s("./src/reddit/components/Media/BlurredContent.tsx"),
				p = s("./src/reddit/components/PlayButton/index.tsx"),
				f = s("./src/reddit/constants/elementClassNames.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				x = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/constants/tracking.ts"),
				w = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				T = s.n(w);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => e > 2 * x.e,
				M = e => {
					const t = Object(d.a)(T.a.image, f.g, e.className, {
							[T.a.mShowCentered]: e.showCentered,
							[T.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${x.j}px`), e.isListing || e.isTall && O(e.height) || (s.maxHeight = `${x.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), r.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				j = e => {
					const t = {};
					return (!e.showFull && Object(x.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${x.j}px`, e.shouldBlur && (t.maxWidth = Object(x.L)(e.height, e.width) ? `${x.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), r.a.createElement("div", {
						className: Object(d.a)(T.a.container, e.className),
						style: t
					}, e.children)
				},
				k = Object(o.b)(() => Object(c.a)(E.G, C.cb, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(E.b)(e, s) : null, y.a, S.d, E.H, (e, t, s, n, i, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					sendGoodVisitEvent: n,
					pageType: i.pageType,
					post: r
				})));
			t.a = k(e => {
				const t = e.sendGoodVisitEvent ? Object(g.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? r.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(b.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(v.a)(e.post, e.pageType)
					}
				}, V(e)) : e.isListing && e.postPermalink ? r.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink),
					onClick: e.onPostMediaClick
				}, V(e)) : V(e)
			});
			const L = (e, t) => r.a.createElement(M, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[P.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				V = ({
					onClick: e,
					...t
				}) => {
					const s = Object(x.L)(t.height, t.width),
						i = O(t.height) && s;
					return r.a.createElement(j, _({}, t, {
						className: `${s?`${P.a} `:""}${t.className||""}`
					}), t.isListing ? r.a.createElement("div", {
						className: t.contentImageClassName
					}, L(s, t)) : r.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: T.a.imageLink
					}, L(s, t), t.shouldBlur && !t.isVideoThumbnail && r.a.createElement(h.a, {
						isNSFW: !!t.isNSFW,
						isSpoiler: !!t.isSpoiler
					})), t.isListing && !t.showFull && t.height > x.j && Object(x.L)(t.height, t.width) && r.a.createElement("div", {
						className: T.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && r.a.createElement(p.a, {
						onClick: e
					}))
				}
		},
		"./src/reddit/components/Media/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_1Wd26c2ichqUxeZVJStEJT"
			}
		},
		"./src/reddit/components/Media/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/config.ts"),
				o = s("./src/reddit/components/Media/LoadingIcon/index.m.less"),
				a = s.n(o);
			t.a = () => i.a.createElement("img", {
				className: a.a.image,
				src: `${r.a.assetPath}/img/loading.gif`
			})
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/forceHttps/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = s.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? i.a.createElement("img", {
						className: d.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return i.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && i.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), i.a.createElement("div", {
					className: Object(r.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends i.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return i.a.Children.only(this.props.children) || i.a.createElement("div", null)
					}
					return i.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/selectors/video.ts");
			const f = 100,
				b = f / 2 / 1e3;
			var v = s("./src/lib/forceHttps/index.ts"),
				g = s("./src/lib/hooks/usePrevious.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function y({
				autoplay: e,
				isListing: t,
				isNotCardView: s,
				onBufferingChange: n,
				shouldLoad: i,
				shouldPause: a,
				showCentered: c,
				showFull: d,
				source: l,
				...u
			}) {
				const m = Object(r.useRef)(),
					h = Object(r.useRef)(),
					p = Object(g.a)(a);

				function y(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(r.useEffect)(() => {
					if (y(!a && (e || s)), h.current && n) return m.current = function(e, t) {
						let s = !1,
							n = !1;
						const i = () => s = !0,
							r = () => n = !0;
						e.addEventListener("loadeddata", i), e.addEventListener("play", r), e.addEventListener("playing", r);
						let o = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, n) return n = !1, void(a = c);
							if (e.paused || e.seeking || !s) return void(a = c);
							const i = o;
							4 === e.readyState ? o = !1 : !o && c >= a && c < a + b ? o = !0 : o && c >= a && c > a + b && (o = !1), a = c, i !== o && t(o)
						}, f);
						return () => {
							clearInterval(d), e.removeEventListener("playing", r), e.removeEventListener("play", r), e.removeEventListener("loadeddata", i)
						}
					}(h.current, n), () => {
						m.current && m.current()
					}
				}, []), Object(r.useEffect)(() => {
					p !== a && y(!a && (e || s))
				}, [p, a, e, s]), o.a.createElement("video", x({}, u, {
					ref: e => h.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(v.a)(l || "")
				}))
			}
			var E = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				S = s.n(E);
			const C = Object(c.c)({
				autoplayPref: h.b,
				consumed: p.a,
				loadTimes: p.f,
				metadata: p.h,
				started: p.k
			});

			function P(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: n,
					metadata: r,
					started: c
				} = Object(a.e)(t => C(t, e)), {
					postId: h,
					shouldLoad: p,
					source: f,
					height: b,
					isNotCardView: v,
					showFull: g,
					shouldPause: x,
					width: E,
					isListing: P,
					className: w,
					showCentered: T,
					originalSource: _
				} = e, O = Object(a.d)();

				function M(e) {
					O(e ? Object(l.r)(h) : Object(l.E)(h))
				}

				function j() {
					return O(Object(l.z)({
						postId: h
					}))
				}
				const k = i()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && O(Object(l.s)(h))
				}, 200);

				function L(e) {
					e.persist(), k(e)
				}

				function V(e) {
					var t;
					(r || B(e), c) || (t = e.timeStamp, O(Object(l.A)(h, t)))
				}

				function N(e) {
					O(Object(l.q)(h, e.timeStamp))
				}

				function B(e) {
					! function(e) {
						O(Object(l.D)({
							metadata: e,
							postId: h
						}))
					}({
						id: h,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function F(e) {
					n || V(e), r || B(e), O(Object(l.C)(h))
				}

				function R() {
					const e = {};
					return T && (e.margin = "0 auto"), P || (e.maxHeight = `${m.e}px`), o.a.createElement(y, {
						autoplay: t,
						className: Object(d.a)(u.a, S.a.styledVideo),
						height: b,
						isListing: P,
						isNotCardView: v,
						key: h,
						loop: !0,
						onBufferingChange: M,
						onLoadStart: N,
						onLoadedData: V,
						onLoadedMetadata: B,
						onPause: j,
						onPlaying: F,
						onTimeUpdate: L,
						shouldLoad: p,
						shouldPause: x,
						showCentered: T,
						showFull: g,
						source: f,
						style: e,
						width: E
					})
				}
				return P ? R() : o.a.createElement("div", {
					className: Object(d.a)(S.a.container, w, {
						[S.a.centered]: T
					})
				}, o.a.createElement("a", {
					href: _,
					target: "_blank",
					rel: "noopener noreferrer"
				}, R()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/icons/svgs/VideoNewPlayButton/index.tsx"),
				a = s("./src/reddit/components/PlayButton/index.m.less"),
				c = s.n(a);
			const d = r.a.wrapped(o.a, "PlayIcon", c.a),
				l = r.a.div("PlayContainer", c.a);
			t.a = e => i.a.createElement(l, {
				className: e.className,
				onClick: e.onClick
			}, i.a.createElement(d, {
				className: e.playIconClassName
			}))
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				h = s.n(m);
			const p = Object(o.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				f = c.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, n, i) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									i && n(s, i), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", h.a);
			t.a = p(Object(a.a)(f))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "top"],
				f = ["left", "bottom"],
				b = m.a.span("InnerSpan", u.a),
				v = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				x = m.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => r.a.createElement(g, h({}, s, {
					className: Object(o.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				y = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return r.a.createElement(x, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, r.a.createElement(b, null, r.a.createElement(v, {
						innerRef: this.setTooltipTargetRef
					}), r.a.createElement(y, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: p,
						tooltipPosition: f
					}), this.props.children))
				}
			}
			t.a = E
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "v", (function() {
				return v
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "u", (function() {
				return E
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "m", (function() {
				return P
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "t", (function() {
				return T
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "o", (function() {
				return O
			})), s.d(t, "q", (function() {
				return M
			})), s.d(t, "s", (function() {
				return j
			})), s.d(t, "r", (function() {
				return k
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "w", (function() {
				return V
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/controls/OutboundLink/index.tsx"),
				o = s("./src/reddit/components/RichTextJson/elements.m.less"),
				a = s.n(o),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				h = c.a.pre("Pre", a.a),
				p = c.a.blockquote("Blockquote", a.a),
				f = c.a.p("P", a.a),
				b = c.a.li("Li", a.a),
				v = c.a.ul("Ul", a.a),
				g = c.a.ol("Ol", a.a),
				x = c.a.strong("B", a.a),
				y = c.a.em("I", a.a),
				E = c.a.span("U", a.a),
				S = e => i.a.createElement("del", e),
				C = c.a.sub("Sub", a.a),
				P = c.a.sup("Sup", a.a),
				w = c.a.table("Table", a.a),
				T = c.a.tr("Tr", a.a),
				_ = c.a.td("Tdl", a.a),
				O = c.a.td("Tdc", a.a),
				M = c.a.td("Tdr", a.a),
				j = c.a.th("Thl", a.a),
				k = c.a.th("Thc", a.a),
				L = (c.a.th("Thr", a.a), c.a.wrapped(e => i.a.createElement(r.b, e), "A", a.a)),
				V = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return T
			}));
			var n = s("./node_modules/lodash/findLastIndex.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/components/Media/BlurredContent.tsx"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				f = s("./src/reddit/components/RichTextJson/media.tsx"),
				b = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				v = s("./src/reddit/components/RichTextJson/index.m.less"),
				g = s.n(v);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = s("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				E = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => o.a.createElement(y, x({}, s, {
					style: {
						color: Object(h.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				S = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				C = e => i()(e, S),
				P = e => e.findIndex(S),
				w = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: i,
						isNSFW: r,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: h,
						rtJsonElementProps: v,
						useExplicitTextColor: x,
						shouldBlur: S
					} = e, w = n.document, T = [], _ = e.mediaMetadata || null, O = P(w), M = C(w);
					if (S && !i) return o.a.createElement(y, {
						className: Object(a.a)(u.j, s)
					}, o.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: d
					}, Object(l.b)(!!r, !!c))));
					if (-1 !== O)
						for (let o = O; o <= M; o++) {
							const e = w[o];
							switch (e.e) {
								case p.k:
									T.push(b.c(e, v, o));
									break;
								case p.l:
									T.push(b.d(o));
									break;
								case p.b:
									T.push(b.a(e, _, v, o));
									break;
								case p.c:
									T.push(b.b(e, o));
									break;
								case p.p:
									T.push(b.f(e, _, v, o));
									break;
								case p.z:
									T.push(b.h(e, _, v, o));
									break;
								case p.u:
									T.push(b.g(e, _, v, o));
									break;
								case p.h:
									T.push(Object(f.a)(e, o));
									break;
								case p.m:
								case p.a:
								case p.D:
									T.push(...Object(f.b)(e, o, _, h, m, t))
							}
						}
					return x ? o.a.createElement(y, {
						className: Object(a.a)(u.j, s)
					}, T) : o.a.createElement(E, {
						className: Object(a.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, T)
				};
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return w(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				h = s("./src/reddit/helpers/richTextJson/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				f = s("./src/reddit/components/RichTextJson/elements.tsx"),
				b = s("./src/reddit/components/RichTextJson/media.m.less"),
				v = s.n(b),
				g = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = /\/(\w+)\/asset\/(\w+)\//,
				E = g.a.wrapped(f.a, "A", v.a),
				S = g.a.wrapped(l.a, "ImageBox", v.a),
				C = g.a.wrapped(e => r.a.createElement("p", e), "Caption", v.a),
				P = g.a.div("Placeholder", v.a),
				w = g.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const i = t === p.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return r.a.createElement(P, x({
						className: e,
						style: {
							"--placeholder-content-text": `'${i}'`
						}
					}, s))
				}, "Placeholder", v.a),
				T = ({
					c: e,
					x: t,
					y: s
				}, n) => r.a.createElement("div", {
					className: v.a.MediaWrapper
				}, r.a.createElement(u.a, {
					height: s,
					isListing: !1,
					key: n,
					showCentered: !0,
					showFull: !0,
					width: t
				}, r.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: s,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				_ = (e, t, s) => {
					const n = e.c;
					let i = "";
					return s && (s.e === p.s ? i = s.s.u : s.e === p.r ? i = s.s.gif : s.e === p.t && (i = (e => {
						const t = y.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), i ? r.a.createElement(E, {
						href: i,
						key: t,
						title: n
					}, n || i) : null
				},
				O = (e, t, s, n, i, a) => {
					const d = p.E(s, e.id);
					if (n) return [_(e, t, d)];
					const l = [];
					return d ? d.e === p.s ? l.push((({
						id: e,
						s: t
					}, s, n, i) => r.a.createElement("div", {
						className: Object(o.a)(v.a.MediaWrapper, {
							[v.a.mHasCaption]: n
						})
					}, r.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, r.a.createElement(S, {
						altText: i,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(d, t, !!e.c, a)) : d.e === p.r ? l.push((({
						id: e,
						ext: t,
						s
					}, n, i) => {
						if (Object(h.g)(e)) {
							const a = t || Object(h.f)(e);
							return r.a.createElement("div", {
								className: Object(o.a)(v.a.MediaWrapper, {
									[v.a.mHasCaption]: i
								})
							}, r.a.createElement(E, {
								href: a,
								key: n,
								target: "_blank"
							}, s.mp4 ? r.a.createElement("video", {
								className: v.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, r.a.createElement("source", {
								src: s.mp4
							})) : {
								originalSource: a
							}))
						}
						return r.a.createElement("div", {
							className: Object(o.a)(v.a.MediaWrapper, {
								[v.a.mHasCaption]: i
							})
						}, r.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							key: n,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, r.a.createElement(m.a, {
							height: s.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: s.mp4,
							width: s.x,
							postId: e,
							source: s.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === p.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: s,
						y: n,
						isGif: i
					}, a, d, l) => r.a.createElement("div", {
						className: Object(o.a)(v.a.MediaWrapper, {
							[v.a.mHasCaption]: d
						})
					}, r.a.createElement(u.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: s
					}, r.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: i,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: i
					}))))(d, t, !!e.c, i)) : l.push(((e, t) => r.a.createElement(w, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => r.a.createElement(C, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return L
			})), s.d(t, "d", (function() {
				return V
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "b", (function() {
				return B
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "h", (function() {
				return I
			})), s.d(t, "g", (function() {
				return H
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "e", (function() {
				return D
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				i = s("./node_modules/lodash/reduce.js"),
				r = s.n(i),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/higherOrderComponents/makeAsync.tsx");
			var b = Object(f.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				v = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = s.n(v);
			const x = 1e3,
				y = 1e3;
			var E;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(E || (E = {}));
			class S extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = E.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = E.Inside, setTimeout(() => {
							this.mouseLocation === E.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, x)
					}, this.onMouseOut = () => {
						this.mouseLocation = E.Outside, setTimeout(() => {
							this.mouseLocation !== E.Inside && this.setState({
								tooltipOpen: !1
							})
						}, y)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.jb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, i;
					t.e === h.s ? (s = t.s.x, n = t.s.y, i = t.s.u) : t.e === h.r && (s = t.s.x, n = t.s.y, i = t.s.gif);
					const r = this.state.tooltipOpen ? l()() : void 0;
					return i ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: r,
						src: i,
						width: s,
						height: n,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(b, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: r,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var C = Object(u.c)(S),
				P = s("./src/reddit/components/RichTextJson/media.tsx"),
				w = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				T = s("./src/reddit/components/SubredditMention/index.tsx"),
				_ = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				O = s("./src/reddit/helpers/isComment.ts"),
				M = s("./src/reddit/helpers/isPost.ts"),
				j = s("./src/reddit/helpers/richTextJson/index.ts"),
				k = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const L = (e, t, s) => {
					const n = e.c || [],
						i = e.l,
						r = [],
						o = n.length;
					for (let a = 0; a < o; a++) {
						const e = n[a];
						r.push(e.e === h.w ? e.t : D(e, t, a))
					}
					const d = c.x[i - 1];
					return a.a.createElement(d, {
						key: s
					}, r)
				},
				V = e => a.a.createElement(c.e, {
					key: e
				}),
				N = (e, t, s, n) => {
					const i = e.c;
					if (!i) return;
					const r = i.length,
						o = [];
					for (let a = 0; a < r; a++) o.push(R(i[a], t, s, a));
					return a.a.createElement(c.c, {
						key: n
					}, o)
				},
				B = (e, t) => {
					const s = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				F = (e, t, s, n) => {
					const i = e.c,
						r = [],
						o = i.length;
					for (let l = 0; l < o; l++) {
						const e = i[l].c;
						e && e.length && r.push(a.a.createElement(c.g, {
							key: l
						}, e.map((e, n) => R(e, t, s, n))))
					}
					const d = e.o ? c.i : c.v;
					return a.a.createElement(d, {
						key: n
					}, r)
				},
				R = (e, t, s, n) => {
					switch (e.e) {
						case h.b:
							return N(e, t, s, n);
						case h.c:
							return B(e, n);
						case h.k:
							return L(e, s, n);
						case h.l:
							return V(n);
						case h.p:
							return F(e, t, s, n);
						case h.u:
							return H(e, t, s, n);
						case h.z:
							return I(e, t, s, n)
					}
				},
				I = (e, t, s, n) => {
					const i = e.c,
						r = e.h,
						o = i.length,
						d = r.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = r[c],
							{
								H: n,
								D: i
							} = J(e.a),
							{
								c: o = []
							} = e;
						l.push(a.a.createElement(n, {
							key: c
						}, A(o, t, s))), m[c] = i
					}
					for (let h = 0; h < o; h++) {
						const e = i[h],
							n = e.length,
							r = [];
						for (let i = 0; i < n; i++) {
							const n = m[i],
								{
									c: o = []
								} = e[i];
							r.push(a.a.createElement(n, {
								key: i
							}, A(o, t, s)))
						}
						u.push(a.a.createElement(c.t, {
							key: h
						}, r))
					}
					return a.a.createElement(c.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				H = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const i = e.c[0];
					return i.e !== h.m && i.e !== h.a || !Object(j.g)(i.id) ? a.a.createElement(c.j, {
						key: n
					}, A(e.c, t, s)) : Object(P.b)(i, n, t)
				},
				A = (e, t, s) => {
					const n = [],
						i = e.length;
					for (let r = 0; r < i; r++) {
						const i = e[r];
						if (i.e === h.A) n.push(U(i, r));
						else if (i.e === h.x) n.push(a.a.createElement(w.a, {
							key: r
						}, A(i.c, t, s)));
						else if (i.e === h.n) n.push(a.a.createElement("br", {
							key: r
						}));
						else if (i.e === h.m || i.e === h.a) {
							if (i.id.startsWith("emote|")) {
								const e = h.E(t, i.id);
								e && n.push(a.a.createElement(C, {
									key: r,
									node: i,
									media: e
								}))
							}
						} else n.push(D(i, s, r))
					}
					return n
				},
				D = (e, t, s) => {
					switch (e.e) {
						case h.o:
							const n = U({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(_.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let i, r;
							const o = Object(k.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(M.b)(d) && (i = d.postId), d && Object(O.b)(d) && (r = d.id, i = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: o,
								postId: i,
								commentId: r
							}, n);
						case h.y:
							return a.a.createElement(T.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case h.B:
						case h.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case h.g:
						case h.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				U = (e, t) => {
					const {
						f: s,
						t: i
					} = e, r = [];
					if (!s) return G(0, i, t);
					const o = Object(n.a)(i);
					let a = 0,
						c = 0;
					const d = s.length;
					for (; a < d; a++) {
						const [e, t, n] = s[a], d = t + n, l = o[t], u = o[d] - l;
						l > c && r.push(G(0, i.substr(c, l - c), `between${a}`)), r.push(G(e, i.substr(l, u), a)), c = l + u
					}
					return c < i.length && r.push(G(0, i.substr(c), `remaining${a}`)), r
				},
				W = {
					[h.j.monospace]: c.h,
					[h.j.bold]: c.b,
					[h.j.italic]: c.f,
					[h.j.underline]: c.u,
					[h.j.strikethrough]: c.d,
					[h.j.subscript]: c.l,
					[h.j.superscript]: c.m
				},
				G = (e, t, s) => {
					let n = t;
					return n = r()(W, (t, n, i) => e & parseInt(i, 10) ? a.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				J = e => {
					switch (e) {
						case h.f:
							return {
								H: c.r, D: c.q
							};
						case h.d:
							return {
								H: c.r, D: c.o
							};
						case h.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(c);
			const l = r.a.wrapped(o.b, "SubredditIcon", d.a),
				u = r.a.wrapped(e => i.a.createElement(a.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var h = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => i.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, i.a.createElement(l.a, {
						href: `/r/${e}/`
					}, i.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, i.a.createElement(l.b, null)), `r/${e}`))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				v = s("./src/reddit/selectors/subredditMention.ts");
			class g extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(b.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return i.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const x = Object(p.c)(g),
				y = Object(o.c)({
					isFeatureFlagEnabled: v.b,
					isUserInTreatment: v.e,
					userVariant: v.a
				}),
				E = Object(r.b)(y),
				S = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: n,
					rtJsonElementProps: r
				}) => {
					if (!t || !e) return i.a.createElement(x, {
						subredditName: s,
						rtJsonElementProps: r
					});
					switch (n) {
						case f.Qe.SmIcon:
							return i.a.createElement(h, {
								subredditName: s,
								rtJsonElementProps: r
							});
						case f.Qe.SmIconHc:
							return i.a.createElement(h, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: r
							});
						default:
							return i.a.createElement(x, {
								subredditName: s,
								rtJsonElementProps: r
							})
					}
				};
			t.b = E(S)
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const i = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => r[i({
					type: e
				})][t]()
		},
		"./src/reddit/components/VideoCTA/index.m.less": function(e, t, s) {
			e.exports = {
				ctaLink: "_2FH_xFiDZCFtYKBJAmSpeD",
				ctaText: "_3uyGw8SwblJ37jvDUd-0Z_",
				ctaWrapper: "_267SSeon8aryjeoh4UclX8"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				userIsSubscriber: o.db
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = "reddit",
				i = "reddit.ready",
				r = "reddit.urlChanged"
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, o = r;
					return n ? i.a.createElement(t, o) : void 0 !== s ? i.a.createElement(s, o) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, s) {
			"use strict";

			function n(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function i(e) {
				const {
					subreddit: t,
					amount: s,
					memo: n,
					cta: i
				} = e;
				return t && s && n && i ? {
					subreddit: t,
					amount: s,
					memo: n,
					cta: i
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			}))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/isComment.ts"),
				r = s("./src/reddit/helpers/isPost.ts"),
				o = s("./src/telemetry/models/Outbound.ts");
			const a = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(i.b)(e) || Object(r.b)(e))) return Object(i.b)(e) ? o.SourceElement.Comment : Object(n.x)(t) ? o.SourceElement.PostDetail : Object(n.H)(t) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return S
			}));
			var n, i, r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(i || (i = {}));
			const m = e => ({
					...u.o(e),
					source: i.LINK,
					action: r.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				h = e => ({
					...u.o(e),
					source: i,
					screen: u.ab(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				p = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(a.b)(s) && !Object(o.b)(s)) return {
						outbound: void 0
					};
					const i = Object(a.b)(s) ? "postId" : "commentId",
						r = {
							url: `/r/${n}/`,
							sourceElement: Object(c.a)(t),
							subredditName: n,
							[i]: s.id
						},
						d = Object(l.w)(e, {
							subredditName: n
						});
					return d ? {
						outbound: {
							...r,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...r
						}
					}
				},
				f = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(a.b)(s) && !Object(o.b)(s)) return {};
					const n = Object(a.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.I(e, s.id),
						subreddit: u.kb(e, n),
						...p(e, t)
					}
				},
				b = e => t => ({
					...m(t),
					...f(t, e)
				}),
				v = e => t => ({
					...h(t),
					source: "global",
					action: r.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.ab(t)
				}),
				g = (e, t) => s => ({
					...h(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: n.ITEM_POST,
					post: u.I(s, t),
					subreddit: u.lb(s, e),
					screen: u.ab(s)
				}),
				x = (e, t) => s => ({
					...h(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.ITEM_POST,
					post: u.I(s, t),
					subreddit: u.lb(s, e),
					screen: u.ab(s)
				}),
				y = e => t => ({
					...h(t),
					subreddit: u.kb(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...h(t),
					subreddit: u.kb(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				S = e => t => ({
					...h(t),
					subreddit: u.kb(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = ({
				className: e
			}) => i.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				fillRule: "evenodd"
			}, i.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), i.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1x0QJr7iXMkiGpOnQbAvYN"
			}
		},
		"./src/reddit/icons/svgs/VideoApplyNow/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoApplyNow/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoCheckmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 77.06 60"
			}, i.a.createElement("g", {
				fill: "none"
			}, i.a.createElement("path", {
				d: "M75.17,11.35l-44.9,46.7a6.17,6.17,0,0,1-9,0L1.88,37.55a6.83,6.83,0,0,1,0-9.4,6.17,6.17,0,0,1,9,0l15,15.8L66.27,2a6.17,6.17,0,0,1,9,0A6.93,6.93,0,0,1,75.17,11.35Z",
				fill: "#FFFFFF"
			})))
		},
		"./src/reddit/icons/svgs/VideoCollapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M14.41,13H17a1,1,0,0,0,0-2H12a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V14.41l3.24,3.24a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoContactUs/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
				fill: "#fff",
				d: "M34.5 23.7s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1-.1-.1-.1-.2-.1l-15.4-7.2c-.1-.1-.3-.1-.5 0-.1.1-.2.2-.2.4v4.3c0 .2.2.4.4.5l10.3 1.9H18.2c-.1 0-.2 0-.2.1L15.6 25c-.2.1-.3.3-.2.6.1.2.2.3.5.3l2.4-.2v5.5c0 .2.1.3.2.4.1 0 .2.1.3.1h.2l15.4-7.2s.1 0 .1-.1c0 0 .1 0 .1-.1.1-.1.1-.2.1-.3-.1-.1-.2-.2-.2-.3"
			})))
		},
		"./src/reddit/icons/svgs/VideoExpand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M9,3A1,1,0,0,0,8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V5.41L7.24,8.66A1,1,0,0,0,8.66,7.24L5.41,4H8A1,1,0,0,0,9,3Z",
				fill: "#FFFFFF"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoGetAQuote/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoGetShowtimes/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoInstall/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoLearnMore/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
				fill: "#fff",
				d: "M25.4 24c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4zm5.3 0c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.8 0 1.4.6 1.4 1.4zm-10.5 0c0 .8-.6 1.4-1.4 1.4s-1.5-.6-1.5-1.4.6-1.4 1.4-1.4 1.5.6 1.5 1.4z"
			})))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoNewPlayButton/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
				fill: "#fff",
				d: "M33.1 22.2l-11.5-6.7c-.3-.2-.7-.2-1 0-.3.2-.4.5-.4.8v13.4c0 .3.2.7.5.8.1.1.3.1.5.1s.3 0 .5-.1l11.5-6.7c.3-.2.5-.5.5-.8-.1-.3-.3-.6-.6-.8"
			})))
		},
		"./src/reddit/icons/svgs/VideoPause/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("rect", {
				x: "11",
				y: "2",
				width: "6",
				height: "16",
				rx: "1",
				ry: "1",
				fill: "#FFFFFF"
			}), i.a.createElement("rect", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoPlayNow/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoSeeMenu/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
				fill: "#fff",
				d: "M29.3 20.2h-5.8c-.2 0-.5-.3-.5-.5 0-.3.2-.5.5-.5h5.8c.3 0 .5.2.5.5 0 .2-.3.5-.5.5zm0 4.3h-5.8c-.2 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm0 4.3h-5.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5.8c.3 0 .5.2.5.5s-.3.5-.5.5zm-8.2-8.2c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm0 4.4c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v2zm0 4.3c0 .3-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5v-1.9c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5v1.9zm8.7-13H18.2c-1.1 0-1.9.9-1.9 1.9v11.5c0 1.1.9 1.9 1.9 1.9h11.5c1.1 0 1.9-.9 1.9-1.9V18.2c.1-1-.8-1.9-1.8-1.9z"
			})))
		},
		"./src/reddit/icons/svgs/VideoSetting/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoShopNow/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoSignUp/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
				fill: "#fff",
				d: "M27.7 20.4h-7.4c-.2 0-.4-.2-.4-.4s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.3.4-.5.4m0 3.1h-7.4c-.2 0-.4-.3-.4-.5 0-.3.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.2-.3.5-.5.5m0 3h-7.4c-.2 0-.4-.2-.4-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5-.1.3-.3.5-.5.5m0 3h-7.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7.3c.3 0 .5.2.5.5s-.2.5-.4.5m2-12.2h-2.2c-.3-.6-1-1-1.7-1h-3.6c-.7 0-1.4.4-1.7 1h-2.2c-.5 0-1 .4-1 1v12.5c0 .5.4 1 1 1h11.5c.5 0 1-.4 1-1V18.2c-.1-.5-.5-.9-1.1-.9"
			})))
		},
		"./src/reddit/icons/svgs/VideoSnoo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "16px",
				height: "16px",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, i.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoViewMore/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
				fill: "#fff",
				d: "M29.8 23H25v-4.8c0-.5-.4-1-1-1s-1 .4-1 1V23h-4.8c-.5 0-1 .4-1 1s.4 1 1 1H23v4.8c0 .5.4 1 1 1s1-.4 1-1V25h4.8c.5 0 1-.4 1-1s-.5-1-1-1"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), i.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), i.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/VideoWatchNow/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(1 1)"
			}, i.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), i.a.createElement("path", {
				fill: "#fff",
				d: "M32.2 20.3c-.3-.2-.7-.2-1 0l-2.4 1.4v-1.5c0-1.1-.9-1.9-1.9-1.9h-7.7c-1.1 0-1.9.9-1.9 1.9v7.7c0 1.1.9 1.9 1.9 1.9h7.7c1.1 0 1.9-.9 1.9-1.9v-1.6l2.4 1.4c.2.1.3.1.5.1s.3 0 .5-.1c.3-.2.5-.5.5-.8v-5.8c-.1-.3-.2-.6-.5-.8"
			})))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function i(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: n.he
				}) === n.Wc
			}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			const a = e => i.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: n.Ke
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.Qe.SmIcon || t === n.Qe.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const s = Object(o.V)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts");
			const i = e => !r(e) && !!e.user.prefs.subscriptionsPinned,
				r = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Mb.MODERATION_PAGES),
				o = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				i = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/actions/jsApi.ts");
			const o = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = s("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(o, `${n.a.redditUrl}${c}`, e))
					} catch (s) {
						return void console.error(o, `${n.a.redditUrl}${c}`, s)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, s) {
					const n = {
						name: e,
						props: t,
						element: s
					};
					this.queue.push(n), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(n)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					i.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-Com~82e48dd3.256c40041e9be2d6fd74.js.map