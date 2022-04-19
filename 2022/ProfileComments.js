// https://www.redditstatic.com/desktop2x/ProfileComments.2b5d7336002002989fec.js
// Retrieved at 4/19/2022, 3:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return T
			})), s.d(t, "profileCommentsLoaded", (function() {
				return A
			})), s.d(t, "profileCommentsFailed", (function() {
				return M
			})), s.d(t, "profileCommentsRequested", (function() {
				return R
			})), s.d(t, "moreItemsPending", (function() {
				return B
			})), s.d(t, "moreItemsLoaded", (function() {
				return U
			})), s.d(t, "moreItemsFailed", (function() {
				return K
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
				C = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/config.ts"),
				v = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeApiRequest/index.ts"),
				P = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				w = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				L = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, s, r) => {
				let o = Object(P.a)(Object(v.a)(Object(w.a)(Object(L.a)(`${O.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return r && (o = Object(j.a)(o)), Object(y.a)(e, {
					data: s,
					endpoint: o,
					method: x.kb.GET
				})
			};
			var E = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				k = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				N = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				S = s("./src/reddit/selectors/profile.ts"),
				_ = s("./src/reddit/selectors/profileComments.ts"),
				F = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const T = Object(a.a)(F.f),
				A = Object(a.a)(F.e),
				M = Object(a.a)(F.d),
				R = e => async (t, s, r) => {
					const {
						queryParams: o,
						params: n
					} = e, {
						sort: a,
						t: g
					} = Object(p.b)(o), {
						profileName: O
					} = n, v = Object(d.a)(`u_${O}`, a, e.queryParams), {
						profileCommentsPage: x
					} = s(), y = x.commentIds[v], P = x.api.error[v], j = x.api.pending[v];
					if (await t(h.d(O)), j || y && !P) {
						if (y) {
							const e = Object(S.q)(s(), {
								profileName: O
							});
							t(u.m({
								title: e
							}))
						}
						return
					}
					const w = {
						...i()(e.queryParams, [...C.n, C.j]),
						sort: a,
						t: Object(E.a)(a, g)
					};
					t(T({
						key: v
					}));
					const L = await Object(k.a)("profileComments", () => I(r.apiContext(), O, w, Object(N.a)(s())));
					if (!L.ok) return t(M({
						account: L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: v
					})), L.body.reason === b.a.DeletedProfile && t(Object(c.s)({
						profileName: O
					})), void t(u.n(L.status));
					const _ = L.body;
					t(A({
						key: v,
						meta: s().meta,
						..._
					})), await Promise.all([t(Object(p.c)(O)), t(Object(f.q)()), t(Object(m.b)()), t(l.o(O))])
				}, B = Object(a.a)(F.c), U = Object(a.a)(F.b), K = Object(a.a)(F.a), W = () => async (e, t, s) => {
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
					const O = Object(_.b)(n, {
							listingKey: f
						}),
						v = Object(_.c)(n, {
							listingKey: f
						}),
						x = v && v[b.token];
					if (O || x) return;
					e(B({
						key: f,
						fetchedToken: b.token
					}));
					const y = await I(r(), h, {
						after: b.token,
						dist: b.dist,
						sort: m,
						t: u,
						...i()(c, C.n),
						layout: Object(g.R)(n, {}).toLowerCase()
					}, Object(N.a)(n));
					if (y.ok) {
						const t = Object(_.f)(n, {
								listingKey: f
							}),
							s = {
								...y.body,
								commentIds: o()(y.body.commentIds, t)
							};
						e(U({
							fetchedToken: b.token,
							key: f,
							meta: n.meta,
							...s
						}))
					} else e(K({
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
				C = s("./src/reddit/selectors/communityAwards.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				v = s.n(O);
			const x = Object(i.b)(() => Object(a.c)({
				comment: b.b,
				isAwarded: (e, t) => {
					const s = Object(b.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(C.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: g.db
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
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/isComment.ts"),
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
			const N = Object(j.u)({
					currentProfileName: j.i,
					isCommentsPage: j.x,
					isCommentPermalink: j.w,
					isProfilePostListing: j.L,
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
				return Object(w.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(S, k({}, d, {
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
				C = s("./src/reddit/selectors/communityAwards.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				v = s.n(O);
			const x = m.a.div("ProfileOwnerCommentWrapper", v.a),
				y = m.a.div("CommentContentWrapper", v.a),
				P = m.a.div("Wrapper", v.a),
				j = m.a.div("CommentSeparator", v.a),
				w = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(b.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(b.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(C.a)(e, t);
							return s && s.coinPrice >= c.g
						})
					},
					isNightmodeOn: g.db
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
					}, o()(s + 1, e => i.a.createElement(j, {
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
			t.a = w(L)
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
				C = s("./src/reddit/contexts/Post/index.tsx"),
				g = s("./src/lib/LRUCache/index.ts"),
				O = s("./src/telemetry/index.ts"),
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
			const j = 500,
				w = new g.a(j),
				L = new g.a(j),
				I = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				E = (e, t, s, r, o, n) => {
					const i = `entered-${e}-${t}-${s?`last-${r}-${o}`:""}`;
					let a = w.get(i);
					return void 0 === a && (a = () => {
						s && n.onBottomViewed(r, o), n.trackOnPostEnteredViewport(e, t)
					}, w.set(i, a)), a
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
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new g.a(j), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && O.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = O.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = O.c.end(this.timerId);
						setTimeout(() => Object(O.b)(a.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && O.c.cancel(this.timerId), e.itemIds.length && (this.timerId = O.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && O.c.has(this.timerId)) {
						const e = O.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(O.b)(a.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && O.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return O.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = O.c.end(e);
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
						}, g = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, n, r),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: f,
							render: e => i.a.createElement(C.a, {
								postId: b.postId
							}, i.a.createElement(g, P({}, b, e)))
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
						viewportTopPadding: h.f + h.s
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
				p = s("./src/reddit/actions/pages/profileComments/index.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				h = s("./src/reddit/components/ContentGate/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/index.ts"),
				b = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				g = s("./src/lib/classNames/index.ts"),
				O = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				v = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/components/ClassicPost/index.tsx"),
				y = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				P = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				j = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				w = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				L = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				k = s("./src/reddit/selectors/commentSelector.ts"),
				N = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				S = s.n(N);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = v.a.wrapped(x.default, "ClassicPost", S.a),
				T = v.a.wrapped(P.a, "OverviewCommentPost", S.a),
				A = Object(I.u)({
					currentProfileName: I.i,
					pageLayer: e => e
				}),
				M = Object(d.c)({
					comment: (e, t) => {
						let {
							itemId: s
						} = t;
						return Object(k.b)(e, {
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
			var R = A(Object(a.b)(M)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: r,
					isLastInCommentList: o,
					layout: n,
					profileName: a,
					allowModToolsUnderComments: d
				} = e;
				if (n === L.g.Compact) return i.a.createElement(y.a, e);
				const {
					height: c,
					width: l,
					...m
				} = e;
				return i.a.createElement(B, m, r && i.a.createElement(j.a, {
					isFirst: !0
				}, n === L.g.Large ? i.a.createElement(F, _({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : i.a.createElement(T, _({}, e, {
					commentId: s,
					profileName: a
				}))), i.a.createElement(j.a, {
					isLast: o
				}, i.a.createElement(w.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: a,
					showModTools: d
				})))
			}));
			const B = Object(O.a)(e => i.a.createElement("div", {
				className: Object(g.a)(S.a.backgroundMargin, {
					[S.a.isFirstInCommentList]: e.isFirstInCommentList,
					[S.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(E.e)(e)
				}
			}, e.children));
			var U = s("./src/reddit/components/ProfileItemList/index.tsx"),
				K = s("./node_modules/lodash/noop.js"),
				W = s.n(K),
				V = s("./src/reddit/actions/ads/index.ts"),
				q = s("./src/reddit/actions/comment/list.ts"),
				D = s("./src/reddit/actions/post.ts"),
				H = s("./src/reddit/components/TrackingHelper/index.tsx"),
				J = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/post.ts"),
				G = s("./src/reddit/featureFlags/index.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				Q = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/profileComments.ts"),
				z = s("./src/reddit/selectors/subreddit.ts"),
				Y = s("./src/reddit/selectors/tracking.ts"),
				ee = s("./src/reddit/selectors/user.ts");
			const te = Object(I.u)(),
				se = {
					apiError: X.a,
					apiPending: X.b,
					currentUser: ee.k,
					measureScrollFPS: G.d.measureScrollFPS,
					layout: I.R,
					loadMore: X.d,
					subredditsById: z.ab,
					viewportDataLoaded: Y.a,
					commentsById: Z.q,
					itemIds: X.f,
					itemIdToPostId: X.e,
					postsById: Q.J,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case L.g.Medium:
								return 174;
							case L.g.Classic:
								return 129;
							case L.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case L.g.Medium:
							case L.g.Classic:
								return 90;
							case L.g.Compact:
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
						e(V.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(D.L)(t)),
					fireAdPixelsOfType: W.a,
					trackOnPostEnteredViewport: W.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object($.h)(e, t),
					postComponentForLayout: J.b
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
				ae = (e => Object(H.c)(te(oe(e))))(U.a);
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
				Ce = s("./src/reddit/pages/ErrorPages/index.tsx"),
				ge = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				Oe = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ve = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				xe = s("./src/reddit/selectors/profile.ts");

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = Object(I.u)(),
				je = Object(d.a)(I.E, ee.kb, (e, t) => {
					let {
						location: s
					} = t;
					return o()([...Object(l.a)(s.search)])
				}, I.R, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(xe.j)(e, {
						profileName: s.params.profileName
					})
				}, ee.Q, (e, t) => {
					let {
						match: s
					} = t;
					return Object(ee.f)(e, c.lc + s.params.profileName)
				}, ve.a, Oe.b, (e, t) => {
					let {
						match: s
					} = t;
					return Object(ee.L)(e, {
						profileName: s.params.profileName
					})
				}, (e, t, s, r, o, n, i, a, d, c, l) => {
					var p, h;
					const {
						sort: f,
						t: b
					} = Object(u.b)(s), C = Object(m.a)(`u_${o}`, f, s);
					return {
						contentGateInfo: a,
						over18Prefs: t,
						isLoggedIn: i,
						isOwnProfile: e,
						isProfileNSFW: !!n && n.isNSFW,
						layout: r,
						listingKey: C,
						profileName: o,
						sort: f,
						timeSort: b,
						isEligibleForNsfwSignupUpsellTreatment: d,
						avatar: null === (p = null == n ? void 0 : n.icon) || void 0 === p ? void 0 : p.url,
						isProfileBlockInterstitialEnabled: c,
						isBlocked: l,
						profileId: null !== (h = null == n ? void 0 : n.id) && void 0 !== h ? h : ""
					}
				}),
				we = Object(a.b)(je, (e, t) => ({
					onLoadMore: () => e(Object(p.moreItemsRequested)()),
					onLayoutChange: () => e(Object(p.profileCommentsRequested)({
						...t.match,
						queryParams: o()([...Object(l.a)(t.location.search)])
					}))
				}));
			t.default = Pe(we(Object(he.d)(e => {
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
					isEligibleForNsfwSignupUpsellTreatment: g,
					avatar: O,
					isProfileBlockInterstitialEnabled: v,
					isBlocked: x,
					profileId: y
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
				const P = l.queryParams && "true" === l.queryParams.consent;
				if (403 === l.status || x && !P) return v ? i.a.createElement(ge.a, {
					username: m,
					avatar: O,
					uid: y
				}) : i.a.createElement(Ce.a, null);
				if (404 === l.status) return i.a.createElement(h.default, {
					contentGateType: be.a.ProfileDoesNotExist,
					profileName: m
				});
				const j = m.toLowerCase(),
					w = `/user/${m}/comments/`,
					L = {
						listingKey: n,
						listingName: j
					};
				if (o && !r && g) return i.a.createElement(me.a, {
					contentTitle: Object(pe.d)(m)
				});
				if (!s && o && !r) return i.a.createElement(h.default, {
					contentGateType: be.a.Nsfw,
					subredditName: m
				});
				const I = {
					sort: p,
					baseUrl: w,
					sortOptions: c.Eb,
					timeSort: u
				};
				return i.a.createElement(fe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(ce.a, {
						profileName: m,
						viewBlockedConsent: P
					})),
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(b.a, I), i.a.createElement(C.a, null), i.a.createElement(de, {
						listingKey: n,
						listingName: j,
						listingViewed: (e, t) => Object(ue.o)(n, p, t, e, u),
						noPostsComponent: () => i.a.createElement(f.b, {
							profileName: m,
							timeSort: u
						}),
						onLoadMore: a,
						onTryAgain: d,
						inSubredditOrProfile: !1
					})),
					sidebar: i.a.createElement(le.a, ye({}, L, {
						profileName: m
					}))
				})
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.2b5d7336002002989fec.js.map