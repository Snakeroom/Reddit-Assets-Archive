// https://www.redditstatic.com/desktop2x/Reddit~reddit-components-MediumPost.240269b01cf940a0ee03.js
// Retrieved at 10/15/2020, 12:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~reddit-components-MediumPost"], {
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
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
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
					o = r || Object(n.E)(e)
				} else o = Object(n.E)(e);
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
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/brcast/dist/brcast.es.js");
			const r = () => "undefined" != typeof document,
				i = () => r() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: i()
				}),
				{
					subscribe: a,
					unsubscribe: c,
					setState: l
				} = Object(n.a)(o()),
				d = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => l(o());
			(() => {
				const e = (() => {
					if (!r()) return;
					const e = Object.keys(d).find(e => e in document);
					return e ? d[e] : void 0
				})();
				e && document.addEventListener(e, u)
			})(), t.a = {
				isDocumentHidden: () => !i(),
				isDocumentVisible: i,
				subscribe: a,
				unsubscribe: c
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const i = [r.ac, r.fb, r.x, r.J, r.eb, r.Fb],
				o = {
					[r.Fb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.eb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.J]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.x]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.fb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.ac]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Fb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.eb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.J]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.x]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.fb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "lYj4d"
					}),
					[r.ac]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "2OaZ5T"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const s = Date.now(),
					c = new Date(e).getTime(),
					l = {
						[r.ac]: "",
						[r.fb]: "",
						[r.x]: "",
						[r.J]: "",
						[r.eb]: "",
						[r.Fb]: ""
					};
				let d = c - s;
				if (d <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of i) {
					const e = Math.floor(d / n);
					e && (l[n] = (t ? a : o)[n](e).toString()), d -= e * n
				}
				const u = i.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t ? u : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", u)], {
					hk: "7VjAI"
				}).toString()
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
			})), s.d(t, "j", (function() {
				return b
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(n.a)(r.a),
				o = Object(n.a)(r.b),
				a = Object(n.a)(r.c),
				c = Object(n.a)(r.d),
				l = Object(n.a)(r.e),
				d = Object(n.a)(r.f),
				u = Object(n.a)(r.g),
				m = Object(n.a)(r.h),
				p = Object(n.a)(r.i),
				b = Object(n.a)(r.j)
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/ads/store.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				m = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/constants/adEvents.ts"),
				b = s("./src/reddit/selectors/media.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const f = [{
					event: p.a.ViewableImpression,
					threshold: l.k,
					viewabilityMinimum: l.l
				}, {
					event: p.a.Impression,
					threshold: l.b,
					viewabilityMinimum: l.c
				}, {
					event: p.a.VendorFullyInView,
					threshold: l.a,
					viewabilityMinimum: l.e
				}, {
					event: p.a.GroupMViewable,
					threshold: l.a,
					viewabilityMinimum: l.l
				}, {
					event: p.a.VendorFullyInViewSeconds5,
					threshold: l.k,
					viewabilityMinimum: l.g,
					remainingTime: l.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: p.a.VendorFullyInViewSeconds15,
					threshold: l.k,
					viewabilityMinimum: l.f,
					remainingTime: l.f,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				x = [{
					event: p.a.VideoViewableImpression,
					threshold: l.k,
					viewabilityMinimum: l.j,
					remainingTime: l.j,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoFullyViewableImpression,
					threshold: l.a,
					viewabilityMinimum: l.h,
					remainingTime: l.h,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: l.j,
					remainingTime: l.j,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: p.a.VideoVendorFullyViewable50,
					threshold: l.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = e => e.map(e => {
					let {
						event: t,
						cumulative: s = !1,
						cumulativeElapsedTime: n,
						remainingTime: r,
						threshold: i = null,
						viewabilityMinimum: o,
						checkAudible: a = !1,
						timeViewingInterrupted: c
					} = e;
					return {
						event: t,
						cumulative: s,
						checkAudible: a,
						timer: null,
						fired: !1,
						threshold: i,
						remainingTime: r,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: o,
						timeViewingInitialized: 0,
						timeViewingInterrupted: c
					}
				}),
				v = () => g(f),
				j = () => g(x),
				y = [l.b, l.d, l.k, l.i, l.a],
				O = [l.b, l.k, l.i, l.a],
				C = [l.b, l.d, l.k, l.a],
				w = e => "boolean" == typeof e.cumulative && e.cumulative,
				k = Object(a.c)({
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.c)(e, {
							postId: s.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: s
						} = t;
						const n = Object(h.i)(e, {
							postId: s.id
						});
						if (n) return n.length
					},
					isAudible: e => !Object(b.c)(e) && !!Object(b.d)(e),
					isPlaying: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.e)(e, {
							postId: s.id
						})
					}
				}),
				_ = Object(m.a)(k);
			class S extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = v(), this.videoStats = j(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, l.q), this.props.trackVideo && this.handleThresholds(e, l.o, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						r()(this.state.event, e) || this.setState({
							event: e
						}), this.props.trackDisplay && this.viewabilityStats.forEach(t => {
							this.checkViewability(e, t)
						}), this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = u.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (d.d(e.id, l.q, !1), this.viewabilityStats.forEach(e => {
						w(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (d.d(e.id, l.o, !0), this.videoStats.forEach(e => {
						w(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, l.o, !0), this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					})) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e), e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const s = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - s, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let s, n = !1,
						r = !1;
					return "object" == typeof t ? (s = t.threshold, n = !!t.playing, r = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!n || this.props.isPlaying) && (!r || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: n
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!r()(i, this.inViewStats) && i.length > 0 && d.b(n.id, i, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!r()(o, this.outOfViewStats) && o.length > 0 && d.d(n.id, o, s), this.outOfViewStats = o, this.inViewStats = i
				}
				isAdequatelyInView(e, t) {
					return !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, l.f) : e.viewabilityMinimum = l.f, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: n
					} = e.boundingClientRect;
					return !t.threshold && t.event === p.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = n * s < 3e5 ? l.a : l.i, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === p.a.GroupMViewable && n * s > 242500 && (t.threshold = l.k), t
				}
				checkViewability(e, t) {
					if (w(t) && t.event === p.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						w(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
					}
				}
				clearTimer(e) {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					const {
						trackDisplay: e,
						trackVideo: t
					} = this.props;
					let s = y;
					return e && !t ? s = C : !e && t && (s = O), o.a.createElement(c.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = _(S)
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
			const x = (e, t) => s => Object.assign(Object.assign({
				source: "post",
				action: "click",
				noun: "meta_flair"
			}, f.defaults(s)), {
				correlationId: Object(h.c)(h.a.SearchResults),
				post: f.post(s, e),
				search: f.postFlairClickToSearch(s, t),
				subreddit: f.subreddit(s)
			});
			var g = s("./src/reddit/components/CategoryTag/index.m.less"),
				v = s.n(g);
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(x(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						s = e.categoryId,
						n = e.categoryName,
						i = r.a.createElement("span", null, n);
					return r.a.createElement("span", {
						className: Object(l.a)(v.a.metaFlair, {
							[v.a["m-lightboxHeader"]]: t
						})
					}, r.a.createElement(m.a, {
						onClick: this.onClick,
						to: b(n, s, d.Lb.Relevance, d.Sb.DAY),
						children: i
					}))
				}
			}
			var y = s("./src/reddit/components/CategoryTagList/index.m.less"),
				O = s.n(y);
			const C = Object(i.b)(() => Object(o.c)({
				labelNSFW: c.Q
			}));
			t.a = C(Object(a.c)(e => {
				let {
					postCategories: t,
					postId: s,
					inLightboxHeader: n,
					sendEvent: i
				} = e;
				return r.a.createElement("span", {
					className: n ? null : O.a.categoryTagWrapper
				}, t.map(e => r.a.createElement(j, {
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
					scoreClassName: Object(i.a)(l.a.customScoreStyles, s.scoreClassName),
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
			s.d(t, "c", (function() {
				return H
			})), s.d(t, "a", (function() {
				return z
			})), s.d(t, "b", (function() {
				return Q
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				i = s.n(r),
				o = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				l = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/Emoji/index.m.less"),
				h = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const g = p.a.wrapped(e => {
				var {
					backgroundImage: t,
					style: s
				} = e, n = x(e, ["backgroundImage", "style"]);
				return c.a.createElement("div", f({
					style: Object.assign(Object.assign({}, s || {}), {
						backgroundImage: "url('".concat(t, "')")
					})
				}, n))
			}, "EmojiDisplay", h.a);
			var v = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				j = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = s("./src/reddit/constants/colors.ts"),
				O = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				k = s("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = s("./src/reddit/components/Flair/index.m.less"),
				I = s.n(E);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var N = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const P = Object(j.a)(v.b),
				F = p.a.div("FlairWrapper", I.a),
				L = p.a.wrapped(l.a, "CloseButton", I.a),
				V = p.a.wrapped(Object(m.a)(e => {
					var {
						forceSmallEmojis: t,
						theme: s
					} = e, n = N(e, ["forceSmallEmojis", "theme"]);
					const r = s;
					return c.a.createElement(g, T({
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
					return Object(d.a)(s, {
						[O.p]: n,
						[O.s]: t ? "1" : ""
					})
				},
				D = e => e.isFlairFilter ? c.a.createElement(C.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(C.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: A(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class R extends c.a.Component {
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
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[I.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(S.a)(this.props).flair,
							color: "".concat(H(this.props))
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(L, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(k.a, {
						className: I.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(S.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(P, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(D, {
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
			const W = Object(m.a)(R),
				B = Object(m.a)(e => {
					let t = "",
						s = !1;
					const n = e.richtext.map((n, r) => {
						if (n.e === _.c.Emoji) {
							const i = n;
							return t += i.a, s = !0, c.a.createElement(V, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: i.u,
								key: r,
								title: i.a
							})
						} {
							const e = n;
							return t += e.t, c.a.createElement("span", {
								key: r
							}, e.t)
						}
					});
					let r;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (r = {
						marginTop: "-".concat(e.theme.subredditContext.emojiHeight - 16, "px")
					});
					const i = c.a.createElement(F, {
						className: Object(u.a)(e.className, {
							[I.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: Object.assign(Object.assign({}, r), {
							backgroundColor: e.backgroundColor || Object(S.a)(e).flair,
							color: "".concat(H(e))
						})
					}, n, e.isSelected && c.a.createElement(L, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(k.a, {
						className: I.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(S.a)(e).flair
						}
					})));
					return c.a.createElement(D, {
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
				H = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(S.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(w.a)(Object(S.a)(e).post, y.a.black, y.a.white) : e.textColor === _.e.Dark ? y.a.black : y.a.white,
				z = p.a.wrapped(W, "TextFlair", I.a),
				q = p.a.wrapped(B, "RichTextFlair", I.a),
				Z = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(o.j)(.1, Object(S.a)(i()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				G = p.a.wrapped(e => {
					const t = Z(e),
						s = c.a.createElement("span", {
							className: e.className,
							style: {
								border: "1px solid ".concat(t),
								color: t
							}
						}, e.text);
					return c.a.createElement(D, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", I.a);

			function Q(e) {
				const {
					className: t,
					disabled: s = !1,
					flair: r,
					isFlairFilter: i,
					isSelected: o,
					onClick: a,
					onCloseClick: l,
					onMouseDown: d,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: h
				} = e, f = Object(u.a)({
					[I.a.flairVariant]: i,
					[I.a.small]: i && !e.large,
					[I.a.large]: i && e.large
				}, t);
				switch (r.type) {
					case _.f.Richtext:
						return s || !r.richtext ? null : c.a.createElement(q, {
							backgroundColor: r.backgroundColor,
							className: f,
							forceSmallEmojis: b,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: l,
							onMouseDown: d,
							redditStyle: !p,
							richtext: r.richtext,
							subredditName: m,
							textColor: r.textColor,
							to: h
						});
					case _.f.Text:
						return s || !r.text ? null : c.a.createElement(z, {
							backgroundColor: r.backgroundColor,
							className: f,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !p,
							to: h
						});
					case _.f.Meta:
						return c.a.createElement(z, {
							backgroundColor: r.backgroundColor,
							className: t,
							isFlairFilter: i,
							subredditName: m,
							text: r.text,
							textColor: r.textColor,
							redditStyle: !p,
							to: h
						});
					case _.f.Nsfw:
					case _.f.Spoiler:
						return c.a.createElement(G, {
							className: t,
							text: r.text,
							type: r.type
						});
					case _.f.Quarantined:
						return null;
					case _.f.Oc:
						return c.a.createElement(z, {
							backgroundColor: y.a.alienblue,
							text: r.text,
							textColor: _.e.Light,
							tooltip: n.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return r.text ? c.a.createElement(z, {
							backgroundColor: r.backgroundColor,
							className: f,
							isFlairFilter: i,
							onClick: a,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: r.text,
							redditStyle: !p,
							to: h
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
					labelNSFW: m.Q
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
			t.a = e => o.a.createElement(a.h, {
				className: d.a.modalHeader
			}, o.a.createElement(a.p, null, e.title), o.a.createElement(c.a, {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Flair/index.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				l = s.n(c);
			const d = o.a.span("Placeholder", l.a),
				u = o.a.div("SelectedFlair", l.a),
				m = o.a.wrapped(a.b, "FlairComponent", l.a);
			t.a = e => e.flair ? i.a.createElement(u, null, i.a.createElement(d, null, n.fbt._("{placeholder}", [n.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), i.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : i.a.createElement(u, null, n.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				d = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				b = s("./src/reddit/components/Flair/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				f = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				x = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				g = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				j = s.n(v);
			class y extends i.a.Component {
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
					} = this.state, o = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), a = !!s && o.some(e => e.id === s);
					return i.a.createElement("div", {
						className: j.a.container
					}, i.a.createElement("div", {
						className: j.a.searchBoxWrapper
					}, i.a.createElement("input", {
						className: j.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), i.a.createElement(g.a, {
						className: j.a.searchIcon
					})), i.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, o.map((e, t) => {
						const n = Object(u.c)(e),
							r = s === e.id || !a && 0 === t;
						return i.a.createElement(f.a, {
							className: j.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, i.a.createElement(b.b, {
							className: j.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && i.a.createElement(x.a, {
							className: j.a.pencil
						}))
					})))
				}
			}
			var O = s("./src/reddit/components/FlairSearch/index.m.less"),
				C = s.n(O);
			const w = "FlairSearch-EmojiPicker-DropdownId",
				k = Object(l.a)(e => e && Object(u.c)(e)),
				_ = Object(a.c)({
					areFlairRestrictionsEnabled: d.d.flairRestrictions,
					isModerator: m.d
				}),
				S = Object(o.b)(_);
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, s = t && e.templateId ? t[e.templateId] : void 0;
						let n = e;
						s && (n = Object(u.d)({
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
								n = Object(u.c)(s);
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
						templateIds: r,
						subredditId: o
					} = e, a = s && e.flair && e.flair.templateId && s[e.flair.templateId] || void 0, l = Object(p.a)(), d = e.flair || k(a);
					return i.a.createElement("div", {
						className: Object(c.a)(e.className, C.a.container)
					}, s && r && i.a.createElement(y, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: a ? a.id : "",
						templateIds: r,
						templates: s
					}), d && a && (t || a.textEditable) ? i.a.createElement("div", {
						className: C.a.flairEditSection
					}, i.a.createElement("div", {
						className: C.a.editLabel
					}, n.fbt._("Edit flair", null, {
						hk: "1APWWu"
					})), e.areFlairRestrictionsEnabled && i.a.createElement("div", {
						className: C.a.restrictionHintText
					}, Object(u.k)(a)), i.a.createElement(l, {
						autofocus: !0,
						emojiPickerId: w,
						flair: d,
						flairTemplate: a,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: a.modOnly,
						onChange: this.onFlairEdit,
						subredditId: o
					})) : null)
				}
			}
			t.a = S(E)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/CategoryTagList/index.tsx"),
				d = s("./src/reddit/components/FlairList/index.tsx"),
				u = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/flair.ts"),
				h = s("./src/reddit/helpers/trackers/postFlair.ts"),
				f = s("./src/reddit/models/Flair/index.ts"),
				x = s("./src/reddit/selectors/postFlair.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/components/FlairWrapper/index.m.less"),
				y = s.n(j);
			const O = Object(o.b)(() => Object(a.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(m.p)(e, {
							pageLayer: s
						})
					},
					isMeta: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.r)(e, {
							postId: s.id
						})
					},
					isPostFlairEnabled: (e, t) => Object(x.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.E)(e, s)
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(v.S)(e, {
							subredditId: s.belongsTo.id
						}).name
					}
				})),
				C = (e, t) => {
					const s = [];
					return t.isOriginalContent && s.push({
						text: n.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: f.f.Oc
					}), e && s.push({
						text: n.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: f.f.Meta
					}), s.push(...t.flair), s
				};
			t.a = O(e => {
				let {
					className: t,
					disableFlair: s,
					flairPosition: n,
					isFlairFilter: r,
					isPostFlairEnabled: o,
					isMeta: a,
					nowrap: m,
					post: x,
					postCategories: g,
					sendEvent: v,
					showCategoryTag: j,
					subredditName: O,
					titleFlair: w
				} = e;
				const k = Object(u.b)(),
					_ = n === f.b.Left,
					S = w || C(a, x),
					E = [];
				let I = [];
				_ ? S.map(e => {
					Object(b.p)(e.type) ? E.push(e) : I.push(e)
				}) : I = S;
				const T = m ? y.a.flairNoWrap : E.length > 0 || I.length > 0 || g && j ? y.a.flairWrapper : null,
					N = e => {
						const t = {
							id: x.belongsTo.id,
							eventType: x.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), v && v(Object(h.a)(x.id, t))
					},
					P = e => {
						Object(p.d)(p.a.SearchResults), v && v(Object(h.e)(e, x.id))
					},
					F = !(s || !S || !S.length),
					L = !!(j && g && g.length);
				return F || L ? i.a.createElement("div", {
					className: Object(c.a)(T, t),
					"data-ignore-click": k
				}, F && E && i.a.createElement(d.a, {
					className: y.a.flairList,
					isFlairFilter: r,
					key: "leftFlair",
					onClick: N,
					onMouseDown: P,
					flair: E,
					disabled: !o,
					subredditName: O
				}), F && i.a.createElement(d.a, {
					className: y.a.flairList,
					isFlairFilter: r,
					key: "rightFlair",
					onClick: N,
					onMouseDown: P,
					flair: I,
					disabled: !o,
					subredditName: O
				}), L && i.a.createElement(l.a, {
					inLightboxHeader: m,
					postId: x.id,
					postCategories: g
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
				getComponent: () => Object(r.a)(() => Promise.all([s.e("AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"), s.e("SubredditHovercard")]).then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react/index.js");
			const n = e => new Promise((t, s) => {
				const n = new Image;
				n.onload = () => t(n), n.onerror = s, n.src = e
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
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
			t.a = r.a.memo((function(e) {
				var {
					visible: t
				} = e, s = l(e, ["visible"]);
				const [o, d] = Object(n.useState)(t);
				return Object(n.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, d(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), d(!1)
					}
				}, [t]), t ? r.a.createElement("div", c({
					className: Object(i.a)(a.a.tooltip, {
						[a.a.visible]: o
					})
				}, s.popperProps), s.children, o && r.a.createElement("div", c({
					className: a.a.arrow
				}, s.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = s.n(d),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				h = m.a.div("BottomText", u.a),
				f = e => r.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return r.a.createElement(h, {
						className: e.className,
						style: Object.assign(Object.assign({}, e.style), {
							"--infoTextTooltip-overflow-left": "".concat(t, "px")
						})
					}, e.text, e.children)
				},
				g = Object(o.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				v = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				j = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				y = Object(i.b)(g);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? r.a.createElement(v, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : r.a.createElement(j, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				const s = Object(i.a)(e, t);
				class n extends r.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return r.a.createElement(s, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/timeAgo/index.ts"),
				i = s("./src/lib/timeUntil/index.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(r.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(i.a)(new Date(e.poll.endsAt)))
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
			s.d(t, "b", (function() {
				return H
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				x = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				g = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/path/index.ts"),
				j = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = s("./src/lib/getShortenedLink.ts"),
				_ = s("./src/reddit/components/FlairWrapper/index.tsx"),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				T = s("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				N = s.n(T);
			const P = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F = Object(o.b)(P)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return i.a.createElement("div", {
						className: Object(d.a)(e.className, N.a.proposalMetaData)
					}, i.a.createElement("span", null, S.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [S.fbt._param("count", Object(E.a)(n)), S.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(I.a, {
						className: N.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				L = s("./src/reddit/components/SEOTitle/index.tsx"),
				V = s("./src/reddit/selectors/posts.ts"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/PostTitle/index.m.less"),
				R = s.n(D),
				W = s("./src/config.ts");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var H, z = function(e, t) {
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
			}(H || (H = {}));
			const q = m.a.wrapped(Object(u.a)(e => {
					var {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: r,
						children: o,
						className: a,
						redditStyle: c,
						theme: l
					} = e, u = z(e, ["size", "titleColor", "titleType", "nowrap", "children", "className", "redditStyle", "theme"]);
					let m = "";
					switch (t) {
						case H.ExtraLarge:
							m = R.a.ExtraLarge;
							break;
						case H.Large:
							m = R.a.Large;
							break;
						case H.Medium:
							m = R.a.Medium;
							break;
						case H.Small:
							m = R.a.Small;
							break;
						case H.ExtraSmall:
							m = R.a.ExtraSmall
					}
					return i.a.createElement("div", B({
						className: Object(d.a)(a, m, {
							[R.a.isNoWrap]: r
						}),
						style: {
							"--posttitletextcolor": s || Object(w.a)(Object.assign({
								redditStyle: c,
								theme: l
							}, u)).titleText
						}
					}, u), n ? i.a.createElement(L.b, {
						type: n
					}, o) : o)
				}), "Title", R.a),
				Z = e => {
					var {
						className: t,
						disableVisited: s,
						titleColor: n
					} = e, r = z(e, ["className", "disableVisited", "titleColor"]);
					return i.a.createElement(a.a, B({}, r, {
						className: Object(d.a)(t, R.a.styledLink, {
							[R.a.isVisitedEnabled]: !s
						})
					}), r.children)
				},
				G = e => {
					var {
						disableVisited: t,
						nowrap: s
					} = e, n = z(e, ["disableVisited", "nowrap"]);
					return i.a.createElement("div", B({}, n, {
						className: Object(d.a)(R.a.titleContainer, n.className, {
							[R.a.isNoWrap]: s,
							[R.a.isVisitedEnabled]: !t
						})
					}))
				},
				Q = Object(b.t)({
					isCommentPermalink: b.v,
					pageLayer: e => e
				}),
				U = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(b.p)(e, {
							pageLayer: s
						})
					},
					isMeta: (e, t) => {
						let {
							post: s
						} = t;
						return Object(V.r)(e, {
							postId: s.id
						})
					},
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(M.S)(e, {
							subredditId: s.belongsTo.id
						}).name
					},
					shouldOpenPostInNewTab: A.X,
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(V.i)(e, {
							postId: s.id
						})
					}
				}),
				J = Object(o.b)(U),
				K = e => {
					const {
						post: t,
						subredditName: s
					} = e, {
						isSponsored: n
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(G, {
						nowrap: e.nowrap
					}, i.a.createElement(Y, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(h.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, i.a.createElement(Y, e)); {
						const r = t.media && Object(C.H)(t.media) ? Object(j.c)(t.id, s) : t.permalink,
							o = e.isCommentPermalink ? Object(v.b)(r) : Object(x.a)(r);
						return i.a.createElement(G, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(l.s)(e, t.imageGalleryCurrentItem);
							return s ? i.a.createElement(h.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, i.a.createElement(Y, t)) : i.a.createElement(Y, t)
						})(t, e) : i.a.createElement(Z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o
						}, i.a.createElement(Y, e)))
					}
				},
				Y = e => {
					const {
						leftFlair: t,
						post: s
					} = e, n = e.format ? e.format(s) : s.title, r = e.isCommentsPage ? L.a.PostComments : L.a.PostItem;
					return i.a.createElement(q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && i.a.createElement(_.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), n)
				},
				X = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, r = !t && !e.isCrosspost && e.size !== H.Large && !s.isSponsored && !(s.media && Object(C.H)(s.media)) && (s.source || s.media && (s.media.type === C.o.GIFVIDEO || s.media.type === C.o.IMAGE || s.media.type === C.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (r) return i.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(C.E)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source
						}, Object(k.a)(s), !s.isSponsored && i.a.createElement(y.a, {
							className: R.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== H.Large && e.size !== H.ExtraLarge) return i.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source
					}, Object(k.a)(s), !s.isSponsored && i.a.createElement(y.a, {
						className: R.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n        .".concat(this.props.post.id, " .").concat(R.a.Component, " {\n          --postTitle-VisitedLinkColor: ").concat(Object(n.c)(.45, Object(w.a)(this.props).titleText, "#FFFFFF"), ";\n          --postTitleLink-VisitedLinkColor: ").concat(Object(n.c)(.45, this.props.titleColor || Object(w.a)(this.props).titleText, Object(w.a)(this.props).body), ";\n        }\n      ")
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
						showNSFWSpoilerFlairsOnly: l
					} = this.props, u = s === O.b.Left, m = Object(_.b)(r, c), p = l ? m.filter(e => e.type === O.f.Nsfw || e.type === O.f.Spoiler) : u ? m.filter(e => Object(g.p)(e.type)) : [], b = l ? [] : u ? m.filter(e => !Object(g.p)(e.type)) : m, h = !o && !n, f = !t && p && p.length > 0 && h, x = !t && b && b.length > 0 && h;
					return i.a.createElement("div", {
						className: Object(d.a)(e, c.id)
					}, !l && f && i.a.createElement(_.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement(K, B({}, this.props, {
						leftFlair: l ? p : void 0
					})), a && i.a.createElement(F, {
						className: R.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(X, this.props), x && i.a.createElement(_.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement("div", {
						className: R.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: '\n              <img alt="" src="'.concat(W.a.assetPath, '/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            ')
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = m.a.wrapped(Q(J(Object(u.a)(Object(p.c)($)))), "Component", R.a)
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js");
			const r = Object(n.createContext)(!1);

			function i() {
				return Object(n.useContext)(r)
			}
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
			s.d(t, "b", (function() {
				return Z
			}));
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
				v = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				j = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				y = s("./src/reddit/constants/elementClassNames.ts"),
				O = s("./src/reddit/controls/ContentType/index.m.less"),
				C = s.n(O);
			const w = e => Object(o.a)(C.a.contentTypeIcon, e.className),
				k = e => i.a.createElement(m.a, {
					className: Object(o.a)(y.a, w(e))
				});

			function _(e) {
				const t = w(e);
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
						return i.a.createElement(j.a, {
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
					case "gallery":
						return i.a.createElement(v.a, {
							className: t
						});
					default:
						return i.a.createElement(k, e)
				}
			}
			var S = s("./src/reddit/controls/OutboundLink/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/models/Theme/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/reddit/components/Thumbnail/index.m.less"),
				F = s.n(P);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = e => e.placeholderImage || Object(N.a)(e).placeholderImage,
				M = e => e.placeholderImage ? "cover" : Object(N.a)(e).placeholderImagePosition,
				A = c.a.span("LinkText", F.a),
				D = e => {
					let {
						className: t,
						onClick: s,
						children: n
					} = e;
					return i.a.createElement("div", {
						onClick: s,
						className: Object(o.a)(F.a.linkIcon, t)
					}, n)
				},
				R = e => i.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(F.a.hiddenImage, e.className)
				}),
				W = e => {
					const t = i.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(d.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = "url(".concat(n, ")"))
					}), i.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(F.a.thumbnail, F.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: "url(".concat(e.src, ")"),
							borderColor: e.isOutbound ? Object(N.a)(e).button : Object(N.a)(e).line
						}
					}, e.isOutbound && i.a.createElement(D, {
						className: e.linkIconClassName
					}, i.a.createElement(E.a, {
						className: Object(o.a)(F.a.outboundLinkIcon, e.outboundLinkIconClassName)
					}), e.text && i.a.createElement(A, {
						className: e.linkTextClassName
					}, e.text)), i.a.createElement(R, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				B = e => e.isOutbound ? Object(N.a)(e).button : e.placeholderImage ? "transparent" : Object(N.a)(e).line,
				H = e => {
					const t = V(e),
						s = t && {
							background: Object(T.g)(Object(N.a)(e).placeholder, t, M(e))
						};
					return i.a.createElement("div", {
						className: Object(o.a)(F.a.thumbnail, F.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: Object.assign(Object.assign({}, s), {
							borderColor: B(e)
						})
					}, (!e.placeholderImage || e.showContentType) && i.a.createElement(_, {
						className: Object(o.a)(e.contentTypeClassName, F.a.contentType, {
							[F.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && i.a.createElement(D, {
						className: e.linkIconClassName
					}, i.a.createElement(E.a, {
						className: Object(o.a)(F.a.outboundLinkIcon, e.outboundLinkIconClassName)
					}), e.text && i.a.createElement(A, {
						className: e.linkTextClassName
					}, e.text)))
				},
				z = e => i.a.createElement(W, L({}, e, {
					className: Object(o.a)(F.a.blurredThumbnail, e.className)
				})),
				q = Object(a.a)(e => {
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
						usePreview: j
					} = e, y = !v.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!a || !a.isNSFW)) && !c, O = V({
						placeholderImage: x,
						redditStyle: b,
						theme: v
					}), C = Z(e), w = Q(p, t, O, y, g, v, C, l, f, h, b, d, u, m, r), k = Object(I.E)(p);
					return Object(n.a)(k) && !h && k.indexOf("redditmedia") < 0 ? i.a.createElement("div", {
						className: Object(o.a)(F.a.container, j ? F.a.usePreview : "", s)
					}, i.a.createElement(S.b, {
						href: Object(I.E)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source
					}, w)) : i.a.createElement("div", {
						className: Object(o.a)(F.a.container, j ? F.a.usePreview : "", s)
					}, w)
				}),
				Z = e => {
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
					return r && i ? i.url : G(o) ? o.scrubberThumbSource : a.url
				},
				G = e => !!e && e.type === I.o.LIVEVIDEO,
				Q = (e, t, s, r, a, c, d, u, m, p, b, h, f, x, g) => {
					const v = e.source && !e.isSponsored || !1;
					if (Object(n.a)(d)) {
						const s = G(e.media),
							n = s ? {
								errorSrc: l.U
							} : {},
							u = Object(o.a)(t, {
								[F.a.verticallyCenterThumbnail]: s
							});
						return r ? i.a.createElement(z, L({
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
						})) : i.a.createElement(W, L({
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
					return i.a.createElement(H, {
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
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = q
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
					isNightmode: h.T
				}),
				v = Object(o.b)(g),
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				y = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class O extends i.a.Component {
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
						p = j(e),
						h = y(e),
						f = l.voteState;
					return i.a.createElement("div", {
						className: Object(c.a)(x.a.votesContainer, e.className),
						id: "vote-arrows-".concat(l.id),
						ref: a
					}, p ? i.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
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
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": f === b.a.upvoted,
						className: Object(c.a)(d.o, o),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, i.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: f
					})), !e.compact && r && i.a.createElement(u.a, {
						className: e.scoreClassName,
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: f,
						isScoreHidden: e.model.isScoreHidden
					}), h ? i.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
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
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": f === b.a.downvoted,
						className: Object(c.a)(d.o, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, i.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: f
					})))
				}
			}
			const C = Object(l.a)(v(O));
			t.a = C
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(n.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return Object.assign(Object.assign({}, e), {
					onPostViewable: r.H
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
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				o = s("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = s.n(o);
			t.a = n.a.wrapped(i.b, "styledOutboundLink", {
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
				UNSAFE_componentWillReceiveProps(e) {
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
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/thumbnails.ts"),
				r = s("./src/reddit/models/Media/index.ts");

			function i(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === n.a.SELF || e.thumbnail.url === n.a.NSFW || e.media && Object(r.F)(e.media))
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				i = "|downsized";

			function o(e, t) {
				return r + e + (t ? i : "")
			}

			function a(e) {
				return e && 0 === e.indexOf(r)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(a)
			}

			function l(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), "https://giphy.com/gifs/".concat(t)
			}

			function d(e) {
				return "object" == typeof e && null !== e && !!e.e
			}

			function u(e) {
				const t = e => {
					let s = [];
					const r = e.c && Array.isArray(e.c) ? e.c : [];
					for (const n of r) d(n) && (s = [...s, ...t(n)]);
					return n.F(e) && s.push(e.id), s
				};
				return e.reduce((e, s) => [...e, ...t(s)], [])
			}
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "j", (function() {
				return w
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/models/Gold/ProductOffer.ts"),
				i = s("./src/reddit/selectors/gold/giveAwards.ts"),
				o = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/telemetry.ts"),
				d = s("./src/telemetry/models/GoldPurchase.ts"),
				u = s("./src/telemetry/models/Payment.ts"),
				m = s("./src/reddit/helpers/trackers/gild.ts"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/isComment.ts");
			const h = (e, t) => {
					const {
						thingId: s,
						packageId: c
					} = t, u = !!s, h = i.b(e), f = h ? Object(m.getAwardTypeFromAward)(h) : null, x = u ? f : a.m(e) ? d.Premium : d.Coins, g = s ? Object(b.a)(s) ? "comment" : "post" : void 0, v = c || a.q(e), j = [...Object(o.b)(e), ...Object(o.d)(e)].filter(e => e.mobileId === v)[0], y = Object(r.b)(j, u), O = j ? Math.round(1e4 * (j.baselinePennies - j.pennies) / j.baselinePennies) / 100 : 0, C = j ? Math.round(1e4 * (j.coins - j.baselineCoins) / j.coins) / 100 : 0, w = j ? j.baselinePennies !== j.pennies ? "".concat(O, "_percent_price") : j.baselineCoins !== j.coins ? "".concat(C, "_percent_bonus") : void 0 : void 0, k = x === d.Premium ? n.ob : j ? j.pennies : void 0;
					return Object.assign(Object.assign({}, l.defaults(e)), {
						comment: s ? l.comment(e, s) : null,
						correlationId: a.o(e) || Object(p.d)(p.a.GoldPayment, !1),
						post: s ? l.post(e, s) : null,
						screen: l.screen(e),
						subreddit: s ? l.subreddit(e) : null,
						goldPurchase: Object.assign(Object.assign({}, h ? {
							awardId: h.id,
							awardName: h.name,
							numberCoinsToRecipient: h.coinReward
						} : null), {
							type: x,
							gildedContent: u,
							contentType: g,
							numberCoins: j ? j.coins : void 0,
							offerContext: y,
							offerType: w
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: k
						},
						purchase: {
							priceMicros: k
						}
					})
				},
				f = (e, t) => s => Object.assign(Object.assign({}, h(s, {
					packageId: t,
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				x = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				v = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				j = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				y = e => t => Object.assign(Object.assign({}, h(t, {
					packageId: e
				})), {
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				O = e => t => Object.assign(Object.assign({}, h(t, {
					thingId: e
				})), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				C = (e, t) => s => {
					const n = h(s, {
						packageId: t,
						thingId: e
					});
					return Object.assign(Object.assign({}, n), {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign(Object.assign({}, n.payment), {
							defaultOption: u.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign(Object.assign({}, n.goldPurchase), {
							source: e ? d.GiveGold : a.m(s) ? d.PremiumMarketing : d.CoinsMarketing
						})
					})
				},
				w = e => t => {
					const s = h(t, {
						thingId: e
					});
					return Object.assign(Object.assign({}, s), {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign(Object.assign({}, s.payment), {
							method: Object(c.b)(t).queryParams.thanks ? u.PaymentMethod.Paypal : u.PaymentMethod.CreditCard
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/telemetry/index.ts"),
				i = s("./src/reddit/selectors/platform.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: o.profile(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e)
				}),
				c = (e, t, s) => n => Object.assign(Object.assign({
					source: Object(i.i)(n) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t
				}, a(n)), {
					post: o.post(n, e)
				}),
				l = (e, t) => s => {
					const n = o.currentPost(s);
					return n ? c(n.id, e, t)(s) : Object.assign({
						source: Object(i.i)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e
					}, a(s))
				},
				d = (e, t) => s => Object(r.a)(Object.assign(Object.assign({}, c(e, t)(s)), o.defaults(s))),
				u = e => t => Object.assign(Object.assign({
					source: "id_card",
					action: n.c.CLICK,
					noun: e
				}, a(t)), {
					post: o.currentPost(t),
					userSubreddit: o.userSubreddit(t)
				})
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
			const o = (e, t) => s => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: "post_flair"
				}, r.defaults(s)), {
					actionInfo: r.actionInfo(s),
					correlationId: Object(n.c)(n.a.SearchResults),
					post: r.post(s, e),
					search: Object.assign(Object.assign({}, r.postFlairClickToSearch(s, t)), {
						query: "flair_name:'".concat(t.postFlairName, "'"),
						queryId: Object(n.c)(n.a.SearchResults)
					}),
					subreddit: r.subreddit(s)
				}),
				a = e => t => Object.assign(Object.assign({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search"
				}, r.defaults(t)), {
					actionInfo: r.actionInfo(t),
					correlationId: Object(n.c)(n.a.SearchResults),
					search: r.postFlairClickToSearch(t, e),
					subreddit: r.subreddit(t)
				}),
				c = e => t => {
					const s = Object(i.g)(e);
					return Object.assign(Object.assign({}, r.defaults(t)), {
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
				l = () => e => Object.assign(Object.assign({}, r.defaults(e)), {
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: r.subreddit(e)
				}),
				d = e => t => {
					const s = Object(i.g)(e);
					return Object.assign(Object.assign({}, r.defaults(t)), {
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
				u = (e, t) => s => {
					const o = Object(i.g)(e),
						a = r.post(s, t);
					return Object.assign(Object.assign({}, r.defaults(s)), {
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: r.subreddit(s),
						postFlair: {
							id: e.templateId,
							title: o
						},
						post: a,
						search: {
							query: "flair_name:'".concat(o, "'"),
							subredditId: a ? a.subredditId : void 0,
							subredditName: a ? a.subredditName : void 0,
							postFlairName: o,
							originElement: "post_flair",
							queryId: Object(n.c)(n.a.SearchResults),
							originPageType: s.platform.currentPage ? r.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0
						}
					})
				}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				r = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const o = Object(n.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : o;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", o.modifiers)), t
			}
			const c = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function l(e) {
				return function(e) {
					const [t, s] = Object(r.useState)(null), [o, c] = Object(r.useState)(null), [l, d] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), h = Object(r.useMemo)(() => {
						const t = a(e);
						return l ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
							name: "arrow",
							options: {
								element: l
							}
						})) : t
					}, [l, e]), {
						attributes: f,
						styles: x
					} = Object(i.a)(t, o, h);
					return Object(r.useMemo)(() => ({
						arrowProps: Object.assign({
							ref: d,
							style: x.arrow
						}, f.arrow),
						hide: b,
						popperProps: Object.assign({
							ref: c,
							style: x.popper
						}, f.popper),
						show: p,
						target: {
							element: t,
							ref: s
						},
						visible: u
					}), [d, f, c, b, p, x, t, s, u])
				}(Object(r.useMemo)(() => {
					const t = a(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, c))
				}, [e]))
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
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
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
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
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
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
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "p", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "x", (function() {
				return g
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "r", (function() {
				return j
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "z", (function() {
				return O
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "q", (function() {
				return E
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "s", (function() {
				return F
			})), s.d(t, "y", (function() {
				return L
			})), s.d(t, "u", (function() {
				return V
			})), s.d(t, "v", (function() {
				return M
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "w", (function() {
				return D
			})), s.d(t, "t", (function() {
				return R
			})), s.d(t, "g", (function() {
				return W
			})), s.d(t, "l", (function() {
				return B
			})), s.d(t, "j", (function() {
				return H
			})), s.d(t, "n", (function() {
				return z
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/helpers/richTextJson/index.ts"),
				o = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Gold/Powerups/index.ts"),
				l = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				u = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/gold/powerups.ts");
			const h = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
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
							[a.a.Loyalty]: n.find(e => e.placement === o.a.First),
							[a.a.Achievement]: n.find(e => e.placement === o.a.Second),
							[a.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				},
				j = (e, t, s) => {
					if (!n.d.spBadges(e)) return [];
					const i = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(r.a)(i.map(t => e.badges.models[t]).filter(Boolean))
				},
				y = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === m.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function O(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: s,
					subredditId: n
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(o.c)(s) && s.userId === r) return s;
				const i = e.badges.models,
					a = e.user.ownedBadges[n] || {},
					c = Object(o.c)(s) ? s.type : s.id;
				return Object.keys(a).map(e => i[e]).find(e => e && e.type === c)
			}

			function w(e, t, s, n) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					if (s === a.a.Loyalty || s === a.a.Achievement) return r.data.collections[s];
					if (s === a.a.Cosmetic && n) return r.data.collections[s][n]
				}
				return []
			}

			function k(e, t) {
				const s = w(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function _(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					const e = s.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.d)
				}
				return []
			}

			function S(e, t) {
				return w(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(o.d)(e) || !!e.price))
			}
			const E = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === u.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const n = e[s];
						t.push({
							display: "".concat(n.brand, " •••• ").concat(n.last4),
							id: s,
							type: l.a.SavedStripe
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
							type: l.a.SavedPayPal
						})
					}
				}
				return t
			};
			var I;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(I || (I = {}));
			const T = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				N = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				P = (e, t) => {
					if (!t) return {};
					const s = T.prices;
					N(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const n = h(e, t);
					return n && n.price && n.currency && (s[n.currency] = n.price), s
				},
				F = (e, t) => {
					const s = e.subreddits.gov.meta[t || ""],
						n = s && s.extra && s.extra.nomenclature || T;
					return {
						prices: P(e, t),
						member: n.member || T.member,
						memberPlural: n.memberPlural || T.memberPlural,
						memberAlt: n.memberAlt || T.memberAlt,
						memberAltPlural: n.memberAltPlural || T.memberAltPlural,
						membership: n.membership || T.membership,
						membershipAlt: n.membershipAlt || T.membershipAlt
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				V = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				A = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				D = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				R = (e, t, s) => {
					const r = "replyToPost" !== s && Object(p.n)(e, {
						commentId: s
					});
					if (!!r && Object(i.a)(r)) return !0;
					if (t && Object(b.i)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const o = n.d.spGiphy(e),
						a = D(e, t);
					return o && a
				},
				W = (e, t, s) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[s]
					}
				},
				B = (e, t) => {
					if (!t || !t.subredditId) return null;
					const s = (e.economics.me.data.claimPoints || {})[t.subredditId];
					if (!s || !s.length) return null;
					const n = (e.user.wallets[t.subredditId] || {}).latest,
						r = n && n.publicAddress && n.publicAddress.toLowerCase(),
						i = s.filter(e => !e.address || e.address.toLowerCase() === r);
					return i.reduce((e, t) => parseInt(t.round) < parseInt(e.round) ? t : e, i[0]) || null
				},
				H = (e, t) => {
					const s = e.economics.claims[t.subredditId];
					return !!s && s.isClaiming
				},
				z = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const o = e => {
				return Object(i.F)(e) || n.t.Treatment1 === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.n
				})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~reddit-components-MediumPost.240269b01cf940a0ee03.js.map