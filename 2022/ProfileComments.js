// https://www.redditstatic.com/desktop2x/ProfileComments.023ce5f969602beaf6e7.js
// Retrieved at 9/12/2022, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return T
			})), s.d(t, "profileCommentsLoaded", (function() {
				return M
			})), s.d(t, "profileCommentsFailed", (function() {
				return A
			})), s.d(t, "profileCommentsRequested", (function() {
				return B
			})), s.d(t, "moreItemsPending", (function() {
				return K
			})), s.d(t, "moreItemsLoaded", (function() {
				return R
			})), s.d(t, "moreItemsFailed", (function() {
				return U
			})), s.d(t, "moreItemsRequested", (function() {
				return W
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
				O = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/config.ts"),
				v = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeApiRequest/index.ts"),
				P = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				w = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				j = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				L = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, s, r) => {
				let o = Object(P.a)(Object(v.a)(Object(j.a)(Object(L.a)(`${g.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return r && (o = Object(w.a)(o)), Object(y.a)(e, {
					data: s,
					endpoint: o,
					method: x.mb.GET
				})
			};
			var E = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				k = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				N = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				S = s("./src/reddit/selectors/profile.ts"),
				_ = s("./src/reddit/selectors/profileComments.ts"),
				F = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const T = Object(a.a)(F.f),
				M = Object(a.a)(F.e),
				A = Object(a.a)(F.d),
				B = e => async (t, s, r) => {
					const {
						queryParams: o,
						params: n
					} = e, {
						sort: a,
						t: C
					} = Object(p.b)(o), {
						profileName: g
					} = n, v = Object(d.a)(`u_${g}`, a, e.queryParams), {
						profileCommentsPage: x
					} = s(), y = x.commentIds[v], P = x.api.error[v], w = x.api.pending[v];
					if (await t(h.d(g)), w || y && !P) {
						if (y) {
							const e = Object(S.r)(s(), {
								profileName: g
							});
							t(u.m({
								title: e
							}))
						}
						return
					}
					const j = {
						...i()(e.queryParams, [...O.k, O.g]),
						sort: a,
						t: Object(E.a)(a, C)
					};
					t(T({
						key: v
					}));
					const L = await Object(k.a)("profileComments", () => I(r.apiContext(), g, j, Object(N.a)(s())));
					if (!L.ok) return t(A({
						account: L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: v
					})), L.body.reason === b.a.DeletedProfile && t(Object(c.u)({
						profileName: g
					})), void t(u.n(L.status));
					const _ = L.body;
					t(M({
						key: v,
						meta: s().meta,
						..._
					})), await Promise.all([t(Object(p.c)(g)), t(Object(f.q)()), t(Object(m.b)()), t(l.o(g))])
				}, K = Object(a.a)(F.c), R = Object(a.a)(F.b), U = Object(a.a)(F.a), W = () => async (e, t, s) => {
					let {
						apiContext: r
					} = s;
					const n = t(),
						{
							currentPage: a
						} = n.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: c,
						params: l
					} = a.routeMatch.match, {
						sort: m,
						t: u
					} = Object(p.b)(c), {
						profileName: h
					} = l, f = Object(d.a)(`u_${h}`, m, c), b = Object(_.d)(n, {
						listingKey: f
					});
					if (!b) return;
					const g = Object(_.b)(n, {
							listingKey: f
						}),
						v = Object(_.c)(n, {
							listingKey: f
						}),
						x = v && v[b.token];
					if (g || x) return;
					e(K({
						key: f,
						fetchedToken: b.token
					}));
					const y = await I(r(), h, {
						after: b.token,
						dist: b.dist,
						sort: m,
						t: u,
						...i()(c, O.k),
						layout: Object(C.S)(n, {}).toLowerCase()
					}, Object(N.a)(n));
					if (y.ok) {
						const t = Object(_.f)(n, {
								listingKey: f
							}),
							s = {
								...y.body,
								commentIds: o()(y.body.commentIds, t)
							};
						e(R({
							fetchedToken: b.token,
							key: f,
							meta: n.meta,
							...s
						}))
					} else e(U({
						account: y.body.data ? y.body.data.account : null,
						error: y.error,
						fetchedToken: b.token,
						key: f
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
				O = s("./src/reddit/selectors/communityAwards.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				v = s.n(g);
			const x = Object(i.b)(() => Object(a.c)({
				comment: b.b,
				isAwarded: (e, t) => {
					const s = Object(b.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(O.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: C.db
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var y = Object(l.a)(x(e => {
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
						className: Object(c.a)(v.a.commentOuterWrapper, {
							[v.a.isLast]: a,
							[v.a.isAwarded]: n,
							[v.a.isNightmodeOn]: i
						})
					}, o.a.createElement("div", {
						className: Object(c.a)(v.a.commentWrapper, {
							[v.a.isFirst]: r
						})
					}, o.a.createElement("div", {
						className: v.a.commentSeparator
					}), t.parentId && o.a.createElement("div", {
						className: v.a.commentSeparator
					}), o.a.createElement("div", {
						className: v.a.commentContentWrapper
					}, o.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				P = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/isComment.ts"),
				L = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				I = s.n(L),
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
			const N = Object(w.u)({
					currentProfileName: w.i,
					isCommentsPage: w.x,
					isCommentPermalink: w.w,
					isProfilePostListing: w.L,
					pageLayer: e => e
				}),
				S = E.a.wrapped(P.a, "OverviewCommentPost", I.a),
				_ = E.a.wrapped(n.default, "ClassicPost", I.a);
			t.a = N(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: r,
					allowModToolsUnderComments: n,
					height: i,
					width: a,
					...d
				} = e;
				return Object(j.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(S, k({}, d, {
					availableWidth: a,
					commentId: t
				})), o.a.createElement(y, {
					commentId: t,
					first: s,
					last: r,
					showModTools: n
				})) : o.a.createElement(y, {
					commentId: t,
					first: s,
					last: r,
					showModTools: n
				}) : o.a.createElement(_, k({}, d, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					isFirst: s,
					isLast: r,
					...i
				} = e;
				return o.a.createElement("div", d({
					className: Object(n.a)(a.a.border, {
						[a.a.isFirst]: s,
						[a.a.isLast]: r
					}, t)
				}, i))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/times.js"),
				o = s.n(r),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/communityAwards.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				v = s.n(g);
			const x = m.a.div("ProfileOwnerCommentWrapper", v.a),
				y = m.a.div("CommentContentWrapper", v.a),
				P = m.a.div("Wrapper", v.a),
				w = m.a.div("CommentSeparator", v.a),
				j = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(b.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(b.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(O.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: C.db
				}), e => ({
					openPost: t => e(Object(h.L)(t))
				}));
			class L extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: r,
						isAwarded: n,
						isFirst: a,
						isLast: d,
						isNightmodeOn: c,
						profileName: m,
						showModTools: u
					} = this.props, h = m === e.author ? I : E;
					return i.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							r({
								postOrComment: t,
								clickInfo: Object(f.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(P, {
						className: Object(l.a)({
							[v.a.isFirst]: a,
							[v.a.isLast]: d,
							[v.a.isAwarded]: n,
							[v.a.isNightmodeOn]: c
						})
					}, o()(s + 1, e => i.a.createElement(w, {
						key: e
					})), i.a.createElement(y, null, h(t, m, u))))
				}
			}
			const I = (e, t, s) => i.a.createElement(x, null, E(e, t, s, !0, !0)),
				E = function(e, t, s) {
					let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: r,
						showModTools: s,
						isExpanded: !!o
					})
				};
			t.a = j(L)
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
				O = s("./src/reddit/contexts/Post/index.tsx"),
				C = s("./src/lib/LRUCache/index.ts"),
				g = s("./src/telemetry/index.ts"),
				v = s("./src/telemetry/models/Timer.ts"),
				x = s("./src/reddit/components/PostList/index.m.less"),
				y = s.n(x);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = 500,
				j = new C.a(w),
				L = new C.a(w),
				I = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				E = (e, t, s, r, o, n) => {
					const i = `entered-${e}-${t}-${s?`last-${r}-${o}`:""}`;
					let a = j.get(i);
					return void 0 === a && (a = () => {
						s && n.onBottomViewed(r, o), n.trackOnPostEnteredViewport(e, t)
					}, j.set(i, a)), a
				},
				k = (e, t) => {
					const s = `click-${e}`;
					let r = L.get(s);
					return void 0 === r && (r = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, c.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(f.a)(e)
						})
					}, L.set(s, r)), r
				};
			class N extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new C.a(w), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && g.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = g.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = g.c.end(this.timerId);
						setTimeout(() => Object(g.b)(a.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && g.c.cancel(this.timerId), e.itemIds.length && (this.timerId = g.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && g.c.has(this.timerId)) {
						const e = g.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(g.b)(a.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && g.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return g.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = g.c.end(e);
					setTimeout(() => s(t(r, v.TimerType.InApp)), 0)
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
						}, C = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, n, r),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: f,
							render: e => i.a.createElement(O.a, {
								postId: b.postId
							}, i.a.createElement(C, P({}, b, e)))
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
						className: y.a.placeholder
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
						className: y.a.placeholder
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
						viewportTopPadding: h.f + h.r
					}, n), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = N
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
				p = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				u = s("./src/reddit/actions/pages/profileComments/index.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				f = s("./src/reddit/components/ContentGate/index.tsx"),
				b = s("./src/reddit/components/EmptyProfile/index.ts"),
				O = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				g = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = s("./src/lib/lessComponent.tsx"),
				y = s("./src/reddit/components/ClassicPost/index.tsx"),
				P = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				w = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				j = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				L = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				I = s("./src/reddit/constants/postLayout.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				N = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				_ = s.n(S);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = x.a.wrapped(y.default, "ClassicPost", _.a),
				M = x.a.wrapped(w.a, "OverviewCommentPost", _.a),
				A = Object(E.u)({
					currentProfileName: E.i,
					pageLayer: e => e
				}),
				B = Object(d.c)({
					comment: (e, t) => {
						let {
							itemId: s
						} = t;
						return Object(N.b)(e, {
							commentId: s
						})
					},
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, r = t.toLowerCase(), o = s.models[r];
							return o ? o.username : void 0
						})(e, s)
					}
				});
			var K = A(Object(a.b)(B)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: r,
					isLastInCommentList: o,
					layout: n,
					profileName: a,
					allowModToolsUnderComments: d
				} = e;
				if (n === I.g.Compact) return i.a.createElement(P.a, e);
				const {
					height: c,
					width: l,
					...m
				} = e;
				return i.a.createElement(R, m, r && i.a.createElement(j.a, {
					isFirst: !0
				}, n === I.g.Large ? i.a.createElement(T, F({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : i.a.createElement(M, F({}, e, {
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
			const R = Object(v.a)(e => i.a.createElement("div", {
				className: Object(g.a)(_.a.backgroundMargin, {
					[_.a.isFirstInCommentList]: e.isFirstInCommentList,
					[_.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(k.e)(e)
				}
			}, e.children));
			var U = s("./src/reddit/components/ProfileItemList/index.tsx"),
				W = s("./node_modules/lodash/noop.js"),
				V = s.n(W),
				q = s("./src/reddit/actions/ads/index.ts"),
				D = s("./src/reddit/actions/comment/list.ts"),
				H = s("./src/reddit/actions/post.ts"),
				J = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/post.ts"),
				Z = s("./src/reddit/featureFlags/index.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				z = s("./src/reddit/selectors/profileComments.ts"),
				Y = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/selectors/tracking.ts"),
				te = s("./src/reddit/selectors/user.ts");
			const se = Object(E.u)(),
				re = {
					apiError: z.a,
					apiPending: z.b,
					currentUser: te.k,
					measureScrollFPS: Z.d.measureScrollFPS,
					layout: E.S,
					loadMore: z.d,
					subredditsById: Y.cb,
					viewportDataLoaded: ee.a,
					commentsById: Q.q,
					itemIds: z.f,
					itemIdToPostId: z.e,
					postsById: X.J,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case I.g.Medium:
								return 174;
							case I.g.Classic:
								return 129;
							case I.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case I.g.Medium:
							case I.g.Classic:
								return 90;
							case I.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				oe = Object(d.c)(re),
				ne = Object(a.b)(oe, e => ({
					onBottomViewed: (t, s) => e(Object(D.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(q.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(H.L)(t)),
					fireAdPixelsOfType: V.a,
					trackOnPostEnteredViewport: V.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object($.k)(e, t),
					postComponentForLayout: G.b
				}));

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = e => i.a.createElement(K, ie({}, e, {
					allowModToolsUnderComments: !0
				})),
				de = (e => Object(J.c)(se(ne(e))))(U.a);
			var ce = e => i.a.createElement(de, ie({}, e, {
					itemComponent: ae
				})),
				le = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				me = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				pe = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				ue = s("./src/reddit/helpers/name/index.ts"),
				he = s("./src/reddit/helpers/trackers/screenview.ts"),
				fe = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				be = s("./src/reddit/layout/page/Listing/index.tsx"),
				Oe = s("./src/reddit/models/ContentGate.ts"),
				Ce = s("./src/reddit/pages/ErrorPages/index.tsx"),
				ge = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				ve = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				xe = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ye = s("./src/reddit/selectors/profile.ts");

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(E.u)(),
				je = Object(d.a)(E.E, te.kb, (e, t) => {
					let {
						location: s
					} = t;
					return o()([...Object(l.a)(s.search)])
				}, E.S, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(ye.k)(e, {
						profileName: s.params.profileName
					})
				}, te.Q, (e, t) => {
					let {
						match: s
					} = t;
					return Object(te.f)(e, c.oc + s.params.profileName)
				}, ve.d, (e, t) => {
					let {
						match: s
					} = t;
					return Object(te.L)(e, {
						profileName: s.params.profileName
					})
				}, xe.f, (e, t, s, r, o, n, i, a, d, c, l) => {
					var p, u;
					const {
						sort: f,
						t: b
					} = Object(h.b)(s), O = Object(m.a)(`u_${o}`, f, s);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: i,
						isOwnProfile: e,
						isProfileNSFW: !!n && n.isNSFW,
						layout: r,
						listingKey: O,
						profileName: o,
						sort: f,
						timeSort: b,
						avatar: null === (p = null == n ? void 0 : n.icon) || void 0 === p ? void 0 : p.url,
						isProfileBlockInterstitialEnabled: d,
						isBlocked: c,
						profileId: null !== (u = null == n ? void 0 : n.id) && void 0 !== u ? u : "",
						nsfwBlockingExperiment: l
					}
				}),
				Le = Object(a.b)(je, (e, t) => ({
					onLoadMore: () => e(Object(u.moreItemsRequested)()),
					onLayoutChange: () => e(Object(u.profileCommentsRequested)({
						...t.match,
						queryParams: o()([...Object(l.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(p.a)())
				}));
			t.default = we(Le(Object(fe.d)(e => {
				const {
					avatar: t,
					contentGateInfo: s,
					isBlocked: r,
					isOwnProfile: o,
					isProfileBlockInterstitialEnabled: a,
					isProfileNSFW: d,
					listingKey: l,
					nsfwBlockingExperiment: m,
					onLoadMore: p,
					onLayoutChange: u,
					openNsfwModal: h,
					over18Prefs: g,
					pageLayer: v,
					profileId: x,
					profileName: y,
					sort: P,
					timeSort: w
				} = e;
				if (Object(n.useEffect)(() => {
						d && !o && m === xe.a.Blurred && h()
					}, [m, o, d, h]), !y || !v) return null;
				if (s && s.profileDeleted) return i.a.createElement(f.default, {
					contentGateType: Oe.a.ProfileDeleted,
					profileName: y
				});
				if (s && s.profileSuspended) return i.a.createElement(f.default, {
					contentGateType: Oe.a.ProfileSuspended,
					profileName: y
				});
				if (451 === v.status || s && s.profileBlockedForLegalReason) return i.a.createElement(f.default, {
					contentGateType: Oe.a.ProfileBlockedForLegalReason,
					profileName: y
				});
				const j = v.queryParams && "true" === v.queryParams.consent;
				if (403 === v.status || r && !j) return a ? i.a.createElement(ge.a, {
					username: y,
					avatar: t,
					uid: x
				}) : i.a.createElement(Ce.a, null);
				if (404 === v.status) return i.a.createElement(f.default, {
					contentGateType: Oe.a.ProfileDoesNotExist,
					profileName: y
				});
				const L = y.toLowerCase(),
					I = `/user/${y}/comments/`,
					E = {
						listingKey: l,
						listingName: L
					};
				if (d && !o && m === xe.a.NoPreview) return i.a.createElement(pe.a, {
					contentTitle: Object(ue.d)(y)
				});
				if (!g && d && !o && m !== xe.a.Blurred) return i.a.createElement(f.default, {
					contentGateType: Oe.a.Nsfw,
					subredditName: y
				});
				const k = {
					sort: P,
					baseUrl: I,
					sortOptions: c.Gb,
					timeSort: w
				};
				return i.a.createElement(be.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(le.a, {
						profileName: y,
						viewBlockedConsent: j
					})),
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(O.a, k), i.a.createElement(C.a, null), i.a.createElement(ce, {
						listingKey: l,
						listingName: L,
						listingViewed: (e, t) => Object(he.o)(l, P, t, e, w),
						noPostsComponent: () => i.a.createElement(b.b, {
							profileName: y,
							timeSort: w
						}),
						onLoadMore: p,
						onTryAgain: u,
						inSubredditOrProfile: !1
					})),
					sidebar: i.a.createElement(me.a, Pe({}, E, {
						profileName: y
					}))
				})
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.023ce5f969602beaf6e7.js.map