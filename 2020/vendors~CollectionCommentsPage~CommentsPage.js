// https://www.redditstatic.com/desktop2x/vendors~CollectionCommentsPage~CommentsPage.c31f0828578f9f5809dd.js
// Retrieved at 1/24/2020, 8:20:18 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~CollectionCommentsPage~CommentsPage"], {
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
					i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.observe = function(t) {
						if (!this._observationTargets.some((function(e) {
								return e.element == t
							}))) {
							if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: t,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, i.prototype.unobserve = function(t) {
						this._observationTargets = this._observationTargets.filter((function(e) {
							return e.element != t
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, i.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, i.prototype.takeRecords = function() {
						var t = this._queuedEntries.slice();
						return this._queuedEntries = [], t
					}, i.prototype._initThresholds = function(t) {
						var e = t || [0];
						return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, o) {
							if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return t !== o[e - 1]
						}))
					}, i.prototype._parseRootMargin = function(t) {
						var e = (t || "0px").split(/\s+/).map((function(t) {
							var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
							if (!e) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(e[1]),
								unit: e[2]
							}
						}));
						return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
					}, i.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(t, "resize", this._checkForIntersections, !0), r(e, "scroll", this._checkForIntersections, !0), "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, i.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, i.prototype._checkForIntersections = function() {
						var e = this._rootIsInDom(),
							o = e ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(i) {
							var r = i.element,
								s = h(r),
								c = this._rootContainsTarget(r),
								a = i.entry,
								u = e && c && this._computeTargetAndRootIntersection(r, o),
								d = i.entry = new n({
									time: t.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: s,
									rootBounds: o,
									intersectionRect: u
								});
							a ? e && c ? this._hasCrossedThreshold(a, d) && this._queuedEntries.push(d) : a && a.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, i.prototype._computeTargetAndRootIntersection = function(o, n) {
						if ("none" != t.getComputedStyle(o).display) {
							for (var i, r, s, c, u, d, l, f, p = h(o), _ = a(o), m = !1; !m;) {
								var v = null,
									g = 1 == _.nodeType ? t.getComputedStyle(_) : {};
								if ("none" == g.display) return;
								if (_ == this.root || _ == e ? (m = !0, v = n) : _ != e.body && _ != e.documentElement && "visible" != g.overflow && (v = h(_)), v && (i = v, r = p, s = void 0, c = void 0, u = void 0, d = void 0, l = void 0, f = void 0, s = Math.max(i.top, r.top), c = Math.min(i.bottom, r.bottom), u = Math.max(i.left, r.left), d = Math.min(i.right, r.right), f = c - s, !(p = (l = d - u) >= 0 && f >= 0 && {
										top: s,
										bottom: c,
										left: u,
										right: d,
										width: l,
										height: f
									}))) break;
								_ = a(_)
							}
							return p
						}
					}, i.prototype._getRootRect = function() {
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
					}, i.prototype._expandRectByRootMargin = function(t) {
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
					}, i.prototype._hasCrossedThreshold = function(t, e) {
						var o = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
							n = e.isIntersecting ? e.intersectionRatio || 0 : -1;
						if (o !== n)
							for (var i = 0; i < this.thresholds.length; i++) {
								var r = this.thresholds[i];
								if (r == o || r == n || r < o != r < n) return !0
							}
					}, i.prototype._rootIsInDom = function() {
						return !this.root || c(e, this.root)
					}, i.prototype._rootContainsTarget = function(t) {
						return c(this.root || e, t)
					}, i.prototype._registerInstance = function() {
						o.indexOf(this) < 0 && o.push(this)
					}, i.prototype._unregisterInstance = function() {
						var t = o.indexOf(this); - 1 != t && o.splice(t, 1)
					}, t.IntersectionObserver = i, t.IntersectionObserverEntry = n
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
						i = n.width * n.height;
					this.intersectionRatio = o ? i / o : this.isIntersecting ? 1 : 0
				}

				function i(t, e) {
					var o, n, i, r = e || {};
					if ("function" != typeof t) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (o = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, i = null, function() {
						i || (i = setTimeout((function() {
							o(), i = null
						}), n))
					}), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
						return t.value + t.unit
					})).join(" ")
				}

				function r(t, e, o, n) {
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

				function c(t, e) {
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
		"./node_modules/lodash/_baseDelay.js": function(t, e) {
			var o = "Expected a function";
			t.exports = function(t, e, n) {
				if ("function" != typeof t) throw new TypeError(o);
				return setTimeout((function() {
					t.apply(void 0, n)
				}), e)
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(t, e) {
			t.exports = function(t, e, o) {
				var n;
				return o(t, (function(t, o, i) {
					if (e(t, o, i)) return n = o, !1
				})), n
			}
		},
		"./node_modules/lodash/compact.js": function(t, e) {
			t.exports = function(t) {
				for (var e = -1, o = null == t ? 0 : t.length, n = 0, i = []; ++e < o;) {
					var r = t[e];
					r && (i[n++] = r)
				}
				return i
			}
		},
		"./node_modules/lodash/defer.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseDelay.js"),
				i = o("./node_modules/lodash/_baseRest.js")((function(t, e) {
					return n(t, 1, e)
				}));
			t.exports = i
		},
		"./node_modules/lodash/findKey.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseFindKey.js"),
				i = o("./node_modules/lodash/_baseForOwn.js"),
				r = o("./node_modules/lodash/_baseIteratee.js");
			t.exports = function(t, e) {
				return n(t, r(e, 3), i)
			}
		},
		"./node_modules/lodash/random.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseRandom.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js"),
				r = o("./node_modules/lodash/toFinite.js"),
				s = parseFloat,
				h = Math.min,
				c = Math.random;
			t.exports = function(t, e, o) {
				if (o && "boolean" != typeof o && i(t, e, o) && (e = o = void 0), void 0 === o && ("boolean" == typeof e ? (o = e, e = void 0) : "boolean" == typeof t && (o = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = r(t), void 0 === e ? (e = t, t = 0) : e = r(e)), t > e) {
					var a = t;
					t = e, e = a
				}
				if (o || t % 1 || e % 1) {
					var u = c();
					return h(t + u * (e - t + s("1e-" + ((u + "").length - 1))), e)
				}
				return n(t, e)
			}
		},
		"./node_modules/lodash/times.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				i = o("./node_modules/lodash/_castFunction.js"),
				r = o("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				h = 4294967295,
				c = Math.min;
			t.exports = function(t, e) {
				if ((t = r(t)) < 1 || t > s) return [];
				var o = h,
					a = c(t, h);
				e = i(e), t -= h;
				for (var u = n(a, e); ++o < t;) e(o);
				return u
			}
		},
		"./node_modules/lodash/uniqueId.js": function(t, e, o) {
			var n = o("./node_modules/lodash/toString.js"),
				i = 0;
			t.exports = function(t) {
				var e = ++i;
				return n(t) + e
			}
		}
	}
]);
//# sourceMappingURL=vendors~CollectionCommentsPage~CommentsPage.c31f0828578f9f5809dd.js.map