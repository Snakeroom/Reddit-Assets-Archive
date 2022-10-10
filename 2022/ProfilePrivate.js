// https://www.redditstatic.com/desktop2x/ProfilePrivate.44eb4e12b5f6300dab67.js
// Retrieved at 10/10/2022, 10:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "privateListingPending", (function() {
				return B
			})), i.d(t, "privateMixedListingLoaded", (function() {
				return M
			})), i.d(t, "privatePostListingLoaded", (function() {
				return U
			})), i.d(t, "privateListingFailed", (function() {
				return K
			})), i.d(t, "profilePrivateRequested", (function() {
				return W
			})), i.d(t, "morePending", (function() {
				return D
			})), i.d(t, "moreMixedLoaded", (function() {
				return H
			})), i.d(t, "morePostLoaded", (function() {
				return z
			})), i.d(t, "moreFailed", (function() {
				return V
			})), i.d(t, "moreProfilePrivateRequested", (function() {
				return q
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/react-router-redux/es/index.js"),
				r = i("./src/lib/constants/index.ts"),
				n = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/externalAccount.ts"),
				d = i("./src/reddit/actions/pages/profileShared.ts"),
				a = i("./src/reddit/actions/profile/index.ts"),
				l = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/redditGQL/operations/ProfileDownvoted.json"),
				u = i("./src/redditGQL/operations/ProfileGivenGildings.json"),
				m = i("./src/redditGQL/operations/ProfileHidden.json"),
				p = i("./src/redditGQL/operations/ProfileHistoryPosts.json"),
				b = i("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				h = i("./src/redditGQL/operations/ProfileSaved.json"),
				g = i("./src/redditGQL/operations/ProfileUpvoted.json");
			var f = i("./src/reddit/models/Comment/index.ts"),
				y = i("./src/reddit/models/Post/index.ts"),
				v = i("./src/reddit/models/Profile/index.ts"),
				C = i("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				S = i("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				x = i("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				O = i("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				k = i("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				j = i("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var P = e => {
					const {
						listingType: t,
						rawData: i,
						includeIdentity: s,
						includeModerated: r
					} = e, {
						identity: n
					} = i, o = (e => {
						const t = {
							account: null,
							authorFlair: {},
							moderatedPageInfo: void 0,
							moderatedSubredditIds: void 0,
							postFlair: {},
							posts: {},
							preferences: void 0,
							profiles: {},
							pageInfo: void 0,
							subreddits: {},
							itemIds: []
						};
						return e !== v.b.Saved && e !== v.b.ReceivedGildings && e !== v.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!n) return o;
					if (s && (o.account = Object(j.a)(n) || null, o.preferences = Object(O.a)(n.preferences, n.interactions) || null, n.redditor.profile && (o.profiles[n.redditor.profile.id] = Object(k.a)(n.redditor.profile))), r && n.redditor && n.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: i
						} = Object(k.b)(n.redditor.moderatedSubreddits);
						o.moderatedPageInfo = t, o.moderatedSubredditIds = e, o.subreddits = i
					}
					let d;
					if (t === v.b.History) d = i.postsInfoByIds;
					else {
						const e = ((e, t) => {
							switch (t) {
								case v.b.Downvoted:
									return e.identity.downvotedPosts;
								case v.b.Hidden:
									return e.identity.hiddenPosts;
								case v.b.History:
									return null;
								case v.b.Saved:
									return e.identity.saved;
								case v.b.Upvoted:
									return e.identity.upvotedPosts;
								case v.b.ReceivedGildings:
									return e.identity.receivedGildings;
								case v.b.GivenGildings:
									return e.identity.givenGildings
							}
						})(i, t);
						if (!e) return o;
						d = e.edges, o.pageInfo = e.pageInfo
					}
					if (!d) return o;
					for (const a of d) {
						let e;
						const i = t === v.b.History ? a : a.node;
						if (i.__typename === f.d.Comment) {
							const t = Object(C.a)(i);
							if (o.comments || (o.comments = {}), o.comments[t.id] = t, o.itemIds || (o.itemIds = []), o.itemIds.push(t.id), i.authorFlair && (o.authorFlair[t.subredditId] || (o.authorFlair[t.subredditId] = {}), o.authorFlair[t.subredditId][t.author] = Object(w.a)(i.authorFlair)[0]), e = i.postInfo, i.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(x.a)(i.postInfo);
								o.posts[e.id] = e, t && (o.posts[t.id] = t)
							}
						} else e = i, o.itemIds || (o.itemIds = []), o.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: s,
							crosspost: r
						} = e && Object(x.a)(e);
						o.posts[s.id] = s, r && (o.posts[r.id] = r), Object(y.i)(e) || Object(y.j)(e) || (e.authorFlair && (o.authorFlair[s.belongsTo.id] || (o.authorFlair[s.belongsTo.id] = {}), o.authorFlair[s.belongsTo.id][s.author] = Object(w.a)(e.authorFlair)[0]), Object(y.l)(e) ? o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(k.a)(e.profile)) : Object(y.n)(e) && (o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(S.a)(e.subreddit))))
					}
					return o
				},
				_ = i("./src/reddit/helpers/localStorage/index.ts"),
				E = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				T = i("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				L = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				R = i("./src/lib/initializeClient/installReducer.ts"),
				N = i("./src/reddit/reducers/features/comments/index.ts");
			Object(R.a)({
				features: {
					comments: N.a
				}
			});
			const F = {
					[v.b.Downvoted]: (e, t) => Object(l.a)(e, {
						...c,
						variables: t
					}),
					[v.b.Hidden]: (e, t) => Object(l.a)(e, {
						...m,
						variables: t
					}),
					[v.b.Saved]: (e, t) => Object(l.a)(e, {
						...h,
						variables: t
					}),
					[v.b.Upvoted]: (e, t) => Object(l.a)(e, {
						...g,
						variables: t
					}),
					[v.b.ReceivedGildings]: (e, t) => Object(l.a)(e, {
						...b,
						variables: t
					}),
					[v.b.GivenGildings]: (e, t) => Object(l.a)(e, {
						...u,
						variables: t
					})
				},
				A = (e, t) => {
					switch (e) {
						case v.b.Downvoted:
						case v.b.Hidden:
						case v.b.History:
						case v.b.Saved:
						case v.b.Upvoted:
						case v.b.ReceivedGildings:
						case v.b.GivenGildings:
							return t.body.data
					}
				},
				G = e => {
					switch (e.listingType) {
						case v.b.Downvoted:
						case v.b.Hidden:
						case v.b.History:
						case v.b.Saved:
						case v.b.Upvoted:
						case v.b.ReceivedGildings:
						case v.b.GivenGildings:
							return P(e)
					}
				},
				B = Object(n.a)(L.b),
				M = Object(n.a)(L.c),
				U = Object(n.a)(L.i),
				K = Object(n.a)(L.a),
				W = e => async (t, i, n) => {
					const {
						profileName: c,
						listingType: u
					} = e.params, m = i(), b = Object(E.c)(c.toLowerCase(), u), h = m.profilePrivatePage.ids[b] && m.profilePrivatePage.ids[b].length > 0, g = !!m.profilePrivatePage.api.error[b];
					if (m.profilePrivatePage.api.pending[b] || h && !g) return;
					const {
						account: f
					} = m.user, y = !f, C = !(f && f.displayText && m.profiles.moderated.models[f.displayText.toLowerCase()] && m.profiles.moderated.models[f.displayText.toLowerCase()].length);
					let w;
					if (t(B({
							listingKey: b
						})), u === v.b.History) {
						if (!Object(T.a)(m)) {
							const {
								profileName: i
							} = e.params, n = `/user/${i}/`;
							return t(Object(s.c)(n)), void t(K({
								listingKey: b,
								error: {
									type: r.L.AUTHORIZATION_ERROR
								}
							}))
						}
						const i = {
							includeIdentity: y,
							includeModerated: C,
							recentPostIds: Object(_.O)(null == f ? void 0 : f.id).reverse()
						};
						w = await ((e, t) => Object(l.a)(e, {
							...p,
							variables: t
						}))(n.gqlContext(), i)
					} else {
						const e = {
							includeIdentity: y,
							includeModerated: C,
							first: L.h,
							after: null
						};
						w = await F[u](n.gqlContext(), e)
					}
					if (w.ok && w.body) {
						const e = G({
							rawData: A(u, w),
							listingType: u,
							includeIdentity: y,
							includeModerated: C
						});
						u === v.b.Saved || u === v.b.ReceivedGildings || u === v.b.GivenGildings ? await t(M({
							listingKey: b,
							profileName: c,
							...e
						})) : await t(U({
							listingKey: b,
							profileName: c,
							...e
						})), await Promise.all([t(Object(d.d)(c)), t(Object(o.o)(c)), t(Object(a.d)(c))])
					} else t(K({
						listingKey: b,
						error: w.error
					}))
				}, D = Object(n.a)(L.f), H = Object(n.a)(L.e), z = Object(n.a)(L.g), V = Object(n.a)(L.d), q = e => async (t, i, s) => {
					const r = i(),
						n = r.user.account && r.user.account.displayText && r.user.account.displayText.toLowerCase();
					if (!n) return;
					const o = Object(E.c)(n, e);
					if (!r.profilePrivatePage.ids[o] || !r.profilePrivatePage.ids[o].length || !r.profilePrivatePage.pageInfo || !r.profilePrivatePage.pageInfo[o].hasNextPage || r.profilePrivatePage.api.error[o] || r.profilePrivatePage.api.pending[o]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: r.profilePrivatePage.pageInfo[o].endCursor,
						first: L.h
					};
					t(D({
						listingKey: o
					}));
					const a = await F[e](s.gqlContext(), d);
					if (a.ok && a.body) {
						const i = G({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: a.body.data
						});
						e === v.b.Saved || e === v.b.ReceivedGildings || e === v.b.GivenGildings ? await t(H({
							listingKey: o,
							profileName: n,
							...i
						})) : await t(z({
							listingKey: o,
							profileName: n,
							...i
						}))
					} else t(V({
						listingKey: o,
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return v
			})), i.d(t, "b", (function() {
				return w
			})), i.d(t, "c", (function() {
				return S
			})), i.d(t, "d", (function() {
				return x
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				n = i("./src/reddit/actions/toaster.ts"),
				o = i("./src/lib/makeGqlRequest/index.ts"),
				d = i("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				a = i("./src/redditGQL/operations/UpdateSubredditMuteSettings.json"),
				l = i("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json");
			const c = (e, t) => Object(o.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var m = i("./src/reddit/models/Toast/index.ts"),
				p = i("./src/reddit/actions/subreddit/constants.ts"),
				b = i("./src/reddit/actions/subreddit/notifications.ts");
			const h = e => Object(n.f)({
					id: e,
					kind: m.b.Error,
					text: s.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				g = (e, t) => Object(n.f)({
					kind: m.b.SuccessCommunityGreen,
					text: s.fbt._("Muted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					buttonText: s.fbt._("Undo", null, {
						hk: "1lx02Y"
					}),
					buttonAction: t
				}),
				f = (e, t) => Object(n.f)({
					kind: m.b.SuccessCommunityGreen,
					text: s.fbt._("Unmuted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					buttonText: s.fbt._("Undo", null, {
						hk: "2siioQ"
					}),
					buttonAction: t
				}),
				y = Object(r.a)(p.C),
				v = (Object(r.a)(p.f), Object(r.a)(p.B), e => {
					let {
						subredditId: t,
						subredditName: i,
						successCallback: s
					} = e;
					return async (e, r, n) => {
						let {
							gqlContext: o
						} = n;
						if ((await c(o(), t)).ok) s && s(), g(i, C({
							subredditId: t,
							subredditName: i
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				}),
				C = e => {
					let {
						subredditId: t,
						subredditName: i,
						successCallback: s
					} = e;
					return async (e, r, n) => {
						let {
							gqlContext: o
						} = n;
						if ((await u(o(), t)).ok) s && s(), f(i, v({
							subredditId: t,
							subredditName: i
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: i,
						successCallback: s
					} = e;
					return async (e, r, n) => {
						let {
							gqlContext: o
						} = n;
						if ((await c(o(), t)).ok) s && s(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(g(i, S({
							subredditId: t,
							subredditName: i
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: i,
						successCallback: s
					} = e;
					return async (e, r, n) => {
						let {
							gqlContext: o
						} = n;
						if ((await u(o(), t)).ok) s && s(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(f(i, w({
							subredditId: t,
							subredditName: i
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				x = e => {
					let {
						subredditId: t,
						notificationLevel: i
					} = e;
					return async (e, r, d) => {
						let {
							gqlContext: a
						} = d;
						const c = Object(b.a)(i);
						(await ((e, t, i) => Object(o.a)(e, {
							...l,
							variables: {
								input: {
									...i,
									subredditId: t
								}
							}
						}))(a(), t, c)).ok ? (e(y({
							subredditId: t,
							notificationLevel: i
						})), e(Object(n.f)({
							kind: m.b.SuccessCommunityGreen,
							text: Object(b.b)(i)
						}))) : e(Object(n.f)({
							kind: m.b.Error,
							text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return m
			})), i.d(t, "a", (function() {
				return h
			})), i.d(t, "b", (function() {
				return g
			})), i.d(t, "d", (function() {
				return f
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				n = i("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = i("./src/reddit/actions/notificationsInbox/index.ts"),
				d = i("./src/reddit/actions/subreddit/constants.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				l = i("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				c = i("./src/reddit/models/Subreddit/index.ts"),
				u = i("./src/reddit/models/Toast/index.ts");
			const m = Object(r.a)(d.v),
				p = Object(r.a)(d.u),
				b = Object(r.a)(d.t),
				h = e => {
					switch (e) {
						case c.b.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case c.b.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case c.b.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				g = e => {
					switch (e) {
						case c.b.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case c.b.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case c.b.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const f = e => {
				let {
					subredditId: t,
					notificationLevel: i,
					successCallback: r,
					undoCallback: d
				} = e;
				return async (e, c, f) => {
					let {
						gqlContext: y
					} = f;
					var v, C, w;
					e(p());
					const S = h(i),
						x = await Object(l.b)(y(), t, S);
					if ((null === (C = null === (v = x.error) || void 0 === v ? void 0 : v.fields) || void 0 === C ? void 0 : C.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(x.body) && (null === (w = x.body.data.updateSubredditNotificationSettings.errors) || void 0 === w ? void 0 : w.length)) return e(b()), e(Object(a.f)({
						kind: u.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					x.ok && (e(Object(n.c)({
						subredditId: t,
						notificationLevel: i
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: i
							}
						}
					})), r && r(), e(d ? Object(a.f)(Object(a.e)(g(i), u.b.Undo, s.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(o.i)(t, d))) : Object(a.f)(Object(a.e)(g(i), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/constants/elementIds.ts"),
				d = i("./src/reddit/controls/Button/index.tsx"),
				a = i("./src/reddit/components/BackToTop/index.m.less"),
				l = i.n(a);
			const {
				fbt: c
			} = i("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(o.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: i,
					style: s
				} = e;
				return r.a.createElement("div", {
					className: Object(n.a)(t, l.a.container),
					style: s
				}, r.a.createElement(d.l, {
					onClick: () => u(i)
				}, c._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, i) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, i) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./src/reddit/components/ClassicPost/index.tsx"),
				o = (i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./node_modules/react-redux/es/index.js")),
				d = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/constants/gold.ts"),
				l = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = i("./src/reddit/actions/post.ts"),
				m = i("./src/reddit/components/CommentContainer/index.tsx"),
				p = i("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = i("./src/reddit/helpers/getClickInfo.ts"),
				h = i("./src/reddit/helpers/styles/mixins/index.tsx"),
				g = i("./src/reddit/selectors/commentSelector.ts"),
				f = i("./src/reddit/selectors/communityAwards.ts"),
				y = i("./src/reddit/selectors/user.ts"),
				v = i("./src/reddit/components/OverviewChronoComment/index.m.less"),
				C = i.n(v);
			const w = Object(o.b)(() => Object(d.c)({
				comment: g.b,
				isAwarded: (e, t) => {
					const i = Object(g.b)(e, t);
					return !(!i || !i.awardCountsById) && Object.keys(i.awardCountsById).some(t => {
						const i = Object(f.a)(e, t);
						return i && i.coinPrice >= a.g
					})
				},
				isNightmodeOn: y.db
			}), e => ({
				openPost: t => e(Object(u.L)(t))
			}));
			var S = Object(c.a)(w(e => {
					const {
						comment: t,
						commentId: i,
						first: s,
						isAwarded: n,
						isNightmodeOn: o,
						last: d,
						openPost: a,
						showModTools: c
					} = e;
					if (!t) return null;
					return r.a.createElement(m.a, {
						comment: t,
						onClick: (e, t) => {
							a({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(h.e)(e)
						}
					}, r.a.createElement("div", {
						className: Object(l.a)(C.a.commentOuterWrapper, {
							[C.a.isLast]: d,
							[C.a.isAwarded]: n,
							[C.a.isNightmodeOn]: o
						})
					}, r.a.createElement("div", {
						className: Object(l.a)(C.a.commentWrapper, {
							[C.a.isFirst]: s
						})
					}, r.a.createElement("div", {
						className: C.a.commentSeparator
					}), t.parentId && r.a.createElement("div", {
						className: C.a.commentSeparator
					}), r.a.createElement("div", {
						className: C.a.commentContentWrapper
					}, r.a.createElement(p.a, {
						commentId: i,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: c,
						isExpanded: !0
					})))))
				})),
				x = i("./src/reddit/components/OverviewCommentPost/index.tsx"),
				O = i("./src/reddit/contexts/PageLayer/index.tsx"),
				k = i("./src/reddit/helpers/isComment.ts"),
				I = i("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				j = i.n(I),
				P = i("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(O.u)({
					currentProfileName: O.i,
					isCommentsPage: O.x,
					isCommentPermalink: O.w,
					isProfilePostListing: O.L,
					pageLayer: e => e
				}),
				T = P.a.wrapped(x.a, "OverviewCommentPost", j.a),
				L = P.a.wrapped(n.default, "ClassicPost", j.a);
			t.a = E(e => {
				const {
					itemId: t,
					isFirstInCommentList: i,
					isLastInCommentList: s,
					allowModToolsUnderComments: n,
					height: o,
					width: d,
					...a
				} = e;
				return Object(k.a)(t) ? i ? r.a.createElement(r.a.Fragment, null, r.a.createElement(T, _({}, a, {
					availableWidth: d,
					commentId: t
				})), r.a.createElement(S, {
					commentId: t,
					first: i,
					last: s,
					showModTools: n
				})) : r.a.createElement(S, {
					commentId: t,
					first: i,
					last: s,
					showModTools: n
				}) : r.a.createElement(L, _({}, a, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/lodash/last.js"),
				r = i.n(s),
				n = i("./node_modules/react/index.js"),
				o = i.n(n),
				d = i("./src/lib/constants/index.ts"),
				a = i("./src/lib/opener/index.ts"),
				l = i("./src/reddit/constants/adEvents.ts"),
				c = i("./src/reddit/components/PostList/LoadMore.tsx"),
				u = i("./src/reddit/components/PostList/Placeholder.tsx"),
				m = i("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = i("./src/reddit/components/Scroller/Simple.tsx"),
				b = i("./src/reddit/constants/componentSizes.ts"),
				h = i("./src/reddit/helpers/getClickInfo.ts"),
				g = i("./src/reddit/helpers/isComment.ts"),
				f = i("./src/reddit/contexts/Post/index.tsx"),
				y = i("./src/lib/LRUCache/index.ts"),
				v = i("./src/telemetry/index.ts"),
				C = i("./src/telemetry/models/Timer.ts"),
				w = i("./src/reddit/components/PostList/index.m.less"),
				S = i.n(w);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 500,
				k = new y.a(O),
				I = new y.a(O),
				j = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				P = (e, t, i, s, r, n) => {
					const o = `entered-${e}-${t}-${i?`last-${s}-${r}`:""}`;
					let d = k.get(o);
					return void 0 === d && (d = () => {
						i && n.onBottomViewed(s, r), n.trackOnPostEnteredViewport(e, t)
					}, k.set(o, d)), d
				},
				_ = (e, t) => {
					const i = `click-${e}`;
					let s = I.get(i);
					return void 0 === s && (s = (e, i) => {
						i.isSponsored && t.fireAdPixelsOfType(i, l.a.Click), i.isSponsored && i.source && i.source.outboundUrl ? Object(a.e)(i.source.outboundUrl, a.d.BLANK) : t.openPost({
							postOrComment: i,
							clickInfo: Object(h.a)(e)
						})
					}, I.set(i, s)), s
				};
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new y.a(O), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && v.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = v.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = v.c.end(this.timerId);
						setTimeout(() => Object(v.b)(d.o.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && v.c.cancel(this.timerId), e.itemIds.length && (this.timerId = v.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && v.c.has(this.timerId)) {
						const e = v.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(v.b)(d.o.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && v.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && r()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: i
					} = this.props;
					return v.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (i || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: i
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const s = v.c.end(e);
					setTimeout(() => i(t(s, C.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						itemIds: t,
						...i
					} = this.props, {
						itemIds: s,
						...r
					} = e, n = Object.keys(i), o = Object.keys(r);
					return o.length !== n.length || !!o.some(e => i[e] !== r[e])
				}
				scrollChildForItem(e, t, i, s, r, n) {
					const {
						listingKey: d,
						listingName: a,
						postClickEventFactory: l
					} = this.props, c = `post-${n}-${e}-${t}-${i?"last-index":""}-${a}-${d}`;
					let u;
					if (void 0 === (u = this.scrollChildCache.get(c))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: m
						} = this.props, p = m[e], b = `overview-chrono-list-item-[layout: ${n}]-[itemId: ${e}]`, h = P(p, n, i, d, a, this.props), g = {
							key: b,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: s,
							isLastInCommentList: r,
							isOverlay: !1,
							itemId: e,
							last: i,
							layout: n,
							onClickPost: _(e, this.props),
							postId: p
						}, y = this.props.itemComponent;
						u = {
							estHeight: this.props.estimateItemHeight(e, n, s),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => o.a.createElement(f.a, {
								postId: g.postId
							}, o.a.createElement(y, x({}, g, e)))
						}, this.scrollChildCache.set(c, u)
					}
					return u
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return o.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: i,
						onTryAgain: s
					} = this.props;
					return o.a.createElement("div", {
						className: S.a.placeholder
					}, o.a.createElement(u.a, {
						className: t,
						isLoading: !e,
						layout: i
					}), !!e && o.a.createElement(m.a, {
						apiError: e,
						onTryAgain: s
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: i,
						onLoadMore: s
					} = this.props;
					return o.a.createElement("div", {
						className: S.a.placeholder
					}, o.a.createElement(c.a, {
						isLoading: !!t,
						layout: i,
						countOverride: j[i]
					}), !!e && o.a.createElement(m.a, {
						apiError: e,
						onTryAgain: s
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: i,
						itemIds: s,
						onLoadMore: r
					} = this.props, n = s.map((i, r, n) => {
						const o = r === s.length - 1,
							d = r && s[r - 1],
							a = !o && s[r + 1],
							l = !!Object(g.a)(i) && (!d || !Object(g.a)(d) || e[d].postId !== e[i].postId),
							c = !!Object(g.a)(i) && (!a || !Object(g.a)(a) || e[a].postId !== e[i].postId);
						return this.scrollChildForItem(i, r, o, l, c, t)
					});
					return o.a.createElement("div", null, o.a.createElement(p.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: i && i.token ? i.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: r,
						viewportTopPadding: b.f + b.r
					}, n), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = E
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/lessComponent.tsx"),
				r = i("./src/reddit/components/SidebarContainer/index.m.less"),
				n = i.n(r);
			t.a = s.a.div("container", n.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				a = i("./src/lib/lessComponent.tsx"),
				l = i("./src/reddit/components/TrackingHelper/index.tsx"),
				c = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = i("./src/reddit/constants/experiments.ts"),
				m = i("./src/reddit/constants/location.ts"),
				p = i("./src/reddit/contexts/PageLayer/index.tsx"),
				b = i("./src/reddit/helpers/trackers/navigation.ts"),
				h = i("./src/reddit/selectors/experiments/countrySites.ts"),
				g = i("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = i("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				y = i("./src/reddit/selectors/meta.ts"),
				v = i("./src/reddit/components/SidebarFooter/index.m.less"),
				C = i.n(v);
			const {
				fbt: w
			} = i("./node_modules/fbt/lib/FbtPublic.js"), S = a.a.a("Link", C.a), x = Object(o.c)({
				countryCode: y.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: f.a
			}), O = Object(n.b)(x), k = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), I = e => {
				let {
					countryCode: t,
					reredditContent: i
				} = e;
				return r.a.createElement("div", {
					className: C.a.GreyRereddit
				}, i, !!m.c[t] && r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(S, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, w._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, w._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(S, {
					href: "https://www.reddithelp.com"
				}, w._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, w._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, w._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, w._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, w._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, w._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: C.a.Copyright
				}, w._("Reddit Inc © {year}. All rights reserved", [w._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = k(O(Object(l.c)(e => {
				const t = Object(n.f)().getState(),
					i = Object(h.a)(t, Object(d.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Yc.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Yc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Yc.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(I, {
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
					return i.includes(t) || "en" === t ? r.a.createElement(S, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(c.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(S, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, w._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, w._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(S, {
					href: "https://www.reddithelp.com"
				}, w._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(S, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, w._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, w._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, w._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, w._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(S, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, w._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: C.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: C.a.Copyright
				}, w._("Reddit Inc © {year}. All rights reserved", [w._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/classNames/index.ts"),
				r = i("./node_modules/lodash/throttle.js"),
				n = i.n(r),
				o = i("./node_modules/react/index.js"),
				d = i.n(o),
				a = i("./src/lib/constants/index.ts"),
				l = i("./src/reddit/components/BackToTop/index.tsx"),
				c = i("./src/reddit/components/SidebarFooter/index.tsx"),
				u = i("./src/reddit/constants/componentSizes.ts"),
				m = i("./src/reddit/contexts/PageLayer/index.tsx"),
				p = i("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = i.n(p),
				h = i("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = a.g[1] + 24,
				y = u.f + 8,
				v = y + 152 + 16,
				C = v + f + 8,
				w = h.a.div("Container", b.a),
				S = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: i,
						...s
					} = e;
					return d.a.createElement(l.a, g({
						className: t,
						isOverlay: i,
						style: {
							top: `calc(100vh - ${i?y:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				x = e => {
					let {
						children: t,
						className: i,
						isFakeOverlay: r,
						isSticky: n,
						shouldStickToBottom: o
					} = e;
					return d.a.createElement("div", {
						className: Object(s.a)(i, {
							[b.a.BottomStickyStyles]: o,
							[b.a.StickyStyles]: !o && n && !r,
							[b.a.StickyStylesFakeOverlay]: !o && !!r
						})
					}, t)
				};
			class O extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > v
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
					}, this.handleResize = n()(() => {
						this.updateMeasurements(), this.updateState()
					}, a.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: i,
							children: s,
							className: r,
							hideFooter: n,
							pageLayer: o,
							recommendationsComponent: a,
							reredditButtons: l
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return d.a.createElement(w, {
						className: r,
						innerRef: this.setWrapperRef
					}, d.a.createElement(x, {
						isFakeOverlay: i,
						isSticky: u,
						shouldStickToBottom: m
					}, t, s, a, !n && d.a.createElement(c.a, {
						reredditButtons: l
					})), !a && !this.props.hideBackToTop && d.a.createElement(S, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const k = Object(m.u)();
			t.a = k(O)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = i("./src/reddit/components/SEOTitle/index.tsx"),
				c = i("./src/reddit/components/TrackingHelper/index.tsx"),
				u = i("./src/reddit/contexts/PageLayer/index.tsx"),
				m = i("./src/reddit/controls/Button/index.tsx"),
				p = i("./src/reddit/helpers/trackers/widgets.ts"),
				b = i("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = i("./src/reddit/selectors/experiments/topPosts.ts"),
				g = i("./src/reddit/selectors/structuredStyles.ts"),
				f = i("./src/reddit/selectors/user.ts"),
				y = i("./src/reddit/models/Theme/index.ts"),
				v = i("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				S = e => {
					const t = C(e);
					return Object(y.f)(t)
				},
				x = e => {
					const t = w(e);
					return Object(y.f)(t)
				};
			var O = i("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = i.n(O);
			const {
				fbt: I
			} = i("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.u)(), P = Object(n.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const i = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(g.l)(e, {
							subredditId: i
						}),
						r = Object(f.db)(e);
					return s || r
				},
				nigtmode: f.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = S(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.color = e.fill = x(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: i,
						forceRedditStyle: s,
						headerButton: n,
						id: o,
						onClick: a,
						onHeaderClick: c,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = i ? k.a.widgetContentOnly : k.a.widgetContent, g = !s && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, y = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(d.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: s,
							[k.a.clickable]: !!a,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: a,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(d.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!c
						}),
						id: o,
						style: y,
						onClick: c
					}, r.a.createElement("div", {
						className: Object(d.a)(k.a.widgetTitle, p)
					}, r.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), n), r.a.createElement("div", {
						className: Object(d.a)(h, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, I._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(P(Object(a.a)(Object(c.c)(_))))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var s = i("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const i = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !i && !r
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, i) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			}));
			var s = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/helpers/styles/mixins/loading.m.less"),
				n = i.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(n.a.loadingBackground, {
						[n.a["m-loading"]]: t
					})
				},
				d = e => Object(s.a)(n.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "f", (function() {
				return a
			})), i.d(t, "a", (function() {
				return l
			})), i.d(t, "d", (function() {
				return c
			}));
			var s = i("./src/reddit/selectors/telemetry.ts"),
				r = i("./src/telemetry/models/Event.ts");
			const n = () => e => ({
					source: r.f.HomeFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: s.rb(e).id
					},
					...s.o(e)
				}),
				o = () => e => ({
					source: r.f.CommunityNotificationsSettings,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: s.rb(e).id
					},
					...s.o(e)
				}),
				d = () => e => ({
					source: r.f.PopularFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: s.rb(e).id
					},
					...s.o(e)
				}),
				a = () => e => ({
					source: r.f.SubredditIdBanner,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: s.rb(e).id
					},
					...s.o(e)
				}),
				l = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: s.rb(e).id
					},
					...s.o(e)
				}),
				c = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: s.rb(e).id
					},
					...s.o(e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return d
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "d", (function() {
				return l
			})), i.d(t, "c", (function() {
				return c
			}));
			var s, r, n = i("./src/reddit/constants/tracking.ts"),
				o = i("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const d = (e, t) => i => ({
					source: r.COMMUNITY_WIDGETS,
					action: n.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.xb)(i, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				a = (e, t) => i => ({
					source: r.POST,
					action: n.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.K(i, e),
					subreddit: o.jb(i),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.o(i)
				}),
				l = () => e => ({
					source: r.SIDEBAR,
					action: n.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.o(e)
				}),
				c = e => t => ({
					source: r.TOPICS_WIDGET,
					action: n.c.CLICK,
					noun: s.TOPIC,
					...o.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/pages/ProfilePrivate/index.m.less": function(e, t, i) {
			e.exports = {
				mixedList: "_203kLAn6xQ7ktVOvJCzl9p"
			}
		},
		"./src/reddit/pages/ProfilePrivate/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/actions/pages/profilePrivate/index.ts"),
				a = i("./src/reddit/components/EmptyProfile/index.ts"),
				l = i("./src/reddit/components/JumpToContent/index.tsx"),
				c = i("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				u = i("./src/reddit/components/PostList/index.tsx"),
				m = i("./src/reddit/components/ProfileItemList/index.tsx"),
				p = i("./src/reddit/components/ProfileNavMenu/index.tsx"),
				b = i("./src/reddit/components/ProfileSidebar/index.tsx"),
				h = i("./node_modules/lodash/noop.js"),
				g = i.n(h),
				f = i("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				y = i("./src/reddit/actions/post.ts"),
				v = i("./src/reddit/components/TrackingHelper/index.tsx"),
				C = i("./src/reddit/components/PostList/Placeholder.tsx"),
				w = i("./src/reddit/actions/postList.ts"),
				S = i("./src/reddit/contexts/PageLayer/index.tsx"),
				x = i("./src/reddit/helpers/isComment.ts"),
				O = i("./src/reddit/helpers/isPost.ts"),
				k = i("./src/reddit/helpers/trackers/post.ts"),
				I = (i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./src/lib/objectSelector/index.ts")),
				j = i("./src/reddit/models/Flair/index.ts"),
				P = i("./src/reddit/models/PostCreationForm/index.ts"),
				_ = i("./src/reddit/models/Vote/index.ts");
			const E = {
				t3_1: {
					adSupplementaryText: null,
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
					isSurveyAd: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/1",
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
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
					adSupplementaryText: null,
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
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
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
					adSupplementaryText: null,
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
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
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
					adSupplementaryText: null,
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
						type: j.f.Text,
						text: "hello world"
					}, {
						type: j.f.Spoiler,
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
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
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
					adSupplementaryText: null,
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
						type: j.f.Text,
						text: "hello world"
					}, {
						type: j.f.Spoiler,
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
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/5",
					media: {
						type: "text",
						rteMode: P.i.RICH_TEXT,
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
					adSupplementaryText: null,
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
						type: j.f.Text,
						text: "hello world"
					}, {
						type: j.f.Spoiler,
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
					isSurveyAd: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: P.i.RICH_TEXT,
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
					adSupplementaryText: null,
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
						type: j.f.Text,
						text: "hello world"
					}, {
						type: j.f.Spoiler,
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
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: P.i.RICH_TEXT,
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
			T = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: P.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, _.a.notVoted;
			var T;
			const L = function(e) {
					return e[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "t3_1"]
				}(E),
				R = Object(I.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models;
					return N(e, {
						listingKey: i
					}).filter(e => {
						if (Object(x.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				N = Object(I.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.pages.profileOverview.chrono.ids[i];
					return s ? [...s] : []
				}),
				F = Object(I.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return R(e, {
						listingKey: i
					}).reduce((t, i) => {
						const s = Object(x.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				A = (Object(I.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models;
					return A(e, {
						listingKey: i
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(I.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return R(e, {
						listingKey: i
					}).map(t => Object(x.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				G = Object(I.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models,
						r = A(e, {
							listingKey: i
						}),
						n = {};
					return r.forEach(e => n[e] = s[e]), n
				}),
				B = Object(I.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.features.comments.models,
						r = R(e, {
							listingKey: i
						}),
						n = {};
					return r.forEach(e => !!Object(x.a)(e) && (n[e] = s[e])), n
				});
			var M = i("./src/reddit/selectors/subreddit.ts"),
				U = i("./src/reddit/selectors/tracking.ts"),
				K = i("./src/reddit/selectors/user.ts");
			const W = (e, t) => (e, t, i) => Object(x.a)(e) ? 120 : 47,
				D = (Object(S.u)(), {
					apiError: (e, t) => {
						let {
							listingKey: i
						} = t;
						return e.pages.profileOverview.chrono.api.error[i]
					},
					apiPending: (e, t) => {
						let {
							listingKey: i
						} = t;
						return e.pages.profileOverview.chrono.api.pending[i]
					},
					currentUser: K.k,
					layout: S.S,
					loadMore: (e, t) => {
						let {
							listingKey: i
						} = t;
						return e.pages.profileOverview.chrono.loadMore[i]
					},
					subredditsById: M.eb,
					viewportDataLoaded: U.a,
					commentsById: B,
					itemIds: R,
					itemIdToPostId: F,
					postsById: G,
					estimateItemHeight: W
				}),
				H = Object(o.c)(D);
			Object(n.b)(H, (e, t) => ({
				onBottomViewed: (t, i) => e(w.c(t, i)),
				openPost: t => {
					e(y.L(t))
				},
				trackOnPostEnteredViewport: (t, i) => {
					Object(O.a)(t) && e(y.O(t))
				},
				trackOnPostExitedViewport: (t, i, s) => {
					Object(O.a)(t) && e(y.P(t, s))
				},
				fireAdPixelsOfType: g.a
			}), (e, t, i) => ({
				...e,
				...t,
				...i,
				postClickEventFactory: (e, t) => Object(k.k)(e, t)
			}));
			var z = i("./src/reddit/featureFlags/index.ts"),
				V = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				q = i("./src/reddit/models/Profile/index.ts");
			const Q = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profilePrivatePage.api.pending[i]
				},
				J = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profilePrivatePage.api.error[i]
				},
				X = Object(I.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return (e.profilePrivatePage.ids[i] || []).reduce((t, i) => {
						const s = Object(x.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				Y = Object(S.u)(),
				Z = Object(S.u)(),
				$ = {
					apiError: J,
					apiPending: Q,
					layout: S.S,
					loadMore: (e, t) => {
						let {
							listingKey: i
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[i] || !e.profilePrivatePage.pageInfo[i].hasNextPage) return null;
						const s = e.profilePrivatePage.ids[i];
						return {
							token: s[s.length - 1],
							dist: V.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !Q(e, t) && !J(e, t)
				},
				ee = Object(o.c)({
					...$,
					currentUser: K.k,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: i
						} = t;
						return -1 === i.indexOf(q.b.Saved) && -1 === i.indexOf(q.b.ReceivedGildings) && -1 === i.indexOf(q.b.GivenGildings) ? [] : e.profilePrivatePage.ids[i] || []
					},
					itemIdToPostId: X,
					estimateItemHeight: W
				}),
				te = Object(o.c)({
					...$,
					measureScrollFPS: z.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: i
						} = t;
						return i.indexOf(q.b.Saved) > -1 || i.indexOf(q.b.ReceivedGildings) > -1 || i.indexOf(q.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[i] || []
					},
					postListPlaceholderComponent: () => C.a
				}),
				ie = e => ({
					onBottomViewed: g.a,
					openPost: t => {
						e(y.L(t))
					},
					trackOnPostEnteredViewport: g.a,
					fireAdPixelsOfType: (t, i) => {
						e(y.z(t, i))
					}
				}),
				se = Object(n.b)(ee, ie, (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(k.k)(e, t)
				})),
				re = Object(n.b)(te, e => ({
					...ie(e),
					onFirstPostChanged: g.a,
					adBrandSafetyStatusReceived: g.a,
					trackOnPostExitedViewport: g.a
				}), (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(k.k)(e, t),
					postComponentForLayout: f.b
				}));
			var ne = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				oe = i("./src/reddit/helpers/trackers/screenview.ts"),
				de = i("./src/reddit/layout/page/Listing/index.tsx"),
				ae = i("./src/reddit/pages/ProfilePrivate/index.m.less"),
				le = i.n(ae);
			const ce = Object(o.c)({
					currentUser: K.k
				}),
				ue = Object(n.b)(ce, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				me = (e => Object(v.c)(Y(se(e))))(m.a),
				pe = (e => Object(v.c)(Z(re(e))))(u.a);
			class be extends r.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = q.a[e]();
					return () => r.a.createElement(a.d, {
						text: t
					})
				}
				renderContent() {
					const {
						currentUser: e,
						match: {
							params: {
								listingType: t,
								profileName: i
							}
						}
					} = this.props, s = i.toLowerCase(), n = Object(ne.c)(s, t);
					return e && e.displayText && e.displayText.toLowerCase() === s ? t === q.b.Saved || t === q.b.ReceivedGildings || t === q.b.GivenGildings ? r.a.createElement(me, {
						className: le.a.mixedList,
						itemComponent: c.a,
						listingKey: n,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(oe.s)(n),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(pe, {
						listingKey: n,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(oe.s)(n),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(a.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return r.a.createElement(de.a, {
						fitPageToContent: !0,
						contentNavBar: r.a.createElement(p.a, {
							profileName: e
						}),
						content: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, null), this.renderContent()),
						sidebar: r.a.createElement(b.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ue(be)
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			})), i.d(t, "b", (function() {
				return m
			}));
			var s = i("./src/reddit/constants/experiments.ts"),
				r = i("./src/reddit/helpers/chooseVariant/index.ts"),
				n = i("./src/reddit/selectors/experiments/index.ts"),
				o = i("./src/reddit/selectors/experiments/utils.ts"),
				d = i("./src/reddit/selectors/meta.ts"),
				a = i("./node_modules/reselect/es/index.js");
			const l = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(d.h)(e) && Object(n.f)(e),
					experimentName: s.sc
				}), o.a),
				c = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(d.h)(e) && Object(n.f)(e),
					experimentName: s.rc
				}), o.a),
				u = Object(a.a)(l, c, (e, t) => e || t),
				m = Object(a.a)(l, c, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				let {
					listingKey: i
				} = t;
				return e.tracking.viewportDataLoaded[i]
			}
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"6b1a22b8bc39"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"1d8cfe4853bf"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"2327fadfc9f0"}')
		},
		"./src/redditGQL/operations/ProfileHistoryPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"fd8101a8dbc8"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"3a5b06de063d"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"6d6ac954b0a3"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"9650572fdf06"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.44eb4e12b5f6300dab67.js.map