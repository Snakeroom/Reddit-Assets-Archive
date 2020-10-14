// https://www.redditstatic.com/desktop2x/vendors~ModListing.f40a6050dd87da01c7b5.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~ModListing"], {
		"./node_modules/brcast/dist/brcast.es.js": function(t, e, o) {
			"use strict";
			e.a = function(t) {
				var e = {},
					o = 1,
					n = t;
				return {
					getState: function() {
						return n
					},
					setState: function(t) {
						n = t;
						for (var o = Object.keys(e), r = 0, i = o.length; r < i; r++) e[o[r]] && e[o[r]](t)
					},
					subscribe: function(t) {
						if ("function" != typeof t) throw new Error("listener must be a function.");
						var n = o;
						return e[n] = t, o += 1, n
					},
					unsubscribe: function(t) {
						e[t] = void 0
					}
				}
			}
		},
		"./node_modules/core-js/modules/_new-promise-capability.js": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/core-js/modules/_a-function.js");

			function r(t) {
				var e, o;
				this.promise = new t((function(t, n) {
					if (void 0 !== e || void 0 !== o) throw TypeError("Bad Promise constructor");
					e = t, o = n
				})), this.resolve = n(e), this.reject = n(o)
			}
			t.exports.f = function(t) {
				return new r(t)
			}
		},
		"./node_modules/core-js/modules/_promise-resolve.js": function(t, e, o) {
			var n = o("./node_modules/core-js/modules/_an-object.js"),
				r = o("./node_modules/core-js/modules/_is-object.js"),
				i = o("./node_modules/core-js/modules/_new-promise-capability.js");
			t.exports = function(t, e) {
				if (n(t), r(e) && e.constructor === t) return e;
				var o = i.f(t);
				return (0, o.resolve)(e), o.promise
			}
		},
		"./node_modules/core-js/modules/es7.promise.finally.js": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/core-js/modules/_export.js"),
				r = o("./node_modules/core-js/modules/_core.js"),
				i = o("./node_modules/core-js/modules/_global.js"),
				s = o("./node_modules/core-js/modules/_species-constructor.js"),
				c = o("./node_modules/core-js/modules/_promise-resolve.js");
			n(n.P + n.R, "Promise", {
				finally: function(t) {
					var e = s(this, r.Promise || i.Promise),
						o = "function" == typeof t;
					return this.then(o ? function(o) {
						return c(e, t()).then((function() {
							return o
						}))
					} : t, o ? function(o) {
						return c(e, t()).then((function() {
							throw o
						}))
					} : t)
				}
			})
		},
		"./node_modules/intersection-observer/intersection-observer.js": function(t, e) {
			! function(t, e) {
				"use strict";
				if ("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype) "isIntersecting" in t.IntersectionObserverEntry.prototype || Object.defineProperty(t.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var o = [];
					r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.observe = function(t) {
						if (!this._observationTargets.some((function(e) {
								return e.element == t
							}))) {
							if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: t,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, r.prototype.unobserve = function(t) {
						this._observationTargets = this._observationTargets.filter((function(e) {
							return e.element != t
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, r.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, r.prototype.takeRecords = function() {
						var t = this._queuedEntries.slice();
						return this._queuedEntries = [], t
					}, r.prototype._initThresholds = function(t) {
						var e = t || [0];
						return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, o) {
							if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return t !== o[e - 1]
						}))
					}, r.prototype._parseRootMargin = function(t) {
						var e = (t || "0px").split(/\s+/).map((function(t) {
							var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
							if (!e) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(e[1]),
								unit: e[2]
							}
						}));
						return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
					}, r.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(t, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, r.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, r.prototype._checkForIntersections = function() {
						var e = this._rootIsInDom(),
							o = e ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(r) {
							var i = r.element,
								s = c(i),
								u = this._rootContainsTarget(i),
								a = r.entry,
								h = e && u && this._computeTargetAndRootIntersection(i, o),
								l = r.entry = new n({
									time: t.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: s,
									rootBounds: o,
									intersectionRect: h
								});
							a ? e && u ? this._hasCrossedThreshold(a, l) && this._queuedEntries.push(l) : a && a.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(o, n) {
						if ("none" != t.getComputedStyle(o).display) {
							for (var r, i, s, u, h, l, d, p, f = c(o), m = a(o), _ = !1; !_;) {
								var v = null,
									y = 1 == m.nodeType ? t.getComputedStyle(m) : {};
								if ("none" == y.display) return;
								if (m == this.root || m == e ? (_ = !0, v = n) : m != e.body && m != e.documentElement && "visible" != y.overflow && (v = c(m)), v && (r = v, i = f, s = void 0, u = void 0, h = void 0, l = void 0, d = void 0, p = void 0, s = Math.max(r.top, i.top), u = Math.min(r.bottom, i.bottom), h = Math.max(r.left, i.left), l = Math.min(r.right, i.right), p = u - s, !(f = (d = l - h) >= 0 && p >= 0 && {
										top: s,
										bottom: u,
										left: h,
										right: l,
										width: d,
										height: p
									}))) break;
								m = a(m)
							}
							return f
						}
					}, r.prototype._getRootRect = function() {
						var t;
						if (this.root) t = c(this.root);
						else {
							var o = e.documentElement,
								n = e.body;
							t = {
								top: 0,
								left: 0,
								right: o.clientWidth || n.clientWidth,
								width: o.clientWidth || n.clientWidth,
								bottom: o.clientHeight || n.clientHeight,
								height: o.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(t)
					}, r.prototype._expandRectByRootMargin = function(t) {
						var e = this._rootMarginValues.map((function(e, o) {
								return "px" == e.unit ? e.value : e.value * (o % 2 ? t.width : t.height) / 100
							})),
							o = {
								top: t.top - e[0],
								right: t.right + e[1],
								bottom: t.bottom + e[2],
								left: t.left - e[3]
							};
						return o.width = o.right - o.left, o.height = o.bottom - o.top, o
					}, r.prototype._hasCrossedThreshold = function(t, e) {
						var o = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
							n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
						if (o !== n)
							for (var r = 0; r < this.thresholds.length; r++) {
								var i = this.thresholds[r];
								if (i == o || i == n || i < o != i < n) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || u(e, this.root)
					}, r.prototype._rootContainsTarget = function(t) {
						return u(this.root || e, t)
					}, r.prototype._registerInstance = function() {
						o.indexOf(this) < 0 && o.push(this)
					}, r.prototype._unregisterInstance = function() {
						var t = o.indexOf(this); - 1 != t && o.splice(t, 1)
					}, t.IntersectionObserver = r, t.IntersectionObserverEntry = n
				}

				function n(t) {
					this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!t.intersectionRect;
					var e = this.boundingClientRect,
						o = e.width * e.height,
						n = this.intersectionRect,
						r = n.width * n.height;
					this.intersectionRatio = o ? r / o : this.isIntersecting ? 1 : 0
				}

				function r(t, e) {
					var o, n, r, i = e || {};
					if ("function" != typeof t) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (o = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							o(), r = null
						}), n))
					}), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
						return t.value + t.unit
					})).join(" ")
				}

				function i(t, e, o, n) {
					"function" == typeof t.addEventListener ? t.addEventListener(e, o, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, o)
				}

				function s(t, e, o, n) {
					"function" == typeof t.removeEventListener ? t.removeEventListener(e, o, n || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, o)
				}

				function c(t) {
					var e;
					try {
						e = t.getBoundingClientRect()
					} catch (o) {}
					return e ? (e.width && e.height || (e = {
						top: e.top,
						right: e.right,
						bottom: e.bottom,
						left: e.left,
						width: e.right - e.left,
						height: e.bottom - e.top
					}), e) : {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}
				}

				function u(t, e) {
					for (var o = e; o;) {
						if (o == t) return !0;
						o = a(o)
					}
					return !1
				}

				function a(t) {
					var e = t.parentNode;
					return e && 11 == e.nodeType && e.host ? e.host : e
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				r = o("./node_modules/lodash/_castFunction.js"),
				i = o("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				c = 4294967295,
				u = Math.min;
			t.exports = function(t, e) {
				if ((t = i(t)) < 1 || t > s) return [];
				var o = c,
					a = u(t, c);
				e = r(e), t -= c;
				for (var h = n(a, e); ++o < t;) e(o);
				return h
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(t, e, o) {
			"use strict";

			function n(t, e) {
				t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
			}
			o.d(e, "a", (function() {
				return l
			}));
			var r = o("./node_modules/react/index.js"),
				i = o.n(r),
				s = o("./node_modules/react-router/esm/react-router.js"),
				c = o("./node_modules/history/esm/history.js");
			o("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function u() {
				return (u = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
					}
					return t
				}).apply(this, arguments)
			}

			function a(t, e) {
				if (null == t) return {};
				var o, n, r = {},
					i = Object.keys(t);
				for (n = 0; n < i.length; n++) o = i[n], e.indexOf(o) >= 0 || (r[o] = t[o]);
				return r
			}
			var h = o("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			i.a.Component;
			i.a.Component;
			var l = function(t) {
				function e() {
					return t.apply(this, arguments) || this
				}
				n(e, t);
				var o = e.prototype;
				return o.handleClick = function(t, e) {
					try {
						this.props.onClick && this.props.onClick(t)
					} catch (o) {
						throw t.preventDefault(), o
					}
					t.defaultPrevented || 0 !== t.button || this.props.target && "_self" !== this.props.target || function(t) {
						return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
					}(t) || (t.preventDefault(), (this.props.replace ? e.replace : e.push)(this.props.to))
				}, o.render = function() {
					var t = this,
						e = this.props,
						o = e.innerRef,
						n = (e.replace, e.to),
						r = a(e, ["innerRef", "replace", "to"]);
					return i.a.createElement(s.g.Consumer, null, (function(e) {
						e || Object(h.default)(!1);
						var s = "string" == typeof n ? Object(c.c)(n, null, null, e.location) : n,
							a = s ? e.history.createHref(s) : "";
						return i.a.createElement("a", u({}, r, {
							onClick: function(o) {
								return t.handleClick(o, e.history)
							},
							href: a,
							ref: o
						}))
					}))
				}, e
			}(i.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(t, e, o) {
			"use strict";
			var n = o("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function i() {}
			i.resetWarningCache = r, t.exports = function() {
				function t(t, e, o, r, i, s) {
					if (s !== n) {
						var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw c.name = "Invariant Violation", c
					}
				}

				function e() {
					return t
				}
				t.isRequired = t;
				var o = {
					array: t,
					bool: t,
					func: t,
					number: t,
					object: t,
					string: t,
					symbol: t,
					any: t,
					arrayOf: e,
					element: t,
					elementType: t,
					instanceOf: e,
					node: t,
					objectOf: e,
					oneOf: e,
					oneOfType: e,
					shape: e,
					exact: e,
					checkPropTypes: i,
					resetWarningCache: r
				};
				return o.PropTypes = o, o
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(t, e, o) {
			t.exports = o("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(t, e, o) {
			"use strict";
			t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~ModListing.f40a6050dd87da01c7b5.js.map