// https://www.redditstatic.com/desktop2x/SubredditWiki.9bad1fb685fe4cfd28c5.js
// Retrieved at 9/9/2020, 4:20:06 PM by Reddit Dataminer v1.0.0
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
			const r = new Map,
				i = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), n = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!i.get(t)) {
						i.set(t, s);
						const n = r.get(t);
						if (n) {
							n(e, s && !!i.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						r.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				o = e => {
					try {
						r.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return b
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "h", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/linkify-it/index.js"),
				r = s.n(n),
				i = s("./node_modules/tlds/index.js"),
				a = s.n(i),
				o = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./node_modules/lodash/values.js"),
				c = s.n(d);
			const l = e => c()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				b = r()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				p = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				g = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				f = r()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				x = b.normalize;
			b.normalize = e => {
				x.call(b, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const k = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				O = e => {
					return [...g.match(e) || [], ...p.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				y = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				w = e => {
					const t = b.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const i = Object(r.e)(e),
					a = encodeURIComponent("".concat(t).concat(i));
				return "".concat(n.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(a)
			}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/helpers/routeKey/index.ts"),
				i = s("./src/reddit/helpers/trackers/screenview.ts"),
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
					u = Object(r.b)(c, s, l);
				u && a.c.has(u) && Object(i.h)(c, s, o.TimerType.InApp, a.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "subredditWikiDataPending", (function() {
				return A
			})), s.d(t, "subredditWikiDataLoaded", (function() {
				return U
			})), s.d(t, "subredditWikiDataFailed", (function() {
				return H
			})), s.d(t, "fetchSubredditWikiData", (function() {
				return G
			})), s.d(t, "handleWikiRedirects", (function() {
				return q
			})), s.d(t, "subredditWikDataRequested", (function() {
				return Z
			})), s.d(t, "subredditWikiPageRequested", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/isEmpty.js"),
				i = s.n(r),
				a = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				l = s("./src/config.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/helpers/path/index.ts");
			var b = s("./src/reddit/actions/ads/index.ts"),
				p = s("./src/reddit/actions/pages/subreddit.ts"),
				h = s("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				x = s("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				k = s("./src/lib/makeGqlRequest/index.ts"),
				O = s("./src/graphql/operations/WikiComparisonDiff.json"),
				y = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var w = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				v = s("./src/reddit/selectors/subredditWiki.ts"),
				j = s("./src/reddit/actions/wiki/wikiDiff/constants.ts");
			const C = Object(d.a)(j.c),
				E = Object(d.a)(j.b),
				_ = Object(d.a)(j.a),
				N = e => async (t, s, n) => {
					const r = s(),
						i = Object(w.a)(e),
						a = Object(v.i)(r, {
							key: i
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: i
					};
					t(C(d));
					const c = await ((e, t) => Object(k.a)(e, Object.assign(Object.assign({}, O), {
						variables: Object.assign(Object.assign({}, t), {
							comparisonRevisionId: Object(y.b)(t.comparisonRevisionId),
							revisionId: Object(y.b)(t.revisionId)
						})
					})))(n.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							s = t && t.page && t.page.revisionComparisonDiffHtml;
						s ? u = s : l = {
							type: o.E.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.E.UNKNOWN_ERROR
					};
					return t(l ? _(Object.assign(Object.assign({}, d), {
						error: l
					})) : E(Object.assign(Object.assign({}, d), {
						htmlDiff: u
					}))), !l
				};
			var S = s("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				I = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				T = s("./src/reddit/constants/parameters.ts"),
				P = s("./src/reddit/constants/wiki.ts"),
				R = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				L = s("./src/reddit/helpers/brandSafety/index.ts"),
				M = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				D = s("./src/reddit/models/Toast/index.ts"),
				W = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				B = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				F = s("./src/reddit/selectors/subreddit.ts");
			const A = Object(d.a)(h.c),
				U = Object(d.a)(h.b),
				H = Object(d.a)(h.a),
				V = (e, t, s, n) => {
					return s === P.j ? K(e, t) : !!Object(v.c)(e, {
						subredditName: t,
						wikiPageName: s,
						revisionId: n
					})
				},
				K = (e, t) => !!Object(v.b)(e, {
					subredditName: t
				}),
				G = e => async (t, s, r) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === P.j, l = Object.assign(Object.assign({}, e), {
						includePageData: e.includePageData && !c
					}), u = d ? Object(M.a)(Object.assign(Object.assign({}, e), {
						wikiPageName: d
					})) : void 0;
					t(A({
						options: l,
						pageKey: u
					}));
					const m = await Object(R.a)(r.gqlContext(), l),
						b = m.body,
						p = m.ok ? b.data && b.data.subreddit && b.data.subreddit.wiki : null;
					return m.ok && p ? t(U({
						options: l,
						pageKey: u,
						subredditWiki: p
					})) : (t(H({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.E.NOT_FOUND_ERROR
						}
					})), a && t(Object(g.e)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: D.b.Error,
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: G(e)
					}))), !(!m.ok || !i()(b.data.subreddit)) || !(!m.ok || !p)
				}, z = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, n) => {
						const r = n(),
							i = {
								sort: o.O.HOT
							},
							a = Object(c.a)(e, i.sort),
							d = r.listings.postOrder.api.error[a],
							l = r.listings.postOrder.api.pending[a],
							u = !!r.listings.postOrder.ids[a];
						return !!(l || u && !d) || (await s(Object(p.i)(a, e, i, t)), !n().listings.postOrder.api.error[a])
					}
				}, q = e => async (t, s) => {
					const {
						params: n,
						url: r
					} = e, {
						wikiPageName: i
					} = n, o = Object(B.a)(r, n);
					let d = !1;
					return P.l.includes(i || "") ? (await (async (e, t) => {
						const s = "".concat(l.a.oldRedditUrl).concat(Object(m.b)(e));
						window.location.href = s
					})(e.url), d = !0) : r !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Z = function e(t, s) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (i, a, d) => {
						const {
							subredditName: c = P.e,
							wikiPageName: l,
							wikiSubRoute: u
						} = t, m = s[T.x], b = s[T.y], p = m ? Object(y.a)(m) : void 0, h = b ? Object(y.a)(b) : void 0, k = l === P.j, O = u === P.m.Revisions;
						let w = !1,
							v = !1;
						if (r) {
							const {
								pageName: e
							} = t;
							w = e === o.Qb.WikiContributors, v = e === o.Qb.WikiBanned
						}
						const j = a(),
							C = (k || r) && !K(j, c),
							E = !!l && !V(j, c, l, p),
							_ = [];
						_.push(i(z(c))), (C || E) && _.push(i(G({
							includeDirectory: C,
							includePageData: E,
							revisionId: p,
							subredditName: c,
							wikiPageName: l
						}))), u === P.m.Settings && l && _.push(i(Object(S.c)(c, l))), l && p && h && _.push(i(N({
							comparisonRevisionId: h,
							revisionId: p,
							subredditName: c,
							wikiPageName: l
						}))), O && _.push(i(Object(I.c)({
							isRecent: !l,
							wikiPageName: l,
							subredditName: c
						}))), w && _.push(i(Object(x.e)(c))), v && _.push(i(Object(f.e)(c))), (await Promise.all(_)).every(Boolean) || i(Object(g.e)({
							kind: D.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: e(t, s, r)
						}))
					}
				}, J = e => async (t, s) => {
					if (await t(q(e))) return;
					const {
						params: n,
						queryParams: r
					} = e, i = n.subredditName || P.e;
					t(u.l({
						title: n.wikiPageName ? "".concat(n.wikiPageName, " - ").concat(i) : "wiki - ".concat(i)
					})), await t(Z(n, r));
					const a = Object(F.B)(s(), {
							subredditName: i
						}),
						o = s();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(b.b)(W.a.SUBREDDIT))
					}), t(Object(b.d)({
						isViewSafe: Object(L.a)([], [a])
					})))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			}));
			const n = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				r = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				i = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return k
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return _
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/graphql/operations/SubredditWikiBannedContributors.json"),
				u = s("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, Object.assign(Object.assign({}, l), {
				variables: t
			}));
			var b = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: s,
						pageInfo: n
					} = t, r = [], i = {};
					return s.forEach(e => {
						const {
							date: t,
							redditor: s,
							editWikiBanInfo: n
						} = e.node;
						s.id && s.name && s.icon && (i[s.id] = {
							id: s.id,
							username: s.name,
							iconUrl: s.icon.url,
							date: t,
							daysRemaining: n.daysRemaining,
							note: n.note
						}, r.push(s.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						bannedContributors: i,
						userOrder: r
					}
				},
				p = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(i.a)(h.d),
				f = Object(i.a)(h.c),
				x = Object(i.a)(h.b),
				k = e => async (t, s, n) => {
					t(g({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(n.gqlContext(), i);
					if (a.ok) {
						const s = a.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = b(n);
							t(f(Object.assign(Object.assign({}, s), {
								subredditName: e.toLowerCase()
							})))
						}
					} else {
						const s = a.error || {
							type: r.E.UNKNOWN_ERROR
						};
						t(x({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, O = Object(i.a)(h.a), y = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki);
							s(O(Object.assign(Object.assign({}, n), {
								subredditName: e.toLowerCase()
							})))
						}
					} else s(Object(a.e)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, w = Object(i.a)(h.e), v = (e, t) => async (s, i, d) => {
					const l = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/friend"),
						method: r.db.POST,
						data: {
							api_type: "json",
							name: s.username,
							type: "wikibanned",
							duration: s.duration,
							ban_reason: s.banReason,
							note: s.note
						}
					}))(d.apiContext(), e, t);
					if (l.ok) {
						s(Object(a.e)({
							kind: p.b.SuccessMod,
							text: n.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const r = {
								subredditName: e,
								username: t.username
							},
							i = (await m(d.gqlContext(), r)).body;
						if (i.data.subreddit.wiki) {
							const t = b(i.data.subreddit.wiki);
							s(w({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						l.error.type === r.E.USER_DOESNT_EXIST && (e = n.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), s(Object(a.e)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return l.ok
				}, j = Object(i.a)(h.f), C = (e, t) => async (s, i, d) => {
					const l = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/unfriend"),
						method: r.db.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (s(Object(a.e)({
						kind: p.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), s(j({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(a.e)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					})), l.ok
				}, E = Object(i.a)(h.g), _ = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki),
								r = Object.keys(n.bannedContributors)[0];
							s(E({
								subredditName: e.toLowerCase(),
								bannedContributor: n.bannedContributors[r]
							}))
						}
					} else s(Object(a.e)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			}));
			const n = "WIKI_CONTRIBUTORS_PENDING",
				r = "WIKI_CONTRIBUTORS_LOADED",
				i = "WIKI_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return k
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return _
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/graphql/operations/SubredditWikiContributors.json"),
				u = s("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, Object.assign(Object.assign({}, l), {
				variables: t
			}));
			var b = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: s,
						pageInfo: n
					} = t, r = [], i = {};
					return s.forEach(e => {
						const {
							date: t,
							redditor: s
						} = e.node;
						s.id && s.name && s.icon && (i[s.id] = {
							id: s.id,
							username: s.name,
							iconUrl: s.icon.url,
							date: t
						}, r.push(s.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						contributors: i,
						userOrder: r
					}
				},
				p = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(i.a)(h.d),
				f = Object(i.a)(h.c),
				x = Object(i.a)(h.b),
				k = e => async (t, s, n) => {
					t(g({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(n.gqlContext(), i);
					if (a.ok) {
						const s = a.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = b(n);
							t(f(Object.assign(Object.assign({}, s), {
								subredditName: e.toLowerCase()
							})))
						}
					} else {
						const s = a.error || {
							type: r.E.UNKNOWN_ERROR
						};
						t(x({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, O = Object(i.a)(h.a), y = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki);
							s(O(Object.assign(Object.assign({}, n), {
								subredditName: e.toLowerCase()
							})))
						}
					} else s(Object(a.e)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, w = Object(i.a)(h.e), v = (e, t) => async (s, i, d) => {
					const l = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/friend"),
						method: r.db.POST,
						data: {
							api_type: "json",
							name: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (l.ok) {
						s(Object(a.e)({
							kind: p.b.SuccessMod,
							text: n.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const r = {
								subredditName: e,
								username: t
							},
							o = (await m(d.gqlContext(), r)).body;
						if (o.data.subreddit.wiki) {
							const t = b(o.data.subreddit.wiki),
								n = Object.keys(t.contributors)[0];
							!!i().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || s(w({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						const t = l.error.type;
						t === r.E.USER_DOESNT_EXIST ? e = n.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === r.E.BANNED_FROM_SUBREDDIT && (e = n.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), s(Object(a.e)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return l.ok
				}, j = Object(i.a)(h.f), C = (e, t) => async (s, i, d) => {
					const l = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/unfriend"),
						method: r.db.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (s(Object(a.e)({
						kind: p.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), s(j({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(a.e)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					})), l.ok
				}, E = Object(i.a)(h.g), _ = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki),
								r = Object.keys(n.contributors)[0];
							s(E({
								subredditName: e.toLowerCase(),
								contributor: n.contributors[r]
							}))
						}
					} else s(Object(a.e)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiDiff/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			const n = "WIKI_DIFF_PENDING",
				r = "WIKI_DIFF_LOADED",
				i = "WIKI_DIFF_FAILED"
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				r = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				i = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				a = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return w
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "d", (function() {
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/subredditSettings.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts"),
				m = s("./src/graphql/operations/SubredditWikiPageSettings.json"),
				b = s("./src/reddit/models/SubredditWikiPage/index.ts");
			const p = (e, t) => Object(c.a)(e, Object.assign(Object.assign({}, m), {
					variables: t
				})),
				h = {
					[b.a.Inherit]: "0",
					[b.a.Contributors]: "1",
					[b.a.Mods]: "2"
				};
			var g = e => {
					const {
						editPermissions: t,
						editorsInfo: s,
						isVisible: n
					} = e, {
						edges: r,
						pageInfo: i
					} = s, a = [];
					return r.forEach(e => {
						e.node.name && e.node.icon && a.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: a,
						isVisible: n,
						afterToken: i.hasNextPage ? i.endCursor : null
					}
				},
				f = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(i.a)(O.c),
				w = (e, t) => async (s, n, r) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(r.gqlContext(), i),
						d = Object(k.G)(n(), e);
					if (Object(k.U)(n(), d) || await s(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							s(y({
								pageKey: Object(f.a)(i),
								settings: e
							}))
						}
					}
					return o.ok
				}, v = Object(i.a)(O.b), j = (e, t, s) => async (r, i, a) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: s
						},
						c = await p(a.gqlContext(), d);
					if (c.ok) {
						const s = c.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n && n.page) {
							const s = g(n.page.settings),
								{
									editorsInfo: i,
									afterToken: a
								} = s;
							r(v({
								editorsInfo: i,
								afterToken: a,
								pageKey: Object(f.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else r(Object(o.e)({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e, t, s)
					}));
					return c.ok
				}, C = Object(i.a)(O.d), E = e => {
					let {
						editPermissions: t,
						isVisible: s,
						wikiPageName: n,
						subredditName: i
					} = e;
					return async (e, a, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/wiki/settings/").concat(e.wikiPageName),
							method: r.db.POST,
							data: {
								permlevel: h[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: o.apiContext(),
							editPermissions: t,
							isVisible: s,
							wikiPageName: n,
							subredditName: i
						});
						return c.ok && e(C({
							editPermissions: t,
							isVisible: s,
							pageKey: Object(f.a)({
								wikiPageName: n,
								subredditName: i
							})
						})), c.ok
					}
				}, _ = e => {
					let {
						subredditName: t,
						username: s,
						wikiPageName: i
					} = e;
					return async (e, a, c) => {
						const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/alloweditor/add"),
							method: r.db.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: c.apiContext(),
							wikiPageName: i,
							subredditName: t,
							username: s
						});
						if (m.ok) e(Object(o.e)({
							kind: x.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(w(t, i));
						else if (m.error) {
							const t = m.error.type;
							let s = n.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === r.E.NOT_FOUND_ERROR && (s = n.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(o.e)({
								kind: x.b.Error,
								text: s
							}))
						}
						return m.ok
					}
				}, N = Object(i.a)(O.a), S = e => {
					let {
						subredditName: t,
						username: s,
						wikiPageName: n
					} = e;
					return async (e, i, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/alloweditor/del"),
							method: r.db.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: a.apiContext(),
							wikiPageName: n,
							subredditName: t,
							username: s
						});
						return c.ok && (e(Object(o.e)({
							kind: x.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(N({
							username: s,
							pageKey: Object(f.a)({
								wikiPageName: n,
								subredditName: t
							})
						}))), c.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			}));
			const n = "WIKI_REVISIONS_PENDING",
				r = "WIKI_REVISIONS_LOADED",
				i = "WIKI_REVISIONS_FAILED",
				a = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "b", (function() {
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/graphql/operations/WikiRevisions.json");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts"),
				b = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var p = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t.subredditName, "/api/wiki/hide"),
				method: r.db.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t.subredditName, "/api/wiki/revert"),
				method: r.db.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var g = e => {
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
				f = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				x = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/subredditWiki.ts"),
				y = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const w = Object(i.a)(y.d),
				v = Object(i.a)(y.c),
				j = Object(i.a)(y.b),
				C = e => async (t, s, i) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: b
					} = e, p = s(), h = Object(f.a)(e), x = Object(O.p)(p, {
						listingKey: h
					});
					if (!o && !!x) return !0;
					const y = x && x.pageInfo.endCursor || void 0;
					if (!(!x || x.pageInfo.hasNextPage)) return !0;
					const E = {
							after: y,
							isRecent: u,
							subredditName: m,
							wikiPageName: b
						},
						_ = {
							key: h,
							options: E
						};
					t(w(_));
					const N = await ((e, t) => Object(d.a)(e, Object.assign(Object.assign({}, c), {
						variables: t
					})))(i.gqlContext(), E);
					if (N.ok) {
						const e = N.body;
						if (e.data.subreddit) {
							const s = g(e.data);
							t(v(Object.assign(Object.assign({}, _), s)))
						}
					} else {
						const s = N.error || {
							type: r.E.UNKNOWN_ERROR
						};
						t(j(Object.assign(Object.assign({}, _), {
							error: s
						}))), l && t(Object(a.e)({
							kind: k.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: C(e)
						}))
					}
					return N.ok
				}, E = Object(i.a)(y.a), _ = e => async (t, s, r) => {
					const {
						subredditName: i,
						wikiPageName: d
					} = e, c = Object(x.a)(Object.assign(Object.assign({}, e), {
						revisionId: void 0
					})), l = Object(f.a)(Object.assign(Object.assign({}, e), {
						isRecent: !1
					})), u = Object(f.a)(Object.assign(Object.assign({}, e), {
						isRecent: !0
					})), m = Object(O.p)(s(), {
						listingKey: l
					}), b = m && m.ids[0];
					if ((await h(r.apiContext(), e)).ok) {
						const e = (await Object(o.a)(r.gqlContext(), {
								includePageData: !0,
								subredditName: i,
								wikiPageName: d
							})).body,
							s = e.data.subreddit && e.data.subreddit.wiki,
							m = s && s.page;
						if (!m || !m.revision) return;
						if (m.revision.id === b) return void t(Object(a.e)({
							kind: k.b.SuccessCommunityGreen,
							text: n.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(E({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: i,
							wikiPageName: d
						}))
					} else t(Object(a.e)({
						kind: k.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e)
					}))
				}, N = Object(i.a)(y.e), S = e => async (t, s, r) => {
					const i = await p(r.apiContext(), e);
					if (i.ok) {
						const s = i.body.status;
						t(N({
							revisionId: e.revisionId,
							isHidden: s
						}))
					} else t(Object(a.e)({
						kind: k.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, s) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isAdmin: "_1-wk-QXxJ0S4snrasETuaA",
				isAdminEmeritus: "sKTYSQHxlRLbA-0pCpguU",
				isMod: "_1VChcviPF84MLFsL2xfBCP",
				isOp: "_1uBAPhkb8ZOA-9p_B6inAR",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/components/AuthorLink/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const t = Object(i.a)(e.className, c.a.authorLinkStyles, {
					[c.a.isAdmin]: e.isAdmin,
					[c.a.isAdminEmeritus]: e.isAdminEmeritus,
					[c.a.isLivestreaming]: e.isLivestreaming,
					[c.a.isMod]: e.isMod,
					[c.a.isOp]: e.isOp,
					[c.a.isStrong]: e.isStrong,
					[c.a.isUnstyled]: e.isUnstyled
				});
				return e.isExternal || e.isLivestreaming ? r.a.createElement("a", {
					className: t,
					href: "".concat(a.a.redditUrl, "/user/").concat(e.author),
					rel: "nofollow",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? r.a.createElement("span", {
					className: Object(i.a)(c.a.deletedAuthorLink, e.className)
				}, e.children) : r.a.createElement(o.a, {
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
		"./src/reddit/components/CommunityIdTopBar/LevelBadge/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3wU37K5r41vOkCGVpEDcRK",
				icon: "_3nyGWtYJVWP4_98uoGJ_71",
				text: "_3sYDh6pENyPn_M3y6_TWkw"
			}
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
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				levelBadge: "_135_8DPabrU8OFXuqt2i7x"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/hooks/useTracking.ts"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/helpers/trackers/powerups.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				h = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				g = s("./src/reddit/components/SubredditNav/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/index.tsx"),
				x = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/featureFlags/index.ts"),
				y = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				w = s("./src/reddit/constants/tracking.ts"),
				v = s("./src/reddit/selectors/telemetry.ts");
			var j = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				C = s("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				E = s("./src/reddit/selectors/gold/powerups.ts"),
				_ = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				N = s("./src/reddit/selectors/widgets.ts"),
				S = s("./src/reddit/icons/svgs/Powerup/index.tsx"),
				I = s("./src/reddit/components/CommunityIdTopBar/LevelBadge/index.m.less"),
				T = s.n(I);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var R = e => r.a.createElement("button", {
					className: Object(d.a)(e.className, T.a.container),
					onClick: e.onClick
				}, r.a.createElement(S.a, {
					className: T.a.icon
				}), r.a.createElement("div", {
					className: T.a.text
				}, P._("Level {level}", [P._param("level", e.level)], {
					hk: "4BNMWs"
				}))),
				L = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				M = s.n(L);
			const D = l.a.wrapped(j.a, "Planet", M.a),
				W = l.a.img("SubredditIcon", M.a),
				B = Object(o.c)({
					arePowerupsEnabled: C.a,
					powerups: E.h,
					spPollsEnabled: O.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(_.a)(e, {
							subredditId: s
						})
					},
					widget: N.f
				});
			t.a = Object(i.b)(B)(Object(c.a)(e => {
				const t = Object(i.c)(),
					s = Object(a.a)(),
					n = e.subreddit ? e.subreddit.id : e.subredditId,
					o = e.subreddit ? e.subreddit.name : e.subredditName,
					c = e.subreddit ? e.subreddit.url : e.subredditUrl,
					l = e.subreddit ? e.subreddit.title : "",
					O = e.subreddit && Object(y.a)(e),
					j = !(!e.theme || !O),
					C = o.charAt(0).toUpperCase() + o.slice(1),
					E = !!e.subreddit && e.subredditInlineEditingEnabled,
					_ = Object(d.a)(M.a.SubredditIcon, M.a.editableIcon, {
						[M.a.emptyEditableIcon]: !O
					}),
					N = e.arePowerupsEnabled && e.powerups && e.powerups.tiersInfo.length > 1,
					S = r.a.createElement(h.a, {
						className: _,
						subreddit: e.subreddit,
						iconUrl: O || void 0,
						inTopBar: !0
					}),
					I = j ? r.a.createElement(W, {
						src: O || void 0
					}) : r.a.createElement(D, null),
					T = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					P = e.layout ? e.layout === x.g.Large ? "".concat(984, "px") : "100%" : "".concat(1086, "px");
				return r.a.createElement("div", {
					className: M.a.container,
					style: {
						maxWidth: P
					}
				}, r.a.createElement("div", {
					className: M.a.subredditMetaContainer
				}, E ? S : I, r.a.createElement("div", {
					className: Object(d.a)(M.a.textContainer, {
						[M.a.textContainerNoIcon]: !j
					})
				}, r.a.createElement("div", {
					className: M.a.text
				}, r.a.createElement("h1", {
					className: M.a.title
				}, l || C), !!l && r.a.createElement("h2", {
					className: M.a.description
				}, "r/", o), N && r.a.createElement(R, {
					level: e.powerups.tier,
					className: M.a.levelBadge,
					onClick: () => {
						s(Object(m.e)()), t(Object(b.i)(u.a.ECON_POWERUPS_PURCHASE))
					}
				})), r.a.createElement("div", {
					className: M.a.subscribeButtonContainer
				}, r.a.createElement(f.a, {
					className: M.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign(Object.assign({}, v.defaults(t)), {
							source: "id_banner",
							action: w.c.CLICK,
							noun: e,
							subreddit: v.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: o,
						type: k.a.SUBREDDIT
					},
					small: !0
				})), e.subreddit && r.a.createElement(p.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), T && r.a.createElement(g.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: c,
					subredditId: n,
					subredditNavContainerClassName: M.a.subredditNavContainer
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => i.a.createElement(o.d, null, i.a.createElement(o.h, null, i.a.createElement(c.a, null, i.a.createElement(o.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), i.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, i.a.createElement(o.b, null)))), i.a.createElement(o.k, null, i.a.createElement(o.o, {
				className: u.a.ModalText
			}, e.modalText)), i.a.createElement(o.f, null, !e.hideCancelButton && i.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), i.a.createElement(o.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, s) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/loginHref/index.ts"),
				l = s("./src/reddit/actions/contentGate.ts"),
				u = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/Footer/index.m.less"),
				h = s.n(p);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = b.a.div("FooterContainer", h.a), x = b.a.div("UserAgreement", h.a), k = b.a.a("UserAgreementLink", h.a), O = b.a.a("PrivacyLink", h.a);
			var y = () => i.a.createElement(f, null, i.a.createElement(x, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", i.a.createElement(k, {
					href: "".concat(n.a.redditUrl, "/help/useragreement")
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", i.a.createElement(O, {
					href: "".concat(n.a.redditUrl, "/help/privacypolicy")
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				w = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = s("./src/reddit/components/RichTextJson/index.tsx"),
				j = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/lodash/flatMap.js")),
				C = s.n(j),
				E = s("./src/lib/linkMatchers/index.ts"),
				_ = s("./src/lib/linkMatchers/customLinks.ts"),
				N = s("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				I = e => {
					const t = e.split(S);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, r, i] = t.slice(n, n + 3);
						s.push(e), s.push([i, r])
					}
					return s
				};
			var T = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = C()(t, I)), e.parseRegularLinks && (t = C()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.e.add(_.g.subreddit.prefix, _.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const r of t) s.push(e.slice(n ? n.lastIndex : 0, r.index)), n = r, s.push([r.url, r.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, r] = t;
							return i.a.createElement(N.b, {
								className: e.linkClassName,
								href: n,
								isSponsored: !1,
								key: s,
								source: null
							}, r)
						}
						return i.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				L = s("./src/reddit/models/ContentGate.ts"),
				M = s("./src/reddit/selectors/meta.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/ContentGate/index.m.less"),
				B = s.n(W);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = b.a.div("ButtonsContainer", B.a), U = b.a.div("Container", B.a), H = b.a.div("Description", B.a), V = b.a.div("PrivateSubredditDetails", B.a), K = b.a.div("PrivateSubredditDescription", B.a), G = b.a.h3("PrivateSubredditName", B.a), z = b.a.a("Link", B.a), q = b.a.wrapped(R.h, "LinkRouterButton", B.a), Z = b.a.wrapped(R.g, "LinkButton", B.a), J = b.a.wrapped(R.k, "SecondaryLinkRouterButton", B.a), X = b.a.wrapped(R.j, "SecondaryLinkButton", B.a), Y = b.a.wrapped(q, "GoHomeLinkButton", B.a), Q = b.a.img("Image", B.a), $ = b.a.img("ImagePlaceholder", B.a), ee = b.a.wrapped(q, "LeftLinkRouterButton", B.a), te = b.a.wrapped(Z, "LeftLinkButton", B.a), se = b.a.wrapped(X, "SecondaryLeftLinkButton", B.a), ne = b.a.wrapped(J, "SecondaryLeftLinkRouterButton", B.a), re = b.a.h3("Title", B.a), ie = b.a.div("PageBody", B.a), ae = b.a.div("QuarantineMessageWrapper", B.a), oe = Object(d.c)({
				isLoggedIn: D.G,
				origin: M.l,
				user: D.i
			}), de = Object(P.t)(), ce = Object(a.b)(oe, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(u.C(s)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(l.l)())
					}
				}
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: a,
					location: o,
					origin: d,
					pageLayer: u,
					quarantineRequiresEmail: b,
					quarantineMessage: p,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: g,
					setNSFWPreference: f,
					subredditDescription: x,
					subredditName: k,
					user: O
				} = e, y = () => {
					a ? f() : Object(l.k)(), window.location.reload()
				};
				switch (s) {
					case L.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(n.a.assetPath, "/img/gold/premium-crest.png")
						}), i.a.createElement(re, null, F._("r/{community name} is a Reddit Premium community", [F._param("community name", k)], {
							hk: "2lyDwB"
						})), i.a.createElement(H, null, F._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(A, null, O ? i.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/premium")
						}, F._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(te, {
							href: Object(c.a)(o, d)
						}, F._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? i.a.createElement(q, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(X, {
							href: Object(c.a)(o, d)
						}, F._("Log in", null, {
							hk: "odEG4"
						}))));
					case L.a.Nsfw:
					case L.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), i.a.createElement(re, null, s === L.a.Nsfw ? F._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : F._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(H, null, F._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(A, null, i.a.createElement(ee, {
							to: "/"
						}, F._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(X, {
							onClick: y
						}, F._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case L.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/private.png")
						}), i.a.createElement(re, null, F._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), x && x.length && i.a.createElement(V, null, i.a.createElement(G, null, "r/", k), i.a.createElement(K, null, i.a.createElement("div", null, x))), i.a.createElement(H, null, F._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), i.a.createElement(A, null, O ? i.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/message/compose?to=/r/").concat(k)
						}, F._("Message Mods", null, {
							hk: "vVe1i"
						})) : i.a.createElement(se, {
							href: Object(c.a)(o, d)
						}, F._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(q, {
							to: "/"
						}, O ? F._("Go Home", null, {
							hk: "49p4or"
						}) : F._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case L.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), i.a.createElement(re, null, F._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(H, null, F._("This community is {=quarantined}", [F._param("=quarantined", i.a.createElement(z, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, F._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(ae, null, g ? i.a.createElement(v.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : h ? i.a.createElement(w.a, {
							html: h
						}) : p || F._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), F._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(A, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? i.a.createElement(A, null, i.a.createElement(ne, {
								to: "/"
							}, F._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(Z, {
								href: "".concat(n.a.redditUrl, "/prefs/update")
							}, F._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(A, null, i.a.createElement(ee, {
								to: "/"
							}, F._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(X, {
								onClick: t
							}, F._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, r, b)));
					case L.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/banned.png")
						}), i.a.createElement(re, null, F._("r/{community name} has been banned from Reddit", [F._param("community name", k)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(H, null, e ? i.a.createElement(T, {
							linkClassName: B.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : F._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(A, null, i.a.createElement(q, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, F._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(A, null, i.a.createElement(q, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement($, null), i.a.createElement(re, null, F._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(H, null, F._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(A, null, O && i.a.createElement(m.a, {
							eventSource: "content_gate"
						}), i.a.createElement(Y, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.ProfileDoesNotExist:
					case L.a.ProfileDeleted:
					case L.a.ProfileSuspended:
					case L.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case L.a.ProfileBlockedForLegalReason:
									return F._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case L.a.ProfileDeleted:
									return F._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case L.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, F._("This account has been {=suspended} .", [F._param("=suspended", i.a.createElement(z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, F._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case L.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(re, null, F._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(H, null, F._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(A, null, i.a.createElement(Y, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, F._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(A, null, i.a.createElement(Y, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, F._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(A, null, i.a.createElement(q, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = de(ce(Object(o.i)(e => i.a.createElement(U, null, i.a.createElement("div", null, i.a.createElement(ie, null, le(e))), i.a.createElement(y, null)))))
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_23HWOAAvtr9XUARUICwS1l",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/downToChat.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				m = s("./src/reddit/selectors/downToChat.ts"),
				b = s("./src/reddit/selectors/experiments/downToChat.ts"),
				p = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				h = s.n(p);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = Object(a.c)({
				isDownToChatExperimentEnabled: b.a,
				isEnabled: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(m.c)(e, s.id)
				}
			}), x = Object(i.b)(f, e => ({
				startChatting: t => e(Object(d.i)(t))
			}));
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.onButtonClick = () => {
						const {
							startChatting: e,
							subreddit: t
						} = this.props;
						e(t.id)
					}
				}
				render() {
					const {
						headerButton: e,
						isEnabled: t,
						isDownToChatExperimentEnabled: s
					} = this.props;
					return t && s ? r.a.createElement(l.f, {
						className: Object(o.a)(h.a.button, e ? h.a.headerButton : ""),
						redditStyle: !0,
						onClick: this.onButtonClick
					}, e && r.a.createElement(u.a, {
						className: Object(o.a)(h.a.chatIcon)
					}), r.a.createElement("span", {
						className: Object(o.a)(h.a.buttonCaption)
					}, g._("Start chatting", null, {
						hk: "udQG0"
					}))) : null
				}
			}
			t.a = x(Object(c.c)(k))
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const i = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
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
			const r = Object(n.a)({
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
			t.a = r
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
				r = s.n(n),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = s("./src/reddit/models/Theme/index.ts"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(p);
			const g = d.a.wrapped(u.a, "Planet", h.a),
				f = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				k = d.a.div("HeaderContent", h.a),
				O = d.a.div("HeaderContainer", h.a),
				y = d.a.span("HeaderText", h.a),
				w = d.a.wrapped(i.a, "HeaderUrl", h.a),
				v = d.a.span("Container", h.a),
				j = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(b.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(b.a)(e).banner.positionedImageAlignment,
						i = Object(b.a)(e).banner.positionedImage,
						o = Object(b.a)(e).banner.secondaryBannerPositionedImage;
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
					const u = !!i && !!o && "left" === n,
						p = Object(m.g)(Object(b.a)(e).banner.backgroundColor, Object(b.a)(e).banner.backgroundImage, Object(b.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(b.a)(e).banner.iconDimensions.customSize, 10),
						C = "".concat(4 + j, "px");
					return r.a.createElement(v, {
						style: {
							background: p,
							backgroundPosition: "center top",
							height: "".concat(Object(b.a)(e).banner.height, "px")
						}
					}, r.a.createElement(w, {
						className: e.className,
						to: e.url
					}, r.a.createElement(O, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(b.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(k, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(b.a)(e).banner.showCommunityIcon && (s ? r.a.createElement(f, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(b.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: C,
							width: C
						}
					}) : r.a.createElement(g, {
						style: {
							padding: "".concat(Object(b.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(b.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: C,
							width: C
						}
					})), r.a.createElement(y, {
						style: {
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), r.a.createElement(x, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!i,
							[h.a.hoverPositionedImage]: !!i && !!o
						}),
						style: Object.assign(Object.assign({}, d), {
							height: "".concat(Object(b.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = j
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = s("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.c)(e => {
				const t = "".concat(e.tooltipId, "-hover-id");
				return r.a.createElement(i.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, r.a.createElement(a.a, {
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
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				d = s.n(o),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				u = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const m = Object(a.c)({
				consumers: e => e.jsApi
			});
			class b extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: n
							} = t,
							r = u(t, ["className", "consumers"]);
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
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(m, {})(b),
				h = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.J)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var x = Object(i.b)(() => Object(a.a)(f, h.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => r.a.createElement(p, {
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
			const k = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.J)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var O = Object(i.b)(() => Object(a.a)(k, e => e))(e => r.a.createElement(p, {
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
			var y = Object(i.b)(() => Object(a.c)({
					subreddit: g.S
				}))(e => r.a.createElement(p, {
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
			var v = Object(i.b)(() => Object(a.c)({
				post: w.N,
				subredditOrProfile: w.ab,
				isModerator: (e, t) => {
					const s = Object(w.ab)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(p, {
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
			var j = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(w.ab)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(w.ab)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(p, {
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
			var C = Object(i.b)(() => Object(a.c)({
				post: w.N,
				subredditOrProfile: w.ab,
				isModerator: (e, t) => {
					const s = Object(w.ab)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(p, {
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
			var E = Object(i.b)(() => Object(a.c)({
				subreddit: g.S
			}))(e => r.a.createElement(p, {
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
			var _ = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(g.M)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
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
			var N = Object(i.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(g.S)(e, {
						subredditId: s
					}) : null
				}
			}))(e => r.a.createElement(p, {
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
				r = s.n(n),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/icons/fonts/Info/index.tsx"),
				c = s("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = s.n(c);
			const u = Object(i.a)(o.a),
				m = ["center", "bottom"],
				b = ["center", "top"];
			class p extends r.a.Component {
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
					return r.a.createElement("span", {
						className: l.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, r.a.createElement(d.a, null), r.a.createElement(u, {
						className: Object(a.a)(e.className, l.a.textTooltip),
						children: e.children,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: m,
						text: e.text,
						tooltipPosition: b
					}))
				}
			}
			t.a = p
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(g);
			const x = c.a.wrapped(m.a, "_Dropdown", f.a),
				k = Object(u.a)(x),
				O = c.a.button("MenuButton", f.a),
				y = c.a.wrapped(p.a, "MenuIcon", f.a),
				w = c.a.wrapped(b.b, "DropdownRow", f.a),
				v = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				j = Object(a.b)(v, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => i.a.createElement(O, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(y, null), i.a.createElement(k, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = s.n(u);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				p = d.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, s) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(n.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = b(Object(o.a)(p))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
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
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				p = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				x = s("./src/reddit/helpers/name/index.ts"),
				k = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/reddit/components/MiniCardPost/index.m.less"),
				v = s.n(w),
				j = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				C = s.n(j);
			const E = e => e.type === k.f.Spoiler,
				_ = Object(h.t)();
			t.a = _(Object(p.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: i,
					innerContainerClassName: c,
					onPostClick: p,
					trendingPost: h,
					trendingSearch: k,
					shouldOpenPost: w,
					showSubredditMeta: j = !0,
					showSubredditName: _,
					subredditOrProfile: N
				} = e, S = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", T = h && Object(l.a)(h.permalink) || "", P = w && T || k && Object(o.a)("/search", {
					q: k.rawQuery,
					source: I
				}) || T, R = k ? k.subredditInfo && k.subredditInfo.icon : N && N.icon.url, L = k ? k.subredditInfo && k.subredditInfo.displayText : N && (N.displayText || N.name), M = h ? h.flair.filter(E) : [], D = h ? h.score : 0, W = h ? h.numComments : 0, B = h && h.isSponsored, F = Object(y.a)(e).body, A = "linear-gradient(\n      ".concat(Object(r.g)(F, .2), ",\n      ").concat(Object(r.g)(F, .3), ",\n      ").concat(Object(r.g)(F, .4), ",\n      ").concat(Object(r.g)(F, .6), ",\n      ").concat(Object(r.g)(F, .8), ",\n      ").concat(F, "\n    )"), U = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(C.a.trendingPost, {
						[C.a["m-background"]]: !!S
					})
				}, a.a.createElement(g.a, {
					to: P
				}, a.a.createElement("div", {
					className: Object(d.a)(C.a.backgroundWrapper, v.a.backgroundWrapper, t),
					style: {
						background: Object(O.g)(Object(y.a)(e).body, S || Object(y.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": A
					}
				}, B && a.a.createElement("div", {
					className: C.a.promoted
				}, n.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(C.a.innerContainer, v.a.innerContainer, c),
					onClick: p,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? C.a.title : C.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(C.a.description, s)
				}, M.length > 0 && a.a.createElement(m.a, {
					className: C.a.flair,
					titleFlair: M,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : a.a.createElement("div", {
					className: C.a.spacer
				}), j && R && L && a.a.createElement(f.a, {
					className: C.a.relatedSubredditMetaData,
					iconClassName: C.a.subredditIcon,
					iconUrl: R || void 0,
					suffix: n.fbt._("{subredditName} and more", [n.fbt._param("subredditName", L)], {
						hk: "2YTyJf"
					})
				}), !j && h && a.a.createElement("div", {
					className: C.a.metaLine
				}, _ && L && a.a.createElement("span", {
					className: C.a.meta
				}, Object(x.b)(L)), a.a.createElement("span", {
					className: C.a.meta
				}, n.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [n.fbt._plural(D, "number", Object(u.b)(D))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: C.a.meta
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(W, "number", Object(u.b)(W))], {
					hk: "311aXY"
				})))))));
				return B ? a.a.createElement(b.a, {
					post: h
				}, U) : U
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
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				i = s.n(r);
			t.a = n.a.div("container", i.a)
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
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = i.a.a("Link", c.a), m = Object(o.t)({
				isFrontpage: o.y
			});
			t.a = m(e => r.a.createElement(a.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: c.a.LinkContainer
			}, r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(u, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(u, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(u, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(u, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(u, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(u, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(u, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(u, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(u, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(u, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(u, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: c.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
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
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(l);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var b = e => o.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, o.a.createElement(c.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, m._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				p = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				x = s.n(f),
				k = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const w = d.e[1] + 24,
				v = h.f + 8 + 152 + 32 + 16,
				j = v + w + 8,
				C = k.a.div("Container", x.a),
				E = k.a.wrapped(e => {
					var {
						className: t
					} = e, s = y(e, ["className"]);
					return o.a.createElement(b, O({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", x.a),
				_ = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: i
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(s, {
							[x.a.StickyStyles]: i && !r,
							[x.a.StickyStylesFakeOverlay]: !!r
						})
					}, t)
				};
			class N extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > v
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
					}, this.handleResize = i()(() => {
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
							adComponentOnFakeOverlay: t,
							children: s,
							className: n,
							hideFooter: r
						}
					} = this, i = this.state.isAdSticky && !(!e && !s);
					return o.a.createElement(C, {
						className: n,
						innerRef: this.setWrapperRef
					}, o.a.createElement(_, {
						isFakeOverlay: t,
						isSticky: i
					}, e, s, !r && o.a.createElement(p.a, null)), !this.props.hideBackToTop && o.a.createElement(E, null))
				}
			}
			const S = Object(g.t)();
			t.a = S(N)
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
			s.d(t, "a", (function() {
				return Y
			}));
			var n = s("./node_modules/lodash/orderBy.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/opener/index.ts"),
				u = s("./src/chat/helpers/urls/index.ts"),
				m = s("./src/reddit/actions/chat/subredditChannel.ts"),
				b = s("./src/reddit/actions/chat/toggle.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/modals.ts"),
				k = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/helpers/trackers/chat.ts"),
				y = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				w = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				v = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx");
			var j = e => {
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
			};
			var C = e => {
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
				},
				E = s("./src/reddit/models/SubredditChannel/index.ts"),
				_ = s("./src/reddit/selectors/chat.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/subredditChannel.ts"),
				I = s("./src/reddit/components/SubredditChannelList/index.m.less"),
				T = s.n(I);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = c.a.wrapped(h.g, "ModalFormItem", T.a), L = c.a.wrapped(k.f, "PrimaryButton", T.a), M = c.a.wrapped(h.o, "ModalText", T.a), D = c.a.a("ItemLink", T.a), W = c.a.p("Detail", T.a), B = c.a.p("DescText", T.a), F = c.a.div("Title", T.a), A = c.a.div("Header", T.a), U = c.a.wrapped(w.a, "ChatIcon", T.a), H = c.a.wrapped(v.a, "PlanetIcon", T.a), V = c.a.wrapped(y.a, "Pencil", T.a), K = c.a.wrapped(j, "Group", T.a), G = c.a.wrapped(C, "Key", T.a), z = c.a.wrapped(g.b, "SubredditIcon", T.a), q = c.a.button("EditButton", T.a), Z = c.a.button("ShowAllLink", T.a), J = c.a.span("ChannelName", T.a), X = c.a.div("HeaderText", T.a);
			var Y;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Y || (Y = {}));
			const Q = Object(d.c)({
					isCollectionReady: S.e,
					isModerator: _.e,
					selectedSubreddit: N.S,
					shouldRequestCollection: S.f,
					subredditChannels: S.a
				}),
				$ = Object(o.b)(Q, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						toggleModal: () => e(Object(p.i)(x.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(p.i)(x.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(p.i)(x.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(m.l)(t)),
						onChatLinkClick: (t, s) => e(Object(b.c)({
							channelId: t,
							subredditName: s
						})),
						onSelectChannel: t => e(Object(m.m)({
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
						const s = r()(t, ["name"]);
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
						Widget: r,
						Modal: i
					} = Y, {
						parentContext: a,
						sendEvent: o
					} = this.props;
					return a === r && n === t ? o(Object(O.c)(s)) : a === r ? o(Object(O.e)(s)) : a === i && n === t ? o(Object(O.a)(s)) : a === i ? o(Object(O.b)(s)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(O.d)()))
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
							onAddChannel: n,
							toggleEditModal: r,
							selectedSubreddit: i,
							onSelectChannel: o,
							toggleCreateModal: d
						}
					} = this;
					if (!t) return null;
					const c = this.displayChannelsList();
					return a.a.createElement("div", {
						className: e
					}, c.length ? a.a.createElement(R, null, c.map((e, t) => a.a.createElement(D, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, a.a.createElement(F, {
						key: "item-link-title-".concat(t)
					}, a.a.createElement(U, {
						key: "item-link-icon-".concat(t)
					}), i.icon.url ? a.a.createElement(z, {
						key: "subreddit-icon-".concat(t),
						iconUrl: i.icon.url
					}) : a.a.createElement(H, {
						key: "planet-".concat(t),
						isSmall: !0
					}), a.a.createElement(A, {
						key: "item-header-".concat(t)
					}, a.a.createElement(X, {
						key: "item-header-text-".concat(t)
					}, a.a.createElement(W, {
						key: "item-detail-".concat(t)
					}, i.name, P._({
						"*": "• {number} Members",
						_1: "• 1 Member"
					}, [P._plural(e.membersCount, "number")], {
						hk: "4bUTpG"
					})), a.a.createElement(J, {
						key: "channel-name-".concat(t)
					}, e.type === E.c.Public ? a.a.createElement(K, null) : a.a.createElement(G, null), e.name)), s && a.a.createElement(q, {
						key: "button-".concat(t),
						onClick: t => {
							o(e.channelId), r(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(O.l)())
						}
					}, a.a.createElement(V, null)))), e.description && a.a.createElement(B, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && a.a.createElement(Z, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, P._("See more", null, {
						hk: "lhTm0"
					}))) : s ? a.a.createElement(R, null, a.a.createElement(M, null, P._("Create your first room and get your community chatting in real time.", null, {
						hk: "2zKL0L"
					})), a.a.createElement(L, {
						onClick: n || d
					}, P._("+ Add room", null, {
						hk: "2vBAvZ"
					}))) : a.a.createElement(R, null, a.a.createElement(M, null, P._("There are no joined chatrooms yet", null, {
						hk: "3n65KN"
					}))))
				}
			}
			t.b = $(Object(f.c)(ee))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
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
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/widgets.ts"),
				u = s("./src/reddit/actions/subreddit.ts"),
				m = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				b = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = s("./src/reddit/components/SubredditNav/index.m.less"),
				g = s.n(h);

			function f() {
				return (f = Object.assign || function(e) {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const k = (e, t, s) => Object(b.a)(e, {
					[g.a.mActive]: t
				}, {
					[g.a.topBannerVariant]: s
				}),
				O = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, i = x(e, ["children", "isActive", "isTopBannerVariant"]);
					return r.a.createElement("div", f({
						className: k(g.a.subNavTitle, s, n)
					}, i), r.a.createElement("span", null, t), r.a.createElement(p.b, {
						className: g.a.navDropdownIcon
					}))
				},
				y = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: i
					} = e, a = x(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const o = k(g.a.navLink, s, i);
					return n ? r.a.createElement(m.a, f({
						className: o,
						to: n
					}, a)) : r.a.createElement("a", f({
						className: o
					}, a))
				},
				w = e => {
					var {
						className: t,
						isActive: s
					} = e, n = x(e, ["className", "isActive"]);
					return r.a.createElement(m.a, f({
						className: k(g.a.navLink, s)
					}, n))
				},
				v = e => {
					var {
						className: t,
						isActive: s
					} = e, n = x(e, ["className", "isActive"]);
					return r.a.createElement("a", f({
						className: k(g.a.subNavLink, s)
					}, n))
				},
				j = e => {
					var {
						className: t
					} = e, s = x(e, ["className"]);
					return r.a.createElement("div", f({
						className: Object(b.a)(g.a.subNavContainer, t)
					}, s))
				},
				C = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = x(e, ["className", "isOpen"]);
					return r.a.createElement("div", f({
						className: Object(b.a)(g.a.subNavList, t, {
							[g.a.mIsOpen]: s
						})
					}, n))
				},
				{
					fbt: E
				} = s("./node_modules/fbt/lib/FbtPublic.js");
			const _ = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var N = Object(d.t)()(Object(i.b)(_, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? r.a.createElement(w, {
						className: g.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(d.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, E._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				S = s("./src/lib/linkMatchers/index.ts");
			class I extends r.a.Component {
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
					return r.a.createElement(j, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(O, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(C, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var T = I;
			const P = e => {
				const t = e.url && Object(S.g)(S.e, e.url);
				return t ? t.url : e.url
			};
			var R = e => e.menuItem.url ? r.a.createElement(y, {
					href: P(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(T, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(v, {
					key: "".concat(e.text, "-").concat(P(e)),
					role: "listitem",
					href: P(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				L = s("./src/lib/constants/index.ts");
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const D = Object(d.t)(),
				W = [L.Bb.SUBREDDIT, L.Bb.COMMENTS, L.Bb.COLLECTION_COMMENTS],
				B = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && W.indexOf(t.pageLayer.meta.name) > -1
				});
			var F = D(Object(i.b)(B, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isTopBannerVariant: i,
						onTurnOffMetaFilter: a
					} = e, o = n && !s;
					return r.a.createElement(y, {
						to: t,
						isActive: o,
						isTopBannerVariant: i,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, M._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				A = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				U = s("./src/higherOrderComponents/makeAsync.tsx");
			var H = Object(U.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				V = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/constants/screenWidths.ts"),
				G = s("./src/reddit/models/Theme/index.ts"),
				z = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				q = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const Z = Object(A.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, i = q(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(z.a)(i);
				return r.a.createElement("div", {
					className: Object(b.a)(g.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(G.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var J = e => r.a.createElement(Z, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: g.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === V.g.Large ? "".concat(e.maxWidth || K.a, "px") : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(H, null))),
				X = s("./src/reddit/constants/wiki.ts"),
				Y = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: Q
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, i = !!n && !!n.meta && n.meta.name === L.Bb.SUBREDDIT_WIKI, a = "wiki/".concat(X.i), o = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return r.a.createElement(y, {
					isActive: i,
					isTopBannerVariant: s,
					to: o,
					onClick: () => e.sendEvent(Object(Y.g)())
				}, Q._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ee = Object(c.a)("spPolls", N),
				te = Object(d.t)(),
				se = Object(a.c)({
					layout: d.N,
					widget: l.f
				}),
				ne = Object(i.b)(se);
			t.a = te(ne(Object(o.c)(e => r.a.createElement(J, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(F, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => r.a.createElement(R, {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				p = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				h = s("./src/reddit/components/IdCard/async.tsx"),
				g = s("./src/lib/isFakeSubreddit/index.ts"),
				f = s("./src/reddit/components/IdCard/helpers.ts"),
				x = e => !Object(g.a)(e) || Object(f.c)(e) || Object(f.d)(e) || Object(f.e)(e),
				k = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				y = s("./src/reddit/components/SidebarContainer/index.tsx"),
				w = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				j = s("./src/lib/classNames/index.ts"),
				C = s("./src/higherOrderComponents/asTooltip.tsx"),
				E = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/constants/modals.ts"),
				S = s("./src/reddit/controls/Dropdown/index.tsx"),
				I = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				T = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				R = s("./src/reddit/selectors/tooltip.ts"),
				L = s("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				M = s.n(L);
			const D = u.a.wrapped(S.a, "_Dropdown", M.a),
				W = u.a.wrapped(T.a, "Pencil", M.a),
				B = u.a.a("DropdownRow", M.a),
				F = Object(C.a)(D),
				A = e => "SubredditChannels--Menu--".concat(e),
				U = Object(c.c)({
					isModerator: P.g,
					isDropdownOpen: (e, t) => Object(R.b)(A(t.subredditId))(e)
				}),
				H = u.a.wrapped(e => {
					const {
						className: t,
						isModerator: s,
						onOpenDropdown: r,
						isDropdownOpen: i,
						toggleModal: a
					} = e, d = A(e.subredditId);
					return o.a.createElement("button", {
						"aria-expanded": i,
						"aria-haspopup": !0,
						"aria-label": n.fbt._("Chat menu", null, {
							hk: "4DfuTV"
						}),
						className: Object(j.a)(M.a.top, t),
						id: d,
						onClick: () => r(d)
					}, o.a.createElement(I.a, null), o.a.createElement(F, {
						isOpen: i,
						tooltipId: d,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(B, {
						onClick: a
					}, s ? n.fbt._("Manage chatrooms", null, {
						hk: "2hIiuc"
					}) : n.fbt._("View rooms", null, {
						hk: "2XOg3o"
					}), o.a.createElement(W, null))))
				}, "OverflowMenu", M.a);
			var V = Object(d.b)(U, e => ({
					onOpenDropdown: t => e(Object(E.h)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(_.i)(N.a.MANAGE_SUBREDDIT_CHAT))
				}))(H),
				K = s("./src/reddit/components/SubredditChannelList/index.tsx"),
				G = s("./src/reddit/components/TrackingHelper/index.tsx"),
				z = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				q = s("./src/reddit/helpers/trackers/chat.ts"),
				Z = s("./src/reddit/selectors/subreddit.ts"),
				J = s("./src/reddit/selectors/subredditChannel.ts"),
				X = s("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				Y = s.n(X);
			const Q = u.a.div("Wrapper", Y.a),
				$ = Object(c.c)({
					isCollectionReady: J.e,
					isModerator: P.g,
					isWhitelistedSubreddit: Z.e,
					shouldRequestCollection: J.f,
					subredditChannels: J.a
				});
			let ee;
			class te extends o.a.Component {
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
					this.props.subredditId !== ee && (ee = this.props.subredditId, this.props.sendEvent(Object(q.m)()))
				}
				isEnabled() {
					const {
						isModerator: e,
						isCollectionReady: t,
						isWhitelistedSubreddit: s,
						subredditChannels: n
					} = this.props, r = n && n.length;
					return !(!t || !s || !r && !e)
				}
				render() {
					const {
						subredditId: e,
						shouldRequestCollection: t
					} = this.props, s = o.a.createElement(K.b, {
						maxChannels: 3,
						parentContext: K.a.Widget,
						subredditId: e
					});
					return t ? s : this.isEnabled() ? o.a.createElement(w.a, null, o.a.createElement(z.a, {
						className: this.props.className,
						title: n.fbt._("Chat rooms", null, {
							hk: "4vn07S"
						}),
						headerButton: o.a.createElement(V, {
							subredditId: e
						})
					}, o.a.createElement(Q, null, s))) : null
				}
			}
			var se = Object(d.b)($)(Object(G.c)(te)),
				ne = s("./src/lib/makeListingKey/index.ts"),
				re = s("./src/reddit/actions/subreddit.ts"),
				ie = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				ae = s("./src/reddit/controls/Button/index.tsx"),
				oe = s("./src/reddit/helpers/name/index.ts"),
				de = s("./src/reddit/helpers/overlay/index.ts"),
				ce = s("./src/reddit/selectors/experiments/topPosts.ts"),
				le = s("./src/reddit/selectors/posts.ts"),
				ue = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const me = .99;
			class be extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= me && t(s)
					}
				}
				render() {
					return o.a.createElement(ue.a, {
						threshold: me,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var pe = be,
				he = s("./src/lib/isUrl/index.ts"),
				ge = s("./src/lib/prettyPrintNumber/index.ts"),
				fe = s("./src/reddit/components/FlairWrapper/index.tsx"),
				xe = s("./src/reddit/components/Thumbnail/index.tsx"),
				ke = s("./src/reddit/models/Flair/index.ts"),
				Oe = s("./src/reddit/models/Subreddit/index.ts"),
				ye = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				we = s.n(ye);
			const {
				fbt: ve
			} = s("./node_modules/fbt/lib/FbtPublic.js"), je = e => e.type === ke.f.Nsfw || e.type === ke.f.Spoiler, Ce = Object(c.c)({
				post: le.N,
				subredditOrProfile: le.ab
			});
			class Ee extends o.a.PureComponent {
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
						subredditOrProfile: r
					} = this.props, i = {
						post: t
					}, a = Object(he.a)(Object(xe.b)(i)), d = t.flair.filter(je);
					return o.a.createElement("div", {
						className: Object(j.a)(we.a.container, e, {
							[we.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: we.a.mainLine
					}, a && o.a.createElement("div", {
						className: we.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(xe.a, i)), o.a.createElement("div", {
						className: Object(j.a)(we.a.title, !a && we.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(fe.a, {
						className: we.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: we.a.metaLine
					}, n && !!r && o.a.createElement("span", {
						className: we.a.meta
					}, Object(Oe.g)(r) ? Object(oe.c)(r.displayText || r.name) : Object(oe.b)(r.displayText || r.name)), o.a.createElement("span", {
						className: we.a.meta
					}, ve._({
						"*": "{score} points",
						_1: "1 point"
					}, [ve._plural(t.score, "score", Object(ge.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: we.a.meta
					}, ve._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [ve._plural(t.numComments, "numComments", Object(ge.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var _e = Object(d.b)(Ce, e => ({
					openLightbox: t => e(Object(de.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Ee),
				Ne = s("./src/reddit/components/SidebarPostList/index.m.less"),
				Se = s.n(Ne);
			const {
				fbt: Ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Te = 10, Pe = 2, Re = Object(c.a)(le.T, e => e.filter(e => !e.isSponsored)), Le = Object(c.c)({
				posts: Re
			});
			class Me extends o.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || Te, this.showMorePosts = () => {
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
							redditStyle: r,
							smallPostClassName: i
						} = this.props;
						return o.a.createElement(pe, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(_e, {
							className: Object(j.a)(Se.a.smallPost, i),
							containerOnClick: s,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(g.a)(Object(oe.f)(t)),
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
						onPostVisible: r,
						posts: i,
						redditStyle: a,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === i.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(ce.a)(c),
						b = Object(ce.b)(c),
						p = m || b,
						h = i.slice(l * u, (l + 1) * u),
						[f, ...x] = h,
						k = p ? h.slice(0, Pe) : x.slice(0, Pe),
						O = p ? h.slice(Pe) : x.slice(Pe);
					return o.a.createElement("div", {
						className: Object(j.a)(Se.a.container, t, {
							[Se.a.redditStyle]: a
						})
					}, !p && o.a.createElement(pe, {
						onPostVisible: r,
						postId: f.id
					}, o.a.createElement(ie.a, {
						backgroundWrapperClassName: Se.a.largePostBackgroundWrapper,
						descriptionClassName: Se.a.largePostDescription,
						innerContainerClassName: Se.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						postId: f.id,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(oe.f)(s)),
						trendingPost: f
					})), k.map(this.renderSmallPost), e, O.map(this.renderSmallPost), d && o.a.createElement(ae.n, {
						className: Se.a.SeeMore,
						onClick: this.showMorePosts
					}, n || Ie._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var De = Object(d.b)(Le, e => ({
					openPost: t => e(Object(de.a)(t.permalink))
				}))(Me),
				We = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Be = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				Fe = s("./src/reddit/selectors/discoveryUnit.ts"),
				Ae = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				Ue = s.n(Ae);
			const He = 10,
				Ve = Object(c.a)((e, t) => t.subredditName, e => Object(ne.a)(e, l.O.TOP, {
					t: l.Sb.WEEK
				})),
				Ke = Object(c.c)({
					discoveryUnit: e => Object(Fe.c)(e, {
						unitName: Be.j
					}),
					listingKey: Ve,
					posts: (e, t) => {
						const s = Ve(e, t);
						return Object(le.T)(e, {
							listingKey: s
						})
					},
					subreddit: Z.B
				});
			class Ge extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(We.h)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(We.x)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(We.C)(t, e, void 0, s))
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
						loadMorePosts: r,
						posts: i,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = a,
						l = i.length > He;
					return o.a.createElement(z.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: n.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(De, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: Ue.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var ze = Object(d.b)(Ke, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(re.r)({
							sort: l.O.TOP,
							subredditName: s,
							t: l.Sb.WEEK
						}))
					}
				})(Object(G.c)(Ge)),
				qe = s("./src/config.ts"),
				Ze = s("./src/lib/localStorageAvailable/index.ts"),
				Je = s("./src/higherOrderComponents/asModal/index.tsx"),
				Xe = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Ye = s("./src/reddit/controls/TextButton/index.tsx"),
				Qe = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: $e
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class et extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(Xe.d, null, o.a.createElement(Xe.h, null, o.a.createElement(Qe.a, null, o.a.createElement(Xe.p, null, $e._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement(Ye.a, {
						onClick: e.toggleModal
					}, o.a.createElement(Xe.b, null)))), o.a.createElement(Xe.k, null, o.a.createElement(Xe.o, null, $e._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(Xe.f, null, o.a.createElement(Xe.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, $e._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(Xe.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, $e._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var tt = Object(Je.a)(et),
				st = s("./src/reddit/components/IdCard/Banner.tsx"),
				nt = s("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				rt = s("./src/reddit/constants/blade.ts"),
				it = s("./src/reddit/controls/InternalLink/index.tsx"),
				at = s("./src/reddit/helpers/localStorage/index.ts"),
				ot = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				dt = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				ct = s("./src/reddit/icons/svgs/Close/index.tsx"),
				lt = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				ut = s("./src/reddit/selectors/activeModalId.ts"),
				mt = s("./src/reddit/selectors/structuredStyles.ts"),
				bt = s("./src/reddit/components/IdCard/index.m.less"),
				pt = s.n(bt),
				ht = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				gt = s.n(ht);
			const ft = "mod_onboarding_modal",
				xt = "mod_onboarding_widget",
				kt = Object(c.a)(ut.a, (e, t) => Object(P.a)(lt.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(mt.l)(e, {
					subredditId: t.subredditId
				}), (e, t, s) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					modHasEditedBanner: !s || !!(s.bannerBackgroundImage || s.bannerHeight || s.bannerPositionedImage || s.bannerBackgroundColor),
					modHasEditedColors: !s || !!(s.primaryColor || s.highlightColor || s.backgroundColor || s.backgroundImage),
					modHasEditedIcon: !s || (!!s.communityIcon || !!s.bannerShowCommunityIcon)
				}));
			class Ot extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(at.W)(xt, !0, this.props.subredditId), this.props.sendEvent(Object(ot.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(ot.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(ot.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(ot.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(ot.d)("styling_generic_link"))
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
						subredditId: r
					} = this.props, i = e && !(t && s && n) && (!Object(Ze.a)() || !Object(at.q)(xt, r));
					i !== this.state.visible && (this.setState({
						visible: i
					}), i && this.props.sendEvent(Object(ot.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: r,
						subredditName: i,
						toggleCloseMenuModal: a
					} = this.props;
					return this.state.visible ? o.a.createElement(z.a, {
						className: Object(j.a)(gt.a.container, this.props.className)
					}, o.a.createElement(st.a, {
						bannerBackgroundImage: "".concat(qe.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), o.a.createElement(ct.a, {
						className: gt.a.closeIcon,
						onClick: a
					}), Object(nt.a)({
						titleText: n.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(f.b)("url('".concat(qe.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), o.a.createElement("div", {
						className: Object(j.a)(pt.a.Description, gt.a.description)
					}, n.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [n.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: rt.e.exportImport,
						className: gt.a.modHelpLink,
						target: "_blank"
					}, n.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(it.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(rt.c.NameAndIcon),
						className: gt.a.link,
						onClick: this.customizeIcon
					}, r ? o.a.createElement(dt.a, {
						className: gt.a.checked
					}) : o.a.createElement(dt.a, {
						className: gt.a.unchecked
					}), n.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(it.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(rt.c.Banner),
						className: gt.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(dt.a, {
						className: gt.a.checked
					}) : o.a.createElement(dt.a, {
						className: gt.a.unchecked
					}), n.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(it.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(rt.c.Global),
						className: gt.a.link,
						onClick: this.customizeThemeColors
					}, s ? o.a.createElement(dt.a, {
						className: gt.a.checked
					}) : o.a.createElement(dt.a, {
						className: gt.a.unchecked
					}), n.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(ae.k, {
						to: "/r/".concat(i, "?styling=true"),
						className: gt.a.button,
						onClick: this.customizeAppearance
					}, n.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: gt.a.subtext
					}, n.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === ft && o.a.createElement(tt, {
						withOverlay: !0,
						toggleModal: a,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var yt = Object(d.b)(kt, (e, t) => {
					let {
						subredditId: s,
						subredditName: n
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(_.i)(ft))
					}
				})(Object(G.c)(Ot)),
				wt = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				vt = s("./src/reddit/constants/tracking.ts"),
				jt = s("./src/reddit/selectors/seo/linksModule.ts"),
				Ct = s("./src/reddit/selectors/telemetry.ts"),
				Et = s("./src/telemetry/models/Subreddit.ts");
			const _t = e => t => Object.assign(Object.assign({}, Ct.defaults(t)), {
					action: vt.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Nt = e => t => s => Object.assign(Object.assign({}, Ct.defaults(s)), {
					action: vt.c.CLICK,
					noun: Object(Et.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				St = Object(c.c)({
					communities: jt.c
				});
			var It = Object(d.b)(St)(e => {
					const t = Object(G.b)();
					return e.communities && e.communities.length ? o.a.createElement(w.a, null, o.a.createElement(wt.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: _t,
						getSubscribeEventFactoryHandler: Nt,
						sendEvent: t,
						title: n.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Tt = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				Pt = s("./src/reddit/featureFlags/index.ts"),
				Rt = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Lt = s("./src/reddit/models/Widgets/index.ts"),
				Mt = s("./src/reddit/selectors/communityFlairs.ts"),
				Dt = s("./src/reddit/selectors/listings.ts"),
				Wt = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				Bt = s.n(Wt);
			const Ft = 250,
				At = 270,
				Ut = u.a.wrapped(y.a, "SidebarContainer", Bt.a),
				Ht = Object(c.c)({
					apiError: Dt.c,
					apiPending: Dt.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Mt.b)(e, s)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Mt.c)(e, s)
					},
					showGovernance: Pt.d.spPoints,
					showLeaderboard: Pt.d.spLeaderboard,
					widgets: Z.t
				}),
				Vt = Object(d.b)(Ht);
			class Kt extends a.Component {
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
							shortName: n.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys) return Object.assign(Object.assign({}, this.getPostFlairWidget()), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: Lt.d.Cloud,
							shortName: n.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
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
						listingName: t,
						showGovernance: s,
						showLeaderboard: n,
						subredditId: r,
						subredditName: i,
						topPostsVariant: a
					} = this.props;
					let d = 0;
					const c = Object(ce.a)(a),
						u = Object(ce.b)(a),
						g = Object(ce.c)(a),
						f = c || u;
					let y, j;
					!!this.getPostFlairWidget() ? y = this.props.widgets : (y = this.getCommunityWidgets(), j = this.makeFlairFilterWidget());
					const C = this.makeRelatedCommunitiesWidget(c, u),
						E = !c,
						_ = u,
						N = o.a.createElement(O.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: d++,
							position: Rt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(Ut, {
						className: e
					}, x(t) && o.a.createElement(h.a, {
						listingName: t
					}), o.a.createElement(m.a, {
						cardClassName: Bt.a.card,
						subredditId: r
					}), f && o.a.createElement(w.a, null, o.a.createElement(ze, {
						subredditName: i,
						topPostsVariant: a
					}, o.a.createElement("div", {
						className: Bt.a.inFeedAd
					}, N))), f && C && o.a.createElement(w.a, null, o.a.createElement(Tt.a, {
						subredditName: i,
						truncateThreshold: At,
						widget: C
					})), _ && y.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(w.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Tt.a, {
							subredditName: i,
							truncateThreshold: Ft,
							widget: e
						}))
					}), o.a.createElement(yt, {
						subredditId: r,
						subredditName: i
					}), s && o.a.createElement(b.a, {
						className: Bt.a.card,
						subredditId: r
					}), j && o.a.createElement(w.a, null, o.a.createElement(Tt.a, {
						subredditName: i,
						widget: j
					})), n && o.a.createElement(p.a, {
						className: Bt.a.card,
						subredditId: r,
						uniqueId: r
					}), o.a.createElement(k.g, {
						subredditId: r
					}), !f && N, o.a.createElement(It, {
						subredditId: r
					}), E && !_ && y.map((e, t) => {
						const s = "community-list" === e.kind;
						return o.a.createElement(w.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Tt.a, {
							subredditName: i,
							truncateThreshold: g && s ? At : g ? Ft : void 0,
							widget: e
						}))
					}), o.a.createElement(se, {
						subredditId: r
					}), o.a.createElement(v.a, {
						adComponent: o.a.createElement(O.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: d++,
							position: Rt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = Vt(Kt)
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
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				x = s("./src/reddit/helpers/flair.ts"),
				k = s("./src/reddit/helpers/trackers/postFlair.ts"),
				O = s("./src/reddit/models/Widgets/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				v = s.n(w);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const E = 129,
				_ = Object(h.t)({
					filterName: e => Object(h.S)(e)[p.g],
					url: e => Object(h.X)(e)
				}),
				N = Object(o.c)({
					subredditId: (e, t) => Object(y.G)(e, t.subredditName)
				}),
				S = Object(a.b)(N),
				I = l.a.div("WidgetContent", v.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, r = C(e, ["display", "isFlairFilter", "onMouseDown"]);
					return i.a.createElement("li", {
						className: Object(d.a)(v.a.StyledFlair, t === O.d.Cloud && v.a.cloudDisplay, {
							[v.a.flairFilter]: s,
							[v.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: n
					}, i.a.createElement(u.b, j({}, r, {
						className: v.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(k.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(k.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(k.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(k.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
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
					return i.a.createElement(g.n, {
						className: v.a.flairFilterButton,
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
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? E : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: v.a.flairFilterContainer,
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
					return i.a.createElement("ul", null, i.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(r) || void 0, o = t.order.length > n.length || s && !a;
					return i.a.createElement(b.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(I, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(r), o && this.renderButton()))
				}
			}
			t.a = _(S(Object(m.c)(P)))
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
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/helpers/dom/index.ts"),
				m = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				p = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				h = s("./src/reddit/models/Widgets/index.ts"),
				g = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				f = s.n(g);
			const x = d.a.div("RuleShortName", f.a),
				k = d.a.div("RuleIndex", f.a),
				O = d.a.div("RuleTitle", f.a),
				y = d.a.div("RuleDescription", f.a),
				w = d.a.wrapped(c.a, "RawHTMLDisplay", f.a),
				v = {};
			class j extends i.a.Component {
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
					return e.display === h.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!r;
					return i.a.createElement(x, {
						className: Object(o.a)({
							[f.a.pointerCursor]: a
						}),
						onClick: n(e) || !r ? void 0 : s
					}, i.a.createElement(p.a, null, i.a.createElement(k, null, "".concat(e.humanIndex, ".")), i.a.createElement(O, null, "".concat(e.rule.shortName)), i.a.createElement("div", null, !n(e) && r && (t.isVisible ? i.a.createElement(b.a, {
						className: f.a.Chevron
					}) : i.a.createElement(m.a, {
						className: f.a.Chevron
					})))), t.isVisible && i.a.createElement(y, null, e.rule.descriptionRichText ? i.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: v
					}) : e.rule.descriptionHtml ? i.a.createElement(w, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const C = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", "r/".concat(e.subredditName))], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return i.a.createElement(j, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(C, {
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
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/selectors/telemetry.ts");
			const p = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(b.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, b.defaults);
			var h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(O.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(O.a)(e).widgetColors.sidebarWidgetHeaderColor,
				v = e => {
					const t = y(e);
					return Object(k.f)(t)
				},
				j = e => {
					const t = w(e);
					return Object(k.f)(t)
				};
			var C = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = s.n(C);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = Object(u.t)(), S = Object(i.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.m)(e, t) || void 0,
						n = t.redditStyle || Object(f.m)(e, {
							subredditId: s
						}),
						r = Object(x.S)(e);
					return n || r
				},
				nigtmode: x.S,
				subredditId: u.m,
				topPostVariant: g.d
			}));
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(p(e, t)), this.setState({
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = v(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: i,
						onClick: a,
						title: d,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, b = s ? E.a.widgetContentOnly : E.a.widgetContent, p = !n && this.props.styles, h = p ? this.getWidgetBackgroundStyles() : {}, g = p ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: n,
							[E.a.clickable]: !!a,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: h
					}, d && r.a.createElement("div", {
						className: E.a.widgetHeader,
						style: g
					}, r.a.createElement("div", {
						className: Object(o.a)(E.a.widgetTitle, l)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), i), r.a.createElement("div", {
						className: Object(o.a)(b, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.n, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, _._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = N(S(Object(d.a)(Object(l.c)(I))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Pe
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/linkMatchers/index.ts"),
				p = s("./src/reddit/models/Image/index.tsx"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/Widgets/Button/index.m.less"),
				O = s.n(k);
			const y = (e, t, s) => {
					let n = {},
						r = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: r,
							textColor: i
						} = e;
						return t && (n = i = s, r = "transparent"), {
							"--widget-button-background-color": "".concat(r || "transparent"),
							"--widget-button-border": "1px solid ".concat(n),
							"--widget-button-color": "".concat(i || n)
						}
					})(e, t, s);
					const i = e.hoverState || e;
					if (i.kind === g.f.Image) r = {
						"--widget-button-hover-background-image": "url('".concat(i.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = i;
						t && (e = a = s, n = "transparent"), r = {
							"--widget-button-hover-background-color": "".concat(n || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(a || e)
						}
					}
					return Object.assign(Object.assign({}, n), r)
				},
				w = e => e.kind === g.f.Image ? O.a.imageButton : O.a.textButton,
				v = e => {
					const t = Object(g.n)(e),
						s = Object(b.g)(b.e, t);
					return s ? s.url : e.url
				},
				j = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(h.a)(e).button;
					return r.a.createElement(c.i, {
						className: w(t),
						style: y(t, s, n)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? O.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: O.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				C = e => r.a.createElement(l.b, {
					href: v(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(j, e)),
				E = m.a.wrapped(o.a, "RawHTMLDisplay", O.a);
			var _ = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: f.m,
					isNightmodeOn: x.S
				}))(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(E, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== p.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== p.c)).map(t => r.a.createElement(C, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				N = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./src/lib/humanizeDate/index.ts"),
				I = s("./src/reddit/controls/TextButton/index.tsx"),
				T = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				P = s.n(T);
			const R = 100,
				L = {
					isExpanded: !1
				},
				M = m.a.wrapped(o.a, "RawHTMLDisplay", P.a),
				D = m.a.div("EventContainer", P.a),
				W = m.a.div("EventTitle", P.a),
				B = m.a.div("EventDate", P.a),
				F = m.a.div("EventLocation", P.a),
				A = m.a.div("EventDescription", P.a),
				U = m.a.wrapped(I.a, "ToggleDescription", P.a);
			class H extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = L
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > R ? r.a.createElement(A, null, t.isExpanded ? e.text : e.text.slice(0, R), r.a.createElement(U, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? N.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : N.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(A, null, e.text)
				}
			}
			var V = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(D, {
					key: "".concat(s, "-").concat(t.title)
				}, r.a.createElement(W, null, t.titleHtml ? r.a.createElement(M, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(B, null, Object(S.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(F, null, t.locationHtml ? r.a.createElement(M, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(H, {
					text: t.description
				})))),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var z = Object(K.c)(e => r.a.createElement(G.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const q = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Z = Object(i.b)(q),
				J = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class X extends r.a.Component {
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = J(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, r.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var Y = Z(X),
				Q = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = s.n(Q);
			var ee = m.a.div("ImageFrame", $.a),
				te = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = s.n(te);
			var ne = m.a.img("StyledImage", se.a);
			class re extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === p.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== p.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
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
						n = r.a.createElement(ee, null, r.a.createElement(ne, {
							alt: N.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: s.url
						}));
					return s.linkUrl ? r.a.createElement(l.b, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var ie = re,
				ae = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				oe = s("./src/reddit/components/Flair/index.tsx"),
				de = s("./src/reddit/controls/InternalLink/index.tsx"),
				ce = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				le = s("./src/reddit/models/Flair/index.ts"),
				ue = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				me = s.n(ue);
			const be = m.a.div("ModeratorListItem", me.a),
				pe = m.a.div("Username", me.a),
				he = m.a.a("MessageModsLink", me.a),
				ge = m.a.wrapped(oe.b, "FlairComponent", me.a),
				fe = e => e.authorFlairType === le.f.Richtext ? {
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
				xe = e => r.a.createElement(ae.a, {
					to: "/user/".concat(e.name, "/")
				}, ke(e.name)),
				ke = e => r.a.createElement(pe, null, "u/".concat(e)),
				Oe = m.a.wrapped(de.a, "InternalLink", me.a),
				ye = m.a.div("LinkContainer", me.a);

			function we(e) {
				const {
					subredditName: t,
					widget: s
				} = e;
				return r.a.createElement(d.a, {
					styles: s.styles,
					title: N.fbt._("Moderators", null, {
						hk: "3AMICc"
					}),
					headerButton: r.a.createElement(he, {
						href: "https://reddit.com/message/compose?to=/r/".concat(t),
						target: "_blank"
					}, r.a.createElement(ce.a, null))
				}, s.mods.map(e => r.a.createElement(be, {
					key: e.name
				}, xe(e), r.a.createElement(ge, {
					flair: fe(e),
					forceSmallEmojis: !0
				}))), r.a.createElement(ye, null, r.a.createElement(Oe, {
					to: "/r/".concat(t, "/about/moderators/")
				}, N.fbt._("View All Moderators", null, {
					hk: "2DIeXE"
				}))))
			}
			var ve = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				je = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ce = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ee = s.n(Ce);
			const _e = m.a.div("WidgetContent", Ee.a),
				Ne = m.a.wrapped(o.a, "RawHTMLDisplay", Ee.a);
			var Se = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(_e, null, r.a.createElement(Ne, {
					html: e.widget.textHtml || ""
				}))),
				Ie = s("./src/reddit/components/Widgets/Base/index.tsx");
			var Te = e => r.a.createElement(Ie.b, null, "This widget hasn't been implemented yet!");

			function Pe(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return we;
						case "textarea":
							return Se;
						case "button":
							return _;
						case "subreddit-rules":
							return je.b;
						case "community-list":
							return z;
						case "calendar":
							return V;
						case "image":
							return ie;
						case "custom":
							return Y;
						case "post-flair":
							return ve.a;
						default:
							return Te
					}
				}(e.widget);
				return r.a.createElement(t, {
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
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				o = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: p.b,
				crosspostRoot: b.d,
				crosspostSubredditOrProfile: b.e,
				currentUser: p.i,
				flairStyleTemplate: c.R,
				hideNSFWPref: p.z,
				isActive: b.j,
				moderatorPermissions: u.i,
				modModeEnabled: c.P,
				post: b.N,
				showEditFlair: m.a,
				subredditOrProfile: b.ab,
				userIsOp: p.hb
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						} = t;
						return e(Object(a.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const n = t === d.a.upvoted ? Object(i.S)(s) : Object(i.q)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(i.Q)(s)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, s), e), t), {
				onFlairChanged: s => {
					let {
						previewFlair: n,
						selectedTemplateId: r
					} = s;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: n,
						selectedTemplateId: r
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
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
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
			var d = e => r.a.createElement("svg", o({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), r.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, r.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, r.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var b = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const p = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: a,
						"data-redditstyle": o
					} = t, d = b(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, s) => {
						const n = !(!t && !s);
						let r = "";
						return r = e ? n ? u.a.mDisabledRedditStyle : u.a.mDisabled : n ? u.a.mActiveRedditStyle : u.a.mActive
					})(n, a, o);
					return r.a.createElement(e, m({
						className: Object(i.a)(u.a.Checkbox, c, s)
					}, d))
				},
				h = p(c.a),
				g = p(d);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? h : a.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(i.a)(u.a.CheckboxSizing, e.className),
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
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				b = s.n(m),
				p = s("./src/reddit/controls/Dropdown/row.m.less"),
				h = s.n(p);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			class x extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
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
					}, e.displayText)) : a.a.createElement(u.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(o.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(c.a, {
						className: b.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = f(e, ["className"]);
				const n = Object(o.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !s.noHover,
					[h.a.mIsSelected]: s.isSelected,
					[h.a.topics]: s.isTopicsStyle
				});
				return a.a.createElement(x, g({
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
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(i);
			t.a = n.a.wrapped(r.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/graphql/operations/SubredditWiki.json");
			const i = (e, t) => Object(n.a)(e, Object.assign(Object.assign({}, r), {
				variables: t
			}))
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
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = s.n(r);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				o = e => Object(n.a)(i.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
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
				r = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				i = () => e => ({
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
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => Object.assign(Object.assign({}, r.defaults(e)), {
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: Object.assign(Object.assign({}, r.subredditPowerups(e)), {
						freeCount: t,
						paidCount: s
					})
				}),
				a = () => e => Object.assign(Object.assign({
					source: "postlist",
					action: "click",
					noun: "powerups_tier_cta"
				}, i(e)), {
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				o = e => t => Object.assign(Object.assign({
					source: e,
					action: "click",
					noun: "powerups_user_badge"
				}, i(t)), {
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				d = () => e => Object.assign(Object.assign({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta"
				}, i(e)), {
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				c = (e, t) => s => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step"
				}, i(s, e, t)),
				l = (e, t) => s => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step"
				}, i(s, e, t)),
				u = (e, t) => s => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "receipt_step"
				}, i(s, e, t))
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/sortBy.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/wiki.ts");
			const a = e => {
				return r()(e, e => "".concat(e.path, "/").startsWith("".concat(i.i, "/")) ? "\0".concat(e.path) : e.path).filter(e => !i.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					s = [];
				return a(e).forEach(e => {
					const n = Object.assign(Object.assign({}, e), {
							children: []
						}),
						r = n.parent ? t.get(n.parent) : null;
					r ? r.children.push(n) : s.push(n), t.set(n.path, n)
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
					wikiPageName: r
				} = e;
				return "[".concat(n, "]--[").concat(r, "]--[rev1:").concat(s, "]--[rev2:").concat(t, "]").toLowerCase()
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
			const r = new RegExp("^[-\\w]+(?:\\/[-\\w]+){0,".concat(n.c, "}$")),
				i = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!i.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const s = e.toLowerCase(),
						i = s.split("/")[0],
						o = n.b.has(i),
						d = n.f.has(i) && s !== n.h && s !== n.k;
					if (o || d) return a.RestrictedPageName;
					if (!r.test(s)) return a.InvalidPageName;
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
				return r
			}));
			const n = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				r = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
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
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("dropdownTriangle"), " ").concat(e.className)
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
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("envelope"), " ").concat(e.className)
			}), "Envelope", o.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", o.a);
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
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), r.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), r.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/pages/shared.ts"),
				d = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var p = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, n = Object(m.a)(s, u.O.HOT, {});
					return r.a.createElement(b.a, {
						listingKey: n,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				h = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				g = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				f = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/constants/wiki.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				w = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				v = s("./src/reddit/components/JumpToContent/index.tsx"),
				j = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				C = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				E = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				_ = s.n(E);

			function N(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return n.createElement(n.Fragment, null, n.createElement(v.a, null), n.createElement(C.a, {
					isModHub: !1,
					className: _.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), n.createElement(j.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var S = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				I = s.n(S);
			class T extends r.a.Component {
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
						wikiSubRoute: i,
						wikiPageName: a
					} = s, o = n[x.x], d = n[x.y], c = x.z in n;
					switch (i) {
						case k.m.Create:
						case k.m.Edit:
							return r.a.createElement(g.a, {
								contentClassName: I.a.wikiPageEditorContent,
								isCreation: i === k.m.Create,
								subredditName: t,
								topBarClassName: I.a.communityWikiTopBar,
								wikiPageName: a
							});
						case k.m.Revisions:
							return r.a.createElement(w.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? r.a.createElement(h.a, {
								comparisonRevisionId: Object(y.a)(d),
								revisionId: Object(y.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? r.a.createElement(f.a, {
								revisionId: o ? Object(y.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? r.a.createElement(N, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var P = Object(O.t)()(T),
				R = s("./src/reddit/constants/componentSizes.ts"),
				L = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				M = s("./src/reddit/layout/page/Listing/index.tsx"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const B = Object(O.t)(),
				F = Object(i.b)(() => Object(a.c)({
					contentGateInfo: (e, t) => {
						let {
							match: s
						} = t;
						return Object(W.e)(e, s.params.subredditName)
					},
					layout: O.N,
					over18Pref: W.V,
					subreddit: (e, t) => {
						let {
							match: s
						} = t;
						return Object(D.B)(e, {
							subredditName: s.params.subredditName || k.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.subredditName || k.e
					},
					wikiPageName: (e, t) => {
						let {
							match: s
						} = t;
						return s.params.wikiPageName || k.i
					}
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class A extends r.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: n
					} = this.props, i = !!s && s.isNSFW && !W.V, a = Object(L.a)(t, i, n);
					if (a) return r.a.createElement(c.default, a);
					const o = "/r/".concat(n, "/");
					return r.a.createElement(M.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: R.i,
						navBar: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : n,
							maxWidth: R.i,
							subredditOrProfile: s,
							url: o
						}), r.a.createElement(d.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: n,
							subredditUrl: o
						})),
						content: r.a.createElement(P, {
							subredditName: n
						}),
						sidebar: s && r.a.createElement(p, {
							subreddit: s,
							subredditName: n
						})
					})
				}
			}
			t.default = B(F(A))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = e => n.U.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: i.H,
				experimentName: n.T
			})
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return be
			})), s.d(t, "a", (function() {
				return pe
			})), s.d(t, "c", (function() {
				return he
			})), s.d(t, "p", (function() {
				return ge
			})), s.d(t, "q", (function() {
				return fe
			})), s.d(t, "o", (function() {
				return xe
			})), s.d(t, "n", (function() {
				return ke
			})), s.d(t, "i", (function() {
				return Oe
			})), s.d(t, "d", (function() {
				return ye
			})), s.d(t, "j", (function() {
				return we
			})), s.d(t, "m", (function() {
				return ve
			})), s.d(t, "k", (function() {
				return je
			})), s.d(t, "l", (function() {
				return Ce
			})), s.d(t, "e", (function() {
				return Ee
			})), s.d(t, "h", (function() {
				return _e
			})), s.d(t, "f", (function() {
				return Ne
			})), s.d(t, "g", (function() {
				return Se
			}));
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				i = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/wiki/wikiDiff/constants.ts");
			const d = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.b: {
							const {
								key: s,
								htmlDiff: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: {
									htmlDiff: n
								}
							})
						}
						case o.c: {
							const {
								key: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									pending: !0
								})
							})
						}
						case o.a: {
							const {
								key: s,
								error: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), {
									pending: !1,
									error: n
								})
							})
						}
						default:
							return e
					}
				},
				l = s("./src/reddit/actions/pages/subredditWiki/constants.ts");
			const u = {};
			var m = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b:
							const s = t.payload,
								{
									subredditWiki: n,
									options: r
								} = s,
								i = n && n.directory;
							if (!i) return e;
							const {
								subredditName: a
							} = r;
							return Object.assign(Object.assign({}, e), {
								[a.toLowerCase()]: i
							});
						default:
							return e
					}
				},
				b = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const p = {};
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const {
								subredditWiki: s,
								pageKey: n
							} = t.payload, {
								page: r
							} = s;
							return n && r ? Object.assign(Object.assign({}, e), {
								[n]: r
							}) : e
						}
						case b.a: {
							const {
								pageKey: s,
								page: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				g = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const f = {};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case g.c: {
							const {
								settings: s,
								pageKey: n
							} = t.payload;
							return s ? Object.assign(Object.assign({}, e), {
								[n]: s
							}) : e
						}
						case g.d: {
							const {
								isVisible: s,
								editPermissions: n,
								pageKey: r
							} = t.payload, i = e[r];
							return i ? Object.assign(Object.assign({}, e), {
								[r]: Object.assign(Object.assign({}, i), {
									isVisible: s,
									editPermissions: n
								})
							}) : e
						}
						case g.b: {
							const {
								editorsInfo: s,
								afterToken: n,
								pageKey: r
							} = t.payload, i = e[r];
							if (!i) return e;
							const a = [...i.editorsInfo, ...s];
							return Object.assign(Object.assign({}, e), {
								[r]: Object.assign(Object.assign({}, i), {
									editorsInfo: a,
									afterToken: n
								})
							})
						}
						case g.a: {
							const {
								username: s,
								pageKey: n
							} = t.payload, r = e[n];
							if (!r) return e;
							const i = r.editorsInfo.filter(e => e.username !== s);
							return Object.assign(Object.assign({}, e), {
								[n]: Object.assign(Object.assign({}, r), {
									editorsInfo: i
								})
							})
						}
						default:
							return e
					}
				},
				k = s("./src/lib/omitKey/index.ts");
			const O = {};
			var y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.b: {
						const {
							key: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case b.d:
					case b.c: {
						const {
							key: s
						} = t.payload;
						return Object(k.a)(e, s)
					}
					default:
						return e
				}
			};
			const w = {};
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case b.d:
						case b.b:
						case b.c: {
							const {
								key: s
							} = t.payload, n = t.type === b.d;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				j = Object(a.c)({
					error: y,
					pending: v
				}),
				C = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const E = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case b.c: {
						const {
							key: s,
							options: n,
							pageInfo: r,
							revisionsIds: i
						} = t.payload, a = e[s], o = n.after && a ? [...a.ids, ...i] : i;
						return Object.assign(Object.assign({}, e), {
							[s]: {
								ids: o,
								pageInfo: r
							}
						})
					}
					case b.a: {
						const {
							page: {
								revision: s
							},
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: r
						} = t.payload, i = e[n];
						return i && s ? Object.assign(Object.assign({}, Object(k.a)(e, r)), {
							[n]: Object.assign(Object.assign({}, i), {
								ids: [s.id, ...i.ids]
							})
						}) : e
					}
					case C.a: {
						const {
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: n
						} = t.payload, r = Object.assign({}, e);
						return delete r[s], delete r[n], r
					}
					default:
						return e
				}
			};
			const N = {};
			var S = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case l.b: {
							const {
								subredditWiki: {
									page: s
								}
							} = t.payload, n = s && s.revision;
							return n && !e[n.id] ? Object.assign(Object.assign({}, e), {
								[n.id]: n
							}) : e
						}
						case b.c: {
							const {
								revisions: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						case b.a: {
							const {
								page: s
							} = t.payload, n = s.revision;
							return n ? Object.assign(Object.assign({}, e), {
								[n.id]: n
							}) : e
						}
						case b.e: {
							const {
								revisionId: s,
								isHidden: n
							} = t.payload, r = e[s];
							return r ? Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, r), {
									isHidden: n
								})
							}) : e
						}
						default:
							return e
					}
				},
				I = Object(a.c)({
					api: j,
					listings: _,
					models: S
				}),
				T = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const P = {};
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.c:
					case T.a: {
						const {
							subredditName: s,
							afterToken: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const L = {};
			var M = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.b: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case T.d:
					case T.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(k.a)(e, s)
					}
					default:
						return e
				}
			};
			const D = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.d:
						case T.c:
						case T.b: {
							const {
								subredditName: s
							} = t.payload, n = t.type === T.d;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				B = Object(a.c)({
					error: M,
					pending: W
				});
			const F = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.c:
						case T.a: {
							const {
								subredditName: s,
								bannedContributors: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), n)
							})
						}
						case T.e: {
							const {
								subredditName: s,
								bannedContributor: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), n)
							})
						}
						case T.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload, r = Object(k.a)(e[s], n);
							return Object.assign(Object.assign({}, e), {
								[s]: r
							})
						}
						default:
							return e
					}
				},
				U = s("./node_modules/lodash/uniq.js"),
				H = s.n(U);
			const V = {};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.c:
						case T.a: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: H()([...e[s] || [], ...n])
							})
						}
						case T.e: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: H()([...n, ...e[s] || []])
							})
						}
						case T.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: (e[s] || []).filter(e => e !== n)
							})
						}
						default:
							return e
					}
				},
				G = Object(a.c)({
					afterToken: R,
					api: B,
					models: A,
					userOrder: K
				});
			const z = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case T.g: {
							const {
								subredditName: s,
								bannedContributor: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				Z = Object(a.c)({
					listing: G,
					search: q
				}),
				J = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const X = {};
			var Y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J.c:
					case J.a: {
						const {
							subredditName: s,
							afterToken: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					default:
						return e
				}
			};
			const Q = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J.b: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case J.d:
					case J.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(k.a)(e, s)
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J.d:
						case J.c:
						case J.b: {
							const {
								subredditName: s
							} = t.payload, n = t.type === J.d;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				se = Object(a.c)({
					error: $,
					pending: te
				});
			const ne = {};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J.c:
					case J.a: {
						const {
							subredditName: s,
							contributors: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), n)
						})
					}
					case J.e: {
						const {
							subredditName: s,
							contributor: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: Object.assign(Object.assign({}, e[s]), n)
						})
					}
					case J.f: {
						const {
							subredditName: s,
							userId: n
						} = t.payload, r = Object(k.a)(e[s], n);
						return Object.assign(Object.assign({}, e), {
							newState: r
						})
					}
					default:
						return e
				}
			};
			const ie = {};
			var ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J.c:
						case J.a: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: H()([...e[s] || [], ...n])
							})
						}
						case J.e: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: [...n, ...e[s] || []]
							})
						}
						case J.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: (e[s] || []).filter(e => e !== n)
							})
						}
						default:
							return e
					}
				},
				oe = Object(a.c)({
					afterToken: Y,
					api: se,
					models: re,
					userOrder: ae
				});
			const de = {};
			var ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : de,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J.g: {
							const {
								subredditName: s,
								contributor: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				le = Object(a.c)({
					listing: oe,
					search: ce
				}),
				ue = Object(a.c)({
					diff: c,
					directory: m,
					pages: h,
					pageSettings: x,
					revisions: I,
					wikiBannedContributors: Z,
					wikiContributors: le
				});
			Object(i.a)({
				pages: {
					subredditWiki: ue
				}
			});
			const me = [],
				be = (e, t) => {
					const {
						subredditName: s
					} = t;
					if (e.pages && e.pages.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				pe = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.subreddits.api.wiki.pending[s.toLowerCase()]
				},
				he = (e, t) => {
					const s = Object(r.a)(t);
					if (e.pages && e.pages.subredditWiki) return e.pages.subredditWiki.pages[s]
				},
				ge = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.pages.subredditWiki.revisions.listings[s]
				},
				fe = (e, t) => {
					let {
						listingKey: s
					} = t;
					return !!e.pages.subredditWiki.revisions.api.pending[s]
				},
				xe = (e, t) => {
					let {
						listingKey: s
					} = t;
					return !!e.pages.subredditWiki.revisions.api.error[s]
				},
				ke = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				Oe = (e, t) => {
					let {
						key: s
					} = t;
					return e.pages.subredditWiki.diff[s]
				},
				ye = (e, t) => {
					const s = Object(r.a)(t);
					return e.pages.subredditWiki.pageSettings[s]
				},
				we = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[s.toLowerCase()]
				},
				ve = Object(n.a)((e, t) => {
					let {
						subredditName: s
					} = t;
					const n = s.toLowerCase(),
						r = e.pages.subredditWiki.wikiContributors.listing,
						i = r.userOrder[n],
						a = r.models[n];
					return i ? i.map(e => a[e]) : me
				}),
				je = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[s.toLowerCase()]
				},
				Ce = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[s.toLowerCase()]
				},
				Ee = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[s.toLowerCase()]
				},
				_e = Object(n.a)((e, t) => {
					let {
						subredditName: s
					} = t;
					const n = s.toLowerCase(),
						r = e.pages.subredditWiki.wikiBannedContributors.listing,
						i = r.userOrder[n],
						a = r.models[n];
					return i ? i.map(e => a[e]) : me
				}),
				Ne = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[s.toLowerCase()]
				},
				Se = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[s.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.9bad1fb685fe4cfd28c5.js.map