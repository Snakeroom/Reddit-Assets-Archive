// https://www.redditstatic.com/desktop2x/ProfilePrivate.7fb6a1b6caef870a41c6.js
// Retrieved at 3/10/2022, 11:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "privateListingPending", (function() {
				return N
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return M
			})), s.d(t, "privatePostListingLoaded", (function() {
				return R
			})), s.d(t, "privateListingFailed", (function() {
				return A
			})), s.d(t, "profilePrivateRequested", (function() {
				return G
			})), s.d(t, "morePending", (function() {
				return B
			})), s.d(t, "moreMixedLoaded", (function() {
				return F
			})), s.d(t, "morePostLoaded", (function() {
				return K
			})), s.d(t, "moreFailed", (function() {
				return D
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return U
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/externalAccount.ts"),
				n = s("./src/reddit/actions/pages/profileShared.ts"),
				o = s("./src/reddit/actions/profile/index.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/ProfileDownvoted.json"),
				l = s("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = s("./src/redditGQL/operations/ProfileHidden.json"),
				m = s("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				p = s("./src/redditGQL/operations/ProfileSaved.json"),
				u = s("./src/redditGQL/operations/ProfileUpvoted.json");
			var h = s("./src/reddit/models/Comment/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				b = s("./src/reddit/models/Profile/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				w = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var x = e => {
					const {
						listingType: t,
						rawData: s,
						includeIdentity: i,
						includeModerated: r
					} = e, {
						identity: n
					} = s, o = (e => {
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
					if (i && (o.account = Object(I.a)(n) || null, o.preferences = Object(w.a)(n.preferences, n.interactions) || null, n.redditor.profile && (o.profiles[n.redditor.profile.id] = Object(S.a)(n.redditor.profile))), r && n.redditor && n.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(S.b)(n.redditor.moderatedSubreddits);
						o.moderatedPageInfo = t, o.moderatedSubredditIds = e, o.subreddits = s
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
					})(s, t);
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
							crosspost: s
						} = e && Object(C.a)(e);
						o.posts[t.id] = t, s && (o.posts[s.id] = s), Object(g.i)(e) || Object(g.j)(e) || (e.authorFlair && (o.authorFlair[t.belongsTo.id] || (o.authorFlair[t.belongsTo.id] = {}), o.authorFlair[t.belongsTo.id][t.author] = Object(v.a)(e.authorFlair)[0]), Object(g.l)(e) ? o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(S.a)(e.profile)) : Object(g.n)(e) && (o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(k.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(f.a)(e.subreddit))))
					}
					return o
				},
				P = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				O = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				E = s("./src/lib/initializeClient/installReducer.ts"),
				j = s("./src/reddit/reducers/features/comments/index.ts");
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
						...p,
						variables: t
					}),
					[b.b.Upvoted]: (e, t) => Object(a.a)(e, {
						...u,
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
				N = Object(i.a)(O.b),
				M = Object(i.a)(O.c),
				R = Object(i.a)(O.i),
				A = Object(i.a)(O.a),
				G = e => async (t, s, i) => {
					const {
						profileName: a,
						listingType: d
					} = e.params, l = s(), c = Object(P.b)(a.toLowerCase(), d), m = l.profilePrivatePage.ids[c] && l.profilePrivatePage.ids[c].length > 0, p = !!l.profilePrivatePage.api.error[c];
					if (l.profilePrivatePage.api.pending[c] || m && !p) return;
					const {
						account: u
					} = l.user, h = !u, g = !(u && u.displayText && l.profiles.moderated.models[u.displayText.toLowerCase()] && l.profiles.moderated.models[u.displayText.toLowerCase()].length);
					t(N({
						listingKey: c
					}));
					const y = {
							includeIdentity: h,
							includeModerated: g,
							first: O.h,
							after: null
						},
						v = await _[d](i.gqlContext(), y);
					if (v.ok && v.body) {
						const e = L({
							rawData: T(d, v),
							listingType: d,
							includeIdentity: h,
							includeModerated: g
						});
						d === b.b.Saved || d === b.b.ReceivedGildings || d === b.b.GivenGildings ? await t(M({
							listingKey: c,
							profileName: a,
							...e
						})) : await t(R({
							listingKey: c,
							profileName: a,
							...e
						})), await Promise.all([t(Object(n.d)(a)), t(Object(r.o)(a)), t(Object(o.d)(a))])
					} else t(A({
						listingKey: c,
						error: v.error
					}))
				}, B = Object(i.a)(O.f), F = Object(i.a)(O.e), K = Object(i.a)(O.g), D = Object(i.a)(O.d), U = e => async (t, s, i) => {
					const r = s(),
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
					t(B({
						listingKey: o
					}));
					const d = await _[e](i.gqlContext(), a);
					if (d.ok && d.body) {
						const s = L({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: d.body.data
						});
						e === b.b.Saved || e === b.b.ReceivedGildings || e === b.b.GivenGildings ? await t(F({
							listingKey: o,
							profileName: n,
							...s
						})) : await t(K({
							listingKey: o,
							profileName: n,
							...s
						}))
					} else t(D({
						listingKey: o,
						error: d.error
					}))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
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
				n = s("./src/reddit/components/ClassicPost/index.tsx"),
				o = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				g = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				y = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				C = s.n(f);
			const w = Object(o.b)(() => Object(a.c)({
				comment: b.b,
				isAwarded: (e, t) => {
					const s = Object(b.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(y.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: v.bb
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var S = Object(c.a)(w(e => {
					const {
						comment: t,
						commentId: s,
						first: i,
						isAwarded: n,
						isNightmodeOn: o,
						last: a,
						openPost: d,
						showModTools: c
					} = e;
					if (!t) return null;
					return r.a.createElement(p.a, {
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
							[C.a.isFirst]: i
						})
					}, r.a.createElement("div", {
						className: C.a.commentSeparator
					}), t.parentId && r.a.createElement("div", {
						className: C.a.commentSeparator
					}), r.a.createElement("div", {
						className: C.a.commentContentWrapper
					}, r.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: c,
						isExpanded: !0
					})))))
				})),
				k = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isComment.ts"),
				P = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				O = s.n(P),
				E = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(I.u)({
					currentProfileName: I.i,
					isCommentsPage: I.x,
					isCommentPermalink: I.w,
					isProfilePostListing: I.L,
					pageLayer: e => e
				}),
				T = E.a.wrapped(k.a, "OverviewCommentPost", O.a),
				L = E.a.wrapped(n.default, "ClassicPost", O.a);
			t.a = _(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: i,
					allowModToolsUnderComments: n,
					height: o,
					width: a,
					...d
				} = e;
				return Object(x.a)(t) ? s ? r.a.createElement(r.a.Fragment, null, r.a.createElement(T, j({}, d, {
					availableWidth: a,
					commentId: t
				})), r.a.createElement(S, {
					commentId: t,
					first: s,
					last: i,
					showModTools: n
				})) : r.a.createElement(S, {
					commentId: t,
					first: s,
					last: i,
					showModTools: n
				}) : r.a.createElement(L, j({}, d, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/last.js"),
				r = s.n(i),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				c = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				u = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/helpers/isComment.ts"),
				y = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/lib/LRUCache/index.ts"),
				f = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				w = s("./src/reddit/components/PostList/index.m.less"),
				S = s.n(w);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const I = 500,
				x = new v.a(I),
				P = new v.a(I),
				O = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				E = (e, t, s, i, r, n) => {
					const o = `entered-${e}-${t}-${s?`last-${i}-${r}`:""}`;
					let a = x.get(o);
					return void 0 === a && (a = () => {
						s && n.onBottomViewed(i, r), n.trackOnPostEnteredViewport(e, t)
					}, x.set(o, a)), a
				},
				j = (e, t) => {
					const s = `click-${e}`;
					let i = P.get(s);
					return void 0 === i && (i = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(g.a)(e)
						})
					}, P.set(s, i)), i
				};
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new v.a(I), this.updateScrollerRef = e => {
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
						viewportDataLoaded: s
					} = this.props;
					return f.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const i = f.c.end(e);
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
					} = e, n = Object.keys(s), o = Object.keys(r);
					return o.length !== n.length || !!o.some(e => s[e] !== r[e])
				}
				scrollChildForItem(e, t, s, i, r, n) {
					const {
						listingKey: a,
						listingName: d,
						postClickEventFactory: l
					} = this.props, c = `post-${n}-${e}-${t}-${s?"last-index":""}-${d}-${a}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(c))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: p
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${n}]-[itemId: ${e}]`, g = E(u, n, s, a, d, this.props), b = {
							key: h,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: i,
							isLastInCommentList: r,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: n,
							onClickPost: j(e, this.props),
							postId: u
						}, v = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, n, i),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: g,
							render: e => o.a.createElement(y.a, {
								postId: b.postId
							}, o.a.createElement(v, k({}, b, e)))
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
						layout: s,
						onTryAgain: i
					} = this.props;
					return o.a.createElement("div", {
						className: S.a.placeholder
					}, o.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && o.a.createElement(p.a, {
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
					return o.a.createElement("div", {
						className: S.a.placeholder
					}, o.a.createElement(c.a, {
						isLoading: !!t,
						layout: s,
						countOverride: O[s]
					}), !!e && o.a.createElement(p.a, {
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
					} = this.props, n = i.map((s, r, n) => {
						const o = r === i.length - 1,
							a = r && i[r - 1],
							d = !o && i[r + 1],
							l = !!Object(b.a)(s) && (!a || !Object(b.a)(a) || e[a].postId !== e[s].postId),
							c = !!Object(b.a)(s) && (!d || !Object(b.a)(d) || e[d].postId !== e[s].postId);
						return this.scrollChildForItem(s, r, o, l, c, t)
					});
					return o.a.createElement("div", null, o.a.createElement(u.b, {
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
						viewportTopPadding: h.f + h.s
					}, n), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = _
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
				n = s.n(r);
			t.a = i.a.div("container", n.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/constants/location.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				u = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				g = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				b = s("./src/reddit/selectors/meta.ts"),
				y = s("./src/reddit/components/SidebarFooter/index.m.less"),
				v = s.n(y);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = a.a.a("Link", v.a), w = Object(o.c)({
				isCountrySitesEnabled: h.a,
				isNavbarLikeMwebEnabled: g.a,
				countryCode: b.b
			}), S = Object(n.b)(w), k = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			});
			t.a = k(S(Object(d.c)(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? r.a.createElement(l.a, {
				className: v.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: v.a.LinkContainer
			}, r.a.createElement("div", {
				className: v.a.Column
			}, r.a.createElement(C, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, f._("User Agreement", null, {
				hk: "2RA6JL"
			})), r.a.createElement(C, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, f._("Privacy policy", null, {
				hk: "10K04G"
			}))), r.a.createElement("div", {
				className: v.a.Column
			}, r.a.createElement(C, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, f._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(C, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, f._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), r.a.createElement("div", {
				className: v.a.Copyright
			}, f._("© {year} Reddit, Inc. All rights reserved.", [f._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : r.a.createElement(l.a, {
				className: v.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: v.a.LinkContainer
			}, r.a.createElement("div", {
				className: v.a.Column
			}, r.a.createElement(C, {
				href: "https://www.reddithelp.com"
			}, f._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(C, {
				href: "https://www.reddit.com/coins"
			}, f._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(C, {
				href: "https://www.reddit.com/premium"
			}, f._("Reddit premium", null, {
				hk: "RuO3A"
			})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(C, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, f._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(C, {
				href: `https://www.reddit.com${Object(p.a)()}`
			}, f._("Rereddit", null, {
				hk: "1z3k7C"
			})), r.a.createElement(C, {
				href: "https://www.reddit.com/topics/a-1/"
			}, f._("Topics", null, {
				hk: "349RFt"
			}))), !!c.b[e.countryCode] && r.a.createElement(r.a.Fragment, null, r.a.createElement(C, {
				href: "https://www.redditinc.com/de/policies/user-agreement"
			}, f._("Impressum", null, {
				hk: "4cKXSI"
			})), r.a.createElement(C, {
				href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
			}, f._("Transparency report", null, {
				hk: "3CgBdG"
			})), r.a.createElement(C, {
				href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
				className: v.a.NoneCapitalizeLink
			}, f._("Report NetzDG Content", null, {
				hk: "1nszCF"
			})))), r.a.createElement("div", {
				className: v.a.Column
			}, r.a.createElement(C, {
				href: "https://about.reddit.com"
			}, f._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(C, {
				href: "https://about.reddit.com/careers/"
			}, f._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(C, {
				href: "https://about.reddit.com/press/"
			}, f._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(C, {
				href: "https://www.redditinc.com/advertising"
			}, f._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(C, {
				href: "http://www.redditblog.com/"
			}, f._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(C, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, f._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(C, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, f._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(C, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, f._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(C, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, f._("Mod policy", null, {
				hk: "2gYc2T"
			})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
				className: v.a.CountryLinkContainer
			}, r.a.createElement("div", {
				className: v.a.Column
			}, r.a.createElement(C, {
				href: "/",
				onClick: () => e.sendEvent(Object(u.a)("en"))
			}, f._("USA/Global", null, {
				hk: "3nQepG"
			}))), r.a.createElement("div", {
				className: v.a.Column
			}, r.a.createElement(C, {
				href: "/de/",
				onClick: () => e.sendEvent(Object(u.a)("de"))
			}, f._("Deutsch", null, {
				hk: "31zojm"
			})))), r.a.createElement("div", {
				className: v.a.Copyright
			}, f._("Reddit Inc © {year}. All rights reserved", [f._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(l.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var g = ({
					className: e,
					isOverlay: t,
					style: s
				}) => a.a.createElement("div", {
					className: Object(i.a)(e, p.a.container),
					style: s
				}, a.a.createElement(c.l, {
					className: p.a.button,
					onClick: () => h(t)
				}, u._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				y = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				C = s.n(f),
				w = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const k = d.e[1] + 24,
				I = y.f + 8,
				x = I + 152 + 16,
				P = x + k + 8,
				O = w.a.div("Container", C.a),
				E = w.a.wrapped(({
					className: e,
					isOverlay: t,
					...s
				}) => a.a.createElement(g, S({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?I:8}px)`
					}
				}, s)), "BackToTop", C.a),
				j = ({
					children: e,
					className: t,
					isFakeOverlay: s,
					isSticky: r
				}) => a.a.createElement("div", {
					className: Object(i.a)(t, {
						[C.a.StickyStyles]: r && !s,
						[C.a.StickyStylesFakeOverlay]: !!s
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
							adComponentOnFakeOverlay: s,
							children: i,
							className: r,
							hideFooter: n,
							pageLayer: o
						}
					} = this, d = this.state.isAdSticky && !(!t && !i);
					return a.a.createElement(O, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(j, {
						isFakeOverlay: s,
						isSticky: d
					}, t, i, !n && a.a.createElement(b.a, null)), !this.props.hideBackToTop && a.a.createElement(E, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const T = Object(v.u)();
			t.a = T(_)
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
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/trackers/widgets.ts"),
				h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				b = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(f.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(f.a)(e).widgetColors.sidebarWidgetHeaderColor,
				S = e => {
					const t = C(e);
					return Object(v.f)(t)
				},
				k = e => {
					const t = w(e);
					return Object(v.f)(t)
				};
			var I = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = s.n(I);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(m.u)(), E = Object(n.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						i = t.redditStyle || Object(b.l)(e, {
							subredditId: s
						}),
						r = Object(y.bb)(e);
					return i || r
				},
				nigtmode: y.bb,
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
						e && t && this.props.sendEvent(Object(u.b)(e, t)), this.setState({
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
					return e.backgroundColor = w(this.props), e.color = e.fill = k(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: i,
						headerButton: n,
						id: o,
						onClick: d,
						onHeaderClick: c,
						title: m,
						titleClassName: u,
						truncateThreshold: h
					} = this.props, g = s ? x.a.widgetContentOnly : x.a.widgetContent, b = !i && this.props.styles, y = b ? this.getWidgetBackgroundStyles() : {}, v = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: i,
							[x.a.clickable]: !!d,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": i,
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
						className: Object(a.a)(x.a.widgetTitle, u)
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
					}, e), this.state.isTruncated && r.a.createElement(p.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, P._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(E(Object(d.a)(Object(c.c)(j))))
		},
		"./src/reddit/constants/location.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			var i = s("./src/redditGQL/types.ts");
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
					[i.e.De]: r[i.e.De],
					[i.e.At]: r[i.e.At]
				}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var i = s("./node_modules/lodash/throttle.js"),
				r = s.n(i),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(p),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				g = s.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
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
					}, s = Object(a.a)(g.a.iconWrapper, e.iconWrapperClassName);
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
						className: s
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
						className: s
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(a.a)(g.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(c.a, {
						className: g.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(l.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(g.a.row, e, {
					[g.a.mIsInteractive]: !t.noHover,
					[g.a.mIsSelected]: t.isSelected,
					[g.a.topics]: t.isTopicsStyle,
					[g.a.modNotes]: t.isModNotesStyle
				});
				return o.a.createElement(y, b({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				n = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = s.n(n);
			t.a = i.a.wrapped(r.a, "unstyledInternalLink", o.a)
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
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				n = s.n(r);
			const o = ({
					isLoading: e
				}) => Object(i.a)(n.a.loadingBackground, {
					[n.a["m-loading"]]: e
				}),
				a = e => Object(i.a)(n.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var i, r, n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: n.c.CLICK,
					noun: i.SEE_MORE,
					widget: Object(o.wb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				d = (e, t) => s => ({
					source: r.POST,
					action: n.c.CLICK,
					noun: i.REREDDIT_PROMO,
					post: o.I(s, e),
					subreddit: o.ib(s),
					...t && {
						banner: {
							buttonText: t,
							id: i.REREDDIT_PROMO
						}
					},
					...o.o(s)
				}),
				l = () => e => ({
					source: r.SIDEBAR,
					action: n.c.VIEW,
					noun: i.TOPICS_WIDGET,
					...o.o(e)
				}),
				c = e => t => ({
					source: r.TOPICS_WIDGET,
					action: n.c.CLICK,
					noun: i.TOPIC,
					...o.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(n.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				d = s("./src/reddit/components/EmptyProfile/index.ts"),
				l = s("./src/reddit/components/JumpToContent/index.tsx"),
				c = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = s("./src/reddit/components/PostList/index.tsx"),
				p = s("./src/reddit/components/ProfileItemList/index.tsx"),
				u = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				h = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				g = s("./node_modules/lodash/noop.js"),
				b = s.n(g),
				y = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/components/PostList/Placeholder.tsx"),
				w = s("./src/reddit/actions/postList.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/helpers/isPost.ts"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				P = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/objectSelector/index.ts")),
				O = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts");
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
					const s = e.posts.models;
					return N(e, {
						listingKey: t
					}).filter(e => {
						if (Object(k.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				N = Object(P.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				M = Object(P.a)((e, {
					listingKey: t
				}) => {
					return L(e, {
						listingKey: t
					}).reduce((t, s) => {
						const i = Object(k.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				}),
				R = (Object(P.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return R(e, {
						listingKey: t
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(P.a)((e, {
					listingKey: t
				}) => {
					return L(e, {
						listingKey: t
					}).map(t => Object(k.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				A = Object(P.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models,
						i = R(e, {
							listingKey: t
						}),
						r = {};
					return i.forEach(e => r[e] = s[e]), r
				}),
				G = Object(P.a)((e, {
					listingKey: t
				}) => {
					const s = e.features.comments.models,
						i = L(e, {
							listingKey: t
						}),
						r = {};
					return i.forEach(e => !!Object(k.a)(e) && (r[e] = s[e])), r
				});
			var B = s("./src/reddit/selectors/subreddit.ts"),
				F = s("./src/reddit/selectors/tracking.ts"),
				K = s("./src/reddit/selectors/user.ts");
			const D = (e, t) => (e, t, s) => Object(k.a)(e) ? 120 : 47,
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
					subredditsById: B.Z,
					viewportDataLoaded: F.a,
					commentsById: G,
					itemIds: L,
					itemIdToPostId: M,
					postsById: A,
					estimateItemHeight: D
				}),
				W = Object(o.c)(U);
			Object(n.b)(W, (e, t) => ({
				onBottomViewed: (t, s) => e(w.c(t, s)),
				openPost: t => {
					e(v.L(t))
				},
				trackOnPostEnteredViewport: (t, s) => {
					Object(I.a)(t) && e(v.O(t))
				},
				trackOnPostExitedViewport: (t, s, i) => {
					Object(I.a)(t) && e(v.P(t, i))
				},
				fireAdPixelsOfType: b.a
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				postClickEventFactory: (e, t) => Object(x.h)(e, t)
			}));
			var H = s("./src/reddit/featureFlags/index.ts"),
				V = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				z = s("./src/reddit/models/Profile/index.ts");
			const q = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.pending[t],
				Z = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.error[t],
				J = Object(P.a)((e, {
					listingKey: t
				}) => {
					return (e.profilePrivatePage.ids[t] || []).reduce((t, s) => {
						const i = Object(k.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
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
						const s = e.profilePrivatePage.ids[t];
						return {
							token: s[s.length - 1],
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
					fireAdPixelsOfType: (t, s) => {
						e(v.z(t, s))
					}
				}),
				se = Object(n.b)($, te, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(x.h)(e, t)
				})),
				ie = Object(n.b)(ee, e => ({
					...te(e),
					onFirstPostChanged: b.a,
					adBrandSafetyStatusReceived: b.a,
					trackOnPostExitedViewport: b.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(x.h)(e, t),
					postComponentForLayout: y.b
				}));
			var re = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				ne = s("./src/reddit/helpers/trackers/screenview.ts"),
				oe = s("./src/reddit/layout/page/Listing/index.tsx"),
				ae = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				de = s.n(ae);
			const le = Object(o.c)({
					currentUser: K.k
				}),
				ce = Object(n.b)(le, (e, t) => ({
					onLoadMore: () => e(Object(a.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				me = (e => Object(f.c)(Q(se(e))))(p.a),
				pe = (e => Object(f.c)(X(ie(e))))(m.a);
			class ue extends r.a.Component {
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
								profileName: s
							}
						}
					} = this.props, i = s.toLowerCase(), n = Object(re.b)(i, t);
					return e && e.displayText && e.displayText.toLowerCase() === i ? t === z.b.Saved || t === z.b.ReceivedGildings || t === z.b.GivenGildings ? r.a.createElement(me, {
						className: de.a.mixedList,
						itemComponent: c.a,
						listingKey: n,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(ne.s)(n),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(pe, {
						listingKey: n,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
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
						contentNavBar: r.a.createElement(u.a, {
							profileName: e
						}),
						content: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, null), this.renderContent()),
						sidebar: r.a.createElement(h.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ce(ue)
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"ef02db6febae"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"0cfceae38c2d"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"814175104b66"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"866d62f739ea"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"86986572743b"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"d5dce49159ae"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.7fb6a1b6caef870a41c6.js.map