// https://www.redditstatic.com/desktop2x/vendors~PostCreation.6098f1db9a539187e2ea.js
// Retrieved at 1/27/2020, 4:40:17 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~PostCreation"], {
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
						for (var o = Object.keys(e), r = 0, s = o.length; r < s; r++) e[o[r]] && e[o[r]](t)
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
								i = a(s),
								h = this._rootContainsTarget(s),
								u = r.entry,
								d = e && h && this._computeTargetAndRootIntersection(s, o),
								_ = r.entry = new n({
									time: t.performance && performance.now && performance.now(),
									target: s,
									boundingClientRect: i,
									rootBounds: o,
									intersectionRect: d
								});
							u ? e && h ? this._hasCrossedThreshold(u, _) && this._queuedEntries.push(_) : u && u.isIntersecting && this._queuedEntries.push(_) : this._queuedEntries.push(_)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, r.prototype._computeTargetAndRootIntersection = function(o, n) {
						if ("none" != t.getComputedStyle(o).display) {
							for (var r, s, i, h, d, _, c, l, p = a(o), f = u(o), m = !1; !m;) {
								var v = null,
									g = 1 == f.nodeType ? t.getComputedStyle(f) : {};
								if ("none" == g.display) return;
								if (f == this.root || f == e ? (m = !0, v = n) : f != e.body && f != e.documentElement && "visible" != g.overflow && (v = a(f)), v && (r = v, s = p, i = void 0, h = void 0, d = void 0, _ = void 0, c = void 0, l = void 0, i = Math.max(r.top, s.top), h = Math.min(r.bottom, s.bottom), d = Math.max(r.left, s.left), _ = Math.min(r.right, s.right), l = h - i, !(p = (c = _ - d) >= 0 && l >= 0 && {
										top: i,
										bottom: h,
										left: d,
										right: _,
										width: c,
										height: l
									}))) break;
								f = u(f)
							}
							return p
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
								var s = this.thresholds[r];
								if (s == o || s == n || s < o != s < n) return !0
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
		"./node_modules/lodash/_LazyWrapper.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseCreate.js"),
				r = o("./node_modules/lodash/_baseLodash.js"),
				s = 4294967295;

			function i(t) {
				this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = s, this.__views__ = []
			}
			i.prototype = n(r.prototype), i.prototype.constructor = i, t.exports = i
		},
		"./node_modules/lodash/_LodashWrapper.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseCreate.js"),
				r = o("./node_modules/lodash/_baseLodash.js");

			function s(t, e) {
				this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
			}
			s.prototype = n(r.prototype), s.prototype.constructor = s, t.exports = s
		},
		"./node_modules/lodash/_arrayEvery.js": function(t, e) {
			t.exports = function(t, e) {
				for (var o = -1, n = null == t ? 0 : t.length; ++o < n;)
					if (!e(t[o], o, t)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseEach.js");
			t.exports = function(t, e) {
				var o = !0;
				return n(t, (function(t, n, r) {
					return o = !!e(t, n, r)
				})), o
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
		"./node_modules/lodash/_baseLodash.js": function(t, e) {
			t.exports = function() {}
		},
		"./node_modules/lodash/_getData.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_metaMap.js"),
				r = o("./node_modules/lodash/noop.js"),
				s = n ? function(t) {
					return n.get(t)
				} : r;
			t.exports = s
		},
		"./node_modules/lodash/_getFuncName.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_realNames.js"),
				r = Object.prototype.hasOwnProperty;
			t.exports = function(t) {
				for (var e = t.name + "", o = n[e], s = r.call(n, e) ? o.length : 0; s--;) {
					var i = o[s],
						a = i.func;
					if (null == a || a == t) return i.name
				}
				return e
			}
		},
		"./node_modules/lodash/_isLaziable.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_LazyWrapper.js"),
				r = o("./node_modules/lodash/_getData.js"),
				s = o("./node_modules/lodash/_getFuncName.js"),
				i = o("./node_modules/lodash/wrapperLodash.js");
			t.exports = function(t) {
				var e = s(t),
					o = i[e];
				if ("function" != typeof o || !(e in n.prototype)) return !1;
				if (t === o) return !0;
				var a = r(o);
				return !!a && t === a[0]
			}
		},
		"./node_modules/lodash/_metaMap.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_WeakMap.js"),
				r = n && new n;
			t.exports = r
		},
		"./node_modules/lodash/_realNames.js": function(t, e) {
			t.exports = {}
		},
		"./node_modules/lodash/_wrapperClone.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_LazyWrapper.js"),
				r = o("./node_modules/lodash/_LodashWrapper.js"),
				s = o("./node_modules/lodash/_copyArray.js");
			t.exports = function(t) {
				if (t instanceof n) return t.clone();
				var e = new r(t.__wrapped__, t.__chain__);
				return e.__actions__ = s(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
			}
		},
		"./node_modules/lodash/every.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_arrayEvery.js"),
				r = o("./node_modules/lodash/_baseEvery.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				i = o("./node_modules/lodash/isArray.js"),
				a = o("./node_modules/lodash/_isIterateeCall.js");
			t.exports = function(t, e, o) {
				var h = i(t) ? n : r;
				return o && a(t, e, o) && (e = void 0), h(t, s(e, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseFindKey.js"),
				r = o("./node_modules/lodash/_baseForOwn.js"),
				s = o("./node_modules/lodash/_baseIteratee.js");
			t.exports = function(t, e) {
				return n(t, s(e, 3), r)
			}
		},
		"./node_modules/lodash/times.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				r = o("./node_modules/lodash/_castFunction.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				h = Math.min;
			t.exports = function(t, e) {
				if ((t = s(t)) < 1 || t > i) return [];
				var o = a,
					u = h(t, a);
				e = r(e), t -= a;
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
		},
		"./node_modules/lodash/wrapperLodash.js": function(t, e, o) {
			var n = o("./node_modules/lodash/_LazyWrapper.js"),
				r = o("./node_modules/lodash/_LodashWrapper.js"),
				s = o("./node_modules/lodash/_baseLodash.js"),
				i = o("./node_modules/lodash/isArray.js"),
				a = o("./node_modules/lodash/isObjectLike.js"),
				h = o("./node_modules/lodash/_wrapperClone.js"),
				u = Object.prototype.hasOwnProperty;

			function d(t) {
				if (a(t) && !i(t) && !(t instanceof n)) {
					if (t instanceof r) return t;
					if (u.call(t, "__wrapped__")) return h(t)
				}
				return new r(t)
			}
			d.prototype = s.prototype, d.prototype.constructor = d, t.exports = d
		}
	}
]);
//# sourceMappingURL=vendors~PostCreation.6098f1db9a539187e2ea.js.map