// https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.7e779f0d7b0376656752.js
// Retrieved at 6/16/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages~SubredditWiki"], {
		"./src/reddit/actions/pages/shared.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				n = r("./src/reddit/helpers/routeKey/index.ts"),
				a = r("./src/reddit/helpers/trackers/screenview.ts"),
				i = r("./src/telemetry/index.ts"),
				o = r("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const r = t(),
					{
						currentPage: d
					} = r.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(s.a)(r),
					u = Object(n.b)(c, r, l);
				u && i.c.has(u) && Object(a.k)(c, r, o.TimerType.InApp, i.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "subredditWikiDataPending", (function() {
				return Ge
			})), r.d(t, "subredditWikiDataLoaded", (function() {
				return qe
			})), r.d(t, "subredditWikiDataFailed", (function() {
				return Qe
			})), r.d(t, "fetchSubredditWikiData", (function() {
				return Xe
			})), r.d(t, "handleWikiRedirects", (function() {
				return $e
			})), r.d(t, "subredditWikDataRequested", (function() {
				return Ze
			})), r.d(t, "subredditWikiPageRequested", (function() {
				return Ye
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/isEmpty.js"),
				a = r.n(n),
				i = r("./node_modules/react-router-redux/es/index.js"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				l = r("./src/config.ts"),
				u = r("./src/reddit/actions/platform.ts"),
				m = r("./src/reddit/helpers/path/index.ts");
			var b = r("./src/reddit/actions/ads/index.ts"),
				p = r("./src/reddit/actions/pages/subreddit.ts"),
				f = r("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				v = r("./src/reddit/actions/toaster.ts"),
				g = r("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				h = r("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				k = r("./src/lib/makeGqlRequest/index.ts"),
				w = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				x = r("./src/redditGQL/operations/WikiComparisonDiff.json");
			var I = r("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				O = r("./src/reddit/selectors/subredditWiki.ts");
			const _ = Object(d.a)("WIKI_DIFF_PENDING"),
				N = Object(d.a)("WIKI_DIFF_LOADED"),
				j = Object(d.a)("WIKI_DIFF_FAILED"),
				y = e => async (t, r, s) => {
					const n = r(),
						a = Object(I.a)(e),
						i = Object(O.i)(n, {
							key: a
						});
					if (i && (i.pending || !i.error)) return !0;
					const d = {
						key: a
					};
					t(_(d));
					const c = await ((e, t) => Object(k.a)(e, {
						...x,
						variables: {
							...t,
							comparisonRevisionId: Object(w.b)(t.comparisonRevisionId),
							revisionId: Object(w.b)(t.revisionId)
						}
					}))(s.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							r = t && t.page && t.page.revisionComparisonDiffHtml;
						r ? u = r : l = {
							type: o.G.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.G.UNKNOWN_ERROR
					};
					return t(l ? j({
						...d,
						error: l
					}) : N({
						...d,
						htmlDiff: u
					})), !l
				};
			var C = r("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				E = r("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				P = r("./src/reddit/constants/parameters.ts"),
				S = r("./src/reddit/constants/wiki.ts"),
				T = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				U = r("./src/reddit/helpers/brandSafety/index.ts"),
				R = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				L = r("./src/reddit/models/Toast/index.ts"),
				A = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				D = r("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				B = r("./src/reddit/selectors/subreddit.ts"),
				K = r("./src/lib/initializeClient/installReducer.ts"),
				W = r("./node_modules/redux/es/redux.js");
			const M = {};
			var H = (e = M, t) => {
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: r,
							htmlDiff: s
						} = t.payload;
						return {
							...e,
							[r]: {
								htmlDiff: s
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								pending: !1,
								error: s
							}
						}
					}
					default:
						return e
				}
			};
			const F = {};
			var G = (e = F, t) => {
					switch (t.type) {
						case f.b:
							const r = t.payload,
								{
									subredditWiki: s,
									options: n
								} = r,
								a = s && s.directory;
							if (!a) return e;
							const {
								subredditName: i
							} = n;
							return {
								...e, [i.toLowerCase()]: a
							};
						default:
							return e
					}
				},
				q = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const Q = {};
			var z = (e = Q, t) => {
					switch (t.type) {
						case f.b: {
							const {
								subredditWiki: r,
								pageKey: s
							} = t.payload, {
								page: n
							} = r;
							return s && n ? {
								...e,
								[s]: n
							} : e
						}
						case q.a: {
							const {
								pageKey: r,
								page: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				X = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const $ = {};
			var Z = (e = $, t) => {
					switch (t.type) {
						case X.c: {
							const {
								settings: r,
								pageKey: s
							} = t.payload;
							return r ? {
								...e,
								[s]: r
							} : e
						}
						case X.d: {
							const {
								isVisible: r,
								editPermissions: s,
								pageKey: n
							} = t.payload, a = e[n];
							return a ? {
								...e,
								[n]: {
									...a,
									isVisible: r,
									editPermissions: s
								}
							} : e
						}
						case X.b: {
							const {
								editorsInfo: r,
								afterToken: s,
								pageKey: n
							} = t.payload, a = e[n];
							if (!a) return e;
							const i = [...a.editorsInfo, ...r];
							return {
								...e,
								[n]: {
									...a,
									editorsInfo: i,
									afterToken: s
								}
							}
						}
						case X.a: {
							const {
								username: r,
								pageKey: s
							} = t.payload, n = e[s];
							if (!n) return e;
							const a = n.editorsInfo.filter(e => e.username !== r);
							return {
								...e,
								[s]: {
									...n,
									editorsInfo: a
								}
							}
						}
						default:
							return e
					}
				},
				Y = r("./src/lib/omitKey/index.ts");
			const V = {};
			var J = (e = V, t) => {
				switch (t.type) {
					case q.b: {
						const {
							key: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case q.d:
					case q.c: {
						const {
							key: r
						} = t.payload;
						return Object(Y.a)(e, r)
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case q.d:
						case q.b:
						case q.c: {
							const {
								key: r
							} = t.payload, s = t.type === q.d;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				re = Object(W.c)({
					error: J,
					pending: te
				}),
				se = r("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ne = {};
			var ae = (e = ne, t) => {
				switch (t.type) {
					case q.c: {
						const {
							key: r,
							options: s,
							pageInfo: n,
							revisionsIds: a
						} = t.payload, i = e[r], o = s.after && i ? [...i.ids, ...a] : a;
						return {
							...e,
							[r]: {
								ids: o,
								pageInfo: n
							}
						}
					}
					case q.a: {
						const {
							page: {
								revision: r
							},
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: n
						} = t.payload, a = e[s];
						return a && r ? {
							...Object(Y.a)(e, n),
							[s]: {
								...a,
								ids: [r.id, ...a.ids]
							}
						} : e
					}
					case se.a: {
						const {
							pageRevisionsListingKey: r,
							recentRevisionsListingKey: s
						} = t.payload, n = {
							...e
						};
						return delete n[r], delete n[s], n
					}
					default:
						return e
				}
			};
			const ie = {};
			var oe = (e = ie, t) => {
					switch (t.type) {
						case f.b: {
							const {
								subredditWiki: {
									page: r
								}
							} = t.payload, s = r && r.revision;
							return s && !e[s.id] ? {
								...e,
								[s.id]: s
							} : e
						}
						case q.c: {
							const {
								revisions: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						case q.a: {
							const {
								page: r
							} = t.payload, s = r.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case q.e: {
							const {
								revisionId: r,
								isHidden: s
							} = t.payload, n = e[r];
							return n ? {
								...e,
								[r]: {
									...n,
									isHidden: s
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(W.c)({
					api: re,
					listings: ae,
					models: oe
				}),
				ce = r("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const le = {};
			var ue = (e = le, t) => {
				switch (t.type) {
					case ce.c:
					case ce.a: {
						const {
							subredditName: r,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const me = {};
			var be = (e = me, t) => {
				switch (t.type) {
					case ce.b: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: r
						} = t.payload;
						return Object(Y.a)(e, r)
					}
					default:
						return e
				}
			};
			const pe = {};
			var fe = (e = pe, t) => {
					switch (t.type) {
						case ce.d:
						case ce.c:
						case ce.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === ce.d;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				ve = Object(W.c)({
					error: be,
					pending: fe
				});
			const ge = {};
			var he = (e = ge, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: r,
								bannedContributors: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									...s
								}
							}
						}
						case ce.e: {
							const {
								subredditName: r,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									...s
								}
							}
						}
						case ce.f: {
							const {
								subredditName: r,
								userId: s
							} = t.payload, n = Object(Y.a)(e[r], s);
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				ke = r("./node_modules/lodash/uniq.js"),
				we = r.n(ke);
			const xe = {};
			var Ie = (e = xe, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: we()([...e[r] || [], ...s])
							}
						}
						case ce.e: {
							const {
								subredditName: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: we()([...s, ...e[r] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: r,
								userId: s
							} = t.payload;
							return {
								...e,
								[r]: (e[r] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Oe = Object(W.c)({
					afterToken: ue,
					api: ve,
					models: he,
					userOrder: Ie
				});
			const _e = {};
			var Ne = (e = _e, t) => {
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: r,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				je = Object(W.c)({
					listing: Oe,
					search: Ne
				}),
				ye = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ce = {};
			var Ee = (e = Ce, t) => {
				switch (t.type) {
					case ye.c:
					case ye.a: {
						const {
							subredditName: r,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const Pe = {};
			var Se = (e = Pe, t) => {
				switch (t.type) {
					case ye.b: {
						const {
							subredditName: r,
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case ye.d:
					case ye.c: {
						const {
							subredditName: r
						} = t.payload;
						return Object(Y.a)(e, r)
					}
					default:
						return e
				}
			};
			const Te = {};
			var Ue = (e = Te, t) => {
					switch (t.type) {
						case ye.d:
						case ye.c:
						case ye.b: {
							const {
								subredditName: r
							} = t.payload, s = t.type === ye.d;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				Re = Object(W.c)({
					error: Se,
					pending: Ue
				});
			const Le = {};
			var Ae = (e = Le, t) => {
				switch (t.type) {
					case ye.c:
					case ye.a: {
						const {
							subredditName: r,
							contributors: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...s
							}
						}
					}
					case ye.e: {
						const {
							subredditName: r,
							contributor: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...s
							}
						}
					}
					case ye.f: {
						const {
							subredditName: r,
							userId: s
						} = t.payload, n = Object(Y.a)(e[r], s);
						return {
							...e,
							newState: n
						}
					}
					default:
						return e
				}
			};
			const De = {};
			var Be = (e = De, t) => {
					switch (t.type) {
						case ye.c:
						case ye.a: {
							const {
								subredditName: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: we()([...e[r] || [], ...s])
							}
						}
						case ye.e: {
							const {
								subredditName: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: [...s, ...e[r] || []]
							}
						}
						case ye.f: {
							const {
								subredditName: r,
								userId: s
							} = t.payload;
							return {
								...e,
								[r]: (e[r] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Ke = Object(W.c)({
					afterToken: Ee,
					api: Re,
					models: Ae,
					userOrder: Be
				});
			const We = {};
			var Me = (e = We, t) => {
					switch (t.type) {
						case ye.g: {
							const {
								subredditName: r,
								contributor: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				He = Object(W.c)({
					listing: Ke,
					search: Me
				}),
				Fe = Object(W.c)({
					diff: H,
					directory: G,
					pages: z,
					pageSettings: Z,
					revisions: de,
					wikiBannedContributors: je,
					wikiContributors: He
				});
			Object(K.a)({
				pages: {
					subredditWiki: Fe
				}
			});
			const Ge = Object(d.a)(f.c),
				qe = Object(d.a)(f.b),
				Qe = Object(d.a)(f.a),
				ze = (e, t) => !!Object(O.b)(e, {
					subredditName: t
				}),
				Xe = e => async (t, r, n) => {
					const {
						canShowFailToast: i,
						wikiPageName: d
					} = e, c = d === S.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(R.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(Ge({
						options: l,
						pageKey: u
					}));
					const m = await Object(T.a)(n.gqlContext(), l),
						b = m.body,
						p = m.ok ? b.data && b.data.subreddit && b.data.subreddit.wiki : null;
					return m.ok && p ? t(qe({
						options: l,
						pageKey: u,
						subredditWiki: p
					})) : (t(Qe({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.G.NOT_FOUND_ERROR
						}
					})), i && t(Object(v.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: L.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Xe(e)
					}))), !(!m.ok || !a()(b.data.subreddit)) || !(!m.ok || !p)
				}, $e = e => async (t, r) => {
					const {
						params: s,
						url: n
					} = e, {
						wikiPageName: a
					} = s, o = Object(D.a)(n, s);
					let d = !1;
					return S.l.includes(a || "") ? (await (async (e, t) => {
						const r = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = r
					})(e.url), d = !0) : n !== o && (await t(Object(i.c)(o)), d = !0), d
				}, Ze = (e, t, r = !1) => async (n, a, i) => {
					const {
						subredditName: d = S.e,
						wikiPageName: l,
						wikiSubRoute: u
					} = e, m = t[P.A], b = t[P.B], f = m ? Object(w.a)(m) : void 0, k = b ? Object(w.a)(b) : void 0, x = l === S.j, I = u === S.m.Revisions;
					let _ = !1,
						N = !1;
					if (r) {
						const {
							pageName: t
						} = e;
						_ = t === o.Zb.WikiContributors, N = t === o.Zb.WikiBanned
					}
					const j = a(),
						T = (x || r) && !ze(j, d),
						U = !!l && !((e, t, r, s) => {
							return r === S.j ? ze(e, t) : !!Object(O.c)(e, {
								subredditName: t,
								wikiPageName: r,
								revisionId: s
							})
						})(j, d, l, f),
						R = [];
					R.push(n(((e, t = !1) => async (r, s) => {
						const n = s(),
							a = {
								sort: o.U.HOT
							},
							i = Object(c.a)(e, a.sort),
							d = n.listings.postOrder.api.error[i],
							l = n.listings.postOrder.api.pending[i],
							u = !!n.listings.postOrder.ids[i];
						return !!(l || u && !d) || (await r(Object(p.subredditDataRequested)(i, e, a, t)), !s().listings.postOrder.api.error[i])
					})(d))), (T || U) && R.push(n(Xe({
						includeDirectory: T,
						includePageData: U,
						revisionId: f,
						subredditName: d,
						wikiPageName: l
					}))), u === S.m.Settings && l && R.push(n(Object(C.c)(d, l))), l && f && k && R.push(n(y({
						comparisonRevisionId: k,
						revisionId: f,
						subredditName: d,
						wikiPageName: l
					}))), I && R.push(n(Object(E.c)({
						isRecent: !l,
						wikiPageName: l,
						subredditName: d
					}))), _ && R.push(n(Object(h.e)(d))), N && R.push(n(Object(g.e)(d))), (await Promise.all(R)).every(Boolean) || n(Object(v.f)({
						kind: L.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Ze(e, t, r)
					}))
				}, Ye = e => async (t, r) => {
					if (await t($e(e))) return;
					const {
						params: s,
						queryParams: n
					} = e, a = s.subredditName || S.e;
					t(u.l({
						title: s.wikiPageName ? `${s.wikiPageName} - ${a}` : `wiki - ${a}`
					})), await t(Ze(s, n));
					const i = Object(B.z)(r(), {
							subredditName: a
						}),
						o = r();
					i && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(b.b)(A.a.SUBREDDIT))
					}), t(Object(b.d)({
						isViewSafe: Object(U.a)([], [i])
					})))
				}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return J
			})), r.d(t, "d", (function() {
				return se
			})), r.d(t, "b", (function() {
				return ie
			})), r.d(t, "e", (function() {
				return oe
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/get.js"),
				a = r.n(n),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/apiRequestState.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/lib/constants/index.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				v = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = (e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(v.a)(Object(g.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.hb.GET,
				data: r
			});
			var k = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				w = r("./src/reddit/models/SubredditModeration/index.ts"),
				x = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/activeModalId.ts"),
				O = r("./src/reddit/selectors/bannedUser.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/subredditModeration/constants.ts"),
				y = r("./src/lib/initializeClient/installReducer.ts"),
				C = r("./node_modules/redux/es/redux.js");
			var E = (e = null, t) => {
				switch (t.type) {
					case j.o:
					case j.n:
						return null;
					case j.m:
						return t.payload;
					default:
						return e
				}
			};
			const P = {};
			var S = (e = P, t) => {
					switch (t.type) {
						case j.o: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(w.d)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case j.n:
						case j.m: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(w.d)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				T = Object(C.c)({
					error: E,
					pending: S
				});
			const U = {};
			var R = (e = U, t) => {
					switch (t.type) {
						case j.n: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, n = Object(w.d)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				L = r("./src/reddit/actions/inContextModeration.ts");
			var A = (e = null, t) => {
				switch (t.type) {
					case L.a:
						return t.payload;
					default:
						return e
				}
			};
			const D = {};
			var B = (e = D, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				K = r("./node_modules/icepick/icepick.js");
			const W = {};
			var M = (e = W, t) => {
				switch (t.type) {
					case j.l:
					case j.n: {
						const {
							subredditId: r,
							bannedUsers: s
						} = t.payload;
						return Object(K.merge)(e, {
							[r]: s
						})
					}
					case j.s: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(K.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var H = (e = null, t) => {
				switch (t.type) {
					case j.r:
					case j.q:
						return null;
					case j.p:
						return t.payload;
					default:
						return e
				}
			};
			var F = (e = !1, t) => {
					switch (t.type) {
						case j.r:
							return !0;
						case j.q:
						case j.p:
							return !1;
						default:
							return e
					}
				},
				G = Object(C.c)({
					error: H,
					pending: F
				});
			var q = (e = null, t) => {
					switch (t.type) {
						case j.r:
						case j.p:
							return null;
						case j.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				Q = Object(C.c)({
					api: G,
					result: q
				});
			const z = {};
			var X = (e = z, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: r,
								bannedUserIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case j.s: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case j.l: {
							const {
								subredditId: r,
								bannedUserIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				$ = Object(C.c)({
					api: T,
					fetchedTokens: R,
					inContext: A,
					loadMore: B,
					models: M,
					search: Q,
					userOrder: X
				});
			Object(y.a)({
				features: {
					banned: $
				}
			});
			const Z = Object(i.a)(j.o),
				Y = Object(i.a)(j.n),
				V = Object(i.a)(j.m),
				J = (e, t = {}) => async (r, s, {
					apiContext: n
				}) => {
					const a = s(),
						i = t.after || "",
						o = Object(w.d)(e, i),
						d = a.features.banned.fetchedTokens[o];
					if (a.features.banned.api.pending[o] || d) return;
					r(Z({
						subredditId: e,
						fetchedToken: i
					}));
					const c = a.subreddits.models[e].name,
						l = await h(n(), c, t);
					l.ok ? r(Y({
						...l.body,
						fetchedToken: i
					})) : r(V({
						subredditId: e,
						fetchedToken: i
					}))
				}, ee = Object(i.a)(j.r), te = Object(i.a)(j.q), re = Object(i.a)(j.p), se = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const a = s().subreddits.models[e].name,
						i = {
							username: Object(k.a)(t)
						};
					r(ee());
					const o = await h(n(), a, i);
					o.ok ? r(te(o.body)) : r(re(o.error))
				}, ne = Object(i.a)(j.l), ae = Object(i.a)(j.s), ie = (e, t, r) => async (n, i, {
					apiContext: d
				}) => {
					const c = i(),
						u = c.subreddits.models[e].url,
						v = c.subreddits.models[e].name;
					t.username = Object(k.a)(t.username), n(Object(o.h)(r));
					const g = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.hb.POST,
						data: {
							api_type: "json",
							ban_reason: r.reason,
							ban_message: r.banMessage,
							duration: r.duration,
							name: r.username,
							note: r.modNote,
							ban_context: r.contextId,
							type: "banned"
						}
					}))(d(), u, t);
					if (g.ok) {
						n(Object(o.e)(r));
						const e = {
							username: t.username
						};
						n(Object(l.f)({
							kind: x.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await h(d(), v, e);
						a.ok && n(ne(a.body))
					} else {
						n(Object(o.f)(r, g.error));
						const e = a()(g, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: x.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (r, n, {
					apiContext: i
				}) => {
					const o = n().subreddits.models[e].url,
						d = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.hb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(i(), o, t);
					if (d.ok) r(ae({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: x.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(d, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: x.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, s) => {
					const n = s();
					await Promise.all([(async () => {
						if (!Object(I.b)(u.a.BAN_USER)(n) && !Object(_.Q)(n, {
								subredditId: e
							})) {
							const t = Object(_.T)(n, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const s = Object(N.nb)(n, {
							userName: t
						});
						if (!s) return;
						const a = Object(O.h)(n, {
							subredditId: e
						});
						a && a[s.id] || await r(J(e, {
							username: t
						}))
					})()]), r(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				n = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				a = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				i = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return k
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "d", (function() {
				return y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				u = r("./src/redditGQL/operations/SubredditWikiBannedContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var b = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: r,
						pageInfo: s
					} = t, n = [], a = {};
					return r.forEach(e => {
						const {
							date: t,
							redditor: r,
							editWikiBanInfo: s
						} = e.node;
						r.id && r.name && r.icon && (a[r.id] = {
							id: r.id,
							username: r.name,
							iconUrl: r.icon.url,
							date: t,
							daysRemaining: s.daysRemaining,
							note: s.note
						}, n.push(r.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						bannedContributors: a,
						userOrder: n
					}
				},
				p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const v = Object(a.a)(f.d),
				g = Object(a.a)(f.c),
				h = Object(a.a)(f.b),
				k = e => async (t, r, s) => {
					t(v({
						subredditName: e
					}));
					const a = {
							subredditName: e
						},
						i = await m(s.gqlContext(), a);
					if (i.ok) {
						const r = i.body,
							s = r.data.subreddit && r.data.subreddit.wiki;
						if (s) {
							const r = b(s);
							t(g({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = i.error || {
							type: n.G.UNKNOWN_ERROR
						};
						t(h({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return i.ok
				}, w = Object(a.a)(f.a), x = (e, t) => async (r, n, a) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki);
							r(w({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(i.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: x(e, t)
					}));
					return d.ok
				}, I = Object(a.a)(f.e), O = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.hb.POST,
						data: {
							api_type: "json",
							name: r.username,
							type: "wikibanned",
							duration: r.duration,
							ban_reason: r.banReason,
							note: r.note
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						r(Object(i.f)({
							kind: p.b.SuccessMod,
							text: s.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const n = {
								subredditName: e,
								username: t.username
							},
							a = (await m(d.gqlContext(), n)).body;
						if (a.data.subreddit.wiki) {
							const t = b(a.data.subreddit.wiki);
							r(I({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === n.G.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), r(Object(i.f)({
							kind: p.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, _ = Object(a.a)(f.f), N = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.hb.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(i.f)({
						kind: p.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), r(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(i.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: N(e, t)
					})), u.ok
				}, j = Object(a.a)(f.g), y = (e, t) => async (r, n, a) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki),
								n = Object.keys(s.bannedContributors)[0];
							r(j({
								subredditName: e.toLowerCase(),
								bannedContributor: s.bannedContributors[n]
							}))
						}
					} else r(Object(i.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_CONTRIBUTORS_PENDING",
				n = "WIKI_CONTRIBUTORS_LOADED",
				a = "WIKI_CONTRIBUTORS_FAILED",
				i = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return k
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "d", (function() {
				return y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				u = r("./src/redditGQL/operations/SubredditWikiContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var b = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: r,
						pageInfo: s
					} = t, n = [], a = {};
					return r.forEach(e => {
						const {
							date: t,
							redditor: r
						} = e.node;
						r.id && r.name && r.icon && (a[r.id] = {
							id: r.id,
							username: r.name,
							iconUrl: r.icon.url,
							date: t
						}, n.push(r.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						contributors: a,
						userOrder: n
					}
				},
				p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const v = Object(a.a)(f.d),
				g = Object(a.a)(f.c),
				h = Object(a.a)(f.b),
				k = e => async (t, r, s) => {
					t(v({
						subredditName: e
					}));
					const a = {
							subredditName: e
						},
						i = await m(s.gqlContext(), a);
					if (i.ok) {
						const r = i.body,
							s = r.data.subreddit && r.data.subreddit.wiki;
						if (s) {
							const r = b(s);
							t(g({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = i.error || {
							type: n.G.UNKNOWN_ERROR
						};
						t(h({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return i.ok
				}, w = Object(a.a)(f.a), x = (e, t) => async (r, n, a) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki);
							r(w({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(i.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: x(e, t)
					}));
					return d.ok
				}, I = Object(a.a)(f.e), O = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.hb.POST,
						data: {
							api_type: "json",
							name: r,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						r(Object(i.f)({
							kind: p.b.SuccessMod,
							text: s.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const n = {
								subredditName: e,
								username: t
							},
							o = (await m(d.gqlContext(), n)).body;
						if (o.data.subreddit.wiki) {
							const t = b(o.data.subreddit.wiki),
								s = Object.keys(t.contributors)[0];
							!!a().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || r(I({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === n.G.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === n.G.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), r(Object(i.f)({
							kind: p.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, _ = Object(a.a)(f.f), N = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.hb.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(i.f)({
						kind: p.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), r(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(i.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: N(e, t)
					})), u.ok
				}, j = Object(a.a)(f.g), y = (e, t) => async (r, n, a) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki),
								n = Object.keys(s.contributors)[0];
							r(j({
								subredditName: e.toLowerCase(),
								contributor: s.contributors[n]
							}))
						}
					} else r(Object(i.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				n = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				a = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				i = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return I
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "d", (function() {
				return E
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/subredditSettings.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				u = r("./src/reddit/constants/headers.ts"),
				m = r("./src/reddit/models/SubredditWikiPage/index.ts"),
				b = r("./src/redditGQL/operations/SubredditWikiPageSettings.json");
			const p = (e, t) => Object(c.a)(e, {
					...b,
					variables: t
				}),
				f = {
					[m.a.Inherit]: "0",
					[m.a.Contributors]: "1",
					[m.a.Mods]: "2"
				};
			var v = e => {
					const {
						editPermissions: t,
						editorsInfo: r,
						isVisible: s
					} = e, {
						edges: n,
						pageInfo: a
					} = r, i = [];
					return n.forEach(e => {
						e.node.name && e.node.icon && i.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: i,
						isVisible: s,
						afterToken: a.hasNextPage ? a.endCursor : null
					}
				},
				g = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const x = Object(a.a)(w.c),
				I = (e, t) => async (r, s, n) => {
					const a = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(n.gqlContext(), a),
						d = Object(k.E)(s(), e);
					if (Object(k.V)(s(), d) || await r(Object(i.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = v(t.page.settings);
							r(x({
								pageKey: Object(g.a)(a),
								settings: e
							}))
						}
					}
					return o.ok
				}, O = Object(a.a)(w.b), _ = (e, t, r) => async (n, a, i) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: r
						},
						c = await p(i.gqlContext(), d);
					if (c.ok) {
						const r = c.body,
							s = r.data.subreddit && r.data.subreddit.wiki;
						if (s && s.page) {
							const r = v(s.page.settings),
								{
									editorsInfo: a,
									afterToken: i
								} = r;
							n(O({
								editorsInfo: a,
								afterToken: i,
								pageKey: Object(g.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else n(Object(o.f)({
						kind: h.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e, t, r)
					}));
					return c.ok
				}, N = Object(a.a)(w.d), j = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: r,
					subredditName: s
				}) => async (a, i, o) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: n.hb.POST,
						data: {
							permlevel: f[e.editPermissions],
							listed: e.isVisible ? "on" : void 0
						}
					}))({
						context: o.apiContext(),
						editPermissions: e,
						isVisible: t,
						wikiPageName: r,
						subredditName: s
					});
					return c.ok && a(N({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(g.a)({
							wikiPageName: r,
							subredditName: s
						})
					})), c.ok
				}, y = ({
					subredditName: e,
					username: t,
					wikiPageName: r
				}) => async (a, i, c) => {
					const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: n.hb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: c.apiContext(),
						wikiPageName: r,
						subredditName: e,
						username: t
					});
					if (m.ok) a(Object(o.f)({
						kind: h.b.SuccessCommunity,
						text: "User successfully added"
					})), await a(I(e, r));
					else if (m.error) {
						const e = m.error.type;
						let t = s.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === n.G.NOT_FOUND_ERROR && (t = s.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), a(Object(o.f)({
							kind: h.b.Error,
							text: t
						}))
					}
					return m.ok
				}, C = Object(a.a)(w.a), E = ({
					subredditName: e,
					username: t,
					wikiPageName: r
				}) => async (s, a, i) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
						method: n.hb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: i.apiContext(),
						wikiPageName: r,
						subredditName: e,
						username: t
					});
					return c.ok && (s(Object(o.f)({
						kind: h.b.SuccessCommunity,
						text: "User has been successfully removed"
					})), s(C({
						username: t,
						pageKey: Object(g.a)({
							wikiPageName: r,
							subredditName: e
						})
					}))), c.ok
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return o
			}));
			const s = "WIKI_REVISIONS_PENDING",
				n = "WIKI_REVISIONS_LOADED",
				a = "WIKI_REVISIONS_FAILED",
				i = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "b", (function() {
				return E
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/WikiRevisions.json");
			var l = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				m = r("./src/reddit/constants/headers.ts"),
				b = r("./src/reddit/helpers/wiki/wikiRevision.ts");
			var p = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: n.hb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var f = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: n.hb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var v = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						r = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!r) throw new Error("Invalid response");
					return (e => {
						const t = {},
							r = [];
						return e.edges.forEach(e => {
							const s = e.node;
							t[s.id] = s, r.push(s.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: r
						}
					})(r)
				},
				g = r("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				h = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/selectors/subredditWiki.ts"),
				x = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const I = Object(a.a)(x.d),
				O = Object(a.a)(x.c),
				_ = Object(a.a)(x.b),
				N = e => async (t, r, a) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: b
					} = e, p = r(), f = Object(g.a)(e), h = Object(w.p)(p, {
						listingKey: f
					});
					if (!o && !!h) return !0;
					const x = h && h.pageInfo.endCursor || void 0;
					if (!(!h || h.pageInfo.hasNextPage)) return !0;
					const j = {
							after: x,
							isRecent: u,
							subredditName: m,
							wikiPageName: b
						},
						y = {
							key: f,
							options: j
						};
					t(I(y));
					const C = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(a.gqlContext(), j);
					if (C.ok) {
						const e = C.body;
						if (e.data.subreddit) {
							const r = v(e.data);
							t(O({
								...y,
								...r
							}))
						}
					} else {
						const r = C.error || {
							type: n.G.UNKNOWN_ERROR
						};
						t(_({
							...y,
							error: r
						})), l && t(Object(i.f)({
							kind: k.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: N(e)
						}))
					}
					return C.ok
				}, j = Object(a.a)(x.a), y = e => async (t, r, n) => {
					const {
						subredditName: a,
						wikiPageName: d
					} = e, c = Object(h.a)({
						...e,
						revisionId: void 0
					}), l = Object(g.a)({
						...e,
						isRecent: !1
					}), u = Object(g.a)({
						...e,
						isRecent: !0
					}), m = Object(w.p)(r(), {
						listingKey: l
					}), b = m && m.ids[0];
					if ((await f(n.apiContext(), e)).ok) {
						const e = (await Object(o.a)(n.gqlContext(), {
								includePageData: !0,
								subredditName: a,
								wikiPageName: d
							})).body,
							r = e.data.subreddit && e.data.subreddit.wiki,
							m = r && r.page;
						if (!m || !m.revision) return;
						if (m.revision.id === b) return void t(Object(i.f)({
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
							subredditName: a,
							wikiPageName: d
						}))
					} else t(Object(i.f)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e)
					}))
				}, C = Object(a.a)(x.e), E = e => async (t, r, n) => {
					const a = await p(n.apiContext(), e);
					if (a.ok) {
						const r = a.body.status;
						t(C({
							revisionId: e.revisionId,
							isHidden: r
						}))
					} else t(Object(i.f)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e)
					}))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, n = r("./node_modules/react/index.js"),
				a = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(s || (s = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: n,
				contextId: i,
				priority: o,
				Icon: d,
				redditStyle: u,
				isFullWidth: m,
				eventSource: b,
				onClick: p,
				onAddUserToQuickReplyList: f
			}) => {
				return a.a.createElement(c.q, {
					onClick: t => {
						if (p && p(t), e(), b === s.awardNotification) return f();
						n(Object(l.b)(i))
					},
					className: r,
					text: t,
					priority: o,
					Icon: d,
					redditStyle: u,
					isFullWidth: m
				})
			};
			u.displayName = "ChatButton";
			const m = Object(i.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(o.b)(r, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(o.a)(r))
				}
			}));
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/ImageInput/index.tsx"),
				o = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/models/ApiRequestState/index.ts"),
				l = r("./src/reddit/components/EditableImage/index.m.less"),
				u = r.n(l);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js"), b = 80;
			class p extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						apiRequestId: null
					}, this.selectFile = e => {
						const t = Object(c.b)();
						this.setState({
							apiRequestId: t
						}), this.props.onFileSelected(e, t)
					}
				}
				render() {
					const {
						altText: e,
						children: t,
						className: r,
						editButtonClassName: s,
						isLoading: c,
						imageUrl: l
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(u.a.Container, r)
					}, n.a.createElement("label", {
						className: u.a.HitBox
					}, n.a.createElement("span", {
						className: u.a.ImageContainer,
						role: "presentation"
					}, l ? n.a.createElement("img", {
						alt: e,
						className: u.a.Image,
						src: l
					}) : t), n.a.createElement(i.a, {
						className: u.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !c && n.a.createElement("div", {
						className: Object(a.a)(u.a.EditButton, s)
					}, n.a.createElement(d.a, {
						name: "add_media",
						className: u.a.EditIcon
					}))), c && n.a.createElement(o.a, {
						className: u.a.LoadingIcon,
						sizePx: b
					}))
				}
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/snoovatar.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/selectors/gold/awardIcon.ts"),
				l = r("./src/reddit/selectors/meta.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				m = r("./src/reddit/selectors/profile.ts"),
				b = r("./src/reddit/selectors/structuredStyles.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/tooltip.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/selectors/userFlair.ts"),
				h = r("./src/reddit/selectors/userPrefs.ts"),
				k = r("./node_modules/fbt/lib/FbtPublic.js"),
				w = r("./src/config.ts"),
				x = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				I = r("./src/lib/lessComponent.tsx"),
				O = r("./src/lib/prettyPrintNumber/index.ts"),
				_ = r("./src/lib/timeAgo/index.ts"),
				N = r("./src/reddit/components/ChatButton/index.tsx"),
				j = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = r("./src/reddit/components/SubscribeButton/index.tsx"),
				E = r("./src/reddit/components/UserIcon/index.tsx"),
				P = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				S = r("./src/reddit/icons/fonts/Info/index.tsx"),
				T = r("./src/reddit/icons/svgs/Admin/index.tsx");
			var U = e => n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				R = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				L = r("./src/reddit/models/Gold/Award.ts"),
				A = r("./src/reddit/models/User/index.ts"),
				D = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				B = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				K = r("./src/reddit/actions/inContextModeration.ts"),
				W = r("./src/reddit/actions/modal.ts"),
				M = r("./src/reddit/actions/subredditModeration/ban.ts"),
				H = r("./src/reddit/constants/modals.ts"),
				F = r("./src/reddit/components/Hovercards/helpers.ts"),
				G = r("./src/reddit/icons/fonts/index.tsx"),
				q = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Q = r("./src/reddit/selectors/bannedUser.ts"),
				z = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				X = r.n(z);
			const {
				fbt: $
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = Object(i.c)({
				hasModMailPermissions: Object(u.a)(q.c.mail),
				isUserBanned: (e, t) => !!Object(Q.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(v.nb)(e, {
					userName: t.username
				})
			});
			class Y extends n.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: s,
						onUnbanUser: a,
						sendEvent: i,
						toggleBanModal: o,
						toggleMuteModal: d
					} = this.props;
					return n.a.createElement("div", {
						className: e
					}, s ? n.a.createElement(F.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), i(P.e(t))
						}
					}, n.a.createElement(G.a, {
						name: "ban",
						isFilled: !0,
						className: X.a.icon
					}), $._("Unban User", null, {
						hk: "1aASyW"
					})) : n.a.createElement(F.a, {
						role: "button",
						onClick: () => {
							o(), i(P.a(t))
						}
					}, n.a.createElement(G.a, {
						name: "ban",
						className: X.a.icon
					}), $._("Ban User", null, {
						hk: "3OhuLx"
					})), r && n.a.createElement(F.a, {
						role: "button",
						onClick: () => {
							d(), i(P.d(t))
						}
					}, n.a.createElement(G.a, {
						name: "mod_mute",
						className: X.a.icon
					}), $._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var V = Object(a.b)(Z, (e, {
					username: t,
					subredditId: r,
					contextId: s
				}) => ({
					onUnbanUser: t => e(Object(M.e)(r, t)),
					requestUserBanInfo: () => e(Object(M.c)(r, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(K.c)({
							username: t,
							subredditId: r,
							contextId: s
						})), e(Object(M.a)(r, t))
					},
					toggleMuteModal: () => {
						e(Object(K.d)({
							username: t,
							subredditId: r,
							contextId: s
						})), e(Object(W.i)(H.a.MUTE_USER))
					}
				}))(Y),
				J = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var te = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(J.g)(t.subredditId, t.username))
				}))(e => n.a.createElement(F.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(P.c(e.contextId))
					}
				}, n.a.createElement(G.a, {
					name: "tag",
					className: X.a.icon
				}), ee._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				re = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				se = r.n(re);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = I.a.wrapped(E.a, "UserIcon", se.a),
				ie = I.a.wrapped(C.a, "SubscribeButton", se.a),
				oe = I.a.wrapped(N.b, "ChatButton", se.a),
				de = I.a.wrapped(U, "KarmaIcon", se.a),
				ce = I.a.wrapped(R.a, "PremiumIcon", se.a),
				le = I.a.wrapped(x.a, "UserNameLink", se.a),
				ue = I.a.div("UserNameMetaData", se.a),
				me = I.a.div("MetaDataItem", se.a),
				be = I.a.div("Bullet", se.a),
				pe = I.a.div("UserNameContainer", se.a),
				fe = I.a.div("UserInfoContainer", se.a),
				ve = I.a.div("PostKarma", se.a),
				ge = I.a.div("CommentKarma", se.a),
				he = I.a.div("KarmaGrid", se.a),
				ke = I.a.div("GenericKarma", se.a),
				we = I.a.a("InfoLink", se.a),
				xe = I.a.div("KarmaCount", se.a),
				Ie = I.a.div("KarmaLabel", se.a),
				Oe = I.a.div("GenericKarmaLabel", se.a),
				_e = I.a.div("BannerImage", se.a),
				Ne = I.a.div("UserContainer", se.a),
				je = I.a.div("BottomSpacer", se.a),
				ye = I.a.div("Container", se.a),
				Ce = e => n.a.createElement("div", null, n.a.createElement("div", null, n.a.createElement(le, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && n.a.createElement(T.a, {
					className: se.a.adminIcon,
					title: k.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && n.a.createElement(x.a, {
					to: "/premium"
				}, n.a.createElement(ce, null))), n.a.createElement(ue, null, e.user.username && n.a.createElement(me, null, e.user.username, n.a.createElement(be, null, "•")), n.a.createElement(me, null, Object(_.d)(e.user.createdUtc || e.user.created)))),
				Ee = e => {
					const {
						showAwardKarma: t,
						user: r
					} = e;
					return t ? n.a.createElement(he, null, n.a.createElement(ke, null, n.a.createElement(xe, null, Object(O.b)(r.postKarma)), n.a.createElement(Oe, null, k.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [k.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), n.a.createElement(ke, null, n.a.createElement(xe, null, Object(O.b)(r.commentKarma)), n.a.createElement(Oe, null, k.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [k.fbt._plural(r.commentKarma)], {
						hk: "3gKRx9"
					}))), n.a.createElement(ke, null, n.a.createElement(xe, null, Object(O.b)(r.awardeeKarma)), n.a.createElement(Oe, null, k.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [k.fbt._plural(r.awardeeKarma)], {
						hk: "3nzm9q"
					}), n.a.createElement(we, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(S.a, {
						className: se.a.infoIcon
					})))), n.a.createElement(ke, null, n.a.createElement(xe, null, Object(O.b)(r.awarderKarma)), n.a.createElement(Oe, null, k.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [k.fbt._plural(r.awarderKarma)], {
						hk: "4zXN3B"
					}), n.a.createElement(we, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement(S.a, {
						className: se.a.infoIcon
					}))))) : n.a.createElement(fe, null, n.a.createElement(de, null), n.a.createElement(ve, null, n.a.createElement(xe, null, Object(O.b)(r.postKarma)), n.a.createElement(Ie, null, k.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [k.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), n.a.createElement(ge, null, n.a.createElement(xe, null, Object(O.b)(r.commentKarma)), n.a.createElement(Ie, null, k.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [k.fbt._plural(r.commentKarma)], {
						hk: "3gKRx9"
					}))))
				},
				Pe = e => {
					const {
						className: t,
						contextId: r,
						currentUser: s,
						hideNSFWPref: a,
						hoverId: i,
						isLoggedIn: o,
						onClickSnoovatar: d,
						origin: c,
						moderatorPermissions: l,
						prefersReducedAnimations: u,
						sendEvent: m,
						showAwardKarma: b,
						style: p,
						subredditId: f,
						topAwardIcon: v,
						userName: g,
						user: h,
						userFlair: x,
						userIsBanned: I,
						userProfileStyles: O,
						acceptChats: _
					} = e;
					if (!h) return n.a.createElement(ye, {
						style: p
					});
					const N = !!s && Object(A.e)(s) === g,
						y = !!(null == s ? void 0 : s.snoovatarFullBodyAsset),
						C = h.accountIcon || `${w.a.assetPath}/img/snoo_user_placeholder.png`,
						E = l && l.flair,
						S = l && l.access,
						T = x && x.templateIds && x.templateIds.length > 0,
						U = x && x.displaySettings && x.displaySettings.isEnabled,
						{
							awardedLastMonth: R
						} = h,
						L = !!h.snoovatarFullBodyAsset,
						K = h.isNSFW && a;
					let W;
					return W = L ? !K && O && O.bannerBackgroundImage || void 0 : K ? `${w.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, n.a.createElement(ye, {
						className: t,
						id: i,
						style: p
					}, !L && W && n.a.createElement(_e, {
						style: {
							backgroundImage: `url('${W}')`
						}
					}), n.a.createElement(Ne, null, L ? n.a.createElement(B.a, {
						bannerBackgroundImage: W,
						compact: !0,
						currentUserHasSnoovatar: y,
						isEmployee: h.isEmployee,
						isGold: h.isGold,
						isNSFW: h.isNSFW,
						isOwnProfile: N,
						onClickSnoovatar: d,
						prefersReducedAnimations: !!u,
						snoovatarUrl: h.snoovatarFullBodyAsset,
						title: null,
						userCreated: h.created,
						username: g,
						url: `/user/${e.userName}/`
					}) : n.a.createElement(pe, null, n.a.createElement(ae, {
						iconUrl: C,
						isNSFW: h.isNSFW,
						userName: g
					}), n.a.createElement(Ce, {
						origin: c,
						user: h,
						userName: g
					})), n.a.createElement(Ee, {
						showAwardKarma: b,
						user: h
					}), R && n.a.createElement(D.a, {
						recentAwardings: R,
						topAwardIcon: v,
						username: g
					}), o && !N && !I && _ && n.a.createElement(oe, {
						contextId: r,
						userId: h.id,
						text: k.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						})
					}), h.hasUserProfile && !I && !N && n.a.createElement(ie, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(P.g)(e ? "unfollow" : "follow", r),
						small: !0
					})), S && r && !N && f && n.a.createElement(V, {
						contextId: r,
						subredditId: f,
						sendEvent: m,
						username: g
					}), E && r && T && U && f && n.a.createElement(te, {
						contextId: r,
						subredditId: f,
						sendEvent: m,
						username: g
					}), n.a.createElement(j.i, {
						contextId: r,
						subredditId: f,
						user: h
					}), !(S || o) && n.a.createElement(je, null))
				},
				Se = Object(y.a)(Pe),
				Te = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return n.a.createElement(Se, ne({
						isOpen: t
					}, e))
				};
			Te.WrappedComponent = Pe;
			var Ue = Te;
			const Re = Object(i.c)({
					activeTooltipId: f.a,
					currentUser: v.j,
					isLoggedIn: v.K,
					hideNSFWPref: v.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.k)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: h.c,
					showAwardKarma: (e, t) => {
						return Object(f.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(c.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: v.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(g.c)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(p.l)(t) && Object(p.eb)(e, t),
					userProfileStyles: (e, t) => Object(b.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(m.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					}
				}),
				Le = Object(a.b)(Re, (e, t) => ({
					onClickSnoovatar: () => e(Object(o.b)("user_hovercard")),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Le(e => n.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, n.a.createElement(Ue, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userIsBanned: e.userIsBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return n.a.createElement(a.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, n.a.createElement(i.a, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, r) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return w
			})), r.d(t, "b", (function() {
				return x
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/lessComponent.tsx"),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/profile/index.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(o.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(i.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				b = r("./src/reddit/actions/subreddit.ts");
			const p = Object(o.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var f = Object(i.b)(p, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(b.u)(t.authorOrSubredditName))
					}
				})),
				v = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				g = r.n(v);
			class h extends n.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
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
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return n.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const k = a.a.wrapped(h, "HoverDiv", g.a),
				w = m(k),
				x = f(k)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/Inline/index.tsx"),
				a = r("./src/reddit/components/Hovercards/helpers.m.less"),
				i = r.n(a);
			const o = s.a.wrapped(n.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: s,
						tooltipIdPrefix: n,
						tooltipType: a
					} = e;
					let i = n;
					return r && (i = `${i}--${r}`), a && (i = `${i}--${a}`), t && (i = `${i}--${t}`), s && (i = `${i}--${s}`), i
				}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = r("./src/reddit/icons/fonts/Info/index.tsx"),
				c = r("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = r.n(c);
			const u = Object(a.a)(o.a),
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
						className: Object(i.a)(e.className, l.a.textTooltip),
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
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/config.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(o);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends n.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: s,
						totalCount: o
					} = t, l = s.description ? s.description : s.name;
					return n.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, n.a.createElement("div", {
						className: d.a.iconColumn
					}, n.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), o > 1 && n.a.createElement("span", {
						className: d.a.count
					}, `+${Object(i.b)(o-1)}`)), n.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", s.name), c._plural(o)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				i = r("./src/reddit/models/Image/index.tsx"),
				o = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(l);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(i.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: n,
						isNSFW: i,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? a.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(d.e)(r) === c ? a.a.createElement(o.a, {
						altText: s.fbt._("{userName} banner image", [s.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : i && n ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const o = Object(n.c)({
					currentUser: i.j,
					hideNSFWPref: i.C
				}),
				d = Object(s.b)(o, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.z)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(c);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: r,
				isOwnProfile: s,
				onClick: c
			}) {
				return n.a.createElement(i.q, {
					onClick: c,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && s,
						[l.a.compactButtonLayout]: e
					}, r)
				}, t ? n.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : n.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : s ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? n.a.createElement("div", {
					className: l.a.chevronIcon
				}) : n.a.createElement(o.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				i = r("./src/reddit/icons/svgs/Close/index.tsx"),
				o = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: s,
				isDeletingBanner: d,
				onDeleteBanner: l
			}) {
				return n.a.createElement("div", {
					className: c.a.bannerWrapper
				}, n.a.createElement(o.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), s && e && (d ? n.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : n.a.createElement(i.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/timeAgo/index.ts"),
				o = r("./src/reddit/controls/InternalLink/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: s,
				username: c,
				...l
			}) {
				const u = t ? a.fbt._("{username} · {time since account creation}", [a.fbt._param("username", `u/${c}`), a.fbt._param("time since account creation", Object(i.d)(s, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${c}`;
				return r ? n.a.createElement(o.a, d({}, l, {
					className: e,
					to: r
				}), u) : n.a.createElement("span", d({}, l, {
					className: e
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				o = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: r,
				isGold: a,
				isNSFW: l
			}) => i.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, r && i.a.createElement(o.a, {
				className: u.a.snoovatarAdminIcon,
				title: n.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), a && i.a.createElement("a", {
				title: n.fbt._("{username} has Reddit Premium", [n.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${s.a.redditUrl}/premium`
			}, i.a.createElement(c.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && i.a.createElement(d.a, {
				className: u.a.snoovatarNsfwIcon,
				title: n.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = r("./node_modules/react-router/esm/react-router.js"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				f = r("./src/reddit/routes/avatar/index.ts"),
				v = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				g = r.n(v);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var k = Object(m.i)(({
					onClick: e,
					username: t,
					location: r
				}) => n.a.createElement(u.a, {
					to: `${f.a}/${t}`
				}, n.a.createElement(b.q, {
					onClick: e,
					className: Object(i.a)(g.a.snoovatarButton, g.a.snoovatarExtraPadding, g.a.compactButtonLayout)
				}, n.a.createElement(p.a, {
					className: g.a.shirtIcon
				}), h._("Try this Look", null, {
					hk: "dOuPb"
				}), n.a.createElement("div", {
					className: g.a.chevronIcon
				})))),
				w = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				x = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				I = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				O = r.n(I);
			const _ = 25;

			function N(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function j(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const y = N("particleDelay", O.a),
				C = N("particleX", O.a),
				E = N("particleFloat", O.a),
				P = () => {
					const e = j(C),
						t = j(E),
						r = j(y);
					return Object(i.a)(O.a.particle, e, t, r)
				};
			class S extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < _; t++) e.push(this.createParticle(t));
					return n.a.createElement("div", {
						role: "presentation",
						className: O.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return n.a.createElement("div", {
						key: e,
						className: `${P()}`
					})
				}
			}
			var T = S,
				U = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				R = r.n(U),
				L = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: s,
				isDeletingBanner: u,
				isEmployee: m,
				isGold: b,
				isNSFW: p,
				isOwnProfile: f,
				onClickSnoovatar: v,
				onDeleteBanner: g,
				prefersReducedAnimations: h,
				snoovatarUrl: I,
				title: _,
				userCreated: N,
				username: j,
				url: y
			}) => {
				const C = Object(a.e)(e => !f && !!I && Object(c.e)(e));
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(w.a, {
					bannerBackgroundImage: e,
					editMode: !!s,
					isNSFW: p,
					username: j,
					isDeletingBanner: !!u,
					onDeleteBanner: g
				}), n.a.createElement("div", {
					className: O.a.snoovatarContainer
				}, b && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: O.a.topGlow
				}), n.a.createElement("div", {
					className: O.a.bottomGlow
				}), !h && n.a.createElement(T, null)), n.a.createElement("img", {
					className: Object(i.a)(O.a.snoovatar, {
						[O.a.premiumGlow]: b
					}),
					src: I || void 0
				})), !s && f && n.a.createElement(o.a, {
					to: "/settings/profile",
					className: O.a.snoovatarSettingsLink
				}, n.a.createElement(d.a, {
					name: "settings",
					className: R.a.settingsIcon
				})), n.a.createElement(L.a, {
					isEmployee: m,
					isGold: b,
					isNSFW: p,
					title: _,
					username: j
				}), n.a.createElement(x.a, {
					className: O.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: j,
					userCreated: N,
					url: y
				}), (f || !r && !!I) && n.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: f,
					onClick: v
				}), C && n.a.createElement(k, {
					username: j
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			}));
			var s = r("./node_modules/lodash/throttle.js"),
				n = r.n(s),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = r("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = r("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = r("./src/reddit/controls/Dropdown/index.m.less"),
				b = r.n(m),
				p = r("./src/reddit/controls/Dropdown/row.m.less"),
				f = r.n(p);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends i.a.Component {
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
					}, r = Object(o.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: r
					}, e.children), i.a.createElement("span", {
						className: Object(o.a)(f.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: r
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(o.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: b.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const r = Object(o.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(g, v({
					className: r
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, r) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, r) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = r.n(a);
			t.a = s.a.wrapped(n.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/SubredditWiki.json");
			const a = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			})
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, r) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/classNames/index.ts"),
				n = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = r.n(n);
			const i = ({
					isLoading: e
				}) => Object(s.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				o = e => Object(s.a)(a.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/sortBy.js"),
				n = r.n(s),
				a = r("./src/reddit/constants/wiki.ts");
			const i = e => {
				return n()(e, e => `${e.path}/`.startsWith(`${a.i}/`) ? `\0${e.path}` : e.path).filter(e => !a.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					r = [];
				return i(e).forEach(e => {
					const s = {
							...e,
							children: []
						},
						n = s.parent ? t.get(s.parent) : null;
					n ? n.children.push(s) : r.push(s), t.set(s.path, s)
				}), r
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: r,
					subredditName: s,
					wikiPageName: n
				} = e;
				return `[${s}]--[${n}]--[rev1:${r}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/reddit/constants/wiki.ts");
			const n = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${s.c}}$`),
				a = /^[-\w]+$/;
			var i;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(i || (i = {}));
			const o = e => {
					if (!a.test(e.toLowerCase())) return i.InvalidPageName
				},
				d = (e, t) => {
					const r = e.toLowerCase(),
						a = r.split("/")[0],
						o = s.b.has(a),
						d = s.f.has(a) && r !== s.h && r !== s.k;
					if (o || d) return i.RestrictedPageName;
					if (!n.test(r)) return i.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === r)) return i.PageAlreadyExists
					}
					return r.length > s.d ? i.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				n = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(a.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				o = r.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(e.className, o.a.admin, {
					[o.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), n.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				stopColor: "#EC0623"
			}), n.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = function({
				className: e
			}) {
				return n.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "p", (function() {
				return c
			})), r.d(t, "q", (function() {
				return l
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "m", (function() {
				return v
			})), r.d(t, "k", (function() {
				return g
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "g", (function() {
				return I
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const a = [],
				i = (e, t) => {
					var r;
					const {
						subredditName: s
					} = t;
					if (null === (r = e.pages) || void 0 === r ? void 0 : r.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.subreddits.api.wiki.pending[r.toLowerCase()]
				},
				d = (e, t) => {
					var r;
					const s = Object(n.a)(t);
					if (null === (r = e.pages) || void 0 === r ? void 0 : r.subredditWiki) return e.pages.subredditWiki.pages[s]
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
				m = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				b = (e, {
					key: t
				}) => e.pages.subredditWiki.diff[t],
				p = (e, t) => {
					const r = Object(n.a)(t);
					return e.pages.subredditWiki.pageSettings[r]
				},
				f = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[r.toLowerCase()]
				},
				v = Object(s.a)((e, {
					subredditName: t
				}) => {
					const r = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiContributors.listing,
						n = s.userOrder[r],
						i = s.models[r];
					return n ? n.map(e => i[e]) : a
				}),
				g = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[r.toLowerCase()]
				},
				h = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[r.toLowerCase()]
				},
				k = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[r.toLowerCase()]
				},
				w = Object(s.a)((e, {
					subredditName: t
				}) => {
					const r = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiBannedContributors.listing,
						n = s.userOrder[r],
						i = s.models[r];
					return n ? n.map(e => i[e]) : a
				}),
				x = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[r.toLowerCase()]
				},
				I = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[r.toLowerCase()]
				}
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
		"./src/redditGQL/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/redditGQL/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.7e779f0d7b0376656752.js.map