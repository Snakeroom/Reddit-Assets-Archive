// https://www.redditstatic.com/desktop2x/ProfileOverview.13531f170c71071e79ad.js
// Retrieved at 11/3/2021, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFlatten.js"),
				n = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return o(n(e, t), 1)
			}
		},
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
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
						active: o,
						hover: a
					} = e;
				return n.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[d.a.disable]: s,
						[d.a.active]: o,
						[d.a.hover]: !!a
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
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
				return y
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return O
			}));
			var o = s("./node_modules/linkify-it/index.js"),
				n = s.n(o),
				r = s("./node_modules/tlds/index.js"),
				a = s.n(r),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./node_modules/lodash/values.js"),
				l = s.n(d);
			const c = e => l()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = n()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = n()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = u(n()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				f = u(n()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				y = n()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				g = n()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const w = (e, t) => {
					return (y.match(e) || []).filter(e => {
						const s = c(e.text);
						return !s || s && t
					})
				},
				x = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !c(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				O = e => {
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
			var o = s("./src/config.ts"),
				n = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const r = Object(n.e)(e),
					a = encodeURIComponent(`${t}${r}`);
				return `${o.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileOverviewConversationsPending", (function() {
				return we
			})), s.d(t, "profileOverviewConversationsLoaded", (function() {
				return xe
			})), s.d(t, "profileOverviewConversationsFailed", (function() {
				return Ce
			})), s.d(t, "profileOverviewChronoPending", (function() {
				return Oe
			})), s.d(t, "profileOverviewChronoLoaded", (function() {
				return ke
			})), s.d(t, "profileOverviewChronoFailed", (function() {
				return _e
			})), s.d(t, "profileOverviewConversationsRequested", (function() {
				return Pe
			})), s.d(t, "profileOverviewChronoRequested", (function() {
				return Se
			})), s.d(t, "profileOverviewRequested", (function() {
				return je
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/pick.js"),
				n = s.n(o),
				r = s("./src/reddit/actions/moderatingSubreddits.ts"),
				a = s("./src/reddit/actions/pages/profileShared.ts"),
				i = s("./src/reddit/actions/subreddit.ts"),
				d = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/selectors/listings.ts"),
				b = s("./src/reddit/selectors/profile.ts"),
				h = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				g = s("./src/reddit/actions/changeUsername.ts"),
				v = s("./src/reddit/actions/contentGate.ts"),
				w = s("./src/reddit/actions/externalAccount.ts"),
				x = s("./src/reddit/actions/gold/powerups.ts"),
				C = s("./src/reddit/actions/pinnedPost.ts"),
				O = s("./src/reddit/actions/platform.ts"),
				k = s("./src/reddit/actions/profile/index.ts"),
				_ = s("./src/reddit/actions/trophyCase.ts"),
				P = s("./src/reddit/constants/errors.ts"),
				S = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				j = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				E = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				I = s("./src/lib/initializeClient/installReducer.ts"),
				N = s("./node_modules/redux/es/redux.js"),
				T = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const L = {};
			var R = (e = L, t) => {
				switch (t.type) {
					case E.c:
					case E.b:
					case T.c:
					case T.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case E.a:
					case T.a: {
						const {
							key: s,
							error: o
						} = t.payload;
						return {
							...e,
							[s]: o
						}
					}
					default:
						return e
				}
			};
			const B = {};
			var F = (e = B, t) => {
					switch (t.type) {
						case E.c:
						case T.c: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case E.b:
						case E.a:
						case T.b:
						case T.a: {
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
				M = Object(N.c)({
					error: R,
					pending: F
				});
			const A = {};
			var D = (e = A, t) => {
				switch (t.type) {
					case E.b: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: {}
						}
					}
					case T.b: {
						const {
							key: s,
							fetchedToken: o
						} = t.payload, n = e[s];
						return {
							...e,
							[s]: {
								...n,
								[o]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const U = {};
			var z = (e = U, t) => {
					switch (t.type) {
						case E.b:
						case T.b: {
							const {
								key: s,
								overviewIds: o
							} = t.payload, n = e[s] || [];
							return {
								...e,
								[s]: [...n, ...o]
							}
						}
						default:
							return e
					}
				},
				H = s("./src/lib/omitKey/index.ts");
			const W = {};
			var V = (e = W, t) => {
					switch (t.type) {
						case E.b:
						case T.b: {
							const {
								key: s,
								dist: o,
								token: n
							} = t.payload;
							return n ? {
								...e,
								[s]: {
									dist: o,
									token: n
								}
							} : Object(H.a)(e, s)
						}
						default:
							return e
					}
				},
				K = Object(N.c)({
					api: M,
					fetchedTokens: D,
					ids: z,
					loadMore: V
				});
			const G = {};
			var q = (e = G, t) => {
				switch (t.type) {
					case E.f:
					case E.e: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case E.d: {
						const {
							key: s,
							error: o
						} = t.payload;
						return {
							...e,
							[s]: o || {}
						}
					}
					default:
						return e
				}
			};
			const X = {};
			var Y = (e = X, t) => {
					switch (t.type) {
						case E.f: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case E.e:
						case E.d: {
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
				Q = Object(N.c)({
					error: q,
					pending: Y
				}),
				J = s("./src/reddit/actions/profileConversations.ts");
			const Z = {};
			var $ = (e = Z, t) => {
				switch (t.type) {
					case J.c:
					case J.b: {
						const {
							extraCommentsId: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case J.a: {
						const {
							extraCommentsId: s,
							error: o
						} = t.payload;
						return {
							...e,
							[s]: o || {}
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case J.c: {
							const {
								extraCommentsId: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case J.b:
						case J.a: {
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
				se = Object(N.c)({
					error: $,
					pending: te
				});
			const oe = {};
			var ne = (e = oe, t) => {
					switch (t.type) {
						case E.e:
						case J.b:
						case J.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				re = Object(N.c)({
					api: se,
					models: ne
				}),
				ae = s("./node_modules/lodash/mapValues.js"),
				ie = s.n(ae),
				de = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				le = s("./src/reddit/constants/comments.ts");
			const ce = {};

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
				const o = {};
				for (const n in t) {
					const e = t[n],
						s = e.postId;
					o.hasOwnProperty(s) ? o[s] = {
						...o[s],
						[n]: e
					} : o[s] = {
						[n]: e
					}
				}
				for (const n in s) {
					const e = s[n],
						t = e.postId;
					o.hasOwnProperty(t) ? o[t] = {
						...o[t],
						[n]: e
					} : o[t] = {
						[t]: e
					}
				}
				return o
			};
			var pe = (e = ce, t) => {
				switch (t.type) {
					case E.e:
					case J.e: {
						const {
							comments: s,
							extraComments: o,
							postIds: n,
							profileName: r
						} = t.payload, a = ue(n, s, o), i = {};
						for (const e of n) {
							i[Object(de.a)(e, r)] = a.hasOwnProperty(e) ? me(a[e]) : {}
						}
						return {
							...e,
							...i
						}
					}
					case J.b: {
						const {
							comments: s,
							commentLists: o,
							extraComments: n,
							extraCommentsId: r,
							postIds: a,
							profileName: i
						} = t.payload;
						if (0 === a.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][r]);
							if (!t) return e;
							const s = {
									...e[t]
								} [r].prev,
								o = s && s.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[o]: {
										...e[t][o],
										next: null
									}
								}
							}
						}
						const d = a[0],
							l = me(ue(a, s, n)[d]),
							c = Object(de.a)(d, i),
							m = {
								...e[c]
							},
							u = m[r].prev,
							p = u && u.id || "",
							b = o[d].head,
							h = b && b.id || "",
							f = {
								id: h,
								type: le.a.Comment
							},
							y = {
								...m,
								[p]: {
									...m[p],
									next: f
								},
								...l,
								[h]: {
									...l[h],
									prev: u
								}
							};
						return {
							...e,
							[c]: y
						}
					}
					default:
						return e
				}
			};
			const be = {};
			var he = (e = be, t) => {
				switch (t.type) {
					case E.e:
					case J.e: {
						const {
							commentLists: s,
							postIds: o,
							profileName: n
						} = t.payload, r = {};
						for (const e of o) {
							r[Object(de.a)(e, n)] = s[e] && s[e].head ? s[e].head.id : null
						}
						return {
							...e,
							...r
						}
					}
					default:
						return e
				}
			};
			const fe = {};
			var ye = (e = fe, t) => {
					switch (t.type) {
						case E.e:
						case J.e: {
							const {
								postIds: s,
								profileName: o
							} = t.payload, n = {};
							for (const e of s) {
								n[Object(de.a)(e, o)] = e
							}
							return {
								...e,
								...n
							}
						}
						default:
							return e
					}
				},
				ge = Object(N.c)({
					api: Q,
					extraComments: re,
					keyToCommentThreadLinkSets: pe,
					keyToHeadCommentId: he,
					keyToPostId: ye
				}),
				ve = Object(N.c)({
					chrono: K,
					conversations: ge
				});
			Object(I.a)({
				pages: {
					profileOverview: ve
				}
			});
			const we = Object(y.a)(E.f),
				xe = Object(y.a)(E.e),
				Ce = Object(y.a)(E.d),
				Oe = Object(y.a)(E.c),
				ke = Object(y.a)(E.b),
				_e = Object(y.a)(E.a),
				Pe = (e, t, s, o) => async (o, n, r) => {
					const a = n(),
						i = !!a.listings.postOrder.ids[e],
						l = !!Object(p.c)(a, {
							listingKey: e
						});
					if (!!Object(p.d)(a, {
							listingKey: e
						}) || i && !l) return;
					o(we({
						key: e
					}));
					const c = await Object(j.a)("profile", () => Object(d.b)(r.apiContext(), t, s)),
						m = c.body,
						{
							pinned: u,
							postIds: h
						} = m;
					if (c.ok) {
						o(xe({
							key: e,
							meta: a.meta,
							profileName: t,
							...m,
							postIds: h
						}));
						const s = Object(b.m)(n(), t);
						o(Object(C.h)({
							profileId: s,
							pinned: u
						}))
					} else o(Ce({
						account: c.body.data ? c.body.data.account : null,
						error: c.body.reason ? {
							type: c.body.reason
						} : c.error,
						key: e
					})), c.body.reason === P.a.DeletedProfile && o(Object(v.p)({
						profileName: t
					})), o(Object(O.n)(c.status))
				}, Se = (e, t, s, o) => async (o, n, r) => {
					const a = n(),
						i = !!Object(h.f)(a, {
							listingKey: e
						}).length,
						l = !!Object(h.a)(a, {
							listingKey: e
						});
					if (!!Object(h.b)(a, {
							listingKey: e
						}) || i && !l) return;
					o(Oe({
						key: e
					}));
					const c = await Object(j.a)("profile", () => Object(d.a)(r.apiContext(), t, s)),
						m = c.body,
						{
							pinned: u
						} = m;
					if (c.ok) {
						o(ke({
							key: e,
							meta: a.meta,
							...m
						}));
						const s = Object(b.m)(n(), t);
						o(Object(C.h)({
							profileId: s,
							pinned: u
						}))
					} else o(_e({
						account: c.body.data ? c.body.data.account : null,
						error: c.body.reason ? {
							type: c.body.reason
						} : c.error,
						key: e
					})), c.body.reason === P.a.DeletedProfile && o(Object(v.p)({
						profileName: t
					})), o(Object(O.n)(c.status))
				}, je = e => async (t, s, o) => {
					const {
						queryParams: d,
						params: p
					} = e, {
						sort: h,
						t: y
					} = Object(a.a)(s(), d), {
						profileName: v
					} = p;
					let C = !1;
					const P = c.e[Object(u.Q)(s(), {})],
						j = v.toLowerCase(),
						E = {
							...n()(e.queryParams, m.l),
							sort: h,
							layout: P,
							t: y
						},
						I = [t(k.d(j))];
					if (P === c.e[c.g.Compact]) {
						const o = Object(S.a)(j, l.sb, h, e.queryParams);
						s().pages.profileOverview.chrono.ids[o] ? C = !0 : I.push(t(Se(o, j, E, !0)))
					} else {
						const o = Object(S.a)(j, l.tb, h, e.queryParams);
						s().listings.postOrder.ids[o] && !s().listings.postOrder.api.error[o] ? C = !0 : I.push(t(Pe(o, j, E, !0)))
					}
					if (I.push(t(Object(r.b)())), await Promise.all(I), C) return;
					const N = s();
					if (!N.platform.currentPage) return;
					if (200 !== N.platform.currentPage.status) return;
					const T = Object(b.m)(s(), j),
						L = Object(f.nb)(N, {
							userName: v
						}).id;
					t(O.m({
						title: Ee(s(), v)
					})), Object(f.M)(N) && Object(f.Q)(N, v) && t(Object(g.f)());
					const R = [t(Object(i.q)()), t(_.b(j, T)), t(k.b(j)), t(w.o(v)), t(k.g(v)), t(x.k(v, L))];
					await Promise.all(R)
				}, Ee = (e, t) => Object(b.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: o
				} = e, d = Object(r.e)(e => e.subreddits.questions), l = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const c = s.indexOf(t.id);
				if (c < 0) return null;
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let n = 0, r = -999; n <= c; n += 1) {
					const e = s[n],
						t = l[e].belongsTo.id;
					p(e) && n - r >= i && !m.has(t) && (r = n, m.add(t), n === c && (u = !0))
				}
				return u ? n.a.createElement(a.a, {
					subredditId: o,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = d[l[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(o.a)({
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
			t.a = n
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./src/reddit/contexts/NavbarExp.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/loginHref/index.ts"),
				u = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = s("./src/reddit/components/Footer/index.m.less"),
				y = s.n(f);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = c.a.div("FooterContainer", y.a), w = c.a.div("UserAgreement", y.a), x = c.a.a("UserAgreementLink", y.a), C = c.a.a("PrivacyLink", y.a);
			var O = () => r.a.createElement(v, null, r.a.createElement(w, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", r.a.createElement(x, {
					href: `${o.a.redditUrl}/help/useragreement`
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", r.a.createElement(C, {
					href: `${o.a.redditUrl}/help/privacypolicy`
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				k = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				_ = s("./src/reddit/components/RichTextJson/index.tsx"),
				P = s("./node_modules/lodash/flatMap.js"),
				S = s.n(P),
				j = s("./src/lib/linkMatchers/index.ts"),
				E = s("./src/lib/linkMatchers/customLinks.ts"),
				I = s("./src/reddit/controls/OutboundLink/index.tsx");
			const N = /\[(.+?)\]\((.+?)\)/g,
				T = e => {
					const t = e.split(N);
					if (1 === t.length) return [e];
					const s = [];
					for (let o = 0; o < t.length; o += 3) {
						const [e, n, r] = t.slice(o, o + 3);
						s.push(e), s.push([r, n])
					}
					return s
				};
			var L = r.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = S()(t, T)), e.parseRegularLinks && (t = S()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = j.f.add(E.g.subreddit.prefix, E.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let o = null;
						for (const n of t) s.push(e.slice(o ? o.lastIndex : 0, n.index)), o = n, s.push([n.url, n.text]);
						return o && s.push(e.slice(o.lastIndex)), s
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [o, n] = t;
							return r.a.createElement(I.b, {
								className: e.linkClassName,
								href: o,
								key: s
							}, n)
						}
						return r.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				B = s("./src/reddit/controls/Button/index.tsx"),
				F = s("./src/chat/controls/Svg/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var A = e => r.a.createElement(F.a, M({}, e, {
					viewBox: "-1 -1 21 21"
				}), r.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				D = s("./src/reddit/models/ContentGate.ts"),
				U = s("./src/lib/constants/index.ts"),
				z = s("./src/reddit/selectors/platform.ts"),
				H = s("./src/reddit/selectors/user.ts");
			var W = s("./src/reddit/selectors/meta.ts"),
				V = s("./src/reddit/components/ContentGate/index.m.less"),
				K = s.n(V);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = c.a.wrapped(A, "PrivateKey", K.a), X = c.a.div("ButtonsContainer", K.a), Y = c.a.div("Container", K.a), Q = c.a.div("ContainerExp", K.a), J = c.a.div("Description", K.a), Z = c.a.div("PrivateSubredditDetails", K.a), $ = c.a.div("PrivateSubredditDescription", K.a), ee = c.a.h3("PrivateSubredditName", K.a), te = c.a.a("Link", K.a), se = c.a.wrapped(B.m, "LinkRouterButton", K.a), oe = c.a.wrapped(B.l, "LinkButton", K.a), ne = c.a.wrapped(B.p, "SecondaryLinkRouterButton", K.a), re = c.a.wrapped(B.o, "SecondaryLinkButton", K.a), ae = c.a.wrapped(se, "GoHomeLinkButton", K.a), ie = c.a.wrapped(h.a, "CreateCommunityButton", K.a), de = c.a.img("Image", K.a), le = c.a.img("ImagePlaceholder", K.a), ce = c.a.wrapped(se, "LeftLinkRouterButton", K.a), me = c.a.wrapped(oe, "LeftLinkButton", K.a), ue = c.a.wrapped(re, "SecondaryLeftLinkButton", K.a), pe = c.a.wrapped(ne, "SecondaryLeftLinkRouterButton", K.a), be = c.a.h3("Title", K.a), he = c.a.div("PageBody", K.a), fe = c.a.div("QuarantineMessageWrapper", K.a), ye = Object(l.c)({
				isLoggedIn: H.J,
				origin: W.j,
				user: H.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(H.K)(e)) return !1;
					const t = Object(z.d)(e);
					if (!t) return !1;
					const s = Object(H.f)(e, t);
					if (!s) return !1;
					if (!s.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: o
					} = s;
					if (!o) return !1;
					const n = 30 * U.A;
					return o > Date.now() - n
				})(e)
			}), ge = Object(R.u)(), ve = Object(a.b)(ye, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(p.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), we = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: n,
					isLoggedIn: a,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: d,
					location: l,
					origin: c,
					pageLayer: p,
					quarantineRequiresEmail: h,
					quarantineMessage: f,
					quarantineMessageHtml: y,
					quarantineMessageRTJson: g,
					setNSFWPreference: v,
					subredditDescription: w,
					subredditName: x,
					user: C
				} = e, O = async () => {
					a ? await v() : await Object(u.k)(), window.location.reload()
				};
				switch (s) {
					case D.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(de, {
							src: `${o.a.assetPath}/img/gold/premium-crest.png`
						}), r.a.createElement(be, null, G._("r/{community name} is a Reddit Premium community", [G._param("community name", x)], {
							hk: "2lyDwB"
						})), r.a.createElement(J, null, G._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(X, null, C ? r.a.createElement(ue, {
							href: `${o.a.redditUrl}/premium`,
							redditStyle: !0
						}, G._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(me, {
							href: Object(m.a)(l, c),
							redditStyle: !0
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), C ? r.a.createElement(se, {
							to: "/",
							redditStyle: !0
						}, G._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement(re, {
							href: Object(m.a)(l, c),
							redditStyle: !0
						}, G._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case D.a.Nsfw:
					case D.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(de, {
							src: `${o.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), r.a.createElement(be, null, s === D.a.Nsfw ? G._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : G._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), r.a.createElement(J, null, G._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), r.a.createElement(X, null, r.a.createElement(ce, {
							to: "/",
							redditStyle: !0
						}, G._("No", null, {
							hk: "3fMglW"
						})), r.a.createElement(re, {
							onClick: O,
							redditStyle: !0
						}, G._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case D.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement(q, null), r.a.createElement(be, null, "r/", x, " ", G._("is a private community", null, {
							hk: "7zZmq"
						})), w && w.length && r.a.createElement(Z, null, r.a.createElement(ee, null, "r/", x), r.a.createElement($, null, r.a.createElement("div", null, w))), r.a.createElement(J, null, G._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", x, " ", G._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), r.a.createElement("br", null), G._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), r.a.createElement(X, null, C ? r.a.createElement(r.a.Fragment, null, !i && r.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: K.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), r.a.createElement(ue, {
							href: `${o.a.redditUrl}/message/compose?to=/r/${x}`,
							redditStyle: !0
						}, G._("Message Mods", null, {
							hk: "vVe1i"
						}))) : r.a.createElement(ue, {
							href: Object(m.a)(l, c),
							redditStyle: !0
						}, G._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(se, {
							to: "/",
							redditStyle: !0
						}, G._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case D.a.QuarantinedSubreddit:
						return r.a.createElement("div", null, r.a.createElement(de, {
							src: `${o.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), r.a.createElement(be, null, G._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), r.a.createElement(J, null, G._("This community is {=quarantined}", [G._param("=quarantined", r.a.createElement(te, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, G._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), r.a.createElement(fe, null, g ? r.a.createElement(_.a, {
							content: g,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : y ? r.a.createElement(k.a, {
							html: y
						}) : f || G._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), G._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), r.a.createElement(X, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? r.a.createElement(X, null, r.a.createElement(pe, {
								to: "/",
								redditStyle: !0
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(oe, {
								href: `${o.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, G._("Verify Email", null, {
								hk: "1893cq"
							}))) : r.a.createElement(X, null, r.a.createElement(ce, {
								to: "/",
								redditStyle: !0
							}, G._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(re, {
								onClick: t,
								redditStyle: !0
							}, G._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(C, n, h)));
					case D.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(de, {
							src: `${o.a.assetPath}/img/content-gate-icons/banned.png`
						}), r.a.createElement(be, null, G._("r/{community name} has been banned from Reddit", [G._param("community name", x)], {
							hk: "2at9Se"
						})), (e => r.a.createElement(J, null, e ? r.a.createElement(L, {
							linkClassName: K.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : G._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), r.a.createElement(X, null, r.a.createElement(se, {
							to: "/",
							redditStyle: !0
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(de, {
							src: `${o.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(be, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), r.a.createElement(X, null, r.a.createElement(se, {
							to: "/",
							redditStyle: !0
						}, G._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case D.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(le, null), r.a.createElement(be, null, G._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(J, null, G._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(X, null, C && r.a.createElement(ie, {
							eventSource: "content_gate"
						}), r.a.createElement(ae, {
							to: "/",
							redditStyle: !0
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.ProfileDoesNotExist:
					case D.a.ProfileDeleted:
					case D.a.ProfileSuspended:
					case D.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(de, {
							src: `${o.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(be, null, (e => {
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
									return r.a.createElement(r.a.Fragment, null, G._("This account has been {=suspended} .", [G._param("=suspended", r.a.createElement(te, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, G._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case D.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(be, null, G._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(J, null, G._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(X, null, r.a.createElement(ae, {
							to: "/",
							redditStyle: !0
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(de, {
							src: `${o.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(be, null, G._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(X, null, r.a.createElement(ae, {
							to: "/",
							redditStyle: !0
						}, G._("Go Home", null, {
							hk: "49p4or"
						}))));
					case D.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(de, {
							src: `${o.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(be, null, G._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(X, null, r.a.createElement(se, {
							to: "/",
							redditStyle: !0
						}, G._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = ge(ve(Object(i.i)(e => {
				const t = Object(n.useContext)(d.a) ? Q : Y;
				return r.a.createElement(t, null, r.a.createElement("div", null, r.a.createElement(he, null, we(e))), r.a.createElement(O, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(o.a)({
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
			t.a = n
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				y = s.n(f),
				g = s("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				w = g.a.wrapped(c.c, "StyledTooltip", y.a),
				x = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.ib)(e),
					userIsSuspended: h.R
				});
			t.a = Object(a.b)(x, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: s => {
					s(Object(b.c)(t)), e(Object(d.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(l.f)({
					tooltipId: v
				})),
				onHideTooltip: () => e(Object(l.i)())
			}))(Object(m.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: s,
				onHideTooltip: n,
				openCommunityCreation: a,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: l,
				onClick: c
			}) => {
				return r.a.createElement(p.s, {
					className: e,
					disabled: l || d,
					onClick: e => {
						c && c(e), a(i)
					},
					onMouseEnter: s,
					onMouseLeave: n,
					priority: p.b.Secondary,
					id: v,
					isFullWidth: !0
				}, o.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? r.a.createElement(w, {
					caretOnTop: !0,
					tooltipId: v,
					text: o.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? r.a.createElement(w, {
					caretOnTop: !0,
					tooltipId: v,
					text: o.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				w = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = s.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = "view--layout--FUE",
				P = "LayoutSwitch--picker",
				S = Object(d.a)(y.a),
				j = {
					[b.d.Card]: function(e) {
						return r.a.createElement(v.a, k({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return r.a.createElement(v.a, k({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return r.a.createElement(v.a, k({}, e, {
							name: "view_compact"
						}))
					}
				},
				E = {
					[b.d.Card]: () => o.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => o.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => o.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => o.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				I = Object(h.u)(),
				N = Object(i.c)({
					dropdownIsOpen: Object(x.b)(P),
					postLayout: h.Q,
					redditStyle: h.C
				}),
				T = Object(a.b)(N, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.x)(t, s)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: P
					}))
				}));
			class L extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: o,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), o(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(w.screen)(t),
							subreddit: Object(w.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: o,
							postLayout: n
						} = this.props, a = s || b.e[n], i = e === a, d = j[e], c = E[e];
						return r.a.createElement(g.b, k({}, t, {
							className: Object(l.a)(O.a.LayoutItem, {
								[O.a.selected]: i,
								[O.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: c(),
							iconWrapperClassName: O.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: O.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: O.a.LayoutIcon,
							onClick: i ? void 0 : o,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(S, k({}, e, {
							className: O.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: O.a.DropdownRow,
							rowIconClassName: O.a.DropdownRowIcon,
							rowSelectedClassName: O.a.DropdownRowSelected,
							tooltipId: P
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: o
					} = this.props, n = t || b.e[o];
					return r.a.createElement("div", {
						className: Object(l.a)(O.a.Container, e),
						id: _
					}, r.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: s
					}, this.renderItem(n, {
						id: P,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), r.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = I(T(Object(p.c)(Object(c.a)(L))))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/actions/preferences.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/addQueryParams/index.ts")),
				b = s("./src/lib/constants/index.ts"),
				h = s("./node_modules/react-router-redux/es/index.js"),
				f = s("./node_modules/reselect/es/index.js"),
				y = s("./src/reddit/actions/tooltip.ts"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/higherOrderComponents/asTooltip.tsx"),
				w = s("./src/reddit/constants/history.ts"),
				x = s("./src/reddit/constants/listingSorts.ts"),
				C = s("./src/reddit/contexts/Tooltip.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/helpers/trackers/navigation.ts"),
				S = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				E = s("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = s("./src/reddit/components/ListingSort/index.m.less"),
				R = s.n(L),
				B = s("./src/lib/lessComponent.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const M = "ListingSort--SortPicker",
				A = Object(v.a)(B.a.wrapped(O.a, "Dropdown", R.a)),
				D = B.a.wrapped(T.a, "ListingSortIcon", R.a),
				U = (B.a.wrapped(S.b, "DropdownTriangle", R.a), B.a.div("Title", R.a)),
				z = B.a.wrapped(e => n.a.createElement(k.b, F({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", R.a),
				H = ({
					disabled: e,
					...t
				}) => n.a.createElement("div", F({}, t, {
					className: Object(a.a)(R.a.SortWrapper, t.className, {
						[R.a.isDisabled]: e
					})
				})),
				W = B.a.div("DropdownRowDisabled", R.a),
				V = Object(c.u)({
					isFrontpage: c.z,
					isProfilePage: c.I,
					pageLayer: e => e
				}),
				K = Object(f.c)({
					isAwardListingExperimentEnabled: E.a,
					isBestSortPopularEnabled: j.a,
					user: N.k,
					dropdownIsOpen: (e, t) => Object(I.b)(t.dropdownId || M)(e),
					isPopularPage: c.E
				}),
				G = Object(r.b)(K, (e, {
					dropdownId: t,
					pageLayer: s
				}) => ({
					onOpenDropdown: () => e(Object(y.h)({
						tooltipId: t || M
					}))
				}));
			var q = B.a.wrapped(V(G(Object(l.c)(e => n.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && n.a.createElement(U, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), n.a.createElement(H, {
					disabled: e.disabled
				}, e.children || n.a.createElement(z, {
					className: e.buttonClassName,
					displayText: Object(x.a)(e.sort),
					id: e.dropdownId || M,
					showDropdownTriangle: !0
				}, n.a.createElement(D, {
					sort: e.sort
				}))), n.a.createElement(C.a.Consumer, null, t => n.a.createElement(A, F({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || M
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? n.a.createElement(W, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, s, o, n) => {
					const r = [b.V.HOT, b.V.NEW, b.V.TOP, b.V.RISING];
					return (e && (s || o) || t && o) && r.unshift(b.V.BEST), t && n && r.splice(3, 0, b.V.AWARDED), r
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => n.a.createElement(k.b, {
					className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(x.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(P.a)(t))
					},
					href: {
						pathname: e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(_.a)(e.baseUrl, `${t}/`),
						state: {
							[w.b.FeedLoadReason]: w.a.SortChange
						}
					},
					isSelected: e.sort === t,
					key: t
				}, n.a.createElement(D, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", R.a),
				X = s("./src/reddit/constants/parameters.ts");
			const Y = e => {
					const t = Q[e];
					return t && t() || ""
				},
				Q = {
					[b.bc.AllStates]: () => g.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.bc.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.bc.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.bc.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.bc.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.bc.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.bc.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.bc.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.bc.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.bc.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.bc.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.bc.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.bc.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.bc.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.bc.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.bc.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.bc.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.bc.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.bc.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.bc.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.bc.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.bc.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.bc.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.bc.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.bc.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.bc.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.bc.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.bc.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.bc.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.bc.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.bc.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.bc.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.bc.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.bc.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.bc.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.bc.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.bc.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.bc.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.bc.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.bc.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.bc.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.bc.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.bc.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.bc.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.bc.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.bc.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.bc.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.bc.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.bc.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.bc.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.bc.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.bc.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = s("./src/reddit/components/StateSort/index.m.less"),
				Z = s.n(J);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = B.a.wrapped(O.a, "_Dropdown", Z.a),
				te = Object(v.a)(ee),
				se = e => {
					return e.indexOf("_") > 0 && ne(e) === b.z.UnitedStates
				},
				oe = e => {
					if (se(e)) {
						return e.split("_")[1]
					}
					return b.bc.AllStates
				},
				ne = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				re = e => {
					const t = ne(e),
						s = oe(e);
					return se(e) ? `${t}_${s}` : t
				},
				ae = Object(c.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(I.b)("StateSort--StateSortPicker")
				}),
				de = Object(r.b)(ie, e => ({
					onOpenDropdown: () => e(Object(y.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(h.b)(t)), e(Object(d.v)(b.z.UnitedStates + "_" + s))
					}
				}));
			var le = B.a.wrapped(ae(de(e => {
				const t = `${e.baseUrl}?${X.h}=${b.z.UnitedStates}`;
				return n.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, n.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, n.a.createElement(z, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Y(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), n.a.createElement(C.a.Consumer, null, s => n.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(b.bc).map(s => {
					const o = b.bc[s];
					return n.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.bc.AllStates ? t : `${t}_${e}`)(o), re(o))
					}, n.a.createElement(k.b, {
						className: Object(a.a)(e.rowClassName, e.sort === o ? e.rowSelectedClassName : void 0),
						displayText: Y(o),
						isSelected: e.sort === o
					}))
				}))))
			})), "Component", Z.a);
			const ce = {
				[b.z.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.z.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.z.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.z.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.z.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.z.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.z.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.z.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.z.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.z.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.z.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.z.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.z.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.z.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.z.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.z.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.z.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.z.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.z.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.z.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.z.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.z.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.z.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.z.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.z.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.z.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.z.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.z.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.z.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.z.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.z.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.z.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.z.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.z.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.z.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.z.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var me = s("./src/reddit/components/CountrySort/index.m.less"),
				ue = s.n(me);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(c.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(I.b)(be)
				});
			var ye = he(Object(r.b)(fe, e => ({
					onCloseDropdown: t => e(Object(y.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(y.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(h.b)(t, {
							[w.b.FeedLoadReason]: w.a.GeoModeChange
						})), e(Object(d.v)(s))
					}
				}))(e => {
					const t = ne(e.sort),
						s = oe(e.sort),
						o = `${e.baseUrl}?${X.h}=`;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(a.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, n.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, n.a.createElement(z, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[b.z.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), n.a.createElement(C.a.Consumer, null, s => n.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(b.z).map(s => {
						const r = b.z[s];
						return n.a.createElement("div", {
							key: r,
							onClick: () => e.onClickLink(`${o}${re(r)}`, r)
						}, n.a.createElement(k.b, {
							className: Object(a.a)(e.rowClassName, t === r ? e.rowSelectedClassName : void 0),
							displayText: ce[r](),
							isSelected: t === r
						}))
					})))), t === b.z.UnitedStates && n.a.createElement(le, {
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
				ve = s.n(ge),
				we = s("./src/reddit/components/TimeSort/index.m.less"),
				xe = s.n(we);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(v.a)(O.a),
				ke = (e, t) => {
					let s = e.url;
					return e.urlParams.sort || Object(c.I)(e) || (s = ve.a.join(s, t)), s
				},
				_e = B.a.div("ListingSortContainer", xe.a),
				Pe = Object(c.u)(),
				Se = Object(f.c)({
					dropdownIsOpen: Object(I.b)("TimeSort--SortPicker")
				});
			var je = Pe(Object(r.b)(Se, e => ({
					onOpenDropdown: () => e(Object(y.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(l.c)(e => n.a.createElement(_e, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, n.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, n.a.createElement(z, {
					className: e.buttonClassName,
					displayText: Object(x.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), n.a.createElement(C.a.Consumer, null, t => n.a.createElement(Oe, Ce({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.ec.HOUR, b.ec.DAY, b.ec.WEEK, b.ec.MONTH, b.ec.YEAR, b.ec.ALL].map(t => n.a.createElement(k.b, {
					className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					key: `time_sort_${t}`,
					displayText: Object(x.b)(t),
					href: {
						pathname: new URL(ke(e.pageLayer, e.listingSort), "https://fallback.hostname").pathname,
						state: {
							[w.b.FeedLoadReason]: w.a.SortChange
						},
						search: `${X.A}=${t}`
					},
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(P.c)(t))
					}
				})))))))),
				Ee = s("./src/reddit/constants/listings.ts"),
				Ie = s("./src/reddit/controls/Button/index.tsx"),
				Ne = s("./src/reddit/icons/fonts/index.tsx"),
				Te = s("./src/reddit/selectors/meta.ts"),
				Le = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Re = s.n(Le);

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = new Set([b.V.CONTROVERSIAL, b.V.TOP]),
				Me = new Set([b.V.CONTROVERSIAL, b.V.RISING]),
				Ae = "ListingSort--Overflow",
				De = Object(c.u)({
					isFrontpage: c.z,
					isProfilePage: c.I,
					pageLayer: e => e
				}),
				Ue = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, N.k, c.E, E.a, Te.i, (e, t, s, o, n, r, a) => {
					if (e) return {
						isPopularPage: n,
						sortOptions: e,
						locale: a
					};
					const i = [b.V.HOT, b.V.NEW, b.V.TOP, b.V.RISING];
					return (t && (o || s) || n && s) && i.unshift(b.V.BEST), n && r && i.splice(3, 0, b.V.AWARDED), {
						isPopularPage: n,
						sortOptions: i,
						locale: a
					}
				});
			class ze extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(P.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(p.a)(t, {
							sort: e
						}) : Object(_.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return n.a.createElement(Ie.s, {
							className: Object(a.a)(Re.a.SortLink, e === t && Re.a.selected),
							kind: Ie.a.InternalLink,
							priority: Ie.b.Plain,
							Icon: s => n.a.createElement(D, Be({}, s, {
								className: Object(a.a)(Re.a.SortIcon, s.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(x.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: this.getSortUrl(e),
								state: {
									[w.b.FeedLoadReason]: w.a.SortChange
								}
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: o,
							sort: r
						} = this.props, a = o && !!s && e === b.V.HOT && r === b.V.HOT;
						return n.a.createElement(n.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && n.a.createElement(ye, {
							baseUrl: Ee.c[Ee.b.Popular],
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
				isLocaleDependentSortOverflow(e) {
					const {
						sort: t,
						isPopularPage: s,
						locale: o
					} = this.props;
					return !o.startsWith("en") && (s ? e === b.V.AWARDED && (t === b.V.HOT || t === b.V.TOP) : e === b.V.BEST && t === b.V.TOP)
				}
				isOverflowSort(e) {
					return Me.has(e) || this.isLocaleDependentSortOverflow(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: o,
						sortOptions: r,
						timeSort: i
					} = this.props, d = !t && Fe.has(o), l = Me.has(o), c = r.filter(e => !this.isOverflowSort(e)), m = r.filter(e => this.isOverflowSort(e) && e !== o);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(q, Be({}, this.props, {
						buttonClassName: Re.a.DropdownButton,
						className: Object(a.a)(Re.a.SortDropdown, e),
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(a.a)(Re.a.SortButtons, e)
					}, c.map(this.renderSort)), l && this.renderSort(o), d && n.a.createElement(je, {
						baseUrl: this.getSortUrl(o),
						buttonClassName: Re.a.DropdownButton,
						className: Re.a.TimeSort,
						dropdownClassName: Re.a.Dropdown,
						listingSort: o,
						onChange: s,
						rowClassName: Re.a.DropdownRow,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						timeSort: i || b.fc,
						wrapperClassName: Re.a.DropdownSortWrapper
					}), m.length > 0 && n.a.createElement(q, Be({}, this.props, {
						className: Object(a.a)(Re.a.SortOverflow, e),
						dropdownClassName: Re.a.Dropdown,
						dropdownId: Ae,
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), n.a.createElement("button", {
						className: Re.a.SortOverflowButton,
						id: Ae
					}, n.a.createElement(Ne.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = De(Object(r.b)(Ue)(Object(l.c)(ze))),
				We = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ve = s.n(We);
			const Ke = Object(c.u)({
					isProfilePage: c.I,
					pageLayer: e => e
				}),
				Ge = Object(r.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (s, o) => {
						if (t) {
							const n = Object(i.c)({
								sort: s,
								timeSort: o
							});
							e(Object(d.I)(t, n))
						}
					}
				}));
			class qe extends n.a.Component {
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
						disabled: o = !1,
						isProfilePage: r,
						sort: i,
						sortOptions: d,
						subredditId: l,
						timeSort: c,
						updateSortPreference: m
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(Ve.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(He, {
						baseUrl: e,
						disabled: o,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: c
					}), !r && n.a.createElement(u.a, {
						className: Ve.a.LayoutSwitch,
						subredditId: l
					}))
				}
			}
			t.a = Ke(Ge(Object(l.c)(qe)))
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
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				y = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				g = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/experiments/econ/index.ts"),
				k = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				j = s("./src/lib/ads/index.ts"),
				E = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				N = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				T = s("./src/reddit/components/AwardBadges/index.tsx"),
				L = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				R = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				B = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				M = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				D = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				z = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				H = s("./src/reddit/components/PostContainer/index.tsx"),
				W = s("./src/reddit/components/PostLeftRail/index.tsx"),
				V = s("./src/reddit/components/PostMedia/index.tsx"),
				K = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				G = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				q = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				X = s.n(q);
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Q = () => n.a.createElement("div", {
					className: X.a.container
				}, n.a.createElement(G.a, {
					className: X.a.pinnedIcon,
					isFilled: !0
				}), n.a.createElement("span", {
					className: X.a.metaText
				}, Y._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				J = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Z = s("./src/reddit/components/PostTitle/index.tsx"),
				$ = s("./src/reddit/components/PostTopLine/index.tsx"),
				ee = s("./src/reddit/components/SourceLink/index.tsx"),
				te = s("./src/reddit/constants/postLayout.ts"),
				se = s("./src/reddit/contexts/InsideOverlay.tsx"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = s("./src/reddit/contexts/Post/index.tsx"),
				re = s("./src/reddit/helpers/isCrosspost.ts"),
				ae = s("./src/reddit/helpers/postEvent.ts"),
				ie = s("./src/reddit/models/Audio/index.ts"),
				de = s("./src/reddit/constants/experiments.ts"),
				le = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ce = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const me = Object(i.a)(P.N, e => e.some(ce.c)),
				ue = Object(i.a)(me, e => e),
				pe = (e, t) => Object(le.c)(e, {
					experimentName: de.Ub,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ue(e, {
							listingKey: s
						})
					}
				});
			var be = s("./src/reddit/selectors/postFlair.ts"),
				he = s("./src/reddit/selectors/showPromotedCTA.ts"),
				fe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ye = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ge = s.n(ye),
				ve = s("./src/reddit/selectors/i18n/index.ts"),
				we = s("./src/reddit/components/LargePost/index.m.less"),
				xe = s.n(we);
			const Ce = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(P.N)(e, {
						listingKey: s
					}) : void 0
				},
				Oe = Object(r.b)(() => Object(i.c)({
					autoplayPref: S.b,
					activeModalId: C.a,
					hideNSFWPref: S.C,
					flairStyleTemplate: oe.U,
					isCurrentUserProfilePost: P.l,
					isLoggedIn: S.K,
					isActive: P.j,
					showPromotedCTA: he.b,
					moderatorPermissions: _.l,
					modModeEnabled: oe.S,
					posts: Ce,
					postHeightVariant: pe,
					shouldShowNsfwListingBelow: ve.b,
					showEditFlair: be.a,
					showAwardsPlaque: k.a,
					isTournamentPost: (e, {
						post: t
					}) => Boolean(t.predictionTournament) && Object(O.t)(e),
					isAudioRoomPostEnabled: O.c
				}), (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const o = s === x.a.upvoted ? Object(u.db)(t) : Object(u.w)(t);
						e(o)
					},
					onIgnoreReports: () => e(Object(u.Z)(t)),
					onOpenReportsDropdown: t => e(Object(p.h)({
						tooltipId: t
					}))
				})),
				ke = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: r,
						currentUser: i,
						eventFactory: u,
						flairStyleTemplate: p,
						forceLoadMedia: x,
						hideNSFWPref: C,
						hostPostData: O,
						imageGalleryCurrentItem: k,
						inSubredditOrProfile: _ = !1,
						isCommentsPage: P,
						isCurrentUserProfilePost: S,
						isFrontpage: G,
						isGalleryTileLayoutDefault: q,
						isLoggedIn: X,
						isOverlay: Y,
						isTopicPage: se,
						isTournamentPost: oe,
						isAudioRoomPostEnabled: ne,
						isCommentCountAnimationEnabled: le,
						isVoteCountAnimationEnabled: ce,
						isCountAnimShadowTestEnabled: me,
						listingIndex: ue,
						listingKey: pe,
						moderatorPermissions: be,
						modModeEnabled: he,
						onClickPost: ye,
						onIgnoreReports: ve,
						onOpenReportsDropdown: we,
						post: Ce,
						postHeightVariant: Oe,
						scrollerItemRef: ke,
						shouldShowGalleryTileOption: _e,
						shouldShowNsfwListingBelow: Pe,
						showAwardsPlaque: Se,
						showEditFlair: je,
						showPromotedCTA: Ee,
						subredditOrProfile: Ie,
						userIsOp: Ne,
						postId: Te,
						postIds: Le,
						onceInViewport: Re
					} = e, Be = !!e.redditStyle || !!e["data-redditstyle"], Fe = Be ? void 0 : p, Me = Object(c.a)(be), Ae = he && Me, De = Object(d.a)(be), Ue = Object(l.a)(be), ze = Object(D.c)(Ce), He = !!Ce.media && Ce.media.type === v.o.RTJSON, We = Ne && He, Ve = s ? s - W.a : void 0, Ke = !!Ce.recommendationContext, Ge = !(G && X || se) || Ke && X, qe = (e => e === de.ae.OnlyTitles)(Oe) && !Object(re.a)(Ce), Xe = (e => e === de.ae.MediumHeight)(Oe) && !Object(re.a)(Ce), Ye = (e => {
						var t;
						const {
							post: s,
							postIds: o,
							posts: n
						} = e;
						if (!Object(w.r)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = o && 0 === o.indexOf(s.id),
							a = o && 1 === o.indexOf(s.id),
							i = n && n[1] && Object(w.r)(n[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: r
						}
					})(e), Qe = !!(null == O ? void 0 : O.shouldShowLinkedPosts), Je = (!_ || Qe || Pe) && !Ce.isSponsored, Ze = Object(j.t)(Ce, k), {
						source: $e
					} = Ze, et = Object(o.useRef)(null), tt = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Re || Re(ue))
						})
					}, [Re, ue]);
					return Object(g.a)(et, tt), n.a.createElement(y.b, null, n.a.createElement(H.a, {
						className: Object(E.a)(xe.a.container, r, ge.a.largeAndMediumPostStyles, ge.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[ge.a.mUseRedditTheme]: Be,
							promotedvideolink: Ce.isSponsored && !(Ce.media && v.a.has(Ce.media.type)),
							[xe.a.topCompactPost]: Ye && Ye.hasTopCompactPostStyles,
							[xe.a.bottomCompactPost]: Ye && Ye.hasBottomCompactPostStyles
						}),
						isOverlay: Y,
						style: Object(m.b)(e.flairStyleTemplate),
						post: Ce,
						onClick: ye,
						eventFactory: u
					}, n.a.createElement("div", {
						ref: et
					}), n.a.createElement(J.a, {
						model: Ce,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: me,
						isVoteCountAnimation: ce,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Fe,
						redditStyle: Be,
						postId: Te
					}), n.a.createElement(z.a, {
						className: Object(E.a)(xe.a.backgroundWrapper, {
							[xe.a.isEvent]: Object(ae.a)(Ce)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Fe,
						post: Ce,
						redditStyle: Be
					}, n.a.createElement(B.a, {
						post: Ce
					}), Ye && Ye.showPinnnedHeader && n.a.createElement(Q, null), oe && Object(a.c)(Ce) && n.a.createElement(n.a.Fragment, null, n.a.createElement(f.a, {
						post: Ce
					}), n.a.createElement(h.a, {
						post: Ce
					})), !oe && n.a.createElement(n.a.Fragment, null, !!Ce.recommendationContext && n.a.createElement(U.a, {
						content: Ce.recommendationContext.content,
						layout: te.g.Large,
						post: Ce
					}), n.a.createElement($.a, {
						className: xe.a.postTopLine,
						hideAwards: Se,
						hideNSFWPref: C,
						hostPostData: O,
						iconClassName: xe.a.postTopLineIcon,
						inSubredditOrProfile: _,
						isCommentsPage: !!P,
						isCompactPinnedPost: !!Ye,
						isCurrentUserProfilePost: S,
						isOverlay: !!Y,
						isTopicPage: !!se,
						listingKey: pe,
						post: Ce,
						shouldShowSubscribeButton: Ge,
						showSubreddit: Je,
						showSubredditIcon: !0,
						subredditOrProfile: Ie
					}), n.a.createElement(Z.c, {
						className: xe.a.postTitle,
						post: Ce,
						redditStyle: Be,
						size: Z.b.Large,
						titleColor: Fe && Fe.postTitleColor,
						isOverlay: Y
					}), Ce.source && !Ce.isSponsored && !(Ce.media && Object(v.H)(Ce.media)) && n.a.createElement(ee.a, {
						className: xe.a.sourceLink,
						post: Ce
					})), n.a.createElement("div", {
						className: xe.a.postMediaWrapper
					}, !Ye && n.a.createElement(V.a, {
						isGalleryTileLayoutDefault: q,
						isListing: !0,
						isMediumHeight: Xe,
						isNotCardView: !!Y,
						isTitleOnly: qe,
						showCentered: !0,
						flairStyleTemplate: Fe,
						post: Ce,
						availableWidth: Ve,
						shouldLoad: x,
						scrollerItemRef: ke,
						autoplayPref: t,
						shouldShowGalleryTileOption: _e,
						showPromotedCTA: Ee
					})), Ee && $e && $e.url && n.a.createElement(I.a, {
						className: xe.a.adLinkWrapper
					}, n.a.createElement(N.a, {
						post: Ce,
						adLinkContent: Ze
					})), he && Me && ze && n.a.createElement(A.a, {
						onIgnoreReports: ve,
						reportable: Ce
					}), Object(ie.a)(Ce) && ne && n.a.createElement(b.a, {
						post: Ce
					}), n.a.createElement(M.d, null), Se && n.a.createElement(T.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Ce,
						tooltipType: Y ? fe.c.Lightbox : void 0
					}), n.a.createElement("div", {
						className: xe.a.flatListContainer
					}, n.a.createElement(R.a, {
						className: xe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Fe,
						model: Ce,
						onVoteClick: e.handleVote
					}), n.a.createElement(F.c, {
						currentUser: i,
						hasModFlairPerms: De,
						hasModFullPerms: Ue,
						hasModPostPerms: Me,
						hostPostData: O,
						isCommentCountAnimation: le,
						isCountAnimShadowTestEnabled: me,
						isLargePost: !0,
						isOverlay: !!Y,
						listingKey: pe,
						modModeEnabled: he,
						onIgnoreReports: ve,
						onOpenReportsDropdown: we,
						post: Ce,
						showEditPost: We,
						showEditFlair: je,
						useFlatlistBreakpoints: Object(K.b)({
							editPost: !1,
							save: !Ae,
							hide: !1,
							report: !1
						})
					}))), G && n.a.createElement(L.a, {
						post: Ce,
						postIds: null != Le ? Le : [],
						subredditId: null == Ie ? void 0 : Ie.id
					})))
				});
			ke.displayName = "LargePostMemoized";
			t.default = Object(ne.b)(Oe(Object(se.b)(ke)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/index.m.less"),
				l = s.n(d);
			const c = {
				[a.V.BEST]: "best",
				[a.V.HOT]: "hot",
				[a.V.NEW]: "new",
				[a.V.CONTROVERSIAL]: "controversial",
				[a.V.TOP]: "top",
				[a.V.RISING]: "rising",
				[a.V.AWARDED]: "award"
			};

			function m({
				className: e,
				isFilled: t,
				sort: s
			}) {
				return c[s] ? n.a.createElement(i.a, {
					name: c[s],
					isFilled: t,
					className: Object(r.a)(e, l.a.iconStyles)
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				c = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(u);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					post: u,
					subredditOrProfile: b
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, r.a.createElement(l.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, r.a.createElement(d.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: b
				}), r.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return r.a.createElement("div", {
						role: "img",
						"aria-label": o.fbt._("Crossposted by{author}from{community}", [o.fbt._param("author", Object(c.d)(e)), o.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, r.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, s), b && b.isQuarantined && r.a.createElement(i.a, null))
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
				return l
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = s.n(i);

			function l(e) {
				const {
					source: t
				} = e.post;
				return n.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className)
				}, n.a.createElement(a.a, {
					className: Object(r.a)(d.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(d.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(d.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				isFirst: e,
				isLast: t,
				...s
			}) => n.a.createElement("div", d({
				className: Object(r.a)(i.a.border, {
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
			var o = s("./node_modules/lodash/times.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/constants/gold.ts"),
				c = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				y = s("./src/reddit/selectors/communityAwards.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				w = s.n(v);
			const x = m.a.div("ProfileOwnerCommentWrapper", w.a),
				C = m.a.div("CommentContentWrapper", w.a),
				O = m.a.div("Wrapper", w.a),
				k = m.a.div("CommentSeparator", w.a),
				_ = Object(i.b)(() => Object(d.c)({
					comment: (e, t) => Object(f.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(f.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(y.a)(e, t);
							return s && s.coinPrice >= l.g
						})
					},
					isNightmodeOn: g.X
				}), e => ({
					openPost: t => e(Object(b.K)(t))
				}));
			class P extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: o,
						isAwarded: r,
						isFirst: i,
						isLast: d,
						isNightmodeOn: l,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? S : j;
					return a.a.createElement(u.a, {
						comment: e,
						onClick: (e, t) => {
							o({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(O, {
						className: Object(c.a)({
							[w.a.isFirst]: i,
							[w.a.isLast]: d,
							[w.a.isAwarded]: r,
							[w.a.isNightmodeOn]: l
						})
					}, n()(s + 1, e => a.a.createElement(k, {
						key: e
					})), a.a.createElement(C, null, b(t, m, p))))
				}
			}
			const S = (e, t, s) => a.a.createElement(x, null, j(e, t, s, !0, !0)),
				j = (e, t, s, o = !1, n) => a.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: o,
					showModTools: s,
					isExpanded: !!n
				});
			t.a = _(P)
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
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
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
				item: "fuCmx3adjKY3tXA4Zfx2p",
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
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			}));
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isComment.ts"),
				u = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts"),
				y = s("./src/reddit/selectors/user.ts");
			const g = (e, t) => (e, t, s) => Object(m.a)(e) ? 120 : 47,
				v = Object(c.u)(),
				w = {
					apiError: b.a,
					apiPending: b.b,
					currentUser: y.k,
					layout: c.Q,
					loadMore: b.d,
					subredditsById: h.X,
					viewportDataLoaded: f.a,
					commentsById: b.g,
					itemIds: b.f,
					itemIdToPostId: b.e,
					postsById: b.h,
					estimateItemHeight: g
				},
				x = Object(a.c)(w),
				C = Object(r.b)(x, (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					openPost: t => {
						e(i.K(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(u.a)(t) && e(i.N(t))
					},
					trackOnPostExitedViewport: (t, s, o) => {
						Object(u.a)(t) && e(i.O(t, o))
					},
					fireAdPixelsOfType: n.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(p.i)(e, t)
				}));
			t.a = e => Object(l.c)(v(C(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(o.b)(() => Object(n.c)({
				activeModalId: c.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: l.U,
				hideNSFWPref: b.C,
				isActive: p.j,
				moderatorPermissions: m.l,
				modModeEnabled: l.S,
				showEditFlair: u.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: s,
					selectedTemplateId: o
				}) => e(Object(a.h)({
					post: t,
					previewFlair: s,
					selectedTemplateId: o
				})),
				handleVote: s => {
					const o = s === d.a.upvoted ? Object(r.db)(t) : Object(r.w)(t);
					e(o)
				},
				onIgnoreReports: () => e(Object(r.Z)(t)),
				onOpenReportsDropdown: t => e(Object(i.h)({
					tooltipId: t
				}))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: o
				}) => t.dispatchFlairChanged({
					post: s.post,
					previewFlair: e,
					selectedTemplateId: o
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");
			const r = {
					[n.V.BEST]: () => o.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[n.V.HOT]: () => o.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[n.V.NEW]: () => o.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[n.V.CONTROVERSIAL]: () => o.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[n.V.RISING]: () => o.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[n.V.TOP]: () => o.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[n.V.AWARDED]: () => o.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = r[e];
					return t && t() || ""
				},
				i = {
					[n.ec.HOUR]: () => o.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[n.ec.DAY]: () => o.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[n.ec.WEEK]: () => o.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[n.ec.MONTH]: () => o.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[n.ec.YEAR]: () => o.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[n.ec.ALL]: () => o.fbt._("All Time", null, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext({})
		},
		"./src/reddit/endpoints/page/profileOverviewPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return m
			}));
			var o = s("./src/config.ts"),
				n = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				l = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const c = (e, t, s) => Object(a.a)(e, {
					data: s,
					endpoint: Object(i.a)(Object(n.a)(Object(d.a)(Object(l.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
					traceRequestName: "get_profile_conversations",
					method: r.ib.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				m = (e, t, s) => Object(a.a)(e, {
					data: s,
					endpoint: Object(i.a)(Object(n.a)(Object(l.a)(`${o.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`))),
					method: r.ib.GET
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
				return n
			}));
			var o = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === o.b.NO_ADS);
				return !s && !n
			}
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
				return l
			})), s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/pages/ErrorPages/index.m.less"),
				d = s.n(i);
			const l = ({
					message: e
				}) => r.a.createElement("div", {
					className: d.a.container
				}, r.a.createElement("h3", {
					className: d.a.title
				}, e || o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), r.a.createElement(a.m, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, o.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				c = ({
					message: e
				}) => r.a.createElement("div", {
					className: d.a.container
				}, r.a.createElement("h3", {
					className: d.a.title
				}, e || o.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), r.a.createElement(a.m, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, o.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				h = s("./src/reddit/actions/pages/profileOverview/index.ts"),
				f = s("./src/reddit/actions/pages/profileShared.ts"),
				y = s("./src/reddit/actions/profileConversations.ts"),
				g = s("./node_modules/lodash/difference.js"),
				v = s.n(g),
				w = s("./node_modules/lodash/pick.js"),
				x = s.n(w),
				C = s("./src/lib/makeActionCreator/index.ts"),
				O = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				k = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				P = s("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const S = Object(C.a)(P.c),
				j = Object(C.a)(P.b),
				E = Object(C.a)(P.a);
			var I = s("./src/reddit/components/ContentGate/index.tsx"),
				N = s("./src/reddit/components/EmptyProfile/index.ts"),
				T = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				L = s("./src/reddit/components/JumpToContent/index.tsx"),
				R = s("./src/lib/classNames/index.ts"),
				B = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				F = s("./src/reddit/components/ProfileItemList/index.tsx"),
				M = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				A = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				D = s.n(A),
				U = s("./src/lib/lessComponent.tsx");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(M.a)(U.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, o = s.length > 0;
				return a.a.createElement(F.a, z({
					className: Object(R.a)(t, {
						[D.a.ComponentHasItems]: o
					})
				}, e))
			}, "Component", D.a));
			var W = e => a.a.createElement(H, z({}, e, {
					itemComponent: B.a
				})),
				V = s("./src/reddit/components/PostList/index.tsx"),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/lib/isPinnedAdminPost/index.ts"),
				q = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				X = s("./node_modules/lodash/last.js"),
				Y = s.n(X);
			var Q = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				J = s("./src/reddit/selectors/posts.ts"),
				Z = s("./src/reddit/components/ClassicPost/index.tsx"),
				$ = s("./src/reddit/components/LargePost/index.tsx"),
				ee = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				te = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				se = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				oe = s("./src/reddit/selectors/profile.ts"),
				ne = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				re = s.n(ne);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ie = U.a.div("ExtraCommentsItemWrapper", re.a), de = U.a.p("ExtraComments", re.a), le = U.a.wrapped(de, "ExtraCommentsInteractive", re.a);
			var ce = Object(i.b)(() => Object(d.c)({
					extraCommentsItem: oe.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: o
						} = e.pages.profileOverview.conversations;
						return !!o.api.pending[s]
					}
				}), (e, {
					profileName: t
				}) => ({
					extraCommentsClicked: s => e(Object(y.g)(t, s.postId, s.id))
				}))(({
					extraCommentsClicked: e,
					extraCommentsItem: t,
					extraCommentsPending: s
				}) => a.a.createElement(ie, null, s ? a.a.createElement(de, null, ae._("Loading...", null, {
					hk: "47z90C"
				})) : a.a.createElement(se.a.Consumer, null, s => a.a.createElement(le, {
					onClick: s => {
						e(t), s.stopPropagation(), s.nativeEvent.stopImmediatePropagation()
					}
				}, ae._("Load more comments", null, {
					hk: "1jXJxb"
				}))))),
				me = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				ue = s("./src/reddit/contexts/Post/index.tsx"),
				pe = s("./src/reddit/hooks/useTheme.ts"),
				be = s("./src/reddit/constants/postLayout.ts"),
				he = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				fe = s.n(he),
				ye = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ge = s.n(ye);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const we = U.a.div("BackgroundWrapper", ge.a),
				xe = U.a.wrapped(Z.default, "ClassicPost", ge.a),
				Ce = U.a.wrapped(ee.a, "OverviewCommentPost", ge.a),
				Oe = Object(i.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							n = Object(q.a)(t, o);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[n]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: s
					}) => {
						const o = s ? s.toLowerCase() : "",
							n = Object(q.a)(t, o);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[n]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(J.p)(e, t, s),
					isPinned: (e, {
						postId: t,
						currentProfileName: s
					}) => !!s && Object(J.r)(e, t, s),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: s
							} = e, o = t.toLowerCase(), n = s.models[o];
							return n ? n.username : void 0
						})(e, t)
					},
					layout: u.Q
				})),
				ke = U.a.wrapped($.default, "OverviewLargePost", ge.a),
				_e = Oe(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: o,
						eventFactory: n,
						forceLoadMedia: r,
						headComment: i,
						isInitiallyPinned: d,
						isPinned: l,
						isScrolling: c,
						last: m,
						layout: u,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						post: f,
						postId: y,
						profileName: g,
						scrollerItemRef: v
					} = e, w = {
						last: m,
						onClickPost: p,
						postId: y
					};
					if (!g) return null;
					const x = g === f.author,
						C = Object(G.a)(l, f.distinguishType);
					if (!x && !i && !C) return null;
					const O = i ? function(e) {
							const t = [],
								s = e.length;
							for (let o = 0; o < s; o++) {
								(0 === o || e[o - 1].depth !== e[o].depth - 1) && t.push([]), Y()(t).push(e[o])
							}
							return t
						}(function(e, t) {
							const s = [];
							let o = t,
								n = "comment";
							for (; o;) {
								const t = e[o];
								s.push({
									id: o,
									depth: t.depth,
									type: n
								}), t.next ? (o = t.next.id, n = t.next.type) : o = void 0
							}
							return s
						}(o, i)) : [],
						k = O.length - 1;
					return a.a.createElement("div", {
						className: Object(R.a)(fe.a.largeAndMediumActiveStyles, fe.a.largeAndMediumPostStyles, ge.a.OverviewConversationsPost, s),
						style: {
							...Object(Q.b)(),
							...Object(Q.d)(e)
						}
					}, a.a.createElement(te.a, {
						isFirst: !0,
						isLast: k < 0,
						key: f.id
					}, !x && !!i && a.a.createElement(Ce, ve({}, w, {
						commentId: i,
						key: f.id,
						profileName: g
					})), (x || C) && (u === be.g.Classic ? a.a.createElement(xe, {
						availableWidth: t,
						eventFactory: n,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: c,
						forceLoadMedia: r,
						last: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: y,
						scrollerItemRef: v
					}) : a.a.createElement(ke, {
						availableWidth: t,
						eventFactory: n,
						isScrolling: c,
						isFrontpage: !1,
						forceLoadMedia: r,
						last: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: y,
						scrollerItemRef: v
					}))), a.a.createElement(we, {
						style: {
							background: Object(Q.e)(e)
						}
					}, !d && O.map((e, t) => a.a.createElement(te.a, {
						isLast: t === k,
						key: `${t}-isLast[${t===k}]`
					}, e.map((t, s) => {
						const o = 0 === s,
							n = s === e.length - 1;
						return "comment" === t.type ? a.a.createElement(me.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: o,
							isLast: n,
							key: t.id,
							profileName: g,
							showModTools: !0
						}) : a.a.createElement(ce, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: g
						})
					})))))
				});
			var Pe = Object(ue.b)((function(e) {
					var t;
					const s = Object(pe.a)(),
						o = Object(u.eb)();
					return a.a.createElement(_e, ve({
						theme: null !== (t = e.theme) && void 0 !== t ? t : s,
						currentProfileName: Object(u.i)(o),
						pageLayer: o
					}, e))
				})),
				Se = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				je = s("./src/reddit/helpers/trackers/post.ts"),
				Ee = s("./src/reddit/selectors/tracking.ts"),
				Ie = s("./src/reddit/connectors/PostList/index.ts");
			const Ne = Object(d.c)({
					...Ie.d,
					postIds: J.O,
					viewportDataLoaded: Ee.a
				}),
				Te = Object(Ie.c)(),
				Le = Object(i.b)(Ne, Ie.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(je.i)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? Se.a : Pe
				}));
			var Re = (e => Object(K.c)(Te(Le(e))))(V.a),
				Be = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Fe = s("./node_modules/lodash/debounce.js"),
				Me = s.n(Fe),
				Ae = s("./src/reddit/actions/post.ts"),
				De = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ue = s("./src/lib/isUrl/index.ts"),
				ze = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				He = s("./src/reddit/components/Media/index.tsx"),
				We = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Ve = s("./src/reddit/components/PostContainer/index.tsx"),
				Ke = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ge = s("./src/reddit/components/PostTitle/index.tsx"),
				qe = s("./src/reddit/connectors/miniCardPost.ts"),
				Xe = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Ye = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Qe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Je = s("./src/reddit/models/Media/index.ts"),
				Ze = s("./node_modules/fbt/lib/FbtPublic.js"),
				$e = s("./src/reddit/components/CommentsLink/index.tsx"),
				et = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				tt = s("./src/reddit/components/Flatlist/index.tsx"),
				st = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				ot = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				nt = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				rt = s("./src/reddit/components/ShareMenu/index.tsx"),
				at = s("./src/reddit/icons/fonts/Share/index.tsx"),
				it = s("./src/reddit/models/User/index.ts"),
				dt = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				lt = s.n(dt);
			const ct = "-MiniCardModMenu",
				mt = "-MiniCardOverflowMenu",
				ut = "-MiniCardShareMenu",
				pt = U.a.wrapped(et.a, "HorizontalVotes", lt.a),
				bt = U.a.button("ShareButton", lt.a),
				ht = Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isProfilePostListing: u.K,
					pageLayer: e => e
				}),
				ft = Object(d.c)({
					layout: u.Q,
					subreddit: u.r
				});
			var yt = ht(Object(i.b)(ft, {})(Object(K.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: o,
						handleVote: n,
						hasModFlairPerms: r,
						hasModFullPerms: i,
						hasModPostPerms: d,
						isCommentsPage: l,
						isCommentPermalink: c,
						isOverlay: m,
						isProfilePostListing: u,
						isSticky: p,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: f,
						post: y,
						sendEvent: g,
						showEditFlair: v,
						showEditPost: w,
						subreddit: x
					} = e, C = e => g(Object(je.i)(y.id, e)), O = y.postId, k = Object(tt.d)(ct, y.id, m, p), _ = !!o && Object(it.e)(o) === y.author;
					return a.a.createElement("div", {
						className: Object(R.a)(lt.a.flatlistContainer, s)
					}, a.a.createElement(pt, {
						compact: !1,
						model: y,
						onVoteClick: n,
						scoreClassName: lt.a.score
					}), a.a.createElement($e.a, {
						hasModPostPerms: d,
						isCommentsPage: l,
						isCommentPermalink: c,
						isOverlay: m,
						postId: y.id,
						modModeEnabled: h,
						numComments: y.numComments,
						type: be.g.Compact,
						onClick: f
					}), a.a.createElement(rt.a, {
						className: lt.a.shareMenu,
						dropdownId: Object(tt.d)(ut, y.id, m, p),
						permalink: y.permalink,
						post: y,
						sendEventWithName: C,
						subredditType: null == x ? void 0 : x.type
					}, a.a.createElement(bt, null, a.a.createElement(at.a, {
						className: lt.a.shareIcon
					}), a.a.createElement("span", {
						className: lt.a.shareText
					}, Ze.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && a.a.createElement(st.a, {
						dropdownId: k,
						onClick: () => C("post_mod_action_menu")
					}, a.a.createElement(tt.b, {
						className: lt.a.modActionsIcon
					}), a.a.createElement(ot.a, {
						canEditFlair: r && !!v,
						hasModPostPerms: d,
						hasModFullPerms: i,
						isOverlay: !!m,
						isPostAuthor: _,
						modModeEnabled: h,
						post: y,
						tooltipId: k
					})), a.a.createElement(nt.a, {
						currentProfileName: t,
						isCommentsPage: l,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: y.permalink,
						postId: O,
						dropdownId: Object(tt.d)(mt, y.id, m, p),
						isFixed: p,
						sendEvent: g,
						showEditPost: !!w,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(nt.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				gt = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				vt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				wt = s("./src/reddit/components/MiniCardPost/index.m.less"),
				xt = s.n(wt);
			var Ct = Object(u.u)()(Object(ue.b)(Object(qe.a)(Object(De.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: o,
						crosspostRoot: n,
						crosspostSubredditOrProfile: r,
						currentUser: i,
						eventFactory: d,
						flairStyleTemplate: l,
						forceLoadMedia: c,
						hideNSFWPref: m,
						moderatorPermissions: u,
						modModeEnabled: p,
						onClickPost: b,
						post: h,
						scrollerItemRef: f,
						shouldPause: y,
						showMetaLine: g = !0,
						showEditFlair: v,
						subredditOrProfile: w,
						userIsOp: x
					} = e, {
						media: C
					} = n || h, O = C && C.type, k = Object(Ke.b)(h.id), _ = O === Je.o.RTJSON, P = x && _, S = Object(Qe.a)(u), j = Object(Xe.a)(u), E = Object(Ye.a)(u), I = C && O !== Je.o.RTJSON && O !== Je.o.TEXT, N = !C && !!h.source && Object(Ue.a)(h.source.url), T = C && a.a.createElement(He.a, {
						autoplayPref: t,
						availableWidth: s,
						className: xt.a.media,
						imageBoxClassName: xt.a.mediaImageBox,
						imageBoxContentImageClassName: xt.a.mediaImageBoxContentImage,
						forceAspectRatio: Je.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: n || h,
						scrollerItemRef: f,
						shouldPause: y,
						shouldLoad: c,
						showCentered: !0,
						showFull: !1
					});
					return a.a.createElement(Ve.a, {
						className: Object(R.a)(xt.a.postContainer, fe.a.largeAndMediumActiveStyles, fe.a.largeAndMediumPostStyles, Object(Q.a)(e), o),
						style: {
							...Object(Q.b)(e.flairStyleTemplate),
							...Object(Q.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, a.a.createElement(We.a, {
						className: xt.a.backgroundWrapper,
						flairStyleTemplate: l
					}, I && T, a.a.createElement("div", {
						className: xt.a.innerContainer
					}, N && a.a.createElement(vt.a, {
						post: h,
						templatePlaceholderImage: l ? l.postPlaceholderImage : void 0
					}), a.a.createElement(Ge.c, {
						className: xt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: Ge.b.Large,
						titleColor: l && l.postTitleColor
					}), g && w && a.a.createElement(gt.a, {
						className: xt.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: w
					}), !I && a.a.createElement("div", {
						className: xt.a.mediaWrapper
					}, T), a.a.createElement("div", {
						className: xt.a.flexSpacer
					}), a.a.createElement(yt, {
						currentUser: i,
						handleVote: e.handleVote,
						hasModFlairPerms: j,
						hasModFullPerms: E,
						hasModPostPerms: S,
						modModeEnabled: p,
						post: h,
						showEditFlair: v,
						showEditPost: P
					}))), e.activeModalId === k && a.a.createElement(Ke.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: k,
						onFlairChanged: e.onFlairChanged
					}), a.a.createElement(ze.d, null))
				})))),
				Ot = s("./src/reddit/helpers/getClickInfo.ts"),
				kt = s("./src/reddit/helpers/localStorage/index.ts"),
				_t = s("./src/reddit/selectors/user.ts"),
				Pt = s("./src/reddit/icons/fonts/index.tsx"),
				St = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				jt = s.n(St);
			const {
				fbt: Et
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var It = e => a.a.createElement("div", {
					className: Object(R.a)(jt.a.container, e.className)
				}, a.a.createElement(Pt.a, {
					name: "pin",
					className: jt.a.pin
				}), a.a.createElement("div", {
					className: jt.a.title
				}, Et._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				Nt = s("./src/reddit/controls/TextButton/index.tsx"),
				Tt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Lt = s.n(Tt);
			const {
				fbt: Rt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Bt = e => a.a.createElement(It, {
					className: Object(R.a)(Lt.a.container, e.className)
				}, a.a.createElement("div", {
					className: Lt.a.description
				}, Rt._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), a.a.createElement(Nt.a, {
					className: Lt.a.gotIt,
					onClick: e.onGotItClick
				}, Rt._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Ft = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				Mt = s.n(Ft);
			const {
				fbt: At
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Dt = 320, Ut = 300, zt = Object(d.c)({
				arePinnedPostsLoaded: J.a,
				currentUser: _t.k,
				pinnedPostIds: J.P
			}), Ht = Object(i.b)(zt, e => ({
				openPost: t => e(Object(Ae.K)(t))
			}));
			class Wt extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Me()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Ut ? this.pauseMedia() : e.top > 0 && this.playMedia()
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
						Object(kt.Kb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Ot.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(Ct, {
						postId: e,
						key: e,
						availableWidth: Dt,
						className: Object(R.a)(Mt.a.item, Mt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(kt.J)()
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
					const o = !!this.props.currentUser && this.props.profileName === Object(it.e)(this.props.currentUser),
						n = t.length > 0,
						r = !n && this.state.showEducation && o;
					if (!n && !r) return null;
					const i = o && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Mt.a.title
					}, At._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? a.a.createElement(Bt, {
						className: Object(R.a)(Mt.a.item, Mt.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: Mt.a.container
					}, t.map(this.renderPost), i && a.a.createElement(It, {
						className: Mt.a.item
					})), s)
				}
			}
			var Vt = Object(u.u)()(Ht(Wt)),
				Kt = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Gt = s("./src/reddit/helpers/trackers/screenview.ts"),
				qt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Xt = s("./src/reddit/models/ContentGate.ts"),
				Yt = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Qt() {
				return (Qt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Jt = (e, {
					location: t
				}) => n()([...Object(l.a)(t.search)]),
				Zt = Object(u.u)(),
				$t = Object(d.a)(u.D, _t.eb, Jt, u.Q, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(oe.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(f.a)(e, Jt(0, t)), (e, {
					match: t
				}) => !Object(J.n)(e, {
					profileName: t.params.profileName
				}), _t.K, (e, {
					match: t
				}) => Object(_t.f)(e, p.gc + t.params.profileName), (e, t, s, o, n, r, a, {
					sort: i,
					t: d
				}, l, c, u) => {
					const b = o === be.g.Compact ? p.sb : p.tb,
						h = Object(m.a)(n, b, i, s),
						{
							sort: f
						} = s;
					return {
						contentGateInfo: u,
						over18Prefs: t,
						isLoggedIn: c,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: o,
						listingKey: h,
						profileName: n,
						shouldShowPinnedPostsSection: l && !f,
						sort: i,
						timeSort: d
					}
				}),
				es = Object(i.b)($t, (e, t) => ({
					onLoadMoreChronoItems: () => e((() => async (e, t, {
						apiContext: s
					}) => {
						const o = t(),
							{
								currentPage: n
							} = o.platform;
						if (!n || !n.routeMatch) return;
						const {
							queryParams: r,
							params: a
						} = n.routeMatch.match, {
							sort: i,
							t: d
						} = Object(f.a)(o, r), {
							profileName: l
						} = a, c = Object(m.a)(l, p.sb, i, r), u = Object(O.d)(o, {
							listingKey: c
						});
						if (!u) return;
						const b = Object(O.b)(o, {
								listingKey: c
							}),
							h = Object(O.c)(o, {
								listingKey: c
							}),
							y = h && h[u.token];
						if (b || y) return;
						e(S({
							key: c,
							fetchedToken: u.token
						}));
						const g = await Object(_.a)(s(), l, {
							after: u.token,
							dist: u.dist,
							sort: i,
							t: d,
							...x()(r, k.l)
						});
						if (g.ok) {
							const t = Object(O.f)(o, {
									listingKey: c
								}),
								s = {
									...g.body,
									overviewIds: v()(g.body.overviewIds, t)
								};
							e(j({
								fetchedToken: u.token,
								key: c,
								meta: o.meta,
								...s
							}))
						} else e(E({
							error: g.error,
							fetchedToken: u.token,
							key: c,
							account: g.body.data ? g.body.data.account : null
						}))
					})((t.match.params.profileName, t.match.params.sort))),
					onLoadMoreConversationsItems: () => e(y.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(h.profileOverviewRequested)({
						...t.match,
						queryParams: n()([...Object(l.a)(t.location.search)])
					}))
				}));
			class ts extends a.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => a.a.createElement(N.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						contentGateInfo: e,
						layout: t,
						over18Prefs: s,
						isOwnProfile: o,
						isProfileNSFW: n,
						listingKey: r,
						onLayoutChange: i,
						pageLayer: d,
						profileName: l,
						sort: m,
						shouldShowPinnedPostsSection: u,
						showSignupUpsell: b,
						timeSort: h
					} = this.props;
					if (!d) return null;
					if (e && e.profileDeleted) return a.a.createElement(I.default, {
						contentGateType: Xt.a.ProfileDeleted,
						profileName: l
					});
					if (e && e.profileSuspended) return a.a.createElement(I.default, {
						contentGateType: Xt.a.ProfileSuspended,
						profileName: l
					});
					if (451 === d.status || e && e.profileBlockedForLegalReason) return a.a.createElement(I.default, {
						contentGateType: Xt.a.ProfileBlockedForLegalReason,
						profileName: l
					});
					if (403 === d.status) return a.a.createElement(Yt.a, null);
					if (404 === d.status) return a.a.createElement(I.default, {
						contentGateType: Xt.a.ProfileDoesNotExist,
						profileName: l
					});
					if (!l) return null;
					const f = l.toLowerCase(),
						y = `/user/${l}/`,
						g = {
							listingKey: r,
							listingName: f
						};
					if (!s && n && !o) return a.a.createElement(I.default, {
						subredditName: l,
						contentGateType: Xt.a.Nsfw
					});
					const v = {
							inSubredditOrProfile: !Object(c.a)(l),
							listingKey: r,
							listingName: f,
							listingViewed: (e, t) => Object(Gt.q)(r, m, t, e, h),
							noPostsComponent: this.renderNoPosts,
							onScroll: b,
							onTryAgain: i
						},
						w = {
							sort: m,
							baseUrl: y,
							sortOptions: p.zb,
							timeSort: h
						};
					let x;
					return x = t === be.g.Compact ? a.a.createElement(W, Qt({}, v, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: i
					})) : a.a.createElement(a.a.Fragment, null, u && a.a.createElement(Vt, {
						profileName: l
					}), a.a.createElement(T.a, w), a.a.createElement(Re, Qt({}, v, {
						excludePinnedPosts: u,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), a.a.createElement(qt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(Be.a, {
							profileName: l
						})),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(L.a, null), x),
						sidebar: a.a.createElement(Kt.a, Qt({}, g, {
							profileName: l
						}))
					})
				}
			}
			t.default = Zt(es(Object(b.a)(ts)))
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/models/Flair/index.ts"),
				r = s("./src/reddit/models/PostCreationForm/index.ts"),
				a = s("./src/reddit/models/Vote/index.ts");
			const i = {
				t3_1: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_one_guy",
					authorId: "t2_1234",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_1",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/1",
					media: {
						type: "image",
						content: "https://i.redd.it/iap6jbwjlosy.jpg",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_1",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "A plain post",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_2: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_other_chick",
					authorId: "t2_1235",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_2",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/2",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_2",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another not so plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_3: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "person_number_three",
					authorId: "t2_1236",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_3",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/3",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_4: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "this_user_is_the_best",
					authorId: "t2_1237",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_4",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [],
					flair: [{
						type: n.f.Text,
						text: "hello world"
					}, {
						type: n.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/4",
					media: null,
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_4",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: {
						displayText: "foobar.com",
						url: "http://foobar.com",
						outboundUrl: "http://foobar.com/foobar"
					},
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Hello world one two three four five six seven eight. See? I can count!",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_5: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "yet_another_cool_dude",
					authorId: "t2_1238",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_5",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: n.f.Text,
						text: "hello world"
					}, {
						type: n.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/5",
					media: {
						type: "text",
						rteMode: r.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_5",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_6: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1239",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: n.f.Text,
						text: "hello world"
					}, {
						type: n.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: r.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_6",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				abc12345: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1240",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [{
						type: 1,
						url: "https://www.reddit.com/i.gif"
					}],
					flair: [{
						type: n.f.Text,
						text: "hello world"
					}, {
						type: n.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !0,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: r.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				}
			};
			d = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: r.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, a.a.notVoted;
			var d;
			var l = s("./src/reddit/helpers/isComment.ts");
			const c = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return m(e, {
						listingKey: t
					}).filter(e => {
						if (Object(l.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				m = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				u = Object(o.a)((e, {
					listingKey: t
				}) => {
					return c(e, {
						listingKey: t
					}).reduce((t, s) => {
						const o = Object(l.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = o, t
					}, {})
				}),
				p = (Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return p(e, {
						listingKey: t
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(o.a)((e, {
					listingKey: t
				}) => {
					return c(e, {
						listingKey: t
					}).map(t => Object(l.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				b = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models,
						o = p(e, {
							listingKey: t
						}),
						n = {};
					return o.forEach(e => n[e] = s[e]), n
				}),
				h = Object(o.a)((e, {
					listingKey: t
				}) => {
					const s = e.features.comments.models,
						o = c(e, {
							listingKey: t
						}),
						n = {};
					return o.forEach(e => !!Object(l.a)(e) && (n[e] = s[e])), n
				}),
				f = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.error[t],
				y = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.pending[t],
				g = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.loadMore[t],
				v = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.fetchedTokens[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.13531f170c71071e79ad.js.map