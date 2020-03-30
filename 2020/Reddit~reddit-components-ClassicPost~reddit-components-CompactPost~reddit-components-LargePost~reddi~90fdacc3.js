// https://www.redditstatic.com/desktop2x/Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3.2ced5cc26821474d51de.js
// Retrieved at 3/30/2020, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"], {
		"./src/higherOrderComponents/makeAsync.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function i(e) {
				var t;
				return (t = class t extends r.a.Component {
					constructor(e) {
						super(e), this.mounted = !1, this.state = {
							Component: t.Component
						}
					}
					componentDidMount() {
						this.mounted = !0, this.state.Component !== e.ErrorComponent && e.getComponent().then(e => {
							t.Component = e, this.mounted && this.setState({
								Component: e
							})
						}, t => (this.mounted && this.setState({
							Component: e.ErrorComponent
						}), Promise.reject(t)))
					}
					componentWillUnmount() {
						this.mounted = !1
					}
					render() {
						const t = this.state.Component || e.LoadingComponent;
						return r.a.createElement(t, this.props)
					}
				}).Component = null, t
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/reddit/models/Media/index.ts"),
				r = s("./node_modules/url/url.js"),
				i = s.n(r);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: r
				} = e;
				let o = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					o = r || Object(n.A)(e)
				} else o = Object(n.A)(e);
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
			var n = s("./node_modules/lodash/every.js"),
				r = s.n(n);

			function i(e) {
				let t = null,
					s = null;
				return function() {
					for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
					return null !== t && i.length === t.length && r()(i, (e, s) => e === t[s]) || (t = i, s = e(...i)), s
				}
			}
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			const n = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				r = 1e3,
				i = 100 * r,
				o = 10 * i,
				a = 100 * o,
				c = 10 * a,
				l = 100 * c,
				d = 51;

			function u(e, t) {
				return t ? n(e.toString()) : e >= l - d ? "".concat(Math.floor(e / c), "b") : e >= c - d && e < l - d ? "".concat((e / c).toFixed(1), "b") : e >= a - d && e < c - d ? "".concat(Math.floor(e / o), "m") : e >= o - d && e < a - d ? "".concat((e / o).toFixed(1), "m") : e >= i - d && e < o - d ? "".concat(Math.floor(e / r), "k") : e >= r && e < i - d ? "".concat((e / r).toFixed(1), "k") : String(e)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/lib/constants/index.ts");
			const i = [r.Zb, r.eb, r.x, r.J, r.db, r.Eb],
				o = {
					[r.Eb]: "time.seconds",
					[r.db]: "time.minutes",
					[r.J]: "time.hours",
					[r.x]: "time.days",
					[r.eb]: "time.months",
					[r.Zb]: "time.years"
				},
				a = {
					[r.Eb]: "time.short.seconds",
					[r.db]: "time.short.minutes",
					[r.J]: "time.short.hours",
					[r.x]: "time.short.days",
					[r.eb]: "time.short.months",
					[r.Zb]: "time.short.years"
				};

			function c(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					l = new Date(t).getTime(),
					d = {
						[r.Zb]: "",
						[r.eb]: "",
						[r.x]: "",
						[r.J]: "",
						[r.db]: "",
						[r.Eb]: ""
					};
				let u = l - c;
				if (u <= 0) return Object(n.a)(e, "time.soon");
				for (const r of i) {
					const t = Math.floor(u / r);
					t && (d[r] = s ? "".concat(t).concat(Object(n.a)(e, a[r])) : Object(n.b)(e, o[r], t)), u -= t * r
				}
				const m = i.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return s ? m : Object(n.a)(e, "time.timeLeft", {
					time: m
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
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "i", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(n.a)(r.a),
				o = Object(n.a)(r.b),
				a = Object(n.a)(r.c),
				c = Object(n.a)(r.d),
				l = Object(n.a)(r.e),
				d = (Object(n.a)(r.f), Object(n.a)(r.g)),
				u = Object(n.a)(r.h),
				m = Object(n.a)(r.i),
				p = Object(n.a)(r.j)
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/reddit/constants/adViewability.ts"),
				l = s("./src/reddit/constants/viewabilityEvents.ts");
			const d = e => "boolean" == typeof e.cumulative;
			class u extends i.Component {
				constructor(e) {
					super(e), this.viewableImpression = {
						timer: null,
						event: l.a.Viewable,
						threshold: c.j,
						viewabilityMinimum: c.k,
						fired: !1,
						timeViewingInitialized: 0
					}, this.impression = {
						timer: null,
						event: l.a.Impression,
						threshold: c.c,
						viewabilityMinimum: c.d,
						fired: !1,
						timeViewingInitialized: 0
					}, this.groupM = {
						timer: null,
						event: l.a.GroupMViewable,
						threshold: c.a,
						viewabilityMinimum: c.k,
						fired: !1,
						timeViewingInitialized: 0,
						checkAdSize: !0
					}, this.vendorFullyViewable = {
						timer: null,
						event: l.a.VendorFullyViewable,
						threshold: c.a,
						viewabilityMinimum: c.h,
						fired: !1,
						timeViewingInitialized: 0
					}, this.vendorFullyViewableSeconds5 = {
						timer: null,
						event: l.a.VendorFullyViewableSeconds5,
						threshold: c.j,
						viewabilityMinimum: c.g,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: c.g,
						timeViewingInterrupted: 0,
						cumulative: !0,
						cumulativeElapsedTime: 0
					}, this.vendorFullyViewableSeconds15 = {
						timer: null,
						event: l.a.VendorFullyViewableSeconds15,
						threshold: c.j,
						viewabilityMinimum: c.f,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: c.f,
						timeViewingInterrupted: 0,
						cumulative: !0,
						cumulativeElapsedTime: 0
					}, this.videoViewable = {
						timer: null,
						event: l.a.VideoViewable,
						threshold: c.j,
						viewabilityMinimum: c.i,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: c.i,
						timeViewingInterrupted: 0
					}, this.videoFullyViewable = {
						timer: null,
						event: l.a.VideoFullyViewable,
						threshold: c.a,
						viewabilityMinimum: c.b,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: c.b,
						timeViewingInterrupted: 0
					}, this.handleViewabilityChange = e => {
						this.checkViewabilityByType(e), this.handleThresholds(e)
					}, this.checkViewabilityByType = e => {
						r()(this.state.event, e) || this.setState({
							event: e
						}), this.checkViewability(e, this.viewableImpression), this.checkViewability(e, this.impression), this.checkViewability(e, this.groupM), this.checkViewability(e, this.vendorFullyViewable), this.checkViewability(e, this.vendorFullyViewableSeconds5), this.checkViewability(e, this.vendorFullyViewableSeconds15), this.props.trackVideoMetrics && (this.checkViewability(e, this.videoViewable), this.checkViewability(e, this.videoFullyViewable))
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidUpdate() {
					this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? this.props.trackVideoMetrics ? this.checkViewabilityByType(this.state.event) : (this.pauseViewableStats(this.videoViewable), this.pauseViewableStats(this.videoFullyViewable)) : this.resetTimers()
				}
				resetTimers() {
					this.resetTimer(this.videoViewable), this.resetTimer(this.videoFullyViewable), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e.timer), e.timer = null, e.timeViewingInitialized = 0, e.remainingTime = e.viewabilityMinimum
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const s = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = e.viewabilityMinimum - s, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = e.viewabilityMinimum - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer))
				}
				handleThresholds(e) {
					const {
						pixelPostHasEnteredView: t,
						pixelPostHasExitedView: s
					} = this.props, n = c.e.filter(t => this.isAdequatelyInView(e, t));
					n.length > 0 && t(n);
					const r = c.e.filter(t => !this.isAdequatelyInView(e, t));
					r.length > 0 && s(r)
				}
				isAdequatelyInView(e, t) {
					return !!e && e.isIntersecting && e.intersectionRatio >= t
				}
				checkViewability(e, t) {
					if (t.checkAdSize && e && e.target) {
						const {
							height: s,
							width: n
						} = e.boundingClientRect;
						n * s > 242500 && (t.threshold = c.j)
					}
					if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
						const e = this.getLengthForTimer(t);
						return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
					}
					d(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t.timer)
				}
				clearTimer(e) {
					e && clearTimeout(e)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
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
						threshold: c.e,
						onChange: this.handleViewabilityChange
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/lib/addQueryParams/index.ts");
			const b = (e, t, s, n, r) => {
				const i = r || "*:*",
					o = s || d.P;
				return Object(p.a)("/search", {
					q: i,
					sort: o,
					t: n,
					category_name: e,
					category: t
				})
			};
			var h = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/selectors/telemetry.ts");
			var x = s("./src/reddit/components/CategoryTag/index.m.less"),
				g = s.n(x);
			var v = class extends r.a.Component {
					constructor() {
						super(...arguments), this.onClick = () => {
							const e = {
								id: this.props.category.categoryId,
								title: this.props.category.categoryName,
								eventType: u.a.SUBREDDIT,
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
							n = e.categoryName,
							i = r.a.createElement("span", null, n);
						return r.a.createElement("span", {
							className: Object(l.a)(g.a.metaFlair, {
								[g.a["m-lightboxHeader"]]: t
							})
						}, r.a.createElement(m.a, {
							onClick: this.onClick,
							to: b(n, s, d.Kb.Relevance, d.Rb.DAY),
							children: i
						}))
					}
				},
				y = s("./src/reddit/components/CategoryTagList/index.m.less"),
				j = s.n(y);
			const O = Object(i.b)(() => Object(o.c)({
				labelNSFW: c.N
			}));
			t.a = O(Object(a.c)(e => {
				let {
					postCategories: t,
					postId: s,
					inLightboxHeader: n,
					sendEvent: i
				} = e;
				return r.a.createElement("span", {
					className: n ? null : j.a.categoryTagWrapper
				}, t.map(e => r.a.createElement(v, {
					postId: s,
					category: e,
					key: e.categoryId,
					inLightboxHeader: n,
					sendEvent: i
				})))
			}))
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				l = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const m = Object(o.a)(e => {
				var {
					className: t
				} = e, s = u(e, ["className"]);
				return r.a.createElement(a.a, d({}, s, {
					className: Object(i.a)(l.a.horizontalVotes, t),
					scoreClassName: l.a.customScoreStyles,
					downvoteClassName: Object(a.b)(s) ? l.a.customDownvoteStyles : void 0
				}))
			});
			t.a = m
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
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				i = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/Emoji/index.m.less"),
				b = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const x = m.a.wrapped(e => {
				var {
					backgroundImage: t,
					style: s
				} = e, n = f(e, ["backgroundImage", "style"]);
				return a.a.createElement("div", h({
					style: Object.assign({}, s || {}, {
						backgroundImage: "url('".concat(t, "')")
					})
				}, n))
			}, "EmojiDisplay", b.a);
			var g = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				v = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = s("./src/reddit/constants/colors.ts"),
				j = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				w = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/Close/index.tsx"),
				S = s("./src/reddit/models/Flair/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/reddit/components/Flair/index.m.less"),
				I = s.n(N);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "c", (function() {
				return B
			})), s.d(t, "a", (function() {
				return H
			}));
			var T = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const P = Object(v.a)(g.b),
				F = m.a.div("FlairWrapper", I.a),
				L = m.a.wrapped(c.a, "CloseButton", I.a),
				V = m.a.wrapped(Object(u.a)(e => {
					var {
						forceSmallEmojis: t,
						theme: s
					} = e, n = T(e, ["forceSmallEmojis", "theme"]);
					const r = s;
					return a.a.createElement(x, _({
						style: Object.assign({}, M(!!t, r) || {})
					}, n))
				}), "FlairEmojiDisplay", I.a),
				M = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: "".concat(t.subredditContext.emojiHeight, "px"),
						width: "".concat(t.subredditContext.emojiWidth, "px")
					}
				},
				A = (e, t) => {
					const s = t ? "/r/".concat(t, "/search") : "/search",
						n = "".concat(t ? "flair_name" : "flair", ':"').concat(e, '"');
					return Object(l.a)(s, {
						[j.o]: n,
						[j.p]: t ? "1" : ""
					})
				},
				D = e => e.isFlairFilter ? a.a.createElement(O.a, {
					children: e.flair,
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}) : e.onClick ? a.a.createElement(O.a, {
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
							[I.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(k.a)(this.props).flair,
							color: "".concat(B(this.props))
						}
					}, this.props.text, this.props.isSelected && a.a.createElement(L, {
						to: "./",
						onClick: this.props.onCloseClick
					}, a.a.createElement(E.a, {
						className: I.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(k.a)(this.props).flair
						}
					})), !!this.props.tooltip && a.a.createElement(P, {
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
			const R = Object(u.a)(W),
				z = Object(u.a)(e => {
					let t = "",
						s = !1;
					const n = e.richtext.map((n, r) => {
						if (n.e === S.c.Emoji) {
							const i = n;
							return t += i.a, s = !0, a.a.createElement(V, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: i.u,
								key: r,
								title: i.a
							})
						} {
							const e = n;
							return t += e.t, a.a.createElement("span", {
								key: r
							}, e.t)
						}
					});
					let r;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (r = {
						marginTop: "-".concat(e.theme.subredditContext.emojiHeight - 16, "px")
					});
					const i = a.a.createElement(F, {
						className: Object(d.a)(e.className, {
							[I.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: Object.assign({}, r, {
							backgroundColor: e.backgroundColor || Object(k.a)(e).flair,
							color: "".concat(B(e))
						})
					}, n, e.isSelected && a.a.createElement(L, {
						to: "./",
						onClick: e.onCloseClick
					}, a.a.createElement(E.a, {
						className: I.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(k.a)(e).flair
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
				B = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(k.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(C.a)(Object(k.a)(e).post, y.a.black, y.a.white) : e.textColor === S.e.Dark ? y.a.black : y.a.white,
				H = m.a.wrapped(R, "TextFlair", I.a),
				q = m.a.wrapped(z, "RichTextFlair", I.a),
				Z = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.m)(.1, Object(k.a)(r()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				U = m.a.wrapped(e => {
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
				}, "MetaFlair", I.a);
			t.b = e => {
				const {
					className: t,
					disabled: s = !1,
					flair: n,
					isFlairFilter: r,
					isSelected: i,
					onClick: o,
					onCloseClick: c,
					onMouseDown: l,
					subredditName: u,
					usesCommunityStyles: m,
					forceSmallEmojis: p,
					to: b
				} = e, h = Object(d.a)({
					[I.a.flairVariant]: r,
					[I.a.small]: r && !e.large,
					[I.a.large]: r && e.large
				}, t);
				switch (n.type) {
					case S.f.Richtext:
						return s || !n.richtext ? null : a.a.createElement(q, {
							backgroundColor: n.backgroundColor,
							className: h,
							forceSmallEmojis: p,
							isFlairFilter: r,
							isSelected: i,
							onClick: o,
							onCloseClick: c,
							onMouseDown: l,
							redditStyle: !m,
							richtext: n.richtext,
							subredditName: u,
							textColor: n.textColor,
							to: b
						});
					case S.f.Text:
						return s || !n.text ? null : a.a.createElement(H, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: r,
							isSelected: i,
							onClick: o,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: u,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !m,
							to: b
						});
					case S.f.Meta:
						return a.a.createElement(H, {
							backgroundColor: n.backgroundColor,
							className: t,
							isFlairFilter: r,
							subredditName: u,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !m,
							to: b
						});
					case S.f.Nsfw:
					case S.f.Spoiler:
						return a.a.createElement(U, {
							className: t,
							text: n.text,
							type: n.type
						});
					case S.f.Quarantined:
						return null;
					case S.f.Oc:
						return a.a.createElement(H, {
							backgroundColor: y.a.alienblue,
							text: n.text,
							textColor: S.e.Light,
							tooltip: Object(w.c)("This post is marked as Original Content [OC]")
						});
					default:
						return n.text ? a.a.createElement(H, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: r,
							onClick: o,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: u,
							text: n.text,
							redditStyle: !m,
							to: b
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				d = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				m = s("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.N
				}),
				b = Object(a.b)(p),
				h = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return "".concat(e.type, "--").concat(t)
					}
					return "".concat(e.type, "--").concat(e.text)
				};
			t.a = b(e => {
				let {
					className: t,
					isFlairFilter: s,
					onClick: n,
					onMouseDown: i,
					disabled: a = !1,
					flair: c,
					labelNSFW: m,
					subredditName: p
				} = e;
				const b = !!c.find(e => e.type === u.f.Richtext),
					f = c.map(e => {
						if (e.type === u.f.Text && b) return null;
						if (!m && e.type === u.f.Nsfw) return null;
						const t = Object(d.j)(e),
							c = "/r/".concat(p, "/"),
							f = i ? () => i(e) : r.a;
						return o.a.createElement(l.b, {
							isFlairFilter: s,
							key: h(e),
							onClick: n,
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
			var n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				d = s.n(l);
			t.a = e => o.a.createElement(a.g, {
				className: d.a.modalHeader
			}, o.a.createElement(a.n, null, e.title), o.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
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
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				i = s.n(r);
			const o = n.a.div("Wrapper", i.a);
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Flair/index.tsx"),
				a = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				l = s.n(c);
			const d = i.a.span("Placeholder", l.a),
				u = i.a.div("SelectedFlair", l.a),
				m = i.a.wrapped(o.b, "FlairComponent", l.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(d, null, e.placeholderText), r.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, r.a.createElement(a.c, null, "No flair selected"))
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
			var n = s("./node_modules/lodash/once.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const p = l.a.wrapped(e => o.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = r()((function() {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				b = s("./src/reddit/components/Flair/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				f = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				x = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				g = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				y = s.n(v),
				j = class extends r.a.Component {
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
							searchQuery: n
						} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(n)), o = !!s && i.some(e => e.id === s);
						return r.a.createElement("div", {
							className: y.a.container
						}, r.a.createElement("div", {
							className: y.a.searchBoxWrapper
						}, r.a.createElement("input", {
							className: y.a.searchInput,
							onChange: this.onSearchChange,
							type: "text",
							placeholder: Object(u.c)("Search for flair"),
							value: n
						}), r.a.createElement(g.a, {
							className: y.a.searchIcon
						})), r.a.createElement(h.a, {
							name: "flair_picker",
							onChange: this.props.onChange,
							value: s
						}, i.map((e, t) => {
							const n = Object(d.c)(e),
								i = s === e.id || !o && 0 === t;
							return r.a.createElement(f.a, {
								className: y.a.radioOption,
								key: e.id,
								showButton: !0,
								tabIndex: i ? 0 : -1,
								value: e.id
							}, r.a.createElement(b.b, {
								className: y.a.flairComponent,
								flair: n,
								forceSmallEmojis: !0
							}), e.textEditable && r.a.createElement(x.a, {
								className: y.a.pencil
							}))
						})))
					}
				},
				O = s("./src/reddit/components/FlairSearch/index.m.less"),
				C = s.n(O);
			const w = "FlairSearch-EmojiPicker-DropdownId",
				E = Object(c.a)(e => e && Object(d.c)(e)),
				S = Object(o.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: m.d
				}),
				k = Object(i.b)(S);
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, s = t && e.templateId ? t[e.templateId] : void 0;
						let n = e;
						s && (n = Object(d.d)({
							flair: e,
							template: s,
							ignoreTextAllowance: !0
						})), this.props.onChange(n)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const s = t[e],
								n = Object(d.c)(s);
							this.props.onChange(n)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: s,
						templateIds: n,
						subredditId: i
					} = e, o = s && e.flair && e.flair.templateId && s[e.flair.templateId] || void 0, c = Object(p.a)(), l = e.flair || E(o);
					return r.a.createElement("div", {
						className: Object(a.a)(e.className, C.a.container)
					}, s && n && r.a.createElement(j, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: o ? o.id : "",
						templateIds: n,
						templates: s
					}), l && o && (t || o.textEditable) ? r.a.createElement("div", {
						className: C.a.flairEditSection
					}, r.a.createElement("div", {
						className: C.a.editLabel
					}, Object(u.c)("Edit flair")), e.areFlairRestrictionsEnabled && r.a.createElement("div", {
						className: C.a.restrictionHintText
					}, Object(d.k)(o)), r.a.createElement(c, {
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
			t.a = k(N)
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
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/CategoryTagList/index.tsx"),
				l = s("./src/reddit/components/FlairList/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/correlationIdTracker.ts"),
				m = s("./src/reddit/helpers/flair.ts"),
				p = s("./src/reddit/helpers/trackers/postFlair.ts"),
				b = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/components/FlairWrapper/index.m.less"),
				y = s.n(v);
			const j = Object(i.b)(() => Object(o.c)({
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
						return Object(x.q)(e, {
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
						return Object(x.D)(e, s)
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.P)(e, {
							subredditId: s.belongsTo.id
						}).name
					}
				})),
				O = (e, t) => {
					const s = [];
					return t.isOriginalContent && s.push({
						text: "OC",
						type: h.f.Oc
					}), e && s.push({
						text: Object(b.c)("Poll"),
						type: h.f.Meta
					}), s.push(...t.flair), s
				};
			t.a = j(e => {
				let {
					className: t,
					disableFlair: s,
					flairPosition: n,
					isFlairFilter: i,
					isPostFlairEnabled: o,
					isMeta: d,
					nowrap: b,
					post: f,
					postCategories: x,
					sendEvent: g,
					showCategoryTag: v,
					subredditName: j,
					titleFlair: C
				} = e;
				const w = n === h.b.Left,
					E = C || O(d, f),
					S = [];
				let k = [];
				w ? E.map(e => {
					Object(m.p)(e.type) ? S.push(e) : k.push(e)
				}) : k = E;
				const N = b ? y.a.flairNoWrap : S.length > 0 || k.length > 0 || x && v ? y.a.flairWrapper : null,
					I = e => {
						const t = {
							id: f.belongsTo.id,
							eventType: f.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(u.d)(u.a.SearchResults), g && g(Object(p.a)(f.id, t))
					},
					_ = e => {
						g && g(Object(p.e)(e))
					},
					T = !(s || !E || !E.length),
					P = !!(v && x && x.length);
				return T || P ? r.a.createElement("div", {
					className: Object(a.a)(N, t)
				}, T && S && r.a.createElement(l.a, {
					className: y.a.flairList,
					isFlairFilter: i,
					key: "leftFlair",
					onClick: I,
					onMouseDown: _,
					flair: S,
					disabled: !o,
					subredditName: j
				}), T && r.a.createElement(l.a, {
					className: y.a.flairList,
					isFlairFilter: i,
					key: "rightFlair",
					onClick: I,
					onMouseDown: _,
					flair: k,
					disabled: !o,
					subredditName: j
				}), P && r.a.createElement(c.a, {
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
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const i = () => null;
			t.a = Object(n.a)({
				ErrorComponent: i,
				getComponent: () => Object(r.a)(() => s.e("SubredditHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var o = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const a = e => new Promise((t, s) => {
				const n = new Image;
				n.onload = () => t(n), n.onerror = s, n.src = e
			});
			t.a = e => {
				var {
					src: t,
					lowSrc: s = t,
					errorSrc: c = s
				} = e, l = o(e, ["src", "lowSrc", "errorSrc"]);
				const d = Object(n.createRef)();
				return a(t).then(() => {
					d.current && (d.current.src = t)
				}).catch(() => {
					d.current && (d.current.src = c)
				}), r.a.createElement("img", i({
					ref: d,
					src: s
				}, l))
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/app/strings/index.ts"),
				o = s("./src/lib/timeAgo/index.ts"),
				a = s("./src/lib/timeUntil/index.ts");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return r.a.createElement("span", {
					className: e.className
				}, t ? Object(i.a)(e.language, "polls.closed", {
					timeAgo: Object(o.d)(e.language, e.poll.endsAt / 1e3)
				}) : Object(a.a)(e.language, new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PopupPortal/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/CSSVariableProvider/index.tsx"),
				a = s("./src/reddit/constants/zIndex.ts");
			const c = "POPUP_CONTAINER";
			let l;
			const d = ["right", "top"],
				u = ["left", "top"];

			function m(e) {
				const [t, s] = Object(n.useState)(null);
				return Object(n.useEffect)(() => {
					const t = () => {
						const t = (e => {
							let t;
							if (!(t = "string" == typeof e ? document.getElementById(e) : e.current)) return;
							const s = t.getBoundingClientRect(),
								{
									style: n
								} = Object(i.b)({
									isFixed: !1,
									targetBox: s,
									targetPosition: d,
									tooltipPosition: u,
									tooltipSize: {
										width: 100,
										height: 100
									}
								});
							return {
								x: n.left,
								y: n.top
							}
						})(e);
						t && s(t)
					};
					return t(), window.addEventListener("resize", t), () => {
						window.removeEventListener("resize", t)
					}
				}, [e]), t
			}

			function p(e) {
				const {
					children: t,
					rightOf: s
				} = e, n = m(s);
				return n && (l || (l = document.getElementById(c))) ? Object(o.d)(r.a.createElement("div", {
					style: {
						position: "absolute",
						transform: "t".concat("ranslate(", n.x, "px, ").concat(n.y, "px)"),
						zIndex: a.e
					}
				}, t), l) : null
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
			var n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
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
				const n = e && t.templateId ? e[t.templateId] : void 0;
				if (!n) return {
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
				} : Object(o.n)(t) && !Object(o.q)(n) ? {
					canSave: !1,
					reason: l.TextIsNotAllowed
				} : r()(s, t) ? {
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
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				x = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/lib/getShortenedLink.ts"),
				w = s("./src/reddit/components/FlairWrapper/index.tsx"),
				E = s("./src/app/strings/index.ts"),
				S = s("./src/lib/prettyPrintNumber/index.ts"),
				k = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				N = s("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				I = s.n(N);
			const _ = Object(c.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var T = Object(o.b)(_)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return i.a.createElement("div", {
						className: Object(l.a)(e.className, I.a.proposalMetaData)
					}, i.a.createElement("span", null, Object(E.b)(e.language, "polls.numVotesCommas", parseInt(n), {
						count: Object(S.a)(n)
					})), t && i.a.createElement(k.a, {
						className: I.a.proposalMetaDataTime,
						language: e.language,
						poll: t
					}))
				})),
				P = s("./src/reddit/components/SEOTitle/index.tsx"),
				F = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/subreddit.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/PostTitle/index.m.less"),
				A = s.n(M),
				D = s("./src/config.ts");

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return R
			})), s.d(t, "a", (function() {
				return B
			}));
			var R, z = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(R || (R = {}));
			const B = u.a.wrapped(Object(d.a)(e => {
					var {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: r,
						children: o,
						className: a,
						redditStyle: c
					} = e, d = z(e, ["size", "titleColor", "titleType", "nowrap", "children", "className", "redditStyle"]);
					let u = "";
					switch (t) {
						case R.ExtraLarge:
							u = A.a.ExtraLarge;
							break;
						case R.Large:
							u = A.a.Large;
							break;
						case R.Medium:
							u = A.a.Medium;
							break;
						case R.Small:
							u = A.a.Small;
							break;
						case R.ExtraSmall:
							u = A.a.ExtraSmall
					}
					return i.a.createElement("div", W({
						className: Object(l.a)(a, u, {
							[A.a.isNoWrap]: r
						}),
						style: {
							"--posttitletextcolor": s || Object(O.a)(Object.assign({
								redditStyle: c
							}, d)).titleText
						}
					}, d), n ? i.a.createElement(P.b, {
						type: n
					}, o) : o)
				}), "Title", A.a),
				H = e => {
					var {
						className: t,
						disableVisited: s,
						titleColor: n
					} = e, r = z(e, ["className", "disableVisited", "titleColor"]);
					return i.a.createElement(a.a, W({}, r, {
						className: Object(l.a)(t, A.a.styledLink, {
							[A.a.isVisitedEnabled]: !s
						})
					}), r.children)
				},
				q = e => {
					var {
						disableVisited: t,
						nowrap: s
					} = e, n = z(e, ["disableVisited", "nowrap"]);
					return i.a.createElement("div", W({}, n, {
						className: Object(l.a)(A.a.titleContainer, n.className, {
							[A.a.isNoWrap]: s,
							[A.a.isVisitedEnabled]: !t
						})
					}))
				},
				Z = Object(p.t)({
					isCommentPermalink: p.v,
					pageLayer: e => e
				}),
				U = Object(c.c)({
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
						return Object(F.q)(e, {
							postId: s.id
						})
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(L.P)(e, {
							subredditId: s.belongsTo.id
						}).name
					},
					shouldOpenPostInNewTab: V.S
				}),
				Q = Object(o.b)(U),
				G = e => {
					const {
						post: t,
						subredditName: s
					} = e, {
						isSponsored: n
					} = t;
					if (!e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						const r = t.media && Object(j.C)(t.media) ? Object(g.b)(t.id, s) : t.permalink,
							o = e.isCommentPermalink ? Object(x.b)(r) : Object(h.a)(r);
						return i.a.createElement(q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? i.a.createElement(Y, e) : i.a.createElement(H, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o
						}, i.a.createElement(Y, e)))
					}
					return i.a.createElement(q, {
						nowrap: e.nowrap
					}, i.a.createElement(Y, e))
				},
				Y = e => {
					const {
						leftFlair: t,
						post: s
					} = e, n = e.format ? e.format(s) : s.title, r = e.isCommentsPage ? P.a.PostComments : P.a.PostItem;
					return i.a.createElement(B, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && i.a.createElement(w.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), n)
				},
				J = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, r = !t && !e.isCrosspost && e.size !== R.Large && !s.isSponsored && !(s.media && Object(j.C)(s.media)) && (s.source || s.media && (s.media.type === j.n.GIFVIDEO || s.media.type === j.n.IMAGE || s.media.type === j.n.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (r) return i.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(j.A)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source
						}, Object(C.a)(s), i.a.createElement(v.a, {
							className: A.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== R.Large && e.size !== R.ExtraLarge) return i.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source
					}, Object(C.a)(s), i.a.createElement(v.a, null));
					return null
				};
			class K extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n        .".concat(this.props.post.id, " .").concat(A.a.Component, " {\n          --postTitle-VisitedLinkColor: ").concat(Object(n.d)(.45, Object(O.a)(this.props).titleText, "#FFFFFF"), ";\n          --postTitleLink-VisitedLinkColor: ").concat(Object(n.d)(.45, this.props.titleColor || Object(O.a)(this.props).titleText, Object(O.a)(this.props).body), ";\n        }\n      ")
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: n,
						isMeta: r,
						isOverlay: o,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d
					} = this.props, u = s === y.b.Left, m = Object(w.b)(r, c), p = d ? m.filter(e => e.type === y.f.Nsfw || e.type === y.f.Spoiler) : u ? m.filter(e => Object(f.p)(e.type)) : [], b = d ? [] : u ? m.filter(e => !Object(f.p)(e.type)) : m, h = !o && !n, x = !t && p && p.length > 0 && h, g = !t && b && b.length > 0 && h;
					return i.a.createElement("div", {
						className: Object(l.a)(e, c.id)
					}, !d && x && i.a.createElement(w.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement(G, W({}, this.props, {
						leftFlair: d ? p : void 0
					})), a && i.a.createElement(T, {
						className: A.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(J, this.props), g && i.a.createElement(w.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement("div", {
						className: A.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: '\n              <img alt="" src="'.concat(D.a.assetPath, '/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            ')
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = u.a.wrapped(Z(Q(Object(d.a)(Object(m.c)(K)))), "Component", A.a)
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
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
			var n = s("./src/lib/isUrl/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				m = s("./src/reddit/icons/fonts/Link/index.tsx"),
				p = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				b = s("./src/reddit/icons/fonts/Text/index.tsx"),
				h = s("./src/reddit/icons/fonts/helpers.tsx"),
				f = s("./src/reddit/icons/fonts/Video/index.m.less"),
				x = s.n(f);
			var g = c.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(h.b)("video"), " ").concat(e.className)
				}), "VideoIcon", x.a),
				v = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				y = s("./src/reddit/constants/elementClassNames.ts"),
				j = s("./src/reddit/controls/ContentType/index.m.less"),
				O = s.n(j);
			const C = e => Object(o.a)(O.a.contentTypeIcon, e.className),
				w = e => i.a.createElement(m.a, {
					className: Object(o.a)(y.a, C(e))
				});
			var E = e => {
					const t = C(e);
					switch (e.type) {
						case "gifvideo":
							return i.a.createElement(u.a, {
								className: t
							});
						case "image":
							return i.a.createElement(p.a, {
								className: t
							});
						case "meta":
							return i.a.createElement(v.a, {
								className: t
							});
						case "rtjson":
						case "text":
							return i.a.createElement(b.a, {
								className: t
							});
						case "video":
							return i.a.createElement(g, {
								className: t
							});
						default:
							return i.a.createElement(w, e)
					}
				},
				S = s("./src/reddit/controls/OutboundLink/index.tsx"),
				k = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/models/Theme/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = s("./src/reddit/components/Thumbnail/index.m.less"),
				P = s.n(T);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return q
			}));
			const L = e => e.placeholderImage || Object(_.a)(e).placeholderImage,
				V = e => e.placeholderImage ? "cover" : Object(_.a)(e).placeholderImagePosition,
				M = c.a.span("LinkText", P.a),
				A = e => {
					let {
						className: t,
						onClick: s,
						children: n
					} = e;
					return i.a.createElement("div", {
						onClick: s,
						className: Object(o.a)(P.a.linkIcon, t)
					}, n)
				},
				D = e => i.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(P.a.hiddenImage, e.className)
				}),
				W = e => {
					const t = i.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(d.b)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = "url(".concat(n, ")"))
					}), i.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(P.a.thumbnail, P.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: "url(".concat(e.src, ")"),
							borderColor: e.isOutbound ? Object(_.a)(e).button : Object(_.a)(e).line
						}
					}, e.isOutbound && i.a.createElement(A, {
						className: e.linkIconClassName
					}, i.a.createElement(k.a, {
						className: Object(o.a)(P.a.outboundLinkIcon, e.outboundLinkIconClassName)
					}), e.text && i.a.createElement(M, {
						className: e.linkTextClassName
					}, e.text)), i.a.createElement(D, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				R = e => e.isOutbound ? Object(_.a)(e).button : e.placeholderImage ? "transparent" : Object(_.a)(e).line,
				z = e => {
					const t = L(e),
						s = t && {
							background: Object(I.g)(Object(_.a)(e).placeholder, t, V(e))
						};
					return i.a.createElement("div", {
						className: Object(o.a)(P.a.thumbnail, P.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: Object.assign({}, s, {
							borderColor: R(e)
						})
					}, (!e.placeholderImage || e.showContentType) && i.a.createElement(E, {
						className: Object(o.a)(e.contentTypeClassName, P.a.contentType, {
							[P.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta ? "meta" : e.type
					}), e.isOutbound && i.a.createElement(A, {
						className: e.linkIconClassName
					}, i.a.createElement(k.a, {
						className: Object(o.a)(P.a.outboundLinkIcon, e.outboundLinkIconClassName)
					}), e.text && i.a.createElement(M, {
						className: e.linkTextClassName
					}, e.text)))
				},
				B = e => i.a.createElement(W, F({}, e, {
					className: Object(o.a)(P.a.blurredThumbnail, e.className)
				})),
				H = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: r,
						crosspost: a,
						forceShowNSFW: c,
						isMeta: l,
						linkIconClassName: d,
						linkTextClassName: u,
						outboundLinkIconClassName: m,
						post: p,
						redditStyle: b,
						removeLink: h,
						showContentType: f,
						templatePlaceholderImage: x,
						text: g,
						theme: v,
						usePreview: y
					} = e, j = !v.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!a || !a.isNSFW)) && !c, O = L({
						placeholderImage: x,
						redditStyle: b,
						theme: v
					}), C = q(e), w = U(p, t, O, j, g, v, C, l, f, h, b, d, u, m, r), E = Object(N.A)(p);
					return Object(n.a)(E) && !h && E.indexOf("redditmedia") < 0 ? i.a.createElement("div", {
						className: Object(o.a)(P.a.container, y ? P.a.usePreview : "", s)
					}, i.a.createElement(S.a, {
						href: Object(N.A)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source
					}, w)) : i.a.createElement("div", {
						className: Object(o.a)(P.a.container, y ? P.a.usePreview : "", s)
					}, w)
				}),
				q = e => {
					let {
						crosspost: t,
						post: s,
						url: n,
						usePreview: r
					} = e;
					if (n) return n;
					const {
						preview: i,
						media: o,
						thumbnail: a
					} = t || s;
					return r && i ? i.url : Z(o) ? o.scrubberThumbSource : a.url
				},
				Z = e => !!e && e.type === N.n.LIVEVIDEO,
				U = (e, t, s, r, a, c, d, u, m, p, b, h, f, x, g) => {
					const v = e.source && !e.isSponsored || !1;
					if (Object(n.a)(d)) {
						const s = Z(e.media),
							n = s ? {
								errorSrc: l.T
							} : {},
							u = Object(o.a)(t, {
								[P.a.verticallyCenterThumbnail]: s
							});
						return r ? i.a.createElement(B, F({
							"data-click-id": "image",
							src: d
						}, n, {
							className: u,
							isOutbound: v && !p,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						})) : i.a.createElement(W, F({
							alt: e.title,
							className: u,
							src: d
						}, n, {
							isOutbound: v && !p,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: a,
							theme: c
						}))
					}
					return i.a.createElement(z, {
						className: t,
						contentTypeClassName: g,
						placeholderImage: s,
						isMeta: u,
						isOutbound: v && !p,
						linkIconClassName: h,
						linkTextClassName: f,
						outboundLinkIconClassName: x,
						redditStyle: b,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null
					})
				};
			t.a = H
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/controls/Score/index.tsx"),
				m = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/VerticalVotes/index.m.less"),
				x = s.n(f);
			const g = Object(a.c)({
					isNightmode: h.Q
				}),
				v = Object(o.b)(g),
				y = e => !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class j extends i.a.Component {
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
							shouldShowScore: r = !0,
							upvoteButtonClassName: o,
							containerRef: a,
							model: l
						} = e,
						h = !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
						f = y(e),
						g = l.voteState;
					return i.a.createElement("div", {
						className: Object(c.a)(x.a.votesContainer, e.className),
						id: "vote-arrows-".concat(l.id),
						ref: a
					}, h ? i.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": g === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightmode: s,
						onClick: this.onUpvote,
						voteState: g
					}) : i.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": g === b.a.upvoted,
						className: Object(c.a)(d.o, o),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, i.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: g
					})), !e.compact && r && i.a.createElement(u.a, {
						className: e.scoreClassName,
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: g,
						isScoreHidden: e.model.isScoreHidden
					}), f ? i.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": g === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightmode: s,
						onClick: this.onDownvote,
						voteState: g
					}) : i.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": g === b.a.downvoted,
						className: Object(c.a)(d.o, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, i.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: g
					})))
				}
			}
			const O = Object(l.a)(v(j));
			t.a = O
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(n.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return Object.assign({}, e, {
					onPostViewable: r.R,
					pixelPostHasEnteredView: r.C,
					pixelPostHasExitedView: r.D
				})
			}(t))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			const n = "reddit",
				r = "reddit.ready",
				i = "reddit.urlChanged"
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(o);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, s, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/omit.js"),
				r = s.n(n),
				i = s("./node_modules/query-string/index.js"),
				o = s.n(i),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/addQueryParams/index.ts");
			var m = (e, t) => t ? Object(u.a)(e, {
					user_id: t
				}) : e,
				p = s("./src/lib/opener/index.ts"),
				b = s("./src/lib/redditId/index.ts"),
				h = s("./src/reddit/helpers/getVendorMetadata.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(d.a)(x.a, x.i, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(f.b)(e, n) : null
				}, (e, t, s) => ({
					allowClickTracking: e,
					basePixelMetadata: s,
					userId: t ? Object(b.a)(t.id) : null
				})),
				y = Object(l.b)(v, {}),
				j = (e, t, s, n) => {
					n && t.outboundUrl && t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now() && (e.href = m(t.outboundUrl, s))
				},
				O = y(e => {
					const {
						allowClickTracking: t,
						basePixelMetadata: s,
						href: n,
						isSponsored: i,
						postId: a,
						source: l,
						userId: d
					} = e;
					let u = r()(e, ["allowClickTracking", "basePixelMetadata", "isSponsored", "postId", "source", "userId"]);
					const m = l && l.outboundUrl && i ? l.outboundUrl : n;
					return u = Object.assign({}, u, {
						href: m,
						rel: p.a,
						target: p.c.BLANK
					}), !l || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: s
						} = e;
						return !(!t || !s) && (t > s + 3e5 || t < s - 36e5)
					})(l) ? c.a.createElement("a", u) : c.a.createElement("a", g({}, u, {
						onMouseDown: e => {
							if (l && l.outboundUrl && i && ((e, t, s) => {
									if (t && s && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(e.href)) {
										const n = Object(h.b)(t, Object(f.bb)(s)),
											{
												url: r,
												query: i
											} = o.a.parseUrl(e.href);
										e.href = o.a.stringifyUrl({
											url: r,
											query: Object.assign({}, i, n)
										})
									}
								})(e.currentTarget, a, s), 1 === e.button || 2 === e.button || e.ctrlKey) return !0;
							j(e.currentTarget, l, d, t)
						},
						onMouseLeave: e => ((e, t) => {
							e.href = t
						})(e.currentTarget, m),
						onTouchStart: e => j(e.currentTarget, l, d, t)
					}))
				});
			t.a = O
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				o = s("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = s.n(o);
			t.a = n.a.wrapped(i.a, "styledOutboundLink", {
				styledOutboundLink: "".concat(a.a.styledOutboundLink, " ").concat(r.l)
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, s) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/constants/keycodes.ts"),
				a = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = s.n(d);
			class m extends r.a.Component {
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
					return e.hidden ? null : r.a.createElement(l.a, {
						"aria-checked": e.selected,
						className: Object(i.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? r.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(a.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/keycodes.ts");
			class o extends r.a.Component {
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
						return r.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props, {
							value: n
						} = this.state;
						if (t) return;
						const r = e.key === i.b.ArrowUp,
							o = e.key === i.b.ArrowDown;
						if (r || o) {
							const t = this.getValues();
							if (!t.length) return;
							const i = n ? t.indexOf(n) : 0,
								o = t[((r ? i - 1 : i + 1) + t.length) % t.length];
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
					return r.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, r.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), r.a.Children.map(e.children, (s, n) => {
						const i = 0 === n,
							o = s.props.value === t,
							a = null !== t ? o ? 0 : -1 : i ? 0 : -1;
						return r.a.cloneElement(s, {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				d = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/models/Vote/index.ts"),
				p = s("./src/reddit/controls/Score/index.m.less"),
				b = s.n(p);
			const h = e => e.voteState === m.a.downvoted ? Object(u.a)(e).voteText.downvote : e.voteState === m.a.upvoted ? Object(u.a)(e).voteText.upvote : Object(d.a)(Object(l.a)(e)),
				f = Object(o.a)(e => {
					const t = {
							color: e.light ? c.a.lightboxHeaderText : h(e)
						},
						s = e.isScoreHidden ? "•" : Object(a.b)(e.score);
					return r.a.createElement("div", {
						className: Object(i.a)(b.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, s)
				});
			t.a = f
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = "giphy|",
				r = "|downsized";

			function i(e, t) {
				return n + e + (t ? r : "")
			}

			function o(e) {
				return e && 0 === e.indexOf(n)
			}

			function a(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(o)
			}

			function c(e) {
				let t = e.substring(n.length);
				return t.indexOf("|") && (t = t.split("|")[0]), "https://giphy.com/gifs/".concat(t)
			}
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
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(n.screen)(e),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e),
					userSubreddit: Object(n.userSubreddit)(e)
				}),
				i = e => t => Object.assign({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off"
				}, r(t)),
				o = (e, t) => s => Object.assign({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t)
				}, r(s)),
				a = (e, t) => s => Object.assign({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, r(s)),
				c = (e, t) => s => Object.assign({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, r(s)),
				l = (e, t) => s => Object.assign({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, r(s)),
				d = (e, t) => s => Object.assign({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					comment: Object(n.comment)(s, t)
				}, r(s)),
				u = (e, t) => s => Object.assign({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(n.comment)(s, t),
					post: Object(n.post)(s, t)
				}, r(s)),
				m = (e, t) => s => Object.assign({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t)
				}, r(s)),
				p = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(n.post)(s, t),
					subreddit: Object(n.subredditByPostOrCommentId)(s, t)
				}),
				b = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(n.comment)(s, t),
					post: Object(n.post)(s, t),
					subreddit: Object(n.subredditByPostOrCommentId)(s, t)
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
				return u
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/reddit/helpers/flair.ts");
			const o = (e, t) => s => Object.assign({
					source: "post",
					action: "click",
					noun: "post_flair"
				}, r.defaults(s), {
					actionInfo: r.actionInfo(s),
					correlationId: Object(n.c)(n.a.SearchResults),
					post: r.post(s, e),
					search: r.postFlairClickToSearch(s, t),
					subreddit: r.subreddit(s)
				}),
				a = e => t => Object.assign({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search"
				}, r.defaults(t), {
					actionInfo: r.actionInfo(t),
					correlationId: Object(n.c)(n.a.SearchResults),
					search: r.postFlairClickToSearch(t, e),
					subreddit: r.subreddit(t)
				}),
				c = e => t => {
					const s = Object(i.g)(e);
					return Object.assign({}, r.defaults(t), {
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: r.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				},
				l = () => e => Object.assign({}, r.defaults(e), {
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: r.subreddit(e)
				}),
				d = e => t => {
					const s = Object(i.g)(e);
					return Object.assign({}, r.defaults(t), {
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: r.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					})
				},
				u = e => t => {
					const s = Object(i.g)(e);
					return Object.assign({}, r.defaults(t), {
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: r.subreddit(t),
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Gif/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Link/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("link"), " ").concat(e.className)
			}), "LinkIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Text/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				a = s.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return r.a.createElement("svg", c({
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "20",
					viewBox: "0 0 20 20",
					className: Object(i.a)(a.a.checkbox, t)
				}, s), r.a.createElement("path", {
					fill: "inherit",
					d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("title", {
				id: "".concat(e.title, "-title")
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = s.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", c({}, e, {
				className: Object(i.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var n, r, i;
			s.d(t, "c", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})), s.d(t, "a", (function() {
					return i
				})), s.d(t, "d", (function() {
					return o
				})), s.d(t, "e", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
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
					type: r.NewStripe
				}),
				a = e => e.cardCVCComplete && e.cardExpiryComplete && e.cardNumberComplete && !!e.name && e.postalCodeComplete
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			const n = (e, t) => {
					let {
						post: s
					} = t;
					const n = s.belongsTo.id;
					if (!n) return null;
					const r = e.authorFlair.models[n];
					if (!r) return null;
					const i = s.author;
					return i && r[i] || null
				},
				r = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!s) return null;
					const r = e.authorFlair.models[s];
					return r ? r[n] : null
				},
				i = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return h
			})), s.d(t, "s", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "D", (function() {
				return g
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "v", (function() {
				return y
			})), s.d(t, "j", (function() {
				return j
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "k", (function() {
				return C
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "F", (function() {
				return E
			})), s.d(t, "q", (function() {
				return S
			})), s.d(t, "r", (function() {
				return k
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "t", (function() {
				return T
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "u", (function() {
				return F
			})), s.d(t, "p", (function() {
				return M
			})), s.d(t, "w", (function() {
				return D
			})), s.d(t, "x", (function() {
				return W
			})), s.d(t, "y", (function() {
				return R
			})), s.d(t, "E", (function() {
				return z
			})), s.d(t, "A", (function() {
				return B
			})), s.d(t, "B", (function() {
				return H
			})), s.d(t, "c", (function() {
				return q
			})), s.d(t, "C", (function() {
				return Z
			})), s.d(t, "z", (function() {
				return U
			})), s.d(t, "h", (function() {
				return Q
			})), s.d(t, "i", (function() {
				return G
			})), s.d(t, "o", (function() {
				return Y
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/reddit/featureFlags/index.ts"),
				i = s("./src/reddit/helpers/economics/sortBadges.ts"),
				o = s("./src/reddit/helpers/richTextJson/index.ts"),
				a = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/models/Badge/managementPage.ts"),
				l = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				u = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				b = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const h = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) return t.membership || t.provisional_membership || null
					}
					return null
				},
				f = (e, t) => {
					const s = h(e, t);
					return s && s.endsAt || null
				};
			var x;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(x || (x = {}));
			const g = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const s = f(e, t),
							n = Date.now();
						return s && n < s ? x.Subscribed : x.NotSubscribed
					}
					return x.DontKnow
				},
				v = (e, t) => {
					const s = e.user.account,
						n = e.economics.subredditPremium[t];
					if (s && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[s.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[c.a.Loyalty]: n.find(e => e.placement === a.a.First),
							[c.a.Achievement]: n.find(e => e.placement === a.a.Second),
							[c.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[c.a.Loyalty]: void 0,
						[c.a.Achievement]: void 0,
						[c.a.Cosmetic]: void 0
					}
				},
				y = (e, t, s) => {
					if (!r.d.spBadges(e) && !r.d.spPremium(e)) return [];
					const n = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(i.a)(n.map(t => e.badges.models[t]).filter(Boolean))
				},
				j = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === m.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				},
				O = (e, t) => {
					const s = R(e, t);
					return !!s && !!s.creator
				},
				C = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = e.subreddits.gov.communityJar[s];
					return n ? n.usdr : void 0
				},
				w = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.amount) return e.amounts.usdr.amount
					}
					return "0"
				};

			function E(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function S(e, t) {
				const {
					badge: s,
					subredditId: n
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(a.c)(s) && s.userId === r) return s;
				const i = e.badges.models,
					o = e.user.ownedBadges[n] || {},
					c = Object(a.c)(s) ? s.type : s.id;
				return Object.keys(o).map(e => i[e]).find(e => e && e.type === c)
			}

			function k(e, t, s, n) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					if (s === c.a.Loyalty || s === c.a.Achievement) return r.data.collections[s];
					if (s === c.a.Cosmetic && n) return r.data.collections[s][n]
				}
				return []
			}

			function N(e, t) {
				const s = k(e, t, c.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function I(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					const e = s.data.collections[c.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.d)
				}
				return []
			}

			function _(e, t) {
				return k(e, t, c.a.Cosmetic, c.c.Gallery).some(e => e.locked.some(e => Object(a.d)(e) || !!e.price))
			}
			const T = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === u.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const n = e[s];
						t.push({
							display: "".concat(n.brand, " •••• ").concat(n.last4),
							id: s,
							type: l.b.SavedStripe
						})
					}
				}
				if (s.status === u.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const n = e[s];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: l.b.SavedPayPal
						})
					}
				}
				return t
			};
			var P;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(P || (P = {}));
			const F = e => e.economics.paymentSystems.status === u.a.NotFetched ? P.NotFetched : e.economics.paymentSystems.status === u.a.Pending ? P.Fetching : P.Fetched,
				L = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				V = {
					t5_vsb5g: {
						points: "5000000000000000000000"
					},
					t5_37jgj: {
						points: "5000000000000000000000"
					}
				},
				M = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				A = (e, t) => {
					if (!t) return {};
					if (V[t]) return V[t];
					const s = L.prices;
					M(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const n = h(e, t);
					return n && n.price && n.currency && (s[n.currency] = n.price), s
				},
				D = (e, t) => {
					const s = e.subreddits.gov.meta[t || ""],
						n = s && s.extra && s.extra.nomenclature || L;
					return {
						prices: A(e, t),
						member: n.member || L.member,
						memberPlural: n.memberPlural || L.memberPlural,
						memberAlt: n.memberAlt || L.memberAlt,
						memberAltPlural: n.memberAltPlural || L.memberAltPlural,
						membership: n.membership || L.membership,
						membershipAlt: n.membershipAlt || L.membershipAlt
					}
				},
				W = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.users) {
							const t = e.amounts.usdr.users,
								{
									anonymous: s
								} = t,
								n = b(t, ["anonymous"]),
								r = Object.keys(n),
								i = r.map(e => Object.assign({
									id: e
								}, n[e])).sort((e, t) => parseInt(t.amount) - parseInt(e.amount)),
								o = s ? parseInt(s.amount) : 0,
								a = s ? s.numUsers : 0,
								c = i.slice(5),
								l = i.slice(0, 5);
							return {
								allTippers: new Set(r),
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
				R = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.tipsProportions) return e.amounts.usdr.tipsProportions
					}
				},
				z = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				B = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				H = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				q = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				Z = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				U = (e, t, s) => {
					const n = r.d.spGiphy(e),
						i = Z(e, t),
						a = "replyToPost" !== s && Object(p.n)(e, {
							commentId: s
						}),
						c = !!a && Object(o.a)(a);
					return n && (i || c)
				},
				Q = (e, t, s) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[s]
					}
				},
				G = (e, t) => {
					if (!t || !t.subredditId) return null;
					const s = (e.economics.me.data.claimPoints || {})[t.subredditId];
					return s && s.length ? s.reduce((e, t) => e.plus(t.pointsToClaim), new n.BigNumber(0)).toString() : null
				},
				Y = (e, t) => {
					if (!t || !t.subredditId) return null;
					const s = (e.economics.me.data.claimPoints || {})[t.subredditId];
					return s && s.length ? s.reduce((e, t) => e.plus(t.userKarma), new n.BigNumber(0)).toString() : null
				}
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./src/lib/fastdom/index.ts"),
				i = s("./src/reddit/actions/jsApi.ts");
			const o = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var l = s("./src/reddit/constants/jsapiEvents.ts");
			const d = 100;
			const u = new class {
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
						e.detail && (t = e.detail.name, console.warn(o, "".concat(n.a.redditUrl).concat(c), e))
					} catch (s) {
						return void console.error(o, "".concat(n.a.redditUrl).concat(c), s)
					}
					this.store.then(e => {
						e.dispatch(i.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, s) {
					const n = {
						name: e,
						props: t,
						element: s
					};
					this.queue.push(n), this.queue.length > d && this.queue.shift(), this.active && this.fireEvent(n)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					r.a.read(() => {
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
//# sourceMappingURL=Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3.2ced5cc26821474d51de.js.map