// https://www.redditstatic.com/desktop2x/ProfilePrivate.dcac88d60f89ffc48f6e.js
// Retrieved at 10/13/2022, 1:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "privateListingPending", (function() {
				return B
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return M
			})), s.d(t, "privatePostListingLoaded", (function() {
				return U
			})), s.d(t, "privateListingFailed", (function() {
				return K
			})), s.d(t, "profilePrivateRequested", (function() {
				return W
			})), s.d(t, "morePending", (function() {
				return D
			})), s.d(t, "moreMixedLoaded", (function() {
				return H
			})), s.d(t, "morePostLoaded", (function() {
				return z
			})), s.d(t, "moreFailed", (function() {
				return V
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/externalAccount.ts"),
				d = s("./src/reddit/actions/pages/profileShared.ts"),
				a = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/ProfileDownvoted.json"),
				u = s("./src/redditGQL/operations/ProfileGivenGildings.json"),
				m = s("./src/redditGQL/operations/ProfileHidden.json"),
				p = s("./src/redditGQL/operations/ProfileHistoryPosts.json"),
				b = s("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				h = s("./src/redditGQL/operations/ProfileSaved.json"),
				g = s("./src/redditGQL/operations/ProfileUpvoted.json");
			var f = s("./src/reddit/models/Comment/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Profile/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				w = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				P = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var j = e => {
					const {
						listingType: t,
						rawData: s,
						includeIdentity: i,
						includeModerated: r
					} = e, {
						identity: o
					} = s, n = (e => {
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
					if (!o) return n;
					if (i && (n.account = Object(P.a)(o) || null, n.preferences = Object(O.a)(o.preferences, o.interactions) || null, o.redditor.profile && (n.profiles[o.redditor.profile.id] = Object(k.a)(o.redditor.profile))), r && o.redditor && o.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(k.b)(o.redditor.moderatedSubreddits);
						n.moderatedPageInfo = t, n.moderatedSubredditIds = e, n.subreddits = s
					}
					let d;
					if (t === v.b.History) d = s.postsInfoByIds;
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
						})(s, t);
						if (!e) return n;
						d = e.edges, n.pageInfo = e.pageInfo
					}
					if (!d) return n;
					for (const a of d) {
						let e;
						const s = t === v.b.History ? a : a.node;
						if (s.__typename === f.d.Comment) {
							const t = Object(C.a)(s);
							if (n.comments || (n.comments = {}), n.comments[t.id] = t, n.itemIds || (n.itemIds = []), n.itemIds.push(t.id), s.authorFlair && (n.authorFlair[t.subredditId] || (n.authorFlair[t.subredditId] = {}), n.authorFlair[t.subredditId][t.author] = Object(S.a)(s.authorFlair)[0]), e = s.postInfo, s.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(x.a)(s.postInfo);
								n.posts[e.id] = e, t && (n.posts[t.id] = t)
							}
						} else e = s, n.itemIds || (n.itemIds = []), n.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: i,
							crosspost: r
						} = e && Object(x.a)(e);
						n.posts[i.id] = i, r && (n.posts[r.id] = r), Object(y.i)(e) || Object(y.j)(e) || (e.authorFlair && (n.authorFlair[i.belongsTo.id] || (n.authorFlair[i.belongsTo.id] = {}), n.authorFlair[i.belongsTo.id][i.author] = Object(S.a)(e.authorFlair)[0]), Object(y.l)(e) ? n.profiles[e.profile.id] || (n.profiles[e.profile.id] = Object(k.a)(e.profile)) : Object(y.n)(e) && (n.subreddits[e.subreddit.id] || (n.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), n.postFlair[e.subreddit.id] || (n.postFlair[e.subreddit.id] = Object(w.a)(e.subreddit))))
					}
					return n
				},
				_ = s("./src/reddit/helpers/localStorage/index.ts"),
				E = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				T = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				L = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				R = s("./src/lib/initializeClient/installReducer.ts"),
				N = s("./src/reddit/reducers/features/comments/index.ts");
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
							return j(e)
					}
				},
				B = Object(o.a)(L.b),
				M = Object(o.a)(L.c),
				U = Object(o.a)(L.i),
				K = Object(o.a)(L.a),
				W = e => async (t, s, o) => {
					const {
						profileName: c,
						listingType: u
					} = e.params, m = s(), b = Object(E.c)(c.toLowerCase(), u), h = m.profilePrivatePage.ids[b] && m.profilePrivatePage.ids[b].length > 0, g = !!m.profilePrivatePage.api.error[b];
					if (m.profilePrivatePage.api.pending[b] || h && !g) return;
					const {
						account: f
					} = m.user, y = !f, C = !(f && f.displayText && m.profiles.moderated.models[f.displayText.toLowerCase()] && m.profiles.moderated.models[f.displayText.toLowerCase()].length);
					let S;
					if (t(B({
							listingKey: b
						})), u === v.b.History) {
						if (!Object(T.a)(m)) {
							const {
								profileName: s
							} = e.params, o = `/user/${s}/`;
							return t(Object(i.c)(o)), void t(K({
								listingKey: b,
								error: {
									type: r.L.AUTHORIZATION_ERROR
								}
							}))
						}
						const s = {
							includeIdentity: y,
							includeModerated: C,
							recentPostIds: Object(_.N)(null == f ? void 0 : f.id).reverse()
						};
						S = await ((e, t) => Object(l.a)(e, {
							...p,
							variables: t
						}))(o.gqlContext(), s)
					} else {
						const e = {
							includeIdentity: y,
							includeModerated: C,
							first: L.h,
							after: null
						};
						S = await F[u](o.gqlContext(), e)
					}
					if (S.ok && S.body) {
						const e = G({
							rawData: A(u, S),
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
						})), await Promise.all([t(Object(d.d)(c)), t(Object(n.o)(c)), t(Object(a.d)(c))])
					} else t(K({
						listingKey: b,
						error: S.error
					}))
				}, D = Object(o.a)(L.f), H = Object(o.a)(L.e), z = Object(o.a)(L.g), V = Object(o.a)(L.d), q = e => async (t, s, i) => {
					const r = s(),
						o = r.user.account && r.user.account.displayText && r.user.account.displayText.toLowerCase();
					if (!o) return;
					const n = Object(E.c)(o, e);
					if (!r.profilePrivatePage.ids[n] || !r.profilePrivatePage.ids[n].length || !r.profilePrivatePage.pageInfo || !r.profilePrivatePage.pageInfo[n].hasNextPage || r.profilePrivatePage.api.error[n] || r.profilePrivatePage.api.pending[n]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: r.profilePrivatePage.pageInfo[n].endCursor,
						first: L.h
					};
					t(D({
						listingKey: n
					}));
					const a = await F[e](i.gqlContext(), d);
					if (a.ok && a.body) {
						const s = G({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: a.body.data
						});
						e === v.b.Saved || e === v.b.ReceivedGildings || e === v.b.GivenGildings ? await t(H({
							listingKey: n,
							profileName: o,
							...s
						})) : await t(z({
							listingKey: n,
							profileName: o,
							...s
						}))
					} else t(V({
						listingKey: n,
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return x
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				n = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				a = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json"),
				l = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json");
			const c = (e, t) => Object(n.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(n.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var m = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/actions/subreddit/constants.ts"),
				b = s("./src/reddit/actions/subreddit/notifications.ts");
			const h = e => Object(o.f)({
					id: e,
					kind: m.b.Error,
					text: i.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				g = (e, t) => Object(o.f)({
					kind: m.b.SuccessCommunityGreen,
					text: i.fbt._("Muted r/{subreddit name}", [i.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					buttonText: i.fbt._("Undo", null, {
						hk: "1lx02Y"
					}),
					buttonAction: t
				}),
				f = (e, t) => Object(o.f)({
					kind: m.b.SuccessCommunityGreen,
					text: i.fbt._("Unmuted r/{subreddit name}", [i.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					buttonText: i.fbt._("Undo", null, {
						hk: "2siioQ"
					}),
					buttonAction: t
				}),
				y = Object(r.a)(p.C),
				v = (Object(r.a)(p.f), Object(r.a)(p.B), e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: i
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: n
						} = o;
						if ((await c(n(), t)).ok) i && i(), g(s, C({
							subredditId: t,
							subredditName: s
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				}),
				C = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: i
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: n
						} = o;
						if ((await u(n(), t)).ok) i && i(), f(s, v({
							subredditId: t,
							subredditName: s
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: i
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: n
						} = o;
						if ((await c(n(), t)).ok) i && i(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(g(s, w({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: i
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: n
						} = o;
						if ((await u(n(), t)).ok) i && i(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(f(s, S({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				x = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, r, d) => {
						let {
							gqlContext: a
						} = d;
						const c = Object(b.a)(s);
						(await ((e, t, s) => Object(n.a)(e, {
							...l,
							variables: {
								input: {
									...s,
									subredditId: t
								}
							}
						}))(a(), t, c)).ok ? (e(y({
							subredditId: t,
							notificationLevel: s
						})), e(Object(o.f)({
							kind: m.b.SuccessCommunityGreen,
							text: Object(b.b)(s)
						}))) : e(Object(o.f)({
							kind: m.b.Error,
							text: i.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				n = s("./src/reddit/actions/notificationsInbox/index.ts"),
				d = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts");
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
							return i.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case c.b.FREQUENT:
							return i.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case c.b.LOW:
							return i.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const f = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: r,
					undoCallback: d
				} = e;
				return async (e, c, f) => {
					let {
						gqlContext: y
					} = f;
					var v, C, S;
					e(p());
					const w = h(s),
						x = await Object(l.b)(y(), t, w);
					if ((null === (C = null === (v = x.error) || void 0 === v ? void 0 : v.fields) || void 0 === C ? void 0 : C.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(x.body) && (null === (S = x.body.data.updateSubredditNotificationSettings.errors) || void 0 === S ? void 0 : S.length)) return e(b()), e(Object(a.f)({
						kind: u.b.Error,
						text: i.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					x.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: s
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), r && r(), e(d ? Object(a.f)(Object(a.e)(g(s), u.b.Undo, i.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(n.i)(t, d))) : Object(a.f)(Object(a.e)(g(s), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/components/BackToTop/index.m.less"),
				l = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(n.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: i
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, l.a.container),
					style: i
				}, r.a.createElement(d.l, {
					onClick: () => u(s)
				}, c._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/reddit/components/ClassicPost/index.tsx"),
				n = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				g = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				C = s.n(v);
			const S = Object(n.b)(() => Object(d.c)({
				comment: g.b,
				isAwarded: (e, t) => {
					const s = Object(g.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(f.a)(e, t);
						return s && s.coinPrice >= a.g
					})
				},
				isNightmodeOn: y.db
			}), e => ({
				openPost: t => e(Object(u.K)(t))
			}));
			var w = Object(c.a)(S(e => {
					const {
						comment: t,
						commentId: s,
						first: i,
						isAwarded: o,
						isNightmodeOn: n,
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
							[C.a.isAwarded]: o,
							[C.a.isNightmodeOn]: n
						})
					}, r.a.createElement("div", {
						className: Object(l.a)(C.a.commentWrapper, {
							[C.a.isFirst]: i
						})
					}, r.a.createElement("div", {
						className: C.a.commentSeparator
					}), t.parentId && r.a.createElement("div", {
						className: C.a.commentSeparator
					}), r.a.createElement("div", {
						className: C.a.commentContentWrapper
					}, r.a.createElement(p.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: c,
						isExpanded: !0
					})))))
				})),
				x = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				P = s.n(I),
				j = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
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
				T = j.a.wrapped(x.a, "OverviewCommentPost", P.a),
				L = j.a.wrapped(o.default, "ClassicPost", P.a);
			t.a = E(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: i,
					allowModToolsUnderComments: o,
					height: n,
					width: d,
					...a
				} = e;
				return Object(k.a)(t) ? s ? r.a.createElement(r.a.Fragment, null, r.a.createElement(T, _({}, a, {
					availableWidth: d,
					commentId: t
				})), r.a.createElement(w, {
					commentId: t,
					first: s,
					last: i,
					showModTools: o
				})) : r.a.createElement(w, {
					commentId: t,
					first: s,
					last: i,
					showModTools: o
				}) : r.a.createElement(L, _({}, a, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/last.js"),
				r = s.n(i),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				c = s("./src/reddit/components/PostList/LoadMore.tsx"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				m = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				g = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				y = s("./src/lib/LRUCache/index.ts"),
				v = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				S = s("./src/reddit/components/PostList/index.m.less"),
				w = s.n(S);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 500,
				k = new y.a(O),
				I = new y.a(O),
				P = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				j = (e, t, s, i, r, o) => {
					const n = `entered-${e}-${t}-${s?`last-${i}-${r}`:""}`;
					let d = k.get(n);
					return void 0 === d && (d = () => {
						s && o.onBottomViewed(i, r), o.trackOnPostEnteredViewport(e, t)
					}, k.set(n, d)), d
				},
				_ = (e, t) => {
					const s = `click-${e}`;
					let i = I.get(s);
					return void 0 === i && (i = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(a.e)(s.source.outboundUrl, a.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(h.a)(e)
						})
					}, I.set(s, i)), i
				};
			class E extends n.a.Component {
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
						viewportDataLoaded: s
					} = this.props;
					return v.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const i = v.c.end(e);
					setTimeout(() => s(t(i, C.TimerType.InApp)), 0)
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
						...s
					} = this.props, {
						itemIds: i,
						...r
					} = e, o = Object.keys(s), n = Object.keys(r);
					return n.length !== o.length || !!n.some(e => s[e] !== r[e])
				}
				scrollChildForItem(e, t, s, i, r, o) {
					const {
						listingKey: d,
						listingName: a,
						postClickEventFactory: l
					} = this.props, c = `post-${o}-${e}-${t}-${s?"last-index":""}-${a}-${d}`;
					let u;
					if (void 0 === (u = this.scrollChildCache.get(c))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: m
						} = this.props, p = m[e], b = `overview-chrono-list-item-[layout: ${o}]-[itemId: ${e}]`, h = j(p, o, s, d, a, this.props), g = {
							key: b,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: i,
							isLastInCommentList: r,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: o,
							onClickPost: _(e, this.props),
							postId: p
						}, y = this.props.itemComponent;
						u = {
							estHeight: this.props.estimateItemHeight(e, o, i),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => n.a.createElement(f.a, {
								postId: g.postId
							}, n.a.createElement(y, x({}, g, e)))
						}, this.scrollChildCache.set(c, u)
					}
					return u
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return n.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: i
					} = this.props;
					return n.a.createElement("div", {
						className: w.a.placeholder
					}, n.a.createElement(u.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && n.a.createElement(m.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: i
					} = this.props;
					return n.a.createElement("div", {
						className: w.a.placeholder
					}, n.a.createElement(c.a, {
						isLoading: !!t,
						layout: s,
						countOverride: P[s]
					}), !!e && n.a.createElement(m.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: i,
						onLoadMore: r
					} = this.props, o = i.map((s, r, o) => {
						const n = r === i.length - 1,
							d = r && i[r - 1],
							a = !n && i[r + 1],
							l = !!Object(g.a)(s) && (!d || !Object(g.a)(d) || e[d].postId !== e[s].postId),
							c = !!Object(g.a)(s) && (!a || !Object(g.a)(a) || e[a].postId !== e[s].postId);
						return this.scrollChildForItem(s, r, n, l, c, t)
					});
					return n.a.createElement("div", null, n.a.createElement(p.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: r,
						viewportTopPadding: b.f + b.r
					}, o), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = E
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(r);
			t.a = i.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				a = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				g = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				y = s("./src/reddit/selectors/meta.ts"),
				v = s("./src/reddit/components/SidebarFooter/index.m.less"),
				C = s.n(v);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = a.a.a("Link", C.a), x = Object(n.c)({
				countryCode: y.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: f.a
			}), O = Object(o.b)(x), k = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), I = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: C.a.GreyRereddit
				}, s, !!m.c[t] && r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, S._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, S._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(w, {
					href: "https://www.reddithelp.com"
				}, S._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, S._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: C.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = k(O(Object(l.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(h.a)(t, Object(d.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.cd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.cd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.cd.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(I, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const i = t => {
					const i = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(w, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, i[t]) : null
				};
				return r.a.createElement(c.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, S._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, S._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(w, {
					href: "https://www.reddithelp.com"
				}, S._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, S._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: C.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: C.a.LinkContainer
				}, r.a.createElement("div", {
					className: C.a.Column
				}, i("en"), i("fr"), i("it")), r.a.createElement("div", {
					className: C.a.Column
				}, i("de"), i("es"), i("pt"))), r.a.createElement("div", {
					className: C.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
				n = s("./node_modules/react/index.js"),
				d = s.n(n),
				a = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/components/BackToTop/index.tsx"),
				c = s("./src/reddit/components/SidebarFooter/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const f = a.g[1] + 24,
				y = u.f + 8,
				v = y + 152 + 16,
				C = v + f + 8,
				S = h.a.div("Container", b.a),
				w = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...i
					} = e;
					return d.a.createElement(l.a, g({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?y:8}px)`
						}
					}, i))
				}, "BackToTop", b.a),
				x = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: n
					} = e;
					return d.a.createElement("div", {
						className: Object(i.a)(s, {
							[b.a.BottomStickyStyles]: n,
							[b.a.StickyStyles]: !n && o && !r,
							[b.a.StickyStylesFakeOverlay]: !n && !!r
						})
					}, t)
				};
			class O extends n.Component {
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
					}, this.handleResize = o()(() => {
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
							adComponentOnFakeOverlay: s,
							children: i,
							className: r,
							hideFooter: o,
							pageLayer: n,
							recommendationsComponent: a,
							reredditButtons: l
						}
					} = this, u = this.state.isAdSticky && !(!t && !i), m = this.state.isBottomSticky;
					return d.a.createElement(S, {
						className: r,
						innerRef: this.setWrapperRef
					}, d.a.createElement(x, {
						isFakeOverlay: s,
						isSticky: u,
						shouldStickToBottom: m
					}, t, i, a, !o && d.a.createElement(c.a, {
						reredditButtons: l
					})), !a && !this.props.hideBackToTop && d.a.createElement(w, {
						isOverlay: !!(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const k = Object(m.u)();
			t.a = k(O)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				S = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				w = e => {
					const t = C(e);
					return Object(y.f)(t)
				},
				x = e => {
					const t = S(e);
					return Object(y.f)(t)
				};
			var O = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(O);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = Object(u.u)(), j = Object(o.b)(() => Object(n.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.n)(e, t) || void 0,
						i = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(f.db)(e);
					return i || r
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = w(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = S(this.props), e.color = e.fill = x(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: i,
						headerButton: o,
						id: n,
						onClick: a,
						onHeaderClick: c,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? k.a.widgetContentOnly : k.a.widgetContent, g = !i && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, y = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(d.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: i,
							[k.a.clickable]: !!a,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": i,
						onClick: a,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(d.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!c
						}),
						id: n,
						style: {
							...y,
							...this.props.headerStyles
						},
						onClick: c
					}, r.a.createElement("div", {
						className: Object(d.a)(k.a.widgetTitle, p)
					}, r.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), o), r.a.createElement("div", {
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
			t.a = P(j(Object(a.a)(Object(c.c)(_))))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === i.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return d
			}));
			var i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(r);
			const n = e => {
					let {
						isLoading: t
					} = e;
					return Object(i.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				d = e => Object(i.a)(o.a.loadingBar, n(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return n
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "d", (function() {
				return c
			}));
			var i = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/models/Event.ts");
			const o = () => e => ({
					source: r.f.HomeFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: i.rb(e).id
					},
					...i.o(e)
				}),
				n = () => e => ({
					source: r.f.CommunityNotificationsSettings,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: i.rb(e).id
					},
					...i.o(e)
				}),
				d = () => e => ({
					source: r.f.PopularFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: i.rb(e).id
					},
					...i.o(e)
				}),
				a = () => e => ({
					source: r.f.SubredditIdBanner,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: i.rb(e).id
					},
					...i.o(e)
				}),
				l = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: i.rb(e).id
					},
					...i.o(e)
				}),
				c = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: i.rb(e).id
					},
					...i.o(e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var i, r, o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const d = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: i.SEE_MORE,
					widget: Object(n.xb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...n.o
				}),
				a = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: i.REREDDIT_PROMO,
					post: n.K(s, e),
					subreddit: n.jb(s),
					...t && {
						banner: {
							buttonText: t,
							id: i.REREDDIT_PROMO
						}
					},
					...n.o(s)
				}),
				l = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: i.TOPICS_WIDGET,
					...n.o(e)
				}),
				c = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: i.TOPIC,
					...n.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/pages/ProfilePrivate/index.m.less": function(e, t, s) {
			e.exports = {
				mixedList: "_203kLAn6xQ7ktVOvJCzl9p"
			}
		},
		"./src/reddit/pages/ProfilePrivate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				a = s("./src/reddit/components/EmptyProfile/index.ts"),
				l = s("./src/reddit/components/JumpToContent/index.tsx"),
				c = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				u = s("./src/reddit/components/PostList/index.tsx"),
				m = s("./src/reddit/components/ProfileItemList/index.tsx"),
				p = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				b = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				h = s("./node_modules/lodash/noop.js"),
				g = s.n(h),
				f = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				y = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/components/PostList/Placeholder.tsx"),
				S = s("./src/reddit/actions/postList.ts"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isComment.ts"),
				O = s("./src/reddit/helpers/isPost.ts"),
				k = s("./src/reddit/helpers/trackers/post.ts"),
				I = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/objectSelector/index.ts")),
				P = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts");
			const E = {
				t3_1: {
					adPromotedUserPostIds: [],
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
					adPromotedUserPostIds: [],
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
					adPromotedUserPostIds: [],
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
					adPromotedUserPostIds: [],
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
						type: P.f.Text,
						text: "hello world"
					}, {
						type: P.f.Spoiler,
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
					adPromotedUserPostIds: [],
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
						type: P.f.Text,
						text: "hello world"
					}, {
						type: P.f.Spoiler,
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
						rteMode: j.i.RICH_TEXT,
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
					adPromotedUserPostIds: [],
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
						type: P.f.Text,
						text: "hello world"
					}, {
						type: P.f.Spoiler,
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
						rteMode: j.i.RICH_TEXT,
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
					adPromotedUserPostIds: [],
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
						type: P.f.Text,
						text: "hello world"
					}, {
						type: P.f.Spoiler,
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
						rteMode: j.i.RICH_TEXT,
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
					rteMode: j.i.RICH_TEXT,
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
						listingKey: s
					} = t;
					const i = e.posts.models;
					return N(e, {
						listingKey: s
					}).filter(e => {
						if (Object(x.a)(e)) return !0; {
							const t = i[e];
							return t && !t.hidden
						}
					})
				}),
				N = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.pages.profileOverview.chrono.ids[s];
					return i ? [...i] : []
				}),
				F = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return R(e, {
						listingKey: s
					}).reduce((t, s) => {
						const i = Object(x.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				}),
				A = (Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.posts.models;
					return A(e, {
						listingKey: s
					}).filter(e => {
						const t = i[e];
						return t && !t.hidden
					})
				}), Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return R(e, {
						listingKey: s
					}).map(t => Object(x.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				G = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.posts.models,
						r = A(e, {
							listingKey: s
						}),
						o = {};
					return r.forEach(e => o[e] = i[e]), o
				}),
				B = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.features.comments.models,
						r = R(e, {
							listingKey: s
						}),
						o = {};
					return r.forEach(e => !!Object(x.a)(e) && (o[e] = i[e])), o
				});
			var M = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/selectors/tracking.ts"),
				K = s("./src/reddit/selectors/user.ts");
			const W = (e, t) => (e, t, s) => Object(x.a)(e) ? 120 : 47,
				D = (Object(w.u)(), {
					apiError: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.api.error[s]
					},
					apiPending: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.api.pending[s]
					},
					currentUser: K.k,
					layout: w.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.loadMore[s]
					},
					subredditsById: M.eb,
					viewportDataLoaded: U.a,
					commentsById: B,
					itemIds: R,
					itemIdToPostId: F,
					postsById: G,
					estimateItemHeight: W
				}),
				H = Object(n.c)(D);
			Object(o.b)(H, (e, t) => ({
				onBottomViewed: (t, s) => e(S.c(t, s)),
				openPost: t => {
					e(y.K(t))
				},
				trackOnPostEnteredViewport: (t, s) => {
					Object(O.a)(t) && e(y.N(t))
				},
				trackOnPostExitedViewport: (t, s, i) => {
					Object(O.a)(t) && e(y.O(t, i))
				},
				fireAdPixelsOfType: g.a
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				postClickEventFactory: (e, t) => Object(k.k)(e, t)
			}));
			var z = s("./src/reddit/featureFlags/index.ts"),
				V = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				q = s("./src/reddit/models/Profile/index.ts");
			const Q = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.pending[s]
				},
				J = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.error[s]
				},
				X = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return (e.profilePrivatePage.ids[s] || []).reduce((t, s) => {
						const i = Object(x.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				}),
				Z = Object(w.u)(),
				Y = Object(w.u)(),
				$ = {
					apiError: J,
					apiPending: Q,
					layout: w.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[s] || !e.profilePrivatePage.pageInfo[s].hasNextPage) return null;
						const i = e.profilePrivatePage.ids[s];
						return {
							token: i[i.length - 1],
							dist: V.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !Q(e, t) && !J(e, t)
				},
				ee = Object(n.c)({
					...$,
					currentUser: K.k,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return -1 === s.indexOf(q.b.Saved) && -1 === s.indexOf(q.b.ReceivedGildings) && -1 === s.indexOf(q.b.GivenGildings) ? [] : e.profilePrivatePage.ids[s] || []
					},
					itemIdToPostId: X,
					estimateItemHeight: W
				}),
				te = Object(n.c)({
					...$,
					measureScrollFPS: z.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s.indexOf(q.b.Saved) > -1 || s.indexOf(q.b.ReceivedGildings) > -1 || s.indexOf(q.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[s] || []
					},
					postListPlaceholderComponent: () => C.a
				}),
				se = e => ({
					onBottomViewed: g.a,
					openPost: t => {
						e(y.K(t))
					},
					trackOnPostEnteredViewport: g.a,
					fireAdPixelsOfType: (t, s) => {
						e(y.y(t, s))
					}
				}),
				ie = Object(o.b)(ee, se, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(k.k)(e, t)
				})),
				re = Object(o.b)(te, e => ({
					...se(e),
					onFirstPostChanged: g.a,
					adBrandSafetyStatusReceived: g.a,
					trackOnPostExitedViewport: g.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(k.k)(e, t),
					postComponentForLayout: f.b
				}));
			var oe = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				ne = s("./src/reddit/helpers/trackers/screenview.ts"),
				de = s("./src/reddit/layout/page/Listing/index.tsx"),
				ae = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				le = s.n(ae);
			const ce = Object(n.c)({
					currentUser: K.k
				}),
				ue = Object(o.b)(ce, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				me = (e => Object(v.c)(Z(ie(e))))(m.a),
				pe = (e => Object(v.c)(Y(re(e))))(u.a);
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
								profileName: s
							}
						}
					} = this.props, i = s.toLowerCase(), o = Object(oe.c)(i, t);
					return e && e.displayText && e.displayText.toLowerCase() === i ? t === q.b.Saved || t === q.b.ReceivedGildings || t === q.b.GivenGildings ? r.a.createElement(me, {
						className: le.a.mixedList,
						itemComponent: c.a,
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(ne.s)(o),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(pe, {
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(ne.s)(o),
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
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				n = s("./src/reddit/selectors/experiments/utils.ts"),
				d = s("./src/reddit/selectors/meta.ts"),
				a = s("./node_modules/reselect/es/index.js");
			const l = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(d.h)(e) && Object(o.f)(e),
					experimentName: i.vc
				}), n.a),
				c = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(d.h)(e) && Object(o.f)(e),
					experimentName: i.uc
				}), n.a),
				u = Object(a.a)(l, c, (e, t) => e || t),
				m = Object(a.a)(l, c, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.dcac88d60f89ffc48f6e.js.map