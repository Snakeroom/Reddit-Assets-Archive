// https://www.redditstatic.com/desktop2x/ProfileOverview.2ea99de78380e17fe838.js
// Retrieved at 7/13/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return s(r(e, t), 1)
			}
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
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(i);
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
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
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
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return w
			}));
			var s = n("./node_modules/linkify-it/index.js"),
				r = n.n(s),
				o = n("./node_modules/tlds/index.js"),
				a = n.n(o),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				d = n("./node_modules/lodash/values.js"),
				c = n.n(d);
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
				y = r()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = r()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const g = (e, t) => {
					return (y.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				O = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				w = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(r.e)(e),
					a = encodeURIComponent(`${t}${o}`);
				return `${s.a.accountManagerOrigin}${n||"/login"}?dest=${a}`
			}
		},
		"./src/lib/makeOverviewConversationsItemKey/index.ts": function(e, t, n) {
			"use strict";
			t.a = (e, t) => {
				return `overviewConversations--[profile:'${t}']--[post:'${e}']`
			}
		},
		"./src/reddit/actions/pages/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "profileOverviewConversationsPending", (function() {
				return ge
			})), n.d(t, "profileOverviewConversationsLoaded", (function() {
				return Oe
			})), n.d(t, "profileOverviewConversationsFailed", (function() {
				return Ce
			})), n.d(t, "profileOverviewChronoPending", (function() {
				return we
			})), n.d(t, "profileOverviewChronoLoaded", (function() {
				return ke
			})), n.d(t, "profileOverviewChronoFailed", (function() {
				return Pe
			})), n.d(t, "profileOverviewConversationsRequested", (function() {
				return _e
			})), n.d(t, "profileOverviewChronoRequested", (function() {
				return je
			})), n.d(t, "profileOverviewRequested", (function() {
				return Ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/pick.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/moderatingSubreddits.ts"),
				a = n("./src/reddit/actions/pages/profileShared.ts"),
				i = n("./src/reddit/actions/subreddit.ts"),
				d = n("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/constants/parameters.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/selectors/listings.ts"),
				b = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				y = n("./src/lib/makeActionCreator/index.ts"),
				x = n("./src/reddit/actions/changeUsername.ts"),
				v = n("./src/reddit/actions/contentGate.ts"),
				g = n("./src/reddit/actions/externalAccount.ts"),
				O = n("./src/reddit/actions/gold/powerups.ts"),
				C = n("./src/reddit/actions/pinnedPost.ts"),
				w = n("./src/reddit/actions/platform.ts"),
				k = n("./src/reddit/actions/profile/index.ts"),
				P = n("./src/reddit/actions/trophyCase.ts"),
				_ = n("./src/reddit/constants/errors.ts"),
				j = n("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				E = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				N = n("./src/lib/initializeClient/installReducer.ts"),
				I = n("./node_modules/redux/es/redux.js"),
				L = n("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const T = {};
			var M = (e = T, t) => {
				switch (t.type) {
					case S.c:
					case S.b:
					case L.c:
					case L.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case S.a:
					case L.a: {
						const {
							key: n,
							error: s
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
			const D = {};
			var R = (e = D, t) => {
					switch (t.type) {
						case S.c:
						case L.c: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case S.b:
						case S.a:
						case L.b:
						case L.a: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				F = Object(I.c)({
					error: M,
					pending: R
				});
			const B = {};
			var U = (e = B, t) => {
				switch (t.type) {
					case S.b: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {}
						}
					}
					case L.b: {
						const {
							key: n,
							fetchedToken: s
						} = t.payload, r = e[n];
						return {
							...e,
							[n]: {
								...r,
								[s]: !0
							}
						}
					}
					default:
						return e
				}
			};
			const A = {};
			var H = (e = A, t) => {
					switch (t.type) {
						case S.b:
						case L.b: {
							const {
								key: n,
								overviewIds: s
							} = t.payload, r = e[n] || [];
							return {
								...e,
								[n]: [...r, ...s]
							}
						}
						default:
							return e
					}
				},
				W = n("./src/lib/omitKey/index.ts");
			const K = {};
			var z = (e = K, t) => {
					switch (t.type) {
						case S.b:
						case L.b: {
							const {
								key: n,
								dist: s,
								token: r
							} = t.payload;
							return r ? {
								...e,
								[n]: {
									dist: s,
									token: r
								}
							} : Object(W.a)(e, n)
						}
						default:
							return e
					}
				},
				Y = Object(I.c)({
					api: F,
					fetchedTokens: U,
					ids: H,
					loadMore: z
				});
			const q = {};
			var G = (e = q, t) => {
				switch (t.type) {
					case S.f:
					case S.e: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case S.d: {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s || {}
						}
					}
					default:
						return e
				}
			};
			const V = {};
			var X = (e = V, t) => {
					switch (t.type) {
						case S.f: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case S.e:
						case S.d: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				J = Object(I.c)({
					error: G,
					pending: X
				}),
				Q = n("./src/reddit/actions/profileConversations.ts");
			const Z = {};
			var $ = (e = Z, t) => {
				switch (t.type) {
					case Q.c:
					case Q.b: {
						const {
							extraCommentsId: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case Q.a: {
						const {
							extraCommentsId: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s || {}
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case Q.c: {
							const {
								extraCommentsId: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case Q.b:
						case Q.a: {
							const {
								extraCommentsId: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				ne = Object(I.c)({
					error: $,
					pending: te
				});
			const se = {};
			var re = (e = se, t) => {
					switch (t.type) {
						case S.e:
						case Q.b:
						case Q.e:
							return {
								...e, ...t.payload.extraComments
							};
						default:
							return e
					}
				},
				oe = Object(I.c)({
					api: ne,
					models: re
				}),
				ae = n("./node_modules/lodash/mapValues.js"),
				ie = n.n(ae),
				de = n("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				ce = n("./src/reddit/constants/comments.ts");
			const le = {};

			function me(e) {
				const t = e;
				return ie()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			const ue = (e, t, n) => {
				const s = {};
				for (const r in t) {
					const e = t[r],
						n = e.postId;
					s.hasOwnProperty(n) ? s[n] = {
						...s[n],
						[r]: e
					} : s[n] = {
						[r]: e
					}
				}
				for (const r in n) {
					const e = n[r],
						t = e.postId;
					s.hasOwnProperty(t) ? s[t] = {
						...s[t],
						[r]: e
					} : s[t] = {
						[t]: e
					}
				}
				return s
			};
			var pe = (e = le, t) => {
				switch (t.type) {
					case S.e:
					case Q.e: {
						const {
							comments: n,
							extraComments: s,
							postIds: r,
							profileName: o
						} = t.payload, a = ue(r, n, s), i = {};
						for (const e of r) {
							i[Object(de.a)(e, o)] = a.hasOwnProperty(e) ? me(a[e]) : {}
						}
						return {
							...e,
							...i
						}
					}
					case Q.b: {
						const {
							comments: n,
							commentLists: s,
							extraComments: r,
							extraCommentsId: o,
							postIds: a,
							profileName: i
						} = t.payload;
						if (0 === a.length) {
							const t = Object.keys(e).find(t => void 0 !== e[t][o]);
							if (!t) return e;
							const n = {
									...e[t]
								} [o].prev,
								s = n && n.id || "";
							return {
								...e,
								[t]: {
									...e[t],
									[s]: {
										...e[t][s],
										next: null
									}
								}
							}
						}
						const d = a[0],
							c = me(ue(a, n, r)[d]),
							l = Object(de.a)(d, i),
							m = {
								...e[l]
							},
							u = m[o].prev,
							p = u && u.id || "",
							b = s[d].head,
							h = b && b.id || "",
							f = {
								id: h,
								type: ce.a.Comment
							},
							y = {
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
							[l]: y
						}
					}
					default:
						return e
				}
			};
			const be = {};
			var he = (e = be, t) => {
				switch (t.type) {
					case S.e:
					case Q.e: {
						const {
							commentLists: n,
							postIds: s,
							profileName: r
						} = t.payload, o = {};
						for (const e of s) {
							o[Object(de.a)(e, r)] = n[e] && n[e].head ? n[e].head.id : null
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
			var ye = (e = fe, t) => {
					switch (t.type) {
						case S.e:
						case Q.e: {
							const {
								postIds: n,
								profileName: s
							} = t.payload, r = {};
							for (const e of n) {
								r[Object(de.a)(e, s)] = e
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
				xe = Object(I.c)({
					api: J,
					extraComments: oe,
					keyToCommentThreadLinkSets: pe,
					keyToHeadCommentId: he,
					keyToPostId: ye
				}),
				ve = Object(I.c)({
					chrono: Y,
					conversations: xe
				});
			Object(N.a)({
				pages: {
					profileOverview: ve
				}
			});
			const ge = Object(y.a)(S.f),
				Oe = Object(y.a)(S.e),
				Ce = Object(y.a)(S.d),
				we = Object(y.a)(S.c),
				ke = Object(y.a)(S.b),
				Pe = Object(y.a)(S.a),
				_e = (e, t, n, s) => async (s, r, o) => {
					const a = r(),
						i = !!a.listings.postOrder.ids[e],
						c = !!Object(p.c)(a, {
							listingKey: e
						});
					if (!!Object(p.d)(a, {
							listingKey: e
						}) || i && !c) return;
					s(ge({
						key: e
					}));
					const l = await Object(E.a)("profile", () => Object(d.b)(o.apiContext(), t, n)),
						m = l.body,
						{
							pinned: u,
							postIds: h
						} = m;
					if (l.ok) {
						s(Oe({
							key: e,
							meta: a.meta,
							profileName: t,
							...m,
							postIds: h
						}));
						const n = Object(b.m)(r(), t);
						s(Object(C.h)({
							profileId: n,
							pinned: u
						}))
					} else s(Ce({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === _.a.DeletedProfile && s(Object(v.p)({
						profileName: t
					})), s(Object(w.m)(l.status))
				}, je = (e, t, n, s) => async (s, r, o) => {
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
					s(we({
						key: e
					}));
					const l = await Object(E.a)("profile", () => Object(d.a)(o.apiContext(), t, n)),
						m = l.body,
						{
							pinned: u
						} = m;
					if (l.ok) {
						s(ke({
							key: e,
							meta: a.meta,
							...m
						}));
						const n = Object(b.m)(r(), t);
						s(Object(C.h)({
							profileId: n,
							pinned: u
						}))
					} else s(Pe({
						account: l.body.data ? l.body.data.account : null,
						error: l.body.reason ? {
							type: l.body.reason
						} : l.error,
						key: e
					})), l.body.reason === _.a.DeletedProfile && s(Object(v.p)({
						profileName: t
					})), s(Object(w.m)(l.status))
				}, Ee = e => async (t, n, s) => {
					const {
						queryParams: d,
						params: p
					} = e, {
						sort: h,
						t: y
					} = Object(a.a)(n(), d), {
						profileName: v
					} = p;
					let C = !1;
					const _ = l.e[Object(u.O)(n(), {})],
						E = v.toLowerCase(),
						S = {
							...r()(e.queryParams, m.l),
							sort: h,
							layout: _,
							t: y
						},
						N = [t(k.d(E))];
					if (_ === l.e[l.g.Compact]) {
						const s = Object(j.a)(E, c.rb, h, e.queryParams);
						n().pages.profileOverview.chrono.ids[s] ? C = !0 : N.push(t(je(s, E, S, !0)))
					} else {
						const s = Object(j.a)(E, c.sb, h, e.queryParams);
						n().listings.postOrder.ids[s] && !n().listings.postOrder.api.error[s] ? C = !0 : N.push(t(_e(s, E, S, !0)))
					}
					if (N.push(t(Object(o.b)())), await Promise.all(N), C) return;
					const I = n();
					if (!I.platform.currentPage) return;
					if (200 !== I.platform.currentPage.status) return;
					const L = Object(b.m)(n(), E),
						T = Object(f.nb)(I, {
							userName: v
						}).id;
					t(w.l({
						title: Se(n(), v)
					})), Object(f.M)(I) && Object(f.O)(I, v) && t(Object(x.f)());
					const M = [t(Object(i.q)()), t(P.b(E, L)), t(k.b(E)), t(g.o(v)), t(k.g(v)), t(O.j(v, T))];
					await Promise.all(M)
				}, Se = (e, t) => Object(b.q)(e, {
					profileName: t
				})
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function d(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, d = Object(o.e)(e => e.subreddits.questions), c = Object(o.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = n[r],
						t = c[e].belongsTo.id;
					p(e) && r - o >= i && !m.has(t) && (o = r, m.add(t), r === l && (u = !0))
				}
				return u ? r.a.createElement(a.a, {
					subredditId: s,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = d[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
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
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				f = n("./src/reddit/components/Footer/index.m.less"),
				y = n.n(f);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = l.a.div("FooterContainer", y.a), g = l.a.div("UserAgreement", y.a), O = l.a.a("UserAgreementLink", y.a), C = l.a.a("PrivacyLink", y.a);
			var w = () => o.a.createElement(v, null, o.a.createElement(g, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", o.a.createElement(O, {
					href: `${s.a.redditUrl}/help/useragreement`
				}, x._("User Agreement", null, {
					hk: "2srkM2"
				}))), x._param("=Privacy Policy", o.a.createElement(C, {
					href: `${s.a.redditUrl}/help/privacypolicy`
				}, x._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), x._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				k = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				P = n("./src/reddit/components/RichTextJson/index.tsx"),
				_ = n("./node_modules/lodash/flatMap.js"),
				j = n.n(_),
				E = n("./src/lib/linkMatchers/index.ts"),
				S = n("./src/lib/linkMatchers/customLinks.ts"),
				N = n("./src/reddit/controls/OutboundLink/index.tsx");
			const I = /\[(.+?)\]\((.+?)\)/g,
				L = e => {
					const t = e.split(I);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, o] = t.slice(s, s + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var T = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, L)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = E.f.add(S.g.subreddit.prefix, S.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return o.a.createElement(N.b, {
								className: e.linkClassName,
								href: s,
								key: n
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				M = n("./src/reddit/contexts/PageLayer/index.tsx"),
				D = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/chat/controls/Svg/index.tsx");

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var B = e => o.a.createElement(R.a, F({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				U = n("./src/reddit/models/ContentGate.ts"),
				A = n("./src/lib/constants/index.ts"),
				H = n("./src/reddit/selectors/platform.ts"),
				W = n("./src/reddit/selectors/user.ts");
			var K = n("./src/reddit/selectors/meta.ts"),
				z = n("./src/reddit/components/ContentGate/index.m.less"),
				Y = n.n(z);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = l.a.wrapped(B, "PrivateKey", Y.a), V = l.a.div("ButtonsContainer", Y.a), X = l.a.div("Container", Y.a), J = l.a.div("ContainerExp", Y.a), Q = l.a.div("Description", Y.a), Z = l.a.div("PrivateSubredditDetails", Y.a), $ = l.a.div("PrivateSubredditDescription", Y.a), ee = l.a.h3("PrivateSubredditName", Y.a), te = l.a.a("Link", Y.a), ne = l.a.wrapped(D.k, "LinkRouterButton", Y.a), se = l.a.wrapped(D.j, "LinkButton", Y.a), re = l.a.wrapped(D.n, "SecondaryLinkRouterButton", Y.a), oe = l.a.wrapped(D.m, "SecondaryLinkButton", Y.a), ae = l.a.wrapped(ne, "GoHomeLinkButton", Y.a), ie = l.a.wrapped(h.a, "CreateCommunityButton", Y.a), de = l.a.img("Image", Y.a), ce = l.a.img("ImagePlaceholder", Y.a), le = l.a.wrapped(ne, "LeftLinkRouterButton", Y.a), me = l.a.wrapped(se, "LeftLinkButton", Y.a), ue = l.a.wrapped(oe, "SecondaryLeftLinkButton", Y.a), pe = l.a.wrapped(re, "SecondaryLeftLinkRouterButton", Y.a), be = l.a.h3("Title", Y.a), he = l.a.div("PageBody", Y.a), fe = l.a.div("QuarantineMessageWrapper", Y.a), ye = Object(c.c)({
				isLoggedIn: W.J,
				origin: K.j,
				user: W.j,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(W.K)(e)) return !1;
					const t = Object(H.d)(e);
					if (!t) return !1;
					const n = Object(W.e)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const r = 30 * A.z;
					return s > Date.now() - r
				})(e)
			}), xe = Object(M.t)(), ve = Object(a.b)(ye, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(p.A(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), ge = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: a,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: d,
					location: c,
					origin: l,
					pageLayer: p,
					quarantineRequiresEmail: h,
					quarantineMessage: f,
					quarantineMessageHtml: y,
					quarantineMessageRTJson: x,
					setNSFWPreference: v,
					subredditDescription: g,
					subredditName: O,
					user: C
				} = e, w = async () => {
					a ? await v() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case U.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(de, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(be, null, q._("r/{community name} is a Reddit Premium community", [q._param("community name", O)], {
							hk: "2lyDwB"
						})), o.a.createElement(Q, null, q._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(V, null, C ? o.a.createElement(ue, {
							href: `${s.a.redditUrl}/premium`
						}, q._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(me, {
							href: Object(m.a)(c, l)
						}, q._("Sign Up", null, {
							hk: "rvpjy"
						})), C ? o.a.createElement(ne, {
							to: "/"
						}, q._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(oe, {
							href: Object(m.a)(c, l)
						}, q._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case U.a.Nsfw:
					case U.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(de, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(be, null, n === U.a.Nsfw ? q._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : q._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(Q, null, q._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(V, null, o.a.createElement(le, {
							to: "/"
						}, q._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(oe, {
							onClick: w
						}, q._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case U.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(G, null), o.a.createElement(be, null, "r/", O, " ", q._("is a private community", null, {
							hk: "7zZmq"
						})), g && g.length && o.a.createElement(Z, null, o.a.createElement(ee, null, "r/", O), o.a.createElement($, null, o.a.createElement("div", null, g))), o.a.createElement(Q, null, q._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", O, " ", q._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), q._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(V, null, C ? o.a.createElement(o.a.Fragment, null, !i && o.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: Y.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), o.a.createElement(ue, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${O}`
						}, q._("Message Mods", null, {
							hk: "vVe1i"
						}))) : o.a.createElement(ue, {
							href: Object(m.a)(c, l)
						}, q._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(ne, {
							to: "/"
						}, q._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case U.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(de, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(be, null, q._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(Q, null, q._("This community is {=quarantined}", [q._param("=quarantined", o.a.createElement(te, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, q._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(fe, null, x ? o.a.createElement(P.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: p
							}
						}) : y ? o.a.createElement(k.a, {
							html: y
						}) : f || q._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), q._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(V, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(V, null, o.a.createElement(pe, {
								to: "/"
							}, q._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(se, {
								href: `${s.a.redditUrl}/prefs/update`
							}, q._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(V, null, o.a.createElement(le, {
								to: "/"
							}, q._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(oe, {
								onClick: t
							}, q._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(C, r, h)));
					case U.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(de, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(be, null, q._("r/{community name} has been banned from Reddit", [q._param("community name", O)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(Q, null, e ? o.a.createElement(T, {
							linkClassName: Y.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : q._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(V, null, o.a.createElement(ne, {
							to: "/"
						}, q._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(de, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(be, null, q._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(V, null, o.a.createElement(ne, {
							to: "/"
						}, q._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case U.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ce, null), o.a.createElement(be, null, q._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(Q, null, q._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(V, null, C && o.a.createElement(ie, {
							eventSource: "content_gate"
						}), o.a.createElement(ae, {
							to: "/"
						}, q._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.ProfileDoesNotExist:
					case U.a.ProfileDeleted:
					case U.a.ProfileSuspended:
					case U.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(de, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(be, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case U.a.ProfileBlockedForLegalReason:
									return q._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case U.a.ProfileDeleted:
									return q._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case U.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, q._("This account has been {=suspended} .", [q._param("=suspended", o.a.createElement(te, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, q._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case U.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(be, null, q._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(Q, null, q._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(V, null, o.a.createElement(ae, {
							to: "/"
						}, q._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(de, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(be, null, q._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(V, null, o.a.createElement(ae, {
							to: "/"
						}, q._("Go Home", null, {
							hk: "49p4or"
						}))));
					case U.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(de, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(be, null, q._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(V, null, o.a.createElement(ne, {
							to: "/"
						}, q._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = xe(ve(Object(i.i)(e => {
				const t = Object(r.useContext)(d.a) ? J : X;
				return o.a.createElement(t, null, o.a.createElement("div", null, o.a.createElement(he, null, ge(e))), o.a.createElement(w, null))
			})))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/getSrCreationEntrypointCopy.ts"),
				b = n("./src/reddit/helpers/overlay/index.ts"),
				h = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				f = n("./src/reddit/selectors/experiments/srCreationEntrypoints.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				v = n.n(x),
				g = n("./src/lib/lessComponent.tsx");
			const O = "create-community-button",
				C = g.a.wrapped(c.c, "StyledTooltip", v.a),
				w = Object(i.c)({
					isInSrCreationEntrypointBehaviorExperiment: f.a,
					isInSrCreationEntrypointCopyExperiment: f.b,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(y.hb)(e),
					userIsSuspended: y.P
				});
			t.a = Object(a.b)(w, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(h.c)(t)), e(Object(b.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: O
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				isInSrCreationEntrypointBehaviorExperiment: n,
				isInSrCreationEntrypointCopyExperiment: r,
				onShowTooltip: a,
				onHideTooltip: i,
				openCommunityCreation: d,
				sendEvent: c,
				userDoesNotHaveEnoughExpToCreateCommunity: l,
				userIsSuspended: b
			}) => o.a.createElement(u.q, {
				className: e,
				disabled: b || l,
				onClick: () => n === m.Ed.Tabs ? window.open("/subreddits/create", "_blank") : d(c),
				onMouseEnter: a,
				onMouseLeave: i,
				priority: u.b.Secondary,
				id: O,
				isFullWidth: !0
			}, Object(p.a)(r, s.fbt._("Create Community", null, {
				hk: "28v7Qq"
			})), l ? o.a.createElement(C, {
				caretOnTop: !0,
				tooltipId: O,
				text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : b ? o.a.createElement(C, {
				caretOnTop: !0,
				tooltipId: O,
				text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("InFeedChaining")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
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
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/preferences.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				y = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				w = n.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "view--layout--FUE",
				_ = "LayoutSwitch--picker",
				j = Object(d.a)(y.a),
				E = {
					[b.d.Card]: function(e) {
						return o.a.createElement(v.a, k({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(v.a, k({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(v.a, k({}, e, {
							name: "view_compact"
						}))
					}
				},
				S = {
					[b.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				N = Object(h.t)(),
				I = Object(i.c)({
					dropdownIsOpen: Object(O.b)(_),
					postLayout: h.O,
					redditStyle: h.A
				}),
				L = Object(a.b)(I, e => ({
					onListingLayoutChange: (t, n) => e(Object(m.v)(t, n)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: _
					}))
				}));
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(g.screen)(t),
							subreddit: Object(g.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: r
						} = this.props, a = n || b.e[r], i = e === a, d = E[e], l = S[e];
						return o.a.createElement(x.b, k({}, t, {
							className: Object(c.a)(w.a.LayoutItem, {
								[w.a.selected]: i,
								[w.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: w.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: w.a.LayoutItemTextClassName
						}), o.a.createElement(d, {
							className: w.a.LayoutIcon,
							onClick: i ? void 0 : s,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(j, k({}, e, {
							className: w.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: w.a.DropdownRow,
							rowIconClassName: w.a.DropdownRowIcon,
							rowSelectedClassName: w.a.DropdownRowSelected,
							tooltipId: _
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, r = t || b.e[s];
					return o.a.createElement("div", {
						className: Object(c.a)(w.a.Container, e),
						id: P
					}, o.a.createElement("div", {
						className: w.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: _,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(L(Object(p.c)(Object(l.a)(T))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				d = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				b = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				y = n("./src/reddit/actions/tooltip.ts"),
				x = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./src/higherOrderComponents/asTooltip.tsx"),
				g = n("./src/reddit/constants/listingSorts.ts"),
				O = n("./src/reddit/contexts/Tooltip.ts"),
				C = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				k = n("./src/reddit/helpers/path/index.ts"),
				P = n("./src/reddit/helpers/trackers/navigation.ts"),
				_ = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				E = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				S = n("./src/reddit/selectors/tooltip.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = n("./src/reddit/components/ListingSort/index.m.less"),
				T = n.n(L),
				M = n("./src/lib/lessComponent.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const R = "ListingSort--SortPicker",
				F = Object(v.a)(M.a.wrapped(C.a, "Dropdown", T.a)),
				B = M.a.wrapped(I.a, "ListingSortIcon", T.a),
				U = (M.a.wrapped(_.b, "DropdownTriangle", T.a), M.a.div("Title", T.a)),
				A = M.a.wrapped(e => r.a.createElement(w.b, D({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", T.a),
				H = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", D({}, t, {
					className: Object(a.a)(T.a.SortWrapper, t.className, {
						[T.a.isDisabled]: e
					})
				})),
				W = M.a.div("DropdownRowDisabled", T.a),
				K = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				z = Object(f.c)({
					isAwardListingExperimentEnabled: E.a,
					isBestSortPopularEnabled: j.a,
					user: N.j,
					dropdownIsOpen: (e, t) => Object(S.b)(t.dropdownId || R)(e),
					isPopularPage: l.C
				}),
				Y = Object(o.b)(z, (e, {
					dropdownId: t,
					pageLayer: n
				}) => ({
					onOpenDropdown: () => e(Object(y.h)({
						tooltipId: t || R
					}))
				}));
			var q = M.a.wrapped(K(Y(Object(c.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(U, null, x.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(H, {
					disabled: e.disabled
				}, e.children || r.a.createElement(A, {
					className: e.buttonClassName,
					displayText: Object(g.a)(e.sort),
					id: e.dropdownId || R,
					showDropdownTriangle: !0
				}, r.a.createElement(B, {
					sort: e.sort
				}))), r.a.createElement(O.a.Consumer, null, t => r.a.createElement(F, D({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || R
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(W, null, x.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s, r) => {
					const o = [b.U.HOT, b.U.NEW, b.U.TOP, b.U.RISING];
					return (e && (n || s) || t && s) && o.unshift(b.U.BEST), t && r && o.splice(3, 0, b.U.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => r.a.createElement(w.b, {
					className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(g.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(P.a)(t))
					},
					href: e.isProfilePage ? Object(p.a)(e.baseUrl, {
						sort: t
					}) : Object(k.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, r.a.createElement(B, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", T.a),
				G = n("./src/reddit/constants/parameters.ts");
			const V = e => {
					const t = X[e];
					return t && t() || ""
				},
				X = {
					[b.Yb.AllStates]: () => x.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[b.Yb.Alaska]: () => x.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.Yb.Alabama]: () => x.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.Yb.Arkansas]: () => x.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.Yb.Arizona]: () => x.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.Yb.California]: () => x.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.Yb.Colorado]: () => x.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.Yb.Connecticut]: () => x.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.Yb.DistrictOfColumbia]: () => x.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.Yb.Delaware]: () => x.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.Yb.Florida]: () => x.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.Yb.Georgia]: () => x.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.Yb.Hawaii]: () => x.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.Yb.Iowa]: () => x.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.Yb.Idaho]: () => x.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.Yb.Illinois]: () => x.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.Yb.Indiana]: () => x.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.Yb.Kansas]: () => x.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.Yb.Kentucky]: () => x.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.Yb.Louisiana]: () => x.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.Yb.Massachusetts]: () => x.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.Yb.Maryland]: () => x.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.Yb.Maine]: () => x.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.Yb.Michigan]: () => x.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.Yb.Minnesota]: () => x.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.Yb.Missouri]: () => x.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.Yb.Mississippi]: () => x.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.Yb.Montana]: () => x.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.Yb.NorthCarolina]: () => x.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.Yb.NorthDakota]: () => x.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.Yb.Nebraska]: () => x.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.Yb.NewHampshire]: () => x.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.Yb.NewJersey]: () => x.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.Yb.NewMexico]: () => x.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.Yb.Nevada]: () => x.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.Yb.NewYork]: () => x.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.Yb.Ohio]: () => x.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.Yb.Oklahoma]: () => x.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.Yb.Oregon]: () => x.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.Yb.Pennsylvania]: () => x.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.Yb.RhodeIsland]: () => x.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.Yb.SouthCarolina]: () => x.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.Yb.SouthDakota]: () => x.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.Yb.Tennessee]: () => x.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.Yb.Texas]: () => x.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.Yb.Utah]: () => x.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.Yb.Virginia]: () => x.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.Yb.Vermont]: () => x.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.Yb.Washington]: () => x.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.Yb.Wisconsin]: () => x.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.Yb.WestVirginia]: () => x.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.Yb.Wyoming]: () => x.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = n("./src/reddit/components/StateSort/index.m.less"),
				Q = n.n(J);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = M.a.wrapped(C.a, "_Dropdown", Q.a),
				ee = Object(v.a)($),
				te = e => {
					return e.indexOf("_") > 0 && se(e) === b.y.UnitedStates
				},
				ne = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return b.Yb.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				re = e => {
					const t = se(e),
						n = ne(e);
					return te(e) ? `${t}_${n}` : t
				},
				oe = Object(l.t)(),
				ae = Object(f.c)({
					dropdownIsOpen: Object(S.b)("StateSort--StateSortPicker")
				}),
				ie = Object(o.b)(ae, e => ({
					onOpenDropdown: () => e(Object(y.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(d.t)(b.y.UnitedStates + "_" + n))
					}
				}));
			var de = M.a.wrapped(oe(ie(e => {
				const t = `${e.baseUrl}?${G.h}=${b.y.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(A, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : V(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(O.a.Consumer, null, n => r.a.createElement(ee, Z({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.Yb).map(n => {
					const s = b.Yb[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.Yb.AllStates ? t : `${t}_${e}`)(s), re(s))
					}, r.a.createElement(w.b, {
						className: Object(a.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: V(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", Q.a);
			const ce = {
				[b.y.Everywhere]: () => x.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.y.UnitedStates]: () => x.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.y.Argentina]: () => x.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.y.Australia]: () => x.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.y.Bulgaria]: () => x.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.y.Canada]: () => x.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.y.Chile]: () => x.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.y.Colombia]: () => x.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.y.Croatia]: () => x.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.y.CzechRepublic]: () => x.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.y.Finland]: () => x.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.y.France]: () => x.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.y.Germany]: () => x.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.y.Greece]: () => x.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.y.Hungary]: () => x.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.y.Iceland]: () => x.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.y.India]: () => x.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.y.Ireland]: () => x.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.y.Italy]: () => x.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.y.Japan]: () => x.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.y.Malaysia]: () => x.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.y.Mexico]: () => x.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.y.NewZealand]: () => x.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.y.Philippines]: () => x.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.y.Poland]: () => x.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.y.Portugal]: () => x.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.y.PuertoRico]: () => x.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.y.Romania]: () => x.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.y.Serbia]: () => x.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.y.Singapore]: () => x.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.y.Spain]: () => x.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.y.Sweden]: () => x.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.y.Taiwan]: () => x.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.y.Thailand]: () => x.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.y.Turkey]: () => x.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.y.UnitedKingdom]: () => x.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var le = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(le);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				be = Object(l.t)(),
				he = Object(f.c)({
					dropdownIsOpen: Object(S.b)(pe)
				});
			var fe = be(Object(o.b)(he, e => ({
					onCloseDropdown: t => e(Object(y.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(y.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(d.t)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = ne(e.sort),
						s = `${e.baseUrl}?${G.h}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, r.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(A, {
						className: e.buttonClassName,
						displayText: (() => t in ce ? ce[t]() : ce[b.y.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), r.a.createElement(O.a.Consumer, null, n => r.a.createElement(ee, ue({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.y).map(n => {
						const o = b.y[n];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${s}${re(o)}`, o)
						}, r.a.createElement(w.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: ce[o](),
							isSelected: t === o
						}))
					})))), t === b.y.UnitedStates && r.a.createElement(de, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ye = n("./node_modules/path-browserify/index.js"),
				xe = n.n(ye),
				ve = n("./src/reddit/components/TimeSort/index.m.less"),
				ge = n.n(ve);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ce = Object(v.a)(C.a),
				we = (e, t, n) => {
					let s = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (s = xe.a.join(s, t)), Object(p.a)(s, {
						[G.x]: n
					})
				},
				ke = M.a.div("ListingSortContainer", ge.a),
				Pe = Object(l.t)(),
				_e = Object(f.c)({
					dropdownIsOpen: Object(S.b)("TimeSort--SortPicker")
				});
			var je = Pe(Object(o.b)(_e, e => ({
					onOpenDropdown: () => e(Object(y.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(c.c)(e => r.a.createElement(ke, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(A, {
					className: e.buttonClassName,
					displayText: Object(g.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(O.a.Consumer, null, t => r.a.createElement(Ce, Oe({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.bc.HOUR, b.bc.DAY, b.bc.WEEK, b.bc.MONTH, b.bc.YEAR, b.bc.ALL].map(t => r.a.createElement(w.b, {
					className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(g.b)(t),
					href: we(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(P.c)(t))
					}
				})))))))),
				Ee = n("./src/reddit/constants/listings.ts"),
				Se = n("./src/reddit/controls/Button/index.tsx"),
				Ne = n("./src/reddit/icons/fonts/index.tsx"),
				Ie = n("./src/reddit/selectors/meta.ts"),
				Le = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = n.n(Le);

			function Me() {
				return (Me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const De = new Set([b.U.CONTROVERSIAL, b.U.TOP]),
				Re = new Set([b.U.CONTROVERSIAL, b.U.RISING]),
				Fe = "ListingSort--Overflow",
				Be = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ue = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, N.j, l.C, E.a, Ie.i, (e, t, n, s, r, o, a) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: a
					};
					const i = [b.U.HOT, b.U.NEW, b.U.TOP, b.U.RISING];
					return (t && (s || n) || r && n) && i.unshift(b.U.BEST), r && o && i.splice(3, 0, b.U.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: a
					}
				});
			class Ae extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(P.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(p.a)(t, {
							sort: e
						}) : Object(k.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(Se.q, {
							className: Object(a.a)(Te.a.SortLink, e === t && Te.a.selected),
							kind: Se.a.InternalLink,
							priority: Se.b.Plain,
							Icon: n => r.a.createElement(B, Me({}, n, {
								className: Object(a.a)(Te.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(g.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: s,
							sort: o
						} = this.props, a = s && !!n && e === b.U.HOT && o === b.U.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && r.a.createElement(fe, {
							baseUrl: Ee.c[Ee.b.Popular],
							buttonClassName: Te.a.DropdownButton,
							className: Te.a.CountrySort,
							disabled: t,
							dropdownClassName: Te.a.Dropdown,
							rowClassName: Te.a.DropdownRow,
							rowSelectedClassName: Te.a.DropdownRowSelected,
							wrapperClassName: Te.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Te.a.StateSort
						}))
					}
				}
				isLocaleDependentSortOverflow(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: s
					} = this.props;
					return !s.startsWith("en") && (n ? e === b.U.AWARDED && (t === b.U.HOT || t === b.U.TOP) : e === b.U.BEST && t === b.U.TOP)
				}
				isOverflowSort(e) {
					return Re.has(e) || this.isLocaleDependentSortOverflow(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: s,
						sortOptions: o,
						timeSort: i
					} = this.props, d = !t && De.has(s), c = Re.has(s), l = o.filter(e => !this.isOverflowSort(e)), m = o.filter(e => this.isOverflowSort(e) && e !== s);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(q, Me({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(a.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(Te.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(s), d && r.a.createElement(je, {
						baseUrl: this.getSortUrl(s),
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: i || b.cc,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), m.length > 0 && r.a.createElement(q, Me({}, this.props, {
						className: Object(a.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: Fe,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), r.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: Fe
					}, r.a.createElement(Ne.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = Be(Object(o.b)(Ue)(Object(c.c)(Ae))),
				We = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ke = n.n(We);
			const ze = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ye = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (n, s) => {
						if (t) {
							const r = Object(i.c)({
								sort: n,
								timeSort: s
							});
							e(Object(d.G)(t, r))
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
						countrySort: n,
						disabled: s = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: d,
						subredditId: c,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(Ke.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(He, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: l
					}), !o && r.a.createElement(u.a, {
						className: Ke.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = ze(Ye(Object(c.c)(qe)))
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/LargePost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = n("./src/reddit/actions/inFeedChaining.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/tooltip.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				f = n("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				y = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				x = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/models/Post/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				w = n("./src/reddit/selectors/experiments/econ/index.ts"),
				k = n("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				P = n("./src/reddit/selectors/inFeedChaining.ts"),
				_ = n("./src/reddit/selectors/moderatorPermissions.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				S = n("./src/lib/ads/index.ts"),
				N = n("./src/lib/classNames/index.ts"),
				I = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				L = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				T = n("./src/reddit/components/AwardBadges/index.tsx"),
				M = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				D = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				R = n("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				F = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = n("./src/reddit/components/Flatlist/index.tsx"),
				U = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = n("./src/reddit/components/ModModeReports/index.tsx"),
				H = n("./src/reddit/components/ModModeReports/helpers.ts"),
				W = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				K = n("./src/reddit/components/PostContainer/index.tsx"),
				z = n("./src/reddit/components/PostLeftRail/index.tsx"),
				Y = n("./src/reddit/components/PostMedia/index.tsx"),
				q = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				G = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				V = n("./src/reddit/components/PostPinnedHeader/index.m.less"),
				X = n.n(V);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Q = () => r.a.createElement("div", {
					className: X.a.container
				}, r.a.createElement(G.a, {
					className: X.a.pinnedIcon,
					isFilled: !0
				}), r.a.createElement("span", {
					className: X.a.metaText
				}, J._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				Z = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				$ = n("./src/reddit/components/PostTitle/index.tsx"),
				ee = n("./src/reddit/components/PostTopLine/index.tsx"),
				te = n("./src/reddit/components/SourceLink/index.tsx"),
				ne = n("./src/reddit/contexts/InsideOverlay.tsx"),
				se = n("./src/reddit/contexts/PageLayer/index.tsx"),
				re = n("./src/reddit/contexts/Post/index.tsx"),
				oe = n("./src/reddit/helpers/isCrosspost.ts"),
				ae = n("./src/reddit/helpers/postEvent.ts"),
				ie = n("./src/reddit/constants/experiments.ts"),
				de = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ce = n("./src/reddit/helpers/getRichTextContent/index.ts");
			const le = Object(i.a)(j.L, e => e.some(ce.c)),
				me = Object(i.a)(le, e => e),
				ue = (e, t) => Object(de.c)(e, {
					experimentName: ie.xb,
					experimentEligibilitySelector: e => {
						const {
							listingKey: n
						} = t;
						return !!n && me(e, {
							listingKey: n
						})
					}
				});
			var pe = n("./src/reddit/selectors/postFlair.ts"),
				be = n("./src/reddit/components/PostTopMeta/index.tsx"),
				he = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				fe = n.n(he),
				ye = n("./src/reddit/selectors/i18n/index.ts"),
				xe = n("./src/reddit/components/LargePost/index.m.less"),
				ve = n.n(xe);
			const ge = (e, t) => {
					const {
						listingKey: n
					} = t;
					return n ? Object(j.L)(e, {
						listingKey: n
					}) : void 0
				},
				Oe = Object(o.b)(() => Object(i.c)({
					autoplayPref: E.b,
					activeModalId: C.a,
					hideNSFWPref: E.C,
					flairStyleTemplate: se.S,
					isCurrentUserProfilePost: j.k,
					isLoggedIn: E.K,
					isActive: j.j,
					isPostChainDismissed: P.c,
					isPostChained: P.d,
					moderatorPermissions: _.k,
					modModeEnabled: se.Q,
					posts: ge,
					postHeightVariant: ue,
					shouldShowNsfwListingBelow: ye.b,
					showEditFlair: pe.a,
					showAwardsPlaque: k.a,
					isTournamentPost: (e, {
						post: t
					}) => Boolean(t.predictionTournament) && Object(w.n)(e)
				}), (e, {
					listingKey: t,
					listingName: n,
					postId: s
				}) => ({
					chainPost: () => {
						n && t && e(Object(u.d)({
							listingKey: t,
							listingName: n,
							postId: s
						}))
					},
					handleVote: t => {
						const n = t === O.a.upvoted ? Object(p.fb)(s) : Object(p.w)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(p.bb)(s)),
					onOpenReportsDropdown: t => e(Object(b.h)({
						tooltipId: t
					}))
				})),
				Ce = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						chainPost: o,
						className: i,
						currentUser: u,
						eventFactory: p,
						flairStyleTemplate: b,
						forceLoadMedia: O,
						hideNSFWPref: C,
						hostPostData: w,
						imageGalleryCurrentItem: k,
						inSubredditOrProfile: P = !1,
						isCommentsPage: _,
						isCurrentUserProfilePost: j,
						isFrontpage: E,
						isGalleryTileLayoutDefault: G,
						isLoggedIn: V,
						isOverlay: X,
						isPostChainDismissed: J,
						isPostChained: ne,
						isTopicPage: se,
						isTournamentPost: re,
						isCommentCountAnimationEnabled: de,
						isVoteCountAnimationEnabled: ce,
						isCountAnimShadowTestEnabled: le,
						listingKey: me,
						listingName: ue,
						moderatorPermissions: pe,
						modModeEnabled: he,
						onClickPost: ye,
						onIgnoreReports: xe,
						onOpenReportsDropdown: ge,
						post: Oe,
						postHeightVariant: Ce,
						scrollerItemRef: we,
						shouldShowGalleryTileOption: ke,
						shouldShowNsfwListingBelow: Pe,
						showAwardsPlaque: _e,
						showEditFlair: je,
						subredditOrProfile: Ee,
						userIsOp: Se,
						postId: Ne,
						postIds: Ie,
						onceInViewport: Le
					} = e, Te = !!e.redditStyle || !!e["data-redditstyle"], Me = Te ? void 0 : b, De = Object(l.a)(pe), Re = he && De, Fe = Object(d.a)(pe), Be = Object(c.a)(pe), Ue = Object(H.c)(Oe), Ae = !!Oe.media && Oe.media.type === v.o.RTJSON, He = Se && Ae, We = n ? n - z.a : void 0, Ke = !(E && V || se), ze = (e => e === ie.Zc.OnlyTitles)(Ce) && !Object(oe.a)(Oe), Ye = (e => e === ie.Zc.MediumHeight)(Ce) && !Object(oe.a)(Oe), qe = (e => {
						const {
							post: t,
							postIds: n,
							posts: s
						} = e;
						if (!Object(g.q)(t)) return;
						const r = n && 0 === n.indexOf(t.id),
							o = n && 1 === n.indexOf(t.id),
							a = s && s[1] && Object(g.q)(s[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: o,
							showPinnnedHeader: r
						}
					})(e), Ge = !!(null == w ? void 0 : w.shouldShowLinkedPosts), Ve = (!P || Ge || Pe) && !Oe.isSponsored, Xe = Object(S.t)(Oe, k), {
						source: Je
					} = Xe, Qe = Object(s.useRef)(null), Ze = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Le || Le())
						})
					}, [Le]);
					Object(x.a)(Qe, Ze);
					const $e = r.a.createElement(K.a, {
						className: Object(N.a)(ve.a.container, i, fe.a.largeAndMediumPostStyles, fe.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[fe.a.mUseRedditTheme]: Te,
							promotedvideolink: Oe.isSponsored && !(Oe.media && v.a.has(Oe.media.type)),
							[ve.a.topCompactPost]: qe && qe.hasTopCompactPostStyles,
							[ve.a.bottomCompactPost]: qe && qe.hasBottomCompactPostStyles
						}),
						isOverlay: X,
						style: Object(m.b)(e.flairStyleTemplate),
						post: Oe,
						onClick: ye,
						onPostContentClick: o,
						eventFactory: p
					}, r.a.createElement("div", {
						ref: Qe
					}), r.a.createElement(Z.a, {
						model: Oe,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: le,
						isVoteCountAnimation: ce,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: Me,
						redditStyle: Te,
						subreddit: Ee,
						postId: Ne
					}), r.a.createElement(W.a, {
						className: Object(N.a)(ve.a.backgroundWrapper, {
							[ve.a.isEvent]: Object(ae.a)(Oe)
						}),
						"data-click-id": "background",
						flairStyleTemplate: Me,
						post: Oe,
						redditStyle: Te
					}, r.a.createElement(F.a, {
						post: Oe
					}), qe && qe.showPinnnedHeader && r.a.createElement(Q, null), re && Object(a.b)(Oe) && r.a.createElement(r.a.Fragment, null, r.a.createElement(f.a, {
						post: Oe
					}), r.a.createElement(h.a, {
						post: Oe
					})), !re && r.a.createElement(r.a.Fragment, null, r.a.createElement(ee.a, {
						className: ve.a.postTopLine,
						hideAwards: _e,
						hideNSFWPref: C,
						hostPostData: w,
						iconClassName: ve.a.postTopLineIcon,
						inSubredditOrProfile: P,
						isCommentsPage: !!_,
						isCompactPinnedPost: !!qe,
						isCurrentUserProfilePost: j,
						isOverlay: !!X,
						isTopicPage: !!se,
						listingKey: me,
						post: Oe,
						shouldShowSubscribeButton: Ke,
						showSubreddit: Ve,
						showSubredditIcon: !0,
						subredditOrProfile: Ee
					}), r.a.createElement($.c, {
						className: ve.a.postTitle,
						post: Oe,
						redditStyle: Te,
						size: $.b.Large,
						titleColor: Me && Me.postTitleColor,
						isOverlay: X
					}), Oe.source && !Oe.isSponsored && !(Oe.media && Object(v.G)(Oe.media)) && r.a.createElement(te.a, {
						className: ve.a.sourceLink,
						post: Oe
					})), r.a.createElement("div", {
						className: ve.a.postMediaWrapper
					}, !qe && r.a.createElement(Y.a, {
						isGalleryTileLayoutDefault: G,
						isListing: !0,
						isMediumHeight: Ye,
						isNotCardView: !!X,
						isTitleOnly: ze,
						showCentered: !0,
						flairStyleTemplate: Me,
						post: Oe,
						availableWidth: We,
						shouldLoad: O,
						scrollerItemRef: we,
						autoplayPref: t,
						shouldShowGalleryTileOption: ke
					})), Oe.isSponsored && Je && Je.url && r.a.createElement(I.a, {
						className: ve.a.adLinkWrapper
					}, r.a.createElement(L.a, {
						post: Oe,
						adLinkContent: Xe
					})), he && De && Ue && r.a.createElement(A.a, {
						onIgnoreReports: xe,
						reportable: Oe
					}), r.a.createElement(U.d, null), _e && r.a.createElement(T.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: Oe,
						tooltipType: X ? be.c.Lightbox : void 0
					}), r.a.createElement("div", {
						className: ve.a.flatListContainer
					}, r.a.createElement(D.a, {
						className: ve.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Me,
						model: Oe,
						onVoteClick: e.handleVote
					}), r.a.createElement(B.c, {
						currentUser: u,
						hasModFlairPerms: Fe,
						hasModFullPerms: Be,
						hasModPostPerms: De,
						hostPostData: w,
						isCommentCountAnimation: de,
						isCountAnimShadowTestEnabled: le,
						isLargePost: !0,
						isOverlay: !!X,
						listingKey: me,
						modModeEnabled: he,
						onIgnoreReports: xe,
						onOpenReportsDropdown: ge,
						post: Oe,
						showEditPost: He,
						showEditFlair: je,
						useFlatlistBreakpoints: Object(q.b)({
							editPost: !1,
							save: !Re,
							hide: !1,
							report: !1
						})
					}))), E && r.a.createElement(M.a, {
						post: Oe,
						postIds: null != Ie ? Ie : [],
						subredditId: null == Ee ? void 0 : Ee.id
					}));
					return r.a.createElement(y.b, null, $e, ne && !J && r.a.createElement(R.a, {
						className: ve.a.chain,
						listingKey: me,
						listingName: ue,
						postId: Oe.id
					}))
				});
			Ce.displayName = "LargePostMemoized";
			t.default = Object(re.b)(Oe(Object(ne.b)(Ce)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(d);
			const l = {
				[a.U.BEST]: "best",
				[a.U.HOT]: "hot",
				[a.U.NEW]: "new",
				[a.U.CONTROVERSIAL]: "controversial",
				[a.U.TOP]: "top",
				[a.U.RISING]: "rising",
				[a.U.AWARDED]: "award"
			};

			function m({
				className: e,
				isFilled: t,
				sort: n
			}) {
				return l[n] ? r.a.createElement(i.a, {
					name: l[n],
					isFilled: t,
					className: Object(o.a)(e, c.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				d = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = n("./src/reddit/helpers/name/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = n.n(u);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: n,
					hideNSFWPref: r,
					post: u,
					subredditOrProfile: b
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.container, t)
				}, o.a.createElement(c.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, o.a.createElement(d.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: b
				}), o.a.createElement("span", null, b.displayText)), ((e, t) => {
					if (t) return o.a.createElement("div", {
						role: "img",
						"aria-label": s.fbt._("Crossposted by{author}from{community}", [s.fbt._param("author", Object(l.d)(e)), s.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, o.a.createElement(m.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(u.author, n), b && b.isQuarantined && o.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Thumbnail/index.tsx"),
				i = n("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				d = n.n(i);

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
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/OverviewChronoList/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_31Psg18W6Dm5EvcCqvaQm2",
				component: "_31Psg18W6Dm5EvcCqvaQm2",
				ComponentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb",
				componentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, n) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				isFirst: e,
				isLast: t,
				...n
			}) => r.a.createElement("div", d({
				className: Object(o.a)(i.a.border, {
					[i.a.isFirst]: e,
					[i.a.isLast]: t
				})
			}, n))
		},
		"./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less": function(e, t, n) {
			e.exports = {
				ExtraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				extraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				ExtraComments: "_35d97uauE52jtrUNWw8B4i",
				extraComments: "_35d97uauE52jtrUNWw8B4i",
				ExtraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS",
				extraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/times.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/gold.ts"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/CommentContainer/index.tsx"),
				p = n("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/helpers/getClickInfo.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				y = n("./src/reddit/selectors/communityAwards.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				g = n.n(v);
			const O = m.a.div("ProfileOwnerCommentWrapper", g.a),
				C = m.a.div("CommentContentWrapper", g.a),
				w = m.a.div("Wrapper", g.a),
				k = m.a.div("CommentSeparator", g.a),
				P = Object(i.b)(() => Object(d.c)({
					comment: (e, t) => Object(f.a)(e, t),
					isAwarded: (e, t) => {
						const n = Object(f.a)(e, t);
						return !(!n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
							const n = Object(y.a)(e, t);
							return n && n.coinPrice >= c.g
						})
					},
					isNightmodeOn: x.W
				}), e => ({
					openPost: t => e(Object(b.M)(t))
				}));
			class _ extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: n,
						openPost: s,
						isAwarded: o,
						isFirst: i,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: p
					} = this.props, b = m === e.author ? j : E;
					return a.a.createElement(u.a, {
						comment: e,
						onClick: (e, t) => {
							s({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(w, {
						className: Object(l.a)({
							[g.a.isFirst]: i,
							[g.a.isLast]: d,
							[g.a.isAwarded]: o,
							[g.a.isNightmodeOn]: c
						})
					}, r()(n + 1, e => a.a.createElement(k, {
						key: e
					})), a.a.createElement(C, null, b(t, m, p))))
				}
			}
			const j = (e, t, n) => a.a.createElement(O, null, E(e, t, n, !0, !0)),
				E = (e, t, n, s = !1, r) => a.a.createElement(p.a, {
					commentId: e,
					commentsPageKey: "profileOverviewPageKey",
					showFlatlist: s,
					showModTools: n,
					isExpanded: !!r
				});
			t.a = P(_)
		},
		"./src/reddit/components/OverviewConversationsPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less": function(e, t, n) {
			e.exports = {
				container: "_1j2O3iNM1HoiXK7B2dmp7b",
				description: "_1izt0pKGHoMq6qSvK4cAIn",
				gotIt: "_3uIlo4RbXf8gjMYw0yP_Jj"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3aof1UDvKACEvKW4EMZ299",
				pin: "_2KRDWSbw-bvKgY9GSzhGAx",
				title: "_3mWek_rCoNZ3KHXxqDuM88"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_274hVfCVJjK6-eGJKLQjgQ",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			}));
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/postList.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/isComment.ts"),
				u = n("./src/reddit/helpers/isPost.ts"),
				p = n("./src/reddit/helpers/trackers/post.ts"),
				b = n("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/tracking.ts"),
				y = n("./src/reddit/selectors/user.ts");
			const x = (e, t) => (e, t, n) => Object(m.a)(e) ? 120 : 47,
				v = Object(l.t)(),
				g = {
					apiError: b.a,
					apiPending: b.b,
					currentUser: y.j,
					layout: l.O,
					loadMore: b.d,
					subredditsById: h.Z,
					viewportDataLoaded: f.a,
					commentsById: b.g,
					itemIds: b.f,
					itemIdToPostId: b.e,
					postsById: b.h,
					estimateItemHeight: x
				},
				O = Object(a.c)(g),
				C = Object(o.b)(O, (e, t) => ({
					onBottomViewed: (t, n) => e(d.c(t, n)),
					openPost: t => {
						e(i.M(t))
					},
					trackOnPostEnteredViewport: (t, n) => {
						Object(u.a)(t) && e(i.P(t))
					},
					trackOnPostExitedViewport: (t, n, s) => {
						Object(u.a)(t) && e(i.Q(t, s))
					},
					fireAdPixelsOfType: r.a
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					postClickEventFactory: (e, t) => Object(p.h)(e, t)
				}));
			t.a = e => Object(c.c)(v(C(e)))
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlair.ts"),
				i = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/models/Vote/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				m = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.d,
				crosspostSubredditOrProfile: p.e,
				flairStyleTemplate: c.S,
				hideNSFWPref: b.C,
				isActive: p.j,
				moderatorPermissions: m.k,
				modModeEnabled: c.Q,
				showEditFlair: u.a
			}), (e, {
				postId: t
			}) => ({
				dispatchFlairChanged: ({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				}) => e(Object(a.h)({
					post: t,
					previewFlair: n,
					selectedTemplateId: s
				})),
				handleVote: n => {
					const s = n === d.a.upvoted ? Object(o.fb)(t) : Object(o.w)(t);
					e(s)
				},
				onIgnoreReports: () => e(Object(o.bb)(t)),
				onOpenReportsDropdown: t => e(Object(i.h)({
					tooltipId: t
				}))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onFlairChanged: ({
					previewFlair: e,
					selectedTemplateId: s
				}) => t.dispatchFlairChanged({
					post: n.post,
					previewFlair: e,
					selectedTemplateId: s
				})
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = {
					[r.U.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.U.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.U.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.U.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.U.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.U.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.U.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.bc.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.bc.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.bc.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.bc.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.bc.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.bc.ALL]: () => s.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				d = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext({})
		},
		"./src/reddit/endpoints/page/profileOverviewPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/addAllowQuarantinedParam/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				c = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t, n) => Object(a.a)(e, {
					data: n,
					endpoint: Object(i.a)(Object(r.a)(Object(d.a)(Object(c.a)(`${s.a.gatewayUrl}/desktopapi/v1/user/${t}/conversations`)))),
					traceRequestName: "get_profile_conversations",
					method: o.hb.GET
				}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e),
				m = (e, t, n) => Object(a.a)(e, {
					data: n,
					endpoint: Object(i.a)(Object(r.a)(Object(c.a)(`${s.a.gatewayUrl}/desktopapi/v1/user/${t}/overview`))),
					method: o.hb.GET
				}).then(e => "pinned" in e.body ? e : "overviewIds" in e.body ? {
					...e,
					body: {
						...e.body,
						pinned: e.body.overviewIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
					}
				} : e)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", d({
				className: Object(o.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				d = n.n(i);
			const c = ({
					message: e
				}) => o.a.createElement("div", {
					className: d.a.container
				}, o.a.createElement("h3", {
					className: d.a.title
				}, e || s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), o.a.createElement(a.k, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => o.a.createElement("div", {
					className: d.a.container
				}, o.a.createElement("h3", {
					className: d.a.title
				}, e || s.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), o.a.createElement(a.k, {
					className: d.a.primaryRouterLink,
					to: "/"
				}, s.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/fromPairs.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/extractQueryParams/index.ts"),
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				m = n("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/lib/constants/index.ts"),
				b = n("./src/reddit/actions/pages/profileOverview/index.ts"),
				h = n("./src/reddit/actions/pages/profileShared.ts"),
				f = n("./src/reddit/actions/profileConversations.ts"),
				y = n("./node_modules/lodash/difference.js"),
				x = n.n(y),
				v = n("./node_modules/lodash/pick.js"),
				g = n.n(v),
				O = n("./src/lib/makeActionCreator/index.ts"),
				C = n("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				w = n("./src/reddit/constants/parameters.ts"),
				k = n("./src/reddit/endpoints/page/profileOverviewPage.ts"),
				P = n("./src/reddit/actions/profileOverviewChrono/constants.ts");
			const _ = Object(O.a)(P.c),
				j = Object(O.a)(P.b),
				E = Object(O.a)(P.a);
			var S = n("./src/reddit/components/ContentGate/index.tsx"),
				N = n("./src/reddit/components/EmptyProfile/index.ts"),
				I = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				L = n("./src/reddit/components/JumpToContent/index.tsx"),
				T = n("./src/lib/classNames/index.ts"),
				M = n("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				D = n("./src/reddit/components/ProfileItemList/index.tsx"),
				R = n("./src/reddit/connectors/OverviewChronoList/index.ts"),
				F = n("./src/reddit/components/OverviewChronoList/index.m.less"),
				B = n.n(F),
				U = n("./src/lib/lessComponent.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(R.a)(U.a.wrapped(e => {
				const {
					className: t,
					itemIds: n
				} = e, s = n.length > 0;
				return a.a.createElement(D.a, A({
					className: Object(T.a)(t, {
						[B.a.ComponentHasItems]: s
					})
				}, e))
			}, "Component", B.a));
			var W = e => a.a.createElement(H, A({}, e, {
					itemComponent: M.a
				})),
				K = n("./src/reddit/components/PostList/index.tsx"),
				z = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = n("./src/lib/isPinnedAdminPost/index.ts"),
				q = n("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				G = n("./node_modules/lodash/last.js"),
				V = n.n(G);
			var X = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				J = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/components/ClassicPost/index.tsx"),
				Z = n("./src/reddit/components/LargePost/index.tsx"),
				$ = n("./src/reddit/components/OverviewCommentPost/index.tsx"),
				ee = n("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				te = n("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ne = n("./src/reddit/selectors/profile.ts"),
				se = n("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				re = n.n(se);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ae = U.a.div("ExtraCommentsItemWrapper", re.a), ie = U.a.p("ExtraComments", re.a), de = U.a.wrapped(ie, "ExtraCommentsInteractive", re.a);
			var ce = Object(i.b)(() => Object(d.c)({
					extraCommentsItem: ne.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: n
						} = t, {
							extraComments: s
						} = e.pages.profileOverview.conversations;
						return !!s.api.pending[n]
					}
				}), (e, {
					profileName: t
				}) => ({
					extraCommentsClicked: n => e(Object(f.g)(t, n.postId, n.id))
				}))(({
					extraCommentsClicked: e,
					extraCommentsItem: t,
					extraCommentsPending: n
				}) => a.a.createElement(ae, null, n ? a.a.createElement(ie, null, oe._("Loading...", null, {
					hk: "47z90C"
				})) : a.a.createElement(te.a.Consumer, null, n => a.a.createElement(de, {
					onClick: n => {
						e(t), n.stopPropagation(), n.nativeEvent.stopImmediatePropagation()
					}
				}, oe._("Load more comments", null, {
					hk: "1jXJxb"
				}))))),
				le = n("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				me = n("./src/reddit/contexts/Post/index.tsx"),
				ue = n("./src/reddit/hooks/useTheme.ts"),
				pe = n("./src/reddit/constants/postLayout.ts"),
				be = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = n.n(be),
				fe = n("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ye = n.n(fe);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = U.a.div("BackgroundWrapper", ye.a),
				ge = U.a.wrapped(Q.default, "ClassicPost", ye.a),
				Oe = U.a.wrapped($.a, "OverviewCommentPost", ye.a),
				Ce = Object(i.b)(() => Object(d.c)({
					commentThreadLinkSets: (e, {
						postId: t,
						currentProfileName: n
					}) => {
						const s = n ? n.toLowerCase() : "",
							r = Object(q.a)(t, s);
						return e.pages.profileOverview.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, {
						postId: t,
						currentProfileName: n
					}) => {
						const s = n ? n.toLowerCase() : "",
							r = Object(q.a)(t, s);
						return e.pages.profileOverview.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, {
						postId: t,
						currentProfileName: n
					}) => !!n && Object(J.o)(e, t, n),
					isPinned: (e, {
						postId: t,
						currentProfileName: n
					}) => !!n && Object(J.q)(e, t, n),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: n
							} = e, s = t.toLowerCase(), r = n.models[s];
							return r ? r.username : void 0
						})(e, t)
					},
					layout: u.O
				})),
				we = U.a.wrapped(Z.default, "OverviewLargePost", ye.a),
				ke = Ce(e => {
					const {
						availableWidth: t,
						className: n,
						commentThreadLinkSets: s,
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
						postId: y,
						profileName: x,
						scrollerItemRef: v
					} = e, g = {
						last: m,
						onClickPost: p,
						postId: y
					};
					if (!x) return null;
					const O = x === f.author,
						C = Object(Y.a)(c, f.distinguishType);
					if (!O && !i && !C) return null;
					const w = i ? function(e) {
							const t = [],
								n = e.length;
							for (let s = 0; s < n; s++) {
								(0 === s || e[s - 1].depth !== e[s].depth - 1) && t.push([]), V()(t).push(e[s])
							}
							return t
						}(function(e, t) {
							const n = [];
							let s = t,
								r = "comment";
							for (; s;) {
								const t = e[s];
								n.push({
									id: s,
									depth: t.depth,
									type: r
								}), t.next ? (s = t.next.id, r = t.next.type) : s = void 0
							}
							return n
						}(s, i)) : [],
						k = w.length - 1;
					return a.a.createElement("div", {
						className: Object(T.a)(he.a.largeAndMediumActiveStyles, he.a.largeAndMediumPostStyles, ye.a.OverviewConversationsPost, n),
						style: {
							...Object(X.b)(),
							...Object(X.d)(e)
						}
					}, a.a.createElement(ee.a, {
						isFirst: !0,
						isLast: k < 0,
						key: f.id
					}, !O && !!i && a.a.createElement(Oe, xe({}, g, {
						commentId: i,
						key: f.id,
						profileName: x
					})), (O || C) && (u === pe.g.Classic ? a.a.createElement(ge, {
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
						postId: y,
						scrollerItemRef: v
					}) : a.a.createElement(we, {
						availableWidth: t,
						eventFactory: r,
						isScrolling: l,
						isFrontpage: !1,
						forceLoadMedia: o,
						last: m,
						onClickPost: p,
						onSizeChanged: b,
						pageLayer: h,
						postId: y,
						scrollerItemRef: v
					}))), a.a.createElement(ve, {
						style: {
							background: Object(X.e)(e)
						}
					}, !d && w.map((e, t) => a.a.createElement(ee.a, {
						isLast: t === k,
						key: `${t}-isLast[${t===k}]`
					}, e.map((t, n) => {
						const s = 0 === n,
							r = n === e.length - 1;
						return "comment" === t.type ? a.a.createElement(le.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: s,
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
			var Pe = Object(me.b)((function(e) {
					var t;
					const n = Object(ue.a)(),
						s = Object(u.ab)();
					return a.a.createElement(ke, xe({
						theme: null !== (t = e.theme) && void 0 !== t ? t : n,
						currentProfileName: Object(u.h)(s),
						pageLayer: s
					}, e))
				})),
				_e = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				je = n("./src/reddit/helpers/trackers/post.ts"),
				Ee = n("./src/reddit/selectors/tracking.ts"),
				Se = n("./src/reddit/connectors/PostList/index.ts");
			const Ne = Object(d.c)({
					...Se.d,
					postIds: J.M,
					viewportDataLoaded: Ee.a
				}),
				Ie = Object(Se.c)(),
				Le = Object(i.b)(Ne, Se.b, (e, t, n) => ({
					...e,
					...t,
					...n,
					postClickEventFactory: (e, t) => Object(je.h)(e, t),
					postComponentForLayout: ({
						post: e
					}) => e.isBlank ? _e.a : Pe
				}));
			var Te = (e => Object(z.c)(Ie(Le(e))))(K.a),
				Me = n("./src/reddit/components/ProfileNavMenu/index.tsx"),
				De = n("./node_modules/lodash/debounce.js"),
				Re = n.n(De),
				Fe = n("./src/reddit/actions/post.ts"),
				Be = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ue = n("./src/lib/isUrl/index.ts"),
				Ae = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				He = n("./src/reddit/components/Media/index.tsx"),
				We = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Ke = n("./src/reddit/components/PostContainer/index.tsx"),
				ze = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				Ye = n("./src/reddit/components/PostTitle/index.tsx"),
				qe = n("./src/reddit/connectors/miniCardPost.ts"),
				Ge = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Ve = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Xe = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Je = n("./src/reddit/models/Media/index.ts"),
				Qe = n("./node_modules/fbt/lib/FbtPublic.js"),
				Ze = n("./src/reddit/components/CommentsLink/index.tsx"),
				$e = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				et = n("./src/reddit/components/Flatlist/index.tsx"),
				tt = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				nt = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				st = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				rt = n("./src/reddit/components/ShareMenu/index.tsx"),
				ot = n("./src/reddit/icons/fonts/Share/index.tsx"),
				at = n("./src/reddit/models/User/index.ts"),
				it = n("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				dt = n.n(it);
			const ct = "-MiniCardModMenu",
				lt = "-MiniCardOverflowMenu",
				mt = "-MiniCardShareMenu",
				ut = U.a.wrapped($e.a, "HorizontalVotes", dt.a),
				pt = U.a.button("ShareButton", dt.a),
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
			var ft = bt(Object(i.b)(ht, {})(Object(z.c)(e => {
					const {
						currentProfileName: t,
						className: n,
						currentUser: s,
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
						post: y,
						sendEvent: x,
						showEditFlair: v,
						showEditPost: g,
						subreddit: O
					} = e, C = e => x(Object(je.h)(y.id, e)), w = y.postId, k = Object(et.d)(ct, y.id, m, p), P = !!s && Object(at.e)(s) === y.author;
					return a.a.createElement("div", {
						className: Object(T.a)(dt.a.flatlistContainer, n)
					}, a.a.createElement(ut, {
						compact: !1,
						model: y,
						onVoteClick: r,
						scoreClassName: dt.a.score
					}), a.a.createElement(Ze.a, {
						hasModPostPerms: d,
						isCommentsPage: c,
						isCommentPermalink: l,
						isOverlay: m,
						postId: y.id,
						modModeEnabled: h,
						numComments: y.numComments,
						type: pe.g.Compact,
						onClick: f
					}), a.a.createElement(rt.a, {
						className: dt.a.shareMenu,
						dropdownId: Object(et.d)(mt, y.id, m, p),
						permalink: y.permalink,
						post: y,
						sendEventWithName: C,
						subreddit: O
					}, a.a.createElement(pt, null, a.a.createElement(ot.a, {
						className: dt.a.shareIcon
					}), a.a.createElement("span", {
						className: dt.a.shareText
					}, Qe.fbt._("share", null, {
						hk: "mmJV5"
					})))), d && a.a.createElement(tt.a, {
						dropdownId: k,
						onClick: () => C("post_mod_action_menu")
					}, a.a.createElement(et.b, {
						className: dt.a.modActionsIcon
					}), a.a.createElement(nt.a, {
						canEditFlair: o && !!v,
						hasModPostPerms: d,
						hasModFullPerms: i,
						isOverlay: !!m,
						isPostAuthor: P,
						modModeEnabled: h,
						post: y,
						tooltipId: k
					})), a.a.createElement(st.a, {
						currentProfileName: t,
						isCommentsPage: c,
						isOverlay: !!m,
						isProfilePostListing: u,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: y.permalink,
						postId: w,
						dropdownId: Object(et.d)(lt, y.id, m, p),
						isFixed: p,
						sendEvent: x,
						showEditPost: !!g,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(st.b)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				yt = n("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				xt = n("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				vt = n("./src/reddit/components/MiniCardPost/index.m.less"),
				gt = n.n(vt);
			var Ot = Object(u.t)()(Object(me.b)(Object(qe.a)(Object(Be.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: n,
						className: s,
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
						shouldPause: y,
						showMetaLine: x = !0,
						showEditFlair: v,
						subredditOrProfile: g,
						userIsOp: O
					} = e, {
						media: C
					} = r || h, w = C && C.type, k = Object(ze.b)(h.id), P = w === Je.o.RTJSON, _ = O && P, j = Object(Xe.a)(u), E = Object(Ge.a)(u), S = Object(Ve.a)(u), N = C && w !== Je.o.RTJSON && w !== Je.o.TEXT, I = !C && !!h.source && Object(Ue.a)(h.source.url), L = C && a.a.createElement(He.a, {
						autoplayPref: t,
						availableWidth: n,
						className: gt.a.media,
						imageBoxClassName: gt.a.mediaImageBox,
						imageBoxContentImageClassName: gt.a.mediaImageBoxContentImage,
						forceAspectRatio: Je.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: r || h,
						scrollerItemRef: f,
						shouldPause: y,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return a.a.createElement(Ke.a, {
						className: Object(T.a)(gt.a.postContainer, he.a.largeAndMediumActiveStyles, he.a.largeAndMediumPostStyles, Object(X.a)(e), s),
						style: {
							...Object(X.b)(e.flairStyleTemplate),
							...Object(X.d)(e)
						},
						post: h,
						onClick: b,
						eventFactory: d
					}, a.a.createElement(We.a, {
						className: gt.a.backgroundWrapper,
						flairStyleTemplate: c
					}, N && L, a.a.createElement("div", {
						className: gt.a.innerContainer
					}, I && a.a.createElement(xt.a, {
						post: h,
						templatePlaceholderImage: c ? c.postPlaceholderImage : void 0
					}), a.a.createElement(Ye.c, {
						className: gt.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: Ye.b.Large,
						titleColor: c && c.postTitleColor
					}), x && g && a.a.createElement(yt.a, {
						className: gt.a.metaLine,
						crosspostSubredditOrProfile: o,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: g
					}), !N && a.a.createElement("div", {
						className: gt.a.mediaWrapper
					}, L), a.a.createElement("div", {
						className: gt.a.flexSpacer
					}), a.a.createElement(ft, {
						currentUser: i,
						handleVote: e.handleVote,
						hasModFlairPerms: E,
						hasModFullPerms: S,
						hasModPostPerms: j,
						modModeEnabled: p,
						post: h,
						showEditFlair: v,
						showEditPost: _
					}))), e.activeModalId === k && a.a.createElement(ze.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: k,
						onFlairChanged: e.onFlairChanged
					}), a.a.createElement(Ae.d, null))
				})))),
				Ct = n("./src/reddit/helpers/getClickInfo.ts"),
				wt = n("./src/reddit/helpers/localStorage/index.ts"),
				kt = n("./src/reddit/selectors/user.ts"),
				Pt = n("./src/reddit/icons/fonts/index.tsx"),
				_t = n("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				jt = n.n(_t);
			const {
				fbt: Et
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var St = e => a.a.createElement("div", {
					className: Object(T.a)(jt.a.container, e.className)
				}, a.a.createElement(Pt.a, {
					name: "pin",
					className: jt.a.pin
				}), a.a.createElement("div", {
					className: jt.a.title
				}, Et._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				Nt = n("./src/reddit/controls/TextButton/index.tsx"),
				It = n("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Lt = n.n(It);
			const {
				fbt: Tt
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Mt = e => a.a.createElement(St, {
					className: Object(T.a)(Lt.a.container, e.className)
				}, a.a.createElement("div", {
					className: Lt.a.description
				}, Tt._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), a.a.createElement(Nt.a, {
					className: Lt.a.gotIt,
					onClick: e.onGotItClick
				}, Tt._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Dt = n("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				Rt = n.n(Dt);
			const {
				fbt: Ft
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Bt = 320, Ut = 300, At = Object(d.c)({
				arePinnedPostsLoaded: J.a,
				currentUser: kt.j,
				pinnedPostIds: J.N
			}), Ht = Object(i.b)(At, e => ({
				openPost: t => e(Object(Fe.M)(t))
			}));
			class Wt extends a.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = Re()(() => {
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
						Object(wt.Hb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(Ct.a)(e)
						})
					}, this.renderPost = e => a.a.createElement(Ot, {
						postId: e,
						key: e,
						availableWidth: Bt,
						className: Object(T.a)(Rt.a.item, Rt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						onClickPost: this.onClickPost,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(wt.I)()
					}), document.addEventListener("scroll", this.handleScroll), this.handleScroll()
				}
				componentWillUnmount() {
					document.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					const {
						arePinnedPostsLoaded: e,
						pinnedPostIds: t,
						children: n
					} = this.props;
					if (!e) return null;
					const s = !!this.props.currentUser && this.props.profileName === Object(at.e)(this.props.currentUser),
						r = t.length > 0,
						o = !r && this.state.showEducation && s;
					if (!r && !o) return null;
					const i = s && this.props.pinnedPostIds.length % 2 != 0;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Rt.a.title
					}, Ft._("Pinned posts", null, {
						hk: "3prRc3"
					})), o ? a.a.createElement(Mt, {
						className: Object(T.a)(Rt.a.item, Rt.a.education),
						onGotItClick: this.onGotItClick
					}) : a.a.createElement("div", {
						ref: this.setContainerRef,
						className: Rt.a.container
					}, t.map(this.renderPost), i && a.a.createElement(St, {
						className: Rt.a.item
					})), n)
				}
			}
			var Kt = Object(u.t)()(Ht(Wt)),
				zt = n("./src/reddit/components/ProfileSidebar/index.tsx"),
				Yt = n("./src/reddit/helpers/trackers/screenview.ts"),
				qt = n("./src/reddit/layout/page/Listing/index.tsx"),
				Gt = n("./src/reddit/models/ContentGate.ts"),
				Vt = n("./src/reddit/pages/ErrorPages/index.tsx");

			function Xt() {
				return (Xt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Jt = (e, {
					location: t
				}) => r()([...Object(c.a)(t.search)]),
				Qt = Object(u.t)(),
				Zt = Object(d.a)(u.B, kt.db, Jt, u.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => t.params.sort, (e, {
					match: t
				}) => Object(ne.j)(e, {
					profileName: t.params.profileName
				}), (e, t) => Object(h.a)(e, Jt(0, t)), (e, {
					match: t
				}) => !Object(J.m)(e, {
					profileName: t.params.profileName
				}), kt.K, (e, {
					match: t
				}) => Object(kt.e)(e, p.dc + t.params.profileName), (e, t, n, s, r, o, a, {
					sort: i,
					t: d
				}, c, l, u) => {
					const b = s === pe.g.Compact ? p.rb : p.sb,
						h = Object(m.a)(r, b, i, n),
						{
							sort: f
						} = n;
					return {
						contentGateInfo: u,
						over18Prefs: t,
						isLoggedIn: l,
						isOwnProfile: e,
						isProfileNSFW: !!a && a.isNSFW,
						layout: s,
						listingKey: h,
						profileName: r,
						shouldShowPinnedPostsSection: c && !f,
						sort: i,
						timeSort: d
					}
				}),
				$t = Object(i.b)(Zt, (e, t) => ({
					onLoadMoreChronoItems: () => e((() => async (e, t, {
						apiContext: n
					}) => {
						const s = t(),
							{
								currentPage: r
							} = s.platform;
						if (!r || !r.routeMatch) return;
						const {
							queryParams: o,
							params: a
						} = r.routeMatch.match, {
							sort: i,
							t: d
						} = Object(h.a)(s, o), {
							profileName: c
						} = a, l = Object(m.a)(c, p.rb, i, o), u = Object(C.d)(s, {
							listingKey: l
						});
						if (!u) return;
						const b = Object(C.b)(s, {
								listingKey: l
							}),
							f = Object(C.c)(s, {
								listingKey: l
							}),
							y = f && f[u.token];
						if (b || y) return;
						e(_({
							key: l,
							fetchedToken: u.token
						}));
						const v = await Object(k.a)(n(), c, {
							after: u.token,
							dist: u.dist,
							sort: i,
							t: d,
							...g()(o, w.l)
						});
						if (v.ok) {
							const t = Object(C.f)(s, {
									listingKey: l
								}),
								n = {
									...v.body,
									overviewIds: x()(v.body.overviewIds, t)
								};
							e(j({
								fetchedToken: u.token,
								key: l,
								meta: s.meta,
								...n
							}))
						} else e(E({
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
			class en extends a.a.Component {
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
						over18Prefs: n,
						isOwnProfile: s,
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
					if (e && e.profileDeleted) return a.a.createElement(S.default, {
						contentGateType: Gt.a.ProfileDeleted,
						profileName: c
					});
					if (e && e.profileSuspended) return a.a.createElement(S.default, {
						contentGateType: Gt.a.ProfileSuspended,
						profileName: c
					});
					if (451 === d.status || e && e.profileBlockedForLegalReason) return a.a.createElement(S.default, {
						contentGateType: Gt.a.ProfileBlockedForLegalReason,
						profileName: c
					});
					if (403 === d.status) return a.a.createElement(Vt.a, null);
					if (404 === d.status) return a.a.createElement(S.default, {
						contentGateType: Gt.a.ProfileDoesNotExist,
						profileName: c
					});
					if (!c) return null;
					const h = c.toLowerCase(),
						f = `/user/${c}/`,
						y = {
							listingKey: o,
							listingName: h
						};
					if (!n && r && !s) return a.a.createElement(S.default, {
						subredditName: c,
						contentGateType: Gt.a.Nsfw
					});
					const x = {
							inSubredditOrProfile: !Object(l.a)(c),
							listingKey: o,
							listingName: h,
							listingViewed: (e, t) => Object(Yt.q)(o, m, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: i
						},
						v = {
							sort: m,
							baseUrl: f,
							sortOptions: p.xb,
							timeSort: b
						};
					let g;
					return g = t === pe.g.Compact ? a.a.createElement(W, Xt({}, x, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: i
					})) : a.a.createElement(a.a.Fragment, null, u && a.a.createElement(Kt, {
						profileName: c
					}), a.a.createElement(I.a, v), a.a.createElement(Te, Xt({}, x, {
						excludePinnedPosts: u,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), a.a.createElement(qt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(Me.a, {
							profileName: c
						})),
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(L.a, null), g),
						sidebar: a.a.createElement(zt.a, Xt({}, y, {
							profileName: c
						}))
					})
				}
			}
			t.default = Qt($t(en))
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/Flair/index.ts"),
				o = n("./src/reddit/models/PostCreationForm/index.ts");
			r.f.Text, r.f.Spoiler, r.f.Text, r.f.Spoiler, o.h.RICH_TEXT, r.f.Text, r.f.Spoiler, o.h.RICH_TEXT, r.f.Text, r.f.Spoiler, o.h.RICH_TEXT;
			var a = n("./src/reddit/helpers/isComment.ts");
			const i = Object(s.a)((e, {
					listingKey: t
				}) => {
					const n = e.posts.models;
					return d(e, {
						listingKey: t
					}).filter(e => {
						if (Object(a.a)(e)) return !0; {
							const t = n[e];
							return t && !t.hidden
						}
					})
				}),
				d = Object(s.a)((e, {
					listingKey: t
				}) => {
					const n = e.pages.profileOverview.chrono.ids[t];
					return n ? [...n] : []
				}),
				c = Object(s.a)((e, {
					listingKey: t
				}) => {
					return i(e, {
						listingKey: t
					}).reduce((t, n) => {
						const s = Object(a.a)(n) ? e.features.comments.models[n].postId : n;
						return t[n] = s, t
					}, {})
				}),
				l = (Object(s.a)((e, {
					listingKey: t
				}) => {
					const n = e.posts.models;
					return l(e, {
						listingKey: t
					}).filter(e => {
						const t = n[e];
						return t && !t.hidden
					})
				}), Object(s.a)((e, {
					listingKey: t
				}) => {
					return i(e, {
						listingKey: t
					}).map(t => Object(a.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				m = Object(s.a)((e, {
					listingKey: t
				}) => {
					const n = e.posts.models,
						s = l(e, {
							listingKey: t
						}),
						r = {};
					return s.forEach(e => r[e] = n[e]), r
				}),
				u = Object(s.a)((e, {
					listingKey: t
				}) => {
					const n = e.features.comments.models,
						s = i(e, {
							listingKey: t
						}),
						r = {};
					return s.forEach(e => !!Object(a.a)(e) && (r[e] = n[e])), r
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.2ea99de78380e17fe838.js.map