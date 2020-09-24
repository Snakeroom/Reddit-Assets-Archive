// https://www.redditstatic.com/desktop2x/SubredditWiki.f2fdc434de0556e3c6c8.js
// Retrieved at 9/24/2020, 1:00:09 PM by Reddit Dataminer v1.0.0
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
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
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
				p = r()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = r()().set({
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
				x = r()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				k = p.normalize;
			p.normalize = e => {
				k.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const f = (e, t) => {
					return (x.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				O = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				y = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				w = e => {
					const t = p.match(e);
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
				return F
			})), s.d(t, "subredditWikiDataLoaded", (function() {
				return U
			})), s.d(t, "subredditWikiDataFailed", (function() {
				return H
			})), s.d(t, "fetchSubredditWikiData", (function() {
				return q
			})), s.d(t, "handleWikiRedirects", (function() {
				return G
			})), s.d(t, "subredditWikDataRequested", (function() {
				return Y
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
			var p = s("./src/reddit/actions/ads/index.ts"),
				b = s("./src/reddit/actions/pages/subreddit.ts"),
				h = s("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				k = s("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				f = s("./src/lib/makeGqlRequest/index.ts"),
				O = s("./src/graphql/operations/WikiComparisonDiff.json"),
				y = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var w = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				v = s("./src/reddit/selectors/subredditWiki.ts"),
				E = s("./src/reddit/actions/wiki/wikiDiff/constants.ts");
			const j = Object(d.a)(E.c),
				C = Object(d.a)(E.b),
				N = Object(d.a)(E.a),
				S = e => async (t, s, n) => {
					const r = s(),
						i = Object(w.a)(e),
						a = Object(v.i)(r, {
							key: i
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: i
					};
					t(j(d));
					const c = await ((e, t) => Object(f.a)(e, Object.assign(Object.assign({}, O), {
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
					return t(l ? N(Object.assign(Object.assign({}, d), {
						error: l
					})) : C(Object.assign(Object.assign({}, d), {
						htmlDiff: u
					}))), !l
				};
			var A = s("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				I = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				P = s("./src/reddit/constants/parameters.ts"),
				T = s("./src/reddit/constants/wiki.ts"),
				R = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				L = s("./src/reddit/helpers/brandSafety/index.ts"),
				B = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				_ = s("./src/reddit/models/Toast/index.ts"),
				W = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				M = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				D = s("./src/reddit/selectors/subreddit.ts");
			const F = Object(d.a)(h.c),
				U = Object(d.a)(h.b),
				H = Object(d.a)(h.a),
				K = (e, t, s, n) => {
					return s === T.j ? V(e, t) : !!Object(v.c)(e, {
						subredditName: t,
						wikiPageName: s,
						revisionId: n
					})
				},
				V = (e, t) => !!Object(v.b)(e, {
					subredditName: t
				}),
				q = e => async (t, s, r) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === T.j, l = Object.assign(Object.assign({}, e), {
						includePageData: e.includePageData && !c
					}), u = d ? Object(B.a)(Object.assign(Object.assign({}, e), {
						wikiPageName: d
					})) : void 0;
					t(F({
						options: l,
						pageKey: u
					}));
					const m = await Object(R.a)(r.gqlContext(), l),
						p = m.body,
						b = m.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return m.ok && b ? t(U({
						options: l,
						pageKey: u,
						subredditWiki: b
					})) : (t(H({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.E.NOT_FOUND_ERROR
						}
					})), a && t(Object(g.e)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: _.b.Error,
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: q(e)
					}))), !(!m.ok || !i()(p.data.subreddit)) || !(!m.ok || !b)
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
						return !!(l || u && !d) || (await s(Object(b.i)(a, e, i, t)), !n().listings.postOrder.api.error[a])
					}
				}, G = e => async (t, s) => {
					const {
						params: n,
						url: r
					} = e, {
						wikiPageName: i
					} = n, o = Object(M.a)(r, n);
					let d = !1;
					return T.l.includes(i || "") ? (await (async (e, t) => {
						const s = "".concat(l.a.oldRedditUrl).concat(Object(m.b)(e));
						window.location.href = s
					})(e.url), d = !0) : r !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Y = function e(t, s) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (i, a, d) => {
						const {
							subredditName: c = T.e,
							wikiPageName: l,
							wikiSubRoute: u
						} = t, m = s[P.z], p = s[P.A], b = m ? Object(y.a)(m) : void 0, h = p ? Object(y.a)(p) : void 0, f = l === T.j, O = u === T.m.Revisions;
						let w = !1,
							v = !1;
						if (r) {
							const {
								pageName: e
							} = t;
							w = e === o.Qb.WikiContributors, v = e === o.Qb.WikiBanned
						}
						const E = a(),
							j = (f || r) && !V(E, c),
							C = !!l && !K(E, c, l, b),
							N = [];
						N.push(i(z(c))), (j || C) && N.push(i(q({
							includeDirectory: j,
							includePageData: C,
							revisionId: b,
							subredditName: c,
							wikiPageName: l
						}))), u === T.m.Settings && l && N.push(i(Object(A.c)(c, l))), l && b && h && N.push(i(S({
							comparisonRevisionId: h,
							revisionId: b,
							subredditName: c,
							wikiPageName: l
						}))), O && N.push(i(Object(I.c)({
							isRecent: !l,
							wikiPageName: l,
							subredditName: c
						}))), w && N.push(i(Object(k.e)(c))), v && N.push(i(Object(x.e)(c))), (await Promise.all(N)).every(Boolean) || i(Object(g.e)({
							kind: _.b.Error,
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
					if (await t(G(e))) return;
					const {
						params: n,
						queryParams: r
					} = e, i = n.subredditName || T.e;
					t(u.l({
						title: n.wikiPageName ? "".concat(n.wikiPageName, " - ").concat(i) : "wiki - ".concat(i)
					})), await t(Y(n, r));
					const a = Object(D.B)(s(), {
							subredditName: i
						}),
						o = s();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(W.a.SUBREDDIT))
					}), t(Object(p.d)({
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
				return f
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return N
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
			var p = e => {
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
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				k = Object(i.a)(h.b),
				f = e => async (t, s, n) => {
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
							const s = p(n);
							t(x(Object.assign(Object.assign({}, s), {
								subredditName: e.toLowerCase()
							})))
						}
					} else {
						const s = a.error || {
							type: r.E.UNKNOWN_ERROR
						};
						t(k({
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
							const n = p(t.data.subreddit.wiki);
							s(O(Object.assign(Object.assign({}, n), {
								subredditName: e.toLowerCase()
							})))
						}
					} else s(Object(a.e)({
						kind: b.b.Error,
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
							kind: b.b.SuccessMod,
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
							const t = p(i.data.subreddit.wiki);
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
							kind: b.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return l.ok
				}, E = Object(i.a)(h.f), j = (e, t) => async (s, i, d) => {
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
						kind: b.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), s(E({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(a.e)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e, t)
					})), l.ok
				}, C = Object(i.a)(h.g), N = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								r = Object.keys(n.bannedContributors)[0];
							s(C({
								subredditName: e.toLowerCase(),
								bannedContributor: n.bannedContributors[r]
							}))
						}
					} else s(Object(a.e)({
						kind: b.b.Error,
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
				return f
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return N
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
			var p = e => {
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
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				k = Object(i.a)(h.b),
				f = e => async (t, s, n) => {
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
							const s = p(n);
							t(x(Object.assign(Object.assign({}, s), {
								subredditName: e.toLowerCase()
							})))
						}
					} else {
						const s = a.error || {
							type: r.E.UNKNOWN_ERROR
						};
						t(k({
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
							const n = p(t.data.subreddit.wiki);
							s(O(Object.assign(Object.assign({}, n), {
								subredditName: e.toLowerCase()
							})))
						}
					} else s(Object(a.e)({
						kind: b.b.Error,
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
							kind: b.b.SuccessMod,
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
							const t = p(o.data.subreddit.wiki),
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
							kind: b.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return l.ok
				}, E = Object(i.a)(h.f), j = (e, t) => async (s, i, d) => {
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
						kind: b.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), s(E({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(a.e)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e, t)
					})), l.ok
				}, C = Object(i.a)(h.g), N = (e, t) => async (s, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								r = Object.keys(n.contributors)[0];
							s(C({
								subredditName: e.toLowerCase(),
								contributor: n.contributors[r]
							}))
						}
					} else s(Object(a.e)({
						kind: b.b.Error,
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
				return E
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "d", (function() {
				return A
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
				p = s("./src/reddit/models/SubredditWikiPage/index.ts");
			const b = (e, t) => Object(c.a)(e, Object.assign(Object.assign({}, m), {
					variables: t
				})),
				h = {
					[p.a.Inherit]: "0",
					[p.a.Contributors]: "1",
					[p.a.Mods]: "2"
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
				x = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(i.a)(O.c),
				w = (e, t) => async (s, n, r) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						o = await b(r.gqlContext(), i),
						d = Object(f.G)(n(), e);
					if (Object(f.U)(n(), d) || await s(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							s(y({
								pageKey: Object(x.a)(i),
								settings: e
							}))
						}
					}
					return o.ok
				}, v = Object(i.a)(O.b), E = (e, t, s) => async (r, i, a) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: s
						},
						c = await b(a.gqlContext(), d);
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
								pageKey: Object(x.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else r(Object(o.e)({
						kind: k.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e, t, s)
					}));
					return c.ok
				}, j = Object(i.a)(O.d), C = e => {
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
						return c.ok && e(j({
							editPermissions: t,
							isVisible: s,
							pageKey: Object(x.a)({
								wikiPageName: n,
								subredditName: i
							})
						})), c.ok
					}
				}, N = e => {
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
							kind: k.b.SuccessCommunity,
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
								kind: k.b.Error,
								text: s
							}))
						}
						return m.ok
					}
				}, S = Object(i.a)(O.a), A = e => {
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
							kind: k.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(S({
							username: s,
							pageKey: Object(x.a)({
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
				return j
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "b", (function() {
				return A
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
				p = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var b = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t.subredditName, "/api/wiki/hide"),
				method: r.db.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t.subredditName, "/api/wiki/revert"),
				method: r.db.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
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
				x = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				k = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				f = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/subredditWiki.ts"),
				y = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const w = Object(i.a)(y.d),
				v = Object(i.a)(y.c),
				E = Object(i.a)(y.b),
				j = e => async (t, s, i) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = s(), h = Object(x.a)(e), k = Object(O.p)(b, {
						listingKey: h
					});
					if (!o && !!k) return !0;
					const y = k && k.pageInfo.endCursor || void 0;
					if (!(!k || k.pageInfo.hasNextPage)) return !0;
					const C = {
							after: y,
							isRecent: u,
							subredditName: m,
							wikiPageName: p
						},
						N = {
							key: h,
							options: C
						};
					t(w(N));
					const S = await ((e, t) => Object(d.a)(e, Object.assign(Object.assign({}, c), {
						variables: t
					})))(i.gqlContext(), C);
					if (S.ok) {
						const e = S.body;
						if (e.data.subreddit) {
							const s = g(e.data);
							t(v(Object.assign(Object.assign({}, N), s)))
						}
					} else {
						const s = S.error || {
							type: r.E.UNKNOWN_ERROR
						};
						t(E(Object.assign(Object.assign({}, N), {
							error: s
						}))), l && t(Object(a.e)({
							kind: f.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: j(e)
						}))
					}
					return S.ok
				}, C = Object(i.a)(y.a), N = e => async (t, s, r) => {
					const {
						subredditName: i,
						wikiPageName: d
					} = e, c = Object(k.a)(Object.assign(Object.assign({}, e), {
						revisionId: void 0
					})), l = Object(x.a)(Object.assign(Object.assign({}, e), {
						isRecent: !1
					})), u = Object(x.a)(Object.assign(Object.assign({}, e), {
						isRecent: !0
					})), m = Object(O.p)(s(), {
						listingKey: l
					}), p = m && m.ids[0];
					if ((await h(r.apiContext(), e)).ok) {
						const e = (await Object(o.a)(r.gqlContext(), {
								includePageData: !0,
								subredditName: i,
								wikiPageName: d
							})).body,
							s = e.data.subreddit && e.data.subreddit.wiki,
							m = s && s.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(a.e)({
							kind: f.b.SuccessCommunityGreen,
							text: n.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(C({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: i,
							wikiPageName: d
						}))
					} else t(Object(a.e)({
						kind: f.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: N(e)
					}))
				}, S = Object(i.a)(y.e), A = e => async (t, s, r) => {
					const i = await b(r.apiContext(), e);
					if (i.ok) {
						const s = i.body.status;
						t(S({
							revisionId: e.revisionId,
							isHidden: s
						}))
					} else t(Object(a.e)({
						kind: f.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: N(e)
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
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				u = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				m = s("./src/reddit/components/SubredditNav/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				k = s("./src/reddit/constants/tracking.ts"),
				f = s("./src/reddit/selectors/telemetry.ts");
			var O = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				y = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				w = s("./src/reddit/selectors/widgets.ts"),
				v = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				E = s.n(v);
			const j = c.a.wrapped(O.a, "Planet", E.a),
				C = c.a.img("SubredditIcon", E.a),
				N = Object(a.c)({
					spPollsEnabled: g.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(y.a)(e, {
							subredditId: s
						})
					},
					widget: w.f
				});
			t.a = Object(i.b)(N)(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					n = e.subreddit ? e.subreddit.url : e.subredditUrl,
					i = e.subreddit ? e.subreddit.title : "",
					a = e.subreddit && Object(x.a)(e),
					d = !(!e.theme || !a),
					c = s.charAt(0).toUpperCase() + s.slice(1),
					g = !!e.subreddit && e.subredditInlineEditingEnabled,
					O = Object(o.a)(E.a.SubredditIcon, E.a.editableIcon, {
						[E.a.emptyEditableIcon]: !a
					}),
					y = r.a.createElement(u.a, {
						className: O,
						subreddit: e.subreddit,
						iconUrl: a || void 0,
						inTopBar: !0
					}),
					w = d ? r.a.createElement(C, {
						src: a || void 0
					}) : r.a.createElement(j, null),
					v = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					N = e.layout ? e.layout === b.g.Large ? "".concat(984, "px") : "100%" : "".concat(1086, "px");
				return r.a.createElement("div", {
					className: E.a.container,
					style: {
						maxWidth: N
					}
				}, r.a.createElement("div", {
					className: E.a.subredditMetaContainer
				}, g ? y : w, r.a.createElement("div", {
					className: Object(o.a)(E.a.textContainer, {
						[E.a.textContainerNoIcon]: !d
					})
				}, r.a.createElement("div", {
					className: E.a.text
				}, r.a.createElement("h1", {
					className: E.a.title
				}, i || c), !!i && r.a.createElement("h2", {
					className: E.a.description
				}, "r/", s)), r.a.createElement("div", {
					className: E.a.subscribeButtonContainer
				}, r.a.createElement(p.a, {
					className: E.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign(Object.assign({}, f.defaults(t)), {
							source: "id_banner",
							action: k.c.CLICK,
							noun: e,
							subreddit: f.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: s,
						type: h.a.SUBREDDIT
					},
					small: !0
				})), e.subreddit && r.a.createElement(l.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), v && r.a.createElement(m.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: n,
					subredditId: t,
					subredditNavContainerClassName: E.a.subredditNavContainer
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
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/Footer/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = p.a.div("FooterContainer", h.a), k = p.a.div("UserAgreement", h.a), f = p.a.a("UserAgreementLink", h.a), O = p.a.a("PrivacyLink", h.a);
			var y = () => i.a.createElement(x, null, i.a.createElement(k, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", i.a.createElement(f, {
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
				E = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/lodash/flatMap.js")),
				j = s.n(E),
				C = s("./src/lib/linkMatchers/index.ts"),
				N = s("./src/lib/linkMatchers/customLinks.ts"),
				S = s("./src/reddit/controls/OutboundLink/index.tsx");
			const A = /\[(.+?)\]\((.+?)\)/g,
				I = e => {
					const t = e.split(A);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, r, i] = t.slice(n, n + 3);
						s.push(e), s.push([i, r])
					}
					return s
				};
			var P = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, I)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = C.e.add(N.g.subreddit.prefix, N.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const r of t) s.push(e.slice(n ? n.lastIndex : 0, r.index)), n = r, s.push([r.url, r.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, r] = t;
							return i.a.createElement(S.b, {
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
				T = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				L = s("./src/reddit/models/ContentGate.ts"),
				B = s("./src/reddit/selectors/meta.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/ContentGate/index.m.less"),
				M = s.n(W);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = p.a.div("ButtonsContainer", M.a), U = p.a.div("Container", M.a), H = p.a.div("Description", M.a), K = p.a.div("PrivateSubredditDetails", M.a), V = p.a.div("PrivateSubredditDescription", M.a), q = p.a.h3("PrivateSubredditName", M.a), z = p.a.a("Link", M.a), G = p.a.wrapped(R.h, "LinkRouterButton", M.a), Y = p.a.wrapped(R.g, "LinkButton", M.a), J = p.a.wrapped(R.k, "SecondaryLinkRouterButton", M.a), X = p.a.wrapped(R.j, "SecondaryLinkButton", M.a), Q = p.a.wrapped(G, "GoHomeLinkButton", M.a), Z = p.a.img("Image", M.a), $ = p.a.img("ImagePlaceholder", M.a), ee = p.a.wrapped(G, "LeftLinkRouterButton", M.a), te = p.a.wrapped(Y, "LeftLinkButton", M.a), se = p.a.wrapped(X, "SecondaryLeftLinkButton", M.a), ne = p.a.wrapped(J, "SecondaryLeftLinkRouterButton", M.a), re = p.a.h3("Title", M.a), ie = p.a.div("PageBody", M.a), ae = p.a.div("QuarantineMessageWrapper", M.a), oe = Object(d.c)({
				isLoggedIn: _.G,
				origin: B.l,
				user: _.i
			}), de = Object(T.t)(), ce = Object(a.b)(oe, (e, t) => {
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
					quarantineRequiresEmail: p,
					quarantineMessage: b,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: g,
					setNSFWPreference: x,
					subredditDescription: k,
					subredditName: f,
					user: O
				} = e, y = () => {
					a ? x() : Object(l.k)(), window.location.reload()
				};
				switch (s) {
					case L.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/gold/premium-crest.png")
						}), i.a.createElement(re, null, D._("r/{community name} is a Reddit Premium community", [D._param("community name", f)], {
							hk: "2lyDwB"
						})), i.a.createElement(H, null, D._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(F, null, O ? i.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/premium")
						}, D._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(te, {
							href: Object(c.a)(o, d)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? i.a.createElement(G, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(X, {
							href: Object(c.a)(o, d)
						}, D._("Log in", null, {
							hk: "odEG4"
						}))));
					case L.a.Nsfw:
					case L.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), i.a.createElement(re, null, s === L.a.Nsfw ? D._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : D._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(H, null, D._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(F, null, i.a.createElement(ee, {
							to: "/"
						}, D._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(X, {
							onClick: y
						}, D._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case L.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/private.png")
						}), i.a.createElement(re, null, D._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), k && k.length && i.a.createElement(K, null, i.a.createElement(q, null, "r/", f), i.a.createElement(V, null, i.a.createElement("div", null, k))), i.a.createElement(H, null, D._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), i.a.createElement(F, null, O ? i.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/message/compose?to=/r/").concat(f)
						}, D._("Message Mods", null, {
							hk: "vVe1i"
						})) : i.a.createElement(se, {
							href: Object(c.a)(o, d)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(G, {
							to: "/"
						}, O ? D._("Go Home", null, {
							hk: "49p4or"
						}) : D._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case L.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), i.a.createElement(re, null, D._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(H, null, D._("This community is {=quarantined}", [D._param("=quarantined", i.a.createElement(z, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, D._("quarantined", null, {
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
						}) : b || D._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), D._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(F, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? i.a.createElement(F, null, i.a.createElement(ne, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(Y, {
								href: "".concat(n.a.redditUrl, "/prefs/update")
							}, D._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(F, null, i.a.createElement(ee, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(X, {
								onClick: t
							}, D._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, r, p)));
					case L.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/banned.png")
						}), i.a.createElement(re, null, D._("r/{community name} has been banned from Reddit", [D._param("community name", f)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(H, null, e ? i.a.createElement(P, {
							linkClassName: M.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : D._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(F, null, i.a.createElement(G, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(F, null, i.a.createElement(G, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement($, null), i.a.createElement(re, null, D._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(H, null, D._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(F, null, O && i.a.createElement(m.a, {
							eventSource: "content_gate"
						}), i.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.ProfileDoesNotExist:
					case L.a.ProfileDeleted:
					case L.a.ProfileSuspended:
					case L.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case L.a.ProfileBlockedForLegalReason:
									return D._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case L.a.ProfileDeleted:
									return D._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case L.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, D._("This account has been {=suspended} .", [D._param("=suspended", i.a.createElement(z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, D._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case L.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(re, null, D._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(H, null, D._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(F, null, i.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, D._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(F, null, i.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(F, null, i.a.createElement(G, {
							to: "/"
						}, D._("Explore Reddit", null, {
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
				p = s("./src/reddit/selectors/experiments/downToChat.ts"),
				b = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = Object(a.c)({
				isDownToChatExperimentEnabled: p.a,
				isEnabled: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(m.c)(e, s.id)
				}
			}), k = Object(i.b)(x, e => ({
				startChatting: t => e(Object(d.i)(t))
			}));
			class f extends r.a.Component {
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
			t.a = k(Object(c.c)(f))
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
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(b);
			const g = d.a.wrapped(u.a, "Planet", h.a),
				x = d.a.div("SubredditIcon", h.a),
				k = d.a.div("PositionedImage", h.a),
				f = d.a.div("HeaderContent", h.a),
				O = d.a.div("HeaderContainer", h.a),
				y = d.a.span("HeaderText", h.a),
				w = d.a.wrapped(i.a, "HeaderUrl", h.a),
				v = d.a.span("Container", h.a),
				E = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
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
					const u = !!i && !!o && "left" === n,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						E = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						j = "".concat(4 + E, "px");
					return r.a.createElement(v, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, r.a.createElement(w, {
						className: e.className,
						to: e.url
					}, r.a.createElement(O, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(f, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (s ? r.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					}) : r.a.createElement(g, {
						style: {
							padding: "".concat(Object(p.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					})), r.a.createElement(y, {
						style: {
							paddingTop: 32 === E ? "4px" : "14px"
						}
					}, t)), r.a.createElement(k, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!i,
							[h.a.hoverPositionedImage]: !!i && !!o
						}),
						style: Object.assign(Object.assign({}, d), {
							height: "".concat(Object(p.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = E
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
				return k
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "i", (function() {
				return S
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
			class p extends n.Component {
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
			var b = Object(i.b)(m, {})(p),
				h = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.J)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var k = Object(i.b)(() => Object(a.a)(x, h.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => r.a.createElement(b, {
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
			const f = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.J)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var O = Object(i.b)(() => Object(a.a)(f, e => e))(e => r.a.createElement(b, {
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
				}))(e => r.a.createElement(b, {
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
			}))(e => r.a.createElement(b, {
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
			var E = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(w.ab)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(w.ab)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
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
			var j = Object(i.b)(() => Object(a.c)({
				post: w.N,
				subredditOrProfile: w.ab,
				isModerator: (e, t) => {
					const s = Object(w.ab)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
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
			var C = Object(i.b)(() => Object(a.c)({
				subreddit: g.S
			}))(e => r.a.createElement(b, {
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
			var N = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(g.M)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(b, {
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
			var S = Object(i.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(g.S)(e, {
						subredditId: s
					}) : null
				}
			}))(e => r.a.createElement(b, {
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
				p = ["center", "top"];
			class b extends r.a.Component {
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
						tooltipPosition: p
					}))
				}
			}
			t.a = b
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
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/components/OverflowMenu/index.m.less"),
				x = s.n(g);
			const k = c.a.wrapped(m.a, "_Dropdown", x.a),
				f = Object(u.a)(k),
				O = c.a.button("MenuButton", x.a),
				y = c.a.wrapped(b.a, "MenuIcon", x.a),
				w = c.a.wrapped(p.b, "DropdownRow", x.a),
				v = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				E = Object(a.b)(v, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => i.a.createElement(O, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: j(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(y, null), i.a.createElement(f, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsProgressBar/index.m.less": function(e, t, s) {
			e.exports = {
				titleRow: "ewR4vxWiJWGeWBdmzw6xS",
				barRow: "_1u97iAB8jvIzM_2sl3sjGu",
				track: "_19jmSuCu8wb_2oUOO1Ksr7",
				progress: "_1kpFqrDgv8X9yOZp129xkr",
				icon: "_1SSPWxztrUgxbJZ-XoxKNd"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, s) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/confetti-animation.json": function(e) {
			e.exports = JSON.parse('{"v":"5.7.1","fr":30,"ip":0,"op":40,"w":626,"h":626,"nm":"Comp 1","ddd":0,"assets":[{"id":"image_0","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_1","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_2","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_3","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_4","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_5","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_6","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_7","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_8","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Pre-comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[715.167,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":-0.4,"op":23.6,"st":-0.4,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Pre-comp 3","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[736.722,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":13.8,"op":34.8,"st":13.8,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Pre-comp 4","refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[306.5,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":13.2,"op":40.2,"st":13.2,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Pre-comp 5","refId":"comp_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[196.056,418.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4,"op":28,"st":4,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"Pre-comp 6","refId":"comp_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[393.833,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":15.8,"op":39.8,"st":15.8,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"Pre-comp 7","refId":"comp_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[89.167,418.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.8,"op":31.8,"st":4.8,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"Pre-comp 8","refId":"comp_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[814.944,370.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":11.8,"op":41.8,"st":11.8,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"Pre-comp 9","refId":"comp_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[919.611,250.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.2,"op":28.2,"st":4.2,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"Pre-comp 10","refId":"comp_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[557.389,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":8.6,"op":35.6,"st":8.6,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"Pre-comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[83.167,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":6.6,"op":30.6,"st":6.6,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"Pre-comp 3","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[648.722,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":5.8,"op":26.8,"st":5.8,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"Pre-comp 5","refId":"comp_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1040.056,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":16,"op":40,"st":16,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"Pre-comp 7","refId":"comp_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[933.167,190.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[60,60,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":12.8,"op":39.8,"st":12.8,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"Pre-comp 8","refId":"comp_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[134.944,270.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.8,"op":34.8,"st":4.8,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"Pre-comp 9","refId":"comp_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[503.611,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":16.2,"op":40.2,"st":16.2,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"Pre-comp 10","refId":"comp_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[293.389,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":2.6,"op":29.6,"st":2.6,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"1/Confetti_2.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":24,"s":[406.452]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78,34,0],"to":[0,118.333,0],"ti":[0,-118.333,0]},{"t":24,"s":[78,744,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"3/Confetti_2.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[80.333,32,0],"to":[0,122.667,0],"ti":[0,-122.667,0]},{"t":21,"s":[80.333,768,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":14,"s":[150,150,100]},{"t":21,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":21,"st":0,"bm":0}]},{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"4/Confetti_2.ai","cl":"ai","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[75,37,0],"to":[0,121.333,0],"ti":[0,-121.333,0]},{"t":27,"s":[75,765,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]},{"id":"comp_4","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"5/Confetti_2.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77.333,31,0],"to":[0,121,0],"ti":[0,-121,0]},{"t":24,"s":[77.333,757,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_5","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"6/Confetti_2.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[76.667,35,0],"to":[0,121,0],"ti":[0,-121,0]},{"t":24,"s":[76.667,761,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_6","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"7/Confetti_2.ai","cl":"ai","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77,35,0],"to":[0,120.333,0],"ti":[0,-120.333,0]},{"t":27,"s":[77,757,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]},{"id":"comp_7","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"8/Confetti_2.ai","cl":"ai","refId":"image_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77.667,37,0],"to":[0,118,0],"ti":[0,-118,0]},{"t":30,"s":[77.667,745,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[150,150,100]},{"t":30,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":30,"st":0,"bm":0}]},{"id":"comp_8","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"9/Confetti_2.ai","cl":"ai","refId":"image_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78,35,0],"to":[0,120,0],"ti":[0,-120,0]},{"t":24,"s":[78,755,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_9","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"10/Confetti_2.ai","cl":"ai","refId":"image_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78.667,28,0],"to":[0,123.333,0],"ti":[0,-123.333,0]},{"t":27,"s":[78.667,768,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"all anim","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[313,313,0],"ix":2},"a":{"a":0,"k":[562.5,562.5,0],"ix":1},"s":{"a":0,"k":[56,56,100],"ix":6}},"ao":0,"w":1125,"h":1125,"ip":0,"op":39,"st":0,"bm":0}],"markers":[]}')
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, s) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "YgQMt0wJgGwSzvy9w0JK8",
				titleGroup: "_2Fz8jK5e-6cq1YKgYEj-n0",
				group: "_33p4q-VA_ubIAGTrkYy18Z",
				title: "_11_vLMByyp2z23bapR4owd",
				perksButton: "l_DpA1PxJZF1VgtfMYTmH",
				subTitle: "Bks9fiWNtmEGkO-O02zvZ",
				progress: "_3kNzltm7kFAgzESGFqpNKJ",
				heroes: "_36CBrbv63kmBRBZvTC9Ty9",
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/hooks/useTracking.ts"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/helpers/trackers/powerups.ts"),
				l = s("./src/reddit/actions/gold/powerups.ts"),
				u = s("./src/reddit/actions/login.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/ApiContext.tsx"),
				h = s("./src/reddit/selectors/gold/powerups.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				w = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				v = s("./src/reddit/components/PowerupsSidebar/PowerupsProgressBar/index.m.less"),
				E = s.n(v);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var C = e => {
					const {
						className: t,
						powerups: s
					} = e, {
						tier: n,
						count: i,
						tiersInfo: a
					} = s, o = (a[n] || a[n - 1]).powerupsCost;
					if (!o) return null;
					const d = Math.min(o, i) / o;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement("div", {
						className: E.a.titleRow
					}, r.a.createElement("span", null, j._("Powerups", null, {
						hk: "DrcXp"
					})), r.a.createElement("span", null, i, "/", o)), r.a.createElement("div", {
						className: E.a.barRow
					}, r.a.createElement("div", {
						className: E.a.track
					}), r.a.createElement("div", {
						className: E.a.progress,
						style: {
							width: "".concat(100 * d, "%")
						}
					}, r.a.createElement(w.a, {
						className: E.a.icon
					}))))
				},
				N = s("./node_modules/lottie-web/build/player/lottie.js"),
				S = s.n(N),
				A = s("./node_modules/react-motion/lib/react-motion.js"),
				I = s("./src/lib/classNames/index.ts"),
				P = s("./src/reddit/components/PowerupsSidebar/Supporters/confetti-animation.json"),
				T = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				R = s("./src/reddit/models/Gold/Powerups/index.ts"),
				L = s("./src/reddit/components/UserIcon/index.tsx"),
				B = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				W = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				M = s.n(W);
			var D = function(e) {
					const {
						className: t,
						supporter: s
					} = e, {
						score: n,
						supporterInfo: i
					} = s, a = i ? i.name : T.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [T.fbt._plural(n)], {
						hk: "8kyEI"
					}).toString(), o = i && i.icon.url ? i.icon.url : void 0, d = !!i && i.profile.isNsfw, c = n === R.b ? w.a : _.a, l = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: M.a.userIconContainer
					}, r.a.createElement(L.a, {
						userName: a,
						iconUrl: o,
						className: M.a.userIcon,
						isNSFW: d
					})), r.a.createElement("h4", {
						className: M.a.name
					}, a));
					return r.a.createElement("div", {
						className: Object(I.a)(t, M.a.container)
					}, i ? r.a.createElement(B.a, {
						className: M.a.user,
						to: "/user/".concat(a, "/")
					}, l) : r.a.createElement("div", {
						className: M.a.user
					}, l), r.a.createElement("div", {
						className: M.a.counter
					}, r.a.createElement(c, {
						className: M.a.powerupIcon
					}), n))
				},
				F = s("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				U = s.n(F);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = 100, V = 302, q = 40, z = e => "".concat(e.lastSupportedAt, "__").concat(e.score), G = (e, t) => ({
				key: z(e),
				data: {
					supporter: e,
					isInitial: t
				}
			}), Y = () => ({
				width: V,
				height: Object(A.spring)(0)
			}), J = () => ({
				height: 0,
				width: 0,
				motionProgress: 0
			}), X = e => {
				e && !e.children.length && S.a.loadAnimation({
					container: e,
					renderer: "svg",
					loop: !1,
					autoplay: !0,
					animationData: P,
					rendererSettings: {
						hideOnTransparent: !0
					}
				})
			};
			class Q extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: e.supporters.slice(0, e.maxSupporters || K).map(e => G(e, !0))
					}
				}
				render() {
					const {
						className: e
					} = this.props;
					return r.a.createElement("div", {
						className: Object(I.a)(U.a.container, e)
					}, r.a.createElement(A.TransitionMotion, {
						willLeave: Y,
						willEnter: J,
						styles: this.state.items.map(e => Object.assign(Object.assign({}, e), {
							style: {
								width: Object(A.spring)(V),
								height: Object(A.spring)(q),
								motionProgress: Object(A.spring)(1)
							}
						}))
					}, e => r.a.createElement(r.a.Fragment, null, e.map(e => {
						const t = !e.data.isInitial && 1 === e.style.motionProgress;
						return r.a.createElement("div", {
							className: U.a.item,
							key: e.key,
							style: {
								zIndex: t ? 100 : "unset"
							}
						}, t && r.a.createElement("div", {
							className: U.a.animation,
							ref: X
						}), r.a.createElement("div", {
							className: U.a.itemCropper,
							style: Object.assign({}, e.style)
						}, r.a.createElement(D, {
							supporter: e.data.supporter
						})))
					}))))
				}
				static getDerivedStateFromProps(e, t) {
					const s = t.items;
					return {
						items: e.supporters.slice(0, e.maxSupporters || K).map(e => s.some(t => t.key === z(e)) ? G(e, !0) : G(e, !1))
					}
				}
			}
			var Z = r.a.memo(Q),
				$ = s("./src/reddit/components/PowerupsSidebar/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = Object(o.c)({
				currentUser: x.i,
				powerups: h.f,
				subreddit: g.S,
				topSupporters: h.g,
				userPowerupsData: h.l
			}), ne = Object(p.c)(e => {
				const {
					className: t,
					currentUser: s,
					powerups: n,
					subreddit: o,
					topSupporters: p,
					userPowerupsData: b
				} = e, h = Object(i.c)(), g = Object(a.a)();
				if (!n || 1 === n.tiersInfo.length || !o) return null;
				const x = !!(null == b ? void 0 : b.freeCount);
				return r.a.createElement(k.a, null, r.a.createElement(f.a, {
					className: t,
					title: te._("Powerups", null, {
						hk: "DrcXp"
					})
				}, r.a.createElement("div", {
					className: ee.a.container
				}, r.a.createElement("div", {
					className: ee.a.titleGroup
				}, r.a.createElement("h2", {
					className: ee.a.title
				}, te._("Powerup and unlock perks for {subreddit name}", [te._param("subreddit name", o.displayText)], {
					hk: "2gDqtV"
				})), r.a.createElement("button", {
					className: ee.a.perksButton,
					onClick: () => {
						g(Object(c.d)()), h(s ? Object(m.h)(d.a.ECON_POWERUPS_MARKETING) : Object(u.h)())
					}
				}, te._("Show Perks", null, {
					hk: "3TgZRL"
				}))), r.a.createElement("div", {
					className: ee.a.group
				}, r.a.createElement("h3", {
					className: ee.a.subTitle
				}, te._("Community heroes", null, {
					hk: "1hGdba"
				})), r.a.createElement(C, {
					className: ee.a.progress,
					powerups: n
				}), !!(null == p ? void 0 : p.length) && r.a.createElement(Z, {
					supporters: p,
					className: ee.a.heroes,
					maxSupporters: 50
				})), r.a.createElement("div", {
					className: ee.a.group
				}, r.a.createElement(O.f, {
					className: ee.a.button,
					onClick: () => {
						g(Object(c.d)()), h(Object(l.b)())
					}
				}, x ? te._("Apply Your Free Powerup", null, {
					hk: "3HJ66L"
				}) : te._("Become a Hero", null, {
					hk: "3IZNw3"
				})), x && r.a.createElement("div", {
					className: ee.a.premiumDescription
				}, r.a.createElement("div", {
					className: ee.a.premiumIconWrapper
				}, r.a.createElement(y.a, {
					className: ee.a.premiumIcon
				})), r.a.createElement("span", null, te._("Premium gives you 1 free Powerup", null, {
					hk: "3moHy5"
				})))))))
			});
			t.a = Object(b.b)(Object(i.b)(se)(ne))
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
			const p = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = d.a.wrapped(e => i.a.createElement("div", {
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
			t.a = p(Object(o.a)(b))
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
				p = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/reddit/components/MiniCardPost/index.m.less"),
				v = s.n(w),
				E = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				j = s.n(E);
			const C = e => e.type === f.f.Spoiler,
				N = Object(h.t)();
			t.a = N(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: i,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: w,
					showSubredditMeta: E = !0,
					showSubredditName: N,
					subredditOrProfile: S
				} = e, A = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", T = w && P || f && Object(o.a)("/search", {
					q: f.rawQuery,
					source: I
				}) || P, R = f ? f.subredditInfo && f.subredditInfo.icon : S && S.icon.url, L = f ? f.subredditInfo && f.subredditInfo.displayText : S && (S.displayText || S.name), B = h ? h.flair.filter(C) : [], _ = h ? h.score : 0, W = h ? h.numComments : 0, M = h && h.isSponsored, D = Object(y.a)(e).body, F = "linear-gradient(\n      ".concat(Object(r.g)(D, .2), ",\n      ").concat(Object(r.g)(D, .3), ",\n      ").concat(Object(r.g)(D, .4), ",\n      ").concat(Object(r.g)(D, .6), ",\n      ").concat(Object(r.g)(D, .8), ",\n      ").concat(D, "\n    )"), U = a.a.createElement("div", {
					id: i,
					className: Object(d.a)(j.a.trendingPost, {
						[j.a["m-background"]]: !!A
					})
				}, a.a.createElement(g.a, {
					to: T
				}, a.a.createElement("div", {
					className: Object(d.a)(j.a.backgroundWrapper, v.a.backgroundWrapper, t),
					style: {
						background: Object(O.g)(Object(y.a)(e).body, A || Object(y.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": F
					}
				}, M && a.a.createElement("div", {
					className: j.a.promoted
				}, n.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(j.a.innerContainer, v.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? j.a.title : j.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(j.a.description, s)
				}, B.length > 0 && a.a.createElement(m.a, {
					className: j.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : a.a.createElement("div", {
					className: j.a.spacer
				}), E && R && L && a.a.createElement(x.a, {
					className: j.a.relatedSubredditMetaData,
					iconClassName: j.a.subredditIcon,
					iconUrl: R || void 0,
					suffix: n.fbt._("{subredditName} and more", [n.fbt._param("subredditName", L)], {
						hk: "2YTyJf"
					})
				}), !E && h && a.a.createElement("div", {
					className: j.a.metaLine
				}, N && L && a.a.createElement("span", {
					className: j.a.meta
				}, Object(k.b)(L)), a.a.createElement("span", {
					className: j.a.meta
				}, n.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [n.fbt._plural(_, "number", Object(u.b)(_))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: j.a.meta
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(W, "number", Object(u.b)(W))], {
					hk: "311aXY"
				})))))));
				return M ? a.a.createElement(p.a, {
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
			var p = e => o.a.createElement("div", {
					className: Object(n.a)(e.className, u.a.container),
					style: e.style
				}, o.a.createElement(c.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, m._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				k = s.n(x),
				f = s("./src/lib/lessComponent.tsx");

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
				E = v + w + 8,
				j = f.a.div("Container", k.a),
				C = f.a.wrapped(e => {
					var {
						className: t
					} = e, s = y(e, ["className"]);
					return o.a.createElement(p, O({
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
						isFakeOverlay: r,
						isSticky: i
					} = e;
					return o.a.createElement("div", {
						className: Object(n.a)(s, {
							[k.a.StickyStyles]: i && !r,
							[k.a.StickyStylesFakeOverlay]: !!r
						})
					}, t)
				};
			class S extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > E,
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
					return o.a.createElement(j, {
						className: n,
						innerRef: this.setWrapperRef
					}, o.a.createElement(N, {
						isFakeOverlay: t,
						isSticky: i
					}, e, s, !r && o.a.createElement(b.a, null)), !this.props.hideBackToTop && o.a.createElement(C, null))
				}
			}
			const A = Object(g.t)();
			t.a = A(S)
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
				return Q
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
				p = s("./src/reddit/actions/chat/toggle.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/constants/modals.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/helpers/trackers/chat.ts"),
				y = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				w = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				v = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				E = s("./src/reddit/icons/svgs/GroupChat/index.tsx"),
				j = s("./src/reddit/icons/svgs/Key/index.tsx"),
				C = s("./src/reddit/models/SubredditChannel/index.ts"),
				N = s("./src/reddit/selectors/chat.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/subredditChannel.ts"),
				I = s("./src/reddit/components/SubredditChannelList/index.m.less"),
				P = s.n(I);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = c.a.wrapped(h.g, "ModalFormItem", P.a), L = c.a.wrapped(f.f, "PrimaryButton", P.a), B = c.a.wrapped(h.o, "ModalText", P.a), _ = c.a.a("ItemLink", P.a), W = c.a.p("Detail", P.a), M = c.a.p("DescText", P.a), D = c.a.div("Title", P.a), F = c.a.div("Header", P.a), U = c.a.wrapped(w.a, "ChatIcon", P.a), H = c.a.wrapped(v.a, "PlanetIcon", P.a), K = c.a.wrapped(y.a, "Pencil", P.a), V = c.a.wrapped(E.a, "Group", P.a), q = c.a.wrapped(j.a, "Key", P.a), z = c.a.wrapped(g.b, "SubredditIcon", P.a), G = c.a.button("EditButton", P.a), Y = c.a.button("ShowAllLink", P.a), J = c.a.span("ChannelName", P.a), X = c.a.div("HeaderText", P.a);
			var Q;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Q || (Q = {}));
			const Z = Object(d.c)({
					isCollectionReady: A.e,
					isModerator: N.e,
					selectedSubreddit: S.S,
					shouldRequestCollection: A.f,
					subredditChannels: A.a
				}),
				$ = Object(o.b)(Z, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						toggleModal: () => e(Object(b.i)(k.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(b.i)(k.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(b.i)(k.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(m.l)(t)),
						onChatLinkClick: (t, s) => e(Object(p.c)({
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
					} = C.a, {
						channelId: s,
						channelState: n
					} = e, {
						Widget: r,
						Modal: i
					} = Q, {
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
					}, c.length ? a.a.createElement(R, null, c.map((e, t) => a.a.createElement(_, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, a.a.createElement(D, {
						key: "item-link-title-".concat(t)
					}, a.a.createElement(U, {
						key: "item-link-icon-".concat(t)
					}), i.icon.url ? a.a.createElement(z, {
						key: "subreddit-icon-".concat(t),
						iconUrl: i.icon.url
					}) : a.a.createElement(H, {
						key: "planet-".concat(t),
						isSmall: !0
					}), a.a.createElement(F, {
						key: "item-header-".concat(t)
					}, a.a.createElement(X, {
						key: "item-header-text-".concat(t)
					}, a.a.createElement(W, {
						key: "item-detail-".concat(t)
					}, i.name, T._({
						"*": "• {number} Members",
						_1: "• 1 Member"
					}, [T._plural(e.membersCount, "number")], {
						hk: "4bUTpG"
					})), a.a.createElement(J, {
						key: "channel-name-".concat(t)
					}, e.type === C.c.Public ? a.a.createElement(V, null) : a.a.createElement(q, null), e.name)), s && a.a.createElement(G, {
						key: "button-".concat(t),
						onClick: t => {
							o(e.channelId), r(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(O.l)())
						}
					}, a.a.createElement(K, null)))), e.description && a.a.createElement(M, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && a.a.createElement(Y, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, T._("See more", null, {
						hk: "lhTm0"
					}))) : s ? a.a.createElement(R, null, a.a.createElement(B, null, T._("Create your first room and get your community chatting in real time.", null, {
						hk: "2zKL0L"
					})), a.a.createElement(L, {
						onClick: n || d
					}, T._("+ Add room", null, {
						hk: "2vBAvZ"
					}))) : a.a.createElement(R, null, a.a.createElement(B, null, T._("There are no joined chatrooms yet", null, {
						hk: "3n65KN"
					}))))
				}
			}
			t.b = $(Object(x.c)(ee))
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
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = s("./src/reddit/components/SubredditNav/index.m.less"),
				g = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var k = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const f = (e, t, s) => Object(p.a)(e, {
					[g.a.mActive]: t
				}, {
					[g.a.topBannerVariant]: s
				}),
				O = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, i = k(e, ["children", "isActive", "isTopBannerVariant"]);
					return r.a.createElement("div", x({
						className: f(g.a.subNavTitle, s, n)
					}, i), r.a.createElement("span", null, t), r.a.createElement(b.b, {
						className: g.a.navDropdownIcon
					}))
				},
				y = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: i
					} = e, a = k(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const o = f(g.a.navLink, s, i);
					return n ? r.a.createElement(m.a, x({
						className: o,
						to: n
					}, a)) : r.a.createElement("a", x({
						className: o
					}, a))
				},
				w = e => {
					var {
						className: t,
						isActive: s
					} = e, n = k(e, ["className", "isActive"]);
					return r.a.createElement(m.a, x({
						className: f(g.a.navLink, s)
					}, n))
				},
				v = e => {
					var {
						className: t,
						isActive: s
					} = e, n = k(e, ["className", "isActive"]);
					return r.a.createElement("a", x({
						className: f(g.a.subNavLink, s)
					}, n))
				},
				E = e => {
					var {
						className: t
					} = e, s = k(e, ["className"]);
					return r.a.createElement("div", x({
						className: Object(p.a)(g.a.subNavContainer, t)
					}, s))
				},
				j = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = k(e, ["className", "isOpen"]);
					return r.a.createElement("div", x({
						className: Object(p.a)(g.a.subNavList, t, {
							[g.a.mIsOpen]: s
						})
					}, n))
				},
				{
					fbt: C
				} = s("./node_modules/fbt/lib/FbtPublic.js");
			const N = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var S = Object(d.t)()(Object(i.b)(N, (e, t) => ({
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
					}, C._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				A = s("./src/lib/linkMatchers/index.ts");
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
					return r.a.createElement(E, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(O, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(j, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var P = I;
			const T = e => {
				const t = e.url && Object(A.g)(A.e, e.url);
				return t ? t.url : e.url
			};
			var R = e => e.menuItem.url ? r.a.createElement(y, {
					href: T(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(P, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(v, {
					key: "".concat(e.text, "-").concat(T(e)),
					role: "listitem",
					href: T(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				L = s("./src/lib/constants/index.ts");
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const _ = Object(d.t)(),
				W = [L.Bb.SUBREDDIT, L.Bb.COMMENTS, L.Bb.COLLECTION_COMMENTS],
				M = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && W.indexOf(t.pageLayer.meta.name) > -1
				});
			var D = _(Object(i.b)(M, (e, t) => ({
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
					}, B._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				F = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				U = s("./src/higherOrderComponents/makeAsync.tsx");
			var H = Object(U.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				K = s("./src/reddit/constants/postLayout.ts"),
				V = s("./src/reddit/constants/screenWidths.ts"),
				q = s("./src/reddit/models/Theme/index.ts"),
				z = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				G = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const Y = Object(F.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, i = G(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(z.a)(i);
				return r.a.createElement("div", {
					className: Object(p.a)(g.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(q.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var J = e => r.a.createElement(Y, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: g.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === K.g.Large ? "".concat(e.maxWidth || V.a, "px") : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(H, null))),
				X = s("./src/reddit/constants/wiki.ts"),
				Q = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: Z
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
					onClick: () => e.sendEvent(Object(Q.g)())
				}, Z._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ee = Object(c.a)("spPolls", S),
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
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(D, {
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
				p = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				h = s("./src/reddit/components/IdCard/async.tsx"),
				g = s("./src/lib/isFakeSubreddit/index.ts"),
				x = s("./src/reddit/components/IdCard/helpers.ts"),
				k = e => !Object(g.a)(e) || Object(x.c)(e) || Object(x.d)(e) || Object(x.e)(e),
				f = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				y = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				w = s("./src/reddit/components/SidebarContainer/index.tsx"),
				v = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				E = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				j = s("./src/lib/classNames/index.ts"),
				C = s("./src/higherOrderComponents/asTooltip.tsx"),
				N = s("./src/reddit/actions/tooltip.ts"),
				S = s("./src/reddit/actions/modal.ts"),
				A = s("./src/reddit/constants/modals.ts"),
				I = s("./src/reddit/controls/Dropdown/index.tsx"),
				P = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				T = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				R = s("./src/reddit/selectors/moderatorPermissions.ts"),
				L = s("./src/reddit/selectors/tooltip.ts"),
				B = s("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				_ = s.n(B);
			const W = u.a.wrapped(I.a, "_Dropdown", _.a),
				M = u.a.wrapped(T.a, "Pencil", _.a),
				D = u.a.a("DropdownRow", _.a),
				F = Object(C.a)(W),
				U = e => "SubredditChannels--Menu--".concat(e),
				H = Object(c.c)({
					isModerator: R.g,
					isDropdownOpen: (e, t) => Object(L.b)(U(t.subredditId))(e)
				}),
				K = u.a.wrapped(e => {
					const {
						className: t,
						isModerator: s,
						onOpenDropdown: r,
						isDropdownOpen: i,
						toggleModal: a
					} = e, d = U(e.subredditId);
					return o.a.createElement("button", {
						"aria-expanded": i,
						"aria-haspopup": !0,
						"aria-label": n.fbt._("Chat menu", null, {
							hk: "4DfuTV"
						}),
						className: Object(j.a)(_.a.top, t),
						id: d,
						onClick: () => r(d)
					}, o.a.createElement(P.a, null), o.a.createElement(F, {
						isOpen: i,
						tooltipId: d,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(D, {
						onClick: a
					}, s ? n.fbt._("Manage chatrooms", null, {
						hk: "2hIiuc"
					}) : n.fbt._("View rooms", null, {
						hk: "2XOg3o"
					}), o.a.createElement(M, null))))
				}, "OverflowMenu", _.a);
			var V = Object(d.b)(H, e => ({
					onOpenDropdown: t => e(Object(N.h)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(S.i)(A.a.MANAGE_SUBREDDIT_CHAT))
				}))(K),
				q = s("./src/reddit/components/SubredditChannelList/index.tsx"),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Y = s("./src/reddit/helpers/trackers/chat.ts"),
				J = s("./src/reddit/selectors/subreddit.ts"),
				X = s("./src/reddit/selectors/subredditChannel.ts"),
				Q = s("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				Z = s.n(Q);
			const $ = u.a.div("Wrapper", Z.a),
				ee = Object(c.c)({
					isCollectionReady: X.e,
					isModerator: R.g,
					isWhitelistedSubreddit: J.e,
					shouldRequestCollection: X.f,
					subredditChannels: X.a
				});
			let te;
			class se extends o.a.Component {
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
					this.props.subredditId !== te && (te = this.props.subredditId, this.props.sendEvent(Object(Y.m)()))
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
					} = this.props, s = o.a.createElement(q.b, {
						maxChannels: 3,
						parentContext: q.a.Widget,
						subredditId: e
					});
					return t ? s : this.isEnabled() ? o.a.createElement(v.a, null, o.a.createElement(G.a, {
						className: this.props.className,
						title: n.fbt._("Chat rooms", null, {
							hk: "4vn07S"
						}),
						headerButton: o.a.createElement(V, {
							subredditId: e
						})
					}, o.a.createElement($, null, s))) : null
				}
			}
			var ne = Object(d.b)(ee)(Object(z.c)(se)),
				re = s("./src/lib/makeListingKey/index.ts"),
				ie = s("./src/reddit/actions/subreddit.ts"),
				ae = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				oe = s("./src/reddit/controls/Button/index.tsx"),
				de = s("./src/reddit/helpers/name/index.ts"),
				ce = s("./src/reddit/helpers/overlay/index.ts"),
				le = s("./src/reddit/selectors/experiments/topPosts.ts"),
				ue = s("./src/reddit/selectors/posts.ts"),
				me = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const pe = .99;
			class be extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= pe && t(s)
					}
				}
				render() {
					return o.a.createElement(me.a, {
						threshold: pe,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var he = be,
				ge = s("./src/lib/isUrl/index.ts"),
				xe = s("./src/lib/prettyPrintNumber/index.ts"),
				ke = s("./src/reddit/components/FlairWrapper/index.tsx"),
				fe = s("./src/reddit/components/Thumbnail/index.tsx"),
				Oe = s("./src/reddit/models/Flair/index.ts"),
				ye = s("./src/reddit/models/Subreddit/index.ts"),
				we = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				ve = s.n(we);
			const {
				fbt: Ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), je = e => e.type === Oe.f.Nsfw || e.type === Oe.f.Spoiler, Ce = Object(c.c)({
				post: ue.N,
				subredditOrProfile: ue.ab
			});
			class Ne extends o.a.PureComponent {
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
					}, a = Object(ge.a)(Object(fe.b)(i)), d = t.flair.filter(je);
					return o.a.createElement("div", {
						className: Object(j.a)(ve.a.container, e, {
							[ve.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: ve.a.mainLine
					}, a && o.a.createElement("div", {
						className: ve.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(fe.a, i)), o.a.createElement("div", {
						className: Object(j.a)(ve.a.title, !a && ve.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(ke.a, {
						className: ve.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: ve.a.metaLine
					}, n && !!r && o.a.createElement("span", {
						className: ve.a.meta
					}, Object(ye.g)(r) ? Object(de.c)(r.displayText || r.name) : Object(de.b)(r.displayText || r.name)), o.a.createElement("span", {
						className: ve.a.meta
					}, Ee._({
						"*": "{score} points",
						_1: "1 point"
					}, [Ee._plural(t.score, "score", Object(xe.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: ve.a.meta
					}, Ee._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [Ee._plural(t.numComments, "numComments", Object(xe.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Se = Object(d.b)(Ce, e => ({
					openLightbox: t => e(Object(ce.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Ne),
				Ae = s("./src/reddit/components/SidebarPostList/index.m.less"),
				Ie = s.n(Ae);
			const {
				fbt: Pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Te = 10, Re = 2, Le = Object(c.a)(ue.T, e => e.filter(e => !e.isSponsored)), Be = Object(c.c)({
				posts: Le
			});
			class _e extends o.a.Component {
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
						return o.a.createElement(he, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(Se, {
							className: Object(j.a)(Ie.a.smallPost, i),
							containerOnClick: s,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(g.a)(Object(de.f)(t)),
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
						m = Object(le.a)(c),
						p = Object(le.b)(c),
						b = m || p,
						h = i.slice(l * u, (l + 1) * u),
						[x, ...k] = h,
						f = b ? h.slice(0, Re) : k.slice(0, Re),
						O = b ? h.slice(Re) : k.slice(Re);
					return o.a.createElement("div", {
						className: Object(j.a)(Ie.a.container, t, {
							[Ie.a.redditStyle]: a
						})
					}, !b && o.a.createElement(he, {
						onPostVisible: r,
						postId: x.id
					}, o.a.createElement(ae.a, {
						backgroundWrapperClassName: Ie.a.largePostBackgroundWrapper,
						descriptionClassName: Ie.a.largePostDescription,
						innerContainerClassName: Ie.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						postId: x.id,
						showSubredditMeta: !1,
						showSubredditName: Object(g.a)(Object(de.f)(s)),
						trendingPost: x
					})), f.map(this.renderSmallPost), e, O.map(this.renderSmallPost), d && o.a.createElement(oe.n, {
						className: Ie.a.SeeMore,
						onClick: this.showMorePosts
					}, n || Pe._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var We = Object(d.b)(Be, e => ({
					openPost: t => e(Object(ce.a)(t.permalink))
				}))(_e),
				Me = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				De = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				Fe = s("./src/reddit/selectors/discoveryUnit.ts"),
				Ue = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				He = s.n(Ue);
			const Ke = 10,
				Ve = Object(c.a)((e, t) => t.subredditName, e => Object(re.a)(e, l.O.TOP, {
					t: l.Sb.WEEK
				})),
				qe = Object(c.c)({
					discoveryUnit: e => Object(Fe.c)(e, {
						unitName: De.j
					}),
					listingKey: Ve,
					posts: (e, t) => {
						const s = Ve(e, t);
						return Object(ue.T)(e, {
							listingKey: s
						})
					},
					subreddit: J.B
				});
			class ze extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(Me.h)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(Me.x)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(Me.C)(t, e, void 0, s))
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
						l = i.length > Ke;
					return o.a.createElement(G.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: n.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(We, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: He.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var Ge = Object(d.b)(qe, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(ie.r)({
							sort: l.O.TOP,
							subredditName: s,
							t: l.Sb.WEEK
						}))
					}
				})(Object(z.c)(ze)),
				Ye = s("./src/config.ts"),
				Je = s("./src/lib/localStorageAvailable/index.ts"),
				Xe = s("./src/higherOrderComponents/asModal/index.tsx"),
				Qe = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Ze = s("./src/reddit/controls/TextButton/index.tsx"),
				$e = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: et
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class tt extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(Qe.d, null, o.a.createElement(Qe.h, null, o.a.createElement($e.a, null, o.a.createElement(Qe.p, null, et._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement(Ze.a, {
						onClick: e.toggleModal
					}, o.a.createElement(Qe.b, null)))), o.a.createElement(Qe.k, null, o.a.createElement(Qe.o, null, et._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(Qe.f, null, o.a.createElement(Qe.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, et._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(Qe.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, et._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var st = Object(Xe.a)(tt),
				nt = s("./src/reddit/components/IdCard/Banner.tsx"),
				rt = s("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				it = s("./src/reddit/constants/blade.ts"),
				at = s("./src/reddit/controls/InternalLink/index.tsx"),
				ot = s("./src/reddit/helpers/localStorage/index.ts"),
				dt = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				ct = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				lt = s("./src/reddit/icons/svgs/Close/index.tsx"),
				ut = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				mt = s("./src/reddit/selectors/activeModalId.ts"),
				pt = s("./src/reddit/selectors/structuredStyles.ts"),
				bt = s("./src/reddit/components/IdCard/index.m.less"),
				ht = s.n(bt),
				gt = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				xt = s.n(gt);
			const kt = "mod_onboarding_modal",
				ft = "mod_onboarding_widget",
				Ot = Object(c.a)(mt.a, (e, t) => Object(R.a)(ut.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(pt.l)(e, {
					subredditId: t.subredditId
				}), (e, t, s) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					modHasEditedBanner: !s || !!(s.bannerBackgroundImage || s.bannerHeight || s.bannerPositionedImage || s.bannerBackgroundColor),
					modHasEditedColors: !s || !!(s.primaryColor || s.highlightColor || s.backgroundColor || s.backgroundImage),
					modHasEditedIcon: !s || (!!s.communityIcon || !!s.bannerShowCommunityIcon)
				}));
			class yt extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(ot.bb)(ft, !0, this.props.subredditId), this.props.sendEvent(Object(dt.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(dt.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(dt.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(dt.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(dt.d)("styling_generic_link"))
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
					} = this.props, i = e && !(t && s && n) && (!Object(Je.a)() || !Object(ot.r)(ft, r));
					i !== this.state.visible && (this.setState({
						visible: i
					}), i && this.props.sendEvent(Object(dt.e)("mod_edu_banner")))
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
					return this.state.visible ? o.a.createElement(G.a, {
						className: Object(j.a)(xt.a.container, this.props.className)
					}, o.a.createElement(nt.a, {
						bannerBackgroundImage: "".concat(Ye.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), o.a.createElement(lt.a, {
						className: xt.a.closeIcon,
						onClick: a
					}), Object(rt.a)({
						titleText: n.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(x.b)("url('".concat(Ye.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), o.a.createElement("div", {
						className: Object(j.a)(ht.a.Description, xt.a.description)
					}, n.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [n.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: it.e.exportImport,
						className: xt.a.modHelpLink,
						target: "_blank"
					}, n.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(at.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(it.c.NameAndIcon),
						className: xt.a.link,
						onClick: this.customizeIcon
					}, r ? o.a.createElement(ct.a, {
						className: xt.a.checked
					}) : o.a.createElement(ct.a, {
						className: xt.a.unchecked
					}), n.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(at.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(it.c.Banner),
						className: xt.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(ct.a, {
						className: xt.a.checked
					}) : o.a.createElement(ct.a, {
						className: xt.a.unchecked
					}), n.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(at.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(it.c.Global),
						className: xt.a.link,
						onClick: this.customizeThemeColors
					}, s ? o.a.createElement(ct.a, {
						className: xt.a.checked
					}) : o.a.createElement(ct.a, {
						className: xt.a.unchecked
					}), n.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(oe.k, {
						to: "/r/".concat(i, "?styling=true"),
						className: xt.a.button,
						onClick: this.customizeAppearance
					}, n.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: xt.a.subtext
					}, n.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === kt && o.a.createElement(st, {
						withOverlay: !0,
						toggleModal: a,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var wt = Object(d.b)(Ot, (e, t) => {
					let {
						subredditId: s,
						subredditName: n
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(S.i)(kt))
					}
				})(Object(z.c)(yt)),
				vt = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Et = s("./src/reddit/constants/tracking.ts"),
				jt = s("./src/reddit/selectors/seo/linksModule.ts"),
				Ct = s("./src/reddit/selectors/telemetry.ts"),
				Nt = s("./src/telemetry/models/Subreddit.ts");
			const St = e => t => Object.assign(Object.assign({}, Ct.defaults(t)), {
					action: Et.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				At = e => t => s => Object.assign(Object.assign({}, Ct.defaults(s)), {
					action: Et.c.CLICK,
					noun: Object(Nt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				It = Object(c.c)({
					communities: jt.c
				});
			var Pt = Object(d.b)(It)(e => {
					const t = Object(z.b)();
					return e.communities && e.communities.length ? o.a.createElement(v.a, null, o.a.createElement(vt.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: St,
						getSubscribeEventFactoryHandler: At,
						sendEvent: t,
						title: n.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Tt = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				Rt = s("./src/reddit/featureFlags/index.ts"),
				Lt = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Bt = s("./src/reddit/models/Widgets/index.ts"),
				_t = s("./src/reddit/selectors/communityFlairs.ts"),
				Wt = s("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				Mt = s("./src/reddit/selectors/listings.ts"),
				Dt = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				Ft = s.n(Dt);
			const Ut = 250,
				Ht = 270,
				Kt = u.a.wrapped(w.a, "SidebarContainer", Ft.a),
				Vt = Object(c.c)({
					apiError: Mt.c,
					apiPending: Mt.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(_t.b)(e, s)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(_t.c)(e, s)
					},
					showGovernance: Rt.d.spPoints,
					showLeaderboard: Rt.d.spLeaderboard,
					showPowerups: Wt.a,
					widgets: J.t
				}),
				qt = Object(d.b)(Vt);
			class zt extends a.Component {
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
							display: Bt.d.Cloud,
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
						showPowerups: r,
						subredditId: i,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					let c = 0;
					const u = Object(le.a)(d),
						g = Object(le.b)(d),
						x = Object(le.c)(d),
						w = u || g;
					let j, C;
					!!this.getPostFlairWidget() ? j = this.props.widgets : (j = this.getCommunityWidgets(), C = this.makeFlairFilterWidget());
					const N = this.makeRelatedCommunitiesWidget(u, g),
						S = !u,
						A = g,
						I = o.a.createElement(y.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: c++,
							position: Lt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(Kt, {
						className: e
					}, k(t) && o.a.createElement(h.a, {
						listingName: t
					}), o.a.createElement(m.a, {
						cardClassName: Ft.a.card,
						subredditId: i
					}), r && o.a.createElement(O.a, {
						subredditId: i
					}), w && o.a.createElement(v.a, null, o.a.createElement(Ge, {
						subredditName: a,
						topPostsVariant: d
					}, o.a.createElement("div", {
						className: Ft.a.inFeedAd
					}, I))), w && N && o.a.createElement(v.a, null, o.a.createElement(Tt.a, {
						subredditName: a,
						truncateThreshold: Ht,
						widget: N
					})), A && j.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(v.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Tt.a, {
							subredditName: a,
							truncateThreshold: Ut,
							widget: e
						}))
					}), o.a.createElement(wt, {
						subredditId: i,
						subredditName: a
					}), s && o.a.createElement(p.a, {
						className: Ft.a.card,
						subredditId: i
					}), C && o.a.createElement(v.a, null, o.a.createElement(Tt.a, {
						subredditName: a,
						widget: C
					})), n && o.a.createElement(b.a, {
						className: Ft.a.card,
						subredditId: i,
						uniqueId: i
					}), o.a.createElement(f.g, {
						subredditId: i
					}), !w && I, o.a.createElement(Pt, {
						subredditId: i
					}), S && !A && j.map((e, t) => {
						const s = "community-list" === e.kind;
						return o.a.createElement(v.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Tt.a, {
							subredditName: a,
							truncateThreshold: x && s ? Ht : x ? Ut : void 0,
							widget: e
						}))
					}), o.a.createElement(ne, {
						subredditId: i
					}), o.a.createElement(E.a, {
						adComponent: o.a.createElement(y.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: c++,
							position: Lt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = qt(zt)
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
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				HelpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				helpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				UnModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				unModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				ExternalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				externalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				MessageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ"
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
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				k = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				O = s("./src/reddit/models/Widgets/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				v = s.n(w);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const C = 129,
				N = Object(h.t)({
					filterName: e => Object(h.S)(e)[b.g],
					url: e => Object(h.X)(e)
				}),
				S = Object(o.c)({
					subredditId: (e, t) => Object(y.G)(e, t.subredditName)
				}),
				A = Object(a.b)(S),
				I = l.a.div("WidgetContent", v.a),
				P = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, r = j(e, ["display", "isFlairFilter", "onMouseDown"]);
					return i.a.createElement("li", {
						className: Object(d.a)(v.a.StyledFlair, t === O.d.Cloud && v.a.cloudDisplay, {
							[v.a.flairFilter]: s,
							[v.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: n
					}, i.a.createElement(u.b, E({}, r, {
						className: v.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class T extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
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
						e && e > C && this.setState({
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
					}, e.map(e => i.a.createElement(P, {
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
					} = this.state, s = t ? C : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
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
					return i.a.createElement("ul", null, i.a.createElement(P, {
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
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(r) || void 0, o = t.order.length > n.length || s && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(I, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(r), o && this.renderButton()))
				}
			}
			t.a = N(A(Object(m.c)(T)))
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
				return j
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
				p = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				h = s("./src/reddit/models/Widgets/index.ts"),
				g = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				x = s.n(g);
			const k = d.a.div("RuleShortName", x.a),
				f = d.a.div("RuleIndex", x.a),
				O = d.a.div("RuleTitle", x.a),
				y = d.a.div("RuleDescription", x.a),
				w = d.a.wrapped(c.a, "RawHTMLDisplay", x.a),
				v = {};
			class E extends i.a.Component {
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
					return i.a.createElement(k, {
						className: Object(o.a)({
							[x.a.pointerCursor]: a
						}),
						onClick: n(e) || !r ? void 0 : s
					}, i.a.createElement(b.a, null, i.a.createElement(f, null, "".concat(e.humanIndex, ".")), i.a.createElement(O, null, "".concat(e.rule.shortName)), i.a.createElement("div", null, !n(e) && r && (t.isVisible ? i.a.createElement(p.a, {
						className: x.a.Chevron
					}) : i.a.createElement(m.a, {
						className: x.a.Chevron
					})))), t.isVisible && i.a.createElement(y, null, e.rule.descriptionRichText ? i.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: v
					}) : e.rule.descriptionHtml ? i.a.createElement(w, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", "r/".concat(e.subredditName))], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return i.a.createElement(E, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(j, {
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
			var h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(O.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(O.a)(e).widgetColors.sidebarWidgetHeaderColor,
				v = e => {
					const t = y(e);
					return Object(f.f)(t)
				},
				E = e => {
					const t = w(e);
					return Object(f.f)(t)
				};
			var j = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = s.n(j);
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.t)(), A = Object(i.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.m)(e, t) || void 0,
						n = t.redditStyle || Object(x.m)(e, {
							subredditId: s
						}),
						r = Object(k.S)(e);
					return n || r
				},
				nigtmode: k.S,
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = v(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.color = e.fill = E(this.props), e
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
					} = this.props, p = s ? C.a.widgetContentOnly : C.a.widgetContent, b = !n && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, g = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: n,
							[C.a.clickable]: !!a,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: h
					}, d && r.a.createElement("div", {
						className: C.a.widgetHeader,
						style: g
					}, r.a.createElement("div", {
						className: Object(o.a)(C.a.widgetTitle, l)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), i), r.a.createElement("div", {
						className: Object(o.a)(p, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.n, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, N._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(A(Object(d.a)(Object(l.c)(I))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Be
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
				p = s("./src/lib/linkMatchers/index.ts"),
				b = s("./src/reddit/models/Image/index.tsx"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Widgets/Button/index.m.less"),
				O = s.n(f);
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
						s = Object(p.g)(p.e, t);
					return s ? s.url : e.url
				},
				E = Object(u.a)(e => {
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
				j = e => r.a.createElement(l.b, {
					href: v(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(E, e)),
				C = m.a.wrapped(o.a, "RawHTMLDisplay", O.a);
			var N = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: k.S
				}))(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(C, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => r.a.createElement(j, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				A = s("./src/lib/humanizeDate/index.ts"),
				I = s("./src/reddit/controls/TextButton/index.tsx"),
				P = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				T = s.n(P);
			const R = 100,
				L = {
					isExpanded: !1
				},
				B = m.a.wrapped(o.a, "RawHTMLDisplay", T.a),
				_ = m.a.div("EventContainer", T.a),
				W = m.a.div("EventTitle", T.a),
				M = m.a.div("EventDate", T.a),
				D = m.a.div("EventLocation", T.a),
				F = m.a.div("EventDescription", T.a),
				U = m.a.wrapped(I.a, "ToggleDescription", T.a);
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
					return e.text.length > R ? r.a.createElement(F, null, t.isExpanded ? e.text : e.text.slice(0, R), r.a.createElement(U, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? S.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : S.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(F, null, e.text)
				}
			}
			var K = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(_, {
					key: "".concat(s, "-").concat(t.title)
				}, r.a.createElement(W, null, t.titleHtml ? r.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(M, null, Object(A.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(D, null, t.locationHtml ? r.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(H, {
					text: t.description
				})))),
				V = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var z = Object(V.c)(e => r.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const G = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Y = Object(i.b)(G),
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
			var Q = Y(X),
				Z = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = s.n(Z);
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
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
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
							alt: S.fbt._("Widget image", null, {
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
				ae = s("./src/config.ts"),
				oe = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = s("./src/lib/opener/index.ts"),
				ce = s("./src/reddit/components/Flair/index.tsx"),
				le = s("./src/reddit/controls/InternalLink/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				me = s("./src/reddit/models/Flair/index.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				be = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				he = s.n(be);
			const ge = m.a.a("ExternalLink", he.a),
				xe = m.a.div("ModeratorListItem", he.a),
				ke = m.a.div("Username", he.a),
				fe = m.a.wrapped(ce.b, "FlairComponent", he.a),
				Oe = e => e.authorFlairType === me.f.Richtext ? {
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
				ye = e => r.a.createElement(ke, null, "u/".concat(e)),
				we = m.a.wrapped(le.a, "InternalLink", he.a),
				ve = m.a.div("LinkContainer", he.a),
				Ee = Object(a.c)({
					userIsBanned: pe.db
				});
			var je = Object(i.b)(Ee)(e => {
					const {
						subredditName: t,
						widget: s,
						userIsBanned: n
					} = e;
					return r.a.createElement(d.a, {
						styles: s.styles,
						title: S.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (s.mods && s.mods.length || n) && r.a.createElement(c.k, {
						className: he.a.MessageModsButton,
						rel: de.b,
						target: de.c.BLANK,
						to: "".concat(ae.a.redditUrl, "/message/compose?to=/r/").concat(t)
					}, r.a.createElement(ue.a, null), S.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), s.mods && s.mods.length && !n ? r.a.createElement(r.a.Fragment, null, s.mods.map(e => r.a.createElement(xe, {
						key: e.name
					}, (e => r.a.createElement(oe.a, {
						to: "/user/".concat(e.name, "/")
					}, ye(e.name)))(e), r.a.createElement(fe, {
						flair: Oe(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(ve, null, r.a.createElement(we, {
						to: "/r/".concat(t, "/about/moderators/")
					}, S.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n ? r.a.createElement("div", {
						className: he.a.HelpCenterMessage
					}, S.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", r.a.createElement(ge, {
						href: "".concat(ae.a.redditHelpUrl, "/hc/en-us/articles/360049499032"),
						rel: de.b,
						target: de.c.BLANK
					}, S.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : r.a.createElement("div", {
						className: he.a.UnModeratedSubreddit
					}, S.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", r.a.createElement(ge, {
						href: "".concat(ae.a.redditUrl, "/r/redditrequest"),
						rel: de.b,
						target: de.c.BLANK
					}, S.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", S.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ce = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ne = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Se = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ae = s.n(Se);
			const Ie = m.a.div("WidgetContent", Ae.a),
				Pe = m.a.wrapped(o.a, "RawHTMLDisplay", Ae.a);
			var Te = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(Ie, null, r.a.createElement(Pe, {
					html: e.widget.textHtml || ""
				}))),
				Re = s("./src/reddit/components/Widgets/Base/index.tsx");
			var Le = e => r.a.createElement(Re.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
						case "textarea":
							return Te;
						case "button":
							return N;
						case "subreddit-rules":
							return Ne.b;
						case "community-list":
							return z;
						case "calendar":
							return K;
						case "image":
							return ie;
						case "custom":
							return Q;
						case "post-flair":
							return Ce.a;
						default:
							return Le
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
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				currentUser: b.i,
				flairStyleTemplate: c.R,
				hideNSFWPref: b.z,
				isActive: p.j,
				moderatorPermissions: u.i,
				modModeEnabled: c.P,
				post: p.N,
				showEditFlair: m.a,
				subredditOrProfile: p.ab,
				userIsOp: b.hb
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
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = s("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.m.less"),
				l = s.n(c);

			function u() {
				return (u = Object.assign || function(e) {
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
					} = t, d = m(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, s) => {
						const n = !(!t && !s);
						let r = "";
						return r = e ? n ? l.a.mDisabledRedditStyle : l.a.mDisabled : n ? l.a.mActiveRedditStyle : l.a.mActive
					})(n, a, o);
					return r.a.createElement(e, u({
						className: Object(i.a)(l.a.Checkbox, c, s)
					}, d))
				},
				b = p(d.a),
				h = p(o.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? b : a.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(i.a)(l.a.CheckboxSizing, e.className),
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
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(m),
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			class k extends a.a.Component {
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
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
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
				a = e => t => Object.assign(Object.assign({
					source: e,
					action: "click",
					noun: "powerups_user_badge"
				}, i(t)), {
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				o = () => e => Object.assign(Object.assign({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta"
				}, i(e)), {
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				d = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "view",
					noun: "post_upsell"
				}, i(e)), {
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				c = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "click",
					noun: "post_upsell"
				}, i(e)), {
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				l = (e, t) => s => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step"
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
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({
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
		"./src/reddit/icons/svgs/GroupChat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					transform: "translate(-26.000000, -37.000000)"
				}, r.a.createElement("path", {
					d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Key/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				}))
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M13.27 6.67c-.083-.122-.205-.234-.314-.35l-.325-.327-.445-.44a1.198 1.198 0 00-.912-.362h-.296l-.349.001h-.083l-.001.002a.072.072 0 01-.027.012c-.004-.002-.008-.007-.008-.02l.001-.014c-.013.02.034-.062.062-.112l.093-.166.375-.672.899-1.6c.27-.479.183-1.036-.216-1.383l-.457-.458-.18-.176L11.04.56l-.023-.022-.052-.037C10.9.45 10.868.393 10.816.34c-.067-.057-.144-.1-.204-.169a1.006 1.006 0 00-.232-.113 1.418 1.418 0 00-.522-.056l-.643.014-1.159.03-2.368.076C5.349.116 5.04.166 4.787.36c-.259.188-.4.466-.47.783l-.057.224-.032.138-.065.276-.127.55c-.163.713-.318 1.417-.464 2.107l-1.03 3.631a.728.728 0 00.175.696l.22.222c.555.556.735.737.77.768.134.127.31.197.493.197l1.016.002-1.354 3.55-.032.068-.056.128-.12.276a1.15 1.15 0 00-.1.453.985.985 0 00.222.406l.775.833c.133.145.273.219.403.279.064.024.118.057.211.053.086-.005.134-.03.205-.055a1.16 1.16 0 00.424-.276l.421-.424 1.086-1.061 1.078-1.069c.729-.728 1.476-1.486 2.236-2.269l1.15-1.192.58-.61.82-.868a1.227 1.227 0 00.323-.738 1.163 1.163 0 00-.219-.767z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M11.506 6.236c.056.056.95.933.988.998a.234.234 0 01-.029.289l-7.27 7.819a.093.093 0 01-.12.012c-.03-.024-.91-.914-.966-.969a.088.088 0 00.123-.007l7.27-7.819a.238.238 0 00.004-.323zM10.215.933c.103.101.925.913.964.969.05.072.062.17.012.257L8.873 6.152l-1.525-.003 2.879-4.953a.24.24 0 00-.012-.263zM6.28 8.513l-.366.962L4.2 9.47a.24.24 0 01-.164-.065c-.058-.053-.82-.82-.961-.962a.248.248 0 00.161.063l3.043.007z",
				fill: "#C18D42"
			}), r.a.createElement("path", {
				d: "M12.494 7.234c-.038-.065-.932-.942-.988-.998a.238.238 0 01-.005.323l.428.431c.179.18.185.469.015.656-1.507 1.655-4.446 4.856-6.483 7.09a.51.51 0 01-.695.057c-.202-.16-.396-.317-.55-.404a.086.086 0 01-.107-.004c.056.055.935.944.966.969a.093.093 0 00.12-.012l7.27-7.82a.234.234 0 00.03-.288zM11.178 1.902c-.038-.056-.86-.868-.963-.969a.24.24 0 01.012.263l-.054.092c.12.144.237.273.363.399.22.22.269.56.105.824C9.91 3.689 9.198 5 8.477 6.151h.396L11.19 2.16a.237.237 0 00-.013-.257zM4.434 9.266a.703.703 0 01-.47-.181c-.217-.196-.379-.336-.64-.579h-.087a.248.248 0 01-.161-.063c.142.142.903.909.96.962a.24.24 0 00.165.065l1.713.005.12-.314c-.483.103-1.067.106-1.6.105z",
				fill: "#DDBD37"
			}), r.a.createElement("path", {
				d: "M7.733 5.881c.007-.144.096-.49.195-.731l-.58 1 1.524.002c.287-.22.456-.354.532-.68-.533.1-1.134.264-1.671.41zM5.967 8.638c-.122.187-.374.51-.5.855.111.21.182.187.447-.018l.366-.962-.762-.003c.14.03.316.066.449.128z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M8.873 6.152l2.453.002a.243.243 0 01.178.08l.003.002a.238.238 0 01-.005.323l-7.27 7.819a.088.088 0 01-.122.007l-.003-.002a.083.083 0 01-.026-.102l1.833-4.806.366-.962-3.043-.007a.248.248 0 01-.161-.063L3.06 8.43c-.055-.06-.08-.145-.055-.231l1.99-7.012a.485.485 0 01.465-.352h4.556c.08 0 .145.036.188.09 0 0 .005.002.01.01a.24.24 0 01.012.262L7.347 6.15l1.526.002z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M3.523 7.14c-.075.238-.3.798-.094.938.2-.352 3.135-5.148 3.389-5.45.594-.703 2.217-.82 2.46-1.194.097-.151-.044-.253-.333-.253H5.657c-.444 0-.596.831-.696 1.151-.174.554-1.102 3.739-1.438 4.807zM10.943 6.595c.163-.19-.234-.207-.571-.207H6.475c-.47 0-.99.22-1.475.694H9.004c.987 0 1.711-.222 1.939-.487zM7.684 8.626c.033-.115.057-.247-.009-.35-.074-.116-.231-.145-.364-.128-.331.04-.602.283-.766.57-.164.285-.831 2.06-1.436 3.848.958-1.271 2.383-3.276 2.575-3.94z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M13.898 7.37a1.232 1.232 0 00-.133-.345c-.062-.125-.183-.22-.28-.325l-.305-.313-.216-.218-.046-.047c-.017-.016-.02-.026-.075-.06-.052-.028-.061-.064-.088-.095a.613.613 0 00-.08-.087 1.094 1.094 0 00-.486-.31c-.178-.063-.386-.058-.587-.057l-.122.001-.097.007c-.003 0-.006-.001-.007-.007a.04.04 0 01-.002-.01c.003-.006-.005.005.005-.013l.064-.113.126-.226 1.096-1.949a1.157 1.157 0 00-.187-1.416L11.562.89a1.126 1.126 0 00-.695-.328c-.132-.012-.269-.003-.403-.003l-.216.004-.43.009-.216.005h-.025L9.57.58 9.555.58 9.54.578 9.533.576s-.004 0-.026-.01L9.302.485l-.41-.163-.41-.163-.126-.052c-.39-.159-.829-.14-1.203.052l-.047.024-.381.2-.345.184-.15.08-.037.026c.027.008-.31.016-.514.024l-.87.03c-.188.02-.356.064-.513.162a1.03 1.03 0 00-.368.388c-.086.151-.133.34-.177.522l-.054.219-.038.163c-.199.855-.386 1.696-.56 2.518l-.996 3.507c-.074.27.001.558.194.752.4.405.892.902.967.964.138.12.317.185.5.185l1.413.004-1.107 3.522-.08.206-.078.197-.02.05-.01.025a.65.65 0 00.089.597l.006.009.046.052c.01.013.022.025.035.04l.23.271.065.074.097.107.199.217c.133.146.276.295.424.384a1.3 1.3 0 00.218.11c.07.029.18.036.26.019.144-.038.3-.1.461-.226.156-.133.307-.29.465-.438l.623-.58c.775-.72 1.578-1.48 2.402-2.273.824-.792 1.669-1.618 2.526-2.469l.645-.643.89-.899c.108-.109.192-.229.246-.346a1.162 1.162 0 00.089-.747z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M10.98 1.82a.27.27 0 00-.037-.323c.053.05.879.872.924.924a.272.272 0 01.03.317L9.728 6.472 8.28 6.47l2.701-4.65zM12.005 6.564s.878.864.917.917a.227.227 0 01-.018.296l-7.369 7.559a.145.145 0 01-.181.023c-.046-.03-.743-.739-.92-.92a.142.142 0 00.184-.02l7.369-7.56a.222.222 0 00.016-.293l.002-.002zM2.848 8.71l3.27.007-.287.915-2.066-.005a.283.283 0 01-.188-.069c-.08-.066-.841-.839-.938-.935V8.62a.28.28 0 00.21.089z",
				fill: "#A1000A"
			}), r.a.createElement("path", {
				d: "M9.728 6.472l2.17-3.734a.272.272 0 00-.03-.317 87.777 87.777 0 00-.925-.924c.078.083.101.211.037.323l-.151.26.496.507a.23.23 0 01.035.276L9.266 6.472h.462zM12.922 7.481a57.664 57.664 0 00-.917-.917l-.002.002a.222.222 0 01-.016.294l-.13.133.455.5a.23.23 0 01-.005.315l-6.543 6.73a.23.23 0 01-.327.002l-.473-.476-.346.354a.142.142 0 01-.183.021c.176.181.873.89.919.92a.145.145 0 00.181-.024l7.369-7.558c.085-.09.08-.211.018-.296zM5.9 9.408H4.236a.458.458 0 01-.323-.133l-.567-.564-.497-.001a.28.28 0 01-.209-.09v.003c.097.096.858.869.938.935.05.044.115.069.188.069l2.066.004.07-.223z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M8.28 6.47l1.449.002c.422-.26.53-.486.533-.826-.709 0-1.645.245-1.81.528l-.172.296zM6.118 8.717h-.097c-.227.264-.451.504-.6.913.137.137.222.12.41.002l.287-.915z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M12.003 6.566a.208.208 0 00-.179-.091L9.73 6.472l-1.45-.002 2.702-4.65a.271.271 0 00-.037-.323l-.002-.002a.268.268 0 00-.195-.083H4.85a.422.422 0 00-.406.305L2.567 8.334a.293.293 0 00.073.287.28.28 0 00.209.089l3.269.007-.287.915-1.458 4.64a.135.135 0 00.02.126v.002s.005.003.01.01l.03.027a.142.142 0 00.186-.018l7.368-7.56a.221.221 0 00.016-.293z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M12.036 6.542c-.05-.08-.157-.118-.237-.11l-.235-.003-.47-.002-.938.006-1.877.013v.048c.313.11.626.183.939.239.156.03.312.055.469.073a12.007 12.007 0 001.408.097c.127.007.255 0 .383-.003a5.377 5.377 0 00-.209.289c-.204.294-.394.6-.552.939l.034.033.745-.751.372-.376c.062-.068.124-.113.187-.2a.263.263 0 00-.019-.292zM5.729 13.054c-.175.133-.355.26-.523.4l-.182.146.164-.49c.082-.235.144-.476.217-.713.071-.238.14-.477.199-.719.127-.48.238-.966.331-1.458.096-.49.169-.987.205-1.496l-.046-.014-.907 2.836-.453 1.418-.219.711-.11.356-.037.123a.187.187 0 01.026-.022l.006-.003-.01.008-.023.02-.016.052c-.008.03-.022.057-.025.1a.176.176 0 00.036.112l-.006-.018.02.032c-.003 0-.005-.002-.006-.004l.005.006.03.027-.011-.027a.04.04 0 00.04.04l-.02-.005a.181.181 0 00.195.002c.057-.043.08-.08.123-.12l.007-.007.008.011c-.003.019-.007.035-.004.027l.007-.02.023.035v-.002l-.017-.05.003-.007.005-.013-.002-.005.006-.006.01-.025.005.01.174-.182.452-.468.904-.938-.034-.034c-.19.12-.371.245-.55.374zM4.656 2.063l.04-.26a.18.18 0 01.046-.11.202.202 0 01.088-.063c.013-.005.042-.007.062-.011.09-.015.18-.027.27-.045.182-.032.363-.07.547-.114v-.048l-.553-.002-.276-.002a.45.45 0 00-.458.299l-.078.267-.154.53-.613 2.119-.591 2.125-.296 1.063-.147.532c-.067.194.098.425.306.415V8.71a.228.228 0 01-.168-.149.186.186 0 01.02-.174c.082-.168.155-.338.234-.507.145-.341.288-.683.414-1.03.137-.342.245-.694.367-1.041.113-.35.215-.704.323-1.055l.28-1.067c.078-.36.172-.715.236-1.08.033-.18.072-.36.101-.544z",
				fill: "#FFB8B8"
			}), r.a.createElement("path", {
				d: "M9.533 7.506L6.789 6.76l2.596-5.347-1.619-.69-1.4.69L4.514 7.37l3.292.67-1.172 2.776 2.899-3.309z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M5.902 6.759l2.7-5.347-.951-.385L5.42 6.87l2.341.63-1.86-.742z",
				fill: "#CDA467"
			}), r.a.createElement("path", {
				d: "M4.514 7.37l1.852-5.958-.622-.208-1.23 6.165zM9.385 1.412L6.79 6.76l3.433-5.555-.837.208z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M6.534 1.593l-1.768 5.57.437-.24 2.178-5.719-.847.389zM9.124 7.6L5.9 6.76l1.195.61 1.163.23h.865zM8.453 7.866L7.144 9.992l.768-1.94.541-.186z",
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
				p = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, n = Object(m.a)(s, u.O.HOT, {});
					return r.a.createElement(p.a, {
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
				y = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				w = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				v = s("./src/reddit/components/JumpToContent/index.tsx"),
				E = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				j = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				C = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				N = s.n(C);

			function S(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return n.createElement(n.Fragment, null, n.createElement(v.a, null), n.createElement(j.a, {
					isModHub: !1,
					className: N.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), n.createElement(E.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var A = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				I = s.n(A);
			class P extends r.a.Component {
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
					} = s, o = n[k.z], d = n[k.A], c = k.B in n;
					switch (i) {
						case f.m.Create:
						case f.m.Edit:
							return r.a.createElement(g.a, {
								contentClassName: I.a.wikiPageEditorContent,
								isCreation: i === f.m.Create,
								subredditName: t,
								topBarClassName: I.a.communityWikiTopBar,
								wikiPageName: a
							});
						case f.m.Revisions:
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
							}) : a && (o || c) ? r.a.createElement(x.a, {
								revisionId: o ? Object(y.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? r.a.createElement(S, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var T = Object(O.t)()(P),
				R = s("./src/reddit/constants/componentSizes.ts"),
				L = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				B = s("./src/reddit/layout/page/Listing/index.tsx"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const M = Object(O.t)(),
				D = Object(i.b)(() => Object(a.c)({
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
						return Object(_.B)(e, {
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
			class F extends r.a.PureComponent {
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
					return r.a.createElement(B.a, {
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
						content: r.a.createElement(T, {
							subredditName: n
						}),
						sidebar: s && r.a.createElement(b, {
							subreddit: s,
							subredditName: n
						})
					})
				}
			}
			t.default = M(D(F))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = e => n.Q.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: i.H,
				experimentName: n.P
			})
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return pe
			})), s.d(t, "a", (function() {
				return be
			})), s.d(t, "c", (function() {
				return he
			})), s.d(t, "p", (function() {
				return ge
			})), s.d(t, "q", (function() {
				return xe
			})), s.d(t, "o", (function() {
				return ke
			})), s.d(t, "n", (function() {
				return fe
			})), s.d(t, "i", (function() {
				return Oe
			})), s.d(t, "d", (function() {
				return ye
			})), s.d(t, "j", (function() {
				return we
			})), s.d(t, "m", (function() {
				return ve
			})), s.d(t, "k", (function() {
				return Ee
			})), s.d(t, "l", (function() {
				return je
			})), s.d(t, "e", (function() {
				return Ce
			})), s.d(t, "h", (function() {
				return Ne
			})), s.d(t, "f", (function() {
				return Se
			})), s.d(t, "g", (function() {
				return Ae
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
				p = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const b = {};
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
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
						case p.a: {
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
			const x = {};
			var k = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
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
				f = s("./src/lib/omitKey/index.ts");
			const O = {};
			var y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.b: {
						const {
							key: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case p.d:
					case p.c: {
						const {
							key: s
						} = t.payload;
						return Object(f.a)(e, s)
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
						case p.d:
						case p.b:
						case p.c: {
							const {
								key: s
							} = t.payload, n = t.type === p.d;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				E = Object(a.c)({
					error: y,
					pending: v
				}),
				j = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const C = {};
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.c: {
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
					case p.a: {
						const {
							page: {
								revision: s
							},
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: r
						} = t.payload, i = e[n];
						return i && s ? Object.assign(Object.assign({}, Object(f.a)(e, r)), {
							[n]: Object.assign(Object.assign({}, i), {
								ids: [s.id, ...i.ids]
							})
						}) : e
					}
					case j.a: {
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
			const S = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
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
						case p.c: {
							const {
								revisions: s
							} = t.payload;
							return Object.assign(Object.assign({}, e), s)
						}
						case p.a: {
							const {
								page: s
							} = t.payload, n = s.revision;
							return n ? Object.assign(Object.assign({}, e), {
								[n.id]: n
							}) : e
						}
						case p.e: {
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
					api: E,
					listings: N,
					models: A
				}),
				P = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const T = {};
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.c:
					case P.a: {
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
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case P.b: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[s]: n
						})
					}
					case P.d:
					case P.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(f.a)(e, s)
					}
					default:
						return e
				}
			};
			const _ = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.d:
						case P.c:
						case P.b: {
							const {
								subredditName: s
							} = t.payload, n = t.type === P.d;
							return Object.assign(Object.assign({}, e), {
								[s]: n
							})
						}
						default:
							return e
					}
				},
				M = Object(a.c)({
					error: B,
					pending: W
				});
			const D = {};
			var F = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.c:
						case P.a: {
							const {
								subredditName: s,
								bannedContributors: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), n)
							})
						}
						case P.e: {
							const {
								subredditName: s,
								bannedContributor: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: Object.assign(Object.assign({}, e[s]), n)
							})
						}
						case P.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload, r = Object(f.a)(e[s], n);
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
			const K = {};
			var V = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.c:
						case P.a: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: H()([...e[s] || [], ...n])
							})
						}
						case P.e: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[s]: H()([...n, ...e[s] || []])
							})
						}
						case P.f: {
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
				q = Object(a.c)({
					afterToken: R,
					api: M,
					models: F,
					userOrder: V
				});
			const z = {};
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case P.g: {
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
				Y = Object(a.c)({
					listing: q,
					search: G
				}),
				J = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const X = {};
			var Q = function() {
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
			const Z = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
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
						return Object(f.a)(e, s)
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
						} = t.payload, r = Object(f.a)(e[s], n);
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
					afterToken: Q,
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
					pageSettings: k,
					revisions: I,
					wikiBannedContributors: Y,
					wikiContributors: le
				});
			Object(i.a)({
				pages: {
					subredditWiki: ue
				}
			});
			const me = [],
				pe = (e, t) => {
					const {
						subredditName: s
					} = t;
					if (e.pages && e.pages.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				be = (e, t) => {
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
				xe = (e, t) => {
					let {
						listingKey: s
					} = t;
					return !!e.pages.subredditWiki.revisions.api.pending[s]
				},
				ke = (e, t) => {
					let {
						listingKey: s
					} = t;
					return !!e.pages.subredditWiki.revisions.api.error[s]
				},
				fe = (e, t) => {
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
				Ee = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[s.toLowerCase()]
				},
				je = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[s.toLowerCase()]
				},
				Ce = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[s.toLowerCase()]
				},
				Ne = Object(n.a)((e, t) => {
					let {
						subredditName: s
					} = t;
					const n = s.toLowerCase(),
						r = e.pages.subredditWiki.wikiBannedContributors.listing,
						i = r.userOrder[n],
						a = r.models[n];
					return i ? i.map(e => a[e]) : me
				}),
				Se = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[s.toLowerCase()]
				},
				Ae = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[s.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.f2fdc434de0556e3c6c8.js.map