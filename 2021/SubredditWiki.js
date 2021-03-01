// https://www.redditstatic.com/desktop2x/SubredditWiki.a94cf0a92e6480f650c3.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
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
		"./src/lib/intersectionObserver/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			})), i.d(t, "b", (function() {
				return o
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const n = new Map,
				r = new Map;
			"undefined" != typeof window && (i("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						i = e.intersectionRatio > 0;
					if (i !== !!r.get(t)) {
						r.set(t, i);
						const s = n.get(t);
						if (s) {
							s(e, i && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						n.set(e, t), s && s.observe(e)
					} catch (i) {
						0
					}
				},
				o = e => {
					try {
						n.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var s = i("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				n = i("./src/reddit/helpers/routeKey/index.ts"),
				r = i("./src/reddit/helpers/trackers/screenview.ts"),
				a = i("./src/telemetry/index.ts"),
				o = i("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const i = t(),
					{
						currentPage: d
					} = i.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(s.a)(i),
					u = Object(n.b)(c, i, l);
				u && a.c.has(u) && Object(r.k)(c, i, o.TimerType.InApp, a.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "subredditWikiDataPending", (function() {
				return ze
			})), i.d(t, "subredditWikiDataLoaded", (function() {
				return Ge
			})), i.d(t, "subredditWikiDataFailed", (function() {
				return qe
			})), i.d(t, "fetchSubredditWikiData", (function() {
				return Je
			})), i.d(t, "handleWikiRedirects", (function() {
				return $e
			})), i.d(t, "subredditWikDataRequested", (function() {
				return Xe
			})), i.d(t, "subredditWikiPageRequested", (function() {
				return Ze
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/lodash/isEmpty.js"),
				r = i.n(n),
				a = i("./node_modules/react-router-redux/es/index.js"),
				o = i("./src/lib/constants/index.ts"),
				d = i("./src/lib/makeActionCreator/index.ts"),
				c = i("./src/lib/makeListingKey/index.ts"),
				l = i("./src/config.ts"),
				u = i("./src/reddit/actions/platform.ts"),
				m = i("./src/reddit/helpers/path/index.ts");
			var b = i("./src/reddit/actions/ads/index.ts"),
				p = i("./src/reddit/actions/pages/subreddit.ts"),
				h = i("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				k = i("./src/reddit/actions/toaster.ts"),
				g = i("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				f = i("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				x = i("./src/lib/makeGqlRequest/index.ts"),
				w = i("./src/graphql/operations/WikiComparisonDiff.json"),
				v = i("./src/reddit/helpers/wiki/wikiRevision.ts");
			var N = i("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				O = i("./src/reddit/selectors/subredditWiki.ts");
			const _ = Object(d.a)("WIKI_DIFF_PENDING"),
				y = Object(d.a)("WIKI_DIFF_LOADED"),
				E = Object(d.a)("WIKI_DIFF_FAILED"),
				C = e => async (t, i, s) => {
					const n = i(),
						r = Object(N.a)(e),
						a = Object(O.i)(n, {
							key: r
						});
					if (a && (a.pending || !a.error)) return !0;
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
							type: o.E.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.E.UNKNOWN_ERROR
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
				T = i("./src/reddit/constants/wiki.ts"),
				I = i("./src/reddit/endpoints/page/subredditWiki.ts"),
				S = i("./src/reddit/helpers/brandSafety/index.ts"),
				W = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				L = i("./src/reddit/models/Toast/index.ts"),
				M = i("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				D = i("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				A = i("./src/reddit/selectors/subreddit.ts"),
				B = i("./src/lib/initializeClient/installReducer.ts"),
				H = i("./node_modules/redux/es/redux.js");
			const U = {};
			var F = (e = U, t) => {
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
			const K = {};
			var z = (e = K, t) => {
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
								subredditName: a
							} = n;
							return {
								...e, [a.toLowerCase()]: r
							};
						default:
							return e
					}
				},
				G = i("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const q = {};
			var V = (e = q, t) => {
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
						case G.a: {
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
			var X = (e = $, t) => {
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
							const a = [...r.editorsInfo, ...i];
							return {
								...e,
								[n]: {
									...r,
									editorsInfo: a,
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
				Z = i("./src/lib/omitKey/index.ts");
			const Y = {};
			var Q = (e = Y, t) => {
				switch (t.type) {
					case G.b: {
						const {
							key: i,
							error: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					case G.d:
					case G.c: {
						const {
							key: i
						} = t.payload;
						return Object(Z.a)(e, i)
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case G.d:
						case G.b:
						case G.c: {
							const {
								key: i
							} = t.payload, s = t.type === G.d;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				ie = Object(H.c)({
					error: Q,
					pending: te
				}),
				se = i("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ne = {};
			var re = (e = ne, t) => {
				switch (t.type) {
					case G.c: {
						const {
							key: i,
							options: s,
							pageInfo: n,
							revisionsIds: r
						} = t.payload, a = e[i], o = s.after && a ? [...a.ids, ...r] : r;
						return {
							...e,
							[i]: {
								ids: o,
								pageInfo: n
							}
						}
					}
					case G.a: {
						const {
							page: {
								revision: i
							},
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: n
						} = t.payload, r = e[s];
						return r && i ? {
							...Object(Z.a)(e, n),
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
			const ae = {};
			var oe = (e = ae, t) => {
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
						case G.c: {
							const {
								revisions: i
							} = t.payload;
							return {
								...e,
								...i
							}
						}
						case G.a: {
							const {
								page: i
							} = t.payload, s = i.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case G.e: {
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
				de = Object(H.c)({
					api: ie,
					listings: re,
					models: oe
				}),
				ce = i("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const le = {};
			var ue = (e = le, t) => {
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
			var be = (e = me, t) => {
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
						return Object(Z.a)(e, i)
					}
					default:
						return e
				}
			};
			const pe = {};
			var he = (e = pe, t) => {
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
				ke = Object(H.c)({
					error: be,
					pending: he
				});
			const ge = {};
			var fe = (e = ge, t) => {
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
							} = t.payload, n = Object(Z.a)(e[i], s);
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
				we = i.n(xe);
			const ve = {};
			var Ne = (e = ve, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: we()([...e[i] || [], ...s])
							}
						}
						case ce.e: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: we()([...s, ...e[i] || []])
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
				Oe = Object(H.c)({
					afterToken: ue,
					api: ke,
					models: fe,
					userOrder: Ne
				});
			const _e = {};
			var ye = (e = _e, t) => {
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
				Ee = Object(H.c)({
					listing: Oe,
					search: ye
				}),
				Ce = i("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const je = {};
			var Pe = (e = je, t) => {
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
			var Te = (e = Re, t) => {
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
						return Object(Z.a)(e, i)
					}
					default:
						return e
				}
			};
			const Ie = {};
			var Se = (e = Ie, t) => {
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
				We = Object(H.c)({
					error: Te,
					pending: Se
				});
			const Le = {};
			var Me = (e = Le, t) => {
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
						} = t.payload, n = Object(Z.a)(e[i], s);
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
			var Ae = (e = De, t) => {
					switch (t.type) {
						case Ce.c:
						case Ce.a: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: we()([...e[i] || [], ...s])
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
				Be = Object(H.c)({
					afterToken: Pe,
					api: We,
					models: Me,
					userOrder: Ae
				});
			const He = {};
			var Ue = (e = He, t) => {
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
				Fe = Object(H.c)({
					listing: Be,
					search: Ue
				}),
				Ke = Object(H.c)({
					diff: F,
					directory: z,
					pages: V,
					pageSettings: X,
					revisions: de,
					wikiBannedContributors: Ee,
					wikiContributors: Fe
				});
			Object(B.a)({
				pages: {
					subredditWiki: Ke
				}
			});
			const ze = Object(d.a)(h.c),
				Ge = Object(d.a)(h.b),
				qe = Object(d.a)(h.a),
				Ve = (e, t) => !!Object(O.b)(e, {
					subredditName: t
				}),
				Je = e => async (t, i, n) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === T.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(W.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(ze({
						options: l,
						pageKey: u
					}));
					const m = await Object(I.a)(n.gqlContext(), l),
						b = m.body,
						p = m.ok ? b.data && b.data.subreddit && b.data.subreddit.wiki : null;
					return m.ok && p ? t(Ge({
						options: l,
						pageKey: u,
						subredditWiki: p
					})) : (t(qe({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.E.NOT_FOUND_ERROR
						}
					})), a && t(Object(k.e)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: L.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e)
					}))), !(!m.ok || !r()(b.data.subreddit)) || !(!m.ok || !p)
				}, $e = e => async (t, i) => {
					const {
						params: s,
						url: n
					} = e, {
						wikiPageName: r
					} = s, o = Object(D.a)(n, s);
					let d = !1;
					return T.l.includes(r || "") ? (await (async (e, t) => {
						const i = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = i
					})(e.url), d = !0) : n !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Xe = (e, t, i = !1) => async (n, r, a) => {
					const {
						subredditName: d = T.e,
						wikiPageName: l,
						wikiSubRoute: u
					} = e, m = t[R.A], b = t[R.B], h = m ? Object(v.a)(m) : void 0, x = b ? Object(v.a)(b) : void 0, w = l === T.j, N = u === T.m.Revisions;
					let _ = !1,
						y = !1;
					if (i) {
						const {
							pageName: t
						} = e;
						_ = t === o.Sb.WikiContributors, y = t === o.Sb.WikiBanned
					}
					const E = r(),
						I = (w || i) && !Ve(E, d),
						S = !!l && !((e, t, i, s) => {
							return i === T.j ? Ve(e, t) : !!Object(O.c)(e, {
								subredditName: t,
								wikiPageName: i,
								revisionId: s
							})
						})(E, d, l, h),
						W = [];
					W.push(n(((e, t = !1) => async (i, s) => {
						const n = s(),
							r = {
								sort: o.P.HOT
							},
							a = Object(c.a)(e, r.sort),
							d = n.listings.postOrder.api.error[a],
							l = n.listings.postOrder.api.pending[a],
							u = !!n.listings.postOrder.ids[a];
						return !!(l || u && !d) || (await i(Object(p.subredditDataRequested)(a, e, r, t)), !s().listings.postOrder.api.error[a])
					})(d))), (I || S) && W.push(n(Je({
						includeDirectory: I,
						includePageData: S,
						revisionId: h,
						subredditName: d,
						wikiPageName: l
					}))), u === T.m.Settings && l && W.push(n(Object(j.c)(d, l))), l && h && x && W.push(n(C({
						comparisonRevisionId: x,
						revisionId: h,
						subredditName: d,
						wikiPageName: l
					}))), N && W.push(n(Object(P.c)({
						isRecent: !l,
						wikiPageName: l,
						subredditName: d
					}))), _ && W.push(n(Object(f.e)(d))), y && W.push(n(Object(g.e)(d))), (await Promise.all(W)).every(Boolean) || n(Object(k.e)({
						kind: L.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Xe(e, t, i)
					}))
				}, Ze = e => async (t, i) => {
					if (await t($e(e))) return;
					const {
						params: s,
						queryParams: n
					} = e, r = s.subredditName || T.e;
					t(u.l({
						title: s.wikiPageName ? `${s.wikiPageName} - ${r}` : `wiki - ${r}`
					})), await t(Xe(s, n));
					const a = Object(A.A)(i(), {
							subredditName: r
						}),
						o = i();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(b.b)(M.a.SUBREDDIT))
					}), t(Object(b.d)({
						isViewSafe: Object(S.a)([], [a])
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
				return a
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				n = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				r = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return x
			})), i.d(t, "b", (function() {
				return v
			})), i.d(t, "a", (function() {
				return O
			})), i.d(t, "c", (function() {
				return y
			})), i.d(t, "d", (function() {
				return C
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				o = i("./src/lib/makeApiRequest/index.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/lib/omitHeaders/index.ts"),
				l = i("./src/graphql/operations/SubredditWikiBannedContributors.json"),
				u = i("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, {
				...l,
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
			const k = Object(r.a)(h.d),
				g = Object(r.a)(h.c),
				f = Object(r.a)(h.b),
				x = e => async (t, i, s) => {
					t(k({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await m(s.gqlContext(), r);
					if (a.ok) {
						const i = a.body,
							s = i.data.subreddit && i.data.subreddit.wiki;
						if (s) {
							const i = b(s);
							t(g({
								...i,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const i = a.error || {
							type: n.E.UNKNOWN_ERROR
						};
						t(f({
							error: i,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, w = Object(r.a)(h.a), v = (e, t) => async (i, n, r) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki);
							i(w({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else i(Object(a.e)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: v(e, t)
					}));
					return d.ok
				}, N = Object(r.a)(h.e), O = (e, t) => async (i, r, d) => {
					const l = await ((e, t, i) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.cb.POST,
						data: {
							api_type: "json",
							name: i.username,
							type: "wikibanned",
							duration: i.duration,
							ban_reason: i.banReason,
							note: i.note
						}
					}))(d.apiContext(), e, t);
					if (l.ok) {
						i(Object(a.e)({
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
							i(N({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						l.error.type === n.E.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), i(Object(a.e)({
							kind: p.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return l.ok
				}, _ = Object(r.a)(h.f), y = (e, t) => async (i, r, d) => {
					const l = await ((e, t, i) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.cb.POST,
						data: {
							api_type: "json",
							id: i,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (i(Object(a.e)({
						kind: p.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), i(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : i(Object(a.e)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					})), l.ok
				}, E = Object(r.a)(h.g), C = (e, t) => async (i, n, r) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(r.gqlContext(), o);
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
					} else i(Object(a.e)({
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
				return a
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_CONTRIBUTORS_PENDING",
				n = "WIKI_CONTRIBUTORS_LOADED",
				r = "WIKI_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return x
			})), i.d(t, "b", (function() {
				return v
			})), i.d(t, "a", (function() {
				return O
			})), i.d(t, "c", (function() {
				return y
			})), i.d(t, "d", (function() {
				return C
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				o = i("./src/lib/makeApiRequest/index.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/lib/omitHeaders/index.ts"),
				l = i("./src/graphql/operations/SubredditWikiContributors.json"),
				u = i("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, {
				...l,
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
			const k = Object(r.a)(h.d),
				g = Object(r.a)(h.c),
				f = Object(r.a)(h.b),
				x = e => async (t, i, s) => {
					t(k({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await m(s.gqlContext(), r);
					if (a.ok) {
						const i = a.body,
							s = i.data.subreddit && i.data.subreddit.wiki;
						if (s) {
							const i = b(s);
							t(g({
								...i,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const i = a.error || {
							type: n.E.UNKNOWN_ERROR
						};
						t(f({
							error: i,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, w = Object(r.a)(h.a), v = (e, t) => async (i, n, r) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = b(t.data.subreddit.wiki);
							i(w({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else i(Object(a.e)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: v(e, t)
					}));
					return d.ok
				}, N = Object(r.a)(h.e), O = (e, t) => async (i, r, d) => {
					const l = await ((e, t, i) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.cb.POST,
						data: {
							api_type: "json",
							name: i,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (l.ok) {
						i(Object(a.e)({
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
							!!r().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || i(N({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						const t = l.error.type;
						t === n.E.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === n.E.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), i(Object(a.e)({
							kind: p.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return l.ok
				}, _ = Object(r.a)(h.f), y = (e, t) => async (i, r, d) => {
					const l = await ((e, t, i) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.cb.POST,
						data: {
							api_type: "json",
							id: i,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (i(Object(a.e)({
						kind: p.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), i(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : i(Object(a.e)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					})), l.ok
				}, E = Object(r.a)(h.g), C = (e, t) => async (i, n, r) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(r.gqlContext(), o);
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
					} else i(Object(a.e)({
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
				return a
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				n = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				r = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				a = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return N
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
				a = i("./src/reddit/actions/subredditSettings.ts"),
				o = i("./src/reddit/actions/toaster.ts"),
				d = i("./src/lib/makeApiRequest/index.ts"),
				c = i("./src/lib/makeGqlRequest/index.ts"),
				l = i("./src/lib/omitHeaders/index.ts"),
				u = i("./src/reddit/constants/headers.ts"),
				m = i("./src/graphql/operations/SubredditWikiPageSettings.json"),
				b = i("./src/reddit/models/SubredditWikiPage/index.ts");
			const p = (e, t) => Object(c.a)(e, {
					...m,
					variables: t
				}),
				h = {
					[b.a.Inherit]: "0",
					[b.a.Contributors]: "1",
					[b.a.Mods]: "2"
				};
			var k = e => {
					const {
						editPermissions: t,
						editorsInfo: i,
						isVisible: s
					} = e, {
						edges: n,
						pageInfo: r
					} = i, a = [];
					return n.forEach(e => {
						e.node.name && e.node.icon && a.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: a,
						isVisible: s,
						afterToken: r.hasNextPage ? r.endCursor : null
					}
				},
				g = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				f = i("./src/reddit/models/Toast/index.ts"),
				x = i("./src/reddit/selectors/subreddit.ts"),
				w = i("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const v = Object(r.a)(w.c),
				N = (e, t) => async (i, s, n) => {
					const r = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(n.gqlContext(), r),
						d = Object(x.F)(s(), e);
					if (Object(x.U)(s(), d) || await i(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = k(t.page.settings);
							i(v({
								pageKey: Object(g.a)(r),
								settings: e
							}))
						}
					}
					return o.ok
				}, O = Object(r.a)(w.b), _ = (e, t, i) => async (n, r, a) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: i
						},
						c = await p(a.gqlContext(), d);
					if (c.ok) {
						const i = c.body,
							s = i.data.subreddit && i.data.subreddit.wiki;
						if (s && s.page) {
							const i = k(s.page.settings),
								{
									editorsInfo: r,
									afterToken: a
								} = i;
							n(O({
								editorsInfo: r,
								afterToken: a,
								pageKey: Object(g.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else n(Object(o.e)({
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
				}, y = Object(r.a)(w.d), E = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: i,
					subredditName: s
				}) => async (r, a, o) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: n.cb.POST,
						data: {
							permlevel: h[e.editPermissions],
							listed: e.isVisible ? "on" : void 0
						}
					}))({
						context: o.apiContext(),
						editPermissions: e,
						isVisible: t,
						wikiPageName: i,
						subredditName: s
					});
					return c.ok && r(y({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(g.a)({
							wikiPageName: i,
							subredditName: s
						})
					})), c.ok
				}, C = ({
					subredditName: e,
					username: t,
					wikiPageName: i
				}) => async (r, a, c) => {
					const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: n.cb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: c.apiContext(),
						wikiPageName: i,
						subredditName: e,
						username: t
					});
					if (m.ok) r(Object(o.e)({
						kind: f.b.SuccessCommunity,
						text: "User successfully added"
					})), await r(N(e, i));
					else if (m.error) {
						const e = m.error.type;
						let t = s.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === n.E.NOT_FOUND_ERROR && (t = s.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), r(Object(o.e)({
							kind: f.b.Error,
							text: t
						}))
					}
					return m.ok
				}, j = Object(r.a)(w.a), P = ({
					subredditName: e,
					username: t,
					wikiPageName: i
				}) => async (s, r, a) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
						method: n.cb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: a.apiContext(),
						wikiPageName: i,
						subredditName: e,
						username: t
					});
					return c.ok && (s(Object(o.e)({
						kind: f.b.SuccessCommunity,
						text: "User has been successfully removed"
					})), s(j({
						username: t,
						pageKey: Object(g.a)({
							wikiPageName: i,
							subredditName: e
						})
					}))), c.ok
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
				return a
			})), i.d(t, "e", (function() {
				return o
			}));
			const s = "WIKI_REVISIONS_PENDING",
				n = "WIKI_REVISIONS_LOADED",
				r = "WIKI_REVISIONS_FAILED",
				a = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
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
				a = i("./src/reddit/actions/toaster.ts"),
				o = i("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/graphql/operations/WikiRevisions.json");
			var l = i("./src/lib/makeApiRequest/index.ts"),
				u = i("./src/lib/omitHeaders/index.ts"),
				m = i("./src/reddit/constants/headers.ts"),
				b = i("./src/reddit/helpers/wiki/wikiRevision.ts");
			var p = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: n.cb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: n.cb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var k = e => {
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
				g = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				f = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = i("./src/reddit/models/Toast/index.ts"),
				w = i("./src/reddit/selectors/subredditWiki.ts"),
				v = i("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const N = Object(r.a)(v.d),
				O = Object(r.a)(v.c),
				_ = Object(r.a)(v.b),
				y = e => async (t, i, r) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: b
					} = e, p = i(), h = Object(g.a)(e), f = Object(w.p)(p, {
						listingKey: h
					});
					if (!o && !!f) return !0;
					const v = f && f.pageInfo.endCursor || void 0;
					if (!(!f || f.pageInfo.hasNextPage)) return !0;
					const E = {
							after: v,
							isRecent: u,
							subredditName: m,
							wikiPageName: b
						},
						C = {
							key: h,
							options: E
						};
					t(N(C));
					const j = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(r.gqlContext(), E);
					if (j.ok) {
						const e = j.body;
						if (e.data.subreddit) {
							const i = k(e.data);
							t(O({
								...C,
								...i
							}))
						}
					} else {
						const i = j.error || {
							type: n.E.UNKNOWN_ERROR
						};
						t(_({
							...C,
							error: i
						})), l && t(Object(a.e)({
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
				}, E = Object(r.a)(v.a), C = e => async (t, i, n) => {
					const {
						subredditName: r,
						wikiPageName: d
					} = e, c = Object(f.a)({
						...e,
						revisionId: void 0
					}), l = Object(g.a)({
						...e,
						isRecent: !1
					}), u = Object(g.a)({
						...e,
						isRecent: !0
					}), m = Object(w.p)(i(), {
						listingKey: l
					}), b = m && m.ids[0];
					if ((await h(n.apiContext(), e)).ok) {
						const e = (await Object(o.a)(n.gqlContext(), {
								includePageData: !0,
								subredditName: r,
								wikiPageName: d
							})).body,
							i = e.data.subreddit && e.data.subreddit.wiki,
							m = i && i.page;
						if (!m || !m.revision) return;
						if (m.revision.id === b) return void t(Object(a.e)({
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
					} else t(Object(a.e)({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e)
					}))
				}, j = Object(r.a)(v.e), P = e => async (t, i, n) => {
					const r = await p(n.apiContext(), e);
					if (r.ok) {
						const i = r.body.status;
						t(j({
							revisionId: e.revisionId,
							isHidden: i
						}))
					} else t(Object(a.e)({
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
				isAdmin: "_1-wk-QXxJ0S4snrasETuaA",
				isAdminEmeritus: "sKTYSQHxlRLbA-0pCpguU",
				isMod: "_1VChcviPF84MLFsL2xfBCP",
				isOp: "_1uBAPhkb8ZOA-9p_B6inAR",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/classNames/index.ts"),
				a = i("./src/config.ts"),
				o = i("./src/reddit/controls/InternalLink/index.tsx"),
				d = i("./src/reddit/components/AuthorLink/index.m.less"),
				c = i.n(d);
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
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "nofollow",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(r.a)(c.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(o.a, {
					className: t,
					style: e.style,
					to: `/user/${e.author}/`
				}, e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, i) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				a = i("./src/higherOrderComponents/asModal/index.tsx"),
				o = i("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = i("./src/reddit/controls/TextButton/index.tsx"),
				c = i("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = i("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = i.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => r.a.createElement(o.d, null, r.a.createElement(o.h, null, r.a.createElement(c.a, null, r.a.createElement(o.p, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(o.b, null)))), r.a.createElement(o.k, null, r.a.createElement(o.o, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(o.f, null, !e.hideCancelButton && r.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(o.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = i("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = i("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return n.a.createElement(r.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, n.a.createElement(a.a, {
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
				a = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = i("./src/reddit/icons/fonts/Info/index.tsx"),
				c = i("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = i.n(c);
			const u = Object(r.a)(o.a),
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
				return _
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				a = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/lessComponent.tsx"),
				l = i("./src/reddit/actions/tooltip.ts"),
				u = i("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = i("./src/reddit/controls/Dropdown/index.tsx"),
				b = i("./src/reddit/controls/Dropdown/Row.tsx"),
				p = i("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				h = i("./src/reddit/icons/fonts/index.tsx"),
				k = i("./src/reddit/icons/fonts/Menu/index.tsx"),
				g = i("./src/reddit/selectors/tooltip.ts"),
				f = i("./src/reddit/components/OverflowMenu/index.m.less"),
				x = i.n(f);
			const w = c.a.wrapped(m.a, "_Dropdown", x.a),
				v = Object(u.a)(w),
				N = c.a.button("MenuButton", x.a),
				O = c.a.wrapped(k.a, "MenuIcon", x.a),
				_ = c.a.wrapped(b.b, "DropdownRow", x.a),
				y = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(g.b)(t)(e)
				}),
				E = Object(a.b)(y, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => {
				const t = Object(p.b)();
				return r.a.createElement(N, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(d.a)(e.className, {
						[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: C(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? r.a.createElement(h.a, {
					name: "overflow_horizontal"
				}) : r.a.createElement(O, null), r.a.createElement(v, {
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
				a = i.n(r),
				o = i("./src/lib/classNames/index.ts"),
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
			const u = ({
					className: e,
					children: t,
					editorWrapperRef: i,
					initialHeight: s
				}) => n.a.createElement("div", {
					className: Object(o.a)(c.a.editorWrapper, e),
					style: s ? {
						height: s
					} : void 0,
					ref: i
				}, t),
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...i
				}) => n.a.createElement(a.a, l({
					className: Object(o.a)(c.a.textareaAutosize, {
						[c.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, i));
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
						isResized: a
					} = this.state;
					return n.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, n.a.createElement(m, l({}, r, {
						children: !0,
						isFullHeight: !!a,
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/lessComponent.tsx"),
				a = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = i("./src/reddit/contexts/PageLayer/index.tsx"),
				d = i("./src/reddit/components/SidebarFooter/index.m.less"),
				c = i.n(d);
			const {
				fbt: l
			} = i("./node_modules/fbt/lib/FbtPublic.js"), u = r.a.a("Link", c.a), m = Object(o.t)({
				isFrontpage: o.y
			});
			t.a = m(e => n.a.createElement(a.a, {
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
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/classNames/index.ts"),
				n = i("./node_modules/lodash/throttle.js"),
				r = i.n(n),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				d = i("./src/lib/constants/index.ts"),
				c = i("./src/reddit/controls/Button/index.tsx"),
				l = i("./src/reddit/components/BackToTop/index.m.less"),
				u = i.n(l);
			const {
				fbt: m
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			var b = e => o.a.createElement("div", {
					className: Object(s.a)(e.className, u.a.container),
					style: e.style
				}, o.a.createElement(c.i, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, m._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				p = i("./src/reddit/components/SidebarFooter/index.tsx"),
				h = i("./src/reddit/constants/componentSizes.ts"),
				k = i("./src/reddit/contexts/PageLayer/index.tsx"),
				g = i("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = i.n(g),
				x = i("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = d.e[1] + 24,
				N = h.f + 8 + 152 + 32 + 16,
				O = N + v + 8,
				_ = x.a.div("Container", f.a),
				y = x.a.wrapped(({
					className: e,
					...t
				}) => o.a.createElement(b, w({
					className: e,
					style: {
						top: "calc(100vh - 40px)"
					}
				}, t)), "BackToTop", f.a),
				E = ({
					children: e,
					className: t,
					isFakeOverlay: i,
					isSticky: n
				}) => o.a.createElement("div", {
					className: Object(s.a)(t, {
						[f.a.StickyStyles]: n && !i,
						[f.a.StickyStylesFakeOverlay]: !!i
					})
				}, e);
			class C extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > O,
						shouldFooterSticky: this.windowHeight > N
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
							children: i,
							className: s,
							hideFooter: n
						}
					} = this, r = this.state.isAdSticky && !(!e && !i);
					return o.a.createElement(_, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(E, {
						isFakeOverlay: t,
						isSticky: r
					}, e, i, !n && o.a.createElement(p.a, null)), !this.props.hideBackToTop && o.a.createElement(y, null))
				}
			}
			const j = Object(k.t)();
			t.a = j(C)
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
				a = i("./node_modules/reselect/es/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = i("./src/reddit/components/SEOTitle/index.tsx"),
				l = i("./src/reddit/components/TrackingHelper/index.tsx"),
				u = i("./src/reddit/contexts/PageLayer/index.tsx"),
				m = i("./src/reddit/controls/Button/index.tsx"),
				b = i("./src/reddit/helpers/trackers/widgets.ts"),
				p = i("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = i("./src/reddit/selectors/experiments/topPosts.ts"),
				k = i("./src/reddit/selectors/structuredStyles.ts"),
				g = i("./src/reddit/selectors/user.ts"),
				f = i("./src/reddit/models/Theme/index.ts"),
				x = i("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const w = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				v = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				N = e => {
					const t = w(e);
					return Object(f.f)(t)
				},
				O = e => {
					const t = v(e);
					return Object(f.f)(t)
				};
			var _ = i("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				y = i.n(_);
			const {
				fbt: E
			} = i("./node_modules/fbt/lib/FbtPublic.js"), C = Object(u.t)(), j = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const i = Object(u.m)(e, t) || void 0,
						s = t.redditStyle || Object(k.l)(e, {
							subredditId: i
						}),
						n = Object(g.U)(e);
					return s || n
				},
				nigtmode: g.U,
				subredditId: u.m,
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
					return e.backgroundColor = w(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = N(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: i,
						forceRedditStyle: s,
						headerButton: r,
						onClick: a,
						title: d,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, b = i ? y.a.widgetContentOnly : y.a.widgetContent, p = !s && this.props.styles, h = p ? this.getWidgetBackgroundStyles() : {}, k = p ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(o.a)(t, y.a.widgetBackground, {
							[y.a.redditStyle]: s,
							[y.a.clickable]: !!a,
							[y.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: a,
						style: h
					}, d && n.a.createElement("div", {
						className: y.a.widgetHeader,
						style: k
					}, n.a.createElement("div", {
						className: Object(o.a)(y.a.widgetTitle, l)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), n.a.createElement("div", {
						className: Object(o.a)(b, {
							[y.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.o, {
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
				return Q
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				a = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/actions/modal.ts"),
				l = i("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				u = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = i("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				b = i("./src/reddit/components/TrackingHelper/index.tsx"),
				p = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				h = i("./src/reddit/controls/Button/index.tsx"),
				k = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = i("./src/lib/addQueryParams/index.ts"),
				f = i("./src/reddit/constants/parameters.ts"),
				x = i("./src/reddit/helpers/wiki/wikiRevision.ts");

			function w(e, t) {
				const {
					revision: i,
					revisionToCompare: s
				} = t;
				if (!i && !s) return e;
				const n = {};
				return i && (n[f.A] = Object(x.b)(i)), s && (n[f.B] = Object(x.b)(s)), Object(g.a)(e, n)
			}
			var v = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				N = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				O = i("./src/reddit/selectors/activeModalId.ts"),
				_ = i("./src/reddit/selectors/moderatorPermissions.ts"),
				y = i("./src/reddit/selectors/subreddit.ts"),
				E = i("./src/reddit/selectors/subredditWiki.ts"),
				C = i("./node_modules/lodash/times.js"),
				j = i.n(C),
				P = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				R = i("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				T = i.n(R);
			var I = () => {
					const e = n.createElement("div", {
						className: Object(d.a)(T.a.loadingShimmer, Object(P.b)({
							isLoading: !0
						}))
					});
					return n.createElement("div", null, j()(4, t => n.createElement("div", {
						key: t,
						className: T.a.loadingRow
					}, e)))
				},
				S = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
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
					return r.a.createElement(S.a, {
						onChange: this.handleChange
					}, r.a.createElement("div", null))
				}
			}
			var L = i("./node_modules/lodash/noop.js"),
				M = i.n(L),
				D = i("./src/reddit/components/AuthorLink/index.tsx"),
				A = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				B = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				H = i("./src/reddit/controls/Checkbox/index.tsx"),
				U = i("./src/reddit/controls/InternalLink/index.tsx"),
				F = i("./node_modules/lodash/forEach.js"),
				K = i.n(F),
				z = i("./src/lib/fastdom/index.ts");

			function G(e) {
				z.a.read(() => {
					K()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								i = e.parentElement,
								s = "true" === i.dataset.textOverflow;
							t !== s && z.a.write(() => {
								i.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const q = Object(o.c)({
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
						this.props.sendEvent(Object(k.l)(s)), this.setState({
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
						this.props.sendEvent(k.q)
					}
				}
				componentDidMount() {
					this.reasonElementRef.current && G([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: i,
						isRecentRevisionMode: n,
						revision: a,
						subredditName: o
					} = this.props, c = a.page.name, l = a.isHidden, {
						expanded: u
					} = this.state, m = a.authorInfo && a.authorInfo.name, b = Object(N.a)({
						subredditName: o,
						wikiPageName: c
					}, i), p = w(b, {
						revision: a.id
					}), k = !n && e, g = c.split("/").slice(-1)[0];
					return r.a.createElement("tr", {
						className: Object(d.a)(T.a.row, l ? T.a.mHidden : null)
					}, !n && r.a.createElement("td", {
						className: T.a.cellCheckbox
					}, r.a.createElement(H.a, {
						className: T.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), r.a.createElement("td", {
						className: T.a.cellTime
					}, Object(B.b)(a)), n && r.a.createElement("td", {
						className: T.a.cellPage
					}, r.a.createElement(U.a, {
						className: T.a.wikiPageLink,
						title: `/${c}`,
						to: b
					}, g)), r.a.createElement("td", {
						className: T.a.cellUser
					}, m && r.a.createElement(A.a, {
						sendHoverCardEvent: M.a,
						tooltipId: `revision-${a.id}`,
						user: m
					}, r.a.createElement(D.a, {
						author: m,
						className: T.a.usernameLink
					}, m))), r.a.createElement("td", {
						className: T.a.cellReason
					}, r.a.createElement("div", {
						className: Object(d.a)(T.a.reasonTextWrapper, u ? T.a.mExpanded : null)
					}, r.a.createElement("div", {
						ref: this.reasonElementRef,
						className: T.a.reasonText
					}, a.reason), !u && r.a.createElement(h.g, {
						className: T.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, s.fbt._("more", null, {
						hk: "2IGYPS"
					})))), r.a.createElement("td", null, r.a.createElement("div", {
						className: T.a.buttons
					}, r.a.createElement(h.p, {
						className: T.a.viewButton,
						onClick: this.onViewClick,
						to: p
					}, s.fbt._("View", null, {
						hk: "4imNnh"
					})), k && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.o, {
						className: T.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, l ? s.fbt._("Show", null, {
						hk: "3YKyhU"
					}) : s.fbt._("Hide", null, {
						hk: "30nwHP"
					})), r.a.createElement(h.o, {
						className: T.a.revertButton,
						onClick: this.onRevertClick
					}, s.fbt._("Revert", null, {
						hk: "5mbFS"
					}))))))
				}
			}
			var J = Object(a.b)(q, e => ({
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
			const X = Object(o.c)({
				hasError: E.o,
				hasWikiModPerms: (e, t) => {
					const i = Object(y.A)(e, t);
					return !!i && Object(_.f)(e, {
						subredditId: i.id
					})
				},
				isPending: E.q,
				isRevertConfirmationModalOpen: Object(O.b)("wiki-revert-confirmation"),
				listingInfo: E.p
			});
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.containerRef = r.a.createRef(), this.state = {
						selectedRevisions: []
					}, this.onRevertConfirmed = () => {
						const {
							subredditName: e
						} = this.props, {
							revertRevision: t
						} = this.state;
						t && (this.props.sendEvent(k.k), this.props.onRevertToRevision({
							revisionId: t.id,
							subredditName: e,
							wikiPageName: t.page.name
						}))
					}, this.onCompareClick = () => {
						this.props.sendEvent(k.d)
					}, this.onRevertButtonClick = e => {
						this.setState({
							revertRevision: e
						}), this.props.toggleRevetConfirmationModal()
					}, this.handleResize = () => {
						this.containerRef.current && function(e) {
							G(e.getElementsByClassName(T.a.reasonText))
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
						isRecentRevisionsMode: a,
						isRevertConfirmationModalOpen: o,
						listingInfo: c,
						subredditName: l,
						wikiPageName: b
					} = this.props, {
						selectedRevisions: k
					} = this.state, g = c && c.ids || [], f = c && c.pageInfo.hasNextPage;
					let x = "",
						v = "#";
					b && (x = Object(N.a)({
						subredditName: l,
						wikiPageName: b
					}, i), 2 === k.length && (v = w(x, {
						revision: k[0],
						revisionToCompare: k[1]
					})));
					const O = !a && t;
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Object(d.a)(T.a.container, {
							[T.a.mModHub]: i,
							[T.a.mShowActionButtons]: O
						})
					}, r.a.createElement(p.a, {
						buttonText: a ? void 0 : s.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: x,
						className: T.a.pageTitle,
						title: r.a.createElement("span", {
							className: T.a.pageTitleText
						}, a ? s.fbt._("Recent revisions", null, {
							hk: "VsZfq"
						}) : s.fbt._("Page history for {pageName}", [s.fbt._param("pageName", `/${b}`)], {
							hk: "y2LqH"
						}))
					}), r.a.createElement("div", {
						className: T.a.content
					}, !a && r.a.createElement("div", {
						className: T.a.compareBar
					}, r.a.createElement(h.p, {
						className: T.a.compareButton,
						disabled: k.length < 2,
						onClick: this.onCompareClick,
						to: v
					}, s.fbt._("Compare", null, {
						hk: "3grtKa"
					})), s.fbt._("{selectedCnt}/2 selected to compare", [s.fbt._param("selectedCnt", k.length.toString())], {
						hk: "1PfMOM"
					})), r.a.createElement("table", {
						className: T.a.table
					}, r.a.createElement("thead", null, r.a.createElement("tr", null, !a && r.a.createElement("th", {
						className: T.a.colHeaderCheckbox
					}), r.a.createElement("th", {
						className: T.a.colHeaderTime
					}, s.fbt._("time", null, {
						hk: "231ZTq"
					})), a && r.a.createElement("th", {
						className: T.a.colHeaderPage
					}, s.fbt._("Wiki page", null, {
						hk: "2CzzvU"
					})), r.a.createElement("th", {
						className: T.a.colHeaderUser
					}, s.fbt._("Username", null, {
						hk: "3dJxeH"
					})), r.a.createElement("th", {
						className: T.a.colHeaderReason
					}, s.fbt._("Revision Reason", null, {
						hk: "3Z0slk"
					})), r.a.createElement("th", {
						className: T.a.colHeaderActions
					}, O && r.a.createElement(r.a.Fragment, null, s.fbt._("Actions", null, {
						hk: "1V50p1"
					}), r.a.createElement(m.a, null, s.fbt._("View: View current version", null, {
						hk: "1Wp1Qa"
					}), r.a.createElement("br", null), s.fbt._("Hide: Hide revision from page history", null, {
						hk: "1G574c"
					}), r.a.createElement("br", null), s.fbt._("Revert: Revert page to an older version", null, {
						hk: "2IMILE"
					})))))), r.a.createElement("tbody", {
						className: T.a.tableBody
					}, g.map(this.renderRowItem))), n && r.a.createElement(I, null), f && r.a.createElement(W, {
						hasError: e,
						isLoading: n,
						onLoadMore: this.onLoadMore
					})), o && r.a.createElement(u.a, {
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
			const Y = Object(a.b)(X, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(c.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(l.a)(t)),
				onLoadMoreRevisions: () => e(Object(l.c)({
					...t,
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				}))
			}))(Object(b.c)(Z));

			function Q(e) {
				const t = !!e.isRecentRevisionsMode,
					i = Object(v.a)({
						...e,
						isRecent: t
					});
				return r.a.createElement(Y, $({
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
				a = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/TrackingHelper/index.tsx"),
				l = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				u = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				m = i("./src/reddit/constants/componentSizes.ts"),
				b = i("./src/reddit/constants/wiki.ts"),
				p = i("./src/reddit/contexts/PageLayer/index.tsx"),
				h = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				k = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				g = i("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				x = i("./src/reddit/selectors/subredditWiki.ts"),
				w = i("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				N = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = i("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				_ = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				y = i("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				E = i.n(y);
			const C = e => {
				const {
					item: t,
					subredditName: i,
					isModHub: s
				} = e, r = t.isPagePresent && Object(_.a)({
					subredditName: i,
					wikiPageName: t.path
				}, s);
				return n.createElement("li", null, r ? n.createElement(N.a, {
					className: E.a.link,
					to: r
				}, t.name) : n.createElement("span", null, t.name), !!t.children.length && n.createElement("ul", null, t.children.map(e => n.createElement(C, {
					isModHub: s,
					item: e,
					key: e.path,
					subredditName: i
				}))))
			};
			var j = e => {
					const {
						isModHub: t,
						subredditName: i,
						wikiDirectory: r
					} = e, a = Object(O.a)(r.pageTree || []);
					return n.createElement("div", {
						className: E.a.container
					}, n.createElement("h1", null, s.fbt._("Viewing pages for {subredditName}", [s.fbt._param("subredditName", i)], {
						hk: "1f0dHX"
					})), n.createElement("h2", null, s.fbt._("Below is a list of pages in this wiki visible to you in this subreddit.", null, {
						hk: "3ywypD"
					})), n.createElement("ul", null, a.map(e => n.createElement(C, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: i
					}))))
				},
				P = i("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				R = i.n(P);
			const {
				fbt: T
			} = i("./node_modules/fbt/lib/FbtPublic.js");

			function I(e) {
				const {
					className: t,
					isModHub: i,
					showRevisionInfo: s,
					subredditName: n,
					wikiDirectory: a,
					wikiPage: o,
					wikiPageName: c
				} = e;
				let l = null;
				return a && c === b.j ? l = r.a.createElement(j, {
					isModHub: i,
					subredditName: n,
					wikiDirectory: a
				}) : o && o.content && c === b.h ? l = r.a.createElement("div", {
					className: R.a.automodContent
				}, o.content.markdown) : o && o.content && (l = r.a.createElement(w.a, {
					className: R.a.wikiHtmlContent,
					html: o.content.html
				})), r.a.createElement("div", {
					className: Object(d.a)(t, R.a.container)
				}, c === b.h && r.a.createElement("div", {
					className: R.a.automodInfoBanner
				}, T._("This page is used to configure AutoModerator for the subreddit, please see the {=full documentation} for information", [T._param("=full documentation", r.a.createElement("a", {
					href: "/wiki/automoderator/full-documentation"
				}, T._("full documentation", null, {
					hk: "1iIGFO"
				})))], {
					hk: "C2ew1"
				})), l, s && o && o.revision && r.a.createElement("div", {
					className: R.a.revisionInfo
				}, r.a.createElement(v.a, {
					showTimeAgo: !0,
					isLastRevision: !0,
					revision: o.revision
				})))
			}
			var S = i("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				W = i.n(S);
			const L = Object(a.b)(() => Object(o.c)({
					pending: x.a,
					wikiDirectory: x.b,
					wikiPage: x.c
				})),
				M = Object(p.t)();
			class D extends n.Component {
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
						this.props.isModHub && (e += m.j + m.k);
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
						wikiDirectory: a,
						wikiPage: o,
						wikiPageName: d
					} = this.props, c = this.getWikiPageStatus(), m = d === b.i, p = this.props.isModHub ? `/r/${this.props.subredditName}/about/wiki` : `/r/${this.props.subredditName}/wiki`, h = `${p}/index`, x = m ? void 0 : s.fbt._("Wiki home", null, {
						hk: "1E1oVk"
					});
					if (t || !c) return n.createElement(u.a, {
						showTitle: !0
					});
					if (c === f.b.Unknown || c === f.b.PageNotCreated) {
						if (Object(k.b)(d)) return n.createElement(l.a, {
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
							return !(!o || !o.content || o.content.markdown) ? n.createElement(l.a, {
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
							}) : n.createElement(I, {
								isModHub: e,
								showRevisionInfo: i,
								subredditName: r,
								wikiDirectory: a,
								wikiPage: o,
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
								icon: n.createElement(g.a, {
									className: W.a.hideIcon
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
								icon: n.createElement(g.a, {
									className: W.a.hideIcon
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
						className: Object(d.a)(e, W.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = M(L(Object(c.c)(D)))
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
				a = i("./node_modules/reselect/es/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = i("./src/reddit/constants/wiki.ts"),
				l = i("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				u = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				m = i("./src/reddit/selectors/subredditWiki.ts"),
				b = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				p = i("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				h = i.n(p);
			var k = () => n.createElement("div", {
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
			const g = Object(a.c)({
					diffInfo: (e, t) => {
						const i = Object(l.a)(t);
						return Object(m.i)(e, {
							key: i
						})
					}
				}),
				f = Object(r.b)(g);
			class x extends n.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: i,
						diffInfo: r,
						wikiPageName: a
					} = this.props;
					let l = null;
					l = !r || r.pending ? n.createElement(k, null) : r.error ? s.fbt._("Could not load comparison diff", null, {
						hk: "4mrAev"
					}) : n.createElement("div", {
						className: h.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: r.htmlDiff || ""
						}
					});
					const m = Object(u.a)({
						subredditName: i,
						wikiPageName: a,
						wikiSubRoute: c.m.Revisions
					}, t);
					return n.createElement("div", {
						className: Object(o.a)(e, h.a.container, t ? h.a.mModHub : null)
					}, n.createElement(d.a, {
						buttonText: s.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: m,
						className: h.a.pageTitle,
						title: s.fbt._("Comparing revisions for /{pageName}", [s.fbt._param("pageName", a)], {
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
				resizableTextarea: "jtUB91J6tX7NTsovNabut"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				a = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/actions/modal.ts"),
				l = i("./node_modules/react-router-redux/es/index.js"),
				u = i("./src/lib/makeActionCreator/index.ts"),
				m = i("./src/reddit/actions/pages/subredditWiki/index.ts"),
				b = i("./src/reddit/actions/toaster.ts"),
				p = i("./src/reddit/constants/wiki.ts"),
				h = i("./src/lib/constants/index.ts"),
				k = i("./src/lib/makeApiRequest/index.ts"),
				g = i("./src/lib/omitHeaders/index.ts"),
				f = i("./src/reddit/constants/headers.ts");
			var x = e => Object(k.a)(Object(g.a)(e.context, [f.a]), {
					endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/edit`,
					method: h.cb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				w = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				v = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				N = i("./src/reddit/models/Toast/index.ts"),
				O = i("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				_ = i("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const y = Object(u.a)(_.a);
			var E = i("./src/reddit/components/BlockNavigation/index.tsx"),
				C = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				j = i("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				P = i("./src/reddit/components/TrackingHelper/index.tsx"),
				R = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				T = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				I = i("./src/reddit/controls/Button/index.tsx"),
				S = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				W = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				L = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				M = i("./src/reddit/selectors/activeModalId.ts"),
				D = i("./src/reddit/selectors/platform.ts"),
				A = i("./src/reddit/selectors/subredditWiki.ts"),
				B = i("./src/higherOrderComponents/asModal/index.tsx"),
				H = i("./src/reddit/components/ModalStyledComponents/index.tsx"),
				U = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = i("./src/reddit/controls/TextButton/index.tsx"),
				K = i("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				z = i.n(K);
			class G extends r.a.PureComponent {
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
						className: z.a.container
					}, r.a.createElement(H.h, {
						className: z.a.modalHeader
					}, r.a.createElement(H.p, null, s.fbt._("Add a reason for your revision", null, {
						hk: "3ozq8e"
					})), r.a.createElement(F.a, {
						onClick: this.props.onCancel
					}, r.a.createElement(H.b, null))), r.a.createElement("div", {
						className: z.a.contentBlock
					}, r.a.createElement("label", null, r.a.createElement("span", {
						className: z.a.labelText
					}, s.fbt._("Revision reason", null, {
						hk: "W55mK"
					})), r.a.createElement("input", {
						autoFocus: !0,
						className: z.a.reasonInput,
						maxLength: p.g,
						onChange: this.onTextChange,
						placeholder: s.fbt._("Ex: Added source to appendix", null, {
							hk: "KB2dD"
						}),
						value: t
					})), r.a.createElement("div", {
						className: z.a.details
					}, s.fbt._({
						"*": "{number} characters left",
						_1: "1 character left"
					}, [s.fbt._plural(i, "number")], {
						hk: "1Ra9c8"
					}))), r.a.createElement(H.f, {
						className: z.a.modalFooter
					}, r.a.createElement(H.a, {
						onClick: this.props.onCancel
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(I.i, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? r.a.createElement(U.a, {
						className: z.a.loadingIcon,
						sizePx: 10
					}) : s.fbt._("Save", null, {
						hk: "1zNlod"
					}))))
				}
			}
			var q = Object(B.a)(G),
				V = i("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				J = i.n(V);
			const $ = "Discard-wiki-page-changes",
				X = "Add-wiki-revision-reason",
				Z = 2,
				Y = (e, t, i) => {
					const n = t.status,
						r = {
							[W.a.InvalidPageName]: s.fbt._("Page name is invalid", null, {
								hk: "3Ogzsc"
							}),
							[W.a.MaxLengthExceed]: s.fbt._("Page name must be shorter than {maxPageLen} characters", [s.fbt._param("maxPageLen", `${p.d}`)], {
								hk: "11HwWR"
							}),
							[W.a.PageAlreadyExists]: s.fbt._("Page with this name already exists", null, {
								hk: "3WRlhT"
							}),
							[W.a.RestrictedPageName]: s.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "BQtR2"
							})
						};
					if (e) {
						if (n === L.b.Valid) return r[W.a.PageAlreadyExists];
						if (n === L.b.PageNotFound) return s.fbt._("You do not have permission to create this page", null, {
							hk: "423aTf"
						});
						if (i) return r[i]
					} else if (n === L.b.Valid && !t.isRevisable) return s.fbt._("You do not have permission to edit this page", null, {
						hk: "1bUgsZ"
					})
				},
				Q = Object(o.c)({
					allowNavigationCallback: D.a,
					isRevisionReasonModalOpen: Object(M.b)(X),
					isSaveBeforeLeaveModalOpen: Object(M.b)($),
					wikiPage: A.c
				}),
				ee = Object(a.b)(Q, (e, t) => ({
					onSaveWikiPage: (i, n) => e((({
						pageContent: e,
						wikiPageName: t,
						revisionReason: i,
						subredditName: n
					}) => async (r, a, o) => {
						const d = await x({
							context: o.apiContext(),
							pageContent: e,
							revisionReason: i,
							subredditName: n,
							wikiPageName: t
						});
						if (d.ok) r(y({
							pageKey: Object(v.a)({
								subredditName: n,
								wikiPageName: t
							}),
							pageRevisionsListingKey: Object(w.a)({
								subredditName: n,
								wikiPageName: t,
								isRecent: !1
							}),
							recentRevisionsListingKey: Object(w.a)({
								subredditName: n,
								wikiPageName: t,
								isRecent: !0
							})
						})), await r(Object(m.fetchSubredditWikiData)({
							includeDirectory: !0,
							includePageData: !0,
							subredditName: n,
							wikiPageName: t
						}));
						else {
							let e = s.fbt._("Something went wrong", null, {
								hk: "4oNh1E"
							});
							d.body && "RESTRICTED_PAGE" === d.body.reason && (e = s.fbt._("Cannot create/edit restricted page", null, {
								hk: "2pUIkm"
							})), r(Object(b.e)({
								kind: N.b.Error,
								text: e
							}))
						}
						return d.ok
					})({
						pageContent: i,
						revisionReason: n,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(((e = !1) => async (t, i) => {
						const s = i().platform.currentPage,
							n = s.locationState && s.locationState[p.a];
						if (e && n) t(Object(l.a)());
						else {
							const {
								subredditName: e,
								wikiPageName: i
							} = s.urlParams, n = Object(O.a)(s.url, {
								subredditName: e,
								wikiPageName: i
							});
							t(Object(l.c)(n))
						}
					})(t)),
					closeAllModals: () => e(Object(c.f)()),
					toggleModal: t => e(Object(c.i)(t))
				}));
			class te extends r.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.onSaveWithReason = async e => {
						const {
							markdown: t
						} = this.state;
						this.setState({
							isSavePending: !0
						}), this.props.sendEvent(Object(S.m)(this.props.isCreation));
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
						this.props.isRevisionReasonModalOpen || this.props.toggleModal(X)
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
						isSaveBeforeLeaveModalOpen: i,
						wikiPage: n,
						wikiPageName: a
					} = this.props, {
						disableBlocking: o,
						isSavePending: c,
						markdown: l
					} = this.state, u = n && n.content && n.content.markdown || "", m = !l.trim(), b = l !== u, p = e && n ? Object(W.b)(n.name) : void 0, h = !(!n || n.status !== L.b.PageNotCreated || p), k = !(!n || n.status !== L.b.Valid || !n.isRevisable), g = e ? h : k, f = g && b && !m && !c && !p;
					return r.a.createElement("div", {
						className: Object(d.a)(J.a.container, this.props.className)
					}, r.a.createElement("div", {
						className: Object(d.a)(this.props.topBarClassName, J.a.topBar)
					}, r.a.createElement(I.l, {
						onClick: this.onCancel,
						disabled: c
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(I.i, {
						disabled: !f,
						onClick: this.showRevisionReasonModal
					}, s.fbt._("Save", null, {
						hk: "1zXyaJ"
					}))), r.a.createElement("div", {
						className: Object(d.a)(this.props.contentClassName, J.a.content)
					}, n ? g ? r.a.createElement(j.a, {
						autoFocus: !0,
						className: J.a.resizableTextarea,
						disabled: c,
						onChange: this.onTextChange,
						placeholder: s.fbt._("Add page content here", null, {
							hk: "4fxFCc"
						}),
						value: l
					}) : r.a.createElement(R.a, {
						description: Y(e, n, p),
						title: e ? s.fbt._('"{pageName}" cannot be created', [s.fbt._param("pageName", a)], {
							hk: "235tfC"
						}) : s.fbt._('"{pageName}" cannot be edited', [s.fbt._param("pageName", a)], {
							hk: "4qKJob"
						})
					}) : r.a.createElement(T.a, {
						paragraphsCount: Z
					})), t && r.a.createElement(q, {
						withOverlay: !0,
						onCancel: this.onCancelAddingRevisionReason,
						onSave: this.onSaveWithReason,
						isPending: c
					}), r.a.createElement(E.a, {
						blockOnBeforeUnload: !0,
						dialogId: $,
						enabled: b && !o
					}), i && r.a.createElement(C.a, {
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
				}
			}
			t.a = ee(Object(P.c)(te))
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
				a = i("./node_modules/reselect/es/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				c = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				l = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				u = i("./src/reddit/constants/wiki.ts"),
				m = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				b = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = i("./src/reddit/selectors/subredditWiki.ts"),
				h = i("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				k = i.n(h);
			const g = Object(a.c)({
					pending: p.a,
					revision: (e, {
						revisionId: t
					}) => t ? Object(p.n)(e, {
						revisionId: t
					}) : void 0,
					wikiPage: p.c
				}),
				f = Object(r.b)(g);
			class x extends n.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: i,
						revision: r,
						revisionId: a,
						subredditName: p,
						wikiPage: h,
						wikiPageName: g
					} = this.props;
					let f = null;
					f = i ? n.createElement(d.a, null) : h ? h.status === b.b.Valid ? h.content && h.content.markdown : s.fbt._("Cannot show page content", null, {
						hk: "pwCwd"
					}) : s.fbt._("Page not found", null, {
						hk: "26hzSO"
					});
					const x = r || h && h.revision,
						w = !a,
						v = Object(m.a)({
							subredditName: p,
							wikiPageName: g,
							wikiSubRoute: w ? void 0 : u.m.Revisions
						}, t);
					return n.createElement("div", {
						className: Object(o.a)(e, k.a.container, t ? k.a.mModHub : null)
					}, n.createElement(c.a, {
						buttonText: w ? s.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}) : s.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: v,
						className: k.a.pageTitle,
						title: !w && x ? s.fbt._("Revision from {timeAgo}", [s.fbt._param("timeAgo", Object(l.b)(x))], {
							hk: "36r4TU"
						}) : s.fbt._("Page source", null, {
							hk: "33sFXM"
						})
					}), n.createElement("div", {
						className: k.a.content
					}, n.createElement("div", {
						className: k.a.headerRow
					}, x && n.createElement(l.a, {
						isLastRevision: w,
						revision: x,
						showReason: !0,
						showTimeAgo: !1
					})), n.createElement("div", {
						className: k.a.pageSource
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
				flexSpacer: "meAs5YnW58CX9i8rWjZQL"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/history/esm/history.js"),
				r = i("./node_modules/react/index.js"),
				a = i.n(r),
				o = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				c = i("./src/lib/classNames/index.ts"),
				l = i("./src/lib/copyToClipboard/index.ts"),
				u = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/reddit/components/TrackingHelper/index.tsx"),
				b = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				p = i("./src/reddit/constants/wiki.ts"),
				h = i("./src/reddit/controls/Button/index.tsx"),
				k = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				g = i("./src/reddit/models/Toast/index.ts"),
				f = i("./src/reddit/selectors/moderatorPermissions.ts"),
				x = i("./src/reddit/selectors/subreddit.ts"),
				w = i("./src/reddit/selectors/subredditWiki.ts"),
				v = i("./src/config.ts"),
				N = i("./src/reddit/components/OverflowMenu/index.tsx"),
				O = i("./src/reddit/constants/parameters.ts"),
				_ = i("./src/reddit/controls/Dropdown/Row.tsx"),
				y = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				E = i("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				C = i.n(E);
			const j = ["right", "bottom"],
				P = ["right", "top"];
			class R extends a.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(y.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, i = `${v.a.redditUrl}/r/${e}/wiki/${t}`;
						this.props.onCopyPageUrl(i), this.props.sendEvent(y.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: i,
						subredditName: n,
						wikiPage: r,
						wikiPageName: o
					} = this.props, d = i ? `/r/${n}/about/wiki` : `/r/${n}/wiki`;
					return a.a.createElement(N.b, {
						className: Object(c.a)(e, C.a.container),
						dropdownClassName: C.a.dropdown,
						dropdownId: t,
						targetPosition: j,
						tooltipPosition: P
					}, r && a.a.createElement(_.b, {
						className: C.a.row,
						displayText: s.fbt._("View page history", null, {
							hk: "fy9yY"
						}),
						href: `${d}/revisions/${o}`
					}), r && a.a.createElement(_.b, {
						className: C.a.row,
						displayText: s.fbt._("View page source", null, {
							hk: "1d5vg5"
						}),
						href: `${d}/${o}?${O.C}`,
						onClick: this.onViewPageSourceClick
					}), i && a.a.createElement(_.b, {
						className: C.a.row,
						displayText: s.fbt._("View in community", null, {
							hk: "mSFod"
						}),
						href: `/r/${n}/wiki/${o}`
					}), a.a.createElement(_.b, {
						className: C.a.row,
						displayText: s.fbt._("Copy URL", null, {
							hk: "3yBYUk"
						}),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var T = R,
				I = i("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				S = i.n(I);
			const W = Object(d.c)({
					hasWikiModPerms: (e, t) => {
						const i = Object(x.A)(e, t);
						return !!i && Object(f.f)(e, {
							subredditId: i.id
						})
					},
					wikiPage: w.c
				}),
				L = Object(o.b)(W, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(l.a)(e) && t(Object(u.e)(Object(u.d)(s.fbt._("Copied page URL", null, {
							hk: "4qKWjj"
						}), g.b.SuccessCommunity)))
					})(t))
				}));
			class M extends a.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: i,
						wikiPageName: r,
						subredditName: o,
						className: d
					} = this.props, l = !!i && i.status === k.b.Valid, u = !!i && i.isRevisable, m = e && u && l, g = t ? `/r/${o}/about/wiki/edit/${r}` : `/r/${o}/wiki/edit/${r}`;
					return a.a.createElement("div", {
						className: Object(c.a)(d, S.a.container)
					}, t && i && i.revision && a.a.createElement(b.a, {
						showTimeAgo: !0,
						className: S.a.revisionInfo,
						isLastRevision: !0,
						revision: i.revision
					}), a.a.createElement("div", {
						className: S.a.flexSpacer
					}), m && a.a.createElement(h.n, {
						className: S.a.button,
						to: `/r/${o}/about/wiki/settings/${r}`
					}, s.fbt._("Page settings", null, {
						hk: "2IAvWU"
					})), l && u && a.a.createElement(h.k, {
						className: S.a.button,
						to: Object(n.c)(g, {
							[p.a]: !0
						})
					}, s.fbt._("Edit", null, {
						hk: "1nftDt"
					})), l && a.a.createElement(T, {
						className: S.a.overflowMenu,
						dropdownId: `wikiPage-OverflowMenu-${r}-${t}`,
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: o,
						wikiPage: i,
						wikiPageName: r
					}))
				}
			}
			t.a = L(Object(m.c)(M))
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
				return o
			}));
			var s = i("./node_modules/react/index.js"),
				n = i("./src/reddit/controls/Button/index.tsx"),
				r = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				a = i.n(r);

			function o(e) {
				const {
					buttonLink: t,
					buttonText: i,
					description: r,
					icon: o,
					onButtonClick: d,
					title: c
				} = e;
				let l = null;
				return i && t ? l = s.createElement(n.k, {
					className: a.a.button,
					onClick: e.onButtonClick,
					to: t
				}, i) : i && d && (l = s.createElement(n.i, {
					className: a.a.button,
					onClick: e.onButtonClick
				}, i)), s.createElement("div", {
					className: a.a.container
				}, o, c && s.createElement("div", {
					className: a.a.title
				}, c), r && s.createElement("div", {
					className: a.a.description
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
				a = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				c = i.n(d);
			const l = e => r.createElement("div", {
				className: Object(a.a)(e.className, Object(o.b)({
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
				linkButton: "_28uXMdKULX2ygqCKM5Apfz"
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
				a = i("./src/reddit/controls/Button/index.tsx"),
				o = i("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				d = i.n(o);

			function c(e) {
				const {
					buttonLink: t,
					buttonText: i,
					className: s,
					title: o
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(s, d.a.container)
				}, o, i && t && n.a.createElement(a.p, {
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
				return O
			}));
			var s = i("./node_modules/lodash/noop.js"),
				n = i.n(s),
				r = i("./node_modules/react/index.js"),
				a = i.n(r),
				o = i("./src/higherOrderComponents/asTooltip.tsx"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/constants/index.ts"),
				l = i("./src/lib/timeAgo/index.ts"),
				u = i("./src/reddit/components/AuthorLink/index.tsx"),
				m = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				b = i("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = i("./src/reddit/helpers/graphql/helpers.ts"),
				h = i("./src/reddit/models/Post/index.ts"),
				k = i("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				g = i.n(k);
			const {
				fbt: f
			} = i("./node_modules/fbt/lib/FbtPublic.js"), x = ["center", "top"], w = ["center", "bottom"], v = Object(o.a)(b.b), N = e => {
				const t = new Date(Object(p.d)(e.revisedAt));
				return Object(l.d)(t.valueOf() / 1e3)
			};
			class O extends a.a.Component {
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
						showTooltip: o
					} = this.state, l = i.authorInfo && i.authorInfo.name || c.A, b = new Date(Object(p.d)(i.revisedAt)), k = a.a.createElement(m.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: n.a
					}, a.a.createElement(u.a, {
						className: g.a.authorLink,
						author: l,
						isAuthorDeleted: Object(h.m)(l),
						isUnstyled: !0
					}, l));
					return a.a.createElement("span", {
						className: Object(d.a)(e, g.a.container)
					}, t ? f._("Last revised by {username}", [f._param("username", k)], {
						hk: "jNOhx"
					}) : f._("Revised by {username}", [f._param("username", k)], {
						hk: "2Q35rs"
					}), r && a.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", N(i), a.a.createElement(v, {
						text: b.toString(),
						isOpen: o,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: x,
						tooltipPosition: w
					})), s && i.reason && a.a.createElement("span", null, " - ", i.reason))
				}
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, i) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = i("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				d = i("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = i("./src/reddit/controls/Checkbox/index.m.less"),
				l = i.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => t => {
					const {
						className: i,
						disabled: s,
						redditStyle: a,
						"data-redditstyle": o,
						...d
					} = t, c = ((e, t, i) => {
						const s = !(!t && !i);
						let n = "";
						return n = e ? s ? l.a.mDisabledRedditStyle : l.a.mDisabled : s ? l.a.mActiveRedditStyle : l.a.mActive
					})(s, a, o);
					return n.a.createElement(e, u({
						className: Object(r.a)(l.a.CheckboxIcon, c, i)
					}, d))
				},
				b = m(d.a),
				p = m(o.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? p : e.isCheckboxSelected ? b : a.a;
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return g
			}));
			var s = i("./node_modules/lodash/throttle.js"),
				n = i.n(s),
				r = i("./node_modules/react/index.js"),
				a = i.n(r),
				o = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = i("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = i("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = i("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = i("./src/reddit/controls/Dropdown/index.m.less"),
				b = i.n(m),
				p = i("./src/reddit/controls/Dropdown/row.m.less"),
				h = i.n(p);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			class g extends a.a.Component {
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
					}, i = Object(o.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(d.a, k({}, t, {
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
						className: i
					}, e.children), a.a.createElement("span", {
						className: Object(o.a)(h.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, k({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: i
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(o.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(c.a, {
						className: b.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const i = Object(o.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(g, k({
					className: i
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, i) {
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, i) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/lessComponent.tsx"),
				n = i("./src/reddit/controls/InternalLink/index.tsx"),
				r = i("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = i.n(r);
			t.a = s.a.wrapped(n.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var s = i("./src/lib/makeGqlRequest/index.ts"),
				n = i("./src/graphql/operations/SubredditWiki.json");
			const r = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			})
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
				return a
			})), i.d(t, "b", (function() {
				return o
			}));
			var s = i("./src/lib/classNames/index.ts"),
				n = i("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = i.n(n);
			const a = ({
					isLoading: e
				}) => Object(s.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				o = e => Object(s.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return o
			})), i.d(t, "a", (function() {
				return d
			}));
			var s, n, r = i("./src/reddit/constants/tracking.ts"),
				a = i("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post"
			}(n || (n = {}));
			const o = (e, t) => i => ({
					source: n.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.widget)(i, {
						subredditId: e,
						widgetKind: t
					}),
					...a.defaults
				}),
				d = (e, t) => i => ({
					source: n.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.post(i, e),
					subreddit: a.subreddit(i),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.defaults(i)
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return a
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/lodash/sortBy.js"),
				n = i.n(s),
				r = i("./src/reddit/constants/wiki.ts");
			const a = e => {
				return n()(e, e => `${e.path}/`.startsWith(`${r.i}/`) ? `\0${e.path}` : e.path).filter(e => !r.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					i = [];
				return a(e).forEach(e => {
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
				return a
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			}));
			var s = i("./src/reddit/constants/wiki.ts");
			const n = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${s.c}}$`),
				r = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!r.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const i = e.toLowerCase(),
						r = i.split("/")[0],
						o = s.b.has(r),
						d = s.f.has(r) && i !== s.h && i !== s.k;
					if (o || d) return a.RestrictedPageName;
					if (!n.test(i)) return a.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === i)) return a.PageAlreadyExists
					}
					return i.length > s.d ? a.MaxLengthExceed : void 0
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, i) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = i("./src/reddit/icons/fonts/helpers.tsx"),
				o = i("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				d = i.n(o);
			const c = i("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.b)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", d.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, i) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/reddit/icons/fonts/helpers.tsx"),
				a = i("./src/reddit/icons/fonts/Menu/index.m.less"),
				o = i.n(a);
			const d = i("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, i) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = i.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.chevron, e.className),
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
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				o = i("./src/reddit/actions/pages/shared.ts"),
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
					} = e, s = Object(m.a)(i, u.P.HOT, {});
					return n.a.createElement(b.a, {
						listingKey: s,
						listingName: i.toLowerCase(),
						subredditId: t.id,
						subredditName: i
					})
				},
				h = i("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				k = i("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				g = i("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				f = i("./src/reddit/constants/parameters.ts"),
				x = i("./src/reddit/constants/wiki.ts"),
				w = i("./src/reddit/contexts/PageLayer/index.tsx"),
				v = i("./src/reddit/helpers/wiki/wikiRevision.ts"),
				N = i("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				O = i("./src/reddit/components/JumpToContent/index.tsx"),
				_ = i("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				y = i("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				E = i("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				C = i.n(E);

			function j(e) {
				const {
					wikiPageName: t,
					subredditName: i
				} = e;
				return s.createElement(s.Fragment, null, s.createElement(O.a, null), s.createElement(y.a, {
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
			class T extends n.a.Component {
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
						wikiPageName: a
					} = i, o = s[f.A], d = s[f.B], c = f.C in s;
					switch (r) {
						case x.m.Create:
						case x.m.Edit:
							return n.a.createElement(k.a, {
								contentClassName: R.a.wikiPageEditorContent,
								isCreation: r === x.m.Create,
								subredditName: t,
								topBarClassName: R.a.communityWikiTopBar,
								wikiPageName: a
							});
						case x.m.Revisions:
							return n.a.createElement(N.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? n.a.createElement(h.a, {
								comparisonRevisionId: Object(v.a)(d),
								revisionId: Object(v.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? n.a.createElement(g.a, {
								revisionId: o ? Object(v.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? n.a.createElement(j, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var I = Object(w.t)()(T),
				S = i("./src/reddit/constants/componentSizes.ts"),
				W = i("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				L = i("./src/reddit/layout/page/Listing/index.tsx"),
				M = i("./src/reddit/selectors/subreddit.ts"),
				D = i("./src/reddit/selectors/user.ts");
			const A = Object(w.t)(),
				B = Object(r.b)(() => Object(a.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(D.e)(e, t.params.subredditName),
					layout: w.N,
					over18Pref: D.bb,
					subreddit: (e, {
						match: t
					}) => Object(M.A)(e, {
						subredditName: t.params.subredditName || x.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || x.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || x.i
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class H extends n.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: i,
						subredditName: s
					} = this.props, r = !!i && i.isNSFW && !D.bb, a = Object(W.a)(t, r, s);
					if (a) return n.a.createElement(c.default, a);
					const o = `/r/${s}/`;
					return n.a.createElement(L.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: S.i,
						navBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: i ? i.name : s,
							maxWidth: S.i,
							subredditOrProfile: i,
							url: o
						}), n.a.createElement(d.a, {
							subreddit: i || void 0,
							subredditId: i ? i.id : void 0,
							subredditName: s,
							subredditUrl: o
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
			t.default = A(B(H))
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return a
			})), i.d(t, "a", (function() {
				return o
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
				return k
			})), i.d(t, "k", (function() {
				return g
			})), i.d(t, "l", (function() {
				return f
			})), i.d(t, "e", (function() {
				return x
			})), i.d(t, "h", (function() {
				return w
			})), i.d(t, "f", (function() {
				return v
			})), i.d(t, "g", (function() {
				return N
			}));
			var s = i("./src/lib/objectSelector/index.ts"),
				n = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const r = [],
				a = (e, t) => {
					var i;
					const {
						subredditName: s
					} = t;
					if (null === (i = e.pages) || void 0 === i ? void 0 : i.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				o = (e, t) => {
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
					const i = Object(n.a)(t);
					return e.pages.subredditWiki.pageSettings[i]
				},
				h = (e, t) => {
					const {
						subredditName: i
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[i.toLowerCase()]
				},
				k = Object(s.a)((e, {
					subredditName: t
				}) => {
					const i = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiContributors.listing,
						n = s.userOrder[i],
						a = s.models[i];
					return n ? n.map(e => a[e]) : r
				}),
				g = (e, t) => {
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
				w = Object(s.a)((e, {
					subredditName: t
				}) => {
					const i = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiBannedContributors.listing,
						n = s.userOrder[i],
						a = s.models[i];
					return n ? n.map(e => a[e]) : r
				}),
				v = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[i.toLowerCase()]
				},
				N = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[i.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.a94cf0a92e6480f650c3.js.map