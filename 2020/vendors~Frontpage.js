// https://www.redditstatic.com/desktop2x/vendors~Frontpage.e5512e119c2c1a692876.js
// Retrieved at 10/26/2020, 4:00:07 PM by Reddit Dataminer v1.0.0
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
								s = a(i),
								h = this._rootContainsTarget(i),
								u = r.entry,
								d = e && h && this._computeTargetAndRootIntersection(i, o),
								l = r.entry = new n({
									time: t.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: s,
									rootBounds: o,
									intersectionRect: d
								});
							u ? e && h ? this._hasCrossedThreshold(u, l) && this._queuedEntries.push(l) : u && u.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(o, n) {
						if ("none" != t.getComputedStyle(o).display) {
							for (var r, i, s, h, d, l, c, f, _ = a(o), p = u(o), m = !1; !m;) {
								var v = null,
									g = 1 == p.nodeType ? t.getComputedStyle(p) : {};
								if ("none" == g.display) return;
								if (p == this.root || p == e ? (m = !0, v = n) : p != e.body && p != e.documentElement && "visible" != g.overflow && (v = a(p)), v && (r = v, i = _, s = void 0, h = void 0, d = void 0, l = void 0, c = void 0, f = void 0, s = Math.max(r.top, i.top), h = Math.min(r.bottom, i.bottom), d = Math.max(r.left, i.left), l = Math.min(r.right, i.right), f = h - s, !(_ = (c = l - d) >= 0 && f >= 0 && {
										top: s,
										bottom: h,
										left: d,
										right: l,
										width: c,
										height: f
									}))) break;
								p = u(p)
							}
							return _
						}
					}, r.prototype._getRootRect = function() {
						var t;
						if (this.root) t = a(this.root);
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
						return !this.root || h(e, this.root)
					}, r.prototype._rootContainsTarget = function(t) {
						return h(this.root || e, t)
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

				function a(t) {
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

				function h(t, e) {
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
		"./node_modules/lodash/_arraySampleSize.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseClamp.js"),
				r = o("./node_modules/lodash/_copyArray.js"),
				i = o("./node_modules/lodash/_shuffleSelf.js");
			t.exports = function(t, e) {
				return i(r(t), n(e, 0, t.length))
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
				i = o("./node_modules/lodash/values.js");
			t.exports = function(t, e) {
				var o = i(t);
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
					i = r - 1;
				for (e = void 0 === e ? r : e; ++o < e;) {
					var s = n(o, i),
						a = t[s];
					t[s] = t[o], t[o] = a
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
				i = o("./node_modules/lodash/toFinite.js"),
				s = parseFloat,
				a = Math.min,
				h = Math.random;
			t.exports = function(t, e, o) {
				if (o && "boolean" != typeof o && r(t, e, o) && (e = o = void 0), void 0 === o && ("boolean" == typeof e ? (o = e, e = void 0) : "boolean" == typeof t && (o = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = i(t), void 0 === e ? (e = t, t = 0) : e = i(e)), t > e) {
					var u = t;
					t = e, e = u
				}
				if (o || t % 1 || e % 1) {
					var d = h();
					return a(t + d * (e - t + s("1e-" + ((d + "").length - 1))), e)
				}
				return n(t, e)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_arraySampleSize.js"),
				r = o("./node_modules/lodash/_baseSampleSize.js"),
				i = o("./node_modules/lodash/isArray.js"),
				s = o("./node_modules/lodash/_isIterateeCall.js"),
				a = o("./node_modules/lodash/toInteger.js");
			t.exports = function(t, e, o) {
				return e = (o ? s(t, e, o) : void 0 === e) ? 1 : a(e), (i(t) ? n : r)(t, e)
			}
		},
		"./node_modules/lodash/shuffle.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_arrayShuffle.js"),
				r = o("./node_modules/lodash/_baseShuffle.js"),
				i = o("./node_modules/lodash/isArray.js");
			t.exports = function(t) {
				return (i(t) ? n : r)(t)
			}
		},
		"./node_modules/lodash/times.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				r = o("./node_modules/lodash/_castFunction.js"),
				i = o("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				a = 4294967295,
				h = Math.min;
			t.exports = function(t, e) {
				if ((t = i(t)) < 1 || t > s) return [];
				var o = a,
					u = h(t, a);
				e = r(e), t -= a;
				for (var d = n(u, e); ++o < t;) e(o);
				return d
			}
		},
		"./node_modules/react-uid/dist/es2015/hooks.js": function(t, e, o) {
			"use strict";
			o.d(e, "a", (function() {
				return u
			}));
			var n = o("./node_modules/react/index.js"),
				r = function() {
					var t = 1,
						e = new WeakMap,
						o = function(n, r) {
							return "number" == typeof n || "string" == typeof n ? r ? "idx-" + r : "val-" + n : e.has(n) ? "uid" + e.get(n) : (e.set(n, t++), o(n))
						};
					return o
				},
				i = (r(), function(t) {
					return void 0 === t && (t = ""), {
						value: 1,
						prefix: t,
						uid: r()
					}
				}),
				s = i(),
				a = n.createContext(i()),
				h = function() {
					return n.useState((t = n.useContext(a), {
						uid: o = function(t) {
							return t ? t.prefix : ""
						}(e = t || s) + function(t) {
							return t.value++
						}(e),
						gen: function(t) {
							return o + e.uid(t)
						}
					}));
					var t, e, o
				},
				u = function() {
					return h()[0].gen
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Frontpage.e5512e119c2c1a692876.js.map