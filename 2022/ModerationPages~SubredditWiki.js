// https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.c5d9a332f418eab5adbc.js
// Retrieved at 5/16/2022, 4:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages~SubredditWiki", "reddit-components-ContentGate"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var r = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, s, a) {
				for (var i = -1, o = n(r((t - e) / (s || 1)), 0), d = Array(o); o--;) d[a ? o : ++i] = e, e += s;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseRange.js"),
				s = r("./node_modules/lodash/_isIterateeCall.js"),
				a = r("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, r, i) {
					return i && "number" != typeof i && s(t, r, i) && (r = i = void 0), t = a(t), void 0 === r ? (r = t, t = 0) : r = a(r), i = void 0 === i ? t < r ? 1 : -1 : a(i), n(t, r, i, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
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
				return Ge
			})), r.d(t, "subredditWikiDataLoaded", (function() {
				return qe
			})), r.d(t, "subredditWikiDataFailed", (function() {
				return ze
			})), r.d(t, "fetchSubredditWikiData", (function() {
				return Xe
			})), r.d(t, "handleWikiRedirects", (function() {
				return Ze
			})), r.d(t, "subredditWikDataRequested", (function() {
				return Ve
			})), r.d(t, "subredditWikiPageRequested", (function() {
				return $e
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
				g = r("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				v = r("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				k = r("./src/lib/makeGqlRequest/index.ts"),
				x = r("./src/reddit/helpers/wiki/wikiRevision.ts"),
				_ = r("./src/redditGQL/operations/WikiComparisonDiff.json");
			var w = r("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				y = r("./src/reddit/selectors/subredditWiki.ts");
			const O = Object(d.a)("WIKI_DIFF_PENDING"),
				I = Object(d.a)("WIKI_DIFF_LOADED"),
				j = Object(d.a)("WIKI_DIFF_FAILED"),
				E = e => async (t, r, n) => {
					const s = r(),
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
					}))(n.gqlContext(), e);
					let l = null,
						u = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							r = t && t.page && t.page.revisionComparisonDiffHtml;
						r ? u = r : l = {
							type: o.I.NOT_FOUND_ERROR
						}
					} else l = c.error || {
						type: o.I.UNKNOWN_ERROR
					};
					return t(l ? j({
						...d,
						error: l
					}) : I({
						...d,
						htmlDiff: u
					})), !l
				};
			var N = r("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				C = r("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				S = r("./src/reddit/constants/parameters.ts"),
				P = r("./src/reddit/constants/wiki.ts"),
				R = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				U = r("./src/reddit/helpers/brandSafety/index.ts"),
				T = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				B = r("./src/reddit/models/Toast/index.ts"),
				A = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				L = r("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				D = r("./src/reddit/selectors/subreddit.ts"),
				W = r("./src/lib/initializeClient/installReducer.ts"),
				F = r("./node_modules/redux/es/redux.js");
			const M = {};
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const H = {};
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				q = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const z = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
						case q.a: {
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
			const X = {};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Z = r("./src/lib/omitKey/index.ts");
			const V = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.b: {
						const {
							key: r,
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case q.d:
					case q.c: {
						const {
							key: r
						} = t.payload;
						return Object(Z.a)(e, r)
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
								key: r
							} = t.payload, n = t.type === q.d;
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
					error: $,
					pending: te
				}),
				ne = r("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const se = {};
			var ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case q.c: {
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
					case q.a: {
						const {
							page: {
								revision: r
							},
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: s
						} = t.payload, a = e[n];
						return a && r ? {
							...Object(Z.a)(e, s),
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
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
							} = t.payload, n = r.revision;
							return n ? {
								...e,
								[n.id]: n
							} : e
						}
						case q.e: {
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
			var ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
						return Object(Z.a)(e, r)
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
			const ge = {};
			var ve = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
							} = t.payload, s = Object(Z.a)(e[r], n);
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
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				je = Object(F.c)({
					listing: ye,
					search: Ie
				}),
				Ee = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const Ne = {};
			var Ce = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
						return Object(Z.a)(e, r)
					}
					default:
						return e
				}
			};
			const Re = {};
			var Ue = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Te = Object(F.c)({
					error: Pe,
					pending: Ue
				});
			const Be = {};
			var Ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
						} = t.payload, s = Object(Z.a)(e[r], n);
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
				We = Object(F.c)({
					afterToken: Ce,
					api: Te,
					models: Ae,
					userOrder: De
				});
			const Fe = {};
			var Me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				Ke = Object(F.c)({
					listing: We,
					search: Me
				}),
				He = Object(F.c)({
					diff: K,
					directory: G,
					pages: Q,
					pageSettings: Y,
					revisions: de,
					wikiBannedContributors: je,
					wikiContributors: Ke
				});
			Object(W.a)({
				pages: {
					subredditWiki: He
				}
			});
			const Ge = Object(d.a)(f.c),
				qe = Object(d.a)(f.b),
				ze = Object(d.a)(f.a),
				Qe = (e, t, r, n) => {
					return r === P.j ? Je(e, t) : !!Object(y.c)(e, {
						subredditName: t,
						wikiPageName: r,
						revisionId: n
					})
				},
				Je = (e, t) => !!Object(y.b)(e, {
					subredditName: t
				}),
				Xe = e => async (t, r, s) => {
					const {
						canShowFailToast: i,
						wikiPageName: d
					} = e, c = d === P.j, l = {
						...e,
						includePageData: e.includePageData && !c
					}, u = d ? Object(T.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(Ge({
						options: l,
						pageKey: u
					}));
					const m = await Object(R.a)(s.gqlContext(), l),
						b = m.body,
						p = m.ok ? b.data && b.data.subreddit && b.data.subreddit.wiki : null;
					return m.ok && p ? t(qe({
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
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Xe(e)
					}))), !(!m.ok || !a()(b.data.subreddit)) || !(!m.ok || !p)
				}, Ye = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (r, n) => {
						const s = n(),
							a = {
								sort: o.W.HOT
							},
							i = Object(c.a)(e, a.sort),
							d = s.listings.postOrder.api.error[i],
							l = s.listings.postOrder.api.pending[i],
							u = !!s.listings.postOrder.ids[i];
						return !!(l || u && !d) || (await r(Object(p.subredditDataRequested)(i, e, a, t)), !n().listings.postOrder.api.error[i])
					}
				}, Ze = e => async (t, r) => {
					const {
						params: n,
						url: s
					} = e, {
						wikiPageName: a
					} = n, o = Object(L.a)(s, n);
					let d = !1;
					return P.l.includes(a || "") ? (await (async (e, t) => {
						const r = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = r
					})(e.url), d = !0) : s !== o && (await t(Object(i.c)(o)), d = !0), d
				}, Ve = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, a, i) => {
						const {
							subredditName: d = P.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[S.I], m = t[S.J], b = u ? Object(x.a)(u) : void 0, p = m ? Object(x.a)(m) : void 0, f = c === P.j, k = l === P.m.Revisions;
						let _ = !1,
							w = !1;
						if (r) {
							const {
								pageName: t
							} = e;
							_ = t === o.gc.WikiContributors, w = t === o.gc.WikiBanned
						}
						const y = a(),
							O = (f || r) && !Je(y, d),
							I = !!c && !Qe(y, d, c, b),
							j = [];
						j.push(s(Ye(d))), (O || I) && j.push(s(Xe({
							includeDirectory: O,
							includePageData: I,
							revisionId: b,
							subredditName: d,
							wikiPageName: c
						}))), l === P.m.Settings && c && j.push(s(Object(N.c)(d, c))), c && b && p && j.push(s(E({
							comparisonRevisionId: p,
							revisionId: b,
							subredditName: d,
							wikiPageName: c
						}))), k && j.push(s(Object(C.c)({
							isRecent: !c,
							wikiPageName: c,
							subredditName: d
						}))), _ && j.push(s(Object(v.e)(d))), w && j.push(s(Object(g.e)(d))), (await Promise.all(j)).every(Boolean) || s(Object(h.f)({
							kind: B.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "3UWos1"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "mgOpG"
							}),
							buttonAction: Ve(e, t, r)
						}))
					}
				}, $e = e => async (t, r) => {
					if (await t(Ze(e))) return;
					const {
						params: n,
						queryParams: s
					} = e, a = n.subredditName || P.e;
					t(u.m({
						title: n.wikiPageName ? `${n.wikiPageName} - ${a}` : `wiki - ${a}`
					})), await t(Ve(n, s));
					const i = Object(D.z)(r(), {
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
				g = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(h.a)(Object(g.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: r
			});
			var k = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				x = r("./src/reddit/models/SubredditModeration/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/selectors/activeModalId.ts"),
				y = r("./src/reddit/selectors/bannedUser.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/subredditModeration/constants.ts"),
				E = r("./src/lib/initializeClient/installReducer.ts"),
				N = r("./node_modules/redux/es/redux.js");
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.s:
					case j.r:
						return null;
					case j.q:
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
						case j.s: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(x.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case j.r:
						case j.q: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(x.e)(r, n);
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
			const U = {};
			var T = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
							const {
								fetchedToken: r,
								subredditId: n
							} = t.payload, s = Object(x.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				B = r("./src/reddit/actions/inContextModeration.ts");
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
						case j.r: {
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
			var M = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.p:
					case j.r: {
						const {
							subredditId: r,
							bannedUsers: n
						} = t.payload;
						return Object(W.merge)(e, {
							[r]: n
						})
					}
					case j.w: {
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
			var K = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.v:
					case j.u:
						return null;
					case j.t:
						return t.payload;
					default:
						return e
				}
			};
			var H = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.v:
							return !0;
						case j.u:
						case j.t:
							return !1;
						default:
							return e
					}
				},
				G = Object(N.c)({
					error: K,
					pending: H
				});
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.v:
						case j.t:
							return null;
						case j.u: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				z = Object(N.c)({
					api: G,
					result: q
				});
			const Q = {};
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case j.r: {
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
						case j.w: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case j.p: {
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
				X = Object(N.c)({
					api: R,
					fetchedTokens: T,
					inContext: A,
					loadMore: D,
					models: M,
					search: z,
					userOrder: J
				});
			Object(E.a)({
				features: {
					banned: X
				}
			});
			const Y = Object(i.a)(j.s),
				Z = Object(i.a)(j.r),
				V = Object(i.a)(j.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, s) => {
						let {
							apiContext: a
						} = s;
						const i = n(),
							o = t.after || "",
							d = Object(x.e)(e, o),
							c = i.features.banned.fetchedTokens[d];
						if (i.features.banned.api.pending[d] || c) return;
						r(Y({
							subredditId: e,
							fetchedToken: o
						}));
						const l = i.subreddits.models[e].name,
							u = await v(a(), l, t);
						u.ok ? r(Z({
							...u.body,
							fetchedToken: o
						})) : r(V({
							subredditId: e,
							fetchedToken: o
						}))
					}
				},
				ee = Object(i.a)(j.v),
				te = Object(i.a)(j.u),
				re = Object(i.a)(j.t),
				ne = (e, t) => async (r, n, s) => {
					let {
						apiContext: a
					} = s;
					const i = n().subreddits.models[e].name,
						o = {
							username: Object(k.a)(t)
						};
					r(ee());
					const d = await v(a(), i, o);
					d.ok ? r(te(d.body)) : r(re(d.error))
				}, se = Object(i.a)(j.p), ae = Object(i.a)(j.w), ie = (e, t, r) => async (s, i, d) => {
					let {
						apiContext: c
					} = d;
					const u = i(),
						h = u.subreddits.models[e].url,
						g = u.subreddits.models[e].name;
					t.username = Object(k.a)(t.username), s(Object(o.h)(r));
					const x = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
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
					}))(c(), h, t);
					if (x.ok) {
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
						const a = await v(c(), g, e);
						a.ok && s(se(a.body))
					} else {
						s(Object(o.f)(r, x.error));
						const e = a()(x, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s().subreddits.models[e].url,
						c = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(o(), d, t);
					if (c.ok) r(ae({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: _.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(c, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
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
						if (!Object(w.b)(u.a.BAN_USER)(s) && !Object(O.R)(s, {
								subredditId: e
							})) {
							const t = Object(O.U)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(I.zb)(s, {
							userName: t
						});
						if (!n) return;
						const a = Object(y.h)(s, {
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
				return k
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "c", (function() {
				return I
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
				g = Object(a.a)(f.c),
				v = Object(a.a)(f.b),
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
							t(g({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = i.error || {
							type: s.I.UNKNOWN_ERROR
						};
						t(v({
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
				}, w = Object(a.a)(f.e), y = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.jb.POST,
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
						u.error.type === s.I.USER_DOESNT_EXIST && (e = n.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), r(Object(i.f)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, O = Object(a.a)(f.f), I = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.jb.POST,
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
					})), r(O({
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
						buttonAction: I(e, t)
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
				return k
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "c", (function() {
				return I
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
				g = Object(a.a)(f.c),
				v = Object(a.a)(f.b),
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
							t(g({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = i.error || {
							type: s.I.UNKNOWN_ERROR
						};
						t(v({
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
				}, w = Object(a.a)(f.e), y = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: s.jb.POST,
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
						t === s.I.USER_DOESNT_EXIST ? e = n.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === s.I.BANNED_FROM_SUBREDDIT && (e = n.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), r(Object(i.f)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, O = Object(a.a)(f.f), I = (e, t) => async (r, a, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.jb.POST,
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
					})), r(O({
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
						buttonAction: I(e, t)
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
				return w
			})), r.d(t, "b", (function() {
				return O
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
				g = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const _ = Object(a.a)(x.c),
				w = (e, t) => async (r, n, s) => {
					const a = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(s.gqlContext(), a),
						d = Object(k.F)(n(), e);
					if (Object(k.W)(n(), d) || await r(Object(i.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = h(t.page.settings);
							r(_({
								pageKey: Object(g.a)(a),
								settings: e
							}))
						}
					}
					return o.ok
				}, y = Object(a.a)(x.b), O = (e, t, r) => async (s, a, i) => {
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
						text: n.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t, r)
					}));
					return c.ok
				}, I = Object(a.a)(x.d), j = e => {
					let {
						editPermissions: t,
						isVisible: r,
						wikiPageName: n,
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
							isVisible: r,
							wikiPageName: n,
							subredditName: a
						});
						return c.ok && e(I({
							editPermissions: t,
							isVisible: r,
							pageKey: Object(g.a)({
								wikiPageName: n,
								subredditName: a
							})
						})), c.ok
					}
				}, E = e => {
					let {
						subredditName: t,
						username: r,
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
							username: r
						});
						if (m.ok) e(Object(o.f)({
							kind: v.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(w(t, a));
						else if (m.error) {
							const t = m.error.type;
							let r = n.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === s.I.NOT_FOUND_ERROR && (r = n.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(o.f)({
								kind: v.b.Error,
								text: r
							}))
						}
						return m.ok
					}
				}, N = Object(a.a)(x.a), C = e => {
					let {
						subredditName: t,
						username: r,
						wikiPageName: n
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
							wikiPageName: n,
							subredditName: t,
							username: r
						});
						return c.ok && (e(Object(o.f)({
							kind: v.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(N({
							username: r,
							pageKey: Object(g.a)({
								wikiPageName: n,
								subredditName: t
							})
						}))), c.ok
					}
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
				return I
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
				g = r("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				v = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = r("./src/reddit/models/Toast/index.ts"),
				x = r("./src/reddit/selectors/subredditWiki.ts"),
				_ = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const w = Object(a.a)(_.d),
				y = Object(a.a)(_.c),
				O = Object(a.a)(_.b),
				I = e => async (t, r, a) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: l = !1,
						isRecent: u,
						subredditName: m,
						wikiPageName: b
					} = e, p = r(), f = Object(g.a)(e), v = Object(x.p)(p, {
						listingKey: f
					});
					if (!o && !!v) return !0;
					const _ = v && v.pageInfo.endCursor || void 0;
					if (!(!v || v.pageInfo.hasNextPage)) return !0;
					const j = {
							after: _,
							isRecent: u,
							subredditName: m,
							wikiPageName: b
						},
						E = {
							key: f,
							options: j
						};
					t(w(E));
					const N = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(a.gqlContext(), j);
					if (N.ok) {
						const e = N.body;
						if (e.data.subreddit) {
							const r = h(e.data);
							t(y({
								...E,
								...r
							}))
						}
					} else {
						const r = N.error || {
							type: s.I.UNKNOWN_ERROR
						};
						t(O({
							...E,
							error: r
						})), l && t(Object(i.f)({
							kind: k.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: I(e)
						}))
					}
					return N.ok
				}, j = Object(a.a)(_.a), E = e => async (t, r, s) => {
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
						text: n.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e)
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
						buttonAction: E(e)
					}))
				}
		},
		"./src/reddit/components/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_2xNNl6uDn-la14kNSY-HlG",
				adminIcon: "_39nUIeq_tsYlKJUODkYXBu"
			}
		},
		"./src/reddit/components/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/components/Admin/index.m.less"),
				d = r.n(o),
				c = r("./src/lib/constants/icons.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/helpers/chooseVariant/index.ts");
			const b = e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.a
			});
			t.a = () => {
				return Object(i.e)(b) ? a.a.createElement("span", {
					className: d.a.admin
				}, n.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : a.a.createElement(l.a, {
					name: c.a.admin,
					isFilled: !0,
					className: d.a.adminIcon,
					title: n.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				})
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
			const u = e => {
				let {
					onStartChat: t,
					text: r,
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
						if (f && f(e), t(), p === n.awardNotification) return h();
						i(Object(l.b)(o))
					},
					className: s,
					text: r,
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
					contextId: r,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.b)(n, r))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(o.a)(n))
					}
				}
			});
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
				InterstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
				interstitialMessageWrapper: "_2xiFx6Zsb5W98_T1DOroT_",
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
				h = r("./src/reddit/components/Footer/index.tsx"),
				g = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				v = r("./src/reddit/components/RichTextJson/index.tsx"),
				k = r("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				x = r("./src/reddit/components/TextWithLinks/index.tsx"),
				_ = r("./src/reddit/constants/parameters.ts"),
				w = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/controls/Button/index.tsx"),
				O = r("./src/chat/controls/Svg/index.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = e => a.a.createElement(O.a, I({}, e, {
					viewBox: "-1 -1 21 21"
				}), a.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				E = r("./src/reddit/models/ContentGate.ts"),
				N = r("./src/lib/constants/index.ts"),
				C = r("./src/reddit/selectors/platform.ts"),
				S = r("./src/reddit/selectors/user.ts");
			var P = r("./src/reddit/selectors/meta.ts"),
				R = r("./src/reddit/components/ContentGate/index.m.less"),
				U = r.n(R);
			const {
				fbt: T
			} = r("./node_modules/fbt/lib/FbtPublic.js"), B = l.a.wrapped(j, "PrivateKey", U.a), A = l.a.div("ButtonsContainer", U.a), L = l.a.div("Container", U.a), D = l.a.div("ContainerExp", U.a), W = l.a.div("Description", U.a), F = l.a.div("PrivateSubredditDetails", U.a), M = l.a.div("PrivateSubredditDescription", U.a), K = l.a.h3("PrivateSubredditName", U.a), H = l.a.a("Link", U.a), G = l.a.wrapped(y.n, "LinkRouterButton", U.a), q = l.a.wrapped(y.m, "LinkButton", U.a), z = l.a.wrapped(y.q, "SecondaryLinkRouterButton", U.a), Q = l.a.wrapped(y.p, "SecondaryLinkButton", U.a), J = l.a.wrapped(G, "GoHomeLinkButton", U.a), X = l.a.wrapped(f.a, "CreateCommunityButton", U.a), Y = l.a.img("Image", U.a), Z = l.a.img("ImagePlaceholder", U.a), V = l.a.wrapped(G, "LeftLinkRouterButton", U.a), $ = l.a.wrapped(q, "LeftLinkButton", U.a), ee = l.a.wrapped(Q, "SecondaryLeftLinkButton", U.a), te = l.a.wrapped(z, "SecondaryLeftLinkRouterButton", U.a), re = l.a.h3("Title", U.a), ne = l.a.div("PageBody", U.a), se = l.a.div("InterstitialMessageWrapper", U.a), ae = Object(c.c)({
				isLoggedIn: S.O,
				origin: P.j,
				user: S.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(S.P)(e)) return !1;
					const t = Object(C.d)(e);
					if (!t) return !1;
					const r = Object(S.f)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = r;
					if (!n) return !1;
					const s = 30 * N.B;
					return n > Date.now() - s
				})(e),
				isSeo: P.g
			}), ie = Object(w.u)(), oe = Object(i.b)(ae, (e, t) => {
				let {
					subredditName: r
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(b.D(r)), window.location.reload()
					},
					continueToGatedSubreddit: async () => {
						await e(b.v(r)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.o)())
					}
				}
			}), de = e => {
				const {
					banMessage: t,
					contentGateType: r,
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
					interstitialWarningMessage: j,
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
				switch (r) {
					case E.a.GoldSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Y, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), a.a.createElement(re, null, T._("r/{community name} is a Reddit Premium community", [T._param("community name", R)], {
							hk: "2lyDwB"
						})), a.a.createElement(W, null, T._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), a.a.createElement(A, null, L ? a.a.createElement(ee, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, T._("Get Premium", null, {
							hk: "3ChWi4"
						})) : a.a.createElement($, {
							href: Object(u.a)(b, f),
							redditStyle: !0
						}, T._("Sign Up", null, {
							hk: "rvpjy"
						})), L ? a.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, T._("Go Home", null, {
							hk: "49p4or"
						})) : a.a.createElement(Q, {
							href: Object(u.a)(b, f),
							redditStyle: !0
						}, T._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case E.a.Nsfw:
					case E.a.NsfwCustomFeed:
						return a.a.createElement("div", null, a.a.createElement(Y, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), a.a.createElement(re, null, r === E.a.Nsfw ? T._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : T._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), a.a.createElement(W, null, T._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), a.a.createElement(A, null, a.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, T._("No", null, {
							hk: "3fMglW"
						})), a.a.createElement(Q, {
							onClick: D,
							redditStyle: !0
						}, T._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case E.a.PrivateSubreddit:
						return a.a.createElement("div", null, a.a.createElement(B, null), a.a.createElement(re, null, "r/", R, " ", T._("is a private community", null, {
							hk: "7zZmq"
						})), P && P.length && a.a.createElement(F, null, a.a.createElement(K, null, "r/", R), a.a.createElement(M, null, a.a.createElement("div", null, P))), a.a.createElement(W, null, T._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", R, " ", T._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), a.a.createElement("br", null), T._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), a.a.createElement(A, null, L ? a.a.createElement(a.a.Fragment, null, !d && a.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: U.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), a.a.createElement(ee, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${R}`,
							redditStyle: !0
						}, T._("Message Mods", null, {
							hk: "vVe1i"
						}))) : a.a.createElement(ee, {
							href: Object(u.a)(b, f),
							redditStyle: !0
						}, T._("Sign Up", null, {
							hk: "rvpjy"
						})), a.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, T._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), R && a.a.createElement(k.a, {
							subredditName: R
						}));
					case E.a.QuarantinedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(Y, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), a.a.createElement(re, null, T._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), a.a.createElement(W, null, T._("This community is {=quarantined}", [T._param("=quarantined", a.a.createElement(H, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, T._("quarantined", null, {
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
						}) : y || T._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), T._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), a.a.createElement(A, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? a.a.createElement(A, null, a.a.createElement(te, {
								to: "/",
								redditStyle: !0
							}, T._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(q, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, T._("Verify Email", null, {
								hk: "1893cq"
							}))) : a.a.createElement(A, null, a.a.createElement(V, {
								to: "/",
								redditStyle: !0
							}, T._("No Thank You", null, {
								hk: "4B26AR"
							})), a.a.createElement(Q, {
								onClick: t,
								redditStyle: !0
							}, T._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(L, s, w)));
					case E.a.GatedSubreddit:
						return a.a.createElement("div", null, a.a.createElement(re, null, T._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), a.a.createElement(W, null, a.a.createElement(se, null, C ? a.a.createElement(v.a, {
							content: C,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : N ? a.a.createElement(g.a, {
							html: N
						}) : j), T._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), a.a.createElement(A, null, a.a.createElement(V, {
							to: "/",
							redditStyle: !0
						}, T._("No Thank You", null, {
							hk: "4B26AR"
						})), a.a.createElement(Q, {
							onClick: i,
							redditStyle: !0
						}, T._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case E.a.SubredditBanned:
						return a.a.createElement("div", null, a.a.createElement(Y, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), a.a.createElement(re, null, T._("r/{community name} has been banned from Reddit", [T._param("community name", R)], {
							hk: "2at9Se"
						})), (e => a.a.createElement(W, null, e ? a.a.createElement(x.a, {
							linkClassName: U.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : T._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), a.a.createElement(A, null, a.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, T._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case E.a.SubredditBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Y, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(re, null, T._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), a.a.createElement(A, null, a.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, T._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case E.a.SubredditDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(Z, null), a.a.createElement(re, null, T._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), a.a.createElement(W, null, T._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), a.a.createElement(A, null, L && a.a.createElement(X, {
							eventSource: "content_gate"
						}), a.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, T._("Go Home", null, {
							hk: "49p4or"
						}))));
					case E.a.ProfileDoesNotExist:
					case E.a.ProfileDeleted:
					case E.a.ProfileSuspended:
					case E.a.ProfileBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Y, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case E.a.ProfileBlockedForLegalReason:
									return T._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case E.a.ProfileDeleted:
									return T._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case E.a.ProfileSuspended:
									return a.a.createElement(a.a.Fragment, null, T._("This account has been {=suspended} .", [T._param("=suspended", a.a.createElement(H, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, T._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case E.a.ProfileDoesNotExist:
									return a.a.createElement(a.a.Fragment, null, a.a.createElement(re, null, T._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), a.a.createElement(W, null, T._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), a.a.createElement(A, null, a.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, T._("Go Home", null, {
							hk: "49p4or"
						}))));
					case E.a.CustomFeedDoesNotExist:
						return a.a.createElement("div", null, a.a.createElement(Y, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(re, null, T._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), a.a.createElement(A, null, a.a.createElement(J, {
							to: "/",
							redditStyle: !0
						}, T._("Go Home", null, {
							hk: "49p4or"
						}))));
					case E.a.PostBlockedForLegalReason:
						return a.a.createElement("div", null, a.a.createElement(Y, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), a.a.createElement(re, null, T._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), a.a.createElement(A, null, a.a.createElement(G, {
							to: "/",
							redditStyle: !0
						}, T._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ie(oe(Object(o.i)(e => {
				const t = Object(s.useContext)(d.a) ? D : L;
				return a.a.createElement(t, null, a.a.createElement("div", {
					"data-testid": "content-gate"
				}, a.a.createElement(ne, null, de(e))), a.a.createElement(h.b, null))
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
				g = r.n(h),
				v = r("./src/lib/lessComponent.tsx");
			const k = "create-community-button",
				x = v.a.wrapped(l.c, "StyledTooltip", g.a),
				_ = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.ob)(e),
					userIsSuspended: f.W
				});
			t.a = Object(i.b)(_, (e, t) => {
				let {
					eventSource: r
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.c)(r)), e(Object(d.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: k
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: r,
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
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? a.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: k,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? a.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: k,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e(1), r.e("vendors~NftProfileUnit"), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
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
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: n,
					isProfileCard: m,
					isLoading: p,
					imageUrl: f,
					onFileSelected: h
				} = e;
				const g = Object(a.e)(u.a);
				return s.a.createElement("div", {
					className: Object(i.a)(b.a.Container, n)
				}, s.a.createElement("label", {
					className: b.a.HitBox
				}, s.a.createElement("span", {
					className: b.a.ImageContainer,
					role: "presentation"
				}, f ? s.a.createElement("img", {
					alt: t,
					className: b.a.Image,
					src: f
				}) : r), s.a.createElement(o.a, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/helpers/isPost.ts"),
				l = r("./src/reddit/selectors/commentSelector.ts"),
				u = r("./src/reddit/selectors/gold/awardIcon.ts"),
				m = r("./src/reddit/selectors/moderatorPermissions.ts"),
				b = r("./src/reddit/selectors/modUserNotes.ts"),
				p = r("./src/reddit/selectors/posts.ts"),
				f = r("./src/reddit/selectors/profile.ts"),
				h = r("./src/reddit/selectors/structuredStyles.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/selectors/tooltip.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/selectors/userFlair.ts"),
				_ = r("./src/reddit/selectors/userPrefs.ts"),
				w = r("./src/reddit/selectors/platform.ts"),
				y = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				O = r("./node_modules/fbt/lib/FbtPublic.js"),
				I = r("./src/config.ts"),
				j = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = r("./src/lib/lessComponent.tsx"),
				N = r("./src/lib/prettyPrintNumber/index.ts"),
				C = r("./src/reddit/components/Admin/index.tsx"),
				S = r("./src/reddit/components/ChatButton/index.tsx"),
				P = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				U = r("./src/reddit/components/SubscribeButton/index.tsx"),
				T = r("./src/reddit/components/UserIcon/index.tsx"),
				B = r("./src/reddit/controls/Button/index.tsx"),
				A = r("./src/reddit/endpoints/profile/info.ts"),
				L = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				D = r("./src/reddit/icons/fonts/Info/index.tsx"),
				W = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				F = r("./src/reddit/models/Gold/Award.ts"),
				M = r("./src/reddit/models/User/index.ts"),
				K = r("./src/reddit/components/HumanDate/index.tsx"),
				H = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				G = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				q = r("./src/reddit/actions/inContextModeration.ts"),
				z = r("./src/reddit/actions/modal.ts"),
				Q = r("./src/reddit/actions/subredditModeration/ban.ts"),
				J = r("./src/reddit/constants/modals.ts"),
				X = r("./src/reddit/components/Hovercards/helpers.ts"),
				Y = r("./src/reddit/icons/fonts/index.tsx"),
				Z = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				V = r("./src/reddit/selectors/bannedUser.ts"),
				$ = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				ee = r.n($);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = Object(i.c)({
				hasModMailPermissions: Object(m.b)(Z.c.mail),
				isUserBanned: (e, t) => !!Object(V.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(k.zb)(e, {
					userName: t.username
				})
			});
			class ne extends s.a.Component {
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
					}, n ? s.a.createElement(X.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), i(L.e(t))
						}
					}, s.a.createElement(Y.a, {
						name: "ban",
						isFilled: !0,
						className: ee.a.icon
					}), te._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(X.a, {
						role: "button",
						onClick: () => {
							o(), i(L.a(t))
						}
					}, s.a.createElement(Y.a, {
						name: "ban",
						className: ee.a.icon
					}), te._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(X.a, {
						role: "button",
						onClick: () => {
							d(), i(L.d(t))
						}
					}, s.a.createElement(Y.a, {
						name: "mod_mute",
						className: ee.a.icon
					}), te._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var se = Object(a.b)(re, (e, t) => {
					let {
						username: r,
						subredditId: n,
						contextId: s
					} = t;
					return {
						onUnbanUser: t => e(Object(Q.e)(n, t)),
						requestUserBanInfo: () => e(Object(Q.c)(n, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(q.c)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(Q.a)(n, r))
						},
						toggleMuteModal: () => {
							e(Object(q.d)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(z.i)(J.a.MUTE_USER))
						}
					}
				})(ne),
				ae = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ae.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(X.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(L.c(e.contextId))
					}
				}, s.a.createElement(Y.a, {
					name: "tag",
					className: ee.a.icon
				}), ie._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				de = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ce = r.n(de);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = E.a.wrapped(T.a, "UserIcon", ce.a),
				me = E.a.wrapped(U.a, "SubscribeButton", ce.a),
				be = E.a.wrapped(S.b, "ChatButton", ce.a),
				pe = E.a.wrapped(W.a, "PremiumIcon", ce.a),
				fe = E.a.wrapped(j.a, "UserNameLink", ce.a),
				he = E.a.div("UserNameMetaData", ce.a),
				ge = E.a.div("MetaDataItem", ce.a),
				ve = E.a.div("Bullet", ce.a),
				ke = E.a.div("UserNameContainer", ce.a),
				xe = E.a.div("KarmaGrid", ce.a),
				_e = E.a.div("GenericKarma", ce.a),
				we = E.a.a("InfoLink", ce.a),
				ye = E.a.div("KarmaCount", ce.a),
				Oe = E.a.div("GenericKarmaLabel", ce.a),
				Ie = E.a.div("BannerImage", ce.a),
				je = E.a.div("UserContainer", ce.a),
				Ee = E.a.div("BottomSpacer", ce.a),
				Ne = E.a.div("Container", ce.a),
				Ce = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(fe, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && s.a.createElement(j.a, {
					to: "/premium"
				}, s.a.createElement(pe, null)), e.user.isEmployee && s.a.createElement(C.a, null)), s.a.createElement(he, null, s.a.createElement(ge, null, `u/${e.userName}`, s.a.createElement(ve, null, "•")), s.a.createElement(ge, null, (e.user.createdUtc || e.user.created) && s.a.createElement(K.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Se = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...A.a,
						...t
					};
					return s.a.createElement(xe, null, s.a.createElement(_e, null, s.a.createElement(ye, null, Object(N.b)(r.fromPosts)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [O.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(_e, null, s.a.createElement(ye, null, Object(N.b)(r.fromComments)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [O.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(_e, null, s.a.createElement(ye, null, Object(N.b)(r.fromAwardsReceived)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [O.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(we, {
						href: F.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(D.a, {
						className: ce.a.infoIcon
					})))), s.a.createElement(_e, null, s.a.createElement(ye, null, Object(N.b)(r.fromAwardsGiven)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [O.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(we, {
						href: F.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(D.a, {
						className: ce.a.infoIcon
					})))))
				},
				Pe = e => {
					var t, r;
					const {
						className: n,
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
						isCommentAuthorBlocked: j
					} = e;
					if (!k) return s.a.createElement(Ne, {
						style: f
					});
					const E = !!i && Object(M.e)(i) === v,
						N = !!(null == i ? void 0 : i.snoovatarFullBodyAsset),
						C = k.accountIcon || `${I.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						R = null == u ? void 0 : u.access,
						U = (null == x ? void 0 : x.templateIds) && (null === (t = null == x ? void 0 : x.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						T = null === (r = null == x ? void 0 : x.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: A
						} = k,
						D = !!k.snoovatarFullBodyAsset,
						W = k.isNSFW && o;
					let F;
					return F = D ? !W && w && w.bannerBackgroundImage || void 0 : W ? `${I.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Ne, {
						className: n,
						id: d,
						style: f
					}, !D && F && s.a.createElement(Ie, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), s.a.createElement(je, null, D ? s.a.createElement(G.a, {
						isHovercard: !0,
						bannerBackgroundImage: F,
						compact: !0,
						currentUserHasSnoovatar: N,
						isEmployee: k.isEmployee,
						isGold: k.isGold,
						isNSFW: k.isNSFW,
						isOwnProfile: E,
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
					}), A && s.a.createElement(H.a, {
						recentAwardings: A,
						topAwardIcon: g,
						username: v
					}), c && !E && !_ && y && !j && s.a.createElement(be, {
						contextId: a,
						priority: B.c.Secondary,
						userId: k.id,
						text: O.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), k.hasUserProfile && !_ && !j && !E && k.enableFollowers && s.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(L.h)(e ? "unfollow" : "follow", a),
						isFullWidth: !0,
						small: !0
					})), R && a && !E && h && s.a.createElement(se, {
						contextId: a,
						subredditId: h,
						sendEvent: p,
						username: v
					}), S && a && U && T && h && s.a.createElement(oe, {
						contextId: a,
						subredditId: h,
						sendEvent: p,
						username: v
					}), s.a.createElement(P.i, {
						contextId: a,
						subredditId: h,
						user: k
					}), !(R || c) && s.a.createElement(Ee, null))
				},
				Re = Object(R.a)(Pe),
				Ue = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Re, le({
						isOpen: t
					}, e))
				};
			Ue.WrappedComponent = Pe;
			var Te = Ue;
			const Be = Object(i.c)({
					activeTooltipId: v.a,
					currentUser: k.k,
					isLoggedIn: k.P,
					hideNSFWPref: k.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(m.n)(e, {
							subredditId: r
						}) : void 0
					},
					prefersReducedAnimations: _.c,
					profile: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(f.j)(e, {
							profileName: r
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(u.e)(e, {
							userName: r,
							minSize: 32
						})
					},
					user: k.zb,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(x.d)(e, {
							subredditId: r
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(g.n)(t) && Object(g.fb)(e, t),
					userProfileStyles: (e, t) => Object(h.m)(e, Object(f.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(f.h)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						const n = Object(w.e)(e),
							s = r || n && Object(g.F)(e, n.name);
						return !!s && Object(m.i)(e, s)
					},
					trophyCase: (e, t) => Object(f.r)(e, Object(f.m)(e, t.userName)),
					isNightMode: k.cb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(c.a)(t.contextId) ? Object(p.G)(e, {
							postId: t.contextId
						}) : Object(l.b)(e, {
							commentId: t.contextId
						});
						return Object(b.b)(e, null == r ? void 0 : r.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(g.gb)(e, {
							identifier: {
								name: r,
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
			}) : s.a.createElement(Te, {
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
				container: "_1sbZnfdaxhCOFVUCJ3Z75m"
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
					hideNSFWPref: i.F
				}),
				d = Object(n.b)(o, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.C)(t, r))
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
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: r,
					className: n,
					isOwnProfile: c,
					onClick: m
				} = e;
				return s.a.createElement(i.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !r && c,
						[l.a.compactButtonLayout]: t
					}, n)
				}, r ? s.a.createElement(d.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), r ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : c ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? s.a.createElement("div", {
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
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: n,
					editMode: d,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return s.a.createElement("div", {
					className: c.a.bannerWrapper
				}, s.a.createElement(o.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: n
				}), d && t && (l ? s.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(i.a, {
					className: u.a.closeIcon,
					onClick: m
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
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: r,
					url: n,
					userCreated: d,
					username: c,
					...l
				} = e;
				const u = r ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(i.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? s.a.createElement(a.a, o({}, l, {
					className: t,
					to: n
				}), u) : s.a.createElement("span", o({}, l, {
					className: t
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return w
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				c = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				u = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				m = r.n(u);
			const b = 25;

			function p(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function f(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const h = p("particleDelay", m.a),
				g = p("particleX", m.a),
				v = p("particleFloat", m.a),
				k = () => {
					const e = f(g),
						t = f(v),
						r = f(h);
					return Object(o.a)(m.a.particle, e, t, r)
				};
			class x extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < b; t++) e.push(this.createParticle(t));
					return a.a.createElement("div", {
						role: "presentation",
						className: m.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return a.a.createElement("div", {
						key: e,
						className: `${k()}`
					})
				}
			}
			var _ = x;
			const w = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: s,
					prefersReducedAnimations: u
				} = e;
				const b = Object(i.e)(l.b);
				return s && Object(c.e)(s) && b ? a.a.createElement("div", {
					className: m.a.nftProfileUnitContainer
				}, a.a.createElement(d.a, {
					className: m.a.nftProfileUnit,
					imageUrl: s
				})) : a.a.createElement("div", {
					className: Object(o.a)(m.a.snoovatarContainer, t)
				}, r && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: m.a.topGlow
				}), a.a.createElement("div", {
					className: m.a.bottomGlow
				}), !u && a.a.createElement(_, null)), a.a.createElement("img", {
					className: Object(o.a)(m.a.snoovatar, {
						[m.a.premiumGlow]: r
					}),
					src: s,
					alt: n.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				o = r("./src/reddit/components/Admin/index.tsx"),
				d = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: a,
					isGold: l,
					isNSFW: m
				} = e;
				return i.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || r, l && i.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${n.a.redditUrl}/premium`
				}, i.a.createElement(c.a, {
					className: u.a.snoovatarPremiumIcon
				})), a && i.a.createElement(o.a, null), m && i.a.createElement(d.a, {
					className: u.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				p = r.n(b),
				f = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				h = r.n(f),
				g = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				v = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: n,
					editMode: b,
					isDeletingBanner: f,
					isEmployee: k,
					isGold: x,
					isNSFW: _,
					isOwnProfile: w,
					onClickSnoovatar: y,
					onDeleteBanner: O,
					prefersReducedAnimations: I,
					snoovatarUrl: j,
					title: E,
					userCreated: N,
					username: C,
					url: S,
					isHovercard: P
				} = e;
				const R = Object(a.e)(e => !w && !!j && Object(d.f)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(u.a, {
					bannerBackgroundImage: t,
					editMode: !!b,
					isNSFW: _,
					username: C,
					isDeletingBanner: !!f,
					onDeleteBanner: O
				}), s.a.createElement(s.a.Fragment, null, s.a.createElement(g.a, {
					isGold: x,
					snoovatarUrl: j,
					prefersReducedAnimations: I
				}), !b && w && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: p.a.snoovatarSettingsLink
				}, s.a.createElement(o.a, {
					name: "settings",
					className: h.a.settingsIcon
				}))), s.a.createElement(v.a, {
					isEmployee: k,
					isGold: x,
					isNSFW: _,
					title: E,
					username: C
				}), s.a.createElement(m.a, {
					className: p.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: C,
					userCreated: N,
					url: S
				}), (w || !n && !!j) && s.a.createElement(c.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: w,
					onClick: y
				}), R && s.a.createElement(l.a, {
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
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(n.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("SubredditSearchCarousel").then(r.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				c = e => {
					const t = Object(i.e)(o.e),
						r = Object(i.e)(o.a);
					return t || r ? a.a.createElement(d, e) : null
				}
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
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			})
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
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Vd
					}) === n.od)
				},
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Wd
				}) === n.od
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
				return g
			})), r.d(t, "l", (function() {
				return v
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
				c = (e, t) => {
					let {
						listingKey: r
					} = t;
					return e.pages.subredditWiki.revisions.listings[r]
				},
				l = (e, t) => {
					let {
						listingKey: r
					} = t;
					return !!e.pages.subredditWiki.revisions.api.pending[r]
				},
				u = (e, t) => {
					let {
						listingKey: r
					} = t;
					return !!e.pages.subredditWiki.revisions.api.error[r]
				},
				m = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				b = (e, t) => {
					let {
						key: r
					} = t;
					return e.pages.subredditWiki.diff[r]
				},
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
				h = Object(n.a)((e, t) => {
					let {
						subredditName: r
					} = t;
					const n = r.toLowerCase(),
						s = e.pages.subredditWiki.wikiContributors.listing,
						i = s.userOrder[n],
						o = s.models[n];
					return i ? i.map(e => o[e]) : a
				}),
				g = (e, t) => {
					const {
						subredditName: r
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[r.toLowerCase()]
				},
				v = (e, t) => {
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
				x = Object(n.a)((e, t) => {
					let {
						subredditName: r
					} = t;
					const n = r.toLowerCase(),
						s = e.pages.subredditWiki.wikiBannedContributors.listing,
						i = s.userOrder[n],
						o = s.models[n];
					return i ? i.map(e => o[e]) : a
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.c5d9a332f418eab5adbc.js.map