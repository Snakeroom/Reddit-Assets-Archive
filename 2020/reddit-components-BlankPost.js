// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.87fecb68fa07294b33f7.js
// Retrieved at 6/1/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return x
			}));
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

			function u(e, t) {
				var i = l.get(e);
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
				return d(e) || new IntersectionObserver(c, e)
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
				j = function(e) {
					return f.reduce((function(t, i) {
						if (T.call(e, i)) {
							var r = "root" === i && "[object String]" === _.call(e[i]);
							t[i] = r ? document.querySelector(e[i]) : e[i]
						}
						return t
					}), {})
				},
				x = function(e) {
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
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = h(j(t.props)), t.target = t.targetNode, e = w(t), l.has(e.observer) || l.set(e.observer, new Set), l.get(e.observer).add(e), e.observer.observe(e.target), !0) : (b.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
			g(x, "displayName", "IntersectionObserver")
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
			var r = i("./node_modules/lodash/isEqual.js"),
				n = i.n(r),
				o = i("./node_modules/react/index.js"),
				s = i.n(o),
				a = i("./node_modules/reselect/es/index.js"),
				l = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				d = i("./src/reddit/connectors/PostViewable/index.ts"),
				u = i("./src/reddit/constants/adViewability.ts"),
				c = i("./src/reddit/constants/viewabilityEvents.ts"),
				h = i("./src/reddit/selectors/media.ts"),
				m = i("./src/reddit/selectors/video.ts");
			const p = [{
					event: c.a.Viewable,
					threshold: u.j,
					viewabilityMinimum: u.k
				}, {
					event: c.a.Impression,
					threshold: u.c,
					viewabilityMinimum: u.d
				}, {
					event: c.a.VendorFullyViewable,
					threshold: u.b,
					viewabilityMinimum: u.g
				}, {
					event: c.a.GroupMViewable,
					threshold: u.b,
					viewabilityMinimum: u.k
				}, {
					event: c.a.VendorFullyViewableSeconds5,
					threshold: u.j,
					viewabilityMinimum: u.f,
					remainingTime: u.f,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: c.a.VendorFullyViewableSeconds15,
					threshold: u.j,
					viewabilityMinimum: u.e,
					remainingTime: u.e,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				v = [{
					event: c.a.VideoViewable,
					threshold: u.j,
					viewabilityMinimum: u.i,
					remainingTime: u.i,
					timeViewingInterrupted: 0
				}, {
					event: c.a.VideoFullyViewable,
					threshold: u.b,
					viewabilityMinimum: u.a,
					remainingTime: u.a,
					timeViewingInterrupted: 0
				}, {
					event: c.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: u.i,
					remainingTime: u.i,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: c.a.VideoVendorFullyViewable50,
					threshold: u.b,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				b = e => e.map(e => {
					let {
						event: t,
						cumulative: i = !1,
						cumulativeElapsedTime: r,
						remainingTime: n,
						threshold: o = null,
						viewabilityMinimum: s,
						checkAudible: a = !1,
						timeViewingInterrupted: l
					} = e;
					return {
						event: t,
						cumulative: i,
						checkAudible: a,
						timer: null,
						fired: !1,
						threshold: o,
						remainingTime: n,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: s,
						timeViewingInitialized: 0,
						timeViewingInterrupted: l
					}
				}),
				w = () => b(p),
				g = () => b(v),
				f = [u.c, u.j, u.h, u.b],
				y = [u.c, u.j, u.b],
				V = e => "boolean" == typeof e.cumulative && e.cumulative,
				T = Object(a.c)({
					continuousViewingStartedAt: (e, t) => {
						let {
							post: i
						} = t;
						return Object(m.c)(e, {
							postId: i.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: i
						} = t;
						const r = Object(m.i)(e, {
							postId: i.id
						});
						if (r) return r.length
					},
					isAudible: e => !Object(h.a)(e) && !!Object(h.b)(e),
					isPlaying: (e, t) => {
						let {
							post: i
						} = t;
						return Object(m.e)(e, {
							postId: i.id
						})
					}
				}),
				_ = Object(d.a)(T);
			class j extends o.Component {
				constructor(e) {
					super(e), this.viewabilityStats = w(), this.videoStats = g(), this.inView = [], this.outOfView = [], this.handleViewabilityChange = e => {
						this.checkViewabilityByType(e), this.props.trackDisplay && this.handleThresholds(e)
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
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					}) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e.timer), e.timer = null, e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const i = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - i, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e.timer))
				}
				handleThresholds(e) {
					const {
						pixelPostHasEnteredView: t,
						pixelPostHasExitedView: i,
						post: r
					} = this.props, o = y.filter(t => this.isAdequatelyInView(e, t));
					n()(o, this.inView) || (o.length > 0 && t(r, o), this.inView = o);
					const s = y.filter(t => !this.isAdequatelyInView(e, t));
					n()(s, this.outOfView) || (s.length > 0 && i(r, s), this.outOfView = s)
				}
				isAdequatelyInView(e, t) {
					return !!e && e.isIntersecting && e.intersectionRatio >= t
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, u.e) : e.viewabilityMinimum = u.e, e.remainingTime = e.viewabilityMinimum
				}
				adjustGroupMThreshold(e, t) {
					const {
						height: i,
						width: r
					} = e.boundingClientRect;
					return !t.threshold && this.props.videoDuration && (t.threshold = r * i < 3e5 ? u.b : u.h, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === c.a.GroupMViewable && r * i > 242500 && (t.threshold = u.j), t
				}
				checkViewability(e, t) {
					if (V(t) && t.event === c.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustGroupMThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						V(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t.timer)
					}
				}
				clearTimer(e) {
					e && clearTimeout(e)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e.timer), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					return s.a.createElement(l.a, {
						threshold: this.props.trackVideo ? f : y,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = _(j)
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "BlankPost", (function() {
				return c
			}));
			var r = i("./node_modules/react/index.js"),
				n = i.n(r),
				o = i("./node_modules/reselect/es/index.js"),
				s = i("./src/reddit/components/AdViewability/index.tsx"),
				a = i("./src/reddit/connectors/PostViewable/index.ts"),
				l = i("./src/reddit/selectors/posts.ts"),
				d = i("./src/lib/classNames/index.ts");
			const u = Object(a.a)(() => Object(o.c)({
					post: l.O
				})),
				c = e => {
					let {
						className: t,
						post: i,
						onPostViewable: r,
						pixelPostHasEnteredView: o,
						pixelPostHasExitedView: a
					} = e;
					return i.isSponsored ? n.a.createElement(s.a, {
						post: i,
						trackDisplay: !0
					}, n.a.createElement("div", {
						className: Object(d.a)(t, "Blank ".concat(i.id))
					})) : null
				};
			t.default = u(c)
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
//# sourceMappingURL=reddit-components-BlankPost.87fecb68fa07294b33f7.js.map