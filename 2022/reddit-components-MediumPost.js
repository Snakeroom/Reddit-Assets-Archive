// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.497a67250fae176b3d68.js
// Retrieved at 2/15/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
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

			function d(e) {
				return e instanceof s(e).HTMLElement || e instanceof HTMLElement
			}

			function c(e) {
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
					b = d(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== c(t) || m(p)) && (h = (r = t) !== s(r) && d(r) ? {
					scrollLeft: (a = r).scrollLeft,
					scrollTop: a.scrollTop
				} : i(r)), d(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : p && (v.x = u(p))), {
					x: f.left + h.scrollLeft - v.x,
					y: f.top + h.scrollTop - v.y,
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
				return "html" === c(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function v(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(c(t)) >= 0 ? t.ownerDocument.body : d(t) && m(t) ? t : e(h(t))
					}(e),
					r = "body" === c(n),
					o = s(n),
					i = r ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return r ? a : a.concat(v(h(i)))
			}

			function x(e) {
				return ["table", "td", "th"].indexOf(c(e)) >= 0
			}

			function y(e) {
				return d(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function g(e) {
				for (var t = s(e), n = y(e); n && x(n) && "static" === p(n).position;) n = y(n);
				return n && "body" === c(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = h(e); d(t) && ["html", "body"].indexOf(c(t)) < 0;) {
						var n = p(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var O = "top",
				j = "bottom",
				w = "right",
				P = "left",
				E = "auto",
				S = [O, j, w, P],
				T = "start",
				k = "end",
				C = "clippingParents",
				A = "viewport",
				N = "popper",
				M = "reference",
				_ = S.reduce((function(e, t) {
					return e.concat([t + "-" + T, t + "-" + k])
				}), []),
				I = [].concat(S, [E]).reduce((function(e, t) {
					return e.concat([t, t + "-" + T, t + "-" + k])
				}), []),
				B = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function L(e) {
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
					var o, i, d = {
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
						c = [],
						l = !1,
						u = {
							state: d,
							setOptions: function(n) {
								p(), d.options = Object.assign(Object.assign(Object.assign({}, s), d.options), n), d.scrollParents = {
									reference: a(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
									var t = L(e);
									return B.reduce((function(e, n) {
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
								}([].concat(r, d.options.modifiers)));
								return d.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), d.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var s = o({
											state: d,
											name: t,
											instance: u,
											options: r
										});
										c.push(s || function() {})
									}
								})), u.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = d.elements,
										t = e.reference,
										n = e.popper;
									if (R(t, n)) {
										d.rects = {
											reference: f(t, g(n), "fixed" === d.options.strategy),
											popper: b(n)
										}, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach((function(e) {
											return d.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < d.orderedModifiers.length; r++)
											if (!0 !== d.reset) {
												var o = d.orderedModifiers[r],
													s = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													c = o.name;
												"function" == typeof s && (d = s({
													state: d,
													options: a,
													name: c,
													instance: u
												}) || d)
											} else d.reset = !1, r = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									u.forceUpdate(), e(d)
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
						c.forEach((function(e) {
							return e()
						})), c = []
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

			function q(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function H(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					s = o ? W(o) : null,
					i = o ? q(o) : null,
					a = n.x + n.width / 2 - r.width / 2,
					d = n.y + n.height / 2 - r.height / 2;
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
					case w:
						t = {
							x: n.x + n.width,
							y: d
						};
						break;
					case P:
						t = {
							x: n.x - r.width,
							y: d
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var c = s ? V(s) : null;
				if (null != c) {
					var l = "y" === c ? "height" : "width";
					switch (i) {
						case T:
							t[c] = Math.floor(t[c]) - Math.floor(n[l] / 2 - r[l] / 2);
							break;
						case k:
							t[c] = Math.floor(t[c]) + Math.ceil(n[l] / 2 - r[l] / 2)
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

			function J(e) {
				var t, n = e.popper,
					r = e.popperRect,
					o = e.placement,
					i = e.offsets,
					a = e.position,
					d = e.gpuAcceleration,
					c = e.adaptive,
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
					h = P,
					v = O,
					x = window;
				if (c) {
					var y = g(n);
					y === s(n) && (y = l(n)), o === O && (v = j, m -= y.clientHeight - r.height, m *= d ? 1 : -1), o === P && (h = w, p -= y.clientWidth - r.width, p *= d ? 1 : -1)
				}
				var E, S = Object.assign({
					position: a
				}, c && z);
				return d ? Object.assign(Object.assign({}, S), {}, ((E = {})[v] = b ? "0" : "", E[h] = f ? "0" : "", E.transform = (x.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", E)) : Object.assign(Object.assign({}, S), {}, ((t = {})[v] = b ? m + "px" : "", t[h] = f ? p + "px" : "", t.transform = "", t))
			}
			var G = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return G[e]
				}))
			}
			var Q = {
				start: "end",
				end: "start"
			};

			function Z(e) {
				return e.replace(/start|end/g, (function(e) {
					return Q[e]
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

			function X(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, t) {
				return t === A ? X(function(e) {
					var t = s(e),
						n = l(e),
						r = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						d = 0;
					return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, d = r.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: d
					}
				}(e)) : d(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : X(function(e) {
					var t = l(e),
						n = i(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						s = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						d = -n.scrollTop;
					return "rtl" === p(r || t).direction && (a += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: s,
						x: a,
						y: d
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && d(e) ? g(e) : e;
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
					d = void 0 === i ? C : i,
					c = n.rootBoundary,
					u = void 0 === c ? A : c,
					p = n.elementContext,
					m = void 0 === p ? N : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					h = n.padding,
					v = void 0 === h ? 0 : h,
					x = te("number" != typeof v ? v : ne(v, S)),
					y = m === N ? M : N,
					g = e.elements.reference,
					P = e.rects.popper,
					E = e.elements[b ? y : m],
					T = ee(a(E) ? E : E.contextElement || l(e.elements.popper), d, u),
					k = o(g),
					_ = H({
						reference: k,
						element: P,
						strategy: "absolute",
						placement: s
					}),
					I = X(Object.assign(Object.assign({}, P), _)),
					B = m === N ? I : k,
					L = {
						top: T.top - B.top + x.top,
						bottom: B.bottom - T.bottom + x.bottom,
						left: T.left - B.left + x.left,
						right: B.right - T.right + x.right
					},
					F = e.modifiersData.offset;
				if (m === N && F) {
					var R = F[s];
					Object.keys(L).forEach((function(e) {
						var t = [w, j].indexOf(e) >= 0 ? 1 : -1,
							n = [O, j].indexOf(e) >= 0 ? "y" : "x";
						L[e] += R[n] * t
					}))
				}
				return L
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
				return [O, w, j, P].some((function(t) {
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
								d = void 0 === a || a,
								c = s(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && l.forEach((function(e) {
									e.addEventListener("scroll", n.update, U)
								})), d && c.addEventListener("resize", n.update, U),
								function() {
									i && l.forEach((function(e) {
										e.removeEventListener("scroll", n.update, U)
									})), d && c.removeEventListener("resize", n.update, U)
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
									placement: W(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), J(Object.assign(Object.assign({}, a), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), J(Object.assign(Object.assign({}, a), {}, {
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
								d(o) && c(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
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
										d(r) && c(r) && (Object.assign(r.style, s), Object.keys(o).forEach((function(e) {
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
								i = I.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = W(e),
											o = [P, O].indexOf(r) >= 0 ? -1 : 1,
											s = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = s[0],
											a = s[1];
										return i = i || 0, a = (a || 0) * o, [P, w].indexOf(r) >= 0 ? {
											x: a,
											y: i
										} : {
											x: i,
											y: a
										}
									}(n, t.rects, s), e
								}), {}),
								a = i[t.placement],
								d = a.x,
								c = a.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = i
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
								for (var o = n.mainAxis, s = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, d = n.fallbackPlacements, c = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, h = t.options.placement, v = W(h), x = d || (v === h || !f ? [K(h)] : function(e) {
										if (W(e) === E) return [];
										var t = K(e);
										return [Z(e), t, Z(t)]
									}(h)), y = [h].concat(x).reduce((function(e, n) {
										return e.concat(W(n) === E ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												s = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												d = n.allowedAutoPlacements,
												c = void 0 === d ? I : d,
												l = q(r),
												u = (l ? a ? _ : _.filter((function(e) {
													return q(e) === l
												})) : S).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: s,
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
											padding: c,
											flipVariations: f,
											allowedAutoPlacements: b
										}) : n)
									}), []), g = t.rects.reference, k = t.rects.popper, C = new Map, A = !0, N = y[0], M = 0; M < y.length; M++) {
									var B = y[M],
										L = W(B),
										F = q(B) === T,
										R = [O, j].indexOf(L) >= 0,
										D = R ? "width" : "height",
										U = re(t, {
											placement: B,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: c
										}),
										V = R ? F ? w : P : F ? j : O;
									g[D] > k[D] && (V = K(V));
									var H = K(V),
										z = [];
									if (s && z.push(U[L] <= 0), a && z.push(U[V] <= 0, U[H] <= 0), z.every((function(e) {
											return e
										}))) {
										N = B, A = !1;
										break
									}
									C.set(B, z)
								}
								if (A)
									for (var J = function(e) {
											var t = y.find((function(t) {
												var n = C.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return N = t, "break"
										}, G = f ? 3 : 1; G > 0; G--) {
										if ("break" === J(G)) break
									}
								t.placement !== N && (t.modifiersData[r]._skip = !0, t.placement = N, t.reset = !0)
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
								d = n.boundary,
								c = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								h = void 0 === f ? 0 : f,
								v = re(t, {
									boundary: d,
									rootBoundary: c,
									padding: u,
									altBoundary: l
								}),
								x = W(t.placement),
								y = q(t.placement),
								E = !y,
								S = V(x),
								k = "x" === S ? "y" : "x",
								C = t.modifiersData.popperOffsets,
								A = t.rects.reference,
								N = t.rects.popper,
								M = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								_ = {
									x: 0,
									y: 0
								};
							if (C) {
								if (s) {
									var I = "y" === S ? O : P,
										B = "y" === S ? j : w,
										L = "y" === S ? "height" : "width",
										F = C[S],
										R = C[S] + v[I],
										D = C[S] - v[B],
										U = m ? -N[L] / 2 : 0,
										H = y === T ? A[L] : N[L],
										z = y === T ? -N[L] : -A[L],
										J = t.elements.arrow,
										G = m && J ? b(J) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										Q = K[I],
										Z = K[B],
										Y = oe(0, A[L], G[L]),
										X = E ? A[L] / 2 - U - Y - Q - M : H - Y - Q - M,
										$ = E ? -A[L] / 2 + U + Y + Z + M : z + Y + Z + M,
										ee = t.elements.arrow && g(t.elements.arrow),
										te = ee ? "y" === S ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][S] : 0,
										se = C[S] + X - ne - te,
										ie = C[S] + $ - ne,
										ae = oe(m ? Math.min(R, se) : R, F, m ? Math.max(D, ie) : D);
									C[S] = ae, _[S] = ae - F
								}
								if (a) {
									var de = "x" === S ? O : P,
										ce = "x" === S ? j : w,
										le = C[k],
										ue = oe(le + v[de], le, le - v[ce]);
									C[k] = ue, _[k] = ue - le
								}
								t.modifiersData[r] = _
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
								i = W(n.placement),
								a = V(i),
								d = [P, w].indexOf(i) >= 0 ? "height" : "width";
							if (o && s) {
								var c = n.modifiersData[r + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? O : P,
									p = "y" === a ? j : w,
									m = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d],
									f = s[a] - n.rects.reference[a],
									h = g(o),
									v = h ? "y" === a ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									x = m / 2 - f / 2,
									y = c[u],
									E = v - l[d] - c[p],
									S = v / 2 - l[d] / 2 + x,
									T = oe(y, S, E),
									k = a;
								n.modifiersData[r] = ((t = {})[k] = T, t.centerOffset = T - S, t)
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
								padding: te("number" != typeof a ? a : ne(a, S))
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
								d = se(i, r),
								c = se(a, o, s),
								l = ie(d),
								u = ie(c);
							t.modifiersData[n] = {
								referenceClippingOffsets: d,
								popperEscapeOffsets: c,
								isReferenceHidden: l,
								hasPopperEscaped: u
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": u
							})
						}
					}]
				}),
				de = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ce = n.n(de),
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
						d = i[1],
						c = r.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									d({
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
								modifiers: [].concat(s.modifiers, [c, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ce()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, c]),
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
							var a, d, c, l;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (d = a; 0 != d--;)
									if (!e(t[d], i[d])) return !1;
								return !0
							}
							if (r && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!i.has(d.value[0])) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!e(d.value[1], i.get(d.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (l = t.entries(); !(d = l.next()).done;)
									if (!i.has(d.value[0])) return !1;
								return !0
							}
							if (s && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((a = t.length) != i.length) return !1;
								for (d = a; 0 != d--;)
									if (t[d] !== i[d]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((a = (c = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (d = a; 0 != d--;)
								if (!Object.prototype.hasOwnProperty.call(i, c[d])) return !1;
							if (n && t instanceof Element) return !1;
							for (d = a; 0 != d--;)
								if (("_owner" !== c[d] && "__v" !== c[d] && "__o" !== c[d] || !t.$$typeof) && !e(t[c[d]], i[c[d]])) return !1;
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
			n.d(t, "a", (function() {
				return c
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
			const d = (e, t, n) => (r = (() => {})) => o => {
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
						actionInfo: Object(i.R)(n, o)
					}
				})), u(o.target, o.currentTarget, l.anchorsAndButtons) && r(o)
			};

			function c(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: s,
						clickTrackingId: i,
						...c
					} = t, l = Object(r.useCallback)(d(i, s, n), [i, s, n]);
					return o.a.createElement(e, a({}, c, {
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
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");

			function o(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(r.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(r.assoc)(t, "modifiers", i.modifiers)), t
			}

			function d(e) {
				const [t, n] = Object(o.useState)(null), [i, d] = Object(o.useState)(null), [c, l] = Object(o.useState)(null), [u, p] = Object(o.useState)(!1), m = Object(o.useCallback)(async () => p(!0), []), f = Object(o.useCallback)(() => p(!1), []), b = Object(o.useCallback)(() => p(!u), [u]), h = Object(o.useMemo)(() => {
					const t = a(e);
					return c ? Object(r.updateIn)(t, ["modifiers"], e => Object(r.push)(e, {
						name: "arrow",
						options: {
							element: c
						}
					})) : t
				}, [c, e]), {
					attributes: v,
					styles: x,
					update: y
				} = Object(s.a)(t, i, h);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: x.arrow,
						...v.arrow
					},
					hide: f,
					popperProps: {
						ref: d,
						style: x.popper,
						...v.popper
					},
					show: m,
					target: {
						element: t,
						ref: n
					},
					toggle: b,
					visible: u,
					update: y
				}), [l, v, d, f, m, x, t, n, b, u, y])
			}
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
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: d,
					callToAction: l,
					caption: u
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: c.a.leftSideContent
				}, u && !o && s.a.createElement("span", {
					className: c.a.caption,
					title: u
				}, u), s.a.createElement(a.a, {
					href: d.url.replace(r.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && s.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: n,
					subredditId: r
				} = e, d = Object(s.e)(e => e.subreddits.questions), c = Object(s.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let o = 0, s = -999; o <= l; o += 1) {
					const e = n[o],
						t = c[e].belongsTo.id;
					m(e) && o - s >= a && !u.has(t) && (s = o, u.add(t), o === l && (p = !0))
				}
				return p ? o.a.createElement(i.a, {
					subredditId: r,
					inFeed: !0
				}) : null;

				function m(e) {
					var t;
					return (null === (t = d[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
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
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "i", (function() {
				return k
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				d = n.n(a),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(i.c)({
				consumers: e => e.jsApi
			});
			class p extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...r
							}
						} = this;
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? o.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && o.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var m = Object(s.b)(u, {})(p),
				f = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				var n;
				const r = null !== (n = t.comment) && void 0 !== n ? n : Object(b.b)(e, t),
					o = Object(h.G)(e, t);
				return {
					comment: r,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var x = Object(s.b)(() => Object(i.a)(v, f.j, (e, t) => ({
				...e,
				depth: t
			})))(e => o.a.createElement(m, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const y = (e, t) => {
				var n;
				const r = null !== (n = t.comment) && void 0 !== n ? n : Object(b.b)(e, t),
					o = Object(h.G)(e, t);
				return {
					comment: r,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var g = Object(s.b)(() => Object(i.a)(y, e => e))(e => o.a.createElement(m, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var O = Object(s.b)(() => Object(i.c)({
					subreddit: h.R
				}))(e => o.a.createElement(m, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				j = n("./src/reddit/hooks/usePostContext.ts");
			var w = e => {
				const t = Object(j.a)(),
					n = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? o.a.createElement(m, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var P = e => {
				const t = Object(j.a)(),
					n = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? o.a.createElement(m, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var E = e => {
				const t = Object(j.a)(),
					n = Object(r.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? o.a.createElement(m, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var S = Object(s.b)(() => Object(i.c)({
				subreddit: h.R
			}))(e => o.a.createElement(m, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var T = Object(s.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(h.J)(e, {
					identifier: t
				})
			}))(e => o.a.createElement(m, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var k = Object(s.b)(() => Object(i.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(h.R)(e, {
					subredditId: t
				}) : null
			}))(e => o.a.createElement(m, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/NotificationButton/index.tsx"),
				d = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = n("./src/reddit/components/Thumbnail/index.tsx"),
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
				redditStyle: r,
				shouldShowSubscribeButton: f,
				subredditOrProfile: h,
				templatePlaceholderImage: v,
				shouldShowFollowButton: x,
				isFollowed: y,
				isCommentsPage: g,
				onFollowPostClick: O
			}) => {
				return Object(p.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: x || f
					})
				}, o.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, x && o.a.createElement(a.a, {
					isFilled: !!y,
					onClick: O,
					hasTooltip: !0,
					tooltipText: s.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), f && h && o.a.createElement(d.a, {
					className: b.a.subscribeButton,
					getEventFactory: e => Object(u.h)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(m.h)(h) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), o.a.createElement(c.a, {
					crosspost: e,
					isCommentsPage: g,
					post: t,
					redditStyle: r,
					forceShowNSFW: n,
					templatePlaceholderImage: v
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, n) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
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
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				f = n("./src/reddit/components/AwardBadges/index.tsx"),
				b = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				v = n("./src/reddit/components/FlairWrapper/index.tsx"),
				x = n("./src/reddit/components/Flatlist/index.tsx"),
				y = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				O = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				j = n("./src/reddit/components/ModModeReports/index.tsx"),
				w = n("./src/reddit/components/ModModeReports/helpers.ts"),
				P = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				E = n("./src/reddit/components/PostContainer/index.tsx"),
				S = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				T = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				k = n("./src/reddit/components/PostTitle/index.tsx"),
				C = n("./src/reddit/components/PostTopLine/index.tsx"),
				A = n("./src/reddit/components/PostTopMeta/index.tsx"),
				N = n("./src/reddit/components/SourceLink/index.tsx"),
				M = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				I = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				B = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				F = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = n("./src/reddit/models/Vote/index.ts"),
				D = n("./src/reddit/contexts/Post/index.tsx"),
				U = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				W = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				q = n("./src/reddit/hooks/useIsOverlay.ts"),
				V = n("./src/reddit/hooks/useUserContext.ts"),
				H = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				z = n("./src/reddit/selectors/moderatorPermissions.ts"),
				J = n("./src/reddit/selectors/postFlair.ts"),
				G = n("./src/reddit/selectors/posts.ts"),
				K = n("./src/reddit/selectors/showPromotedCTA.ts"),
				Q = n("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Z = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = n.n(Z),
				X = n("./src/reddit/selectors/i18n/index.ts"),
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
			const ne = () => Object(a.c)({
					crosspost: G.d,
					flairStyleTemplate: M.V,
					isActive: G.j,
					isCurrentUserProfilePost: G.l,
					showPromotedCTA: K.a,
					moderatorPermissions: z.l,
					shouldShowNsfwListingBelow: X.b,
					showAwardsPlaque: U.a,
					showEditFlair: J.a,
					showMedia: M.s,
					isInModNotesExperiment: (e, {
						subreddit: t
					}) => !!t && Object(H.a)(e, t.id)
				}),
				re = e => {
					const {
						className: t,
						crosspost: n,
						currentUser: r,
						eventFactory: i,
						flairStyleTemplate: a,
						hideNSFWPref: M,
						hostPostData: D,
						inSubredditOrProfile: U = !1,
						isCheckboxSelected: q,
						isCommentsPage: V,
						isCurrentUserProfilePost: H,
						isFrontpage: z,
						isInModNotesExperiment: J,
						isOverlay: G,
						isTopicPage: K,
						isCommentCountAnimationEnabled: Z,
						isVoteCountAnimationEnabled: X,
						isCountAnimShadowTestEnabled: $,
						imageGalleryCurrentItem: te,
						listingKey: ne,
						moderatorPermissions: re,
						modModeEnabled: oe,
						onClickPost: se,
						post: ie,
						postId: ae,
						postIds: de,
						redditStyle: ce,
						shouldHideFlair: le,
						shouldShowNsfwListingBelow: ue,
						showAwardsPlaque: pe,
						showBulkActionCheckbox: me,
						showEditFlair: fe,
						showMedia: be,
						showPromotedCTA: he,
						sendEvent: ve,
						subredditOrProfile: xe,
						toggleCheckbox: ye,
						isAvatarPostEnabled: ge
					} = e, Oe = Object(s.d)(), je = e => e === R.a.upvoted ? Oe(Object(l.jb)(ae)) : Oe(Object(l.w)(ae)), we = () => Oe(Object(l.fb)(ae)), Pe = ce ? void 0 : a, Ee = Object(L.a)(re), Se = oe && Ee, Te = Object(I.a)(re), ke = Object(B.a)(re), Ce = Object(O.d)(ie), Ae = Object(w.c)(ie), Ne = !!(null == D ? void 0 : D.shouldShowLinkedPosts), Me = ue, _e = Object(_.a)(ie), Ie = U && !be && !Ne && !Me || ge, Be = Ie && !!ie.source && !n, Le = !(z && r || K) && !H && (!U || Ne || Me), Fe = (!U || Ne || Me) && !ie.isSponsored, Re = Object(d.t)(ie, te), {
						source: De
					} = Re;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(E.a, {
						className: Object(c.a)(ee.a.container, t, Y.a.largeAndMediumPostStyles, Y.a.largeAndMediumActiveStyles, Object(F.a)(e), {
							[Y.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: G,
						style: Object(F.b)(e.flairStyleTemplate),
						post: ie,
						onClick: se,
						eventFactory: i
					}, o.a.createElement(T.a, {
						model: ie,
						handleVote: je,
						showBulkActionCheckbox: me,
						isCheckboxSelected: q,
						toggleCheckbox: ye,
						flairStyleTemplate: Pe,
						redditStyle: ce,
						isVoteCountAnimation: X,
						isCountAnimShadowTestEnabled: $,
						postId: ae
					}), o.a.createElement(P.a, {
						className: ee.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: Pe,
						post: ie,
						redditStyle: ce
					}, o.a.createElement(h.a, {
						post: ie
					}), o.a.createElement("article", {
						className: ee.a.mainBody
					}, o.a.createElement("div", {
						className: ee.a.content,
						"data-click-id": "body"
					}, o.a.createElement(C.a, {
						className: ee.a.postTopLine,
						hideAwards: pe,
						hideNSFWPref: M,
						hostPostData: D,
						iconClassName: ee.a.postTopLineIcon,
						inSubredditOrProfile: U,
						isCommentsPage: V,
						isCurrentUserProfilePost: H,
						isInModNotesExperiment: J,
						isOverlay: !!G,
						isTopicPage: !!K,
						listingKey: ne,
						post: ie,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Be,
						showSubreddit: Fe,
						showSubredditIcon: !0,
						subredditOrProfile: xe
					}), o.a.createElement(k.c, {
						className: ee.a.postTitle,
						post: ie,
						redditStyle: ce,
						size: k.b.Large,
						titleColor: Pe && Pe.postTitleColor,
						isOverlay: G
					}), V && !le && ie.flair && ie.flair.length > 0 && o.a.createElement(v.a, {
						className: Object(c.a)(V && ee.a.leftPadding),
						disableFlair: !V,
						post: ie,
						sendEvent: ve
					}), ie.source && !ie.isSponsored && !n && o.a.createElement(N.a, {
						className: ee.a.sourceLink,
						isCommentsPage: V,
						post: ie
					})), !Ie && _e && o.a.createElement(Q.a, {
						crosspost: n ? ie : void 0,
						hasModPostPerms: Ee,
						isCommentsPage: V,
						isOverlay: G,
						modModeEnabled: oe,
						post: n || ie,
						redditStyle: ce,
						shouldShowSubscribeButton: Le,
						subredditOrProfile: xe,
						templatePlaceholderImage: Pe && Pe.postPlaceholderImage
					})), he && De && De.url && o.a.createElement(p.a, {
						className: ee.a.adLinkWrapper
					}, o.a.createElement(m.a, {
						post: ie,
						adLinkContent: Re
					})), oe && Ee && Ce && o.a.createElement("div", {
						className: ee.a.modModeBannerWrapper
					}, o.a.createElement(g.a, {
						thing: ie
					})), oe && Ee && Ae && o.a.createElement("div", {
						className: ee.a.modModeBannerWrapper
					}, o.a.createElement(j.a, {
						onIgnoreReports: we,
						reportable: ie
					})), o.a.createElement(y.d, null), pe && o.a.createElement(f.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: V,
						thing: ie,
						tooltipType: G ? A.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: ee.a.flatlistContainer
					}, o.a.createElement(b.a, {
						className: ee.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Pe,
						redditStyle: ce,
						model: ie,
						onVoteClick: je
					}), o.a.createElement(x.c, {
						currentUser: r,
						hasModFlairPerms: Te,
						hasModFullPerms: ke,
						hasModPostPerms: Ee,
						hostPostData: D,
						isCommentCountAnimation: Z,
						isCountAnimShadowTestEnabled: $,
						isOverlay: !!G,
						listingKey: ne,
						modModeEnabled: oe,
						onIgnoreReports: we,
						onOpenReportsDropdown: e => Oe(Object(u.h)({
							tooltipId: e
						})),
						post: ie,
						showEditFlair: fe,
						tooltipType: G ? A.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(S.b)({
							editPost: !Se,
							save: !Se,
							hide: !1,
							report: !1
						})
					}))), z && o.a.createElement(W.a, {
						post: ie,
						postIds: null != de ? de : [],
						subredditId: null == xe ? void 0 : xe.id
					})))
				};
			t.default = Object(D.b)(o.a.memo((function(e) {
				const t = Object(r.useMemo)(() => ne(), []),
					n = Object(s.e)(n => t(n, e), s.c),
					a = Object(i.a)(e.post),
					d = Object(V.a)();
				return o.a.createElement(re, te({}, e, n, {
					modModeEnabled: d.modModeEnabled,
					hideNSFWPref: d.prefs.hideNSFW,
					isOverlay: Object(q.a)(),
					isAvatarPostEnabled: a
				}))
			})))
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: n,
						onClick: r,
						hasTooltip: c,
						tooltipText: u,
						className: p
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(s.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: r
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), c && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.tsx"),
				c = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: r = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: b,
					redditStyle: h,
					isOverlay: v,
					isVoteCountAnimation: x,
					postId: y,
					shouldShowUpvoteRatioOnHover: g
				} = e, O = `upvote-button-${t.id}${v?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: h
				}, r && o.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), o.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: O,
					isVoteCountAnimation: x,
					isCountAnimShadowTestEnabled: m,
					postId: y,
					scoreClassName: Object(s.a)(p.a.score, {
						[p.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, n) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/AwardBadges/index.tsx"),
				c = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/NotificationButton/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				p = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = n("./src/reddit/constants/posts.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				y = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = n("./src/reddit/models/Media/index.ts"),
				j = n("./src/reddit/models/Subreddit/index.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/PostTopLine/index.m.less"),
				E = n.n(P);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: n,
				hideAwards: o,
				hideNSFWPref: P,
				hostPostData: S,
				iconClassName: T,
				inSubredditOrProfile: k,
				isCommentsPage: C,
				isCompactPinnedPost: A,
				isCurrentUserProfilePost: N,
				isInModNotesExperiment: M,
				isOverlay: _,
				isTopicPage: I,
				listingKey: B,
				post: L,
				shouldShowSubscribeButton: F,
				showCornerOutboundLink: R,
				showSubreddit: D,
				showSubredditIcon: U,
				subredditOrProfile: W,
				isFollowed: q,
				shouldShowFollowButton: V,
				onFollowPostClick: H
			}) => {
				const z = o || I,
					J = W && Object(j.h)(W),
					G = Object(i.e)(e => {
						if (!J) return !0;
						const t = Object(w.yb)(e, L.author || "");
						return !t || t.enableFollowers
					});
				return s.a.createElement("div", {
					className: Object(a.a)(E.a.container, e)
				}, D && W && s.a.createElement("div", {
					className: E.a.subredditIconWrapper
				}, s.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: W.url
				}, U && s.a.createElement(m.b, {
					className: Object(a.a)(E.a.subredditIcon, T),
					shouldHideNsfwIcon: P,
					subredditOrProfile: W
				}))), s.a.createElement("div", {
					className: E.a.everythingElseWrapper
				}, D && s.a.createElement(c.h, {
					type: L.belongsTo.type,
					id: L.belongsTo.id
				}), s.a.createElement(p.d, {
					className: E.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: t,
					isInModNotesExperiment: M,
					tooltipType: _ ? p.c.Lightbox : void 0,
					post: L,
					showSub: D,
					subredditOrProfile: W
				}), s.a.createElement(u.a, {
					className: E.a.postBadges,
					displayText: W ? W.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: A,
					post: L,
					tooltipType: _ ? p.c.Lightbox : void 0
				}), !z && s.a.createElement(d.a, {
					isPostDetail: C,
					thing: L,
					tooltipType: _ ? p.c.Lightbox : void 0
				})), W && G && D && F && !N && s.a.createElement(b.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(y.h)(L.id, e ? "unsubscribe" : "subscribe", "post", B, S),
					identifier: {
						name: W.name,
						type: J ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: L.id,
					size: v.d.XS
				}), R && s.a.createElement(x.b, {
					isSponsored: L.isSponsored,
					postId: L.id,
					href: Object(O.D)(L),
					source: L.source
				}, s.a.createElement(g.a, {
					className: E.a.outboundLinkIcon
				})), V && G && s.a.createElement(l.a, {
					isFilled: !!q,
					onClick: H,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, n) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = n("./src/reddit/components/QuarantinedLabel/index.m.less"),
				p = n.n(u);
			const m = ["center", "top"],
				f = ["center", "bottom"],
				b = a.a.div("Container", p.a),
				h = Object(i.a)(d.b),
				v = Object(c.u)({
					isProfileListingPage: c.I
				});
			class x extends s.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						isProfileListingPage: e
					} = this.props;
					if (!e) return null;
					const {
						showTooltip: t
					} = this.state;
					return s.a.createElement(b, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, s.a.createElement(l.a, {
						className: p.a.quarantineIcon
					}), r.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), s.a.createElement(h, {
						text: r.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: m,
						tooltipPosition: f
					}))
				}
			}
			t.a = v(x)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				s = n.n(o);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", s.a);
			t.a = i
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
				userIsSubscriber: i.db
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(s.d([t], !0)),
				onSubscriptionsRequested: () => e(s.e()),
				onUnsubscribe: () => e(s.d([t], !1))
			}))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = "reddit",
				o = "reddit.ready",
				s = "reddit.urlChanged"
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(s.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(r.f)(n));
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
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
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
					gallery: i.s(e, t, n),
					post: i.J(e, t),
					...i.o(e)
				}),
				d = (e, t) => n => ({
					...a(n, e, t),
					action: r.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.C(n, e)
				}),
				c = (e, t) => n => {
					const d = Object(o.a)(t),
						c = Object(s.b)(n, e) + 1;
					return {
						...a(n, e, c),
						action: r.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.C(n, e),
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
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
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), o.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function o(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
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
					experimentName: r.yc
				});
				return !(!t || Object(r.wf)(t))
			}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: r.pe
				}) === r.cd
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.wf)(t)
				},
				d = Object(r.a)(a, s.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts");
			const o = e => !s(e) && !!e.user.prefs.subscriptionsPinned,
				s = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.Nb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				s = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				d = "/r/redesign/wiki/jsapi";
			var c = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(s.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(c.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${r.a.redditUrl}${d}`, e))
					} catch (n) {
						return void console.error(i, `${r.a.redditUrl}${d}`, n)
					}
					this.store.then(e => {
						e.dispatch(s.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const r = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(r), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(r)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					o.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.497a67250fae176b3d68.js.map