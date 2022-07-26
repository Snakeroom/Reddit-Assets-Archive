// https://www.redditstatic.com/desktop2x/webvitals.f626f135e0d2366368b7.js
// Retrieved at 7/26/2022, 5:20:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["webvitals"], {
		"./node_modules/web-vitals/dist/web-vitals.js": function(n, e, t) {
			"use strict";
			t.r(e), t.d(e, "getCLS", (function() {
				return C
			})), t.d(e, "getFCP", (function() {
				return T
			})), t.d(e, "getFID", (function() {
				return _
			})), t.d(e, "getINP", (function() {
				return x
			})), t.d(e, "getLCP", (function() {
				return K
			})), t.d(e, "getTTFB", (function() {
				return U
			})), t.d(e, "onCLS", (function() {
				return C
			})), t.d(e, "onFCP", (function() {
				return T
			})), t.d(e, "onFID", (function() {
				return _
			})), t.d(e, "onINP", (function() {
				return x
			})), t.d(e, "onLCP", (function() {
				return K
			})), t.d(e, "onTTFB", (function() {
				return U
			}));
			var i, r, a, o, u, c = !1,
				f = function(n) {
					addEventListener("pageshow", (function(e) {
						e.persisted && (c = !0, n(e))
					}), !0)
				},
				s = function() {
					return window.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || function() {
						var n = performance.timing,
							e = {
								entryType: "navigation",
								startTime: 0
							};
						for (var t in n) "navigationStart" !== t && "toJSON" !== t && (e[t] = Math.max(n[t] - n.navigationStart, 0));
						return e
					}())
				},
				d = function(n, e) {
					var t = s();
					return {
						name: n,
						value: void 0 === e ? -1 : e,
						delta: 0,
						entries: [],
						id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
						navigationType: c ? "back_forward_cache" : t && t.type
					}
				},
				l = function(n, e, t) {
					try {
						if (PerformanceObserver.supportedEntryTypes.includes(n)) {
							var i = new PerformanceObserver((function(n) {
								e(n.getEntries())
							}));
							return i.observe(Object.assign({
								type: n,
								buffered: !0
							}, t || {})), i
						}
					} catch (n) {}
				},
				v = function(n, e) {
					var t = function t(i) {
						"pagehide" !== i.type && "hidden" !== document.visibilityState || (n(i), e && (removeEventListener("visibilitychange", t, !0), removeEventListener("pagehide", t, !0)))
					};
					addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
				},
				p = function(n, e, t) {
					var i;
					return function(r) {
						e.value >= 0 && (r || t) && (e.delta = e.value - (i || 0), (e.delta || void 0 === i) && (i = e.value, n(e)))
					}
				},
				m = -1,
				h = function() {
					return "hidden" === document.visibilityState ? 0 : 1 / 0
				},
				g = function() {
					v((function(n) {
						var e = n.timeStamp;
						m = e
					}), !0)
				},
				y = function() {
					return m < 0 && (m = h(), g(), f((function() {
						setTimeout((function() {
							m = h(), g()
						}), 0)
					}))), {
						get firstHiddenTime() {
							return m
						}
					}
				},
				T = function(n, e) {
					e = e || {};
					var t, i = y(),
						r = d("FCP"),
						a = function(n) {
							n.forEach((function(n) {
								"first-contentful-paint" === n.name && (u && u.disconnect(), n.startTime < i.firstHiddenTime && (r.value = n.startTime, r.entries.push(n), t(!0)))
							}))
						},
						o = window.performance && window.performance.getEntriesByName && window.performance.getEntriesByName("first-contentful-paint")[0],
						u = o ? null : l("paint", a);
					(o || u) && (t = p(n, r, e.reportAllChanges), o && a([o]), f((function(i) {
						r = d("FCP"), t = p(n, r, e.reportAllChanges), requestAnimationFrame((function() {
							requestAnimationFrame((function() {
								r.value = performance.now() - i.timeStamp, t(!0)
							}))
						}))
					})))
				},
				w = !1,
				E = -1,
				C = function(n, e) {
					e = e || {}, w || (T((function(n) {
						E = n.value
					})), w = !0);
					var t, i = function(e) {
							E > -1 && n(e)
						},
						r = d("CLS", 0),
						a = 0,
						o = [],
						u = function(n) {
							n.forEach((function(n) {
								if (!n.hadRecentInput) {
									var e = o[0],
										i = o[o.length - 1];
									a && n.startTime - i.startTime < 1e3 && n.startTime - e.startTime < 5e3 ? (a += n.value, o.push(n)) : (a = n.value, o = [n]), a > r.value && (r.value = a, r.entries = o, t())
								}
							}))
						},
						c = l("layout-shift", u);
					c && (t = p(i, r, e.reportAllChanges), v((function() {
						u(c.takeRecords()), t(!0)
					})), f((function() {
						a = 0, E = -1, r = d("CLS", 0), t = p(i, r, e.reportAllChanges)
					})))
				},
				L = {
					passive: !0,
					capture: !0
				},
				S = new Date,
				A = function(n, e) {
					i || (i = e, r = n, a = new Date, I(removeEventListener), b())
				},
				b = function() {
					if (r >= 0 && r < a - S) {
						var n = {
							entryType: "first-input",
							name: i.type,
							target: i.target,
							cancelable: i.cancelable,
							startTime: i.timeStamp,
							processingStart: i.timeStamp + r
						};
						o.forEach((function(e) {
							e(n)
						})), o = []
					}
				},
				F = function(n) {
					if (n.cancelable) {
						var e = (n.timeStamp > 1e12 ? new Date : performance.now()) - n.timeStamp;
						"pointerdown" == n.type ? function(n, e) {
							var t = function() {
									A(n, e), r()
								},
								i = function() {
									r()
								},
								r = function() {
									removeEventListener("pointerup", t, L), removeEventListener("pointercancel", i, L)
								};
							addEventListener("pointerup", t, L), addEventListener("pointercancel", i, L)
						}(e, n) : A(e, n)
					}
				},
				I = function(n) {
					["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
						return n(e, F, L)
					}))
				},
				_ = function(n, e) {
					e = e || {};
					var t, a = y(),
						u = d("FID"),
						c = function(n) {
							n.startTime < a.firstHiddenTime && (u.value = n.processingStart - n.startTime, u.entries.push(n), t(!0))
						},
						s = function(n) {
							n.forEach(c)
						},
						m = l("first-input", s);
					t = p(n, u, e.reportAllChanges), m && v((function() {
						s(m.takeRecords()), m.disconnect()
					}), !0), m && f((function() {
						var a;
						u = d("FID"), t = p(n, u, e.reportAllChanges), o = [], r = -1, i = null, I(addEventListener), a = c, o.push(a), b()
					}))
				},
				D = 0,
				P = 1 / 0,
				B = 0,
				N = function(n) {
					n.forEach((function(n) {
						n.interactionId && (P = Math.min(P, n.interactionId), B = Math.max(B, n.interactionId), D = B ? (B - P) / 7 + 1 : 0)
					}))
				},
				k = function() {
					return u ? D : performance.interactionCount || 0
				},
				M = function() {
					"interactionCount" in performance || u || (u = l("event", N, {
						type: "event",
						buffered: !0,
						durationThreshold: 0
					}))
				},
				O = 0,
				H = function() {
					return k() - O
				},
				R = [],
				q = {},
				x = function(n, e) {
					e = e || {}, M();
					var t, i = d("INP"),
						r = function(n) {
							n.forEach((function(n) {
								n.interactionId && function(n) {
									var e = R[R.length - 1],
										t = q[n.interactionId];
									if (t || R.length < 10 || n.duration > e.latency) {
										if (t) t.entries.push(n), t.latency = Math.max(t.latency, n.duration);
										else {
											var i = {
												id: n.interactionId,
												latency: n.duration,
												entries: [n]
											};
											q[i.id] = i, R.push(i)
										}
										R.sort((function(n, e) {
											return e.latency - n.latency
										})), R.splice(10).forEach((function(n) {
											delete q[n.id]
										}))
									}
								}(n)
							}));
							var e, r = (e = Math.min(R.length - 1, Math.floor(H() / 50)), R[e]);
							r && r.latency !== i.value && (i.value = r.latency, i.entries = r.entries, t())
						},
						a = l("event", r, {
							durationThreshold: e.durationThreshold || 40
						});
					t = p(n, i, e.reportAllChanges), a && (v((function() {
						r(a.takeRecords()), i.value < 0 && H() > 0 && (i.value = 0, i.entries = []), t(!0)
					})), f((function() {
						R = [], O = k(), i = d("INP"), t = p(n, i, e.reportAllChanges)
					})))
				},
				j = {},
				K = function(n, e) {
					e = e || {};
					var t, i = y(),
						r = d("LCP"),
						a = function(n) {
							var e = n[n.length - 1];
							if (e) {
								var a = e.startTime;
								a < i.firstHiddenTime && (r.value = a, r.entries = [e], t())
							}
						},
						o = l("largest-contentful-paint", a);
					if (o) {
						t = p(n, r, e.reportAllChanges);
						var u = function() {
							j[r.id] || (a(o.takeRecords()), o.disconnect(), j[r.id] = !0, t(!0))
						};
						["keydown", "click"].forEach((function(n) {
							addEventListener(n, u, {
								once: !0,
								capture: !0
							})
						})), v(u, !0), f((function(i) {
							r = d("LCP"), t = p(n, r, e.reportAllChanges), requestAnimationFrame((function() {
								requestAnimationFrame((function() {
									r.value = performance.now() - i.timeStamp, j[r.id] = !0, t(!0)
								}))
							}))
						}))
					}
				},
				U = function(n, e) {
					e = e || {};
					var t, i = d("TTFB"),
						r = p(n, i, e.reportAllChanges);
					t = function() {
						var n = s();
						if (n) {
							if (i.value = n.responseStart, i.value < 0 || i.value > performance.now()) return;
							i.entries = [n], r(!0)
						}
					}, "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("load", (function() {
						return setTimeout(t, 0)
					})), f((function(t) {
						i = d("TTFB"), r = p(n, i, e.reportAllChanges), i.value = performance.now() - t.timeStamp, r(!0)
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/webvitals.f626f135e0d2366368b7.js.map