// https://www.redditstatic.com/desktop2x/Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34.07e94a7b07f90a0824f9.js
// Retrieved at 1/27/2020, 2:10:16 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34"], {
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./src/reddit/models/Media/index.ts"),
				n = s("./node_modules/url/url.js"),
				i = s.n(n);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: n
				} = e;
				let o = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					o = n || Object(r.A)(e)
				} else o = Object(r.A)(e);
				const a = i.a.parse(o),
					c = a.path || "",
					l = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (a.hostname ? a.hostname.replace("www.", "") : "") + l
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/lodash/every.js"),
				n = s.n(r);

			function i(e) {
				let t = null,
					s = null;
				return function() {
					for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
					return null !== t && i.length === t.length && n()(i, (e, s) => e === t[s]) || (t = i, s = e(...i)), s
				}
			}
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			const r = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				n = 1e3,
				i = 100 * n,
				o = 10 * i,
				a = 100 * o,
				c = 10 * a,
				l = 100 * c,
				d = 51;

			function m(e, t) {
				return t ? r(e.toString()) : e >= l - d ? "".concat(Math.floor(e / c), "b") : e >= c - d && e < l - d ? "".concat((e / c).toFixed(1), "b") : e >= a - d && e < c - d ? "".concat(Math.floor(e / o), "m") : e >= o - d && e < a - d ? "".concat((e / o).toFixed(1), "m") : e >= i - d && e < o - d ? "".concat(Math.floor(e / n), "k") : e >= n && e < i - d ? "".concat((e / n).toFixed(1), "k") : String(e)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/app/strings/index.ts"),
				n = s("./src/lib/constants/index.ts");
			const i = [n.Wb, n.db, n.w, n.I, n.cb, n.Bb],
				o = {
					[n.Bb]: "time.seconds",
					[n.cb]: "time.minutes",
					[n.I]: "time.hours",
					[n.w]: "time.days",
					[n.db]: "time.months",
					[n.Wb]: "time.years"
				},
				a = {
					[n.Bb]: "time.short.seconds",
					[n.cb]: "time.short.minutes",
					[n.I]: "time.short.hours",
					[n.w]: "time.short.days",
					[n.db]: "time.short.months",
					[n.Wb]: "time.short.years"
				};

			function c(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					l = new Date(t).getTime(),
					d = {
						[n.Wb]: "",
						[n.db]: "",
						[n.w]: "",
						[n.I]: "",
						[n.cb]: "",
						[n.Bb]: ""
					};
				let m = l - c;
				if (m <= 0) return Object(r.a)(e, "time.soon");
				for (const n of i) {
					const t = Math.floor(m / n);
					t && (d[n] = s ? "".concat(t).concat(Object(r.a)(e, a[n])) : Object(r.c)(e, o[n], t)), m -= t * n
				}
				const u = i.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return s ? u : Object(r.a)(e, "time.timeLeft", {
					time: u
				})
			}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "j", (function() {
				return b
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(n.a),
				o = Object(r.a)(n.b),
				a = Object(r.a)(n.c),
				c = Object(r.a)(n.d),
				l = Object(r.a)(n.e),
				d = Object(r.a)(n.f),
				m = (Object(r.a)(n.g), Object(r.a)(n.h)),
				u = Object(r.a)(n.i),
				p = Object(r.a)(n.j),
				b = Object(r.a)(n.k)
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var r = s("./node_modules/lodash/isEqual.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/reddit/constants/viewabilityEvents.ts");
			const l = .01,
				d = .5,
				m = 1,
				u = [d, m, l],
				p = 1e3,
				b = 0,
				h = 2e3,
				f = 3e3;
			class x extends i.Component {
				constructor(e) {
					super(e), this.viewableImpression = {
						timer: null,
						event: c.a.Viewable,
						threshold: d,
						viewabilityMinimum: p,
						fired: !1,
						timeViewingInitialized: 0
					}, this.impression = {
						timer: null,
						event: c.a.Impression,
						threshold: l,
						viewabilityMinimum: b,
						fired: !1,
						timeViewingInitialized: 0
					}, this.videoViewable = {
						timer: null,
						event: c.a.VideoViewable,
						threshold: d,
						viewabilityMinimum: h,
						fired: !1,
						timeViewingInitialized: 0,
						elapsedTime: 0,
						remainingTime: h,
						timeViewingInterrupted: 0
					}, this.videoFullyViewable = {
						timer: null,
						event: c.a.VideoFullyViewable,
						threshold: m,
						viewabilityMinimum: f,
						fired: !1,
						timeViewingInitialized: 0,
						elapsedTime: 0,
						remainingTime: f,
						timeViewingInterrupted: 0
					}, this.handleViewabilityChange = e => {
						this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						n()(this.state.event, e) || this.setState({
							event: e
						}), this.checkViewability(e, this.viewableImpression), this.checkViewability(e, this.impression), this.props.trackVideoMetrics && (this.checkViewability(e, this.videoViewable), this.checkViewability(e, this.videoFullyViewable))
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidUpdate() {
					this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? this.props.trackVideoMetrics ? this.checkViewabilityByType(this.state.event) : (this.updateViewableStats(this.videoViewable), this.updateViewableStats(this.videoFullyViewable)) : this.resetTimers()
				}
				resetTimers() {
					this.resetTimer(this.videoViewable), this.resetTimer(this.videoFullyViewable), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e.timer), e.timer = null, e.timeViewingInitialized = 0, e.elapsedTime = 0, e.remainingTime = e.viewabilityMinimum
				}
				updateViewableStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.elapsedTime = e.timeViewingInterrupted - e.timeViewingInitialized, t = e.viewabilityMinimum - e.elapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer))
				}
				isAdequatelyInView(e, t) {
					return !!e && e.isIntersecting && e.intersectionRatio >= t
				}
				checkViewability(e, t) {
					if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
						const e = this.getLengthForTimer(t);
						return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
					}
					this.clearTimer(t.timer)
				}
				clearTimer(e) {
					e && clearTimeout(e)
				}
				getLengthForTimer(e) {
					return e.remainingTime || e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onViewable(e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e.timer), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					return o.a.createElement(a.a, {
						threshold: u,
						onChange: this.handleViewabilityChange,
						disabled: this.viewableImpression.fired && this.videoViewable.fired && this.impression.fired && this.videoFullyViewable.fired || this.viewableImpression.fired && this.impression.fired && !this.props.trackVideoMetrics
					}, this.props.children)
				}
			}
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, s) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, s) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/lib/addQueryParams/index.ts");
			const b = (e, t, s, r, n) => {
				const i = n || "*:*",
					o = s || d.O;
				return Object(p.a)("/search", {
					q: i,
					sort: o,
					t: r,
					category_name: e,
					category: t
				})
			};
			var h = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/selectors/telemetry.ts");
			var x = s("./src/reddit/components/CategoryTag/index.m.less"),
				g = s.n(x);
			var v = class extends n.a.Component {
					constructor() {
						super(...arguments), this.onClick = () => {
							const e = {
								id: this.props.category.categoryId,
								title: this.props.category.categoryName,
								eventType: m.a.SUBREDDIT,
								originElement: "meta_flair"
							};
							this.props.sendEvent(((e, t) => s => Object.assign({
								source: "post",
								action: "click",
								noun: "meta_flair"
							}, f.defaults(s), {
								correlationId: Object(h.c)(h.a.SearchResults),
								post: f.post(s, e),
								search: f.postFlairClickToSearch(s, t),
								subreddit: f.subreddit(s)
							}))(this.props.postId, e))
						}
					}
					render() {
						const e = this.props.category,
							t = this.props.inLightboxHeader,
							s = e.categoryId,
							r = e.categoryName,
							i = n.a.createElement("span", null, r);
						return n.a.createElement("span", {
							className: Object(l.a)(g.a.metaFlair, {
								[g.a["m-lightboxHeader"]]: t
							})
						}, n.a.createElement(u.a, {
							onClick: this.onClick,
							to: b(r, s, d.Hb.Relevance, d.Ob.DAY),
							children: i
						}))
					}
				},
				j = s("./src/reddit/components/CategoryTagList/index.m.less"),
				y = s.n(j);
			const C = Object(i.b)(() => Object(o.c)({
				labelNSFW: c.S
			}));
			t.a = C(Object(a.b)(e => {
				let {
					postCategories: t,
					postId: s,
					inLightboxHeader: r,
					sendEvent: i
				} = e;
				return n.a.createElement("span", {
					className: r ? null : y.a.categoryTagWrapper
				}, t.map(e => n.a.createElement(v, {
					postId: s,
					category: e,
					key: e.categoryId,
					inLightboxHeader: r,
					sendEvent: i
				})))
			}))
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, s) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, s) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				i = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/Emoji/index.m.less"),
				b = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const x = u.a.wrapped(e => {
				var {
					backgroundImage: t,
					style: s
				} = e, r = f(e, ["backgroundImage", "style"]);
				return a.a.createElement("div", h({
					style: Object.assign({}, s || {}, {
						backgroundImage: "url('".concat(t, "')")
					})
				}, r))
			}, "EmojiDisplay", b.a);
			var g = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				v = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/constants/colors.ts"),
				y = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				w = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/Close/index.tsx"),
				S = s("./src/reddit/models/Flair/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = s("./src/reddit/components/Flair/index.m.less"),
				T = s.n(k);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "c", (function() {
				return z
			})), s.d(t, "a", (function() {
				return H
			}));
			var I = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const F = Object(v.a)(g.b),
				P = u.a.div("FlairWrapper", T.a),
				L = u.a.wrapped(c.a, "CloseButton", T.a),
				V = u.a.wrapped(Object(m.a)(e => {
					var {
						forceSmallEmojis: t,
						theme: s
					} = e, r = I(e, ["forceSmallEmojis", "theme"]);
					const n = s;
					return a.a.createElement(x, _({
						style: Object.assign({}, M(!!t, n) || {})
					}, r))
				}), "FlairEmojiDisplay", T.a),
				M = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: "".concat(t.subredditContext.emojiHeight, "px"),
						width: "".concat(t.subredditContext.emojiWidth, "px")
					}
				},
				A = (e, t) => {
					const s = t ? "/r/".concat(t, "/search") : "/search",
						r = "".concat(t ? "flair_name" : "flair", ':"').concat(e, '"');
					return Object(l.a)(s, {
						[y.o]: r,
						[y.p]: t ? "1" : ""
					})
				},
				D = e => e.isFlairFilter ? a.a.createElement(C.a, {
					children: e.flair,
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}) : e.onClick ? a.a.createElement(C.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: A(e.searchableTerm, e.subredditName),
					children: e.flair
				}) : e.flair;
			class W extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = a.a.createElement("span", {
						className: Object(d.a)(this.props.className, {
							[T.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(N.a)(this.props).flair,
							color: "".concat(z(this.props))
						}
					}, this.props.text, this.props.isSelected && a.a.createElement(L, {
						to: "./",
						onClick: this.props.onCloseClick
					}, a.a.createElement(E.a, {
						className: T.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(N.a)(this.props).flair
						}
					})), !!this.props.tooltip && a.a.createElement(F, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return a.a.createElement(D, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const B = Object(m.a)(W),
				R = Object(m.a)(e => {
					let t = "",
						s = !1;
					const r = e.richtext.map((r, n) => {
						if (r.e === S.c.Emoji) {
							const i = r;
							return t += i.a, s = !0, a.a.createElement(V, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: i.u,
								key: n,
								title: i.a
							})
						} {
							const e = r;
							return t += e.t, a.a.createElement("span", {
								key: n
							}, e.t)
						}
					});
					let n;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (n = {
						marginTop: "-".concat(e.theme.subredditContext.emojiHeight - 16, "px")
					});
					const i = a.a.createElement(P, {
						className: Object(d.a)(e.className, {
							[T.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: Object.assign({}, n, {
							backgroundColor: e.backgroundColor || Object(N.a)(e).flair,
							color: "".concat(z(e))
						})
					}, r, e.isSelected && a.a.createElement(L, {
						to: "./",
						onClick: e.onCloseClick
					}, a.a.createElement(E.a, {
						className: T.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(N.a)(e).flair
						}
					})));
					return a.a.createElement(D, {
						flair: i,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				z = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(N.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(O.a)(Object(N.a)(e).post, j.a.black, j.a.white) : e.textColor === S.e.Dark ? j.a.black : j.a.white,
				H = u.a.wrapped(B, "TextFlair", T.a),
				q = u.a.wrapped(R, "RichTextFlair", T.a),
				Z = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.m)(.1, Object(N.a)(n()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				Q = u.a.wrapped(e => {
					const t = Z(e),
						s = a.a.createElement("span", {
							className: e.className,
							style: {
								border: "1px solid ".concat(t),
								color: t
							}
						}, e.text);
					return a.a.createElement(D, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", T.a);
			t.b = e => {
				const {
					className: t,
					disabled: s = !1,
					flair: r,
					isFlairFilter: n,
					isSelected: i,
					onClick: o,
					onCloseClick: c,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: u,
					forceSmallEmojis: p,
					to: b
				} = e, h = Object(d.a)({
					[T.a.flairVariant]: n,
					[T.a.small]: n && !e.large,
					[T.a.large]: n && e.large
				}, t);
				switch (r.type) {
					case S.f.Richtext:
						return s || !r.richtext ? null : a.a.createElement(q, {
							backgroundColor: r.backgroundColor,
							className: h,
							forceSmallEmojis: p,
							isFlairFilter: n,
							isSelected: i,
							onClick: o,
							onCloseClick: c,
							onMouseDown: l,
							redditStyle: !u,
							richtext: r.richtext,
							subredditName: m,
							textColor: r.textColor,
							to: b
						});
					case S.f.Text:
						return s || !r.text ? null : a.a.createElement(H, {
							backgroundColor: r.backgroundColor,
							className: h,
							isFlairFilter: n,
							isSelected: i,
							onClick: o,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !u,
							to: b
						});
					case S.f.Meta:
						return a.a.createElement(H, {
							backgroundColor: r.backgroundColor,
							className: t,
							isFlairFilter: n,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !u,
							to: b
						});
					case S.f.Nsfw:
					case S.f.Spoiler:
						return a.a.createElement(Q, {
							className: t,
							text: r.text,
							type: r.type
						});
					case S.f.Quarantined:
						return null;
					case S.f.Oc:
						return a.a.createElement(H, {
							backgroundColor: j.a.alienblue,
							text: r.text,
							textColor: S.e.Light,
							tooltip: Object(w.c)("This post is marked as Original Content [OC]")
						});
					default:
						return r.text ? a.a.createElement(H, {
							backgroundColor: r.backgroundColor,
							className: h,
							isFlairFilter: n,
							onClick: o,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: m,
							text: r.text,
							redditStyle: !u,
							to: b
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/noop.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				d = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: u.S
				}),
				b = Object(a.b)(p),
				h = e => {
					if (e.type === m.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === m.c.Emoji ? e.u : e.t).join("-");
						return "".concat(e.type, "--").concat(t)
					}
					return "".concat(e.type, "--").concat(e.text)
				};
			t.a = b(e => {
				let {
					className: t,
					isFlairFilter: s,
					onClick: r,
					onMouseDown: i,
					disabled: a = !1,
					flair: c,
					labelNSFW: u,
					subredditName: p
				} = e;
				const b = !!c.find(e => e.type === m.f.Richtext),
					f = c.map(e => {
						if (e.type === m.f.Text && b) return null;
						if (!u && e.type === m.f.Nsfw) return null;
						const t = Object(d.j)(e),
							c = "/r/".concat(p, "/"),
							f = i ? () => i(e) : n.a;
						return o.a.createElement(l.b, {
							isFlairFilter: s,
							key: h(e),
							onClick: r,
							onMouseDown: f,
							disabled: a,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: p,
							to: Object(d.e)(c, t)
						})
					});
				return o.a.createElement("div", {
					className: t
				}, f)
			})
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, s) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/noop.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				d = s.n(l);
			t.a = e => o.a.createElement(a.g, {
				className: d.a.modalHeader
			}, o.a.createElement(a.n, null, e.title), o.a.createElement(c.a, {
				onClick: e.onClosePressed || n.a
			}, o.a.createElement(a.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				i = s.n(n);
			const o = r.a.div("Wrapper", i.a);
			t.a = o
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, s) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Flair/index.tsx"),
				a = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				l = s.n(c);
			const d = i.a.span("Placeholder", l.a),
				m = i.a.div("SelectedFlair", l.a),
				u = i.a.wrapped(o.b, "FlairComponent", l.a);
			t.a = e => e.flair ? n.a.createElement(m, null, n.a.createElement(d, null, e.placeholderText), n.a.createElement(u, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : n.a.createElement(m, null, n.a.createElement(a.c, null, "No flair selected"))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, s) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var r = s("./node_modules/lodash/once.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				m = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				u = s.n(m);
			const p = l.a.wrapped(e => o.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[u.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", u.a),
				b = n()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(a.a)({
						getComponent: () => Object(d.a)(() => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
						ErrorComponent: e,
						LoadingComponent: e
					})
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				b = s("./src/reddit/components/Flair/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				f = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				x = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				g = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				j = s.n(v),
				y = class extends n.a.Component {
					constructor() {
						super(...arguments), this.state = {
							searchQuery: ""
						}, this.onSearchChange = e => {
							this.setState({
								searchQuery: e.target.value
							})
						}
					}
					render() {
						const {
							templates: e,
							templateIds: t,
							selectedTemplateId: s
						} = this.props, {
							searchQuery: r
						} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), o = !!s && i.some(e => e.id === s);
						return n.a.createElement("div", {
							className: j.a.container
						}, n.a.createElement("div", {
							className: j.a.searchBoxWrapper
						}, n.a.createElement("input", {
							className: j.a.searchInput,
							onChange: this.onSearchChange,
							type: "text",
							placeholder: Object(m.c)("Search for flair"),
							value: r
						}), n.a.createElement(g.a, {
							className: j.a.searchIcon
						})), n.a.createElement(h.a, {
							name: "flair_picker",
							onChange: this.props.onChange,
							value: s
						}, i.map((e, t) => {
							const r = Object(d.c)(e),
								i = s === e.id || !o && 0 === t;
							return n.a.createElement(f.a, {
								className: j.a.radioOption,
								key: e.id,
								showButton: !0,
								tabIndex: i ? 0 : -1,
								value: e.id
							}, n.a.createElement(b.b, {
								className: j.a.flairComponent,
								flair: r,
								forceSmallEmojis: !0
							}), e.textEditable && n.a.createElement(x.a, {
								className: j.a.pencil
							}))
						})))
					}
				},
				C = s("./src/reddit/components/FlairSearch/index.m.less"),
				O = s.n(C);
			const w = "FlairSearch-EmojiPicker-DropdownId",
				E = Object(c.a)(e => e && Object(d.c)(e)),
				S = Object(o.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: u.d
				}),
				N = Object(i.b)(S);
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, s = t && e.templateId ? t[e.templateId] : void 0;
						let r = e;
						s && (r = Object(d.d)({
							flair: e,
							template: s,
							ignoreTextAllowance: !0
						})), this.props.onChange(r)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const s = t[e],
								r = Object(d.c)(s);
							this.props.onChange(r)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: s,
						templateIds: r,
						subredditId: i
					} = e, o = s && e.flair && e.flair.templateId && s[e.flair.templateId] || void 0, c = Object(p.a)(), l = e.flair || E(o);
					return n.a.createElement("div", {
						className: Object(a.a)(e.className, O.a.container)
					}, s && r && n.a.createElement(y, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: o ? o.id : "",
						templateIds: r,
						templates: s
					}), l && o && (t || o.textEditable) ? n.a.createElement("div", {
						className: O.a.flairEditSection
					}, n.a.createElement("div", {
						className: O.a.editLabel
					}, Object(m.c)("Edit flair")), e.areFlairRestrictionsEnabled && n.a.createElement("div", {
						className: O.a.restrictionHintText
					}, Object(d.k)(o)), n.a.createElement(c, {
						autofocus: !0,
						emojiPickerId: w,
						flair: l,
						flairTemplate: o,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: o.modOnly,
						onChange: this.onFlairEdit,
						subredditId: i
					})) : null)
				}
			}
			t.a = N(k)
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return C
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/CategoryTagList/index.tsx"),
				l = s("./src/reddit/components/FlairList/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				p = s("./src/reddit/helpers/trackers/postFlair.ts"),
				b = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/components/FlairWrapper/index.m.less"),
				j = s.n(v);
			const y = Object(i.b)(() => Object(o.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(d.p)(e, {
							pageLayer: s
						})
					},
					isMeta: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.o)(e, {
							postId: s.id
						})
					},
					isPostFlairEnabled: (e, t) => Object(f.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.z)(e, s)
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.S)(e, {
							subredditId: s.belongsTo.id
						}).name
					}
				})),
				C = (e, t) => {
					const s = [];
					return t.isOriginalContent && s.push({
						text: "OC",
						type: h.f.Oc
					}), e && s.push({
						text: Object(b.c)("Poll"),
						type: h.f.Meta
					}), s.push(...t.flair), s
				};
			t.a = y(e => {
				let {
					className: t,
					disableFlair: s,
					flairPosition: r,
					isFlairFilter: i,
					isPostFlairEnabled: o,
					isMeta: d,
					nowrap: b,
					post: f,
					postCategories: x,
					sendEvent: g,
					showCategoryTag: v,
					subredditName: y,
					titleFlair: O
				} = e;
				const w = r === h.b.Left,
					E = O || C(d, f),
					S = [];
				let N = [];
				w ? E.map(e => {
					Object(u.p)(e.type) ? S.push(e) : N.push(e)
				}) : N = E;
				const k = b ? j.a.flairNoWrap : S.length > 0 || N.length > 0 || x && v ? j.a.flairWrapper : null,
					T = e => {
						const t = {
							id: f.belongsTo.id,
							eventType: f.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(m.d)(m.a.SearchResults), g && g(Object(p.a)(f.id, t))
					},
					_ = e => {
						g && g(Object(p.e)(e))
					},
					I = !(s || !E || !E.length),
					F = !!(v && x && x.length);
				return I || F ? n.a.createElement("div", {
					className: Object(a.a)(k, t)
				}, I && S && n.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: i,
					key: "leftFlair",
					onClick: T,
					onMouseDown: _,
					flair: S,
					disabled: !o,
					subredditName: y
				}), I && n.a.createElement(l.a, {
					className: j.a.flairList,
					isFlairFilter: i,
					key: "rightFlair",
					onClick: T,
					onMouseDown: _,
					flair: N,
					disabled: !o,
					subredditName: y
				}), F && n.a.createElement(c.a, {
					inLightboxHeader: b,
					postId: f.id,
					postCategories: x
				})) : null
			})
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const i = () => null;
			t.a = Object(r.a)({
				ErrorComponent: i,
				getComponent: () => Object(n.a)(() => s.e("SubredditHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/app/strings/index.ts"),
				o = s("./src/lib/timeAgo/index.ts"),
				a = s("./src/lib/timeUntil/index.ts");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return n.a.createElement("span", {
					className: e.className
				}, t ? Object(i.a)(e.language, "polls.closed", {
					timeAgo: Object(o.d)(e.language, e.poll.endsAt / 1e3)
				}) : Object(a.a)(e.language, new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./node_modules/lodash/isEqual.js"),
				n = s.n(r),
				i = s("./src/reddit/constants/flair.ts"),
				o = s("./src/reddit/helpers/flair.ts"),
				a = s("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === a.f.Text || e.type === a.f.Image || e.type === a.f.Richtext);
			var l;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(l || (l = {}));
			const d = (e, t, s) => {
				if (s && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: l.NotSelected
				};
				const r = e && t.templateId ? e[t.templateId] : void 0;
				if (!r) return {
					canSave: !1,
					reason: l.InvalidTemplate
				};
				const a = Object(o.g)(t).length;
				return 0 === a ? {
					canSave: !1,
					reason: l.TextIsEmpty
				} : a > i.g ? {
					canSave: !1,
					reason: l.TextIsTooLong
				} : Object(o.n)(t) && !Object(o.q)(r) ? {
					canSave: !1,
					reason: l.TextIsNotAllowed
				} : n()(s, t) ? {
					canSave: !1,
					reason: l.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				x = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/lib/getShortenedLink.ts"),
				O = s("./src/reddit/components/FlairWrapper/index.tsx"),
				w = s("./src/app/strings/index.ts"),
				E = s("./src/lib/prettyPrintNumber/index.ts"),
				S = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				N = s("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				k = s.n(N);
			const T = Object(c.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var _ = Object(o.b)(T)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, r = s ? s.totalVotes : "0";
					return i.a.createElement("div", {
						className: Object(l.a)(e.className, k.a.proposalMetaData)
					}, i.a.createElement("span", null, Object(w.c)(e.language, "polls.numVotesCommas", parseInt(r), {
						count: Object(E.a)(r)
					})), t && i.a.createElement(S.a, {
						className: k.a.proposalMetaDataTime,
						language: e.language,
						poll: t
					}))
				})),
				I = s("./src/reddit/components/SEOTitle/index.tsx"),
				F = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/PostTitle/index.m.less"),
				M = s.n(V),
				A = s("./src/config.ts");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return W
			})), s.d(t, "a", (function() {
				return R
			}));
			var W, B = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(W || (W = {}));
			const R = m.a.wrapped(Object(d.a)(e => {
					var {
						size: t,
						titleColor: s,
						titleType: r,
						nowrap: n,
						children: o,
						className: a,
						redditStyle: c
					} = e, d = B(e, ["size", "titleColor", "titleType", "nowrap", "children", "className", "redditStyle"]);
					let m = "";
					switch (t) {
						case W.ExtraLarge:
							m = M.a.ExtraLarge;
							break;
						case W.Large:
							m = M.a.Large;
							break;
						case W.Medium:
							m = M.a.Medium;
							break;
						case W.Small:
							m = M.a.Small;
							break;
						case W.ExtraSmall:
							m = M.a.ExtraSmall
					}
					return i.a.createElement("div", D({
						className: Object(l.a)(a, m, {
							[M.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": s || Object(y.a)(Object.assign({
								redditStyle: c
							}, d)).titleText
						}
					}, d), r ? i.a.createElement(I.b, {
						type: r
					}, o) : o)
				}), "Title", M.a),
				z = e => {
					var {
						className: t,
						disableVisited: s,
						titleColor: r
					} = e, n = B(e, ["className", "disableVisited", "titleColor"]);
					return i.a.createElement(a.a, D({}, n, {
						className: Object(l.a)(t, M.a.styledLink, {
							[M.a.isVisitedEnabled]: !s
						})
					}), n.children)
				},
				H = e => {
					var {
						disableVisited: t,
						nowrap: s
					} = e, r = B(e, ["disableVisited", "nowrap"]);
					return i.a.createElement("div", D({}, r, {
						className: Object(l.a)(M.a.titleContainer, r.className, {
							[M.a.isNoWrap]: s,
							[M.a.isVisitedEnabled]: !t
						})
					}))
				},
				q = Object(p.t)({
					isCommentPermalink: p.v,
					pageLayer: e => e
				}),
				Z = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.p)(e, {
							pageLayer: s
						})
					},
					isMeta: (e, t) => {
						let {
							post: s
						} = t;
						return Object(F.o)(e, {
							postId: s.id
						})
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(P.S)(e, {
							subredditId: s.belongsTo.id
						}).name
					},
					shouldOpenPostInNewTab: L.X
				}),
				Q = Object(o.b)(Z),
				G = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t;
					if (!e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						const r = e.isCommentPermalink ? Object(x.b)(t.permalink) : Object(h.a)(t.permalink);
						return i.a.createElement(H, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? i.a.createElement(U, e) : i.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: r
						}, i.a.createElement(U, e)))
					}
					return i.a.createElement(H, {
						nowrap: e.nowrap
					}, i.a.createElement(U, e))
				},
				U = e => {
					const {
						leftFlair: t,
						post: s
					} = e, r = e.format ? e.format(s) : s.title, n = e.isCommentsPage ? I.a.PostComments : I.a.PostItem;
					return i.a.createElement(R, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: n
					}, t && i.a.createElement(O.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				Y = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: r
					} = s, n = !t && !e.isCrosspost && e.size !== W.Large && !s.isSponsored && (s.source || s.media && (s.media.type === j.n.GIFVIDEO || s.media.type === j.n.IMAGE || s.media.type === j.n.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (n) return i.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(j.A)(s),
							isSponsored: r,
							source: s.source
						}, Object(C.a)(s), i.a.createElement(g.a, {
							className: M.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== W.Large && e.size !== W.ExtraLarge) return i.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: r,
						source: s.source
					}, Object(C.a)(s), i.a.createElement(g.a, null));
					return null
				};
			class J extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n        .".concat(this.props.post.id, " .").concat(M.a.Component, " {\n          --postTitle-VisitedLinkColor: ").concat(Object(r.d)(.45, Object(y.a)(this.props).titleText, "#FFFFFF"), ";\n          --postTitleLink-VisitedLinkColor: ").concat(Object(r.d)(.45, this.props.titleColor || Object(y.a)(this.props).titleText, Object(y.a)(this.props).body), ";\n        }\n      ")
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: r,
						isM2MHomeRedirectEnabled: n,
						isMeta: o,
						isOverlay: a,
						poll: c,
						post: d,
						showNSFWSpoilerFlairsOnly: m
					} = this.props, u = s === v.b.Left, p = Object(O.b)(o, d), b = m ? p.filter(e => e.type === v.f.Nsfw || e.type === v.f.Spoiler) : u ? p.filter(e => Object(f.p)(e.type)) : [], h = m ? [] : u ? p.filter(e => !Object(f.p)(e.type)) : p, x = n || !a && !r, g = !t && b && b.length > 0 && x, j = !t && h && h.length > 0 && x;
					return i.a.createElement("div", {
						className: Object(l.a)(e, d.id)
					}, !m && g && i.a.createElement(O.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement(G, D({}, this.props, {
						leftFlair: m ? b : void 0
					})), c && i.a.createElement(_, {
						className: M.a.pollMeta,
						pollId: c.id
					}), i.a.createElement(Y, this.props), j && i.a.createElement(O.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement("div", {
						className: M.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: '\n              <img alt="" src="'.concat(A.a.assetPath, '/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            ')
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = m.a.wrapped(q(Q(Object(d.a)(Object(u.b)(J)))), "Component", M.a)
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/isUrl/index.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				d = s("./src/reddit/icons/fonts/Link/index.tsx"),
				m = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				u = s("./src/reddit/icons/fonts/Text/index.tsx"),
				p = s("./src/reddit/icons/fonts/helpers.tsx"),
				b = s("./src/reddit/icons/fonts/Video/index.m.less"),
				h = s.n(b);
			var f = c.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(p.b)("video"), " ").concat(e.className)
				}), "VideoIcon", h.a),
				x = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				g = s("./src/reddit/constants/elementClassNames.ts"),
				v = s("./src/reddit/controls/ContentType/index.m.less"),
				j = s.n(v);
			const y = e => Object(o.a)(j.a.contentTypeIcon, e.className),
				C = e => i.a.createElement(d.a, {
					className: Object(o.a)(g.a, y(e))
				});
			var O = e => {
					const t = y(e);
					switch (e.type) {
						case "gifvideo":
							return i.a.createElement(l.a, {
								className: t
							});
						case "image":
							return i.a.createElement(m.a, {
								className: t
							});
						case "meta":
							return i.a.createElement(x.a, {
								className: t
							});
						case "rtjson":
						case "text":
							return i.a.createElement(u.a, {
								className: t
							});
						case "video":
							return i.a.createElement(f, {
								className: t
							});
						default:
							return i.a.createElement(C, e)
					}
				},
				w = s("./src/reddit/controls/OutboundLink/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				S = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Theme/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = s("./src/reddit/components/Thumbnail/index.m.less"),
				_ = s.n(T);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return z
			}));
			const F = e => e.placeholderImage || Object(k.a)(e).placeholderImage,
				P = e => e.placeholderImage ? "cover" : Object(k.a)(e).placeholderImagePosition,
				L = c.a.span("LinkText", _.a),
				V = e => {
					let {
						className: t,
						onClick: s,
						children: r
					} = e;
					return i.a.createElement("div", {
						onClick: s,
						className: Object(o.a)(_.a.linkIcon, t)
					}, r)
				},
				M = e => i.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(_.a.hiddenImage, e.className)
				}),
				A = e => i.a.createElement("div", {
					"aria-label": e.alt,
					className: Object(o.a)(_.a.thumbnail, _.a.imageThumbnail, e.className),
					"data-click-id": "image",
					role: "img",
					style: {
						backgroundImage: "url(".concat(e.src, ")"),
						borderColor: e.isOutbound ? Object(k.a)(e).button : Object(k.a)(e).line
					}
				}, e.isOutbound && i.a.createElement(V, {
					className: e.linkIconClassName
				}, i.a.createElement(E.a, {
					className: Object(o.a)(_.a.outboundLinkIcon, e.outboundLinkIconClassName)
				}), e.text && i.a.createElement(L, {
					className: e.linkTextClassName
				}, e.text)), i.a.createElement(M, {
					alt: e.alt,
					className: "hiddenImg"
				})),
				D = e => e.isOutbound ? Object(k.a)(e).button : e.placeholderImage ? "transparent" : Object(k.a)(e).line,
				W = e => {
					const t = F(e),
						s = t && {
							background: Object(N.g)(Object(k.a)(e).placeholder, t, P(e))
						};
					return i.a.createElement("div", {
						className: Object(o.a)(_.a.thumbnail, _.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: Object.assign({}, s, {
							borderColor: D(e)
						})
					}, (!e.placeholderImage || e.showContentType) && i.a.createElement(O, {
						className: Object(o.a)(_.a.contentType, {
							[_.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta ? "meta" : e.type
					}), e.isOutbound && i.a.createElement(V, {
						className: e.linkIconClassName
					}, i.a.createElement(E.a, {
						className: Object(o.a)(_.a.outboundLinkIcon, e.outboundLinkIconClassName)
					}), e.text && i.a.createElement(L, {
						className: e.linkTextClassName
					}, e.text)))
				},
				B = e => i.a.createElement(A, I({}, e, {
					className: Object(o.a)(_.a.blurredThumbnail, e.className)
				})),
				R = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						crosspost: n,
						forceShowNSFW: a,
						isMeta: c,
						linkIconClassName: l,
						linkTextClassName: d,
						outboundLinkIconClassName: m,
						post: u,
						redditStyle: p,
						removeLink: b,
						showContentType: h,
						templatePlaceholderImage: f,
						text: x,
						theme: g,
						usePreview: v
					} = e, j = !g.subredditContext.shouldShowNSFWContent && (u.isNSFW || !(!n || !n.isNSFW)) && !a, y = F({
						placeholderImage: f,
						redditStyle: p,
						theme: g
					}), C = z(e), O = H(u, t, y, j, x, g, C, c, h, b, p, l, d, m), E = Object(S.A)(u);
					return Object(r.a)(E) && !b && E.indexOf("redditmedia") < 0 ? i.a.createElement("div", {
						className: Object(o.a)(_.a.container, v ? _.a.usePreview : "", s)
					}, i.a.createElement(w.a, {
						href: Object(S.A)(u),
						isSponsored: u.isSponsored,
						source: u.source
					}, O)) : i.a.createElement("div", {
						className: Object(o.a)(_.a.container, v ? _.a.usePreview : "", s)
					}, O)
				}),
				z = e => {
					let {
						crosspost: t,
						post: s,
						url: r,
						usePreview: n
					} = e;
					return r || (t ? n && t.preview ? t.preview.url : t.thumbnail.url : n && s.preview ? s.preview.url : s.thumbnail.url)
				},
				H = (e, t, s, n, o, a, c, l, d, m, u, p, b, h) => {
					const f = e.source && !e.isSponsored || !1;
					return Object(r.a)(c) ? n ? i.a.createElement(B, {
						"data-click-id": "image",
						src: c,
						className: t,
						isOutbound: f && !m,
						linkIconClassName: p,
						linkTextClassName: b,
						outboundLinkIconClassName: h,
						redditStyle: u,
						text: o,
						theme: a
					}) : i.a.createElement(A, {
						alt: e.title,
						className: t,
						src: c,
						isOutbound: f && !m,
						linkIconClassName: p,
						linkTextClassName: b,
						outboundLinkIconClassName: h,
						redditStyle: u,
						text: o,
						theme: a
					}) : i.a.createElement(W, {
						className: t,
						placeholderImage: s,
						isMeta: l,
						isOutbound: f && !m,
						linkIconClassName: p,
						linkTextClassName: b,
						outboundLinkIconClassName: h,
						redditStyle: u,
						showContentType: d,
						text: o,
						theme: a,
						type: e.media ? e.media.type : null
					})
				};
			t.a = R
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/controls/Score/index.tsx"),
				u = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/selectors/monthsToMinutes.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/VerticalVotes/index.m.less"),
				g = s.n(x);
			const v = Object(a.c)({
					m2mIsEnabled: h.w,
					isNightmode: f.V
				}),
				j = Object(o.b)(v),
				y = e => !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class C extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isNightmode: s,
							shouldShowScore: n = !0,
							upvoteButtonClassName: o
						} = e,
						a = !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
						l = y(e),
						{
							voted: h
						} = this.state,
						f = e.model.voteState,
						x = e.m2mIsEnabled && h === b.a.upvoted ? g.a.bounceUp : "",
						v = e.m2mIsEnabled && h === b.a.downvoted ? g.a.bounceDown : "";
					return i.a.createElement("div", {
						className: Object(c.a)(g.a.votesContainer, e.className)
					}, a ? i.a.createElement(u.b, {
						"aria-label": r.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": f === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightmode: s,
						onClick: this.onUpvote,
						voteState: f
					}) : i.a.createElement("button", {
						"aria-label": r.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": f === b.a.upvoted,
						className: Object(c.a)(d.p, o, x),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, i.a.createElement(u.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: f
					})), !e.compact && n && i.a.createElement(m.a, {
						className: e.scoreClassName,
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: f,
						isScoreHidden: e.model.isScoreHidden
					}), l ? i.a.createElement(u.a, {
						"aria-label": r.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": f === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightmode: s,
						onClick: this.onDownvote,
						voteState: f
					}) : i.a.createElement("button", {
						"aria-label": r.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": f === b.a.downvoted,
						className: Object(c.a)(d.p, t, v),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, i.a.createElement(u.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: f
					})))
				}
			}
			const O = Object(l.a)(j(C));
			t.a = O
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return Object.assign({}, e, {
					onPostViewable: n.C
				})
			}(t))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			}));
			const r = "reddit",
				n = "reddit.ready",
				i = "reddit.urlChanged"
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, s) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/keycodes.ts"),
				a = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				m = s.n(d);
			class u extends n.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== o.b.Enter && e.key !== o.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : n.a.createElement(l.a, {
						"aria-checked": e.selected,
						className: Object(i.a)(e.className, m.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? n.a.createElement(c.a, {
						className: m.a.radioOn,
						role: "presentation"
					}) : n.a.createElement(a.a, {
						className: m.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = u
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/constants/keycodes.ts");
			class o extends n.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props;
						t || this.state.value !== e && (s(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return n.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props, {
							value: r
						} = this.state;
						if (t) return;
						const n = e.key === i.b.ArrowUp,
							o = e.key === i.b.ArrowDown;
						if (n || o) {
							const t = this.getValues();
							if (!t.length) return;
							const i = r ? t.indexOf(r) : 0,
								o = t[((n ? i - 1 : i + 1) + t.length) % t.length];
							s(o), this.setState({
								value: o
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return n.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, n.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), n.a.Children.map(e.children, (s, r) => {
						const i = 0 === r,
							o = s.props.value === t,
							a = null !== t ? o ? 0 : -1 : i ? 0 : -1;
						return n.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: o,
							tabIndex: a
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				d = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/controls/Score/index.m.less"),
				b = s.n(p);
			const h = e => e.voteState === u.a.downvoted ? Object(m.a)(e).voteText.downvote : e.voteState === u.a.upvoted ? Object(m.a)(e).voteText.upvote : Object(d.a)(Object(l.a)(e)),
				f = Object(o.a)(e => {
					const t = {
							color: e.light ? c.a.lightboxHeaderText : h(e)
						},
						s = e.isScoreHidden ? "•" : Object(a.b)(e.score);
					return n.a.createElement("div", {
						className: Object(i.a)(b.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, s)
				});
			t.a = f
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return i
			})), s.d(t, "i", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			}));
			var r = s("./src/reddit/selectors/telemetry.ts");
			const n = e => ({
					screen: Object(r.screen)(e),
					profile: Object(r.profile)(e),
					subreddit: Object(r.subreddit)(e),
					userSubreddit: Object(r.userSubreddit)(e)
				}),
				i = e => t => Object.assign({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off"
				}, n(t)),
				o = (e, t) => s => Object.assign({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t)
				}, n(s)),
				a = (e, t) => s => Object.assign({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t)
				}, n(s)),
				c = (e, t) => s => Object.assign({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t)
				}, n(s)),
				l = (e, t) => s => Object.assign({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t)
				}, n(s)),
				d = (e, t) => s => Object.assign({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t)
				}, n(s)),
				m = (e, t) => s => Object.assign({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.comment)(s, t),
					post: Object(r.post)(s, t)
				}, n(s)),
				u = (e, t) => s => Object.assign({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t)
				}, n(s)),
				p = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					subreddit: Object(r.subredditByPostOrCommentId)(s, t)
				}),
				b = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.comment)(s, t),
					post: Object(r.post)(s, t),
					subreddit: Object(r.subredditByPostOrCommentId)(s, t)
				})
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "e", (function() {
				return m
			}));
			var r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/reddit/helpers/flair.ts");
			const o = (e, t) => s => Object.assign({
					source: "post",
					action: "click",
					noun: "post_flair"
				}, n.defaults(s), {
					actionInfo: n.actionInfo(s),
					correlationId: Object(r.c)(r.a.SearchResults),
					post: n.post(s, e),
					search: n.postFlairClickToSearch(s, t),
					subreddit: n.subreddit(s)
				}),
				a = e => t => Object.assign({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search"
				}, n.defaults(t), {
					actionInfo: n.actionInfo(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: n.postFlairClickToSearch(t, e),
					subreddit: n.subreddit(t)
				}),
				c = e => t => {
					const s = Object(i.g)(e);
					return Object.assign({}, n.defaults(t), {
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				},
				l = () => e => Object.assign({}, n.defaults(e), {
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: n.subreddit(e)
				}),
				d = e => t => {
					const s = Object(i.g)(e);
					return Object.assign({}, n.defaults(t), {
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				},
				m = e => t => {
					const s = Object(i.g)(e);
					return Object.assign({}, n.defaults(t), {
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				}
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, t, s) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Gif/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(i.b)("gif"), " ").concat(e.className)
			}), "GifIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, t, s) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Link/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(i.b)("link"), " ").concat(e.className)
			}), "LinkIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: "".concat(Object(i.b)("outboundLink"), " ").concat(e.className)
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(i.b)("photos"), " ").concat(e.className)
			}), "PhotoIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, s) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				title: e.title,
				className: "".concat(Object(i.b)("premium"), " ").concat(e.className)
			}), "PremiumIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Text/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(i.b)("text"), " ").concat(e.className)
			}), "TextIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, t, s) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				a = s.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return n.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(i.a)(a.a.checkbox, t)
				}, s), n.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), n.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("title", {
				id: "".concat(e.title, "-title")
			}, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, n.a.createElement("g", {
				stroke: "none"
			}, n.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 15",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				"clip-rule": "evenodd",
				d: "M0 1.5C0 0.671573 0.671573 0 1.5 0H11.5C12.3284 0 13 0.671573 13 1.5C13 2.32843 12.3284 3 11.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM0 7.5C0 6.67157 0.671573 6 1.5 6H14.5C15.3284 6 16 6.67157 16 7.5C16 8.32843 15.3284 9 14.5 9H1.5C0.671573 9 0 8.32843 0 7.5ZM1.5 12C0.671573 12 0 12.6716 0 13.5C0 14.3284 0.671573 15 1.5 15H7.5C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12H1.5Z",
				"fill-rule": "evenodd",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = s.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", c({}, e, {
				className: Object(i.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var r, n, i;
			s.d(t, "c", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return i
				})), s.d(t, "d", (function() {
					return o
				})), s.d(t, "e", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(n || (n = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}));
			const o = () => ({
					cardCVCComplete: !1,
					cardExpiryComplete: !1,
					cardNumberComplete: !1,
					name: "",
					postalCodeComplete: !1,
					saveCard: !1,
					type: n.NewStripe
				}),
				a = e => e.cardCVCComplete && e.cardExpiryComplete && e.cardNumberComplete && !!e.name && e.postalCodeComplete
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			}));
			const r = (e, t) => {
					let {
						post: s
					} = t;
					const r = s.belongsTo.id;
					if (!r) return null;
					const n = e.authorFlair.models[r];
					if (!n) return null;
					const i = s.author;
					return i && n[i] || null
				},
				n = (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!s) return null;
					const n = e.authorFlair.models[s];
					return n ? n[r] : null
				},
				i = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return b
			})), s.d(t, "q", (function() {
				return h
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "A", (function() {
				return j
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "o", (function() {
				return S
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "r", (function() {
				return I
			})), s.d(t, "s", (function() {
				return F
			})), s.d(t, "t", (function() {
				return P
			})), s.d(t, "z", (function() {
				return L
			})), s.d(t, "v", (function() {
				return V
			})), s.d(t, "w", (function() {
				return M
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "y", (function() {
				return D
			})), s.d(t, "n", (function() {
				return W
			})), s.d(t, "c", (function() {
				return B
			})), s.d(t, "x", (function() {
				return R
			})), s.d(t, "u", (function() {
				return z
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/helpers/richTextJson/index.ts"),
				o = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Payments/index.ts"),
				l = s("./src/reddit/models/Product/index.ts"),
				d = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				u = s("./src/reddit/selectors/comments.ts"),
				p = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const b = (e, t) => {
					const s = e.user.account,
						r = e.economics.subredditPremium[t];
					if (s && r && r.status === m.a.Fetched) {
						const r = ((e.users.appliedBadges[s.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[a.a.Loyalty]: r.find(e => e.placement === o.a.First),
							[a.a.Achievement]: r.find(e => e.placement === o.a.Second),
							[a.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				},
				h = (e, t, s) => {
					if (!r.d.spBadges(e) && !r.d.spPremium(e)) return [];
					const i = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(n.a)(i.map(t => e.badges.models[t]).filter(Boolean))
				},
				f = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === m.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				},
				x = (e, t) => {
					const s = P(e, t);
					return !!s && !!s.creator
				},
				g = (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = e.subreddits.gov.communityJar[s];
					return r ? r.usdr : void 0
				},
				v = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.amount) return e.amounts.usdr.amount
					}
					return "0"
				};

			function j(e, t) {
				const s = e.economics.specialMemberships.data[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function y(e, t) {
				const {
					badge: s,
					subredditId: r
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(o.c)(s) && s.userId === n) return s;
				const i = e.badges.models,
					a = e.user.ownedBadges[r] || {},
					c = Object(o.c)(s) ? s.type : s.id;
				return Object.keys(a).map(e => i[e]).find(e => e && e.type === c)
			}

			function C(e, t, s, r) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					if (s === a.a.Loyalty || s === a.a.Achievement) return n.data.collections[s];
					if (s === a.a.Cosmetic && r) return n.data.collections[s][r]
				}
				return []
			}

			function O(e, t) {
				const s = C(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function w(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					const e = s.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.d)
				}
				return []
			}

			function E(e, t) {
				return C(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(o.d)(e) || !!e.price))
			}
			const S = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === d.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const r = e[s];
						t.push({
							display: "".concat(r.brand, " •••• ").concat(r.last4),
							id: s,
							type: c.b.SavedStripe
						})
					}
				}
				if (s.status === d.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const r = e[s];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: c.b.SavedPayPal
						})
					}
				}
				return t
			};
			var N;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(N || (N = {}));
			const k = e => e.economics.paymentSystems.status === d.a.NotFetched ? N.NotFetched : e.economics.paymentSystems.status === d.a.Pending ? N.Fetching : N.Fetched,
				T = {
					allowTrial: !0,
					price: "0",
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				_ = {
					t5_vsb5g: "5000000000000000000000",
					t5_37jgj: "5000000000000000000000"
				},
				I = (e, t) => {
					const s = e.economics.specialMemberships.data[t || ""],
						n = e.subreddits.gov.meta[t || ""],
						i = s && s.active && s.active.membership,
						o = n && n.extra && n.extra.nomenclature || T;
					let a = T.price;
					if (i) a = i.price;
					else {
						const s = Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t)[0];
						s && s.price && (a = s.price)
					}
					return a = _[t || ""] || a, {
						allowTrial: r.d.spFreeTrialSubscriptions(e),
						price: a,
						member: o.member || T.member,
						memberPlural: o.memberPlural || T.memberPlural,
						memberAlt: o.memberAlt || T.memberAlt,
						memberAltPlural: o.memberAltPlural || T.memberAltPlural,
						membership: o.membership || T.membership,
						membershipAlt: o.membershipAlt || T.membershipAlt
					}
				},
				F = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.users) {
							const t = e.amounts.usdr.users,
								{
									anonymous: s
								} = t,
								r = p(t, ["anonymous"]),
								n = Object.keys(r),
								i = n.map(e => Object.assign({
									id: e
								}, r[e])).sort((e, t) => parseInt(t.amount) - parseInt(e.amount)),
								o = s ? parseInt(s.amount) : 0,
								a = s ? s.numUsers : 0,
								c = i.slice(5),
								l = i.slice(0, 5);
							return {
								allTippers: new Set(n),
								topTippers: {
									list: l,
									others: {
										amount: String(c.reduce((e, t) => e + parseInt(t.amount), o)),
										count: c.length + a
									},
									ranking: l.reduce((e, t, s) => (e[t.id] = s + 1, e), {})
								}
							}
						}
					}
				},
				P = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.tipsProportions) return e.amounts.usdr.tipsProportions
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === d.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				V = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return t.status === d.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				};
			var A;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(A || (A = {}));
			const D = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const s = W(e, t),
							r = Date.now();
						return s && r < s ? A.Subscribed : A.NotSubscribed
					}
					return A.DontKnow
				},
				W = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const e = s.data.subscription;
						return e && e.active && e.active.membership.endsAt || null
					}
					return null
				},
				B = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				R = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				z = (e, t, s) => {
					const n = r.d.spGiphy(e),
						o = R(e, t),
						a = "replyToPost" !== s && Object(u.n)(e, {
							commentId: s
						}),
						c = !!a && Object(i.a)(a);
					return n && (o || c)
				}
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./src/lib/fastdom/index.ts"),
				i = s("./src/reddit/actions/jsApi.ts");
			const o = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var l = s("./src/reddit/constants/jsapiEvents.ts");
			const d = 100;
			const m = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll('meta[name="'.concat(a, '"]'));
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(i.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(l.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(o, "".concat(r.a.redditUrl).concat(c), e))
					} catch (s) {
						return void console.error(o, "".concat(r.a.redditUrl).concat(c), s)
					}
					this.store.then(e => {
						e.dispatch(i.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, s) {
					const r = {
						name: e,
						props: t,
						element: s
					};
					this.queue.push(r), this.queue.length > d && this.queue.shift(), this.active && this.fireEvent(r)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					n.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = m
		}
	}
]);
//# sourceMappingURL=Poll~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~~da5a0d34.07e94a7b07f90a0824f9.js.map