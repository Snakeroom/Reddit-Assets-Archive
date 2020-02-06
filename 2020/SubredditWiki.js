// https://www.redditstatic.com/desktop2x/SubredditWiki.851049699cef4d895775.js
// Retrieved at 2/6/2020, 3:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./node_modules/lodash/orderBy.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseOrderBy.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s, r) {
				return null == e ? [] : (i(t) || (t = null == t ? [] : [t]), i(s = r ? void 0 : s) || (s = null == s ? [] : [s]), n(e, t, s))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				o = Math.min,
				d = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && i(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (s || e % 1 || t % 1) {
					var l = d();
					return o(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./src/graphql/operations/SubredditWiki.json": function(e) {
			e.exports = JSON.parse('{"id":"5834be60ee7a"}')
		},
		"./src/graphql/operations/SubredditWikiBannedContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"9b728f1ed735"}')
		},
		"./src/graphql/operations/SubredditWikiContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"6ff60c2af7f1"}')
		},
		"./src/graphql/operations/SubredditWikiPageSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"03acb455993d"}')
		},
		"./src/graphql/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/graphql/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				a = (e, t) => t ? e.getUTCDate() : e.getDate(),
				o = (e, t, s) => {
					const a = t ? e.getUTCMonth() : e.getMonth(),
						o = s ? r : i;
					return Object(n.c)(o[a])
				},
				d = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function c(e, t, s, n) {
				const i = new Date(1e3 * e),
					r = o(i, s, n),
					c = t ? a(i, s) + ", " : "";
				return "".concat(r, " ").concat(c).concat(d(i, s))
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let n;
			const i = new Map,
				r = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), n = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!r.get(t)) {
						r.set(t, s);
						const n = i.get(t);
						if (n) {
							n(e, s && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						i.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				o = e => {
					try {
						i.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/lodash/isEmpty.js"),
				i = s.n(n),
				r = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				l = s("./src/config.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				u = s("./src/reddit/helpers/path/index.ts");
			var p = s("./src/reddit/actions/ads/index.ts"),
				b = s("./src/reddit/actions/pages/subreddit.ts"),
				h = s("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				k = s("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				f = s("./src/lib/makeGqlRequest/index.ts"),
				O = s("./src/graphql/operations/WikiComparisonDiff.json"),
				v = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var j = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				C = s("./src/reddit/selectors/subredditWiki.ts"),
				w = s("./src/reddit/actions/wiki/wikiDiff/constants.ts");
			const y = Object(d.a)(w.c),
				E = Object(d.a)(w.b),
				N = Object(d.a)(w.a),
				P = e => async (t, s, n) => {
					const i = s(),
						r = Object(j.a)(e),
						a = Object(C.i)(i, {
							key: r
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: r
					};
					t(y(d));
					const c = await ((e, t) => Object(f.a)(e, Object.assign({}, O, {
						variables: Object.assign({}, t, {
							comparisonRevisionId: Object(v.b)(t.comparisonRevisionId),
							revisionId: Object(v.b)(t.revisionId)
						})
					})))(n.gqlContext(), e);
					let l = null,
						m = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							s = t && t.page && t.page.revisionComparisonDiffHtml;
						s ? m = s : l = {
							type: o.D.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.D.UNKNOWN_ERROR
					};
					return t(l ? N(Object.assign({}, d, {
						error: l
					})) : E(Object.assign({}, d, {
						htmlDiff: m
					}))), !l
				};
			var _ = s("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				T = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				S = s("./src/reddit/constants/parameters.ts"),
				I = s("./src/reddit/constants/wiki.ts"),
				W = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				M = s("./src/reddit/helpers/brandSafety/index.ts"),
				R = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				L = s("./src/reddit/i18n/utils.ts"),
				B = s("./src/reddit/models/Toast/index.ts"),
				A = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				D = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				F = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./src/reddit/selectors/user.ts");
			s.d(t, "subredditWikiDataPending", (function() {
				return U
			})), s.d(t, "subredditWikiDataLoaded", (function() {
				return V
			})), s.d(t, "subredditWikiDataFailed", (function() {
				return K
			})), s.d(t, "fetchSubredditWikiData", (function() {
				return G
			})), s.d(t, "handleWikiRedirects", (function() {
				return Y
			})), s.d(t, "subredditWikDataRequested", (function() {
				return Z
			})), s.d(t, "subredditWikiPageRequested", (function() {
				return Q
			}));
			const U = Object(d.a)(h.c),
				V = Object(d.a)(h.b),
				K = Object(d.a)(h.a),
				z = (e, t, s, n) => {
					return s === I.j ? q(e, t) : !!Object(C.c)(e, {
						subredditName: t,
						wikiPageName: s,
						revisionId: n
					})
				},
				q = (e, t) => !!Object(C.b)(e, {
					subredditName: t
				}),
				G = e => async (t, s, n) => {
					const {
						canShowFailToast: r,
						wikiPageName: d
					} = e, c = d === I.j, l = Object(H.P)(s()), m = Object.assign({}, e, {
						includePageData: e.includePageData && !c
					}), u = d ? Object(R.a)(Object.assign({}, e, {
						wikiPageName: d
					})) : void 0;
					t(U({
						options: m,
						pageKey: u
					}));
					const p = await Object(W.a)(n.gqlContext(), m),
						b = p.body,
						h = p.ok ? b.data && b.data.subreddit && b.data.subreddit.wiki : null;
					return p.ok && h ? t(V({
						options: m,
						pageKey: u,
						subredditWiki: h
					})) : (t(K({
						options: m,
						pageKey: u,
						error: p.error || {
							type: o.D.NOT_FOUND_ERROR
						}
					})), r && t(Object(g.e)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: B.b.Error,
						text: Object(a.a)(l, "error.genericPage"),
						buttonText: Object(a.a)(l, "listings.toast.retryButton"),
						buttonAction: G(e)
					}))), !(!p.ok || !i()(b.data.subreddit)) || !(!p.ok || !h)
				}, J = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, n) => {
						const i = n(),
							r = {
								sort: o.N.HOT
							},
							a = Object(c.a)(e, r.sort),
							d = i.listings.postOrder.api.error[a],
							l = i.listings.postOrder.api.pending[a],
							m = !!i.listings.postOrder.ids[a];
						return !!(l || m && !d) || (await s(Object(b.h)(a, e, r, t)), !n().listings.postOrder.api.error[a])
					}
				}, Y = e => async (t, s) => {
					const {
						params: n,
						url: i
					} = e, {
						wikiPageName: a
					} = n, o = Object(D.a)(i, n);
					let d = !1;
					return I.k.includes(a || "") ? (await (async (e, t) => {
						const s = "".concat(l.a.oldRedditUrl).concat(Object(u.b)(e));
						window.location.href = s
					})(e.url), d = !0) : i !== o && (await t(Object(r.c)(o)), d = !0), d
				}, Z = function e(t, s) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (i, r, a) => {
						const {
							subredditName: d = I.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = t, m = s[S.w], u = s[S.x], p = m ? Object(v.a)(m) : void 0, b = u ? Object(v.a)(u) : void 0, h = c === I.j, f = l === I.l.Revisions;
						let O = !1,
							j = !1;
						if (n) {
							const {
								pageName: e
							} = t;
							O = e === o.Nb.WikiContributors, j = e === o.Nb.WikiBanned
						}
						const C = r(),
							w = (h || n) && !q(C, d),
							y = !!c && !z(C, d, c, p),
							E = [];
						E.push(i(J(d))), (w || y) && E.push(i(G({
							includeDirectory: w,
							includePageData: y,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), l === I.l.Settings && c && E.push(i(Object(_.c)(d, c))), c && p && b && E.push(i(P({
							comparisonRevisionId: b,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), f && E.push(i(Object(T.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), O && E.push(i(Object(k.e)(d))), j && E.push(i(Object(x.e)(d))), (await Promise.all(E)).every(Boolean) || i(Object(g.e)({
							kind: B.b.Error,
							text: Object(L.c)("Something went wrong"),
							buttonText: Object(L.c)("Retry"),
							buttonAction: e(t, s, n)
						}))
					}
				}, Q = e => async (t, s) => {
					if (await t(Y(e))) return;
					const {
						params: n,
						queryParams: i
					} = e, r = n.subredditName || I.e;
					t(m.l({
						title: n.wikiPageName ? "".concat(n.wikiPageName, " - ").concat(r) : "wiki - ".concat(r)
					})), await t(Z(n, i));
					const a = Object(F.y)(s(), {
							subredditName: r
						}),
						o = s();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(A.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(M.a)([], [a])
					})))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "a", (function() {
				return f
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/structuredStyles/index.ts"),
				r = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/reddit/constants/blade.ts"),
				d = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				c = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(n.a)(r.p),
				g = Object(n.a)(r.q),
				x = Object(n.a)(r.o),
				k = (e, t, s) => async (n, i, r) => {
					const a = Object(p.y)(i(), {
						subredditName: e
					});
					if (a) return f(a, t, s)(n, i, r)
				}, f = (e, t, s) => async (n, r, p) => {
					const k = await Object(l.e)(t);
					n(h());
					const f = r();
					try {
						await Object(i.g)("communityIcon", k, e.id)(n, r, p)
					} catch (v) {
						return Object(b.a)(Object(d.c)(f, "something went wrong with the uploading the image")), n(Object(a.e)({
							kind: m.b.Error,
							text: Object(c.c)("Error uploading image, please try again later")
						})), void n(x())
					}
					const O = Object(u.d)(r(), {
						name: "communityIcon"
					});
					if (!O) return Object(b.a)(Object(d.c)(f, "image is null")), n(Object(a.e)({
						kind: m.b.Error,
						text: Object(c.c)("Error uploading image, please try again later")
					})), void n(x());
					await Object(i.k)(e.id, {
						communityIcon: O
					}, o.b.idCard, s)(n, r, p), n(Object(a.e)({
						kind: m.b.SuccessCommunity,
						text: Object(c.c)("Successfully updated Community Icon!")
					})), n(g())
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/graphql/operations/SubredditWikiBannedContributors.json"),
				l = s("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(o.a)(e, Object.assign({}, c, {
				variables: t
			}));
			var u = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: s,
						pageInfo: n
					} = t, i = [], r = {};
					return s.forEach(e => {
						const {
							date: t,
							redditor: s,
							editWikiBanInfo: n
						} = e.node;
						s.id && s.name && s.icon && (r[s.id] = {
							id: s.id,
							username: s.name,
							iconUrl: s.icon.url,
							date: t,
							daysRemaining: n.daysRemaining,
							note: n.note
						}, i.push(s.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						bannedContributors: r,
						userOrder: i
					}
				},
				p = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return N
			}));
			const g = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				k = Object(i.a)(h.b),
				f = e => async (t, s, i) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await m(i.gqlContext(), r);
					if (a.ok) {
						const s = a.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = u(n);
							t(x(Object.assign({}, s, {
								subredditName: e.toLowerCase()
							})))
						}
					} else {
						const s = a.error || {
							type: n.D.UNKNOWN_ERROR
						};
						t(k({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, O = Object(i.a)(h.a), v = (e, t) => async (s, n, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						o = await m(i.gqlContext(), a);
					if (o.ok) {
						const t = o.body;
						if (t.data.subreddit.wiki) {
							const n = u(t.data.subreddit.wiki);
							s(O(Object.assign({}, n, {
								subredditName: e.toLowerCase()
							})))
						}
					} else s(Object(r.e)({
						kind: b.b.Error,
						text: Object(p.c)("Something went wrong"),
						buttonText: Object(p.c)("Retry"),
						buttonAction: v(e, t)
					}));
					return o.ok
				}, j = Object(i.a)(h.e), C = (e, t) => async (s, i, o) => {
					const c = await ((e, t, s) => Object(a.b)(Object(d.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/friend"),
						method: n.bb.POST,
						data: {
							api_type: "json",
							name: s.username,
							type: "wikibanned",
							duration: s.duration,
							ban_reason: s.banReason,
							note: s.note
						}
					}))(o.apiContext(), e, t);
					if (c.ok) {
						s(Object(r.e)({
							kind: b.b.SuccessMod,
							text: Object(p.c)("Successfully banned user")
						}));
						const n = {
								subredditName: e,
								username: t.username
							},
							i = (await m(o.gqlContext(), n)).body;
						if (i.data.subreddit.wiki) {
							const t = u(i.data.subreddit.wiki);
							s(j({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (c.error) {
						let e;
						c.error.type === n.D.USER_DOESNT_EXIST && (e = Object(p.c)("That user doesn't exist")), s(Object(r.e)({
							kind: b.b.Error,
							text: e || Object(p.c)("Something went wrong")
						}))
					}
					return c.ok
				}, w = Object(i.a)(h.f), y = (e, t) => async (s, i, o) => {
					const c = await ((e, t, s) => Object(a.b)(Object(d.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/unfriend"),
						method: n.bb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikibanned"
						}
					}))(o.apiContext(), e, t);
					return c.ok ? (s(Object(r.e)({
						kind: b.b.SuccessMod,
						text: Object(p.c)("User has been successfully removed")
					})), s(w({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(r.e)({
						kind: b.b.Error,
						text: Object(p.c)("Something went wrong"),
						buttonText: Object(p.c)("Retry"),
						buttonAction: y(e, t)
					})), c.ok
				}, E = Object(i.a)(h.g), N = (e, t) => async (s, n, i) => {
					const a = {
							subredditName: e,
							username: t
						},
						o = await m(i.gqlContext(), a);
					if (o.ok) {
						const t = o.body;
						if (t.data.subreddit.wiki) {
							const n = u(t.data.subreddit.wiki),
								i = Object.keys(n.bannedContributors)[0];
							s(E({
								subredditName: e.toLowerCase(),
								bannedContributor: n.bannedContributors[i]
							}))
						}
					} else s(Object(r.e)({
						kind: b.b.Error,
						text: Object(p.c)("Something went wrong")
					}));
					return o.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/graphql/operations/SubredditWikiContributors.json"),
				l = s("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(o.a)(e, Object.assign({}, c, {
				variables: t
			}));
			var u = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: s,
						pageInfo: n
					} = t, i = [], r = {};
					return s.forEach(e => {
						const {
							date: t,
							redditor: s
						} = e.node;
						s.id && s.name && s.icon && (r[s.id] = {
							id: s.id,
							username: s.name,
							iconUrl: s.icon.url,
							date: t
						}, i.push(s.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						contributors: r,
						userOrder: i
					}
				},
				p = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return N
			}));
			const g = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				k = Object(i.a)(h.b),
				f = e => async (t, s, i) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await m(i.gqlContext(), r);
					if (a.ok) {
						const s = a.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = u(n);
							t(x(Object.assign({}, s, {
								subredditName: e.toLowerCase()
							})))
						}
					} else {
						const s = a.error || {
							type: n.D.UNKNOWN_ERROR
						};
						t(k({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, O = Object(i.a)(h.a), v = (e, t) => async (s, n, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						o = await m(i.gqlContext(), a);
					if (o.ok) {
						const t = o.body;
						if (t.data.subreddit.wiki) {
							const n = u(t.data.subreddit.wiki);
							s(O(Object.assign({}, n, {
								subredditName: e.toLowerCase()
							})))
						}
					} else s(Object(r.e)({
						kind: b.b.Error,
						text: Object(p.c)("Something went wrong"),
						buttonText: Object(p.c)("Retry"),
						buttonAction: v(e, t)
					}));
					return o.ok
				}, j = Object(i.a)(h.e), C = (e, t) => async (s, i, o) => {
					const c = await ((e, t, s) => Object(a.b)(Object(d.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/friend"),
						method: n.bb.POST,
						data: {
							api_type: "json",
							name: s,
							type: "wikicontributor"
						}
					}))(o.apiContext(), e, t);
					if (c.ok) {
						s(Object(r.e)({
							kind: b.b.SuccessMod,
							text: Object(p.c)("User has been successfully added")
						}));
						const n = {
								subredditName: e,
								username: t
							},
							a = (await m(o.gqlContext(), n)).body;
						if (a.data.subreddit.wiki) {
							const t = u(a.data.subreddit.wiki),
								n = Object.keys(t.contributors)[0];
							!!i().subreddits.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || s(j({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (c.error) {
						let e;
						const t = c.error.type;
						t === n.D.USER_DOESNT_EXIST ? e = Object(p.c)("That user doesn't exist") : t === n.D.BANNED_FROM_SUBREDDIT && (e = Object(p.c)("That user is banned from the subreddit")), s(Object(r.e)({
							kind: b.b.Error,
							text: e || Object(p.c)("Something went wrong")
						}))
					}
					return c.ok
				}, w = Object(i.a)(h.f), y = (e, t) => async (s, i, o) => {
					const c = await ((e, t, s) => Object(a.b)(Object(d.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/unfriend"),
						method: n.bb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikicontributor"
						}
					}))(o.apiContext(), e, t);
					return c.ok ? (s(Object(r.e)({
						kind: b.b.SuccessMod,
						text: Object(p.c)("User has been successfully removed")
					})), s(w({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(r.e)({
						kind: b.b.Error,
						text: Object(p.c)("Something went wrong"),
						buttonText: Object(p.c)("Retry"),
						buttonAction: y(e, t)
					})), c.ok
				}, E = Object(i.a)(h.g), N = (e, t) => async (s, n, i) => {
					const a = {
							subredditName: e,
							username: t
						},
						o = await m(i.gqlContext(), a);
					if (o.ok) {
						const t = o.body;
						if (t.data.subreddit.wiki) {
							const n = u(t.data.subreddit.wiki),
								i = Object.keys(n.contributors)[0];
							s(E({
								subredditName: e.toLowerCase(),
								contributor: n.contributors[i]
							}))
						}
					} else s(Object(r.e)({
						kind: b.b.Error,
						text: Object(p.c)("Something went wrong")
					}));
					return o.ok
				}
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/subredditSettings.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/graphql/operations/SubredditWikiPageSettings.json"),
				u = s("./src/reddit/models/SubredditWikiPage/index.ts");
			const p = (e, t) => Object(d.a)(e, Object.assign({}, m, {
					variables: t
				})),
				b = {
					[u.a.Inherit]: "0",
					[u.a.Contributors]: "1",
					[u.a.Mods]: "2"
				};
			var h = e => {
					const {
						editPermissions: t,
						editorsInfo: s,
						isVisible: n
					} = e, {
						edges: i,
						pageInfo: r
					} = s, a = [];
					return i.forEach(e => {
						e.node.name && e.node.icon && a.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: a,
						isVisible: n,
						afterToken: r.hasNextPage ? r.endCursor : null
					}
				},
				g = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = s("./src/reddit/i18n/utils.ts"),
				k = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "d", (function() {
				return _
			}));
			const v = Object(i.a)(O.c),
				j = (e, t) => async (s, n, i) => {
					const a = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(i.gqlContext(), a),
						d = Object(f.D)(n(), e);
					if (Object(f.R)(n(), d) || await s(Object(r.f)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = h(t.page.settings);
							s(v({
								pageKey: Object(g.a)(a),
								settings: e
							}))
						}
					}
					return o.ok
				}, C = Object(i.a)(O.b), w = (e, t, s) => async (n, i, r) => {
					const o = {
							subredditName: e,
							wikiPageName: t,
							after: s
						},
						d = await p(r.gqlContext(), o);
					if (d.ok) {
						const s = d.body,
							i = s.data.subreddit && s.data.subreddit.wiki;
						if (i && i.page) {
							const s = h(i.page.settings),
								{
									editorsInfo: r,
									afterToken: a
								} = s;
							n(C({
								editorsInfo: r,
								afterToken: a,
								pageKey: Object(g.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else n(Object(a.e)({
						kind: k.b.Error,
						text: Object(x.c)("Something went wrong"),
						buttonText: Object(x.c)("Retry"),
						buttonAction: w(e, t, s)
					}));
					return d.ok
				}, y = Object(i.a)(O.d), E = e => {
					let {
						editPermissions: t,
						isVisible: s,
						wikiPageName: i,
						subredditName: r
					} = e;
					return async (e, a, d) => {
						const m = await (e => Object(o.b)(Object(c.a)(e.context, [l.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/wiki/settings/").concat(e.wikiPageName),
							method: n.bb.POST,
							data: {
								permlevel: b[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: d.apiContext(),
							editPermissions: t,
							isVisible: s,
							wikiPageName: i,
							subredditName: r
						});
						return m.ok && e(y({
							editPermissions: t,
							isVisible: s,
							pageKey: Object(g.a)({
								wikiPageName: i,
								subredditName: r
							})
						})), m.ok
					}
				}, N = e => {
					let {
						subredditName: t,
						username: s,
						wikiPageName: i
					} = e;
					return async (e, r, d) => {
						const m = await (e => Object(o.b)(Object(c.a)(e.context, [l.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/alloweditor/add"),
							method: n.bb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: d.apiContext(),
							wikiPageName: i,
							subredditName: t,
							username: s
						});
						if (m.ok) e(Object(a.e)({
							kind: k.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(j(t, i));
						else if (m.error) {
							const t = m.error.type;
							let s = Object(x.c)("Something went wrong");
							t === n.D.NOT_FOUND_ERROR && (s = Object(x.c)("That user does not exist")), e(Object(a.e)({
								kind: k.b.Error,
								text: s
							}))
						}
						return m.ok
					}
				}, P = Object(i.a)(O.a), _ = e => {
					let {
						subredditName: t,
						username: s,
						wikiPageName: i
					} = e;
					return async (e, r, d) => {
						const m = await (e => Object(o.b)(Object(c.a)(e.context, [l.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/alloweditor/del"),
							method: n.bb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: d.apiContext(),
							wikiPageName: i,
							subredditName: t,
							username: s
						});
						return m.ok && (e(Object(a.e)({
							kind: k.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(P({
							username: s,
							pageKey: Object(g.a)({
								wikiPageName: i,
								subredditName: t
							})
						}))), m.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/graphql/operations/WikiRevisions.json");
			var c = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var p = (e, t) => Object(c.b)(Object(l.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t.subredditName, "/api/wiki/hide"),
				method: n.bb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(u.b)(t.revisionId)
				}
			});
			var b = (e, t) => Object(c.b)(Object(l.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t.subredditName, "/api/wiki/revert"),
				method: n.bb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(u.b)(t.revisionId)
				}
			});
			var h = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						s = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!s) throw new Error("Invalid response");
					return (e => {
						const t = {},
							s = [];
						return e.edges.forEach(e => {
							const n = e.node;
							t[n.id] = n, s.push(n.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: s
						}
					})(s)
				},
				g = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				x = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/subredditWiki.ts"),
				v = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "b", (function() {
				return _
			}));
			const j = Object(i.a)(v.d),
				C = Object(i.a)(v.c),
				w = Object(i.a)(v.b),
				y = e => async (t, s, i) => {
					const {
						canLoadMore: a = !1,
						canShowFailToast: c = !1,
						isRecent: l,
						subredditName: m,
						wikiPageName: u
					} = e, p = s(), b = Object(g.a)(e), x = Object(O.p)(p, {
						listingKey: b
					});
					if (!a && !!x) return !0;
					const v = x && x.pageInfo.endCursor || void 0;
					if (!(!x || x.pageInfo.hasNextPage)) return !0;
					const E = {
							after: v,
							isRecent: l,
							subredditName: m,
							wikiPageName: u
						},
						N = {
							key: b,
							options: E
						};
					t(j(N));
					const P = await ((e, t) => Object(o.a)(e, Object.assign({}, d, {
						variables: t
					})))(i.gqlContext(), E);
					if (P.ok) {
						const e = P.body;
						if (e.data.subreddit) {
							const s = h(e.data);
							t(C(Object.assign({}, N, s)))
						}
					} else {
						const s = P.error || {
							type: n.D.UNKNOWN_ERROR
						};
						t(w(Object.assign({}, N, {
							error: s
						}))), c && t(Object(r.e)({
							kind: f.b.Error,
							text: Object(k.c)("Something went wrong"),
							buttonText: Object(k.c)("Retry"),
							buttonAction: y(e)
						}))
					}
					return P.ok
				}, E = Object(i.a)(v.a), N = e => async (t, s, n) => {
					const {
						subredditName: i,
						wikiPageName: o
					} = e, d = Object(x.a)(Object.assign({}, e, {
						revisionId: void 0
					})), c = Object(g.a)(Object.assign({}, e, {
						isRecent: !1
					})), l = Object(g.a)(Object.assign({}, e, {
						isRecent: !0
					})), m = Object(O.p)(s(), {
						listingKey: c
					}), u = m && m.ids[0];
					if ((await b(n.apiContext(), e)).ok) {
						const e = (await Object(a.a)(n.gqlContext(), {
								includePageData: !0,
								subredditName: i,
								wikiPageName: o
							})).body,
							s = e.data.subreddit && e.data.subreddit.wiki,
							m = s && s.page;
						if (!m || !m.revision) return;
						if (m.revision.id === u) return void t(Object(r.e)({
							kind: f.b.SuccessCommunityGreen,
							text: Object(k.c)("Wiki page is already at selected revision!")
						}));
						t(E({
							page: m,
							pageKey: d,
							pageRevisionsListingKey: c,
							recentRevisionsListingKey: l,
							subredditName: i,
							wikiPageName: o
						}))
					} else t(Object(r.e)({
						kind: f.b.Error,
						text: Object(k.c)("Something went wrong"),
						buttonText: Object(k.c)("Retry"),
						buttonAction: N(e)
					}))
				}, P = Object(i.a)(v.e), _ = e => async (t, s, n) => {
					const i = await p(n.apiContext(), e);
					if (i.ok) {
						const s = i.body.status;
						t(P({
							revisionId: e.revisionId,
							isHidden: s
						}))
					} else t(Object(r.e)({
						kind: f.b.Error,
						text: Object(k.c)("Something went wrong"),
						buttonText: Object(k.c)("Retry"),
						buttonAction: N(e)
					}))
				}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				k = s("./src/lib/lessComponent.tsx");
			const f = k.a.div("Container", x.a),
				O = k.a.div("LoadingHitbox", x.a),
				v = e => setTimeout(() => {
					throw e
				}, 0);
			class j extends i.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					v(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && c.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (i) {
						v(i)
					}
				}
				destroySlot() {
					try {
						this.frame && c.b(this.frame)
					} catch (e) {
						v(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(h.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						v(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && c.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && c.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? i.a.createElement(f, {
						"data-slot": t
					}, i.a.createElement(O, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), i.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : i.a.createElement("div", {
						className: s
					})
				}
			}
			j.defaultProps = {
				sizes: [d.e]
			};
			t.a = Object(r.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(u.b)(t.placement, e.user, Object(o.a)("".concat(n).concat(s.url), s.queryParams), Object(p.y)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? c.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(b.b)(j))
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				o = s("./src/reddit/actions/modal.ts");
			const d = "non-empty-string-to-block-navigation";
			class c extends i.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || d
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: s = !0,
							location: n,
							showModal: i,
							dialogId: r
						} = this.props;
						return !(!s || e.pathname !== n.pathname) || (r && i(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return i.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
				showModal: () => e(Object(o.h)(t.dialogId))
			}))(Object(a.i)(c))
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				Planet: "ixfotyd9YXZz0LNAtJ25N",
				planet: "ixfotyd9YXZz0LNAtJ25N",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				subscribeButton: "_2Oxv8udy0lsocAGXEQxb8x",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				m = s("./src/reddit/components/SubredditNav/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				x = s("./src/reddit/constants/tracking.ts"),
				k = s("./src/reddit/selectors/telemetry.ts");
			var f = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				O = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				v = s("./src/reddit/selectors/widgets.ts"),
				j = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				C = s.n(j);
			const w = c.a.wrapped(f.a, "Planet", C.a),
				y = c.a.img("SubredditIcon", C.a),
				E = Object(a.c)({
					spPollsEnabled: h.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(O.a)(e, {
							subredditId: s
						})
					},
					widget: v.f
				});
			t.a = Object(r.b)(E)(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					n = e.subreddit ? e.subreddit.url : e.subredditUrl,
					r = e.subreddit ? e.subreddit.title : "",
					a = e.subreddit && Object(g.a)(e),
					d = !(!e.theme || !a),
					c = s.charAt(0).toUpperCase() + s.slice(1),
					h = !!e.subreddit && e.subredditInlineEditingEnabled,
					f = Object(o.a)(C.a.SubredditIcon, C.a.editableIcon, {
						[C.a.emptyEditableIcon]: !a
					}),
					O = i.a.createElement(l.a, {
						className: f,
						subreddit: e.subreddit,
						iconUrl: a || void 0,
						inTopBar: !0
					}),
					v = d ? i.a.createElement(y, {
						src: a || void 0
					}) : i.a.createElement(w, null),
					j = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0);
				return i.a.createElement("div", {
					className: C.a.container,
					style: {
						maxWidth: e.layout === p.g.Large ? "".concat(984, "px") : "100%"
					}
				}, i.a.createElement("div", {
					className: C.a.subredditMetaContainer
				}, h ? O : v, i.a.createElement("div", {
					className: Object(o.a)(C.a.textContainer, {
						[C.a.textContainerNoIcon]: !d
					})
				}, i.a.createElement("div", {
					className: C.a.text
				}, i.a.createElement("h1", {
					className: C.a.title
				}, r || c), !!r && i.a.createElement("h2", {
					className: C.a.description
				}, "r/", s)), i.a.createElement("div", {
					className: C.a.subscribeButtonContainer
				}, i.a.createElement(u.a, {
					className: C.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign({}, k.defaults(t), {
							source: "id_banner",
							action: x.c.CLICK,
							noun: e,
							subreddit: k.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: s,
						type: b.a.SUBREDDIT
					},
					small: !0
				})))), j && i.a.createElement(m.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: n,
					subredditId: t,
					subredditNavContainerClassName: C.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/CrosspostBox/index.m.less"),
				f = s.n(k),
				O = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = O.a.div("Container", f.a),
				C = O.a.div("PostMetaWrapper", f.a),
				w = O.a.wrapped(p.c, "PostTitle", f.a),
				y = O.a.div("FlatList", f.a),
				E = O.a.div("FlatItem", f.a),
				N = O.a.span("FlatListDotSpacer", f.a),
				P = O.a.wrapped(j, "LinkContainer", f.a),
				_ = O.a.div("Content", f.a),
				T = O.a.div("ThumbnailContainer", f.a),
				S = Object(o.c)({
					isCurrentUserProfilePost: g.h,
					language: x.P,
					post: g.I,
					shouldOpenPostInNewTab: x.T,
					subreddit: g.U
				}),
				I = Object(r.b)(S);
			t.a = I(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					mediaProps: n,
					post: r,
					subreddit: a,
					language: o
				} = e;
				if (!r) return null;
				const d = {
						post: r,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						language: o,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					c = t;
				return r && !r.media ? i.a.createElement(P, {
					className: c
				}, i.a.createElement(_, null, i.a.createElement(C, null, i.a.createElement(u.a, d)), W(r), r.source && i.a.createElement(b.a, {
					post: r
				}), R(e)), B(e)) : i.a.createElement(j, {
					className: c
				}, i.a.createElement(C, null, i.a.createElement(u.a, d)), W(r), M(e), R(e))
			});
			const W = e => i.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				M = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return i.a.createElement("div", null, i.a.createElement(m.a, v({}, n, {
						className: f.a.mediaContainer
					})))
				},
				R = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return i.a.createElement(y, null, i.a.createElement(E, null, Object(d.c)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), i.a.createElement(N, null), i.a.createElement(E, null, L(e)))
				},
				L = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: r
					} = s;
					return i.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(d.c)(t, "posts.comments.noun", r, {
						count: Object(l.b)(r)
					}))
				},
				B = e => i.a.createElement(T, null, i.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, s) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/featureFlags/component.tsx"),
				d = s("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				c = s.n(d);
			const l = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: Object(a.a)(t, c.a.loading)
					})
				},
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsCommunityTipJar")]).then(s.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(o.a)("spCommunityTipJar", l)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-CommunityCard").then(s.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const i = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Leaderboard").then(s.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = i
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(b);
			const g = d.a.wrapped(m.a, "Planet", h.a),
				x = d.a.div("SubredditIcon", h.a),
				k = d.a.div("PositionedImage", h.a),
				f = d.a.div("HeaderContent", h.a),
				O = d.a.div("HeaderContainer", h.a),
				v = d.a.span("HeaderText", h.a),
				j = d.a.wrapped(r.a, "HeaderUrl", h.a),
				C = d.a.span("Container", h.a),
				w = Object(o.a)(e => {
					const t = Object(u.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						r = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (n) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const m = !!r && !!o && "left" === n,
						b = Object(u.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						w = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						y = "".concat(4 + w, "px");
					return i.a.createElement(C, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, i.a.createElement(j, {
						className: e.className,
						to: e.url
					}, i.a.createElement(O, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && i.a.createElement(f, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (s ? i.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: y,
							width: y
						}
					}) : i.a.createElement(g, {
						style: {
							padding: "".concat(Object(p.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: y,
							width: y
						}
					})), i.a.createElement(v, {
						style: {
							paddingTop: 32 === w ? "4px" : "14px"
						}
					}, t)), i.a.createElement(k, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!r,
							[h.a.hoverPositionedImage]: !!r && !!o
						}),
						style: Object.assign({}, d, {
							height: "".concat(Object(p.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = w
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = s("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.b)(e => {
				const t = "".concat(e.tooltipId, "-hover-id");
				return i.a.createElement(r.a, {
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, i.a.createElement(a.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/IdCard/index.m.less"),
				a = s.n(r);
			const o = i.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return i.a.createElement("div", {
					className: a.a.Banner,
					style: t && t.length ? {
						backgroundImage: "url(".concat(t, ")")
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/app/strings/index.ts"),
				i = s("./src/config.ts"),
				r = s("./src/reddit/constants/listings.ts"),
				a = s("./src/reddit/constants/page.ts");
			const o = e => e && e.toLowerCase() === r.b.Popular,
				d = e => e && e.toLowerCase() === r.b.All,
				c = e => e && e === a.b,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: s,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, s, a, m, u, {
						language: p,
						listingName: b,
						subreddit: h,
						idCardWidget: g
					} = e;
					const x = g && g.subscribersText || Object(n.a)(p, "structuredStyles.widgets.id-card.subscribersText"),
						k = g && g.currentlyViewingText || Object(n.a)(p, "structuredStyles.widgets.id-card.currentlyViewingText");
					let f, O;
					if (c(b)) {
						t = "".concat(i.a.assetPath, "/img/id-cards/home-banner@2x.png"), a = l("url('".concat(i.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = r.c[r.b.Home]; {
							s = Object(n.a)(p, "listings.home.longDescription");
							const e = Object(n.a)(p, "listings.home.title");
							m = e.charAt(0).toUpperCase() + e.slice(1)
						}
					} else d(b) ? (t = "".concat(i.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(p, "listings.all.longDescription"), a = l("url('".concat(i.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/all", u = r.c[r.b.All]) : o(b) ? (t = "".concat(i.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(p, "listings.popular.longDescription"), a = l("url('".concat(i.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/popular", u = r.c[r.b.Popular]) : b && (s = g && g.description, a = l(""), m = h.displayText, u = h.url, O = g && g.subscribersCount, f = g && g.currentlyViewingCount);
					return Object.assign({
						snooBackground: a,
						description: s,
						titleText: m,
						url: u,
						subscribersCount: O,
						subscribersText: x,
						currentlyViewingText: k,
						currentlyViewingCount: f
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/IdCard/index.m.less"),
				o = s.n(a);
			const d = e => {
				let {
					snooBackground: t
				} = e;
				return i.a.createElement("div", {
					className: o.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: "".concat(t.width, "px ").concat(t.height, "px"),
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: s
				} = e;
				return i.a.createElement("div", {
					className: Object(r.a)(o.a.Title, o.a.TitleShifted)
				}, i.a.createElement(d, {
					snooBackground: s
				}), i.a.createElement("div", {
					className: o.a.TitleTextShiftedContainer
				}, i.a.createElement("span", {
					className: o.a.TitleText
				}, t)))
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/selectors/widgets.ts"),
				b = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				h = s.n(b);
			const g = Object(a.c)({
					idCardWidget: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(p.d)(e, {
							subredditId: s
						})
					}
				}),
				x = e => e.includeIcon ? e.idCardWidget && e.idCardWidget.description ? i.a.createElement(u.c, null, "Edit your description and custom icon") : i.a.createElement(u.c, null, "Add a community description and custom icon") : e.idCardWidget && e.idCardWidget.description ? i.a.createElement(u.c, null, "Edit your description") : i.a.createElement(u.c, null, "Add a community description"),
				k = e => e.includeIcon ? i.a.createElement(u.c, null, "Tell us about your community and upload a custom avatar so users can easily identify your community") : i.a.createElement(u.c, null, "Tell us more about your community.");
			class f extends i.a.Component {
				componentDidMount() {
					this.props.sendEvent(m.e), this.props.onViewTooltip()
				}
				render() {
					const e = x(this.props),
						t = k(this.props);
					return i.a.createElement("div", {
						className: h.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, i.a.createElement("span", {
						className: h.a.topRow
					}, i.a.createElement("h3", {
						className: h.a.title
					}, e)), i.a.createElement("p", {
						className: h.a.tooltipBody
					}, t), i.a.createElement(c.f, {
						className: h.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, i.a.createElement(u.c, null, "Got it")))
				}
			}
			t.a = Object(r.b)(g, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissTooltip: () => {
						e(Object(o.i)()), Object(l.O)(s, !0)
					},
					onViewTooltip: () => {
						Object(l.ab)()
					}
				}
			})(Object(d.b)(f))
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, s) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", p.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					language: m,
					post: u,
					subredditOrProfile: h
				} = e;
				return i.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, i.a.createElement(c.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, i.a.createElement(d.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: h
				}), i.a.createElement("span", null, h.displayText)), ((e, t, s) => {
					if (s) return i.a.createElement("div", {
						role: "img",
						"aria-label": Object(r.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, i.a.createElement(b, null))
				})(m, u.author, s), h && h.isQuarantined && i.a.createElement(o.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(o);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return i.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
				}, i.a.createElement(a.a, {
					className: Object(r.a)(d.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(d.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(d.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: d.a.thumbnailLinkText,
					outboundLinkIconClassName: d.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/MiniCardPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/Media/index.tsx"),
				h = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				k = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				j = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				C = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/models/Vote/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				E = s("./src/reddit/selectors/moderatorPermissions.ts"),
				N = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/CommentsLink/index.tsx"),
				S = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/Flatlist/index.tsx"),
				W = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				L = s("./src/reddit/components/ShareMenu/index.tsx"),
				B = s("./src/reddit/components/TrackingHelper/index.tsx"),
				A = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/helpers/trackers/post.ts"),
				F = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/icons/fonts/Share/index.tsx"),
				U = s("./src/reddit/models/User/index.ts"),
				V = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				K = s.n(V),
				z = s("./src/lib/lessComponent.tsx");
			const q = "-MiniCardModMenu",
				G = "-MiniCardOverflowMenu",
				J = "-MiniCardShareMenu",
				Y = z.a.wrapped(S.a, "HorizontalVotes", K.a),
				Z = z.a.button("ShareButton", K.a),
				Q = Object(f.t)({
					currentProfileName: f.h,
					isCommentPermalink: f.v,
					isCommentsPage: f.w,
					isProfilePostListing: f.H,
					pageLayer: e => e
				}),
				X = Object(a.c)({
					layout: f.K,
					subreddit: f.q
				});
			var $ = Q(Object(r.b)(X, {})(Object(B.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: r,
						hasModFlairPerms: a,
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: u,
						isSticky: p,
						language: b,
						layout: h,
						modModeEnabled: g,
						onCommentsClick: x,
						post: k,
						sendEvent: f,
						showEditFlair: O,
						showEditPost: v,
						subreddit: j
					} = e, C = e => f(Object(D.f)(k.id, e)), w = k.postId, y = Object(I.d)(q, k.id, m, p), E = !!n && Object(U.f)(n) === k.author;
					return i.a.createElement("div", {
						className: Object(o.a)(K.a.flatlistContainer, s)
					}, i.a.createElement(Y, {
						compact: !1,
						model: k,
						onVoteClick: r,
						scoreClassName: K.a.score
					}), i.a.createElement(T.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: k.id,
						modModeEnabled: g,
						numComments: k.numComments,
						type: A.g.Compact,
						onClick: x
					}), i.a.createElement(L.a, {
						className: K.a.shareMenu,
						dropdownId: Object(I.d)(J, k.id, m, p),
						permalink: k.permalink,
						post: k,
						sendEventWithName: C,
						subreddit: j
					}, i.a.createElement(Z, null, i.a.createElement(H.a, {
						className: K.a.shareIcon
					}), i.a.createElement("span", {
						className: K.a.shareText
					}, i.a.createElement(F.c, null, "share")))), d && i.a.createElement(W.a, {
						dropdownId: y,
						onClick: () => C("post_mod_action_menu")
					}, i.a.createElement(I.b, {
						className: K.a.modActionsIcon
					}), i.a.createElement(M.a, {
						canEditFlair: a && !!O,
						hasModPostPerms: d,
						isOverlay: !!m,
						isPostAuthor: E,
						language: b,
						modModeEnabled: g,
						post: k,
						tooltipId: y
					})), i.a.createElement(R.g, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: k.permalink,
						postId: w,
						dropdownId: Object(I.d)(G, k.id, m, p),
						isFixed: p,
						sendEvent: f,
						showEditPost: !!v,
						showEditFlair: !!O,
						useFlatlistBreakpoints: Object(R.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ee = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				te = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(se),
				ie = s("./src/reddit/components/MiniCardPost/index.m.less"),
				re = s.n(ie);
			s.d(t, "a", (function() {
				return oe
			}));
			const ae = Object(f.t)(),
				oe = Object(r.b)(() => Object(a.c)({
					activeModalId: y.a,
					autoplayPref: _.b,
					crosspostRoot: P.c,
					crosspostSubredditOrProfile: P.d,
					currentUser: _.i,
					flairStyleTemplate: f.O,
					hideNSFWPref: _.y,
					isActive: P.g,
					language: _.P,
					moderatorPermissions: E.i,
					modModeEnabled: f.M,
					post: P.I,
					showEditFlair: N.a,
					subredditOrProfile: P.U,
					userIsOp: _.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: i
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: i
							}))
						},
						handleVote: t => {
							const n = t === w.a.upvoted ? Object(l.Q)(s) : Object(l.r)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(l.O)(s)),
						onOpenReportsDropdown: t => e(Object(u.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: i
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: i
						})
					}
				}));
			t.b = ae(oe(Object(d.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: n,
					crosspostRoot: r,
					crosspostSubredditOrProfile: a,
					currentUser: d,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: u,
					hideNSFWPref: f,
					language: w,
					moderatorPermissions: y,
					modModeEnabled: E,
					onClickPost: N,
					post: P,
					scrollerItemRef: _,
					shouldPause: T,
					showMetaLine: S = !0,
					showEditFlair: I,
					subredditOrProfile: W,
					userIsOp: M
				} = e, {
					media: R
				} = r || P, L = R && R.type, B = Object(x.b)(P.id), A = L === C.n.RTJSON, D = M && A, F = Object(v.a)(y), H = Object(O.a)(y), U = R && L !== C.n.RTJSON && L !== C.n.TEXT, V = !R && !!P.source && Object(c.a)(P.source.url), K = R && i.a.createElement(b.a, {
					autoplayPref: t,
					availableWidth: s,
					className: re.a.media,
					imageBoxClassName: re.a.mediaImageBox,
					imageBoxContentImageClassName: re.a.mediaImageBoxContentImage,
					forceAspectRatio: C.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: r || P,
					scrollerItemRef: _,
					shouldPause: T,
					shouldLoad: u,
					showCentered: !0,
					showFull: !1
				});
				return i.a.createElement(g.a, {
					className: Object(o.a)(re.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(j.a)(e), n),
					style: Object.assign({}, Object(j.b)(e.flairStyleTemplate), Object(j.d)(e)),
					post: P,
					onClick: N,
					eventFactory: l
				}, i.a.createElement(h.a, {
					className: re.a.backgroundWrapper,
					flairStyleTemplate: m
				}, U && K, i.a.createElement("div", {
					className: re.a.innerContainer
				}, V && i.a.createElement(te.a, {
					post: P,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), i.a.createElement(k.c, {
					className: re.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: P,
					size: k.b.Large,
					titleColor: m && m.postTitleColor
				}), S && W && i.a.createElement(ee.a, {
					className: re.a.metaLine,
					crosspostSubredditOrProfile: a,
					hideNSFWPref: f,
					language: w,
					post: P,
					subredditOrProfile: W
				}), !U && i.a.createElement("div", {
					className: re.a.mediaWrapper
				}, K), i.a.createElement("div", {
					className: re.a.flexSpacer
				}), i.a.createElement($, {
					currentUser: d,
					handleVote: e.handleVote,
					hasModFlairPerms: H,
					hasModPostPerms: F,
					language: w,
					modModeEnabled: E,
					post: P,
					showEditFlair: I,
					showEditPost: D
				}))), e.activeModalId === B && i.a.createElement(x.a, {
					flairs: P.flair,
					subredditId: P.belongsTo.id,
					modalId: B,
					onFlairChanged: e.onFlairChanged
				}), i.a.createElement(p.d, {
					postId: P.id
				}))
			})))
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/icons/fonts/Info/index.tsx"),
				c = s("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = s.n(c);
			const m = Object(r.a)(o.a),
				u = ["center", "bottom"],
				p = ["center", "top"];
			class b extends i.a.Component {
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
						props: e
					} = this;
					return i.a.createElement("span", {
						className: l.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, i.a.createElement(d.a, null), i.a.createElement(m, {
						className: Object(a.a)(e.className, l.a.textTooltip),
						children: e.children,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: u,
						text: e.text,
						tooltipPosition: p
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: d,
					redditStyle: u,
					theme: p
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return i.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(o.c)(n, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? i.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : i.a.createElement(a.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				o = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(k);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: k,
					isOverlay: O,
					language: v,
					post: j,
					shouldShowSubscribeButton: C,
					subredditOrProfile: w,
					tooltipType: y
				} = e;
				return i.a.createElement("div", {
					className: f.a.metaContainer
				}, !n && !j.isSponsored && w && i.a.createElement(o.a, {
					postId: j.id,
					subredditName: w.name
				}, i.a.createElement(u.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: w.url
				}, w.displayText)), w && w.isQuarantined && i.a.createElement(m.a, null), !n && !j.isSponsored && w && C && !k && i.a.createElement(p.a, {
					getEventFactory: e => Object(g.f)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(x.e)(w) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: j.id,
					small: !0
				}), !n && !j.isSponsored && i.a.createElement(h.b, null), !n && !j.isSponsored && i.a.createElement(d.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), i.a.createElement(l.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					language: v,
					post: j,
					tooltipType: y
				}), i.a.createElement(c.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!n,
					language: v,
					post: j,
					tooltipType: y
				}), w && i.a.createElement(a.a, {
					className: f.a.donationAmount,
					contentId: j.id,
					subredditId: w.id
				}), i.a.createElement(r.a, {
					hideCta: s,
					isOverlay: O,
					thing: j,
					tooltipType: y
				}))
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, s) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-autosize-textarea/lib/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const u = e => {
					let {
						className: t,
						children: s,
						editorWrapperRef: n,
						initialHeight: r
					} = e;
					return i.a.createElement("div", {
						className: Object(o.a)(c.a.editorWrapper, t),
						style: r ? {
							height: r
						} : void 0,
						ref: n
					}, s)
				},
				p = e => {
					var {
						isFullHeight: t,
						textAreaRef: s
					} = e, n = m(e, ["isFullHeight", "textAreaRef"]);
					return i.a.createElement(a.a, l({
						className: Object(o.a)(c.a.textareaAutosize, {
							[c.a.mIsFullHeight]: t
						}),
						innerRef: s
					}, n))
				};
			class b extends i.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const e = this.props,
						{
							className: t,
							initialHeight: s,
							innerRef: n,
							onEditorResize: r
						} = e,
						a = m(e, ["className", "initialHeight", "innerRef", "onEditorResize"]),
						{
							isResized: o
						} = this.state;
					return i.a.createElement(u, {
						className: t,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: s
					}, i.a.createElement(p, l({}, a, {
						children: !0,
						isFullHeight: !!o,
						textAreaRef: n
					})))
				}
			}
			t.a = b
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/index.tsx"),
				p = s("./src/reddit/components/Translated/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				j = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/components/MiniCardPost/index.m.less"),
				w = s.n(C),
				y = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				E = s.n(y);
			const N = e => e.type === O.f.Spoiler,
				P = Object(h.t)();
			t.a = P(Object(u.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: i,
					onPostClick: d,
					trendingPost: u,
					trendingSearch: h,
					shouldOpenPost: O,
					showSubredditMeta: C = !0,
					showSubredditName: y,
					subredditOrProfile: P
				} = e, _ = u && u.preview && u.preview.url || void 0, T = u && u.isSponsored ? "promoted_trend" : "trending", S = u && Object(c.a)(u.permalink) || "", I = O && S || h && Object(a.a)("/search", {
					q: h.rawQuery,
					source: T
				}) || S, W = h ? h.subredditInfo && h.subredditInfo.icon : P && P.icon.url, M = h ? h.subredditInfo && h.subredditInfo.displayText : P && (P.displayText || P.name), R = u ? u.flair.filter(N) : [], L = u ? u.score : 0, B = u ? u.numComments : 0, A = u && u.isSponsored, D = Object(j.a)(e).body, F = "linear-gradient(\n      ".concat(Object(n.j)(D, .2), ",\n      ").concat(Object(n.j)(D, .3), ",\n      ").concat(Object(n.j)(D, .4), ",\n      ").concat(Object(n.j)(D, .6), ",\n      ").concat(Object(n.j)(D, .8), ",\n      ").concat(D, "\n    )"), H = r.a.createElement("div", {
					className: Object(o.a)(E.a.trendingPost, {
						[E.a["m-background"]]: !!_
					})
				}, r.a.createElement(g.a, {
					to: I
				}, r.a.createElement("div", {
					className: Object(o.a)(E.a.backgroundWrapper, w.a.backgroundWrapper, t),
					style: {
						background: Object(v.g)(Object(j.a)(e).body, _ || Object(j.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": F
					}
				}, A && r.a.createElement("div", {
					className: E.a.promoted
				}, r.a.createElement(f.c, null, "promoted")), r.a.createElement("div", {
					className: Object(o.a)(E.a.innerContainer, w.a.innerContainer, i),
					onClick: d,
					title: u ? u.title : ""
				}, r.a.createElement("h2", {
					className: u ? E.a.title : E.a.titleNoDescription
				}, e.title), u ? r.a.createElement("div", {
					className: Object(o.a)(E.a.description, s)
				}, R.length > 0 && r.a.createElement(m.a, {
					className: E.a.flair,
					titleFlair: R,
					nowrap: !0,
					post: u,
					showCategoryTag: !1
				}), u.title) : r.a.createElement("div", {
					className: E.a.spacer
				}), C && W && M && r.a.createElement(x.a, {
					className: E.a.relatedSubredditMetaData,
					iconClassName: E.a.subredditIcon,
					iconUrl: W || void 0,
					suffix: r.a.createElement(p.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: M
						}
					})
				}), !C && u && r.a.createElement("div", {
					className: E.a.metaLine
				}, y && M && r.a.createElement("span", {
					className: E.a.meta
				}, Object(k.b)(M)), r.a.createElement("span", {
					className: E.a.meta
				}, r.a.createElement(f.c, null, "".concat(Object(l.b)(L), " "), r.a.createElement(f.a, {
					count: L,
					name: "score",
					plural: "points",
					singular: "point"
				}))), r.a.createElement("span", {
					className: E.a.meta
				}, r.a.createElement(f.c, null, "".concat(Object(l.b)(B), " "), r.a.createElement(f.a, {
					count: B,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return A ? r.a.createElement(b.a, {
					post: u,
					children: H
				}) : H
			})))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/app/strings/index.ts"),
				d = s("./src/reddit/components/BannerAd/index.tsx"),
				c = s("./src/config.ts"),
				l = s("./node_modules/lodash/random.js"),
				m = s.n(l),
				u = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.div("BannerContainer", p.a),
				g = b.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", p.a),
				x = [{
					img: "/img/house-ads/btc.png",
					href: "/r/btc"
				}, {
					img: "/img/house-ads/campfirecooking.png",
					href: "/r/campfirecooking"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/rubberducks.png",
					href: "/r/advertising"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/imaginarycolorscapes.png",
					href: "/r/imaginarycolorscapes"
				}, {
					img: "/img/house-ads/imaginarydragons.png",
					href: "/r/imaginarydragons"
				}, {
					img: "/img/house-ads/oldschoolcelebs.png",
					href: "/r/oldschoolcelebs"
				}];
			var k = () => {
					const e = m()(0, x.length - 1),
						{
							img: t,
							href: s
						} = x[e];
					return i.a.createElement(h, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(o.a)("en", "sidebar.sponsored")
					}, i.a.createElement("a", {
						href: c.a.redditUrl + s,
						target: "_blank"
					}, i.a.createElement(g, {
						src: c.a.assetPath + t
					})))
				},
				f = s("./src/lib/constants/index.ts"),
				O = s("./src/reddit/components/PostMedia/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/components/PostTopMeta/index.tsx"),
				C = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				w = s("./src/lib/getShortenedLink.ts"),
				y = s("./src/lib/opener/index.ts"),
				E = s("./src/reddit/actions/ads/index.ts"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				P = s("./src/reddit/constants/adEvents.ts"),
				_ = s("./src/reddit/contexts/InsideOverlay.tsx"),
				T = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				S = s("./src/reddit/helpers/adCount/index.ts"),
				I = s("./src/reddit/helpers/pixels.ts"),
				W = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				R = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				L = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				B = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				A = s("./src/reddit/models/Theme/index.ts"),
				D = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				F = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				U = s.n(H);
			const V = b.a.wrapped(e => i.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", U.a);
			class K extends i.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(F.F)(e.media) || Object(F.C)(e.media) ? "" : e.media.content,
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case f.eb.IMAGE:
							return i.a.createElement(V, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var z = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				q = s.n(z);
			const G = b.a.wrapped(j.d, "PostTopMeta", q.a),
				J = b.a.div("BannerAdContainer", q.a),
				Y = e => {
					let {
						children: t
					} = e;
					return i.a.createElement("div", null, t)
				},
				Z = b.a.div("PromotedPostContainer", q.a),
				Q = b.a.wrapped(L.a, "OutboundLinkIcon", q.a),
				X = b.a.div("SourceLinkWrapper", q.a),
				$ = b.a.div("TopLine", q.a),
				ee = b.a.wrapped(v.c, "PostTitle", q.a),
				te = b.a.div("PostMediaWrapper", q.a),
				se = b.a.div("BackgroundWrapper", q.a),
				ne = b.a.wrapped(N.a, "PostContainer", q.a),
				ie = 640,
				re = (e, t) => {
					Object(I.a)(t.events, P.a.Click, t), t.source ? t.source.outboundUrl ? Object(y.d)(t.source.outboundUrl, y.c.BLANK) : Object(y.d)(t.source.url, y.c.BLANK) : Object(y.d)(t.permalink, y.c.BLANK)
				},
				ae = e => Object(R.a)(e.title, 100),
				oe = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(M.a)(Object(W.a)(e), B.a.actionIcon, B.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				de = e => ({
					background: Object(A.g)(Object(D.a)(e).body, null, null) || ""
				});
			class ce extends i.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: n
					} = this.props;
					let r, a, d = {};
					return e.isBlank ? (r = Y, a = null) : e.isMediaOnly ? (r = J, d = {
						"data-before-content": Object(o.a)("en", "sidebar.sponsored")
					}, a = i.a.createElement(K, {
						post: e
					})) : (r = Z, a = i.a.createElement(se, {
						style: de(this.props)
					}, i.a.createElement($, null, i.a.createElement(G, {
						tooltipType: n ? j.c.Lightbox : void 0,
						language: f.y,
						post: e,
						showTimestamp: !1
					})), i.a.createElement(ee, {
						post: e,
						size: v.b.Large,
						format: ae
					}), e.source && i.a.createElement(X, null, i.a.createElement(T.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(w.a)(e), i.a.createElement(Q, null))), i.a.createElement(te, null, e.media && i.a.createElement(O.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: ie,
						shouldLoad: !0
					})))), i.a.createElement(r, d, i.a.createElement(ne, {
						className: t,
						isOverlay: n,
						post: e,
						onClick: re,
						eventFactory: s,
						style: oe(this.props)
					}, a))
				}
			}
			var le = Object(r.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: s,
							placementIndex: n,
							isOverlay: i
						} = t;
						e(Object(E.c)(Object(S.a)(s, !!i, n)))
					}
				}))(Object(_.b)(Object(C.a)(ce))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				ue = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				pe = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				be = s.n(pe);
			const he = Object(a.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, i = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(S.a)(s, i, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(r.b)(he),
				xe = b.a.wrapped(d.a, "BannerAd", be.a),
				ke = b.a.wrapped(ue.a, "ThemedWidget", be.a),
				fe = b.a.div("SidebarAdPlaceholder", be.a),
				Oe = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				ve = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(F.B)(e.media) && e.media.content)),
				je = e => !!e && e.isBlank;
			class Ce extends i.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: r,
						refreshKey: a,
						listingName: d,
						placement: c,
						sizes: l,
						position: m,
						redditStyle: u,
						forcePlaceholder: p,
						forceHouseAd: b,
						waitForProgrammatic: h
					} = this.props;
					return p || t || !ve(s) && h ? i.a.createElement(me.a, null, i.a.createElement(ke, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, i.a.createElement(fe, {
						"data-before-content": Object(o.a)("en", "sidebar.sponsored")
					}))) : b ? i.a.createElement(me.a, null, i.a.createElement(ke, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, i.a.createElement(k, null))) : ve(s) ? i.a.createElement(me.a, null, i.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: d,
						placement: c,
						placementIndex: r
					})) : i.a.createElement(me.a, null, i.a.createElement(ke, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: u
					}, je(s) && i.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: d,
						placement: c,
						placementIndex: r
					}), i.a.createElement(xe, {
						id: Oe(c, n, r),
						sizes: l,
						placement: c,
						listingName: d,
						refreshKey: a,
						position: m,
						dataBeforeContent: Object(o.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(Ce)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/selectors/brandSafety.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const u = Object(a.t)();
			t.a = u(Object(r.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: n
				} = t;
				const i = Object(o.b)(e, {
						listingName: s,
						pageLayer: n
					}),
					r = Object(d.x)(e),
					a = Object(o.e)(e);
				return {
					canShowAd: i && !r,
					forcePlaceholder: !Object(o.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: a
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: n,
					pageLayer: r
				} = e, a = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !s && t && r ? i.a.createElement(c.a, l({
					forceHouseAd: n
				}, a)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(i);
			t.a = n.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", i.a)
		},
		"./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				Pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				DropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				dropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				OverflowMenu: "KZF0GvnWopJYsNtVGODBn",
				overflowMenu: "KZF0GvnWopJYsNtVGODBn"
			}
		},
		"./src/reddit/components/SidebarSubredditChannels/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2sEbIFP3ssTnt1Fo23m26r",
				wrapper: "_2sEbIFP3ssTnt1Fo23m26r"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				primaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				ModalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				modalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				ModalText: "_3HL4gEFxPNzkrPu94hblvT",
				modalText: "_3HL4gEFxPNzkrPu94hblvT",
				ItemLink: "vByM_anguY6xuCJEcusmJ",
				itemLink: "vByM_anguY6xuCJEcusmJ",
				Detail: "_1hkd6aDOGqeroDz5-yntAS",
				detail: "_1hkd6aDOGqeroDz5-yntAS",
				DescText: "_2Kwn1xR6xMSka95C9d72vF",
				descText: "_2Kwn1xR6xMSka95C9d72vF",
				Title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				Header: "tLKlMoU4-CQkARSxZg_yj",
				header: "tLKlMoU4-CQkARSxZg_yj",
				ChatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				chatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				PlanetIcon: "hsKCEb94KysCjbHbmbhzx",
				planetIcon: "hsKCEb94KysCjbHbmbhzx",
				Pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				Group: "dfN8kolCvNCsNzzf9W39l",
				group: "dfN8kolCvNCsNzzf9W39l",
				Key: "_2fgNZYjyiPjn_UlFwxeaVr",
				key: "_2fgNZYjyiPjn_UlFwxeaVr",
				SubredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				subredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				EditButton: "_21mAHvYUh9NgVPMyp45QZJ",
				editButton: "_21mAHvYUh9NgVPMyp45QZJ",
				ShowAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				showAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				ChannelName: "KIQLM-ci4WJOXrwjTsEzx",
				channelName: "KIQLM-ci4WJOXrwjTsEzx",
				HeaderText: "_3n6CTc1D2t_MfB0tNSgiAj",
				headerText: "_3n6CTc1D2t_MfB0tNSgiAj"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/orderBy.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/opener/index.ts"),
				m = s("./src/app/strings/index.ts"),
				u = s("./src/chat/helpers/urls/index.ts"),
				p = s("./src/reddit/actions/chat/subredditChannel.ts"),
				b = s("./src/reddit/actions/chat/toggle.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				g = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/trackers/chat.ts"),
				j = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				w = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				y = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				E = s("./src/reddit/models/SubredditChannel/index.ts"),
				N = s("./src/reddit/selectors/chat.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/subredditChannel.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/SubredditChannelList/index.m.less"),
				I = s.n(S);
			s.d(t, "a", (function() {
				return Q
			}));
			const W = c.a.wrapped(g.f, "ModalFormItem", I.a),
				M = c.a.wrapped(O.f, "PrimaryButton", I.a),
				R = c.a.wrapped(g.m, "ModalText", I.a),
				L = c.a.a("ItemLink", I.a),
				B = c.a.p("Detail", I.a),
				A = c.a.p("DescText", I.a),
				D = c.a.div("Title", I.a),
				F = c.a.div("Header", I.a),
				H = c.a.wrapped(w.a, "ChatIcon", I.a),
				U = c.a.wrapped(y.a, "PlanetIcon", I.a),
				V = c.a.wrapped(C.a, "Pencil", I.a),
				K = c.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("svg", {
						className: t,
						viewBox: "0 0 16 16",
						xmlns: "http://www.w3.org/2000/svg"
					}, a.a.createElement("g", {
						transform: "translate(-26.000000, -37.000000)"
					}, a.a.createElement("path", {
						d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
					})))
				}, "Group", I.a),
				z = c.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("svg", {
						className: t,
						viewBox: "0 0 16 16",
						xmlns: "http://www.w3.org/2000/svg"
					}, a.a.createElement("path", {
						d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
					}))
				}, "Key", I.a),
				q = c.a.wrapped(x.b, "SubredditIcon", I.a),
				G = c.a.button("EditButton", I.a),
				J = c.a.button("ShowAllLink", I.a),
				Y = c.a.span("ChannelName", I.a),
				Z = c.a.div("HeaderText", I.a);
			var Q;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Q || (Q = {}));
			const X = Object(d.c)({
					isCollectionReady: _.e,
					isModerator: N.e,
					language: T.P,
					selectedSubreddit: P.P,
					shouldRequestCollection: _.f,
					subredditChannels: _.a
				}),
				$ = Object(o.b)(X, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						toggleModal: () => e(Object(h.i)(f.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(h.i)(f.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(h.i)(f.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(p.l)(t)),
						onChatLinkClick: (t, s) => e(Object(b.b)(t, s)),
						onSelectChannel: t => e(Object(p.m)({
							channelId: t
						}))
					}
				});
			class ee extends a.a.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					this.fetchChannelList()
				}
				fetchChannelList() {
					this.props.shouldRequestCollection && this.props.fetchSubredditChannels(this.props.selectedSubreddit.id)
				}
				getDisplayChannelList() {
					return this.props.subredditChannels && this.props.maxChannels ? this.props.subredditChannels.slice(0, this.props.maxChannels) : this.props.subredditChannels || []
				}
				displayShowAllLink() {
					return !!(this.props.maxChannels && this.props.subredditChannels && this.props.maxChannels < this.props.subredditChannels.length)
				}
				displayChannelsList() {
					const {
						props: {
							maxChannels: e,
							subredditChannels: t
						}
					} = this;
					if (t) {
						const s = i()(t, ["name"]);
						return e ? s.slice(0, e) : s
					}
					return []
				}
				onItemClick(e) {
					const {
						channelId: t
					} = e, {
						selectedSubreddit: s,
						onChatLinkClick: n
					} = this.props;
					n(t, s.name), this.trackItemClick(e)
				}
				trackItemClick(e) {
					const {
						Joined: t
					} = E.a, {
						channelId: s,
						channelState: n
					} = e, {
						Widget: i,
						Modal: r
					} = Q, {
						parentContext: a,
						sendEvent: o
					} = this.props;
					return a === i && n === t ? o(Object(v.c)(s)) : a === i ? o(Object(v.e)(s)) : a === r && n === t ? o(Object(v.a)(s)) : a === r ? o(Object(v.b)(s)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(v.d)()))
				}
				getLinkURL(e) {
					const {
						selectedSubreddit: t
					} = this.props;
					return Object(u.channelUrl)(e.channelId, t.name)
				}
				render() {
					const {
						props: {
							className: e,
							isCollectionReady: t,
							isModerator: s,
							language: n,
							onAddChannel: i,
							toggleEditModal: r,
							selectedSubreddit: o,
							onSelectChannel: d,
							toggleCreateModal: c
						}
					} = this;
					if (!t) return null;
					const u = this.displayChannelsList();
					return a.a.createElement("div", {
						className: e
					}, u.length ? a.a.createElement(W, null, u.map((e, t) => a.a.createElement(L, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, a.a.createElement(D, {
						key: "item-link-title-".concat(t)
					}, a.a.createElement(H, {
						key: "item-link-icon-".concat(t)
					}), o.icon.url ? a.a.createElement(q, {
						key: "subreddit-icon-".concat(t),
						iconUrl: o.icon.url
					}) : a.a.createElement(U, {
						key: "planet-".concat(t),
						isSmall: !0
					}), a.a.createElement(F, {
						key: "item-header-".concat(t)
					}, a.a.createElement(Z, {
						key: "item-header-text-".concat(t)
					}, a.a.createElement(B, {
						key: "item-detail-".concat(t)
					}, o.name, Object(m.c)(n, "listings.channelMembers", e.membersCount)), a.a.createElement(Y, {
						key: "channel-name-".concat(t)
					}, e.type === E.c.Public ? a.a.createElement(K, null) : a.a.createElement(z, null), e.name)), s && a.a.createElement(G, {
						key: "button-".concat(t),
						onClick: t => {
							d(e.channelId), r(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(v.l)())
						}
					}, a.a.createElement(V, null)))), e.description && a.a.createElement(A, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && a.a.createElement(J, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, a.a.createElement(j.c, null, "See more"))) : s ? a.a.createElement(W, null, a.a.createElement(R, null, a.a.createElement(j.c, null, "Create your first room and get your community chatting in real time.")), a.a.createElement(M, {
						onClick: i || c
					}, a.a.createElement(j.c, null, "+ Add room"))) : a.a.createElement(W, null, a.a.createElement(R, null, a.a.createElement(j.c, null, "There are no joined chatrooms yet"))))
				}
			}
			t.b = $(Object(k.b)(ee))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/ContentTooltip/index.tsx"),
				m = s("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/tooltips.ts"),
				b = s("./src/reddit/controls/ImageInput/index.tsx"),
				h = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				x = s("./src/reddit/helpers/localStorage/index.ts"),
				k = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				j = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, i.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				C = s("./src/reddit/models/ApiRequestState/index.ts"),
				w = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				y = s("./src/reddit/components/SubredditIcon/index.m.less"),
				E = s.n(y);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			class _ extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(x.l)(this.props.subredditId)
					})
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: s,
							inTopBar: n,
							tooltipDisabled: r
						} = e,
						a = P(e, ["subredditId", "className", "inTopBar", "tooltipDisabled"]),
						d = [s, E.a.inTopBar, E.a.iconContainer];
					return n ? d.push(E.a.emptyEditableIconInTopBar) : d.push(E.a.editableIcon, E.a.emptyEditableIcon), i.a.createElement("span", N({}, a, {
						id: this.props.tooltipDisabled ? void 0 : p.a,
						className: Object(o.a)(...d)
					}), n ? i.a.createElement(j, {
						className: E.a.emptyUploadButton
					}) : i.a.createElement(v.a, {
						className: E.a.emptyPlusButton
					}), this.props.children, !this.state.tooltipDismissed && !this.props.tooltipDisabled && i.a.createElement(l.a, {
						className: E.a.tooltip,
						tooltipId: p.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, i.a.createElement(m.a, {
						includeIcon: !n,
						subredditId: t
					})))
				}
			}
			const T = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: r,
						onClick: a,
						inTopBar: d,
						src: c
					} = e;
					return i.a.createElement("span", {
						className: E.a.iconContainer
					}, i.a.createElement("img", {
						onClick: a,
						role: r,
						alt: n,
						src: c,
						className: Object(o.a)(s, {
							[E.a.editableIcon]: !d
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				S = Object(a.c)({
					isLoading: w.b
				});
			class I extends i.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(k.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => i.a.createElement(b.a, {
						className: E.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(C.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.inTopBar || this.props.onShowTooltip()
				}
				renderEditButton() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? i.a.createElement("span", {
						className: E.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? i.a.createElement(f.c, null, "Update icon") : i.a.createElement(f.c, null, "Add icon")) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = i.a.createElement(i.a.Fragment, null, i.a.createElement(T, N({
						src: e,
						alt: Object(O.c)("Subreddit icon"),
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? i.a.createElement("a", {
						href: this.props.linkTo
					}, i.a.createElement(_, N({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : i.a.createElement(i.a.Fragment, null, i.a.createElement(_, N({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [E.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(E.a.loadingIconInTopBar), t = 32), i.a.createElement(h.a, {
							className: Object(o.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? i.a.createElement("div", {
						className: E.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(r.b)(S, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(d.a)(t.subreddit, s, n))
				},
				onShowTooltip: () => {
					e(Object(c.f)({
						tooltipId: p.a
					}))
				}
			}))(Object(u.b)(I))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				u = s("./src/reddit/actions/subreddit.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				b = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				h = s("./src/lib/classNames/index.ts"),
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/components/SubredditNav/index.m.less"),
				k = s.n(x);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const v = (e, t, s) => Object(h.a)(e, {
					[k.a.mActive]: t
				}, {
					[k.a.topBannerVariant]: s
				}),
				j = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, r = O(e, ["children", "isActive", "isTopBannerVariant"]);
					return i.a.createElement("div", f({
						className: v(k.a.subNavTitle, s, n)
					}, r), i.a.createElement("span", null, t), i.a.createElement(g.b, {
						className: k.a.navDropdownIcon
					}))
				},
				C = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: r
					} = e, a = O(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const o = v(k.a.navLink, s, r);
					return n ? i.a.createElement(b.a, f({
						className: o,
						to: n
					}, a)) : i.a.createElement("a", f({
						className: o
					}, a))
				},
				w = e => {
					var {
						className: t,
						isActive: s
					} = e, n = O(e, ["className", "isActive"]);
					return i.a.createElement(b.a, f({
						className: v(k.a.navLink, s)
					}, n))
				},
				y = e => {
					var {
						className: t,
						isActive: s
					} = e, n = O(e, ["className", "isActive"]);
					return i.a.createElement("a", f({
						className: v(k.a.subNavLink, s)
					}, n))
				},
				E = e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return i.a.createElement("div", f({
						className: Object(h.a)(k.a.subNavContainer, t)
					}, s))
				},
				N = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = O(e, ["className", "isOpen"]);
					return i.a.createElement("div", f({
						className: Object(h.a)(k.a.subNavList, t, {
							[k.a.mIsOpen]: s
						})
					}, n))
				};
			const P = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var _ = Object(d.t)()(Object(r.b)(P, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? i.a.createElement(w, {
						className: k.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(d.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, i.a.createElement(p.c, null, "Polls")) : null
				}))),
				T = s("./src/lib/linkMatchers/index.ts");
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return i.a.createElement(E, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, i.a.createElement(j, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), i.a.createElement(N, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var I = S;
			const W = e => {
				const t = e.url && Object(T.g)(T.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? i.a.createElement(C, {
					href: W(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : i.a.createElement(I, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => i.a.createElement(y, {
					key: "".concat(e.text, "-").concat(W(e)),
					role: "listitem",
					href: W(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				R = s("./src/lib/constants/index.ts");
			const L = Object(d.t)(),
				B = [R.yb.SUBREDDIT, R.yb.COMMENTS, R.yb.COLLECTION_COMMENTS],
				A = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && B.indexOf(t.pageLayer.meta.name) > -1
				});
			var D = L(Object(r.b)(A, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isTopBannerVariant: r,
						onTurnOffMetaFilter: a
					} = e, o = n && !s;
					return i.a.createElement(C, {
						to: t,
						isActive: o,
						isTopBannerVariant: r,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, i.a.createElement(p.c, null, "Posts"))
				}))),
				F = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = s("./src/higherOrderComponents/makeAsync.tsx");
			var U = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				V = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/constants/screenWidths.ts"),
				z = s("./src/reddit/models/Theme/index.ts"),
				q = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				G = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const J = Object(F.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, r = G(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(q.a)(r);
				return i.a.createElement("div", {
					className: Object(h.a)(k.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(z.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var Y = e => i.a.createElement(J, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, i.a.createElement("div", {
					className: k.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === V.g.Large ? "".concat(e.maxWidth || K.a, "px") : "100%"
					}
				}, i.a.createElement("div", null, e.children), i.a.createElement(U, null))),
				Z = s("./src/reddit/components/Translated/index.tsx"),
				Q = s("./src/reddit/constants/wiki.ts"),
				X = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, r = !!n && !!n.meta && n.meta.name === R.yb.SUBREDDIT_WIKI, a = "wiki/".concat(Q.i), o = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return i.a.createElement(C, {
					isActive: r,
					isTopBannerVariant: s,
					to: o,
					onClick: () => e.sendEvent(Object(X.g)())
				}, i.a.createElement(Z.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const ee = Object(c.a)("spPolls", _),
				te = Object(d.t)(),
				se = Object(a.c)({
					language: l.P,
					layout: d.K,
					widget: m.f
				}),
				ne = Object(r.b)(se);
			t.a = te(ne(Object(o.b)(e => i.a.createElement(Y, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && i.a.createElement(i.a.Fragment, null, i.a.createElement(D, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), i.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && i.a.createElement(i.a.Fragment, null, e.widget.showWiki && i.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => i.a.createElement(M, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				u = s("./src/higherOrderComponents/makeAsync.tsx"),
				p = s("./src/reddit/featureFlags/component.tsx");
			const b = Object(u.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			var h = Object(p.a)("spPremium", b),
				g = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				x = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				k = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/lib/isFakeSubreddit/index.ts"),
				O = s("./src/reddit/components/IdCard/helpers.ts"),
				v = e => !Object(f.a)(e) || Object(O.c)(e) || Object(O.d)(e) || Object(O.e)(e),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				w = s("./src/reddit/components/SidebarContainer/index.tsx"),
				y = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				N = s("./src/lib/classNames/index.ts"),
				P = s("./src/app/strings/index.ts"),
				_ = s("./src/higherOrderComponents/asTooltip.tsx"),
				T = s("./src/reddit/actions/tooltip.ts"),
				S = s("./src/reddit/i18n/utils.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				W = s("./src/reddit/constants/modals.ts"),
				M = s("./src/reddit/controls/Dropdown/index.tsx"),
				R = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				L = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				A = s("./src/reddit/selectors/tooltip.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				H = s.n(F);
			const U = l.a.wrapped(M.a, "_Dropdown", H.a),
				V = l.a.wrapped(L.a, "Pencil", H.a),
				K = l.a.a("DropdownRow", H.a),
				z = Object(_.a)(U),
				q = e => "SubredditChannels--Menu--".concat(e),
				G = Object(d.c)({
					isModerator: B.g,
					language: D.P,
					isDropdownOpen: (e, t) => Object(A.b)(q(t.subredditId))(e)
				}),
				J = l.a.wrapped(e => {
					const {
						className: t,
						isModerator: s,
						language: n,
						onOpenDropdown: i,
						isDropdownOpen: r,
						toggleModal: o
					} = e, d = q(e.subredditId);
					return a.a.createElement("button", {
						"aria-expanded": r,
						"aria-haspopup": !0,
						"aria-label": Object(S.c)("Chat menu"),
						className: Object(N.a)(H.a.top, t),
						id: d,
						onClick: () => i(d)
					}, a.a.createElement(R.a, null), a.a.createElement(z, {
						isOpen: r,
						tooltipId: d,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(K, {
						onClick: o
					}, s ? Object(P.a)(n, "subredditModeration.chat.subredditWidget.menu.manageRooms") : Object(P.a)(n, "subredditModeration.chat.subredditWidget.menu.viewRooms"), a.a.createElement(V, null))))
				}, "OverflowMenu", H.a);
			var Y = Object(o.b)(G, e => ({
					onOpenDropdown: t => e(Object(T.h)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(I.i)(W.a.MANAGE_SUBREDDIT_CHAT))
				}))(J),
				Z = s("./src/reddit/components/SubredditChannelList/index.tsx"),
				Q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				X = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/chat.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/subredditChannel.ts"),
				se = s("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				ne = s.n(se);
			const ie = l.a.div("Wrapper", ne.a),
				re = Object(d.c)({
					isCollectionReady: te.e,
					isModerator: B.g,
					isWhitelistedSubreddit: ee.e,
					shouldRequestCollection: te.f,
					subredditChannels: te.a
				});
			let ae;
			class oe extends a.a.Component {
				constructor(e) {
					super(e)
				}
				shouldComponentUpdate(e, t) {
					return this.props.isCollectionReady !== e.isCollectionReady || this.props.isModerator !== e.isModerator || this.props.isWhitelistedSubreddit !== e.isWhitelistedSubreddit || this.props.shouldRequestCollection !== e.shouldRequestCollection || this.props.subredditChannels !== e.subredditChannels
				}
				trackViewEvent() {
					this.props.subredditId !== ae && (ae = this.props.subredditId, this.props.sendEvent(Object($.m)()))
				}
				isEnabled() {
					const {
						isModerator: e,
						isCollectionReady: t,
						isWhitelistedSubreddit: s,
						subredditChannels: n
					} = this.props, i = n && n.length;
					return !(!t || !s || !i && !e)
				}
				render() {
					const {
						subredditId: e,
						shouldRequestCollection: t
					} = this.props, s = a.a.createElement(Z.b, {
						maxChannels: 3,
						parentContext: Z.a.Widget,
						subredditId: e
					});
					return t ? s : this.isEnabled() ? (this.trackViewEvent(), a.a.createElement(y.a, null, a.a.createElement(X.a, {
						className: this.props.className,
						title: Object(S.c)("Chat rooms"),
						headerButton: a.a.createElement(Y, {
							subredditId: e
						})
					}, a.a.createElement(ie, null, s)))) : null
				}
			}
			var de = Object(o.b)(re)(Object(Q.b)(oe)),
				ce = s("./src/lib/makeListingKey/index.ts"),
				le = s("./src/reddit/actions/subreddit.ts"),
				me = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				ue = s("./src/reddit/controls/Button/index.tsx"),
				pe = s("./src/reddit/helpers/name/index.ts"),
				be = s("./src/reddit/helpers/overlay/index.ts"),
				he = s("./src/reddit/i18n/components.tsx"),
				ge = s("./src/reddit/selectors/experiments/topPosts.ts"),
				xe = s("./src/reddit/selectors/posts.ts"),
				ke = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const fe = .99;
			class Oe extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= fe && t(s)
					}
				}
				render() {
					return a.a.createElement(ke.a, {
						threshold: fe,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var ve = Oe,
				je = s("./src/lib/isUrl/index.ts"),
				Ce = s("./src/lib/prettyPrintNumber/index.ts"),
				we = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ye = s("./src/reddit/components/Thumbnail/index.tsx"),
				Ee = s("./src/reddit/models/Flair/index.ts"),
				Ne = s("./src/reddit/models/Subreddit/index.ts"),
				Pe = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				_e = s.n(Pe);
			const Te = e => e.type === Ee.f.Nsfw || e.type === Ee.f.Spoiler,
				Se = Object(d.c)({
					language: D.P,
					post: xe.I,
					subredditOrProfile: xe.U
				});
			class Ie extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: n,
						subredditOrProfile: i
					} = this.props, r = {
						post: t
					}, o = Object(je.a)(Object(ye.b)(r)), d = t.flair.filter(Te);
					return a.a.createElement("div", {
						className: Object(N.a)(_e.a.container, e, {
							[_e.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, a.a.createElement("div", {
						className: _e.a.mainLine
					}, o && a.a.createElement("div", {
						className: _e.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, a.a.createElement(ye.a, r)), a.a.createElement("div", {
						className: Object(N.a)(_e.a.title, !o && _e.a.titleSingle),
						title: t.title
					}, d.length > 0 && a.a.createElement(we.a, {
						className: _e.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), a.a.createElement("div", {
						className: _e.a.metaLine
					}, n && !!i && a.a.createElement("span", {
						className: _e.a.meta
					}, Object(Ne.e)(i) ? Object(pe.c)(i.displayText || i.name) : Object(pe.b)(i.displayText || i.name)), a.a.createElement("span", {
						className: _e.a.meta
					}, "".concat(Object(Ce.b)(t.score), " "), a.a.createElement(he.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), a.a.createElement("span", {
						className: _e.a.meta
					}, "".concat(Object(Ce.b)(t.numComments), " "), a.a.createElement(he.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var We = Object(o.b)(Se, e => ({
					openLightbox: t => e(Object(be.a)(t.permalink))
				}))(Ie),
				Me = s("./src/reddit/components/SidebarPostList/index.m.less"),
				Re = s.n(Me);
			const Le = 10,
				Be = 2,
				Ae = Object(d.a)(xe.O, e => e.filter(e => !e.isSponsored)),
				De = Object(d.c)({
					posts: Ae
				});
			class Fe extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [n] = s;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || Le, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: n,
							redditStyle: i,
							smallPostClassName: r
						} = this.props;
						return a.a.createElement(ve, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, a.a.createElement(We, {
							className: Object(N.a)(Re.a.smallPost, r),
							containerOnClick: s,
							postId: e.id,
							redditStyle: i,
							showSubredditName: Object(f.a)(Object(pe.f)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: n,
						onPostVisible: i,
						posts: r,
						redditStyle: o,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === r.length) return null;
					const m = this.getVisiblePostsCounts(),
						u = Object(ge.a)(c),
						p = Object(ge.b)(c),
						b = u || p,
						h = r.slice(l * m, (l + 1) * m),
						[g, ...x] = h,
						k = b ? h.slice(0, Be) : x.slice(0, Be),
						O = b ? h.slice(Be) : x.slice(Be);
					return a.a.createElement("div", {
						className: Object(N.a)(Re.a.container, t, {
							[Re.a.redditStyle]: o
						})
					}, !b && a.a.createElement(ve, {
						onPostVisible: i,
						postId: g.id
					}, a.a.createElement(me.a, {
						backgroundWrapperClassName: Re.a.largePostBackgroundWrapper,
						descriptionClassName: Re.a.largePostDescription,
						innerContainerClassName: Re.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						postId: g.id,
						showSubredditMeta: !1,
						showSubredditName: Object(f.a)(Object(pe.f)(s)),
						trendingPost: g
					})), k.map(this.renderSmallPost), e, O.map(this.renderSmallPost), d && a.a.createElement(ue.n, {
						className: Re.a.SeeMore,
						onClick: this.showMorePosts
					}, n || a.a.createElement(he.c, null, "See More")))
				}
			}
			var He = Object(o.b)(De, e => ({
					openPost: t => e(Object(be.a)(t.permalink))
				}))(Fe),
				Ue = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Ve = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				Ke = s("./src/reddit/selectors/discoveryUnit.ts"),
				ze = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				qe = s.n(ze);
			const Ge = 10,
				Je = Object(d.a)((e, t) => t.subredditName, e => Object(ce.a)(e, c.N.TOP, {
					t: c.Pb.WEEK
				})),
				Ye = Object(d.c)({
					discoveryUnit: e => Object(Ke.c)(e, {
						unitName: Ve.j
					}),
					listingKey: Je,
					posts: (e, t) => {
						const s = Je(e, t);
						return Object(xe.O)(e, {
							listingKey: s
						})
					},
					subreddit: ee.y
				});
			class Ze extends a.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(Ue.g)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(Ue.w)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(Ue.B)(t, e, void 0, s))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						loadMorePosts: n,
						posts: i,
						subredditName: r,
						topPostsVariant: o
					} = this.props;
					if (0 === i.length) return null;
					const d = r,
						c = i.length > Ge;
					return a.a.createElement(X.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: Object(S.c)("Top posts this week")
					}, a.a.createElement(He, {
						listingKey: s,
						listingName: d,
						onShowMoreClick: n,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: qe.a.smallPost,
						showMoreButton: c,
						topPostsVariant: o
					}, a.a.createElement("div", null, e)))
				}
			}
			var Qe = Object(o.b)(Ye, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(le.r)({
							sort: c.N.TOP,
							subredditName: s,
							t: c.Pb.WEEK
						}))
					}
				})(Object(Q.b)(Ze)),
				Xe = s("./src/config.ts"),
				$e = s("./src/lib/localStorageAvailable/index.ts"),
				et = s("./src/higherOrderComponents/asModal/index.tsx"),
				tt = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				st = s("./src/reddit/components/Translated/index.tsx"),
				nt = s("./src/reddit/controls/TextButton/index.tsx"),
				it = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			class rt extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(tt.c, null, a.a.createElement(tt.g, null, a.a.createElement(it.a, null, a.a.createElement(tt.n, null, a.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.modal.title"
					})), a.a.createElement(nt.a, {
						onClick: e.toggleModal
					}, a.a.createElement(tt.b, null)))), a.a.createElement(tt.j, null, a.a.createElement(tt.m, null, a.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.modal.text"
					}))), a.a.createElement(tt.e, null, a.a.createElement(tt.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.modal.cancel"
					})), a.a.createElement(tt.o, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, a.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.modal.confirm"
					}))))
				}
			}
			var at = Object(et.a)(rt),
				ot = s("./src/reddit/components/IdCard/Banner.tsx"),
				dt = s("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				ct = s("./src/reddit/constants/blade.ts"),
				lt = s("./src/reddit/controls/InternalLink/index.tsx"),
				mt = s("./src/reddit/helpers/localStorage/index.ts"),
				ut = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				pt = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				bt = s("./src/reddit/icons/svgs/Close/index.tsx"),
				ht = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				gt = s("./src/reddit/selectors/activeModalId.ts"),
				xt = s("./src/reddit/selectors/structuredStyles.ts"),
				kt = s("./src/reddit/components/IdCard/index.m.less"),
				ft = s.n(kt),
				Ot = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				vt = s.n(Ot);
			const {
				fbt: jt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ct = "mod_onboarding_modal", wt = "mod_onboarding_widget", yt = Object(d.a)(gt.a, (e, t) => Object(B.a)(ht.c.config)(e, {
				subredditId: t.subredditId
			}), (e, t) => Object(xt.l)(e, {
				subredditId: t.subredditId
			}), (e, t, s) => ({
				activeModalId: e,
				hasModeratorPermissions: t,
				modHasEditedBanner: !s || !!(s.bannerBackgroundImage || s.bannerHeight || s.bannerPositionedImage || s.bannerBackgroundColor),
				modHasEditedColors: !s || !!(s.primaryColor || s.highlightColor || s.backgroundColor || s.backgroundImage),
				modHasEditedIcon: !s || (!!s.communityIcon || !!s.bannerShowCommunityIcon)
			}));
			class Et extends a.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(mt.S)(wt, !0, this.props.subredditId), this.props.sendEvent(Object(ut.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(ut.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(ut.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(ut.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(ut.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: n,
						subredditId: i
					} = this.props, r = e && !(t && s && n) && (!Object($e.a)() || !Object(mt.q)(wt, i));
					r !== this.state.visible && (this.setState({
						visible: r
					}), r && this.props.sendEvent(Object(ut.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: n,
						subredditName: i,
						toggleCloseMenuModal: r
					} = this.props;
					return this.state.visible ? a.a.createElement(X.a, {
						className: Object(N.a)(vt.a.container, this.props.className)
					}, a.a.createElement(ot.a, {
						bannerBackgroundImage: "".concat(Xe.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), a.a.createElement(bt.a, {
						className: vt.a.closeIcon,
						onClick: r
					}), Object(dt.a)({
						titleText: a.a.createElement(st.a, {
							msgId: "sidebar.moderatorOnboarding.title"
						}),
						snooBackground: Object(O.b)("url('".concat(Xe.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), a.a.createElement("div", {
						className: Object(N.a)(ft.a.Description, vt.a.description)
					}, jt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview}. Here are some great ways to get started.", [jt._param("=Customize Appearance Overview", a.a.createElement("a", {
						href: ct.e.exportImport,
						className: vt.a.modHelpLink,
						target: "_blank"
					}, jt._("Customize Appearance Overview", null, {
						hk: "2qylj9"
					})))], {
						hk: "2BIfV4"
					})), a.a.createElement(lt.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(ct.c.NameAndIcon),
						className: vt.a.link,
						onClick: this.customizeIcon
					}, n ? a.a.createElement(pt.a, {
						className: vt.a.checked
					}) : a.a.createElement(pt.a, {
						className: vt.a.unchecked
					}), a.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.addCommunityIcon"
					})), a.a.createElement(lt.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(ct.c.Banner),
						className: vt.a.link,
						onClick: this.customizeBannerImage
					}, t ? a.a.createElement(pt.a, {
						className: vt.a.checked
					}) : a.a.createElement(pt.a, {
						className: vt.a.unchecked
					}), a.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.customizeHeader"
					})), a.a.createElement(lt.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(ct.c.Global),
						className: vt.a.link,
						onClick: this.customizeThemeColors
					}, s ? a.a.createElement(pt.a, {
						className: vt.a.checked
					}) : a.a.createElement(pt.a, {
						className: vt.a.unchecked
					}), a.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.customizeColors"
					})), a.a.createElement(ue.k, {
						to: "/r/".concat(i, "?styling=true"),
						className: vt.a.button,
						onClick: this.customizeAppearance
					}, a.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.customizeAppearance"
					})), a.a.createElement("div", {
						className: vt.a.subtext
					}, a.a.createElement(st.a, {
						msgId: "sidebar.moderatorOnboarding.onlyModerators"
					})), e === Ct && a.a.createElement(at, {
						withOverlay: !0,
						toggleModal: r,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Nt = Object(o.b)(yt, (e, t) => {
					let {
						subredditId: s,
						subredditName: n
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(I.i)(Ct))
					}
				})(Object(Q.b)(Et)),
				Pt = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				_t = s("./src/reddit/featureFlags/index.ts"),
				Tt = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				St = s("./src/reddit/models/Widgets/index.ts"),
				It = s("./src/reddit/selectors/communityFlairs.ts"),
				Wt = s("./src/reddit/selectors/listings.ts"),
				Mt = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				Rt = s.n(Mt);
			const Lt = 250,
				Bt = 270,
				At = l.a.wrapped(w.a, "SidebarContainer", Rt.a),
				Dt = Object(d.c)({
					apiError: Wt.c,
					apiPending: Wt.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(It.b)(e, s)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(It.c)(e, s)
					},
					language: D.P,
					showGovernance: _t.d.spPoints,
					showLeaderboard: _t.d.spLeaderboard,
					widgets: ee.r
				}),
				Ft = Object(o.b)(Dt);
			class Ht extends r.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const s = this.getRelatedCommunitiesWidgetData();
						return s ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: Object(S.c)("Related Communities"),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys) return Object.assign({}, this.getPostFlairWidget(), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: St.d.Cloud,
							shortName: Object(S.c)("Filter by flair"),
							templates: this.props.communityFlairModels
						})
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, s = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						language: t,
						listingName: s,
						showGovernance: n,
						showLeaderboard: i,
						subredditId: r,
						subredditName: o,
						topPostsVariant: d
					} = this.props;
					let l = 0;
					const u = Object(ge.a)(d),
						p = Object(ge.b)(d),
						b = Object(ge.c)(d),
						f = u || p,
						O = this.getCommunityWidgets(),
						w = this.makeFlairFilterWidget(),
						N = this.makeRelatedCommunitiesWidget(u, p),
						P = !u,
						_ = p,
						T = a.a.createElement(C.a, {
							placement: c.c.ABOVE_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: Tt.a.FIRST,
							sizes: c.h
						});
					return a.a.createElement(At, {
						className: e
					}, v(s) && a.a.createElement(k.a, {
						listingName: s
					}), a.a.createElement(h, {
						cardClassName: Rt.a.card,
						subredditId: r
					}), f && a.a.createElement(y.a, null, a.a.createElement(Qe, {
						subredditName: o,
						topPostsVariant: d
					}, a.a.createElement("div", {
						className: Rt.a.inFeedAd
					}, T))), f && N && a.a.createElement(y.a, null, a.a.createElement(Pt.a, {
						subredditName: o,
						truncateThreshold: Bt,
						widget: N
					})), _ && O.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(y.a, {
							key: "widgetSpacer".concat(t)
						}, a.a.createElement(Pt.a, {
							subredditName: o,
							truncateThreshold: Lt,
							widget: e
						}))
					}), a.a.createElement(m.a, {
						className: Rt.a.card,
						subredditId: r
					}), a.a.createElement(Nt, {
						language: t,
						subredditId: r,
						subredditName: o
					}), n && a.a.createElement(g.a, {
						className: Rt.a.card,
						subredditId: r
					}), w && a.a.createElement(y.a, null, a.a.createElement(Pt.a, {
						subredditName: o,
						widget: w
					})), i && a.a.createElement(x.a, {
						className: Rt.a.card,
						subredditId: r,
						uniqueId: r
					}), a.a.createElement(j.g, {
						subredditId: r
					}), !f && T, P && !_ && O.map((e, t) => {
						const s = "community-list" === e.kind;
						return a.a.createElement(y.a, {
							key: "widgetSpacer".concat(t)
						}, a.a.createElement(Pt.a, {
							subredditName: o,
							truncateThreshold: b && s ? Bt : b ? Lt : void 0,
							widget: e
						}))
					}), a.a.createElement(de, {
						subredditId: r
					}), a.a.createElement(E.a, {
						adComponent: a.a.createElement(C.a, {
							placement: c.c.BELOW_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: Tt.a.BOTTOM,
							sizes: c.m
						})
					}))
				}
			}
			t.a = Ft(Ht)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				o = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(o),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", d.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = c(e, ["children"]);
					return i.a.createElement("div", s, i.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => i.a.createElement("div", {
				className: e.className
			}, i.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				k = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				O = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				C = s.n(j);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const E = 129,
				N = Object(h.t)({
					filterName: e => Object(h.P)(e)[b.f],
					url: e => Object(h.T)(e)
				}),
				P = Object(o.c)({
					subredditId: (e, t) => Object(v.D)(e, t.subredditName)
				}),
				_ = Object(a.b)(P),
				T = l.a.div("WidgetContent", C.a),
				S = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, i = y(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(d.a)(C.a.StyledFlair, t === O.d.Cloud && C.a.cloudDisplay, {
							[C.a.flairFilter]: s,
							[C.a["m-selected"]]: i.isSelected
						}),
						onMouseDown: n
					}, r.a.createElement(m.b, w({}, i, {
						className: C.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class I extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(f.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(f.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(f.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(f.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(k.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(k.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > E && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(g.n, {
						className: C.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return r.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => r.a.createElement(S, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(k.e)(this.props.url, Object(k.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? E : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
						className: C.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return r.a.createElement("ul", null, r.a.createElement(S, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(k.e)(this.props.url, Object(k.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, i = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(i) || void 0, o = t.order.length > n.length || s && !a;
					return r.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, r.a.createElement(T, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(i), o && this.renderButton()))
				}
			}
			t.a = N(_(Object(u.b)(I)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = s("./src/reddit/connectors/connectToLanguage.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/helpers/dom/index.ts"),
				p = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				h = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				k = s.n(x);
			const f = c.a.div("RuleShortName", k.a),
				O = c.a.div("RuleIndex", k.a),
				v = c.a.div("RuleTitle", k.a),
				j = c.a.div("RuleDescription", k.a),
				C = c.a.wrapped(l.a, "RawHTMLDisplay", k.a),
				w = {};
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!r;
					return i.a.createElement(f, {
						className: Object(d.a)({
							[k.a.pointerCursor]: a
						}),
						onClick: n(e) || !r ? void 0 : s
					}, i.a.createElement(h.a, null, i.a.createElement(O, null, "".concat(e.humanIndex, ".")), i.a.createElement(v, null, "".concat(e.rule.shortName)), i.a.createElement("div", null, !n(e) && r && (t.isVisible ? i.a.createElement(b.a, {
						className: k.a.Chevron
					}) : i.a.createElement(p.a, {
						className: k.a.Chevron
					})))), t.isVisible && i.a.createElement(j, null, e.rule.descriptionRichText ? i.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: w
					}) : e.rule.descriptionHtml ? i.a.createElement(C, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return E
			}));
			const E = Object(o.a)(e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: Object(r.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return i.a.createElement(y, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null);
			t.b = e => i.a.createElement(E, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/linkMatchers/index.ts"),
				b = s("./src/reddit/models/Image/index.tsx"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Widgets/Button/index.m.less"),
				O = s.n(f);
			const v = (e, t, s) => {
					let n = {},
						i = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: i,
							textColor: r
						} = e;
						return t && (n = r = s, i = "transparent"), {
							"--widget-button-background-color": "".concat(i || "transparent"),
							"--widget-button-border": "1px solid ".concat(n),
							"--widget-button-color": "".concat(r || n)
						}
					})(e, t, s);
					const r = e.hoverState || e;
					if (r.kind === g.f.Image) i = {
						"--widget-button-hover-background-image": "url('".concat(r.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = r;
						t && (e = a = s, n = "transparent"), i = {
							"--widget-button-hover-background-color": "".concat(n || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(a || e)
						}
					}
					return Object.assign({}, n, i)
				},
				j = e => e.kind === g.f.Image ? O.a.imageButton : O.a.textButton,
				C = e => {
					const t = Object(g.n)(e),
						s = Object(p.g)(p.e, t);
					return s ? s.url : e.url
				},
				w = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(h.a)(e).button;
					return i.a.createElement(c.i, {
						className: j(t),
						style: v(t, s, n)
					}, t.kind === g.f.Text && i.a.createElement("span", {
						className: t.hoverState ? O.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && i.a.createElement("span", {
						className: O.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				y = e => i.a.createElement(l.a, {
					href: C(e.button),
					isSponsored: !1,
					source: null
				}, i.a.createElement(w, e)),
				E = u.a.wrapped(o.a, "RawHTMLDisplay", O.a);
			var N = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: k.R
				}))(e => i.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && i.a.createElement(E, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => i.a.createElement(y, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				P = s("./src/lib/humanizeDate/index.ts"),
				_ = s("./src/reddit/controls/TextButton/index.tsx"),
				T = s("./src/reddit/i18n/utils.ts"),
				S = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				I = s.n(S);
			const W = 100,
				M = {
					isExpanded: !1
				},
				R = u.a.wrapped(o.a, "RawHTMLDisplay", I.a),
				L = u.a.div("EventContainer", I.a),
				B = u.a.div("EventTitle", I.a),
				A = u.a.div("EventDate", I.a),
				D = u.a.div("EventLocation", I.a),
				F = u.a.div("EventDescription", I.a),
				H = u.a.wrapped(_.a, "ToggleDescription", I.a);
			class U extends i.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > W ? i.a.createElement(F, null, t.isExpanded ? e.text : e.text.slice(0, W), i.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(T.c)("read less") : Object(T.c)("...read more"))) : i.a.createElement(F, null, e.text)
				}
			}
			const V = Object(a.c)({
				language: k.P
			});
			var K = Object(r.b)(V)(e => i.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => i.a.createElement(L, {
					key: "".concat(s, "-").concat(t.title)
				}, i.a.createElement(B, null, t.titleHtml ? i.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && i.a.createElement(A, null, Object(P.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && i.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && i.a.createElement(D, null, t.locationHtml ? i.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && i.a.createElement(U, {
					language: e.language,
					text: t.description
				}))))),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var G = Object(z.b)(e => i.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const J = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Y = Object(r.b)(J),
				Z = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class Q extends i.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Z(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, i.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var X = Y(Q),
				$ = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = s.n($);
			var te = u.a.div("ImageFrame", ee.a),
				se = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = s.n(se);
			var ie = u.a.img("StyledImage", ne.a);
			class re extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
					}
					return t
				}
				componentWillReceiveProps(e) {
					const {
						props: t,
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						n = i.a.createElement(te, null, i.a.createElement(ie, {
							alt: Object(T.c)("Widget image"),
							src: s.url
						}));
					return s.linkUrl ? i.a.createElement(l.a, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var ae = re,
				oe = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = s("./src/reddit/components/Flair/index.tsx"),
				ce = s("./src/reddit/controls/InternalLink/index.tsx"),
				le = s("./src/reddit/icons/fonts/helpers.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				ue = s.n(me);
			var pe = u.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(le.b)("envelope"), " ").concat(e.className)
				}), "Envelope", ue.a),
				be = s("./src/reddit/models/Flair/index.ts"),
				he = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ge = s.n(he);
			const xe = u.a.div("ModeratorListItem", ge.a),
				ke = u.a.div("Username", ge.a),
				fe = u.a.a("MessageModsLink", ge.a),
				Oe = u.a.wrapped(de.b, "FlairComponent", ge.a),
				ve = e => e.authorFlairType === be.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				je = e => i.a.createElement(ke, null, "u/".concat(e)),
				Ce = u.a.wrapped(ce.a, "InternalLink", ge.a),
				we = u.a.div("LinkContainer", ge.a);
			var ye = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return i.a.createElement(d.a, {
						styles: s.styles,
						title: Object(T.c)("Moderators"),
						headerButton: i.a.createElement(fe, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, i.a.createElement(pe, null))
					}, s.mods.map(e => i.a.createElement(xe, {
						key: e.name
					}, (e => i.a.createElement(oe.a, {
						to: "/user/".concat(e.name, "/")
					}, je(e.name)))(e), i.a.createElement(Oe, {
						flair: ve(e),
						forceSmallEmojis: !0
					}))), i.a.createElement(we, null, i.a.createElement(Ce, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(T.c)("View All Moderators"))))
				},
				Ee = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Pe = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				_e = s.n(Pe);
			const Te = u.a.div("WidgetContent", _e.a),
				Se = u.a.wrapped(o.a, "RawHTMLDisplay", _e.a);
			var Ie = e => i.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, i.a.createElement(Te, null, i.a.createElement(Se, {
					html: e.widget.textHtml || ""
				}))),
				We = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Me = e => i.a.createElement(We.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return ye;
						case "textarea":
							return Ie;
						case "button":
							return N;
						case "subreddit-rules":
							return Ne.b;
						case "community-list":
							return G;
						case "calendar":
							return K;
						case "image":
							return ae;
						case "custom":
							return X;
						case "post-flair":
							return Ee.a;
						default:
							return Me
					}
				}(e.widget);
				return i.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, s) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, s) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.m.less": function(e, t, s) {
			e.exports = {
				container: "ce8AyHVPoXK2ammlk4dfU",
				mModHub: "lPFQHGq7ZJKxOjbVRcUdL",
				content: "_1VN7jDMwPO-3f4G4d4Uy64",
				pageTitle: "V22-y0iI914ak74zxkV1a",
				pageTitleText: "_3BCuy1seZbIJ-Vw-iWJCTG",
				compareBar: "sT-SyQpGKrzgwl4yACquP",
				compareButton: "_1Mw_9r88mDyglkMA5Pp5Ms",
				table: "_2Lg_uTkZH6amYWXVr49IWM",
				colHeaderCheckbox: "_3qPtBJYDKp7pfTfAUKAzlI",
				colHeaderTime: "_3pBaYFkqpMeop0hSx3HG-b",
				colHeaderPage: "_1n5DuAwDmS92cPgdXSZ0VO",
				colHeaderUser: "_1hHgxs8vZyaUp-aaXVfveR",
				colHeaderReason: "_2eOOtPq7Dwb8YjxxasuXgN",
				colHeaderActions: "_2KyULn42zdubuWRRe3ofMX",
				row: "_1n6bCdFzFTcMb8nbcUVbiz",
				mHidden: "_3MGUJlnTJODLOgfuo6ps3N",
				revertButton: "r_5uSGcfTRKw2BrjrMAR6",
				cellPage: "RApPXNo2Wc734CFMKUP9W",
				wikiPageLink: "_3CiqT117augUjPWWrx2TW0",
				usernameLink: "RxzK_7t17mU6YV5lKPTX-",
				cellReason: "_181zFMPLOrQCybR7mpAjDS",
				reasonTextWrapper: "_2k1ikYAtkuItWLnM2v1FoJ",
				mExpanded: "_2Ek11A--oU1fiuOX4icZFo",
				reasonText: "_3rkoZiwX9xBWbnUj8KdDg_",
				moreButton: "MlwbIZHA-n0l6pJotytjr",
				buttons: "_2NPnlVPBDNk-5rZwESZ9B9",
				viewButton: "_1QQV3g6raY4DMIZmGWf_EB",
				cellCheckbox: "_2jHe0kuo-s2zjj9AFEoKIR",
				checkbox: "_2z1fkA5gXEWTIixh5mc5Mu",
				loadingRow: "_1twsCmeo_Rv87GnJLkvjOG",
				loadingShimmer: "_2OTytxS0mfmxAGAw4qKI6K",
				mShowActionButtons: "_3ZOwuRsjzzqragH4DDY3Au"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = s("./src/lib/addQueryParams/index.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/helpers/wiki/wikiRevision.ts");

			function f(e, t) {
				const {
					revision: s,
					revisionToCompare: n
				} = t;
				if (!s && !n) return e;
				const i = {};
				return s && (i[x.w] = Object(k.b)(s)), n && (i[x.x] = Object(k.b)(n)), Object(g.a)(e, i)
			}
			var O = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				v = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				j = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/subredditWiki.ts"),
				N = s("./node_modules/lodash/times.js"),
				P = s.n(N),
				_ = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				T = s("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				S = s.n(T);
			var I = () => {
					const e = n.createElement("div", {
						className: Object(o.a)(S.a.loadingShimmer, Object(_.b)({
							isLoading: !0
						}))
					});
					return n.createElement("div", null, P()(4, t => n.createElement("div", {
						key: t,
						className: S.a.loadingRow
					}, e)))
				},
				W = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			class M extends i.a.Component {
				constructor() {
					super(...arguments), this.isIntersecting = !1, this.handleChange = e => {
						this.isIntersecting = e.isIntersecting, this.triggerLoadMoreIfNeeded()
					}, this.triggerLoadMoreIfNeeded = () => {
						const {
							isLoading: e,
							hasError: t
						} = this.props;
						!this.isIntersecting || e || t || this.props.onLoadMore()
					}
				}
				componentDidMount() {
					this.triggerLoadMoreIfNeeded()
				}
				componentDidUpdate() {
					this.triggerLoadMoreIfNeeded()
				}
				render() {
					return i.a.createElement(W.a, {
						onChange: this.handleChange
					}, i.a.createElement("div", null))
				}
			}
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var R = s("./node_modules/lodash/noop.js"),
				L = s.n(R),
				B = s("./src/reddit/components/AuthorLink/index.tsx"),
				A = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				D = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				F = s("./src/reddit/controls/Checkbox/index.tsx"),
				H = s("./src/reddit/controls/InternalLink/index.tsx"),
				U = s("./node_modules/lodash/forEach.js"),
				V = s.n(U),
				K = s("./src/lib/fastdom/index.ts");

			function z(e) {
				K.a.read(() => {
					V()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								s = e.parentElement,
								n = "true" === s.dataset.textOverflow;
							t !== n && K.a.write(() => {
								s.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const q = Object(a.c)({
				revision: E.n
			});
			class G extends i.a.Component {
				constructor() {
					super(...arguments), this.reasonElementRef = i.a.createRef(), this.state = {}, this.onToggleHiddenClick = async () => {
						const {
							revision: e,
							revisionId: t,
							subredditName: s
						} = this.props, n = e.isHidden;
						this.props.sendEvent(Object(h.l)(n)), this.setState({
							isHideRequestPending: !0
						}), await this.props.toggleIsHidden({
							revisionId: t,
							subredditName: s,
							wikiPageName: e.page.name
						}), this.setState({
							isHideRequestPending: !1
						})
					}, this.onRevertClick = () => {
						this.props.onRevertClick(this.props.revision)
					}, this.onShowMoreButtonClick = () => {
						this.setState({
							expanded: !0
						})
					}, this.onCheckboxToggle = () => {
						this.props.onCheckboxToggle(this.props.revisionId)
					}, this.onViewClick = () => {
						this.props.sendEvent(h.q)
					}
				}
				componentDidMount() {
					this.reasonElementRef.current && z([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: s,
						isRecentRevisionMode: n,
						revision: r,
						subredditName: a
					} = this.props, d = r.page.name, c = r.isHidden, {
						expanded: l
					} = this.state, m = r.authorInfo && r.authorInfo.name, u = Object(v.a)({
						subredditName: a,
						wikiPageName: d
					}, s), p = f(u, {
						revision: r.id
					}), h = !n && e, g = d.split("/").slice(-1)[0];
					return i.a.createElement("tr", {
						className: Object(o.a)(S.a.row, c ? S.a.mHidden : null)
					}, !n && i.a.createElement("td", {
						className: S.a.cellCheckbox
					}, i.a.createElement(F.a, {
						className: S.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), i.a.createElement("td", {
						className: S.a.cellTime
					}, Object(D.b)(r)), n && i.a.createElement("td", {
						className: S.a.cellPage
					}, i.a.createElement(H.a, {
						className: S.a.wikiPageLink,
						title: "/".concat(d),
						to: u
					}, g)), i.a.createElement("td", {
						className: S.a.cellUser
					}, m && i.a.createElement(A.a, {
						sendHoverCardEvent: L.a,
						tooltipId: "revision-".concat(r.id),
						user: m
					}, i.a.createElement(B.a, {
						author: m,
						className: S.a.usernameLink
					}, m))), i.a.createElement("td", {
						className: S.a.cellReason
					}, i.a.createElement("div", {
						className: Object(o.a)(S.a.reasonTextWrapper, l ? S.a.mExpanded : null)
					}, i.a.createElement("div", {
						ref: this.reasonElementRef,
						className: S.a.reasonText
					}, r.reason), !l && i.a.createElement(b.d, {
						className: S.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, Object(j.c)("more")))), i.a.createElement("td", null, i.a.createElement("div", {
						className: S.a.buttons
					}, i.a.createElement(b.o, {
						className: S.a.viewButton,
						onClick: this.onViewClick,
						to: p
					}, Object(j.c)("View")), h && i.a.createElement(i.a.Fragment, null, i.a.createElement(b.n, {
						className: S.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, c ? Object(j.c)("Show") : Object(j.c)("Hide")), i.a.createElement(b.n, {
						className: S.a.revertButton,
						onClick: this.onRevertClick
					}, Object(j.c)("Revert"))))))
				}
			}
			var J = Object(r.b)(q, e => ({
				toggleIsHidden: t => e(Object(c.b)(t))
			}))(G);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = Object(a.c)({
				hasError: E.o,
				hasWikiModPerms: (e, t) => {
					const s = Object(y.y)(e, t);
					return !!s && Object(w.f)(e, {
						subredditId: s.id
					})
				},
				isPending: E.q,
				isRevertConfirmationModalOpen: Object(C.b)("wiki-revert-confirmation"),
				listingInfo: E.p
			});
			class Q extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = i.a.createRef(), this.state = {
						selectedRevisions: []
					}, this.onRevertConfirmed = () => {
						const {
							subredditName: e
						} = this.props, {
							revertRevision: t
						} = this.state;
						t && (this.props.sendEvent(h.k), this.props.onRevertToRevision({
							revisionId: t.id,
							subredditName: e,
							wikiPageName: t.page.name
						}))
					}, this.onCompareClick = () => {
						this.props.sendEvent(h.d)
					}, this.onRevertButtonClick = e => {
						this.setState({
							revertRevision: e
						}), this.props.toggleRevetConfirmationModal()
					}, this.handleResize = () => {
						this.containerRef.current && function(e) {
							z(e.getElementsByClassName(S.a.reasonText))
						}(this.containerRef.current)
					}, this.onLoadMore = () => {
						this.props.onLoadMoreRevisions()
					}, this.onCheckboxToggle = e => {
						const {
							listingInfo: t
						} = this.props, s = t && t.ids || [];
						this.setState(t => {
							let n = t.selectedRevisions;
							return 2 === (n = n.includes(e) ? n.filter(t => t !== e) : n.length < 2 ? [...n, e] : [e]).length && s.indexOf(n[0]) < s.indexOf(n[1]) && n.reverse(), {
								selectedRevisions: n
							}
						})
					}, this.renderRowItem = (e, t) => {
						const {
							hasWikiModPerms: s,
							subredditName: n
						} = this.props, {
							selectedRevisions: r
						} = this.state;
						return i.a.createElement(J, {
							key: e,
							hasWikiModPerms: s,
							isCheckboxSelected: r.includes(e),
							isModHub: this.props.isModHub,
							isRecentRevisionMode: this.props.isRecentRevisionsMode,
							onCheckboxToggle: this.onCheckboxToggle,
							onRevertClick: this.onRevertButtonClick,
							revisionId: e,
							sendEvent: this.props.sendEvent,
							subredditName: n
						})
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						hasError: e,
						hasWikiModPerms: t,
						isModHub: s,
						isPending: n,
						isRecentRevisionsMode: r,
						isRevertConfirmationModalOpen: a,
						listingInfo: d,
						subredditName: c,
						wikiPageName: u
					} = this.props, {
						selectedRevisions: h
					} = this.state, g = d && d.ids || [], x = d && d.pageInfo.hasNextPage;
					let k = "",
						O = "#";
					u && (k = Object(v.a)({
						subredditName: c,
						wikiPageName: u
					}, s), 2 === h.length && (O = f(k, {
						revision: h[0],
						revisionToCompare: h[1]
					})));
					const C = !r && t;
					return i.a.createElement("div", {
						ref: this.containerRef,
						className: Object(o.a)(S.a.container, {
							[S.a.mModHub]: s,
							[S.a.mShowActionButtons]: C
						})
					}, i.a.createElement(p.a, {
						buttonText: r ? void 0 : Object(j.c)("Go to wiki page"),
						buttonLink: k,
						className: S.a.pageTitle,
						title: i.a.createElement("span", {
							className: S.a.pageTitleText
						}, r ? Object(j.c)("Recent revisions") : Object(j.c)("Page history for ".concat(Object(j.b)("pageName", "/".concat(u)))))
					}), i.a.createElement("div", {
						className: S.a.content
					}, !r && i.a.createElement("div", {
						className: S.a.compareBar
					}, i.a.createElement(b.o, {
						className: S.a.compareButton,
						disabled: h.length < 2,
						onClick: this.onCompareClick,
						to: O
					}, Object(j.c)("Compare")), Object(j.c)("".concat(Object(j.b)("selectedCnt", h.length), "/2 selected to compare"))), i.a.createElement("table", {
						className: S.a.table
					}, i.a.createElement("thead", null, i.a.createElement("tr", null, !r && i.a.createElement("th", {
						className: S.a.colHeaderCheckbox
					}), i.a.createElement("th", {
						className: S.a.colHeaderTime
					}, Object(j.c)("time")), r && i.a.createElement("th", {
						className: S.a.colHeaderPage
					}, Object(j.c)("Wiki page")), i.a.createElement("th", {
						className: S.a.colHeaderUser
					}, Object(j.c)("Username")), i.a.createElement("th", {
						className: S.a.colHeaderReason
					}, Object(j.c)("Revision Reason")), i.a.createElement("th", {
						className: S.a.colHeaderActions
					}, C && i.a.createElement(i.a.Fragment, null, Object(j.c)("Actions"), i.a.createElement(m.a, {
						text: Object(j.c)("View: View current version\nHide: Hide revision from page history\nRevert: Revert page to an older version")
					}))))), i.a.createElement("tbody", {
						className: S.a.tableBody
					}, g.map(this.renderRowItem))), n && i.a.createElement(I, null), x && i.a.createElement(M, {
						hasError: e,
						isLoading: n,
						onLoadMore: this.onLoadMore
					})), a && i.a.createElement(l.a, {
						actionText: Object(j.c)("Revert"),
						headerText: Object(j.c)("Revert wiki page"),
						modalText: Object(j.c)("Are you sure you wish to change this wiki page to a previously saved version?"),
						onConfirm: this.onRevertConfirmed,
						toggleModal: this.props.toggleRevetConfirmationModal,
						withOverlay: !0
					}))
				}
			}
			const X = Object(r.b)(Z, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(d.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(c.a)(t)),
				onLoadMoreRevisions: () => e(Object(c.c)(Object.assign({}, t, {
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				})))
			}))(Object(u.b)(Q));
			t.a = e => {
				const t = !!e.isRecentRevisionsMode,
					s = Object(O.a)(Object.assign({}, e, {
						isRecent: t
					}));
				return i.a.createElement(X, Y({
					key: s,
					listingKey: s
				}, e))
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less": function(e, t, s) {
			e.exports = {
				container: "kuIrk7ySqHYuv5Gt8MVk7",
				automodContent: "_1FI4zcF0t1ECf8oc18uKd0",
				automodInfoBanner: "_2cLJCh1PnBUPaTO1HveGgo",
				wikiHtmlContent: "_1r4JJnDJUTKPWFmsi-Is_u",
				revisionInfo: "_3n6jRoJzvGVG7cvZDrvW1G"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2knUS3S97xMYycQVxOi0Yd",
				link: "_2uut3Ijozr0WkSh-oLVTkt"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3kIjxjzGVq5UfR6Bjiovd",
				hideIcon: "_2G1CaoG-VN3IjmyXMjpIfp"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				c = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				l = s("./src/reddit/constants/componentSizes.ts"),
				m = s("./src/reddit/constants/wiki.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				b = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				h = s("./src/reddit/i18n/utils.ts"),
				g = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				x = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				k = s("./src/reddit/selectors/subredditWiki.ts"),
				f = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				O = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				v = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = s("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				C = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				w = s("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				y = s.n(w);
			const E = e => {
				const {
					item: t,
					subredditName: s,
					isModHub: i
				} = e, r = t.isPagePresent && Object(C.a)({
					subredditName: s,
					wikiPageName: t.path
				}, i);
				return n.createElement("li", null, r ? n.createElement(v.a, {
					className: y.a.link,
					to: r
				}, t.name) : n.createElement("span", null, t.name), !!t.children.length && n.createElement("ul", null, t.children.map(e => n.createElement(E, {
					isModHub: i,
					item: e,
					key: e.path,
					subredditName: s
				}))))
			};
			var N = e => {
					const {
						isModHub: t,
						subredditName: s,
						wikiDirectory: i
					} = e, r = Object(j.a)(i.pageTree || []);
					return n.createElement("div", {
						className: y.a.container
					}, n.createElement("h1", null, Object(h.c)("Viewing pages for ".concat(Object(h.b)("subredditName", s)))), n.createElement("h2", null, Object(h.c)("Below is a list of pages in this wiki visible to you in this subreddit.")), n.createElement("ul", null, r.map(e => n.createElement(E, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: s
					}))))
				},
				P = s("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				_ = s.n(P),
				T = e => {
					const {
						className: t,
						isModHub: s,
						showRevisionInfo: i,
						subredditName: r,
						wikiDirectory: o,
						wikiPage: d,
						wikiPageName: c
					} = e;
					let l = null;
					return o && c === m.j ? l = n.createElement(N, {
						isModHub: s,
						subredditName: r,
						wikiDirectory: o
					}) : d && d.content && c === m.h ? l = n.createElement("div", {
						className: _.a.automodContent
					}, d.content.markdown) : d && d.content && (l = n.createElement(f.a, {
						className: _.a.wikiHtmlContent,
						html: d.content.html
					})), n.createElement("div", {
						className: Object(a.a)(t, _.a.container)
					}, c === m.h && n.createElement("div", {
						className: _.a.automodInfoBanner
					}, Object(h.c)("This page is used to configure AutoModerator for the subreddit, please see the "), n.createElement("a", {
						href: "/wiki/automoderator/full-documentation"
					}, Object(h.c)("full documentation")), Object(h.c)(" for information")), l, i && d && d.revision && n.createElement("div", {
						className: _.a.revisionInfo
					}, n.createElement(O.a, {
						showTimeAgo: !0,
						isLastRevision: !0,
						revision: d.revision
					})))
				},
				S = s("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				I = s.n(S);
			const W = Object(i.b)(() => Object(r.c)({
					pending: k.a,
					wikiDirectory: k.b,
					wikiPage: k.c
				})),
				M = Object(u.t)();
			class R extends n.Component {
				constructor() {
					super(...arguments), this.onEditButtonClick = () => {
						this.props.sendEvent(Object(p.f)())
					}, this.isListingPage = () => this.props.wikiPageName === m.j, this.reloadPage = () => {
						window.location.reload()
					}
				}
				componentDidMount() {
					this.scrollToHash()
				}
				componentDidUpdate(e) {
					const t = this.props.pageLayer !== e.pageLayer,
						s = this.props.wikiPage !== e.wikiPage;
					(t || s) && this.scrollToHash()
				}
				scrollToHash() {
					const e = window.location.hash.slice(1),
						t = e ? document.getElementById(e) : null;
					if (t) {
						let e = l.f + 10;
						this.props.isModHub && (e += l.j + l.k);
						const s = window.scrollY + t.getBoundingClientRect().top - e;
						window.scrollTo(0, s)
					}
				}
				getWikiPageStatus() {
					const {
						wikiDirectory: e,
						wikiPage: t
					} = this.props;
					return this.isListingPage() ? e && e.status : t && t.status
				}
				renderPageContents() {
					const {
						isModHub: e = !1,
						pending: t,
						showRevisionInfo: s,
						subredditName: i,
						wikiDirectory: r,
						wikiPage: a,
						wikiPageName: o
					} = this.props, l = this.getWikiPageStatus(), u = o === m.i, p = this.props.isModHub ? "/r/".concat(this.props.subredditName, "/about/wiki") : "/r/".concat(this.props.subredditName, "/wiki"), k = "".concat(p, "/index"), f = u ? void 0 : Object(h.c)("Wiki home");
					if (t || !l) return n.createElement(c.a, {
						showTitle: !0
					});
					if (l === x.b.Unknown || l === x.b.PageNotCreated) {
						if (Object(b.b)(o)) return n.createElement(d.a, {
							buttonLink: k,
							buttonText: f,
							description: Object(h.c)("This page uses a restricted URL and can not be used as a wiki page"),
							title: Object(h.c)('"'.concat(Object(h.b)("pageName", o), '" does not exist'))
						})
					}
					switch (l) {
						case x.b.Valid:
							return !(!a || !a.content || a.content.markdown) ? n.createElement(d.a, {
								buttonLink: "".concat(p, "/edit/").concat(o),
								buttonText: Object(h.c)("Edit page"),
								description: Object(h.c)("Edit it to add some content"),
								title: Object(h.c)("This page is empty")
							}) : n.createElement(T, {
								isModHub: e,
								showRevisionInfo: s,
								subredditName: i,
								wikiDirectory: r,
								wikiPage: a,
								wikiPageName: o
							});
						case x.b.PageNotCreated:
							return n.createElement(d.a, {
								buttonLink: "".concat(p, "/create/").concat(o),
								buttonText: Object(h.c)("Create page"),
								description: Object(h.c)("Create a wiki page from this URL"),
								title: Object(h.c)('"'.concat(Object(h.b)("pageName", o), '" does not exist'))
							});
						case x.b.Unknown:
							return n.createElement(d.a, {
								buttonText: Object(h.c)("Reload page"),
								onButtonClick: this.reloadPage,
								title: Object(h.c)("An unknown error occurred")
							});
						case x.b.RestrictedPage:
							return n.createElement(d.a, {
								buttonLink: k,
								buttonText: f,
								description: Object(h.c)("This page uses a restricted URL and can not be used as a wiki page"),
								title: Object(h.c)('"'.concat(Object(h.b)("pageName", o), '" does not exist'))
							});
						case x.b.MayNotView:
							return n.createElement(d.a, {
								buttonLink: k,
								buttonText: f,
								description: Object(h.c)("The mods of this community have disabled this wiki page"),
								icon: n.createElement(g.a, {
									className: I.a.hideIcon
								}),
								title: Object(h.c)("This page has been disabled")
							});
						case x.b.WikiDisabled:
							return n.createElement(d.a, {
								buttonLink: "/r/".concat(i, "/"),
								buttonText: Object(h.c)("Continue to r/".concat(Object(h.b)("subredditName", i))),
								description: "The mods of this community have disabled their wiki",
								icon: n.createElement(g.a, {
									className: I.a.hideIcon
								}),
								title: Object(h.c)("This wiki has been disabled")
							});
						case x.b.PageNotFound:
							return n.createElement(d.a, {
								buttonLink: k,
								buttonText: f,
								title: Object(h.c)('"'.concat(Object(h.b)("pageName", o), '" does not exist'))
							});
						default:
							return null
					}
				}
				render() {
					const {
						className: e
					} = this.props;
					return n.createElement("div", {
						className: Object(a.a)(e, I.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = M(W(Object(o.b)(R)))
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_38GE9wiaoDeBwytESxgurW",
				mModHub: "FOp_mrprAjmysKAwsxZhy",
				content: "_1FDDEmz6LhrlUvB4ha670Y",
				pageTitle: "_1M_2BWIe9pJyTSD3ZNzB2C",
				loadingPlaceholder: "_2eJGN5qzU3dzM10INVODCG",
				loadingSection: "_97ug2ZsHOzZBsGZ98Mqwl",
				diffWrapper: "_1EwbfNO_skwriCJJeOOslG"
			}
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				d = s("./src/reddit/constants/wiki.ts"),
				c = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				l = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				m = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/selectors/subredditWiki.ts"),
				p = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				b = s("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				h = s.n(b),
				g = () => n.createElement("div", {
					className: h.a.loadingPlaceholder
				}, n.createElement("div", {
					className: h.a.loadingSection
				}, n.createElement(p.a, {
					paragraphsCount: 1
				})), n.createElement("div", {
					className: h.a.loadingSection
				}, n.createElement(p.a, {
					paragraphsCount: 1
				})));
			const x = Object(r.c)({
					diffInfo: (e, t) => {
						const s = Object(c.a)(t);
						return Object(u.i)(e, {
							key: s
						})
					}
				}),
				k = Object(i.b)(x);
			class f extends n.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: s,
						diffInfo: i,
						wikiPageName: r
					} = this.props;
					let c = null;
					c = !i || i.pending ? n.createElement(g, null) : i.error ? Object(m.c)("Could not load comparison diff") : n.createElement("div", {
						className: h.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: i.htmlDiff || ""
						}
					});
					const u = Object(l.a)({
						subredditName: s,
						wikiPageName: r,
						wikiSubRoute: d.l.Revisions
					}, t);
					return n.createElement("div", {
						className: Object(a.a)(e, h.a.container, t ? h.a.mModHub : null)
					}, n.createElement(o.a, {
						buttonText: Object(m.c)("Go to page history"),
						buttonLink: u,
						className: h.a.pageTitle,
						title: Object(m.c)("Comparing revisions for /".concat(Object(m.b)("pageName", r)))
					}), n.createElement("div", {
						className: h.a.content
					}, c))
				}
			}
			t.a = k(f)
		},
		"./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1pXEnZ4uzz3OUpnXwRJCtz",
				modalHeader: "_3K-huH_Qa4D32ZPqAH9Ky",
				contentBlock: "N3HQ_fD9TZ7_Mk0iUMrkY",
				labelText: "_12y9PvK2L1LCL-P6PdoQ_B",
				reasonInput: "_3ZAhhe9gmKBwxW31xEmhKG",
				details: "_28OX1xAAmItegIE7yXUOxo",
				modalFooter: "NGYee0xeXDoBFshm7Ad-A",
				loadingIcon: "_2dRNmLURJShL28WViqaeCk"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.m.less": function(e, t, s) {
			e.exports = {
				topBar: "an_IeG33-UK9pts_JjqgQ",
				content: "_38SkvHzrhjQ7cSy7R0Lar1",
				resizableTextarea: "jtUB91J6tX7NTsovNabut"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/lib/makeActionCreator/index.ts"),
				m = s("./src/reddit/actions/pages/subredditWiki/index.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/constants/wiki.ts"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				x = s("./src/reddit/constants/headers.ts");
			var k = e => Object(h.b)(Object(g.a)(e.context, [x.a]), {
					endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/edit"),
					method: b.bb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				f = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				O = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				v = s("./src/reddit/i18n/utils.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				w = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const y = Object(l.a)(w.a);
			var E = s("./src/reddit/components/BlockNavigation/index.tsx"),
				N = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				P = s("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				S = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				W = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				M = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				R = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				L = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/reddit/selectors/subredditWiki.ts"),
				D = s("./src/higherOrderComponents/asModal/index.tsx"),
				F = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				H = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				U = s("./src/reddit/controls/TextButton/index.tsx"),
				V = s("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				K = s.n(V);
			class z extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						text: ""
					}, this.onSaveButtonClick = async () => {
						const {
							text: e
						} = this.state;
						this.props.onSave(e)
					}, this.onTextChange = e => {
						this.setState({
							text: e.target.value
						})
					}
				}
				render() {
					const {
						isPending: e
					} = this.props, {
						text: t
					} = this.state, s = p.g - t.length;
					return i.a.createElement("div", {
						className: K.a.container
					}, i.a.createElement(F.g, {
						className: K.a.modalHeader
					}, i.a.createElement(F.n, null, Object(v.c)("Add a reason for your revision")), i.a.createElement(U.a, {
						onClick: this.props.onCancel
					}, i.a.createElement(F.b, null))), i.a.createElement("div", {
						className: K.a.contentBlock
					}, i.a.createElement("label", null, i.a.createElement("span", {
						className: K.a.labelText
					}, Object(v.c)("Revision reason")), i.a.createElement("input", {
						autoFocus: !0,
						className: K.a.reasonInput,
						maxLength: p.g,
						onChange: this.onTextChange,
						placeholder: Object(v.c)("Ex: Added source to appendix"),
						value: t
					})), i.a.createElement("div", {
						className: K.a.details
					}, Object(v.c)("".concat(Object(v.b)("count", s), " ").concat(Object(v.a)("chars", ["character", "characters"], s), " left")))), i.a.createElement(F.e, {
						className: K.a.modalFooter
					}, i.a.createElement(F.a, {
						onClick: this.props.onCancel
					}, Object(v.c)("Cancel")), i.a.createElement(I.f, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? i.a.createElement(H.a, {
						className: K.a.loadingIcon,
						sizePx: 10
					}) : Object(v.c)("Save"))))
				}
			}
			var q = Object(D.a)(z),
				G = s("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				J = s.n(G);
			const Y = "Discard-wiki-page-changes",
				Z = "Add-wiki-revision-reason",
				Q = 2,
				X = {
					[M.a.InvalidPageName]: Object(v.c)("Page name is invalid"),
					[M.a.MaxLengthExceed]: Object(v.c)("Page name must be shorter than ".concat(Object(v.b)("maxPageLen", p.d), " characters")),
					[M.a.PageAlreadyExists]: Object(v.c)("Page with this name already exists"),
					[M.a.RestrictedPageName]: Object(v.c)("This page uses a restricted URL and can not be used as a wiki page")
				},
				$ = (e, t, s) => {
					const n = t.status;
					if (e) {
						if (n === R.b.Valid) return X[M.a.PageAlreadyExists];
						if (n === R.b.PageNotFound) return Object(v.c)("You do not have permission to create this page");
						if (s) return X[s]
					} else if (n === R.b.Valid && !t.isRevisable) return Object(v.c)("You do not have permission to edit this page")
				},
				ee = Object(a.c)({
					allowNavigationCallback: B.a,
					isRevisionReasonModalOpen: Object(L.b)(Z),
					isSaveBeforeLeaveModalOpen: Object(L.b)(Y),
					wikiPage: A.c
				}),
				te = Object(r.b)(ee, (e, t) => ({
					onSaveWikiPage: (s, n) => e((e => {
						let {
							pageContent: t,
							wikiPageName: s,
							revisionReason: n,
							subredditName: i
						} = e;
						return async (e, r, a) => {
							const o = await k({
								context: a.apiContext(),
								pageContent: t,
								revisionReason: n,
								subredditName: i,
								wikiPageName: s
							});
							if (o.ok) e(y({
								pageKey: Object(O.a)({
									subredditName: i,
									wikiPageName: s
								}),
								pageRevisionsListingKey: Object(f.a)({
									subredditName: i,
									wikiPageName: s,
									isRecent: !1
								}),
								recentRevisionsListingKey: Object(f.a)({
									subredditName: i,
									wikiPageName: s,
									isRecent: !0
								})
							})), await e(Object(m.fetchSubredditWikiData)({
								includeDirectory: !0,
								includePageData: !0,
								subredditName: i,
								wikiPageName: s
							}));
							else {
								let t = Object(v.c)("Something went wrong");
								o.body && "RESTRICTED_PAGE" === o.body.reason && (t = Object(v.c)("Cannot create/edit restricted page")), e(Object(u.e)({
									kind: j.b.Error,
									text: t
								}))
							}
							return o.ok
						}
					})({
						pageContent: s,
						revisionReason: n,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						return async (t, s) => {
							const n = s().platform.currentPage,
								i = n.locationState && n.locationState[p.a];
							if (e && i) t(Object(c.a)());
							else {
								const {
									subredditName: e,
									wikiPageName: s
								} = n.urlParams, i = Object(C.a)(n.url, {
									subredditName: e,
									wikiPageName: s
								});
								t(Object(c.c)(i))
							}
						}
					}(t)),
					closeAllModals: () => e(Object(d.f)()),
					toggleModal: t => e(Object(d.i)(t))
				}));
			class se extends i.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.onSaveWithReason = async e => {
						const {
							markdown: t
						} = this.state;
						this.setState({
							isSavePending: !0
						}), this.props.sendEvent(Object(W.m)(this.props.isCreation));
						const s = await this.props.onSaveWikiPage(t, e);
						this.isUnmounted || (this.setState({
							isSavePending: !1
						}), s ? this.setState({
							disableBlocking: !0
						}, () => {
							this.props.onFinishWikiEdit()
						}) : this.finishPendingNavTransition(!1))
					}, this.onLeavePageConfirmed = () => {
						this.finishPendingNavTransition(!0)
					}, this.onAbortLeavingPage = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.onCancelAddingRevisionReason = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.showRevisionReasonModal = () => {
						this.props.isRevisionReasonModalOpen || this.props.toggleModal(Z)
					}, this.onCancel = () => {
						this.props.onFinishWikiEdit(!0)
					}, this.onTextChange = e => {
						this.setState({
							markdown: e.target.value
						})
					};
					const t = e.wikiPage && e.wikiPage.content ? e.wikiPage.content.markdown : "";
					this.state = {
						isSavePending: !1,
						markdown: t
					}
				}
				componentDidUpdate(e) {
					const {
						wikiPage: t
					} = this.props;
					if (t && !e.wikiPage) {
						const e = t.content && t.content.markdown || "";
						this.setState({
							markdown: e
						})
					}
				}
				componentWillUnmount() {
					this.isUnmounted = !0, this.finishPendingNavTransition(!1)
				}
				finishPendingNavTransition(e) {
					this.props.allowNavigationCallback && this.props.allowNavigationCallback(e)
				}
				render() {
					const {
						isCreation: e,
						isRevisionReasonModalOpen: t,
						isSaveBeforeLeaveModalOpen: s,
						wikiPage: n,
						wikiPageName: r
					} = this.props, {
						disableBlocking: a,
						isSavePending: d,
						markdown: c
					} = this.state, l = n && n.content && n.content.markdown || "", m = !c.trim(), u = c !== l, p = e && n ? Object(M.b)(n.name) : void 0, b = !(!n || n.status !== R.b.PageNotCreated || p), h = !(!n || n.status !== R.b.Valid || !n.isRevisable), g = e ? b : h, x = g && u && !m && !d && !p;
					return i.a.createElement("div", {
						className: Object(o.a)(J.a.container, this.props.className)
					}, i.a.createElement("div", {
						className: Object(o.a)(this.props.topBarClassName, J.a.topBar)
					}, i.a.createElement(I.i, {
						onClick: this.onCancel,
						disabled: d
					}, Object(v.c)("Cancel")), i.a.createElement(I.f, {
						disabled: !x,
						onClick: this.showRevisionReasonModal
					}, Object(v.c)("Save"))), i.a.createElement("div", {
						className: Object(o.a)(this.props.contentClassName, J.a.content)
					}, n ? g ? i.a.createElement(P.a, {
						autoFocus: !0,
						className: J.a.resizableTextarea,
						disabled: d,
						onChange: this.onTextChange,
						placeholder: Object(v.c)("Add page content here"),
						value: c
					}) : i.a.createElement(T.a, {
						description: $(e, n, p),
						title: e ? Object(v.c)('"'.concat(Object(v.b)("pageName", r), '" cannot be created')) : Object(v.c)('"'.concat(Object(v.b)("pageName", r), '" cannot be edited'))
					}) : i.a.createElement(S.a, {
						paragraphsCount: Q
					})), t && i.a.createElement(q, {
						withOverlay: !0,
						onCancel: this.onCancelAddingRevisionReason,
						onSave: this.onSaveWithReason,
						isPending: d
					}), i.a.createElement(E.a, {
						blockOnBeforeUnload: !0,
						dialogId: Y,
						enabled: u && !a
					}), s && i.a.createElement(N.a, {
						actionText: Object(v.c)("Discard"),
						headerText: Object(v.c)("Discard changes before leaving?"),
						modalText: Object(v.c)("You have made some changes to your wiki page, do you wish to discard the changes?"),
						onCancel: this.onAbortLeavingPage,
						onClose: this.onAbortLeavingPage,
						onConfirm: this.onLeavePageConfirmed,
						withOverlay: !0
					}))
				}
			}
			t.a = te(Object(_.b)(se))
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.m.less": function(e, t, s) {
			e.exports = {
				container: "hFkZVSvr5ZCDtsUNvUe0t",
				mModHub: "OTGEcq8eHMW4w8Jk_xUB_",
				content: "jB-E_8PuDLsGMGUcJ38Ed",
				pageTitle: "_7mpqbmAh_bdv9eJPLzJkl",
				headerRow: "_24xr0pCtEq8smcGh9hy-iC",
				pageSource: "_3FGoxkytIqYAnG5hdqa8Uq"
			}
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				d = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				l = s("./src/reddit/constants/wiki.ts"),
				m = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				b = s("./src/reddit/selectors/subredditWiki.ts"),
				h = s("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				g = s.n(h);
			const x = Object(r.c)({
					pending: b.a,
					revision: (e, t) => {
						let {
							revisionId: s
						} = t;
						return s ? Object(b.n)(e, {
							revisionId: s
						}) : void 0
					},
					wikiPage: b.c
				}),
				k = Object(i.b)(x);
			class f extends n.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: s,
						revision: i,
						revisionId: r,
						subredditName: b,
						wikiPage: h,
						wikiPageName: x
					} = this.props;
					let k = null;
					k = s ? n.createElement(o.a, null) : h ? h.status === p.b.Valid ? h.content && h.content.markdown : Object(u.c)("Cannot show page content") : Object(u.c)("Page not found");
					const f = i || h && h.revision,
						O = !r,
						v = Object(m.a)({
							subredditName: b,
							wikiPageName: x,
							wikiSubRoute: O ? void 0 : l.l.Revisions
						}, t);
					return n.createElement("div", {
						className: Object(a.a)(e, g.a.container, t ? g.a.mModHub : null)
					}, n.createElement(d.a, {
						buttonText: O ? Object(u.c)("Go to wiki page") : Object(u.c)("Go to page history"),
						buttonLink: v,
						className: g.a.pageTitle,
						title: !O && f ? Object(u.c)("Revision from ".concat(Object(u.b)("timeAgo", Object(c.b)(f)))) : Object(u.c)("Page source")
					}), n.createElement("div", {
						className: g.a.content
					}, n.createElement("div", {
						className: g.a.headerRow
					}, f && n.createElement(c.a, {
						isLastRevision: O,
						revision: f,
						showReason: !0,
						showTimeAgo: !1
					})), n.createElement("div", {
						className: g.a.pageSource
					}, k)))
				}
			}
			t.a = k(f)
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3m-pL3lGJRyo7pWckPUL_d",
				dropdown: "_3IUuipl8jTmMnjXR0NDisP",
				row: "_25Y1JThsMmw5VNvhFFLb0j"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "I0T583ZtOWVEpRWsa0kbu",
				button: "_2IOi-lonN6Hy4pTcjFTLBp",
				revisionInfo: "Ln6UHsxFeDZdhv1yRUL0F",
				flexSpacer: "meAs5YnW58CX9i8rWjZQL"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/history/esm/history.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/copyToClipboard/index.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				p = s("./src/reddit/constants/wiki.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/i18n/utils.ts"),
				g = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/subredditWiki.ts"),
				v = s("./src/config.ts"),
				j = s("./src/reddit/components/OverflowMenu/index.tsx"),
				C = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				E = s("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				N = s.n(E);
			const P = ["right", "bottom"],
				_ = ["right", "top"];
			class T extends r.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(y.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, s = "".concat(v.a.redditUrl, "/r/").concat(e, "/wiki/").concat(t);
						this.props.onCopyPageUrl(s), this.props.sendEvent(y.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: s,
						subredditName: n,
						wikiPage: i,
						wikiPageName: a
					} = this.props, o = "/r/".concat(n, s ? "/about/wiki" : "/wiki");
					return r.a.createElement(j.b, {
						className: Object(d.a)(e, N.a.container),
						dropdownClassName: N.a.dropdown,
						dropdownId: t,
						targetPosition: P,
						tooltipPosition: _
					}, i && r.a.createElement(w.b, {
						className: N.a.row,
						displayText: Object(h.c)("View page history"),
						href: "".concat(o, "/revisions/").concat(a)
					}), i && r.a.createElement(w.b, {
						className: N.a.row,
						displayText: Object(h.c)("View page source"),
						href: "".concat(o, "/").concat(a, "?").concat(C.y),
						onClick: this.onViewPageSourceClick
					}), s && r.a.createElement(w.b, {
						className: N.a.row,
						displayText: Object(h.c)("View in community"),
						href: "/r/".concat(n, "/wiki/").concat(a)
					}), r.a.createElement(w.b, {
						className: N.a.row,
						displayText: Object(h.c)("Copy URL"),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var S = T,
				I = s("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				W = s.n(I);
			const M = Object(o.c)({
					hasWikiModPerms: (e, t) => {
						const s = Object(f.y)(e, t);
						return !!s && Object(k.f)(e, {
							subredditId: s.id
						})
					},
					wikiPage: O.c
				}),
				R = Object(a.b)(M, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(c.a)(e) && t(Object(l.e)(Object(l.d)(Object(h.c)("Copied page URL"), x.b.SuccessCommunity)))
					})(t))
				}));
			class L extends r.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: s,
						wikiPageName: i,
						subredditName: a,
						className: o
					} = this.props, c = !!s && s.status === g.b.Valid, l = !!s && s.isRevisable, m = e && l && c, x = t ? "/r/".concat(a, "/about/wiki/edit/").concat(i) : "/r/".concat(a, "/wiki/edit/").concat(i);
					return r.a.createElement("div", {
						className: Object(d.a)(o, W.a.container)
					}, t && s && s.revision && r.a.createElement(u.a, {
						showTimeAgo: !0,
						className: W.a.revisionInfo,
						isLastRevision: !0,
						revision: s.revision
					}), r.a.createElement("div", {
						className: W.a.flexSpacer
					}), m && r.a.createElement(b.k, {
						className: W.a.button,
						to: "/r/".concat(a, "/about/wiki/settings/").concat(i)
					}, Object(h.c)("Page settings")), c && l && r.a.createElement(b.h, {
						className: W.a.button,
						to: Object(n.c)(x, {
							[p.a]: !0
						})
					}, Object(h.c)("Edit")), c && r.a.createElement(S, {
						className: W.a.overflowMenu,
						dropdownId: "wikiPage-OverflowMenu-".concat(i, "-").concat(t),
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: a,
						wikiPage: s,
						wikiPageName: i
					}))
				}
			}
			t.a = R(Object(m.b)(L))
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Av0UmXioR3Vgw-lpzfBWu",
				button: "_2hFu9bCtEjS60NjZM3F_UE",
				description: "_2c02P9rTnnEw2KuDpY8JxB",
				title: "_3rol4SGAf0n5-e8EENfrur"
			}
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				r = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				a = s.n(r);
			t.a = e => {
				const {
					buttonLink: t,
					buttonText: s,
					description: r,
					icon: o,
					onButtonClick: d,
					title: c
				} = e;
				let l = null;
				return s && t ? l = n.createElement(i.h, {
					className: a.a.button,
					onClick: e.onButtonClick,
					to: t
				}, s) : s && d && (l = n.createElement(i.f, {
					className: a.a.button,
					onClick: e.onButtonClick
				}, s)), n.createElement("div", {
					className: a.a.container
				}, o, c && n.createElement("div", {
					className: a.a.title
				}, c), r && n.createElement("div", {
					className: a.a.description
				}, r), l)
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				placeholderTitle: "XK5I3_2arHFpfmDn6iUGt",
				placeholderParagraph: "_3Rhsg99h5kjE-u1Pp-Uk8P",
				placeholderTextLine: "_5pG9RcI-AYalqG5z6osMT"
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/range.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				c = s.n(d);
			const l = e => r.createElement("div", {
				className: Object(a.a)(e.className, Object(o.b)({
					isLoading: !0
				}))
			});
			t.a = e => r.createElement(r.Fragment, null, e.showTitle && r.createElement(l, {
				className: c.a.placeholderTitle
			}), i()(e.paragraphsCount || 6).map(e => r.createElement("div", {
				className: c.a.placeholderParagraph,
				key: e
			}, i()(10).map(e => r.createElement(l, {
				className: c.a.placeholderTextLine,
				key: e
			})))))
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2NCACehu2vXVQzdHocg7Rq",
				linkButton: "_28uXMdKULX2ygqCKM5Apfz"
			}
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				o = s("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				d = s.n(o);
			t.a = e => {
				const {
					buttonLink: t,
					buttonText: s,
					className: n,
					title: o
				} = e;
				return i.a.createElement("div", {
					className: Object(r.a)(n, d.a.container)
				}, o, s && t && i.a.createElement(a.o, {
					className: d.a.linkButton,
					to: t
				}, s))
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2b8IWktp8nbHqDKTRFWebW",
				authorLink: "IY5BT71vlrhwNnwInSc2f"
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return C
			})), s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/lodash/noop.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/components/AuthorLink/index.tsx"),
				u = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/contexts/Language.tsx"),
				h = s("./src/reddit/helpers/graphql/helpers.ts"),
				g = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				f = s.n(k);
			const O = ["center", "top"],
				v = ["center", "bottom"],
				j = Object(o.a)(p.b),
				C = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en";
					const s = new Date(Object(h.j)(e.revisedAt));
					return Object(l.d)(t, s.valueOf() / 1e3)
				};
			class w extends a.a.Component {
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
						className: e,
						isLastRevision: t,
						revision: s,
						showReason: n = !1,
						showTimeAgo: r = !1
					} = this.props, {
						showTooltip: o
					} = this.state, l = s.authorInfo && s.authorInfo.name || c.z, p = new Date(Object(h.j)(s.revisedAt));
					return a.a.createElement("span", {
						className: Object(d.a)(e, f.a.container)
					}, t ? Object(g.c)("Last revised by ") : Object(g.c)("Revised by "), a.a.createElement(u.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: i.a
					}, a.a.createElement(m.a, {
						className: f.a.authorLink,
						author: l,
						isAuthorDeleted: Object(x.h)(l),
						isUnstyled: !0
					}, l)), r && a.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", a.a.createElement(b.a.Consumer, null, e => C(s, e)), a.a.createElement(j, {
						text: p.toString(),
						isOpen: o,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: O,
						tooltipPosition: v
					})), n && s.reason && a.a.createElement("span", null, " - ", s.reason))
				}
			}
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts");
			const a = Object(i.c)({
				language: r.P
			});

			function o(e) {
				return Object(n.b)(a)(e)
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = e => i.a.createElement("svg", o({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), i.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, i.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, i.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: a,
						"data-redditstyle": o
					} = t, d = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, s) => {
						const n = !(!t && !s);
						let i = "";
						return i = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, a, o);
					return i.a.createElement(e, u({
						className: Object(r.a)(m.a.Checkbox, c, s)
					}, d))
				},
				h = b(c.a),
				g = b(d);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? h : a.a;
				return i.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, i.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(m),
				p = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			class x extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = i()(() => {
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
					}, s = Object(o.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(d.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: s
					}, e.children), a.a.createElement("span", {
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(l.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: i()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showDropdownTriangle && a.a.createElement(c.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const n = Object(o.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected
				});
				return a.a.createElement(x, h({
					className: n
				}, s))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			class r extends i.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, r = s || n;
					return i.a.createElement("div", {
						className: e.className
					}, s && i.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), !r && i.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(r);
			t.a = n.a.wrapped(i.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/graphql/operations/SubredditWiki.json");
			const r = (e, t) => Object(n.a)(e, Object.assign({}, i, {
				variables: t
			}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};

			function c(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						dispatch: r
					} = e, a = d(e, ["featureEnabled", "dispatch"]);
					return n ? i.a.createElement(t, a) : void 0 !== s ? i.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const i = (e, t) => {
				const s = e.some(e => e.isNSFW),
					i = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !i
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				i = s("./src/reddit/constants/postLayout.ts");
			const r = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, s, a, o) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: i.b[t.prefs.layout]
				};
				return a && !Object(n.a)(a.name) && (d.subreddit = a.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = r, o && (d.position = o), d
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh"
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				o = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				u = e => Object(o.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(o.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(o.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(n.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(i.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(i);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				o = e => Object(n.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			}));
			const n = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				i = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				r = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				a = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				o = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return o
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "r", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "o", (function() {
				return y
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, i.defaults(e), {
					subreddit: i.subreddit(e),
					userSubreddit: i.userSubreddit(e)
				}),
				a = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, r(e)),
				o = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, r(e)),
				d = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, r(t)),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return d(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = d("compare_wiki_pages"),
				m = d("revert_wiki_page"),
				u = d("view_wiki_page"),
				p = d("view_source"),
				b = d("add_wiki_page_contributor"),
				h = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				x = d("copy_url"),
				k = d("add_wiki_subreddit_contributor"),
				f = d("remove_wiki_subreddit_contributor"),
				O = d("ban_wiki_contributor"),
				v = d("unban_wiki_contributor"),
				j = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				C = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				w = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: i.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				y = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: i.actionInfo(t, {
						settingValue: C[e]
					})
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/sortBy.js"),
				i = s.n(n),
				r = s("./src/reddit/constants/wiki.ts");
			const a = e => {
				return i()(e, e => "".concat(e.path, "/").startsWith("".concat(r.i, "/")) ? "\0".concat(e.path) : e.path).filter(e => !r.k.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					s = [];
				return a(e).forEach(e => {
					const n = Object.assign({}, e, {
							children: []
						}),
						i = n.parent ? t.get(n.parent) : null;
					i ? i.children.push(n) : s.push(n), t.set(n.path, n)
				}), s
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: s,
					subredditName: n,
					wikiPageName: i
				} = e;
				return "[".concat(n, "]--[").concat(i, "]--[rev1:").concat(s, "]--[rev2:").concat(t, "]").toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return "[".concat(e.subredditName, "]--[").concat(t, "]").toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				let t = "[".concat(e.subredditName, "]--[").concat(e.wikiPageName, "]");
				return e.revisionId && (t += "--[rev:".concat(e.revisionId, "]")), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var n = s("./src/reddit/constants/wiki.ts");
			const i = new RegExp("^[-\\w]+(?:\\/[-\\w]+){0,".concat(n.c, "}$")),
				r = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!r.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const s = e.toLowerCase(),
						r = s.split("/")[0],
						o = n.b.has(r),
						d = n.f.has(r) && s !== n.h;
					if (o || d) return a.RestrictedPageName;
					if (!i.test(s)) return a.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === s)) return a.PageAlreadyExists
					}
					return s.length > n.d ? a.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			const n = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				i = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => i.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", o.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, s) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Info/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => i.a.createElement("i", {
				className: "".concat(Object(r.b)("info"), " ").concat(e.className)
			}), "InfoIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, i;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(i || (i = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/pages/shared.ts"),
				d = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, n = Object(u.a)(s, m.N.HOT, {});
					return i.a.createElement(p.a, {
						listingKey: n,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				h = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				g = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				x = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				k = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/constants/wiki.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				j = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				w = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				y = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				E = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				N = s.n(E),
				P = e => {
					const {
						wikiPageName: t,
						subredditName: s
					} = e;
					return n.createElement(n.Fragment, null, n.createElement(C.a, null), n.createElement(y.a, {
						isModHub: !1,
						className: N.a.topBar,
						wikiPageName: t,
						subredditName: s
					}), n.createElement(w.a, {
						showRevisionInfo: !0,
						subredditName: s,
						wikiPageName: t
					}))
				},
				_ = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				T = s.n(_);
			class S extends i.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: s,
						queryParams: n
					} = e, {
						wikiSubRoute: r,
						wikiPageName: a
					} = s, o = n[k.w], d = n[k.x], c = k.y in n;
					switch (r) {
						case f.l.Create:
						case f.l.Edit:
							return i.a.createElement(g.a, {
								contentClassName: T.a.wikiPageEditorContent,
								isCreation: r === f.l.Create,
								subredditName: t,
								topBarClassName: T.a.communityWikiTopBar,
								wikiPageName: a
							});
						case f.l.Revisions:
							return i.a.createElement(j.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? i.a.createElement(h.a, {
								comparisonRevisionId: Object(v.a)(d),
								revisionId: Object(v.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? i.a.createElement(x.a, {
								revisionId: o ? Object(v.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? i.a.createElement(P, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var I = Object(O.t)()(S),
				W = s("./src/reddit/constants/componentSizes.ts"),
				M = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				R = s("./src/reddit/layout/page/Listing/index.tsx"),
				L = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts");
			const A = Object(O.t)(),
				D = Object(r.b)(() => Object(a.c)({
					contentGateInfo: (e, t) => {
						let {
							match: s
						} = t;
						return Object(B.f)(e, s.params.subredditName)
					},
					language: B.P,
					layout: O.K,
					over18Pref: B.U,
					subreddit: (e, t) => {
						let {
							match: s
						} = t;
						return Object(L.y)(e, {
							subredditName: s.params.subredditName || f.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.subredditName || f.e
					},
					wikiPageName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.wikiPageName || f.i
					}
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class F extends i.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						layout: s,
						subreddit: n,
						subredditName: r
					} = this.props, a = !!n && n.isNSFW && !B.U, o = Object(M.a)(t, a, r);
					if (o) return i.a.createElement(c.b, o);
					const m = "/r/".concat(r, "/");
					return i.a.createElement(R.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: W.i,
						navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: n ? n.name : r,
							maxWidth: W.i,
							subredditOrProfile: n,
							url: m
						}), i.a.createElement(d.a, {
							layout: s,
							subreddit: n || void 0,
							subredditId: n ? n.id : void 0,
							subredditName: r,
							subredditUrl: m
						})),
						content: i.a.createElement(I, {
							subredditName: r
						}),
						sidebar: n && i.a.createElement(b, {
							subreddit: n,
							subredditName: r
						})
					})
				}
			}
			t.default = A(D(F))
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "p", (function() {
				return c
			})), s.d(t, "q", (function() {
				return l
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "k", (function() {
				return x
			})), s.d(t, "l", (function() {
				return k
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "g", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const r = [],
				a = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.subreddits.subredditWiki.directory[s.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.subreddits.api.wiki.pending[s.toLowerCase()]
				},
				d = (e, t) => {
					const s = Object(i.a)(t);
					return e.subreddits.subredditWiki.pages[s]
				},
				c = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.subreddits.subredditWiki.revisions.listings[s]
				},
				l = (e, t) => {
					let {
						listingKey: s
					} = t;
					return !!e.subreddits.subredditWiki.revisions.api.pending[s]
				},
				m = (e, t) => {
					let {
						listingKey: s
					} = t;
					return !!e.subreddits.subredditWiki.revisions.api.error[s]
				},
				u = (e, t) => {
					return (e => e.subreddits.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				p = (e, t) => {
					let {
						key: s
					} = t;
					return e.subreddits.subredditWiki.diff[s]
				},
				b = (e, t) => {
					const s = Object(i.a)(t);
					return e.subreddits.subredditWiki.pageSettings[s]
				},
				h = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.subreddits.subredditWiki.wikiContributors.listing.api.pending[s.toLowerCase()]
				},
				g = Object(n.a)((e, t) => {
					let {
						subredditName: s
					} = t;
					const n = s.toLowerCase(),
						i = e.subreddits.subredditWiki.wikiContributors.listing,
						a = i.userOrder[n],
						o = i.models[n];
					return a ? a.map(e => o[e]) : r
				}),
				x = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.subreddits.subredditWiki.wikiContributors.listing.afterToken[s.toLowerCase()]
				},
				k = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.subreddits.subredditWiki.wikiContributors.search[s.toLowerCase()]
				},
				f = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.subreddits.subredditWiki.wikiBannedContributors.listing.api.pending[s.toLowerCase()]
				},
				O = Object(n.a)((e, t) => {
					let {
						subredditName: s
					} = t;
					const n = s.toLowerCase(),
						i = e.subreddits.subredditWiki.wikiBannedContributors.listing,
						a = i.userOrder[n],
						o = i.models[n];
					return a ? a.map(e => o[e]) : r
				}),
				v = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.subreddits.subredditWiki.wikiBannedContributors.listing.afterToken[s.toLowerCase()]
				},
				j = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.subreddits.subredditWiki.wikiBannedContributors.search[s.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=SubredditWiki.851049699cef4d895775.js.map