// https://www.redditstatic.com/desktop2x/SubredditWiki.f809466797ad34431bb9.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
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
		"./src/reddit/actions/pages/shared.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/helpers/routeKey/index.ts"),
				r = s("./src/reddit/helpers/trackers/screenview.ts"),
				a = s("./src/telemetry/index.ts"),
				o = s("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const s = t(),
					{
						currentPage: d
					} = s.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(n.a)(s),
					m = Object(i.b)(c, s, l);
				m && a.c.has(m) && Object(r.g)(c, s, o.TimerType.InApp, a.c.end(m))
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
				O = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/graphql/operations/WikiComparisonDiff.json"),
				v = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var w = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				j = s("./src/reddit/selectors/subredditWiki.ts"),
				C = s("./src/reddit/actions/wiki/wikiDiff/constants.ts");
			const y = Object(d.a)(C.c),
				E = Object(d.a)(C.b),
				N = Object(d.a)(C.a),
				P = e => async (t, s, n) => {
					const i = s(),
						r = Object(w.a)(e),
						a = Object(j.i)(i, {
							key: r
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: r
					};
					t(y(d));
					const c = await ((e, t) => Object(O.a)(e, Object.assign({}, f, {
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
							type: o.E.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.E.UNKNOWN_ERROR
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
				R = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				W = s("./src/reddit/helpers/brandSafety/index.ts"),
				M = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				L = s("./src/reddit/i18n/utils.ts"),
				B = s("./src/reddit/models/Toast/index.ts"),
				D = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				A = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				H = s("./src/reddit/selectors/subreddit.ts"),
				F = s("./src/reddit/selectors/user.ts");
			s.d(t, "subredditWikiDataPending", (function() {
				return U
			})), s.d(t, "subredditWikiDataLoaded", (function() {
				return V
			})), s.d(t, "subredditWikiDataFailed", (function() {
				return K
			})), s.d(t, "fetchSubredditWikiData", (function() {
				return q
			})), s.d(t, "handleWikiRedirects", (function() {
				return Z
			})), s.d(t, "subredditWikDataRequested", (function() {
				return Y
			})), s.d(t, "subredditWikiPageRequested", (function() {
				return X
			}));
			const U = Object(d.a)(h.c),
				V = Object(d.a)(h.b),
				K = Object(d.a)(h.a),
				z = (e, t, s, n) => {
					return s === I.j ? G(e, t) : !!Object(j.c)(e, {
						subredditName: t,
						wikiPageName: s,
						revisionId: n
					})
				},
				G = (e, t) => !!Object(j.b)(e, {
					subredditName: t
				}),
				q = e => async (t, s, n) => {
					const {
						canShowFailToast: r,
						wikiPageName: d
					} = e, c = d === I.j, l = Object(F.O)(s()), m = Object.assign({}, e, {
						includePageData: e.includePageData && !c
					}), u = d ? Object(M.a)(Object.assign({}, e, {
						wikiPageName: d
					})) : void 0;
					t(U({
						options: m,
						pageKey: u
					}));
					const p = await Object(R.a)(n.gqlContext(), m),
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
							type: o.E.NOT_FOUND_ERROR
						}
					})), r && t(Object(g.e)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: B.b.Error,
						text: Object(a.a)(l, "error.genericPage"),
						buttonText: Object(a.a)(l, "listings.toast.retryButton"),
						buttonAction: q(e)
					}))), !(!p.ok || !i()(b.data.subreddit)) || !(!p.ok || !h)
				}, J = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, n) => {
						const i = n(),
							r = {
								sort: o.O.HOT
							},
							a = Object(c.a)(e, r.sort),
							d = i.listings.postOrder.api.error[a],
							l = i.listings.postOrder.api.pending[a],
							m = !!i.listings.postOrder.ids[a];
						return !!(l || m && !d) || (await s(Object(b.i)(a, e, r, t)), !n().listings.postOrder.api.error[a])
					}
				}, Z = e => async (t, s) => {
					const {
						params: n,
						url: i
					} = e, {
						wikiPageName: a
					} = n, o = Object(A.a)(i, n);
					let d = !1;
					return I.l.includes(a || "") ? (await (async (e, t) => {
						const s = "".concat(l.a.oldRedditUrl).concat(Object(u.b)(e));
						window.location.href = s
					})(e.url), d = !0) : i !== o && (await t(Object(r.c)(o)), d = !0), d
				}, Y = function e(t, s) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (i, r, a) => {
						const {
							subredditName: d = I.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = t, m = s[S.w], u = s[S.x], p = m ? Object(v.a)(m) : void 0, b = u ? Object(v.a)(u) : void 0, h = c === I.j, O = l === I.m.Revisions;
						let f = !1,
							w = !1;
						if (n) {
							const {
								pageName: e
							} = t;
							f = e === o.Ob.WikiContributors, w = e === o.Ob.WikiBanned
						}
						const j = r(),
							C = (h || n) && !G(j, d),
							y = !!c && !z(j, d, c, p),
							E = [];
						E.push(i(J(d))), (C || y) && E.push(i(q({
							includeDirectory: C,
							includePageData: y,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), l === I.m.Settings && c && E.push(i(Object(_.c)(d, c))), c && p && b && E.push(i(P({
							comparisonRevisionId: b,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), O && E.push(i(Object(T.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), f && E.push(i(Object(k.e)(d))), w && E.push(i(Object(x.e)(d))), (await Promise.all(E)).every(Boolean) || i(Object(g.e)({
							kind: B.b.Error,
							text: Object(L.c)("Something went wrong"),
							buttonText: Object(L.c)("Retry"),
							buttonAction: e(t, s, n)
						}))
					}
				}, X = e => async (t, s) => {
					if (await t(Z(e))) return;
					const {
						params: n,
						queryParams: i
					} = e, r = n.subredditName || I.e;
					t(m.l({
						title: n.wikiPageName ? "".concat(n.wikiPageName, " - ").concat(r) : "wiki - ".concat(r)
					})), await t(Y(n, i));
					const a = Object(H.y)(s(), {
							subredditName: r
						}),
						o = s();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(D.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(W.a)([], [a])
					})))
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
				return O
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return N
			}));
			const g = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				k = Object(i.a)(h.b),
				O = e => async (t, s, i) => {
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
							type: n.E.UNKNOWN_ERROR
						};
						t(k({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, f = Object(i.a)(h.a), v = (e, t) => async (s, n, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						o = await m(i.gqlContext(), a);
					if (o.ok) {
						const t = o.body;
						if (t.data.subreddit.wiki) {
							const n = u(t.data.subreddit.wiki);
							s(f(Object.assign({}, n, {
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
				}, w = Object(i.a)(h.e), j = (e, t) => async (s, i, o) => {
					const c = await ((e, t, s) => Object(a.b)(Object(d.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/friend"),
						method: n.cb.POST,
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
							s(w({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (c.error) {
						let e;
						c.error.type === n.E.USER_DOESNT_EXIST && (e = Object(p.c)("That user doesn't exist")), s(Object(r.e)({
							kind: b.b.Error,
							text: e || Object(p.c)("Something went wrong")
						}))
					}
					return c.ok
				}, C = Object(i.a)(h.f), y = (e, t) => async (s, i, o) => {
					const c = await ((e, t, s) => Object(a.b)(Object(d.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/unfriend"),
						method: n.cb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikibanned"
						}
					}))(o.apiContext(), e, t);
					return c.ok ? (s(Object(r.e)({
						kind: b.b.SuccessMod,
						text: Object(p.c)("User has been successfully removed")
					})), s(C({
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
				return O
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return N
			}));
			const g = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				k = Object(i.a)(h.b),
				O = e => async (t, s, i) => {
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
							type: n.E.UNKNOWN_ERROR
						};
						t(k({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, f = Object(i.a)(h.a), v = (e, t) => async (s, n, i) => {
					const a = {
							subredditName: e,
							after: t
						},
						o = await m(i.gqlContext(), a);
					if (o.ok) {
						const t = o.body;
						if (t.data.subreddit.wiki) {
							const n = u(t.data.subreddit.wiki);
							s(f(Object.assign({}, n, {
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
				}, w = Object(i.a)(h.e), j = (e, t) => async (s, i, o) => {
					const c = await ((e, t, s) => Object(a.b)(Object(d.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/friend"),
						method: n.cb.POST,
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
							!!i().subreddits.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || s(w({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (c.error) {
						let e;
						const t = c.error.type;
						t === n.E.USER_DOESNT_EXIST ? e = Object(p.c)("That user doesn't exist") : t === n.E.BANNED_FROM_SUBREDDIT && (e = Object(p.c)("That user is banned from the subreddit")), s(Object(r.e)({
							kind: b.b.Error,
							text: e || Object(p.c)("Something went wrong")
						}))
					}
					return c.ok
				}, C = Object(i.a)(h.f), y = (e, t) => async (s, i, o) => {
					const c = await ((e, t, s) => Object(a.b)(Object(d.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/unfriend"),
						method: n.cb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikicontributor"
						}
					}))(o.apiContext(), e, t);
					return c.ok ? (s(Object(r.e)({
						kind: b.b.SuccessMod,
						text: Object(p.c)("User has been successfully removed")
					})), s(C({
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
				O = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			s.d(t, "c", (function() {
				return w
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "d", (function() {
				return _
			}));
			const v = Object(i.a)(f.c),
				w = (e, t) => async (s, n, i) => {
					const a = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(i.gqlContext(), a),
						d = Object(O.D)(n(), e);
					if (Object(O.R)(n(), d) || await s(Object(r.f)(e, d)), o.ok) {
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
				}, j = Object(i.a)(f.b), C = (e, t, s) => async (n, i, r) => {
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
							n(j({
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
						buttonAction: C(e, t, s)
					}));
					return d.ok
				}, y = Object(i.a)(f.d), E = e => {
					let {
						editPermissions: t,
						isVisible: s,
						wikiPageName: i,
						subredditName: r
					} = e;
					return async (e, a, d) => {
						const m = await (e => Object(o.b)(Object(c.a)(e.context, [l.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/wiki/settings/").concat(e.wikiPageName),
							method: n.cb.POST,
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
							method: n.cb.POST,
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
						})), await e(w(t, i));
						else if (m.error) {
							const t = m.error.type;
							let s = Object(x.c)("Something went wrong");
							t === n.E.NOT_FOUND_ERROR && (s = Object(x.c)("That user does not exist")), e(Object(a.e)({
								kind: k.b.Error,
								text: s
							}))
						}
						return m.ok
					}
				}, P = Object(i.a)(f.a), _ = e => {
					let {
						subredditName: t,
						username: s,
						wikiPageName: i
					} = e;
					return async (e, r, d) => {
						const m = await (e => Object(o.b)(Object(c.a)(e.context, [l.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/alloweditor/del"),
							method: n.cb.POST,
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
				method: n.cb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(u.b)(t.revisionId)
				}
			});
			var b = (e, t) => Object(c.b)(Object(l.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t.subredditName, "/api/wiki/revert"),
				method: n.cb.POST,
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
				O = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/subredditWiki.ts"),
				v = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "b", (function() {
				return _
			}));
			const w = Object(i.a)(v.d),
				j = Object(i.a)(v.c),
				C = Object(i.a)(v.b),
				y = e => async (t, s, i) => {
					const {
						canLoadMore: a = !1,
						canShowFailToast: c = !1,
						isRecent: l,
						subredditName: m,
						wikiPageName: u
					} = e, p = s(), b = Object(g.a)(e), x = Object(f.p)(p, {
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
					t(w(N));
					const P = await ((e, t) => Object(o.a)(e, Object.assign({}, d, {
						variables: t
					})))(i.gqlContext(), E);
					if (P.ok) {
						const e = P.body;
						if (e.data.subreddit) {
							const s = h(e.data);
							t(j(Object.assign({}, N, s)))
						}
					} else {
						const s = P.error || {
							type: n.E.UNKNOWN_ERROR
						};
						t(C(Object.assign({}, N, {
							error: s
						}))), c && t(Object(r.e)({
							kind: O.b.Error,
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
					})), m = Object(f.p)(s(), {
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
							kind: O.b.SuccessCommunityGreen,
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
						kind: O.b.Error,
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
						kind: O.b.Error,
						text: Object(k.c)("Something went wrong"),
						buttonText: Object(k.c)("Retry"),
						buttonAction: N(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, s) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isOp: "_1uBAPhkb8ZOA-9p_B6inAR",
				isAdmin: "_1-wk-QXxJ0S4snrasETuaA",
				isAdminEmeritus: "sKTYSQHxlRLbA-0pCpguU",
				isMod: "_1VChcviPF84MLFsL2xfBCP",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/components/AuthorLink/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const t = Object(r.a)(e.className, c.a.authorLinkStyles, {
					[c.a.isAdmin]: e.isAdmin,
					[c.a.isAdminEmeritus]: e.isAdminEmeritus,
					[c.a.isLivestreaming]: e.isLivestreaming,
					[c.a.isMod]: e.isMod,
					[c.a.isOp]: e.isOp,
					[c.a.isStrong]: e.isStrong,
					[c.a.isUnstyled]: e.isUnstyled
				});
				return e.isExternal || e.isLivestreaming ? i.a.createElement("a", {
					className: t,
					href: "".concat(a.a.redditUrl, "/user/").concat(e.author),
					rel: "nofollow",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? i.a.createElement("span", {
					className: Object(r.a)(c.a.deletedAuthorLink, e.className)
				}, e.children) : i.a.createElement(o.a, {
					className: t,
					style: e.style,
					to: "/user/".concat(e.author, "/")
				}, e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
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
			var O = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				f = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				v = s("./src/reddit/selectors/widgets.ts"),
				w = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				j = s.n(w);
			const C = c.a.wrapped(O.a, "Planet", j.a),
				y = c.a.img("SubredditIcon", j.a),
				E = Object(a.c)({
					spPollsEnabled: h.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(f.a)(e, {
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
					O = Object(o.a)(j.a.SubredditIcon, j.a.editableIcon, {
						[j.a.emptyEditableIcon]: !a
					}),
					f = i.a.createElement(l.a, {
						className: O,
						subreddit: e.subreddit,
						iconUrl: a || void 0,
						inTopBar: !0
					}),
					v = d ? i.a.createElement(y, {
						src: a || void 0
					}) : i.a.createElement(C, null),
					w = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0);
				return i.a.createElement("div", {
					className: j.a.container,
					style: {
						maxWidth: e.layout === p.g.Large ? "".concat(984, "px") : "100%"
					}
				}, i.a.createElement("div", {
					className: j.a.subredditMetaContainer
				}, h ? f : v, i.a.createElement("div", {
					className: Object(o.a)(j.a.textContainer, {
						[j.a.textContainerNoIcon]: !d
					})
				}, i.a.createElement("div", {
					className: j.a.text
				}, i.a.createElement("h1", {
					className: j.a.title
				}, r || c), !!r && i.a.createElement("h2", {
					className: j.a.description
				}, "r/", s)), i.a.createElement("div", {
					className: j.a.subscribeButtonContainer
				}, i.a.createElement(u.a, {
					className: j.a.subscribeButton,
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
				})))), w && i.a.createElement(m.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: n,
					subredditId: t,
					subredditNavContainerClassName: j.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				o = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(r.a)(e => i.a.createElement(a.c, null, i.a.createElement(a.g, null, i.a.createElement(c.a, null, i.a.createElement(a.n, null, e.headerText || Object(d.c)("Confirm")), i.a.createElement(o.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, i.a.createElement(a.b, null)))), i.a.createElement(a.j, null, i.a.createElement(a.m, {
				className: m.a.ModalText
			}, e.modalText)), i.a.createElement(a.e, null, i.a.createElement(a.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || Object(d.c)("Cancel")), i.a.createElement(a.r, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
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
				O = d.a.div("HeaderContent", h.a),
				f = d.a.div("HeaderContainer", h.a),
				v = d.a.span("HeaderText", h.a),
				w = d.a.wrapped(r.a, "HeaderUrl", h.a),
				j = d.a.span("Container", h.a),
				C = Object(o.a)(e => {
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
						C = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						y = "".concat(4 + C, "px");
					return i.a.createElement(j, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, i.a.createElement(w, {
						className: e.className,
						to: e.url
					}, i.a.createElement(f, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && i.a.createElement(O, {
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
							paddingTop: 32 === C ? "4px" : "14px"
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
			t.a = C
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
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				d = s.n(o),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class p extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: n
							} = t,
							i = m(t, ["className", "consumers"]);
						l.a.publish(c.a, i, e)
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
					return e.consumers.length ? i.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && i.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(r.b)(u, {})(p),
				h = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.G)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var k = Object(r.b)(() => Object(a.a)(x, h.j, (e, t) => Object.assign({}, e, {
				depth: t
			})))(e => i.a.createElement(b, {
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
			const O = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.G)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var f = Object(r.b)(() => Object(a.a)(O, e => e))(e => i.a.createElement(b, {
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
			var v = Object(r.b)(() => Object(a.c)({
					subreddit: g.P
				}))(e => i.a.createElement(b, {
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
				w = s("./src/reddit/selectors/posts.ts");
			var j = Object(r.b)(() => Object(a.c)({
				post: w.M,
				subredditOrProfile: w.Y,
				isModerator: (e, t) => {
					const s = Object(w.Y)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => i.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var C = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(w.Y)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(w.Y)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => i.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var y = Object(r.b)(() => Object(a.c)({
				post: w.M,
				subredditOrProfile: w.Y,
				isModerator: (e, t) => {
					const s = Object(w.Y)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => i.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var E = Object(r.b)(() => Object(a.c)({
				subreddit: g.P
			}))(e => i.a.createElement(b, {
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
			var N = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(g.J)(e, {
					identifier: t
				})
			}))(e => i.a.createElement(b, {
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
			var P = Object(r.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(g.P)(e, {
						subredditId: s
					}) : null
				}
			}))(e => i.a.createElement(b, {
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
			}));
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "i", (function() {
				return P
			}))
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
				u = s("./src/reddit/components/Translated/index.tsx"),
				p = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/reddit/i18n/components.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				w = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = s("./src/reddit/components/MiniCardPost/index.m.less"),
				C = s.n(j),
				y = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				E = s.n(y);
			const N = e => e.type === f.f.Spoiler,
				P = Object(h.t)();
			t.a = P(Object(b.a)(Object(d.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: d,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: j,
					showSubredditMeta: y = !0,
					showSubredditName: P,
					subredditOrProfile: _,
					trackPostView: T
				} = e;
				Object(i.useEffect)(() => {
					T && T(f)
				}, [T, f]);
				const S = h && h.preview && h.preview.url || void 0,
					I = h && h.isSponsored ? "promoted_trend" : "trending",
					R = h && Object(c.a)(h.permalink) || "",
					W = j && R || f && Object(a.a)("/search", {
						q: f.rawQuery,
						source: I
					}) || R,
					M = f ? f.subredditInfo && f.subredditInfo.icon : _ && _.icon.url,
					L = f ? f.subredditInfo && f.subredditInfo.displayText : _ && (_.displayText || _.name),
					B = h ? h.flair.filter(N) : [],
					D = h ? h.score : 0,
					A = h ? h.numComments : 0,
					H = h && h.isSponsored,
					F = Object(w.a)(e).body,
					U = "linear-gradient(\n      ".concat(Object(n.j)(F, .2), ",\n      ").concat(Object(n.j)(F, .3), ",\n      ").concat(Object(n.j)(F, .4), ",\n      ").concat(Object(n.j)(F, .6), ",\n      ").concat(Object(n.j)(F, .8), ",\n      ").concat(F, "\n    )"),
					V = r.a.createElement("div", {
						className: Object(o.a)(E.a.trendingPost, {
							[E.a["m-background"]]: !!S
						})
					}, r.a.createElement(g.a, {
						to: W
					}, r.a.createElement("div", {
						className: Object(o.a)(E.a.backgroundWrapper, C.a.backgroundWrapper, t),
						style: {
							background: Object(v.g)(Object(w.a)(e).body, S || Object(w.a)(e).banner.backgroundImage, "cover"),
							"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
						}
					}, H && r.a.createElement("div", {
						className: E.a.promoted
					}, r.a.createElement(O.c, null, "promoted")), r.a.createElement("div", {
						className: Object(o.a)(E.a.innerContainer, C.a.innerContainer, d),
						onClick: b,
						title: h ? h.title : ""
					}, r.a.createElement("h2", {
						className: h ? E.a.title : E.a.titleNoDescription
					}, e.title), h ? r.a.createElement("div", {
						className: Object(o.a)(E.a.description, s)
					}, B.length > 0 && r.a.createElement(m.a, {
						className: E.a.flair,
						titleFlair: B,
						nowrap: !0,
						post: h,
						showCategoryTag: !1
					}), h.title) : r.a.createElement("div", {
						className: E.a.spacer
					}), y && M && L && r.a.createElement(x.a, {
						className: E.a.relatedSubredditMetaData,
						iconClassName: E.a.subredditIcon,
						iconUrl: M || void 0,
						suffix: r.a.createElement(u.a, {
							msgId: "search.subredditMetaData.andMore",
							replacements: {
								displayText: L
							}
						})
					}), !y && h && r.a.createElement("div", {
						className: E.a.metaLine
					}, P && L && r.a.createElement("span", {
						className: E.a.meta
					}, Object(k.b)(L)), r.a.createElement("span", {
						className: E.a.meta
					}, r.a.createElement(O.c, null, "".concat(Object(l.b)(D), " "), r.a.createElement(O.a, {
						count: D,
						name: "score",
						plural: "points",
						singular: "point"
					}))), r.a.createElement("span", {
						className: E.a.meta
					}, r.a.createElement(O.c, null, "".concat(Object(l.b)(A), " "), r.a.createElement(O.a, {
						count: A,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))))));
				return H ? r.a.createElement(p.a, {
					post: h
				}, V) : V
			})))
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
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(o);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.a("Link", d.a);
			t.a = e => i.a.createElement(a.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, i.a.createElement("div", {
				className: d.a.LinkContainer
			}, i.a.createElement("div", {
				className: d.a.Column
			}, i.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "4lyYaD"
			})), i.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, c._("Reddit App", null, {
				hk: "1ehrjP"
			})), i.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, c._("Reddit coins", null, {
				hk: "32iMaN"
			})), i.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, c._("Reddit premium", null, {
				hk: "RuO3A"
			})), i.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, c._("Reddit gifts", null, {
				hk: "2XziRN"
			})), i.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, c._("Communities", null, {
				hk: "3CJu37"
			})), i.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, c._("Top Posts", null, {
				hk: "2NOEW2"
			})), i.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, c._("Topics", null, {
				hk: "349RFt"
			}))), i.a.createElement("div", {
				className: d.a.Column
			}, i.a.createElement(l, {
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "1sqJKs"
			})), i.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "26ABvc"
			})), i.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "2Qmgdz"
			})), i.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "Mt40U"
			})), i.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "46IQJw"
			})), i.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("Terms", null, {
				hk: "4qRzfE"
			})), i.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("Content policy", null, {
				hk: "1DyxZS"
			})), i.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("Privacy policy", null, {
				hk: "10K04G"
			})), i.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("Mod policy", null, {
				hk: "2gYc2T"
			})))), i.a.createElement("div", {
				className: d.a.Copyright
			}, c._("Reddit Inc © {year}. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
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
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/lodash/throttle.js"),
				r = s.n(i),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m),
				p = e => o.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, o.a.createElement(c.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, o.a.createElement(l.c, null, "Back to top"))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				k = s.n(x),
				O = s("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const w = d.e[1] + 24,
				j = h.f + 8 + 152 + 32 + 16,
				C = j + w + 8,
				y = O.a.div("Container", k.a),
				E = O.a.wrapped(e => {
					var {
						className: t
					} = e, s = v(e, ["className"]);
					return o.a.createElement(p, f({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", k.a),
				N = e => {
					let {
						children: t,
						className: s,
						isSticky: i
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(s, {
							[k.a.StickyStyles]: i
						})
					}, t)
				};
			class P extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > j
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							children: t,
							className: s,
							hideFooter: n
						}
					} = this, i = this.state.isAdSticky && !(!e && !t);
					return o.a.createElement(y, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(N, {
						isSticky: i
					}, e, t, !n && o.a.createElement(b.a, null)), !this.props.hideBackToTop && o.a.createElement(E, null))
				}
			}
			const _ = Object(g.t)();
			t.a = _(P)
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
				O = s("./src/reddit/constants/modals.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/helpers/trackers/chat.ts"),
				w = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				j = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				C = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				y = s("./src/reddit/models/SubredditChannel/index.ts"),
				E = s("./src/reddit/selectors/chat.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/subredditChannel.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/SubredditChannelList/index.m.less"),
				S = s.n(T);
			s.d(t, "a", (function() {
				return X
			}));
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = c.a.wrapped(g.f, "ModalFormItem", S.a), W = c.a.wrapped(f.f, "PrimaryButton", S.a), M = c.a.wrapped(g.m, "ModalText", S.a), L = c.a.a("ItemLink", S.a), B = c.a.p("Detail", S.a), D = c.a.p("DescText", S.a), A = c.a.div("Title", S.a), H = c.a.div("Header", S.a), F = c.a.wrapped(j.a, "ChatIcon", S.a), U = c.a.wrapped(C.a, "PlanetIcon", S.a), V = c.a.wrapped(w.a, "Pencil", S.a), K = c.a.wrapped(e => {
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
			}, "Group", S.a), z = c.a.wrapped(e => {
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
			}, "Key", S.a), G = c.a.wrapped(x.b, "SubredditIcon", S.a), q = c.a.button("EditButton", S.a), J = c.a.button("ShowAllLink", S.a), Z = c.a.span("ChannelName", S.a), Y = c.a.div("HeaderText", S.a);
			var X;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(X || (X = {}));
			const Q = Object(d.c)({
					isCollectionReady: P.e,
					isModerator: E.e,
					language: _.O,
					selectedSubreddit: N.P,
					shouldRequestCollection: P.f,
					subredditChannels: P.a
				}),
				$ = Object(o.b)(Q, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						toggleModal: () => e(Object(h.i)(O.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(h.i)(O.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(h.i)(O.a.EDIT_SUBREDDIT_CHAT)),
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
					} = y.a, {
						channelId: s,
						channelState: n
					} = e, {
						Widget: i,
						Modal: r
					} = X, {
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
					}, u.length ? a.a.createElement(R, null, u.map((e, t) => a.a.createElement(L, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, a.a.createElement(A, {
						key: "item-link-title-".concat(t)
					}, a.a.createElement(F, {
						key: "item-link-icon-".concat(t)
					}), o.icon.url ? a.a.createElement(G, {
						key: "subreddit-icon-".concat(t),
						iconUrl: o.icon.url
					}) : a.a.createElement(U, {
						key: "planet-".concat(t),
						isSmall: !0
					}), a.a.createElement(H, {
						key: "item-header-".concat(t)
					}, a.a.createElement(Y, {
						key: "item-header-text-".concat(t)
					}, a.a.createElement(B, {
						key: "item-detail-".concat(t)
					}, o.name, Object(m.b)(n, "listings.channelMembers", e.membersCount)), a.a.createElement(Z, {
						key: "channel-name-".concat(t)
					}, e.type === y.c.Public ? a.a.createElement(K, null) : a.a.createElement(z, null), e.name)), s && a.a.createElement(q, {
						key: "button-".concat(t),
						onClick: t => {
							d(e.channelId), r(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(v.l)())
						}
					}, a.a.createElement(V, null)))), e.description && a.a.createElement(D, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && a.a.createElement(J, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, I._("See more", null, {
						hk: "lhTm0"
					}))) : s ? a.a.createElement(R, null, a.a.createElement(M, null, I._("Create your first room and get your community chatting in real time.", null, {
						hk: "2zKL0L"
					})), a.a.createElement(W, {
						onClick: i || c
					}, I._("+ Add room", null, {
						hk: "2vBAvZ"
					}))) : a.a.createElement(R, null, a.a.createElement(M, null, I._("There are no joined chatrooms yet", null, {
						hk: "3n65KN"
					}))))
				}
			}
			t.b = $(Object(k.b)(ee))
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
				p = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = s("./src/reddit/components/SubredditNav/index.m.less"),
				x = s.n(g);

			function k() {
				return (k = Object.assign || function(e) {
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
			const f = (e, t, s) => Object(b.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: s
				}),
				v = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, r = O(e, ["children", "isActive", "isTopBannerVariant"]);
					return i.a.createElement("div", k({
						className: f(x.a.subNavTitle, s, n)
					}, r), i.a.createElement("span", null, t), i.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				w = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: r
					} = e, a = O(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const o = f(x.a.navLink, s, r);
					return n ? i.a.createElement(p.a, k({
						className: o,
						to: n
					}, a)) : i.a.createElement("a", k({
						className: o
					}, a))
				},
				j = e => {
					var {
						className: t,
						isActive: s
					} = e, n = O(e, ["className", "isActive"]);
					return i.a.createElement(p.a, k({
						className: f(x.a.navLink, s)
					}, n))
				},
				C = e => {
					var {
						className: t,
						isActive: s
					} = e, n = O(e, ["className", "isActive"]);
					return i.a.createElement("a", k({
						className: f(x.a.subNavLink, s)
					}, n))
				},
				y = e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return i.a.createElement("div", k({
						className: Object(b.a)(x.a.subNavContainer, t)
					}, s))
				},
				E = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = O(e, ["className", "isOpen"]);
					return i.a.createElement("div", k({
						className: Object(b.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: s
						})
					}, n))
				},
				{
					fbt: N
				} = s("./node_modules/fbt/lib/FbtPublic.js");
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
					return s ? i.a.createElement(j, {
						className: x.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(d.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, N._("Polls", null, {
						hk: "1vWsZx"
					})) : null
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
					return i.a.createElement(y, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, i.a.createElement(v, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), i.a.createElement(E, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var I = S;
			const R = e => {
				const t = e.url && Object(T.g)(T.e, e.url);
				return t ? t.url : e.url
			};
			var W = e => e.menuItem.url ? i.a.createElement(w, {
					href: R(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : i.a.createElement(I, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => i.a.createElement(C, {
					key: "".concat(e.text, "-").concat(R(e)),
					role: "listitem",
					href: R(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				M = s("./src/lib/constants/index.ts"),
				L = s("./src/reddit/i18n/components.tsx");
			const B = Object(d.t)(),
				D = [M.zb.SUBREDDIT, M.zb.COMMENTS, M.zb.COLLECTION_COMMENTS],
				A = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && D.indexOf(t.pageLayer.meta.name) > -1
				});
			var H = B(Object(r.b)(A, (e, t) => ({
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
					return i.a.createElement(w, {
						to: t,
						isActive: o,
						isTopBannerVariant: r,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, i.a.createElement(L.c, null, "Posts"))
				}))),
				F = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				U = s("./src/higherOrderComponents/makeAsync.tsx");
			var V = Object(U.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				K = s("./src/reddit/constants/postLayout.ts"),
				z = s("./src/reddit/constants/screenWidths.ts"),
				G = s("./src/reddit/models/Theme/index.ts"),
				q = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				J = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const Z = Object(F.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, r = J(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(q.a)(r);
				return i.a.createElement("div", {
					className: Object(b.a)(x.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(G.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var Y = e => i.a.createElement(Z, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, i.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === K.g.Large ? "".concat(e.maxWidth || z.a, "px") : "100%"
					}
				}, i.a.createElement("div", null, e.children), i.a.createElement(V, null))),
				X = s("./src/reddit/components/Translated/index.tsx"),
				Q = s("./src/reddit/constants/wiki.ts"),
				$ = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var ee = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, r = !!n && !!n.meta && n.meta.name === M.zb.SUBREDDIT_WIKI, a = "wiki/".concat(Q.i), o = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return i.a.createElement(w, {
					isActive: r,
					isTopBannerVariant: s,
					to: o,
					onClick: () => e.sendEvent(Object($.g)())
				}, i.a.createElement(X.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const te = Object(c.a)("spPolls", _),
				se = Object(d.t)(),
				ne = Object(a.c)({
					language: l.O,
					layout: d.L,
					widget: m.f
				}),
				ie = Object(r.b)(ne);
			t.a = se(ie(Object(o.b)(e => i.a.createElement(Y, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && i.a.createElement(i.a.Fragment, null, i.a.createElement(H, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), i.a.createElement(te, {
				subredditId: e.subredditId
			})), e.widget && i.a.createElement(i.a.Fragment, null, e.widget.showWiki && i.a.createElement(ee, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => i.a.createElement(W, {
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
				O = s("./src/lib/isFakeSubreddit/index.ts"),
				f = s("./src/reddit/components/IdCard/helpers.ts"),
				v = e => !Object(O.a)(e) || Object(f.c)(e) || Object(f.d)(e) || Object(f.e)(e),
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				j = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				C = s("./src/reddit/components/SidebarContainer/index.tsx"),
				y = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				N = s("./src/lib/classNames/index.ts"),
				P = s("./src/app/strings/index.ts"),
				_ = s("./src/higherOrderComponents/asTooltip.tsx"),
				T = s("./src/reddit/actions/tooltip.ts"),
				S = s("./src/reddit/i18n/utils.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/constants/modals.ts"),
				W = s("./src/reddit/controls/Dropdown/index.tsx"),
				M = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				L = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/tooltip.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				F = s.n(H);
			const U = l.a.wrapped(W.a, "_Dropdown", F.a),
				V = l.a.wrapped(L.a, "Pencil", F.a),
				K = l.a.a("DropdownRow", F.a),
				z = Object(_.a)(U),
				G = e => "SubredditChannels--Menu--".concat(e),
				q = Object(d.c)({
					isModerator: B.g,
					language: A.O,
					isDropdownOpen: (e, t) => Object(D.b)(G(t.subredditId))(e)
				}),
				J = l.a.wrapped(e => {
					const {
						className: t,
						isModerator: s,
						language: n,
						onOpenDropdown: i,
						isDropdownOpen: r,
						toggleModal: o
					} = e, d = G(e.subredditId);
					return a.a.createElement("button", {
						"aria-expanded": r,
						"aria-haspopup": !0,
						"aria-label": Object(S.c)("Chat menu"),
						className: Object(N.a)(F.a.top, t),
						id: d,
						onClick: () => i(d)
					}, a.a.createElement(M.a, null), a.a.createElement(z, {
						isOpen: r,
						tooltipId: d,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(K, {
						onClick: o
					}, s ? Object(P.a)(n, "subredditModeration.chat.subredditWidget.menu.manageRooms") : Object(P.a)(n, "subredditModeration.chat.subredditWidget.menu.viewRooms"), a.a.createElement(V, null))))
				}, "OverflowMenu", F.a);
			var Z = Object(o.b)(q, e => ({
					onOpenDropdown: t => e(Object(T.h)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(I.i)(R.a.MANAGE_SUBREDDIT_CHAT))
				}))(J),
				Y = s("./src/reddit/components/SubredditChannelList/index.tsx"),
				X = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
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
				componentDidMount() {
					this.trackViewEvent()
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
					} = this.props, s = a.a.createElement(Y.b, {
						maxChannels: 3,
						parentContext: Y.a.Widget,
						subredditId: e
					});
					return t ? s : this.isEnabled() ? a.a.createElement(y.a, null, a.a.createElement(Q.a, {
						className: this.props.className,
						title: Object(S.c)("Chat rooms"),
						headerButton: a.a.createElement(Z, {
							subredditId: e
						})
					}, a.a.createElement(ie, null, s))) : null
				}
			}
			var de = Object(o.b)(re)(Object(X.b)(oe)),
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
			const Oe = .99;
			class fe extends a.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= Oe && t(s)
					}
				}
				render() {
					return a.a.createElement(ke.a, {
						threshold: Oe,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var ve = fe,
				we = s("./src/lib/isUrl/index.ts"),
				je = s("./src/lib/prettyPrintNumber/index.ts"),
				Ce = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ye = s("./src/reddit/components/Thumbnail/index.tsx"),
				Ee = s("./src/reddit/models/Flair/index.ts"),
				Ne = s("./src/reddit/models/Subreddit/index.ts"),
				Pe = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				_e = s.n(Pe);
			const Te = e => e.type === Ee.f.Nsfw || e.type === Ee.f.Spoiler,
				Se = Object(d.c)({
					language: A.O,
					post: xe.M,
					subredditOrProfile: xe.Y
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
					}, o = Object(we.a)(Object(ye.b)(r)), d = t.flair.filter(Te);
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
					}, d.length > 0 && a.a.createElement(Ce.a, {
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
					}, "".concat(Object(je.b)(t.score), " "), a.a.createElement(he.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), a.a.createElement("span", {
						className: _e.a.meta
					}, "".concat(Object(je.b)(t.numComments), " "), a.a.createElement(he.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var Re = Object(o.b)(Se, e => ({
					openLightbox: t => e(Object(be.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Ie),
				We = s("./src/reddit/components/SidebarPostList/index.m.less"),
				Me = s.n(We);
			const Le = 10,
				Be = 2,
				De = Object(d.a)(xe.S, e => e.filter(e => !e.isSponsored)),
				Ae = Object(d.c)({
					posts: De
				});
			class He extends a.a.Component {
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
						}, a.a.createElement(Re, {
							className: Object(N.a)(Me.a.smallPost, r),
							containerOnClick: s,
							postId: e.id,
							redditStyle: i,
							showSubredditName: Object(O.a)(Object(pe.f)(t)),
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
						f = b ? h.slice(Be) : x.slice(Be);
					return a.a.createElement("div", {
						className: Object(N.a)(Me.a.container, t, {
							[Me.a.redditStyle]: o
						})
					}, !b && a.a.createElement(ve, {
						onPostVisible: i,
						postId: g.id
					}, a.a.createElement(me.a, {
						backgroundWrapperClassName: Me.a.largePostBackgroundWrapper,
						descriptionClassName: Me.a.largePostDescription,
						innerContainerClassName: Me.a.largePostInnerContainer,
						"data-redditstyle": o,
						onPostClick: this.openLargePost,
						postId: g.id,
						showSubredditMeta: !1,
						showSubredditName: Object(O.a)(Object(pe.f)(s)),
						trendingPost: g
					})), k.map(this.renderSmallPost), e, f.map(this.renderSmallPost), d && a.a.createElement(ue.n, {
						className: Me.a.SeeMore,
						onClick: this.showMorePosts
					}, n || a.a.createElement(he.c, null, "See More")))
				}
			}
			var Fe = Object(o.b)(Ae, e => ({
					openPost: t => e(Object(be.a)(t.permalink))
				}))(He),
				Ue = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Ve = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				Ke = s("./src/reddit/selectors/discoveryUnit.ts"),
				ze = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				Ge = s.n(ze);
			const qe = 10,
				Je = Object(d.a)((e, t) => t.subredditName, e => Object(ce.a)(e, c.O.TOP, {
					t: c.Qb.WEEK
				})),
				Ze = Object(d.c)({
					discoveryUnit: e => Object(Ke.c)(e, {
						unitName: Ve.j
					}),
					listingKey: Je,
					posts: (e, t) => {
						const s = Je(e, t);
						return Object(xe.S)(e, {
							listingKey: s
						})
					},
					subreddit: ee.y
				});
			class Ye extends a.a.Component {
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
						c = i.length > qe;
					return a.a.createElement(Q.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: Object(S.c)("Top posts this week")
					}, a.a.createElement(Fe, {
						listingKey: s,
						listingName: d,
						onShowMoreClick: n,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: Ge.a.smallPost,
						showMoreButton: c,
						topPostsVariant: o
					}, a.a.createElement("div", null, e)))
				}
			}
			var Xe = Object(o.b)(Ze, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(le.r)({
							sort: c.O.TOP,
							subredditName: s,
							t: c.Qb.WEEK
						}))
					}
				})(Object(X.b)(Ye)),
				Qe = s("./src/config.ts"),
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
				Ot = s.n(kt),
				ft = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				vt = s.n(ft);
			const {
				fbt: wt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), jt = "mod_onboarding_modal", Ct = "mod_onboarding_widget", yt = Object(d.a)(gt.a, (e, t) => Object(B.a)(ht.c.config)(e, {
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
						}), Object(mt.S)(Ct, !0, this.props.subredditId), this.props.sendEvent(Object(ut.d)("close"))
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
					} = this.props, r = e && !(t && s && n) && (!Object($e.a)() || !Object(mt.q)(Ct, i));
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
					return this.state.visible ? a.a.createElement(Q.a, {
						className: Object(N.a)(vt.a.container, this.props.className)
					}, a.a.createElement(ot.a, {
						bannerBackgroundImage: "".concat(Qe.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), a.a.createElement(bt.a, {
						className: vt.a.closeIcon,
						onClick: r
					}), Object(dt.a)({
						titleText: a.a.createElement(st.a, {
							msgId: "sidebar.moderatorOnboarding.title"
						}),
						snooBackground: Object(f.b)("url('".concat(Qe.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), a.a.createElement("div", {
						className: Object(N.a)(Ot.a.Description, vt.a.description)
					}, wt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [wt._param("=Customize Appearance Overview", a.a.createElement("a", {
						href: ct.e.exportImport,
						className: vt.a.modHelpLink,
						target: "_blank"
					}, wt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
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
					})), e === jt && a.a.createElement(at, {
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
						toggleCloseMenuModal: () => e(Object(I.i)(jt))
					}
				})(Object(X.b)(Et)),
				Pt = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				_t = s("./src/reddit/featureFlags/index.ts"),
				Tt = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				St = s("./src/reddit/models/Widgets/index.ts"),
				It = s("./src/reddit/selectors/communityFlairs.ts"),
				Rt = s("./src/reddit/selectors/listings.ts"),
				Wt = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				Mt = s.n(Wt);
			const Lt = 250,
				Bt = 270,
				Dt = l.a.wrapped(C.a, "SidebarContainer", Mt.a),
				At = Object(d.c)({
					apiError: Rt.c,
					apiPending: Rt.d,
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
					language: A.O,
					showGovernance: _t.d.spPoints,
					showLeaderboard: _t.d.spLeaderboard,
					widgets: ee.r
				}),
				Ht = Object(o.b)(At);
			class Ft extends r.Component {
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
						O = u || p,
						f = this.getCommunityWidgets(),
						C = this.makeFlairFilterWidget(),
						N = this.makeRelatedCommunitiesWidget(u, p),
						P = !u,
						_ = p,
						T = a.a.createElement(j.a, {
							placement: c.c.ABOVE_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: Tt.a.FIRST,
							sizes: c.h
						});
					return a.a.createElement(Dt, {
						className: e
					}, v(s) && a.a.createElement(k.a, {
						listingName: s
					}), a.a.createElement(h, {
						cardClassName: Mt.a.card,
						subredditId: r
					}), O && a.a.createElement(y.a, null, a.a.createElement(Xe, {
						subredditName: o,
						topPostsVariant: d
					}, a.a.createElement("div", {
						className: Mt.a.inFeedAd
					}, T))), O && N && a.a.createElement(y.a, null, a.a.createElement(Pt.a, {
						subredditName: o,
						truncateThreshold: Bt,
						widget: N
					})), _ && f.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return a.a.createElement(y.a, {
							key: "widgetSpacer".concat(t)
						}, a.a.createElement(Pt.a, {
							subredditName: o,
							truncateThreshold: Lt,
							widget: e
						}))
					}), a.a.createElement(m.a, {
						className: Mt.a.card,
						subredditId: r
					}), a.a.createElement(Nt, {
						language: t,
						subredditId: r,
						subredditName: o
					}), n && a.a.createElement(g.a, {
						className: Mt.a.card,
						subredditId: r
					}), C && a.a.createElement(y.a, null, a.a.createElement(Pt.a, {
						subredditName: o,
						widget: C
					})), i && a.a.createElement(x.a, {
						className: Mt.a.card,
						subredditId: r,
						uniqueId: r
					}), a.a.createElement(w.g, {
						subredditId: r
					}), !O && T, P && !_ && f.map((e, t) => {
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
						adComponent: a.a.createElement(j.a, {
							placement: c.c.BELOW_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: Tt.a.BOTTOM,
							sizes: c.n
						})
					}))
				}
			}
			t.a = Ht(Ft)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
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
				O = s("./src/reddit/helpers/trackers/postFlair.ts"),
				f = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				j = s.n(w);

			function C() {
				return (C = Object.assign || function(e) {
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
					filterName: e => Object(h.Q)(e)[b.f],
					url: e => Object(h.U)(e)
				}),
				P = Object(o.c)({
					subredditId: (e, t) => Object(v.D)(e, t.subredditName)
				}),
				_ = Object(a.b)(P),
				T = l.a.div("WidgetContent", j.a),
				S = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, i = y(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(d.a)(j.a.StyledFlair, t === f.d.Cloud && j.a.cloudDisplay, {
							[j.a.flairFilter]: s,
							[j.a["m-selected"]]: i.isSelected
						}),
						onMouseDown: n
					}, r.a.createElement(m.b, C({}, i, {
						className: j.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class I extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(O.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(O.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(O.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(O.b)(t))
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
						className: j.a.flairFilterButton,
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
						className: j.a.flairFilterContainer,
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
			const O = c.a.div("RuleShortName", k.a),
				f = c.a.div("RuleIndex", k.a),
				v = c.a.div("RuleTitle", k.a),
				w = c.a.div("RuleDescription", k.a),
				j = c.a.wrapped(l.a, "RawHTMLDisplay", k.a),
				C = {};
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
					return i.a.createElement(O, {
						className: Object(d.a)({
							[k.a.pointerCursor]: a
						}),
						onClick: n(e) || !r ? void 0 : s
					}, i.a.createElement(h.a, null, i.a.createElement(f, null, "".concat(e.humanIndex, ".")), i.a.createElement(v, null, "".concat(e.rule.shortName)), i.a.createElement("div", null, !n(e) && r && (t.isVisible ? i.a.createElement(b.a, {
						className: k.a.Chevron
					}) : i.a.createElement(p.a, {
						className: k.a.Chevron
					})))), t.isVisible && i.a.createElement(w, null, e.rule.descriptionRichText ? i.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: C
					}) : e.rule.descriptionHtml ? i.a.createElement(j, {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(p.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, p.defaults);
			var h = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				k = s("./src/reddit/selectors/structuredStyles.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const w = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				j = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = w(e);
					return Object(f.f)(t)
				},
				y = e => {
					const t = j(e);
					return Object(f.f)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				N = s.n(E);
			const P = Object(m.t)(),
				_ = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(k.m)(e, {
								subredditId: s
							}),
							i = Object(O.Q)(e);
						return n || i
					},
					nigtmode: O.Q,
					subredditId: m.m,
					topPostVariant: x.d
				}));
			class T extends i.a.Component {
				constructor() {
					super(...arguments), this.contentRef = i.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(b(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = j(this.props), e.color = e.fill = y(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: a,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, p = s ? N.a.widgetContentOnly : N.a.widgetContent, b = !n && this.props.styles, g = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return i.a.createElement("div", {
						className: Object(o.a)(t, N.a.widgetBackground, {
							[N.a.redditStyle]: n,
							[N.a.clickable]: !!a,
							[N.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: g
					}, d && i.a.createElement("div", {
						className: N.a.widgetHeader,
						style: x
					}, i.a.createElement("div", {
						className: Object(o.a)(N.a.widgetTitle, l)
					}, i.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), i.a.createElement("div", {
						className: Object(o.a)(p, {
							[N.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && i.a.createElement(u.n, {
						className: N.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, i.a.createElement(h.c, null, "See More")))
				}
			}
			t.a = P(_(Object(d.a)(Object(l.b)(T))))
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
				O = s("./src/reddit/components/Widgets/Button/index.m.less"),
				f = s.n(O);
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
				w = e => e.kind === g.f.Image ? f.a.imageButton : f.a.textButton,
				j = e => {
					const t = Object(g.n)(e),
						s = Object(p.g)(p.e, t);
					return s ? s.url : e.url
				},
				C = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(h.a)(e).button;
					return i.a.createElement(c.i, {
						className: w(t),
						style: v(t, s, n)
					}, t.kind === g.f.Text && i.a.createElement("span", {
						className: t.hoverState ? f.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && i.a.createElement("span", {
						className: f.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				y = e => i.a.createElement(l.a, {
					href: j(e.button),
					isSponsored: !1,
					source: null
				}, i.a.createElement(C, e)),
				E = u.a.wrapped(o.a, "RawHTMLDisplay", f.a);
			var N = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: k.Q
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
			const R = 100,
				W = {
					isExpanded: !1
				},
				M = u.a.wrapped(o.a, "RawHTMLDisplay", I.a),
				L = u.a.div("EventContainer", I.a),
				B = u.a.div("EventTitle", I.a),
				D = u.a.div("EventDate", I.a),
				A = u.a.div("EventLocation", I.a),
				H = u.a.div("EventDescription", I.a),
				F = u.a.wrapped(_.a, "ToggleDescription", I.a);
			class U extends i.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = W
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > R ? i.a.createElement(H, null, t.isExpanded ? e.text : e.text.slice(0, R), i.a.createElement(F, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(T.c)("read less") : Object(T.c)("...read more"))) : i.a.createElement(H, null, e.text)
				}
			}
			const V = Object(a.c)({
				language: k.O
			});
			var K = Object(r.b)(V)(e => i.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => i.a.createElement(L, {
					key: "".concat(s, "-").concat(t.title)
				}, i.a.createElement(B, null, t.titleHtml ? i.a.createElement(M, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && i.a.createElement(D, null, Object(P.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && i.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && i.a.createElement(A, null, t.locationHtml ? i.a.createElement(M, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && i.a.createElement(U, {
					language: e.language,
					text: t.description
				}))))),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var q = Object(z.b)(e => i.a.createElement(G.b, {
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
				Z = Object(r.b)(J),
				Y = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class X extends i.a.Component {
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Y(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
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
			var Q = Z(X),
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
				le = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				me = s("./src/reddit/models/Flair/index.ts"),
				ue = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				pe = s.n(ue);
			const be = u.a.div("ModeratorListItem", pe.a),
				he = u.a.div("Username", pe.a),
				ge = u.a.a("MessageModsLink", pe.a),
				xe = u.a.wrapped(de.b, "FlairComponent", pe.a),
				ke = e => e.authorFlairType === me.f.Richtext ? {
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
				Oe = e => i.a.createElement(he, null, "u/".concat(e)),
				fe = u.a.wrapped(ce.a, "InternalLink", pe.a),
				ve = u.a.div("LinkContainer", pe.a);
			var we = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return i.a.createElement(d.a, {
						styles: s.styles,
						title: Object(T.c)("Moderators"),
						headerButton: i.a.createElement(ge, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, i.a.createElement(le.a, null))
					}, s.mods.map(e => i.a.createElement(be, {
						key: e.name
					}, (e => i.a.createElement(oe.a, {
						to: "/user/".concat(e.name, "/")
					}, Oe(e.name)))(e), i.a.createElement(xe, {
						flair: ke(e),
						forceSmallEmojis: !0
					}))), i.a.createElement(ve, null, i.a.createElement(fe, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(T.c)("View All Moderators"))))
				},
				je = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ce = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				ye = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ee = s.n(ye);
			const Ne = u.a.div("WidgetContent", Ee.a),
				Pe = u.a.wrapped(o.a, "RawHTMLDisplay", Ee.a);
			var _e = e => i.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, i.a.createElement(Ne, null, i.a.createElement(Pe, {
					html: e.widget.textHtml || ""
				}))),
				Te = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Se = e => i.a.createElement(Te.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return we;
						case "textarea":
							return _e;
						case "button":
							return N;
						case "subreddit-rules":
							return Ce.b;
						case "community-list":
							return q;
						case "calendar":
							return K;
						case "image":
							return ae;
						case "custom":
							return Q;
						case "post-flair":
							return je.a;
						default:
							return Se
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

			function O(e, t) {
				const {
					revision: s,
					revisionToCompare: n
				} = t;
				if (!s && !n) return e;
				const i = {};
				return s && (i[x.w] = Object(k.b)(s)), n && (i[x.x] = Object(k.b)(n)), Object(g.a)(e, i)
			}
			var f = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				v = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				w = s("./src/reddit/i18n/utils.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
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
				R = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			class W extends i.a.Component {
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
					return i.a.createElement(R.a, {
						onChange: this.handleChange
					}, i.a.createElement("div", null))
				}
			}
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var M = s("./node_modules/lodash/noop.js"),
				L = s.n(M),
				B = s("./src/reddit/components/AuthorLink/index.tsx"),
				D = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				A = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				H = s("./src/reddit/controls/Checkbox/index.tsx"),
				F = s("./src/reddit/controls/InternalLink/index.tsx"),
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
			const G = Object(a.c)({
				revision: E.n
			});
			class q extends i.a.Component {
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
					}, s), p = O(u, {
						revision: r.id
					}), h = !n && e, g = d.split("/").slice(-1)[0];
					return i.a.createElement("tr", {
						className: Object(o.a)(S.a.row, c ? S.a.mHidden : null)
					}, !n && i.a.createElement("td", {
						className: S.a.cellCheckbox
					}, i.a.createElement(H.a, {
						className: S.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), i.a.createElement("td", {
						className: S.a.cellTime
					}, Object(A.b)(r)), n && i.a.createElement("td", {
						className: S.a.cellPage
					}, i.a.createElement(F.a, {
						className: S.a.wikiPageLink,
						title: "/".concat(d),
						to: u
					}, g)), i.a.createElement("td", {
						className: S.a.cellUser
					}, m && i.a.createElement(D.a, {
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
					}, Object(w.c)("more")))), i.a.createElement("td", null, i.a.createElement("div", {
						className: S.a.buttons
					}, i.a.createElement(b.o, {
						className: S.a.viewButton,
						onClick: this.onViewClick,
						to: p
					}, Object(w.c)("View")), h && i.a.createElement(i.a.Fragment, null, i.a.createElement(b.n, {
						className: S.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, c ? Object(w.c)("Show") : Object(w.c)("Hide")), i.a.createElement(b.n, {
						className: S.a.revertButton,
						onClick: this.onRevertClick
					}, Object(w.c)("Revert"))))))
				}
			}
			var J = Object(r.b)(G, e => ({
				toggleIsHidden: t => e(Object(c.b)(t))
			}))(q);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Y = Object(a.c)({
				hasError: E.o,
				hasWikiModPerms: (e, t) => {
					const s = Object(y.y)(e, t);
					return !!s && Object(C.f)(e, {
						subredditId: s.id
					})
				},
				isPending: E.q,
				isRevertConfirmationModalOpen: Object(j.b)("wiki-revert-confirmation"),
				listingInfo: E.p
			});
			class X extends i.a.Component {
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
						f = "#";
					u && (k = Object(v.a)({
						subredditName: c,
						wikiPageName: u
					}, s), 2 === h.length && (f = O(k, {
						revision: h[0],
						revisionToCompare: h[1]
					})));
					const j = !r && t;
					return i.a.createElement("div", {
						ref: this.containerRef,
						className: Object(o.a)(S.a.container, {
							[S.a.mModHub]: s,
							[S.a.mShowActionButtons]: j
						})
					}, i.a.createElement(p.a, {
						buttonText: r ? void 0 : Object(w.c)("Go to wiki page"),
						buttonLink: k,
						className: S.a.pageTitle,
						title: i.a.createElement("span", {
							className: S.a.pageTitleText
						}, r ? Object(w.c)("Recent revisions") : Object(w.c)("Page history for ".concat(Object(w.b)("pageName", "/".concat(u)))))
					}), i.a.createElement("div", {
						className: S.a.content
					}, !r && i.a.createElement("div", {
						className: S.a.compareBar
					}, i.a.createElement(b.o, {
						className: S.a.compareButton,
						disabled: h.length < 2,
						onClick: this.onCompareClick,
						to: f
					}, Object(w.c)("Compare")), Object(w.c)("".concat(Object(w.b)("selectedCnt", h.length), "/2 selected to compare"))), i.a.createElement("table", {
						className: S.a.table
					}, i.a.createElement("thead", null, i.a.createElement("tr", null, !r && i.a.createElement("th", {
						className: S.a.colHeaderCheckbox
					}), i.a.createElement("th", {
						className: S.a.colHeaderTime
					}, Object(w.c)("time")), r && i.a.createElement("th", {
						className: S.a.colHeaderPage
					}, Object(w.c)("Wiki page")), i.a.createElement("th", {
						className: S.a.colHeaderUser
					}, Object(w.c)("Username")), i.a.createElement("th", {
						className: S.a.colHeaderReason
					}, Object(w.c)("Revision Reason")), i.a.createElement("th", {
						className: S.a.colHeaderActions
					}, j && i.a.createElement(i.a.Fragment, null, Object(w.c)("Actions"), i.a.createElement(m.a, {
						text: Object(w.c)("View: View current version\nHide: Hide revision from page history\nRevert: Revert page to an older version")
					}))))), i.a.createElement("tbody", {
						className: S.a.tableBody
					}, g.map(this.renderRowItem))), n && i.a.createElement(I, null), x && i.a.createElement(W, {
						hasError: e,
						isLoading: n,
						onLoadMore: this.onLoadMore
					})), a && i.a.createElement(l.a, {
						actionText: Object(w.c)("Revert"),
						headerText: Object(w.c)("Revert wiki page"),
						modalText: Object(w.c)("Are you sure you wish to change this wiki page to a previously saved version?"),
						onConfirm: this.onRevertConfirmed,
						toggleModal: this.props.toggleRevetConfirmationModal,
						withOverlay: !0
					}))
				}
			}
			const Q = Object(r.b)(Y, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(d.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(c.a)(t)),
				onLoadMoreRevisions: () => e(Object(c.c)(Object.assign({}, t, {
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				})))
			}))(Object(u.b)(X));
			t.a = e => {
				const t = !!e.isRecentRevisionsMode,
					s = Object(f.a)(Object.assign({}, e, {
						isRecent: t
					}));
				return i.a.createElement(Q, Z({
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
				O = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				f = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				v = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				j = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				C = s("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				y = s.n(C);
			const E = e => {
				const {
					item: t,
					subredditName: s,
					isModHub: i
				} = e, r = t.isPagePresent && Object(j.a)({
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
					} = e, r = Object(w.a)(i.pageTree || []);
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
					}, d.content.markdown) : d && d.content && (l = n.createElement(O.a, {
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
					}, n.createElement(f.a, {
						showTimeAgo: !0,
						isLastRevision: !0,
						revision: d.revision
					})))
				},
				S = s("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				I = s.n(S);
			const R = Object(i.b)(() => Object(r.c)({
					pending: k.a,
					wikiDirectory: k.b,
					wikiPage: k.c
				})),
				W = Object(u.t)();
			class M extends n.Component {
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
					} = this.props, l = this.getWikiPageStatus(), u = o === m.i, p = this.props.isModHub ? "/r/".concat(this.props.subredditName, "/about/wiki") : "/r/".concat(this.props.subredditName, "/wiki"), k = "".concat(p, "/index"), O = u ? void 0 : Object(h.c)("Wiki home");
					if (t || !l) return n.createElement(c.a, {
						showTitle: !0
					});
					if (l === x.b.Unknown || l === x.b.PageNotCreated) {
						if (Object(b.b)(o)) return n.createElement(d.a, {
							buttonLink: k,
							buttonText: O,
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
								buttonText: O,
								description: Object(h.c)("This page uses a restricted URL and can not be used as a wiki page"),
								title: Object(h.c)('"'.concat(Object(h.b)("pageName", o), '" does not exist'))
							});
						case x.b.MayNotView:
							return n.createElement(d.a, {
								buttonLink: k,
								buttonText: O,
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
								buttonText: O,
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
			t.a = W(R(Object(o.b)(M)))
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
			class O extends n.Component {
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
						wikiSubRoute: d.m.Revisions
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
			t.a = k(O)
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
					method: b.cb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				O = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				f = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				v = s("./src/reddit/i18n/utils.ts"),
				w = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				C = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const y = Object(l.a)(C.a);
			var E = s("./src/reddit/components/BlockNavigation/index.tsx"),
				N = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				P = s("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				S = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				W = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				M = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				L = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/platform.ts"),
				D = s("./src/reddit/selectors/subredditWiki.ts"),
				A = s("./src/higherOrderComponents/asModal/index.tsx"),
				H = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				F = s("./src/reddit/controls/LoadingIcon/index.tsx"),
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
					}, i.a.createElement(H.g, {
						className: K.a.modalHeader
					}, i.a.createElement(H.n, null, Object(v.c)("Add a reason for your revision")), i.a.createElement(U.a, {
						onClick: this.props.onCancel
					}, i.a.createElement(H.b, null))), i.a.createElement("div", {
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
					}, Object(v.c)("".concat(Object(v.b)("count", s), " ").concat(Object(v.a)("chars", ["character", "characters"], s), " left")))), i.a.createElement(H.e, {
						className: K.a.modalFooter
					}, i.a.createElement(H.a, {
						onClick: this.props.onCancel
					}, Object(v.c)("Cancel")), i.a.createElement(I.f, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? i.a.createElement(F.a, {
						className: K.a.loadingIcon,
						sizePx: 10
					}) : Object(v.c)("Save"))))
				}
			}
			var G = Object(A.a)(z),
				q = s("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				J = s.n(q);
			const Z = "Discard-wiki-page-changes",
				Y = "Add-wiki-revision-reason",
				X = 2,
				Q = {
					[W.a.InvalidPageName]: Object(v.c)("Page name is invalid"),
					[W.a.MaxLengthExceed]: Object(v.c)("Page name must be shorter than ".concat(Object(v.b)("maxPageLen", p.d), " characters")),
					[W.a.PageAlreadyExists]: Object(v.c)("Page with this name already exists"),
					[W.a.RestrictedPageName]: Object(v.c)("This page uses a restricted URL and can not be used as a wiki page")
				},
				$ = (e, t, s) => {
					const n = t.status;
					if (e) {
						if (n === M.b.Valid) return Q[W.a.PageAlreadyExists];
						if (n === M.b.PageNotFound) return Object(v.c)("You do not have permission to create this page");
						if (s) return Q[s]
					} else if (n === M.b.Valid && !t.isRevisable) return Object(v.c)("You do not have permission to edit this page")
				},
				ee = Object(a.c)({
					allowNavigationCallback: B.a,
					isRevisionReasonModalOpen: Object(L.b)(Y),
					isSaveBeforeLeaveModalOpen: Object(L.b)(Z),
					wikiPage: D.c
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
								pageKey: Object(f.a)({
									subredditName: i,
									wikiPageName: s
								}),
								pageRevisionsListingKey: Object(O.a)({
									subredditName: i,
									wikiPageName: s,
									isRecent: !1
								}),
								recentRevisionsListingKey: Object(O.a)({
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
									kind: w.b.Error,
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
								} = n.urlParams, i = Object(j.a)(n.url, {
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
						}), this.props.sendEvent(Object(R.m)(this.props.isCreation));
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
						this.props.isRevisionReasonModalOpen || this.props.toggleModal(Y)
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
					} = this.state, l = n && n.content && n.content.markdown || "", m = !c.trim(), u = c !== l, p = e && n ? Object(W.b)(n.name) : void 0, b = !(!n || n.status !== M.b.PageNotCreated || p), h = !(!n || n.status !== M.b.Valid || !n.isRevisable), g = e ? b : h, x = g && u && !m && !d && !p;
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
						paragraphsCount: X
					})), t && i.a.createElement(G, {
						withOverlay: !0,
						onCancel: this.onCancelAddingRevisionReason,
						onSave: this.onSaveWithReason,
						isPending: d
					}), i.a.createElement(E.a, {
						blockOnBeforeUnload: !0,
						dialogId: Z,
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
			class O extends n.Component {
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
					const O = i || h && h.revision,
						f = !r,
						v = Object(m.a)({
							subredditName: b,
							wikiPageName: x,
							wikiSubRoute: f ? void 0 : l.m.Revisions
						}, t);
					return n.createElement("div", {
						className: Object(a.a)(e, g.a.container, t ? g.a.mModHub : null)
					}, n.createElement(d.a, {
						buttonText: f ? Object(u.c)("Go to wiki page") : Object(u.c)("Go to page history"),
						buttonLink: v,
						className: g.a.pageTitle,
						title: !f && O ? Object(u.c)("Revision from ".concat(Object(u.b)("timeAgo", Object(c.b)(O)))) : Object(u.c)("Page source")
					}), n.createElement("div", {
						className: g.a.content
					}, n.createElement("div", {
						className: g.a.headerRow
					}, O && n.createElement(c.a, {
						isLastRevision: f,
						revision: O,
						showReason: !0,
						showTimeAgo: !1
					})), n.createElement("div", {
						className: g.a.pageSource
					}, k)))
				}
			}
			t.a = k(O)
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
				O = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/subredditWiki.ts"),
				v = s("./src/config.ts"),
				w = s("./src/reddit/components/OverflowMenu/index.tsx"),
				j = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
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
					return r.a.createElement(w.b, {
						className: Object(d.a)(e, N.a.container),
						dropdownClassName: N.a.dropdown,
						dropdownId: t,
						targetPosition: P,
						tooltipPosition: _
					}, i && r.a.createElement(C.b, {
						className: N.a.row,
						displayText: Object(h.c)("View page history"),
						href: "".concat(o, "/revisions/").concat(a)
					}), i && r.a.createElement(C.b, {
						className: N.a.row,
						displayText: Object(h.c)("View page source"),
						href: "".concat(o, "/").concat(a, "?").concat(j.y),
						onClick: this.onViewPageSourceClick
					}), s && r.a.createElement(C.b, {
						className: N.a.row,
						displayText: Object(h.c)("View in community"),
						href: "/r/".concat(n, "/wiki/").concat(a)
					}), r.a.createElement(C.b, {
						className: N.a.row,
						displayText: Object(h.c)("Copy URL"),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var S = T,
				I = s("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				R = s.n(I);
			const W = Object(o.c)({
					hasWikiModPerms: (e, t) => {
						const s = Object(O.y)(e, t);
						return !!s && Object(k.f)(e, {
							subredditId: s.id
						})
					},
					wikiPage: f.c
				}),
				M = Object(a.b)(W, e => ({
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
						className: Object(d.a)(o, R.a.container)
					}, t && s && s.revision && r.a.createElement(u.a, {
						showTimeAgo: !0,
						className: R.a.revisionInfo,
						isLastRevision: !0,
						revision: s.revision
					}), r.a.createElement("div", {
						className: R.a.flexSpacer
					}), m && r.a.createElement(b.k, {
						className: R.a.button,
						to: "/r/".concat(a, "/about/wiki/settings/").concat(i)
					}, Object(h.c)("Page settings")), c && l && r.a.createElement(b.h, {
						className: R.a.button,
						to: Object(n.c)(x, {
							[p.a]: !0
						})
					}, Object(h.c)("Edit")), c && r.a.createElement(S, {
						className: R.a.overflowMenu,
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
			t.a = M(Object(m.b)(L))
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
				return j
			})), s.d(t, "a", (function() {
				return C
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
				O = s.n(k);
			const f = ["center", "top"],
				v = ["center", "bottom"],
				w = Object(o.a)(p.b),
				j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en";
					const s = new Date(Object(h.j)(e.revisedAt));
					return Object(l.d)(t, s.valueOf() / 1e3)
				};
			class C extends a.a.Component {
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
					} = this.state, l = s.authorInfo && s.authorInfo.name || c.A, p = new Date(Object(h.j)(s.revisedAt));
					return a.a.createElement("span", {
						className: Object(d.a)(e, O.a.container)
					}, t ? Object(g.c)("Last revised by ") : Object(g.c)("Revised by "), a.a.createElement(u.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: i.a
					}, a.a.createElement(m.a, {
						className: O.a.authorLink,
						author: l,
						isAuthorDeleted: Object(x.h)(l),
						isUnstyled: !0
					}, l)), r && a.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", a.a.createElement(b.a.Consumer, null, e => j(s, e)), a.a.createElement(w, {
						text: p.toString(),
						isOpen: o,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: f,
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
				language: r.O
			});

			function o(e) {
				return Object(n.b)(a)(e)
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				o = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(i.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.c,
				crosspostSubredditOrProfile: p.d,
				currentUser: b.i,
				flairStyleTemplate: c.P,
				hideNSFWPref: b.y,
				isActive: p.h,
				language: b.O,
				moderatorPermissions: m.i,
				modModeEnabled: c.N,
				post: p.M,
				showEditFlair: u.a,
				subredditOrProfile: p.Y,
				userIsOp: b.eb
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
						return e(Object(a.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: i
						}))
					},
					handleVote: t => {
						const n = t === d.a.upvoted ? Object(r.X)(s) : Object(r.u)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(r.V)(s)),
					onOpenReportsDropdown: t => e(Object(o.h)({
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
			}), {
				forwardRef: !0
			});
			t.a = h
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
				return k
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(u),
				b = s("./src/reddit/controls/Dropdown/row.m.less"),
				h = s.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			class k extends a.a.Component {
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
					}, s = Object(o.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(d.a, g({}, t, {
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
						className: Object(o.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, g({}, t, {
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
						className: Object(o.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = x(e, ["className"]);
				const n = Object(o.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !s.noHover,
					[h.a.mIsSelected]: s.isSelected,
					[h.a.topics]: s.isTopicsStyle
				});
				return a.a.createElement(k, g({
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
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
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
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
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
				return O
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "l", (function() {
				return w
			})), s.d(t, "n", (function() {
				return C
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
				O = d("remove_wiki_subreddit_contributor"),
				f = d("ban_wiki_contributor"),
				v = d("unban_wiki_contributor"),
				w = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				j = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				C = e => t => Object.assign({}, r(t), {
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
						settingValue: j[e]
					})
				})
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
				return i()(e, e => "".concat(e.path, "/").startsWith("".concat(r.i, "/")) ? "\0".concat(e.path) : e.path).filter(e => !r.l.includes(e.path))
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
						d = n.f.has(r) && s !== n.h && s !== n.k;
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
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => i.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(e.className)
			}), "Envelope", o.a);
			t.a = d
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
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => i.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
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
					} = e, n = Object(u.a)(s, m.O.HOT, {});
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
				O = s("./src/reddit/constants/wiki.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				w = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				j = s("./src/reddit/components/JumpToContent/index.tsx"),
				C = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				y = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				E = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				N = s.n(E),
				P = e => {
					const {
						wikiPageName: t,
						subredditName: s
					} = e;
					return n.createElement(n.Fragment, null, n.createElement(j.a, null), n.createElement(y.a, {
						isModHub: !1,
						className: N.a.topBar,
						wikiPageName: t,
						subredditName: s
					}), n.createElement(C.a, {
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
						case O.m.Create:
						case O.m.Edit:
							return i.a.createElement(g.a, {
								contentClassName: T.a.wikiPageEditorContent,
								isCreation: r === O.m.Create,
								subredditName: t,
								topBarClassName: T.a.communityWikiTopBar,
								wikiPageName: a
							});
						case O.m.Revisions:
							return i.a.createElement(w.a, {
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
			var I = Object(f.t)()(S),
				R = s("./src/reddit/constants/componentSizes.ts"),
				W = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				M = s("./src/reddit/layout/page/Listing/index.tsx"),
				L = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts");
			const D = Object(f.t)(),
				A = Object(r.b)(() => Object(a.c)({
					contentGateInfo: (e, t) => {
						let {
							match: s
						} = t;
						return Object(B.f)(e, s.params.subredditName)
					},
					language: B.O,
					layout: f.L,
					over18Pref: B.T,
					subreddit: (e, t) => {
						let {
							match: s
						} = t;
						return Object(L.y)(e, {
							subredditName: s.params.subredditName || O.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.subredditName || O.e
					},
					wikiPageName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.wikiPageName || O.i
					}
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class H extends i.a.PureComponent {
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
					} = this.props, a = !!n && n.isNSFW && !B.T, o = Object(W.a)(t, a, r);
					if (o) return i.a.createElement(c.a, o);
					const m = "/r/".concat(r, "/");
					return i.a.createElement(M.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: R.i,
						navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: n ? n.name : r,
							maxWidth: R.i,
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
			t.default = D(A(H))
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
				return O
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "g", (function() {
				return w
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
				O = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.subreddits.subredditWiki.wikiBannedContributors.listing.api.pending[s.toLowerCase()]
				},
				f = Object(n.a)((e, t) => {
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
				w = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.subreddits.subredditWiki.wikiBannedContributors.search[s.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=SubredditWiki.f809466797ad34431bb9.js.map