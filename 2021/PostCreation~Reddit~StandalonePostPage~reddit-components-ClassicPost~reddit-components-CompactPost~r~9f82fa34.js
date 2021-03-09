// https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34.29cf27715e25b571f3a0.js
// Retrieved at 3/9/2021, 3:40:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34"], {
		"./src/higherOrderComponents/makeAsync.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function i(e) {
				var t;
				return (t = class t extends n.a.Component {
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
						return n.a.createElement(t, this.props)
					}
				}).Component = null, t
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/models/Media/index.ts"),
				n = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = r.n(n);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: r,
					domainOverride: n
				} = e;
				let a = "";
				if (r) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					a = n || Object(s.D)(e)
				} else a = Object(s.D)(e);
				const o = i.a.parse(a),
					c = o.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (o.hostname ? o.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/lodash/every.js"),
				n = r.n(s);

			function i(e) {
				let t = null,
					r = null;
				return (...s) => (null !== t && s.length === t.length && n()(s, (e, r) => e === t[r]) || (t = s, r = e(...s)), r)
			}
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/brcast/dist/brcast.es.js");
			const n = () => "undefined" != typeof document,
				i = () => n() && "visible" === document.visibilityState,
				a = () => ({
					documentInFocus: i()
				}),
				{
					subscribe: o,
					unsubscribe: c,
					setState: d
				} = Object(s.a)(a()),
				l = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => d(a());
			(() => {
				const e = (() => {
					if (!n()) return;
					const e = Object.keys(l).find(e => e in document);
					return e ? l[e] : void 0
				})();
				e && document.addEventListener(e, u)
			})(), t.a = {
				isDocumentHidden: () => !i(),
				isDocumentVisible: i,
				subscribe: o,
				unsubscribe: c
			}
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return u
			}));
			const s = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				n = 1e3,
				i = 100 * n,
				a = 10 * i,
				o = 100 * a,
				c = 10 * o,
				d = 100 * c,
				l = 51;

			function u(e, t) {
				return (null == t ? void 0 : t.displayFull) ? s(e.toString()) : e >= d - l ? `${Math.floor(e/c)}b` : e >= c - l && e < d - l ? `${(e/c).toFixed(1)}b` : e >= o - l && e < c - l ? `${Math.floor(e/a)}m` : e >= a - l && e < o - l ? `${(e/a).toFixed(1)}m` : e >= i - l && e < a - l ? `${Math.floor(e/n)}k` : e >= n && e < i - l ? (null == t ? void 0 : t.roundDown) ? `${m(e,n)}k` : `${(e/n).toFixed(1)}k` : String(e)
			}
			const m = (e, t, r = 1) => {
				const s = Math.pow(10, r);
				return (Math.floor(e / (t / s)) / s).toFixed(r)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts");
			const i = [n.dc, n.hb, n.x, n.J, n.db, n.Hb],
				a = {
					[n.Hb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[n.db]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[n.J]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[n.x]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[n.hb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[n.dc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[n.Hb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[n.db]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[n.J]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[n.x]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[n.hb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.dc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.hb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.dc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, r = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[n.dc]: "",
						[n.hb]: "",
						[n.x]: "",
						[n.J]: "",
						[n.db]: "",
						[n.Hb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of i) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? o : a)[s](e).toString()), u -= e * s
				}
				const m = i.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || r ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			}));
			var s = r("./src/lib/loadableAction/index.ts");
			const n = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				i = Object(s.a)(n("awardSheetInfoRequested")),
				a = Object(s.a)(n("manageableAwardsRequested")),
				o = Object(s.a)(n("createCommunityAward")),
				c = Object(s.a)(n("createGlobalAward")),
				d = Object(s.a)(n("createModAward")),
				l = Object(s.a)(n("createAwardFailed")),
				u = Object(s.a)(n("createAwardSuccessful")),
				m = Object(s.a)(n("removeCommunityAward")),
				p = Object(s.a)(n("disableAwardinCommunity")),
				b = Object(s.a)(n("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return f
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "f", (function() {
				return O
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/postParentMessage/index.ts"),
				i = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/selectors/gild.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/telemetry/index.ts"),
				h = r("./src/reddit/actions/gold/constants.ts");
			const f = Object(s.a)(h.L),
				g = Object(s.a)(h.g),
				x = () => async (e, t) => {
					const s = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: n
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(n()(s))
				}, v = Object(s.a)(h.K), y = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (s, n) => {
					const o = n(),
						c = e ? Object(u.a)(o, e) : void 0;
					s(v({
						award: c && c.isEnabled ? c : void 0,
						thingId: r,
						correlationId: t
					})), s(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const b = Object(p.J)(o, {
						thingId: r
					});
					let h = null;
					if (b) h = b.id;
					else if (Object(i.a)(r)) {
						const e = Object(m.I)(o, {
							postId: r
						});
						e && (h = e.belongsTo.id)
					}
					h && Object(d.a)(h, r)
				}, w = Object(s.a)(h.f), C = Object(s.a)(h.J), j = () => async (e, t) => {
					const s = t(),
						i = Object(o.d)(s);
					if (Object(o.g)(s)) {
						const e = "close.gild";
						Object(n.a)({
							type: e
						})
					}
					e(w()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(i)(s)), Object(c.b)(c.a.GildingFlow)
				}, O = () => async () => {
					Object(n.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/isEqual.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				d = r("./src/lib/ads/index.ts"),
				l = r("./src/lib/ads/store.ts"),
				u = r("./src/lib/onFocusAndVisibilityChange/index.ts"),
				m = r("./src/reddit/connectors/PostViewable/index.ts"),
				p = r("./src/reddit/constants/adEvents.ts"),
				b = r("./src/reddit/selectors/media.ts"),
				h = r("./src/reddit/selectors/video.ts");
			const f = [{
					event: p.a.ViewableImpression,
					threshold: d.l,
					viewabilityMinimum: d.m
				}, {
					event: p.a.Impression,
					threshold: d.c,
					viewabilityMinimum: d.d
				}, {
					event: p.a.GalleryItemImpression,
					threshold: d.c,
					viewabilityMinimum: d.d
				}, {
					event: p.a.VendorFullyInView,
					threshold: d.b,
					viewabilityMinimum: d.f
				}, {
					event: p.a.GroupMViewable,
					threshold: d.b,
					viewabilityMinimum: d.m
				}, {
					event: p.a.VendorFullyInViewSeconds5,
					threshold: d.l,
					viewabilityMinimum: d.h,
					remainingTime: d.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: p.a.VendorFullyInViewSeconds15,
					threshold: d.l,
					viewabilityMinimum: d.g,
					remainingTime: d.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = [{
					event: p.a.VideoViewableImpression,
					threshold: d.l,
					viewabilityMinimum: d.k,
					remainingTime: d.k,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoFullyViewableImpression,
					threshold: d.a,
					viewabilityMinimum: d.i,
					remainingTime: d.i,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: d.k,
					remainingTime: d.k,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: p.a.VideoVendorFullyViewable50,
					threshold: d.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				x = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: r,
					remainingTime: s,
					threshold: n = null,
					viewabilityMinimum: i,
					checkAudible: a = !1,
					timeViewingInterrupted: o
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: a,
					timer: null,
					fired: !1,
					threshold: n,
					remainingTime: s,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: i,
					timeViewingInitialized: 0,
					timeViewingInterrupted: o
				})),
				v = () => x(f),
				y = () => x(g),
				w = [d.c, d.e, d.l, d.j, d.a, d.b],
				C = [d.c, d.l, d.j, d.a],
				j = [d.c, d.e, d.l, d.b],
				O = e => "boolean" == typeof e.cumulative && e.cumulative,
				k = Object(o.c)({
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(h.c)(e, {
						postId: t.id
					}),
					videoDuration: (e, {
						post: t
					}) => {
						const r = Object(h.j)(e, {
							postId: t.id
						});
						if (r) return r.length
					},
					isAudible: e => Object(b.a)(e),
					isPlaying: (e, {
						post: t
					}) => Object(h.e)(e, {
						postId: t.id
					}),
					isFullScreen: (e, {
						post: t
					}) => Object(h.f)(e, {
						postId: t.id
					})
				}),
				_ = Object(m.a)(k);
			class I extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = v(), this.videoStats = y(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, d.r), this.props.trackVideo && this.handleThresholds(e, d.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						n()(this.state.event, e) || this.setState({
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
						trackVideo: r
					} = this.props;
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (l.d(e.id, d.r, !1), this.viewabilityStats.forEach(e => {
						O(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), r && (l.d(e.id, d.p, !0), this.videoStats.forEach(e => {
						O(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, d.p, !0), this.videoStats.forEach(e => {
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
					const r = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - r, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let r, s = !1,
						n = !1;
					return "object" == typeof t ? (r = t.threshold, s = !!t.playing, n = !!t.withSound) : r = t, this.isAdequatelyInView(e, r) && (!s || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t, r = !1) {
					const {
						post: s
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(i, this.inViewStats) && i.length > 0 && l.b(s.id, i, r);
					const a = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(a, this.outOfViewStats) && a.length > 0 && l.d(s.id, a, r), this.outOfViewStats = a, this.inViewStats = i
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, d.g) : e.viewabilityMinimum = d.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: r,
						width: s
					} = e.boundingClientRect;
					return !t.threshold && t.event === p.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = s * r < 3e5 ? d.a : d.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === p.a.GroupMViewable && s * r > 242500 && (t.threshold = d.l), t
				}
				checkViewability(e, t) {
					if (O(t) && t.event === p.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						O(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					let r = w;
					return e && !t ? r = j : !e && t && (r = C), a.a.createElement(c.a, {
						threshold: r,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = _(I)
		},
		"./src/reddit/components/CategoryTag/index.m.less": function(e, t, r) {
			e.exports = {
				metaFlair: "_7_d4sJjd2oYzaJuU_QpOI",
				"m-lightboxHeader": "_1rtoCmW_7bFJWYffSOwt4R",
				mLightboxHeader: "_1rtoCmW_7bFJWYffSOwt4R"
			}
		},
		"./src/reddit/components/CategoryTagList/index.m.less": function(e, t, r) {
			e.exports = {
				categoryTagWrapper: "_13jLUpnQtcA8FXyw5Kv06q"
			}
		},
		"./src/reddit/components/CategoryTagList/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/constants/posts.ts"),
				m = r("./src/reddit/controls/InternalLink/index.tsx"),
				p = r("./src/lib/addQueryParams/index.ts");
			const b = (e, t, r, s, n) => {
				const i = n || "*:*",
					a = r || l.Q;
				return Object(p.a)("/search", {
					q: i,
					sort: a,
					t: s,
					category_name: e,
					category: t
				})
			};
			var h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/selectors/telemetry.ts");
			const g = (e, t) => r => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...f.defaults(r),
				correlationId: Object(h.c)(h.a.SearchResults),
				post: f.post(r, e),
				search: f.postFlairClickToSearch(r, t),
				subreddit: f.subreddit(r)
			});
			var x = r("./src/reddit/components/CategoryTag/index.m.less"),
				v = r.n(x);
			class y extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(g(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						r = e.categoryId,
						s = e.categoryName,
						i = n.a.createElement("span", null, s);
					return n.a.createElement("span", {
						className: Object(d.a)(v.a.metaFlair, {
							[v.a["m-lightboxHeader"]]: t
						})
					}, n.a.createElement(m.a, {
						onClick: this.onClick,
						to: b(s, r, l.Nb.Relevance, l.Ub.DAY),
						children: i
					}))
				}
			}
			var w = r("./src/reddit/components/CategoryTagList/index.m.less"),
				C = r.n(w);
			const j = Object(i.b)(() => Object(a.c)({
				labelNSFW: c.R
			}));
			t.a = j(Object(o.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: r,
				sendEvent: s
			}) => n.a.createElement("span", {
				className: r ? void 0 : C.a.categoryTagWrapper
			}, e.map(e => n.a.createElement(y, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: r,
				sendEvent: s
			})))))
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, r) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Flair/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return G
			})), r.d(t, "a", (function() {
				return z
			})), r.d(t, "b", (function() {
				return q
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				i = r.n(n),
				a = r("./node_modules/polished/dist/polished.es.js"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				d = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/lib/classNames/index.ts"),
				m = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = r("./src/lib/lessComponent.tsx"),
				b = r("./src/reddit/components/Emoji/index.m.less"),
				h = r.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...r
			}) => c.a.createElement("div", f({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, r)), "EmojiDisplay", h.a);
			var x = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				v = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = r("./src/reddit/constants/colors.ts"),
				w = r("./src/reddit/constants/parameters.ts"),
				C = r("./src/reddit/controls/InternalLink/index.tsx"),
				j = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = r("./src/reddit/icons/svgs/Close/index.tsx"),
				k = r("./src/reddit/models/Flair/index.ts"),
				_ = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = r("./src/reddit/components/Flair/index.m.less"),
				E = r.n(I);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(v.a)(x.b),
				P = p.a.div("FlairWrapper", E.a),
				N = p.a.wrapped(d.a, "CloseButton", E.a),
				F = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...r
				}) => {
					const s = t;
					return c.a.createElement(g, T({
						style: {
							...L(!!e, s) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", E.a),
				L = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				M = (e, t) => {
					const r = t ? `/r/${t}/search` : "/search",
						s = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(r, {
						[w.p]: s,
						[w.s]: t ? "1" : ""
					})
				},
				A = e => e.isFlairFilter ? c.a.createElement(C.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(C.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: M(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class V extends c.a.Component {
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
							[E.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(_.a)(this.props).flair,
							color: `${G(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(N, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(O.a, {
						className: E.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(_.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(S, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(A, {
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
			const D = Object(m.a)(V),
				R = Object(m.a)(e => {
					let t = "",
						r = !1;
					const s = e.richtext.map((s, n) => {
						if (s.e === k.c.Emoji) {
							const i = s;
							return t += i.a, r = !0, c.a.createElement(F, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: i.u,
								key: n,
								title: i.a
							})
						} {
							const e = s;
							return t += e.t, c.a.createElement("span", {
								key: n
							}, e.t)
						}
					});
					let n;
					r && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (n = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const i = c.a.createElement(P, {
						className: Object(u.a)(e.className, {
							[E.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...n,
							backgroundColor: e.backgroundColor || Object(_.a)(e).flair,
							color: `${G(e)}`
						}
					}, s, e.isSelected && c.a.createElement(N, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(O.a, {
						className: E.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(_.a)(e).flair
						}
					})));
					return c.a.createElement(A, {
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
				G = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(_.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(j.a)(Object(_.a)(e).post, y.b.black, y.b.white) : e.textColor === k.e.Dark ? y.b.black : y.b.white,
				z = p.a.wrapped(D, "TextFlair", E.a),
				W = p.a.wrapped(R, "RichTextFlair", E.a),
				H = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(a.j)(.1, Object(_.a)(i()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				B = p.a.wrapped(e => {
					const t = H(e),
						r = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(A, {
						flair: r,
						searchableTerm: e.text
					})
				}, "MetaFlair", E.a);

			function q(e) {
				const {
					className: t,
					disabled: r = !1,
					flair: n,
					isFlairFilter: i,
					isSelected: a,
					onClick: o,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: h
				} = e, f = Object(u.a)({
					[E.a.flairVariant]: i,
					[E.a.small]: i && !e.large,
					[E.a.large]: i && e.large
				}, t);
				switch (n.type) {
					case k.f.Richtext:
						return r || !n.richtext ? null : c.a.createElement(W, {
							backgroundColor: n.backgroundColor,
							className: f,
							forceSmallEmojis: b,
							isFlairFilter: i,
							isSelected: a,
							onClick: o,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: n.richtext,
							subredditName: m,
							textColor: n.textColor,
							to: h
						});
					case k.f.Text:
						return r || !n.text ? null : c.a.createElement(z, {
							backgroundColor: n.backgroundColor,
							className: f,
							isFlairFilter: i,
							isSelected: a,
							onClick: o,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: h
						});
					case k.f.Meta:
						return c.a.createElement(z, {
							backgroundColor: n.backgroundColor,
							className: t,
							isFlairFilter: i,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: h
						});
					case k.f.Nsfw:
					case k.f.Spoiler:
						return c.a.createElement(B, {
							className: t,
							text: n.text,
							type: n.type
						});
					case k.f.Quarantined:
						return null;
					case k.f.Oc:
						return c.a.createElement(z, {
							backgroundColor: y.b.alienblue,
							text: n.text,
							textColor: k.e.Light,
							tooltip: s.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return n.text ? c.a.createElement(z, {
							backgroundColor: n.backgroundColor,
							className: f,
							isFlairFilter: i,
							onClick: o,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: n.text,
							redditStyle: !p,
							to: h
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/noop.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/components/Flair/index.tsx"),
				l = r("./src/reddit/helpers/flair.ts"),
				u = r("./src/reddit/models/Flair/index.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.R
				}),
				b = Object(o.b)(p),
				h = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = b(({
				className: e,
				isFlairFilter: t,
				onClick: r,
				onMouseDown: s,
				disabled: i = !1,
				flair: o,
				labelNSFW: c,
				subredditName: m
			}) => {
				const p = !!o.find(e => e.type === u.f.Richtext),
					b = o.map(e => {
						if (e.type === u.f.Text && p) return null;
						if (!c && e.type === u.f.Nsfw) return null;
						const o = Object(l.j)(e),
							b = `/r/${m}/`,
							f = s ? () => s(e) : n.a;
						return a.a.createElement(d.b, {
							isFlairFilter: t,
							key: h(e),
							onClick: r,
							onMouseDown: f,
							disabled: i,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(l.e)(b, o)
						})
					});
				return a.a.createElement("div", {
					className: e
				}, b)
			})
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, r) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/noop.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = r.n(d);
			t.a = e => a.a.createElement(o.h, {
				className: l.a.modalHeader
			}, a.a.createElement(o.p, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || n.a
			}, a.a.createElement(o.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, r) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				i = r.n(n);
			const a = s.a.div("Wrapper", i.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, r) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/Flair/index.tsx"),
				c = r("./src/reddit/components/FlairPreview/index.m.less"),
				d = r.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(o.b, "FlairComponent", d.a);
			t.a = e => e.flair ? i.a.createElement(u, null, i.a.createElement(l, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), i.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : i.a.createElement(u, null, s.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, r) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var s = r("./node_modules/lodash/once.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/higherOrderComponents/makeAsync.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/loadWithRetries/index.ts"),
				u = r("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = r.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = n()((e = p) => Object(o.a)({
					getComponent: () => Object(l.a)(() => Promise.all([r.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), r.e("FlairEdit")]).then(r.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/memoizeByReference/index.ts"),
				l = r("./src/reddit/featureFlags/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				m = r("./src/reddit/selectors/moderatorPermissions.ts"),
				p = r("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				b = r("./src/reddit/components/Flair/index.tsx"),
				h = r("./src/reddit/controls/RadioInput/index.tsx"),
				f = r("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = r("./src/reddit/icons/svgs/Pencil/index.tsx"),
				x = r("./src/reddit/icons/svgs/Search/index.tsx"),
				v = r("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				y = r.n(v);
			class w extends i.a.Component {
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
						selectedTemplateId: r
					} = this.props, {
						searchQuery: n
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(n)), o = !!r && a.some(e => e.id === r);
					return i.a.createElement("div", {
						className: y.a.container
					}, i.a.createElement("div", {
						className: y.a.searchBoxWrapper
					}, i.a.createElement("input", {
						className: y.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: n
					}), i.a.createElement(x.a, {
						className: y.a.searchIcon
					})), i.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: r
					}, a.map((e, t) => {
						const s = Object(u.c)(e),
							n = r === e.id || !o && 0 === t;
						return i.a.createElement(f.a, {
							className: y.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: n ? 0 : -1,
							value: e.id
						}, i.a.createElement(b.b, {
							className: y.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && i.a.createElement(g.a, {
							className: y.a.pencil
						}))
					})))
				}
			}
			var C = r("./src/reddit/components/FlairSearch/index.m.less"),
				j = r.n(C);
			const O = "FlairSearch-EmojiPicker-DropdownId",
				k = Object(d.a)(e => e && Object(u.c)(e)),
				_ = Object(o.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: m.d
				}),
				I = Object(a.b)(_);
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, r = t && e.templateId ? t[e.templateId] : void 0;
						let s = e;
						r && (s = Object(u.d)({
							flair: e,
							template: r,
							ignoreTextAllowance: !0
						})), this.props.onChange(s)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const r = t[e],
								s = Object(u.c)(r);
							this.props.onChange(s)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: r,
						templateIds: n,
						subredditId: a
					} = e, o = r && e.flair && e.flair.templateId && r[e.flair.templateId] || void 0, d = Object(p.a)(), l = e.flair || k(o);
					return i.a.createElement("div", {
						className: Object(c.a)(e.className, j.a.container)
					}, r && n && i.a.createElement(w, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: o ? o.id : "",
						templateIds: n,
						templates: r
					}), l && o && (t || o.textEditable) ? i.a.createElement("div", {
						className: j.a.flairEditSection
					}, i.a.createElement("div", {
						className: j.a.editLabel
					}, s.fbt._("Edit flair", null, {
						hk: "1APWWu"
					})), e.areFlairRestrictionsEnabled && i.a.createElement("div", {
						className: j.a.restrictionHintText
					}, Object(u.k)(o)), i.a.createElement(d, {
						autofocus: !0,
						emojiPickerId: O,
						flair: l,
						flairTemplate: o,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: o.modOnly,
						onChange: this.onFlairEdit,
						subredditId: a
					})) : null)
				}
			}
			t.a = I(E)
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, r) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return j
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/CategoryTagList/index.tsx"),
				l = r("./src/reddit/components/FlairList/index.tsx"),
				u = r("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/helpers/flair.ts"),
				h = r("./src/reddit/helpers/trackers/postFlair.ts"),
				f = r("./src/reddit/models/Flair/index.ts"),
				g = r("./src/reddit/selectors/postFlair.ts"),
				x = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/components/FlairWrapper/index.m.less"),
				w = r.n(y);
			const C = Object(a.b)(() => Object(o.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					isMeta: (e, {
						post: t
					}) => Object(x.q)(e, {
						postId: t.id
					}),
					isPostFlairEnabled: (e, t) => Object(g.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, {
						post: t
					}) => Object(x.y)(e, t),
					subredditName: (e, {
						post: t
					}) => Object(v.T)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				j = (e, t) => {
					const r = [];
					return t.isOriginalContent && r.push({
						text: s.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: f.f.Oc
					}), e && r.push({
						text: s.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: f.f.Meta
					}), r.push(...t.flair), r
				};
			t.a = C(({
				className: e,
				disableFlair: t,
				flairPosition: r,
				isFlairFilter: s,
				isPostFlairEnabled: n,
				isMeta: a,
				nowrap: o,
				post: m,
				postCategories: g,
				sendEvent: x,
				showCategoryTag: v,
				subredditName: y,
				titleFlair: C
			}) => {
				const O = Object(u.b)(),
					k = r === f.b.Left,
					_ = C || j(a, m),
					I = [];
				let E = [];
				k ? _.map(e => {
					Object(b.p)(e.type) ? I.push(e) : E.push(e)
				}) : E = _;
				const T = o ? w.a.flairNoWrap : I.length > 0 || E.length > 0 || g && v ? w.a.flairWrapper : null,
					S = e => {
						const t = {
							id: m.belongsTo.id,
							eventType: m.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), x && x(Object(h.a)(m.id, t))
					},
					P = e => {
						Object(p.d)(p.a.SearchResults), x && x(Object(h.e)(e, m.id))
					},
					N = !(t || !_ || !_.length),
					F = !!(v && g && g.length);
				return N || F ? i.a.createElement("div", {
					className: Object(c.a)(T, e),
					"data-ignore-click": O
				}, N && I && i.a.createElement(l.a, {
					className: w.a.flairList,
					isFlairFilter: s,
					key: "leftFlair",
					onClick: S,
					onMouseDown: P,
					flair: I,
					disabled: !n,
					subredditName: y
				}), N && i.a.createElement(l.a, {
					className: w.a.flairList,
					isFlairFilter: s,
					key: "rightFlair",
					onClick: S,
					onMouseDown: P,
					flair: E,
					disabled: !n,
					subredditName: y
				}), F && i.a.createElement(d.a, {
					inLightboxHeader: o,
					postId: m.id,
					postCategories: g
				})) : null
			})
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, r) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				n = r("./src/lib/loadWithRetries/index.ts");
			const i = () => null;
			t.a = Object(s.a)({
				ErrorComponent: i,
				getComponent: () => Object(n.a)(() => r.e("SubredditHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/react/index.js");
			const s = e => new Promise((t, r) => {
				const s = new Image;
				s.onload = () => t(s), s.onerror = r, s.src = e
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				o = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = n.a.memo((function({
				visible: e,
				...t
			}) {
				const [r, a] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, a(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), a(!1)
					}
				}, [e]), e ? n.a.createElement("div", c({
					className: Object(i.a)(o.a.tooltip, {
						[o.a.visible]: r
					})
				}, t.popperProps), t.children, r && n.a.createElement("div", c({
					className: o.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, r) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return g
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = r.n(l),
				m = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				h = m.a.div("BottomText", u.a),
				f = e => n.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(h, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				x = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				v = Object(c.a)(g, [o.a.Click, o.a.Keydown]),
				y = Object(c.a)(f, [o.a.Click, o.a.Keydown]),
				w = Object(i.b)(x);
			t.c = w(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(v, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(y, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/higherOrderComponents/asTooltip.tsx"),
				a = r("./src/reddit/constants/elementIds.ts"),
				o = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(i.a)(e, t);
				class s extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(r, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(o.b)(s)
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/timeAgo/index.ts"),
				i = r("./src/lib/timeUntil/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? s.fbt._("Voting closed {timeAgo}", [s.fbt._param("timeAgo", Object(n.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(i.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var s = r("./node_modules/lodash/isEqual.js"),
				n = r.n(s),
				i = r("./src/reddit/constants/flair.ts"),
				a = r("./src/reddit/helpers/flair.ts"),
				o = r("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === o.f.Text || e.type === o.f.Image || e.type === o.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, r) => {
				if (r && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const s = e && t.templateId ? e[t.templateId] : void 0;
				if (!s) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const o = Object(a.g)(t).length;
				return 0 === o ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : o > i.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.q)(s) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : n()(r, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return F
			})), r.d(t, "a", (function() {
				return H
			}));
			var s = r("./node_modules/polished/dist/polished.es.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/ads/index.ts"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = r("./src/lib/lessComponent.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/controls/OutboundLink/index.tsx"),
				f = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				g = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = r("./src/reddit/helpers/flair.ts"),
				v = r("./src/reddit/helpers/path/index.ts"),
				y = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				w = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = r("./src/reddit/models/Flair/index.ts"),
				j = r("./src/reddit/models/Media/index.ts"),
				O = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = r("./src/lib/getShortenedLink.ts"),
				_ = r("./src/reddit/components/FlairWrapper/index.tsx"),
				I = r("./node_modules/fbt/lib/FbtPublic.js"),
				E = r("./src/lib/prettyPrintNumber/index.ts"),
				T = r("./src/reddit/components/Poll/MetaData/index.tsx"),
				S = r("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				P = r.n(S);
			const N = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F, L = Object(a.b)(N)((function(e) {
					const {
						poll: t,
						resultsByVoters: r
					} = e, s = r ? r.totalVotes : "0";
					return i.a.createElement("div", {
						className: Object(l.a)(e.className, P.a.proposalMetaData)
					}, i.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(E.a)(s)), I.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(T.a, {
						className: P.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				M = r("./src/reddit/components/SEOTitle/index.tsx"),
				A = r("./src/reddit/selectors/posts.ts"),
				V = r("./src/reddit/selectors/subreddit.ts"),
				D = r("./src/reddit/selectors/user.ts"),
				R = r("./src/reddit/components/PostTitle/index.m.less"),
				G = r.n(R),
				z = r("./src/config.ts");

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(F || (F = {}));
			const H = m.a.wrapped(Object(u.a)(({
					size: e,
					titleColor: t,
					titleType: r,
					nowrap: s,
					children: n,
					className: a,
					redditStyle: o,
					theme: c,
					...d
				}) => {
					let u = "";
					switch (e) {
						case F.ExtraLarge:
							u = G.a.ExtraLarge;
							break;
						case F.Large:
							u = G.a.Large;
							break;
						case F.Medium:
							u = G.a.Medium;
							break;
						case F.Small:
							u = G.a.Small;
							break;
						case F.ExtraSmall:
							u = G.a.ExtraSmall
					}
					return i.a.createElement("div", W({
						className: Object(l.a)(a, u, {
							[G.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(O.a)({
								redditStyle: o,
								theme: c,
								...d
							}).titleText
						}
					}, d), r ? i.a.createElement(M.b, {
						type: r
					}, n) : n)
				}), "Title", G.a),
				B = ({
					className: e,
					disableVisited: t,
					titleColor: r,
					...s
				}) => i.a.createElement(o.a, W({}, s, {
					className: Object(l.a)(e, G.a.styledLink, {
						[G.a.isVisitedEnabled]: !t
					})
				}), s.children),
				q = ({
					disableVisited: e,
					nowrap: t,
					...r
				}) => i.a.createElement("div", W({}, r, {
					className: Object(l.a)(G.a.titleContainer, r.className, {
						[G.a.isNoWrap]: t,
						[G.a.isVisitedEnabled]: !e
					})
				})),
				Z = Object(b.t)({
					isCommentPermalink: b.v,
					pageLayer: e => e
				}),
				U = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(b.p)(e, {
						pageLayer: t
					}),
					isMeta: (e, {
						post: t
					}) => Object(A.q)(e, {
						postId: t.id
					}),
					subredditName: (e, {
						post: t
					}) => Object(V.T)(e, {
						subredditId: t.belongsTo.id
					}).name,
					shouldOpenPostInNewTab: D.ab,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(A.i)(e, {
						postId: t.id
					})
				}),
				$ = Object(a.b)(U),
				Q = e => {
					const {
						post: t,
						subredditName: r
					} = e, {
						isSponsored: s
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(q, {
						nowrap: e.nowrap
					}, i.a.createElement(J, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(h.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, i.a.createElement(J, e)); {
						const n = t.media && Object(j.G)(t.media) ? Object(y.c)(t.id, r) : t.permalink,
							a = e.isCommentPermalink ? Object(v.b)(n) : Object(g.a)(n);
						return i.a.createElement(q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: r
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return r ? i.a.createElement(h.b, {
								href: r.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: r
							}, i.a.createElement(J, t)) : i.a.createElement(J, t)
						})(t, e) : i.a.createElement(B, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a
						}, i.a.createElement(J, e)))
					}
				},
				J = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: r,
						post: s
					} = e;
					let n = e.format ? e.format(s) : s.title;
					r && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
					const a = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return i.a.createElement(H, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && i.a.createElement(_.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), n)
				},
				K = e => {
					const {
						hideSourceLink: t,
						post: r
					} = e, {
						isSponsored: s
					} = r, n = !t && !e.isCrosspost && e.size !== F.Large && !r.isSponsored && !(r.media && Object(j.G)(r.media)) && (r.source || r.media && (r.media.type === j.o.GIFVIDEO || r.media.type === j.o.IMAGE || r.media.type === j.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (n) return i.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(j.D)(r),
							isSponsored: s,
							postId: r.id,
							source: r.source
						}, Object(k.a)(r), !r.isSponsored && i.a.createElement(w.a, {
							className: G.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== F.Large && e.size !== F.ExtraLarge) return i.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: s,
						postId: r.id,
						source: r.source
					}, Object(k.a)(r), !r.isSponsored && i.a.createElement(w.a, {
						className: G.a.outboundLinkIcon
					}));
					return null
				};
			class X extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${G.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(O.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(O.a)(this.props).titleText,Object(O.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: r,
						isCommentsPage: s,
						isMeta: n,
						isOverlay: a,
						poll: o,
						post: c,
						showNSFWSpoilerFlairsOnly: d
					} = this.props, u = r === C.b.Left, m = Object(_.b)(n, c), p = d ? m.filter(e => e.type === C.f.Nsfw || e.type === C.f.Spoiler) : u ? m.filter(e => Object(x.p)(e.type)) : [], b = d ? [] : u ? m.filter(e => !Object(x.p)(e.type)) : m, h = !a && !s, f = !t && p && p.length > 0 && h, g = !t && b && b.length > 0 && h;
					return i.a.createElement("div", {
						className: Object(l.a)(e, c.id)
					}, !d && f && i.a.createElement(_.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement(Q, W({}, this.props, {
						leftFlair: d ? p : void 0
					})), o && i.a.createElement(L, {
						className: G.a.pollMeta,
						pollId: o.id
					}), i.a.createElement(K, this.props), g && i.a.createElement(_.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement("div", {
						className: G.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${z.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = m.a.wrapped(Z($(Object(u.a)(Object(p.c)(X)))), "Component", G.a)
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js");
			const n = Object(s.createContext)(!1);

			function i() {
				return Object(s.useContext)(n)
			}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return H
			}));
			var s = r("./src/lib/isUrl/index.ts"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = r("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = r("./src/reddit/icons/fonts/Gif/index.tsx"),
				m = r("./src/reddit/icons/fonts/Link/index.tsx"),
				p = r("./src/reddit/icons/fonts/Photos/index.tsx"),
				b = r("./src/reddit/icons/fonts/Text/index.tsx"),
				h = r("./src/reddit/icons/fonts/Video/index.tsx"),
				f = r("./src/reddit/icons/svgs/Gallery/index.tsx"),
				g = r("./src/reddit/icons/svgs/Poll/index.tsx"),
				x = r("./src/reddit/constants/elementClassNames.ts"),
				v = r("./src/reddit/controls/ContentType/index.m.less"),
				y = r.n(v);
			const w = e => Object(a.a)(y.a.contentTypeIcon, e.className),
				C = e => i.a.createElement(m.a, {
					className: Object(a.a)(x.a, w(e))
				});

			function j(e) {
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
						return i.a.createElement(g.a, {
							className: t
						});
					case "rtjson":
					case "text":
						return i.a.createElement(b.a, {
							className: t
						});
					case "video":
						return i.a.createElement(h.a, {
							className: t
						});
					case "gallery":
						return i.a.createElement(f.a, {
							className: t
						});
					default:
						return i.a.createElement(C, e)
				}
			}
			var O = r("./src/reddit/controls/OutboundLink/index.tsx"),
				k = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				_ = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				I = r("./src/reddit/models/Media/index.ts"),
				E = r("./src/reddit/models/Theme/index.ts"),
				T = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = r("./src/reddit/components/Thumbnail/index.m.less"),
				P = r.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => e.placeholderImage || Object(T.a)(e).placeholderImage,
				L = e => e.placeholderImage ? "cover" : Object(T.a)(e).placeholderImagePosition,
				M = c.a.span("LinkText", P.a),
				A = ({
					className: e,
					onClick: t,
					children: r
				}) => i.a.createElement("div", {
					onClick: t,
					className: Object(a.a)(P.a.linkIcon, e)
				}, r),
				V = e => i.a.createElement("img", {
					alt: e.alt,
					className: Object(a.a)(P.a.hiddenImage, e.className)
				}),
				D = e => {
					const t = i.a.createRef(),
						{
							src: r,
							errorSrc: s
						} = e;
					return r && s && Object(l.a)(r).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${s})`)
					}), i.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(a.a)(P.a.thumbnail, P.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(T.a)(e).button : Object(T.a)(e).line
						}
					}, e.isOutbound && i.a.createElement(A, {
						className: e.linkIconClassName
					}, i.a.createElement(_.a, {
						className: Object(a.a)(P.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && i.a.createElement(M, {
						className: e.linkTextClassName
					}, e.text)), i.a.createElement(V, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				R = e => e.isOutbound ? Object(T.a)(e).button : e.placeholderImage ? "transparent" : Object(T.a)(e).line,
				G = e => {
					const t = F(e),
						r = t && {
							background: Object(E.g)(Object(T.a)(e).placeholder, t, L(e))
						};
					return i.a.createElement("div", {
						className: Object(a.a)(P.a.thumbnail, P.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...r,
							borderColor: R(e)
						}
					}, (!e.placeholderImage || e.showContentType) && i.a.createElement(j, {
						className: Object(a.a)(e.contentTypeClassName, P.a.contentType, {
							[P.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && i.a.createElement(A, {
						className: e.linkIconClassName
					}, i.a.createElement(_.a, {
						className: Object(a.a)(P.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && i.a.createElement(M, {
						className: e.linkTextClassName
					}, e.text)))
				},
				z = e => i.a.createElement(D, N({}, e, {
					className: Object(a.a)(P.a.blurredThumbnail, e.className)
				})),
				W = Object(o.a)(e => {
					const {
						className: t,
						containerClassName: r,
						contentTypeClassName: n,
						crosspost: o,
						forceShowNSFW: c,
						isMeta: d,
						linkIconClassName: l,
						linkTextClassName: u,
						outboundLinkIconClassName: m,
						post: p,
						redditStyle: b,
						removeLink: h,
						showContentType: f,
						templatePlaceholderImage: g,
						text: x,
						theme: v,
						usePreview: y
					} = e, w = Object(k.a)(), C = !v.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!o || !o.isNSFW)) && !c, j = F({
						placeholderImage: g,
						redditStyle: b,
						theme: v
					}), _ = H(e), E = q(p, t, j, C, x, v, _, d, f, h, b, l, u, m, n, w), T = Object(I.D)(p);
					return Object(s.a)(T) && !h && T.indexOf("redditmedia") < 0 ? i.a.createElement("div", {
						className: Object(a.a)(P.a.container, y ? P.a.usePreview : "", r)
					}, i.a.createElement(O.b, {
						href: Object(I.D)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source
					}, E)) : i.a.createElement("div", {
						className: Object(a.a)(P.a.container, y ? P.a.usePreview : "", r)
					}, E)
				}),
				H = ({
					crosspost: e,
					post: t,
					url: r,
					usePreview: s
				}) => {
					if (r) return r;
					const {
						preview: n,
						media: i,
						thumbnail: a
					} = e || t;
					return s && n ? n.url : t.isSponsored && n && "default" === a.url ? n.url : B(i) ? i.scrubberThumbSource : a.url
				},
				B = e => !!e && e.type === I.o.LIVEVIDEO,
				q = (e, t, r, n, o, c, l, u, m, p, b, h, f, g, x, v) => {
					const y = e.source && !e.isSponsored || !1;
					if (Object(s.a)(l)) {
						const r = B(e.media),
							s = r ? {
								errorSrc: d.U
							} : {},
							u = Object(a.a)(t, {
								[P.a.verticallyCenterThumbnail]: r
							});
						return n ? i.a.createElement(z, N({
							"data-click-id": "image",
							src: l
						}, s, {
							className: u,
							isOutbound: y && !p,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: g,
							redditStyle: b,
							text: o,
							theme: c,
							isInIcons2020: v
						})) : i.a.createElement(D, N({
							alt: e.title,
							className: u,
							src: l
						}, s, {
							isOutbound: y && !p,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: g,
							redditStyle: b,
							text: o,
							theme: c,
							isInIcons2020: v
						}))
					}
					return i.a.createElement(G, {
						className: t,
						contentTypeClassName: x,
						placeholderImage: r,
						isMeta: u,
						isOutbound: y && !p,
						linkIconClassName: h,
						linkTextClassName: f,
						outboundLinkIconClassName: g,
						redditStyle: b,
						showContentType: m,
						text: o,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData,
						isInIcons2020: v
					})
				};
			t.a = W
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(s.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: n.J
			}))(t))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return i
			}));
			const s = "reddit",
				n = "reddit.ready",
				i = "reddit.urlChanged"
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "b", (function() {
				return f
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/constants/posts.ts"),
				o = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/subreddit.ts"),
				l = r("./src/reddit/selectors/user.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n.a.createContext(null);

			function p(e) {
				const t = Object(i.e)(t => Object(c.I)(t, {
						postId: e
					})),
					r = Object(i.e)(e => Object(l.i)(e)),
					s = Object(i.e)(e => t ? Object(d.L)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === a.a.SUBREDDIT ? s : null,
					u = !(!r || (null == t ? void 0 : t.author) !== Object(o.e)(r));
				return Object(i.e)(i => ({
					currentUser: r,
					isModerator: !(!n || !i.moderatingSubreddits[n.name]),
					post: t,
					postId: e,
					subreddit: n,
					subredditOrProfile: s,
					userIsOp: u
				}), i.c)
			}

			function b(e) {
				const {
					postId: t,
					children: r
				} = e, s = p(t);
				return n.a.createElement(m.Provider, {
					value: s
				}, r)
			}

			function h(e) {
				const t = e.displayName || e.name;

				function r(r) {
					return n.a.createElement(m.Consumer, null, s => {
						if (!s) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, u({}, r, s))
					})
				}
				return r.displayName = `PostContext(${t})`, r
			}

			function f(e) {
				const t = e.displayName || e.name;

				function r(t) {
					const r = p(t.postId);
					return n.a.createElement(m.Provider, {
						value: r
					}, n.a.createElement(e, u({}, t, r)))
				}
				return r.displayName = `PostProvider(${t})`, r
			}
			t.c = m
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, r) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/constants/elementClassNames.ts"),
				i = r("./src/reddit/controls/OutboundLink/index.tsx"),
				a = r("./src/reddit/controls/OutboundLink/styles.m.less"),
				o = r.n(a);
			t.a = s.a.wrapped(i.b, "styledOutboundLink", {
				styledOutboundLink: `${o.a.styledOutboundLink} ${n.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, r) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, r) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/keycodes.ts"),
				o = r("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = r("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = r("./src/reddit/layout/row/Inline/index.tsx"),
				l = r("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = r.n(l);
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : n.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(i.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? n.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : n.a.createElement(o.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/constants/keycodes.ts");
			class a extends n.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: r
						} = this.props;
						t || this.state.value !== e && (r(e), this.setState({
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
							onChange: r
						} = this.props, {
							value: s
						} = this.state;
						if (t) return;
						const n = e.key === i.b.ArrowUp,
							a = e.key === i.b.ArrowDown;
						if (n || a) {
							const t = this.getValues();
							if (!t.length) return;
							const i = s ? t.indexOf(s) : 0,
								a = t[((n ? i - 1 : i + 1) + t.length) % t.length];
							r(a), this.setState({
								value: a
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
					return n.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, n.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), n.a.Children.map(e.children, (r, s) => {
						const i = 0 === s,
							a = r.props.value === t,
							o = null !== t ? a ? 0 : -1 : i ? 0 : -1;
						return n.a.cloneElement(r, {
							disabled: e.disabled,
							onClick: e => this.handleClick(r.props.value),
							selected: a,
							tabIndex: o
						})
					}))
				}
			}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return g
			}));
			var s = r("./src/reddit/models/Gold/Award.ts"),
				n = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/trackers/gild.ts");
			const o = e => ({
					...n.defaults(e),
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === s.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...o(e),
					source: "awards",
					action: "click",
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...o(t),
					source: "awards",
					action: "click",
					correlationId: Object(i.c)(i.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => s => ({
					...o(s),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, s) => n => ({
					...o(n),
					source: "create_award",
					action: "upload",
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: "image",
					actionInfo: s ? {
						reason: s
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => s => ({
					...o(s),
					source: "create_award",
					action: "click",
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? c(r) : null
				}),
				b = (e, t, r) => s => ({
					...o(s),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? c(r) : null
				}),
				h = (e, t, r) => s => ({
					...o(s),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: c(e),
					profile: n.profileById(s, t),
					subreddit: n.subredditById(s, t)
				}),
				f = (e, t) => h(e, t, "disable_in_community"),
				g = (e, t) => h(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return b
			})), r.d(t, "clickHideAward", (function() {
				return h
			})), r.d(t, "clickConfirmHideAward", (function() {
				return f
			})), r.d(t, "clickCancelHideAward", (function() {
				return g
			})), r.d(t, "clickAwardReportFlow", (function() {
				return v
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return y
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return w
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return C
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return j
			})), r.d(t, "clickReportAward", (function() {
				return O
			})), r.d(t, "clickCancelReportAward", (function() {
				return k
			})), r.d(t, "clickConfirmReportAward", (function() {
				return _
			})), r.d(t, "viewGildModalEvent", (function() {
				return I
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return E
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return T
			})), r.d(t, "clickMessageInputEvent", (function() {
				return S
			})), r.d(t, "typeMessageInputEvent", (function() {
				return P
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return N
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return F
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return L
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return M
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return A
			})), r.d(t, "clickNextButtonEvent", (function() {
				return V
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return D
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return R
			})), r.d(t, "clickFilterEvent", (function() {
				return G
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return z
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return W
			}));
			var s = r("./src/reddit/models/Gold/Award.ts"),
				n = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/models/GoldPurchase.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/helpers/isComment.ts"),
				c = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === s.f.Global && e.awardSubType === s.d.Appreciation ? i.GoldPurchaseType.GidAppreciation : e.awardType === s.f.Global && e.awardSubType === s.d.Premium ? i.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? i.GoldPurchaseType.GidGroup : e.awardType === s.f.Community ? i.GoldPurchaseType.GidCommunity : e.awardType === s.f.Moderator ? i.GoldPurchaseType.GidMod : e.awardType === s.f.Global && e.awardSubType === s.d.Global ? i.GoldPurchaseType.GidGlobal : i.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...n.defaults(e),
					comment: t ? n.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(a.d)(a.a.GildingFlow, !1),
					post: t ? n.post(e, t) : void 0,
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(o.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				b = e => t => ({
					...u(t, e),
					source: Object(o.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => r => ({
					...u(r, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => r => ({
					...u(r, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				x = e => (t, r) => s => ({
					...u(s, r),
					source: Object(o.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				v = x("award_hovercard_report"),
				y = x("cancel_award_hovercard_report"),
				w = x("flag_award"),
				C = x("cancel_flag_award"),
				j = x("confirm_flag_award"),
				O = x("report_community_award"),
				k = x("cancel_report_community_award"),
				_ = x("confirm_report_community_award"),
				I = (e, t, r) => s => ({
					...u(s, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				E = (e, t, r) => s => ({
					...u(s, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				T = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				S = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				L = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(o.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				M = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(o.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				V = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				R = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: s,
					thingId: n
				}) => i => ({
					...u(i, n),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(o.a)(n) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: s,
						...l(e)
					}
				}),
				G = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				z = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				W = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return h
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "j", (function() {
				return O
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/selectors/gold/giveAwards.ts"),
				a = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				b = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const h = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, h = !!r, f = i.b(e), g = f ? Object(u.getAwardTypeFromAward)(f) : null, x = h ? g : o.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, v = r ? Object(p.a)(r) ? "comment" : "post" : void 0, y = l || o.s(e), w = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === y)[0], C = t.offerContext || (f && 0 === f.coinPrice ? n.a.StorefrontFreeAward : Object(n.c)(w, h)), j = w ? Math.round(1e4 * (w.baselinePennies - w.pennies) / w.baselinePennies) / 100 : 0, O = w ? Math.round(1e4 * (w.coins - w.baselineCoins) / w.coins) / 100 : 0, k = w ? w.baselinePennies !== w.pennies ? `${j}_percent_price` : w.baselineCoins !== w.coins ? `${O}_percent_bonus` : void 0 : void 0, _ = x === d.GoldPurchaseType.Premium ? s.pb : w ? w.pennies : void 0;
					return {
						...c.defaults(e),
						comment: r ? c.comment(e, r) : null,
						correlationId: o.q(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: r ? c.post(e, r) : null,
						screen: c.screen(e),
						subreddit: r ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(b.a)(f) : null,
							type: x,
							gildedContent: h,
							contentType: v,
							numberCoins: w ? w.coins : void 0,
							offerContext: C,
							offerType: k
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: _
						},
						purchase: {
							priceMicros: _
						}
					}
				},
				f = (e, t, r) => s => ({
					...h(s, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				x = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				v = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				y = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				w = (e, t) => r => ({
					...h(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				C = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				j = (e, t, r) => s => {
					const n = h(s, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...n.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...n.goldPurchase,
							source: e ? d.GiveGold : o.o(s) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				O = e => t => {
					const r = h(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/reddit/helpers/flair.ts");
			const a = (e, t) => r => ({
					source: "post",
					action: "click",
					noun: "post_flair",
					...n.defaults(r),
					actionInfo: n.actionInfo(r),
					correlationId: Object(s.c)(s.a.SearchResults),
					post: n.post(r, e),
					search: {
						...n.postFlairClickToSearch(r, t),
						query: `flair_name:'${t.postFlairName}'`,
						queryId: Object(s.c)(s.a.SearchResults)
					},
					subreddit: n.subreddit(r)
				}),
				o = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...n.defaults(t),
					actionInfo: n.actionInfo(t),
					correlationId: Object(s.c)(s.a.SearchResults),
					search: n.postFlairClickToSearch(t, e),
					subreddit: n.subreddit(t)
				}),
				c = e => t => {
					const r = Object(i.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: r
						}
					}
				},
				d = () => e => ({
					...n.defaults(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: n.subreddit(e)
				}),
				l = e => t => {
					const r = Object(i.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: r
						}
					}
				},
				u = (e, t) => r => {
					const a = Object(i.g)(e),
						o = n.post(r, t);
					return {
						...n.defaults(r),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: n.subreddit(r),
						postFlair: {
							id: e.templateId,
							title: a
						},
						post: o,
						search: {
							query: `flair_name:'${a}'`,
							subredditId: o ? o.subredditId : void 0,
							subredditName: o ? o.subredditName : void 0,
							postFlairName: a,
							originElement: "post_flair",
							queryId: Object(s.c)(s.a.SearchResults),
							originPageType: r.platform.currentPage ? n.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0
						}
					}
				}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/icepick/icepick.js"),
				n = r("./node_modules/react/index.js"),
				i = r("./src/reddit/hooks/useTooltip.ts");
			const a = Object(s.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function o(e) {
				const t = Object(n.useMemo)(() => {
					const t = Object(i.a)(e);
					return Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, a))
				}, [e]);
				return Object(i.b)(t)
			}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js");
			t.a = function(e, t, r) {
				Object(s.useEffect)(() => {
					const s = e && e.current;
					if (!s || "undefined" == typeof IntersectionObserver) return;
					const n = new IntersectionObserver(t, r);
					return n.observe(s), () => {
						n.unobserve(s)
					}
				}, [e, t, r])
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js");

			function n(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/hooks/useTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./node_modules/icepick/icepick.js"),
				n = r("./node_modules/react/index.js"),
				i = r("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(s.freeze)({
				modifiers: []
			});

			function o(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, r] = Object(n.useState)(null), [a, c] = Object(n.useState)(null), [d, l] = Object(n.useState)(null), [u, m] = Object(n.useState)(!1), p = Object(n.useCallback)(async () => m(!0), []), b = Object(n.useCallback)(() => m(!1), []), h = Object(n.useMemo)(() => {
					const t = o(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: f,
					styles: g
				} = Object(i.a)(t, a, h);
				return Object(n.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...f.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: g.popper,
						...f.popper
					},
					show: p,
					target: {
						element: t,
						ref: r
					},
					visible: u
				}), [l, f, c, b, p, g, t, r, u])
			}
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, t, r) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				o = r("./src/reddit/icons/fonts/Gif/index.m.less"),
				c = r.n(o);
			const d = r("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.a)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"gif_post":"gif",e.isFilled)} ${e.className}`
				})
			}, "GifIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, t, r) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				o = r("./src/reddit/icons/fonts/Link/index.m.less"),
				c = r.n(o);
			const d = r("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.a)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"link_post":"link",e.isFilled)} ${e.className}`
				})
			}, "LinkIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => {
				const t = Object(i.a)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"external_link":"outboundLink",e.isFilled)} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, r) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				o = r("./src/reddit/icons/fonts/Photos/index.m.less"),
				c = r.n(o);
			const d = r("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.a)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"image_post":"photos",e.isFilled)} ${e.className}`
				})
			}, "PhotoIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				o = r.n(a);
			const c = r("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				title: e.title,
				className: `${Object(i.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, r) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				o = r("./src/reddit/icons/fonts/Text/index.m.less"),
				c = r.n(o);
			const d = r("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.a)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"text_post":"text",e.isFilled)} ${e.className}`
				})
			}, "TextIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, t, r) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/fonts/Video/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Video/index.m.less"),
				o = r.n(a);
			const c = r("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(i.b)("video",e.isFilled)} ${e.className}`
			}), "VideoIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, r) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				o = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => n.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(i.a)(o.a.checkbox, e)
			}, t), n.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
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
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				o = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", c({}, e, {
				className: Object(i.a)(o.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			var s, n;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return n
				})), r.d(t, "c", (function() {
					return i
				})),
				function(e) {
					e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups"
				}(s || (s = {})),
				function(e) {
					e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
				}(n || (n = {}));
			const i = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					s = "low_coin_upsell" === r,
					i = "new_purchaser" === r,
					a = "repeat_purchaser" === r;
				return t ? n.GildFlow : s ? n.LowCoinBalance : i ? n.NewUserTargetedOffer : a ? n.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/omit.js"),
				n = r.n(s),
				i = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				a = r("./src/reddit/actions/modQueue/constants.ts"),
				o = r("./src/reddit/actions/pages/constants.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				d = r("./src/reddit/actions/pages/postDraft.ts"),
				l = r("./src/reddit/actions/pages/subreddit.ts"),
				u = r("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
					case o.b:
					case o.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case a.i:
					case a.f:
					case a.m:
					case a.p:
					case a.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: s
						} = r, n = {
							...e
						};
						return Object.keys(s).forEach(e => {
							n[e] || (n[e] = s[e])
						}), n
					}
					case u.r: {
						const {
							subredditId: r,
							applied: s,
							displaySettings: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: s,
								displaySettings: n
							}
						}
					}
					case i.h: {
						const {
							subredditId: r,
							applied: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: s
							}
						}
					}
					case u.j: {
						const {
							subredditId: r,
							isEnabled: s
						} = t.payload, n = {
							...e[r].displaySettings,
							isEnabled: s
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: n
							}
						}
					}
					case u.d: {
						const {
							subredditId: r,
							canAssignOwn: s
						} = t.payload, n = {
							...e[r].permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[r]: {
								...e[r],
								permissions: n
							}
						}
					}
					case u.q: {
						const r = t.payload,
							s = e[r.subredditId],
							n = e[r.subredditId].templates,
							i = e[r.subredditId].templateIds,
							a = {
								...n,
								[r.template.id]: r.template
							},
							o = [...i];
						return o.includes(r.template.id) || o.push(r.template.id), {
							...e,
							[r.subredditId]: {
								...s,
								templates: a,
								templateIds: o
							}
						}
					}
					case u.g: {
						const r = t.payload,
							s = e[r.subredditId],
							i = e[r.subredditId].templates,
							a = e[r.subredditId].templateIds,
							o = n()(i, r.templateId),
							c = a.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...s,
								templates: {
									...o
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const r = t.payload,
							s = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...s,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return i
			}));
			const s = (e, {
					post: t
				}) => {
					const r = t.belongsTo.id;
					if (!r) return null;
					const s = e.authorFlair.models[r];
					if (!s) return null;
					const n = t.author;
					return n && s[n] || null
				},
				n = (e, {
					subredditId: t
				}) => {
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!t) return null;
					const s = e.authorFlair.models[t];
					return s ? s[r] : null
				},
				i = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			const s = e => e.gild.gildModalThingId,
				n = e => e.gild.correlationId || void 0,
				i = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				o = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/Gold/Award.ts"),
				n = r("./src/reddit/selectors/commentSelector.ts"),
				i = r("./src/reddit/selectors/gold/giveAwards.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				o = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, r) => {
					const s = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == s ? void 0 : s.url) ? s.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => e.awardSubType === s.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) => {
					let n = e;
					if ((null == s ? void 0 : s.awardCountsById) && s.awardCountsById[e.id] && e.tiers) {
						const t = s.awardCountsById[e.id];
						n = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return l(n, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) : l(e, r, t),
				m = (e, {
					awards: t,
					minSize: r,
					postOrCommentId: s
				}) => {
					const i = Object(c.c)(e),
						o = d.find(e => e >= r),
						l = s ? Object(a.I)(e, {
							postId: s
						}) || Object(n.a)(e, {
							commentId: s
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: o,
						prefersReducedMotion: i,
						postOrComment: l
					})), e), {})
				},
				p = (e, {
					award: t,
					minSize: r,
					postOrCommentId: s
				}) => t ? m(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: s
				})[t.id] : void 0,
				b = (e, {
					postOrComment: t,
					minSizes: r
				}) => {
					const s = Object.keys(t.awardCountsById || {}).reduce((t, r) => {
						const s = e.awards.models[r];
						return s && t.push(s), t
					}, []);
					return r.reduce((r, n) => {
						const i = m(e, {
							awards: s,
							minSize: n,
							postOrCommentId: t.id
						});
						return r[`icon${n}`] = i, r
					}, {})
				},
				h = (e, {
					minSize: t,
					userName: r
				}) => {
					const s = Object(o.lb)(e, {
						userName: r
					});
					if (s && s.awardedLastMonth && s.awardedLastMonth.topAward) return p(e, {
						award: s.awardedLastMonth.topAward,
						minSize: t
					})
				},
				f = e => {
					const t = Object(i.b)(e),
						r = Object(i.a)(e);
					return p(e, {
						award: t,
						postOrCommentId: r || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = e => e.gild.selectedAward,
				n = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "p", (function() {
				return a
			})), r.d(t, "r", (function() {
				return o
			})), r.d(t, "q", (function() {
				return c
			})), r.d(t, "t", (function() {
				return d
			})), r.d(t, "s", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "y", (function() {
				return h
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "v", (function() {
				return x
			})), r.d(t, "w", (function() {
				return v
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "x", (function() {
				return w
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "m", (function() {
				return E
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "d", (function() {
				return S
			}));
			var s = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(n.a)({
				features: {
					goldPurchase: i.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				o = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => {
					const t = Object(s.i)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				p = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.updateCardModal.pending,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				x = e => e.features.goldPurchase.payment.savedCardsPending,
				v = e => e.features.goldPurchase.payment.savedCards,
				y = e => e.features.goldPurchase.payment.rememberCard,
				w = e => e.features.goldPurchase.payment.useSavedCard,
				C = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				j = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				O = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				_ = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				I = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				E = e => e.features.goldPurchase.payment.stripeToken.pending,
				T = e => e.features.goldPurchase.payment.paypal.passthrough,
				S = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/selectors/moderatorPermissions.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(a.a)({
				features: {
					userFlair: o.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : n.b.Right,
				u = Object(s.a)((e, {
					subredditId: t
				}) => {
					const r = c(e, {
						subredditId: t
					});
					if (r) return {
						type: n.d.UserFlair,
						displaySettings: r.displaySettings,
						permissions: r.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
							subredditId: t
						}),
						s = u(e, {
							subredditId: t
						}),
						n = c(e, {
							subredditId: t
						});
					if (!r || !s || !n) return !1;
					if (n.applied) return !0;
					const a = Object(i.d)(e, {
							subredditId: t
						}),
						{
							canUserChange: o
						} = s.permissions;
					return !!n.templateIds.find(e => {
						return !n.templates[e].modOnly || a
					}) && o
				}
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/config.ts"),
				n = r("./src/lib/fastdom/index.ts"),
				i = r("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				o = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = r("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${o}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(i.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === o && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${s.a.redditUrl}${c}`, e))
					} catch (r) {
						return void console.error(a, `${s.a.redditUrl}${c}`, r)
					}
					this.store.then(e => {
						e.dispatch(i.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, r) {
					const s = {
						name: e,
						props: t,
						element: r
					};
					this.queue.push(s), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(s)
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
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~9f82fa34.29cf27715e25b571f3a0.js.map