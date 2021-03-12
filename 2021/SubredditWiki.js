// https://www.redditstatic.com/desktop2x/SubredditWiki.dc6eef0a22a13c7bee67.js
// Retrieved at 3/11/2021, 7:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				i = Math.max;
			e.exports = function(e, t, n, r) {
				for (var o = -1, a = i(s((t - e) / (n || 1)), 0), d = Array(a); a--;) d[r ? a : ++o] = e, e += n;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_baseRange.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, o) {
					return o && "number" != typeof o && n(t, s, o) && (s = o = void 0), t = r(t), void 0 === s ? (s = t, t = 0) : s = r(s), o = void 0 === o ? t < s ? 1 : -1 : r(o), i(t, s, o, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_createRange.js")();
			e.exports = i
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
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let i;
			const n = new Map,
				r = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), i = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!r.get(t)) {
						r.set(t, s);
						const i = n.get(t);
						if (i) {
							i(e, s && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const o = (e, t) => {
					try {
						n.set(e, t), i && i.observe(e)
					} catch (s) {
						0
					}
				},
				a = e => {
					try {
						n.delete(e), i && i.unobserve(e)
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
			var i = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				n = s("./src/reddit/helpers/routeKey/index.ts"),
				r = s("./src/reddit/helpers/trackers/screenview.ts"),
				o = s("./src/telemetry/index.ts"),
				a = s("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const s = t(),
					{
						currentPage: d
					} = s.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(i.a)(s),
					u = Object(n.b)(c, s, l);
				u && o.c.has(u) && Object(r.k)(c, s, a.TimerType.InApp, o.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "subredditWikiDataPending", (function() {
				return qe
			})), s.d(t, "subredditWikiDataLoaded", (function() {
				return Ge
			})), s.d(t, "subredditWikiDataFailed", (function() {
				return He
			})), s.d(t, "fetchSubredditWikiData", (function() {
				return ze
			})), s.d(t, "handleWikiRedirects", (function() {
				return $e
			})), s.d(t, "subredditWikDataRequested", (function() {
				return Xe
			})), s.d(t, "subredditWikiPageRequested", (function() {
				return Je
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/isEmpty.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				l = s("./src/config.ts"),
				u = (s("./src/reddit/actions/platform.ts"), s("./src/reddit/helpers/path/index.ts"));
			var b = s("./src/reddit/actions/ads/index.ts"),
				m = s("./src/reddit/actions/pages/subreddit.ts"),
				p = s("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				k = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				f = s("./src/lib/makeGqlRequest/index.ts"),
				w = s("./src/graphql/operations/WikiComparisonDiff.json"),
				x = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var y = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				O = s("./src/reddit/selectors/subredditWiki.ts");
			const N = Object(d.a)("WIKI_DIFF_PENDING"),
				_ = Object(d.a)("WIKI_DIFF_LOADED"),
				C = Object(d.a)("WIKI_DIFF_FAILED"),
				v = e => async (t, s, i) => {
					const n = s(),
						r = Object(y.a)(e),
						o = Object(O.i)(n, {
							key: r
						});
					if (o && (o.pending || !o.error)) return !0;
					const d = {
						key: r
					};
					t(N(d));
					const c = await ((e, t) => Object(f.a)(e, {
						...w,
						variables: {
							...t,
							comparisonRevisionId: Object(x.b)(t.comparisonRevisionId),
							revisionId: Object(x.b)(t.revisionId)
						}
					}))(i.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							s = t && t.page && t.page.revisionComparisonDiffHtml;
						s ? u = s : l = {
							type: a.E.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: a.E.UNKNOWN_ERROR
					};
					return t(l ? C({
						...d,
						error: l
					}) : _({
						...d,
						htmlDiff: u
					})), !l
				};
			var j = s("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				E = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				I = s("./src/reddit/constants/parameters.ts"),
				S = s("./src/reddit/constants/wiki.ts"),
				T = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				R = s("./src/reddit/helpers/brandSafety/index.ts"),
				P = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				W = s("./src/reddit/models/Toast/index.ts"),
				D = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				L = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/lib/initializeClient/installReducer.ts"),
				M = s("./node_modules/redux/es/redux.js");
			const K = {};
			var U = (e = K, t) => {
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: s,
							htmlDiff: i
						} = t.payload;
						return {
							...e,
							[s]: {
								htmlDiff: i
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: s,
							error: i
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								pending: !1,
								error: i
							}
						}
					}
					default:
						return e
				}
			};
			const F = {};
			var q = (e = F, t) => {
					switch (t.type) {
						case p.b:
							const s = t.payload,
								{
									subredditWiki: i,
									options: n
								} = s,
								r = i && i.directory;
							if (!r) return e;
							const {
								subredditName: o
							} = n;
							return {
								...e, [o.toLowerCase()]: r
							};
						default:
							return e
					}
				},
				G = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const H = {};
			var V = (e = H, t) => {
					switch (t.type) {
						case p.b: {
							const {
								subredditWiki: s,
								pageKey: i
							} = t.payload, {
								page: n
							} = s;
							return i && n ? {
								...e,
								[i]: n
							} : e
						}
						case G.a: {
							const {
								pageKey: s,
								page: i
							} = t.payload;
							return {
								...e,
								[s]: i
							}
						}
						default:
							return e
					}
				},
				z = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const $ = {};
			var X = (e = $, t) => {
					switch (t.type) {
						case z.c: {
							const {
								settings: s,
								pageKey: i
							} = t.payload;
							return s ? {
								...e,
								[i]: s
							} : e
						}
						case z.d: {
							const {
								isVisible: s,
								editPermissions: i,
								pageKey: n
							} = t.payload, r = e[n];
							return r ? {
								...e,
								[n]: {
									...r,
									isVisible: s,
									editPermissions: i
								}
							} : e
						}
						case z.b: {
							const {
								editorsInfo: s,
								afterToken: i,
								pageKey: n
							} = t.payload, r = e[n];
							if (!r) return e;
							const o = [...r.editorsInfo, ...s];
							return {
								...e,
								[n]: {
									...r,
									editorsInfo: o,
									afterToken: i
								}
							}
						}
						case z.a: {
							const {
								username: s,
								pageKey: i
							} = t.payload, n = e[i];
							if (!n) return e;
							const r = n.editorsInfo.filter(e => e.username !== s);
							return {
								...e,
								[i]: {
									...n,
									editorsInfo: r
								}
							}
						}
						default:
							return e
					}
				},
				J = s("./src/lib/omitKey/index.ts");
			const Z = {};
			var Y = (e = Z, t) => {
				switch (t.type) {
					case G.b: {
						const {
							key: s,
							error: i
						} = t.payload;
						return {
							...e,
							[s]: i
						}
					}
					case G.d:
					case G.c: {
						const {
							key: s
						} = t.payload;
						return Object(J.a)(e, s)
					}
					default:
						return e
				}
			};
			const Q = {};
			var ee = (e = Q, t) => {
					switch (t.type) {
						case G.d:
						case G.b:
						case G.c: {
							const {
								key: s
							} = t.payload, i = t.type === G.d;
							return {
								...e,
								[s]: i
							}
						}
						default:
							return e
					}
				},
				te = Object(M.c)({
					error: Y,
					pending: ee
				}),
				se = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ie = {};
			var ne = (e = ie, t) => {
				switch (t.type) {
					case G.c: {
						const {
							key: s,
							options: i,
							pageInfo: n,
							revisionsIds: r
						} = t.payload, o = e[s], a = i.after && o ? [...o.ids, ...r] : r;
						return {
							...e,
							[s]: {
								ids: a,
								pageInfo: n
							}
						}
					}
					case G.a: {
						const {
							page: {
								revision: s
							},
							pageRevisionsListingKey: i,
							recentRevisionsListingKey: n
						} = t.payload, r = e[i];
						return r && s ? {
							...Object(J.a)(e, n),
							[i]: {
								...r,
								ids: [s.id, ...r.ids]
							}
						} : e
					}
					case se.a: {
						const {
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: i
						} = t.payload, n = {
							...e
						};
						return delete n[s], delete n[i], n
					}
					default:
						return e
				}
			};
			const re = {};
			var oe = (e = re, t) => {
					switch (t.type) {
						case p.b: {
							const {
								subredditWiki: {
									page: s
								}
							} = t.payload, i = s && s.revision;
							return i && !e[i.id] ? {
								...e,
								[i.id]: i
							} : e
						}
						case G.c: {
							const {
								revisions: s
							} = t.payload;
							return {
								...e,
								...s
							}
						}
						case G.a: {
							const {
								page: s
							} = t.payload, i = s.revision;
							return i ? {
								...e,
								[i.id]: i
							} : e
						}
						case G.e: {
							const {
								revisionId: s,
								isHidden: i
							} = t.payload, n = e[s];
							return n ? {
								...e,
								[s]: {
									...n,
									isHidden: i
								}
							} : e
						}
						default:
							return e
					}
				},
				ae = Object(M.c)({
					api: te,
					listings: ne,
					models: oe
				}),
				de = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const ce = {};
			var le = (e = ce, t) => {
				switch (t.type) {
					case de.c:
					case de.a: {
						const {
							subredditName: s,
							afterToken: i
						} = t.payload;
						return {
							...e,
							[s]: i
						}
					}
					default:
						return e
				}
			};
			const ue = {};
			var be = (e = ue, t) => {
				switch (t.type) {
					case de.b: {
						const {
							subredditName: s,
							error: i
						} = t.payload;
						return {
							...e,
							[s]: i
						}
					}
					case de.d:
					case de.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(J.a)(e, s)
					}
					default:
						return e
				}
			};
			const me = {};
			var pe = (e = me, t) => {
					switch (t.type) {
						case de.d:
						case de.c:
						case de.b: {
							const {
								subredditName: s
							} = t.payload, i = t.type === de.d;
							return {
								...e,
								[s]: i
							}
						}
						default:
							return e
					}
				},
				ke = Object(M.c)({
					error: be,
					pending: pe
				});
			const ge = {};
			var he = (e = ge, t) => {
					switch (t.type) {
						case de.c:
						case de.a: {
							const {
								subredditName: s,
								bannedContributors: i
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									...i
								}
							}
						}
						case de.e: {
							const {
								subredditName: s,
								bannedContributor: i
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									...i
								}
							}
						}
						case de.f: {
							const {
								subredditName: s,
								userId: i
							} = t.payload, n = Object(J.a)(e[s], i);
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				fe = s("./node_modules/lodash/uniq.js"),
				we = s.n(fe);
			const xe = {};
			var ye = (e = xe, t) => {
					switch (t.type) {
						case de.c:
						case de.a: {
							const {
								subredditName: s,
								userOrder: i
							} = t.payload;
							return {
								...e,
								[s]: we()([...e[s] || [], ...i])
							}
						}
						case de.e: {
							const {
								subredditName: s,
								userOrder: i
							} = t.payload;
							return {
								...e,
								[s]: we()([...i, ...e[s] || []])
							}
						}
						case de.f: {
							const {
								subredditName: s,
								userId: i
							} = t.payload;
							return {
								...e,
								[s]: (e[s] || []).filter(e => e !== i)
							}
						}
						default:
							return e
					}
				},
				Oe = Object(M.c)({
					afterToken: le,
					api: ke,
					models: he,
					userOrder: ye
				});
			const Ne = {};
			var _e = (e = Ne, t) => {
					switch (t.type) {
						case de.g: {
							const {
								subredditName: s,
								bannedContributor: i
							} = t.payload;
							return {
								...e,
								[s]: i
							}
						}
						default:
							return e
					}
				},
				Ce = Object(M.c)({
					listing: Oe,
					search: _e
				}),
				ve = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const je = {};
			var Ee = (e = je, t) => {
				switch (t.type) {
					case ve.c:
					case ve.a: {
						const {
							subredditName: s,
							afterToken: i
						} = t.payload;
						return {
							...e,
							[s]: i
						}
					}
					default:
						return e
				}
			};
			const Ie = {};
			var Se = (e = Ie, t) => {
				switch (t.type) {
					case ve.b: {
						const {
							subredditName: s,
							error: i
						} = t.payload;
						return {
							...e,
							[s]: i
						}
					}
					case ve.d:
					case ve.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(J.a)(e, s)
					}
					default:
						return e
				}
			};
			const Te = {};
			var Re = (e = Te, t) => {
					switch (t.type) {
						case ve.d:
						case ve.c:
						case ve.b: {
							const {
								subredditName: s
							} = t.payload, i = t.type === ve.d;
							return {
								...e,
								[s]: i
							}
						}
						default:
							return e
					}
				},
				Pe = Object(M.c)({
					error: Se,
					pending: Re
				});
			const We = {};
			var De = (e = We, t) => {
				switch (t.type) {
					case ve.c:
					case ve.a: {
						const {
							subredditName: s,
							contributors: i
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...i
							}
						}
					}
					case ve.e: {
						const {
							subredditName: s,
							contributor: i
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...i
							}
						}
					}
					case ve.f: {
						const {
							subredditName: s,
							userId: i
						} = t.payload, n = Object(J.a)(e[s], i);
						return {
							...e,
							newState: n
						}
					}
					default:
						return e
				}
			};
			const Le = {};
			var Ae = (e = Le, t) => {
					switch (t.type) {
						case ve.c:
						case ve.a: {
							const {
								subredditName: s,
								userOrder: i
							} = t.payload;
							return {
								...e,
								[s]: we()([...e[s] || [], ...i])
							}
						}
						case ve.e: {
							const {
								subredditName: s,
								userOrder: i
							} = t.payload;
							return {
								...e,
								[s]: [...i, ...e[s] || []]
							}
						}
						case ve.f: {
							const {
								subredditName: s,
								userId: i
							} = t.payload;
							return {
								...e,
								[s]: (e[s] || []).filter(e => e !== i)
							}
						}
						default:
							return e
					}
				},
				Be = Object(M.c)({
					afterToken: Ee,
					api: Pe,
					models: De,
					userOrder: Ae
				});
			const Me = {};
			var Ke = (e = Me, t) => {
					switch (t.type) {
						case ve.g: {
							const {
								subredditName: s,
								contributor: i
							} = t.payload;
							return {
								...e,
								[s]: i
							}
						}
						default:
							return e
					}
				},
				Ue = Object(M.c)({
					listing: Be,
					search: Ke
				}),
				Fe = Object(M.c)({
					diff: U,
					directory: q,
					pages: V,
					pageSettings: X,
					revisions: ae,
					wikiBannedContributors: Ce,
					wikiContributors: Ue
				});
			Object(B.a)({
				pages: {
					subredditWiki: Fe
				}
			});
			const qe = Object(d.a)(p.c),
				Ge = Object(d.a)(p.b),
				He = Object(d.a)(p.a),
				Ve = (e, t) => !!Object(O.b)(e, {
					subredditName: t
				}),
				ze = e => async (t, s, n) => {
					const {
						canShowFailToast: o,
						wikiPageName: d
					} = e, c = d === S.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(P.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(qe({
						options: l,
						pageKey: u
					}));
					const b = await Object(T.a)(n.gqlContext(), l),
						m = b.body,
						p = b.ok ? m.data && m.data.subreddit && m.data.subreddit.wiki : null;
					return b.ok && p ? t(Ge({
						options: l,
						pageKey: u,
						subredditWiki: p
					})) : (t(He({
						options: l,
						pageKey: u,
						error: b.error || {
							type: a.E.NOT_FOUND_ERROR
						}
					})), o && t(Object(k.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: W.b.Error,
						text: i.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: ze(e)
					}))), !(!b.ok || !r()(m.data.subreddit)) || !(!b.ok || !p)
				}, $e = e => async (t, s) => {
					const {
						params: i,
						url: n
					} = e, {
						wikiPageName: r
					} = i, a = Object(L.a)(n, i);
					let d = !1;
					return S.l.includes(r || "") ? (await (async (e, t) => {
						const s = `${l.a.oldRedditUrl}${Object(u.b)(e)}`;
						window.location.href = s
					})(e.url), d = !0) : n !== a && (await t(Object(o.c)(a)), d = !0), d
				}, Xe = (e, t, s = !1) => async (n, r, o) => {
					const {
						subredditName: d = S.e,
						wikiPageName: l,
						wikiSubRoute: u
					} = e, b = t[I.A], p = t[I.B], f = b ? Object(x.a)(b) : void 0, w = p ? Object(x.a)(p) : void 0, y = l === S.j, N = u === S.m.Revisions;
					let _ = !1,
						C = !1;
					if (s) {
						const {
							pageName: t
						} = e;
						_ = t === a.Sb.WikiContributors, C = t === a.Sb.WikiBanned
					}
					const T = r(),
						R = (y || s) && !Ve(T, d),
						P = !!l && !((e, t, s, i) => {
							return s === S.j ? Ve(e, t) : !!Object(O.c)(e, {
								subredditName: t,
								wikiPageName: s,
								revisionId: i
							})
						})(T, d, l, f),
						D = [];
					D.push(n(((e, t = !1) => async (s, i) => {
						const n = i(),
							r = {
								sort: a.P.HOT
							},
							o = Object(c.a)(e, r.sort),
							d = n.listings.postOrder.api.error[o],
							l = n.listings.postOrder.api.pending[o],
							u = !!n.listings.postOrder.ids[o];
						return !!(l || u && !d) || (await s(Object(m.subredditDataRequested)(o, e, r, t)), !i().listings.postOrder.api.error[o])
					})(d))), (R || P) && D.push(n(ze({
						includeDirectory: R,
						includePageData: P,
						revisionId: f,
						subredditName: d,
						wikiPageName: l
					}))), u === S.m.Settings && l && D.push(n(Object(j.c)(d, l))), l && f && w && D.push(n(v({
						comparisonRevisionId: w,
						revisionId: f,
						subredditName: d,
						wikiPageName: l
					}))), N && D.push(n(Object(E.c)({
						isRecent: !l,
						wikiPageName: l,
						subredditName: d
					}))), _ && D.push(n(Object(h.e)(d))), C && D.push(n(Object(g.e)(d))), (await Promise.all(D)).every(Boolean) || n(Object(k.f)({
						kind: W.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Xe(e, t, s)
					}))
				}, Je = e => async (t, s) => {
					if (await t($e(e))) return;
					const {
						params: i,
						queryParams: n
					} = e, r = i.subredditName || S.e;
					await t(Xe(i, n));
					const o = Object(A.A)(s(), {
							subredditName: r
						}),
						a = s();
					o && (a.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(b.b)(D.a.SUBREDDIT))
					}), t(Object(b.d)({
						isViewSafe: Object(R.a)([], [o])
					})))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			}));
			const i = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				n = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				r = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				a = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return w
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/graphql/operations/SubredditWikiBannedContributors.json"),
				u = s("./src/reddit/constants/headers.ts");
			const b = (e, t) => Object(d.a)(e, {
				...l,
				variables: t
			});
			var m = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: s,
						pageInfo: i
					} = t, n = [], r = {};
					return s.forEach(e => {
						const {
							date: t,
							redditor: s,
							editWikiBanInfo: i
						} = e.node;
						s.id && s.name && s.icon && (r[s.id] = {
							id: s.id,
							username: s.name,
							iconUrl: s.icon.url,
							date: t,
							daysRemaining: i.daysRemaining,
							note: i.note
						}, n.push(s.id))
					}), {
						afterToken: i.hasNextPage ? i.endCursor : null,
						bannedContributors: r,
						userOrder: n
					}
				},
				p = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(r.a)(k.d),
				h = Object(r.a)(k.c),
				f = Object(r.a)(k.b),
				w = e => async (t, s, i) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						o = await b(i.gqlContext(), r);
					if (o.ok) {
						const s = o.body,
							i = s.data.subreddit && s.data.subreddit.wiki;
						if (i) {
							const s = m(i);
							t(h({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const s = o.error || {
							type: n.E.UNKNOWN_ERROR
						};
						t(f({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, x = Object(r.a)(k.a), y = (e, t) => async (s, n, r) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await b(r.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const i = m(t.data.subreddit.wiki);
							s(x({
								...i,
								subredditName: e.toLowerCase()
							}))
						}
					} else s(Object(o.f)({
						kind: p.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, O = Object(r.a)(k.e), N = (e, t) => async (s, r, d) => {
					const l = await ((e, t, s) => Object(a.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.cb.POST,
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
						s(Object(o.f)({
							kind: p.b.SuccessMod,
							text: i.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const n = {
								subredditName: e,
								username: t.username
							},
							r = (await b(d.gqlContext(), n)).body;
						if (r.data.subreddit.wiki) {
							const t = m(r.data.subreddit.wiki);
							s(O({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						l.error.type === n.E.USER_DOESNT_EXIST && (e = i.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), s(Object(o.f)({
							kind: p.b.Error,
							text: e || i.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return l.ok
				}, _ = Object(r.a)(k.f), C = (e, t) => async (s, r, d) => {
					const l = await ((e, t, s) => Object(a.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.cb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (s(Object(o.f)({
						kind: p.b.SuccessMod,
						text: i.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), s(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(o.f)({
						kind: p.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					})), l.ok
				}, v = Object(r.a)(k.g), j = (e, t) => async (s, n, r) => {
					const a = {
							subredditName: e,
							username: t
						},
						d = await b(r.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const i = m(t.data.subreddit.wiki),
								n = Object.keys(i.bannedContributors)[0];
							s(v({
								subredditName: e.toLowerCase(),
								bannedContributor: i.bannedContributors[n]
							}))
						}
					} else s(Object(o.f)({
						kind: p.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			}));
			const i = "WIKI_CONTRIBUTORS_PENDING",
				n = "WIKI_CONTRIBUTORS_LOADED",
				r = "WIKI_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_CONTRIBUTORS_LOADED",
				a = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return w
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/graphql/operations/SubredditWikiContributors.json"),
				u = s("./src/reddit/constants/headers.ts");
			const b = (e, t) => Object(d.a)(e, {
				...l,
				variables: t
			});
			var m = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: s,
						pageInfo: i
					} = t, n = [], r = {};
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
						}, n.push(s.id))
					}), {
						afterToken: i.hasNextPage ? i.endCursor : null,
						contributors: r,
						userOrder: n
					}
				},
				p = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(r.a)(k.d),
				h = Object(r.a)(k.c),
				f = Object(r.a)(k.b),
				w = e => async (t, s, i) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						o = await b(i.gqlContext(), r);
					if (o.ok) {
						const s = o.body,
							i = s.data.subreddit && s.data.subreddit.wiki;
						if (i) {
							const s = m(i);
							t(h({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const s = o.error || {
							type: n.E.UNKNOWN_ERROR
						};
						t(f({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, x = Object(r.a)(k.a), y = (e, t) => async (s, n, r) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await b(r.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const i = m(t.data.subreddit.wiki);
							s(x({
								...i,
								subredditName: e.toLowerCase()
							}))
						}
					} else s(Object(o.f)({
						kind: p.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, O = Object(r.a)(k.e), N = (e, t) => async (s, r, d) => {
					const l = await ((e, t, s) => Object(a.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.cb.POST,
						data: {
							api_type: "json",
							name: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (l.ok) {
						s(Object(o.f)({
							kind: p.b.SuccessMod,
							text: i.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const n = {
								subredditName: e,
								username: t
							},
							a = (await b(d.gqlContext(), n)).body;
						if (a.data.subreddit.wiki) {
							const t = m(a.data.subreddit.wiki),
								i = Object.keys(t.contributors)[0];
							!!r().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][i] || s(O({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						const t = l.error.type;
						t === n.E.USER_DOESNT_EXIST ? e = i.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === n.E.BANNED_FROM_SUBREDDIT && (e = i.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), s(Object(o.f)({
							kind: p.b.Error,
							text: e || i.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return l.ok
				}, _ = Object(r.a)(k.f), C = (e, t) => async (s, r, d) => {
					const l = await ((e, t, s) => Object(a.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.cb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (s(Object(o.f)({
						kind: p.b.SuccessMod,
						text: i.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), s(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(o.f)({
						kind: p.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					})), l.ok
				}, v = Object(r.a)(k.g), j = (e, t) => async (s, n, r) => {
					const a = {
							subredditName: e,
							username: t
						},
						d = await b(r.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const i = m(t.data.subreddit.wiki),
								n = Object.keys(i.contributors)[0];
							s(v({
								subredditName: e.toLowerCase(),
								contributor: i.contributors[n]
							}))
						}
					} else s(Object(o.f)({
						kind: p.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			const i = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				n = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				r = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				o = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "d", (function() {
				return I
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/subredditSettings.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts"),
				b = s("./src/graphql/operations/SubredditWikiPageSettings.json"),
				m = s("./src/reddit/models/SubredditWikiPage/index.ts");
			const p = (e, t) => Object(c.a)(e, {
					...b,
					variables: t
				}),
				k = {
					[m.a.Inherit]: "0",
					[m.a.Contributors]: "1",
					[m.a.Mods]: "2"
				};
			var g = e => {
					const {
						editPermissions: t,
						editorsInfo: s,
						isVisible: i
					} = e, {
						edges: n,
						pageInfo: r
					} = s, o = [];
					return n.forEach(e => {
						e.node.name && e.node.icon && o.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: o,
						isVisible: i,
						afterToken: r.hasNextPage ? r.endCursor : null
					}
				},
				h = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				f = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(r.a)(x.c),
				O = (e, t) => async (s, i, n) => {
					const r = {
							subredditName: e,
							wikiPageName: t
						},
						a = await p(n.gqlContext(), r),
						d = Object(w.F)(i(), e);
					if (Object(w.V)(i(), d) || await s(Object(o.h)(e, d)), a.ok) {
						const e = a.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							s(y({
								pageKey: Object(h.a)(r),
								settings: e
							}))
						}
					}
					return a.ok
				}, N = Object(r.a)(x.b), _ = (e, t, s) => async (n, r, o) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: s
						},
						c = await p(o.gqlContext(), d);
					if (c.ok) {
						const s = c.body,
							i = s.data.subreddit && s.data.subreddit.wiki;
						if (i && i.page) {
							const s = g(i.page.settings),
								{
									editorsInfo: r,
									afterToken: o
								} = s;
							n(N({
								editorsInfo: r,
								afterToken: o,
								pageKey: Object(h.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else n(Object(a.f)({
						kind: f.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e, t, s)
					}));
					return c.ok
				}, C = Object(r.a)(x.d), v = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: s,
					subredditName: i
				}) => async (r, o, a) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: n.cb.POST,
						data: {
							permlevel: k[e.editPermissions],
							listed: e.isVisible ? "on" : void 0
						}
					}))({
						context: a.apiContext(),
						editPermissions: e,
						isVisible: t,
						wikiPageName: s,
						subredditName: i
					});
					return c.ok && r(C({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(h.a)({
							wikiPageName: s,
							subredditName: i
						})
					})), c.ok
				}, j = ({
					subredditName: e,
					username: t,
					wikiPageName: s
				}) => async (r, o, c) => {
					const b = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: n.cb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: c.apiContext(),
						wikiPageName: s,
						subredditName: e,
						username: t
					});
					if (b.ok) r(Object(a.f)({
						kind: f.b.SuccessCommunity,
						text: "User successfully added"
					})), await r(O(e, s));
					else if (b.error) {
						const e = b.error.type;
						let t = i.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === n.E.NOT_FOUND_ERROR && (t = i.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), r(Object(a.f)({
							kind: f.b.Error,
							text: t
						}))
					}
					return b.ok
				}, E = Object(r.a)(x.a), I = ({
					subredditName: e,
					username: t,
					wikiPageName: s
				}) => async (i, r, o) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
						method: n.cb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: o.apiContext(),
						wikiPageName: s,
						subredditName: e,
						username: t
					});
					return c.ok && (i(Object(a.f)({
						kind: f.b.SuccessCommunity,
						text: "User has been successfully removed"
					})), i(E({
						username: t,
						pageKey: Object(h.a)({
							wikiPageName: s,
							subredditName: e
						})
					}))), c.ok
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			}));
			const i = "WIKI_REVISIONS_PENDING",
				n = "WIKI_REVISIONS_LOADED",
				r = "WIKI_REVISIONS_FAILED",
				o = "WIKI_PAGE_REVERT_SUCCESS",
				a = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return I
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/graphql/operations/WikiRevisions.json");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var p = (e, t) => Object(l.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: n.cb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(m.b)(t.revisionId)
				}
			});
			var k = (e, t) => Object(l.a)(Object(u.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: n.cb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(m.b)(t.revisionId)
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
							const i = e.node;
							t[i.id] = i, s.push(i.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: s
						}
					})(s)
				},
				h = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				f = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				w = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/subredditWiki.ts"),
				y = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const O = Object(r.a)(y.d),
				N = Object(r.a)(y.c),
				_ = Object(r.a)(y.b),
				C = e => async (t, s, r) => {
					const {
						canLoadMore: a = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: b,
						wikiPageName: m
					} = e, p = s(), k = Object(h.a)(e), f = Object(x.p)(p, {
						listingKey: k
					});
					if (!a && !!f) return !0;
					const y = f && f.pageInfo.endCursor || void 0;
					if (!(!f || f.pageInfo.hasNextPage)) return !0;
					const v = {
							after: y,
							isRecent: u,
							subredditName: b,
							wikiPageName: m
						},
						j = {
							key: k,
							options: v
						};
					t(O(j));
					const E = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(r.gqlContext(), v);
					if (E.ok) {
						const e = E.body;
						if (e.data.subreddit) {
							const s = g(e.data);
							t(N({
								...j,
								...s
							}))
						}
					} else {
						const s = E.error || {
							type: n.E.UNKNOWN_ERROR
						};
						t(_({
							...j,
							error: s
						})), l && t(Object(o.f)({
							kind: w.b.Error,
							text: i.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: i.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: C(e)
						}))
					}
					return E.ok
				}, v = Object(r.a)(y.a), j = e => async (t, s, n) => {
					const {
						subredditName: r,
						wikiPageName: d
					} = e, c = Object(f.a)({
						...e,
						revisionId: void 0
					}), l = Object(h.a)({
						...e,
						isRecent: !1
					}), u = Object(h.a)({
						...e,
						isRecent: !0
					}), b = Object(x.p)(s(), {
						listingKey: l
					}), m = b && b.ids[0];
					if ((await k(n.apiContext(), e)).ok) {
						const e = (await Object(a.a)(n.gqlContext(), {
								includePageData: !0,
								subredditName: r,
								wikiPageName: d
							})).body,
							s = e.data.subreddit && e.data.subreddit.wiki,
							b = s && s.page;
						if (!b || !b.revision) return;
						if (b.revision.id === m) return void t(Object(o.f)({
							kind: w.b.SuccessCommunityGreen,
							text: i.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(v({
							page: b,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: r,
							wikiPageName: d
						}))
					} else t(Object(o.f)({
						kind: w.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}, E = Object(r.a)(y.e), I = e => async (t, s, n) => {
					const r = await p(n.apiContext(), e);
					if (r.ok) {
						const s = r.body.status;
						t(E({
							revisionId: e.revisionId,
							isHidden: s
						}))
					} else t(Object(o.f)({
						kind: w.b.Error,
						text: i.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: i.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/config.ts"),
				a = s("./src/reddit/controls/InternalLink/index.tsx"),
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
				return e.isExternal || e.isLivestreaming ? n.a.createElement("a", {
					className: t,
					href: `${o.a.redditUrl}/user/${e.author}`,
					rel: "nofollow",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(r.a)(c.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(a.a, {
					className: t,
					style: e.style,
					to: `/user/${e.author}/`
				}, e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
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
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const b = e => e.preventDefault();
			t.a = Object(o.a)(e => r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(c.a, null, r.a.createElement(a.p, null, e.headerText || i.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(a.f, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: b,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || i.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: b,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = s("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(a.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return n.a.createElement(r.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, n.a.createElement(o.a, {
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
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/icons/fonts/Info/index.tsx"),
				c = s("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = s.n(c);
			const u = Object(r.a)(a.a),
				b = ["center", "bottom"],
				m = ["center", "top"];
			class p extends n.a.Component {
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
					return n.a.createElement("span", {
						className: l.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, n.a.createElement(d.a, null), n.a.createElement(u, {
						className: Object(o.a)(e.className, l.a.textTooltip),
						children: e.children,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: b,
						text: e.text,
						tooltipPosition: m
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
				return _
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				w = s.n(f);
			const x = c.a.wrapped(b.a, "_Dropdown", w.a),
				y = Object(u.a)(x),
				O = c.a.button("MenuButton", w.a),
				N = c.a.wrapped(g.a, "MenuIcon", w.a),
				_ = c.a.wrapped(m.b, "DropdownRow", w.a),
				C = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				v = Object(o.b)(C, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = v(e => {
				const t = Object(p.a)();
				return r.a.createElement(O, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": i.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(d.a)(e.className, {
						[w.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: j(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? r.a.createElement(k.a, {
					name: "overflow_horizontal"
				}) : r.a.createElement(N, null), r.a.createElement(y, {
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId,
					isFixed: e.isFixed,
					targetPosition: e.targetPosition,
					tooltipPosition: e.tooltipPosition,
					style: e.style
				}, e.children))
			})
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(n);
			t.a = i.a.div("container", r.a)
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = r.a.a("Link", c.a), b = Object(a.t)({
				isFrontpage: a.y
			});
			t.a = b(e => n.a.createElement(o.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: c.a.LinkContainer
			}, n.a.createElement("div", {
				className: c.a.Column
			}, n.a.createElement(u, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), n.a.createElement(u, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), n.a.createElement(u, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), n.a.createElement(u, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), n.a.createElement(u, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && n.a.createElement(n.a.Fragment, null, n.a.createElement(u, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), n.a.createElement(u, {
				href: "https://www.reddit.com/posts/2020/"
			}, l._("Rereddit", null, {
				hk: "1z3k7C"
			})), n.a.createElement(u, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), n.a.createElement("div", {
				className: c.a.Column
			}, n.a.createElement(u, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), n.a.createElement(u, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), n.a.createElement(u, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), n.a.createElement(u, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), n.a.createElement(u, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), n.a.createElement(u, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), n.a.createElement(u, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(u, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), n.a.createElement(u, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), n.a.createElement("div", {
				className: c.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
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
			var i = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(l);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var m = e => a.a.createElement("div", {
					className: Object(i.a)(e.className, u.a.container),
					style: e.style
				}, a.a.createElement(c.i, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, b._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				p = s("./src/reddit/components/SidebarFooter/index.tsx"),
				k = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(h),
				w = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const y = d.e[1] + 24,
				O = k.f + 8 + 152 + 16,
				N = O + y + 8,
				_ = w.a.div("Container", f.a),
				C = w.a.wrapped(({
					className: e,
					...t
				}) => a.a.createElement(m, x({
					className: e,
					style: {
						top: "calc(100vh - 8px)"
					}
				}, t)), "BackToTop", f.a),
				v = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: n
				}) => a.a.createElement("div", {
					className: Object(i.a)(t, {
						[f.a.StickyStyles]: n && !s,
						[f.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class j extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > N,
						shouldFooterSticky: this.windowHeight > O
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
							adComponentOnFakeOverlay: t,
							children: s,
							className: i,
							hideFooter: n
						}
					} = this, r = this.state.isAdSticky && !(!e && !s);
					return a.a.createElement(_, {
						className: i,
						innerRef: this.setWrapperRef
					}, a.a.createElement(v, {
						isFakeOverlay: t,
						isSticky: r
					}, e, s, !n && a.a.createElement(p.a, null)), !this.props.hideBackToTop && a.a.createElement(C, null))
				}
			}
			const E = Object(g.t)();
			t.a = E(j)
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-helmet/es/Helmet.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/pageTitle.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				l = s("./src/reddit/selectors/appBadges.ts");
			const u = Object(a.a)(l.c, e => ({
				badgeCount: e
			}));
			class b extends i.Component {
				constructor() {
					super(...arguments), this.title = Object(d.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(d.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(c.b)(this.props.badgeCount > 0), n.a.createElement(r.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(o.b)(u)(b)
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/widgets.ts"),
				p = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				k = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				w = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(w.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(w.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = x(e);
					return Object(f.f)(t)
				},
				N = e => {
					const t = y(e);
					return Object(f.f)(t)
				};
			var _ = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = s.n(_);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.t)(), E = Object(r.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.m)(e, t) || void 0,
						i = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						n = Object(h.V)(e);
					return i || n
				},
				nigtmode: h.V,
				subredditId: u.m,
				topPostVariant: k.d
			}));
			class I extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(m.b)(e, t)), this.setState({
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
					return e.backgroundColor = x(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = N(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: i,
						headerButton: r,
						onClick: o,
						title: d,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, m = s ? C.a.widgetContentOnly : C.a.widgetContent, p = !i && this.props.styles, k = p ? this.getWidgetBackgroundStyles() : {}, g = p ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: i,
							[C.a.clickable]: !!o,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": i,
						onClick: o,
						style: k
					}, d && n.a.createElement("div", {
						className: C.a.widgetHeader,
						style: g
					}, n.a.createElement("div", {
						className: Object(a.a)(C.a.widgetTitle, l)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), n.a.createElement("div", {
						className: Object(a.a)(m, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(b.o, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, v._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(E(Object(d.a)(Object(l.c)(I))))
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
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.m.less"),
				l = s.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const b = e => t => {
					const {
						className: s,
						disabled: i,
						redditStyle: o,
						"data-redditstyle": a,
						...d
					} = t, c = ((e, t, s) => {
						const i = !(!t && !s);
						let n = "";
						return n = e ? i ? l.a.mDisabledRedditStyle : l.a.mDisabled : i ? l.a.mActiveRedditStyle : l.a.mActive
					})(i, o, a);
					return n.a.createElement(e, u({
						className: Object(r.a)(l.a.CheckboxIcon, c, s)
					}, d))
				},
				m = b(d.a),
				p = b(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? p : e.isCheckboxSelected ? m : o.a;
				return n.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, n.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var i = s("./node_modules/lodash/throttle.js"),
				n = s.n(i),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.m.less"),
				m = s.n(b),
				p = s("./src/reddit/controls/Dropdown/row.m.less"),
				k = s.n(p);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
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
					}, s = Object(a.a)(k.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(d.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && o.a.createElement("span", {
						className: s
					}, e.children), o.a.createElement("span", {
						className: Object(a.a)(k.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(u.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(a.a)(k.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(l.a, {
						className: k.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(c.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(k.a.row, e, {
					[k.a.mIsInteractive]: !t.noHover,
					[k.a.mIsSelected]: t.isSelected,
					[k.a.topics]: t.isTopicsStyle
				});
				return o.a.createElement(h, g({
					className: s
				}, t))
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
			var i = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = s.n(r);
			t.a = i.a.wrapped(n.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/lib/makeGqlRequest/index.ts"),
				n = s("./src/graphql/operations/SubredditWiki.json");
			const r = (e, t) => Object(i.a)(e, {
				...n,
				variables: t
			})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var i = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === i.b.NO_ADS);
				return !s && !n
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
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(n);
			const o = ({
					isLoading: e
				}) => Object(i.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				a = e => Object(i.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var i, n, r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const a = (e, t) => s => ({
					source: n.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: i.SEE_MORE,
					widget: Object(o.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.defaults
				}),
				d = (e, t) => s => ({
					source: n.POST,
					action: r.c.CLICK,
					noun: i.REREDDIT_PROMO,
					post: o.post(s, e),
					subreddit: o.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: i.REREDDIT_PROMO
						}
					},
					...o.defaults(s)
				}),
				c = () => e => ({
					source: n.SIDEBAR,
					action: r.c.VIEW,
					noun: i.TOPICS_WIDGET,
					...o.defaults(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: i.TOPIC,
					...o.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/sortBy.js"),
				n = s.n(i),
				r = s("./src/reddit/constants/wiki.ts");
			const o = e => {
				return n()(e, e => `${e.path}/`.startsWith(`${r.i}/`) ? `\0${e.path}` : e.path).filter(e => !r.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					s = [];
				return o(e).forEach(e => {
					const i = {
							...e,
							children: []
						},
						n = i.parent ? t.get(i.parent) : null;
					n ? n.children.push(i) : s.push(i), t.set(i.path, i)
				}), s
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: s,
					subredditName: i,
					wikiPageName: n
				} = e;
				return `[${i}]--[${n}]--[rev1:${s}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var i = s("./src/reddit/constants/wiki.ts");
			const n = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${i.c}}$`),
				r = /^[-\w]+$/;
			var o;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(o || (o = {}));
			const a = e => {
					if (!r.test(e.toLowerCase())) return o.InvalidPageName
				},
				d = (e, t) => {
					const s = e.toLowerCase(),
						r = s.split("/")[0],
						a = i.b.has(r),
						d = i.f.has(r) && s !== i.h && s !== i.k;
					if (a || d) return o.RestrictedPageName;
					if (!n.test(s)) return o.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === s)) return o.PageAlreadyExists
					}
					return s.length > i.d ? o.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			}));
			const i = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				n = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				d = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return n.a.createElement("i", {
					className: `${Object(o.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", d.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(o);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, n.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, n.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, n.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/pages/shared.ts"),
				d = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = s("./src/reddit/components/ContentGate/index.tsx"),
				l = s("./src/reddit/components/HeaderImage/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				m = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var p = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, i = Object(b.a)(s, u.P.HOT, {});
					return n.a.createElement(m.a, {
						listingKey: i,
						listingName: s.toLowerCase(),
						subredditId: t.id,
						subredditName: s
					})
				},
				k = s("./src/reddit/components/TitleTagManager/index.tsx"),
				g = s("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				h = s("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				f = s("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				w = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/constants/wiki.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				N = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				_ = s("./src/reddit/components/JumpToContent/index.tsx"),
				C = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				v = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				j = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				E = s.n(j);

			function I(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return i.createElement(i.Fragment, null, i.createElement(_.a, null), i.createElement(v.a, {
					isModHub: !1,
					className: E.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), i.createElement(C.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var S = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				T = s.n(S);
			class R extends n.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: s,
						queryParams: i
					} = e, {
						wikiSubRoute: r,
						wikiPageName: o
					} = s, a = i[w.A], d = i[w.B], c = w.C in i;
					switch (r) {
						case x.m.Create:
						case x.m.Edit:
							return n.a.createElement(h.a, {
								contentClassName: T.a.wikiPageEditorContent,
								isCreation: r === x.m.Create,
								subredditName: t,
								topBarClassName: T.a.communityWikiTopBar,
								wikiPageName: o
							});
						case x.m.Revisions:
							return n.a.createElement(N.a, {
								key: o,
								isRecentRevisionsMode: !o,
								subredditName: t,
								wikiPageName: o
							});
						default:
							return o && a && d ? n.a.createElement(g.a, {
								comparisonRevisionId: Object(O.a)(d),
								revisionId: Object(O.a)(a),
								subredditName: t,
								wikiPageName: o
							}) : o && (a || c) ? n.a.createElement(f.a, {
								revisionId: a ? Object(O.a)(a) : void 0,
								subredditName: t,
								wikiPageName: o
							}) : o ? n.a.createElement(I, {
								wikiPageName: o,
								subredditName: t
							}) : null
					}
				}
			}
			var P = Object(y.t)()(R),
				W = s("./src/reddit/constants/componentSizes.ts"),
				D = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				L = s("./src/reddit/layout/page/Listing/index.tsx"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts");
			const M = Object(y.t)(),
				K = Object(r.b)(() => Object(o.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(B.e)(e, t.params.subredditName),
					layout: y.O,
					over18Pref: B.cb,
					subreddit: (e, {
						match: t
					}) => Object(A.A)(e, {
						subredditName: t.params.subredditName || x.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || x.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || x.i
				}), e => ({
					onPageViewed: () => e(Object(a.a)())
				}));
			class U extends n.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						subredditName: e,
						wikiPageName: t
					} = this.props;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(k.a, {
						title: t ? `${t} - ${e}` : `wiki - ${e}`
					}), this.renderContent())
				}
				renderContent() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: i
					} = this.props, r = !!s && s.isNSFW && !B.cb, o = Object(D.a)(t, r, i);
					if (o) return n.a.createElement(c.default, o);
					const a = `/r/${i}/`;
					return n.a.createElement(L.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: W.i,
						navBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : i,
							maxWidth: W.i,
							subredditOrProfile: s,
							url: a
						}), n.a.createElement(d.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: i,
							subredditUrl: a
						})),
						content: n.a.createElement(P, {
							subredditName: i
						}),
						sidebar: s && n.a.createElement(p, {
							subreddit: s,
							subredditName: i
						})
					})
				}
			}
			t.default = M(K(U))
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "p", (function() {
				return c
			})), s.d(t, "q", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "n", (function() {
				return b
			})), s.d(t, "i", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "l", (function() {
				return f
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "g", (function() {
				return O
			}));
			var i = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const r = [],
				o = (e, t) => {
					var s;
					const {
						subredditName: i
					} = t;
					if (null === (s = e.pages) || void 0 === s ? void 0 : s.subredditWiki) return e.pages.subredditWiki.directory[i.toLowerCase()]
				},
				a = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.subreddits.api.wiki.pending[s.toLowerCase()]
				},
				d = (e, t) => {
					var s;
					const i = Object(n.a)(t);
					if (null === (s = e.pages) || void 0 === s ? void 0 : s.subredditWiki) return e.pages.subredditWiki.pages[i]
				},
				c = (e, {
					listingKey: t
				}) => e.pages.subredditWiki.revisions.listings[t],
				l = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.pending[t],
				u = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.error[t],
				b = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				m = (e, {
					key: t
				}) => e.pages.subredditWiki.diff[t],
				p = (e, t) => {
					const s = Object(n.a)(t);
					return e.pages.subredditWiki.pageSettings[s]
				},
				k = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[s.toLowerCase()]
				},
				g = Object(i.a)((e, {
					subredditName: t
				}) => {
					const s = t.toLowerCase(),
						i = e.pages.subredditWiki.wikiContributors.listing,
						n = i.userOrder[s],
						o = i.models[s];
					return n ? n.map(e => o[e]) : r
				}),
				h = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[s.toLowerCase()]
				},
				f = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[s.toLowerCase()]
				},
				w = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[s.toLowerCase()]
				},
				x = Object(i.a)((e, {
					subredditName: t
				}) => {
					const s = t.toLowerCase(),
						i = e.pages.subredditWiki.wikiBannedContributors.listing,
						n = i.userOrder[s],
						o = i.models[s];
					return n ? n.map(e => o[e]) : r
				}),
				y = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[s.toLowerCase()]
				},
				O = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[s.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.dc6eef0a22a13c7bee67.js.map