// https://www.redditstatic.com/desktop2x/vendors~Subreddit.9810fcd6fc95c281b11f.js
// Retrieved at 1/22/2020, 4:32:02 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Subreddit"], {
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
								s = h(i),
								a = this._rootContainsTarget(i),
								u = r.entry,
								d = e && a && this._computeTargetAndRootIntersection(i, o),
								c = r.entry = new n({
									time: t.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: s,
									rootBounds: o,
									intersectionRect: d
								});
							u ? e && a ? this._hasCrossedThreshold(u, c) && this._queuedEntries.push(c) : u && u.isIntersecting && this._queuedEntries.push(c) : this._queuedEntries.push(c)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(o, n) {
						if ("none" != t.getComputedStyle(o).display) {
							for (var r, i, s, a, d, c, l, _, p = h(o), f = u(o), m = !1; !m;) {
								var v = null,
									g = 1 == f.nodeType ? t.getComputedStyle(f) : {};
								if ("none" == g.display) return;
								if (f == this.root || f == e ? (m = !0, v = n) : f != e.body && f != e.documentElement && "visible" != g.overflow && (v = h(f)), v && (r = v, i = p, s = void 0, a = void 0, d = void 0, c = void 0, l = void 0, _ = void 0, s = Math.max(r.top, i.top), a = Math.min(r.bottom, i.bottom), d = Math.max(r.left, i.left), c = Math.min(r.right, i.right), _ = a - s, !(p = (l = c - d) >= 0 && _ >= 0 && {
										top: s,
										bottom: a,
										left: d,
										right: c,
										width: l,
										height: _
									}))) break;
								f = u(f)
							}
							return p
						}
					}, r.prototype._getRootRect = function() {
						var t;
						if (this.root) t = h(this.root);
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
						return !this.root || a(e, this.root)
					}, r.prototype._rootContainsTarget = function(t) {
						return a(this.root || e, t)
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

				function h(t) {
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

				function a(t, e) {
					for (var o = e; o;) {
						if (o == t) return !0;
						o = u(o)
					}
					return !1
				}

				function u(t) {
					var e = t.parentNode;
					return e && 11 == e.nodeType && e.host ? e.host : e
				}
			}(window, document)
		},
		"./node_modules/lodash/_arraySample.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseRandom.js");
			t.exports = function(t) {
				var e = t.length;
				return e ? t[n(0, e - 1)] : void 0
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(t, e) {
			t.exports = function(t, e, o) {
				var n;
				return o(t, (function(t, o, r) {
					if (e(t, o, r)) return n = o, !1
				})), n
			}
		},
		"./node_modules/lodash/_baseSample.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_arraySample.js"),
				r = o("./node_modules/lodash/values.js");
			t.exports = function(t) {
				return n(r(t))
			}
		},
		"./node_modules/lodash/findKey.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseFindKey.js"),
				r = o("./node_modules/lodash/_baseForOwn.js"),
				i = o("./node_modules/lodash/_baseIteratee.js");
			t.exports = function(t, e) {
				return n(t, i(e, 3), r)
			}
		},
		"./node_modules/lodash/orderBy.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseOrderBy.js"),
				r = o("./node_modules/lodash/isArray.js");
			t.exports = function(t, e, o, i) {
				return null == t ? [] : (r(e) || (e = null == e ? [] : [e]), r(o = i ? void 0 : o) || (o = null == o ? [] : [o]), n(t, e, o))
			}
		},
		"./node_modules/lodash/random.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseRandom.js"),
				r = o("./node_modules/lodash/_isIterateeCall.js"),
				i = o("./node_modules/lodash/toFinite.js"),
				s = parseFloat,
				h = Math.min,
				a = Math.random;
			t.exports = function(t, e, o) {
				if (o && "boolean" != typeof o && r(t, e, o) && (e = o = void 0), void 0 === o && ("boolean" == typeof e ? (o = e, e = void 0) : "boolean" == typeof t && (o = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = i(t), void 0 === e ? (e = t, t = 0) : e = i(e)), t > e) {
					var u = t;
					t = e, e = u
				}
				if (o || t % 1 || e % 1) {
					var d = a();
					return h(t + d * (e - t + s("1e-" + ((d + "").length - 1))), e)
				}
				return n(t, e)
			}
		},
		"./node_modules/lodash/sample.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_arraySample.js"),
				r = o("./node_modules/lodash/_baseSample.js"),
				i = o("./node_modules/lodash/isArray.js");
			t.exports = function(t) {
				return (i(t) ? n : r)(t)
			}
		},
		"./node_modules/lodash/take.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseSlice.js"),
				r = o("./node_modules/lodash/toInteger.js");
			t.exports = function(t, e, o) {
				return t && t.length ? (e = o || void 0 === e ? 1 : r(e), n(t, 0, e < 0 ? 0 : e)) : []
			}
		},
		"./node_modules/lodash/times.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				r = o("./node_modules/lodash/_castFunction.js"),
				i = o("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				h = 4294967295,
				a = Math.min;
			t.exports = function(t, e) {
				if ((t = i(t)) < 1 || t > s) return [];
				var o = h,
					u = a(t, h);
				e = r(e), t -= h;
				for (var d = n(u, e); ++o < t;) e(o);
				return d
			}
		},
		"./node_modules/lodash/uniqueId.js": function(t, e, o) {
			var n = o("./node_modules/lodash/toString.js"),
				r = 0;
			t.exports = function(t) {
				var e = ++r;
				return n(t) + e
			}
		}
	}
]);
//# sourceMappingURL=vendors~Subreddit.9810fcd6fc95c281b11f.js.map