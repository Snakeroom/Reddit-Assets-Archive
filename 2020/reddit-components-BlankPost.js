// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.c75342259af05d916b3c.js
// Retrieved at 2/24/2020, 1:00:20 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				s = i("./node_modules/react-dom/index.js");
			i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), i("./node_modules/invariant/browser.js");

			function o(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(i, r) {
					return o(e[r], t[r])
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
					n = l.keys(),
					s = Array.isArray(n),
					a = 0;
				for (n = s ? n : n[Symbol.iterator]();;) {
					var c;
					if (s) {
						if (a >= n.length) break;
						c = n[a++]
					} else {
						if ((a = n.next()).done) break;
						c = a.value
					}
					var u = c;
					if (![
							[t, u.root],
							[i, u.rootMargin],
							[r, u.thresholds]
						].some((function(e) {
							return o.apply(void 0, e)
						}))) return u
				}
				return null
			}
			var l = new Map,
				c = function() {
					function e() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e)
					}
					return e.create = function(e, t) {
						return a(t) || new IntersectionObserver(e, t)
					}, e.findElement = function(e, t) {
						var i = l.get(t);
						if (i) {
							var r = i.values(),
								n = Array.isArray(r),
								s = 0;
							for (r = n ? r : r[Symbol.iterator]();;) {
								var o;
								if (n) {
									if (s >= r.length) break;
									o = r[s++]
								} else {
									if ((s = r.next()).done) break;
									o = s.value
								}
								var a = o;
								if (a.target === e.target) return a
							}
						}
						return null
					}, e.observe = function(e) {
						var t = void 0;
						l.has(e.observer) ? t = l.get(e.observer) : (t = new Set, l.set(e.observer, t)), t.add(e), e.observer.observe(e.target)
					}, e.unobserve = function(e) {
						if (l.has(e.observer)) {
							var t = l.get(e.observer);
							t.delete(e) && (t.size > 0 ? e.observer.unobserve(e.target) : (e.observer.disconnect(), l.delete(e.observer)))
						}
					}, e.clear = function() {
						l.clear()
					}, e.count = function() {
						return l.size
					}, e
				}(),
				u = function() {
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

			function d(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function h(e, t) {
				e.forEach((function(e) {
					var i = c.findElement(e, t);
					i && i.handleChange(e)
				}))
			}
			var p = ["root", "rootMargin", "threshold"],
				m = Object.prototype,
				b = function(e) {
					function t() {
						var i, r;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var n = arguments.length, s = Array(n), o = 0; o < n; o++) s[o] = arguments[o];
						return i = r = d(this, e.call.apply(e, [this].concat(s))), r.handleChange = function(e) {
							r.props.onChange(e), r.props.onlyOnce && e.isIntersecting && r.unobserve()
						}, r.handleNode = function(e) {
							"function" == typeof r.props.children.ref && r.props.children.ref(e), r.currentTarget && e && r.currentTarget !== e && (r.unobserve(), r.shouldResetObserver = !0), r.target = e
						}, d(r, i)
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
						this.target = (e = this.target, n.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(s.findDOMNode)(this.target)), this.observer = c.create(h, this.options), c.observe(this)
					}, t.prototype.unobserve = function() {
						c.unobserve(this)
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
						this.shouldResetObserver = p.concat(["disabled"]).some((function(i) {
							return o(e[i], t.props[i])
						}))
					}, t.prototype.render = function() {
						return this.currentTarget = this.target, n.a.cloneElement(n.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, u(t, [{
						key: "options",
						get: function() {
							var e = this;
							return p.reduce((function(t, i) {
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
			var v = b;
			i.d(t, "a", (function() {
				return v
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
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
				return V
			}));
			var r = i("./node_modules/lodash/isEqual.js"),
				n = i.n(r),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				a = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				l = i("./src/reddit/constants/viewabilityEvents.ts");
			const c = .01,
				u = .5,
				d = 1,
				h = [u, d, c],
				p = 1e3,
				m = 100,
				b = 5e3,
				v = 15e3,
				f = 0,
				w = 2e3,
				y = 3e3,
				g = e => "boolean" == typeof e.cumulative;
			class V extends s.Component {
				constructor(e) {
					super(e), this.viewableImpression = {
						timer: null,
						event: l.a.Viewable,
						threshold: u,
						viewabilityMinimum: p,
						fired: !1,
						timeViewingInitialized: 0
					}, this.impression = {
						timer: null,
						event: l.a.Impression,
						threshold: c,
						viewabilityMinimum: f,
						fired: !1,
						timeViewingInitialized: 0
					}, this.vendorFullyViewable = {
						timer: null,
						event: l.a.VendorFullyViewable,
						threshold: d,
						viewabilityMinimum: m,
						fired: !1,
						timeViewingInitialized: 0
					}, this.vendorFullyViewableSeconds5 = {
						timer: null,
						event: l.a.VendorFullyViewableSeconds5,
						threshold: u,
						viewabilityMinimum: b,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: b,
						timeViewingInterrupted: 0,
						cumulative: !0,
						cumulativeElapsedTime: 0
					}, this.vendorFullyViewableSeconds15 = {
						timer: null,
						event: l.a.VendorFullyViewableSeconds15,
						threshold: u,
						viewabilityMinimum: v,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: v,
						timeViewingInterrupted: 0,
						cumulative: !0,
						cumulativeElapsedTime: 0
					}, this.videoViewable = {
						timer: null,
						event: l.a.VideoViewable,
						threshold: u,
						viewabilityMinimum: w,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: w,
						timeViewingInterrupted: 0
					}, this.videoFullyViewable = {
						timer: null,
						event: l.a.VideoFullyViewable,
						threshold: d,
						viewabilityMinimum: y,
						fired: !1,
						timeViewingInitialized: 0,
						remainingTime: y,
						timeViewingInterrupted: 0
					}, this.handleViewabilityChange = e => {
						this.checkViewabilityByType(e)
					}, this.checkThresholdViewability = e => {
						h.forEach(t => {
							this.isAdequatelyInView(e, t) ? this.props.pixelPostHasEnteredView(t) : this.props.pixelPostHasExitedView(t)
						})
					}, this.checkViewabilityByType = e => {
						n()(this.state.event, e) || this.setState({
							event: e
						}), this.checkThresholdViewability(e), this.checkViewability(e, this.viewableImpression), this.checkViewability(e, this.impression), this.checkViewability(e, this.vendorFullyViewable), this.checkViewability(e, this.vendorFullyViewableSeconds5), this.checkViewability(e, this.vendorFullyViewableSeconds15), this.props.trackVideoMetrics && (this.checkViewability(e, this.videoViewable), this.checkViewability(e, this.videoFullyViewable))
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
				isAdequatelyInView(e, t) {
					return !!e && e.isIntersecting && e.intersectionRatio >= t
				}
				checkViewability(e, t) {
					if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
						const e = this.getLengthForTimer(t);
						return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
					}
					g(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t.timer)
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
						threshold: h,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "BlankPost", (function() {
				return d
			}));
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				s = i("./node_modules/reselect/es/index.js"),
				o = i("./src/reddit/components/AdViewability/index.tsx"),
				a = i("./src/reddit/connectors/PostViewable/index.ts"),
				l = i("./src/reddit/selectors/posts.ts"),
				c = i("./src/lib/classNames/index.ts");
			const u = Object(a.a)(() => Object(s.c)({
					post: l.K
				})),
				d = e => {
					let {
						className: t,
						post: i,
						onPostViewable: r,
						pixelPostHasEnteredView: s,
						pixelPostHasExitedView: a
					} = e;
					return i.isSponsored ? n.a.createElement(o.a, {
						onViewable: e => r(i, e),
						pixelPostHasEnteredView: e => s(i, e),
						pixelPostHasExitedView: e => a(i, e),
						children: n.a.createElement("div", {
							className: Object(c.a)(t, "Blank ".concat(i.id))
						}),
						trackVideoMetrics: !1
					}) : null
				};
			t.default = u(d)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, i) {
			"use strict";
			var r = i("./node_modules/react-redux/es/index.js"),
				n = i("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return Object.assign({}, e, {
					onPostViewable: n.K,
					pixelPostHasEnteredView: n.y,
					pixelPostHasExitedView: n.z
				})
			}(t))
		}
	}
]);
//# sourceMappingURL=reddit-components-BlankPost.c75342259af05d916b3c.js.map