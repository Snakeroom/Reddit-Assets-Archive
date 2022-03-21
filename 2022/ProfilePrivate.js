// https://www.redditstatic.com/desktop2x/ProfilePrivate.4bcb64495bc7e3a69d5d.js
// Retrieved at 3/21/2022, 5:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "privateListingPending", (function() {
				return N
			})), i.d(t, "privateMixedListingLoaded", (function() {
				return R
			})), i.d(t, "privatePostListingLoaded", (function() {
				return M
			})), i.d(t, "privateListingFailed", (function() {
				return A
			})), i.d(t, "profilePrivateRequested", (function() {
				return F
			})), i.d(t, "morePending", (function() {
				return G
			})), i.d(t, "moreMixedLoaded", (function() {
				return B
			})), i.d(t, "morePostLoaded", (function() {
				return K
			})), i.d(t, "moreFailed", (function() {
				return D
			})), i.d(t, "moreProfilePrivateRequested", (function() {
				return U
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./src/lib/makeActionCreator/index.ts"),
				r = i("./src/reddit/actions/externalAccount.ts"),
				n = i("./src/reddit/actions/pages/profileShared.ts"),
				o = i("./src/reddit/actions/profile/index.ts"),
				a = i("./src/lib/makeGqlRequest/index.ts"),
				d = i("./src/redditGQL/operations/ProfileDownvoted.json"),
				l = i("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = i("./src/redditGQL/operations/ProfileHidden.json"),
				m = i("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				u = i("./src/redditGQL/operations/ProfileSaved.json"),
				p = i("./src/redditGQL/operations/ProfileUpvoted.json");
			var h = i("./src/reddit/models/Comment/index.ts"),
				g = i("./src/reddit/models/Post/index.ts"),
				b = i("./src/reddit/models/Profile/index.ts"),
				y = i("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				v = i("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				f = i("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				C = i("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				S = i("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				k = i("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var x = e => {
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
						return e !== b.b.Saved && e !== b.b.ReceivedGildings && e !== b.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!n) return o;
					if (s && (o.account = Object(k.a)(n) || null, o.preferences = Object(w.a)(n.preferences, n.interactions) || null, n.redditor.profile && (o.profiles[n.redditor.profile.id] = Object(S.a)(n.redditor.profile))), r && n.redditor && n.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: i
						} = Object(S.b)(n.redditor.moderatedSubreddits);
						o.moderatedPageInfo = t, o.moderatedSubredditIds = e, o.subreddits = i
					}
					const a = ((e, t) => {
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
					if (!a) return o;
					o.pageInfo = a.pageInfo;
					for (const {
							node: d
						} of a.edges) {
						let e;
						if (d.__typename === h.d.Comment) {
							const t = Object(y.a)(d);
							if (o.comments || (o.comments = {}), o.comments[t.id] = t, o.itemIds || (o.itemIds = []), o.itemIds.push(t.id), d.authorFlair && (o.authorFlair[t.subredditId] || (o.authorFlair[t.subredditId] = {}), o.authorFlair[t.subredditId][t.author] = Object(v.a)(d.authorFlair)[0]), e = d.postInfo, d.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(C.a)(d.postInfo);
								o.posts[e.id] = e, t && (o.posts[t.id] = t)
							}
						} else e = d, o.itemIds || (o.itemIds = []), o.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: i
						} = e && Object(C.a)(e);
						o.posts[t.id] = t, i && (o.posts[i.id] = i), Object(g.i)(e) || Object(g.j)(e) || (e.authorFlair && (o.authorFlair[t.belongsTo.id] || (o.authorFlair[t.belongsTo.id] = {}), o.authorFlair[t.belongsTo.id][t.author] = Object(v.a)(e.authorFlair)[0]), Object(g.l)(e) ? o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(S.a)(e.profile)) : Object(g.n)(e) && (o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(f.a)(e.subreddit))))
					}
					return o
				},
				P = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				O = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				E = i("./src/lib/initializeClient/installReducer.ts"),
				j = i("./src/reddit/reducers/features/comments/index.ts");
			Object(E.a)({
				features: {
					comments: j.a
				}
			});
			const _ = {
					[b.b.Downvoted]: (e, t) => Object(a.a)(e, {
						...d,
						variables: t
					}),
					[b.b.Hidden]: (e, t) => Object(a.a)(e, {
						...c,
						variables: t
					}),
					[b.b.Saved]: (e, t) => Object(a.a)(e, {
						...u,
						variables: t
					}),
					[b.b.Upvoted]: (e, t) => Object(a.a)(e, {
						...p,
						variables: t
					}),
					[b.b.ReceivedGildings]: (e, t) => Object(a.a)(e, {
						...m,
						variables: t
					}),
					[b.b.GivenGildings]: (e, t) => Object(a.a)(e, {
						...l,
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
				L = e => {
					switch (e.listingType) {
						case b.b.Downvoted:
						case b.b.Hidden:
						case b.b.Saved:
						case b.b.Upvoted:
						case b.b.ReceivedGildings:
						case b.b.GivenGildings:
							return x(e)
					}
				},
				N = Object(s.a)(O.b),
				R = Object(s.a)(O.c),
				M = Object(s.a)(O.i),
				A = Object(s.a)(O.a),
				F = e => async (t, i, s) => {
					const {
						profileName: a,
						listingType: d
					} = e.params, l = i(), c = Object(P.b)(a.toLowerCase(), d), m = l.profilePrivatePage.ids[c] && l.profilePrivatePage.ids[c].length > 0, u = !!l.profilePrivatePage.api.error[c];
					if (l.profilePrivatePage.api.pending[c] || m && !u) return;
					const {
						account: p
					} = l.user, h = !p, g = !(p && p.displayText && l.profiles.moderated.models[p.displayText.toLowerCase()] && l.profiles.moderated.models[p.displayText.toLowerCase()].length);
					t(N({
						listingKey: c
					}));
					const y = {
							includeIdentity: h,
							includeModerated: g,
							first: O.h,
							after: null
						},
						v = await _[d](s.gqlContext(), y);
					if (v.ok && v.body) {
						const e = L({
							rawData: T(d, v),
							listingType: d,
							includeIdentity: h,
							includeModerated: g
						});
						d === b.b.Saved || d === b.b.ReceivedGildings || d === b.b.GivenGildings ? await t(R({
							listingKey: c,
							profileName: a,
							...e
						})) : await t(M({
							listingKey: c,
							profileName: a,
							...e
						})), await Promise.all([t(Object(n.d)(a)), t(Object(r.o)(a)), t(Object(o.d)(a))])
					} else t(A({
						listingKey: c,
						error: v.error
					}))
				}, G = Object(s.a)(O.f), B = Object(s.a)(O.e), K = Object(s.a)(O.g), D = Object(s.a)(O.d), U = e => async (t, i, s) => {
					const r = i(),
						n = r.user.account && r.user.account.displayText && r.user.account.displayText.toLowerCase();
					if (!n) return;
					const o = Object(P.b)(n, e);
					if (!r.profilePrivatePage.ids[o] || !r.profilePrivatePage.ids[o].length || !r.profilePrivatePage.pageInfo || !r.profilePrivatePage.pageInfo[o].hasNextPage || r.profilePrivatePage.api.error[o] || r.profilePrivatePage.api.pending[o]) return;
					const a = {
						includeIdentity: !1,
						includeModerated: !1,
						after: r.profilePrivatePage.pageInfo[o].endCursor,
						first: O.h
					};
					t(G({
						listingKey: o
					}));
					const d = await _[e](s.gqlContext(), a);
					if (d.ok && d.body) {
						const i = L({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: d.body.data
						});
						e === b.b.Saved || e === b.b.ReceivedGildings || e === b.b.GivenGildings ? await t(B({
							listingKey: o,
							profileName: n,
							...i
						})) : await t(K({
							listingKey: o,
							profileName: n,
							...i
						}))
					} else t(D({
						listingKey: o,
						error: d.error
					}))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
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
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/constants/gold.ts"),
				l = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = i("./src/reddit/actions/post.ts"),
				u = i("./src/reddit/components/CommentContainer/index.tsx"),
				p = i("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = i("./src/reddit/helpers/getClickInfo.ts"),
				g = i("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = i("./src/reddit/selectors/commentSelector.ts"),
				y = i("./src/reddit/selectors/communityAwards.ts"),
				v = i("./src/reddit/selectors/user.ts"),
				f = i("./src/reddit/components/OverviewChronoComment/index.m.less"),
				C = i.n(f);
			const w = Object(o.b)(() => Object(a.c)({
				comment: b.b,
				isAwarded: (e, t) => {
					const i = Object(b.b)(e, t);
					return !(!i || !i.awardCountsById) && Object.keys(i.awardCountsById).some(t => {
						const i = Object(y.a)(e, t);
						return i && i.coinPrice >= d.g
					})
				},
				isNightmodeOn: v.cb
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var S = Object(c.a)(w(e => {
					const {
						comment: t,
						commentId: i,
						first: s,
						isAwarded: n,
						isNightmodeOn: o,
						last: a,
						openPost: d,
						showModTools: c
					} = e;
					if (!t) return null;
					return r.a.createElement(u.a, {
						comment: t,
						onClick: (e, t) => {
							d({
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
					}, r.a.createElement("div", {
						className: Object(l.a)(C.a.commentOuterWrapper, {
							[C.a.isLast]: a,
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
				I = i("./src/reddit/components/OverviewCommentPost/index.tsx"),
				k = i("./src/reddit/contexts/PageLayer/index.tsx"),
				x = i("./src/reddit/helpers/isComment.ts"),
				P = i("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				O = i.n(P),
				E = i("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(k.u)({
					currentProfileName: k.i,
					isCommentsPage: k.x,
					isCommentPermalink: k.w,
					isProfilePostListing: k.L,
					pageLayer: e => e
				}),
				T = E.a.wrapped(I.a, "OverviewCommentPost", O.a),
				L = E.a.wrapped(n.default, "ClassicPost", O.a);
			t.a = _(e => {
				const {
					itemId: t,
					isFirstInCommentList: i,
					isLastInCommentList: s,
					allowModToolsUnderComments: n,
					height: o,
					width: a,
					...d
				} = e;
				return Object(x.a)(t) ? i ? r.a.createElement(r.a.Fragment, null, r.a.createElement(T, j({}, d, {
					availableWidth: a,
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
				}) : r.a.createElement(L, j({}, d, {
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
				a = i("./src/lib/constants/index.ts"),
				d = i("./src/lib/opener/index.ts"),
				l = i("./src/reddit/constants/adEvents.ts"),
				c = i("./src/reddit/components/PostList/LoadMore.tsx"),
				m = i("./src/reddit/components/PostList/Placeholder.tsx"),
				u = i("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = i("./src/reddit/components/Scroller/Simple.tsx"),
				h = i("./src/reddit/constants/componentSizes.ts"),
				g = i("./src/reddit/helpers/getClickInfo.ts"),
				b = i("./src/reddit/helpers/isComment.ts"),
				y = i("./src/reddit/contexts/Post/index.tsx"),
				v = i("./src/lib/LRUCache/index.ts"),
				f = i("./src/telemetry/index.ts"),
				C = i("./src/telemetry/models/Timer.ts"),
				w = i("./src/reddit/components/PostList/index.m.less"),
				S = i.n(w);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 500,
				x = new v.a(k),
				P = new v.a(k),
				O = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				E = (e, t, i, s, r, n) => {
					const o = `entered-${e}-${t}-${i?`last-${s}-${r}`:""}`;
					let a = x.get(o);
					return void 0 === a && (a = () => {
						i && n.onBottomViewed(s, r), n.trackOnPostEnteredViewport(e, t)
					}, x.set(o, a)), a
				},
				j = (e, t) => {
					const i = `click-${e}`;
					let s = P.get(i);
					return void 0 === s && (s = (e, i) => {
						i.isSponsored && t.fireAdPixelsOfType(i, l.a.Click), i.isSponsored && i.source && i.source.outboundUrl ? Object(d.e)(i.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: i,
							clickInfo: Object(g.a)(e)
						})
					}, P.set(i, s)), s
				};
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new v.a(k), this.updateScrollerRef = e => {
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
						setTimeout(() => Object(f.b)(a.n.Redesign, {
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
						setTimeout(() => Object(f.b)(a.n.Redesign, {
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
						t = e && r()(e);
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
						...r
					} = e, n = Object.keys(i), o = Object.keys(r);
					return o.length !== n.length || !!o.some(e => i[e] !== r[e])
				}
				scrollChildForItem(e, t, i, s, r, n) {
					const {
						listingKey: a,
						listingName: d,
						postClickEventFactory: l
					} = this.props, c = `post-${n}-${e}-${t}-${i?"last-index":""}-${d}-${a}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(c))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: u
						} = this.props, p = u[e], h = `overview-chrono-list-item-[layout: ${n}]-[itemId: ${e}]`, g = E(p, n, i, a, d, this.props), b = {
							key: h,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: s,
							isLastInCommentList: r,
							isOverlay: !1,
							itemId: e,
							last: i,
							layout: n,
							onClickPost: j(e, this.props),
							postId: p
						}, v = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, n, s),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: g,
							render: e => o.a.createElement(y.a, {
								postId: b.postId
							}, o.a.createElement(v, I({}, b, e)))
						}, this.scrollChildCache.set(c, m)
					}
					return m
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
					}, o.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: i
					}), !!e && o.a.createElement(u.a, {
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
						countOverride: O[i]
					}), !!e && o.a.createElement(u.a, {
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
							a = r && s[r - 1],
							d = !o && s[r + 1],
							l = !!Object(b.a)(i) && (!a || !Object(b.a)(a) || e[a].postId !== e[i].postId),
							c = !!Object(b.a)(i) && (!d || !Object(b.a)(d) || e[d].postId !== e[i].postId);
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
						viewportTopPadding: h.f + h.s
					}, n), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = _
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
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = i("./src/lib/lessComponent.tsx"),
				l = i("./src/reddit/components/TrackingHelper/index.tsx"),
				c = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = i("./src/reddit/constants/location.ts"),
				u = i("./src/reddit/contexts/PageLayer/index.tsx"),
				p = i("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = i("./src/reddit/helpers/trackers/navigation.ts"),
				g = i("./src/reddit/selectors/experiments/countrySites.ts"),
				b = i("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				y = i("./src/reddit/selectors/meta.ts"),
				v = i("./src/reddit/components/SidebarFooter/index.m.less"),
				f = i.n(v);
			const {
				fbt: C
			} = i("./node_modules/fbt/lib/FbtPublic.js"), w = d.a.a("Link", f.a), S = Object(o.c)({
				isCountrySitesEnabled: g.b,
				isNavbarLikeMwebEnabled: b.a,
				countryCode: y.b
			}), I = Object(n.b)(S), k = Object(u.u)({
				isFrontpage: u.A,
				isCountrySitePage: u.y
			});
			t.a = k(I(Object(l.c)(e => {
				const t = Object(n.f)().getState(),
					i = Object(g.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? r.a.createElement(c.a, {
					className: f.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: f.a.LinkContainer
				}, r.a.createElement("div", {
					className: f.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: f.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: f.a.Copyright
				}, C._("© {year} Reddit, Inc. All rights reserved.", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return i.includes(t) || "en" === t ? r.a.createElement(w, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(c.a, {
					className: f.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: f.a.LinkContainer
				}, r.a.createElement("div", {
					className: f.a.Column
				}, r.a.createElement(w, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(w, {
					href: "https://www.reddit.com/coins"
				}, C._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(w, {
					href: "https://www.reddit.com/premium"
				}, C._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, C._("Communities", null, {
					hk: "3CJu37"
				})), r.a.createElement(w, {
					href: `https://www.reddit.com${Object(p.a)()}`
				}, C._("Rereddit", null, {
					hk: "1z3k7C"
				})), r.a.createElement(w, {
					href: "https://www.reddit.com/topics/a-1/"
				}, C._("Topics", null, {
					hk: "349RFt"
				}))), !!m.b[e.countryCode] && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(w, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: f.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), r.a.createElement("div", {
					className: f.a.Column
				}, r.a.createElement(w, {
					href: "https://about.reddit.com"
				}, C._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(w, {
					href: "https://about.reddit.com/careers/"
				}, C._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(w, {
					href: "https://about.reddit.com/press/"
				}, C._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/advertising"
				}, C._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(w, {
					href: "http://www.redditblog.com/"
				}, C._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(w, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, C._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: f.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: f.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: f.a.Column
				}, s("de"), s("es"))), r.a.createElement("div", {
					className: f.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
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
				a = i.n(o),
				d = i("./src/lib/constants/index.ts"),
				l = i("./src/reddit/constants/elementIds.ts"),
				c = i("./src/reddit/controls/Button/index.tsx"),
				m = i("./src/reddit/components/BackToTop/index.m.less"),
				u = i.n(m);
			const {
				fbt: p
			} = i("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(l.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var g = ({
					className: e,
					isOverlay: t,
					style: i
				}) => a.a.createElement("div", {
					className: Object(s.a)(e, u.a.container),
					style: i
				}, a.a.createElement(c.l, {
					className: u.a.button,
					onClick: () => h(t)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				b = i("./src/reddit/components/SidebarFooter/index.tsx"),
				y = i("./src/reddit/constants/componentSizes.ts"),
				v = i("./src/reddit/contexts/PageLayer/index.tsx"),
				f = i("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				C = i.n(f),
				w = i("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = d.e[1] + 24,
				k = y.f + 8,
				x = k + 152 + 16,
				P = x + I + 8,
				O = w.a.div("Container", C.a),
				E = w.a.wrapped(({
					className: e,
					isOverlay: t,
					...i
				}) => a.a.createElement(g, S({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?k:8}px)`
					}
				}, i)), "BackToTop", C.a),
				j = ({
					children: e,
					className: t,
					isFakeOverlay: i,
					isSticky: r
				}) => a.a.createElement("div", {
					className: Object(s.a)(t, {
						[C.a.StickyStyles]: r && !i,
						[C.a.StickyStylesFakeOverlay]: !!i
					})
				}, e);
			class _ extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > P,
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
					}, this.handleResize = n()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
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
							pageLayer: o
						}
					} = this, d = this.state.isAdSticky && !(!t && !s);
					return a.a.createElement(O, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(j, {
						isFakeOverlay: i,
						isSticky: d
					}, t, s, !n && a.a.createElement(b.a, null)), !this.props.hideBackToTop && a.a.createElement(E, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const T = Object(v.u)();
			t.a = T(_)
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
				a = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = i("./src/reddit/components/SEOTitle/index.tsx"),
				c = i("./src/reddit/components/TrackingHelper/index.tsx"),
				m = i("./src/reddit/contexts/PageLayer/index.tsx"),
				u = i("./src/reddit/controls/Button/index.tsx"),
				p = i("./src/reddit/helpers/trackers/widgets.ts"),
				h = i("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = i("./src/reddit/selectors/experiments/topPosts.ts"),
				b = i("./src/reddit/selectors/structuredStyles.ts"),
				y = i("./src/reddit/selectors/user.ts"),
				v = i("./src/reddit/models/Theme/index.ts"),
				f = i("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(f.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(f.a)(e).widgetColors.sidebarWidgetHeaderColor,
				S = e => {
					const t = C(e);
					return Object(v.f)(t)
				},
				I = e => {
					const t = w(e);
					return Object(v.f)(t)
				};
			var k = i("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = i.n(k);
			const {
				fbt: P
			} = i("./node_modules/fbt/lib/FbtPublic.js"), O = Object(m.u)(), E = Object(n.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const i = Object(m.n)(e, t) || void 0,
						s = t.redditStyle || Object(b.l)(e, {
							subredditId: i
						}),
						r = Object(y.cb)(e);
					return s || r
				},
				nigtmode: y.cb,
				subredditId: m.n,
				topPostVariant: g.d
			}));
			class j extends r.a.Component {
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = S(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.color = e.fill = I(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: i,
						forceRedditStyle: s,
						headerButton: n,
						id: o,
						onClick: d,
						onHeaderClick: c,
						title: m,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, g = i ? x.a.widgetContentOnly : x.a.widgetContent, b = !s && this.props.styles, y = b ? this.getWidgetBackgroundStyles() : {}, v = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: s,
							[x.a.clickable]: !!d,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: d,
						style: y
					}, m && r.a.createElement("div", {
						className: Object(a.a)(x.a.widgetHeader, {
							[x.a.clickable]: !!c
						}),
						id: o,
						style: v,
						onClick: c
					}, r.a.createElement("div", {
						className: Object(a.a)(x.a.widgetTitle, p)
					}, r.a.createElement(l.b, {
						type: l.a.Widget
					}, m)), n), r.a.createElement("div", {
						className: Object(a.a)(g, {
							[x.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, P._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(E(Object(d.a)(Object(c.c)(j))))
		},
		"./src/reddit/constants/location.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return n
			}));
			var s = i("./src/redditGQL/types.ts");
			const r = {
					ZZ: "No country identified",
					XZ: "No country identified",
					AF: "Afghanistan",
					AX: "Aland Islands",
					AL: "Albania",
					DZ: "Algeria",
					AS: "American Samoa",
					AD: "Andorra",
					AO: "Angola",
					AI: "Anguilla",
					AQ: "Antarctica",
					AG: "Antigua and Barbuda",
					AR: "Argentina",
					AM: "Armenia",
					AW: "Aruba",
					AU: "Australia",
					AT: "Austria",
					AZ: "Azerbaijan",
					BS: "Bahamas",
					BH: "Bahrain",
					BD: "Bangladesh",
					BB: "Barbados",
					BY: "Belarus",
					BE: "Belgium",
					BZ: "Belize",
					BJ: "Benin",
					BM: "Bermuda",
					BT: "Bhutan",
					BO: "Bolivia",
					BQ: "Bonaire, Sint Eustatius and Saba",
					BA: "Bosnia and Herzegovina",
					BW: "Botswana",
					BV: "Bouvet Island",
					BR: "Brazil",
					IO: "British Indian Ocean Territory",
					BN: "Brunei Darussalam",
					BG: "Bulgaria",
					BF: "Burkina Faso",
					BI: "Burundi",
					KH: "Cambodia",
					CM: "Cameroon",
					CA: "Canada",
					CV: "Cape Verde",
					KY: "Cayman Islands",
					CF: "Central African Republic",
					TD: "Chad",
					CL: "Chile",
					CX: "Christmas Island",
					CC: "Cocos (Keeling) Islands",
					CO: "Colombia",
					KM: "Comoros",
					CG: "Congo, Republic of the",
					CD: "Congo, The Democratic Republic of the",
					CK: "Cook Islands",
					CR: "Costa Rica",
					CI: "Cote d'Ivoire",
					HR: "Croatia",
					CU: "Cuba",
					CW: "Curacao",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DK: "Denmark",
					DJ: "Djibouti",
					DM: "Dominica",
					DO: "Dominican Republic",
					EC: "Ecuador",
					EG: "Egypt",
					SV: "El Salvador",
					GQ: "Equatorial Guinea",
					ER: "Eritrea",
					EE: "Estonia",
					SZ: "Eswatini",
					ET: "Ethiopia",
					FK: "Falkland Islands (Malvinas)",
					FO: "Faroe Islands",
					FJ: "Fiji",
					FI: "Finland",
					FR: "France",
					GF: "French Guiana",
					PF: "French Polynesia",
					TF: "French Southern Territories",
					GA: "Gabon",
					GM: "Gambia",
					GE: "Georgia",
					DE: "Germany",
					GH: "Ghana",
					GI: "Gibraltar",
					GR: "Greece",
					GL: "Greenland",
					GD: "Grenada",
					GP: "Guadeloupe",
					GU: "Guam",
					GT: "Guatemala",
					GG: "Guernsey",
					GN: "Guinea",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HT: "Haiti",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HK: "Hong Kong",
					HU: "Hungary",
					IS: "Iceland",
					IN: "India",
					ID: "Indonesia",
					IR: "Iran",
					IQ: "Iraq",
					IE: "Ireland",
					IM: "Isle of Man",
					IL: "Israel",
					IT: "Italy",
					JM: "Jamaica",
					JP: "Japan",
					JE: "Jersey",
					JO: "Jordan",
					KZ: "Kazakhstan",
					KE: "Kenya",
					KI: "Kiribati",
					XK: "Kosovo",
					KW: "Kuwait",
					KG: "Kyrgyzstan",
					LA: "Laos",
					LV: "Latvia",
					LB: "Lebanon",
					LS: "Lesotho",
					LR: "Liberia",
					LY: "Libya",
					LI: "Liechtenstein",
					LT: "Lithuania",
					LU: "Luxembourg",
					MO: "Macao",
					MK: "Macedonia",
					MG: "Madagascar",
					MW: "Malawi",
					MY: "Malaysia",
					MV: "Maldives",
					ML: "Mali",
					MT: "Malta",
					MH: "Marshall Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MU: "Mauritius",
					YT: "Mayotte",
					MX: "Mexico",
					FM: "Micronesia",
					MD: "Moldova",
					MC: "Monaco",
					MN: "Mongolia",
					ME: "Montenegro",
					MS: "Montserrat",
					MA: "Morocco",
					MZ: "Mozambique",
					MM: "Myanmar",
					NA: "Namibia",
					NR: "Nauru",
					NP: "Nepal",
					NL: "Netherlands",
					NC: "New Caledonia",
					NZ: "New Zealand",
					NI: "Nicaragua",
					NE: "Niger",
					NG: "Nigeria",
					NU: "Niue",
					NF: "Norfolk Island",
					MP: "Northern Mariana Islands",
					NO: "Norway",
					OM: "Oman",
					PK: "Pakistan",
					PW: "Palau",
					PS: "Palestinian Territory",
					PA: "Panama",
					PG: "Papua New Guinea",
					PY: "Paraguay",
					PE: "Peru",
					PH: "Philippines",
					PN: "Pitcairn",
					PL: "Poland",
					PT: "Portugal",
					PR: "Puerto Rico",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RU: "Russia",
					RW: "Rwanda",
					BL: "Saint Barthelemey",
					SH: "Saint Helena",
					KN: "Saint Kitts and Nevis",
					LC: "Saint Lucia",
					MF: "Saint Martin",
					PM: "Saint Pierre and Miquelon",
					VC: "Saint Vincent and the Grenadines",
					WS: "Samoa",
					SM: "San Marino",
					ST: "Sao Tome and Principe",
					SA: "Saudi Arabia",
					SN: "Senegal",
					RS: "Serbia",
					SC: "Seychelles",
					SL: "Sierra Leone",
					SG: "Singapore",
					SX: "Sint Maarten",
					SK: "Slovakia",
					SI: "Slovenia",
					SB: "Solomon Islands",
					SO: "Somalia",
					ZA: "South Africa",
					GS: "South Georgia and the South Sandwich Islands",
					KR: "South Korea",
					SS: "South Sudan",
					ES: "Spain",
					LK: "Sri Lanka",
					SD: "Sudan",
					SR: "Suriname",
					SJ: "Svalbard and Jan Mayen",
					SE: "Sweden",
					CH: "Switzerland",
					SY: "Syria",
					TW: "Taiwan",
					TJ: "Tajikistan",
					TZ: "Tanzania",
					TH: "Thailand",
					TL: "Timor-Leste",
					TG: "Togo",
					TK: "Tokelau",
					TO: "Tonga",
					TT: "Trinidad and Tobago",
					TN: "Tunisia",
					TR: "Turkey",
					TM: "Turkmenistan",
					TC: "Turks and Caicos Islands",
					TV: "Tuvalu",
					UG: "Uganda",
					UA: "Ukraine",
					AE: "United Arab Emirates",
					GB: "United Kingdom",
					US: "United States",
					UM: "United States Minor Outlying Islands",
					UY: "Uruguay",
					UZ: "Uzbekistan",
					VU: "Vanuatu",
					VA: "Vatican City (Holy See)",
					VE: "Venezuela",
					VN: "Vietnam",
					VG: "Virgin Islands, British",
					VI: "Virgin Islands, U.S.",
					WF: "Wallis and Futuna",
					EH: "Western Sahara",
					YE: "Yemen",
					ZM: "Zambia",
					ZW: "Zimbabwe",
					XX: "Other country"
				},
				n = {
					[s.e.De]: r[s.e.De],
					[s.e.At]: r[s.e.At]
				}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return y
			}));
			var s = i("./node_modules/lodash/throttle.js"),
				r = i.n(s),
				n = i("./node_modules/react/index.js"),
				o = i.n(n),
				a = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = i("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = i("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = i("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = i("./src/reddit/controls/Dropdown/index.m.less"),
				p = i.n(u),
				h = i("./src/reddit/controls/Dropdown/row.m.less"),
				g = i.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, i = Object(a.a)(g.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(d.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && o.a.createElement("span", {
						className: i
					}, e.children), o.a.createElement("span", {
						className: Object(a.a)(g.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(m.a, b({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: i
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(a.a)(g.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(c.a, {
						className: g.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const i = Object(a.a)(g.a.row, e, {
					[g.a.mIsInteractive]: !t.noHover,
					[g.a.mIsSelected]: t.isSelected,
					[g.a.topics]: t.isTopicsStyle,
					[g.a.modNotes]: t.isModNotesStyle
				});
				return o.a.createElement(y, b({
					className: i
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, i) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, i) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/lessComponent.tsx"),
				r = i("./src/reddit/controls/InternalLink/index.tsx"),
				n = i("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = i.n(n);
			t.a = s.a.wrapped(r.a, "unstyledInternalLink", o.a)
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
				return a
			}));
			var s = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/helpers/styles/mixins/loading.m.less"),
				n = i.n(r);
			const o = ({
					isLoading: e
				}) => Object(s.a)(n.a.loadingBackground, {
					[n.a["m-loading"]]: e
				}),
				a = e => Object(s.a)(n.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return a
			})), i.d(t, "a", (function() {
				return d
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
			const a = (e, t) => i => ({
					source: r.COMMUNITY_WIDGETS,
					action: n.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.wb)(i, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				d = (e, t) => i => ({
					source: r.POST,
					action: n.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.I(i, e),
					subreddit: o.ib(i),
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s),
				n = i("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(n.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				r = i.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
				a = i("./src/reddit/actions/pages/profilePrivate/index.ts"),
				d = i("./src/reddit/components/EmptyProfile/index.ts"),
				l = i("./src/reddit/components/JumpToContent/index.tsx"),
				c = i("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = i("./src/reddit/components/PostList/index.tsx"),
				u = i("./src/reddit/components/ProfileItemList/index.tsx"),
				p = i("./src/reddit/components/ProfileNavMenu/index.tsx"),
				h = i("./src/reddit/components/ProfileSidebar/index.tsx"),
				g = i("./node_modules/lodash/noop.js"),
				b = i.n(g),
				y = i("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = i("./src/reddit/actions/post.ts"),
				f = i("./src/reddit/components/TrackingHelper/index.tsx"),
				C = i("./src/reddit/components/PostList/Placeholder.tsx"),
				w = i("./src/reddit/actions/postList.ts"),
				S = i("./src/reddit/contexts/PageLayer/index.tsx"),
				I = i("./src/reddit/helpers/isComment.ts"),
				k = i("./src/reddit/helpers/isPost.ts"),
				x = i("./src/reddit/helpers/trackers/post.ts"),
				P = (i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./src/lib/objectSelector/index.ts")),
				O = i("./src/reddit/models/Flair/index.ts"),
				E = i("./src/reddit/models/PostCreationForm/index.ts"),
				j = i("./src/reddit/models/Vote/index.ts");
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
						type: O.f.Text,
						text: "hello world"
					}, {
						type: O.f.Spoiler,
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
						type: O.f.Text,
						text: "hello world"
					}, {
						type: O.f.Spoiler,
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
						rteMode: E.i.RICH_TEXT,
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
						type: O.f.Text,
						text: "hello world"
					}, {
						type: O.f.Spoiler,
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
						rteMode: E.i.RICH_TEXT,
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
						type: O.f.Text,
						text: "hello world"
					}, {
						type: O.f.Spoiler,
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
						rteMode: E.i.RICH_TEXT,
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
					rteMode: E.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, j.a.notVoted;
			var T;
			const L = Object(P.a)((e, {
					listingKey: t
				}) => {
					const i = e.posts.models;
					return N(e, {
						listingKey: t
					}).filter(e => {
						if (Object(I.a)(e)) return !0; {
							const t = i[e];
							return t && !t.hidden
						}
					})
				}),
				N = Object(P.a)((e, {
					listingKey: t
				}) => {
					const i = e.pages.profileOverview.chrono.ids[t];
					return i ? [...i] : []
				}),
				R = Object(P.a)((e, {
					listingKey: t
				}) => {
					return L(e, {
						listingKey: t
					}).reduce((t, i) => {
						const s = Object(I.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				M = (Object(P.a)((e, {
					listingKey: t
				}) => {
					const i = e.posts.models;
					return M(e, {
						listingKey: t
					}).filter(e => {
						const t = i[e];
						return t && !t.hidden
					})
				}), Object(P.a)((e, {
					listingKey: t
				}) => {
					return L(e, {
						listingKey: t
					}).map(t => Object(I.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				A = Object(P.a)((e, {
					listingKey: t
				}) => {
					const i = e.posts.models,
						s = M(e, {
							listingKey: t
						}),
						r = {};
					return s.forEach(e => r[e] = i[e]), r
				}),
				F = Object(P.a)((e, {
					listingKey: t
				}) => {
					const i = e.features.comments.models,
						s = L(e, {
							listingKey: t
						}),
						r = {};
					return s.forEach(e => !!Object(I.a)(e) && (r[e] = i[e])), r
				});
			var G = i("./src/reddit/selectors/subreddit.ts"),
				B = i("./src/reddit/selectors/tracking.ts"),
				K = i("./src/reddit/selectors/user.ts");
			const D = (e, t) => (e, t, i) => Object(I.a)(e) ? 120 : 47,
				U = (Object(S.u)(), {
					apiError: (e, {
						listingKey: t
					}) => e.pages.profileOverview.chrono.api.error[t],
					apiPending: (e, {
						listingKey: t
					}) => e.pages.profileOverview.chrono.api.pending[t],
					currentUser: K.k,
					layout: S.R,
					loadMore: (e, {
						listingKey: t
					}) => e.pages.profileOverview.chrono.loadMore[t],
					subredditsById: G.Z,
					viewportDataLoaded: B.a,
					commentsById: F,
					itemIds: L,
					itemIdToPostId: R,
					postsById: A,
					estimateItemHeight: D
				}),
				W = Object(o.c)(U);
			Object(n.b)(W, (e, t) => ({
				onBottomViewed: (t, i) => e(w.c(t, i)),
				openPost: t => {
					e(v.L(t))
				},
				trackOnPostEnteredViewport: (t, i) => {
					Object(k.a)(t) && e(v.O(t))
				},
				trackOnPostExitedViewport: (t, i, s) => {
					Object(k.a)(t) && e(v.P(t, s))
				},
				fireAdPixelsOfType: b.a
			}), (e, t, i) => ({
				...e,
				...t,
				...i,
				postClickEventFactory: (e, t) => Object(x.h)(e, t)
			}));
			var H = i("./src/reddit/featureFlags/index.ts"),
				V = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				z = i("./src/reddit/models/Profile/index.ts");
			const q = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.pending[t],
				Z = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.error[t],
				J = Object(P.a)((e, {
					listingKey: t
				}) => {
					return (e.profilePrivatePage.ids[t] || []).reduce((t, i) => {
						const s = Object(I.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				Q = Object(S.u)(),
				X = Object(S.u)(),
				Y = {
					apiError: Z,
					apiPending: q,
					layout: S.R,
					loadMore: (e, {
						listingKey: t
					}) => {
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[t] || !e.profilePrivatePage.pageInfo[t].hasNextPage) return null;
						const i = e.profilePrivatePage.ids[t];
						return {
							token: i[i.length - 1],
							dist: V.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !q(e, t) && !Z(e, t)
				},
				$ = Object(o.c)({
					...Y,
					currentUser: K.k,
					commentsById: e => e.features.comments.models,
					itemIds: (e, {
						listingKey: t
					}) => -1 === t.indexOf(z.b.Saved) && -1 === t.indexOf(z.b.ReceivedGildings) && -1 === t.indexOf(z.b.GivenGildings) ? [] : e.profilePrivatePage.ids[t] || [],
					itemIdToPostId: J,
					estimateItemHeight: D
				}),
				ee = Object(o.c)({
					...Y,
					measureScrollFPS: H.d.measureScrollFPS,
					postIds: (e, {
						listingKey: t
					}) => t.indexOf(z.b.Saved) > -1 || t.indexOf(z.b.ReceivedGildings) > -1 || t.indexOf(z.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[t] || [],
					postListPlaceholderComponent: () => C.a
				}),
				te = e => ({
					onBottomViewed: b.a,
					openPost: t => {
						e(v.L(t))
					},
					trackOnPostEnteredViewport: b.a,
					fireAdPixelsOfType: (t, i) => {
						e(v.z(t, i))
					}
				}),
				ie = Object(n.b)($, te, (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(x.h)(e, t)
				})),
				se = Object(n.b)(ee, e => ({
					...te(e),
					onFirstPostChanged: b.a,
					adBrandSafetyStatusReceived: b.a,
					trackOnPostExitedViewport: b.a
				}), (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(x.h)(e, t),
					postComponentForLayout: y.b
				}));
			var re = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				ne = i("./src/reddit/helpers/trackers/screenview.ts"),
				oe = i("./src/reddit/layout/page/Listing/index.tsx"),
				ae = i("./src/reddit/pages/ProfilePrivate/index.m.less"),
				de = i.n(ae);
			const le = Object(o.c)({
					currentUser: K.k
				}),
				ce = Object(n.b)(le, (e, t) => ({
					onLoadMore: () => e(Object(a.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				me = (e => Object(f.c)(Q(ie(e))))(u.a),
				ue = (e => Object(f.c)(X(se(e))))(m.a);
			class pe extends r.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = z.a[e]();
					return () => r.a.createElement(d.d, {
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
					} = this.props, s = i.toLowerCase(), n = Object(re.b)(s, t);
					return e && e.displayText && e.displayText.toLowerCase() === s ? t === z.b.Saved || t === z.b.ReceivedGildings || t === z.b.GivenGildings ? r.a.createElement(me, {
						className: de.a.mixedList,
						itemComponent: c.a,
						listingKey: n,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(ne.s)(n),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(ue, {
						listingKey: n,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(ne.s)(n),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(d.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return r.a.createElement(oe.a, {
						fitPageToContent: !0,
						contentNavBar: r.a.createElement(p.a, {
							profileName: e
						}),
						content: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, null), this.renderContent()),
						sidebar: r.a.createElement(h.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ce(pe)
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			const s = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"5ca58eb58d11"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"1f85b9d97f01"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"28f8d4f991f6"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"0c31c81d8e73"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"32a6702a2bfe"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"e9e8f9fb65db"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.4bcb64495bc7e3a69d5d.js.map