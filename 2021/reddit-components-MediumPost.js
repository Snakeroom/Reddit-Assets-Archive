// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.af0dc7cf7d0e33f96cd0.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-dom/index.js"),
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
							r = t[1],
							o = void 0 === r ? s : r,
							c = t[2],
							a = void 0 === c ? s : c,
							d = t[3];
						return s + " " + o + " " + a + " " + (void 0 === d ? o : d)
					}(e.rootMargin), r = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], o = a.keys(); t = o.next().value;) {
					if (!(n !== t.root || s !== t.rootMargin || c(r, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = a.get(e);
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

			function E(e) {
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
			var _ = ["root", "rootMargin", "threshold"],
				O = ["root", "rootMargin", "threshold", "disabled"],
				x = Object.prototype,
				y = x.hasOwnProperty,
				g = x.toString,
				S = function(e) {
					return _.reduce((function(t, n) {
						if (y.call(e, n)) {
							var s = "root" === n && "[object String]" === g.call(e[n]);
							t[n] = s ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				C = function(e) {
					var t, n;

					function s() {
						for (var t, n = arguments.length, s = new Array(n), r = 0; r < n; r++) s[r] = arguments[r];
						return v(E(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(E(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var s = n.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), v(E(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(S(t.props)), t.target = t.targetNode, e = E(t), a.has(e.observer) || a.set(e.observer, new Set), a.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), v(E(t), "unobserve", (function(e) {
							! function(e, t) {
								if (a.has(e.observer)) {
									var n = a.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), a.delete(e.observer)))
								}
							}(E(t), e)
						})), v(E(t), "externalUnobserve", (function() {
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
						return null != e ? r.a.cloneElement(r.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, s
				}(r.a.Component);
			v(C, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function o() {}
			o.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, o, i) {
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
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, s = null == e ? 0 : e.length; ++n < s;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return s(e, (function(e, s, r) {
					return n = !!t(e, s, r)
				})), n
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayEvery.js"),
				r = n("./node_modules/lodash/_baseEvery.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				c = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var a = i(e) ? s : r;
				return n && c(e, t, n) && (t = void 0), a(e, o(t, 3))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				c = Math.min,
				a = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && r(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
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

			function c(e) {
				return e instanceof o(e).Element || e instanceof Element
			}

			function a(e) {
				return e instanceof o(e).HTMLElement || e instanceof HTMLElement
			}

			function d(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (c(e) ? e.ownerDocument : e.document).documentElement
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
				var s, c, p = l(t),
					b = r(e),
					f = a(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					E = {
						x: 0,
						y: 0
					};
				return (f || !f && !n) && (("body" !== d(t) || m(p)) && (h = (s = t) !== o(s) && a(s) ? {
					scrollLeft: (c = s).scrollLeft,
					scrollTop: c.scrollTop
				} : i(s)), a(t) ? ((E = r(t)).x += t.clientLeft, E.y += t.clientTop) : p && (E.x = u(p))), {
					x: b.left + h.scrollLeft - E.x,
					y: b.top + h.scrollTop - E.y,
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

			function E(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : a(t) && m(t) ? t : e(h(t))
					}(e),
					s = "body" === d(n),
					r = o(n),
					i = s ? [r].concat(r.visualViewport || [], m(n) ? n : []) : n,
					c = t.concat(i);
				return s ? c : c.concat(E(h(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function _(e) {
				return a(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = o(e), n = _(e); n && v(n) && "static" === p(n).position;) n = _(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); a(t) && ["html", "body"].indexOf(d(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var x = "top",
				y = "bottom",
				g = "right",
				S = "left",
				C = "auto",
				I = [x, y, g, S],
				j = "start",
				T = "end",
				k = "clippingParents",
				P = "viewport",
				A = "popper",
				N = "reference",
				L = I.reduce((function(e, t) {
					return e.concat([t + "-" + j, t + "-" + T])
				}), []),
				R = [].concat(I, [C]).reduce((function(e, t) {
					return e.concat([t, t + "-" + j, t + "-" + T])
				}), []),
				D = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function w(e) {
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
			var M = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function F() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function U(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					s = void 0 === n ? [] : n,
					r = t.defaultOptions,
					o = void 0 === r ? M : r;
				return function(e, t, n) {
					void 0 === n && (n = o);
					var r, i, a = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, M), o),
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
								p(), a.options = Object.assign(Object.assign(Object.assign({}, o), a.options), n), a.scrollParents = {
									reference: c(e) ? E(e) : e.contextElement ? E(e.contextElement) : [],
									popper: E(t)
								};
								var r = function(e) {
									var t = w(e);
									return D.reduce((function(e, n) {
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
								return a.orderedModifiers = r.filter((function(e) {
									return e.enabled
								})), a.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										s = void 0 === n ? {} : n,
										r = e.effect;
									if ("function" == typeof r) {
										var o = r({
											state: a,
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
									var e = a.elements,
										t = e.reference,
										n = e.popper;
									if (F(t, n)) {
										a.rects = {
											reference: b(t, O(n), "fixed" === a.options.strategy),
											popper: f(n)
										}, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(e) {
											return a.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var s = 0; s < a.orderedModifiers.length; s++)
											if (!0 !== a.reset) {
												var r = a.orderedModifiers[s],
													o = r.fn,
													i = r.options,
													c = void 0 === i ? {} : i,
													d = r.name;
												"function" == typeof o && (a = o({
													state: a,
													options: c,
													name: d,
													instance: u
												}) || a)
											} else a.reset = !1, s = -1
									}
								}
							},
							update: (r = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(a)
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
					if (!F(e, t)) return u;

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
			var B = {
				passive: !0
			};

			function G(e) {
				return e.split("-")[0]
			}

			function W(e) {
				return e.split("-")[1]
			}

			function Y(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function H(e) {
				var t, n = e.reference,
					s = e.element,
					r = e.placement,
					o = r ? G(r) : null,
					i = r ? W(r) : null,
					c = n.x + n.width / 2 - s.width / 2,
					a = n.y + n.height / 2 - s.height / 2;
				switch (o) {
					case x:
						t = {
							x: c,
							y: n.y - s.height
						};
						break;
					case y:
						t = {
							x: c,
							y: n.y + n.height
						};
						break;
					case g:
						t = {
							x: n.x + n.width,
							y: a
						};
						break;
					case S:
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
				var d = o ? Y(o) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case j:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case T:
							t[d] = Math.floor(t[d]) + Math.ceil(n[l] / 2 - s[l] / 2)
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

			function V(e) {
				var t, n = e.popper,
					s = e.popperRect,
					r = e.placement,
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
					h = S,
					E = x,
					v = window;
				if (d) {
					var _ = O(n);
					_ === o(n) && (_ = l(n)), r === x && (E = y, m -= _.clientHeight - s.height, m *= a ? 1 : -1), r === S && (h = g, p -= _.clientWidth - s.width, p *= a ? 1 : -1)
				}
				var C, I = Object.assign({
					position: c
				}, d && q);
				return a ? Object.assign(Object.assign({}, I), {}, ((C = {})[E] = f ? "0" : "", C[h] = b ? "0" : "", C.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", C)) : Object.assign(Object.assign({}, I), {}, ((t = {})[E] = f ? m + "px" : "", t[h] = b ? p + "px" : "", t.transform = "", t))
			}
			var z = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return z[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function Z(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function J(e, t) {
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
					var t = o(e),
						n = l(e),
						s = t.visualViewport,
						r = n.clientWidth,
						i = n.clientHeight,
						c = 0,
						a = 0;
					return s && (r = s.width, i = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (c = s.offsetLeft, a = s.offsetTop)), {
						width: r,
						height: i,
						x: c + u(e),
						y: a
					}
				}(e)) : a(t) ? function(e) {
					var t = r(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Q(function(e) {
					var t = l(e),
						n = i(e),
						s = e.ownerDocument.body,
						r = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						o = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						c = -n.scrollLeft + u(e),
						a = -n.scrollTop;
					return "rtl" === p(s || t).direction && (c += Math.max(t.clientWidth, s ? s.clientWidth : 0) - r), {
						width: r,
						height: o,
						x: c,
						y: a
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = E(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && a(e) ? O(e) : e;
						return c(n) ? t.filter((function(e) {
							return c(e) && J(e, n)
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
					a = void 0 === i ? k : i,
					d = n.rootBoundary,
					u = void 0 === d ? P : d,
					p = n.elementContext,
					m = void 0 === p ? A : p,
					b = n.altBoundary,
					f = void 0 !== b && b,
					h = n.padding,
					E = void 0 === h ? 0 : h,
					v = te("number" != typeof E ? E : ne(E, I)),
					_ = m === A ? N : A,
					O = e.elements.reference,
					S = e.rects.popper,
					C = e.elements[f ? _ : m],
					j = ee(c(C) ? C : C.contextElement || l(e.elements.popper), a, u),
					T = r(O),
					L = H({
						reference: T,
						element: S,
						strategy: "absolute",
						placement: o
					}),
					R = Q(Object.assign(Object.assign({}, S), L)),
					D = m === A ? R : T,
					w = {
						top: j.top - D.top + v.top,
						bottom: D.bottom - j.bottom + v.bottom,
						left: j.left - D.left + v.left,
						right: D.right - j.right + v.right
					},
					M = e.modifiersData.offset;
				if (m === A && M) {
					var F = M[o];
					Object.keys(w).forEach((function(e) {
						var t = [g, y].indexOf(e) >= 0 ? 1 : -1,
							n = [x, y].indexOf(e) >= 0 ? "y" : "x";
						w[e] += F[n] * t
					}))
				}
				return w
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
				return [x, g, y, S].some((function(t) {
					return e[t] >= 0
				}))
			}
			var ce = U({
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
								c = s.resize,
								a = void 0 === c || c,
								d = o(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, B)
								})), a && d.addEventListener("resize", n.update, B),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, B)
									})), a && d.removeEventListener("resize", n.update, B)
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
								s = n.gpuAcceleration,
								r = void 0 === s || s,
								o = n.adaptive,
								i = void 0 === o || o,
								c = {
									placement: G(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: r
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), V(Object.assign(Object.assign({}, c), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), V(Object.assign(Object.assign({}, c), {}, {
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
								a(r) && d(r) && (Object.assign(r.style, n), Object.keys(s).forEach((function(e) {
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
										a(s) && d(s) && (Object.assign(s.style, o), Object.keys(r).forEach((function(e) {
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
								i = R.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var s = G(e),
											r = [S, x].indexOf(s) >= 0 ? -1 : 1,
											o = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = o[0],
											c = o[1];
										return i = i || 0, c = (c || 0) * r, [S, g].indexOf(s) >= 0 ? {
											x: c,
											y: i
										} : {
											x: i,
											y: c
										}
									}(n, t.rects, o), e
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
								for (var r = n.mainAxis, o = void 0 === r || r, i = n.altAxis, c = void 0 === i || i, a = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, b = void 0 === m || m, f = n.allowedAutoPlacements, h = t.options.placement, E = G(h), v = a || (E === h || !b ? [K(h)] : function(e) {
										if (G(e) === C) return [];
										var t = K(e);
										return [Z(e), t, Z(t)]
									}(h)), _ = [h].concat(v).reduce((function(e, n) {
										return e.concat(G(n) === C ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												r = n.boundary,
												o = n.rootBoundary,
												i = n.padding,
												c = n.flipVariations,
												a = n.allowedAutoPlacements,
												d = void 0 === a ? R : a,
												l = W(s),
												u = (l ? c ? L : L.filter((function(e) {
													return W(e) === l
												})) : I).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: r,
														rootBoundary: o,
														padding: i
													})[G(n)], t
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
									}), []), O = t.rects.reference, T = t.rects.popper, k = new Map, P = !0, A = _[0], N = 0; N < _.length; N++) {
									var D = _[N],
										w = G(D),
										M = W(D) === j,
										F = [x, y].indexOf(w) >= 0,
										U = F ? "width" : "height",
										B = se(t, {
											placement: D,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										Y = F ? M ? g : S : M ? y : x;
									O[U] > T[U] && (Y = K(Y));
									var H = K(Y),
										q = [];
									if (o && q.push(B[w] <= 0), c && q.push(B[Y] <= 0, B[H] <= 0), q.every((function(e) {
											return e
										}))) {
										A = D, P = !1;
										break
									}
									k.set(D, q)
								}
								if (P)
									for (var V = function(e) {
											var t = _.find((function(t) {
												var n = k.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return A = t, "break"
										}, z = b ? 3 : 1; z > 0; z--) {
										if ("break" === V(z)) break
									}
								t.placement !== A && (t.modifiersData[s]._skip = !0, t.placement = A, t.reset = !0)
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
								c = void 0 !== i && i,
								a = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								b = n.tetherOffset,
								h = void 0 === b ? 0 : b,
								E = se(t, {
									boundary: a,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								v = G(t.placement),
								_ = W(t.placement),
								C = !_,
								I = Y(v),
								T = "x" === I ? "y" : "x",
								k = t.modifiersData.popperOffsets,
								P = t.rects.reference,
								A = t.rects.popper,
								N = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								L = {
									x: 0,
									y: 0
								};
							if (k) {
								if (o) {
									var R = "y" === I ? x : S,
										D = "y" === I ? y : g,
										w = "y" === I ? "height" : "width",
										M = k[I],
										F = k[I] + E[R],
										U = k[I] - E[D],
										B = m ? -A[w] / 2 : 0,
										H = _ === j ? P[w] : A[w],
										q = _ === j ? -A[w] : -P[w],
										V = t.elements.arrow,
										z = m && V ? f(V) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = K[R],
										Z = K[D],
										J = re(0, P[w], z[w]),
										Q = C ? P[w] / 2 - B - J - X - N : H - J - X - N,
										$ = C ? -P[w] / 2 + B + J + Z + N : q + J + Z + N,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === I ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][I] : 0,
										oe = k[I] + Q - ne - te,
										ie = k[I] + $ - ne,
										ce = re(m ? Math.min(F, oe) : F, M, m ? Math.max(U, ie) : U);
									k[I] = ce, L[I] = ce - M
								}
								if (c) {
									var ae = "x" === I ? x : S,
										de = "x" === I ? y : g,
										le = k[T],
										ue = re(le + E[ae], le, le - E[de]);
									k[T] = ue, L[T] = ue - le
								}
								t.modifiersData[s] = L
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
								i = G(n.placement),
								c = Y(i),
								a = [S, g].indexOf(i) >= 0 ? "height" : "width";
							if (r && o) {
								var d = n.modifiersData[s + "#persistent"].padding,
									l = f(r),
									u = "y" === c ? x : S,
									p = "y" === c ? y : g,
									m = n.rects.reference[a] + n.rects.reference[c] - o[c] - n.rects.popper[a],
									b = o[c] - n.rects.reference[c],
									h = O(r),
									E = h ? "y" === c ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									v = m / 2 - b / 2,
									_ = d[u],
									C = E - l[a] - d[p],
									I = E / 2 - l[a] / 2 + v,
									j = re(_, I, C),
									T = c;
								n.modifiersData[s] = ((t = {})[T] = j, t.centerOffset = j - I, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								r = n.element,
								o = void 0 === r ? "[data-popper-arrow]" : r,
								i = n.padding,
								c = void 0 === i ? 0 : i;
							null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && J(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[s + "#persistent"] = {
								padding: te("number" != typeof c ? c : ne(c, I))
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
								c = se(t, {
									altBoundary: !0
								}),
								a = oe(i, s),
								d = oe(c, r, o),
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
				ae = n("./node_modules/react-fast-compare/index.js"),
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
		"./src/graphql/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"00d537d082f7"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"a752c721a60b"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"8dfeb66985eb"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"8f930296d14d"}')
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

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const a = (e, t, n) => (s = (() => {})) => r => {
				const o = p(r.target, r.currentTarget),
					c = m(r.target, r.currentTarget);
				o && n && t && (u(r.target, r.currentTarget, l.anchors) ? n(t(e, o, c)) : n(n => {
					const s = t(e, o, c)(n);
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
					} = t, l = Object(s.useCallback)(a(i, o, n), [i, o, n]);
					return r.a.createElement(e, c({}, d, {
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
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
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
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				a = "EDIT_EVENT_TIME_SUCCESS"
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
				return O
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "e", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/lib/constants/index.ts"),
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
				E = n("./src/reddit/selectors/inFeedChaining.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts");
			const O = "FEED_CHAINING__CHAIN_LOADED",
				x = Object(i.a)(O),
				y = e => {
					const t = Date.now() - e,
						n = Object(b.y)();
					return Object.keys(n).filter(e => n[e].when >= t).map(e => n[e])
				},
				g = ({
					listingName: e,
					listingKey: t,
					postId: n
				}) => async (s, i, u) => {
					if (!n) return;
					const h = Object(v.P)(i(), {
						postId: n
					});
					if (!h) return;
					const O = h.name.toLowerCase(),
						g = e === O;
					if (!(e === m.f || e === m.b || g)) return;
					if (g) return void T(h, t, n)(s, i, u);
					0 === y(o.hb).length && Object(b.pb)(!1);
					let S = i();
					if (Object(E.d)(S, {
							listingKey: t,
							postId: n
						}) || Object(E.a)(S).length >= p.a || Object(b.K)() || y(o.x).length >= p.a) return;
					const C = Object(v.t)(S, {
						listingKey: t,
						postId: n
					});
					if (C && C.isSponsored) return;
					await s(Object(a.g)()), S = i();
					const I = Object(E.b)(S, {
						listingName: e
					});
					if (!I) return;
					if (!h || Object(E.e)(S, {
							subredditId: h.id
						}) || (e => {
							return y(o.x).some(t => t.subredditId === e)
						})(h.id)) return;
					const j = {
						subredditIds: [h.id],
						count: p.b
					};
					await s(Object(d.b)(j));
					const k = Object(d.a)(j);
					S = i();
					const P = Object(_.v)(S, {
						key: k
					});
					0 !== P.length ? (await s((e => async (t, n) => {
						const s = o.Ub.DAY.toUpperCase(),
							r = e.filter(e => {
								const t = Object(c.a)(e, o.P.TOP, {
										t: s
									}),
									r = n();
								return 0 === Object(v.w)(r, {
									listingKey: t
								}).length
							});
						await t(Object(l.b)({
							first: 1,
							range: s,
							sort: o.I.TOP,
							subredditNames: r
						}))
					})(P.map(e => e.name))), S = i(), Object(E.f)(S, {
						postId: n
					}).length < p.c ? Object(r.a)(Object(f.c)(I, "other", h)(S)) : (Object(b.a)(n, h.id), Object(r.a)(Object(f.d)(I, h)(S)), s(x({
						listingKey: t,
						postId: n
					})))) : Object(r.a)(Object(f.c)(I, "no_chaining", h)(S))
				}, S = "FEED_CHAINING__CHAIN_TOGGLED", C = (Object(i.a)(S), "FEED_CHAINING__CHAINING_TOGGLED"), I = Object(i.a)(C), j = () => async e => {
					Object(b.pb)(!0), e(I({
						isDismissed: !0
					})), e(Object(u.f)(Object(u.e)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), h.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(b.pb)(!1), e(I({
							isDismissed: !1
						}))
					})))
				}, T = (e, t, n) => async (e, t, n) => {}
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
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return y
			}));
			const s = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				a = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				p = "UPDATE_COLLECTION_SUCCESS",
				m = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				f = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				E = "REORDER_COLLECTION_PENDING",
				v = "REORDER_COLLECTION_SUCCESS",
				_ = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				x = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				y = "UPDATE_COLLECTION_LAYOUT_FAILED"
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
						E = Object(u.t)(r, {
							key: o
						});
					if (h || E.length > 0) return;
					t(m({
						key: o
					}));
					const v = await ((e, t) => Object(a.a)(Object(d.a)(e, [l.a]), {
						data: {
							sr_fullnames: t.subredditIds.join(","),
							limit: t.count,
							variant: t.variant
						},
						endpoint: `${e.apiUrl}/api/similar_subreddits.json`,
						method: c.cb.GET
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
				return G
			})), n.d(t, "a", (function() {
				return W
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeLinkedPostsListingKey/index.ts"),
				i = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/googleQASchema/constants.ts");
			const a = Object(r.a)(c.b),
				d = Object(r.a)(c.a);
			var l = n("./src/reddit/actions/linkedPosts/constants.ts");
			const u = Object(r.a)(l.b),
				p = Object(r.a)(l.a);
			var m = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				b = n("./src/lib/makeGqlRequest/index.ts"),
				f = (n("./src/graphql/operations/OtherDiscussions.json"), n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				h = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = n("./src/reddit/models/Post/index.ts");
			var O = ({
				getState: e,
				onFailure: t,
				onSuccess: n,
				postId: s,
				response: r
			}) => {
				if (!r.ok) return void t(r.error);
				const o = r.body,
					{
						post: c
					} = o && o.data,
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
									if (s && s.type === _.a.Post && s.postInfo) {
										const e = Object(h.e)(s.postInfo);
										t.posts[e.id] = e
									}
									return Object(_.k)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(E.a)(e.profile)) : Object(_.l)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(v.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(f.a)(e.subreddit))), n.id
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
					meta: a.meta,
					postFlair: {},
					postId: s,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const x = Object(r.a)(m.a),
				y = Object(r.a)(m.b),
				g = Object(r.a)(m.c);
			var S = n("./src/reddit/actions/subreddit/constants.ts"),
				C = n("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				I = (n("./src/graphql/operations/SubredditPosts.json"), n("./src/graphql/operations/SubredditsPosts.json"));
			var j = ({
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
			var T = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					postId: s,
					post: r
				}) => {
					try {
						const n = [],
							i = {},
							c = {};
						if (!r || !r.linked) return;
						const a = e(),
							d = a.posts && a.posts.models,
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
							if (Object(_.l)(e)) {
								const {
									subreddit: t
								} = e;
								c[t.id] = Object(v.a)(t)
							}
						}
						t({
							dist: r.linked.posts && r.linked.posts.dist || null,
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
				k = n("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var P = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var A = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					options: r,
					subreddit: o
				}) => {
					try {
						if (!o) return;
						const n = o.elements || o.posts,
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
						const d = Object(k.a)(a),
							{
								range: l,
								sort: u,
								subredditName: p
							} = r,
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
				L = n("./src/reddit/selectors/posts.ts"),
				R = n("./src/reddit/actions/imageOCRAltText/constants.ts");
			const D = Object(r.a)(R.b),
				w = Object(r.a)(R.a),
				M = Object(r.a)(S.k),
				F = Object(r.a)(S.j),
				U = Object(r.a)(S.s),
				B = Object(r.a)(S.r),
				G = e => async (t, n, {
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
						c = [];
					try {
						for (const e of r.data.subredditsInfoByNames) {
							const t = e.elements.edges[0];
							t && Object(_.l)(t.node) && A({
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
						t(U(c))
					} catch (a) {
						t(B(a))
					}
				}, W = e => async (t, n, {
					gqlContext: r
				}) => {
					var c;
					const {
						includePostImageOCRAltText: l,
						includeListingBelowExperiment: m,
						includeOtherDiscussions: f,
						includePostFeed: h,
						includePostQASchemaEligibilityFlag: E,
						postId: v,
						range: _,
						sort: S,
						subredditName: I
					} = e, k = Object(i.a)(v, null, {
						isOtherDiscussions: !0
					}), P = n(), R = Object(L.w)(P, {
						listingKey: k
					}), U = f && (!R || 0 === R.length), B = Object(i.a)(I, s.P[S], {
						t: _
					}), G = Object(L.w)(P, {
						listingKey: B
					}), W = h && (!G || 0 === G.length), Y = Object(o.a)(v), H = Object(L.w)(P, {
						listingKey: Y
					}), q = m && (!H || 0 === H.length), V = Object(L.D)(P, {
						postId: v
					}), z = l && !!V && !!V.media && (Object(N.H)(V.media) || Object(N.F)(V.media)) && !V.media.altText;
					if (!(U || W || q || z || E)) return;
					U && t(g({
						key: k
					}));
					const K = await ((e, t) => Object(b.a)(e, {
							...C,
							variables: t
						}))(r(), e),
						X = K.body;
					E && (K.ok ? X.data && X.data.post && t(a({
						postId: v,
						isEligibleForQASchema: null !== (c = X.data.post.isEligibleForQASchema) && void 0 !== c && c
					})) : t(d())), U && O({
						getState: n,
						onFailure: e => t(x(e)),
						onSuccess: e => t(y(e)),
						postId: v,
						response: K
					}), W && (K.ok ? X.data && A({
						getState: n,
						onFailure: e => t(F(e)),
						onSuccess: e => t(M(e)),
						options: e,
						subreddit: X.data.subreddit
					}) : t(F(K.error))), q && K.ok && T({
						getState: n,
						onFailure: e => t(p(e)),
						onSuccess: e => t(u(e)),
						postId: v,
						post: X.data.post
					}), z && K.ok && j({
						getState: n,
						onFailure: e => t(w(e)),
						onSuccess: e => t(D(e)),
						postId: v,
						post: X.data.post
					})
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "i", (function() {
				return o
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "k", (function() {
				return O
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				r = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				v = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				O = "USERFLAIR_FETCH_SUCCESS"
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
				c = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(a);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: r
				} = e, {
					source: a,
					callToAction: l,
					caption: u
				} = t;
				if (!a || !a.url) return null;
				let p = a.displayText;
				return a.displayText.length >= 40 && (p = a.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !r && o.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), o.a.createElement(c.a, {
					href: a.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: a,
					className: d.a.displayUrl
				}, p)), l && o.a.createElement(i.a, {
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
				c = n("./src/reddit/components/CallToActionButton/index.m.less"),
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
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement(i.a, d({
				className: Object(o.a)(e, a.a.CallToActionButton, {
					[a.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const c = 5;

			function a(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, a = Object(o.e)(e => e.subreddits.questions), d = Object(o.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = n[r],
						t = d[e].belongsTo.id;
					m(e) && r - o >= c && !u.has(t) && (o = r, u.add(t), r === l && (p = !0))
				}
				return p ? r.a.createElement(i.a, {
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
			}) => r.a.createElement(c.a, l({}, t, {
				className: Object(o.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(o.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(c.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
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
				return r.a.createElement("div", {
					className: Object(o.a)(m.a.container, e, {
						[m.a.isCompact]: !!t
					})
				}, r.a.createElement(b, {
					className: m.a.eventMetaWrapper
				}, r.a.createElement(a.a, {
					post: n
				}), !c && p && r.a.createElement(d.a, {
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
				E = b.a.span("PostEventNowText", m.a),
				v = b.a.span("Container", m.a),
				_ = b.a.wrapped(l.a, "CalendarIcon", m.a),
				O = b.a.wrapped(u.a, "LiveIcon", m.a),
				x = b.a.div("LoadingState", m.a);
			class y extends s.Component {
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
							r = new Date(e * c.Hb);
						let d;
						return s === o.a.Live || n ? i.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (s === o.a.Future ? d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(o.b)(e) >= 5 ? a(r) : r.toLocaleDateString(void 0, {
							weekday: "long"
						}) : s === o.a.Past && (d = Object(o.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : a(r)), `${d} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(r)}`)
					}(u, s, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						m = r.a.createElement(x, {
							className: e
						})
					}
					if (l) b = r.a.createElement(E, null, r.a.createElement(O, null), m);
					else if (p === o.a.Future) b = r.a.createElement(f, null, r.a.createElement(_, null), m);
					else {
						if (p !== o.a.Past) return null;
						b = r.a.createElement(h, null, r.a.createElement(_, null), m)
					}
					return r.a.createElement(v, {
						className: e
					}, b)
				}
			}
			t.a = y
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
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
					type: Object(l.g)(m) ? a.a.PROFILE : a.a.SUBREDDIT
				},
				postId: t.id,
				small: !0
			})), r.a.createElement(c.a, {
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
				E = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				v = n("./src/reddit/components/FlairWrapper/index.tsx"),
				_ = n("./src/reddit/components/Flatlist/index.tsx"),
				O = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = n("./src/reddit/components/ModModeReports/index.tsx"),
				y = n("./src/reddit/components/ModModeReports/helpers.ts"),
				g = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = n("./src/reddit/components/PostContainer/index.tsx"),
				C = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				I = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = n("./src/reddit/components/PostTitle/index.tsx"),
				T = n("./src/reddit/components/PostTopLine/index.tsx"),
				k = n("./src/reddit/components/PostTopMeta/index.tsx"),
				P = n("./src/reddit/components/SourceLink/index.tsx"),
				A = n("./src/reddit/constants/experiments.ts"),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				R = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				D = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				w = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = n("./src/reddit/models/Vote/index.ts"),
				U = n("./src/reddit/contexts/Post/index.tsx"),
				B = n("./src/reddit/selectors/experiments/categories.ts"),
				G = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				W = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				Y = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				H = n("./src/reddit/hooks/useIsOverlay.ts"),
				q = n("./src/reddit/hooks/useUserContext.ts"),
				V = n("./src/reddit/selectors/inFeedChaining.ts"),
				z = n("./src/reddit/selectors/moderatorPermissions.ts"),
				K = n("./src/reddit/selectors/postFlair.ts"),
				X = n("./src/reddit/selectors/posts.ts"),
				Z = n("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				J = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = n.n(J),
				$ = n("./src/reddit/components/MediumPost/index.m.less"),
				ee = n.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = () => Object(i.c)({
					crosspost: X.d,
					flairStyleTemplate: N.S,
					isActive: X.j,
					isCurrentUserProfilePost: X.k,
					isPostChainDismissed: V.c,
					isPostChained: V.d,
					listingBelowVariant: W.b,
					moderatorPermissions: z.j,
					showAwardsPlaque: G.a,
					showEditFlair: K.a,
					showMedia: N.r,
					isInCategoriesExperiment: B.a
				}),
				se = e => {
					const {
						className: t,
						crosspost: n,
						currentUser: i,
						eventFactory: N,
						flairStyleTemplate: U,
						hideNSFWPref: B,
						hostPostId: G,
						inSubredditOrProfile: W = !1,
						isActionBarAnimationEnabled: H,
						isCheckboxSelected: q,
						isCommentsPage: V,
						isCurrentUserProfilePost: z,
						isFrontpage: K,
						isOverlay: X,
						isPostChainDismissed: J,
						isPostChained: $,
						isTopicPage: te,
						imageGalleryCurrentItem: ne,
						listingBelowVariant: se,
						listingKey: re,
						listingName: oe,
						moderatorPermissions: ie,
						modModeEnabled: ce,
						onClickPost: ae,
						post: de,
						postId: le,
						postIds: ue,
						redditStyle: pe,
						shouldHideFlair: me,
						showAwardsPlaque: be,
						showBulkActionCheckbox: fe,
						showEditFlair: he,
						showMedia: Ee,
						sendEvent: ve,
						subredditOrProfile: _e,
						toggleCheckbox: Oe
					} = e, xe = Object(o.d)(), ye = Object(s.useCallback)(() => {
						oe && re && xe(Object(d.d)({
							listingKey: re,
							listingName: oe,
							postId: le
						}))
					}, [xe, re, oe, le]), ge = e => e === F.a.upvoted ? xe(Object(l.U)(le)) : xe(Object(l.r)(le)), Se = () => xe(Object(l.S)(le)), Ce = pe ? void 0 : U, Ie = Object(w.a)(ie), je = ce && Ie, Te = Object(R.a)(ie), ke = Object(D.a)(ie), Pe = Object(y.c)(de), Ae = !!se && !Object(A.Dd)(se), Ne = Object(L.a)(de), Le = W && !Ee && !Ae, Re = Le && !!de.source && !n, De = !(K && i || te) && !z && (!W || Ae), we = (!W || Ae) && !de.isSponsored, Me = Object(c.t)(de, ne), {
						source: Fe
					} = Me, Ue = r.a.createElement(S.a, {
						className: Object(a.a)(ee.a.container, t, Q.a.largeAndMediumPostStyles, Q.a.largeAndMediumActiveStyles, Object(M.a)(e), {
							[Q.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: X,
						style: Object(M.b)(e.flairStyleTemplate),
						post: de,
						onClick: ae,
						onPostContentClick: ye,
						eventFactory: N
					}, r.a.createElement(I.a, {
						model: de,
						handleVote: ge,
						showBulkActionCheckbox: fe,
						isCheckboxSelected: q,
						toggleCheckbox: Oe,
						flairStyleTemplate: Ce,
						redditStyle: pe,
						subreddit: _e,
						isActionBarAnimationEnabled: H,
						postId: le
					}), r.a.createElement(g.a, {
						className: ee.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: Ce,
						post: de,
						redditStyle: pe
					}, r.a.createElement(E.a, {
						post: de
					}), r.a.createElement("article", {
						className: ee.a.mainBody
					}, r.a.createElement("div", {
						className: ee.a.content,
						"data-click-id": "body"
					}, r.a.createElement(T.a, {
						className: ee.a.postTopLine,
						hideAwards: be,
						hideNSFWPref: B,
						hostPostId: G,
						iconClassName: ee.a.postTopLineIcon,
						inSubredditOrProfile: W,
						isCommentsPage: V,
						isCurrentUserProfilePost: z,
						isOverlay: !!X,
						isTopicPage: !!te,
						listingKey: re,
						post: de,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Re,
						showSubreddit: we,
						showSubredditIcon: !0,
						subredditOrProfile: _e
					}), r.a.createElement(j.c, {
						className: ee.a.postTitle,
						post: de,
						redditStyle: pe,
						size: j.b.Large,
						titleColor: Ce && Ce.postTitleColor,
						isOverlay: X
					}), V && !me && (de.flair && de.flair.length > 0 || e.isInCategoriesExperiment) && r.a.createElement(v.a, {
						className: Object(a.a)(V && ee.a.leftPadding),
						disableFlair: !V,
						post: de,
						sendEvent: ve,
						showCategoryTag: e.isInCategoriesExperiment && V
					}), de.source && !de.isSponsored && !n && r.a.createElement(P.a, {
						className: ee.a.sourceLink,
						isCommentsPage: V,
						post: de
					})), !Le && Ne && r.a.createElement(Z.a, {
						crosspost: n ? de : void 0,
						hasModPostPerms: Ie,
						isCommentsPage: V,
						isOverlay: X,
						modModeEnabled: ce,
						post: n || de,
						redditStyle: pe,
						shouldShowSubscribeButton: De,
						subredditOrProfile: _e,
						templatePlaceholderImage: Ce && Ce.postPlaceholderImage
					})), de.isSponsored && Fe && Fe.url && r.a.createElement(p.a, {
						className: ee.a.adLinkWrapper
					}, r.a.createElement(m.a, {
						post: de,
						adLinkContent: Me
					})), ce && Ie && Pe && r.a.createElement(x.a, {
						className: ee.a.modModeReports,
						onIgnoreReports: Se,
						reportable: de
					}), r.a.createElement(O.d, null), be && r.a.createElement(b.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: V,
						thing: de,
						tooltipType: X ? k.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: ee.a.flatlistContainer
					}, r.a.createElement(f.a, {
						className: ee.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ce,
						redditStyle: pe,
						model: de,
						onVoteClick: ge
					}), r.a.createElement(_.c, {
						currentUser: i,
						hasModFlairPerms: Te,
						hasModFullPerms: ke,
						hasModPostPerms: Ie,
						hostPostId: G,
						isActionBarAnimationEnabled: H,
						isOverlay: !!X,
						listingKey: re,
						modModeEnabled: ce,
						onIgnoreReports: Se,
						onOpenReportsDropdown: e => xe(Object(u.h)({
							tooltipId: e
						})),
						post: de,
						showEditFlair: he,
						tooltipType: X ? k.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(C.h)({
							editPost: !je,
							save: !je,
							hide: !1,
							report: !1
						})
					}))), K && r.a.createElement(Y.a, {
						post: de,
						postIds: null != ue ? ue : [],
						subredditId: null == _e ? void 0 : _e.id
					}));
					return r.a.createElement(r.a.Fragment, null, Ue, $ && !J && r.a.createElement(h.a, {
						className: ee.a.chain,
						listingKey: re,
						listingName: oe,
						postId: de.id
					}))
				};
			t.default = Object(U.b)(r.a.memo((function(e) {
				const t = Object(s.useMemo)(() => ne(), []),
					n = Object(o.e)(n => t(n, e), o.c),
					i = Object(q.a)();
				return r.a.createElement(se, te({}, e, n, {
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/ModModeReports/index.m.less"),
				a = n.n(c);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", a.a), u = i.a.div("Placeholder", a.a), p = () => o.a.createElement(u, null, o.a.createElement(l, null, d._("Loading reports…", null, {
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
				} = e, [h, E] = Object(r.useState)(!0), v = Object(b.b)(n.id, f), _ = Object(i.d)(), O = Object(m.a)(), x = Object(b.a)(n, f), y = (e, s) => O(Object(p.a)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					x && y("modal", "show")
				}, [x]);
				if (!x || !h) return null;
				const g = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return o.a.createElement(l.a, {
					id: v,
					title: g,
					onClose: () => {
						E(!1), y("close", "click"), _(Object(a.A)()), _(Object(a.L)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						_(Object(a.A)())
					}
				}, o.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", o.a.createElement(c.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), o.a.createElement(u.a, {
					onClick: () => (E(!1), y("report", "click"), void _(Object(d.c)(n.id)))
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
				} = e, [E, v] = Object(o.useState)(s.Survey), _ = Object(f.b)(n.id, h), O = Object(c.d)(), x = Object(b.a)(), y = Object(f.a)(n, h), g = (e, s) => x(Object(m.b)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					y && g("modal", "show")
				}, [y]);
				const S = e => {
					v(s.Closed), g("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), O(Object(l.c)(n.id, void 0, e))
				};
				if (!y) return null;
				let C = null;
				const I = {
					id: _,
					title: r.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(s.Closed), g("close", "click"), O(Object(d.A)())
					},
					onClickOutside: () => {
						O(Object(d.A)())
					}
				};
				switch (E) {
					case s.Survey:
						C = i.a.createElement(u.a, I, i.a.createElement("p", null, r.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [r.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(s.OffTopic), g("off_topic", "click")
							}
						}, r.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(s.DontLike), g("dont_like", "click")
							}
						}, r.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								v(s.BreaksRules), g("breaks_rules", "click")
							}
						}, r.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						C = i.a.createElement(u.a, I, i.a.createElement("p", null, r.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						C = i.a.createElement(u.a, I, i.a.createElement("p", null, r.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						C = i.a.createElement(u.a, I, i.a.createElement("p", null, r.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [r.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, r.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), r.fbt._param("=community", i.a.createElement(a.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, r.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => S("site")
						}, r.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => S("community")
						}, r.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case s.Closed:
				}
				return C
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
				r = n.n(s),
				o = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(o);

			function c(e) {
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
				c = n("./src/reddit/hooks/useOnClickOutside.ts"),
				a = n("./src/reddit/components/Popup/index.m.less"),
				d = n.n(a);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: s,
					title: o,
					children: a
				} = e;
				return Object(c.a)(t, s), r.a.createElement("div", {
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
				}, "✕")), a)
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
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				E = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				v = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				_ = n("./src/reddit/models/AutomatedReporting/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				S = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				C = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				I = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = n("./src/reddit/icons/fonts/Report/index.tsx"),
				T = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				k = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				P = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				A = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = n("./src/reddit/components/PostBadges/index.m.less"),
				L = n.n(N);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const D = e => o.a.createElement("span", R({
					className: L.a.removalReason
				}, e), e.children),
				w = () => s.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				M = () => s.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				F = e => s.fbt._("Moderator of {community name}", [s.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				U = () => s.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				B = () => s.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				G = (e, t, n) => {
					const s = `PostBadges--${e}--${t}`;
					return n ? `${s}--${n}` : s
				},
				W = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				Y = Object(c.c)({
					isPinned: (e, {
						post: t
					}) => Object(x.o)(e, {
						postId: t.id
					}),
					modModeEnabled: b.Q
				}),
				H = Object(i.b)(Y, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = W(H(({
				className: e,
				displayText: t,
				isSubreddit: n,
				inSubredditOrProfile: i,
				isCompactPinnedPost: c,
				isPinned: l,
				isProfilePostListing: b,
				modModeEnabled: x,
				onHideTooltip: N,
				onOpenRemovalReasonModal: W,
				onShowTooltip: Y,
				post: H,
				tooltipType: q
			}) => {
				const V = Object(v.a)(),
					z = {
						caretOnTop: !1
					},
					K = H.isRemoved && !H.modRemovalReason && !H.modNote && H.belongsTo.type === m.a.SUBREDDIT,
					X = G("Approve", H.id, q),
					Z = G("Archived", H.id, q),
					J = G("Automod", H.id, q),
					Q = G("Lock", H.id, q),
					$ = G("Mod", H.id, q),
					ee = G("Remove", H.id, q),
					te = G("Report", H.id, q),
					ne = G("Spam", H.id, q),
					se = G("Sticky", H.id, q),
					re = G("Pinned", H.id, q),
					oe = H.bannedBy && Object(_.b)(H.bannedBy);
				return o.a.createElement("div", {
					className: e
				}, i && t && H.distinguishType === d.C.MODERATOR && o.a.createElement(r.Fragment, null, V ? o.a.createElement(y.a, {
					name: "mod",
					isFilled: !0,
					className: Object(a.a)(L.a.icon, L.a.modIcon)
				}) : o.a.createElement(A.a, {
					className: Object(a.a)(L.a.icon, L.a.modIcon),
					desc: F(t),
					id: $,
					onMouseEnter: Y($),
					onMouseLeave: N
				}), o.a.createElement(u.c, R({
					tooltipId: $,
					text: F(t)
				}, z))), H.isArchived && o.a.createElement(r.Fragment, null, o.a.createElement(S.a, {
					isFilled: V,
					className: Object(a.a)(L.a.icon, L.a.archivedIcon),
					desc: w(),
					id: Z,
					onMouseEnter: Y(Z),
					onMouseLeave: N
				}), o.a.createElement(u.c, R({
					tooltipId: Z,
					text: w()
				}, z))), H.isLocked && o.a.createElement(r.Fragment, null, o.a.createElement(C.a, {
					isFilled: V,
					className: Object(a.a)(L.a.icon, L.a.lockIcon),
					desc: M(),
					id: Q,
					onMouseEnter: Y(Q),
					onMouseLeave: N
				}), o.a.createElement(u.c, R({
					tooltipId: Q,
					text: M()
				}, z))), n && Object(O.p)(H) && !c && o.a.createElement(r.Fragment, null, o.a.createElement(k.a, {
					isFilled: V,
					className: Object(a.a)(L.a.icon, L.a.stickyIcon),
					desc: U(),
					id: se,
					onMouseEnter: Y(se),
					onMouseLeave: N
				}), o.a.createElement(u.c, R({
					tooltipId: se,
					text: U()
				}, z))), b && l && o.a.createElement(r.Fragment, null, o.a.createElement(k.a, {
					isFilled: V,
					className: Object(a.a)(L.a.icon, L.a.stickyIcon),
					desc: B(),
					id: re,
					onMouseEnter: Y(re),
					onMouseLeave: N
				}), o.a.createElement(u.c, R({
					tooltipId: re,
					text: B()
				}, z))), (H.isApproved || H.approvedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(g.a, {
					isFilled: V,
					className: Object(a.a)(L.a.icon, L.a.approveIcon),
					desc: Object(h.a)(H),
					id: X,
					onMouseEnter: Y(X),
					onMouseLeave: N
				}), o.a.createElement(u.c, R({
					tooltipId: X,
					text: Object(h.a)(H)
				}, z))), Object(f.a)(H) && !oe && o.a.createElement(r.Fragment, null, o.a.createElement(I.a, {
					isFilled: V,
					className: Object(a.a)(L.a.icon, L.a.removeIcon),
					desc: Object(h.c)(H),
					id: ee,
					onMouseEnter: Y(ee),
					onMouseLeave: N
				}), K && o.a.createElement(p.a, {
					className: L.a.addRemovalReason,
					onClick: W,
					text: s.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (H.modRemovalReason || H.modNote) && o.a.createElement(D, {
					onMouseEnter: Y(ee),
					onMouseLeave: N
				}, s.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), o.a.createElement(u.c, R({
					tooltipId: ee,
					text: Object(h.c)(H)
				}, z))), H.bannedBy && H.isSpam && o.a.createElement(r.Fragment, null, o.a.createElement(T.a, {
					isFilled: V,
					className: Object(a.a)(L.a.icon, L.a.spamIcon),
					desc: Object(h.e)(H),
					id: ne,
					onMouseEnter: Y(ne),
					onMouseLeave: N
				}), o.a.createElement(u.c, R({
					tooltipId: ne,
					text: Object(h.e)(H)
				}, z))), ("AutoModerator" === H.approvedBy || "AutoModerator" === H.bannedBy) && o.a.createElement(r.Fragment, null, V ? o.a.createElement(y.a, {
					name: "bot",
					isFilled: !0,
					className: Object(a.a)(L.a.icon, L.a.automoderator, !!H.bannedBy && L.a.isRemoved)
				}) : o.a.createElement(P.a, {
					className: Object(a.a)(L.a.icon, L.a.automoderator, !!H.bannedBy && L.a.isRemoved),
					desc: h.b,
					id: J,
					onMouseEnter: Y(J),
					onMouseLeave: N
				}), o.a.createElement(u.c, R({
					tooltipId: J,
					text: h.b
				}, z))), oe && o.a.createElement("div", {
					className: L.a.removalReason
				}, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", oe)], {
					hk: "3C408F"
				})), Object(E.a)(H) && !x && o.a.createElement(r.Fragment, null, o.a.createElement(j.a, {
					isFilled: V,
					className: Object(a.a)(L.a.icon, L.a.reportIcon),
					desc: Object(h.d)(H.numReports),
					id: te,
					onMouseEnter: Y(te),
					onMouseLeave: N
				}), o.a.createElement(u.c, R({
					tooltipId: te,
					text: Object(h.d)(H.numReports)
				}, z))))
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
				c = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/helpers/trackers/gallery.ts"),
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
								s >= .5 && n(a.d(e.postId))
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
				f = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/lib/classNames/index.ts"),
				E = n("./src/lib/objectSelector/index.ts"),
				v = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = n("./src/reddit/components/PostContainer/index.m.less"),
				O = n.n(_);
			const x = Object(m.a)(() => Object(o.c)({
					basePixelMetadata: Object(E.a)((e, {
						post: t
					}) => Object(f.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(f.i)(e, {
						postId: t.id
					})
				})),
				y = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						n = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && n
				};
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: p,
						onPostContentClick: m,
						sendEvent: f,
						style: E,
						ref: v
					} = this.props, _ = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: E,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => p && p(n, l, t, o))(n), m && y(n) && m(n, l)), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && f(Object(a.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(O.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), x = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || x ? r.a.createElement(c.a, {
						post: l,
						trackDisplay: !0
					}, _) : l.media && Object(b.E)(l.media) ? r.a.createElement(u, {
						postId: l.id
					}, _) : _
				}
			}
			t.a = x(Object(v.c)(Object(p.c)(g)))
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
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
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
					let c = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && r && (c = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
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
				r = n.n(s),
				o = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
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
					redditStyle: E,
					subreddit: v,
					isOverlay: _,
					isActionBarAnimationEnabled: O,
					postId: x,
					isForceSelected: y
				} = e, g = `upvote-button-${t.id}${_?"-overlay":""}`, {
					moderationPrompt: S
				} = t;
				return r.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: E
				}, s && r.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: f
				}), r.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: E,
					upvoteTooltipId: g,
					isActionBarAnimationEnabled: O,
					postId: x,
					isForceSelected: y,
					scoreClassName: b.a.score
				}), S && r.a.createElement(c.b, {
					rightOf: g
				}, "survey" === S ? r.a.createElement(i.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!_
				}) : r.a.createElement(o.a, {
					post: t,
					subredditName: v.name,
					isOverlay: !!_
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
				E = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Subreddit/index.ts"),
				O = n("./src/reddit/components/PostTopLine/index.m.less"),
				x = n.n(O);
			const y = n("./src/lib/lessComponent.tsx").a.div("Container", x.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: n,
					hideAwards: s,
					hideNSFWPref: O,
					hostPostId: g,
					iconClassName: S,
					inSubredditOrProfile: C,
					isCommentsPage: I,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: T,
					isOverlay: k,
					isTopicPage: P,
					listingKey: A,
					post: N,
					shouldShowSubscribeButton: L,
					showCornerOutboundLink: R,
					showSubreddit: D,
					showSubredditIcon: w,
					subredditOrProfile: M
				} = e, F = s || P;
				return r.a.createElement(y, {
					className: t
				}, D && M && r.a.createElement("div", {
					className: x.a.subredditIconWrapper
				}, r.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: M.url
				}, w && r.a.createElement(l.b, {
					className: Object(o.a)(x.a.subredditIcon, S),
					shouldHideNsfwIcon: O,
					subredditOrProfile: M
				}))), r.a.createElement("div", {
					className: x.a.everythingElseWrapper
				}, D && r.a.createElement(c.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(d.d, {
					className: x.a.postTopMeta,
					flairStyleTemplate: n,
					tooltipType: k ? d.c.Lightbox : void 0,
					post: N,
					showSub: D,
					subredditOrProfile: M
				}), r.a.createElement(a.a, {
					className: x.a.postBadges,
					displayText: M ? M.displayText : null,
					inSubredditOrProfile: C,
					isCompactPinnedPost: j,
					post: N,
					tooltipType: k ? d.c.Lightbox : void 0
				}), !F && r.a.createElement(i.a, {
					isPostDetail: I,
					thing: N,
					tooltipType: k ? d.c.Lightbox : void 0
				})), M && D && L && !T && r.a.createElement(p.a, {
					className: x.a.SubscribeButton,
					getEventFactory: e => Object(h.f)(N.id, e ? "unsubscribe" : "subscribe", "post", A, g),
					identifier: {
						name: M.name,
						type: Object(_.g)(M) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: N.id,
					size: b.c.XS
				}), R && r.a.createElement(f.b, {
					className: x.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(v.D)(e.post),
					source: N.source
				}, r.a.createElement(E.a, {
					className: x.a.outboundLinkIcon
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
				c = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				l = n("./src/reddit/components/SourceLink/index.m.less"),
				u = n.n(l),
				p = n("./src/lib/lessComponent.tsx");
			const m = p.a.wrapped(d.a, "OutboundLinkIcon", u.a),
				b = p.a.div("SourceLinkWrapper", u.a);

			function f(e) {
				const t = Object(a.a)(),
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
				}, r.a.createElement(c.a, {
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
				c = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
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
			const E = f.a.wrapped(l.a, "Checkmark", b.a),
				v = ({
					isFilled: e,
					...t
				}) => r.a.createElement(E, t),
				_ = f.a.wrapped(u.a, "Plus", b.a),
				O = ({
					isFilled: e,
					...t
				}) => r.a.createElement(_, t),
				x = f.a.div("ButtonSpacer", b.a);
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
						[c.a.Icons]: e
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
							getEventFactory: E,
							onSubscriptionsRequested: _,
							...O
						} = this.props, x = this.state.isHovered, y = Object(p.a)({
							type: n.type,
							key: x ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(a.q, h({
							className: t,
							priority: O.shouldReverseColor ? a.b.Primary : a.b.Secondary,
							Icon: u || !u && !x ? e ? e => r.a.createElement(d.a, h({
								name: "checkmark"
							}, e)) : v : void 0,
							text: !u && y,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: m || (u ? a.c.XS : a.c.S)
						}, O))
					}, this.renderSubscribeButton = ({
						[c.a.Icons]: e
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
							getEventFactory: E,
							onSubscriptionsRequested: v,
							..._
						} = this.props, x = Object(p.a)({
							type: n.type,
							key: "subscribe"
						});
						return r.a.createElement(a.q, h({
							className: t,
							priority: _.shouldReverseColor ? a.b.Secondary : a.b.Primary,
							Icon: e ? e => r.a.createElement(d.a, h({
								name: "add"
							}, e)) : O,
							size: m || (u ? a.c.XS : a.c.S),
							text: !u && x,
							onClick: this.onClick
						}, _, {
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
					return t ? this.state.hasJustSubscribed || n ? r.a.createElement(c.b.Consumer, null, this.renderUnsubscribeButton) : e ? null : r.a.createElement(x, null) : r.a.createElement(c.b.Consumer, null, this.renderSubscribeButton)
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
						let r = "";
						return r = e ? s ? l.a.mDisabledRedditStyle : l.a.mDisabled : s ? l.a.mActiveRedditStyle : l.a.mActive
					})(s, i, c);
					return r.a.createElement(e, u({
						className: Object(o.a)(l.a.CheckboxIcon, d, n)
					}, a))
				},
				m = p(a.a),
				b = p(c.a);
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
				c = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(o.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
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
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function r(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(s.e)(n));
				return t
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
				return c
			})), n.d(t, "d", (function() {
				return a
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
				c = e => {
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
				a = e => s.fbt._({
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
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.E.NO_STRIPE_SUBSCRIPTION:
							case s.E.USER_DOESNT_EXIST:
							case s.E.USER_REQUIRED_ERROR:
							case s.E.VALIDATION_ERROR:
								return e;
							case s.E.NO_USER:
							case s.E.NO_TEXT:
							case s.E.NO_URL:
								return s.E.VALIDATION_ERROR;
							case s.E.CREDIT_CARD_FAILURE:
							case s.E.CREDIT_CARD_FAILURE_GENERIC:
								return s.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.E.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
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
				return E
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				E = e => {
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
				return _
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "E", (function() {
				return S
			})), n.d(t, "F", (function() {
				return C
			})), n.d(t, "M", (function() {
				return j
			})), n.d(t, "B", (function() {
				return T
			})), n.d(t, "C", (function() {
				return k
			})), n.d(t, "D", (function() {
				return P
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "x", (function() {
				return L
			})), n.d(t, "L", (function() {
				return R
			})), n.d(t, "K", (function() {
				return D
			})), n.d(t, "I", (function() {
				return w
			})), n.d(t, "v", (function() {
				return M
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "z", (function() {
				return U
			})), n.d(t, "A", (function() {
				return B
			})), n.d(t, "N", (function() {
				return G
			})), n.d(t, "J", (function() {
				return W
			})), n.d(t, "t", (function() {
				return Y
			})), n.d(t, "H", (function() {
				return H
			})), n.d(t, "d", (function() {
				return q
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "b", (function() {
				return z
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "e", (function() {
				return X
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
				return re
			})), n.d(t, "q", (function() {
				return oe
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "j", (function() {
				return ce
			})), n.d(t, "u", (function() {
				return ae
			})), n.d(t, "G", (function() {
				return de
			}));
			var s, r = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
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
						title: t.title && n ? Object(r.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				E = (e, t, n) => ({
					...h(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				v = (e, t) => {
					Object(b.a)(_(t)(e))
				},
				_ = (e, t) => n => E(n, e, t),
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
				x = (e, t, n, r, o) => ({
					...O(e, t, r, o),
					action: "view",
					noun: s.ITEM_POST,
					post: p.post(e, n)
				}),
				y = ({
					post: e,
					rawQuery: t,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? p.StructureType.PromotedTrend : p.StructureType.Trending
				});
			var g;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(g || (g = {}));
			const S = (e, t, n) => {
					Object(b.a)(I(e, t, n, i.c.CLICK))
				},
				C = (e, t, n) => {
					Object(b.a)(I(e, t, n, i.c.VIEW))
				},
				I = (e, t, n, s) => {
					const r = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...p.defaults(e),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: y(t),
						discoveryUnit: n === g.POPULAR_CAROUSEL ? {
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
							queryId: s === i.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				j = (e, t, n, s, r, o, c) => {
					Object(b.a)({
						...p.defaults(e),
						...Object(a.e)(e, n, s, r, o, t),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				T = (e, t, n, s) => {
					Object(b.a)(x(e, t, n, s))
				},
				k = (e, t, n, s) => r => x(r, e, t, n, s),
				P = (e, t, n, r) => {
					const o = O(e, t, r);
					Object(b.a)({
						...o,
						...Object(m.b)(e, n),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				A = (e, t) => {
					Object(b.a)({
						...h(e, t),
						source: f,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				N = (e, t, n, s) => {
					Object(b.a)(L(t, n, s)(e))
				},
				L = (e, t, n, r) => o => {
					return {
						...O(o, e, n, r),
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_POST,
						post: p.post(o, t)
					}
				},
				R = (e, t, n, s) => r => o => Object(a.e)(o, r, e, t, n, s),
				D = (e, t, n, s) => r => o => Object(a.d)(o, e, t, void 0, n, r, s),
				w = (e, t, n, s) => r => o => ({
					...Object(a.e)(o, r, e, t, n, s),
					noun: "ad"
				}),
				M = (e, t) => n => r => ({
					...e ? h(r, e, t) : {},
					source: f,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: p.post(r, n)
				}),
				F = (e, t, n, s) => {
					Object(b.a)(U(t, n, s)(e))
				},
				U = (e, t, n, s) => r => {
					const o = Object(u.c)(r, {
							postId: t
						}),
						c = o ? Object(m.b)(r, o) : void 0;
					return {
						...O(r, e, n, s),
						...c,
						source: f,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: p.post(r, t)
					}
				},
				B = (e, t, n) => s => r => {
					const o = Object(u.c)(r, {
							postId: t
						}),
						c = o ? Object(m.b)(r, o) : void 0;
					return {
						...O(r, e, void 0, n),
						...c,
						source: f,
						action: i.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: p.post(r, t)
					}
				},
				G = (e, t, n) => {
					const s = O(e, t);
					Object(b.a)({
						...s,
						...Object(m.b)(e, n),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				W = (e, t, n, s, r, o) => {
					Object(b.a)({
						...p.defaults(e),
						...Object(a.d)(e, t, n, s, r, void 0, o)
					})
				},
				Y = (e, t, n) => {
					const s = O(e, t);
					Object(b.a)({
						...s,
						...Object(m.b)(e, n),
						source: f,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				H = (e, t) => n => {
					const s = Object(l.j)(t);
					return {
						...h(n, e, t),
						...Object(m.b)(n, s),
						source: f,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				q = (e, t) => n => ({
					...h(n, e, t),
					action: "status",
					actionInfo: p.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				V = (e, t, n) => s => ({
					...h(s, e, n),
					action: "status",
					actionInfo: p.actionInfo(s, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				z = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "close"
				}),
				K = (e, t, n) => s => ({
					...O(s, e, t, n),
					action: "click",
					noun: "scroll"
				}),
				X = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				Z = () => ({
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
				J = (e, t, n) => p.actionInfo(e, {
					position: n
				}),
				Q = (e, t, n) => {
					const s = Z();
					return e => ({
						...E(e, s),
						actionInfo: J(e, 0, n),
						subreddit: p.subredditById(e, t)
					})
				},
				$ = (e, t, n) => {
					const s = Z();
					return e => ({
						...x(e, s, t),
						actionInfo: J(e, 0, n)
					})
				},
				ee = (e, t, n) => {
					const r = Z();
					return e => ({
						...h(e, r),
						actionInfo: J(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				te = (e, t, n) => {
					const r = Z();
					return e => ({
						...h(e, r),
						actionInfo: J(e, 0, n),
						post: p.post(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				ne = (e, t, n, r) => {
					const o = Z();
					return e => ({
						...h(e, o),
						actionInfo: J(e, 0, r),
						subreddit: p.subredditById(e, n) || null,
						post: p.post(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				se = (e, t, n) => {
					const r = Z();
					return e => ({
						...h(e, r),
						actionInfo: J(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				re = (e, t, n, r) => {
					const o = Z();
					return e => ({
						...h(e, o),
						actionInfo: J(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: r ? p.post(e, r) : null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				oe = (e, t, n, r) => {
					const o = Z();
					return e => ({
						...h(e, o),
						actionInfo: J(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						post: r ? p.post(e, r) : null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ie = (e, t, n) => {
					const r = Z();
					return e => ({
						...h(e, r),
						actionInfo: J(e, 0, n),
						subreddit: p.subredditById(e, t) || null,
						source: f,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ce = (e, t, n) => {
					const r = Z();
					return e => ({
						...h(e, r),
						actionInfo: J(e, 0, n),
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
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/parseUrl.ts"),
				o = n("./src/reddit/selectors/media.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, n) => ({
					gallery: i.gallery(e, t, n),
					post: i.post(e, t),
					...i.defaults(e)
				}),
				a = (e, t) => n => ({
					...c(n, e, t),
					action: s.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.media(n, e)
				}),
				d = (e, t) => n => {
					const a = Object(r.a)(t),
						d = Object(o.b)(n, e) + 1;
					return {
						...c(n, e, d),
						action: s.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.media(n, e),
							outboundUrl: t,
							outboundDomain: a ? a.hostname : void 0
						}
					}
				},
				l = (e, t) => p(e, !0, t),
				u = (e, t) => p(e, !1, t),
				p = (e, t, n) => r => ({
					...c(r, e, n),
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
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/InsideOverlay.tsx");

			function o() {
				return Object(s.useContext)(r.a)
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("archived", e.isFilled), a.a.archivedIcon, e.className),
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
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				a = n.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("lock", e.isFilled), a.a.lockIcon, e.className),
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
				c = n.n(i);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", c.a);
			t.a = a
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
				c = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(c.a.chevron, e.className),
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, r, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[s.Loyalty]: o.a.First,
					[s.Achievement]: o.a.Second,
					[s.Cosmetic]: void 0
				},
				c = e => e === o.a.First ? s.Loyalty : e === o.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "p", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				r = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var c, a, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(c || (c = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(a || (a = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === o.c.AvailableRedditor,
				p = e => e.__typename === r.a.Subreddit;
			var m, b, f, h;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(m || (m = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(h || (h = {}));
			const E = e => b[h[e]],
				v = e => h[b[e]],
				_ = e => f[b[e]],
				O = e => b[f[e]],
				x = e => h[f[e]];
			var y;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(y || (y = {}));
			const g = e => {
					switch (e) {
						case y.Hourly:
						case y.Daily:
						case y.Weekly:
						case y.Monthly:
							return !0
					}
					return !1
				},
				S = "custom",
				C = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(s.a)(e)
					}
				},
				I = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const o = {
				status: s.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case r.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case r.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case r.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === c.a.First ? s[a.a.Loyalty][r] : s[a.a.Achievement][r] : l(e) ? s[a.a.Cosmetic][a.c.MyBadges][r] : s[a.a.Cosmetic][a.c.Gallery][r]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function p(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function m(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(p).sort((e, n) => {
					const s = t[e.id],
						r = t[n.id];
					return Object(i.b)(s, r)
				})
			}

			function b(e) {
				const t = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						r = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[a.a.Loyalty][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][n] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
					collections: {
						[a.a.Loyalty]: m(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: m(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: m(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: m(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
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
				return Object(o.H)(e) || s.A.Treatment1 === Object(r.c)(e, {
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
					experimentName: s.sb
				});
				return !(!t || Object(s.Dd)(t))
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
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeListingKey/index.ts"),
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
						const s = Object(l.P)(e, {
							postId: n
						});
						return !!s && s.id === t
					})
				},
				E = (e, {
					subredditName: t
				}) => {
					const n = r.Ub.DAY.toUpperCase(),
						s = Object(o.a)(t, r.P.TOP, {
							t: n
						}),
						i = Object(l.w)(e, {
							listingKey: s
						});
					if (0 !== i.length)
						for (const r of i) {
							const t = Object(l.D)(e, {
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
							const n = Object(l.D)(e, {
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
							name: r
						} of n) {
						const t = E(e, {
							subredditName: r
						});
						t && s.push(t.id)
					}
					return s
				},
				_ = (e, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.af0dc7cf7d0e33f96cd0.js.map