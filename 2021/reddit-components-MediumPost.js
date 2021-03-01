// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.a5866c3b9046b985ad84.js
// Retrieved at 3/1/2021, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-dom/index.js"),
				i = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function c(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, s) {
					return c(e[s], t[s])
				})) : e !== t
			}
			var a = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, s = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							s = void 0 === n ? "0px" : n,
							o = t[1],
							r = void 0 === o ? s : o,
							c = t[2],
							a = void 0 === c ? s : c,
							d = t[3];
						return s + " " + r + " " + a + " " + (void 0 === d ? r : d)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], r = a.keys(); t = r.next().value;) {
					if (!(n !== t.root || s !== t.rootMargin || c(o, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = a.get(e);
				if (n)
					for (var s, o = n.values(); s = o.next().value;)
						if (s.target === t.target) return s;
				return null
			}

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var s = l(t, e[n]);
					s && s.handleChange(e[n])
				}
			}

			function p(e) {
				return d(e) || new IntersectionObserver(u, e)
			}
			var m = n("./node_modules/invariant/browser.js"),
				b = n.n(m),
				f = {},
				h = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return f.errorReporter || function(e) {
								return b()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							f.errorReporter = e
						}
					}
				});

			function v(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function x(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var g = ["root", "rootMargin", "threshold"],
				O = ["root", "rootMargin", "threshold", "disabled"],
				y = Object.prototype,
				j = y.hasOwnProperty,
				_ = y.toString,
				E = function(e) {
					return g.reduce((function(t, n) {
						if (j.call(e, n)) {
							var s = "root" === n && "[object String]" === _.call(e[n]);
							t[n] = s ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				k = function(e) {
					var t, n;

					function s() {
						for (var t, n = arguments.length, s = new Array(n), o = 0; o < n; o++) s[o] = arguments[o];
						return x(v(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), x(v(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var s = n.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(r.findDOMNode)(e)
						})), x(v(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(E(t.props)), t.target = t.targetNode, e = v(t), a.has(e.observer) || a.set(e.observer, new Set), a.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), x(v(t), "unobserve", (function(e) {
							! function(e, t) {
								if (a.has(e.observer)) {
									var n = a.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), a.delete(e.observer)))
								}
							}(v(t), e)
						})), x(v(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = s.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = O.some((function(n) {
							return c(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, i.componentDidUpdate = function(e, t, n) {
						var s = !1;
						n || (s = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || s) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, s
				}(o.a.Component);
			x(k, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function r() {}
			r.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, r, i) {
					if (i !== s) {
						var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw c.name = "Invariant Violation", c
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
					resetWarningCache: o
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
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js"),
				o = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				c = Math.min,
				a = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && o(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = a();
					return c(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var s = n("./node_modules/react/index.js");

			function o(e) {
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

			function c(e) {
				return e instanceof r(e).Element || e instanceof Element
			}

			function a(e) {
				return e instanceof r(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (c(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return o(l(e)).left + i(e).scrollLeft
			}

			function p(e) {
				return r(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					s = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + s)
			}

			function b(e, t, n) {
				void 0 === n && (n = !1);
				var s, c, p = l(t),
					b = o(e),
					f = a(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (f || !f && !n) && (("body" !== d(t) || m(p)) && (h = (s = t) !== r(s) && a(s) ? {
					scrollLeft: (c = s).scrollLeft,
					scrollTop: c.scrollTop
				} : i(s)), a(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : p && (v.x = u(p))), {
					x: b.left + h.scrollLeft - v.x,
					y: b.top + h.scrollTop - v.y,
					width: b.width,
					height: b.height
				}
			}

			function f(e) {
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

			function v(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : a(t) && m(t) ? t : e(h(t))
					}(e),
					s = "body" === d(n),
					o = r(n),
					i = s ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					c = t.concat(i);
				return s ? c : c.concat(v(h(i)))
			}

			function x(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return a(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = r(e), n = g(e); n && x(n) && "static" === p(n).position;) n = g(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); a(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var y = "top",
				j = "bottom",
				_ = "right",
				E = "left",
				k = "auto",
				S = [y, j, _, E],
				C = "start",
				I = "end",
				w = "clippingParents",
				P = "viewport",
				T = "popper",
				N = "reference",
				M = S.reduce((function(e, t) {
					return e.concat([t + "-" + C, t + "-" + I])
				}), []),
				A = [].concat(S, [k]).reduce((function(e, t) {
					return e.concat([t, t + "-" + C, t + "-" + I])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
				var t = new Map,
					n = new Set,
					s = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(s) {
							if (!n.has(s)) {
								var o = t.get(s);
								o && e(o)
							}
						})), s.push(o)
					}(e)
				})), s
			}
			var R = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function D() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function F(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					s = void 0 === n ? [] : n,
					o = t.defaultOptions,
					r = void 0 === o ? R : o;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var o, i, a = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, R), r),
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
							state: a,
							setOptions: function(n) {
								p(), a.options = Object.assign(Object.assign(Object.assign({}, r), a.options), n), a.scrollParents = {
									reference: c(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
									var t = B(e);
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
								}([].concat(s, a.options.modifiers)));
								return a.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), a.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										s = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var r = o({
											state: a,
											name: t,
											instance: u,
											options: s
										});
										d.push(r || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = a.elements,
										t = e.reference,
										n = e.popper;
									if (D(t, n)) {
										a.rects = {
											reference: b(t, O(n), "fixed" === a.options.strategy),
											popper: f(n)
										}, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(e) {
											return a.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var s = 0; s < a.orderedModifiers.length; s++)
											if (!0 !== a.reset) {
												var o = a.orderedModifiers[s],
													r = o.fn,
													i = o.options,
													c = void 0 === i ? {} : i,
													d = o.name;
												"function" == typeof r && (a = r({
													state: a,
													options: c,
													name: d,
													instance: u
												}) || a)
											} else a.reset = !1, s = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(a)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(o())
									}))
								}))), i
							}),
							destroy: function() {
								p(), l = !0
							}
						};
					if (!D(e, t)) return u;

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
			var U = {
				passive: !0
			};

			function V(e) {
				return e.split("-")[0]
			}

			function W(e) {
				return e.split("-")[1]
			}

			function H(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function G(e) {
				var t, n = e.reference,
					s = e.element,
					o = e.placement,
					r = o ? V(o) : null,
					i = o ? W(o) : null,
					c = n.x + n.width / 2 - s.width / 2,
					a = n.y + n.height / 2 - s.height / 2;
				switch (r) {
					case y:
						t = {
							x: c,
							y: n.y - s.height
						};
						break;
					case j:
						t = {
							x: c,
							y: n.y + n.height
						};
						break;
					case _:
						t = {
							x: n.x + n.width,
							y: a
						};
						break;
					case E:
						t = {
							x: n.x - s.width,
							y: a
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = r ? H(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case C:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case I:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - s[l] / 2)
					}
				}
				return t
			}
			var z = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function q(e) {
				var t, n = e.popper,
					s = e.popperRect,
					o = e.placement,
					i = e.offsets,
					c = e.position,
					a = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							s = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * s) / s || 0,
							y: Math.round(n * s) / s || 0
						}
					}(i),
					p = u.x,
					m = u.y,
					b = i.hasOwnProperty("x"),
					f = i.hasOwnProperty("y"),
					h = E,
					v = y,
					x = window;
				if (d) {
					var g = O(n);
					g === r(n) && (g = l(n)), o === y && (v = j, m -= g.clientHeight - s.height, m *= a ? 1 : -1), o === E && (h = _, p -= g.clientWidth - s.width, p *= a ? 1 : -1)
				}
				var k, S = Object.assign({
					position: c
				}, d && z);
				return a ? Object.assign(Object.assign({}, S), {}, ((k = {})[v] = f ? "0" : "", k[h] = b ? "0" : "", k.transform = (x.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", k)) : Object.assign(Object.assign({}, S), {}, ((t = {})[v] = f ? m + "px" : "", t[h] = b ? p + "px" : "", t.transform = "", t))
			}
			var K = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return K[e]
				}))
			}
			var J = {
				start: "end",
				end: "start"
			};

			function X(e) {
				return e.replace(/start|end/g, (function(e) {
					return J[e]
				}))
			}

			function Y(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var s = t;
					do {
						if (s && e.isSameNode(s)) return !0;
						s = s.parentNode || s.host
					} while (s)
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
				return t === P ? Q(function(e) {
					var t = r(e),
						n = l(e),
						s = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						c = 0,
						a = 0;
					return s && (o = s.width, i = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (c = s.offsetLeft, a = s.offsetTop)), {
						width: o,
						height: i,
						x: c + u(e),
						y: a
					}
				}(e)) : a(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						n = i(e),
						s = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						c = -n.scrollLeft + u(e),
						a = -n.scrollTop;
					return "rtl" === p(s || t).direction && (c += Math.max(t.clientWidth, s ? s.clientWidth : 0) - o), {
						width: o,
						height: r,
						x: c,
						y: a
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && a(e) ? O(e) : e;
						return c(n) ? t.filter((function(e) {
							return c(e) && Y(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(s, [n]),
					r = o[0],
					i = o.reduce((function(t, n) {
						var s = $(e, n);
						return t.top = Math.max(s.top, t.top), t.right = Math.min(s.right, t.right), t.bottom = Math.min(s.bottom, t.bottom), t.left = Math.max(s.left, t.left), t
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

			function se(e, t) {
				void 0 === t && (t = {});
				var n = t,
					s = n.placement,
					r = void 0 === s ? e.placement : s,
					i = n.boundary,
					a = void 0 === i ? w : i,
					d = n.rootBoundary,
					u = void 0 === d ? P : d,
					p = n.elementContext,
					m = void 0 === p ? T : p,
					b = n.altBoundary,
					f = void 0 !== b && b,
					h = n.padding,
					v = void 0 === h ? 0 : h,
					x = te("number" != typeof v ? v : ne(v, S)),
					g = m === T ? N : T,
					O = e.elements.reference,
					E = e.rects.popper,
					k = e.elements[f ? g : m],
					C = ee(c(k) ? k : k.contextElement || l(e.elements.popper), a, u),
					I = o(O),
					M = G({
						reference: I,
						element: E,
						strategy: "absolute",
						placement: r
					}),
					A = Q(Object.assign(Object.assign({}, E), M)),
					L = m === T ? A : I,
					B = {
						top: C.top - L.top + x.top,
						bottom: L.bottom - C.bottom + x.bottom,
						left: C.left - L.left + x.left,
						right: L.right - C.right + x.right
					},
					R = e.modifiersData.offset;
				if (m === T && R) {
					var D = R[r];
					Object.keys(B).forEach((function(e) {
						var t = [_, j].indexOf(e) >= 0 ? 1 : -1,
							n = [y, j].indexOf(e) >= 0 ? "y" : "x";
						B[e] += D[n] * t
					}))
				}
				return B
			}

			function oe(e, t, n) {
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
				return [y, _, j, E].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ce = F({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								s = e.options,
								o = s.scroll,
								i = void 0 === o || o,
								c = s.resize,
								a = void 0 === c || c,
								d = r(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, U)
								})), a && d.addEventListener("resize", n.update, U),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, U)
									})), a && d.removeEventListener("resize", n.update, U)
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
							t.modifiersData[n] = G({
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
								s = n.gpuAcceleration,
								o = void 0 === s || s,
								r = n.adaptive,
								i = void 0 === r || r,
								c = {
									placement: V(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), q(Object.assign(Object.assign({}, c), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), q(Object.assign(Object.assign({}, c), {}, {
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
									s = t.attributes[e] || {},
									o = t.elements[e];
								a(o) && d(o) && (Object.assign(o.style, n), Object.keys(s).forEach((function(e) {
									var t = s[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
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
										var s = t.elements[e],
											o = t.attributes[e] || {},
											r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										a(s) && d(s) && (Object.assign(s.style, r), Object.keys(o).forEach((function(e) {
											s.removeAttribute(e)
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
								s = e.name,
								o = n.offset,
								r = void 0 === o ? [0, 0] : o,
								i = A.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var s = V(e),
											o = [E, y].indexOf(s) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = r[0],
											c = r[1];
										return i = i || 0, c = (c || 0) * o, [E, _].indexOf(s) >= 0 ? {
											x: c,
											y: i
										} : {
											x: i,
											y: c
										}
									}(n, t.rects, r), e
								}), {}),
								c = i[t.placement],
								a = c.x,
								d = c.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[s] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name;
							if (!t.modifiersData[s]._skip) {
								for (var o = n.mainAxis, r = void 0 === o || o, i = n.altAxis, c = void 0 === i || i, a = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, b = void 0 === m || m, f = n.allowedAutoPlacements, h = t.options.placement, v = V(h), x = a || (v === h || !b ? [Z(h)] : function(e) {
										if (V(e) === k) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(h)), g = [h].concat(x).reduce((function(e, n) {
										return e.concat(V(n) === k ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												o = n.boundary,
												r = n.rootBoundary,
												i = n.padding,
												c = n.flipVariations,
												a = n.allowedAutoPlacements,
												d = void 0 === a ? A : a,
												l = W(s),
												u = (l ? c ? M : M.filter((function(e) {
													return W(e) === l
												})) : S).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: o,
														rootBoundary: r,
														padding: i
													})[V(n)], t
												}), {});
											return Object.keys(u).sort((function(e, t) {
												return u[e] - u[t]
											}))
										}(t, {
											placement: n,
											boundary: l,
											rootBoundary: u,
											padding: d,
											flipVariations: b,
											allowedAutoPlacements: f
										}) : n)
									}), []), O = t.rects.reference, I = t.rects.popper, w = new Map, P = !0, T = g[0], N = 0; N < g.length; N++) {
									var L = g[N],
										B = V(L),
										R = W(L) === C,
										D = [y, j].indexOf(B) >= 0,
										F = D ? "width" : "height",
										U = se(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										H = D ? R ? _ : E : R ? j : y;
									O[F] > I[F] && (H = Z(H));
									var G = Z(H),
										z = [];
									if (r && z.push(U[B] <= 0), c && z.push(U[H] <= 0, U[G] <= 0), z.every((function(e) {
											return e
										}))) {
										T = L, P = !1;
										break
									}
									w.set(L, z)
								}
								if (P)
									for (var q = function(e) {
											var t = g.find((function(t) {
												var n = w.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, K = b ? 3 : 1; K > 0; K--) {
										if ("break" === q(K)) break
									}
								t.placement !== T && (t.modifiersData[s]._skip = !0, t.placement = T, t.reset = !0)
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
								s = e.name,
								o = n.mainAxis,
								r = void 0 === o || o,
								i = n.altAxis,
								c = void 0 !== i && i,
								a = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								b = n.tetherOffset,
								h = void 0 === b ? 0 : b,
								v = se(t, {
									boundary: a,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								x = V(t.placement),
								g = W(t.placement),
								k = !g,
								S = H(x),
								I = "x" === S ? "y" : "x",
								w = t.modifiersData.popperOffsets,
								P = t.rects.reference,
								T = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								M = {
									x: 0,
									y: 0
								};
							if (w) {
								if (r) {
									var A = "y" === S ? y : E,
										L = "y" === S ? j : _,
										B = "y" === S ? "height" : "width",
										R = w[S],
										D = w[S] + v[A],
										F = w[S] - v[L],
										U = m ? -T[B] / 2 : 0,
										G = g === C ? P[B] : T[B],
										z = g === C ? -T[B] : -P[B],
										q = t.elements.arrow,
										K = m && q ? f(q) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										J = Z[A],
										X = Z[L],
										Y = oe(0, P[B], K[B]),
										Q = k ? P[B] / 2 - U - Y - J - N : G - Y - J - N,
										$ = k ? -P[B] / 2 + U + Y + X + N : z + Y + X + N,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === S ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][S] : 0,
										re = w[S] + Q - ne - te,
										ie = w[S] + $ - ne,
										ce = oe(m ? Math.min(D, re) : D, R, m ? Math.max(F, ie) : F);
									w[S] = ce, M[S] = ce - R
								}
								if (c) {
									var ae = "x" === S ? y : E,
										de = "x" === S ? j : _,
										le = w[I],
										ue = oe(le + v[ae], le, le - v[de]);
									w[I] = ue, M[I] = ue - le
								}
								t.modifiersData[s] = M
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								s = e.name,
								o = n.elements.arrow,
								r = n.modifiersData.popperOffsets,
								i = V(n.placement),
								c = H(i),
								a = [E, _].indexOf(i) >= 0 ? "height" : "width";
							if (o && r) {
								var d = n.modifiersData[s + "#persistent"].padding,
									l = f(o),
									u = "y" === c ? y : E,
									p = "y" === c ? j : _,
									m = n.rects.reference[a] + n.rects.reference[c] - r[c] - n.rects.popper[a],
									b = r[c] - n.rects.reference[c],
									h = O(o),
									v = h ? "y" === c ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									x = m / 2 - b / 2,
									g = d[u],
									k = v - l[a] - d[p],
									S = v / 2 - l[a] / 2 + x,
									C = oe(g, S, k),
									I = c;
								n.modifiersData[s] = ((t = {})[I] = C, t.centerOffset = C - S, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								o = n.element,
								r = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								c = void 0 === i ? 0 : i;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Y(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[s + "#persistent"] = {
								padding: te("number" != typeof c ? c : ne(c, S))
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
								s = t.rects.reference,
								o = t.rects.popper,
								r = t.modifiersData.preventOverflow,
								i = se(t, {
									elementContext: "reference"
								}),
								c = se(t, {
									altBoundary: !0
								}),
								a = re(i, s),
								d = re(c, o, r),
								l = ie(a),
								u = ie(d);
							t.modifiersData[n] = {
								referenceClippingOffsets: a,
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
				ae = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				de = n.n(ae),
				le = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							s = t[1];
						return e[n] = s, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? s.useLayoutEffect : s.useEffect,
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var o = s.useRef(null),
						r = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						i = s.useState({
							styles: {
								popper: {
									position: r.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						c = i[0],
						a = i[1],
						d = s.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									a({
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
						l = s.useMemo((function() {
							var e = {
								onFirstUpdate: r.onFirstUpdate,
								placement: r.placement,
								strategy: r.strategy,
								modifiers: [].concat(r.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, d]),
						u = s.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var s = (n.createPopper || ce)(e, t, l);
							return u.current = s,
								function() {
									s.destroy(), u.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: u.current ? u.current.state : null,
						styles: c.styles,
						attributes: c.attributes,
						update: u.current ? u.current.update : null,
						forceUpdate: u.current ? u.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				s = "function" == typeof Map,
				o = "function" == typeof Set,
				r = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var c, a, d, l;
							if (Array.isArray(t)) {
								if ((c = t.length) != i.length) return !1;
								for (a = c; 0 != a--;)
									if (!e(t[a], i[a])) return !1;
								return !0
							}
							if (s && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(a = l.next()).done;)
									if (!i.has(a.value[0])) return !1;
								for (l = t.entries(); !(a = l.next()).done;)
									if (!e(a.value[1], i.get(a.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(a = l.next()).done;)
									if (!i.has(a.value[0])) return !1;
								return !0
							}
							if (r && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((c = t.length) != i.length) return !1;
								for (a = c; 0 != a--;)
									if (t[a] !== i[a]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((c = (d = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (a = c; 0 != a--;)
								if (!Object.prototype.hasOwnProperty.call(i, d[a])) return !1;
							if (n && t instanceof Element) return !1;
							for (a = c; 0 != a--;)
								if (("_owner" !== d[a] && "__v" !== d[a] && "__o" !== d[a] || !t.$$typeof) && !e(t[d[a]], i[d[a]])) return !1;
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
		"./src/graphql/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"7fc3f75ce98a"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"90defcf94579"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"f90184fd040d"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"3785f4aa83f3"}')
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const a = (e, t, n) => (s = (() => {})) => o => {
				const r = p(o.target, o.currentTarget),
					c = m(o.target, o.currentTarget);
				r && n && t && (u(o.target, o.currentTarget, l.anchors) ? n(t(e, r, c)) : n(n => {
					const s = t(e, r, c)(n);
					let o;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						o = t
					}
					return {
						...s,
						actionInfo: Object(i.previousPageActionInfo)(n, o)
					}
				})), u(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
			};

			function d(e) {
				return Object(r.c)(t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(s.useCallback)(a(i, r, n), [i, r, n]);
					return o.a.createElement(e, c({}, d, {
						afterClickTracking: l
					}))
				})
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
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
			}
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				o = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "IMAGE_OCR_ALT_TEXT__LOADED",
				o = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "e", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/telemetry/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				a = n("./src/reddit/actions/discoveryUnit.ts"),
				d = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				l = n("./src/reddit/actions/subreddit/subredditPosts.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/constants/inFeedChaining.ts"),
				m = n("./src/reddit/constants/page.ts"),
				b = n("./src/reddit/helpers/localStorage/index.ts"),
				f = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/inFeedChaining.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const O = "FEED_CHAINING__CHAIN_LOADED",
				y = Object(i.a)(O),
				j = e => {
					const t = Date.now() - e,
						n = Object(b.x)();
					return Object.keys(n).filter(e => n[e].when >= t).map(e => n[e])
				},
				_ = ({
					listingName: e,
					listingKey: t,
					postId: n
				}) => async (s, i, u) => {
					if (!n) return;
					const h = Object(x.U)(i(), {
						postId: n
					});
					if (!h) return;
					const O = h.name.toLowerCase(),
						_ = e === O;
					if (!(e === m.f || e === m.b || _)) return;
					if (_) return void I(h, t, n)(s, i, u);
					0 === j(r.hb).length && Object(b.nb)(!1);
					let E = i();
					if (Object(v.d)(E, {
							listingKey: t,
							postId: n
						}) || Object(v.a)(E).length >= p.a || Object(b.J)() || j(r.x).length >= p.a) return;
					const k = Object(x.w)(E, {
						listingKey: t,
						postId: n
					});
					if (k && k.isSponsored) return;
					await s(Object(a.g)()), E = i();
					const S = Object(v.b)(E, {
						listingName: e
					});
					if (!S) return;
					if (!h || Object(v.e)(E, {
							subredditId: h.id
						}) || (e => {
							return j(r.x).some(t => t.subredditId === e)
						})(h.id)) return;
					const C = {
						subredditIds: [h.id],
						count: p.b
					};
					await s(Object(d.b)(C));
					const w = Object(d.a)(C);
					E = i();
					const P = Object(g.v)(E, {
						key: w
					});
					0 !== P.length ? (await s((e => async (t, n) => {
						const s = r.Ub.DAY.toUpperCase(),
							o = e.filter(e => {
								const t = Object(c.a)(e, r.P.TOP, {
										t: s
									}),
									o = n();
								return 0 === Object(x.B)(o, {
									listingKey: t
								}).length
							});
						await t(Object(l.b)({
							first: 1,
							range: s,
							sort: r.I.TOP,
							subredditNames: o
						}))
					})(P.map(e => e.name))), E = i(), Object(v.f)(E, {
						postId: n
					}).length < p.c ? Object(o.a)(Object(f.c)(S, "other", h)(E)) : (Object(b.a)(n, h.id), Object(o.a)(Object(f.d)(S, h)(E)), s(y({
						listingKey: t,
						postId: n
					})))) : Object(o.a)(Object(f.c)(S, "no_chaining", h)(E))
				}, E = "FEED_CHAINING__CHAIN_TOGGLED", k = (Object(i.a)(E), "FEED_CHAINING__CHAINING_TOGGLED"), S = Object(i.a)(k), C = () => async e => {
					Object(b.nb)(!0), e(S({
						isDismissed: !0
					})), e(Object(u.e)(Object(u.d)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), h.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(b.nb)(!1), e(S({
							isDismissed: !1
						}))
					})))
				}, I = (e, t, n) => async (e, t, n) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				o = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			}));
			var s, o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/subreddit/constants.ts"),
				i = n("./src/reddit/endpoints/category/subreddits.ts"),
				c = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			! function(e) {
				e.Factorization = "factorization", e.CustomModRelevant = "custom_mod_relevant"
			}(s || (s = {}));
			var u = n("./src/reddit/selectors/subreddit.ts");
			const p = e => {
					let t = e.subredditIds.join(",");
					return e.count && (t += `--[count:'${e.count}']`), e.variant && (t += `--[variant:'${e.variant}']`), t.toLowerCase()
				},
				m = Object(o.a)(r.q),
				b = Object(o.a)(r.p),
				f = Object(o.a)(r.o),
				h = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
						r = p(e),
						h = Object(u.u)(o, {
							key: r
						}),
						v = Object(u.t)(o, {
							key: r
						});
					if (h || v.length > 0) return;
					t(m({
						key: r
					}));
					const x = await ((e, t) => Object(a.a)(Object(d.a)(e, [l.a]), {
						data: {
							sr_fullnames: t.subredditIds.join(","),
							limit: t.count,
							variant: t.variant
						},
						endpoint: `${e.apiUrl}/api/similar_subreddits.json`,
						method: c.cb.GET
					}))(s(), e);
					if (x.ok) {
						const e = Object(i.b)(x.body);
						t(b({
							key: r,
							...e
						}))
					} else {
						const e = x.error;
						t(f({
							key: r,
							error: e
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return V
			})), n.d(t, "a", (function() {
				return W
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeLinkedPostsListingKey/index.ts"),
				i = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/googleQASchema/constants.ts");
			const a = Object(o.a)(c.b),
				d = Object(o.a)(c.a);
			var l = n("./src/reddit/actions/linkedPosts/constants.ts");
			const u = Object(o.a)(l.b),
				p = Object(o.a)(l.a);
			var m = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				b = n("./src/lib/makeGqlRequest/index.ts"),
				f = (n("./src/graphql/operations/OtherDiscussions.json"), n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				h = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = n("./src/reddit/models/Post/index.ts");
			var O = ({
				getState: e,
				onFailure: t,
				onSuccess: n,
				postId: s,
				response: o
			}) => {
				if (!o.ok) return void t(o.error);
				const r = o.body,
					{
						post: c
					} = r && r.data,
					a = e(),
					d = Object(i.a)(s, null, {
						isOtherDiscussions: !0
					});
				if (c) {
					if (c.otherDiscussions && c.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = c, {
							postFlair: o,
							postIds: r,
							posts: i,
							profiles: l,
							subreddits: u
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								n = e => {
									const n = Object(h.e)(e);
									t.posts[n.id] = n;
									const {
										crosspostRoot: s
									} = e;
									if (s && s.type === g.a.Post && s.postInfo) {
										const e = Object(h.e)(s.postInfo);
										t.posts[e.id] = e
									}
									return Object(g.k)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(v.a)(e.profile)) : Object(g.l)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(x.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(f.a)(e.subreddit))), n.id
								};
							if (e && e.edges)
								for (const {
										node: s
									} of e.edges) {
									const e = n(s);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						n({
							count: t,
							key: d,
							meta: a.meta,
							postFlair: o,
							postId: s,
							postIds: r,
							posts: i,
							profiles: l,
							subreddits: u
						})
					}
				} else n({
					count: 0,
					key: d,
					meta: a.meta,
					postFlair: {},
					postId: s,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const y = Object(o.a)(m.a),
				j = Object(o.a)(m.b),
				_ = Object(o.a)(m.c);
			var E = n("./src/reddit/actions/subreddit/constants.ts"),
				k = n("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				S = (n("./src/graphql/operations/SubredditPosts.json"), n("./src/graphql/operations/SubredditsPosts.json"));
			var C = ({
				getState: e,
				onSuccess: t,
				onFailure: n,
				postId: s,
				post: o
			}) => {
				try {
					t({
						altText: o && o.media && (o.media.still && o.media.still.altText || o.media.obfuscated && o.media.obfuscated.altText) || null,
						postId: s
					})
				} catch (r) {
					n(r)
				}
			};
			var I = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					postId: s,
					post: o
				}) => {
					try {
						const n = [],
							i = {},
							c = {};
						if (!o || !o.linked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							l = Object(r.a)(s),
							u = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: e
							} of u) {
							if (!e) break;
							if (e.id && !d.hasOwnProperty(e.id)) {
								n.push(e.id);
								const t = Object(h.a)(e);
								i[e.id] = t.post, t.crosspost && (i[t.crosspost.id] = t.crosspost)
							}
							if (Object(g.l)(e)) {
								const {
									subreddit: t
								} = e;
								c[t.id] = Object(x.a)(t)
							}
						}
						t({
							dist: o.linked.posts && o.linked.posts.dist || null,
							key: l,
							meta: a.meta,
							posts: i,
							postIds: n,
							subreddits: c
						})
					} catch (i) {
						n(i)
					}
				},
				w = n("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var P = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var T = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					options: o,
					subreddit: r
				}) => {
					try {
						if (!r) return;
						const n = r.elements || r.posts,
							c = e(),
							a = ((e, t) => {
								const {
									edges: n
								} = e, s = n.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: s
								}
							})(n, c.posts && c.posts.models);
						if (!a.edges.length) return;
						const d = Object(w.a)(a),
							{
								range: l,
								sort: u,
								subredditName: p
							} = o,
							m = Object(i.a)(p, s.P[u], {
								t: l
							}),
							b = P(d),
							f = d.map(e => e.id);
						t({
							dist: n.dist,
							key: m,
							meta: c.meta,
							postIds: f,
							posts: b
						})
					} catch (c) {
						n(c)
					}
				},
				N = n("./src/reddit/models/Media/index.ts"),
				M = n("./src/reddit/selectors/posts.ts"),
				A = n("./src/reddit/actions/imageOCRAltText/constants.ts");
			const L = Object(o.a)(A.b),
				B = Object(o.a)(A.a),
				R = Object(o.a)(E.k),
				D = Object(o.a)(E.j),
				F = Object(o.a)(E.s),
				U = Object(o.a)(E.r),
				V = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = (await ((e, t) => Object(b.a)(e, {
							...S,
							variables: t
						}))(s(), e)).body,
						{
							subredditNames: r,
							...i
						} = e,
						c = [];
					try {
						for (const e of o.data.subredditsInfoByNames) {
							const t = e.elements.edges[0];
							t && Object(g.l)(t.node) && T({
								getState: n,
								onFailure: e => {
									throw e
								},
								onSuccess: e => c.push(e),
								options: {
									...i,
									subredditName: t.node.subreddit.name
								},
								subreddit: e
							})
						}
						t(F(c))
					} catch (a) {
						t(U(a))
					}
				}, W = e => async (t, n, {
					gqlContext: o
				}) => {
					var c;
					const {
						includePostImageOCRAltText: l,
						includeListingBelowExperiment: m,
						includeOtherDiscussions: f,
						includePostFeed: h,
						includePostQASchemaEligibilityFlag: v,
						postId: x,
						range: g,
						sort: E,
						subredditName: S
					} = e, w = Object(i.a)(x, null, {
						isOtherDiscussions: !0
					}), P = n(), A = Object(M.B)(P, {
						listingKey: w
					}), F = f && (!A || 0 === A.length), U = Object(i.a)(S, s.P[E], {
						t: g
					}), V = Object(M.B)(P, {
						listingKey: U
					}), W = h && (!V || 0 === V.length), H = Object(r.a)(x), G = Object(M.B)(P, {
						listingKey: H
					}), z = m && (!G || 0 === G.length), q = Object(M.I)(P, {
						postId: x
					}), K = l && !!q && !!q.media && (Object(N.H)(q.media) || Object(N.F)(q.media)) && !q.media.altText;
					if (!(F || W || z || K || v)) return;
					F && t(_({
						key: w
					}));
					const Z = await ((e, t) => Object(b.a)(e, {
							...k,
							variables: t
						}))(o(), e),
						J = Z.body;
					v && (Z.ok ? J.data && J.data.post && t(a({
						postId: x,
						isEligibleForQASchema: null !== (c = J.data.post.isEligibleForQASchema) && void 0 !== c && c
					})) : t(d())), F && O({
						getState: n,
						onFailure: e => t(y(e)),
						onSuccess: e => t(j(e)),
						postId: x,
						response: Z
					}), W && (Z.ok ? J.data && T({
						getState: n,
						onFailure: e => t(D(e)),
						onSuccess: e => t(R(e)),
						options: e,
						subreddit: J.data.subreddit
					}) : t(D(Z.error))), z && Z.ok && I({
						getState: n,
						onFailure: e => t(p(e)),
						onSuccess: e => t(u(e)),
						postId: x,
						post: J.data.post
					}), K && Z.ok && C({
						getState: n,
						onFailure: e => t(B(e)),
						onSuccess: e => t(L(e)),
						postId: x,
						post: J.data.post
					})
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
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = n.n(s);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
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
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				c = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(a);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: a,
					callToAction: l,
					caption: u
				} = t;
				if (!a || !a.url) return null;
				let p = a.displayText;
				return a.displayText.length >= 40 && (p = a.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(c.a, {
					href: a.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: a,
					className: d.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: a.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: a
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				d = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => {
				const n = Object(c.a)();
				return o.a.createElement(i.a, l({
					className: Object(r.a)(e, d.a.CallToActionButton, {
						[d.a.mNotCardView]: t.isNotCardView,
						[d.a.is2020]: n
					})
				}, t))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const c = 5;

			function a(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, a = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = n[o],
						t = d[e].belongsTo.id;
					m(e) && o - r >= c && !u.has(t) && (r = o, u.add(t), o === l && (p = !0))
				}
				return p ? o.a.createElement(i.a, {
					subredditId: s,
					inFeed: !0
				}) : null;

				function m(e) {
					var t;
					return (null === (t = a[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
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
			t.a = o
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/VerticalVotes/index.tsx"),
				a = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => o.a.createElement(c.a, l({}, t, {
				className: Object(r.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(c.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, n) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				i = n("./src/reddit/hooks/usePrevious.ts"),
				c = n("./src/reddit/components/CountAnimation/config.ts"),
				a = n("./src/reddit/components/CountAnimation/helpers.ts"),
				d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const {
					initialDisplayCount: t,
					countToUpperBound: n,
					incrementDelta: d,
					initialDelay: u,
					subsequentRecurringDelay: p,
					shouldDisjointAnimation: m,
					id: b
				} = e, [f, h] = Object(s.useState)(!1), [v, x] = Object(s.useState)(!0), [g, O] = Object(s.useState)([]), [y, j] = Object(s.useState)(Object(a.d)(t).reverse()), _ = Object(s.useRef)(!1), E = Object(s.useRef)(null), k = Object(s.useRef)(e => {}), S = Object(s.useRef)();
				k.current = Object(s.useCallback)(e => {
					let t = e || d();
					const s = [...y].reverse().join("");
					let o = parseInt(s) + t;
					o > n && (t = n - parseInt(s), o = n);
					const r = Object(a.d)(o).reverse();
					h(!1), O(y), j(r), x(!1), S.current = setTimeout(() => {
						h(!0)
					}, 0)
				}, [n, d, y]);
				const C = Object(s.useRef)(() => {}),
					I = Object(s.useRef)(),
					w = Object(s.useRef)();
				C.current = Object(s.useCallback)(() => {
					w.current = setTimeout(() => {
						k.current();
						const e = [...g].reverse().join("");
						parseInt(e) < n && C.current()
					}, p())
				}, [n, p, g]);
				const P = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && (_.current || (_.current = !0, I.current = setTimeout(() => {
							k.current(), C.current()
						}, u())))
					})
				}, []);
				Object(r.a)(E, P);
				const T = Object(i.a)(n);
				Object(s.useEffect)(() => (void 0 !== T && T !== n && k.current(n - T), () => {
					clearTimeout(I.current), clearTimeout(w.current), clearTimeout(S.current)
				}), [n]);
				const N = Object(s.useCallback)(() => x(!0), [x]),
					M = 0 === g.length,
					A = v || M;
				return o.a.createElement("div", {
					className: l.a.countAnimation,
					ref: E
				}, y.map((e, t) => {
					const n = g[t] || 0,
						s = Object(a.f)(n, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: N,
						style: f && g.length > 0 && !v ? {
							transform: `translateY(-${m&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(m?c.b.disjointAnimationDuration:c.b.animationIncrementDuration)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, A ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!m || m && n) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					id: b,
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...y].reverse().join("")))
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			const i = Object(s.a)({
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(p);
			const b = c.a.div("EventMetaWrapper", m.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(u.a)(n)) return null;
				const s = n && n.eventInfo,
					c = Object(l.a)(n),
					p = s && Object(i.c)(s.eventStart, s.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(m.a.container, e, {
						[m.a.isCompact]: !!t
					})
				}, o.a.createElement(b, {
					className: m.a.eventMetaWrapper
				}, o.a.createElement(a.a, {
					post: n
				}), !c && p && o.a.createElement(d.a, {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./src/lib/constants/index.ts");

			function a(e) {
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
				b = n("./src/lib/lessComponent.tsx");
			const f = b.a.span("PostEventFutureText", m.a),
				h = b.a.span("PostEventPastText", m.a),
				v = b.a.span("PostEventNowText", m.a),
				x = b.a.span("Container", m.a),
				g = b.a.wrapped(l.a, "CalendarIcon", m.a),
				O = b.a.wrapped(u.a, "LiveIcon", m.a),
				y = b.a.div("LoadingState", m.a);
			class j extends s.Component {
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
						eventEnd: s,
						eventIsLive: l,
						eventStart: u
					} = n, p = Object(r.e)(u, s);
					let m, b;
					if (this.state.mounted || p === r.a.Live) m = function(e, t, n) {
						const s = Object(r.e)(e, t),
							o = new Date(e * c.Hb);
						let d;
						return s === r.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (s === r.a.Future ? d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? a(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : s === r.a.Past && (d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : a(o)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o)}`)
					}(u, s, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = o.a.createElement(y, {
							className: e
						})
					}
					if (l) b = o.a.createElement(v, null, o.a.createElement(O, null), m);
					else if (p === r.a.Future) b = o.a.createElement(f, null, o.a.createElement(g, null), m);
					else {
						if (p !== r.a.Past) return null;
						b = o.a.createElement(h, null, o.a.createElement(g, null), m)
					}
					return o.a.createElement(x, {
						className: e
					}, b)
				}
			}
			t.a = j
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = n("./src/reddit/components/Thumbnail/index.tsx"),
				a = n("./src/reddit/constants/posts.ts"),
				d = n("./src/reddit/helpers/trackers/post.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/components/MediumPost/index.m.less"),
				p = n.n(u);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: n,
				redditStyle: s,
				shouldShowSubscribeButton: u,
				subredditOrProfile: m,
				templatePlaceholderImage: b
			}) => o.a.createElement("div", {
				className: Object(r.a)(p.a.thumbnailContainer, {
					[p.a.mShowingButtonOrOverflow]: u
				})
			}, o.a.createElement("div", {
				className: p.a.thumbnailContainerRow
			}, u && m && o.a.createElement(i.a, {
				className: p.a.subscribeButton,
				getEventFactory: e => Object(d.f)(t.id, e ? "unsubscribe" : "subscribe"),
				identifier: {
					name: m.name,
					type: Object(l.g)(m) ? a.a.PROFILE : a.a.SUBREDDIT
				},
				postId: t.id,
				small: !0
			})), o.a.createElement(c.a, {
				crosspost: e,
				post: t,
				redditStyle: s,
				forceShowNSFW: n,
				templatePlaceholderImage: b
			}))
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/inFeedChaining.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				b = n("./src/reddit/components/AwardBadges/index.tsx"),
				f = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = n("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				v = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				x = n("./src/reddit/components/FlairWrapper/index.tsx"),
				g = n("./src/reddit/components/Flatlist/index.tsx"),
				O = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = n("./src/reddit/components/ModModeReports/index.tsx"),
				j = n("./src/reddit/components/ModModeReports/helpers.ts"),
				_ = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				E = n("./src/reddit/components/PostContainer/index.tsx"),
				k = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				S = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				C = n("./src/reddit/components/PostTitle/index.tsx"),
				I = n("./src/reddit/components/PostTopLine/index.tsx"),
				w = n("./src/reddit/components/PostTopMeta/index.tsx"),
				P = n("./src/reddit/components/SourceLink/index.tsx"),
				T = n("./src/reddit/constants/experiments.ts"),
				N = n("./src/reddit/contexts/InsideOverlay.tsx"),
				M = n("./src/reddit/contexts/PageLayer/index.tsx"),
				A = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				L = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				B = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				R = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				D = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = n("./src/reddit/models/Vote/index.ts"),
				U = n("./src/reddit/contexts/Post/index.tsx"),
				V = n("./src/reddit/selectors/experiments/categories.ts"),
				W = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				H = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				G = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				z = n("./src/reddit/selectors/inFeedChaining.ts"),
				q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				K = n("./src/reddit/selectors/postFlair.ts"),
				Z = n("./src/reddit/selectors/posts.ts"),
				J = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Y = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = n.n(Y),
				$ = n("./src/reddit/components/MediumPost/index.m.less"),
				ee = n.n($);
			const te = Object(r.b)(() => Object(i.c)({
				crosspost: Z.d,
				flairStyleTemplate: M.R,
				hideNSFWPref: J.B,
				isActive: Z.j,
				isCurrentUserProfilePost: Z.k,
				isLoggedIn: J.J,
				isPostChainDismissed: z.c,
				isPostChained: z.d,
				listingBelowVariant: H.b,
				imageGalleryCurrentItem: Z.i,
				moderatorPermissions: q.h,
				modModeEnabled: M.P,
				showAwardsPlaque: W.a,
				showEditFlair: K.a,
				showMedia: M.r,
				isInCategoriesExperiment: V.a
			}), (e, {
				listingKey: t,
				listingName: n,
				postId: s
			}) => ({
				chainPost: () => {
					n && t && e(Object(d.d)({
						listingKey: t,
						listingName: n,
						postId: s
					}))
				},
				handleVote: t => t === F.a.upvoted ? e(Object(l.U)(s)) : e(Object(l.r)(s)),
				onIgnoreReports: () => e(Object(l.S)(s)),
				onOpenReportsDropdown: t => e(Object(u.h)({
					tooltipId: t
				}))
			}));
			t.default = Object(U.b)(te(Object(N.b)(e => {
				const {
					chainPost: t,
					className: n,
					crosspost: s,
					currentUser: r,
					eventFactory: i,
					flairStyleTemplate: d,
					hideNSFWPref: l,
					hostPostId: u,
					inSubredditOrProfile: N = !1,
					isActionBarAnimationEnabled: M,
					isCheckboxSelected: F,
					isCommentsPage: U,
					isCurrentUserProfilePost: V,
					isFrontpage: W,
					isLoggedIn: H,
					isOverlay: z,
					isPostChainDismissed: q,
					isPostChained: K,
					isTopicPage: Z,
					imageGalleryCurrentItem: J,
					listingBelowVariant: Y,
					listingKey: $,
					listingName: te,
					moderatorPermissions: ne,
					modModeEnabled: se,
					onClickPost: oe,
					onIgnoreReports: re,
					onOpenReportsDropdown: ie,
					post: ce,
					postId: ae,
					postIds: de,
					redditStyle: le,
					shouldHideFlair: ue,
					showAwardsPlaque: pe,
					showBulkActionCheckbox: me,
					showEditFlair: be,
					showMedia: fe,
					sendEvent: he,
					subredditOrProfile: ve,
					toggleCheckbox: xe
				} = e, ge = le ? void 0 : d, Oe = Object(R.a)(ne), ye = se && Oe, je = Object(L.a)(ne), _e = Object(B.a)(ne), Ee = Object(j.c)(ce), ke = !!Y && !Object(T.sd)(Y), Se = Object(A.a)(ce), Ce = N && !fe && !ke, Ie = Ce && !!ce.source && !s, we = !(W && H || Z) && !V && (!N || ke), Pe = (!N || ke) && !ce.isSponsored, Te = Object(c.t)(ce, J), {
					source: Ne
				} = Te, Me = o.a.createElement(E.a, {
					className: Object(a.a)(ee.a.container, n, Q.a.largeAndMediumPostStyles, Q.a.largeAndMediumActiveStyles, Object(D.a)(e), {
						[Q.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: z,
					style: Object(D.b)(e.flairStyleTemplate),
					post: ce,
					onClick: oe,
					onPostContentClick: t,
					eventFactory: i
				}, o.a.createElement(S.a, {
					model: ce,
					handleVote: e.handleVote,
					showBulkActionCheckbox: me,
					isCheckboxSelected: F,
					toggleCheckbox: xe,
					flairStyleTemplate: ge,
					redditStyle: le,
					subreddit: ve,
					isActionBarAnimationEnabled: M,
					postId: ae
				}), o.a.createElement(_.a, {
					className: ee.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: ge,
					post: ce,
					redditStyle: le
				}, o.a.createElement(v.a, {
					post: ce
				}), o.a.createElement("article", {
					className: ee.a.mainBody
				}, o.a.createElement("div", {
					className: ee.a.content,
					"data-click-id": "body"
				}, o.a.createElement(I.a, {
					className: ee.a.postTopLine,
					hideAwards: pe,
					hideNSFWPref: l,
					hostPostId: u,
					iconClassName: ee.a.postTopLineIcon,
					inSubredditOrProfile: N,
					isCommentsPage: U,
					isCurrentUserProfilePost: V,
					isOverlay: !!z,
					isTopicPage: !!Z,
					listingKey: $,
					post: ce,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: Ie,
					showSubreddit: Pe,
					showSubredditIcon: !0,
					subredditOrProfile: ve
				}), o.a.createElement(C.c, {
					className: ee.a.postTitle,
					post: ce,
					redditStyle: le,
					size: C.b.Large,
					titleColor: ge && ge.postTitleColor,
					isOverlay: z
				}), U && !ue && (ce.flair && ce.flair.length > 0 || e.isInCategoriesExperiment) && o.a.createElement(x.a, {
					className: Object(a.a)(U && ee.a.leftPadding),
					disableFlair: !U,
					post: ce,
					sendEvent: he,
					showCategoryTag: e.isInCategoriesExperiment && U
				}), ce.source && !ce.isSponsored && !s && o.a.createElement(P.a, {
					className: ee.a.sourceLink,
					isCommentsPage: U,
					post: ce
				})), !Ce && Se && o.a.createElement(X.a, {
					crosspost: s ? ce : void 0,
					hasModPostPerms: Oe,
					isCommentsPage: U,
					isOverlay: z,
					modModeEnabled: se,
					post: s || ce,
					redditStyle: le,
					shouldShowSubscribeButton: we,
					subredditOrProfile: ve,
					templatePlaceholderImage: ge && ge.postPlaceholderImage
				})), ce.isSponsored && Ne && Ne.url && o.a.createElement(p.a, {
					className: ee.a.adLinkWrapper
				}, o.a.createElement(m.a, {
					post: ce,
					adLinkContent: Te
				})), se && Oe && Ee && o.a.createElement(y.a, {
					className: ee.a.modModeReports,
					onIgnoreReports: re,
					reportable: ce
				}), o.a.createElement(O.d, null), pe && o.a.createElement(b.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: U,
					thing: ce,
					tooltipType: z ? w.c.Lightbox : void 0
				}), o.a.createElement("div", {
					className: ee.a.flatlistContainer
				}, o.a.createElement(f.a, {
					className: ee.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: ge,
					redditStyle: le,
					model: ce,
					onVoteClick: e.handleVote
				}), o.a.createElement(g.c, {
					currentUser: r,
					hasModFlairPerms: je,
					hasModFullPerms: _e,
					hasModPostPerms: Oe,
					hostPostId: u,
					isActionBarAnimationEnabled: M,
					isOverlay: !!z,
					listingKey: $,
					modModeEnabled: se,
					onIgnoreReports: re,
					onOpenReportsDropdown: ie,
					post: ce,
					showEditFlair: be,
					tooltipType: z ? w.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(k.h)({
						editPost: !ye,
						save: !ye,
						hide: !1,
						report: !1
					})
				}))), W && o.a.createElement(G.a, {
					post: ce,
					postIds: null != de ? de : [],
					subredditId: null == ve ? void 0 : ve.id
				}));
				return o.a.createElement(o.a.Fragment, null, Me, K && !q && o.a.createElement(h.a, {
					className: ee.a.chain,
					listingKey: $,
					listingName: te,
					postId: ce.id
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/ModModeReports/index.m.less"),
				a = n.n(c);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", a.a), u = i.a.div("Placeholder", a.a), p = () => r.a.createElement(u, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), m = Object(s.a)({
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
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/reportFlow/index.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function f(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: f
				} = e, [h, v] = Object(o.useState)(!0), x = Object(b.b)(n.id, f), g = Object(i.d)(), O = Object(m.a)(), y = Object(b.a)(n, f), j = (e, s) => O(Object(p.a)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					y && j("modal", "show")
				}, [y]);
				if (!y || !h) return null;
				const _ = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: x,
					title: _,
					onClose: () => {
						v(!1), j("close", "click"), g(Object(a.A)()), g(Object(a.L)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						g(Object(a.A)())
					}
				}, r.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", r.a.createElement(c.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(u.a, {
					onClick: () => (v(!1), j("report", "click"), void g(Object(d.c)(n.id)))
				}, s.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow/index.ts"),
				u = n("./src/reddit/components/Popup/index.tsx"),
				p = n("./src/reddit/components/Popup/Button.tsx"),
				m = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: h
				} = e, [v, x] = Object(r.useState)(s.Survey), g = Object(f.b)(n.id, h), O = Object(c.d)(), y = Object(b.a)(), j = Object(f.a)(n, h), _ = (e, s) => y(Object(m.b)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					j && _("modal", "show")
				}, [j]);
				const E = e => {
					x(s.Closed), _("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), O(Object(l.c)(n.id, void 0, e))
				};
				if (!j) return null;
				let k = null;
				const S = {
					id: g,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						x(s.Closed), _("close", "click"), O(Object(d.A)())
					},
					onClickOutside: () => {
						O(Object(d.A)())
					}
				};
				switch (v) {
					case s.Survey:
						k = i.a.createElement(u.a, S, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								x(s.OffTopic), _("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								x(s.DontLike), _("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								x(s.BreaksRules), _("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						k = i.a.createElement(u.a, S, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						k = i.a.createElement(u.a, S, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						k = i.a.createElement(u.a, S, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", i.a.createElement(a.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => E("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => E("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case s.Closed:
				}
				return k
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(s || (s = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(r);

			function c(e) {
				return o.a.createElement("button", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/uuid/v4.js"),
				i = n.n(r),
				c = n("./src/reddit/hooks/useOnClickOutside.ts"),
				a = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(a);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: s,
					title: r,
					children: a
				} = e;
				return Object(c.a)(t, s), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: d.a.header
				}, o.a.createElement("span", {
					className: d.a.title
				}, r), o.a.createElement("button", {
					className: d.a.closeButton,
					onClick: n
				}, "✕")), a)
			}
		},
		"./src/reddit/components/PopupPortal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				c = n("./src/reddit/constants/zIndex.ts");
			const a = "POPUP_CONTAINER";
			let d;
			const l = ["right", "top"],
				u = ["left", "top"];

			function p(e) {
				const [t, n] = Object(s.useState)(null);
				return Object(s.useEffect)(() => {
					const t = () => {
						const t = (e => {
							let t;
							if (!(t = "string" == typeof e ? document.getElementById(e) : e.current)) return;
							const n = t.getBoundingClientRect(),
								{
									style: s
								} = Object(r.b)({
									isFixed: !1,
									targetBox: n,
									targetPosition: l,
									tooltipPosition: u,
									tooltipSize: {
										width: 100,
										height: 100
									}
								});
							return {
								x: s.left,
								y: s.top
							}
						})(e);
						t && n(t)
					};
					return t(), window.addEventListener("resize", t), () => {
						window.removeEventListener("resize", t)
					}
				}, [e]), t
			}

			function m(e) {
				const {
					children: t,
					rightOf: n
				} = e, s = p(n);
				return s && (d || (d = document.getElementById(a))) ? Object(i.d)(o.a.createElement("div", {
					style: {
						position: "absolute",
						transform: `translate(${s.x}px, ${s.y}px)`,
						zIndex: c.e
					}
				}, t), d) : null
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				a = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: i,
					post: a,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, n),
					style: Object(c.c)(s, e),
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/isRemoved.ts"),
				h = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				v = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				x = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				g = n("./src/reddit/models/AutomatedReporting/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				k = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = n("./src/reddit/icons/fonts/Report/index.tsx"),
				I = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				w = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				P = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				T = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = n("./src/reddit/components/PostBadges/index.m.less"),
				M = n.n(N);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => r.a.createElement("span", A({
					className: M.a.removalReason
				}, e), e.children),
				B = () => s.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				R = () => s.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				D = e => s.fbt._("Moderator of {community name}", [s.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				F = () => s.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				U = () => s.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				V = (e, t, n) => {
					const s = `PostBadges--${e}--${t}`;
					return n ? `${s}--${n}` : s
				},
				W = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				H = Object(c.c)({
					isPinned: (e, {
						post: t
					}) => Object(y.r)(e, {
						postId: t.id
					}),
					modModeEnabled: b.P
				}),
				G = Object(i.b)(H, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = W(G(({
				className: e,
				displayText: t,
				isSubreddit: n,
				inSubredditOrProfile: i,
				isCompactPinnedPost: c,
				isPinned: l,
				isProfilePostListing: b,
				modModeEnabled: y,
				onHideTooltip: N,
				onOpenRemovalReasonModal: W,
				onShowTooltip: H,
				post: G,
				tooltipType: z
			}) => {
				const q = Object(x.b)(),
					K = {
						caretOnTop: !1
					},
					Z = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === m.a.SUBREDDIT,
					J = V("Approve", G.id, z),
					X = V("Archived", G.id, z),
					Y = V("Automod", G.id, z),
					Q = V("Lock", G.id, z),
					$ = V("Mod", G.id, z),
					ee = V("Remove", G.id, z),
					te = V("Report", G.id, z),
					ne = V("Spam", G.id, z),
					se = V("Sticky", G.id, z),
					oe = V("Pinned", G.id, z),
					re = G.bannedBy && Object(g.b)(G.bannedBy);
				return r.a.createElement("div", {
					className: e
				}, i && t && G.distinguishType === d.C.MODERATOR && r.a.createElement(o.Fragment, null, q ? r.a.createElement(j.a, {
					name: "mod",
					isFilled: !0,
					className: Object(a.a)(M.a.icon, M.a.modIcon)
				}) : r.a.createElement(T.a, {
					className: Object(a.a)(M.a.icon, M.a.modIcon),
					desc: D(t),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: N
				}), r.a.createElement(u.c, A({
					tooltipId: $,
					text: D(t)
				}, K))), G.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					isFilled: q,
					className: Object(a.a)(M.a.icon, M.a.archivedIcon),
					desc: B(),
					id: X,
					onMouseEnter: H(X),
					onMouseLeave: N
				}), r.a.createElement(u.c, A({
					tooltipId: X,
					text: B()
				}, K))), G.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					isFilled: q,
					className: Object(a.a)(M.a.icon, M.a.lockIcon),
					desc: R(),
					id: Q,
					onMouseEnter: H(Q),
					onMouseLeave: N
				}), r.a.createElement(u.c, A({
					tooltipId: Q,
					text: R()
				}, K))), n && Object(O.p)(G) && !c && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					isFilled: q,
					className: Object(a.a)(M.a.icon, M.a.stickyIcon),
					desc: F(),
					id: se,
					onMouseEnter: H(se),
					onMouseLeave: N
				}), r.a.createElement(u.c, A({
					tooltipId: se,
					text: F()
				}, K))), b && l && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					isFilled: q,
					className: Object(a.a)(M.a.icon, M.a.stickyIcon),
					desc: U(),
					id: oe,
					onMouseEnter: H(oe),
					onMouseLeave: N
				}), r.a.createElement(u.c, A({
					tooltipId: oe,
					text: U()
				}, K))), (G.isApproved || G.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					isFilled: q,
					className: Object(a.a)(M.a.icon, M.a.approveIcon),
					desc: Object(h.a)(G),
					id: J,
					onMouseEnter: H(J),
					onMouseLeave: N
				}), r.a.createElement(u.c, A({
					tooltipId: J,
					text: Object(h.a)(G)
				}, K))), Object(f.a)(G) && !re && r.a.createElement(o.Fragment, null, r.a.createElement(S.a, {
					isFilled: q,
					className: Object(a.a)(M.a.icon, M.a.removeIcon),
					desc: Object(h.c)(G),
					id: ee,
					onMouseEnter: H(ee),
					onMouseLeave: N
				}), Z && r.a.createElement(p.a, {
					className: M.a.addRemovalReason,
					onClick: W,
					text: s.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (G.modRemovalReason || G.modNote) && r.a.createElement(L, {
					onMouseEnter: H(ee),
					onMouseLeave: N
				}, s.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, A({
					tooltipId: ee,
					text: Object(h.c)(G)
				}, K))), G.bannedBy && G.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(I.a, {
					isFilled: q,
					className: Object(a.a)(M.a.icon, M.a.spamIcon),
					desc: Object(h.e)(G),
					id: ne,
					onMouseEnter: H(ne),
					onMouseLeave: N
				}), r.a.createElement(u.c, A({
					tooltipId: ne,
					text: Object(h.e)(G)
				}, K))), ("AutoModerator" === G.approvedBy || "AutoModerator" === G.bannedBy) && r.a.createElement(o.Fragment, null, q ? r.a.createElement(j.a, {
					name: "bot",
					isFilled: !0,
					className: Object(a.a)(M.a.icon, M.a.automoderator, !!G.bannedBy && M.a.isRemoved)
				}) : r.a.createElement(P.a, {
					className: Object(a.a)(M.a.icon, M.a.automoderator, !!G.bannedBy && M.a.isRemoved),
					desc: h.b,
					id: Y,
					onMouseEnter: H(Y),
					onMouseLeave: N
				}), r.a.createElement(u.c, A({
					tooltipId: Y,
					text: h.b
				}, K))), re && r.a.createElement("div", {
					className: M.a.removalReason
				}, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", re)], {
					hk: "3C408F"
				})), Object(v.a)(G) && !y && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					isFilled: q,
					className: Object(a.a)(M.a.icon, M.a.reportIcon),
					desc: Object(h.d)(G.numReports),
					id: te,
					onMouseEnter: H(te),
					onMouseLeave: N
				}), r.a.createElement(u.c, A({
					tooltipId: te,
					text: Object(h.d)(G.numReports)
				}, K))))
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				c = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(a.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/selectors/media.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/video.ts"),
				x = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/objectSelector/index.ts"),
				O = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				y = n("./src/reddit/components/PostContainer/index.m.less"),
				j = n.n(y);
			const _ = Object(m.a)(() => Object(r.c)({
					basePixelMetadata: Object(g.a)((e, {
						post: t
					}) => Object(h.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					currentIndex: (e, {
						post: t
					}) => Object(f.b)(e, t.id),
					buffering: (e, {
						post: t
					}) => Object(v.a)(e, {
						postId: t.id
					}),
					playing: (e, {
						post: t
					}) => Object(v.g)(e, {
						postId: t.id
					}),
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(v.c)(e, {
						postId: t.id
					}),
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(h.i)(e, {
						postId: t.id
					})
				})),
				E = e => {
					const t = Object(O.d)(e.target, e.currentTarget),
						n = Object(O.b)(e.target, e.currentTarget, O.a.buttons);
					return "subreddit" !== t && n
				};
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						currentIndex: r,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: p,
						onClick: m,
						onPostContentClick: f,
						sendEvent: h,
						style: v,
						ref: g
					} = this.props, O = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => m && m(n, p, t, d))(n), f && E(n) && f(n, p)), p.id && d) {
								const {
									source: e
								} = Object(i.t)(p, d);
								if (e && e.outboundUrl) {
									const t = r + 1;
									h(Object(a.c)(p.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(x.a)(j.a.WrappedPost, s, `Post ${p.id}`, {
							promotedlink: p.isSponsored
						}),
						id: l ? l(p.id) : p.id,
						tabIndex: -1,
						"data-testid": p.id
					}, n), y = !!p.media && p.media.type === b.o.VIDEO;
					return p.isSponsored || y ? o.a.createElement(c.a, {
						post: p,
						trackDisplay: !0
					}, O) : p.media && Object(b.E)(p.media) ? o.a.createElement(u, {
						postId: p.id
					}, O) : O
				}
			}
			t.a = _(Object(O.c)(Object(p.c)(k)))
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
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				m = n.n(p);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(u.o)({
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
					} = this.props, o = this.state.isHovered, i = n.isFollowed;
					let c = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (c = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(a.a)(m.a.collectionFollow, {
							[m.a.isFollowed]: !!n.isFollowed,
							[m.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, c)
				}
			}
			const f = Object(i.b)(() => Object(c.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.v)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				c = n("./src/reddit/components/PopupPortal/index.tsx"),
				a = n("./src/reddit/components/PostLeftRail/index.tsx"),
				d = n("./src/reddit/components/VerticalVotes/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.tsx"),
				u = n("./src/reddit/helpers/isPost.ts"),
				p = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				b = n.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: h,
					redditStyle: v,
					subreddit: x,
					isOverlay: g,
					isActionBarAnimationEnabled: O,
					postId: y,
					isForceSelected: j
				} = e, _ = `upvote-button-${t.id}${g?"-overlay":""}`, {
					moderationPrompt: E
				} = t;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: v
				}, s && o.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: f
				}), o.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: v,
					upvoteTooltipId: _,
					isActionBarAnimationEnabled: O,
					postId: y,
					isForceSelected: j,
					scoreClassName: b.a.score
				}), E && o.a.createElement(c.b, {
					rightOf: _
				}, "survey" === E ? o.a.createElement(i.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: x.name,
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				a = n("./src/reddit/components/PostBadges/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				v = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/models/Subreddit/index.ts"),
				O = n("./src/reddit/components/PostTopLine/index.m.less"),
				y = n.n(O);
			const j = n("./src/lib/lessComponent.tsx").a.div("Container", y.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: n,
					hideAwards: s,
					hideNSFWPref: O,
					hostPostId: _,
					iconClassName: E,
					inSubredditOrProfile: k,
					isCommentsPage: S,
					isCompactPinnedPost: C,
					isCurrentUserProfilePost: I,
					isOverlay: w,
					isTopicPage: P,
					listingKey: T,
					post: N,
					shouldShowSubscribeButton: M,
					showCornerOutboundLink: A,
					showSubreddit: L,
					showSubredditIcon: B,
					subredditOrProfile: R
				} = e, D = s || P;
				return o.a.createElement(j, {
					className: t
				}, L && R && o.a.createElement("div", {
					className: y.a.subredditIconWrapper
				}, o.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, B && o.a.createElement(l.b, {
					className: Object(r.a)(y.a.subredditIcon, E),
					shouldHideNsfwIcon: O,
					subredditOrProfile: R
				}))), o.a.createElement("div", {
					className: y.a.everythingElseWrapper
				}, L && o.a.createElement(c.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), o.a.createElement(d.d, {
					className: y.a.postTopMeta,
					flairStyleTemplate: n,
					tooltipType: w ? d.c.Lightbox : void 0,
					post: N,
					showSub: L,
					subredditOrProfile: R
				}), o.a.createElement(a.a, {
					className: y.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: C,
					post: N,
					tooltipType: w ? d.c.Lightbox : void 0
				}), !D && o.a.createElement(i.a, {
					isPostDetail: S,
					thing: N,
					tooltipType: w ? d.c.Lightbox : void 0
				})), R && L && M && !I && o.a.createElement(p.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(h.f)(N.id, e ? "unsubscribe" : "subscribe", "post", T, _),
					identifier: {
						name: R.name,
						type: Object(g.g)(R) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: N.id,
					size: b.c.XS
				}), A && o.a.createElement(f.b, {
					className: y.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(x.D)(e.post),
					source: N.source
				}, o.a.createElement(v.a, {
					className: y.a.outboundLinkIcon
				})))
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
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/getShortenedLink.ts"),
				c = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				l = n("./src/reddit/components/SourceLink/index.m.less"),
				u = n.n(l),
				p = n("./src/lib/lessComponent.tsx");
			const m = p.a.wrapped(d.a, "OutboundLinkIcon", u.a),
				b = p.a.div("SourceLinkWrapper", u.a);

			function f(e) {
				const t = Object(a.b)(),
					{
						className: n,
						post: s,
						isCommentsPage: d
					} = e,
					{
						source: l,
						isSponsored: p
					} = s;
				return l ? o.a.createElement(b, {
					className: Object(r.a)({
						[u.a["m-comment"]]: d
					}, n)
				}, o.a.createElement(c.a, {
					href: l.url,
					isSponsored: p,
					postId: s.id,
					source: l
				}, Object(i.a)(s), o.a.createElement(m, {
					isFilled: t
				}))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				p = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				b = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				f = n.n(b),
				h = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = v.a.wrapped(({
					small: e,
					shouldReverseColor: t,
					...n
				}) => {
					const s = Object(r.b)(),
						i = t ? d.l : d.i;
					return o.a.createElement(i, x({}, n, {
						className: Object(h.a)(n.className, {
							[f.a.isLarge]: !e
						}),
						"data-ignore-click": !!s
					}))
				}, "SubscribeInternalButton", f.a),
				O = v.a.wrapped(({
					small: e,
					belongsToType: t,
					shouldReverseColor: n,
					...s
				}) => {
					const i = Object(r.b)(),
						c = n ? d.i : d.l;
					return o.a.createElement(c, x({}, s, {
						className: Object(h.a)(s.className, {
							[f.a.isLarge]: !e
						}),
						"data-ignore-click": !!i
					}))
				}, "UnsubscribeButton", f.a),
				y = v.a.wrapped(u.a, "Checkmark", f.a),
				j = v.a.wrapped(p.a, "Plus", f.a),
				_ = v.a.div("ButtonSpacer", f.a);
			class E extends o.a.Component {
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
						[a.a.Buttons]: e,
						[a.a.Icons]: t
					}) => {
						const {
							className: n,
							identifier: s,
							onSubscribe: r,
							onUnsubscribe: i,
							postId: c,
							sendEvent: u,
							small: p = !1,
							size: b,
							userIsSubscriber: v,
							doNotHideOtherSubscribeButtons: g,
							getEventFactory: j,
							onSubscriptionsRequested: _,
							...E
						} = this.props, k = this.state.isHovered, S = Object(m.a)({
							type: s.type,
							key: k ? "unsubscribe" : "subscribed"
						});
						return e ? o.a.createElement(d.q, x({
							className: Object(h.a)(n, f.a.Button2020),
							priority: E.shouldReverseColor ? d.b.Primary : d.b.Secondary,
							Icon: p || !p && !k ? t ? e => o.a.createElement(l.a, x({
								name: "checkmark"
							}, e)) : y : void 0,
							text: !p && S,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: b || (p ? d.c.XS : d.c.S)
						}, E)) : o.a.createElement(O, x({
							className: Object(h.a)(n, {
								[f.a.isLarge]: !p,
								[f.a.unsubscribeButtonHoverStyles]: !p
							}),
							onClick: this.onClick,
							small: p,
							belongsToType: s.type,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}, E), p && (t ? o.a.createElement(l.a, {
							name: "checkmark"
						}) : o.a.createElement(y, null)), !p && !k && (t ? o.a.createElement(l.a, {
							name: "checkmark"
						}) : o.a.createElement(y, null)), !p && S)
					}, this.renderSubscribeButton = ({
						[a.a.Buttons]: e,
						[a.a.Icons]: t
					}) => {
						const {
							className: n,
							identifier: s,
							onSubscribe: r,
							onUnsubscribe: i,
							postId: c,
							sendEvent: u,
							small: p = !1,
							size: b,
							userIsSubscriber: v,
							doNotHideOtherSubscribeButtons: O,
							getEventFactory: y,
							onSubscriptionsRequested: _,
							...E
						} = this.props, k = Object(m.a)({
							type: s.type,
							key: "subscribe"
						});
						return e ? o.a.createElement(d.q, x({
							className: n,
							priority: E.shouldReverseColor ? d.b.Secondary : d.b.Primary,
							Icon: t ? e => o.a.createElement(l.a, x({
								name: "add"
							}, e)) : j,
							size: b || (p ? d.c.XS : d.c.S),
							text: !p && k,
							onClick: this.onClick
						}, E, {
							id: `subscribe-button-${c}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						})) : o.a.createElement(g, x({
							className: Object(h.a)(n, {
								[f.a.isLarge]: !p
							}),
							onClick: this.onClick,
							small: p
						}, E, {
							id: `subscribe-button-${c}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}), t ? o.a.createElement(l.a, {
							name: "add"
						}) : o.a.createElement(j, null), !p && k)
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
					return t ? this.state.hasJustSubscribed || n ? o.a.createElement(a.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : o.a.createElement(_, null) : o.a.createElement(a.b.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(c.a)(Object(i.c)(E))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => r[o({
					type: e
				})][t]()
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				p = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/VerticalVotes/index.m.less"),
				x = n.n(v);
			const g = Object(c.c)({
					isNightmode: h.U,
					totalDiscount: f.d,
					variantAnimationConfig: f.e
				}),
				O = Object(i.b)(g),
				y = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(m.a)(e).voteIcons.upvoteInactive && Object(m.a)(e).voteIcons.upvoteActive,
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(m.a)(e).voteIcons.downvoteInactive && Object(m.a)(e).voteIcons.downvoteActive;
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isNightmode: n,
							shouldShowScore: o = !0,
							upvoteButtonClassName: i,
							containerRef: c,
							model: d,
							totalDiscount: m,
							variantAnimationConfig: f,
							postId: h
						} = e,
						v = y(e),
						g = j(e),
						O = d.voteState;
					return r.a.createElement("div", {
						className: Object(a.a)(x.a.votesContainer, e.className),
						id: `vote-arrows-${d.id}`,
						ref: c
					}, v ? r.a.createElement(p.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": O === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightmode: n,
						onClick: this.onUpvote,
						voteState: O
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": O === b.a.upvoted,
						className: Object(a.a)(l.n, i),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, r.a.createElement(p.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: O
					})), !e.compact && o && r.a.createElement(u.a, {
						className: Object(a.a)(x.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: O,
						isScoreHidden: e.model.isScoreHidden,
						totalDiscount: m,
						shouldDisjointAnimation: null == f ? void 0 : f.shouldDisjointAnimation,
						shouldShowPageTransPersistence: null == f ? void 0 : f.shouldShowPageTransPersistence,
						postId: h
					}), g ? r.a.createElement(p.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": O === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightmode: n,
						onClick: this.onDownvote,
						voteState: O
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": O === b.a.downvoted,
						className: Object(a.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, r.a.createElement(p.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: O
					})))
				}
			}
			const E = Object(d.a)(O(_));
			t.a = E
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "d", (function() {
				return A
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const c = (e, t, n) => s => {
				const o = e(s),
					i = t(s),
					c = !o && i;
				return Object(r.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: i,
					[n.mIsActive]: o,
					[n.mIsVoteable]: c
				})
			};
			var a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				u = n("./src/reddit/controls/Downvote/index.m.less"),
				p = n.n(u);
			const m = {
					...p.a,
					baseClassName: p.a.Downvote
				},
				b = ({
					voteState: e
				}) => e === l.a.downvoted,
				f = c(b, ({
					interactive: e
				}) => !1 !== e, m);
			var h = e => {
					const t = Object(a.b)();
					return o.a.createElement(d.b, {
						className: f(e),
						compact: e.compact,
						isFilled: t && b(e)
					})
				},
				v = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				x = n("./src/reddit/controls/Upvote/index.m.less"),
				g = n.n(x);
			const O = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				y = ({
					voteState: e
				}) => e === l.a.upvoted,
				j = c(y, ({
					interactive: e
				}) => !1 !== e, O);
			var _ = e => {
					const t = Object(a.b)();
					return o.a.createElement(v.b, {
						className: j(e),
						compact: e.compact,
						isFilled: t && y(e)
					})
				},
				E = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				k = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				I = n.n(C);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = e => Object(r.a)({
					[I.a.compact]: e.compact,
					[I.a.dark]: Object(k.b)(Object(E.a)(e)),
					[I.a.nightmode]: e.isNightmode
				}),
				T = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						...i
					} = e;
					return o.a.createElement("button", w({}, i, {
						className: Object(r.a)(I.a.customDownvote, P(e), {
							[I.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				N = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						...i
					} = e;
					return o.a.createElement("button", w({}, i, {
						className: Object(r.a)(I.a.customUpvote, P(e), {
							[I.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				M = h,
				A = _
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				userIsSubscriber: i.fb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/constants/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = 3,
				o = 5,
				r = 10
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: i,
						"data-redditstyle": c,
						...a
					} = t, d = ((e, t, n) => {
						const s = !(!t && !n);
						let o = "";
						return o = e ? s ? l.a.mDisabledRedditStyle : l.a.mDisabled : s ? l.a.mActiveRedditStyle : l.a.mActive
					})(s, i, c);
					return o.a.createElement(e, u({
						className: Object(r.a)(l.a.CheckboxIcon, d, n)
					}, a))
				},
				m = p(a.a),
				b = p(c.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? b : e.isCheckboxSelected ? m : i.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => o.a.createElement("div", {
				className: Object(r.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/random.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/reddit/components/CountAnimation/index.tsx"),
				u = n("./src/reddit/components/CountAnimation/config.ts"),
				p = n("./src/reddit/components/CountAnimation/helpers.ts"),
				m = n("./src/reddit/constants/colors.ts"),
				b = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				f = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/controls/Score/index.m.less"),
				g = n.n(x);
			const O = e => e.voteState === v.a.downvoted ? Object(h.a)(e).voteText.downvote : e.voteState === v.a.upvoted ? Object(h.a)(e).voteText.upvote : Object(f.a)(Object(b.a)(e)),
				{
					upvoteCount: {
						inititalDelayRange: {
							lower: y,
							upper: j
						},
						subsequentRecurringDelayRange: {
							lower: _,
							upper: E
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: k,
							upper: S
						}
					}
				} = u.b,
				C = () => o()(y, j),
				I = () => o()(_, E),
				w = Object(a.a)(e => {
					const t = {
							color: e.light ? m.b.lightboxHeaderText : O(e)
						},
						{
							totalDiscount: n,
							score: s,
							shouldDisjointAnimation: a,
							shouldShowPageTransPersistence: u,
							postId: b = ""
						} = e,
						f = e.isScoreHidden ? "Vote" : Object(d.b)(s),
						h = Object(r.useCallback)(() => o()(Math.ceil((n || 0) * k), Math.ceil((n || 0) * S)), [n]),
						v = Object(r.useRef)(Object(p.k)(b, p.a.Vote)),
						x = Object(r.useRef)(u && void 0 !== n && Object(p.e)(v.current));
					return i.a.createElement("div", {
						className: Object(c.a)(g.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, e.isScoreHidden || void 0 === n ? f : i.a.createElement(l.a, {
						initialDisplayCount: x.current || s - n,
						countToUpperBound: s,
						initialDelay: C,
						subsequentRecurringDelay: I,
						incrementDelta: h,
						shouldDisjointAnimation: a,
						id: v.current
					}))
				});
			t.a = w
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/thumbnails.ts"),
				o = n("./src/reddit/models/Media/index.ts");

			function r(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === s.a.SELF || e.thumbnail.url === s.a.NSFW || e.media && Object(o.E)(e.media))
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
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = s.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				c = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : s.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + s.fbt._("Reason by {username}:", [s.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + s.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				a = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : s.fbt._("Removed as spam", null, {
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
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return v
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				c = n("./src/reddit/models/Theme/index.ts"),
				a = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				p = e => Object(c.g)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				m = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(c.g)(e.postBackgroundColor || Object(a.a)(t).post, e.postBackgroundImage, Object(a.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(c.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(s.l)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "E", (function() {
				return E
			})), n.d(t, "F", (function() {
				return k
			})), n.d(t, "M", (function() {
				return C
			})), n.d(t, "B", (function() {
				return I
			})), n.d(t, "C", (function() {
				return w
			})), n.d(t, "D", (function() {
				return P
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "x", (function() {
				return M
			})), n.d(t, "L", (function() {
				return A
			})), n.d(t, "K", (function() {
				return L
			})), n.d(t, "I", (function() {
				return B
			})), n.d(t, "v", (function() {
				return R
			})), n.d(t, "y", (function() {
				return D
			})), n.d(t, "z", (function() {
				return F
			})), n.d(t, "A", (function() {
				return U
			})), n.d(t, "N", (function() {
				return V
			})), n.d(t, "J", (function() {
				return W
			})), n.d(t, "t", (function() {
				return H
			})), n.d(t, "H", (function() {
				return G
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "c", (function() {
				return q
			})), n.d(t, "b", (function() {
				return K
			})), n.d(t, "f", (function() {
				return Z
			})), n.d(t, "e", (function() {
				return J
			})), n.d(t, "s", (function() {
				return Q
			})), n.d(t, "m", (function() {
				return $
			})), n.d(t, "r", (function() {
				return ee
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return se
			})), n.d(t, "p", (function() {
				return oe
			})), n.d(t, "q", (function() {
				return re
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "j", (function() {
				return ce
			})), n.d(t, "u", (function() {
				return ae
			})), n.d(t, "G", (function() {
				return de
			}));
			var s, o = n("./src/lib/stringInterpolate/index.ts"),
				r = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/models/Widgets/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const f = "discovery_unit",
				h = (e, t, n) => ({
					...p.defaults(e),
					source: f,
					screen: p.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(o.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				v = (e, t, n) => ({
					...h(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				x = (e, t) => {
					Object(b.a)(g(t)(e))
				},
				g = (e, t) => n => v(n, e, t),
				O = (e, t, n, s) => "unitName" in t ? h(e, t, s) : ((e, t, n) => ({
					...p.defaults(e),
					source: "search",
					screen: p.screen(e),
					search: n ? {
						...p.search(e, n),
						structureType: p.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				y = (e, t, n, o, r) => ({
					...O(e, t, o, r),
					action: "view",
					noun: s.ITEM_POST,
					post: p.post(e, n)
				}),
				j = ({
					post: e,
					rawQuery: t,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? p.StructureType.PromotedTrend : p.StructureType.Trending
				});
			var _;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(_ || (_ = {}));
			const E = (e, t, n) => {
					Object(b.a)(S(e, t, n, i.c.CLICK))
				},
				k = (e, t, n) => {
					Object(b.a)(S(e, t, n, i.c.VIEW))
				},
				S = (e, t, n, s) => {
					const o = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...p.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: j(t),
						discoveryUnit: n === _.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
							type: "query"
						} : void 0,
						actionInfo: p.actionInfo(e, {
							paneName: n,
							position: o
						}),
						search: {
							originPageType: e.platform.currentPage ? p.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: p.StructureType.Trending,
							queryId: s === i.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				C = (e, t, n, s, o, r, c) => {
					Object(b.a)({
						...p.defaults(e),
						...Object(a.e)(e, n, s, o, r, t),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				I = (e, t, n, s) => {
					Object(b.a)(y(e, t, n, s))
				},
				w = (e, t, n, s) => o => y(o, e, t, n, s),
				P = (e, t, n, o) => {
					const r = O(e, t, o);
					Object(b.a)({
						...r,
						...Object(m.b)(e, n),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				T = (e, t) => {
					Object(b.a)({
						...h(e, t),
						source: f,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				N = (e, t, n, s) => {
					Object(b.a)(M(t, n, s)(e))
				},
				M = (e, t, n, o) => r => {
					return {
						...O(r, e, n, o),
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_POST,
						post: p.post(r, t)
					}
				},
				A = (e, t, n, s) => o => r => Object(a.e)(r, o, e, t, n, s),
				L = (e, t, n, s) => o => r => Object(a.d)(r, e, t, void 0, n, o, s),
				B = (e, t, n, s) => o => r => ({
					...Object(a.e)(r, o, e, t, n, s),
					noun: "ad"
				}),
				R = (e, t) => n => o => ({
					...e ? h(o, e, t) : {},
					source: f,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: p.post(o, n)
				}),
				D = (e, t, n, s) => {
					Object(b.a)(F(t, n, s)(e))
				},
				F = (e, t, n, s) => o => {
					const r = Object(u.c)(o, {
							postId: t
						}),
						c = r ? Object(m.b)(o, r) : void 0;
					return {
						...O(o, e, n, s),
						...c,
						source: f,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: p.post(o, t)
					}
				},
				U = (e, t, n) => s => o => {
					const r = Object(u.c)(o, {
							postId: t
						}),
						c = r ? Object(m.b)(o, r) : void 0;
					return {
						...O(o, e, void 0, n),
						...c,
						source: f,
						action: i.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: p.post(o, t)
					}
				},
				V = (e, t, n) => {
					const s = O(e, t);
					Object(b.a)({
						...s,
						...Object(m.b)(e, n),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				W = (e, t, n, s, o, r) => {
					Object(b.a)({
						...p.defaults(e),
						...Object(a.d)(e, t, n, s, o, void 0, r)
					})
				},
				H = (e, t, n) => {
					const s = O(e, t);
					Object(b.a)({
						...s,
						...Object(m.b)(e, n),
						source: f,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				G = (e, t) => n => {
					const s = Object(l.j)(t);
					return {
						...h(n, e, t),
						...Object(m.b)(n, s),
						source: f,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				z = (e, t) => n => ({
					...h(n, e, t),
					action: "status",
					actionInfo: p.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				q = (e, t, n) => s => ({
					...h(s, e, n),
					action: "status",
					actionInfo: p.actionInfo(s, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				K = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "close"
				}),
				Z = (e, t, n) => s => ({
					...O(s, e, t, n),
					action: "click",
					noun: "scroll"
				}),
				J = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				X = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: r.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				Y = (e, t, n) => p.actionInfo(e, {
					position: n
				}),
				Q = (e, t, n) => {
					const s = X();
					return e => ({
						...v(e, s),
						actionInfo: Y(e, 0, n),
						subreddit: p.subredditById(e, t)
					})
				},
				$ = (e, t, n) => {
					const s = X();
					return e => ({
						...y(e, s, t),
						actionInfo: Y(e, 0, n)
					})
				},
				ee = (e, t, n) => {
					const o = X();
					return e => ({
						...h(e, o),
						actionInfo: Y(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				te = (e, t, n) => {
					const o = X();
					return e => ({
						...h(e, o),
						actionInfo: Y(e, 0, n),
						post: p.post(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				ne = (e, t, n, o) => {
					const r = X();
					return e => ({
						...h(e, r),
						actionInfo: Y(e, 0, o),
						subreddit: p.subredditById(e, n) || null,
						post: p.post(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				se = (e, t, n) => {
					const o = X();
					return e => ({
						...h(e, o),
						actionInfo: Y(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				oe = (e, t, n, o) => {
					const r = X();
					return e => ({
						...h(e, r),
						actionInfo: Y(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: o ? p.post(e, o) : null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				re = (e, t, n, o) => {
					const r = X();
					return e => ({
						...h(e, r),
						actionInfo: Y(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: o ? p.post(e, o) : null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ie = (e, t, n) => {
					const o = X();
					return e => ({
						...h(e, o),
						actionInfo: Y(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ce = (e, t, n) => {
					const o = X();
					return e => ({
						...h(e, o),
						actionInfo: Y(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				ae = (e, t) => n => ({
					...h(n, e),
					...t && Object(m.b)(n, t),
					source: f,
					action: i.c.CLICK,
					noun: "item"
				}),
				de = e => t => ({
					...h(t, e),
					source: f,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/parseUrl.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => ({
					gallery: r.gallery(e, t, n),
					post: r.post(e, t),
					...r.defaults(e)
				}),
				c = (e, t) => n => ({
					...i(n, e, t),
					action: s.c.VIEW,
					noun: "media",
					source: "gallery",
					media: r.media(n, e)
				}),
				a = (e, t, n) => c => {
					const a = Object(o.a)(t);
					return {
						...i(c, e, n),
						action: s.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...r.media(c, e),
							outboundUrl: t,
							outboundDomain: a ? a.hostname : void 0
						}
					}
				},
				d = (e, t) => u(e, !0, t),
				l = (e, t) => u(e, !1, t),
				u = (e, t, n) => o => ({
					...i(o, e, n),
					action: s.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: c.profile(e),
					screen: c.screen(e),
					subreddit: c.subreddit(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(i.h)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...a(s),
					post: c.post(s, e)
				}),
				l = (e, t, n, s) => o => {
					const i = n ? c.comment(o, n) : null,
						{
							sortToUse: a
						} = Object(r.a)(o, e);
					return {
						...d(e, t, s)(o),
						comment: i,
						listing: {
							sort: a
						}
					}
				},
				u = (e, t) => n => {
					const s = c.currentPost(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(i.h)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...a(n)
					}
				},
				p = (e, t) => n => Object(o.a)({
					...d(e, t)(n),
					...c.defaults(n)
				}),
				m = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...a(t),
					post: c.currentPost(t),
					userSubreddit: c.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return b
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(s.screen)(e),
					profile: Object(s.profile)(e),
					subreddit: Object(s.subreddit)(e),
					userSubreddit: Object(s.userSubreddit)(e)
				}),
				r = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				i = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...o(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				a = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				d = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				l = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...o(n)
				}),
				u = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					...o(n)
				}),
				p = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...o(n)
				}),
				m = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
				}),
				b = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
				})
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n, o) => r => ({
					source: "report_prompt",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				}),
				r = (e, t, n, o) => r => ({
					source: "report_survey",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				})
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return document.body.addEventListener("click", n), () => {
						document.body.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived", e.isFilled), a.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				a = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("downvote", e.isFilled), a.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? o.a.createElement("span", d({}, n, {
				className: Object(r.a)(a.a.compactDownvoteWrapper, n.className)
			}), o.a.createElement(l, {
				className: a.a.compactDownvote,
				isFilled: t
			})) : o.a.createElement("span", d({}, n, {
				className: Object(r.a)(a.a.downvoteWrapper, n.className)
			}), o.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), a.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				c = n.n(i);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", c.a);
			t.a = a
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				a = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("upvote", e.isFilled), a.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? o.a.createElement("span", d({}, n, {
				className: Object(r.a)(a.a.compactUpvoteWrapper, n.className)
			}), o.a.createElement(l, {
				className: a.a.compactUpvote,
				isFilled: t
			})) : o.a.createElement("span", d({}, n, {
				className: Object(r.a)(a.a.upvoteWrapper, n.className)
			}), o.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, o.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, o.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(c.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(r.G)(e) || s.B.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.w
				})
			}
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => s.v.Enabled === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.s
				}),
				i = e => s.Xb.Enabled === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.Rb
				})
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.nb
				});
				return !(!t || Object(s.sd)(t))
			}
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "b", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeListingKey/index.ts"),
				i = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				c = n("./src/reddit/constants/inFeedChaining.ts"),
				a = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				d = n("./src/reddit/selectors/discoveryUnit.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts");
			const p = [],
				m = (e, t) => {
					const n = e.posts.chained.idToListingKey[t.postId];
					return t.listingKey === n
				},
				b = (e, t) => {
					const n = e.posts.chained.dismissedIdToListingKey[t.postId];
					return (e => e.posts.chained.dismissed)(e) || t.listingKey === n
				},
				f = Object(s.a)(e => e.posts.chained.idToListingKey, e => Object.keys(e).filter(t => e[t])),
				h = (e, {
					subredditId: t
				}) => {
					return f(e).some(n => {
						const s = Object(l.U)(e, {
							postId: n
						});
						return !!s && s.id === t
					})
				},
				v = (e, {
					subredditName: t
				}) => {
					const n = o.Ub.DAY.toUpperCase(),
						s = Object(r.a)(t, o.P.TOP, {
							t: n
						}),
						i = Object(l.B)(e, {
							listingKey: s
						});
					if (0 !== i.length)
						for (const o of i) {
							const t = Object(l.I)(e, {
								postId: o
							});
							if (t && !t.hidden && !t.isSponsored) return t
						}
				},
				x = (e, {
					postId: t
				}) => {
					const n = ((e, {
							postId: t
						}) => {
							const n = Object(l.I)(e, {
								postId: t
							});
							if (!n) return p;
							const s = Object(i.a)({
								subredditIds: [n.belongsTo.id],
								count: c.b
							});
							return Object(u.v)(e, {
								key: s
							})
						})(e, {
							postId: t
						}),
						s = [];
					for (const {
							name: o
						} of n) {
						const t = v(e, {
							subredditName: o
						});
						t && s.push(t.id)
					}
					return s
				},
				g = (e, {
					listingName: t
				}) => {
					const n = a.b;
					return Object(d.c)(e, {
						unitName: n
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.a5866c3b9046b985ad84.js.map