// https://www.redditstatic.com/desktop2x/vendors~Frontpage.e1496db3e8f6708275cb.js
// Retrieved at 10/19/2020, 6:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Frontpage", "FrontpageSidebar"], {
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, r.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(t, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
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
							var s = r.element,
								i = h(s),
								a = this._rootContainsTarget(s),
								d = r.entry,
								u = e && a && this._computeTargetAndRootIntersection(s, o),
								l = r.entry = new n({
									time: t.performance && performance.now && performance.now(),
									target: s,
									boundingClientRect: i,
									rootBounds: o,
									intersectionRect: u
								});
							d ? e && a ? this._hasCrossedThreshold(d, l) && this._queuedEntries.push(l) : d && d.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(o, n) {
						if ("none" != t.getComputedStyle(o).display) {
							for (var r, s, i, a, u, l, c, _, f = h(o), m = d(o), p = !1; !p;) {
								var v = null,
									g = 1 == m.nodeType ? t.getComputedStyle(m) : {};
								if ("none" == g.display) return;
								if (m == this.root || m == e ? (p = !0, v = n) : m != e.body && m != e.documentElement && "visible" != g.overflow && (v = h(m)), v && (r = v, s = f, i = void 0, a = void 0, u = void 0, l = void 0, c = void 0, _ = void 0, i = Math.max(r.top, s.top), a = Math.min(r.bottom, s.bottom), u = Math.max(r.left, s.left), l = Math.min(r.right, s.right), _ = a - i, !(f = (c = l - u) >= 0 && _ >= 0 && {
										top: i,
										bottom: a,
										left: u,
										right: l,
										width: c,
										height: _
									}))) break;
								m = d(m)
							}
							return f
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
								var s = this.thresholds[r];
								if (s == o || s == n || s < o != s < n) return !0
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
					var o, n, r, s = e || {};
					if ("function" != typeof t) throw new Error("callback must be a function");
					if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (o = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, r = null, function() {
						r || (r = setTimeout((function() {
							o(), r = null
						}), n))
					}), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
						return t.value + t.unit
					})).join(" ")
				}

				function s(t, e, o, n) {
					"function" == typeof t.addEventListener ? t.addEventListener(e, o, n || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, o)
				}

				function i(t, e, o, n) {
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
						o = d(o)
					}
					return !1
				}

				function d(t) {
					var e = t.parentNode;
					return e && 11 == e.nodeType && e.host ? e.host : e
				}
			}(window, document)
		},
		"./node_modules/lodash/_arraySampleSize.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseClamp.js"),
				r = o("./node_modules/lodash/_copyArray.js"),
				s = o("./node_modules/lodash/_shuffleSelf.js");
			t.exports = function(t, e) {
				return s(r(t), n(e, 0, t.length))
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_copyArray.js"),
				r = o("./node_modules/lodash/_shuffleSelf.js");
			t.exports = function(t) {
				return r(n(t))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(t, e) {
			t.exports = function(t, e, o) {
				return t == t && (void 0 !== o && (t = t <= o ? t : o), void 0 !== e && (t = t >= e ? t : e)), t
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(t, e) {
			var o = Math.floor,
				n = Math.random;
			t.exports = function(t, e) {
				return t + o(n() * (e - t + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseClamp.js"),
				r = o("./node_modules/lodash/_shuffleSelf.js"),
				s = o("./node_modules/lodash/values.js");
			t.exports = function(t, e) {
				var o = s(t);
				return r(o, n(e, 0, o.length))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_shuffleSelf.js"),
				r = o("./node_modules/lodash/values.js");
			t.exports = function(t) {
				return n(r(t))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseRandom.js");
			t.exports = function(t, e) {
				var o = -1,
					r = t.length,
					s = r - 1;
				for (e = void 0 === e ? r : e; ++o < e;) {
					var i = n(o, s),
						h = t[i];
					t[i] = t[o], t[o] = h
				}
				return t.length = e, t
			}
		},
		"./node_modules/lodash/first.js": function(t, e, o) {
			t.exports = o("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(t, e) {
			t.exports = function(t) {
				return t && t.length ? t[0] : void 0
			}
		},
		"./node_modules/lodash/random.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseRandom.js"),
				r = o("./node_modules/lodash/_isIterateeCall.js"),
				s = o("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				h = Math.min,
				a = Math.random;
			t.exports = function(t, e, o) {
				if (o && "boolean" != typeof o && r(t, e, o) && (e = o = void 0), void 0 === o && ("boolean" == typeof e ? (o = e, e = void 0) : "boolean" == typeof t && (o = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = s(t), void 0 === e ? (e = t, t = 0) : e = s(e)), t > e) {
					var d = t;
					t = e, e = d
				}
				if (o || t % 1 || e % 1) {
					var u = a();
					return h(t + u * (e - t + i("1e-" + ((u + "").length - 1))), e)
				}
				return n(t, e)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_arraySampleSize.js"),
				r = o("./node_modules/lodash/_baseSampleSize.js"),
				s = o("./node_modules/lodash/isArray.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js"),
				h = o("./node_modules/lodash/toInteger.js");
			t.exports = function(t, e, o) {
				return e = (o ? i(t, e, o) : void 0 === e) ? 1 : h(e), (s(t) ? n : r)(t, e)
			}
		},
		"./node_modules/lodash/shuffle.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_arrayShuffle.js"),
				r = o("./node_modules/lodash/_baseShuffle.js"),
				s = o("./node_modules/lodash/isArray.js");
			t.exports = function(t) {
				return (s(t) ? n : r)(t)
			}
		},
		"./node_modules/lodash/times.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				r = o("./node_modules/lodash/_castFunction.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				h = 4294967295,
				a = Math.min;
			t.exports = function(t, e) {
				if ((t = s(t)) < 1 || t > i) return [];
				var o = h,
					d = a(t, h);
				e = r(e), t -= h;
				for (var u = n(d, e); ++o < t;) e(o);
				return u
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Frontpage.e1496db3e8f6708275cb.js.map