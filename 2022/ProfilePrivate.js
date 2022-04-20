// https://www.redditstatic.com/desktop2x/ProfilePrivate.1e02e964b041055488df.js
// Retrieved at 4/20/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "privateListingPending", (function() {
				return R
			})), i.d(t, "privateMixedListingLoaded", (function() {
				return A
			})), i.d(t, "privatePostListingLoaded", (function() {
				return E
			})), i.d(t, "privateListingFailed", (function() {
				return G
			})), i.d(t, "profilePrivateRequested", (function() {
				return N
			})), i.d(t, "morePending", (function() {
				return B
			})), i.d(t, "moreMixedLoaded", (function() {
				return M
			})), i.d(t, "morePostLoaded", (function() {
				return K
			})), i.d(t, "moreFailed", (function() {
				return U
			})), i.d(t, "moreProfilePrivateRequested", (function() {
				return W
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/externalAccount.ts"),
				r = i("./src/reddit/actions/pages/profileShared.ts"),
				n = i("./src/reddit/actions/profile/index.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				l = i("./src/redditGQL/operations/ProfileDownvoted.json"),
				a = i("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = i("./src/redditGQL/operations/ProfileHidden.json"),
				p = i("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				m = i("./src/redditGQL/operations/ProfileSaved.json"),
				u = i("./src/redditGQL/operations/ProfileUpvoted.json");
			var h = i("./src/reddit/models/Comment/index.ts"),
				g = i("./src/reddit/models/Post/index.ts"),
				b = i("./src/reddit/models/Profile/index.ts"),
				v = i("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				y = i("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				f = i("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				C = i("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				P = i("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = i("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var j = e => {
					const {
						listingType: t,
						rawData: i,
						includeIdentity: s,
						includeModerated: o
					} = e, {
						identity: r
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
						return e !== b.b.Saved && e !== b.b.ReceivedGildings && e !== b.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!r) return n;
					if (s && (n.account = Object(O.a)(r) || null, n.preferences = Object(w.a)(r.preferences, r.interactions) || null, r.redditor.profile && (n.profiles[r.redditor.profile.id] = Object(P.a)(r.redditor.profile))), o && r.redditor && r.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: i
						} = Object(P.b)(r.redditor.moderatedSubreddits);
						n.moderatedPageInfo = t, n.moderatedSubredditIds = e, n.subreddits = i
					}
					const d = ((e, t) => {
						switch (t) {
							case b.b.Downvoted:
								return e.identity.downvotedPosts;
							case b.b.Hidden:
								return e.identity.hiddenPosts;
							case b.b.Saved:
								return e.identity.saved;
							case b.b.Upvoted:
								return e.identity.upvotedPosts;
							case b.b.ReceivedGildings:
								return e.identity.receivedGildings;
							case b.b.GivenGildings:
								return e.identity.givenGildings
						}
					})(i, t);
					if (!d) return n;
					n.pageInfo = d.pageInfo;
					for (const {
							node: l
						} of d.edges) {
						let e;
						if (l.__typename === h.d.Comment) {
							const t = Object(v.a)(l);
							if (n.comments || (n.comments = {}), n.comments[t.id] = t, n.itemIds || (n.itemIds = []), n.itemIds.push(t.id), l.authorFlair && (n.authorFlair[t.subredditId] || (n.authorFlair[t.subredditId] = {}), n.authorFlair[t.subredditId][t.author] = Object(y.a)(l.authorFlair)[0]), e = l.postInfo, l.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(C.a)(l.postInfo);
								n.posts[e.id] = e, t && (n.posts[t.id] = t)
							}
						} else e = l, n.itemIds || (n.itemIds = []), n.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: i
						} = e && Object(C.a)(e);
						n.posts[t.id] = t, i && (n.posts[i.id] = i), Object(g.i)(e) || Object(g.j)(e) || (e.authorFlair && (n.authorFlair[t.belongsTo.id] || (n.authorFlair[t.belongsTo.id] = {}), n.authorFlair[t.belongsTo.id][t.author] = Object(y.a)(e.authorFlair)[0]), Object(g.l)(e) ? n.profiles[e.profile.id] || (n.profiles[e.profile.id] = Object(P.a)(e.profile)) : Object(g.n)(e) && (n.subreddits[e.subreddit.id] || (n.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), n.postFlair[e.subreddit.id] || (n.postFlair[e.subreddit.id] = Object(f.a)(e.subreddit))))
					}
					return n
				},
				x = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				S = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				L = i("./src/lib/initializeClient/installReducer.ts"),
				k = i("./src/reddit/reducers/features/comments/index.ts");
			Object(L.a)({
				features: {
					comments: k.a
				}
			});
			const _ = {
					[b.b.Downvoted]: (e, t) => Object(d.a)(e, {
						...l,
						variables: t
					}),
					[b.b.Hidden]: (e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}),
					[b.b.Saved]: (e, t) => Object(d.a)(e, {
						...m,
						variables: t
					}),
					[b.b.Upvoted]: (e, t) => Object(d.a)(e, {
						...u,
						variables: t
					}),
					[b.b.ReceivedGildings]: (e, t) => Object(d.a)(e, {
						...p,
						variables: t
					}),
					[b.b.GivenGildings]: (e, t) => Object(d.a)(e, {
						...a,
						variables: t
					})
				},
				T = (e, t) => {
					switch (e) {
						case b.b.Downvoted:
						case b.b.Hidden:
						case b.b.Saved:
						case b.b.Upvoted:
						case b.b.ReceivedGildings:
						case b.b.GivenGildings:
							return t.body.data
					}
				},
				F = e => {
					switch (e.listingType) {
						case b.b.Downvoted:
						case b.b.Hidden:
						case b.b.Saved:
						case b.b.Upvoted:
						case b.b.ReceivedGildings:
						case b.b.GivenGildings:
							return j(e)
					}
				},
				R = Object(s.a)(S.b),
				A = Object(s.a)(S.c),
				E = Object(s.a)(S.i),
				G = Object(s.a)(S.a),
				N = e => async (t, i, s) => {
					const {
						profileName: d,
						listingType: l
					} = e.params, a = i(), c = Object(x.b)(d.toLowerCase(), l), p = a.profilePrivatePage.ids[c] && a.profilePrivatePage.ids[c].length > 0, m = !!a.profilePrivatePage.api.error[c];
					if (a.profilePrivatePage.api.pending[c] || p && !m) return;
					const {
						account: u
					} = a.user, h = !u, g = !(u && u.displayText && a.profiles.moderated.models[u.displayText.toLowerCase()] && a.profiles.moderated.models[u.displayText.toLowerCase()].length);
					t(R({
						listingKey: c
					}));
					const v = {
							includeIdentity: h,
							includeModerated: g,
							first: S.h,
							after: null
						},
						y = await _[l](s.gqlContext(), v);
					if (y.ok && y.body) {
						const e = F({
							rawData: T(l, y),
							listingType: l,
							includeIdentity: h,
							includeModerated: g
						});
						l === b.b.Saved || l === b.b.ReceivedGildings || l === b.b.GivenGildings ? await t(A({
							listingKey: c,
							profileName: d,
							...e
						})) : await t(E({
							listingKey: c,
							profileName: d,
							...e
						})), await Promise.all([t(Object(r.d)(d)), t(Object(o.o)(d)), t(Object(n.d)(d))])
					} else t(G({
						listingKey: c,
						error: y.error
					}))
				}, B = Object(s.a)(S.f), M = Object(s.a)(S.e), K = Object(s.a)(S.g), U = Object(s.a)(S.d), W = e => async (t, i, s) => {
					const o = i(),
						r = o.user.account && o.user.account.displayText && o.user.account.displayText.toLowerCase();
					if (!r) return;
					const n = Object(x.b)(r, e);
					if (!o.profilePrivatePage.ids[n] || !o.profilePrivatePage.ids[n].length || !o.profilePrivatePage.pageInfo || !o.profilePrivatePage.pageInfo[n].hasNextPage || o.profilePrivatePage.api.error[n] || o.profilePrivatePage.api.pending[n]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: o.profilePrivatePage.pageInfo[n].endCursor,
						first: S.h
					};
					t(B({
						listingKey: n
					}));
					const l = await _[e](s.gqlContext(), d);
					if (l.ok && l.body) {
						const i = F({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: l.body.data
						});
						e === b.b.Saved || e === b.b.ReceivedGildings || e === b.b.GivenGildings ? await t(M({
							listingKey: n,
							profileName: r,
							...i
						})) : await t(K({
							listingKey: n,
							profileName: r,
							...i
						}))
					} else t(U({
						listingKey: n,
						error: l.error
					}))
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
				o = i.n(s),
				r = i("./src/reddit/components/ClassicPost/index.tsx"),
				n = (i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./node_modules/react-redux/es/index.js")),
				d = i("./node_modules/reselect/es/index.js"),
				l = i("./src/reddit/constants/gold.ts"),
				a = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = i("./src/reddit/actions/post.ts"),
				m = i("./src/reddit/components/CommentContainer/index.tsx"),
				u = i("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = i("./src/reddit/helpers/getClickInfo.ts"),
				g = i("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = i("./src/reddit/selectors/commentSelector.ts"),
				v = i("./src/reddit/selectors/communityAwards.ts"),
				y = i("./src/reddit/selectors/user.ts"),
				f = i("./src/reddit/components/OverviewChronoComment/index.m.less"),
				C = i.n(f);
			const w = Object(n.b)(() => Object(d.c)({
				comment: b.b,
				isAwarded: (e, t) => {
					const i = Object(b.b)(e, t);
					return !(!i || !i.awardCountsById) && Object.keys(i.awardCountsById).some(t => {
						const i = Object(v.a)(e, t);
						return i && i.coinPrice >= l.g
					})
				},
				isNightmodeOn: y.eb
			}), e => ({
				openPost: t => e(Object(p.L)(t))
			}));
			var P = Object(c.a)(w(e => {
					const {
						comment: t,
						commentId: i,
						first: s,
						isAwarded: r,
						isNightmodeOn: n,
						last: d,
						openPost: l,
						showModTools: c
					} = e;
					if (!t) return null;
					return o.a.createElement(m.a, {
						comment: t,
						onClick: (e, t) => {
							l({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(g.e)(e)
						}
					}, o.a.createElement("div", {
						className: Object(a.a)(C.a.commentOuterWrapper, {
							[C.a.isLast]: d,
							[C.a.isAwarded]: r,
							[C.a.isNightmodeOn]: n
						})
					}, o.a.createElement("div", {
						className: Object(a.a)(C.a.commentWrapper, {
							[C.a.isFirst]: s
						})
					}, o.a.createElement("div", {
						className: C.a.commentSeparator
					}), t.parentId && o.a.createElement("div", {
						className: C.a.commentSeparator
					}), o.a.createElement("div", {
						className: C.a.commentContentWrapper
					}, o.a.createElement(u.a, {
						commentId: i,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: c,
						isExpanded: !0
					})))))
				})),
				I = i("./src/reddit/components/OverviewCommentPost/index.tsx"),
				O = i("./src/reddit/contexts/PageLayer/index.tsx"),
				j = i("./src/reddit/helpers/isComment.ts"),
				x = i("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				S = i.n(x),
				L = i("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(O.u)({
					currentProfileName: O.i,
					isCommentsPage: O.x,
					isCommentPermalink: O.w,
					isProfilePostListing: O.L,
					pageLayer: e => e
				}),
				T = L.a.wrapped(I.a, "OverviewCommentPost", S.a),
				F = L.a.wrapped(r.default, "ClassicPost", S.a);
			t.a = _(e => {
				const {
					itemId: t,
					isFirstInCommentList: i,
					isLastInCommentList: s,
					allowModToolsUnderComments: r,
					height: n,
					width: d,
					...l
				} = e;
				return Object(j.a)(t) ? i ? o.a.createElement(o.a.Fragment, null, o.a.createElement(T, k({}, l, {
					availableWidth: d,
					commentId: t
				})), o.a.createElement(P, {
					commentId: t,
					first: i,
					last: s,
					showModTools: r
				})) : o.a.createElement(P, {
					commentId: t,
					first: i,
					last: s,
					showModTools: r
				}) : o.a.createElement(F, k({}, l, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/lodash/last.js"),
				o = i.n(s),
				r = i("./node_modules/react/index.js"),
				n = i.n(r),
				d = i("./src/lib/constants/index.ts"),
				l = i("./src/lib/opener/index.ts"),
				a = i("./src/reddit/constants/adEvents.ts"),
				c = i("./src/reddit/components/PostList/LoadMore.tsx"),
				p = i("./src/reddit/components/PostList/Placeholder.tsx"),
				m = i("./src/reddit/components/PostList/SomethingWrong.tsx"),
				u = i("./src/reddit/components/Scroller/Simple.tsx"),
				h = i("./src/reddit/constants/componentSizes.ts"),
				g = i("./src/reddit/helpers/getClickInfo.ts"),
				b = i("./src/reddit/helpers/isComment.ts"),
				v = i("./src/reddit/contexts/Post/index.tsx"),
				y = i("./src/lib/LRUCache/index.ts"),
				f = i("./src/telemetry/index.ts"),
				C = i("./src/telemetry/models/Timer.ts"),
				w = i("./src/reddit/components/PostList/index.m.less"),
				P = i.n(w);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 500,
				j = new y.a(O),
				x = new y.a(O),
				S = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				L = (e, t, i, s, o, r) => {
					const n = `entered-${e}-${t}-${i?`last-${s}-${o}`:""}`;
					let d = j.get(n);
					return void 0 === d && (d = () => {
						i && r.onBottomViewed(s, o), r.trackOnPostEnteredViewport(e, t)
					}, j.set(n, d)), d
				},
				k = (e, t) => {
					const i = `click-${e}`;
					let s = x.get(i);
					return void 0 === s && (s = (e, i) => {
						i.isSponsored && t.fireAdPixelsOfType(i, a.a.Click), i.isSponsored && i.source && i.source.outboundUrl ? Object(l.e)(i.source.outboundUrl, l.d.BLANK) : t.openPost({
							postOrComment: i,
							clickInfo: Object(g.a)(e)
						})
					}, x.set(i, s)), s
				};
			class _ extends n.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new y.a(O), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && f.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = f.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = f.c.end(this.timerId);
						setTimeout(() => Object(f.b)(d.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && f.c.cancel(this.timerId), e.itemIds.length && (this.timerId = f.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && f.c.has(this.timerId)) {
						const e = f.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(f.b)(d.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && f.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
						viewportDataLoaded: i
					} = this.props;
					return f.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (i || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: i
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const s = f.c.end(e);
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
						...o
					} = e, r = Object.keys(i), n = Object.keys(o);
					return n.length !== r.length || !!n.some(e => i[e] !== o[e])
				}
				scrollChildForItem(e, t, i, s, o, r) {
					const {
						listingKey: d,
						listingName: l,
						postClickEventFactory: a
					} = this.props, c = `post-${r}-${e}-${t}-${i?"last-index":""}-${l}-${d}`;
					let p;
					if (void 0 === (p = this.scrollChildCache.get(c))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: m
						} = this.props, u = m[e], h = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, g = L(u, r, i, d, l, this.props), b = {
							key: h,
							eventFactory: a,
							inSubredditOrProfile: t,
							isFirstInCommentList: s,
							isLastInCommentList: o,
							isOverlay: !1,
							itemId: e,
							last: i,
							layout: r,
							onClickPost: k(e, this.props),
							postId: u
						}, y = this.props.itemComponent;
						p = {
							estHeight: this.props.estimateItemHeight(e, r, s),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: g,
							render: e => n.a.createElement(v.a, {
								postId: b.postId
							}, n.a.createElement(y, I({}, b, e)))
						}, this.scrollChildCache.set(c, p)
					}
					return p
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
						layout: i,
						onTryAgain: s
					} = this.props;
					return n.a.createElement("div", {
						className: P.a.placeholder
					}, n.a.createElement(p.a, {
						className: t,
						isLoading: !e,
						layout: i
					}), !!e && n.a.createElement(m.a, {
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
					return n.a.createElement("div", {
						className: P.a.placeholder
					}, n.a.createElement(c.a, {
						isLoading: !!t,
						layout: i,
						countOverride: S[i]
					}), !!e && n.a.createElement(m.a, {
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
						onLoadMore: o
					} = this.props, r = s.map((i, o, r) => {
						const n = o === s.length - 1,
							d = o && s[o - 1],
							l = !n && s[o + 1],
							a = !!Object(b.a)(i) && (!d || !Object(b.a)(d) || e[d].postId !== e[i].postId),
							c = !!Object(b.a)(i) && (!l || !Object(b.a)(l) || e[l].postId !== e[i].postId);
						return this.scrollChildForItem(i, o, n, a, c, t)
					});
					return n.a.createElement("div", null, n.a.createElement(u.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: i && i.token ? i.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: o,
						viewportTopPadding: h.f + h.s
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = _
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
				n = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/actions/pages/profilePrivate/index.ts"),
				l = i("./src/reddit/components/EmptyProfile/index.ts"),
				a = i("./src/reddit/components/JumpToContent/index.tsx"),
				c = i("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				p = i("./src/reddit/components/PostList/index.tsx"),
				m = i("./src/reddit/components/ProfileItemList/index.tsx"),
				u = i("./src/reddit/components/ProfileNavMenu/index.tsx"),
				h = i("./src/reddit/components/ProfileSidebar/index.tsx"),
				g = i("./node_modules/lodash/noop.js"),
				b = i.n(g),
				v = i("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				y = i("./src/reddit/actions/post.ts"),
				f = i("./src/reddit/components/TrackingHelper/index.tsx"),
				C = i("./src/reddit/components/PostList/Placeholder.tsx"),
				w = i("./src/reddit/actions/postList.ts"),
				P = i("./src/reddit/contexts/PageLayer/index.tsx"),
				I = i("./src/reddit/helpers/isComment.ts"),
				O = i("./src/reddit/helpers/isPost.ts"),
				j = i("./src/reddit/helpers/trackers/post.ts"),
				x = (i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./src/lib/objectSelector/index.ts")),
				S = i("./src/reddit/models/Flair/index.ts"),
				L = i("./src/reddit/models/PostCreationForm/index.ts"),
				k = i("./src/reddit/models/Vote/index.ts");
			const _ = {
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
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/5",
					media: {
						type: "text",
						rteMode: L.i.RICH_TEXT,
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
					isSurveyAd: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: L.i.RICH_TEXT,
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
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: L.i.RICH_TEXT,
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
					rteMode: L.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, k.a.notVoted;
			var T;
			const F = Object(x.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models;
					return R(e, {
						listingKey: i
					}).filter(e => {
						if (Object(I.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				R = Object(x.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.pages.profileOverview.chrono.ids[i];
					return s ? [...s] : []
				}),
				A = Object(x.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return F(e, {
						listingKey: i
					}).reduce((t, i) => {
						const s = Object(I.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				E = (Object(x.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models;
					return E(e, {
						listingKey: i
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(x.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return F(e, {
						listingKey: i
					}).map(t => Object(I.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				G = Object(x.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models,
						o = E(e, {
							listingKey: i
						}),
						r = {};
					return o.forEach(e => r[e] = s[e]), r
				}),
				N = Object(x.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.features.comments.models,
						o = F(e, {
							listingKey: i
						}),
						r = {};
					return o.forEach(e => !!Object(I.a)(e) && (r[e] = s[e])), r
				});
			var B = i("./src/reddit/selectors/subreddit.ts"),
				M = i("./src/reddit/selectors/tracking.ts"),
				K = i("./src/reddit/selectors/user.ts");
			const U = (e, t) => (e, t, i) => Object(I.a)(e) ? 120 : 47,
				W = (Object(P.u)(), {
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
					currentUser: K.l,
					layout: P.R,
					loadMore: (e, t) => {
						let {
							listingKey: i
						} = t;
						return e.pages.profileOverview.chrono.loadMore[i]
					},
					subredditsById: B.ab,
					viewportDataLoaded: M.a,
					commentsById: N,
					itemIds: F,
					itemIdToPostId: A,
					postsById: G,
					estimateItemHeight: U
				}),
				V = Object(n.c)(W);
			Object(r.b)(V, (e, t) => ({
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
				fireAdPixelsOfType: b.a
			}), (e, t, i) => ({
				...e,
				...t,
				...i,
				postClickEventFactory: (e, t) => Object(j.h)(e, t)
			}));
			var q = i("./src/reddit/featureFlags/index.ts"),
				H = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				D = i("./src/reddit/models/Profile/index.ts");
			const Q = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profilePrivatePage.api.pending[i]
				},
				z = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profilePrivatePage.api.error[i]
				},
				X = Object(x.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return (e.profilePrivatePage.ids[i] || []).reduce((t, i) => {
						const s = Object(I.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				J = Object(P.u)(),
				Z = Object(P.u)(),
				$ = {
					apiError: z,
					apiPending: Q,
					layout: P.R,
					loadMore: (e, t) => {
						let {
							listingKey: i
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[i] || !e.profilePrivatePage.pageInfo[i].hasNextPage) return null;
						const s = e.profilePrivatePage.ids[i];
						return {
							token: s[s.length - 1],
							dist: H.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !Q(e, t) && !z(e, t)
				},
				Y = Object(n.c)({
					...$,
					currentUser: K.l,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: i
						} = t;
						return -1 === i.indexOf(D.b.Saved) && -1 === i.indexOf(D.b.ReceivedGildings) && -1 === i.indexOf(D.b.GivenGildings) ? [] : e.profilePrivatePage.ids[i] || []
					},
					itemIdToPostId: X,
					estimateItemHeight: U
				}),
				ee = Object(n.c)({
					...$,
					measureScrollFPS: q.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: i
						} = t;
						return i.indexOf(D.b.Saved) > -1 || i.indexOf(D.b.ReceivedGildings) > -1 || i.indexOf(D.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[i] || []
					},
					postListPlaceholderComponent: () => C.a
				}),
				te = e => ({
					onBottomViewed: b.a,
					openPost: t => {
						e(y.L(t))
					},
					trackOnPostEnteredViewport: b.a,
					fireAdPixelsOfType: (t, i) => {
						e(y.z(t, i))
					}
				}),
				ie = Object(r.b)(Y, te, (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(j.h)(e, t)
				})),
				se = Object(r.b)(ee, e => ({
					...te(e),
					onFirstPostChanged: b.a,
					adBrandSafetyStatusReceived: b.a,
					trackOnPostExitedViewport: b.a
				}), (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(j.h)(e, t),
					postComponentForLayout: v.b
				}));
			var oe = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				re = i("./src/reddit/helpers/trackers/screenview.ts"),
				ne = i("./src/reddit/layout/page/Listing/index.tsx"),
				de = i("./src/reddit/pages/ProfilePrivate/index.m.less"),
				le = i.n(de);
			const ae = Object(n.c)({
					currentUser: K.l
				}),
				ce = Object(r.b)(ae, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				pe = (e => Object(f.c)(J(ie(e))))(m.a),
				me = (e => Object(f.c)(Z(se(e))))(p.a);
			class ue extends o.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = D.a[e]();
					return () => o.a.createElement(l.d, {
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
					} = this.props, s = i.toLowerCase(), r = Object(oe.b)(s, t);
					return e && e.displayText && e.displayText.toLowerCase() === s ? t === D.b.Saved || t === D.b.ReceivedGildings || t === D.b.GivenGildings ? o.a.createElement(pe, {
						className: le.a.mixedList,
						itemComponent: c.a,
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(re.s)(r),
						onLoadMore: this.onLoadMore
					}) : o.a.createElement(me, {
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(re.s)(r),
						onLoadMore: this.onLoadMore
					}) : o.a.createElement(l.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return o.a.createElement(ne.a, {
						fitPageToContent: !0,
						contentNavBar: o.a.createElement(u.a, {
							profileName: e
						}),
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(a.a, null), this.renderContent()),
						sidebar: o.a.createElement(h.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ce(ue)
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4acc506c916a"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"16c3911bf5c7"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"9446fd0182a5"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"5a06049221d4"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"250fe7c0a7e1"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4450c1a22029"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.1e02e964b041055488df.js.map