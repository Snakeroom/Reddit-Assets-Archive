// https://www.redditstatic.com/desktop2x/SubredditWiki.2903eb83e012d1f194cd.js
// Retrieved at 3/29/2021, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/chat/controls/Svg/index.m.less"),
				d = s.n(o);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: s,
						active: n,
						hover: a
					} = e;
				return i.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[d.a.disable]: s,
						[d.a.active]: n,
						[d.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", d.a)
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
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const i of e) t++, s += i.length, n[t] = s;
					return n
				},
				i = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const i of e) {
						for (let e = 0; e < i.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
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
					u = Object(i.b)(c, s, l);
				u && a.c.has(u) && Object(r.k)(c, s, o.TimerType.InApp, a.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "subredditWikiDataPending", (function() {
				return qe
			})), s.d(t, "subredditWikiDataLoaded", (function() {
				return Ve
			})), s.d(t, "subredditWikiDataFailed", (function() {
				return Ge
			})), s.d(t, "fetchSubredditWikiData", (function() {
				return Je
			})), s.d(t, "handleWikiRedirects", (function() {
				return Ye
			})), s.d(t, "subredditWikDataRequested", (function() {
				return Xe
			})), s.d(t, "subredditWikiPageRequested", (function() {
				return Ze
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/isEmpty.js"),
				r = s.n(i),
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
				f = s("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				k = s("./src/lib/makeGqlRequest/index.ts"),
				v = s("./src/graphql/operations/WikiComparisonDiff.json"),
				y = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var E = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				w = s("./src/reddit/selectors/subredditWiki.ts");
			const _ = Object(d.a)("WIKI_DIFF_PENDING"),
				C = Object(d.a)("WIKI_DIFF_LOADED"),
				O = Object(d.a)("WIKI_DIFF_FAILED"),
				j = e => async (t, s, n) => {
					const i = s(),
						r = Object(E.a)(e),
						a = Object(w.i)(i, {
							key: r
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: r
					};
					t(_(d));
					const c = await ((e, t) => Object(k.a)(e, {
						...v,
						variables: {
							...t,
							comparisonRevisionId: Object(y.b)(t.comparisonRevisionId),
							revisionId: Object(y.b)(t.revisionId)
						}
					}))(n.gqlContext(), e);
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
					return t(l ? O({
						...d,
						error: l
					}) : C({
						...d,
						htmlDiff: u
					})), !l
				};
			var N = s("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				P = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				T = s("./src/reddit/constants/parameters.ts"),
				S = s("./src/reddit/constants/wiki.ts"),
				I = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				R = s("./src/reddit/helpers/brandSafety/index.ts"),
				L = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				B = s("./src/reddit/models/Toast/index.ts"),
				M = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				W = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/lib/initializeClient/installReducer.ts"),
				F = s("./node_modules/redux/es/redux.js");
			const H = {};
			var U = (e = H, t) => {
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: s,
							htmlDiff: n
						} = t.payload;
						return {
							...e,
							[s]: {
								htmlDiff: n
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
							error: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
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
						case h.b:
							const s = t.payload,
								{
									subredditWiki: n,
									options: i
								} = s,
								r = n && n.directory;
							if (!r) return e;
							const {
								subredditName: a
							} = i;
							return {
								...e, [a.toLowerCase()]: r
							};
						default:
							return e
					}
				},
				V = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const G = {};
			var z = (e = G, t) => {
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: s,
								pageKey: n
							} = t.payload, {
								page: i
							} = s;
							return n && i ? {
								...e,
								[n]: i
							} : e
						}
						case V.a: {
							const {
								pageKey: s,
								page: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				J = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const Y = {};
			var X = (e = Y, t) => {
					switch (t.type) {
						case J.c: {
							const {
								settings: s,
								pageKey: n
							} = t.payload;
							return s ? {
								...e,
								[n]: s
							} : e
						}
						case J.d: {
							const {
								isVisible: s,
								editPermissions: n,
								pageKey: i
							} = t.payload, r = e[i];
							return r ? {
								...e,
								[i]: {
									...r,
									isVisible: s,
									editPermissions: n
								}
							} : e
						}
						case J.b: {
							const {
								editorsInfo: s,
								afterToken: n,
								pageKey: i
							} = t.payload, r = e[i];
							if (!r) return e;
							const a = [...r.editorsInfo, ...s];
							return {
								...e,
								[i]: {
									...r,
									editorsInfo: a,
									afterToken: n
								}
							}
						}
						case J.a: {
							const {
								username: s,
								pageKey: n
							} = t.payload, i = e[n];
							if (!i) return e;
							const r = i.editorsInfo.filter(e => e.username !== s);
							return {
								...e,
								[n]: {
									...i,
									editorsInfo: r
								}
							}
						}
						default:
							return e
					}
				},
				Z = s("./src/lib/omitKey/index.ts");
			const Q = {};
			var $ = (e = Q, t) => {
				switch (t.type) {
					case V.b: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case V.d:
					case V.c: {
						const {
							key: s
						} = t.payload;
						return Object(Z.a)(e, s)
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case V.d:
						case V.b:
						case V.c: {
							const {
								key: s
							} = t.payload, n = t.type === V.d;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				se = Object(F.c)({
					error: $,
					pending: te
				}),
				ne = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ie = {};
			var re = (e = ie, t) => {
				switch (t.type) {
					case V.c: {
						const {
							key: s,
							options: n,
							pageInfo: i,
							revisionsIds: r
						} = t.payload, a = e[s], o = n.after && a ? [...a.ids, ...r] : r;
						return {
							...e,
							[s]: {
								ids: o,
								pageInfo: i
							}
						}
					}
					case V.a: {
						const {
							page: {
								revision: s
							},
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: i
						} = t.payload, r = e[n];
						return r && s ? {
							...Object(Z.a)(e, i),
							[n]: {
								...r,
								ids: [s.id, ...r.ids]
							}
						} : e
					}
					case ne.a: {
						const {
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: n
						} = t.payload, i = {
							...e
						};
						return delete i[s], delete i[n], i
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
									page: s
								}
							} = t.payload, n = s && s.revision;
							return n && !e[n.id] ? {
								...e,
								[n.id]: n
							} : e
						}
						case V.c: {
							const {
								revisions: s
							} = t.payload;
							return {
								...e,
								...s
							}
						}
						case V.a: {
							const {
								page: s
							} = t.payload, n = s.revision;
							return n ? {
								...e,
								[n.id]: n
							} : e
						}
						case V.e: {
							const {
								revisionId: s,
								isHidden: n
							} = t.payload, i = e[s];
							return i ? {
								...e,
								[s]: {
									...i,
									isHidden: n
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(F.c)({
					api: se,
					listings: re,
					models: oe
				}),
				ce = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const le = {};
			var ue = (e = le, t) => {
				switch (t.type) {
					case ce.c:
					case ce.a: {
						const {
							subredditName: s,
							afterToken: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			const me = {};
			var pe = (e = me, t) => {
				switch (t.type) {
					case ce.b: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(Z.a)(e, s)
					}
					default:
						return e
				}
			};
			const be = {};
			var he = (e = be, t) => {
					switch (t.type) {
						case ce.d:
						case ce.c:
						case ce.b: {
							const {
								subredditName: s
							} = t.payload, n = t.type === ce.d;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				ge = Object(F.c)({
					error: pe,
					pending: he
				});
			const xe = {};
			var fe = (e = xe, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: s,
								bannedContributors: n
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									...n
								}
							}
						}
						case ce.e: {
							const {
								subredditName: s,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									...n
								}
							}
						}
						case ce.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload, i = Object(Z.a)(e[s], n);
							return {
								...e,
								[s]: i
							}
						}
						default:
							return e
					}
				},
				ke = s("./node_modules/lodash/uniq.js"),
				ve = s.n(ke);
			const ye = {};
			var Ee = (e = ye, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: ve()([...e[s] || [], ...n])
							}
						}
						case ce.e: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: ve()([...n, ...e[s] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload;
							return {
								...e,
								[s]: (e[s] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				we = Object(F.c)({
					afterToken: ue,
					api: ge,
					models: fe,
					userOrder: Ee
				});
			const _e = {};
			var Ce = (e = _e, t) => {
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: s,
								bannedContributor: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Oe = Object(F.c)({
					listing: we,
					search: Ce
				}),
				je = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ne = {};
			var Pe = (e = Ne, t) => {
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: s,
							afterToken: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					default:
						return e
				}
			};
			const Te = {};
			var Se = (e = Te, t) => {
				switch (t.type) {
					case je.b: {
						const {
							subredditName: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case je.d:
					case je.c: {
						const {
							subredditName: s
						} = t.payload;
						return Object(Z.a)(e, s)
					}
					default:
						return e
				}
			};
			const Ie = {};
			var Re = (e = Ie, t) => {
					switch (t.type) {
						case je.d:
						case je.c:
						case je.b: {
							const {
								subredditName: s
							} = t.payload, n = t.type === je.d;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Le = Object(F.c)({
					error: Se,
					pending: Re
				});
			const Be = {};
			var Me = (e = Be, t) => {
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: s,
							contributors: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...n
							}
						}
					}
					case je.e: {
						const {
							subredditName: s,
							contributor: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...n
							}
						}
					}
					case je.f: {
						const {
							subredditName: s,
							userId: n
						} = t.payload, i = Object(Z.a)(e[s], n);
						return {
							...e,
							newState: i
						}
					}
					default:
						return e
				}
			};
			const We = {};
			var De = (e = We, t) => {
					switch (t.type) {
						case je.c:
						case je.a: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: ve()([...e[s] || [], ...n])
							}
						}
						case je.e: {
							const {
								subredditName: s,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[s]: [...n, ...e[s] || []]
							}
						}
						case je.f: {
							const {
								subredditName: s,
								userId: n
							} = t.payload;
							return {
								...e,
								[s]: (e[s] || []).filter(e => e !== n)
							}
						}
						default:
							return e
					}
				},
				Ae = Object(F.c)({
					afterToken: Pe,
					api: Le,
					models: Me,
					userOrder: De
				});
			const Fe = {};
			var He = (e = Fe, t) => {
					switch (t.type) {
						case je.g: {
							const {
								subredditName: s,
								contributor: n
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Ue = Object(F.c)({
					listing: Ae,
					search: He
				}),
				Ke = Object(F.c)({
					diff: U,
					directory: q,
					pages: z,
					pageSettings: X,
					revisions: de,
					wikiBannedContributors: Oe,
					wikiContributors: Ue
				});
			Object(A.a)({
				pages: {
					subredditWiki: Ke
				}
			});
			const qe = Object(d.a)(h.c),
				Ve = Object(d.a)(h.b),
				Ge = Object(d.a)(h.a),
				ze = (e, t) => !!Object(w.b)(e, {
					subredditName: t
				}),
				Je = e => async (t, s, i) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === S.j, l = {
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
					const m = await Object(I.a)(i.gqlContext(), l),
						p = m.body,
						b = m.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return m.ok && b ? t(Ve({
						options: l,
						pageKey: u,
						subredditWiki: b
					})) : (t(Ge({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.E.NOT_FOUND_ERROR
						}
					})), a && t(Object(g.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: B.b.Error,
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e)
					}))), !(!m.ok || !r()(p.data.subreddit)) || !(!m.ok || !b)
				}, Ye = e => async (t, s) => {
					const {
						params: n,
						url: i
					} = e, {
						wikiPageName: r
					} = n, o = Object(W.a)(i, n);
					let d = !1;
					return S.l.includes(r || "") ? (await (async (e, t) => {
						const s = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = s
					})(e.url), d = !0) : i !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Xe = (e, t, s = !1) => async (i, r, a) => {
					const {
						subredditName: d = S.e,
						wikiPageName: l,
						wikiSubRoute: u
					} = e, m = t[T.A], p = t[T.B], h = m ? Object(y.a)(m) : void 0, k = p ? Object(y.a)(p) : void 0, v = l === S.j, E = u === S.m.Revisions;
					let _ = !1,
						C = !1;
					if (s) {
						const {
							pageName: t
						} = e;
						_ = t === o.Sb.WikiContributors, C = t === o.Sb.WikiBanned
					}
					const O = r(),
						I = (v || s) && !ze(O, d),
						R = !!l && !((e, t, s, n) => {
							return s === S.j ? ze(e, t) : !!Object(w.c)(e, {
								subredditName: t,
								wikiPageName: s,
								revisionId: n
							})
						})(O, d, l, h),
						L = [];
					L.push(i(((e, t = !1) => async (s, n) => {
						const i = n(),
							r = {
								sort: o.P.HOT
							},
							a = Object(c.a)(e, r.sort),
							d = i.listings.postOrder.api.error[a],
							l = i.listings.postOrder.api.pending[a],
							u = !!i.listings.postOrder.ids[a];
						return !!(l || u && !d) || (await s(Object(b.subredditDataRequested)(a, e, r, t)), !n().listings.postOrder.api.error[a])
					})(d))), (I || R) && L.push(i(Je({
						includeDirectory: I,
						includePageData: R,
						revisionId: h,
						subredditName: d,
						wikiPageName: l
					}))), u === S.m.Settings && l && L.push(i(Object(N.c)(d, l))), l && h && k && L.push(i(j({
						comparisonRevisionId: k,
						revisionId: h,
						subredditName: d,
						wikiPageName: l
					}))), E && L.push(i(Object(P.c)({
						isRecent: !l,
						wikiPageName: l,
						subredditName: d
					}))), _ && L.push(i(Object(f.e)(d))), C && L.push(i(Object(x.e)(d))), (await Promise.all(L)).every(Boolean) || i(Object(g.f)({
						kind: B.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Xe(e, t, s)
					}))
				}, Ze = e => async (t, s) => {
					if (await t(Ye(e))) return;
					const {
						params: n,
						queryParams: i
					} = e, r = n.subredditName || S.e;
					t(u.l({
						title: n.wikiPageName ? `${n.wikiPageName} - ${r}` : `wiki - ${r}`
					})), await t(Xe(n, i));
					const a = Object(D.A)(s(), {
							subredditName: r
						}),
						o = s();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(M.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(R.a)([], [a])
					})))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/structuredStyles/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(i.a)(a.u),
				g = Object(i.a)(a.v),
				x = Object(i.a)(a.t),
				f = (e, t, s) => async (n, i, r) => {
					const a = Object(p.A)(i(), {
						subredditName: e
					});
					if (a) return v(a, t, s)(n, i, r)
				}, k = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, s) => async (i, a, p) => {
					const f = await Object(l.e)(t);
					i(h());
					const v = a();
					try {
						await Object(r.g)("communityIcon", f, e.id)(i, a, p)
					} catch (E) {
						return Object(b.a)(Object(c.c)(v, "something went wrong with the uploading the image")), i(Object(o.f)({
							kind: u.b.Error,
							text: k()
						})), void i(x())
					}
					const y = Object(m.c)(a(), {
						name: "communityIcon"
					});
					if (!y) return Object(b.a)(Object(c.c)(v, "image is null")), i(Object(o.f)({
						kind: u.b.Error,
						text: k()
					})), void i(x());
					await Object(r.k)(e.id, {
						communityIcon: y
					}, d.b.idCard, s)(i, a, p), i(Object(o.f)({
						kind: u.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), i(g())
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				i = s("./src/lib/opener/index.ts"),
				r = s("./node_modules/react-router-redux/es/index.js");
			const a = (e, t = !0) => async (s, a, {
				routes: o
			}) => {
				const d = a();
				Object(n.a)(e, o, d) ? s(Object(r.b)(e)) : t ? Object(i.d)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return r
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
				i = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				r = "WIKI_BANNED_CONTRIBUTORS_FAILED",
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
				return w
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/graphql/operations/SubredditWikiBannedContributors.json"),
				u = s("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, {
				...l,
				variables: t
			});
			var p = e => {
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
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(r.a)(h.d),
				x = Object(r.a)(h.c),
				f = Object(r.a)(h.b),
				k = e => async (t, s, n) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await m(n.gqlContext(), r);
					if (a.ok) {
						const s = a.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = p(n);
							t(x({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const s = a.error || {
							type: i.E.UNKNOWN_ERROR
						};
						t(f({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, v = Object(r.a)(h.a), y = (e, t) => async (s, i, r) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki);
							s(v({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else s(Object(a.f)({
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
				}, E = Object(r.a)(h.e), w = (e, t) => async (s, r, d) => {
					const l = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: i.cb.POST,
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
						s(Object(a.f)({
							kind: b.b.SuccessMod,
							text: n.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const i = {
								subredditName: e,
								username: t.username
							},
							r = (await m(d.gqlContext(), i)).body;
						if (r.data.subreddit.wiki) {
							const t = p(r.data.subreddit.wiki);
							s(E({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						l.error.type === i.E.USER_DOESNT_EXIST && (e = n.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), s(Object(a.f)({
							kind: b.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return l.ok
				}, _ = Object(r.a)(h.f), C = (e, t) => async (s, r, d) => {
					const l = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: i.cb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (s(Object(a.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), s(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					})), l.ok
				}, O = Object(r.a)(h.g), j = (e, t) => async (s, i, r) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								i = Object.keys(n.bannedContributors)[0];
							s(O({
								subredditName: e.toLowerCase(),
								bannedContributor: n.bannedContributors[i]
							}))
						}
					} else s(Object(a.f)({
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
				return i
			})), s.d(t, "b", (function() {
				return r
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
				i = "WIKI_CONTRIBUTORS_LOADED",
				r = "WIKI_CONTRIBUTORS_FAILED",
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
				return w
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/graphql/operations/SubredditWikiContributors.json"),
				u = s("./src/reddit/constants/headers.ts");
			const m = (e, t) => Object(d.a)(e, {
				...l,
				variables: t
			});
			var p = e => {
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
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(r.a)(h.d),
				x = Object(r.a)(h.c),
				f = Object(r.a)(h.b),
				k = e => async (t, s, n) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await m(n.gqlContext(), r);
					if (a.ok) {
						const s = a.body,
							n = s.data.subreddit && s.data.subreddit.wiki;
						if (n) {
							const s = p(n);
							t(x({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const s = a.error || {
							type: i.E.UNKNOWN_ERROR
						};
						t(f({
							error: s,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, v = Object(r.a)(h.a), y = (e, t) => async (s, i, r) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki);
							s(v({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else s(Object(a.f)({
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
				}, E = Object(r.a)(h.e), w = (e, t) => async (s, r, d) => {
					const l = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: i.cb.POST,
						data: {
							api_type: "json",
							name: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (l.ok) {
						s(Object(a.f)({
							kind: b.b.SuccessMod,
							text: n.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const i = {
								subredditName: e,
								username: t
							},
							o = (await m(d.gqlContext(), i)).body;
						if (o.data.subreddit.wiki) {
							const t = p(o.data.subreddit.wiki),
								n = Object.keys(t.contributors)[0];
							!!r().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || s(E({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (l.error) {
						let e;
						const t = l.error.type;
						t === i.E.USER_DOESNT_EXIST ? e = n.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === i.E.BANNED_FROM_SUBREDDIT && (e = n.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), s(Object(a.f)({
							kind: b.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return l.ok
				}, _ = Object(r.a)(h.f), C = (e, t) => async (s, r, d) => {
					const l = await ((e, t, s) => Object(o.a)(Object(c.a)(e, [u.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: i.cb.POST,
						data: {
							api_type: "json",
							id: s,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return l.ok ? (s(Object(a.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), s(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : s(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					})), l.ok
				}, O = Object(r.a)(h.g), j = (e, t) => async (s, i, r) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = p(t.data.subreddit.wiki),
								i = Object.keys(n.contributors)[0];
							s(O({
								subredditName: e.toLowerCase(),
								contributor: n.contributors[i]
							}))
						}
					} else s(Object(a.f)({
						kind: b.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
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
				return i
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			const n = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				i = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				r = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				a = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "d", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/subredditSettings.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts"),
				m = s("./src/graphql/operations/SubredditWikiPageSettings.json"),
				p = s("./src/reddit/models/SubredditWikiPage/index.ts");
			const b = (e, t) => Object(c.a)(e, {
					...m,
					variables: t
				}),
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
				x = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				f = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(r.a)(v.c),
				E = (e, t) => async (s, n, i) => {
					const r = {
							subredditName: e,
							wikiPageName: t
						},
						o = await b(i.gqlContext(), r),
						d = Object(k.F)(n(), e);
					if (Object(k.V)(n(), d) || await s(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							s(y({
								pageKey: Object(x.a)(r),
								settings: e
							}))
						}
					}
					return o.ok
				}, w = Object(r.a)(v.b), _ = (e, t, s) => async (i, r, a) => {
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
									editorsInfo: r,
									afterToken: a
								} = s;
							i(w({
								editorsInfo: r,
								afterToken: a,
								pageKey: Object(x.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else i(Object(o.f)({
						kind: f.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e, t, s)
					}));
					return c.ok
				}, C = Object(r.a)(v.d), O = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: s,
					subredditName: n
				}) => async (r, a, o) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: i.cb.POST,
						data: {
							permlevel: h[e.editPermissions],
							listed: e.isVisible ? "on" : void 0
						}
					}))({
						context: o.apiContext(),
						editPermissions: e,
						isVisible: t,
						wikiPageName: s,
						subredditName: n
					});
					return c.ok && r(C({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(x.a)({
							wikiPageName: s,
							subredditName: n
						})
					})), c.ok
				}, j = ({
					subredditName: e,
					username: t,
					wikiPageName: s
				}) => async (r, a, c) => {
					const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: i.cb.POST,
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
					if (m.ok) r(Object(o.f)({
						kind: f.b.SuccessCommunity,
						text: "User successfully added"
					})), await r(E(e, s));
					else if (m.error) {
						const e = m.error.type;
						let t = n.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === i.E.NOT_FOUND_ERROR && (t = n.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), r(Object(o.f)({
							kind: f.b.Error,
							text: t
						}))
					}
					return m.ok
				}, N = Object(r.a)(v.a), P = ({
					subredditName: e,
					username: t,
					wikiPageName: s
				}) => async (n, r, a) => {
					const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
						method: i.cb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: a.apiContext(),
						wikiPageName: s,
						subredditName: e,
						username: t
					});
					return c.ok && (n(Object(o.f)({
						kind: f.b.SuccessCommunity,
						text: "User has been successfully removed"
					})), n(N({
						username: t,
						pageKey: Object(x.a)({
							wikiPageName: s,
							subredditName: e
						})
					}))), c.ok
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			}));
			const n = "WIKI_REVISIONS_PENDING",
				i = "WIKI_REVISIONS_LOADED",
				r = "WIKI_REVISIONS_FAILED",
				a = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/graphql/operations/WikiRevisions.json");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/wiki/wikiRevision.ts");
			var b = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: i.cb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: i.cb.POST,
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
				f = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/selectors/subredditWiki.ts"),
				y = s("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const E = Object(r.a)(y.d),
				w = Object(r.a)(y.c),
				_ = Object(r.a)(y.b),
				C = e => async (t, s, r) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = s(), h = Object(x.a)(e), f = Object(v.p)(b, {
						listingKey: h
					});
					if (!o && !!f) return !0;
					const y = f && f.pageInfo.endCursor || void 0;
					if (!(!f || f.pageInfo.hasNextPage)) return !0;
					const O = {
							after: y,
							isRecent: u,
							subredditName: m,
							wikiPageName: p
						},
						j = {
							key: h,
							options: O
						};
					t(E(j));
					const N = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(r.gqlContext(), O);
					if (N.ok) {
						const e = N.body;
						if (e.data.subreddit) {
							const s = g(e.data);
							t(w({
								...j,
								...s
							}))
						}
					} else {
						const s = N.error || {
							type: i.E.UNKNOWN_ERROR
						};
						t(_({
							...j,
							error: s
						})), l && t(Object(a.f)({
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
				}, O = Object(r.a)(y.a), j = e => async (t, s, i) => {
					const {
						subredditName: r,
						wikiPageName: d
					} = e, c = Object(f.a)({
						...e,
						revisionId: void 0
					}), l = Object(x.a)({
						...e,
						isRecent: !1
					}), u = Object(x.a)({
						...e,
						isRecent: !0
					}), m = Object(v.p)(s(), {
						listingKey: l
					}), p = m && m.ids[0];
					if ((await h(i.apiContext(), e)).ok) {
						const e = (await Object(o.a)(i.gqlContext(), {
								includePageData: !0,
								subredditName: r,
								wikiPageName: d
							})).body,
							s = e.data.subreddit && e.data.subreddit.wiki,
							m = s && s.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(a.f)({
							kind: k.b.SuccessCommunityGreen,
							text: n.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(O({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: r,
							wikiPageName: d
						}))
					} else t(Object(a.f)({
						kind: k.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}, N = Object(r.a)(y.e), P = e => async (t, s, i) => {
					const r = await b(i.apiContext(), e);
					if (r.ok) {
						const s = r.body.status;
						t(N({
							revisionId: e.revisionId,
							isHidden: s
						}))
					} else t(Object(a.f)({
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
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "nofollow",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? i.a.createElement("span", {
					className: Object(r.a)(c.a.deletedAuthorLink, e.className)
				}, e.children) : i.a.createElement(o.a, {
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
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
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
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/subredditWelcomeMessage.ts"),
				u = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				p = s("./src/reddit/components/SubredditNav/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/index.tsx"),
				h = s("./src/reddit/constants/postLayout.ts"),
				g = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				k = s("./src/reddit/constants/tracking.ts"),
				v = s("./src/reddit/selectors/telemetry.ts");
			var y = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				E = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = e => i.a.createElement("svg", w({
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, e), i.a.createElement("path", {
					d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
				})),
				C = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/widgets.ts"),
				N = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				P = s.n(N);
			const T = c.a.wrapped(E.a, "Planet", P.a),
				S = c.a.img("SubredditIcon", P.a),
				I = Object(a.c)({
					spPollsEnabled: x.d.spPolls,
					subredditInlineEditingEnabled: (e, {
						subredditId: t
					}) => Object(C.a)(e, {
						subredditId: t
					}),
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(O.N)(e, {
						subredditId: t
					}),
					userIsSubscriber: (e, {
						subredditName: t
					}) => {
						const s = t;
						return Object(O.gb)(e, {
							identifier: {
								name: s,
								type: "subreddit"
							}
						})
					},
					widget: (e, {
						subredditId: t
					}) => t ? Object(j.f)(e, {
						subredditId: t
					}) : void 0
				});
			t.a = Object(r.b)(I, (e, t) => ({
				_onOpenWelcomeMessageModal: () => {
					var s;
					const n = t.subredditId || (null === (s = t.subreddit) || void 0 === s ? void 0 : s.id);
					if (n) return e(Object(l.d)(n))
				}
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				onOpenWelcomeMessageModal: () => !e.userIsSubscriber && t._onOpenWelcomeMessageModal()
			}))(Object(d.a)(e => {
				const t = Object(y.a)(),
					s = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					r = e.subreddit ? e.subreddit.url : e.subredditUrl,
					a = e.subreddit ? e.subreddit.title : "",
					d = e.subreddit && Object(f.a)(e),
					c = !(!e.theme || !d),
					l = n.charAt(0).toUpperCase() + n.slice(1),
					x = !!e.subreddit && e.subredditInlineEditingEnabled,
					E = Object(o.a)(P.a.SubredditIcon, P.a.editableIcon, {
						[P.a.emptyEditableIcon]: !d
					}),
					w = i.a.createElement(m.a, {
						className: E,
						subreddit: e.subreddit,
						iconUrl: d || void 0,
						inTopBar: !0
					}),
					C = c ? i.a.createElement(S, {
						src: d || void 0
					}) : t ? i.a.createElement(_, {
						className: P.a.DefaultIcon
					}) : i.a.createElement(T, null),
					O = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					j = e.layout ? e.layout === h.g.Large ? "984px" : "100%" : "1086px";
				return i.a.createElement("div", {
					className: P.a.container,
					style: {
						maxWidth: j
					}
				}, i.a.createElement("div", {
					className: P.a.subredditMetaContainer
				}, x ? w : C, i.a.createElement("div", {
					className: Object(o.a)(P.a.textContainer, {
						[P.a.textContainerNoIcon]: !c
					})
				}, i.a.createElement("div", {
					className: P.a.text
				}, i.a.createElement("h1", {
					className: P.a.title
				}, a || l), !!a && i.a.createElement("h2", {
					className: P.a.description
				}, "r/", n)), i.a.createElement("div", {
					className: P.a.subscribeButtonContainer
				}, i.a.createElement(b.a, {
					className: P.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => ({
							...v.defaults(t),
							source: "id_banner",
							action: k.c.CLICK,
							noun: e,
							subreddit: v.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: n,
						type: g.a.SUBREDDIT
					},
					onClick: e.onOpenWelcomeMessageModal,
					small: !0
				})), e.subreddit && i.a.createElement(u.a, {
					subreddit: e.subreddit,
					headerButton: !0
				}))), O && i.a.createElement(p.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: r,
					subredditId: s,
					subredditNavContainerClassName: P.a.subredditNavContainer
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
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => r.a.createElement(o.d, null, r.a.createElement(o.h, null, r.a.createElement(c.a, null, r.a.createElement(o.p, null, e.headerText || n.fbt._("Confirm", null, {
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
			}, e.cancelActionText || n.fbt._("Cancel", null, {
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loginHref/index.ts"),
				u = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				b = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = s("./src/reddit/components/Footer/index.m.less"),
				g = s.n(h);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = c.a.div("FooterContainer", g.a), k = c.a.div("UserAgreement", g.a), v = c.a.a("UserAgreementLink", g.a), y = c.a.a("PrivacyLink", g.a);
			var E = () => r.a.createElement(f, null, r.a.createElement(k, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", r.a.createElement(v, {
					href: `${n.a.redditUrl}/help/useragreement`
				}, x._("User Agreement", null, {
					hk: "2srkM2"
				}))), x._param("=Privacy Policy", r.a.createElement(y, {
					href: `${n.a.redditUrl}/help/privacypolicy`
				}, x._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), x._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				w = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				_ = s("./src/reddit/components/RichTextJson/index.tsx"),
				C = s("./node_modules/lodash/flatMap.js"),
				O = s.n(C),
				j = s("./src/lib/linkMatchers/index.ts"),
				N = s("./src/lib/linkMatchers/customLinks.ts"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx");
			const T = /\[(.+?)\]\((.+?)\)/g,
				S = e => {
					const t = e.split(T);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, i, r] = t.slice(n, n + 3);
						s.push(e), s.push([r, i])
					}
					return s
				};
			var I = r.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = O()(t, S)), e.parseRegularLinks && (t = O()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.f.add(N.g.subreddit.prefix, N.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const i of t) s.push(e.slice(n ? n.lastIndex : 0, i.index)), n = i, s.push([i.url, i.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, i] = t;
							return r.a.createElement(P.b, {
								className: e.linkClassName,
								href: n,
								isSponsored: !1,
								key: s,
								source: null
							}, i)
						}
						return r.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/controls/Button/index.tsx"),
				B = s("./src/chat/controls/Svg/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var W = e => r.a.createElement(B.a, M({}, e, {
					viewBox: "-1 -1 21 21"
				}), r.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				D = s("./src/reddit/models/ContentGate.ts"),
				A = s("./src/lib/constants/index.ts"),
				F = s("./src/reddit/selectors/platform.ts"),
				H = s("./src/reddit/selectors/user.ts");
			var U = s("./src/reddit/selectors/experiments/requestToJoinPrivateCommunities.ts"),
				K = s("./src/reddit/selectors/meta.ts"),
				q = s("./src/reddit/components/ContentGate/index.m.less"),
				V = s.n(q);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = c.a.wrapped(W, "PrivateKey", V.a), J = c.a.div("ButtonsContainer", V.a), Y = c.a.div("Container", V.a), X = c.a.div("Description", V.a), Z = c.a.div("PrivateSubredditDetails", V.a), Q = c.a.div("PrivateSubredditDescription", V.a), $ = c.a.h3("PrivateSubredditName", V.a), ee = c.a.a("Link", V.a), te = c.a.wrapped(L.k, "LinkRouterButton", V.a), se = c.a.wrapped(L.j, "LinkButton", V.a), ne = c.a.wrapped(L.n, "SecondaryLinkRouterButton", V.a), ie = c.a.wrapped(L.m, "SecondaryLinkButton", V.a), re = c.a.wrapped(te, "GoHomeLinkButton", V.a), ae = c.a.img("Image", V.a), oe = c.a.img("ImagePlaceholder", V.a), de = c.a.wrapped(te, "LeftLinkRouterButton", V.a), ce = c.a.wrapped(se, "LeftLinkButton", V.a), le = c.a.wrapped(ie, "SecondaryLeftLinkButton", V.a), ue = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", V.a), me = c.a.h3("Title", V.a), pe = c.a.div("PageBody", V.a), be = c.a.div("QuarantineMessageWrapper", V.a), he = Object(d.c)({
				isLoggedIn: H.I,
				isRequestToJoinPrivateCommunitiesEnabled: U.a,
				origin: K.i,
				user: H.i,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(H.J)(e)) return !1;
					const t = Object(F.d)(e);
					if (!t) return !1;
					const s = Object(H.e)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = s;
					if (!n) return !1;
					const i = 30 * A.x;
					return n > Date.now() - i
				})(e)
			}), ge = Object(R.t)(), xe = Object(a.b)(he, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), fe = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: i,
					isLoggedIn: a,
					isRequestToJoinPrivateCommunitiesEnabled: o,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: c,
					location: m,
					origin: h,
					pageLayer: g,
					quarantineRequiresEmail: x,
					quarantineMessage: f,
					quarantineMessageHtml: k,
					quarantineMessageRTJson: v,
					setNSFWPreference: y,
					subredditDescription: E,
					subredditName: C,
					user: O
				} = e, j = async () => {
					a ? await y() : await Object(u.k)(), window.location.reload()
				};
				switch (s) {
					case D.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(ae, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), r.a.createElement(me, null, G._("r/{community name} is a Reddit Premium community", [G._param("community name", C)], {
							hk: "2lyDwB"
						})), r.a.createElement(X, null, G._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(J, null, O ? r.a.createElement(le, {
							href: `${n.a.redditUrl}/premium`
						}, G._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(ce, {
							href: Object(l.a)(m, h)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? r.a.createElement(te, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement(ie, {
							href: Object(l.a)(m, h)
						}, G._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case D.a.Nsfw:
					case D.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(ae, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), r.a.createElement(me, null, s === D.a.Nsfw ? G._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : G._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), r.a.createElement(X, null, G._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), r.a.createElement(J, null, r.a.createElement(de, {
							to: "/"
						}, G._("No", null, {
							hk: "3fMglW"
						})), r.a.createElement(ie, {
							onClick: j
						}, G._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case D.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement(z, null), r.a.createElement(me, null, "r/", C, " ", G._("is a private community", null, {
							hk: "7zZmq"
						})), E && E.length && r.a.createElement(Z, null, r.a.createElement($, null, "r/", C), r.a.createElement(Q, null, r.a.createElement("div", null, E))), r.a.createElement(X, null, G._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", C, " ", G._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), r.a.createElement("br", null), G._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), r.a.createElement(J, null, O ? r.a.createElement(r.a.Fragment, null, !d && o && r.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: V.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), r.a.createElement(le, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${C}`
						}, G._("Message Mods", null, {
							hk: "vVe1i"
						}))) : r.a.createElement(le, {
							href: Object(l.a)(m, h)
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(te, {
							to: "/"
						}, G._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case D.a.QuarantinedSubreddit:
						return r.a.createElement("div", null, r.a.createElement(ae, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), r.a.createElement(me, null, G._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), r.a.createElement(X, null, G._("This community is {=quarantined}", [G._param("=quarantined", r.a.createElement(ee, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, G._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), r.a.createElement(be, null, v ? r.a.createElement(_.a, {
							content: v,
							rtJsonElementProps: {
								pageLayer: g
							}
						}) : k ? r.a.createElement(w.a, {
							html: k
						}) : f || G._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), G._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), r.a.createElement(J, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? r.a.createElement(J, null, r.a.createElement(ue, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(se, {
								href: `${n.a.redditUrl}/prefs/update`
							}, G._("Verify Email", null, {
								hk: "1893cq"
							}))) : r.a.createElement(J, null, r.a.createElement(de, {
								to: "/"
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(ie, {
								onClick: t
							}, G._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, i, x)));
					case D.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(ae, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), r.a.createElement(me, null, G._("r/{community name} has been banned from Reddit", [G._param("community name", C)], {
							hk: "2at9Se"
						})), (e => r.a.createElement(X, null, e ? r.a.createElement(I, {
							linkClassName: V.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : G._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), r.a.createElement(J, null, r.a.createElement(te, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(ae, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(me, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), r.a.createElement(J, null, r.a.createElement(te, {
							to: "/"
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(oe, null), r.a.createElement(me, null, G._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(X, null, G._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(J, null, O && r.a.createElement(b.a, {
							eventSource: "content_gate"
						}), r.a.createElement(re, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.ProfileDoesNotExist:
					case D.a.ProfileDeleted:
					case D.a.ProfileSuspended:
					case D.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(ae, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(me, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case D.a.ProfileBlockedForLegalReason:
									return G._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case D.a.ProfileDeleted:
									return G._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case D.a.ProfileSuspended:
									return r.a.createElement(r.a.Fragment, null, G._("This account has been {=suspended} .", [G._param("=suspended", r.a.createElement(ee, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, G._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case D.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(me, null, G._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(X, null, G._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(J, null, r.a.createElement(re, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(ae, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(me, null, G._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(J, null, r.a.createElement(re, {
							to: "/"
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(ae, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(me, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(J, null, r.a.createElement(te, {
							to: "/"
						}, G._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ge(xe(Object(o.i)(e => r.a.createElement(Y, null, r.a.createElement("div", null, r.a.createElement(pe, null, fe(e))), r.a.createElement(E, null)))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const i = Object(n.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ContributorRequestButton").then(s.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = i
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = s.n(h),
				x = s("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				k = x.a.wrapped(c.c, "StyledTooltip", g.a),
				v = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.gb)(e),
					userIsSuspended: b.O
				});
			t.a = Object(a.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: s => {
					s(Object(p.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: f
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: s,
				onHideTooltip: i,
				openCommunityCreation: a,
				sendEvent: o,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: c
			}) => r.a.createElement(u.l, {
				className: e,
				disabled: c || d,
				onClick: () => a(o),
				onMouseEnter: s,
				onMouseLeave: i,
				id: f,
				isFullWidth: !0
			}, n.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), d ? r.a.createElement(k, {
				caretOnTop: !0,
				tooltipId: f,
				text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? r.a.createElement(k, {
				caretOnTop: !0,
				tooltipId: f,
				text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "_23HWOAAvtr9XUARUICwS1l",
				button: "_1FQRn1pPshYj4hu7mq9APN",
				ChatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				chatIcon: "_2NhuccS8V_QQHeSCQ9CI5H",
				headerButton: "VjmtSca9g92ay_XMP6rCV",
				buttonCaption: "_3iAPYhncpDFRVQFe9wprJs"
			}
		},
		"./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/downToChat.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				u = s("./src/reddit/selectors/downToChat.ts"),
				m = s("./src/reddit/selectors/experiments/downToChat.ts"),
				p = s("./src/reddit/components/DownToChatBanner/StartChattingButton/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(a.c)({
				isDownToChatExperimentEnabled: m.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(u.c)(e, t.id)
			}), x = Object(r.b)(g, e => ({
				startChatting: t => e(Object(o.i)(t))
			}));
			t.a = x(Object(d.c)(e => {
				const {
					headerButton: t,
					isEnabled: s,
					isDownToChatExperimentEnabled: n
				} = e;
				if (!s || !n) return null;
				const r = h._("Start Chatting", null, {
					hk: "3KfdZ4"
				});
				return i.a.createElement(c.q, {
					className: b.a.button,
					text: r,
					Icon: t ? l.a : void 0,
					onClick: () => {
						const {
							startChatting: t,
							subreddit: s
						} = e;
						t(s.id)
					},
					redditStyle: !0
				})
			}))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(s.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
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
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./src/reddit/featureFlags/component.tsx");
			const r = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(i.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = s("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return i.a.createElement(r.a, {
					className: e.wrapperClassName,
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
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/IdCard/index.m.less"),
				a = s.n(r);
			const o = i.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return i.a.createElement("div", {
					className: a.a.Banner,
					style: t && t.length ? {
						backgroundImage: `url(${t})`
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/config.ts"),
				r = s("./src/reddit/constants/listings.ts"),
				a = s("./src/reddit/constants/page.ts");
			const o = e => e && e.toLowerCase() === r.b.Popular,
				d = e => e && e.toLowerCase() === r.b.All,
				c = e => e && e === a.b,
				l = (e, t = 40, s = 68) => ({
					height: s,
					image: e,
					width: t
				}),
				u = ({
					listingName: e,
					subreddit: t,
					idCardWidget: s
				}) => {
					let a, u, m, p, b;
					const h = s && s.subscribersText || n.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = s && s.currentlyViewingText || n.fbt._("Online", null, {
							hk: "36JX70"
						});
					let x, f;
					return c(e) ? (a = `${i.a.assetPath}/img/id-cards/home-banner@2x.png`, m = l(`url('${i.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = r.c[r.b.Home], u = n.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = n.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (a = `${i.a.assetPath}/img/id-cards/banner@2x.png`, u = n.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = l(`url('${i.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = r.c[r.b.All]) : o(e) ? (a = `${i.a.assetPath}/img/id-cards/banner@2x.png`, u = n.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = l(`url('${i.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = r.c[r.b.Popular]) : e && (u = s && s.description, m = l(""), p = t.displayText, b = t.url, f = s && s.subscribersCount, x = s && s.currentlyViewingCount), {
						snooBackground: m,
						description: u,
						titleText: p,
						url: b,
						subscribersCount: f,
						subscribersText: h,
						currentlyViewingText: g,
						currentlyViewingCount: x,
						...a ? {
							bannerBackgroundImage: a
						} : {}
					}
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/IdCard/index.m.less"),
				o = s.n(a);
			const d = ({
				snooBackground: e
			}) => i.a.createElement("div", {
				className: o.a.AdorableSnoo,
				style: {
					background: e.image,
					backgroundSize: `${e.width}px ${e.height}px`,
					height: e.height,
					width: e.width
				}
			});
			t.a = ({
				titleText: e,
				snooBackground: t
			}) => i.a.createElement("div", {
				className: Object(r.a)(o.a.Title, o.a.TitleShifted)
			}, i.a.createElement(d, {
				snooBackground: t
			}), i.a.createElement("div", {
				className: o.a.TitleTextShiftedContainer
			}, i.a.createElement("span", {
				className: o.a.TitleText
			}, e)))
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "i", (function() {
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/lodash/isNil.js"),
				d = s.n(o),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: s,
								...n
							}
						} = this;
						l.a.publish(c.a, n, e)
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
			var p = Object(r.b)(u, {})(m),
				b = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const s = Object(h.a)(e, t),
					n = Object(g.I)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var f = Object(r.b)(() => Object(a.a)(x, b.j, (e, t) => ({
				...e,
				depth: t
			})))(e => i.a.createElement(p, {
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
				const s = Object(h.a)(e, t),
					n = Object(g.I)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var v = Object(r.b)(() => Object(a.a)(k, e => e))(e => i.a.createElement(p, {
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
			var y = Object(r.b)(() => Object(a.c)({
					subreddit: g.T
				}))(e => i.a.createElement(p, {
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
				E = s("./src/reddit/hooks/usePostContext.ts");
			var w = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(E.a)(), r = Object(n.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, s]);
				return i.a.createElement(p, {
					className: e.className,
					type: "post",
					data: r
				})
			};
			var _ = e => {
				const {
					post: t,
					subredditOrProfile: s,
					isModerator: r
				} = Object(E.a)(), a = Object(n.useMemo)(() => ({
					author: t.author,
					isModerator: r,
					post: {
						id: t.id
					},
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {}
				}), [t, s, r]);
				return i.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: a
				})
			};
			var C = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = Object(E.a)(), r = Object(n.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: s ? {
						id: s.id,
						name: s.name,
						type: s.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, s]);
				return i.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: r
				})
			};
			var O = Object(r.b)(() => Object(a.c)({
				subreddit: g.T
			}))(e => i.a.createElement(p, {
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
			var j = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(g.L)(e, {
					identifier: t
				})
			}))(e => i.a.createElement(p, {
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
			var N = Object(r.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(g.T)(e, {
					subredditId: t
				}) : null
			}))(e => i.a.createElement(p, {
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
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				g = Object(r.b)(() => Object(a.c)({
					isNightmodeOn: m.V
				}));
			t.a = g(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(o.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), i.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/PlayButton/index.tsx"),
				b = s("./src/reddit/constants/elementClassNames.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/constants/tracking.ts"),
				v = s("./src/reddit/components/Media/blurredContent.ts"),
				y = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				E = s.n(y);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => e > 2 * g.e,
				C = e => {
					const t = Object(c.a)(E.a.image, b.g, e.className, {
							[E.a.mShowCentered]: e.showCentered,
							[E.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${g.j}px`), e.isListing || e.isTall && _(e.height) || (s.maxHeight = `${g.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), r.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				O = e => {
					const t = {};
					return (!e.showFull && Object(g.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${g.j}px`, e.shouldBlur && (t.maxWidth = Object(g.I)(e.height, e.width) ? `${g.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), r.a.createElement("div", {
						className: Object(c.a)(E.a.container, e.className),
						style: t
					}, e.children)
				},
				j = Object(a.b)(() => Object(d.a)(x.C, f.bb, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(x.b)(e, s) : null, (e, t, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s
				})));
			t.a = j(e => e.outboundUrl && !e.shouldBlur ? r.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank",
				rel: u.a,
				onMouseDown: t => {
					e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
				}
			}, P(e)) : e.isListing && e.postPermalink ? r.a.createElement(o.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(m.a)(e.postPermalink)
			}, P(e)) : P(e));
			const N = (e, t) => r.a.createElement(C, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[k.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				P = ({
					onClick: e,
					...t
				}) => {
					const s = Object(g.I)(t.height, t.width),
						i = _(t.height) && s;
					return r.a.createElement(O, w({}, t, {
						className: `${s?`${k.a} `:""}${t.className||""}`
					}), t.isListing ? r.a.createElement("div", {
						className: t.contentImageClassName
					}, N(s, t)) : r.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, N(s, t)), t.isListing && !t.showFull && t.height > g.j && Object(g.I)(t.height, t.width) && r.a.createElement("div", {
						className: E.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && r.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && r.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, r.a.createElement("button", {
						className: E.a.unblurButton
					}, Object(v.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/forceHttps/index.ts"),
				o = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = s.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < o.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? i.a.createElement("img", {
						className: c.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					d = Object(o.B)(e.height, e.width, e.forceAspectRatio);
				return i.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && i.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), i.a.createElement("div", {
					className: Object(r.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends i.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return i.a.Children.only(this.props.children) || i.a.createElement("div", null)
					}
					return i.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/selectors/video.ts");
			const h = 100,
				g = h / 2 / 1e3;
			var x = s("./src/lib/forceHttps/index.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class k extends a.a.Component {
				constructor(e) {
					super(e), this.toggle = e => {
						if (e) {
							const e = this.play();
							e && e.catch && e.catch(() => {})
						} else this.pause()
					}, this.ref = null
				}
				play() {
					if (this.ref && this.ref.play) return this.ref.play()
				}
				pause() {
					if (this.ref && this.ref.pause) return this.ref.pause()
				}
				componentDidMount() {
					this.initEventHandlers(), this.toggle(!this.props.shouldPause && (this.props.autoplay || this.props.isNotCardView))
				}
				componentWillUnmount() {
					this.destroyEventHandlers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.shouldPause !== e.shouldPause && this.toggle(!e.shouldPause && (e.autoplay || e.isNotCardView))
				}
				destroyEventHandlers() {
					this.ref && this.cancelBufferingDetector && this.cancelBufferingDetector()
				}
				initEventHandlers() {
					this.ref && this.props.onBufferingChange && (this.cancelBufferingDetector = function(e, t) {
						let s = !1,
							n = !1;
						const i = () => s = !0,
							r = () => n = !0;
						e.addEventListener("loadeddata", i), e.addEventListener("play", r), e.addEventListener("playing", r);
						let a = !1,
							o = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, n) return n = !1, void(o = d);
							if (e.paused || e.seeking || !s) return void(o = d);
							const i = a;
							4 === e.readyState ? a = !1 : !a && d >= o && d < o + g ? a = !0 : a && d >= o && d > o + g && (a = !1), o = d, i !== a && t(a)
						}, h);
						return () => {
							clearInterval(c), e.removeEventListener("playing", r), e.removeEventListener("play", r), e.removeEventListener("loadeddata", i)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: s,
						onBufferingChange: n,
						shouldLoad: i,
						shouldPause: r,
						showCentered: o,
						showFull: d,
						source: c,
						...l
					} = this.props;
					return a.a.createElement("video", f({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), a.a.createElement("source", {
						src: Object(x.a)(this.props.source || "")
					}))
				}
			}
			var v = k,
				y = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = s.n(y);
			const w = Object(d.c)({
					autoplayPref: p.b,
					consumed: b.a,
					loadTimes: b.f,
					metadata: b.h,
					started: b.k
				}),
				_ = Object(o.b)(w, (e, {
					postId: t
				}) => ({
					onBufferingChanged: s => {
						e(s ? l.r(t) : l.E(t))
					},
					onLoadStarted: s => e(l.q(t, s)),
					onMetadataReceived: s => e(l.D({
						metadata: s,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: s => e(l.A(t, s)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: s => e(l.N(s, t))
				}));
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = i()(e => {
						if (this.props.consumed) return;
						const {
							target: t
						} = e;
						t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && this.props.onWatched()
					}, 200), this.onTimeUpdate = e => {
						e.persist(), this._checkForConsumption(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.props.started || this.props.onPlayable(e.timeStamp)
					}, this.loadStarted = e => {
						this.props.onLoadStarted(e.timeStamp)
					}, this.sendTransformedMetadata = e => {
						this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						})
					}, this.onPaused = e => {
						this.props.onPaused()
					}, this.onPlaying = e => {
						this.props.loadTimes || this.onVideoPlayable(e), this.props.metadata || this.sendTransformedMetadata(e), this.props.onPlaying()
					}, this.renderVideoPlayer = () => {
						const {
							showCentered: e,
							isListing: t
						} = this.props, s = {};
						return e && (s.margin = "0 auto"), t || (s.maxHeight = `${m.e}px`), a.a.createElement(v, {
							autoplay: this.props.autoplayPref,
							className: Object(c.a)(u.a, E.a.styledVideo),
							height: this.props.height,
							isListing: this.props.isListing,
							isNotCardView: this.props.isNotCardView,
							key: this.props.postId,
							loop: !0,
							onBufferingChange: this.props.onBufferingChanged,
							onLoadStart: this.loadStarted,
							onLoadedData: this.onVideoPlayable,
							onLoadedMetadata: this.sendTransformedMetadata,
							onPause: this.props.onPaused,
							onPlaying: this.onPlaying,
							onTimeUpdate: this.onTimeUpdate,
							shouldLoad: this.props.shouldLoad,
							shouldPause: this.props.shouldPause,
							showCentered: this.props.showCentered,
							showFull: this.props.showFull,
							source: this.props.source,
							style: s,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : a.a.createElement("div", {
						className: Object(c.a)(E.a.container, this.props.className, {
							[E.a.centered]: this.props.showCentered
						})
					}, a.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = _(C)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const i = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? n.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? n.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
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
			const u = Object(r.a)(o.a),
				m = ["center", "bottom"],
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
					}, i.a.createElement(d.a, null), i.a.createElement(u, {
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
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				x = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				k = s.n(f);
			const v = c.a.wrapped(m.a, "_Dropdown", k.a),
				y = Object(u.a)(v),
				E = c.a.button("MenuButton", k.a),
				w = c.a.wrapped(g.a, "MenuIcon", k.a),
				_ = c.a.wrapped(p.b, "DropdownRow", k.a),
				C = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(x.b)(t)(e)
				}),
				O = Object(a.b)(C, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => {
				const t = Object(b.a)();
				return r.a.createElement(E, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(d.a)(e.className, {
						[k.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: j(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? r.a.createElement(h.a, {
					name: "overflow_horizontal"
				}) : r.a.createElement(w, null), r.a.createElement(y, {
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
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = s.n(u);
			const p = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				b = d.a.wrapped(e => r.a.createElement("div", {
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
					style: {
						...e.style,
						"--RawHTMLDisplay-tr-even": Object(n.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(l.a)(e).line, .8)
					}
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(o.a)(b))
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
			const u = ({
					className: e,
					children: t,
					editorWrapperRef: s,
					initialHeight: n
				}) => i.a.createElement("div", {
					className: Object(o.a)(c.a.editorWrapper, e),
					style: n ? {
						height: n
					} : void 0,
					ref: s
				}, t),
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...s
				}) => i.a.createElement(a.a, l({
					className: Object(o.a)(c.a.textareaAutosize, {
						[c.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, s));
			class p extends i.a.Component {
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
						innerRef: s,
						onEditorResize: n,
						...r
					} = this.props, {
						isResized: a
					} = this.state;
					return i.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, i.a.createElement(m, l({}, r, {
						children: !0,
						isFullHeight: !!a,
						textAreaRef: s
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				g = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				f = m.a.span("SpoilerWrapper", u.a),
				k = m.a.wrapped(({
					className: e,
					isOpen: t,
					...s
				}) => r.a.createElement(f, p({}, s, {
					className: Object(a.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				v = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [o.a.Click, o.a.Keydown]);
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return r.a.createElement(k, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, r.a.createElement(g, null, r.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), r.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = y
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "v", (function() {
				return f
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "u", (function() {
				return E
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "n", (function() {
				return O
			})), s.d(t, "t", (function() {
				return j
			})), s.d(t, "p", (function() {
				return N
			})), s.d(t, "o", (function() {
				return P
			})), s.d(t, "q", (function() {
				return T
			})), s.d(t, "s", (function() {
				return S
			})), s.d(t, "r", (function() {
				return I
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "w", (function() {
				return L
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/RichTextJson/elements.m.less"),
				o = s.n(a),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = [d.a.div("H1", o.a), d.a.div("H2", o.a), d.a.div("H3", o.a), d.a.div("H4", o.a), d.a.div("H5", o.a), d.a.div("H6", o.a)],
				m = d.a.hr("Hr", o.a),
				p = d.a.code("M", o.a),
				b = d.a.pre("Pre", o.a),
				h = d.a.blockquote("Blockquote", o.a),
				g = d.a.p("P", o.a),
				x = d.a.li("Li", o.a),
				f = d.a.ul("Ul", o.a),
				k = d.a.ol("Ol", o.a),
				v = d.a.strong("B", o.a),
				y = d.a.em("I", o.a),
				E = d.a.span("U", o.a),
				w = e => i.a.createElement("del", e),
				_ = d.a.sub("Sub", o.a),
				C = d.a.sup("Sup", o.a),
				O = d.a.table("Table", o.a),
				j = d.a.tr("Tr", o.a),
				N = d.a.td("Tdl", o.a),
				P = d.a.td("Tdc", o.a),
				T = d.a.td("Tdr", o.a),
				S = d.a.th("Thl", o.a),
				I = d.a.th("Thc", o.a),
				R = (d.a.th("Thr", o.a), d.a.wrapped(e => i.a.createElement(r.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", o.a)),
				L = d.a.wrapped(c.a, "A", o.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return w
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/lodash/findLastIndex.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/components/Media/blurredContent.ts"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/media.tsx"),
				g = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = s("./src/reddit/components/RichTextJson/index.m.less"),
				f = s.n(x);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = s("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				y = Object(d.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => a.a.createElement(v, k({}, s, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				E = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				w = e => i()(e, E),
				_ = e => e.findIndex(E),
				C = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: i,
						isNSFW: r,
						isSpoiler: d,
						onClickRevealBlurred: c,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: x,
						useExplicitTextColor: k,
						shouldBlur: E
					} = e, C = n.document, O = [], j = e.mediaMetadata || null, N = _(C), P = w(C);
					if (E && !i) return a.a.createElement(v, {
						className: Object(o.a)(u.j, s)
					}, a.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: c
					}, Object(l.a)(!!r, !!d))));
					if (-1 !== N)
						for (let a = N; a <= P; a++) {
							const e = C[a];
							switch (e.e) {
								case b.k:
									O.push(g.c(e, x, a));
									break;
								case b.l:
									O.push(g.d(a));
									break;
								case b.b:
									O.push(g.a(e, j, x, a));
									break;
								case b.c:
									O.push(g.b(e, a));
									break;
								case b.p:
									O.push(g.f(e, j, x, a));
									break;
								case b.z:
									O.push(g.h(e, j, x, a));
									break;
								case b.u:
									O.push(g.g(e, j, x, a));
									break;
								case b.h:
									O.push(Object(h.a)(e, a));
									break;
								case b.m:
								case b.a:
								case b.D:
									O.push(...Object(h.b)(e, a, j, p, m, t))
							}
						}
					return k ? a.a.createElement(v, {
						className: Object(o.a)(u.j, s)
					}, O) : a.a.createElement(y, {
						className: Object(o.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, O)
				};
			class O extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					c.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), c.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return C(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/config.ts"),
				d = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/helpers/richTextJson/index.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/elements.tsx"),
				g = s("./src/reddit/components/RichTextJson/media.m.less"),
				x = s.n(g),
				f = s("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = /\/(\w+)\/asset\/(\w+)\//,
				y = f.a.wrapped(h.a, "A", x.a),
				E = f.a.wrapped(l.a, "ImageBox", x.a),
				w = f.a.wrapped(e => r.a.createElement("p", e), "Caption", x.a),
				_ = f.a.div("Placeholder", x.a),
				C = f.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const i = t === b.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return r.a.createElement(_, k({
						className: e,
						style: {
							"--placeholder-content-text": `'${i}'`
						}
					}, s))
				}, "Placeholder", x.a),
				O = ({
					c: e,
					x: t,
					y: s
				}, n) => r.a.createElement("div", {
					className: x.a.MediaWrapper
				}, r.a.createElement(u.a, {
					height: s,
					isListing: !1,
					key: n,
					showCentered: !0,
					showFull: !0,
					width: t
				}, r.a.createElement(c.a, {
					isListing: !1,
					source: e,
					height: s,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				j = (e, t, s) => {
					const n = e.c;
					let i = "";
					return s && (s.e === b.s ? i = s.s.u : s.e === b.r ? i = s.s.gif : s.e === b.t && (i = (e => {
						const t = v.exec(e);
						return t ? `${o.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), i ? r.a.createElement(y, {
						href: i,
						key: t,
						title: n
					}, n || i) : null
				},
				N = (e, t, s, n, i, o) => {
					const c = b.E(s, e.id);
					if (n) return [j(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push((({
						id: e,
						s: t
					}, s, n, i) => r.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: n
						})
					}, r.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, r.a.createElement(E, {
						altText: i,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(c, t, !!e.c, o)) : c.e === b.r ? l.push((({
						id: e,
						ext: t,
						s
					}, n, i) => {
						if (Object(p.f)(e)) {
							const o = t || Object(p.e)(e);
							return r.a.createElement("div", {
								className: Object(a.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: i
								})
							}, r.a.createElement(y, {
								href: o,
								key: n,
								target: "_blank"
							}, s.mp4 ? r.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, r.a.createElement("source", {
								src: s.mp4
							})) : {
								originalSource: o
							}))
						}
						return r.a.createElement("div", {
							className: Object(a.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: i
							})
						}, r.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							key: n,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, r.a.createElement(m.a, {
							height: s.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: s.mp4,
							width: s.x,
							postId: e,
							source: s.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: s,
						y: n,
						isGif: i
					}, o, c, l) => r.a.createElement("div", {
						className: Object(a.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: c
						})
					}, r.a.createElement(u.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: o,
						showCentered: !0,
						showFull: !0,
						width: s
					}, r.a.createElement(d.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: i,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: i
					}))))(c, t, !!e.c, i)) : l.push(((e, t) => r.a.createElement(C, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => r.a.createElement(w, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "i", (function() {
				return W
			})), s.d(t, "e", (function() {
				return D
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				i = s("./node_modules/lodash/reduce.js"),
				r = s.n(i),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./node_modules/uuid/v4.js"),
				l = s.n(c),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/higherOrderComponents/makeAsync.tsx");
			var g = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = s.n(x);
			const k = 1e3,
				v = 1e3;
			var y;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(y || (y = {}));
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = y.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = y.Inside, setTimeout(() => {
							this.mouseLocation === y.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, k)
					}, this.onMouseOut = () => {
						this.mouseLocation = y.Outside, setTimeout(() => {
							this.mouseLocation !== y.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, i;
					t.e === p.s ? (s = t.s.x, n = t.s.y, i = t.s.u) : t.e === p.r && (s = t.s.x, n = t.s.y, i = t.s.gif);
					const r = this.state.tooltipOpen ? l()() : void 0;
					return i ? o.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, o.a.createElement("img", {
						id: r,
						src: i,
						width: s,
						height: n,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && o.a.createElement(g, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: r,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var w = Object(u.c)(E),
				_ = s("./src/reddit/components/RichTextJson/media.tsx"),
				C = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				O = s("./src/reddit/components/SubredditMention/index.tsx"),
				j = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				N = s("./src/reddit/helpers/richTextJson/index.ts");
			const P = (e, t, s) => {
					const n = e.c || [],
						i = e.l,
						r = [],
						a = n.length;
					for (let o = 0; o < a; o++) {
						const e = n[o];
						r.push(e.e === p.w ? e.t : D(e, t, o))
					}
					const c = d.x[i - 1];
					return o.a.createElement(c, {
						key: s
					}, r)
				},
				T = e => o.a.createElement(d.e, {
					key: e
				}),
				S = (e, t, s, n) => {
					const i = e.c;
					if (!i) return;
					const r = i.length,
						a = [];
					for (let o = 0; o < r; o++) a.push(L(i[o], t, s, o));
					return o.a.createElement(d.c, {
						key: n
					}, a)
				},
				I = (e, t) => {
					const s = e.c;
					return o.a.createElement(d.k, {
						key: t
					}, o.a.createElement(d.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				R = (e, t, {
					renderingObjectInfo: s
				}, n) => {
					const i = e.c,
						r = [],
						a = i.length;
					for (let l = 0; l < a; l++) {
						const e = i[l].c;
						e && e.length && r.push(o.a.createElement(d.g, {
							key: l
						}, e.map((e, n) => L(e, t, {
							renderingObjectInfo: s
						}, n))))
					}
					const c = e.o ? d.i : d.v;
					return o.a.createElement(c, {
						key: n
					}, r)
				},
				L = (e, t, s, n) => {
					switch (e.e) {
						case p.b:
							return S(e, t, s, n);
						case p.c:
							return I(e, n);
						case p.k:
							return P(e, s, n);
						case p.l:
							return T(n);
						case p.p:
							return R(e, t, s, n);
						case p.u:
							return M(e, t, s, n);
						case p.z:
							return B(e, t, s, n)
					}
				},
				B = (e, t, s, n) => {
					const i = e.c,
						r = e.h,
						a = i.length,
						c = r.length,
						l = [],
						u = [],
						m = [];
					for (let d = 0; d < c; d++) {
						const e = r[d],
							{
								H: n,
								D: i
							} = U(e.a),
							{
								c: a = []
							} = e;
						l.push(o.a.createElement(n, {
							key: d
						}, W(a, t, s))), m[d] = i
					}
					for (let p = 0; p < a; p++) {
						const e = i[p],
							n = e.length,
							r = [];
						for (let i = 0; i < n; i++) {
							const n = m[i],
								{
									c: a = []
								} = e[i];
							r.push(o.a.createElement(n, {
								key: i
							}, W(a, t, s)))
						}
						u.push(o.a.createElement(d.t, {
							key: p
						}, r))
					}
					return o.a.createElement(d.n, {
						key: n
					}, o.a.createElement("thead", null, o.a.createElement(d.t, null, l)), o.a.createElement("tbody", null, u))
				},
				M = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => o.a.createElement(d.j, {
						key: e
					}, o.a.createElement("br", null)))(n);
					const i = e.c[0];
					return i.e !== p.m && i.e !== p.a || !Object(N.f)(i.id) ? o.a.createElement(d.j, {
						key: n
					}, W(e.c, t, s)) : Object(_.b)(i, n, t)
				},
				W = (e, t, s) => {
					const n = [],
						i = e.length;
					for (let r = 0; r < i; r++) {
						const i = e[r];
						if (i.e === p.A) n.push(A(i, r));
						else if (i.e === p.x) n.push(o.a.createElement(C.a, {
							key: r
						}, W(i.c, t, s)));
						else if (i.e === p.n) n.push(o.a.createElement("br", {
							key: r
						}));
						else if (i.e === p.m || i.e === p.a) {
							if (i.id.startsWith("emote|")) {
								const e = p.E(t, i.id);
								e && n.push(o.a.createElement(w, {
									key: r,
									node: i,
									media: e
								}))
							}
						} else n.push(D(i, s, r))
					}
					return n
				},
				D = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const n = A({
								t: e.t,
								f: e.f
							}, 0);
							return Object(j.b)(e.u) ? o.a.createElement(d.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n) : o.a.createElement(d.a, {
								href: e.u,
								key: s,
								title: e.a
							}, n);
						case p.y:
							return o.a.createElement(O.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return o.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return o.a.createElement(d.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				A = (e, t) => {
					const {
						f: s,
						t: i
					} = e, r = [];
					if (!s) return H(0, i, t);
					const a = Object(n.a)(i);
					let o = 0,
						d = 0;
					const c = s.length;
					for (; o < c; o++) {
						const [e, t, n] = s[o], c = t + n, l = a[t], u = a[c] - l;
						l > d && r.push(H(0, i.substr(d, l - d), `between${o}`)), r.push(H(e, i.substr(l, u), o)), d = l + u
					}
					return d < i.length && r.push(H(0, i.substr(d), `remaining${o}`)), r
				},
				F = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				H = (e, t, s) => {
					let n = t;
					return n = r()(F, (t, n, i) => e & parseInt(i, 10) ? o.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				U = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
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
				i = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				v = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/reddit/components/MiniCardPost/index.m.less"),
				_ = s.n(w),
				C = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				O = s.n(C);
			const j = e => e.type === v.f.Spoiler,
				N = Object(h.t)();
			t.a = N(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					id: r,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: v,
					showSubredditMeta: w = !0,
					showSubredditName: C,
					subredditOrProfile: N
				} = e, P = h && h.preview && h.preview.url || void 0, T = h && h.isSponsored ? "promoted_trend" : "trending", S = h && Object(l.a)(h.permalink) || "", I = v && S || g && Object(o.a)("/search", {
					q: g.rawQuery,
					source: T
				}) || S, R = g ? g.subredditInfo && g.subredditInfo.icon : N && N.icon.url, L = g ? g.subredditInfo && g.subredditInfo.displayText : N && (N.displayText || N.name), B = h ? h.flair.filter(j) : [], M = h ? h.score : 0, W = h ? h.numComments : 0, D = h && h.isSponsored, A = Object(E.a)(e).body, F = `linear-gradient(\n      ${Object(i.g)(A,.2)},\n      ${Object(i.g)(A,.3)},\n      ${Object(i.g)(A,.4)},\n      ${Object(i.g)(A,.6)},\n      ${Object(i.g)(A,.8)},\n      ${A}\n    )`, H = a.a.createElement("div", {
					id: r,
					className: Object(d.a)(O.a.trendingPost, {
						[O.a["m-background"]]: !!P
					})
				}, a.a.createElement(x.a, {
					to: I
				}, a.a.createElement("div", {
					className: Object(d.a)(O.a.backgroundWrapper, _.a.backgroundWrapper, t),
					style: {
						background: Object(y.g)(Object(E.a)(e).body, P || Object(E.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": F
					}
				}, D && a.a.createElement("div", {
					className: O.a.promoted
				}, n.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(O.a.innerContainer, _.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? O.a.title : O.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(O.a.description, s)
				}, B.length > 0 && a.a.createElement(m.a, {
					className: O.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: h,
					showCategoryTag: !1
				}), h.title) : a.a.createElement("div", {
					className: O.a.spacer
				}), w && R && L && a.a.createElement(f.a, {
					className: O.a.relatedSubredditMetaData,
					iconClassName: O.a.subredditIcon,
					iconUrl: R || void 0,
					suffix: n.fbt._("{subredditName} and more", [n.fbt._param("subredditName", L)], {
						hk: "2YTyJf"
					})
				}), !w && h && a.a.createElement("div", {
					className: O.a.metaLine
				}, C && L && a.a.createElement("span", {
					className: O.a.meta
				}, Object(k.c)(L)), a.a.createElement("span", {
					className: O.a.meta
				}, n.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [n.fbt._plural(M, "number", Object(u.b)(M))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: O.a.meta
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(W, "number", Object(u.b)(W))], {
					hk: "311aXY"
				})))))));
				return D ? a.a.createElement(p.a, {
					post: h
				}, H) : H
			}))))
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/selectors/brandSafety.ts"),
				d = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.t)();
			t.a = m(Object(r.b)((e, {
				listingName: t,
				pageLayer: s
			}) => {
				const n = Object(o.b)(e, {
						listingName: t,
						pageLayer: s
					}),
					i = Object(c.A)(e) || Object(d.a)(e),
					r = Object(o.e)(e);
				return {
					canShowAd: n && !i,
					forcePlaceholder: !Object(o.c)(e),
					isAdsDisabled: i,
					viewIsUnsafe: r
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: s,
				pageLayer: n,
				...r
			}) => !t && e && n ? i.a.createElement(l.a, u({
				forceHouseAd: s
			}, r)) : null))
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = r.a.a("Link", c.a), m = Object(o.t)({
				isFrontpage: o.y
			});
			t.a = m(e => i.a.createElement(a.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, i.a.createElement("div", {
				className: c.a.LinkContainer
			}, i.a.createElement("div", {
				className: c.a.Column
			}, i.a.createElement(u, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), i.a.createElement(u, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), i.a.createElement(u, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), i.a.createElement(u, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), i.a.createElement(u, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && i.a.createElement(i.a.Fragment, null, i.a.createElement(u, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), i.a.createElement(u, {
				href: "https://www.reddit.com/posts/2020/"
			}, l._("Rereddit", null, {
				hk: "1z3k7C"
			})), i.a.createElement(u, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), i.a.createElement("div", {
				className: c.a.Column
			}, i.a.createElement(u, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), i.a.createElement(u, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), i.a.createElement(u, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), i.a.createElement(u, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), i.a.createElement(u, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), i.a.createElement(u, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), i.a.createElement(u, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), i.a.createElement(u, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), i.a.createElement(u, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), i.a.createElement("div", {
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", i.a)
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
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/lodash/throttle.js"),
				r = s.n(i),
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
				}, o.a.createElement(c.i, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, m._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(x),
				k = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = d.e[1] + 24,
				E = h.f + 8 + 152 + 16,
				w = E + y + 8,
				_ = k.a.div("Container", f.a),
				C = k.a.wrapped(({
					className: e,
					...t
				}) => o.a.createElement(p, v({
					className: e,
					style: {
						top: "calc(100vh - 8px)"
					}
				}, t)), "BackToTop", f.a),
				O = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: i
				}) => o.a.createElement("div", {
					className: Object(n.a)(t, {
						[f.a.StickyStyles]: i && !s,
						[f.a.StickyStylesFakeOverlay]: !!s
					})
				}, e);
			class j extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > w,
						shouldFooterSticky: this.windowHeight > E
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
							className: n,
							hideFooter: i
						}
					} = this, r = this.state.isAdSticky && !(!e && !s);
					return o.a.createElement(_, {
						className: n,
						innerRef: this.setWrapperRef
					}, o.a.createElement(O, {
						isFakeOverlay: t,
						isSticky: r
					}, e, s, !i && o.a.createElement(b.a, null)), !this.props.hideBackToTop && o.a.createElement(C, null))
				}
			}
			const N = Object(g.t)();
			t.a = N(j)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/ImageInput/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				f = s("./src/reddit/icons/svgs/Upload/index.tsx"),
				k = s("./src/reddit/models/ApiRequestState/index.ts"),
				v = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				y = s("./src/reddit/components/SubredditIcon/index.m.less"),
				E = s.n(y);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => {
					const {
						subredditId: t,
						className: s,
						inTopBar: n,
						...i
					} = e, a = Object(h.a)(), o = [s, E.a.inTopBar, E.a.iconContainer];
					return n ? o.push(E.a.emptyEditableIconInTopBar) : o.push(E.a.editableIcon, E.a.emptyEditableIcon), r.a.createElement("span", w({}, i, {
						className: Object(d.a)(...o)
					}), n ? a ? r.a.createElement(g.a, {
						name: "upload",
						className: E.a.emptyUploadButton
					}) : r.a.createElement(f.a, {
						className: E.a.emptyUploadButton
					}) : a ? r.a.createElement(g.a, {
						name: "add",
						className: E.a.emptyPlusButton
					}) : r.a.createElement(x.a, {
						className: E.a.emptyPlusButton
					}), e.children)
				},
				C = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: i,
						onClick: a,
						inTopBar: o,
						src: c
					} = e;
					return r.a.createElement("span", {
						className: E.a.iconContainer
					}, r.a.createElement("img", {
						alt: n,
						onClick: a,
						role: i,
						src: c,
						className: Object(d.a)(s, {
							[E.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				O = Object(o.c)({
					isLoading: v.b
				});
			class j extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(u.a, {
						className: E.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(k.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? r.a.createElement("span", {
						className: E.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? n.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : n.fbt._("Add icon", null, {
						hk: "1bbdMV"
					})) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = r.a.createElement(r.a.Fragment, null, r.a.createElement(C, w({
						alt: n.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, r.a.createElement(_, w({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(_, w({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [E.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(E.a.loadingIconInTopBar), t = 32), r.a.createElement(m.a, {
							className: Object(d.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? r.a.createElement("div", {
						className: E.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(a.b)(O, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(c.a)(t.subreddit, s, n))
				}
			}))(Object(l.c)(j))
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
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
			const u = r.a.wrapped(a.b, "SubredditIcon", c.a),
				m = r.a.wrapped(e => i.a.createElement(o.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => i.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, i.a.createElement(l.a, {
						href: `/r/${e}/`
					}, i.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, i.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = s("./src/reddit/selectors/subredditMention.ts");
			class f extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(g.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return i.a.createElement(o.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const k = Object(b.c)(f),
				v = Object(a.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				y = Object(r.b)(v),
				E = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: n,
					rtJsonElementProps: r
				}) => {
					if (!t || !e) return i.a.createElement(k, {
						subredditName: s,
						rtJsonElementProps: r
					});
					switch (n) {
						case h.jd.SmIcon:
							return i.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: r
							});
						case h.jd.SmIconHc:
							return i.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: r
							});
						default:
							return i.a.createElement(k, {
								subredditName: s,
								rtJsonElementProps: r
							})
					}
				};
			t.b = y(E)
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
				i = s("./node_modules/lodash/isEqual.js"),
				r = s.n(i),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/lib/isFakeSubreddit/index.ts"),
				f = s("./src/reddit/components/IdCard/helpers.ts"),
				k = e => !Object(x.a)(e) || Object(f.c)(e) || Object(f.d)(e) || Object(f.e)(e),
				v = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				E = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				w = s("./src/reddit/components/SidebarContainer/index.tsx"),
				_ = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				C = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = s("./src/lib/makeListingKey/index.ts"),
				j = s("./src/reddit/actions/subreddit.ts"),
				N = s("./src/lib/classNames/index.ts"),
				P = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				T = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/reddit/helpers/name/index.ts"),
				I = s("./src/reddit/helpers/overlay/index.ts"),
				R = s("./src/reddit/selectors/experiments/topPosts.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				B = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const M = .99;
			class W extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= M && t(s)
					}
				}
				render() {
					return o.a.createElement(B.a, {
						threshold: M,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var D = W,
				A = s("./src/lib/isUrl/index.ts"),
				F = s("./src/lib/prettyPrintNumber/index.ts"),
				H = s("./src/reddit/components/FlairWrapper/index.tsx"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				K = s("./src/reddit/models/Flair/index.ts"),
				q = s("./src/reddit/models/Subreddit/index.ts"),
				V = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				G = s.n(V);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), J = e => e.type === K.f.Nsfw || e.type === K.f.Spoiler, Y = Object(c.c)({
				post: L.D,
				subredditOrProfile: L.P
			});
			class X extends o.a.PureComponent {
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
					}, a = Object(A.a)(Object(U.b)(r)), d = t.flair.filter(J);
					return o.a.createElement("div", {
						className: Object(N.a)(G.a.container, e, {
							[G.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: G.a.mainLine
					}, a && o.a.createElement("div", {
						className: G.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(U.a, r)), o.a.createElement("div", {
						className: Object(N.a)(G.a.title, !a && G.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(H.a, {
						className: G.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: G.a.metaLine
					}, n && !!i && o.a.createElement("span", {
						className: G.a.meta
					}, Object(q.g)(i) ? Object(S.d)(i.displayText || i.name) : Object(S.c)(i.displayText || i.name)), o.a.createElement("span", {
						className: G.a.meta
					}, z._({
						"*": "{score} points",
						_1: "1 point"
					}, [z._plural(t.score, "score", Object(F.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: G.a.meta
					}, z._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [z._plural(t.numComments, "numComments", Object(F.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Z = Object(d.b)(Y, e => ({
					openLightbox: t => e(Object(I.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(X),
				Q = s("./src/reddit/components/SidebarPostList/index.m.less"),
				$ = s.n(Q);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = 10, se = 2, ne = Object(c.a)(L.J, e => e.filter(e => !e.isSponsored)), ie = Object(c.c)({
				posts: (e, t) => ne(e, {
					...t
				})
			});
			class re extends o.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || te, this.showMorePosts = () => {
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
						return o.a.createElement(D, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(Z, {
							className: Object(N.a)($.a.smallPost, r),
							containerOnClick: s,
							postId: e.id,
							redditStyle: i,
							showSubredditName: Object(x.a)(Object(S.g)(t)),
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
						redditStyle: a,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === r.length) return null;
					const u = this.getVisiblePostsCounts(),
						m = Object(R.a)(c),
						p = Object(R.b)(c),
						b = m || p,
						h = r.slice(l * u, (l + 1) * u),
						[g, ...f] = h,
						k = b ? h.slice(0, se) : f.slice(0, se),
						v = b ? h.slice(se) : f.slice(se);
					return o.a.createElement("div", {
						className: Object(N.a)($.a.container, t, {
							[$.a.redditStyle]: a
						})
					}, !b && o.a.createElement(D, {
						onPostVisible: i,
						postId: g.id
					}, o.a.createElement(P.a, {
						postId: g.id,
						backgroundWrapperClassName: $.a.largePostBackgroundWrapper,
						descriptionClassName: $.a.largePostDescription,
						innerContainerClassName: $.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(x.a)(Object(S.g)(s)),
						trendingPost: g
					})), k.map(this.renderSmallPost), e, v.map(this.renderSmallPost), d && o.a.createElement(T.o, {
						className: $.a.SeeMore,
						onClick: this.showMorePosts
					}, n || ee._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var ae = Object(d.b)(ie, e => ({
					openPost: t => e(Object(I.a)(t.permalink))
				}))(re),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ce = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				le = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = s("./src/reddit/selectors/discoveryUnit.ts"),
				me = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				be = s.n(pe);
			const he = 10,
				ge = Object(c.a)((e, t) => t.subredditName, e => Object(O.a)(e, l.P.TOP, {
					t: l.Ub.WEEK
				})),
				xe = Object(c.c)({
					discoveryUnit: e => Object(ue.c)(e, {
						unitName: le.j
					}),
					listingKey: ge,
					posts: (e, t) => {
						const s = ge(e, t);
						return Object(L.J)(e, {
							listingKey: s
						})
					},
					subreddit: me.A
				});
			class fe extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(ce.h)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(ce.x)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(ce.C)(t, e, void 0, s))
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
						loadMorePosts: i,
						posts: r,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === r.length) return null;
					const c = a,
						l = r.length > he;
					return o.a.createElement(de.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: n.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(ae, {
						listingKey: s,
						listingName: c,
						onShowMoreClick: i,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: be.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var ke = Object(d.b)(xe, (e, {
					subredditName: t
				}) => ({
					loadMorePosts: () => e(Object(j.r)({
						sort: l.P.TOP,
						subredditName: t,
						t: l.Ub.WEEK
					}))
				}))(Object(oe.c)(fe)),
				ve = s("./src/config.ts"),
				ye = s("./src/lib/localStorageAvailable/index.ts"),
				Ee = s("./src/reddit/actions/modal.ts"),
				we = s("./src/higherOrderComponents/asModal/index.tsx"),
				_e = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Ce = s("./src/reddit/controls/TextButton/index.tsx"),
				Oe = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Ne extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(_e.d, null, o.a.createElement(_e.h, null, o.a.createElement(Oe.a, null, o.a.createElement(_e.p, null, je._("Dismiss moderator onboarding checklist", null, {
						hk: "2NonB8"
					})), o.a.createElement(Ce.a, {
						onClick: e.toggleModal
					}, o.a.createElement(_e.b, null)))), o.a.createElement(_e.k, null, o.a.createElement(_e.o, null, je._("Are you sure you would like to dismiss the moderator checklist? You can still stylize your community once it is dismissed. Only moderators can view and interact with this checklist.", null, {
						hk: "4ubHRZ"
					}))), o.a.createElement(_e.f, null, o.a.createElement(_e.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, je._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(_e.q, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, je._("Confirm", null, {
						hk: "16mIEx"
					}))))
				}
			}
			var Pe = Object(we.a)(Ne),
				Te = s("./src/reddit/components/IdCard/Banner.tsx"),
				Se = s("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Ie = s("./src/reddit/constants/blade.ts"),
				Re = s("./src/reddit/controls/InternalLink/index.tsx"),
				Le = s("./src/reddit/helpers/localStorage/index.ts"),
				Be = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				Me = s("./src/reddit/icons/fonts/index.tsx"),
				We = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				De = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Ae = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Fe = s("./src/reddit/selectors/activeModalId.ts"),
				He = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				Ue = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ke = s("./src/reddit/selectors/structuredStyles.ts"),
				qe = s("./src/reddit/components/IdCard/index.m.less"),
				Ve = s.n(qe),
				Ge = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				ze = s.n(Ge);
			const Je = "mod_onboarding_modal",
				Ye = "mod_onboarding_widget",
				Xe = Object(c.a)(Fe.a, (e, t) => Object(Ue.a)(Ae.c.config)(e, {
					subredditId: t.subredditId
				}), (e, t) => Object(Ke.k)(e, {
					subredditId: t.subredditId
				}), He.a, (e, t, s, n) => ({
					activeModalId: e,
					hasModeratorPermissions: t,
					isInIcons2020: n,
					modHasEditedBanner: !s || !!(s.bannerBackgroundImage || s.bannerHeight || s.bannerPositionedImage || s.bannerBackgroundColor),
					modHasEditedColors: !s || !!(s.primaryColor || s.highlightColor || s.backgroundColor || s.backgroundImage),
					modHasEditedIcon: !s || (!!s.communityIcon || !!s.bannerShowCommunityIcon)
				}));
			class Ze extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(Le.lb)(Ye, !0, this.props.subredditId), this.props.sendEvent(Object(Be.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(Be.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(Be.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(Be.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(Be.d)("styling_generic_link"))
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
					} = this.props, r = e && !(t && s && n) && (!Object(ye.a)() || !Object(Le.u)(Ye, i));
					r !== this.state.visible && (this.setState({
						visible: r
					}), r && this.props.sendEvent(Object(Be.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						isInIcons2020: t,
						modHasEditedBanner: s,
						modHasEditedColors: i,
						modHasEditedIcon: r,
						subredditName: a,
						toggleCloseMenuModal: d
					} = this.props;
					return this.state.visible ? o.a.createElement(de.a, {
						className: Object(N.a)(ze.a.container, this.props.className)
					}, o.a.createElement(Te.a, {
						bannerBackgroundImage: `${ve.a.assetPath}/img/id-cards/mod-onboarding@2x.png`
					}), t ? o.a.createElement(Me.a, {
						name: "close",
						className: ze.a.closeIcon,
						onClick: d
					}) : o.a.createElement(De.a, {
						className: ze.a.closeIcon,
						onClick: d
					}), Object(Se.a)({
						titleText: n.fbt._("Add community style", null, {
							hk: "4lRD5A"
						}),
						snooBackground: Object(f.b)(`url('${ve.a.assetPath}/img/id-cards/snoo-artist@2x.png')`)
					}), o.a.createElement("div", {
						className: Object(N.a)(Ve.a.Description, ze.a.description)
					}, n.fbt._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [n.fbt._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: Ie.e.exportImport,
						className: ze.a.modHelpLink,
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(Re.a, {
						to: `/r/${a}?styling=true&route=${Ie.c.NameAndIcon}`,
						className: ze.a.link,
						onClick: this.customizeIcon
					}, r ? o.a.createElement(We.a, {
						className: ze.a.checked
					}) : o.a.createElement(We.a, {
						className: ze.a.unchecked
					}), n.fbt._("Add community icon", null, {
						hk: "2C9N7j"
					})), o.a.createElement(Re.a, {
						to: `/r/${a}?styling=true&route=${Ie.c.Banner}`,
						className: ze.a.link,
						onClick: this.customizeBannerImage
					}, s ? o.a.createElement(We.a, {
						className: ze.a.checked
					}) : o.a.createElement(We.a, {
						className: ze.a.unchecked
					}), n.fbt._("Customize banner", null, {
						hk: "2w04Qn"
					})), o.a.createElement(Re.a, {
						to: `/r/${a}?styling=true&route=${Ie.c.Global}`,
						className: ze.a.link,
						onClick: this.customizeThemeColors
					}, i ? o.a.createElement(We.a, {
						className: ze.a.checked
					}) : o.a.createElement(We.a, {
						className: ze.a.unchecked
					}), n.fbt._("Customize colors", null, {
						hk: "40coBA"
					})), o.a.createElement(T.n, {
						to: `/r/${a}?styling=true`,
						className: ze.a.button,
						onClick: this.customizeAppearance
					}, n.fbt._("Customize Appearance", null, {
						hk: "24k5Rj"
					})), o.a.createElement("div", {
						className: ze.a.subtext
					}, n.fbt._("Only moderators can see this widget", null, {
						hk: "2a8Zbm"
					})), e === Je && o.a.createElement(Pe, {
						withOverlay: !0,
						toggleModal: d,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var Qe = Object(d.b)(Xe, (e, {
					subredditId: t,
					subredditName: s
				}) => ({
					toggleCloseMenuModal: () => e(Object(Ee.i)(Je))
				}))(Object(oe.c)(Ze)),
				$e = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				et = s("./src/reddit/constants/tracking.ts"),
				tt = s("./src/reddit/selectors/seo/linksModule.ts"),
				st = s("./src/reddit/selectors/telemetry.ts"),
				nt = s("./src/telemetry/models/Subreddit.ts");
			const it = e => t => ({
					...st.defaults(t),
					action: et.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				rt = e => t => s => ({
					...st.defaults(s),
					action: et.c.CLICK,
					noun: Object(nt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				at = Object(c.c)({
					communities: tt.c
				});
			var ot = Object(d.b)(at)(e => {
					const t = Object(oe.b)();
					return e.communities && e.communities.length ? o.a.createElement(_.a, null, o.a.createElement($e.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: it,
						getSubscribeEventFactoryHandler: rt,
						sendEvent: t,
						title: n.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				dt = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				ct = s("./src/reddit/featureFlags/index.ts"),
				lt = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				ut = s("./src/reddit/models/Widgets/index.ts"),
				mt = s("./src/reddit/selectors/communityFlairs.ts"),
				pt = s("./src/reddit/selectors/experiments/econ/predictions.ts"),
				bt = s("./src/reddit/selectors/listings.ts"),
				ht = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				gt = s.n(ht);
			const xt = 250,
				ft = 270,
				kt = u.a.wrapped(w.a, "SidebarContainer", gt.a),
				vt = Object(c.c)({
					apiError: bt.c,
					apiPending: bt.d,
					communityFlairModels: (e, {
						subredditId: t
					}) => Object(mt.b)(e, t),
					communityFlairSortedKeys: (e, {
						subredditId: t
					}) => Object(mt.c)(e, t),
					isPredictionsLeaderboardsEnabled: pt.f,
					showGovernance: ct.d.spPoints,
					showLeaderboard: ct.d.spLeaderboard,
					showPredictionsLeaderboard: (e, {
						subredditId: t
					}) => Object(me.M)(e, {
						subredditId: t
					}) && !Object(me.N)(e, {
						subredditId: t
					}),
					widgets: me.s
				}),
				yt = Object(d.b)(vt);
			class Et extends a.Component {
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
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: ut.d.Cloud,
							shortName: n.fbt._("Filter by flair", null, {
								hk: "1DI34"
							}),
							templates: this.props.communityFlairModels
						}
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
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						isPredictionsLeaderboardsEnabled: t,
						listingName: s,
						showGovernance: n,
						showLeaderboard: i,
						showPredictionsLeaderboard: r,
						subredditId: a,
						subredditName: d,
						topPostsVariant: c
					} = this.props;
					let u = 0;
					const x = Object(R.a)(c),
						f = Object(R.b)(c),
						w = Object(R.c)(c),
						O = x || f;
					let j, N;
					!!this.getPostFlairWidget() ? j = this.props.widgets : (j = this.getCommunityWidgets(), N = this.makeFlairFilterWidget());
					const P = this.makeRelatedCommunitiesWidget(x, f),
						T = !x,
						S = f,
						I = o.a.createElement(E.a, {
							placement: l.c.ABOVE_THE_FOLD,
							listingName: s,
							placementIndex: u++,
							position: lt.a.FIRST,
							sizes: l.h
						});
					return o.a.createElement(kt, {
						className: e
					}, k(s) && o.a.createElement(g.a, {
						listingName: s
					}), o.a.createElement(p.a, {
						cardClassName: gt.a.card,
						subredditId: a
					}), o.a.createElement(y.a, {
						subredditId: a
					}), t && r && o.a.createElement(m.a, {
						subredditId: a
					}), O && o.a.createElement(_.a, null, o.a.createElement(ke, {
						subredditName: d,
						topPostsVariant: c
					}, o.a.createElement("div", {
						className: gt.a.inFeedAd
					}, I))), O && P && o.a.createElement(_.a, null, o.a.createElement(dt.a, {
						subredditName: d,
						truncateThreshold: ft,
						widget: P
					})), S && j.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(_.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: xt,
							widget: e
						}))
					}), o.a.createElement(Qe, {
						subredditId: a,
						subredditName: d
					}), n && o.a.createElement(b.a, {
						className: gt.a.card,
						subredditId: a
					}), N && o.a.createElement(_.a, null, o.a.createElement(dt.a, {
						subredditName: d,
						widget: N
					})), i && o.a.createElement(h.a, {
						className: gt.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(v.g, {
						subredditId: a
					}), !O && I, o.a.createElement(ot, {
						subredditId: a
					}), T && !S && j.map((e, t) => {
						const s = "community-list" === e.kind;
						return o.a.createElement(_.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(dt.a, {
							subredditName: d,
							truncateThreshold: w && s ? ft : w ? xt : void 0,
							widget: e
						}))
					}), o.a.createElement(C.a, {
						adComponent: o.a.createElement(E.a, {
							placement: l.c.BELOW_THE_FOLD,
							listingName: s,
							placementIndex: u++,
							position: lt.a.BOTTOM,
							sizes: l.n
						})
					}))
				}
			}
			t.a = yt(Et)
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				o = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(o);
			const c = r.a.div("WidgetBackground", d.a),
				l = r.a.wrapped(({
					children: e,
					...t
				}) => i.a.createElement("div", t, i.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => i.a.createElement("div", {
				className: e.className
			}, i.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return N
			})), s.d(t, "a", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				m = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				y = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				E = s("./src/reddit/models/Flair/index.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = s.n(C);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => r.a.createElement(b.a, {
					className: Object(c.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? r.a.createElement(x.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(T, j({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(g.o, {
					className: O.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				P = Object(d.c)({
					hideNSFWPref: w.B,
					nightmode: w.V
				}),
				T = Object(a.b)(P)(e => {
					const t = Object(f.a)();
					return r.a.createElement("div", {
						className: O.a.communityItemContainer
					}, r.a.createElement(y.a, {
						widthRight: h.t
					}, r.a.createElement("div", {
						className: O.a.iconContainer
					}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
						className: O.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? r.a.createElement(k.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(c.a)(O.a.defaultCommunityIcon, {
							[O.a.mNightmode]: e.nightmode
						})
					}) : r.a.createElement(v.a, {
						className: O.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: O.a.communityDescriptionContainer
					}, r.a.createElement(o.a, {
						className: O.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(_.b)(e.name, e.type),
						to: Object(_.a)(e.name, e.type)
					}, Object(_.b)(e.name, e.type)), r.a.createElement("div", {
						className: O.a.communityInfoContainer
					}, !!e.subscribers && r.a.createElement("p", {
						className: O.a.subscriberCount
					}, n.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [n.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && r.a.createElement(l.b, {
						flair: {
							type: E.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(x.a, {
						className: Object(c.a)(O.a.communityCta, O.a.smallLoadingIcon),
						sizePx: 12
					}) : r.a.createElement(g.o, {
						className: Object(c.a)(O.a.communityCta, {
							[O.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
						disabled: e.buttonDisabled,
						onClick: () => e.onTertiaryButtonClick(e)
					}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						sendEvent: e.sendEvent,
						small: !0,
						userIsSubscriber: !!e.isSubscribed,
						widget: e.widget
					}) : r.a.createElement(u.a, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						small: !0
					})), !!e.description && r.a.createElement("p", {
						title: e.description,
						className: O.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				i = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(i.d)(e) : Object(i.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
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
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = v(e);
					return Object(f.f)(t)
				},
				w = e => {
					const t = y(e);
					return Object(f.f)(t)
				};
			var _ = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = s.n(_);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.t)(), N = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.m)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						i = Object(x.V)(e);
					return n || i
				},
				nigtmode: x.V,
				subredditId: u.m,
				topPostVariant: h.d
			}));
			class P extends i.a.Component {
				constructor() {
					super(...arguments), this.contentRef = i.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = w(this.props), e
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
						truncateThreshold: u
					} = this.props, p = s ? C.a.widgetContentOnly : C.a.widgetContent, b = !n && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, g = b ? this.getWidgetHeaderStyles() : {};
					return i.a.createElement("div", {
						className: Object(o.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: n,
							[C.a.clickable]: !!a,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: h
					}, d && i.a.createElement("div", {
						className: C.a.widgetHeader,
						style: g
					}, i.a.createElement("div", {
						className: Object(o.a)(C.a.widgetTitle, l)
					}, i.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), i.a.createElement("div", {
						className: Object(o.a)(p, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && i.a.createElement(m.o, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, O._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(N(Object(d.a)(Object(l.c)(P))))
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
				active: "Jkkj0xIEOc5nizoeloGlN",
				cellCheckbox: "_2jHe0kuo-s2zjj9AFEoKIR",
				checkbox: "_2z1fkA5gXEWTIixh5mc5Mu",
				loadingRow: "_1twsCmeo_Rv87GnJLkvjOG",
				loadingShimmer: "_2OTytxS0mfmxAGAw4qKI6K",
				mShowActionButtons: "_3ZOwuRsjzzqragH4DDY3Au"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return $
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				u = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				x = s("./src/lib/addQueryParams/index.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/helpers/wiki/wikiRevision.ts");

			function v(e, t) {
				const {
					revision: s,
					revisionToCompare: n
				} = t;
				if (!s && !n) return e;
				const i = {};
				return s && (i[f.A] = Object(k.b)(s)), n && (i[f.B] = Object(k.b)(n)), Object(x.a)(e, i)
			}
			var y = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				E = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				w = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/subredditWiki.ts"),
				j = s("./node_modules/lodash/times.js"),
				N = s.n(j),
				P = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				T = s("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				S = s.n(T);
			var I = () => {
					const e = i.createElement("div", {
						className: Object(d.a)(S.a.loadingShimmer, Object(P.b)({
							isLoading: !0
						}))
					});
					return i.createElement("div", null, N()(4, t => i.createElement("div", {
						key: t,
						className: S.a.loadingRow
					}, e)))
				},
				R = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			class L extends r.a.Component {
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
					return r.a.createElement(R.a, {
						onChange: this.handleChange
					}, r.a.createElement("div", null))
				}
			}
			var B = s("./node_modules/lodash/noop.js"),
				M = s.n(B),
				W = s("./src/reddit/components/AuthorLink/index.tsx"),
				D = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				A = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				F = s("./src/reddit/controls/Checkbox/index.tsx"),
				H = s("./src/reddit/controls/InternalLink/index.tsx"),
				U = s("./node_modules/lodash/forEach.js"),
				K = s.n(U),
				q = s("./src/lib/fastdom/index.ts");

			function V(e) {
				q.a.read(() => {
					K()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								s = e.parentElement,
								n = "true" === s.dataset.textOverflow;
							t !== n && q.a.write(() => {
								s.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const G = Object(o.c)({
				revision: O.n
			});
			class z extends r.a.Component {
				constructor() {
					super(...arguments), this.reasonElementRef = r.a.createRef(), this.state = {}, this.onToggleHiddenClick = async () => {
						const {
							revision: e,
							revisionId: t,
							subredditName: s
						} = this.props, n = e.isHidden;
						this.props.sendEvent(Object(g.l)(n)), this.setState({
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
						this.props.sendEvent(g.q)
					}
				}
				componentDidMount() {
					this.reasonElementRef.current && V([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: s,
						isRecentRevisionMode: i,
						revision: a,
						subredditName: o
					} = this.props, c = a.page.name, l = a.isHidden, {
						expanded: u
					} = this.state, m = a.authorInfo && a.authorInfo.name, p = Object(E.a)({
						subredditName: o,
						wikiPageName: c
					}, s), b = v(p, {
						revision: a.id
					}), g = !i && e, x = c.split("/").slice(-1)[0];
					return r.a.createElement("tr", {
						className: Object(d.a)(S.a.row, l ? S.a.mHidden : null)
					}, !i && r.a.createElement("td", {
						className: S.a.cellCheckbox
					}, r.a.createElement(F.a, {
						className: S.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), r.a.createElement("td", {
						className: S.a.cellTime
					}, Object(A.b)(a)), i && r.a.createElement("td", {
						className: S.a.cellPage
					}, r.a.createElement(H.a, {
						className: S.a.wikiPageLink,
						title: `/${c}`,
						to: p
					}, x)), r.a.createElement("td", {
						className: S.a.cellUser
					}, m && r.a.createElement(D.a, {
						sendHoverCardEvent: M.a,
						tooltipId: `revision-${a.id}`,
						user: m
					}, r.a.createElement(W.a, {
						author: m,
						className: S.a.usernameLink
					}, m))), r.a.createElement("td", {
						className: S.a.cellReason
					}, r.a.createElement("div", {
						className: Object(d.a)(S.a.reasonTextWrapper, u ? S.a.mExpanded : null)
					}, r.a.createElement("div", {
						ref: this.reasonElementRef,
						className: S.a.reasonText
					}, a.reason), !u && r.a.createElement(h.g, {
						className: S.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, n.fbt._("more", null, {
						hk: "2IGYPS"
					})))), r.a.createElement("td", null, r.a.createElement("div", {
						className: S.a.buttons
					}, r.a.createElement(h.p, {
						className: S.a.viewButton,
						onClick: this.onViewClick,
						to: b
					}, n.fbt._("View", null, {
						hk: "4imNnh"
					})), g && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.o, {
						className: S.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, l ? n.fbt._("Show", null, {
						hk: "3YKyhU"
					}) : n.fbt._("Hide", null, {
						hk: "30nwHP"
					})), r.a.createElement(h.o, {
						className: S.a.revertButton,
						onClick: this.onRevertClick
					}, n.fbt._("Revert", null, {
						hk: "5mbFS"
					}))))))
				}
			}
			var J = Object(a.b)(G, e => ({
				toggleIsHidden: t => e(Object(l.b)(t))
			}))(z);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const X = Object(o.c)({
				hasError: O.o,
				hasWikiModPerms: (e, t) => {
					const s = Object(C.A)(e, t);
					return !!s && Object(_.h)(e, {
						subredditId: s.id
					})
				},
				isPending: O.q,
				isRevertConfirmationModalOpen: Object(w.b)("wiki-revert-confirmation"),
				listingInfo: O.p
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
							V(e.getElementsByClassName(S.a.reasonText))
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
							selectedRevisions: i
						} = this.state;
						return r.a.createElement(J, {
							key: e,
							hasWikiModPerms: s,
							isCheckboxSelected: i.includes(e),
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
						isPending: i,
						isRecentRevisionsMode: a,
						isRevertConfirmationModalOpen: o,
						listingInfo: c,
						subredditName: l,
						wikiPageName: p
					} = this.props, {
						selectedRevisions: g
					} = this.state, x = c && c.ids || [], f = c && c.pageInfo.hasNextPage;
					let k = "",
						y = "#";
					p && (k = Object(E.a)({
						subredditName: l,
						wikiPageName: p
					}, s), 2 === g.length && (y = v(k, {
						revision: g[0],
						revisionToCompare: g[1]
					})));
					const w = !a && t;
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Object(d.a)(S.a.container, {
							[S.a.mModHub]: s,
							[S.a.mShowActionButtons]: w
						})
					}, r.a.createElement(b.a, {
						buttonText: a ? void 0 : n.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: k,
						className: S.a.pageTitle,
						title: r.a.createElement("span", {
							className: S.a.pageTitleText
						}, a ? n.fbt._("Recent revisions", null, {
							hk: "VsZfq"
						}) : n.fbt._("Page history for {pageName}", [n.fbt._param("pageName", `/${p}`)], {
							hk: "y2LqH"
						}))
					}), r.a.createElement("div", {
						className: S.a.content
					}, !a && r.a.createElement("div", {
						className: S.a.compareBar
					}, r.a.createElement(h.p, {
						className: S.a.compareButton,
						disabled: g.length < 2,
						onClick: this.onCompareClick,
						to: y
					}, n.fbt._("Compare", null, {
						hk: "3grtKa"
					})), n.fbt._("{selectedCnt}/2 selected to compare", [n.fbt._param("selectedCnt", g.length.toString())], {
						hk: "1PfMOM"
					})), r.a.createElement("table", {
						className: S.a.table
					}, r.a.createElement("thead", null, r.a.createElement("tr", null, !a && r.a.createElement("th", {
						className: S.a.colHeaderCheckbox
					}), r.a.createElement("th", {
						className: S.a.colHeaderTime
					}, n.fbt._("time", null, {
						hk: "231ZTq"
					})), a && r.a.createElement("th", {
						className: S.a.colHeaderPage
					}, n.fbt._("Wiki page", null, {
						hk: "2CzzvU"
					})), r.a.createElement("th", {
						className: S.a.colHeaderUser
					}, n.fbt._("Username", null, {
						hk: "3dJxeH"
					})), r.a.createElement("th", {
						className: S.a.colHeaderReason
					}, n.fbt._("Revision Reason", null, {
						hk: "3Z0slk"
					})), r.a.createElement("th", {
						className: S.a.colHeaderActions
					}, w && r.a.createElement(r.a.Fragment, null, n.fbt._("Actions", null, {
						hk: "1V50p1"
					}), r.a.createElement(m.a, null, n.fbt._("View: View current version", null, {
						hk: "1Wp1Qa"
					}), r.a.createElement("br", null), n.fbt._("Hide: Hide revision from page history", null, {
						hk: "1G574c"
					}), r.a.createElement("br", null), n.fbt._("Revert: Revert page to an older version", null, {
						hk: "2IMILE"
					})))))), r.a.createElement("tbody", {
						className: S.a.tableBody
					}, x.map(this.renderRowItem))), i && r.a.createElement(I, null), f && r.a.createElement(L, {
						hasError: e,
						isLoading: i,
						onLoadMore: this.onLoadMore
					})), o && r.a.createElement(u.a, {
						actionText: n.fbt._("Revert", null, {
							hk: "qQOSa"
						}),
						headerText: n.fbt._("Revert wiki page", null, {
							hk: "2ZNWTL"
						}),
						modalText: n.fbt._("Are you sure you wish to change this wiki page to a previously saved version?", null, {
							hk: "4yhcAG"
						}),
						onConfirm: this.onRevertConfirmed,
						toggleModal: this.props.toggleRevetConfirmationModal,
						withOverlay: !0
					}))
				}
			}
			const Q = Object(a.b)(X, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(c.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(l.a)(t)),
				onLoadMoreRevisions: () => e(Object(l.c)({
					...t,
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				}))
			}))(Object(p.c)(Z));

			function $(e) {
				const t = !!e.isRecentRevisionsMode,
					s = Object(y.a)({
						...e,
						isRecent: t
					});
				return r.a.createElement(Q, Y({
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				u = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				p = s("./src/reddit/constants/wiki.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				x = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				k = s("./src/reddit/selectors/subredditWiki.ts"),
				v = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				y = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				E = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				_ = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				C = s("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				O = s.n(C);
			const j = e => {
				const {
					item: t,
					subredditName: s,
					isModHub: n
				} = e, r = t.isPagePresent && Object(_.a)({
					subredditName: s,
					wikiPageName: t.path
				}, n);
				return i.createElement("li", null, r ? i.createElement(E.a, {
					className: O.a.link,
					to: r
				}, t.name) : i.createElement("span", null, t.name), !!t.children.length && i.createElement("ul", null, t.children.map(e => i.createElement(j, {
					isModHub: n,
					item: e,
					key: e.path,
					subredditName: s
				}))))
			};
			var N = e => {
					const {
						isModHub: t,
						subredditName: s,
						wikiDirectory: r
					} = e, a = Object(w.a)(r.pageTree || []);
					return i.createElement("div", {
						className: O.a.container
					}, i.createElement("h1", null, n.fbt._("Viewing pages for {subredditName}", [n.fbt._param("subredditName", s)], {
						hk: "1f0dHX"
					})), i.createElement("h2", null, n.fbt._("Below is a list of pages in this wiki visible to you in this subreddit.", null, {
						hk: "3ywypD"
					})), i.createElement("ul", null, a.map(e => i.createElement(j, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: s
					}))))
				},
				P = s("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				T = s.n(P);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function I(e) {
				const {
					className: t,
					isModHub: s,
					showRevisionInfo: n,
					subredditName: i,
					wikiDirectory: a,
					wikiPage: o,
					wikiPageName: c
				} = e;
				let l = null;
				return a && c === p.j ? l = r.a.createElement(N, {
					isModHub: s,
					subredditName: i,
					wikiDirectory: a
				}) : o && o.content && c === p.h ? l = r.a.createElement("div", {
					className: T.a.automodContent
				}, o.content.markdown) : o && o.content && (l = r.a.createElement(v.a, {
					className: T.a.wikiHtmlContent,
					html: o.content.html
				})), r.a.createElement("div", {
					className: Object(d.a)(t, T.a.container)
				}, c === p.h && r.a.createElement("div", {
					className: T.a.automodInfoBanner
				}, S._("This page is used to configure AutoModerator for the subreddit, please see the {=full documentation} for information", [S._param("=full documentation", r.a.createElement("a", {
					href: "/wiki/automoderator/full-documentation"
				}, S._("full documentation", null, {
					hk: "1iIGFO"
				})))], {
					hk: "C2ew1"
				})), l, n && o && o.revision && r.a.createElement("div", {
					className: T.a.revisionInfo
				}, r.a.createElement(y.a, {
					showTimeAgo: !0,
					isLastRevision: !0,
					revision: o.revision
				})))
			}
			var R = s("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				L = s.n(R);
			const B = Object(a.b)(() => Object(o.c)({
					pending: k.a,
					wikiDirectory: k.b,
					wikiPage: k.c
				})),
				M = Object(b.t)();
			class W extends i.Component {
				constructor() {
					super(...arguments), this.onEditButtonClick = () => {
						this.props.sendEvent(Object(h.f)())
					}, this.isListingPage = () => this.props.wikiPageName === p.j, this.reloadPage = () => {
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
						let e = m.f + 10;
						this.props.isModHub && (e += m.j + m.k);
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
						subredditName: r,
						wikiDirectory: a,
						wikiPage: o,
						wikiPageName: d
					} = this.props, c = this.getWikiPageStatus(), m = d === p.i, b = this.props.isModHub ? `/r/${this.props.subredditName}/about/wiki` : `/r/${this.props.subredditName}/wiki`, h = `${b}/index`, k = m ? void 0 : n.fbt._("Wiki home", null, {
						hk: "1E1oVk"
					});
					if (t || !c) return i.createElement(u.a, {
						showTitle: !0
					});
					if (c === f.b.Unknown || c === f.b.PageNotCreated) {
						if (Object(g.b)(d)) return i.createElement(l.a, {
							buttonLink: h,
							buttonText: k,
							description: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "VYLjZ"
							}),
							title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
								hk: "33IIrL"
							})
						})
					}
					switch (c) {
						case f.b.Valid:
							return !(!o || !o.content || o.content.markdown) ? i.createElement(l.a, {
								buttonLink: `${b}/edit/${d}`,
								buttonText: n.fbt._("Edit page", null, {
									hk: "2I8ztD"
								}),
								description: n.fbt._("Edit it to add some content", null, {
									hk: "13lGpZ"
								}),
								title: n.fbt._("This page is empty", null, {
									hk: "r0I6D"
								})
							}) : i.createElement(I, {
								isModHub: e,
								showRevisionInfo: s,
								subredditName: r,
								wikiDirectory: a,
								wikiPage: o,
								wikiPageName: d
							});
						case f.b.PageNotCreated:
							return i.createElement(l.a, {
								buttonLink: `${b}/create/${d}`,
								buttonText: n.fbt._("Create page", null, {
									hk: "2JH7OE"
								}),
								description: n.fbt._("Create a wiki page from this URL", null, {
									hk: "NY4dz"
								}),
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case f.b.Unknown:
							return i.createElement(l.a, {
								buttonText: n.fbt._("Reload page", null, {
									hk: "1L70ii"
								}),
								onButtonClick: this.reloadPage,
								title: n.fbt._("An unknown error occurred", null, {
									hk: "3BhfEB"
								})
							});
						case f.b.RestrictedPage:
							return i.createElement(l.a, {
								buttonLink: h,
								buttonText: k,
								description: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
									hk: "VYLjZ"
								}),
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case f.b.MayNotView:
							return i.createElement(l.a, {
								buttonLink: h,
								buttonText: k,
								description: n.fbt._("The mods of this community have disabled this wiki page", null, {
									hk: "y3LOU"
								}),
								icon: i.createElement(x.a, {
									className: L.a.hideIcon
								}),
								title: n.fbt._("This page has been disabled", null, {
									hk: "1v13Nq"
								})
							});
						case f.b.WikiDisabled:
							return i.createElement(l.a, {
								buttonLink: `/r/${r}/`,
								buttonText: n.fbt._("Continue to r/{subredditName}", [n.fbt._param("subredditName", r)], {
									hk: "1oJQF7"
								}),
								description: n.fbt._("The mods of this community have disabled their wiki", null, {
									hk: "3qHJ8v"
								}),
								icon: i.createElement(x.a, {
									className: L.a.hideIcon
								}),
								title: n.fbt._("This wiki has been disabled", null, {
									hk: "3tfoag"
								})
							});
						case f.b.PageNotFound:
							return i.createElement(l.a, {
								buttonLink: h,
								buttonText: k,
								title: n.fbt._('"{pageName}" does not exist', [n.fbt._param("pageName", d)], {
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
					return i.createElement("div", {
						className: Object(d.a)(e, L.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = M(B(Object(c.c)(W)))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = s("./src/reddit/constants/wiki.ts"),
				l = s("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				u = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				m = s("./src/reddit/selectors/subredditWiki.ts"),
				p = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				b = s("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				h = s.n(b);
			var g = () => i.createElement("div", {
				className: h.a.loadingPlaceholder
			}, i.createElement("div", {
				className: h.a.loadingSection
			}, i.createElement(p.a, {
				paragraphsCount: 1
			})), i.createElement("div", {
				className: h.a.loadingSection
			}, i.createElement(p.a, {
				paragraphsCount: 1
			})));
			const x = Object(a.c)({
					diffInfo: (e, t) => {
						const s = Object(l.a)(t);
						return Object(m.i)(e, {
							key: s
						})
					}
				}),
				f = Object(r.b)(x);
			class k extends i.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: s,
						diffInfo: r,
						wikiPageName: a
					} = this.props;
					let l = null;
					l = !r || r.pending ? i.createElement(g, null) : r.error ? n.fbt._("Could not load comparison diff", null, {
						hk: "4mrAev"
					}) : i.createElement("div", {
						className: h.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: r.htmlDiff || ""
						}
					});
					const m = Object(u.a)({
						subredditName: s,
						wikiPageName: a,
						wikiSubRoute: c.m.Revisions
					}, t);
					return i.createElement("div", {
						className: Object(o.a)(e, h.a.container, t ? h.a.mModHub : null)
					}, i.createElement(d.a, {
						buttonText: n.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: m,
						className: h.a.pageTitle,
						title: n.fbt._("Comparing revisions for /{pageName}", [n.fbt._param("pageName", a)], {
							hk: "DGV1Y"
						})
					}), i.createElement("div", {
						className: h.a.content
					}, l))
				}
			}
			t.a = f(k)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./node_modules/react-router-redux/es/index.js"),
				u = s("./src/lib/makeActionCreator/index.ts"),
				m = s("./src/reddit/actions/pages/subredditWiki/index.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/constants/wiki.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				x = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var k = e => Object(g.a)(Object(x.a)(e.context, [f.a]), {
					endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/edit`,
					method: h.cb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				v = s("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				y = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				_ = s("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const C = Object(u.a)(_.a);
			var O = s("./src/reddit/components/BlockNavigation/index.tsx"),
				j = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				N = s("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				S = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				L = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				B = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				W = s("./src/reddit/selectors/platform.ts"),
				D = s("./src/reddit/selectors/subredditWiki.ts"),
				A = s("./src/higherOrderComponents/asModal/index.tsx"),
				F = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				H = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				U = s("./src/reddit/controls/TextButton/index.tsx"),
				K = s("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				q = s.n(K);
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
					} = this.state, s = b.g - t.length;
					return r.a.createElement("div", {
						className: q.a.container
					}, r.a.createElement(F.h, {
						className: q.a.modalHeader
					}, r.a.createElement(F.p, null, n.fbt._("Add a reason for your revision", null, {
						hk: "3ozq8e"
					})), r.a.createElement(U.a, {
						onClick: this.props.onCancel
					}, r.a.createElement(F.b, null))), r.a.createElement("div", {
						className: q.a.contentBlock
					}, r.a.createElement("label", null, r.a.createElement("span", {
						className: q.a.labelText
					}, n.fbt._("Revision reason", null, {
						hk: "W55mK"
					})), r.a.createElement("input", {
						autoFocus: !0,
						className: q.a.reasonInput,
						maxLength: b.g,
						onChange: this.onTextChange,
						placeholder: n.fbt._("Ex: Added source to appendix", null, {
							hk: "KB2dD"
						}),
						value: t
					})), r.a.createElement("div", {
						className: q.a.details
					}, n.fbt._({
						"*": "{number} characters left",
						_1: "1 character left"
					}, [n.fbt._plural(s, "number")], {
						hk: "1Ra9c8"
					}))), r.a.createElement(F.f, {
						className: q.a.modalFooter
					}, r.a.createElement(F.a, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(I.i, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? r.a.createElement(H.a, {
						className: q.a.loadingIcon,
						sizePx: 10
					}) : n.fbt._("Save", null, {
						hk: "1zNlod"
					}))))
				}
			}
			var G = Object(A.a)(V),
				z = s("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				J = s.n(z);
			const Y = "Discard-wiki-page-changes",
				X = "Add-wiki-revision-reason",
				Z = 2,
				Q = (e, t, s) => {
					const i = t.status,
						r = {
							[L.a.InvalidPageName]: n.fbt._("Page name is invalid", null, {
								hk: "3Ogzsc"
							}),
							[L.a.MaxLengthExceed]: n.fbt._("Page name must be shorter than {maxPageLen} characters", [n.fbt._param("maxPageLen", `${b.d}`)], {
								hk: "11HwWR"
							}),
							[L.a.PageAlreadyExists]: n.fbt._("Page with this name already exists", null, {
								hk: "3WRlhT"
							}),
							[L.a.RestrictedPageName]: n.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "BQtR2"
							})
						};
					if (e) {
						if (i === B.b.Valid) return r[L.a.PageAlreadyExists];
						if (i === B.b.PageNotFound) return n.fbt._("You do not have permission to create this page", null, {
							hk: "423aTf"
						});
						if (s) return r[s]
					} else if (i === B.b.Valid && !t.isRevisable) return n.fbt._("You do not have permission to edit this page", null, {
						hk: "1bUgsZ"
					})
				},
				$ = Object(o.c)({
					allowNavigationCallback: W.a,
					isRevisionReasonModalOpen: Object(M.b)(X),
					isSaveBeforeLeaveModalOpen: Object(M.b)(Y),
					wikiPage: D.c
				}),
				ee = Object(a.b)($, (e, t) => ({
					onSaveWikiPage: (s, i) => e((({
						pageContent: e,
						wikiPageName: t,
						revisionReason: s,
						subredditName: i
					}) => async (r, a, o) => {
						const d = await k({
							context: o.apiContext(),
							pageContent: e,
							revisionReason: s,
							subredditName: i,
							wikiPageName: t
						});
						if (d.ok) r(C({
							pageKey: Object(y.a)({
								subredditName: i,
								wikiPageName: t
							}),
							pageRevisionsListingKey: Object(v.a)({
								subredditName: i,
								wikiPageName: t,
								isRecent: !1
							}),
							recentRevisionsListingKey: Object(v.a)({
								subredditName: i,
								wikiPageName: t,
								isRecent: !0
							})
						})), await r(Object(m.fetchSubredditWikiData)({
							includeDirectory: !0,
							includePageData: !0,
							subredditName: i,
							wikiPageName: t
						}));
						else {
							let e = n.fbt._("Something went wrong", null, {
								hk: "4oNh1E"
							});
							d.body && "RESTRICTED_PAGE" === d.body.reason && (e = n.fbt._("Cannot create/edit restricted page", null, {
								hk: "2pUIkm"
							})), r(Object(p.f)({
								kind: E.b.Error,
								text: e
							}))
						}
						return d.ok
					})({
						pageContent: s,
						revisionReason: i,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(((e = !1) => async (t, s) => {
						const n = s().platform.currentPage,
							i = n.locationState && n.locationState[b.a];
						if (e && i) t(Object(l.a)());
						else {
							const {
								subredditName: e,
								wikiPageName: s
							} = n.urlParams, i = Object(w.a)(n.url, {
								subredditName: e,
								wikiPageName: s
							});
							t(Object(l.c)(i))
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
						isSaveBeforeLeaveModalOpen: s,
						wikiPage: i,
						wikiPageName: a
					} = this.props, {
						disableBlocking: o,
						isSavePending: c,
						markdown: l
					} = this.state, u = i && i.content && i.content.markdown || "", m = !l.trim(), p = l !== u, b = e && i ? Object(L.b)(i.name) : void 0, h = !(!i || i.status !== B.b.PageNotCreated || b), g = !(!i || i.status !== B.b.Valid || !i.isRevisable), x = e ? h : g, f = x && p && !m && !c && !b;
					return r.a.createElement("div", {
						className: Object(d.a)(J.a.container, this.props.className)
					}, r.a.createElement("div", {
						className: Object(d.a)(this.props.topBarClassName, J.a.topBar)
					}, r.a.createElement(I.l, {
						onClick: this.onCancel,
						disabled: c
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(I.i, {
						disabled: !f,
						onClick: this.showRevisionReasonModal
					}, n.fbt._("Save", null, {
						hk: "1zXyaJ"
					}))), r.a.createElement("div", {
						className: Object(d.a)(this.props.contentClassName, J.a.content)
					}, i ? x ? r.a.createElement(N.a, {
						autoFocus: !0,
						className: J.a.resizableTextarea,
						disabled: c,
						onChange: this.onTextChange,
						placeholder: n.fbt._("Add page content here", null, {
							hk: "4fxFCc"
						}),
						value: l
					}) : r.a.createElement(T.a, {
						description: Q(e, i, b),
						title: e ? n.fbt._('"{pageName}" cannot be created', [n.fbt._param("pageName", a)], {
							hk: "235tfC"
						}) : n.fbt._('"{pageName}" cannot be edited', [n.fbt._param("pageName", a)], {
							hk: "4qKJob"
						})
					}) : r.a.createElement(S.a, {
						paragraphsCount: Z
					})), t && r.a.createElement(G, {
						withOverlay: !0,
						onCancel: this.onCancelAddingRevisionReason,
						onSave: this.onSaveWithReason,
						isPending: c
					}), r.a.createElement(O.a, {
						blockOnBeforeUnload: !0,
						dialogId: Y,
						enabled: p && !o
					}), s && r.a.createElement(j.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: n.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: n.fbt._("You have made some changes to your wiki page, do you wish to discard the changes?", null, {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				c = s("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				l = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				u = s("./src/reddit/constants/wiki.ts"),
				m = s("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				p = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				b = s("./src/reddit/selectors/subredditWiki.ts"),
				h = s("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				g = s.n(h);
			const x = Object(a.c)({
					pending: b.a,
					revision: (e, {
						revisionId: t
					}) => t ? Object(b.n)(e, {
						revisionId: t
					}) : void 0,
					wikiPage: b.c
				}),
				f = Object(r.b)(x);
			class k extends i.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: s,
						revision: r,
						revisionId: a,
						subredditName: b,
						wikiPage: h,
						wikiPageName: x
					} = this.props;
					let f = null;
					f = s ? i.createElement(d.a, null) : h ? h.status === p.b.Valid ? h.content && h.content.markdown : n.fbt._("Cannot show page content", null, {
						hk: "pwCwd"
					}) : n.fbt._("Page not found", null, {
						hk: "26hzSO"
					});
					const k = r || h && h.revision,
						v = !a,
						y = Object(m.a)({
							subredditName: b,
							wikiPageName: x,
							wikiSubRoute: v ? void 0 : u.m.Revisions
						}, t);
					return i.createElement("div", {
						className: Object(o.a)(e, g.a.container, t ? g.a.mModHub : null)
					}, i.createElement(c.a, {
						buttonText: v ? n.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}) : n.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: y,
						className: g.a.pageTitle,
						title: !v && k ? n.fbt._("Revision from {timeAgo}", [n.fbt._param("timeAgo", Object(l.b)(k))], {
							hk: "36r4TU"
						}) : n.fbt._("Page source", null, {
							hk: "33sFXM"
						})
					}), i.createElement("div", {
						className: g.a.content
					}, i.createElement("div", {
						className: g.a.headerRow
					}, k && i.createElement(l.a, {
						isLastRevision: v,
						revision: k,
						showReason: !0,
						showTimeAgo: !1
					})), i.createElement("div", {
						className: g.a.pageSource
					}, f)))
				}
			}
			t.a = f(k)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/copyToClipboard/index.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				b = s("./src/reddit/constants/wiki.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/subredditWiki.ts"),
				y = s("./src/config.ts"),
				E = s("./src/reddit/components/OverflowMenu/index.tsx"),
				w = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/helpers/trackers/subredditWiki.ts"),
				O = s("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				j = s.n(O);
			const N = ["right", "bottom"],
				P = ["right", "top"];
			class T extends a.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(C.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, s = `${y.a.redditUrl}/r/${e}/wiki/${t}`;
						this.props.onCopyPageUrl(s), this.props.sendEvent(C.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: s,
						subredditName: i,
						wikiPage: r,
						wikiPageName: o
					} = this.props, d = s ? `/r/${i}/about/wiki` : `/r/${i}/wiki`;
					return a.a.createElement(E.b, {
						className: Object(c.a)(e, j.a.container),
						dropdownClassName: j.a.dropdown,
						dropdownId: t,
						targetPosition: N,
						tooltipPosition: P
					}, r && a.a.createElement(_.b, {
						className: j.a.row,
						displayText: n.fbt._("View page history", null, {
							hk: "fy9yY"
						}),
						href: `${d}/revisions/${o}`
					}), r && a.a.createElement(_.b, {
						className: j.a.row,
						displayText: n.fbt._("View page source", null, {
							hk: "1d5vg5"
						}),
						href: `${d}/${o}?${w.C}`,
						onClick: this.onViewPageSourceClick
					}), s && a.a.createElement(_.b, {
						className: j.a.row,
						displayText: n.fbt._("View in community", null, {
							hk: "mSFod"
						}),
						href: `/r/${i}/wiki/${o}`
					}), a.a.createElement(_.b, {
						className: j.a.row,
						displayText: n.fbt._("Copy URL", null, {
							hk: "3yBYUk"
						}),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var S = T,
				I = s("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				R = s.n(I);
			const L = Object(d.c)({
					hasWikiModPerms: (e, t) => {
						const s = Object(k.A)(e, t);
						return !!s && Object(f.h)(e, {
							subredditId: s.id
						})
					},
					wikiPage: v.c
				}),
				B = Object(o.b)(L, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(l.a)(e) && t(Object(u.f)(Object(u.e)(n.fbt._("Copied page URL", null, {
							hk: "4qKWjj"
						}), x.b.SuccessCommunity)))
					})(t))
				}));
			class M extends a.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: s,
						wikiPageName: r,
						subredditName: o,
						className: d
					} = this.props, l = !!s && s.status === g.b.Valid, u = !!s && s.isRevisable, m = e && u && l, x = t ? `/r/${o}/about/wiki/edit/${r}` : `/r/${o}/wiki/edit/${r}`;
					return a.a.createElement("div", {
						className: Object(c.a)(d, R.a.container)
					}, t && s && s.revision && a.a.createElement(p.a, {
						showTimeAgo: !0,
						className: R.a.revisionInfo,
						isLastRevision: !0,
						revision: s.revision
					}), a.a.createElement("div", {
						className: R.a.flexSpacer
					}), m && a.a.createElement(h.n, {
						className: R.a.button,
						to: `/r/${o}/about/wiki/settings/${r}`
					}, n.fbt._("Page settings", null, {
						hk: "2IAvWU"
					})), l && u && a.a.createElement(h.k, {
						className: R.a.button,
						to: Object(i.c)(x, {
							[b.a]: !0
						})
					}, n.fbt._("Edit", null, {
						hk: "1nftDt"
					})), l && a.a.createElement(S, {
						className: R.a.overflowMenu,
						dropdownId: `wikiPage-OverflowMenu-${r}-${t}`,
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: o,
						wikiPage: s,
						wikiPageName: r
					}))
				}
			}
			t.a = B(Object(m.c)(M))
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
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				r = s("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				a = s.n(r);

			function o(e) {
				const {
					buttonLink: t,
					buttonText: s,
					description: r,
					icon: o,
					onButtonClick: d,
					title: c
				} = e;
				let l = null;
				return s && t ? l = n.createElement(i.k, {
					className: a.a.button,
					onClick: e.onButtonClick,
					to: t
				}, s) : s && d && (l = n.createElement(i.i, {
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
				linkButton: "_28uXMdKULX2ygqCKM5Apfz",
				active: "_2DijTkAaakBaDtqxBeulFO"
			}
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				o = s("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				d = s.n(o);

			function c(e) {
				const {
					buttonLink: t,
					buttonText: s,
					className: n,
					title: o
				} = e;
				return i.a.createElement("div", {
					className: Object(r.a)(n, d.a.container)
				}, o, s && t && i.a.createElement(a.p, {
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
				return E
			})), s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/lodash/noop.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/timeAgo/index.ts"),
				u = s("./src/reddit/components/AuthorLink/index.tsx"),
				m = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/helpers/graphql/helpers.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				x = s.n(g);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = ["center", "top"], v = ["center", "bottom"], y = Object(o.a)(p.b), E = e => {
				const t = new Date(Object(b.d)(e.revisedAt));
				return Object(l.d)(t.valueOf() / 1e3)
			};
			class w extends a.a.Component {
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
					} = this.state, l = s.authorInfo && s.authorInfo.name || c.A, p = new Date(Object(b.d)(s.revisedAt)), g = a.a.createElement(m.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: i.a
					}, a.a.createElement(u.a, {
						className: x.a.authorLink,
						author: l,
						isAuthorDeleted: Object(h.m)(l),
						isUnstyled: !0
					}, l));
					return a.a.createElement("span", {
						className: Object(d.a)(e, x.a.container)
					}, t ? f._("Last revised by {username}", [f._param("username", g)], {
						hk: "jNOhx"
					}) : f._("Revised by {username}", [f._param("username", g)], {
						hk: "2Q35rs"
					}), r && a.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", E(s), a.a.createElement(y, {
						text: p.toString(),
						isOpen: o,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: k,
						tooltipPosition: v
					})), n && s.reason && a.a.createElement("span", null, " - ", s.reason))
				}
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
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(i.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.S,
				hideNSFWPref: b.B,
				isActive: p.j,
				moderatorPermissions: u.j,
				modModeEnabled: c.Q,
				showEditFlair: m.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				}) => e(Object(a.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: n
				})),
				handleVote: s => {
					const n = s === d.a.upvoted ? Object(r.U)(t) : Object(r.r)(t);
					e(n)
				},
				onIgnoreReports: () => e(Object(r.S)(t)),
				onOpenReportsDropdown: t => e(Object(o.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: n
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: n
				})
			}), {
				forwardRef: !0
			});
			t.a = h
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
			const m = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: a,
						"data-redditstyle": o,
						...d
					} = t, c = ((e, t, s) => {
						const n = !(!t && !s);
						let i = "";
						return i = e ? n ? l.a.mDisabledRedditStyle : l.a.mDisabled : n ? l.a.mActiveRedditStyle : l.a.mActive
					})(n, a, o);
					return i.a.createElement(e, u({
						className: Object(r.a)(l.a.CheckboxIcon, c, s)
					}, d))
				},
				p = m(d.a),
				b = m(o.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? b : e.isCheckboxSelected ? p : a.a;
				return i.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, i.a.createElement(t, {
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
				return x
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
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
			class x extends a.a.Component {
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
					}, e.displayText)) : a.a.createElement(u.a, g({}, t, {
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
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(o.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(x, g({
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
			const r = (e, t) => Object(n.a)(e, {
				...i,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/featureFlags/index.ts");

			function d(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, a = r;
					return n ? i.a.createElement(t, a) : void 0 !== s ? i.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				r = "|downsized";

			function a(e, t) {
				return i + e + (t ? r : "")
			}

			function o(e) {
				return e && 0 === e.indexOf(i)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(o)
			}

			function c(e) {
				let t = e.substring(i.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, s) => [...e, ...l(s, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, n.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === n.o).map(e => e.u)
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
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(i);
			const a = ({
					isLoading: e
				}) => Object(n.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
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
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return a
			})), s.d(t, "i", (function() {
				return o
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, s) => ({
					...i.defaults(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
					profile: i.profile(e),
					subreddit: i.subreddit(e),
					powerups: {
						...i.subredditPowerups(e),
						freeCount: t,
						paidCount: s
					}
				}),
				a = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...r(t),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				o = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...r(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				d = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...r(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...r(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				l = (e, t) => s => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...r(s, e, t)
				}),
				u = (e, t) => s => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...r(s, e, t)
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...r(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...r(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				b = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...r(t),
					powerups: {
						...i.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				h = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...r(t),
					powerups: {
						...i.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				g = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...r(t),
					powerups: {
						...i.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return k
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return _
			}));
			var n, i, r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/helpers/isComment.ts"),
				d = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(i || (i = {}));
			const p = e => ({
					...u.defaults(e),
					source: i.LINK,
					action: r.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				b = e => ({
					...u.defaults(e),
					source: i,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: c.f.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				h = (e, {
					renderingObjectInfo: t,
					pageLayer: s
				}) => {
					if (t && (Object(o.b)(t) || Object(d.b)(t))) return Object(o.b)(t) ? m.SourceElement.Comment : Object(a.w)(s) ? m.SourceElement.PostDetail : Object(a.E)(s) ? m.SourceElement.ListingPostDetail : void 0
				},
				g = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(d.b)(s) && !Object(o.b)(s)) return {
						outbound: void 0
					};
					const i = Object(d.b)(s) ? "postId" : "commentId",
						r = {
							url: `/r/${n}/`,
							sourceElement: h(0, t),
							subredditName: n,
							[i]: s.id
						},
						a = Object(l.A)(e, {
							subredditName: n
						});
					return a ? {
						outbound: {
							...r,
							url: a.url,
							subredditId: a.id
						}
					} : {
						outbound: {
							...r
						}
					}
				},
				x = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(d.b)(s) && !Object(o.b)(s)) return {};
					const n = Object(d.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, n),
						...g(e, t)
					}
				},
				f = e => t => ({
					...p(t),
					...x(t, e)
				}),
				k = e => t => ({
					...b(t),
					source: "global",
					action: r.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				v = (e, t) => s => ({
					...b(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				y = (e, t) => s => ({
					...b(s),
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				E = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				w = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				_ = e => t => ({
					...b(t),
					subreddit: u.subredditById(t, e) || null,
					source: i.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, i, r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {}));
			const o = (e, t) => s => ({
					source: i.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.widget)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.defaults
				}),
				d = (e, t) => s => ({
					source: i.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.post(s, e),
					subreddit: a.subreddit(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.defaults(s)
				}),
				c = () => e => ({
					source: i.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.defaults(e)
				}),
				l = e => t => ({
					source: i.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...a.defaults(t),
					topicMetadata: {
						displayName: e
					}
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
				return i()(e, e => `${e.path}/`.startsWith(`${r.i}/`) ? `\0${e.path}` : e.path).filter(e => !r.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					s = [];
				return a(e).forEach(e => {
					const n = {
							...e,
							children: []
						},
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
				return `[${n}]--[${i}]--[rev1:${s}]--[rev2:${t}]`.toLowerCase()
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
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/wiki.ts");
			const i = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${n.c}}$`),
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
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				d = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return i.a.createElement("i", {
					className: `${Object(a.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", d.a);
			t.a = c
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
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				d = s.n(o);
			t.a = e => {
				const t = Object(r.a)();
				return i.a.createElement("i", {
					className: `${Object(a.b)(t?"message":"envelope",e.isFilled)} ${d.a.Envelope} ${e.className}`
				})
			}
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
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => i.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", o.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), i.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, i.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, i.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
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
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = s.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, i.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), i.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
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
		"./src/reddit/icons/svgs/Upload/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 17",
				version: "1.1"
			}, i.a.createElement("path", {
				d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
				id: "a"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(o);
			t.a = Object(r.a)(e => i.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
			}, i.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), i.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), i.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function i(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
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
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/components/SubredditSidebar/index.tsx");
			var b = e => {
					const {
						subreddit: t,
						subredditName: s
					} = e, n = Object(m.a)(s, u.P.HOT, {});
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
				f = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/constants/wiki.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/wiki/wikiRevision.ts"),
				E = s("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				w = s("./src/reddit/components/JumpToContent/index.tsx"),
				_ = s("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				C = s("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				O = s("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				j = s.n(O);

			function N(e) {
				const {
					wikiPageName: t,
					subredditName: s
				} = e;
				return n.createElement(n.Fragment, null, n.createElement(w.a, null), n.createElement(C.a, {
					isModHub: !1,
					className: j.a.topBar,
					wikiPageName: t,
					subredditName: s
				}), n.createElement(_.a, {
					showRevisionInfo: !0,
					subredditName: s,
					wikiPageName: t
				}))
			}
			var P = s("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				T = s.n(P);
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
					} = s, o = n[f.A], d = n[f.B], c = f.C in n;
					switch (r) {
						case k.m.Create:
						case k.m.Edit:
							return i.a.createElement(g.a, {
								contentClassName: T.a.wikiPageEditorContent,
								isCreation: r === k.m.Create,
								subredditName: t,
								topBarClassName: T.a.communityWikiTopBar,
								wikiPageName: a
							});
						case k.m.Revisions:
							return i.a.createElement(E.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? i.a.createElement(h.a, {
								comparisonRevisionId: Object(y.a)(d),
								revisionId: Object(y.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? i.a.createElement(x.a, {
								revisionId: o ? Object(y.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? i.a.createElement(N, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var I = Object(v.t)()(S),
				R = s("./src/reddit/constants/componentSizes.ts"),
				L = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				B = s("./src/reddit/layout/page/Listing/index.tsx"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const D = Object(v.t)(),
				A = Object(r.b)(() => Object(a.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(W.e)(e, t.params.subredditName),
					layout: v.O,
					over18Pref: W.cb,
					subreddit: (e, {
						match: t
					}) => Object(M.A)(e, {
						subredditName: t.params.subredditName || k.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || k.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || k.i
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class F extends i.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: s,
						subredditName: n
					} = this.props, r = !!s && s.isNSFW && !W.cb, a = Object(L.a)(t, r, n);
					if (a) return i.a.createElement(c.default, a);
					const o = `/r/${n}/`;
					return i.a.createElement(B.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: R.i,
						navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: s ? s.name : n,
							maxWidth: R.i,
							subredditOrProfile: s,
							url: o
						}), i.a.createElement(d.a, {
							subreddit: s || void 0,
							subredditId: s ? s.id : void 0,
							subredditName: n,
							subredditUrl: o
						})),
						content: i.a.createElement(I, {
							subredditName: n
						}),
						sidebar: s && i.a.createElement(b, {
							subreddit: s,
							subredditName: n
						})
					})
				}
			}
			t.default = D(A(F))
		},
		"./src/reddit/selectors/experiments/downToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const a = e => n.qb.Enabled === Object(i.c)(e, {
				experimentEligibilitySelector: r.J,
				experimentName: n.pb
			})
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			const o = e => i.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o,
						experimentName: n.cd
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === n.jd.SmIcon || t === n.jd.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const s = Object(a.X)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
				}
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
				return u
			})), s.d(t, "n", (function() {
				return m
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
				return f
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "g", (function() {
				return E
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const r = [],
				a = (e, t) => {
					var s;
					const {
						subredditName: n
					} = t;
					if (null === (s = e.pages) || void 0 === s ? void 0 : s.subredditWiki) return e.pages.subredditWiki.directory[n.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.subreddits.api.wiki.pending[s.toLowerCase()]
				},
				d = (e, t) => {
					var s;
					const n = Object(i.a)(t);
					if (null === (s = e.pages) || void 0 === s ? void 0 : s.subredditWiki) return e.pages.subredditWiki.pages[n]
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
				p = (e, {
					key: t
				}) => e.pages.subredditWiki.diff[t],
				b = (e, t) => {
					const s = Object(i.a)(t);
					return e.pages.subredditWiki.pageSettings[s]
				},
				h = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[s.toLowerCase()]
				},
				g = Object(n.a)((e, {
					subredditName: t
				}) => {
					const s = t.toLowerCase(),
						n = e.pages.subredditWiki.wikiContributors.listing,
						i = n.userOrder[s],
						a = n.models[s];
					return i ? i.map(e => a[e]) : r
				}),
				x = (e, t) => {
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
				k = (e, t) => {
					const {
						subredditName: s
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[s.toLowerCase()]
				},
				v = Object(n.a)((e, {
					subredditName: t
				}) => {
					const s = t.toLowerCase(),
						n = e.pages.subredditWiki.wikiBannedContributors.listing,
						i = n.userOrder[s],
						a = n.models[s];
					return i ? i.map(e => a[e]) : r
				}),
				y = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[s.toLowerCase()]
				},
				E = (e, t) => {
					const {
						subredditName: s
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[s.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.2903eb83e012d1f194cd.js.map