// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.0345c951ed320351640a.js
// Retrieved at 1/27/2020, 2:10:16 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				o = i("./node_modules/react-dom/index.js");
			i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), i("./node_modules/invariant/browser.js");

			function s(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(i, r) {
					return s(e[r], t[r])
				})) : e !== t
			}

			function a() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.root || null,
					i = function(e) {
						var t = /^-?\d*\.?\d+(px|%)$/,
							i = (e || "0px").split(/\s+/).map((function(e) {
								if (!t.test(e)) throw new Error("rootMargin must be specified in pixels or percent");
								return e
							}));
						return i[1] = i[1] || i[0], i[2] = i[2] || i[0], i[3] = i[3] || i[1], i.join(" ")
					}(e.rootMargin),
					r = Array.isArray(e.threshold) ? e.threshold : [void 0 !== e.threshold ? e.threshold : 0],
					n = c.keys(),
					o = Array.isArray(n),
					a = 0;
				for (n = o ? n : n[Symbol.iterator]();;) {
					var l;
					if (o) {
						if (a >= n.length) break;
						l = n[a++]
					} else {
						if ((a = n.next()).done) break;
						l = a.value
					}
					var d = l;
					if (![
							[t, d.root],
							[i, d.rootMargin],
							[r, d.thresholds]
						].some((function(e) {
							return s.apply(void 0, e)
						}))) return d
				}
				return null
			}
			var c = new Map,
				l = function() {
					function e() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e)
					}
					return e.create = function(e, t) {
						return a(t) || new IntersectionObserver(e, t)
					}, e.findElement = function(e, t) {
						var i = c.get(t);
						if (i) {
							var r = i.values(),
								n = Array.isArray(r),
								o = 0;
							for (r = n ? r : r[Symbol.iterator]();;) {
								var s;
								if (n) {
									if (o >= r.length) break;
									s = r[o++]
								} else {
									if ((o = r.next()).done) break;
									s = o.value
								}
								var a = s;
								if (a.target === e.target) return a
							}
						}
						return null
					}, e.observe = function(e) {
						var t = void 0;
						c.has(e.observer) ? t = c.get(e.observer) : (t = new Set, c.set(e.observer, t)), t.add(e), e.observer.observe(e.target)
					}, e.unobserve = function(e) {
						if (c.has(e.observer)) {
							var t = c.get(e.observer);
							t.delete(e) && (t.size > 0 ? e.observer.unobserve(e.target) : (e.observer.disconnect(), c.delete(e.observer)))
						}
					}, e.clear = function() {
						c.clear()
					}, e.count = function() {
						return c.size
					}, e
				}(),
				d = function() {
					function e(e, t) {
						for (var i = 0; i < t.length; i++) {
							var r = t[i];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, i, r) {
						return i && e(t.prototype, i), r && e(t, r), t
					}
				}();

			function u(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function p(e, t) {
				e.forEach((function(e) {
					var i = l.findElement(e, t);
					i && i.handleChange(e)
				}))
			}
			var h = ["root", "rootMargin", "threshold"],
				m = Object.prototype,
				b = function(e) {
					function t() {
						var i, r;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var n = arguments.length, o = Array(n), s = 0; s < n; s++) o[s] = arguments[s];
						return i = r = u(this, e.call.apply(e, [this].concat(o))), r.handleChange = function(e) {
							r.props.onChange(e), r.props.onlyOnce && e.isIntersecting && r.unobserve()
						}, r.handleNode = function(e) {
							"function" == typeof r.props.children.ref && r.props.children.ref(e), r.currentTarget && e && r.currentTarget !== e && (r.unobserve(), r.shouldResetObserver = !0), r.target = e
						}, u(r, i)
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t.prototype.observe = function() {
						var e;
						this.target = (e = this.target, n.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(o.findDOMNode)(this.target)), this.observer = l.create(p, this.options), l.observe(this)
					}, t.prototype.unobserve = function() {
						l.unobserve(this)
					}, t.prototype.reobserve = function() {
						this.unobserve(), this.props.disabled || this.observe()
					}, t.prototype.componentDidMount = function() {
						this.props.disabled || this.observe()
					}, t.prototype.componentWillUnmount = function() {
						this.unobserve()
					}, t.prototype.componentDidUpdate = function() {
						this.shouldResetObserver && this.reobserve()
					}, t.prototype.componentWillUpdate = function(e) {
						var t = this;
						this.shouldResetObserver = h.concat(["disabled"]).some((function(i) {
							return s(e[i], t.props[i])
						}))
					}, t.prototype.render = function() {
						return this.currentTarget = this.target, n.a.cloneElement(n.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, d(t, [{
						key: "options",
						get: function() {
							var e = this;
							return h.reduce((function(t, i) {
								if (m.hasOwnProperty.call(e.props, i)) {
									var r, n = e.props[i];
									return "root" === i && "[object String]" === m.toString.call(e.props[i]) && (n = document.querySelector(n)), Object.assign({}, t, ((r = {})[i] = n, r))
								}
								return t
							}), {})
						}
					}]), t
				}(n.a.Component);
			b.displayName = "IntersectionObserver";
			var f = b;
			i.d(t, "a", (function() {
				return f
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
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
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return i.checkPropTypes = n, i.PropTypes = i, i
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
				return v
			}));
			var r = i("./node_modules/lodash/isEqual.js"),
				n = i.n(r),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				a = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = i("./src/reddit/constants/viewabilityEvents.ts");
			const l = .01,
				d = .5,
				u = 1,
				p = [d, u, l],
				h = 1e3,
				m = 0,
				b = 2e3,
				f = 3e3;
			class v extends o.Component {
				constructor(e) {
					super(e), this.viewableImpression = {
						timer: null,
						event: c.a.Viewable,
						threshold: d,
						viewabilityMinimum: h,
						fired: !1,
						timeViewingInitialized: 0
					}, this.impression = {
						timer: null,
						event: c.a.Impression,
						threshold: l,
						viewabilityMinimum: m,
						fired: !1,
						timeViewingInitialized: 0
					}, this.videoViewable = {
						timer: null,
						event: c.a.VideoViewable,
						threshold: d,
						viewabilityMinimum: b,
						fired: !1,
						timeViewingInitialized: 0,
						elapsedTime: 0,
						remainingTime: b,
						timeViewingInterrupted: 0
					}, this.videoFullyViewable = {
						timer: null,
						event: c.a.VideoFullyViewable,
						threshold: u,
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
					return s.a.createElement(a.a, {
						threshold: p,
						onChange: this.handleViewabilityChange,
						disabled: this.viewableImpression.fired && this.videoViewable.fired && this.impression.fired && this.videoFullyViewable.fired || this.viewableImpression.fired && this.impression.fired && !this.props.trackVideoMetrics
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
				c = i("./src/reddit/selectors/posts.ts"),
				l = i("./src/lib/classNames/index.ts");
			const d = Object(a.a)(() => Object(o.c)({
					post: c.I
				})),
				u = e => {
					let {
						className: t,
						post: i,
						onPostViewable: r
					} = e;
					return i.isSponsored ? n.a.createElement(s.a, {
						onViewable: e => r(i, e),
						children: n.a.createElement("div", {
							className: Object(l.a)(t, "Blank ".concat(i.id))
						}),
						trackVideoMetrics: !1
					}) : null
				};
			t.default = d(u)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react-redux/es/index.js"),
				n = i("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return Object.assign({}, e, {
					onPostViewable: n.C
				})
			}(t))
		}
	}
]);
//# sourceMappingURL=reddit-components-BlankPost.0345c951ed320351640a.js.map