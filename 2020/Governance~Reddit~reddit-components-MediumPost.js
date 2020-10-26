// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-MediumPost.f9f5b2ad57d8ac0adccc.js
// Retrieved at 10/26/2020, 11:00:17 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~reddit-components-MediumPost"], {
		"./src/reddit/actions/inFeedChaining.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return m
			})), n.d(e, "d", (function() {
				return T
			})), n.d(e, "c", (function() {
				return E
			})), n.d(e, "a", (function() {
				return D
			})), n.d(e, "e", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/telemetry/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeListingKey/index.ts"),
				d = n("./src/reddit/actions/discoveryUnit.ts"),
				u = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				a = n("./src/reddit/actions/subreddit/subredditPosts.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/constants/inFeedChaining.ts"),
				l = n("./src/reddit/constants/page.ts"),
				j = n("./src/reddit/helpers/localStorage/index.ts"),
				g = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/inFeedChaining.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts");
			const m = "FEED_CHAINING__CHAIN_LOADED",
				y = Object(r.a)(m),
				C = t => {
					const e = Date.now() - t,
						n = Object(j.u)();
					return Object.keys(n).filter(t => n[t].when >= e).map(t => n[t])
				},
				T = t => {
					let {
						listingName: e,
						listingKey: n,
						postId: s
					} = t;
					return async (t, r, b) => {
						if (!s) return;
						const f = Object(p.bb)(r(), {
							postId: s
						});
						if (!f) return;
						const m = f.name.toLowerCase(),
							T = e === m;
						if (!(e === l.f || e === l.b || T)) return;
						if (T) return void v(f, n, s)(t, r, b);
						0 === C(c.fb).length && Object(j.eb)(!1);
						let E = r();
						if (Object(I.d)(E, {
								listingKey: n,
								postId: s
							}) || Object(I.a)(E).length >= O.a || Object(j.F)() || C(c.x).length >= O.a) return;
						const D = Object(p.C)(E, {
							listingKey: n,
							postId: s
						});
						if (D && D.isSponsored) return;
						await t(Object(d.g)()), E = r();
						const h = Object(I.b)(E, {
							listingName: e
						});
						if (!h) return;
						if (!f || Object(I.e)(E, {
								subredditId: f.id
							}) || (t => {
								return C(c.x).some(e => e.subredditId === t)
							})(f.id)) return;
						const S = {
							subredditIds: [f.id],
							count: O.b
						};
						await t(Object(u.b)(S));
						const L = Object(u.a)(S);
						E = r();
						const U = Object(_.w)(E, {
							key: L
						});
						0 !== U.length ? (await t((t => async (e, n) => {
							const s = c.Sb.DAY.toUpperCase(),
								i = t.filter(t => {
									const e = Object(o.a)(t, c.O.TOP, {
										t: s
									});
									return 0 === Object(p.H)(n(), {
										listingKey: e
									}).length
								});
							await e(Object(a.b)({
								first: 1,
								range: s,
								sort: c.I.TOP,
								subredditNames: i
							}))
						})(U.map(t => t.name))), E = r(), Object(I.f)(E, {
							postId: s
						}).length < O.c ? Object(i.a)(Object(g.c)(h, "other", f)(E)) : (Object(j.a)(s, f.id), Object(i.a)(Object(g.d)(h, f)(E)), t(y({
							listingKey: n,
							postId: s
						})))) : Object(i.a)(Object(g.c)(h, "no_chaining", f)(E))
					}
				},
				E = "FEED_CHAINING__CHAIN_TOGGLED",
				D = (Object(r.a)(E), "FEED_CHAINING__CHAINING_TOGGLED"),
				h = Object(r.a)(D),
				S = () => async t => {
					Object(j.eb)(!0), t(h({
						isDismissed: !0
					})), t(Object(b.e)(Object(b.d)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), f.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(j.eb)(!1), t(h({
							isDismissed: !1
						}))
					})))
				}, v = (t, e, n) => async (t, e, n) => {}
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return O
			})), n.d(e, "b", (function() {
				return f
			}));
			var s, i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/subreddit/constants.ts"),
				r = n("./src/reddit/endpoints/category/subreddits.ts"),
				o = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				u = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			! function(t) {
				t.Factorization = "factorization", t.CustomModRelevant = "custom_mod_relevant"
			}(s || (s = {}));
			var b = n("./src/reddit/selectors/subreddit.ts");
			const O = t => {
					let e = t.subredditIds.join(",");
					return t.count && (e += "--[count:'".concat(t.count, "']")), t.variant && (e += "--[variant:'".concat(t.variant, "']")), e.toLowerCase()
				},
				l = Object(i.a)(c.n),
				j = Object(i.a)(c.m),
				g = Object(i.a)(c.l),
				f = t => async (e, n, s) => {
					let {
						apiContext: i
					} = s;
					const c = n(),
						f = O(t),
						I = Object(b.v)(c, {
							key: f
						}),
						p = Object(b.u)(c, {
							key: f
						});
					if (I || p.length > 0) return;
					e(l({
						key: f
					}));
					const _ = await ((t, e) => Object(d.a)(Object(u.a)(t, [a.a]), {
						data: {
							sr_fullnames: e.subredditIds.join(","),
							limit: e.count,
							variant: e.variant
						},
						endpoint: "".concat(t.apiUrl, "/api/similar_subreddits.json"),
						method: o.db.GET
					}))(i(), t);
					if (_.ok) {
						const t = Object(r.b)(_.body);
						e(j(Object.assign({
							key: f
						}, t)))
					} else {
						const t = _.error;
						e(g({
							key: f,
							error: t
						}))
					}
				}
		},
		"./src/reddit/constants/inFeedChaining.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "c", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			}));
			const s = 3,
				i = 5,
				c = 10
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(t, e, n) {
			"use strict";
			n.d(e, "g", (function() {
				return p
			})), n.d(e, "h", (function() {
				return _
			})), n.d(e, "a", (function() {
				return T
			})), n.d(e, "E", (function() {
				return E
			})), n.d(e, "F", (function() {
				return D
			})), n.d(e, "M", (function() {
				return S
			})), n.d(e, "B", (function() {
				return v
			})), n.d(e, "C", (function() {
				return L
			})), n.d(e, "D", (function() {
				return U
			})), n.d(e, "i", (function() {
				return K
			})), n.d(e, "w", (function() {
				return B
			})), n.d(e, "x", (function() {
				return R
			})), n.d(e, "L", (function() {
				return w
			})), n.d(e, "K", (function() {
				return N
			})), n.d(e, "I", (function() {
				return k
			})), n.d(e, "v", (function() {
				return x
			})), n.d(e, "y", (function() {
				return A
			})), n.d(e, "z", (function() {
				return P
			})), n.d(e, "A", (function() {
				return M
			})), n.d(e, "N", (function() {
				return H
			})), n.d(e, "J", (function() {
				return F
			})), n.d(e, "t", (function() {
				return G
			})), n.d(e, "H", (function() {
				return q
			})), n.d(e, "d", (function() {
				return Q
			})), n.d(e, "c", (function() {
				return W
			})), n.d(e, "b", (function() {
				return z
			})), n.d(e, "f", (function() {
				return V
			})), n.d(e, "e", (function() {
				return Y
			})), n.d(e, "s", (function() {
				return Z
			})), n.d(e, "m", (function() {
				return $
			})), n.d(e, "r", (function() {
				return tt
			})), n.d(e, "k", (function() {
				return et
			})), n.d(e, "l", (function() {
				return nt
			})), n.d(e, "n", (function() {
				return st
			})), n.d(e, "p", (function() {
				return it
			})), n.d(e, "q", (function() {
				return ct
			})), n.d(e, "o", (function() {
				return rt
			})), n.d(e, "j", (function() {
				return ot
			})), n.d(e, "u", (function() {
				return dt
			})), n.d(e, "G", (function() {
				return ut
			}));
			var s, i = n("./src/lib/stringInterpolate/index.ts"),
				c = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				r = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/trackers/searchResults.ts"),
				u = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				a = n("./src/reddit/models/Widgets/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/reddit/selectors/widgets.ts"),
				j = n("./src/telemetry/index.ts");
			! function(t) {
				t.HEADER_SUBREDDIT = "header_subreddit", t.ITEM_POST = "item_post", t.ITEM_POST_SUBREDDIT = "item_post_subreddit", t.ITEM_SUBREDDIT = "item_subreddit", t.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", t.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", t.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const g = "discovery_unit",
				f = (t, e, n) => Object.assign(Object.assign({}, O.defaults(t)), {
					source: g,
					screen: O.screen(t),
					discoveryUnit: {
						id: e.id,
						type: e.unitType,
						title: e.title && n ? Object(i.a)(e.title, {
							subredditName: n.name
						}) : e.title,
						name: e.unitName
					}
				}),
				I = (t, e, n) => Object.assign(Object.assign({}, f(t, e, n)), {
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				p = (t, e) => {
					Object(j.a)(_(e)(t))
				},
				_ = (t, e) => n => I(n, t, e),
				m = (t, e, n, s) => "unitName" in e ? f(t, e, s) : ((t, e, n) => Object.assign(Object.assign({}, O.defaults(t)), {
					source: "search",
					screen: O.screen(t),
					search: n ? Object.assign(Object.assign({}, O.search(t, n)), {
						structureType: O.StructureType.Trending
					}) : null,
					discoveryUnit: {
						id: e.name,
						type: "listing",
						title: e.layout.title,
						name: e.name
					}
				}))(t, e, n),
				y = (t, e, n, i, c) => Object.assign(Object.assign({}, m(t, e, i, c)), {
					action: "view",
					noun: s.ITEM_POST,
					post: O.post(t, n)
				}),
				C = t => {
					let {
						post: e,
						rawQuery: n,
						searchQuery: s
					} = t;
					return {
						displayQuery: decodeURIComponent(s),
						rawQuery: n ? decodeURIComponent(n) : void 0,
						structureType: e && e.isSponsored ? O.StructureType.PromotedTrend : O.StructureType.Trending
					}
				};
			var T;
			! function(t) {
				t.POPULAR_CAROUSEL = "popular_carousel", t.SEARCH_DROPDOWN = "search_dropdown"
			}(T || (T = {}));
			const E = (t, e, n) => {
					Object(j.a)(h(t, e, n, r.c.CLICK))
				},
				D = (t, e, n) => {
					Object(j.a)(h(t, e, n, r.c.VIEW))
				},
				h = (t, e, n, s) => {
					const i = t.trending.models.filter(t => !t.post || !t.post.isSponsored).findIndex(t => t.id === e.id) + 1;
					return Object.assign(Object.assign({}, O.defaults(t)), {
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: C(e),
						discoveryUnit: n === T.POPULAR_CAROUSEL ? {
							name: u.l,
							id: u.l,
							title: u.l,
							type: "query"
						} : void 0,
						actionInfo: O.actionInfo(t, {
							paneName: n,
							position: i
						}),
						search: {
							originPageType: t.platform.currentPage ? O.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
							query: e.rawQuery,
							structureType: O.StructureType.Trending,
							queryId: s === r.c.CLICK ? Object(o.c)(o.a.SearchResults) : void 0
						}
					})
				},
				S = (t, e, n, s, i, c, o) => {
					Object(j.a)(Object.assign(Object.assign(Object.assign({}, O.defaults(t)), Object(d.e)(t, n, s, i, c, e)), {
						action: r.c.VIEW,
						noun: o ? "ad" : "post"
					}))
				},
				v = (t, e, n, s) => {
					Object(j.a)(y(t, e, n, s))
				},
				L = (t, e, n, s) => i => y(i, t, e, n, s),
				U = (t, e, n, i) => {
					const c = m(t, e, i);
					Object(j.a)(Object.assign(Object.assign(Object.assign({}, c), Object(l.b)(t, n)), {
						action: "view",
						noun: s.ITEM_SUBREDDIT
					}))
				},
				K = (t, e) => {
					Object(j.a)(Object.assign(Object.assign({}, f(t, e)), {
						source: g,
						action: r.c.CLICK,
						noun: "show_less_often"
					}))
				},
				B = (t, e, n, s) => {
					Object(j.a)(R(e, n, s)(t))
				},
				R = (t, e, n, i) => c => {
					const o = m(c, t, n, i);
					return Object.assign(Object.assign({}, o), {
						source: g,
						action: r.c.CLICK,
						noun: s.ITEM_POST,
						post: O.post(c, e)
					})
				},
				w = (t, e, n, s) => i => c => Object(d.e)(c, i, t, e, n, s),
				N = (t, e, n, s) => i => c => Object(d.d)(c, t, e, void 0, n, i, s),
				k = (t, e, n, s) => i => c => Object.assign(Object.assign({}, Object(d.e)(c, i, t, e, n, s)), {
					noun: "ad"
				}),
				x = (t, e) => n => i => Object.assign(Object.assign({}, t ? f(i, t, e) : {}), {
					source: g,
					action: r.c.CLICK,
					noun: s.ITEM_POST,
					post: O.post(i, n)
				}),
				A = (t, e, n, s) => {
					Object(j.a)(P(e, n, s)(t))
				},
				P = (t, e, n, s) => i => {
					const c = Object(b.c)(i, {
							postId: e
						}),
						o = c ? Object(l.b)(i, c) : void 0,
						d = m(i, t, n, s);
					return Object.assign(Object.assign(Object.assign({}, d), o), {
						source: g,
						action: r.c.CLICK,
						noun: "item_post_subreddit",
						post: O.post(i, e)
					})
				},
				M = (t, e, n) => s => i => {
					const c = Object(b.c)(i, {
							postId: e
						}),
						o = c ? Object(l.b)(i, c) : void 0,
						d = m(i, t, void 0, n);
					return Object.assign(Object.assign(Object.assign({}, d), o), {
						source: g,
						action: r.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: O.post(i, e)
					})
				},
				H = (t, e, n) => {
					const s = m(t, e);
					Object(j.a)(Object.assign(Object.assign(Object.assign({}, s), Object(l.b)(t, n)), {
						source: "search",
						action: r.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					}))
				},
				F = (t, e, n, s, i, c) => {
					Object(j.a)(Object.assign(Object.assign({}, O.defaults(t)), Object(d.d)(t, e, n, s, i, void 0, c)))
				},
				G = (t, e, n) => {
					const s = m(t, e);
					Object(j.a)(Object.assign(Object.assign(Object.assign({}, s), Object(l.b)(t, n)), {
						source: g,
						action: r.c.CLICK,
						noun: "footer_subreddit"
					}))
				},
				q = (t, e) => n => {
					const s = Object(a.j)(e);
					return Object.assign(Object.assign(Object.assign({}, f(n, t, e)), Object(l.b)(n, s)), {
						source: g,
						action: r.c.CLICK,
						noun: "title_subreddit"
					})
				},
				Q = (t, e) => n => Object.assign(Object.assign({}, f(n, t, e)), {
					action: "status",
					actionInfo: O.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				W = (t, e, n) => s => Object.assign(Object.assign({}, f(s, t, n)), {
					action: "status",
					actionInfo: O.actionInfo(s, {
						reason: e,
						success: !1
					}),
					noun: "loading"
				}),
				z = (t, e) => n => Object.assign(Object.assign({}, f(n, t, e)), {
					action: "click",
					noun: "close"
				}),
				V = (t, e, n) => s => Object.assign(Object.assign({}, m(s, t, e, n)), {
					action: "click",
					noun: "scroll"
				}),
				Y = (t, e) => n => Object.assign(Object.assign({}, f(n, t, e)), {
					action: "click",
					noun: "overflow_menu"
				}),
				J = () => ({
					id: "xd_focus_verticals",
					unitType: u.f.Listing,
					experiment: "",
					title: c.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: u.d.Large,
					surface: u.e.Frontpage,
					url: "gql.reddit.com"
				}),
				X = (t, e, n) => O.actionInfo(t, {
					position: n
				}),
				Z = (t, e, n) => {
					const s = J();
					return t => Object.assign(Object.assign({}, I(t, s)), {
						actionInfo: X(t, 0, n),
						subreddit: O.subredditById(t, e)
					})
				},
				$ = (t, e, n) => {
					const s = J();
					return t => Object.assign(Object.assign({}, y(t, s, e)), {
						actionInfo: X(t, 0, n)
					})
				},
				tt = (t, e, n) => {
					const i = J();
					return t => Object.assign(Object.assign({}, f(t, i)), {
						actionInfo: X(t, 0, n),
						subreddit: O.subredditById(t, e) || null,
						source: g,
						action: r.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				et = (t, e, n) => {
					const i = J();
					return t => Object.assign(Object.assign({}, f(t, i)), {
						actionInfo: X(t, 0, n),
						post: O.post(t, e) || null,
						source: g,
						action: r.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				nt = (t, e, n, i) => {
					const c = J();
					return t => Object.assign(Object.assign({}, f(t, c)), {
						actionInfo: X(t, 0, i),
						subreddit: O.subredditById(t, n) || null,
						post: O.post(t, e) || null,
						source: g,
						action: r.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				st = (t, e, n) => {
					const i = J();
					return t => Object.assign(Object.assign({}, f(t, i)), {
						actionInfo: X(t, 0, n),
						subreddit: O.subredditById(t, e) || null,
						source: g,
						action: r.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				it = (t, e, n, i) => {
					const c = J();
					return t => Object.assign(Object.assign({}, f(t, c)), {
						actionInfo: X(t, 0, n),
						subreddit: O.subredditById(t, e) || null,
						post: i ? O.post(t, i) : null,
						source: g,
						action: r.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				ct = (t, e, n, i) => {
					const c = J();
					return t => Object.assign(Object.assign({}, f(t, c)), {
						actionInfo: X(t, 0, n),
						subreddit: O.subredditById(t, e) || null,
						post: i ? O.post(t, i) : null,
						source: g,
						action: r.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				rt = (t, e, n) => {
					const i = J();
					return t => Object.assign(Object.assign({}, f(t, i)), {
						actionInfo: X(t, 0, n),
						subreddit: O.subredditById(t, e) || null,
						source: g,
						action: r.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ot = (t, e, n) => {
					const i = J();
					return t => Object.assign(Object.assign({}, f(t, i)), {
						actionInfo: X(t, 0, n),
						subreddit: O.subredditById(t, e) || null,
						source: g,
						action: r.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				dt = (t, e) => n => Object.assign(Object.assign(Object.assign({}, f(n, t)), e && Object(l.b)(n, e)), {
					source: g,
					action: r.c.CLICK,
					noun: "item"
				}),
				ut = t => e => Object.assign(Object.assign({}, f(e, t)), {
					source: g,
					action: r.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(t, e, n) {
			"use strict";
			n.d(e, "d", (function() {
				return l
			})), n.d(e, "c", (function() {
				return j
			})), n.d(e, "a", (function() {
				return g
			})), n.d(e, "e", (function() {
				return f
			})), n.d(e, "f", (function() {
				return p
			})), n.d(e, "b", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				r = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				o = n("./src/reddit/constants/inFeedChaining.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = n("./src/reddit/selectors/discoveryUnit.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/subreddit.ts");
			const O = [],
				l = (t, e) => {
					const n = t.posts.chained.idToListingKey[e.postId];
					return e.listingKey === n
				},
				j = (t, e) => {
					const n = t.posts.chained.dismissedIdToListingKey[e.postId];
					return (t => t.posts.chained.dismissed)(t) || e.listingKey === n
				},
				g = Object(s.a)(t => t.posts.chained.idToListingKey, t => Object.keys(t).filter(e => t[e])),
				f = (t, e) => {
					let {
						subredditId: n
					} = e;
					return g(t).some(e => {
						const s = Object(a.bb)(t, {
							postId: e
						});
						return !!s && s.id === n
					})
				},
				I = (t, e) => {
					let {
						subredditName: n
					} = e;
					const s = i.Sb.DAY.toUpperCase(),
						r = Object(c.a)(n, i.O.TOP, {
							t: s
						}),
						o = Object(a.H)(t, {
							listingKey: r
						});
					if (0 !== o.length)
						for (const i of o) {
							const e = Object(a.O)(t, {
								postId: i
							});
							if (e && !e.hidden && !e.isSponsored) return e
						}
				},
				p = (t, e) => {
					let {
						postId: n
					} = e;
					const s = ((t, e) => {
							let {
								postId: n
							} = e;
							const s = Object(a.O)(t, {
								postId: n
							});
							if (!s) return O;
							const i = Object(r.a)({
								subredditIds: [s.belongsTo.id],
								count: o.b
							});
							return Object(b.w)(t, {
								key: i
							})
						})(t, {
							postId: n
						}),
						i = [];
					for (const {
							name: c
						} of s) {
						const e = I(t, {
							subredditName: c
						});
						e && i.push(e.id)
					}
					return i
				},
				_ = (t, e) => {
					let {
						listingName: n
					} = e;
					const s = d.b;
					return Object(u.c)(t, {
						unitName: s
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-MediumPost.f9f5b2ad57d8ac0adccc.js.map