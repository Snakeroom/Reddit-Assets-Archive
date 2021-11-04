// https://www.redditstatic.com/desktop2x/ProfilePrivate.3ffe847b8dad3388c26f.js
// Retrieved at 11/4/2021, 7:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "privateListingPending", (function() {
				return U
			})), i.d(t, "privateMixedListingLoaded", (function() {
				return D
			})), i.d(t, "privatePostListingLoaded", (function() {
				return H
			})), i.d(t, "privateListingFailed", (function() {
				return q
			})), i.d(t, "profilePrivateRequested", (function() {
				return Q
			})), i.d(t, "morePending", (function() {
				return W
			})), i.d(t, "moreMixedLoaded", (function() {
				return X
			})), i.d(t, "morePostLoaded", (function() {
				return z
			})), i.d(t, "moreFailed", (function() {
				return V
			})), i.d(t, "moreProfilePrivateRequested", (function() {
				return J
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/externalAccount.ts"),
				r = i("./src/reddit/actions/pages/profileShared.ts"),
				d = i("./src/reddit/actions/profile/index.ts"),
				n = i("./src/lib/makeGqlRequest/index.ts"),
				l = i("./src/redditGQL/operations/ProfileDownvoted.json"),
				a = i("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = i("./src/redditGQL/operations/ProfileHidden.json"),
				p = i("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				u = i("./src/redditGQL/operations/ProfileSaved.json"),
				m = i("./src/redditGQL/operations/ProfileUpvoted.json");
			var g = i("./src/reddit/models/Comment/index.ts"),
				b = i("./src/reddit/models/Post/index.ts"),
				h = i("./src/reddit/models/Profile/index.ts"),
				v = i("./src/lib/constants/index.ts"),
				f = i("./src/reddit/helpers/graphql/helpers.ts"),
				y = i("./src/reddit/helpers/graphql/normalizeModeratorPartFromGql/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				P = i("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				I = i("./src/reddit/models/PostCreationForm/index.ts"),
				C = i("./src/reddit/models/User/index.ts");
			const j = e => ({
					richtextContent: e.content && e.content.richtext ? Object(f.f)(e.content.richtext) : {},
					type: "rtjson",
					rteMode: I.i.RICH_TEXT
				}),
				O = (e, t) => !(!e || !t || Object(w.e)(t) || !t.authorInfo) && Object(P.b)(e) === Object(P.b)(t.authorInfo),
				x = e => e && !Object(w.e)(e) && e.authorInfo ? Object(P.b)(e.authorInfo) : null;
			var k = e => {
					const {
						associatedAward: t,
						authorInfo: i,
						awardings: s,
						content: o,
						createdAt: r,
						distinguishedAs: d,
						editedAt: n,
						id: l,
						isGildable: a,
						isScoreHidden: c,
						isStickied: p,
						isSaved: u,
						parent: m,
						permalink: g,
						postInfo: h,
						score: w,
						voteState: I
					} = e, k = "ADMIN" === d, S = "MODERATOR" === d, _ = s ? Object(f.b)(s) : void 0, T = i && i.__typename === C.c.AvailableRedditor && i.isCakeDayNow || !1, R = i && i.__typename === C.c.AvailableRedditor && i.isPremiumMember || !1, L = {
						allAwardings: _,
						associatedAward: t,
						author: i && Object(P.b)(i) || v.D,
						authorId: i && i.id || "",
						body: o && o.html || "",
						bodyMD: o && o.markdown || "",
						created: Object(f.e)(r) / 1e3,
						distinguishType: d || "",
						editedAt: Object(f.e)(n) / 1e3 || null,
						id: l,
						isAdmin: k,
						isAuthorCakeday: T,
						isAuthorPremium: R,
						isGildable: a,
						isMod: S,
						isOp: O(i, h),
						isSaved: u,
						isScoreHidden: c,
						isStickied: p,
						markdown: o && o.markdown || "",
						media: j(e),
						parentId: m && m.id,
						permalink: `https://www.reddit.com${g}`,
						postAuthor: x(h),
						postId: h && h.id || "",
						postTitle: h && h.title || null,
						score: w || 0,
						subredditId: "",
						voteState: Object(f.d)(I),
						...Object(y.a)(e),
						collapsed: !1,
						collapsedReason: null,
						collapsedBecauseCrowdControl: !1,
						collapsedReasonCode: null,
						isDeleted: !1,
						isLocked: !1,
						deletedBy: null,
						sendReplies: !0,
						modReports: [],
						userReports: [],
						isSystem: !1
					};
					return e.postInfo && Object(b.n)(e.postInfo) ? L.subredditId = e.postInfo.subreddit.id : e.postInfo && Object(b.l)(e.postInfo) && (L.subredditId = e.postInfo.profile.id), L
				},
				S = i("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				_ = i("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				T = i("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				R = i("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				L = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var F = e => {
					const {
						listingType: t,
						rawData: i,
						includeIdentity: s,
						includeModerated: o
					} = e, {
						identity: r
					} = i, d = (e => {
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
						return e !== h.a.Saved && e !== h.a.ReceivedGildings && e !== h.a.GivenGildings || (t.comments = {}), t
					})(t);
					if (!r) return d;
					if (s && (d.account = Object(P.a)(r) || null, d.preferences = Object(T.a)(r.preferences, r.interactions) || null, r.redditor.profile && (d.profiles[r.redditor.profile.id] = Object(R.a)(r.redditor.profile))), o && r.redditor && r.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: i
						} = Object(R.b)(r.redditor.moderatedSubreddits);
						d.moderatedPageInfo = t, d.moderatedSubredditIds = e, d.subreddits = i
					}
					const n = ((e, t) => {
						switch (t) {
							case h.a.Downvoted:
								return e.identity.downvotedPosts;
							case h.a.Hidden:
								return e.identity.hiddenPosts;
							case h.a.Saved:
								return e.identity.saved;
							case h.a.Upvoted:
								return e.identity.upvotedPosts;
							case h.a.ReceivedGildings:
								return e.identity.receivedGildings;
							case h.a.GivenGildings:
								return e.identity.givenGildings
						}
					})(i, t);
					if (!n) return d;
					d.pageInfo = n.pageInfo;
					for (const {
							node: l
						} of n.edges) {
						let e;
						if (l.__typename === g.d.Comment) {
							const t = k(l);
							if (d.comments || (d.comments = {}), d.comments[t.id] = t, d.itemIds || (d.itemIds = []), d.itemIds.push(t.id), l.authorFlair && (d.authorFlair[t.subredditId] || (d.authorFlair[t.subredditId] = {}), d.authorFlair[t.subredditId][t.author] = Object(S.a)(l.authorFlair)[0]), e = l.postInfo, l.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(w.a)(l.postInfo);
								d.posts[e.id] = e, t && (d.posts[t.id] = t)
							}
						} else e = l, d.itemIds || (d.itemIds = []), d.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: i
						} = e && Object(w.a)(e);
						d.posts[t.id] = t, i && (d.posts[i.id] = i), Object(b.i)(e) || Object(b.j)(e) || (e.authorFlair && (d.authorFlair[t.belongsTo.id] || (d.authorFlair[t.belongsTo.id] = {}), d.authorFlair[t.belongsTo.id][t.author] = Object(S.a)(e.authorFlair)[0]), Object(b.l)(e) ? d.profiles[e.profile.id] || (d.profiles[e.profile.id] = Object(R.a)(e.profile)) : Object(b.n)(e) && (d.subreddits[e.subreddit.id] || (d.subreddits[e.subreddit.id] = Object(L.a)(e.subreddit)), d.postFlair[e.subreddit.id] || (d.postFlair[e.subreddit.id] = Object(_.a)(e.subreddit))))
					}
					return d
				},
				G = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				A = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				B = i("./src/lib/initializeClient/installReducer.ts"),
				N = i("./src/reddit/reducers/features/comments/index.ts");
			Object(B.a)({
				features: {
					comments: N.a
				}
			});
			const E = {
					[h.a.Downvoted]: (e, t) => Object(n.a)(e, {
						...l,
						variables: t
					}),
					[h.a.Hidden]: (e, t) => Object(n.a)(e, {
						...c,
						variables: t
					}),
					[h.a.Saved]: (e, t) => Object(n.a)(e, {
						...u,
						variables: t
					}),
					[h.a.Upvoted]: (e, t) => Object(n.a)(e, {
						...m,
						variables: t
					}),
					[h.a.ReceivedGildings]: (e, t) => Object(n.a)(e, {
						...p,
						variables: t
					}),
					[h.a.GivenGildings]: (e, t) => Object(n.a)(e, {
						...a,
						variables: t
					})
				},
				M = (e, t) => {
					switch (e) {
						case h.a.Downvoted:
						case h.a.Hidden:
						case h.a.Saved:
						case h.a.Upvoted:
						case h.a.ReceivedGildings:
						case h.a.GivenGildings:
							return t.body.data
					}
				},
				K = e => {
					switch (e.listingType) {
						case h.a.Downvoted:
						case h.a.Hidden:
						case h.a.Saved:
						case h.a.Upvoted:
						case h.a.ReceivedGildings:
						case h.a.GivenGildings:
							return F(e)
					}
				},
				U = Object(s.a)(A.b),
				D = Object(s.a)(A.c),
				H = Object(s.a)(A.i),
				q = Object(s.a)(A.a),
				Q = e => async (t, i, s) => {
					const {
						profileName: n,
						listingType: l
					} = e.params, a = i(), c = Object(G.b)(n.toLowerCase(), l), p = a.profilePrivatePage.ids[c] && a.profilePrivatePage.ids[c].length > 0, u = !!a.profilePrivatePage.api.error[c];
					if (a.profilePrivatePage.api.pending[c] || p && !u) return;
					const {
						account: m
					} = a.user, g = !m, b = !(m && m.displayText && a.profiles.moderated.models[m.displayText.toLowerCase()] && a.profiles.moderated.models[m.displayText.toLowerCase()].length);
					t(U({
						listingKey: c
					}));
					const v = {
							includeIdentity: g,
							includeModerated: b,
							first: A.h,
							after: null
						},
						f = await E[l](s.gqlContext(), v);
					if (f.ok && f.body) {
						const e = K({
							rawData: M(l, f),
							listingType: l,
							includeIdentity: g,
							includeModerated: b
						});
						l === h.a.Saved || l === h.a.ReceivedGildings || l === h.a.GivenGildings ? await t(D({
							listingKey: c,
							profileName: n,
							...e
						})) : await t(H({
							listingKey: c,
							profileName: n,
							...e
						})), await Promise.all([t(Object(r.d)(n)), t(Object(o.o)(n)), t(Object(d.d)(n))])
					} else t(q({
						listingKey: c,
						error: f.error
					}))
				}, W = Object(s.a)(A.f), X = Object(s.a)(A.e), z = Object(s.a)(A.g), V = Object(s.a)(A.d), J = e => async (t, i, s) => {
					const o = i(),
						r = o.user.account && o.user.account.displayText && o.user.account.displayText.toLowerCase();
					if (!r) return;
					const d = Object(G.b)(r, e);
					if (!o.profilePrivatePage.ids[d] || !o.profilePrivatePage.ids[d].length || !o.profilePrivatePage.pageInfo || !o.profilePrivatePage.pageInfo[d].hasNextPage || o.profilePrivatePage.api.error[d] || o.profilePrivatePage.api.pending[d]) return;
					const n = {
						includeIdentity: !1,
						includeModerated: !1,
						after: o.profilePrivatePage.pageInfo[d].endCursor,
						first: A.h
					};
					t(W({
						listingKey: d
					}));
					const l = await E[e](s.gqlContext(), n);
					if (l.ok && l.body) {
						const i = K({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: l.body.data
						});
						e === h.a.Saved || e === h.a.ReceivedGildings || e === h.a.GivenGildings ? await t(X({
							listingKey: d,
							profileName: r,
							...i
						})) : await t(z({
							listingKey: d,
							profileName: r,
							...i
						}))
					} else t(V({
						listingKey: d,
						error: l.error
					}))
				}
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return f
			}));
			var s = i("./node_modules/lodash/noop.js"),
				o = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				n = i("./src/reddit/actions/post.ts"),
				l = i("./src/reddit/actions/postList.ts"),
				a = i("./src/reddit/components/TrackingHelper/index.tsx"),
				c = i("./src/reddit/contexts/PageLayer/index.tsx"),
				p = i("./src/reddit/helpers/isComment.ts"),
				u = i("./src/reddit/helpers/isPost.ts"),
				m = i("./src/reddit/helpers/trackers/post.ts"),
				g = i("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				b = i("./src/reddit/selectors/subreddit.ts"),
				h = i("./src/reddit/selectors/tracking.ts"),
				v = i("./src/reddit/selectors/user.ts");
			const f = (e, t) => (e, t, i) => Object(p.a)(e) ? 120 : 47,
				y = Object(c.u)(),
				w = {
					apiError: g.a,
					apiPending: g.b,
					currentUser: v.k,
					layout: c.Q,
					loadMore: g.d,
					subredditsById: b.X,
					viewportDataLoaded: h.a,
					commentsById: g.g,
					itemIds: g.f,
					itemIdToPostId: g.e,
					postsById: g.h,
					estimateItemHeight: f
				},
				P = Object(d.c)(w),
				I = Object(r.b)(P, (e, t) => ({
					onBottomViewed: (t, i) => e(l.c(t, i)),
					openPost: t => {
						e(n.K(t))
					},
					trackOnPostEnteredViewport: (t, i) => {
						Object(u.a)(t) && e(n.N(t))
					},
					trackOnPostExitedViewport: (t, i, s) => {
						Object(u.a)(t) && e(n.O(t, s))
					},
					fireAdPixelsOfType: o.a
				}), (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(m.i)(e, t)
				}));
			t.a = e => Object(a.c)(y(I(e)))
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
				o = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				n = i("./src/reddit/actions/pages/profilePrivate/index.ts"),
				l = i("./src/reddit/components/EmptyProfile/index.ts"),
				a = i("./src/reddit/components/JumpToContent/index.tsx"),
				c = i("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				p = i("./src/reddit/components/PostList/index.tsx"),
				u = i("./src/reddit/components/ProfileItemList/index.tsx"),
				m = i("./src/reddit/components/ProfileNavMenu/index.tsx"),
				g = i("./src/reddit/components/ProfileSidebar/index.tsx"),
				b = i("./node_modules/lodash/noop.js"),
				h = i.n(b),
				v = i("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				f = i("./src/reddit/actions/post.ts"),
				y = i("./src/reddit/components/TrackingHelper/index.tsx"),
				w = i("./src/reddit/components/PostList/Placeholder.tsx"),
				P = i("./src/reddit/connectors/OverviewChronoList/index.ts"),
				I = i("./src/reddit/contexts/PageLayer/index.tsx"),
				C = i("./src/reddit/featureFlags/index.ts"),
				j = i("./src/reddit/helpers/trackers/post.ts"),
				O = i("./src/lib/objectSelector/index.ts"),
				x = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				k = i("./src/reddit/helpers/isComment.ts"),
				S = i("./src/reddit/models/Profile/index.ts");
			const _ = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.pending[t],
				T = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.error[t],
				R = Object(O.a)((e, {
					listingKey: t
				}) => {
					return (e.profilePrivatePage.ids[t] || []).reduce((t, i) => {
						const s = Object(k.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				});
			var L = i("./src/reddit/selectors/user.ts");
			const F = Object(I.u)(),
				G = Object(I.u)(),
				A = {
					apiError: T,
					apiPending: _,
					layout: I.Q,
					loadMore: (e, {
						listingKey: t
					}) => {
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[t] || !e.profilePrivatePage.pageInfo[t].hasNextPage) return null;
						const i = e.profilePrivatePage.ids[t];
						return {
							token: i[i.length - 1],
							dist: x.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !_(e, t) && !T(e, t)
				},
				B = Object(d.c)({
					...A,
					currentUser: L.k,
					commentsById: e => e.features.comments.models,
					itemIds: (e, {
						listingKey: t
					}) => -1 === t.indexOf(S.a.Saved) && -1 === t.indexOf(S.a.ReceivedGildings) && -1 === t.indexOf(S.a.GivenGildings) ? [] : e.profilePrivatePage.ids[t] || [],
					itemIdToPostId: R,
					estimateItemHeight: P.b
				}),
				N = Object(d.c)({
					...A,
					measureScrollFPS: C.d.measureScrollFPS,
					postIds: (e, {
						listingKey: t
					}) => t.indexOf(S.a.Saved) > -1 || t.indexOf(S.a.ReceivedGildings) > -1 || t.indexOf(S.a.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[t] || [],
					postListPlaceholderComponent: () => w.a
				}),
				E = e => ({
					onBottomViewed: h.a,
					openPost: t => {
						e(f.K(t))
					},
					trackOnPostEnteredViewport: h.a,
					fireAdPixelsOfType: (t, i) => {
						e(f.z(t, i))
					}
				}),
				M = Object(r.b)(B, E, (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(j.i)(e, t)
				})),
				K = Object(r.b)(N, e => ({
					...E(e),
					onFirstPostChanged: h.a,
					adBrandSafetyStatusReceived: h.a,
					trackOnPostExitedViewport: h.a
				}), (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(j.i)(e, t),
					postComponentForLayout: v.b
				}));
			var U = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				D = i("./src/reddit/helpers/trackers/screenview.ts"),
				H = i("./src/reddit/layout/page/Listing/index.tsx"),
				q = i("./src/reddit/pages/ProfilePrivate/index.m.less"),
				Q = i.n(q);
			const W = Object(d.c)({
					currentUser: L.k
				}),
				X = Object(r.b)(W, (e, t) => ({
					onLoadMore: () => e(Object(n.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				z = (e => Object(y.c)(F(M(e))))(u.a),
				V = (e => Object(y.c)(G(K(e))))(p.a);
			class J extends o.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = e === S.a.GivenGildings ? "given any awards" : e === S.a.ReceivedGildings ? "received any awards" : `${e} anything`;
					return () => o.a.createElement(l.d, {
						verb: t
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
					} = this.props, s = i.toLowerCase(), r = Object(U.b)(s, t);
					return e && e.displayText && e.displayText.toLowerCase() === s ? t === S.a.Saved || t === S.a.ReceivedGildings || t === S.a.GivenGildings ? o.a.createElement(z, {
						className: Q.a.mixedList,
						itemComponent: c.a,
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(D.s)(r),
						onLoadMore: this.onLoadMore
					}) : o.a.createElement(V, {
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(D.s)(r),
						onLoadMore: this.onLoadMore
					}) : o.a.createElement(l.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return o.a.createElement(H.a, {
						fitPageToContent: !0,
						contentNavBar: o.a.createElement(m.a, {
							profileName: e
						}),
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(a.a, null), this.renderContent()),
						sidebar: o.a.createElement(g.a, {
							profileName: e
						})
					})
				}
			}
			t.default = X(J)
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, i) {
			"use strict";
			i.d(t, "f", (function() {
				return c
			})), i.d(t, "e", (function() {
				return u
			})), i.d(t, "h", (function() {
				return g
			})), i.d(t, "g", (function() {
				return b
			})), i.d(t, "a", (function() {
				return h
			})), i.d(t, "b", (function() {
				return v
			})), i.d(t, "d", (function() {
				return f
			})), i.d(t, "c", (function() {
				return y
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./src/lib/objectSelector/index.ts"),
				o = i("./src/reddit/models/Flair/index.ts"),
				r = i("./src/reddit/models/PostCreationForm/index.ts"),
				d = i("./src/reddit/models/Vote/index.ts");
			const n = {
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
						type: o.f.Text,
						text: "hello world"
					}, {
						type: o.f.Spoiler,
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
						type: o.f.Text,
						text: "hello world"
					}, {
						type: o.f.Spoiler,
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
						type: o.f.Text,
						text: "hello world"
					}, {
						type: o.f.Spoiler,
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
						type: o.f.Text,
						text: "hello world"
					}, {
						type: o.f.Spoiler,
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
			l = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: r.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, d.a.notVoted;
			var l;
			var a = i("./src/reddit/helpers/isComment.ts");
			const c = Object(s.a)((e, {
					listingKey: t
				}) => {
					const i = e.posts.models;
					return p(e, {
						listingKey: t
					}).filter(e => {
						if (Object(a.a)(e)) return !0; {
							const t = i[e];
							return t && !t.hidden
						}
					})
				}),
				p = Object(s.a)((e, {
					listingKey: t
				}) => {
					const i = e.pages.profileOverview.chrono.ids[t];
					return i ? [...i] : []
				}),
				u = Object(s.a)((e, {
					listingKey: t
				}) => {
					return c(e, {
						listingKey: t
					}).reduce((t, i) => {
						const s = Object(a.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				m = (Object(s.a)((e, {
					listingKey: t
				}) => {
					const i = e.posts.models;
					return m(e, {
						listingKey: t
					}).filter(e => {
						const t = i[e];
						return t && !t.hidden
					})
				}), Object(s.a)((e, {
					listingKey: t
				}) => {
					return c(e, {
						listingKey: t
					}).map(t => Object(a.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				g = Object(s.a)((e, {
					listingKey: t
				}) => {
					const i = e.posts.models,
						s = m(e, {
							listingKey: t
						}),
						o = {};
					return s.forEach(e => o[e] = i[e]), o
				}),
				b = Object(s.a)((e, {
					listingKey: t
				}) => {
					const i = e.features.comments.models,
						s = c(e, {
							listingKey: t
						}),
						o = {};
					return s.forEach(e => !!Object(a.a)(e) && (o[e] = i[e])), o
				}),
				h = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.error[t],
				v = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.pending[t],
				f = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.loadMore[t],
				y = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.fetchedTokens[t]
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"7bd14eddc29d"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"498884b4a78b"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"48f7272131af"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"e861022244dc"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"bfbfad1b37d0"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"7165a33d4b04"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.3ffe847b8dad3388c26f.js.map