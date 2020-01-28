// https://www.redditstatic.com/desktop2x/vendors~PostCreation.4e734817c05bcd5ddb65.js
// Retrieved at 1/28/2020, 5:50:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~PostCreation"], {
		"./node_modules/brcast/dist/brcast.es.js": function(t, e, n) {
			"use strict";
			e.a = function(t) {
				var e = {},
					n = 1,
					o = t;
				return {
					getState: function() {
						return o
					},
					setState: function(t) {
						o = t;
						for (var n = Object.keys(e), r = 0, i = n.length; r < i; r++) e[n[r]] && e[n[r]](t)
					},
					subscribe: function(t) {
						if ("function" != typeof t) throw new Error("listener must be a function.");
						var o = n;
						return e[o] = t, n += 1, o
					},
					unsubscribe: function(t) {
						e[t] = void 0
					}
				}
			}
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
					var n = [];
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
						return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, n) {
							if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return t !== n[e - 1]
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
							n = e ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(r) {
							var i = r.element,
								s = h(i),
								c = this._rootContainsTarget(i),
								u = r.entry,
								a = e && c && this._computeTargetAndRootIntersection(i, n),
								d = r.entry = new o({
									time: t.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: s,
									rootBounds: n,
									intersectionRect: a
								});
							u ? e && c ? this._hasCrossedThreshold(u, d) && this._queuedEntries.push(d) : u && u.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(n, o) {
						if ("none" != t.getComputedStyle(n).display) {
							for (var r, i, s, c, a, d, l, f, _ = h(n), p = u(n), v = !1; !v;) {
								var m = null,
									g = 1 == p.nodeType ? t.getComputedStyle(p) : {};
								if ("none" == g.display) return;
								if (p == this.root || p == e ? (v = !0, m = o) : p != e.body && p != e.documentElement && "visible" != g.overflow && (m = h(p)), m && (r = m, i = _, s = void 0, c = void 0, a = void 0, d = void 0, l = void 0, f = void 0, s = Math.max(r.top, i.top), c = Math.min(r.bottom, i.bottom), a = Math.max(r.left, i.left), d = Math.min(r.right, i.right), f = c - s, !(_ = (l = d - a) >= 0 && f >= 0 && {
										top: s,
										bottom: c,
										left: a,
										right: d,
										width: l,
										height: f
									}))) break;
								p = u(p)
							}
							return _
						}
					}, r.prototype._getRootRect = function() {
						var t;
						if (this.root) t = h(this.root);
						else {
							var n = e.documentElement,
								o = e.body;
							t = {
								top: 0,
								left: 0,
								right: n.clientWidth || o.clientWidth,
								width: n.clientWidth || o.clientWidth,
								bottom: n.clientHeight || o.clientHeight,
								height: n.clientHeight || o.clientHeight
							}
						}
						return this._expandRectByRootMargin(t)
					}, r.prototype._expandRectByRootMargin = function(t) {
						var e = this._rootMarginValues.map((function(e, n) {
								return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
							})),
							n = {
								top: t.top - e[0],
								right: t.right + e[1],
								bottom: t.bottom + e[2],
								left: t.left - e[3]
							};
						return n.width = n.right - n.left, n.height = n.bottom - n.top, n
					}, r.prototype._hasCrossedThreshold = function(t, e) {
						var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
							o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
						if (n !== o)
							for (var r = 0; r < this.thresholds.length; r++) {
								var i = this.thresholds[r];
								if (i == n || i == o || i < n != i < o) return !0
							}
					}, r.prototype._rootIsInDom = function() {
						return !this.root || c(e, this.root)
					}, r.prototype._rootContainsTarget = function(t) {
						return c(this.root || e, t)
					}, r.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, r.prototype._unregisterInstance = function() {
						var t = n.indexOf(this); - 1 != t && n.splice(t, 1)
					}, t.IntersectionObserver = r, t.IntersectionObserverEntry = o
				}

				function o(t) {
					this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!t.intersectionRect;
					var e = this.boundingClientRect,
						n = e.width * e.height,
						o = this.intersectionRect,
						r = o.width * o.height;
					this.intersectionRatio = n ? r / n : this.isIntersecting ? 1 : 0
				}

				function r(t, e) {
					var n, o, r, i = e || {};
					if ("function" != typeof t) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), o = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							n(), r = null
						}), o))
					}), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
						return t.value + t.unit
					})).join(" ")
				}

				function i(t, e, n, o) {
					"function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
				}

				function s(t, e, n, o) {
					"function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
				}

				function h(t) {
					var e;
					try {
						e = t.getBoundingClientRect()
					} catch (n) {}
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

				function c(t, e) {
					for (var n = e; n;) {
						if (n == t) return !0;
						n = u(n)
					}
					return !1
				}

				function u(t) {
					var e = t.parentNode;
					return e && 11 == e.nodeType && e.host ? e.host : e
				}
			}(window, document)
		},
		"./node_modules/lodash/_arrayEvery.js": function(t, e) {
			t.exports = function(t, e) {
				for (var n = -1, o = null == t ? 0 : t.length; ++n < o;)
					if (!e(t[n], n, t)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseEach.js");
			t.exports = function(t, e) {
				var n = !0;
				return o(t, (function(t, o, r) {
					return n = !!e(t, o, r)
				})), n
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(t, e) {
			t.exports = function(t, e, n) {
				var o;
				return n(t, (function(t, n, r) {
					if (e(t, n, r)) return o = n, !1
				})), o
			}
		},
		"./node_modules/lodash/every.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_arrayEvery.js"),
				r = n("./node_modules/lodash/_baseEvery.js"),
				i = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/isArray.js"),
				h = n("./node_modules/lodash/_isIterateeCall.js");
			t.exports = function(t, e, n) {
				var c = s(t) ? o : r;
				return n && h(t, e, n) && (e = void 0), c(t, i(e, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseFindKey.js"),
				r = n("./node_modules/lodash/_baseForOwn.js"),
				i = n("./node_modules/lodash/_baseIteratee.js");
			t.exports = function(t, e) {
				return o(t, i(e, 3), r)
			}
		},
		"./node_modules/lodash/times.js": function(t, e, n) {
			var o = n("./node_modules/lodash/_baseTimes.js"),
				r = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				h = 4294967295,
				c = Math.min;
			t.exports = function(t, e) {
				if ((t = i(t)) < 1 || t > s) return [];
				var n = h,
					u = c(t, h);
				e = r(e), t -= h;
				for (var a = o(u, e); ++n < t;) e(n);
				return a
			}
		},
		"./node_modules/lodash/uniqueId.js": function(t, e, n) {
			var o = n("./node_modules/lodash/toString.js"),
				r = 0;
			t.exports = function(t) {
				var e = ++r;
				return o(t) + e
			}
		}
	}
]);
//# sourceMappingURL=vendors~PostCreation.4e734817c05bcd5ddb65.js.map