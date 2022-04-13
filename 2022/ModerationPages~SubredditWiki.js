// https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.a7d16fdd98f7642dca63.js
// Retrieved at 4/13/2022, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages~SubredditWiki", "reddit-components-ContentGate"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				r = Math.max;
			e.exports = function(e, t, s, a) {
				for (var i = -1, o = r(n((t - e) / (s || 1)), 0), d = Array(o); o--;) d[a ? o : ++i] = e, e += s;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, i) {
					return i && "number" != typeof i && s(t, n, i) && (n = i = void 0), t = a(t), void 0 === n ? (n = t, t = 0) : n = a(n), i = void 0 === i ? t < n ? 1 : -1 : a(i), r(t, n, i, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_createRange.js")();
			e.exports = r
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(o);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: i
					} = e;
				return s.a.createElement("svg", {
					className: Object(a.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: r,
						[d.a.hover]: !!i
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				s = n("./src/reddit/helpers/routeKey/index.ts"),
				a = n("./src/reddit/helpers/trackers/screenview.ts"),
				i = n("./src/telemetry/index.ts"),
				o = n("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const n = t(),
					{
						currentPage: d
					} = n.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(r.a)(n),
					u = Object(s.b)(c, n, l);
				u && i.c.has(u) && Object(a.k)(c, n, o.TimerType.InApp, i.c.end(u))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "subredditWikiDataPending", (function() {
				return qe
			})), n.d(t, "subredditWikiDataLoaded", (function() {
				return Ge
			})), n.d(t, "subredditWikiDataFailed", (function() {
				return ze
			})), n.d(t, "fetchSubredditWikiData", (function() {
				return Xe
			})), n.d(t, "handleWikiRedirects", (function() {
				return Ye
			})), n.d(t, "subredditWikDataRequested", (function() {
				return Ve
			})), n.d(t, "subredditWikiPageRequested", (function() {
				return $e
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/isEmpty.js"),
				a = n.n(s),
				i = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/actions/platform.ts"),
				m = n("./src/reddit/helpers/path/index.ts");
			var b = n("./src/reddit/actions/ads/index.ts"),
				p = n("./src/reddit/actions/pages/subreddit.ts"),
				f = n("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				g = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				v = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				k = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				_ = n("./src/redditGQL/operations/WikiComparisonDiff.json");
			var w = n("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				y = n("./src/reddit/selectors/subredditWiki.ts");
			const O = Object(d.a)("WIKI_DIFF_PENDING"),
				I = Object(d.a)("WIKI_DIFF_LOADED"),
				E = Object(d.a)("WIKI_DIFF_FAILED"),
				j = e => async (t, n, r) => {
					const s = n(),
						a = Object(w.a)(e),
						i = Object(y.i)(s, {
							key: a
						});
					if (i && (i.pending || !i.error)) return !0;
					const d = {
						key: a
					};
					t(O(d));
					const c = await ((e, t) => Object(k.a)(e, {
						..._,
						variables: {
							...t,
							comparisonRevisionId: Object(x.b)(t.comparisonRevisionId),
							revisionId: Object(x.b)(t.revisionId)
						}
					}))(r.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							n = t && t.page && t.page.revisionComparisonDiffHtml;
						n ? u = n : l = {
							type: o.I.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.I.UNKNOWN_ERROR
					};
					return t(l ? E({
						...d,
						error: l
					}) : I({
						...d,
						htmlDiff: u
					})), !l
				};
			var N = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				C = n("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				S = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/constants/wiki.ts"),
				R = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				T = n("./src/reddit/helpers/brandSafety/index.ts"),
				U = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				B = n("./src/reddit/models/Toast/index.ts"),
				A = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				L = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				D = n("./src/reddit/selectors/subreddit.ts"),
				W = n("./src/lib/initializeClient/installReducer.ts"),
				F = n("./node_modules/redux/es/redux.js");
			const M = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: n,
							htmlDiff: r
						} = t.payload;
						return {
							...e,
							[n]: {
								htmlDiff: r
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
							error: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								pending: !1,
								error: r
							}
						}
					}
					default:
						return e
				}
			};
			const H = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.b:
							const n = t.payload,
								{
									subredditWiki: r,
									options: s
								} = n,
								a = r && r.directory;
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
				G = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const z = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.b: {
							const {
								subredditWiki: n,
								pageKey: r
							} = t.payload, {
								page: s
							} = n;
							return r && s ? {
								...e,
								[r]: s
							} : e
						}
						case G.a: {
							const {
								pageKey: n,
								page: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				J = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const X = {};
			var Z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J.c: {
							const {
								settings: n,
								pageKey: r
							} = t.payload;
							return n ? {
								...e,
								[r]: n
							} : e
						}
						case J.d: {
							const {
								isVisible: n,
								editPermissions: r,
								pageKey: s
							} = t.payload, a = e[s];
							return a ? {
								...e,
								[s]: {
									...a,
									isVisible: n,
									editPermissions: r
								}
							} : e
						}
						case J.b: {
							const {
								editorsInfo: n,
								afterToken: r,
								pageKey: s
							} = t.payload, a = e[s];
							if (!a) return e;
							const i = [...a.editorsInfo, ...n];
							return {
								...e,
								[s]: {
									...a,
									editorsInfo: i,
									afterToken: r
								}
							}
						}
						case J.a: {
							const {
								username: n,
								pageKey: r
							} = t.payload, s = e[r];
							if (!s) return e;
							const a = s.editorsInfo.filter(e => e.username !== n);
							return {
								...e,
								[r]: {
									...s,
									editorsInfo: a
								}
							}
						}
						default:
							return e
					}
				},
				Y = n("./src/lib/omitKey/index.ts");
			const V = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.b: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case G.d:
					case G.c: {
						const {
							key: n
						} = t.payload;
						return Object(Y.a)(e, n)
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
						case G.d:
						case G.b:
						case G.c: {
							const {
								key: n
							} = t.payload, r = t.type === G.d;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				ne = Object(F.c)({
					error: $,
					pending: te
				}),
				re = n("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const se = {};
			var ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.c: {
						const {
							key: n,
							options: r,
							pageInfo: s,
							revisionsIds: a
						} = t.payload, i = e[n], o = r.after && i ? [...i.ids, ...a] : a;
						return {
							...e,
							[n]: {
								ids: o,
								pageInfo: s
							}
						}
					}
					case G.a: {
						const {
							page: {
								revision: n
							},
							pageRevisionsListingKey: r,
							recentRevisionsListingKey: s
						} = t.payload, a = e[r];
						return a && n ? {
							...Object(Y.a)(e, s),
							[r]: {
								...a,
								ids: [n.id, ...a.ids]
							}
						} : e
					}
					case re.a: {
						const {
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: r
						} = t.payload, s = {
							...e
						};
						return delete s[n], delete s[r], s
					}
					default:
						return e
				}
			};
			const ie = {};
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.b: {
							const {
								subredditWiki: {
									page: n
								}
							} = t.payload, r = n && n.revision;
							return r && !e[r.id] ? {
								...e,
								[r.id]: r
							} : e
						}
						case G.c: {
							const {
								revisions: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						case G.a: {
							const {
								page: n
							} = t.payload, r = n.revision;
							return r ? {
								...e,
								[r.id]: r
							} : e
						}
						case G.e: {
							const {
								revisionId: n,
								isHidden: r
							} = t.payload, s = e[n];
							return s ? {
								...e,
								[n]: {
									...s,
									isHidden: r
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(F.c)({
					api: ne,
					listings: ae,
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
							afterToken: r
						} = t.payload;
						return {
							...e,
							[n]: r
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
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(Y.a)(e, n)
					}
					default:
						return e
				}
			};
			const pe = {};
			var fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.d:
						case ce.c:
						case ce.b: {
							const {
								subredditName: n
							} = t.payload, r = t.type === ce.d;
							return {
								...e,
								[n]: r
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
			const ge = {};
			var ve = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: n,
								bannedContributors: r
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...r
								}
							}
						}
						case ce.e: {
							const {
								subredditName: n,
								bannedContributor: r
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...r
								}
							}
						}
						case ce.f: {
							const {
								subredditName: n,
								userId: r
							} = t.payload, s = Object(Y.a)(e[n], r);
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				ke = n("./node_modules/lodash/uniq.js"),
				xe = n.n(ke);
			const _e = {};
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: xe()([...e[n] || [], ...r])
							}
						}
						case ce.e: {
							const {
								subredditName: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: xe()([...r, ...e[n] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: n,
								userId: r
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== r)
							}
						}
						default:
							return e
					}
				},
				ye = Object(F.c)({
					afterToken: ue,
					api: he,
					models: ve,
					userOrder: we
				});
			const Oe = {};
			var Ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: n,
								bannedContributor: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Ee = Object(F.c)({
					listing: ye,
					search: Ie
				}),
				je = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ne = {};
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							afterToken: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const Se = {};
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b: {
						const {
							subredditName: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case je.d:
					case je.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(Y.a)(e, n)
					}
					default:
						return e
				}
			};
			const Re = {};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.d:
						case je.c:
						case je.b: {
							const {
								subredditName: n
							} = t.payload, r = t.type === je.d;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Ue = Object(F.c)({
					error: Pe,
					pending: Te
				});
			const Be = {};
			var Ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							contributors: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...r
							}
						}
					}
					case je.e: {
						const {
							subredditName: n,
							contributor: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...r
							}
						}
					}
					case je.f: {
						const {
							subredditName: n,
							userId: r
						} = t.payload, s = Object(Y.a)(e[n], r);
						return {
							...e,
							newState: s
						}
					}
					default:
						return e
				}
			};
			const Le = {};
			var De = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
						case je.a: {
							const {
								subredditName: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: xe()([...e[n] || [], ...r])
							}
						}
						case je.e: {
							const {
								subredditName: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: [...r, ...e[n] || []]
							}
						}
						case je.f: {
							const {
								subredditName: n,
								userId: r
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== r)
							}
						}
						default:
							return e
					}
				},
				We = Object(F.c)({
					afterToken: Ce,
					api: Ue,
					models: Ae,
					userOrder: De
				});
			const Fe = {};
			var Me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.g: {
							const {
								subredditName: n,
								contributor: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						default:
							return e
					}
				},
				Ke = Object(F.c)({
					listing: We,
					search: Me
				}),
				He = Object(F.c)({
					diff: K,
					directory: q,
					pages: Q,
					pageSettings: Z,
					revisions: de,
					wikiBannedContributors: Ee,
					wikiContributors: Ke
				});
			Object(W.a)({
				pages: {
					subredditWiki: He
				}
			});
			const qe = Object(d.a)(f.c),
				Ge = Object(d.a)(f.b),
				ze = Object(d.a)(f.a),
				Qe = (e, t, n, r) => {
					return n === P.j ? Je(e, t) : !!Object(y.c)(e, {
						subredditName: t,
						wikiPageName: n,
						revisionId: r
					})
				},
				Je = (e, t) => !!Object(y.b)(e, {
					subredditName: t
				}),
				Xe = e => async (t, n, s) => {
					const {
						canShowFailToast: i,
						wikiPageName: d
					} = e, c = d === P.j, l = {
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
					const m = await Object(R.a)(s.gqlContext(), l),
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
							type: o.I.NOT_FOUND_ERROR
						}
					})), i && t(Object(h.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: B.b.Error,
						text: r.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Xe(e)
					}))), !(!m.ok || !a()(b.data.subreddit)) || !(!m.ok || !p)
				}, Ze = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (n, r) => {
						const s = r(),
							a = {
								sort: o.W.HOT
							},
							i = Object(c.a)(e, a.sort),
							d = s.listings.postOrder.api.error[i],
							l = s.listings.postOrder.api.pending[i],
							u = !!s.listings.postOrder.ids[i];
						return !!(l || u && !d) || (await n(Object(p.subredditDataRequested)(i, e, a, t)), !r().listings.postOrder.api.error[i])
					}
				}, Ye = e => async (t, n) => {
					const {
						params: r,
						url: s
					} = e, {
						wikiPageName: a
					} = r, o = Object(L.a)(s, r);
					let d = !1;
					return P.l.includes(a || "") ? (await (async (e, t) => {
						const n = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = n
					})(e.url), d = !0) : s !== o && (await t(Object(i.c)(o)), d = !0), d
				}, Ve = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, a, i) => {
						const {
							subredditName: d = P.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[S.I], m = t[S.J], b = u ? Object(x.a)(u) : void 0, p = m ? Object(x.a)(m) : void 0, f = c === P.j, k = l === P.m.Revisions;
						let _ = !1,
							w = !1;
						if (n) {
							const {
								pageName: t
							} = e;
							_ = t === o.fc.WikiContributors, w = t === o.fc.WikiBanned
						}
						const y = a(),
							O = (f || n) && !Je(y, d),
							I = !!c && !Qe(y, d, c, b),
							E = [];
						E.push(s(Ze(d))), (O || I) && E.push(s(Xe({
							includeDirectory: O,
							includePageData: I,
							revisionId: b,
							subredditName: d,
							wikiPageName: c
						}))), l === P.m.Settings && c && E.push(s(Object(N.c)(d, c))), c && b && p && E.push(s(j({
							comparisonRevisionId: p,
							revisionId: b,
							subredditName: d,
							wikiPageName: c
						}))), k && E.push(s(Object(C.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), _ && E.push(s(Object(v.e)(d))), w && E.push(s(Object(g.e)(d))), (await Promise.all(E)).every(Boolean) || s(Object(h.f)({
							kind: B.b.Error,
							text: r.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: Ve(e, t, n)
						}))
					}
				}, $e = e => async (t, n) => {
					if (await t(Ye(e))) return;
					const {
						params: r,
						queryParams: s
					} = e, a = r.subredditName || P.e;
					t(u.m({
						title: r.wikiPageName ? `${r.wikiPageName} - ${a}` : `wiki - ${a}`
					})), await t(Ve(r, s));
					const i = Object(D.x)(n(), {
							subredditName: a
						}),
						o = n();
					i && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(b.b)(A.a.SUBREDDIT))
					}), t(Object(b.d)({
						isViewSafe: Object(T.a)([], [i])
					})))
				}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return re
			})), n.d(t, "b", (function() {
				return ie
			})), n.d(t, "e", (function() {
				return oe
			})), n.d(t, "a", (function() {
				return de
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/get.js"),
				a = n.n(s),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/apiRequestState.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(g.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: n
			});
			var k = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				x = n("./src/reddit/models/SubredditModeration/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/bannedUser.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/actions/subredditModeration/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				N = n("./node_modules/redux/es/redux.js");
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.o:
					case E.n:
						return null;
					case E.m:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.o: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(x.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case E.n:
						case E.m: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(x.e)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				R = Object(N.c)({
					error: C,
					pending: P
				});
			const T = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.n: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, s = Object(x.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				B = n("./src/reddit/actions/inContextModeration.ts");
			var A = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case B.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var D = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.n: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				W = n("./node_modules/icepick/icepick.js");
			const F = {};
			var M = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.l:
					case E.n: {
						const {
							subredditId: n,
							bannedUsers: r
						} = t.payload;
						return Object(W.merge)(e, {
							[n]: r
						})
					}
					case E.s: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(W.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case E.r:
					case E.q:
						return null;
					case E.p:
						return t.payload;
					default:
						return e
				}
			};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.r:
							return !0;
						case E.q:
						case E.p:
							return !1;
						default:
							return e
					}
				},
				q = Object(N.c)({
					error: K,
					pending: H
				});
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.r:
						case E.p:
							return null;
						case E.q: {
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
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.n: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case E.s: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case E.l: {
							const {
								subredditId: n,
								bannedUserIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				X = Object(N.c)({
					api: R,
					fetchedTokens: U,
					inContext: A,
					loadMore: D,
					models: M,
					search: z,
					userOrder: J
				});
			Object(j.a)({
				features: {
					banned: X
				}
			});
			const Z = Object(i.a)(E.o),
				Y = Object(i.a)(E.n),
				V = Object(i.a)(E.m),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, r, s) => {
						let {
							apiContext: a
						} = s;
						const i = r(),
							o = t.after || "",
							d = Object(x.e)(e, o),
							c = i.features.banned.fetchedTokens[d];
						if (i.features.banned.api.pending[d] || c) return;
						n(Z({
							subredditId: e,
							fetchedToken: o
						}));
						const l = i.subreddits.models[e].name,
							u = await v(a(), l, t);
						u.ok ? n(Y({
							...u.body,
							fetchedToken: o
						})) : n(V({
							subredditId: e,
							fetchedToken: o
						}))
					}
				},
				ee = Object(i.a)(E.r),
				te = Object(i.a)(E.q),
				ne = Object(i.a)(E.p),
				re = (e, t) => async (n, r, s) => {
					let {
						apiContext: a
					} = s;
					const i = r().subreddits.models[e].name,
						o = {
							username: Object(k.a)(t)
						};
					n(ee());
					const d = await v(a(), i, o);
					d.ok ? n(te(d.body)) : n(ne(d.error))
				}, se = Object(i.a)(E.l), ae = Object(i.a)(E.s), ie = (e, t, n) => async (s, i, d) => {
					let {
						apiContext: c
					} = d;
					const u = i(),
						h = u.subreddits.models[e].url,
						g = u.subreddits.models[e].name;
					t.username = Object(k.a)(t.username), s(Object(o.h)(n));
					const x = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(c(), h, t);
					if (x.ok) {
						s(Object(o.e)(n));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: _.b.SuccessMod,
							text: r.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await v(c(), g, e);
						a.ok && s(se(a.body))
					} else {
						s(Object(o.f)(n, x.error));
						const e = a()(x, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (n, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s().subreddits.models[e].url,
						c = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), d, t);
					if (c.ok) n(ae({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: _.b.SuccessMod,
						text: r.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(c, "body.json.errors[0][1]", r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (n, r) => {
					const s = r();
					await Promise.all([(async () => {
						if (!Object(w.b)(u.a.BAN_USER)(s) && !Object(O.P)(s, {
								subredditId: e
							})) {
							const t = Object(O.S)(s, {
								subredditId: e
							});
							await n(Object(c.o)(t.name))
						}
					})(), (async () => {
						const r = Object(I.Ab)(s, {
							userName: t
						});
						if (!r) return;
						const a = Object(y.h)(s, {
							subredditId: e
						});
						a && a[r.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(d.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			}));
			const r = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				s = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				a = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				i = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return k
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/SubredditWikiBannedContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var b = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: n,
						pageInfo: r
					} = t, s = [], a = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n,
							editWikiBanInfo: r
						} = e.node;
						n.id && n.name && n.icon && (a[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t,
							daysRemaining: r.daysRemaining,
							note: r.note
						}, s.push(n.id))
					}), {
						afterToken: r.hasNextPage ? r.endCursor : null,
						bannedContributors: a,
						userOrder: s
					}
				},
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const h = Object(a.a)(f.d),
				g = Object(a.a)(f.c),
				v = Object(a.a)(f.b),
				k = e => async (t, n, r) => {
					t(h({
						subredditName: e
					}));
					const a = {
							subredditName: e
						},
						i = await m(r.gqlContext(), a);
					if (i.ok) {
						const n = i.body,
							r = n.data.subreddit && n.data.subreddit.wiki;
						if (r) {
							const n = b(r);
							t(g({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = i.error || {
							type: s.I.UNKNOWN_ERROR
						};
						t(v({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return i.ok
				}, x = Object(a.a)(f.a), _ = (e, t) => async (n, s, a) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const r = b(t.data.subreddit.wiki);
							n(x({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(i.f)({
						kind: p.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e, t)
					}));
					return d.ok
				}, w = Object(a.a)(f.e), y = (e, t) => async (n, a, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.jb.POST,
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
						n(Object(i.f)({
							kind: p.b.SuccessMod,
							text: r.fbt._("Successfully banned user", null, {
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
							n(w({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === s.I.USER_DOESNT_EXIST && (e = r.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), n(Object(i.f)({
							kind: p.b.Error,
							text: e || r.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, O = Object(a.a)(f.f), I = (e, t) => async (n, a, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.jb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (n(Object(i.f)({
						kind: p.b.SuccessMod,
						text: r.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), n(O({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(i.f)({
						kind: p.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: I(e, t)
					})), u.ok
				}, E = Object(a.a)(f.g), j = (e, t) => async (n, s, a) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const r = b(t.data.subreddit.wiki),
								s = Object.keys(r.bannedContributors)[0];
							n(E({
								subredditName: e.toLowerCase(),
								bannedContributor: r.bannedContributors[s]
							}))
						}
					} else n(Object(i.f)({
						kind: p.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return c
			}));
			const r = "WIKI_CONTRIBUTORS_PENDING",
				s = "WIKI_CONTRIBUTORS_LOADED",
				a = "WIKI_CONTRIBUTORS_FAILED",
				i = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return k
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/redditGQL/operations/SubredditWikiContributors.json");
			const m = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var b = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: n,
						pageInfo: r
					} = t, s = [], a = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n
						} = e.node;
						n.id && n.name && n.icon && (a[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t
						}, s.push(n.id))
					}), {
						afterToken: r.hasNextPage ? r.endCursor : null,
						contributors: a,
						userOrder: s
					}
				},
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const h = Object(a.a)(f.d),
				g = Object(a.a)(f.c),
				v = Object(a.a)(f.b),
				k = e => async (t, n, r) => {
					t(h({
						subredditName: e
					}));
					const a = {
							subredditName: e
						},
						i = await m(r.gqlContext(), a);
					if (i.ok) {
						const n = i.body,
							r = n.data.subreddit && n.data.subreddit.wiki;
						if (r) {
							const n = b(r);
							t(g({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = i.error || {
							type: s.I.UNKNOWN_ERROR
						};
						t(v({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return i.ok
				}, x = Object(a.a)(f.a), _ = (e, t) => async (n, s, a) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const r = b(t.data.subreddit.wiki);
							n(x({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(i.f)({
						kind: p.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e, t)
					}));
					return d.ok
				}, w = Object(a.a)(f.e), y = (e, t) => async (n, a, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.jb.POST,
						data: {
							api_type: "json",
							name: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						n(Object(i.f)({
							kind: p.b.SuccessMod,
							text: r.fbt._("User has been successfully added", null, {
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
								r = Object.keys(t.contributors)[0];
							!!a().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][r] || n(w({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === s.I.USER_DOESNT_EXIST ? e = r.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === s.I.BANNED_FROM_SUBREDDIT && (e = r.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), n(Object(i.f)({
							kind: p.b.Error,
							text: e || r.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, O = Object(a.a)(f.f), I = (e, t) => async (n, a, d) => {
					const u = await ((e, t, n) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.jb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (n(Object(i.f)({
						kind: p.b.SuccessMod,
						text: r.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), n(O({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(i.f)({
						kind: p.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: I(e, t)
					})), u.ok
				}, E = Object(a.a)(f.g), j = (e, t) => async (n, s, a) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(a.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const r = b(t.data.subreddit.wiki),
								s = Object.keys(r.contributors)[0];
							n(E({
								subredditName: e.toLowerCase(),
								contributor: r.contributors[s]
							}))
						}
					} else n(Object(i.f)({
						kind: p.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			const r = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				s = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				a = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				i = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return w
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "d", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/subredditSettings.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				b = n("./src/redditGQL/operations/SubredditWikiPageSettings.json");
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
						editorsInfo: n,
						isVisible: r
					} = e, {
						edges: s,
						pageInfo: a
					} = n, i = [];
					return s.forEach(e => {
						e.node.name && e.node.icon && i.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: i,
						isVisible: r,
						afterToken: a.hasNextPage ? a.endCursor : null
					}
				},
				g = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const _ = Object(a.a)(x.c),
				w = (e, t) => async (n, r, s) => {
					const a = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(s.gqlContext(), a),
						d = Object(k.D)(r(), e);
					if (Object(k.U)(r(), d) || await n(Object(i.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = h(t.page.settings);
							n(_({
								pageKey: Object(g.a)(a),
								settings: e
							}))
						}
					}
					return o.ok
				}, y = Object(a.a)(x.b), O = (e, t, n) => async (s, a, i) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: n
						},
						c = await p(i.gqlContext(), d);
					if (c.ok) {
						const n = c.body,
							r = n.data.subreddit && n.data.subreddit.wiki;
						if (r && r.page) {
							const n = h(r.page.settings),
								{
									editorsInfo: a,
									afterToken: i
								} = n;
							s(y({
								editorsInfo: a,
								afterToken: i,
								pageKey: Object(g.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else s(Object(o.f)({
						kind: v.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t, n)
					}));
					return c.ok
				}, I = Object(a.a)(x.d), E = e => {
					let {
						editPermissions: t,
						isVisible: n,
						wikiPageName: r,
						subredditName: a
					} = e;
					return async (e, i, o) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
							method: s.jb.POST,
							data: {
								permlevel: f[e.editPermissions],
								listed: e.isVisible ? "on" : void 0
							}
						}))({
							context: o.apiContext(),
							editPermissions: t,
							isVisible: n,
							wikiPageName: r,
							subredditName: a
						});
						return c.ok && e(I({
							editPermissions: t,
							isVisible: n,
							pageKey: Object(g.a)({
								wikiPageName: r,
								subredditName: a
							})
						})), c.ok
					}
				}, j = e => {
					let {
						subredditName: t,
						username: n,
						wikiPageName: a
					} = e;
					return async (e, i, c) => {
						const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
							method: s.jb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: c.apiContext(),
							wikiPageName: a,
							subredditName: t,
							username: n
						});
						if (m.ok) e(Object(o.f)({
							kind: v.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(w(t, a));
						else if (m.error) {
							const t = m.error.type;
							let n = r.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === s.I.NOT_FOUND_ERROR && (n = r.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(o.f)({
								kind: v.b.Error,
								text: n
							}))
						}
						return m.ok
					}
				}, N = Object(a.a)(x.a), C = e => {
					let {
						subredditName: t,
						username: n,
						wikiPageName: r
					} = e;
					return async (e, a, i) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
							method: s.jb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: i.apiContext(),
							wikiPageName: r,
							subredditName: t,
							username: n
						});
						return c.ok && (e(Object(o.f)({
							kind: v.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(N({
							username: n,
							pageKey: Object(g.a)({
								wikiPageName: r,
								subredditName: t
							})
						}))), c.ok
					}
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			}));
			const r = "WIKI_REVISIONS_PENDING",
				s = "WIKI_REVISIONS_LOADED",
				a = "WIKI_REVISIONS_FAILED",
				i = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return I
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/WikiRevisions.json");
			var l = n("./src/lib/makeApiRequest/index.ts"),
				u = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts"),
				b = n("./src/reddit/helpers/wiki/wikiRevision.ts");
			var p = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: s.jb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var f = (e, t) => Object(l.a)(Object(u.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: s.jb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(b.b)(t.revisionId)
				}
			});
			var h = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						n = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!n) throw new Error("Invalid response");
					return (e => {
						const t = {},
							n = [];
						return e.edges.forEach(e => {
							const r = e.node;
							t[r.id] = r, n.push(r.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: n
						}
					})(n)
				},
				g = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				v = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/subredditWiki.ts"),
				_ = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const w = Object(a.a)(_.d),
				y = Object(a.a)(_.c),
				O = Object(a.a)(_.b),
				I = e => async (t, n, a) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: b
					} = e, p = n(), f = Object(g.a)(e), v = Object(x.p)(p, {
						listingKey: f
					});
					if (!o && !!v) return !0;
					const _ = v && v.pageInfo.endCursor || void 0;
					if (!(!v || v.pageInfo.hasNextPage)) return !0;
					const E = {
							after: _,
							isRecent: u,
							subredditName: m,
							wikiPageName: b
						},
						j = {
							key: f,
							options: E
						};
					t(w(j));
					const N = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(a.gqlContext(), E);
					if (N.ok) {
						const e = N.body;
						if (e.data.subreddit) {
							const n = h(e.data);
							t(y({
								...j,
								...n
							}))
						}
					} else {
						const n = N.error || {
							type: s.I.UNKNOWN_ERROR
						};
						t(O({
							...j,
							error: n
						})), l && t(Object(i.f)({
							kind: k.b.Error,
							text: r.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: I(e)
						}))
					}
					return N.ok
				}, E = Object(a.a)(_.a), j = e => async (t, n, s) => {
					const {
						subredditName: a,
						wikiPageName: d
					} = e, c = Object(v.a)({
						...e,
						revisionId: void 0
					}), l = Object(g.a)({
						...e,
						isRecent: !1
					}), u = Object(g.a)({
						...e,
						isRecent: !0
					}), m = Object(x.p)(n(), {
						listingKey: l
					}), b = m && m.ids[0];
					if ((await f(s.apiContext(), e)).ok) {
						const e = (await Object(o.a)(s.gqlContext(), {
								includePageData: !0,
								subredditName: a,
								wikiPageName: d
							})).body,
							n = e.data.subreddit && e.data.subreddit.wiki,
							m = n && n.page;
						if (!m || !m.revision) return;
						if (m.revision.id === b) return void t(Object(i.f)({
							kind: k.b.SuccessCommunityGreen,
							text: r.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(E({
							page: m,
							pageKey: c,
							pageRevisionsListingKey: l,
							recentRevisionsListingKey: u,
							subredditName: a,
							wikiPageName: d
						}))
					} else t(Object(i.f)({
						kind: k.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}, N = Object(a.a)(_.e), C = e => async (t, n, s) => {
					const a = await p(s.apiContext(), e);
					if (a.ok) {
						const n = a.body.status;
						t(N({
							revisionId: e.revisionId,
							isHidden: n
						}))
					} else t(Object(i.f)({
						kind: k.b.Error,
						text: r.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/chat/toggle.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(r || (r = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: n,
					className: s,
					sendEvent: i,
					contextId: o,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					eventSource: p,
					onClick: f,
					onAddUserToQuickReplyList: h,
					children: g,
					style: v
				} = e;
				return a.a.createElement(c.t, {
					onClick: e => {
						if (f && f(e), t(), p === r.awardNotification) return h();
						i(Object(l.b)(o))
					},
					className: s,
					text: n,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					style: v
				}, g)
			};
			u.displayName = "ChatButton";
			const m = Object(i.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: r
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.b)(r, n))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(o.a)(r))
					}
				}
			});
			t.b = m(Object(d.c)(u))
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
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/lib/loginHref/index.ts"),
				m = n("./src/reddit/actions/contentGate.ts"),
				b = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				f = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/reddit/components/Footer/index.tsx"),
				g = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = n("./src/reddit/components/RichTextJson/index.tsx"),
				k = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				x = n("./src/reddit/components/TextWithLinks/index.tsx"),
				_ = n("./src/reddit/constants/parameters.ts"),
				w = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/chat/controls/Svg/index.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var E = e => a.a.createElement(O.a, I({}, e, {
					viewBox: "-1 -1 21 21"
				}), a.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				j = n("./src/reddit/models/ContentGate.ts"),
				N = n("./src/lib/constants/index.ts"),
				C = n("./src/reddit/selectors/platform.ts"),
				S = n("./src/reddit/selectors/user.ts");
			var P = n("./src/reddit/selectors/meta.ts"),
				R = n("./src/reddit/components/ContentGate/index.m.less"),
				T = n.n(R);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = l.a.wrapped(E, "PrivateKey", T.a), A = l.a.div("ButtonsContainer", T.a), L = l.a.div("Container", T.a), D = l.a.div("ContainerExp", T.a), W = l.a.div("Description", T.a), F = l.a.div("PrivateSubredditDetails", T.a), M = l.a.div("PrivateSubredditDescription", T.a), K = l.a.h3("PrivateSubredditName", T.a), H = l.a.a("Link", T.a), q = l.a.wrapped(y.n, "LinkRouterButton", T.a), G = l.a.wrapped(y.m, "LinkButton", T.a), z = l.a.wrapped(y.q, "SecondaryLinkRouterButton", T.a), Q = l.a.wrapped(y.p, "SecondaryLinkButton", T.a), J = l.a.wrapped(q, "GoHomeLinkButton", T.a), X = l.a.wrapped(f.a, "CreateCommunityButton", T.a), Z = l.a.img("Image", T.a), Y = l.a.img("ImagePlaceholder", T.a), V = l.a.wrapped(q, "LeftLinkRouterButton", T.a), $ = l.a.wrapped(G, "LeftLinkButton", T.a), ee = l.a.wrapped(Q, "SecondaryLeftLinkButton", T.a), te = l.a.wrapped(z, "SecondaryLeftLinkRouterButton", T.a), ne = l.a.h3("Title", T.a), re = l.a.div("PageBody", T.a), se = l.a.div("InterstitialMessageWrapper", T.a), ae = Object(c.c)({
				isLoggedIn: S.P,
				origin: P.j,
				user: S.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(S.Q)(e)) return !1;
					const t = Object(C.d)(e);
					if (!t) return !1;
					const n = Object(S.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: r
					} = n;
					if (!r) return !1;
					const s = 30 * N.B;
					return r > Date.now() - s
				})(e),
				isSeo: P.g
			}), ie = Object(w.u)(), oe = Object(i.b)(ae, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(b.D(n)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(b.v(n)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.o)())
					}
				}
			}), de = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: i,
					isLoggedIn: o,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: l,
					location: b,
					origin: f,
					pageLayer: h,
					quarantineRequiresEmail: w,
					quarantineMessage: y,
					quarantineMessageHtml: O,
					quarantineMessageRTJson: I,
					interstitialWarningMessage: E,
					interstitialWarningMessageHtml: N,
					interstitialWarningMessageRTJson: C,
					setNSFWPreference: S,
					subredditDescription: P,
					subredditName: R,
					user: L
				} = e, D = async () => {
					if (o ? await S() : await Object(m.n)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(_.i, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case j.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Z, {
							src: `${r.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(ne, null, U._("r/{community name} is a Reddit Premium community", [U._param("community name", R)], {
							hk: "2lyDwB"
						})), a.a.createElement(W, null, U._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(A, null, L ? a.a.createElement(ee, {
							href: `${r.a.redditUrl}/premium`,
							redditStyle: !0
						}, U._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement($, {
							href: Object(u.a)(b, f),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), L ? a.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(Q, {
							href: Object(u.a)(b, f),
							redditStyle: !0
						}, U._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case j.a.Nsfw:
					case j.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(Z, {
							src: `${r.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(ne, null, n === j.a.Nsfw ? U._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : U._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(W, null, U._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(A, null, a.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, U._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(Q, {
							onClick: D,
							redditStyle: !0
						}, U._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case j.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(B, null), a.a.createElement(ne, null, "r/", R, " ", U._("is a private community", null, {
							hk: "7zZmq"
						})), P && P.length && a.a.createElement(F, null, a.a.createElement(K, null, "r/", R), a.a.createElement(M, null, a.a.createElement("div", null, P))), a.a.createElement(W, null, U._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", R, " ", U._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), U._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(A, null, L ? a.a.createElement(a.a.Fragment, null, !d && a.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: T.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), a.a.createElement(ee, {
							href: `${r.a.redditUrl}/message/compose?to=/r/${R}`,
							redditStyle: !0
						}, U._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(ee, {
							href: Object(u.a)(b, f),
							redditStyle: !0
						}, U._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), R && a.a.createElement(k.a, {
							subredditName: R
						}));
					case j.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Z, {
							src: `${r.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), a.a.createElement(ne, null, U._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(W, null, U._("This community is {=quarantined}", [U._param("=quarantined", a.a.createElement(H, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, U._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), a.a.createElement(se, null, I ? a.a.createElement(v.a, {
							content: I,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : O ? a.a.createElement(g.a, {
							html: O
						}) : y || U._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), U._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(A, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? a.a.createElement(A, null, a.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, U._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(G, {
								href: `${r.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, U._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(A, null, a.a.createElement(V, {
								to: "/",
								redditStyle: !0
							}, U._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(Q, {
								onClick: t,
								redditStyle: !0
							}, U._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(L, s, w)));
					case j.a.GatedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(ne, null, U._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), a.a.createElement(W, null, a.a.createElement(se, null, C ? a.a.createElement(v.a, {
							content: C,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : N ? a.a.createElement(g.a, {
							html: N
						}) : E), U._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), a.a.createElement(A, null, a.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, U._("No Thank You", null, {
							hk: "4B26AR"
						})), a.a.createElement(Q, {
							onClick: i,
							redditStyle: !0
						}, U._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case j.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(Z, {
							src: `${r.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(ne, null, U._("r/{community name} has been banned from Reddit", [U._param("community name", R)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(W, null, e ? a.a.createElement(x.a, {
							linkClassName: T.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : U._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(A, null, a.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case j.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Z, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ne, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(A, null, a.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, U._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case j.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(Y, null), a.a.createElement(ne, null, U._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(W, null, U._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(A, null, L && a.a.createElement(X, {
							eventSource: "content_gate"
						}), a.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case j.a.ProfileDoesNotExist:
					case j.a.ProfileDeleted:
					case j.a.ProfileSuspended:
					case j.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Z, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ne, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case j.a.ProfileBlockedForLegalReason:
									return U._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case j.a.ProfileDeleted:
									return U._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case j.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, U._("This account has been {=suspended} .", [U._param("=suspended", a.a.createElement(H, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, U._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case j.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(ne, null, U._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(W, null, U._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(A, null, a.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case j.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(Z, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ne, null, U._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(A, null, a.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, U._("Go Home", null, {
							hk: "49p4or"
						}))));
					case j.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Z, {
							src: `${r.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(ne, null, U._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(A, null, a.a.createElement(q, {
							to: "/",
							redditStyle: !0
						}, U._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ie(oe(Object(o.i)(e => {
				const t = Object(s.useContext)(d.a) ? D : L;
				return a.a.createElement(t, null, a.a.createElement("div", {
					"data-testid": "content-gate"
				}, a.a.createElement(re, null, de(e))), a.a.createElement(h.a, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
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
			t.a = s
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(h),
				v = n("./src/lib/lessComponent.tsx");
			const k = "create-community-button",
				x = v.a.wrapped(l.c, "StyledTooltip", g.a),
				_ = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.pb)(e),
					userIsSuspended: f.X
				});
			t.a = Object(i.b)(_, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.c)(n)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
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
					onShowTooltip: s,
					onHideTooltip: i,
					openCommunityCreation: o,
					sendEvent: d,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: l,
					onClick: u
				} = e;
				return a.a.createElement(b.t, {
					className: t,
					disabled: l || c,
					onClick: e => {
						u && u(e), o(d)
					},
					onMouseEnter: s,
					onMouseLeave: i,
					priority: b.c.Secondary,
					id: k,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? a.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: k,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? a.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: k,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~NftProfileUnit"), n.e("NftProfileUnit")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/ImageInput/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/models/ApiRequestState/index.ts"),
				u = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = n("./src/reddit/components/EditableImage/index.m.less"),
				b = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: n,
					className: r,
					isProfileCard: m,
					isLoading: p,
					imageUrl: f,
					onFileSelected: h
				} = e;
				const g = Object(a.e)(u.a);
				return s.a.createElement("div", {
					className: Object(i.a)(b.a.Container, r)
				}, s.a.createElement("label", {
					className: b.a.HitBox
				}, s.a.createElement("span", {
					className: b.a.ImageContainer,
					role: "presentation"
				}, f ? s.a.createElement("img", {
					alt: t,
					className: b.a.Image,
					src: f
				}) : n), s.a.createElement(o.a, {
					className: b.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						h(e, t)
					},
					isPending: g ? p : void 0
				}), !p && s.a.createElement("div", {
					className: Object(i.a)(b.a.EditButton, {
						[b.a.profileCard]: m
					})
				}, s.a.createElement(c.a, {
					name: "add_media",
					className: b.a.EditIcon
				}))), p && s.a.createElement(d.a, {
					className: b.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/selectors/commentSelector.ts"),
				u = n("./src/reddit/selectors/gold/awardIcon.ts"),
				m = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/selectors/modUserNotes.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/tooltip.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/selectors/userFlair.ts"),
				_ = n("./src/reddit/selectors/userPrefs.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				O = n("./node_modules/fbt/lib/FbtPublic.js"),
				I = n("./src/config.ts"),
				E = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = n("./src/lib/lessComponent.tsx"),
				N = n("./src/lib/prettyPrintNumber/index.ts"),
				C = n("./src/reddit/components/ChatButton/index.tsx"),
				S = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				P = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				R = n("./src/reddit/components/SubscribeButton/index.tsx"),
				T = n("./src/reddit/components/UserIcon/index.tsx"),
				U = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/endpoints/profile/info.ts"),
				A = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				L = n("./src/reddit/icons/fonts/Info/index.tsx"),
				D = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				W = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				F = n("./src/reddit/models/Gold/Award.ts"),
				M = n("./src/reddit/models/User/index.ts"),
				K = n("./src/reddit/components/HumanDate/index.tsx"),
				H = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				q = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				G = n("./src/reddit/actions/inContextModeration.ts"),
				z = n("./src/reddit/actions/modal.ts"),
				Q = n("./src/reddit/actions/subredditModeration/ban.ts"),
				J = n("./src/reddit/constants/modals.ts"),
				X = n("./src/reddit/components/Hovercards/helpers.ts"),
				Z = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				V = n("./src/reddit/selectors/bannedUser.ts"),
				$ = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = Object(i.c)({
				hasModMailPermissions: Object(m.b)(Y.c.mail),
				isUserBanned: (e, t) => !!Object(V.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(k.Ab)(e, {
					userName: t.username
				})
			});
			class re extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: r,
						onUnbanUser: a,
						sendEvent: i,
						toggleBanModal: o,
						toggleMuteModal: d
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, r ? s.a.createElement(X.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), i(A.e(t))
						}
					}, s.a.createElement(Z.a, {
						name: "ban",
						isFilled: !0,
						className: ee.a.icon
					}), te._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(X.a, {
						role: "button",
						onClick: () => {
							o(), i(A.a(t))
						}
					}, s.a.createElement(Z.a, {
						name: "ban",
						className: ee.a.icon
					}), te._("Ban User", null, {
						hk: "3OhuLx"
					})), n && s.a.createElement(X.a, {
						role: "button",
						onClick: () => {
							d(), i(A.d(t))
						}
					}, s.a.createElement(Z.a, {
						name: "mod_mute",
						className: ee.a.icon
					}), te._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var se = Object(a.b)(ne, (e, t) => {
					let {
						username: n,
						subredditId: r,
						contextId: s
					} = t;
					return {
						onUnbanUser: t => e(Object(Q.e)(r, t)),
						requestUserBanInfo: () => e(Object(Q.c)(r, {
							username: n
						})),
						toggleBanModal: () => {
							e(Object(G.c)({
								username: n,
								subredditId: r,
								contextId: s
							})), e(Object(Q.a)(r, n))
						},
						toggleMuteModal: () => {
							e(Object(G.d)({
								username: n,
								subredditId: r,
								contextId: s
							})), e(Object(z.i)(J.a.MUTE_USER))
						}
					}
				})(re),
				ae = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ae.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(X.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(A.c(e.contextId))
					}
				}, s.a.createElement(Z.a, {
					name: "tag",
					className: ee.a.icon
				}), ie._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ce = n.n(de);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = j.a.wrapped(T.a, "UserIcon", ce.a),
				me = j.a.wrapped(R.a, "SubscribeButton", ce.a),
				be = j.a.wrapped(C.b, "ChatButton", ce.a),
				pe = j.a.wrapped(W.a, "PremiumIcon", ce.a),
				fe = j.a.wrapped(E.a, "UserNameLink", ce.a),
				he = j.a.div("UserNameMetaData", ce.a),
				ge = j.a.div("MetaDataItem", ce.a),
				ve = j.a.div("Bullet", ce.a),
				ke = j.a.div("UserNameContainer", ce.a),
				xe = j.a.div("KarmaGrid", ce.a),
				_e = j.a.div("GenericKarma", ce.a),
				we = j.a.a("InfoLink", ce.a),
				ye = j.a.div("KarmaCount", ce.a),
				Oe = j.a.div("GenericKarmaLabel", ce.a),
				Ie = j.a.div("BannerImage", ce.a),
				Ee = j.a.div("UserContainer", ce.a),
				je = j.a.div("BottomSpacer", ce.a),
				Ne = j.a.div("Container", ce.a),
				Ce = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(fe, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && s.a.createElement(D.a, {
					className: ce.a.adminIcon,
					title: O.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(E.a, {
					to: "/premium"
				}, s.a.createElement(pe, null))), s.a.createElement(he, null, s.a.createElement(ge, null, `u/${e.userName}`, s.a.createElement(ve, null, "•")), s.a.createElement(ge, null, (e.user.createdUtc || e.user.created) && s.a.createElement(K.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Se = e => {
					const {
						user: {
							karma: t
						}
					} = e, n = {
						...B.a,
						...t
					};
					return s.a.createElement(xe, null, s.a.createElement(_e, null, s.a.createElement(ye, null, Object(N.b)(n.fromPosts)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [O.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(_e, null, s.a.createElement(ye, null, Object(N.b)(n.fromComments)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [O.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(_e, null, s.a.createElement(ye, null, Object(N.b)(n.fromAwardsReceived)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [O.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(we, {
						href: F.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(L.a, {
						className: ce.a.infoIcon
					})))), s.a.createElement(_e, null, s.a.createElement(ye, null, Object(N.b)(n.fromAwardsGiven)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [O.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(we, {
						href: F.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(L.a, {
						className: ce.a.infoIcon
					})))))
				},
				Pe = e => {
					var t, n;
					const {
						className: r,
						contextId: a,
						currentUser: i,
						hideNSFWPref: o,
						hoverId: d,
						isLoggedIn: c,
						onClickSnoovatar: l,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: b,
						sendEvent: p,
						style: f,
						subredditId: h,
						topAwardIcon: g,
						userName: v,
						user: k,
						userFlair: x,
						isCurrentUserBanned: _,
						userProfileStyles: w,
						acceptChats: y,
						isCommentAuthorBlocked: E
					} = e;
					if (!k) return s.a.createElement(Ne, {
						style: f
					});
					const j = !!i && Object(M.e)(i) === v,
						N = !!(null == i ? void 0 : i.snoovatarFullBodyAsset),
						C = k.accountIcon || `${I.a.assetPath}/img/snoo_user_placeholder.png`,
						P = null == u ? void 0 : u.flair,
						R = null == u ? void 0 : u.access,
						T = (null == x ? void 0 : x.templateIds) && (null === (t = null == x ? void 0 : x.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						B = null === (n = null == x ? void 0 : x.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: L
						} = k,
						D = !!k.snoovatarFullBodyAsset,
						W = k.isNSFW && o;
					let F;
					return F = D ? !W && w && w.bannerBackgroundImage || void 0 : W ? `${I.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Ne, {
						className: r,
						id: d,
						style: f
					}, !D && F && s.a.createElement(Ie, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), s.a.createElement(Ee, null, D ? s.a.createElement(q.a, {
						isHovercard: !0,
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: N,
						isEmployee: k.isEmployee,
						isGold: k.isGold,
						isNSFW: k.isNSFW,
						isOwnProfile: j,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: k.snoovatarFullBodyAsset,
						title: null == b ? void 0 : b.title,
						userCreated: k.created,
						username: v,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(ke, null, s.a.createElement(ue, {
						iconUrl: C,
						isNSFW: k.isNSFW,
						userName: v
					}), s.a.createElement(Ce, {
						title: null == b ? void 0 : b.title,
						user: k,
						userName: v
					})), s.a.createElement(Se, {
						user: k
					}), L && s.a.createElement(H.a, {
						recentAwardings: L,
						topAwardIcon: g,
						username: v
					}), c && !j && !_ && y && !E && s.a.createElement(be, {
						contextId: a,
						priority: U.c.Secondary,
						userId: k.id,
						text: O.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), k.hasUserProfile && !_ && !E && !j && k.enableFollowers && s.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(A.h)(e ? "unfollow" : "follow", a),
						isFullWidth: !0,
						small: !0
					})), R && a && !j && h && s.a.createElement(se, {
						contextId: a,
						subredditId: h,
						sendEvent: p,
						username: v
					}), P && a && T && B && h && s.a.createElement(oe, {
						contextId: a,
						subredditId: h,
						sendEvent: p,
						username: v
					}), s.a.createElement(S.i, {
						contextId: a,
						subredditId: h,
						user: k
					}), !(R || c) && s.a.createElement(je, null))
				},
				Re = Object(P.a)(Pe),
				Te = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Re, le({
						isOpen: t
					}, e))
				};
			Te.WrappedComponent = Pe;
			var Ue = Te;
			const Be = Object(i.c)({
					activeTooltipId: v.a,
					currentUser: k.k,
					isLoggedIn: k.Q,
					hideNSFWPref: k.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(m.n)(e, {
							subredditId: n
						}) : void 0
					},
					prefersReducedAnimations: _.c,
					profile: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(f.j)(e, {
							profileName: n
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(u.e)(e, {
							userName: n,
							minSize: 32
						})
					},
					user: k.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: n
						} = t;
						return n ? Object(x.d)(e, {
							subredditId: n
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(g.l)(t) && Object(g.db)(e, t),
					userProfileStyles: (e, t) => Object(h.m)(e, Object(f.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(f.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: n
						} = t;
						const r = Object(w.e)(e),
							s = n || r && Object(g.D)(e, r.name);
						return !!s && Object(m.i)(e, s)
					},
					trophyCase: (e, t) => Object(f.r)(e, Object(f.m)(e, t.userName)),
					isNightMode: k.db,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const n = Object(c.a)(t.contextId) ? Object(p.G)(e, {
							postId: t.contextId
						}) : Object(l.b)(e, {
							commentId: t.contextId
						});
						return Object(b.a)(e, null == n ? void 0 : n.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: n
						} = t;
						return Object(g.eb)(e, {
							identifier: {
								name: n,
								type: "profile"
							}
						})
					}
				}),
				Ae = Object(a.b)(Be, (e, t) => ({
					onClickSnoovatar: () => e(Object(o.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Ae(e => e.isModWithUserNotesPermissions ? s.a.createElement(y.b, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId,
				user: e.user,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed,
				trophyCase: e.trophyCase,
				isNightMode: e.isNightMode,
				lastAuthorModNote: e.lastAuthorModNote,
				userIsSubscriber: e.userIsSubscriber
			}) : s.a.createElement(Ue, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx");
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
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, n) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
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
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
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
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/icons/fonts/Info/index.tsx"),
				c = n("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = n.n(c);
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
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/config.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = n.n(o);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: o
					} = t, l = r.description ? r.description : r.name;
					return s.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${n}/gilded`
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
					}, [c._param("award-name", r.name), c._plural(o)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/reddit/models/Image/index.tsx"),
				o = n("./src/reddit/components/EditableImage/index.tsx"),
				d = n("./src/reddit/models/User/index.ts"),
				c = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(i.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
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
					return n && Object(d.e)(n) === c ? a.a.createElement(o.a, {
						altText: r.fbt._("{userName} banner image", [r.fbt._param("userName", c)], {
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
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/preferences.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = Object(s.c)({
					currentUser: i.k,
					hideNSFWPref: i.F
				}),
				d = Object(r.b)(o, e => ({
					imageUpdateRequested: (t, n) => e(Object(a.C)(t, n))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: n,
					className: r,
					isOwnProfile: c,
					onClick: m
				} = e;
				return s.a.createElement(i.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !n && c,
						[l.a.compactButtonLayout]: t
					}, r)
				}, n ? s.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), n ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : c ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), n ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(o.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				o = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = n.n(d),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = n.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: n,
					username: r,
					editMode: d,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return s.a.createElement("div", {
					className: c.a.bannerWrapper
				}, s.a.createElement(o.a, {
					bannerUrl: t,
					isNSFW: n,
					userName: r
				}), d && t && (l ? s.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(i.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/components/HumanDate/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: n,
					url: r,
					userCreated: d,
					username: c,
					...l
				} = e;
				const u = n ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(i.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return r ? s.a.createElement(a.a, o({}, l, {
					className: t,
					to: r
				}), u) : s.a.createElement("span", o({}, l, {
					className: t
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				o = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			t.a = e => {
				let {
					title: t,
					username: n,
					isEmployee: a,
					isGold: l,
					isNSFW: m
				} = e;
				return i.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || n, a && i.a.createElement(o.a, {
					className: u.a.snoovatarAdminIcon,
					title: s.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), l && i.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", n)], {
						hk: "3Fylv"
					}),
					href: `${r.a.redditUrl}/premium`
				}, i.a.createElement(c.a, {
					className: u.a.snoovatarPremiumIcon
				})), m && i.a.createElement(d.a, {
					className: u.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/selectors/experiments/econ/index.ts"),
				m = n("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				b = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				f = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				h = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				g = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				v = n.n(g);
			const k = 25;

			function x(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function _(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const w = x("particleDelay", v.a),
				y = x("particleX", v.a),
				O = x("particleFloat", v.a),
				I = () => {
					const e = _(y),
						t = _(O),
						n = _(w);
					return Object(i.a)(v.a.particle, e, t, n)
				};
			class E extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < k; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: v.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${I()}`
					})
				}
			}
			var j = E,
				N = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				C = n.n(N),
				S = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: n,
					currentUserHasSnoovatar: r,
					editMode: g,
					isDeletingBanner: k,
					isEmployee: x,
					isGold: _,
					isNSFW: w,
					isOwnProfile: y,
					onClickSnoovatar: O,
					onDeleteBanner: I,
					prefersReducedAnimations: E,
					snoovatarUrl: N,
					title: P,
					userCreated: R,
					username: T,
					url: U,
					isHovercard: B
				} = e;
				const A = Object(a.e)(e => !y && !!N && Object(u.g)(e)),
					L = Object(a.e)(m.b),
					D = N && Object(c.e)(N) && L;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(f.a, {
					bannerBackgroundImage: t,
					editMode: !!g,
					isNSFW: w,
					username: T,
					isDeletingBanner: !!k,
					onDeleteBanner: I
				}), D ? s.a.createElement("div", {
					className: v.a.nftProfileUnitContainer
				}, s.a.createElement(o.a, {
					className: v.a.nftProfileUnit,
					imageUrl: N
				})) : s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: v.a.snoovatarContainer
				}, _ && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: v.a.topGlow
				}), s.a.createElement("div", {
					className: v.a.bottomGlow
				}), !E && s.a.createElement(j, null)), s.a.createElement("img", {
					className: Object(i.a)(v.a.snoovatar, {
						[v.a.premiumGlow]: _
					}),
					src: N || void 0
				})), !g && y && s.a.createElement(d.a, {
					to: "/settings/profile",
					className: v.a.snoovatarSettingsLink
				}, s.a.createElement(l.a, {
					name: "settings",
					className: C.a.settingsIcon
				}))), s.a.createElement(S.a, {
					isEmployee: x,
					isGold: _,
					isNSFW: w,
					title: P,
					username: T
				}), s.a.createElement(h.a, {
					className: v.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: T,
					userCreated: R,
					url: U
				}), (y || !r && !!N) && s.a.createElement(b.a, {
					compact: n,
					currentUserHasSnoovatar: r,
					isOwnProfile: y,
					onClick: O
				}), A && s.a.createElement(p.a, {
					username: T,
					isHovercard: !!B,
					share: {
						username: T
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(r.a)({
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
					const t = Object(i.e)(o.e),
						n = Object(i.e)(o.a);
					return t || n ? a.a.createElement(d, e) : null
				}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				o = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(o);
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
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SubredditWiki.json");
			const a = (e, t) => Object(r.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/sortBy.js"),
				s = n.n(r),
				a = n("./src/reddit/constants/wiki.ts");
			const i = e => {
				return s()(e, e => `${e.path}/`.startsWith(`${a.i}/`) ? `\0${e.path}` : e.path).filter(e => !a.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					n = [];
				return i(e).forEach(e => {
					const r = {
							...e,
							children: []
						},
						s = r.parent ? t.get(r.parent) : null;
					s ? s.children.push(r) : n.push(r), t.set(r.path, r)
				}), n
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: n,
					subredditName: r,
					wikiPageName: s
				} = e;
				return `[${r}]--[${s}]--[rev1:${n}]--[rev2:${t}]`.toLowerCase()
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
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/wiki.ts");
			const s = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${r.c}}$`),
				a = /^[-\w]+$/;
			var i;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(i || (i = {}));
			const o = e => {
					if (!a.test(e.toLowerCase())) return i.InvalidPageName
				},
				d = (e, t) => {
					const n = e.toLowerCase(),
						a = n.split("/")[0],
						o = r.b.has(a),
						d = r.f.has(a) && n !== r.h && n !== r.k;
					if (o || d) return i.RestrictedPageName;
					if (!s.test(n)) return i.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === n)) return i.PageAlreadyExists
					}
					return n.length > r.d ? i.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				s = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				o = n.n(i);
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
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.u
				}) === r.x.Enabled,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.Jc
				}) === r.kd
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
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
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "g", (function() {
				return w
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const a = [],
				i = (e, t) => {
					var n;
					const {
						subredditName: r
					} = t;
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.directory[r.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.subreddits.api.wiki.pending[n.toLowerCase()]
				},
				d = (e, t) => {
					var n;
					const r = Object(s.a)(t);
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.pages[r]
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
				b = (e, t) => {
					let {
						key: n
					} = t;
					return e.pages.subredditWiki.diff[n]
				},
				p = (e, t) => {
					const n = Object(s.a)(t);
					return e.pages.subredditWiki.pageSettings[n]
				},
				f = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[n.toLowerCase()]
				},
				h = Object(r.a)((e, t) => {
					let {
						subredditName: n
					} = t;
					const r = n.toLowerCase(),
						s = e.pages.subredditWiki.wikiContributors.listing,
						i = s.userOrder[r],
						o = s.models[r];
					return i ? i.map(e => o[e]) : a
				}),
				g = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[n.toLowerCase()]
				},
				v = (e, t) => {
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
				x = Object(r.a)((e, t) => {
					let {
						subredditName: n
					} = t;
					const r = n.toLowerCase(),
						s = e.pages.subredditWiki.wikiBannedContributors.listing,
						i = s.userOrder[r],
						o = s.models[r];
					return i ? i.map(e => o[e]) : a
				}),
				_ = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[n.toLowerCase()]
				},
				w = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[n.toLowerCase()]
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.a7d16fdd98f7642dca63.js.map