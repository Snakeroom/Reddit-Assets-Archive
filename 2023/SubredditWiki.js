// https://www.redditstatic.com/desktop2x/SubredditWiki.32e09974104d4f28ef89.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var i = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, n, r) {
				for (var o = -1, a = s(i((t - e) / (n || 1)), 0), d = Array(a); a--;) d[r ? a : ++o] = e, e += n;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_baseRange.js"),
				n = i("./node_modules/lodash/_isIterateeCall.js"),
				r = i("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, i, o) {
					return o && "number" != typeof o && n(t, i, o) && (i = o = void 0), t = r(t), void 0 === i ? (i = t, t = 0) : i = r(i), o = void 0 === o ? t < i ? 1 : -1 : r(o), s(t, i, o, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "subredditWikiDataPending", (function() {
				return Fe
			})), i.d(t, "subredditWikiDataLoaded", (function() {
				return ze
			})), i.d(t, "subredditWikiDataFailed", (function() {
				return qe
			})), i.d(t, "fetchSubredditWikiData", (function() {
				return $e
			})), i.d(t, "handleWikiRedirects", (function() {
				return Ye
			})), i.d(t, "subredditWikDataRequested", (function() {
				return Qe
			})), i.d(t, "subredditWikiPageRequested", (function() {
				return Ze
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/lodash/isEmpty.js"),
				r = i.n(n),
				o = i("./node_modules/react-router-redux/es/index.js"),
				a = i("./src/lib/constants/index.ts"),
				d = i("./src/lib/makeActionCreator/index.ts"),
				c = i("./src/lib/makeListingKey/index.ts"),
				l = i("./src/config.ts"),
				u = i("./src/reddit/actions/platform.ts"),
				m = i("./src/reddit/helpers/path/index.ts");
			var b = i("./src/reddit/actions/ads/index.ts"),
				p = i("./src/reddit/actions/pages/subreddit/index.ts"),
				h = i("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				k = i("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				f = i("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				x = i("./src/lib/makeGqlRequest/index.ts"),
				v = i("./src/reddit/helpers/wiki/wikiRevision.ts"),
				w = i("./src/redditGQL/operations/WikiComparisonDiff.json");
			var O = i("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				N = i("./src/reddit/selectors/subredditWiki.ts");
			const _ = Object(d.a)("WIKI_DIFF_PENDING"),
				y = Object(d.a)("WIKI_DIFF_LOADED"),
				E = Object(d.a)("WIKI_DIFF_FAILED"),
				C = e => async (t, i, s) => {
					const n = i(),
						r = Object(O.a)(e),
						o = Object(N.i)(n, {
							key: r
						});
					if (o && (o.pending || !o.error)) return !0;
					const d = {
						key: r
					};
					t(_(d));
					const c = await ((e, t) => Object(x.a)(e, {
						...w,
						variables: {
							...t,
							comparisonRevisionId: Object(v.b)(t.comparisonRevisionId),
							revisionId: Object(v.b)(t.revisionId)
						}
					}))(s.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							i = t && t.page && t.page.revisionComparisonDiffHtml;
						i ? u = i : l = {
							type: a.J.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: a.J.UNKNOWN_ERROR
					};
					return t(l ? E({
						...d,
						error: l
					}) : y({
						...d,
						htmlDiff: u
					})), !l
				};
			var j = i("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				P = i("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				R = i("./src/reddit/constants/parameters.ts"),
				S = i("./src/reddit/constants/wiki.ts"),
				I = i("./src/reddit/endpoints/page/subredditWiki.ts"),
				T = i("./src/reddit/helpers/brandSafety/index.ts"),
				W = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				L = i("./src/reddit/models/Toast/index.ts"),
				D = i("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				M = i("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				B = i("./src/reddit/selectors/subreddit.ts"),
				H = i("./src/lib/initializeClient/installReducer.ts"),
				A = i("./node_modules/redux/es/redux.js");
			const U = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: i,
							htmlDiff: s
						} = t.payload;
						return {
							...e,
							[i]: {
								htmlDiff: s
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: i
						} = t.payload;
						return {
							...e,
							[i]: {
								...e[i],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: i,
							error: s
						} = t.payload;
						return {
							...e,
							[i]: {
								...e[i],
								pending: !1,
								error: s
							}
						}
					}
					default:
						return e
				}
			};
			const G = {};
			var F = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b:
							const i = t.payload,
								{
									subredditWiki: s,
									options: n
								} = i,
								r = s && s.directory;
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
				z = i("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const q = {};
			var V = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: i,
								pageKey: s
							} = t.payload, {
								page: n
							} = i;
							return s && n ? {
								...e,
								[s]: n
							} : e
						}
						case z.a: {
							const {
								pageKey: i,
								page: s
							} = t.payload;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				J = i("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const $ = {};
			var X = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J.c: {
							const {
								settings: i,
								pageKey: s
							} = t.payload;
							return i ? {
								...e,
								[s]: i
							} : e
						}
						case J.d: {
							const {
								isVisible: i,
								editPermissions: s,
								pageKey: n
							} = t.payload, r = e[n];
							return r ? {
								...e,
								[n]: {
									...r,
									isVisible: i,
									editPermissions: s
								}
							} : e
						}
						case J.b: {
							const {
								editorsInfo: i,
								afterToken: s,
								pageKey: n
							} = t.payload, r = e[n];
							if (!r) return e;
							const o = [...r.editorsInfo, ...i];
							return {
								...e,
								[n]: {
									...r,
									editorsInfo: o,
									afterToken: s
								}
							}
						}
						case J.a: {
							const {
								username: i,
								pageKey: s
							} = t.payload, n = e[s];
							if (!n) return e;
							const r = n.editorsInfo.filter(e => e.username !== i);
							return {
								...e,
								[s]: {
									...n,
									editorsInfo: r
								}
							}
						}
						default:
							return e
					}
				},
				Y = i("./src/lib/omitKey/index.ts");
			const Q = {};
			var Z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case z.b: {
						const {
							key: i,
							error: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					case z.d:
					case z.c: {
						const {
							key: i
						} = t.payload;
						return Object(Y.a)(e, i)
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
						case z.d:
						case z.b:
						case z.c: {
							const {
								key: i
							} = t.payload, s = t.type === z.d;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				ie = Object(A.c)({
					error: Z,
					pending: te
				}),
				se = i("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ne = {};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case z.c: {
						const {
							key: i,
							options: s,
							pageInfo: n,
							revisionsIds: r
						} = t.payload, o = e[i], a = s.after && o ? [...o.ids, ...r] : r;
						return {
							...e,
							[i]: {
								ids: a,
								pageInfo: n
							}
						}
					}
					case z.a: {
						const {
							page: {
								revision: i
							},
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: n
						} = t.payload, r = e[s];
						return r && i ? {
							...Object(Y.a)(e, n),
							[s]: {
								...r,
								ids: [i.id, ...r.ids]
							}
						} : e
					}
					case se.a: {
						const {
							pageRevisionsListingKey: i,
							recentRevisionsListingKey: s
						} = t.payload, n = {
							...e
						};
						return delete n[i], delete n[s], n
					}
					default:
						return e
				}
			};
			const oe = {};
			var ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: {
									page: i
								}
							} = t.payload, s = i && i.revision;
							return s && !e[s.id] ? {
								...e,
								[s.id]: s
							} : e
						}
						case z.c: {
							const {
								revisions: i
							} = t.payload;
							return {
								...e,
								...i
							}
						}
						case z.a: {
							const {
								page: i
							} = t.payload, s = i.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case z.e: {
							const {
								revisionId: i,
								isHidden: s
							} = t.payload, n = e[i];
							return n ? {
								...e,
								[i]: {
									...n,
									isHidden: s
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(A.c)({
					api: ie,
					listings: re,
					models: ae
				}),
				ce = i("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const le = {};
			var ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c:
					case ce.a: {
						const {
							subredditName: i,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					default:
						return e
				}
			};
			const me = {};
			var be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.b: {
						const {
							subredditName: i,
							error: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: i
						} = t.payload;
						return Object(Y.a)(e, i)
					}
					default:
						return e
				}
			};
			const pe = {};
			var he = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.d:
						case ce.c:
						case ce.b: {
							const {
								subredditName: i
							} = t.payload, s = t.type === ce.d;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				ge = Object(A.c)({
					error: be,
					pending: he
				});
			const ke = {};
			var fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: i,
								bannedContributors: s
							} = t.payload;
							return {
								...e,
								[i]: {
									...e[i],
									...s
								}
							}
						}
						case ce.e: {
							const {
								subredditName: i,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[i]: {
									...e[i],
									...s
								}
							}
						}
						case ce.f: {
							const {
								subredditName: i,
								userId: s
							} = t.payload, n = Object(Y.a)(e[i], s);
							return {
								...e,
								[i]: n
							}
						}
						default:
							return e
					}
				},
				xe = i("./node_modules/lodash/uniq.js"),
				ve = i.n(xe);
			const we = {};
			var Oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: ve()([...e[i] || [], ...s])
							}
						}
						case ce.e: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: ve()([...s, ...e[i] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: i,
								userId: s
							} = t.payload;
							return {
								...e,
								[i]: (e[i] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Ne = Object(A.c)({
					afterToken: ue,
					api: ge,
					models: fe,
					userOrder: Oe
				});
			const _e = {};
			var ye = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: i,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				Ee = Object(A.c)({
					listing: Ne,
					search: ye
				}),
				Ce = i("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const je = {};
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : je,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.c:
					case Ce.a: {
						const {
							subredditName: i,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					default:
						return e
				}
			};
			const Re = {};
			var Se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.b: {
						const {
							subredditName: i,
							error: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					case Ce.d:
					case Ce.c: {
						const {
							subredditName: i
						} = t.payload;
						return Object(Y.a)(e, i)
					}
					default:
						return e
				}
			};
			const Ie = {};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.d:
						case Ce.c:
						case Ce.b: {
							const {
								subredditName: i
							} = t.payload, s = t.type === Ce.d;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				We = Object(A.c)({
					error: Se,
					pending: Te
				});
			const Le = {};
			var De = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ce.c:
					case Ce.a: {
						const {
							subredditName: i,
							contributors: s
						} = t.payload;
						return {
							...e,
							[i]: {
								...e[i],
								...s
							}
						}
					}
					case Ce.e: {
						const {
							subredditName: i,
							contributor: s
						} = t.payload;
						return {
							...e,
							[i]: {
								...e[i],
								...s
							}
						}
					}
					case Ce.f: {
						const {
							subredditName: i,
							userId: s
						} = t.payload, n = Object(Y.a)(e[i], s);
						return {
							...e,
							newState: n
						}
					}
					default:
						return e
				}
			};
			const Me = {};
			var Be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Me,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.c:
						case Ce.a: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: ve()([...e[i] || [], ...s])
							}
						}
						case Ce.e: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: [...s, ...e[i] || []]
							}
						}
						case Ce.f: {
							const {
								subredditName: i,
								userId: s
							} = t.payload;
							return {
								...e,
								[i]: (e[i] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				He = Object(A.c)({
					afterToken: Pe,
					api: We,
					models: De,
					userOrder: Be
				});
			const Ae = {};
			var Ue = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ce.g: {
							const {
								subredditName: i,
								contributor: s
							} = t.payload;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				Ke = Object(A.c)({
					listing: He,
					search: Ue
				}),
				Ge = Object(A.c)({
					diff: K,
					directory: F,
					pages: V,
					pageSettings: X,
					revisions: de,
					wikiBannedContributors: Ee,
					wikiContributors: Ke
				});
			Object(H.a)({
				pages: {
					subredditWiki: Ge
				}
			});
			const Fe = Object(d.a)(h.c),
				ze = Object(d.a)(h.b),
				qe = Object(d.a)(h.a),
				Ve = (e, t, i, s) => {
					return i === S.j ? Je(e, t) : !!Object(N.c)(e, {
						subredditName: t,
						wikiPageName: i,
						revisionId: s
					})
				},
				Je = (e, t) => !!Object(N.b)(e, {
					subredditName: t
				}),
				$e = e => async (t, i, n) => {
					const {
						canShowFailToast: o,
						wikiPageName: d
					} = e, c = d === S.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(W.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(Fe({
						options: l,
						pageKey: u
					}));
					const m = await Object(I.a)(n.gqlContext(), l),
						b = m.body,
						p = m.ok ? b.data && b.data.subreddit && b.data.subreddit.wiki : null;
					return m.ok && p ? t(ze({
						options: l,
						pageKey: u,
						subredditWiki: p
					})) : (t(qe({
						options: l,
						pageKey: u,
						error: m.error || {
							type: a.J.NOT_FOUND_ERROR
						}
					})), o && t(Object(g.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: L.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: $e(e)
					}))), !(!m.ok || !r()(b.data.subreddit)) || !(!m.ok || !p)
				}, Xe = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (i, s) => {
						const n = s(),
							r = {
								sort: a.ab.HOT
							},
							o = Object(c.a)(e, r.sort),
							d = n.listings.postOrder.api.error[o],
							l = n.listings.postOrder.api.pending[o],
							u = !!n.listings.postOrder.ids[o];
						return !!(l || u && !d) || (await i(Object(p.subredditDataRequested)(o, e, r, t)), !s().listings.postOrder.api.error[o])
					}
				}, Ye = e => async (t, i) => {
					const {
						params: s,
						url: n
					} = e, {
						wikiPageName: r
					} = s, a = Object(M.a)(n, s);
					let d = !1;
					return S.l.includes(r || "") ? (await (async (e, t) => {
						const i = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = i
					})(e.url), d = !0) : n !== a && (await t(Object(o.c)(a)), d = !0), d
				}, Qe = function(e, t) {
					let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (n, r, o) => {
						const {
							subredditName: d = S.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[R.M], m = t[R.N], b = u ? Object(v.a)(u) : void 0, p = m ? Object(v.a)(m) : void 0, h = c === S.j, x = l === S.m.Revisions;
						let w = !1,
							O = !1;
						if (i) {
							const {
								pageName: t
							} = e;
							w = t === a.lc.WikiContributors, O = t === a.lc.WikiBanned
						}
						const N = r(),
							_ = (h || i) && !Je(N, d),
							y = !!c && !Ve(N, d, c, b),
							E = [];
						E.push(n(Xe(d))), (_ || y) && E.push(n($e({
							includeDirectory: _,
							includePageData: y,
							revisionId: b,
							subredditName: d,
							wikiPageName: c
						}))), l === S.m.Settings && c && E.push(n(Object(j.c)(d, c))), c && b && p && E.push(n(C({
							comparisonRevisionId: p,
							revisionId: b,
							subredditName: d,
							wikiPageName: c
						}))), x && E.push(n(Object(P.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), w && E.push(n(Object(f.e)(d))), O && E.push(n(Object(k.e)(d))), (await Promise.all(E)).every(Boolean) || n(Object(g.f)({
							kind: L.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: Qe(e, t, i)
						}))
					}
				}, Ze = e => async (t, i) => {
					if (await t(Ye(e))) return;
					const {
						params: s,
						queryParams: n
					} = e, r = s.subredditName || S.e;
					t(u.n({
						title: s.wikiPageName ? `${s.wikiPageName} - ${r}` : `wiki - ${r}`
					})), await t(Qe(s, n));
					const o = Object(B.C)(i(), {
							subredditName: r
						}),
						a = i();
					o && (a.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(b.b)(D.a.SUBREDDIT))
					}), t(Object(b.d)({
						isViewSafe: Object(T.a)([], [o])
					})))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return s
			})), i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return o
			})), i.d(t, "e", (function() {
				return a
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				n = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				r = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				a = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return x
			})), i.d(t, "b", (function() {
				return w
			})), i.d(t, "a", (function() {
				return N
			})), i.d(t, "c", (function() {
				return y
			})), i.d(t, "d", (function() {
				return C
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/toaster.ts"),
				a = i("./src/lib/makeApiRequest/index.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/lib/omitHeaders/index.ts"),
				l = i("./src/reddit/constants/headers.ts"),
				u = i("./src/redditGQL/operations/SubredditWikiBannedContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var b = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: i,
						pageInfo: s
					} = t, n = [], r = {};
					return i.forEach(e => {
						const {
							date: t,
							redditor: i,
							editWikiBanInfo: s
						} = e.node;
						i.id && i.name && i.icon && (r[i.id] = {
							id: i.id,
							username: i.name,
							iconUrl: i.icon.url,
							date: t,
							daysRemaining: s.daysRemaining,
							note: s.note
						}, n.push(i.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						bannedContributors: r,
						userOrder: n
					}
				},
				p = i("./src/reddit/models/Toast/index.ts"),
				h = i("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(r.a)(h.d),
				k = Object(r.a)(h.c),
				f = Object(r.a)(h.b),
				x = e => async (t, i, s) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						o = await m(s.gqlContext(), r);
					if (o.ok) {
						const i = o.body,
							s = i.data.subreddit && i.data.subreddit.wiki;
						if (s) {
							const i = b(s);
							t(k({
								...i,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const i = o.error || {
							type: n.J.UNKNOWN_ERROR
						};
						t(f({
							error: i,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, v = Object(r.a)(h.a), w = (e, t) => async (i, n, r) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await m(r.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki);
							i(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else i(Object(o.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e, t)
					}));
					return d.ok
				}, O = Object(r.a)(h.e), N = (e, t) => async (i, r, d) => {
					const u = await ((e, t, i) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.nb.POST,
						data: {
							api_type: "json",
							name: i.username,
							type: "wikibanned",
							duration: i.duration,
							ban_reason: i.banReason,
							note: i.note
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						i(Object(o.f)({
							kind: p.b.SuccessMod,
							text: s.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const n = {
								subredditName: e,
								username: t.username
							},
							r = (await m(d.gqlContext(), n)).body;
						if (r.data.subreddit.wiki) {
							const t = b(r.data.subreddit.wiki);
							i(O({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === n.J.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), i(Object(o.f)({
							kind: p.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, _ = Object(r.a)(h.f), y = (e, t) => async (i, r, d) => {
					const u = await ((e, t, i) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.nb.POST,
						data: {
							api_type: "json",
							id: i,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (i(Object(o.f)({
						kind: p.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), i(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : i(Object(o.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					})), u.ok
				}, E = Object(r.a)(h.g), C = (e, t) => async (i, n, r) => {
					const a = {
							subredditName: e,
							username: t
						},
						d = await m(r.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki),
								n = Object.keys(s.bannedContributors)[0];
							i(E({
								subredditName: e.toLowerCase(),
								bannedContributor: s.bannedContributors[n]
							}))
						}
					} else i(Object(o.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return s
			})), i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return o
			})), i.d(t, "e", (function() {
				return a
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_CONTRIBUTORS_PENDING",
				n = "WIKI_CONTRIBUTORS_LOADED",
				r = "WIKI_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_CONTRIBUTORS_LOADED",
				a = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return x
			})), i.d(t, "b", (function() {
				return w
			})), i.d(t, "a", (function() {
				return N
			})), i.d(t, "c", (function() {
				return y
			})), i.d(t, "d", (function() {
				return C
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/toaster.ts"),
				a = i("./src/lib/makeApiRequest/index.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/lib/omitHeaders/index.ts"),
				l = i("./src/reddit/constants/headers.ts"),
				u = i("./src/redditGQL/operations/SubredditWikiContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var b = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: i,
						pageInfo: s
					} = t, n = [], r = {};
					return i.forEach(e => {
						const {
							date: t,
							redditor: i
						} = e.node;
						i.id && i.name && i.icon && (r[i.id] = {
							id: i.id,
							username: i.name,
							iconUrl: i.icon.url,
							date: t
						}, n.push(i.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						contributors: r,
						userOrder: n
					}
				},
				p = i("./src/reddit/models/Toast/index.ts"),
				h = i("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(r.a)(h.d),
				k = Object(r.a)(h.c),
				f = Object(r.a)(h.b),
				x = e => async (t, i, s) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						o = await m(s.gqlContext(), r);
					if (o.ok) {
						const i = o.body,
							s = i.data.subreddit && i.data.subreddit.wiki;
						if (s) {
							const i = b(s);
							t(k({
								...i,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const i = o.error || {
							type: n.J.UNKNOWN_ERROR
						};
						t(f({
							error: i,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, v = Object(r.a)(h.a), w = (e, t) => async (i, n, r) => {
					const a = {
							subredditName: e,
							after: t
						},
						d = await m(r.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki);
							i(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else i(Object(o.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: w(e, t)
					}));
					return d.ok
				}, O = Object(r.a)(h.e), N = (e, t) => async (i, r, d) => {
					const u = await ((e, t, i) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.nb.POST,
						data: {
							api_type: "json",
							name: i,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						i(Object(o.f)({
							kind: p.b.SuccessMod,
							text: s.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const n = {
								subredditName: e,
								username: t
							},
							a = (await m(d.gqlContext(), n)).body;
						if (a.data.subreddit.wiki) {
							const t = b(a.data.subreddit.wiki),
								s = Object.keys(t.contributors)[0];
							!!r().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || i(O({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === n.J.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === n.J.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), i(Object(o.f)({
							kind: p.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, _ = Object(r.a)(h.f), y = (e, t) => async (i, r, d) => {
					const u = await ((e, t, i) => Object(a.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.nb.POST,
						data: {
							api_type: "json",
							id: i,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (i(Object(o.f)({
						kind: p.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), i(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : i(Object(o.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					})), u.ok
				}, E = Object(r.a)(h.g), C = (e, t) => async (i, n, r) => {
					const a = {
							subredditName: e,
							username: t
						},
						d = await m(r.gqlContext(), a);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki),
								n = Object.keys(s.contributors)[0];
							i(E({
								subredditName: e.toLowerCase(),
								contributor: s.contributors[n]
							}))
						}
					} else i(Object(o.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			const s = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return s
			})), i.d(t, "d", (function() {
				return n
			})), i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return o
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				n = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				r = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				o = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return O
			})), i.d(t, "b", (function() {
				return _
			})), i.d(t, "e", (function() {
				return E
			})), i.d(t, "a", (function() {
				return C
			})), i.d(t, "d", (function() {
				return P
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/subredditSettings.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				d = i("./src/lib/makeApiRequest/index.ts"),
				c = i("./src/lib/makeGqlRequest/index.ts"),
				l = i("./src/lib/omitHeaders/index.ts"),
				u = i("./src/reddit/constants/headers.ts"),
				m = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				b = i("./src/redditGQL/operations/SubredditWikiPageSettings.json");
			const p = (e, t) => Object(c.a)(e, {
					...b,
					variables: t
				}),
				h = {
					[m.a.Inherit]: "0",
					[m.a.Contributors]: "1",
					[m.a.Mods]: "2"
				};
			var g = e => {
					const {
						editPermissions: t,
						editorsInfo: i,
						isVisible: s
					} = e, {
						edges: n,
						pageInfo: r
					} = i, o = [];
					return n.forEach(e => {
						e.node.name && e.node.icon && o.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: o,
						isVisible: s,
						afterToken: r.hasNextPage ? r.endCursor : null
					}
				},
				k = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				f = i("./src/reddit/models/Toast/index.ts"),
				x = i("./src/reddit/selectors/subreddit.ts"),
				v = i("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const w = Object(r.a)(v.c),
				O = (e, t) => async (i, s, n) => {
					const r = {
							subredditName: e,
							wikiPageName: t
						},
						a = await p(n.gqlContext(), r),
						d = Object(x.I)(s(), e);
					if (Object(x.Z)(s(), d) || await i(Object(o.h)(e, d)), a.ok) {
						const e = a.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							i(w({
								pageKey: Object(k.a)(r),
								settings: e
							}))
						}
					}
					return a.ok
				}, N = Object(r.a)(v.b), _ = (e, t, i) => async (n, r, o) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: i
						},
						c = await p(o.gqlContext(), d);
					if (c.ok) {
						const i = c.body,
							s = i.data.subreddit && i.data.subreddit.wiki;
						if (s && s.page) {
							const i = g(s.page.settings),
								{
									editorsInfo: r,
									afterToken: o
								} = i;
							n(N({
								editorsInfo: r,
								afterToken: o,
								pageKey: Object(k.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else n(Object(a.f)({
						kind: f.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e, t, i)
					}));
					return c.ok
				}, y = Object(r.a)(v.d), E = e => {
					let {
						editPermissions: t,
						isVisible: i,
						wikiPageName: s,
						subredditName: r
					} = e;
					return async (e, o, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
							method: n.nb.POST,
							data: {
								permlevel: h[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: a.apiContext(),
							editPermissions: t,
							isVisible: i,
							wikiPageName: s,
							subredditName: r
						});
						return c.ok && e(y({
							editPermissions: t,
							isVisible: i,
							pageKey: Object(k.a)({
								wikiPageName: s,
								subredditName: r
							})
						})), c.ok
					}
				}, C = e => {
					let {
						subredditName: t,
						username: i,
						wikiPageName: r
					} = e;
					return async (e, o, c) => {
						const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
							method: n.nb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: c.apiContext(),
							wikiPageName: r,
							subredditName: t,
							username: i
						});
						if (m.ok) e(Object(a.f)({
							kind: f.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(O(t, r));
						else if (m.error) {
							const t = m.error.type;
							let i = s.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === n.J.NOT_FOUND_ERROR && (i = s.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(a.f)({
								kind: f.b.Error,
								text: i
							}))
						}
						return m.ok
					}
				}, j = Object(r.a)(v.a), P = e => {
					let {
						subredditName: t,
						username: i,
						wikiPageName: s
					} = e;
					return async (e, r, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
							method: n.nb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: o.apiContext(),
							wikiPageName: s,
							subredditName: t,
							username: i
						});
						return c.ok && (e(Object(a.f)({
							kind: f.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(j({
							username: i,
							pageKey: Object(k.a)({
								wikiPageName: s,
								subredditName: t
							})
						}))), c.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return s
			})), i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return o
			})), i.d(t, "e", (function() {
				return a
			}));
			const s = "WIKI_REVISIONS_PENDING",
				n = "WIKI_REVISIONS_LOADED",
				r = "WIKI_REVISIONS_FAILED",
				o = "WIKI_PAGE_REVERT_SUCCESS",
				a = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return y
			})), i.d(t, "a", (function() {
				return C
			})), i.d(t, "b", (function() {
				return P
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/toaster.ts"),
				a = i("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/redditGQL/operations/WikiRevisions.json");
			var l = i("./src/lib/makeApiRequest/index.ts"),
				u = i("./src/lib/omitHeaders/index.ts"),
				m = i("./src/reddit/constants/headers.ts"),
				b = i("./src/reddit/helpers/wiki/wikiRevision.ts");
			var p = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: n.nb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: n.nb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var g = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						i = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!i) throw new Error("Invalid response");
					return (e => {
						const t = {},
							i = [];
						return e.edges.forEach(e => {
							const s = e.node;
							t[s.id] = s, i.push(s.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: i
						}
					})(i)
				},
				k = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				f = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = i("./src/reddit/models/Toast/index.ts"),
				v = i("./src/reddit/selectors/subredditWiki.ts"),
				w = i("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const O = Object(r.a)(w.d),
				N = Object(r.a)(w.c),
				_ = Object(r.a)(w.b),
				y = e => async (t, i, r) => {
					const {
						canLoadMore: a = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: b
					} = e, p = i(), h = Object(k.a)(e), f = Object(v.p)(p, {
						listingKey: h
					});
					if (!a && !!f) return !0;
					const w = f && f.pageInfo.endCursor || void 0;
					if (!(!f || f.pageInfo.hasNextPage)) return !0;
					const E = {
							after: w,
							isRecent: u,
							subredditName: m,
							wikiPageName: b
						},
						C = {
							key: h,
							options: E
						};
					t(O(C));
					const j = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(r.gqlContext(), E);
					if (j.ok) {
						const e = j.body;
						if (e.data.subreddit) {
							const i = g(e.data);
							t(N({
								...C,
								...i
							}))
						}
					} else {
						const i = j.error || {
							type: n.J.UNKNOWN_ERROR
						};
						t(_({
							...C,
							error: i
						})), l && t(Object(o.f)({
							kind: x.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: y(e)
						}))
					}
					return j.ok
				}, E = Object(r.a)(w.a), C = e => async (t, i, n) => {
					const {
						subredditName: r,
						wikiPageName: d
					} = e, c = Object(f.a)({
						...e,
						revisionId: void 0
					}), l = Object(k.a)({
						...e,
						isRecent: !1
					}), u = Object(k.a)({
						...e,
						isRecent: !0
					}), m = Object(v.p)(i(), {
						listingKey: l
					}), b = m && m.ids[0];
					if ((await h(n.apiContext(), e)).ok) {
						const e = (await Object(a.a)(n.gqlContext(), {
								includePageData: !0,
								subredditName: r,
								wikiPageName: d
							})).body,
							i = e.data.subreddit && e.data.subreddit.wiki,
							m = i && i.page;
						if (!m || !m.revision) return;
						if (m.revision.id === b) return void t(Object(o.f)({
							kind: x.b.SuccessCommunityGreen,
							text: s.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(E({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: r,
							wikiPageName: d
						}))
					} else t(Object(o.f)({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e)
					}))
				}, j = Object(r.a)(w.e), P = e => async (t, i, n) => {
					const r = await p(n.apiContext(), e);
					if (r.ok) {
						const i = r.body.status;
						t(j({
							revisionId: e.revisionId,
							isHidden: i
						}))
					} else t(Object(o.f)({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, i) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/config.ts"),
				d = i("./src/reddit/actions/post.ts"),
				c = i("./src/reddit/controls/InternalLink/index.tsx"),
				l = i("./src/reddit/hooks/useClickSourceData.ts"),
				u = i("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				m = i("./src/reddit/components/AuthorLink/index.m.less"),
				b = i.n(m);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, i;
				const s = Object(o.a)(e.className, b.a.authorLinkStyles, {
						[b.a.isStrong]: e.isStrong,
						[b.a.isUnstyled]: e.isUnstyled
					}),
					m = Object(l.a)(),
					h = Object(r.d)(),
					g = Object(r.e)(u.b),
					k = Object(r.e)(u.c),
					f = t => {
						var i;
						if (null === (i = e.onClick) || void 0 === i || i.call(e, t), g || k) {
							const i = e.isExternal || e.forceOpenInNewTab ? `${a.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), h(Object(d.bb)(i))
						}
					};
				return e.isExternal || e.forceOpenInNewTab ? n.a.createElement("a", p({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: s,
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: f
				}), e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(o.a)(b.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(c.default, p({}, null !== (i = e.linkProps) && void 0 !== i ? i : {}, {
					className: s,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: m
					},
					onClick: f
				}), e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/constants/elementIds.ts"),
				d = i("./src/reddit/controls/Button/index.tsx"),
				c = i("./src/reddit/selectors/experiments/shredditParity.ts"),
				l = i("./src/reddit/components/BackToTop/index.m.less"),
				u = i.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: b
			} = i("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				if (e) {
					const e = document.getElementById(a.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: i,
					style: s
				} = e;
				const a = Object(r.e)(c.a);
				return n.a.createElement("div", {
					className: Object(o.a)(t, u.a.container),
					style: s
				}, n.a.createElement(d.a, m({
					className: u.a.button,
					onClick: () => p(i)
				}, a && {
					priority: d.c.Secondary,
					rplStyle: !0
				}), b._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var s = i("./src/higherOrderComponents/makeAsync.tsx"),
				n = i("./src/lib/loadWithRetries/index.ts");
			const r = "UserInfoTooltip";
			t.b = Object(s.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(n.a)(() => i.e("AuthorHovercard").then(i.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, i) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return f
			})), i.d(t, "a", (function() {
				return x
			})), i.d(t, "c", (function() {
				return v
			}));
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/classNames/index.ts"),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/actions/profile/index.ts"),
				c = i("./src/reddit/actions/tooltip.ts"),
				l = i("./src/reddit/selectors/tooltip.ts");
			const u = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(o.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				b = i("./src/reddit/actions/subreddit.ts");
			const p = Object(a.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var h = Object(o.b)(p, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var i;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(b.u)(t.authorOrSubredditName)), null === (i = t.onShow) || void 0 === i || i.call(t)
					}
				})),
				g = i("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				k = i.n(g);
			class f extends n.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = () => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.props.onClick || (this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300))
					}, this.onClick = e => {
						this.props.onlyLeaveOnClick && (this.isHovering ? clearTimeout(this.openHovercardTimeoutId) : clearTimeout(this.closeHovercardTimeoutId)), this.props.onClick && this.props.onClick(e)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return n.a.createElement("div", {
						className: Object(r.a)(k.a.HoverDiv, t),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const x = m(f),
				v = h(f)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, i) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			})), i.d(t, "b", (function() {
				return d
			}));
			var s = i("./src/lib/lessComponent.tsx"),
				n = i("./src/reddit/layout/row/Inline/index.tsx"),
				r = i("./src/reddit/components/Hovercards/helpers.m.less"),
				o = i.n(r);
			const a = s.a.wrapped(n.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: i,
						subredditName: s,
						tooltipIdPrefix: n,
						tooltipType: r
					} = e;
					let o = n;
					return i && (o = `${o}--${i}`), r && (o = `${o}--${r}`), t && (o = `${o}--${t}`), s && (o = `${o}--${s}`), o
				}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, i) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/higherOrderComponents/asTooltip.tsx"),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = i("./src/reddit/icons/fonts/Info/index.tsx"),
				c = i("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = i.n(c);
			const u = Object(r.a)(a.a),
				m = ["center", "bottom"],
				b = ["center", "top"];
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
						targetPosition: m,
						text: e.text,
						tooltipPosition: b
					}))
				}
			}
			t.a = p
		},
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, i) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				d = i("./src/reddit/actions/toaster.ts"),
				c = i("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = i.n(c),
				u = i("./src/reddit/constants/componentTestIds.ts"),
				m = i("./src/reddit/contexts/ApiContext.tsx"),
				b = i("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				p = i("./src/reddit/constants/tracking.ts"),
				h = i("./src/reddit/selectors/telemetry.ts");
			const g = "bottom_sheet";
			var k;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(k || (k = {}));
			var f = i("./src/reddit/hooks/useTracking.ts"),
				x = i("./src/reddit/icons/svgs/Close/index.tsx"),
				v = i("./src/reddit/models/Toast/index.ts"),
				w = i("./src/reddit/selectors/eligibleUXExperiences.ts"),
				O = i("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				N = i("./src/reddit/selectors/meta.ts"),
				_ = i("./src/redditGQL/types.ts");
			const {
				fbt: y
			} = i("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				const {
					gqlContext: t
				} = e, i = Object(r.d)(), c = Object(f.a)(), m = Object(r.e)(N.b), [w, O] = Object(s.useState)(!1), [E, C] = Object(s.useState)({}), [j, P] = Object(s.useState)({}), [R, S] = Object(s.useState)([]);
				let I = ["es"];
				const T = Object(s.useCallback)(async () => {
					const e = await Object(b.b)(t);
					e && (P(e.languages), S(e.preferences), O(!0))
				}, [t]);
				Object(s.useEffect)(() => {
					T()
				}, [T]);
				const W = e => {
						c("skip" === e ? (e => t => ({
							...Object(h.q)(t),
							source: g,
							action: p.c.CLICK,
							noun: k.SKIP,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(m) : (e => t => ({
							...Object(h.q)(t),
							source: g,
							action: p.c.CLICK,
							noun: k.LATER,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(m)), O(!1), i(Object(a.c)({
							experience: _.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					L = () => {
						const e = Object.keys(E).join();
						c(((e, t) => i => ({
							...Object(h.q)(i),
							source: g,
							action: p.c.CLICK,
							noun: k.ADD,
							actionInfo: {
								...Object(h.d)(i),
								reason: t,
								type: e
							}
						}))(m, e)), (async () => {
							var e;
							const s = E;
							R.map(e => s[e] = !0);
							const n = await Object(b.d)(t, s);
							(null === (e = null == n ? void 0 : n.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? i(Object(d.f)({
								kind: v.b.SuccessCommunity,
								text: y._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): i(Object(d.f)({
								kind: v.b.Error,
								text: y._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), O(!1), i(Object(a.c)({
							experience: _.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return I = I.filter(e => !R.includes(e)), w && 0 !== I.length ? (c((e => t => ({
					...Object(h.q)(t),
					source: g,
					action: p.c.VIEW,
					noun: p.b.SCREEN,
					actionInfo: {
						...Object(h.d)(t),
						type: e
					}
				}))(m)), i(Object(a.d)(_.db.LanguagePreferenceBottomSheet)), n.a.createElement("div", {
					className: l.a.PromptContainer
				}, n.a.createElement("div", {
					className: l.a.PromptClose
				}, n.a.createElement(x.a, {
					className: l.a.Close,
					onClick: () => W("skip"),
					"data-testid": u.e
				})), n.a.createElement("div", {
					className: l.a.PromptTitle
				}, y._("See content in more languages", null, {
					hk: "4uyzS1"
				})), n.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, y._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === I.length ? n.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = E;
						t[e] = !0, C(t), L()
					})(I[0]),
					"data-testid": I[0]
				}, y._("Add {language}", [y._param("language", j[I[0]])], {
					hk: "2emiHZ"
				})) : null, n.a.createElement("div", {
					className: Object(o.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => W("later")
				}, y._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(m.b)(e => {
				var t;
				const {
					gqlContext: i
				} = e, s = Object(r.f)().getState();
				return (null === (t = Object(r.e)(e => Object(w.a)(e, {
					experience: _.db.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(O.b)(s) ? n.a.createElement(E, {
					gqlContext: i
				}) : null
			})
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return O
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/lessComponent.tsx"),
				l = i("./src/reddit/actions/tooltip.ts"),
				u = i("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = i("./src/reddit/controls/Dropdown/index.tsx"),
				b = i("./src/reddit/controls/Dropdown/Row.tsx"),
				p = i("./src/reddit/icons/fonts/index.tsx"),
				h = i("./src/reddit/selectors/tooltip.ts"),
				g = i("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				k = i("./src/reddit/components/OverflowMenu/index.m.less"),
				f = i.n(k);
			const x = c.a.wrapped(m.a, "_Dropdown", f.a),
				v = Object(u.a)(x),
				w = c.a.button("MenuButton", f.a),
				O = c.a.wrapped(b.b, "DropdownRow", f.a),
				N = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: i
						} = t;
						return Object(h.b)(i)(e)
					}
				}),
				_ = Object(o.b)(N, (e, t) => {
					let {
						dropdownId: i
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: i
						}))
					}
				}),
				y = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = _(e => r.a.createElement(w, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": g.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(p.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), r.a.createElement(v, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/classNames/index.ts"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/react-router/esm/react-router.js"),
				d = i("./src/reddit/actions/post.ts"),
				c = i("./src/reddit/actions/snoovatarModal.ts"),
				l = i("./src/reddit/components/TrackingHelper/index.tsx"),
				u = i("./src/reddit/controls/Button/index.tsx"),
				m = i("./src/reddit/helpers/trackers/snoovatar.ts"),
				b = i("./src/reddit/icons/svgs/Shirt/index.tsx"),
				p = i("./src/reddit/models/Vote/index.ts"),
				h = i("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				g = i.n(h);
			const {
				fbt: k
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: i,
					isAvatarPost: a,
					post: h,
					share: f
				} = e;
				const x = Object(l.b)(),
					v = Object(o.d)(),
					w = h && h.id,
					O = h && h.voteState;
				let N = null;
				w || (N = t ? "user_hovercard" : "profile_overview");
				const _ = Object(n.useCallback)(() => x(Object(m.h)(t ? "user_hovercard" : "profile_overview", i)), [t, x, i]);
				return r.a.createElement(u.t, {
					onClick: () => {
						a ? (x(m.i), w && O === p.a.notVoted && v(Object(d.ib)(w))) : _();
						const e = a ? "postify" : "copy";
						v(Object(c.b)({
							clickSource: N,
							share: f,
							source: e
						}))
					},
					className: Object(s.a)(g.a.snoovatarButton, g.a.snoovatarExtraPadding, g.a.compactButtonLayout, {
						[g.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, r.a.createElement(b.a, {
					className: Object(s.a)({
						[g.a.shirtIcon]: !a,
						[g.a.avatarPostButtonShirtIcon]: a
					})
				}), k._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: g.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, i) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-autosize-textarea/lib/index.js"),
				o = i.n(r),
				a = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = i.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
					let {
						className: t,
						children: i,
						editorWrapperRef: s,
						initialHeight: r
					} = e;
					return n.a.createElement("div", {
						className: Object(a.a)(c.a.editorWrapper, t),
						style: r ? {
							height: r
						} : void 0,
						ref: s
					}, i)
				},
				m = e => {
					let {
						isFullHeight: t,
						textAreaRef: i,
						...s
					} = e;
					return n.a.createElement(o.a, l({
						className: Object(a.a)(c.a.textareaAutosize, {
							[c.a.mIsFullHeight]: t
						}),
						innerRef: i
					}, s))
				};
			class b extends n.a.Component {
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
					const {
						className: e,
						initialHeight: t,
						innerRef: i,
						onEditorResize: s,
						...r
					} = this.props, {
						isResized: o
					} = this.state;
					return n.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, n.a.createElement(m, l({}, r, {
						isFullHeight: !!o,
						textAreaRef: i
					})))
				}
			}
			t.a = b
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/lessComponent.tsx"),
				n = i("./src/reddit/components/SidebarContainer/index.m.less"),
				r = i.n(n);
			t.a = s.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, i) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = i("./src/lib/lessComponent.tsx"),
				c = i("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = i("./src/reddit/components/TrackingHelper/index.tsx"),
				u = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = i("./src/reddit/constants/experiments.ts"),
				b = i("./src/reddit/constants/location.ts"),
				p = i("./src/reddit/contexts/PageLayer/index.tsx"),
				h = i("./src/reddit/helpers/trackers/navigation.ts"),
				g = i("./src/reddit/selectors/experiments/countrySites.ts"),
				k = i("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = i("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				x = i("./src/reddit/selectors/meta.ts"),
				v = i("./src/redditGQL/types.ts"),
				w = i("./src/reddit/components/SidebarFooter/index.m.less"),
				O = i.n(w);
			const {
				fbt: N
			} = i("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.a("Link", O.a), y = Object(o.c)({
				countryCode: x.b,
				d2xPdpSideRailRecsVariant: k.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: k.b,
				isNavbarLikeMwebEnabled: f.a
			}), E = Object(r.b)(y), C = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), j = e => {
				let {
					countryCode: t,
					reredditContent: i
				} = e;
				return n.a.createElement("div", {
					className: O.a.GreyRereddit
				}, i, !!b.c[t] && n.a.createElement("div", {
					className: O.a.LinkContainer
				}, n.a.createElement("div", {
					className: O.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, N._("Impressum", null, {
					hk: "4cKXSI"
				})), t === v.i.De && n.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: O.a.NoneCapitalizeLink
				}, N._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), n.a.createElement("div", {
					className: O.a.Column
				}, n.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, N._("help", null, {
					hk: "4lyYaD"
				})), t === v.i.De && n.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, N._("Transparency report", null, {
					hk: "3CgBdG"
				})))), n.a.createElement("div", {
					className: O.a.LinkContainer
				}, n.a.createElement("div", {
					className: O.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, N._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, N._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: O.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, N._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, N._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), n.a.createElement("div", {
					className: O.a.Copyright
				}, N._("Reddit, Inc. © {year}. All rights reserved.", [N._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = C(E(Object(l.c)(e => {
				const t = Object(r.f)().getState(),
					i = Object(g.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.kd.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.kd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.kd.LargeImagePreview ? e.reredditButtons : [];
					return n.a.createElement(j, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return i.includes(t) || "en" === t ? n.a.createElement(_, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				return n.a.createElement(u.a, {
					className: O.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!b.c[e.countryCode] && n.a.createElement("div", {
					className: O.a.LinkContainer
				}, n.a.createElement("div", {
					className: O.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, N._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === v.i.De && n.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: O.a.NoneCapitalizeLink
				}, N._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), n.a.createElement("div", {
					className: O.a.Column
				}, n.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, N._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === v.i.De && n.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, N._("Transparency report", null, {
					hk: "3CgBdG"
				})))), n.a.createElement("div", {
					className: O.a.LinkContainer
				}, n.a.createElement("div", {
					className: O.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, N._("User Agreement", null, {
					hk: "2RA6JL"
				})), n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, N._("Privacy policy", null, {
					hk: "10K04G"
				}))), n.a.createElement("div", {
					className: O.a.Column
				}, n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, N._("Content policy", null, {
					hk: "1DyxZS"
				})), n.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, N._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && n.a.createElement("div", {
					className: O.a.LinkContainer
				}, n.a.createElement("div", {
					className: O.a.Column
				}, s("en"), s("fr"), s("it")), n.a.createElement("div", {
					className: O.a.Column
				}, s("de"), s("es"), s("pt"))), n.a.createElement("div", {
					className: O.a.Copyright
				}, N._("Reddit, Inc. © {year}. All rights reserved.", [N._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), n.a.createElement(c.a, null))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, i) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/classNames/index.ts"),
				n = i("./node_modules/lodash/throttle.js"),
				r = i.n(n),
				o = i("./node_modules/react/index.js"),
				a = i.n(o),
				d = i("./src/lib/constants/index.ts"),
				c = i("./src/reddit/components/BackToTop/index.tsx"),
				l = i("./src/reddit/components/SidebarFooter/index.tsx"),
				u = i("./src/reddit/constants/componentSizes.ts"),
				m = i("./src/reddit/contexts/PageLayer/index.tsx"),
				b = i("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				p = i.n(b),
				h = i("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = d.g[1] + 24,
				f = u.f + 8,
				x = f + 152 + 16,
				v = x + k + 8,
				w = h.a.div("Container", p.a),
				O = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: i,
						...s
					} = e;
					return a.a.createElement(c.a, g({
						className: t,
						isOverlay: i,
						style: {
							top: `calc(100vh - ${i?f:8}px)`
						}
					}, s))
				}, "BackToTop", p.a),
				N = e => {
					let {
						children: t,
						className: i,
						isFakeOverlay: n,
						isSticky: r,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(i, {
							[p.a.BottomStickyStyles]: o,
							[p.a.StickyStyles]: !o && r && !n,
							[p.a.StickyStylesFakeOverlay]: !o && !!n
						})
					}, t)
				};
			class _ extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > x
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
					}, d.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
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
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: i,
							children: s,
							className: n,
							hideFooter: r,
							pageLayer: o,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return a.a.createElement(w, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(N, {
						isFakeOverlay: i,
						isSticky: u,
						shouldStickToBottom: m
					}, t, s, d, !r && a.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && a.a.createElement(O, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const y = Object(m.v)();
			t.a = y(_)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = i("./src/reddit/components/SEOTitle/index.tsx"),
				l = i("./src/reddit/components/TrackingHelper/index.tsx"),
				u = i("./src/reddit/contexts/PageLayer/index.tsx"),
				m = i("./src/reddit/controls/Button/index.tsx"),
				b = i("./src/reddit/helpers/trackers/widgets.ts"),
				p = i("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = i("./src/reddit/selectors/experiments/topPosts.ts"),
				g = i("./src/reddit/selectors/structuredStyles.ts"),
				k = i("./src/reddit/selectors/user.ts"),
				f = i("./src/reddit/models/Theme/index.ts"),
				x = i("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = v(e);
					return Object(f.e)(t)
				},
				N = e => {
					const t = w(e);
					return Object(f.e)(t)
				};
			var _ = i("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				y = i.n(_);
			const {
				fbt: E
			} = i("./node_modules/fbt/lib/FbtPublic.js"), C = Object(u.v)(), j = Object(r.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const i = Object(u.o)(e, t) || void 0,
						s = t.redditStyle || Object(g.l)(e, {
							subredditId: i
						}),
						n = Object(k.fb)(e);
					return s || n
				},
				nigtmode: k.fb,
				subredditId: u.o,
				topPostVariant: h.d
			}));
			class P extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(b.b)(e, t)), this.setState({
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.color = e.fill = N(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: i,
						forceRedditStyle: s,
						headerButton: r,
						id: o,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: p
					} = this.props, h = i ? y.a.widgetContentOnly : y.a.widgetContent, g = !s && this.props.styles, k = g ? this.getWidgetBackgroundStyles() : {}, f = g ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, y.a.widgetBackground, {
							[y.a.redditStyle]: s,
							[y.a.clickable]: !!d,
							[y.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: k
					}, u && n.a.createElement("div", {
						className: Object(a.a)(y.a.widgetHeader, {
							[y.a.clickable]: !!l
						}),
						id: o,
						style: {
							...f,
							...this.props.headerStyles
						},
						onClick: l
					}, n.a.createElement("div", {
						className: Object(a.a)(y.a.widgetTitle, b)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), r), n.a.createElement("div", {
						className: Object(a.a)(h, {
							[y.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? p : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: y.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, E._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = C(j(Object(d.a)(Object(l.c)(P))))
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, i) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, i) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.m.less": function(e, t, i) {
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
				active: "Jkkj0xIEOc5nizoeloGlN",
				cellCheckbox: "_2jHe0kuo-s2zjj9AFEoKIR",
				checkbox: "_2z1fkA5gXEWTIixh5mc5Mu",
				loadingRow: "_1twsCmeo_Rv87GnJLkvjOG",
				loadingShimmer: "_2OTytxS0mfmxAGAw4qKI6K",
				mShowActionButtons: "_3ZOwuRsjzzqragH4DDY3Au"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return Z
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/actions/modal.ts"),
				l = i("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				u = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = i("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				b = i("./src/reddit/components/TrackingHelper/index.tsx"),
				p = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				h = i("./src/reddit/controls/Button/index.tsx"),
				g = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				k = i("./src/lib/addQueryParams/index.ts"),
				f = i("./src/reddit/constants/parameters.ts"),
				x = i("./src/reddit/helpers/wiki/wikiRevision.ts");

			function v(e, t) {
				const {
					revision: i,
					revisionToCompare: s
				} = t;
				if (!i && !s) return e;
				const n = {};
				i && (n[f.M] = Object(x.b)(i)), s && (n[f.N] = Object(x.b)(s));
				const r = e.endsWith("/") ? e : `${e}/`;
				return Object(k.a)(r, n)
			}
			var w = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				O = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				N = i("./src/reddit/selectors/activeModalId.ts"),
				_ = i("./src/reddit/selectors/moderatorPermissions.ts"),
				y = i("./src/reddit/selectors/subreddit.ts"),
				E = i("./src/reddit/selectors/subredditWiki.ts"),
				C = i("./node_modules/lodash/times.js"),
				j = i.n(C),
				P = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				R = i("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				S = i.n(R);
			var I = () => {
					const e = n.createElement("div", {
						className: Object(d.a)(S.a.loadingShimmer, Object(P.b)({
							isLoading: !0
						}))
					});
					return n.createElement("div", null, j()(4, t => n.createElement("div", {
						key: t,
						className: S.a.loadingRow
					}, e)))
				},
				T = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			class W extends r.a.Component {
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
					return r.a.createElement(T.a, {
						onChange: this.handleChange
					}, r.a.createElement("div", null))
				}
			}
			var L = i("./node_modules/lodash/noop.js"),
				D = i.n(L),
				M = i("./src/reddit/components/AuthorLink/index.tsx"),
				B = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				H = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				A = i("./src/reddit/controls/Checkbox/index.tsx"),
				U = i("./src/reddit/controls/InternalLink/index.tsx"),
				K = i("./node_modules/lodash/forEach.js"),
				G = i.n(K),
				F = i("./src/lib/fastdom/index.ts");

			function z(e) {
				F.a.read(() => {
					G()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								i = e.parentElement,
								s = "true" === i.dataset.textOverflow;
							t !== s && F.a.write(() => {
								i.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const q = Object(a.c)({
				revision: E.n
			});
			class V extends r.a.Component {
				constructor() {
					super(...arguments), this.reasonElementRef = r.a.createRef(), this.state = {}, this.onToggleHiddenClick = async () => {
						const {
							revision: e,
							revisionId: t,
							subredditName: i
						} = this.props, s = e.isHidden;
						this.props.sendEvent(Object(g.l)(s)), this.setState({
							isHideRequestPending: !0
						}), await this.props.toggleIsHidden({
							revisionId: t,
							subredditName: i,
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
						this.props.sendEvent(g.q)
					}
				}
				componentDidMount() {
					this.reasonElementRef.current && z([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: i,
						isRecentRevisionMode: n,
						revision: o,
						subredditName: a
					} = this.props, c = o.page.name, l = o.isHidden, {
						expanded: u
					} = this.state, m = o.authorInfo && o.authorInfo.name, b = Object(O.a)({
						subredditName: a,
						wikiPageName: c
					}, i), p = v(b, {
						revision: o.id
					}), g = !n && e, k = c.split("/").slice(-1)[0];
					return r.a.createElement("tr", {
						className: Object(d.a)(S.a.row, l ? S.a.mHidden : null)
					}, !n && r.a.createElement("td", {
						className: S.a.cellCheckbox
					}, r.a.createElement(A.a, {
						className: S.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), r.a.createElement("td", {
						className: S.a.cellTime
					}, Object(H.b)(o)), n && r.a.createElement("td", {
						className: S.a.cellPage
					}, r.a.createElement(U.default, {
						className: S.a.wikiPageLink,
						title: `/${c}`,
						to: b
					}, k)), r.a.createElement("td", {
						className: S.a.cellUser
					}, m && r.a.createElement(B.a, {
						sendHoverCardEvent: D.a,
						tooltipId: `revision-${o.id}`,
						user: m
					}, r.a.createElement(M.a, {
						author: m,
						className: S.a.usernameLink
					}, m))), r.a.createElement("td", {
						className: S.a.cellReason
					}, r.a.createElement("div", {
						className: Object(d.a)(S.a.reasonTextWrapper, u ? S.a.mExpanded : null)
					}, r.a.createElement("div", {
						ref: this.reasonElementRef,
						className: S.a.reasonText
					}, o.reason), !u && r.a.createElement(h.i, {
						className: S.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, s.fbt._("more", null, {
						hk: "2IGYPS"
					})))), r.a.createElement("td", null, r.a.createElement("div", {
						className: S.a.buttons
					}, r.a.createElement(h.s, {
						className: S.a.viewButton,
						onClick: this.onViewClick,
						to: p
					}, s.fbt._("View", null, {
						hk: "4imNnh"
					})), g && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.r, {
						className: S.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, l ? s.fbt._("Show", null, {
						hk: "3YKyhU"
					}) : s.fbt._("Hide", null, {
						hk: "30nwHP"
					})), r.a.createElement(h.r, {
						className: S.a.revertButton,
						onClick: this.onRevertClick
					}, s.fbt._("Revert", null, {
						hk: "5mbFS"
					}))))))
				}
			}
			var J = Object(o.b)(q, e => ({
				toggleIsHidden: t => e(Object(l.b)(t))
			}))(V);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const X = Object(a.c)({
				hasError: E.o,
				hasWikiModPerms: (e, t) => {
					const i = Object(y.C)(e, t);
					return !!i && Object(_.j)(e, {
						subredditId: i.id
					})
				},
				isPending: E.q,
				isRevertConfirmationModalOpen: Object(N.b)("wiki-revert-confirmation"),
				listingInfo: E.p
			});
			class Y extends r.a.Component {
				constructor() {
					super(...arguments), this.containerRef = r.a.createRef(), this.state = {
						selectedRevisions: []
					}, this.onRevertConfirmed = () => {
						const {
							subredditName: e
						} = this.props, {
							revertRevision: t
						} = this.state;
						t && (this.props.sendEvent(g.k), this.props.onRevertToRevision({
							revisionId: t.id,
							subredditName: e,
							wikiPageName: t.page.name
						}))
					}, this.onCompareClick = () => {
						this.props.sendEvent(g.d)
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
						} = this.props, i = t && t.ids || [];
						this.setState(t => {
							let s = t.selectedRevisions;
							return 2 === (s = s.includes(e) ? s.filter(t => t !== e) : s.length < 2 ? [...s, e] : [e]).length && i.indexOf(s[0]) < i.indexOf(s[1]) && s.reverse(), {
								selectedRevisions: s
							}
						})
					}, this.renderRowItem = (e, t) => {
						const {
							hasWikiModPerms: i,
							subredditName: s
						} = this.props, {
							selectedRevisions: n
						} = this.state;
						return r.a.createElement(J, {
							key: e,
							hasWikiModPerms: i,
							isCheckboxSelected: n.includes(e),
							isModHub: this.props.isModHub,
							isRecentRevisionMode: this.props.isRecentRevisionsMode,
							onCheckboxToggle: this.onCheckboxToggle,
							onRevertClick: this.onRevertButtonClick,
							revisionId: e,
							sendEvent: this.props.sendEvent,
							subredditName: s
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
						isModHub: i,
						isPending: n,
						isRecentRevisionsMode: o,
						isRevertConfirmationModalOpen: a,
						listingInfo: c,
						subredditName: l,
						wikiPageName: b
					} = this.props, {
						selectedRevisions: g
					} = this.state, k = c && c.ids || [], f = c && c.pageInfo.hasNextPage;
					let x = "",
						w = "#";
					b && (x = Object(O.a)({
						subredditName: l,
						wikiPageName: b
					}, i), 2 === g.length && (w = v(x, {
						revision: g[0],
						revisionToCompare: g[1]
					})));
					const N = !o && t;
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Object(d.a)(S.a.container, {
							[S.a.mModHub]: i,
							[S.a.mShowActionButtons]: N
						})
					}, r.a.createElement(p.a, {
						buttonText: o ? void 0 : s.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: x,
						className: S.a.pageTitle,
						title: r.a.createElement("span", {
							className: S.a.pageTitleText
						}, o ? s.fbt._("Recent revisions", null, {
							hk: "VsZfq"
						}) : s.fbt._("Page history for {pageName}", [s.fbt._param("pageName", `/${b}`)], {
							hk: "y2LqH"
						}))
					}), r.a.createElement("div", {
						className: S.a.content
					}, !o && r.a.createElement("div", {
						className: S.a.compareBar
					}, r.a.createElement(h.s, {
						className: S.a.compareButton,
						disabled: g.length < 2,
						onClick: this.onCompareClick,
						to: w
					}, s.fbt._("Compare", null, {
						hk: "3grtKa"
					})), s.fbt._("{selectedCnt}/2 selected to compare", [s.fbt._param("selectedCnt", g.length.toString())], {
						hk: "1PfMOM"
					})), r.a.createElement("table", {
						className: S.a.table
					}, r.a.createElement("thead", null, r.a.createElement("tr", null, !o && r.a.createElement("th", {
						className: S.a.colHeaderCheckbox
					}), r.a.createElement("th", {
						className: S.a.colHeaderTime
					}, s.fbt._("time", null, {
						hk: "231ZTq"
					})), o && r.a.createElement("th", {
						className: S.a.colHeaderPage
					}, s.fbt._("Wiki page", null, {
						hk: "2CzzvU"
					})), r.a.createElement("th", {
						className: S.a.colHeaderUser
					}, s.fbt._("Username", null, {
						hk: "3dJxeH"
					})), r.a.createElement("th", {
						className: S.a.colHeaderReason
					}, s.fbt._("Revision Reason", null, {
						hk: "3Z0slk"
					})), r.a.createElement("th", {
						className: S.a.colHeaderActions
					}, N && r.a.createElement(r.a.Fragment, null, s.fbt._("Actions", null, {
						hk: "1V50p1"
					}), r.a.createElement(m.a, null, s.fbt._("View: View current version", null, {
						hk: "1Wp1Qa"
					}), r.a.createElement("br", null), s.fbt._("Hide: Hide revision from page history", null, {
						hk: "1G574c"
					}), r.a.createElement("br", null), s.fbt._("Revert: Revert page to an older version", null, {
						hk: "2IMILE"
					})))))), r.a.createElement("tbody", {
						className: S.a.tableBody
					}, k.map(this.renderRowItem))), n && r.a.createElement(I, null), f && r.a.createElement(W, {
						hasError: e,
						isLoading: n,
						onLoadMore: this.onLoadMore
					})), a && r.a.createElement(u.a, {
						actionText: s.fbt._("Revert", null, {
							hk: "qQOSa"
						}),
						headerText: s.fbt._("Revert wiki page", null, {
							hk: "2ZNWTL"
						}),
						modalText: s.fbt._("Are you sure you wish to change this wiki page to a previously saved version?", null, {
							hk: "4yhcAG"
						}),
						onConfirm: this.onRevertConfirmed,
						toggleModal: this.props.toggleRevetConfirmationModal,
						withOverlay: !0
					}))
				}
			}
			const Q = Object(o.b)(X, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(c.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(l.a)(t)),
				onLoadMoreRevisions: () => e(Object(l.c)({
					...t,
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				}))
			}))(Object(b.c)(Y));

			function Z(e) {
				const t = !!e.isRecentRevisionsMode,
					i = Object(w.a)({
						...e,
						isRecent: t
					});
				return r.a.createElement(Q, $({
					key: i,
					listingKey: i
				}, e))
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less": function(e, t, i) {
			e.exports = {
				container: "kuIrk7ySqHYuv5Gt8MVk7",
				automodContent: "_1FI4zcF0t1ECf8oc18uKd0",
				automodInfoBanner: "_2cLJCh1PnBUPaTO1HveGgo",
				wikiHtmlContent: "_1r4JJnDJUTKPWFmsi-Is_u",
				revisionInfo: "_3n6jRoJzvGVG7cvZDrvW1G"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2knUS3S97xMYycQVxOi0Yd",
				link: "_2uut3Ijozr0WkSh-oLVTkt"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3kIjxjzGVq5UfR6Bjiovd",
				hideIcon: "_2G1CaoG-VN3IjmyXMjpIfp"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/TrackingHelper/index.tsx"),
				l = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				u = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				m = i("./src/reddit/constants/componentSizes.ts"),
				b = i("./src/reddit/constants/wiki.ts"),
				p = i("./src/reddit/contexts/PageLayer/index.tsx"),
				h = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				k = i("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				x = i("./src/reddit/selectors/subredditWiki.ts"),
				v = i("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				O = i("./src/telemetry/models/Outbound.ts"),
				N = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = i("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				y = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				E = i("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				C = i.n(E);
			const j = e => {
				const {
					item: t,
					subredditName: i,
					isModHub: s
				} = e, r = t.isPagePresent && Object(y.a)({
					subredditName: i,
					wikiPageName: t.path
				}, s);
				return n.createElement("li", null, r ? n.createElement(N.a, {
					className: C.a.link,
					to: r
				}, t.name) : n.createElement("span", null, t.name), !!t.children.length && n.createElement("ul", null, t.children.map(e => n.createElement(j, {
					isModHub: s,
					item: e,
					key: e.path,
					subredditName: i
				}))))
			};
			var P = e => {
					const {
						isModHub: t,
						subredditName: i,
						wikiDirectory: r
					} = e, o = Object(_.a)(r.pageTree || []);
					return n.createElement("div", {
						className: C.a.container
					}, n.createElement("h1", null, s.fbt._("Viewing pages for {subredditName}", [s.fbt._param("subredditName", i)], {
						hk: "1f0dHX"
					})), n.createElement("h2", null, s.fbt._("Below is a list of pages in this wiki visible to you in this subreddit.", null, {
						hk: "3ywypD"
					})), n.createElement("ul", null, o.map(e => n.createElement(j, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: i
					}))))
				},
				R = i("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				S = i.n(R);
			const {
				fbt: I
			} = i("./node_modules/fbt/lib/FbtPublic.js");

			function T(e) {
				const {
					className: t,
					isModHub: i,
					showRevisionInfo: s,
					subredditName: n,
					wikiDirectory: o,
					wikiPage: a,
					wikiPageName: c
				} = e;
				let l = null;
				return o && c === b.j ? l = r.a.createElement(P, {
					isModHub: i,
					subredditName: n,
					wikiDirectory: o
				}) : a && a.content && c === b.h ? l = r.a.createElement("div", {
					className: S.a.automodContent
				}, a.content.markdown) : a && a.content && (l = r.a.createElement(v.a, {
					className: S.a.wikiHtmlContent,
					html: a.content.html,
					sourceElement: O.SourceElement.Wiki
				})), r.a.createElement("div", {
					className: Object(d.a)(t, S.a.container)
				}, c === b.h && r.a.createElement("div", {
					className: S.a.automodInfoBanner
				}, I._("This page is used to configure AutoModerator for the subreddit, please see the {=full documentation} for information", [I._param("=full documentation", r.a.createElement("a", {
					href: "/wiki/automoderator/full-documentation"
				}, I._("full documentation", null, {
					hk: "1iIGFO"
				})))], {
					hk: "C2ew1"
				})), l, s && a && a.revision && r.a.createElement("div", {
					className: S.a.revisionInfo
				}, r.a.createElement(w.a, {
					showTimeAgo: !0,
					isLastRevision: !0,
					revision: a.revision
				})))
			}
			var W = i("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				L = i.n(W);
			const D = Object(o.b)(() => Object(a.c)({
					pending: x.a,
					wikiDirectory: x.b,
					wikiPage: x.c
				})),
				M = Object(p.v)();
			class B extends n.Component {
				constructor() {
					super(...arguments), this.onEditButtonClick = () => {
						this.props.sendEvent(Object(h.f)())
					}, this.isListingPage = () => this.props.wikiPageName === b.j, this.reloadPage = () => {
						window.location.reload()
					}
				}
				componentDidMount() {
					this.scrollToHash()
				}
				componentDidUpdate(e) {
					const t = this.props.pageLayer !== e.pageLayer,
						i = this.props.wikiPage !== e.wikiPage;
					(t || i) && this.scrollToHash()
				}
				scrollToHash() {
					const e = window.location.hash.slice(1),
						t = e ? document.getElementById(e) : null;
					if (t) {
						let e = m.f + 10;
						this.props.isModHub && (e += m.i + m.j);
						const i = window.scrollY + t.getBoundingClientRect().top - e;
						window.scrollTo(0, i)
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
						showRevisionInfo: i,
						subredditName: r,
						wikiDirectory: o,
						wikiPage: a,
						wikiPageName: d
					} = this.props, c = this.getWikiPageStatus(), m = d === b.i, p = this.props.isModHub ? `/r/${this.props.subredditName}/about/wiki` : `/r/${this.props.subredditName}/wiki`, h = `${p}/index`, x = m ? void 0 : s.fbt._("Wiki home", null, {
						hk: "1E1oVk"
					});
					if (t || !c) return n.createElement(u.a, {
						showTitle: !0
					});
					if (c === f.b.Unknown || c === f.b.PageNotCreated) {
						if (Object(g.b)(d)) return n.createElement(l.a, {
							buttonLink: h,
							buttonText: x,
							description: s.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "VYLjZ"
							}),
							title: s.fbt._('"{pageName}" does not exist', [s.fbt._param("pageName", d)], {
								hk: "33IIrL"
							})
						})
					}
					switch (c) {
						case f.b.Valid:
							return !(!a || !a.content || a.content.markdown) ? n.createElement(l.a, {
								buttonLink: `${p}/edit/${d}`,
								buttonText: s.fbt._("Edit page", null, {
									hk: "2I8ztD"
								}),
								description: s.fbt._("Edit it to add some content", null, {
									hk: "13lGpZ"
								}),
								title: s.fbt._("This page is empty", null, {
									hk: "r0I6D"
								})
							}) : n.createElement(T, {
								isModHub: e,
								showRevisionInfo: i,
								subredditName: r,
								wikiDirectory: o,
								wikiPage: a,
								wikiPageName: d
							});
						case f.b.PageNotCreated:
							return n.createElement(l.a, {
								buttonLink: `${p}/create/${d}`,
								buttonText: s.fbt._("Create page", null, {
									hk: "2JH7OE"
								}),
								description: s.fbt._("Create a wiki page from this URL", null, {
									hk: "NY4dz"
								}),
								title: s.fbt._('"{pageName}" does not exist', [s.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case f.b.Unknown:
							return n.createElement(l.a, {
								buttonText: s.fbt._("Reload page", null, {
									hk: "1L70ii"
								}),
								onButtonClick: this.reloadPage,
								title: s.fbt._("An unknown error occurred", null, {
									hk: "3BhfEB"
								})
							});
						case f.b.RestrictedPage:
							return n.createElement(l.a, {
								buttonLink: h,
								buttonText: x,
								description: s.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
									hk: "VYLjZ"
								}),
								title: s.fbt._('"{pageName}" does not exist', [s.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case f.b.MayNotView:
							return n.createElement(l.a, {
								buttonLink: h,
								buttonText: x,
								description: s.fbt._("The mods of this community have disabled this wiki page", null, {
									hk: "y3LOU"
								}),
								icon: n.createElement(k.a, {
									className: L.a.hideIcon
								}),
								title: s.fbt._("This page has been disabled", null, {
									hk: "1v13Nq"
								})
							});
						case f.b.WikiDisabled:
							return n.createElement(l.a, {
								buttonLink: `/r/${r}/`,
								buttonText: s.fbt._("Continue to r/{subredditName}", [s.fbt._param("subredditName", r)], {
									hk: "1oJQF7"
								}),
								description: s.fbt._("The mods of this community have disabled their wiki", null, {
									hk: "3qHJ8v"
								}),
								icon: n.createElement(k.a, {
									className: L.a.hideIcon
								}),
								title: s.fbt._("This wiki has been disabled", null, {
									hk: "3tfoag"
								})
							});
						case f.b.PageNotFound:
							return n.createElement(l.a, {
								buttonLink: h,
								buttonText: x,
								title: s.fbt._('"{pageName}" does not exist', [s.fbt._param("pageName", d)], {
									hk: "4o8Kt8"
								})
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
						className: Object(d.a)(e, L.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = M(D(Object(c.c)(B)))
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Wiki/WikiPageDiff/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = i("./src/reddit/constants/wiki.ts"),
				l = i("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				u = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				m = i("./src/reddit/selectors/subredditWiki.ts"),
				b = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				p = i("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				h = i.n(p);
			var g = () => n.createElement("div", {
				className: h.a.loadingPlaceholder
			}, n.createElement("div", {
				className: h.a.loadingSection
			}, n.createElement(b.a, {
				paragraphsCount: 1
			})), n.createElement("div", {
				className: h.a.loadingSection
			}, n.createElement(b.a, {
				paragraphsCount: 1
			})));
			const k = Object(o.c)({
					diffInfo: (e, t) => {
						const i = Object(l.a)(t);
						return Object(m.i)(e, {
							key: i
						})
					}
				}),
				f = Object(r.b)(k);
			class x extends n.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: i,
						diffInfo: r,
						wikiPageName: o
					} = this.props;
					let l = null;
					l = !r || r.pending ? n.createElement(g, null) : r.error ? s.fbt._("Could not load comparison diff", null, {
						hk: "4mrAev"
					}) : n.createElement("div", {
						className: h.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: r.htmlDiff || ""
						}
					});
					const m = Object(u.a)({
						subredditName: i,
						wikiPageName: o,
						wikiSubRoute: c.m.Revisions
					}, t);
					return n.createElement("div", {
						className: Object(a.a)(e, h.a.container, t ? h.a.mModHub : null)
					}, n.createElement(d.a, {
						buttonText: s.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: m,
						className: h.a.pageTitle,
						title: s.fbt._("Comparing revisions for /{pageName}", [s.fbt._param("pageName", o)], {
							hk: "DGV1Y"
						})
					}), n.createElement("div", {
						className: h.a.content
					}, l))
				}
			}
			t.a = f(x)
		},
		"./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Wiki/WikiPageEditor/index.m.less": function(e, t, i) {
			e.exports = {
				topBar: "an_IeG33-UK9pts_JjqgQ",
				content: "_38SkvHzrhjQ7cSy7R0Lar1",
				resizableTextarea: "jtUB91J6tX7NTsovNabut",
				modHubTopBarExp: "BGubyqJMSlwQ45Xw5I-AT"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/actions/modal.ts"),
				l = i("./node_modules/react-router-redux/es/index.js"),
				u = i("./src/lib/makeActionCreator/index.ts"),
				m = i("./src/reddit/actions/pages/subredditWiki/index.ts"),
				b = i("./src/reddit/actions/toaster.ts"),
				p = i("./src/reddit/constants/wiki.ts"),
				h = i("./src/lib/constants/index.ts"),
				g = i("./src/lib/makeApiRequest/index.ts"),
				k = i("./src/lib/omitHeaders/index.ts"),
				f = i("./src/reddit/constants/headers.ts"),
				x = i("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var v = e => Object(g.a)(Object(k.a)(e.context, [f.a]), {
					endpoint: Object(x.a)(`${e.context.apiUrl}/r/${e.subredditName}/api/wiki/edit`),
					method: h.nb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				w = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				O = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				N = i("./src/reddit/models/Toast/index.ts"),
				_ = i("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				y = i("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const E = Object(u.a)(y.a);
			var C = i("./src/reddit/components/BlockNavigation/index.tsx"),
				j = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				P = i("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				R = i("./src/reddit/components/TrackingHelper/index.tsx"),
				S = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				I = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				T = i("./src/reddit/contexts/NavbarExp.ts"),
				W = i("./src/reddit/controls/Button/index.tsx"),
				L = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				D = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				M = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				B = i("./src/reddit/selectors/activeModalId.ts"),
				H = i("./src/reddit/selectors/platform.ts"),
				A = i("./src/reddit/selectors/subredditWiki.ts"),
				U = i("./src/higherOrderComponents/asModal/index.tsx"),
				K = i("./src/reddit/components/ModalStyledComponents/index.tsx"),
				G = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = i("./src/reddit/controls/TextButton/index.tsx"),
				z = i("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				q = i.n(z);
			class V extends r.a.PureComponent {
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
					} = this.state, i = p.g - t.length;
					return r.a.createElement("div", {
						className: q.a.container
					}, r.a.createElement(K.i, {
						className: q.a.modalHeader
					}, r.a.createElement(K.q, null, s.fbt._("Add a reason for your revision", null, {
						hk: "3ozq8e"
					})), r.a.createElement(F.a, {
						onClick: this.props.onCancel
					}, r.a.createElement(K.b, null))), r.a.createElement("div", {
						className: q.a.contentBlock
					}, r.a.createElement("label", null, r.a.createElement("span", {
						className: q.a.labelText
					}, s.fbt._("Revision reason", null, {
						hk: "W55mK"
					})), r.a.createElement("input", {
						autoFocus: !0,
						className: q.a.reasonInput,
						maxLength: p.g,
						onChange: this.onTextChange,
						placeholder: s.fbt._("Ex: Added source to appendix", null, {
							hk: "KB2dD"
						}),
						value: t
					})), r.a.createElement("div", {
						className: q.a.details
					}, s.fbt._({
						"*": "{number} characters left",
						_1: "1 character left"
					}, [s.fbt._plural(i, "number")], {
						hk: "1Ra9c8"
					}))), r.a.createElement(K.g, {
						className: q.a.modalFooter
					}, r.a.createElement(K.a, {
						onClick: this.props.onCancel
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(W.l, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? r.a.createElement(G.a, {
						className: q.a.loadingIcon,
						sizePx: 10
					}) : s.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var J = Object(U.a)(V),
				$ = i("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				X = i.n($);
			const Y = "Discard-wiki-page-changes",
				Q = "Add-wiki-revision-reason",
				Z = 2,
				ee = (e, t, i) => {
					const n = t.status,
						r = {
							[D.a.InvalidPageName]: s.fbt._("Page name is invalid", null, {
								hk: "3Ogzsc"
							}),
							[D.a.MaxLengthExceed]: s.fbt._("Page name must be shorter than {maxPageLen} characters", [s.fbt._param("maxPageLen", `${p.d}`)], {
								hk: "11HwWR"
							}),
							[D.a.PageAlreadyExists]: s.fbt._("Page with this name already exists", null, {
								hk: "3WRlhT"
							}),
							[D.a.RestrictedPageName]: s.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "BQtR2"
							})
						};
					if (e) {
						if (n === M.b.Valid) return r[D.a.PageAlreadyExists];
						if (n === M.b.PageNotFound) return s.fbt._("You do not have permission to create this page", null, {
							hk: "423aTf"
						});
						if (i) return r[i]
					} else if (n === M.b.Valid && !t.isRevisable) return s.fbt._("You do not have permission to edit this page", null, {
						hk: "1bUgsZ"
					})
				},
				te = Object(a.c)({
					allowNavigationCallback: H.a,
					isRevisionReasonModalOpen: Object(B.b)(Q),
					isSaveBeforeLeaveModalOpen: Object(B.b)(Y),
					wikiPage: A.c
				}),
				ie = Object(o.b)(te, (e, t) => ({
					onSaveWikiPage: (i, n) => e((e => {
						let {
							pageContent: t,
							wikiPageName: i,
							revisionReason: n,
							subredditName: r
						} = e;
						return async (e, o, a) => {
							var d, c, l;
							const u = await v({
								context: a.apiContext(),
								pageContent: t,
								revisionReason: n,
								subredditName: r,
								wikiPageName: i
							});
							if (u.ok) e(E({
								pageKey: Object(O.a)({
									subredditName: r,
									wikiPageName: i
								}),
								pageRevisionsListingKey: Object(w.a)({
									subredditName: r,
									wikiPageName: i,
									isRecent: !1
								}),
								recentRevisionsListingKey: Object(w.a)({
									subredditName: r,
									wikiPageName: i,
									isRecent: !0
								})
							})), await e(Object(m.fetchSubredditWikiData)({
								includeDirectory: !0,
								includePageData: !0,
								subredditName: r,
								wikiPageName: i
							}));
							else {
								let t = s.fbt._("Something went wrong", null, {
									hk: "4oNh1E"
								});
								"RESTRICTED_PAGE" === (null === (d = null == u ? void 0 : u.body) || void 0 === d ? void 0 : d.reason) ? t = s.fbt._("Cannot create/edit restricted page", null, {
									hk: "2pUIkm"
								}): "SPECIAL_ERRORS" === (null === (c = null == u ? void 0 : u.body) || void 0 === c ? void 0 : c.reason) && (t = null === (l = null == u ? void 0 : u.body) || void 0 === l ? void 0 : l.special_errors.map((e, t) => `${t+1}). ${e.toString()}`)), e(Object(b.f)({
									kind: N.b.Error,
									text: t
								}))
							}
							return u.ok
						}
					})({
						pageContent: i,
						revisionReason: n,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						return async (t, i) => {
							const s = i().platform.currentPage,
								n = s.locationState && s.locationState[p.a];
							if (e && n) t(Object(l.a)());
							else {
								const {
									subredditName: e,
									wikiPageName: i
								} = s.urlParams, n = Object(_.a)(s.url, {
									subredditName: e,
									wikiPageName: i
								});
								t(Object(l.c)(n))
							}
						}
					}(t)),
					closeAllModals: () => e(Object(c.f)()),
					toggleModal: t => e(Object(c.i)(t))
				}));
			class se extends r.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.onSaveWithReason = async e => {
						const {
							markdown: t
						} = this.state;
						this.setState({
							isSavePending: !0
						}), this.props.sendEvent(Object(L.m)(this.props.isCreation));
						const i = await this.props.onSaveWikiPage(t, e);
						this.isUnmounted || (this.setState({
							isSavePending: !1
						}), i ? this.setState({
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
						this.props.isRevisionReasonModalOpen || this.props.toggleModal(Q)
					}, this.onCancel = () => {
						this.props.onFinishWikiEdit(!0)
					}, this.onTextChange = e => {
						this.setState({
							markdown: e.target.value
						})
					}, this.renderWikiPageEditor = e => {
						const {
							isCreation: t,
							isRevisionReasonModalOpen: i,
							isSaveBeforeLeaveModalOpen: n,
							wikiPage: o,
							wikiPageName: a
						} = this.props, {
							disableBlocking: c,
							isSavePending: l,
							markdown: u
						} = this.state, m = o && o.content && o.content.markdown || "", b = !u.trim(), p = u !== m, h = t && o ? Object(D.b)(o.name) : void 0, g = !(!o || o.status !== M.b.PageNotCreated || h), k = !(!o || o.status !== M.b.Valid || !o.isRevisable), f = t ? g : k, x = f && p && !b && !l && !h;
						return r.a.createElement("div", {
							className: Object(d.a)(X.a.container, this.props.className)
						}, r.a.createElement("div", {
							className: Object(d.a)(this.props.topBarClassName, X.a.topBar, {
								[X.a.modHubTopBarExp]: e
							})
						}, r.a.createElement(W.o, {
							onClick: this.onCancel,
							disabled: l
						}, s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), r.a.createElement(W.l, {
							disabled: !x,
							onClick: this.showRevisionReasonModal
						}, s.fbt._("Save", null, {
							hk: "4yMsMq"
						}))), r.a.createElement("div", {
							className: Object(d.a)(this.props.contentClassName, X.a.content)
						}, o ? f ? r.a.createElement(P.a, {
							autoFocus: !0,
							className: X.a.resizableTextarea,
							disabled: l,
							onChange: this.onTextChange,
							placeholder: s.fbt._("Add page content here", null, {
								hk: "4fxFCc"
							}),
							value: u
						}) : r.a.createElement(S.a, {
							description: ee(t, o, h),
							title: t ? s.fbt._('"{pageName}" cannot be created', [s.fbt._param("pageName", a)], {
								hk: "235tfC"
							}) : s.fbt._('"{pageName}" cannot be edited', [s.fbt._param("pageName", a)], {
								hk: "4qKJob"
							})
						}) : r.a.createElement(I.a, {
							paragraphsCount: Z
						})), i && r.a.createElement(J, {
							withOverlay: !0,
							onCancel: this.onCancelAddingRevisionReason,
							onSave: this.onSaveWithReason,
							isPending: l
						}), r.a.createElement(C.a, {
							blockOnBeforeUnload: !0,
							dialogId: Y,
							enabled: p && !c
						}), n && r.a.createElement(j.a, {
							actionText: s.fbt._("Discard", null, {
								hk: "1SiwLl"
							}),
							headerText: s.fbt._("Discard changes before leaving?", null, {
								hk: "354NTe"
							}),
							modalText: s.fbt._("You have made some changes to your wiki page, do you wish to discard the changes?", null, {
								hk: "4sMjD7"
							}),
							onCancel: this.onAbortLeavingPage,
							onClose: this.onAbortLeavingPage,
							onConfirm: this.onLeavePageConfirmed,
							withOverlay: !0
						}))
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
					return r.a.createElement(T.a.Consumer, null, this.renderWikiPageEditor)
				}
			}
			t.a = ie(Object(R.c)(se))
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.m.less": function(e, t, i) {
			e.exports = {
				container: "hFkZVSvr5ZCDtsUNvUe0t",
				mModHub: "OTGEcq8eHMW4w8Jk_xUB_",
				content: "jB-E_8PuDLsGMGUcJ38Ed",
				pageTitle: "_7mpqbmAh_bdv9eJPLzJkl",
				headerRow: "_24xr0pCtEq8smcGh9hy-iC",
				pageSource: "_3FGoxkytIqYAnG5hdqa8Uq"
			}
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				c = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				l = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				u = i("./src/reddit/constants/wiki.ts"),
				m = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				b = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = i("./src/reddit/selectors/subredditWiki.ts"),
				h = i("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				g = i.n(h);
			const k = Object(o.c)({
					pending: p.a,
					revision: (e, t) => {
						let {
							revisionId: i
						} = t;
						return i ? Object(p.n)(e, {
							revisionId: i
						}) : void 0
					},
					wikiPage: p.c
				}),
				f = Object(r.b)(k);
			class x extends n.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: i,
						revision: r,
						revisionId: o,
						subredditName: p,
						wikiPage: h,
						wikiPageName: k
					} = this.props;
					let f = null;
					f = i ? n.createElement(d.a, null) : h ? h.status === b.b.Valid ? h.content && h.content.markdown : s.fbt._("Cannot show page content", null, {
						hk: "pwCwd"
					}) : s.fbt._("Page not found", null, {
						hk: "26hzSO"
					});
					const x = r || h && h.revision,
						v = !o,
						w = Object(m.a)({
							subredditName: p,
							wikiPageName: k,
							wikiSubRoute: v ? void 0 : u.m.Revisions
						}, t);
					return n.createElement("div", {
						className: Object(a.a)(e, g.a.container, t ? g.a.mModHub : null)
					}, n.createElement(c.a, {
						buttonText: v ? s.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}) : s.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: w,
						className: g.a.pageTitle,
						title: !v && x ? s.fbt._("Revision from {timeAgo}", [s.fbt._param("timeAgo", Object(l.b)(x))], {
							hk: "36r4TU"
						}) : s.fbt._("Page source", null, {
							hk: "33sFXM"
						})
					}), n.createElement("div", {
						className: g.a.content
					}, n.createElement("div", {
						className: g.a.headerRow
					}, x && n.createElement(l.a, {
						isLastRevision: v,
						revision: x,
						showReason: !0,
						showTimeAgo: !1
					})), n.createElement("div", {
						className: g.a.pageSource
					}, f)))
				}
			}
			t.a = f(x)
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3m-pL3lGJRyo7pWckPUL_d",
				dropdown: "_3IUuipl8jTmMnjXR0NDisP",
				row: "_25Y1JThsMmw5VNvhFFLb0j"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.m.less": function(e, t, i) {
			e.exports = {
				container: "I0T583ZtOWVEpRWsa0kbu",
				button: "_2IOi-lonN6Hy4pTcjFTLBp",
				revisionInfo: "Ln6UHsxFeDZdhv1yRUL0F",
				flexSpacer: "meAs5YnW58CX9i8rWjZQL",
				insightsIcon: "_2jZ56a8X91s-hvF2Hs0YO6"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/history/esm/history.js"),
				r = i("./node_modules/react/index.js"),
				o = i.n(r),
				a = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				c = i("./src/lib/classNames/index.ts"),
				l = i("./src/lib/copyToClipboard/index.ts"),
				u = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/reddit/components/TrackingHelper/index.tsx"),
				b = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				p = i("./src/reddit/constants/wiki.ts"),
				h = i("./src/reddit/controls/Button/index.tsx"),
				g = i("./src/reddit/icons/fonts/index.tsx"),
				k = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				f = i("./src/reddit/models/Toast/index.ts"),
				x = i("./src/reddit/selectors/moderatorPermissions.ts"),
				v = i("./src/reddit/selectors/subreddit.ts"),
				w = i("./src/reddit/selectors/subredditWiki.ts"),
				O = i("./src/config.ts"),
				N = i("./src/reddit/components/OverflowMenu/index.tsx"),
				_ = i("./src/reddit/constants/parameters.ts"),
				y = i("./src/reddit/controls/Dropdown/Row.tsx"),
				E = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				C = i("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				j = i.n(C);
			const P = ["right", "bottom"],
				R = ["right", "top"];
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(E.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, i = `${O.a.redditUrl}/r/${e}/wiki/${t}`;
						this.props.onCopyPageUrl(i), this.props.sendEvent(E.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: i,
						subredditName: n,
						wikiPage: r,
						wikiPageName: a
					} = this.props, d = i ? `/r/${n}/about/wiki` : `/r/${n}/wiki`;
					return o.a.createElement(N.b, {
						className: Object(c.a)(e, j.a.container),
						dropdownClassName: j.a.dropdown,
						dropdownId: t,
						targetPosition: P,
						tooltipPosition: R
					}, r && o.a.createElement(y.b, {
						className: j.a.row,
						displayText: s.fbt._("View page history", null, {
							hk: "fy9yY"
						}),
						href: `${d}/revisions/${a}/`
					}), r && o.a.createElement(y.b, {
						className: j.a.row,
						displayText: s.fbt._("View page source", null, {
							hk: "1d5vg5"
						}),
						href: `${d}/${a}/?${_.O}`,
						onClick: this.onViewPageSourceClick
					}), i && o.a.createElement(y.b, {
						className: j.a.row,
						displayText: s.fbt._("View in community", null, {
							hk: "mSFod"
						}),
						href: `/r/${n}/wiki/${a}/`
					}), o.a.createElement(y.b, {
						className: j.a.row,
						displayText: s.fbt._("Copy URL", null, {
							hk: "3yBYUk"
						}),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var I = S,
				T = i("./src/reddit/constants/experiments.ts"),
				W = i("./src/reddit/helpers/chooseVariant/index.ts"),
				L = i("./src/reddit/selectors/user.ts");
			var D = i("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				M = i.n(D);
			const B = Object(d.c)({
					hasWikiModPerms: (e, t) => {
						const i = Object(v.C)(e, t);
						return !!i && Object(x.j)(e, {
							subredditId: i.id
						})
					},
					wikiPage: w.c,
					isInShredditAutomodInsightsExperiment: e => (e => Object(W.c)(e, {
						experimentEligibilitySelector: L.S,
						experimentName: T.Ff
					}) === T.Rd)(e)
				}),
				H = Object(a.b)(B, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(l.a)(e) && t(Object(u.f)(Object(u.e)(s.fbt._("Copied page URL", null, {
							hk: "4qKWjj"
						}), f.b.SuccessCommunity)))
					})(t))
				}));
			class A extends o.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: i,
						wikiPageName: r,
						subredditName: a,
						className: d
					} = this.props, l = !!i && i.status === k.b.Valid, u = !!i && i.isRevisable, m = e && u && l, f = t ? `/r/${a}/about/wiki/edit/${r}` : `/r/${a}/wiki/edit/${r}`;
					return o.a.createElement("div", {
						className: Object(c.a)(d, M.a.container)
					}, t && i && i.revision && o.a.createElement(b.a, {
						showTimeAgo: !0,
						className: M.a.revisionInfo,
						isLastRevision: !0,
						revision: i.revision
					}), o.a.createElement("div", {
						className: M.a.flexSpacer
					}), l && this.props.isInShredditAutomodInsightsExperiment && o.a.createElement(h.t, {
						priority: h.c.Secondary,
						className: M.a.button,
						kind: h.b.ExternalLink,
						href: `/mod/${a}/insights/automod`,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o.a.createElement(g.a, {
						name: "statistics",
						className: M.a.insightsIcon
					}), s.fbt._("Automod Insights", null, {
						hk: "2UENkn"
					})), m && o.a.createElement(h.q, {
						className: M.a.button,
						to: `/r/${a}/about/wiki/settings/${r}`
					}, s.fbt._("Page settings", null, {
						hk: "2IAvWU"
					})), l && u && o.a.createElement(h.n, {
						className: M.a.button,
						to: Object(n.c)(f, {
							[p.a]: !0
						})
					}, s.fbt._("Edit", null, {
						hk: "1nftDt"
					})), l && o.a.createElement(I, {
						className: M.a.overflowMenu,
						dropdownId: `wikiPage-OverflowMenu-${r}-${t}`,
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: a,
						wikiPage: i,
						wikiPageName: r
					}))
				}
			}
			t.a = H(Object(m.c)(A))
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3Av0UmXioR3Vgw-lpzfBWu",
				button: "_2hFu9bCtEjS60NjZM3F_UE",
				description: "_2c02P9rTnnEw2KuDpY8JxB",
				title: "_3rol4SGAf0n5-e8EENfrur"
			}
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			var s = i("./node_modules/react/index.js"),
				n = i("./src/reddit/controls/Button/index.tsx"),
				r = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				o = i.n(r);

			function a(e) {
				const {
					buttonLink: t,
					buttonText: i,
					description: r,
					icon: a,
					onButtonClick: d,
					title: c
				} = e;
				let l = null;
				return i && t ? l = s.createElement(n.n, {
					className: o.a.button,
					onClick: e.onButtonClick,
					to: t
				}, i) : i && d && (l = s.createElement(n.l, {
					className: o.a.button,
					onClick: e.onButtonClick
				}, i)), s.createElement("div", {
					className: o.a.container
				}, a, c && s.createElement("div", {
					className: o.a.title
				}, c), r && s.createElement("div", {
					className: o.a.description
				}, r), l)
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less": function(e, t, i) {
			e.exports = {
				placeholderTitle: "XK5I3_2arHFpfmDn6iUGt",
				placeholderParagraph: "_3Rhsg99h5kjE-u1Pp-Uk8P",
				placeholderTextLine: "_5pG9RcI-AYalqG5z6osMT"
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/lodash/range.js"),
				n = i.n(s),
				r = i("./node_modules/react/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				c = i.n(d);
			const l = e => r.createElement("div", {
				className: Object(o.a)(e.className, Object(a.b)({
					isLoading: !0
				}))
			});
			t.a = e => r.createElement(r.Fragment, null, e.showTitle && r.createElement(l, {
				className: c.a.placeholderTitle
			}), n()(e.paragraphsCount || 6).map(e => r.createElement("div", {
				className: c.a.placeholderParagraph,
				key: e
			}, n()(10).map(e => r.createElement(l, {
				className: c.a.placeholderTextLine,
				key: e
			})))))
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2NCACehu2vXVQzdHocg7Rq",
				linkButton: "_28uXMdKULX2ygqCKM5Apfz",
				active: "_2DijTkAaakBaDtqxBeulFO"
			}
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
			}));
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/controls/Button/index.tsx"),
				a = i("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				d = i.n(a);

			function c(e) {
				const {
					buttonLink: t,
					buttonText: i,
					className: s,
					title: a
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(s, d.a.container)
				}, a, i && t && n.a.createElement(o.s, {
					className: d.a.linkButton,
					to: t
				}, i))
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2b8IWktp8nbHqDKTRFWebW",
				authorLink: "IY5BT71vlrhwNnwInSc2f"
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return N
			})), i.d(t, "a", (function() {
				return _
			}));
			var s = i("./node_modules/lodash/noop.js"),
				n = i.n(s),
				r = i("./node_modules/react/index.js"),
				o = i.n(r),
				a = i("./src/higherOrderComponents/asTooltip.tsx"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/constants/index.ts"),
				l = i("./src/lib/timeAgo/index.ts"),
				u = i("./src/reddit/components/AuthorLink/index.tsx"),
				m = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				b = i("./src/reddit/components/HumanDate/index.tsx"),
				p = i("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = i("./src/reddit/helpers/graphql/helpers.ts"),
				g = i("./src/reddit/models/Post/index.ts"),
				k = i("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				f = i.n(k);
			const {
				fbt: x
			} = i("./node_modules/fbt/lib/FbtPublic.js"), v = ["center", "top"], w = ["center", "bottom"], O = Object(a.a)(p.b), N = e => {
				const t = new Date(Object(h.g)(e.revisedAt));
				return Object(l.d)(t.valueOf() / 1e3)
			};
			class _ extends o.a.Component {
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
						revision: i,
						showReason: s = !1,
						showTimeAgo: r = !1
					} = this.props, {
						showTooltip: a
					} = this.state, l = i.authorInfo && i.authorInfo.name || c.F, p = new Date(Object(h.g)(i.revisedAt)), k = o.a.createElement(m.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: n.a
					}, o.a.createElement(u.a, {
						className: f.a.authorLink,
						author: l,
						isAuthorDeleted: Object(g.p)(l),
						isUnstyled: !0
					}, l));
					return o.a.createElement("span", {
						className: Object(d.a)(e, f.a.container)
					}, t ? x._("Last revised by {username}", [x._param("username", k)], {
						hk: "jNOhx"
					}) : x._("Revised by {username}", [x._param("username", k)], {
						hk: "2Q35rs"
					}), r && o.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", o.a.createElement(b.d, {
						seconds: p.valueOf() / c.Wb
					}), o.a.createElement(O, {
						text: p.toString(),
						isOpen: a,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: v,
						tooltipPosition: w
					})), s && i.reason && o.a.createElement("span", null, " - ", i.reason))
				}
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, i) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/icons/fonts/index.tsx"),
				a = i("./src/reddit/controls/Checkbox/index.m.less"),
				d = i.n(a);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return d
			})), i.d(t, "c", (function() {
				return c
			})), i.d(t, "d", (function() {
				return l
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./src/lib/makeGqlRequest/index.ts");
			var n, r = i("./src/redditGQL/operations/LanguageSelections.json"),
				o = i("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(n || (n = {}));
			const a = (e, t) => {
					const i = {
						allKey: e,
						suggestedKey: n.SUGGESTED_KEY
					};
					return Object(s.a)(t, {
						...r,
						variables: i
					})
				},
				d = async e => {
					const t = await a(n.ALL_KEY, e());
					if (!t.ok) return null;
					const i = t.body,
						s = null == i ? void 0 : i.data;
					return s ? (e => {
						const t = {},
							i = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: i
						}
					})(s) : null
				}, c = async (e, t, i) => {
					const s = await a(e, t());
					if (!s.ok) return null;
					const r = s.body,
						o = null == r ? void 0 : r.data;
					if (o) {
						return ((e, t, i) => {
							let s = null,
								n = [];
							const r = [],
								o = [],
								a = {},
								d = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									d[e] = !0
								})
							}
							for (let c = 0; c < t.suggested.length; c++) {
								const n = t.suggested[c];
								if (a[n.isoCode] = !0, i === n.isoCode) s = n;
								else {
									if (!e && d[n.isoCode]) continue; {
										const t = !!(e || !e && d[n.isoCode]);
										r.push({
											selected: t,
											...n
										})
									}
								}
							}
							for (let c = 0; c < t.all.length; c++) {
								const r = t.all[c];
								r.isoCode === i ? (s = r, o.push({
									selected: !0,
									...r
								})) : !e && d[r.isoCode] ? o.push({
									selected: !0,
									...r
								}) : a[r.isoCode] || n.push({
									selected: !(e || !d[r.isoCode]),
									...r
								})
							}
							if (n = r.concat(n), null === s) {
								const e = i.split("-").shift();
								for (let t = 0; t < n.length; t++)
									if (n[t].isoCode === e) {
										s = n[t], n.splice(t, 1);
										break
									}
							}
							return s && ((e || !e && d[s.isoCode]) && (s.selected = !0), n.unshift(s)), e || (n = o.concat(n)), {
								sortedLanguages: n
							}
						})(e === n.TOP_KEYS, o, i)
					}
					return null
				}, l = async (e, t) => {
					const i = await ((e, t) => {
						const i = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(s.a)(e, {
							...o,
							variables: i
						})
					})(e(), Object.keys(t));
					if (!i.ok) return null;
					const n = i.body;
					return null == n ? void 0 : n.data
				}
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var s = i("./src/lib/makeGqlRequest/index.ts"),
				n = i("./src/redditGQL/operations/SubredditWiki.json");
			const r = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			var s = i("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const i = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === s.b.NO_ADS);
				return !i && !n
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, i) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			})), i.d(t, "b", (function() {
				return a
			}));
			var s = i("./src/lib/classNames/index.ts"),
				n = i("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = i.n(n);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				a = e => Object(s.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return a
			})), i.d(t, "a", (function() {
				return d
			})), i.d(t, "d", (function() {
				return c
			})), i.d(t, "c", (function() {
				return l
			}));
			var s, n, r = i("./src/reddit/constants/tracking.ts"),
				o = i("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const a = (e, t) => i => ({
					source: n.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.Ab)(i, {
						subredditId: e,
						widgetKind: t
					}),
					...o.q
				}),
				d = (e, t) => i => ({
					source: n.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.M(i, e),
					subreddit: o.nb(i),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.q(i)
				}),
				c = () => e => ({
					source: n.SIDEBAR,
					action: r.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.q(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: s.TOPIC,
					...o.q(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return o
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/lodash/sortBy.js"),
				n = i.n(s),
				r = i("./src/reddit/constants/wiki.ts");
			const o = e => {
				return n()(e, e => `${e.path}/`.startsWith(`${r.i}/`) ? `\0${e.path}` : e.path).filter(e => !r.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					i = [];
				return o(e).forEach(e => {
					const s = {
							...e,
							children: []
						},
						n = s.parent ? t.get(s.parent) : null;
					n ? n.children.push(s) : i.push(s), t.set(s.path, s)
				}), i
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, i) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: i,
					subredditName: s,
					wikiPageName: n
				} = e;
				return `[${s}]--[${n}]--[rev1:${i}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, i) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, i) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			})), i.d(t, "c", (function() {
				return a
			})), i.d(t, "b", (function() {
				return d
			}));
			var s = i("./src/reddit/constants/wiki.ts");
			const n = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${s.c}}$`),
				r = /^[-\w]+$/;
			var o;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(o || (o = {}));
			const a = e => {
					if (!r.test(e.toLowerCase())) return o.InvalidPageName
				},
				d = (e, t) => {
					const i = e.toLowerCase(),
						r = i.split("/")[0],
						a = s.b.has(r),
						d = s.f.has(r) && i !== s.h && i !== s.k;
					if (a || d) return o.RestrictedPageName;
					if (!n.test(i)) return o.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === i)) return o.PageAlreadyExists
					}
					return i.length > s.d ? o.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return n
			}));
			const s = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				n = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/actions/pages/shared.ts"),
				d = i("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = i("./src/reddit/components/ContentGate/index.tsx"),
				l = i("./src/reddit/components/HeaderImage/index.tsx"),
				u = i("./src/lib/constants/index.ts"),
				m = i("./src/lib/makeListingKey/index.ts"),
				b = i("./src/reddit/components/SubredditSidebar/index.tsx");
			var p = e => {
					const {
						subreddit: t,
						subredditName: i
					} = e, s = Object(m.a)(i, u.ab.HOT, {});
					return n.a.createElement(b.a, {
						listingKey: s,
						listingName: i.toLowerCase(),
						subredditId: t.id,
						subredditName: i
					})
				},
				h = i("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				g = i("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				k = i("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				f = i("./src/reddit/constants/parameters.ts"),
				x = i("./src/reddit/constants/wiki.ts"),
				v = i("./src/reddit/contexts/PageLayer/index.tsx"),
				w = i("./src/reddit/helpers/wiki/wikiRevision.ts"),
				O = i("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				N = i("./src/reddit/components/JumpToContent/index.tsx"),
				_ = i("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				y = i("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				E = i("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				C = i.n(E);

			function j(e) {
				const {
					wikiPageName: t,
					subredditName: i
				} = e;
				return s.createElement(s.Fragment, null, s.createElement(N.a, null), s.createElement(y.a, {
					isModHub: !1,
					className: C.a.topBar,
					wikiPageName: t,
					subredditName: i
				}), s.createElement(_.a, {
					showRevisionInfo: !0,
					subredditName: i,
					wikiPageName: t
				}))
			}
			var P = i("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				R = i.n(P);
			class S extends n.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: i,
						queryParams: s
					} = e, {
						wikiSubRoute: r,
						wikiPageName: o
					} = i, a = s[f.M], d = s[f.N], c = f.O in s;
					switch (r) {
						case x.m.Create:
						case x.m.Edit:
							return n.a.createElement(g.a, {
								contentClassName: R.a.wikiPageEditorContent,
								isCreation: r === x.m.Create,
								subredditName: t,
								topBarClassName: R.a.communityWikiTopBar,
								wikiPageName: o
							});
						case x.m.Revisions:
							return n.a.createElement(O.a, {
								key: o,
								isRecentRevisionsMode: !o,
								subredditName: t,
								wikiPageName: o
							});
						default:
							return o && a && d ? n.a.createElement(h.a, {
								comparisonRevisionId: Object(w.a)(d),
								revisionId: Object(w.a)(a),
								subredditName: t,
								wikiPageName: o
							}) : o && (a || c) ? n.a.createElement(k.a, {
								revisionId: a ? Object(w.a)(a) : void 0,
								subredditName: t,
								wikiPageName: o
							}) : o ? n.a.createElement(j, {
								wikiPageName: o,
								subredditName: t
							}) : null
					}
				}
			}
			var I = Object(v.v)()(S),
				T = i("./src/reddit/constants/componentSizes.ts"),
				W = i("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				L = i("./src/reddit/layout/page/Listing/index.tsx"),
				D = i("./src/reddit/selectors/subreddit.ts"),
				M = i("./src/reddit/selectors/user.ts");
			const B = Object(v.v)(),
				H = Object(r.b)(() => Object(o.c)({
					contentGateInfo: (e, t) => {
						let {
							match: i
						} = t;
						return Object(M.h)(e, i.params.subredditName)
					},
					layout: v.U,
					over18Pref: M.mb,
					subreddit: (e, t) => {
						let {
							match: i
						} = t;
						return Object(D.C)(e, {
							subredditName: i.params.subredditName || x.e
						})
					},
					subredditName: (e, t) => {
						let {
							match: i
						} = t;
						return i.params.subredditName || x.e
					},
					wikiPageName: (e, t) => {
						let {
							match: i
						} = t;
						return i.params.wikiPageName || x.i
					}
				}), e => ({
					onPageViewed: () => e(Object(a.a)())
				}));
			class A extends n.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: i,
						subredditName: s
					} = this.props, r = !!i && i.isNSFW && !M.mb, o = Object(W.a)(t, r, s);
					if (o) return n.a.createElement(c.default, o);
					const a = `/r/${s}/`;
					return n.a.createElement(L.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: T.h,
						navBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: i ? i.name : s,
							maxWidth: T.h,
							subredditOrProfile: i,
							url: a
						}), n.a.createElement(d.a, {
							subreddit: i || void 0,
							subredditId: i ? i.id : void 0,
							subredditName: s,
							subredditUrl: a
						})),
						content: n.a.createElement(I, {
							subredditName: s
						}),
						sidebar: i && n.a.createElement(p, {
							subreddit: i,
							subredditName: s
						})
					})
				}
			}
			t.default = B(H(A))
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			})), i.d(t, "b", (function() {
				return m
			}));
			var s = i("./src/reddit/constants/experiments.ts"),
				n = i("./src/reddit/helpers/chooseVariant/index.ts"),
				r = i("./src/reddit/selectors/experiments/index.ts"),
				o = i("./src/reddit/selectors/experiments/utils.ts"),
				a = i("./src/reddit/selectors/meta.ts"),
				d = i("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(r.f)(e),
					experimentName: s.pc
				}), o.a),
				l = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(r.f)(e),
					experimentName: s.oc
				}), o.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return o
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "p", (function() {
				return c
			})), i.d(t, "q", (function() {
				return l
			})), i.d(t, "o", (function() {
				return u
			})), i.d(t, "n", (function() {
				return m
			})), i.d(t, "i", (function() {
				return b
			})), i.d(t, "d", (function() {
				return p
			})), i.d(t, "j", (function() {
				return h
			})), i.d(t, "m", (function() {
				return g
			})), i.d(t, "k", (function() {
				return k
			})), i.d(t, "l", (function() {
				return f
			})), i.d(t, "e", (function() {
				return x
			})), i.d(t, "h", (function() {
				return v
			})), i.d(t, "f", (function() {
				return w
			})), i.d(t, "g", (function() {
				return O
			}));
			var s = i("./src/lib/objectSelector/index.ts"),
				n = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const r = [],
				o = (e, t) => {
					var i;
					const {
						subredditName: s
					} = t;
					if (null === (i = e.pages) || void 0 === i ? void 0 : i.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				a = (e, t) => {
					const {
						subredditName: i
					} = t;
					return !!e.subreddits.api.wiki.pending[i.toLowerCase()]
				},
				d = (e, t) => {
					var i;
					const s = Object(n.a)(t);
					if (null === (i = e.pages) || void 0 === i ? void 0 : i.subredditWiki) return e.pages.subredditWiki.pages[s]
				},
				c = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.pages.subredditWiki.revisions.listings[i]
				},
				l = (e, t) => {
					let {
						listingKey: i
					} = t;
					return !!e.pages.subredditWiki.revisions.api.pending[i]
				},
				u = (e, t) => {
					let {
						listingKey: i
					} = t;
					return !!e.pages.subredditWiki.revisions.api.error[i]
				},
				m = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				b = (e, t) => {
					let {
						key: i
					} = t;
					return e.pages.subredditWiki.diff[i]
				},
				p = (e, t) => {
					const i = Object(n.a)(t);
					return e.pages.subredditWiki.pageSettings[i]
				},
				h = (e, t) => {
					const {
						subredditName: i
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[i.toLowerCase()]
				},
				g = Object(s.a)((e, t) => {
					let {
						subredditName: i
					} = t;
					const s = i.toLowerCase(),
						n = e.pages.subredditWiki.wikiContributors.listing,
						o = n.userOrder[s],
						a = n.models[s];
					return o ? o.map(e => a[e]) : r
				}),
				k = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[i.toLowerCase()]
				},
				f = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[i.toLowerCase()]
				},
				x = (e, t) => {
					const {
						subredditName: i
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[i.toLowerCase()]
				},
				v = Object(s.a)((e, t) => {
					let {
						subredditName: i
					} = t;
					const s = i.toLowerCase(),
						n = e.pages.subredditWiki.wikiBannedContributors.listing,
						o = n.userOrder[s],
						a = n.models[s];
					return o ? o.map(e => a[e]) : r
				}),
				w = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[i.toLowerCase()]
				},
				O = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[i.toLowerCase()]
				}
		},
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/SubredditWiki.json": function(e) {
			e.exports = JSON.parse('{"id":"5834be60ee7a"}')
		},
		"./src/redditGQL/operations/SubredditWikiBannedContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"9b728f1ed735"}')
		},
		"./src/redditGQL/operations/SubredditWikiContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"6ff60c2af7f1"}')
		},
		"./src/redditGQL/operations/SubredditWikiPageSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"03acb455993d"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		},
		"./src/redditGQL/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/redditGQL/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.32e09974104d4f28ef89.js.map