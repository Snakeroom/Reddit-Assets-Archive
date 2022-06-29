// https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.027918296af02e4e3ef3.js
// Retrieved at 6/29/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
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
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/chat/controls/Svg/index.m.less"),
				d = r.n(o);
			t.a = a.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: r,
						active: n,
						hover: a
					} = e;
				return s.a.createElement("svg", {
					className: Object(i.a)(e.className, {
						[d.a.disable]: r,
						[d.a.active]: n,
						[d.a.hover]: !!a
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
				i = r("./src/reddit/helpers/trackers/screenview.ts"),
				a = r("./src/telemetry/index.ts"),
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
				u && a.c.has(u) && Object(i.k)(c, r, o.TimerType.InApp, a.c.end(u))
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
				return Ve
			})), r.d(t, "subredditWikiPageRequested", (function() {
				return $e
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/isEmpty.js"),
				i = r.n(s),
				a = r("./node_modules/react-router-redux/es/index.js"),
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
				y = r("./src/redditGQL/operations/WikiComparisonDiff.json");
			var _ = r("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				w = r("./src/reddit/selectors/subredditWiki.ts");
			const O = Object(d.a)("WIKI_DIFF_PENDING"),
				I = Object(d.a)("WIKI_DIFF_LOADED"),
				j = Object(d.a)("WIKI_DIFF_FAILED"),
				E = e => async (t, r, n) => {
					const s = r(),
						i = Object(_.a)(e),
						a = Object(w.i)(s, {
							key: i
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: i
					};
					t(O(d));
					const c = await ((e, t) => Object(k.a)(e, {
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
				T = r("./src/reddit/endpoints/page/subredditWiki.ts"),
				R = r("./src/reddit/helpers/brandSafety/index.ts"),
				U = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				A = r("./src/reddit/models/Toast/index.ts"),
				B = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				L = r("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				D = r("./src/reddit/selectors/subreddit.ts"),
				W = r("./src/lib/initializeClient/installReducer.ts"),
				F = r("./node_modules/redux/es/redux.js");
			const M = {};
			var H = function() {
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
			const K = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.b:
							const r = t.payload,
								{
									subredditWiki: n,
									options: s
								} = r,
								i = n && n.directory;
							if (!i) return e;
							const {
								subredditName: a
							} = s;
							return {
								...e, [a.toLowerCase()]: i
							};
						default:
							return e
					}
				},
				G = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
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
				X = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const J = {};
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X.c: {
							const {
								settings: r,
								pageKey: n
							} = t.payload;
							return r ? {
								...e,
								[n]: r
							} : e
						}
						case X.d: {
							const {
								isVisible: r,
								editPermissions: n,
								pageKey: s
							} = t.payload, i = e[s];
							return i ? {
								...e,
								[s]: {
									...i,
									isVisible: r,
									editPermissions: n
								}
							} : e
						}
						case X.b: {
							const {
								editorsInfo: r,
								afterToken: n,
								pageKey: s
							} = t.payload, i = e[s];
							if (!i) return e;
							const a = [...i.editorsInfo, ...r];
							return {
								...e,
								[s]: {
									...i,
									editorsInfo: a,
									afterToken: n
								}
							}
						}
						case X.a: {
							const {
								username: r,
								pageKey: n
							} = t.payload, s = e[n];
							if (!s) return e;
							const i = s.editorsInfo.filter(e => e.username !== r);
							return {
								...e,
								[n]: {
									...s,
									editorsInfo: i
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
					error: $,
					pending: te
				}),
				ne = r("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const se = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case G.c: {
						const {
							key: r,
							options: n,
							pageInfo: s,
							revisionsIds: i
						} = t.payload, a = e[r], o = n.after && a ? [...a.ids, ...i] : i;
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
						} = t.payload, i = e[n];
						return i && r ? {
							...Object(Z.a)(e, s),
							[n]: {
								...i,
								ids: [r.id, ...i.ids]
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
			const ae = {};
			var oe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
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
					listings: ie,
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
			const ve = {};
			var ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
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
			const ye = {};
			var _e = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
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
				we = Object(F.c)({
					afterToken: ue,
					api: he,
					models: ge,
					userOrder: _e
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
					listing: we,
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
			const Te = {};
			var Re = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Te,
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
				Ue = Object(F.c)({
					error: Pe,
					pending: Re
				});
			const Ae = {};
			var Be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ae,
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
					api: Ue,
					models: Be,
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
				He = Object(F.c)({
					listing: We,
					search: Me
				}),
				Ke = Object(F.c)({
					diff: H,
					directory: q,
					pages: Q,
					pageSettings: Y,
					revisions: de,
					wikiBannedContributors: je,
					wikiContributors: He
				});
			Object(W.a)({
				pages: {
					subredditWiki: Ke
				}
			});
			const qe = Object(d.a)(f.c),
				Ge = Object(d.a)(f.b),
				ze = Object(d.a)(f.a),
				Qe = (e, t, r, n) => {
					return r === P.j ? Xe(e, t) : !!Object(w.c)(e, {
						subredditName: t,
						wikiPageName: r,
						revisionId: n
					})
				},
				Xe = (e, t) => !!Object(w.b)(e, {
					subredditName: t
				}),
				Je = e => async (t, r, s) => {
					const {
						canShowFailToast: a,
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
							type: o.I.NOT_FOUND_ERROR
						}
					})), a && t(Object(h.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: A.b.Error,
						text: n.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e)
					}))), !(!m.ok || !i()(b.data.subreddit)) || !(!m.ok || !p)
				}, Ye = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (r, n) => {
						const s = n(),
							i = {
								sort: o.W.HOT
							},
							a = Object(c.a)(e, i.sort),
							d = s.listings.postOrder.api.error[a],
							l = s.listings.postOrder.api.pending[a],
							u = !!s.listings.postOrder.ids[a];
						return !!(l || u && !d) || (await r(Object(p.subredditDataRequested)(a, e, i, t)), !n().listings.postOrder.api.error[a])
					}
				}, Ze = e => async (t, r) => {
					const {
						params: n,
						url: s
					} = e, {
						wikiPageName: i
					} = n, o = Object(L.a)(s, n);
					let d = !1;
					return P.l.includes(i || "") ? (await (async (e, t) => {
						const r = `${l.a.oldRedditUrl}${Object(m.b)(e)}`;
						window.location.href = r
					})(e.url), d = !0) : s !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Ve = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, i, a) => {
						const {
							subredditName: d = P.e,
							wikiPageName: c,
							wikiSubRoute: l
						} = e, u = t[S.E], m = t[S.F], b = u ? Object(x.a)(u) : void 0, p = m ? Object(x.a)(m) : void 0, f = c === P.j, k = l === P.m.Revisions;
						let y = !1,
							_ = !1;
						if (r) {
							const {
								pageName: t
							} = e;
							y = t === o.gc.WikiContributors, _ = t === o.gc.WikiBanned
						}
						const w = i(),
							O = (f || r) && !Xe(w, d),
							I = !!c && !Qe(w, d, c, b),
							j = [];
						j.push(s(Ye(d))), (O || I) && j.push(s(Je({
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
						}))), y && j.push(s(Object(g.e)(d))), _ && j.push(s(Object(v.e)(d))), (await Promise.all(j)).every(Boolean) || s(Object(h.f)({
							kind: A.b.Error,
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
					} = e, i = n.subredditName || P.e;
					t(u.m({
						title: n.wikiPageName ? `${n.wikiPageName} - ${i}` : `wiki - ${i}`
					})), await t(Ve(n, s));
					const a = Object(D.z)(r(), {
							subredditName: i
						}),
						o = r();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(b.b)(B.a.SUBREDDIT))
					}), t(Object(b.d)({
						isViewSafe: Object(R.a)([], [a])
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
				return ae
			})), r.d(t, "e", (function() {
				return oe
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/get.js"),
				i = r.n(s),
				a = r("./src/lib/makeActionCreator/index.ts"),
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
				method: m.jb.GET,
				data: r
			});
			var k = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				x = r("./src/reddit/models/SubredditModeration/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/selectors/activeModalId.ts"),
				w = r("./src/reddit/selectors/bannedUser.ts"),
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
				T = Object(N.c)({
					error: C,
					pending: P
				});
			const R = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
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
				A = r("./src/reddit/actions/inContextModeration.ts");
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.a:
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
			var H = function() {
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
			var K = function() {
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
				q = Object(N.c)({
					error: H,
					pending: K
				});
			var G = function() {
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
					api: q,
					result: G
				});
			const Q = {};
			var X = function() {
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
				J = Object(N.c)({
					api: T,
					fetchedTokens: U,
					inContext: B,
					loadMore: D,
					models: M,
					search: z,
					userOrder: X
				});
			Object(E.a)({
				features: {
					banned: J
				}
			});
			const Y = Object(a.a)(j.s),
				Z = Object(a.a)(j.r),
				V = Object(a.a)(j.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, s) => {
						let {
							apiContext: i
						} = s;
						const a = n(),
							o = t.after || "",
							d = Object(x.e)(e, o),
							c = a.features.banned.fetchedTokens[d];
						if (a.features.banned.api.pending[d] || c) return;
						r(Y({
							subredditId: e,
							fetchedToken: o
						}));
						const l = a.subreddits.models[e].name,
							u = await g(i(), l, t);
						u.ok ? r(Z({
							...u.body,
							fetchedToken: o
						})) : r(V({
							subredditId: e,
							fetchedToken: o
						}))
					}
				},
				ee = Object(a.a)(j.v),
				te = Object(a.a)(j.u),
				re = Object(a.a)(j.t),
				ne = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const a = n().subreddits.models[e].name,
						o = {
							username: Object(k.a)(t)
						};
					r(ee());
					const d = await g(i(), a, o);
					d.ok ? r(te(d.body)) : r(re(d.error))
				}, se = Object(a.a)(j.p), ie = Object(a.a)(j.w), ae = (e, t, r) => async (s, a, d) => {
					let {
						apiContext: c
					} = d;
					const u = a(),
						h = u.subreddits.models[e].url,
						v = u.subreddits.models[e].name;
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
							kind: y.b.SuccessMod,
							text: n.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const i = await g(c(), v, e);
						i.ok && s(se(i.body))
					} else {
						s(Object(o.f)(r, x.error));
						const e = i()(x, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, oe = (e, t) => async (r, s, a) => {
					let {
						apiContext: o
					} = a;
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
					if (c.ok) r(ie({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: y.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = i()(c, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
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
						if (!Object(_.b)(u.a.BAN_USER)(s) && !Object(O.R)(s, {
								subredditId: e
							})) {
							const t = Object(O.U)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(I.Ab)(s, {
							userName: t
						});
						if (!n) return;
						const i = Object(w.h)(s, {
							subredditId: e
						});
						i && i[n.id] || await r($(e, {
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
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			}));
			const n = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				s = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				i = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return k
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
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
					} = t, s = [], i = {};
					return r.forEach(e => {
						const {
							date: t,
							redditor: r,
							editWikiBanInfo: n
						} = e.node;
						r.id && r.name && r.icon && (i[r.id] = {
							id: r.id,
							username: r.name,
							iconUrl: r.icon.url,
							date: t,
							daysRemaining: n.daysRemaining,
							note: n.note
						}, s.push(r.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						bannedContributors: i,
						userOrder: s
					}
				},
				p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const h = Object(i.a)(f.d),
				v = Object(i.a)(f.c),
				g = Object(i.a)(f.b),
				k = e => async (t, r, n) => {
					t(h({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(n.gqlContext(), i);
					if (a.ok) {
						const r = a.body,
							n = r.data.subreddit && r.data.subreddit.wiki;
						if (n) {
							const r = b(n);
							t(v({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = a.error || {
							type: s.I.UNKNOWN_ERROR
						};
						t(g({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, x = Object(i.a)(f.a), y = (e, t) => async (r, s, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki);
							r(x({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(a.f)({
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
				}, _ = Object(i.a)(f.e), w = (e, t) => async (r, i, d) => {
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
						r(Object(a.f)({
							kind: p.b.SuccessMod,
							text: n.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const s = {
								subredditName: e,
								username: t.username
							},
							i = (await m(d.gqlContext(), s)).body;
						if (i.data.subreddit.wiki) {
							const t = b(i.data.subreddit.wiki);
							r(_({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === s.I.USER_DOESNT_EXIST && (e = n.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), r(Object(a.f)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, O = Object(i.a)(f.f), I = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.jb.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(a.f)({
						kind: p.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), r(O({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(a.f)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: I(e, t)
					})), u.ok
				}, j = Object(i.a)(f.g), E = (e, t) => async (r, s, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
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
					} else r(Object(a.f)({
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
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			}));
			const n = "WIKI_CONTRIBUTORS_PENDING",
				s = "WIKI_CONTRIBUTORS_LOADED",
				i = "WIKI_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return k
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
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
					} = t, s = [], i = {};
					return r.forEach(e => {
						const {
							date: t,
							redditor: r
						} = e.node;
						r.id && r.name && r.icon && (i[r.id] = {
							id: r.id,
							username: r.name,
							iconUrl: r.icon.url,
							date: t
						}, s.push(r.id))
					}), {
						afterToken: n.hasNextPage ? n.endCursor : null,
						contributors: i,
						userOrder: s
					}
				},
				p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const h = Object(i.a)(f.d),
				v = Object(i.a)(f.c),
				g = Object(i.a)(f.b),
				k = e => async (t, r, n) => {
					t(h({
						subredditName: e
					}));
					const i = {
							subredditName: e
						},
						a = await m(n.gqlContext(), i);
					if (a.ok) {
						const r = a.body,
							n = r.data.subreddit && r.data.subreddit.wiki;
						if (n) {
							const r = b(n);
							t(v({
								...r,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const r = a.error || {
							type: s.I.UNKNOWN_ERROR
						};
						t(g({
							error: r,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, x = Object(i.a)(f.a), y = (e, t) => async (r, s, i) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await m(i.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const n = b(t.data.subreddit.wiki);
							r(x({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else r(Object(a.f)({
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
				}, _ = Object(i.a)(f.e), w = (e, t) => async (r, i, d) => {
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
						r(Object(a.f)({
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
							!!i().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][n] || r(_({
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
						})), r(Object(a.f)({
							kind: p.b.Error,
							text: e || n.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, O = Object(i.a)(f.f), I = (e, t) => async (r, i, d) => {
					const u = await ((e, t, r) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: s.jb.POST,
						data: {
							api_type: "json",
							id: r,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (r(Object(a.f)({
						kind: p.b.SuccessMod,
						text: n.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), r(O({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : r(Object(a.f)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: I(e, t)
					})), u.ok
				}, j = Object(i.a)(f.g), E = (e, t) => async (r, s, i) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await m(i.gqlContext(), o);
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
					} else r(Object(a.f)({
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
				return i
			})), r.d(t, "b", (function() {
				return a
			}));
			const n = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				s = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				i = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				a = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return _
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
				i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/subredditSettings.ts"),
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
						pageInfo: i
					} = r, a = [];
					return s.forEach(e => {
						e.node.name && e.node.icon && a.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: a,
						isVisible: n,
						afterToken: i.hasNextPage ? i.endCursor : null
					}
				},
				v = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(i.a)(x.c),
				_ = (e, t) => async (r, n, s) => {
					const i = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(s.gqlContext(), i),
						d = Object(k.F)(n(), e);
					if (Object(k.W)(n(), d) || await r(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = h(t.page.settings);
							r(y({
								pageKey: Object(v.a)(i),
								settings: e
							}))
						}
					}
					return o.ok
				}, w = Object(i.a)(x.b), O = (e, t, r) => async (s, i, a) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: r
						},
						c = await p(a.gqlContext(), d);
					if (c.ok) {
						const r = c.body,
							n = r.data.subreddit && r.data.subreddit.wiki;
						if (n && n.page) {
							const r = h(n.page.settings),
								{
									editorsInfo: i,
									afterToken: a
								} = r;
							s(w({
								editorsInfo: i,
								afterToken: a,
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
						buttonAction: O(e, t, r)
					}));
					return c.ok
				}, I = Object(i.a)(x.d), j = e => {
					let {
						editPermissions: t,
						isVisible: r,
						wikiPageName: n,
						subredditName: i
					} = e;
					return async (e, a, o) => {
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
							subredditName: i
						});
						return c.ok && e(I({
							editPermissions: t,
							isVisible: r,
							pageKey: Object(v.a)({
								wikiPageName: n,
								subredditName: i
							})
						})), c.ok
					}
				}, E = e => {
					let {
						subredditName: t,
						username: r,
						wikiPageName: i
					} = e;
					return async (e, a, c) => {
						const m = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
							method: s.jb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: c.apiContext(),
							wikiPageName: i,
							subredditName: t,
							username: r
						});
						if (m.ok) e(Object(o.f)({
							kind: g.b.SuccessCommunity,
							text: "User successfully added"
						})), await e(_(t, i));
						else if (m.error) {
							const t = m.error.type;
							let r = n.fbt._("Something went wrong", null, {
								hk: "8AkV3"
							});
							t === s.I.NOT_FOUND_ERROR && (r = n.fbt._("That user does not exist", null, {
								hk: "XDM7X"
							})), e(Object(o.f)({
								kind: g.b.Error,
								text: r
							}))
						}
						return m.ok
					}
				}, N = Object(i.a)(x.a), C = e => {
					let {
						subredditName: t,
						username: r,
						wikiPageName: n
					} = e;
					return async (e, i, a) => {
						const c = await (e => Object(d.a)(Object(l.a)(e.context, [u.a]), {
							endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
							method: s.jb.POST,
							data: {
								page: e.wikiPageName,
								username: e.username
							}
						}))({
							context: a.apiContext(),
							wikiPageName: n,
							subredditName: t,
							username: r
						});
						return c.ok && (e(Object(o.f)({
							kind: g.b.SuccessCommunity,
							text: "User has been successfully removed"
						})), e(N({
							username: r,
							pageKey: Object(v.a)({
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
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			}));
			const n = "WIKI_REVISIONS_PENDING",
				s = "WIKI_REVISIONS_LOADED",
				i = "WIKI_REVISIONS_FAILED",
				a = "WIKI_PAGE_REVERT_SUCCESS",
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
				i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
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
				v = r("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				g = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				k = r("./src/reddit/models/Toast/index.ts"),
				x = r("./src/reddit/selectors/subredditWiki.ts"),
				y = r("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const _ = Object(i.a)(y.d),
				w = Object(i.a)(y.c),
				O = Object(i.a)(y.b),
				I = e => async (t, r, i) => {
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
					const y = g && g.pageInfo.endCursor || void 0;
					if (!(!g || g.pageInfo.hasNextPage)) return !0;
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
					}))(i.gqlContext(), j);
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
							type: s.I.UNKNOWN_ERROR
						};
						t(O({
							...E,
							error: r
						})), l && t(Object(a.f)({
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
				}, j = Object(i.a)(y.a), E = e => async (t, r, s) => {
					const {
						subredditName: i,
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
								subredditName: i,
								wikiPageName: d
							})).body,
							r = e.data.subreddit && e.data.subreddit.wiki,
							m = r && r.page;
						if (!m || !m.revision) return;
						if (m.revision.id === b) return void t(Object(a.f)({
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
							subredditName: i,
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
						buttonAction: E(e)
					}))
				}, N = Object(i.a)(y.e), C = e => async (t, r, s) => {
					const i = await p(s.apiContext(), e);
					if (i.ok) {
						const r = i.body.status;
						t(N({
							revisionId: e.revisionId,
							isHidden: r
						}))
					} else t(Object(a.f)({
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
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
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
				return Object(a.e)(b) ? i.a.createElement("span", {
					className: d.a.admin
				}, n.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : i.a.createElement(l.a, {
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
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
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
					sendEvent: a,
					contextId: o,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					eventSource: p,
					onClick: f,
					onAddUserToQuickReplyList: h,
					children: v,
					style: g
				} = e;
				return i.a.createElement(c.t, {
					onClick: e => {
						if (f && f(e), t(), p === n.awardNotification) return h();
						a(Object(l.b)(o))
					},
					className: s,
					text: r,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					style: g
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(a.b)(null, (e, t) => {
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
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
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
				v = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				g = r("./src/reddit/components/RichTextJson/index.tsx"),
				k = r("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				x = r("./node_modules/lodash/flatMap.js"),
				y = r.n(x),
				_ = r("./src/lib/linkMatchers/index.ts"),
				w = r("./src/lib/linkMatchers/customLinks.ts"),
				O = r("./src/reddit/controls/OutboundLink/index.tsx");
			const I = /\[(.+?)\]\((.+?)\)/g,
				j = e => {
					const t = e.split(I);
					if (1 === t.length) return [e];
					const r = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, s, i] = t.slice(n, n + 3);
						r.push(e), r.push([i, s])
					}
					return r
				};
			var E = i.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = y()(t, j)), e.parseRegularLinks && (t = y()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = _.f.add(w.g.subreddit.prefix, w.g.subreddit.config).match(e);
						if (!t) return [e];
						const r = [];
						let n = null;
						for (const s of t) r.push(e.slice(n ? n.lastIndex : 0, s.index)), n = s, r.push([s.url, s.text]);
						return n && r.push(e.slice(n.lastIndex)), r
					})(e))), i.a.createElement(i.a.Fragment, null, " ", t.map((t, r) => {
						if (Array.isArray(t)) {
							const [n, s] = t;
							return i.a.createElement(O.b, {
								className: e.linkClassName,
								href: n,
								key: r
							}, s)
						}
						return i.a.createElement("span", {
							key: r
						}, t)
					}), " ")
				}),
				N = r("./src/reddit/constants/parameters.ts"),
				C = r("./src/reddit/contexts/PageLayer/index.tsx"),
				S = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/chat/controls/Svg/index.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => i.a.createElement(P.a, T({}, e, {
					viewBox: "-1 -1 21 21"
				}), i.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				U = r("./src/reddit/models/ContentGate.ts"),
				A = r("./src/lib/constants/index.ts"),
				B = r("./src/reddit/selectors/platform.ts"),
				L = r("./src/reddit/selectors/user.ts");
			var D = r("./src/reddit/selectors/meta.ts"),
				W = r("./src/reddit/components/ContentGate/index.m.less"),
				F = r.n(W);
			const {
				fbt: M
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = l.a.wrapped(R, "PrivateKey", F.a), K = l.a.div("ButtonsContainer", F.a), q = l.a.div("Container", F.a), G = l.a.div("ContainerExp", F.a), z = l.a.div("Description", F.a), Q = l.a.div("PrivateSubredditDetails", F.a), X = l.a.div("PrivateSubredditDescription", F.a), J = l.a.h3("PrivateSubredditName", F.a), Y = l.a.a("Link", F.a), Z = l.a.wrapped(S.n, "LinkRouterButton", F.a), V = l.a.wrapped(S.m, "LinkButton", F.a), $ = l.a.wrapped(S.q, "SecondaryLinkRouterButton", F.a), ee = l.a.wrapped(S.p, "SecondaryLinkButton", F.a), te = l.a.wrapped(Z, "GoHomeLinkButton", F.a), re = l.a.wrapped(f.a, "CreateCommunityButton", F.a), ne = l.a.img("Image", F.a), se = l.a.img("ImagePlaceholder", F.a), ie = l.a.wrapped(Z, "LeftLinkRouterButton", F.a), ae = l.a.wrapped(V, "LeftLinkButton", F.a), oe = l.a.wrapped(ee, "SecondaryLeftLinkButton", F.a), de = l.a.wrapped($, "SecondaryLeftLinkRouterButton", F.a), ce = l.a.h3("Title", F.a), le = l.a.div("PageBody", F.a), ue = l.a.div("InterstitialMessageWrapper", F.a), me = Object(c.c)({
				isLoggedIn: L.P,
				origin: D.j,
				user: L.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(L.Q)(e)) return !1;
					const t = Object(B.d)(e);
					if (!t) return !1;
					const r = Object(L.f)(e, t);
					if (!r) return !1;
					if (!r.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: n
					} = r;
					if (!n) return !1;
					const s = 30 * A.B;
					return n > Date.now() - s
				})(e),
				isSeo: D.g
			}), be = Object(C.u)(), pe = Object(a.b)(me, (e, t) => {
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
			}), fe = e => {
				const {
					banMessage: t,
					contentGateType: r,
					continueToQuarantinedSubreddit: s,
					continueToGatedSubreddit: a,
					isLoggedIn: o,
					isContributorRequestsDisabled: d,
					isPrivateSubredditContributorRequestPending: c,
					isSeo: l,
					location: b,
					origin: f,
					pageLayer: h,
					quarantineRequiresEmail: x,
					quarantineMessage: y,
					quarantineMessageHtml: _,
					quarantineMessageRTJson: w,
					interstitialWarningMessage: O,
					interstitialWarningMessageHtml: I,
					interstitialWarningMessageRTJson: j,
					setNSFWPreference: C,
					subredditDescription: S,
					subredditName: P,
					user: T
				} = e, R = async () => {
					if (o ? await C() : await Object(m.n)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(N.f, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (r) {
					case U.a.GoldSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), i.a.createElement(ce, null, M._("r/{community name} is a Reddit Premium community", [M._param("community name", P)], {
							hk: "2lyDwB"
						})), i.a.createElement(z, null, M._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), i.a.createElement(K, null, T ? i.a.createElement(oe, {
							href: `${n.a.redditUrl}/premium`,
							redditStyle: !0
						}, M._("Get Premium", null, {
							hk: "3ChWi4"
						})) : i.a.createElement(ae, {
							href: Object(u.a)(b, f),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), T ? i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						})) : i.a.createElement(ee, {
							href: Object(u.a)(b, f),
							redditStyle: !0
						}, M._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case U.a.Nsfw:
					case U.a.NsfwCustomFeed:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), i.a.createElement(ce, null, r === U.a.Nsfw ? M._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : M._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), i.a.createElement(z, null, M._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), i.a.createElement(K, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, M._("No", null, {
							hk: "3fMglW"
						})), i.a.createElement(ee, {
							onClick: R,
							redditStyle: !0
						}, M._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case U.a.PrivateSubreddit:
						return i.a.createElement("div", null, i.a.createElement(H, null), i.a.createElement(ce, null, "r/", P, " ", M._("is a private community", null, {
							hk: "7zZmq"
						})), S && S.length && i.a.createElement(Q, null, i.a.createElement(J, null, "r/", P), i.a.createElement(X, null, i.a.createElement("div", null, S))), i.a.createElement(z, null, M._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", P, " ", M._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), i.a.createElement("br", null), M._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), i.a.createElement(K, null, T ? i.a.createElement(i.a.Fragment, null, !d && i.a.createElement(p.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: F.a.ContributorRequestButton,
							isContributorRequestPending: c
						}), i.a.createElement(oe, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${P}`,
							redditStyle: !0
						}, M._("Message Mods", null, {
							hk: "vVe1i"
						}))) : i.a.createElement(oe, {
							href: Object(u.a)(b, f),
							redditStyle: !0
						}, M._("Sign Up", null, {
							hk: "rvpjy"
						})), i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), P && i.a.createElement(k.a, {
							subredditName: P
						}));
					case U.a.QuarantinedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), i.a.createElement(ce, null, M._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), i.a.createElement(z, null, M._("This community is {=quarantined}", [M._param("=quarantined", i.a.createElement(Y, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, M._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), i.a.createElement(ue, null, w ? i.a.createElement(g.b, {
							content: w,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : _ ? i.a.createElement(v.a, {
							html: _
						}) : y || M._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), M._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), i.a.createElement(K, null, ((e, t, r) => {
							return !(e && e.hasVerifiedEmail) && r ? i.a.createElement(K, null, i.a.createElement(de, {
								to: "/",
								redditStyle: !0
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(V, {
								href: `${n.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, M._("Verify Email", null, {
								hk: "1893cq"
							}))) : i.a.createElement(K, null, i.a.createElement(ie, {
								to: "/",
								redditStyle: !0
							}, M._("No Thank You", null, {
								hk: "4B26AR"
							})), i.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, M._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(T, s, x)));
					case U.a.GatedSubreddit:
						return i.a.createElement("div", null, i.a.createElement(ce, null, M._("Are you sure you want to view this community?", null, {
							hk: "1K5UIm"
						})), i.a.createElement(z, null, i.a.createElement(ue, null, j ? i.a.createElement(g.b, {
							content: j,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : I ? i.a.createElement(v.a, {
							html: I
						}) : O), M._("Are you certain you want to continue?", null, {
							hk: "3pT969"
						})), i.a.createElement(K, null, i.a.createElement(ie, {
							to: "/",
							redditStyle: !0
						}, M._("No Thank You", null, {
							hk: "4B26AR"
						})), i.a.createElement(ee, {
							onClick: a,
							redditStyle: !0
						}, M._("Continue", null, {
							hk: "2rLyAk"
						}))));
					case U.a.SubredditBanned:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), i.a.createElement(ce, null, M._("r/{community name} has been banned from Reddit", [M._param("community name", P)], {
							hk: "2at9Se"
						})), (e => i.a.createElement(z, null, e ? i.a.createElement(E, {
							linkClassName: F.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : M._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), i.a.createElement(K, null, i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), i.a.createElement(K, null, i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(se, null), i.a.createElement(ce, null, M._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), i.a.createElement(z, null, M._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), i.a.createElement(K, null, T && i.a.createElement(re, {
							eventSource: "content_gate"
						}), i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.ProfileDoesNotExist:
					case U.a.ProfileDeleted:
					case U.a.ProfileSuspended:
					case U.a.ProfileBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case U.a.ProfileBlockedForLegalReason:
									return M._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case U.a.ProfileDeleted:
									return M._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case U.a.ProfileSuspended:
									return i.a.createElement(i.a.Fragment, null, M._("This account has been {=suspended} .", [M._param("=suspended", i.a.createElement(Y, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, M._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case U.a.ProfileDoesNotExist:
									return i.a.createElement(i.a.Fragment, null, i.a.createElement(ce, null, M._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), i.a.createElement(z, null, M._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), i.a.createElement(K, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.CustomFeedDoesNotExist:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, M._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), i.a.createElement(K, null, i.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, M._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.PostBlockedForLegalReason:
						return i.a.createElement("div", null, i.a.createElement(ne, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), i.a.createElement(ce, null, M._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), i.a.createElement(K, null, i.a.createElement(Z, {
							to: "/",
							redditStyle: !0
						}, M._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = be(pe(Object(o.i)(e => {
				const t = Object(s.useContext)(d.a) ? G : q;
				return i.a.createElement(t, null, i.a.createElement("div", {
					"data-testid": "content-gate"
				}, i.a.createElement(le, null, fe(e))), i.a.createElement(h.b, null))
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
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
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
				g = r("./src/lib/lessComponent.tsx");
			const k = "create-community-button",
				x = g.a.wrapped(l.c, "StyledTooltip", v.a),
				y = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.pb)(e),
					userIsSuspended: f.X
				});
			t.a = Object(a.b)(y, (e, t) => {
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
					onHideTooltip: a,
					openCommunityCreation: o,
					sendEvent: d,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: l,
					onClick: u
				} = e;
				return i.a.createElement(b.t, {
					className: t,
					disabled: l || c,
					onClick: e => {
						u && u(e), o(d)
					},
					onMouseEnter: s,
					onMouseLeave: a,
					priority: b.c.Secondary,
					id: k,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? i.a.createElement(x, {
					caretOnTop: !0,
					tooltipId: k,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? i.a.createElement(x, {
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
				importAsync: () => Promise.all([r.e(1), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
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
				const v = Object(i.e)(u.a);
				return s.a.createElement("div", {
					className: Object(a.a)(b.a.Container, n)
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
					isPending: v ? p : void 0
				}), !p && s.a.createElement("div", {
					className: Object(a.a)(b.a.EditButton, {
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
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
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
				v = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/tooltip.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/selectors/userFlair.ts"),
				y = r("./src/reddit/selectors/userPrefs.ts"),
				_ = r("./src/reddit/selectors/platform.ts"),
				w = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				O = r("./node_modules/fbt/lib/FbtPublic.js"),
				I = r("./src/config.ts"),
				j = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = r("./src/lib/lessComponent.tsx"),
				N = r("./src/lib/prettyPrintNumber/index.ts"),
				C = r("./src/reddit/components/Admin/index.tsx"),
				S = r("./src/reddit/components/ChatButton/index.tsx"),
				P = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				R = r("./src/reddit/components/SubscribeButton/index.tsx"),
				U = r("./src/reddit/components/UserIcon/index.tsx"),
				A = r("./src/reddit/controls/Button/index.tsx"),
				B = r("./src/reddit/endpoints/profile/info.ts"),
				L = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				D = r("./src/reddit/icons/fonts/Info/index.tsx"),
				W = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				F = r("./src/reddit/models/Gold/Award.ts"),
				M = r("./src/reddit/models/User/index.ts"),
				H = r("./src/reddit/components/HumanDate/index.tsx"),
				K = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				q = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				G = r("./src/reddit/actions/inContextModeration.ts"),
				z = r("./src/reddit/actions/modal.ts"),
				Q = r("./src/reddit/actions/subredditModeration/ban.ts"),
				X = r("./src/reddit/constants/modals.ts"),
				J = r("./src/reddit/components/Hovercards/helpers.ts"),
				Y = r("./src/reddit/icons/fonts/index.tsx"),
				Z = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				V = r("./src/reddit/selectors/bannedUser.ts"),
				$ = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				ee = r.n($);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = Object(a.c)({
				hasModMailPermissions: Object(m.c)(Z.c.mail),
				isUserBanned: (e, t) => !!Object(V.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(k.Ab)(e, {
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
						onUnbanUser: i,
						sendEvent: a,
						toggleBanModal: o,
						toggleMuteModal: d
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(J.a, {
						role: "button",
						onClick: () => {
							i(this.props.user.id), a(L.e(t))
						}
					}, s.a.createElement(Y.a, {
						name: "ban",
						isFilled: !0,
						className: ee.a.icon
					}), te._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(J.a, {
						role: "button",
						onClick: () => {
							o(), a(L.a(t))
						}
					}, s.a.createElement(Y.a, {
						name: "ban",
						className: ee.a.icon
					}), te._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(J.a, {
						role: "button",
						onClick: () => {
							d(), a(L.d(t))
						}
					}, s.a.createElement(Y.a, {
						name: "mod_mute",
						className: ee.a.icon
					}), te._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var se = Object(i.b)(re, (e, t) => {
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
							e(Object(G.c)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(Q.a)(n, r))
						},
						toggleMuteModal: () => {
							e(Object(G.d)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(z.i)(X.a.MUTE_USER))
						}
					}
				})(ne),
				ie = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ae
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(i.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ie.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(J.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(L.c(e.contextId))
					}
				}, s.a.createElement(Y.a, {
					name: "tag",
					className: ee.a.icon
				}), ae._("Edit user flair", null, {
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
			const ue = E.a.wrapped(U.a, "UserIcon", ce.a),
				me = E.a.wrapped(R.a, "SubscribeButton", ce.a),
				be = E.a.wrapped(S.b, "ChatButton", ce.a),
				pe = E.a.wrapped(W.a, "PremiumIcon", ce.a),
				fe = E.a.wrapped(j.a, "UserNameLink", ce.a),
				he = E.a.div("UserNameMetaData", ce.a),
				ve = E.a.div("MetaDataItem", ce.a),
				ge = E.a.div("Bullet", ce.a),
				ke = E.a.div("UserNameContainer", ce.a),
				xe = E.a.div("KarmaGrid", ce.a),
				ye = E.a.div("GenericKarma", ce.a),
				_e = E.a.a("InfoLink", ce.a),
				we = E.a.div("KarmaCount", ce.a),
				Oe = E.a.div("GenericKarmaLabel", ce.a),
				Ie = E.a.div("BannerImage", ce.a),
				je = E.a.div("UserContainer", ce.a),
				Ee = E.a.div("BottomSpacer", ce.a),
				Ne = E.a.div("Container", ce.a),
				Ce = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(fe, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isGold && s.a.createElement(j.a, {
					to: "/premium"
				}, s.a.createElement(pe, null)), e.user.isEmployee && s.a.createElement(C.a, null)), s.a.createElement(he, null, s.a.createElement(ve, null, `u/${e.userName}`, s.a.createElement(ge, null, "•")), s.a.createElement(ve, null, (e.user.createdUtc || e.user.created) && s.a.createElement(H.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Se = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...B.a,
						...t
					};
					return s.a.createElement(xe, null, s.a.createElement(ye, null, s.a.createElement(we, null, Object(N.b)(r.fromPosts)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [O.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(ye, null, s.a.createElement(we, null, Object(N.b)(r.fromComments)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [O.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(ye, null, s.a.createElement(we, null, Object(N.b)(r.fromAwardsReceived)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [O.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(_e, {
						href: F.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(D.a, {
						className: ce.a.infoIcon
					})))), s.a.createElement(ye, null, s.a.createElement(we, null, Object(N.b)(r.fromAwardsGiven)), s.a.createElement(Oe, null, O.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [O.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(_e, {
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
						contextId: i,
						currentUser: a,
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
						topAwardIcon: v,
						userName: g,
						user: k,
						userFlair: x,
						isCurrentUserBanned: y,
						userProfileStyles: _,
						acceptChats: w,
						isCommentAuthorBlocked: j
					} = e;
					if (!k) return s.a.createElement(Ne, {
						style: f
					});
					const E = !!a && Object(M.e)(a) === g,
						N = !!(null == a ? void 0 : a.snoovatarFullBodyAsset),
						C = k.accountIcon || `${I.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						T = null == u ? void 0 : u.access,
						R = (null == x ? void 0 : x.templateIds) && (null === (t = null == x ? void 0 : x.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						U = null === (r = null == x ? void 0 : x.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: B
						} = k,
						D = !!k.snoovatarFullBodyAsset,
						W = k.isNSFW && o;
					let F;
					return F = D ? !W && _ && _.bannerBackgroundImage || void 0 : W ? `${I.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Ne, {
						className: n,
						id: d,
						style: f
					}, !D && F && s.a.createElement(Ie, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), s.a.createElement(je, null, D ? s.a.createElement(q.a, {
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
						username: g,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(ke, null, s.a.createElement(ue, {
						iconUrl: C,
						isNSFW: k.isNSFW,
						userName: g
					}), s.a.createElement(Ce, {
						title: null == b ? void 0 : b.title,
						user: k,
						userName: g
					})), s.a.createElement(Se, {
						user: k
					}), B && s.a.createElement(K.a, {
						recentAwardings: B,
						topAwardIcon: v,
						username: g
					}), c && !E && !y && w && !j && s.a.createElement(be, {
						contextId: i,
						priority: A.c.Secondary,
						userId: k.id,
						text: O.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), k.hasUserProfile && !y && !j && !E && k.enableFollowers && s.a.createElement(me, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(L.h)(e ? "unfollow" : "follow", i),
						isFullWidth: !0,
						small: !0
					})), T && i && !E && h && s.a.createElement(se, {
						contextId: i,
						subredditId: h,
						sendEvent: p,
						username: g
					}), S && i && R && U && h && s.a.createElement(oe, {
						contextId: i,
						subredditId: h,
						sendEvent: p,
						username: g
					}), s.a.createElement(P.i, {
						contextId: i,
						subredditId: h,
						user: k
					}), !(T || c) && s.a.createElement(Ee, null))
				},
				Te = Object(T.a)(Pe),
				Re = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Te, le({
						isOpen: t
					}, e))
				};
			Re.WrappedComponent = Pe;
			var Ue = Re;
			const Ae = Object(a.c)({
					activeTooltipId: g.a,
					currentUser: k.k,
					isLoggedIn: k.Q,
					hideNSFWPref: k.F,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(m.o)(e, {
							subredditId: r
						}) : void 0
					},
					prefersReducedAnimations: y.c,
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
					user: k.Ab,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(x.d)(e, {
							subredditId: r
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(v.n)(t) && Object(v.fb)(e, t),
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
						const n = Object(_.e)(e),
							s = r || n && Object(v.F)(e, n.name);
						return !!s && Object(m.j)(e, s)
					},
					trophyCase: (e, t) => Object(f.r)(e, Object(f.m)(e, t.userName)),
					isNightMode: k.db,
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
						return Object(v.gb)(e, {
							identifier: {
								name: r,
								type: "profile"
							}
						})
					}
				}),
				Be = Object(i.b)(Ae, (e, t) => ({
					onClickSnoovatar: () => e(Object(o.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Be(e => e.isModWithUserNotesPermissions ? s.a.createElement(w.b, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(o.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return s.a.createElement(i.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, s.a.createElement(a.a, {
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
				i = r("./src/higherOrderComponents/asTooltip.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = r("./src/reddit/icons/fonts/Info/index.tsx"),
				c = r("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				l = r.n(c);
			const u = Object(i.a)(o.a),
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
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/config.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
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
						href: `${i.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: d.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), o > 1 && s.a.createElement("span", {
						className: d.a.count
					}, `+${Object(a.b)(o-1)}`)), s.a.createElement("div", {
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
				i = r.n(s),
				a = r("./src/reddit/models/Image/index.tsx"),
				o = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(l);
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(a.e)(e);
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
						isNSFW: a,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? i.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(d.e)(r) === c ? i.a.createElement(o.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : a && s ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/preferences.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = Object(s.c)({
					currentUser: a.k,
					hideNSFWPref: a.F
				}),
				d = Object(n.b)(o, e => ({
					imageUpdateRequested: (t, r) => e(Object(i.C)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/Button/index.tsx"),
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
				return s.a.createElement(a.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(i.a)(l.a.snoovatarButton, {
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
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				a = r("./src/reddit/icons/svgs/Close/index.tsx"),
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
				}), d && t && (l ? s.a.createElement(i.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(a.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/components/HumanDate/index.tsx");

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
				const u = r ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(a.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? s.a.createElement(i.default, o({}, l, {
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
				s = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				c = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				l = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				b = r.n(m);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const p = 25;

			function f(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function h(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = f("particleDelay", b.a),
				g = f("particleX", b.a),
				k = f("particleFloat", b.a),
				x = () => {
					const e = h(g),
						t = h(k),
						r = h(v);
					return Object(s.a)(b.a.particle, e, t, r)
				};
			class y extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < p; t++) e.push(this.createParticle(t));
					return a.a.createElement("div", {
						role: "presentation",
						className: b.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return a.a.createElement("div", {
						key: e,
						className: `${x()}`
					})
				}
			}
			var _ = y;
			const w = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: i,
					prefersReducedAnimations: m,
					origin: p
				} = e;
				const f = Object(o.e)(u.b),
					h = i && Object(l.d)(i) && f,
					v = p === c.a.Profile,
					g = p === c.a.Hovercard;
				return h ? a.a.createElement("div", {
					className: Object(s.a)({
						[b.a.profileTreatment]: v,
						[b.a.hovercardTreatment]: g
					})
				}, a.a.createElement("div", {
					className: b.a.nftProfileUnitContainer
				}, a.a.createElement(d.a, {
					className: b.a.nftProfileUnit,
					imageUrl: i,
					origin: p
				}))) : a.a.createElement("div", {
					className: Object(s.a)(b.a.snoovatarContainer, t)
				}, r && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: b.a.topGlow
				}), a.a.createElement("div", {
					className: b.a.bottomGlow
				}), !m && a.a.createElement(_, null)), a.a.createElement("img", {
					className: Object(s.a)(b.a.snoovatar, {
						[b.a.premiumGlow]: r
					}),
					src: i,
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
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/reddit/components/Admin/index.tsx"),
				d = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: i,
					isGold: l,
					isNSFW: m
				} = e;
				return a.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || r, l && a.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${n.a.redditUrl}/premium`
				}, a.a.createElement(c.a, {
					className: u.a.snoovatarPremiumIcon
				})), i && a.a.createElement(o.a, null), m && a.a.createElement(d.a, {
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
				profileTreatment: "_2xpFvOlDs0HF8bwR0pDmqt",
				hovercardTreatment: "_34eH8NsQ_ay5kowUWt9-6E",
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
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				b = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				f = r.n(p),
				h = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				v = r.n(h),
				g = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				k = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: n,
					editMode: p,
					isDeletingBanner: h,
					isEmployee: x,
					isGold: y,
					isNSFW: _,
					isOwnProfile: w,
					onClickSnoovatar: O,
					onDeleteBanner: I,
					prefersReducedAnimations: j,
					snoovatarUrl: E,
					title: N,
					userCreated: C,
					username: S,
					url: P,
					isHovercard: T
				} = e;
				const R = Object(i.e)(e => !w && !!E && Object(c.f)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: _,
					username: S,
					isDeletingBanner: !!h,
					onDeleteBanner: I
				}), !p && w && s.a.createElement(a.default, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, s.a.createElement(d.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), s.a.createElement(g.a, {
					isGold: y,
					snoovatarUrl: E,
					prefersReducedAnimations: j,
					origin: T ? o.a.Hovercard : o.a.Profile
				}), s.a.createElement(k.a, {
					isEmployee: x,
					isGold: y,
					isNSFW: _,
					title: N,
					username: S
				}), s.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: C,
					url: P
				}), (w || !n && !!E) && s.a.createElement(l.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: w,
					onClick: O
				}), R && s.a.createElement(u.a, {
					username: S,
					isHovercard: !!T,
					share: {
						username: S
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
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/actions/urlRequested.ts"),
				l = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = r("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				b = r.n(m);
			const p = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				f = d.a.wrapped(e => {
					const t = Object(l.a)();
					return i.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: r => {
							((e, t, r, n, s) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const r = e.target.getAttribute("href");
									s && n(r, s), t(r)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), r && r(e)
							})(r, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", b.a);
			t.a = p(Object(o.a)(f))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
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
					const t = Object(a.e)(o.e),
						r = Object(a.e)(o.a);
					return t || r ? i.a.createElement(d, e) : null
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
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/index.tsx"),
				o = r("./src/reddit/controls/Checkbox/index.m.less"),
				d = r.n(o);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(i.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/SubredditWiki.json");
			const i = (e, t) => Object(n.a)(e, {
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
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/featureFlags/index.ts");

			function d(e, t, r) {
				const n = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(i.b)(n)(e => {
					const {
						featureEnabled: n,
						...i
					} = e, a = i;
					return n ? s.a.createElement(t, a) : void 0 !== r ? s.a.createElement(r, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const r = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === n.b.NO_ADS);
				return !r && !s
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
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = r.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				o = e => Object(n.a)(i.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			}));
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					...Object(n.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(n.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				a = () => e => ({
					...Object(n.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var o;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(o || (o = {}));
			const d = e => t => {
				const r = Object(n.n)(t);
				return {
					...r,
					source: "marketplace",
					action: "view",
					noun: "product_detail_page",
					actionInfo: {
						...r.actionInfo,
						reason: e,
						pageType: "product_detail_page"
					}
				}
			}
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/sortBy.js"),
				s = r.n(n),
				i = r("./src/reddit/constants/wiki.ts");
			const a = e => {
				return s()(e, e => `${e.path}/`.startsWith(`${i.i}/`) ? `\0${e.path}` : e.path).filter(e => !i.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					r = [];
				return a(e).forEach(e => {
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
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/wiki.ts");
			const s = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${n.c}}$`),
				i = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!i.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const r = e.toLowerCase(),
						i = r.split("/")[0],
						o = n.b.has(i),
						d = n.f.has(i) && r !== n.h && r !== n.k;
					if (o || d) return a.RestrictedPageName;
					if (!s.test(r)) return a.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === r)) return a.PageAlreadyExists
					}
					return r.length > n.d ? a.MaxLengthExceed : void 0
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
				i = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(i.b)("info",e.isFilled)} ${e.className}`
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
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(n || (n = {}));
			const s = e => e.category === n.Supporter,
				i = e => e.category === n.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/gold/constants.ts"),
				i = r("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const a = {};
			var o = r("./node_modules/icepick/icepick.js"),
				d = r("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, r;
					return (null === (t = e.find(e => {
						let {
							isPreferred: t
						} = e;
						return t
					})) || void 0 === t ? void 0 : t.type) || (null === (r = e[0]) || void 0 === r ? void 0 : r.type)
				},
				u = {};
			t.a = Object(n.c)({
				subredditPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.ob:
							const {
								subredditId: r, subredditAchievementFlairs: n
							} = t.payload;
							if (!(null == n ? void 0 : n.length)) return e;
							const a = n.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								o = n.filter(i.a).map(e => e.type),
								d = n.filter(i.b).map(e => e.type);
							return {
								...e, [r]: {
									flairsByType: a,
									achievementTypes: o,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
									userAchievementFlairs: a
								} of n) {
								const r = a.filter(i.a),
									n = r.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
									o = a.filter(i.b),
									d = o.map(e => {
										let {
											type: t
										} = e;
										return t
									}),
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
								supporterFlairType: i
							} = t.payload;
							return Object(o.updateIn)(e, [r, n], e => ({
								...e,
								pendingAchievementType: s,
								pendingSupporterType: i
							}))
						}
						case d.g: {
							const {
								subredditId: r,
								userId: n,
								achievementFlairType: s,
								supporterFlairType: i
							} = t.payload;
							return Object(o.updateIn)(e, [r, n], e => ({
								...e,
								preferredAchievementType: s,
								preferredSupporterType: i,
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
				usersSupportedSubreddits: function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.i: {
							let r = {};
							return t.payload.forEach(e => {
								const t = e.id,
									n = e.powerups;
								if (!t || !n) return;
								const s = n.supportedSubreddits.filter(e => {
									let {
										subredditInfo: t
									} = e;
									return null == t ? void 0 : t.id
								}).map(e => {
									let {
										subredditInfo: t
									} = e;
									return t.id
								});
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
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.ee
					}) === n.yd)
				},
				a = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.fe
				}) === n.yd
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
				return k
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/selectors/commentSelector.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(i.a)({
				features: {
					powerups: a.a
				}
			});
			const o = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n;
					return r ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[r] : null
				},
				d = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n, s;
					return r ? null === (s = null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[r]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, t) => {
					let {
						subredditId: r,
						userId: n
					} = t;
					var s, i;
					return r && n ? null === (i = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[r]) || void 0 === i ? void 0 : i[n] : null
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
						supporterTypes: i,
						achievementTypes: a,
						preferredSupporterType: o,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: g(r, i, s, c || o),
						achievementFlairs: g(n, a, s, l || d)
					}
				}),
				h = Object(n.a)([c], e => !!e && e.isHidden),
				v = Object(n.a)([o, c, b], (e, t, r) => {
					if (!e || !t) return [];
					const n = t.achievementTypes.map(t => e.flairsByType[t]);
					return r ? [r, ...n] : n
				}),
				g = (e, t, r, n) => e.map(e => ({
					...r[e],
					isLocked: !t.includes(e),
					isPreferred: e === n
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				k = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = Object(s.b)(e, {
							commentId: r
						}),
						i = null == n ? void 0 : n.subredditId,
						a = null == n ? void 0 : n.authorId;
					return !(!i || !a) && !!((e, t) => {
						let {
							subredditId: r,
							userId: n
						} = t;
						var s, i, a;
						return r && n ? null === (a = null === (i = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === i ? void 0 : i[n]) || void 0 === a ? void 0 : a[r] : null
					})(e, {
						subredditId: i,
						userId: a
					})
				}
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
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
				return y
			})), r.d(t, "g", (function() {
				return _
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const i = [],
				a = (e, t) => {
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
						a = s.userOrder[n],
						o = s.models[n];
					return a ? a.map(e => o[e]) : i
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
				x = Object(n.a)((e, t) => {
					let {
						subredditName: r
					} = t;
					const n = r.toLowerCase(),
						s = e.pages.subredditWiki.wikiBannedContributors.listing,
						a = s.userOrder[n],
						o = s.models[n];
					return a ? a.map(e => o[e]) : i
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages~SubredditWiki.027918296af02e4e3ef3.js.map