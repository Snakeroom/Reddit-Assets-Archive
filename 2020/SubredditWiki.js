// https://www.redditstatic.com/desktop2x/SubredditWiki.ca794ad54ceab99fedd8.js
// Retrieved at 6/8/2020, 5:10:06 PM by Reddit Dataminer v1.0.0
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
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const r = new Map,
				i = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!i.get(t)) {
						i.set(t, n);
						const s = r.get(t);
						if (s) {
							s(e, n && !!i.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						r.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				o = e => {
					try {
						r.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "h", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var s = n("./node_modules/linkify-it/index.js"),
				r = n.n(s),
				i = n("./node_modules/tlds/index.js"),
				a = n.n(i),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				d = n("./node_modules/lodash/values.js"),
				c = n.n(d);
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
				f = p.normalize;
			p.normalize = e => {
				f.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const k = (e, t) => {
					return (x.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				w = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				O = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const i = Object(r.e)(e),
					a = encodeURIComponent("".concat(t).concat(i));
				return "".concat(s.a.accountManagerOrigin).concat(n || "/login", "?dest=").concat(a)
			}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = n("./src/reddit/helpers/routeKey/index.ts"),
				i = n("./src/reddit/helpers/trackers/screenview.ts"),
				a = n("./src/telemetry/index.ts"),
				o = n("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const n = t(),
					{
						currentPage: d
					} = n.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(s.a)(n),
					u = Object(r.b)(c, n, l);
				u && a.c.has(u) && Object(i.h)(c, n, o.TimerType.InApp, a.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "subredditWikiDataPending", (function() {
				return A
			})), n.d(t, "subredditWikiDataLoaded", (function() {
				return U
			})), n.d(t, "subredditWikiDataFailed", (function() {
				return H
			})), n.d(t, "fetchSubredditWikiData", (function() {
				return G
			})), n.d(t, "handleWikiRedirects", (function() {
				return q
			})), n.d(t, "subredditWikDataRequested", (function() {
				return J
			})), n.d(t, "subredditWikiPageRequested", (function() {
				return Z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.array.sort.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEmpty.js"),
				i = n.n(r),
				a = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/actions/platform.ts"),
				m = n("./src/reddit/helpers/path/index.ts");
			var p = n("./src/reddit/actions/ads/index.ts"),
				b = n("./src/reddit/actions/pages/subreddit.ts"),
				h = n("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				x = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				f = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				k = n("./src/lib/makeGqlRequest/index.ts"),
				y = n("./src/graphql/operations/WikiComparisonDiff.json"),
				w = n("./src/reddit/helpers/wiki/wikiRevision.ts");
			var O = n("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				v = n("./src/reddit/selectors/subredditWiki.ts"),
				C = n("./src/reddit/actions/wiki/wikiDiff/constants.ts");
			const E = Object(d.a)(C.c),
				j = Object(d.a)(C.b),
				_ = Object(d.a)(C.a),
				N = e => async (t, n, s) => {
					const r = n(),
						i = Object(O.a)(e),
						a = Object(v.i)(r, {
							key: i
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: i
					};
					t(E(d));
					const c = await ((e, t) => Object(k.a)(e, Object.assign({}, y, {
						variables: Object.assign({}, t, {
							comparisonRevisionId: Object(w.b)(t.comparisonRevisionId),
							revisionId: Object(w.b)(t.revisionId)
						})
					})))(s.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							n = t && t.page && t.page.revisionComparisonDiffHtml;
						n ? u = n : l = {
							type: o.D.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.D.UNKNOWN_ERROR
					};
					return t(l ? _(Object.assign({}, d, {
						error: l
					})) : j(Object.assign({}, d, {
						htmlDiff: u
					}))), !l
				};
			var S = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				P = n("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				T = n("./src/reddit/constants/parameters.ts"),
				I = n("./src/reddit/constants/wiki.ts"),
				L = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				M = n("./src/reddit/helpers/brandSafety/index.ts"),
				R = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				W = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				B = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				F = n("./src/reddit/selectors/subreddit.ts");
			const A = Object(d.a)(h.c),
				U = Object(d.a)(h.b),
				H = Object(d.a)(h.a),
				V = (e, t, n, s) => {
					return n === I.j ? z(e, t) : !!Object(v.c)(e, {
						subredditName: t,
						wikiPageName: n,
						revisionId: s
					})
				},
				z = (e, t) => !!Object(v.b)(e, {
					subredditName: t
				}),
				G = e => async (t, n, r) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === I.j, l = Object.assign({}, e, {
						includePageData: e.includePageData && !c
					}), u = d ? Object(R.a)(Object.assign({}, e, {
						wikiPageName: d
					})) : void 0;
					t(A({
						options: l,
						pageKey: u
					}));
					const m = await Object(L.a)(r.gqlContext(), l),
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
							type: o.D.NOT_FOUND_ERROR
						}
					})), a && t(Object(g.e)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: W.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: G(e)
					}))), !(!m.ok || !i()(p.data.subreddit)) || !(!m.ok || !b)
				}, K = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (n, s) => {
						const r = s(),
							i = {
								sort: o.N.HOT
							},
							a = Object(c.a)(e, i.sort),
							d = r.listings.postOrder.api.error[a],
							l = r.listings.postOrder.api.pending[a],
							u = !!r.listings.postOrder.ids[a];
						return !!(l || u && !d) || (await n(Object(b.i)(a, e, i, t)), !s().listings.postOrder.api.error[a])
					}
				}, q = e => async (t, n) => {
					const {
						params: s,
						url: r
					} = e, {
						wikiPageName: i
					} = s, o = Object(B.a)(r, s);
					let d = !1;
					return I.l.includes(i || "") ? (await (async (e, t) => {
						const n = "".concat(l.a.oldRedditUrl).concat(Object(m.b)(e));
						window.location.href = n
					})(e.url), d = !0) : r !== o && (await t(Object(a.c)(o)), d = !0), d
				}, J = function e(t, n) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (i, a, d) => {
						const {
							subredditName: c = I.e,
							wikiPageName: l,
							wikiSubRoute: u
						} = t, m = n[T.w], p = n[T.x], b = m ? Object(w.a)(m) : void 0, h = p ? Object(w.a)(p) : void 0, k = l === I.j, y = u === I.m.Revisions;
						let O = !1,
							v = !1;
						if (r) {
							const {
								pageName: e
							} = t;
							O = e === o.Ob.WikiContributors, v = e === o.Ob.WikiBanned
						}
						const C = a(),
							E = (k || r) && !z(C, c),
							j = !!l && !V(C, c, l, b),
							_ = [];
						_.push(i(K(c))), (E || j) && _.push(i(G({
							includeDirectory: E,
							includePageData: j,
							revisionId: b,
							subredditName: c,
							wikiPageName: l
						}))), u === I.m.Settings && l && _.push(i(Object(S.c)(c, l))), l && b && h && _.push(i(N({
							comparisonRevisionId: h,
							revisionId: b,
							subredditName: c,
							wikiPageName: l
						}))), y && _.push(i(Object(P.c)({
							isRecent: !l,
							wikiPageName: l,
							subredditName: c
						}))), O && _.push(i(Object(f.e)(c))), v && _.push(i(Object(x.e)(c))), (await Promise.all(_)).every(Boolean) || i(Object(g.e)({
							kind: W.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: e(t, n, r)
						}))
					}
				}, Z = e => async (t, n) => {
					if (await t(q(e))) return;
					const {
						params: s,
						queryParams: r
					} = e, i = s.subredditName || I.e;
					t(u.l({
						title: s.wikiPageName ? "".concat(s.wikiPageName, " - ").concat(i) : "wiki - ".concat(i)
					})), await t(J(s, r));
					const a = Object(F.z)(n(), {
							subredditName: i
						}),
						o = n();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(D.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(M.a)([], [a])
					})))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/graphql/operations/SubredditWikiBannedContributors.json"),
				u = n("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, Object.assign({}, l, {
				variables: t
			}));
			var p = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, r = [], i = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n,
							editWikiBanInfo: s
						} = e.node;
						n.id && n.name && n.icon && (i[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t,
							daysRemaining: s.daysRemaining,
							note: s.note
						}, r.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						bannedContributors: i,
						userOrder: r
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				f = Object(i.a)(h.b),
				k = e => async (t, n, s) => {
					t(g({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(s.gqlContext(), i);
					if (a.ok) {
						const n = a.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(x(Object.assign({}, n, {
								subredditName: e.toLowerCase()
							})))
						}
					} else {
						const n = a.error || {
							type: r.D.UNKNOWN_ERROR
						};
						t(f({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, y = Object(i.a)(h.a), w = (e, t) => async (n, r, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(y(Object.assign({}, s, {
								subredditName: e.toLowerCase()
							})))
						}
					} else n(Object(a.e)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e, t)
					}));
					return d.ok
				}, O = Object(i.a)(h.e), v = (e, t) => async (n, i, d) => {
					const l = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/friend"),
						method: r.bb.POST,
						data: {
							api_type: "json",
							name: n.username,
							type: "wikibanned",
							duration: n.duration,
							ban_reason: n.banReason,
							note: n.note
						}
					}))(d.apiContext(), e, t);
					if (l.ok) {
						n(Object(a.e)({
							kind: b.b.SuccessMod,
							text: s.fbt._("Successfully banned user", null, {
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
							n(O({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						l.error.type === r.D.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), n(Object(a.e)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return l.ok
				}, C = Object(i.a)(h.f), E = (e, t) => async (n, i, d) => {
					const l = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/unfriend"),
						method: r.bb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (n(Object(a.e)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), n(C({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(a.e)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e, t)
					})), l.ok
				}, j = Object(i.a)(h.g), _ = (e, t) => async (n, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								r = Object.keys(s.bannedContributors)[0];
							n(j({
								subredditName: e.toLowerCase(),
								bannedContributor: s.bannedContributors[r]
							}))
						}
					} else n(Object(a.e)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/graphql/operations/SubredditWikiContributors.json"),
				u = n("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, Object.assign({}, l, {
				variables: t
			}));
			var p = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, r = [], i = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n
						} = e.node;
						n.id && n.name && n.icon && (i[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t
						}, r.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						contributors: i,
						userOrder: r
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(i.a)(h.d),
				x = Object(i.a)(h.c),
				f = Object(i.a)(h.b),
				k = e => async (t, n, s) => {
					t(g({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(s.gqlContext(), i);
					if (a.ok) {
						const n = a.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(x(Object.assign({}, n, {
								subredditName: e.toLowerCase()
							})))
						}
					} else {
						const n = a.error || {
							type: r.D.UNKNOWN_ERROR
						};
						t(f({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, y = Object(i.a)(h.a), w = (e, t) => async (n, r, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(y(Object.assign({}, s, {
								subredditName: e.toLowerCase()
							})))
						}
					} else n(Object(a.e)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e, t)
					}));
					return d.ok
				}, O = Object(i.a)(h.e), v = (e, t) => async (n, i, d) => {
					const l = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/friend"),
						method: r.bb.POST,
						data: {
							api_type: "json",
							name: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (l.ok) {
						n(Object(a.e)({
							kind: b.b.SuccessMod,
							text: s.fbt._("User has been successfully added", null, {
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
								s = Object.keys(t.contributors)[0];
							!!i().subreddits.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || n(O({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						const t = l.error.type;
						t === r.D.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === r.D.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), n(Object(a.e)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return l.ok
				}, C = Object(i.a)(h.f), E = (e, t) => async (n, i, d) => {
					const l = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/unfriend"),
						method: r.bb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (n(Object(a.e)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), n(C({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(a.e)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e, t)
					})), l.ok
				}, j = Object(i.a)(h.g), _ = (e, t) => async (n, r, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								r = Object.keys(s.contributors)[0];
							n(j({
								subredditName: e.toLowerCase(),
								contributor: s.contributors[r]
							}))
						}
					} else n(Object(a.e)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/subredditSettings.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				m = n("./src/graphql/operations/SubredditWikiPageSettings.json"),
				p = n("./src/reddit/models/SubredditWikiPage/index.ts");
			const b = (e, t) => Object(c.a)(e, Object.assign({}, m, {
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
						editorsInfo: n,
						isVisible: s
					} = e, {
						edges: r,
						pageInfo: i
					} = n, a = [];
					return r.forEach(e => {
						e.node.name && e.node.icon && a.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: a,
						isVisible: s,
						afterToken: i.hasNextPage ? i.endCursor : null
					}
				},
				x = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const w = Object(i.a)(y.c),
				O = (e, t) => async (n, s, r) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						o = await b(r.gqlContext(), i),
						d = Object(k.E)(s(), e);
					if (Object(k.S)(s(), d) || await n(Object(a.f)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							n(w({
								pageKey: Object(x.a)(i),
								settings: e
							}))
						}
					}
					return o.ok
				}, v = Object(i.a)(y.b), C = (e, t, n) => async (r, i, a) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: n
						},
						c = await b(a.gqlContext(), d);
					if (c.ok) {
						const n = c.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s && s.page) {
							const n = g(s.page.settings),
								{
									editorsInfo: i,
									afterToken: a
								} = n;
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
						kind: f.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t, n)
					}));
					return c.ok
				}, E = Object(i.a)(y.d), j = e => {
					let {
						editPermissions: t,
						isVisible: n,
						wikiPageName: s,
						subredditName: i
					} = e;
					return async (e, a, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/wiki/settings/").concat(e.wikiPageName),
							method: r.bb.POST,
							data: {
								permlevel: h[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: o.apiContext(),
							editPermissions: t,
							isVisible: n,
							wikiPageName: s,
							subredditName: i
						});
						return c.ok && e(E({
							editPermissions: t,
							isVisible: n,
							pageKey: Object(x.a)({
								wikiPageName: s,
								subredditName: i
							})
						})), c.ok
					}
				}, _ = e => {
					let {
						subredditName: t,
						username: n,
						wikiPageName: i
					} = e;
					return async (e, a, c) => {
						const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/alloweditor/add"),
							method: r.bb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: c.apiContext(),
							wikiPageName: i,
							subredditName: t,
							username: n
						});
						if (m.ok) e(Object(o.e)({
							kind: f.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(O(t, i));
						else if (m.error) {
							const t = m.error.type;
							let n = s.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === r.D.NOT_FOUND_ERROR && (n = s.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(o.e)({
								kind: f.b.Error,
								text: n
							}))
						}
						return m.ok
					}
				}, N = Object(i.a)(y.a), S = e => {
					let {
						subredditName: t,
						username: n,
						wikiPageName: s
					} = e;
					return async (e, i, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/alloweditor/del"),
							method: r.bb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: a.apiContext(),
							wikiPageName: s,
							subredditName: t,
							username: n
						});
						return c.ok && (e(Object(o.e)({
							kind: f.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(N({
							username: n,
							pageKey: Object(x.a)({
								wikiPageName: s,
								subredditName: t
							})
						}))), c.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/graphql/operations/WikiRevisions.json");
			var l = n("./src/lib/makeApiRequest/index.ts"),
				u = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts"),
				p = n("./src/reddit/helpers/wiki/wikiRevision.ts");
			var b = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t.subredditName, "/api/wiki/hide"),
				method: r.bb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t.subredditName, "/api/wiki/revert"),
				method: r.bb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var g = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						n = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!n) throw new Error("Invalid response");
					return (e => {
						const t = {},
							n = [];
						return e.edges.forEach(e => {
							const s = e.node;
							t[s.id] = s, n.push(s.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: n
						}
					})(n)
				},
				x = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				f = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/subredditWiki.ts"),
				w = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const O = Object(i.a)(w.d),
				v = Object(i.a)(w.c),
				C = Object(i.a)(w.b),
				E = e => async (t, n, i) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = n(), h = Object(x.a)(e), f = Object(y.p)(b, {
						listingKey: h
					});
					if (!o && !!f) return !0;
					const w = f && f.pageInfo.endCursor || void 0;
					if (!(!f || f.pageInfo.hasNextPage)) return !0;
					const j = {
							after: w,
							isRecent: u,
							subredditName: m,
							wikiPageName: p
						},
						_ = {
							key: h,
							options: j
						};
					t(O(_));
					const N = await ((e, t) => Object(d.a)(e, Object.assign({}, c, {
						variables: t
					})))(i.gqlContext(), j);
					if (N.ok) {
						const e = N.body;
						if (e.data.subreddit) {
							const n = g(e.data);
							t(v(Object.assign({}, _, n)))
						}
					} else {
						const n = N.error || {
							type: r.D.UNKNOWN_ERROR
						};
						t(C(Object.assign({}, _, {
							error: n
						}))), l && t(Object(a.e)({
							kind: k.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: E(e)
						}))
					}
					return N.ok
				}, j = Object(i.a)(w.a), _ = e => async (t, n, r) => {
					const {
						subredditName: i,
						wikiPageName: d
					} = e, c = Object(f.a)(Object.assign({}, e, {
						revisionId: void 0
					})), l = Object(x.a)(Object.assign({}, e, {
						isRecent: !1
					})), u = Object(x.a)(Object.assign({}, e, {
						isRecent: !0
					})), m = Object(y.p)(n(), {
						listingKey: l
					}), p = m && m.ids[0];
					if ((await h(r.apiContext(), e)).ok) {
						const e = (await Object(o.a)(r.gqlContext(), {
								includePageData: !0,
								subredditName: i,
								wikiPageName: d
							})).body,
							n = e.data.subreddit && e.data.subreddit.wiki,
							m = n && n.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(a.e)({
							kind: k.b.SuccessCommunityGreen,
							text: s.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(j({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: i,
							wikiPageName: d
						}))
					} else t(Object(a.e)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e)
					}))
				}, N = Object(i.a)(w.e), S = e => async (t, n, r) => {
					const i = await b(r.apiContext(), e);
					if (i.ok) {
						const n = i.body.status;
						t(N({
							revisionId: e.revisionId,
							isHidden: n
						}))
					} else t(Object(a.e)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/components/AuthorLink/index.m.less"),
				c = n.n(d);
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
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/LevelBadge/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3wU37K5r41vOkCGVpEDcRK",
				icon: "_3nyGWtYJVWP4_98uoGJ_71",
				text: "_3sYDh6pENyPn_M3y6_TWkw"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				p = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				b = n("./src/reddit/components/SubredditNav/index.tsx"),
				h = n("./src/reddit/components/SubscribeButton/index.tsx"),
				g = n("./src/reddit/constants/postLayout.ts"),
				x = n("./src/reddit/constants/posts.ts"),
				f = n("./src/reddit/featureFlags/index.ts"),
				k = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				y = n("./src/reddit/constants/tracking.ts"),
				w = n("./src/reddit/selectors/telemetry.ts");
			var O = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = n("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				C = n("./src/reddit/selectors/gold/powerups.ts"),
				E = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				j = n("./src/reddit/selectors/widgets.ts"),
				_ = n("./src/reddit/icons/svgs/Powerup/index.tsx"),
				N = n("./src/reddit/components/CommunityIdTopBar/LevelBadge/index.m.less"),
				S = n.n(N);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var T = e => r.a.createElement("button", {
					className: Object(o.a)(e.className, S.a.container),
					onClick: e.onClick
				}, r.a.createElement(_.a, {
					className: S.a.icon
				}), r.a.createElement("div", {
					className: S.a.text
				}, P._("Level {level}", [P._param("level", e.level)], {
					hk: "4BNMWs"
				}))),
				I = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				L = n.n(I);
			const M = c.a.wrapped(O.a, "Planet", L.a),
				R = c.a.img("SubredditIcon", L.a),
				W = Object(a.c)({
					arePowerupsEnabled: v.a,
					powerups: C.g,
					spPollsEnabled: f.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(E.a)(e, {
							subredditId: n
						})
					},
					widget: j.f
				});
			t.a = Object(i.b)(W, (e, t) => ({
				openPowerupsModal: () => {
					e(Object(u.i)(l.a.ECON_POWERUPS_PURCHASE))
				}
			}))(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					s = e.subreddit ? e.subreddit.url : e.subredditUrl,
					i = e.subreddit ? e.subreddit.title : "",
					a = e.subreddit && Object(k.a)(e),
					d = !(!e.theme || !a),
					c = n.charAt(0).toUpperCase() + n.slice(1),
					l = !!e.subreddit && e.subredditInlineEditingEnabled,
					u = Object(o.a)(L.a.SubredditIcon, L.a.editableIcon, {
						[L.a.emptyEditableIcon]: !a
					}),
					f = e.arePowerupsEnabled && e.powerups && e.powerups.tiersInfo.length > 1,
					O = r.a.createElement(p.a, {
						className: u,
						subreddit: e.subreddit,
						iconUrl: a || void 0,
						inTopBar: !0
					}),
					v = d ? r.a.createElement(R, {
						src: a || void 0
					}) : r.a.createElement(M, null),
					C = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0);
				return r.a.createElement("div", {
					className: L.a.container,
					style: {
						maxWidth: e.layout === g.g.Large ? "".concat(984, "px") : "100%"
					}
				}, r.a.createElement("div", {
					className: L.a.subredditMetaContainer
				}, l ? O : v, r.a.createElement("div", {
					className: Object(o.a)(L.a.textContainer, {
						[L.a.textContainerNoIcon]: !d
					})
				}, r.a.createElement("div", {
					className: L.a.text
				}, r.a.createElement("h1", {
					className: L.a.title
				}, i || c), !!i && r.a.createElement("h2", {
					className: L.a.description
				}, "r/", n), f && r.a.createElement(T, {
					level: e.powerups.tier,
					className: L.a.levelBadge,
					onClick: e.openPowerupsModal
				})), r.a.createElement("div", {
					className: L.a.subscribeButtonContainer
				}, r.a.createElement(h.a, {
					className: L.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign({}, w.defaults(t), {
							source: "id_banner",
							action: y.c.CLICK,
							noun: e,
							subreddit: w.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: n,
						type: x.a.SUBREDDIT
					},
					small: !0
				})), e.subreddit && r.a.createElement(m.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), C && r.a.createElement(b.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: s,
					subredditId: t,
					subredditNavContainerClassName: L.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => i.a.createElement(o.d, null, i.a.createElement(o.h, null, i.a.createElement(c.a, null, i.a.createElement(o.p, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), i.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, i.a.createElement(o.b, null)))), i.a.createElement(o.k, null, i.a.createElement(o.o, {
				className: u.a.ModalText
			}, e.modalText)), i.a.createElement(o.f, null, i.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "3DgVq6"
			})), i.a.createElement(o.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/loginHref/index.ts"),
				l = n("./src/reddit/actions/contentGate.ts"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Footer/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = p.a.div("FooterContainer", h.a), f = p.a.div("UserAgreement", h.a), k = p.a.a("UserAgreementLink", h.a), y = p.a.a("PrivacyLink", h.a);
			var w = () => i.a.createElement(x, null, i.a.createElement(f, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", i.a.createElement(k, {
					href: "".concat(s.a.redditUrl, "/help/useragreement")
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", i.a.createElement(y, {
					href: "".concat(s.a.redditUrl, "/help/privacypolicy")
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				O = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				C = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/flatMap.js")),
				E = n.n(C),
				j = n("./src/lib/linkMatchers/index.ts"),
				_ = n("./src/lib/linkMatchers/customLinks.ts"),
				N = n("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				P = e => {
					const t = e.split(S);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, i] = t.slice(s, s + 3);
						n.push(e), n.push([i, r])
					}
					return n
				};
			var T = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = E()(t, P)), e.parseRegularLinks && (t = E()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.e.add(_.g.subreddit.prefix, _.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return i.a.createElement(N.a, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return i.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				I = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				M = n("./src/reddit/models/ContentGate.ts"),
				R = n("./src/reddit/selectors/meta.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/ContentGate/index.m.less"),
				B = n.n(D);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), A = p.a.div("ButtonsContainer", B.a), U = p.a.div("Container", B.a), H = p.a.div("Description", B.a), V = p.a.div("PrivateSubredditDetails", B.a), z = p.a.div("PrivateSubredditDescription", B.a), G = p.a.h3("PrivateSubredditName", B.a), K = p.a.a("Link", B.a), q = p.a.wrapped(L.h, "LinkRouterButton", B.a), J = p.a.wrapped(L.g, "LinkButton", B.a), Z = p.a.wrapped(L.k, "SecondaryLinkRouterButton", B.a), X = p.a.wrapped(L.j, "SecondaryLinkButton", B.a), Y = p.a.wrapped(q, "GoHomeLinkButton", B.a), Q = p.a.img("Image", B.a), $ = p.a.img("ImagePlaceholder", B.a), ee = p.a.wrapped(q, "LeftLinkRouterButton", B.a), te = p.a.wrapped(J, "LeftLinkButton", B.a), ne = p.a.wrapped(X, "SecondaryLeftLinkButton", B.a), se = p.a.wrapped(Z, "SecondaryLeftLinkRouterButton", B.a), re = p.a.h3("Title", B.a), ie = p.a.div("PageBody", B.a), ae = p.a.div("QuarantineMessageWrapper", B.a), oe = Object(d.c)({
				isLoggedIn: W.G,
				origin: R.l,
				user: W.i
			}), de = Object(I.t)(), ce = Object(a.b)(oe, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(u.C(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(l.l)())
					}
				}
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: n,
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
					subredditDescription: f,
					subredditName: k,
					user: y
				} = e, w = () => {
					a ? x() : Object(l.k)(), window.location.reload()
				};
				switch (n) {
					case M.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/gold/premium-crest.png")
						}), i.a.createElement(re, null, F._("r/{community name} is a Reddit Premium community", [F._param("community name", k)], {
							hk: "2lyDwB"
						})), i.a.createElement(H, null, F._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(A, null, y ? i.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/premium")
						}, F._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(te, {
							href: Object(c.a)(o, d)
						}, F._("Sign Up", null, {
							hk: "rvpjy"
						})), y ? i.a.createElement(q, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(X, {
							href: Object(c.a)(o, d)
						}, F._("Log in", null, {
							hk: "odEG4"
						}))));
					case M.a.Nsfw:
					case M.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), i.a.createElement(re, null, n === M.a.Nsfw ? F._("You must be 18+ to view this community", null, {
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
							onClick: w
						}, F._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case M.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/private.png")
						}), i.a.createElement(re, null, F._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), f && f.length && i.a.createElement(V, null, i.a.createElement(G, null, "r/", k), i.a.createElement(z, null, i.a.createElement("div", null, f))), i.a.createElement(H, null, F._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), i.a.createElement(A, null, y ? i.a.createElement(ne, {
							href: "".concat(s.a.redditUrl, "/message/compose?to=/r/").concat(k)
						}, F._("Message Mods", null, {
							hk: "vVe1i"
						})) : i.a.createElement(ne, {
							href: Object(c.a)(o, d)
						}, F._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(q, {
							to: "/"
						}, y ? F._("Go Home", null, {
							hk: "49p4or"
						}) : F._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case M.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), i.a.createElement(re, null, F._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(H, null, F._("This community is {=quarantined}", [F._param("=quarantined", i.a.createElement(K, {
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
						}) : h ? i.a.createElement(O.a, {
							html: h
						}) : b || F._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), F._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(A, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? i.a.createElement(A, null, i.a.createElement(se, {
								to: "/"
							}, F._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(J, {
								href: "".concat(s.a.redditUrl, "/prefs/update")
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
						})(y, r, p)));
					case M.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/content-gate-icons/banned.png")
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
					case M.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, F._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(A, null, i.a.createElement(q, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case M.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement($, null), i.a.createElement(re, null, F._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(H, null, F._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(A, null, y && i.a.createElement(m.a, {
							eventSource: "content_gate"
						}), i.a.createElement(Y, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.ProfileDoesNotExist:
					case M.a.ProfileDeleted:
					case M.a.ProfileSuspended:
					case M.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case M.a.ProfileBlockedForLegalReason:
									return F._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case M.a.ProfileDeleted:
									return F._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case M.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, F._("This account has been {=suspended} .", [F._param("=suspended", i.a.createElement(K, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, F._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case M.a.ProfileDoesNotExist:
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
					case M.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, F._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(A, null, i.a.createElement(Y, {
							to: "/"
						}, F._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(Q, {
							src: "".concat(s.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), i.a.createElement(re, null, F._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(A, null, i.a.createElement(q, {
							to: "/"
						}, F._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = de(ce(Object(o.i)(e => i.a.createElement(U, null, i.a.createElement("div", null, i.a.createElement(ie, null, le(e))), i.a.createElement(w, null)))))
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_23HWOAAvtr9XUARUICwS1l",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/downToChat.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				m = n("./src/reddit/selectors/downToChat.ts"),
				p = n("./src/reddit/selectors/experiments/downToChat.ts"),
				b = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				h = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = Object(a.c)({
				isDownToChatExperimentEnabled: p.a,
				isEnabled: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(m.c)(e, n.id)
				}
			}), f = Object(i.b)(x, e => ({
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
						isDownToChatExperimentEnabled: n
					} = this.props;
					return t && n ? r.a.createElement(l.f, {
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
			t.a = f(Object(c.c)(k))
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, n) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/featureFlags/component.tsx"),
				d = n("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				c = n.n(d);
			const l = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(a.a)(t, c.a.loading)
					})
				},
				getComponent: () => Promise.all([n.e("vendors~CoinsPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCo~264e7f7d"), n.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~d7fcad44"), n.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad34f221"), n.e("EconomicsCommunityTipJar")]).then(n.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(o.a)("spCommunityTipJar", l)
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-CommunityCard").then(n.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-Leaderboard").then(n.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/constants/screenWidths.ts"),
				l = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/components/HeaderImage/index.m.less"),
				h = n.n(b);
			const g = d.a.wrapped(u.a, "Planet", h.a),
				x = d.a.div("SubredditIcon", h.a),
				f = d.a.div("PositionedImage", h.a),
				k = d.a.div("HeaderContent", h.a),
				y = d.a.div("HeaderContainer", h.a),
				w = d.a.span("HeaderText", h.a),
				O = d.a.wrapped(i.a, "HeaderUrl", h.a),
				v = d.a.span("Container", h.a),
				C = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						s = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (s) {
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
					const u = !!i && !!o && "left" === s,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						C = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						E = "".concat(4 + C, "px");
					return r.a.createElement(v, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, r.a.createElement(O, {
						className: e.className,
						to: e.url
					}, r.a.createElement(y, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(k, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? r.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(n, ")"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: E,
							width: E
						}
					}) : r.a.createElement(g, {
						style: {
							padding: "".concat(Object(p.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: E,
							width: E
						}
					})), r.a.createElement(w, {
						style: {
							paddingTop: 32 === C ? "4px" : "14px"
						}
					}, t)), r.a.createElement(f, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!i,
							[h.a.hoverPositionedImage]: !!i && !!o
						}),
						style: Object.assign({}, d, {
							height: "".concat(Object(p.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = C
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.c)(e => {
				const t = "".concat(e.tooltipId, "-hover-id");
				return r.a.createElement(i.a, {
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
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return N
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/isNil.js")),
				d = n.n(o),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts"),
				u = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const m = Object(a.c)({
				consumers: e => e.jsApi
			});
			class p extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: n,
								consumers: s
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
				h = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.H)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var f = Object(i.b)(() => Object(a.a)(x, h.j, (e, t) => Object.assign({}, e, {
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
			const k = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.H)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var y = Object(i.b)(() => Object(a.a)(k, e => e))(e => r.a.createElement(b, {
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
			var w = Object(i.b)(() => Object(a.c)({
					subreddit: g.Q
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
				O = n("./src/reddit/selectors/posts.ts");
			var v = Object(i.b)(() => Object(a.c)({
				post: O.O,
				subredditOrProfile: O.bb,
				isModerator: (e, t) => {
					const n = Object(O.bb)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
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
			var C = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(O.bb)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const n = Object(O.bb)(e, {
						postId: t.post.id
					});
					return n && !!e.moderatingSubreddits[n.name] || !1
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
			var E = Object(i.b)(() => Object(a.c)({
				post: O.O,
				subredditOrProfile: O.bb,
				isModerator: (e, t) => {
					const n = Object(O.bb)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
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
			var j = Object(i.b)(() => Object(a.c)({
				subreddit: g.Q
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
			var _ = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(g.K)(e, {
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
			var N = Object(i.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(g.Q)(e, {
						subredditId: n
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
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/icons/fonts/Info/index.tsx"),
				c = n("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = n.n(c);
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
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(g);
			const f = c.a.wrapped(m.a, "_Dropdown", x.a),
				k = Object(u.a)(f),
				y = c.a.button("MenuButton", x.a),
				w = c.a.wrapped(b.a, "MenuIcon", x.a),
				O = c.a.wrapped(p.b, "DropdownRow", x.a),
				v = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				C = Object(a.b)(v, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => i.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(w, null), i.a.createElement(k, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/page.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = d.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(o.a)(b))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				f = n("./src/reddit/helpers/name/index.ts"),
				k = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				w = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = n("./src/reddit/components/MiniCardPost/index.m.less"),
				v = n.n(O),
				C = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				E = n.n(C);
			const j = e => e.type === k.f.Spoiler,
				_ = Object(h.t)();
			t.a = _(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: k,
					shouldOpenPost: O,
					showSubredditMeta: C = !0,
					showSubredditName: _,
					subredditOrProfile: N,
					trackPostView: S
				} = e;
				Object(i.useEffect)(() => {
					S && S(k)
				}, [S, k]);
				const P = h && h.preview && h.preview.url || void 0,
					T = h && h.isSponsored ? "promoted_trend" : "trending",
					I = h && Object(l.a)(h.permalink) || "",
					L = O && I || k && Object(o.a)("/search", {
						q: k.rawQuery,
						source: T
					}) || I,
					M = k ? k.subredditInfo && k.subredditInfo.icon : N && N.icon.url,
					R = k ? k.subredditInfo && k.subredditInfo.displayText : N && (N.displayText || N.name),
					W = h ? h.flair.filter(j) : [],
					D = h ? h.score : 0,
					B = h ? h.numComments : 0,
					F = h && h.isSponsored,
					A = Object(w.a)(e).body,
					U = "linear-gradient(\n      ".concat(Object(r.g)(A, .2), ",\n      ").concat(Object(r.g)(A, .3), ",\n      ").concat(Object(r.g)(A, .4), ",\n      ").concat(Object(r.g)(A, .6), ",\n      ").concat(Object(r.g)(A, .8), ",\n      ").concat(A, "\n    )"),
					H = a.a.createElement("div", {
						className: Object(d.a)(E.a.trendingPost, {
							[E.a["m-background"]]: !!P
						})
					}, a.a.createElement(g.a, {
						to: L
					}, a.a.createElement("div", {
						className: Object(d.a)(E.a.backgroundWrapper, v.a.backgroundWrapper, t),
						style: {
							background: Object(y.g)(Object(w.a)(e).body, P || Object(w.a)(e).banner.backgroundImage, "cover"),
							"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
						}
					}, F && a.a.createElement("div", {
						className: E.a.promoted
					}, s.fbt._("promoted", null, {
						hk: "1mLJfa"
					})), a.a.createElement("div", {
						className: Object(d.a)(E.a.innerContainer, v.a.innerContainer, c),
						onClick: b,
						title: h ? h.title : ""
					}, a.a.createElement("h2", {
						className: h ? E.a.title : E.a.titleNoDescription
					}, e.title), h ? a.a.createElement("div", {
						className: Object(d.a)(E.a.description, n)
					}, W.length > 0 && a.a.createElement(m.a, {
						className: E.a.flair,
						titleFlair: W,
						nowrap: !0,
						post: h,
						showCategoryTag: !1
					}), h.title) : a.a.createElement("div", {
						className: E.a.spacer
					}), C && M && R && a.a.createElement(x.a, {
						className: E.a.relatedSubredditMetaData,
						iconClassName: E.a.subredditIcon,
						iconUrl: M || void 0,
						suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", R)], {
							hk: "2YTyJf"
						})
					}), !C && h && a.a.createElement("div", {
						className: E.a.metaLine
					}, _ && R && a.a.createElement("span", {
						className: E.a.meta
					}, Object(f.b)(R)), a.a.createElement("span", {
						className: E.a.meta
					}, s.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [s.fbt._plural(D, "number", Object(u.b)(D))], {
						hk: "1Jm6il"
					})), a.a.createElement("span", {
						className: E.a.meta
					}, s.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [s.fbt._plural(B, "number", Object(u.b)(B))], {
						hk: "311aXY"
					})))))));
				return F ? a.a.createElement(p.a, {
					post: h
				}, H) : H
			})))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/components/SidebarFooter/index.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = i.a.a("Link", c.a), m = Object(o.t)({
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
				href: "http://redditgifts.com/"
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
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/BackToTop/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var p = e => o.a.createElement("div", {
					className: Object(s.a)(e.className, u.a.container),
					style: e.style
				}, o.a.createElement(c.f, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, m._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				b = n("./src/reddit/components/SidebarFooter/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = n.n(x),
				k = n("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const O = d.e[1] + 24,
				v = h.f + 8 + 152 + 32 + 16,
				C = v + O + 8,
				E = k.a.div("Container", f.a),
				j = k.a.wrapped(e => {
					var {
						className: t
					} = e, n = w(e, ["className"]);
					return o.a.createElement(p, y({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, n))
				}, "BackToTop", f.a),
				_ = e => {
					let {
						children: t,
						className: n,
						isSticky: r
					} = e;
					return o.a.createElement("div", {
						className: Object(s.a)(n, {
							[f.a.StickyStyles]: r
						})
					}, t)
				};
			class N extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
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
					}, d.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							className: n,
							hideFooter: s
						}
					} = this, r = this.state.isAdSticky && !(!e && !t);
					return o.a.createElement(E, {
						className: n,
						innerRef: this.setWrapperRef
					}, o.a.createElement(_, {
						isSticky: r
					}, e, t, !s && o.a.createElement(b.a, null)), !this.props.hideBackToTop && o.a.createElement(j, null))
				}
			}
			const S = Object(g.t)();
			t.a = S(N)
		},
		"./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarSubredditChannels/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2sEbIFP3ssTnt1Fo23m26r",
				wrapper: "_2sEbIFP3ssTnt1Fo23m26r"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditChannelList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Z
			}));
			var s = n("./node_modules/lodash/orderBy.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/opener/index.ts"),
				u = n("./src/chat/helpers/urls/index.ts"),
				m = n("./src/reddit/actions/chat/subredditChannel.ts"),
				p = n("./src/reddit/actions/chat/toggle.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/modals.ts"),
				k = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/trackers/chat.ts"),
				w = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				O = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				v = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				C = n("./src/reddit/models/SubredditChannel/index.ts"),
				E = n("./src/reddit/selectors/chat.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/subredditChannel.ts"),
				N = n("./src/reddit/components/SubredditChannelList/index.m.less"),
				S = n.n(N);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = c.a.wrapped(h.g, "ModalFormItem", S.a), I = c.a.wrapped(k.f, "PrimaryButton", S.a), L = c.a.wrapped(h.o, "ModalText", S.a), M = c.a.a("ItemLink", S.a), R = c.a.p("Detail", S.a), W = c.a.p("DescText", S.a), D = c.a.div("Title", S.a), B = c.a.div("Header", S.a), F = c.a.wrapped(O.a, "ChatIcon", S.a), A = c.a.wrapped(v.a, "PlanetIcon", S.a), U = c.a.wrapped(w.a, "Pencil", S.a), H = c.a.wrapped(e => {
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
			}, "Group", S.a), V = c.a.wrapped(e => {
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
			}, "Key", S.a), z = c.a.wrapped(g.b, "SubredditIcon", S.a), G = c.a.button("EditButton", S.a), K = c.a.button("ShowAllLink", S.a), q = c.a.span("ChannelName", S.a), J = c.a.div("HeaderText", S.a);
			var Z;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Z || (Z = {}));
			const X = Object(d.c)({
					isCollectionReady: _.e,
					isModerator: E.e,
					selectedSubreddit: j.Q,
					shouldRequestCollection: _.f,
					subredditChannels: _.a
				}),
				Y = Object(o.b)(X, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						toggleModal: () => e(Object(b.i)(f.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(b.i)(f.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(b.i)(f.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(m.l)(t)),
						onChatLinkClick: (t, n) => e(Object(p.b)({
							channelId: t,
							subredditName: n
						})),
						onSelectChannel: t => e(Object(m.m)({
							channelId: t
						}))
					}
				});
			class Q extends a.a.Component {
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
						const n = r()(t, ["name"]);
						return e ? n.slice(0, e) : n
					}
					return []
				}
				onItemClick(e) {
					const {
						channelId: t
					} = e, {
						selectedSubreddit: n,
						onChatLinkClick: s
					} = this.props;
					s(t, n.name), this.trackItemClick(e)
				}
				trackItemClick(e) {
					const {
						Joined: t
					} = C.a, {
						channelId: n,
						channelState: s
					} = e, {
						Widget: r,
						Modal: i
					} = Z, {
						parentContext: a,
						sendEvent: o
					} = this.props;
					return a === r && s === t ? o(Object(y.c)(n)) : a === r ? o(Object(y.e)(n)) : a === i && s === t ? o(Object(y.a)(n)) : a === i ? o(Object(y.b)(n)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(y.d)()))
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
							isModerator: n,
							onAddChannel: s,
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
					}, c.length ? a.a.createElement(T, null, c.map((e, t) => a.a.createElement(M, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, a.a.createElement(D, {
						key: "item-link-title-".concat(t)
					}, a.a.createElement(F, {
						key: "item-link-icon-".concat(t)
					}), i.icon.url ? a.a.createElement(z, {
						key: "subreddit-icon-".concat(t),
						iconUrl: i.icon.url
					}) : a.a.createElement(A, {
						key: "planet-".concat(t),
						isSmall: !0
					}), a.a.createElement(B, {
						key: "item-header-".concat(t)
					}, a.a.createElement(J, {
						key: "item-header-text-".concat(t)
					}, a.a.createElement(R, {
						key: "item-detail-".concat(t)
					}, i.name, P._({
						"*": "• {number} Members",
						_1: "• 1 Member"
					}, [P._plural(e.membersCount, "number")], {
						hk: "4bUTpG"
					})), a.a.createElement(q, {
						key: "channel-name-".concat(t)
					}, e.type === C.c.Public ? a.a.createElement(H, null) : a.a.createElement(V, null), e.name)), n && a.a.createElement(G, {
						key: "button-".concat(t),
						onClick: t => {
							o(e.channelId), r(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(y.l)())
						}
					}, a.a.createElement(U, null)))), e.description && a.a.createElement(W, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && a.a.createElement(K, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, P._("See more", null, {
						hk: "lhTm0"
					}))) : n ? a.a.createElement(T, null, a.a.createElement(L, null, P._("Create your first room and get your community chatting in real time.", null, {
						hk: "2zKL0L"
					})), a.a.createElement(I, {
						onClick: s || d
					}, P._("+ Add room", null, {
						hk: "2vBAvZ"
					}))) : a.a.createElement(T, null, a.a.createElement(L, null, P._("There are no joined chatrooms yet", null, {
						hk: "3n65KN"
					}))))
				}
			}
			t.b = Y(Object(x.c)(Q))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/reddit/actions/subreddit.ts"),
				m = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = n("./src/reddit/components/SubredditNav/index.m.less"),
				g = n.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const k = (e, t, n) => Object(p.a)(e, {
					[g.a.mActive]: t
				}, {
					[g.a.topBannerVariant]: n
				}),
				y = e => {
					var {
						children: t,
						isActive: n,
						isTopBannerVariant: s
					} = e, i = f(e, ["children", "isActive", "isTopBannerVariant"]);
					return r.a.createElement("div", x({
						className: k(g.a.subNavTitle, n, s)
					}, i), r.a.createElement("span", null, t), r.a.createElement(b.b, {
						className: g.a.navDropdownIcon
					}))
				},
				w = e => {
					var {
						className: t,
						isActive: n,
						to: s,
						isTopBannerVariant: i
					} = e, a = f(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const o = k(g.a.navLink, n, i);
					return s ? r.a.createElement(m.a, x({
						className: o,
						to: s
					}, a)) : r.a.createElement("a", x({
						className: o
					}, a))
				},
				O = e => {
					var {
						className: t,
						isActive: n
					} = e, s = f(e, ["className", "isActive"]);
					return r.a.createElement(m.a, x({
						className: k(g.a.navLink, n)
					}, s))
				},
				v = e => {
					var {
						className: t,
						isActive: n
					} = e, s = f(e, ["className", "isActive"]);
					return r.a.createElement("a", x({
						className: k(g.a.subNavLink, n)
					}, s))
				},
				C = e => {
					var {
						className: t
					} = e, n = f(e, ["className"]);
					return r.a.createElement("div", x({
						className: Object(p.a)(g.a.subNavContainer, t)
					}, n))
				},
				E = e => {
					var {
						className: t,
						isOpen: n
					} = e, s = f(e, ["className", "isOpen"]);
					return r.a.createElement("div", x({
						className: Object(p.a)(g.a.subNavList, t, {
							[g.a.mIsOpen]: n
						})
					}, s))
				},
				{
					fbt: j
				} = n("./node_modules/fbt/lib/FbtPublic.js");
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
						subreddit: n
					} = e;
					return n ? r.a.createElement(O, {
						className: g.a.metaNavLink,
						to: n.url,
						isActive: e.isActive,
						onClick: n => {
							Object(d.E)(t) && n.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, j._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				S = n("./src/lib/linkMatchers/index.ts");
			class P extends r.a.Component {
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
					return r.a.createElement(C, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(y, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(E, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var T = P;
			const I = e => {
				const t = e.url && Object(S.g)(S.e, e.url);
				return t ? t.url : e.url
			};
			var L = e => e.menuItem.url ? r.a.createElement(w, {
					href: I(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(T, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(v, {
					key: "".concat(e.text, "-").concat(I(e)),
					role: "listitem",
					href: I(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				M = n("./src/lib/constants/index.ts");
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const W = Object(d.t)(),
				D = [M.zb.SUBREDDIT, M.zb.COMMENTS, M.zb.COLLECTION_COMMENTS],
				B = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && D.indexOf(t.pageLayer.meta.name) > -1
				});
			var F = W(Object(i.b)(B, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: s,
						isTopBannerVariant: i,
						onTurnOffMetaFilter: a
					} = e, o = s && !n;
					return r.a.createElement(w, {
						to: t,
						isActive: o,
						isTopBannerVariant: i,
						onClick: e => {
							n && (e.preventDefault(), a())
						}
					}, R._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				A = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				U = n("./src/higherOrderComponents/makeAsync.tsx");
			var H = Object(U.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				V = n("./src/reddit/constants/postLayout.ts"),
				z = n("./src/reddit/constants/screenWidths.ts"),
				G = n("./src/reddit/models/Theme/index.ts"),
				K = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				q = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const J = Object(A.a)(e => {
				var {
					className: t,
					children: n,
					isTopBannerVariant: s
				} = e, i = q(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(K.a)(i);
				return r.a.createElement("div", {
					className: Object(p.a)(g.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !s ? "absolute" : "static",
						background: s ? "inherit" : Object(G.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var Z = e => r.a.createElement(J, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: g.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === V.g.Large ? "".concat(e.maxWidth || z.a, "px") : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(H, null))),
				X = n("./src/reddit/constants/wiki.ts"),
				Y = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: s
				} = e, i = !!s && !!s.meta && s.meta.name === M.zb.SUBREDDIT_WIKI, a = "wiki/".concat(X.i), o = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return r.a.createElement(w, {
					isActive: i,
					isTopBannerVariant: n,
					to: o,
					onClick: () => e.sendEvent(Object(Y.g)())
				}, Q._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ee = Object(c.a)("spPolls", N),
				te = Object(d.t)(),
				ne = Object(a.c)({
					layout: d.N,
					widget: l.f
				}),
				se = Object(i.b)(ne);
			t.a = te(se(Object(o.c)(e => r.a.createElement(Z, {
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
			}), !!e.widget.data.length && e.widget.data.map((t, n) => r.a.createElement(L, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: n,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				p = n("./src/higherOrderComponents/makeAsync.tsx"),
				b = n("./src/reddit/featureFlags/component.tsx");
			const h = Object(p.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("EconomicsSubredditPremiumSidebarCards")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			var g = Object(b.a)("spPremium", h),
				x = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				f = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				k = n("./src/reddit/components/IdCard/async.tsx"),
				y = n("./src/lib/isFakeSubreddit/index.ts"),
				w = n("./src/reddit/components/IdCard/helpers.ts"),
				O = e => !Object(y.a)(e) || Object(w.c)(e) || Object(w.d)(e) || Object(w.e)(e),
				v = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				C = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				E = n("./src/reddit/components/SidebarContainer/index.tsx"),
				j = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				N = n("./src/lib/classNames/index.ts"),
				S = n("./src/higherOrderComponents/asTooltip.tsx"),
				P = n("./src/reddit/actions/tooltip.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				I = n("./src/reddit/constants/modals.ts"),
				L = n("./src/reddit/controls/Dropdown/index.tsx"),
				M = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				R = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				W = n("./src/reddit/selectors/moderatorPermissions.ts"),
				D = n("./src/reddit/selectors/tooltip.ts"),
				B = n("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				F = n.n(B);
			const A = u.a.wrapped(L.a, "_Dropdown", F.a),
				U = u.a.wrapped(R.a, "Pencil", F.a),
				H = u.a.a("DropdownRow", F.a),
				V = Object(S.a)(A),
				z = e => "SubredditChannels--Menu--".concat(e),
				G = Object(c.c)({
					isModerator: W.g,
					isDropdownOpen: (e, t) => Object(D.b)(z(t.subredditId))(e)
				}),
				K = u.a.wrapped(e => {
					const {
						className: t,
						isModerator: n,
						onOpenDropdown: r,
						isDropdownOpen: i,
						toggleModal: a
					} = e, d = z(e.subredditId);
					return o.a.createElement("button", {
						"aria-expanded": i,
						"aria-haspopup": !0,
						"aria-label": s.fbt._("Chat menu", null, {
							hk: "4DfuTV"
						}),
						className: Object(N.a)(F.a.top, t),
						id: d,
						onClick: () => r(d)
					}, o.a.createElement(M.a, null), o.a.createElement(V, {
						isOpen: i,
						tooltipId: d,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(H, {
						onClick: a
					}, n ? s.fbt._("Manage chatrooms", null, {
						hk: "2hIiuc"
					}) : s.fbt._("View rooms", null, {
						hk: "2XOg3o"
					}), o.a.createElement(U, null))))
				}, "OverflowMenu", F.a);
			var q = Object(d.b)(G, e => ({
					onOpenDropdown: t => e(Object(P.h)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(T.i)(I.a.MANAGE_SUBREDDIT_CHAT))
				}))(K),
				J = n("./src/reddit/components/SubredditChannelList/index.tsx"),
				Z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				X = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Y = n("./src/reddit/helpers/trackers/chat.ts"),
				Q = n("./src/reddit/selectors/subreddit.ts"),
				$ = n("./src/reddit/selectors/subredditChannel.ts"),
				ee = n("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				te = n.n(ee);
			const ne = u.a.div("Wrapper", te.a),
				se = Object(c.c)({
					isCollectionReady: $.e,
					isModerator: W.g,
					isWhitelistedSubreddit: Q.e,
					shouldRequestCollection: $.f,
					subredditChannels: $.a
				});
			let re;
			class ie extends o.a.Component {
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
					this.props.subredditId !== re && (re = this.props.subredditId, this.props.sendEvent(Object(Y.m)()))
				}
				isEnabled() {
					const {
						isModerator: e,
						isCollectionReady: t,
						isWhitelistedSubreddit: n,
						subredditChannels: s
					} = this.props, r = s && s.length;
					return !(!t || !n || !r && !e)
				}
				render() {
					const {
						subredditId: e,
						shouldRequestCollection: t
					} = this.props, n = o.a.createElement(J.b, {
						maxChannels: 3,
						parentContext: J.a.Widget,
						subredditId: e
					});
					return t ? n : this.isEnabled() ? o.a.createElement(j.a, null, o.a.createElement(X.a, {
						className: this.props.className,
						title: s.fbt._("Chat rooms", null, {
							hk: "4vn07S"
						}),
						headerButton: o.a.createElement(q, {
							subredditId: e
						})
					}, o.a.createElement(ne, null, n))) : null
				}
			}
			var ae = Object(d.b)(se)(Object(Z.c)(ie)),
				oe = n("./src/lib/makeListingKey/index.ts"),
				de = n("./src/reddit/actions/subreddit.ts"),
				ce = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				le = n("./src/reddit/controls/Button/index.tsx"),
				ue = n("./src/reddit/helpers/name/index.ts"),
				me = n("./src/reddit/helpers/overlay/index.ts"),
				pe = n("./src/reddit/selectors/experiments/topPosts.ts"),
				be = n("./src/reddit/selectors/posts.ts"),
				he = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const ge = .99;
			class xe extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= ge && t(n)
					}
				}
				render() {
					return o.a.createElement(he.a, {
						threshold: ge,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var fe = xe,
				ke = n("./src/lib/isUrl/index.ts"),
				ye = n("./src/lib/prettyPrintNumber/index.ts"),
				we = n("./src/reddit/components/FlairWrapper/index.tsx"),
				Oe = n("./src/reddit/components/Thumbnail/index.tsx"),
				ve = n("./src/reddit/models/Flair/index.ts"),
				Ce = n("./src/reddit/models/Subreddit/index.ts"),
				Ee = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				je = n.n(Ee);
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ne = e => e.type === ve.f.Nsfw || e.type === ve.f.Spoiler, Se = Object(c.c)({
				post: be.O,
				subredditOrProfile: be.bb
			});
			class Pe extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: n
						} = this.props;
						e(t), n && n(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: n
						} = this.props;
						e.stopPropagation(), n && n(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: n,
						showSubredditName: s,
						subredditOrProfile: r
					} = this.props, i = {
						post: t
					}, a = Object(ke.a)(Object(Oe.b)(i)), d = t.flair.filter(Ne);
					return o.a.createElement("div", {
						className: Object(N.a)(je.a.container, e, {
							[je.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: je.a.mainLine
					}, a && o.a.createElement("div", {
						className: je.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(Oe.a, i)), o.a.createElement("div", {
						className: Object(N.a)(je.a.title, !a && je.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(we.a, {
						className: je.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: je.a.metaLine
					}, s && !!r && o.a.createElement("span", {
						className: je.a.meta
					}, Object(Ce.f)(r) ? Object(ue.c)(r.displayText || r.name) : Object(ue.b)(r.displayText || r.name)), o.a.createElement("span", {
						className: je.a.meta
					}, _e._({
						"*": "{score} points",
						_1: "1 point"
					}, [_e._plural(t.score, "score", Object(ye.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: je.a.meta
					}, _e._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [_e._plural(t.numComments, "numComments", Object(ye.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Te = Object(d.b)(Se, e => ({
					openLightbox: t => e(Object(me.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Pe),
				Ie = n("./src/reddit/components/SidebarPostList/index.m.less"),
				Le = n.n(Ie);
			const {
				fbt: Me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Re = 10, We = 2, De = Object(c.a)(be.U, e => e.filter(e => !e.isSponsored)), Be = Object(c.c)({
				posts: De
			});
			class Fe extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: n
						} = this.props, [s] = n;
						s && (t(s), e && e(s.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || Re, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((n, s) => (e = Math.ceil(s.posts.length / t), {
							chunkIdx: n.chunkIdx < e - 1 ? n.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: n,
							onPostVisible: s,
							redditStyle: r,
							smallPostClassName: i
						} = this.props;
						return o.a.createElement(fe, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, o.a.createElement(Te, {
							className: Object(N.a)(Le.a.smallPost, i),
							containerOnClick: n,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(y.a)(Object(ue.f)(t)),
							thumbnailOnClick: n
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: n,
						moreButtonText: s,
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
						m = Object(pe.a)(c),
						p = Object(pe.b)(c),
						b = m || p,
						h = i.slice(l * u, (l + 1) * u),
						[g, ...x] = h,
						f = b ? h.slice(0, We) : x.slice(0, We),
						k = b ? h.slice(We) : x.slice(We);
					return o.a.createElement("div", {
						className: Object(N.a)(Le.a.container, t, {
							[Le.a.redditStyle]: a
						})
					}, !b && o.a.createElement(fe, {
						onPostVisible: r,
						postId: g.id
					}, o.a.createElement(ce.a, {
						backgroundWrapperClassName: Le.a.largePostBackgroundWrapper,
						descriptionClassName: Le.a.largePostDescription,
						innerContainerClassName: Le.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						postId: g.id,
						showSubredditMeta: !1,
						showSubredditName: Object(y.a)(Object(ue.f)(n)),
						trendingPost: g
					})), f.map(this.renderSmallPost), e, k.map(this.renderSmallPost), d && o.a.createElement(le.n, {
						className: Le.a.SeeMore,
						onClick: this.showMorePosts
					}, s || Me._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var Ae = Object(d.b)(Be, e => ({
					openPost: t => e(Object(me.a)(t.permalink))
				}))(Fe),
				Ue = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				He = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				Ve = n("./src/reddit/selectors/discoveryUnit.ts"),
				ze = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				Ge = n.n(ze);
			const Ke = 10,
				qe = Object(c.a)((e, t) => t.subredditName, e => Object(oe.a)(e, l.N.TOP, {
					t: l.Qb.WEEK
				})),
				Je = Object(c.c)({
					discoveryUnit: e => Object(Ve.c)(e, {
						unitName: He.j
					}),
					listingKey: qe,
					posts: (e, t) => {
						const n = qe(e, t);
						return Object(be.U)(e, {
							listingKey: n
						})
					},
					subreddit: Q.z
				});
			class Ze extends o.a.Component {
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
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Ue.w)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Ue.B)(t, e, void 0, n))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: n,
						loadMorePosts: r,
						posts: i,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === i.length) return null;
					const c = a,
						l = i.length > Ke;
					return o.a.createElement(X.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(Ae, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: r,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: Ge.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var Xe = Object(d.b)(Je, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(de.r)({
							sort: l.N.TOP,
							subredditName: n,
							t: l.Qb.WEEK
						}))
					}
				})(Object(Z.c)(Ze)),
				Ye = n("./src/config.ts"),
				Qe = n("./src/lib/localStorageAvailable/index.ts"),
				$e = n("./src/higherOrderComponents/asModal/index.tsx"),
				et = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				tt = n("./src/reddit/controls/TextButton/index.tsx"),
				nt = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: st
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class rt extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(et.d, null, o.a.createElement(et.h, null, o.a.createElement(nt.a, null, o.a.createElement(et.p, null, st._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement(tt.a, {
						onClick: e.toggleModal
					}, o.a.createElement(et.b, null)))), o.a.createElement(et.k, null, o.a.createElement(et.o, null, st._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(et.f, null, o.a.createElement(et.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, st._("Cancel", null, {
						hk: "D28iw"
					})), o.a.createElement(et.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, st._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var it = Object($e.a)(rt),
				at = n("./src/reddit/components/IdCard/Banner.tsx"),
				ot = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				dt = n("./src/reddit/constants/blade.ts"),
				ct = n("./src/reddit/controls/InternalLink/index.tsx"),
				lt = n("./src/reddit/helpers/localStorage/index.ts"),
				ut = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				mt = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				pt = n("./src/reddit/icons/svgs/Close/index.tsx"),
				bt = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				ht = n("./src/reddit/selectors/activeModalId.ts"),
				gt = n("./src/reddit/selectors/structuredStyles.ts"),
				xt = n("./src/reddit/components/IdCard/index.m.less"),
				ft = n.n(xt),
				kt = n("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				yt = n.n(kt);
			const wt = "mod_onboarding_modal",
				Ot = "mod_onboarding_widget",
				vt = Object(c.a)(ht.a, (e, t) => Object(W.a)(bt.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(gt.l)(e, {
					subredditId: t.subredditId
				}), (e, t, n) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					modHasEditedBanner: !n || !!(n.bannerBackgroundImage || n.bannerHeight || n.bannerPositionedImage || n.bannerBackgroundColor),
					modHasEditedColors: !n || !!(n.primaryColor || n.highlightColor || n.backgroundColor || n.backgroundImage),
					modHasEditedIcon: !n || (!!n.communityIcon || !!n.bannerShowCommunityIcon)
				}));
			class Ct extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(lt.T)(Ot, !0, this.props.subredditId), this.props.sendEvent(Object(ut.d)("close"))
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
						modHasEditedColors: n,
						modHasEditedIcon: s,
						subredditId: r
					} = this.props, i = e && !(t && n && s) && (!Object(Qe.a)() || !Object(lt.r)(Ot, r));
					i !== this.state.visible && (this.setState({
						visible: i
					}), i && this.props.sendEvent(Object(ut.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: n,
						modHasEditedIcon: r,
						subredditName: i,
						toggleCloseMenuModal: a
					} = this.props;
					return this.state.visible ? o.a.createElement(X.a, {
						className: Object(N.a)(yt.a.container, this.props.className)
					}, o.a.createElement(at.a, {
						bannerBackgroundImage: "".concat(Ye.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), o.a.createElement(pt.a, {
						className: yt.a.closeIcon,
						onClick: a
					}), Object(ot.a)({
						titleText: s.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(w.b)("url('".concat(Ye.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), o.a.createElement("div", {
						className: Object(N.a)(ft.a.Description, yt.a.description)
					}, s.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [s.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: dt.e.exportImport,
						className: yt.a.modHelpLink,
						target: "_blank"
					}, s.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(ct.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(dt.c.NameAndIcon),
						className: yt.a.link,
						onClick: this.customizeIcon
					}, r ? o.a.createElement(mt.a, {
						className: yt.a.checked
					}) : o.a.createElement(mt.a, {
						className: yt.a.unchecked
					}), s.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(ct.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(dt.c.Banner),
						className: yt.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(mt.a, {
						className: yt.a.checked
					}) : o.a.createElement(mt.a, {
						className: yt.a.unchecked
					}), s.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(ct.a, {
						to: "/r/".concat(i, "?styling=true&route=").concat(dt.c.Global),
						className: yt.a.link,
						onClick: this.customizeThemeColors
					}, n ? o.a.createElement(mt.a, {
						className: yt.a.checked
					}) : o.a.createElement(mt.a, {
						className: yt.a.unchecked
					}), s.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(le.k, {
						to: "/r/".concat(i, "?styling=true"),
						className: yt.a.button,
						onClick: this.customizeAppearance
					}, s.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: yt.a.subtext
					}, s.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === wt && o.a.createElement(it, {
						withOverlay: !0,
						toggleModal: a,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Et = Object(d.b)(vt, (e, t) => {
					let {
						subredditId: n,
						subredditName: s
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(T.i)(wt))
					}
				})(Object(Z.c)(Ct)),
				jt = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				_t = n("./src/reddit/constants/tracking.ts"),
				Nt = n("./src/reddit/selectors/experiments/subredditSeo.ts"),
				St = n("./src/reddit/selectors/seo/linksModule.ts"),
				Pt = n("./src/reddit/selectors/telemetry.ts"),
				Tt = n("./src/telemetry/models/Subreddit.ts");
			const It = e => t => Object.assign({}, Pt.defaults(t), {
					action: _t.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Lt = e => t => n => Object.assign({}, Pt.defaults(n), {
					action: _t.c.CLICK,
					noun: Object(Tt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				Mt = Object(c.c)({
					communities: St.c,
					showModule: (e, t) => {
						const n = Object(St.c)(e, t);
						return !!n && !!n.length && Object(Nt.a)(e)
					}
				});
			var Rt = Object(d.b)(Mt)(e => {
					const t = Object(Z.b)();
					return e.communities && e.showModule ? o.a.createElement(j.a, null, o.a.createElement(jt.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: It,
						getSubscribeEventFactoryHandler: Lt,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				Wt = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				Dt = n("./src/reddit/featureFlags/index.ts"),
				Bt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				Ft = n("./src/reddit/models/Widgets/index.ts"),
				At = n("./src/reddit/selectors/communityFlairs.ts"),
				Ut = n("./src/reddit/selectors/listings.ts"),
				Ht = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Vt = n.n(Ht);
			const zt = 250,
				Gt = 270,
				Kt = u.a.wrapped(E.a, "SidebarContainer", Vt.a),
				qt = Object(c.c)({
					apiError: Ut.c,
					apiPending: Ut.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(At.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(At.c)(e, n)
					},
					showGovernance: Dt.d.spPoints,
					showLeaderboard: Dt.d.spLeaderboard,
					widgets: Q.r
				}),
				Jt = Object(d.b)(qt);
			class Zt extends a.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const n = this.getRelatedCommunitiesWidgetData();
						return n ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys) return Object.assign({}, this.getPostFlairWidget(), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: Ft.d.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
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
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !i()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						listingName: t,
						showGovernance: n,
						showLeaderboard: s,
						subredditId: r,
						subredditName: i,
						topPostsVariant: a
					} = this.props;
					let d = 0;
					const c = Object(pe.a)(a),
						u = Object(pe.b)(a),
						p = Object(pe.c)(a),
						b = c || u;
					let h, y;
					!!this.getPostFlairWidget() ? h = this.props.widgets : (h = this.getCommunityWidgets(), y = this.makeFlairFilterWidget());
					const w = this.makeRelatedCommunitiesWidget(c, u),
						E = !c,
						N = u,
						S = o.a.createElement(C.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: d++,
							position: Bt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(Kt, {
						className: e
					}, O(t) && o.a.createElement(k.a, {
						listingName: t
					}), o.a.createElement(g, {
						cardClassName: Vt.a.card,
						subredditId: r
					}), b && o.a.createElement(j.a, null, o.a.createElement(Xe, {
						subredditName: i,
						topPostsVariant: a
					}, o.a.createElement("div", {
						className: Vt.a.inFeedAd
					}, S))), b && w && o.a.createElement(j.a, null, o.a.createElement(Wt.a, {
						subredditName: i,
						truncateThreshold: Gt,
						widget: w
					})), N && h.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(j.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Wt.a, {
							subredditName: i,
							truncateThreshold: zt,
							widget: e
						}))
					}), o.a.createElement(m.a, {
						className: Vt.a.card,
						subredditId: r
					}), o.a.createElement(Et, {
						subredditId: r,
						subredditName: i
					}), n && o.a.createElement(x.a, {
						className: Vt.a.card,
						subredditId: r
					}), y && o.a.createElement(j.a, null, o.a.createElement(Wt.a, {
						subredditName: i,
						widget: y
					})), s && o.a.createElement(f.a, {
						className: Vt.a.card,
						subredditId: r,
						uniqueId: r
					}), o.a.createElement(v.g, {
						subredditId: r
					}), !b && S, E && !N && h.map((e, t) => {
						const n = "community-list" === e.kind;
						return o.a.createElement(j.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Wt.a, {
							subredditName: i,
							truncateThreshold: p && n ? Gt : p ? zt : void 0,
							widget: e
						}))
					}), o.a.createElement(ae, {
						subredditId: r
					}), o.a.createElement(Rt, {
						subredditId: r
					}), o.a.createElement(_.a, {
						adComponent: o.a.createElement(C.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: d++,
							position: Bt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = Jt(Zt)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, n) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, n) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/parameters.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/flair.ts"),
				k = n("./src/reddit/helpers/trackers/postFlair.ts"),
				y = n("./src/reddit/models/Widgets/index.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				v = n.n(O);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const j = 129,
				_ = Object(h.t)({
					filterName: e => Object(h.S)(e)[b.f],
					url: e => Object(h.X)(e)
				}),
				N = Object(o.c)({
					subredditId: (e, t) => Object(w.E)(e, t.subredditName)
				}),
				S = Object(a.b)(N),
				P = l.a.div("WidgetContent", v.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: n,
						onMouseDown: s
					} = e, r = E(e, ["display", "isFlairFilter", "onMouseDown"]);
					return i.a.createElement("li", {
						className: Object(d.a)(v.a.StyledFlair, t === y.d.Cloud && v.a.cloudDisplay, {
							[v.a.flairFilter]: n,
							[v.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: s
					}, i.a.createElement(u.b, C({}, r, {
						className: v.a.Flair,
						isFlairFilter: n,
						forceSmallEmojis: !0
					})))
				};
			class I extends i.a.Component {
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
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(k.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > j && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(g.n, {
						className: v.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? s.fbt._("See more", null, {
						hk: "2fWFes"
					}) : s.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(T, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? j : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: v.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return i.a.createElement("ul", null, i.a.createElement(T, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: n
					} = this.state, s = t.order, r = this.getFlairsFromIds(s), a = e && this.getSelectedFlair(r) || void 0, o = t.order.length > s.length || n && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(P, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(r), o && this.renderButton()))
				}
			}
			t.a = _(S(Object(m.c)(I)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				p = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				h = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				x = n.n(g);
			const f = d.a.div("RuleShortName", x.a),
				k = d.a.div("RuleIndex", x.a),
				y = d.a.div("RuleTitle", x.a),
				w = d.a.div("RuleDescription", x.a),
				O = d.a.wrapped(c.a, "RawHTMLDisplay", x.a),
				v = {};
			class C extends i.a.Component {
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
						onClick: n,
						shouldShowFullDisplay: s
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !s(e) && !!r;
					return i.a.createElement(f, {
						className: Object(o.a)({
							[x.a.pointerCursor]: a
						}),
						onClick: s(e) || !r ? void 0 : n
					}, i.a.createElement(b.a, null, i.a.createElement(k, null, "".concat(e.humanIndex, ".")), i.a.createElement(y, null, "".concat(e.rule.shortName)), i.a.createElement("div", null, !s(e) && r && (t.isVisible ? i.a.createElement(p.a, {
						className: x.a.Chevron
					}) : i.a.createElement(m.a, {
						className: x.a.Chevron
					})))), t.isVisible && i.a.createElement(w, null, e.rule.descriptionRichText ? i.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: v
					}) : e.rule.descriptionHtml ? i.a.createElement(O, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const E = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", "r/".concat(e.subredditName))], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return i.a.createElement(C, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(E, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => n => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(p.widget)(n, {
					subredditId: e,
					widgetKind: t
				})
			}, p.defaults);
			var h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = n("./src/reddit/selectors/experiments/topPosts.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/models/Theme/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const w = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				v = e => {
					const t = w(e);
					return Object(k.f)(t)
				},
				C = e => {
					const t = O(e);
					return Object(k.f)(t)
				};
			var E = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = n.n(E);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = Object(u.t)(), S = Object(i.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.m)(e, t) || void 0,
						s = t.redditStyle || Object(x.m)(e, {
							subredditId: n
						}),
						r = Object(f.S)(e);
					return s || r
				},
				nigtmode: f.S,
				subredditId: u.m,
				topPostVariant: g.d
			}));
			class P extends r.a.Component {
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
					return e.backgroundColor = w(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = v(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = C(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: i,
						onClick: a,
						title: d,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, p = n ? j.a.widgetContentOnly : j.a.widgetContent, b = !s && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, g = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(o.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: s,
							[j.a.clickable]: !!a,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: a,
						style: h
					}, d && r.a.createElement("div", {
						className: j.a.widgetHeader,
						style: g
					}, r.a.createElement("div", {
						className: Object(o.a)(j.a.widgetTitle, l)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), i), r.a.createElement("div", {
						className: Object(o.a)(p, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.n, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, _._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = N(S(Object(d.a)(Object(l.c)(P))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/models/Image/index.tsx"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Widgets/Button/index.m.less"),
				y = n.n(k);
			const w = (e, t, n) => {
					let s = {},
						r = {};
					s = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, n) => {
						let {
							color: s,
							fillColor: r,
							textColor: i
						} = e;
						return t && (s = i = n, r = "transparent"), {
							"--widget-button-background-color": "".concat(r || "transparent"),
							"--widget-button-border": "1px solid ".concat(s),
							"--widget-button-color": "".concat(i || s)
						}
					})(e, t, n);
					const i = e.hoverState || e;
					if (i.kind === g.f.Image) r = {
						"--widget-button-hover-background-image": "url('".concat(i.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: s,
							textColor: a
						} = i;
						t && (e = a = n, s = "transparent"), r = {
							"--widget-button-hover-background-color": "".concat(s || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(a || e)
						}
					}
					return Object.assign({}, s, r)
				},
				O = e => e.kind === g.f.Image ? y.a.imageButton : y.a.textButton,
				v = e => {
					const t = Object(g.n)(e),
						n = Object(p.g)(p.e, t);
					return n ? n.url : e.url
				},
				C = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, s = Object(h.a)(e).button;
					return r.a.createElement(c.i, {
						className: O(t),
						style: w(t, n, s)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? y.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: y.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				E = e => r.a.createElement(l.a, {
					href: v(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(C, e)),
				j = m.a.wrapped(o.a, "RawHTMLDisplay", y.a);
			var _ = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: f.S
				}))(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(j, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => r.a.createElement(E, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				N = n("./node_modules/fbt/lib/FbtPublic.js"),
				S = n("./src/lib/humanizeDate/index.ts"),
				P = n("./src/reddit/controls/TextButton/index.tsx"),
				T = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				I = n.n(T);
			const L = 100,
				M = {
					isExpanded: !1
				},
				R = m.a.wrapped(o.a, "RawHTMLDisplay", I.a),
				W = m.a.div("EventContainer", I.a),
				D = m.a.div("EventTitle", I.a),
				B = m.a.div("EventDate", I.a),
				F = m.a.div("EventLocation", I.a),
				A = m.a.div("EventDescription", I.a),
				U = m.a.wrapped(P.a, "ToggleDescription", I.a);
			class H extends r.a.Component {
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
					return e.text.length > L ? r.a.createElement(A, null, t.isExpanded ? e.text : e.text.slice(0, L), r.a.createElement(U, {
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
				}, e.widget.data.map((t, n) => r.a.createElement(W, {
					key: "".concat(n, "-").concat(t.title)
				}, r.a.createElement(D, null, t.titleHtml ? r.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(B, null, Object(S.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						s = t.getMinutes();
					return s < 10 ? "".concat(n, ":0").concat(s) : "".concat(n, ":").concat(s)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(F, null, t.locationHtml ? r.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(H, {
					text: t.description
				})))),
				z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				G = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var K = Object(z.c)(e => r.a.createElement(G.b, {
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
				J = Object(i.b)(q),
				Z = (e, t, n) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(n, "</body>");
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Z(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
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
			var Y = J(X),
				Q = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = n.n(Q);
			var ee = m.a.div("ImageFrame", $.a),
				te = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = n.n(te);
			var se = m.a.img("StyledImage", ne.a);
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
						state: n
					} = this;
					e.subredditName === t.subredditName && e.widget.data[n.imageIndex] && e.widget.data[n.imageIndex] === t.widget.data[n.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const n = e.widget.data[t.imageIndex],
						s = r.a.createElement(ee, null, r.a.createElement(se, {
							alt: N.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? r.a.createElement(l.a, {
						href: n.linkUrl,
						isSponsored: !1,
						source: null
					}, s) : s
				}
			}
			var ie = re,
				ae = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				oe = n("./src/reddit/components/Flair/index.tsx"),
				de = n("./src/reddit/controls/InternalLink/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				le = n("./src/reddit/models/Flair/index.ts"),
				ue = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				me = n.n(ue);
			const pe = m.a.div("ModeratorListItem", me.a),
				be = m.a.div("Username", me.a),
				he = m.a.a("MessageModsLink", me.a),
				ge = m.a.wrapped(oe.b, "FlairComponent", me.a),
				xe = e => e.authorFlairType === le.f.Richtext ? {
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
				fe = e => r.a.createElement(be, null, "u/".concat(e)),
				ke = m.a.wrapped(de.a, "InternalLink", me.a),
				ye = m.a.div("LinkContainer", me.a);
			var we = e => {
					const {
						subredditName: t,
						widget: n
					} = e;
					return r.a.createElement(d.a, {
						styles: n.styles,
						title: N.fbt._("Moderators", null, {
							hk: "3AMICc"
						}),
						headerButton: r.a.createElement(he, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, r.a.createElement(ce.a, null))
					}, n.mods.map(e => r.a.createElement(pe, {
						key: e.name
					}, (e => r.a.createElement(ae.a, {
						to: "/user/".concat(e.name, "/")
					}, fe(e.name)))(e), r.a.createElement(ge, {
						flair: xe(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(ye, null, r.a.createElement(ke, {
						to: "/r/".concat(t, "/about/moderators/")
					}, N.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					}))))
				},
				Oe = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				ve = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ce = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ee = n.n(Ce);
			const je = m.a.div("WidgetContent", Ee.a),
				_e = m.a.wrapped(o.a, "RawHTMLDisplay", Ee.a);
			var Ne = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(je, null, r.a.createElement(_e, {
					html: e.widget.textHtml || ""
				}))),
				Se = n("./src/reddit/components/Widgets/Base/index.tsx"),
				Pe = e => r.a.createElement(Se.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return we;
						case "textarea":
							return Ne;
						case "button":
							return _;
						case "subreddit-rules":
							return ve.b;
						case "community-list":
							return K;
						case "calendar":
							return V;
						case "image":
							return ie;
						case "custom":
							return Y;
						case "post-flair":
							return Oe.a;
						default:
							return Pe
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, n) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, n) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlair.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
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
				post: p.O,
				showEditFlair: m.a,
				subredditOrProfile: p.bb,
				userIsOp: b.hb
			}), (e, t) => {
				let {
					postId: n
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						} = t;
						return e(Object(a.h)({
							post: n,
							previewFlair: s,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const s = t === d.a.upvoted ? Object(i.cb)(n) : Object(i.y)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(i.ab)(n)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, n) => Object.assign({}, n, e, t, {
				onFlairChanged: n => {
					let {
						previewFlair: s,
						selectedTemplateId: r
					} = n;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: s,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const b = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: a,
						"data-redditstyle": o
					} = t, d = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, n) => {
						const s = !(!t && !n);
						let r = "";
						return r = e ? s ? u.a.mDisabledRedditStyle : u.a.mDisabled : s ? u.a.mActiveRedditStyle : u.a.mActive
					})(s, a, o);
					return r.a.createElement(e, m({
						className: Object(i.a)(u.a.Checkbox, c, n)
					}, d))
				},
				h = b(c.a),
				g = b(d);
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			class f extends a.a.Component {
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
					}, n = Object(o.a)(h.a.iconWrapper, e.iconWrapperClassName);
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
						className: n
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
						className: n
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
				} = e, n = x(e, ["className"]);
				const s = Object(o.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !n.noHover,
					[h.a.mIsSelected]: n.isSelected,
					[h.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(f, g({
					className: s
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(i);
			t.a = s.a.wrapped(r.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/graphql/operations/SubredditWiki.json");
			const i = (e, t) => Object(s.a)(e, Object.assign({}, r, {
				variables: t
			}))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.a.NO_ADS);
				return !n && !r
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(s.a)(e).banner.iconImage ? String(Object(s.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = n.n(r);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				o = e => Object(s.a)(i.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			}));
			const s = () => e => ({
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
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/sortBy.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/wiki.ts");
			const a = e => {
				return r()(e, e => "".concat(e.path, "/").startsWith("".concat(i.i, "/")) ? "\0".concat(e.path) : e.path).filter(e => !i.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					n = [];
				return a(e).forEach(e => {
					const s = Object.assign({}, e, {
							children: []
						}),
						r = s.parent ? t.get(s.parent) : null;
					r ? r.children.push(s) : n.push(s), t.set(s.path, s)
				}), n
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: n,
					subredditName: s,
					wikiPageName: r
				} = e;
				return "[".concat(s, "]--[").concat(r, "]--[rev1:").concat(n, "]--[rev2:").concat(t, "]").toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return "[".concat(e.subredditName, "]--[").concat(t, "]").toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				let t = "[".concat(e.subredditName, "]--[").concat(e.wikiPageName, "]");
				return e.revisionId && (t += "--[rev:".concat(e.revisionId, "]")), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var s = n("./src/reddit/constants/wiki.ts");
			const r = new RegExp("^[-\\w]+(?:\\/[-\\w]+){0,".concat(s.c, "}$")),
				i = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!i.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const n = e.toLowerCase(),
						i = n.split("/")[0],
						o = s.b.has(i),
						d = s.f.has(i) && n !== s.h && n !== s.k;
					if (o || d) return a.RestrictedPageName;
					if (!r.test(n)) return a.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === n)) return a.PageAlreadyExists
					}
					return n.length > s.d ? a.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				r = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				o = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", o.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, n) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Envelope/index.m.less"),
				o = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("envelope"), " ").concat(e.className)
			}), "Envelope", o.a);
			t.a = d
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
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				o = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				o = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
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
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/pages/shared.ts"),
				d = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = n("./src/reddit/components/ContentGate/index.tsx"),
				l = n("./src/reddit/components/HeaderImage/index.tsx"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: n
					} = e, s = Object(m.a)(n, u.N.HOT, {});
					return r.a.createElement(p.a, {
						listingKey: s,
						listingName: n.toLowerCase(),
						subredditId: t.id,
						subredditName: n
					})
				},
				h = n("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				g = n("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				x = n("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				f = n("./src/reddit/constants/parameters.ts"),
				k = n("./src/reddit/constants/wiki.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				w = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				O = n("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				v = n("./src/reddit/components/JumpToContent/index.tsx"),
				C = n("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				E = n("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				j = n("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				_ = n.n(j),
				N = e => {
					const {
						wikiPageName: t,
						subredditName: n
					} = e;
					return s.createElement(s.Fragment, null, s.createElement(v.a, null), s.createElement(E.a, {
						isModHub: !1,
						className: _.a.topBar,
						wikiPageName: t,
						subredditName: n
					}), s.createElement(C.a, {
						showRevisionInfo: !0,
						subredditName: n,
						wikiPageName: t
					}))
				},
				S = n("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				P = n.n(S);
			class T extends r.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: n,
						queryParams: s
					} = e, {
						wikiSubRoute: i,
						wikiPageName: a
					} = n, o = s[f.w], d = s[f.x], c = f.y in s;
					switch (i) {
						case k.m.Create:
						case k.m.Edit:
							return r.a.createElement(g.a, {
								contentClassName: P.a.wikiPageEditorContent,
								isCreation: i === k.m.Create,
								subredditName: t,
								topBarClassName: P.a.communityWikiTopBar,
								wikiPageName: a
							});
						case k.m.Revisions:
							return r.a.createElement(O.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? r.a.createElement(h.a, {
								comparisonRevisionId: Object(w.a)(d),
								revisionId: Object(w.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? r.a.createElement(x.a, {
								revisionId: o ? Object(w.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? r.a.createElement(N, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var I = Object(y.t)()(T),
				L = n("./src/reddit/constants/componentSizes.ts"),
				M = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				R = n("./src/reddit/layout/page/Listing/index.tsx"),
				W = n("./src/reddit/selectors/subreddit.ts"),
				D = n("./src/reddit/selectors/user.ts");
			const B = Object(y.t)(),
				F = Object(i.b)(() => Object(a.c)({
					contentGateInfo: (e, t) => {
						let {
							match: n
						} = t;
						return Object(D.e)(e, n.params.subredditName)
					},
					layout: y.N,
					over18Pref: D.V,
					subreddit: (e, t) => {
						let {
							match: n
						} = t;
						return Object(W.z)(e, {
							subredditName: n.params.subredditName || k.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: n
						} = t;
						return n.params.subredditName || k.e
					},
					wikiPageName: (e, t) => {
						let {
							match: n
						} = t;
						return n.params.wikiPageName || k.i
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
						layout: n,
						subreddit: s,
						subredditName: i
					} = this.props, a = !!s && s.isNSFW && !D.V, o = Object(M.a)(t, a, i);
					if (o) return r.a.createElement(c.default, o);
					const u = "/r/".concat(i, "/");
					return r.a.createElement(R.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: L.i,
						navBar: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : i,
							maxWidth: L.i,
							subredditOrProfile: s,
							url: u
						}), r.a.createElement(d.a, {
							layout: n,
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: i,
							subredditUrl: u
						})),
						content: r.a.createElement(I, {
							subredditName: i
						}),
						sidebar: s && r.a.createElement(b, {
							subreddit: s,
							subredditName: i
						})
					})
				}
			}
			t.default = B(F(A))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => s.U.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.S
			})
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "p", (function() {
				return c
			})), n.d(t, "q", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/es6.regexp.search.js");
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const i = [],
				a = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.subreddits.subredditWiki.directory[n.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.subreddits.api.wiki.pending[n.toLowerCase()]
				},
				d = (e, t) => {
					const n = Object(r.a)(t);
					return e.subreddits.subredditWiki.pages[n]
				},
				c = (e, t) => {
					let {
						listingKey: n
					} = t;
					return e.subreddits.subredditWiki.revisions.listings[n]
				},
				l = (e, t) => {
					let {
						listingKey: n
					} = t;
					return !!e.subreddits.subredditWiki.revisions.api.pending[n]
				},
				u = (e, t) => {
					let {
						listingKey: n
					} = t;
					return !!e.subreddits.subredditWiki.revisions.api.error[n]
				},
				m = (e, t) => {
					return (e => e.subreddits.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				p = (e, t) => {
					let {
						key: n
					} = t;
					return e.subreddits.subredditWiki.diff[n]
				},
				b = (e, t) => {
					const n = Object(r.a)(t);
					return e.subreddits.subredditWiki.pageSettings[n]
				},
				h = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.subreddits.subredditWiki.wikiContributors.listing.api.pending[n.toLowerCase()]
				},
				g = Object(s.a)((e, t) => {
					let {
						subredditName: n
					} = t;
					const s = n.toLowerCase(),
						r = e.subreddits.subredditWiki.wikiContributors.listing,
						a = r.userOrder[s],
						o = r.models[s];
					return a ? a.map(e => o[e]) : i
				}),
				x = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.subreddits.subredditWiki.wikiContributors.listing.afterToken[n.toLowerCase()]
				},
				f = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.subreddits.subredditWiki.wikiContributors.search[n.toLowerCase()]
				},
				k = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.subreddits.subredditWiki.wikiBannedContributors.listing.api.pending[n.toLowerCase()]
				},
				y = Object(s.a)((e, t) => {
					let {
						subredditName: n
					} = t;
					const s = n.toLowerCase(),
						r = e.subreddits.subredditWiki.wikiBannedContributors.listing,
						a = r.userOrder[s],
						o = r.models[s];
					return a ? a.map(e => o[e]) : i
				}),
				w = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.subreddits.subredditWiki.wikiBannedContributors.listing.afterToken[n.toLowerCase()]
				},
				O = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.subreddits.subredditWiki.wikiBannedContributors.search[n.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=SubredditWiki.ca794ad54ceab99fedd8.js.map