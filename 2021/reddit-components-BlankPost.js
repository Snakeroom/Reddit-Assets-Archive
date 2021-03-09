// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.9a4994de6773d381b208.js
// Retrieved at 3/9/2021, 3:40:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return I
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

			function l(e) {
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
							l = t[3];
						return r + " " + s + " " + d + " " + (void 0 === l ? s : l)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = d.keys(); t = s.next().value;) {
					if (!(i !== t.root || r !== t.rootMargin || a(n, t.thresholds))) return t
				}
				return null
			}

			function u(e, t) {
				var i = d.get(e);
				if (i)
					for (var r, n = i.values(); r = n.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function c(e, t) {
				for (var i = 0; i < e.length; i++) {
					var r = u(t, e[i]);
					r && r.handleChange(e[i])
				}
			}

			function h(e) {
				return l(e) || new IntersectionObserver(c, e)
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

			function g(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function y(e, t, i) {
				return t in e ? Object.defineProperty(e, t, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = i, e
			}
			var f = ["root", "rootMargin", "threshold"],
				w = ["root", "rootMargin", "threshold", "disabled"],
				V = Object.prototype,
				T = V.hasOwnProperty,
				S = V.toString,
				j = function(e) {
					return f.reduce((function(t, i) {
						if (T.call(e, i)) {
							var r = "root" === i && "[object String]" === S.call(e[i]);
							t[i] = r ? document.querySelector(e[i]) : e[i]
						}
						return t
					}), {})
				},
				I = function(e) {
					var t, i;

					function r() {
						for (var t, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
						return y(g(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), y(g(t), "handleNode", (function(e) {
							var i = t.props.children;
							if (null != i) {
								var r = i.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(s.findDOMNode)(e)
						})), y(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = h(j(t.props)), t.target = t.targetNode, e = g(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), y(g(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var i = d.get(e.observer);
									i.delete(e) && (i.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(g(t), e)
						})), y(g(t), "externalUnobserve", (function() {
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
			y(I, "displayName", "IntersectionObserver")
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
					setState: l
				} = Object(r.a)(o()),
				u = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				c = () => l(o());
			(() => {
				const e = (() => {
					if (!n()) return;
					const e = Object.keys(u).find(e => e in document);
					return e ? u[e] : void 0
				})();
				e && document.addEventListener(e, c)
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
				l = i("./src/lib/ads/index.ts"),
				u = i("./src/lib/ads/store.ts"),
				c = i("./src/lib/onFocusAndVisibilityChange/index.ts"),
				h = i("./src/reddit/connectors/PostViewable/index.ts"),
				m = i("./src/reddit/constants/adEvents.ts"),
				p = i("./src/reddit/selectors/media.ts"),
				b = i("./src/reddit/selectors/video.ts");
			const v = [{
					event: m.a.ViewableImpression,
					threshold: l.l,
					viewabilityMinimum: l.m
				}, {
					event: m.a.Impression,
					threshold: l.c,
					viewabilityMinimum: l.d
				}, {
					event: m.a.GalleryItemImpression,
					threshold: l.c,
					viewabilityMinimum: l.d
				}, {
					event: m.a.VendorFullyInView,
					threshold: l.b,
					viewabilityMinimum: l.f
				}, {
					event: m.a.GroupMViewable,
					threshold: l.b,
					viewabilityMinimum: l.m
				}, {
					event: m.a.VendorFullyInViewSeconds5,
					threshold: l.l,
					viewabilityMinimum: l.h,
					remainingTime: l.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: m.a.VendorFullyInViewSeconds15,
					threshold: l.l,
					viewabilityMinimum: l.g,
					remainingTime: l.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = [{
					event: m.a.VideoViewableImpression,
					threshold: l.l,
					viewabilityMinimum: l.k,
					remainingTime: l.k,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoFullyViewableImpression,
					threshold: l.a,
					viewabilityMinimum: l.i,
					remainingTime: l.i,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: l.k,
					remainingTime: l.k,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: m.a.VideoVendorFullyViewable50,
					threshold: l.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				y = e => e.map(({
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
				f = () => y(v),
				w = () => y(g),
				V = [l.c, l.e, l.l, l.j, l.a, l.b],
				T = [l.c, l.l, l.j, l.a],
				S = [l.c, l.e, l.l, l.b],
				j = e => "boolean" == typeof e.cumulative && e.cumulative,
				I = Object(a.c)({
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(b.c)(e, {
						postId: t.id
					}),
					videoDuration: (e, {
						post: t
					}) => {
						const i = Object(b.j)(e, {
							postId: t.id
						});
						if (i) return i.length
					},
					isAudible: e => Object(p.a)(e),
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
				O = Object(h.a)(I);
			class _ extends s.Component {
				constructor(e) {
					super(e), this.viewabilityStats = f(), this.videoStats = w(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
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
					this.visibilityChangeSubscriptionId = c.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: i
					} = this.props;
					this.visibilityChangeSubscriptionId && c.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (u.d(e.id, l.r, !1), this.viewabilityStats.forEach(e => {
						j(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), i && (u.d(e.id, l.p, !0), this.videoStats.forEach(e => {
						j(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
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
					!n()(s, this.inViewStats) && s.length > 0 && u.b(r.id, s, i);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(o, this.outOfViewStats) && o.length > 0 && u.d(r.id, o, i), this.outOfViewStats = o, this.inViewStats = s
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, l.g) : e.viewabilityMinimum = l.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: i,
						width: r
					} = e.boundingClientRect;
					return !t.threshold && t.event === m.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * i < 3e5 ? l.a : l.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === m.a.GroupMViewable && r * i > 242500 && (t.threshold = l.l), t
				}
				checkViewability(e, t) {
					if (j(t) && t.event === m.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						j(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					return e && !t ? i = S : !e && t && (i = T), o.a.createElement(d.a, {
						threshold: i,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = O(_)
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "BlankPost", (function() {
				return u
			}));
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				s = i("./src/reddit/components/AdViewability/index.tsx"),
				o = i("./src/reddit/connectors/PostViewable/index.ts"),
				a = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/contexts/Post/index.tsx");
			const l = Object(o.a)(null),
				u = ({
					className: e,
					post: t
				}) => t.isSponsored ? n.a.createElement(s.a, {
					post: t,
					trackDisplay: !0
				}, n.a.createElement("div", {
					className: Object(a.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(d.b)(l(u))
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
				return p
			})), i.d(t, "d", (function() {
				return b
			})), i.d(t, "b", (function() {
				return v
			}));
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				s = i("./node_modules/react-redux/es/index.js"),
				o = i("./src/reddit/constants/posts.ts"),
				a = i("./src/reddit/models/User/index.ts"),
				d = i("./src/reddit/selectors/posts.ts"),
				l = i("./src/reddit/selectors/subreddit.ts"),
				u = i("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = n.a.createContext(null);

			function m(e) {
				const t = Object(s.e)(t => Object(d.I)(t, {
						postId: e
					})),
					i = Object(s.e)(e => Object(u.i)(e)),
					r = Object(s.e)(e => t ? Object(l.L)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? r : null,
					c = !(!i || (null == t ? void 0 : t.author) !== Object(a.e)(i));
				return Object(s.e)(s => ({
					currentUser: i,
					isModerator: !(!n || !s.moderatingSubreddits[n.name]),
					post: t,
					postId: e,
					subreddit: n,
					subredditOrProfile: r,
					userIsOp: c
				}), s.c)
			}

			function p(e) {
				const {
					postId: t,
					children: i
				} = e, r = m(t);
				return n.a.createElement(h.Provider, {
					value: r
				}, i)
			}

			function b(e) {
				const t = e.displayName || e.name;

				function i(i) {
					return n.a.createElement(h.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, c({}, i, r))
					})
				}
				return i.displayName = `PostContext(${t})`, i
			}

			function v(e) {
				const t = e.displayName || e.name;

				function i(t) {
					const i = m(t.postId);
					return n.a.createElement(h.Provider, {
						value: i
					}, n.a.createElement(e, c({}, t, i)))
				}
				return i.displayName = `PostProvider(${t})`, i
			}
			t.c = h
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.9a4994de6773d381b208.js.map