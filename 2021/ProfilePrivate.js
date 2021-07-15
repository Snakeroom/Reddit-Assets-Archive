// https://www.redditstatic.com/desktop2x/ProfilePrivate.903fb93a7cf046ebf731.js
// Retrieved at 7/15/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, i) {
				var r = s ? s.call(i, e, t) : void 0;
				if (void 0 !== r) return !!r;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var o = Object.keys(e),
					n = Object.keys(t);
				if (o.length !== n.length) return !1;
				for (var d = Object.prototype.hasOwnProperty.bind(t), a = 0; a < o.length; a++) {
					var l = o[a];
					if (!d(l)) return !1;
					var c = e[l],
						p = t[l];
					if (!1 === (r = s ? s.call(i, c, p, l) : void 0) || void 0 === r && c !== p) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "privateListingPending", (function() {
				return H
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return V
			})), s.d(t, "privatePostListingLoaded", (function() {
				return D
			})), s.d(t, "privateListingFailed", (function() {
				return q
			})), s.d(t, "profilePrivateRequested", (function() {
				return $
			})), s.d(t, "morePending", (function() {
				return U
			})), s.d(t, "moreMixedLoaded", (function() {
				return Q
			})), s.d(t, "morePostLoaded", (function() {
				return z
			})), s.d(t, "moreFailed", (function() {
				return J
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return W
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/externalAccount.ts"),
				o = s("./src/reddit/actions/pages/profileShared.ts"),
				n = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/ProfileDownvoted.json"),
				l = s("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = s("./src/redditGQL/operations/ProfileHidden.json"),
				p = s("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				u = s("./src/redditGQL/operations/ProfileSaved.json"),
				m = s("./src/redditGQL/operations/ProfileUpvoted.json");
			var h = s("./src/reddit/models/Comment/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/models/Profile/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/helpers/graphql/helpers.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeModeratorPartFromGql/index.ts"),
				P = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				x = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/models/User/index.ts");
			const I = e => ({
					richtextContent: e.content && e.content.richtext ? Object(v.f)(e.content.richtext) : {},
					type: "rtjson",
					rteMode: x.h.RICH_TEXT
				}),
				w = (e, t) => !(!e || !t || Object(P.d)(t) || !t.authorInfo) && Object(O.b)(e) === Object(O.b)(t.authorInfo),
				C = e => e && !Object(P.d)(e) && e.authorInfo ? Object(O.b)(e.authorInfo) : null;
			var L = e => {
					const {
						associatedAward: t,
						authorInfo: s,
						awardings: i,
						content: r,
						createdAt: o,
						distinguishedAs: n,
						editedAt: d,
						id: a,
						isGildable: l,
						isScoreHidden: c,
						isStickied: p,
						isSaved: u,
						parent: m,
						permalink: h,
						postInfo: f,
						score: P,
						voteState: x
					} = e, L = "ADMIN" === n, S = "MODERATOR" === n, E = i ? Object(v.b)(i) : void 0, T = s && s.__typename === j.c.AvailableRedditor && s.isCakeDayNow || !1, R = s && s.__typename === j.c.AvailableRedditor && s.isPremiumMember || !1, F = {
						allAwardings: E,
						associatedAward: t,
						author: s && Object(O.b)(s) || b.C,
						authorId: s && s.id || "",
						body: r && r.html || "",
						bodyMD: r && r.markdown || "",
						created: Object(v.e)(o) / 1e3,
						distinguishType: n || "",
						editedAt: Object(v.e)(d) / 1e3 || null,
						id: a,
						isAdmin: L,
						isAuthorCakeday: T,
						isAuthorPremium: R,
						isGildable: l,
						isMod: S,
						isOp: w(s, f),
						isSaved: u,
						isScoreHidden: c,
						isStickied: p,
						markdown: r && r.markdown || "",
						media: I(e),
						parentId: m && m.id,
						permalink: `https://www.reddit.com${h}`,
						postAuthor: C(f),
						postId: f && f.id || "",
						postTitle: f && f.title || null,
						score: P || 0,
						subredditId: "",
						voteState: Object(v.d)(x),
						...Object(y.a)(e),
						collapsed: !1,
						collapsedReason: null,
						collapsedBecauseCrowdControl: !1,
						isDeleted: !1,
						isLocked: !1,
						deletedBy: null,
						sendReplies: !0,
						modReports: [],
						userReports: [],
						isSystem: !1
					};
					return e.postInfo && Object(g.m)(e.postInfo) ? F.subredditId = e.postInfo.subreddit.id : e.postInfo && Object(g.l)(e.postInfo) && (F.subredditId = e.postInfo.profile.id), F
				},
				S = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				T = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				F = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var G = e => {
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
						return e !== f.a.Saved && e !== f.a.ReceivedGildings && e !== f.a.GivenGildings || (t.comments = {}), t
					})(t);
					if (!o) return n;
					if (i && (n.account = Object(O.a)(o) || null, n.preferences = Object(T.a)(o.preferences, o.interactions) || null, o.redditor.profile && (n.profiles[o.redditor.profile.id] = Object(R.a)(o.redditor.profile))), r && o.redditor && o.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(R.b)(o.redditor.moderatedSubreddits);
						n.moderatedPageInfo = t, n.moderatedSubredditIds = e, n.subreddits = s
					}
					const d = ((e, t) => {
						switch (t) {
							case f.a.Downvoted:
								return e.identity.downvotedPosts;
							case f.a.Hidden:
								return e.identity.hiddenPosts;
							case f.a.Saved:
								return e.identity.saved;
							case f.a.Upvoted:
								return e.identity.upvotedPosts;
							case f.a.ReceivedGildings:
								return e.identity.receivedGildings;
							case f.a.GivenGildings:
								return e.identity.givenGildings
						}
					})(s, t);
					if (!d) return n;
					n.pageInfo = d.pageInfo;
					for (const {
							node: a
						} of d.edges) {
						let e;
						if (a.__typename === h.d.Comment) {
							const t = L(a);
							if (n.comments || (n.comments = {}), n.comments[t.id] = t, n.itemIds || (n.itemIds = []), n.itemIds.push(t.id), a.authorFlair && (n.authorFlair[t.subredditId] || (n.authorFlair[t.subredditId] = {}), n.authorFlair[t.subredditId][t.author] = Object(S.a)(a.authorFlair)[0]), e = a.postInfo, a.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(P.a)(a.postInfo);
								n.posts[e.id] = e, t && (n.posts[t.id] = t)
							}
						} else e = a, n.itemIds || (n.itemIds = []), n.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: s
						} = e && Object(P.a)(e);
						n.posts[t.id] = t, s && (n.posts[s.id] = s), Object(g.i)(e) || Object(g.j)(e) || (e.authorFlair && (n.authorFlair[t.belongsTo.id] || (n.authorFlair[t.belongsTo.id] = {}), n.authorFlair[t.belongsTo.id][t.author] = Object(S.a)(e.authorFlair)[0]), Object(g.l)(e) ? n.profiles[e.profile.id] || (n.profiles[e.profile.id] = Object(R.a)(e.profile)) : Object(g.m)(e) && (n.subreddits[e.subreddit.id] || (n.subreddits[e.subreddit.id] = Object(F.a)(e.subreddit)), n.postFlair[e.subreddit.id] || (n.postFlair[e.subreddit.id] = Object(E.a)(e.subreddit))))
					}
					return n
				},
				k = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				N = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				M = s("./src/lib/initializeClient/installReducer.ts"),
				A = s("./src/reddit/reducers/features/comments/index.ts");
			Object(M.a)({
				features: {
					comments: A.a
				}
			});
			const K = {
					[f.a.Downvoted]: (e, t) => Object(d.a)(e, {
						...a,
						variables: t
					}),
					[f.a.Hidden]: (e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}),
					[f.a.Saved]: (e, t) => Object(d.a)(e, {
						...u,
						variables: t
					}),
					[f.a.Upvoted]: (e, t) => Object(d.a)(e, {
						...m,
						variables: t
					}),
					[f.a.ReceivedGildings]: (e, t) => Object(d.a)(e, {
						...p,
						variables: t
					}),
					[f.a.GivenGildings]: (e, t) => Object(d.a)(e, {
						...l,
						variables: t
					})
				},
				_ = (e, t) => {
					switch (e) {
						case f.a.Downvoted:
						case f.a.Hidden:
						case f.a.Saved:
						case f.a.Upvoted:
						case f.a.ReceivedGildings:
						case f.a.GivenGildings:
							return t.body.data
					}
				},
				B = e => {
					switch (e.listingType) {
						case f.a.Downvoted:
						case f.a.Hidden:
						case f.a.Saved:
						case f.a.Upvoted:
						case f.a.ReceivedGildings:
						case f.a.GivenGildings:
							return G(e)
					}
				},
				H = Object(i.a)(N.b),
				V = Object(i.a)(N.c),
				D = Object(i.a)(N.i),
				q = Object(i.a)(N.a),
				$ = e => async (t, s, i) => {
					const {
						profileName: d,
						listingType: a
					} = e.params, l = s(), c = Object(k.b)(d.toLowerCase(), a), p = l.profilePrivatePage.ids[c] && l.profilePrivatePage.ids[c].length > 0, u = !!l.profilePrivatePage.api.error[c];
					if (l.profilePrivatePage.api.pending[c] || p && !u) return;
					const {
						account: m
					} = l.user, h = !m, g = !(m && m.displayText && l.profiles.moderated.models[m.displayText.toLowerCase()] && l.profiles.moderated.models[m.displayText.toLowerCase()].length);
					t(H({
						listingKey: c
					}));
					const b = {
							includeIdentity: h,
							includeModerated: g,
							first: N.h,
							after: null
						},
						v = await K[a](i.gqlContext(), b);
					if (v.ok && v.body) {
						const e = B({
							rawData: _(a, v),
							listingType: a,
							includeIdentity: h,
							includeModerated: g
						});
						a === f.a.Saved || a === f.a.ReceivedGildings || a === f.a.GivenGildings ? await t(V({
							listingKey: c,
							profileName: d,
							...e
						})) : await t(D({
							listingKey: c,
							profileName: d,
							...e
						})), await Promise.all([t(Object(o.d)(d)), t(Object(r.o)(d)), t(Object(n.d)(d))])
					} else t(q({
						listingKey: c,
						error: v.error
					}))
				}, U = Object(i.a)(N.f), Q = Object(i.a)(N.e), z = Object(i.a)(N.g), J = Object(i.a)(N.d), W = e => async (t, s, i) => {
					const r = s(),
						o = r.user.account && r.user.account.displayText && r.user.account.displayText.toLowerCase();
					if (!o) return;
					const n = Object(k.b)(o, e);
					if (!r.profilePrivatePage.ids[n] || !r.profilePrivatePage.ids[n].length || !r.profilePrivatePage.pageInfo || !r.profilePrivatePage.pageInfo[n].hasNextPage || r.profilePrivatePage.api.error[n] || r.profilePrivatePage.api.pending[n]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: r.profilePrivatePage.pageInfo[n].endCursor,
						first: N.h
					};
					t(U({
						listingKey: n
					}));
					const a = await K[e](i.gqlContext(), d);
					if (a.ok && a.body) {
						const s = B({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: a.body.data
						});
						e === f.a.Saved || e === f.a.ReceivedGildings || e === f.a.GivenGildings ? await t(Q({
							listingKey: n,
							profileName: o,
							...s
						})) : await t(z({
							listingKey: n,
							profileName: o,
							...s
						}))
					} else t(J({
						listingKey: n,
						error: a.error
					}))
				}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return X
			})), s.d(t, "a", (function() {
				return Y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				n = s("./node_modules/lodash/last.js"),
				d = s.n(n),
				a = s("./node_modules/lodash/throttle.js"),
				l = s.n(a),
				c = s("./node_modules/react/index.js"),
				p = s.n(c),
				u = s("./node_modules/shallowequal/index.js"),
				m = s.n(u),
				h = s("./src/lib/addQueryParams/index.ts"),
				g = s("./src/lib/ads/index.ts"),
				f = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/lessComponent.tsx"),
				P = s("./src/lib/opener/index.ts"),
				O = s("./src/lib/sentry/index.ts"),
				x = s("./src/reddit/components/PostList/LoadMore.tsx"),
				j = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				I = s("./src/reddit/components/Scroller/Simple.tsx"),
				w = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				L = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
				T = s("./src/reddit/helpers/getClickInfo.ts"),
				R = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				F = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				G = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/helpers/brandSafety/index.ts"),
				N = s("./src/reddit/helpers/trackers/ads.ts"),
				M = s("./src/lib/LRUCache/index.ts"),
				A = s("./src/telemetry/index.ts"),
				K = s("./src/telemetry/models/Timer.ts"),
				_ = s("./src/reddit/components/PostList/index.m.less"),
				B = s.n(_);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 500, D = new M.a(V), q = new M.a(V), $ = new M.a(V), U = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, Q = y.a.div("SeeMore", B.a), z = y.a.wrapped(F.a, "ArrowRight", B.a), J = (e, t, s, i, r, o, n, d, a) => {
				const l = `entered-${e}-${t}-${s?`last-${i}-${r}`:""}-${o}`;
				let c = D.get(l);
				return void 0 === c && (c = () => {
					s && n.onBottomViewed(i, r), n.trackOnPostEnteredViewport(e, t, d, a)
				}, D.set(l, c)), c
			}, W = (e, t, s, i, r) => {
				const o = `left-${e}-${t}`;
				let n = q.get(o);
				return void 0 === n && (n = o => {
					s.trackOnPostExitedViewport(e, t, o, i, r)
				}, q.set(o, n)), n
			}, X = (e, t, s = !1) => {
				const i = `click-${e}`;
				let r = $.get(i);
				return void 0 === r && (r = (e, i, r, o, n) => {
					if (i.isSponsored) {
						t.fireAdPixelsOfType(i, w.a.Click);
						const {
							source: e
						} = Object(g.t)(i, o);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							r && (t = Object(E.a)(i.id, r, t).url), Object(N.a)(i, n), Object(P.d)(t, P.c.BLANK)
						}
					} else t.openPost({
						postOrComment: i,
						clickInfo: Object(T.a)(e),
						isFrontpage: s
					})
				}, $.set(i, r)), r
			}, Z = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Y extends p.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new M.a(V), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = l()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = o()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, i = e(), r = [];
						i.forEach(e => r.push(e.id));
						const o = r.map(e => t[e]).filter(Boolean),
							n = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(k.a)(o, n))
					}, b.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && A.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = A.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = A.c.end(this.timerId);
						setTimeout(() => Object(A.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && A.c.cancel(this.timerId), e.postIds.length && (this.timerId = A.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (v.a.read(() => this.checkAndSendScreenview()), this.timerId && A.c.has(this.timerId)) {
						const e = A.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(A.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const i = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					i && i !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(i)
				}
				componentWillUnmount() {
					this.timerId && A.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && d()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return A.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const i = A.c.end(e);
					setTimeout(() => {
						s(t(i, K.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						triggerNewPostPill: s,
						...i
					} = this.props, {
						postsById: r,
						triggerNewPostPill: o,
						...n
					} = e, d = Object.keys(i), a = Object.keys(n);
					if (a.length !== d.length) return !0;
					if (a.some(e => {
							let t = !1;
							return t = "function" == typeof i[e] || "object" == typeof i[e] ? !m()(i[e], n[e]) : i[e] !== n[e]
						})) return !0;
					if (t === r) return !1;
					if (s !== o) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((i, o) => {
							const n = 0 === o;
							return s({
								isFirstPost: n,
								layout: e,
								post: t[i]
							}) !== s({
								isFirstPost: n,
								layout: e,
								post: r[i]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, i) {
					const {
						currentProfileName: r,
						hostPostData: o,
						isCommentPermalink: n,
						isCommentsPage: d,
						isFrontpage: a,
						isProfilePostListing: l,
						isTopicPage: c,
						isCommentCountAnimationEnabled: u,
						isVoteCountAnimationEnabled: m,
						isCountAnimShadowTestEnabled: h,
						listingBelowVariant: g,
						listingKey: f,
						listingName: v,
						pageLayer: y,
						pageReferrer: P,
						redditStyle: x,
						shouldHideFlair: j,
						triggerNewPostPill: I,
						postIds: w
					} = this.props, C = 0 === t, S = `post-${i}-${e}-${t}-${s?"last-index":""}-${v}-${f}-${P}`;
					let E;
					if (void 0 === (E = this.scrollChildCache.get(S))) {
						const {
							inSubredditOrProfile: T,
							postsById: F
						} = this.props, k = F[e], N = k.crosspostRootId && F[k.crosspostRootId] ? F[k.crosspostRootId] : k;
						k.crosspostRootId && !F[k.crosspostRootId] && O.c.withScope(e => {
							e.setExtra("errorType", b.r.API), e.setExtra("description", `Post ${k.id} is crosspost of ${k.crosspostRootId}, but ` + `${k.crosspostRootId} details are missing in the state`), O.c.captureMessage("Crosspost parent details are missing")
						});
						const M = this.props.postComponentForLayout({
							isCrosspost: !!k.crosspostRootId,
							isFirstPost: C,
							layout: i,
							post: N
						});
						let A = `post-list-item-[layout: ${i}]-[postId: ${e}]`;
						this.props.listingBelowVariant && f && (A += `--${f}`);
						const K = J(e, i, s, f, v, P, this.props, t, this.props.hostPostData),
							_ = W(e, i, this.props, t, y),
							B = X(e, this.props, a),
							H = N.media && N.media.type === G.o.EMBED ? N.media.provider : null,
							V = u && !k.isSponsored,
							D = m && !k.isSponsored && !k.isScoreHidden;
						E = {
							estHeight: Object(R.c)(k, i),
							id: e,
							isFocusable: !(!N.media || !(i === L.g.Large || i === L.g.Classic && Object(G.G)(N.media))) && (G.d.has(N.media.type) && (!H || !G.s.has(H)) && !N.isSpoiler && !N.isNSFW),
							trackOnEnteredViewport: K,
							trackOnExitedViewport: _,
							render: ({
								className: i,
								height: u,
								width: m,
								remeasure: b,
								setScrollerChildRef: P,
								shouldLoadInitially: O
							}) => p.a.createElement(M, {
								className: i,
								currentProfileName: r,
								key: A,
								availableWidth: m,
								eventFactory: this.eventFactoryHandler,
								first: C,
								forceLoadMedia: O,
								hostPostData: o,
								inSubredditOrProfile: T,
								isCommentPermalink: n,
								isCommentsPage: d,
								isFrontpage: a,
								isProfilePostListing: l,
								isTopicPage: c,
								isCommentCountAnimationEnabled: V,
								isVoteCountAnimationEnabled: D,
								isCountAnimShadowTestEnabled: h,
								listingBelowVariant: g,
								listingKey: f,
								listingName: v,
								pageLayer: y,
								last: s,
								onClickPost: B,
								onSizeChanged: b,
								postId: e,
								postIds: w,
								redditStyle: x,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: P,
								shouldHideFlair: j,
								onceInViewport: () => {
									null == I || I(t)
								}
							})
						}, this.scrollChildCache.set(S, E)
					}
					return E
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return p.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: i,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const n = o;
					return p.a.createElement("div", {
						className: B.a.placeholder
					}, p.a.createElement(n, {
						className: t,
						isLoading: !e,
						layout: i
					}), !!e && p.a.createElement(j.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: i,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!s) return p.a.createElement("div", {
						className: B.a.placeholder
					}, p.a.createElement(x.a, {
						className: r,
						isLoading: !!t,
						layout: i,
						countOverride: U[i]
					}), !!e && p.a.createElement(j.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: o,
						layout: n,
						location: d,
						loadMore: a,
						postIds: l,
						onLoadMore: u
					} = this.props;
					let m = l.map((e, t, s) => {
						const i = t === l.length - 1;
						return this.scrollChildForPost(e, t, i, n)
					});
					r && (m = Z(m, r));
					const g = this.props.measureScrollFPS ? `post-listings-${n}` : void 0,
						v = d ? Object(i.e)(d) : null,
						y = v || o;
					return p.a.createElement(c.Fragment, null, p.a.createElement(I.b, {
						innerRef: this.updateScrollerRef,
						className: y ? B.a.truncatedPostList : Object(f.a)(B.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: a && a.token ? a.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: u,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: g,
						viewportTopPadding: C.f
					}, m), v && p.a.createElement(Q, {
						className: B.a.seeMoreButton
					}, p.a.createElement(S.a, {
						className: B.a.seeMorePostsText,
						to: Object(h.a)(v, {
							type: b.Vb.Posts
						})
					}, H._("See More Posts", null, {
						hk: "3o0CqI"
					}), p.a.createElement(z, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Y.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: p.a.Fragment
			}
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			}));
			var i = s("./node_modules/lodash/noop.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postList.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/isComment.ts"),
				u = s("./src/reddit/helpers/isPost.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const v = (e, t) => (e, t, s) => Object(p.a)(e) ? 120 : 47,
				y = Object(c.t)(),
				P = {
					apiError: h.a,
					apiPending: h.b,
					currentUser: b.j,
					layout: c.O,
					loadMore: h.d,
					subredditsById: g.Z,
					viewportDataLoaded: f.a,
					commentsById: h.g,
					itemIds: h.f,
					itemIdToPostId: h.e,
					postsById: h.h,
					estimateItemHeight: v
				},
				O = Object(n.c)(P),
				x = Object(o.b)(O, (e, t) => ({
					onBottomViewed: (t, s) => e(a.c(t, s)),
					openPost: t => {
						e(d.M(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(u.a)(t) && e(d.P(t))
					},
					trackOnPostExitedViewport: (t, s, i) => {
						Object(u.a)(t) && e(d.Q(t, i))
					},
					fireAdPixelsOfType: r.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(m.h)(e, t)
				}));
			t.a = e => Object(l.c)(y(x(e)))
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
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
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
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				a = s("./src/reddit/components/EmptyProfile/index.ts"),
				l = s("./src/reddit/components/JumpToContent/index.tsx"),
				c = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				p = s("./src/reddit/components/PostList/index.tsx"),
				u = s("./src/reddit/components/ProfileItemList/index.tsx"),
				m = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				h = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				g = s("./node_modules/lodash/noop.js"),
				f = s.n(g),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/components/PostList/Placeholder.tsx"),
				O = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/featureFlags/index.ts"),
				I = s("./src/reddit/helpers/trackers/post.ts"),
				w = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				L = s("./src/reddit/helpers/isComment.ts"),
				S = s("./src/reddit/models/Profile/index.ts");
			const E = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.pending[t],
				T = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.error[t],
				R = Object(w.a)((e, {
					listingKey: t
				}) => {
					return (e.profilePrivatePage.ids[t] || []).reduce((t, s) => {
						const i = Object(L.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				});
			var F = s("./src/reddit/selectors/user.ts");
			const G = Object(x.t)(),
				k = Object(x.t)(),
				N = {
					apiError: T,
					apiPending: E,
					layout: x.O,
					loadMore: (e, {
						listingKey: t
					}) => {
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[t] || !e.profilePrivatePage.pageInfo[t].hasNextPage) return null;
						const s = e.profilePrivatePage.ids[t];
						return {
							token: s[s.length - 1],
							dist: C.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !E(e, t) && !T(e, t)
				},
				M = Object(n.c)({
					...N,
					currentUser: F.j,
					commentsById: e => e.features.comments.models,
					itemIds: (e, {
						listingKey: t
					}) => -1 === t.indexOf(S.a.Saved) && -1 === t.indexOf(S.a.ReceivedGildings) && -1 === t.indexOf(S.a.GivenGildings) ? [] : e.profilePrivatePage.ids[t] || [],
					itemIdToPostId: R,
					estimateItemHeight: O.b
				}),
				A = Object(n.c)({
					...N,
					measureScrollFPS: j.d.measureScrollFPS,
					postIds: (e, {
						listingKey: t
					}) => t.indexOf(S.a.Saved) > -1 || t.indexOf(S.a.ReceivedGildings) > -1 || t.indexOf(S.a.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[t] || [],
					postListPlaceholderComponent: () => P.a
				}),
				K = e => ({
					onBottomViewed: f.a,
					openPost: t => {
						e(v.M(t))
					},
					trackOnPostEnteredViewport: f.a,
					fireAdPixelsOfType: (t, s) => {
						e(v.z(t, s))
					}
				}),
				_ = Object(o.b)(M, K, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(I.h)(e, t)
				})),
				B = Object(o.b)(A, e => ({
					...K(e),
					onFirstPostChanged: f.a,
					adBrandSafetyStatusReceived: f.a,
					trackOnPostExitedViewport: f.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(I.h)(e, t),
					postComponentForLayout: b.b
				}));
			var H = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				V = s("./src/reddit/helpers/trackers/screenview.ts"),
				D = s("./src/reddit/layout/page/Listing/index.tsx"),
				q = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				$ = s.n(q);
			const U = Object(n.c)({
					currentUser: F.j
				}),
				Q = Object(o.b)(U, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				z = (e => Object(y.c)(G(_(e))))(u.a),
				J = (e => Object(y.c)(k(B(e))))(p.a);
			class W extends r.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = e === S.a.GivenGildings ? "given any awards" : e === S.a.ReceivedGildings ? "received any awards" : `${e} anything`;
					return () => r.a.createElement(a.d, {
						verb: t
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
					} = this.props, i = s.toLowerCase(), o = Object(H.b)(i, t);
					return e && e.displayText && e.displayText.toLowerCase() === i ? t === S.a.Saved || t === S.a.ReceivedGildings || t === S.a.GivenGildings ? r.a.createElement(z, {
						className: $.a.mixedList,
						itemComponent: c.a,
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(V.s)(o),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(J, {
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(V.s)(o),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(a.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return r.a.createElement(D.a, {
						fitPageToContent: !0,
						contentNavBar: r.a.createElement(m.a, {
							profileName: e
						}),
						content: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, null), this.renderContent()),
						sidebar: r.a.createElement(h.a, {
							profileName: e
						})
					})
				}
			}
			t.default = Q(W)
		},
		"./src/reddit/selectors/profileOverviewChronoItems.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Flair/index.ts"),
				o = s("./src/reddit/models/PostCreationForm/index.ts");
			r.f.Text, r.f.Spoiler, r.f.Text, r.f.Spoiler, o.h.RICH_TEXT, r.f.Text, r.f.Spoiler, o.h.RICH_TEXT, r.f.Text, r.f.Spoiler, o.h.RICH_TEXT;
			var n = s("./src/reddit/helpers/isComment.ts");
			const d = Object(i.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return a(e, {
						listingKey: t
					}).filter(e => {
						if (Object(n.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				a = Object(i.a)((e, {
					listingKey: t
				}) => {
					const s = e.pages.profileOverview.chrono.ids[t];
					return s ? [...s] : []
				}),
				l = Object(i.a)((e, {
					listingKey: t
				}) => {
					return d(e, {
						listingKey: t
					}).reduce((t, s) => {
						const i = Object(n.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				}),
				c = (Object(i.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models;
					return c(e, {
						listingKey: t
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(i.a)((e, {
					listingKey: t
				}) => {
					return d(e, {
						listingKey: t
					}).map(t => Object(n.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				p = Object(i.a)((e, {
					listingKey: t
				}) => {
					const s = e.posts.models,
						i = c(e, {
							listingKey: t
						}),
						r = {};
					return i.forEach(e => r[e] = s[e]), r
				}),
				u = Object(i.a)((e, {
					listingKey: t
				}) => {
					const s = e.features.comments.models,
						i = d(e, {
							listingKey: t
						}),
						r = {};
					return i.forEach(e => !!Object(n.a)(e) && (r[e] = s[e])), r
				}),
				m = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.error[t],
				h = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.api.pending[t],
				g = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.loadMore[t],
				f = (e, {
					listingKey: t
				}) => e.pages.profileOverview.chrono.fetchedTokens[t]
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"afe2eab8590d"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"e5801715c631"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"859591f125dd"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"924b81938efe"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"f7b226fb2a5a"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"37cd04a1a023"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.903fb93a7cf046ebf731.js.map