// https://www.redditstatic.com/desktop2x/6.f7c8fc190664e87d717e.js
// Retrieved at 1/26/2022, 8:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[6], {
		"./node_modules/deep-diff/index.js": function(e, t, n) {
			var s, o;
			o = function(e) {
				var t = ["N", "E", "A", "D"];

				function n(e, t) {
					e.super_ = t, e.prototype = Object.create(t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					})
				}

				function s(e, t) {
					Object.defineProperty(this, "kind", {
						value: e,
						enumerable: !0
					}), t && t.length && Object.defineProperty(this, "path", {
						value: t,
						enumerable: !0
					})
				}

				function o(e, t, n) {
					o.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "rhs", {
						value: n,
						enumerable: !0
					})
				}

				function r(e, t) {
					r.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
						value: t,
						enumerable: !0
					})
				}

				function i(e, t) {
					i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
						value: t,
						enumerable: !0
					})
				}

				function a(e, t, n) {
					a.super_.call(this, "A", e), Object.defineProperty(this, "index", {
						value: t,
						enumerable: !0
					}), Object.defineProperty(this, "item", {
						value: n,
						enumerable: !0
					})
				}

				function l(e, t, n) {
					var s = e.slice((n || t) + 1 || e.length);
					return e.length = t < 0 ? e.length + t : t, e.push.apply(e, s), e
				}

				function u(e) {
					var t = typeof e;
					return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
				}

				function c(e) {
					var t = 0;
					if (0 === e.length) return t;
					for (var n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t &= t;
					return t
				}

				function p(e) {
					var t = 0,
						n = u(e);
					if ("array" === n) return e.forEach((function(e) {
						t += p(e)
					})), t + c("[type: array, hash: " + t + "]");
					if ("object" === n) {
						for (var s in e)
							if (e.hasOwnProperty(s)) {
								var o = "[ type: object, key: " + s + ", value hash: " + p(e[s]) + "]";
								t += c(o)
							} return t
					}
					return t + c("[ type: " + n + " ; value: " + e + "]")
				}

				function d(e, t, n, s, l, c, f, h) {
					n = n || [], f = f || [];
					var m = (l = l || []).slice(0);
					if (null != c) {
						if (s) {
							if ("function" == typeof s && s(m, c)) return;
							if ("object" == typeof s) {
								if (s.prefilter && s.prefilter(m, c)) return;
								if (s.normalize) {
									var g = s.normalize(m, c, e, t);
									g && (e = g[0], t = g[1])
								}
							}
						}
						m.push(c)
					}
					"regexp" === u(e) && "regexp" === u(t) && (e = e.toString(), t = t.toString());
					var b, v, y, w, D = typeof e,
						k = typeof t,
						j = "undefined" !== D || f && f.length > 0 && f[f.length - 1].lhs && Object.getOwnPropertyDescriptor(f[f.length - 1].lhs, c),
						O = "undefined" !== k || f && f.length > 0 && f[f.length - 1].rhs && Object.getOwnPropertyDescriptor(f[f.length - 1].rhs, c);
					if (!j && O) n.push(new r(m, t));
					else if (!O && j) n.push(new i(m, e));
					else if (u(e) !== u(t)) n.push(new o(m, e, t));
					else if ("date" === u(e) && e - t != 0) n.push(new o(m, e, t));
					else if ("object" === D && null !== e && null !== t) {
						for (b = f.length - 1; b > -1; --b)
							if (f[b].lhs === e) {
								w = !0;
								break
							} if (w) e !== t && n.push(new o(m, e, t));
						else {
							if (f.push({
									lhs: e,
									rhs: t
								}), Array.isArray(e)) {
								for (h && (e.sort((function(e, t) {
										return p(e) - p(t)
									})), t.sort((function(e, t) {
										return p(e) - p(t)
									}))), b = t.length - 1, v = e.length - 1; b > v;) n.push(new a(m, b, new r(void 0, t[b--])));
								for (; v > b;) n.push(new a(m, v, new i(void 0, e[v--])));
								for (; b >= 0; --b) d(e[b], t[b], n, s, m, b, f, h)
							} else {
								var A = Object.keys(e),
									C = Object.keys(t);
								for (b = 0; b < A.length; ++b) y = A[b], (w = C.indexOf(y)) >= 0 ? (d(e[y], t[y], n, s, m, y, f, h), C[w] = null) : d(e[y], void 0, n, s, m, y, f, h);
								for (b = 0; b < C.length; ++b)(y = C[b]) && d(void 0, t[y], n, s, m, y, f, h)
							}
							f.length = f.length - 1
						}
					} else e !== t && ("number" === D && isNaN(e) && isNaN(t) || n.push(new o(m, e, t)))
				}

				function f(e, t, n, s, o) {
					var r = [];
					if (d(e, t, r, s, null, null, null, o), n)
						for (var i = 0; i < r.length; ++i) n(r[i]);
					return r
				}

				function h(e, t, n, s) {
					var o = f(e, t, s ? function(e) {
						e && s.push(e)
					} : void 0, n);
					return s || (o.length ? o : void 0)
				}

				function m(e, n, s) {
					if (void 0 === s && n && ~t.indexOf(n.kind) && (s = n), e && s && s.kind) {
						for (var o = e, r = -1, i = s.path ? s.path.length - 1 : 0; ++r < i;) void 0 === o[s.path[r]] && (o[s.path[r]] = void 0 !== s.path[r + 1] && "number" == typeof s.path[r + 1] ? [] : {}), o = o[s.path[r]];
						switch (s.kind) {
							case "A":
								s.path && void 0 === o[s.path[r]] && (o[s.path[r]] = []),
									function e(t, n, s) {
										if (s.path && s.path.length) {
											var o, r = t[n],
												i = s.path.length - 1;
											for (o = 0; o < i; o++) r = r[s.path[o]];
											switch (s.kind) {
												case "A":
													e(r[s.path[o]], s.index, s.item);
													break;
												case "D":
													delete r[s.path[o]];
													break;
												case "E":
												case "N":
													r[s.path[o]] = s.rhs
											}
										} else switch (s.kind) {
											case "A":
												e(t[n], s.index, s.item);
												break;
											case "D":
												t = l(t, n);
												break;
											case "E":
											case "N":
												t[n] = s.rhs
										}
										return t
									}(s.path ? o[s.path[r]] : o, s.index, s.item);
								break;
							case "D":
								delete o[s.path[r]];
								break;
							case "E":
							case "N":
								o[s.path[r]] = s.rhs
						}
					}
				}
				return n(o, s), n(r, s), n(i, s), n(a, s), Object.defineProperties(h, {
					diff: {
						value: h,
						enumerable: !0
					},
					orderIndependentDiff: {
						value: function(e, t, n, s) {
							var o = s ? function(e) {
									e && s.push(e)
								} : void 0,
								r = f(e, t, o, n, !0);
							return s || (r.length ? r : void 0)
						},
						enumerable: !0
					},
					observableDiff: {
						value: f,
						enumerable: !0
					},
					orderIndependentObservableDiff: {
						value: function(e, t, n, s, o, r, i) {
							return d(e, t, n, s, o, r, i, !0)
						},
						enumerable: !0
					},
					orderIndepHash: {
						value: p,
						enumerable: !0
					},
					applyDiff: {
						value: function(e, t, n) {
							e && t && f(e, t, (function(s) {
								n && !n(e, t, s) || m(e, t, s)
							}))
						},
						enumerable: !0
					},
					applyChange: {
						value: m,
						enumerable: !0
					},
					revertChange: {
						value: function(e, t, n) {
							if (e && t && n && n.kind) {
								var s, o, r = e;
								for (o = n.path.length - 1, s = 0; s < o; s++) void 0 === r[n.path[s]] && (r[n.path[s]] = {}), r = r[n.path[s]];
								switch (n.kind) {
									case "A":
										! function e(t, n, s) {
											if (s.path && s.path.length) {
												var o, r = t[n],
													i = s.path.length - 1;
												for (o = 0; o < i; o++) r = r[s.path[o]];
												switch (s.kind) {
													case "A":
														e(r[s.path[o]], s.index, s.item);
														break;
													case "D":
													case "E":
														r[s.path[o]] = s.lhs;
														break;
													case "N":
														delete r[s.path[o]]
												}
											} else switch (s.kind) {
												case "A":
													e(t[n], s.index, s.item);
													break;
												case "D":
												case "E":
													t[n] = s.lhs;
													break;
												case "N":
													t = l(t, n)
											}
											return t
										}(r[n.path[s]], n.index, n.item);
										break;
									case "D":
									case "E":
										r[n.path[s]] = n.lhs;
										break;
									case "N":
										delete r[n.path[s]]
								}
							}
						},
						enumerable: !0
					},
					isConflict: {
						value: function() {
							return "undefined" != typeof $conflict
						},
						enumerable: !0
					}
				}), h.DeepDiff = h, e && (e.DeepDiff = h), h
			}(this), void 0 === (s = function() {
				return o
			}.call(t, n, t, e)) || (e.exports = s)
		},
		"./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/diffAndLog.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "diffAndLog", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/@sentry/minimal/esm/index.js"),
				o = n("./node_modules/deep-diff/index.js"),
				r = n("./src/lib/env/index.ts");
			const i = ["comments.allAwardings", "comments.associatedAward", "comments.body", "comments.bodyMD", "comments.isAuthorCakeday", "comments.isAuthorPremium", "comments.markdown", "comments.modReportsDismissed", "comments.userReportsDismissed", "comments.isSystem", "comments.modReasonBy", "posts.allAwardings", "posts.audioRoom", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.modReportsDismissed", "posts.userReportsDismissed", "posts.media.markdownContent", "posts.media.content", "posts.modReasonBy", "authorFlair.cssClass", "comments.bannedAtUTC", "comments.permalink", "comments.goldCount", "posts.bannedAtUTC", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.goldCount", "posts.sendReplies", "authorFlair.richtext"],
				a = (e, t) => {
					const n = {},
						s = {};
					Object.keys(e).forEach(r => {
						const a = e[r],
							l = t[r] || {};
						n[r] = {}, s[r] = 0, Object.keys(a).forEach(e => {
							const t = a[e],
								u = l[e],
								c = Object(o.diff)(t, u, {
									prefilter: (e, t) => i.includes(`${r}.${e.length?`${e.join(".")}.`:""}${t}`) || i.includes(`${r}.${t}`),
									normalize: (e, t, n, s) => n || s ? [n, s] : [n, n]
								});
							s[r] = c ? s[r] + c.length : (null == s ? void 0 : s[r]) || 0, c && (n[r][e] = {
								gatewayThing: t,
								gqlThing: u,
								diffResult: c
							})
						})
					});
					const r = Object.keys(s).reduce((e, t) => e += s[t], 0);
					return {
						allDiffs: n,
						issueCounts: s,
						totalIssues: r
					}
				};

			function l({
				gatewayResponse: e,
				normalizedGqlResponse: t,
				rawGqlResponse: n
			}) {
				if (Object(r.a)()) {
					console.group("GQL Modqueue Shadowtest"), console.groupCollapsed("raw gql response"), console.log(n), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(t), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(e), console.groupEnd();
					const {
						allDiffs: s,
						issueCounts: o,
						totalIssues: r
					} = a(e, t);
					console.groupCollapsed(`diff: ${r} issues`), console.log("lhs = gateway\nrhs = gql");
					for (const e in s) {
						if (console.groupCollapsed(`${e}: ${o[e]} issues`), o[e] > 0)
							for (const t in s[e]) {
								const n = s[e][t].diffResult;
								console.groupCollapsed(`${t}: ${n.length||0} issues`), console.log(n), console.log({
									gql: s[e][t].gqlThing,
									gateway: s[e][t].gatewayThing
								}), console.groupEnd()
							}
						console.groupEnd()
					}
					console.groupEnd()
				}
				if (Object(r.b)()) {
					const {
						allDiffs: n,
						issueCounts: o,
						totalIssues: r
					} = a(e, t);
					if (r <= 0) return;
					s.l(e => {
						e.setExtra("info", {
							allDiffs: n,
							issueCounts: o,
							totalIssues: r
						}), e.setExtra("bypassSampling", !0), s.d("GQL Modqueue Shadowtest Diff")
					})
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/6.f7c8fc190664e87d717e.js.map