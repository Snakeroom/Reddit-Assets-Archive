// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.0854d23d5cd8415a75a0.js
// Retrieved at 4/6/2021, 5:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-dom/index.js"),
				i = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, r) {
					return a(e[r], t[r])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							r = void 0 === n ? "0px" : n,
							o = t[1],
							s = void 0 === o ? r : o,
							a = t[2],
							c = void 0 === a ? r : a,
							d = t[3];
						return r + " " + s + " " + c + " " + (void 0 === d ? s : d)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = c.keys(); t = s.next().value;) {
					if (!(n !== t.root || r !== t.rootMargin || a(o, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var r, o = n.values(); r = o.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var r = l(t, e[n]);
					r && r.handleChange(e[n])
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
				j = O.hasOwnProperty,
				E = O.toString,
				k = function(e) {
					return g.reduce((function(t, n) {
						if (j.call(e, n)) {
							var r = "root" === n && "[object String]" === E.call(e[n]);
							t[n] = r ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				_ = function(e) {
					var t, n;

					function r() {
						for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
						return v(x(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(x(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var r = n.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(s.findDOMNode)(e)
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
					n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = r.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = y.some((function(n) {
							return a(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, i.componentDidUpdate = function(e, t, n) {
						var r = !1;
						n || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || r) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(o.a.Component);
			v(_, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function s() {}
			s.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, s, i) {
					if (i !== r) {
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
					checkPropTypes: s,
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
				r = Math.random;
			e.exports = function(e, t) {
				return e + n(r() * (t - e + 1))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js"),
				o = n("./node_modules/lodash/_isIterateeCall.js"),
				s = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && o(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = s(e), void 0 === t ? (t = e, e = 0) : t = s(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return r(e, t)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return r(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var r = n("./node_modules/react/index.js");

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

			function s(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = s(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof s(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof s(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return o(l(e)).left + i(e).scrollLeft
			}

			function p(e) {
				return s(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					r = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + r)
			}

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var r, a, p = l(t),
					f = o(e),
					b = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || m(p)) && (h = (r = t) !== s(r) && c(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : i(r)), c(t) ? ((x = o(t)).x += t.clientLeft, x.y += t.clientTop) : p && (x.x = u(p))), {
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
					r = "body" === d(n),
					o = s(n),
					i = r ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return r ? a : a.concat(x(h(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = s(e), n = g(e); n && v(n) && "static" === p(n).position;) n = g(n);
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
				j = "bottom",
				E = "right",
				k = "left",
				_ = "auto",
				C = [O, j, E, k],
				w = "start",
				S = "end",
				P = "clippingParents",
				M = "viewport",
				I = "popper",
				N = "reference",
				T = C.reduce((function(e, t) {
					return e.concat([t + "-" + w, t + "-" + S])
				}), []),
				A = [].concat(C, [_]).reduce((function(e, t) {
					return e.concat([t, t + "-" + w, t + "-" + S])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
				var t = new Map,
					n = new Set,
					r = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
							if (!n.has(r)) {
								var o = t.get(r);
								o && e(o)
							}
						})), r.push(o)
					}(e)
				})), r
			}
			var F = {
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
					r = void 0 === n ? [] : n,
					o = t.defaultOptions,
					s = void 0 === o ? F : o;
				return function(e, t, n) {
					void 0 === n && (n = s);
					var o, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, F), s),
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
								p(), c.options = Object.assign(Object.assign(Object.assign({}, s), c.options), n), c.scrollParents = {
									reference: a(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
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
								}([].concat(r, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var s = o({
											state: c,
											name: t,
											instance: u,
											options: r
										});
										d.push(s || function() {})
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
										for (var r = 0; r < c.orderedModifiers.length; r++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[r],
													s = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													d = o.name;
												"function" == typeof s && (c = s({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, r = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
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

			function U(e) {
				return e.split("-")[0]
			}

			function z(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function H(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					s = o ? U(o) : null,
					i = o ? z(o) : null,
					a = n.x + n.width / 2 - r.width / 2,
					c = n.y + n.height / 2 - r.height / 2;
				switch (s) {
					case O:
						t = {
							x: a,
							y: n.y - r.height
						};
						break;
					case j:
						t = {
							x: a,
							y: n.y + n.height
						};
						break;
					case E:
						t = {
							x: n.x + n.width,
							y: c
						};
						break;
					case k:
						t = {
							x: n.x - r.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = s ? V(s) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case w:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - r[l] / 2);
							break;
						case S:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - r[l] / 2)
					}
				}
				return t
			}
			var q = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function G(e) {
				var t, n = e.popper,
					r = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
					d = e.adaptive,
					u = function(e) {
						var t = e.x,
							n = e.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * r) / r || 0,
							y: Math.round(n * r) / r || 0
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
					g === s(n) && (g = l(n)), o === O && (x = j, m -= g.clientHeight - r.height, m *= c ? 1 : -1), o === k && (h = E, p -= g.clientWidth - r.width, p *= c ? 1 : -1)
				}
				var _, C = Object.assign({
					position: a
				}, d && q);
				return c ? Object.assign(Object.assign({}, C), {}, ((_ = {})[x] = b ? "0" : "", _[h] = f ? "0" : "", _.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", _)) : Object.assign(Object.assign({}, C), {}, ((t = {})[x] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var Z = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function X(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return Z[e]
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
					var r = t;
					do {
						if (r && e.isSameNode(r)) return !0;
						r = r.parentNode || r.host
					} while (r)
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
				return t === M ? Q(function(e) {
					var t = s(e),
						n = l(e),
						r = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, c = r.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						n = i(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: s,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? y(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Y(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(r, [n]),
					s = o[0],
					i = o.reduce((function(t, n) {
						var r = $(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
					}), $(e, s));
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

			function re(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = n.placement,
					s = void 0 === r ? e.placement : r,
					i = n.boundary,
					c = void 0 === i ? P : i,
					d = n.rootBoundary,
					u = void 0 === d ? M : d,
					p = n.elementContext,
					m = void 0 === p ? I : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : ne(x, C)),
					g = m === I ? N : I,
					y = e.elements.reference,
					k = e.rects.popper,
					_ = e.elements[b ? g : m],
					w = ee(a(_) ? _ : _.contextElement || l(e.elements.popper), c, u),
					S = o(y),
					T = H({
						reference: S,
						element: k,
						strategy: "absolute",
						placement: s
					}),
					A = Q(Object.assign(Object.assign({}, k), T)),
					L = m === I ? A : S,
					B = {
						top: w.top - L.top + v.top,
						bottom: L.bottom - w.bottom + v.bottom,
						left: w.left - L.left + v.left,
						right: L.right - w.right + v.right
					},
					F = e.modifiersData.offset;
				if (m === I && F) {
					var R = F[s];
					Object.keys(B).forEach((function(e) {
						var t = [E, j].indexOf(e) >= 0 ? 1 : -1,
							n = [O, j].indexOf(e) >= 0 ? "y" : "x";
						B[e] += R[n] * t
					}))
				}
				return B
			}

			function oe(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function se(e, t, n) {
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
				return [O, E, j, k].some((function(t) {
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
								r = e.options,
								o = r.scroll,
								i = void 0 === o || o,
								a = r.resize,
								c = void 0 === a || a,
								d = s(t.elements.popper),
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
							t.modifiersData[n] = H({
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
								r = n.gpuAcceleration,
								o = void 0 === r || r,
								s = n.adaptive,
								i = void 0 === s || s,
								a = {
									placement: U(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), G(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), G(Object.assign(Object.assign({}, a), {}, {
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
									r = t.attributes[e] || {},
									o = t.elements[e];
								c(o) && d(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
									var t = r[e];
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
										var r = t.elements[e],
											o = t.attributes[e] || {},
											s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(r) && d(r) && (Object.assign(r.style, s), Object.keys(o).forEach((function(e) {
											r.removeAttribute(e)
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
								r = e.name,
								o = n.offset,
								s = void 0 === o ? [0, 0] : o,
								i = A.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = U(e),
											o = [k, O].indexOf(r) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = s[0],
											a = s[1];
										return i = i || 0, a = (a || 0) * o, [k, E].indexOf(r) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, s), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name;
							if (!t.modifiersData[r]._skip) {
								for (var o = n.mainAxis, s = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, x = U(h), v = c || (x === h || !f ? [X(h)] : function(e) {
										if (U(e) === _) return [];
										var t = X(e);
										return [K(e), t, K(t)]
									}(h)), g = [h].concat(v).reduce((function(e, n) {
										return e.concat(U(n) === _ ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												s = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? A : c,
												l = z(r),
												u = (l ? a ? T : T.filter((function(e) {
													return z(e) === l
												})) : C).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: s,
														padding: i
													})[U(n)], t
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
									}), []), y = t.rects.reference, S = t.rects.popper, P = new Map, M = !0, I = g[0], N = 0; N < g.length; N++) {
									var L = g[N],
										B = U(L),
										F = z(L) === w,
										R = [O, j].indexOf(B) >= 0,
										D = R ? "width" : "height",
										W = re(t, {
											placement: L,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										V = R ? F ? E : k : F ? j : O;
									y[D] > S[D] && (V = X(V));
									var H = X(V),
										q = [];
									if (s && q.push(W[B] <= 0), a && q.push(W[V] <= 0, W[H] <= 0), q.every((function(e) {
											return e
										}))) {
										I = L, M = !1;
										break
									}
									P.set(L, q)
								}
								if (M)
									for (var G = function(e) {
											var t = g.find((function(t) {
												var n = P.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return I = t, "break"
										}, Z = f ? 3 : 1; Z > 0; Z--) {
										if ("break" === G(Z)) break
									}
								t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0)
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
								r = e.name,
								o = n.mainAxis,
								s = void 0 === o || o,
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
								x = re(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								v = U(t.placement),
								g = z(t.placement),
								_ = !g,
								C = V(v),
								S = "x" === C ? "y" : "x",
								P = t.modifiersData.popperOffsets,
								M = t.rects.reference,
								I = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								T = {
									x: 0,
									y: 0
								};
							if (P) {
								if (s) {
									var A = "y" === C ? O : k,
										L = "y" === C ? j : E,
										B = "y" === C ? "height" : "width",
										F = P[C],
										R = P[C] + x[A],
										D = P[C] - x[L],
										W = m ? -I[B] / 2 : 0,
										H = g === w ? M[B] : I[B],
										q = g === w ? -I[B] : -M[B],
										G = t.elements.arrow,
										Z = m && G ? b(G) : {
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
										Y = oe(0, M[B], Z[B]),
										Q = _ ? M[B] / 2 - W - Y - J - N : H - Y - J - N,
										$ = _ ? -M[B] / 2 + W + Y + K + N : q + Y + K + N,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === C ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][C] : 0,
										se = P[C] + Q - ne - te,
										ie = P[C] + $ - ne,
										ae = oe(m ? Math.min(R, se) : R, F, m ? Math.max(D, ie) : D);
									P[C] = ae, T[C] = ae - F
								}
								if (a) {
									var ce = "x" === C ? O : k,
										de = "x" === C ? j : E,
										le = P[S],
										ue = oe(le + x[ce], le, le - x[de]);
									P[S] = ue, T[S] = ue - le
								}
								t.modifiersData[r] = T
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								r = e.name,
								o = n.elements.arrow,
								s = n.modifiersData.popperOffsets,
								i = U(n.placement),
								a = V(i),
								c = [k, E].indexOf(i) >= 0 ? "height" : "width";
							if (o && s) {
								var d = n.modifiersData[r + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? O : k,
									p = "y" === a ? j : E,
									m = n.rects.reference[c] + n.rects.reference[a] - s[a] - n.rects.popper[c],
									f = s[a] - n.rects.reference[a],
									h = y(o),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = m / 2 - f / 2,
									g = d[u],
									_ = x - l[c] - d[p],
									C = x / 2 - l[c] / 2 + v,
									w = oe(g, C, _),
									S = a;
								n.modifiersData[r] = ((t = {})[S] = w, t.centerOffset = w - C, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								o = n.element,
								s = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != s && ("string" != typeof s || (s = t.elements.popper.querySelector(s))) && Y(t.elements.popper, s) && (t.elements.arrow = s, t.modifiersData[r + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, C))
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
								r = t.rects.reference,
								o = t.rects.popper,
								s = t.modifiersData.preventOverflow,
								i = re(t, {
									elementContext: "reference"
								}),
								a = re(t, {
									altBoundary: !0
								}),
								c = se(i, r),
								d = se(a, o, s),
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
							r = t[1];
						return e[n] = r, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var o = r.useRef(null),
						s = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						i = r.useState({
							styles: {
								popper: {
									position: s.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = i[0],
						c = i[1],
						d = r.useMemo((function() {
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
						l = r.useMemo((function() {
							var e = {
								onFirstUpdate: s.onFirstUpdate,
								placement: s.placement,
								strategy: s.strategy,
								modifiers: [].concat(s.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, d]),
						u = r.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var r = (n.createPopper || ae)(e, t, l);
							return u.current = r,
								function() {
									r.destroy(), u.current = null
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
				r = "function" == typeof Map,
				o = "function" == typeof Set,
				s = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
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
							if (r && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								return !0
							}
							if (s && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (r = (() => {})) => o => {
				const s = p(o.target, o.currentTarget),
					a = m(o.target, o.currentTarget);
				s && n && t && (u(o.target, o.currentTarget, l.anchors) ? n(t(e, s, a)) : n(n => {
					const r = t(e, s, a)(n);
					let o;
					if (r && r.actionInfo) {
						const {
							pageType: e,
							...t
						} = r.actionInfo;
						o = t
					}
					return {
						...r,
						actionInfo: Object(i.previousPageActionInfo)(n, o)
					}
				})), u(o.target, o.currentTarget, l.anchorsAndButtons) && r(o)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: s,
						clickTrackingId: i,
						...d
					} = t, l = Object(r.useCallback)(c(i, s, n), [i, s, n]);
					return o.a.createElement(e, a({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(s.c)(t)
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
			var r = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = n.n(r);
			const s = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = s
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
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && s.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), s.a.createElement(a.a, {
					href: c.url.replace(r.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && s.a.createElement(i.a, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement(i.a, d({
				className: Object(s.a)(e, c.a.CallToActionButton, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: n,
					subredditId: r
				} = e, c = Object(s.e)(e => e.subreddits.questions), d = Object(s.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let o = 0, s = -999; o <= l; o += 1) {
					const e = n[o],
						t = d[e].belongsTo.id;
					m(e) && o - s >= a && !u.has(t) && (s = o, u.add(t), o === l && (p = !0))
				}
				return p ? o.a.createElement(i.a, {
					subredditId: r,
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(r.a)({
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => o.a.createElement(a.a, l({}, t, {
				className: Object(s.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(s.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(a.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o);
			const i = Object(r.a)({
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
				fallback: s.a.createElement("div", null),
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
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
				const r = n && n.eventInfo,
					a = Object(l.a)(n),
					p = r && Object(i.c)(r.eventStart, r.eventEnd);
				return o.a.createElement("div", {
					className: Object(s.a)(m.a.container, e, {
						[m.a.isCompact]: !!t
					})
				}, o.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: n
				}), !a && p && o.a.createElement(d.a, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/eventTools/index.ts"),
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
			class j extends r.Component {
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
						eventEnd: r,
						eventIsLive: l,
						eventStart: u
					} = n, p = Object(s.e)(u, r);
					let m, f;
					if (this.state.mounted || p === s.a.Live) m = function(e, t, n) {
						const r = Object(s.e)(e, t),
							o = new Date(e * a.Ib);
						let d;
						return r === s.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (r === s.a.Future ? d = Object(s.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(s.b)(e) >= 5 ? c(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : r === s.a.Past && (d = Object(s.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(o)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o)}`)
					}(u, r, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = o.a.createElement(O, {
							className: e
						})
					}
					if (l) f = o.a.createElement(x, null, o.a.createElement(y, null), m);
					else if (p === s.a.Future) f = o.a.createElement(b, null, o.a.createElement(g, null), m);
					else {
						if (p !== s.a.Past) return null;
						f = o.a.createElement(h, null, o.a.createElement(g, null), m)
					}
					return o.a.createElement(v, {
						className: e
					}, f)
				}
			}
			t.a = j
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				a = n("./src/reddit/components/Thumbnail/index.tsx"),
				c = n("./src/reddit/constants/posts.ts"),
				d = n("./src/reddit/helpers/trackers/post.ts"),
				l = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/components/MediumPost/index.m.less"),
				p = n.n(u);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: n,
				redditStyle: r,
				shouldShowSubscribeButton: u,
				subredditOrProfile: m,
				templatePlaceholderImage: f
			}) => o.a.createElement("div", {
				className: Object(s.a)(p.a.thumbnailContainer, {
					[p.a.mShowingButtonOrOverflow]: u
				})
			}, o.a.createElement("div", {
				className: p.a.thumbnailContainerRow
			}, u && m && o.a.createElement(i.a, {
				className: p.a.subscribeButton,
				getEventFactory: e => Object(d.f)(t.id, e ? "unsubscribe" : "subscribe"),
				identifier: {
					name: m.name,
					type: Object(l.g)(m) ? c.a.PROFILE : c.a.SUBREDDIT
				},
				postId: t.id,
				small: !0
			})), o.a.createElement(a.a, {
				crosspost: e,
				post: t,
				redditStyle: r,
				forceShowNSFW: n,
				templatePlaceholderImage: f
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
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
				j = n("./src/reddit/components/ModModeReports/helpers.ts"),
				E = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				k = n("./src/reddit/components/PostContainer/index.tsx"),
				_ = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				w = n("./src/reddit/components/PostTitle/index.tsx"),
				S = n("./src/reddit/components/PostTopLine/index.tsx"),
				P = n("./src/reddit/components/PostTopMeta/index.tsx"),
				M = n("./src/reddit/components/SourceLink/index.tsx"),
				I = n("./src/reddit/constants/experiments.ts"),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				A = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				L = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				B = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				F = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = n("./src/reddit/models/Vote/index.ts"),
				D = n("./src/reddit/contexts/Post/index.tsx"),
				W = n("./src/reddit/selectors/experiments/categories.ts"),
				U = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				z = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				V = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				H = n("./src/reddit/hooks/useIsOverlay.ts"),
				q = n("./src/reddit/hooks/useUserContext.ts"),
				G = n("./src/reddit/selectors/inFeedChaining.ts"),
				Z = n("./src/reddit/selectors/moderatorPermissions.ts"),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = () => Object(i.c)({
					crosspost: J.d,
					flairStyleTemplate: N.S,
					isActive: J.j,
					isCurrentUserProfilePost: J.k,
					isPostChainDismissed: G.c,
					isPostChained: G.d,
					listingBelowVariant: z.b,
					moderatorPermissions: Z.j,
					showAwardsPlaque: U.a,
					showEditFlair: X.a,
					showMedia: N.r,
					isInCategoriesExperiment: W.a
				}),
				re = e => {
					const {
						className: t,
						crosspost: n,
						currentUser: i,
						eventFactory: N,
						flairStyleTemplate: D,
						hideNSFWPref: W,
						hostPostId: U,
						inSubredditOrProfile: z = !1,
						isActionBarAnimationEnabled: H,
						isCheckboxSelected: q,
						isCommentsPage: G,
						isCurrentUserProfilePost: Z,
						isFrontpage: X,
						isOverlay: J,
						isPostChainDismissed: Y,
						isPostChained: $,
						isTopicPage: te,
						imageGalleryCurrentItem: ne,
						listingBelowVariant: re,
						listingKey: oe,
						listingName: se,
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
					} = e, Oe = Object(s.d)(), je = Object(r.useCallback)(() => {
						se && oe && Oe(Object(d.d)({
							listingKey: oe,
							listingName: se,
							postId: le
						}))
					}, [Oe, oe, se, le]), Ee = e => e === R.a.upvoted ? Oe(Object(l.U)(le)) : Oe(Object(l.r)(le)), ke = () => Oe(Object(l.S)(le)), _e = pe ? void 0 : D, Ce = Object(B.a)(ie), we = ae && Ce, Se = Object(A.a)(ie), Pe = Object(L.a)(ie), Me = Object(j.c)(de), Ie = !!re && !Object(I.yd)(re), Ne = Object(T.a)(de), Te = z && !xe && !Ie, Ae = Te && !!de.source && !n, Le = !(X && i || te) && !Z && (!z || Ie), Be = (!z || Ie) && !de.isSponsored, Fe = Object(a.t)(de, ne), {
						source: Re
					} = Fe, De = o.a.createElement(k.a, {
						className: Object(c.a)(ee.a.container, t, Q.a.largeAndMediumPostStyles, Q.a.largeAndMediumActiveStyles, Object(F.a)(e), {
							[Q.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: J,
						style: Object(F.b)(e.flairStyleTemplate),
						post: de,
						onClick: ce,
						onPostContentClick: je,
						eventFactory: N
					}, o.a.createElement(C.a, {
						model: de,
						handleVote: Ee,
						showBulkActionCheckbox: be,
						isCheckboxSelected: q,
						toggleCheckbox: ye,
						flairStyleTemplate: _e,
						redditStyle: pe,
						subreddit: ge,
						isActionBarAnimationEnabled: H,
						postId: le
					}), o.a.createElement(E.a, {
						className: ee.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: _e,
						post: de,
						redditStyle: pe
					}, o.a.createElement(x.a, {
						post: de
					}), o.a.createElement("article", {
						className: ee.a.mainBody
					}, o.a.createElement("div", {
						className: ee.a.content,
						"data-click-id": "body"
					}, o.a.createElement(S.a, {
						className: ee.a.postTopLine,
						hideAwards: fe,
						hideNSFWPref: W,
						hostPostId: U,
						iconClassName: ee.a.postTopLineIcon,
						inSubredditOrProfile: z,
						isCommentsPage: G,
						isCurrentUserProfilePost: Z,
						isOverlay: !!J,
						isTopicPage: !!te,
						listingKey: oe,
						post: de,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Ae,
						showSubreddit: Be,
						showSubredditIcon: !0,
						subredditOrProfile: ge
					}), o.a.createElement(w.c, {
						className: ee.a.postTitle,
						post: de,
						redditStyle: pe,
						size: w.b.Large,
						titleColor: _e && _e.postTitleColor,
						isOverlay: J
					}), G && !me && (de.flair && de.flair.length > 0 || e.isInCategoriesExperiment) && o.a.createElement(v.a, {
						className: Object(c.a)(G && ee.a.leftPadding),
						disableFlair: !G,
						post: de,
						sendEvent: ve,
						showCategoryTag: e.isInCategoriesExperiment && G
					}), de.source && !de.isSponsored && !n && o.a.createElement(M.a, {
						className: ee.a.sourceLink,
						isCommentsPage: G,
						post: de
					})), !Te && Ne && o.a.createElement(K.a, {
						crosspost: n ? de : void 0,
						hasModPostPerms: Ce,
						isCommentsPage: G,
						isOverlay: J,
						modModeEnabled: ae,
						post: n || de,
						redditStyle: pe,
						shouldShowSubscribeButton: Le,
						subredditOrProfile: ge,
						templatePlaceholderImage: _e && _e.postPlaceholderImage
					})), de.isSponsored && Re && Re.url && o.a.createElement(p.a, {
						className: ee.a.adLinkWrapper
					}, o.a.createElement(m.a, {
						post: de,
						adLinkContent: Fe
					})), ae && Ce && Me && o.a.createElement(O.a, {
						className: ee.a.modModeReports,
						onIgnoreReports: ke,
						reportable: de
					}), o.a.createElement(y.d, null), fe && o.a.createElement(f.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: G,
						thing: de,
						tooltipType: J ? P.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: ee.a.flatlistContainer
					}, o.a.createElement(b.a, {
						className: ee.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: _e,
						redditStyle: pe,
						model: de,
						onVoteClick: Ee
					}), o.a.createElement(g.c, {
						currentUser: i,
						hasModFlairPerms: Se,
						hasModFullPerms: Pe,
						hasModPostPerms: Ce,
						hostPostId: U,
						isActionBarAnimationEnabled: H,
						isOverlay: !!J,
						listingKey: oe,
						modModeEnabled: ae,
						onIgnoreReports: ke,
						onOpenReportsDropdown: e => Oe(Object(u.h)({
							tooltipId: e
						})),
						post: de,
						showEditFlair: he,
						tooltipType: J ? P.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(_.h)({
							editPost: !we,
							save: !we,
							hide: !1,
							report: !1
						})
					}))), X && o.a.createElement(V.a, {
						post: de,
						postIds: null != ue ? ue : [],
						subredditId: null == ge ? void 0 : ge.id
					}));
					return o.a.createElement(o.a.Fragment, null, De, $ && !Y && o.a.createElement(h.a, {
						className: ee.a.chain,
						listingKey: oe,
						listingName: se,
						postId: de.id
					}))
				};
			t.default = Object(D.b)(o.a.memo((function(e) {
				const t = Object(r.useMemo)(() => ne(), []),
					n = Object(s.e)(n => t(n, e), s.c),
					i = Object(q.a)();
				return o.a.createElement(re, te({}, e, n, {
					modModeEnabled: i.modModeEnabled,
					hideNSFWPref: i.prefs.hideNSFW,
					isOverlay: Object(H.a)()
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
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), u = i.a.div("Placeholder", c.a), p = () => s.a.createElement(u, null, s.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), m = Object(r.a)({
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
				fallback: s.a.createElement(p, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
				} = e, [h, x] = Object(o.useState)(!0), v = Object(f.b)(n.id, b), g = Object(i.d)(), y = Object(m.a)(), O = Object(f.a)(n, b), j = (e, r) => y(Object(p.a)(t, n.id, e, r));
				Object(o.useEffect)(() => {
					O && j("modal", "show")
				}, [O]);
				if (!O || !h) return null;
				const E = r.fbt._("Help r/{subredditName} mods", [r.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return s.a.createElement(l.a, {
					id: v,
					title: E,
					onClose: () => {
						x(!1), j("close", "click"), g(Object(c.A)()), g(Object(c.L)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						g(Object(c.A)())
					}
				}, s.a.createElement("p", null, r.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [r.fbt._param("=Reddit", s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), r.fbt._param("=community", s.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, r.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), s.a.createElement(u.a, {
					onClick: () => (x(!1), j("report", "click"), void g(Object(d.c)(n.id)))
				}, r.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
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
				} = e, [x, v] = Object(s.useState)(r.Survey), g = Object(b.b)(n.id, h), y = Object(a.d)(), O = Object(f.a)(), j = Object(b.a)(n, h), E = (e, r) => O(Object(m.b)(t, n.id, e, r));
				Object(s.useEffect)(() => {
					j && E("modal", "show")
				}, [j]);
				const k = e => {
					v(r.Closed), E("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), y(Object(l.c)(n.id, void 0, e))
				};
				if (!j) return null;
				let _ = null;
				const C = {
					id: g,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(r.Closed), E("close", "click"), y(Object(d.A)())
					},
					onClickOutside: () => {
						y(Object(d.A)())
					}
				};
				switch (x) {
					case r.Survey:
						_ = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(r.OffTopic), E("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(r.DontLike), E("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(r.BreaksRules), E("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case r.OffTopic:
						_ = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case r.DontLike:
						_ = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case r.BreaksRules:
						_ = i.a.createElement(u.a, C, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", i.a.createElement(c.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => k("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => k("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case r.Closed:
				}
				return _
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(r || (r = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(s);

			function a(e) {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/uuid/v4.js"),
				i = n.n(s),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: r,
					title: s,
					children: c
				} = e;
				return Object(a.a)(t, r), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: d.a.header
				}, o.a.createElement("span", {
					className: d.a.title
				}, s), o.a.createElement("button", {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: r,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return o.a.createElement("div", l({
					className: Object(s.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(r, e),
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/isRemoved.ts"),
				h = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				x = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				v = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				g = n("./src/reddit/models/AutomatedReporting/index.ts"),
				y = n("./src/reddit/models/Post/index.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				C = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				w = n("./src/reddit/icons/fonts/Report/index.tsx"),
				S = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				P = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				M = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				I = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = n("./src/reddit/components/PostBadges/index.m.less"),
				T = n.n(N);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => s.a.createElement("span", A({
					className: T.a.removalReason
				}, e), e.children),
				B = () => r.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				F = () => r.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => r.fbt._("Moderator of {community name}", [r.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				D = () => r.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				W = () => r.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				U = (e, t, n) => {
					const r = `PostBadges--${e}--${t}`;
					return n ? `${r}--${n}` : r
				},
				z = Object(f.t)({
					isProfilePostListing: f.I,
					isSubreddit: f.K,
					pageLayer: e => e
				}),
				V = Object(a.c)({
					isPinned: (e, {
						post: t
					}) => Object(O.o)(e, {
						postId: t.id
					}),
					modModeEnabled: f.Q
				}),
				H = Object(i.b)(V, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = z(H(({
				className: e,
				displayText: t,
				isSubreddit: n,
				inSubredditOrProfile: i,
				isCompactPinnedPost: a,
				isPinned: l,
				isProfilePostListing: f,
				modModeEnabled: O,
				onHideTooltip: N,
				onOpenRemovalReasonModal: z,
				onShowTooltip: V,
				post: H,
				tooltipType: q
			}) => {
				const G = Object(v.a)(),
					Z = {
						caretOnTop: !1
					},
					X = H.isRemoved && !H.modRemovalReason && !H.modNote && H.belongsTo.type === m.a.SUBREDDIT,
					J = U("Approve", H.id, q),
					K = U("Archived", H.id, q),
					Y = U("Automod", H.id, q),
					Q = U("Lock", H.id, q),
					$ = U("Mod", H.id, q),
					ee = U("Remove", H.id, q),
					te = U("Report", H.id, q),
					ne = U("Spam", H.id, q),
					re = U("Sticky", H.id, q),
					oe = U("Pinned", H.id, q),
					se = H.bannedBy && Object(g.b)(H.bannedBy);
				return s.a.createElement("div", {
					className: e
				}, i && t && H.distinguishType === d.C.MODERATOR && s.a.createElement(o.Fragment, null, G ? s.a.createElement(j.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.modIcon)
				}) : s.a.createElement(I.a, {
					className: Object(c.a)(T.a.icon, T.a.modIcon),
					desc: R(t),
					id: $,
					onMouseEnter: V($),
					onMouseLeave: N
				}), s.a.createElement(u.c, A({
					tooltipId: $,
					text: R(t)
				}, Z))), H.isArchived && s.a.createElement(o.Fragment, null, s.a.createElement(k.a, {
					isFilled: G,
					className: Object(c.a)(T.a.icon, T.a.archivedIcon),
					desc: B(),
					id: K,
					onMouseEnter: V(K),
					onMouseLeave: N
				}), s.a.createElement(u.c, A({
					tooltipId: K,
					text: B()
				}, Z))), H.isLocked && s.a.createElement(o.Fragment, null, s.a.createElement(_.a, {
					isFilled: G,
					className: Object(c.a)(T.a.icon, T.a.lockIcon),
					desc: F(),
					id: Q,
					onMouseEnter: V(Q),
					onMouseLeave: N
				}), s.a.createElement(u.c, A({
					tooltipId: Q,
					text: F()
				}, Z))), n && Object(y.p)(H) && !a && s.a.createElement(o.Fragment, null, s.a.createElement(P.a, {
					isFilled: G,
					className: Object(c.a)(T.a.icon, T.a.stickyIcon),
					desc: D(),
					id: re,
					onMouseEnter: V(re),
					onMouseLeave: N
				}), s.a.createElement(u.c, A({
					tooltipId: re,
					text: D()
				}, Z))), f && l && s.a.createElement(o.Fragment, null, s.a.createElement(P.a, {
					isFilled: G,
					className: Object(c.a)(T.a.icon, T.a.stickyIcon),
					desc: W(),
					id: oe,
					onMouseEnter: V(oe),
					onMouseLeave: N
				}), s.a.createElement(u.c, A({
					tooltipId: oe,
					text: W()
				}, Z))), (H.isApproved || H.approvedBy) && s.a.createElement(o.Fragment, null, s.a.createElement(E.a, {
					isFilled: G,
					className: Object(c.a)(T.a.icon, T.a.approveIcon),
					desc: Object(h.a)(H),
					id: J,
					onMouseEnter: V(J),
					onMouseLeave: N
				}), s.a.createElement(u.c, A({
					tooltipId: J,
					text: Object(h.a)(H)
				}, Z))), Object(b.a)(H) && !se && s.a.createElement(o.Fragment, null, s.a.createElement(C.a, {
					isFilled: G,
					className: Object(c.a)(T.a.icon, T.a.removeIcon),
					desc: Object(h.c)(H),
					id: ee,
					onMouseEnter: V(ee),
					onMouseLeave: N
				}), X && s.a.createElement(p.a, {
					className: T.a.addRemovalReason,
					onClick: z,
					text: r.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (H.modRemovalReason || H.modNote) && s.a.createElement(L, {
					onMouseEnter: V(ee),
					onMouseLeave: N
				}, r.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), s.a.createElement(u.c, A({
					tooltipId: ee,
					text: Object(h.c)(H)
				}, Z))), H.bannedBy && H.isSpam && s.a.createElement(o.Fragment, null, s.a.createElement(S.a, {
					isFilled: G,
					className: Object(c.a)(T.a.icon, T.a.spamIcon),
					desc: Object(h.e)(H),
					id: ne,
					onMouseEnter: V(ne),
					onMouseLeave: N
				}), s.a.createElement(u.c, A({
					tooltipId: ne,
					text: Object(h.e)(H)
				}, Z))), ("AutoModerator" === H.approvedBy || "AutoModerator" === H.bannedBy) && s.a.createElement(o.Fragment, null, G ? s.a.createElement(j.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.automoderator, !!H.bannedBy && T.a.isRemoved)
				}) : s.a.createElement(M.a, {
					className: Object(c.a)(T.a.icon, T.a.automoderator, !!H.bannedBy && T.a.isRemoved),
					desc: h.b,
					id: Y,
					onMouseEnter: V(Y),
					onMouseLeave: N
				}), s.a.createElement(u.c, A({
					tooltipId: Y,
					text: h.b
				}, Z))), se && s.a.createElement("div", {
					className: T.a.removalReason
				}, r.fbt._("• Removed by the Automated {filterName}", [r.fbt._param("filterName", se)], {
					hk: "3C408F"
				})), Object(x.a)(H) && !O && s.a.createElement(o.Fragment, null, s.a.createElement(w.a, {
					isFilled: G,
					className: Object(c.a)(T.a.icon, T.a.reportIcon),
					desc: Object(h.d)(H.numReports),
					id: te,
					onMouseEnter: V(te),
					onMouseLeave: N
				}), s.a.createElement(u.c, A({
					tooltipId: te,
					text: Object(h.d)(H.numReports)
				}, Z))))
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(r.useRef)(null),
						n = Object(l.a)(),
						s = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, s, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
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
			const O = Object(m.a)(() => Object(s.c)({
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
				j = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						n = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && n
				};
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: r,
						imageGalleryCurrentItem: s,
						makePostContainerId: d,
						post: l,
						onClick: p,
						onPostContentClick: m,
						sendEvent: b,
						style: x,
						ref: v
					} = this.props, g = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => p && p(n, l, t, s))(n), m && j(n) && m(n, l)), l.id && s) {
								const {
									source: e
								} = Object(i.t)(l, s);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(y.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), O = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || O ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, g) : l.media && Object(f.E)(l.media) ? o.a.createElement(u, {
						postId: l.id
					}, g) : g
				}
			}
			t.a = O(Object(v.c)(Object(p.c)(E)))
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				m = n.n(p);
			class f extends s.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: r
							},
							sendEvent: o
						} = this.props, s = !!r;
						o(e ? Object(u.o)({
							postId: n,
							isFollowed: s
						}) : Object(u.g)({
							postId: n,
							isFollowed: s
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
					let a = i ? r.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : r.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = r.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), s.a.createElement("button", {
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
				onFollow: () => e(Object(d.v)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(f))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
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
					showBulkActionCheckbox: r = !1,
					isCheckboxSelected: m = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					subreddit: v,
					isOverlay: g,
					isActionBarAnimationEnabled: y,
					postId: O,
					isForceSelected: j
				} = e, E = `upvote-button-${t.id}${g?"-overlay":""}`, {
					moderationPrompt: k
				} = t;
				return o.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: x
				}, r && o.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: x,
					upvoteTooltipId: E,
					isActionBarAnimationEnabled: y,
					postId: O,
					isForceSelected: j,
					scoreClassName: f.a.score
				}), k && o.a.createElement(a.b, {
					rightOf: E
				}, "survey" === k ? o.a.createElement(i.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!g
				}) : o.a.createElement(s.a, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/models/Subreddit/index.ts"),
				y = n("./src/reddit/components/PostTopLine/index.m.less"),
				O = n.n(y);
			const j = n("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: n,
					forceOpenInNewTab: r,
					hideAwards: y,
					hideNSFWPref: E,
					hostPostId: k,
					iconClassName: _,
					inSubredditOrProfile: C,
					isCommentsPage: w,
					isCompactPinnedPost: S,
					isCurrentUserProfilePost: P,
					isOverlay: M,
					isTopicPage: I,
					listingKey: N,
					post: T,
					shouldShowSubscribeButton: A,
					showCornerOutboundLink: L,
					showSubreddit: B,
					showSubredditIcon: F,
					subredditOrProfile: R
				} = e, D = y || I;
				return o.a.createElement(j, {
					className: t
				}, B && R && o.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, o.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, F && o.a.createElement(l.b, {
					className: Object(s.a)(O.a.subredditIcon, _),
					shouldHideNsfwIcon: E,
					subredditOrProfile: R
				}))), o.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, B && o.a.createElement(a.h, {
					type: T.belongsTo.type,
					id: T.belongsTo.id
				}), o.a.createElement(d.d, {
					className: O.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: n,
					tooltipType: M ? d.c.Lightbox : void 0,
					post: T,
					showSub: B,
					subredditOrProfile: R
				}), o.a.createElement(c.a, {
					className: O.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: C,
					isCompactPinnedPost: S,
					post: T,
					tooltipType: M ? d.c.Lightbox : void 0
				}), !D && o.a.createElement(i.a, {
					isPostDetail: w,
					thing: T,
					tooltipType: M ? d.c.Lightbox : void 0
				})), R && B && A && !P && o.a.createElement(p.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(h.f)(T.id, e ? "unsubscribe" : "subscribe", "post", N, k),
					identifier: {
						name: R.name,
						type: Object(g.g)(R) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: T.id,
					size: f.c.XS
				}), L && o.a.createElement(b.b, {
					className: O.a.OutboundLink,
					isSponsored: T.isSponsored,
					postId: T.id,
					href: Object(v.D)(e.post),
					source: T.source
				}, o.a.createElement(x.a, {
					className: O.a.outboundLinkIcon
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
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
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
						post: r,
						isCommentsPage: d
					} = e,
					{
						source: l,
						isSponsored: p
					} = r;
				return l ? o.a.createElement(f, {
					className: Object(s.a)({
						[u.a["m-comment"]]: d
					}, n)
				}, o.a.createElement(a.a, {
					href: l.url,
					isSponsored: p,
					postId: r.id,
					source: l
				}, Object(i.a)(r), o.a.createElement(m, {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = b.a.wrapped(l.a, "Checkmark", f.a),
				v = ({
					isFilled: e,
					...t
				}) => o.a.createElement(x, t),
				g = b.a.wrapped(u.a, "Plus", f.a),
				y = ({
					isFilled: e,
					...t
				}) => o.a.createElement(g, t),
				O = b.a.div("ButtonSpacer", f.a);
			class j extends o.a.Component {
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
							onSubscribe: r,
							onUnsubscribe: s,
							postId: i,
							sendEvent: l,
							small: u = !1,
							size: m,
							userIsSubscriber: f,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: x,
							onSubscriptionsRequested: g,
							...y
						} = this.props, O = this.state.isHovered, j = Object(p.a)({
							type: n.type,
							key: O ? "unsubscribe" : "subscribed"
						});
						return o.a.createElement(c.q, h({
							className: t,
							priority: y.shouldReverseColor ? c.b.Primary : c.b.Secondary,
							Icon: u || !u && !O ? e ? e => o.a.createElement(d.a, h({
								name: "checkmark"
							}, e)) : v : void 0,
							text: !u && j,
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
							onSubscribe: r,
							onUnsubscribe: s,
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
						return o.a.createElement(c.q, h({
							className: t,
							priority: g.shouldReverseColor ? c.b.Secondary : c.b.Primary,
							Icon: e ? e => o.a.createElement(d.a, h({
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
					return t ? this.state.hasJustSubscribed || n ? o.a.createElement(a.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : o.a.createElement(O, null) : o.a.createElement(a.b.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(i.a)(Object(s.c)(j))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				s = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => s[o({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(o.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(s.d([t], !0)),
				onSubscriptionsRequested: () => e(s.e()),
				onUnsubscribe: () => e(s.d([t], !1))
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => t => {
					const {
						className: n,
						disabled: r,
						redditStyle: i,
						"data-redditstyle": a,
						...c
					} = t, d = ((e, t, n) => {
						const r = !(!t && !n);
						let o = "";
						return o = e ? r ? l.a.mDisabledRedditStyle : l.a.mDisabled : r ? l.a.mActiveRedditStyle : l.a.mActive
					})(r, i, a);
					return o.a.createElement(e, u({
						className: Object(s.a)(l.a.CheckboxIcon, d, n)
					}, c))
				},
				m = p(c.a),
				f = p(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? m : i.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(s.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(s.a)(l.a.CheckboxSizing, e.className),
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => o.a.createElement("div", {
				className: Object(s.a)(a.a.loadingIcon, t, {
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
				return s
			}));
			var r = n("./src/reddit/constants/thumbnails.ts"),
				o = n("./src/reddit/models/Media/index.ts");

			function s(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === r.a.SELF || e.thumbnail.url === r.a.NSFW || e.media && Object(o.E)(e.media))
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
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const s = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? r.fbt._("Approved by {username} at {time}", [r.fbt._param("username", e.approvedBy), r.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : r.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = r.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? r.fbt._("Removed by {username} at {time}", [r.fbt._param("username", e.bannedBy), r.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : r.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + r.fbt._("Reason by {username}:", [r.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + r.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				c = e => r.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [r.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? r.fbt._("Removed as spam by {username} at {time}", [r.fbt._param("username", e.bannedBy), r.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : r.fbt._("Removed as spam", null, {
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
			var r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				s = n("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				f = e => Object(r.l)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(s.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
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
			var r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/parseUrl.ts"),
				s = n("./src/reddit/selectors/media.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => ({
					gallery: i.gallery(e, t, n),
					post: i.post(e, t),
					...i.defaults(e)
				}),
				c = (e, t) => n => ({
					...a(n, e, t),
					action: r.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.media(n, e)
				}),
				d = (e, t) => n => {
					const c = Object(o.a)(t),
						d = Object(s.b)(n, e) + 1;
					return {
						...a(n, e, d),
						action: r.c.CLICK,
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
				p = (e, t, n) => o => ({
					...a(o, e, n),
					action: r.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n, o) => s => ({
					source: "report_prompt",
					noun: n,
					action: o,
					subreddit: r.subredditByName(s, e),
					post: r.post(s, t)
				}),
				s = (e, t, n, o) => s => ({
					source: "report_survey",
					noun: n,
					action: o,
					subreddit: r.subredditByName(s, e),
					post: r.post(s, t)
				})
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/InsideOverlay.tsx");

			function s() {
				return Object(r.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(s.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", s({
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(s.a)(a.a.chevron, e.className),
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
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(s.G)(e) || r.A.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.u
				})
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.ob
				});
				return !(!t || Object(r.yd)(t))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.0854d23d5cd8415a75a0.js.map