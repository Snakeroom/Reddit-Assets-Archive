// https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.d24c801efcaf297eb717.js
// Retrieved at 7/15/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
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
				return Qe
			})), r.d(t, "handleWikiRedirects", (function() {
				return Ye
			})), r.d(t, "subredditWikDataRequested", (function() {
				return Je
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
				g = r("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				k = r("./src/lib/makeGqlRequest/index.ts"),
				x = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				_ = r("./src/redditGQL/operations/WikiComparisonDiff.json");
			var w = r("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				O = r("./src/reddit/selectors/subredditWiki.ts");
			const y = Object(d.a)("WIKI_DIFF_PENDING"),
				E = Object(d.a)("WIKI_DIFF_LOADED"),
				I = Object(d.a)("WIKI_DIFF_FAILED"),
				j = e => async (t, r, n) => {
					const s = r(),
						a = Object(w.a)(e),
						i = Object(O.i)(s, {
							key: a
						});
					if (i && (i.pending || !i.error)) return !0;
					const d = {
						key: a
					};
					t(y(d));
					const c = await ((e, t) => Object(k.a)(e, {
						..._,
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
							type: o.G.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.G.UNKNOWN_ERROR
					};
					return t(l ? I({
						...d,
						error: l
					}) : E({
						...d,
						htmlDiff: u
					})), !l
				};
			var N = r("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				C = r("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				P = r("./src/reddit/constants/parameters.ts"),
				S = r("./src/reddit/constants/wiki.ts"),
				T = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				R = r("./src/reddit/helpers/brandSafety/index.ts"),
				U = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				L = r("./src/reddit/models/Toast/index.ts"),
				B = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				A = r("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				D = r("./src/reddit/selectors/subreddit.ts"),
				W = r("./src/lib/initializeClient/installReducer.ts"),
				F = r("./node_modules/redux/es/redux.js");
			const H = {};
			var K = (e = H, t) => {
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
			const M = {};
			var q = (e = M, t) => {
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
			var Z = (e = z, t) => {
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
				Q = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const Y = {};
			var J = (e = Y, t) => {
					switch (t.type) {
						case Q.c: {
							const {
								settings: r,
								pageKey: n
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : e
						}
						case Q.d: {
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
						case Q.b: {
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
						case Q.a: {
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
			const $ = {};
			var V = (e = $, t) => {
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
				re = Object(F.c)({
					error: V,
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
				de = Object(F.c)({
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
				he = Object(F.c)({
					error: be,
					pending: fe
				});
			const ve = {};
			var ge = (e = ve, t) => {
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
				ke = r("./node_modules/lodash/uniq.js"),
				xe = r.n(ke);
			const _e = {};
			var we = (e = _e, t) => {
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
				Oe = Object(F.c)({
					afterToken: ue,
					api: he,
					models: ge,
					userOrder: we
				});
			const ye = {};
			var Ee = (e = ye, t) => {
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
				Ie = Object(F.c)({
					listing: Oe,
					search: Ee
				}),
				je = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ne = {};
			var Ce = (e = Ne, t) => {
				switch (t.type) {
					case je.c:
					case je.a: {
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
			const Pe = {};
			var Se = (e = Pe, t) => {
				switch (t.type) {
					case je.b: {
						const {
							subredditName: r,
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case je.d:
					case je.c: {
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
						case je.d:
						case je.c:
						case je.b: {
							const {
								subredditName: r
							} = t.payload, n = t.type === je.d;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Ue = Object(F.c)({
					error: Se,
					pending: Re
				});
			const Le = {};
			var Be = (e = Le, t) => {
				switch (t.type) {
					case je.c:
					case je.a: {
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
					case je.e: {
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
					case je.f: {
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
						case je.c:
						case je.a: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: xe()([...e[r] || [], ...n])
							}
						}
						case je.e: {
							const {
								subredditName: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: [...n, ...e[r] || []]
							}
						}
						case je.f: {
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
				We = Object(F.c)({
					afterToken: Ce,
					api: Ue,
					models: Be,
					userOrder: De
				});
			const Fe = {};
			var He = (e = Fe, t) => {
					switch (t.type) {
						case je.g: {
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
				Ke = Object(F.c)({
					listing: We,
					search: He
				}),
				Me = Object(F.c)({
					diff: K,
					directory: q,
					pages: Z,
					pageSettings: J,
					revisions: de,
					wikiBannedContributors: Ie,
					wikiContributors: Ke
				});
			Object(W.a)({
				pages: {
					subredditWiki: Me
				}
			});
			const qe = Object(d.a)(f.c),
				Ge = Object(d.a)(f.b),
				ze = Object(d.a)(f.a),
				Ze = (e, t) => !!Object(O.b)(e, {
					subredditName: t
				}),
				Qe = e => async (t, r, s) => {
					const {
						canShowFailToast: i,
						wikiPageName: d
					} = e, c = d === S.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(U.a)({
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
							type: o.G.NOT_FOUND_ERROR
						}
					})), i && t(Object(h.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: L.b.Error,
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Qe(e)
					}))), !(!m.ok || !a()(b.data.subreddit)) || !(!m.ok || !p)
				}, Ye = e => async (t, r) => {
					const {
						params: n,
						url: s
					} = e, {
						wikiPageName: a
					} = n, o = Object(A.a)(s, n);
					let d = !1;
					return S.l.includes(a || "") ? (await (async (e, t) => {
						const r = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = r
					})(e.url), d = !0) : s !== o && (await t(Object(i.c)(o)), d = !0), d
				}, Je = (e, t, r = !1) => async (s, a, i) => {
					const {
						subredditName: d = S.e,
						wikiPageName: l,
						wikiSubRoute: u
					} = e, m = t[P.A], b = t[P.B], f = m ? Object(x.a)(m) : void 0, k = b ? Object(x.a)(b) : void 0, _ = l === S.j, w = u === S.m.Revisions;
					let y = !1,
						E = !1;
					if (r) {
						const {
							pageName: t
						} = e;
						y = t === o.Zb.WikiContributors, E = t === o.Zb.WikiBanned
					}
					const I = a(),
						T = (_ || r) && !Ze(I, d),
						R = !!l && !((e, t, r, n) => {
							return r === S.j ? Ze(e, t) : !!Object(O.c)(e, {
								subredditName: t,
								wikiPageName: r,
								revisionId: n
							})
						})(I, d, l, f),
						U = [];
					U.push(s(((e, t = !1) => async (r, n) => {
						const s = n(),
							a = {
								sort: o.U.HOT
							},
							i = Object(c.a)(e, a.sort),
							d = s.listings.postOrder.api.error[i],
							l = s.listings.postOrder.api.pending[i],
							u = !!s.listings.postOrder.ids[i];
						return !!(l || u && !d) || (await r(Object(p.subredditDataRequested)(i, e, a, t)), !n().listings.postOrder.api.error[i])
					})(d))), (T || R) && U.push(s(Qe({
						includeDirectory: T,
						includePageData: R,
						revisionId: f,
						subredditName: d,
						wikiPageName: l
					}))), u === S.m.Settings && l && U.push(s(Object(N.c)(d, l))), l && f && k && U.push(s(j({
						comparisonRevisionId: k,
						revisionId: f,
						subredditName: d,
						wikiPageName: l
					}))), w && U.push(s(Object(C.c)({
						isRecent: !l,
						wikiPageName: l,
						subredditName: d
					}))), y && U.push(s(Object(g.e)(d))), E && U.push(s(Object(v.e)(d))), (await Promise.all(U)).every(Boolean) || s(Object(h.f)({
						kind: L.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e, t, r)
					}))
				}, Xe = e => async (t, r) => {
					if (await t(Ye(e))) return;
					const {
						params: n,
						queryParams: s
					} = e, a = n.subredditName || S.e;
					t(u.l({
						title: n.wikiPageName ? `${n.wikiPageName} - ${a}` : `wiki - ${a}`
					})), await t(Je(n, s));
					const i = Object(D.y)(r(), {
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
				return V
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
			const g = (e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(v.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.hb.GET,
				data: r
			});
			var k = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				x = r("./src/reddit/models/SubredditModeration/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/selectors/activeModalId.ts"),
				O = r("./src/reddit/selectors/bannedUser.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/actions/subredditModeration/constants.ts"),
				j = r("./src/lib/initializeClient/installReducer.ts"),
				N = r("./node_modules/redux/es/redux.js");
			var C = (e = null, t) => {
				switch (t.type) {
					case I.o:
					case I.n:
						return null;
					case I.m:
						return t.payload;
					default:
						return e
				}
			};
			const P = {};
			var S = (e = P, t) => {
					switch (t.type) {
						case I.o: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(x.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case I.n:
						case I.m: {
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
					pending: S
				});
			const R = {};
			var U = (e = R, t) => {
					switch (t.type) {
						case I.n: {
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
				L = r("./src/reddit/actions/inContextModeration.ts");
			var B = (e = null, t) => {
				switch (t.type) {
					case L.a:
						return t.payload;
					default:
						return e
				}
			};
			const A = {};
			var D = (e = A, t) => {
					switch (t.type) {
						case I.n: {
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
				W = r("./node_modules/icepick/icepick.js");
			const F = {};
			var H = (e = F, t) => {
				switch (t.type) {
					case I.l:
					case I.n: {
						const {
							subredditId: r,
							bannedUsers: n
						} = t.payload;
						return Object(W.merge)(e, {
							[r]: n
						})
					}
					case I.s: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(W.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var K = (e = null, t) => {
				switch (t.type) {
					case I.r:
					case I.q:
						return null;
					case I.p:
						return t.payload;
					default:
						return e
				}
			};
			var M = (e = !1, t) => {
					switch (t.type) {
						case I.r:
							return !0;
						case I.q:
						case I.p:
							return !1;
						default:
							return e
					}
				},
				q = Object(N.c)({
					error: K,
					pending: M
				});
			var G = (e = null, t) => {
					switch (t.type) {
						case I.r:
						case I.p:
							return null;
						case I.q: {
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
			const Z = {};
			var Q = (e = Z, t) => {
					switch (t.type) {
						case I.n: {
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
						case I.s: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case I.l: {
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
				Y = Object(N.c)({
					api: T,
					fetchedTokens: U,
					inContext: B,
					loadMore: D,
					models: H,
					search: z,
					userOrder: Q
				});
			Object(j.a)({
				features: {
					banned: Y
				}
			});
			const J = Object(i.a)(I.o),
				X = Object(i.a)(I.n),
				$ = Object(i.a)(I.m),
				V = (e, t = {}) => async (r, n, {
					apiContext: s
				}) => {
					const a = n(),
						i = t.after || "",
						o = Object(x.d)(e, i),
						d = a.features.banned.fetchedTokens[o];
					if (a.features.banned.api.pending[o] || d) return;
					r(J({
						subredditId: e,
						fetchedToken: i
					}));
					const c = a.subreddits.models[e].name,
						l = await g(s(), c, t);
					l.ok ? r(X({
						...l.body,
						fetchedToken: i
					})) : r($({
						subredditId: e,
						fetchedToken: i
					}))
				}, ee = Object(i.a)(I.r), te = Object(i.a)(I.q), re = Object(i.a)(I.p), ne = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const a = n().subreddits.models[e].name,
						i = {
							username: Object(k.a)(t)
						};
					r(ee());
					const o = await g(s(), a, i);
					o.ok ? r(te(o.body)) : r(re(o.error))
				}, se = Object(i.a)(I.l), ae = Object(i.a)(I.s), ie = (e, t, r) => async (s, i, {
					apiContext: d
				}) => {
					const c = i(),
						u = c.subreddits.models[e].url,
						h = c.subreddits.models[e].name;
					t.username = Object(k.a)(t.username), s(Object(o.h)(r));
					const v = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
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
					if (v.ok) {
						s(Object(o.e)(r));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: _.b.SuccessMod,
							text: n.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await g(d(), h, e);
						a.ok && s(se(a.body))
					} else {
						s(Object(o.f)(r, v.error));
						const e = a()(v, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: _.b.Error,
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
						kind: _.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(d, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, n) => {
					const s = n();
					await Promise.all([(async () => {
						if (!Object(w.b)(u.a.BAN_USER)(s) && !Object(y.P)(s, {
								subredditId: e
							})) {
							const t = Object(y.S)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(E.mb)(s, {
							userName: t
						});
						if (!n) return;
						const a = Object(O.h)(s, {
							subredditId: e
						});
						a && a[n.id] || await r(V(e, {
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
				return k
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "d", (function() {
				return j
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
				g = Object(a.a)(f.b),
				k = e => async (t, r, n) => {
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
							type: s.G.UNKNOWN_ERROR
						};
						t(g({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return i.ok
				}, x = Object(a.a)(f.a), _ = (e, t) => async (r, s, a) => {
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
						buttonAction: _(e, t)
					}));
					return d.ok
				}, w = Object(a.a)(f.e), O = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.hb.POST,
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
							r(w({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === s.G.USER_DOESNT_EXIST && (e = n.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), r(Object(i.f)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, y = Object(a.a)(f.f), E = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.hb.POST,
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
					})), r(y({
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
						buttonAction: E(e, t)
					})), u.ok
				}, I = Object(a.a)(f.g), j = (e, t) => async (r, s, a) => {
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
							r(I({
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
				return k
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "d", (function() {
				return j
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
				g = Object(a.a)(f.b),
				k = e => async (t, r, n) => {
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
							type: s.G.UNKNOWN_ERROR
						};
						t(g({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return i.ok
				}, x = Object(a.a)(f.a), _ = (e, t) => async (r, s, a) => {
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
						buttonAction: _(e, t)
					}));
					return d.ok
				}, w = Object(a.a)(f.e), O = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.hb.POST,
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
							!!a().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || r(w({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === s.G.USER_DOESNT_EXIST ? e = n.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === s.G.BANNED_FROM_SUBREDDIT && (e = n.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), r(Object(i.f)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, y = Object(a.a)(f.f), E = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.hb.POST,
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
					})), r(y({
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
						buttonAction: E(e, t)
					})), u.ok
				}, I = Object(a.a)(f.g), j = (e, t) => async (r, s, a) => {
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
							r(I({
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
				return w
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "a", (function() {
				return j
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
				g = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const _ = Object(a.a)(x.c),
				w = (e, t) => async (r, n, s) => {
					const a = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(s.gqlContext(), a),
						d = Object(k.D)(n(), e);
					if (Object(k.U)(n(), d) || await r(Object(i.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = h(t.page.settings);
							r(_({
								pageKey: Object(v.a)(a),
								settings: e
							}))
						}
					}
					return o.ok
				}, O = Object(a.a)(x.b), y = (e, t, r) => async (s, a, i) => {
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
							s(O({
								editorsInfo: a,
								afterToken: i,
								pageKey: Object(v.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else s(Object(o.f)({
						kind: g.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t, r)
					}));
					return c.ok
				}, E = Object(a.a)(x.d), I = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: r,
					subredditName: n
				}) => async (a, i, o) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: s.hb.POST,
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
					return c.ok && a(E({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(v.a)({
							wikiPageName: r,
							subredditName: n
						})
					})), c.ok
				}, j = ({
					subredditName: e,
					username: t,
					wikiPageName: r
				}) => async (a, i, c) => {
					const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: s.hb.POST,
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
						kind: g.b.SuccessCommunity,
						text: "User successfully added"
					})), await a(w(e, r));
					else if (m.error) {
						const e = m.error.type;
						let t = n.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === s.G.NOT_FOUND_ERROR && (t = n.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), a(Object(o.f)({
							kind: g.b.Error,
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
						method: s.hb.POST,
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
						kind: g.b.SuccessCommunity,
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
				return E
			})), r.d(t, "a", (function() {
				return j
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
				method: s.hb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var f = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: s.hb.POST,
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
				g = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = r("./src/reddit/models/Toast/index.ts"),
				x = r("./src/reddit/selectors/subredditWiki.ts"),
				_ = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const w = Object(a.a)(_.d),
				O = Object(a.a)(_.c),
				y = Object(a.a)(_.b),
				E = e => async (t, r, a) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: b
					} = e, p = r(), f = Object(v.a)(e), g = Object(x.p)(p, {
						listingKey: f
					});
					if (!o && !!g) return !0;
					const _ = g && g.pageInfo.endCursor || void 0;
					if (!(!g || g.pageInfo.hasNextPage)) return !0;
					const I = {
							after: _,
							isRecent: u,
							subredditName: m,
							wikiPageName: b
						},
						j = {
							key: f,
							options: I
						};
					t(w(j));
					const N = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(a.gqlContext(), I);
					if (N.ok) {
						const e = N.body;
						if (e.data.subreddit) {
							const r = h(e.data);
							t(O({
								...j,
								...r
							}))
						}
					} else {
						const r = N.error || {
							type: s.G.UNKNOWN_ERROR
						};
						t(y({
							...j,
							error: r
						})), l && t(Object(i.f)({
							kind: k.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: E(e)
						}))
					}
					return N.ok
				}, I = Object(a.a)(_.a), j = e => async (t, r, s) => {
					const {
						subredditName: a,
						wikiPageName: d
					} = e, c = Object(g.a)({
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
							kind: k.b.SuccessCommunityGreen,
							text: n.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(I({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: a,
							wikiPageName: d
						}))
					} else t(Object(i.f)({
						kind: k.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}, N = Object(a.a)(_.e), C = e => async (t, r, s) => {
					const a = await p(s.apiContext(), e);
					if (a.ok) {
						const r = a.body.status;
						t(N({
							revisionId: e.revisionId,
							isHidden: r
						}))
					} else t(Object(i.f)({
						kind: k.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
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
				return a.a.createElement(c.q, {
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
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), k = l.a.div("FooterContainer", v.a), x = l.a.div("UserAgreement", v.a), _ = l.a.a("UserAgreementLink", v.a), w = l.a.a("PrivacyLink", v.a);
			var O = () => a.a.createElement(k, null, a.a.createElement(x, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", a.a.createElement(_, {
					href: `${n.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", a.a.createElement(w, {
					href: `${n.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				y = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				E = r("./src/reddit/components/RichTextJson/index.tsx"),
				I = r("./node_modules/lodash/flatMap.js"),
				j = r.n(I),
				N = r("./src/lib/linkMatchers/index.ts"),
				C = r("./src/lib/linkMatchers/customLinks.ts"),
				P = r("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				T = e => {
					const t = e.split(S);
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
					return e.parseMdLinks && (t = j()(t, T)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = N.f.add(C.g.subreddit.prefix, C.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let n = null;
						for (const s of t) r.push(e.slice(n ? n.lastIndex : 0, s.index)), n = s, r.push([s.url, s.text]);
						return n && r.push(e.slice(n.lastIndex)), r
					})(e))), a.a.createElement(a.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [n, s] = t;
							return a.a.createElement(P.b, {
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
				U = r("./src/reddit/contexts/PageLayer/index.tsx"),
				L = r("./src/reddit/controls/Button/index.tsx"),
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
				W = r("./src/reddit/models/ContentGate.ts"),
				F = r("./src/lib/constants/index.ts"),
				H = r("./src/reddit/selectors/platform.ts"),
				K = r("./src/reddit/selectors/user.ts");
			var M = r("./src/reddit/selectors/meta.ts"),
				q = r("./src/reddit/components/ContentGate/index.m.less"),
				G = r.n(q);
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = l.a.wrapped(D, "PrivateKey", G.a), Q = l.a.div("ButtonsContainer", G.a), Y = l.a.div("Container", G.a), J = l.a.div("ContainerExp", G.a), X = l.a.div("Description", G.a), $ = l.a.div("PrivateSubredditDetails", G.a), V = l.a.div("PrivateSubredditDescription", G.a), ee = l.a.h3("PrivateSubredditName", G.a), te = l.a.a("Link", G.a), re = l.a.wrapped(L.k, "LinkRouterButton", G.a), ne = l.a.wrapped(L.j, "LinkButton", G.a), se = l.a.wrapped(L.n, "SecondaryLinkRouterButton", G.a), ae = l.a.wrapped(L.m, "SecondaryLinkButton", G.a), ie = l.a.wrapped(re, "GoHomeLinkButton", G.a), oe = l.a.wrapped(f.a, "CreateCommunityButton", G.a), de = l.a.img("Image", G.a), ce = l.a.img("ImagePlaceholder", G.a), le = l.a.wrapped(re, "LeftLinkRouterButton", G.a), ue = l.a.wrapped(ne, "LeftLinkButton", G.a), me = l.a.wrapped(ae, "SecondaryLeftLinkButton", G.a), be = l.a.wrapped(se, "SecondaryLeftLinkRouterButton", G.a), pe = l.a.h3("Title", G.a), fe = l.a.div("PageBody", G.a), he = l.a.div("QuarantineMessageWrapper", G.a), ve = Object(c.c)({
				isLoggedIn: K.I,
				origin: M.j,
				user: K.j,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(K.J)(e)) return !1;
					const t = Object(H.d)(e);
					if (!t) return !1;
					const r = Object(K.e)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = r;
					if (!n) return !1;
					const s = 30 * F.z;
					return n > Date.now() - s
				})(e)
			}), ge = Object(U.t)(), ke = Object(i.b)(ve, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(b.A(t)), window.location.reload()
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
					quarantineMessageRTJson: g,
					setNSFWPreference: k,
					subredditDescription: x,
					subredditName: _,
					user: w
				} = e, O = async () => {
					i ? await k() : await Object(m.k)(), window.location.reload()
				};
				switch (r) {
					case W.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(pe, null, z._("r/{community name} is a Reddit Premium community", [z._param("community name", _)], {
							hk: "2lyDwB"
						})), a.a.createElement(X, null, z._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(Q, null, w ? a.a.createElement(me, {
							href: `${n.a.redditUrl}/premium`
						}, z._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement(ue, {
							href: Object(u.a)(c, l)
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), w ? a.a.createElement(re, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(ae, {
							href: Object(u.a)(c, l)
						}, z._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case W.a.Nsfw:
					case W.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(pe, null, r === W.a.Nsfw ? z._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : z._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(X, null, z._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(Q, null, a.a.createElement(le, {
							to: "/"
						}, z._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(ae, {
							onClick: O
						}, z._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case W.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Z, null), a.a.createElement(pe, null, "r/", _, " ", z._("is a private community", null, {
							hk: "7zZmq"
						})), x && x.length && a.a.createElement($, null, a.a.createElement(ee, null, "r/", _), a.a.createElement(V, null, a.a.createElement("div", null, x))), a.a.createElement(X, null, z._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", _, " ", z._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), z._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(Q, null, w ? a.a.createElement(a.a.Fragment, null, !o && a.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: G.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), a.a.createElement(me, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${_}`
						}, z._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(me, {
							href: Object(u.a)(c, l)
						}, z._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(re, {
							to: "/"
						}, z._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case W.a.QuarantinedSubreddit:
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
						}), a.a.createElement(he, null, g ? a.a.createElement(E.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: b
							}
						}) : v ? a.a.createElement(y.a, {
							html: v
						}) : h || z._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), z._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(Q, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? a.a.createElement(Q, null, a.a.createElement(be, {
								to: "/"
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ne, {
								href: `${n.a.redditUrl}/prefs/update`
							}, z._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(Q, null, a.a.createElement(le, {
								to: "/"
							}, z._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(ae, {
								onClick: t
							}, z._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(w, s, f)));
					case W.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(pe, null, z._("r/{community name} has been banned from Reddit", [z._param("community name", _)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(X, null, e ? a.a.createElement(R, {
							linkClassName: G.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : z._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(Q, null, a.a.createElement(re, {
							to: "/"
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case W.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(pe, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(Q, null, a.a.createElement(re, {
							to: "/"
						}, z._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case W.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(ce, null), a.a.createElement(pe, null, z._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(X, null, z._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(Q, null, w && a.a.createElement(oe, {
							eventSource: "content_gate"
						}), a.a.createElement(ie, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case W.a.ProfileDoesNotExist:
					case W.a.ProfileDeleted:
					case W.a.ProfileSuspended:
					case W.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(pe, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case W.a.ProfileBlockedForLegalReason:
									return z._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case W.a.ProfileDeleted:
									return z._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case W.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, z._("This account has been {=suspended} .", [z._param("=suspended", a.a.createElement(te, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, z._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case W.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(pe, null, z._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(X, null, z._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(Q, null, a.a.createElement(ie, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case W.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(pe, null, z._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(Q, null, a.a.createElement(ie, {
							to: "/"
						}, z._("Go Home", null, {
							hk: "49p4or"
						}))));
					case W.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(de, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(pe, null, z._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(Q, null, a.a.createElement(re, {
							to: "/"
						}, z._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ge(ke(Object(o.i)(e => {
				const t = Object(s.useContext)(d.a) ? J : Y;
				return a.a.createElement(t, null, a.a.createElement("div", null, a.a.createElement(fe, null, xe(e))), a.a.createElement(O, null))
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
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/helpers/getSrCreationEntrypointCopy.ts"),
				p = r("./src/reddit/helpers/overlay/index.ts"),
				f = r("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = r("./src/reddit/selectors/experiments/srCreationEntrypoints.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/components/CreateCommunityButton/index.m.less"),
				k = r.n(g),
				x = r("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				w = x.a.wrapped(c.c, "StyledTooltip", k.a),
				O = Object(o.c)({
					isInSrCreationEntrypointBehaviorExperiment: h.a,
					isInSrCreationEntrypointCopyExperiment: h.b,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(v.gb)(e),
					userIsSuspended: v.O
				});
			t.a = Object(i.b)(O, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: r => {
					r(Object(f.c)(t)), e(Object(p.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: _
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				isInSrCreationEntrypointBehaviorExperiment: r,
				isInSrCreationEntrypointCopyExperiment: s,
				onShowTooltip: i,
				onHideTooltip: o,
				openCommunityCreation: d,
				sendEvent: c,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: p
			}) => a.a.createElement(m.q, {
				className: e,
				disabled: p || l,
				onClick: () => r === u.Ed.Tabs ? window.open("/subreddits/create", "_blank") : d(c),
				onMouseEnter: i,
				onMouseLeave: o,
				priority: m.b.Secondary,
				id: _,
				isFullWidth: !0
			}, Object(b.a)(s, n.fbt._("Create Community", null, {
				hk: "28v7Qq"
			})), l ? a.a.createElement(w, {
				caretOnTop: !0,
				tooltipId: _,
				text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : p ? a.a.createElement(w, {
				caretOnTop: !0,
				tooltipId: _,
				text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
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
			class p extends s.a.PureComponent {
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
						editButtonClassName: n,
						isLoading: c,
						imageUrl: l
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(u.a.Container, r)
					}, s.a.createElement("label", {
						className: u.a.HitBox
					}, s.a.createElement("span", {
						className: u.a.ImageContainer,
						role: "presentation"
					}, l ? s.a.createElement("img", {
						alt: e,
						className: u.a.Image,
						src: l
					}) : t), s.a.createElement(i.a, {
						className: u.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !c && s.a.createElement("div", {
						className: Object(a.a)(u.a.EditButton, n)
					}, s.a.createElement(d.a, {
						name: "add_media",
						className: u.a.EditIcon
					}))), c && s.a.createElement(o.a, {
						className: u.a.LoadingIcon,
						sizePx: b
					}))
				}
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
				o = r("./src/reddit/actions/snoovatar.ts"),
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
				g = r("./src/reddit/selectors/userPrefs.ts"),
				k = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/config.ts"),
				_ = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = r("./src/lib/lessComponent.tsx"),
				O = r("./src/lib/prettyPrintNumber/index.ts"),
				y = r("./src/lib/timeAgo/index.ts"),
				E = r("./src/reddit/components/ChatButton/index.tsx"),
				I = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				j = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				N = r("./src/reddit/components/SubscribeButton/index.tsx"),
				C = r("./src/reddit/components/UserIcon/index.tsx"),
				P = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				S = r("./src/reddit/icons/fonts/Info/index.tsx"),
				T = r("./src/reddit/icons/svgs/Admin/index.tsx");
			var R = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				U = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				L = r("./src/reddit/models/Gold/Award.ts"),
				B = r("./src/reddit/models/User/index.ts"),
				A = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				D = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				W = r("./src/reddit/actions/inContextModeration.ts"),
				F = r("./src/reddit/actions/modal.ts"),
				H = r("./src/reddit/actions/subredditModeration/ban.ts"),
				K = r("./src/reddit/constants/modals.ts"),
				M = r("./src/reddit/components/Hovercards/helpers.ts"),
				q = r("./src/reddit/icons/fonts/index.tsx"),
				G = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				z = r("./src/reddit/selectors/bannedUser.ts"),
				Z = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Q = r.n(Z);
			const {
				fbt: Y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), J = Object(i.c)({
				hasModMailPermissions: Object(u.b)(G.c.mail),
				isUserBanned: (e, t) => !!Object(z.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(h.mb)(e, {
					userName: t.username
				})
			});
			class X extends s.a.Component {
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
					}, n ? s.a.createElement(M.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), i(P.e(t))
						}
					}, s.a.createElement(q.a, {
						name: "ban",
						isFilled: !0,
						className: Q.a.icon
					}), Y._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(M.a, {
						role: "button",
						onClick: () => {
							o(), i(P.a(t))
						}
					}, s.a.createElement(q.a, {
						name: "ban",
						className: Q.a.icon
					}), Y._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(M.a, {
						role: "button",
						onClick: () => {
							d(), i(P.d(t))
						}
					}, s.a.createElement(q.a, {
						name: "mod_mute",
						className: Q.a.icon
					}), Y._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(a.b)(J, (e, {
					username: t,
					subredditId: r,
					contextId: n
				}) => ({
					onUnbanUser: t => e(Object(H.e)(r, t)),
					requestUserBanInfo: () => e(Object(H.c)(r, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(W.c)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(H.a)(r, t))
					},
					toggleMuteModal: () => {
						e(Object(W.d)({
							username: t,
							subredditId: r,
							contextId: n
						})), e(Object(F.i)(K.a.MUTE_USER))
					}
				}))(X),
				V = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var te = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(V.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(M.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(P.c(e.contextId))
					}
				}, s.a.createElement(q.a, {
					name: "tag",
					className: Q.a.icon
				}), ee._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				re = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ne = r.n(re);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = w.a.wrapped(C.a, "UserIcon", ne.a),
				ie = w.a.wrapped(N.a, "SubscribeButton", ne.a),
				oe = w.a.wrapped(E.b, "ChatButton", ne.a),
				de = w.a.wrapped(R, "KarmaIcon", ne.a),
				ce = w.a.wrapped(U.a, "PremiumIcon", ne.a),
				le = w.a.wrapped(_.a, "UserNameLink", ne.a),
				ue = w.a.div("UserNameMetaData", ne.a),
				me = w.a.div("MetaDataItem", ne.a),
				be = w.a.div("Bullet", ne.a),
				pe = w.a.div("UserNameContainer", ne.a),
				fe = w.a.div("UserInfoContainer", ne.a),
				he = w.a.div("PostKarma", ne.a),
				ve = w.a.div("CommentKarma", ne.a),
				ge = w.a.div("KarmaGrid", ne.a),
				ke = w.a.div("GenericKarma", ne.a),
				xe = w.a.a("InfoLink", ne.a),
				_e = w.a.div("KarmaCount", ne.a),
				we = w.a.div("KarmaLabel", ne.a),
				Oe = w.a.div("GenericKarmaLabel", ne.a),
				ye = w.a.div("BannerImage", ne.a),
				Ee = w.a.div("UserContainer", ne.a),
				Ie = w.a.div("BottomSpacer", ne.a),
				je = w.a.div("Container", ne.a),
				Ne = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(le, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && s.a.createElement(T.a, {
					className: ne.a.adminIcon,
					title: k.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(_.a, {
					to: "/premium"
				}, s.a.createElement(ce, null))), s.a.createElement(ue, null, e.user.username && s.a.createElement(me, null, e.user.username, s.a.createElement(be, null, "•")), s.a.createElement(me, null, Object(y.d)(e.user.createdUtc || e.user.created)))),
				Ce = e => {
					const {
						showAwardKarma: t,
						user: r
					} = e;
					return t ? s.a.createElement(ge, null, s.a.createElement(ke, null, s.a.createElement(_e, null, Object(O.b)(r.postKarma)), s.a.createElement(Oe, null, k.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [k.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ke, null, s.a.createElement(_e, null, Object(O.b)(r.commentKarma)), s.a.createElement(Oe, null, k.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [k.fbt._plural(r.commentKarma)], {
						hk: "3gKRx9"
					}))), s.a.createElement(ke, null, s.a.createElement(_e, null, Object(O.b)(r.awardeeKarma)), s.a.createElement(Oe, null, k.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [k.fbt._plural(r.awardeeKarma)], {
						hk: "3nzm9q"
					}), s.a.createElement(xe, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(S.a, {
						className: ne.a.infoIcon
					})))), s.a.createElement(ke, null, s.a.createElement(_e, null, Object(O.b)(r.awarderKarma)), s.a.createElement(Oe, null, k.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [k.fbt._plural(r.awarderKarma)], {
						hk: "4zXN3B"
					}), s.a.createElement(xe, {
						href: L.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(S.a, {
						className: ne.a.infoIcon
					}))))) : s.a.createElement(fe, null, s.a.createElement(de, null), s.a.createElement(he, null, s.a.createElement(_e, null, Object(O.b)(r.postKarma)), s.a.createElement(we, null, k.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [k.fbt._plural(r.postKarma)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ve, null, s.a.createElement(_e, null, Object(O.b)(r.commentKarma)), s.a.createElement(we, null, k.fbt._({
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
						user: g,
						userFlair: _,
						userIsBanned: w,
						userProfileStyles: O,
						acceptChats: y
					} = e;
					if (!g) return s.a.createElement(je, {
						style: p
					});
					const E = !!n && Object(B.e)(n) === v,
						j = !!(null == n ? void 0 : n.snoovatarFullBodyAsset),
						N = g.accountIcon || `${x.a.assetPath}/img/snoo_user_placeholder.png`,
						C = l && l.flair,
						S = l && l.access,
						T = _ && _.templateIds && _.templateIds.length > 0,
						R = _ && _.displaySettings && _.displaySettings.isEnabled,
						{
							awardedLastMonth: U
						} = g,
						L = !!g.snoovatarFullBodyAsset,
						W = g.isNSFW && a;
					let F;
					return F = L ? !W && O && O.bannerBackgroundImage || void 0 : W ? `${x.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(je, {
						className: t,
						id: i,
						style: p
					}, !L && F && s.a.createElement(ye, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), s.a.createElement(Ee, null, L ? s.a.createElement(D.a, {
						isHovercard: !0,
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: j,
						isEmployee: g.isEmployee,
						isGold: g.isGold,
						isNSFW: g.isNSFW,
						isOwnProfile: E,
						onClickSnoovatar: d,
						prefersReducedAnimations: !!u,
						snoovatarUrl: g.snoovatarFullBodyAsset,
						title: null,
						userCreated: g.created,
						username: v,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(pe, null, s.a.createElement(ae, {
						iconUrl: N,
						isNSFW: g.isNSFW,
						userName: v
					}), s.a.createElement(Ne, {
						origin: c,
						user: g,
						userName: v
					})), s.a.createElement(Ce, {
						showAwardKarma: b,
						user: g
					}), U && s.a.createElement(A.a, {
						recentAwardings: U,
						topAwardIcon: h,
						username: v
					}), o && !E && !w && y && s.a.createElement(oe, {
						contextId: r,
						userId: g.id,
						text: k.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), g.hasUserProfile && !w && !E && s.a.createElement(ie, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(P.g)(e ? "unfollow" : "follow", r),
						small: !0
					})), S && r && !E && f && s.a.createElement($, {
						contextId: r,
						subredditId: f,
						sendEvent: m,
						username: v
					}), C && r && T && R && f && s.a.createElement(te, {
						contextId: r,
						subredditId: f,
						sendEvent: m,
						username: v
					}), s.a.createElement(I.i, {
						contextId: r,
						subredditId: f,
						user: g
					}), !(S || o) && s.a.createElement(Ie, null))
				},
				Se = Object(j.a)(Pe),
				Te = e => {
					const t = e.activeTooltipId === e.tooltipId;
					return s.a.createElement(Se, se({
						isOpen: t
					}, e))
				};
			Te.WrappedComponent = Pe;
			var Re = Te;
			const Ue = Object(i.c)({
					activeTooltipId: f.a,
					currentUser: h.j,
					isLoggedIn: h.J,
					hideNSFWPref: h.B,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(u.l)(e, {
						subredditId: t
					}) : void 0,
					origin: l.j,
					prefersReducedAnimations: g.c,
					showAwardKarma: (e, t) => {
						return Object(f.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(c.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: h.mb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(v.c)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(p.l)(t) && Object(p.db)(e, t),
					userProfileStyles: (e, t) => Object(b.m)(e, Object(m.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(m.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					}
				}),
				Le = Object(a.b)(Ue, (e, t) => ({
					onClickSnoovatar: () => e(Object(o.b)("user_hovercard")),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Le(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, s.a.createElement(Re, {
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
				return _
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
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(b.u)(t.authorOrSubredditName))
					}
				})),
				h = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = r.n(h);
			class g extends s.a.Component {
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
			const k = a.a.wrapped(g, "HoverDiv", v.a),
				x = m(k),
				_ = f(k)
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
					currentUser: i.j,
					hideNSFWPref: i.B
				}),
				d = Object(n.b)(o, e => ({
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
				return s.a.createElement(i.q, {
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
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/timeAgo/index.ts"),
				o = r("./src/reddit/controls/InternalLink/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: n,
				username: c,
				...l
			}) {
				const u = t ? a.fbt._("{username} · {time since account creation}", [a.fbt._param("username", `u/${c}`), a.fbt._param("time since account creation", Object(i.d)(n, {
					noPostfix: !0,
					shortenedUnit: !0
				}))], {
					hk: "2k741A"
				}) : `u/${c}`;
				return r ? s.a.createElement(o.a, d({}, l, {
					className: e,
					to: r
				}), u) : s.a.createElement("span", d({}, l, {
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
				u = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = r("./node_modules/react-router/esm/react-router.js"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				h = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				v = r("./src/reddit/routes/avatar/index.ts"),
				g = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				k = r.n(g);
			const {
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var _ = Object(m.i)(({
					isHovercard: e,
					username: t
				}) => {
					const r = Object(b.b)(),
						a = Object(n.useCallback)(() => r(Object(f.b)(e ? "user_hovercard" : "profile_overview", t)), [e, r, t]);
					return s.a.createElement(u.a, {
						to: `${v.a}/${t}`
					}, s.a.createElement(p.q, {
						onClick: a,
						className: Object(i.a)(k.a.snoovatarButton, k.a.snoovatarExtraPadding, k.a.compactButtonLayout)
					}, s.a.createElement(h.a, {
						className: k.a.shirtIcon
					}), x._("Try this Look", null, {
						hk: "dOuPb"
					}), s.a.createElement("div", {
						className: k.a.chevronIcon
					})))
				}),
				w = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				O = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				y = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				E = r.n(y);
			const I = 25;

			function j(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function N(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const C = j("particleDelay", E.a),
				P = j("particleX", E.a),
				S = j("particleFloat", E.a),
				T = () => {
					const e = N(P),
						t = N(S),
						r = N(C);
					return Object(i.a)(E.a.particle, e, t, r)
				};
			class R extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < I; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: E.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${T()}`
					})
				}
			}
			var U = R,
				L = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				B = r.n(L),
				A = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: n,
				isDeletingBanner: u,
				isEmployee: m,
				isGold: b,
				isNSFW: p,
				isOwnProfile: f,
				onClickSnoovatar: h,
				onDeleteBanner: v,
				prefersReducedAnimations: g,
				snoovatarUrl: k,
				title: x,
				userCreated: y,
				username: I,
				url: j,
				isHovercard: N
			}) => {
				const C = Object(a.e)(e => !f && !!k && Object(c.e)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(w.a, {
					bannerBackgroundImage: e,
					editMode: !!n,
					isNSFW: p,
					username: I,
					isDeletingBanner: !!u,
					onDeleteBanner: v
				}), s.a.createElement("div", {
					className: E.a.snoovatarContainer
				}, b && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: E.a.topGlow
				}), s.a.createElement("div", {
					className: E.a.bottomGlow
				}), !g && s.a.createElement(U, null)), s.a.createElement("img", {
					className: Object(i.a)(E.a.snoovatar, {
						[E.a.premiumGlow]: b
					}),
					src: k || void 0
				})), !n && f && s.a.createElement(o.a, {
					to: "/settings/profile",
					className: E.a.snoovatarSettingsLink
				}, s.a.createElement(d.a, {
					name: "settings",
					className: B.a.settingsIcon
				})), s.a.createElement(A.a, {
					isEmployee: m,
					isGold: b,
					isNSFW: p,
					title: x,
					username: I
				}), s.a.createElement(O.a, {
					className: E.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: I,
					userCreated: y,
					url: j
				}), (f || !r && !!k) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: f,
					onClick: h
				}), C && s.a.createElement(_, {
					username: I,
					isHovercard: !!N
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
				return f
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
			const m = ({
					border: e,
					small: t,
					...r
				}) => a.a.createElement(i.q, u({}, r, {
					priority: e ? i.b.Primary : i.b.Plain,
					className: Object(l.a)(r.className, c.a.BaseButton),
					size: t ? i.c.S : i.c.M
				})),
				b = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
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
				p = ({
					buttonType: e,
					border: t,
					small: r,
					...n
				}) => a.a.createElement(i.q, u({}, n, {
					priority: t ? i.b.Secondary : i.b.Plain,
					className: Object(l.a)(n.className, c.a.BaseButton),
					size: r ? i.c.S : i.c.M,
					text: b(e)
				}));
			class f extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						small: n = !1,
						isFullWidth: s = !1
					} = this.props, i = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: n,
						isFullWidth: s
					};
					return this.props.userIsSubscriber ? a.a.createElement(p, u({}, i, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(m, u({}, i, {
						id: r
					}), this.props.children, Object(o.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/TrackingHelper/index.tsx"),
				s = r("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = r("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(n.c)(a.a))
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
					}), (!a || e.multiple) && s.a.createElement("input", {
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
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("message",e.isFilled)} ${e.className}`
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
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				o = r.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, o.a.admin, {
					[o.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
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
				return h
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return w
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
				g = (e, t) => {
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
				x = Object(n.a)((e, {
					subredditName: t
				}) => {
					const r = t.toLowerCase(),
						n = e.pages.subredditWiki.wikiBannedContributors.listing,
						s = n.userOrder[r],
						i = n.models[r];
					return s ? s.map(e => i[e]) : a
				}),
				_ = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[r.toLowerCase()]
				},
				w = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.d24c801efcaf297eb717.js.map