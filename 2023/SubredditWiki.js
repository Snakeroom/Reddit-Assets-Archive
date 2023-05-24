// https://www.redditstatic.com/desktop2x/SubredditWiki.30f3ac8c60347c2fffb5.js
// Retrieved at 5/24/2023, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, i, r) {
				for (var a = -1, o = s(n((t - e) / (i || 1)), 0), d = Array(o); o--;) d[r ? o : ++a] = e, e += i;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRange.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, a) {
					return a && "number" != typeof a && i(t, n, a) && (n = a = void 0), t = r(t), void 0 === n ? (n = t, t = 0) : n = r(n), a = void 0 === a ? t < n ? 1 : -1 : r(a), s(t, n, a, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(o);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: a
					} = e;
				return i.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: s,
						[d.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				i = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const r = Object(i.e)(e),
					a = encodeURIComponent(`${t}${r}`);
				return `${s.a.accountManagerOrigin}${n||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "subredditWikiDataPending", (function() {
				return Ge
			})), n.d(t, "subredditWikiDataLoaded", (function() {
				return qe
			})), n.d(t, "subredditWikiDataFailed", (function() {
				return Ke
			})), n.d(t, "fetchSubredditWikiData", (function() {
				return Je
			})), n.d(t, "handleWikiRedirects", (function() {
				return Xe
			})), n.d(t, "subredditWikDataRequested", (function() {
				return Qe
			})), n.d(t, "subredditWikiPageRequested", (function() {
				return $e
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/lodash/isEmpty.js"),
				r = n.n(i),
				a = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/actions/platform.ts"),
				m = n("./src/reddit/helpers/path/index.ts");
			var p = n("./src/reddit/actions/ads/index.ts"),
				b = n("./src/reddit/actions/pages/subreddit/index.ts"),
				h = n("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				x = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				k = n("./src/lib/makeGqlRequest/index.ts"),
				v = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				C = n("./src/redditGQL/operations/WikiComparisonDiff.json");
			var y = n("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				E = n("./src/reddit/selectors/subredditWiki.ts");
			const _ = Object(d.a)("WIKI_DIFF_PENDING"),
				O = Object(d.a)("WIKI_DIFF_LOADED"),
				w = Object(d.a)("WIKI_DIFF_FAILED"),
				j = e => async (t, n, s) => {
					const i = n(),
						r = Object(y.a)(e),
						a = Object(E.i)(i, {
							key: r
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: r
					};
					t(_(d));
					const c = await ((e, t) => Object(k.a)(e, {
						...C,
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
							n = t && t.page && t.page.revisionComparisonDiffHtml;
						n ? u = n : l = {
							type: o.L.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.L.UNKNOWN_ERROR
					};
					return t(l ? w({
						...d,
						error: l
					}) : O({
						...d,
						htmlDiff: u
					})), !l
				};
			var N = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				S = n("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				I = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/constants/wiki.ts"),
				T = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				R = n("./src/reddit/helpers/brandSafety/index.ts"),
				L = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				D = n("./src/reddit/models/Toast/index.ts"),
				W = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				B = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				F = n("./src/lib/initializeClient/installReducer.ts"),
				A = n("./node_modules/redux/es/redux.js");
			const H = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: n,
							htmlDiff: s
						} = t.payload;
						return {
							...e,
							[n]: {
								htmlDiff: s
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								pending: !1,
								error: s
							}
						}
					}
					default:
						return e
				}
			};
			const V = {};
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b:
							const n = t.payload,
								{
									subredditWiki: s,
									options: i
								} = n,
								r = s && s.directory;
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
				q = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const K = {};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: n,
								pageKey: s
							} = t.payload, {
								page: i
							} = n;
							return s && i ? {
								...e,
								[s]: i
							} : e
						}
						case q.a: {
							const {
								pageKey: n,
								page: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Z = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const J = {};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z.c: {
							const {
								settings: n,
								pageKey: s
							} = t.payload;
							return n ? {
								...e,
								[s]: n
							} : e
						}
						case Z.d: {
							const {
								isVisible: n,
								editPermissions: s,
								pageKey: i
							} = t.payload, r = e[i];
							return r ? {
								...e,
								[i]: {
									...r,
									isVisible: n,
									editPermissions: s
								}
							} : e
						}
						case Z.b: {
							const {
								editorsInfo: n,
								afterToken: s,
								pageKey: i
							} = t.payload, r = e[i];
							if (!r) return e;
							const a = [...r.editorsInfo, ...n];
							return {
								...e,
								[i]: {
									...r,
									editorsInfo: a,
									afterToken: s
								}
							}
						}
						case Z.a: {
							const {
								username: n,
								pageKey: s
							} = t.payload, i = e[s];
							if (!i) return e;
							const r = i.editorsInfo.filter(e => e.username !== n);
							return {
								...e,
								[s]: {
									...i,
									editorsInfo: r
								}
							}
						}
						default:
							return e
					}
				},
				X = n("./src/lib/omitKey/index.ts");
			const Q = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.b: {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case q.d:
					case q.c: {
						const {
							key: n
						} = t.payload;
						return Object(X.a)(e, n)
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
						case q.d:
						case q.b:
						case q.c: {
							const {
								key: n
							} = t.payload, s = t.type === q.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				ne = Object(A.c)({
					error: $,
					pending: te
				}),
				se = n("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ie = {};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.c: {
						const {
							key: n,
							options: s,
							pageInfo: i,
							revisionsIds: r
						} = t.payload, a = e[n], o = s.after && a ? [...a.ids, ...r] : r;
						return {
							...e,
							[n]: {
								ids: o,
								pageInfo: i
							}
						}
					}
					case q.a: {
						const {
							page: {
								revision: n
							},
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: i
						} = t.payload, r = e[s];
						return r && n ? {
							...Object(X.a)(e, i),
							[s]: {
								...r,
								ids: [n.id, ...r.ids]
							}
						} : e
					}
					case se.a: {
						const {
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: s
						} = t.payload, i = {
							...e
						};
						return delete i[n], delete i[s], i
					}
					default:
						return e
				}
			};
			const ae = {};
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: {
									page: n
								}
							} = t.payload, s = n && n.revision;
							return s && !e[s.id] ? {
								...e,
								[s.id]: s
							} : e
						}
						case q.c: {
							const {
								revisions: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						case q.a: {
							const {
								page: n
							} = t.payload, s = n.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case q.e: {
							const {
								revisionId: n,
								isHidden: s
							} = t.payload, i = e[n];
							return i ? {
								...e,
								[n]: {
									...i,
									isHidden: s
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(A.c)({
					api: ne,
					listings: re,
					models: oe
				}),
				ce = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const le = {};
			var ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.c:
					case ce.a: {
						const {
							subredditName: n,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const me = {};
			var pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ce.b: {
						const {
							subredditName: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(X.a)(e, n)
					}
					default:
						return e
				}
			};
			const be = {};
			var he = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.d:
						case ce.c:
						case ce.b: {
							const {
								subredditName: n
							} = t.payload, s = t.type === ce.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				ge = Object(A.c)({
					error: pe,
					pending: he
				});
			const fe = {};
			var xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: n,
								bannedContributors: s
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...s
								}
							}
						}
						case ce.e: {
							const {
								subredditName: n,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...s
								}
							}
						}
						case ce.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload, i = Object(X.a)(e[n], s);
							return {
								...e,
								[n]: i
							}
						}
						default:
							return e
					}
				},
				ke = n("./node_modules/lodash/uniq.js"),
				ve = n.n(ke);
			const Ce = {};
			var ye = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ve()([...e[n] || [], ...s])
							}
						}
						case ce.e: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ve()([...s, ...e[n] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Ee = Object(A.c)({
					afterToken: ue,
					api: ge,
					models: xe,
					userOrder: ye
				});
			const _e = {};
			var Oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: n,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				we = Object(A.c)({
					listing: Ee,
					search: Oe
				}),
				je = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ne = {};
			var Se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const Ie = {};
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b: {
						const {
							subredditName: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case je.d:
					case je.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(X.a)(e, n)
					}
					default:
						return e
				}
			};
			const Te = {};
			var Re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.d:
						case je.c:
						case je.b: {
							const {
								subredditName: n
							} = t.payload, s = t.type === je.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Le = Object(A.c)({
					error: Pe,
					pending: Re
				});
			const De = {};
			var We = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							contributors: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...s
							}
						}
					}
					case je.e: {
						const {
							subredditName: n,
							contributor: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...s
							}
						}
					}
					case je.f: {
						const {
							subredditName: n,
							userId: s
						} = t.payload, i = Object(X.a)(e[n], s);
						return {
							...e,
							newState: i
						}
					}
					default:
						return e
				}
			};
			const Be = {};
			var Me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
						case je.a: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ve()([...e[n] || [], ...s])
							}
						}
						case je.e: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: [...s, ...e[n] || []]
							}
						}
						case je.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Fe = Object(A.c)({
					afterToken: Se,
					api: Le,
					models: We,
					userOrder: Me
				});
			const Ae = {};
			var He = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.g: {
							const {
								subredditName: n,
								contributor: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Ue = Object(A.c)({
					listing: Fe,
					search: He
				}),
				Ve = Object(A.c)({
					diff: U,
					directory: G,
					pages: z,
					pageSettings: Y,
					revisions: de,
					wikiBannedContributors: we,
					wikiContributors: Ue
				});
			Object(F.a)({
				pages: {
					subredditWiki: Ve
				}
			});
			const Ge = Object(d.a)(h.c),
				qe = Object(d.a)(h.b),
				Ke = Object(d.a)(h.a),
				ze = (e, t, n, s) => {
					return n === P.j ? Ze(e, t) : !!Object(E.c)(e, {
						subredditName: t,
						wikiPageName: n,
						revisionId: s
					})
				},
				Ze = (e, t) => !!Object(E.b)(e, {
					subredditName: t
				}),
				Je = e => async (t, n, i) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === P.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(L.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(Ge({
						options: l,
						pageKey: u
					}));
					const m = await Object(T.a)(i.gqlContext(), l),
						p = m.body,
						b = m.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return m.ok && b ? t(qe({
						options: l,
						pageKey: u,
						subredditWiki: b
					})) : (t(Ke({
						options: l,
						pageKey: u,
						error: m.error || {
							type: o.L.NOT_FOUND_ERROR
						}
					})), a && t(Object(g.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: D.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e)
					}))), !(!m.ok || !r()(p.data.subreddit)) || !(!m.ok || !b)
				}, Ye = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (n, s) => {
						const i = s(),
							r = {
								sort: o.cb.HOT
							},
							a = Object(c.a)(e, r.sort),
							d = i.listings.postOrder.api.error[a],
							l = i.listings.postOrder.api.pending[a],
							u = !!i.listings.postOrder.ids[a];
						return !!(l || u && !d) || (await n(Object(b.subredditDataRequested)(a, e, r, t)), !s().listings.postOrder.api.error[a])
					}
				}, Xe = e => async (t, n) => {
					const {
						params: s,
						url: i
					} = e, {
						wikiPageName: r
					} = s, o = Object(B.a)(i, s);
					let d = !1;
					return P.l.includes(r || "") ? (await (async (e, t) => {
						const n = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = n
					})(e.url), d = !0) : i !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Qe = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (i, r, a) => {
						const {
							subredditName: d = P.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[I.M], m = t[I.N], p = u ? Object(v.a)(u) : void 0, b = m ? Object(v.a)(m) : void 0, h = c === P.j, k = l === P.m.Revisions;
						let C = !1,
							y = !1;
						if (n) {
							const {
								pageName: t
							} = e;
							C = t === o.mc.WikiContributors, y = t === o.mc.WikiBanned
						}
						const E = r(),
							_ = (h || n) && !Ze(E, d),
							O = !!c && !ze(E, d, c, p),
							w = [];
						w.push(i(Ye(d))), (_ || O) && w.push(i(Je({
							includeDirectory: _,
							includePageData: O,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), l === P.m.Settings && c && w.push(i(Object(N.c)(d, c))), c && p && b && w.push(i(j({
							comparisonRevisionId: b,
							revisionId: p,
							subredditName: d,
							wikiPageName: c
						}))), k && w.push(i(Object(S.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), C && w.push(i(Object(x.e)(d))), y && w.push(i(Object(f.e)(d))), (await Promise.all(w)).every(Boolean) || i(Object(g.f)({
							kind: D.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: Qe(e, t, n)
						}))
					}
				}, $e = e => async (t, n) => {
					if (await t(Xe(e))) return;
					const {
						params: s,
						queryParams: i
					} = e, r = s.subredditName || P.e;
					t(u.n({
						title: s.wikiPageName ? `${s.wikiPageName} - ${r}` : `wiki - ${r}`
					})), await t(Qe(s, i));
					const a = Object(M.C)(n(), {
							subredditName: r
						}),
						o = n();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(W.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(R.a)([], [a])
					})))
				}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(i.a)(a.B),
				g = Object(i.a)(a.C),
				f = Object(i.a)(a.A),
				x = (e, t, n) => async (s, i, r) => {
					const a = Object(p.C)(i(), {
						subredditName: e
					});
					if (a) return v(a.id, t, n)(s, i, r)
				}, k = () => s.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, n) => async (i, a, p) => {
					const x = await Object(l.e)(t);
					i(h());
					const v = a();
					try {
						await Object(r.g)("communityIcon", x, e)(i, a, p)
					} catch (y) {
						return Object(b.a)(Object(c.c)(v, "something went wrong with the uploading the image")), i(Object(o.f)({
							kind: u.b.Error,
							text: k()
						})), void i(f())
					}
					const C = Object(m.c)(a(), {
						name: "communityIcon"
					});
					if (!C) return Object(b.a)(Object(c.c)(v, "image is null")), i(Object(o.f)({
						kind: u.b.Error,
						text: k()
					})), void i(f());
					await Object(r.k)(e, {
						communityIcon: C
					}, d.b.idCard, n)(i, a, p), i(Object(o.f)({
						kind: u.b.SuccessCommunity,
						text: s.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), i(g())
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				i = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				r = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return k
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/SubredditWikiBannedContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, i = [], r = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n,
							editWikiBanInfo: s
						} = e.node;
						n.id && n.name && n.icon && (r[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t,
							daysRemaining: s.daysRemaining,
							note: s.note
						}, i.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						bannedContributors: r,
						userOrder: i
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(r.a)(h.d),
				f = Object(r.a)(h.c),
				x = Object(r.a)(h.b),
				k = e => async (t, n, s) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await m(s.gqlContext(), r);
					if (a.ok) {
						const n = a.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(f({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = a.error || {
							type: i.L.UNKNOWN_ERROR
						};
						t(x({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, v = Object(r.a)(h.a), C = (e, t) => async (n, i, r) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					}));
					return d.ok
				}, y = Object(r.a)(h.e), E = (e, t) => async (n, r, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: i.pb.POST,
						data: {
							api_type: "json",
							name: n.username,
							type: "wikibanned",
							duration: n.duration,
							ban_reason: n.banReason,
							note: n.note
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						n(Object(a.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("Successfully banned user", null, {
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
							n(y({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === i.L.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), n(Object(a.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, _ = Object(r.a)(h.f), O = (e, t) => async (n, r, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: i.pb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (n(Object(a.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), n(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), u.ok
				}, w = Object(r.a)(h.g), j = (e, t) => async (n, i, r) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								i = Object.keys(s.bannedContributors)[0];
							n(w({
								subredditName: e.toLowerCase(),
								bannedContributor: s.bannedContributors[i]
							}))
						}
					} else n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_CONTRIBUTORS_PENDING",
				i = "WIKI_CONTRIBUTORS_LOADED",
				r = "WIKI_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return k
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/SubredditWikiContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var p = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, i = [], r = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n
						} = e.node;
						n.id && n.name && n.icon && (r[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t
						}, i.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						contributors: r,
						userOrder: i
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(r.a)(h.d),
				f = Object(r.a)(h.c),
				x = Object(r.a)(h.b),
				k = e => async (t, n, s) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await m(s.gqlContext(), r);
					if (a.ok) {
						const n = a.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(f({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = a.error || {
							type: i.L.UNKNOWN_ERROR
						};
						t(x({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, v = Object(r.a)(h.a), C = (e, t) => async (n, i, r) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					}));
					return d.ok
				}, y = Object(r.a)(h.e), E = (e, t) => async (n, r, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: i.pb.POST,
						data: {
							api_type: "json",
							name: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						n(Object(a.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("User has been successfully added", null, {
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
								s = Object.keys(t.contributors)[0];
							!!r().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || n(y({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === i.L.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === i.L.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), n(Object(a.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, _ = Object(r.a)(h.f), O = (e, t) => async (n, r, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: i.pb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (n(Object(a.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), n(_({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), u.ok
				}, w = Object(r.a)(h.g), j = (e, t) => async (n, i, r) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								i = Object.keys(s.contributors)[0];
							n(w({
								subredditName: e.toLowerCase(),
								contributor: s.contributors[i]
							}))
						}
					} else n(Object(a.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				i = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				r = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				a = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return y
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "d", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/subredditSettings.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = n("./src/redditGQL/operations/SubredditWikiPageSettings.json");
			const b = (e, t) => Object(c.a)(e, {
					...p,
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
						editorsInfo: n,
						isVisible: s
					} = e, {
						edges: i,
						pageInfo: r
					} = n, a = [];
					return i.forEach(e => {
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
				f = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const C = Object(r.a)(v.c),
				y = (e, t) => async (n, s, i) => {
					const r = {
							subredditName: e,
							wikiPageName: t
						},
						o = await b(i.gqlContext(), r),
						d = Object(k.I)(s(), e);
					if (Object(k.Z)(s(), d) || await n(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							n(C({
								pageKey: Object(f.a)(r),
								settings: e
							}))
						}
					}
					return o.ok
				}, E = Object(r.a)(v.b), _ = (e, t, n) => async (i, r, a) => {
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
									editorsInfo: r,
									afterToken: a
								} = n;
							i(E({
								editorsInfo: r,
								afterToken: a,
								pageKey: Object(f.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else i(Object(o.f)({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e, t, n)
					}));
					return c.ok
				}, O = Object(r.a)(v.d), w = e => {
					let {
						editPermissions: t,
						isVisible: n,
						wikiPageName: s,
						subredditName: r
					} = e;
					return async (e, a, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
							method: i.pb.POST,
							data: {
								permlevel: h[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: o.apiContext(),
							editPermissions: t,
							isVisible: n,
							wikiPageName: s,
							subredditName: r
						});
						return c.ok && e(O({
							editPermissions: t,
							isVisible: n,
							pageKey: Object(f.a)({
								wikiPageName: s,
								subredditName: r
							})
						})), c.ok
					}
				}, j = e => {
					let {
						subredditName: t,
						username: n,
						wikiPageName: r
					} = e;
					return async (e, a, c) => {
						const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
							method: i.pb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: c.apiContext(),
							wikiPageName: r,
							subredditName: t,
							username: n
						});
						if (m.ok) e(Object(o.f)({
							kind: x.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(y(t, r));
						else if (m.error) {
							const t = m.error.type;
							let n = s.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === i.L.NOT_FOUND_ERROR && (n = s.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(o.f)({
								kind: x.b.Error,
								text: n
							}))
						}
						return m.ok
					}
				}, N = Object(r.a)(v.a), S = e => {
					let {
						subredditName: t,
						username: n,
						wikiPageName: s
					} = e;
					return async (e, r, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
							method: i.pb.POST,
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
						return c.ok && (e(Object(o.f)({
							kind: x.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(N({
							username: n,
							pageKey: Object(f.a)({
								wikiPageName: s,
								subredditName: t
							})
						}))), c.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			}));
			const s = "WIKI_REVISIONS_PENDING",
				i = "WIKI_REVISIONS_LOADED",
				r = "WIKI_REVISIONS_FAILED",
				a = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/WikiRevisions.json");
			var l = n("./src/lib/makeApiRequest/index.ts"),
				u = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts"),
				p = n("./src/reddit/helpers/wiki/wikiRevision.ts");
			var b = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: i.pb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: i.pb.POST,
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
				f = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				x = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/subredditWiki.ts"),
				C = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const y = Object(r.a)(C.d),
				E = Object(r.a)(C.c),
				_ = Object(r.a)(C.b),
				O = e => async (t, n, r) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: p
					} = e, b = n(), h = Object(f.a)(e), x = Object(v.p)(b, {
						listingKey: h
					});
					if (!o && !!x) return !0;
					const C = x && x.pageInfo.endCursor || void 0;
					if (!(!x || x.pageInfo.hasNextPage)) return !0;
					const w = {
							after: C,
							isRecent: u,
							subredditName: m,
							wikiPageName: p
						},
						j = {
							key: h,
							options: w
						};
					t(y(j));
					const N = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(r.gqlContext(), w);
					if (N.ok) {
						const e = N.body;
						if (e.data.subreddit) {
							const n = g(e.data);
							t(E({
								...j,
								...n
							}))
						}
					} else {
						const n = N.error || {
							type: i.L.UNKNOWN_ERROR
						};
						t(_({
							...j,
							error: n
						})), l && t(Object(a.f)({
							kind: k.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: O(e)
						}))
					}
					return N.ok
				}, w = Object(r.a)(C.a), j = e => async (t, n, i) => {
					const {
						subredditName: r,
						wikiPageName: d
					} = e, c = Object(x.a)({
						...e,
						revisionId: void 0
					}), l = Object(f.a)({
						...e,
						isRecent: !1
					}), u = Object(f.a)({
						...e,
						isRecent: !0
					}), m = Object(v.p)(n(), {
						listingKey: l
					}), p = m && m.ids[0];
					if ((await h(i.apiContext(), e)).ok) {
						const e = (await Object(o.a)(i.gqlContext(), {
								includePageData: !0,
								subredditName: r,
								wikiPageName: d
							})).body,
							n = e.data.subreddit && e.data.subreddit.wiki,
							m = n && n.page;
						if (!m || !m.revision) return;
						if (m.revision.id === p) return void t(Object(a.f)({
							kind: k.b.SuccessCommunityGreen,
							text: s.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(w({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: r,
							wikiPageName: d
						}))
					} else t(Object(a.f)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}, N = Object(r.a)(C.e), S = e => async (t, n, i) => {
					const r = await b(i.apiContext(), e);
					if (r.ok) {
						const n = r.body.status;
						t(N({
							revisionId: e.revisionId,
							isHidden: n
						}))
					} else t(Object(a.f)({
						kind: k.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, n) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/config.ts"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/hooks/useClickSourceData.ts"),
				u = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				m = n("./src/reddit/components/AuthorLink/index.m.less"),
				p = n.n(m);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, n;
				const s = Object(a.a)(e.className, p.a.authorLinkStyles, {
						[p.a.isStrong]: e.isStrong,
						[p.a.isUnstyled]: e.isUnstyled
					}),
					m = Object(l.a)(),
					h = Object(r.d)(),
					g = Object(r.e)(u.b),
					f = Object(r.e)(u.c),
					x = t => {
						var n;
						if (null === (n = e.onClick) || void 0 === n || n.call(e, t), g || f) {
							const n = e.isExternal || e.forceOpenInNewTab ? `${o.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), h(Object(d.bb)(n))
						}
					};
				return e.isExternal || e.forceOpenInNewTab ? i.a.createElement("a", b({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: s,
					href: `${o.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: x
				}), e.children) : e.isAuthorDeleted ? i.a.createElement("span", {
					className: Object(a.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : i.a.createElement(c.default, b({}, null !== (n = e.linkProps) && void 0 !== n ? n : {}, {
					className: s,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: m
					},
					onClick: x
				}), e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/elementIds.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/selectors/experiments/shredditParity.ts"),
				l = n("./src/reddit/components/BackToTop/index.m.less"),
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
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(o.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: s
				} = e;
				const o = Object(r.e)(c.a);
				return i.a.createElement("div", {
					className: Object(a.a)(t, u.a.container),
					style: s
				}, i.a.createElement(d.a, m({
					className: u.a.button,
					onClick: () => b(n)
				}, o && {
					priority: d.c.Secondary,
					rplStyle: !0
				}), p._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/About/index.m.less": function(e, t, n) {
			e.exports = {
				container: "N_iDpRmG9YYThFDrZyJAv",
				aboutHeader: "_2T1tO-zWzgtKTFfmut2w7_",
				infoIcon: "_1FfqSg_dkea9uZhjR2NZff",
				expandButton: "_3756Fx6x6guD5iUTIFyKLQ",
				headerText: "heKUEgv15QcZEOOBQLcdQ",
				content: "_24emvNxFCdF1xT1nE07Z22",
				collapsed: "_3WvNFS-a1EomDcvRVPdxaL"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/ChannelsList/index.m.less": function(e, t, n) {
			e.exports = {
				more: "yEXxZgb5MQg4NSGZ0WMgB",
				moreText: "PwTl0c0TTn3dtqLgSGHH2",
				chevronIcon: "LZZ_vW1DYdahLhiRHXerj"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "w5boqI7CP61oplJYuKFgy",
				greyBackground: "_3JZ1jE9fZedmnOqszIX6Uq",
				name: "_1g82YJfPfX99XdDk4RCVvF",
				bold: "_3PEjo4_qw1yF6OAY528CNz",
				light: "_3oOf0AMbtBG-11JXinK6HH",
				notificationIndicator: "_3KPn156kySmig6QuGEl8D8",
				chatBubblesIcon: "_38m5ZUgLSYat8ghDOUzI5D",
				postsIcon: "_1a3DK4OMX0U6aSijf05RjW"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/ListItem/placeholder.m.less": function(e, t, n) {
			e.exports = {
				container: "_2ntycIUtqloepWz_WOkB1-",
				icon: "_15LJ5K95RpfroqVCo6h6Jz",
				content: "O8WqhKsM6uqZ1ti4jzftf",
				shimmer: "xqDuRbD54bfTiYuytbqHC",
				gradientAnimation: "_31lalrJCmaEJyJOrrOnELR"
			}
		},
		"./src/reddit/components/CommunityChat/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_1g18x6QdNGxinN6_cuc2_1"
			}
		},
		"./src/reddit/components/CommunityChat/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.NEVER_VISITED = "NEVER_VISITED", e.VISITED__NO_NEW_ACTIVITY = "VISITED__NO_NEW_ACTIVITY", e.VISITED__HAS_NEW_ACTIVITY = "VISITED__HAS_NEW_ACTIVITY"
				}(s || (s = {}));
			const i = "matrix-client-container"
		},
		"./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/matrix-js-sdk/lib/browser-index.js"),
				i = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/selectors/user.ts");
			const c = Object(r.createContext)(null),
				l = e => {
					let {
						children: t
					} = e;
					const n = Object(o.e)(d.a),
						[l, u] = Object(r.useState)(null);
					return Object(r.useEffect)(() => {
						let e = !0;
						const t = i.a.createClient({
							baseUrl: "https://matrix.redditspace.com",
							timelineSupport: !0,
							useAuthorizationHeader: !0
						});
						return (async () => {
							await t.login("com.reddit.token", {
								token: n
							}), await t.startClient({
								initialSyncLimit: 10,
								pollTimeout: 3e4
							}), t.once(s.ClientEvent.Sync, async n => {
								"PREPARED" === n && e && u(t)
							})
						})(), () => {
							e = !1, t.stopClient(), u(null)
						}
					}, [n]), a.a.createElement(c.Provider, {
						value: l
					}, t)
				},
				u = () => Object(r.useContext)(c)
		},
		"./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less": function(e, t, n) {
			e.exports = {
				muteButton: "E6ihBvDYBbdvjzCcN_LZE",
				muteIcon: "_1Sx3lrWefgX2BpcEoC6zMv",
				muteDefault: "_3pc_K2D7OtCZ3HzDnRlOJv",
				muteHover: "_1CwsmOiXqCke04fKLHhV-a"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less": function(e, t, n) {
			e.exports = {
				notificationButton: "_3lH4vtstXYL3BXfT_hrmNu",
				notificationDropdown: "_3RIXPgg0td0Ikm3OCair-W",
				notificationRow: "nbdugyDJvnPyib81V0bre",
				isSelected: "_1yo5m2yCZUVzNB40ZytJzk",
				notificationIcon: "qIoApQle9dXP6HkO35IOx",
				notificationPopup: "J-YgwKJ71m7H4bkbzeN5G",
				title: "_3oHXlwUZwpR5SS-8P9tILX",
				subredditWrapper: "_3V00i2DgErfrsJUA2i5OVw",
				subredditTitle: "_8eiyc5qzybrCg1tKBvgsm",
				icon: "_28KZtJenmDKbbe4nGYKwSQ",
				SubredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				subredditIcon: "_4DdaSgJh_sBn7t3LGtJCG",
				DefaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				defaultIcon: "_3m2_I6hmPorjqHjbfwJQZv",
				subscribeButton: "_2R2t7BzhdzT5QExBlp5Di0",
				hideButton: "_3lnzUjXBFhqkpfm2GDP6i",
				popupTooltip: "_2h6EM3mo5Qn9Eqm18v5Hiz"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/UserCount/index.m.less": function(e, t, n) {
			e.exports = {
				userCountContainer: "_2RrnVtJvy93R_5EsAOLOlj",
				currentlyViewingCount: "_1-ha6lk0s1V4mXK-GXIY_P",
				separator: "_3pTilZhQ0eLPU1K9h-DUg5",
				subscriberCount: "_3Ou6utr-V6t9WH76zWxf5J"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "MSTY2ZpsdupobywLEfx9u",
				stickyWrapper: "VJkPo4gom3XvkL4X-w0JS",
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				DefaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				defaultIcon: "_30bZQzX8IR92H3gw3vlaLF",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX",
				isSticking: "ZGQod_mafxz0rQZ6X1osG",
				buttonWrapper: "_2I_YJCANrzkY2DZkeu2nht",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				SubredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				subredditIconImg: "u0UgpXN5r-VO6PP9OAViq",
				blur: "_38oiFpMv7UiE7wnlYWtYvR",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				startChattingButtonContainer: "gamImsFjuVPnHzfq-JdwT",
				notificationButtonContainer: "_1cAYKT6f3GM-_aZei--pxM",
				intersectionWrapper: "_3EWe8WOn2CDJW5khbbnAIX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/actions/subreddit/muting.ts"),
				m = n("./src/reddit/actions/subreddit/notifications.ts"),
				p = n("./src/lib/combineRefs/index.tsx"),
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				h = n("./src/lib/hooks/useTooltip.ts"),
				g = n("./src/reddit/components/CommonTooltip/index.m.less"),
				f = n.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var k = i.a.memo((function(e) {
					let {
						visible: t,
						tooltipId: n,
						className: r,
						arrowClassName: a,
						...d
					} = e;
					const [c, l] = Object(s.useState)(t);
					return Object(s.useEffect)(() => {
						let e = window.setTimeout(() => {
							e = void 0, l(t)
						}, 0);
						return () => {
							e && window.clearTimeout(e), l(!1)
						}
					}, [t]), t ? i.a.createElement("div", x({
						id: n,
						className: Object(o.a)(f.a.tooltip, r, {
							[f.a.visible]: c
						})
					}, d.popperProps), c && i.a.createElement(i.a.Fragment, null, d.arrowProps && i.a.createElement("div", x({
						className: Object(o.a)(f.a.arrow, a)
					}, d.arrowProps)), d.children)) : null
				})),
				v = n("./src/reddit/models/Subreddit/index.ts");
			const C = e => {
					switch (e) {
						case v.c.FREQUENT:
							return "notification_frequent";
						case v.c.OFF:
							return "notification_off";
						case v.c.LOW:
						default:
							return "notification"
					}
				},
				y = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				E = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 12]
						}
					}]
				};
			var _ = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				N = n("./src/reddit/components/CommunityIdTopBar/Notifications/index.m.less"),
				S = n.n(N);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var P = e => {
					return i.a.createElement(O.a, {
						id: e.dropdownId,
						className: S.a.notificationDropdown
					}, [{
						displayText: _.fbt._("Frequent", null, {
							hk: "21spt7"
						}),
						onClick: () => e.onClick(v.c.FREQUENT),
						isSelected: e.notificationLevel === v.c.FREQUENT,
						icon: i.a.createElement(j.a, {
							name: "notification_frequent",
							isFilled: e.notificationLevel === v.c.FREQUENT
						})
					}, {
						displayText: _.fbt._("Low", null, {
							hk: "2uGDVq"
						}),
						onClick: () => e.onClick(v.c.LOW),
						isSelected: e.notificationLevel === v.c.LOW,
						icon: i.a.createElement(j.a, {
							name: "notification",
							isFilled: e.notificationLevel === v.c.LOW
						})
					}, {
						displayText: _.fbt._("Off", null, {
							hk: "4GiFvg"
						}),
						onClick: () => e.onClick(v.c.OFF),
						isSelected: e.notificationLevel === v.c.OFF,
						icon: i.a.createElement(j.a, {
							name: "notification_off",
							isFilled: e.notificationLevel === v.c.OFF
						})
					}].map(e => i.a.createElement(w.b, I({
						className: Object(o.a)(S.a.notificationDropdown, S.a.notificationRow, {
							[S.a.isSelected]: e.isSelected
						}),
						key: e.displayText,
						noHover: e.isSelected
					}, e), e.icon)))
				},
				T = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/selectors/telemetry.ts");
			const L = e => t => ({
				...R.o(t),
				source: "community",
				action: "set_frequency",
				noun: e,
				subreddit: R.lb(t)
			});
			var D = n("./src/reddit/hooks/useTracking.ts"),
				W = n("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const B = c.a.img("SubredditIcon", S.a),
				M = c.a.wrapped(W.a, "DefaultIcon", S.a);
			var F = e => {
					let {
						subredditName: t,
						shouldShowSubredditIcon: n,
						subredditIcon: s,
						onHide: r,
						onUpdate: a
					} = e;
					const o = Object(D.a)(),
						d = n ? i.a.createElement(B, {
							src: s || void 0
						}) : i.a.createElement(M, null),
						c = `r/${t}`;
					return i.a.createElement("div", {
						className: S.a.notificationPopup
					}, i.a.createElement("div", {
						className: S.a.title
					}, i.a.createElement("h2", null, _.fbt._("Get the best of", null, {
						hk: "3uDkLo"
					})), i.a.createElement("h3", null, _.fbt._("{subreddit name}", [_.fbt._param("subreddit name", c)], {
						hk: "1es0XP"
					}))), i.a.createElement("div", {
						className: S.a.subredditWrapper
					}, i.a.createElement("div", {
						className: S.a.subredditTitle
					}, d, i.a.createElement("span", null, c), i.a.createElement(j.a, {
						name: "notification_frequent",
						className: S.a.notificationIcon,
						isFilled: !0
					})), i.a.createElement(T.t, {
						className: S.a.subscribeButton,
						priority: T.c.Primary,
						size: T.d.M,
						text: _.fbt._("Get updates", null, {
							hk: "3Ntvs6"
						}),
						onClick: () => {
							r(), a(v.c.FREQUENT), o(L(v.c.FREQUENT.toLowerCase()))
						}
					})), i.a.createElement("button", {
						className: S.a.hideButton,
						onClick: r
					}, _.fbt._("Not now", null, {
						hk: "3bTewe"
					})))
				},
				A = n("./src/reddit/helpers/localStorage/index.ts");
			var H = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			var U = e => {
					const t = Object(r.d)(),
						n = Object(D.a)(),
						a = Object(h.b)(y),
						o = Object(h.b)(E),
						[d, c] = function(e, t) {
							const [n, i] = Object(s.useState)(Object(A.V)(e, t));
							return [n, Object(s.useCallback)(() => {
								const n = Object(A.a)(e, t);
								i(n)
							}, [e, t, i])]
						}(e.userId, e.subredditId),
						l = Object(r.e)(e => !!Object(H.a)(e));
					Object(s.useEffect)(() => {
						e.notificationLevel !== v.c.LOW && e.notificationLevel !== v.c.OFF || c()
					}, [e.subredditId]);
					const u = 2 === d,
						g = () => {
							a.hide()
						},
						f = () => {
							o.hide()
						};
					Object(s.useEffect)(() => (u && (o.update && o.update(), o.show()), () => {
						f(), g()
					}), [e.subredditName, u]);
					const x = () => {
							f(), a.show()
						},
						_ = (e => `dropdown-${e}`)(e.subredditName),
						O = (e => `popup-${e}`)(e.subredditName);
					Object(b.a)(_, g);
					const w = Object(s.useCallback)(e => {
							e.stopPropagation(), a.visible ? g() : x()
						}, [g, x, a.visible]),
						N = Object(s.useCallback)(t => {
							t === v.c.FREQUENT && Object(A.fb)(e.userId, e.subredditId)
						}, [e.subredditId, e.userId]),
						I = Object(s.useCallback)(s => {
							const {
								subredditId: i
							} = e;
							g(), f(), t(Object(m.d)({
								subredditId: i,
								notificationLevel: s,
								successCallback: () => N(s)
							})), n(L(s.toLowerCase()))
						}, [g, e.subredditId, t, n]);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
						type: "button",
						className: S.a.notificationButton,
						ref: Object(p.a)(a.target.ref, o.target.ref),
						onClick: w,
						"data-testid": "subredditNotificationButton"
					}, i.a.createElement(j.a, {
						name: C(e.notificationLevel),
						className: S.a.notificationIcon,
						isFilled: !0
					})), i.a.createElement(k, {
						popperProps: a.popperProps,
						visible: a.visible,
						tooltipId: _
					}, i.a.createElement(P, {
						dropdownId: _,
						notificationLevel: e.notificationLevel,
						onClick: I
					})), u && !l && i.a.createElement(k, {
						arrowProps: o.arrowProps,
						popperProps: o.popperProps,
						visible: o.visible,
						tooltipId: O,
						className: S.a.popupTooltip
					}, i.a.createElement(F, {
						subredditName: e.subredditName,
						subredditIcon: e.subredditIcon,
						shouldShowSubredditIcon: e.shouldShowSubredditIcon,
						onHide: f,
						onUpdate: I
					})))
				},
				V = n("./src/lib/prettyPrintNumber/index.ts"),
				G = n("./src/reddit/selectors/widgets.ts"),
				q = n("./src/reddit/components/CommunityIdTopBar/UserCount/index.m.less"),
				K = n.n(q);
			const z = _.fbt._("members", null, {
					hk: "28o6N2"
				}),
				Z = _.fbt._("online", null, {
					hk: "3UJwb6"
				}),
				J = (e, t) => void 0 !== e && t ? `${Object(V.b)(e)} ${t}` : "";
			var Y = e => {
					let {
						subredditId: t
					} = e;
					const n = Object(r.e)(e => Object(G.d)(e, {
							subredditId: t
						})),
						{
							currentlyViewingCount: a,
							currentlyViewingText: o,
							subscribersCount: d,
							subscribersText: c
						} = n || {},
						l = Object(s.useMemo)(() => J(a, o || Z), [a, o]),
						u = Object(s.useMemo)(() => J(d, c || z), [d, c]);
					return l || u ? i.a.createElement("div", {
						className: K.a.userCountContainer
					}, i.a.createElement("span", {
						className: K.a.currentlyViewingCount
					}, u), i.a.createElement("span", {
						className: K.a.separator
					}, u && l && "•"), i.a.createElement("span", {
						className: K.a.subscriberCount
					}, l)) : null
				},
				X = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				Q = n("./src/reddit/components/SubredditNav/index.tsx"),
				$ = n("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = n("./src/reddit/constants/componentSizes.ts"),
				te = n("./src/reddit/constants/postLayout.ts"),
				ne = n("./src/reddit/constants/posts.ts"),
				se = n("./src/reddit/featureFlags/index.ts"),
				ie = n("./src/reddit/helpers/getSubredditIcon/index.ts"),
				re = n("./src/reddit/constants/tracking.ts");
			var ae = n("./src/reddit/helpers/trackers/subredditMuting.ts"),
				oe = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				de = n("./src/reddit/hooks/useWindowEvent.ts"),
				ce = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				le = n("./src/reddit/selectors/experiments/communityChat.ts"),
				ue = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				me = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				pe = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				be = n("./src/reddit/selectors/subreddit.ts"),
				he = n("./src/reddit/selectors/user.ts"),
				ge = n("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				fe = n.n(ge),
				xe = n("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				ke = n("./src/reddit/components/CommunityIdTopBar/MuteButton/index.m.less"),
				ve = n.n(ke);
			const {
				fbt: Ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ye = e => {
				let {
					onClickUnmute: t
				} = e;
				return i.a.createElement(T.t, {
					priority: T.c.Plain,
					className: ve.a.muteButton,
					onClick: t
				}, i.a.createElement(xe.a, {
					className: ve.a.muteIcon
				}), i.a.createElement("span", {
					className: ve.a.muteDefault
				}, Ce._("Muted", null, {
					hk: "incHh"
				})), i.a.createElement("span", {
					className: ve.a.muteHover
				}, Ce._("Unmute", null, {
					hk: "4qbgbm"
				})))
			}, Ee = c.a.img("SubredditIcon", fe.a), _e = Object(a.c)({
				isNsfwBlurSubreddit: me.e,
				notificationLevel: be.L,
				isMuted: be.K,
				spPollsEnabled: se.d.spPolls,
				subredditInlineEditingEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(pe.a)(e, {
						subredditId: n
					})
				},
				tournamentsEnabled: (e, t) => {
					let {
						subredditId: n
					} = t;
					return !!n && Object(be.S)(e, {
						subredditId: n
					})
				},
				userId: he.k,
				userIsSubscriber: (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = n;
					return Object(be.jb)(e, {
						identifier: {
							name: s,
							type: "subreddit"
						}
					})
				},
				isCommunityMutingEnabled: ce.a,
				widget: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(G.f)(e, {
						subredditId: n
					}) : void 0
				},
				showCommunityChat: le.d
			}), Oe = {
				threshold: [.5, .001],
				rootMargin: `${1-ee.f}px 0px 0px 0px`
			};
			t.a = Object(r.b)(_e, (e, t) => ({
				_updateSubredditInfo: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id);
					if (s) return e(Object(m.c)({
						subredditAboutInfo: {
							[s]: {
								notificationLevel: v.c.LOW
							}
						}
					}))
				},
				unmuteSubreddit: () => {
					var n;
					const s = t.subredditId || (null === (n = t.subreddit) || void 0 === n ? void 0 : n.id),
						i = t.subreddit ? t.subreddit.name : t.subredditName;
					if (s) return e(Object(u.e)({
						subredditId: s,
						subredditName: i
					}))
				}
			}), (e, t, n) => ({
				...e,
				...t,
				...n,
				updateSubredditInfo: () => e.userIsSubscriber && t._updateSubredditInfo()
			}))(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					n = e.subreddit ? e.subreddit.name : e.subredditName,
					a = e.subreddit ? e.subreddit.url : e.subredditUrl,
					d = e.subreddit ? e.subreddit.title : "",
					c = Object(r.e)(ue.b),
					u = Object(r.e)(ue.a),
					m = c || u,
					[p, b] = Object(s.useState)(!1),
					h = Object(s.useRef)(null),
					[g, f] = Object(s.useState)(),
					[x, k] = Object(s.useState)(null),
					v = Object(D.a)(),
					C = Object(s.useCallback)((e => t => {
						t.forEach(t => {
							const {
								intersectionRatio: n
							} = t;
							n >= .5 ? e(!1) : n <= .001 && e(!0)
						})
					})(b), []);
				Object(de.a)("resize", ((e, t, n) => () => {
					var s;
					e(t && n ? null === (s = t.getBoundingClientRect()) || void 0 === s ? void 0 : s.height : void 0)
				})(f, x, m)), Object(oe.a)(h, C, Oe);
				const y = e.subreddit && Object(ie.a)(e),
					E = !!(e.theme && Object(l.a)(e).banner.showCommunityIcon && y),
					_ = n.charAt(0).toUpperCase() + n.slice(1),
					O = !!e.subreddit && e.subredditInlineEditingEnabled,
					w = Object(o.a)(fe.a.SubredditIcon, fe.a.editableIcon, {
						[fe.a.emptyEditableIcon]: !y
					}),
					j = E ? i.a.createElement(X.a, {
						className: w,
						subreddit: e.subreddit,
						iconUrl: y || void 0,
						inTopBar: !0
					}) : i.a.createElement(W.a, {
						className: fe.a.DefaultIcon
					}),
					N = E ? i.a.createElement(Ee, {
						className: Object(o.a)(fe.a.SubredditIconImg, {
							[fe.a.blur]: e.isNsfwBlurSubreddit
						}),
						src: y || void 0
					}) : i.a.createElement(W.a, {
						className: Object(o.a)(fe.a.DefaultIcon, {
							[fe.a.blur]: e.isNsfwBlurSubreddit
						})
					}),
					S = e.spPollsEnabled || e.tournamentsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0),
					I = e.layout ? e.layout === te.g.Large ? "984px" : "100%" : "1086px",
					P = e.isCommunityMutingEnabled && e.isMuted;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					style: {
						height: p ? void 0 : g
					},
					className: Object(o.a)(fe.a.wrapper, {
						[fe.a.stickyWrapper]: m,
						[fe.a.isSticking]: p
					})
				}, i.a.createElement("div", {
					className: fe.a.container,
					style: {
						maxWidth: I
					},
					ref: m ? k : void 0
				}, i.a.createElement("div", {
					className: fe.a.subredditMetaContainer
				}, O ? j : N, i.a.createElement("div", {
					className: Object(o.a)(fe.a.textContainer, {
						[fe.a.textContainerNoIcon]: !E
					})
				}, i.a.createElement("div", {
					className: Object(o.a)(fe.a.text, {
						[fe.a.blur]: e.isNsfwBlurSubreddit
					})
				}, i.a.createElement("h1", {
					className: fe.a.title
				}, d || _), !!d && i.a.createElement("h2", {
					className: fe.a.description
				}, "r/", n), e.showCommunityChat && !!t && i.a.createElement(Y, {
					subredditId: t
				})), i.a.createElement("div", {
					className: fe.a.buttonWrapper
				}, i.a.createElement("div", {
					className: fe.a.subscribeButtonContainer
				}, i.a.createElement($.a, {
					className: fe.a.subscribeButton,
					getEventFactory: e => {
						const t = e ? "unsubscribe" : "subscribe";
						return p ? (e => t => ({
							...R.o(t),
							source: "sticky_banner",
							action: re.c.CLICK,
							noun: e,
							subreddit: R.lb(t)
						}))(t) : (e => t => ({
							...R.o(t),
							source: "id_banner",
							action: re.c.CLICK,
							noun: e,
							subreddit: R.lb(t)
						}))(t)
					},
					identifier: {
						name: n,
						type: ne.a.SUBREDDIT
					},
					small: !0,
					isFullWidth: !0,
					onClick: () => {
						!e.userIsSubscriber && e.setRelatedRecommendedCommunitiesVisible && e.setRelatedRecommendedCommunitiesVisible(!0)
					},
					afterUnsubscribeAction: () => {
						t && (Object(A.fb)(e.userId, t), e.updateSubredditInfo())
					}
				})), P && i.a.createElement(ye, {
					onClickUnmute: () => {
						v(Object(ae.b)({
							subredditId: t
						})), e.unmuteSubreddit()
					}
				}), e.userIsSubscriber && !P && t && e.notificationLevel && i.a.createElement("div", {
					className: fe.a.notificationButtonContainer
				}, i.a.createElement(U, {
					notificationLevel: e.notificationLevel,
					subredditName: n,
					subredditId: t,
					subredditIcon: y,
					shouldShowSubredditIcon: E,
					userId: e.userId
				}))))), S && i.a.createElement(Q.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: a,
					subredditId: t,
					subredditNavContainerClassName: fe.a.subredditNavContainer
				}))), i.a.createElement("div", {
					className: fe.a.intersectionWrapper
				}, i.a.createElement("div", {
					style: {
						height: m ? g : void 0
					},
					ref: m ? h : void 0
				})))
			}))
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "j", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/redditGQL/types.ts");
			const r = 500,
				a = 100,
				o = 5e3,
				d = 0,
				c = 1440,
				l = 36600,
				u = 1e9,
				m = {
					disabled: s.fbt._("Disabled", null, {
						hk: "1KaunG"
					}).toString(),
					modonly: s.fbt._("Mods only", null, {
						hk: "2yA6R8"
					}).toString(),
					anyone: s.fbt._("Anyone", null, {
						hk: "4gPsEy"
					}).toString()
				},
				p = [s.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), s.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), s.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				b = {
					any: s.fbt._("Any", null, {
						hk: "hVUT8"
					}),
					link: s.fbt._("Links only", null, {
						hk: "3upkyk"
					}),
					self: s.fbt._("Text posts only", null, {
						hk: "1VZn8Y"
					})
				},
				h = [s.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), s.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), s.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				g = {
					mods: s.fbt._("Moderators", null, {
						hk: "2rrkiT"
					}),
					anyone: s.fbt._("Anyone", null, {
						hk: "Xp8Fs"
					})
				},
				f = {
					[i.W.Low]: s.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					[i.W.High]: s.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					[i.W.All]: s.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				x = {
					[i.W.Low]: s.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					[i.W.High]: s.fbt._("High", null, {
						hk: "ABfkc"
					}),
					[i.W.All]: s.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				k = {
					blank: s.fbt._("none (recommended)", null, {
						hk: "2FMwQH"
					}),
					confidence: s.fbt._("best", null, {
						hk: "13cLYH"
					}),
					old: s.fbt._("old", null, {
						hk: "3V0QN8"
					}),
					top: s.fbt._("top", null, {
						hk: "40R5FY"
					}),
					qa: s.fbt._("q&a", null, {
						hk: "3cm6YL"
					}),
					live: s.fbt._("live (beta)", null, {
						hk: "2EVYAd"
					}),
					controversial: s.fbt._("controversial", null, {
						hk: "1uFV5F"
					}),
					new: s.fbt._("new", null, {
						hk: "39TZi6"
					})
				}
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
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
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				QuarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				quarantineLearnMore: "_10JuhN_YtdWSrIRmGSirSQ",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				g = n("./src/reddit/components/Footer/index.tsx"),
				f = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = n("./node_modules/lodash/flatMap.js"),
				C = n.n(v),
				y = n("./src/lib/linkMatchers/index.ts"),
				E = n("./src/lib/linkMatchers/customLinks.ts"),
				_ = n("./src/reddit/controls/OutboundLink/index.tsx");
			const O = /\[(.+?)\]\((.+?)\)/g,
				w = e => {
					const t = e.split(O);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, i, r] = t.slice(s, s + 3);
						n.push(e), n.push([r, i])
					}
					return n
				};
			var j = r.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = C()(t, w)), e.parseRegularLinks && (t = C()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = y.f.add(E.g.subreddit.prefix, E.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const i of t) n.push(e.slice(s ? s.lastIndex : 0, i.index)), s = i, n.push([i.url, i.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, i] = t;
							return r.a.createElement(_.b, {
								className: e.linkClassName,
								href: s,
								key: n
							}, i)
						}
						return r.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				N = n("./src/reddit/constants/parameters.ts"),
				S = n("./src/reddit/contexts/PageLayer/index.tsx"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/chat/controls/Svg/index.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => r.a.createElement(P.a, T({}, e, {
					viewBox: "-1 -1 21 21"
				}), r.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				L = n("./src/reddit/models/ContentGate.ts"),
				D = n("./src/lib/constants/index.ts"),
				W = n("./src/reddit/selectors/platform.ts"),
				B = n("./src/reddit/selectors/user.ts");
			var M = n("./src/reddit/selectors/meta.ts"),
				F = n("./src/reddit/components/ContentGate/index.m.less"),
				A = n.n(F);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = l.a.wrapped(R, "PrivateKey", A.a), V = l.a.div("ButtonsContainer", A.a), G = l.a.div("Container", A.a), q = l.a.div("ContainerExp", A.a), K = l.a.div("Description", A.a), z = l.a.div("PrivateSubredditDetails", A.a), Z = l.a.div("PrivateSubredditDescription", A.a), J = l.a.h3("PrivateSubredditName", A.a), Y = l.a.a("Link", A.a), X = l.a.wrapped(I.n, "LinkRouterButton", A.a), Q = l.a.wrapped(I.m, "LinkButton", A.a), $ = l.a.wrapped(I.p, "SecondaryLinkButton", A.a), ee = l.a.wrapped(X, "GoHomeLinkButton", A.a), te = l.a.wrapped(h.a, "CreateCommunityButton", A.a), ne = l.a.img("Image", A.a), se = l.a.img("ImagePlaceholder", A.a), ie = l.a.wrapped(X, "LeftLinkRouterButton", A.a), re = l.a.wrapped(Q, "LeftLinkButton", A.a), ae = l.a.wrapped($, "SecondaryLeftLinkButton", A.a), oe = l.a.h3("Title", A.a), de = l.a.div("PageBody", A.a), ce = l.a.div("InterstitialMessageWrapper", A.a), le = l.a.div("QuarantineLearnMore", A.a), ue = Object(c.c)({
				isLoggedIn: B.R,
				origin: M.l,
				user: B.m,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(B.S)(e)) return !1;
					const t = Object(W.d)(e);
					if (!t) return !1;
					const n = Object(B.h)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const i = 30 * D.E;
					return s > Date.now() - i
				})(e),
				isSeo: M.h
			}), me = Object(S.v)(), pe = Object(a.b)(ue, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.C(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(p.u(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.r)())
					}
				}
			}), be = e => {
				const {
					banMessage: t,
					banTitle: n,
					contentGateType: i,
					continueToQuarantinedSubreddit: a,
					continueToGatedSubreddit: o,
					isLoggedIn: d,
					isContributorRequestsDisabled: c,
					isPrivateSubredditContributorRequestPending: l,
					isSeo: p,
					location: h,
					origin: g,
					pageLayer: v,
					quarantineRequiresEmail: C,
					quarantineMessage: y,
					quarantineMessageHtml: E,
					quarantineMessageRTJson: _,
					interstitialWarningMessage: O,
					interstitialWarningMessageHtml: w,
					interstitialWarningMessageRTJson: S,
					setNSFWPreference: I,
					subredditDescription: P,
					subredditName: T,
					user: R
				} = e, D = async () => {
					if (d ? await I() : await Object(m.q)(), p) {
						const e = new URL(window.location.href);
						e.searchParams.set(N.k, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (i) {
					case L.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(ne, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), r.a.createElement(oe, null, H._("r/{community name} is a Reddit Premium community", [H._param("community name", T)], {
							hk: "2lyDwB"
						})), r.a.createElement(K, null, H._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(V, null, R ? r.a.createElement(ae, {
							href: `${s.a.redditUrl}/premium`,
							redditStyle: !0
						}, H._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(re, {
							href: Object(u.a)(h, g),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), R ? r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement($, {
							href: Object(u.a)(h, g),
							redditStyle: !0
						}, H._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case L.a.Nsfw:
					case L.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(ne, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), r.a.createElement(oe, null, i === L.a.Nsfw ? H._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : H._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), r.a.createElement(K, null, H._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), r.a.createElement(V, null, r.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, H._("No", null, {
							hk: "3fMglW"
						})), r.a.createElement($, {
							onClick: D,
							redditStyle: !0
						}, H._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case L.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement(U, null), r.a.createElement(oe, null, "r/", T, " ", H._("is a private community", null, {
							hk: "7zZmq"
						})), P && P.length && r.a.createElement(z, null, r.a.createElement(J, null, "r/", T), r.a.createElement(Z, null, r.a.createElement("div", null, P))), r.a.createElement(K, null, H._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", T, " ", H._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), r.a.createElement("br", null), H._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), r.a.createElement(V, null, R ? r.a.createElement(r.a.Fragment, null, !c && r.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: A.a.ContributorRequestButton,
							isContributorRequestPending: l
						}), r.a.createElement(ae, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${T}`,
							redditStyle: !0
						}, H._("Message Mods", null, {
							hk: "vVe1i"
						}))) : r.a.createElement(ae, {
							href: Object(u.a)(h, g),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), T && r.a.createElement(k.a, {
							subredditName: T
						}));
					case L.a.QuarantinedSubreddit:
						const d = R && R.hasVerifiedEmail;
						return r.a.createElement("div", null, r.a.createElement(ne, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined_interstitial.svg`
						}), r.a.createElement(oe, null, H._("r/{subredditName} is quarantined", [H._param("subredditName", T)], {
							hk: "2pxhFx"
						})), r.a.createElement(K, null, r.a.createElement(ce, null, _ ? r.a.createElement(x.b, {
							content: _,
							rtJsonElementProps: {
								pageLayer: v
							}
						}) : E ? r.a.createElement(f.a, {
							html: E
						}) : y || H._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), !C || d ? H._("Are you sure you’d like to continue?", null, {
							hk: "1fQqm4"
						}) : R ? H._("If you’d still like to view this community, verify your email address to continue.", null, {
							hk: "2vhFbK"
						}) : H._("If you’d still like to view this community, verify your email address and log in to your Reddit account to continue.", null, {
							hk: "2SmlRy"
						})), r.a.createElement(V, null, ((e, t, n) => {
							const i = e && e.hasVerifiedEmail;
							return !n || i ? r.a.createElement(V, null, r.a.createElement(ie, {
								to: "/",
								redditStyle: !0
							}, H._("Go Back", null, {
								hk: "11Lp6m"
							})), r.a.createElement($, {
								onClick: t,
								redditStyle: !0
							}, H._("Yes, Continue", null, {
								hk: "1D03m3"
							}))) : r.a.createElement(V, null, r.a.createElement(ie, {
								to: "/",
								redditStyle: !0
							}, H._("Go Back", null, {
								hk: "11Lp6m"
							})), r.a.createElement($, {
								href: `${s.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, H._("Verify Email", null, {
								hk: "1893cq"
							})))
						})(R, a, C)), r.a.createElement(le, null, H._("Learn more about {=quarantined communities}.", [H._param("=quarantined communities", r.a.createElement(Y, {
							href: "https://reddit.zendesk.com/hc/en-us/articles/360043069012-Quarantined-Subreddits"
						}, H._("quarantined communities", null, {
							hk: "3yq6Z5"
						})))], {
							hk: "uOTFJ"
						})));
					case L.a.GatedSubreddit:
						return r.a.createElement("div", null, r.a.createElement(oe, null, H._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), r.a.createElement(K, null, r.a.createElement(ce, null, S ? r.a.createElement(x.b, {
							content: S,
							rtJsonElementProps: {
								pageLayer: v
							}
						}) : w ? r.a.createElement(f.a, {
							html: w
						}) : O), H._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), r.a.createElement(V, null, r.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, H._("No Thank You", null, {
							hk: "4B26AR"
						})), r.a.createElement($, {
							onClick: o,
							redditStyle: !0
						}, H._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case L.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(ne, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), r.a.createElement(oe, null, n), (e => r.a.createElement(K, null, e ? r.a.createElement(j, {
							linkClassName: A.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : H._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), r.a.createElement(V, null, r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(ne, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(oe, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), r.a.createElement(V, null, r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(se, null), r.a.createElement(oe, null, H._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(K, null, H._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(V, null, R && r.a.createElement(te, {
							eventSource: "content_gate"
						}), r.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.ProfileDoesNotExist:
					case L.a.ProfileDeleted:
					case L.a.ProfileSuspended:
					case L.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(ne, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(oe, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case L.a.ProfileBlockedForLegalReason:
									return H._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case L.a.ProfileDeleted:
									return H._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case L.a.ProfileSuspended:
									return r.a.createElement(r.a.Fragment, null, H._("This account has been {=suspended} .", [H._param("=suspended", r.a.createElement(Y, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, H._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case L.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(oe, null, H._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(K, null, H._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(V, null, r.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(ne, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(oe, null, H._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(V, null, r.a.createElement(ee, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(ne, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(oe, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(V, null, r.a.createElement(X, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = me(pe(Object(o.i)(e => {
				const t = Object(i.useContext)(d.a) ? q : G;
				return r.a.createElement(t, null, r.a.createElement("div", {
					"data-testid": "content-gate"
				}, r.a.createElement(de, null, be(e))), r.a.createElement(g.b, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = i
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const k = "create-community-button",
				v = x.a.wrapped(l.c, "StyledTooltip", f.a),
				C = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.sb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(a.b)(C, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(n)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: k
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: i,
					onHideTooltip: a,
					openCommunityCreation: o,
					sendEvent: d,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: l,
					onClick: u
				} = e;
				return r.a.createElement(p.t, {
					className: t,
					disabled: l || c,
					onClick: e => {
						u && u(e), o(d)
					},
					onMouseEnter: i,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: k,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? r.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: k,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? r.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: k,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				o = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				d = n("./src/reddit/selectors/subreddit.ts");

			function c(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(t => Object(d.X)(t, {
						subredditId: e
					})),
					s = Object(r.e)(t => Object(o.i)(t, {
						subredditId: e
					})),
					c = Object(r.e)(t => Object(o.k)(t, {
						subredditId: e
					})),
					l = i.a.useCallback(() => {
						n.name && t(Object(a.l)(n.name))
					}, [n.name, t]);
				return i.a.useEffect(() => {
					c || s || l()
				}, [c, s, l]), {
					isFetching: c,
					isFetched: s,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PredictionLeaderboard-Sidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PredictionLeaderboard-Sidebar").then(n.bind(null, "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/reddit/featureFlags/component.tsx");
			const r = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("EconomicsSubredditPremiumSidebarCards")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(i.a)("spSpecialMemberships", r)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/config.ts"),
				d = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				m = l.a.wrapped(e => a.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = a.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								n = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, n), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: n
					} = this.state, r = n ? a.a.createElement(m, {
						src: o.a.assetPath + t
					}) : a.a.createElement(i.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, a.a.createElement(m, {
						src: o.a.assetPath + t
					}));
					return a.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": s.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, a.a.createElement("a", {
						href: o.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r))
				}
			}
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				mIsWhite: "_3TyrvwTfHlJHEevBoOKkDJ",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				mIsGrey: "_2g4mHpbVF30jxvk8ZPbqBe"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/config.ts"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Footer/index.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = o.a.div("UserAgreement", c.a), m = o.a.a("UserAgreementLink", c.a), p = o.a.a("PrivacyLink", c.a);
			var b;
			! function(e) {
				e.Grey = "grey", e.White = "white"
			}(b || (b = {}));
			t.b = e => i.a.createElement("div", {
				className: Object(a.a)(c.a.FooterContainer, {
					[c.a.mIsGrey]: e.textColor === b.Grey,
					[c.a.mIsWhite]: e.textColor === b.White
				})
			}, i.a.createElement(u, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy.} Reddit, Inc. © {year}. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", i.a.createElement(m, {
				href: `${r.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "1Dc18v"
			}))), l._param("=Privacy Policy.", i.a.createElement(p, {
				href: `${r.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy.", null, {
				hk: "1Ubjrd"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "yxLlI"
			})))
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
			const i = Object(s.a)({
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
			t.a = i
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
				i = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				f = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				k = d.a.div("HeaderContent", h.a),
				v = d.a.div("HeaderContainer", h.a),
				C = d.a.span("HeaderText", h.a),
				y = d.a.wrapped(r.a, "HeaderUrl", h.a),
				E = d.a.span("Container", h.a),
				_ = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						n = Object(l.a)(e),
						s = Object(p.a)(e).banner.positionedImageAlignment,
						r = Object(p.a)(e).banner.positionedImage,
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
					const u = !!r && !!o && "left" === s,
						b = Object(p.a)(e).banner.backgroundImage,
						_ = b && "string" == typeof b && "tiled" === Object(p.a)(e).banner.backgroundImagePosition ? b.split("?")[0] : b,
						O = Object(m.g)(Object(p.a)(e).banner.backgroundColor, _, Object(p.a)(e).banner.backgroundImagePosition),
						w = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						j = `${4+w}px`;
					return i.a.createElement(E, {
						style: {
							background: O,
							filter: e.shouldBlurHeaderImage ? "blur(6px)" : "none",
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, i.a.createElement(y, {
						className: e.className,
						to: e.url
					}, i.a.createElement(v, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && i.a.createElement(k, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (n ? i.a.createElement(f, {
						style: {
							backgroundImage: `url(${n})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: j,
							width: j
						}
					}) : i.a.createElement(g, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: j,
							width: j
						}
					})), i.a.createElement(C, {
						style: {
							paddingTop: 32 === w ? "4px" : "14px"
						}
					}, t)), i.a.createElement(x, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!r,
							[h.a.hoverPositionedImage]: !!r && !!o
						}),
						style: {
							...d,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = _
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/loadWithRetries/index.ts");
			const r = "UserInfoTooltip";
			t.b = Object(s.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(i.a)(() => n.e("AuthorHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, n) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "c", (function() {
				return v
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/selectors/tooltip.ts");
			const u = Object(o.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(a.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				p = n("./src/reddit/actions/subreddit.ts");
			const b = Object(o.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var h = Object(a.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(c.i)()),
					onOpenUserDropdown: async () => {
						var n;
						e(Object(c.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (n = t.onShow) || void 0 === n || n.call(t)
					}
				})),
				g = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				f = n.n(g);
			class x extends i.a.Component {
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
					return i.a.createElement("div", {
						className: Object(r.a)(f.a.HoverDiv, t),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const k = m(x),
				v = h(x)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/layout/row/Inline/index.tsx"),
				r = n("./src/reddit/components/Hovercards/helpers.m.less"),
				a = n.n(r);
			const o = s.a.wrapped(i.a, "UserActionItem", a.a),
				d = e => {
					const {
						author: t,
						itemId: n,
						subredditName: s,
						tooltipIdPrefix: i,
						tooltipType: r
					} = e;
					let a = i;
					return n && (a = `${a}--${n}`), r && (a = `${a}--${r}`), t && (a = `${a}--${t}`), s && (a = `${a}--${s}`), a
				}
		},
		"./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-autosize-textarea/lib/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditSettings.ts"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				b = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				h = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				g = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				k = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				_ = n.n(E);
			const O = 6,
				w = `${g.a}_description`,
				j = Object(c.c)({
					apiPending: y.Y,
					unsavedChangesModalIsOpen: Object(C.b)(w)
				}),
				N = Object(d.b)(j, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						updateSubredditSettings: t => e(Object(m.j)(n.id, t, {}, !0)),
						openUnsavedChangesModal: () => {
							e(Object(u.h)(w))
						}
					}
				});
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = r.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(k.a)
						}
					}, this.focusTextArea = () => {
						if (this.textAreaRef && this.textAreaRef.focus && (this.textAreaRef.focus({
								preventScroll: !0
							}), this.textAreaRef.setSelectionRange)) {
							const e = this.textAreaRef.value.length;
							this.textAreaRef.setSelectionRange(e, e)
						}
					}, this.handleOnBlur = e => {
						e.relatedTarget === this.textAreaRef || e.target.contains(e.relatedTarget) || e.relatedTarget === this.containerRef.current || (e.preventDefault(), e.stopPropagation(), this.stopEditing(!0, !1))
					}, this.onCancel = () => {
						this.setState({
							description: this.props.description
						}, () => this.stopEditing(!1, !0))
					}, this.onSave = () => {
						this.props.updateSubredditSettings({
							publicDescription: this.state.description
						}), this.isSaving = !0, this.stopEditing(!1, !0);
						const e = this.state.description,
							t = this.props.description;
						this.props.sendEvent(Object(k.d)(e, t))
					}, this.state = {
						description: e.description || "",
						editing: !1
					}
				}
				hasFocus() {
					return !!document.activeElement && (document.activeElement === this.containerRef.current || this.containerRef.current && this.containerRef.current.contains(document.activeElement))
				}
				UNSAFE_componentWillReceiveProps(e) {
					!e.apiPending && this.props.apiPending && (this.isSaving = !1), e.description === this.props.description || this.hasPendingChanges() || this.setState({
						description: e.description
					})
				}
				stopEditing(e, t) {
					e && this.hasPendingChanges() && !this.isSaving && this.props.openUnsavedChangesModal(), this.setState({
						editing: !1
					}), t && this.containerRef.current && this.containerRef.current.blur()
				}
				renderInactiveDescription() {
					const e = this.props.apiPending ? r.a.createElement(x.a, {
						className: _.a.loadingIcon,
						sizePx: O
					}) : void 0;
					return this.state.description ? r.a.createElement(r.a.Fragment, null, r.a.createElement(h.a, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, r.a.createElement(v.a, {
						name: "edit",
						className: _.a.pencil
					}), e)) : r.a.createElement("div", {
						className: _.a.emptyDescription
					}, s.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(o.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: s.fbt._("Tell us about your community", null, {
							hk: "40SeWt"
						}),
						className: Object(l.a)(_.a.editableDescription, _.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: b.d,
						value: this.state.description,
						"data-testid": "edit-description-block"
					}), r.a.createElement("div", {
						className: _.a.editableDescriptionControlRow
					}, r.a.createElement(p.a, {
						className: _.a.characterCountdown,
						maxChars: b.d,
						text: this.state.description
					}), r.a.createElement("span", {
						className: _.a.cancel,
						onClick: this.onCancel
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement("span", {
						className: _.a.save,
						onClick: this.onSave
					}, s.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [_.a.defaultEditableDescriptionContainer];
					const e = [_.a.editableDescriptionContainer];
					return this.state.editing && e.push(_.a.activeEditableDescriptionContainer), e
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						ref: this.containerRef,
						className: Object(l.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						"data-testid": "description-block"
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && r.a.createElement(g.b, {
						withOverlay: !0,
						modalId: w,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})))
				}
			}
			t.a = N(Object(f.c)(S))
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.m.less": function(e, t, n) {
			e.exports = {
				descriptionContainer: "_1EPynDYoibfs7nDggdH7Gq",
				truncated: "_3-0c12FCnHoLz34dQVveax",
				description: "_1zPvgKHteTOub9dKkvrOl4",
				showMore: "_1dp4_svQVkkuV143AIEKsf",
				ellipsis: "_5VBcBVybCfosCzMJlXzC3",
				showFullDescriptionButton: "_3YNtuKT-Is6XUBvdluRTyI",
				active: "_2Z_0gYdq8Wr3FulRLZXC3e",
				transition: "_2ZTVnRPqdyKo1dA7Q7i4EL",
				noTransition: "k51Bu_pyEfHQF6AAhaKfS",
				editableDescriptionContainer: "_2qi_L6gKnhyJ0ZxPmwbDFK",
				activeEditableDescriptionContainer: "_3GG6tRGPPJiejLqt2AZfh4",
				defaultEditableDescriptionContainer: "IzSmZckfdQu5YP9qCsdWO",
				emptyDescription: "_1YvJWALkJ8iKZxUU53TeNO",
				editableDescriptionControlRow: "_3adDzm8E3q64yWtEcs5XU7",
				characterCountdown: "_3jyKpErOrdUDMh0RFq5V6f",
				save: "dqhlvajEe-qyxij0jNsi0",
				cancel: "_12nHw-MGuz_r1dQx5YPM2v",
				editableDescription: "_3zTJ9t4vNwm1NrIaZ35NS6",
				activeEditableDescription: "_2JIiUcAdp9rIhjEbIjcuQ-",
				loadingIcon: "_2I2LpaEhGCzQ9inJMwliNO",
				pencil: "_42Nh7O6pFcqnA6OZd3bOK"
			}
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/fastdom/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				l = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = o.a.div("DescriptionContainer", l.a);
			class p extends i.a.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.textRef = null, this.showFullDescription = e => {
						e.preventDefault(), e.stopPropagation(), this.setState({
							shouldTruncateDescription: !1
						})
					}, this.setContainerRef = e => this.containerRef = e, this.setTextRef = e => this.textRef = e, this.state = {
						shouldDisplayShowMore: !1,
						shouldTruncateDescription: e.shouldTruncateDescription
					}
				}
				componentDidMount() {
					this.state.shouldTruncateDescription && a.a.read(() => {
						this.containerRef && this.textRef && this.textRef.offsetHeight > this.containerRef.offsetHeight && this.setState({
							shouldDisplayShowMore: !0
						})
					})
				}
				render() {
					const {
						children: e,
						description: t,
						subreddit: n
					} = this.props, {
						shouldDisplayShowMore: s,
						shouldTruncateDescription: a
					} = this.state, o = n ? u._("Welcome to {subredditName}", [u._param("subredditName", n.name)], {
						hk: "1dVVp0"
					}) : "";
					return i.a.createElement(m, {
						className: Object(r.a)(l.a.descriptionContainer, a && l.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef,
						"data-testid": "no-edit-description-block"
					}, i.a.createElement("div", {
						className: l.a.description,
						ref: this.setTextRef
					}, t || o, e), a && s && i.a.createElement("div", {
						className: l.a.showMore
					}, "...", i.a.createElement(d.r, {
						className: l.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, u._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			t.a = p
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "i", (function() {
				return N
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./node_modules/lodash/isNil.js"),
				d = n.n(o),
				c = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...s
							}
						} = this;
						l.a.publish(c.a, s, e)
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
				b = n("./src/reddit/selectors/comments.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const n = Object(h.c)(e, t),
					s = Object(g.N)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var x = Object(r.b)(() => Object(a.a)(f, b.j, (e, t) => ({
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
				const n = Object(h.c)(e, t),
					s = Object(g.N)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
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
			var C = Object(r.b)(() => Object(a.c)({
					subreddit: g.X
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
				y = n("./src/reddit/hooks/usePostContext.ts");
			var E = e => {
				const t = Object(y.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? i.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var _ = e => {
				const t = Object(y.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? i.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var O = e => {
				const t = Object(y.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? i.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var w = Object(r.b)(() => Object(a.c)({
				subreddit: g.X
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
				subredditOrProfile: (e, t) => Object(g.Q)(e, {
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
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(g.X)(e, {
						subredditId: n
					}) : null
				}
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
				videoStyles: "LAwAnSnoexNeHoqZmXdLD",
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
				i = n.n(s),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/icons/fonts/Info/index.tsx"),
				c = n("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = n.n(c);
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
		"./src/reddit/components/ModProgressModule/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ModProgressModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("ModProgressModule")]).then(n.bind(null, "./src/reddit/components/ModProgressModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModProgressModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, n) {
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
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = n.n(c),
				u = n("./src/reddit/constants/componentTestIds.ts"),
				m = n("./src/reddit/contexts/ApiContext.tsx"),
				p = n("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				b = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			const g = "bottom_sheet";
			var f;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(f || (f = {}));
			var x = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/icons/svgs/Close/index.tsx"),
				v = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				y = n("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				E = n("./src/reddit/selectors/meta.ts"),
				_ = n("./src/redditGQL/types.ts");
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = e => {
				const {
					gqlContext: t
				} = e, n = Object(r.d)(), c = Object(x.a)(), m = Object(r.e)(E.b), [C, y] = Object(s.useState)(!1), [w, j] = Object(s.useState)({}), [N, S] = Object(s.useState)({}), [I, P] = Object(s.useState)([]);
				let T = ["es"];
				const R = Object(s.useCallback)(async () => {
					const e = await Object(p.b)(t);
					e && (S(e.languages), P(e.preferences), y(!0))
				}, [t]);
				Object(s.useEffect)(() => {
					R()
				}, [R]);
				const L = e => {
						c("skip" === e ? (e => t => ({
							...Object(h.o)(t),
							source: g,
							action: b.c.CLICK,
							noun: f.SKIP,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(m) : (e => t => ({
							...Object(h.o)(t),
							source: g,
							action: b.c.CLICK,
							noun: f.LATER,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(m)), y(!1), n(Object(o.c)({
							experience: _.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					D = () => {
						const e = Object.keys(w).join();
						c(((e, t) => n => ({
							...Object(h.o)(n),
							source: g,
							action: b.c.CLICK,
							noun: f.ADD,
							actionInfo: {
								...Object(h.d)(n),
								reason: t,
								type: e
							}
						}))(m, e)), (async () => {
							var e;
							const s = w;
							I.map(e => s[e] = !0);
							const i = await Object(p.d)(t, s);
							(null === (e = null == i ? void 0 : i.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? n(Object(d.f)({
								kind: v.b.SuccessCommunity,
								text: O._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): n(Object(d.f)({
								kind: v.b.Error,
								text: O._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), y(!1), n(Object(o.c)({
							experience: _.cb.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return T = T.filter(e => !I.includes(e)), C && 0 !== T.length ? (c((e => t => ({
					...Object(h.o)(t),
					source: g,
					action: b.c.VIEW,
					noun: b.b.SCREEN,
					actionInfo: {
						...Object(h.d)(t),
						type: e
					}
				}))(m)), n(Object(o.d)(_.cb.LanguagePreferenceBottomSheet)), i.a.createElement("div", {
					className: l.a.PromptContainer
				}, i.a.createElement("div", {
					className: l.a.PromptClose
				}, i.a.createElement(k.a, {
					className: l.a.Close,
					onClick: () => L("skip"),
					"data-testid": u.e
				})), i.a.createElement("div", {
					className: l.a.PromptTitle
				}, O._("See content in more languages", null, {
					hk: "4uyzS1"
				})), i.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, O._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === T.length ? i.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = w;
						t[e] = !0, j(t), D()
					})(T[0]),
					"data-testid": T[0]
				}, O._("Add {language}", [O._param("language", N[T[0]])], {
					hk: "2emiHZ"
				})) : null, i.a.createElement("div", {
					className: Object(a.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => L("later")
				}, O._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(m.b)(e => {
				var t;
				const {
					gqlContext: n
				} = e, s = Object(r.f)().getState();
				return (null === (t = Object(r.e)(e => Object(C.a)(e, {
					experience: _.cb.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(y.b)(s) ? i.a.createElement(w, {
					gqlContext: n
				}) : null
			})
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
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(f);
			const k = c.a.wrapped(m.a, "_Dropdown", x.a),
				v = Object(u.a)(k),
				C = c.a.button("MenuButton", x.a),
				y = c.a.wrapped(p.b, "DropdownRow", x.a),
				E = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				_ = Object(a.b)(E, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				O = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = _(e => r.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: O(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": g.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
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
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = n.n(m);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				h = d.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: n => {
							((e, t, n, s, i) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const n = e.target.getAttribute("href");
									i && s(n, i), t(n)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
							})(n, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(s.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(s.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(o.a)(h))
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, n) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-autosize-textarea/lib/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
					let {
						className: t,
						children: n,
						editorWrapperRef: s,
						initialHeight: r
					} = e;
					return i.a.createElement("div", {
						className: Object(o.a)(c.a.editorWrapper, t),
						style: r ? {
							height: r
						} : void 0,
						ref: s
					}, n)
				},
				m = e => {
					let {
						isFullHeight: t,
						textAreaRef: n,
						...s
					} = e;
					return i.a.createElement(a.a, l({
						className: Object(o.a)(c.a.textareaAutosize, {
							[c.a.mIsFullHeight]: t
						}),
						innerRef: n
					}, s))
				};
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
						innerRef: n,
						onEditorResize: s,
						...r
					} = this.props, {
						isResized: a
					} = this.state;
					return i.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, i.a.createElement(m, l({}, r, {
						isFullHeight: !!a,
						textAreaRef: n
					})))
				}
			}
			t.a = p
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
				i = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/FlairWrapper/index.tsx"),
				p = n("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = n("./src/reddit/connectors/miniCardPost.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/contexts/Post/index.tsx"),
				f = n("./src/reddit/controls/InternalLink/index.tsx"),
				x = n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				k = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/models/Theme/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/components/MiniCardPost/index.m.less"),
				_ = n.n(E),
				O = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				w = n.n(O);
			const j = e => e.type === v.f.Spoiler,
				N = Object(h.v)();
			t.a = N(Object(g.b)(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: n,
					id: r,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: g,
					shouldOpenPost: v,
					showSubredditMeta: E = !0,
					showSubredditName: O,
					subredditOrProfile: N
				} = e, S = h && h.preview && h.preview.url || void 0, I = h && h.isSponsored ? "promoted_trend" : "trending", P = h && Object(l.a)(h.permalink) || "", T = v && P || g && Object(o.a)("/search", {
					q: g.rawQuery,
					source: I
				}) || P, R = g ? g.subredditInfo && g.subredditInfo.icon : N && N.icon.url, L = g ? g.subredditInfo && g.subredditInfo.displayText : N && (N.displayText || N.name), D = h ? h.flair.filter(j) : [], W = h ? h.score : 0, B = h ? h.numComments : 0, M = h && h.isSponsored, F = Object(y.a)(e).body, A = `linear-gradient(\n      ${Object(i.f)(F,.2)},\n      ${Object(i.f)(F,.3)},\n      ${Object(i.f)(F,.4)},\n      ${Object(i.f)(F,.6)},\n      ${Object(i.f)(F,.8)},\n      ${F}\n    )`, H = a.a.createElement("div", {
					id: r,
					className: Object(d.a)(w.a.trendingPost, {
						[w.a["m-background"]]: !!S
					})
				}, a.a.createElement(f.default, {
					to: T
				}, a.a.createElement("div", {
					className: Object(d.a)(w.a.backgroundWrapper, _.a.backgroundWrapper, t),
					style: {
						background: Object(C.g)(Object(y.a)(e).body, S || Object(y.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": A
					}
				}, M && a.a.createElement("div", {
					className: w.a.promoted
				}, s.fbt._("promoted", null, {
					hk: "1mLJfa"
				})), a.a.createElement("div", {
					className: Object(d.a)(w.a.innerContainer, _.a.innerContainer, c),
					onClick: b,
					title: h ? h.title : ""
				}, a.a.createElement("h2", {
					className: h ? w.a.title : w.a.titleNoDescription
				}, e.title), h ? a.a.createElement("div", {
					className: Object(d.a)(w.a.description, n)
				}, D.length > 0 && a.a.createElement(m.a, {
					className: w.a.flair,
					titleFlair: D,
					nowrap: !0,
					post: h
				}), h.title) : a.a.createElement("div", {
					className: w.a.spacer
				}), E && R && L && a.a.createElement(x.a, {
					className: w.a.relatedSubredditMetaData,
					iconClassName: w.a.subredditIcon,
					iconUrl: R || void 0,
					suffix: s.fbt._("{subredditName} and more", [s.fbt._param("subredditName", L)], {
						hk: "2YTyJf"
					})
				}), !E && h && a.a.createElement("div", {
					className: w.a.metaLine
				}, O && L && a.a.createElement("span", {
					className: w.a.meta
				}, Object(k.d)(L)), a.a.createElement("span", {
					className: w.a.meta
				}, s.fbt._({
					"*": "{number} points",
					_1: "1 point"
				}, [s.fbt._plural(W, "number", Object(u.b)(W))], {
					hk: "1Jm6il"
				})), a.a.createElement("span", {
					className: w.a.meta
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(B, "number", Object(u.b)(B))], {
					hk: "311aXY"
				})))))));
				return M ? a.a.createElement(p.a, {
					post: h
				}, H) : H
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./node_modules/lodash/random.js"),
				r = n.n(i),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/helpers/adCount/index.ts"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				k = n.n(x),
				v = n("./src/lib/lessComponent.tsx");
			const C = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), n.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), n.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				y = Object(c.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: s
						} = t, i = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(n, i, s)]
					}
				}),
				E = Object(d.b)(y),
				_ = v.a.wrapped(b.a, "ThemedWidget", k.a),
				O = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(f.H)(e.media) && e.media.content)),
				w = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				j = Object(p.c)(class extends o.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: n
						} = this.props;
						return t !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, n) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(g.b)(e, t, n))
					}
					render() {
						const e = r()(0, w.length - 1),
							{
								img: t,
								href: n
							} = w[e],
							{
								className: s,
								placement: i,
								redditStyle: a
							} = this.props;
						return o.a.createElement(_, {
							className: s,
							contentOnly: !0,
							redditStyle: a
						}, o.a.createElement(u.a, {
							img: t,
							href: n,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, i)
						}))
					}
				});

			function N(e) {
				let {
					className: t,
					post: n,
					placementIndex: s,
					refreshKey: i,
					listingName: r,
					placement: a,
					redditStyle: d,
					awaitingBrandSafetyCheck: c,
					forceHouseAd: l,
					removeSidebarSpacer: u
				} = e;
				const p = u ? o.a.Fragment : m.a;
				if (!c && O(n)) {
					let e = null;
					return l ? e = o.a.createElement(j, {
						className: t,
						redditStyle: d,
						placement: a
					}) : n && (e = o.a.createElement(C, {
						post: n,
						postId: n.id,
						refreshKey: i,
						listingName: r,
						placement: a,
						placementIndex: s
					})), o.a.createElement(p, null, e)
				}
				return null
			}
			t.a = E(N)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/selectors/brandSafety.ts"),
				d = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.v)();
			t.a = m(Object(r.b)((e, t) => {
				let {
					listingName: n,
					pageLayer: s
				} = t;
				const i = Object(o.b)(e, {
						listingName: n,
						pageLayer: s
					}),
					r = Object(c.G)(e) || Object(d.a)(e),
					a = Object(o.e)(e);
				return {
					canShowAd: i && !r,
					awaitingBrandSafetyCheck: !Object(o.c)(e),
					isAdsDisabled: r,
					viewIsUnsafe: a
				}
			})(e => {
				let {
					canShowAd: t,
					isAdsDisabled: n,
					viewIsUnsafe: s,
					pageLayer: r,
					...a
				} = e;
				return !n && t && r ? i.a.createElement(l.a, u({
					forceHouseAd: s
				}, a)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SidebarContainer/index.m.less"),
				r = n.n(i);
			t.a = s.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/constants/location.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				g = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				k = n("./src/reddit/selectors/meta.ts"),
				v = n("./src/redditGQL/types.ts"),
				C = n("./src/reddit/components/SidebarFooter/index.m.less"),
				y = n.n(C);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.a("Link", y.a), O = Object(a.c)({
				countryCode: k.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: x.a
			}), w = Object(r.b)(O), j = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), N = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return i.a.createElement("div", {
					className: y.a.GreyRereddit
				}, n, !!p.c[t] && i.a.createElement("div", {
					className: y.a.LinkContainer
				}, i.a.createElement("div", {
					className: y.a.Column
				}, i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), t === v.j.De && i.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), i.a.createElement("div", {
					className: y.a.Column
				}, i.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), t === v.j.De && i.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), i.a.createElement("div", {
					className: y.a.LinkContainer
				}, i.a.createElement("div", {
					className: y.a.Column
				}, i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), i.a.createElement("div", {
					className: y.a.Column
				}, i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), i.a.createElement("div", {
					className: y.a.Copyright
				}, E._("Reddit, Inc. © {year}. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = j(w(Object(l.c)(e => {
				const t = Object(r.f)().getState(),
					n = Object(g.a)(t, Object(o.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.nd.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.nd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.nd.LargeImagePreview ? e.reredditButtons : [];
					return i.a.createElement(N, {
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
					return n.includes(t) || "en" === t ? i.a.createElement(_, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				return i.a.createElement(u.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!p.c[e.countryCode] && i.a.createElement("div", {
					className: y.a.LinkContainer
				}, i.a.createElement("div", {
					className: y.a.Column
				}, i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === v.j.De && i.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: y.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), i.a.createElement("div", {
					className: y.a.Column
				}, i.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === v.j.De && i.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), i.a.createElement("div", {
					className: y.a.LinkContainer
				}, i.a.createElement("div", {
					className: y.a.Column
				}, i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), i.a.createElement("div", {
					className: y.a.Column
				}, i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), i.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && i.a.createElement("div", {
					className: y.a.LinkContainer
				}, i.a.createElement("div", {
					className: y.a.Column
				}, s("en"), s("fr"), s("it")), i.a.createElement("div", {
					className: y.a.Column
				}, s("de"), s("es"), s("pt"))), i.a.createElement("div", {
					className: y.a.Copyright
				}, E._("Reddit, Inc. © {year}. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), i.a.createElement(c.a, null))
			})))
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
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				i = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", i.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/lodash/throttle.js"),
				r = n.n(i),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = n.n(p),
				h = n("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = d.g[1] + 24,
				x = u.f + 8,
				k = x + 152 + 16,
				v = k + f + 8,
				C = h.a.div("Container", b.a),
				y = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return o.a.createElement(c.a, g({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?x:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				E = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: i,
						isSticky: r,
						shouldStickToBottom: a
					} = e;
					return o.a.createElement("div", {
						className: Object(s.a)(n, {
							[b.a.BottomStickyStyles]: a,
							[b.a.StickyStyles]: !a && r && !i,
							[b.a.StickyStylesFakeOverlay]: !a && !!i
						})
					}, t)
				};
			class _ extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > k
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
					}, d.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: n,
							children: s,
							className: i,
							hideFooter: r,
							pageLayer: a,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return o.a.createElement(C, {
						className: i,
						innerRef: this.setWrapperRef
					}, o.a.createElement(E, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: m
					}, t, s, d, !r && o.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && o.a.createElement(y, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const O = Object(m.v)();
			t.a = O(_)
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/ImageInput/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/models/ApiRequestState/index.ts"),
				f = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				x = n("./src/reddit/components/SubredditIcon/index.m.less"),
				k = n.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => {
					const {
						subredditId: t,
						className: n,
						inTopBar: s,
						...i
					} = e, a = [n, k.a.inTopBar, k.a.iconContainer];
					return s ? a.push(k.a.emptyEditableIconInTopBar) : a.push(k.a.editableIcon, k.a.emptyEditableIcon), r.a.createElement("span", v({}, i, {
						className: Object(d.a)(...a)
					}), s ? r.a.createElement(h.a, {
						name: "upload",
						className: k.a.emptyUploadButton
					}) : r.a.createElement(h.a, {
						name: "add",
						className: k.a.emptyPlusButton
					}), e.children)
				},
				y = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: i,
						onClick: a,
						inTopBar: o,
						src: c
					} = e;
					return r.a.createElement("span", {
						className: k.a.iconContainer
					}, r.a.createElement("img", {
						alt: s,
						onClick: a,
						role: i,
						src: c,
						className: Object(d.a)(n, {
							[k.a.editableIcon]: !o
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				E = Object(o.c)({
					isLoading: f.b
				});
			class _ extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(u.a, {
						className: k.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: e => {
							const t = Object(g.b)();
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
						className: k.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? s.fbt._("Update icon", null, {
						hk: "3zlPxT"
					}) : s.fbt._("Add icon", null, {
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
					}), n = r.a.createElement(r.a.Fragment, null, r.a.createElement(y, v({
						alt: s.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, r.a.createElement(C, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(C, v({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [k.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(k.a.loadingIconInTopBar), t = 32), r.a.createElement(m.a, {
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
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? r.a.createElement("div", {
						className: k.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(a.b)(E, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit.id, n, s))
				}
			}))(Object(l.c)(_))
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
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys",
				predictionsFilter: "jU3ijmuG8CyRDQhPOHdw4",
				liveIcon: "_39JxJrjNw5NY_Q0ARn8NRe"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/widgets.ts"),
				u = n("./src/lib/linkMatchers/index.ts"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = n("./src/telemetry/models/Outbound.ts"),
				f = n("./src/reddit/components/SubredditNav/index.m.less"),
				x = n.n(f);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = (e, t, n) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: n
				}),
				C = e => {
					let {
						children: t,
						isActive: n,
						isTopBannerVariant: s,
						...r
					} = e;
					return i.a.createElement("div", k({
						className: v(x.a.subNavTitle, n, s)
					}, r), i.a.createElement("span", null, t), i.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				y = e => {
					let {
						className: t,
						href: n,
						isActive: s,
						to: r,
						isTopBannerVariant: a,
						...o
					} = e;
					const d = v(x.a.navLink, s, a);
					return r ? i.a.createElement(m.a, k({
						className: d,
						to: r
					}, o)) : n ? i.a.createElement(b.b, k({
						className: d,
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: n
					}, o)) : i.a.createElement("a", k({
						className: d
					}, o))
				},
				E = e => {
					let {
						className: t,
						isActive: n,
						...s
					} = e;
					return i.a.createElement(m.a, k({
						className: Object(p.a)(v(x.a.navLink, n), t)
					}, s))
				},
				_ = e => {
					let {
						className: t,
						href: n,
						isActive: s,
						...r
					} = e;
					return n ? i.a.createElement(b.b, k({
						className: v(x.a.subNavLink, s),
						isSponsored: !1,
						sourceElement: g.SourceElement.NavigationMenu,
						href: n
					}, r)) : i.a.createElement("a", k({
						className: v(x.a.subNavLink, s)
					}, r))
				},
				O = e => {
					let {
						className: t,
						...n
					} = e;
					return i.a.createElement("div", k({
						className: Object(p.a)(x.a.subNavContainer, t)
					}, n))
				},
				w = e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return i.a.createElement("div", k({
						className: Object(p.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: n
						})
					}, s))
				};
			class j extends i.a.Component {
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
					return i.a.createElement(O, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, i.a.createElement(C, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), i.a.createElement(w, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var N = j;
			const S = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var I = e => e.menuItem.url ? i.a.createElement(y, {
					href: S(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : i.a.createElement(N, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => i.a.createElement(_, {
					key: `${e.text}-${S(e)}`,
					role: "listitem",
					href: S(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				P = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/actions/subreddit.ts"),
				R = n("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = Object(a.c)({
				isActive: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Boolean(e.subreddits.appliedFilters.meta[n])
				},
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(P.X)(e, {
						subredditId: n
					})
				}
			});
			var W = Object(r.b)(D, (e, t) => ({
					onActivate: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(e => {
					let {
						subreddit: t,
						isActive: n,
						onActivate: s
					} = e;
					const r = Object(R.a)();
					return t ? i.a.createElement(E, {
						className: x.a.metaNavLink,
						to: t.url,
						isActive: n,
						onClick: e => {
							Object(d.J)(r) && !Object(d.R)(r) && e.preventDefault(), s()
						}
					}, L._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				B = n("./src/reddit/actions/economics/predictions/index.ts"),
				M = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				F = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				A = n("./src/reddit/helpers/trackers/predictions.ts"),
				H = n("./src/reddit/hooks/useTracking.ts"),
				U = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(r.d)(),
					a = Object(R.a)(),
					o = Object(H.a)(),
					d = Object(F.S)(a),
					[c, l] = Object(s.useState)(!1),
					u = Object(r.e)(e => Object(P.X)(e, {
						subredditId: t
					})),
					m = Object(r.e)(e => Object(P.S)(e, {
						subredditId: t
					})),
					p = Object(r.e)(e => Object(U.d)(e, {
						subredditId: t
					})),
					b = Object(r.e)(e => Object(U.e)(e, {
						subredditId: t
					}));
				Object(M.a)(t);
				return Object(s.useEffect)(() => {
					!m || c || p || d || (n(Object(B.m)(u.name)), l(!0))
				}, [m, c, p, d, n, u.name]), m && p ? i.a.createElement(E, {
					className: x.a.predictionsFilter,
					isActive: d,
					onClick: () => {
						n(Object(T.p)({
							subredditId: t,
							forceState: !1
						})), o(Object(A.h)())
					},
					to: `${u.url}predictions/`
				}, V._("Predictions", null, {
					hk: "Cv5GC"
				}), b && i.a.createElement("span", {
					className: x.a.liveIcon
				}, V._("Live", null, {
					hk: "1o89m4"
				}))) : null
			};
			var q = n("./src/lib/constants/index.ts");
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const z = Object(d.v)(),
				Z = [q.Tb.SUBREDDIT, q.Tb.COMMENTS, q.Tb.COLLECTION_COMMENTS],
				J = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && Z.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.R)(t.pageLayer)
				});
			var Y = z(Object(r.b)(J, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(T.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: n,
						isPostsRoute: s,
						isPredictionsPage: r,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, d = s && !n && !r;
					return i.a.createElement(y, {
						to: t,
						isActive: d,
						isTopBannerVariant: a,
						onClick: e => {
							n && (e.preventDefault(), o())
						}
					}, K._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				X = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Q = n("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(Q.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("HarbergerTaxBannerPurchaseCTA").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				ee = n("./src/reddit/constants/postLayout.ts"),
				te = n("./src/reddit/constants/screenWidths.ts"),
				ne = n("./src/reddit/models/Theme/index.ts"),
				se = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const ie = Object(X.a)(e => {
				let {
					className: t,
					children: n,
					isTopBannerVariant: s,
					...r
				} = e;
				const a = Object(se.a)(r);
				return i.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !s ? "relative" : "static",
						...a.navBar.useOverlay && !s ? {
							marginTop: -26
						} : {},
						background: s ? "inherit" : Object(ne.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, n)
			});
			var re = e => i.a.createElement(ie, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, i.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === ee.g.Large ? `${e.maxWidth||te.a}px` : "100%"
					}
				}, i.a.createElement("div", null, e.children), i.a.createElement($, null))),
				ae = n("./src/reddit/constants/wiki.ts"),
				oe = n("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: de
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: n,
					pageLayer: s
				} = e, r = !!s && !!s.meta && s.meta.name === q.Tb.SUBREDDIT_WIKI, a = `wiki/${ae.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return i.a.createElement(y, {
					isActive: r,
					isTopBannerVariant: n,
					to: o,
					onClick: () => e.sendEvent(Object(oe.g)())
				}, de._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const le = Object(c.a)("spPolls", W),
				ue = Object(d.v)(),
				me = Object(a.c)({
					layout: d.U,
					widget: l.f
				}),
				pe = Object(r.b)(me);
			t.a = ue(pe(Object(o.c)(e => i.a.createElement(re, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && i.a.createElement(i.a.Fragment, null, i.a.createElement(Y, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), i.a.createElement(le, {
				subredditId: e.subredditId
			}), i.a.createElement(G, {
				subredditId: e.subredditId
			})), e.widget && i.a.createElement(i.a.Fragment, null, e.widget.showWiki && i.a.createElement(ce, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, n) => i.a.createElement(I, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: n,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				c = e => {
					const t = Object(a.e)(o.e),
						n = Object(a.e)(o.a);
					return t || n ? r.a.createElement(d, e) : null
				}
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
				i = n("./node_modules/lodash/isEqual.js"),
				r = n.n(i),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/IdCard/DescriptionBlock/index.tsx"),
				b = n("./src/reddit/components/IdCard/DescriptionBlock/EditableDescriptionBlock.tsx"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/widgets.ts"),
				k = n("./src/reddit/components/CommunityChat/Sidebar/About/index.m.less"),
				v = n.n(k);
			var C = e => {
					let {
						subredditId: t
					} = e;
					const [n, i] = Object(a.useState)(!0), r = Object(d.e)(e => Object(f.X)(e, {
						subredditId: t
					})), c = Object(d.e)(e => Object(g.a)(e, {
						subredditId: t
					})), l = Object(d.e)(e => Object(x.d)(e, {
						subredditId: t
					})), u = Object(a.useMemo)(() => {
						var e;
						return null !== (e = null == l ? void 0 : l.description) && void 0 !== e ? e : ""
					}, [l]);
					return o.a.createElement("div", {
						className: v.a.container
					}, o.a.createElement("div", {
						className: v.a.aboutHeader
					}, o.a.createElement(h.a, {
						className: v.a.infoIcon,
						name: "info"
					}), o.a.createElement("span", {
						className: v.a.headerText
					}, s.fbt._("About", null, {
						hk: "3DwgcI"
					})), o.a.createElement("button", {
						className: v.a.expandButton,
						"aria-expanded": n,
						"aria-controls": "subreddit-about-content",
						"aria-label": s.fbt._("Expand or collapse subreddit description", null, {
							hk: "undzC"
						}),
						onClick: () => {
							i(!n)
						}
					}, o.a.createElement(h.a, {
						name: n ? "caret_up" : "caret_down"
					}))), o.a.createElement("div", {
						id: "subreddit-about-content",
						className: Object(m.a)(v.a.content, {
							[v.a.collapsed]: !n
						})
					}, l && (c ? o.a.createElement(b.a, {
						description: u,
						shouldTruncateDescription: !1,
						isCommentsPage: !1,
						subreddit: r
					}) : o.a.createElement(p.a, {
						description: u,
						shouldTruncateDescription: !1,
						subreddit: r
					}))))
				},
				y = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = n("./src/reddit/actions/communityChat/index.ts"),
				_ = n("./src/reddit/components/CommunityChat/constants.ts"),
				O = n("./node_modules/lodash/throttle.js"),
				w = n.n(O),
				j = n("./node_modules/matrix-js-sdk/lib/browser-index.js"),
				N = n("./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx"),
				S = n("./src/reddit/selectors/features/communityChat/index.ts");
			const I = _.a.VISITED__NO_NEW_ACTIVITY;
			var P = e => {
					const t = Object(N.b)(),
						[n, s] = Object(a.useState)(null),
						[i, r] = Object(a.useState)(!1),
						o = Object(d.e)(S.d) === e.id,
						c = Object(a.useMemo)(() => {
							var t;
							return decodeURIComponent(null !== (t = e.roomId) && void 0 !== t ? t : "")
						}, [e]),
						l = Object(a.useMemo)(() => !n, [n]);
					return Object(a.useEffect)(() => {
						if (!t) return;
						const e = () => {
							const e = t.getRoom(c);
							"join" === (null == e ? void 0 : e.getMyMembership()) && s(e)
						};
						return e(), t.on(j.ClientEvent.Sync, e), () => {
							t.off(j.ClientEvent.Sync, e)
						}
					}, [t, c]), Object(a.useEffect)(() => {
						if (!n) return;
						if (o) return r(!1);
						let e = !0;
						const t = w()(() => e && r(n.getUnreadNotificationCount() > 0), 2e3);
						return t(), n.on(j.RoomEvent.Timeline, t), n.on(j.RoomEvent.AccountData, t), () => {
							e = !1, n.off(j.RoomEvent.Timeline, t), n.off(j.RoomEvent.AccountData, t)
						}
					}, [n, o]), t ? l ? _.a.NEVER_VISITED : i ? _.a.VISITED__HAS_NEW_ACTIVITY : _.a.VISITED__NO_NEW_ACTIVITY : I
				},
				T = n("./src/reddit/icons/svgs/ChatBubbles/index.tsx");
			var R = e => e.isFilled ? o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M1.625 14.375V15C1.19419 14.9995 0.781168 14.8281 0.476536 14.5235C0.171904 14.2188 0.000529257 13.8058 0 13.375V1.624C0.000793729 1.19336 0.172285 0.780598 0.476889 0.476182C0.781492 0.171766 1.19436 0.000528638 1.625 0H13.375C13.8056 0.000528638 14.2185 0.171766 14.5231 0.476182C14.8277 0.780598 14.9992 1.19336 15 1.624H4.629C3.834 1.62611 3.07216 1.94286 2.51001 2.50501C1.94786 3.06716 1.63111 3.829 1.629 4.624L1.625 14.375ZM18 4.625V16.375C17.9995 16.8058 17.8281 17.2188 17.5235 17.5235C17.2188 17.8281 16.8058 17.9995 16.375 18H4.625C4.19419 17.9995 3.78117 17.8281 3.47654 17.5235C3.1719 17.2188 3.00053 16.8058 3 16.375V4.625C3.00053 4.19419 3.1719 3.78117 3.47654 3.47654C3.78117 3.1719 4.19419 3.00053 4.625 3H16.375C16.8058 3.00053 17.2188 3.1719 17.5235 3.47654C17.8281 3.78117 17.9995 4.19419 18 4.625ZM14 13H7V14.5H14V13ZM14 10H7V11.5H14V10ZM14 7H7V8.5H14V7Z"
				})) : o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M14 8.25H7V7H14V8.25ZM14 10H7V11.25H14V10ZM14 13H7V14.25H14V13ZM18 16.375V4.625C17.9995 4.19419 17.8281 3.78117 17.5235 3.47654C17.2188 3.1719 16.8058 3.00053 16.375 3H4.625C4.19419 3.00053 3.78117 3.1719 3.47654 3.47654C3.1719 3.78117 3.00053 4.19419 3 4.625V16.375C3.00053 16.8058 3.1719 17.2188 3.47654 17.5235C3.78117 17.8281 4.19419 17.9995 4.625 18H16.375C16.8058 17.9995 17.2188 17.8281 17.5235 17.5235C17.8281 17.2188 17.9995 16.8058 18 16.375ZM16.375 4.25C16.4745 4.25 16.5698 4.28951 16.6402 4.35984C16.7105 4.43016 16.75 4.52554 16.75 4.625V16.375C16.75 16.4745 16.7105 16.5698 16.6402 16.6402C16.5698 16.7105 16.4745 16.75 16.375 16.75H4.625C4.52554 16.75 4.43016 16.7105 4.35984 16.6402C4.28951 16.5698 4.25 16.4745 4.25 16.375V4.625C4.25 4.52554 4.28951 4.43016 4.35984 4.35984C4.43016 4.28951 4.52554 4.25 4.625 4.25H16.375ZM1.625 13.75C1.52554 13.75 1.43016 13.7105 1.35983 13.6402C1.28951 13.5698 1.25 13.4745 1.25 13.375V1.624C1.25026 1.52472 1.28989 1.42959 1.36019 1.35948C1.43049 1.28937 1.52572 1.25 1.625 1.25H13.375C13.4743 1.25 13.5695 1.28937 13.6398 1.35948C13.7101 1.42959 13.7497 1.52472 13.75 1.624H15C14.9992 1.19336 14.8277 0.780598 14.5231 0.476182C14.2185 0.171766 13.8056 0.000528638 13.375 0H1.625C1.19436 0.000528638 0.781492 0.171766 0.476889 0.476182C0.172285 0.780598 0.000793729 1.19336 0 1.624V13.375C0.000529257 13.8058 0.171904 14.2188 0.476536 14.5235C0.781168 14.8281 1.19419 14.9995 1.625 15V13.75Z"
				})),
				L = n("./src/reddit/components/CommunityChat/Sidebar/ListItem/index.m.less"),
				D = n.n(L),
				W = n("./src/reddit/components/CommunityChat/utils.ts");
			const B = e => {
					let {
						model: t,
						channelUiState: n,
						renderIcon: s
					} = e;
					const i = Object(d.d)(),
						r = Object(d.e)(S.d) === t.id,
						c = Object(a.useMemo)(() => Object(W.a)(t.id, t.name), [t]);
					return o.a.createElement(y.a, {
						className: Object(m.a)(D.a.listItem, {
							[D.a.greyBackground]: r
						}),
						to: c,
						onClick: () => {
							i(Object(E.f)(t.id))
						}
					}, o.a.createElement("div", {
						className: D.a.iconContainer
					}, s(r)), o.a.createElement("span", {
						className: Object(m.a)(D.a.name, {
							[D.a.light]: n === _.a.NEVER_VISITED,
							[D.a.bold]: n === _.a.VISITED__HAS_NEW_ACTIVITY
						})
					}, t.name))
				},
				M = e => {
					let {
						model: t
					} = e;
					const n = Object(a.useCallback)(e => o.a.createElement(R, {
						isFilled: e,
						className: D.a.postsIcon
					}), []);
					return o.a.createElement(B, {
						model: t,
						channelUiState: _.a.VISITED__NO_NEW_ACTIVITY,
						renderIcon: n
					})
				},
				F = e => {
					let {
						model: t
					} = e;
					const n = P(t),
						s = Object(a.useCallback)(e => o.a.createElement(T.a, {
							isFilled: e,
							className: Object(m.a)(D.a.chatBubblesIcon, {
								[D.a.light]: n === _.a.NEVER_VISITED
							})
						}), [n]);
					return o.a.createElement(B, {
						model: t,
						channelUiState: n,
						renderIcon: s
					})
				};
			var A = n("./src/reddit/components/CommunityChat/Sidebar/ListItem/placeholder.m.less"),
				H = n.n(A);
			var U = () => o.a.createElement("div", {
					className: H.a.container
				}, o.a.createElement("div", {
					className: Object(m.a)(H.a.icon, H.a.shimmer)
				}), o.a.createElement("div", {
					className: Object(m.a)(H.a.content, H.a.shimmer)
				})),
				V = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				G = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				q = n("./src/reddit/models/CommunityChat/index.ts"),
				K = n("./src/reddit/components/CommunityChat/Sidebar/ChannelsList/index.m.less"),
				z = n.n(K);
			const Z = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(U, null), o.a.createElement(U, null), o.a.createElement(U, null)),
				J = e => {
					switch (e.__typename) {
						case q.a.SubredditPostChannel:
							return o.a.createElement(M, {
								key: e.id,
								model: e
							});
						case q.a.SubredditChatChannel:
							return o.a.createElement(F, {
								key: e.id,
								model: e
							});
						default:
							return null
					}
				};
			var Y = e => {
					let {
						subredditId: t
					} = e;
					const [n, i] = Object(a.useState)(!1), r = Object(d.e)(e => Object(S.e)(e, t)), c = Object(a.useMemo)(() => r.length - 5, [r]), l = Object(a.useMemo)(() => {
						const e = s.fbt._("{number of hidden channels in community chat sidebar} more", [s.fbt._param("number of hidden channels in community chat sidebar", c.toString())], {
								hk: "4cTN8u"
							}),
							t = s.fbt._("See Less", null, {
								hk: "24SRwO"
							});
						return n ? t : e
					}, [n, c]), u = Object(a.useMemo)(() => {
						const e = r.slice(0, 5);
						return n ? r : e
					}, [n, r]);
					return u.length ? o.a.createElement(o.a.Fragment, null, u.map(J), c > 0 && o.a.createElement("div", {
						className: z.a.more,
						onClick: () => {
							i(!n)
						}
					}, o.a.createElement("span", {
						className: z.a.moreText
					}, l), n ? o.a.createElement(G.a, {
						className: z.a.chevronIcon
					}) : o.a.createElement(V.a, {
						className: z.a.chevronIcon
					}))) : o.a.createElement(Z, null)
				},
				X = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Q = n("./src/reddit/components/CommunityChat/Sidebar/index.m.less"),
				$ = n.n(Q);
			var ee = e => {
					let {
						subredditId: t
					} = e;
					return o.a.createElement(X.a, {
						className: $.a.sidebar,
						contentOnly: !0,
						redditStyle: !0
					}, o.a.createElement(C, {
						subredditId: t
					}), o.a.createElement(Y, {
						subredditId: t
					}))
				},
				te = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/async.ts"),
				ne = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				se = n("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				ie = n("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				re = n("./src/reddit/components/IdCard/async.tsx"),
				ae = n("./src/lib/isFakeSubreddit/index.ts"),
				oe = n("./src/reddit/components/IdCard/helpers.ts"),
				de = e => !Object(ae.a)(e) || Object(oe.e)(e) || Object(oe.f)(e) || Object(oe.g)(e),
				ce = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				le = n("./src/reddit/components/ModProgressModule/async.tsx"),
				ue = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				me = n("./src/reddit/components/SidebarContainer/index.tsx"),
				pe = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				be = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				he = n("./src/lib/makeListingKey/index.ts"),
				ge = n("./src/reddit/actions/subreddit.ts"),
				fe = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				xe = n("./src/reddit/controls/Button/index.tsx"),
				ke = n("./src/reddit/helpers/name/index.ts"),
				ve = n("./src/reddit/helpers/overlay/index.ts"),
				Ce = n("./src/reddit/selectors/experiments/topPosts.ts"),
				ye = n("./src/reddit/selectors/posts.ts"),
				Ee = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const _e = .99;
			class Oe extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: n
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= _e && t(n)
					}
				}
				render() {
					return o.a.createElement(Ee.a, {
						threshold: _e,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var we = Oe,
				je = n("./src/lib/isUrl/index.ts"),
				Ne = n("./src/lib/prettyPrintNumber/index.ts"),
				Se = n("./src/reddit/components/FlairWrapper/index.tsx"),
				Ie = n("./src/reddit/components/Thumbnail/index.tsx"),
				Pe = n("./src/reddit/models/Flair/index.ts"),
				Te = n("./src/reddit/models/Subreddit/index.ts"),
				Re = n("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				Le = n.n(Re);
			const {
				fbt: De
			} = n("./node_modules/fbt/lib/FbtPublic.js"), We = e => e.type === Pe.f.Nsfw || e.type === Pe.f.Spoiler, Be = Object(c.c)({
				post: ye.F,
				subredditOrProfile: ye.U
			});
			class Me extends o.a.PureComponent {
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
						subredditOrProfile: i
					} = this.props, r = {
						post: t
					}, a = Object(je.a)(Object(Ie.c)(r)), d = t.flair.filter(We);
					return o.a.createElement("div", {
						className: Object(m.a)(Le.a.container, e, {
							[Le.a.redditStyle]: n
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: Le.a.mainLine
					}, a && o.a.createElement("div", {
						className: Le.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(Ie.b, r)), o.a.createElement("div", {
						className: Object(m.a)(Le.a.title, !a && Le.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(Se.a, {
						className: Le.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t
					}), t.title)), o.a.createElement("div", {
						className: Le.a.metaLine
					}, s && !!i && o.a.createElement("span", {
						className: Le.a.meta
					}, Object(Te.i)(i) ? Object(ke.e)(i.displayText || i.name) : Object(ke.d)(i.displayText || i.name)), o.a.createElement("span", {
						className: Le.a.meta
					}, De._({
						"*": "{score} points",
						_1: "1 point"
					}, [De._plural(t.score, "score", Object(Ne.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: Le.a.meta
					}, De._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [De._plural(t.numComments, "numComments", Object(Ne.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Fe = Object(d.b)(Be, e => ({
					openLightbox: t => e(Object(ve.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Me),
				Ae = n("./src/reddit/components/SidebarPostList/index.m.less"),
				He = n.n(Ae);
			const {
				fbt: Ue
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ve = 10, Ge = 2, qe = Object(c.a)(ye.M, e => e.filter(e => !e.isSponsored)), Ke = Object(c.c)({
				posts: (e, t) => qe(e, {
					...t
				})
			});
			class ze extends o.a.Component {
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
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || Ve, this.showMorePosts = () => {
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
							redditStyle: i,
							smallPostClassName: r
						} = this.props;
						return o.a.createElement(we, {
							key: e.id,
							onPostVisible: s,
							postId: e.id
						}, o.a.createElement(Fe, {
							className: Object(m.a)(He.a.smallPost, r),
							containerOnClick: n,
							postId: e.id,
							redditStyle: i,
							showSubredditName: Object(ae.a)(Object(ke.i)(t)),
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
						p = Object(Ce.a)(c),
						b = Object(Ce.b)(c),
						h = p || b,
						g = r.slice(l * u, (l + 1) * u),
						[f, ...x] = g,
						k = h ? g.slice(0, Ge) : x.slice(0, Ge),
						v = h ? g.slice(Ge) : x.slice(Ge);
					return o.a.createElement("div", {
						className: Object(m.a)(He.a.container, t, {
							[He.a.redditStyle]: a
						})
					}, !h && o.a.createElement(we, {
						onPostVisible: i,
						postId: f.id
					}, o.a.createElement(fe.a, {
						postId: f.id,
						backgroundWrapperClassName: He.a.largePostBackgroundWrapper,
						descriptionClassName: He.a.largePostDescription,
						innerContainerClassName: He.a.largePostInnerContainer,
						"data-redditstyle": a,
						onPostClick: this.openLargePost,
						showSubredditMeta: !1,
						showSubredditName: Object(ae.a)(Object(ke.i)(n)),
						trendingPost: f
					})), k.map(this.renderSmallPost), e, v.map(this.renderSmallPost), d && o.a.createElement(xe.r, {
						className: He.a.SeeMore,
						onClick: this.showMorePosts
					}, s || Ue._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var Ze = Object(d.b)(Ke, e => ({
					openPost: t => e(Object(ve.a)(t.permalink))
				}))(ze),
				Je = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Ye = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Xe = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				Qe = n("./src/reddit/selectors/discoveryUnit.ts"),
				$e = n("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				et = n.n($e);
			const tt = 10,
				nt = Object(c.a)((e, t) => t.subredditName, e => Object(he.a)(e, l.cb.TOP, {
					t: l.oc.WEEK
				})),
				st = Object(c.c)({
					discoveryUnit: e => Object(Qe.b)(e, {
						unitName: Xe.i
					}),
					listingKey: nt,
					posts: (e, t) => {
						const n = nt(e, t);
						return Object(ye.M)(e, {
							listingKey: n
						})
					},
					subreddit: f.C
				});
			class it extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(Ye.b)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Ye.k)(t, e, void 0, n))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: n
						} = this.props;
						t && this.props.sendEvent(Object(Ye.n)(t, e, void 0, n))
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
						loadMorePosts: i,
						posts: r,
						subredditName: a,
						topPostsVariant: d
					} = this.props;
					if (0 === r.length) return null;
					const c = a,
						l = r.length > tt;
					return o.a.createElement(X.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: s.fbt._("Top posts this week", null, {
							hk: "2fRgOZ"
						})
					}, o.a.createElement(Ze, {
						listingKey: n,
						listingName: c,
						onShowMoreClick: i,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: et.a.smallPost,
						showMoreButton: l,
						topPostsVariant: d
					}, o.a.createElement("div", null, e)))
				}
			}
			var rt = Object(d.b)(st, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						loadMorePosts: () => e(Object(ge.r)({
							sort: l.cb.TOP,
							subredditName: n,
							t: l.oc.WEEK
						}))
					}
				})(Object(Je.c)(it)),
				at = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				ot = n("./src/reddit/constants/tracking.ts"),
				dt = n("./src/reddit/selectors/seo/linksModule.ts"),
				ct = n("./src/reddit/selectors/telemetry.ts"),
				lt = n("./src/telemetry/models/Subreddit.ts");
			const ut = e => t => ({
					...ct.o(t),
					action: ot.c.CLICK,
					noun: "link",
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				mt = e => t => n => ({
					...ct.o(n),
					action: ot.c.CLICK,
					noun: Object(lt.getSubscribeEventNoun)(e.type, t),
					source: "subreddit_subreddit_link",
					subreddit: {
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				pt = Object(c.c)({
					communities: dt.c
				});
			var bt = Object(d.b)(pt)(e => {
					const t = Object(Je.b)();
					return e.communities && e.communities.length ? o.a.createElement(pe.a, null, o.a.createElement(at.b, {
						className: e.className,
						communities: e.communities,
						getClickEventFactory: ut,
						getSubscribeEventFactoryHandler: mt,
						sendEvent: t,
						title: s.fbt._("Related Communities", null, {
							hk: "kjl4o"
						})
					})) : null
				}),
				ht = n("./src/reddit/components/Widgets/Widget/index.tsx"),
				gt = n("./src/reddit/constants/experiments.ts"),
				ft = n("./src/reddit/featureFlags/index.ts"),
				xt = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				kt = n("./src/reddit/models/Widgets/index.ts"),
				vt = n("./src/reddit/selectors/communityFlairs.ts"),
				Ct = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				yt = n("./src/reddit/selectors/listings.ts"),
				Et = n("./src/reddit/selectors/experiments/communityChat.ts"),
				_t = n("./src/reddit/components/SubredditSidebar/index.m.less"),
				Ot = n.n(_t);
			const wt = 250,
				jt = 270,
				Nt = u.a.wrapped(me.a, "SidebarContainer", Ot.a),
				St = Object(c.c)({
					apiError: yt.c,
					apiPending: yt.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(vt.b)(e, n)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(vt.c)(e, n)
					},
					isInNewModuleNCPV3Experiment: e => Object(Ct.a)(e) === gt.Ye.NewModule,
					showCommunityChat: Et.d,
					showGovernance: ft.d.spPoints,
					showLeaderboard: ft.d.spLeaderboard,
					showPredictionsLeaderboard: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(f.R)(e, {
							subredditId: n
						}) && !Object(f.S)(e, {
							subredditId: n
						})
					},
					widgets: f.x
				}),
				It = Object(d.b)(St);
			class Pt extends a.Component {
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
							kind: kt.i.CommunityList,
							shortName: s.fbt._("Related Communities", null, {
								hk: "FmqaL"
							}),
							data: n
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys && this.props.communityFlairSortedKeys.length) return {
							...this.getPostFlairWidget(),
							id: "post-flair-widget",
							kind: kt.i.PostFlair,
							order: this.props.communityFlairSortedKeys,
							display: kt.g.Cloud,
							shortName: s.fbt._("Filter by flair", null, {
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
					} = this.props, n = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || n
				}
				render() {
					const {
						className: e,
						listingName: t,
						isInNewModuleNCPV3Experiment: n,
						showCommunityChat: s,
						showGovernance: i,
						showLeaderboard: r,
						showPredictionsLeaderboard: a,
						subredditId: d,
						subredditName: c,
						topPostsVariant: u
					} = this.props;
					let m = 0;
					const p = Object(Ce.a)(u),
						b = Object(Ce.b)(u),
						h = Object(Ce.c)(u),
						g = p || b;
					let f, x;
					!!this.getPostFlairWidget() ? f = this.props.widgets : (f = this.getCommunityWidgets(), x = this.makeFlairFilterWidget());
					const k = this.makeRelatedCommunitiesWidget(p, b),
						v = !p,
						C = b,
						y = o.a.createElement(ue.a, {
							placement: l.e.ABOVE_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: xt.a.FIRST,
							sizes: l.j
						});
					return o.a.createElement(Nt, {
						className: e,
						"data-testid": "subreddit-sidebar"
					}, n && o.a.createElement(le.a, {
						subredditId: d,
						subredditName: c
					}), de(t) && !s && o.a.createElement(re.a, {
						listingName: t
					}), s && o.a.createElement(ee, {
						subredditId: d
					}), o.a.createElement(ne.a, {
						cardClassName: Ot.a.card,
						subredditId: d
					}), a && o.a.createElement(te.a, {
						subredditId: d
					}), g && o.a.createElement(pe.a, null, o.a.createElement(rt, {
						subredditName: c,
						topPostsVariant: u
					}, o.a.createElement("div", {
						className: Ot.a.inFeedAd
					}, y))), g && k && o.a.createElement(pe.a, null, o.a.createElement(ht.a, {
						subredditName: c,
						truncateThreshold: jt,
						widget: k
					})), C && f.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(pe.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(ht.a, {
							subredditName: c,
							truncateThreshold: wt,
							widget: e
						}))
					}), i && o.a.createElement(se.a, {
						className: Ot.a.card,
						subredditId: d
					}), x && o.a.createElement(pe.a, null, o.a.createElement(ht.a, {
						subredditName: c,
						widget: x
					})), r && o.a.createElement(ie.a, {
						className: Ot.a.card,
						subredditId: d,
						uniqueId: d
					}), o.a.createElement(ce.g, {
						subredditId: d
					}), !g && y, o.a.createElement(bt, {
						subredditId: d
					}), v && !C && f.map((e, t) => {
						const n = "community-list" === e.kind;
						return o.a.createElement(pe.a, {
							key: `widgetSpacer${t}`
						}, o.a.createElement(ht.a, {
							subredditName: c,
							truncateThreshold: h && n ? jt : h ? wt : void 0,
							widget: e
						}))
					}), o.a.createElement(be.a, {
						adComponent: o.a.createElement(ue.a, {
							placement: l.e.BELOW_THE_FOLD,
							listingName: t,
							placementIndex: m++,
							position: xt.a.BOTTOM,
							sizes: l.q
						})
					}))
				}
			}
			t.a = It(Pt)
		},
		"./src/reddit/components/SubredditUnsavedChangesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const m = "subreddit-unsaved-changes-modal",
				p = Object(a.b)(null, (e, t) => ({
					closeModal: () => e(Object(d.g)(t.modalId || m))
				}));
			class b extends r.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.onDiscard(), this.props.closeModal()
					}, this.onCancelClick = () => {
						this.props.onCancel(), this.props.closeModal()
					}, this.onSaveClick = () => {
						this.props.onSave(), this.props.closeModal()
					}
				}
				render() {
					return r.a.createElement(c.e, null, r.a.createElement(c.i, null, r.a.createElement(u.a, null, r.a.createElement(c.q, null, s.fbt._("Save changes before leaving?", null, {
						hk: "34wJXL"
					})), r.a.createElement(l.a, {
						onClick: this.onCancelClick
					}, r.a.createElement(c.b, null)))), r.a.createElement(c.l, null, r.a.createElement(c.p, null, s.fbt._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "2SOiAP"
					}))), r.a.createElement(c.g, null, r.a.createElement(c.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, s.fbt._("Discard", null, {
						hk: "ViASy"
					})), r.a.createElement(c.r, {
						onClick: this.onSaveClick,
						"data-redditstyle": !0
					}, s.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			t.b = Object(o.a)(p(b))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, n) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				o = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(o);
			const c = r.a.div("WidgetBackground", d.a),
				l = r.a.wrapped(e => {
					let {
						children: t,
						...n
					} = e;
					return i.a.createElement("div", n, i.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => i.a.createElement("div", {
				className: e.className
			}, i.a.createElement(c, null, e.children))
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
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			})), n.d(t, "a", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				v = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = n.n(E);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => r.a.createElement(b.a, {
					className: Object(c.a)(_.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(N, O({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(g.t, {
					className: _.a.bottomButton,
					kind: g.b.Button,
					priority: g.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(d.c)({
					hideNSFWPref: C.H,
					nightmode: C.fb
				}),
				N = Object(a.b)(j)(e => r.a.createElement("div", {
					className: Object(c.a)(_.a.communityItemContainer, {
						[_.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(k.a, {
					className: _.a.communityItemExpandCenter,
					widthRight: h.s
				}, r.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(x.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(_.a.defaultCommunityIcon, {
						[_.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, r.a.createElement(o.a, {
					className: _.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(y.b)(e.name, e.type),
					to: Object(y.a)(e.name, e.type)
				}, Object(y.b)(e.name, e.type)), r.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: _.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.c, {
					className: _.a.nsfwFlair,
					flair: {
						type: v.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(f.a, {
					className: Object(c.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(g.t, {
					className: _.a.communityCta,
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
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				i = n("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === s.a.PROFILE ? Object(i.e)(e) : Object(i.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
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
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				MessageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF",
				messageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF"
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
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
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/flair.ts"),
				k = n("./src/reddit/helpers/trackers/postFlair.ts"),
				v = n("./src/reddit/models/Widgets/index.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = n.n(y);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 129,
				w = Object(h.v)({
					filterName: e => Object(h.Z)(e)[b.j],
					url: e => Object(h.hb)(e)
				}),
				j = Object(o.c)({
					subredditId: (e, t) => Object(C.I)(e, t.subredditName)
				}),
				N = Object(a.b)(j),
				S = l.a.div("WidgetContent", E.a),
				I = e => {
					let {
						display: t,
						isFlairFilter: n,
						onMouseDown: s,
						onClick: i,
						...a
					} = e;
					return r.a.createElement("li", {
						className: Object(d.a)(E.a.StyledFlair, t === v.g.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: n,
							[E.a["m-selected"]]: a.isSelected
						}),
						onClick: () => null == i ? void 0 : i(Object(x.g)(a.flair)),
						onMouseDown: s
					}, r.a.createElement(u.c, _({}, a, {
						className: E.a.Flair,
						isFlairFilter: n,
						forceSmallEmojis: !0
					})))
				};
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(k.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(k.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(k.d)())
					}, this.onClickFlair = e => {
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
						e && e > O && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(g.r, {
						className: E.a.flairFilterButton,
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
					return r.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => r.a.createElement(I, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? O : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
						className: E.a.flairFilterContainer,
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
					return r.a.createElement("ul", null, r.a.createElement(I, {
						key: e.templateId,
						display: n.display,
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
						hasOverflow: n
					} = this.state, s = t.order, i = this.getFlairsFromIds(s), a = e && this.getSelectedFlair(i) || void 0, o = t.order.length > s.length || n && !a;
					return r.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, r.a.createElement(S, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(i), o && this.renderButton()))
				}
			}
			t.a = w(N(Object(m.c)(P)))
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
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
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
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				h = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = n.n(h);
			const f = d.a.div("RuleShortName", g.a),
				x = d.a.div("RuleIndex", g.a),
				k = d.a.div("RuleTitle", g.a),
				v = d.a.div("RuleDescription", g.a),
				C = d.a.wrapped(c.a, "RawHTMLDisplay", g.a),
				y = {};
			class E extends r.a.Component {
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
					return e.display === b.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: s
					} = this, i = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !s(e) && !!i;
					return r.a.createElement(f, {
						className: Object(o.a)({
							[g.a.pointerCursor]: a,
							[g.a.cleanStyle]: e.cleanStyle
						}),
						onClick: s(e) || !i ? void 0 : n
					}, r.a.createElement(p.a, null, r.a.createElement(x, {
						className: Object(o.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), r.a.createElement(k, null, `${e.rule.shortName}`), r.a.createElement("div", null, !s(e) && i && r.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && r.a.createElement(v, {
						className: Object(o.a)({
							[g.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? r.a.createElement(l.b, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: y
					}) : e.rule.descriptionHtml ? r.a.createElement(C, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const _ = e => e.rules.length > 0 ? r.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: s.fbt._("{subredditName} Rules", [s.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return r.a.createElement(E, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => r.a.createElement(_, {
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
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = v(e);
					return Object(x.f)(t)
				},
				E = e => {
					const t = C(e);
					return Object(x.f)(t)
				};
			var _ = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				O = n.n(_);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.v)(), N = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.o)(e, t) || void 0,
						s = t.redditStyle || Object(g.l)(e, {
							subredditId: n
						}),
						i = Object(f.fb)(e);
					return s || i
				},
				nigtmode: f.fb,
				subredditId: u.o,
				topPostVariant: h.d
			}));
			class S extends i.a.Component {
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: r,
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? O.a.widgetContentOnly : O.a.widgetContent, g = !s && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, x = g ? this.getWidgetHeaderStyles() : {};
					return i.a.createElement("div", {
						className: Object(o.a)(t, O.a.widgetBackground, {
							[O.a.redditStyle]: s,
							[O.a.clickable]: !!d,
							[O.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: f
					}, u && i.a.createElement("div", {
						className: Object(o.a)(O.a.widgetHeader, {
							[O.a.clickable]: !!l
						}),
						id: a,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, i.a.createElement("div", {
						className: Object(o.a)(O.a.widgetTitle, p)
					}, i.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), r), i.a.createElement("div", {
						className: Object(o.a)(h, {
							[O.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && i.a.createElement(m.r, {
						className: O.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(N(Object(d.a)(Object(l.c)(S))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Be
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/linkMatchers/index.ts"),
				b = n("./src/reddit/helpers/widgets/index.tsx"),
				h = n("./src/reddit/models/Image/index.tsx"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/selectors/structuredStyles.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				v = n("./src/telemetry/models/Outbound.ts"),
				C = n("./src/reddit/components/Widgets/Button/index.m.less"),
				y = n.n(C);
			const E = (e, t, n) => {
					let s = {},
						i = {};
					s = e.kind === f.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, n) => {
						let {
							color: s,
							fillColor: i,
							textColor: r
						} = e;
						return t && (s = r = n, i = "transparent"), {
							"--widget-button-background-color": `${i||"transparent"}`,
							"--widget-button-border": `1px solid ${s}`,
							"--widget-button-color": `${r||s}`
						}
					})(e, t, n);
					const r = e.hoverState || e;
					if (r.kind === f.k.Image) i = {
						"--widget-button-hover-background-image": `url('${r.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: s,
							textColor: a
						} = r;
						t && (e = a = n, s = "transparent"), i = {
							"--widget-button-hover-background-color": `${s||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...s,
						...i
					}
				},
				_ = e => e.kind === f.k.Image ? y.a.imageButton : y.a.textButton,
				O = e => {
					const t = Object(b.h)(e),
						n = Object(p.h)(p.f, t);
					return n ? n.url : e.url
				},
				w = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: n
					} = e, s = Object(g.a)(e).button;
					return i.a.createElement(c.t, {
						className: _(t),
						style: E(t, n, s),
						isFullWidth: !0,
						size: c.d.S,
						priority: c.c.Secondary
					}, t.kind === f.k.Text && i.a.createElement("span", {
						className: t.hoverState ? y.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === f.k.Text && i.a.createElement("span", {
						className: y.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => i.a.createElement(l.b, {
					href: O(e.button),
					sourceElement: v.SourceElement.SidebarWidget
				}, i.a.createElement(w, e)),
				N = m.a.wrapped(o.a, "RawHTMLDisplay", y.a);
			var S = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: x.l,
					isNightmodeOn: k.fb
				}))(e => i.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && i.a.createElement(N, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== f.k.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== f.k.Image || e.hoverState.url !== h.c)).map(t => i.a.createElement(j, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = n("./node_modules/fbt/lib/FbtPublic.js"),
				P = n("./src/reddit/components/HumanDate/index.tsx"),
				T = n("./src/reddit/controls/TextButton/index.tsx"),
				R = n("./src/reddit/components/Widgets/Calendar/index.m.less"),
				L = n.n(R);
			const D = 100,
				W = {
					isExpanded: !1
				},
				B = m.a.wrapped(o.a, "RawHTMLDisplay", L.a),
				M = m.a.div("EventContainer", L.a),
				F = m.a.div("EventTitle", L.a),
				A = m.a.div("EventDate", L.a),
				H = m.a.div("EventLocation", L.a),
				U = m.a.div("EventDescription", L.a),
				V = m.a.wrapped(T.a, "ToggleDescription", L.a);
			class G extends i.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = W
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > D ? i.a.createElement(U, null, t.isExpanded ? e.text : e.text.slice(0, D), i.a.createElement(V, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : i.a.createElement(U, null, e.text)
				}
			}
			var q = e => i.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, n) => i.a.createElement(M, {
					key: `${n}-${t.title}`
				}, i.a.createElement(F, null, t.titleHtml ? i.a.createElement(B, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && i.a.createElement(A, null, i.a.createElement(P.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && i.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						n = t.getHours(),
						s = t.getMinutes();
					return s < 10 ? `${n}:0${s}` : `${n}:${s}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && i.a.createElement(H, null, t.locationHtml ? i.a.createElement(B, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && i.a.createElement(G, {
					text: t.description
				})))),
				K = n("./src/reddit/components/TrackingHelper/index.tsx"),
				z = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var Z = Object(K.c)(e => i.a.createElement(z.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const J = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Y = Object(r.b)(J),
				X = (e, t, n) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${n}</body>`;
			class Q extends i.a.Component {
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
				UNSAFE_componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = X(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, i.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var $ = Y(Q),
				ee = n("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = n.n(ee);
			var ne = m.a.div("ImageFrame", te.a),
				se = n("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ie = n.n(se);
			var re = m.a.img("StyledImage", ie.a);
			class ae extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
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
						s = i.a.createElement(ne, null, i.a.createElement(re, {
							alt: I.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: n.url
						}));
					return n.linkUrl ? i.a.createElement(l.b, {
						href: n.linkUrl
					}, s) : s
				}
			}
			var oe = ae,
				de = n("./src/config.ts"),
				ce = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				le = n("./src/lib/opener/index.ts"),
				ue = n("./src/reddit/components/Flair/index.tsx"),
				me = n("./src/reddit/controls/InternalLink/index.tsx"),
				pe = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				be = n("./src/reddit/models/Flair/index.ts"),
				he = n("./src/reddit/selectors/subreddit.ts"),
				ge = n("./src/reddit/components/Widgets/Moderator/index.m.less"),
				fe = n.n(ge);
			const xe = m.a.a("ExternalLink", fe.a),
				ke = m.a.div("ModeratorListItem", fe.a),
				ve = m.a.div("Username", fe.a),
				Ce = m.a.wrapped(ue.c, "FlairComponent", fe.a),
				ye = e => e.authorFlairType === be.f.Richtext ? {
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
				Ee = e => i.a.createElement(ve, null, `u/${e}`),
				_e = m.a.wrapped(me.default, "InternalLink", fe.a),
				Oe = m.a.div("LinkContainer", fe.a),
				we = Object(a.c)({
					userIsBanned: he.hb,
					userIsLoggedIn: k.S
				});
			var je = Object(r.b)(we)(e => {
					const {
						subredditName: t,
						widget: n,
						userIsBanned: s,
						userIsLoggedIn: r
					} = e;
					return i.a.createElement(d.a, {
						styles: n.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (n.mods && n.mods.length || s) && i.a.createElement(c.t, {
						kind: c.b.InternalLink,
						priority: c.c.Secondary,
						className: fe.a.MessageModsButton,
						rel: le.c,
						target: le.d.BLANK,
						to: `${de.a.redditUrl}/message/compose?to=/r/${t}`
					}, i.a.createElement(pe.a, {
						className: fe.a.MessageModsButtonIcon
					}), I.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), n.mods && n.mods.length && !s ? i.a.createElement(i.a.Fragment, null, n.mods.map(e => i.a.createElement(ke, {
						key: e.name
					}, (e => i.a.createElement(ce.a, {
						to: `/user/${e.name}/`
					}, Ee(e.name)))(e), i.a.createElement(Ce, {
						flair: ye(e),
						forceSmallEmojis: !0
					}))), i.a.createElement(Oe, null, i.a.createElement(_e, {
						to: `/r/${t}/about/moderators/`
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : s || !r ? i.a.createElement("div", {
						className: fe.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", i.a.createElement(xe, {
						href: `${de.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : i.a.createElement("div", {
						className: fe.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", i.a.createElement(xe, {
						href: `${de.a.redditUrl}/r/redditrequest`,
						rel: le.c,
						target: le.d.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ne = n("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Se = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = n("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Pe = n.n(Ie);
			const Te = m.a.div("WidgetContent", Pe.a),
				Re = m.a.wrapped(o.a, "RawHTMLDisplay", Pe.a);
			var Le = e => i.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, i.a.createElement(Te, null, i.a.createElement(Re, {
					html: e.widget.textHtml || ""
				}))),
				De = n("./src/reddit/components/Widgets/Base/index.tsx");
			var We = e => i.a.createElement(De.b, null, "This widget hasn't been implemented yet!");

			function Be(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
						case "textarea":
							return Le;
						case "button":
							return S;
						case "subreddit-rules":
							return Se.b;
						case "community-list":
							return Z;
						case "calendar":
							return q;
						case "image":
							return oe;
						case "custom":
							return $;
						case "post-flair":
							return Ne.a;
						default:
							return We
					}
				}(e.widget);
				return i.a.createElement(t, {
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
		"./src/reddit/components/Wiki/RevisionsHistory/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Wiki/RevisionsHistory/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return $
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = n("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				f = n("./src/lib/addQueryParams/index.ts"),
				x = n("./src/reddit/constants/parameters.ts"),
				k = n("./src/reddit/helpers/wiki/wikiRevision.ts");

			function v(e, t) {
				const {
					revision: n,
					revisionToCompare: s
				} = t;
				if (!n && !s) return e;
				const i = {};
				n && (i[x.M] = Object(k.b)(n)), s && (i[x.N] = Object(k.b)(s));
				const r = e.endsWith("/") ? e : `${e}/`;
				return Object(f.a)(r, i)
			}
			var C = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				y = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				E = n("./src/reddit/selectors/activeModalId.ts"),
				_ = n("./src/reddit/selectors/moderatorPermissions.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/subredditWiki.ts"),
				j = n("./node_modules/lodash/times.js"),
				N = n.n(j),
				S = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				I = n("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				P = n.n(I);
			var T = () => {
					const e = i.createElement("div", {
						className: Object(d.a)(P.a.loadingShimmer, Object(S.b)({
							isLoading: !0
						}))
					});
					return i.createElement("div", null, N()(4, t => i.createElement("div", {
						key: t,
						className: P.a.loadingRow
					}, e)))
				},
				R = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
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
			var D = n("./node_modules/lodash/noop.js"),
				W = n.n(D),
				B = n("./src/reddit/components/AuthorLink/index.tsx"),
				M = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				F = n("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				A = n("./src/reddit/controls/Checkbox/index.tsx"),
				H = n("./src/reddit/controls/InternalLink/index.tsx"),
				U = n("./node_modules/lodash/forEach.js"),
				V = n.n(U),
				G = n("./src/lib/fastdom/index.ts");

			function q(e) {
				G.a.read(() => {
					V()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								n = e.parentElement,
								s = "true" === n.dataset.textOverflow;
							t !== s && G.a.write(() => {
								n.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const K = Object(o.c)({
				revision: w.n
			});
			class z extends r.a.Component {
				constructor() {
					super(...arguments), this.reasonElementRef = r.a.createRef(), this.state = {}, this.onToggleHiddenClick = async () => {
						const {
							revision: e,
							revisionId: t,
							subredditName: n
						} = this.props, s = e.isHidden;
						this.props.sendEvent(Object(g.l)(s)), this.setState({
							isHideRequestPending: !0
						}), await this.props.toggleIsHidden({
							revisionId: t,
							subredditName: n,
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
					this.reasonElementRef.current && q([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: n,
						isRecentRevisionMode: i,
						revision: a,
						subredditName: o
					} = this.props, c = a.page.name, l = a.isHidden, {
						expanded: u
					} = this.state, m = a.authorInfo && a.authorInfo.name, p = Object(y.a)({
						subredditName: o,
						wikiPageName: c
					}, n), b = v(p, {
						revision: a.id
					}), g = !i && e, f = c.split("/").slice(-1)[0];
					return r.a.createElement("tr", {
						className: Object(d.a)(P.a.row, l ? P.a.mHidden : null)
					}, !i && r.a.createElement("td", {
						className: P.a.cellCheckbox
					}, r.a.createElement(A.a, {
						className: P.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), r.a.createElement("td", {
						className: P.a.cellTime
					}, Object(F.b)(a)), i && r.a.createElement("td", {
						className: P.a.cellPage
					}, r.a.createElement(H.default, {
						className: P.a.wikiPageLink,
						title: `/${c}`,
						to: p
					}, f)), r.a.createElement("td", {
						className: P.a.cellUser
					}, m && r.a.createElement(M.a, {
						sendHoverCardEvent: W.a,
						tooltipId: `revision-${a.id}`,
						user: m
					}, r.a.createElement(B.a, {
						author: m,
						className: P.a.usernameLink
					}, m))), r.a.createElement("td", {
						className: P.a.cellReason
					}, r.a.createElement("div", {
						className: Object(d.a)(P.a.reasonTextWrapper, u ? P.a.mExpanded : null)
					}, r.a.createElement("div", {
						ref: this.reasonElementRef,
						className: P.a.reasonText
					}, a.reason), !u && r.a.createElement(h.i, {
						className: P.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, s.fbt._("more", null, {
						hk: "2IGYPS"
					})))), r.a.createElement("td", null, r.a.createElement("div", {
						className: P.a.buttons
					}, r.a.createElement(h.s, {
						className: P.a.viewButton,
						onClick: this.onViewClick,
						to: b
					}, s.fbt._("View", null, {
						hk: "4imNnh"
					})), g && r.a.createElement(r.a.Fragment, null, r.a.createElement(h.r, {
						className: P.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, l ? s.fbt._("Show", null, {
						hk: "3YKyhU"
					}) : s.fbt._("Hide", null, {
						hk: "30nwHP"
					})), r.a.createElement(h.r, {
						className: P.a.revertButton,
						onClick: this.onRevertClick
					}, s.fbt._("Revert", null, {
						hk: "5mbFS"
					}))))))
				}
			}
			var Z = Object(a.b)(K, e => ({
				toggleIsHidden: t => e(Object(l.b)(t))
			}))(z);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Y = Object(o.c)({
				hasError: w.o,
				hasWikiModPerms: (e, t) => {
					const n = Object(O.C)(e, t);
					return !!n && Object(_.j)(e, {
						subredditId: n.id
					})
				},
				isPending: w.q,
				isRevertConfirmationModalOpen: Object(E.b)("wiki-revert-confirmation"),
				listingInfo: w.p
			});
			class X extends r.a.Component {
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
							q(e.getElementsByClassName(P.a.reasonText))
						}(this.containerRef.current)
					}, this.onLoadMore = () => {
						this.props.onLoadMoreRevisions()
					}, this.onCheckboxToggle = e => {
						const {
							listingInfo: t
						} = this.props, n = t && t.ids || [];
						this.setState(t => {
							let s = t.selectedRevisions;
							return 2 === (s = s.includes(e) ? s.filter(t => t !== e) : s.length < 2 ? [...s, e] : [e]).length && n.indexOf(s[0]) < n.indexOf(s[1]) && s.reverse(), {
								selectedRevisions: s
							}
						})
					}, this.renderRowItem = (e, t) => {
						const {
							hasWikiModPerms: n,
							subredditName: s
						} = this.props, {
							selectedRevisions: i
						} = this.state;
						return r.a.createElement(Z, {
							key: e,
							hasWikiModPerms: n,
							isCheckboxSelected: i.includes(e),
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
						isModHub: n,
						isPending: i,
						isRecentRevisionsMode: a,
						isRevertConfirmationModalOpen: o,
						listingInfo: c,
						subredditName: l,
						wikiPageName: p
					} = this.props, {
						selectedRevisions: g
					} = this.state, f = c && c.ids || [], x = c && c.pageInfo.hasNextPage;
					let k = "",
						C = "#";
					p && (k = Object(y.a)({
						subredditName: l,
						wikiPageName: p
					}, n), 2 === g.length && (C = v(k, {
						revision: g[0],
						revisionToCompare: g[1]
					})));
					const E = !a && t;
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Object(d.a)(P.a.container, {
							[P.a.mModHub]: n,
							[P.a.mShowActionButtons]: E
						})
					}, r.a.createElement(b.a, {
						buttonText: a ? void 0 : s.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: k,
						className: P.a.pageTitle,
						title: r.a.createElement("span", {
							className: P.a.pageTitleText
						}, a ? s.fbt._("Recent revisions", null, {
							hk: "VsZfq"
						}) : s.fbt._("Page history for {pageName}", [s.fbt._param("pageName", `/${p}`)], {
							hk: "y2LqH"
						}))
					}), r.a.createElement("div", {
						className: P.a.content
					}, !a && r.a.createElement("div", {
						className: P.a.compareBar
					}, r.a.createElement(h.s, {
						className: P.a.compareButton,
						disabled: g.length < 2,
						onClick: this.onCompareClick,
						to: C
					}, s.fbt._("Compare", null, {
						hk: "3grtKa"
					})), s.fbt._("{selectedCnt}/2 selected to compare", [s.fbt._param("selectedCnt", g.length.toString())], {
						hk: "1PfMOM"
					})), r.a.createElement("table", {
						className: P.a.table
					}, r.a.createElement("thead", null, r.a.createElement("tr", null, !a && r.a.createElement("th", {
						className: P.a.colHeaderCheckbox
					}), r.a.createElement("th", {
						className: P.a.colHeaderTime
					}, s.fbt._("time", null, {
						hk: "231ZTq"
					})), a && r.a.createElement("th", {
						className: P.a.colHeaderPage
					}, s.fbt._("Wiki page", null, {
						hk: "2CzzvU"
					})), r.a.createElement("th", {
						className: P.a.colHeaderUser
					}, s.fbt._("Username", null, {
						hk: "3dJxeH"
					})), r.a.createElement("th", {
						className: P.a.colHeaderReason
					}, s.fbt._("Revision Reason", null, {
						hk: "3Z0slk"
					})), r.a.createElement("th", {
						className: P.a.colHeaderActions
					}, E && r.a.createElement(r.a.Fragment, null, s.fbt._("Actions", null, {
						hk: "1V50p1"
					}), r.a.createElement(m.a, null, s.fbt._("View: View current version", null, {
						hk: "1Wp1Qa"
					}), r.a.createElement("br", null), s.fbt._("Hide: Hide revision from page history", null, {
						hk: "1G574c"
					}), r.a.createElement("br", null), s.fbt._("Revert: Revert page to an older version", null, {
						hk: "2IMILE"
					})))))), r.a.createElement("tbody", {
						className: P.a.tableBody
					}, f.map(this.renderRowItem))), i && r.a.createElement(T, null), x && r.a.createElement(L, {
						hasError: e,
						isLoading: i,
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
			const Q = Object(a.b)(Y, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(c.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(l.a)(t)),
				onLoadMoreRevisions: () => e(Object(l.c)({
					...t,
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				}))
			}))(Object(p.c)(X));

			function $(e) {
				const t = !!e.isRecentRevisionsMode,
					n = Object(C.a)({
						...e,
						isRecent: t
					});
				return r.a.createElement(Q, J({
					key: n,
					listingKey: n
				}, e))
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less": function(e, t, n) {
			e.exports = {
				container: "kuIrk7ySqHYuv5Gt8MVk7",
				automodContent: "_1FI4zcF0t1ECf8oc18uKd0",
				automodInfoBanner: "_2cLJCh1PnBUPaTO1HveGgo",
				wikiHtmlContent: "_1r4JJnDJUTKPWFmsi-Is_u",
				revisionInfo: "_3n6jRoJzvGVG7cvZDrvW1G"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2knUS3S97xMYycQVxOi0Yd",
				link: "_2uut3Ijozr0WkSh-oLVTkt"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3kIjxjzGVq5UfR6Bjiovd",
				hideIcon: "_2G1CaoG-VN3IjmyXMjpIfp"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				u = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				m = n("./src/reddit/constants/componentSizes.ts"),
				p = n("./src/reddit/constants/wiki.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = n("./src/reddit/helpers/wiki/validatePageName.ts"),
				f = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				x = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				k = n("./src/reddit/selectors/subredditWiki.ts"),
				v = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				C = n("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				y = n("./src/telemetry/models/Outbound.ts"),
				E = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = n("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				O = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				w = n("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				j = n.n(w);
			const N = e => {
				const {
					item: t,
					subredditName: n,
					isModHub: s
				} = e, r = t.isPagePresent && Object(O.a)({
					subredditName: n,
					wikiPageName: t.path
				}, s);
				return i.createElement("li", null, r ? i.createElement(E.a, {
					className: j.a.link,
					to: r
				}, t.name) : i.createElement("span", null, t.name), !!t.children.length && i.createElement("ul", null, t.children.map(e => i.createElement(N, {
					isModHub: s,
					item: e,
					key: e.path,
					subredditName: n
				}))))
			};
			var S = e => {
					const {
						isModHub: t,
						subredditName: n,
						wikiDirectory: r
					} = e, a = Object(_.a)(r.pageTree || []);
					return i.createElement("div", {
						className: j.a.container
					}, i.createElement("h1", null, s.fbt._("Viewing pages for {subredditName}", [s.fbt._param("subredditName", n)], {
						hk: "1f0dHX"
					})), i.createElement("h2", null, s.fbt._("Below is a list of pages in this wiki visible to you in this subreddit.", null, {
						hk: "3ywypD"
					})), i.createElement("ul", null, a.map(e => i.createElement(N, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: n
					}))))
				},
				I = n("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				P = n.n(I);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function R(e) {
				const {
					className: t,
					isModHub: n,
					showRevisionInfo: s,
					subredditName: i,
					wikiDirectory: a,
					wikiPage: o,
					wikiPageName: c
				} = e;
				let l = null;
				return a && c === p.j ? l = r.a.createElement(S, {
					isModHub: n,
					subredditName: i,
					wikiDirectory: a
				}) : o && o.content && c === p.h ? l = r.a.createElement("div", {
					className: P.a.automodContent
				}, o.content.markdown) : o && o.content && (l = r.a.createElement(v.a, {
					className: P.a.wikiHtmlContent,
					html: o.content.html,
					sourceElement: y.SourceElement.Wiki
				})), r.a.createElement("div", {
					className: Object(d.a)(t, P.a.container)
				}, c === p.h && r.a.createElement("div", {
					className: P.a.automodInfoBanner
				}, T._("This page is used to configure AutoModerator for the subreddit, please see the {=full documentation} for information", [T._param("=full documentation", r.a.createElement("a", {
					href: "/wiki/automoderator/full-documentation"
				}, T._("full documentation", null, {
					hk: "1iIGFO"
				})))], {
					hk: "C2ew1"
				})), l, s && o && o.revision && r.a.createElement("div", {
					className: P.a.revisionInfo
				}, r.a.createElement(C.a, {
					showTimeAgo: !0,
					isLastRevision: !0,
					revision: o.revision
				})))
			}
			var L = n("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				D = n.n(L);
			const W = Object(a.b)(() => Object(o.c)({
					pending: k.a,
					wikiDirectory: k.b,
					wikiPage: k.c
				})),
				B = Object(b.v)();
			class M extends i.Component {
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
						n = this.props.wikiPage !== e.wikiPage;
					(t || n) && this.scrollToHash()
				}
				scrollToHash() {
					const e = window.location.hash.slice(1),
						t = e ? document.getElementById(e) : null;
					if (t) {
						let e = m.f + 10;
						this.props.isModHub && (e += m.i + m.j);
						const n = window.scrollY + t.getBoundingClientRect().top - e;
						window.scrollTo(0, n)
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
						showRevisionInfo: n,
						subredditName: r,
						wikiDirectory: a,
						wikiPage: o,
						wikiPageName: d
					} = this.props, c = this.getWikiPageStatus(), m = d === p.i, b = this.props.isModHub ? `/r/${this.props.subredditName}/about/wiki` : `/r/${this.props.subredditName}/wiki`, h = `${b}/index`, k = m ? void 0 : s.fbt._("Wiki home", null, {
						hk: "1E1oVk"
					});
					if (t || !c) return i.createElement(u.a, {
						showTitle: !0
					});
					if (c === x.b.Unknown || c === x.b.PageNotCreated) {
						if (Object(g.b)(d)) return i.createElement(l.a, {
							buttonLink: h,
							buttonText: k,
							description: s.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "VYLjZ"
							}),
							title: s.fbt._('"{pageName}" does not exist', [s.fbt._param("pageName", d)], {
								hk: "33IIrL"
							})
						})
					}
					switch (c) {
						case x.b.Valid:
							return !(!o || !o.content || o.content.markdown) ? i.createElement(l.a, {
								buttonLink: `${b}/edit/${d}`,
								buttonText: s.fbt._("Edit page", null, {
									hk: "2I8ztD"
								}),
								description: s.fbt._("Edit it to add some content", null, {
									hk: "13lGpZ"
								}),
								title: s.fbt._("This page is empty", null, {
									hk: "r0I6D"
								})
							}) : i.createElement(R, {
								isModHub: e,
								showRevisionInfo: n,
								subredditName: r,
								wikiDirectory: a,
								wikiPage: o,
								wikiPageName: d
							});
						case x.b.PageNotCreated:
							return i.createElement(l.a, {
								buttonLink: `${b}/create/${d}`,
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
						case x.b.Unknown:
							return i.createElement(l.a, {
								buttonText: s.fbt._("Reload page", null, {
									hk: "1L70ii"
								}),
								onButtonClick: this.reloadPage,
								title: s.fbt._("An unknown error occurred", null, {
									hk: "3BhfEB"
								})
							});
						case x.b.RestrictedPage:
							return i.createElement(l.a, {
								buttonLink: h,
								buttonText: k,
								description: s.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
									hk: "VYLjZ"
								}),
								title: s.fbt._('"{pageName}" does not exist', [s.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case x.b.MayNotView:
							return i.createElement(l.a, {
								buttonLink: h,
								buttonText: k,
								description: s.fbt._("The mods of this community have disabled this wiki page", null, {
									hk: "y3LOU"
								}),
								icon: i.createElement(f.a, {
									className: D.a.hideIcon
								}),
								title: s.fbt._("This page has been disabled", null, {
									hk: "1v13Nq"
								})
							});
						case x.b.WikiDisabled:
							return i.createElement(l.a, {
								buttonLink: `/r/${r}/`,
								buttonText: s.fbt._("Continue to r/{subredditName}", [s.fbt._param("subredditName", r)], {
									hk: "1oJQF7"
								}),
								description: s.fbt._("The mods of this community have disabled their wiki", null, {
									hk: "3qHJ8v"
								}),
								icon: i.createElement(f.a, {
									className: D.a.hideIcon
								}),
								title: s.fbt._("This wiki has been disabled", null, {
									hk: "3tfoag"
								})
							});
						case x.b.PageNotFound:
							return i.createElement(l.a, {
								buttonLink: h,
								buttonText: k,
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
					return i.createElement("div", {
						className: Object(d.a)(e, D.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = B(W(Object(c.c)(M)))
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Wiki/WikiPageDiff/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = n("./src/reddit/constants/wiki.ts"),
				l = n("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				u = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				m = n("./src/reddit/selectors/subredditWiki.ts"),
				p = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				b = n("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				h = n.n(b);
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
			const f = Object(a.c)({
					diffInfo: (e, t) => {
						const n = Object(l.a)(t);
						return Object(m.i)(e, {
							key: n
						})
					}
				}),
				x = Object(r.b)(f);
			class k extends i.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: n,
						diffInfo: r,
						wikiPageName: a
					} = this.props;
					let l = null;
					l = !r || r.pending ? i.createElement(g, null) : r.error ? s.fbt._("Could not load comparison diff", null, {
						hk: "4mrAev"
					}) : i.createElement("div", {
						className: h.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: r.htmlDiff || ""
						}
					});
					const m = Object(u.a)({
						subredditName: n,
						wikiPageName: a,
						wikiSubRoute: c.m.Revisions
					}, t);
					return i.createElement("div", {
						className: Object(o.a)(e, h.a.container, t ? h.a.mModHub : null)
					}, i.createElement(d.a, {
						buttonText: s.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: m,
						className: h.a.pageTitle,
						title: s.fbt._("Comparing revisions for /{pageName}", [s.fbt._param("pageName", a)], {
							hk: "DGV1Y"
						})
					}), i.createElement("div", {
						className: h.a.content
					}, l))
				}
			}
			t.a = x(k)
		},
		"./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Wiki/WikiPageEditor/index.m.less": function(e, t, n) {
			e.exports = {
				topBar: "an_IeG33-UK9pts_JjqgQ",
				content: "_38SkvHzrhjQ7cSy7R0Lar1",
				resizableTextarea: "jtUB91J6tX7NTsovNabut",
				modHubTopBarExp: "BGubyqJMSlwQ45Xw5I-AT"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/reddit/actions/pages/subredditWiki/index.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/constants/wiki.ts"),
				h = n("./src/lib/constants/index.ts"),
				g = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				x = n("./src/reddit/constants/headers.ts"),
				k = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var v = e => Object(g.a)(Object(f.a)(e.context, [x.a]), {
					endpoint: Object(k.a)(`${e.context.apiUrl}/r/${e.subredditName}/api/wiki/edit`),
					method: h.pb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				C = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				y = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				O = n("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const w = Object(u.a)(O.a);
			var j = n("./src/reddit/components/BlockNavigation/index.tsx"),
				N = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				S = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				I = n("./src/reddit/components/TrackingHelper/index.tsx"),
				P = n("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				T = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				R = n("./src/reddit/contexts/NavbarExp.ts"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				W = n("./src/reddit/helpers/wiki/validatePageName.ts"),
				B = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				M = n("./src/reddit/selectors/activeModalId.ts"),
				F = n("./src/reddit/selectors/platform.ts"),
				A = n("./src/reddit/selectors/subredditWiki.ts"),
				H = n("./src/higherOrderComponents/asModal/index.tsx"),
				U = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				V = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				G = n("./src/reddit/controls/TextButton/index.tsx"),
				q = n("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				K = n.n(q);
			class z extends r.a.PureComponent {
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
					} = this.state, n = b.g - t.length;
					return r.a.createElement("div", {
						className: K.a.container
					}, r.a.createElement(U.i, {
						className: K.a.modalHeader
					}, r.a.createElement(U.q, null, s.fbt._("Add a reason for your revision", null, {
						hk: "3ozq8e"
					})), r.a.createElement(G.a, {
						onClick: this.props.onCancel
					}, r.a.createElement(U.b, null))), r.a.createElement("div", {
						className: K.a.contentBlock
					}, r.a.createElement("label", null, r.a.createElement("span", {
						className: K.a.labelText
					}, s.fbt._("Revision reason", null, {
						hk: "W55mK"
					})), r.a.createElement("input", {
						autoFocus: !0,
						className: K.a.reasonInput,
						maxLength: b.g,
						onChange: this.onTextChange,
						placeholder: s.fbt._("Ex: Added source to appendix", null, {
							hk: "KB2dD"
						}),
						value: t
					})), r.a.createElement("div", {
						className: K.a.details
					}, s.fbt._({
						"*": "{number} characters left",
						_1: "1 character left"
					}, [s.fbt._plural(n, "number")], {
						hk: "1Ra9c8"
					}))), r.a.createElement(U.g, {
						className: K.a.modalFooter
					}, r.a.createElement(U.a, {
						onClick: this.props.onCancel
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(L.l, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? r.a.createElement(V.a, {
						className: K.a.loadingIcon,
						sizePx: 10
					}) : s.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var Z = Object(H.a)(z),
				J = n("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				Y = n.n(J);
			const X = "Discard-wiki-page-changes",
				Q = "Add-wiki-revision-reason",
				$ = 2,
				ee = (e, t, n) => {
					const i = t.status,
						r = {
							[W.a.InvalidPageName]: s.fbt._("Page name is invalid", null, {
								hk: "3Ogzsc"
							}),
							[W.a.MaxLengthExceed]: s.fbt._("Page name must be shorter than {maxPageLen} characters", [s.fbt._param("maxPageLen", `${b.d}`)], {
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
						if (i === B.b.Valid) return r[W.a.PageAlreadyExists];
						if (i === B.b.PageNotFound) return s.fbt._("You do not have permission to create this page", null, {
							hk: "423aTf"
						});
						if (n) return r[n]
					} else if (i === B.b.Valid && !t.isRevisable) return s.fbt._("You do not have permission to edit this page", null, {
						hk: "1bUgsZ"
					})
				},
				te = Object(o.c)({
					allowNavigationCallback: F.a,
					isRevisionReasonModalOpen: Object(M.b)(Q),
					isSaveBeforeLeaveModalOpen: Object(M.b)(X),
					wikiPage: A.c
				}),
				ne = Object(a.b)(te, (e, t) => ({
					onSaveWikiPage: (n, i) => e((e => {
						let {
							pageContent: t,
							wikiPageName: n,
							revisionReason: i,
							subredditName: r
						} = e;
						return async (e, a, o) => {
							var d, c, l;
							const u = await v({
								context: o.apiContext(),
								pageContent: t,
								revisionReason: i,
								subredditName: r,
								wikiPageName: n
							});
							if (u.ok) e(w({
								pageKey: Object(y.a)({
									subredditName: r,
									wikiPageName: n
								}),
								pageRevisionsListingKey: Object(C.a)({
									subredditName: r,
									wikiPageName: n,
									isRecent: !1
								}),
								recentRevisionsListingKey: Object(C.a)({
									subredditName: r,
									wikiPageName: n,
									isRecent: !0
								})
							})), await e(Object(m.fetchSubredditWikiData)({
								includeDirectory: !0,
								includePageData: !0,
								subredditName: r,
								wikiPageName: n
							}));
							else {
								let t = s.fbt._("Something went wrong", null, {
									hk: "4oNh1E"
								});
								"RESTRICTED_PAGE" === (null === (d = null == u ? void 0 : u.body) || void 0 === d ? void 0 : d.reason) ? t = s.fbt._("Cannot create/edit restricted page", null, {
									hk: "2pUIkm"
								}): "SPECIAL_ERRORS" === (null === (c = null == u ? void 0 : u.body) || void 0 === c ? void 0 : c.reason) && (t = null === (l = null == u ? void 0 : u.body) || void 0 === l ? void 0 : l.special_errors.map((e, t) => `${t+1}). ${e.toString()}`)), e(Object(p.f)({
									kind: E.b.Error,
									text: t
								}))
							}
							return u.ok
						}
					})({
						pageContent: n,
						revisionReason: i,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						return async (t, n) => {
							const s = n().platform.currentPage,
								i = s.locationState && s.locationState[b.a];
							if (e && i) t(Object(l.a)());
							else {
								const {
									subredditName: e,
									wikiPageName: n
								} = s.urlParams, i = Object(_.a)(s.url, {
									subredditName: e,
									wikiPageName: n
								});
								t(Object(l.c)(i))
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
						}), this.props.sendEvent(Object(D.m)(this.props.isCreation));
						const n = await this.props.onSaveWikiPage(t, e);
						this.isUnmounted || (this.setState({
							isSavePending: !1
						}), n ? this.setState({
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
							isRevisionReasonModalOpen: n,
							isSaveBeforeLeaveModalOpen: i,
							wikiPage: a,
							wikiPageName: o
						} = this.props, {
							disableBlocking: c,
							isSavePending: l,
							markdown: u
						} = this.state, m = a && a.content && a.content.markdown || "", p = !u.trim(), b = u !== m, h = t && a ? Object(W.b)(a.name) : void 0, g = !(!a || a.status !== B.b.PageNotCreated || h), f = !(!a || a.status !== B.b.Valid || !a.isRevisable), x = t ? g : f, k = x && b && !p && !l && !h;
						return r.a.createElement("div", {
							className: Object(d.a)(Y.a.container, this.props.className)
						}, r.a.createElement("div", {
							className: Object(d.a)(this.props.topBarClassName, Y.a.topBar, {
								[Y.a.modHubTopBarExp]: e
							})
						}, r.a.createElement(L.o, {
							onClick: this.onCancel,
							disabled: l
						}, s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), r.a.createElement(L.l, {
							disabled: !k,
							onClick: this.showRevisionReasonModal
						}, s.fbt._("Save", null, {
							hk: "4yMsMq"
						}))), r.a.createElement("div", {
							className: Object(d.a)(this.props.contentClassName, Y.a.content)
						}, a ? x ? r.a.createElement(S.a, {
							autoFocus: !0,
							className: Y.a.resizableTextarea,
							disabled: l,
							onChange: this.onTextChange,
							placeholder: s.fbt._("Add page content here", null, {
								hk: "4fxFCc"
							}),
							value: u
						}) : r.a.createElement(P.a, {
							description: ee(t, a, h),
							title: t ? s.fbt._('"{pageName}" cannot be created', [s.fbt._param("pageName", o)], {
								hk: "235tfC"
							}) : s.fbt._('"{pageName}" cannot be edited', [s.fbt._param("pageName", o)], {
								hk: "4qKJob"
							})
						}) : r.a.createElement(T.a, {
							paragraphsCount: $
						})), n && r.a.createElement(Z, {
							withOverlay: !0,
							onCancel: this.onCancelAddingRevisionReason,
							onSave: this.onSaveWithReason,
							isPending: l
						}), r.a.createElement(j.a, {
							blockOnBeforeUnload: !0,
							dialogId: X,
							enabled: b && !c
						}), i && r.a.createElement(N.a, {
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
					return r.a.createElement(R.a.Consumer, null, this.renderWikiPageEditor)
				}
			}
			t.a = ne(Object(I.c)(se))
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.m.less": function(e, t, n) {
			e.exports = {
				container: "hFkZVSvr5ZCDtsUNvUe0t",
				mModHub: "OTGEcq8eHMW4w8Jk_xUB_",
				content: "jB-E_8PuDLsGMGUcJ38Ed",
				pageTitle: "_7mpqbmAh_bdv9eJPLzJkl",
				headerRow: "_24xr0pCtEq8smcGh9hy-iC",
				pageSource: "_3FGoxkytIqYAnG5hdqa8Uq"
			}
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				c = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				l = n("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				u = n("./src/reddit/constants/wiki.ts"),
				m = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				p = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				b = n("./src/reddit/selectors/subredditWiki.ts"),
				h = n("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				g = n.n(h);
			const f = Object(a.c)({
					pending: b.a,
					revision: (e, t) => {
						let {
							revisionId: n
						} = t;
						return n ? Object(b.n)(e, {
							revisionId: n
						}) : void 0
					},
					wikiPage: b.c
				}),
				x = Object(r.b)(f);
			class k extends i.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: n,
						revision: r,
						revisionId: a,
						subredditName: b,
						wikiPage: h,
						wikiPageName: f
					} = this.props;
					let x = null;
					x = n ? i.createElement(d.a, null) : h ? h.status === p.b.Valid ? h.content && h.content.markdown : s.fbt._("Cannot show page content", null, {
						hk: "pwCwd"
					}) : s.fbt._("Page not found", null, {
						hk: "26hzSO"
					});
					const k = r || h && h.revision,
						v = !a,
						C = Object(m.a)({
							subredditName: b,
							wikiPageName: f,
							wikiSubRoute: v ? void 0 : u.m.Revisions
						}, t);
					return i.createElement("div", {
						className: Object(o.a)(e, g.a.container, t ? g.a.mModHub : null)
					}, i.createElement(c.a, {
						buttonText: v ? s.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}) : s.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: C,
						className: g.a.pageTitle,
						title: !v && k ? s.fbt._("Revision from {timeAgo}", [s.fbt._param("timeAgo", Object(l.b)(k))], {
							hk: "36r4TU"
						}) : s.fbt._("Page source", null, {
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
					}, x)))
				}
			}
			t.a = x(k)
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3m-pL3lGJRyo7pWckPUL_d",
				dropdown: "_3IUuipl8jTmMnjXR0NDisP",
				row: "_25Y1JThsMmw5VNvhFFLb0j"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "I0T583ZtOWVEpRWsa0kbu",
				button: "_2IOi-lonN6Hy4pTcjFTLBp",
				revisionInfo: "Ln6UHsxFeDZdhv1yRUL0F",
				flexSpacer: "meAs5YnW58CX9i8rWjZQL",
				insightsIcon: "_2jZ56a8X91s-hvF2Hs0YO6"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/history/esm/history.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/copyToClipboard/index.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				b = n("./src/reddit/constants/wiki.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/moderatorPermissions.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/subredditWiki.ts"),
				y = n("./src/config.ts"),
				E = n("./src/reddit/components/OverflowMenu/index.tsx"),
				_ = n("./src/reddit/constants/parameters.ts"),
				O = n("./src/reddit/controls/Dropdown/Row.tsx"),
				w = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				j = n("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				N = n.n(j);
			const S = ["right", "bottom"],
				I = ["right", "top"];
			class P extends a.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(w.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, n = `${y.a.redditUrl}/r/${e}/wiki/${t}`;
						this.props.onCopyPageUrl(n), this.props.sendEvent(w.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: n,
						subredditName: i,
						wikiPage: r,
						wikiPageName: o
					} = this.props, d = n ? `/r/${i}/about/wiki` : `/r/${i}/wiki`;
					return a.a.createElement(E.b, {
						className: Object(c.a)(e, N.a.container),
						dropdownClassName: N.a.dropdown,
						dropdownId: t,
						targetPosition: S,
						tooltipPosition: I
					}, r && a.a.createElement(O.b, {
						className: N.a.row,
						displayText: s.fbt._("View page history", null, {
							hk: "fy9yY"
						}),
						href: `${d}/revisions/${o}/`
					}), r && a.a.createElement(O.b, {
						className: N.a.row,
						displayText: s.fbt._("View page source", null, {
							hk: "1d5vg5"
						}),
						href: `${d}/${o}/?${_.O}`,
						onClick: this.onViewPageSourceClick
					}), n && a.a.createElement(O.b, {
						className: N.a.row,
						displayText: s.fbt._("View in community", null, {
							hk: "mSFod"
						}),
						href: `/r/${i}/wiki/${o}/`
					}), a.a.createElement(O.b, {
						className: N.a.row,
						displayText: s.fbt._("Copy URL", null, {
							hk: "3yBYUk"
						}),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var T = P,
				R = n("./src/reddit/constants/experiments.ts"),
				L = n("./src/reddit/helpers/chooseVariant/index.ts"),
				D = n("./src/reddit/selectors/user.ts");
			var W = n("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				B = n.n(W);
			const M = Object(d.c)({
					hasWikiModPerms: (e, t) => {
						const n = Object(v.C)(e, t);
						return !!n && Object(k.j)(e, {
							subredditId: n.id
						})
					},
					wikiPage: C.c,
					isInShredditAutomodInsightsExperiment: e => (e => Object(L.c)(e, {
						experimentEligibilitySelector: D.S,
						experimentName: R.Gf
					}) === R.Ud)(e)
				}),
				F = Object(o.b)(M, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(l.a)(e) && t(Object(u.f)(Object(u.e)(s.fbt._("Copied page URL", null, {
							hk: "4qKWjj"
						}), x.b.SuccessCommunity)))
					})(t))
				}));
			class A extends a.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: n,
						wikiPageName: r,
						subredditName: o,
						className: d
					} = this.props, l = !!n && n.status === f.b.Valid, u = !!n && n.isRevisable, m = e && u && l, x = t ? `/r/${o}/about/wiki/edit/${r}` : `/r/${o}/wiki/edit/${r}`;
					return a.a.createElement("div", {
						className: Object(c.a)(d, B.a.container)
					}, t && n && n.revision && a.a.createElement(p.a, {
						showTimeAgo: !0,
						className: B.a.revisionInfo,
						isLastRevision: !0,
						revision: n.revision
					}), a.a.createElement("div", {
						className: B.a.flexSpacer
					}), l && this.props.isInShredditAutomodInsightsExperiment && a.a.createElement(h.t, {
						priority: h.c.Secondary,
						className: B.a.button,
						kind: h.b.ExternalLink,
						href: `/mod/${o}/insights/automod`,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(g.a, {
						name: "statistics",
						className: B.a.insightsIcon
					}), s.fbt._("Automod Insights", null, {
						hk: "2UENkn"
					})), m && a.a.createElement(h.q, {
						className: B.a.button,
						to: `/r/${o}/about/wiki/settings/${r}`
					}, s.fbt._("Page settings", null, {
						hk: "2IAvWU"
					})), l && u && a.a.createElement(h.n, {
						className: B.a.button,
						to: Object(i.c)(x, {
							[b.a]: !0
						})
					}, s.fbt._("Edit", null, {
						hk: "1nftDt"
					})), l && a.a.createElement(T, {
						className: B.a.overflowMenu,
						dropdownId: `wikiPage-OverflowMenu-${r}-${t}`,
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: o,
						wikiPage: n,
						wikiPageName: r
					}))
				}
			}
			t.a = F(Object(m.c)(A))
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Av0UmXioR3Vgw-lpzfBWu",
				button: "_2hFu9bCtEjS60NjZM3F_UE",
				description: "_2c02P9rTnnEw2KuDpY8JxB",
				title: "_3rol4SGAf0n5-e8EENfrur"
			}
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				a = n.n(r);

			function o(e) {
				const {
					buttonLink: t,
					buttonText: n,
					description: r,
					icon: o,
					onButtonClick: d,
					title: c
				} = e;
				let l = null;
				return n && t ? l = s.createElement(i.n, {
					className: a.a.button,
					onClick: e.onButtonClick,
					to: t
				}, n) : n && d && (l = s.createElement(i.l, {
					className: a.a.button,
					onClick: e.onButtonClick
				}, n)), s.createElement("div", {
					className: a.a.container
				}, o, c && s.createElement("div", {
					className: a.a.title
				}, c), r && s.createElement("div", {
					className: a.a.description
				}, r), l)
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				placeholderTitle: "XK5I3_2arHFpfmDn6iUGt",
				placeholderParagraph: "_3Rhsg99h5kjE-u1Pp-Uk8P",
				placeholderTextLine: "_5pG9RcI-AYalqG5z6osMT"
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/range.js"),
				i = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				c = n.n(d);
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
		"./src/reddit/components/Wiki/common/PageTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2NCACehu2vXVQzdHocg7Rq",
				linkButton: "_28uXMdKULX2ygqCKM5Apfz",
				active: "_2DijTkAaakBaDtqxBeulFO"
			}
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				d = n.n(o);

			function c(e) {
				const {
					buttonLink: t,
					buttonText: n,
					className: s,
					title: o
				} = e;
				return i.a.createElement("div", {
					className: Object(r.a)(s, d.a.container)
				}, o, n && t && i.a.createElement(a.s, {
					className: d.a.linkButton,
					to: t
				}, n))
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2b8IWktp8nbHqDKTRFWebW",
				authorLink: "IY5BT71vlrhwNnwInSc2f"
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/lodash/noop.js"),
				i = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/timeAgo/index.ts"),
				u = n("./src/reddit/components/AuthorLink/index.tsx"),
				m = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = n("./src/reddit/helpers/graphql/helpers.ts"),
				g = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				x = n.n(f);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = ["center", "top"], C = ["center", "bottom"], y = Object(o.a)(b.b), E = e => {
				const t = new Date(Object(h.g)(e.revisedAt));
				return Object(l.d)(t.valueOf() / 1e3)
			};
			class _ extends a.a.Component {
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
						revision: n,
						showReason: s = !1,
						showTimeAgo: r = !1
					} = this.props, {
						showTooltip: o
					} = this.state, l = n.authorInfo && n.authorInfo.name || c.H, b = new Date(Object(h.g)(n.revisedAt)), f = a.a.createElement(m.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: i.a
					}, a.a.createElement(u.a, {
						className: x.a.authorLink,
						author: l,
						isAuthorDeleted: Object(g.p)(l),
						isUnstyled: !0
					}, l));
					return a.a.createElement("span", {
						className: Object(d.a)(e, x.a.container)
					}, t ? k._("Last revised by {username}", [k._param("username", f)], {
						hk: "jNOhx"
					}) : k._("Revised by {username}", [k._param("username", f)], {
						hk: "2Q35rs"
					}), r && a.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", a.a.createElement(p.d, {
						seconds: b.valueOf() / c.Xb
					}), a.a.createElement(y, {
						text: b.toString(),
						isOpen: o,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: v,
						tooltipPosition: C
					})), s && n.reason && a.a.createElement("span", null, " - ", n.reason))
				}
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlair.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(i.c)({
				activeModalId: l.a,
				autoplayPref: b.d,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.Y,
				hideNSFWPref: b.H,
				isActive: p.j,
				moderatorPermissions: u.m,
				modModeEnabled: c.W,
				showEditFlair: m.a
			}), (e, t) => {
				let {
					postId: n
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: n,
							previewFlair: s,
							selectedTemplateId: i
						} = t;
						return e(Object(a.h)({
							post: n,
							previewFlair: s,
							selectedTemplateId: i
						}))
					},
					handleVote: t => {
						const s = t === d.a.upvoted ? Object(r.ib)(n) : Object(r.v)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(r.eb)(n)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}
			}, (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: e => {
					let {
						previewFlair: s,
						selectedTemplateId: i
					} = e;
					return t.dispatchFlairChanged({
						post: n.post,
						previewFlair: s,
						selectedTemplateId: i
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return d
			}));
			const s = "comment",
				i = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				a = "comments-page-link-num-comments",
				o = "language-prompt-close",
				d = "post-content"
		},
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeGqlRequest/index.ts");
			var i, r = n("./src/redditGQL/operations/LanguageSelections.json"),
				a = n("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(i || (i = {}));
			const o = (e, t) => {
					const n = {
						allKey: e,
						suggestedKey: i.SUGGESTED_KEY
					};
					return Object(s.a)(t, {
						...r,
						variables: n
					})
				},
				d = async e => {
					const t = await o(i.ALL_KEY, e());
					if (!t.ok) return null;
					const n = t.body,
						s = null == n ? void 0 : n.data;
					return s ? (e => {
						const t = {},
							n = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: n
						}
					})(s) : null
				}, c = async (e, t, n) => {
					const s = await o(e, t());
					if (!s.ok) return null;
					const r = s.body,
						a = null == r ? void 0 : r.data;
					if (a) {
						return ((e, t, n) => {
							let s = null,
								i = [];
							const r = [],
								a = [],
								o = {},
								d = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									d[e] = !0
								})
							}
							for (let c = 0; c < t.suggested.length; c++) {
								const i = t.suggested[c];
								if (o[i.isoCode] = !0, n === i.isoCode) s = i;
								else {
									if (!e && d[i.isoCode]) continue; {
										const t = !!(e || !e && d[i.isoCode]);
										r.push({
											selected: t,
											...i
										})
									}
								}
							}
							for (let c = 0; c < t.all.length; c++) {
								const r = t.all[c];
								r.isoCode === n ? (s = r, a.push({
									selected: !0,
									...r
								})) : !e && d[r.isoCode] ? a.push({
									selected: !0,
									...r
								}) : o[r.isoCode] || i.push({
									selected: !(e || !d[r.isoCode]),
									...r
								})
							}
							if (i = r.concat(i), null === s) {
								const e = n.split("-").shift();
								for (let t = 0; t < i.length; t++)
									if (i[t].isoCode === e) {
										s = i[t], i.splice(t, 1);
										break
									}
							}
							return s && ((e || !e && d[s.isoCode]) && (s.selected = !0), i.unshift(s)), e || (i = a.concat(i)), {
								sortedLanguages: i
							}
						})(e === i.TOP_KEYS, a, n)
					}
					return null
				}, l = async (e, t) => {
					const n = await ((e, t) => {
						const n = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(s.a)(e, {
							...a,
							variables: n
						})
					})(e(), Object.keys(t));
					if (!n.ok) return null;
					const i = n.body;
					return null == i ? void 0 : i.data
				}
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/SubredditWiki.json");
			const r = (e, t) => Object(s.a)(e, {
				...i,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, a = r;
					return s ? i.a.createElement(t, a) : void 0 !== n ? i.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const i = (e, t) => {
				const n = e.some(e => e.isNSFW),
					i = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !i
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./src/lib/isFakeSubreddit/index.ts"), n("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var s;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(s || (s = {}))
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
				i = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(i);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				o = e => Object(s.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "p", (function() {
				return o
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "o", (function() {
				return y
			}));
			var s = n("./src/reddit/models/Prediction/index.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const r = "poll",
				a = "predictions",
				o = e => ({
					...Object(i.o)(e),
					source: r,
					action: "view",
					noun: "predict_option_modal"
				}),
				d = e => {
					let {
						pollId: t,
						selectedNumberCoins: n,
						totalStakeAmount: s
					} = e;
					return e => ({
						...Object(i.o)(e),
						source: r,
						action: "confirm",
						noun: "predict",
						poll: Object(i.J)(e, t, !1, void 0, n),
						goldPurchase: {
							numberCoins: s
						}
					})
				},
				c = e => {
					let {
						pollId: t,
						selectedNumberTokens: n
					} = e;
					return e => ({
						...Object(i.o)(e),
						source: r,
						action: "confirm",
						noun: "predict",
						poll: Object(i.J)(e, t, !1, void 0, void 0, n)
					})
				},
				l = e => {
					let {
						pollId: t,
						currency: n,
						amount: a
					} = e;
					return e => {
						const o = n === s.a.Coins ? a : void 0,
							d = n === s.a.Tokens ? a : void 0;
						return {
							...Object(i.o)(e),
							source: r,
							action: "close",
							noun: "prediction_modal",
							poll: Object(i.J)(e, t, !1, o, d)
						}
					}
				},
				u = e => ({
					...Object(i.o)(e),
					source: r,
					action: "click",
					noun: "add_coins"
				}),
				m = e => {
					let {
						targetUserId: t
					} = e;
					return e => ({
						...Object(i.o)(e),
						source: a,
						action: "click",
						noun: "leaderboard_profile",
						targetUser: {
							id: t
						}
					})
				},
				p = e => {
					let {
						pageType: t
					} = e;
					return e => ({
						...Object(i.o)(e),
						source: a,
						action: "click",
						noun: "tournament",
						actionInfo: {
							pageType: t
						}
					})
				},
				b = () => e => ({
					...Object(i.o)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				h = () => e => ({
					...Object(i.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				g = () => e => ({
					...Object(i.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				f = e => t => ({
					...Object(i.o)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(i.lb)(t)
				}),
				x = () => e => ({
					...Object(i.o)(e),
					source: a,
					action: "click",
					noun: "next"
				}),
				k = () => e => ({
					...Object(i.o)(e),
					source: a,
					action: "click",
					noun: "add_more"
				}),
				v = () => e => ({
					...Object(i.o)(e),
					source: a,
					action: "click",
					noun: "start_tournament"
				}),
				C = () => e => ({
					...Object(i.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				y = () => e => ({
					...Object(i.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(i.lb)(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "o", (function() {
				return O
			}));
			var s = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...i.o(e),
					subreddit: i.lb(e),
					userSubreddit: i.ub(e)
				}),
				a = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...r(e)
				}),
				o = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...r(e)
				}),
				d = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...r(t)
				}),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return d(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = d("compare_wiki_pages"),
				u = d("revert_wiki_page"),
				m = d("view_wiki_page"),
				p = d("view_source"),
				b = d("add_wiki_page_contributor"),
				h = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				f = d("copy_url"),
				x = d("add_wiki_subreddit_contributor"),
				k = d("remove_wiki_subreddit_contributor"),
				v = d("ban_wiki_contributor"),
				C = d("unban_wiki_contributor"),
				y = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[s.a.Inherit]: "subreddit_wiki_perms",
					[s.a.Contributors]: "only_wiki_contributors",
					[s.a.Mods]: "only_mods"
				},
				_ = e => t => ({
					...r(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: i.d(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				O = e => t => ({
					...r(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: i.d(t, {
						settingValue: E[e]
					})
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, i, r = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {}));
			const o = (e, t) => n => ({
					source: i.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.yb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				d = (e, t) => n => ({
					source: i.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.K(n, e),
					subreddit: a.lb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.o(n)
				}),
				c = () => e => ({
					source: i.SIDEBAR,
					action: r.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.o(e)
				}),
				l = e => t => ({
					source: i.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: s.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/sortBy.js"),
				i = n.n(s),
				r = n("./src/reddit/constants/wiki.ts");
			const a = e => {
				return i()(e, e => `${e.path}/`.startsWith(`${r.i}/`) ? `\0${e.path}` : e.path).filter(e => !r.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					n = [];
				return a(e).forEach(e => {
					const s = {
							...e,
							children: []
						},
						i = s.parent ? t.get(s.parent) : null;
					i ? i.children.push(s) : n.push(s), t.set(s.path, s)
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
					wikiPageName: i
				} = e;
				return `[${s}]--[${i}]--[rev1:${n}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
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
			var s = n("./src/reddit/constants/wiki.ts");
			const i = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${s.c}}$`),
				r = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!r.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const n = e.toLowerCase(),
						r = n.split("/")[0],
						o = s.b.has(r),
						d = s.f.has(r) && n !== s.h && n !== s.k;
					if (o || d) return a.RestrictedPageName;
					if (!i.test(n)) return a.InvalidPageName;
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
				return i
			}));
			const s = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				i = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => i.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => i.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ChatBubbles/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => e.isFilled ? i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M4.88595 13.444C4.36701 13.2885 3.86823 13.0723 3.39995 12.8L1.14695 13.362C1.04227 13.3879 0.932671 13.3863 0.828782 13.3574C0.724894 13.3285 0.630237 13.2732 0.553985 13.1969C0.477733 13.1207 0.422472 13.026 0.393557 12.9221C0.364642 12.8183 0.363055 12.7087 0.388949 12.604L0.949948 10.354C0.0362578 8.79992 -0.232941 6.94998 0.199949 5.19997C0.500428 3.96481 1.14111 2.83861 2.04929 1.94916C2.95748 1.05971 4.09679 0.442643 5.33795 0.167974C6.47394 -0.0883142 7.65628 -0.0533851 8.77516 0.269517C9.89404 0.59242 10.9132 1.19282 11.7379 2.01497C12.5377 2.81615 13.1259 3.80335 13.4499 4.88797C12.727 4.8582 12.0031 4.9207 11.2959 5.07397C9.80268 5.40459 8.43199 6.14717 7.33944 7.21745C6.24689 8.28772 5.47624 9.64283 5.11495 11.129C4.93328 11.8866 4.85623 12.6655 4.88595 13.444ZM17.9859 8.26497C17.1609 7.44322 16.1418 6.84307 15.023 6.5202C13.9042 6.19732 12.722 6.16216 11.5859 6.41797C10.3453 6.69314 9.20666 7.31044 8.29905 8.19985C7.39143 9.08926 6.75119 10.2152 6.45095 11.45C6.01885 13.1986 6.28766 15.0469 7.19995 16.6L6.63595 18.852C6.60975 18.9567 6.61112 19.0664 6.63993 19.1704C6.66873 19.2745 6.72399 19.3693 6.80032 19.4456C6.87665 19.5219 6.97145 19.5772 7.07548 19.606C7.17951 19.6348 7.28923 19.6362 7.39395 19.61L9.64695 19.047C10.7002 19.6709 11.9018 20.0001 13.1259 20C13.6895 19.9994 14.2511 19.9323 14.7989 19.8C16.0342 19.5 17.1607 18.8597 18.0505 17.9519C18.9403 17.0441 19.5578 15.905 19.8329 14.664C20.0882 13.5282 20.0529 12.3463 19.7302 11.2278C19.4076 10.1093 18.808 9.09026 17.9869 8.26497H17.9859Z"
			})) : i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z"
			}))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", r({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), i.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/CommunityDefault/filled.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), i.a.createElement("path", {
				d: "M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(o);
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
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var s, i;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(i || (i = {}))
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
					} = e, s = Object(m.a)(n, u.cb.HOT, {});
					return i.a.createElement(p.a, {
						listingKey: s,
						listingName: n.toLowerCase(),
						subredditId: t.id,
						subredditName: n
					})
				},
				h = n("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				g = n("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				f = n("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				x = n("./src/reddit/constants/parameters.ts"),
				k = n("./src/reddit/constants/wiki.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				y = n("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				E = n("./src/reddit/components/JumpToContent/index.tsx"),
				_ = n("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				O = n("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				w = n("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				j = n.n(w);

			function N(e) {
				const {
					wikiPageName: t,
					subredditName: n
				} = e;
				return s.createElement(s.Fragment, null, s.createElement(E.a, null), s.createElement(O.a, {
					isModHub: !1,
					className: j.a.topBar,
					wikiPageName: t,
					subredditName: n
				}), s.createElement(_.a, {
					showRevisionInfo: !0,
					subredditName: n,
					wikiPageName: t
				}))
			}
			var S = n("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				I = n.n(S);
			class P extends i.a.Component {
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
						wikiSubRoute: r,
						wikiPageName: a
					} = n, o = s[x.M], d = s[x.N], c = x.O in s;
					switch (r) {
						case k.m.Create:
						case k.m.Edit:
							return i.a.createElement(g.a, {
								contentClassName: I.a.wikiPageEditorContent,
								isCreation: r === k.m.Create,
								subredditName: t,
								topBarClassName: I.a.communityWikiTopBar,
								wikiPageName: a
							});
						case k.m.Revisions:
							return i.a.createElement(y.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? i.a.createElement(h.a, {
								comparisonRevisionId: Object(C.a)(d),
								revisionId: Object(C.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? i.a.createElement(f.a, {
								revisionId: o ? Object(C.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? i.a.createElement(N, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var T = Object(v.v)()(P),
				R = n("./src/reddit/constants/componentSizes.ts"),
				L = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				D = n("./src/reddit/layout/page/Listing/index.tsx"),
				W = n("./src/reddit/selectors/subreddit.ts"),
				B = n("./src/reddit/selectors/user.ts");
			const M = Object(v.v)(),
				F = Object(r.b)(() => Object(a.c)({
					contentGateInfo: (e, t) => {
						let {
							match: n
						} = t;
						return Object(B.h)(e, n.params.subredditName)
					},
					layout: v.U,
					over18Pref: B.mb,
					subreddit: (e, t) => {
						let {
							match: n
						} = t;
						return Object(W.C)(e, {
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
			class A extends i.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: n,
						subredditName: s
					} = this.props, r = !!n && n.isNSFW && !B.mb, a = Object(L.a)(t, r, s);
					if (a) return i.a.createElement(c.default, a);
					const o = `/r/${s}/`;
					return i.a.createElement(D.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: R.h,
						navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(l.a, {
							disableFullscreen: !0,
							headerText: n ? n.name : s,
							maxWidth: R.h,
							subredditOrProfile: n,
							url: o
						}), i.a.createElement(d.a, {
							subreddit: n || void 0,
							subredditId: n ? n.id : void 0,
							subredditName: s,
							subredditUrl: o
						})),
						content: i.a.createElement(T, {
							subredditName: s
						}),
						sidebar: n && i.a.createElement(b, {
							subreddit: n,
							subredditName: s
						})
					})
				}
			}
			t.default = M(F(A))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/constants/postLayout.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => i.e[Object(r.U)(e, {})] === i.d.Card,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: s.sb
				}) === s.bd.Treatment
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				o = n("./src/reddit/selectors/meta.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: e => Object(o.h)(e) && Object(r.f)(e),
					experimentName: s.sc
				}), a.a),
				l = Object(d.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: e => !Object(o.h)(e) && Object(r.f)(e),
					experimentName: s.rc
				}), a.a),
				u = Object(d.a)(c, l, (e, t) => e || t),
				m = Object(d.a)(c, l, (e, t) => !(!e && !t))
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
				return f
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return y
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const r = [],
				a = (e, t) => {
					var n;
					const {
						subredditName: s
					} = t;
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.subreddits.api.wiki.pending[n.toLowerCase()]
				},
				d = (e, t) => {
					var n;
					const s = Object(i.a)(t);
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.pages[s]
				},
				c = (e, t) => {
					let {
						listingKey: n
					} = t;
					return e.pages.subredditWiki.revisions.listings[n]
				},
				l = (e, t) => {
					let {
						listingKey: n
					} = t;
					return !!e.pages.subredditWiki.revisions.api.pending[n]
				},
				u = (e, t) => {
					let {
						listingKey: n
					} = t;
					return !!e.pages.subredditWiki.revisions.api.error[n]
				},
				m = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				p = (e, t) => {
					let {
						key: n
					} = t;
					return e.pages.subredditWiki.diff[n]
				},
				b = (e, t) => {
					const n = Object(i.a)(t);
					return e.pages.subredditWiki.pageSettings[n]
				},
				h = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[n.toLowerCase()]
				},
				g = Object(s.a)((e, t) => {
					let {
						subredditName: n
					} = t;
					const s = n.toLowerCase(),
						i = e.pages.subredditWiki.wikiContributors.listing,
						a = i.userOrder[s],
						o = i.models[s];
					return a ? a.map(e => o[e]) : r
				}),
				f = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[n.toLowerCase()]
				},
				x = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[n.toLowerCase()]
				},
				k = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[n.toLowerCase()]
				},
				v = Object(s.a)((e, t) => {
					let {
						subredditName: n
					} = t;
					const s = n.toLowerCase(),
						i = e.pages.subredditWiki.wikiBannedContributors.listing,
						a = i.userOrder[s],
						o = i.models[s];
					return a ? a.map(e => o[e]) : r
				}),
				C = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[n.toLowerCase()]
				},
				y = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[n.toLowerCase()]
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.30f3ac8c60347c2fffb5.js.map