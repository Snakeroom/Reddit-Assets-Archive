// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~redd~b7d82fac.c9492a757884189c6375.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~redd~b7d82fac"], {
		"./src/higherOrderComponents/makeAsync.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r(e) {
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
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/brcast/dist/brcast.es.js");
			const n = () => "undefined" != typeof document,
				r = () => n() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: r()
				}),
				{
					subscribe: a,
					unsubscribe: c,
					setState: l
				} = Object(i.a)(o()),
				d = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => l(o());
			(() => {
				const e = (() => {
					if (!n()) return;
					const e = Object.keys(d).find(e => e in document);
					return e ? d[e] : void 0
				})();
				e && document.addEventListener(e, u)
			})(), t.a = {
				isDocumentHidden: () => !r(),
				isDocumentVisible: r,
				subscribe: a,
				unsubscribe: c
			}
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return u
			}));
			const i = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				n = 1e3,
				r = 100 * n,
				o = 10 * r,
				a = 100 * o,
				c = 10 * a,
				l = 100 * c,
				d = 51;

			function u(e, t) {
				return (null == t ? void 0 : t.displayFull) ? i(e.toString()) : e >= l - d ? `${Math.floor(e/c)}b` : e >= c - d && e < l - d ? `${(e/c).toFixed(1)}b` : e >= a - d && e < c - d ? `${Math.floor(e/o)}m` : e >= o - d && e < a - d ? `${(e/o).toFixed(1)}m` : e >= r - d && e < o - d ? `${Math.floor(e/n)}k` : e >= n && e < r - d ? (null == t ? void 0 : t.roundDown) ? `${m(e,n)}k` : `${(e/n).toFixed(1)}k` : String(e)
			}
			const m = (e, t, s = 1) => {
				const i = Math.pow(10, s);
				return (Math.floor(e / (t / i)) / i).toFixed(s)
			}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/lodash/isEqual.js"),
				n = s.n(i),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/ads/store.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				m = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/constants/adEvents.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				b = s("./src/reddit/selectors/video.ts");
			const x = [{
					event: p.a.ViewableImpression,
					threshold: l.l,
					viewabilityMinimum: l.m
				}, {
					event: p.a.Impression,
					threshold: l.c,
					viewabilityMinimum: l.d
				}, {
					event: p.a.GalleryItemImpression,
					threshold: l.c,
					viewabilityMinimum: l.d
				}, {
					event: p.a.VendorFullyInView,
					threshold: l.b,
					viewabilityMinimum: l.f
				}, {
					event: p.a.GroupMViewable,
					threshold: l.b,
					viewabilityMinimum: l.m
				}, {
					event: p.a.VendorFullyInViewSeconds5,
					threshold: l.l,
					viewabilityMinimum: l.h,
					remainingTime: l.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: p.a.VendorFullyInViewSeconds15,
					threshold: l.l,
					viewabilityMinimum: l.g,
					remainingTime: l.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				f = [{
					event: p.a.VideoViewableImpression,
					threshold: l.l,
					viewabilityMinimum: l.k,
					remainingTime: l.k,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoFullyViewableImpression,
					threshold: l.a,
					viewabilityMinimum: l.i,
					remainingTime: l.i,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: l.k,
					remainingTime: l.k,
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
				v = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: s,
					remainingTime: i,
					threshold: n = null,
					viewabilityMinimum: r,
					checkAudible: o = !1,
					timeViewingInterrupted: a
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: o,
					timer: null,
					fired: !1,
					threshold: n,
					remainingTime: i,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: r,
					timeViewingInitialized: 0,
					timeViewingInterrupted: a
				})),
				g = () => v(x),
				C = () => v(f),
				y = [l.c, l.e, l.l, l.j, l.a, l.b],
				j = [l.c, l.l, l.j, l.a],
				w = [l.c, l.e, l.l, l.b],
				O = e => "boolean" == typeof e.cumulative && e.cumulative,
				I = Object(a.c)({
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(b.c)(e, {
						postId: t.id
					}),
					videoDuration: (e, {
						post: t
					}) => {
						const s = Object(b.j)(e, {
							postId: t.id
						});
						if (s) return s.length
					},
					isAudible: e => Object(h.a)(e),
					isPlaying: (e, {
						post: t
					}) => Object(b.e)(e, {
						postId: t.id
					}),
					isFullScreen: (e, {
						post: t
					}) => Object(b.f)(e, {
						postId: t.id
					})
				}),
				k = Object(m.a)(I);
			class N extends r.Component {
				constructor(e) {
					super(e), this.viewabilityStats = g(), this.videoStats = C(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, l.r), this.props.trackVideo && this.handleThresholds(e, l.p, !0), this.checkViewabilityByType(e)
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
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (d.d(e.id, l.r, !1), this.viewabilityStats.forEach(e => {
						O(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (d.d(e.id, l.p, !0), this.videoStats.forEach(e => {
						O(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, l.p, !0), this.videoStats.forEach(e => {
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
					let s, i = !1,
						n = !1;
					return "object" == typeof t ? (s = t.threshold, i = !!t.playing, n = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!i || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t, s = !1) {
					const {
						post: i
					} = this.props, r = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(r, this.inViewStats) && r.length > 0 && d.b(i.id, r, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(o, this.outOfViewStats) && o.length > 0 && d.d(i.id, o, s), this.outOfViewStats = o, this.inViewStats = r
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, l.g) : e.viewabilityMinimum = l.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: i
					} = e.boundingClientRect;
					return !t.threshold && t.event === p.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = i * s < 3e5 ? l.a : l.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === p.a.GroupMViewable && i * s > 242500 && (t.threshold = l.l), t
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
					let s = y;
					return e && !t ? s = w : !e && t && (s = j), o.a.createElement(c.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = k(N)
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/lib/addQueryParams/index.ts");
			const h = (e, t, s, i, n) => {
				const r = n || "*:*",
					o = s || d.Q;
				return Object(p.a)("/search", {
					q: r,
					sort: o,
					t: i,
					category_name: e,
					category: t
				})
			};
			var b = s("./src/reddit/helpers/correlationIdTracker.ts"),
				x = s("./src/reddit/selectors/telemetry.ts");
			const f = (e, t) => s => ({
				source: "post",
				action: "click",
				noun: "meta_flair",
				...x.defaults(s),
				correlationId: Object(b.c)(b.a.SearchResults),
				post: x.post(s, e),
				search: x.postFlairClickToSearch(s, t),
				subreddit: x.subreddit(s)
			});
			var v = s("./src/reddit/components/CategoryTag/index.m.less"),
				g = s.n(v);
			class C extends n.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const e = {
							id: this.props.category.categoryId,
							title: this.props.category.categoryName,
							eventType: u.a.SUBREDDIT,
							originElement: "meta_flair"
						};
						this.props.sendEvent(f(this.props.postId, e))
					}
				}
				render() {
					const e = this.props.category,
						t = this.props.inLightboxHeader,
						s = e.categoryId,
						i = e.categoryName,
						r = n.a.createElement("span", null, i);
					return n.a.createElement("span", {
						className: Object(l.a)(g.a.metaFlair, {
							[g.a["m-lightboxHeader"]]: t
						})
					}, n.a.createElement(m.a, {
						onClick: this.onClick,
						to: h(i, s, d.Nb.Relevance, d.Ub.DAY),
						children: r
					}))
				}
			}
			var y = s("./src/reddit/components/CategoryTagList/index.m.less"),
				j = s.n(y);
			const w = Object(r.b)(() => Object(o.c)({
				labelNSFW: c.S
			}));
			t.a = w(Object(a.c)(({
				postCategories: e,
				postId: t,
				inLightboxHeader: s,
				sendEvent: i
			}) => n.a.createElement("span", {
				className: s ? void 0 : j.a.categoryTagWrapper
			}, e.map(e => n.a.createElement(C, {
				postId: t,
				category: e,
				key: e.categoryId,
				inLightboxHeader: s,
				sendEvent: i
			})))))
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
				return U
			})), s.d(t, "b", (function() {
				return q
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				l = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/Emoji/index.m.less"),
				b = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const f = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...s
			}) => c.a.createElement("div", x({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, s)), "EmojiDisplay", b.a);
			var v = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				g = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = s("./src/reddit/constants/colors.ts"),
				y = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = s("./src/reddit/icons/svgs/Close/index.tsx"),
				I = s("./src/reddit/models/Flair/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/reddit/components/Flair/index.m.less"),
				E = s.n(N);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(g.a)(v.b),
				S = p.a.div("FlairWrapper", E.a),
				F = p.a.wrapped(l.a, "CloseButton", E.a),
				V = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...s
				}) => {
					const i = t;
					return c.a.createElement(f, T({
						style: {
							...L(!!e, i) || {}
						}
					}, s))
				}), "FlairEmojiDisplay", E.a),
				L = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				M = (e, t) => {
					const s = t ? `/r/${t}/search` : "/search",
						i = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(d.a)(s, {
						[y.p]: i,
						[y.s]: t ? "1" : ""
					})
				},
				P = e => e.isFlairFilter ? c.a.createElement(j.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(j.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: M(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class D extends c.a.Component {
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
							backgroundColor: this.props.backgroundColor || Object(k.a)(this.props).flair,
							color: `${H(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(O.a, {
						className: E.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(k.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(_, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(P, {
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
			const A = Object(m.a)(D),
				W = Object(m.a)(e => {
					let t = "",
						s = !1;
					const i = e.richtext.map((i, n) => {
						if (i.e === I.c.Emoji) {
							const r = i;
							return t += r.a, s = !0, c.a.createElement(V, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: r.u,
								key: n,
								title: r.a
							})
						} {
							const e = i;
							return t += e.t, c.a.createElement("span", {
								key: n
							}, e.t)
						}
					});
					let n;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (n = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const r = c.a.createElement(S, {
						className: Object(u.a)(e.className, {
							[E.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...n,
							backgroundColor: e.backgroundColor || Object(k.a)(e).flair,
							color: `${H(e)}`
						}
					}, i, e.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(O.a, {
						className: E.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(k.a)(e).flair
						}
					})));
					return c.a.createElement(P, {
						flair: r,
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
				H = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(k.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(w.a)(Object(k.a)(e).post, C.b.black, C.b.white) : e.textColor === I.e.Dark ? C.b.black : C.b.white,
				U = p.a.wrapped(A, "TextFlair", E.a),
				R = p.a.wrapped(W, "RichTextFlair", E.a),
				$ = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(o.j)(.1, Object(k.a)(r()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				Q = p.a.wrapped(e => {
					const t = $(e),
						s = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(P, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", E.a);

			function q(e) {
				const {
					className: t,
					disabled: s = !1,
					flair: n,
					isFlairFilter: r,
					isSelected: o,
					onClick: a,
					onCloseClick: l,
					onMouseDown: d,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: h,
					to: b
				} = e, x = Object(u.a)({
					[E.a.flairVariant]: r,
					[E.a.small]: r && !e.large,
					[E.a.large]: r && e.large
				}, t);
				switch (n.type) {
					case I.f.Richtext:
						return s || !n.richtext ? null : c.a.createElement(R, {
							backgroundColor: n.backgroundColor,
							className: x,
							forceSmallEmojis: h,
							isFlairFilter: r,
							isSelected: o,
							onClick: a,
							onCloseClick: l,
							onMouseDown: d,
							redditStyle: !p,
							richtext: n.richtext,
							subredditName: m,
							textColor: n.textColor,
							to: b
						});
					case I.f.Text:
						return s || !n.text ? null : c.a.createElement(U, {
							backgroundColor: n.backgroundColor,
							className: x,
							isFlairFilter: r,
							isSelected: o,
							onClick: a,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: b
						});
					case I.f.Meta:
						return c.a.createElement(U, {
							backgroundColor: n.backgroundColor,
							className: t,
							isFlairFilter: r,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !p,
							to: b
						});
					case I.f.Nsfw:
					case I.f.Spoiler:
						return c.a.createElement(Q, {
							className: t,
							text: n.text,
							type: n.type
						});
					case I.f.Quarantined:
						return null;
					case I.f.Oc:
						return c.a.createElement(U, {
							backgroundColor: C.b.alienblue,
							text: n.text,
							textColor: I.e.Light,
							tooltip: i.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return n.text ? c.a.createElement(U, {
							backgroundColor: n.backgroundColor,
							className: x,
							isFlairFilter: r,
							onClick: a,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: n.text,
							redditStyle: !p,
							to: b
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/lodash/noop.js"),
				n = s.n(i),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				d = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				m = s("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.S
				}),
				h = Object(a.b)(p),
				b = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = h(({
				className: e,
				isFlairFilter: t,
				onClick: s,
				onMouseDown: i,
				disabled: r = !1,
				flair: a,
				labelNSFW: c,
				subredditName: m
			}) => {
				const p = !!a.find(e => e.type === u.f.Richtext),
					h = a.map(e => {
						if (e.type === u.f.Text && p) return null;
						if (!c && e.type === u.f.Nsfw) return null;
						const a = Object(d.j)(e),
							h = `/r/${m}/`,
							x = i ? () => i(e) : n.a;
						return o.a.createElement(l.b, {
							isFlairFilter: t,
							key: b(e),
							onClick: s,
							onMouseDown: x,
							disabled: r,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(d.e)(h, a)
						})
					});
				return o.a.createElement("div", {
					className: e
				}, h)
			})
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
				return w
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/CategoryTagList/index.tsx"),
				d = s("./src/reddit/components/FlairList/index.tsx"),
				u = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				h = s("./src/reddit/helpers/flair.ts"),
				b = s("./src/reddit/helpers/trackers/postFlair.ts"),
				x = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/FlairWrapper/index.m.less"),
				y = s.n(C);
			const j = Object(o.b)(() => Object(a.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					isMeta: (e, {
						post: t
					}) => Object(v.q)(e, {
						postId: t.id
					}),
					isPostFlairEnabled: (e, t) => Object(f.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, {
						post: t
					}) => Object(v.y)(e, t),
					subredditName: (e, {
						post: t
					}) => Object(g.T)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				w = (e, t) => {
					const s = [];
					return t.isOriginalContent && s.push({
						text: i.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: x.f.Oc
					}), e && s.push({
						text: i.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: x.f.Meta
					}), s.push(...t.flair), s
				};
			t.a = j(({
				className: e,
				disableFlair: t,
				flairPosition: s,
				isFlairFilter: i,
				isPostFlairEnabled: n,
				isMeta: o,
				nowrap: a,
				post: m,
				postCategories: f,
				sendEvent: v,
				showCategoryTag: g,
				subredditName: C,
				titleFlair: j
			}) => {
				const O = Object(u.b)(),
					I = s === x.b.Left,
					k = j || w(o, m),
					N = [];
				let E = [];
				I ? k.map(e => {
					Object(h.p)(e.type) ? N.push(e) : E.push(e)
				}) : E = k;
				const T = a ? y.a.flairNoWrap : N.length > 0 || E.length > 0 || f && g ? y.a.flairWrapper : null,
					_ = e => {
						const t = {
							id: m.belongsTo.id,
							eventType: m.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), v && v(Object(b.a)(m.id, t))
					},
					S = e => {
						Object(p.d)(p.a.SearchResults), v && v(Object(b.e)(e, m.id))
					},
					F = !(t || !k || !k.length),
					V = !!(g && f && f.length);
				return F || V ? r.a.createElement("div", {
					className: Object(c.a)(T, e),
					"data-ignore-click": O
				}, F && N && r.a.createElement(d.a, {
					className: y.a.flairList,
					isFlairFilter: i,
					key: "leftFlair",
					onClick: _,
					onMouseDown: S,
					flair: N,
					disabled: !n,
					subredditName: C
				}), F && r.a.createElement(d.a, {
					className: y.a.flairList,
					isFlairFilter: i,
					key: "rightFlair",
					onClick: _,
					onMouseDown: S,
					flair: E,
					disabled: !n,
					subredditName: C
				}), V && r.a.createElement(l.a, {
					inLightboxHeader: a,
					postId: m.id,
					postCategories: f
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(i.a)({
				ErrorComponent: r,
				getComponent: () => Object(n.a)(() => s.e("SubredditHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/react/index.js");
			const i = e => new Promise((t, s) => {
				const i = new Image;
				i.onload = () => t(i), i.onerror = s, i.src = e
			})
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
				return x
			})), s.d(t, "a", (function() {
				return f
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
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
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const h = m.a.div("Text", u.a),
				b = m.a.div("BottomText", u.a),
				x = e => n.a.createElement(h, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				f = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(b, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				v = Object(o.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(l.b)(t)(e)
				}),
				g = Object(c.a)(f, [a.a.Click, a.a.Keydown]),
				C = Object(c.a)(x, [a.a.Click, a.a.Keydown]),
				y = Object(r.b)(v);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(g, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(C, p({}, e, {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				const s = Object(r.a)(e, t);
				class i extends n.a.PureComponent {
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
						return n.a.createElement(s, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(i)
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js");
			const n = Object(i.createContext)(!1);

			function r() {
				return Object(i.useContext)(n)
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
				return $
			}));
			var i = s("./src/lib/isUrl/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				m = s("./src/reddit/icons/fonts/Link/index.tsx"),
				p = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				h = s("./src/reddit/icons/fonts/Text/index.tsx"),
				b = s("./src/reddit/icons/fonts/Video/index.tsx"),
				x = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				f = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				v = s("./src/reddit/constants/elementClassNames.ts"),
				g = s("./src/reddit/controls/ContentType/index.m.less"),
				C = s.n(g);
			const y = e => Object(o.a)(C.a.contentTypeIcon, e.className),
				j = e => r.a.createElement(m.a, {
					className: Object(o.a)(v.a, y(e))
				});

			function w(e) {
				const t = y(e);
				switch (e.type) {
					case "gifvideo":
						return r.a.createElement(u.a, {
							className: t
						});
					case "image":
						return r.a.createElement(p.a, {
							className: t
						});
					case "meta":
						return r.a.createElement(f.a, {
							className: t
						});
					case "rtjson":
					case "text":
						return r.a.createElement(h.a, {
							className: t
						});
					case "video":
						return r.a.createElement(b.a, {
							className: t
						});
					case "gallery":
						return r.a.createElement(x.a, {
							className: t
						});
					default:
						return r.a.createElement(j, e)
				}
			}
			var O = s("./src/reddit/controls/OutboundLink/index.tsx"),
				I = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				k = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Theme/index.ts"),
				T = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = s("./src/reddit/components/Thumbnail/index.m.less"),
				S = s.n(_);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const V = e => e.placeholderImage || Object(T.a)(e).placeholderImage,
				L = e => e.placeholderImage ? "cover" : Object(T.a)(e).placeholderImagePosition,
				M = c.a.span("LinkText", S.a),
				P = ({
					className: e,
					onClick: t,
					children: s
				}) => r.a.createElement("div", {
					onClick: t,
					className: Object(o.a)(S.a.linkIcon, e)
				}, s),
				D = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(S.a.hiddenImage, e.className)
				}),
				A = e => {
					const t = r.a.createRef(),
						{
							src: s,
							errorSrc: i
						} = e;
					return s && i && Object(d.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${i})`)
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(S.a.thumbnail, S.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(T.a)(e).button : Object(T.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(P, {
						className: e.linkIconClassName
					}, r.a.createElement(k.a, {
						className: Object(o.a)(S.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && r.a.createElement(M, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(D, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				W = e => e.isOutbound ? Object(T.a)(e).button : e.placeholderImage ? "transparent" : Object(T.a)(e).line,
				H = e => {
					const t = V(e),
						s = t && {
							background: Object(E.g)(Object(T.a)(e).placeholder, t, L(e))
						};
					return r.a.createElement("div", {
						className: Object(o.a)(S.a.thumbnail, S.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: W(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(w, {
						className: Object(o.a)(e.contentTypeClassName, S.a.contentType, {
							[S.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(P, {
						className: e.linkIconClassName
					}, r.a.createElement(k.a, {
						className: Object(o.a)(S.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: e.isInIcons2020
					}), e.text && r.a.createElement(M, {
						className: e.linkTextClassName
					}, e.text)))
				},
				U = e => r.a.createElement(A, F({}, e, {
					className: Object(o.a)(S.a.blurredThumbnail, e.className)
				})),
				R = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: n,
						crosspost: a,
						forceShowNSFW: c,
						isMeta: l,
						linkIconClassName: d,
						linkTextClassName: u,
						outboundLinkIconClassName: m,
						post: p,
						redditStyle: h,
						removeLink: b,
						showContentType: x,
						templatePlaceholderImage: f,
						text: v,
						theme: g,
						usePreview: C
					} = e, y = Object(I.a)(), j = !g.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!a || !a.isNSFW)) && !c, w = V({
						placeholderImage: f,
						redditStyle: h,
						theme: g
					}), k = $(e), E = q(p, t, w, j, v, g, k, l, x, b, h, d, u, m, n, y), T = Object(N.D)(p);
					return Object(i.a)(T) && !b && T.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(o.a)(S.a.container, C ? S.a.usePreview : "", s)
					}, r.a.createElement(O.b, {
						href: Object(N.D)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source
					}, E)) : r.a.createElement("div", {
						className: Object(o.a)(S.a.container, C ? S.a.usePreview : "", s)
					}, E)
				}),
				$ = ({
					crosspost: e,
					post: t,
					url: s,
					usePreview: i
				}) => {
					if (s) return s;
					const {
						preview: n,
						media: r,
						thumbnail: o
					} = e || t;
					return i && n ? n.url : t.isSponsored && n && "default" === o.url ? n.url : Q(r) ? r.scrubberThumbSource : o.url
				},
				Q = e => !!e && e.type === N.o.LIVEVIDEO,
				q = (e, t, s, n, a, c, d, u, m, p, h, b, x, f, v, g) => {
					const C = e.source && !e.isSponsored || !1;
					if (Object(i.a)(d)) {
						const s = Q(e.media),
							i = s ? {
								errorSrc: l.U
							} : {},
							u = Object(o.a)(t, {
								[S.a.verticallyCenterThumbnail]: s
							});
						return n ? r.a.createElement(U, F({
							"data-click-id": "image",
							src: d
						}, i, {
							className: u,
							isOutbound: C && !p,
							linkIconClassName: b,
							linkTextClassName: x,
							outboundLinkIconClassName: f,
							redditStyle: h,
							text: a,
							theme: c,
							isInIcons2020: g
						})) : r.a.createElement(A, F({
							alt: e.title,
							className: u,
							src: d
						}, i, {
							isOutbound: C && !p,
							linkIconClassName: b,
							linkTextClassName: x,
							outboundLinkIconClassName: f,
							redditStyle: h,
							text: a,
							theme: c,
							isInIcons2020: g
						}))
					}
					return r.a.createElement(H, {
						className: t,
						contentTypeClassName: v,
						placeholderImage: s,
						isMeta: u,
						isOutbound: C && !p,
						linkIconClassName: b,
						linkTextClassName: x,
						outboundLinkIconClassName: f,
						redditStyle: h,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData,
						isInIcons2020: g
					})
				};
			t.a = R
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, s) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return F
			})), s.d(t, "c", (function() {
				return V
			})), s.d(t, "d", (function() {
				return L
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, s) => i => {
				const n = e(i),
					o = t(i),
					a = !n && o;
				return Object(r.a)(s.baseClassName, i.className, {
					[s.mIsInteractive]: o,
					[s.mIsActive]: n,
					[s.mIsVoteable]: a
				})
			};
			var c = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/controls/Downvote/index.m.less"),
				m = s.n(u);
			const p = {
					...m.a,
					baseClassName: m.a.Downvote
				},
				h = ({
					voteState: e
				}) => e === d.a.downvoted,
				b = a(h, ({
					interactive: e
				}) => !1 !== e, p);
			var x = e => {
					const t = Object(c.a)();
					return n.a.createElement(l.b, {
						className: b(e),
						compact: e.compact,
						isFilled: t && h(e)
					})
				},
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/controls/Upvote/index.m.less"),
				g = s.n(v);
			const C = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				y = ({
					voteState: e
				}) => e === d.a.upvoted,
				j = a(y, ({
					interactive: e
				}) => !1 !== e, C);
			var w = e => {
					const t = Object(c.a)();
					return n.a.createElement(f.b, {
						className: j(e),
						compact: e.compact,
						isFilled: t && y(e)
					})
				},
				O = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				I = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/reddit/components/VerticalVotes/votes.m.less"),
				E = s.n(N);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => Object(r.a)({
					[E.a.compact]: e.compact,
					[E.a.dark]: Object(I.b)(Object(O.a)(e)),
					[E.a.nightmode]: e.isNightmode
				}),
				S = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(k.a)(e), s = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: i,
						...o
					} = e;
					return n.a.createElement("button", T({}, o, {
						className: Object(r.a)(E.a.customDownvote, _(e), {
							[E.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: s
					}))
				}),
				F = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(k.a)(e), s = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: i,
						...o
					} = e;
					return n.a.createElement("button", T({}, o, {
						className: Object(r.a)(E.a.customUpvote, _(e), {
							[E.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: s
					}))
				}),
				V = x,
				L = w
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(i.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: n.J
			}))(t))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			}));
			const i = "reddit",
				n = "reddit.ready",
				r = "reddit.urlChanged"
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "b", (function() {
				return x
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/constants/posts.ts"),
				a = s("./src/reddit/models/User/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				d = s("./src/reddit/selectors/user.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n.a.createContext(null);

			function p(e) {
				const t = Object(r.e)(t => Object(c.I)(t, {
						postId: e
					})),
					s = Object(r.e)(e => Object(d.j)(e)),
					i = Object(r.e)(e => t ? Object(l.L)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? i : null,
					u = !(!s || (null == t ? void 0 : t.author) !== Object(a.e)(s));
				return Object(r.e)(r => ({
					currentUser: s,
					isModerator: !(!n || !r.moderatingSubreddits[n.name]),
					post: t,
					postId: e,
					subreddit: n,
					subredditOrProfile: i,
					userIsOp: u
				}), r.c)
			}

			function h(e) {
				const {
					postId: t,
					children: s
				} = e, i = p(t);
				return n.a.createElement(m.Provider, {
					value: i
				}, s)
			}

			function b(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return n.a.createElement(m.Consumer, null, i => {
						if (!i) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, u({}, s, i))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function x(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = p(t.postId);
					return n.a.createElement(m.Provider, {
						value: s
					}, n.a.createElement(e, u({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = m
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/constants/elementClassNames.ts"),
				r = s("./src/reddit/controls/OutboundLink/index.tsx"),
				o = s("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = s.n(o);
			t.a = i.a.wrapped(r.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${n.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, s) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
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
			var i = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/reddit/helpers/flair.ts");
			const o = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: "post_flair",
					...n.defaults(s),
					actionInfo: n.actionInfo(s),
					correlationId: Object(i.c)(i.a.SearchResults),
					post: n.post(s, e),
					search: {
						...n.postFlairClickToSearch(s, t),
						query: `flair_name:'${t.postFlairName}'`,
						queryId: Object(i.c)(i.a.SearchResults)
					},
					subreddit: n.subreddit(s)
				}),
				a = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...n.defaults(t),
					actionInfo: n.actionInfo(t),
					correlationId: Object(i.c)(i.a.SearchResults),
					search: n.postFlairClickToSearch(t, e),
					subreddit: n.subreddit(t)
				}),
				c = e => t => {
					const s = Object(r.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				l = () => e => ({
					...n.defaults(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: n.subreddit(e)
				}),
				d = e => t => {
					const s = Object(r.g)(e);
					return {
						...n.defaults(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: n.subreddit(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				u = (e, t) => s => {
					const o = Object(r.g)(e),
						a = n.post(s, t);
					return {
						...n.defaults(s),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: n.subreddit(s),
						postFlair: {
							id: e.templateId,
							title: o
						},
						post: a,
						search: {
							query: `flair_name:'${o}'`,
							subredditId: a ? a.subredditId : void 0,
							subredditName: a ? a.subredditName : void 0,
							postFlairName: o,
							originElement: "post_flair",
							queryId: Object(i.c)(i.a.SearchResults),
							originPageType: s.platform.currentPage ? n.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0
						}
					}
				}
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => n.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? n.a.createElement("span", l({}, s, {
				className: Object(r.a)(c.a.compactDownvoteWrapper, s.className)
			}), n.a.createElement(d, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : n.a.createElement("span", l({}, s, {
				className: Object(r.a)(c.a.downvoteWrapper, s.className)
			}), n.a.createElement(d, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Gif/index.m.less": function(e, t, s) {
			e.exports = {
				GifIcon: "_2FVMHfvH9Kj7f59LnZjdUX",
				gifIcon: "_2FVMHfvH9Kj7f59LnZjdUX"
			}
		},
		"./src/reddit/icons/fonts/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Gif/index.m.less"),
				c = s.n(a);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return n.a.createElement("i", {
					className: `${Object(o.b)(t?"gif_post":"gif",e.isFilled)} ${e.className}`
				})
			}, "GifIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Link/index.m.less": function(e, t, s) {
			e.exports = {
				LinkIcon: "_1UzGujIvFbQUgWI4gO6QeD",
				linkIcon: "_1UzGujIvFbQUgWI4gO6QeD"
			}
		},
		"./src/reddit/icons/fonts/Link/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Link/index.m.less"),
				c = s.n(a);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return n.a.createElement("i", {
					className: `${Object(o.b)(t?"link_post":"link",e.isFilled)} ${e.className}`
				})
			}, "LinkIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => {
				const t = Object(r.a)();
				return n.a.createElement("i", {
					className: `${Object(o.b)(t?"external_link":"outboundLink",e.isFilled)} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Photos/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				c = s.n(a);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return n.a.createElement("i", {
					className: `${Object(o.b)(t?"image_post":"photos",e.isFilled)} ${e.className}`
				})
			}, "PhotoIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/fonts/Text/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Text/index.m.less"),
				c = s.n(a);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return n.a.createElement("i", {
					className: `${Object(o.b)(t?"text_post":"text",e.isFilled)} ${e.className}`
				})
			}, "TextIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => n.a.createElement("i", {
				className: Object(r.a)(Object(o.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? n.a.createElement("span", l({}, s, {
				className: Object(r.a)(c.a.compactUpvoteWrapper, s.className)
			}), n.a.createElement(d, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : n.a.createElement("span", l({}, s, {
				className: Object(r.a)(c.a.upvoteWrapper, s.className)
			}), n.a.createElement(d, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Video/index.m.less": function(e, t, s) {
			e.exports = {
				VideoIcon: "_1q4uVersxe3LOuom7R34bx",
				videoIcon: "_1q4uVersxe3LOuom7R34bx"
			}
		},
		"./src/reddit/icons/fonts/Video/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Video/index.m.less"),
				a = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("video",e.isFilled)} ${e.className}`
			}), "VideoIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => i.bc.Enabled === Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: i.Vb
			})
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/config.ts"),
				n = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/actions/jsApi.ts");
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
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(r.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(l.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(o, `${i.a.redditUrl}${c}`, e))
					} catch (s) {
						return void console.error(o, `${i.a.redditUrl}${c}`, s)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, s) {
					const i = {
						name: e,
						props: t,
						element: s
					};
					this.queue.push(i), this.queue.length > d && this.queue.shift(), this.active && this.fireEvent(i)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~redd~b7d82fac.c9492a757884189c6375.js.map