// https://www.redditstatic.com/desktop2x/ProfilePrivate.fff07263d45be7a7fb7e.js
// Retrieved at 6/22/2021, 1:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "privateListingPending", (function() {
				return D
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return H
			})), s.d(t, "privatePostListingLoaded", (function() {
				return V
			})), s.d(t, "privateListingFailed", (function() {
				return q
			})), s.d(t, "profilePrivateRequested", (function() {
				return U
			})), s.d(t, "morePending", (function() {
				return $
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
				P = s("./src/reddit/helpers/graphql/normalizeModeratorPartFromGql/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				x = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/models/User/index.ts");
			const I = e => ({
					richtextContent: e.content && e.content.richtext ? Object(v.e)(e.content.richtext) : {},
					type: "rtjson",
					rteMode: x.h.RICH_TEXT
				}),
				L = (e, t) => !(!e || !t || Object(y.d)(t) || !t.authorInfo) && Object(O.b)(e) === Object(O.b)(t.authorInfo),
				w = e => e && !Object(y.d)(e) && e.authorInfo ? Object(O.b)(e.authorInfo) : null;
			var C = e => {
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
						score: y,
						voteState: x
					} = e, C = "ADMIN" === n, S = "MODERATOR" === n, E = i ? Object(v.b)(i) : void 0, T = s && s.__typename === j.c.AvailableRedditor && s.isCakeDayNow || !1, R = s && s.__typename === j.c.AvailableRedditor && s.isPremiumMember || !1, G = {
						allAwardings: E,
						associatedAward: t,
						author: s && Object(O.b)(s) || b.C,
						authorId: s && s.id || "",
						body: r && r.html || "",
						bodyMD: r && r.markdown || "",
						created: Object(v.d)(o) / 1e3,
						distinguishType: n || "",
						editedAt: Object(v.d)(d) / 1e3 || null,
						id: a,
						isAdmin: C,
						isAuthorCakeday: T,
						isAuthorPremium: R,
						isGildable: l,
						isMod: S,
						isOp: L(s, f),
						isSaved: u,
						isScoreHidden: c,
						isStickied: p,
						markdown: r && r.markdown || "",
						media: I(e),
						parentId: m && m.id,
						permalink: `https://www.reddit.com${h}`,
						postAuthor: w(f),
						postId: f && f.id || "",
						postTitle: f && f.title || null,
						score: y || 0,
						subredditId: "",
						voteState: Object(v.c)(x),
						...Object(P.a)(e),
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
					return e.postInfo && Object(g.m)(e.postInfo) ? G.subredditId = e.postInfo.subreddit.id : e.postInfo && Object(g.l)(e.postInfo) && (G.subredditId = e.postInfo.profile.id), G
				},
				S = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				T = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				G = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var k = e => {
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
							const t = C(a);
							if (n.comments || (n.comments = {}), n.comments[t.id] = t, n.itemIds || (n.itemIds = []), n.itemIds.push(t.id), a.authorFlair && (n.authorFlair[t.subredditId] || (n.authorFlair[t.subredditId] = {}), n.authorFlair[t.subredditId][t.author] = Object(S.a)(a.authorFlair)[0]), e = a.postInfo, a.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(y.a)(a.postInfo);
								n.posts[e.id] = e, t && (n.posts[t.id] = t)
							}
						} else e = a, n.itemIds || (n.itemIds = []), n.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: s
						} = e && Object(y.a)(e);
						n.posts[t.id] = t, s && (n.posts[s.id] = s), Object(g.i)(e) || Object(g.j)(e) || (e.authorFlair && (n.authorFlair[t.belongsTo.id] || (n.authorFlair[t.belongsTo.id] = {}), n.authorFlair[t.belongsTo.id][t.author] = Object(S.a)(e.authorFlair)[0]), Object(g.l)(e) ? n.profiles[e.profile.id] || (n.profiles[e.profile.id] = Object(R.a)(e.profile)) : Object(g.m)(e) && (n.subreddits[e.subreddit.id] || (n.subreddits[e.subreddit.id] = Object(G.a)(e.subreddit)), n.postFlair[e.subreddit.id] || (n.postFlair[e.subreddit.id] = Object(E.a)(e.subreddit))))
					}
					return n
				},
				F = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
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
							return k(e)
					}
				},
				D = Object(i.a)(N.b),
				H = Object(i.a)(N.c),
				V = Object(i.a)(N.i),
				q = Object(i.a)(N.a),
				U = e => async (t, s, i) => {
					const {
						profileName: d,
						listingType: a
					} = e.params, l = s(), c = Object(F.b)(d.toLowerCase(), a), p = l.profilePrivatePage.ids[c] && l.profilePrivatePage.ids[c].length > 0, u = !!l.profilePrivatePage.api.error[c];
					if (l.profilePrivatePage.api.pending[c] || p && !u) return;
					const {
						account: m
					} = l.user, h = !m, g = !(m && m.displayText && l.profiles.moderated.models[m.displayText.toLowerCase()] && l.profiles.moderated.models[m.displayText.toLowerCase()].length);
					t(D({
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
						a === f.a.Saved || a === f.a.ReceivedGildings || a === f.a.GivenGildings ? await t(H({
							listingKey: c,
							profileName: d,
							...e
						})) : await t(V({
							listingKey: c,
							profileName: d,
							...e
						})), await Promise.all([t(Object(o.d)(d)), t(Object(r.o)(d)), t(Object(n.d)(d))])
					} else t(q({
						listingKey: c,
						error: v.error
					}))
				}, $ = Object(i.a)(N.f), Q = Object(i.a)(N.e), z = Object(i.a)(N.g), J = Object(i.a)(N.d), W = e => async (t, s, i) => {
					const r = s(),
						o = r.user.account && r.user.account.displayText && r.user.account.displayText.toLowerCase();
					if (!o) return;
					const n = Object(F.b)(o, e);
					if (!r.profilePrivatePage.ids[n] || !r.profilePrivatePage.ids[n].length || !r.profilePrivatePage.pageInfo || !r.profilePrivatePage.pageInfo[n].hasNextPage || r.profilePrivatePage.api.error[n] || r.profilePrivatePage.api.pending[n]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: r.profilePrivatePage.pageInfo[n].endCursor,
						first: N.h
					};
					t($({
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
				return J
			})), s.d(t, "a", (function() {
				return X
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
				u = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/lib/ads/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				v = s("./src/lib/opener/index.ts"),
				P = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				O = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				x = s("./src/reddit/components/Scroller/Simple.tsx"),
				j = s("./src/reddit/constants/adEvents.ts"),
				I = s("./src/reddit/constants/componentSizes.ts"),
				L = s("./src/reddit/constants/postLayout.ts"),
				w = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/controls/OutboundLink/index.tsx"),
				S = s("./src/reddit/helpers/getClickInfo.ts"),
				E = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				R = s("./src/reddit/models/Media/index.ts"),
				G = s("./src/reddit/helpers/brandSafety/index.ts"),
				k = s("./src/reddit/helpers/trackers/ads.ts"),
				F = s("./src/lib/LRUCache/index.ts"),
				N = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				A = s("./src/reddit/components/PostList/index.m.less"),
				K = s.n(A);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = 500, D = new F.a(B), H = new F.a(B), V = new F.a(B), q = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, U = b.a.div("SeeMore", K.a), $ = b.a.wrapped(T.a, "ArrowRight", K.a), Q = (e, t, s, i, r, o, n, d) => {
				const a = `entered-${e}-${t}-${s?`last-${i}-${r}`:""}-${o}`;
				let l = D.get(a);
				return void 0 === l && (l = () => {
					s && n.onBottomViewed(i, r), n.trackOnPostEnteredViewport(e, t, d)
				}, D.set(a, l)), l
			}, z = (e, t, s, i, r) => {
				const o = `left-${e}-${t}`;
				let n = H.get(o);
				return void 0 === n && (n = o => {
					s.trackOnPostExitedViewport(e, t, o, i, r)
				}, H.set(o, n)), n
			}, J = (e, t) => {
				const s = `click-${e}`;
				let i = V.get(s);
				return void 0 === i && (i = (e, s, i, r, o) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, j.a.Click);
						const {
							source: e
						} = Object(m.t)(s, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							i && (t = Object(C.a)(s.id, i, t).url), Object(k.a)(s, o), Object(v.d)(t, v.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(S.a)(e)
					})
				}, V.set(s, i)), i
			}, W = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class X extends p.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new F.a(B), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
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
						this.props.adBrandSafetyStatusReceived(Object(G.a)(o, n))
					}, g.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && N.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = N.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = N.c.end(this.timerId);
						setTimeout(() => Object(N.b)(g.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && N.c.cancel(this.timerId), e.postIds.length && (this.timerId = N.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (f.a.read(() => this.checkAndSendScreenview()), this.timerId && N.c.has(this.timerId)) {
						const e = N.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(N.b)(g.l.Redesign, {
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
					this.timerId && N.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return N.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const i = N.c.end(e);
					setTimeout(() => {
						s(t(i, M.TimerType.InApp))
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
					if (a.some(e => i[e] !== n[e])) return !0;
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
						listingKey: u,
						listingName: m,
						pageLayer: h,
						pageReferrer: f,
						postClickEventFactory: b,
						redditStyle: v,
						shouldHideFlair: y,
						isActionBarAnimationEnabled: O,
						triggerNewPostPill: x,
						postIds: j
					} = this.props, I = 0 === t, w = `post-${i}-${e}-${t}-${s?"last-index":""}-${m}-${u}-${f}`;
					let C;
					if (void 0 === (C = this.scrollChildCache.get(w))) {
						const {
							inSubredditOrProfile: S,
							postsById: T
						} = this.props, G = T[e], k = G.crosspostRootId && T[G.crosspostRootId] ? T[G.crosspostRootId] : G;
						G.crosspostRootId && !T[G.crosspostRootId] && P.c.withScope(e => {
							e.setExtra("errorType", g.r.API), e.setExtra("description", `Post ${G.id} is crosspost of ${G.crosspostRootId}, but ` + `${G.crosspostRootId} details are missing in the state`), P.c.captureMessage("Crosspost parent details are missing")
						});
						const F = this.props.postComponentForLayout({
								isCrosspost: !!G.crosspostRootId,
								isFirstPost: I,
								layout: i,
								post: k
							}),
							N = `post-list-item-[layout: ${i}]-[postId: ${e}]`,
							M = Q(e, i, s, u, m, f, this.props, t),
							A = z(e, i, this.props, t, h),
							K = J(e, this.props),
							_ = k.media && k.media.type === R.o.EMBED ? k.media.provider : null;
						C = {
							estHeight: Object(E.c)(G, i),
							id: e,
							isFocusable: !(!k.media || !(i === L.g.Large || i === L.g.Classic && Object(R.G)(k.media))) && (R.d.has(k.media.type) && (!_ || !R.s.has(_)) && !k.isSpoiler && !k.isNSFW),
							trackOnEnteredViewport: M,
							trackOnExitedViewport: A,
							render: ({
								className: i,
								height: g,
								width: f,
								remeasure: P,
								setScrollerChildRef: L,
								shouldLoadInitially: w
							}) => p.a.createElement(F, {
								className: i,
								currentProfileName: r,
								key: N,
								availableWidth: f,
								eventFactory: b,
								first: I,
								forceLoadMedia: w,
								hostPostData: o,
								inSubredditOrProfile: S,
								isActionBarAnimationEnabled: O,
								isCommentPermalink: n,
								isCommentsPage: d,
								isFrontpage: a,
								isProfilePostListing: l,
								isTopicPage: c,
								listingKey: u,
								listingName: m,
								pageLayer: h,
								last: s,
								onClickPost: K,
								onSizeChanged: P,
								postId: e,
								postIds: j,
								redditStyle: v,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: L,
								shouldHideFlair: y,
								onceInViewport: () => {
									null == x || x(t)
								}
							})
						}, this.scrollChildCache.set(w, C)
					}
					return C
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
						className: K.a.placeholder
					}, p.a.createElement(n, {
						className: t,
						isLoading: !e,
						layout: i
					}), !!e && p.a.createElement(O.a, {
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
						className: K.a.placeholder
					}, p.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: i,
						countOverride: q[i]
					}), !!e && p.a.createElement(O.a, {
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
						onLoadMore: m
					} = this.props;
					let f = l.map((e, t, s) => {
						const i = t === l.length - 1;
						return this.scrollChildForPost(e, t, i, n)
					});
					r && (f = W(f, r));
					const b = this.props.measureScrollFPS ? `post-listings-${n}` : void 0,
						v = d ? Object(i.e)(d) : null,
						P = v || o;
					return p.a.createElement(c.Fragment, null, p.a.createElement(x.b, {
						innerRef: this.updateScrollerRef,
						className: P ? K.a.truncatedPostList : Object(h.a)(K.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: a && a.token ? a.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: m,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: b,
						viewportTopPadding: I.f
					}, f), v && p.a.createElement(U, {
						className: K.a.seeMoreButton
					}, p.a.createElement(w.a, {
						className: K.a.seeMorePostsText,
						to: Object(u.a)(v, {
							type: g.Vb.Posts
						})
					}, _._("See More Posts", null, {
						hk: "3o0CqI"
					}), p.a.createElement($, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			X.defaultProps = {
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
				P = Object(c.t)(),
				y = {
					apiError: h.a,
					apiPending: h.b,
					currentUser: b.j,
					layout: c.O,
					loadMore: h.d,
					subredditsById: g.ab,
					viewportDataLoaded: f.a,
					commentsById: h.g,
					itemIds: h.f,
					itemIdToPostId: h.e,
					postsById: h.h,
					estimateItemHeight: v
				},
				O = Object(n.c)(y),
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
					postClickEventFactory: (e, t) => Object(m.g)(e, t)
				}));
			t.a = e => Object(l.c)(P(x(e)))
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
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/components/PostList/Placeholder.tsx"),
				O = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/featureFlags/index.ts"),
				I = s("./src/reddit/helpers/trackers/post.ts"),
				L = s("./src/lib/objectSelector/index.ts"),
				w = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				C = s("./src/reddit/helpers/isComment.ts"),
				S = s("./src/reddit/models/Profile/index.ts");
			const E = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.pending[t],
				T = (e, {
					listingKey: t
				}) => e.profilePrivatePage.api.error[t],
				R = Object(L.a)((e, {
					listingKey: t
				}) => {
					return (e.profilePrivatePage.ids[t] || []).reduce((t, s) => {
						const i = Object(C.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				});
			var G = s("./src/reddit/selectors/user.ts");
			const k = Object(x.t)(),
				F = Object(x.t)(),
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
							dist: w.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !E(e, t) && !T(e, t)
				},
				M = Object(n.c)({
					...N,
					currentUser: G.j,
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
					postListPlaceholderComponent: () => y.a
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
					postClickEventFactory: (e, t) => Object(I.g)(e, t)
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
					postClickEventFactory: (e, t) => Object(I.g)(e, t),
					postComponentForLayout: b.b
				}));
			var D = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				H = s("./src/reddit/helpers/trackers/screenview.ts"),
				V = s("./src/reddit/layout/page/Listing/index.tsx"),
				q = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				U = s.n(q);
			const $ = Object(n.c)({
					currentUser: G.j
				}),
				Q = Object(o.b)($, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				z = (e => Object(P.c)(k(_(e))))(u.a),
				J = (e => Object(P.c)(F(B(e))))(p.a);
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
					} = this.props, i = s.toLowerCase(), o = Object(D.b)(i, t);
					return e && e.displayText && e.displayText.toLowerCase() === i ? t === S.a.Saved || t === S.a.ReceivedGildings || t === S.a.GivenGildings ? r.a.createElement(z, {
						className: U.a.mixedList,
						itemComponent: c.a,
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(H.s)(o),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(J, {
						listingKey: o,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(H.s)(o),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(a.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return r.a.createElement(V.a, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.fff07263d45be7a7fb7e.js.map