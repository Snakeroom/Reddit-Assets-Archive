// https://www.redditstatic.com/desktop2x/vendors~PostCreation~Subreddit.e1c74d9c118cc2abc046.js
// Retrieved at 1/5/2023, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~PostCreation~Subreddit"], {
		"./node_modules/classnames/index.js": function(t, e, n) {
			var r;
			! function() {
				"use strict";
				var n = {}.hasOwnProperty;

				function o() {
					for (var t = [], e = 0; e < arguments.length; e++) {
						var r = arguments[e];
						if (r) {
							var i = typeof r;
							if ("string" === i || "number" === i) t.push(r);
							else if (Array.isArray(r)) {
								if (r.length) {
									var s = o.apply(null, r);
									s && t.push(s)
								}
							} else if ("object" === i)
								if (r.toString === Object.prototype.toString)
									for (var a in r) n.call(r, a) && r[a] && t.push(a);
								else t.push(r.toString())
						}
					}
					return t.join(" ")
				}
				t.exports ? (o.default = o, t.exports = o) : void 0 === (r = function() {
					return o
				}.apply(e, [])) || (t.exports = r)
			}()
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
					o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function(t) {
						if (!this._observationTargets.some((function(e) {
								return e.element == t
							}))) {
							if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: t,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, o.prototype.unobserve = function(t) {
						this._observationTargets = this._observationTargets.filter((function(e) {
							return e.element != t
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, o.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, o.prototype.takeRecords = function() {
						var t = this._queuedEntries.slice();
						return this._queuedEntries = [], t
					}, o.prototype._initThresholds = function(t) {
						var e = t || [0];
						return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, n) {
							if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return t !== n[e - 1]
						}))
					}, o.prototype._parseRootMargin = function(t) {
						var e = (t || "0px").split(/\s+/).map((function(t) {
							var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
							if (!e) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(e[1]),
								unit: e[2]
							}
						}));
						return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
					}, o.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(t, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, o.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, o.prototype._checkForIntersections = function() {
						var e = this._rootIsInDom(),
							n = e ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(o) {
							var i = o.element,
								s = a(i),
								c = this._rootContainsTarget(i),
								f = o.entry,
								u = e && c && this._computeTargetAndRootIntersection(i, n),
								p = o.entry = new r({
									time: t.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: s,
									rootBounds: n,
									intersectionRect: u
								});
							f ? e && c ? this._hasCrossedThreshold(f, p) && this._queuedEntries.push(p) : f && f.isIntersecting && this._queuedEntries.push(p) : this._queuedEntries.push(p)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != t.getComputedStyle(n).display) {
							for (var o, i, s, c, u, p, l, d, h = a(n), m = f(n), g = !1; !g;) {
								var v = null,
									b = 1 == m.nodeType ? t.getComputedStyle(m) : {};
								if ("none" == b.display) return;
								if (m == this.root || m == e ? (g = !0, v = r) : m != e.body && m != e.documentElement && "visible" != b.overflow && (v = a(m)), v && (o = v, i = h, s = void 0, c = void 0, u = void 0, p = void 0, l = void 0, d = void 0, s = Math.max(o.top, i.top), c = Math.min(o.bottom, i.bottom), u = Math.max(o.left, i.left), p = Math.min(o.right, i.right), d = c - s, !(h = (l = p - u) >= 0 && d >= 0 && {
										top: s,
										bottom: c,
										left: u,
										right: p,
										width: l,
										height: d
									}))) break;
								m = f(m)
							}
							return h
						}
					}, o.prototype._getRootRect = function() {
						var t;
						if (this.root) t = a(this.root);
						else {
							var n = e.documentElement,
								r = e.body;
							t = {
								top: 0,
								left: 0,
								right: n.clientWidth || r.clientWidth,
								width: n.clientWidth || r.clientWidth,
								bottom: n.clientHeight || r.clientHeight,
								height: n.clientHeight || r.clientHeight
							}
						}
						return this._expandRectByRootMargin(t)
					}, o.prototype._expandRectByRootMargin = function(t) {
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
					}, o.prototype._hasCrossedThreshold = function(t, e) {
						var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
							r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var o = 0; o < this.thresholds.length; o++) {
								var i = this.thresholds[o];
								if (i == n || i == r || i < n != i < r) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || c(e, this.root)
					}, o.prototype._rootContainsTarget = function(t) {
						return c(this.root || e, t)
					}, o.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, o.prototype._unregisterInstance = function() {
						var t = n.indexOf(this); - 1 != t && n.splice(t, 1)
					}, t.IntersectionObserver = o, t.IntersectionObserverEntry = r
				}

				function r(t) {
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
						r = this.intersectionRect,
						o = r.width * r.height;
					this.intersectionRatio = n ? o / n : this.isIntersecting ? 1 : 0
				}

				function o(t, e) {
					var n, r, o, i = e || {};
					if ("function" != typeof t) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							n(), o = null
						}), r))
					}), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
						return t.value + t.unit
					})).join(" ")
				}

				function i(t, e, n, r) {
					"function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
				}

				function s(t, e, n, r) {
					"function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
				}

				function a(t) {
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
						n = f(n)
					}
					return !1
				}

				function f(t) {
					var e = t.parentNode;
					return e && 11 == e.nodeType && e.host ? e.host : e
				}
			}(window, document)
		},
		"./node_modules/lodash/map.js": function(t, e, n) {
			var r = n("./node_modules/lodash/_arrayMap.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseMap.js"),
				s = n("./node_modules/lodash/isArray.js");
			t.exports = function(t, e) {
				return (s(t) ? r : i)(t, o(e, 3))
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return dt
			}));
			var r = n("./node_modules/react/index.js");

			function o(t) {
				var e = t.getBoundingClientRect();
				return {
					width: e.width,
					height: e.height,
					top: e.top,
					right: e.right,
					bottom: e.bottom,
					left: e.left,
					x: e.left,
					y: e.top
				}
			}

			function i(t) {
				if ("[object Window]" !== t.toString()) {
					var e = t.ownerDocument;
					return e ? e.defaultView : window
				}
				return t
			}

			function s(t) {
				var e = i(t);
				return {
					scrollLeft: e.pageXOffset,
					scrollTop: e.pageYOffset
				}
			}

			function a(t) {
				return t instanceof i(t).Element || t instanceof Element
			}

			function c(t) {
				return t instanceof i(t).HTMLElement || t instanceof HTMLElement
			}

			function f(t) {
				return t ? (t.nodeName || "").toLowerCase() : null
			}

			function u(t) {
				return (a(t) ? t.ownerDocument : t.document).documentElement
			}

			function p(t) {
				return o(u(t)).left + s(t).scrollLeft
			}

			function l(t) {
				return i(t).getComputedStyle(t)
			}

			function d(t) {
				var e = l(t),
					n = e.overflow,
					r = e.overflowX,
					o = e.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + r)
			}

			function h(t, e, n) {
				void 0 === n && (n = !1);
				var r, a, l = u(e),
					h = o(t),
					m = c(e),
					g = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (m || !m && !n) && (("body" !== f(e) || d(l)) && (g = (r = e) !== i(r) && c(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : s(r)), c(e) ? ((v = o(e)).x += e.clientLeft, v.y += e.clientTop) : l && (v.x = p(l))), {
					x: h.left + g.scrollLeft - v.x,
					y: h.top + g.scrollTop - v.y,
					width: h.width,
					height: h.height
				}
			}

			function m(t) {
				return {
					x: t.offsetLeft,
					y: t.offsetTop,
					width: t.offsetWidth,
					height: t.offsetHeight
				}
			}

			function g(t) {
				return "html" === f(t) ? t : t.assignedSlot || t.parentNode || t.host || u(t)
			}

			function v(t, e) {
				void 0 === e && (e = []);
				var n = function t(e) {
						return ["html", "body", "#document"].indexOf(f(e)) >= 0 ? e.ownerDocument.body : c(e) && d(e) ? e : t(g(e))
					}(t),
					r = "body" === f(n),
					o = i(n),
					s = r ? [o].concat(o.visualViewport || [], d(n) ? n : []) : n,
					a = e.concat(s);
				return r ? a : a.concat(v(g(s)))
			}

			function b(t) {
				return ["table", "td", "th"].indexOf(f(t)) >= 0
			}

			function y(t) {
				return c(t) && "fixed" !== l(t).position ? t.offsetParent : null
			}

			function O(t) {
				for (var e = i(t), n = y(t); n && b(n) && "static" === l(n).position;) n = y(n);
				return n && "body" === f(n) && "static" === l(n).position ? e : n || function(t) {
					for (var e = g(t); c(e) && ["html", "body"].indexOf(f(e)) < 0;) {
						var n = l(e);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return e;
						e = e.parentNode
					}
					return null
				}(t) || e
			}
			var w = "top",
				x = "bottom",
				_ = "right",
				j = "left",
				E = "auto",
				I = [w, x, _, j],
				M = "start",
				R = "end",
				T = "clippingParents",
				k = "viewport",
				L = "popper",
				D = "reference",
				A = I.reduce((function(t, e) {
					return t.concat([e + "-" + M, e + "-" + R])
				}), []),
				P = [].concat(I, [E]).reduce((function(t, e) {
					return t.concat([e, e + "-" + M, e + "-" + R])
				}), []),
				B = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function S(t) {
				var e = new Map,
					n = new Set,
					r = [];
				return t.forEach((function(t) {
					e.set(t.name, t)
				})), t.forEach((function(t) {
					n.has(t.name) || function t(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
							if (!n.has(r)) {
								var o = e.get(r);
								o && t(o)
							}
						})), r.push(o)
					}(t)
				})), r
			}
			var C = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function H() {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				return !e.some((function(t) {
					return !(t && "function" == typeof t.getBoundingClientRect)
				}))
			}

			function W(t) {
				void 0 === t && (t = {});
				var e = t,
					n = e.defaultModifiers,
					r = void 0 === n ? [] : n,
					o = e.defaultOptions,
					i = void 0 === o ? C : o;
				return function(t, e, n) {
					void 0 === n && (n = i);
					var o, s, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, C), i),
							modifiersData: {},
							elements: {
								reference: t,
								popper: e
							},
							attributes: {},
							styles: {}
						},
						f = [],
						u = !1,
						p = {
							state: c,
							setOptions: function(n) {
								l(), c.options = Object.assign(Object.assign(Object.assign({}, i), c.options), n), c.scrollParents = {
									reference: a(t) ? v(t) : t.contextElement ? v(t.contextElement) : [],
									popper: v(e)
								};
								var o = function(t) {
									var e = S(t);
									return B.reduce((function(t, n) {
										return t.concat(e.filter((function(t) {
											return t.phase === n
										})))
									}), [])
								}(function(t) {
									var e = t.reduce((function(t, e) {
										var n = t[e.name];
										return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
											options: Object.assign(Object.assign({}, n.options), e.options),
											data: Object.assign(Object.assign({}, n.data), e.data)
										}) : e, t
									}), {});
									return Object.keys(e).map((function(t) {
										return e[t]
									}))
								}([].concat(r, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(t) {
									return t.enabled
								})), c.orderedModifiers.forEach((function(t) {
									var e = t.name,
										n = t.options,
										r = void 0 === n ? {} : n,
										o = t.effect;
									if ("function" == typeof o) {
										var i = o({
											state: c,
											name: e,
											instance: p,
											options: r
										});
										f.push(i || function() {})
									}
								})), p.update()
							},
							forceUpdate: function() {
								if (!u) {
									var t = c.elements,
										e = t.reference,
										n = t.popper;
									if (H(e, n)) {
										c.rects = {
											reference: h(e, O(n), "fixed" === c.options.strategy),
											popper: m(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(t) {
											return c.modifiersData[t.name] = Object.assign({}, t.data)
										}));
										for (var r = 0; r < c.orderedModifiers.length; r++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[r],
													i = o.fn,
													s = o.options,
													a = void 0 === s ? {} : s,
													f = o.name;
												"function" == typeof i && (c = i({
													state: c,
													options: a,
													name: f,
													instance: p
												}) || c)
											} else c.reset = !1, r = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(t) {
									p.forceUpdate(), t(c)
								}))
							}, function() {
								return s || (s = new Promise((function(t) {
									Promise.resolve().then((function() {
										s = void 0, t(o())
									}))
								}))), s
							}),
							destroy: function() {
								l(), u = !0
							}
						};
					if (!H(t, e)) return p;

					function l() {
						f.forEach((function(t) {
							return t()
						})), f = []
					}
					return p.setOptions(n).then((function(t) {
						!u && n.onFirstUpdate && n.onFirstUpdate(t)
					})), p
				}
			}
			var q = {
				passive: !0
			};

			function F(t) {
				return t.split("-")[0]
			}

			function N(t) {
				return t.split("-")[1]
			}

			function U(t) {
				return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
			}

			function V(t) {
				var e, n = t.reference,
					r = t.element,
					o = t.placement,
					i = o ? F(o) : null,
					s = o ? N(o) : null,
					a = n.x + n.width / 2 - r.width / 2,
					c = n.y + n.height / 2 - r.height / 2;
				switch (i) {
					case w:
						e = {
							x: a,
							y: n.y - r.height
						};
						break;
					case x:
						e = {
							x: a,
							y: n.y + n.height
						};
						break;
					case _:
						e = {
							x: n.x + n.width,
							y: c
						};
						break;
					case j:
						e = {
							x: n.x - r.width,
							y: c
						};
						break;
					default:
						e = {
							x: n.x,
							y: n.y
						}
				}
				var f = i ? U(i) : null;
				if (null != f) {
					var u = "y" === f ? "height" : "width";
					switch (s) {
						case M:
							e[f] = Math.floor(e[f]) - Math.floor(n[u] / 2 - r[u] / 2);
							break;
						case R:
							e[f] = Math.floor(e[f]) + Math.ceil(n[u] / 2 - r[u] / 2)
					}
				}
				return e
			}
			var z = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function $(t) {
				var e, n = t.popper,
					r = t.popperRect,
					o = t.placement,
					s = t.offsets,
					a = t.position,
					c = t.gpuAcceleration,
					f = t.adaptive,
					p = function(t) {
						var e = t.x,
							n = t.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(e * r) / r || 0,
							y: Math.round(n * r) / r || 0
						}
					}(s),
					l = p.x,
					d = p.y,
					h = s.hasOwnProperty("x"),
					m = s.hasOwnProperty("y"),
					g = j,
					v = w,
					b = window;
				if (f) {
					var y = O(n);
					y === i(n) && (y = u(n)), o === w && (v = x, d -= y.clientHeight - r.height, d *= c ? 1 : -1), o === j && (g = _, l -= y.clientWidth - r.width, l *= c ? 1 : -1)
				}
				var E, I = Object.assign({
					position: a
				}, f && z);
				return c ? Object.assign(Object.assign({}, I), {}, ((E = {})[v] = m ? "0" : "", E[g] = h ? "0" : "", E.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + l + "px, " + d + "px)" : "translate3d(" + l + "px, " + d + "px, 0)", E)) : Object.assign(Object.assign({}, I), {}, ((e = {})[v] = m ? d + "px" : "", e[g] = h ? l + "px" : "", e.transform = "", e))
			}
			var K = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function X(t) {
				return t.replace(/left|right|bottom|top/g, (function(t) {
					return K[t]
				}))
			}
			var Y = {
				start: "end",
				end: "start"
			};

			function G(t) {
				return t.replace(/start|end/g, (function(t) {
					return Y[t]
				}))
			}

			function J(t, e) {
				var n = Boolean(e.getRootNode && e.getRootNode().host);
				if (t.contains(e)) return !0;
				if (n) {
					var r = e;
					do {
						if (r && t.isSameNode(r)) return !0;
						r = r.parentNode || r.host
					} while (r)
				}
				return !1
			}

			function Q(t) {
				return Object.assign(Object.assign({}, t), {}, {
					left: t.x,
					top: t.y,
					right: t.x + t.width,
					bottom: t.y + t.height
				})
			}

			function Z(t, e) {
				return e === k ? Q(function(t) {
					var e = i(t),
						n = u(t),
						r = e.visualViewport,
						o = n.clientWidth,
						s = n.clientHeight,
						a = 0,
						c = 0;
					return r && (o = r.width, s = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
						width: o,
						height: s,
						x: a + p(t),
						y: c
					}
				}(t)) : c(e) ? function(t) {
					var e = o(t);
					return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
				}(e) : Q(function(t) {
					var e = u(t),
						n = s(t),
						r = t.ownerDocument.body,
						o = Math.max(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						i = Math.max(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + p(t),
						c = -n.scrollTop;
					return "rtl" === l(r || e).direction && (a += Math.max(e.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: i,
						x: a,
						y: c
					}
				}(u(t)))
			}

			function tt(t, e, n) {
				var r = "clippingParents" === e ? function(t) {
						var e = v(t),
							n = ["absolute", "fixed"].indexOf(l(t).position) >= 0 && c(t) ? O(t) : t;
						return a(n) ? e.filter((function(t) {
							return a(t) && J(t, n)
						})) : []
					}(t) : [].concat(e),
					o = [].concat(r, [n]),
					i = o[0],
					s = o.reduce((function(e, n) {
						var r = Z(t, n);
						return e.top = Math.max(r.top, e.top), e.right = Math.min(r.right, e.right), e.bottom = Math.min(r.bottom, e.bottom), e.left = Math.max(r.left, e.left), e
					}), Z(t, i));
				return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
			}

			function et(t) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), t)
			}

			function nt(t, e) {
				return e.reduce((function(e, n) {
					return e[n] = t, e
				}), {})
			}

			function rt(t, e) {
				void 0 === e && (e = {});
				var n = e,
					r = n.placement,
					i = void 0 === r ? t.placement : r,
					s = n.boundary,
					c = void 0 === s ? T : s,
					f = n.rootBoundary,
					p = void 0 === f ? k : f,
					l = n.elementContext,
					d = void 0 === l ? L : l,
					h = n.altBoundary,
					m = void 0 !== h && h,
					g = n.padding,
					v = void 0 === g ? 0 : g,
					b = et("number" != typeof v ? v : nt(v, I)),
					y = d === L ? D : L,
					O = t.elements.reference,
					j = t.rects.popper,
					E = t.elements[m ? y : d],
					M = tt(a(E) ? E : E.contextElement || u(t.elements.popper), c, p),
					R = o(O),
					A = V({
						reference: R,
						element: j,
						strategy: "absolute",
						placement: i
					}),
					P = Q(Object.assign(Object.assign({}, j), A)),
					B = d === L ? P : R,
					S = {
						top: M.top - B.top + b.top,
						bottom: B.bottom - M.bottom + b.bottom,
						left: M.left - B.left + b.left,
						right: B.right - M.right + b.right
					},
					C = t.modifiersData.offset;
				if (d === L && C) {
					var H = C[i];
					Object.keys(S).forEach((function(t) {
						var e = [_, x].indexOf(t) >= 0 ? 1 : -1,
							n = [w, x].indexOf(t) >= 0 ? "y" : "x";
						S[t] += H[n] * e
					}))
				}
				return S
			}

			function ot(t, e, n) {
				return Math.max(t, Math.min(e, n))
			}

			function it(t, e, n) {
				return void 0 === n && (n = {
					x: 0,
					y: 0
				}), {
					top: t.top - e.height - n.y,
					right: t.right - e.width + n.x,
					bottom: t.bottom - e.height + n.y,
					left: t.left - e.width - n.x
				}
			}

			function st(t) {
				return [w, _, x, j].some((function(e) {
					return t[e] >= 0
				}))
			}
			var at = W({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(t) {
							var e = t.state,
								n = t.instance,
								r = t.options,
								o = r.scroll,
								s = void 0 === o || o,
								a = r.resize,
								c = void 0 === a || a,
								f = i(e.elements.popper),
								u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
							return s && u.forEach((function(t) {
									t.addEventListener("scroll", n.update, q)
								})), c && f.addEventListener("resize", n.update, q),
								function() {
									s && u.forEach((function(t) {
										t.removeEventListener("scroll", n.update, q)
									})), c && f.removeEventListener("resize", n.update, q)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(t) {
							var e = t.state,
								n = t.name;
							e.modifiersData[n] = V({
								reference: e.rects.reference,
								element: e.rects.popper,
								strategy: "absolute",
								placement: e.placement
							})
						},
						data: {}
					}, {
						name: "computeStyles",
						enabled: !0,
						phase: "beforeWrite",
						fn: function(t) {
							var e = t.state,
								n = t.options,
								r = n.gpuAcceleration,
								o = void 0 === r || r,
								i = n.adaptive,
								s = void 0 === i || i,
								a = {
									placement: F(e.placement),
									popper: e.elements.popper,
									popperRect: e.rects.popper,
									gpuAcceleration: o
								};
							null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), $(Object.assign(Object.assign({}, a), {}, {
								offsets: e.modifiersData.popperOffsets,
								position: e.options.strategy,
								adaptive: s
							})))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), $(Object.assign(Object.assign({}, a), {}, {
								offsets: e.modifiersData.arrow,
								position: "absolute",
								adaptive: !1
							})))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
								"data-popper-placement": e.placement
							})
						},
						data: {}
					}, {
						name: "applyStyles",
						enabled: !0,
						phase: "write",
						fn: function(t) {
							var e = t.state;
							Object.keys(e.elements).forEach((function(t) {
								var n = e.styles[t] || {},
									r = e.attributes[t] || {},
									o = e.elements[t];
								c(o) && f(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(t) {
									var e = r[t];
									!1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
								})))
							}))
						},
						effect: function(t) {
							var e = t.state,
								n = {
									popper: {
										position: e.options.strategy,
										left: "0",
										top: "0",
										margin: "0"
									},
									arrow: {
										position: "absolute"
									},
									reference: {}
								};
							return Object.assign(e.elements.popper.style, n.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
								function() {
									Object.keys(e.elements).forEach((function(t) {
										var r = e.elements[t],
											o = e.attributes[t] || {},
											i = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
												return t[e] = "", t
											}), {});
										c(r) && f(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(t) {
											r.removeAttribute(t)
										})))
									}))
								}
						},
						requires: ["computeStyles"]
					}, {
						name: "offset",
						enabled: !0,
						phase: "main",
						requires: ["popperOffsets"],
						fn: function(t) {
							var e = t.state,
								n = t.options,
								r = t.name,
								o = n.offset,
								i = void 0 === o ? [0, 0] : o,
								s = P.reduce((function(t, n) {
									return t[n] = function(t, e, n) {
										var r = F(t),
											o = [j, w].indexOf(r) >= 0 ? -1 : 1,
											i = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {
												placement: t
											})) : n,
											s = i[0],
											a = i[1];
										return s = s || 0, a = (a || 0) * o, [j, _].indexOf(r) >= 0 ? {
											x: a,
											y: s
										} : {
											x: s,
											y: a
										}
									}(n, e.rects, i), t
								}), {}),
								a = s[e.placement],
								c = a.x,
								f = a.y;
							null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += f), e.modifiersData[r] = s
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(t) {
							var e = t.state,
								n = t.options,
								r = t.name;
							if (!e.modifiersData[r]._skip) {
								for (var o = n.mainAxis, i = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, c = n.fallbackPlacements, f = n.padding, u = n.boundary, p = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, h = void 0 === d || d, m = n.allowedAutoPlacements, g = e.options.placement, v = F(g), b = c || (v === g || !h ? [X(g)] : function(t) {
										if (F(t) === E) return [];
										var e = X(t);
										return [G(t), e, G(e)]
									}(g)), y = [g].concat(b).reduce((function(t, n) {
										return t.concat(F(n) === E ? function(t, e) {
											void 0 === e && (e = {});
											var n = e,
												r = n.placement,
												o = n.boundary,
												i = n.rootBoundary,
												s = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												f = void 0 === c ? P : c,
												u = N(r),
												p = (u ? a ? A : A.filter((function(t) {
													return N(t) === u
												})) : I).filter((function(t) {
													return f.indexOf(t) >= 0
												})).reduce((function(e, n) {
													return e[n] = rt(t, {
														placement: n,
														boundary: o,
														rootBoundary: i,
														padding: s
													})[F(n)], e
												}), {});
											return Object.keys(p).sort((function(t, e) {
												return p[t] - p[e]
											}))
										}(e, {
											placement: n,
											boundary: u,
											rootBoundary: p,
											padding: f,
											flipVariations: h,
											allowedAutoPlacements: m
										}) : n)
									}), []), O = e.rects.reference, R = e.rects.popper, T = new Map, k = !0, L = y[0], D = 0; D < y.length; D++) {
									var B = y[D],
										S = F(B),
										C = N(B) === M,
										H = [w, x].indexOf(S) >= 0,
										W = H ? "width" : "height",
										q = rt(e, {
											placement: B,
											boundary: u,
											rootBoundary: p,
											altBoundary: l,
											padding: f
										}),
										U = H ? C ? _ : j : C ? x : w;
									O[W] > R[W] && (U = X(U));
									var V = X(U),
										z = [];
									if (i && z.push(q[S] <= 0), a && z.push(q[U] <= 0, q[V] <= 0), z.every((function(t) {
											return t
										}))) {
										L = B, k = !1;
										break
									}
									T.set(B, z)
								}
								if (k)
									for (var $ = function(t) {
											var e = y.find((function(e) {
												var n = T.get(e);
												if (n) return n.slice(0, t).every((function(t) {
													return t
												}))
											}));
											if (e) return L = e, "break"
										}, K = h ? 3 : 1; K > 0; K--) {
										if ("break" === $(K)) break
									}
								e.placement !== L && (e.modifiersData[r]._skip = !0, e.placement = L, e.reset = !0)
							}
						},
						requiresIfExists: ["offset"],
						data: {
							_skip: !1
						}
					}, {
						name: "preventOverflow",
						enabled: !0,
						phase: "main",
						fn: function(t) {
							var e = t.state,
								n = t.options,
								r = t.name,
								o = n.mainAxis,
								i = void 0 === o || o,
								s = n.altAxis,
								a = void 0 !== s && s,
								c = n.boundary,
								f = n.rootBoundary,
								u = n.altBoundary,
								p = n.padding,
								l = n.tether,
								d = void 0 === l || l,
								h = n.tetherOffset,
								g = void 0 === h ? 0 : h,
								v = rt(e, {
									boundary: c,
									rootBoundary: f,
									padding: p,
									altBoundary: u
								}),
								b = F(e.placement),
								y = N(e.placement),
								E = !y,
								I = U(b),
								R = "x" === I ? "y" : "x",
								T = e.modifiersData.popperOffsets,
								k = e.rects.reference,
								L = e.rects.popper,
								D = "function" == typeof g ? g(Object.assign(Object.assign({}, e.rects), {}, {
									placement: e.placement
								})) : g,
								A = {
									x: 0,
									y: 0
								};
							if (T) {
								if (i) {
									var P = "y" === I ? w : j,
										B = "y" === I ? x : _,
										S = "y" === I ? "height" : "width",
										C = T[I],
										H = T[I] + v[P],
										W = T[I] - v[B],
										q = d ? -L[S] / 2 : 0,
										V = y === M ? k[S] : L[S],
										z = y === M ? -L[S] : -k[S],
										$ = e.elements.arrow,
										K = d && $ ? m($) : {
											width: 0,
											height: 0
										},
										X = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Y = X[P],
										G = X[B],
										J = ot(0, k[S], K[S]),
										Q = E ? k[S] / 2 - q - J - Y - D : V - J - Y - D,
										Z = E ? -k[S] / 2 + q + J + G + D : z + J + G + D,
										tt = e.elements.arrow && O(e.elements.arrow),
										et = tt ? "y" === I ? tt.clientTop || 0 : tt.clientLeft || 0 : 0,
										nt = e.modifiersData.offset ? e.modifiersData.offset[e.placement][I] : 0,
										it = T[I] + Q - nt - et,
										st = T[I] + Z - nt,
										at = ot(d ? Math.min(H, it) : H, C, d ? Math.max(W, st) : W);
									T[I] = at, A[I] = at - C
								}
								if (a) {
									var ct = "x" === I ? w : j,
										ft = "x" === I ? x : _,
										ut = T[R],
										pt = ot(ut + v[ct], ut, ut - v[ft]);
									T[R] = pt, A[R] = pt - ut
								}
								e.modifiersData[r] = A
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(t) {
							var e, n = t.state,
								r = t.name,
								o = n.elements.arrow,
								i = n.modifiersData.popperOffsets,
								s = F(n.placement),
								a = U(s),
								c = [j, _].indexOf(s) >= 0 ? "height" : "width";
							if (o && i) {
								var f = n.modifiersData[r + "#persistent"].padding,
									u = m(o),
									p = "y" === a ? w : j,
									l = "y" === a ? x : _,
									d = n.rects.reference[c] + n.rects.reference[a] - i[a] - n.rects.popper[c],
									h = i[a] - n.rects.reference[a],
									g = O(o),
									v = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
									b = d / 2 - h / 2,
									y = f[p],
									E = v - u[c] - f[l],
									I = v / 2 - u[c] / 2 + b,
									M = ot(y, I, E),
									R = a;
								n.modifiersData[r] = ((e = {})[R] = M, e.centerOffset = M - I, e)
							}
						},
						effect: function(t) {
							var e = t.state,
								n = t.options,
								r = t.name,
								o = n.element,
								i = void 0 === o ? "[data-popper-arrow]" : o,
								s = n.padding,
								a = void 0 === s ? 0 : s;
							null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && J(e.elements.popper, i) && (e.elements.arrow = i, e.modifiersData[r + "#persistent"] = {
								padding: et("number" != typeof a ? a : nt(a, I))
							})
						},
						requires: ["popperOffsets"],
						requiresIfExists: ["preventOverflow"]
					}, {
						name: "hide",
						enabled: !0,
						phase: "main",
						requiresIfExists: ["preventOverflow"],
						fn: function(t) {
							var e = t.state,
								n = t.name,
								r = e.rects.reference,
								o = e.rects.popper,
								i = e.modifiersData.preventOverflow,
								s = rt(e, {
									elementContext: "reference"
								}),
								a = rt(e, {
									altBoundary: !0
								}),
								c = it(s, r),
								f = it(a, o, i),
								u = st(c),
								p = st(f);
							e.modifiersData[n] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: f,
								isReferenceHidden: u,
								hasPopperEscaped: p
							}, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
								"data-popper-reference-hidden": u,
								"data-popper-escaped": p
							})
						}
					}]
				}),
				ct = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ft = n.n(ct),
				ut = function(t) {
					return t.reduce((function(t, e) {
						var n = e[0],
							r = e[1];
						return t[n] = r, t
					}), {})
				},
				pt = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				lt = [],
				dt = function(t, e, n) {
					void 0 === n && (n = {});
					var o = r.useRef(null),
						i = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || lt
						},
						s = r.useState({
							styles: {
								popper: {
									position: i.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = s[0],
						c = s[1],
						f = r.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(t) {
									var e = t.state,
										n = Object.keys(e.elements);
									c({
										styles: ut(n.map((function(t) {
											return [t, e.styles[t] || {}]
										}))),
										attributes: ut(n.map((function(t) {
											return [t, e.attributes[t]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						u = r.useMemo((function() {
							var t = {
								onFirstUpdate: i.onFirstUpdate,
								placement: i.placement,
								strategy: i.strategy,
								modifiers: [].concat(i.modifiers, [f, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ft()(o.current, t) ? o.current || t : (o.current = t, t)
						}), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]),
						p = r.useRef();
					return pt((function() {
						p.current && p.current.setOptions(u)
					}), [u]), pt((function() {
						if (null != t && null != e) {
							var r = (n.createPopper || at)(t, e, u);
							return p.current = r,
								function() {
									r.destroy(), p.current = null
								}
						}
					}), [t, e, n.createPopper]), {
						state: p.current ? p.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: p.current ? p.current.update : null,
						forceUpdate: p.current ? p.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(t, e) {
			var n = "undefined" != typeof Element,
				r = "function" == typeof Map,
				o = "function" == typeof Set,
				i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			t.exports = function(t, e) {
				try {
					return function t(e, s) {
						if (e === s) return !0;
						if (e && s && "object" == typeof e && "object" == typeof s) {
							if (e.constructor !== s.constructor) return !1;
							var a, c, f, u;
							if (Array.isArray(e)) {
								if ((a = e.length) != s.length) return !1;
								for (c = a; 0 != c--;)
									if (!t(e[c], s[c])) return !1;
								return !0
							}
							if (r && e instanceof Map && s instanceof Map) {
								if (e.size !== s.size) return !1;
								for (u = e.entries(); !(c = u.next()).done;)
									if (!s.has(c.value[0])) return !1;
								for (u = e.entries(); !(c = u.next()).done;)
									if (!t(c.value[1], s.get(c.value[0]))) return !1;
								return !0
							}
							if (o && e instanceof Set && s instanceof Set) {
								if (e.size !== s.size) return !1;
								for (u = e.entries(); !(c = u.next()).done;)
									if (!s.has(c.value[0])) return !1;
								return !0
							}
							if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(s)) {
								if ((a = e.length) != s.length) return !1;
								for (c = a; 0 != c--;)
									if (e[c] !== s[c]) return !1;
								return !0
							}
							if (e.constructor === RegExp) return e.source === s.source && e.flags === s.flags;
							if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === s.valueOf();
							if (e.toString !== Object.prototype.toString) return e.toString() === s.toString();
							if ((a = (f = Object.keys(e)).length) !== Object.keys(s).length) return !1;
							for (c = a; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(s, f[c])) return !1;
							if (n && e instanceof Element) return !1;
							for (c = a; 0 != c--;)
								if (("_owner" !== f[c] && "__v" !== f[c] && "__o" !== f[c] || !e.$$typeof) && !t(e[f[c]], s[f[c]])) return !1;
							return !0
						}
						return e != e && s != s
					}(t, e)
				} catch (s) {
					if ((s.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw s
				}
			}
		},
		"./node_modules/shallowequal/index.js": function(t, e) {
			t.exports = function(t, e, n, r) {
				var o = n ? n.call(r, t, e) : void 0;
				if (void 0 !== o) return !!o;
				if (t === e) return !0;
				if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
				var i = Object.keys(t),
					s = Object.keys(e);
				if (i.length !== s.length) return !1;
				for (var a = Object.prototype.hasOwnProperty.bind(e), c = 0; c < i.length; c++) {
					var f = i[c];
					if (!a(f)) return !1;
					var u = t[f],
						p = e[f];
					if (!1 === (o = n ? n.call(r, u, p, f) : void 0) || void 0 === o && u !== p) return !1
				}
				return !0
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~PostCreation~Subreddit.e1c74d9c118cc2abc046.js.map