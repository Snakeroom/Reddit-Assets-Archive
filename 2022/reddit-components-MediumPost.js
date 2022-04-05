// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.45898ea5cd6a1c71c305.js
// Retrieved at 4/5/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
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

			function f(e, t, n) {
				void 0 === n && (n = !1);
				var s, a, p = l(t),
					f = o(e),
					b = c(t),
					x = {
						scrollLeft: 0,
						scrollTop: 0
					},
					h = {
						x: 0,
						y: 0
					};
				return (b || !b && !n) && (("body" !== d(t) || m(p)) && (x = (s = t) !== r(s) && c(s) ? {
					scrollLeft: (a = s).scrollLeft,
					scrollTop: a.scrollTop
				} : i(s)), c(t) ? ((h = o(t)).x += t.clientLeft, h.y += t.clientTop) : p && (h.x = u(p))), {
					x: f.left + x.scrollLeft - h.x,
					y: f.top + x.scrollTop - h.y,
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

			function x(e) {
				return "html" === d(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function h(e, t) {
				void 0 === t && (t = []);
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(d(t)) >= 0 ? t.ownerDocument.body : c(t) && m(t) ? t : e(x(t))
					}(e),
					s = "body" === d(n),
					o = r(n),
					i = s ? [o].concat(o.visualViewport || [], m(n) ? n : []) : n,
					a = t.concat(i);
				return s ? a : a.concat(h(x(i)))
			}

			function v(e) {
				return ["table", "td", "th"].indexOf(d(e)) >= 0
			}

			function y(e) {
				return c(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function g(e) {
				for (var t = r(e), n = y(e); n && v(n) && "static" === p(n).position;) n = y(n);
				return n && "body" === d(n) && "static" === p(n).position ? t : n || function(e) {
					for (var t = x(e); c(t) && ["html", "body"].indexOf(d(t)) < 0;) {
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
				w = "left",
				S = "auto",
				k = [O, E, j, w],
				_ = "start",
				P = "end",
				C = "clippingParents",
				I = "viewport",
				M = "popper",
				T = "reference",
				N = k.reduce((function(e, t) {
					return e.concat([t + "-" + _, t + "-" + P])
				}), []),
				L = [].concat(k, [S]).reduce((function(e, t) {
					return e.concat([t, t + "-" + _, t + "-" + P])
				}), []),
				F = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function A(e) {
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
					o = t.defaultOptions,
					r = void 0 === o ? B : o;
				return function(e, t, n) {
					void 0 === n && (n = r);
					var o, i, c = {
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
									reference: a(e) ? h(e) : e.contextElement ? h(e.contextElement) : [],
									popper: h(t)
								};
								var o = function(e) {
									var t = A(e);
									return F.reduce((function(e, n) {
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
								return c.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), c.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										s = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var r = o({
											state: c,
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
									var e = c.elements,
										t = e.reference,
										n = e.popper;
									if (R(t, n)) {
										c.rects = {
											reference: f(t, g(n), "fixed" === c.options.strategy),
											popper: b(n)
										}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach((function(e) {
											return c.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var s = 0; s < c.orderedModifiers.length; s++)
											if (!0 !== c.reset) {
												var o = c.orderedModifiers[s],
													r = o.fn,
													i = o.options,
													a = void 0 === i ? {} : i,
													d = o.name;
												"function" == typeof r && (c = r({
													state: c,
													options: a,
													name: d,
													instance: u
												}) || c)
											} else c.reset = !1, s = -1
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

			function H(e) {
				return e.split("-")[1]
			}

			function V(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function q(e) {
				var t, n = e.reference,
					s = e.element,
					o = e.placement,
					r = o ? U(o) : null,
					i = o ? H(o) : null,
					a = n.x + n.width / 2 - s.width / 2,
					c = n.y + n.height / 2 - s.height / 2;
				switch (r) {
					case O:
						t = {
							x: a,
							y: n.y - s.height
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
					case w:
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
				var d = r ? V(r) : null;
				if (null != d) {
					var l = "y" === d ? "height" : "width";
					switch (i) {
						case _:
							t[d] = Math.floor(t[d]) - Math.floor(n[l] / 2 - s[l] / 2);
							break;
						case P:
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

			function G(e) {
				var t, n = e.popper,
					s = e.popperRect,
					o = e.placement,
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
					f = i.hasOwnProperty("x"),
					b = i.hasOwnProperty("y"),
					x = w,
					h = O,
					v = window;
				if (d) {
					var y = g(n);
					y === r(n) && (y = l(n)), o === O && (h = E, m -= y.clientHeight - s.height, m *= c ? 1 : -1), o === w && (x = j, p -= y.clientWidth - s.width, p *= c ? 1 : -1)
				}
				var S, k = Object.assign({
					position: a
				}, d && z);
				return c ? Object.assign(Object.assign({}, k), {}, ((S = {})[h] = b ? "0" : "", S[x] = f ? "0" : "", S.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", S)) : Object.assign(Object.assign({}, k), {}, ((t = {})[h] = b ? m + "px" : "", t[x] = f ? p + "px" : "", t.transform = "", t))
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
				return t === I ? Y(function(e) {
					var t = r(e),
						n = l(e),
						s = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						a = 0,
						c = 0;
					return s && (o = s.width, i = s.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = s.offsetLeft, c = s.offsetTop)), {
						width: o,
						height: i,
						x: a + u(e),
						y: c
					}
				}(e)) : c(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : Y(function(e) {
					var t = l(e),
						n = i(e),
						s = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
						r = Math.max(t.scrollHeight, t.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
						a = -n.scrollLeft + u(e),
						c = -n.scrollTop;
					return "rtl" === p(s || t).direction && (a += Math.max(t.clientWidth, s ? s.clientWidth : 0) - o), {
						width: o,
						height: r,
						x: a,
						y: c
					}
				}(l(e)))
			}

			function ee(e, t, n) {
				var s = "clippingParents" === t ? function(e) {
						var t = h(e),
							n = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && c(e) ? g(e) : e;
						return a(n) ? t.filter((function(e) {
							return a(e) && Q(e, n)
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
					c = void 0 === i ? C : i,
					d = n.rootBoundary,
					u = void 0 === d ? I : d,
					p = n.elementContext,
					m = void 0 === p ? M : p,
					f = n.altBoundary,
					b = void 0 !== f && f,
					x = n.padding,
					h = void 0 === x ? 0 : x,
					v = te("number" != typeof h ? h : ne(h, k)),
					y = m === M ? T : M,
					g = e.elements.reference,
					w = e.rects.popper,
					S = e.elements[b ? y : m],
					_ = ee(a(S) ? S : S.contextElement || l(e.elements.popper), c, u),
					P = o(g),
					N = q({
						reference: P,
						element: w,
						strategy: "absolute",
						placement: r
					}),
					L = Y(Object.assign(Object.assign({}, w), N)),
					F = m === M ? L : P,
					A = {
						top: _.top - F.top + v.top,
						bottom: F.bottom - _.bottom + v.bottom,
						left: _.left - F.left + v.left,
						right: F.right - _.right + v.right
					},
					B = e.modifiersData.offset;
				if (m === M && B) {
					var R = B[r];
					Object.keys(A).forEach((function(e) {
						var t = [j, E].indexOf(e) >= 0 ? 1 : -1,
							n = [O, E].indexOf(e) >= 0 ? "y" : "x";
						A[e] += R[n] * t
					}))
				}
				return A
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
				return [O, j, E, w].some((function(t) {
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
								o = s.scroll,
								i = void 0 === o || o,
								a = s.resize,
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
							t.modifiersData[n] = q({
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
									s = t.attributes[e] || {},
									o = t.elements[e];
								c(o) && d(o) && (Object.assign(o.style, n), Object.keys(s).forEach((function(e) {
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
										c(s) && d(s) && (Object.assign(s.style, r), Object.keys(o).forEach((function(e) {
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
								i = L.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var s = U(e),
											o = [w, O].indexOf(s) >= 0 ? -1 : 1,
											r = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = r[0],
											a = r[1];
										return i = i || 0, a = (a || 0) * o, [w, j].indexOf(s) >= 0 ? {
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
								for (var o = n.mainAxis, r = void 0 === o || o, i = n.altAxis, a = void 0 === i || i, c = n.fallbackPlacements, d = n.padding, l = n.boundary, u = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, f = void 0 === m || m, b = n.allowedAutoPlacements, x = t.options.placement, h = U(x), v = c || (h === x || !f ? [Z(x)] : function(e) {
										if (U(e) === S) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(x)), y = [x].concat(v).reduce((function(e, n) {
										return e.concat(U(n) === S ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												s = n.placement,
												o = n.boundary,
												r = n.rootBoundary,
												i = n.padding,
												a = n.flipVariations,
												c = n.allowedAutoPlacements,
												d = void 0 === c ? L : c,
												l = H(s),
												u = (l ? a ? N : N.filter((function(e) {
													return H(e) === l
												})) : k).filter((function(e) {
													return d.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = se(e, {
														placement: n,
														boundary: o,
														rootBoundary: r,
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
									}), []), g = t.rects.reference, P = t.rects.popper, C = new Map, I = !0, M = y[0], T = 0; T < y.length; T++) {
									var F = y[T],
										A = U(F),
										B = H(F) === _,
										R = [O, E].indexOf(A) >= 0,
										D = R ? "width" : "height",
										W = se(t, {
											placement: F,
											boundary: l,
											rootBoundary: u,
											altBoundary: p,
											padding: d
										}),
										V = R ? B ? j : w : B ? E : O;
									g[D] > P[D] && (V = Z(V));
									var q = Z(V),
										z = [];
									if (r && z.push(W[A] <= 0), a && z.push(W[V] <= 0, W[q] <= 0), z.every((function(e) {
											return e
										}))) {
										M = F, I = !1;
										break
									}
									C.set(F, z)
								}
								if (I)
									for (var G = function(e) {
											var t = y.find((function(t) {
												var n = C.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return M = t, "break"
										}, K = f ? 3 : 1; K > 0; K--) {
										if ("break" === G(K)) break
									}
								t.placement !== M && (t.modifiersData[s]._skip = !0, t.placement = M, t.reset = !0)
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
								a = void 0 !== i && i,
								c = n.boundary,
								d = n.rootBoundary,
								l = n.altBoundary,
								u = n.padding,
								p = n.tether,
								m = void 0 === p || p,
								f = n.tetherOffset,
								x = void 0 === f ? 0 : f,
								h = se(t, {
									boundary: c,
									rootBoundary: d,
									padding: u,
									altBoundary: l
								}),
								v = U(t.placement),
								y = H(t.placement),
								S = !y,
								k = V(v),
								P = "x" === k ? "y" : "x",
								C = t.modifiersData.popperOffsets,
								I = t.rects.reference,
								M = t.rects.popper,
								T = "function" == typeof x ? x(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : x,
								N = {
									x: 0,
									y: 0
								};
							if (C) {
								if (r) {
									var L = "y" === k ? O : w,
										F = "y" === k ? E : j,
										A = "y" === k ? "height" : "width",
										B = C[k],
										R = C[k] + h[L],
										D = C[k] - h[F],
										W = m ? -M[A] / 2 : 0,
										q = y === _ ? I[A] : M[A],
										z = y === _ ? -M[A] : -I[A],
										G = t.elements.arrow,
										K = m && G ? b(G) : {
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
										X = Z[F],
										Q = oe(0, I[A], K[A]),
										Y = S ? I[A] / 2 - W - Q - J - T : q - Q - J - T,
										$ = S ? -I[A] / 2 + W + Q + X + T : z + Q + X + T,
										ee = t.elements.arrow && g(t.elements.arrow),
										te = ee ? "y" === k ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][k] : 0,
										re = C[k] + Y - ne - te,
										ie = C[k] + $ - ne,
										ae = oe(m ? Math.min(R, re) : R, B, m ? Math.max(D, ie) : D);
									C[k] = ae, N[k] = ae - B
								}
								if (a) {
									var ce = "x" === k ? O : w,
										de = "x" === k ? E : j,
										le = C[P],
										ue = oe(le + h[ce], le, le - h[de]);
									C[P] = ue, N[P] = ue - le
								}
								t.modifiersData[s] = N
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
								i = U(n.placement),
								a = V(i),
								c = [w, j].indexOf(i) >= 0 ? "height" : "width";
							if (o && r) {
								var d = n.modifiersData[s + "#persistent"].padding,
									l = b(o),
									u = "y" === a ? O : w,
									p = "y" === a ? E : j,
									m = n.rects.reference[c] + n.rects.reference[a] - r[a] - n.rects.popper[c],
									f = r[a] - n.rects.reference[a],
									x = g(o),
									h = x ? "y" === a ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
									v = m / 2 - f / 2,
									y = d[u],
									S = h - l[c] - d[p],
									k = h / 2 - l[c] / 2 + v,
									_ = oe(y, k, S),
									P = a;
								n.modifiersData[s] = ((t = {})[P] = _, t.centerOffset = _ - k, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								s = e.name,
								o = n.element,
								r = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								a = void 0 === i ? 0 : i;
							null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && Q(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[s + "#persistent"] = {
								padding: te("number" != typeof a ? a : ne(a, k))
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
								a = se(t, {
									altBoundary: !0
								}),
								c = re(i, s),
								d = re(a, o, r),
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
				o = "function" == typeof Set,
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
							if (s && t instanceof Map && i instanceof Map) {
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
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
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
			const c = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = p(o.target, o.currentTarget),
						a = m(o.target, o.currentTarget);
					r && n && t && (u(o.target, o.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
						const s = t(e, r, a)(n);
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
							actionInfo: Object(i.Q)(n, o)
						}
					})), u(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
				}
			});

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(s.useCallback)(c(i, r, n), [i, r, n]);
					return o.a.createElement(e, a({}, d, {
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
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: c.url.replace(s.a.redditUrl, ""),
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
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, n) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
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
			t.a = e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement(i.b, d({
					className: Object(r.a)(c.a.CallToActionButton, t, {
						[c.a.mNotCardView]: n.isNotCardView
					})
				}, n))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!m(t.id)) return null;
				const u = new Set;
				let p = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = n[o],
						t = d[e].belongsTo.id;
					m(e) && o - r >= a && !u.has(t) && (r = o, u.add(t), o === l && (p = !0))
				}
				return p ? o.a.createElement(i.a, {
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
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				p = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = n.n(p);
			const f = a.a.div("EventMetaWrapper", m.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					post: s
				} = e;
				if (!Object(u.a)(s)) return null;
				const a = s && s.eventInfo,
					p = Object(l.a)(s),
					b = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(m.a.container, t, {
						[m.a.isCompact]: !!n
					})
				}, o.a.createElement(f, {
					className: m.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: s
				}), !p && b && o.a.createElement(d.a, {
					className: m.a.eventFollowButton,
					post: s,
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
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(d);
			var u = e => o.a.createElement("i", {
				className: Object(a.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => o.a.createElement("i", {
					className: Object(a.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				m = n("./src/reddit/components/HumanDate/index.tsx"),
				f = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = n.n(f),
				x = n("./src/lib/lessComponent.tsx");
			const h = x.a.span("PostEventFutureText", b.a),
				v = x.a.span("PostEventPastText", b.a),
				y = x.a.span("PostEventNowText", b.a),
				g = x.a.span("Container", b.a),
				O = x.a.wrapped(u, "CalendarIcon", b.a),
				E = x.a.wrapped(p, "LiveIcon", b.a),
				j = x.a.div("LoadingState", b.a);
			class w extends s.Component {
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
						eventIsLive: a,
						eventStart: c
					} = n, d = Object(r.e)(c, s);
					let l, u;
					if (this.state.mounted || d === r.a.Live) l = o.a.createElement(m.c, {
						startTime: c,
						endTime: s,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(j, {
							className: e
						})
					}
					if (a) u = o.a.createElement(y, null, o.a.createElement(E, null), l);
					else if (d === r.a.Future) u = o.a.createElement(h, null, o.a.createElement(O, null), l);
					else {
						if (d !== r.a.Past) return null;
						u = o.a.createElement(v, null, o.a.createElement(O, null), l)
					}
					return o.a.createElement(g, {
						className: e
					}, u)
				}
			}
			t.a = w
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
			t.a = e => {
				let {
					crosspost: t,
					post: n,
					forceShowNSFW: s,
					redditStyle: f,
					shouldShowSubscribeButton: x,
					subredditOrProfile: h,
					templatePlaceholderImage: v,
					shouldShowFollowButton: y,
					isFollowed: g,
					isCommentsPage: O,
					onFollowPostClick: E
				} = e;
				return Object(p.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: y || x
					})
				}, o.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, y && o.a.createElement(a.a, {
					isFilled: !!g,
					onClick: E,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), x && h && o.a.createElement(c.a, {
					className: b.a.subscribeButton,
					getEventFactory: e => Object(u.h)(n.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(m.h)(h) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: n.id,
					small: !0
				})), o.a.createElement(d.a, {
					crosspost: t,
					isCommentsPage: O,
					post: n,
					redditStyle: f,
					forceShowNSFW: s,
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				f = n("./src/reddit/components/AwardBadges/index.tsx"),
				b = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				x = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				h = n("./src/reddit/components/FlairWrapper/index.tsx"),
				v = n("./src/reddit/components/Flatlist/index.tsx"),
				y = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				O = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				E = n("./src/reddit/components/ModModeReports/index.tsx"),
				j = n("./src/reddit/components/ModModeReports/helpers.ts"),
				w = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = n("./src/reddit/components/PostContainer/index.tsx"),
				k = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				_ = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				P = n("./src/reddit/components/PostTitle/index.tsx"),
				C = n("./src/reddit/components/PostTopLine/index.tsx"),
				I = n("./src/reddit/components/PostTopMeta/index.tsx"),
				M = n("./src/reddit/components/SourceLink/index.tsx"),
				T = n("./src/reddit/contexts/PageLayer/index.tsx"),
				N = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				L = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				F = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				A = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				B = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = n("./src/reddit/models/Vote/index.ts"),
				D = n("./src/reddit/contexts/Post/index.tsx"),
				W = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				U = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				H = n("./src/reddit/hooks/useIsOverlay.ts"),
				V = n("./src/reddit/hooks/useUserContext.ts"),
				q = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				z = n("./src/reddit/selectors/moderatorPermissions.ts"),
				G = n("./src/reddit/selectors/postFlair.ts"),
				K = n("./src/reddit/selectors/posts.ts"),
				Z = n("./src/reddit/selectors/showPromotedCTA.ts"),
				J = n("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				X = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = n.n(X),
				Y = n("./src/reddit/selectors/i18n/index.ts"),
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
			const ne = () => Object(a.c)({
					crosspost: K.d,
					flairStyleTemplate: T.V,
					isActive: K.j,
					isCurrentUserProfilePost: K.l,
					showPromotedCTA: Z.a,
					moderatorPermissions: z.l,
					shouldShowNsfwListingBelow: Y.b,
					showAwardsPlaque: W.a,
					showEditFlair: G.a,
					showMedia: T.s,
					isInModNotesExperiment: (e, t) => {
						let {
							subreddit: n
						} = t;
						return !!n && Object(q.a)(e, n.id)
					}
				}),
				se = e => {
					const {
						className: t,
						crosspost: n,
						currentUser: s,
						eventFactory: i,
						flairStyleTemplate: a,
						hideNSFWPref: T,
						hostPostData: D,
						inSubredditOrProfile: W = !1,
						isCheckboxSelected: H,
						isCommentsPage: V,
						isCurrentUserProfilePost: q,
						isFrontpage: z,
						isInModNotesExperiment: G,
						isOverlay: K,
						isTopicPage: Z,
						isCommentCountAnimationEnabled: X,
						isVoteCountAnimationEnabled: Y,
						isCountAnimShadowTestEnabled: $,
						imageGalleryCurrentItem: te,
						listingKey: ne,
						moderatorPermissions: se,
						modModeEnabled: oe,
						onClickPost: re,
						post: ie,
						postId: ae,
						postIds: ce,
						redditStyle: de,
						shouldHideFlair: le,
						shouldShowNsfwListingBelow: ue,
						showAwardsPlaque: pe,
						showBulkActionCheckbox: me,
						showEditFlair: fe,
						showMedia: be,
						showPromotedCTA: xe,
						sendEvent: he,
						subredditOrProfile: ve,
						toggleCheckbox: ye,
						isAvatarPostEnabled: ge
					} = e, Oe = Object(r.d)(), Ee = e => e === R.a.upvoted ? Oe(Object(l.kb)(ae)) : Oe(Object(l.w)(ae)), je = () => Oe(Object(l.gb)(ae)), we = de ? void 0 : a, Se = Object(A.a)(se), ke = oe && Se, _e = Object(L.a)(se), Pe = Object(F.a)(se), Ce = Object(O.d)(ie), Ie = Object(j.c)(ie), Me = !!(null == D ? void 0 : D.shouldShowLinkedPosts), Te = ue, Ne = Object(N.a)(ie), Le = W && !be && !Me && !Te || ge, Fe = Le && !!ie.source && !n, Ae = !(z && s || Z) && !q && (!W || Me || Te), Be = (!W || Me || Te) && !ie.isSponsored, Re = Object(c.t)(ie, te), {
						source: De
					} = Re;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(S.a, {
						className: Object(d.a)(ee.a.container, t, Q.a.largeAndMediumPostStyles, Q.a.largeAndMediumActiveStyles, Object(B.a)(e), {
							[Q.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: K,
						style: Object(B.b)(e.flairStyleTemplate),
						post: ie,
						onClick: re,
						eventFactory: i
					}, o.a.createElement(_.a, {
						model: ie,
						handleVote: Ee,
						showBulkActionCheckbox: me,
						isCheckboxSelected: H,
						toggleCheckbox: ye,
						flairStyleTemplate: we,
						redditStyle: de,
						isVoteCountAnimation: Y,
						isCountAnimShadowTestEnabled: $,
						postId: ae
					}), o.a.createElement(w.a, {
						className: ee.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: we,
						post: ie,
						redditStyle: de
					}, o.a.createElement(x.a, {
						post: ie
					}), o.a.createElement("article", {
						className: ee.a.mainBody
					}, o.a.createElement("div", {
						className: ee.a.content,
						"data-click-id": "body"
					}, o.a.createElement(C.a, {
						className: ee.a.postTopLine,
						hideAwards: pe,
						hideNSFWPref: T,
						hostPostData: D,
						iconClassName: ee.a.postTopLineIcon,
						inSubredditOrProfile: W,
						isCommentsPage: V,
						isCurrentUserProfilePost: q,
						isInModNotesExperiment: G,
						isOverlay: !!K,
						isTopicPage: !!Z,
						listingKey: ne,
						post: ie,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Fe,
						showSubreddit: Be,
						showSubredditIcon: !0,
						subredditOrProfile: ve
					}), o.a.createElement(P.c, {
						className: ee.a.postTitle,
						post: ie,
						redditStyle: de,
						size: P.b.Large,
						titleColor: we && we.postTitleColor,
						isOverlay: K
					}), V && !le && ie.flair && ie.flair.length > 0 && o.a.createElement(h.a, {
						className: Object(d.a)(V && ee.a.leftPadding),
						disableFlair: !V,
						post: ie,
						sendEvent: he
					}), ie.source && !ie.isSponsored && !n && o.a.createElement(M.a, {
						className: ee.a.sourceLink,
						isCommentsPage: V,
						post: ie
					})), !Le && Ne && o.a.createElement(J.a, {
						crosspost: n ? ie : void 0,
						hasModPostPerms: Se,
						isCommentsPage: V,
						isOverlay: K,
						modModeEnabled: oe,
						post: n || ie,
						redditStyle: de,
						shouldShowSubscribeButton: Ae,
						subredditOrProfile: ve,
						templatePlaceholderImage: we && we.postPlaceholderImage
					})), xe && De && De.url && !ie.isSurveyAd && o.a.createElement(p.a, {
						className: ee.a.adLinkWrapper
					}, o.a.createElement(m.a, {
						post: ie,
						adLinkContent: Re
					})), oe && Se && Ce && o.a.createElement("div", {
						className: ee.a.modModeBannerWrapper
					}, o.a.createElement(g.a, {
						thing: ie
					})), oe && Se && Ie && o.a.createElement("div", {
						className: ee.a.modModeBannerWrapper
					}, o.a.createElement(E.a, {
						onIgnoreReports: je,
						reportable: ie
					})), o.a.createElement(y.d, null), pe && o.a.createElement(f.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: V,
						thing: ie,
						tooltipType: K ? I.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: ee.a.flatlistContainer
					}, o.a.createElement(b.a, {
						className: ee.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: we,
						redditStyle: de,
						model: ie,
						onVoteClick: Ee
					}), !ie.isSurveyAd && o.a.createElement(v.c, {
						currentUser: s,
						hasModFlairPerms: _e,
						hasModFullPerms: Pe,
						hasModPostPerms: Se,
						hostPostData: D,
						isCommentCountAnimation: X,
						isCountAnimShadowTestEnabled: $,
						isOverlay: !!K,
						listingKey: ne,
						modModeEnabled: oe,
						onIgnoreReports: je,
						onOpenReportsDropdown: e => Oe(Object(u.h)({
							tooltipId: e
						})),
						post: ie,
						showEditFlair: fe,
						tooltipType: K ? I.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(k.b)({
							editPost: !ke,
							save: !ke,
							hide: !1,
							report: !1
						})
					}))), z && o.a.createElement(U.a, {
						post: ie,
						postIds: null != ce ? ce : [],
						subredditId: null == ve ? void 0 : ve.id
					})))
				};
			t.default = Object(D.b)(o.a.memo((function(e) {
				const t = Object(s.useMemo)(() => ne(), []),
					n = Object(r.e)(n => t(n, e), r.c),
					a = Object(i.a)(e.post),
					c = Object(V.a)();
				return o.a.createElement(se, te({}, e, n, {
					modModeEnabled: c.modModeEnabled,
					hideNSFWPref: c.prefs.hideNSFW,
					isOverlay: Object(H.a)(),
					isAvatarPostEnabled: a
				}))
			})))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var s = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => !e.isApproved && !!Object(s.b)(e, s.a.AUTOMOD),
				r = e => !e.isApproved && !!Object(s.b)(e, s.a.CROWD_CONTROL),
				i = e => !e.isApproved && !!Object(s.b)(e, s.a.HATEFUL_CONTENT),
				a = e => o(e) || r(e) || i(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
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
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: n,
						onClick: s,
						hasTooltip: d,
						tooltipText: u,
						className: p
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: s
				}, o.a.createElement(c.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), d && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
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
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, n),
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/isRemoved.ts"),
				v = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				y = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				w = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				S = n("./src/reddit/icons/fonts/Report/index.tsx"),
				k = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				P = n("./src/reddit/models/Post/index.ts"),
				C = n("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				I = n("./src/reddit/selectors/posts.ts"),
				M = n("./src/reddit/components/PostBadges/index.m.less"),
				T = n.n(M);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => r.a.createElement("span", N({
					className: T.a.removalReason
				}, e), e.children),
				F = () => s.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				A = () => s.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				B = e => s.fbt._("Moderator of {community name}", [s.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				R = () => s.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				D = () => s.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				W = (e, t, n) => {
					const s = `PostBadges--${e}--${t}`;
					return n ? `${s}--${n}` : s
				},
				U = Object(x.u)({
					isProfilePostListing: x.L,
					isSubreddit: x.N,
					pageLayer: e => e
				}),
				H = Object(a.c)({
					isPinned: (e, t) => {
						let {
							post: n
						} = t;
						return Object(I.q)(e, {
							postId: n.id
						})
					},
					modModeEnabled: x.T
				}),
				V = Object(i.b)(H, (e, t) => ({
					onHideTooltip: () => e(Object(u.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(u.f)({
						tooltipId: t
					}))
				}));
			t.a = U(V(e => {
				let {
					className: t,
					displayText: n,
					isSubreddit: a,
					inSubredditOrProfile: u,
					isCompactPinnedPost: x,
					isPinned: I,
					isProfilePostListing: M,
					modModeEnabled: U,
					onHideTooltip: H,
					onOpenRemovalReasonModal: V,
					onShowTooltip: q,
					post: z,
					tooltipType: G,
					pageLayer: K
				} = e;
				const Z = {
						caretOnTop: !1
					},
					J = Object(i.e)(C.a),
					X = (z.isSponsored || Object(c.u)(K)) && (J === f.u.NoLockIcon || J === f.u.PromotedGrey),
					Q = z.isRemoved && !z.modRemovalReason && !z.modNote && z.belongsTo.type === b.a.SUBREDDIT,
					Y = W("Approve", z.id, G),
					$ = W("Archived", z.id, G),
					ee = W("Lock", z.id, G),
					te = W("Mod", z.id, G),
					ne = W("Remove", z.id, G),
					se = W("Report", z.id, G),
					oe = W("Spam", z.id, G),
					re = W("Sticky", z.id, G),
					ie = W("Pinned", z.id, G);
				return r.a.createElement("div", {
					className: t
				}, u && n && z.distinguishType === l.G.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(g.a, {
					name: "mod",
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.modIcon)
				}), r.a.createElement(p.c, N({
					tooltipId: te,
					text: B(n)
				}, Z))), z.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.archivedIcon),
					desc: F(),
					id: $,
					onMouseEnter: q($),
					onMouseLeave: H
				}), r.a.createElement(p.c, N({
					tooltipId: $,
					text: F()
				}, Z))), z.isLocked && !X && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.lockIcon),
					desc: A(),
					id: ee,
					onMouseEnter: q(ee),
					onMouseLeave: H
				}), r.a.createElement(p.c, N({
					tooltipId: ee,
					text: A()
				}, Z))), a && Object(P.r)(z) && !x && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.stickyIcon),
					desc: R(),
					id: re,
					onMouseEnter: q(re),
					onMouseLeave: H
				}), r.a.createElement(p.c, N({
					tooltipId: re,
					text: R()
				}, Z))), M && I && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.stickyIcon),
					desc: D(),
					id: ie,
					onMouseEnter: q(ie),
					onMouseLeave: H
				}), r.a.createElement(p.c, N({
					tooltipId: ie,
					text: D()
				}, Z))), (z.isApproved || z.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.approveIcon),
					desc: Object(v.a)(z),
					id: Y,
					onMouseEnter: q(Y),
					onMouseLeave: H
				}), r.a.createElement(p.c, N({
					tooltipId: Y,
					text: Object(v.a)(z)
				}, Z))), Object(h.a)(z) && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.removeIcon),
					desc: Object(v.b)(z),
					id: ne,
					onMouseEnter: q(ne),
					onMouseLeave: H
				}), Q && r.a.createElement(m.a, {
					className: T.a.addRemovalReason,
					onClick: V,
					text: s.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (z.modRemovalReason || z.modNote) && r.a.createElement(L, {
					onMouseEnter: q(ne),
					onMouseLeave: H
				}, s.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(p.c, N({
					tooltipId: ne,
					text: Object(v.b)(z)
				}, Z))), z.bannedBy && z.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.spamIcon),
					desc: Object(v.d)(z),
					id: oe,
					onMouseEnter: q(oe),
					onMouseLeave: H
				}), r.a.createElement(p.c, N({
					tooltipId: oe,
					text: Object(v.d)(z)
				}, Z))), Object(y.a)(z) && !U && r.a.createElement(o.Fragment, null, r.a.createElement(S.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.reportIcon),
					desc: Object(v.c)(z.numReports),
					id: se,
					onMouseEnter: q(se),
					onMouseLeave: H
				}), r.a.createElement(p.c, N({
					tooltipId: se,
					text: Object(v.c)(z.numReports)
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
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
								s >= .5 && n(c.d(e.postId))
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
				f = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/lib/classNames/index.ts"),
				v = n("./src/lib/objectSelector/index.ts"),
				y = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = n("./src/reddit/components/PostContainer/index.m.less"),
				O = n.n(g);
			const E = Object(m.a)(() => Object(r.c)({
				basePixelMetadata: Object(v.a)((e, t) => {
					let {
						post: n
					} = t;
					return Object(b.b)(e, n.id)
				}),
				clickTrackingId: (e, t) => {
					let {
						post: n
					} = t;
					return n.id
				},
				imageGalleryCurrentItem: (e, t) => {
					let {
						post: n
					} = t;
					return Object(b.i)(e, {
						postId: n.id
					})
				},
				pageType: e => Object(x.d)(e).pageType
			}));
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: p,
						pageType: m,
						sendEvent: b,
						style: x,
						ref: v,
						shouldAddGalleryViewability: y = !0
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
							if (!this.cancelClick && n.button < 2 && e(() => p && p(n, l, t, r, m))(n), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(O.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), E = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || E ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, g) : l.media && Object(f.E)(l.media) && y ? o.a.createElement(u, {
						postId: l.id
					}, g) : g
				}
			}
			t.a = E(Object(y.a)(Object(p.c)(j)))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
					let a = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = s.fbt._("Unfollow", null, {
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
			const b = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: n
				} = t;
				return {
					onFollow: () => e(Object(d.A)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(l.c)(f))
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					isOverlay: h,
					isVoteCountAnimation: v,
					postId: y,
					shouldShowUpvoteRatioOnHover: g
				} = e, O = `upvote-button-${t.id}${h?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: x
				}, s && o.a.createElement(c.a, {
					className: p.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: f
				}), o.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: x,
					upvoteTooltipId: O,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: m,
					postId: y,
					scoreClassName: Object(r.a)(p.a.score, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/AwardBadges/index.tsx"),
				d = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/NotificationButton/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				p = n("./src/reddit/components/PostTopMeta/index.tsx"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx"),
				f = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = n("./src/reddit/constants/posts.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/OutboundLink/index.tsx"),
				y = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = n("./src/reddit/models/Media/index.ts"),
				E = n("./src/reddit/models/Subreddit/index.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/PostTopLine/index.m.less"),
				S = n.n(w);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: n,
					forceOpenInNewTab: o,
					hideAwards: w,
					hideNSFWPref: k,
					hostPostData: _,
					iconClassName: P,
					inSubredditOrProfile: C,
					isCommentsPage: I,
					isCompactPinnedPost: M,
					isCurrentUserProfilePost: T,
					isInModNotesExperiment: N,
					isOverlay: L,
					isTopicPage: F,
					listingKey: A,
					post: B,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: D,
					showSubreddit: W,
					showSubredditIcon: U,
					subredditOrProfile: H,
					isFollowed: V,
					shouldShowFollowButton: q,
					onFollowPostClick: z
				} = e;
				const G = w || F,
					K = H && Object(E.h)(H),
					Z = Object(i.e)(e => {
						if (!K) return !0;
						const t = Object(j.Eb)(e, B.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(S.a.container, t)
				}, W && H && r.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: H.url
				}, U && r.a.createElement(m.b, {
					className: Object(a.a)(S.a.subredditIcon, P),
					shouldHideNsfwIcon: k,
					subredditOrProfile: H
				}))), r.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, W && r.a.createElement(d.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), r.a.createElement(p.d, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: n,
					isInModNotesExperiment: N,
					tooltipType: L ? p.c.Lightbox : void 0,
					post: B,
					showSub: W,
					subredditOrProfile: H
				}), r.a.createElement(u.a, {
					className: S.a.postBadges,
					displayText: H ? H.displayText : null,
					inSubredditOrProfile: C,
					isCompactPinnedPost: M,
					post: B,
					tooltipType: L ? p.c.Lightbox : void 0
				}), !G && r.a.createElement(c.a, {
					isPostDetail: I,
					thing: B,
					tooltipType: L ? p.c.Lightbox : void 0
				})), H && Z && W && R && !T && r.a.createElement(b.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => Object(y.h)(B.id, e ? "unsubscribe" : "subscribe", "post", A, _),
					identifier: {
						name: H.name,
						type: K ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: B.id,
					size: h.d.XS
				}), D && r.a.createElement(v.b, {
					isSponsored: B.isSponsored,
					postId: B.id,
					href: Object(O.D)(B),
					source: B.source
				}, r.a.createElement(g.a, {
					className: S.a.outboundLinkIcon
				})), q && Z && r.a.createElement(l.a, {
					isFilled: !!V,
					onClick: z,
					hasTooltip: !0,
					tooltipText: s.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				m = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				f = n("./src/reddit/models/Vote/index.ts"),
				b = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = n.n(b);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: n,
					isAvatarPost: a,
					post: b,
					share: v
				} = e;
				const y = Object(l.b)(),
					g = Object(i.d)(),
					O = b && b.id,
					E = b && b.voteState;
				let j = null;
				O || (j = t ? "user_hovercard" : "profile_overview");
				const w = Object(o.useCallback)(() => y(Object(p.g)(t ? "user_hovercard" : "profile_overview", n)), [t, y, n]);
				return r.a.createElement(u.t, {
					onClick: () => {
						a ? (y(p.h), O && E === f.a.notVoted && g(Object(c.kb)(O))) : w();
						const e = a ? "postify" : "copy";
						g(Object(d.b)({
							clickSource: j,
							share: v,
							source: e
						}))
					},
					className: Object(s.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, r.a.createElement(m.a, {
					className: Object(s.a)({
						[x.a.shirtIcon]: !a,
						[x.a.avatarPostButtonShirtIcon]: a
					})
				}), h._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: x.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
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
				return k
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/ads/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/getShortenedLink.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				u = "snoovatars",
				p = "avatars";
			var m = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				f = n("./src/reddit/components/AvatarPost/index.m.less"),
				b = n.n(f);
			var x = e => {
					let {
						sourceUrl: t,
						username: n,
						post: s
					} = e;
					const [r, i] = new URL(t).pathname.split("/").slice(2), a = function(e) {
						return `${l}/${+e>=d?p:u}/shared/${e}.png`
					}(i);
					return o.a.createElement("div", {
						className: b.a.avatarPostContainer
					}, o.a.createElement("img", {
						className: b.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), o.a.createElement(m.a, {
						isHovercard: !1,
						username: n,
						isAvatarPost: !0,
						post: s,
						share: {
							username: r,
							avatarId: i
						}
					}))
				},
				h = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				v = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				y = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = n("./src/reddit/components/SourceLink/index.m.less"),
				O = n.n(g),
				E = n("./src/lib/lessComponent.tsx"),
				j = n("./src/telemetry/models/Outbound.ts");
			const w = E.a.wrapped(y.a, "OutboundLinkIcon", O.a),
				S = E.a.div("SourceLinkWrapper", O.a);

			function k(e) {
				const {
					className: t,
					post: n,
					isCommentsPage: s,
					pageLayer: c
				} = e, d = s ? j.SourceElement.PostLink : j.SourceElement.ListingPostLink, {
					source: l
				} = n, u = n.isSponsored || Object(r.u)(c), p = Object(v.a)(n);
				return l ? p ? o.a.createElement(x, {
					sourceUrl: l.url,
					username: n.author,
					post: n
				}) : o.a.createElement(S, {
					className: Object(i.a)({
						[O.a["m-comment"]]: s
					}, t)
				}, o.a.createElement(h.a, {
					href: l.url,
					isSponsored: u,
					postId: n.id,
					source: l,
					sourceElement: d
				}, Object(a.a)({
					...n,
					isSponsored: u
				}), o.a.createElement(w, {
					isFilled: !0
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
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
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
			const p = n("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class m extends o.a.Component {
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
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: s,
							postId: r,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: p,
							getEventFactory: m,
							onSubscriptionsRequested: f,
							...b
						} = this.props, x = this.state.isHovered, h = Object(c.a)({
							type: t.type,
							key: x ? "unsubscribe" : "subscribed"
						});
						return o.a.createElement(a.t, u({
							className: e,
							priority: b.shouldReverseColor ? a.c.Primary : a.c.Secondary,
							text: h,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, b))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: s,
							postId: r,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: p,
							getEventFactory: m,
							onSubscriptionsRequested: f,
							...b
						} = this.props, x = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return o.a.createElement(a.t, u({
							className: e,
							priority: b.shouldReverseColor ? a.c.Secondary : a.c.Primary,
							size: a.d.XSP,
							text: x,
							onClick: this.onClick
						}, b, {
							id: `subscribe-button-${r}`,
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
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : o.a.createElement(p, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(r.c)(m))
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				f = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(f);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, x({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const s = Object(a.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !n.noHover,
					[b.a.mIsSelected]: n.isSelected,
					[b.a.topics]: n.isTopicsStyle
				});
				return i.a.createElement(h, x({
					className: s
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", i.a)
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
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const n = [];
				for (const {
						node: o
					} of t) n.push(Object(s.f)(o));
				return n
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
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
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
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
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
				return b
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "d", (function() {
				return h
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				f = e => Object(s.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				h = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
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
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/parseUrl.ts"),
				r = n("./src/reddit/selectors/media.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => ({
					gallery: i.s(e, t, n),
					post: i.I(e, t),
					...i.o(e)
				}),
				c = (e, t) => n => ({
					...a(n, e, t),
					action: s.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.B(n, e)
				}),
				d = (e, t) => n => {
					const c = Object(o.a)(t),
						d = Object(r.d)(n, e) + 1;
					return {
						...a(n, e, d),
						action: s.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.B(n, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => p(e, !0, t),
				u = (e, t) => p(e, !1, t),
				p = (e, t, n) => o => ({
					...a(o, e, n),
					action: s.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/react.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					let {
						subredditId: t,
						postId: n,
						reactionsEnabled: o
					} = e;
					return e => {
						const r = n ? s.B(e, n) : void 0;
						return {
							source: "post_detail",
							action: "click",
							noun: "react_allow_reactions",
							subreddit: {
								id: t
							},
							media: {
								...r,
								reactionsEnabled: o
							},
							...s.o(e)
						}
					}
				},
				r = e => {
					let {
						subredditId: t,
						postId: n,
						reactSourceSubredditId: o,
						reactSourceMediaId: r
					} = e;
					return e => {
						const i = n ? s.B(e, n) : void 0;
						return {
							source: "post",
							action: "click",
							noun: "react_credit_pill",
							subreddit: {
								id: t
							},
							reactSource: {
								subredditId: o,
								mediaId: r
							},
							media: {
								...i
							},
							...s.o(e)
						}
					}
				}
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react-redux/es/index.js");
			const o = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var a = n("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(s.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: n,
						avatarShareUrl: s
					} = e;
					const a = i.test(s.trim()),
						c = o.includes(t),
						d = r.includes(n);
					return a && c && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(a.d)(t)
			})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function o(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL"
				}(s || (s = {}))
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
					experimentName: s.yc
				});
				return !(!t || Object(s.Af)(t))
			}
		},
		"./src/reddit/selectors/experiments/videoReactions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts");
			const i = e => Object(o.c)(e, {
					experimentName: s.lb,
					experimentEligibilitySelector: r.e
				}) === s.ed,
				a = e => Object(o.c)(e, {
					experimentName: s.Ob,
					experimentEligibilitySelector: o.a
				}) === s.ed
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.Af)(t)
				},
				c = Object(s.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.we,
					experimentEligibilitySelector: r.a
				}),
				c = (e, t) => t === o.Ee.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(s.a)(i.G, a, (e, t) => c(e, t));
			Object(s.a)((e, t) => t, a, (e, t) => c(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.45898ea5cd6a1c71c305.js.map