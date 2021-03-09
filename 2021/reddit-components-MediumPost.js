// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.d4a8dd8df3f127601f19.js
// Retrieved at 3/9/2021, 6:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-dom/index.js"),
				i = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, s) {
					return a(e[s], t[s])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, s = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							s = void 0 === n ? "0px" : n,
							r = t[1],
							o = void 0 === r ? s : r,
							a = t[2],
							c = void 0 === a ? s : a,
							d = t[3];
						return s + " " + o + " " + c + " " + (void 0 === d ? o : d)
					}(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], o = c.keys(); t = o.next().value;) {
					if (!(n !== t.root || s !== t.rootMargin || a(r, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var s, r = n.values(); s = r.next().value;)
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
				_ = function(e) {
					return g.reduce((function(t, n) {
						if (j.call(e, n)) {
							var s = "root" === n && "[object String]" === E.call(e[n]);
							t[n] = s ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				k = function(e) {
					var t, n;

					function s() {
						for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
						return v(x(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(x(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var s = n.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), v(x(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(_(t.props)), t.target = t.targetNode, e = x(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
					n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = s.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = y.some((function(n) {
							return a(t.props[n], e[n])
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
						return null != e ? r.a.cloneElement(r.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, s
				}(r.a.Component);
			v(k, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function o() {}
			o.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, o, i) {
					if (i !== s) {
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
					checkPropTypes: o,
					resetWarningCache: r
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
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return s(e, t)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
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

			function o(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = o(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function a(e) {
				return e instanceof o(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof o(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (a(e) ? e.ownerDocument : e.document).documentElement
			}

			function u(e) {
				return r(l(e)).left + i(e).scrollLeft
			}

			function p(e) {
				return o(e).getComputedStyle(e)
			}

			function m(e) {
				var t = p(e),
					n = t.overflow,
					s = t.overflowX,
					r = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + r + s)
			}

			function b(e, t, n) {
				void 0 === n && (n = !1);
				var s, a, p = l(t),
					b = r(e),
					f = c(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					x = {
						x: 0,
						y: 0
					};
				return (f || !f && !n) && (("body" !== d(t) || m(p)) && (h = (s = t) !== o(s) && c(s) ? {
					scrollLeft: (a = s).scrollLeft,
					scrollTop: a.scrollTop
				} : i(s)), c(t) ? ((x = r(t)).x += t.clientLeft, x.y += t.clientTop) : p && (x.x = u(p))), {
					x: b.left + h.scrollLeft - x.x,
					y: b.top + h.scrollTop - x.y,
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

			function x(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(h(t))
					}(e),
					s = "body" === d(n),
					r = o(n),
					i = s ? [r].concat(r.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return s ? a : a.concat(x(h(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function g(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function y(e) {
				for (var t = o(e), n = g(e); n && v(n) && "static" === p(n).position;) n = g(n);
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
				_ = "left",
				k = "auto",
				I = [O, j, E, _],
				S = "start",
				C = "end",
				P = "clippingParents",
				w = "viewport",
				T = "popper",
				N = "reference",
				M = I.reduce((function(e, t) {
					return e.concat([t + "-" + S, t + "-" + C])
				}), []),
				L = [].concat(I, [k]).reduce((function(e, t) {
					return e.concat([t, t + "-" + S, t + "-" + C])
				}), []),
				A = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function F(e) {
				var t = new Map,
					n = new Set,
					s = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(r) {
						n.add(r.name), [].concat(r.requires || [], r.requiresIfExists || []).forEach((function(s) {
							if (!n.has(s)) {
								var r = t.get(s);
								r && e(r)
							}
						})), s.push(r)
					}(e)
				})), s
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
					s = void 0 === n ? [] : n,
					r = t.defaultOptions,
					o = void 0 === r ? B : r;
				return function(e, t, n) {
					void 0 === n && (n = o);
					var r, i, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, B), o),
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
								p(), c.options = Object.assign(Object.assign(Object.assign({}, o), c.options), n), c.scrollParents = {
									reference: a(e) ? x(e) : e.contextElement ? x(e.contextElement) : [],
									popper: x(t)
								};
								var r = function(e) {
									var t = F(e);
									return A.reduce((function(e, n) {
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
								}([].concat(s, c.options.modifiers)));
								return c.orderedModifiers = r.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										s = void 0 === n ? {} : n,
										r = e.effect;
									if ("function" == typeof r) {
										var o = r({
											state: c,
											name: t,
											instance: u,
											options: s
										});
										d.push(o || function() {})
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
											reference: b(t, y(n), "fixed" === c.options.strategy),
											popper: f(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var s = 0; s < c.orderedModifiers.length; s++)
											if (!0 !== c.reset) {
												var r = c.orderedModifiers[s],
													o = r.fn,
													i = r.options,
													a = void 0 === i ? {} : i,
													d = r.name;
												"function" == typeof o && (c = o({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, s = -1
									}
								}
							},
							update: (r = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(c)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(r())
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
			var U = {
				passive: !0
			};

			function W(e) {
				return e.split("-")[0]
			}

			function H(e) {
				return e.split("-")[1]
			}

			function q(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function z(e) {
				var t, n = e.reference,
					s = e.element,
					r = e.placement,
					o = r ? W(r) : null,
					i = r ? H(r) : null,
					a = n.x + n.width / 2 - s.width / 2,
					c = n.y + n.height / 2 - s.height / 2;
				switch (o) {
					case O:
						t = {
							x: a,
							y: n.y - s.height
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
					case _:
						t = {
							x: n.x - s.width,
							y: c
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var d = o ? q(o) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case S:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case C:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - s[l] / 2)
					}
				}
				return t
			}
			var K = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function G(e) {
				var t, n = e.popper,
					s = e.popperRect,
					r = e.placement,
					i = e.offsets,
					a = e.position,
					c = e.gpuAcceleration,
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
					h = _,
					x = O,
					v = window;
				if (d) {
					var g = y(n);
					g === o(n) && (g = l(n)), r === O && (x = j, m -= g.clientHeight - s.height, m *= c ? 1 : -1), r === _ && (h = E, p -= g.clientWidth - s.width, p *= c ? 1 : -1)
				}
				var k, I = Object.assign({
					position: a
				}, d && K);
				return c ? Object.assign(Object.assign({}, I), {}, ((k = {})[x] = f ? "0" : "", k[h] = b ? "0" : "", k.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", k)) : Object.assign(Object.assign({}, I), {}, ((t = {})[x] = f ? m + "px" : "", t[h] = b ? p + "px" : "", t.transform = "", t))
			}
			var V = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return V[e]
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

			function Q(e, t) {
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

			function Y(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === w ? Y(function(e) {
					var t = o(e),
						n = l(e),
						s = t.visualViewport,
						r = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return s && (r = s.width, i = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = s.offsetLeft, c = s.offsetTop)), {
						width: r,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = r(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Y(function(e) {
					var t = l(e),
						n = i(e),
						s = e.ownerDocument.body,
						r = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						o = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(s || t).direction && (a += Math.max(t.clientWidth, s ? s.clientWidth : 0) - r), {
						width: r,
						height: o,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = x(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? y(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Q(e, n)
						})) : []
					}(e) : [].concat(t),
					r = [].concat(s, [n]),
					o = r[0],
					i = r.reduce((function(t, n) {
						var s = $(e, n);
						return t.top = Math.max(s.top, t.top), t.right = Math.min(s.right, t.right), t.bottom = Math.min(s.bottom, t.bottom), t.left = Math.max(s.left, t.left), t
					}), $(e, o));
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
					o = void 0 === s ? e.placement : s,
					i = n.boundary,
					c = void 0 === i ? P : i,
					d = n.rootBoundary,
					u = void 0 === d ? w : d,
					p = n.elementContext,
					m = void 0 === p ? T : p,
					b = n.altBoundary,
					f = void 0 !== b && b,
					h = n.padding,
					x = void 0 === h ? 0 : h,
					v = te("number" != typeof x ? x : ne(x, I)),
					g = m === T ? N : T,
					y = e.elements.reference,
					_ = e.rects.popper,
					k = e.elements[f ? g : m],
					S = ee(a(k) ? k : k.contextElement || l(e.elements.popper), c, u),
					C = r(y),
					M = z({
						reference: C,
						element: _,
						strategy: "absolute",
						placement: o
					}),
					L = Y(Object.assign(Object.assign({}, _), M)),
					A = m === T ? L : C,
					F = {
						top: S.top - A.top + v.top,
						bottom: A.bottom - S.bottom + v.bottom,
						left: S.left - A.left + v.left,
						right: A.right - S.right + v.right
					},
					B = e.modifiersData.offset;
				if (m === T && B) {
					var R = B[o];
					Object.keys(F).forEach((function(e) {
						var t = [E, j].indexOf(e) >= 0 ? 1 : -1,
							n = [O, j].indexOf(e) >= 0 ? "y" : "x";
						F[e] += R[n] * t
					}))
				}
				return F
			}

			function re(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function oe(e, t, n) {
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
				return [O, E, j, _].some((function(t) {
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
								s = e.options,
								r = s.scroll,
								i = void 0 === r || r,
								a = s.resize,
								c = void 0 === a || a,
								d = o(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, U)
								})), c && d.addEventListener("resize", n.update, U),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, U)
									})), c && d.removeEventListener("resize", n.update, U)
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
							t.modifiersData[n] = z({
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
								r = void 0 === s || s,
								o = n.adaptive,
								i = void 0 === o || o,
								a = {
									placement: W(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r
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
									s = t.attributes[e] || {},
									r = t.elements[e];
								c(r) && d(r) && (Object.assign(r.style, n), Object.keys(s).forEach((function(e) {
									var t = s[e];
									!1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
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
											r = t.attributes[e] || {},
											o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(s) && d(s) && (Object.assign(s.style, o), Object.keys(r).forEach((function(e) {
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
								r = n.offset,
								o = void 0 === r ? [0, 0] : r,
								i = L.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var s = W(e),
											r = [_, O].indexOf(s) >= 0 ? -1 : 1,
											o = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = o[0],
											a = o[1];
										return i = i || 0, a = (a || 0) * r, [_, E].indexOf(s) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, o), e
								}), {}),
								a = i[t.placement],
								c = a.x,
								d = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[s] = i
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
								for (var r = n.mainAxis, o = void 0 === r || r, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, b = void 0 === m || m, f = n.allowedAutoPlacements, h = t.options.placement, x = W(h), v = c || (x === h || !b ? [Z(h)] : function(e) {
										if (W(e) === k) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(h)), g = [h].concat(v).reduce((function(e, n) {
										return e.concat(W(n) === k ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												r = n.boundary,
												o = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? L : c,
												l = H(s),
												u = (l ? a ? M : M.filter((function(e) {
													return H(e) === l
												})) : I).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: r,
														rootBoundary: o,
														padding: i
													})[W(n)], t
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
									}), []), y = t.rects.reference, C = t.rects.popper, P = new Map, w = !0, T = g[0], N = 0; N < g.length; N++) {
									var A = g[N],
										F = W(A),
										B = H(A) === S,
										R = [O, j].indexOf(F) >= 0,
										D = R ? "width" : "height",
										U = se(t, {
											placement: A,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										q = R ? B ? E : _ : B ? j : O;
									y[D] > C[D] && (q = Z(q));
									var z = Z(q),
										K = [];
									if (o && K.push(U[F] <= 0), a && K.push(U[q] <= 0, U[z] <= 0), K.every((function(e) {
											return e
										}))) {
										T = A, w = !1;
										break
									}
									P.set(A, K)
								}
								if (w)
									for (var G = function(e) {
											var t = g.find((function(t) {
												var n = P.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, V = b ? 3 : 1; V > 0; V--) {
										if ("break" === G(V)) break
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
								r = n.mainAxis,
								o = void 0 === r || r,
								i = n.altAxis,
								a = void 0 !== i && i,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								b = n.tetherOffset,
								h = void 0 === b ? 0 : b,
								x = se(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								v = W(t.placement),
								g = H(t.placement),
								k = !g,
								I = q(v),
								C = "x" === I ? "y" : "x",
								P = t.modifiersData.popperOffsets,
								w = t.rects.reference,
								T = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								M = {
									x: 0,
									y: 0
								};
							if (P) {
								if (o) {
									var L = "y" === I ? O : _,
										A = "y" === I ? j : E,
										F = "y" === I ? "height" : "width",
										B = P[I],
										R = P[I] + x[L],
										D = P[I] - x[A],
										U = m ? -T[F] / 2 : 0,
										z = g === S ? w[F] : T[F],
										K = g === S ? -T[F] : -w[F],
										G = t.elements.arrow,
										V = m && G ? f(G) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										J = Z[L],
										X = Z[A],
										Q = re(0, w[F], V[F]),
										Y = k ? w[F] / 2 - U - Q - J - N : z - Q - J - N,
										$ = k ? -w[F] / 2 + U + Q + X + N : K + Q + X + N,
										ee = t.elements.arrow && y(t.elements.arrow),
										te = ee ? "y" === I ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][I] : 0,
										oe = P[I] + Y - ne - te,
										ie = P[I] + $ - ne,
										ae = re(m ? Math.min(R, oe) : R, B, m ? Math.max(D, ie) : D);
									P[I] = ae, M[I] = ae - B
								}
								if (a) {
									var ce = "x" === I ? O : _,
										de = "x" === I ? j : E,
										le = P[C],
										ue = re(le + x[ce], le, le - x[de]);
									P[C] = ue, M[C] = ue - le
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
								r = n.elements.arrow,
								o = n.modifiersData.popperOffsets,
								i = W(n.placement),
								a = q(i),
								c = [_, E].indexOf(i) >= 0 ? "height" : "width";
							if (r && o) {
								var d = n.modifiersData[s + "#persistent"].padding,
									l = f(r),
									u = "y" === a ? O : _,
									p = "y" === a ? j : E,
									m = n.rects.reference[c] + n.rects.reference[a] - o[a] - n.rects.popper[c],
									b = o[a] - n.rects.reference[a],
									h = y(r),
									x = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = m / 2 - b / 2,
									g = d[u],
									k = x - l[c] - d[p],
									I = x / 2 - l[c] / 2 + v,
									S = re(g, I, k),
									C = a;
								n.modifiersData[s] = ((t = {})[C] = S, t.centerOffset = S - I, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								r = n.element,
								o = void 0 === r ? "[data-popper-arrow]" : r,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && Q(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[s + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, I))
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
								r = t.rects.popper,
								o = t.modifiersData.preventOverflow,
								i = se(t, {
									elementContext: "reference"
								}),
								a = se(t, {
									altBoundary: !0
								}),
								c = oe(i, s),
								d = oe(a, r, o),
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
							s = t[1];
						return e[n] = s, e
					}), {})
				},
				ue = "undefined" != typeof window && window.document && window.document.createElement ? s.useLayoutEffect : s.useEffect,
				pe = [],
				me = function(e, t, n) {
					void 0 === n && (n = {});
					var r = s.useRef(null),
						o = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || pe
						},
						i = s.useState({
							styles: {
								popper: {
									position: o.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						a = i[0],
						c = i[1],
						d = s.useMemo((function() {
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
						l = s.useMemo((function() {
							var e = {
								onFirstUpdate: o.onFirstUpdate,
								placement: o.placement,
								strategy: o.strategy,
								modifiers: [].concat(o.modifiers, [d, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return de()(r.current, e) ? r.current || e : (r.current = e, e)
						}), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, d]),
						u = s.useRef();
					return ue((function() {
						u.current && u.current.setOptions(l)
					}), [l]), ue((function() {
						if (null != e && null != t) {
							var s = (n.createPopper || ae)(e, t, l);
							return u.current = s,
								function() {
									s.destroy(), u.current = null
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
				s = "function" == typeof Map,
				r = "function" == typeof Set,
				o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
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
							if (s && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (r && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!i.has(c.value[0])) return !1;
								return !0
							}
							if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
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
		"./src/graphql/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"543b8c2b28d0"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"dc992aad76fe"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"ed5cdf6f8a4d"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"4c828c7881cf"}')
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
				r = n.n(s),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (s = (() => {})) => r => {
				const o = p(r.target, r.currentTarget),
					a = m(r.target, r.currentTarget);
				o && n && t && (u(r.target, r.currentTarget, l.anchors) ? n(t(e, o, a)) : n(n => {
					const s = t(e, o, a)(n);
					let r;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						r = t
					}
					return {
						...s,
						actionInfo: Object(i.previousPageActionInfo)(n, r)
					}
				})), u(r.target, r.currentTarget, l.anchorsAndButtons) && s(r)
			};

			function d(e) {
				return Object(o.c)(t => {
					const {
						sendEvent: n,
						eventFactory: o,
						clickTrackingId: i,
						...d
					} = t, l = Object(s.useCallback)(c(i, o, n), [i, o, n]);
					return r.a.createElement(e, a({}, d, {
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
				return r
			}));
			const s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				r = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "IMAGE_OCR_ALT_TEXT__LOADED",
				r = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "e", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/discoveryUnit.ts"),
				d = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				l = n("./src/reddit/actions/subreddit/subredditPosts.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/constants/inFeedChaining.ts"),
				m = n("./src/reddit/constants/page.ts"),
				b = n("./src/reddit/helpers/localStorage/index.ts"),
				f = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/inFeedChaining.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const y = "FEED_CHAINING__CHAIN_LOADED",
				O = Object(i.a)(y),
				j = e => {
					const t = Date.now() - e,
						n = Object(b.y)();
					return Object.keys(n).filter(e => n[e].when >= t).map(e => n[e])
				},
				E = ({
					listingName: e,
					listingKey: t,
					postId: n
				}) => async (s, i, u) => {
					if (!n) return;
					const h = Object(v.U)(i(), {
						postId: n
					});
					if (!h) return;
					const y = h.name.toLowerCase(),
						E = e === y;
					if (!(e === m.f || e === m.b || E)) return;
					if (E) return void C(h, t, n)(s, i, u);
					0 === j(o.hb).length && Object(b.qb)(!1);
					let _ = i();
					if (Object(x.d)(_, {
							listingKey: t,
							postId: n
						}) || Object(x.a)(_).length >= p.a || Object(b.K)() || j(o.x).length >= p.a) return;
					const k = Object(v.w)(_, {
						listingKey: t,
						postId: n
					});
					if (k && k.isSponsored) return;
					await s(Object(c.g)()), _ = i();
					const I = Object(x.b)(_, {
						listingName: e
					});
					if (!I) return;
					if (!h || Object(x.e)(_, {
							subredditId: h.id
						}) || (e => {
							return j(o.x).some(t => t.subredditId === e)
						})(h.id)) return;
					const S = {
						subredditIds: [h.id],
						count: p.b
					};
					await s(Object(d.b)(S));
					const P = Object(d.a)(S);
					_ = i();
					const w = Object(g.v)(_, {
						key: P
					});
					0 !== w.length ? (await s((e => async (t, n) => {
						const s = o.Ub.DAY.toUpperCase(),
							r = e.filter(e => {
								const t = Object(a.a)(e, o.P.TOP, {
										t: s
									}),
									r = n();
								return 0 === Object(v.B)(r, {
									listingKey: t
								}).length
							});
						await t(Object(l.b)({
							first: 1,
							range: s,
							sort: o.I.TOP,
							subredditNames: r
						}))
					})(w.map(e => e.name))), _ = i(), Object(x.f)(_, {
						postId: n
					}).length < p.c ? Object(r.a)(Object(f.c)(I, "other", h)(_)) : (Object(b.a)(n, h.id), Object(r.a)(Object(f.d)(I, h)(_)), s(O({
						listingKey: t,
						postId: n
					})))) : Object(r.a)(Object(f.c)(I, "no_chaining", h)(_))
				}, _ = "FEED_CHAINING__CHAIN_TOGGLED", k = (Object(i.a)(_), "FEED_CHAINING__CHAINING_TOGGLED"), I = Object(i.a)(k), S = () => async e => {
					Object(b.qb)(!0), e(I({
						isDismissed: !0
					})), e(Object(u.e)(Object(u.d)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), h.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(b.qb)(!1), e(I({
							isDismissed: !1
						}))
					})))
				}, C = (e, t, n) => async (e, t, n) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				r = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				i = n("./src/reddit/endpoints/category/subreddits.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
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
				m = Object(r.a)(o.q),
				b = Object(r.a)(o.p),
				f = Object(r.a)(o.o),
				h = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						o = p(e),
						h = Object(u.u)(r, {
							key: o
						}),
						x = Object(u.t)(r, {
							key: o
						});
					if (h || x.length > 0) return;
					t(m({
						key: o
					}));
					const v = await ((e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
						data: {
							sr_fullnames: t.subredditIds.join(","),
							limit: t.count,
							variant: t.variant
						},
						endpoint: `${e.apiUrl}/api/similar_subreddits.json`,
						method: a.cb.GET
					}))(s(), e);
					if (v.ok) {
						const e = Object(i.b)(v.body);
						t(b({
							key: o,
							...e
						}))
					} else {
						const e = v.error;
						t(f({
							key: o,
							error: e
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return W
			})), n.d(t, "a", (function() {
				return H
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeLinkedPostsListingKey/index.ts"),
				i = n("./src/lib/makeListingKey/index.ts"),
				a = n("./src/reddit/actions/googleQASchema/constants.ts");
			const c = Object(r.a)(a.b),
				d = Object(r.a)(a.a);
			var l = n("./src/reddit/actions/linkedPosts/constants.ts");
			const u = Object(r.a)(l.b),
				p = Object(r.a)(l.a);
			var m = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				b = n("./src/lib/makeGqlRequest/index.ts"),
				f = (n("./src/graphql/operations/OtherDiscussions.json"), n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				h = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				x = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = n("./src/reddit/models/Post/index.ts");
			var y = ({
				getState: e,
				onFailure: t,
				onSuccess: n,
				postId: s,
				response: r
			}) => {
				if (!r.ok) return void t(r.error);
				const o = r.body,
					{
						post: a
					} = o && o.data,
					c = e(),
					d = Object(i.a)(s, null, {
						isOtherDiscussions: !0
					});
				if (a) {
					if (a.otherDiscussions && a.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = a, {
							postFlair: r,
							postIds: o,
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
									return Object(g.k)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(x.a)(e.profile)) : Object(g.l)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(v.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(f.a)(e.subreddit))), n.id
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
							meta: c.meta,
							postFlair: r,
							postId: s,
							postIds: o,
							posts: i,
							profiles: l,
							subreddits: u
						})
					}
				} else n({
					count: 0,
					key: d,
					meta: c.meta,
					postFlair: {},
					postId: s,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const O = Object(r.a)(m.a),
				j = Object(r.a)(m.b),
				E = Object(r.a)(m.c);
			var _ = n("./src/reddit/actions/subreddit/constants.ts"),
				k = n("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				I = (n("./src/graphql/operations/SubredditPosts.json"), n("./src/graphql/operations/SubredditsPosts.json"));
			var S = ({
				getState: e,
				onSuccess: t,
				onFailure: n,
				postId: s,
				post: r
			}) => {
				try {
					t({
						altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
						postId: s
					})
				} catch (o) {
					n(o)
				}
			};
			var C = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					postId: s,
					post: r
				}) => {
					try {
						const n = [],
							i = {},
							a = {};
						if (!r || !r.linked) return;
						const c = e(),
							d = c.posts && c.posts.models,
							l = Object(o.a)(s),
							u = r.linked.posts && r.linked.posts.edges || [];
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
								a[t.id] = Object(v.a)(t)
							}
						}
						t({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: l,
							meta: c.meta,
							posts: i,
							postIds: n,
							subreddits: a
						})
					} catch (i) {
						n(i)
					}
				},
				P = n("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var w = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var T = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					options: r,
					subreddit: o
				}) => {
					try {
						if (!o) return;
						const n = o.elements || o.posts,
							a = e(),
							c = ((e, t) => {
								const {
									edges: n
								} = e, s = n.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: s
								}
							})(n, a.posts && a.posts.models);
						if (!c.edges.length) return;
						const d = Object(P.a)(c),
							{
								range: l,
								sort: u,
								subredditName: p
							} = r,
							m = Object(i.a)(p, s.P[u], {
								t: l
							}),
							b = w(d),
							f = d.map(e => e.id);
						t({
							dist: n.dist,
							key: m,
							meta: a.meta,
							postIds: f,
							posts: b
						})
					} catch (a) {
						n(a)
					}
				},
				N = n("./src/reddit/models/Media/index.ts"),
				M = n("./src/reddit/selectors/posts.ts"),
				L = n("./src/reddit/actions/imageOCRAltText/constants.ts");
			const A = Object(r.a)(L.b),
				F = Object(r.a)(L.a),
				B = Object(r.a)(_.k),
				R = Object(r.a)(_.j),
				D = Object(r.a)(_.s),
				U = Object(r.a)(_.r),
				W = e => async (t, n, {
					gqlContext: s
				}) => {
					const r = (await ((e, t) => Object(b.a)(e, {
							...I,
							variables: t
						}))(s(), e)).body,
						{
							subredditNames: o,
							...i
						} = e,
						a = [];
					try {
						for (const e of r.data.subredditsInfoByNames) {
							const t = e.elements.edges[0];
							t && Object(g.l)(t.node) && T({
								getState: n,
								onFailure: e => {
									throw e
								},
								onSuccess: e => a.push(e),
								options: {
									...i,
									subredditName: t.node.subreddit.name
								},
								subreddit: e
							})
						}
						t(D(a))
					} catch (c) {
						t(U(c))
					}
				}, H = e => async (t, n, {
					gqlContext: r
				}) => {
					var a;
					const {
						includePostImageOCRAltText: l,
						includeListingBelowExperiment: m,
						includeOtherDiscussions: f,
						includePostFeed: h,
						includePostQASchemaEligibilityFlag: x,
						postId: v,
						range: g,
						sort: _,
						subredditName: I
					} = e, P = Object(i.a)(v, null, {
						isOtherDiscussions: !0
					}), w = n(), L = Object(M.B)(w, {
						listingKey: P
					}), D = f && (!L || 0 === L.length), U = Object(i.a)(I, s.P[_], {
						t: g
					}), W = Object(M.B)(w, {
						listingKey: U
					}), H = h && (!W || 0 === W.length), q = Object(o.a)(v), z = Object(M.B)(w, {
						listingKey: q
					}), K = m && (!z || 0 === z.length), G = Object(M.I)(w, {
						postId: v
					}), V = l && !!G && !!G.media && (Object(N.H)(G.media) || Object(N.F)(G.media)) && !G.media.altText;
					if (!(D || H || K || V || x)) return;
					D && t(E({
						key: P
					}));
					const Z = await ((e, t) => Object(b.a)(e, {
							...k,
							variables: t
						}))(r(), e),
						J = Z.body;
					x && (Z.ok ? J.data && J.data.post && t(c({
						postId: v,
						isEligibleForQASchema: null !== (a = J.data.post.isEligibleForQASchema) && void 0 !== a && a
					})) : t(d())), D && y({
						getState: n,
						onFailure: e => t(O(e)),
						onSuccess: e => t(j(e)),
						postId: v,
						response: Z
					}), H && (Z.ok ? J.data && T({
						getState: n,
						onFailure: e => t(R(e)),
						onSuccess: e => t(B(e)),
						options: e,
						subreddit: J.data.subreddit
					}) : t(R(Z.error))), K && Z.ok && C({
						getState: n,
						onFailure: e => t(p(e)),
						onSuccess: e => t(u(e)),
						postId: v,
						post: J.data.post
					}), V && Z.ok && S({
						getState: n,
						onFailure: e => t(F(e)),
						onSuccess: e => t(A(e)),
						postId: v,
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
				r = n.n(s);
			const o = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = o
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/CallToActionButton/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: r
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !r && o.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), o.a.createElement(a.a, {
					href: c.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && o.a.createElement(i.a, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
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
			}) => r.a.createElement(i.a, d({
				className: Object(o.a)(e, c.a.CallToActionButton, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, c = Object(o.e)(e => e.subreddits.questions), d = Object(o.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = n[r],
						t = d[e].belongsTo.id;
					m(e) && r - o >= a && !u.has(t) && (o = r, u.add(t), r === l && (p = !0))
				}
				return p ? r.a.createElement(i.a, {
					subredditId: s,
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
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
				fallback: o.a.createElement("div", null),
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(p);
			const b = a.a.div("EventMetaWrapper", m.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(u.a)(n)) return null;
				const s = n && n.eventInfo,
					a = Object(l.a)(n),
					p = s && Object(i.c)(s.eventStart, s.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(m.a.container, e, {
						[m.a.isCompact]: !!t
					})
				}, r.a.createElement(b, {
					className: m.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !a && p && r.a.createElement(d.a, {
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
				r = n.n(s),
				o = n("./src/lib/eventTools/index.ts"),
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
				b = n("./src/lib/lessComponent.tsx");
			const f = b.a.span("PostEventFutureText", m.a),
				h = b.a.span("PostEventPastText", m.a),
				x = b.a.span("PostEventNowText", m.a),
				v = b.a.span("Container", m.a),
				g = b.a.wrapped(l.a, "CalendarIcon", m.a),
				y = b.a.wrapped(u.a, "LiveIcon", m.a),
				O = b.a.div("LoadingState", m.a);
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
					} = n, p = Object(o.e)(u, s);
					let m, b;
					if (this.state.mounted || p === o.a.Live) m = function(e, t, n) {
						const s = Object(o.e)(e, t),
							r = new Date(e * a.Hb);
						let d;
						return s === o.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (s === o.a.Future ? d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(o.b)(e) >= 5 ? c(r) : r.toLocaleDateString(void 0, {
							weekday: "long"
						}) : s === o.a.Past && (d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(r)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(r)}`)
					}(u, s, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = r.a.createElement(O, {
							className: e
						})
					}
					if (l) b = r.a.createElement(x, null, r.a.createElement(y, null), m);
					else if (p === o.a.Future) b = r.a.createElement(f, null, r.a.createElement(g, null), m);
					else {
						if (p !== o.a.Past) return null;
						b = r.a.createElement(h, null, r.a.createElement(g, null), m)
					}
					return r.a.createElement(v, {
						className: e
					}, b)
				}
			}
			t.a = j
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
				redditStyle: s,
				shouldShowSubscribeButton: u,
				subredditOrProfile: m,
				templatePlaceholderImage: b
			}) => r.a.createElement("div", {
				className: Object(o.a)(p.a.thumbnailContainer, {
					[p.a.mShowingButtonOrOverflow]: u
				})
			}, r.a.createElement("div", {
				className: p.a.thumbnailContainerRow
			}, u && m && r.a.createElement(i.a, {
				className: p.a.subscribeButton,
				getEventFactory: e => Object(d.f)(t.id, e ? "unsubscribe" : "subscribe"),
				identifier: {
					name: m.name,
					type: Object(l.g)(m) ? c.a.PROFILE : c.a.SUBREDDIT
				},
				postId: t.id,
				small: !0
			})), r.a.createElement(a.a, {
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
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/ads/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/inFeedChaining.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				b = n("./src/reddit/components/AwardBadges/index.tsx"),
				f = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = n("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				x = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				v = n("./src/reddit/components/FlairWrapper/index.tsx"),
				g = n("./src/reddit/components/Flatlist/index.tsx"),
				y = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = n("./src/reddit/components/ModModeReports/index.tsx"),
				j = n("./src/reddit/components/ModModeReports/helpers.ts"),
				E = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				_ = n("./src/reddit/components/PostContainer/index.tsx"),
				k = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				I = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				S = n("./src/reddit/components/PostTitle/index.tsx"),
				C = n("./src/reddit/components/PostTopLine/index.tsx"),
				P = n("./src/reddit/components/PostTopMeta/index.tsx"),
				w = n("./src/reddit/components/SourceLink/index.tsx"),
				T = n("./src/reddit/constants/experiments.ts"),
				N = n("./src/reddit/contexts/InsideOverlay.tsx"),
				M = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				A = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				F = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				B = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = n("./src/reddit/models/Vote/index.ts"),
				U = n("./src/reddit/contexts/Post/index.tsx"),
				W = n("./src/reddit/selectors/experiments/categories.ts"),
				H = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				q = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				z = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				K = n("./src/reddit/selectors/inFeedChaining.ts"),
				G = n("./src/reddit/selectors/moderatorPermissions.ts"),
				V = n("./src/reddit/selectors/postFlair.ts"),
				Z = n("./src/reddit/selectors/posts.ts"),
				J = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Q = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = n.n(Q),
				$ = n("./src/reddit/components/MediumPost/index.m.less"),
				ee = n.n($);
			const te = Object(o.b)(() => Object(i.c)({
				crosspost: Z.d,
				flairStyleTemplate: M.S,
				hideNSFWPref: J.B,
				isActive: Z.j,
				isCurrentUserProfilePost: Z.k,
				isLoggedIn: J.J,
				isPostChainDismissed: K.c,
				isPostChained: K.d,
				listingBelowVariant: q.b,
				imageGalleryCurrentItem: Z.i,
				moderatorPermissions: G.h,
				modModeEnabled: M.Q,
				showAwardsPlaque: H.a,
				showEditFlair: V.a,
				showMedia: M.r,
				isInCategoriesExperiment: W.a
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
				handleVote: t => t === D.a.upvoted ? e(Object(l.U)(s)) : e(Object(l.r)(s)),
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
					currentUser: o,
					eventFactory: i,
					flairStyleTemplate: d,
					hideNSFWPref: l,
					hostPostId: u,
					inSubredditOrProfile: N = !1,
					isActionBarAnimationEnabled: M,
					isCheckboxSelected: D,
					isCommentsPage: U,
					isCurrentUserProfilePost: W,
					isFrontpage: H,
					isLoggedIn: q,
					isOverlay: K,
					isPostChainDismissed: G,
					isPostChained: V,
					isTopicPage: Z,
					imageGalleryCurrentItem: J,
					listingBelowVariant: Q,
					listingKey: $,
					listingName: te,
					moderatorPermissions: ne,
					modModeEnabled: se,
					onClickPost: re,
					onIgnoreReports: oe,
					onOpenReportsDropdown: ie,
					post: ae,
					postId: ce,
					postIds: de,
					redditStyle: le,
					shouldHideFlair: ue,
					showAwardsPlaque: pe,
					showBulkActionCheckbox: me,
					showEditFlair: be,
					showMedia: fe,
					sendEvent: he,
					subredditOrProfile: xe,
					toggleCheckbox: ve
				} = e, ge = le ? void 0 : d, ye = Object(B.a)(ne), Oe = se && ye, je = Object(A.a)(ne), Ee = Object(F.a)(ne), _e = Object(j.c)(ae), ke = !!Q && !Object(T.ud)(Q), Ie = Object(L.a)(ae), Se = N && !fe && !ke, Ce = Se && !!ae.source && !s, Pe = !(H && q || Z) && !W && (!N || ke), we = (!N || ke) && !ae.isSponsored, Te = Object(a.t)(ae, J), {
					source: Ne
				} = Te, Me = r.a.createElement(_.a, {
					className: Object(c.a)(ee.a.container, n, Y.a.largeAndMediumPostStyles, Y.a.largeAndMediumActiveStyles, Object(R.a)(e), {
						[Y.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: K,
					style: Object(R.b)(e.flairStyleTemplate),
					post: ae,
					onClick: re,
					onPostContentClick: t,
					eventFactory: i
				}, r.a.createElement(I.a, {
					model: ae,
					handleVote: e.handleVote,
					showBulkActionCheckbox: me,
					isCheckboxSelected: D,
					toggleCheckbox: ve,
					flairStyleTemplate: ge,
					redditStyle: le,
					subreddit: xe,
					isActionBarAnimationEnabled: M,
					postId: ce
				}), r.a.createElement(E.a, {
					className: ee.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: ge,
					post: ae,
					redditStyle: le
				}, r.a.createElement(x.a, {
					post: ae
				}), r.a.createElement("article", {
					className: ee.a.mainBody
				}, r.a.createElement("div", {
					className: ee.a.content,
					"data-click-id": "body"
				}, r.a.createElement(C.a, {
					className: ee.a.postTopLine,
					hideAwards: pe,
					hideNSFWPref: l,
					hostPostId: u,
					iconClassName: ee.a.postTopLineIcon,
					inSubredditOrProfile: N,
					isCommentsPage: U,
					isCurrentUserProfilePost: W,
					isOverlay: !!K,
					isTopicPage: !!Z,
					listingKey: $,
					post: ae,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: Ce,
					showSubreddit: we,
					showSubredditIcon: !0,
					subredditOrProfile: xe
				}), r.a.createElement(S.c, {
					className: ee.a.postTitle,
					post: ae,
					redditStyle: le,
					size: S.b.Large,
					titleColor: ge && ge.postTitleColor,
					isOverlay: K
				}), U && !ue && (ae.flair && ae.flair.length > 0 || e.isInCategoriesExperiment) && r.a.createElement(v.a, {
					className: Object(c.a)(U && ee.a.leftPadding),
					disableFlair: !U,
					post: ae,
					sendEvent: he,
					showCategoryTag: e.isInCategoriesExperiment && U
				}), ae.source && !ae.isSponsored && !s && r.a.createElement(w.a, {
					className: ee.a.sourceLink,
					isCommentsPage: U,
					post: ae
				})), !Se && Ie && r.a.createElement(X.a, {
					crosspost: s ? ae : void 0,
					hasModPostPerms: ye,
					isCommentsPage: U,
					isOverlay: K,
					modModeEnabled: se,
					post: s || ae,
					redditStyle: le,
					shouldShowSubscribeButton: Pe,
					subredditOrProfile: xe,
					templatePlaceholderImage: ge && ge.postPlaceholderImage
				})), ae.isSponsored && Ne && Ne.url && r.a.createElement(p.a, {
					className: ee.a.adLinkWrapper
				}, r.a.createElement(m.a, {
					post: ae,
					adLinkContent: Te
				})), se && ye && _e && r.a.createElement(O.a, {
					className: ee.a.modModeReports,
					onIgnoreReports: oe,
					reportable: ae
				}), r.a.createElement(y.d, null), pe && r.a.createElement(b.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: U,
					thing: ae,
					tooltipType: K ? P.c.Lightbox : void 0
				}), r.a.createElement("div", {
					className: ee.a.flatlistContainer
				}, r.a.createElement(f.a, {
					className: ee.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: ge,
					redditStyle: le,
					model: ae,
					onVoteClick: e.handleVote
				}), r.a.createElement(g.c, {
					currentUser: o,
					hasModFlairPerms: je,
					hasModFullPerms: Ee,
					hasModPostPerms: ye,
					hostPostId: u,
					isActionBarAnimationEnabled: M,
					isOverlay: !!K,
					listingKey: $,
					modModeEnabled: se,
					onIgnoreReports: oe,
					onOpenReportsDropdown: ie,
					post: ae,
					showEditFlair: be,
					tooltipType: K ? P.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(k.h)({
						editPost: !Oe,
						save: !Oe,
						hide: !1,
						report: !1
					})
				}))), H && r.a.createElement(z.a, {
					post: ae,
					postIds: null != de ? de : [],
					subredditId: null == xe ? void 0 : xe.id
				}));
				return r.a.createElement(r.a.Fragment, null, Me, V && !G && r.a.createElement(h.a, {
					className: ee.a.chain,
					listingKey: $,
					listingName: te,
					postId: ae.id
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), u = i.a.div("Placeholder", c.a), p = () => o.a.createElement(u, null, o.a.createElement(l, null, d._("Loading reports…", null, {
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
				fallback: o.a.createElement(p, null),
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
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
				} = e, [h, x] = Object(r.useState)(!0), v = Object(b.b)(n.id, f), g = Object(i.d)(), y = Object(m.a)(), O = Object(b.a)(n, f), j = (e, s) => y(Object(p.a)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					O && j("modal", "show")
				}, [O]);
				if (!O || !h) return null;
				const E = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return o.a.createElement(l.a, {
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
				}, o.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", o.a.createElement(a.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), o.a.createElement(u.a, {
					onClick: () => (x(!1), j("report", "click"), void g(Object(d.c)(n.id)))
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
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				} = e, [x, v] = Object(o.useState)(s.Survey), g = Object(f.b)(n.id, h), y = Object(a.d)(), O = Object(b.a)(), j = Object(f.a)(n, h), E = (e, s) => O(Object(m.b)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					j && E("modal", "show")
				}, [j]);
				const _ = e => {
					v(s.Closed), E("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), y(Object(l.c)(n.id, void 0, e))
				};
				if (!j) return null;
				let k = null;
				const I = {
					id: g,
					title: r.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(s.Closed), E("close", "click"), y(Object(d.A)())
					},
					onClickOutside: () => {
						y(Object(d.A)())
					}
				};
				switch (x) {
					case s.Survey:
						k = i.a.createElement(u.a, I, i.a.createElement("p", null, r.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [r.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(s.OffTopic), E("off_topic", "click")
							}
						}, r.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(s.DontLike), E("dont_like", "click")
							}
						}, r.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(s.BreaksRules), E("breaks_rules", "click")
							}
						}, r.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						k = i.a.createElement(u.a, I, i.a.createElement("p", null, r.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						k = i.a.createElement(u.a, I, i.a.createElement("p", null, r.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						k = i.a.createElement(u.a, I, i.a.createElement("p", null, r.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [r.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, r.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), r.fbt._param("=community", i.a.createElement(c.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, r.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => _("site")
						}, r.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => _("community")
						}, r.fbt._("It breaks community rules", null, {
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
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(o);

			function a(e) {
				return r.a.createElement("button", {
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
				r = n.n(s),
				o = n("./node_modules/uuid/v4.js"),
				i = n.n(o),
				a = n("./src/reddit/hooks/useOnClickOutside.ts"),
				c = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: s,
					title: o,
					children: c
				} = e;
				return Object(a.a)(t, s), r.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, r.a.createElement("h3", {
					className: d.a.header
				}, r.a.createElement("span", {
					className: d.a.title
				}, o), r.a.createElement("button", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

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
					post: c,
					redditStyle: u,
					theme: p,
					...m
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(s, e),
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/isRemoved.ts"),
				h = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				x = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				v = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				g = n("./src/reddit/models/AutomatedReporting/index.ts"),
				y = n("./src/reddit/models/Post/index.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				k = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				I = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				S = n("./src/reddit/icons/fonts/Report/index.tsx"),
				C = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				P = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				w = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				T = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = n("./src/reddit/components/PostBadges/index.m.less"),
				M = n.n(N);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = e => o.a.createElement("span", L({
					className: M.a.removalReason
				}, e), e.children),
				F = () => s.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				B = () => s.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => s.fbt._("Moderator of {community name}", [s.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				D = () => s.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				U = () => s.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				W = (e, t, n) => {
					const s = `PostBadges--${e}--${t}`;
					return n ? `${s}--${n}` : s
				},
				H = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				q = Object(a.c)({
					isPinned: (e, {
						post: t
					}) => Object(O.r)(e, {
						postId: t.id
					}),
					modModeEnabled: b.Q
				}),
				z = Object(i.b)(q, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = H(z(({
				className: e,
				displayText: t,
				isSubreddit: n,
				inSubredditOrProfile: i,
				isCompactPinnedPost: a,
				isPinned: l,
				isProfilePostListing: b,
				modModeEnabled: O,
				onHideTooltip: N,
				onOpenRemovalReasonModal: H,
				onShowTooltip: q,
				post: z,
				tooltipType: K
			}) => {
				const G = Object(v.a)(),
					V = {
						caretOnTop: !1
					},
					Z = z.isRemoved && !z.modRemovalReason && !z.modNote && z.belongsTo.type === m.a.SUBREDDIT,
					J = W("Approve", z.id, K),
					X = W("Archived", z.id, K),
					Q = W("Automod", z.id, K),
					Y = W("Lock", z.id, K),
					$ = W("Mod", z.id, K),
					ee = W("Remove", z.id, K),
					te = W("Report", z.id, K),
					ne = W("Spam", z.id, K),
					se = W("Sticky", z.id, K),
					re = W("Pinned", z.id, K),
					oe = z.bannedBy && Object(g.b)(z.bannedBy);
				return o.a.createElement("div", {
					className: e
				}, i && t && z.distinguishType === d.C.MODERATOR && o.a.createElement(r.Fragment, null, G ? o.a.createElement(j.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(M.a.icon, M.a.modIcon)
				}) : o.a.createElement(T.a, {
					className: Object(c.a)(M.a.icon, M.a.modIcon),
					desc: R(t),
					id: $,
					onMouseEnter: q($),
					onMouseLeave: N
				}), o.a.createElement(u.c, L({
					tooltipId: $,
					text: R(t)
				}, V))), z.isArchived && o.a.createElement(r.Fragment, null, o.a.createElement(_.a, {
					isFilled: G,
					className: Object(c.a)(M.a.icon, M.a.archivedIcon),
					desc: F(),
					id: X,
					onMouseEnter: q(X),
					onMouseLeave: N
				}), o.a.createElement(u.c, L({
					tooltipId: X,
					text: F()
				}, V))), z.isLocked && o.a.createElement(r.Fragment, null, o.a.createElement(k.a, {
					isFilled: G,
					className: Object(c.a)(M.a.icon, M.a.lockIcon),
					desc: B(),
					id: Y,
					onMouseEnter: q(Y),
					onMouseLeave: N
				}), o.a.createElement(u.c, L({
					tooltipId: Y,
					text: B()
				}, V))), n && Object(y.p)(z) && !a && o.a.createElement(r.Fragment, null, o.a.createElement(P.a, {
					isFilled: G,
					className: Object(c.a)(M.a.icon, M.a.stickyIcon),
					desc: D(),
					id: se,
					onMouseEnter: q(se),
					onMouseLeave: N
				}), o.a.createElement(u.c, L({
					tooltipId: se,
					text: D()
				}, V))), b && l && o.a.createElement(r.Fragment, null, o.a.createElement(P.a, {
					isFilled: G,
					className: Object(c.a)(M.a.icon, M.a.stickyIcon),
					desc: U(),
					id: re,
					onMouseEnter: q(re),
					onMouseLeave: N
				}), o.a.createElement(u.c, L({
					tooltipId: re,
					text: U()
				}, V))), (z.isApproved || z.approvedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(E.a, {
					isFilled: G,
					className: Object(c.a)(M.a.icon, M.a.approveIcon),
					desc: Object(h.a)(z),
					id: J,
					onMouseEnter: q(J),
					onMouseLeave: N
				}), o.a.createElement(u.c, L({
					tooltipId: J,
					text: Object(h.a)(z)
				}, V))), Object(f.a)(z) && !oe && o.a.createElement(r.Fragment, null, o.a.createElement(I.a, {
					isFilled: G,
					className: Object(c.a)(M.a.icon, M.a.removeIcon),
					desc: Object(h.c)(z),
					id: ee,
					onMouseEnter: q(ee),
					onMouseLeave: N
				}), Z && o.a.createElement(p.a, {
					className: M.a.addRemovalReason,
					onClick: H,
					text: s.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (z.modRemovalReason || z.modNote) && o.a.createElement(A, {
					onMouseEnter: q(ee),
					onMouseLeave: N
				}, s.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), o.a.createElement(u.c, L({
					tooltipId: ee,
					text: Object(h.c)(z)
				}, V))), z.bannedBy && z.isSpam && o.a.createElement(r.Fragment, null, o.a.createElement(C.a, {
					isFilled: G,
					className: Object(c.a)(M.a.icon, M.a.spamIcon),
					desc: Object(h.e)(z),
					id: ne,
					onMouseEnter: q(ne),
					onMouseLeave: N
				}), o.a.createElement(u.c, L({
					tooltipId: ne,
					text: Object(h.e)(z)
				}, V))), ("AutoModerator" === z.approvedBy || "AutoModerator" === z.bannedBy) && o.a.createElement(r.Fragment, null, G ? o.a.createElement(j.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(M.a.icon, M.a.automoderator, !!z.bannedBy && M.a.isRemoved)
				}) : o.a.createElement(w.a, {
					className: Object(c.a)(M.a.icon, M.a.automoderator, !!z.bannedBy && M.a.isRemoved),
					desc: h.b,
					id: Q,
					onMouseEnter: q(Q),
					onMouseLeave: N
				}), o.a.createElement(u.c, L({
					tooltipId: Q,
					text: h.b
				}, V))), oe && o.a.createElement("div", {
					className: M.a.removalReason
				}, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", oe)], {
					hk: "3C408F"
				})), Object(x.a)(z) && !O && o.a.createElement(r.Fragment, null, o.a.createElement(S.a, {
					isFilled: G,
					className: Object(c.a)(M.a.icon, M.a.reportIcon),
					desc: Object(h.d)(z.numReports),
					id: te,
					onMouseEnter: q(te),
					onMouseLeave: N
				}), o.a.createElement(u.c, L({
					tooltipId: te,
					text: Object(h.d)(z.numReports)
				}, V))))
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
				r = n.n(s),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						o = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/selectors/media.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/video.ts"),
				v = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/objectSelector/index.ts"),
				y = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = n("./src/reddit/components/PostContainer/index.m.less"),
				j = n.n(O);
			const E = Object(m.a)(() => Object(o.c)({
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
					}) => Object(x.a)(e, {
						postId: t.id
					}),
					playing: (e, {
						post: t
					}) => Object(x.g)(e, {
						postId: t.id
					}),
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(x.c)(e, {
						postId: t.id
					}),
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(h.i)(e, {
						postId: t.id
					})
				})),
				_ = e => {
					const t = Object(y.d)(e.target, e.currentTarget),
						n = Object(y.b)(e.target, e.currentTarget, y.a.buttons);
					return "subreddit" !== t && n
				};
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						currentIndex: o,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: p,
						onClick: m,
						onPostContentClick: f,
						sendEvent: h,
						style: x,
						ref: g
					} = this.props, y = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => m && m(n, p, t, d))(n), f && _(n) && f(n, p)), p.id && d) {
								const {
									source: e
								} = Object(i.t)(p, d);
								if (e && e.outboundUrl) {
									const t = o + 1;
									h(Object(c.c)(p.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(v.a)(j.a.WrappedPost, s, `Post ${p.id}`, {
							promotedlink: p.isSponsored
						}),
						id: l ? l(p.id) : p.id,
						tabIndex: -1,
						"data-testid": p.id
					}, n), O = !!p.media && p.media.type === b.o.VIDEO;
					return p.isSponsored || O ? r.a.createElement(a.a, {
						post: p,
						trackDisplay: !0
					}, y) : p.media && Object(b.E)(p.media) ? r.a.createElement(u, {
						postId: p.id
					}, y) : y
				}
			}
			t.a = E(Object(y.c)(Object(p.c)(k)))
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				p = n("./src/reddit/components/PostFollow/index.m.less"),
				m = n.n(p);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: r
						} = this.props, o = !!s;
						r(e ? Object(u.o)({
							postId: n,
							isFollowed: o
						}) : Object(u.g)({
							postId: n,
							isFollowed: o
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
					} = this.props, r = this.state.isHovered, i = n.isFollowed;
					let a = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && r && (a = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
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
			const f = Object(i.b)(() => Object(a.c)({}), (e, {
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
				r = n.n(s),
				o = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = n("./src/reddit/components/PopupPortal/index.tsx"),
				c = n("./src/reddit/components/PostLeftRail/index.tsx"),
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
					redditStyle: x,
					subreddit: v,
					isOverlay: g,
					isActionBarAnimationEnabled: y,
					postId: O,
					isForceSelected: j
				} = e, E = `upvote-button-${t.id}${g?"-overlay":""}`, {
					moderationPrompt: _
				} = t;
				return r.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: x
				}, s && r.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: f
				}), r.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: x,
					upvoteTooltipId: E,
					isActionBarAnimationEnabled: y,
					postId: O,
					isForceSelected: j,
					scoreClassName: b.a.score
				}), _ && r.a.createElement(a.b, {
					rightOf: E
				}, "survey" === _ ? r.a.createElement(i.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!g
				}) : r.a.createElement(o.a, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				d = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
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
					hideAwards: s,
					hideNSFWPref: y,
					hostPostId: E,
					iconClassName: _,
					inSubredditOrProfile: k,
					isCommentsPage: I,
					isCompactPinnedPost: S,
					isCurrentUserProfilePost: C,
					isOverlay: P,
					isTopicPage: w,
					listingKey: T,
					post: N,
					shouldShowSubscribeButton: M,
					showCornerOutboundLink: L,
					showSubreddit: A,
					showSubredditIcon: F,
					subredditOrProfile: B
				} = e, R = s || w;
				return r.a.createElement(j, {
					className: t
				}, A && B && r.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, r.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: B.url
				}, F && r.a.createElement(l.b, {
					className: Object(o.a)(O.a.subredditIcon, _),
					shouldHideNsfwIcon: y,
					subredditOrProfile: B
				}))), r.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, A && r.a.createElement(a.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(d.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: n,
					tooltipType: P ? d.c.Lightbox : void 0,
					post: N,
					showSub: A,
					subredditOrProfile: B
				}), r.a.createElement(c.a, {
					className: O.a.postBadges,
					displayText: B ? B.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: S,
					post: N,
					tooltipType: P ? d.c.Lightbox : void 0
				}), !R && r.a.createElement(i.a, {
					isPostDetail: I,
					thing: N,
					tooltipType: P ? d.c.Lightbox : void 0
				})), B && A && M && !C && r.a.createElement(p.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(h.f)(N.id, e ? "unsubscribe" : "subscribe", "post", T, E),
					identifier: {
						name: B.name,
						type: Object(g.g)(B) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: N.id,
					size: b.c.XS
				}), L && r.a.createElement(f.b, {
					className: O.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(v.D)(e.post),
					source: N.source
				}, r.a.createElement(x.a, {
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
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/getShortenedLink.ts"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				l = n("./src/reddit/components/SourceLink/index.m.less"),
				u = n.n(l),
				p = n("./src/lib/lessComponent.tsx");
			const m = p.a.wrapped(d.a, "OutboundLinkIcon", u.a),
				b = p.a.div("SourceLinkWrapper", u.a);

			function f(e) {
				const t = Object(c.a)(),
					{
						className: n,
						post: s,
						isCommentsPage: d
					} = e,
					{
						source: l,
						isSponsored: p
					} = s;
				return l ? r.a.createElement(b, {
					className: Object(o.a)({
						[u.a["m-comment"]]: d
					}, n)
				}, r.a.createElement(a.a, {
					href: l.url,
					isSponsored: p,
					postId: s.id,
					source: l
				}, Object(i.a)(s), r.a.createElement(m, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				p = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				b = n.n(m),
				f = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = f.a.wrapped(l.a, "Checkmark", b.a),
				v = f.a.wrapped(u.a, "Plus", b.a),
				g = f.a.div("ButtonSpacer", b.a);
			class y extends r.a.Component {
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
							onSubscribe: s,
							onUnsubscribe: o,
							postId: i,
							sendEvent: l,
							small: u = !1,
							size: m,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: f,
							getEventFactory: v,
							onSubscriptionsRequested: g,
							...y
						} = this.props, O = this.state.isHovered, j = Object(p.a)({
							type: n.type,
							key: O ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(c.q, h({
							className: t,
							priority: y.shouldReverseColor ? c.b.Primary : c.b.Secondary,
							Icon: u || !u && !O ? e ? e => r.a.createElement(d.a, h({
								name: "checkmark"
							}, e)) : x : void 0,
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
							onSubscribe: s,
							onUnsubscribe: o,
							postId: i,
							sendEvent: l,
							small: u = !1,
							size: m,
							userIsSubscriber: b,
							doNotHideOtherSubscribeButtons: f,
							getEventFactory: x,
							onSubscriptionsRequested: g,
							...y
						} = this.props, O = Object(p.a)({
							type: n.type,
							key: "subscribe"
						});
						return r.a.createElement(c.q, h({
							className: t,
							priority: y.shouldReverseColor ? c.b.Secondary : c.b.Primary,
							Icon: e ? e => r.a.createElement(d.a, h({
								name: "add"
							}, e)) : v,
							size: m || (u ? c.c.XS : c.c.S),
							text: !u && O,
							onClick: this.onClick
						}, y, {
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
					return t ? this.state.hasJustSubscribed || n ? r.a.createElement(a.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : r.a.createElement(g, null) : r.a.createElement(a.b.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(i.a)(Object(o.c)(y))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
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
				}) => o[r({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/constants/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = 3,
				r = 5,
				o = 10
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
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
						"data-redditstyle": a,
						...c
					} = t, d = ((e, t, n) => {
						const s = !(!t && !n);
						let r = "";
						return r = e ? s ? l.a.mDisabledRedditStyle : l.a.mDisabled : s ? l.a.mActiveRedditStyle : l.a.mActive
					})(s, i, a);
					return r.a.createElement(e, u({
						className: Object(o.a)(l.a.CheckboxIcon, d, n)
					}, c))
				},
				m = p(c.a),
				b = p(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? b : e.isCheckboxSelected ? m : i.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(o.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(o.a)(l.a.CheckboxSizing, e.className),
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => r.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
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
				return o
			}));
			var s = n("./src/reddit/constants/thumbnails.ts"),
				r = n("./src/reddit/models/Media/index.ts");

			function o(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === s.a.SELF || e.thumbnail.url === s.a.NSFW || e.media && Object(r.E)(e.media))
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
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = s.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
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
				c = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
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
				return x
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				b = e => Object(s.l)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
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
				return v
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "E", (function() {
				return _
			})), n.d(t, "F", (function() {
				return k
			})), n.d(t, "M", (function() {
				return S
			})), n.d(t, "B", (function() {
				return C
			})), n.d(t, "C", (function() {
				return P
			})), n.d(t, "D", (function() {
				return w
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "x", (function() {
				return M
			})), n.d(t, "L", (function() {
				return L
			})), n.d(t, "K", (function() {
				return A
			})), n.d(t, "I", (function() {
				return F
			})), n.d(t, "v", (function() {
				return B
			})), n.d(t, "y", (function() {
				return R
			})), n.d(t, "z", (function() {
				return D
			})), n.d(t, "A", (function() {
				return U
			})), n.d(t, "N", (function() {
				return W
			})), n.d(t, "J", (function() {
				return H
			})), n.d(t, "t", (function() {
				return q
			})), n.d(t, "H", (function() {
				return z
			})), n.d(t, "d", (function() {
				return K
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "b", (function() {
				return V
			})), n.d(t, "f", (function() {
				return Z
			})), n.d(t, "e", (function() {
				return J
			})), n.d(t, "s", (function() {
				return Y
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
				return re
			})), n.d(t, "q", (function() {
				return oe
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "j", (function() {
				return ae
			})), n.d(t, "u", (function() {
				return ce
			})), n.d(t, "G", (function() {
				return de
			}));
			var s, r = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/trackers/searchResults.ts"),
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
						title: t.title && n ? Object(r.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				x = (e, t, n) => ({
					...h(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				v = (e, t) => {
					Object(b.a)(g(t)(e))
				},
				g = (e, t) => n => x(n, e, t),
				y = (e, t, n, s) => "unitName" in t ? h(e, t, s) : ((e, t, n) => ({
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
				O = (e, t, n, r, o) => ({
					...y(e, t, r, o),
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
			var E;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(E || (E = {}));
			const _ = (e, t, n) => {
					Object(b.a)(I(e, t, n, i.c.CLICK))
				},
				k = (e, t, n) => {
					Object(b.a)(I(e, t, n, i.c.VIEW))
				},
				I = (e, t, n, s) => {
					const r = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...p.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: j(t),
						discoveryUnit: n === E.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
							type: "query"
						} : void 0,
						actionInfo: p.actionInfo(e, {
							paneName: n,
							position: r
						}),
						search: {
							originPageType: e.platform.currentPage ? p.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: p.StructureType.Trending,
							queryId: s === i.c.CLICK ? Object(a.c)(a.a.SearchResults) : void 0
						}
					}
				},
				S = (e, t, n, s, r, o, a) => {
					Object(b.a)({
						...p.defaults(e),
						...Object(c.e)(e, n, s, r, o, t),
						action: i.c.VIEW,
						noun: a ? "ad" : "post"
					})
				},
				C = (e, t, n, s) => {
					Object(b.a)(O(e, t, n, s))
				},
				P = (e, t, n, s) => r => O(r, e, t, n, s),
				w = (e, t, n, r) => {
					const o = y(e, t, r);
					Object(b.a)({
						...o,
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
				M = (e, t, n, r) => o => {
					return {
						...y(o, e, n, r),
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_POST,
						post: p.post(o, t)
					}
				},
				L = (e, t, n, s) => r => o => Object(c.e)(o, r, e, t, n, s),
				A = (e, t, n, s) => r => o => Object(c.d)(o, e, t, void 0, n, r, s),
				F = (e, t, n, s) => r => o => ({
					...Object(c.e)(o, r, e, t, n, s),
					noun: "ad"
				}),
				B = (e, t) => n => r => ({
					...e ? h(r, e, t) : {},
					source: f,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: p.post(r, n)
				}),
				R = (e, t, n, s) => {
					Object(b.a)(D(t, n, s)(e))
				},
				D = (e, t, n, s) => r => {
					const o = Object(u.c)(r, {
							postId: t
						}),
						a = o ? Object(m.b)(r, o) : void 0;
					return {
						...y(r, e, n, s),
						...a,
						source: f,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: p.post(r, t)
					}
				},
				U = (e, t, n) => s => r => {
					const o = Object(u.c)(r, {
							postId: t
						}),
						a = o ? Object(m.b)(r, o) : void 0;
					return {
						...y(r, e, void 0, n),
						...a,
						source: f,
						action: i.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: p.post(r, t)
					}
				},
				W = (e, t, n) => {
					const s = y(e, t);
					Object(b.a)({
						...s,
						...Object(m.b)(e, n),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				H = (e, t, n, s, r, o) => {
					Object(b.a)({
						...p.defaults(e),
						...Object(c.d)(e, t, n, s, r, void 0, o)
					})
				},
				q = (e, t, n) => {
					const s = y(e, t);
					Object(b.a)({
						...s,
						...Object(m.b)(e, n),
						source: f,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				z = (e, t) => n => {
					const s = Object(l.j)(t);
					return {
						...h(n, e, t),
						...Object(m.b)(n, s),
						source: f,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				K = (e, t) => n => ({
					...h(n, e, t),
					action: "status",
					actionInfo: p.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				G = (e, t, n) => s => ({
					...h(s, e, n),
					action: "status",
					actionInfo: p.actionInfo(s, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				V = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "close"
				}),
				Z = (e, t, n) => s => ({
					...y(s, e, t, n),
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
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				Q = (e, t, n) => p.actionInfo(e, {
					position: n
				}),
				Y = (e, t, n) => {
					const s = X();
					return e => ({
						...x(e, s),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t)
					})
				},
				$ = (e, t, n) => {
					const s = X();
					return e => ({
						...O(e, s, t),
						actionInfo: Q(e, 0, n)
					})
				},
				ee = (e, t, n) => {
					const r = X();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				te = (e, t, n) => {
					const r = X();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						post: p.post(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				ne = (e, t, n, r) => {
					const o = X();
					return e => ({
						...h(e, o),
						actionInfo: Q(e, 0, r),
						subreddit: p.subredditById(e, n) || null,
						post: p.post(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				se = (e, t, n) => {
					const r = X();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				re = (e, t, n, r) => {
					const o = X();
					return e => ({
						...h(e, o),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: r ? p.post(e, r) : null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				oe = (e, t, n, r) => {
					const o = X();
					return e => ({
						...h(e, o),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: r ? p.post(e, r) : null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ie = (e, t, n) => {
					const r = X();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ae = (e, t, n) => {
					const r = X();
					return e => ({
						...h(e, r),
						actionInfo: Q(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				ce = (e, t) => n => ({
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
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/parseUrl.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => ({
					gallery: o.gallery(e, t, n),
					post: o.post(e, t),
					...o.defaults(e)
				}),
				a = (e, t) => n => ({
					...i(n, e, t),
					action: s.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.media(n, e)
				}),
				c = (e, t, n) => a => {
					const c = Object(r.a)(t);
					return {
						...i(a, e, n),
						action: s.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...o.media(a, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				d = (e, t) => u(e, !0, t),
				l = (e, t) => u(e, !1, t),
				u = (e, t, n) => r => ({
					...i(r, e, n),
					action: s.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, n, r) => o => ({
					source: "report_prompt",
					noun: n,
					action: r,
					subreddit: s.subredditByName(o, e),
					post: s.post(o, t)
				}),
				o = (e, t, n, r) => o => ({
					source: "report_survey",
					noun: n,
					action: r,
					subreddit: s.subredditByName(o, e),
					post: s.post(o, t)
				})
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
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
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, r.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, r.a.createElement("path", {
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
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
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(o.G)(e) || s.z.Treatment1 === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.u
				})
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.ob
				});
				return !(!t || Object(s.ud)(t))
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
				return v
			})), n.d(t, "b", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeListingKey/index.ts"),
				i = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				a = n("./src/reddit/constants/inFeedChaining.ts"),
				c = n("./src/reddit/models/DiscoveryUnit/index.ts"),
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
				x = (e, {
					subredditName: t
				}) => {
					const n = r.Ub.DAY.toUpperCase(),
						s = Object(o.a)(t, r.P.TOP, {
							t: n
						}),
						i = Object(l.B)(e, {
							listingKey: s
						});
					if (0 !== i.length)
						for (const r of i) {
							const t = Object(l.I)(e, {
								postId: r
							});
							if (t && !t.hidden && !t.isSponsored) return t
						}
				},
				v = (e, {
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
								count: a.b
							});
							return Object(u.v)(e, {
								key: s
							})
						})(e, {
							postId: t
						}),
						s = [];
					for (const {
							name: r
						} of n) {
						const t = x(e, {
							subredditName: r
						});
						t && s.push(t.id)
					}
					return s
				},
				g = (e, {
					listingName: t
				}) => {
					const n = c.b;
					return Object(d.c)(e, {
						unitName: n
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.d4a8dd8df3f127601f19.js.map