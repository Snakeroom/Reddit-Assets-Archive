// https://www.redditstatic.com/desktop2x/ProfileOverview.904399492334534172ec.js
// Retrieved at 3/11/2021, 11:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview"], {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/chat/controls/Svg/index.m.less"),
				d = s.n(i);
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
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[d.a.disable]: s,
						[d.a.active]: n,
						[d.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", d.a)
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return P
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				r = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				a = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./node_modules/lodash/values.js"),
				c = s.n(d);
			const l = e => c()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = r()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = u(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = u(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				g = r()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = r()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				w = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				O = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				P = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(r.e)(e),
					a = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "b", (function() {
				return E
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var u = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(a.g),
				f = Object(r.a)(a.e),
				g = Object(r.a)(a.h),
				x = Object(r.a)(a.c),
				v = Object(r.a)(a.f),
				y = Object(r.a)(a.j),
				w = Object(r.a)(a.i),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						o = Object(u.e)(r),
						a = Object(u.d)(r),
						c = Object(b.J)(r);
					if (o || !a) return;
					e(g());
					let p = !1;
					try {
						const t = c ? n.LoggedInGeo : n.LoggedOutGeo,
							r = await ((e, t, s) => Object(i.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (P(t)) {
								if (C(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (k(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										a = [n, r],
										i = Object(m.d)(a),
										d = Object(l.b)(a),
										c = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(u)), p = !0
								}
							} else p = !1
						}
					} catch (v) {
						p = !1
					}
					p || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, P = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !C(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, E = () => async (e, t, s) => {
					var n, r;
					const a = t(),
						i = Object(u.g)(a);
					if (Object(u.f)(a) || null === i || "client" === i) {
						const s = null === (r = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(b.K)(a);
						return Object(o.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return ye
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return we
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Oe
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Pe
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return Ce
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return ke
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Ee
			})), s.d(t, "profileOverviewChronoRequested", (function() {
				return je
			})), s.d(t, "profileOverviewRequested", (function() {
				return Se
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./src/reddit/actions/moderatingSubreddits.ts"),
				a = s("./src/reddit/actions/pages/profileShared.ts"),
				i = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/selectors/listings.ts"),
				b = s("./src/reddit/selectors/profile.ts"),
				h = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/makeActionCreator/index.ts"),
				x = s("./src/reddit/actions/changeUsername.ts"),
				v = s("./src/reddit/actions/contentGate.ts"),
				y = s("./src/reddit/actions/externalAccount.ts"),
				w = s("./src/reddit/actions/gold/powerups.ts"),
				O = s("./src/reddit/actions/pinnedPost.ts"),
				P = s("./src/reddit/actions/platform.ts"),
				C = s("./src/reddit/actions/profile/index.ts"),
				k = s("./src/reddit/actions/trophyCase.ts"),
				E = s("./src/reddit/constants/errors.ts"),
				j = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				S = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				_ = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				I = s("./src/lib/initializeClient/installReducer.ts"),
				L = s("./node_modules/redux/es/redux.js"),
				N = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const T = {};
			var R = (e = T, t) => {
				switch (t.type) {
					case _.c:
					case _.b:
					case N.c:
					case N.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case _.a:
					case N.a: {
						const {
							key: s,
							error: n
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
			const M = {};
			var F = (e = M, t) => {
					switch (t.type) {
						case _.c:
						case N.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case _.b:
						case _.a:
						case N.b:
						case N.a: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				B = Object(L.c)({
					error: R,
					pending: F
				});
			const D = {};
			var A = (e = D, t) => {
				switch (t.type) {
					case _.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case N.b: {
						const {
							key: s,
							fetchedToken: n
						} = t.payload, r = e[s];
						return {
							...e,
							[s]: {
								...r,
								[n]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const U = {};
			var H = (e = U, t) => {
					switch (t.type) {
						case _.b:
						case N.b: {
							const {
								key: s,
								overviewIds: n
							} = t.payload, r = e[s] || [];
							return {
								...e,
								[s]: [...r, ...n]
							}
						}
						default:
							return e
					}
				},
				V = s("./src/lib/omitKey/index.ts");
			const K = {};
			var W = (e = K, t) => {
					switch (t.type) {
						case _.b:
						case N.b: {
							const {
								key: s,
								dist: n,
								token: r
							} = t.payload;
							return r ? {
								...e,
								[s]: {
									dist: n,
									token: r
								}
							} : Object(V.a)(e, s)
						}
						default:
							return e
					}
				},
				z = Object(L.c)({
					api: B,
					fetchedTokens: A,
					ids: H,
					loadMore: W
				});
			const G = {};
			var q = (e = G, t) => {
				switch (t.type) {
					case _.f:
					case _.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case _.d: {
						const {
							key: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
						}
					}
					default:
						return e
				}
			};
			const Z = {};
			var Y = (e = Z, t) => {
					switch (t.type) {
						case _.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case _.e:
						case _.d: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				J = Object(L.c)({
					error: q,
					pending: Y
				}),
				X = s("./src/reddit/actions/profileConversations.ts");
			const Q = {};
			var $ = (e = Q, t) => {
				switch (t.type) {
					case X.c:
					case X.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case X.a: {
						const {
							extraCommentsId: s,
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case X.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case X.b:
						case X.a: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				se = Object(L.c)({
					error: $,
					pending: te
				});
			const ne = {};
			var re = (e = ne, t) => {
					switch (t.type) {
						case _.e:
						case X.b:
						case X.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				oe = Object(L.c)({
					api: se,
					models: re
				}),
				ae = s("./node_modules/lodash/mapValues.js"),
				ie = s.n(ae),
				de = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				ce = s("./src/reddit/constants/comments.ts");
			const le = {};

			function me(e) {
				const t = e;
				return ie()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			const ue = (e, t, s) => {
				const n = {};
				for (const r in t) {
					const e = t[r],
						s = e.postId;
					n.hasOwnProperty(s) ? n[s] = {
						...n[s],
						[r]: e
					} : n[s] = {
						[r]: e
					}
				}
				for (const r in s) {
					const e = s[r],
						t = e.postId;
					n.hasOwnProperty(t) ? n[t] = {
						...n[t],
						[r]: e
					} : n[t] = {
						[t]: e
					}
				}
				return n
			};
			var pe = (e = le, t) => {
				switch (t.type) {
					case _.e:
					case X.e: {
						const {
							comments: s,
							extraComments: n,
							postIds: r,
							profileName: o
						} = t.payload, a = ue(r, s, n), i = {};
						for (const e of r) {
							i[Object(de.a)(e, o)] = a.hasOwnProperty(e) ? me(a[e]) : {}
						}
						return {
							...e,
							...i
						}
					}
					case X.b: {
						const {
							comments: s,
							commentLists: n,
							extraComments: r,
							extraCommentsId: o,
							postIds: a,
							profileName: i
						} = t.payload;
						if (0 === a.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][o]);
							if (!t) return e;
							const s = {
									...e[t]
								} [o].prev,
								n = s && s.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[n]: {
										...e[t][n],
										next: null
									}
								}
							}
						}
						const d = a[0],
							c = me(ue(a, s, r)[d]),
							l = Object(de.a)(d, i),
							m = {
								...e[l]
							},
							u = m[o].prev,
							p = u && u.id || "",
							b = n[d].head,
							h = b && b.id || "",
							f = {
								id: h,
								type: ce.a.Comment
							},
							g = {
								...m,
								[p]: {
									...m[p],
									next: f
								},
								...c,
								[h]: {
									...c[h],
									prev: u
								}
							};
						return {
							...e,
							[l]: g
						}
					}
					default:
						return e
				}
			};
			const be = {};
			var he = (e = be, t) => {
				switch (t.type) {
					case _.e:
					case X.e: {
						const {
							commentLists: s,
							postIds: n,
							profileName: r
						} = t.payload, o = {};
						for (const e of n) {
							o[Object(de.a)(e, r)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return {
							...e,
							...o
						}
					}
					default:
						return e
				}
			};
			const fe = {};
			var ge = (e = fe, t) => {
					switch (t.type) {
						case _.e:
						case X.e: {
							const {
								postIds: s,
								profileName: n
							} = t.payload, r = {};
							for (const e of s) {
								r[Object(de.a)(e, n)] = e
							}
							return {
								...e,
								...r
							}
						}
						default:
							return e
					}
				},
				xe = Object(L.c)({
					api: J,
					extraComments: oe,
					keyToCommentThreadLinkSets: pe,
					keyToHeadCommentId: he,
					keyToPostId: ge
				}),
				ve = Object(L.c)({
					chrono: z,
					conversations: xe
				});
			Object(I.a)({
				pages: {
					profileOverview: ve
				}
			});
			const ye = Object(g.a)(_.f),
				we = Object(g.a)(_.e),
				Oe = Object(g.a)(_.d),
				Pe = Object(g.a)(_.c),
				Ce = Object(g.a)(_.b),
				ke = Object(g.a)(_.a),
				Ee = (e, t, s, n) => async (n, r, o) => {
					const a = r(),
						i = !!a.listings.postOrder.ids[e],
						c = !!Object(p.c)(a, {
							listingKey: e
						});
					if (!!Object(p.d)(a, {
							listingKey: e
						}) || i && !c) return;
					n(ye({
						key: e
					}));
					const l = await Object(S.a)("profile", () => Object(d.b)(o.apiContext(), t, s)),
						m = l.body,
						{
							pinned: u,
							postIds: h
						} = m;
					if (l.ok) {
						n(we({
							key: e,
							meta: a.meta,
							profileName: t,
							...m,
							postIds: h
						}));
						const s = Object(b.m)(r(), t);
						n(Object(O.h)({
							profileId: s,
							pinned: u
						}))
					} else n(Oe({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === E.a.DeletedProfile && n(Object(v.p)({
						profileName: t
					})), n(Object(P.l)(l.status))
				}, je = (e, t, s, n) => async (n, r, o) => {
					const a = r(),
						i = !!Object(h.f)(a, {
							listingKey: e
						}).length,
						c = !!Object(h.a)(a, {
							listingKey: e
						});
					if (!!Object(h.b)(a, {
							listingKey: e
						}) || i && !c) return;
					n(Pe({
						key: e
					}));
					const l = await Object(S.a)("profile", () => Object(d.a)(o.apiContext(), t, s)),
						m = l.body,
						{
							pinned: u
						} = m;
					if (l.ok) {
						n(Ce({
							key: e,
							meta: a.meta,
							...m
						}));
						const s = Object(b.m)(r(), t);
						n(Object(O.h)({
							profileId: s,
							pinned: u
						}))
					} else n(ke({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === E.a.DeletedProfile && n(Object(v.p)({
						profileName: t
					})), n(Object(P.l)(l.status))
				}, Se = e => async (t, s, n) => {
					const {
						queryParams: d,
						params: p
					} = e, {
						sort: h,
						t: g
					} = Object(a.a)(s(), d), {
						profileName: v
					} = p;
					let O = !1;
					const P = l.e[Object(u.O)(s(), {})],
						E = v.toLowerCase(),
						S = {
							...r()(e.queryParams, m.l),
							sort: h,
							layout: P,
							t: g
						},
						_ = [t(C.d(E))];
					if (P === l.e[l.g.Compact]) {
						const n = Object(j.a)(E, c.lb, h, e.queryParams);
						s().pages.profileOverview.chrono.ids[n] ? O = !0 : _.push(t(je(n, E, S, !0)))
					} else {
						const n = Object(j.a)(E, c.mb, h, e.queryParams);
						s().listings.postOrder.ids[n] && !s().listings.postOrder.api.error[n] ? O = !0 : _.push(t(Ee(n, E, S, !0)))
					}
					if (_.push(t(Object(o.b)())), await Promise.all(_), O) return;
					const I = s();
					if (!I.platform.currentPage) return;
					if (200 !== I.platform.currentPage.status) return;
					const L = Object(b.m)(s(), E),
						N = Object(f.mb)(I, {
							userName: v
						}).id;
					Object(f.M)(I) && Object(f.O)(I, v) && t(Object(x.f)());
					const T = [t(Object(i.q)()), t(k.b(E, L)), t(C.b(E)), t(y.o(v)), t(C.g(v)), t(w.e(v, N))];
					await Promise.all(T)
				}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, d = Object(o.e)(e => e.subreddits.questions), c = Object(o.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = s[r],
						t = c[e].belongsTo.id;
					p(e) && r - o >= i && !m.has(t) && (o = r, m.add(t), r === l && (u = !0))
				}
				return u ? r.a.createElement(a.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = d[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: async () => s.e("CommunityTopicSurvey").then(s.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
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
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loginHref/index.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				u = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				b = s("./src/reddit/components/Footer/index.m.less"),
				h = s.n(b);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = c.a.div("FooterContainer", h.a), x = c.a.div("UserAgreement", h.a), v = c.a.a("UserAgreementLink", h.a), y = c.a.a("PrivacyLink", h.a);
			var w = () => o.a.createElement(g, null, o.a.createElement(x, null, f._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [f._param("=User Agreement", o.a.createElement(v, {
					href: `${n.a.redditUrl}/help/useragreement`
				}, f._("User Agreement", null, {
					hk: "2srkM2"
				}))), f._param("=Privacy Policy", o.a.createElement(y, {
					href: `${n.a.redditUrl}/help/privacypolicy`
				}, f._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), f._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				O = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				P = s("./src/reddit/components/RichTextJson/index.tsx"),
				C = s("./node_modules/lodash/flatMap.js"),
				k = s.n(C),
				E = s("./src/lib/linkMatchers/index.ts"),
				j = s("./src/lib/linkMatchers/customLinks.ts"),
				S = s("./src/reddit/controls/OutboundLink/index.tsx");
			const _ = /\[(.+?)\]\((.+?)\)/g,
				I = e => {
					const t = e.split(_);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, r, o] = t.slice(n, n + 3);
						s.push(e), s.push([o, r])
					}
					return s
				};
			var L = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = k()(t, I)), e.parseRegularLinks && (t = k()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(j.g.subreddit.prefix, j.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const r of t) s.push(e.slice(n ? n.lastIndex : 0, r.index)), n = r, s.push([r.url, r.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, r] = t;
							return o.a.createElement(S.b, {
								className: e.linkClassName,
								href: n,
								isSponsored: !1,
								key: s,
								source: null
							}, r)
						}
						return o.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				T = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/chat/controls/Svg/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var F = e => o.a.createElement(R.a, M({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				B = s("./src/reddit/models/ContentGate.ts"),
				D = s("./src/reddit/selectors/meta.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/ContentGate/index.m.less"),
				H = s.n(U);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = c.a.wrapped(F, "PrivateKey", H.a), W = c.a.div("ButtonsContainer", H.a), z = c.a.div("Container", H.a), G = c.a.div("Description", H.a), q = c.a.div("PrivateSubredditDetails", H.a), Z = c.a.div("PrivateSubredditDescription", H.a), Y = c.a.h3("PrivateSubredditName", H.a), J = c.a.a("Link", H.a), X = c.a.wrapped(T.k, "LinkRouterButton", H.a), Q = c.a.wrapped(T.j, "LinkButton", H.a), $ = c.a.wrapped(T.n, "SecondaryLinkRouterButton", H.a), ee = c.a.wrapped(T.m, "SecondaryLinkButton", H.a), te = c.a.wrapped(X, "GoHomeLinkButton", H.a), se = c.a.img("Image", H.a), ne = c.a.img("ImagePlaceholder", H.a), re = c.a.wrapped(X, "LeftLinkRouterButton", H.a), oe = c.a.wrapped(Q, "LeftLinkButton", H.a), ae = c.a.wrapped(ee, "SecondaryLeftLinkButton", H.a), ie = c.a.wrapped($, "SecondaryLeftLinkRouterButton", H.a), de = c.a.h3("Title", H.a), ce = c.a.div("PageBody", H.a), le = c.a.div("QuarantineMessageWrapper", H.a), me = Object(d.c)({
				isLoggedIn: A.J,
				origin: D.l,
				user: A.j
			}), ue = Object(N.t)(), pe = Object(a.b)(me, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(u.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(m.l)())
				}
			})), be = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: a,
					location: i,
					origin: d,
					pageLayer: c,
					quarantineRequiresEmail: u,
					quarantineMessage: b,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: f,
					setNSFWPreference: g,
					subredditDescription: x,
					subredditName: v,
					user: y
				} = e, w = async () => {
					a ? await g() : await Object(m.k)(), window.location.reload()
				};
				switch (s) {
					case B.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(de, null, V._("r/{community name} is a Reddit Premium community", [V._param("community name", v)], {
							hk: "2lyDwB"
						})), o.a.createElement(G, null, V._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(W, null, y ? o.a.createElement(ae, {
							href: `${n.a.redditUrl}/premium`
						}, V._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(oe, {
							href: Object(l.a)(i, d)
						}, V._("Sign Up", null, {
							hk: "rvpjy"
						})), y ? o.a.createElement(X, {
							to: "/"
						}, V._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(l.a)(i, d)
						}, V._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case B.a.Nsfw:
					case B.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(de, null, s === B.a.Nsfw ? V._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : V._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(G, null, V._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(W, null, o.a.createElement(re, {
							to: "/"
						}, V._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ee, {
							onClick: w
						}, V._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case B.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(K, null), o.a.createElement(de, null, "r/", v, " ", V._("is a private community", null, {
							hk: "7zZmq"
						})), x && x.length && o.a.createElement(q, null, o.a.createElement(Y, null, "r/", v), o.a.createElement(Z, null, o.a.createElement("div", null, x))), o.a.createElement(G, null, V._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", v, " ", V._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), V._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(W, null, y ? o.a.createElement(ae, {
							href: `${n.a.redditUrl}/message/compose?to=/r/${v}`
						}, V._("Message Mods", null, {
							hk: "vVe1i"
						})) : o.a.createElement(ae, {
							href: Object(l.a)(i, d)
						}, V._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(X, {
							to: "/"
						}, V._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case B.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(de, null, V._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(G, null, V._("This community is {=quarantined}", [V._param("=quarantined", o.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, V._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(le, null, f ? o.a.createElement(P.a, {
							content: f,
							rtJsonElementProps: {
								pageLayer: c
							}
						}) : h ? o.a.createElement(O.a, {
							html: h
						}) : b || V._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), V._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(W, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? o.a.createElement(W, null, o.a.createElement(ie, {
								to: "/"
							}, V._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Q, {
								href: `${n.a.redditUrl}/prefs/update`
							}, V._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(W, null, o.a.createElement(re, {
								to: "/"
							}, V._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								onClick: t
							}, V._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(y, r, u)));
					case B.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(de, null, V._("r/{community name} has been banned from Reddit", [V._param("community name", v)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(G, null, e ? o.a.createElement(L, {
							linkClassName: H.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : V._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(W, null, o.a.createElement(X, {
							to: "/"
						}, V._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, V._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(W, null, o.a.createElement(X, {
							to: "/"
						}, V._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case B.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ne, null), o.a.createElement(de, null, V._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(G, null, V._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(W, null, y && o.a.createElement(p.a, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/"
						}, V._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.ProfileDoesNotExist:
					case B.a.ProfileDeleted:
					case B.a.ProfileSuspended:
					case B.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case B.a.ProfileBlockedForLegalReason:
									return V._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case B.a.ProfileDeleted:
									return V._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case B.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, V._("This account has been {=suspended} .", [V._param("=suspended", o.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, V._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case B.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(de, null, V._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(G, null, V._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(W, null, o.a.createElement(te, {
							to: "/"
						}, V._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, V._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(W, null, o.a.createElement(te, {
							to: "/"
						}, V._("Go Home", null, {
							hk: "49p4or"
						}))));
					case B.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(se, {
							src: `${n.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(de, null, V._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(W, null, o.a.createElement(X, {
							to: "/"
						}, V._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ue(pe(Object(i.i)(e => o.a.createElement(z, null, o.a.createElement("div", null, o.a.createElement(ce, null, be(e))), o.a.createElement(w, null)))))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = s.n(h),
				g = s("./src/lib/lessComponent.tsx");
			const x = "create-community-button",
				v = g.a.wrapped(c.c, "StyledTooltip", f.a),
				y = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.gb)(e),
					userIsSuspended: b.P
				});
			t.a = Object(a.b)(y, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: s => {
					s(Object(p.b)(t)), e(Object(u.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: x
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: s,
				onHideTooltip: r,
				openCommunityCreation: a,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: c
			}) => o.a.createElement(m.l, {
				className: e,
				disabled: c || d,
				onClick: () => a(i),
				onMouseEnter: s,
				onMouseLeave: r,
				id: x,
				isFullWidth: !0
			}, n.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), d ? o.a.createElement(v, {
				caretOnTop: !0,
				tooltipId: x,
				text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : c ? o.a.createElement(v, {
				caretOnTop: !0,
				tooltipId: x,
				text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: o.a.createElement("div", null),
				ssr: !1
			});
			t.a = a
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				w = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				P = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				j = s.n(E);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = "view--layout--FUE",
				I = "LayoutSwitch--picker",
				L = Object(d.a)(g.a),
				N = {
					[b.d.Card]: O.a,
					[b.d.Classic]: y.a,
					[b.d.Compact]: w.a
				},
				T = {
					[b.d.Card]: function(e) {
						return o.a.createElement(v.a, S({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(v.a, S({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(v.a, S({}, e, {
							name: "view_compact"
						}))
					}
				},
				R = {
					[b.d.Card]: () => n.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => n.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => n.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				M = Object(h.t)(),
				F = Object(i.c)({
					dropdownIsOpen: Object(k.b)(I),
					isInIcons2020: P.a,
					postLayout: h.O,
					redditStyle: h.A
				}),
				B = Object(a.b)(F, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.x)(t, s)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: I
					}))
				}));
			class D extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(C.screen)(t),
							subreddit: Object(C.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: s,
							layout: n,
							onLayoutClick: r,
							postLayout: a
						} = this.props, i = n || b.e[a], d = e === i, l = s ? T[e] : N[e], m = R[e];
						return o.a.createElement(x.b, S({}, t, {
							className: Object(c.a)(j.a.LayoutItem, {
								[j.a.selected]: d
							}),
							"data-layout": e,
							displayText: m(),
							iconWrapperClassName: j.a.LayoutItemIconWrapper,
							isSelected: d,
							noHover: d,
							onClick: d ? void 0 : () => this.changeLayout(e),
							textClassName: j.a.LayoutItemTextClassName
						}), o.a.createElement(l, {
							className: j.a.LayoutIcon,
							onClick: d ? void 0 : r,
							isFilled: s && d && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(L, S({}, e, {
							className: j.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: j.a.DropdownRow,
							rowIconClassName: j.a.DropdownRowIcon,
							rowSelectedClassName: j.a.DropdownRowSelected,
							tooltipId: I
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, r = t || b.e[n];
					return o.a.createElement("div", {
						className: Object(c.a)(j.a.Container, e),
						id: _
					}, o.a.createElement("div", {
						className: j.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: I,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = M(B(Object(p.c)(Object(l.a)(D))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/actions/preferences.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				f = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./src/reddit/actions/tooltip.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/higherOrderComponents/asTooltip.tsx"),
				y = s("./src/reddit/constants/listingSorts.ts"),
				w = s("./src/reddit/contexts/Tooltip.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				P = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/helpers/path/index.ts"),
				k = s("./src/reddit/helpers/trackers/navigation.ts"),
				E = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				S = s("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				N = s("./src/reddit/components/ListingSort/index.m.less"),
				T = s.n(N),
				R = s("./src/lib/lessComponent.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const F = "ListingSort--SortPicker",
				B = Object(v.a)(R.a.wrapped(O.a, "Dropdown", T.a)),
				D = R.a.wrapped(L.a, "ListingSortIcon", T.a),
				A = (R.a.wrapped(E.b, "DropdownTriangle", T.a), R.a.div("Title", T.a)),
				U = R.a.wrapped(e => r.a.createElement(P.b, M({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", T.a),
				H = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", M({}, t, {
					className: Object(a.a)(T.a.SortWrapper, t.className, {
						[T.a.isDisabled]: e
					})
				})),
				V = R.a.div("DropdownRowDisabled", T.a),
				K = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				W = Object(p.c)({
					isAwardListingExperimentEnabled: S.a,
					isBestSortPopularEnabled: j.a,
					user: I.j,
					dropdownIsOpen: (e, t) => Object(_.b)(t.dropdownId || F)(e),
					isPopularPage: l.C
				}),
				z = Object(o.b)(W, (e, {
					dropdownId: t,
					pageLayer: s
				}) => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: t || F
					}))
				}));
			var G = R.a.wrapped(K(z(Object(c.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(A, null, x.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(H, {
					disabled: e.disabled
				}, e.children || r.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(y.a)(e.sort),
					id: e.dropdownId || F,
					showDropdownTriangle: !0
				}, r.a.createElement(D, {
					sort: e.sort
				}))), r.a.createElement(w.a.Consumer, null, t => r.a.createElement(B, M({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || F
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(V, null, x.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, s, n, r) => {
					const o = [h.P.HOT, h.P.NEW, h.P.TOP, h.P.RISING];
					return (e && (s || n) || t && n) && o.unshift(h.P.BEST), t && r && o.splice(3, 0, h.P.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => r.a.createElement(P.b, {
					className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(k.a)(t))
					},
					href: e.isProfilePage ? Object(b.a)(e.baseUrl, {
						sort: t
					}) : Object(C.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, r.a.createElement(D, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", T.a),
				q = s("./src/reddit/constants/parameters.ts");
			const Z = e => {
					const t = Y[e];
					return t && t() || ""
				},
				Y = {
					[h.Rb.AllStates]: () => x.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[h.Rb.Alaska]: () => x.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.Rb.Alabama]: () => x.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.Rb.Arkansas]: () => x.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.Rb.Arizona]: () => x.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.Rb.California]: () => x.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.Rb.Colorado]: () => x.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.Rb.Connecticut]: () => x.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.Rb.DistrictOfColumbia]: () => x.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.Rb.Delaware]: () => x.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.Rb.Florida]: () => x.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.Rb.Georgia]: () => x.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.Rb.Hawaii]: () => x.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.Rb.Iowa]: () => x.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.Rb.Idaho]: () => x.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.Rb.Illinois]: () => x.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.Rb.Indiana]: () => x.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.Rb.Kansas]: () => x.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.Rb.Kentucky]: () => x.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.Rb.Louisiana]: () => x.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.Rb.Massachusetts]: () => x.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.Rb.Maryland]: () => x.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.Rb.Maine]: () => x.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.Rb.Michigan]: () => x.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.Rb.Minnesota]: () => x.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.Rb.Missouri]: () => x.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.Rb.Mississippi]: () => x.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.Rb.Montana]: () => x.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.Rb.NorthCarolina]: () => x.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.Rb.NorthDakota]: () => x.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.Rb.Nebraska]: () => x.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.Rb.NewHampshire]: () => x.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.Rb.NewJersey]: () => x.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.Rb.NewMexico]: () => x.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.Rb.Nevada]: () => x.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.Rb.NewYork]: () => x.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.Rb.Ohio]: () => x.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.Rb.Oklahoma]: () => x.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.Rb.Oregon]: () => x.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.Rb.Pennsylvania]: () => x.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.Rb.RhodeIsland]: () => x.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.Rb.SouthCarolina]: () => x.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.Rb.SouthDakota]: () => x.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.Rb.Tennessee]: () => x.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.Rb.Texas]: () => x.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.Rb.Utah]: () => x.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.Rb.Virginia]: () => x.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.Rb.Vermont]: () => x.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.Rb.Washington]: () => x.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.Rb.Wisconsin]: () => x.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.Rb.WestVirginia]: () => x.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.Rb.Wyoming]: () => x.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = s("./src/reddit/components/StateSort/index.m.less"),
				X = s.n(J);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = R.a.wrapped(O.a, "_Dropdown", X.a),
				ee = Object(v.a)($),
				te = e => {
					return e.indexOf("_") > 0 && ne(e) === h.w.UnitedStates
				},
				se = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return h.Rb.AllStates
				},
				ne = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				re = e => {
					const t = ne(e),
						s = se(e);
					return te(e) ? `${t}_${s}` : t
				},
				oe = Object(l.t)(),
				ae = Object(p.c)({
					dropdownIsOpen: Object(_.b)("StateSort--StateSortPicker")
				}),
				ie = Object(o.b)(ae, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(f.b)(t)), e(Object(d.u)(h.w.UnitedStates + "_" + s))
					}
				}));
			var de = R.a.wrapped(oe(ie(e => {
				const t = `${e.baseUrl}?${q.h}=${h.w.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(U, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(w.a.Consumer, null, s => r.a.createElement(ee, Q({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(h.Rb).map(s => {
					const n = h.Rb[s];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.Rb.AllStates ? t : `${t}_${e}`)(n), re(n))
					}, r.a.createElement(P.b, {
						className: Object(a.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
						displayText: Z(n),
						isSelected: e.sort === n
					}))
				}))))
			})), "Component", X.a);
			const ce = {
				[h.w.Everywhere]: () => x.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.w.UnitedStates]: () => x.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.w.Argentina]: () => x.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.w.Australia]: () => x.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.w.Bulgaria]: () => x.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.w.Canada]: () => x.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.w.Chile]: () => x.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.w.Colombia]: () => x.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.w.Croatia]: () => x.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.w.CzechRepublic]: () => x.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.w.Finland]: () => x.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.w.France]: () => x.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.w.Germany]: () => x.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.w.Greece]: () => x.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.w.Hungary]: () => x.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.w.Iceland]: () => x.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.w.India]: () => x.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.w.Ireland]: () => x.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.w.Italy]: () => x.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.w.Japan]: () => x.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.w.Malaysia]: () => x.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.w.Mexico]: () => x.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.w.NewZealand]: () => x.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.w.Philippines]: () => x.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.w.Poland]: () => x.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.w.Portugal]: () => x.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.w.PuertoRico]: () => x.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.w.Romania]: () => x.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.w.Serbia]: () => x.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.w.Singapore]: () => x.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.w.Spain]: () => x.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.w.Sweden]: () => x.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.w.Taiwan]: () => x.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.w.Thailand]: () => x.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.w.Turkey]: () => x.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.w.UnitedKingdom]: () => x.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var le = s("./src/reddit/components/CountrySort/index.m.less"),
				me = s.n(le);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				be = Object(l.t)(),
				he = Object(p.c)({
					dropdownIsOpen: Object(_.b)(pe)
				});
			var fe = be(Object(o.b)(he, e => ({
					onCloseDropdown: t => e(Object(g.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(g.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(f.b)(t)), e(Object(d.u)(s))
					}
				}))(e => {
					const t = ne(e.sort),
						s = se(e.sort),
						n = `${e.baseUrl}?${q.h}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, r.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(U, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[h.w.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), r.a.createElement(w.a.Consumer, null, s => r.a.createElement(ee, ue({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(h.w).map(s => {
						const o = h.w[s];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${n}${re(o)}`, o)
						}, r.a.createElement(P.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: ce[o](),
							isSelected: t === o
						}))
					})))), t === h.w.UnitedStates && r.a.createElement(de, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: s,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ge = s("./node_modules/path-browserify/index.js"),
				xe = s.n(ge),
				ve = s("./src/reddit/components/TimeSort/index.m.less"),
				ye = s.n(ve);

			function we() {
				return (we = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(v.a)(O.a),
				Pe = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (n = xe.a.join(n, t)), Object(b.a)(n, {
						[q.x]: s
					})
				},
				Ce = R.a.div("ListingSortContainer", ye.a),
				ke = Object(l.t)(),
				Ee = Object(p.c)({
					dropdownIsOpen: Object(_.b)("TimeSort--SortPicker")
				});
			var je = ke(Object(o.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => r.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(U, {
					className: e.buttonClassName,
					displayText: Object(y.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(w.a.Consumer, null, t => r.a.createElement(Oe, we({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.Ub.HOUR, h.Ub.DAY, h.Ub.WEEK, h.Ub.MONTH, h.Ub.YEAR, h.Ub.ALL].map(t => r.a.createElement(P.b, {
					className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.b)(t),
					href: Pe(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(k.c)(t))
					}
				})))))))),
				Se = s("./src/reddit/constants/listings.ts"),
				_e = s("./src/reddit/contexts/CoreStyleExperiments.ts"),
				Ie = s("./src/reddit/controls/Button/index.tsx"),
				Le = s("./src/reddit/icons/fonts/index.tsx"),
				Ne = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Te = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Re = s.n(Te);

			function Me() {
				return (Me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = new Set([h.P.CONTROVERSIAL, h.P.TOP]),
				Be = new Set([h.P.CONTROVERSIAL, h.P.RISING]),
				De = "ListingSort--Overflow",
				Ae = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ue = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, I.j, l.C, S.a, (e, t, s, n, r, o) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e
					};
					const a = [h.P.HOT, h.P.NEW, h.P.TOP, h.P.RISING];
					return (t && (n || s) || r && s) && a.unshift(h.P.BEST), r && o && a.splice(3, 0, h.P.AWARDED), {
						isPopularPage: r,
						sortOptions: a
					}
				});
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(k.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(C.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(Ie.q, {
							className: Object(a.a)(Re.a.SortLink, e === t && Re.a.selected),
							kind: Ie.a.InternalLink,
							priority: Ie.b.Plain,
							Icon: s => r.a.createElement(D, Me({}, s, {
								sort: e,
								isFilled: e === t
							})),
							text: Object(y.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: n,
							sort: o
						} = this.props, a = n && !!s && e === h.P.HOT && o === h.P.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && r.a.createElement(fe, {
							baseUrl: Se.c[Se.b.Popular],
							buttonClassName: Re.a.DropdownButton,
							className: Re.a.CountrySort,
							disabled: t,
							dropdownClassName: Re.a.Dropdown,
							rowClassName: Re.a.DropdownRow,
							rowSelectedClassName: Re.a.DropdownRowSelected,
							wrapperClassName: Re.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: Re.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: o,
						timeSort: i
					} = this.props, d = !t && Fe.has(n), c = Be.has(n), l = o.filter(e => !Be.has(e)), m = o.filter(e => Be.has(e) && e !== n);
					return r.a.createElement(_e.b.Consumer, null, ({
						icons2020: t
					}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(G, Me({}, this.props, {
						buttonClassName: Re.a.DropdownButton,
						className: Object(a.a)(Re.a.SortDropdown, e),
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(Re.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(n), d && r.a.createElement(je, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: Re.a.DropdownButton,
						className: Re.a.TimeSort,
						dropdownClassName: Re.a.Dropdown,
						listingSort: n,
						onChange: s,
						rowClassName: Re.a.DropdownRow,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						timeSort: i || h.Vb,
						wrapperClassName: Re.a.DropdownSortWrapper
					}), m.length > 0 && r.a.createElement(G, Me({}, this.props, {
						className: Object(a.a)(Re.a.SortOverflow, e),
						dropdownClassName: Re.a.Dropdown,
						dropdownId: De,
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), r.a.createElement("button", {
						className: Re.a.SortOverflowButton,
						id: De
					}, t ? r.a.createElement(Le.a, {
						name: "overflow_horizontal"
					}) : r.a.createElement(Ne.a, null)))))
				}
			}
			var Ve = Ae(Object(o.b)(Ue)(Object(c.c)(He))),
				Ke = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				We = s.n(Ke);
			const ze = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ge = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (s, n) => {
						if (t) {
							const r = Object(i.c)({
								sort: s,
								timeSort: n
							});
							e(Object(d.I)(t, r))
						}
					}
				}));
			class qe extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: d,
						subredditId: c,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(We.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Ve, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: l
					}), !o && r.a.createElement(u.a, {
						className: We.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = ze(Ge(Object(c.c)(qe)))
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/selectors/activeModalId.ts"),
				v = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				y = s("./src/reddit/selectors/inFeedChaining.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				C = s("./src/lib/ads/index.ts"),
				k = s("./src/lib/classNames/index.ts"),
				E = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				j = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				S = s("./src/reddit/components/AwardBadges/index.tsx"),
				_ = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				I = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				L = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				N = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				D = s("./src/reddit/components/PostContainer/index.tsx"),
				A = s("./src/reddit/components/PostLeftRail/index.tsx"),
				U = s("./src/reddit/components/PostMedia/index.tsx"),
				H = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				K = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				W = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				z = s.n(W);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var q = () => {
					const e = Object(V.a)();
					return r.a.createElement("div", {
						className: z.a.container
					}, r.a.createElement(K.a, {
						className: z.a.pinnedIcon,
						isFilled: e
					}), r.a.createElement("span", {
						className: z.a.metaText
					}, G._("pinned by moderators", null, {
						hk: "1qU8t4"
					})))
				},
				Z = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Y = s("./src/reddit/components/PostTitle/index.tsx"),
				J = s("./src/reddit/components/PostTopLine/index.tsx"),
				X = s("./src/reddit/components/SourceLink/index.tsx"),
				Q = s("./src/reddit/constants/experiments.ts"),
				$ = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ee = s("./src/reddit/contexts/PageLayer/index.tsx"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/isCrosspost.ts"),
				ne = s("./src/reddit/helpers/postEvent.ts"),
				re = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				oe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ie = Object(a.a)(O.O, e => e.some(ae.c)),
				de = Object(a.a)(ie, e => e),
				ce = (e, t) => Object(oe.c)(e, {
					experimentName: Q.gb,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && de(e, {
							listingKey: s
						})
					}
				});
			var le = s("./src/reddit/selectors/postFlair.ts"),
				me = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ue = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				pe = s.n(ue),
				be = s("./src/reddit/components/LargePost/index.m.less"),
				he = s.n(be);
			const fe = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(O.O)(e, {
						listingKey: s
					}) : void 0
				},
				ge = Object(o.b)(() => Object(a.c)({
					autoplayPref: P.b,
					activeModalId: x.a,
					hideNSFWPref: P.C,
					flairStyleTemplate: ee.S,
					isCurrentUserProfilePost: O.k,
					isLoggedIn: P.K,
					isActive: O.j,
					isPostChainDismissed: y.c,
					isPostChained: y.d,
					listingBelowVariant: re.b,
					imageGalleryCurrentItem: O.i,
					moderatorPermissions: w.h,
					modModeEnabled: ee.Q,
					posts: fe,
					postHeightVariant: ce,
					showEditFlair: le.a,
					showAwardsPlaque: v.a
				}), (e, {
					listingKey: t,
					listingName: s,
					postId: n
				}) => ({
					chainPost: () => {
						s && t && e(Object(m.d)({
							listingKey: t,
							listingName: s,
							postId: n
						}))
					},
					handleVote: t => {
						const s = t === g.a.upvoted ? Object(u.U)(n) : Object(u.r)(n);
						e(s)
					},
					onIgnoreReports: () => e(Object(u.S)(n)),
					onOpenReportsDropdown: t => e(Object(p.h)({
						tooltipId: t
					}))
				})),
				xe = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: n,
						className: o,
						currentUser: a,
						eventFactory: m,
						flairStyleTemplate: u,
						forceLoadMedia: p,
						hideNSFWPref: g,
						hostPostId: x,
						imageGalleryCurrentItem: v,
						inSubredditOrProfile: y = !1,
						isCommentsPage: w,
						isCurrentUserProfilePost: O,
						isFrontpage: P,
						isGalleryTileLayoutDefault: V,
						isLoggedIn: K,
						isOverlay: W,
						isPostChainDismissed: z,
						isPostChained: G,
						isTopicPage: $,
						listingBelowVariant: ee,
						listingKey: te,
						listingName: re,
						moderatorPermissions: oe,
						modModeEnabled: ae,
						onClickPost: ie,
						onIgnoreReports: de,
						onOpenReportsDropdown: ce,
						post: le,
						postHeightVariant: ue,
						scrollerItemRef: be,
						shouldShowGalleryTileOption: fe,
						showAwardsPlaque: ge,
						showEditFlair: xe,
						subredditOrProfile: ve,
						userIsOp: ye,
						isActionBarAnimationEnabled: we,
						postId: Oe,
						postIds: Pe
					} = e, Ce = !!e.redditStyle || !!e["data-redditstyle"], ke = Ce ? void 0 : u, Ee = Object(c.a)(oe), je = ae && Ee, Se = Object(i.a)(oe), _e = Object(d.a)(oe), Ie = Object(F.c)(le), Le = !!le.media && le.media.type === h.o.RTJSON, Ne = ye && Le, Te = s ? s - A.a : void 0, Re = !(P && K || $), Me = (e => e === Q.zc.OnlyTitles)(ue) && !Object(se.a)(le), Fe = (e => e === Q.zc.MediumHeight)(ue) && !Object(se.a)(le), Be = (e => {
						const {
							post: t,
							postIds: s,
							posts: n
						} = e;
						if (!Object(f.p)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							o = s && 1 === s.indexOf(t.id),
							a = n && n[1] && Object(f.p)(n[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: o,
							showPinnnedHeader: r
						}
					})(e), De = !!ee && !Object(Q.wd)(ee), Ae = (!y || De) && !le.isSponsored, Ue = Object(C.t)(le, v), {
						source: He
					} = Ue, Ve = r.a.createElement(r.a.Fragment, null, r.a.createElement(D.a, {
						className: Object(k.a)(he.a.container, o, pe.a.largeAndMediumPostStyles, pe.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[pe.a.mUseRedditTheme]: Ce,
							promotedvideolink: le.isSponsored && !(le.media && h.a.has(le.media.type)),
							[he.a.topCompactPost]: Be && Be.hasTopCompactPostStyles,
							[he.a.bottomCompactPost]: Be && Be.hasBottomCompactPostStyles
						}),
						isOverlay: W,
						style: Object(l.b)(e.flairStyleTemplate),
						post: le,
						onClick: ie,
						onPostContentClick: n,
						eventFactory: m
					}, r.a.createElement(Z.a, {
						model: le,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ke,
						redditStyle: Ce,
						subreddit: ve,
						isActionBarAnimationEnabled: we,
						postId: Oe
					}), r.a.createElement(B.a, {
						className: Object(k.a)(he.a.backgroundWrapper, {
							[he.a.isEvent]: Object(ne.a)(le)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ke,
						post: le,
						redditStyle: Ce
					}, r.a.createElement(N.a, {
						post: le
					}), Be && Be.showPinnnedHeader && r.a.createElement(q, null), r.a.createElement(J.a, {
						className: he.a.postTopLine,
						hideAwards: ge,
						hideNSFWPref: g,
						hostPostId: x,
						iconClassName: he.a.postTopLineIcon,
						inSubredditOrProfile: y,
						isCommentsPage: !!w,
						isCompactPinnedPost: !!Be,
						isCurrentUserProfilePost: O,
						isOverlay: !!W,
						isTopicPage: !!$,
						listingKey: te,
						post: le,
						shouldShowSubscribeButton: Re,
						showSubreddit: Ae,
						showSubredditIcon: !0,
						subredditOrProfile: ve
					}), r.a.createElement(Y.c, {
						className: he.a.postTitle,
						post: le,
						redditStyle: Ce,
						size: Y.b.Large,
						titleColor: ke && ke.postTitleColor,
						isOverlay: W
					}), le.source && !le.isSponsored && !(le.media && Object(h.G)(le.media)) && r.a.createElement(X.a, {
						className: he.a.sourceLink,
						post: le
					}), r.a.createElement("div", {
						className: he.a.postMediaWrapper
					}, !Be && r.a.createElement(U.a, {
						isGalleryTileLayoutDefault: V,
						isListing: !0,
						isMediumHeight: Fe,
						isNotCardView: !!W,
						isTitleOnly: Me,
						showCentered: !0,
						flairStyleTemplate: ke,
						post: le,
						availableWidth: Te,
						shouldLoad: p,
						scrollerItemRef: be,
						autoplayPref: t,
						shouldShowGalleryTileOption: fe
					})), le.isSponsored && He && He.url && r.a.createElement(E.a, {
						className: he.a.adLinkWrapper
					}, r.a.createElement(j.a, {
						post: le,
						adLinkContent: Ue
					})), ae && Ee && Ie && r.a.createElement(M.a, {
						onIgnoreReports: de,
						reportable: le
					}), r.a.createElement(R.d, null), ge && r.a.createElement(S.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: le,
						tooltipType: W ? me.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: he.a.flatListContainer
					}, r.a.createElement(I.a, {
						className: he.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ke,
						model: le,
						onVoteClick: e.handleVote
					}), r.a.createElement(T.c, {
						currentUser: a,
						hasModFlairPerms: Se,
						hasModFullPerms: _e,
						hasModPostPerms: Ee,
						hostPostId: x,
						isActionBarAnimationEnabled: we,
						isLargePost: !0,
						isOverlay: !!W,
						listingKey: te,
						modModeEnabled: ae,
						onIgnoreReports: de,
						onOpenReportsDropdown: ce,
						post: le,
						showEditPost: Ne,
						showEditFlair: xe,
						useFlatlistBreakpoints: Object(H.h)({
							editPost: !1,
							save: !je,
							hide: !1,
							report: !1
						})
					}))), P && r.a.createElement(_.a, {
						post: le,
						postIds: null != Pe ? Pe : [],
						subredditId: null == ve ? void 0 : ve.id
					})));
					return r.a.createElement(b.b, null, Ve, G && !z && r.a.createElement(L.a, {
						className: he.a.chain,
						listingKey: te,
						listingName: re,
						postId: le.id
					}))
				});
			xe.displayName = "LargePostMemoized";
			t.default = Object(te.b)(ge(Object($.b)(xe)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/icons/svgs/Best/index.tsx"),
				m = s("./src/reddit/icons/svgs/Controversial/index.tsx"),
				u = s("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = s("./src/reddit/icons/svgs/New/index.tsx"),
				b = s("./src/reddit/icons/svgs/Rising/index.tsx"),
				h = s("./src/reddit/icons/svgs/Top/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/index.m.less"),
				g = s.n(f);
			const x = {
					[a.P.BEST]: l.a,
					[a.P.HOT]: u.a,
					[a.P.NEW]: p.a,
					[a.P.CONTROVERSIAL]: m.a,
					[a.P.TOP]: h.a,
					[a.P.RISING]: b.a,
					[a.P.AWARDED]: c.a
				},
				v = {
					[a.P.BEST]: "best",
					[a.P.HOT]: "hot",
					[a.P.NEW]: "new",
					[a.P.CONTROVERSIAL]: "controversial",
					[a.P.TOP]: "top",
					[a.P.RISING]: "rising",
					[a.P.AWARDED]: "award"
				};

			function y({
				className: e,
				isFilled: t,
				sort: s
			}) {
				if (Object(i.a)() && void 0 !== v[s]) return r.a.createElement(d.a, {
					name: v[s],
					isFilled: t,
					className: Object(o.a)(e, g.a.iconStyles)
				});
				const n = x[s];
				return n ? r.a.createElement(n, {
					className: Object(o.a)(e, g.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", p.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: u
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, o.a.createElement(c.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: u.url
				}, o.a.createElement(d.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: u
				}), o.a.createElement("span", null, u.displayText)), ((e, t) => {
					if (t) return o.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.d)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, o.a.createElement(b, null))
				})(m.author, s), u && u.isQuarantined && o.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(i);

			function c(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(d.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(o.a)(d.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(o.a)(d.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: d.a.thumbnailLinkText,
					outboundLinkIconClassName: d.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
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
		"./src/reddit/components/OverviewChronoList/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_31Psg18W6Dm5EvcCqvaQm2",
				component: "_31Psg18W6Dm5EvcCqvaQm2",
				ComponentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb",
				componentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				isFirst: e,
				isLast: t,
				...s
			}) => r.a.createElement("div", d({
				className: Object(o.a)(i.a.border, {
					[i.a.isFirst]: e,
					[i.a.isLast]: t
				})
			}, s))
		},
		"./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				ExtraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				extraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				ExtraComments: "_35d97uauE52jtrUNWw8B4i",
				extraComments: "_35d97uauE52jtrUNWw8B4i",
				ExtraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS",
				extraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				y = s.n(v);
			const w = m.a.div("ProfileOwnerCommentWrapper", y.a),
				O = m.a.div("CommentContentWrapper", y.a),
				P = m.a.div("Wrapper", y.a),
				C = m.a.div("CommentSeparator", y.a),
				k = Object(i.b)(() => Object(d.c)({
					comment: (e, t) => Object(f.a)(e, t),
					isAwarded: (e, t) => {
						const s = Object(f.a)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(g.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: x.V
				}), e => ({
					openPost: t => e(Object(b.E)(t))
				}));
			class E extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isAwarded: o,
						isFirst: i,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? j : S;
					return a.a.createElement(u.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(P, {
						className: Object(l.a)({
							[y.a.isFirst]: i,
							[y.a.isLast]: d,
							[y.a.isAwarded]: o,
							[y.a.isNightmodeOn]: c
						})
					}, r()(s + 1, e => a.a.createElement(C, {
						key: e
					})), a.a.createElement(O, null, b(t, m, p))))
				}
			}
			const j = (e, t, s) => a.a.createElement(w, null, S(e, t, s, !0, !0)),
				S = (e, t, s, n = !1, r) => a.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: n,
					showModTools: s,
					isExpanded: !!r
				});
			t.a = k(E)
		},
		"./src/reddit/components/OverviewConversationsPost/index.m.less": function(e, t, s) {
			e.exports = {
				BackgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				backgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				ClassicPost: "tAHXx8uORoJlmgLFgqJEP",
				classicPost: "tAHXx8uORoJlmgLFgqJEP",
				OverviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				overviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				OverviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				overviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				OverviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				u = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/ads/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/opener/index.ts"),
				v = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				w = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				P = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				k = s("./src/reddit/constants/postLayout.ts"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/controls/OutboundLink/index.tsx"),
				S = s("./src/reddit/helpers/getClickInfo.ts"),
				_ = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				I = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				L = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				R = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				F = s("./src/reddit/components/PostList/index.m.less"),
				B = s.n(F);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = 500, U = new T.a(A), H = new T.a(A), V = new T.a(A), K = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, W = g.a.div("SeeMore", B.a), z = g.a.wrapped(I.a, "ArrowRight", B.a), G = (e, t, s, n, r, o, a, i) => {
				const d = `entered-${e}-${t}-${s?`last-${n}-${r}`:""}-${o}`;
				let c = U.get(d);
				return void 0 === c && (c = () => {
					s && a.onBottomViewed(n, r), a.trackOnPostEnteredViewport(e, t, i)
				}, U.set(d, c)), c
			}, q = (e, t, s, n, r) => {
				const o = `left-${e}-${t}`;
				let a = H.get(o);
				return void 0 === a && (a = o => {
					s.trackOnPostExitedViewport(e, t, o, n, r)
				}, H.set(o, a)), a
			}, Z = (e, t) => {
				const s = `click-${e}`;
				let n = V.get(s);
				return void 0 === n && (n = (e, s, n, r) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, P.a.Click);
						const {
							source: e
						} = Object(p.t)(s, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(j.a)(s.id, n, t).url), Object(x.d)(t, x.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(S.a)(e)
					})
				}, V.set(s, n)), n
			}, Y = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class J extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(A), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = o()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, n = e(), r = [];
						n.forEach(e => r.push(e.id));
						const o = r.map(e => t[e]).filter(Boolean),
							a = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(N.a)(o, a))
					}, h.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && R.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = R.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = R.c.end(this.timerId);
						setTimeout(() => Object(R.b)(h.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && R.c.cancel(this.timerId), e.postIds.length && (this.timerId = R.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (f.a.read(() => this.checkAndSendScreenview()), this.timerId && R.c.has(this.timerId)) {
						const e = R.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(R.b)(h.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const n = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					n && n !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(n)
				}
				componentWillUnmount() {
					this.timerId && R.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return R.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = R.c.end(e);
					setTimeout(() => {
						s(t(n, M.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						...s
					} = this.props, {
						postsById: n,
						...r
					} = e, o = Object.keys(s), a = Object.keys(r);
					if (a.length !== o.length) return !0;
					if (a.some(e => s[e] !== r[e])) return !0;
					if (t === n) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((r, o) => {
							const a = 0 === o;
							return s({
								isFirstPost: a,
								layout: e,
								post: t[r]
							}) !== s({
								isFirstPost: a,
								layout: e,
								post: n[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						hostPostId: o,
						isCommentPermalink: a,
						isCommentsPage: i,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						listingKey: u,
						listingName: p,
						pageLayer: b,
						pageReferrer: f,
						postClickEventFactory: g,
						redditStyle: x,
						shouldHideFlair: y,
						isActionBarAnimationEnabled: w,
						postIds: O
					} = this.props, P = 0 === t, C = `post-${n}-${e}-${t}-${s?"last-index":""}-${p}-${u}-${f}`;
					let E;
					if (void 0 === (E = this.scrollChildCache.get(C))) {
						const {
							inSubredditOrProfile: j,
							postsById: S
						} = this.props, I = S[e], N = I.crosspostRootId && S[I.crosspostRootId] ? S[I.crosspostRootId] : I;
						I.crosspostRootId && !S[I.crosspostRootId] && v.c.withScope(e => {
							e.setExtra("errorType", h.q.API), e.setExtra("description", `Post ${I.id} is crosspost of ${I.crosspostRootId}, but ` + `${I.crosspostRootId} details are missing in the state`), v.c.captureMessage("Crosspost parent details are missing")
						});
						const T = this.props.postComponentForLayout({
								isCrosspost: !!I.crosspostRootId,
								isFirstPost: P,
								layout: n,
								post: N
							}),
							R = `post-list-item-[layout: ${n}]-[postId: ${e}]`,
							M = G(e, n, s, u, p, f, this.props, t),
							F = q(e, n, this.props, t, b),
							B = Z(e, this.props),
							D = N.media && N.media.type === L.o.EMBED ? N.media.provider : null;
						E = {
							estHeight: Object(_.c)(I, n),
							id: e,
							isFocusable: !(!N.media || !(n === k.g.Large || n === k.g.Classic && Object(L.G)(N.media))) && (L.d.has(N.media.type) && (!D || !L.s.has(D)) && !N.isSpoiler && !N.isNSFW),
							trackOnEnteredViewport: M,
							trackOnExitedViewport: F,
							render: ({
								className: t,
								height: n,
								width: h,
								remeasure: f,
								setScrollerChildRef: v,
								shouldLoadInitially: C
							}) => m.a.createElement(T, {
								className: t,
								currentProfileName: r,
								key: R,
								availableWidth: h,
								eventFactory: g,
								first: P,
								forceLoadMedia: C,
								hostPostId: o,
								inSubredditOrProfile: j,
								isActionBarAnimationEnabled: w,
								isCommentPermalink: a,
								isCommentsPage: i,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								listingKey: u,
								listingName: p,
								pageLayer: b,
								last: s,
								onClickPost: B,
								onSizeChanged: f,
								postId: e,
								postIds: O,
								redditStyle: x,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: v,
								shouldHideFlair: y
							})
						}, this.scrollChildCache.set(C, E)
					}
					return E
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return m.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const a = o;
					return m.a.createElement("div", {
						className: B.a.placeholder
					}, m.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && m.a.createElement(w.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: B.a.placeholder
					}, m.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: K[n]
					}), !!e && m.a.createElement(w.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: o,
						layout: a,
						location: i,
						loadMore: d,
						postIds: c,
						onLoadMore: p
					} = this.props;
					let f = c.map((e, t, s) => {
						const n = t === c.length - 1;
						return this.scrollChildForPost(e, t, n, a)
					});
					r && (f = Y(f, r));
					const g = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						x = i ? Object(n.e)(i) : null,
						v = x || o;
					return m.a.createElement(l.Fragment, null, m.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: v ? B.a.truncatedPostList : Object(b.a)(B.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: g,
						viewportTopPadding: C.f
					}, f), x && m.a.createElement(W, {
						className: B.a.seeMoreButton
					}, m.a.createElement(E.a, {
						className: B.a.seeMorePostsText,
						to: Object(u.a)(x, {
							type: h.Pb.Posts
						})
					}, D._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(z, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				w = s.n(y);
			const O = s("./src/lib/lessComponent.tsx").a.div("Container", w.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: n,
					hideNSFWPref: y,
					hostPostId: P,
					iconClassName: C,
					inSubredditOrProfile: k,
					isCommentsPage: E,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: S,
					isOverlay: _,
					isTopicPage: I,
					listingKey: L,
					post: N,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: R,
					showSubreddit: M,
					showSubredditIcon: F,
					subredditOrProfile: B
				} = e, D = n || I;
				return r.a.createElement(O, {
					className: t
				}, M && B && r.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, r.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: B.url
				}, F && r.a.createElement(l.b, {
					className: Object(o.a)(w.a.subredditIcon, C),
					shouldHideNsfwIcon: y,
					subredditOrProfile: B
				}))), r.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, M && r.a.createElement(i.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(c.d, {
					className: w.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: _ ? c.c.Lightbox : void 0,
					post: N,
					showSub: M,
					subredditOrProfile: B
				}), r.a.createElement(d.a, {
					className: w.a.postBadges,
					displayText: B ? B.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: j,
					post: N,
					tooltipType: _ ? c.c.Lightbox : void 0
				}), !D && r.a.createElement(a.a, {
					isPostDetail: E,
					thing: N,
					tooltipType: _ ? c.c.Lightbox : void 0
				})), B && M && T && !S && r.a.createElement(u.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(f.f)(N.id, e ? "unsubscribe" : "subscribe", "post", L, P),
					identifier: {
						name: B.name,
						type: Object(v.g)(B) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: N.id,
					size: b.c.XS
				}), R && r.a.createElement(h.b, {
					className: w.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(x.D)(e.post),
					source: N.source
				}, r.a.createElement(g.a, {
					className: w.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less": function(e, t, s) {
			e.exports = {
				container: "_1j2O3iNM1HoiXK7B2dmp7b",
				description: "_1izt0pKGHoMq6qSvK4cAIn",
				gotIt: "_3uIlo4RbXf8gjMYw0yP_Jj"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3aof1UDvKACEvKW4EMZ299",
				pin: "_2KRDWSbw-bvKgY9GSzhGAx",
				title: "_3mWek_rCoNZ3KHXxqDuM88"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_274hVfCVJjK6-eGJKLQjgQ",
				miniCardPost: "ieyMhI0VqyYOPt1Za-FW5",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				education: "_1h3IXJoJFpHbyec1FkB4MV",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-helmet/es/Helmet.js"),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/pageTitle.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				l = s("./src/reddit/selectors/appBadges.ts");
			const m = Object(i.a)(l.c, e => ({
				badgeCount: e
			}));
			class u extends n.Component {
				constructor() {
					super(...arguments), this.title = Object(d.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(d.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(c.b)(this.props.badgeCount > 0), r.a.createElement(o.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(a.b)(m)(u)
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return x
			}));
			var n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isComment.ts"),
				u = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const x = (e, t) => (e, t, s) => Object(m.a)(e) ? 120 : 47,
				v = Object(l.t)(),
				y = {
					apiError: b.a,
					apiPending: b.b,
					currentUser: g.j,
					layout: l.O,
					loadMore: b.d,
					subredditsById: h.ab,
					viewportDataLoaded: f.a,
					commentsById: b.g,
					itemIds: b.f,
					itemIdToPostId: b.e,
					postsById: b.h,
					estimateItemHeight: x
				},
				w = Object(a.c)(y),
				O = Object(o.b)(w, (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					openPost: t => {
						e(i.E(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(u.a)(t) && e(i.H(t))
					},
					trackOnPostExitedViewport: (t, s, n) => {
						Object(u.a)(t) && e(i.I(t, n))
					},
					fireAdPixelsOfType: r.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(p.f)(e, t)
				}));
			t.a = e => Object(c.c)(v(O(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "b", (function() {
				return S
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/tracking.ts");

			function C() {
				return Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isFrontpage: p.y,
					isPredictionsPage: p.L,
					isProfilePostListing: p.I,
					isTopicPage: p.N,
					pageLayer: e => e
				})
			}
			const k = C(),
				E = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage && !Object(v.a)(e, t.listingKey) ? null : Object(y.g)(e, t),
					postsById: (e, t) => Object(w.S)(e, {
						...t
					}),
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: n,
						inSubredditOrProfile: r
					}) => {
						if (n) {
							const n = Object(O.F)(e, s);
							return Object(v.i)(e, {
								subredditId: n,
								listingKey: t
							})
						}
						return Object(w.F)(e, t, s, r)
					}),
					subredditsById: O.ab,
					viewportDataLoaded: P.a,
					pageReferrer: p.R,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: x.d
				},
				j = Object(r.c)(E),
				S = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(c.E(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.u(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(c.H(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r, o) => {
						e(c.I(t, n, r, o))
					},
					surveyTriggerScrollCounted: () => e(Object(m.g)())
				}),
				_ = Object(n.b)(j, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(h.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0, s.listingBelowMonthlyVariant),
					postComponentForLayout: e => Object(b.b)({
						...e
					})
				}));
			t.a = e => Object(u.c)(k(_(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.S,
				hideNSFWPref: b.C,
				isActive: p.j,
				moderatorPermissions: m.h,
				modModeEnabled: c.Q,
				showEditFlair: u.a
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
					const n = s === d.a.upvoted ? Object(o.U)(t) : Object(o.r)(t);
					e(n)
				},
				onIgnoreReports: () => e(Object(o.S)(t)),
				onOpenReportsDropdown: t => e(Object(i.h)({
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
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = {
					[r.P.BEST]: () => n.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.P.HOT]: () => n.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.P.NEW]: () => n.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.P.CONTROVERSIAL]: () => n.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.P.RISING]: () => n.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.P.TOP]: () => n.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.P.AWARDED]: () => n.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.Ub.HOUR]: () => n.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.Ub.DAY]: () => n.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.Ub.WEEK]: () => n.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.Ub.MONTH]: () => n.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.Ub.YEAR]: () => n.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.Ub.ALL]: () => n.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				d = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext({})
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/endpoints/page/profileOverviewPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const d = (e, t, s) => Object(a.a)(e, {
					data: s,
					endpoint: Object(r.a)(Object(i.a)(`${n.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)),
					traceRequestName: "get_profile_conversations",
					method: o.cb.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				c = (e, t, s) => Object(a.a)(e, {
					data: s,
					endpoint: Object(r.a)(Object(i.a)(`${n.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`)),
					method: o.cb.GET
				}).then(e => "pinned" in e.body ? e : "overviewIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.overviewIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(n.useContext)(r.b)
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), r.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Pin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/pages/ErrorPages/index.m.less"),
				d = s.n(i);
			const c = ({
					message: e
				}) => o.a.createElement("div", {
					className: d.a.container
				}, o.a.createElement("h3", {
					className: d.a.title
				}, e || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), o.a.createElement(a.k, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => o.a.createElement("div", {
					className: d.a.container
				}, o.a.createElement("h3", {
					className: d.a.title
				}, e || n.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), o.a.createElement(a.k, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				f = s("./src/reddit/actions/profileConversations.ts"),
				g = s("./node_modules/lodash/difference.js"),
				x = s.n(g),
				v = s("./node_modules/lodash/pick.js"),
				y = s.n(v),
				w = s("./src/lib/makeActionCreator/index.ts"),
				O = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				P = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				k = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const E = Object(w.a)(k.c),
				j = Object(w.a)(k.b),
				S = Object(w.a)(k.a);
			var _ = s("./src/reddit/components/ContentGate/index.tsx"),
				I = s("./src/reddit/components/EmptyProfile/index.ts"),
				L = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				N = s("./src/reddit/components/JumpToContent/index.tsx"),
				T = s("./src/lib/classNames/index.ts"),
				R = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				M = s("./src/reddit/components/ProfileItemList/index.tsx"),
				F = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				B = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				D = s.n(B),
				A = s("./src/lib/lessComponent.tsx");

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(F.a)(A.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, n = s.length > 0;
				return a.a.createElement(M.a, U({
					className: Object(T.a)(t, {
						[D.a.ComponentHasItems]: n
					})
				}, e))
			}, "Component", D.a));
			var V = e => a.a.createElement(H, U({}, e, {
					itemComponent: R.a
				})),
				K = s("./src/reddit/components/PostList/index.tsx"),
				W = s("./src/reddit/components/TrackingHelper/index.tsx"),
				z = s("./src/lib/isPinnedAdminPost/index.ts"),
				G = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				q = s("./node_modules/lodash/last.js"),
				Z = s.n(q);
			var Y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				J = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/components/ClassicPost/index.tsx"),
				Q = s("./src/reddit/components/LargePost/index.tsx"),
				$ = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				ee = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				te = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				se = s("./src/reddit/selectors/profile.ts"),
				ne = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				re = s.n(ne);
			const {
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ae = A.a.div("ExtraCommentsItemWrapper", re.a), ie = A.a.p("ExtraComments", re.a), de = A.a.wrapped(ie, "ExtraCommentsInteractive", re.a);
			var ce = Object(i.b)(() => Object(d.c)({
					extraCommentsItem: se.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: n
						} = e.pages.profileOverview.conversations;
						return !!n.api.pending[s]
					}
				}), (e, {
					profileName: t
				}) => ({
					extraCommentsClicked: s => e(Object(f.g)(t, s.postId, s.id))
				}))(({
					extraCommentsClicked: e,
					extraCommentsItem: t,
					extraCommentsPending: s
				}) => a.a.createElement(ae, null, s ? a.a.createElement(ie, null, oe._("Loading...", null, {
					hk: "47z90C"
				})) : a.a.createElement(te.a.Consumer, null, s => a.a.createElement(de, {
					onClick: s => {
						e(t), s.stopPropagation(), s.nativeEvent.stopImmediatePropagation()
					}
				}, oe._("Load more comments", null, {
					hk: "1jXJxb"
				}))))),
				le = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				me = s("./src/reddit/contexts/Post/index.tsx"),
				ue = s("./src/reddit/hooks/useTheme.ts"),
				pe = s("./src/reddit/constants/postLayout.ts"),
				be = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = s.n(be),
				fe = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ge = s.n(fe);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = A.a.div("BackgroundWrapper", ge.a),
				ye = A.a.wrapped(X.default, "ClassicPost", ge.a),
				we = A.a.wrapped($.a, "OverviewCommentPost", ge.a),
				Oe = Object(i.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const n = s ? s.toLowerCase() : "",
							r = Object(G.a)(t, n);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const n = s ? s.toLowerCase() : "",
							r = Object(G.a)(t, n);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(J.p)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(J.s)(e, t, s),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: s
							} = e, n = t.toLowerCase(), r = s.models[n];
							return r ? r.username : void 0
						})(e, t)
					},
					layout: u.O
				})),
				Pe = A.a.wrapped(Q.default, "OverviewLargePost", ge.a),
				Ce = Oe(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: n,
						eventFactory: r,
						forceLoadMedia: o,
						headComment: i,
						isInitiallyPinned: d,
						isPinned: c,
						isScrolling: l,
						last: m,
						layout: u,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						post: f,
						postId: g,
						profileName: x,
						scrollerItemRef: v
					} = e, y = {
						last: m,
						onClickPost: p,
						postId: g
					};
					if (!x) return null;
					const w = x === f.author,
						O = Object(z.a)(c, f.distinguishType);
					if (!w && !i && !O) return null;
					const P = i ? function(e) {
							const t = [],
								s = e.length;
							for (let n = 0; n < s; n++) {
								(0 === n || e[n - 1].depth !== e[n].depth - 1) && t.push([]), Z()(t).push(e[n])
							}
							return t
						}(function(e, t) {
							const s = [];
							let n = t,
								r = "comment";
							for (; n;) {
								const t = e[n];
								s.push({
									id: n,
									depth: t.depth,
									type: r
								}), t.next ? (n = t.next.id, r = t.next.type) : n = void 0
							}
							return s
						}(n, i)) : [],
						C = P.length - 1;
					return a.a.createElement("div", {
						className: Object(T.a)(he.a.largeAndMediumActiveStyles, he.a.largeAndMediumPostStyles, ge.a.OverviewConversationsPost, s),
						style: {
							...Object(Y.b)(),
							...Object(Y.d)(e)
						}
					}, a.a.createElement(ee.a, {
						isFirst: !0,
						isLast: C < 0,
						key: f.id
					}, !w && !!i && a.a.createElement(we, xe({}, y, {
						commentId: i,
						key: f.id,
						profileName: x
					})), (w || O) && (u === pe.g.Classic ? a.a.createElement(ye, {
						availableWidth: t,
						eventFactory: r,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: l,
						forceLoadMedia: o,
						last: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: g,
						scrollerItemRef: v
					}) : a.a.createElement(Pe, {
						availableWidth: t,
						eventFactory: r,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: o,
						last: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: g,
						scrollerItemRef: v
					}))), a.a.createElement(ve, {
						style: {
							background: Object(Y.e)(e)
						}
					}, !d && P.map((e, t) => a.a.createElement(ee.a, {
						isLast: t === C,
						key: `${t}-isLast[${t===C}]`
					}, e.map((t, s) => {
						const n = 0 === s,
							r = s === e.length - 1;
						return "comment" === t.type ? a.a.createElement(le.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: n,
							isLast: r,
							key: t.id,
							profileName: x,
							showModTools: !0
						}) : a.a.createElement(ce, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: x
						})
					})))))
				});
			var ke = Object(me.b)((function(e) {
					var t;
					const s = Object(ue.a)(),
						n = Object(u.Z)();
					return a.a.createElement(Ce, xe({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(u.h)(n),
						pageLayer: n
					}, e))
				})),
				Ee = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				je = s("./src/reddit/helpers/trackers/post.ts"),
				Se = s("./src/reddit/selectors/tracking.ts"),
				_e = s("./src/reddit/connectors/PostList/index.ts");
			const Ie = Object(d.c)({
					..._e.d,
					postIds: J.P,
					viewportDataLoaded: Se.a
				}),
				Le = Object(_e.c)(),
				Ne = Object(i.b)(Ie, _e.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(je.f)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? Ee.a : ke
				}));
			var Te = (e => Object(W.c)(Le(Ne(e))))(K.a),
				Re = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Me = s("./node_modules/lodash/debounce.js"),
				Fe = s.n(Me),
				Be = s("./src/reddit/actions/post.ts"),
				De = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ae = s("./src/lib/isUrl/index.ts"),
				Ue = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				He = s("./src/reddit/components/Media/index.tsx"),
				Ve = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Ke = s("./src/reddit/components/PostContainer/index.tsx"),
				We = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ze = s("./src/reddit/components/PostTitle/index.tsx"),
				Ge = s("./src/reddit/connectors/miniCardPost.ts"),
				qe = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Ze = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Ye = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Je = s("./src/reddit/models/Media/index.ts"),
				Xe = s("./node_modules/fbt/lib/FbtPublic.js"),
				Qe = s("./src/reddit/components/CommentsLink/index.tsx"),
				$e = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				et = s("./src/reddit/components/Flatlist/index.tsx"),
				tt = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				st = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				nt = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				rt = s("./src/reddit/components/ShareMenu/index.tsx"),
				ot = s("./src/reddit/icons/fonts/Share/index.tsx"),
				at = s("./src/reddit/models/User/index.ts"),
				it = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				dt = s.n(it);
			const ct = "-MiniCardModMenu",
				lt = "-MiniCardOverflowMenu",
				mt = "-MiniCardShareMenu",
				ut = A.a.wrapped($e.a, "HorizontalVotes", dt.a),
				pt = A.a.button("ShareButton", dt.a),
				bt = Object(u.t)({
					currentProfileName: u.h,
					isCommentPermalink: u.v,
					isCommentsPage: u.w,
					isProfilePostListing: u.I,
					pageLayer: e => e
				}),
				ht = Object(d.c)({
					layout: u.O,
					subreddit: u.q
				});
			var ft = bt(Object(i.b)(ht, {})(Object(W.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: r,
						hasModFlairPerms: o,
						hasModFullPerms: i,
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: u,
						isSticky: p,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: f,
						post: g,
						sendEvent: x,
						showEditFlair: v,
						showEditPost: y,
						subreddit: w
					} = e, O = e => x(Object(je.f)(g.id, e)), P = g.postId, C = Object(et.d)(ct, g.id, m, p), k = !!n && Object(at.e)(n) === g.author;
					return a.a.createElement("div", {
						className: Object(T.a)(dt.a.flatlistContainer, s)
					}, a.a.createElement(ut, {
						compact: !1,
						model: g,
						onVoteClick: r,
						scoreClassName: dt.a.score
					}), a.a.createElement(Qe.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: g.id,
						modModeEnabled: h,
						numComments: g.numComments,
						type: pe.g.Compact,
						onClick: f
					}), a.a.createElement(rt.a, {
						className: dt.a.shareMenu,
						dropdownId: Object(et.d)(mt, g.id, m, p),
						permalink: g.permalink,
						post: g,
						sendEventWithName: O,
						subreddit: w
					}, a.a.createElement(pt, null, a.a.createElement(ot.a, {
						className: dt.a.shareIcon
					}), a.a.createElement("span", {
						className: dt.a.shareText
					}, Xe.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && a.a.createElement(tt.a, {
						dropdownId: C,
						onClick: () => O("post_mod_action_menu")
					}, a.a.createElement(et.b, {
						className: dt.a.modActionsIcon
					}), a.a.createElement(st.a, {
						canEditFlair: o && !!v,
						hasModPostPerms: d,
						hasModFullPerms: i,
						isOverlay: !!m,
						isPostAuthor: k,
						modModeEnabled: h,
						post: g,
						tooltipId: C
					})), a.a.createElement(nt.g, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: g.permalink,
						postId: P,
						dropdownId: Object(et.d)(lt, g.id, m, p),
						isFixed: p,
						sendEvent: x,
						showEditPost: !!y,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(nt.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				gt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				xt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				vt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				yt = s.n(vt);
			var wt = Object(u.t)()(Object(me.b)(Object(Ge.a)(Object(De.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: r,
						crosspostSubredditOrProfile: o,
						currentUser: i,
						eventFactory: d,
						flairStyleTemplate: c,
						forceLoadMedia: l,
						hideNSFWPref: m,
						moderatorPermissions: u,
						modModeEnabled: p,
						onClickPost: b,
						post: h,
						scrollerItemRef: f,
						shouldPause: g,
						showMetaLine: x = !0,
						showEditFlair: v,
						subredditOrProfile: y,
						userIsOp: w
					} = e, {
						media: O
					} = r || h, P = O && O.type, C = Object(We.b)(h.id), k = P === Je.o.RTJSON, E = w && k, j = Object(Ye.a)(u), S = Object(qe.a)(u), _ = Object(Ze.a)(u), I = O && P !== Je.o.RTJSON && P !== Je.o.TEXT, L = !O && !!h.source && Object(Ae.a)(h.source.url), N = O && a.a.createElement(He.a, {
						autoplayPref: t,
						availableWidth: s,
						className: yt.a.media,
						imageBoxClassName: yt.a.mediaImageBox,
						imageBoxContentImageClassName: yt.a.mediaImageBoxContentImage,
						forceAspectRatio: Je.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: r || h,
						scrollerItemRef: f,
						shouldPause: g,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return a.a.createElement(Ke.a, {
						className: Object(T.a)(yt.a.postContainer, he.a.largeAndMediumActiveStyles, he.a.largeAndMediumPostStyles, Object(Y.a)(e), n),
						style: {
							...Object(Y.b)(e.flairStyleTemplate),
							...Object(Y.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, a.a.createElement(Ve.a, {
						className: yt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, I && N, a.a.createElement("div", {
						className: yt.a.innerContainer
					}, L && a.a.createElement(xt.a, {
						post: h,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), a.a.createElement(ze.c, {
						className: yt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: ze.b.Large,
						titleColor: c && c.postTitleColor
					}), x && y && a.a.createElement(gt.a, {
						className: yt.a.metaLine,
						crosspostSubredditOrProfile: o,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: y
					}), !I && a.a.createElement("div", {
						className: yt.a.mediaWrapper
					}, N), a.a.createElement("div", {
						className: yt.a.flexSpacer
					}), a.a.createElement(ft, {
						currentUser: i,
						handleVote: e.handleVote,
						hasModFlairPerms: S,
						hasModFullPerms: _,
						hasModPostPerms: j,
						modModeEnabled: p,
						post: h,
						showEditFlair: v,
						showEditPost: E
					}))), e.activeModalId === C && a.a.createElement(We.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: C,
						onFlairChanged: e.onFlairChanged
					}), a.a.createElement(Ue.d, null))
				})))),
				Ot = s("./src/reddit/helpers/getClickInfo.ts"),
				Pt = s("./src/reddit/helpers/localStorage/index.ts"),
				Ct = s("./src/reddit/selectors/user.ts"),
				kt = s("./src/reddit/icons/svgs/Pin/index.tsx"),
				Et = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				jt = s.n(Et);
			const {
				fbt: St
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _t = e => a.a.createElement("div", {
					className: Object(T.a)(jt.a.container, e.className)
				}, a.a.createElement(kt.a, {
					className: jt.a.pin
				}), a.a.createElement("div", {
					className: jt.a.title
				}, St._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				It = s("./src/reddit/controls/TextButton/index.tsx"),
				Lt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Nt = s.n(Lt);
			const {
				fbt: Tt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Rt = e => a.a.createElement(_t, {
					className: Object(T.a)(Nt.a.container, e.className)
				}, a.a.createElement("div", {
					className: Nt.a.description
				}, Tt._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), a.a.createElement(It.a, {
					className: Nt.a.gotIt,
					onClick: e.onGotItClick
				}, Tt._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Mt = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				Ft = s.n(Mt);
			const {
				fbt: Bt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Dt = 320, At = 300, Ut = Object(d.c)({
				arePinnedPostsLoaded: J.a,
				currentUser: Ct.j,
				pinnedPostIds: J.Q
			}), Ht = Object(i.b)(Ut, e => ({
				openPost: t => e(Object(Be.E)(t))
			}));
			class Vt extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Fe()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < At ? this.pauseMedia() : e.top > 0 && this.playMedia()
					}, 250, {
						leading: !0
					}), this.playMedia = () => {
						this.setState(e => e.pauseMedia ? {
							pauseMedia: !1
						} : null)
					}, this.pauseMedia = () => {
						this.setState(e => e.pauseMedia ? null : {
							pauseMedia: !0
						})
					}, this.onGotItClick = () => {
						Object(Pt.tb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Ot.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(wt, {
						postId: e,
						key: e,
						availableWidth: Dt,
						className: Object(T.a)(Ft.a.item, Ft.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(Pt.B)()
					}), document.addEventListener("scroll", this.handleScroll), this.handleScroll()
				}
				componentWillUnmount() {
					document.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					const {
						arePinnedPostsLoaded: e,
						pinnedPostIds: t,
						children: s
					} = this.props;
					if (!e) return null;
					const n = !!this.props.currentUser && this.props.profileName === Object(at.e)(this.props.currentUser),
						r = t.length > 0,
						o = !r && this.state.showEducation && n;
					if (!r && !o) return null;
					const i = n && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Ft.a.title
					}, Bt._("Pinned posts", null, {
						hk: "3prRc3"
					})), o ? a.a.createElement(Rt, {
						className: Object(T.a)(Ft.a.item, Ft.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: Ft.a.container
					}, t.map(this.renderPost), i && a.a.createElement(_t, {
						className: Ft.a.item
					})), s)
				}
			}
			var Kt = Object(u.t)()(Ht(Vt)),
				Wt = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				zt = s("./src/reddit/components/TitleTagManager/index.tsx"),
				Gt = s("./src/reddit/helpers/trackers/screenview.ts"),
				qt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Zt = s("./src/reddit/models/ContentGate.ts"),
				Yt = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Jt() {
				return (Jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Xt = (e, {
					location: t
				}) => r()([...Object(c.a)(t.search)]),
				Qt = Object(u.t)(),
				$t = Object(d.a)(u.B, Ct.cb, Xt, u.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(se.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(h.a)(e, Xt(0, t)), (e, {
					match: t
				}) => !Object(J.n)(e, {
					profileName: t.params.profileName
				}), Ct.K, (e, {
					match: t
				}) => Object(Ct.e)(e, p.Wb + t.params.profileName), (e, {
					match: t
				}) => {
					const {
						profileName: s
					} = t.params;
					return Object(se.q)(e, {
						profileName: s
					})
				}, (e, t, s, n, r, o, a, {
					sort: i,
					t: d
				}, c, l, u, b) => {
					const h = n === pe.g.Compact ? p.lb : p.mb,
						f = Object(m.a)(r, h, i, s),
						{
							sort: g
						} = s;
					return {
						contentGateInfo: u,
						over18Prefs: t,
						isLoggedIn: l,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: n,
						listingKey: f,
						pageTitle: b,
						profileName: r,
						shouldShowPinnedPostsSection: c && !g,
						sort: i,
						timeSort: d
					}
				}),
				es = Object(i.b)($t, (e, t) => ({
					onLoadMoreChronoItems: () => e((() => async (e, t, {
						apiContext: s
					}) => {
						const n = t(),
							{
								currentPage: r
							} = n.platform;
						if (!r || !r.routeMatch) return;
						const {
							queryParams: o,
							params: a
						} = r.routeMatch.match, {
							sort: i,
							t: d
						} = Object(h.a)(n, o), {
							profileName: c
						} = a, l = Object(m.a)(c, p.lb, i, o), u = Object(O.d)(n, {
							listingKey: l
						});
						if (!u) return;
						const b = Object(O.b)(n, {
								listingKey: l
							}),
							f = Object(O.c)(n, {
								listingKey: l
							}),
							g = f && f[u.token];
						if (b || g) return;
						e(E({
							key: l,
							fetchedToken: u.token
						}));
						const v = await Object(C.a)(s(), c, {
							after: u.token,
							dist: u.dist,
							sort: i,
							t: d,
							...y()(o, P.l)
						});
						if (v.ok) {
							const t = Object(O.f)(n, {
									listingKey: l
								}),
								s = {
									...v.body,
									overviewIds: x()(v.body.overviewIds, t)
								};
							e(j({
								fetchedToken: u.token,
								key: l,
								meta: n.meta,
								...s
							}))
						} else e(S({
							error: v.error,
							fetchedToken: u.token,
							key: l,
							account: v.body.data ? v.body.data.account : null
						}))
					})((t.match.params.profileName, t.match.params.sort))),
					onLoadMoreConversationsItems: () => e(f.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(b.profileOverviewRequested)({
						...t.match,
						queryParams: r()([...Object(c.a)(t.location.search)])
					}))
				}));
			class ts extends a.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => a.a.createElement(I.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						pageTitle: e
					} = this.props;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(zt.a, {
						title: e
					}), this.renderContent())
				}
				renderContent() {
					const {
						contentGateInfo: e,
						layout: t,
						over18Prefs: s,
						isOwnProfile: n,
						isProfileNSFW: r,
						listingKey: o,
						onLayoutChange: i,
						pageLayer: d,
						profileName: c,
						sort: m,
						shouldShowPinnedPostsSection: u,
						timeSort: b
					} = this.props;
					if (!d) return null;
					if (e && e.profileDeleted) return a.a.createElement(_.default, {
						contentGateType: Zt.a.ProfileDeleted,
						profileName: c
					});
					if (e && e.profileSuspended) return a.a.createElement(_.default, {
						contentGateType: Zt.a.ProfileSuspended,
						profileName: c
					});
					if (451 === d.status || e && e.profileBlockedForLegalReason) return a.a.createElement(_.default, {
						contentGateType: Zt.a.ProfileBlockedForLegalReason,
						profileName: c
					});
					if (403 === d.status) return a.a.createElement(Yt.a, null);
					if (404 === d.status) return a.a.createElement(_.default, {
						contentGateType: Zt.a.ProfileDoesNotExist,
						profileName: c
					});
					if (!c) return null;
					const h = c.toLowerCase(),
						f = `/user/${c}/`,
						g = {
							listingKey: o,
							listingName: h
						};
					if (!s && r && !n) return a.a.createElement(_.default, {
						subredditName: c,
						contentGateType: Zt.a.Nsfw
					});
					const x = {
							inSubredditOrProfile: !Object(l.a)(c),
							listingKey: o,
							listingName: h,
							listingViewed: (e, t) => Object(Gt.q)(o, m, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: i
						},
						v = {
							sort: m,
							baseUrl: f,
							sortOptions: p.rb,
							timeSort: b
						};
					let y;
					return y = t === pe.g.Compact ? a.a.createElement(V, Jt({}, x, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: i
					})) : a.a.createElement(a.a.Fragment, null, u && a.a.createElement(Kt, {
						profileName: c
					}), a.a.createElement(L.a, v), a.a.createElement(Te, Jt({}, x, {
						excludePinnedPosts: u,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), a.a.createElement(qt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(Re.a, {
							profileName: c
						})),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(N.a, null), y),
						sidebar: a.a.createElement(Wt.a, Jt({}, g, {
							profileName: c
						}))
					})
				}
			}
			t.default = Qt(es(ts))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.qb
				});
				return !(!t || Object(n.wd)(t))
			}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return i
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			}));
			var n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(o.T)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				c = e => e.focusedVerticals.components.dismissed,
				l = [],
				m = (e, t) => {
					const s = u(e, t);
					if (!s) return l;
					const n = Object(o.X)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : l
				},
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(o.T)(e, {
						subredditId: s
					}) : null
				},
				p = (e, t, s, n, o) => {
					const a = o.find(e => e <= t) || -1,
						i = o.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							a = o && Object(r.I)(e, {
								postId: n
							}) || null,
							i = o && Object(r.I)(e, {
								postId: o
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				b = [3],
				h = (e, t, {
					listingKey: s
				}) => {
					const n = t.slice().sort();
					let o = -1;
					const a = Object(r.B)(e, {
							listingKey: s
						}),
						i = [];
					return b.forEach(t => {
						let s = o + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !p(e, s, t, a, n);) s += 1;
							s < a.length && (i.push(s), o = s)
						}
					}), i
				},
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(a.J)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						r = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
				}
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Flair/index.ts"),
				o = s("./src/reddit/models/PostCreationForm/index.ts");
			r.f.Text, r.f.Spoiler, r.f.Text, r.f.Spoiler, o.h.RICH_TEXT, r.f.Text, r.f.Spoiler, o.h.RICH_TEXT, r.f.Text, r.f.Spoiler, o.h.RICH_TEXT;
			var a = s("./src/reddit/helpers/isComment.ts");
			const i = Object(n.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return d(e, {
						listingKey: t
					}).filter(e => {
						if (Object(a.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				d = Object(n.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				c = Object(n.a)((e, {
					listingKey: t
				}) => {
					return i(e, {
						listingKey: t
					}).reduce((t, s) => {
						const n = Object(a.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = n, t
					}, {})
				}),
				l = (Object(n.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return l(e, {
						listingKey: t
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(n.a)((e, {
					listingKey: t
				}) => {
					return i(e, {
						listingKey: t
					}).map(t => Object(a.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				m = Object(n.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models,
						n = l(e, {
							listingKey: t
						}),
						r = {};
					return n.forEach(e => r[e] = s[e]), r
				}),
				u = Object(n.a)((e, {
					listingKey: t
				}) => {
					const s = e.features.comments.models,
						n = i(e, {
							listingKey: t
						}),
						r = {};
					return n.forEach(e => !!Object(a.a)(e) && (r[e] = s[e])), r
				}),
				p = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.error[t],
				b = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.pending[t],
				h = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.loadMore[t],
				f = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.fetchedTokens[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.904399492334534172ec.js.map