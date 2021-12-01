// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.4bde1c23575d4410f6c3.js
// Retrieved at 12/1/2021, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(i.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/brcast/dist/brcast.es.js");
			const n = () => "undefined" != typeof document,
				r = () => n() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: r()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: c
				} = Object(i.a)(o()),
				u = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				l = () => c(o());
			(() => {
				const e = (() => {
					if (!n()) return;
					const e = Object.keys(u).find(e => e in document);
					return e ? u[e] : void 0
				})();
				e && document.addEventListener(e, l)
			})(), t.a = {
				isDocumentHidden: () => !r(),
				isDocumentVisible: r,
				subscribe: a,
				unsubscribe: d
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			const i = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				r = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return O
			}));
			var i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				r = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/BadgeIndicators.json"),
				d = e => Object(o.a)(e, {
					...a
				}),
				c = s("./src/reddit/models/Badge/index.ts");
			const u = Object(i.a)(n.c),
				l = Object(i.a)(n.b),
				b = Object(i.a)(n.d),
				m = Object(i.a)(n.a),
				p = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: c.b.Numbered
					}
				}),
				f = (e, t) => ({
					[c.c.ChatUnreadMessages]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatHasNewMessages]: {
						isShowing: t,
						style: c.b.Filled
					}
				}),
				h = () => async (e, t, {
					gqlContext: s
				}) => {
					e(u());
					const i = await async function(e) {
						const t = await d(e());
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
					}(s);
					i ? (e(l(i)), e(Object(r.d)())) : e(m())
				};
			const O = () => async e => {
				const t = p({
					key: c.c.MessageTab,
					count: 0
				});
				e(b(t))
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return P
			}));
			var i, n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/chat/actions/message/unreadCount.ts"),
				a = s("./src/chat/endpoints/sendbird/index.ts"),
				d = s("./src/reddit/actions/tabBadging.ts"),
				c = s("./src/reddit/selectors/chat.ts"),
				u = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(i || (i = {}));
			const {
				SYNC: l,
				REQUEST_FAILED: b,
				REQUEST_PENDING: m,
				REQUEST_SUCCESS: p
			} = i, f = Object(r.a)(l), h = Object(r.a)(b), O = Object(r.a)(m), g = Object(r.a)(p);
			let j;
			const y = 5 * n.kb,
				P = () => async (e, t, {
					apiContext: s
				}) => {
					const i = t();
					if (!Object(u.K)(i) || !Object(c.d)(i)) return clearTimeout(j);
					j || e((() => async (e, t, {
						gqlContext: s
					}) => {
						const i = t(),
							{
								session: n
							} = i.user;
						if (n && Object(u.K)(i) && Object(c.d)(i)) {
							e(O());
							const t = await Object(a.g)(s());
							t && t.ok && Object(a.j)(t.body) ? (e(g({
								...Object(o.b)(t.body.data)
							})), e(Object(d.d)())) : e(h({
								error: t.error
							}))
						}
					})()), j = setTimeout(() => {
						e(P())
					}, y)
				}
		},
		"./src/reddit/actions/inbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			var i = s("./src/lib/makeActionCreator/index.ts");
			const n = "INBOX__COUNT_UPDATE",
				r = Object(i.a)(n)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/profile/index.ts"),
				r = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				o = s("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(i.a)("MOD_PERMS__REQUEST_PENDING"), Object(i.a)(a), Object(i.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(o.k)(t());
					if (s) {
						const t = Object(r.e)(s);
						await e(Object(n.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const i = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				r = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return D
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return w
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return I
			})), s.d(t, "profilePostsPending", (function() {
				return A
			})), s.d(t, "profilePostsLoaded", (function() {
				return M
			})), s.d(t, "profilePostsFailed", (function() {
				return N
			})), s.d(t, "profilePostsRequested", (function() {
				return R
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return k
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return F
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return L
			})), s.d(t, "morePostsPending", (function() {
				return V
			})), s.d(t, "morePostsLoaded", (function() {
				return U
			})), s.d(t, "morePostsFailed", (function() {
				return G
			})), s.d(t, "morePostsRequested", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/pick.js"),
				n = s.n(i),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/reddit/actions/contentGate.ts"),
				d = s("./src/reddit/actions/externalAccount.ts"),
				c = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				l = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/profile/index.ts"),
				p = s("./src/reddit/actions/subreddit.ts"),
				f = s("./src/reddit/constants/errors.ts"),
				h = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/config.ts"),
				j = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				y = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				_ = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const v = (e, t, s) => Object(P.a)(e, {
				data: s,
				endpoint: Object(_.a)(Object(j.a)(Object(E.a)(`${g.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: y.jb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var T = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				C = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = s("./src/reddit/selectors/listings.ts"),
				x = s("./src/reddit/selectors/profile.ts");
			const D = "PAGE__PROFILE_POSTS_PENDING",
				w = "PAGE__PROFILE_POSTS_LOADED",
				I = "PAGE__PROFILE_POSTS_FAILED",
				A = Object(r.a)(D),
				M = Object(r.a)(w),
				N = Object(r.a)(I),
				R = e => async (t, s, i) => {
					const {
						queryParams: r,
						params: g
					} = e, {
						sort: j,
						t: y
					} = Object(u.b)(r), {
						profileName: P
					} = g, _ = Object(o.a)(`u_${P}`, j, r), E = s(), D = E.listings.postOrder.ids[_], w = Object(S.c)(E, {
						listingKey: _
					}), I = Object(S.d)(E, {
						listingKey: _
					});
					if (await t(m.d(P)), I || D && !w) {
						if (D) {
							const e = Object(x.q)(s(), {
								profileName: P
							});
							t(b.m({
								title: e
							}))
						}
						return
					}
					const R = {
						...n()(e.queryParams, [...h.l, ...h.k, h.h]),
						layout: Object(O.Q)(E, {}).toLowerCase(),
						sort: j,
						t: Object(T.a)(j, y)
					};
					t(A({
						key: _
					}));
					const k = await Object(C.a)("profilePosts", () => v(i.apiContext(), P, R));
					if (!k.ok) return t(N({
						account: k.body.data ? k.body.data.account : null,
						error: k.body.reason ? {
							type: k.body.reason
						} : k.error,
						key: _
					})), k.body.reason === f.a.DeletedProfile && t(Object(a.p)({
						profileName: P
					})), void t(b.n(k.status));
					const F = k.body;
					t(M({
						key: _,
						meta: s().meta,
						...F
					}));
					const L = Object(x.m)(s(), P),
						{
							pinned: V
						} = F;
					t(Object(l.h)({
						profileId: L,
						pinned: V
					})), await Promise.all([t(Object(u.c)(P)), t(Object(p.q)()), t(Object(c.b)()), t(d.o(P))])
				}, k = "PROFILE_POSTS__MORE_POSTS_PENDING", F = "PROFILE_POSTS__MORE_POSTS_LOADED", L = "PROFILE_POSTS__MORE_POSTS_FAILED", V = Object(r.a)(k), U = Object(r.a)(F), G = Object(r.a)(L), B = () => async (e, t, {
					apiContext: s
				}) => {
					const i = t(),
						{
							currentPage: r
						} = i.platform;
					if (!r || !r.routeMatch) return;
					const {
						queryParams: a,
						params: d
					} = r.routeMatch.match, {
						sort: c,
						t: l
					} = Object(u.b)(a), {
						profileName: b
					} = d, m = Object(o.a)(`u_${b}`, c, a), p = Object(S.g)(i, {
						listingKey: m
					});
					if (!p) return;
					const f = Object(S.d)(i, {
							listingKey: m
						}),
						g = Object(S.e)(i, {
							listingKey: m,
							token: p.token
						});
					if (f || g) return;
					e(V({
						key: m,
						fetchedToken: p.token
					}));
					const j = {
							after: p.token,
							dist: p.dist,
							sort: c,
							t: l,
							...n()(a, h.l),
							layout: Object(O.Q)(i, {}).toLowerCase()
						},
						y = await v(s(), b, j),
						P = i.listings.postOrder.ids[m],
						_ = y.body.postIds || [],
						E = {
							...y.body,
							postIds: _.filter(e => !P || !P.includes(e))
						};
					y.ok ? (e(U({
						fetchedToken: p.token,
						key: m,
						meta: i.meta,
						...E
					})), await e(Object(u.c)(b))) : e(G({
						account: y.body.data ? y.body.data.account : null,
						error: y.error,
						fetchedToken: p.token,
						key: m
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "i", (function() {
				return I
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				p = Object(r.a)(m),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				h = "PINNEDPOST__UNPIN_POST_SUCCESS",
				O = Object(r.a)(f),
				g = Object(r.a)(h),
				j = "PINNEDPOST__PIN_POST_PENDING",
				y = "PINNEDPOST__UNPIN_POST_PENDING",
				P = Object(r.a)(j),
				_ = Object(r.a)(y),
				E = "PINNEDPOST__PIN_POST_FAILURE",
				v = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(r.a)(E),
				C = Object(r.a)(v),
				S = e => Object(a.f)({
					buttonAction: I(e, !0),
					buttonText: i.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: i.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				x = (e, t) => Object(a.f)({
					buttonAction: I(e, !0),
					buttonText: i.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: t ? i.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : i.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				D = () => Object(a.f)({
					kind: u.b.Error,
					text: i.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				w = () => Object(a.f)({
					kind: u.b.Error,
					text: i.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				I = (e, t = !1) => async (s, r, {
					apiContext: m
				}) => {
					const p = r(),
						f = p.posts.models[e];
					if (!f) return;
					const h = !Object(l.s)(p, {
						postId: e
					});
					if (h && f.isRemoved) return s((() => Object(a.f)({
						kind: u.b.Error,
						text: i.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const j = f.author,
						y = Object(b.m)(p, j),
						[E, v, I, A, M] = h ? [P, O, T, S, D] : [_, g, C, x, w];
					if (h) {
						if (Object(l.P)(p, {
								profileName: j
							}).length >= n.cb) return void s(Object(o.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const N = Object(l.p)(p, e, j),
						R = !h && N;
					s(E({
						postId: e,
						profileId: y
					})), (await Object(c.r)(m(), e, h, !0)).ok ? (s(v({
						postId: e,
						profileId: y
					})), t || s(A(e, R))) : (s(I({
						postId: e,
						profileId: y
					})), s(M()))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "c", (function() {
				return C
			}));
			var i = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				u = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				m = s("./src/reddit/routes/postCreation/index.ts"),
				p = s("./src/reddit/routes/postCreation/constants.ts"),
				f = s("./src/reddit/selectors/postCreations.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/actions/postCreation/constants.ts"),
				j = s("./src/reddit/actions/postCreation/general.ts");
			const y = Object(a.a)(g.N),
				P = Object(a.a)(g.O),
				_ = Object(a.a)(g.M),
				E = (e, t) => async (s, i, {
					apiContext: n
				}) => {
					let o = i();
					const {
						name: a,
						isProfile: m
					} = e, p = Object(h.e)(o), g = p && !m && Object(l.a)(p.name, a), j = o.creations.api.subreddit.change.pending;
					if (g || j) return;
					const P = Object(u.v)(t);
					if (!a) return void s(v(e, P));
					s(y(e));
					const _ = m ? {
						profileName: a
					} : {
						subredditName: a
					};
					if (await s(Object(c.postCreationPageDataRequested)(_)), m || !Object(f.C)(o)) return s(v(e, P));
					const E = e.allowedPostTypes || Object(O.v)(i(), {
						subredditName: a
					});
					if (!E) return void s(v(e, P));
					let T;
					o = i();
					const C = Object(f.mb)(o),
						S = Object(f.C)(o);
					if (C === r.Vb.MEDIA && S) {
						const e = Object(f.W)(o),
							t = Object(b.x)(e),
							s = Object(f.N)(o) && e.items.length > 1,
							i = !t && !s;
						if (s && !E.galleries) T = b.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (i && !E.images) T = b.q.ImageWillBeRemoved;
						else if (t && !E.videos) {
							const t = o.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							E.images ? s > r.gb && (T = b.q.VideoWillBeRemovedTooLongForGif) : T = b.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(T ? Object(d.i)(T) : v({
						...e,
						allowedPostTypes: E
					}, P))
				}, v = (e, t, s = !0) => async (r, o) => {
					const {
						name: a,
						isProfile: d
					} = e, c = o().platform.currentPage, u = c.queryParams, l = d ? m.b : m.c;
					let b = "";
					b = a ? l(a) : p.b, b = Object(n.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (r(P(e)), s && r(Object(j.s)(!0)), r(Object(j.i)()), r(Object(i.c)(b)))
				}, T = e => async (t, s) => {
					const r = s().platform.currentPage,
						o = r.queryParams,
						a = Object(n.a)(r.url, {
							...o,
							collection: e
						});
					t(Object(i.c)(a))
				}, C = () => async (e, t) => {
					const s = t().platform.currentPage,
						n = Object(o.a)(s.url, ["collection"]);
					e(Object(i.c)(n))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return w
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "d", (function() {
				return A
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "i", (function() {
				return V
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "k", (function() {
				return G
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "n", (function() {
				return q
			})), s.d(t, "s", (function() {
				return X
			})), s.d(t, "r", (function() {
				return Y
			})), s.d(t, "g", (function() {
				return J
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return ie
			})), s.d(t, "o", (function() {
				return ae
			}));
			var i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/formatApiError/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/postCreation/general.ts"),
				a = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var m = s("./src/reddit/constants/headers.ts"),
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
						const s = Object(h.a)(t, Object(p.g)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(O.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var y = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				P = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/selectors/postCreations.ts"),
				C = s("./src/reddit/selectors/postDraft.ts"),
				S = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/user.ts");
			const w = "POST_DRAFT__LIST_PENDING",
				I = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				M = Object(r.a)(w),
				N = Object(r.a)(I),
				R = Object(r.a)(A),
				k = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t();
					if (!Object(D.k)(n) || Object(C.b)(n)) return;
					e(M());
					const r = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: i.jb.GET
					}))(s());
					r.ok ? e(N(j(r.body))) : e(R(r.error))
				}, F = "POST_DRAFT__SAVE_DRAFT_PENDING", L = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", V = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(r.a)(F), Q = Object(r.a)(L), $ = Object(r.a)(V), W = Object(r.a)(U), K = Object(r.a)(G), z = Object(r.a)(B), X = Object(r.a)(q), Y = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s(),
						c = Object(C.g)(o),
						b = Object(T.bb)(o);
					if (c || b) return;
					const p = Object(C.h)(o, e);
					if (!p) return;
					t(H(p)), _.f(o, p);
					const f = await ((e, t, s) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? i.jb.PUT : i.jb.POST,
						data: Object(y.a)(t)
					}).then(e => e.body.fields && Object(P.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: i.I.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(r(), p, e);
					if (f.ok) {
						const {
							id: s,
							draftsCount: i
						} = Object(y.c)(f.body);
						t(Q({
							draftId: s,
							draftsCount: i
						})), e || t(Object(a.a)(p.destSubreddit, s, !1))
					} else {
						const e = f.error;
						e.type === i.I.BAD_CAPTCHA_ERROR ? t(z()) : e.type === i.I.VALIDATION_ERROR ? t(W(e)) : e.type === i.I.SUBMIT_VALIDATION_ERROR ? t(K(e)) : t($(e)), t(Object(d.f)({
							duration: d.a,
							kind: E.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, J = "POST_DRAFT__LOAD_DRAFT", Z = Object(r.a)(J), ee = e => async (t, s, {
					apiContext: i
				}) => {
					t(Z(e));
					let n = P.f;
					const r = s();
					if (e.subredditId) {
						const t = Object(x.Q)(r, {
								subredditId: e.subredditId
							}),
							s = Object(S.p)(r, {
								profileId: e.subredditId
							}),
							i = Object(D.k)(r);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : s && i && (n = {
							isProfile: !0,
							name: Object(v.e)(i)
						})
					}
					await t(Object(a.a)(n, e.id, !1));
					const o = Object(C.h)(s(), e.id);
					o && _.i(s(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", ie = "POST_DELETE_DRAFT_PENDING", ne = Object(r.a)(te), re = Object(r.a)(se), oe = Object(r.a)(ie), ae = (e, t) => async (s, r, {
					apiContext: a
				}) => {
					const m = r();
					if (Object(C.a)(m, e)) return;
					const p = Object(C.d)(m, {
						draftId: e
					});
					p && _.g(m, p), s(oe({
						draftId: e
					}));
					const f = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: i.jb.DELETE
					}))(a(), e);
					if (f.ok) {
						const {
							draftsCount: i
						} = Object(y.c)(f.body);
						s(ne({
							draftId: e,
							draftsCount: i
						}));
						const n = Object(c.v)(t);
						e === n && s(Object(o.p)(!0, t))
					} else {
						const t = f.error;
						s(re({
							draftId: e,
							apiError: t
						})), s(Object(d.f)({
							duration: d.a,
							kind: E.b.Error,
							text: Object(n.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(n.a)("REDDIT_EMBED_PENDING"),
				b = Object(n.a)(c),
				m = Object(n.a)(u),
				p = (e, t) => async (e, s, {
					apiContext: i
				}) => {
					const n = s();
					e(l());
					const d = await Object(o.a)(i());
					d.ok && d.body ? !t || d.body.account ? (e(b(d.body)), e(Object(r.d)()), f(n)) : Object(a.a)(e, n) : e(m(d.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === i.Mb.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "f", (function() {
				return v
			}));
			var i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/fastdom/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/chat/unreadCount.ts"),
				a = s("./src/reddit/actions/inbox.ts"),
				d = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				u = s("./src/reddit/models/Badge/index.ts"),
				l = s("./src/reddit/selectors/appBadges.ts"),
				b = s("./src/reddit/selectors/chat.ts"),
				m = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				p = s("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const O = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				g = Object(r.a)(O),
				j = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(c.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(c.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				y = Object(i.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				P = e => {
					const t = Object(m.a)(e);
					return {
						inboxCount: t ? Object(l.h)(e) : Object(f.F)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(b.a)(e) || 0
					}
				},
				_ = () => async (e, t) => {
					const s = t(),
						i = Object(d.f)(s, {}),
						n = Object(m.a)(s),
						r = Object(f.J)(s) || Object(f.K)(s),
						o = Object(p.g)(s);
					let a = 0;
					r && i && (a = n ? o ? Object(l.i)(s) : Object(l.j)(s) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: s
						} = P(e);
						return t + s
					})(s), j(a, i), e(g({
						hasUnreadMessages: !!a
					})))
				}, E = () => async (e, t) => {
					{
						e(_());
						const s = P(t());
						Object(c.c)(s)
					}
				}, v = e => async (t, s) => {
					const i = s();
					if (Object(m.a)(i)) {
						const s = Object(l.e)(i),
							n = Object(l.h)(i),
							{
								basicChannelCount: r,
								inboxCount: o
							} = e;
						if (s !== r) {
							const e = Object(h.e)({
								count: r,
								key: u.c.ChatTab
							});
							t(Object(h.a)(e))
						}
						if (o && o !== n) {
							const e = Object(h.e)({
								count: o,
								key: u.c.MessageTab
							});
							t(Object(h.a)(e))
						}(s !== r || o && o !== n) && t(_())
					} else {
						const s = Object(b.a)(i),
							n = Object(b.b)(i),
							r = Object(f.F)(i),
							{
								basicChannelCount: d,
								inboxCount: c
							} = e;
						s !== d && t(Object(o.b)({
							...n
						})), c && c !== r && t(Object(a.b)({
							inboxCount: c
						})), (s !== d || c && c !== r) && t(_())
					}
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/lodash/isEqual.js"),
				n = s.n(i),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/ads/store.ts"),
				l = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = s("./src/reddit/connectors/PostViewable/index.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/selectors/media.ts"),
				f = s("./src/reddit/selectors/video.ts");
			const h = [{
					event: m.a.ViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.m
				}, {
					event: m.a.Impression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: m.a.GalleryItemImpression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: m.a.VendorFullyInView,
					threshold: c.b,
					viewabilityMinimum: c.f
				}, {
					event: m.a.GroupMViewable,
					threshold: c.b,
					viewabilityMinimum: c.m
				}, {
					event: m.a.VendorFullyInViewSeconds5,
					threshold: c.l,
					viewabilityMinimum: c.h,
					remainingTime: c.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: m.a.VendorFullyInViewSeconds15,
					threshold: c.l,
					viewabilityMinimum: c.g,
					remainingTime: c.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				O = [{
					event: m.a.VideoViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoFullyViewableImpression,
					threshold: c.a,
					viewabilityMinimum: c.i,
					remainingTime: c.i,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: m.a.VideoVendorFullyViewable50,
					threshold: c.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: s,
					remainingTime: i,
					threshold: n = null,
					viewabilityMinimum: r,
					checkAudible: o = !1,
					timeViewingInterrupted: a
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: o,
					timer: null,
					fired: !1,
					threshold: n,
					remainingTime: i,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: r,
					timeViewingInitialized: 0,
					timeViewingInterrupted: a
				})),
				j = () => g(h),
				y = () => g(O),
				P = [c.c, c.e, c.l, c.j, c.a, c.b],
				_ = [c.c, c.l, c.j, c.a],
				E = [c.c, c.e, c.l, c.b],
				v = e => "boolean" == typeof e.cumulative && e.cumulative,
				T = Object(a.c)({
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(f.b)(e, {
						postId: t.id
					}),
					videoDuration: (e, {
						post: t
					}) => {
						const s = Object(f.h)(e, {
							postId: t.id
						});
						if (s) return s.length
					},
					isAudible: e => Object(p.a)(e),
					isPlaying: (e, {
						post: t
					}) => Object(f.d)(e, {
						postId: t.id
					}),
					isFullScreen: (e, {
						post: t
					}) => Object(f.e)(e, {
						postId: t.id
					})
				}),
				C = Object(b.a)(T);
			class S extends r.Component {
				constructor(e) {
					super(e), this.viewabilityStats = j(), this.videoStats = y(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						n()(this.state.event, e) || this.setState({
							event: e
						}), this.props.trackDisplay && this.viewabilityStats.forEach(t => {
							this.checkViewability(e, t)
						}), this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = l.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && l.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (u.d(e.id, c.r, !1), this.viewabilityStats.forEach(e => {
						v(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (u.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						v(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, c.p, !0), this.videoStats.forEach(e => {
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
					let s, i = !1,
						n = !1;
					return "object" == typeof t ? (s = t.threshold, i = !!t.playing, n = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!i || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t, s = !1) {
					const {
						post: i
					} = this.props, r = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(r, this.inViewStats) && r.length > 0 && u.b(i.id, r, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(o, this.outOfViewStats) && o.length > 0 && u.d(i.id, o, s), this.outOfViewStats = o, this.inViewStats = r
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, c.g) : e.viewabilityMinimum = c.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: i
					} = e.boundingClientRect;
					return !t.threshold && t.event === m.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = i * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === m.a.GroupMViewable && i * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (v(t) && t.event === m.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						v(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					let s = P;
					return e && !t ? s = E : !e && t && (s = _), o.a.createElement(d.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = C(S)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(i.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: n.P
			}))(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var i, n;
			s.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(i || (i = {})),
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/constants/posts.ts"),
				a = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = s("./src/reddit/hooks/useUserContext.ts"),
				c = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n.a.createContext(null);

			function p(e) {
				const t = Object(r.e)(t => Object(u.H)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)(),
					i = Object(r.e)(e => t ? Object(l.I)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? i : null,
					b = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					m = Object(r.e)(r => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(u.i)(r, {
							postId: e
						}),
						isModerator: !(!n || !r.moderatingSubreddits[n.name]),
						post: t,
						postId: e,
						subreddit: n,
						subredditOrProfile: i,
						userIsOp: b
					}));
				return Object(a.a)(m)
			}

			function f(e) {
				const {
					postId: t,
					children: s
				} = e, i = p(t);
				return n.a.createElement(m.Provider, {
					value: i
				}, s)
			}

			function h(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return n.a.createElement(m.Consumer, null, i => {
						if (!i) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, b({}, s, i))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function O(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = p(t.postId);
					return n.a.createElement(m.Provider, {
						value: s
					}, n.a.createElement(e, b({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = m
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return m
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = s("./src/reddit/reducers/user/prefs/index.ts"),
				d = s("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const u = n.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function l() {
				const e = Object(r.e)(e => ({
					currentUser: Object(d.k)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.X)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.K)(e)
				}));
				return Object(o.a)(e)
			}

			function b(e) {
				return n.a.createElement(u.Provider, {
					value: l()
				}, e.children)
			}

			function m(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return n.a.createElement(u.Consumer, null, s => n.a.createElement(e, c({}, t, s)))
				}
				return s.displayName = `UserContext(${t})`, s
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var i = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(r.a)(e, {
				endpoint: Object(o.a)(`${i.a.gatewayUrl}/desktopapi/v1/me`),
				method: n.jb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				r = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts");
			t.a = async e => Object(n.a)(Object(r.a)(e, [o.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: i.jb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return l
			}));
			var i = s("./src/config.ts");
			const n = `${i.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				r = `${i.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${i.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${i.a.assetPath}/img/favicon/favicon-16x16.png`,
				d = "badgeCountSync",
				c = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = c(e ? o : n),
						s = c(e ? a : r);
					t && s && (t.href = e ? n : o, s.href = e ? r : a)
				},
				l = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: d,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				n = s("./node_modules/react-redux/es/index.js");

			function r(e) {
				const t = Object(i.useRef)(e);
				return t.current === e || Object(n.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/User/index.tsx");

			function r() {
				return Object(i.useContext)(n.a)
			}
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i, n, r, o = s("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function d(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, s) {
				const i = s.media[0],
					n = Object.keys(i);
				if (i["0x0"]) return i["0x0"];
				let r = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (n.forEach(s => {
						const n = i[s],
							[o, a] = s.split("x").map(e => parseInt(e));
						(o < r.width && o >= e || a < r.height && a >= t) && (r = {
							height: a,
							width: o,
							url: n
						})
					}), !r.url && n.length) {
					const e = Object.keys(i)[0],
						t = i[e],
						[s, n] = e.split("x").map(e => parseInt(e));
					r = {
						height: n,
						width: s,
						url: t
					}
				}
				return r.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${o.a.assetPath}/${e}`
			}

			function l(e, t, s) {
				const i = c(e, t, s),
					n = c(2 * e, 2 * t, s);
				return {
					url: u(i),
					url2x: u(n)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(i || (i = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(n || (n = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(r || (r = {}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i, n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/merge.js"),
				a = s.n(o),
				d = s("./node_modules/lodash/pick.js"),
				c = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/comment/constants.ts"),
				b = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/frontpage/constants.ts"),
				p = s("./src/reddit/actions/header.ts"),
				f = s("./src/reddit/actions/modQueue/constants.ts"),
				h = s("./src/reddit/actions/pages/constants.ts"),
				O = s("./src/reddit/actions/pages/modListing/constants.ts"),
				g = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				j = s("./src/reddit/actions/pages/postCreation.ts"),
				y = s("./src/reddit/actions/pages/postDraft.ts"),
				P = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				_ = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				E = s("./src/reddit/actions/pages/profilePosts.ts"),
				v = s("./src/reddit/actions/pages/search/index.ts"),
				T = s("./src/reddit/actions/pages/subreddit.ts"),
				C = s("./src/reddit/actions/pages/topic.ts"),
				S = s("./src/reddit/actions/postCreation/constants.ts"),
				x = s("./src/reddit/actions/postDraft.ts"),
				D = s("./src/reddit/actions/preferences.ts"),
				w = s("./src/reddit/actions/redditEmbed.ts"),
				I = s("./src/reddit/actions/search.ts"),
				A = s("./src/reddit/actions/structuredStyles/constants.ts"),
				M = s("./src/reddit/actions/subreddit.ts"),
				N = s("./src/reddit/actions/users.ts"),
				R = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/constants/preferences.ts"),
				F = s("./src/reddit/constants/theme.ts"),
				L = s("./src/reddit/models/PostCreationForm/index.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				U = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(i || (i = {}));
			const G = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...k.a, "loginOtpEnabled"],
				B = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: U.a,
					commentMode: L.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: u.m.OFF,
					layout: R.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: u.u.CONFIDENCE,
					editorMode: L.i.RICH_TEXT,
					enableFollowers: !0,
					geopopular: void 0,
					globalTheme: F.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
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
					sort: u.Y.Hot,
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
					useMarkdown: !1
				},
				q = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				H = (e, t) => {
					if (!t) return e;
					const s = c()({
							...t.account,
							...t
						}, G),
						i = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(i || {}).forEach(e => {
						n[e] = {
							...q,
							...i && i[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: n
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? L.i.MARKDOWN : L.i.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return r()(o, e) ? e : o
				},
				Q = (e, t, s) => H(e, {
					subreddit: {
						[t]: {
							...q,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.c = (e = B, t) => {
				switch (t.type) {
					case l.m:
					case l.t: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							commentMode: s
						}
					}
					case S.s:
					case S.Q: {
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
					case x.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === V.b.Markdown ? L.i.MARKDOWN : L.i.RICH_TEXT
						}
					}
					case D.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case D.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case D.p: {
						const {
							layout: s,
							subredditId: i
						} = t.payload;
						return Q(e, i, {
							layout: s
						})
					}
					case D.f:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case D.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case b.g:
						return {
							...e, over18: !0
						};
					case D.c:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case D.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case D.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: i
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: i
							}
						}
						return e;
					case A.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case A.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case D.g:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case D.d:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: a()({}, e.collapsedTraySections, t.payload)
						} : e;
					case b.a:
					case b.b:
					case b.h:
					case b.i:
					case b.f:
					case b.j:
					case O.e:
					case O.h:
					case h.a:
					case h.e:
					case h.b:
					case h.f:
					case h.d:
					case h.h:
					case m.b:
					case T.SUBREDDIT_LOADED:
					case g.b:
					case g.a:
					case P.e:
					case _.e:
					case _.b:
					case E.PROFILE_POSTS_LOADED:
					case m.f:
					case M.i:
					case I.g:
					case w.b:
					case j.PAGE_LOADED:
					case y.PAGE_LOADED:
					case D.j:
					case D.b:
					case v.c:
					case D.a:
					case N.c:
					case C.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case D.q: {
						const {
							subredditId: s,
							prefs: i
						} = t.payload;
						return Q(e, s, i)
					}
					case P.d:
					case _.d:
					case _.a:
					case E.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: i,
								showPresence: n
							} = t.payload.account;
							e.nightmode !== i && (s = {
								...s,
								nightmode: i
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
						return t.payload && t.payload.response && t.payload.response.preferences ? H(e, t.payload.preferences) : e;
					case D.n: {
						const s = t.payload,
							{
								enableFollowers: i,
								showActiveCommunities: n
							} = s.additional;
						let r = e;
						return e.enableFollowers !== i && (r = {
							...r,
							enableFollowers: i
						}), e.showActiveCommunities !== n && (r = {
							...r,
							showActiveCommunities: n
						}), r
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return l
			}));
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/loadableAction/index.ts"),
				o = s("./src/reddit/routes/postCreation/constants.ts");
			const a = [o.b, o.c, o.a],
				d = Object(i.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
				c = e => `/${e}/submit`,
				u = (e, t) => {
					return o.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				l = e => o.a.replace(/:profileName/, e),
				b = {
					action: Object(r.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: n.s.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Mb.POST_CREATION
					},
					path: a,
					prefetches: [n.s.COMMENTS_PAGE]
				};
			t.a = b
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "i", (function() {
				return f
			}));
			var i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/selectors/chat.ts"),
				r = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const o = e => e.appBadges.badges,
				a = Object(i.a)(r.a, o, n.a, (e, t, s) => {
					var i;
					return e ? (null === (i = t.chatUnreadMessages) || void 0 === i ? void 0 : i.count) || 0 : s
				}),
				d = Object(i.a)(o, e => e && e.chatRooms && e.chatRooms.count || 0),
				c = Object(i.a)(o, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(i.a)(r.a, a, o, n.b, (e, t, s, i) => {
					var n;
					if (0 === t) {
						if (e && (null === (n = s.chatHasNewMessages) || void 0 === n ? void 0 : n.isShowing)) return !0;
						if (!e && i.hasNewMessages) return !0
					}
					return !1
				}),
				l = Object(i.a)(o, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(i.a)(o, e => e && e.messageTab && e.messageTab.count || 0),
				m = Object(i.a)(l, b, (e, t) => e + t),
				p = Object(i.a)(a, b, (e, t) => e + t),
				f = Object(i.a)(a, m, (e, t) => e + t)
		},
		"./src/reddit/selectors/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			}));
			var i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				r = s("./src/reddit/selectors/moderatorPermissions.ts");
			const o = e => e.chat.unread.count,
				a = Object(i.a)(o, e => e.unreadMessages),
				d = e => !(e.chat.isInited || e.chat.unread.api.pending),
				c = (e, t) => {
					const {
						chatConfig: s
					} = n.c;
					return Object(r.b)(s)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(i.a)(e => Object(r.c)(e, {
					experimentName: n.vd,
					experimentEligibilitySelector: o.e
				}), a.a),
				c = Object(i.a)(d, e => e === n.yd.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "i", (function() {
				return C
			}));
			var i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(i.a)(e => Object(r.c)(e, {
					experimentName: n.yb,
					experimentEligibilitySelector: o.e
				}), a.a),
				c = Object(i.a)(d, e => e === n.Ed.Enabled),
				u = Object(i.a)(e => Object(r.c)(e, {
					experimentName: n.xd,
					experimentEligibilitySelector: o.e
				}), a.a),
				l = Object(i.a)(c, u, (e, t) => e && t === n.Dd.Enabled),
				b = Object(i.a)(e => Object(r.c)(e, {
					experimentName: n.Nb,
					experimentEligibilitySelector: o.e
				}), a.a),
				m = Object(i.a)(c, b, (e, t) => e && t === n.bc.Enabled),
				p = Object(i.a)(e => Object(r.c)(e, {
					experimentName: n.vb,
					experimentEligibilitySelector: o.e
				}), a.a),
				f = Object(i.a)(p, e => e === n.Ad.Banner_1st_time),
				h = Object(i.a)(p, e => e === n.Ad.Tooltip_persist),
				O = Object(i.a)(p, e => e === n.Ad.Tooltip_1st_time),
				g = Object(i.a)(e => Object(r.c)(e, {
					experimentName: n.wb,
					experimentEligibilitySelector: o.e
				}), a.a),
				j = Object(i.a)(g, e => e === n.Bd.ContinuousScroll),
				y = Object(i.a)(e => Object(r.c)(e, {
					experimentName: n.nb,
					experimentEligibilitySelector: o.e
				}), a.a),
				P = Object(i.a)(y, e => e === n.jc.Banner1stTime),
				_ = Object(i.a)(y, e => e === n.jc.BannerPersist),
				E = Object(i.a)(e => Object(r.c)(e, {
					experimentName: n.xb,
					experimentEligibilitySelector: o.e
				}), a.a),
				v = Object(i.a)(E, e => e === n.Cd.Enabled),
				T = Object(i.a)(e => Object(r.c)(e, {
					experimentName: n.Jb,
					experimentEligibilitySelector: () => !0
				}), a.a),
				C = Object(i.a)(T, e => e === n.fb.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.4bde1c23575d4410f6c3.js.map