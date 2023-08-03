// https://www.redditstatic.com/desktop2x/ProfilePrivate.7ce3efec476ce7f3c44e.js
// Retrieved at 8/3/2023, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "privateListingPending", (function() {
				return A
			})), i.d(t, "privateMixedListingLoaded", (function() {
				return G
			})), i.d(t, "privatePostListingLoaded", (function() {
				return F
			})), i.d(t, "privateListingFailed", (function() {
				return B
			})), i.d(t, "profilePrivateRequested", (function() {
				return M
			})), i.d(t, "morePending", (function() {
				return U
			})), i.d(t, "moreMixedLoaded", (function() {
				return D
			})), i.d(t, "morePostLoaded", (function() {
				return H
			})), i.d(t, "moreFailed", (function() {
				return z
			})), i.d(t, "moreProfilePrivateRequested", (function() {
				return W
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./src/lib/makeActionCreator/index.ts"),
				r = i("./src/reddit/actions/externalAccount.ts"),
				o = i("./src/reddit/actions/pages/profileShared.ts"),
				n = i("./src/reddit/actions/profile/index.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				a = i("./src/redditGQL/operations/ProfileDownvoted.json"),
				l = i("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = i("./src/redditGQL/operations/ProfileHidden.json"),
				u = i("./src/redditGQL/operations/ProfileHistoryPosts.json"),
				p = i("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				m = i("./src/redditGQL/operations/ProfileSaved.json"),
				b = i("./src/redditGQL/operations/ProfileUpvoted.json");
			var g = i("./src/reddit/models/Comment/index.ts"),
				h = i("./src/reddit/models/Post/index.ts"),
				f = i("./src/reddit/models/Profile/index.ts"),
				y = i("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				v = i("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				S = i("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				I = i("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				C = i("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				_ = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				x = i("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var O = e => {
					const {
						listingType: t,
						rawData: i,
						includeIdentity: s,
						includeModerated: r
					} = e, {
						identity: o
					} = i, n = (e => {
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
						return e !== f.b.Saved && e !== f.b.ReceivedGildings && e !== f.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!o) return n;
					if (s && (n.account = Object(x.a)(o) || null, n.preferences = Object(I.a)(o.preferences, o.interactions) || null, o.redditor.profile && (n.profiles[o.redditor.profile.id] = Object(C.a)(o.redditor.profile))), r && o.redditor && o.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: i
						} = Object(C.b)(o.redditor.moderatedSubreddits);
						n.moderatedPageInfo = t, n.moderatedSubredditIds = e, n.subreddits = i
					}
					let d;
					if (t === f.b.History) d = i.postsInfoByIds;
					else {
						const e = ((e, t) => {
							switch (t) {
								case f.b.Downvoted:
									return e.identity.downvotedPosts;
								case f.b.Hidden:
									return e.identity.hiddenPosts;
								case f.b.History:
									return null;
								case f.b.Saved:
									return e.identity.saved;
								case f.b.Upvoted:
									return e.identity.upvotedPosts;
								case f.b.ReceivedGildings:
									return e.identity.receivedGildings;
								case f.b.GivenGildings:
									return e.identity.givenGildings
							}
						})(i, t);
						if (!e) return n;
						d = e.edges, n.pageInfo = e.pageInfo
					}
					if (!d) return n;
					for (const a of d) {
						let e;
						const i = t === f.b.History ? a : a.node;
						if (i.__typename === g.d.Comment) {
							const t = Object(y.a)(i);
							if (n.comments || (n.comments = {}), n.comments[t.id] = t, n.itemIds || (n.itemIds = []), n.itemIds.push(t.id), i.authorFlair && (n.authorFlair[t.subredditId] || (n.authorFlair[t.subredditId] = {}), n.authorFlair[t.subredditId][t.author] = Object(v.a)(i.authorFlair)[0]), e = i.postInfo, i.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(w.a)(i.postInfo);
								n.posts[e.id] = e, t && (n.posts[t.id] = t)
							}
						} else e = i, n.itemIds || (n.itemIds = []), n.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: s,
							crosspost: r
						} = e && Object(w.a)(e);
						n.posts[s.id] = s, r && (n.posts[r.id] = r), Object(h.i)(e) || Object(h.j)(e) || (e.authorFlair && (n.authorFlair[s.belongsTo.id] || (n.authorFlair[s.belongsTo.id] = {}), n.authorFlair[s.belongsTo.id][s.author] = Object(v.a)(e.authorFlair)[0]), Object(h.l)(e) ? n.profiles[e.profile.id] || (n.profiles[e.profile.id] = Object(C.a)(e.profile)) : Object(h.n)(e) && (n.subreddits[e.subreddit.id] || (n.subreddits[e.subreddit.id] = Object(_.a)(e.subreddit)), n.postFlair[e.subreddit.id] || (n.postFlair[e.subreddit.id] = Object(S.a)(e.subreddit))))
					}
					return n
				},
				k = i("./src/reddit/helpers/localStorage/index.ts"),
				j = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				E = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				P = i("./src/lib/initializeClient/installReducer.ts"),
				T = i("./src/reddit/reducers/features/comments/index.ts");
			Object(P.a)({
				features: {
					comments: T.a
				}
			});
			const L = {
					[f.b.Downvoted]: (e, t) => Object(d.a)(e, {
						...a,
						variables: t
					}),
					[f.b.Hidden]: (e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}),
					[f.b.Saved]: (e, t) => Object(d.a)(e, {
						...m,
						variables: t
					}),
					[f.b.Upvoted]: (e, t) => Object(d.a)(e, {
						...b,
						variables: t
					}),
					[f.b.ReceivedGildings]: (e, t) => Object(d.a)(e, {
						...p,
						variables: t
					}),
					[f.b.GivenGildings]: (e, t) => Object(d.a)(e, {
						...l,
						variables: t
					})
				},
				R = (e, t) => {
					switch (e) {
						case f.b.Downvoted:
						case f.b.Hidden:
						case f.b.History:
						case f.b.Saved:
						case f.b.Upvoted:
						case f.b.ReceivedGildings:
						case f.b.GivenGildings:
							return t.body.data
					}
				},
				N = e => {
					switch (e.listingType) {
						case f.b.Downvoted:
						case f.b.Hidden:
						case f.b.History:
						case f.b.Saved:
						case f.b.Upvoted:
						case f.b.ReceivedGildings:
						case f.b.GivenGildings:
							return O(e)
					}
				},
				A = Object(s.a)(E.b),
				G = Object(s.a)(E.c),
				F = Object(s.a)(E.i),
				B = Object(s.a)(E.a),
				M = e => async (t, i, s) => {
					const {
						profileName: a,
						listingType: l
					} = e.params, c = i(), p = Object(j.c)(a.toLowerCase(), l), m = c.profilePrivatePage.ids[p] && c.profilePrivatePage.ids[p].length > 0, b = !!c.profilePrivatePage.api.error[p];
					if (c.profilePrivatePage.api.pending[p] || m && !b) return;
					const {
						account: g
					} = c.user, h = !g, y = !(g && g.displayText && c.profiles.moderated.models[g.displayText.toLowerCase()] && c.profiles.moderated.models[g.displayText.toLowerCase()].length);
					let v;
					if (t(A({
							listingKey: p
						})), l === f.b.History) {
						const e = {
							includeIdentity: h,
							includeModerated: y,
							recentPostIds: Object(k.T)(null == g ? void 0 : g.id).reverse()
						};
						v = await ((e, t) => Object(d.a)(e, {
							...u,
							variables: t
						}))(s.gqlContext(), e)
					} else {
						const e = {
							includeIdentity: h,
							includeModerated: y,
							first: E.h,
							after: null
						};
						v = await L[l](s.gqlContext(), e)
					}
					if (v.ok && v.body) {
						const e = N({
							rawData: R(l, v),
							listingType: l,
							includeIdentity: h,
							includeModerated: y
						});
						l === f.b.Saved || l === f.b.ReceivedGildings || l === f.b.GivenGildings ? await t(G({
							listingKey: p,
							profileName: a,
							...e
						})) : await t(F({
							listingKey: p,
							profileName: a,
							...e
						})), await Promise.all([t(Object(o.d)(a)), t(Object(r.o)(a)), t(Object(n.d)(a))])
					} else t(B({
						listingKey: p,
						error: v.error
					}))
				}, U = Object(s.a)(E.f), D = Object(s.a)(E.e), H = Object(s.a)(E.g), z = Object(s.a)(E.d), W = e => async (t, i, s) => {
					const r = i(),
						o = r.user.account && r.user.account.displayText && r.user.account.displayText.toLowerCase();
					if (!o) return;
					const n = Object(j.c)(o, e);
					if (!r.profilePrivatePage.ids[n] || !r.profilePrivatePage.ids[n].length || !r.profilePrivatePage.pageInfo || !r.profilePrivatePage.pageInfo[n].hasNextPage || r.profilePrivatePage.api.error[n] || r.profilePrivatePage.api.pending[n]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: r.profilePrivatePage.pageInfo[n].endCursor,
						first: E.h
					};
					t(U({
						listingKey: n
					}));
					const a = await L[e](s.gqlContext(), d);
					if (a.ok && a.body) {
						const i = N({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: a.body.data
						});
						e === f.b.Saved || e === f.b.ReceivedGildings || e === f.b.GivenGildings ? await t(D({
							listingKey: n,
							profileName: o,
							...i
						})) : await t(H({
							listingKey: n,
							profileName: o,
							...i
						}))
					} else t(z({
						listingKey: n,
						error: a.error
					}))
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return O
			})), i.d(t, "d", (function() {
				return j
			})), i.d(t, "e", (function() {
				return E
			})), i.d(t, "g", (function() {
				return P
			})), i.d(t, "a", (function() {
				return T
			})), i.d(t, "f", (function() {
				return L
			})), i.d(t, "b", (function() {
				return R
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/toaster.ts"),
				n = i("./src/lib/makeGqlRequest/index.ts"),
				d = i("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				a = i("./src/redditGQL/operations/MutedSubreddits.json"),
				l = i("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				c = i("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const u = (e, t) => Object(n.a)(e, {
					...c,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				p = (e, t) => Object(n.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var m = i("./src/reddit/models/Toast/index.ts"),
				b = i("./src/reddit/actions/subreddit/constants.ts"),
				g = i("./src/reddit/actions/subreddit/notifications.ts"),
				h = i("./src/reddit/selectors/subreddit.ts");
			const f = e => Object(o.f)({
					id: e,
					kind: m.b.Error,
					duration: o.a,
					text: s.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				y = (e, t) => Object(o.f)({
					kind: m.b.SuccessCommunityGreen,
					text: s.fbt._("Muted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				v = (e, t) => Object(o.f)({
					kind: m.b.SuccessCommunityGreen,
					text: s.fbt._("Unmuted r/{subreddit name}", [s.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: s.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var S = i("./src/reddit/endpoints/subreddit/about.ts");
			const w = Object(r.a)(b.i),
				I = Object(r.a)(b.h),
				C = Object(r.a)(b.G),
				_ = (Object(r.a)(b.j), Object(r.a)(b.F), Object(r.a)(b.g)),
				x = Object(r.a)(b.f),
				O = e => {
					let {
						subredditId: t,
						subredditName: i,
						successCallback: s
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: n
						} = o;
						var d, a;
						const l = await u(n(), t);
						if (l.ok && l.body && (null === (a = null === (d = l.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) s && s(), e(y(i, k({
							subredditId: t,
							subredditName: i
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				k = e => {
					let {
						subredditId: t,
						subredditName: i,
						successCallback: s
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: n
						} = o;
						var d, a;
						const l = await p(n(), t);
						if (l.ok && l.body && (null === (a = null === (d = l.body) || void 0 === d ? void 0 : d.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) s && s(), e(v(i, O({
							subredditId: t,
							subredditName: i
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				j = e => {
					let {
						subredditId: t,
						subredditName: i,
						successCallback: s
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: n
						} = o;
						var d, a;
						const l = await u(n(), t);
						if (l.ok && l.body && (null === (a = null === (d = l.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) s && s(), e(Object(g.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(y(i, E({
							subredditId: t,
							subredditName: i
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				E = e => {
					let {
						subredditId: t,
						subredditName: i,
						successCallback: s
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: n
						} = o;
						var d, a;
						const l = await p(n(), t);
						if (l.ok && l.body && (null === (a = null === (d = l.body) || void 0 === d ? void 0 : d.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) s && s(), e(Object(g.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(v(i, j({
							subredditId: t,
							subredditName: i
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				P = e => {
					let {
						subredditId: t,
						notificationLevel: i
					} = e;
					return async (e, r, d) => {
						let {
							gqlContext: a
						} = d;
						var c, u;
						const p = Object(g.a)(i),
							b = await ((e, t, i) => Object(n.a)(e, {
								...l,
								variables: {
									input: {
										...i,
										subredditId: t
									}
								}
							}))(a(), t, p);
						b.ok && b.body && (null === (u = null === (c = b.body) || void 0 === c ? void 0 : c.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === u ? void 0 : u.ok) ? (e(C({
							subredditId: t,
							notificationLevel: i
						})), e(Object(o.f)({
							kind: m.b.SuccessCommunityGreen,
							text: Object(g.b)(i)
						}))) : e(Object(o.f)({
							kind: m.b.Error,
							text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				T = () => async (e, t, i) => {
					let {
						gqlContext: r
					} = i;
					const d = await (e => Object(n.a)(e, a))(r());
					if (d.ok && d.body && d.body.data) {
						const {
							data: t
						} = d.body, i = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(w({
							nodes: i
						}))
					} else e(I()), e(Object(o.f)({
						duration: o.a,
						kind: m.b.Error,
						text: s.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, L = e => {
					let {
						subredditId: t,
						subredditName: i
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: o
						} = r;
						var n, d;
						const a = await p(o(), t);
						if (a.ok && a.body && (null === (d = null === (n = a.body) || void 0 === n ? void 0 : n.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(_(t)), e(v(i));
						else {
							e(f(`error-unmuting-${t}`))
						}
					}
				}, R = e => {
					let {
						subredditName: t
					} = e;
					return async (e, i, r) => {
						let {
							gqlContext: n
						} = r;
						var d, a;
						const l = i(),
							c = Object(h.t)(l).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (c) {
							const t = c.name,
								i = `error-muting-duplicate-${t}`;
							return e(Object(o.f)({
								id: i,
								kind: m.b.Error,
								duration: o.a,
								text: s.fbt._("Sorry, r/{subreddit name} is already muted.", [s.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const p = await Object(S.a)(n(), t, !0),
							{
								data: b
							} = p.body,
							g = b && b.subreddit;
						if (!p.ok || null === g) {
							return e(((e, t) => Object(o.f)({
								id: e,
								kind: m.b.Error,
								duration: o.a,
								text: s.fbt._("Sorry, r/{subreddit name} isn't a community.", [s.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const v = g.id,
							w = await u(n(), v);
						if (w.ok && w.body && (null === (a = null === (d = w.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(x([g])), e(y(g.name));
						else {
							e(f(`error-muting-${v}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return p
			})), i.d(t, "a", (function() {
				return g
			})), i.d(t, "b", (function() {
				return h
			})), i.d(t, "d", (function() {
				return f
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				n = i("./src/reddit/actions/notificationsInbox/index.ts"),
				d = i("./src/reddit/actions/subreddit/constants.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				l = i("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				c = i("./src/reddit/models/Subreddit/index.ts"),
				u = i("./src/reddit/models/Toast/index.ts");
			const p = Object(r.a)(d.z),
				m = Object(r.a)(d.y),
				b = Object(r.a)(d.x),
				g = e => {
					switch (e) {
						case c.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case c.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case c.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				h = e => {
					switch (e) {
						case c.c.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case c.c.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case c.c.LOW:
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
					var v, S, w;
					e(m());
					const I = g(i),
						C = await Object(l.b)(y(), t, I);
					if ((null === (S = null === (v = C.error) || void 0 === v ? void 0 : v.fields) || void 0 === S ? void 0 : S.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(C.body) && (null === (w = C.body.data.updateSubredditNotificationSettings.errors) || void 0 === w ? void 0 : w.length)) return e(b()), e(Object(a.f)({
						kind: u.b.Error,
						text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					C.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: i
					})), e(p({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: i
							}
						}
					})), r && r(), e(d ? Object(a.f)(Object(a.e)(h(i), u.b.Undo, s.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(n.i)(t, d))) : Object(a.f)(Object(a.e)(h(i), u.b.SuccessCommunityGreen))))
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
				o = i("./node_modules/react-redux/es/index.js"),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/constants/elementIds.ts"),
				a = i("./src/reddit/controls/Button/index.tsx"),
				l = i("./src/reddit/selectors/experiments/shredditParity.ts"),
				c = i("./src/reddit/components/BackToTop/index.m.less"),
				u = i.n(c);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: m
			} = i("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: i,
					style: s
				} = e;
				const d = Object(o.e)(l.a);
				return r.a.createElement("div", {
					className: Object(n.a)(t, u.a.container),
					style: s
				}, r.a.createElement(a.a, p({
					className: u.a.button,
					onClick: () => b(i)
				}, d && {
					priority: a.c.Secondary,
					rplStyle: !0
				}), m._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, i) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				o = i("./node_modules/react-redux/es/index.js"),
				n = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				l = i("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				c = i.n(l),
				u = i("./src/reddit/constants/componentTestIds.ts"),
				p = i("./src/reddit/contexts/ApiContext.tsx"),
				m = i("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				b = i("./src/reddit/constants/tracking.ts"),
				g = i("./src/reddit/selectors/telemetry.ts");
			const h = "bottom_sheet";
			var f;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(f || (f = {}));
			var y = i("./src/reddit/hooks/useTracking.ts"),
				v = i("./src/reddit/icons/svgs/Close/index.tsx"),
				S = i("./src/reddit/models/Toast/index.ts"),
				w = i("./src/reddit/selectors/eligibleUXExperiences.ts"),
				I = i("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				C = i("./src/reddit/selectors/meta.ts"),
				_ = i("./src/redditGQL/types.ts");
			const {
				fbt: x
			} = i("./node_modules/fbt/lib/FbtPublic.js"), O = e => {
				const {
					gqlContext: t
				} = e, i = Object(o.d)(), l = Object(y.a)(), p = Object(o.e)(C.b), [w, I] = Object(s.useState)(!1), [O, k] = Object(s.useState)({}), [j, E] = Object(s.useState)({}), [P, T] = Object(s.useState)([]);
				let L = ["es"];
				const R = Object(s.useCallback)(async () => {
					const e = await Object(m.b)(t);
					e && (E(e.languages), T(e.preferences), I(!0))
				}, [t]);
				Object(s.useEffect)(() => {
					R()
				}, [R]);
				const N = e => {
						l("skip" === e ? (e => t => ({
							...Object(g.q)(t),
							source: h,
							action: b.c.CLICK,
							noun: f.SKIP,
							actionInfo: {
								...Object(g.d)(t),
								type: e
							}
						}))(p) : (e => t => ({
							...Object(g.q)(t),
							source: h,
							action: b.c.CLICK,
							noun: f.LATER,
							actionInfo: {
								...Object(g.d)(t),
								type: e
							}
						}))(p)), I(!1), i(Object(d.c)({
							experience: _.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					A = () => {
						const e = Object.keys(O).join();
						l(((e, t) => i => ({
							...Object(g.q)(i),
							source: h,
							action: b.c.CLICK,
							noun: f.ADD,
							actionInfo: {
								...Object(g.d)(i),
								reason: t,
								type: e
							}
						}))(p, e)), (async () => {
							var e;
							const s = O;
							P.map(e => s[e] = !0);
							const r = await Object(m.d)(t, s);
							(null === (e = null == r ? void 0 : r.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? i(Object(a.f)({
								kind: S.b.SuccessCommunity,
								text: x._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): i(Object(a.f)({
								kind: S.b.Error,
								text: x._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), I(!1), i(Object(d.c)({
							experience: _.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return L = L.filter(e => !P.includes(e)), w && 0 !== L.length ? (l((e => t => ({
					...Object(g.q)(t),
					source: h,
					action: b.c.VIEW,
					noun: b.b.SCREEN,
					actionInfo: {
						...Object(g.d)(t),
						type: e
					}
				}))(p)), i(Object(d.d)(_.db.LanguagePreferenceBottomSheet)), r.a.createElement("div", {
					className: c.a.PromptContainer
				}, r.a.createElement("div", {
					className: c.a.PromptClose
				}, r.a.createElement(v.a, {
					className: c.a.Close,
					onClick: () => N("skip"),
					"data-testid": u.e
				})), r.a.createElement("div", {
					className: c.a.PromptTitle
				}, x._("See content in more languages", null, {
					hk: "4uyzS1"
				})), r.a.createElement("div", {
					className: c.a.PromptSubtitle
				}, x._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === L.length ? r.a.createElement("div", {
					className: c.a.PromptRow,
					onClick: () => (e => {
						const t = O;
						t[e] = !0, k(t), A()
					})(L[0]),
					"data-testid": L[0]
				}, x._("Add {language}", [x._param("language", j[L[0]])], {
					hk: "2emiHZ"
				})) : null, r.a.createElement("div", {
					className: Object(n.a)(c.a.PromptRow, {
						[c.a.Dismiss]: !0
					}),
					onClick: () => N("later")
				}, x._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(p.b)(e => {
				var t;
				const {
					gqlContext: i
				} = e, s = Object(o.f)().getState();
				return (null === (t = Object(o.e)(e => Object(w.a)(e, {
					experience: _.db.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(I.b)(s) ? r.a.createElement(O, {
					gqlContext: i
				}) : null
			})
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
				o = i.n(r);
			t.a = s.a.div("container", o.a)
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
				o = i("./node_modules/react-redux/es/index.js"),
				n = i("./node_modules/reselect/es/index.js"),
				d = i("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				a = i("./src/lib/lessComponent.tsx"),
				l = i("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				c = i("./src/reddit/components/TrackingHelper/index.tsx"),
				u = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = i("./src/reddit/constants/experiments.ts"),
				m = i("./src/reddit/constants/location.ts"),
				b = i("./src/reddit/contexts/PageLayer/index.tsx"),
				g = i("./src/reddit/helpers/trackers/navigation.ts"),
				h = i("./src/reddit/selectors/experiments/countrySites.ts"),
				f = i("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				y = i("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = i("./src/reddit/selectors/meta.ts"),
				S = i("./src/redditGQL/types.ts"),
				w = i("./src/reddit/components/SidebarFooter/index.m.less"),
				I = i.n(w);
			const {
				fbt: C
			} = i("./node_modules/fbt/lib/FbtPublic.js"), _ = a.a.a("Link", I.a), x = Object(n.c)({
				countryCode: v.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: y.a
			}), O = Object(o.b)(x), k = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), j = e => {
				let {
					countryCode: t,
					reredditContent: i
				} = e;
				return r.a.createElement("div", {
					className: I.a.GreyRereddit
				}, i, !!m.c[t] && r.a.createElement("div", {
					className: I.a.LinkContainer
				}, r.a.createElement("div", {
					className: I.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), t === S.i.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: I.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: I.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), t === S.i.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: I.a.LinkContainer
				}, r.a.createElement("div", {
					className: I.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: I.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: I.a.Copyright
				}, C._("Reddit, Inc. © {year}. All rights reserved.", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = k(O(Object(c.c)(e => {
				const t = Object(o.f)().getState(),
					i = Object(h.a)(t, Object(d.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === p.kd.GreyRereddit || e.d2xPdpSideRailRecsVariant === p.kd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === p.kd.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(j, {
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
					return i.includes(t) || "en" === t ? r.a.createElement(_, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(g.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(u.a, {
					className: I.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!m.c[e.countryCode] && r.a.createElement("div", {
					className: I.a.LinkContainer
				}, r.a.createElement("div", {
					className: I.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === S.i.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: I.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: I.a.Column
				}, r.a.createElement(_, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === S.i.De && r.a.createElement(_, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: I.a.LinkContainer
				}, r.a.createElement("div", {
					className: I.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: I.a.Column
				}, r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(_, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: I.a.LinkContainer
				}, r.a.createElement("div", {
					className: I.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: I.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: I.a.Copyright
				}, C._("Reddit, Inc. © {year}. All rights reserved.", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), r.a.createElement(l.a, null))
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
				o = i.n(r),
				n = i("./node_modules/react/index.js"),
				d = i.n(n),
				a = i("./src/lib/constants/index.ts"),
				l = i("./src/reddit/components/BackToTop/index.tsx"),
				c = i("./src/reddit/components/SidebarFooter/index.tsx"),
				u = i("./src/reddit/constants/componentSizes.ts"),
				p = i("./src/reddit/contexts/PageLayer/index.tsx"),
				m = i("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = i.n(m),
				g = i("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
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
				S = v + f + 8,
				w = g.a.div("Container", b.a),
				I = g.a.wrapped(e => {
					let {
						className: t,
						isOverlay: i,
						...s
					} = e;
					return d.a.createElement(l.a, h({
						className: t,
						isOverlay: i,
						style: {
							top: `calc(100vh - ${i?y:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				C = e => {
					let {
						children: t,
						className: i,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: n
					} = e;
					return d.a.createElement("div", {
						className: Object(s.a)(i, {
							[b.a.BottomStickyStyles]: n,
							[b.a.StickyStyles]: !n && o && !r,
							[b.a.StickyStylesFakeOverlay]: !n && !!r
						})
					}, t)
				};
			class _ extends n.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
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
					}, a.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							hideFooter: o,
							pageLayer: n,
							recommendationsComponent: a,
							reredditButtons: l
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), p = this.state.isBottomSticky;
					return d.a.createElement(w, {
						className: r,
						innerRef: this.setWrapperRef
					}, d.a.createElement(C, {
						isFakeOverlay: i,
						isSticky: u,
						shouldStickToBottom: p
					}, t, s, a, !o && d.a.createElement(c.a, {
						reredditButtons: l
					})), !a && !this.props.hideBackToTop && d.a.createElement(I, {
						isOverlay: !!(null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const x = Object(p.v)();
			t.a = x(_)
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
				o = i("./node_modules/react-redux/es/index.js"),
				n = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = i("./src/reddit/components/SEOTitle/index.tsx"),
				c = i("./src/reddit/components/TrackingHelper/index.tsx"),
				u = i("./src/reddit/contexts/PageLayer/index.tsx"),
				p = i("./src/reddit/controls/Button/index.tsx"),
				m = i("./src/reddit/helpers/trackers/widgets.ts"),
				b = i("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = i("./src/reddit/selectors/experiments/topPosts.ts"),
				h = i("./src/reddit/selectors/structuredStyles.ts"),
				f = i("./src/reddit/selectors/user.ts"),
				y = i("./src/reddit/models/Theme/index.ts"),
				v = i("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const S = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				I = e => {
					const t = S(e);
					return Object(y.e)(t)
				},
				C = e => {
					const t = w(e);
					return Object(y.e)(t)
				};
			var _ = i("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = i.n(_);
			const {
				fbt: O
			} = i("./node_modules/fbt/lib/FbtPublic.js"), k = Object(u.v)(), j = Object(o.b)(() => Object(n.c)({
				forceRedditStyle: (e, t) => {
					const i = Object(u.o)(e, t) || void 0,
						s = t.redditStyle || Object(h.l)(e, {
							subredditId: i
						}),
						r = Object(f.fb)(e);
					return s || r
				},
				nigtmode: f.fb,
				subredditId: u.o,
				topPostVariant: g.d
			}));
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(m.b)(e, t)), this.setState({
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
					return e.backgroundColor = S(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = I(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.color = e.fill = C(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: i,
						forceRedditStyle: s,
						headerButton: o,
						id: n,
						onClick: a,
						onHeaderClick: c,
						title: u,
						titleClassName: m,
						truncateThreshold: b
					} = this.props, g = i ? x.a.widgetContentOnly : x.a.widgetContent, h = !s && this.props.styles, f = h ? this.getWidgetBackgroundStyles() : {}, y = h ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(d.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: s,
							[x.a.clickable]: !!a,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: a,
						style: f
					}, u && r.a.createElement("div", {
						className: Object(d.a)(x.a.widgetHeader, {
							[x.a.clickable]: !!c
						}),
						id: n,
						style: {
							...y,
							...this.props.headerStyles
						},
						onClick: c
					}, r.a.createElement("div", {
						className: Object(d.a)(x.a.widgetTitle, m)
					}, r.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), o), r.a.createElement("div", {
						className: Object(d.a)(g, {
							[x.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(p.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, O._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(j(Object(a.a)(Object(c.c)(E))))
		},
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return a
			})), i.d(t, "c", (function() {
				return l
			})), i.d(t, "d", (function() {
				return c
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./src/lib/makeGqlRequest/index.ts");
			var r, o = i("./src/redditGQL/operations/LanguageSelections.json"),
				n = i("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(r || (r = {}));
			const d = (e, t) => {
					const i = {
						allKey: e,
						suggestedKey: r.SUGGESTED_KEY
					};
					return Object(s.a)(t, {
						...o,
						variables: i
					})
				},
				a = async e => {
					const t = await d(r.ALL_KEY, e());
					if (!t.ok) return null;
					const i = t.body,
						s = null == i ? void 0 : i.data;
					return s ? (e => {
						const t = {},
							i = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: i
						}
					})(s) : null
				}, l = async (e, t, i) => {
					const s = await d(e, t());
					if (!s.ok) return null;
					const o = s.body,
						n = null == o ? void 0 : o.data;
					if (n) {
						return ((e, t, i) => {
							let s = null,
								r = [];
							const o = [],
								n = [],
								d = {},
								a = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									a[e] = !0
								})
							}
							for (let l = 0; l < t.suggested.length; l++) {
								const r = t.suggested[l];
								if (d[r.isoCode] = !0, i === r.isoCode) s = r;
								else {
									if (!e && a[r.isoCode]) continue; {
										const t = !!(e || !e && a[r.isoCode]);
										o.push({
											selected: t,
											...r
										})
									}
								}
							}
							for (let l = 0; l < t.all.length; l++) {
								const o = t.all[l];
								o.isoCode === i ? (s = o, n.push({
									selected: !0,
									...o
								})) : !e && a[o.isoCode] ? n.push({
									selected: !0,
									...o
								}) : d[o.isoCode] || r.push({
									selected: !(e || !a[o.isoCode]),
									...o
								})
							}
							if (r = o.concat(r), null === s) {
								const e = i.split("-").shift();
								for (let t = 0; t < r.length; t++)
									if (r[t].isoCode === e) {
										s = r[t], r.splice(t, 1);
										break
									}
							}
							return s && ((e || !e && a[s.isoCode]) && (s.selected = !0), r.unshift(s)), e || (r = n.concat(r)), {
								sortedLanguages: r
							}
						})(e === r.TOP_KEYS, n, i)
					}
					return null
				}, c = async (e, t) => {
					const i = await ((e, t) => {
						const i = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(s.a)(e, {
							...n,
							variables: i
						})
					})(e(), Object.keys(t));
					if (!i.ok) return null;
					const r = i.body;
					return null == r ? void 0 : r.data
				}
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
				return n
			})), i.d(t, "b", (function() {
				return d
			}));
			var s = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = i.n(r);
			const n = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				d = e => Object(s.a)(o.a.loadingBar, n(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			})), i.d(t, "b", (function() {
				return n
			}));
			var s = i("./src/reddit/selectors/telemetry.ts"),
				r = i("./src/telemetry/models/Event.ts");
			const o = e => {
					let {
						subredditId: t,
						postId: i
					} = e;
					return e => ({
						source: r.e.SubredditMuting,
						action: r.c.Mute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...s.q(e),
						...i && {
							post: {
								id: i
							}
						}
					})
				},
				n = e => {
					let {
						subredditId: t,
						postId: i
					} = e;
					return e => ({
						source: r.e.SubredditMuting,
						action: r.c.Unmute,
						noun: r.d.Subreddit,
						subreddit: {
							id: t
						},
						...s.q(e),
						...i && {
							post: {
								id: i
							}
						}
					})
				}
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
			var s, r, o = i("./src/reddit/constants/tracking.ts"),
				n = i("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const d = (e, t) => i => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(n.Ab)(i, {
						subredditId: e,
						widgetKind: t
					}),
					...n.q
				}),
				a = (e, t) => i => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: n.M(i, e),
					subreddit: n.nb(i),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...n.q(i)
				}),
				l = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...n.q(e)
				}),
				c = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: s.TOPIC,
					...n.q(t),
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
			var s, r, o = i("./node_modules/react/index.js"),
				n = i.n(o),
				d = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				l = i("./src/reddit/actions/pages/profilePrivate/index.ts"),
				c = i("./src/reddit/components/EmptyProfile/index.ts"),
				u = i("./src/reddit/components/JumpToContent/index.tsx"),
				p = i("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = i("./src/reddit/components/PostList/index.tsx"),
				b = i("./src/reddit/components/ProfileItemList/index.tsx"),
				g = i("./src/reddit/components/ProfileNavMenu/index.tsx"),
				h = i("./src/reddit/components/ProfileSidebar/index.tsx"),
				f = i("./node_modules/lodash/noop.js"),
				y = i.n(f),
				v = i("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				S = i("./src/reddit/actions/post.ts"),
				w = i("./src/reddit/components/TrackingHelper/index.tsx"),
				I = i("./src/reddit/components/PostList/Placeholder.tsx"),
				C = i("./src/reddit/actions/postList.ts"),
				_ = i("./src/reddit/contexts/PageLayer/index.tsx"),
				x = i("./src/reddit/helpers/isComment.ts"),
				O = i("./src/reddit/helpers/isPost.ts"),
				k = i("./src/reddit/helpers/trackers/post.ts"),
				j = (i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./src/lib/objectSelector/index.ts")),
				E = i("./src/reddit/constants/adEvents.ts"),
				P = i("./src/reddit/models/Flair/index.ts"),
				T = i("./src/reddit/models/PostCreationForm/index.ts");
			! function(e) {
				e.ANY_TOTAL_VIEW_TIME = "a", e.FIFTY_TOTAL_VIEW_TIME = "b", e.FULL_TOTAL_VIEW_TIME = "c", e.ANY_CONTINUOUS_VIEW_TIME = "d", e.FIFTY_CONTINUOUS_VIEW_TIME = "e", e.FULL_CONTINUOUS_VIEW_TIME = "f", e.GLOBAL_COUNT = "r", e.GROUP_M_VIEWABLE = "g", e.AD_LOAD_TIME = "i", e.TIMESTAMP = "t", e.WAS_EVER_VIEWABLE = "o", e.LARGE_AD_FULL_VIEW = "q", e.HEIGHT = "h", e.WIDTH = "w", e.SCREEN_HEIGHT = "sh", e.SCREEN_WIDTH = "sw"
			}(s || (s = {})),
			function(e) {
				e.IS_VIDEO_AD = "va", e.TOTAL_MRC_VIEWABLE_TIME = "vb", e.VIDEO_AD_DURATION = "vc", e.TOTAL_PLAY_TIME = "vd", e.VOLUME = "ve", e.IS_VISIBLE = "vg", e.VIDEO_HEIGHT = "vh", e.TOTAL_AUDIBLE_TIME = "vi", e.VIDEO_WIDTH = "vw", e.WAS_FULL_SCREEN = "vq", e.HALF_DURATION_80_IN_VIEW_AUDIBLE = "vr", e.VIDEO_STATE_Q0 = "vs", e.VIDEO_STATE_Q1 = "vt", e.VIDEO_STATE_Q2 = "vu", e.VIDEO_STATE_Q3 = "vv", e.VIDEO_STATE_Q4 = "vx", e.FULL_IN_VIEW_AUDIBLE_TIME = "vy", e.FULL_IN_VIEW_TIME = "vz", e.WAS_FULL_IN_VIEW_1SEC = "xa", e.FIFTY_CONTINUOUS_VIDEO_VIEW_TIME = "xb", e.HAS_SEEKED = "xc"
			}(r || (r = {}));
			var L = i("./node_modules/uuid/dist/esm-browser/v4.js");

			function R() {
				return `https://alb.reddit.com/cr?testUuid=${Object(L.a)()}`
			}

			function N() {
				return `https://alb.reddit.com/i.gif?z=${Object(L.a)()}`
			}
			i("./src/reddit/models/Subreddit/index.ts"), i("./src/reddit/models/Subreddit/mock.ts");
			var A = i("./src/reddit/models/Vote/index.ts");

			function G(e) {
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
					voteState: A.a.notVoted,
					...e
				}
			}
			const F = e => {
					var t;
					const i = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "ad";
					return G({
						id: `t3_${i}`,
						postId: `t3_${i}`,
						belongsTo: {
							id: `t5_${i}`,
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
							type: E.a.Impression
						}],
						source: {
							displayText: "ads.reddit.com",
							url: "https://ads.reddit.com/",
							outboundUrl: R()
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
							rteMode: T.i.RICH_TEXT,
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
							rteMode: T.i.RICH_TEXT,
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
							rteMode: T.i.RICH_TEXT,
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
				M = (G({
					authorIsBlocked: !0,
					media: {
						type: "text",
						rteMode: T.i.RICH_TEXT,
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
						rteMode: T.i.RICH_TEXT,
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
								url: N(),
								type: E.a.GalleryItemImpression
							}],
							outboundUrl: R(),
							id: 43313568
						}, {
							mediaId: "nzaab70ltrx61",
							displayUrl: "www.time.gov",
							adEvents: [{
								url: N(),
								type: E.a.GalleryItemImpression
							}],
							outboundUrl: R(),
							caption: "no caption",
							id: 43313569
						}, {
							mediaId: "irmwg59mtrx61",
							displayUrl: "https://alb.reddit.com/cr",
							callToAction: "Apply Now",
							adEvents: [{
								url: N(),
								type: E.a.GalleryItemImpression
							}],
							outboundUrl: R(),
							caption: "Something else",
							id: 43313570
						}]
					},
					crossPostParentId: null,
					crossPostRootId: null,
					numCrossposts: 0,
					isCrosspostable: !1
				}),
				U = (F({
					id: "galleryad",
					media: M
				}), F({
					id: "shoppingad",
					subcaption: "$50.00",
					media: M
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
				}), Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models;
					return D(e, {
						listingKey: i
					}).filter(e => {
						if (Object(x.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				})),
				D = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.pages.profileOverview.chrono.ids[i];
					return s ? [...s] : []
				}),
				H = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return U(e, {
						listingKey: i
					}).reduce((t, i) => {
						const s = Object(x.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				z = (Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models;
					return z(e, {
						listingKey: i
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return U(e, {
						listingKey: i
					}).map(t => Object(x.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				W = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models,
						r = z(e, {
							listingKey: i
						}),
						o = {};
					return r.forEach(e => o[e] = s[e]), o
				}),
				V = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.features.comments.models,
						r = U(e, {
							listingKey: i
						}),
						o = {};
					return r.forEach(e => !!Object(x.a)(e) && (o[e] = s[e])), o
				});
			var Y = i("./src/reddit/selectors/subreddit.ts"),
				q = i("./src/reddit/selectors/tracking.ts"),
				J = i("./src/reddit/selectors/user.ts");
			const K = (e, t) => (e, t, i) => Object(x.a)(e) ? 120 : 47,
				Q = (Object(_.v)(), {
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
					currentUser: J.m,
					layout: _.U,
					loadMore: (e, t) => {
						let {
							listingKey: i
						} = t;
						return e.pages.profileOverview.chrono.loadMore[i]
					},
					subredditsById: Y.eb,
					viewportDataLoaded: q.b,
					commentsById: V,
					itemIds: U,
					itemIdToPostId: H,
					postsById: W,
					estimateItemHeight: K
				}),
				Z = Object(a.c)(Q);
			Object(d.b)(Z, (e, t) => ({
				onBottomViewed: (t, i) => e(C.c(t, i)),
				openPost: t => {
					e(S.K(t))
				},
				trackOnPostEnteredViewport: (t, i) => {
					Object(O.a)(t) && e(S.M(t))
				},
				trackOnPostExitedViewport: (t, i, s) => {
					Object(O.a)(t) && e(S.N(t, s))
				},
				fireAdPixelsOfType: y.a
			}), (e, t, i) => ({
				...e,
				...t,
				...i,
				postClickEventFactory: (e, t) => Object(k.n)(e, t)
			}));
			var X = i("./src/reddit/featureFlags/index.ts"),
				$ = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				ee = i("./src/reddit/models/Profile/index.ts");
			const te = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profilePrivatePage.api.pending[i]
				},
				ie = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profilePrivatePage.api.error[i]
				},
				se = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return (e.profilePrivatePage.ids[i] || []).reduce((t, i) => {
						const s = Object(x.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				re = Object(_.v)(),
				oe = Object(_.v)(),
				ne = {
					apiError: ie,
					apiPending: te,
					layout: _.U,
					loadMore: (e, t) => {
						let {
							listingKey: i
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[i] || !e.profilePrivatePage.pageInfo[i].hasNextPage) return null;
						const s = e.profilePrivatePage.ids[i];
						return {
							token: s[s.length - 1],
							dist: $.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !te(e, t) && !ie(e, t),
					isLoggedIn: J.S
				},
				de = Object(a.c)({
					...ne,
					currentUser: J.m,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: i
						} = t;
						return -1 === i.indexOf(ee.b.Saved) && -1 === i.indexOf(ee.b.ReceivedGildings) && -1 === i.indexOf(ee.b.GivenGildings) ? [] : e.profilePrivatePage.ids[i] || []
					},
					itemIdToPostId: se,
					estimateItemHeight: K
				}),
				ae = Object(a.c)({
					...ne,
					measureScrollFPS: X.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: i
						} = t;
						return i.indexOf(ee.b.Saved) > -1 || i.indexOf(ee.b.ReceivedGildings) > -1 || i.indexOf(ee.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[i] || []
					},
					postListPlaceholderComponent: () => I.a
				}),
				le = e => ({
					onBottomViewed: y.a,
					openPost: t => {
						e(S.K(t))
					},
					trackOnPostEnteredViewport: y.a,
					fireAdPixelsOfType: (t, i) => {
						e(S.y(t, i))
					}
				}),
				ce = Object(d.b)(de, le, (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(k.n)(e, t)
				})),
				ue = Object(d.b)(ae, e => ({
					...le(e),
					onFirstPostChanged: y.a,
					adBrandSafetyStatusReceived: y.a,
					trackOnPostExitedViewport: y.a
				}), (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(k.n)(e, t),
					postComponentForLayout: v.d
				}));
			var pe = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				me = i("./src/reddit/helpers/trackers/screenview.ts"),
				be = i("./src/reddit/layout/page/Listing/index.tsx"),
				ge = i("./src/reddit/selectors/experiments/econ/index.ts"),
				he = i("./src/reddit/pages/ProfilePrivate/index.m.less"),
				fe = i.n(he);
			const ye = Object(a.c)({
					currentUser: J.m,
					isAwardsSunsetEnabled: ge.d
				}),
				ve = Object(d.b)(ye, (e, t) => ({
					onLoadMore: () => e(Object(l.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				Se = (e => Object(w.c)(re(ce(e))))(b.a),
				we = (e => Object(w.c)(oe(ue(e))))(m.a);
			class Ie extends n.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = ee.a[e]();
					return () => n.a.createElement(c.d, {
						text: t
					})
				}
				renderContent() {
					const {
						currentUser: e,
						isAwardsSunsetEnabled: t,
						match: {
							params: {
								listingType: i,
								profileName: s
							}
						}
					} = this.props;
					if (t && (i === ee.b.ReceivedGildings || i === ee.b.GivenGildings)) return null;
					const r = s.toLowerCase(),
						o = Object(pe.c)(r, i);
					return e && e.displayText && e.displayText.toLowerCase() === r ? i === ee.b.Saved || i === ee.b.ReceivedGildings || i === ee.b.GivenGildings ? n.a.createElement(Se, {
						className: fe.a.mixedList,
						itemComponent: p.a,
						listingKey: o,
						noPostsComponent: this.renderNoPosts(i),
						listingName: r,
						listingViewed: Object(me.r)(o),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(we, {
						listingKey: o,
						noPostsComponent: this.renderNoPosts(i),
						listingName: r,
						listingViewed: Object(me.r)(o),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(c.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return n.a.createElement(be.a, {
						fitPageToContent: !0,
						contentNavBar: n.a.createElement(g.a, {
							profileName: e
						}),
						content: n.a.createElement(n.a.Fragment, null, n.a.createElement(u.a, null), this.renderContent()),
						sidebar: n.a.createElement(h.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ve(Ie)
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			}));
			var s = i("./src/reddit/constants/experiments.ts"),
				r = i("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.I
				}) === s.Rd
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			})), i.d(t, "b", (function() {
				return p
			}));
			var s = i("./src/reddit/constants/experiments.ts"),
				r = i("./src/reddit/helpers/chooseVariant/index.ts"),
				o = i("./src/reddit/selectors/experiments/index.ts"),
				n = i("./src/reddit/selectors/experiments/utils.ts"),
				d = i("./src/reddit/selectors/meta.ts"),
				a = i("./node_modules/reselect/es/index.js");
			const l = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(d.h)(e) && Object(o.f)(e),
					experimentName: s.pc
				}), n.a),
				c = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(d.h)(e) && Object(o.f)(e),
					experimentName: s.oc
				}), n.a),
				u = Object(a.a)(l, c, (e, t) => e || t),
				p = Object(a.a)(l, c, (e, t) => !(!e && !t))
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"42616342e99c"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"48cc7f05ceee"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"e15294d413b1"}')
		},
		"./src/redditGQL/operations/ProfileHistoryPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"75c9f18c044f"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"5e560e39ad16"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"e355dad0c712"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"5b90e18285c7"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.7ce3efec476ce7f3c44e.js.map