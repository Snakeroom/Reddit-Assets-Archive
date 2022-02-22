// https://www.redditstatic.com/desktop2x/ProfileComments.3a250897f423f4112c2d.js
// Retrieved at 2/22/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return A
			})), s.d(t, "profileCommentsLoaded", (function() {
				return F
			})), s.d(t, "profileCommentsFailed", (function() {
				return M
			})), s.d(t, "profileCommentsRequested", (function() {
				return R
			})), s.d(t, "moreItemsPending", (function() {
				return K
			})), s.d(t, "moreItemsLoaded", (function() {
				return B
			})), s.d(t, "moreItemsFailed", (function() {
				return U
			})), s.d(t, "moreItemsRequested", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/difference.js"),
				o = s.n(r),
				n = s("./node_modules/lodash/pick.js"),
				i = s.n(n),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeListingKey/index.ts"),
				c = s("./src/reddit/actions/contentGate.ts"),
				l = s("./src/reddit/actions/externalAccount.ts"),
				m = s("./src/reddit/actions/moderatingSubreddits.ts"),
				p = s("./src/reddit/actions/pages/profileShared.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				h = s("./src/reddit/actions/profile/index.ts"),
				f = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/constants/errors.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/config.ts"),
				C = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				v = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				L = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, s, r) => {
				let o = Object(v.a)(Object(C.a)(Object(L.a)(Object(w.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return r && (o = Object(j.a)(o)), Object(P.a)(e, {
					data: s,
					endpoint: o,
					method: x.jb.GET
				})
			};
			var E = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				k = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				N = s("./src/reddit/selectors/profile.ts"),
				_ = s("./src/reddit/selectors/profileComments.ts"),
				T = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const A = Object(a.a)(T.f),
				F = Object(a.a)(T.e),
				M = Object(a.a)(T.d),
				R = e => async (t, s, r) => {
					const {
						queryParams: o,
						params: n
					} = e, {
						sort: a,
						t: O
					} = Object(p.b)(o), {
						profileName: y
					} = n, C = Object(d.a)(`u_${y}`, a, e.queryParams), {
						profileCommentsPage: x
					} = s(), P = x.commentIds[C], v = x.api.error[C], j = x.api.pending[C];
					if (await t(h.d(y)), j || P && !v) {
						if (P) {
							const e = Object(N.q)(s(), {
								profileName: y
							});
							t(u.m({
								title: e
							}))
						}
						return
					}
					const L = {
						...i()(e.queryParams, [...g.m, g.i]),
						sort: a,
						t: Object(E.a)(a, O)
					};
					t(A({
						key: C
					}));
					const w = await Object(k.a)("profileComments", () => I(r.apiContext(), y, L, Object(S.a)(s())));
					if (!w.ok) return t(M({
						account: w.body.data ? w.body.data.account : null,
						error: w.body.reason ? {
							type: w.body.reason
						} : w.error,
						key: C
					})), w.body.reason === b.a.DeletedProfile && t(Object(c.q)({
						profileName: y
					})), void t(u.n(w.status));
					const _ = w.body;
					t(F({
						key: C,
						meta: s().meta,
						..._
					})), await Promise.all([t(Object(p.c)(y)), t(Object(f.q)()), t(Object(m.b)()), t(l.o(y))])
				}, K = Object(a.a)(T.c), B = Object(a.a)(T.b), U = Object(a.a)(T.a), V = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t(),
						{
							currentPage: n
						} = r.platform;
					if (!n || !n.routeMatch) return;
					const {
						queryParams: a,
						params: c
					} = n.routeMatch.match, {
						sort: l,
						t: m
					} = Object(p.b)(a), {
						profileName: u
					} = c, h = Object(d.a)(`u_${u}`, l, a), f = Object(_.d)(r, {
						listingKey: h
					});
					if (!f) return;
					const b = Object(_.b)(r, {
							listingKey: h
						}),
						y = Object(_.c)(r, {
							listingKey: h
						}),
						C = y && y[f.token];
					if (b || C) return;
					e(K({
						key: h,
						fetchedToken: f.token
					}));
					const x = await I(s(), u, {
						after: f.token,
						dist: f.dist,
						sort: l,
						t: m,
						...i()(a, g.m),
						layout: Object(O.R)(r, {}).toLowerCase()
					}, Object(S.a)(r));
					if (x.ok) {
						const t = Object(_.f)(r, {
								listingKey: h
							}),
							s = {
								...x.body,
								commentIds: o()(x.body.commentIds, t)
							};
						e(B({
							fetchedToken: f.token,
							key: h,
							meta: r.meta,
							...s
						}))
					} else e(U({
						account: x.body.data ? x.body.data.account : null,
						error: x.error,
						fetchedToken: f.token,
						key: h
					}))
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
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				C = s.n(y);
			const x = Object(i.b)(() => Object(a.c)({
				comment: b.b,
				isAwarded: (e, t) => {
					const s = Object(b.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(g.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: O.bb
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var P = Object(l.a)(x(e => {
					const {
						comment: t,
						commentId: s,
						first: r,
						isAwarded: n,
						isNightmodeOn: i,
						last: a,
						openPost: d,
						showModTools: l
					} = e;
					if (!t) return null;
					return o.a.createElement(p.a, {
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
							background: Object(f.e)(e)
						}
					}, o.a.createElement("div", {
						className: Object(c.a)(C.a.commentOuterWrapper, {
							[C.a.isLast]: a,
							[C.a.isAwarded]: n,
							[C.a.isNightmodeOn]: i
						})
					}, o.a.createElement("div", {
						className: Object(c.a)(C.a.commentWrapper, {
							[C.a.isFirst]: r
						})
					}, o.a.createElement("div", {
						className: C.a.commentSeparator
					}), t.parentId && o.a.createElement("div", {
						className: C.a.commentSeparator
					}), o.a.createElement("div", {
						className: C.a.commentContentWrapper
					}, o.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				v = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/helpers/isComment.ts"),
				w = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				I = s.n(w),
				E = s("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(j.u)({
					currentProfileName: j.i,
					isCommentsPage: j.x,
					isCommentPermalink: j.w,
					isProfilePostListing: j.L,
					pageLayer: e => e
				}),
				N = E.a.wrapped(v.a, "OverviewCommentPost", I.a),
				_ = E.a.wrapped(n.default, "ClassicPost", I.a);
			t.a = S(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: r,
					allowModToolsUnderComments: n,
					height: i,
					width: a,
					...d
				} = e;
				return Object(L.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(N, k({}, d, {
					availableWidth: a,
					commentId: t
				})), o.a.createElement(P, {
					commentId: t,
					first: s,
					last: r,
					showModTools: n
				})) : o.a.createElement(P, {
					commentId: t,
					first: s,
					last: r,
					showModTools: n
				}) : o.a.createElement(_, k({}, d, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				ClassicPost: "_3HddQjb-wsXsww_pAIh20y",
				classicPost: "_3HddQjb-wsXsww_pAIh20y",
				OverviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				overviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				backgroundMargin: "_2QIF_lwHCJCj3Dltr80ZqZ",
				isFirstInCommentList: "_2qBXIj3HBiFJkTkjCTD627",
				isLastInCommentList: "pd606OJnAc8wAE-N-Zm84"
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/last.js"),
				o = s.n(r),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				u = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/helpers/isComment.ts"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				O = s("./src/lib/LRUCache/index.ts"),
				y = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				x = s("./src/reddit/components/PostList/index.m.less"),
				P = s.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 500,
				L = new O.a(j),
				w = new O.a(j),
				I = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				E = (e, t, s, r, o, n) => {
					const i = `entered-${e}-${t}-${s?`last-${r}-${o}`:""}`;
					let a = L.get(i);
					return void 0 === a && (a = () => {
						s && n.onBottomViewed(r, o), n.trackOnPostEnteredViewport(e, t)
					}, L.set(i, a)), a
				},
				k = (e, t) => {
					const s = `click-${e}`;
					let r = w.get(s);
					return void 0 === r && (r = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(f.a)(e)
						})
					}, w.set(s, r)), r
				};
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new O.a(j), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && y.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = y.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = y.c.end(this.timerId);
						setTimeout(() => Object(y.b)(a.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && y.c.cancel(this.timerId), e.itemIds.length && (this.timerId = y.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && y.c.has(this.timerId)) {
						const e = y.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(y.b)(a.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && y.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return y.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = y.c.end(e);
					setTimeout(() => s(t(r, C.TimerType.InApp)), 0)
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
						itemIds: r,
						...o
					} = e, n = Object.keys(s), i = Object.keys(o);
					return i.length !== n.length || !!i.some(e => s[e] !== o[e])
				}
				scrollChildForItem(e, t, s, r, o, n) {
					const {
						listingKey: a,
						listingName: d,
						postClickEventFactory: c
					} = this.props, l = `post-${n}-${e}-${t}-${s?"last-index":""}-${d}-${a}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(l))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: p
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${n}]-[itemId: ${e}]`, f = E(u, n, s, a, d, this.props), b = {
							key: h,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: r,
							isLastInCommentList: o,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: n,
							onClickPost: k(e, this.props),
							postId: u
						}, O = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, n, r),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: f,
							render: e => i.a.createElement(g.a, {
								postId: b.postId
							}, i.a.createElement(O, v({}, b, e)))
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
						onTryAgain: r
					} = this.props;
					return i.a.createElement("div", {
						className: P.a.placeholder
					}, i.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: r
					} = this.props;
					return i.a.createElement("div", {
						className: P.a.placeholder
					}, i.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: I[s]
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: r,
						onLoadMore: o
					} = this.props, n = r.map((s, o, n) => {
						const i = o === r.length - 1,
							a = o && r[o - 1],
							d = !i && r[o + 1],
							c = !!Object(b.a)(s) && (!a || !Object(b.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(b.a)(s) && (!d || !Object(b.a)(d) || e[d].postId !== e[s].postId);
						return this.scrollChildForItem(s, o, i, c, l, t)
					});
					return i.a.createElement("div", null, i.a.createElement(u.b, {
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
						viewportTopPadding: h.f + h.s
					}, n), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = S
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(r),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/actions/pages/profileComments/index.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				h = s("./src/reddit/components/ContentGate/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/index.ts"),
				b = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = s("./src/reddit/components/JumpToContent/index.tsx"),
				O = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				C = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/components/ClassicPost/index.tsx"),
				P = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				v = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				j = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				L = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				w = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				k = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				N = s.n(S);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = C.a.wrapped(x.default, "ClassicPost", N.a),
				A = C.a.wrapped(v.a, "OverviewCommentPost", N.a),
				F = Object(I.u)({
					currentProfileName: I.i,
					pageLayer: e => e
				}),
				M = Object(d.c)({
					comment: (e, {
						itemId: t
					}) => Object(k.b)(e, {
						commentId: t
					}),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: s
							} = e, r = t.toLowerCase(), o = s.models[r];
							return o ? o.username : void 0
						})(e, t)
					}
				});
			var R = F(Object(a.b)(M)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: r,
					isLastInCommentList: o,
					layout: n,
					profileName: a,
					allowModToolsUnderComments: d
				} = e;
				if (n === w.g.Compact) return i.a.createElement(P.a, e);
				const {
					height: c,
					width: l,
					...m
				} = e;
				return i.a.createElement(K, m, r && i.a.createElement(j.a, {
					isFirst: !0
				}, n === w.g.Large ? i.a.createElement(T, _({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : i.a.createElement(A, _({}, e, {
					commentId: s,
					profileName: a
				}))), i.a.createElement(j.a, {
					isLast: o
				}, i.a.createElement(L.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: a,
					showModTools: d
				})))
			}));
			const K = Object(y.a)(e => i.a.createElement("div", {
				className: Object(O.a)(N.a.backgroundMargin, {
					[N.a.isFirstInCommentList]: e.isFirstInCommentList,
					[N.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(E.e)(e)
				}
			}, e.children));
			var B = s("./src/reddit/components/ProfileItemList/index.tsx"),
				U = s("./node_modules/lodash/noop.js"),
				V = s.n(U),
				W = s("./src/reddit/actions/ads/index.ts"),
				q = s("./src/reddit/actions/comment/list.ts"),
				D = s("./src/reddit/actions/post.ts"),
				$ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				J = s("./src/reddit/helpers/trackers/post.ts"),
				H = s("./src/reddit/featureFlags/index.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/profileComments.ts"),
				z = s("./src/reddit/selectors/subreddit.ts"),
				Y = s("./src/reddit/selectors/tracking.ts"),
				ee = s("./src/reddit/selectors/user.ts");
			const te = Object(I.u)(),
				se = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: ee.k,
					measureScrollFPS: H.d.measureScrollFPS,
					layout: I.R,
					loadMore: X.d,
					subredditsById: z.Z,
					viewportDataLoaded: Y.a,
					commentsById: Q.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: Z.J,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case w.g.Medium:
								return 174;
							case w.g.Classic:
								return 129;
							case w.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case w.g.Medium:
							case w.g.Classic:
								return 90;
							case w.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				re = Object(d.c)(se),
				oe = Object(a.b)(re, e => ({
					onBottomViewed: (t, s) => e(Object(q.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(W.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(D.L)(t)),
					fireAdPixelsOfType: V.a,
					trackOnPostEnteredViewport: V.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(J.h)(e, t),
					postComponentForLayout: G.b
				}));

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = e => i.a.createElement(R, ne({}, e, {
					allowModToolsUnderComments: !0
				})),
				ae = (e => Object($.c)(te(oe(e))))(B.a);
			var de = e => i.a.createElement(ae, ne({}, e, {
					itemComponent: ie
				})),
				ce = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				le = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				me = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				pe = s("./src/reddit/helpers/name/index.ts"),
				ue = s("./src/reddit/helpers/trackers/screenview.ts"),
				he = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				fe = s("./src/reddit/layout/page/Listing/index.tsx"),
				be = s("./src/reddit/models/ContentGate.ts"),
				ge = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Oe = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ye = s("./src/reddit/selectors/profile.ts");

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(I.u)(),
				Pe = Object(d.a)(I.E, ee.ib, (e, {
					location: t
				}) => o()([...Object(l.a)(t.search)]), I.R, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => Object(ye.j)(e, {
					profileName: t.params.profileName
				}), ee.O, (e, {
					match: t
				}) => Object(ee.f)(e, c.jc + t.params.profileName), Oe.a, (e, t, s, r, o, n, i, a, d) => {
					const {
						sort: c,
						t: l
					} = Object(u.b)(s), p = Object(m.a)(`u_${o}`, c, s);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: i,
						isOwnProfile: e,
						isProfileNSFW: !!n && n.isNSFW,
						layout: r,
						listingKey: p,
						profileName: o,
						sort: c,
						timeSort: l,
						isEligibleForNsfwSignupUpsellTreatment: d
					}
				}),
				ve = Object(a.b)(Pe, (e, t) => ({
					onLoadMore: () => e(Object(p.moreItemsRequested)()),
					onLayoutChange: () => e(Object(p.profileCommentsRequested)({
						...t.match,
						queryParams: o()([...Object(l.a)(t.location.search)])
					}))
				}));
			t.default = xe(ve(Object(he.d)(e => {
				const {
					contentGateInfo: t,
					over18Prefs: s,
					isOwnProfile: r,
					isProfileNSFW: o,
					listingKey: n,
					onLoadMore: a,
					onLayoutChange: d,
					pageLayer: l,
					profileName: m,
					sort: p,
					timeSort: u,
					isEligibleForNsfwSignupUpsellTreatment: O
				} = e;
				if (!m || !l) return null;
				if (t && t.profileDeleted) return i.a.createElement(h.default, {
					contentGateType: be.a.ProfileDeleted,
					profileName: m
				});
				if (t && t.profileSuspended) return i.a.createElement(h.default, {
					contentGateType: be.a.ProfileSuspended,
					profileName: m
				});
				if (451 === l.status || t && t.profileBlockedForLegalReason) return i.a.createElement(h.default, {
					contentGateType: be.a.ProfileBlockedForLegalReason,
					profileName: m
				});
				if (403 === l.status) return i.a.createElement(ge.a, null);
				if (404 === l.status) return i.a.createElement(h.default, {
					contentGateType: be.a.ProfileDoesNotExist,
					profileName: m
				});
				const y = m.toLowerCase(),
					C = `/user/${m}/comments/`,
					x = {
						listingKey: n,
						listingName: y
					};
				if (o && !r && O) return i.a.createElement(me.a, {
					contentTitle: Object(pe.d)(m)
				});
				if (!s && o && !r) return i.a.createElement(h.default, {
					contentGateType: be.a.Nsfw,
					subredditName: m
				});
				const P = {
					sort: p,
					baseUrl: C,
					sortOptions: c.Db,
					timeSort: u
				};
				return i.a.createElement(fe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(ce.a, {
						profileName: m
					})),
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(b.a, P), i.a.createElement(g.a, null), i.a.createElement(de, {
						listingKey: n,
						listingName: y,
						listingViewed: (e, t) => Object(ue.o)(n, p, t, e, u),
						noPostsComponent: () => i.a.createElement(f.b, {
							profileName: m,
							timeSort: u
						}),
						onLoadMore: a,
						onTryAgain: d,
						inSubredditOrProfile: !1
					})),
					sidebar: i.a.createElement(le.a, Ce({}, x, {
						profileName: m
					}))
				})
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.3a250897f423f4112c2d.js.map