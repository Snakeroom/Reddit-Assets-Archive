// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.f2e42c044b2cb0f95e5a.js
// Retrieved at 7/20/2022, 1:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"], {
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(r.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/forceHttps/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/constants/intlSupport.ts");

			function o(e) {
				let {
					showDay: t,
					useUtc: s,
					shortMonths: o,
					locale: a = r.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const c = new Date(e * n.Sb);
				return i.a ? new Intl.DateTimeFormat(a, {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: s ? "UTC" : void 0
				}).format(c) : c.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.DEFAULT_LOCALE;
				const s = e.toString().length > 10,
					n = new Date(e * (s ? 1 : 1e3));
				return n.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/brcast/dist/brcast.es.js");
			const n = () => "undefined" != typeof document,
				i = () => n() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: i()
				}),
				{
					subscribe: a,
					unsubscribe: c,
					setState: d
				} = Object(r.a)(o()),
				l = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => d(o());
			(() => {
				const e = (() => {
					if (!n()) return;
					const e = Object.keys(l).find(e => e in document);
					return e ? l[e] : void 0
				})();
				e && document.addEventListener(e, u)
			})(), t.a = {
				isDocumentHidden: () => !i(),
				isDocumentVisible: i,
				subscribe: a,
				unsubscribe: c
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			const r = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				i = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/BadgeIndicators.json"),
				c = e => Object(o.a)(e, {
					...a
				}),
				d = s("./src/reddit/models/Badge/index.ts");
			const l = Object(r.a)(n.c),
				u = Object(r.a)(n.b),
				m = Object(r.a)(n.d),
				b = Object(r.a)(n.a),
				p = e => {
					let {
						key: t,
						count: s
					} = e;
					return {
						[t]: {
							count: s,
							style: d.b.Numbered
						}
					}
				},
				f = (e, t) => ({
					[d.c.ChatUnreadMessages]: {
						count: e,
						style: d.b.Numbered
					},
					[d.c.ChatHasNewMessages]: {
						isShowing: t,
						style: d.b.Filled
					}
				}),
				h = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					e(l());
					const n = await async function(e) {
						const t = await c(e());
						if (t.ok && t.body) {
							return function(e) {
								var t;
								const s = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.badgeIndicators;
								if (s) return {
									...s,
									chatUnreadMessages: {
										count: (Number(s.chatUnreadMessages.count) || 0) + (Number(s.chatUnacceptedInvites.count) || 0) + (Number(s.chatUnreadMentions.count) || 0)
									}
								}
							}(t.body)
						}
					}(r);
					n ? (e(u(n)), e(Object(i.d)())) : e(b())
				};
			const O = () => async e => {
				const t = p({
					key: d.c.MessageTab,
					count: 0
				});
				e(m(t))
			}
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const n = "JSAPI__CONSUMER_SUBSCRIBED",
				i = Object(r.a)(n)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/profile/index.ts"),
				i = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				o = s("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				c = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(a), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(o.k)(t());
					if (s) {
						const t = Object(i.e)(s);
						await e(Object(n.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				i = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return w
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return D
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return N
			})), s.d(t, "profilePostsPending", (function() {
				return A
			})), s.d(t, "profilePostsLoaded", (function() {
				return L
			})), s.d(t, "profilePostsFailed", (function() {
				return F
			})), s.d(t, "profilePostsRequested", (function() {
				return R
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return M
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return U
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return V
			})), s.d(t, "morePostsPending", (function() {
				return G
			})), s.d(t, "morePostsLoaded", (function() {
				return B
			})), s.d(t, "morePostsFailed", (function() {
				return q
			})), s.d(t, "morePostsRequested", (function() {
				return W
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/lib/safeGet/index.ts"),
				c = s("./src/reddit/actions/contentGate.ts"),
				d = s("./src/reddit/actions/externalAccount.ts"),
				l = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				m = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				f = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/constants/errors.ts"),
				O = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/config.ts"),
				_ = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				y = s("./src/lib/constants/index.ts"),
				T = s("./src/lib/makeApiRequest/index.ts"),
				E = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const S = (e, t, s) => Object(T.a)(e, {
				data: s,
				endpoint: Object(E.a)(Object(_.a)(Object(x.a)(`${j.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: y.jb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var C = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				v = s("./src/reddit/helpers/post/index.ts"),
				P = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				I = s("./src/reddit/selectors/listings.ts"),
				k = s("./src/reddit/selectors/profile.ts");
			const w = "PAGE__PROFILE_POSTS_PENDING",
				D = "PAGE__PROFILE_POSTS_LOADED",
				N = "PAGE__PROFILE_POSTS_FAILED",
				A = Object(i.a)(w),
				L = Object(i.a)(D),
				F = Object(i.a)(N),
				R = e => async (t, s, r) => {
					const {
						queryParams: i,
						params: j
					} = e, {
						sort: _,
						t: y
					} = Object(u.b)(i), {
						profileName: T
					} = j, E = Object(o.a)(`u_${T}`, _, i), x = s(), w = Object(a.a)(x.listings.postOrder.ids, E), D = Object(I.c)(x, {
						listingKey: E
					}), N = Object(I.d)(x, {
						listingKey: E
					});
					if (await t(p.d(T)), N || w && !D) {
						if (w) {
							const e = Object(k.q)(s(), {
								profileName: T
							});
							t(b.m({
								title: e
							}))
						}
						return
					}
					const R = {
						...n()(e.queryParams, [...O.k, ...O.j, O.g]),
						layout: Object(g.S)(x, {}).toLowerCase(),
						sort: _,
						t: Object(C.a)(_, y)
					};
					t(A({
						key: E
					}));
					const M = await Object(P.a)("profilePosts", () => S(r.apiContext(), T, R));
					if (!M.ok) return t(F({
						account: M.body.data ? M.body.data.account : null,
						error: M.body.reason ? {
							type: M.body.reason
						} : M.error,
						key: E
					})), M.body.reason === h.a.DeletedProfile && t(Object(c.s)({
						profileName: T
					})), void t(b.n(M.status));
					const U = M.body;
					await Object(v.a)(r.gqlContext, U.posts).then(e => U.posts = e), t(L({
						key: E,
						meta: s().meta,
						...U
					}));
					const V = Object(k.m)(s(), T),
						{
							pinned: G
						} = U;
					t(Object(m.h)({
						profileId: V,
						pinned: G
					})), await Promise.all([t(Object(u.c)(T)), t(Object(f.q)()), t(Object(l.b)()), t(d.o(T))])
				}, M = "PROFILE_POSTS__MORE_POSTS_PENDING", U = "PROFILE_POSTS__MORE_POSTS_LOADED", V = "PROFILE_POSTS__MORE_POSTS_FAILED", G = Object(i.a)(M), B = Object(i.a)(U), q = Object(i.a)(V), W = () => async (e, t, s) => {
					let {
						apiContext: r,
						gqlContext: i
					} = s;
					const a = t(),
						{
							currentPage: c
						} = a.platform;
					if (!c || !c.routeMatch) return;
					const {
						queryParams: d,
						params: l
					} = c.routeMatch.match, {
						sort: m,
						t: b
					} = Object(u.b)(d), {
						profileName: p
					} = l, f = Object(o.a)(`u_${p}`, m, d), h = Object(I.g)(a, {
						listingKey: f
					});
					if (!h) return;
					const j = Object(I.d)(a, {
							listingKey: f
						}),
						_ = Object(I.e)(a, {
							listingKey: f,
							token: h.token
						});
					if (j || _) return;
					e(G({
						key: f,
						fetchedToken: h.token
					}));
					const y = {
							after: h.token,
							dist: h.dist,
							sort: m,
							t: b,
							...n()(d, O.k),
							layout: Object(g.S)(a, {}).toLowerCase()
						},
						T = await S(r(), p, y),
						E = T.body,
						x = a.listings.postOrder.ids[f],
						C = E.postIds || [];
					await Object(v.a)(i, E.posts).then(e => E.posts = e);
					const P = {
						...E,
						postIds: C.filter(e => !x || !x.includes(e))
					};
					T.ok ? (e(B({
						fetchedToken: h.token,
						key: f,
						meta: a.meta,
						...P
					})), await e(Object(u.c)(p))) : e(q({
						account: T.body.data ? T.body.data.account : null,
						error: T.error,
						fetchedToken: h.token,
						key: f
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "i", (function() {
				return N
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/endpoints/post/index.tsx"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				m = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const p = "PINNEDPOST__PINNED_POSTS_LOADED",
				f = Object(i.a)(p),
				h = "PINNEDPOST__PIN_POST_SUCCESS",
				O = "PINNEDPOST__UNPIN_POST_SUCCESS",
				g = Object(i.a)(h),
				j = Object(i.a)(O),
				_ = "PINNEDPOST__PIN_POST_PENDING",
				y = "PINNEDPOST__UNPIN_POST_PENDING",
				T = Object(i.a)(_),
				E = Object(i.a)(y),
				x = "PINNEDPOST__PIN_POST_FAILURE",
				S = "PINNEDPOST__UNPIN_POST_FAILURE",
				C = Object(i.a)(x),
				v = Object(i.a)(S),
				P = e => Object(a.f)({
					buttonAction: N(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: l.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				I = (e, t) => Object(a.f)({
					buttonAction: N(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: l.b.SuccessMod,
					text: t ? r.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : r.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				k = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				w = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("You can't pin a removed post", null, {
						hk: "3bdn2y"
					})
				}),
				D = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, r, i) => {
						let {
							apiContext: a,
							gqlContext: l
						} = i;
						const p = r(),
							f = p.posts.models[e];
						if (!f) return;
						const h = !Object(m.s)(p, {
							postId: e
						});
						if (h && f.isRemoved) return s(w());
						const O = f.author,
							_ = Object(b.m)(p, O),
							[y, x, S, N, A] = h ? [T, g, C, P, k] : [E, j, v, I, D];
						if (h) {
							if (Object(m.P)(p, {
									profileName: O
								}).length >= n.cb) return void s(Object(o.i)(c.a.PINNED_POSTS_LIMIT_REACHED))
						}
						const L = Object(m.p)(p, e, O),
							F = !h && L;
						s(y({
							postId: e,
							profileId: _
						})), (Object(u.c)(p) ? await Object(d.j)(l(), e, h, !0) : await Object(d.v)(a(), e, h, !0)).ok ? (s(x({
							postId: e,
							profileId: _
						})), t || s(N(e, F))) : (s(S({
							postId: e,
							profileId: _
						})), s(A()))
					}
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return T
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "c", (function() {
				return C
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/pages/postCreation.ts"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/models/PostCreationForm/index.ts"),
				b = s("./src/reddit/routes/postCreation/index.ts"),
				p = s("./src/reddit/routes/postCreation/constants.ts"),
				f = s("./src/reddit/selectors/postCreations.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/actions/postCreation/constants.ts"),
				j = s("./src/reddit/actions/postCreation/general.ts");
			const _ = Object(a.a)(g.N),
				y = Object(a.a)(g.O),
				T = Object(a.a)(g.M),
				E = (e, t) => async (s, r, n) => {
					let {
						apiContext: o
					} = n, a = r();
					const {
						name: b,
						isProfile: p
					} = e, g = Object(h.e)(a), j = g && !p && Object(u.a)(g.name, b), y = a.creations.api.subreddit.change.pending;
					if (j || y) return;
					const T = Object(l.w)(t);
					if (!b) return void s(x(e, T));
					s(_(e));
					const E = p ? {
						profileName: b
					} : {
						subredditName: b
					};
					if (await s(Object(d.postCreationPageDataRequested)(E)), p || !Object(f.C)(a)) return s(x(e, T));
					const S = e.allowedPostTypes || Object(O.y)(r(), {
						subredditName: b
					});
					if (!S) return void s(x(e, T));
					let C;
					a = r();
					const v = Object(f.mb)(a),
						P = Object(f.C)(a);
					if (v === i.Wb.MEDIA && P) {
						const e = Object(f.W)(a),
							t = Object(m.x)(e),
							s = Object(f.N)(a) && e.items.length > 1,
							r = !t && !s;
						if (s && !S.galleries) C = m.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !S.images) C = m.q.ImageWillBeRemoved;
						else if (t && !S.videos) {
							const t = a.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							S.images ? s > i.gb && (C = m.q.VideoWillBeRemovedTooLongForGif) : C = m.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(C ? Object(c.i)(C) : x({
						...e,
						allowedPostTypes: S
					}, T))
				}, x = function(e, t) {
					let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (i, o) => {
						const {
							name: a,
							isProfile: c
						} = e, d = o().platform.currentPage, l = d.queryParams, u = c ? b.b : b.c;
						let m = "";
						m = a ? u(a) : p.b, m = Object(n.a)(m, {
							...l,
							draft: t || l.draft
						}), (t || d.url.toLowerCase() !== m.toLowerCase()) && (i(y(e)), s && i(Object(j.t)(!0)), i(Object(j.i)()), i(Object(r.c)(m)))
					}
				}, S = e => async (t, s) => {
					const i = s().platform.currentPage,
						o = i.queryParams,
						a = Object(n.a)(i.url, {
							...o,
							collection: e
						});
					t(Object(r.c)(a))
				}, C = () => async (e, t) => {
					const s = t().platform.currentPage,
						n = Object(o.a)(s.url, ["collection"]);
					e(Object(r.c)(n))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return k
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return D
			})), s.d(t, "p", (function() {
				return F
			})), s.d(t, "j", (function() {
				return R
			})), s.d(t, "l", (function() {
				return M
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "m", (function() {
				return V
			})), s.d(t, "k", (function() {
				return G
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "n", (function() {
				return q
			})), s.d(t, "s", (function() {
				return X
			})), s.d(t, "r", (function() {
				return K
			})), s.d(t, "g", (function() {
				return J
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return re
			})), s.d(t, "o", (function() {
				return ae
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/formatApiError/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/postCreation/general.ts"),
				a = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/models/StructuredStyles/index.ts");
			var b = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/models/PostDraft/index.ts"),
				h = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				O = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts");
			const j = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: f.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: f.b.Markdown,
							body: e.body || void 0
						} : {
							kind: f.b.RichText,
							body: e.body || void 0
						}, {
							subredditId: e.subreddit || void 0,
							contentCategory: e.content_category || void 0,
							created: e.created,
							flair: e.flair,
							id: e.id,
							isChatPost: !!e.discussion_type,
							isNSFW: !!e.nsfw,
							isOriginalContent: !!e.original_content,
							isSpoiler: !!e.spoiler,
							modified: e.modified || void 0,
							sendReplies: !!e.send_replies,
							isPublicLink: !!e.is_public_link,
							title: e.title || "",
							...t
						}
					})(t);
					return e.postDraftIds.push(s.id), e.postDrafts[s.id] = s, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === g.f.User) {
						const s = Object(h.a)(t, Object(p.h)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(O.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var _ = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				y = s("./src/reddit/models/PostCreationForm/index.ts"),
				T = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/models/User/index.ts"),
				S = s("./src/reddit/selectors/postCreations.ts"),
				C = s("./src/reddit/selectors/postDraft.ts"),
				v = s("./src/reddit/selectors/profile.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const k = "POST_DRAFT__LIST_PENDING",
				w = "POST_DRAFT__LIST_LOADED",
				D = "POST_DRAFT__LIST_FAILED",
				N = Object(i.a)(k),
				A = Object(i.a)(w),
				L = Object(i.a)(D),
				F = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const i = t();
					if (!Object(I.k)(i) || Object(C.b)(i)) return;
					e(N());
					const o = await (e => Object(l.a)(Object(u.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.jb.GET
					}))(n());
					o.ok ? e(A(j(o.body))) : e(L(o.error))
				}, R = "POST_DRAFT__SAVE_DRAFT_PENDING", M = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", U = "POST_DRAFT__SAVE_DRAFT_FAILED", V = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", W = Object(i.a)(R), $ = Object(i.a)(M), H = Object(i.a)(U), z = Object(i.a)(V), Q = Object(i.a)(G), Y = Object(i.a)(B), X = Object(i.a)(q), K = e => async (t, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s(),
						m = Object(C.g)(d),
						p = Object(S.bb)(d);
					if (m || p) return;
					const f = Object(C.h)(d, e);
					if (!f) return;
					t(W(f)), T.g(d, f);
					const h = await ((e, t, s) => Object(l.a)(Object(u.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.jb.PUT : r.jb.POST,
						data: Object(_.a)(t)
					}).then(e => e.body.fields && Object(y.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.I.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(o(), f, e);
					if (h.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(_.c)(h.body);
						t($({
							draftId: s,
							draftsCount: r
						})), e || t(Object(a.a)(f.destSubreddit, s, !1))
					} else {
						const e = h.error;
						e.type === r.I.BAD_CAPTCHA_ERROR ? t(Y()) : e.type === r.I.VALIDATION_ERROR ? t(z(e)) : e.type === r.I.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t(H(e)), t(Object(c.f)({
							duration: c.a,
							kind: E.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, J = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(J), ee = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					t(Z(e));
					let i = y.f;
					const o = s();
					if (e.subredditId) {
						const t = Object(P.U)(o, {
								subredditId: e.subredditId
							}),
							s = Object(v.p)(o, {
								profileId: e.subredditId
							}),
							r = Object(I.k)(o);
						t ? i = {
							isProfile: !1,
							name: t.name
						} : s && r && (i = {
							isProfile: !0,
							name: Object(x.e)(r)
						})
					}
					await t(Object(a.a)(i, e.id, !1));
					const c = Object(C.h)(s(), e.id);
					c && T.j(s(), c)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ne = Object(i.a)(te), ie = Object(i.a)(se), oe = Object(i.a)(re), ae = (e, t) => async (s, i, a) => {
					let {
						apiContext: b
					} = a;
					const p = i();
					if (Object(C.a)(p, e)) return;
					const f = Object(C.d)(p, {
						draftId: e
					});
					f && T.h(p, f), s(oe({
						draftId: e
					}));
					const h = await (async (e, t) => Object(l.a)(Object(u.a)(e, [m.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.jb.DELETE
					}))(b(), e);
					if (h.ok) {
						const {
							draftsCount: r
						} = Object(_.c)(h.body);
						s(ne({
							draftId: e,
							draftsCount: r
						}));
						const n = Object(d.w)(t);
						e === n && s(Object(o.q)(!0, t))
					} else {
						const t = h.error;
						s(ie({
							draftId: e,
							apiError: t
						})), s(Object(c.f)({
							duration: c.a,
							kind: E.b.Error,
							text: Object(n.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "j", (function() {
				return R
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "h", (function() {
				return V
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/flair/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/subreddit.ts");
			const p = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(n.a)(p),
				O = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				j = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				_ = Object(n.a)(g),
				y = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				E = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				x = Object(n.a)(T),
				S = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				v = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				P = Object(n.a)(C),
				I = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				k = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				w = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				D = Object(n.a)(k),
				N = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				A = Object(n.a)(w),
				L = (e, t) => async (s, r, n) => {
					let {
						apiContext: i
					} = n;
					const o = r(),
						a = Object(b.U)(o, {
							subredditId: e
						}).name;
					s(f());
					const d = await Object(c.k)(i(), a, t);
					if (d.ok) {
						s(h({
							subredditId: e,
							isEnabled: t
						}))
					} else s(O());
					return d.ok
				}, F = (e, t) => async (s, r, n) => {
					let {
						apiContext: i
					} = n;
					const o = r(),
						a = Object(b.U)(o, {
							subredditId: e
						}).name;
					s(j());
					const d = await Object(c.j)(i(), t, l.d.LinkFlair, a);
					if (d.ok) {
						s(_({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(y());
					return d.ok
				}, R = (e, t) => async (s, n, i) => {
					let {
						apiContext: d
					} = i;
					const m = n(),
						p = Object(b.U)(m, {
							subredditId: t
						}).name;
					s(E());
					const f = await Object(c.f)(d(), e, p, l.d.LinkFlair);
					let h = f.ok && !(f.body && !1 === f.body.success);
					if (h) {
						const r = f.body;
						if (s(x({
								subredditId: t,
								template: r
							})), r.id) {
							const n = e.styleTemplate,
								i = m.structuredStyles.flairTemplate.models[r.id];
							n ? h = await s(Object(o.d)(t, r.id, n)) : i && (h = await s(Object(o.c)(t, r.id)))
						}
					}
					if (h) {
						const e = Object(a.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						s(Object(a.f)(e))
					} else {
						s(S());
						const n = Object(a.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), R(e, t));
						s(Object(a.f)(n))
					}
					return h
				}, M = (e, t) => async (s, n, i) => {
					let {
						apiContext: o
					} = i;
					const d = n(),
						l = Object(b.U)(d, {
							subredditId: t
						}).name;
					if (s(v()), (await Object(c.b)(o(), e, l)).ok) {
						s(P({
							subredditId: t,
							templateId: e
						}));
						const n = Object(a.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						s(Object(a.f)(n))
					} else {
						s(I());
						const n = Object(a.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						s(Object(a.f)(n))
					}
				}, U = (e, t) => async (s, n, i) => {
					let {
						apiContext: o
					} = i;
					const d = n(),
						p = Object(m.d)(d, {
							subredditId: t
						}).templateIds,
						f = Object(b.U)(d, {
							subredditId: t
						}).name;
					if (s(D({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), f, l.d.LinkFlair, e)).ok) {
						s(N());
						const e = Object(a.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						s(Object(a.f)(e))
					} else {
						s(A({
							subredditId: t,
							templateIds: p
						}));
						const n = Object(a.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(a.f)(n))
					}
				}, V = e => {
					let {
						post: t,
						previewFlair: s,
						selectedTemplateId: r
					} = e;
					return async (e, n, o) => {
						let {
							apiContext: a
						} = o;
						const l = t.flair.filter(e => !Object(d.q)(e.type));
						if (s && l.unshift(s), e(Object(i.S)({
								[t.id]: {
									flair: l
								}
							})), s) {
							const e = Object(d.g)(s);
							Object(c.h)(a(), t.id, r, e)
						} else Object(c.h)(a(), t.id, "", "")
					}
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "c", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/forEach.js"),
				n = s.n(r),
				i = s("./node_modules/lodash/isEqual.js"),
				o = s.n(i),
				a = s("./node_modules/lodash/values.js"),
				c = s.n(a),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/imageUploads.ts"),
				u = s("./src/reddit/helpers/media/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var h = s("./src/reddit/helpers/trackers/blade.ts"),
				O = s("./src/reddit/models/Image/index.tsx"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/telemetry/index.ts");
			const _ = e => {
					let {
						subredditId: t,
						flairId: s,
						imageKey: r,
						imageData: n
					} = e;
					return async (e, i, o) => {
						const a = i(),
							c = Object(g.U)(a, {
								subredditId: t
							});
						if (!c) return !1;
						e(Object(l.k)(n));
						const d = await (async (e, t, s, r, n, i) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
							method: m.jb.POST,
							data: {
								filepath: r,
								imagetype: n,
								mimetype: i
							}
						}))(o.apiContext(), c.name, s, n.file.name, r, await Object(u.h)(n.file));
						let h = !1;
						try {
							const t = await Object(l.g)(i(), d, n, O.a.FlairTemplates);
							t && e(Object(l.j)(t)), h = !0
						} catch (j) {
							if (j instanceof Error) throw j;
							e(Object(l.i)(j))
						}
						return h
					}
				},
				y = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS",
				T = Object(d.a)(y),
				E = (e, t, s) => async (r, i, a) => {
					const {
						apiContext: d
					} = a;
					let u = i();
					const {
						pendingImages: y,
						...E
					} = s;
					let x = E;
					const S = Object(g.U)(u, {
						subredditId: e
					});
					if (!S) return !1;
					const C = u.structuredStyles.flairTemplate.models[t];
					if (C && o()(C, x)) return !0;
					if (y) {
						const s = [];
						if (n()(y, (n, i) => {
								n && s.push(r(_({
									flairId: t,
									imageData: Object(O.m)(n),
									imageKey: i,
									subredditId: e
								})))
							}), !(await Promise.all(s)).every(e => e)) return !1;
						x = ((e, t, s) => {
							const r = {
								...e
							};
							return n()(t, (e, t) => {
								const n = e && s.imageUploads[e.id];
								n && n.kind === O.b.TempUploaded && (r[t] = n.url)
							}), r
						})(x, y, i())
					}
					u = i();
					let v = null,
						P = null;
					const I = [];
					try {
						(v = await Object(l.f)(u, O.a.FlairTemplates)) && (P = Object(l.m)(v)(r, i, a), I.push(...c()(v.imagesByKey)))
					} catch (N) {
						return !1
					}
					const k = await (async (e, t, s, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
							method: m.jb.PUT,
							data: r
						}))(d(), S.name, t, x),
						w = C ? "edit_post_flair_template" : "save_post_flair_template",
						D = Object(h.e)(u, w);
					if (k.ok) {
						let e;
						if (P) try {
							await P, e = ((e, t, s) => {
								const r = {
									...e
								};
								return t.forEach(e => {
									const t = s.imageUploads[e.id];
									t && t.kind === O.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
								}), r
							})(x, I, i())
						} catch (N) {
							e = null
						} else e = x;
						r(T({
							flairId: t,
							template: e || x
						}))
					} else v && v.websocket.close();
					return Object(j.a)({
						...D,
						actionInfo: {
							...D.actionInfo,
							success: k.ok
						}
					}), k.ok
				}, x = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", S = Object(d.a)(x), C = (e, t) => async (s, r, n) => {
					let {
						apiContext: i
					} = n;
					const o = r(),
						a = Object(g.U)(o, {
							subredditId: e
						});
					if (!a) return !1;
					const c = await (async (e, t, s) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
							method: m.jb.DELETE
						}))(i(), a.name, t),
						d = Object(h.e)(o, "delete_flair_template");
					return c.ok && s(S({
						flairId: t
					})), Object(j.a)({
						...d,
						actionInfo: {
							...d.actionInfo,
							success: c.ok
						}
					}), c.ok
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return p
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/helpers/trackers/screenview.ts");
			const d = "REDDIT_EMBED_LOADED",
				l = "REDDIT_EMBED_FAILED",
				u = Object(n.a)("REDDIT_EMBED_PENDING"),
				m = Object(n.a)(d),
				b = Object(n.a)(l),
				p = (e, t) => async (e, s, r) => {
					let {
						apiContext: n
					} = r;
					const c = s();
					e(u());
					const d = await Object(o.a)(n());
					d.ok && d.body ? !t || d.body.account ? (e(m(d.body)), e(Object(i.d)()), f(c)) : Object(a.a)(e, c) : e(b(d.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Nb.INBOX_PAGES && Object(c.g)(e)
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "h", (function() {
				return o
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				n = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				i = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "b", (function() {
				return G
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				c = s("./src/reddit/actions/login.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subscription/constants.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/constants/posts.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var h = s("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				g = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				j = s("./src/reddit/models/GqlTopLevelField.ts"),
				_ = s("./src/reddit/models/User/index.ts");

			function y(e) {
				const t = [],
					s = [],
					r = {},
					n = {},
					{
						followedRedditorsInfo: i
					} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== _.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(O.a)(a.node.profile);
					r[e.id] = e;
					const {
						isFavorite: s
					} = a.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== j.a.Subreddit) continue;
					const e = Object(g.a)(a.node);
					n[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: r,
					subreddits: n
				}
			}
			var T = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/experiments/emailEnablement.ts"),
				x = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/subscriptions.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const P = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				I = Object(o.a)(l.c),
				k = Object(o.a)(l.b),
				w = Object(o.a)(l.a),
				D = Object(o.a)(l.h),
				N = (Object(o.a)(l.i), Object(o.a)(l.g), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(k());
					const i = await Object(h.a)(r());
					if (i.ok) {
						const t = y(i.body.data);
						e(I(t))
					} else e(w({
						error: i.error
					}))
				}),
				A = (e, t) => t.type === m.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				L = (e, t, s) => async (o, l, b) => {
					let {
						apiContext: p
					} = b, f = e.map(e => e.type === m.a.SUBREDDIT ? {
						id: Object(S.F)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(x.m)(l(), e.name),
						name: `${n.kc}${e.name}`,
						type: e.type
					});
					if (!Object(v.Q)(l())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(c.openRegisterModal)());
					const O = Object(v.k)(l());
					if (O) {
						const t = f.length,
							s = e.length;
						if (f = f.filter(e => !A(O, e)), (e = e.filter(e => !A(O, e))).length !== s || f.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.f)(Object(u.e)(e, T.b.Error)))
						}
						if (!e.length && !f.length) return
					}
					o(D({
						identifiers: f,
						nameIdentifiers: e,
						profileModels: l().profiles.models,
						subredditModels: l().subreddits.models,
						subscriptionsCount: Object(C.b)(l()),
						userIsSubscriber: t,
						widgetId: s
					}));
					const g = await Object(h.c)(p(), {
						subredditNames: f.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (g.ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : r.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [r.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							n = r.fbt._("Successfully followed {communityname}", [r.fbt._param("communityname", s)], {
								hk: "23Snyg"
							}),
							a = r.fbt._("Successfully unfollowed {communityname}", [r.fbt._param("communityname", s)], {
								hk: "jfC0S"
							}),
							c = r.fbt._("Successfully joined {communityname}", [r.fbt._param("communityname", s)], {
								hk: "1W9UY3"
							}),
							d = r.fbt._("Successfully left {communityname}", [r.fbt._param("communityname", s)], {
								hk: "1saMW"
							});
						o(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? n : a : t ? c : d
						}))
					} else {
						o(D({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(C.b)(l()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const n = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.f)(Object(u.e)(n, T.b.Error)))
					}
					return t && Object(E.a)(l()) && (1 === e.length && "profile" === e[0].type ? o(Object(a.c)("user_follow")) : o(Object(a.c)("join"))), g.ok
				}, F = Object(o.a)(l.f), R = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const i = s(),
						o = Object(S.M)(i, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === m.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = i.subscriptions.favoriteSubredditOrder || [],
						d = i.subscriptions.favoriteProfileOrder || [],
						l = c.indexOf(e.id),
						b = d.indexOf(e.id),
						p = -1 === l && -1 === b,
						f = i.subreddits.models,
						O = i.profiles.models,
						g = {
							type: e.type,
							name: o.name
						},
						j = () => Object(S.gb)(s(), {
							identifier: g
						});
					(j() || (await t(L([g], !0)), j())) && (t(F({
						makeFavorite: p,
						identifier: e,
						subredditModels: f,
						profileModels: O
					})), (await Object(h.b)(n(), a, p)).ok || (t(F({
						makeFavorite: !p,
						identifier: e,
						subredditModels: f,
						profileModels: O
					})), t(Object(u.f)({
						text: P(),
						kind: T.b.Error
					}))))
				}, M = Object(o.a)(l.d), U = e => async (t, s, r) => {
					let {
						apiContext: i
					} = r;
					const o = s().multireddits.models,
						a = () => {
							t(Object(u.f)({
								text: P(),
								kind: T.b.Error
							}))
						},
						c = o[e];
					if (!c) return void a();
					const d = !c.isFavorited;
					t(M({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(b.a)(Object(p.a)(e, [f.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(i(), e, d)).ok || (t(M({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, V = Object(o.a)(l.e), G = e => async (t, s, i) => {
					let {
						apiContext: o
					} = i;
					const a = s(),
						c = a.multireddits.models;
					if (!Object(v.Q)(a)) return;
					const d = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(u.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : r.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: T.b.Error
							}))
						},
						l = c[e];
					if (!l) return void d();
					const m = !l.isFollowed;
					t(V({
						follow: m,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, s) => Object(b.a)(Object(p.a)(e, [f.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, m)).ok || (t(V({
						follow: !m,
						multiredditPath: e,
						multiredditsModelsState: c
					})), d(m))
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "f", (function() {
				return g
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/fastdom/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = s("./src/reddit/helpers/tabBadging/index.ts"),
				c = s("./src/reddit/models/Badge/index.ts"),
				d = s("./src/reddit/selectors/appBadges.ts"),
				l = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const m = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				b = Object(i.a)(m),
				p = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(a.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(a.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				f = Object(r.c)({
					basicChannelCount: d.e,
					subredditChannelCount: d.d,
					subredditMentionCount: d.c
				}),
				h = () => async (e, t) => {
					const s = t(),
						r = Object(o.g)(s, {});
					if (!(Object(l.P)(s) || Object(l.Q)(s)) || !r) return;
					const n = Object(d.i)(s);
					p(n, r), e(b({
						hasUnreadMessages: !!n
					}))
				}, O = () => async (e, t) => {
					{
						e(h());
						const s = (e => ({
							inboxCount: Object(d.h)(e),
							basicChannelCount: Object(d.e)(e)
						}))(t());
						Object(a.c)(s)
					}
				}, g = e => async (t, s) => {
					const r = s(),
						n = Object(d.e)(r),
						i = Object(d.h)(r),
						{
							basicChannelCount: o,
							inboxCount: a
						} = e;
					if (n !== o) {
						const e = Object(u.e)({
							count: o,
							key: c.c.ChatTab
						});
						t(Object(u.a)(e))
					}
					if (a && a !== i) {
						const e = Object(u.e)({
							count: a,
							key: c.c.MessageTab
						});
						t(Object(u.a)(e))
					}(n !== o || a && a !== i) && t(h())
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/isEqual.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/ads/store.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				m = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/selectors/media.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const O = [{
					event: b.a.ViewableImpression,
					threshold: d.l,
					viewabilityMinimum: d.m
				}, {
					event: b.a.Impression,
					threshold: d.c,
					viewabilityMinimum: d.d
				}, {
					event: b.a.GalleryItemImpression,
					threshold: d.c,
					viewabilityMinimum: d.d
				}, {
					event: b.a.VendorFullyInView,
					threshold: d.b,
					viewabilityMinimum: d.f
				}, {
					event: b.a.GroupMViewable,
					threshold: d.b,
					viewabilityMinimum: d.m
				}, {
					event: b.a.VendorFullyInViewSeconds5,
					threshold: d.l,
					viewabilityMinimum: d.h,
					remainingTime: d.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: b.a.VendorFullyInViewSeconds15,
					threshold: d.l,
					viewabilityMinimum: d.g,
					remainingTime: d.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = [{
					event: b.a.VideoViewableImpression,
					threshold: d.l,
					viewabilityMinimum: d.k,
					remainingTime: d.k,
					timeViewingInterrupted: 0
				}, {
					event: b.a.VideoFullyViewableImpression,
					threshold: d.a,
					viewabilityMinimum: d.i,
					remainingTime: d.i,
					timeViewingInterrupted: 0
				}, {
					event: b.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: d.k,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: b.a.VideoVendorFullyViewable50,
					threshold: d.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				j = e => e.map(e => {
					let {
						event: t,
						cumulative: s = !1,
						cumulativeElapsedTime: r,
						remainingTime: n,
						threshold: i = null,
						viewabilityMinimum: o,
						checkAudible: a = !1,
						timeViewingInterrupted: c
					} = e;
					return {
						event: t,
						cumulative: s,
						checkAudible: a,
						timer: null,
						fired: !1,
						threshold: i,
						remainingTime: n,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: o,
						timeViewingInitialized: 0,
						timeViewingInterrupted: c
					}
				}),
				_ = () => j(O),
				y = () => j(g),
				T = [d.c, d.e, d.l, d.j, d.a, d.b],
				E = [d.c, d.l, d.j, d.a],
				x = [d.c, d.e, d.l, d.b],
				S = e => "boolean" == typeof e.cumulative && e.cumulative,
				C = Object(a.c)({
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, {
							postId: s.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: s
						} = t;
						const r = Object(h.h)(e, {
							postId: s.id
						});
						if (r) return r.length
					},
					isAudible: e => Object(f.a)(e),
					isPlaying: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.d)(e, {
							postId: s.id
						})
					},
					isFullScreen: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.e)(e, {
							postId: s.id
						})
					}
				}),
				v = Object(m.a)(C);
			class P extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = _(), this.videoStats = y(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, d.r), this.props.trackVideo && this.handleThresholds(e, d.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						if (n()(this.state.event, e) || this.setState({
								event: e
							}), this.props.trackDisplay) {
							const t = this.props.post.media && Object(p.E)(this.props.post.media);
							this.viewabilityStats.forEach(s => {
								(s.event !== b.a.GalleryItemImpression || t) && this.checkViewability(e, s)
							})
						}
						this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = u.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (l.d(e.id, d.r, !1), this.viewabilityStats.forEach(e => {
						S(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (l.d(e.id, d.p, !0), this.videoStats.forEach(e => {
						S(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, d.p, !0), this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					})) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e), e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const s = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - s, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let s, r = !1,
						n = !1;
					return "object" == typeof t ? (s = t.threshold, r = !!t.playing, n = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!r || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: r
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(i, this.inViewStats) && i.length > 0 && l.b(r.id, i, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(o, this.outOfViewStats) && o.length > 0 && l.d(r.id, o, s), this.outOfViewStats = o, this.inViewStats = i
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, d.g) : e.viewabilityMinimum = d.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: r
					} = e.boundingClientRect;
					return !t.threshold && t.event === b.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * s < 3e5 ? d.a : d.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === b.a.GroupMViewable && r * s > 242500 && (t.threshold = d.l), t
				}
				checkViewability(e, t) {
					if (S(t) && t.event === b.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						S(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
					}
				}
				clearTimer(e) {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					const {
						trackDisplay: e,
						trackVideo: t
					} = this.props;
					let s = T;
					return e && !t ? s = x : !e && t && (s = E), o.a.createElement(c.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = v(P)
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, s) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, s) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return V
			})), s.d(t, "a", (function() {
				return G
			})), s.d(t, "b", (function() {
				return $
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/pick.js"),
				i = s.n(n),
				o = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				b = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/Emoji/index.m.less"),
				f = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = b.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: s,
					...r
				} = e;
				return c.a.createElement("div", h({
					style: {
						...s || {},
						backgroundImage: `url('${t}')`
					}
				}, r))
			}, "EmojiDisplay", f.a);
			var g = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				j = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				_ = s("./src/reddit/constants/colors.ts"),
				y = s("./src/reddit/constants/parameters.ts"),
				T = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				S = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = s("./src/reddit/components/Flair/index.m.less"),
				P = s.n(v);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = Object(j.a)(g.b),
				w = b.a.div("FlairWrapper", P.a),
				D = b.a.wrapped(d.a, "CloseButton", P.a),
				N = b.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: s,
						...r
					} = e;
					const n = s;
					return c.a.createElement(O, I({
						style: {
							...A(!!t, n) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", P.a),
				A = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				L = (e, t) => {
					const s = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(s, {
						[y.p]: r,
						[y.s]: t ? "1" : ""
					})
				},
				F = e => e.isFlairFilter ? c.a.createElement(T.default, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(T.default, {
					onClick: () => e.onClick(e.searchableTerm),
					to: L(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class R extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[P.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(C.a)(this.props).flair,
							color: `${V(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(D, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(x.a, {
						className: P.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(C.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(k, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(F, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const M = Object(m.a)(R),
				U = Object(m.a)(e => {
					let t = "",
						s = !1;
					const r = e.richtext.map((r, n) => {
						if (r.e === S.c.Emoji) {
							const i = r;
							return t += i.a, s = !0, c.a.createElement(N, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: i.u,
								key: n,
								title: i.a
							})
						} {
							const e = r;
							return t += e.t, c.a.createElement("span", {
								key: n
							}, e.t)
						}
					});
					let n;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (n = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const i = c.a.createElement(w, {
						className: Object(u.a)(e.className, {
							[P.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...n,
							backgroundColor: e.backgroundColor || Object(C.a)(e).flair,
							color: `${V(e)}`
						}
					}, r, e.isSelected && c.a.createElement(D, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(x.a, {
						className: P.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(C.a)(e).flair
						}
					})));
					return c.a.createElement(F, {
						flair: i,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				V = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(C.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(E.a)(Object(C.a)(e).post, _.a.black, _.a.white) : e.textColor === S.e.Dark ? _.a.black : _.a.white,
				G = b.a.wrapped(M, "TextFlair", P.a),
				B = b.a.wrapped(U, "RichTextFlair", P.a),
				q = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(o.i)(.1, Object(C.a)(i()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				W = b.a.wrapped(e => {
					const t = q(e),
						s = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(F, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", P.a);

			function $(e) {
				const {
					className: t,
					disabled: s = !1,
					flair: n,
					isFlairFilter: i,
					isSelected: o,
					onClick: a,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: b,
					forceSmallEmojis: p,
					to: f
				} = e, h = Object(u.a)({
					[P.a.flairVariant]: i,
					[P.a.small]: i && !e.large,
					[P.a.large]: i && e.large
				}, t);
				switch (n.type) {
					case S.f.Richtext:
						return s || !n.richtext ? null : c.a.createElement(B, {
							backgroundColor: n.backgroundColor,
							className: h,
							forceSmallEmojis: p,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !b,
							richtext: n.richtext,
							subredditName: m,
							textColor: n.textColor,
							to: f
						});
					case S.f.Text:
						return s || !n.text ? null : c.a.createElement(G, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: i,
							isSelected: o,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !b,
							to: f
						});
					case S.f.Meta:
						return c.a.createElement(G, {
							backgroundColor: n.backgroundColor,
							className: t,
							isFlairFilter: i,
							subredditName: m,
							text: n.text,
							textColor: n.textColor,
							redditStyle: !b,
							to: f
						});
					case S.f.Nsfw:
					case S.f.Spoiler:
						return c.a.createElement(W, {
							className: t,
							text: n.text,
							type: n.type
						});
					case S.f.Quarantined:
						return null;
					case S.f.Oc:
						return c.a.createElement(G, {
							backgroundColor: _.a.alienblue,
							text: n.text,
							textColor: S.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return n.text ? c.a.createElement(G, {
							backgroundColor: n.backgroundColor,
							className: h,
							isFlairFilter: i,
							onClick: a,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: n.text,
							redditStyle: !b,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.m.less": function(e, t, s) {
			e.exports = {
				flairVariantInList: "_1Dl-kvSxyJMWO9nuoTof8N"
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/noop.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/FlairList/index.m.less"),
				p = s.n(b);
			const f = Object(c.c)({
					labelNSFW: m.ab
				}),
				h = Object(a.b)(f),
				O = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = h(e => {
				let {
					className: t,
					isFlairFilter: s,
					onClick: r,
					onMouseDown: i,
					disabled: a = !1,
					flair: c,
					labelNSFW: m,
					subredditName: b
				} = e;
				const f = !!c.find(e => e.type === u.f.Richtext),
					h = c.map(e => {
						if (e.type === u.f.Text && f) return null;
						if (!m && e.type === u.f.Nsfw) return null;
						const t = Object(l.j)(e),
							c = `/r/${b}/`,
							h = i ? () => i(e) : n.a,
							g = s && (e.type === u.f.Richtext || e.type === u.f.Text);
						return o.a.createElement(d.b, {
							className: g ? p.a.flairVariantInList : void 0,
							isFlairFilter: s,
							key: O(e),
							onClick: r,
							onMouseDown: h,
							disabled: a,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: b,
							to: Object(l.e)(c, t)
						})
					});
				return o.a.createElement("div", {
					className: t
				}, h)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/FlairList/index.tsx"),
				l = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/flair.ts"),
				p = s("./src/reddit/helpers/trackers/postFlair.ts"),
				f = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/components/FlairWrapper/index.m.less"),
				j = s.n(g);
			const _ = Object(o.b)(() => Object(a.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(u.q)(e, {
							pageLayer: s
						})
					},
					isPostFlairEnabled: (e, t) => Object(h.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.U)(e, {
							subredditId: s.belongsTo.id
						}).name
					}
				})),
				y = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: r.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: f.f.Oc
					}), e.isMeta && t.push({
						text: r.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: f.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = _(e => {
				let {
					className: t,
					disableFlair: s,
					flairPosition: r,
					isFlairFilter: n,
					isPostFlairEnabled: o,
					nowrap: a,
					post: u,
					sendEvent: h,
					subredditName: O,
					titleFlair: g
				} = e;
				const _ = Object(l.a)(),
					T = r === f.b.Left,
					E = g || y(u),
					x = [];
				let S = [];
				T ? E.map(e => {
					Object(b.q)(e.type) ? x.push(e) : S.push(e)
				}) : S = E;
				const C = a ? j.a.flairNoWrap : x.length > 0 || S.length > 0 ? j.a.flairWrapper : null,
					v = e => {
						const t = {
							id: u.belongsTo.id,
							eventType: u.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(m.d)(m.a.SearchResults), h && h(Object(p.a)(u.id, t))
					},
					P = e => {
						Object(m.d)(m.a.SearchResults), h && h(Object(p.e)(e, u.id))
					},
					I = !(s || !E || !E.length);
				return I ? i.a.createElement("div", {
					className: Object(c.a)(C, t),
					"data-ignore-click": _
				}, I && x && i.a.createElement(d.a, {
					className: j.a.flairList,
					isFlairFilter: n,
					key: "leftFlair",
					onClick: v,
					onMouseDown: P,
					flair: x,
					disabled: !o,
					subredditName: O
				}), I && i.a.createElement(d.a, {
					className: j.a.flairList,
					isFlairFilter: n,
					key: "rightFlair",
					onClick: v,
					onMouseDown: P,
					flair: S,
					disabled: !o,
					subredditName: O
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const i = () => null;
			t.a = Object(r.a)({
				ErrorComponent: i,
				getComponent: () => Object(n.a)(() => s.e("SubredditHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return O
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/timeAgo/index.ts"),
				o = s("./src/reddit/hooks/useLocale.ts");
			var a = function(e) {
					let {
						seconds: t,
						...s
					} = e;
					var r;
					const a = Object(o.a)(),
						c = {
							...s,
							locale: null !== (r = s.locale) && void 0 !== r ? r : a
						};
					return n.a.createElement(n.a.Fragment, null, Object(i.d)(t, c))
				},
				c = s("./src/lib/humanizeDate/index.ts");
			var d = function(e) {
					let {
						seconds: t,
						...s
					} = e;
					var r;
					const i = Object(o.a)(),
						a = {
							...s,
							locale: null !== (r = s.locale) && void 0 !== r ? r : i
						};
					return n.a.createElement(n.a.Fragment, null, Object(c.a)(t, a))
				},
				l = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				u = s("./src/lib/constants/index.ts");
			var m = function(e) {
					let {
						seconds: t,
						locale: s
					} = e;
					const r = Object(o.a)(),
						i = null != s ? s : r;
					return n.a.createElement(n.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
						const s = e * u.Sb;
						return new Date(s).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(t, i))
				},
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/lib/eventTools/index.ts");

			function f(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function h(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.DEFAULT_LOCALE;
				const n = Object(p.e)(e, t),
					i = new Date(e * u.Sb);
				let o;
				if (n === p.a.Live || s) return b.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return n === p.a.Future ? o = Object(p.d)(e) ? b.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? f(i, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(i, r) : n === p.a.Past && (o = Object(p.d)(e) ? b.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : f(i, r)), `${o} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(i,r)}`
			}
			var O = function(e) {
				let {
					startTime: t,
					endTime: s,
					isLive: r,
					locale: i
				} = e;
				const a = Object(o.a)(),
					c = null != i ? i : a;
				return n.a.createElement(n.a.Fragment, null, h(t, s, r, c))
			};
			s("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return O
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => n.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				O = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return n.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(o.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(d.b)(s)(e)
					}
				}),
				j = Object(c.a)(O, [a.a.Click, a.a.Keydown]),
				_ = Object(c.a)(h, [a.a.Click, a.a.Keydown]),
				y = Object(i.b)(g);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? n.a.createElement(j, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : n.a.createElement(_, b({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const s = Object(i.a)(e, t);
				class r extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(s, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(r)
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js");
			const n = Object(r.createContext)(!1);

			function i() {
				return Object(r.useContext)(n)
			}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return w
			}));
			var r = s("./src/lib/isUrl/index.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/reddit/controls/ContentType/index.tsx"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				p = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/telemetry/models/Outbound.ts"),
				g = s("./src/reddit/components/Thumbnail/index.m.less"),
				j = s.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => e.placeholderImage || Object(h.a)(e).placeholderImage,
				T = e => e.placeholderImage ? "cover" : Object(h.a)(e).placeholderImagePosition,
				E = c.a.span("LinkText", j.a),
				x = e => {
					let {
						className: t,
						onClick: s,
						children: r
					} = e;
					return i.a.createElement("div", {
						onClick: s,
						className: Object(o.a)(j.a.linkIcon, t)
					}, r)
				},
				S = e => i.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(j.a.hiddenImage, e.className)
				}),
				C = e => {
					const t = i.a.createRef(),
						{
							src: s,
							errorSrc: r
						} = e;
					return s && r && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), i.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(j.a.thumbnail, j.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(h.a)(e).button : Object(h.a)(e).line
						}
					}, e.isOutbound && i.a.createElement(x, {
						className: e.linkIconClassName
					}, i.a.createElement(b.a, {
						className: Object(o.a)(j.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && i.a.createElement(E, {
						className: e.linkTextClassName
					}, e.text)), i.a.createElement(S, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				v = e => e.isOutbound ? Object(h.a)(e).button : e.placeholderImage ? "transparent" : Object(h.a)(e).line,
				P = e => {
					const t = y(e),
						s = t && {
							background: Object(f.g)(Object(h.a)(e).placeholder, t, T(e))
						};
					return i.a.createElement("div", {
						className: Object(o.a)(j.a.thumbnail, j.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: v(e)
						}
					}, (!e.placeholderImage || e.showContentType) && i.a.createElement(u.a, {
						className: Object(o.a)(e.contentTypeClassName, j.a.contentType, {
							[j.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && i.a.createElement(x, {
						className: e.linkIconClassName
					}, i.a.createElement(b.a, {
						className: Object(o.a)(j.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && i.a.createElement(E, {
						className: e.linkTextClassName
					}, e.text)))
				},
				I = e => i.a.createElement(C, _({}, e, {
					className: Object(o.a)(j.a.blurredThumbnail, e.className)
				})),
				k = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: n,
						crosspost: a,
						forceShowNSFW: c,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: b,
						outboundLinkIconClassName: f,
						post: h,
						redditStyle: g,
						removeLink: _,
						showContentType: T,
						templatePlaceholderImage: E,
						text: x,
						theme: S,
						usePreview: C
					} = e, v = !S.subredditContext.shouldShowNSFWContent && (h.isNSFW || !(!a || !a.isNSFW)) && !c, P = y({
						placeholderImage: E,
						redditStyle: g,
						theme: S
					}), I = w(e), k = d ? O.SourceElement.PostImage : O.SourceElement.ListingPostImage, D = N(h, t, P, v, x, S, I, l, T, _, g, u, b, f, n), A = Object(p.D)(h);
					return Object(r.a)(A) && !_ && A.indexOf("redditmedia") < 0 ? i.a.createElement("div", {
						className: Object(o.a)(j.a.container, C ? j.a.usePreview : "", s)
					}, i.a.createElement(m.b, {
						href: Object(p.D)(h),
						isSponsored: h.isSponsored,
						postId: h.id,
						source: h.source,
						sourceElement: k
					}, D)) : i.a.createElement("div", {
						className: Object(o.a)(j.a.container, C ? j.a.usePreview : "", s)
					}, D)
				}),
				w = e => {
					let {
						crosspost: t,
						post: s,
						url: r,
						usePreview: n
					} = e;
					if (r) return r;
					const {
						preview: i,
						media: o,
						thumbnail: a
					} = t || s;
					return n && i ? i.url : s.isSponsored && i && "default" === a.url ? i.url : D(o) ? o.scrubberThumbSource : a.url
				},
				D = e => !!e && e.type === p.o.LIVEVIDEO,
				N = (e, t, s, n, a, c, l, u, m, b, p, f, h, O, g) => {
					const y = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(r.a)(l)) {
						const s = D(e.media),
							r = s ? {
								errorSrc: d.U
							} : {},
							u = Object(o.a)(t, {
								[j.a.verticallyCenterThumbnail]: s
							});
						return n ? i.a.createElement(I, _({
							"data-click-id": "image",
							src: l
						}, r, {
							className: u,
							isOutbound: y && !b,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: a,
							theme: c
						})) : i.a.createElement(C, _({
							alt: e.title,
							className: u,
							src: l
						}, r, {
							isOutbound: y && !b,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: a,
							theme: c
						}))
					}
					return i.a.createElement(P, {
						className: t,
						contentTypeClassName: g,
						placeholderImage: s,
						isMeta: u,
						isOutbound: y && !b,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: O,
						redditStyle: p,
						showContentType: m,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = k
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return {
					...e,
					onPostViewable: n.Q
				}
			}(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var r, n;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(r || (r = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(n || (n = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/constants/posts.ts"),
				a = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				c = s("./src/reddit/hooks/useUserContext.ts"),
				d = s("./src/reddit/models/User/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = n.a.createContext(null);

			function p(e) {
				const t = Object(i.e)(t => Object(l.G)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(c.a)(),
					r = Object(i.e)(e => t ? Object(u.M)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? r : null,
					m = !(!s || (null == t ? void 0 : t.author) !== Object(d.e)(s)),
					b = Object(i.e)(i => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(l.i)(i, {
							postId: e
						}),
						isModerator: !(!n || !i.moderatingSubreddits[n.name]),
						post: t,
						postId: e,
						subreddit: n,
						subredditOrProfile: r,
						userIsOp: m
					}));
				return Object(a.a)(b)
			}

			function f(e) {
				const {
					postId: t,
					children: s
				} = e, r = p(t);
				return n.a.createElement(b.Provider, {
					value: r
				}, s)
			}

			function h(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return n.a.createElement(b.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, m({}, s, r))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function O(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = p(t.postId);
					return n.a.createElement(b.Provider, {
						value: s
					}, n.a.createElement(e, m({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = b
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return b
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = s("./src/reddit/reducers/user/prefs/index.ts"),
				c = s("./src/reddit/selectors/user.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = n.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function u() {
				const e = Object(i.e)(e => ({
					currentUser: Object(c.k)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(c.db)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(c.Q)(e)
				}));
				return Object(o.a)(e)
			}

			function m(e) {
				return n.a.createElement(l.Provider, {
					value: u()
				}, e.children)
			}

			function b(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return n.a.createElement(l.Consumer, null, s => n.a.createElement(e, d({}, t, s)))
				}
				return s.displayName = `UserContext(${t})`, s
			}
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/icons.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/constants/elementClassNames.ts"),
				d = s("./src/reddit/controls/ContentType/index.m.less"),
				l = s.n(d);
			const u = e => Object(i.a)(l.a.contentTypeIcon, e.className),
				m = {
					embed: o.a.embed,
					gallery: o.a.media_gallery,
					gifvideo: o.a.gif_post,
					image: o.a.image_post,
					meta: o.a.poll_post,
					rpan: o.a.video_live,
					rtjson: o.a.text_post,
					text: o.a.text_post,
					video: o.a.video_post,
					liveaudio: o.a.audio
				};

			function b(e) {
				const t = u(e),
					s = e.type && m[e.type] || o.a.link_post;
				return n.a.createElement(a.a, {
					name: s,
					className: Object(i.a)({
						[c.a]: s === o.a.link_post
					}, t)
				})
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				o = s("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = s.n(o);
			t.a = r.a.wrapped(i.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${n.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, s) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(i.a)(e, {
				endpoint: Object(o.a)(`${r.a.gatewayUrl}/desktopapi/v1/me`),
				method: n.jb.GET
			})
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var r = s("./src/redditGQL/operations/SubscribedSubreddits.json"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, r);
			const l = (e, t) => {
					let {
						subredditIds: s,
						subredditNames: r,
						subscribe: o
					} = t;
					return Object(i.a)(Object(a.a)(e, [c.a]), {
						method: n.jb.POST,
						endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: o ? "sub" : "unsub",
							sr: s && s.join(",") || void 0,
							sr_name: r && r.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, s) => Object(i.a)(Object(a.a)(e, [c.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: s ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var r = s("./src/config.ts");
			const n = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				i = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				c = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				l = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = d(e ? o : n),
						s = d(e ? a : i);
					t && s && (t.href = e ? n : o, s.href = e ? i : a)
				},
				u = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: c,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return b
			}));
			var r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				i = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/reddit/helpers/flair.ts"),
				a = s("./src/reddit/helpers/search/searchImpressionId.ts");
			const c = (e, t) => s => {
					const o = `flair_name:'${t.postFlairName}'`;
					return {
						source: "post",
						action: "click",
						noun: "post_flair",
						...i.n(s),
						actionInfo: i.d(s),
						correlationId: Object(r.c)(r.a.SearchResults),
						post: i.I(s, e),
						search: {
							...i.M(s, t),
							query: o,
							queryId: i.bb(s, n.a.SERP),
							impressionId: a.a.get(n.a.SERP)
						},
						subreddit: i.hb(s)
					}
				},
				d = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...i.n(t),
					actionInfo: i.d(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: i.M(t, e),
					subreddit: i.hb(t)
				}),
				l = e => t => {
					const s = Object(o.g)(e);
					return {
						...i.n(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: i.hb(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				u = () => e => ({
					...i.n(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: i.hb(e)
				}),
				m = e => t => {
					const s = Object(o.g)(e);
					return {
						...i.n(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: i.hb(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				b = (e, t) => s => {
					const r = Object(o.g)(e),
						c = i.I(s, t),
						d = `flair_name:'${r}'`;
					return {
						...i.n(s),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: i.hb(s),
						postFlair: {
							id: e.templateId,
							title: r
						},
						post: c,
						search: {
							query: d,
							subredditId: c ? c.subredditId : void 0,
							subredditName: c ? c.subredditName : void 0,
							postFlairName: r,
							originElement: "post_flair",
							queryId: i.bb(s, n.a.SERP),
							impressionId: a.a.get(n.a.SERP),
							originPageType: s.platform.currentPage ? i.u(s.platform.currentPage) : void 0
						},
						feed: i.q(s)
					}
				}
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/helpers/clickSourceData/index.ts");

			function o() {
				const e = Object(n.e)(e => e.platform.currentPage),
					[t, s] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					s(Object(i.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			}));
			var r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				n = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(i.e)(o.j) || n.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? n.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || n.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? n.DEFAULT_LOCALE : e
			};
			t.a = a;
			const c = () => {
				const e = a(),
					t = Object(i.e)(o.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./node_modules/react-redux/es/index.js");

			function i(e) {
				const t = Object(r.useRef)(e);
				return t.current === e || Object(n.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/lib/sentry/index.ts"),
				n = s("./node_modules/react/index.js"),
				i = s("./src/reddit/contexts/Post/index.tsx");

			function o() {
				const e = Object(n.useContext)(i.c);
				return e || r.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/User/index.tsx");

			function i() {
				return Object(r.useContext)(n.a)
			}
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(i.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, i, o = s("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function c(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function d(e, t, s) {
				const r = s.media[0],
					n = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let i = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (n.forEach(s => {
						const n = r[s],
							[o, a] = s.split("x").map(e => parseInt(e));
						(o < i.width && o >= e || a < i.height && a >= t) && (i = {
							height: a,
							width: o,
							url: n
						})
					}), !i.url && n.length) {
					const e = Object.keys(r)[0],
						t = r[e],
						[s, n] = e.split("x").map(e => parseInt(e));
					i = {
						height: n,
						width: s,
						url: t
					}
				}
				return i.url
			}

			function l(e) {
				return e.startsWith("https") ? e : `${o.a.assetPath}/${e}`
			}

			function u(e, t, s) {
				const r = d(e, t, s),
					n = d(2 * e, 2 * t, s);
				return {
					url: l(r),
					url2x: l(n)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(r || (r = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(n || (n = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(i || (i = {}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n = s("./node_modules/lodash/isEqual.js"),
				i = s.n(n),
				o = s("./node_modules/lodash/merge.js"),
				a = s.n(o),
				c = s("./node_modules/lodash/pick.js"),
				d = s.n(c),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/comment/constants.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				b = s("./src/reddit/actions/frontpage/constants.ts"),
				p = s("./src/reddit/actions/header.ts"),
				f = s("./src/reddit/actions/modQueue/constants.ts"),
				h = s("./src/reddit/actions/pages/constants.ts"),
				O = s("./src/reddit/actions/pages/modListing/constants.ts"),
				g = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				j = s("./src/reddit/actions/pages/postCreation.ts"),
				_ = s("./src/reddit/actions/pages/postDraft.ts"),
				y = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				T = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				E = s("./src/reddit/actions/pages/profilePosts.ts"),
				x = s("./src/reddit/actions/pages/search/index.ts"),
				S = s("./src/reddit/actions/pages/subreddit.ts"),
				C = s("./src/reddit/actions/pages/topic.ts"),
				v = s("./src/reddit/actions/postCreation/constants.ts"),
				P = s("./src/reddit/actions/postDraft.ts"),
				I = s("./src/reddit/actions/preferences.ts"),
				k = s("./src/reddit/actions/redditEmbed.ts"),
				w = s("./src/reddit/actions/search.ts"),
				D = s("./src/reddit/actions/structuredStyles/constants.ts"),
				N = s("./src/reddit/actions/subreddit.ts"),
				A = s("./src/reddit/actions/users.ts"),
				L = s("./src/reddit/constants/postLayout.ts"),
				F = s("./src/reddit/constants/preferences.ts"),
				R = s("./src/reddit/constants/theme.ts"),
				M = s("./src/reddit/models/PostCreationForm/index.ts"),
				U = s("./src/reddit/models/PostDraft/index.ts"),
				V = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(r || (r = {}));
			const G = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "liveBarRecommendationsEnabled", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...F.a, "loginOtpEnabled"],
				B = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: V.a,
					commentMode: M.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: l.l.OFF,
					layout: L.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.t.CONFIDENCE,
					editorMode: M.i.RICH_TEXT,
					enableFollowers: !0,
					geopopular: void 0,
					globalTheme: R.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
					liveBarRecommendationsEnabled: !0,
					loginOtpEnabled: !1,
					markMessagesRead: !0,
					nightmode: !1,
					openPostInNewTab: !1,
					over18: !1,
					profileLayout: void 0,
					reduceAnimationsFromAwards: !1,
					rpanDuDismissalTime: void 0,
					showActiveCommunities: !0,
					showPresence: !1,
					showRpanDu: !0,
					showTwitter: !1,
					sort: l.Y.Hot,
					stylesEnabled: !0,
					subreddit: {},
					subscriptionsPinned: void 0,
					surveyLastSeenTime: void 0,
					thirdPartyDataPersonalizedAds: !0,
					thirdPartyPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedContent: !0,
					showLocationBasedRecommendations: !0,
					topContentDismissalTime: 0,
					topContentTimesDismissed: 0,
					rememberCommunitySort: !1,
					useMarkdown: !1,
					gatedSubredditOptIn: !1,
					quarantineOptIn: !1
				},
				q = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				W = (e, t) => {
					if (!t) return e;
					const s = d()({
							...t.account,
							...t
						}, G),
						r = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						n[e] = {
							...q,
							...r && r[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: n
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? M.i.MARKDOWN : M.i.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return i()(o, e) ? e : o
				},
				$ = (e, t, s) => W(e, {
					subreddit: {
						[t]: {
							...q,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.o:
					case u.v: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							commentMode: s
						}
					}
					case v.s:
					case v.Q: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case p.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case p.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case P.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === U.b.Markdown ? M.i.MARKDOWN : M.i.RICH_TEXT
						}
					}
					case I.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case I.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case I.p: {
						const {
							layout: s,
							subredditId: r
						} = t.payload;
						return $(e, r, {
							layout: s
						})
					}
					case I.f:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case I.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case m.i:
						return {
							...e, over18: !0
						};
					case I.c:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case I.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case m.h:
						return {
							...e, gatedSubredditOptIn: t.payload
						};
					case m.j:
						return {
							...e, quarantineOptIn: t.payload
						};
					case I.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							}
						}
						return e;
					case D.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case D.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case I.g:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case I.d:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: a()({}, e.collapsedTraySections, t.payload)
						} : e;
					case m.b:
					case m.c:
					case m.k:
					case m.l:
					case m.g:
					case m.a:
					case m.m:
					case O.e:
					case O.h:
					case h.a:
					case h.e:
					case h.b:
					case h.f:
					case h.d:
					case h.h:
					case b.b:
					case S.SUBREDDIT_LOADED:
					case g.b:
					case g.a:
					case y.e:
					case T.e:
					case T.b:
					case E.PROFILE_POSTS_LOADED:
					case b.f:
					case N.i:
					case w.e:
					case k.b:
					case j.PAGE_LOADED:
					case _.PAGE_LOADED:
					case I.j:
					case I.b:
					case x.c:
					case I.a:
					case A.c:
					case C.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? W(e, t.payload.preferences) : e;
					case I.q: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return $(e, s, r)
					}
					case y.d:
					case T.d:
					case T.a:
					case E.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: r,
								showPresence: n
							} = t.payload.account;
							e.nightmode !== r && (s = {
								...s,
								nightmode: r
							}), e.showPresence !== n && (s = {
								...s,
								showPresence: n
							})
						}
						return s
					}
					case f.h:
					case f.j:
					case f.i:
					case f.g:
					case f.f:
					case f.n:
					case f.m:
					case f.p:
					case f.q:
					case f.w:
					case f.v:
						return t.payload && t.payload.response && t.payload.response.preferences ? W(e, t.payload.preferences) : e;
					case I.n: {
						const s = t.payload,
							{
								enableFollowers: r,
								showActiveCommunities: n
							} = s.additional;
						let i = e;
						return e.enableFollowers !== r && (i = {
							...i,
							enableFollowers: r
						}), e.showActiveCommunities !== n && (i = {
							...i,
							showActiveCommunities: n
						}), i
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/loadableAction/index.ts"),
				o = s("./src/reddit/routes/postCreation/constants.ts");
			const a = [o.b, o.c, o.a],
				c = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				d = e => `/${e}/submit`,
				l = (e, t) => {
					return o.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				u = e => o.a.replace(/:profileName/, e),
				m = {
					action: Object(i.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: c,
					chunk: n.r.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Nb.POST_CREATION
					},
					path: a,
					prefetches: [n.r.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "i", (function() {
				return m
			}));
			var r = s("./node_modules/reselect/es/index.js");
			const n = e => e.appBadges.badges,
				i = Object(r.a)(n, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				o = Object(r.a)(n, e => e && e.chatRooms && e.chatRooms.count || 0),
				a = Object(r.a)(n, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				c = Object(r.a)(i, n, (e, t) => {
					var s;
					return 0 === e && !!(null === (s = t.chatHasNewMessages) || void 0 === s ? void 0 : s.isShowing)
				}),
				d = Object(r.a)(n, e => e && e.activityTab && e.activityTab.count || 0),
				l = Object(r.a)(n, e => e && e.messageTab && e.messageTab.count || 0),
				u = Object(r.a)(d, l, (e, t) => e + t),
				m = Object(r.a)(i, u, (e, t) => e + t)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.f2e42c044b2cb0f95e5a.js.map