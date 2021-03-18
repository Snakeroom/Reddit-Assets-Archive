// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.7b56389a93d25256815c.js
// Retrieved at 3/18/2021, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return O
			}));
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				s = i("./node_modules/react-dom/index.js"),
				o = (i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(i, r) {
					return a(e[r], t[r])
				})) : e !== t
			}
			var d = new Map;

			function u(e) {
				void 0 === e && (e = {});
				for (var t, i = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!o.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							i = t[0],
							r = void 0 === i ? "0px" : i,
							n = t[1],
							s = void 0 === n ? r : n,
							a = t[2],
							d = void 0 === a ? r : a,
							u = t[3];
						return r + " " + s + " " + d + " " + (void 0 === u ? s : u)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = d.keys(); t = s.next().value;) {
					if (!(i !== t.root || r !== t.rootMargin || a(n, t.thresholds))) return t
				}
				return null
			}

			function c(e, t) {
				var i = d.get(e);
				if (i)
					for (var r, n = i.values(); r = n.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function l(e, t) {
				for (var i = 0; i < e.length; i++) {
					var r = c(t, e[i]);
					r && r.handleChange(e[i])
				}
			}

			function h(e) {
				return u(e) || new IntersectionObserver(l, e)
			}
			var m = i("./node_modules/invariant/browser.js"),
				p = i.n(m),
				b = {},
				v = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return b.errorReporter || function(e) {
								return p()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							b.errorReporter = e
						}
					}
				});

			function f(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function g(e, t, i) {
				return t in e ? Object.defineProperty(e, t, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = i, e
			}
			var y = ["root", "rootMargin", "threshold"],
				w = ["root", "rootMargin", "threshold", "disabled"],
				V = Object.prototype,
				j = V.hasOwnProperty,
				T = V.toString,
				x = function(e) {
					return y.reduce((function(t, i) {
						if (j.call(e, i)) {
							var r = "root" === i && "[object String]" === T.call(e[i]);
							t[i] = r ? document.querySelector(e[i]) : e[i]
						}
						return t
					}), {})
				},
				O = function(e) {
					var t, i;

					function r() {
						for (var t, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
						return g(f(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), g(f(t), "handleNode", (function(e) {
							var i = t.props.children;
							if (null != i) {
								var r = i.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(s.findDOMNode)(e)
						})), g(f(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = h(x(t.props)), t.target = t.targetNode, e = f(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(f(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var i = d.get(e.observer);
									i.delete(e) && (i.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(f(t), e)
						})), g(f(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					i = e, (t = r).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i;
					var o = r.prototype;
					return o.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var i = w.some((function(i) {
							return a(t.props[i], e[i])
						}));
						return i && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), i
					}, o.componentDidUpdate = function(e, t, i) {
						var r = !1;
						i || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (i || r) && this.observe()
					}, o.componentDidMount = function() {
						this.observe()
					}, o.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, o.render = function() {
						var e = this.props.children;
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(n.a.Component);
			g(O, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function s() {}
			s.resetWarningCache = n, e.exports = function() {
				function e(e, t, i, n, s, o) {
					if (o !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var i = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: s,
					resetWarningCache: n
				};
				return i.PropTypes = i, i
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, i) {
			e.exports = i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, i) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = i("./node_modules/brcast/dist/brcast.es.js");
			const n = () => "undefined" != typeof document,
				s = () => n() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: s()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: u
				} = Object(r.a)(o()),
				c = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				l = () => u(o());
			(() => {
				const e = (() => {
					if (!n()) return;
					const e = Object.keys(c).find(e => e in document);
					return e ? c[e] : void 0
				})();
				e && document.addEventListener(e, l)
			})(), t.a = {
				isDocumentHidden: () => !s(),
				isDocumentVisible: s,
				subscribe: a,
				unsubscribe: d
			}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/lodash/isEqual.js"),
				n = i.n(r),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				u = i("./src/lib/ads/index.ts"),
				c = i("./src/lib/ads/store.ts"),
				l = i("./src/lib/onFocusAndVisibilityChange/index.ts"),
				h = i("./src/reddit/connectors/PostViewable/index.ts"),
				m = i("./src/reddit/constants/adEvents.ts"),
				p = i("./src/reddit/selectors/media.ts"),
				b = i("./src/reddit/selectors/video.ts");
			const v = [{
					event: m.a.ViewableImpression,
					threshold: u.l,
					viewabilityMinimum: u.m
				}, {
					event: m.a.Impression,
					threshold: u.c,
					viewabilityMinimum: u.d
				}, {
					event: m.a.GalleryItemImpression,
					threshold: u.c,
					viewabilityMinimum: u.d
				}, {
					event: m.a.VendorFullyInView,
					threshold: u.b,
					viewabilityMinimum: u.f
				}, {
					event: m.a.GroupMViewable,
					threshold: u.b,
					viewabilityMinimum: u.m
				}, {
					event: m.a.VendorFullyInViewSeconds5,
					threshold: u.l,
					viewabilityMinimum: u.h,
					remainingTime: u.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: m.a.VendorFullyInViewSeconds15,
					threshold: u.l,
					viewabilityMinimum: u.g,
					remainingTime: u.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				f = [{
					event: m.a.VideoViewableImpression,
					threshold: u.l,
					viewabilityMinimum: u.k,
					remainingTime: u.k,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoFullyViewableImpression,
					threshold: u.a,
					viewabilityMinimum: u.i,
					remainingTime: u.i,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: u.k,
					remainingTime: u.k,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: m.a.VideoVendorFullyViewable50,
					threshold: u.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: i,
					remainingTime: r,
					threshold: n = null,
					viewabilityMinimum: s,
					checkAudible: o = !1,
					timeViewingInterrupted: a
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: o,
					timer: null,
					fired: !1,
					threshold: n,
					remainingTime: r,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: s,
					timeViewingInitialized: 0,
					timeViewingInterrupted: a
				})),
				y = () => g(v),
				w = () => g(f),
				V = [u.c, u.e, u.l, u.j, u.a, u.b],
				j = [u.c, u.l, u.j, u.a],
				T = [u.c, u.e, u.l, u.b],
				x = e => "boolean" == typeof e.cumulative && e.cumulative,
				O = Object(a.c)({
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(b.b)(e, {
						postId: t.id
					}),
					videoDuration: (e, {
						post: t
					}) => {
						const i = Object(b.h)(e, {
							postId: t.id
						});
						if (i) return i.length
					},
					isAudible: e => Object(p.a)(e),
					isPlaying: (e, {
						post: t
					}) => Object(b.d)(e, {
						postId: t.id
					}),
					isFullScreen: (e, {
						post: t
					}) => Object(b.e)(e, {
						postId: t.id
					})
				}),
				S = Object(h.a)(O);
			class I extends s.Component {
				constructor(e) {
					super(e), this.viewabilityStats = y(), this.videoStats = w(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, u.r), this.props.trackVideo && this.handleThresholds(e, u.p, !0), this.checkViewabilityByType(e)
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
					this.visibilityChangeSubscriptionId = l.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: i
					} = this.props;
					this.visibilityChangeSubscriptionId && l.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (c.d(e.id, u.r, !1), this.viewabilityStats.forEach(e => {
						x(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), i && (c.d(e.id, u.p, !0), this.videoStats.forEach(e => {
						x(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, u.p, !0), this.videoStats.forEach(e => {
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
					const i = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - i, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let i, r = !1,
						n = !1;
					return "object" == typeof t ? (i = t.threshold, r = !!t.playing, n = !!t.withSound) : i = t, this.isAdequatelyInView(e, i) && (!r || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t, i = !1) {
					const {
						post: r
					} = this.props, s = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(s, this.inViewStats) && s.length > 0 && c.b(r.id, s, i);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(o, this.outOfViewStats) && o.length > 0 && c.d(r.id, o, i), this.outOfViewStats = o, this.inViewStats = s
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, u.g) : e.viewabilityMinimum = u.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: i,
						width: r
					} = e.boundingClientRect;
					return !t.threshold && t.event === m.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * i < 3e5 ? u.a : u.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === m.a.GroupMViewable && r * i > 242500 && (t.threshold = u.l), t
				}
				checkViewability(e, t) {
					if (x(t) && t.event === m.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						x(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					let i = V;
					return e && !t ? i = T : !e && t && (i = j), o.a.createElement(d.a, {
						threshold: i,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = S(I)
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "BlankPost", (function() {
				return c
			}));
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				s = i("./src/reddit/components/AdViewability/index.tsx"),
				o = i("./src/reddit/connectors/PostViewable/index.ts"),
				a = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/contexts/Post/index.tsx");
			const u = Object(o.a)(null),
				c = ({
					className: e,
					post: t
				}) => t.isSponsored ? n.a.createElement(s.a, {
					post: t,
					trackDisplay: !0
				}, n.a.createElement("div", {
					className: Object(a.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(d.b)(u(c))
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react-redux/es/index.js"),
				n = i("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: n.J
			}))(t))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return b
			})), i.d(t, "d", (function() {
				return v
			})), i.d(t, "b", (function() {
				return f
			}));
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				s = i("./node_modules/react-redux/es/index.js"),
				o = i("./src/reddit/constants/posts.ts"),
				a = i("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = i("./src/reddit/hooks/useUserContext.ts"),
				u = i("./src/reddit/models/User/index.ts"),
				c = i("./src/reddit/selectors/posts.ts"),
				l = i("./src/reddit/selectors/subreddit.ts");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n.a.createContext(null);

			function p(e) {
				const t = Object(s.e)(t => Object(c.D)(t, {
						postId: e
					})),
					{
						currentUser: i
					} = Object(d.a)(),
					r = Object(s.e)(e => t ? Object(l.L)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? r : null,
					h = !(!i || (null == t ? void 0 : t.author) !== Object(u.e)(i)),
					m = Object(s.e)(s => ({
						currentUser: i,
						imageGalleryCurrentItem: Object(c.i)(s, {
							postId: e
						}),
						isModerator: !(!n || !s.moderatingSubreddits[n.name]),
						post: t,
						postId: e,
						subreddit: n,
						subredditOrProfile: r,
						userIsOp: h
					}));
				return Object(a.a)(m)
			}

			function b(e) {
				const {
					postId: t,
					children: i
				} = e, r = p(t);
				return n.a.createElement(m.Provider, {
					value: r
				}, i)
			}

			function v(e) {
				const t = e.displayName || e.name;

				function i(i) {
					return n.a.createElement(m.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, h({}, i, r))
					})
				}
				return i.displayName = `PostContext(${t})`, i
			}

			function f(e) {
				const t = e.displayName || e.name;

				function i(t) {
					const i = p(t.postId);
					return n.a.createElement(m.Provider, {
						value: i
					}, n.a.createElement(e, h({}, t, i)))
				}
				return i.displayName = `PostProvider(${t})`, i
			}
			t.c = m
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
			})), i.d(t, "b", (function() {
				return h
			})), i.d(t, "c", (function() {
				return m
			}));
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				s = i("./node_modules/react-redux/es/index.js"),
				o = i("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = i("./src/reddit/reducers/user/prefs/index.ts"),
				d = i("./src/reddit/selectors/user.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = n.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function l() {
				const e = Object(s.e)(e => ({
					currentUser: Object(d.i)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.V)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.J)(e)
				}));
				return Object(o.a)(e)
			}

			function h(e) {
				return n.a.createElement(c.Provider, {
					value: l()
				}, e.children)
			}

			function m(e) {
				const t = e.displayName || e.name;

				function i(t) {
					return n.a.createElement(c.Consumer, null, i => n.a.createElement(e, u({}, t, i)))
				}
				return i.displayName = `UserContext(${t})`, i
			}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var r = i("./node_modules/react/index.js"),
				n = i("./node_modules/react-redux/es/index.js");

			function s(e) {
				const t = Object(r.useRef)(e);
				return t.current === e || Object(n.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var r = i("./node_modules/react/index.js"),
				n = i("./src/reddit/contexts/User/index.tsx");

			function s() {
				return Object(r.useContext)(n.a)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.7b56389a93d25256815c.js.map