// https://www.redditstatic.com/desktop2x/vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322.27cbcb0a73746fa97867.js
// Retrieved at 10/23/2020, 1:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-dom/index.js"),
				a = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function s(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, n) {
					return s(e[n], t[n])
				})) : e !== t
			}
			var c = new Map;

			function f(e) {
				void 0 === e && (e = {});
				for (var t, r = e.root || null, n = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = t[0],
							n = void 0 === r ? "0px" : r,
							o = t[1],
							i = void 0 === o ? n : o,
							s = t[2],
							c = void 0 === s ? n : s,
							f = t[3];
						return n + " " + i + " " + c + " " + (void 0 === f ? i : f)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], i = c.keys(); t = i.next().value;) {
					if (!(r !== t.root || n !== t.rootMargin || s(o, t.thresholds))) return t
				}
				return null
			}

			function u(e, t) {
				var r = c.get(e);
				if (r)
					for (var n, o = r.values(); n = o.next().value;)
						if (n.target === t.target) return n;
				return null
			}

			function p(e, t) {
				for (var r = 0; r < e.length; r++) {
					var n = u(t, e[r]);
					n && n.handleChange(e[r])
				}
			}

			function l(e) {
				return f(e) || new IntersectionObserver(p, e)
			}
			var d = r("./node_modules/invariant/browser.js"),
				h = r.n(d),
				m = {},
				v = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return m.errorReporter || function(e) {
								return h()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							m.errorReporter = e
						}
					}
				});

			function g(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function b(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var y = ["root", "rootMargin", "threshold"],
				O = ["root", "rootMargin", "threshold", "disabled"],
				w = Object.prototype,
				x = w.hasOwnProperty,
				j = w.toString,
				_ = function(e) {
					return y.reduce((function(t, r) {
						if (x.call(e, r)) {
							var n = "root" === r && "[object String]" === j.call(e[r]);
							t[r] = n ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				E = function(e) {
					var t, r;

					function n() {
						for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
						return b(g(t = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), b(g(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var n = r.ref;
								n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
							}
							t.targetNode = e && Object(i.findDOMNode)(e)
						})), b(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = l(_(t.props)), t.target = t.targetNode, e = g(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), b(g(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var r = c.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(g(t), e)
						})), b(g(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
					var a = n.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var r = O.some((function(r) {
							return s(t.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, a.componentDidUpdate = function(e, t, r) {
						var n = !1;
						r || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || n) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, n
				}(o.a.Component);
			b(E, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function i() {}
			i.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, i, a) {
					if (a !== n) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var r = {
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
					checkPropTypes: i,
					resetWarningCache: o
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return de
			}));
			var n = r("./node_modules/react/index.js");

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

			function i(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function a(e) {
				var t = i(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function s(e) {
				return e instanceof i(e).Element || e instanceof Element
			}

			function c(e) {
				return e instanceof i(e).HTMLElement || e instanceof HTMLElement
			}

			function f(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function u(e) {
				return (s(e) ? e.ownerDocument : e.document).documentElement
			}

			function p(e) {
				return o(u(e)).left + a(e).scrollLeft
			}

			function l(e) {
				return i(e).getComputedStyle(e)
			}

			function d(e) {
				var t = l(e),
					r = t.overflow,
					n = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(r + o + n)
			}

			function h(e, t, r) {
				void 0 === r && (r = !1);
				var n, s, l = u(t),
					h = o(e),
					m = c(t),
					v = {
						scrollLeft: 0,
						scrollTop: 0
					},
					g = {
						x: 0,
						y: 0
					};
				return (m || !m && !r) && (("body" !== f(t) || d(l)) && (v = (n = t) !== i(n) && c(n) ? {
					scrollLeft: (s = n).scrollLeft,
					scrollTop: s.scrollTop
				} : a(n)), c(t) ? ((g = o(t)).x += t.clientLeft, g.y += t.clientTop) : l && (g.x = p(l))), {
					x: h.left + v.scrollLeft - g.x,
					y: h.top + v.scrollTop - g.y,
					width: h.width,
					height: h.height
				}
			}

			function m(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function v(e) {
				return "html" === f(e) ? e : e.assignedSlot || e.parentNode || e.host || u(e)
			}

			function g(e, t) {
				void 0 === t && (t = []);
				var r = function e(t) {
						return ["html", "body", "#document"].indexOf(f(t)) >= 0 ? t.ownerDocument.body : c(t) && d(t) ? t : e(v(t))
					}(e),
					n = "body" === f(r),
					o = i(r),
					a = n ? [o].concat(o.visualViewport || [], d(r) ? r : []) : r,
					s = t.concat(a);
				return n ? s : s.concat(g(v(a)))
			}

			function b(e) {
				return ["table", "td", "th"].indexOf(f(e)) >= 0
			}

			function y(e) {
				return c(e) && "fixed" !== l(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = i(e), r = y(e); r && b(r) && "static" === l(r).position;) r = y(r);
				return r && "body" === f(r) && "static" === l(r).position ? t : r || function(e) {
					for (var t = v(e); c(t) && ["html", "body"].indexOf(f(t)) < 0;) {
						var r = l(t);
						if ("none" !== r.transform || "none" !== r.perspective || "auto" !== r.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var w = "top",
				x = "bottom",
				j = "right",
				_ = "left",
				E = "auto",
				M = [w, x, j, _],
				D = "start",
				P = "end",
				S = "clippingParents",
				A = "viewport",
				T = "popper",
				k = "reference",
				R = M.reduce((function(e, t) {
					return e.concat([t + "-" + D, t + "-" + P])
				}), []),
				L = [].concat(M, [E]).reduce((function(e, t) {
					return e.concat([t, t + "-" + D, t + "-" + P])
				}), []),
				N = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function B(e) {
				var t = new Map,
					r = new Set,
					n = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					r.has(e.name) || function e(o) {
						r.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(n) {
							if (!r.has(n)) {
								var o = t.get(n);
								o && e(o)
							}
						})), n.push(o)
					}(e)
				})), n
			}
			var C = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function W() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					r = t.defaultModifiers,
					n = void 0 === r ? [] : r,
					o = t.defaultOptions,
					i = void 0 === o ? C : o;
				return function(e, t, r) {
					void 0 === r && (r = i);
					var o, a, c = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, C), i),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						f = [],
						u = !1,
						p = {
							state: c,
							setOptions: function(r) {
								l(), c.options = Object.assign(Object.assign(Object.assign({}, i), c.options), r), c.scrollParents = {
									reference: s(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
									popper: g(t)
								};
								var o = function(e) {
									var t = B(e);
									return N.reduce((function(e, r) {
										return e.concat(t.filter((function(e) {
											return e.phase === r
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var r = e[t.name];
										return e[t.name] = r ? Object.assign(Object.assign(Object.assign({}, r), t), {}, {
											options: Object.assign(Object.assign({}, r.options), t.options),
											data: Object.assign(Object.assign({}, r.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(n, c.options.modifiers)));
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										r = e.options,
										n = void 0 === r ? {} : r,
										o = e.effect;
									if ("function" == typeof o) {
										var i = o({
											state: c,
											name: t,
											instance: p,
											options: n
										});
										f.push(i || function() {})
									}
								})), p.update()
							},
							forceUpdate: function() {
								if (!u) {
									var e = c.elements,
										t = e.reference,
										r = e.popper;
									if (W(t, r)) {
										c.rects = {
											reference: h(t, O(r), "fixed" === c.options.strategy),
											popper: m(r)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < c.orderedModifiers.length; n++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[n],
													i = o.fn,
													a = o.options,
													s = void 0 === a ? {} : a,
													f = o.name;
												"function" == typeof i && (c = i({
													state: c,
													options: s,
													name: f,
													instance: p
												}) || c)
											} else c.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									p.forceUpdate(), e(c)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(o())
									}))
								}))), a
							}),
							destroy: function() {
								l(), u = !0
							}
						};
					if (!W(e, t)) return p;

					function l() {
						f.forEach((function(e) {
							return e()
						})), f = []
					}
					return p.setOptions(r).then((function(e) {
						!u && r.onFirstUpdate && r.onFirstUpdate(e)
					})), p
				}
			}
			var H = {
				passive: !0
			};

			function q(e) {
				return e.split("-")[0]
			}

			function I(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function z(e) {
				var t, r = e.reference,
					n = e.element,
					o = e.placement,
					i = o ? q(o) : null,
					a = o ? I(o) : null,
					s = r.x + r.width / 2 - n.width / 2,
					c = r.y + r.height / 2 - n.height / 2;
				switch (i) {
					case w:
						t = {
							x: s,
							y: r.y - n.height
						};
						break;
					case x:
						t = {
							x: s,
							y: r.y + r.height
						};
						break;
					case j:
						t = {
							x: r.x + r.width,
							y: c
						};
						break;
					case _:
						t = {
							x: r.x - n.width,
							y: c
						};
						break;
					default:
						t = {
							x: r.x,
							y: r.y
						}
				}
				var f = i ? V(i) : null;
				if (null != f) {
					var u = "y" === f ? "height" : "width";
					switch (a) {
						case D:
							t[f] = Math.floor(t[f]) - Math.floor(r[u] / 2 - n[u] / 2);
							break;
						case P:
							t[f] = Math.floor(t[f]) + Math.ceil(r[u] / 2 - n[u] / 2)
					}
				}
				return t
			}
			var F = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function Y(e) {
				var t, r = e.popper,
					n = e.popperRect,
					o = e.placement,
					a = e.offsets,
					s = e.position,
					c = e.gpuAcceleration,
					f = e.adaptive,
					p = function(e) {
						var t = e.x,
							r = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(r * n) / n || 0
						}
					}(a),
					l = p.x,
					d = p.y,
					h = a.hasOwnProperty("x"),
					m = a.hasOwnProperty("y"),
					v = _,
					g = w,
					b = window;
				if (f) {
					var y = O(r);
					y === i(r) && (y = u(r)), o === w && (g = x, d -= y.clientHeight - n.height, d *= c ? 1 : -1), o === _ && (v = j, l -= y.clientWidth - n.width, l *= c ? 1 : -1)
				}
				var E, M = Object.assign({
					position: s
				}, f && F);
				return c ? Object.assign(Object.assign({}, M), {}, ((E = {})[g] = m ? "0" : "", E[v] = h ? "0" : "", E.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + l + "px, " + d + "px)" : "translate3d(" + l + "px, " + d + "px, 0)", E)) : Object.assign(Object.assign({}, M), {}, ((t = {})[g] = m ? d + "px" : "", t[v] = h ? l + "px" : "", t.transform = "", t))
			}
			var $ = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return $[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function G(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function J(e, t) {
				var r = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (r) {
					var n = t;
					do {
						if (n && e.isSameNode(n)) return !0;
						n = n.parentNode || n.host
					} while (n)
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

			function Z(e, t) {
				return t === A ? Q(function(e) {
					var t = i(e),
						r = u(e),
						n = t.visualViewport,
						o = r.clientWidth,
						a = r.clientHeight,
						s = 0,
						c = 0;
					return n && (o = n.width, a = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = n.offsetLeft, c = n.offsetTop)), {
						width: o,
						height: a,
						x: s + p(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = u(e),
						r = a(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						i = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						s = -r.scrollLeft + p(e),
						c = -r.scrollTop;
					return "rtl" === l(n || t).direction && (s += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: i,
						x: s,
						y: c
					}
				}(u(e)))
			}

			function ee(e, t, r) {
				var n = "clippingParents" === t ? function(e) {
						var t = g(e),
							r = ["absolute", "fixed"].indexOf(l(e).position) >= 0 && c(e) ? O(e) : e;
						return s(r) ? t.filter((function(e) {
							return s(e) && J(e, r)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(n, [r]),
					i = o[0],
					a = o.reduce((function(t, r) {
						var n = Z(e, r);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
					}), Z(e, i));
				return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
			}

			function te(e) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), e)
			}

			function re(e, t) {
				return t.reduce((function(t, r) {
					return t[r] = e, t
				}), {})
			}

			function ne(e, t) {
				void 0 === t && (t = {});
				var r = t,
					n = r.placement,
					i = void 0 === n ? e.placement : n,
					a = r.boundary,
					c = void 0 === a ? S : a,
					f = r.rootBoundary,
					p = void 0 === f ? A : f,
					l = r.elementContext,
					d = void 0 === l ? T : l,
					h = r.altBoundary,
					m = void 0 !== h && h,
					v = r.padding,
					g = void 0 === v ? 0 : v,
					b = te("number" != typeof g ? g : re(g, M)),
					y = d === T ? k : T,
					O = e.elements.reference,
					_ = e.rects.popper,
					E = e.elements[m ? y : d],
					D = ee(s(E) ? E : E.contextElement || u(e.elements.popper), c, p),
					P = o(O),
					R = z({
						reference: P,
						element: _,
						strategy: "absolute",
						placement: i
					}),
					L = Q(Object.assign(Object.assign({}, _), R)),
					N = d === T ? L : P,
					B = {
						top: D.top - N.top + b.top,
						bottom: N.bottom - D.bottom + b.bottom,
						left: D.left - N.left + b.left,
						right: N.right - D.right + b.right
					},
					C = e.modifiersData.offset;
				if (d === T && C) {
					var W = C[i];
					Object.keys(B).forEach((function(e) {
						var t = [j, x].indexOf(e) >= 0 ? 1 : -1,
							r = [w, x].indexOf(e) >= 0 ? "y" : "x";
						B[e] += W[r] * t
					}))
				}
				return B
			}

			function oe(e, t, r) {
				return Math.max(e, Math.min(t, r))
			}

			function ie(e, t, r) {
				return void 0 === r && (r = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - r.y,
					right: e.right - t.width + r.x,
					bottom: e.bottom - t.height + r.y,
					left: e.left - t.width - r.x
				}
			}

			function ae(e) {
				return [w, j, x, _].some((function(t) {
					return e[t] >= 0
				}))
			}
			var se = U({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								r = e.instance,
								n = e.options,
								o = n.scroll,
								a = void 0 === o || o,
								s = n.resize,
								c = void 0 === s || s,
								f = i(t.elements.popper),
								u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return a && u.forEach((function(e) {
									e.addEventListener("scroll", r.update, H)
								})), c && f.addEventListener("resize", r.update, H),
								function() {
									a && u.forEach((function(e) {
										e.removeEventListener("scroll", r.update, H)
									})), c && f.removeEventListener("resize", r.update, H)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								r = e.name;
							t.modifiersData[r] = z({
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
								r = e.options,
								n = r.gpuAcceleration,
								o = void 0 === n || n,
								i = r.adaptive,
								a = void 0 === i || i,
								s = {
									placement: q(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), Y(Object.assign(Object.assign({}, s), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: a
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), Y(Object.assign(Object.assign({}, s), {}, {
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
								var r = t.styles[e] || {},
									n = t.attributes[e] || {},
									o = t.elements[e];
								c(o) && f(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
									var t = n[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								r = {
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
							return Object.assign(t.elements.popper.style, r.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var n = t.elements[e],
											o = t.attributes[e] || {},
											i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										c(n) && f(n) && (Object.assign(n.style, i), Object.keys(o).forEach((function(e) {
											n.removeAttribute(e)
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
								r = e.options,
								n = e.name,
								o = r.offset,
								i = void 0 === o ? [0, 0] : o,
								a = L.reduce((function(e, r) {
									return e[r] = function(e, t, r) {
										var n = q(e),
											o = [_, w].indexOf(n) >= 0 ? -1 : 1,
											i = "function" == typeof r ? r(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : r,
											a = i[0],
											s = i[1];
										return a = a || 0, s = (s || 0) * o, [_, j].indexOf(n) >= 0 ? {
											x: s,
											y: a
										} : {
											x: a,
											y: s
										}
									}(r, t.rects, i), e
								}), {}),
								s = a[t.placement],
								c = s.x,
								f = s.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = a
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name;
							if (!t.modifiersData[n]._skip) {
								for (var o = r.mainAxis, i = void 0 === o || o, a = r.altAxis, s = void 0 === a || a, c = r.fallbackPlacements, f = r.padding, u = r.boundary, p = r.rootBoundary, l = r.altBoundary, d = r.flipVariations, h = void 0 === d || d, m = r.allowedAutoPlacements, v = t.options.placement, g = q(v), b = c || (g === v || !h ? [K(v)] : function(e) {
										if (q(e) === E) return [];
										var t = K(e);
										return [G(e), t, G(t)]
									}(v)), y = [v].concat(b).reduce((function(e, r) {
										return e.concat(q(r) === E ? function(e, t) {
											void 0 === t && (t = {});
											var r = t,
												n = r.placement,
												o = r.boundary,
												i = r.rootBoundary,
												a = r.padding,
												s = r.flipVariations,
												c = r.allowedAutoPlacements,
												f = void 0 === c ? L : c,
												u = I(n),
												p = (u ? s ? R : R.filter((function(e) {
													return I(e) === u
												})) : M).filter((function(e) {
													return f.indexOf(e) >= 0
												})).reduce((function(t, r) {
													return t[r] = ne(e, {
														placement: r,
														boundary: o,
														rootBoundary: i,
														padding: a
													})[q(r)], t
												}), {});
											return Object.keys(p).sort((function(e, t) {
												return p[e] - p[t]
											}))
										}(t, {
											placement: r,
											boundary: u,
											rootBoundary: p,
											padding: f,
											flipVariations: h,
											allowedAutoPlacements: m
										}) : r)
									}), []), O = t.rects.reference, P = t.rects.popper, S = new Map, A = !0, T = y[0], k = 0; k < y.length; k++) {
									var N = y[k],
										B = q(N),
										C = I(N) === D,
										W = [w, x].indexOf(B) >= 0,
										U = W ? "width" : "height",
										H = ne(t, {
											placement: N,
											boundary: u,
											rootBoundary: p,
											altBoundary: l,
											padding: f
										}),
										V = W ? C ? j : _ : C ? x : w;
									O[U] > P[U] && (V = K(V));
									var z = K(V),
										F = [];
									if (i && F.push(H[B] <= 0), s && F.push(H[V] <= 0, H[z] <= 0), F.every((function(e) {
											return e
										}))) {
										T = N, A = !1;
										break
									}
									S.set(N, F)
								}
								if (A)
									for (var Y = function(e) {
											var t = y.find((function(t) {
												var r = S.get(t);
												if (r) return r.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return T = t, "break"
										}, $ = h ? 3 : 1; $ > 0; $--) {
										if ("break" === Y($)) break
									}
								t.placement !== T && (t.modifiersData[n]._skip = !0, t.placement = T, t.reset = !0)
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
								r = e.options,
								n = e.name,
								o = r.mainAxis,
								i = void 0 === o || o,
								a = r.altAxis,
								s = void 0 !== a && a,
								c = r.boundary,
								f = r.rootBoundary,
								u = r.altBoundary,
								p = r.padding,
								l = r.tether,
								d = void 0 === l || l,
								h = r.tetherOffset,
								v = void 0 === h ? 0 : h,
								g = ne(t, {
									boundary: c,
									rootBoundary: f,
									padding: p,
									altBoundary: u
								}),
								b = q(t.placement),
								y = I(t.placement),
								E = !y,
								M = V(b),
								P = "x" === M ? "y" : "x",
								S = t.modifiersData.popperOffsets,
								A = t.rects.reference,
								T = t.rects.popper,
								k = "function" == typeof v ? v(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : v,
								R = {
									x: 0,
									y: 0
								};
							if (S) {
								if (i) {
									var L = "y" === M ? w : _,
										N = "y" === M ? x : j,
										B = "y" === M ? "height" : "width",
										C = S[M],
										W = S[M] + g[L],
										U = S[M] - g[N],
										H = d ? -T[B] / 2 : 0,
										z = y === D ? A[B] : T[B],
										F = y === D ? -T[B] : -A[B],
										Y = t.elements.arrow,
										$ = d && Y ? m(Y) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = K[L],
										G = K[N],
										J = oe(0, A[B], $[B]),
										Q = E ? A[B] / 2 - H - J - X - k : z - J - X - k,
										Z = E ? -A[B] / 2 + H + J + G + k : F + J + G + k,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === M ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][M] : 0,
										ie = S[M] + Q - re - te,
										ae = S[M] + Z - re,
										se = oe(d ? Math.min(W, ie) : W, C, d ? Math.max(U, ae) : U);
									S[M] = se, R[M] = se - C
								}
								if (s) {
									var ce = "x" === M ? w : _,
										fe = "x" === M ? x : j,
										ue = S[P],
										pe = oe(ue + g[ce], ue, ue - g[fe]);
									S[P] = pe, R[P] = pe - ue
								}
								t.modifiersData[n] = R
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, r = e.state,
								n = e.name,
								o = r.elements.arrow,
								i = r.modifiersData.popperOffsets,
								a = q(r.placement),
								s = V(a),
								c = [_, j].indexOf(a) >= 0 ? "height" : "width";
							if (o && i) {
								var f = r.modifiersData[n + "#persistent"].padding,
									u = m(o),
									p = "y" === s ? w : _,
									l = "y" === s ? x : j,
									d = r.rects.reference[c] + r.rects.reference[s] - i[s] - r.rects.popper[c],
									h = i[s] - r.rects.reference[s],
									v = O(o),
									g = v ? "y" === s ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
									b = d / 2 - h / 2,
									y = f[p],
									E = g - u[c] - f[l],
									M = g / 2 - u[c] / 2 + b,
									D = oe(y, M, E),
									P = s;
								r.modifiersData[n] = ((t = {})[P] = D, t.centerOffset = D - M, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.element,
								i = void 0 === o ? "[data-popper-arrow]" : o,
								a = r.padding,
								s = void 0 === a ? 0 : a;
							null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && J(t.elements.popper, i) && (t.elements.arrow = i, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof s ? s : re(s, M))
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
								r = e.name,
								n = t.rects.reference,
								o = t.rects.popper,
								i = t.modifiersData.preventOverflow,
								a = ne(t, {
									elementContext: "reference"
								}),
								s = ne(t, {
									altBoundary: !0
								}),
								c = ie(a, n),
								f = ie(s, o, i),
								u = ae(c),
								p = ae(f);
							t.modifiersData[r] = {
								referenceClippingOffsets: c,
								popperEscapeOffsets: f,
								isReferenceHidden: u,
								hasPopperEscaped: p
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": u,
								"data-popper-escaped": p
							})
						}
					}]
				}),
				ce = r("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				fe = r.n(ce),
				ue = function(e) {
					return e.reduce((function(e, t) {
						var r = t[0],
							n = t[1];
						return e[r] = n, e
					}), {})
				},
				pe = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				le = [],
				de = function(e, t, r) {
					void 0 === r && (r = {});
					var o = n.useRef(null),
						i = {
							onFirstUpdate: r.onFirstUpdate,
							placement: r.placement || "bottom",
							strategy: r.strategy || "absolute",
							modifiers: r.modifiers || le
						},
						a = n.useState({
							styles: {
								popper: {
									position: i.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						s = a[0],
						c = a[1],
						f = n.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										r = Object.keys(t.elements);
									c({
										styles: ue(r.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: ue(r.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						u = n.useMemo((function() {
							var e = {
								onFirstUpdate: i.onFirstUpdate,
								placement: i.placement,
								strategy: i.strategy,
								modifiers: [].concat(i.modifiers, [f, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return fe()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, f]),
						p = n.useRef();
					return pe((function() {
						p.current && p.current.setOptions(u)
					}), [u]), pe((function() {
						if (null != e && null != t) {
							var n = (r.createPopper || se)(e, t, u);
							return p.current = n,
								function() {
									n.destroy(), p.current = null
								}
						}
					}), [e, t, r.createPopper]), {
						state: p.current ? p.current.state : null,
						styles: s.styles,
						attributes: s.attributes,
						update: p.current ? p.current.update : null,
						forceUpdate: p.current ? p.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var r = "undefined" != typeof Element,
				n = "function" == typeof Map,
				o = "function" == typeof Set,
				i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, a) {
						if (t === a) return !0;
						if (t && a && "object" == typeof t && "object" == typeof a) {
							if (t.constructor !== a.constructor) return !1;
							var s, c, f, u;
							if (Array.isArray(t)) {
								if ((s = t.length) != a.length) return !1;
								for (c = s; 0 != c--;)
									if (!e(t[c], a[c])) return !1;
								return !0
							}
							if (n && t instanceof Map && a instanceof Map) {
								if (t.size !== a.size) return !1;
								for (u = t.entries(); !(c = u.next()).done;)
									if (!a.has(c.value[0])) return !1;
								for (u = t.entries(); !(c = u.next()).done;)
									if (!e(c.value[1], a.get(c.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && a instanceof Set) {
								if (t.size !== a.size) return !1;
								for (u = t.entries(); !(c = u.next()).done;)
									if (!a.has(c.value[0])) return !1;
								return !0
							}
							if (i && ArrayBuffer.isView(t) && ArrayBuffer.isView(a)) {
								if ((s = t.length) != a.length) return !1;
								for (c = s; 0 != c--;)
									if (t[c] !== a[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === a.source && t.flags === a.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === a.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === a.toString();
							if ((s = (f = Object.keys(t)).length) !== Object.keys(a).length) return !1;
							for (c = s; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(a, f[c])) return !1;
							if (r && t instanceof Element) return !1;
							for (c = s; 0 != c--;)
								if (("_owner" !== f[c] && "__v" !== f[c] && "__o" !== f[c] || !t.$$typeof) && !e(t[f[c]], a[f[c]])) return !1;
							return !0
						}
						return t != t && a != a
					}(e, t)
				} catch (a) {
					if ((a.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw a
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322.27cbcb0a73746fa97867.js.map