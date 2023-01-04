// https://www.redditstatic.com/desktop2x/ProfilePrivate.db9f8d2908b34905f708.js
// Retrieved at 1/4/2023, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : o(t), n(e, 0, t < 0 ? 0 : t)) : []
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
				return D
			})), s.d(t, "privateListingFailed", (function() {
				return G
			})), s.d(t, "profilePrivateRequested", (function() {
				return W
			})), s.d(t, "morePending", (function() {
				return V
			})), s.d(t, "moreMixedLoaded", (function() {
				return H
			})), s.d(t, "morePostLoaded", (function() {
				return z
			})), s.d(t, "moreFailed", (function() {
				return J
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/externalAccount.ts"),
				a = s("./src/reddit/actions/pages/profileShared.ts"),
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/redditGQL/operations/ProfileDownvoted.json"),
				m = s("./src/redditGQL/operations/ProfileGivenGildings.json"),
				u = s("./src/redditGQL/operations/ProfileHidden.json"),
				p = s("./src/redditGQL/operations/ProfileHistoryPosts.json"),
				b = s("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				h = s("./src/redditGQL/operations/ProfileSaved.json"),
				f = s("./src/redditGQL/operations/ProfileUpvoted.json");
			var x = s("./src/reddit/models/Comment/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Profile/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				j = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var w = e => {
					const {
						listingType: t,
						rawData: s,
						includeIdentity: n,
						includeModerated: o
					} = e, {
						identity: r
					} = s, i = (e => {
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
					if (!r) return i;
					if (n && (i.account = Object(j.a)(r) || null, i.preferences = Object(_.a)(r.preferences, r.interactions) || null, r.redditor.profile && (i.profiles[r.redditor.profile.id] = Object(k.a)(r.redditor.profile))), o && r.redditor && r.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(k.b)(r.redditor.moderatedSubreddits);
						i.moderatedPageInfo = t, i.moderatedSubredditIds = e, i.subreddits = s
					}
					let a;
					if (t === v.b.History) a = s.postsInfoByIds;
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
						if (!e) return i;
						a = e.edges, i.pageInfo = e.pageInfo
					}
					if (!a) return i;
					for (const d of a) {
						let e;
						const s = t === v.b.History ? d : d.node;
						if (s.__typename === x.d.Comment) {
							const t = Object(y.a)(s);
							if (i.comments || (i.comments = {}), i.comments[t.id] = t, i.itemIds || (i.itemIds = []), i.itemIds.push(t.id), s.authorFlair && (i.authorFlair[t.subredditId] || (i.authorFlair[t.subredditId] = {}), i.authorFlair[t.subredditId][t.author] = Object(C.a)(s.authorFlair)[0]), e = s.postInfo, s.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(O.a)(s.postInfo);
								i.posts[e.id] = e, t && (i.posts[t.id] = t)
							}
						} else e = s, i.itemIds || (i.itemIds = []), i.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: n,
							crosspost: o
						} = e && Object(O.a)(e);
						i.posts[n.id] = n, o && (i.posts[o.id] = o), Object(g.i)(e) || Object(g.j)(e) || (e.authorFlair && (i.authorFlair[n.belongsTo.id] || (i.authorFlair[n.belongsTo.id] = {}), i.authorFlair[n.belongsTo.id][n.author] = Object(C.a)(e.authorFlair)[0]), Object(g.l)(e) ? i.profiles[e.profile.id] || (i.profiles[e.profile.id] = Object(k.a)(e.profile)) : Object(g.n)(e) && (i.subreddits[e.subreddit.id] || (i.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), i.postFlair[e.subreddit.id] || (i.postFlair[e.subreddit.id] = Object(E.a)(e.subreddit))))
					}
					return i
				},
				S = s("./src/reddit/helpers/localStorage/index.ts"),
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
					[v.b.Downvoted]: (e, t) => Object(c.a)(e, {
						...l,
						variables: t
					}),
					[v.b.Hidden]: (e, t) => Object(c.a)(e, {
						...u,
						variables: t
					}),
					[v.b.Saved]: (e, t) => Object(c.a)(e, {
						...h,
						variables: t
					}),
					[v.b.Upvoted]: (e, t) => Object(c.a)(e, {
						...f,
						variables: t
					}),
					[v.b.ReceivedGildings]: (e, t) => Object(c.a)(e, {
						...b,
						variables: t
					}),
					[v.b.GivenGildings]: (e, t) => Object(c.a)(e, {
						...m,
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
				F = e => {
					switch (e.listingType) {
						case v.b.Downvoted:
						case v.b.Hidden:
						case v.b.History:
						case v.b.Saved:
						case v.b.Upvoted:
						case v.b.ReceivedGildings:
						case v.b.GivenGildings:
							return w(e)
					}
				},
				B = Object(r.a)(T.b),
				U = Object(r.a)(T.c),
				D = Object(r.a)(T.i),
				G = Object(r.a)(T.a),
				W = e => async (t, s, r) => {
					const {
						profileName: l,
						listingType: m
					} = e.params, u = s(), b = Object(P.c)(l.toLowerCase(), m), h = u.profilePrivatePage.ids[b] && u.profilePrivatePage.ids[b].length > 0, f = !!u.profilePrivatePage.api.error[b];
					if (u.profilePrivatePage.api.pending[b] || h && !f) return;
					const {
						account: x
					} = u.user, g = !x, y = !(x && x.displayText && u.profiles.moderated.models[x.displayText.toLowerCase()] && u.profiles.moderated.models[x.displayText.toLowerCase()].length);
					let C;
					if (t(B({
							listingKey: b
						})), m === v.b.History) {
						if (!Object(N.a)(u)) {
							const {
								profileName: s
							} = e.params, r = `/user/${s}/`;
							return t(Object(n.c)(r)), void t(G({
								listingKey: b,
								error: {
									type: o.L.AUTHORIZATION_ERROR
								}
							}))
						}
						const s = {
							includeIdentity: g,
							includeModerated: y,
							recentPostIds: Object(S.N)(null == x ? void 0 : x.id).reverse()
						};
						C = await ((e, t) => Object(c.a)(e, {
							...p,
							variables: t
						}))(r.gqlContext(), s)
					} else {
						const e = {
							includeIdentity: g,
							includeModerated: y,
							first: T.h,
							after: null
						};
						C = await M[m](r.gqlContext(), e)
					}
					if (C.ok && C.body) {
						const e = F({
							rawData: A(m, C),
							listingType: m,
							includeIdentity: g,
							includeModerated: y
						});
						m === v.b.Saved || m === v.b.ReceivedGildings || m === v.b.GivenGildings ? await t(U({
							listingKey: b,
							profileName: l,
							...e
						})) : await t(D({
							listingKey: b,
							profileName: l,
							...e
						})), await Promise.all([t(Object(a.d)(l)), t(Object(i.o)(l)), t(Object(d.d)(l))])
					} else t(G({
						listingKey: b,
						error: C.error
					}))
				}, V = Object(r.a)(T.f), H = Object(r.a)(T.e), z = Object(r.a)(T.g), J = Object(r.a)(T.d), K = e => async (t, s, n) => {
					const o = s(),
						r = o.user.account && o.user.account.displayText && o.user.account.displayText.toLowerCase();
					if (!r) return;
					const i = Object(P.c)(r, e);
					if (!o.profilePrivatePage.ids[i] || !o.profilePrivatePage.ids[i].length || !o.profilePrivatePage.pageInfo || !o.profilePrivatePage.pageInfo[i].hasNextPage || o.profilePrivatePage.api.error[i] || o.profilePrivatePage.api.pending[i]) return;
					const a = {
						includeIdentity: !1,
						includeModerated: !1,
						after: o.profilePrivatePage.pageInfo[i].endCursor,
						first: T.h
					};
					t(V({
						listingKey: i
					}));
					const d = await M[e](n.gqlContext(), a);
					if (d.ok && d.body) {
						const s = F({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: d.body.data
						});
						e === v.b.Saved || e === v.b.ReceivedGildings || e === v.b.GivenGildings ? await t(H({
							listingKey: i,
							profileName: r,
							...s
						})) : await t(z({
							listingKey: i,
							profileName: r,
							...s
						}))
					} else t(J({
						listingKey: i,
						error: d.error
					}))
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return S
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
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = s("./src/redditGQL/operations/MutedSubreddits.json"),
				c = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const m = (e, t) => Object(i.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(i.a)(e, {
					...a,
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
			const x = e => Object(r.f)({
					id: e,
					kind: p.b.Error,
					duration: r.a,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				g = (e, t) => Object(r.f)({
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
				v = (e, t) => Object(r.f)({
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
			const C = Object(o.a)(b.i),
				E = Object(o.a)(b.h),
				O = Object(o.a)(b.G),
				_ = (Object(o.a)(b.j), Object(o.a)(b.F), Object(o.a)(b.g)),
				k = Object(o.a)(b.f),
				I = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, d;
						const c = await m(i(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(g(s, j({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				j = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, d;
						const c = await u(i(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(v(s, I({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, d;
						const c = await m(i(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(g(s, S({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, d;
						const c = await u(i(), t);
						if (c.ok && c.body && (null === (d = null === (a = c.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(v(s, w({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				P = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, o, a) => {
						let {
							gqlContext: d
						} = a;
						var l, m;
						const u = Object(h.a)(s),
							b = await ((e, t, s) => Object(i.a)(e, {
								...c,
								variables: {
									input: {
										...s,
										subredditId: t
									}
								}
							}))(d(), t, u);
						b.ok && b.body && (null === (m = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === m ? void 0 : m.ok) ? (e(O({
							subredditId: t,
							notificationLevel: s
						})), e(Object(r.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(s)
						}))) : e(Object(r.f)({
							kind: p.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				N = () => async (e, t, s) => {
					let {
						gqlContext: o
					} = s;
					const a = await (e => Object(i.a)(e, d))(o());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(C({
							nodes: s
						}))
					} else e(E()), e(Object(r.f)({
						duration: r.a,
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
					return async (e, n, o) => {
						let {
							gqlContext: r
						} = o;
						var i, a;
						const d = await u(r(), t);
						if (d.ok && d.body && (null === (a = null === (i = d.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(_(t)), e(v(s));
						else {
							e(x(`error-unmuting-${t}`))
						}
					}
				}, L = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: i
						} = o;
						var a, d;
						const c = s(),
							l = Object(f.t)(c).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								s = `error-muting-duplicate-${t}`;
							return e(Object(r.f)({
								id: s,
								kind: p.b.Error,
								duration: r.a,
								text: n.fbt._("Sorry, r/{subreddit name} is already muted.", [n.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const u = await Object(y.a)(i(), t, !0),
							{
								data: b
							} = u.body,
							h = b && b.subreddit;
						if (!u.ok || null === h) {
							return e(((e, t) => Object(r.f)({
								id: e,
								kind: p.b.Error,
								duration: r.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const v = h.id,
							C = await m(i(), v);
						if (C.ok && C.body && (null === (d = null === (a = C.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(k([h])), e(g(h.name));
						else {
							e(x(`error-muting-${v}`))
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
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(o.a)(a.z),
				p = Object(o.a)(a.y),
				b = Object(o.a)(a.x),
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
			const x = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: o,
					undoCallback: a
				} = e;
				return async (e, l, x) => {
					let {
						gqlContext: g
					} = x;
					var v, y, C;
					e(p());
					const E = h(s),
						O = await Object(c.b)(g(), t, E);
					if ((null === (y = null === (v = O.error) || void 0 === v ? void 0 : v.fields) || void 0 === y ? void 0 : y.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(O.body) && (null === (C = O.body.data.updateSubredditNotificationSettings.errors) || void 0 === C ? void 0 : C.length)) return e(b()), e(Object(d.f)({
						kind: m.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					O.ok && (e(Object(r.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), o && o(), e(a ? Object(d.f)(Object(d.e)(f(s), m.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, a))) : Object(d.f)(Object(d.e)(f(s), m.b.SuccessCommunityGreen))))
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/components/BackToTop/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				if (e) {
					const e = document.getElementById(i.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: n
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, c.a.container),
					style: n
				}, o.a.createElement(a.a, {
					className: c.a.button,
					onClick: () => m(s)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				h = s("./node_modules/react-redux/es/index.js"),
				f = s("./src/reddit/models/Audio/index.ts"),
				x = s("./src/reddit/selectors/experiments/econ/index.ts"),
				g = s("./src/reddit/components/Econ/Audio/index.m.less"),
				v = s.n(g),
				y = s("./src/config.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				O = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = () => Math.floor(10 * Math.random()) + 1;
			var I = e => {
					let {
						postId: t
					} = e;
					const s = Object(h.e)(C.fb),
						[r, a] = Object(n.useState)(!1),
						[d, c] = Object(n.useState)(k());
					return Object(n.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							a(!0), e = setTimeout(() => a(!1), 3500), c(k())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), o.a.createElement("div", {
						className: v.a.classicSpeaker
					}, r && o.a.createElement(O.a, {
						ringId: `${t}`,
						className: Object(i.a)(v.a.speakerRings, {
							[v.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), o.a.createElement("img", {
						key: `audioPostAvatar--${d}`,
						className: v.a.snoovatar,
						src: `${y.a.assetPath}/img/talk/avatars/${d}.png`,
						alt: _._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !r && o.a.createElement("div", {
						className: v.a.muteContainer
					}, o.a.createElement(E.a, {
						className: v.a.muteIcon
					})))
				},
				j = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var S = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: n,
						author: r
					} = t;
					return Object(h.e)(x.o) && s.roomStatus === f.b.NotStarted ? o.a.createElement(j.a, {
						postId: n,
						author: r,
						roomId: s.roomId,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? o.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: v.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, o.a.createElement(I, {
						postId: n
					})) : o.a.createElement("div", {
						className: v.a.endedClassicContainer
					}, o.a.createElement(E.a, {
						className: v.a.muteIcon
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
				D = s("./src/reddit/components/PostContainer/index.tsx"),
				G = s("./src/reddit/components/PostMeta/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				H = s("./src/reddit/components/PostTitle/index.tsx"),
				z = s("./src/reddit/components/PostTopMeta/index.tsx"),
				J = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				K = s("./src/reddit/models/Media/index.ts"),
				q = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Q = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Y = s("./src/reddit/constants/postLayout.ts"),
				Z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				X = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/search/renderMedia.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				oe = s.n(ne),
				re = s("./src/reddit/models/Post/index.ts"),
				ie = s("./src/redditGQL/types.ts"),
				ae = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				de = s("./src/reddit/components/ClassicPost/index.m.less"),
				ce = s.n(de);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const me = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: h,
					isExpanded: x,
					inSubredditOrProfile: g,
					eventFactory: v,
					flairStyleTemplate: y,
					formatTitle: C,
					hostPostData: E,
					isCheckboxSelected: O,
					isCurrentUserProfilePost: _,
					isFrontpage: k,
					isGalleryTileLayoutDefault: I,
					isLoggedIn: j,
					isOverlay: w,
					imageGalleryCurrentItem: Q,
					moderatorPermissions: ne,
					modModeEnabled: de,
					onClickPost: me,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					onSizeChanged: be,
					poll: he,
					post: fe,
					postId: xe,
					redditStyle: ge,
					scrollerItemRef: ve,
					showBulkActionCheckbox: ye,
					showEditFlair: Ce,
					showMedia: Ee,
					shouldShowInsightsButton: Oe,
					subredditOrProfile: _e,
					toggleCheckbox: ke,
					userIsOp: Ie,
					shouldShowGalleryTileOption: je,
					showPromotedCTA: we,
					showCTAExperimentDesign: Se
				} = e, Pe = Object(l.a)(), Ne = Object(c.a)(x);
				Object(n.useEffect)(() => {
					be && Ne !== x && be(fe.id)
				}, [x, be, fe.id, Ne]);
				const Te = ge ? void 0 : y,
					Le = s || void 0,
					Re = Object($.a)(ne),
					Me = Object(Z.a)(ne),
					Ae = Object(X.a)(ne),
					Fe = de && $.a,
					Be = Object(M.a)(fe),
					Ue = Object(F.c)(fe),
					De = !!fe.media && fe.media.type === K.o.RTJSON,
					Ge = Ie && De,
					We = g && !Ee,
					Ve = !!fe.recommendationContext,
					He = {
						flairStyleTemplate: Te,
						post: fe,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: _,
						isOverlay: w,
						shouldShowSubscribeButton: !(k && j) || Ve && j,
						subredditOrProfile: _e
					},
					ze = Object(r.t)(fe, Q),
					{
						source: Je
					} = ze,
					[Ke, qe] = Object(n.useState)(!1),
					Qe = Object(n.useCallback)(() => {
						qe(!Ke), Pe(Object(se.d)(xe))
					}, [Ke, xe, Pe]);
				let Ye = o.a.createElement(q.a, {
					className: ce.a.classicThumbnail,
					crosspost: Le && fe,
					isMeta: fe.isMeta,
					post: Le || fe,
					redditStyle: ge,
					templatePlaceholderImage: Te && Te.postPlaceholderImage
				});
				Object(f.c)(fe) && (Ye = o.a.createElement(S, {
					post: fe
				}));
				const Ze = Object(re.r)(fe);
				return o.a.createElement(D.b, {
					className: Object(i.a)(oe.a.classicPostStyles, ce.a.postContainer, Object(te.a)(e), {
						[ce.a.shouldShowOverflow]: Oe
					}, t),
					isOverlay: w,
					style: {
						...Object(te.d)(e),
						...Object(te.b)(Te)
					},
					post: fe,
					onClick: me,
					eventFactory: v
				}, o.a.createElement(V.a, {
					model: fe,
					handleVote: h,
					showBulkActionCheckbox: ye,
					isCheckboxSelected: O,
					toggleCheckbox: ke,
					flairStyleTemplate: Te,
					redditStyle: ge,
					postId: xe
				}), o.a.createElement(U.a, {
					className: Oe ? ce.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Te
				}, o.a.createElement(P.a, {
					className: ce.a.eventMeta,
					post: fe
				}), o.a.createElement("div", {
					className: ce.a.mainBody
				}, o.a.createElement("div", {
					className: We ? ce.a.expandoContainer : ce.a.thumbnailContainer
				}, !We && Ye, o.a.createElement(N.a, {
					crosspost: Le,
					className: ce.a.rightExpando,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				})), o.a.createElement("div", {
					className: Object(i.a)(ce.a.content, {
						[ce.a.showBulkActionCheckbox]: ye
					}),
					"data-click-id": "body"
				}, Ze && o.a.createElement(B.a, {
					content: fe.recommendationContext.content,
					layout: Y.g.Classic,
					post: fe
				}), o.a.createElement(H.c, {
					className: he ? ce.a.titleWithPoll : void 0,
					format: C,
					poll: he,
					post: fe,
					redditStyle: ge,
					size: H.b.Medium,
					titleColor: Te && Te.postTitleColor,
					isOverlay: w
				}, fe.source && !Le && !fe.isSurveyAd && o.a.createElement(J.a, {
					href: fe.source.url,
					isSponsored: fe.isSponsored,
					postId: fe.id,
					source: fe.source
				}, Object(d.a)(fe))), o.a.createElement(G.a, le({
					key: "PostMeta"
				}, He)), de && Re && Be && o.a.createElement(R.a, {
					thing: fe
				}), de && Re && Ue && o.a.createElement(A.a, {
					onIgnoreReports: ue,
					reportable: fe
				}), we && Je && Je.url && !fe.isSurveyAd && o.a.createElement(m.a, {
					ctaExperimentDesign: Se && "classic",
					className: Object(i.a)(ce.a.adLinkWrapper, {
						[ce.a.ctaExperiment]: Se
					})
				}, o.a.createElement(u.a, {
					post: fe,
					adLinkContent: ze,
					ctaExperimentDesign: Se && "classic"
				})), fe.discussionType === ie.o.Chat && o.a.createElement(ae.a, {
					postId: fe.id
				}), o.a.createElement("div", {
					className: ce.a.flatlistContainer
				}, o.a.createElement(N.a, {
					className: ce.a.leftExpando,
					crosspost: Le,
					isExpanded: !!x,
					post: fe,
					useMediaIcons: !1
				}), o.a.createElement(p.a, {
					className: ce.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Te,
					model: fe,
					onVoteClick: h
				}), o.a.createElement(T.a, {
					className: ce.a.flatlistSeparator
				}), !fe.isSurveyAd && o.a.createElement(T.c, {
					className: ce.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Me,
					hasModPostPerms: Re,
					hasModFullPerms: Ae,
					hostPostData: E,
					isOverlay: !!w,
					modModeEnabled: de,
					onClickInsightsButton: Qe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: pe,
					post: fe,
					shouldShowInsightsButton: Oe,
					showEditPost: Ge,
					showEditFlair: Ce,
					tooltipType: w ? z.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(W.b)({
						editPost: !Fe,
						hide: !Fe,
						report: !Fe,
						mute: !Fe,
						save: !Fe
					})
				})), o.a.createElement(L.d, null))), Object(ee.a)(fe, ce.a, ve, x, je, I), _e && Ke && o.a.createElement(b.a, {
					className: ce.a.creatorStatsContainer,
					post: fe,
					subreddit: _e,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(Q.a)(me)
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const c = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(c);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: n,
						onClick: r,
						style: i
					} = this.props;
					return o.a.createElement("div", {
						className: Object(a.a)(s, `Comment ${n.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(d.a)(m))
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				u = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = .75, x = 10 * d.N;
			class g extends o.a.Component {
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
					}, x), this.onShowMore = e => {
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
					return s ? o.a.createElement("div", null, e()) : o.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, o.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, o.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), o.a.createElement("a", {
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
			var v = g,
				y = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./node_modules/lodash/noop.js"),
				E = s.n(C),
				O = s("./src/lib/makeCommentsPageKey/index.ts"),
				_ = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				j = s("./src/reddit/actions/comment/moderation.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				S = s("./src/reddit/actions/modal.ts"),
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
				D = s("./src/reddit/contexts/InsideOverlay.tsx"),
				G = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/overlay/index.ts"),
				z = s("./src/reddit/helpers/trackers/lightbox.ts"),
				J = s("./src/reddit/models/PostDraft/index.ts"),
				K = s("./src/reddit/models/Comment/index.ts"),
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
				oe = s("./src/reddit/components/ShareMenu/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ae = s("./src/reddit/helpers/trackers/modTools.ts"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				le = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				me = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				pe = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				he = s("./src/lib/lessComponent.tsx"),
				fe = s("./src/reddit/icons/fonts/index.tsx"),
				xe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const ge = he.a.wrapped(te.b, "OverflowMenu", pe.a),
				ve = he.a.wrapped(L.a, "ModToolsFlatlist", pe.a),
				ye = he.a.wrapped(F.a, "ModActionsMenu", pe.a),
				Ce = he.a.wrapped(ie.b, "DropdownRow", pe.a),
				Ee = he.a.wrapped(de.a, "Flatlist", pe.a),
				Oe = he.a.button("Button", pe.a),
				_e = Object(G.v)(),
				ke = e => `Comment-${e}--Modal--DeleteComment`,
				Ie = e => `Distinguish--Dropdown--${e}`,
				je = (e, t) => `${e}--${t}-overflow-menu`,
				we = e => `View--Reports--${e}`,
				Se = Object(i.c)({
					activeTooltipId: $.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.a)(e) === ke(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.E)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: ee.S,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.n)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: ee.m,
					modModeEnabled: G.W,
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
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === s.id
					},
					subreddit: G.s,
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
			class Pe extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ae.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(W.d)(W.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ae.c)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ae.c)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ae.c)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ae.c)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ae.d)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(z.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ae.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ae.g)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: se.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(se.a, {
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
						showModTools: r
					} = this.props, i = Object(V.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return n ? o.a.createElement(ve, {
						comment: e,
						isCommentAuthor: a
					}) : o.a.createElement(ye, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(le.a, null), o.a.createElement(T.a, {
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
					if (s && Object(B.c)(e) && !t) return o.a.createElement(R.a, {
						text: `${n}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === we(e.id),
						id: we(e.id)
					}, o.a.createElement(U.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: we(e.id)
					}), e.ignoreReports ? o.a.createElement(ce.a, null) : o.a.createElement(me.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(V.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !n)) return o.a.createElement(R.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ie(e.id)
					}, o.a.createElement(xe.a, null), o.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Ie(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: n,
						currentUser: r,
						deleteComment: i,
						isLoggedIn: a,
						isPendingDeletion: d,
						moderatorPermissions: c,
						postIsLocked: l,
						subreddit: m,
						toggleDeleteCommentModal: u
					} = this.props, p = Object(V.a)(c), b = !!r && r.displayText === e.author, h = (!l && !e.isLocked || p && a) && !Object(K.g)(e), f = r && e.isGildable && !Object(K.g)(e);
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement(Ee, null, h && o.a.createElement(Oe, {
						onClick: this.handleReply,
						disabled: d
					}, y.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), f && o.a.createElement(Oe, {
						onClick: this.handleGild
					}, y.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement(oe.a, {
						dropdownId: `${n}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, o.a.createElement(Oe, {
						onClick: this.sendCommentEventWithNameShare
					}, y.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(ge, {
						dropdownId: je(n, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !d && o.a.createElement(Ce, {
						displayText: y.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(fe.a, {
						name: be.a.report
					})), o.a.createElement(Ce, {
						displayText: e.isSaved ? y.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : y.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(fe.a, {
						name: be.a.saved
					}) : o.a.createElement(fe.a, {
						name: be.a.save
					})), b && o.a.createElement(Ce, {
						displayText: y.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(fe.a, {
						name: be.a.edit
					})), b && o.a.createElement(Ce, {
						displayText: y.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(fe.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && o.a.createElement(M.a, {
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
						onConfirm: i,
						toggleModal: u,
						trackClick: E.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Ne = _e(Object(r.b)(Se, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(I.i)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(j.b)(s.id, t, n)),
						onIgnoreReports: () => e(Object(j.g)(s.id)),
						onGildClick: t => e(Object(w.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(P.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(N.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(N.h)({
							tooltipId: we(s.id)
						})),
						onToggleSave: () => e(Object(k.o)(s.id)),
						handleDelete: () => {
							e(Object(S.i)(ke(s.id))), e(Object(N.h)({
								tooltipId: je(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(O.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(_.a)(J.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(H.a)(t)), e(Object(I.g)(o))
						},
						handleReply: t => {
							const n = Object(O.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(H.a)(t)), e(Object(I.h)(o))
						},
						toggleDeleteCommentModal: () => e(Object(S.i)(ke(s.id)))
					}
				})(Object(re.c)(Object(D.b)(Pe)))),
				Te = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Le = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Me = s("./src/reddit/selectors/commentSelector.ts"),
				Ae = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Fe = s.n(Ae);
			const Be = he.a.wrapped(Te.a, "TopMeta", Fe.a),
				Ue = he.a.div("ProfileCommentWrapper", Fe.a),
				De = he.a.div("CommentBody", Fe.a),
				Ge = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(Me.c)(e, t),
					flair: Q.e
				})),
				We = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ge(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: r,
					showFlatlist: i,
					showModTools: c
				} = e, l = s => o.a.createElement(Le.b, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: We(e),
					mediaProps: {
						alignLeft: !0,
						renderSmallMedia: !0
					}
				});
				return o.a.createElement(Ue, {
					className: Object(a.a)({
						[Fe.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(Be, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(De, null, r ? l() : o.a.createElement(v, {
					height: d.Zb,
					isExpanded: r
				}, l)), !t.isDeleted && i && o.a.createElement(Ne, {
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
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return k
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(y),
				E = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 8,
				k = 1,
				I = E.a.div("Container", C.a),
				j = E.a.div("PostMetaWrapper", C.a),
				w = E.a.wrapped(p.c, "PostTitle", C.a),
				S = E.a.div("FlatList", C.a),
				P = E.a.div("FlatItem", C.a),
				N = E.a.span("FlatListDotSpacer", C.a),
				T = E.a.wrapped(I, "LinkContainer", C.a),
				L = E.a.div("Content", C.a),
				R = E.a.div("ThumbnailContainer", C.a),
				M = Object(d.c)({
					isCurrentUserProfilePost: g.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.Sb.TOPIC),
					shouldOpenPostInNewTab: v.lb
				}),
				A = Object(i.b)(M);
			t.c = Object(x.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: i,
					subredditOrProfile: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					c = t;
				return i && !i.media ? r.a.createElement(T, {
					className: c
				}, r.a.createElement(L, null, r.a.createElement(j, null, r.a.createElement(u.a, d)), F(i), i.source && r.a.createElement(b.a, {
					post: i
				}), U(e)), G(e)) : r.a.createElement(I, {
					className: c
				}, r.a.createElement(j, null, r.a.createElement(u.a, d)), F(i), B(e), U(e))
			}));
			const F = e => r.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, O({}, n, {
						className: C.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				U = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(S, null, r.a.createElement(P, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(N, null), r.a.createElement(P, null, D(e)))
				},
				D = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				G = e => r.a.createElement(R, null, r.a.createElement(h.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, o.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), o.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, o.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#FF538C"
				}), o.a.createElement("stop", {
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				a = s.n(i),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: n,
					isAnimated: i = !1
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(a.a.ringsContainer, t, i ? a.a.animated : "")
				}, o.a.createElement(d.a, {
					ringId: n,
					className: Object(r.a)(a.a.innerRing, `${s}Inner`)
				}), o.a.createElement(c.a, {
					ringId: n,
					className: Object(r.a)(a.a.middleRing, `${s}Middle`)
				}), o.a.createElement(l.a, {
					ringId: n,
					className: Object(r.a)(a.a.outerRing, `${s}Outer`)
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				c = s("./src/reddit/helpers/trackers/talkCreation.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				p = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				b = s.n(p),
				h = s("./src/config.ts"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/hooks/useGqlContext.ts");
			var y = e => o.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				C = s("./src/reddit/endpoints/talk/index.ts"),
				E = s("./src/reddit/actions/toaster.ts"),
				O = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/redditGQL/types.ts");
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = () => o.a.createElement("span", {
				className: b.a.MicrophoneIcon
			}, o.a.createElement(y, null));
			var j = e => {
				let {
					roomId: t
				} = e;
				const s = Object(r.e)(m.fb),
					[a, d] = Object(n.useState)(!1),
					l = Object(r.d)(),
					u = Object(f.b)(),
					p = Object(v.a)();
				return o.a.createElement(x.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: a ? g.a : I,
					iconClassName: a ? b.a.loadingIcon : "",
					className: Object(i.a)(b.a.StartTalkButton, {
						[b.a.isNightMode]: s
					}),
					priority: x.c.Secondary,
					size: x.d.M,
					iconPosition: x.h.L,
					disabled: a,
					text: o.a.createElement("span", {
						className: b.a.StartTalkButtonText
					}, k._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						u(Object(c.a)()), d(!0);
						const e = await Object(C.l)(p(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return l(Object(E.f)({
							kind: O.b.Error,
							text: C.a[_.l.ServiceError]
						})), void d(!1);
						const s = Object(C.h)(e.body);
						if (null == s ? void 0 : s.errorState) return l(Object(E.f)({
							kind: O.b.Error,
							text: C.a[s.errorState.code] || C.a[_.l.ServiceError]
						})), void d(!1);
						(null == s ? void 0 : s.okState) && (window.location.href = `${h.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					roomId: p,
					isClassicView: h = !1
				} = e;
				const f = Object(r.d)(),
					x = Object(l.a)(),
					g = Object(r.e)(m.H),
					v = Object(r.e)(m.fb),
					y = Object(r.e)(e => Object(m.Fb)(e, {
						postId: s
					})),
					C = Object(r.e)(e => Object(m.Cb)(e, {
						userName: t
					}));
				Object(n.useEffect)(() => {
					s && x && x(Object(c.f)(s))
				}, [x, s]), Object(n.useEffect)(() => {
					C || f(Object(a.d)(t))
				}, [f, t, s, C]);
				const E = () => o.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(i.a)(b.a.hostAvatar, {
						[b.a.classicView]: h
					})
				}, o.a.createElement("div", {
					className: b.a.snoovatar
				}, o.a.createElement(d.a, {
					userName: t,
					isNSFW: !g,
					className: b.a.isImage
				})), o.a.createElement(u.a, {
					ringId: `${s}`,
					className: Object(i.a)(b.a.hostRings, {
						[b.a.nightMode]: v
					}),
					ringClassName: "hostRing"
				}));
				return h ? o.a.createElement(E, null) : o.a.createElement("div", {
					className: b.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, o.a.createElement("div", {
					className: b.a.upcomingTalkContainer
				}, o.a.createElement(E, null), o.a.createElement("div", {
					className: b.a.upcomingTalkInfo
				}, o.a.createElement("div", {
					className: b.a.upcomingTalkLabel
				}, w._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), o.a.createElement("div", {
					className: b.a.upcomingTalkHost
				}, "u/", t), y && p && o.a.createElement(j, {
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/PostList/Placeholder.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			var u = e => {
				let {
					children: t,
					className: s
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(m.a.Wrapper, s)
				}, r.a.createElement(d.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: c.g.Classic
				}), r.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = i.oc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, o === i.oc.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = i.oc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, o === i.oc.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", `u/${s}`)], {
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
					return r.a.createElement(u, {
						className: t
					}, s)
				},
				f = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				x = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				g = s.n(x);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = () => r.a.createElement("div", {
				className: g.a.container
			}, r.a.createElement(f.a, {
				className: g.a.hideIcon
			}), r.a.createElement("h3", {
				className: g.a.title
			}, v._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: g.a.subtitle
			}, v._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				g = s("./src/telemetry/models/Outbound.ts"),
				v = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				y = s("./src/reddit/components/ExpandoButton/index.m.less"),
				C = s.n(y);
			const E = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(u.b)(t.permalink), t.id))
				})),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(d.a)(C.a.icon, C.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = E(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: u,
					post: h,
					toggle: y,
					useMediaIcons: E
				} = e, _ = s || h, k = Object(i.e)(x.b), I = Object(i.e)(x.c), j = t => {
					(k || I) && (t.preventDefault(), e.showModalOnPostLinkClick(_))
				}, w = _.media, S = Object(f.q)(h), P = o && !!s;
				return w && !S && !(("rtjson" === w.type || "text" === w.type || "liveaudio" === w.type) && !Object(p.a)(_)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": v.a.MEDIA,
					onClick: y
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: C.a.icon
				}) : E ? r.a.createElement(r.a.Fragment, null, O(_.media && _.media.type, P, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(C.a.icon, C.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: C.a.icon
				})) : _.source && _.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: _.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? g.SourceElement.PostImage : g.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(_.permalink),
					rel: "nofollow",
					onClick: j
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: C.a.icon
				}))
			})
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.v)(),
				f = Object(i.c)({
					layout: m.U
				}),
				x = Object(r.b)(f);
			class g extends o.a.Component {
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * d.l + d.p + d.q,
						t = l.a - e,
						s = d.g - t,
						n = l.a + s + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== c.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${n}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${d.g+d.p+d.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.q}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.g+d.p+d.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: p.a.Container
					}, o.a.createElement("div", {
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
			t.a = h(x(b.a.wrapped(g, "Component", p.a)))
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				d = s.n(a);
			const c = e => {
				let {
					userCount: t
				} = e;
				return i.a.createElement("span", {
					className: d.a.liveChatActiveUsers
				}, t > 1 ? o.fbt._("{userCount} here now", [o.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : o.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const u = () => i.a.createElement("span", {
				className: m.a.LiveLabel
			}, o.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const h = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, i.a.createElement(u, null), i.a.createElement(c, {
					userCount: t
				}))
			};
			var f = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/selectors/chat.ts"),
				g = s("./src/reddit/selectors/experiments/chat.ts");
			const v = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(f.e)(e => Object(x.a)(e, t));
				return Object(f.e)(g.e) ? i.a.createElement(h, {
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : o.a.createElement(a.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
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
				o = s.n(n),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/communityAwards.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				y = s.n(v);
			const C = Object(i.b)(() => Object(a.c)({
				comment: f.c,
				isAwarded: (e, t) => {
					const s = Object(f.c)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(x.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: g.fb
			}), e => ({
				openPost: t => e(Object(m.K)(t))
			}));
			var E = Object(l.a)(C(e => {
					const {
						comment: t,
						commentId: s,
						first: n,
						isAwarded: r,
						isNightmodeOn: i,
						last: a,
						openPost: d,
						showModTools: l
					} = e;
					if (!t) return null;
					return o.a.createElement(u.a, {
						comment: t,
						onClick: (e, t) => {
							d({
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
					}, o.a.createElement("div", {
						className: Object(c.a)(y.a.commentOuterWrapper, {
							[y.a.isLast]: a,
							[y.a.isAwarded]: r,
							[y.a.isNightmodeOn]: i
						})
					}, o.a.createElement("div", {
						className: Object(c.a)(y.a.commentWrapper, {
							[y.a.isFirst]: n
						})
					}, o.a.createElement("div", {
						className: y.a.commentSeparator
					}), t.parentId && o.a.createElement("div", {
						className: y.a.commentSeparator
					}), o.a.createElement("div", {
						className: y.a.commentContentWrapper
					}, o.a.createElement(p.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				O = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				j = s.n(I),
				w = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(_.v)({
					currentProfileName: _.j,
					isCommentsPage: _.y,
					isCommentPermalink: _.x,
					isProfilePostListing: _.N,
					pageLayer: e => e
				}),
				N = w.a.wrapped(O.a, "OverviewCommentPost", j.a),
				T = w.a.wrapped(r.default, "ClassicPost", j.a);
			t.a = P(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: n,
					allowModToolsUnderComments: r,
					height: i,
					width: a,
					...d
				} = e;
				return Object(k.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(N, S({}, d, {
					availableWidth: a,
					commentId: t
				})), o.a.createElement(E, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				})) : o.a.createElement(E, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				}) : o.a.createElement(T, S({}, d, {
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				g = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				v = s.n(g),
				y = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				C = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				O = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				_ = s.n(O);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = c.a.wrapped(f.default, "InternalLink", _.a), j = c.a.div("Wrapper", _.a), w = c.a.div("Row", _.a), S = c.a.wrapped(y.a, "CommentIcon", _.a), P = c.a.div("TitleContainer", _.a), N = c.a.div("PostTitleContainer", _.a), T = c.a.wrapped(u.c, "PostTitle", _.a), L = c.a.wrapped(p.g, "PostTopMeta", _.a), R = c.a.wrapped(p.a, "MetaSeparator", _.a), M = Object(r.b)(() => Object(i.c)({
				comment: C.c,
				isBlockingInterstitialEnabled: E.b,
				isBlockingInterstitialV2Enabled: E.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(l.bb)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(R, null), o.a.createElement(L, {
					metaSeparatorClassName: _.a.postTopMetaMetaSeparator,
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
					isBlockingInterstitialV2Enabled: r,
					showModalOnAuthorLinkClick: i
				} = e;
				if (!t) return null;
				const a = s || t.author,
					d = `/user/${a}/`;
				return o.a.createElement(I, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(n || r) && (e.preventDefault(), i(d))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(h.b)(M(Object(b.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(m.b, {
					className: Object(a.a)(v.a.compactPostStyles, _.a.overviewCommentPost, {
						[_.a.banned]: !!e.post.bannedBy,
						[_.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(j, {
					style: {
						background: Object(x.e)(e)
					}
				}, o.a.createElement(w, null, o.a.createElement(S, null), o.a.createElement(P, null, k._("{postAuthor} commented on {postTitle} {postMeta}", [k._param("postAuthor", F({
					...e
				})), k._param("postTitle", o.a.createElement(N, null, o.a.createElement(T, {
					outboundLinkClassName: _.a.postTitleOutboundLink,
					post: r,
					size: u.b.Small,
					titleClassName: _.a.postTitleTitle
				}))), k._param("postMeta", A(e))], {
					hk: "d6l8e"
				})))))
			}))))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return se
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx"),
				a = s("./src/reddit/models/Post/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts"),
				p = s("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(u.c)(e, {
				experimentEligibilitySelector: u.a,
				experimentName: m.wc
			}), e => e === m.Od);
			var h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				E = s.n(C);
			const O = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(d.e)(e => Object(v.G)(e, {
						postId: t
					})),
					r = Object(d.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(y.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return r ? o.a.createElement(x.a, {
					className: Object(f.a)(E.a.link, s),
					to: r.url
				}, h.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(g.b, {
					className: E.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: E.a.subredditName
				}, r.displayText)) : null
			};
			var _ = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/connectors/PostViewable/index.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/hooks/useClickSourceData.ts"),
				P = s("./src/reddit/hooks/useIsOverlay.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				R = s.n(L);
			const M = e => {
				let {
					post: t
				} = e;
				const s = `${Object(T.b)(t.score)} ${h.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(T.b)(t.numComments)} ${h.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: R.a.postInformation
				}, o.a.createElement("h5", {
					className: R.a.title
				}, t.title), o.a.createElement("div", {
					className: R.a.interactions
				}, o.a.createElement("p", null, s), o.a.createElement("p", null, n)))
			};
			var A = s("./src/lib/isUrl/index.ts"),
				F = s("./src/reddit/actions/profile/index.ts"),
				B = s("./src/reddit/components/Thumbnail/index.tsx"),
				U = s("./src/reddit/components/UserIcon/index.tsx"),
				D = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				G = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				W = s("./src/reddit/selectors/profile.ts"),
				V = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				H = s.n(V);
			const z = e => {
				let {
					post: t
				} = e;
				var s, r, i, a;
				const c = Object(d.d)(),
					l = Object(d.e)(Object(W.l)(t.author)),
					m = Object(n.useMemo)(() => Object(B.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(A.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || c(Object(F.d)(t.author))
				}, [c, t.author, u]);
				const p = !u && Object(G.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(D.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: H.a.media
				}, u ? o.a.createElement(B.b, {
					post: t,
					url: m,
					className: H.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: H.a.mediaThumbnailContainer
				}) : null, !u && (null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url) && o.a.createElement("div", {
					className: H.a.userIconContainer
				}, o.a.createElement(U.a, {
					className: Object(f.a)({
						[H.a.snoovatarUserIcon]: p,
						[H.a.defaultUserIcon]: b
					}, H.a.userIcon),
					iconUrl: null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url,
					userName: l.name,
					wrapperClassName: H.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var J = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				K = s.n(J);
			const q = Object(k.a)(null);
			var Q = Object(j.b)(q(e => {
					let {
						post: t
					} = e;
					const s = Object(N.a)(),
						n = Object(P.a)(),
						r = Object(S.a)(),
						i = Object(I.x)(s) && !n;
					return o.a.createElement(x.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: i ? Object(w.b)(t.permalink) : Object(_.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: K.a.container
					}, o.a.createElement(M, {
						post: t
					}), o.a.createElement(z, {
						post: t
					})))
				})),
				Y = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				Z = s.n(Y);
			const X = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => o.a.createElement(Q, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: Z.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(d.d)();
				if (!Object(d.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(c.y)(t, l.a.Click))
				}, o.a.createElement(X, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(O, {
					postId: n,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(a.B)(t) && Object(a.A)(t) ? o.a.createElement(te, {
					post: t
				}) : o.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/hooks/useClickSourceData.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/components/PostMeta/index.m.less"),
				O = s.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: E,
					isOverlay: _,
					isTopicPage: k,
					post: I,
					shouldShowSubscribeButton: j,
					subredditOrProfile: w,
					tooltipType: S
				} = e, P = !!k, N = Object(y.a)(), T = Object(r.e)(e => !!w && Object(i.i)(e, w.id));
				return o.a.createElement("div", {
					className: O.a.metaContainer
				}, !n && !I.isSponsored && w && o.a.createElement(c.a, {
					postId: I.id,
					subredditName: w.name
				}, o.a.createElement(b.a, {
					className: O.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: w.url,
						state: N
					}
				}, w.displayText)), w && w.isQuarantined && o.a.createElement(p.a, null), !n && !I.isSponsored && w && j && !E && o.a.createElement(h.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(I.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(C.i)(w) ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: I.id,
					size: x.d.XXS,
					small: !0
				}), !n && !I.isSponsored && o.a.createElement(g.b, null), !n && !I.isSponsored && o.a.createElement(l.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), o.a.createElement(u.g, {
					className: O.a.postTopMeta,
					flairStyleTemplate: t,
					post: I,
					tooltipType: S,
					isModWithUserNotesPermissions: T
				}), o.a.createElement(m.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!n,
					post: I,
					tooltipType: S
				}), !P && o.a.createElement(a.a, {
					hideCta: s,
					thing: I,
					tooltipType: _ ? u.f.Lightbox : void 0
				}), T && o.a.createElement(d.a, {
					postOrComment: I,
					className: O.a.addModNote
				}))
			}
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
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
					isOverlay: x,
					isVoteCountAnimation: g,
					postId: v,
					shouldShowUpvoteRatioOnHover: y
				} = e, C = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && o.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: C,
					isVoteCountAnimation: g,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(r.a)(u.a.score, {
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
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/helpers/isComment.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				g = s("./src/lib/LRUCache/index.ts"),
				v = s("./src/telemetry/index.ts"),
				y = s("./src/telemetry/models/Timer.ts"),
				C = s("./src/reddit/components/PostList/index.m.less"),
				E = s.n(C);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 500,
				k = new g.a(_),
				I = new g.a(_),
				j = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				w = (e, t, s, n, o, r) => {
					const i = `entered-${e}-${t}-${s?`last-${n}-${o}`:""}`;
					let a = k.get(i);
					return void 0 === a && (a = () => {
						s && r.onBottomViewed(n, o), r.trackOnPostEnteredViewport(e, t)
					}, k.set(i, a)), a
				},
				S = (e, t) => {
					const s = `click-${e}`;
					let n = I.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(h.a)(e)
						})
					}, I.set(s, n)), n
				};
			class P extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new g.a(_), this.updateScrollerRef = e => {
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
						setTimeout(() => Object(v.b)(a.o.Redesign, {
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
						setTimeout(() => Object(v.b)(a.o.Redesign, {
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
						t = e && o()(e);
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
					const n = v.c.end(e);
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
						...o
					} = e, r = Object.keys(s), i = Object.keys(o);
					return i.length !== r.length || !!i.some(e => s[e] !== o[e])
				}
				scrollChildForItem(e, t, s, n, o, r) {
					const {
						listingKey: a,
						listingName: d,
						postClickEventFactory: c
					} = this.props, l = `post-${r}-${e}-${t}-${s?"last-index":""}-${d}-${a}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(l))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: u
						} = this.props, p = u[e], b = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, h = w(p, r, s, a, d, this.props), f = {
							key: b,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: n,
							isLastInCommentList: o,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: S(e, this.props),
							postId: p
						}, g = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => i.a.createElement(x.a, {
								postId: f.postId
							}, i.a.createElement(g, O({}, f, e)))
						}, this.scrollChildCache.set(l, m)
					}
					return m
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return i.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: n
					} = this.props;
					return i.a.createElement("div", {
						className: E.a.placeholder
					}, i.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(u.a, {
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
					return i.a.createElement("div", {
						className: E.a.placeholder
					}, i.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: j[s]
					}), !!e && i.a.createElement(u.a, {
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
						onLoadMore: o
					} = this.props, r = n.map((s, o, r) => {
						const i = o === n.length - 1,
							a = o && n[o - 1],
							d = !i && n[o + 1],
							c = !!Object(f.a)(s) && (!a || !Object(f.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(f.a)(s) && (!d || !Object(f.a)(d) || e[d].postId !== e[s].postId);
						return this.scrollChildForItem(s, o, i, c, l, t)
					});
					return i.a.createElement("div", null, i.a.createElement(p.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: o,
						viewportTopPadding: b.f + b.r
					}, r), this.isLoadingMore() && this.renderLoadMore())
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
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				a = s("./node_modules/lodash/throttle.js"),
				d = s.n(a),
				c = s("./node_modules/react/index.js"),
				l = s.n(c),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/config.ts"),
				h = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				y = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/Profile/index.ts"),
				I = s("./src/reddit/featureFlags/index.ts"),
				j = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/selectors/user.ts"),
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
					isDropdownMenuOpen: e => Object(w.a)(e) === B,
					isOwnProfile: (e, t) => Object(S.Y)(e, t.profileName),
					isHistoryTabEnabled: j.a,
					isSnoovatar30Enabled: I.d.snoovatar30,
					isSubscriptionsPinned: P.c
				}),
				F = Object(h.a)(E.a),
				B = "profile-nav-menu-tooltip",
				U = y.g + y.q + y.p;
			var D;
			t.a = M(Object(m.b)(A, e => ({
					toggleTooltip: t => e(Object(g.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isHistoryTabEnabled: s,
						isOwnProfile: n,
						privateListingType: r,
						profileName: a,
						routeName: m,
						toggleTooltip: u,
						isSnoovatar30Enabled: p,
						isSubscriptionsPinned: b,
						viewBlockedConsent: h
					} = e;
					const [x, g] = Object(c.useState)(!1), C = Object(c.useRef)(null), [E, O] = Object(c.useState)([]), [k, I] = Object(c.useState)([]);
					return Object(c.useEffect)(() => {
						const e = V({
							isHistoryTabEnabled: s,
							profileName: a,
							isOwnProfile: n,
							routeName: m,
							privateListingType: r,
							isSnoovatar30Enabled: p,
							viewBlockedConsent: h
						});
						O(e.filter(e => e.position === D.MENU));
						const t = [],
							c = d()(() => {
								const s = document.documentElement.clientWidth - 2 * y.p,
									n = s > U ? U : s;
								let o = 42;
								t.forEach(t => {
									o += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = o > n ? D.DROPDOWN : D.MENU
								});
								const r = e.filter(e => e.position === D.MENU);
								O(e => i()(r, e) ? e : r);
								const a = e.filter(e => e.position === D.DROPDOWN);
								I(e => i()(a, e) ? e : a), g(a.length > 0)
							}, 50);
						return o.a.read(() => {
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
					}, [s, a, n, m, r, p, h]), l.a.createElement("div", {
						className: L.a.container
					}, l.a.createElement(v.a, {
						bladeOpen: !1,
						offsetLeft: b ? y.t : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: L.a.menuContainer,
							ref: C
						}, E.map(e => l.a.createElement(G, R({}, e, {
							key: e.key
						})))), x && l.a.createElement("button", {
							className: Object(f.a)(L.a.mainLink),
							id: B,
							onClick: () => u(B)
						}, l.a.createElement(_.a, {
							name: "overflow_horizontal"
						})), x && l.a.createElement(F, {
							className: L.a.dropdown,
							isOpen: t,
							tooltipId: B
						}, k.map(e => l.a.createElement(W, R({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(D || (D = {}));
			const G = e => {
					let {
						isActive: t,
						text: s,
						url: n,
						internal: o
					} = e;
					return o ? l.a.createElement(O.default, {
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
						text: o
					} = e;
					return s ? l.a.createElement(u.a, {
						className: Object(f.a)(L.a.dropdownLink, {
							[L.a.isActive]: t
						}),
						to: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, o) : l.a.createElement("a", {
						className: Object(f.a)(L.a.dropdownLink),
						href: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, o)
				},
				V = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: o,
						privateListingType: r,
						isHistoryTabEnabled: i,
						isSnoovatar30Enabled: a,
						viewBlockedConsent: d
					} = e;
					const c = s ? [{
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === k.b.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === k.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === k.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === k.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: D.MENU
					}] : [];
					s ? (c.push({
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === k.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: D.MENU
					}), c.push({
						internal: !0,
						isActive: o === x.Sb.PROFILE_PRIVATE && r === k.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: D.MENU
					})) : c.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: D.MENU
					});
					const l = i && s ? [{
							internal: !0,
							isActive: o === x.Sb.PROFILE_PRIVATE && r === k.b.History,
							key: "profile.mainmenu.history",
							text: n.fbt._("History", null, {
								hk: "1fv1wp"
							}),
							url: `/user/${t}/history/`,
							position: D.MENU
						}] : [],
						m = a ? [{
							internal: !0,
							isActive: o === x.Sb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: n.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: D.MENU
						}] : [],
						u = d ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: o === x.Sb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${u}`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `${Object(N.a)(t)}/${u}`,
						position: D.MENU
					}, {
						internal: !0,
						isActive: o === x.Sb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${u}`,
						position: D.MENU
					}, ...m, ...l, ...c]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
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
				h = e => r.a.createElement(i.a, {
					className: e.className
				}, r.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), r.a.createElement(u.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: p.a.PROFILE
					}
				}), r.a.createElement(a.a, {
					profileName: e.profileName
				}), r.a.createElement(d.a, {
					profileName: e.profileName
				}), r.a.createElement(c.a, null, r.a.createElement(m.a, {
					profileName: e.profileName
				})), r.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			h.defaultProps = {
				isOverlay: !1
			}, t.a = h
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/take.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: o,
					items: d,
					minimizedLength: b,
					onLoadMore: h,
					pending: f,
					renderItem: x,
					title: g
				} = e, [v, y] = Object(i.useState)(!1), C = d.length > b || s, E = (!C || v ? d : r()(d, b)).map(e => x({
					item: e
				})), O = () => {
					v || y(!0), v && !s && y(!1), s && h && h()
				};
				return a.a.createElement(c.a, {
					className: t,
					headerButton: o,
					title: g
				}, E, a.a.createElement(u.a, null, a.a.createElement(p.a, null, C && (() => {
					const e = !v || s && h ? n.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : n.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(l.r, {
						onClick: O
					}, f ? a.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: d.Yb
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				f = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				g = s("./src/reddit/selectors/meta.ts"),
				v = s("./src/redditGQL/types.ts"),
				y = s("./src/reddit/components/SidebarFooter/index.m.less"),
				C = s.n(y);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = d.a.a("Link", C.a), _ = Object(i.c)({
				countryCode: g.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: x.a
			}), k = Object(r.b)(_), I = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), j = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return o.a.createElement("div", {
					className: C.a.GreyRereddit
				}, s, !!u.c[t] && o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), t === v.k.De && o.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), t === v.k.De && o.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), o.a.createElement("div", {
					className: C.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = I(k(Object(c.c)(e => {
				const t = Object(r.f)().getState(),
					s = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.fd.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.fd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.fd.LargeImagePreview ? e.reredditButtons : [];
					return o.a.createElement(j, {
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
					return s.includes(t) || "en" === t ? o.a.createElement(O, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return o.a.createElement(l.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!u.c[e.countryCode] && o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/impressum"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === v.k.De && o.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === v.k.De && o.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})))), o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, n("en"), n("fr"), n("it")), o.a.createElement("div", {
					className: C.a.Column
				}, n("de"), n("es"), n("pt"))), o.a.createElement("div", {
					className: C.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = s.n(h);
			const x = Object(a.c)({
					currentUser: b.m,
					moderated: u.p,
					subscriptions: p.e,
					hasMoreModerated: u.e,
					loadMorePending: u.b
				}),
				g = Object(i.b)(x, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return r.a.createElement(l.a, {
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
			t.a = g(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: o,
					subscriptions: i,
					hasMoreModerated: a,
					onLoadMore: d,
					loadMorePending: l
				} = e;
				if (0 === s.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === o.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
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
					}(s, new Set(i));
				return r.a.createElement(c.a, {
					className: f.a.container,
					title: u,
					items: p,
					renderItem: v,
					hasMoreItems: a,
					onLoadMore: d,
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(p);
			const h = Object(d.c)({
					hasMoreMultireddits: u.f,
					loadMorePending: u.c,
					multireddits: u.q
				}),
				f = Object(i.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(c.i)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				x = e => {
					let {
						item: t
					} = e;
					return r.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, r.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), r.a.createElement("div", {
						className: b.a.description
					}, r.a.createElement(a.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), r.a.createElement("div", {
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
					multireddits: o,
					onLoadMore: i,
					profileName: a
				} = e;
				return o && o.length ? r.a.createElement(m.a, null, r.a.createElement(l.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: i,
					pending: s,
					renderItem: x,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", a)], {
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
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/constants/index.ts"),
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
			const x = d.g[1] + 24,
				g = m.f + 8,
				v = g + 152 + 16,
				y = v + x + 8,
				C = h.a.div("Container", b.a),
				E = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return a.a.createElement(c.a, f({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?g:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				O = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: o,
						isSticky: r,
						shouldStickToBottom: i
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: i,
							[b.a.StickyStyles]: !i && r && !o,
							[b.a.StickyStylesFakeOverlay]: !i && !!o
						})
					}, t)
				};
			class _ extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > y,
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
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							className: o,
							hideFooter: r,
							pageLayer: i,
							recommendationsComponent: d,
							reredditButtons: c
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return a.a.createElement(C, {
						className: o,
						innerRef: this.setWrapperRef
					}, a.a.createElement(O, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, d, !r && a.a.createElement(l.a, {
						reredditButtons: c
					})), !d && !this.props.hideBackToTop && a.a.createElement(E, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const k = Object(u.v)();
			t.a = k(_)
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				b = s.n(p);
			const h = Object(a.b)(a.d, b.a);
			var f = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				g = s.n(x),
				v = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/opener/index.ts");
			const C = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(f.t)(e, Object(f.o)(e, s))
				}
			}, h);
			t.a = Object(i.b)(C)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(d.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: j
				})
			});
			const E = v.a.wrapped(u.a, "TrophyItem", g.a),
				O = v.a.div("TrophyIcon", g.a),
				_ = v.a.h5("TrophyName", g.a),
				k = v.a.div("TrophyContent", g.a),
				I = v.a.wrapped(c.c, "Description", g.a),
				j = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						n = r.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return r.a.createElement(E, {
						key: t.id
					}, r.a.createElement(O, null, t.url ? r.a.createElement("a", {
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
					}, n) : n), r.a.createElement(k, null, r.a.createElement(_, null, t.name), r.a.createElement(I, null, t.description)))
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
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(a);
			const c = r.a.div("WidgetBackground", d.a),
				l = r.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return o.a.createElement("div", s, o.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return I
			})), s.d(t, "a", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
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
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				O = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(O);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => r.a.createElement(b.a, {
					className: Object(c.a)(_.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? r.a.createElement(x.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(w, k({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(f.t, {
					className: _.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(d.c)({
					hideNSFWPref: C.H,
					nightmode: C.fb
				}),
				w = Object(i.b)(j)(e => r.a.createElement("div", {
					className: Object(c.a)(_.a.communityItemContainer, {
						[_.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(v.a, {
					className: _.a.communityItemExpandCenter,
					widthRight: h.s
				}, r.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(g.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(_.a.defaultCommunityIcon, {
						[_.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, r.a.createElement(a.a, {
					className: _.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(E.b)(e.name, e.type),
					to: Object(E.a)(e.name, e.type)
				}, Object(E.b)(e.name, e.type)), r.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: _.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: _.a.nsfwFlair,
					flair: {
						type: y.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(x.a, {
					className: Object(c.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(f.t, {
					className: _.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
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
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === n.a.PROFILE ? Object(o.e)(e) : Object(o.d)(e)
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				g = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				v = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				y = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				C = s.n(y);
			var E = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, i = t.username,
						a = "";
					return n !== u.a.Twitter ? null : (r = o.a.createElement(g.a, {
						className: C.a.twitterLogo
					}), a = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), i = `@${t.username}`, o.a.createElement(v.a, null, o.a.createElement("span", {
						className: C.a.icon
					}, r), o.a.createElement(f.b, {
						className: C.a.link,
						href: t.link,
						onClick: s
					}, o.a.createElement("div", {
						className: C.a.linkTitle
					}, o.a.createElement("span", {
						className: C.a.name
					}, i), o.a.createElement(x.a, {
						className: C.a.linkIcon
					})), o.a.createElement("div", {
						className: C.a.linkDescription
					}, a))))
				},
				O = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				_ = s.n(O);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = Object(i.c)({
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
					return s.type === l.a.PROFILE ? Object(b.Cb)(e, {
						userName: s.name
					}) : null
				}
			}), j = Object(r.b)(I, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(d.c)(j(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(a.a, null, o.a.createElement(c.b, null, o.a.createElement(c.a, null, k._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && o.a.createElement("div", {
					className: _.a.account
				}, o.a.createElement(E, {
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = y(e);
					return Object(g.f)(t)
				},
				O = e => {
					const t = C(e);
					return Object(g.f)(t)
				};
			var _ = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(_);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(m.v)(), w = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.o)(e, t) || void 0,
						n = t.redditStyle || Object(f.l)(e, {
							subredditId: s
						}),
						o = Object(x.fb)(e);
					return n || o
				},
				nigtmode: x.fb,
				subredditId: m.o,
				topPostVariant: h.d
			}));
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? k.a.widgetContentOnly : k.a.widgetContent, f = !n && this.props.styles, x = f ? this.getWidgetBackgroundStyles() : {}, g = f ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: n,
							[k.a.clickable]: !!d,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: x
					}, m && o.a.createElement("div", {
						className: Object(a.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!l
						}),
						id: i,
						style: {
							...g,
							...this.props.headerStyles
						},
						onClick: l
					}, o.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, p)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), r), o.a.createElement("div", {
						className: Object(a.a)(h, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(u.r, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, I._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(w(Object(d.a)(Object(l.c)(S))))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: g.d,
					activeModalId: m.a,
					crosspost: f.d,
					isActive: f.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: f.l,
					isExpanded: f.m,
					isLoggedIn: g.S,
					showPromotedCTA: x.a,
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
				y = Object(n.b)(() => Object(o.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === a.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(r.eb)(s)),
						onOpenReportsDropdown: t => e(Object(i.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(y(Object(d.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				i = 4,
				a = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return g
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "l", (function() {
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/lib/makeRequest/index.ts"),
				a = s("./src/reddit/models/Subreddit/index.ts"),
				d = s("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"),
				c = s("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				l = s("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"),
				m = s("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				u = s("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				p = s("./src/redditGQL/operations/PrepareLiveAudioRoom.json"),
				b = s("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"),
				h = s("./src/redditGQL/operations/ReportTalk.json"),
				f = s("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				x = s("./src/redditGQL/types.ts");
			const g = (e, t) => Object(r.a)(e, {
					...h,
					variables: t
				}),
				v = async (e, t) => {
					const s = await Object(r.a)(e, {
						...m,
						variables: t
					});
					return !!Object(i.c)(s) && (s.body.data.subredditInfoById.allowedPostTypes || []).includes(x.N.Talk)
				}, y = async (e, t) => {
					var s, n;
					const o = await Object(r.a)(e, {
						...u,
						variables: t
					});
					return !!Object(i.c)(o) && (null !== (n = null === (s = o.body.data.profileByName) || void 0 === s ? void 0 : s.allowedPostTypes) && void 0 !== n ? n : []).includes(x.N.Talk)
				}, C = async e => {
					var t;
					const s = await Object(r.a)(e, l);
					return Object(i.c)(s) && null !== (t = s.body.data.availableAudioRoomTopics) && void 0 !== t ? t : []
				}, E = (e, t, s) => t.type === a.g.User ? Object(r.a)(e, {
					...d,
					variables: s
				}) : Object(r.a)(e, {
					...c,
					variables: {
						...s,
						subredditId: t.id
					}
				}), O = (e, t, s) => t.type === a.g.User ? Object(r.a)(e, {
					...b,
					variables: {
						input: s
					}
				}) : Object(r.a)(e, {
					...p,
					variables: {
						input: {
							...s,
							subredditId: t.id
						}
					}
				}), _ = () => Object(o.a)(), k = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, I = {
					[x.l.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[x.l.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[x.l.RoomLimitExceeded]: n.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[x.l.ConcurrentRoomLimitExceeded]: n.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[x.l.SubredditRoomLimitExceeded]: n.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, j = e => e.data.prepareAudioRoom || e.data.prepareAudioRoomOnProfile, w = {
					[x.P.ServiceError]: n.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[x.P.UserNotAuthorized]: n.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					})
				}, S = (e, t) => Object(r.a)(e, {
					...f,
					variables: t
				})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const i = (e, t, s, n, r, i) => n ? e.crosspostRootId ? o.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, a(e, s, r, i)) : a(e, s, r, i) : null,
				a = (e, t, s, n) => o.a.createElement(r.a, {
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
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(o);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				a = e => Object(n.a)(r.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
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
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = e => {
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
				a = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.lb)(s),
					post: Object(r.K)(s, e),
					userSubreddit: Object(r.ub)(s),
					actionInfo: Object(r.d)(s, {
						reason: i(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.lb)(s),
					userSubreddit: Object(r.ub)(s)
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
					...Object(r.o)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: c(t)
					}),
					post: Object(r.K)(n, e, void 0, s)
				}),
				u = (e, t, s, n, i, a) => d => ({
					...Object(r.o)(d),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(d, e, void 0, a),
					subreddit: Object(r.lb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: i
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.K)(n, e, void 0, s),
					subreddit: Object(r.lb)(n)
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
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
				o = s("./src/telemetry/models/Event.ts");
			const r = () => e => ({
					source: o.f.HomeFeed,
					action: o.d.Click,
					noun: o.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				i = () => e => ({
					source: o.f.UserPreferences,
					action: o.d.Click,
					noun: o.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				a = () => e => ({
					source: o.f.UserPreferences,
					action: o.d.Click,
					noun: o.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				d = () => e => ({
					source: o.f.CommunityNotificationsSettings,
					action: o.d.Click,
					noun: o.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				c = () => e => ({
					source: o.f.PopularFeed,
					action: o.d.Click,
					noun: o.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				l = () => e => ({
					source: o.f.SubredditIdBanner,
					action: o.d.Click,
					noun: o.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				m = () => e => ({
					source: o.f.AboutCommunityOverflow,
					action: o.d.Click,
					noun: o.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				u = () => e => ({
					source: o.f.AboutCommunityOverflow,
					action: o.d.Click,
					noun: o.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				})
		},
		"./src/reddit/helpers/trackers/talkCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return d
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
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/postCreations.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					...i.o(e),
					source: "global",
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_room"
					}
				}),
				d = () => e => ({
					...i.o(e),
					source: "global",
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					actionInfo: {
						pageType: "liveaudio_create_topic_picker"
					}
				}),
				c = () => e => ({
					...i.o(e),
					source: "liveaudio",
					action: o.c.CLICK,
					noun: "go_live",
					subreddit: i.lb(e),
					liveAudioRoom: {
						title: Object(r.vb)(e),
						topicIds: Object(r.ub)(e).topics.map(e => e.id)
					}
				}),
				l = () => e => ({
					...i.o(e),
					source: "liveaudio",
					action: o.c.CLICK,
					noun: "schedule",
					subreddit: i.lb(e),
					liveAudioRoom: {
						title: Object(r.vb)(e),
						topicIds: Object(r.ub)(e).topics.map(e => e.id)
					}
				}),
				m = () => e => ({
					...i.o(e),
					source: "post_composer",
					action: o.c.CLICK,
					noun: "overflow",
					subreddit: i.lb(e),
					liveAudioRoom: {
						title: Object(r.vb)(e)
					}
				}),
				u = e => t => ({
					...i.o(t),
					source: "global",
					action: o.c.VIEW,
					noun: o.b.SCREEN,
					subreddit: i.lb(t),
					post: i.K(t, e),
					postEvent: {
						eventState: n.a.Future
					}
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const a = (e, t) => s => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				d = (e, t) => s => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.K(s, e),
					subreddit: i.lb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				c = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
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
				o = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("rightAligned", r.a)
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
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(a);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(i.a)(d.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: d.a.leftAndRight,
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
			var n, o, r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				l = s("./src/reddit/components/EmptyProfile/index.ts"),
				m = s("./src/reddit/components/JumpToContent/index.tsx"),
				u = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				p = s("./src/reddit/components/PostList/index.tsx"),
				b = s("./src/reddit/components/ProfileItemList/index.tsx"),
				h = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				f = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				x = s("./node_modules/lodash/noop.js"),
				g = s.n(x),
				v = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				y = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/components/PostList/Placeholder.tsx"),
				O = s("./src/reddit/actions/postList.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/helpers/isPost.ts"),
				j = s("./src/reddit/helpers/trackers/post.ts"),
				w = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/objectSelector/index.ts")),
				S = s("./src/reddit/constants/adEvents.ts"),
				P = s("./src/reddit/models/Flair/index.ts"),
				N = s("./src/reddit/models/PostCreationForm/index.ts");
			! function(e) {
				e.ANY_TOTAL_VIEW_TIME = "a", e.FIFTY_TOTAL_VIEW_TIME = "b", e.FULL_TOTAL_VIEW_TIME = "c", e.ANY_CONTINUOUS_VIEW_TIME = "d", e.FIFTY_CONTINUOUS_VIEW_TIME = "e", e.FULL_CONTINUOUS_VIEW_TIME = "f", e.GLOBAL_COUNT = "r", e.GROUP_M_VIEWABLE = "g", e.AD_LOAD_TIME = "i", e.TIMESTAMP = "t", e.WAS_EVER_VIEWABLE = "o", e.LARGE_AD_FULL_VIEW = "q", e.HEIGHT = "h", e.WIDTH = "w", e.SCREEN_HEIGHT = "sh", e.SCREEN_WIDTH = "sw"
			}(n || (n = {})),
			function(e) {
				e.IS_VIDEO_AD = "va", e.TOTAL_MRC_VIEWABLE_TIME = "vb", e.VIDEO_AD_DURATION = "vc", e.TOTAL_PLAY_TIME = "vd", e.VOLUME = "ve", e.IS_VISIBLE = "vg", e.VIDEO_HEIGHT = "vh", e.TOTAL_AUDIBLE_TIME = "vi", e.VIDEO_WIDTH = "vw", e.WAS_FULL_SCREEN = "vq", e.HALF_DURATION_80_IN_VIEW_AUDIBLE = "vr", e.VIDEO_STATE_Q0 = "vs", e.VIDEO_STATE_Q1 = "vt", e.VIDEO_STATE_Q2 = "vu", e.VIDEO_STATE_Q3 = "vv", e.VIDEO_STATE_Q4 = "vx", e.FULL_IN_VIEW_AUDIBLE_TIME = "vy", e.FULL_IN_VIEW_TIME = "vz", e.WAS_FULL_IN_VIEW_1SEC = "xa", e.FIFTY_CONTINUOUS_VIDEO_VIEW_TIME = "xb", e.HAS_SEEKED = "xc"
			}(o || (o = {}));
			var T = s("./node_modules/uuid/dist/esm-browser/v4.js");

			function L() {
				return `https://alb.reddit.com/cr?testUuid=${Object(T.a)()}`
			}

			function R() {
				return `https://alb.reddit.com/i.gif?z=${Object(T.a)()}`
			}
			s("./src/reddit/models/Subreddit/index.ts"), s("./src/reddit/models/Subreddit/mock.ts");
			var M = s("./src/reddit/models/Vote/index.ts");

			function A(e) {
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
					voteState: M.a.notVoted,
					...e
				}
			}
			const F = e => {
					var t;
					const s = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "ad";
					return A({
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
							type: S.a.Impression
						}],
						source: {
							displayText: "ads.reddit.com",
							url: "https://ads.reddit.com/",
							outboundUrl: L()
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
				B = {
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
							rteMode: N.i.RICH_TEXT,
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
							rteMode: N.i.RICH_TEXT,
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
							rteMode: N.i.RICH_TEXT,
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
				U = (A({
					authorIsBlocked: !0,
					media: {
						type: "text",
						rteMode: N.i.RICH_TEXT,
						markdownContent: "",
						content: "This is content in a post.",
						obfuscated: null
					}
				}), F({
					id: "imgad"
				}), F({
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
						rteMode: N.i.RICH_TEXT,
						markdownContent: "",
						content: ""
					}
				}), F({
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
								url: R(),
								type: S.a.GalleryItemImpression
							}],
							outboundUrl: L(),
							id: 43313568
						}, {
							mediaId: "nzaab70ltrx61",
							displayUrl: "www.time.gov",
							adEvents: [{
								url: R(),
								type: S.a.GalleryItemImpression
							}],
							outboundUrl: L(),
							caption: "no caption",
							id: 43313569
						}, {
							mediaId: "irmwg59mtrx61",
							displayUrl: "https://alb.reddit.com/cr",
							callToAction: "Apply Now",
							adEvents: [{
								url: R(),
								type: S.a.GalleryItemImpression
							}],
							outboundUrl: L(),
							caption: "Something else",
							id: 43313570
						}]
					},
					crossPostParentId: null,
					crossPostRootId: null,
					numCrossposts: 0,
					isCrosspostable: !1
				}),
				D = (F({
					id: "galleryad",
					media: U
				}), F({
					id: "shoppingad",
					subcaption: "$50.00",
					media: U
				}), F({
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
				}), Object(w.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.posts.models;
					return G(e, {
						listingKey: s
					}).filter(e => {
						if (Object(k.a)(e)) return !0; {
							const t = n[e];
							return t && !t.hidden
						}
					})
				})),
				G = Object(w.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.pages.profileOverview.chrono.ids[s];
					return n ? [...n] : []
				}),
				W = Object(w.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return D(e, {
						listingKey: s
					}).reduce((t, s) => {
						const n = Object(k.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = n, t
					}, {})
				}),
				V = (Object(w.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.posts.models;
					return V(e, {
						listingKey: s
					}).filter(e => {
						const t = n[e];
						return t && !t.hidden
					})
				}), Object(w.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return D(e, {
						listingKey: s
					}).map(t => Object(k.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				H = Object(w.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.posts.models,
						o = V(e, {
							listingKey: s
						}),
						r = {};
					return o.forEach(e => r[e] = n[e]), r
				}),
				z = Object(w.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const n = e.features.comments.models,
						o = D(e, {
							listingKey: s
						}),
						r = {};
					return o.forEach(e => !!Object(k.a)(e) && (r[e] = n[e])), r
				});
			var J = s("./src/reddit/selectors/subreddit.ts"),
				K = s("./src/reddit/selectors/tracking.ts"),
				q = s("./src/reddit/selectors/user.ts");
			const Q = (e, t) => (e, t, s) => Object(k.a)(e) ? 120 : 47,
				Y = (Object(_.v)(), {
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
					currentUser: q.m,
					layout: _.U,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.loadMore[s]
					},
					subredditsById: J.eb,
					viewportDataLoaded: K.a,
					commentsById: z,
					itemIds: D,
					itemIdToPostId: W,
					postsById: H,
					estimateItemHeight: Q
				}),
				Z = Object(d.c)(Y);
			Object(a.b)(Z, (e, t) => ({
				onBottomViewed: (t, s) => e(O.c(t, s)),
				openPost: t => {
					e(y.K(t))
				},
				trackOnPostEnteredViewport: (t, s) => {
					Object(I.a)(t) && e(y.M(t))
				},
				trackOnPostExitedViewport: (t, s, n) => {
					Object(I.a)(t) && e(y.N(t, n))
				},
				fireAdPixelsOfType: g.a
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				postClickEventFactory: (e, t) => Object(j.k)(e, t)
			}));
			var X = s("./src/reddit/featureFlags/index.ts"),
				$ = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				ee = s("./src/reddit/models/Profile/index.ts");
			const te = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.pending[s]
				},
				se = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.error[s]
				},
				ne = Object(w.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return (e.profilePrivatePage.ids[s] || []).reduce((t, s) => {
						const n = Object(k.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = n, t
					}, {})
				}),
				oe = Object(_.v)(),
				re = Object(_.v)(),
				ie = {
					apiError: se,
					apiPending: te,
					layout: _.U,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[s] || !e.profilePrivatePage.pageInfo[s].hasNextPage) return null;
						const n = e.profilePrivatePage.ids[s];
						return {
							token: n[n.length - 1],
							dist: $.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !te(e, t) && !se(e, t),
					isLoggedIn: q.S
				},
				ae = Object(d.c)({
					...ie,
					currentUser: q.m,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return -1 === s.indexOf(ee.b.Saved) && -1 === s.indexOf(ee.b.ReceivedGildings) && -1 === s.indexOf(ee.b.GivenGildings) ? [] : e.profilePrivatePage.ids[s] || []
					},
					itemIdToPostId: ne,
					estimateItemHeight: Q
				}),
				de = Object(d.c)({
					...ie,
					measureScrollFPS: X.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s.indexOf(ee.b.Saved) > -1 || s.indexOf(ee.b.ReceivedGildings) > -1 || s.indexOf(ee.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[s] || []
					},
					postListPlaceholderComponent: () => E.a
				}),
				ce = e => ({
					onBottomViewed: g.a,
					openPost: t => {
						e(y.K(t))
					},
					trackOnPostEnteredViewport: g.a,
					fireAdPixelsOfType: (t, s) => {
						e(y.y(t, s))
					}
				}),
				le = Object(a.b)(ae, ce, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(j.k)(e, t)
				})),
				me = Object(a.b)(de, e => ({
					...ce(e),
					onFirstPostChanged: g.a,
					adBrandSafetyStatusReceived: g.a,
					trackOnPostExitedViewport: g.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(j.k)(e, t),
					postComponentForLayout: v.b
				}));
			var ue = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				be = s("./src/reddit/layout/page/Listing/index.tsx"),
				he = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				fe = s.n(he);
			const xe = Object(d.c)({
					currentUser: q.m
				}),
				ge = Object(a.b)(xe, (e, t) => ({
					onLoadMore: () => e(Object(c.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				ve = (e => Object(C.c)(oe(le(e))))(b.a),
				ye = (e => Object(C.c)(re(me(e))))(p.a);
			class Ce extends i.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = ee.a[e]();
					return () => i.a.createElement(l.d, {
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
					} = this.props, n = s.toLowerCase(), o = Object(ue.c)(n, t);
					return e && e.displayText && e.displayText.toLowerCase() === n ? t === ee.b.Saved || t === ee.b.ReceivedGildings || t === ee.b.GivenGildings ? i.a.createElement(ve, {
						className: fe.a.mixedList,
						itemComponent: u.a,
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: n,
						listingViewed: Object(pe.r)(o),
						onLoadMore: this.onLoadMore
					}) : i.a.createElement(ye, {
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: n,
						listingViewed: Object(pe.r)(o),
						onLoadMore: this.onLoadMore
					}) : i.a.createElement(l.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return i.a.createElement(be.a, {
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(h.a, {
							profileName: e
						}),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(m.a, null), this.renderContent()),
						sidebar: i.a.createElement(f.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ge(Ce)
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.D
				}) === n.Od
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
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				d = s("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(r.f)(e),
					experimentName: n.oc
				}), i.a),
				l = Object(d.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(r.f)(e),
					experimentName: n.nc
				}), i.a),
				m = Object(d.a)(c, l, (e, t) => e || t),
				u = Object(d.a)(c, l, (e, t) => !(!e && !t))
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
			e.exports = JSON.parse('{"id":"f3744c1a5616"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"8263ef8a3640"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"81644f48b9de"}')
		},
		"./src/redditGQL/operations/ProfileHistoryPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"294d739af468"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"86eb70b57ff1"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"8d080fea5a27"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"90b8a86f32ee"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.db9f8d2908b34905f708.js.map