// https://www.redditstatic.com/desktop2x/ProfilePrivate.9ec754f0647357d686fa.js
// Retrieved at 12/1/2022, 2:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				i = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : i(t), n(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
			}
		},
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "privateListingPending", (function() {
				return B
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return U
			})), s.d(t, "privatePostListingLoaded", (function() {
				return G
			})), s.d(t, "privateListingFailed", (function() {
				return D
			})), s.d(t, "profilePrivateRequested", (function() {
				return W
			})), s.d(t, "morePending", (function() {
				return H
			})), s.d(t, "moreMixedLoaded", (function() {
				return V
			})), s.d(t, "morePostLoaded", (function() {
				return z
			})), s.d(t, "moreFailed", (function() {
				return K
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/externalAccount.ts"),
				d = s("./src/reddit/actions/pages/profileShared.ts"),
				a = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/redditGQL/operations/ProfileDownvoted.json"),
				m = s("./src/redditGQL/operations/ProfileGivenGildings.json"),
				u = s("./src/redditGQL/operations/ProfileHidden.json"),
				p = s("./src/redditGQL/operations/ProfileHistoryPosts.json"),
				b = s("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				h = s("./src/redditGQL/operations/ProfileSaved.json"),
				f = s("./src/redditGQL/operations/ProfileUpvoted.json");
			var g = s("./src/reddit/models/Comment/index.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Profile/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				w = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				j = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var _ = e => {
					const {
						listingType: t,
						rawData: s,
						includeIdentity: n,
						includeModerated: i
					} = e, {
						identity: o
					} = s, r = (e => {
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
						return e !== x.b.Saved && e !== x.b.ReceivedGildings && e !== x.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!o) return r;
					if (n && (r.account = Object(S.a)(o) || null, r.preferences = Object(k.a)(o.preferences, o.interactions) || null, o.redditor.profile && (r.profiles[o.redditor.profile.id] = Object(w.a)(o.redditor.profile))), i && o.redditor && o.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(w.b)(o.redditor.moderatedSubreddits);
						r.moderatedPageInfo = t, r.moderatedSubredditIds = e, r.subreddits = s
					}
					let d;
					if (t === x.b.History) d = s.postsInfoByIds;
					else {
						const e = ((e, t) => {
							switch (t) {
								case x.b.Downvoted:
									return e.identity.downvotedPosts;
								case x.b.Hidden:
									return e.identity.hiddenPosts;
								case x.b.History:
									return null;
								case x.b.Saved:
									return e.identity.saved;
								case x.b.Upvoted:
									return e.identity.upvotedPosts;
								case x.b.ReceivedGildings:
									return e.identity.receivedGildings;
								case x.b.GivenGildings:
									return e.identity.givenGildings
							}
						})(s, t);
						if (!e) return r;
						d = e.edges, r.pageInfo = e.pageInfo
					}
					if (!d) return r;
					for (const a of d) {
						let e;
						const s = t === x.b.History ? a : a.node;
						if (s.__typename === g.d.Comment) {
							const t = Object(y.a)(s);
							if (r.comments || (r.comments = {}), r.comments[t.id] = t, r.itemIds || (r.itemIds = []), r.itemIds.push(t.id), s.authorFlair && (r.authorFlair[t.subredditId] || (r.authorFlair[t.subredditId] = {}), r.authorFlair[t.subredditId][t.author] = Object(C.a)(s.authorFlair)[0]), e = s.postInfo, s.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(E.a)(s.postInfo);
								r.posts[e.id] = e, t && (r.posts[t.id] = t)
							}
						} else e = s, r.itemIds || (r.itemIds = []), r.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: n,
							crosspost: i
						} = e && Object(E.a)(e);
						r.posts[n.id] = n, i && (r.posts[i.id] = i), Object(v.i)(e) || Object(v.j)(e) || (e.authorFlair && (r.authorFlair[n.belongsTo.id] || (r.authorFlair[n.belongsTo.id] = {}), r.authorFlair[n.belongsTo.id][n.author] = Object(C.a)(e.authorFlair)[0]), Object(v.l)(e) ? r.profiles[e.profile.id] || (r.profiles[e.profile.id] = Object(w.a)(e.profile)) : Object(v.n)(e) && (r.subreddits[e.subreddit.id] || (r.subreddits[e.subreddit.id] = Object(j.a)(e.subreddit)), r.postFlair[e.subreddit.id] || (r.postFlair[e.subreddit.id] = Object(O.a)(e.subreddit))))
					}
					return r
				},
				I = s("./src/reddit/helpers/localStorage/index.ts"),
				P = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				N = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				T = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				L = s("./src/lib/initializeClient/installReducer.ts"),
				R = s("./src/reddit/reducers/features/comments/index.ts");
			Object(L.a)({
				features: {
					comments: R.a
				}
			});
			const M = {
					[x.b.Downvoted]: (e, t) => Object(c.a)(e, {
						...l,
						variables: t
					}),
					[x.b.Hidden]: (e, t) => Object(c.a)(e, {
						...u,
						variables: t
					}),
					[x.b.Saved]: (e, t) => Object(c.a)(e, {
						...h,
						variables: t
					}),
					[x.b.Upvoted]: (e, t) => Object(c.a)(e, {
						...f,
						variables: t
					}),
					[x.b.ReceivedGildings]: (e, t) => Object(c.a)(e, {
						...b,
						variables: t
					}),
					[x.b.GivenGildings]: (e, t) => Object(c.a)(e, {
						...m,
						variables: t
					})
				},
				A = (e, t) => {
					switch (e) {
						case x.b.Downvoted:
						case x.b.Hidden:
						case x.b.History:
						case x.b.Saved:
						case x.b.Upvoted:
						case x.b.ReceivedGildings:
						case x.b.GivenGildings:
							return t.body.data
					}
				},
				F = e => {
					switch (e.listingType) {
						case x.b.Downvoted:
						case x.b.Hidden:
						case x.b.History:
						case x.b.Saved:
						case x.b.Upvoted:
						case x.b.ReceivedGildings:
						case x.b.GivenGildings:
							return _(e)
					}
				},
				B = Object(o.a)(T.b),
				U = Object(o.a)(T.c),
				G = Object(o.a)(T.i),
				D = Object(o.a)(T.a),
				W = e => async (t, s, o) => {
					const {
						profileName: l,
						listingType: m
					} = e.params, u = s(), b = Object(P.c)(l.toLowerCase(), m), h = u.profilePrivatePage.ids[b] && u.profilePrivatePage.ids[b].length > 0, f = !!u.profilePrivatePage.api.error[b];
					if (u.profilePrivatePage.api.pending[b] || h && !f) return;
					const {
						account: g
					} = u.user, v = !g, y = !(g && g.displayText && u.profiles.moderated.models[g.displayText.toLowerCase()] && u.profiles.moderated.models[g.displayText.toLowerCase()].length);
					let C;
					if (t(B({
							listingKey: b
						})), m === x.b.History) {
						if (!Object(N.a)(u)) {
							const {
								profileName: s
							} = e.params, o = `/user/${s}/`;
							return t(Object(n.c)(o)), void t(D({
								listingKey: b,
								error: {
									type: i.L.AUTHORIZATION_ERROR
								}
							}))
						}
						const s = {
							includeIdentity: v,
							includeModerated: y,
							recentPostIds: Object(I.T)(null == g ? void 0 : g.id).reverse()
						};
						C = await ((e, t) => Object(c.a)(e, {
							...p,
							variables: t
						}))(o.gqlContext(), s)
					} else {
						const e = {
							includeIdentity: v,
							includeModerated: y,
							first: T.h,
							after: null
						};
						C = await M[m](o.gqlContext(), e)
					}
					if (C.ok && C.body) {
						const e = F({
							rawData: A(m, C),
							listingType: m,
							includeIdentity: v,
							includeModerated: y
						});
						m === x.b.Saved || m === x.b.ReceivedGildings || m === x.b.GivenGildings ? await t(U({
							listingKey: b,
							profileName: l,
							...e
						})) : await t(G({
							listingKey: b,
							profileName: l,
							...e
						})), await Promise.all([t(Object(d.d)(l)), t(Object(r.o)(l)), t(Object(a.d)(l))])
					} else t(D({
						listingKey: b,
						error: C.error
					}))
				}, H = Object(o.a)(T.f), V = Object(o.a)(T.e), z = Object(o.a)(T.g), K = Object(o.a)(T.d), J = e => async (t, s, n) => {
					const i = s(),
						o = i.user.account && i.user.account.displayText && i.user.account.displayText.toLowerCase();
					if (!o) return;
					const r = Object(P.c)(o, e);
					if (!i.profilePrivatePage.ids[r] || !i.profilePrivatePage.ids[r].length || !i.profilePrivatePage.pageInfo || !i.profilePrivatePage.pageInfo[r].hasNextPage || i.profilePrivatePage.api.error[r] || i.profilePrivatePage.api.pending[r]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: i.profilePrivatePage.pageInfo[r].endCursor,
						first: T.h
					};
					t(H({
						listingKey: r
					}));
					const a = await M[e](n.gqlContext(), d);
					if (a.ok && a.body) {
						const s = F({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: a.body.data
						});
						e === x.b.Saved || e === x.b.ReceivedGildings || e === x.b.GivenGildings ? await t(V({
							listingKey: r,
							profileName: o,
							...s
						})) : await t(z({
							listingKey: r,
							profileName: o,
							...s
						}))
					} else t(K({
						listingKey: r,
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return L
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				a = s("./src/redditGQL/operations/MutedSubreddits.json"),
				c = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const m = (e, t) => Object(r.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(r.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/subreddit/constants.ts"),
				h = s("./src/reddit/actions/subreddit/notifications.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const g = e => Object(o.f)({
					id: e,
					kind: p.b.Error,
					duration: o.a,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				v = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Muted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				x = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Unmuted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var y = s("./src/reddit/endpoints/subreddit/about.ts");
			const C = Object(i.a)(b.i),
				O = Object(i.a)(b.h),
				E = Object(i.a)(b.G),
				k = (Object(i.a)(b.j), Object(i.a)(b.F), Object(i.a)(b.g)),
				w = Object(i.a)(b.f),
				j = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, i, o) => {
						let {
							gqlContext: r
						} = o;
						var d, a;
						const c = await m(r(), t);
						if (c.ok && c.body && (null === (a = null === (d = c.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) n && n(), e(v(s, S({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, i, o) => {
						let {
							gqlContext: r
						} = o;
						var d, a;
						const c = await u(r(), t);
						if (c.ok && c.body && (null === (a = null === (d = c.body) || void 0 === d ? void 0 : d.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) n && n(), e(x(s, j({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				_ = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, i, o) => {
						let {
							gqlContext: r
						} = o;
						var d, a;
						const c = await m(r(), t);
						if (c.ok && c.body && (null === (a = null === (d = c.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(v(s, I({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				I = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, i, o) => {
						let {
							gqlContext: r
						} = o;
						var d, a;
						const c = await u(r(), t);
						if (c.ok && c.body && (null === (a = null === (d = c.body) || void 0 === d ? void 0 : d.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(x(s, _({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(g(`error-muting-${t}`))
						}
					}
				},
				P = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: a
						} = d;
						var l, m;
						const u = Object(h.a)(s),
							b = await ((e, t, s) => Object(r.a)(e, {
								...c,
								variables: {
									input: {
										...s,
										subredditId: t
									}
								}
							}))(a(), t, u);
						b.ok && b.body && (null === (m = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === m ? void 0 : m.ok) ? (e(E({
							subredditId: t,
							notificationLevel: s
						})), e(Object(o.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(s)
						}))) : e(Object(o.f)({
							kind: p.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				N = () => async (e, t, s) => {
					let {
						gqlContext: i
					} = s;
					const d = await (e => Object(r.a)(e, a))(i());
					if (d.ok && d.body && d.body.data) {
						const {
							data: t
						} = d.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(C({
							nodes: s
						}))
					} else e(O()), e(Object(o.f)({
						duration: o.a,
						kind: p.b.Error,
						text: n.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, T = e => {
					let {
						subredditId: t,
						subredditName: s
					} = e;
					return async (e, n, i) => {
						let {
							gqlContext: o
						} = i;
						var r, d;
						const a = await u(o(), t);
						if (a.ok && a.body && (null === (d = null === (r = a.body) || void 0 === r ? void 0 : r.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(k(t)), e(x(s));
						else {
							e(g(`error-unmuting-${t}`))
						}
					}
				}, L = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: r
						} = i;
						var d, a;
						const c = s(),
							l = Object(f.t)(c).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								s = `error-muting-duplicate-${t}`;
							return e(Object(o.f)({
								id: s,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} is already muted.", [n.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const u = await Object(y.a)(r(), t, !0),
							{
								data: b
							} = u.body,
							h = b && b.subreddit;
						if (!u.ok || null === h) {
							return e(((e, t) => Object(o.f)({
								id: e,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const x = h.id,
							C = await m(r(), x);
						if (C.ok && C.body && (null === (a = null === (d = C.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(w([h])), e(v(h.name));
						else {
							e(g(`error-muting-${x}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "d", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				r = s("./src/reddit/actions/notificationsInbox/index.ts"),
				d = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(i.a)(d.z),
				p = Object(i.a)(d.y),
				b = Object(i.a)(d.x),
				h = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				f = e => {
					switch (e) {
						case l.c.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const g = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: i,
					undoCallback: d
				} = e;
				return async (e, l, g) => {
					let {
						gqlContext: v
					} = g;
					var x, y, C;
					e(p());
					const O = h(s),
						E = await Object(c.b)(v(), t, O);
					if ((null === (y = null === (x = E.error) || void 0 === x ? void 0 : x.fields) || void 0 === y ? void 0 : y.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(E.body) && (null === (C = E.body.data.updateSubredditNotificationSettings.errors) || void 0 === C ? void 0 : C.length)) return e(b()), e(Object(a.f)({
						kind: m.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					E.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), i && i(), e(d ? Object(a.f)(Object(a.e)(f(s), m.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(r.i)(t, d))) : Object(a.f)(Object(a.e)(f(s), m.b.SuccessCommunityGreen))))
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/timeAgo/index.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			var p = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				b = s("./src/config.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/pages/Recap/Components/BananaPill/index.m.less"),
				v = s.n(g);
			var x = e => {
					let {
						ref: t,
						onMouseEnter: s,
						onSetTimer: r,
						onBananaPillClick: d,
						setAltTextWidth: a,
						setTimerByObserver: c
					} = e;
					const l = Object(n.useCallback)(e => {
							if (e) {
								const t = e.clientWidth;
								a(t + 32)
							}
						}, []),
						m = Object(o.e)(f.R),
						u = encodeURIComponent(b.a.redditUrl + "/r/recap"),
						g = b.a.accountManagerOrigin,
						x = m ? "/r/recap" : `${g}/login/?dest=${u}`;
					return i.a.createElement("a", {
						ref: t,
						href: x,
						className: v.a.bananaPill,
						onMouseEnter: s,
						onMouseLeave: r,
						onClick: d
					}, i.a.createElement("img", {
						className: v.a.icon,
						src: `${b.a.assetPath}/img/recap/banana_pill.png`,
						alt: h.fbt._("banana", null, {
							hk: "1fs9mn"
						})
					}), i.a.createElement("span", {
						className: v.a.text
					}, "+1"), h.fbt._("{=Back to Top}", [h.fbt._param("=Back to Top", i.a.createElement("span", {
						ref: l,
						className: v.a.altText
					}, h.fbt._("Back to Top", null, {
						hk: "4BTAZ0"
					})))], {
						hk: "4Foziy"
					}), i.a.createElement(p.a, {
						onChange: c,
						rootMargin: "0px 0px 0px 0px",
						threshold: .5
					}, i.a.createElement("div", null)))
				},
				y = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/helpers/chooseVariant/index.ts");
			const O = e => {
				return Object(C.c)(e, {
					experimentEligibilitySelector: C.a,
					experimentName: y.pf
				}) === y.Kd
			};
			var E = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				k = s("./src/reddit/selectors/recapGame.ts"),
				w = s("./src/reddit/components/BackToTop/index.m.less"),
				j = s.n(w);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = e => {
				if (e) {
					const e = document.getElementById(c.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: c
				} = e;
				const p = Object(a.b)(),
					b = Object(n.useRef)(null),
					[h, g] = Object(n.useState)(!1),
					[v, y] = Object(n.useState)(),
					[C, w] = Object(n.useState)(),
					[P, N] = Object(n.useState)(0),
					T = Object(o.e)(f.l),
					L = Object(o.e)(O),
					R = Object(o.e)(E.a),
					M = Object(o.e)(k.a),
					A = T ? T.id : "anonymous",
					F = "on" === M.recapGameState,
					B = () => {
						h && w(setTimeout(() => {
							b.current && (b.current.classList.add(j.a.transform), b.current.style.width = `${P}px`)
						}, 4750)), h && y(setTimeout(() => {
							g(!1), Object(m.Ub)(A, !1)
						}, 5e3))
					};
				return Object(n.useEffect)(() => {
					F || setTimeout(() => {
						const e = Object(m.O)(A);
						e ? Object(d.e)(e.lastSeenTime) >= 24 && e.dropSkip === m.a.NONE ? g(!0) : Date.now() >= new Date(2022, 10, 16).getTime() && e.dropSkip !== m.a.THIRD && g(!0) : g(!0)
					})
				}, [A, F]), i.a.createElement("div", {
					className: Object(r.a)(t, j.a.container),
					style: c
				}, h && L && !s && !F ? i.a.createElement(x, {
					ref: b,
					onBananaPillClick: () => {
						v && clearTimeout(v), C && clearTimeout(C), g(!1), Object(m.Ub)(A, !0), p((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...u.o(e)
						}))())
					},
					onMouseEnter: () => {
						v && clearTimeout(v), C && clearTimeout(C), b.current && (b.current.classList.remove(j.a.transform), b.current.style.width = "65px")
					},
					onSetTimer: B,
					setAltTextWidth: N,
					setTimerByObserver: e => {
						e.isIntersecting && (B(), p((() => e => ({
							source: "recap",
							action: "view",
							noun: "feed_banana",
							...u.o(e)
						}))()))
					}
				}) : i.a.createElement(l.a, S({
					className: j.a.button,
					onClick: () => I(s)
				}, R && {
					priority: l.c.Secondary,
					rplStyle: !0
				}), _._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				h = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/models/Audio/index.ts"),
				g = s("./src/reddit/selectors/experiments/econ/index.ts"),
				v = s("./src/reddit/components/Econ/Audio/index.m.less"),
				x = s.n(v),
				y = s("./src/config.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				E = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = () => Math.floor(10 * Math.random()) + 1;
			var j = e => {
					let {
						postId: t
					} = e;
					const s = Object(h.e)(C.eb),
						[o, d] = Object(n.useState)(!1),
						[a, c] = Object(n.useState)(w());
					return Object(n.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							d(!0), e = setTimeout(() => d(!1), 3500), c(w())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), i.a.createElement("div", {
						className: x.a.classicSpeaker
					}, o && i.a.createElement(E.a, {
						ringId: `${t}`,
						className: Object(r.a)(x.a.speakerRings, {
							[x.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), i.a.createElement("img", {
						key: `audioPostAvatar--${a}`,
						className: x.a.snoovatar,
						src: `${y.a.assetPath}/img/talk/avatars/${a}.png`,
						alt: k._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !o && i.a.createElement("div", {
						className: x.a.muteContainer
					}, i.a.createElement(O.a, {
						className: x.a.muteIcon
					})))
				},
				S = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: n,
						author: o
					} = t;
					return Object(h.e)(g.o) && s.roomStatus === f.b.NotStarted ? i.a.createElement(S.a, {
						postId: n,
						author: o,
						roomId: s.roomId,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? i.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: x.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, i.a.createElement(j, {
						postId: n
					})) : i.a.createElement("div", {
						className: x.a.endedClassicContainer
					}, i.a.createElement(O.a, {
						className: x.a.muteIcon
					}))
				},
				P = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				N = s("./src/reddit/components/ExpandoButton/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				M = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				A = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				U = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				G = s("./src/reddit/components/PostContainer/index.tsx"),
				D = s("./src/reddit/components/PostMeta/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				H = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				V = s("./src/reddit/components/PostTitle/index.tsx"),
				z = s("./src/reddit/components/PostTopMeta/index.tsx"),
				K = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				J = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				q = s("./src/reddit/models/Media/index.ts"),
				Q = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Y = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				X = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ee = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				te = s("./src/reddit/helpers/localStorage/index.ts"),
				se = s("./src/reddit/helpers/search/renderMedia.tsx"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				ie = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				re = s.n(oe),
				de = s("./src/reddit/models/Post/index.ts"),
				ae = s("./src/redditGQL/types.ts"),
				ce = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				le = s("./src/reddit/components/ClassicPost/index.m.less"),
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
			const pe = Object(d.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: d,
					handleVote: h,
					isExpanded: g,
					inSubredditOrProfile: v,
					eventFactory: x,
					flairStyleTemplate: y,
					formatTitle: C,
					hostPostData: O,
					isCheckboxSelected: E,
					isCurrentUserProfilePost: k,
					isFrontpage: w,
					isGalleryTileLayoutDefault: j,
					isLoggedIn: S,
					isOverlay: _,
					imageGalleryCurrentItem: Y,
					moderatorPermissions: oe,
					modModeEnabled: le,
					onClickPost: pe,
					onIgnoreReports: be,
					onOpenReportsDropdown: he,
					onSizeChanged: fe,
					poll: ge,
					post: ve,
					postId: xe,
					redditStyle: ye,
					scrollerItemRef: Ce,
					showBulkActionCheckbox: Oe,
					showEditFlair: Ee,
					showMedia: ke,
					shouldShowInsightsButton: we,
					subredditOrProfile: je,
					toggleCheckbox: Se,
					userIsOp: _e,
					shouldShowGalleryTileOption: Ie,
					showPromotedCTA: Pe,
					showCTAExperimentDesign: Ne
				} = e, Te = Object(l.a)(), Le = Object(c.a)(g);
				Object(n.useEffect)(() => {
					fe && Le !== g && fe(ve.id)
				}, [g, fe, ve.id, Le]);
				const Re = ye ? void 0 : y,
					Me = s || void 0,
					Ae = Object(ee.a)(oe),
					Fe = Object(X.a)(oe),
					Be = Object($.a)(oe),
					Ue = le && ee.a,
					Ge = Object(M.a)(ve),
					De = Object(F.c)(ve),
					We = !!ve.media && ve.media.type === q.o.RTJSON,
					He = _e && We,
					Ve = v && !ke,
					ze = !!ve.media && Object(q.I)(ve.media),
					Ke = !!ve.recommendationContext,
					Je = {
						flairStyleTemplate: Re,
						post: ve,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: k,
						isOverlay: _,
						shouldShowSubscribeButton: !(w && S) || Ke && S,
						subredditOrProfile: je
					},
					qe = Object(o.t)(ve, Y),
					{
						source: Qe
					} = qe,
					[Ye, Ze] = Object(n.useState)(!1),
					Xe = Object(n.useCallback)(() => {
						Ze(!Ye), Object(te.Sb)(), Te(Object(ie.d)(xe))
					}, [Ye, xe, Te]);
				let $e = i.a.createElement(Q.a, {
					className: me.a.classicThumbnail,
					crosspost: Me && ve,
					isMeta: ve.isMeta,
					post: Me || ve,
					redditStyle: ye,
					templatePlaceholderImage: Re && Re.postPlaceholderImage,
					removeLink: ze
				});
				Object(f.c)(ve) && ($e = i.a.createElement(I, {
					post: ve
				}));
				const et = Object(de.s)(ve),
					tt = i.a.createElement(G.b, {
						className: Object(r.a)(re.a.classicPostStyles, me.a.postContainer, Object(ne.a)(e), {
							[me.a.shouldShowOverflow]: we
						}, t),
						isOverlay: _,
						style: {
							...Object(ne.d)(e),
							...Object(ne.b)(Re)
						},
						post: ve,
						onClick: pe,
						eventFactory: x
					}, i.a.createElement(H.a, {
						model: ve,
						handleVote: h,
						showBulkActionCheckbox: Oe,
						isCheckboxSelected: E,
						toggleCheckbox: Se,
						flairStyleTemplate: Re,
						redditStyle: ye,
						postId: xe
					}), i.a.createElement(U.a, {
						className: we ? me.a.shouldUseRoundedBorder : void 0,
						"data-click-id": "background",
						flairStyleTemplate: Re
					}, i.a.createElement(P.a, {
						className: me.a.eventMeta,
						post: ve
					}), i.a.createElement("div", {
						className: me.a.mainBody
					}, i.a.createElement("div", {
						className: Ve ? me.a.expandoContainer : me.a.thumbnailContainer
					}, !Ve && $e, i.a.createElement(N.a, {
						crosspost: Me,
						className: me.a.rightExpando,
						isExpanded: !!g,
						post: ve,
						useMediaIcons: !1
					})), i.a.createElement("div", {
						className: Object(r.a)(me.a.content, {
							[me.a.showBulkActionCheckbox]: Oe
						}),
						"data-click-id": "body"
					}, et && i.a.createElement(B.a, {
						content: ve.recommendationContext.content,
						layout: Z.g.Classic,
						post: ve
					}), i.a.createElement(V.c, {
						className: ge ? me.a.titleWithPoll : void 0,
						format: C,
						poll: ge,
						post: ve,
						redditStyle: ye,
						size: V.b.Medium,
						titleColor: Re && Re.postTitleColor,
						isOverlay: _
					}, ve.source && !Me && !ve.isSurveyAd && i.a.createElement(J.a, {
						href: ve.source.url,
						isSponsored: ve.isSponsored,
						postId: ve.id,
						source: ve.source
					}, Object(a.a)(ve))), i.a.createElement(D.a, ue({
						key: "PostMeta"
					}, Je)), le && Ae && Ge && i.a.createElement(R.a, {
						thing: ve
					}), le && Ae && De && i.a.createElement(A.a, {
						onIgnoreReports: be,
						reportable: ve
					}), Pe && Qe && Qe.url && !ve.isSurveyAd && i.a.createElement(m.a, {
						ctaExperimentDesign: Ne && "classic",
						className: Object(r.a)(me.a.adLinkWrapper, {
							[me.a.ctaExperiment]: Ne
						})
					}, i.a.createElement(u.a, {
						post: ve,
						adLinkContent: qe,
						ctaExperimentDesign: Ne && "classic"
					})), ve.discussionType === ae.n.Chat && i.a.createElement(ce.a, {
						postId: ve.id
					}), i.a.createElement("div", {
						className: me.a.flatlistContainer
					}, i.a.createElement(N.a, {
						className: me.a.leftExpando,
						crosspost: Me,
						isExpanded: !!g,
						post: ve,
						useMediaIcons: !1
					}), i.a.createElement(p.a, {
						className: me.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Re,
						model: ve,
						onVoteClick: h
					}), i.a.createElement(T.a, {
						className: me.a.flatlistSeparator
					}), !ve.isSurveyAd && i.a.createElement(T.c, {
						className: me.a.flatlist,
						currentUser: d,
						hasModFlairPerms: Fe,
						hasModPostPerms: Ae,
						hasModFullPerms: Be,
						hostPostData: O,
						isOverlay: !!_,
						modModeEnabled: le,
						onClickInsightsButton: Xe,
						onIgnoreReports: be,
						onOpenReportsDropdown: he,
						post: ve,
						shouldShowInsightsButton: we,
						showEditPost: He,
						showEditFlair: Ee,
						tooltipType: _ ? z.f.Lightbox : void 0,
						useFlatlistBreakpoints: Object(W.b)({
							editPost: !Ue,
							hide: !Ue,
							report: !Ue,
							mute: !Ue,
							save: !Ue
						})
					})), i.a.createElement(L.d, null))), Object(se.a)(ve, me.a, Ce, g, Ie, j), je && Ye && i.a.createElement(b.a, {
						className: me.a.creatorStatsContainer,
						post: ve,
						subreddit: je,
						isOwnProfileStats: !0
					})));
				return i.a.createElement(K.b, null, tt)
			});
			t.default = Object(Y.a)(pe)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(o.b)(c);
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: n,
						onClick: o,
						style: r
					} = this.props;
					return i.a.createElement("div", {
						className: Object(d.a)(s, `Comment ${n.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => o && o(t, n))(t)
						},
						style: r
					}, t)
				}
			}
			t.a = l(Object(a.a)(m))
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				u = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = .75, g = 10 * a.N;
			class v extends i.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						u.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (f + 1) && u.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, g), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? i.a.createElement("div", null, e()) : i.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, i.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, i.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), i.a.createElement("a", {
						className: b.a.seeMore,
						onClick: this.onShowMore
					}, h._("see more", null, {
						hk: "1Cx4qU"
					})))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var x = v,
				y = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./node_modules/lodash/noop.js"),
				O = s.n(C),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/comment/authoring.ts"),
				S = s("./src/reddit/actions/comment/moderation.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				M = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				F = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				G = s("./src/reddit/contexts/InsideOverlay.tsx"),
				D = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				V = s("./src/reddit/helpers/overlay/index.ts"),
				z = s("./src/reddit/helpers/trackers/lightbox.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				q = s("./src/reddit/selectors/activeModalId.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				Z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/tooltip.ts"),
				ee = s("./src/reddit/selectors/user.ts"),
				te = s("./src/reddit/components/OverflowMenu/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				ie = s("./src/reddit/components/ShareMenu/index.tsx"),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				re = s("./src/reddit/controls/Dropdown/Row.tsx"),
				de = s("./src/reddit/helpers/trackers/modTools.ts"),
				ae = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				le = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				me = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				pe = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				he = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				ge = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const ve = he.a.wrapped(te.b, "OverflowMenu", pe.a),
				xe = he.a.wrapped(L.a, "ModToolsFlatlist", pe.a),
				ye = he.a.wrapped(F.a, "ModActionsMenu", pe.a),
				Ce = he.a.wrapped(re.b, "DropdownRow", pe.a),
				Oe = he.a.wrapped(ae.a, "Flatlist", pe.a),
				Ee = he.a.button("Button", pe.a),
				ke = Object(D.v)(),
				we = e => `Comment-${e}--Modal--DeleteComment`,
				je = e => `Distinguish--Dropdown--${e}`,
				Se = (e, t) => `${e}--${t}-overflow-menu`,
				_e = e => `View--Reports--${e}`,
				Ie = Object(r.c)({
					activeTooltipId: $.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.a)(e) === we(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: ee.R,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: ee.l,
					modModeEnabled: D.W,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, i;
						return (null === (i = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === i ? void 0 : i.postOrCommentId) === s.id
					},
					subreddit: D.s,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: Y.a
				});
			class Pe extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(de.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(W.d)(W.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(de.b)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(de.b)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(de.b)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(de.b)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(z.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : i.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						showModTools: o
					} = this.props, r = Object(H.a)(s), d = !!t && t.displayText === e.author;
					if (o && r) return n ? i.a.createElement(xe, {
						comment: e,
						isCommentAuthor: d
					}) : i.a.createElement(ye, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, i.a.createElement(le.a, null), i.a.createElement(T.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(B.a)(e);
					if (s && Object(B.c)(e) && !t) return i.a.createElement(R.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === _e(e.id),
						id: _e(e.id)
					}, i.a.createElement(U.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: _e(e.id)
					}), e.ignoreReports ? i.a.createElement(ce.a, null) : i.a.createElement(me.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: o,
						showModTools: r
					} = this.props, d = Object(H.a)(s), a = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (r && a && !e.bannedBy && (c || d && !n)) return i.a.createElement(R.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === je(e.id)
					}, i.a.createElement(ge.a, null), i.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === je(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: d,
						onDistinguishComment: o,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: je(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: n,
						currentUser: o,
						deleteComment: r,
						isLoggedIn: d,
						isPendingDeletion: a,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: u
					} = this.props, p = Object(H.a)(c), b = !!o && o.displayText === e.author, h = (!l && !e.isLocked || p && d) && !Object(J.g)(e), f = o && e.isGildable && !Object(J.g)(e);
					return i.a.createElement("div", {
						className: s
					}, i.a.createElement(Oe, null, h && i.a.createElement(Ee, {
						onClick: this.handleReply,
						disabled: a
					}, y.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && i.a.createElement(Ee, {
						onClick: this.handleGild
					}, y.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), i.a.createElement(ie.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, i.a.createElement(Ee, {
						onClick: this.sendCommentEventWithNameShare
					}, y.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), i.a.createElement(ve, {
						dropdownId: Se(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !a && i.a.createElement(Ce, {
						displayText: y.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, i.a.createElement(fe.a, {
						name: be.a.report
					})), i.a.createElement(Ce, {
						displayText: e.isSaved ? y.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : y.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? i.a.createElement(fe.a, {
						name: be.a.saved
					}) : i.a.createElement(fe.a, {
						name: be.a.save
					})), b && i.a.createElement(Ce, {
						displayText: y.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, i.a.createElement(fe.a, {
						name: be.a.edit
					})), b && i.a.createElement(Ce, {
						displayText: y.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, i.a.createElement(fe.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && i.a.createElement(M.a, {
						actionText: y.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: y.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: y.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: y.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: r,
						toggleModal: u,
						trackClick: O.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Ne = ke(Object(o.b)(Ie, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(j.i)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(S.b)(s.id, t, n)),
						onIgnoreReports: () => e(Object(S.g)(s.id)),
						onGildClick: t => e(Object(_.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(P.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(N.h)({
							tooltipId: je(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(N.h)({
							tooltipId: _e(s.id)
						})),
						onToggleSave: () => e(Object(w.o)(s.id)),
						handleDelete: () => {
							e(Object(I.i)(we(s.id))), e(Object(N.h)({
								tooltipId: Se(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(E.a)(s.postId, s.id, {}),
								i = {
									commentId: s.id,
									draftKey: Object(k.a)(K.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(V.a)(t)), e(Object(j.g)(i))
						},
						handleReply: t => {
							const n = Object(E.a)(s.postId, s.id, {}),
								i = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(V.a)(t)), e(Object(j.h)(i))
						},
						toggleDeleteCommentModal: () => e(Object(I.i)(we(s.id)))
					}
				})(Object(oe.c)(Object(G.b)(Pe)))),
				Te = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Le = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Me = s("./src/reddit/selectors/commentSelector.ts"),
				Ae = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Fe = s.n(Ae);
			const Be = he.a.wrapped(Te.a, "TopMeta", Fe.a),
				Ue = he.a.div("ProfileCommentWrapper", Fe.a),
				Ge = he.a.div("CommentBody", Fe.a),
				De = Object(o.b)(() => Object(r.c)({
					comment: (e, t) => Object(Me.c)(e, t),
					flair: Q.e
				})),
				We = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = De(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: o,
					showFlatlist: r,
					showModTools: c
				} = e, l = s => i.a.createElement(Le.b, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: We(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return i.a.createElement(Ue, {
					className: Object(d.a)({
						[Fe.a.isRemoved]: !!t.bannedBy
					})
				}, i.a.createElement(Be, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), i.a.createElement("div", null, !t.isDeleted && i.a.createElement(Ge, null, o ? l() : i.a.createElement(x, {
					height: a.Zb,
					isExpanded: o
				}, l)), !t.isDeleted && r && i.a.createElement(Ne, {
					comment: t,
					commentsPageKey: s,
					showModTools: c
				})))
			})
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return i.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, i.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), i.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), i.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return i.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, i.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), i.a.createElement("defs", null, i.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, i.a.createElement("stop", {
					stopColor: "#FF538C"
				}), i.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return i.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, i.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), i.a.createElement("defs", null, i.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, i.a.createElement("stop", {
					stopColor: "#FF538C"
				}), i.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return i.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, i.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), i.a.createElement("defs", null, i.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, i.a.createElement("stop", {
					stopColor: "#FF538C"
				}), i.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less": function(e, t, s) {
			e.exports = {
				ringsContainer: "_3o_krdWfVVLOac1O-lVvTY",
				animated: "FTiJjjTo1ieOsSlT2EP08",
				fadein: "_2rEznjvY2VtmhBvzQVcKSA",
				reverb: "_4fN6nwGFX9KM3IkyL96J6",
				fadeout: "_2NIaOpVXH7sOwUsZ_g6ncE",
				innerRing: "fHWSRI59TPmnNbWLIicZp",
				middleRing: "_1GWX6vX1xdG3nZrRB4N5Yo",
				outerRing: "_24PG9NuvmXf9LT0ZIIzD8A"
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				d = s.n(r),
				a = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: n,
					isAnimated: r = !1
				} = e;
				return i.a.createElement("div", {
					className: Object(o.a)(d.a.ringsContainer, t, r ? d.a.animated : "")
				}, i.a.createElement(a.a, {
					ringId: n,
					className: Object(o.a)(d.a.innerRing, `${s}Inner`)
				}), i.a.createElement(c.a, {
					ringId: n,
					className: Object(o.a)(d.a.middleRing, `${s}Middle`)
				}), i.a.createElement(l.a, {
					ringId: n,
					className: Object(o.a)(d.a.outerRing, `${s}Outer`)
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less": function(e, t, s) {
			e.exports = {
				upcomingTalkCard: "_1ng4vZrRsv4atm7KiZqzi",
				upcomingTalkContainer: "_2zQOetr4IrprS8H-cDkAyF",
				upcomingTalkInfo: "_1jr6igJaJjdBSf6gQILUHz",
				upcomingTalkLabel: "_24TGrjt1qFqchgJsm9regX",
				upcomingTalkHost: "_37h0RGkgWTCbecBmJVgL4V",
				StartTalkButton: "cw7J5pVSXn74JXDoOYlf",
				startTalkButton: "cw7J5pVSXn74JXDoOYlf",
				isNightMode: "jnzL83t6CY_CK_unbB0gI",
				MicrophoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				microphoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				hostAvatar: "_3QTjosw2bqonj6JPtDic5U",
				snoovatar: "_3YF-FxrjtGM2LtVtg_R8V_",
				snoovatarHeadshotContainer: "nU336w0rssAqUStSYM_xR",
				isImage: "_3qKfFw1Pvju3jBDzGxH6Wd",
				classicView: "_3BVeVQiYsH7FAegU2VUmV-",
				loadingIcon: "xmKaq8gXHdYMcfRximxGn"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/profile/index.ts"),
				a = s("./src/reddit/components/UserIcon/index.tsx"),
				c = s("./src/reddit/helpers/trackers/talkCreation.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				p = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				b = s.n(p),
				h = s("./src/config.ts"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = s("./src/reddit/hooks/useGqlContext.ts");
			var y = e => i.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				C = s("./src/reddit/endpoints/talk/index.ts"),
				O = s("./src/reddit/actions/toaster.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/redditGQL/types.ts");
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = () => i.a.createElement("span", {
				className: b.a.MicrophoneIcon
			}, i.a.createElement(y, null));
			var S = e => {
				let {
					roomId: t
				} = e;
				const s = Object(o.e)(m.eb),
					[d, a] = Object(n.useState)(!1),
					l = Object(o.d)(),
					u = Object(f.b)(),
					p = Object(x.a)();
				return i.a.createElement(g.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: d ? v.a : j,
					iconClassName: d ? b.a.loadingIcon : "",
					className: Object(r.a)(b.a.StartTalkButton, {
						[b.a.isNightMode]: s
					}),
					priority: g.c.Secondary,
					size: g.d.M,
					iconPosition: g.h.L,
					disabled: d,
					text: i.a.createElement("span", {
						className: b.a.StartTalkButtonText
					}, w._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						u(Object(c.a)()), a(!0);
						const e = await Object(C.l)(p(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return l(Object(O.f)({
							kind: E.b.Error,
							text: C.a[k.k.ServiceError]
						})), void a(!1);
						const s = Object(C.h)(e.body);
						if (null == s ? void 0 : s.errorState) return l(Object(O.f)({
							kind: E.b.Error,
							text: C.a[s.errorState.code] || C.a[k.k.ServiceError]
						})), void a(!1);
						(null == s ? void 0 : s.okState) && (window.location.href = `${h.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					roomId: p,
					isClassicView: h = !1
				} = e;
				const f = Object(o.d)(),
					g = Object(l.a)(),
					v = Object(o.e)(m.G),
					x = Object(o.e)(m.eb),
					y = Object(o.e)(e => Object(m.Eb)(e, {
						postId: s
					})),
					C = Object(o.e)(e => Object(m.Bb)(e, {
						userName: t
					}));
				Object(n.useEffect)(() => {
					s && g && g(Object(c.f)(s))
				}, [g, s]), Object(n.useEffect)(() => {
					C || f(Object(d.d)(t))
				}, [f, t, s, C]);
				const O = () => i.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(r.a)(b.a.hostAvatar, {
						[b.a.classicView]: h
					})
				}, i.a.createElement("div", {
					className: b.a.snoovatar
				}, i.a.createElement(a.a, {
					userName: t,
					isNSFW: !v,
					className: b.a.isImage
				})), i.a.createElement(u.a, {
					ringId: `${s}`,
					className: Object(r.a)(b.a.hostRings, {
						[b.a.nightMode]: x
					}),
					ringClassName: "hostRing"
				}));
				return h ? i.a.createElement(O, null) : i.a.createElement("div", {
					className: b.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, i.a.createElement("div", {
					className: b.a.upcomingTalkContainer
				}, i.a.createElement(O, null), i.a.createElement("div", {
					className: b.a.upcomingTalkInfo
				}, i.a.createElement("div", {
					className: b.a.upcomingTalkLabel
				}, _._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), i.a.createElement("div", {
					className: b.a.upcomingTalkHost
				}, "u/", t), y && p && i.a.createElement(S, {
					roomId: p
				}))))
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostList/Placeholder.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			var u = e => {
				let {
					children: t,
					className: s
				} = e;
				return o.a.createElement("div", {
					className: Object(d.a)(m.a.Wrapper, s)
				}, o.a.createElement(a.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: c.g.Classic
				}), o.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: s,
					timeSort: i = r.oc.ALL
				} = e;
				return o.a.createElement(u, {
					className: t
				}, i === r.oc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: s,
					timeSort: i = r.oc.ALL
				} = e;
				return o.a.createElement(u, {
					className: t
				}, i === r.oc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "28vBEd"
				}) : n.fbt._("hmm... {profileName} hasn't posted recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "38GhqN"
				}))
			};
			var h = e => {
					let {
						className: t,
						text: s
					} = e;
					return o.a.createElement(u, {
						className: t
					}, s)
				},
				f = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				g = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = s.n(g);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = () => o.a.createElement("div", {
				className: v.a.container
			}, o.a.createElement(f.a, {
				className: v.a.hideIcon
			}), o.a.createElement("h3", {
				className: v.a.title
			}, x._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), o.a.createElement("p", {
				className: v.a.subtitle
			}, x._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.v)(),
				f = Object(r.c)({
					layout: m.U
				}),
				g = Object(o.b)(f);
			class v extends i.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * a.l + a.p + a.q,
						t = l.a - e,
						s = a.g - t,
						n = l.a + s + (this.props.bladeOpen ? a.a : 0);
					return this.props.layout !== c.g.Large ? null : i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${n}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${a.g+a.p+a.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${a.q}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${a.g+a.p+a.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(d.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return i.a.createElement("div", {
						className: p.a.Container
					}, i.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(g(b.a.wrapped(v, "Component", p.a)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				d = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				a = s.n(d);
			const c = e => {
				let {
					userCount: t
				} = e;
				return r.a.createElement("span", {
					className: a.a.liveChatActiveUsers
				}, t > 1 ? i.fbt._("{userCount} here now", [i.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : i.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const u = () => r.a.createElement("span", {
				className: m.a.LiveLabel
			}, i.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const h = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return r.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, r.a.createElement(u, null), r.a.createElement(c, {
					userCount: t
				}))
			};
			var f = s("./node_modules/react-redux/es/index.js"),
				g = s("./src/reddit/selectors/chat.ts"),
				v = s("./src/reddit/selectors/experiments/chat.ts");
			const x = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(f.e)(e => Object(g.a)(e, t));
				return Object(f.e)(v.f) ? r.a.createElement(h, {
					userCount: n,
					className: s
				}) : null
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/components/RichTextJson/index.tsx"),
				a = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(r.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : i.a.createElement(d.b, {
					className: Object(o.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === a.g.Classic,
						[m.a.compactLayout]: s === a.g.Compact,
						[m.a.largeLayout]: s === a.g.Large
					}),
					content: t,
					rtJsonElementProps: u(n),
					useExplicitTextColor: !0
				})
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/components/ClassicPost/index.tsx"),
				r = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/gold.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				y = s.n(x);
			const C = Object(r.b)(() => Object(d.c)({
				comment: f.c,
				isAwarded: (e, t) => {
					const s = Object(f.c)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(g.a)(e, t);
						return s && s.coinPrice >= a.g
					})
				},
				isNightmodeOn: v.eb
			}), e => ({
				openPost: t => e(Object(m.K)(t))
			}));
			var O = Object(l.a)(C(e => {
					const {
						comment: t,
						commentId: s,
						first: n,
						isAwarded: o,
						isNightmodeOn: r,
						last: d,
						openPost: a,
						showModTools: l
					} = e;
					if (!t) return null;
					return i.a.createElement(u.a, {
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
					}, i.a.createElement("div", {
						className: Object(c.a)(y.a.commentOuterWrapper, {
							[y.a.isLast]: d,
							[y.a.isAwarded]: o,
							[y.a.isNightmodeOn]: r
						})
					}, i.a.createElement("div", {
						className: Object(c.a)(y.a.commentWrapper, {
							[y.a.isFirst]: n
						})
					}, i.a.createElement("div", {
						className: y.a.commentSeparator
					}), t.parentId && i.a.createElement("div", {
						className: y.a.commentSeparator
					}), i.a.createElement("div", {
						className: y.a.commentContentWrapper
					}, i.a.createElement(p.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				E = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				S = s.n(j),
				_ = s("./src/lib/lessComponent.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(k.v)({
					currentProfileName: k.j,
					isCommentsPage: k.y,
					isCommentPermalink: k.x,
					isProfilePostListing: k.N,
					pageLayer: e => e
				}),
				N = _.a.wrapped(E.a, "OverviewCommentPost", S.a),
				T = _.a.wrapped(o.default, "ClassicPost", S.a);
			t.a = P(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: n,
					allowModToolsUnderComments: o,
					height: r,
					width: d,
					...a
				} = e;
				return Object(w.a)(t) ? s ? i.a.createElement(i.a.Fragment, null, i.a.createElement(N, I({}, a, {
					availableWidth: d,
					commentId: t
				})), i.a.createElement(O, {
					commentId: t,
					first: s,
					last: n,
					showModTools: o
				})) : i.a.createElement(O, {
					commentId: t,
					first: s,
					last: n,
					showModTools: o
				}) : i.a.createElement(T, I({}, a, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				g = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				x = s.n(v),
				y = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				C = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				E = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				k = s.n(E);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = c.a.wrapped(f.default, "InternalLink", k.a), S = c.a.div("Wrapper", k.a), _ = c.a.div("Row", k.a), I = c.a.wrapped(y.a, "CommentIcon", k.a), P = c.a.div("TitleContainer", k.a), N = c.a.div("PostTitleContainer", k.a), T = c.a.wrapped(u.c, "PostTitle", k.a), L = c.a.wrapped(p.g, "PostTopMeta", k.a), R = c.a.wrapped(p.a, "MetaSeparator", k.a), M = Object(o.b)(() => Object(r.c)({
				comment: C.c,
				isBlockingInterstitialEnabled: O.b,
				isBlockingInterstitialV2Enabled: O.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.cb)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return i.a.createElement(n.Fragment, null, i.a.createElement(R, null), i.a.createElement(L, {
					metaSeparatorClassName: k.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, F = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: n,
					isBlockingInterstitialV2Enabled: o,
					showModalOnAuthorLinkClick: r
				} = e;
				if (!t) return null;
				const d = s || t.author,
					a = `/user/${d}/`;
				return i.a.createElement(j, {
					"data-click-id": "user",
					to: a,
					onClick: e => {
						(n || o) && (e.preventDefault(), r(a))
					}
				}, d)
			};
			t.a = Object(a.a)(Object(h.b)(M(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: o
				} = e;
				return i.a.createElement(m.b, {
					className: Object(d.a)(x.a.compactPostStyles, k.a.overviewCommentPost, {
						[k.a.banned]: !!e.post.bannedBy,
						[k.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: o,
					onClick: n,
					eventFactory: s
				}, i.a.createElement(S, {
					style: {
						background: Object(g.e)(e)
					}
				}, i.a.createElement(_, null, i.a.createElement(I, null), i.a.createElement(P, null, w._("{postAuthor} commented on {postTitle} {postMeta}", [w._param("postAuthor", F({
					...e
				})), w._param("postTitle", i.a.createElement(N, null, i.a.createElement(T, {
					outboundLinkClassName: k.a.postTitleOutboundLink,
					post: o,
					size: u.b.Small,
					titleClassName: k.a.postTitleTitle
				}))), w._param("postMeta", A(e))], {
					hk: "d6l8e"
				})))))
			}))))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: f,
					isOverlay: g,
					isVoteCountAnimation: v,
					postId: x,
					shouldShowUpvoteRatioOnHover: y
				} = e, C = `upvote-button-${t.id}${g?"-overlay":""}`;
				return i.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && i.a.createElement(a.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), i.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: C,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: x,
					scoreClassName: Object(o.a)(u.a.score, {
						[u.a.allowPointerEvents]: y
					}),
					shouldShowUpvoteRatioOnHover: y
				}))
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/last.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/helpers/isComment.ts"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/lib/LRUCache/index.ts"),
				x = s("./src/telemetry/index.ts"),
				y = s("./src/telemetry/models/Timer.ts"),
				C = s("./src/reddit/components/PostList/index.m.less"),
				O = s.n(C);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 500,
				w = new v.a(k),
				j = new v.a(k),
				S = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				_ = (e, t, s, n, i, o) => {
					const r = `entered-${e}-${t}-${s?`last-${n}-${i}`:""}`;
					let d = w.get(r);
					return void 0 === d && (d = () => {
						s && o.onBottomViewed(n, i), o.trackOnPostEnteredViewport(e, t)
					}, w.set(r, d)), d
				},
				I = (e, t) => {
					const s = `click-${e}`;
					let n = j.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(a.e)(s.source.outboundUrl, a.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(h.a)(e)
						})
					}, j.set(s, n)), n
				};
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new v.a(k), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && x.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = x.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = x.c.end(this.timerId);
						setTimeout(() => Object(x.b)(d.o.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && x.c.cancel(this.timerId), e.itemIds.length && (this.timerId = x.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && x.c.has(this.timerId)) {
						const e = x.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(x.b)(d.o.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && x.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return x.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = x.c.end(e);
					setTimeout(() => s(t(n, y.TimerType.InApp)), 0)
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
						itemIds: n,
						...i
					} = e, o = Object.keys(s), r = Object.keys(i);
					return r.length !== o.length || !!r.some(e => s[e] !== i[e])
				}
				scrollChildForItem(e, t, s, n, i, o) {
					const {
						listingKey: d,
						listingName: a,
						postClickEventFactory: c
					} = this.props, l = `post-${o}-${e}-${t}-${s?"last-index":""}-${a}-${d}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(l))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: u
						} = this.props, p = u[e], b = `overview-chrono-list-item-[layout: ${o}]-[itemId: ${e}]`, h = _(p, o, s, d, a, this.props), f = {
							key: b,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: n,
							isLastInCommentList: i,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: o,
							onClickPost: I(e, this.props),
							postId: p
						}, v = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, o, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => r.a.createElement(g.a, {
								postId: f.postId
							}, r.a.createElement(v, E({}, f, e)))
						}, this.scrollChildCache.set(l, m)
					}
					return m
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return r.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: n
					} = this.props;
					return r.a.createElement("div", {
						className: O.a.placeholder
					}, r.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && r.a.createElement(u.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: n
					} = this.props;
					return r.a.createElement("div", {
						className: O.a.placeholder
					}, r.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: S[s]
					}), !!e && r.a.createElement(u.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: n,
						onLoadMore: i
					} = this.props, o = n.map((s, i, o) => {
						const r = i === n.length - 1,
							d = i && n[i - 1],
							a = !r && n[i + 1],
							c = !!Object(f.a)(s) && (!d || !Object(f.a)(d) || e[d].postId !== e[s].postId),
							l = !!Object(f.a)(s) && (!a || !Object(f.a)(a) || e[a].postId !== e[s].postId);
						return this.scrollChildForItem(s, i, r, c, l, t)
					});
					return r.a.createElement("div", null, r.a.createElement(p.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: i,
						viewportTopPadding: b.f + b.r
					}, o), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = P
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/fastdom/index.ts"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				d = s("./node_modules/lodash/throttle.js"),
				a = s.n(d),
				c = s("./node_modules/react/index.js"),
				l = s.n(c),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/config.ts"),
				h = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				x = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				y = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				w = s("./src/reddit/models/Profile/index.ts"),
				j = s("./src/reddit/featureFlags/index.ts"),
				S = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/selectors/userPrefs.ts"),
				N = s("./src/server/helpers/profileRedirect.ts"),
				T = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				L = s.n(T);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = Object(C.v)({
					routeName: C.bb,
					privateListingType: C.k
				}),
				A = Object(p.c)({
					isDropdownMenuOpen: e => Object(_.a)(e) === B,
					isOwnProfile: (e, t) => Object(I.X)(e, t.profileName),
					isHistoryTabEnabled: S.a,
					isSnoovatar30Enabled: j.d.snoovatar30,
					isSubscriptionsPinned: P.c
				}),
				F = Object(h.a)(O.a),
				B = "profile-nav-menu-tooltip",
				U = y.g + y.q + y.p;
			var G;
			t.a = M(Object(m.b)(A, e => ({
					toggleTooltip: t => e(Object(v.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isHistoryTabEnabled: s,
						isOwnProfile: n,
						privateListingType: o,
						profileName: d,
						routeName: m,
						toggleTooltip: u,
						isSnoovatar30Enabled: p,
						isSubscriptionsPinned: b,
						viewBlockedConsent: h
					} = e;
					const [g, v] = Object(c.useState)(!1), C = Object(c.useRef)(null), [O, E] = Object(c.useState)([]), [w, j] = Object(c.useState)([]);
					return Object(c.useEffect)(() => {
						const e = H({
							isHistoryTabEnabled: s,
							profileName: d,
							isOwnProfile: n,
							routeName: m,
							privateListingType: o,
							isSnoovatar30Enabled: p,
							viewBlockedConsent: h
						});
						E(e.filter(e => e.position === G.MENU));
						const t = [],
							c = a()(() => {
								const s = document.documentElement.clientWidth - 2 * y.p,
									n = s > U ? U : s;
								let i = 42;
								t.forEach(t => {
									i += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = i > n ? G.DROPDOWN : G.MENU
								});
								const o = e.filter(e => e.position === G.MENU);
								E(e => r()(o, e) ? e : o);
								const d = e.filter(e => e.position === G.DROPDOWN);
								j(e => r()(d, e) ? e : d), v(d.length > 0)
							}, 50);
						return i.a.read(() => {
							const e = C.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), c())
						}), window.addEventListener("resize", c), () => {
							window.removeEventListener("resize", c)
						}
					}, [s, d, n, m, o, p, h]), l.a.createElement("div", {
						className: L.a.container
					}, l.a.createElement(x.a, {
						bladeOpen: !1,
						offsetLeft: b ? y.t : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: L.a.menuContainer,
							ref: C
						}, O.map(e => l.a.createElement(D, R({}, e, {
							key: e.key
						})))), g && l.a.createElement("button", {
							className: Object(f.a)(L.a.mainLink),
							id: B,
							onClick: () => u(B)
						}, l.a.createElement(k.a, {
							name: "overflow_horizontal"
						})), g && l.a.createElement(F, {
							className: L.a.dropdown,
							isOpen: t,
							tooltipId: B
						}, w.map(e => l.a.createElement(W, R({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(G || (G = {}));
			const D = e => {
					let {
						isActive: t,
						text: s,
						url: n,
						internal: i
					} = e;
					return i ? l.a.createElement(E.default, {
						className: Object(f.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						to: n
					}, s) : l.a.createElement("a", {
						className: Object(f.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						href: n
					}, s)
				},
				W = e => {
					let {
						isActive: t,
						internal: s,
						url: n,
						text: i
					} = e;
					return s ? l.a.createElement(u.a, {
						className: Object(f.a)(L.a.dropdownLink, {
							[L.a.isActive]: t
						}),
						to: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, i) : l.a.createElement("a", {
						className: Object(f.a)(L.a.dropdownLink),
						href: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, i)
				},
				H = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: i,
						privateListingType: o,
						isHistoryTabEnabled: r,
						isSnoovatar30Enabled: d,
						viewBlockedConsent: a
					} = e;
					const c = s ? [{
						internal: !0,
						isActive: i === g.Sb.PROFILE_PRIVATE && o === w.b.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: i === g.Sb.PROFILE_PRIVATE && o === w.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: i === g.Sb.PROFILE_PRIVATE && o === w.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: i === g.Sb.PROFILE_PRIVATE && o === w.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: G.MENU
					}] : [];
					s ? (c.push({
						internal: !0,
						isActive: i === g.Sb.PROFILE_PRIVATE && o === w.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: G.MENU
					}), c.push({
						internal: !0,
						isActive: i === g.Sb.PROFILE_PRIVATE && o === w.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: G.MENU
					})) : c.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: G.MENU
					});
					const l = r && s ? [{
							internal: !0,
							isActive: i === g.Sb.PROFILE_PRIVATE && o === w.b.History,
							key: "profile.mainmenu.history",
							text: n.fbt._("History", null, {
								hk: "1fv1wp"
							}),
							url: `/user/${t}/history/`,
							position: G.MENU
						}] : [],
						m = d ? [{
							internal: !0,
							isActive: i === g.Sb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: n.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: G.MENU
						}] : [],
						u = a ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: i === g.Sb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${u}`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: i === g.Sb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `${Object(N.a)(t)}/${u}`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: i === g.Sb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${u}`,
						position: G.MENU
					}, ...m, ...l, ...c]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./src/reddit/components/SidebarContainer/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				a = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				u = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				p = s("./src/reddit/constants/posts.ts");
			const b = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				h = e => o.a.createElement(r.a, {
					className: e.className
				}, o.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), o.a.createElement(u.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: p.a.PROFILE
					}
				}), o.a.createElement(d.a, {
					profileName: e.profileName
				}), o.a.createElement(a.a, {
					profileName: e.profileName
				}), o.a.createElement(c.a, null, o.a.createElement(m.a, {
					profileName: e.profileName
				})), o.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			h.defaultProps = {
				isOverlay: !1
			}, t.a = h
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(i);
			t.a = n.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/take.js"),
				o = s.n(i),
				r = s("./node_modules/react/index.js"),
				d = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: i,
					items: a,
					minimizedLength: b,
					onLoadMore: h,
					pending: f,
					renderItem: g,
					title: v
				} = e, [x, y] = Object(r.useState)(!1), C = a.length > b || s, O = (!C || x ? a : o()(a, b)).map(e => g({
					item: e
				})), E = () => {
					x || y(!0), x && !s && y(!1), s && h && h()
				};
				return d.a.createElement(c.a, {
					className: t,
					headerButton: i,
					title: v
				}, O, d.a.createElement(u.a, null, d.a.createElement(p.a, null, C && (() => {
					const e = !x || s && h ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return d.a.createElement(l.r, {
						onClick: E
					}, f ? d.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: a.Yb
			}, t.a = b
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				f = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				g = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/redditGQL/types.ts"),
				y = s("./src/reddit/components/SidebarFooter/index.m.less"),
				C = s.n(y);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = a.a.a("Link", C.a), k = Object(r.c)({
				countryCode: v.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: g.a
			}), w = Object(o.b)(k), j = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), S = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return i.a.createElement("div", {
					className: C.a.GreyRereddit
				}, s, !!u.c[t] && i.a.createElement("div", {
					className: C.a.LinkContainer
				}, i.a.createElement("div", {
					className: C.a.Column
				}, i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/impressum"
				}, O._("Impressum", null, {
					hk: "4cKXSI"
				})), t === x.j.De && i.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, O._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), i.a.createElement("div", {
					className: C.a.Column
				}, i.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, O._("help", null, {
					hk: "4lyYaD"
				})), t === x.j.De && i.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, O._("Transparency report", null, {
					hk: "3CgBdG"
				})))), i.a.createElement("div", {
					className: C.a.LinkContainer
				}, i.a.createElement("div", {
					className: C.a.Column
				}, i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, O._("User Agreement", null, {
					hk: "2RA6JL"
				})), i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, O._("Privacy policy", null, {
					hk: "10K04G"
				}))), i.a.createElement("div", {
					className: C.a.Column
				}, i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, O._("Content policy", null, {
					hk: "1DyxZS"
				})), i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, O._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), i.a.createElement("div", {
					className: C.a.Copyright
				}, O._("Reddit Inc © {year}. All rights reserved", [O._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = j(w(Object(c.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(h.a)(t, Object(d.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.ad.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.ad.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.ad.LargeImagePreview ? e.reredditButtons : [];
					return i.a.createElement(S, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? i.a.createElement(E, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return i.a.createElement(l.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!u.c[e.countryCode] && i.a.createElement("div", {
					className: C.a.LinkContainer
				}, i.a.createElement("div", {
					className: C.a.Column
				}, i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/impressum"
				}, O._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === x.j.De && i.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, O._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), i.a.createElement("div", {
					className: C.a.Column
				}, i.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, O._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === x.j.De && i.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, O._("Transparency report", null, {
					hk: "3CgBdG"
				})))), i.a.createElement("div", {
					className: C.a.LinkContainer
				}, i.a.createElement("div", {
					className: C.a.Column
				}, i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, O._("User Agreement", null, {
					hk: "2RA6JL"
				})), i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, O._("Privacy policy", null, {
					hk: "10K04G"
				}))), i.a.createElement("div", {
					className: C.a.Column
				}, i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, O._("Content policy", null, {
					hk: "1DyxZS"
				})), i.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, O._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && i.a.createElement("div", {
					className: C.a.LinkContainer
				}, i.a.createElement("div", {
					className: C.a.Column
				}, n("en"), n("fr"), n("it")), i.a.createElement("div", {
					className: C.a.Column
				}, n("de"), n("es"), n("pt"))), i.a.createElement("div", {
					className: C.a.Copyright
				}, O._("Reddit Inc © {year}. All rights reserved", [O._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = s.n(h);
			const g = Object(d.c)({
					currentUser: b.l,
					moderated: u.p,
					subscriptions: p.e,
					hasMoreModerated: u.e,
					loadMorePending: u.b
				}),
				v = Object(r.b)(g, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(a.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				x = e => {
					let {
						item: t
					} = e;
					return o.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: `${t.type}-${t.name}`,
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = v(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: i,
					subscriptions: r,
					hasMoreModerated: d,
					onLoadMore: a,
					loadMorePending: l
				} = e;
				if (0 === s.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === i.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : n.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(s, new Set(r));
				return o.a.createElement(c.a, {
					className: f.a.container,
					title: u,
					items: p,
					renderItem: x,
					hasMoreItems: d,
					onLoadMore: a,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(p);
			const h = Object(a.c)({
					hasMoreMultireddits: u.f,
					loadMorePending: u.c,
					multireddits: u.q
				}),
				f = Object(r.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.i)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				g = e => {
					let {
						item: t
					} = e;
					return o.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, o.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), o.a.createElement("div", {
						className: b.a.description
					}, o.a.createElement(d.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), o.a.createElement("div", {
						className: b.a.meta
					}, t.subredditCount && n.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [n.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: i,
					onLoadMore: r,
					profileName: d
				} = e;
				return i && i.length ? o.a.createElement(m.a, null, o.a.createElement(l.a, {
					hasMoreItems: t,
					items: i,
					onLoadMore: r,
					pending: s,
					renderItem: g,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", d)], {
						hk: "16Oicc"
					})
				})) : null
			})
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
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./node_modules/lodash/throttle.js"),
				o = s.n(i),
				r = s("./node_modules/react/index.js"),
				d = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = a.g[1] + 24,
				v = m.f + 8,
				x = v + 152 + 16,
				y = x + g + 8,
				C = h.a.div("Container", b.a),
				O = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return d.a.createElement(c.a, f({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?v:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				E = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: i,
						isSticky: o,
						shouldStickToBottom: r
					} = e;
					return d.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: r,
							[b.a.StickyStyles]: !r && o && !i,
							[b.a.StickyStylesFakeOverlay]: !r && !!i
						})
					}, t)
				};
			class k extends r.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > y,
						shouldFooterSticky: this.windowHeight > x
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
							children: n,
							className: i,
							hideFooter: o,
							pageLayer: r,
							recommendationsComponent: a,
							reredditButtons: c
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return d.a.createElement(C, {
						className: i,
						innerRef: this.setWrapperRef
					}, d.a.createElement(E, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, a, !o && d.a.createElement(l.a, {
						reredditButtons: c
					})), !a && !this.props.hideBackToTop && d.a.createElement(O, {
						isOverlay: !!(null === (e = null == r ? void 0 : r.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const w = Object(u.v)();
			t.a = w(k)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				b = s.n(p);
			const h = Object(d.b)(d.d, b.a);
			var f = s("./src/reddit/selectors/profile.ts"),
				g = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				v = s.n(g),
				x = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/opener/index.ts");
			const C = Object(d.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(f.t)(e, Object(f.o)(e, s))
				}
			}, h);
			t.a = Object(r.b)(C)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : o.a.createElement(a.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: S
				})
			});
			const O = x.a.wrapped(u.a, "TrophyItem", v.a),
				E = x.a.div("TrophyIcon", v.a),
				k = x.a.h5("TrophyName", v.a),
				w = x.a.div("TrophyContent", v.a),
				j = x.a.wrapped(c.c, "Description", v.a),
				S = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						n = o.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return o.a.createElement(O, {
						key: t.id
					}, o.a.createElement(E, null, t.url ? o.a.createElement("a", {
						target: y.d.BLANK,
						rel: y.c,
						href: t.url,
						onClick: () => s((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.o(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.T(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, n) : n), o.a.createElement(w, null, o.a.createElement(k, null, t.name), o.a.createElement(j, null, t.description)))
				}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SEOTitle/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.m.less"),
				a = s.n(d);
			const c = o.a.div("WidgetBackground", a.a),
				l = o.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return i.a.createElement("div", s, i.a.createElement(r.b, {
						type: r.a.Widget
					}, t))
				}, "WidgetHeader", a.a);
			t.b = e => i.a.createElement("div", {
				className: e.className
			}, i.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(r.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				k = s.n(E);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => o.a.createElement(b.a, {
					className: Object(c.a)(k.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: k.a.container
				}, e.isLoading ? o.a.createElement(g.a, {
					className: k.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: k.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(_, w({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(f.t, {
					className: k.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				S = Object(a.c)({
					hideNSFWPref: C.G,
					nightmode: C.eb
				}),
				_ = Object(r.b)(S)(e => o.a.createElement("div", {
					className: Object(c.a)(k.a.communityItemContainer, {
						[k.a.withBottomFlair]: e.isNSFW
					})
				}, o.a.createElement(x.a, {
					className: k.a.communityItemExpandCenter,
					widthRight: h.s
				}, o.a.createElement("div", {
					className: k.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: k.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(k.a.defaultCommunityIcon, {
						[k.a.mNightmode]: e.nightmode
					})
				})), o.a.createElement("div", {
					className: k.a.communityDescriptionContainer
				}, o.a.createElement(d.a, {
					className: k.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(O.b)(e.name, e.type),
					to: Object(O.a)(e.name, e.type)
				}, Object(O.b)(e.name, e.type)), o.a.createElement("div", {
					className: k.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: k.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && o.a.createElement(l.b, {
					className: k.a.nsfwFlair,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(g.a, {
					className: Object(c.a)(k.a.communityCta, k.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(f.t, {
					className: k.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? o.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : o.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && o.a.createElement("p", {
					title: e.description,
					className: k.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				i = s("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function r(e, t) {
				return t === n.a.PROFILE ? Object(i.e)(e) : Object(i.d)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				x = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				y = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				C = s.n(y);
			var O = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let o, r = t.username,
						d = "";
					return n !== u.a.Twitter ? null : (o = i.a.createElement(v.a, {
						className: C.a.twitterLogo
					}), d = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), r = `@${t.username}`, i.a.createElement(x.a, null, i.a.createElement("span", {
						className: C.a.icon
					}, o), i.a.createElement(f.b, {
						className: C.a.link,
						href: t.link,
						onClick: s
					}, i.a.createElement("div", {
						className: C.a.linkTitle
					}, i.a.createElement("span", {
						className: C.a.name
					}, r), i.a.createElement(g.a, {
						className: C.a.linkIcon
					})), i.a.createElement("div", {
						className: C.a.linkDescription
					}, d))))
				},
				E = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				k = s.n(E);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(r.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: s.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(b.Bb)(e, {
						userName: s.name
					}) : null
				}
			}), S = Object(o.b)(j, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(a.c)(S(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? i.a.createElement(d.a, null, i.a.createElement(c.b, null, i.a.createElement(c.a, null, w._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && i.a.createElement("div", {
					className: k.a.account
				}, i.a.createElement(O, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				x = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = y(e);
					return Object(v.f)(t)
				},
				E = e => {
					const t = C(e);
					return Object(v.f)(t)
				};
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				w = s.n(k);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.v)(), _ = Object(o.b)(() => Object(r.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.o)(e, t) || void 0,
						n = t.redditStyle || Object(f.l)(e, {
							subredditId: s
						}),
						i = Object(g.eb)(e);
					return n || i
				},
				nigtmode: g.eb,
				subredditId: m.o,
				topPostVariant: h.d
			}));
			class I extends i.a.Component {
				constructor() {
					super(...arguments), this.contentRef = i.a.createRef(), this.state = {
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						id: r,
						onClick: a,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? w.a.widgetContentOnly : w.a.widgetContent, f = !n && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, v = f ? this.getWidgetHeaderStyles() : {};
					return i.a.createElement("div", {
						className: Object(d.a)(t, w.a.widgetBackground, {
							[w.a.redditStyle]: n,
							[w.a.clickable]: !!a,
							[w.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: g
					}, m && i.a.createElement("div", {
						className: Object(d.a)(w.a.widgetHeader, {
							[w.a.clickable]: !!l
						}),
						id: r,
						style: {
							...v,
							...this.props.headerStyles
						},
						onClick: l
					}, i.a.createElement("div", {
						className: Object(d.a)(w.a.widgetTitle, p)
					}, i.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), o), i.a.createElement("div", {
						className: Object(d.a)(h, {
							[w.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && i.a.createElement(u.r, {
						className: w.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(_(Object(a.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				r = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/showPromotedCTA.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const x = {
					autoplayPref: v.c,
					activeModalId: m.a,
					crosspost: f.d,
					isActive: f.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: f.l,
					isExpanded: f.m,
					isLoggedIn: v.R,
					showPromotedCTA: g.a,
					moderatorPermissions: b.m,
					modModeEnabled: c.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: c.t,
					flairStyleTemplate: c.Y,
					showCTAExperimentDesign: p.a
				},
				y = Object(n.b)(() => Object(i.c)(x), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === d.a.upvoted ? Object(o.jb)(s) : Object(o.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(o.fb)(s)),
						onOpenReportsDropdown: t => e(Object(r.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(y(Object(a.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				i = "ModerationPage--Modal--DeleteAwardConfirmation",
				o = 20,
				r = 4,
				d = 1e4,
				a = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return v
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "l", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/lib/makeRequest/index.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts"),
				a = s("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"),
				c = s("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				l = s("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"),
				m = s("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				u = s("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				p = s("./src/redditGQL/operations/PrepareLiveAudioRoom.json"),
				b = s("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"),
				h = s("./src/redditGQL/operations/ReportTalk.json"),
				f = s("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				g = s("./src/redditGQL/types.ts");
			const v = (e, t) => Object(o.a)(e, {
					...h,
					variables: t
				}),
				x = async (e, t) => {
					const s = await Object(o.a)(e, {
						...m,
						variables: t
					});
					return !!Object(r.c)(s) && (s.body.data.subredditInfoById.allowedPostTypes || []).includes(g.L.Talk)
				}, y = async (e, t) => {
					var s, n;
					const i = await Object(o.a)(e, {
						...u,
						variables: t
					});
					return !!Object(r.c)(i) && (null !== (n = null === (s = i.body.data.profileByName) || void 0 === s ? void 0 : s.allowedPostTypes) && void 0 !== n ? n : []).includes(g.L.Talk)
				}, C = async e => {
					var t;
					const s = await Object(o.a)(e, l);
					return Object(r.c)(s) && null !== (t = s.body.data.availableAudioRoomTopics) && void 0 !== t ? t : []
				}, O = (e, t, s) => t.type === d.g.User ? Object(o.a)(e, {
					...a,
					variables: s
				}) : Object(o.a)(e, {
					...c,
					variables: {
						...s,
						subredditId: t.id
					}
				}), E = (e, t, s) => t.type === d.g.User ? Object(o.a)(e, {
					...b,
					variables: {
						input: s
					}
				}) : Object(o.a)(e, {
					...p,
					variables: {
						input: {
							...s,
							subredditId: t.id
						}
					}
				}), k = () => Object(i.a)(), w = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, j = {
					[g.k.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[g.k.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[g.k.RoomLimitExceeded]: n.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[g.k.ConcurrentRoomLimitExceeded]: n.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[g.k.SubredditRoomLimitExceeded]: n.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, S = e => e.data.prepareAudioRoom || e.data.prepareAudioRoomOnProfile, _ = {
					[g.N.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[g.N.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					})
				}, I = (e, t) => Object(o.a)(e, {
					...f,
					variables: t
				})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const i = (e, t) => {
				const s = e.some(e => e.isNSFW),
					i = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !i
			}
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/reddit/components/PostMedia/index.tsx");
			const r = (e, t, s, n, o, r) => n ? e.crosspostRootId ? i.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, d(e, s, o, r)) : d(e, s, o, r) : null,
				d = (e, t, s, n) => i.a.createElement(o.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
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
				return r
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(i);
			const r = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				d = e => Object(n.a)(o.a.loadingBar, r(e))
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				d = (e, t) => s => ({
					...Object(o.o)(s),
					action: i.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(o.kb)(s),
					post: Object(o.K)(s, e),
					userSubreddit: Object(o.ub)(s),
					actionInfo: Object(o.d)(s, {
						reason: r(t)
					})
				}),
				a = (e, t) => s => ({
					...Object(o.o)(s),
					action: i.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(o.K)(s, t),
					subreddit: Object(o.kb)(s),
					userSubreddit: Object(o.ub)(s)
				}),
				c = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(o.o)(t),
					action: i.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(o.d)(t, {
						pageType: "profile"
					}),
					post: Object(o.K)(t, e, void 0, 0),
					profile: Object(o.T)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(o.o)(n),
					action: i.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						reason: c(t)
					}),
					post: Object(o.K)(n, e, void 0, s)
				}),
				u = (e, t, s, n, r, d) => a => ({
					...Object(o.o)(a),
					action: i.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(o.d)(a, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(o.K)(a, e, void 0, d),
					subreddit: Object(o.kb)(a),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: r
					}
				}),
				p = (e, t, s) => n => ({
					...Object(o.o)(n),
					action: i.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(o.d)(n, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(o.K)(n, e, void 0, s),
					subreddit: Object(o.kb)(n)
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "h", (function() {
				return r
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/telemetry/models/Event.ts");
			const o = () => e => ({
					source: i.f.HomeFeed,
					action: i.d.Click,
					noun: i.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				r = () => e => ({
					source: i.f.UserPreferences,
					action: i.d.Click,
					noun: i.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				d = () => e => ({
					source: i.f.UserPreferences,
					action: i.d.Click,
					noun: i.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				a = () => e => ({
					source: i.f.CommunityNotificationsSettings,
					action: i.d.Click,
					noun: i.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				c = () => e => ({
					source: i.f.PopularFeed,
					action: i.d.Click,
					noun: i.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				l = () => e => ({
					source: i.f.SubredditIdBanner,
					action: i.d.Click,
					noun: i.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				m = () => e => ({
					source: i.f.AboutCommunityOverflow,
					action: i.d.Click,
					noun: i.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				u = () => e => ({
					source: i.f.AboutCommunityOverflow,
					action: i.d.Click,
					noun: i.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				})
		},
		"./src/reddit/helpers/trackers/talkCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/postCreations.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const d = () => e => ({
					...r.o(e),
					source: "global",
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_room"
					}
				}),
				a = () => e => ({
					...r.o(e),
					source: "global",
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_topic_picker"
					}
				}),
				c = () => e => ({
					...r.o(e),
					source: "liveaudio",
					action: i.c.CLICK,
					noun: "go_live",
					subreddit: r.kb(e),
					liveAudioRoom: {
						title: Object(o.vb)(e),
						topicIds: Object(o.ub)(e).topics.map(e => e.id)
					}
				}),
				l = () => e => ({
					...r.o(e),
					source: "liveaudio",
					action: i.c.CLICK,
					noun: "schedule",
					subreddit: r.kb(e),
					liveAudioRoom: {
						title: Object(o.vb)(e),
						topicIds: Object(o.ub)(e).topics.map(e => e.id)
					}
				}),
				m = () => e => ({
					...r.o(e),
					source: "post_composer",
					action: i.c.CLICK,
					noun: "overflow",
					subreddit: r.kb(e),
					liveAudioRoom: {
						title: Object(o.vb)(e)
					}
				}),
				u = e => t => ({
					...r.o(t),
					source: "global",
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					subreddit: r.kb(t),
					post: r.K(t, e),
					postEvent: {
						eventState: n.a.Future
					}
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, i, o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {}));
			const d = (e, t) => s => ({
					source: i.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(r.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...r.o
				}),
				a = (e, t) => s => ({
					source: i.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: r.K(s, e),
					subreddit: r.kb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...r.o(s)
				}),
				c = () => e => ({
					source: i.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...r.o(e)
				}),
				l = e => t => ({
					source: i.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...r.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);

			function o(e) {
				return i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				o = s.n(i);
			t.a = n.a.div("rightAligned", o.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				a = s.n(d);
			t.a = Object(o.a)(e => i.a.createElement("div", {
				className: Object(r.a)(a.a.expandedCenterContainer, e.className)
			}, i.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), i.a.createElement("div", {
				className: a.a.center
			}, Array.isArray(e.children) && e.children[1]), i.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/ProfilePrivate/index.m.less": function(e, t, s) {
			e.exports = {
				mixedList: "_203kLAn6xQ7ktVOvJCzl9p"
			}
		},
		"./src/reddit/pages/ProfilePrivate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				a = s("./src/reddit/components/EmptyProfile/index.ts"),
				c = s("./src/reddit/components/JumpToContent/index.tsx"),
				l = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = s("./src/reddit/components/PostList/index.tsx"),
				u = s("./src/reddit/components/ProfileItemList/index.tsx"),
				p = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				b = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				h = s("./node_modules/lodash/noop.js"),
				f = s.n(h),
				g = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/components/PostList/Placeholder.tsx"),
				C = s("./src/reddit/actions/postList.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/helpers/isPost.ts"),
				w = s("./src/reddit/helpers/trackers/post.ts"),
				j = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/objectSelector/index.ts")),
				S = s("./src/reddit/models/Flair/index.ts"),
				_ = s("./src/reddit/models/PostCreationForm/index.ts"),
				I = (s("./src/reddit/models/Subreddit/index.ts"), s("./src/reddit/models/Subreddit/mock.ts"), s("./src/reddit/models/Vote/index.ts"));

			function P(e) {
				return {
					adPromotedUserPostIds: [],
					adSupplementaryText: null,
					approvedAtUTC: 151234567890,
					approvedBy: "",
					author: "author",
					authorId: "t2_1234",
					authorIsBlocked: !1,
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1234",
						type: "subreddit"
					},
					contestMode: !1,
					created: 151234567890,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "asdf.com",
					events: [],
					flair: [],
					id: "t3_1234",
					ignoreReports: !1,
					modReports: [],
					numReports: 0,
					userReports: [],
					impressionId: null,
					impressionIdStr: null,
					isApproved: !0,
					isArchived: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForQASchema: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !0,
					isPinned: !1,
					isRemoved: !1,
					isReactAllowed: !1,
					reactedFrom: null,
					attributionInfo: null,
					isScoreHidden: !1,
					isSpam: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isSpoiler: !1,
					isStickied: !1,
					liveCommentsWebsocket: null,
					media: null,
					numComments: 10,
					numCrossposts: 0,
					permalink: "comments/t3_1234",
					postCategories: null,
					postId: "t3_1234",
					previewComments: [],
					removedBy: null,
					removedByCategory: null,
					score: 10,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					title: "test post, plz ignore",
					thumbnail: {
						url: "http://",
						width: null,
						height: null
					},
					upvoteRatio: .8,
					viewCount: 100,
					voteState: I.a.notVoted,
					...e
				}
			}
			const N = e => {
					var t;
					const s = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "ad";
					return P({
						id: `t3_${s}`,
						postId: `t3_${s}`,
						belongsTo: {
							id: `t5_${s}`,
							type: "profile"
						},
						callToAction: "Learn More",
						domain: "ads.reddit.com",
						domainOverride: "ads.reddit.com",
						impressionId: "an-impression-id",
						isCreatedFromAdsUi: !0,
						isSponsored: !0,
						events: [{
							url: "https://alb.reddit.com/i.gif",
							type: 1
						}],
						source: {
							displayText: "ads.reddit.com",
							url: "https://ads.reddit.com/",
							outboundUrl: "https://alb.reddit.com/cr"
						},
						thumbnail: {
							url: "https://a.thumbs.redditmedia.com/fg8HfA0eSq3OX1MByIkjERyCJPEiH6eGQqdNcOnXEt4.jpg",
							width: 140,
							height: 140
						},
						media: {
							obfuscated: null,
							content: "https://external-preview.redd.it/64IrEJJRRkfJIZbnGYpOzY0LVR06JQI-H6npRJIZ66Y.jpg?auto=webp&s=3ee64cbf5893866e2c10483686fcf879477f6e29",
							type: "image",
							width: 2500,
							height: 2500,
							resolutions: [{
								url: "https://external-preview.redd.it/64IrEJJRRkfJIZbnGYpOzY0LVR06JQI-H6npRJIZ66Y.jpg?width=108&crop=smart&auto=webp&s=74fe2f10879839b35e770add75845056b2ae4337",
								width: 108,
								height: 108
							}, {
								url: "https://external-preview.redd.it/64IrEJJRRkfJIZbnGYpOzY0LVR06JQI-H6npRJIZ66Y.jpg?width=216&crop=smart&auto=webp&s=68c16a011a27ad8b01b81ecd61631d1960ff513d",
								width: 216,
								height: 216
							}, {
								url: "https://external-preview.redd.it/64IrEJJRRkfJIZbnGYpOzY0LVR06JQI-H6npRJIZ66Y.jpg?width=320&crop=smart&auto=webp&s=a111c0780483b668e9b258c10b9959f6714c5b16",
								width: 320,
								height: 320
							}, {
								url: "https://external-preview.redd.it/64IrEJJRRkfJIZbnGYpOzY0LVR06JQI-H6npRJIZ66Y.jpg?width=640&crop=smart&auto=webp&s=bc52ce13c785e95c306a600e6c6ee2ac4a681e62",
								width: 640,
								height: 640
							}, {
								url: "https://external-preview.redd.it/64IrEJJRRkfJIZbnGYpOzY0LVR06JQI-H6npRJIZ66Y.jpg?width=960&crop=smart&auto=webp&s=26e4a516441532bb1b8967d304218c8116594f59",
								width: 960,
								height: 960
							}, {
								url: "https://external-preview.redd.it/64IrEJJRRkfJIZbnGYpOzY0LVR06JQI-H6npRJIZ66Y.jpg?width=1080&crop=smart&auto=webp&s=5c774a9b3972346e566d5980cd29c1ef569bf16d",
								width: 1080,
								height: 1080
							}]
						},
						preview: {
							url: "https://external-preview.redd.it/64IrEJJRRkfJIZbnGYpOzY0LVR06JQI-H6npRJIZ66Y.jpg?auto=webp&s=3ee64cbf5893866e2c10483686fcf879477f6e29",
							width: 2500,
							height: 2500
						},
						...e
					})
				},
				T = {
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
							type: S.f.Text,
							text: "hello world"
						}, {
							type: S.f.Spoiler,
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
							type: S.f.Text,
							text: "hello world"
						}, {
							type: S.f.Spoiler,
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
							rteMode: _.i.RICH_TEXT,
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
							type: S.f.Text,
							text: "hello world"
						}, {
							type: S.f.Spoiler,
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
							rteMode: _.i.RICH_TEXT,
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
							type: S.f.Text,
							text: "hello world"
						}, {
							type: S.f.Spoiler,
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
							rteMode: _.i.RICH_TEXT,
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
				},
				L = (P({
					authorIsBlocked: !0,
					media: {
						type: "text",
						rteMode: _.i.RICH_TEXT,
						markdownContent: "",
						content: "This is content in a post.",
						obfuscated: null
					}
				}), N({
					id: "imgad"
				}), N({
					id: "textad",
					media: {
						obfuscated: null,
						type: "rtjson",
						richtextContent: {
							document: [{
								c: [{
									e: "text",
									t: "nothing cool"
								}],
								e: "par"
							}]
						},
						mediaMetadata: null,
						rteMode: _.i.RICH_TEXT,
						markdownContent: "",
						content: ""
					}
				}), N({
					id: "videoad",
					media: {
						obfuscated: null,
						hlsUrl: "https://v.redd.it/xh8noamy26u61/HLSPlaylist.m3u8?a=1668372772%2CNmE4NjRhYTViN2ZiMjA4ZDhiYjc3MTk5ZGM2MWFjMDczZmE0YjdkYTRjMjg1NGQ2YTQxODRhZTU0ODI5M2M1Yg%3D%3D&v=1&f=sd",
						dashUrl: "https://v.redd.it/xh8noamy26u61/DASHPlaylist.mpd?a=1668372772%2CNmFlZWE0ZGEzMTUwNGRjZmIwYzZlMTg5MGIwMWQyYzNkYWIxMzlkZjI0MjM5NTI3ZWU0NDE5MjFlODU0MGMyZg%3D%3D&v=1&f=sd",
						isGif: !1,
						scrubberThumbSource: "https://v.redd.it/xh8noamy26u61/DASH_96.mp4",
						posterUrl: "https://external-preview.redd.it/Ut7hFtpA1zpYDYCHFUf8bINJYM18bHnRP2dw-TIv0PM.png?width=640&crop=smart&format=pjpg&auto=webp&s=93082a99554710c20cb08f2d262e034585e62726",
						width: 623,
						height: 1080,
						type: "video"
					},
					preview: {
						url: "https://external-preview.redd.it/Ut7hFtpA1zpYDYCHFUf8bINJYM18bHnRP2dw-TIv0PM.png?format=pjpg&auto=webp&s=5941c9ac55192ffd2aeb6e3b4880e201407456a1",
						width: 2160,
						height: 3744
					},
					thumbnail: {
						url: "https://a.thumbs.redditmedia.com/c8p4sCbAr1bLPEzgYZe80d20EV7Eqwdabx4ScFDqzr0.jpg",
						width: 140,
						height: 140
					}
				}), {
					type: "gallery",
					obfuscated: null,
					gallery: {
						items: [{
							mediaId: "4w6d6hzktrx61",
							callToAction: "Download",
							displayUrl: "www.google.com",
							adEvents: [{
								url: "https://alb.reddit.com/i.gif",
								type: 15
							}],
							outboundUrl: "https://alb.reddit.com/cr",
							id: 43313568
						}, {
							mediaId: "nzaab70ltrx61",
							displayUrl: "www.time.gov",
							adEvents: [{
								url: "https://alb.reddit.com/i.gif",
								type: 15
							}],
							caption: "no caption",
							outboundUrl: "https://alb.reddit.com/cr",
							id: 43313569
						}, {
							mediaId: "irmwg59mtrx61",
							displayUrl: "https://alb.reddit.com/cr",
							callToAction: "Apply Now",
							adEvents: [{
								url: "https://alb.reddit.com/i.gif",
								type: 15
							}],
							caption: "Something else",
							outboundUrl: "https://alb.reddit.com/cr",
							id: 43313570
						}]
					},
					crossPostParentId: null,
					crossPostRootId: null,
					numCrossposts: 0,
					isCrosspostable: !1
				}),
				R = (N({
					id: "galleryad",
					media: L
				}), N({
					id: "shoppingad",
					subcaption: "$50.00",
					media: L
				}), N({
					id: "supplementarytextad",
					adSupplementaryText: {
						document: [{
							c: [{
								e: "text",
								t: "Testing markdown with some "
							}, {
								e: "link",
								t: "medication info ",
								u: "https://samsung.com"
							}, {
								e: "text",
								t: "and multiple lines of markdown text "
							}, {
								e: "link",
								t: "and several links.",
								u: "https://google.com"
							}],
							e: "par"
						}]
					}
				}), Object(j.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.posts.models;
					return M(e, {
						listingKey: s
					}).filter(e => {
						if (Object(E.a)(e)) return !0; {
							const t = n[e];
							return t && !t.hidden
						}
					})
				})),
				M = Object(j.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.pages.profileOverview.chrono.ids[s];
					return n ? [...n] : []
				}),
				A = Object(j.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return R(e, {
						listingKey: s
					}).reduce((t, s) => {
						const n = Object(E.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = n, t
					}, {})
				}),
				F = (Object(j.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.posts.models;
					return F(e, {
						listingKey: s
					}).filter(e => {
						const t = n[e];
						return t && !t.hidden
					})
				}), Object(j.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return R(e, {
						listingKey: s
					}).map(t => Object(E.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				B = Object(j.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.posts.models,
						i = F(e, {
							listingKey: s
						}),
						o = {};
					return i.forEach(e => o[e] = n[e]), o
				}),
				U = Object(j.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.features.comments.models,
						i = R(e, {
							listingKey: s
						}),
						o = {};
					return i.forEach(e => !!Object(E.a)(e) && (o[e] = n[e])), o
				});
			var G = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/tracking.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const H = (e, t) => (e, t, s) => Object(E.a)(e) ? 120 : 47,
				V = (Object(O.v)(), {
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
					currentUser: W.l,
					layout: O.U,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.loadMore[s]
					},
					subredditsById: G.fb,
					viewportDataLoaded: D.a,
					commentsById: U,
					itemIds: R,
					itemIdToPostId: A,
					postsById: B,
					estimateItemHeight: H
				}),
				z = Object(r.c)(V);
			Object(o.b)(z, (e, t) => ({
				onBottomViewed: (t, s) => e(C.c(t, s)),
				openPost: t => {
					e(v.K(t))
				},
				trackOnPostEnteredViewport: (t, s) => {
					Object(k.a)(t) && e(v.N(t))
				},
				trackOnPostExitedViewport: (t, s, n) => {
					Object(k.a)(t) && e(v.O(t, n))
				},
				fireAdPixelsOfType: f.a
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				postClickEventFactory: (e, t) => Object(w.k)(e, t)
			}));
			var K = s("./src/reddit/featureFlags/index.ts"),
				J = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				q = s("./src/reddit/models/Profile/index.ts");
			const Q = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.pending[s]
				},
				Y = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.error[s]
				},
				Z = Object(j.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return (e.profilePrivatePage.ids[s] || []).reduce((t, s) => {
						const n = Object(E.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = n, t
					}, {})
				}),
				X = Object(O.v)(),
				$ = Object(O.v)(),
				ee = {
					apiError: Y,
					apiPending: Q,
					layout: O.U,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[s] || !e.profilePrivatePage.pageInfo[s].hasNextPage) return null;
						const n = e.profilePrivatePage.ids[s];
						return {
							token: n[n.length - 1],
							dist: J.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !Q(e, t) && !Y(e, t),
					isLoggedIn: W.R
				},
				te = Object(r.c)({
					...ee,
					currentUser: W.l,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return -1 === s.indexOf(q.b.Saved) && -1 === s.indexOf(q.b.ReceivedGildings) && -1 === s.indexOf(q.b.GivenGildings) ? [] : e.profilePrivatePage.ids[s] || []
					},
					itemIdToPostId: Z,
					estimateItemHeight: H
				}),
				se = Object(r.c)({
					...ee,
					measureScrollFPS: K.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s.indexOf(q.b.Saved) > -1 || s.indexOf(q.b.ReceivedGildings) > -1 || s.indexOf(q.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[s] || []
					},
					postListPlaceholderComponent: () => y.a
				}),
				ne = e => ({
					onBottomViewed: f.a,
					openPost: t => {
						e(v.K(t))
					},
					trackOnPostEnteredViewport: f.a,
					fireAdPixelsOfType: (t, s) => {
						e(v.y(t, s))
					}
				}),
				ie = Object(o.b)(te, ne, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(w.k)(e, t)
				})),
				oe = Object(o.b)(se, e => ({
					...ne(e),
					onFirstPostChanged: f.a,
					adBrandSafetyStatusReceived: f.a,
					trackOnPostExitedViewport: f.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(w.k)(e, t),
					postComponentForLayout: g.b
				}));
			var re = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				de = s("./src/reddit/helpers/trackers/screenview.ts"),
				ae = s("./src/reddit/layout/page/Listing/index.tsx"),
				ce = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				le = s.n(ce);
			const me = Object(r.c)({
					currentUser: W.l
				}),
				ue = Object(o.b)(me, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				pe = (e => Object(x.c)(X(ie(e))))(u.a),
				be = (e => Object(x.c)($(oe(e))))(m.a);
			class he extends i.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = q.a[e]();
					return () => i.a.createElement(a.d, {
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
					} = this.props, n = s.toLowerCase(), o = Object(re.c)(n, t);
					return e && e.displayText && e.displayText.toLowerCase() === n ? t === q.b.Saved || t === q.b.ReceivedGildings || t === q.b.GivenGildings ? i.a.createElement(pe, {
						className: le.a.mixedList,
						itemComponent: l.a,
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: n,
						listingViewed: Object(de.s)(o),
						onLoadMore: this.onLoadMore
					}) : i.a.createElement(be, {
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: n,
						listingViewed: Object(de.s)(o),
						onLoadMore: this.onLoadMore
					}) : i.a.createElement(a.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return i.a.createElement(ae.a, {
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(p.a, {
							profileName: e
						}),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(c.a, null), this.renderContent()),
						sidebar: i.a.createElement(b.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ue(he)
		},
		"./src/reddit/pages/Recap/Components/BananaPill/index.m.less": function(e, t, s) {
			e.exports = {
				bananaPill: "luTPauejzUjrGQIJmBJMt",
				transform: "T2syrzYJQrK2MbUsJ1ZIs",
				icon: "_2DvitLaA7xyv9xsNJWP3t4",
				text: "BE8_V9hkF52QnKXfBAL2e",
				altText: "_2RhoXA1ZtjfGQFhaJvg2Hu",
				bouncing: "_1bv5w7rQU4LQw-ZO3MYGBc"
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: n.F
				}) === n.Kd
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				r = s("./src/reddit/selectors/experiments/utils.ts"),
				d = s("./src/reddit/selectors/meta.ts"),
				a = s("./node_modules/reselect/es/index.js");
			const c = Object(a.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: e => Object(d.h)(e) && Object(o.f)(e),
					experimentName: n.mc
				}), r.a),
				l = Object(a.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: e => !Object(d.h)(e) && Object(o.f)(e),
					experimentName: n.lc
				}), r.a),
				m = Object(a.a)(c, l, (e, t) => e || t),
				u = Object(a.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"abc82ec0d223"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"186439ca681f"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"16fa968c24c2"}')
		},
		"./src/redditGQL/operations/ProfileHistoryPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"5088e9f7c39f"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"c50423d680aa"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"0224640a7117"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"c379fea15861"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.9ec754f0647357d686fa.js.map