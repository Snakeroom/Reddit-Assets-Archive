// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.e47a298da293a2a3482e.js
// Retrieved at 5/11/2021, 12:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-dom/index.js"),
				i = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, o) {
					return a(e[o], t[o])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, o = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							o = void 0 === n ? "0px" : n,
							s = t[1],
							r = void 0 === s ? o : s,
							a = t[2],
							c = void 0 === a ? o : a,
							d = t[3];
						return o + " " + r + " " + c + " " + (void 0 === d ? r : d)
					}(e.rootMargin), s = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], r = c.keys(); t = r.next().value;) {
					if (!(n !== t.root || o !== t.rootMargin || a(s, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var o, s = n.values(); o = s.next().value;)
						if (o.target === t.target) return o;
				return null
			}

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var o = l(t, e[n]);
					o && o.handleChange(e[n])
				}
			}

			function p(e) {
				return d(e) || new IntersectionObserver(u, e)
			}
			var m = n("./node_modules/invariant/browser.js"),
				f = n.n(m),
				b = {},
				h = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return b.errorReporter || function(e) {
								return f()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							b.errorReporter = e
						}
					}
				});

			function x(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function v(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var g = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				O = Object.prototype,
				E = O.hasOwnProperty,
				j = O.toString,
				k = function(e) {
					return g.reduce((function(t, n) {
						if (E.call(e, n)) {
							var o = "root" === n && "[object String]" === j.call(e[n]);
							t[n] = o ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				_ = function(e) {
					var t, n;

					function o() {
						for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
						return v(x(t = e.call.apply(e, [this].concat(o)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(x(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var o = n.ref;
								o && ("function" == typeof o ? o(e) : "object" == typeof o && (o.current = e))
							}
							t.targetNode = e && Object(r.findDOMNode)(e)
						})), v(x(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(k(t.props)), t.target = t.targetNode, e = x(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), v(x(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var n = c.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(x(t), e)
						})), v(x(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = o.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = y.some((function(n) {
							return a(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, i.componentDidUpdate = function(e, t, n) {
						var o = !1;
						n || (o = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || o) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? s.a.cloneElement(s.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, o
				}(s.a.Component);
			v(_, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function r() {}
			r.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, r, i) {
					if (i !== o) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
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
					checkPropTypes: r,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				o = Math.random;
			e.exports = function(e, t) {
				return e + n(o() * (t - e + 1))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRandom.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && s(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return o(e, t)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return o(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var o = n("./node_modules/react/index.js");

			function s(e) {
				var t = e.getBoundingClientRect();
				return {
					width: t.width,
					height: t.height,
					top: t.top,
					right: t.right,
					bottom: t.bottom,
					left: t.left,
					x: t.left,
					y: t.top
				}
			}

			function r(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = r(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof r(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof r(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return s(l(e)).left + i(e).scrollLeft
			}

			function p(e) {
				return r(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					o = t.overflowX,
					s = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + s + o)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var o, a, p = l(t),
					f = s(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || m(p)) && (h = (o = t) !== r(o) && c(o) ? {
					scrollLeft: (a = o).scrollLeft,
					scrollTop: a.scrollTop
				} : i(o)), c(t) ? ((x = s(t)).x += t.clientLeft, x.y += t.clientTop) : p && (x.x = u(p))), {
					x: f.left + h.scrollLeft - x.x,
					y: f.top + h.scrollTop - x.y,
					width: f.width,
					height: f.height
				}
			}

			function b(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function h(e) {
				return "html" === d(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function x(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(h(t))
					}(e),
					o = "body" === d(n),
					s = r(n),
					i = o ? [s].concat(s.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return o ? a : a.concat(x(h(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = r(e), n = g(e); n && v(n) && "static" === p(n).position;) n = g(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				E = "bottom",
				j = "right",
				k = "left",
				_ = "auto",
				w = [O, E, j, k],
				C = "start",
				S = "end",
				P = "clippingParents",
				N = "viewport",
				M = "popper",
				I = "reference",
				T = w.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + S])
				}), []),
				A = [].concat(w, [_]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + S])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function F(e) {
				var t = new Map,
					n = new Set,
					o = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(s) {
						n.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function(o) {
							if (!n.has(o)) {
								var s = t.get(o);
								s && e(s)
							}
						})), o.push(s)
					}(e)
				})), o
			}
			var B = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function R() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function D(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					o = void 0 === n ? [] : n,
					s = t.defaultOptions,
					r = void 0 === s ? B : s;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var s, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, B), r),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						d = [],
						l = !1,
						u = {
							state: c,
							setOptions: function(n) {
								p(), c.options = Object.assign(Object.assign(Object.assign({}, r), c.options), n), c.scrollParents = {
									reference: a(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var s = function(e) {
									var t = F(e);
									return L.reduce((function(e, n) {
										return e.concat(t.filter((function(e) {
											return e.phase === n
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var n = e[t.name];
										return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
											options: Object.assign(Object.assign({}, n.options), t.options),
											data: Object.assign(Object.assign({}, n.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(o, c.options.modifiers)));
								return c.orderedModifiers = s.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										o = void 0 === n ? {} : n,
										s = e.effect;
									if ("function" == typeof s) {
										var r = s({
											state: c,
											name: t,
											instance: u,
											options: o
										});
										d.push(r || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = c.elements,
										t = e.reference,
										n = e.popper;
									if (R(t, n)) {
										c.rects = {
											reference: f(t, y(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var o = 0; o < c.orderedModifiers.length; o++)
											if (!0 !== c.reset) {
												var s = c.orderedModifiers[o],
													r = s.fn,
													i = s.options,
													a = void 0 === i ? {} : i,
													d = s.name;
												"function" == typeof r && (c = r({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, o = -1
									}
								}
							},
							update: (s = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(s())
									}))
								}))), i
							}),
							destroy: function() {
								p(), l = !0
							}
						};
					if (!R(e, t)) return u;

					function p() {
						d.forEach((function(e) {
							return e()
						})), d = []
					}
					return u.setOptions(n).then((function(e) {
						!l && n.onFirstUpdate && n.onFirstUpdate(e)
					})), u
				}
			}
			var W = {
				passive: !0
			};

			function H(e) {
				return e.split("-")[0]
			}

			function U(e) {
				return e.split("-")[1]
			}

			function z(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function V(e) {
				var t, n = e.reference,
					o = e.element,
					s = e.placement,
					r = s ? H(s) : null,
					i = s ? U(s) : null,
					a = n.x + n.width / 2 - o.width / 2,
					c = n.y + n.height / 2 - o.height / 2;
				switch (r) {
					case O:
						t = {
							x: a,
							y: n.y - o.height
						};
						break;
					case E:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case j:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case k:
						t = {
							x: n.x - o.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = r ? z(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - o[l] / 2);
							break;
						case S:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - o[l] / 2)
					}
				}
				return t
			}
			var Z = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function q(e) {
				var t, n = e.popper,
					o = e.popperRect,
					s = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							o = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * o) / o || 0,
							y: Math.round(n * o) / o || 0
						}
					}(i),
					p = u.x,
					m = u.y,
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					h = k,
					x = O,
					v = window;
				if (d) {
					var g = y(n);
					g === r(n) && (g = l(n)), s === O && (x = E, m -= g.clientHeight - o.height, m *= c ? 1 : -1), s === k && (h = j, p -= g.clientWidth - o.width, p *= c ? 1 : -1)
				}
				var _, w = Object.assign({
					position: a
				}, d && Z);
				return c ? Object.assign(Object.assign({}, w), {}, ((_ = {})[x] = b ? "0" : "", _[h] = f ? "0" : "", _.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", _)) : Object.assign(Object.assign({}, w), {}, ((t = {})[x] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var G = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function X(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return G[e]
				}))
			}
			var J = {
				start: "end",
				end: "start"
			};

			function K(e) {
				return e.replace(/start|end/g, (function(e) {
					return J[e]
				}))
			}

			function Y(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var o = t;
					do {
						if (o && e.isSameNode(o)) return !0;
						o = o.parentNode || o.host
					} while (o)
				}
				return !1
			}

			function Q(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === N ? Q(function(e) {
					var t = r(e),
						n = l(e),
						o = t.visualViewport,
						s = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return o && (s = o.width, i = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, c = o.offsetTop)), {
						width: s,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = s(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						n = i(e),
						o = e.ownerDocument.body,
						s = Math.max(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(o || t).direction && (a += Math.max(t.clientWidth, o ? o.clientWidth : 0) - s), {
						width: s,
						height: r,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var o = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? y(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Y(e, n)
						})) : []
					}(e) : [].concat(t),
					s = [].concat(o, [n]),
					r = s[0],
					i = s.reduce((function(t, n) {
						var o = $(e, n);
						return t.top = Math.max(o.top, t.top), t.right = Math.min(o.right, t.right), t.bottom = Math.min(o.bottom, t.bottom), t.left = Math.max(o.left, t.left), t
					}), $(e, r));
				return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i
			}

			function te(e) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), e)
			}

			function ne(e, t) {
				return t.reduce((function(t, n) {
					return t[n] = e, t
				}), {})
			}

			function oe(e, t) {
				void 0 === t && (t = {});
				var n = t,
					o = n.placement,
					r = void 0 === o ? e.placement : o,
					i = n.boundary,
					c = void 0 === i ? P : i,
					d = n.rootBoundary,
					u = void 0 === d ? N : d,
					p = n.elementContext,
					m = void 0 === p ? M : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : ne(x, w)),
					g = m === M ? I : M,
					y = e.elements.reference,
					k = e.rects.popper,
					_ = e.elements[b ? g : m],
					C = ee(a(_) ? _ : _.contextElement || l(e.elements.popper), c, u),
					S = s(y),
					T = V({
						reference: S,
						element: k,
						strategy: "absolute",
						placement: r
					}),
					A = Q(Object.assign(Object.assign({}, k), T)),
					L = m === M ? A : S,
					F = {
						top: C.top - L.top + v.top,
						bottom: L.bottom - C.bottom + v.bottom,
						left: C.left - L.left + v.left,
						right: L.right - C.right + v.right
					},
					B = e.modifiersData.offset;
				if (m === M && B) {
					var R = B[r];
					Object.keys(F).forEach((function(e) {
						var t = [j, E].indexOf(e) >= 0 ? 1 : -1,
							n = [O, E].indexOf(e) >= 0 ? "y" : "x";
						F[e] += R[n] * t
					}))
				}
				return F
			}

			function se(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function re(e, t, n) {
				return void 0 === n && (n = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - n.y,
					right: e.right - t.width + n.x,
					bottom: e.bottom - t.height + n.y,
					left: e.left - t.width - n.x
				}
			}

			function ie(e) {
				return [O, j, E, k].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ae = D({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								o = e.options,
								s = o.scroll,
								i = void 0 === s || s,
								a = o.resize,
								c = void 0 === a || a,
								d = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, W)
								})), c && d.addEventListener("resize", n.update, W),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, W)
									})), c && d.removeEventListener("resize", n.update, W)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								n = e.name;
							t.modifiersData[n] = V({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: "absolute",
								placement: t.placement
							})
						},
						data: {}
					}, {
						name: "computeStyles",
						enabled: !0,
						phase: "beforeWrite",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								o = n.gpuAcceleration,
								s = void 0 === o || o,
								r = n.adaptive,
								i = void 0 === r || r,
								a = {
									placement: H(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: s
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), q(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), q(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.arrow,
								position: "absolute",
								adaptive: !1
							})))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-placement": t.placement
							})
						},
						data: {}
					}, {
						name: "applyStyles",
						enabled: !0,
						phase: "write",
						fn: function(e) {
							var t = e.state;
							Object.keys(t.elements).forEach((function(e) {
								var n = t.styles[e] || {},
									o = t.attributes[e] || {},
									s = t.elements[e];
								c(s) && d(s) && (Object.assign(s.style, n), Object.keys(o).forEach((function(e) {
									var t = o[e];
									!1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								n = {
									popper: {
										position: t.options.strategy,
										left: "0",
										top: "0",
										margin: "0"
									},
									arrow: {
										position: "absolute"
									},
									reference: {}
								};
							return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var o = t.elements[e],
											s = t.attributes[e] || {},
											r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(o) && d(o) && (Object.assign(o.style, r), Object.keys(s).forEach((function(e) {
											o.removeAttribute(e)
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
						fn: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name,
								s = n.offset,
								r = void 0 === s ? [0, 0] : s,
								i = A.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var o = H(e),
											s = [k, O].indexOf(o) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * s, [k, j].indexOf(o) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, r), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name;
							if (!t.modifiersData[o]._skip) {
								for (var s = n.mainAxis, r = void 0 === s || s, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, x = H(h), v = c || (x === h || !f ? [X(h)] : function(e) {
										if (H(e) === _) return [];
										var t = X(e);
										return [K(e), t, K(t)]
									}(h)), g = [h].concat(v).reduce((function(e, n) {
										return e.concat(H(n) === _ ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												o = n.placement,
												s = n.boundary,
												r = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? A : c,
												l = U(o),
												u = (l ? a ? T : T.filter((function(e) {
													return U(e) === l
												})) : w).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = oe(e, {
														placement: n,
														boundary: s,
														rootBoundary: r,
														padding: i
													})[H(n)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: n,
											boundary: l,
											rootBoundary: u,
											padding: d,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), y = t.rects.reference, S = t.rects.popper, P = new Map, N = !0, M = g[0], I = 0; I < g.length; I++) {
									var L = g[I],
										F = H(L),
										B = U(L) === C,
										R = [O, E].indexOf(F) >= 0,
										D = R ? "width" : "height",
										W = oe(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										z = R ? B ? j : k : B ? E : O;
									y[D] > S[D] && (z = X(z));
									var V = X(z),
										Z = [];
									if (r && Z.push(W[F] <= 0), a && Z.push(W[z] <= 0, W[V] <= 0), Z.every((function(e) {
											return e
										}))) {
										M = L, N = !1;
										break
									}
									P.set(L, Z)
								}
								if (N)
									for (var q = function(e) {
											var t = g.find((function(t) {
												var n = P.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return M = t, "break"
										}, G = f ? 3 : 1; G > 0; G--) {
										if ("break" === q(G)) break
									}
								t.placement !== M && (t.modifiersData[o]._skip = !0, t.placement = M, t.reset = !0)
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
						fn: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name,
								s = n.mainAxis,
								r = void 0 === s || s,
								i = n.altAxis,
								a = void 0 !== i && i,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								x = oe(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								v = H(t.placement),
								g = U(t.placement),
								_ = !g,
								w = z(v),
								S = "x" === w ? "y" : "x",
								P = t.modifiersData.popperOffsets,
								N = t.rects.reference,
								M = t.rects.popper,
								I = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								T = {
									x: 0,
									y: 0
								};
							if (P) {
								if (r) {
									var A = "y" === w ? O : k,
										L = "y" === w ? E : j,
										F = "y" === w ? "height" : "width",
										B = P[w],
										R = P[w] + x[A],
										D = P[w] - x[L],
										W = m ? -M[F] / 2 : 0,
										V = g === C ? N[F] : M[F],
										Z = g === C ? -M[F] : -N[F],
										q = t.elements.arrow,
										G = m && q ? b(q) : {
											width: 0,
											height: 0
										},
										X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										J = X[A],
										K = X[L],
										Y = se(0, N[F], G[F]),
										Q = _ ? N[F] / 2 - W - Y - J - I : V - Y - J - I,
										$ = _ ? -N[F] / 2 + W + Y + K + I : Z + Y + K + I,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === w ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][w] : 0,
										re = P[w] + Q - ne - te,
										ie = P[w] + $ - ne,
										ae = se(m ? Math.min(R, re) : R, B, m ? Math.max(D, ie) : D);
									P[w] = ae, T[w] = ae - B
								}
								if (a) {
									var ce = "x" === w ? O : k,
										de = "x" === w ? E : j,
										le = P[S],
										ue = se(le + x[ce], le, le - x[de]);
									P[S] = ue, T[S] = ue - le
								}
								t.modifiersData[o] = T
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								o = e.name,
								s = n.elements.arrow,
								r = n.modifiersData.popperOffsets,
								i = H(n.placement),
								a = z(i),
								c = [k, j].indexOf(i) >= 0 ? "height" : "width";
							if (s && r) {
								var d = n.modifiersData[o + "#persistent"].padding,
									l = b(s),
									u = "y" === a ? O : k,
									p = "y" === a ? E : j,
									m = n.rects.reference[c] + n.rects.reference[a] - r[a] - n.rects.popper[c],
									f = r[a] - n.rects.reference[a],
									h = y(s),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = m / 2 - f / 2,
									g = d[u],
									_ = x - l[c] - d[p],
									w = x / 2 - l[c] / 2 + v,
									C = se(g, w, _),
									S = a;
								n.modifiersData[o] = ((t = {})[S] = C, t.centerOffset = C - w, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								o = e.name,
								s = n.element,
								r = void 0 === s ? "[data-popper-arrow]" : s,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Y(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[o + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, w))
							})
						},
						requires: ["popperOffsets"],
						requiresIfExists: ["preventOverflow"]
					}, {
						name: "hide",
						enabled: !0,
						phase: "main",
						requiresIfExists: ["preventOverflow"],
						fn: function(e) {
							var t = e.state,
								n = e.name,
								o = t.rects.reference,
								s = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								i = oe(t, {
									elementContext: "reference"
								}),
								a = oe(t, {
									altBoundary: !0
								}),
								c = re(i, o),
								d = re(a, s, r),
								l = ie(c),
								u = ie(d);
							t.modifiersData[n] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: d,
								isReferenceHidden: l,
								hasPopperEscaped: u
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": u
							})
						}
					}]
				}),
				ce = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = n.n(ce),
				le = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							o = t[1];
						return e[n] = o, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? o.useLayoutEffect : o.useEffect,
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var s = o.useRef(null),
						r = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						i = o.useState({
							styles: {
								popper: {
									position: r.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = i[0],
						c = i[1],
						d = o.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									c({
										styles: le(n.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: le(n.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						l = o.useMemo((function() {
							var e = {
								onFirstUpdate: r.onFirstUpdate,
								placement: r.placement,
								strategy: r.strategy,
								modifiers: [].concat(r.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(s.current, e) ? s.current || e : (s.current = e, e)
						}), [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, d]),
						u = o.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var o = (n.createPopper || ae)(e, t, l);
							return u.current = o,
								function() {
									o.destroy(), u.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: u.current ? u.current.state : null,
						styles: a.styles,
						attributes: a.attributes,
						update: u.current ? u.current.update : null,
						forceUpdate: u.current ? u.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				o = "function" == typeof Map,
				s = "function" == typeof Set,
				r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var a, c, d, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (!e(t[c], i[c])) return !1;
								return !0
							}
							if (o && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (s && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								return !0
							}
							if (r && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (t[c] !== i[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((a = (d = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (c = a; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(i, d[c])) return !1;
							if (n && t instanceof Element) return !1;
							for (c = a; 0 != c--;)
								if (("_owner" !== d[c] && "__v" !== d[c] && "__o" !== d[c] || !t.$$typeof) && !e(t[d[c]], i[d[c]])) return !1;
							return !0
						}
						return t != t && i != i
					}(e, t)
				} catch (i) {
					if ((i.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw i
				}
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (o = (() => {})) => s => {
				const r = p(s.target, s.currentTarget),
					a = m(s.target, s.currentTarget);
				r && n && t && (u(s.target, s.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
					const o = t(e, r, a)(n);
					let s;
					if (o && o.actionInfo) {
						const {
							pageType: e,
							...t
						} = o.actionInfo;
						s = t
					}
					return {
						...o,
						actionInfo: Object(i.previousPageActionInfo)(n, s)
					}
				})), u(s.target, s.currentTarget, l.anchorsAndButtons) && o(s)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(o.useCallback)(c(i, r, n), [i, r, n]);
					return s.a.createElement(e, a({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, n)),
				p = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && p(e.parentElement, t))
				},
				m = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && m(e.parentElement, t))
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				s = n.n(o);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", s.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: s
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !s && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => s.a.createElement(i.a, d({
				className: Object(r.a)(e, c.a.CallToActionButton, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: n,
					subredditId: o
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let s = 0, r = -999; s <= l; s += 1) {
					const e = n[s],
						t = d[e].belongsTo.id;
					m(e) && s - r >= a && !u.has(t) && (r = s, u.add(t), s === l && (p = !0))
				}
				return p ? s.a.createElement(i.a, {
					subredditId: o,
					inFeed: !0
				}) : null;

				function m(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(o.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => s.a.createElement(a.a, l({}, t, {
				className: Object(r.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(a.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s);
			const i = Object(o.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("InFeedChaining")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: r.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(p);
			const f = a.a.div("EventMetaWrapper", m.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(u.a)(n)) return null;
				const o = n && n.eventInfo,
					a = Object(l.a)(n),
					p = o && Object(i.c)(o.eventStart, o.eventEnd);
				return s.a.createElement("div", {
					className: Object(r.a)(m.a.container, e, {
						[m.a.isCompact]: !!t
					})
				}, s.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, s.a.createElement(c.a, {
					post: n
				}), !a && p && s.a.createElement(d.a, {
					className: m.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");

			function c(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				u = n("./src/reddit/icons/fonts/Live/index.tsx"),
				p = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = n.n(p),
				f = n("./src/lib/lessComponent.tsx");
			const b = f.a.span("PostEventFutureText", m.a),
				h = f.a.span("PostEventPastText", m.a),
				x = f.a.span("PostEventNowText", m.a),
				v = f.a.span("Container", m.a),
				g = f.a.wrapped(l.a, "CalendarIcon", m.a),
				y = f.a.wrapped(u.a, "LiveIcon", m.a),
				O = f.a.div("LoadingState", m.a);
			class E extends o.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: o,
						eventIsLive: l,
						eventStart: u
					} = n, p = Object(r.e)(u, o);
					let m, f;
					if (this.state.mounted || p === r.a.Live) m = function(e, t, n) {
						const o = Object(r.e)(e, t),
							s = new Date(e * a.Kb);
						let d;
						return o === r.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (o === r.a.Future ? d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? c(s) : s.toLocaleDateString(void 0, {
							weekday: "long"
						}) : o === r.a.Past && (d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(s)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s)}`)
					}(u, o, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = s.a.createElement(O, {
							className: e
						})
					}
					if (l) f = s.a.createElement(x, null, s.a.createElement(y, null), m);
					else if (p === r.a.Future) f = s.a.createElement(b, null, s.a.createElement(g, null), m);
					else {
						if (p !== r.a.Past) return null;
						f = s.a.createElement(h, null, s.a.createElement(g, null), m)
					}
					return s.a.createElement(v, {
						className: e
					}, f)
				}
			}
			t.a = E
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/NotificationButton/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				d = n("./src/reddit/components/Thumbnail/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/helpers/trackers/post.ts"),
				p = n("./src/reddit/hooks/useIsClient.ts"),
				m = n("./src/reddit/models/Subreddit/index.ts"),
				f = n("./src/reddit/components/MediumPost/index.m.less"),
				b = n.n(f);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: n,
				redditStyle: o,
				shouldShowSubscribeButton: f,
				subredditOrProfile: h,
				templatePlaceholderImage: x,
				shouldShowFollowButton: v,
				isFollowed: g,
				onFollowPostClick: y
			}) => {
				return Object(p.a)() ? s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: v || f
					})
				}, s.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, v && s.a.createElement(a.a, {
					isFilled: !!g,
					onClick: y,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), f && h && s.a.createElement(c.a, {
					className: b.a.subscribeButton,
					getEventFactory: e => Object(u.g)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(m.h)(h) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), s.a.createElement(d.a, {
					crosspost: e,
					post: t,
					redditStyle: o,
					forceShowNSFW: n,
					templatePlaceholderImage: x
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, n) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/ads/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/inFeedChaining.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				f = n("./src/reddit/components/AwardBadges/index.tsx"),
				b = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = n("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				x = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				v = n("./src/reddit/components/FlairWrapper/index.tsx"),
				g = n("./src/reddit/components/Flatlist/index.tsx"),
				y = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = n("./src/reddit/components/ModModeReports/index.tsx"),
				E = n("./src/reddit/components/ModModeReports/helpers.ts"),
				j = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				k = n("./src/reddit/components/PostContainer/index.tsx"),
				_ = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				w = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				C = n("./src/reddit/components/PostTitle/index.tsx"),
				S = n("./src/reddit/components/PostTopLine/index.tsx"),
				P = n("./src/reddit/components/PostTopMeta/index.tsx"),
				N = n("./src/reddit/components/SourceLink/index.tsx"),
				M = n("./src/reddit/constants/experiments.ts"),
				I = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				A = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				L = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				F = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				B = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = n("./src/reddit/models/Vote/index.ts"),
				D = n("./src/reddit/contexts/Post/index.tsx"),
				W = n("./src/reddit/selectors/experiments/categories.ts"),
				H = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				U = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				z = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				V = n("./src/reddit/hooks/useIsOverlay.ts"),
				Z = n("./src/reddit/hooks/useUserContext.ts"),
				q = n("./src/reddit/selectors/inFeedChaining.ts"),
				G = n("./src/reddit/selectors/moderatorPermissions.ts"),
				X = n("./src/reddit/selectors/postFlair.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				K = n("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Y = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = n.n(Y),
				$ = n("./src/reddit/components/MediumPost/index.m.less"),
				ee = n.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = () => Object(i.c)({
					crosspost: J.d,
					flairStyleTemplate: I.S,
					isActive: J.j,
					isCurrentUserProfilePost: J.k,
					isPostChainDismissed: q.c,
					isPostChained: q.d,
					listingBelowVariant: U.b,
					moderatorPermissions: G.j,
					showAwardsPlaque: H.a,
					showEditFlair: X.a,
					showMedia: I.r,
					isInCategoriesExperiment: W.a
				}),
				oe = e => {
					const {
						className: t,
						crosspost: n,
						currentUser: i,
						eventFactory: I,
						flairStyleTemplate: D,
						hideNSFWPref: W,
						hostPostId: H,
						inSubredditOrProfile: U = !1,
						isActionBarAnimationEnabled: V,
						isCheckboxSelected: Z,
						isCommentsPage: q,
						isCurrentUserProfilePost: G,
						isFrontpage: X,
						isOverlay: J,
						isPostChainDismissed: Y,
						isPostChained: $,
						isTopicPage: te,
						imageGalleryCurrentItem: ne,
						listingBelowVariant: oe,
						listingKey: se,
						listingName: re,
						moderatorPermissions: ie,
						modModeEnabled: ae,
						onClickPost: ce,
						post: de,
						postId: le,
						postIds: ue,
						redditStyle: pe,
						shouldHideFlair: me,
						showAwardsPlaque: fe,
						showBulkActionCheckbox: be,
						showEditFlair: he,
						showMedia: xe,
						sendEvent: ve,
						subredditOrProfile: ge,
						toggleCheckbox: ye
					} = e, Oe = Object(r.d)(), Ee = Object(o.useCallback)(() => {
						re && se && Oe(Object(d.d)({
							listingKey: se,
							listingName: re,
							postId: le
						}))
					}, [Oe, se, re, le]), je = e => e === R.a.upvoted ? Oe(Object(l.bb)(le)) : Oe(Object(l.u)(le)), ke = () => Oe(Object(l.X)(le)), _e = pe ? void 0 : D, we = Object(F.a)(ie), Ce = ae && we, Se = Object(A.a)(ie), Pe = Object(L.a)(ie), Ne = Object(E.c)(de), Me = !!oe && !Object(M.Gd)(oe), Ie = Object(T.a)(de), Te = U && !xe && !Me, Ae = Te && !!de.source && !n, Le = !(X && i || te) && !G && (!U || Me), Fe = (!U || Me) && !de.isSponsored, Be = Object(a.t)(de, ne), {
						source: Re
					} = Be, De = s.a.createElement(k.a, {
						className: Object(c.a)(ee.a.container, t, Q.a.largeAndMediumPostStyles, Q.a.largeAndMediumActiveStyles, Object(B.a)(e), {
							[Q.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: J,
						style: Object(B.b)(e.flairStyleTemplate),
						post: de,
						onClick: ce,
						onPostContentClick: Ee,
						eventFactory: I
					}, s.a.createElement(w.a, {
						model: de,
						handleVote: je,
						showBulkActionCheckbox: be,
						isCheckboxSelected: Z,
						toggleCheckbox: ye,
						flairStyleTemplate: _e,
						redditStyle: pe,
						subreddit: ge,
						isActionBarAnimationEnabled: V,
						postId: le
					}), s.a.createElement(j.a, {
						className: ee.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: _e,
						post: de,
						redditStyle: pe
					}, s.a.createElement(x.a, {
						post: de
					}), s.a.createElement("article", {
						className: ee.a.mainBody
					}, s.a.createElement("div", {
						className: ee.a.content,
						"data-click-id": "body"
					}, s.a.createElement(S.a, {
						className: ee.a.postTopLine,
						hideAwards: fe,
						hideNSFWPref: W,
						hostPostId: H,
						iconClassName: ee.a.postTopLineIcon,
						inSubredditOrProfile: U,
						isCommentsPage: q,
						isCurrentUserProfilePost: G,
						isOverlay: !!J,
						isTopicPage: !!te,
						listingKey: se,
						post: de,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Ae,
						showSubreddit: Fe,
						showSubredditIcon: !0,
						subredditOrProfile: ge
					}), s.a.createElement(C.c, {
						className: ee.a.postTitle,
						post: de,
						redditStyle: pe,
						size: C.b.Large,
						titleColor: _e && _e.postTitleColor,
						isOverlay: J
					}), q && !me && (de.flair && de.flair.length > 0 || e.isInCategoriesExperiment) && s.a.createElement(v.a, {
						className: Object(c.a)(q && ee.a.leftPadding),
						disableFlair: !q,
						post: de,
						sendEvent: ve,
						showCategoryTag: e.isInCategoriesExperiment && q
					}), de.source && !de.isSponsored && !n && s.a.createElement(N.a, {
						className: ee.a.sourceLink,
						isCommentsPage: q,
						post: de
					})), !Te && Ie && s.a.createElement(K.a, {
						crosspost: n ? de : void 0,
						hasModPostPerms: we,
						isCommentsPage: q,
						isOverlay: J,
						modModeEnabled: ae,
						post: n || de,
						redditStyle: pe,
						shouldShowSubscribeButton: Le,
						subredditOrProfile: ge,
						templatePlaceholderImage: _e && _e.postPlaceholderImage
					})), de.isSponsored && Re && Re.url && s.a.createElement(p.a, {
						className: ee.a.adLinkWrapper
					}, s.a.createElement(m.a, {
						post: de,
						adLinkContent: Be
					})), ae && we && Ne && s.a.createElement(O.a, {
						className: ee.a.modModeReports,
						onIgnoreReports: ke,
						reportable: de
					}), s.a.createElement(y.d, null), fe && s.a.createElement(f.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: q,
						thing: de,
						tooltipType: J ? P.c.Lightbox : void 0
					}), s.a.createElement("div", {
						className: ee.a.flatlistContainer
					}, s.a.createElement(b.a, {
						className: ee.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: _e,
						redditStyle: pe,
						model: de,
						onVoteClick: je
					}), s.a.createElement(g.c, {
						currentUser: i,
						hasModFlairPerms: Se,
						hasModFullPerms: Pe,
						hasModPostPerms: we,
						hostPostId: H,
						isActionBarAnimationEnabled: V,
						isOverlay: !!J,
						listingKey: se,
						modModeEnabled: ae,
						onIgnoreReports: ke,
						onOpenReportsDropdown: e => Oe(Object(u.h)({
							tooltipId: e
						})),
						post: de,
						showEditFlair: he,
						tooltipType: J ? P.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(_.h)({
							editPost: !Ce,
							save: !Ce,
							hide: !1,
							report: !1
						})
					}))), X && s.a.createElement(z.a, {
						post: de,
						postIds: null != ue ? ue : [],
						subredditId: null == ge ? void 0 : ge.id
					}));
					return s.a.createElement(s.a.Fragment, null, De, $ && !Y && s.a.createElement(h.a, {
						className: ee.a.chain,
						listingKey: se,
						listingName: re,
						postId: de.id
					}))
				};
			t.default = Object(D.b)(s.a.memo((function(e) {
				const t = Object(o.useMemo)(() => ne(), []),
					n = Object(r.e)(n => t(n, e), r.c),
					i = Object(Z.a)();
				return s.a.createElement(oe, te({}, e, n, {
					modModeEnabled: i.modModeEnabled,
					hideNSFWPref: i.prefs.hideNSFW,
					isOverlay: Object(V.a)()
				}))
			})))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), u = i.a.div("Placeholder", c.a), p = () => r.a.createElement(u, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), m = Object(o.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(p, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/reportFlow/index.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: b
				} = e, [h, x] = Object(s.useState)(!0), v = Object(f.b)(n.id, b), g = Object(i.d)(), y = Object(m.a)(), O = Object(f.a)(n, b), E = (e, o) => y(Object(p.a)(t, n.id, e, o));
				Object(s.useEffect)(() => {
					O && E("modal", "show")
				}, [O]);
				if (!O || !h) return null;
				const j = o.fbt._("Help r/{subredditName} mods", [o.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: v,
					title: j,
					onClose: () => {
						x(!1), E("close", "click"), g(Object(c.E)()), g(Object(c.P)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						g(Object(c.E)())
					}
				}, r.a.createElement("p", null, o.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, o.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), o.fbt._param("=community", r.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, o.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(u.a, {
					onClick: () => (x(!1), E("report", "click"), void g(Object(d.c)(n.id)))
				}, o.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow/index.ts"),
				u = n("./src/reddit/components/Popup/index.tsx"),
				p = n("./src/reddit/components/Popup/Button.tsx"),
				m = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: h
				} = e, [x, v] = Object(r.useState)(o.Survey), g = Object(b.b)(n.id, h), y = Object(a.d)(), O = Object(f.a)(), E = Object(b.a)(n, h), j = (e, o) => O(Object(m.b)(t, n.id, e, o));
				Object(r.useEffect)(() => {
					E && j("modal", "show")
				}, [E]);
				const k = e => {
					v(o.Closed), j("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), y(Object(l.c)(n.id, void 0, e))
				};
				if (!E) return null;
				let _ = null;
				const w = {
					id: g,
					title: s.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(o.Closed), j("close", "click"), y(Object(d.E)())
					},
					onClickOutside: () => {
						y(Object(d.E)())
					}
				};
				switch (x) {
					case o.Survey:
						_ = i.a.createElement(u.a, w, i.a.createElement("p", null, s.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [s.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(o.OffTopic), j("off_topic", "click")
							}
						}, s.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(o.DontLike), j("dont_like", "click")
							}
						}, s.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(o.BreaksRules), j("breaks_rules", "click")
							}
						}, s.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case o.OffTopic:
						_ = i.a.createElement(u.a, w, i.a.createElement("p", null, s.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case o.DontLike:
						_ = i.a.createElement(u.a, w, i.a.createElement("p", null, s.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case o.BreaksRules:
						_ = i.a.createElement(u.a, w, i.a.createElement("p", null, s.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, s.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), s.fbt._param("=community", i.a.createElement(c.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, s.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => k("site")
						}, s.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => k("community")
						}, s.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case o.Closed:
				}
				return _
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(o || (o = {}))
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/icons/svgs/Notification/index.tsx"),
				p = n("./src/reddit/icons/svgs/NotificationFilled/index.tsx"),
				m = n("./src/reddit/components/NotificationButton/index.m.less"),
				f = n.n(m);
			const b = i.a.wrapped(u.a, "NotificationIcon", f.a),
				h = i.a.wrapped(p.a, "NotificationIconFilled", f.a);
			t.a = e => {
				const t = Object(c.a)(),
					n = Object(d.a)(),
					{
						isFilled: o,
						onClick: i,
						hasTooltip: u,
						tooltipText: p,
						className: m
					} = e;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("button", {
					className: Object(r.a)(f.a.notificationButton, m),
					ref: n.target.ref,
					onMouseEnter: n.show,
					onMouseLeave: n.hide,
					onClick: i
				}, t ? s.a.createElement(l.a, {
					name: "notification",
					isFilled: o,
					className: f.a.icon,
					"aria-label": p
				}) : o ? s.a.createElement(h, {
					"aria-label": p
				}) : s.a.createElement(b, {
					"aria-label": p
				})), u && s.a.createElement(a.a, {
					popperProps: n.popperProps,
					arrowProps: n.arrowProps,
					visible: n.visible
				}, p))
			}
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(r);

			function a(e) {
				return s.a.createElement("button", {
					className: i.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, n) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/uuid/v4.js"),
				i = n.n(r),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: o,
					title: r,
					children: c
				} = e;
				return Object(a.a)(t, o), s.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, s.a.createElement("h3", {
					className: d.a.header
				}, s.a.createElement("span", {
					className: d.a.title
				}, r), s.a.createElement("button", {
					className: d.a.closeButton,
					onClick: n
				}, "✕")), c)
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: o,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return s.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(o, e),
					onClick: i
				}, m), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, n) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/isRemoved.ts"),
				x = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				v = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Report/index.tsx"),
				w = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				C = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				S = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				P = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = n("./src/reddit/models/AutomatedReporting/index.ts"),
				M = n("./src/reddit/models/Post/index.ts"),
				I = n("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				T = n("./src/reddit/selectors/platform.ts"),
				A = n("./src/reddit/selectors/posts.ts"),
				L = n("./src/reddit/components/PostBadges/index.m.less"),
				F = n.n(L);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => r.a.createElement("span", B({
					className: F.a.removalReason
				}, e), e.children),
				D = () => o.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				W = () => o.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				H = e => o.fbt._("Moderator of {community name}", [o.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				U = () => o.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				z = () => o.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				V = (e, t, n) => {
					const o = `PostBadges--${e}--${t}`;
					return n ? `${o}--${n}` : o
				},
				Z = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				q = Object(a.c)({
					isPinned: (e, {
						post: t
					}) => Object(A.p)(e, {
						postId: t.id
					}),
					modModeEnabled: b.Q
				}),
				G = Object(i.b)(q, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = Z(G(({
				className: e,
				displayText: t,
				isSubreddit: n,
				inSubredditOrProfile: a,
				isCompactPinnedPost: l,
				isPinned: b,
				isProfilePostListing: A,
				modModeEnabled: L,
				onHideTooltip: Z,
				onOpenRemovalReasonModal: q,
				onShowTooltip: G,
				post: X,
				tooltipType: J
			}) => {
				const K = Object(g.a)(),
					Y = {
						caretOnTop: !1
					},
					Q = Object(i.e)(T.g),
					$ = Object(i.e)(I.a),
					ee = X.isSponsored && Q && $ === m.n.NoLockIcon,
					te = X.isRemoved && !X.modRemovalReason && !X.modNote && X.belongsTo.type === f.a.SUBREDDIT,
					ne = V("Approve", X.id, J),
					oe = V("Archived", X.id, J),
					se = V("Automod", X.id, J),
					re = V("Lock", X.id, J),
					ie = V("Mod", X.id, J),
					ae = V("Remove", X.id, J),
					ce = V("Report", X.id, J),
					de = V("Spam", X.id, J),
					le = V("Sticky", X.id, J),
					ue = V("Pinned", X.id, J),
					pe = X.bannedBy && Object(N.b)(X.bannedBy);
				return r.a.createElement("div", {
					className: e
				}, a && t && X.distinguishType === d.C.MODERATOR && r.a.createElement(s.Fragment, null, K ? r.a.createElement(y.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(F.a.icon, F.a.modIcon)
				}) : r.a.createElement(P.a, {
					className: Object(c.a)(F.a.icon, F.a.modIcon),
					desc: H(t),
					id: ie,
					onMouseEnter: G(ie),
					onMouseLeave: Z
				}), r.a.createElement(u.c, B({
					tooltipId: ie,
					text: H(t)
				}, Y))), X.isArchived && r.a.createElement(s.Fragment, null, r.a.createElement(E.a, {
					isFilled: K,
					className: Object(c.a)(F.a.icon, F.a.archivedIcon),
					desc: D(),
					id: oe,
					onMouseEnter: G(oe),
					onMouseLeave: Z
				}), r.a.createElement(u.c, B({
					tooltipId: oe,
					text: D()
				}, Y))), X.isLocked && !ee && r.a.createElement(s.Fragment, null, r.a.createElement(j.a, {
					isFilled: K,
					className: Object(c.a)(F.a.icon, F.a.lockIcon),
					desc: W(),
					id: re,
					onMouseEnter: G(re),
					onMouseLeave: Z
				}), r.a.createElement(u.c, B({
					tooltipId: re,
					text: W()
				}, Y))), n && Object(M.q)(X) && !l && r.a.createElement(s.Fragment, null, r.a.createElement(C.a, {
					isFilled: K,
					className: Object(c.a)(F.a.icon, F.a.stickyIcon),
					desc: U(),
					id: le,
					onMouseEnter: G(le),
					onMouseLeave: Z
				}), r.a.createElement(u.c, B({
					tooltipId: le,
					text: U()
				}, Y))), A && b && r.a.createElement(s.Fragment, null, r.a.createElement(C.a, {
					isFilled: K,
					className: Object(c.a)(F.a.icon, F.a.stickyIcon),
					desc: z(),
					id: ue,
					onMouseEnter: G(ue),
					onMouseLeave: Z
				}), r.a.createElement(u.c, B({
					tooltipId: ue,
					text: z()
				}, Y))), (X.isApproved || X.approvedBy) && r.a.createElement(s.Fragment, null, r.a.createElement(O.a, {
					isFilled: K,
					className: Object(c.a)(F.a.icon, F.a.approveIcon),
					desc: Object(x.a)(X),
					id: ne,
					onMouseEnter: G(ne),
					onMouseLeave: Z
				}), r.a.createElement(u.c, B({
					tooltipId: ne,
					text: Object(x.a)(X)
				}, Y))), Object(h.a)(X) && !pe && r.a.createElement(s.Fragment, null, r.a.createElement(k.a, {
					isFilled: K,
					className: Object(c.a)(F.a.icon, F.a.removeIcon),
					desc: Object(x.c)(X),
					id: ae,
					onMouseEnter: G(ae),
					onMouseLeave: Z
				}), te && r.a.createElement(p.a, {
					className: F.a.addRemovalReason,
					onClick: q,
					text: o.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (X.modRemovalReason || X.modNote) && r.a.createElement(R, {
					onMouseEnter: G(ae),
					onMouseLeave: Z
				}, o.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, B({
					tooltipId: ae,
					text: Object(x.c)(X)
				}, Y))), X.bannedBy && X.isSpam && r.a.createElement(s.Fragment, null, r.a.createElement(w.a, {
					isFilled: K,
					className: Object(c.a)(F.a.icon, F.a.spamIcon),
					desc: Object(x.e)(X),
					id: de,
					onMouseEnter: G(de),
					onMouseLeave: Z
				}), r.a.createElement(u.c, B({
					tooltipId: de,
					text: Object(x.e)(X)
				}, Y))), ("AutoModerator" === X.approvedBy || "AutoModerator" === X.bannedBy) && r.a.createElement(s.Fragment, null, K ? r.a.createElement(y.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(F.a.icon, F.a.automoderator, !!X.bannedBy && F.a.isRemoved)
				}) : r.a.createElement(S.a, {
					className: Object(c.a)(F.a.icon, F.a.automoderator, !!X.bannedBy && F.a.isRemoved),
					desc: x.b,
					id: se,
					onMouseEnter: G(se),
					onMouseLeave: Z
				}), r.a.createElement(u.c, B({
					tooltipId: se,
					text: x.b
				}, Y))), pe && r.a.createElement("div", {
					className: F.a.removalReason
				}, o.fbt._("• Removed by the Automated {filterName}", [o.fbt._param("filterName", pe)], {
					hk: "3C408F"
				})), Object(v.a)(X) && !L && r.a.createElement(s.Fragment, null, r.a.createElement(_.a, {
					isFilled: K,
					className: Object(c.a)(F.a.icon, F.a.reportIcon),
					desc: Object(x.d)(X.numReports),
					id: ce,
					onMouseEnter: G(ce),
					onMouseLeave: Z
				}), r.a.createElement(u.c, B({
					tooltipId: ce,
					text: Object(x.d)(X.numReports)
				}, Y))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = s.a.memo(e => {
					const t = Object(o.useRef)(null),
						n = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/objectSelector/index.ts"),
				v = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = n("./src/reddit/components/PostContainer/index.m.less"),
				y = n.n(g);
			const O = Object(m.a)(() => Object(r.c)({
					basePixelMetadata: Object(x.a)((e, {
						post: t
					}) => Object(b.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(b.i)(e, {
						postId: t.id
					})
				})),
				E = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						n = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && n
				};
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: o,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: p,
						onPostContentClick: m,
						sendEvent: b,
						style: x,
						ref: v
					} = this.props, g = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => p && p(n, l, t, r))(n), m && E(n) && m(n, l)), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(y.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), O = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || O ? s.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, g) : l.media && Object(f.E)(l.media) ? s.a.createElement(u, {
						postId: l.id
					}, g) : g
				}
			}
			t.a = O(Object(v.c)(Object(p.c)(j)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				m = n.n(p);
			class f extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: o
							},
							sendEvent: s
						} = this.props, r = !!o;
						s(e ? Object(u.o)({
							postId: n,
							isFollowed: r
						}) : Object(u.g)({
							postId: n,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: n
					} = this.props, s = this.state.isHovered, i = n.isFollowed;
					let a = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && s && (a = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(m.a.collectionFollow, {
							[m.a.isFollowed]: !!n.isFollowed,
							[m.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const b = Object(i.b)(() => Object(a.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.y)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(f))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = n("./src/reddit/components/PopupPortal/index.tsx"),
				c = n("./src/reddit/components/PostLeftRail/index.tsx"),
				d = n("./src/reddit/components/VerticalVotes/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.tsx"),
				u = n("./src/reddit/helpers/isPost.ts"),
				p = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				f = n.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: m = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					subreddit: v,
					isOverlay: g,
					isActionBarAnimationEnabled: y,
					postId: O,
					isForceSelected: E
				} = e, j = `upvote-button-${t.id}${g?"-overlay":""}`, {
					moderationPrompt: k
				} = t;
				return s.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && s.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), s.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: x,
					upvoteTooltipId: j,
					isActionBarAnimationEnabled: y,
					postId: O,
					isForceSelected: E,
					scoreClassName: f.a.score
				}), k && s.a.createElement(a.b, {
					rightOf: j
				}, "survey" === k ? s.a.createElement(i.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!g
				}) : s.a.createElement(r.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!g
				})))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, n) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = n("./src/reddit/components/NotificationButton/index.tsx"),
				l = n("./src/reddit/components/PostBadges/index.tsx"),
				u = n("./src/reddit/components/PostTopMeta/index.tsx"),
				p = n("./src/reddit/components/SubredditIcon/index.tsx"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = n("./src/reddit/constants/posts.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Subreddit/index.ts"),
				E = n("./src/reddit/components/PostTopLine/index.m.less"),
				j = n.n(E);
			const k = n("./src/lib/lessComponent.tsx").a.div("Container", j.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: n,
					forceOpenInNewTab: s,
					hideAwards: E,
					hideNSFWPref: _,
					hostPostId: w,
					iconClassName: C,
					inSubredditOrProfile: S,
					isCommentsPage: P,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: M,
					isOverlay: I,
					isTopicPage: T,
					listingKey: A,
					post: L,
					shouldShowSubscribeButton: F,
					showCornerOutboundLink: B,
					showSubreddit: R,
					showSubredditIcon: D,
					subredditOrProfile: W,
					isFollowed: H,
					shouldShowFollowButton: U,
					onFollowPostClick: z
				} = e, V = E || T;
				return r.a.createElement(k, {
					className: t
				}, R && W && r.a.createElement("div", {
					className: j.a.subredditIconWrapper
				}, r.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: W.url
				}, D && r.a.createElement(p.b, {
					className: Object(i.a)(j.a.subredditIcon, C),
					shouldHideNsfwIcon: _,
					subredditOrProfile: W
				}))), r.a.createElement("div", {
					className: j.a.everythingElseWrapper
				}, R && r.a.createElement(c.h, {
					type: L.belongsTo.type,
					id: L.belongsTo.id
				}), r.a.createElement(u.d, {
					className: j.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: n,
					tooltipType: I ? u.c.Lightbox : void 0,
					post: L,
					showSub: R,
					subredditOrProfile: W
				}), r.a.createElement(l.a, {
					className: j.a.postBadges,
					displayText: W ? W.displayText : null,
					inSubredditOrProfile: S,
					isCompactPinnedPost: N,
					post: L,
					tooltipType: I ? u.c.Lightbox : void 0
				}), !V && r.a.createElement(a.a, {
					isPostDetail: P,
					thing: L,
					tooltipType: I ? u.c.Lightbox : void 0
				})), W && R && F && !M && r.a.createElement(f.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(v.g)(L.id, e ? "unsubscribe" : "subscribe", "post", A, w),
					identifier: {
						name: W.name,
						type: Object(O.h)(W) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: L.id,
					size: h.c.XS
				}), B && r.a.createElement(x.b, {
					className: j.a.OutboundLink,
					isSponsored: L.isSponsored,
					postId: L.id,
					href: Object(y.D)(e.post),
					source: L.source
				}, r.a.createElement(g.a, {
					className: j.a.outboundLinkIcon
				})), U && r.a.createElement(d.a, {
					isFilled: !!H,
					onClick: z,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/getShortenedLink.ts"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				l = n("./src/reddit/components/SourceLink/index.m.less"),
				u = n.n(l),
				p = n("./src/lib/lessComponent.tsx");
			const m = p.a.wrapped(d.a, "OutboundLinkIcon", u.a),
				f = p.a.div("SourceLinkWrapper", u.a);

			function b(e) {
				const t = Object(c.a)(),
					{
						className: n,
						post: o,
						isCommentsPage: d
					} = e,
					{
						source: l,
						isSponsored: p
					} = o;
				return l ? s.a.createElement(f, {
					className: Object(r.a)({
						[u.a["m-comment"]]: d
					}, n)
				}, s.a.createElement(a.a, {
					href: l.url,
					isSponsored: p,
					postId: o.id,
					source: l
				}, Object(i.a)(o), s.a.createElement(m, {
					isFilled: t
				}))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				f = n.n(m),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = b.a.wrapped(l.a, "Checkmark", f.a),
				v = ({
					isFilled: e,
					...t
				}) => s.a.createElement(x, t),
				g = b.a.wrapped(u.a, "Plus", f.a),
				y = ({
					isFilled: e,
					...t
				}) => s.a.createElement(g, t),
				O = b.a.div("ButtonSpacer", f.a);
			class E extends s.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = ({
						[a.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: n,
							onSubscribe: o,
							onUnsubscribe: r,
							postId: i,
							sendEvent: l,
							small: u = !1,
							size: m,
							userIsSubscriber: f,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: x,
							onSubscriptionsRequested: g,
							...y
						} = this.props, O = this.state.isHovered, E = Object(p.a)({
							type: n.type,
							key: O ? "unsubscribe" : "subscribed"
						});
						return s.a.createElement(c.q, h({
							className: t,
							priority: y.shouldReverseColor ? c.b.Primary : c.b.Secondary,
							Icon: u || !u && !O ? e ? e => s.a.createElement(d.a, h({
								name: "checkmark"
							}, e)) : v : void 0,
							text: !u && E,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: m || (u ? c.c.XS : c.c.S)
						}, y))
					}, this.renderSubscribeButton = ({
						[a.a.Icons]: e
					}) => {
						const {
							className: t,
							identifier: n,
							onSubscribe: o,
							onUnsubscribe: r,
							postId: i,
							sendEvent: l,
							small: u = !1,
							size: m,
							userIsSubscriber: f,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: x,
							onSubscriptionsRequested: v,
							...g
						} = this.props, O = Object(p.a)({
							type: n.type,
							key: "subscribe"
						});
						return s.a.createElement(c.q, h({
							className: t,
							priority: g.shouldReverseColor ? c.b.Secondary : c.b.Primary,
							Icon: e ? e => s.a.createElement(d.a, h({
								name: "add"
							}, e)) : y,
							size: m || (u ? c.c.XS : c.c.S),
							text: !u && O,
							onClick: this.onClick
						}, g, {
							id: `subscribe-button-${i}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: n
					} = this.props;
					return t ? this.state.hasJustSubscribed || n ? s.a.createElement(a.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : s.a.createElement(O, null) : s.a.createElement(a.b.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(i.a)(Object(r.c)(E))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => o.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => o.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => o.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => o.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => o.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => o.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => r[s({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(o.b)(() => Object(s.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => t => {
					const {
						className: n,
						disabled: o,
						redditStyle: i,
						"data-redditstyle": a,
						...c
					} = t, d = ((e, t, n) => {
						const o = !(!t && !n);
						let s = "";
						return s = e ? o ? l.a.mDisabledRedditStyle : l.a.mDisabled : o ? l.a.mActiveRedditStyle : l.a.mActive
					})(o, i, a);
					return s.a.createElement(e, u({
						className: Object(r.a)(l.a.CheckboxIcon, d, n)
					}, c))
				},
				m = p(c.a),
				f = p(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? m : i.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/thumbnails.ts"),
				s = n("./src/reddit/models/Media/index.ts");

			function r(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === o.a.SELF || e.thumbnail.url === o.a.NSFW || e.media && Object(s.E)(e.media))
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? o.fbt._("Approved by {username} at {time}", [o.fbt._param("username", e.approvedBy), o.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : o.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = o.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : o.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + o.fbt._("Reason by {username}:", [o.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + o.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				c = e => o.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [o.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed as spam by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : o.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return x
			}));
			var o = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				p = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				m = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				f = e => Object(o.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(s.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/parseUrl.ts"),
				r = n("./src/reddit/selectors/media.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => ({
					gallery: i.gallery(e, t, n),
					post: i.post(e, t),
					...i.defaults(e)
				}),
				c = (e, t) => n => ({
					...a(n, e, t),
					action: o.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.media(n, e)
				}),
				d = (e, t) => n => {
					const c = Object(s.a)(t),
						d = Object(r.b)(n, e) + 1;
					return {
						...a(n, e, d),
						action: o.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.media(n, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => p(e, !0, t),
				u = (e, t) => p(e, !1, t),
				p = (e, t, n) => s => ({
					...a(s, e, n),
					action: o.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, n, s) => r => ({
					source: "report_prompt",
					noun: n,
					action: s,
					subreddit: o.subredditByName(r, e),
					post: o.post(r, t)
				}),
				r = (e, t, n, s) => r => ({
					source: "report_survey",
					noun: n,
					action: s,
					subreddit: o.subredditByName(r, e),
					post: o.post(r, t)
				})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/react/index.js");

			function s() {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/InsideOverlay.tsx");

			function r() {
				return Object(o.useContext)(s.a)
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, s.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, s.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Notification/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z"
			}), s.a.createElement("path", {
				d: "M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Zm.511,3.867H2.125v-.556a2.739,2.739,0,0,1,1.21-2.275,3.988,3.988,0,0,0,1.76-3.3l0-1.633a4.9,4.9,0,1,1,9.8,0l0,1.631a3.988,3.988,0,0,0,1.76,3.3,2.739,2.739,0,0,1,1.21,2.275Z"
			}))
		},
		"./src/reddit/icons/svgs/NotificationFilled/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, s.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Z"
			}), s.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Z"
			}), s.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Z"
			}))
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(r.G)(e) || o.B.Treatment1 === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: o.v
				})
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: o.rb
				});
				return !(!t || Object(o.Gd)(t))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.e47a298da293a2a3482e.js.map