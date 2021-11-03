// https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.9a5fb3b4370a5a565228.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages~SubredditWiki"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, r) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/chat/controls/Svg/index.m.less"),
				d = r.n(o);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: r,
						active: n,
						hover: i
					} = e;
				return s.a.createElement("svg", {
					className: Object(a.a)(e.className, {
						[d.a.disable]: r,
						[d.a.active]: n,
						[d.a.hover]: !!i
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				s = r("./src/reddit/helpers/routeKey/index.ts"),
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
					l = Object(n.a)(r),
					u = Object(s.b)(c, r, l);
				u && i.c.has(u) && Object(a.k)(c, r, o.TimerType.InApp, i.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "subredditWikiDataPending", (function() {
				return qe
			})), r.d(t, "subredditWikiDataLoaded", (function() {
				return Ge
			})), r.d(t, "subredditWikiDataFailed", (function() {
				return ze
			})), r.d(t, "fetchSubredditWikiData", (function() {
				return Je
			})), r.d(t, "handleWikiRedirects", (function() {
				return Ze
			})), r.d(t, "subredditWikDataRequested", (function() {
				return Ye
			})), r.d(t, "subredditWikiPageRequested", (function() {
				return Xe
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/isEmpty.js"),
				a = r.n(s),
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
				h = r("./src/reddit/actions/toaster.ts"),
				v = r("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				k = r("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				g = r("./src/lib/makeGqlRequest/index.ts"),
				x = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				y = r("./src/redditGQL/operations/WikiComparisonDiff.json");
			var _ = r("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				w = r("./src/reddit/selectors/subredditWiki.ts");
			const I = Object(d.a)("WIKI_DIFF_PENDING"),
				O = Object(d.a)("WIKI_DIFF_LOADED"),
				j = Object(d.a)("WIKI_DIFF_FAILED"),
				E = e => async (t, r, n) => {
					const s = r(),
						a = Object(_.a)(e),
						i = Object(w.i)(s, {
							key: a
						});
					if (i && (i.pending || !i.error)) return !0;
					const d = {
						key: a
					};
					t(I(d));
					const c = await ((e, t) => Object(g.a)(e, {
						...y,
						variables: {
							...t,
							comparisonRevisionId: Object(x.b)(t.comparisonRevisionId),
							revisionId: Object(x.b)(t.revisionId)
						}
					}))(n.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							r = t && t.page && t.page.revisionComparisonDiffHtml;
						r ? u = r : l = {
							type: o.H.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.H.UNKNOWN_ERROR
					};
					return t(l ? j({
						...d,
						error: l
					}) : O({
						...d,
						htmlDiff: u
					})), !l
				};
			var N = r("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				C = r("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				S = r("./src/reddit/constants/parameters.ts"),
				P = r("./src/reddit/constants/wiki.ts"),
				T = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				R = r("./src/reddit/helpers/brandSafety/index.ts"),
				L = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				U = r("./src/reddit/models/Toast/index.ts"),
				B = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				A = r("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				D = r("./src/reddit/selectors/subreddit.ts"),
				F = r("./src/lib/initializeClient/installReducer.ts"),
				W = r("./node_modules/redux/es/redux.js");
			const H = {};
			var M = (e = H, t) => {
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: r,
							htmlDiff: n
						} = t.payload;
						return {
							...e,
							[r]: {
								htmlDiff: n
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
							error: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								pending: !1,
								error: n
							}
						}
					}
					default:
						return e
				}
			};
			const K = {};
			var q = (e = K, t) => {
					switch (t.type) {
						case f.b:
							const r = t.payload,
								{
									subredditWiki: n,
									options: s
								} = r,
								a = n && n.directory;
							if (!a) return e;
							const {
								subredditName: i
							} = s;
							return {
								...e, [i.toLowerCase()]: a
							};
						default:
							return e
					}
				},
				G = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const z = {};
			var Q = (e = z, t) => {
					switch (t.type) {
						case f.b: {
							const {
								subredditWiki: r,
								pageKey: n
							} = t.payload, {
								page: s
							} = r;
							return n && s ? {
								...e,
								[n]: s
							} : e
						}
						case G.a: {
							const {
								pageKey: r,
								page: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				J = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const Z = {};
			var Y = (e = Z, t) => {
					switch (t.type) {
						case J.c: {
							const {
								settings: r,
								pageKey: n
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : e
						}
						case J.d: {
							const {
								isVisible: r,
								editPermissions: n,
								pageKey: s
							} = t.payload, a = e[s];
							return a ? {
								...e,
								[s]: {
									...a,
									isVisible: r,
									editPermissions: n
								}
							} : e
						}
						case J.b: {
							const {
								editorsInfo: r,
								afterToken: n,
								pageKey: s
							} = t.payload, a = e[s];
							if (!a) return e;
							const i = [...a.editorsInfo, ...r];
							return {
								...e,
								[s]: {
									...a,
									editorsInfo: i,
									afterToken: n
								}
							}
						}
						case J.a: {
							const {
								username: r,
								pageKey: n
							} = t.payload, s = e[n];
							if (!s) return e;
							const a = s.editorsInfo.filter(e => e.username !== r);
							return {
								...e,
								[n]: {
									...s,
									editorsInfo: a
								}
							}
						}
						default:
							return e
					}
				},
				X = r("./src/lib/omitKey/index.ts");
			const V = {};
			var $ = (e = V, t) => {
				switch (t.type) {
					case G.b: {
						const {
							key: r,
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case G.d:
					case G.c: {
						const {
							key: r
						} = t.payload;
						return Object(X.a)(e, r)
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
								key: r
							} = t.payload, n = t.type === G.d;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				re = Object(W.c)({
					error: $,
					pending: te
				}),
				ne = r("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const se = {};
			var ae = (e = se, t) => {
				switch (t.type) {
					case G.c: {
						const {
							key: r,
							options: n,
							pageInfo: s,
							revisionsIds: a
						} = t.payload, i = e[r], o = n.after && i ? [...i.ids, ...a] : a;
						return {
							...e,
							[r]: {
								ids: o,
								pageInfo: s
							}
						}
					}
					case G.a: {
						const {
							page: {
								revision: r
							},
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: s
						} = t.payload, a = e[n];
						return a && r ? {
							...Object(X.a)(e, s),
							[n]: {
								...a,
								ids: [r.id, ...a.ids]
							}
						} : e
					}
					case ne.a: {
						const {
							pageRevisionsListingKey: r,
							recentRevisionsListingKey: n
						} = t.payload, s = {
							...e
						};
						return delete s[r], delete s[n], s
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
							} = t.payload, n = r && r.revision;
							return n && !e[n.id] ? {
								...e,
								[n.id]: n
							} : e
						}
						case G.c: {
							const {
								revisions: r
							} = t.payload;
							return {
								...e,
								...r
							}
						}
						case G.a: {
							const {
								page: r
							} = t.payload, n = r.revision;
							return n ? {
								...e,
								[n.id]: n
							} : e
						}
						case G.e: {
							const {
								revisionId: r,
								isHidden: n
							} = t.payload, s = e[r];
							return s ? {
								...e,
								[r]: {
									...s,
									isHidden: n
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
							afterToken: n
						} = t.payload;
						return {
							...e,
							[r]: n
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
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: r
						} = t.payload;
						return Object(X.a)(e, r)
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
							} = t.payload, n = t.type === ce.d;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				he = Object(W.c)({
					error: be,
					pending: fe
				});
			const ve = {};
			var ke = (e = ve, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: r,
								bannedContributors: n
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									...n
								}
							}
						}
						case ce.e: {
							const {
								subredditName: r,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[r]: {
									...e[r],
									...n
								}
							}
						}
						case ce.f: {
							const {
								subredditName: r,
								userId: n
							} = t.payload, s = Object(X.a)(e[r], n);
							return {
								...e,
								[r]: s
							}
						}
						default:
							return e
					}
				},
				ge = r("./node_modules/lodash/uniq.js"),
				xe = r.n(ge);
			const ye = {};
			var _e = (e = ye, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: xe()([...e[r] || [], ...n])
							}
						}
						case ce.e: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: xe()([...n, ...e[r] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: r,
								userId: n
							} = t.payload;
							return {
								...e,
								[r]: (e[r] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				we = Object(W.c)({
					afterToken: ue,
					api: he,
					models: ke,
					userOrder: _e
				});
			const Ie = {};
			var Oe = (e = Ie, t) => {
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: r,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				je = Object(W.c)({
					listing: we,
					search: Oe
				}),
				Ee = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ne = {};
			var Ce = (e = Ne, t) => {
				switch (t.type) {
					case Ee.c:
					case Ee.a: {
						const {
							subredditName: r,
							afterToken: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const Se = {};
			var Pe = (e = Se, t) => {
				switch (t.type) {
					case Ee.b: {
						const {
							subredditName: r,
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case Ee.d:
					case Ee.c: {
						const {
							subredditName: r
						} = t.payload;
						return Object(X.a)(e, r)
					}
					default:
						return e
				}
			};
			const Te = {};
			var Re = (e = Te, t) => {
					switch (t.type) {
						case Ee.d:
						case Ee.c:
						case Ee.b: {
							const {
								subredditName: r
							} = t.payload, n = t.type === Ee.d;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Le = Object(W.c)({
					error: Pe,
					pending: Re
				});
			const Ue = {};
			var Be = (e = Ue, t) => {
				switch (t.type) {
					case Ee.c:
					case Ee.a: {
						const {
							subredditName: r,
							contributors: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...n
							}
						}
					}
					case Ee.e: {
						const {
							subredditName: r,
							contributor: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...n
							}
						}
					}
					case Ee.f: {
						const {
							subredditName: r,
							userId: n
						} = t.payload, s = Object(X.a)(e[r], n);
						return {
							...e,
							newState: s
						}
					}
					default:
						return e
				}
			};
			const Ae = {};
			var De = (e = Ae, t) => {
					switch (t.type) {
						case Ee.c:
						case Ee.a: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: xe()([...e[r] || [], ...n])
							}
						}
						case Ee.e: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: [...n, ...e[r] || []]
							}
						}
						case Ee.f: {
							const {
								subredditName: r,
								userId: n
							} = t.payload;
							return {
								...e,
								[r]: (e[r] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				Fe = Object(W.c)({
					afterToken: Ce,
					api: Le,
					models: Be,
					userOrder: De
				});
			const We = {};
			var He = (e = We, t) => {
					switch (t.type) {
						case Ee.g: {
							const {
								subredditName: r,
								contributor: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Me = Object(W.c)({
					listing: Fe,
					search: He
				}),
				Ke = Object(W.c)({
					diff: M,
					directory: q,
					pages: Q,
					pageSettings: Y,
					revisions: de,
					wikiBannedContributors: je,
					wikiContributors: Me
				});
			Object(F.a)({
				pages: {
					subredditWiki: Ke
				}
			});
			const qe = Object(d.a)(f.c),
				Ge = Object(d.a)(f.b),
				ze = Object(d.a)(f.a),
				Qe = (e, t) => !!Object(w.b)(e, {
					subredditName: t
				}),
				Je = e => async (t, r, s) => {
					const {
						canShowFailToast: i,
						wikiPageName: d
					} = e, c = d === P.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(L.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(qe({
						options: l,
						pageKey: u
					}));
					const m = await Object(T.a)(s.gqlContext(), l),
						b = m.body,
						p = m.ok ? b.data && b.data.subreddit && b.data.subreddit.wiki : null;
					return m.ok && p ? t(Ge({
						options: l,
						pageKey: u,
						subredditWiki: p
					})) : (t(ze({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.H.NOT_FOUND_ERROR
						}
					})), i && t(Object(h.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: U.b.Error,
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e)
					}))), !(!m.ok || !a()(b.data.subreddit)) || !(!m.ok || !p)
				}, Ze = e => async (t, r) => {
					const {
						params: n,
						url: s
					} = e, {
						wikiPageName: a
					} = n, o = Object(A.a)(s, n);
					let d = !1;
					return P.l.includes(a || "") ? (await (async (e, t) => {
						const r = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = r
					})(e.url), d = !0) : s !== o && (await t(Object(i.c)(o)), d = !0), d
				}, Ye = (e, t, r = !1) => async (s, a, i) => {
					const {
						subredditName: d = P.e,
						wikiPageName: l,
						wikiSubRoute: u
					} = e, m = t[S.D], b = t[S.E], f = m ? Object(x.a)(m) : void 0, g = b ? Object(x.a)(b) : void 0, y = l === P.j, _ = u === P.m.Revisions;
					let I = !1,
						O = !1;
					if (r) {
						const {
							pageName: t
						} = e;
						I = t === o.cc.WikiContributors, O = t === o.cc.WikiBanned
					}
					const j = a(),
						T = (y || r) && !Qe(j, d),
						R = !!l && !((e, t, r, n) => {
							return r === P.j ? Qe(e, t) : !!Object(w.c)(e, {
								subredditName: t,
								wikiPageName: r,
								revisionId: n
							})
						})(j, d, l, f),
						L = [];
					L.push(s(((e, t = !1) => async (r, n) => {
						const s = n(),
							a = {
								sort: o.V.HOT
							},
							i = Object(c.a)(e, a.sort),
							d = s.listings.postOrder.api.error[i],
							l = s.listings.postOrder.api.pending[i],
							u = !!s.listings.postOrder.ids[i];
						return !!(l || u && !d) || (await r(Object(p.subredditDataRequested)(i, e, a, t)), !n().listings.postOrder.api.error[i])
					})(d))), (T || R) && L.push(s(Je({
						includeDirectory: T,
						includePageData: R,
						revisionId: f,
						subredditName: d,
						wikiPageName: l
					}))), u === P.m.Settings && l && L.push(s(Object(N.c)(d, l))), l && f && g && L.push(s(E({
						comparisonRevisionId: g,
						revisionId: f,
						subredditName: d,
						wikiPageName: l
					}))), _ && L.push(s(Object(C.c)({
						isRecent: !l,
						wikiPageName: l,
						subredditName: d
					}))), I && L.push(s(Object(k.e)(d))), O && L.push(s(Object(v.e)(d))), (await Promise.all(L)).every(Boolean) || s(Object(h.f)({
						kind: U.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Ye(e, t, r)
					}))
				}, Xe = e => async (t, r) => {
					if (await t(Ze(e))) return;
					const {
						params: n,
						queryParams: s
					} = e, a = n.subredditName || P.e;
					t(u.m({
						title: n.wikiPageName ? `${n.wikiPageName} - ${a}` : `wiki - ${a}`
					})), await t(Ye(n, s));
					const i = Object(D.w)(r(), {
							subredditName: a
						}),
						o = r();
					i && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(b.b)(B.a.SUBREDDIT))
					}), t(Object(b.d)({
						isViewSafe: Object(R.a)([], [i])
					})))
				}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return $
			})), r.d(t, "d", (function() {
				return ne
			})), r.d(t, "b", (function() {
				return ie
			})), r.d(t, "e", (function() {
				return oe
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/get.js"),
				a = r.n(s),
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
				h = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const k = (e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.ib.GET,
				data: r
			});
			var g = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				x = r("./src/reddit/models/SubredditModeration/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/selectors/activeModalId.ts"),
				w = r("./src/reddit/selectors/bannedUser.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/subredditModeration/constants.ts"),
				E = r("./src/lib/initializeClient/installReducer.ts"),
				N = r("./node_modules/redux/es/redux.js");
			var C = (e = null, t) => {
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
			const S = {};
			var P = (e = S, t) => {
					switch (t.type) {
						case j.o: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(x.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case j.n:
						case j.m: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(x.d)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				T = Object(N.c)({
					error: C,
					pending: P
				});
			const R = {};
			var L = (e = R, t) => {
					switch (t.type) {
						case j.n: {
							const {
								fetchedToken: r,
								subredditId: n
							} = t.payload, s = Object(x.d)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				U = r("./src/reddit/actions/inContextModeration.ts");
			var B = (e = null, t) => {
				switch (t.type) {
					case U.a:
						return t.payload;
					default:
						return e
				}
			};
			const A = {};
			var D = (e = A, t) => {
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
				F = r("./node_modules/icepick/icepick.js");
			const W = {};
			var H = (e = W, t) => {
				switch (t.type) {
					case j.l:
					case j.n: {
						const {
							subredditId: r,
							bannedUsers: n
						} = t.payload;
						return Object(F.merge)(e, {
							[r]: n
						})
					}
					case j.s: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(F.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var M = (e = null, t) => {
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
			var K = (e = !1, t) => {
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
				q = Object(N.c)({
					error: M,
					pending: K
				});
			var G = (e = null, t) => {
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
				z = Object(N.c)({
					api: q,
					result: G
				});
			const Q = {};
			var J = (e = Q, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...n]
							} : {
								...e,
								[r]: n
							}
						}
						case j.s: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case j.l: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload, s = n[0];
							return s && e[r] && -1 === e[r].indexOf(s) ? {
								[r]: [s, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				Z = Object(N.c)({
					api: T,
					fetchedTokens: L,
					inContext: B,
					loadMore: D,
					models: H,
					search: z,
					userOrder: J
				});
			Object(E.a)({
				features: {
					banned: Z
				}
			});
			const Y = Object(i.a)(j.o),
				X = Object(i.a)(j.n),
				V = Object(i.a)(j.m),
				$ = (e, t = {}) => async (r, n, {
					apiContext: s
				}) => {
					const a = n(),
						i = t.after || "",
						o = Object(x.d)(e, i),
						d = a.features.banned.fetchedTokens[o];
					if (a.features.banned.api.pending[o] || d) return;
					r(Y({
						subredditId: e,
						fetchedToken: i
					}));
					const c = a.subreddits.models[e].name,
						l = await k(s(), c, t);
					l.ok ? r(X({
						...l.body,
						fetchedToken: i
					})) : r(V({
						subredditId: e,
						fetchedToken: i
					}))
				}, ee = Object(i.a)(j.r), te = Object(i.a)(j.q), re = Object(i.a)(j.p), ne = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const a = n().subreddits.models[e].name,
						i = {
							username: Object(g.a)(t)
						};
					r(ee());
					const o = await k(s(), a, i);
					o.ok ? r(te(o.body)) : r(re(o.error))
				}, se = Object(i.a)(j.l), ae = Object(i.a)(j.s), ie = (e, t, r) => async (s, i, {
					apiContext: d
				}) => {
					const c = i(),
						u = c.subreddits.models[e].url,
						h = c.subreddits.models[e].name;
					t.username = Object(g.a)(t.username), s(Object(o.h)(r));
					const v = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.ib.POST,
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
					if (v.ok) {
						s(Object(o.e)(r));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await k(d(), h, e);
						a.ok && s(se(a.body))
					} else {
						s(Object(o.f)(r, v.error));
						const e = a()(v, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					const o = s().subreddits.models[e].url,
						d = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.ib.POST,
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
						kind: y.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(d, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, n) => {
					const s = n();
					await Promise.all([(async () => {
						if (!Object(_.b)(u.a.BAN_USER)(s) && !Object(I.N)(s, {
								subredditId: e
							})) {
							const t = Object(I.Q)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(O.nb)(s, {
							userName: t
						});
						if (!n) return;
						const a = Object(w.h)(s, {
							subredditId: e
						});
						a && a[n.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
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
			const n = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				s = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				a = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				i = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return g
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
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
						pageInfo: n
					} = t, s = [], a = {};
					return r.forEach(e => {
						const {
							date: t,
							redditor: r,
							editWikiBanInfo: n
						} = e.node;
						r.id && r.name && r.icon && (a[r.id] = {
							id: r.id,
							username: r.name,
							iconUrl: r.icon.url,
							date: t,
							daysRemaining: n.daysRemaining,
							note: n.note
						}, s.push(r.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						bannedContributors: a,
						userOrder: s
					}
				},
				p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const h = Object(a.a)(f.d),
				v = Object(a.a)(f.c),
				k = Object(a.a)(f.b),
				g = e => async (t, r, n) => {
					t(h({
						subredditName: e
					}));
					const a = {
							subredditName: e
						},
						i = await m(n.gqlContext(), a);
					if (i.ok) {
						const r = i.body,
							n = r.data.subreddit && r.data.subreddit.wiki;
						if (n) {
							const r = b(n);
							t(v({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = i.error || {
							type: s.H.UNKNOWN_ERROR
						};
						t(k({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return i.ok
				}, x = Object(a.a)(f.a), y = (e, t) => async (r, s, a) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki);
							r(x({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(i.f)({
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
				}, _ = Object(a.a)(f.e), w = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.ib.POST,
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
							text: n.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const s = {
								subredditName: e,
								username: t.username
							},
							a = (await m(d.gqlContext(), s)).body;
						if (a.data.subreddit.wiki) {
							const t = b(a.data.subreddit.wiki);
							r(_({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === s.H.USER_DOESNT_EXIST && (e = n.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), r(Object(i.f)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, I = Object(a.a)(f.f), O = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.ib.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(i.f)({
						kind: p.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), r(I({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(i.f)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), u.ok
				}, j = Object(a.a)(f.g), E = (e, t) => async (r, s, a) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki),
								s = Object.keys(n.bannedContributors)[0];
							r(j({
								subredditName: e.toLowerCase(),
								bannedContributor: n.bannedContributors[s]
							}))
						}
					} else r(Object(i.f)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
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
			const n = "WIKI_CONTRIBUTORS_PENDING",
				s = "WIKI_CONTRIBUTORS_LOADED",
				a = "WIKI_CONTRIBUTORS_FAILED",
				i = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return g
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
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
						pageInfo: n
					} = t, s = [], a = {};
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
						}, s.push(r.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						contributors: a,
						userOrder: s
					}
				},
				p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const h = Object(a.a)(f.d),
				v = Object(a.a)(f.c),
				k = Object(a.a)(f.b),
				g = e => async (t, r, n) => {
					t(h({
						subredditName: e
					}));
					const a = {
							subredditName: e
						},
						i = await m(n.gqlContext(), a);
					if (i.ok) {
						const r = i.body,
							n = r.data.subreddit && r.data.subreddit.wiki;
						if (n) {
							const r = b(n);
							t(v({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = i.error || {
							type: s.H.UNKNOWN_ERROR
						};
						t(k({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return i.ok
				}, x = Object(a.a)(f.a), y = (e, t) => async (r, s, a) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki);
							r(x({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(i.f)({
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
				}, _ = Object(a.a)(f.e), w = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.ib.POST,
						data: {
							api_type: "json",
							name: r,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						r(Object(i.f)({
							kind: p.b.SuccessMod,
							text: n.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const s = {
								subredditName: e,
								username: t
							},
							o = (await m(d.gqlContext(), s)).body;
						if (o.data.subreddit.wiki) {
							const t = b(o.data.subreddit.wiki),
								n = Object.keys(t.contributors)[0];
							!!a().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || r(_({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === s.H.USER_DOESNT_EXIST ? e = n.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === s.H.BANNED_FROM_SUBREDDIT && (e = n.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), r(Object(i.f)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, I = Object(a.a)(f.f), O = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.ib.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(i.f)({
						kind: p.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), r(I({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(i.f)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), u.ok
				}, j = Object(a.a)(f.g), E = (e, t) => async (r, s, a) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki),
								s = Object.keys(n.contributors)[0];
							r(j({
								subredditName: e.toLowerCase(),
								contributor: n.contributors[s]
							}))
						}
					} else r(Object(i.f)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			const n = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				s = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				a = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				i = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return _
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "d", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
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
			var h = e => {
					const {
						editPermissions: t,
						editorsInfo: r,
						isVisible: n
					} = e, {
						edges: s,
						pageInfo: a
					} = r, i = [];
					return s.forEach(e => {
						e.node.name && e.node.icon && i.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: i,
						isVisible: n,
						afterToken: a.hasNextPage ? a.endCursor : null
					}
				},
				v = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(a.a)(x.c),
				_ = (e, t) => async (r, n, s) => {
					const a = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(s.gqlContext(), a),
						d = Object(g.B)(n(), e);
					if (Object(g.S)(n(), d) || await r(Object(i.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = h(t.page.settings);
							r(y({
								pageKey: Object(v.a)(a),
								settings: e
							}))
						}
					}
					return o.ok
				}, w = Object(a.a)(x.b), I = (e, t, r) => async (s, a, i) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: r
						},
						c = await p(i.gqlContext(), d);
					if (c.ok) {
						const r = c.body,
							n = r.data.subreddit && r.data.subreddit.wiki;
						if (n && n.page) {
							const r = h(n.page.settings),
								{
									editorsInfo: a,
									afterToken: i
								} = r;
							s(w({
								editorsInfo: a,
								afterToken: i,
								pageKey: Object(v.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else s(Object(o.f)({
						kind: k.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: I(e, t, r)
					}));
					return c.ok
				}, O = Object(a.a)(x.d), j = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: r,
					subredditName: n
				}) => async (a, i, o) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: s.ib.POST,
						data: {
							permlevel: f[e.editPermissions],
							listed: e.isVisible ? "on" : void 0
						}
					}))({
						context: o.apiContext(),
						editPermissions: e,
						isVisible: t,
						wikiPageName: r,
						subredditName: n
					});
					return c.ok && a(O({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(v.a)({
							wikiPageName: r,
							subredditName: n
						})
					})), c.ok
				}, E = ({
					subredditName: e,
					username: t,
					wikiPageName: r
				}) => async (a, i, c) => {
					const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: s.ib.POST,
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
						kind: k.b.SuccessCommunity,
						text: "User successfully added"
					})), await a(_(e, r));
					else if (m.error) {
						const e = m.error.type;
						let t = n.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === s.H.NOT_FOUND_ERROR && (t = n.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), a(Object(o.f)({
							kind: k.b.Error,
							text: t
						}))
					}
					return m.ok
				}, N = Object(a.a)(x.a), C = ({
					subredditName: e,
					username: t,
					wikiPageName: r
				}) => async (n, a, i) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
						method: s.ib.POST,
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
					return c.ok && (n(Object(o.f)({
						kind: k.b.SuccessCommunity,
						text: "User has been successfully removed"
					})), n(N({
						username: t,
						pageKey: Object(v.a)({
							wikiPageName: r,
							subredditName: e
						})
					}))), c.ok
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return o
			}));
			const n = "WIKI_REVISIONS_PENDING",
				s = "WIKI_REVISIONS_LOADED",
				a = "WIKI_REVISIONS_FAILED",
				i = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "b", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
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
				method: s.ib.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var f = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: s.ib.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var h = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						r = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!r) throw new Error("Invalid response");
					return (e => {
						const t = {},
							r = [];
						return e.edges.forEach(e => {
							const n = e.node;
							t[n.id] = n, r.push(n.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: r
						}
					})(r)
				},
				v = r("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				k = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				x = r("./src/reddit/selectors/subredditWiki.ts"),
				y = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const _ = Object(a.a)(y.d),
				w = Object(a.a)(y.c),
				I = Object(a.a)(y.b),
				O = e => async (t, r, a) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: b
					} = e, p = r(), f = Object(v.a)(e), k = Object(x.p)(p, {
						listingKey: f
					});
					if (!o && !!k) return !0;
					const y = k && k.pageInfo.endCursor || void 0;
					if (!(!k || k.pageInfo.hasNextPage)) return !0;
					const j = {
							after: y,
							isRecent: u,
							subredditName: m,
							wikiPageName: b
						},
						E = {
							key: f,
							options: j
						};
					t(_(E));
					const N = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(a.gqlContext(), j);
					if (N.ok) {
						const e = N.body;
						if (e.data.subreddit) {
							const r = h(e.data);
							t(w({
								...E,
								...r
							}))
						}
					} else {
						const r = N.error || {
							type: s.H.UNKNOWN_ERROR
						};
						t(I({
							...E,
							error: r
						})), l && t(Object(i.f)({
							kind: g.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: O(e)
						}))
					}
					return N.ok
				}, j = Object(a.a)(y.a), E = e => async (t, r, s) => {
					const {
						subredditName: a,
						wikiPageName: d
					} = e, c = Object(k.a)({
						...e,
						revisionId: void 0
					}), l = Object(v.a)({
						...e,
						isRecent: !1
					}), u = Object(v.a)({
						...e,
						isRecent: !0
					}), m = Object(x.p)(r(), {
						listingKey: l
					}), b = m && m.ids[0];
					if ((await f(s.apiContext(), e)).ok) {
						const e = (await Object(o.a)(s.gqlContext(), {
								includePageData: !0,
								subredditName: a,
								wikiPageName: d
							})).body,
							r = e.data.subreddit && e.data.subreddit.wiki,
							m = r && r.page;
						if (!m || !m.revision) return;
						if (m.revision.id === b) return void t(Object(i.f)({
							kind: g.b.SuccessCommunityGreen,
							text: n.fbt._("Wiki page is already at selected revision!", null, {
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
						kind: g.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e)
					}))
				}, N = Object(a.a)(y.e), C = e => async (t, r, s) => {
					const a = await p(s.apiContext(), e);
					if (a.ok) {
						const r = a.body.status;
						t(N({
							revisionId: e.revisionId,
							isHidden: r
						}))
					} else t(Object(i.f)({
						kind: g.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e)
					}))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: s,
				contextId: i,
				priority: o,
				Icon: d,
				redditStyle: u,
				isFullWidth: m,
				eventSource: b,
				onClick: p,
				onAddUserToQuickReplyList: f,
				children: h
			}) => {
				return a.a.createElement(c.s, {
					onClick: t => {
						if (p && p(t), e(), b === n.awardNotification) return f();
						s(Object(l.b)(i))
					},
					className: r,
					text: t,
					priority: o,
					Icon: d,
					redditStyle: u,
					isFullWidth: m
				}, h)
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
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, r) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
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
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
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
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/react-router/esm/react-router.js"),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/lib/loginHref/index.ts"),
				m = r("./src/reddit/actions/contentGate.ts"),
				b = r("./src/reddit/actions/preferences.ts"),
				p = r("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				f = r("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = r("./src/reddit/components/Footer/index.m.less"),
				v = r.n(h);
			const {
				fbt: k
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = l.a.div("FooterContainer", v.a), x = l.a.div("UserAgreement", v.a), y = l.a.a("UserAgreementLink", v.a), _ = l.a.a("PrivacyLink", v.a);
			var w = () => a.a.createElement(g, null, a.a.createElement(x, null, k._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [k._param("=User Agreement", a.a.createElement(y, {
					href: `${n.a.redditUrl}/help/useragreement`
				}, k._("User Agreement", null, {
					hk: "2srkM2"
				}))), k._param("=Privacy Policy", a.a.createElement(_, {
					href: `${n.a.redditUrl}/help/privacypolicy`
				}, k._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), k._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				I = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				O = r("./src/reddit/components/RichTextJson/index.tsx"),
				j = r("./node_modules/lodash/flatMap.js"),
				E = r.n(j),
				N = r("./src/lib/linkMatchers/index.ts"),
				C = r("./src/lib/linkMatchers/customLinks.ts"),
				S = r("./src/reddit/controls/OutboundLink/index.tsx");
			const P = /\[(.+?)\]\((.+?)\)/g,
				T = e => {
					const t = e.split(P);
					if (1 === t.length) return [e];
					const r = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, s, a] = t.slice(n, n + 3);
						r.push(e), r.push([a, s])
					}
					return r
				};
			var R = a.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = E()(t, T)), e.parseRegularLinks && (t = E()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = N.f.add(C.g.subreddit.prefix, C.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let n = null;
						for (const s of t) r.push(e.slice(n ? n.lastIndex : 0, s.index)), n = s, r.push([s.url, s.text]);
						return n && r.push(e.slice(n.lastIndex)), r
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [n, s] = t;
							return a.a.createElement(S.b, {
								className: e.linkClassName,
								href: n,
								key: r
							}, s)
						}
						return a.a.createElement("span", {
							key: r
						}, t)
					}), " ")
				}),
				L = r("./src/reddit/contexts/PageLayer/index.tsx"),
				U = r("./src/reddit/controls/Button/index.tsx"),
				B = r("./src/chat/controls/Svg/index.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var D = e => a.a.createElement(B.a, A({}, e, {
					viewBox: "-1 -1 21 21"
				}), a.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				F = r("./src/reddit/models/ContentGate.ts"),
				W = r("./src/lib/constants/index.ts"),
				H = r("./src/reddit/selectors/platform.ts"),
				M = r("./src/reddit/selectors/user.ts");
			var K = r("./src/reddit/selectors/meta.ts"),
				q = r("./src/reddit/components/ContentGate/index.m.less"),
				G = r.n(q);
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Q = l.a.wrapped(D, "PrivateKey", G.a), J = l.a.div("ButtonsContainer", G.a), Z = l.a.div("Container", G.a), Y = l.a.div("ContainerExp", G.a), X = l.a.div("Description", G.a), V = l.a.div("PrivateSubredditDetails", G.a), $ = l.a.div("PrivateSubredditDescription", G.a), ee = l.a.h3("PrivateSubredditName", G.a), te = l.a.a("Link", G.a), re = l.a.wrapped(U.m, "LinkRouterButton", G.a), ne = l.a.wrapped(U.l, "LinkButton", G.a), se = l.a.wrapped(U.p, "SecondaryLinkRouterButton", G.a), ae = l.a.wrapped(U.o, "SecondaryLinkButton", G.a), ie = l.a.wrapped(re, "GoHomeLinkButton", G.a), oe = l.a.wrapped(f.a, "CreateCommunityButton", G.a), de = l.a.img("Image", G.a), ce = l.a.img("ImagePlaceholder", G.a), le = l.a.wrapped(re, "LeftLinkRouterButton", G.a), ue = l.a.wrapped(ne, "LeftLinkButton", G.a), me = l.a.wrapped(ae, "SecondaryLeftLinkButton", G.a), be = l.a.wrapped(se, "SecondaryLeftLinkRouterButton", G.a), pe = l.a.h3("Title", G.a), fe = l.a.div("PageBody", G.a), he = l.a.div("QuarantineMessageWrapper", G.a), ve = Object(c.c)({
				isLoggedIn: M.J,
				origin: K.j,
				user: M.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(M.K)(e)) return !1;
					const t = Object(H.d)(e);
					if (!t) return !1;
					const r = Object(M.f)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = r;
					if (!n) return !1;
					const s = 30 * W.A;
					return n > Date.now() - s
				})(e)
			}), ke = Object(L.u)(), ge = Object(i.b)(ve, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(b.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.l)())
				}
			})), xe = e => {
				const {
					banMessage: t,
					contentGateType: r,
					continueToQuarantinedSubreddit: s,
					isLoggedIn: i,
					isContributorRequestsDisabled: o,
					isPrivateSubredditContributorRequestPending: d,
					location: c,
					origin: l,
					pageLayer: b,
					quarantineRequiresEmail: f,
					quarantineMessage: h,
					quarantineMessageHtml: v,
					quarantineMessageRTJson: k,
					setNSFWPreference: g,
					subredditDescription: x,
					subredditName: y,
					user: _
				} = e, w = async () => {
					i ? await g() : await Object(m.k)(), window.location.reload()
				};
				switch (r) {
					case F.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(pe, null, z._("r/{community name} is a Reddit Premium community", [z._param("community name", y)], {
							hk: "2lyDwB"
						})), a.a.createElement(X, null, z._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(J, null, _ ? a.a.createElement(me, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, z._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(ue, {
							href: Object(u.a)(c, l),
							redditStyle: !0
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), _ ? a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(ae, {
							href: Object(u.a)(c, l),
							redditStyle: !0
						}, z._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case F.a.Nsfw:
					case F.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(pe, null, r === F.a.Nsfw ? z._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : z._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(X, null, z._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(J, null, a.a.createElement(le, {
							to: "/",
							redditStyle: !0
						}, z._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(ae, {
							onClick: w,
							redditStyle: !0
						}, z._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case F.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Q, null), a.a.createElement(pe, null, "r/", y, " ", z._("is a private community", null, {
							hk: "7zZmq"
						})), x && x.length && a.a.createElement(V, null, a.a.createElement(ee, null, "r/", y), a.a.createElement($, null, a.a.createElement("div", null, x))), a.a.createElement(X, null, z._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", y, " ", z._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), z._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(J, null, _ ? a.a.createElement(a.a.Fragment, null, !o && a.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: G.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), a.a.createElement(me, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${y}`,
							redditStyle: !0
						}, z._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(me, {
							href: Object(u.a)(c, l),
							redditStyle: !0
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, z._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case F.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), a.a.createElement(pe, null, z._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(X, null, z._("This community is {=quarantined}", [z._param("=quarantined", a.a.createElement(te, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, z._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(he, null, k ? a.a.createElement(O.a, {
							content: k,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : v ? a.a.createElement(I.a, {
							html: v
						}) : h || z._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), z._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(J, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? a.a.createElement(J, null, a.a.createElement(be, {
								to: "/",
								redditStyle: !0
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ne, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, z._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(J, null, a.a.createElement(le, {
								to: "/",
								redditStyle: !0
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ae, {
								onClick: t,
								redditStyle: !0
							}, z._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(_, s, f)));
					case F.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(pe, null, z._("r/{community name} has been banned from Reddit", [z._param("community name", y)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(X, null, e ? a.a.createElement(R, {
							linkClassName: G.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : z._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(J, null, a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(pe, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(J, null, a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case F.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(ce, null), a.a.createElement(pe, null, z._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(X, null, z._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(J, null, _ && a.a.createElement(oe, {
							eventSource: "content_gate"
						}), a.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.ProfileDoesNotExist:
					case F.a.ProfileDeleted:
					case F.a.ProfileSuspended:
					case F.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(pe, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case F.a.ProfileBlockedForLegalReason:
									return z._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case F.a.ProfileDeleted:
									return z._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case F.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, z._("This account has been {=suspended} .", [z._param("=suspended", a.a.createElement(te, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, z._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case F.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(pe, null, z._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(X, null, z._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(J, null, a.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(pe, null, z._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(J, null, a.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case F.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(pe, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(J, null, a.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, z._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ke(ge(Object(o.i)(e => {
				const t = Object(s.useContext)(d.a) ? Y : Z;
				return a.a.createElement(t, null, a.a.createElement("div", null, a.a.createElement(fe, null, xe(e))), a.a.createElement(w, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("ContributorRequestButton").then(r.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, r) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/components/CreateCommunityButton/index.m.less"),
				v = r.n(h),
				k = r("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				x = k.a.wrapped(l.c, "StyledTooltip", v.a),
				y = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.ib)(e),
					userIsSuspended: f.R
				});
			t.a = Object(i.b)(y, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: r => {
					r(Object(p.c)(t)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: g
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: r,
				onHideTooltip: s,
				openCommunityCreation: i,
				sendEvent: o,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: c,
				onClick: l
			}) => {
				return a.a.createElement(b.s, {
					className: e,
					disabled: c || d,
					onClick: e => {
						l && l(e), i(o)
					},
					onMouseEnter: r,
					onMouseLeave: s,
					priority: b.b.Secondary,
					id: g,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? a.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : c ? a.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/ImageInput/index.tsx"),
				d = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/models/ApiRequestState/index.ts"),
				u = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = r("./src/reddit/components/EditableImage/index.m.less"),
				b = r.n(m);
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: r,
				isProfileCard: n,
				isLoading: m,
				imageUrl: p,
				onFileSelected: f
			}) => {
				const h = Object(a.e)(u.a);
				return s.a.createElement("div", {
					className: Object(i.a)(b.a.Container, r)
				}, s.a.createElement("label", {
					className: b.a.HitBox
				}, s.a.createElement("span", {
					className: b.a.ImageContainer,
					role: "presentation"
				}, p ? s.a.createElement("img", {
					alt: e,
					className: b.a.Image,
					src: p
				}) : t), s.a.createElement(o.a, {
					className: b.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: h ? m : void 0
				}), !m && s.a.createElement("div", {
					className: Object(i.a)(b.a.EditButton, {
						[b.a.profileCard]: n
					})
				}, s.a.createElement(c.a, {
					name: "add_media",
					className: b.a.EditIcon
				}))), m && s.a.createElement(d.a, {
					className: b.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/selectors/gold/awardIcon.ts"),
				l = r("./src/reddit/selectors/meta.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				m = r("./src/reddit/selectors/profile.ts"),
				b = r("./src/reddit/selectors/structuredStyles.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/tooltip.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/selectors/userFlair.ts"),
				k = r("./src/reddit/selectors/userPrefs.ts"),
				g = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/config.ts"),
				y = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = r("./src/lib/lessComponent.tsx"),
				w = r("./src/lib/prettyPrintNumber/index.ts"),
				I = r("./src/reddit/components/ChatButton/index.tsx"),
				O = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				j = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				E = r("./src/reddit/components/SubscribeButton/index.tsx"),
				N = r("./src/reddit/components/UserIcon/index.tsx"),
				C = r("./src/reddit/endpoints/profile/info.ts"),
				S = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				P = r("./src/reddit/icons/fonts/Info/index.tsx"),
				T = r("./src/reddit/icons/svgs/Admin/index.tsx");
			var R = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				L = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				U = r("./src/reddit/models/Gold/Award.ts"),
				B = r("./src/reddit/models/User/index.ts"),
				A = r("./src/reddit/components/HumanDate/index.tsx"),
				D = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				F = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				W = r("./src/reddit/actions/inContextModeration.ts"),
				H = r("./src/reddit/actions/modal.ts"),
				M = r("./src/reddit/actions/subredditModeration/ban.ts"),
				K = r("./src/reddit/constants/modals.ts"),
				q = r("./src/reddit/components/Hovercards/helpers.ts"),
				G = r("./src/reddit/icons/fonts/index.tsx"),
				z = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Q = r("./src/reddit/selectors/bannedUser.ts"),
				J = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Z = r.n(J);
			const {
				fbt: Y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), X = Object(i.c)({
				hasModMailPermissions: Object(u.b)(z.c.mail),
				isUserBanned: (e, t) => !!Object(Q.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(h.nb)(e, {
					userName: t.username
				})
			});
			class V extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: n,
						onUnbanUser: a,
						sendEvent: i,
						toggleBanModal: o,
						toggleMuteModal: d
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), i(S.e(t))
						}
					}, s.a.createElement(G.a, {
						name: "ban",
						isFilled: !0,
						className: Z.a.icon
					}), Y._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							o(), i(S.a(t))
						}
					}, s.a.createElement(G.a, {
						name: "ban",
						className: Z.a.icon
					}), Y._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(q.a, {
						role: "button",
						onClick: () => {
							d(), i(S.d(t))
						}
					}, s.a.createElement(G.a, {
						name: "mod_mute",
						className: Z.a.icon
					}), Y._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(a.b)(X, (e, {
					username: t,
					subredditId: r,
					contextId: n
				}) => ({
					onUnbanUser: t => e(Object(M.e)(r, t)),
					requestUserBanInfo: () => e(Object(M.c)(r, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(W.c)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(M.a)(r, t))
					},
					toggleMuteModal: () => {
						e(Object(W.d)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(H.i)(K.a.MUTE_USER))
					}
				}))(V),
				ee = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var re = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(q.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(S.c(e.contextId))
					}
				}, s.a.createElement(G.a, {
					name: "tag",
					className: Z.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ne = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				se = r.n(ne);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = _.a.wrapped(N.a, "UserIcon", se.a),
				oe = _.a.wrapped(E.a, "SubscribeButton", se.a),
				de = _.a.wrapped(I.b, "ChatButton", se.a),
				ce = _.a.wrapped(R, "KarmaIcon", se.a),
				le = _.a.wrapped(L.a, "PremiumIcon", se.a),
				ue = _.a.wrapped(y.a, "UserNameLink", se.a),
				me = _.a.div("UserNameMetaData", se.a),
				be = _.a.div("MetaDataItem", se.a),
				pe = _.a.div("Bullet", se.a),
				fe = _.a.div("UserNameContainer", se.a),
				he = _.a.div("UserInfoContainer", se.a),
				ve = _.a.div("PostKarma", se.a),
				ke = _.a.div("CommentKarma", se.a),
				ge = _.a.div("KarmaGrid", se.a),
				xe = _.a.div("GenericKarma", se.a),
				ye = _.a.a("InfoLink", se.a),
				_e = _.a.div("KarmaCount", se.a),
				we = _.a.div("KarmaLabel", se.a),
				Ie = _.a.div("GenericKarmaLabel", se.a),
				Oe = _.a.div("BannerImage", se.a),
				je = _.a.div("UserContainer", se.a),
				Ee = _.a.div("BottomSpacer", se.a),
				Ne = _.a.div("Container", se.a),
				Ce = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(ue, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && s.a.createElement(T.a, {
					className: se.a.adminIcon,
					title: g.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(y.a, {
					to: "/premium"
				}, s.a.createElement(le, null))), s.a.createElement(me, null, e.user.username && s.a.createElement(be, null, e.user.username, s.a.createElement(pe, null, "•")), s.a.createElement(be, null, (e.user.createdUtc || e.user.created) && s.a.createElement(A.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Se = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: r
						}
					} = e, n = {
						...C.a,
						...r
					};
					return t ? s.a.createElement(ge, null, s.a.createElement(xe, null, s.a.createElement(_e, null, Object(w.b)(n.fromPosts)), s.a.createElement(Ie, null, g.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [g.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(xe, null, s.a.createElement(_e, null, Object(w.b)(n.fromComments)), s.a.createElement(Ie, null, g.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [g.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(xe, null, s.a.createElement(_e, null, Object(w.b)(n.fromAwardsReceived)), s.a.createElement(Ie, null, g.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [g.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(ye, {
						href: U.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(P.a, {
						className: se.a.infoIcon
					})))), s.a.createElement(xe, null, s.a.createElement(_e, null, Object(w.b)(n.fromAwardsGiven)), s.a.createElement(Ie, null, g.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [g.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(ye, {
						href: U.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(P.a, {
						className: se.a.infoIcon
					}))))) : s.a.createElement(he, null, s.a.createElement(ce, null), s.a.createElement(ve, null, s.a.createElement(_e, null, Object(w.b)(n.fromPosts)), s.a.createElement(we, null, g.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [g.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ke, null, s.a.createElement(_e, null, Object(w.b)(n.fromComments)), s.a.createElement(we, null, g.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [g.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Pe = e => {
					const {
						className: t,
						contextId: r,
						currentUser: n,
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
						topAwardIcon: h,
						userName: v,
						user: k,
						userFlair: y,
						userIsBanned: _,
						userProfileStyles: w,
						acceptChats: I,
						isCommentAuthorBlocked: j
					} = e;
					if (!k) return s.a.createElement(Ne, {
						style: p
					});
					const E = !!n && Object(B.e)(n) === v,
						N = !!(null == n ? void 0 : n.snoovatarFullBodyAsset),
						C = k.accountIcon || `${x.a.assetPath}/img/snoo_user_placeholder.png`,
						P = l && l.flair,
						T = l && l.access,
						R = y && y.templateIds && y.templateIds.length > 0,
						L = y && y.displaySettings && y.displaySettings.isEnabled,
						{
							awardedLastMonth: U
						} = k,
						A = !!k.snoovatarFullBodyAsset,
						W = k.isNSFW && a;
					let H;
					return H = A ? !W && w && w.bannerBackgroundImage || void 0 : W ? `${x.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Ne, {
						className: t,
						id: i,
						style: p
					}, !A && H && s.a.createElement(Oe, {
						style: {
							backgroundImage: `url('${H}')`
						}
					}), s.a.createElement(je, null, A ? s.a.createElement(F.a, {
						isHovercard: !0,
						bannerBackgroundImage: H,
						compact: !0,
						currentUserHasSnoovatar: N,
						isEmployee: k.isEmployee,
						isGold: k.isGold,
						isNSFW: k.isNSFW,
						isOwnProfile: E,
						onClickSnoovatar: d,
						prefersReducedAnimations: !!u,
						snoovatarUrl: k.snoovatarFullBodyAsset,
						title: null,
						userCreated: k.created,
						username: v,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(fe, null, s.a.createElement(ie, {
						iconUrl: C,
						isNSFW: k.isNSFW,
						userName: v
					}), s.a.createElement(Ce, {
						origin: c,
						user: k,
						userName: v
					})), s.a.createElement(Se, {
						showAwardKarma: b,
						user: k
					}), U && s.a.createElement(D.a, {
						recentAwardings: U,
						topAwardIcon: h,
						username: v
					}), o && !E && !_ && I && !j && s.a.createElement(de, {
						contextId: r,
						userId: k.id,
						text: g.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), k.hasUserProfile && !_ && !j && !E && k.enableFollowers && s.a.createElement(oe, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(S.g)(e ? "unfollow" : "follow", r),
						isFullWidth: !0,
						small: !0
					})), T && r && !E && f && s.a.createElement($, {
						contextId: r,
						subredditId: f,
						sendEvent: m,
						username: v
					}), P && r && R && L && f && s.a.createElement(re, {
						contextId: r,
						subredditId: f,
						sendEvent: m,
						username: v
					}), s.a.createElement(O.i, {
						contextId: r,
						subredditId: f,
						user: k
					}), !(T || o) && s.a.createElement(Ee, null))
				},
				Te = Object(j.a)(Pe),
				Re = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Te, ae({
						isOpen: t
					}, e))
				};
			Re.WrappedComponent = Pe;
			var Le = Re;
			const Ue = Object(i.c)({
					activeTooltipId: f.a,
					currentUser: h.k,
					isLoggedIn: h.K,
					hideNSFWPref: h.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.m)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: k.c,
					showAwardKarma: (e, t) => {
						return Object(f.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(c.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: h.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(v.d)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(p.m)(t) && Object(p.bb)(e, t),
					userProfileStyles: (e, t) => Object(b.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(m.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					}
				}),
				Be = Object(a.b)(Ue, (e, t) => ({
					onClickSnoovatar: () => e(Object(o.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Be(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Le, {
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
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return s.a.createElement(a.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, s.a.createElement(i.a, {
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
				return x
			})), r.d(t, "b", (function() {
				return y
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
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
						var r;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(b.u)(t.authorOrSubredditName)), null === (r = t.onShow) || void 0 === r || r.call(t)
					}
				})),
				h = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = r.n(h);
			class k extends s.a.Component {
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
					return s.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const g = a.a.wrapped(k, "HoverDiv", v.a),
				x = m(g),
				y = f(g)
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
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/Inline/index.tsx"),
				a = r("./src/reddit/components/Hovercards/helpers.m.less"),
				i = r.n(a);
			const o = n.a.wrapped(s.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: s,
						tooltipType: a
					} = e;
					let i = s;
					return r && (i = `${i}--${r}`), a && (i = `${i}--${a}`), t && (i = `${i}--${t}`), n && (i = `${i}--${n}`), i
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = r("./src/reddit/icons/fonts/Info/index.tsx"),
				c = r("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = r.n(c);
			const u = Object(a.a)(o.a),
				m = ["center", "bottom"],
				b = ["center", "top"];
			class p extends s.a.Component {
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
					return s.a.createElement("span", {
						className: l.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, s.a.createElement(d.a, null), s.a.createElement(u, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/config.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(o);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: o
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: d.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), o > 1 && s.a.createElement("span", {
						className: d.a.count
					}, `+${Object(i.b)(o-1)}`)), s.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", n.name), c._plural(o)], {
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
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
						hideNSFWPref: s,
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
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : i && s ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const o = Object(s.c)({
					currentUser: i.k,
					hideNSFWPref: i.C
				}),
				d = Object(n.b)(o, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.B)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
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
				isOwnProfile: n,
				onClick: c
			}) {
				return s.a.createElement(i.s, {
					onClick: c,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && n,
						[l.a.compactButtonLayout]: e
					}, r)
				}, t ? s.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : n ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(o.a, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
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
				editMode: n,
				isDeletingBanner: d,
				onDeleteBanner: l
			}) {
				return s.a.createElement("div", {
					className: c.a.bannerWrapper
				}, s.a.createElement(o.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), n && e && (d ? s.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(i.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				i = r("./src/reddit/components/HumanDate/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: n,
				username: d,
				...c
			}) {
				const l = t ? s.a.createElement(s.a.Fragment, null, "u/", d, " · ", s.a.createElement(i.d, {
					seconds: n,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return r ? s.a.createElement(a.a, o({}, c, {
					className: e,
					to: r
				}), l) : s.a.createElement("span", o({}, c, {
					className: e
				}), l)
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
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
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
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), a && i.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${n.a.redditUrl}/premium`
			}, i.a.createElement(c.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && i.a.createElement(d.a, {
				className: u.a.snoovatarNsfwIcon,
				title: s.fbt._("NSFW - Adult Content", null, {
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				b = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				p = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				f = r.n(p);
			const h = 25;

			function v(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function k(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const g = v("particleDelay", f.a),
				x = v("particleX", f.a),
				y = v("particleFloat", f.a),
				_ = () => {
					const e = k(x),
						t = k(y),
						r = k(g);
					return Object(i.a)(f.a.particle, e, t, r)
				};
			class w extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < h; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: f.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${_()}`
					})
				}
			}
			var I = w,
				O = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				j = r.n(O),
				E = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: n,
				isDeletingBanner: p,
				isEmployee: h,
				isGold: v,
				isNSFW: k,
				isOwnProfile: g,
				onClickSnoovatar: x,
				onDeleteBanner: y,
				prefersReducedAnimations: _,
				snoovatarUrl: w,
				title: O,
				userCreated: N,
				username: C,
				url: S,
				isHovercard: P
			}) => {
				const T = Object(a.e)(e => !g && !!w && Object(c.h)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!n,
					isNSFW: k,
					username: C,
					isDeletingBanner: !!p,
					onDeleteBanner: y
				}), s.a.createElement("div", {
					className: f.a.snoovatarContainer
				}, v && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: f.a.topGlow
				}), s.a.createElement("div", {
					className: f.a.bottomGlow
				}), !_ && s.a.createElement(I, null)), s.a.createElement("img", {
					className: Object(i.a)(f.a.snoovatar, {
						[f.a.premiumGlow]: v
					}),
					src: w || void 0
				})), !n && g && s.a.createElement(o.a, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, s.a.createElement(d.a, {
					name: "settings",
					className: j.a.settingsIcon
				})), s.a.createElement(E.a, {
					isEmployee: h,
					isGold: v,
					isNSFW: k,
					title: O,
					username: C
				}), s.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: C,
					userCreated: N,
					url: S
				}), (g || !r && !!w) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: g,
					onClick: x
				}), T && s.a.createElement(u.a, {
					username: C,
					isHovercard: !!P,
					share: {
						username: C
					}
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
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, r) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = r("./src/reddit/components/SubscribeButton/Base.m.less"),
				c = r.n(d),
				l = r("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, r) => null != r ? r : t ? e : i.b.Plain,
				b = ({
					border: e,
					priority: t,
					small: r,
					...n
				}) => a.a.createElement(i.s, u({}, n, {
					priority: m(i.b.Primary, e, t),
					className: Object(l.a)(n.className, c.a.BaseButton),
					size: r ? i.c.S : i.c.M
				})),
				p = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: c.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? n.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : n.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: c.a.UnsubscribeButtonHover
				}, "subreddit" === e ? n.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : n.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = ({
					buttonType: e,
					border: t,
					priority: r,
					small: n,
					...s
				}) => a.a.createElement(i.s, u({}, s, {
					priority: m(i.b.Secondary, t, r),
					className: Object(l.a)(s.className, c.a.BaseButton),
					size: n ? i.c.S : i.c.M,
					text: p(e)
				}));
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: r,
						priority: n,
						small: s = !1,
						isFullWidth: i = !1
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: n,
						small: s,
						isFullWidth: i
					};
					return this.props.userIsSubscriber ? a.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(b, u({}, d, {
						id: r
					}), this.props.children, Object(o.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				a = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => a[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/TrackingHelper/index.tsx"),
				s = r("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = r("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(n.c)(a.a))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/subscription/index.ts"),
				i = r("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				o = r("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(s.c)({
				isInJoinOptimizationsExperiment: e => Object(i.a)(e) || Object(i.b)(e) || Object(i.c)(e) || Object(i.d)(e),
				userIsSubscriber: o.cb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(a.d([t], !0)),
				onSubscriptionsRequested: () => e(a.e()),
				onUnsubscribe: () => e(a.d([t], !1))
			}))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, r) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				o = r("./src/reddit/controls/Checkbox/index.m.less"),
				d = r.n(o);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(a.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			}));
			var n = r("./node_modules/lodash/throttle.js"),
				s = r.n(n),
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

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
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
					return e.href ? i.a.createElement(d.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: r
					}, e.children), i.a.createElement("span", {
						className: Object(o.a)(f.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, h({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
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
				return i.a.createElement(v, h({
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
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, a = r || n;
					return s.a.createElement("div", {
						className: e.className
					}, r && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!a || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, r) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = r.n(a);
			t.a = n.a.wrapped(s.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/SubredditWiki.json");
			const a = (e, t) => Object(n.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/featureFlags/index.ts");

			function d(e, t, r) {
				const n = Object(i.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(a.b)(n)(e => {
					const {
						featureEnabled: n,
						...a
					} = e, i = a;
					return n ? s.a.createElement(t, i) : void 0 !== r ? s.a.createElement(r, i) : null
				})
			}
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
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = r.n(s);
			const i = ({
					isLoading: e
				}) => Object(n.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				o = e => Object(n.a)(a.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/sortBy.js"),
				s = r.n(n),
				a = r("./src/reddit/constants/wiki.ts");
			const i = e => {
				return s()(e, e => `${e.path}/`.startsWith(`${a.i}/`) ? `\0${e.path}` : e.path).filter(e => !a.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					r = [];
				return i(e).forEach(e => {
					const n = {
							...e,
							children: []
						},
						s = n.parent ? t.get(n.parent) : null;
					s ? s.children.push(n) : r.push(n), t.set(n.path, n)
				}), r
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: r,
					subredditName: n,
					wikiPageName: s
				} = e;
				return `[${n}]--[${s}]--[rev1:${r}]--[rev2:${t}]`.toLowerCase()
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
			var n = r("./src/reddit/constants/wiki.ts");
			const s = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${n.c}}$`),
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
						o = n.b.has(a),
						d = n.f.has(a) && r !== n.h && r !== n.k;
					if (o || d) return i.RestrictedPageName;
					if (!s.test(r)) return i.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === r)) return i.PageAlreadyExists
					}
					return r.length > n.d ? i.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			const n = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				s = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(n || (n = {}));
			const s = e => e.category === n.Supporter,
				a = e => e.category === n.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/gold/constants.ts"),
				a = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const i = {};
			var o = r("./node_modules/icepick/icepick.js"),
				d = r("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, r;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (r = e[0]) || void 0 === r ? void 0 : r.type)
				},
				u = {};
			t.a = Object(n.c)({
				subredditPowerupsFlairs: (e = i, t) => {
					switch (t.type) {
						case s.pb:
							const {
								subredditId: r, subredditAchievementFlairs: n
							} = t.payload;
							if (!(null == n ? void 0 : n.length)) return e;
							const i = n.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								o = n.filter(a.a).map(e => e.type),
								d = n.filter(a.b).map(e => e.type);
							return {
								...e, [r]: {
									flairsByType: i,
									achievementTypes: o,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, t) => {
					switch (t.type) {
						case d.d: {
							const {
								id: r,
								userAchievementFlairsByRedditorIds: n
							} = t.payload;
							let s = e[r] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: i
								} of n) {
								const r = i.filter(a.a),
									n = r.map(({
										type: e
									}) => e),
									o = i.filter(a.b),
									d = o.map(({
										type: e
									}) => e),
									c = l(r),
									u = l(o);
								s = {
									...s,
									[e]: {
										achievementTypes: n,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: u,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[r]: s
							}
						}
						case d.f: {
							const {
								subredditId: r,
								userId: n,
								achievementFlairType: s,
								supporterFlairType: a
							} = t.payload;
							return Object(o.updateIn)(e, [r, n], e => ({
								...e,
								pendingAchievementType: s,
								pendingSupporterType: a
							}))
						}
						case d.g: {
							const {
								subredditId: r,
								userId: n,
								achievementFlairType: s,
								supporterFlairType: a
							} = t.payload;
							return Object(o.updateIn)(e, [r, n], e => ({
								...e,
								preferredAchievementType: s,
								preferredSupporterType: a,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return Object(o.updateIn)(e, [r, n], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: r,
								userId: n,
								isHidden: s
							} = t.payload;
							return Object(o.updateIn)(e, [r, n], e => ({
								...e,
								isHidden: s
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = u, t) => {
					switch (t.type) {
						case d.i: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									n = e.powerups;
								if (!t || !n) return;
								const s = n.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								r = {
									...r,
									[t]: s.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...r
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return c
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "j", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "a", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/selectors/commentSelector.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(a.a)({
				features: {
					powerups: i.a
				}
			});
			const o = (e, {
					subredditId: t
				}) => {
					var r;
					return t ? null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[t] : null
				},
				d = (e, {
					subredditId: t
				}) => {
					var r, n;
					return t ? null === (n = null === (r = e.features.powerups.subredditPowerupsFlairs) || void 0 === r ? void 0 : r[t]) || void 0 === n ? void 0 : n.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: r
				}) => {
					var n, s;
					return t && r ? null === (s = null === (n = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === s ? void 0 : s[r] : null
				},
				l = Object(n.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				u = Object(n.a)([d, l], (e, t) => e && t ? e[t] : null),
				m = Object(n.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				b = Object(n.a)([d, m], (e, t) => e && t ? e[t] : null),
				p = Object(n.a)([d, c], (e, t) => {
					if (!e) return [];
					const r = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						n = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						s = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !r.includes(e.type),
						isPreferred: e.type === n || e.type === s
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				f = Object(n.a)([o, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: r,
						achievementTypes: n,
						flairsByType: s
					} = e, {
						supporterTypes: a,
						achievementTypes: i,
						preferredSupporterType: o,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: k(r, a, s, c || o),
						achievementFlairs: k(n, i, s, l || d)
					}
				}),
				h = Object(n.a)([c], e => !!e && e.isHidden),
				v = Object(n.a)([o, c, b], (e, t, r) => {
					if (!e || !t) return [];
					const n = t.achievementTypes.map(t => e.flairsByType[t]);
					return r ? [r, ...n] : n
				}),
				k = (e, t, r, n) => e.map(e => ({
					...r[e],
					isLocked: !t.includes(e),
					isPreferred: e === n
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				g = (e, {
					commentId: t
				}) => {
					const r = Object(s.b)(e, {
							commentId: t
						}),
						n = null == r ? void 0 : r.subredditId,
						a = null == r ? void 0 : r.authorId;
					return !(!n || !a) && !!((e, {
						subredditId: t,
						userId: r
					}) => {
						var n, s, a;
						return t && r ? null === (a = null === (s = null === (n = e.features.powerups) || void 0 === n ? void 0 : n.usersSupportedSubreddits) || void 0 === s ? void 0 : s[r]) || void 0 === a ? void 0 : a[t] : null
					})(e, {
						subredditId: n,
						userId: a
					})
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
				return h
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "g", (function() {
				return _
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const a = [],
				i = (e, t) => {
					var r;
					const {
						subredditName: n
					} = t;
					if (null === (r = e.pages) || void 0 === r ? void 0 : r.subredditWiki) return e.pages.subredditWiki.directory[n.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.subreddits.api.wiki.pending[r.toLowerCase()]
				},
				d = (e, t) => {
					var r;
					const n = Object(s.a)(t);
					if (null === (r = e.pages) || void 0 === r ? void 0 : r.subredditWiki) return e.pages.subredditWiki.pages[n]
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
					const r = Object(s.a)(t);
					return e.pages.subredditWiki.pageSettings[r]
				},
				f = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[r.toLowerCase()]
				},
				h = Object(n.a)((e, {
					subredditName: t
				}) => {
					const r = t.toLowerCase(),
						n = e.pages.subredditWiki.wikiContributors.listing,
						s = n.userOrder[r],
						i = n.models[r];
					return s ? s.map(e => i[e]) : a
				}),
				v = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[r.toLowerCase()]
				},
				k = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[r.toLowerCase()]
				},
				g = (e, t) => {
					const {
						subredditName: r
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[r.toLowerCase()]
				},
				x = Object(n.a)((e, {
					subredditName: t
				}) => {
					const r = t.toLowerCase(),
						n = e.pages.subredditWiki.wikiBannedContributors.listing,
						s = n.userOrder[r],
						i = n.models[r];
					return s ? s.map(e => i[e]) : a
				}),
				y = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[r.toLowerCase()]
				},
				_ = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.9a5fb3b4370a5a565228.js.map