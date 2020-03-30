// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.4095cdb245cc41656458.js
// Retrieved at 3/30/2020, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				o = i("./node_modules/react-dom/index.js"),
				s = (i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(i, r) {
					return a(e[r], t[r])
				})) : e !== t
			}
			var l = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, i = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!s.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							i = t[0],
							r = void 0 === i ? "0px" : i,
							n = t[1],
							o = void 0 === n ? r : n,
							a = t[2],
							l = void 0 === a ? r : a,
							d = t[3];
						return r + " " + o + " " + l + " " + (void 0 === d ? o : d)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], o = l.keys(); t = o.next().value;) {
					if (!(i !== t.root || r !== t.rootMargin || a(n, t.thresholds))) return t
				}
				return null
			}

			function c(e, t) {
				var i = l.get(e);
				if (i)
					for (var r, n = i.values(); r = n.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function u(e, t) {
				for (var i = 0; i < e.length; i++) {
					var r = c(t, e[i]);
					r && r.handleChange(e[i])
				}
			}

			function h(e) {
				return d(e) || new IntersectionObserver(u, e)
			}
			var m = i("./node_modules/invariant/browser.js"),
				p = i.n(m),
				v = {},
				b = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return v.errorReporter || function(e) {
								return p()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							v.errorReporter = e
						}
					}
				});

			function w(e) {
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
			var f = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				V = Object.prototype,
				T = V.hasOwnProperty,
				_ = V.toString,
				x = function(e) {
					return f.reduce((function(t, i) {
						if (T.call(e, i)) {
							var r = "root" === i && "[object String]" === _.call(e[i]);
							t[i] = r ? document.querySelector(e[i]) : e[i]
						}
						return t
					}), {})
				},
				S = function(e) {
					var t, i;

					function r() {
						for (var t, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
						return g(w(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), g(w(t), "handleNode", (function(e) {
							var i = t.props.children;
							if (null != i) {
								var r = i.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), g(w(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = h(x(t.props)), t.target = t.targetNode, e = w(t), l.has(e.observer) || l.set(e.observer, new Set), l.get(e.observer).add(e), e.observer.observe(e.target), !0) : (b.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(w(t), "unobserve", (function(e) {
							! function(e, t) {
								if (l.has(e.observer)) {
									var i = l.get(e.observer);
									i.delete(e) && (i.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), l.delete(e.observer)))
								}
							}(w(t), e)
						})), g(w(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					i = e, (t = r).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i;
					var s = r.prototype;
					return s.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var i = y.some((function(i) {
							return a(t.props[i], e[i])
						}));
						return i && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), i
					}, s.componentDidUpdate = function(e, t, i) {
						var r = !1;
						i || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (i || r) && this.observe()
					}, s.componentDidMount = function() {
						this.observe()
					}, s.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, s.render = function() {
						var e = this.props.children;
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(n.a.Component);
			g(S, "displayName", "IntersectionObserver"), i.d(t, "a", (function() {
				return S
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function o() {}
			o.resetWarningCache = n, e.exports = function() {
				function e(e, t, i, n, o, s) {
					if (s !== r) {
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
					checkPropTypes: o,
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
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			}));
			var r = i("./node_modules/lodash/isEqual.js"),
				n = i.n(r),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				a = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				l = i("./src/reddit/constants/adViewability.ts"),
				d = i("./src/reddit/constants/viewabilityEvents.ts");
			const c = e => "boolean" == typeof e.cumulative;
			class u extends o.Component {
				constructor(e) {
					super(e), this.viewableImpression = {
						timer: null,
						event: d.a.Viewable,
						threshold: l.j,
						viewabilityMinimum: l.k,
						fired: !1,
						timeViewingInitialized: 0
					}, this.impression = {
						timer: null,
						event: d.a.Impression,
						threshold: l.c,
						viewabilityMinimum: l.d,
						fired: !1,
						timeViewingInitialized: 0
					}, this.groupM = {
						timer: null,
						event: d.a.GroupMViewable,
						threshold: l.a,
						viewabilityMinimum: l.k,
						fired: !1,
						timeViewingInitialized: 0,
						checkAdSize: !0
					}, this.vendorFullyViewable = {
						timer: null,
						event: d.a.VendorFullyViewable,
						threshold: l.a,
						viewabilityMinimum: l.h,
						fired: !1,
						timeViewingInitialized: 0
					}, this.vendorFullyViewableSeconds5 = {
						timer: null,
						event: d.a.VendorFullyViewableSeconds5,
						threshold: l.j,
						viewabilityMinimum: l.g,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: l.g,
						timeViewingInterrupted: 0,
						cumulative: !0,
						cumulativeElapsedTime: 0
					}, this.vendorFullyViewableSeconds15 = {
						timer: null,
						event: d.a.VendorFullyViewableSeconds15,
						threshold: l.j,
						viewabilityMinimum: l.f,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: l.f,
						timeViewingInterrupted: 0,
						cumulative: !0,
						cumulativeElapsedTime: 0
					}, this.videoViewable = {
						timer: null,
						event: d.a.VideoViewable,
						threshold: l.j,
						viewabilityMinimum: l.i,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: l.i,
						timeViewingInterrupted: 0
					}, this.videoFullyViewable = {
						timer: null,
						event: d.a.VideoFullyViewable,
						threshold: l.a,
						viewabilityMinimum: l.b,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: l.b,
						timeViewingInterrupted: 0
					}, this.handleViewabilityChange = e => {
						this.checkViewabilityByType(e), this.handleThresholds(e)
					}, this.checkViewabilityByType = e => {
						n()(this.state.event, e) || this.setState({
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
					const i = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = e.viewabilityMinimum - i, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = e.viewabilityMinimum - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer))
				}
				handleThresholds(e) {
					const {
						pixelPostHasEnteredView: t,
						pixelPostHasExitedView: i
					} = this.props, r = l.e.filter(t => this.isAdequatelyInView(e, t));
					r.length > 0 && t(r);
					const n = l.e.filter(t => !this.isAdequatelyInView(e, t));
					n.length > 0 && i(n)
				}
				isAdequatelyInView(e, t) {
					return !!e && e.isIntersecting && e.intersectionRatio >= t
				}
				checkViewability(e, t) {
					if (t.checkAdSize && e && e.target) {
						const {
							height: i,
							width: r
						} = e.boundingClientRect;
						r * i > 242500 && (t.threshold = l.j)
					}
					if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
						const e = this.getLengthForTimer(t);
						return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
					}
					c(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t.timer)
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
					return s.a.createElement(a.a, {
						threshold: l.e,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "BlankPost", (function() {
				return u
			}));
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				o = i("./node_modules/reselect/es/index.js"),
				s = i("./src/reddit/components/AdViewability/index.tsx"),
				a = i("./src/reddit/connectors/PostViewable/index.ts"),
				l = i("./src/reddit/selectors/posts.ts"),
				d = i("./src/lib/classNames/index.ts");
			const c = Object(a.a)(() => Object(o.c)({
					post: l.N
				})),
				u = e => {
					let {
						className: t,
						post: i,
						onPostViewable: r,
						pixelPostHasEnteredView: o,
						pixelPostHasExitedView: a
					} = e;
					return i.isSponsored ? n.a.createElement(s.a, {
						onViewable: e => r(i, e),
						pixelPostHasEnteredView: e => o(i, e),
						pixelPostHasExitedView: e => a(i, e),
						trackVideoMetrics: !1
					}, n.a.createElement("div", {
						className: Object(d.a)(t, "Blank ".concat(i.id))
					})) : null
				};
			t.default = c(u)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react-redux/es/index.js"),
				n = i("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return Object.assign({}, e, {
					onPostViewable: n.R,
					pixelPostHasEnteredView: n.C,
					pixelPostHasExitedView: n.D
				})
			}(t))
		}
	}
]);
//# sourceMappingURL=reddit-components-BlankPost.4095cdb245cc41656458.js.map