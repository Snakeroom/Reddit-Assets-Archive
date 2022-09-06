// https://www.redditstatic.com/desktop2x/ProfileComments.641f89774f859cf79e17.js
// Retrieved at 9/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return T
			})), s.d(t, "profileCommentsLoaded", (function() {
				return B
			})), s.d(t, "profileCommentsFailed", (function() {
				return A
			})), s.d(t, "profileCommentsRequested", (function() {
				return M
			})), s.d(t, "moreItemsPending", (function() {
				return U
			})), s.d(t, "moreItemsLoaded", (function() {
				return K
			})), s.d(t, "moreItemsFailed", (function() {
				return q
			})), s.d(t, "moreItemsRequested", (function() {
				return D
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/difference.js"),
				o = s.n(r),
				n = s("./node_modules/lodash/pick.js"),
				a = s.n(n),
				i = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/externalAccount.ts"),
				l = s("./src/reddit/actions/moderatingSubreddits.ts"),
				p = s("./src/reddit/actions/pages/profileShared.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				f = s("./src/reddit/actions/profile/index.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				O = s("./src/reddit/constants/errors.ts"),
				v = s("./src/reddit/constants/parameters.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/config.ts"),
				j = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				y = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				w = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				h = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				L = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const k = (e, t, s, r) => {
				let o = Object(y.a)(Object(j.a)(Object(h.a)(Object(L.a)(`${C.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return r && (o = Object(w.a)(o)), Object(P.a)(e, {
					data: s,
					endpoint: o,
					method: g.mb.GET
				})
			};
			var E = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				I = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				N = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				_ = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/profileComments.ts"),
				F = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const T = Object(i.a)(F.f),
				B = Object(i.a)(F.e),
				A = Object(i.a)(F.d),
				M = e => async (t, s, r) => {
					const {
						queryParams: o,
						params: n
					} = e, {
						sort: i,
						t: x
					} = Object(p.b)(o), {
						profileName: C
					} = n, j = Object(c.a)(`u_${C}`, i, e.queryParams), {
						profileCommentsPage: g
					} = s(), P = g.commentIds[j], y = g.api.error[j], w = g.api.pending[j];
					if (await t(f.d(C)), w || P && !y) {
						if (P) {
							const e = Object(_.r)(s(), {
								profileName: C
							});
							t(u.m({
								title: e
							}))
						}
						return
					}
					const h = {
						...a()(e.queryParams, [...v.k, v.g]),
						sort: i,
						t: Object(E.a)(i, x)
					};
					t(T({
						key: j
					}));
					const L = await Object(I.a)("profileComments", () => k(r.apiContext(), C, h, Object(N.a)(s())));
					if (!L.ok) return t(A({
						account: L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: j
					})), L.body.reason === O.a.DeletedProfile && t(Object(d.u)({
						profileName: C
					})), void t(u.n(L.status));
					const S = L.body;
					t(B({
						key: j,
						meta: s().meta,
						...S
					})), await Promise.all([t(Object(p.c)(C)), t(Object(b.q)()), t(Object(l.b)()), t(m.o(C))])
				}, U = Object(i.a)(F.c), K = Object(i.a)(F.b), q = Object(i.a)(F.a), D = () => async (e, t, s) => {
					let {
						apiContext: r
					} = s;
					const n = t(),
						{
							currentPage: i
						} = n.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: d,
						params: m
					} = i.routeMatch.match, {
						sort: l,
						t: u
					} = Object(p.b)(d), {
						profileName: f
					} = m, b = Object(c.a)(`u_${f}`, l, d), O = Object(S.d)(n, {
						listingKey: b
					});
					if (!O) return;
					const C = Object(S.b)(n, {
							listingKey: b
						}),
						j = Object(S.c)(n, {
							listingKey: b
						}),
						g = j && j[O.token];
					if (C || g) return;
					e(U({
						key: b,
						fetchedToken: O.token
					}));
					const P = await k(r(), f, {
						after: O.token,
						dist: O.dist,
						sort: l,
						t: u,
						...a()(d, v.k),
						layout: Object(x.S)(n, {}).toLowerCase()
					}, Object(N.a)(n));
					if (P.ok) {
						const t = Object(S.f)(n, {
								listingKey: b
							}),
							s = {
								...P.body,
								commentIds: o()(P.body.commentIds, t)
							};
						e(K({
							fetchedToken: O.token,
							key: b,
							meta: n.meta,
							...s
						}))
					} else e(q({
						account: P.body.data ? P.body.data.account : null,
						error: P.error,
						fetchedToken: O.token,
						key: b
					}))
				}
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
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
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
					...a
				} = e;
				return o.a.createElement("div", c({
					className: Object(n.a)(i.a.border, {
						[i.a.isFirst]: s,
						[i.a.isLast]: r
					}, t)
				}, a))
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
				a = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				m = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				f = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				v = s("./src/reddit/selectors/communityAwards.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				j = s.n(C);
			const g = l.a.div("ProfileOwnerCommentWrapper", j.a),
				P = l.a.div("CommentContentWrapper", j.a),
				y = l.a.div("Wrapper", j.a),
				w = l.a.div("CommentSeparator", j.a),
				h = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(O.b)(e, t),
					isAwarded: (e, t) => {
						const s = Object(O.b)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(v.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: x.db
				}), e => ({
					openPost: t => e(Object(f.L)(t))
				}));
			class L extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: r,
						isAwarded: n,
						isFirst: i,
						isLast: c,
						isNightmodeOn: d,
						profileName: l,
						showModTools: u
					} = this.props, f = l === e.author ? k : E;
					return a.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							r({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, a.a.createElement(y, {
						className: Object(m.a)({
							[j.a.isFirst]: i,
							[j.a.isLast]: c,
							[j.a.isAwarded]: n,
							[j.a.isNightmodeOn]: d
						})
					}, o()(s + 1, e => a.a.createElement(w, {
						key: e
					})), a.a.createElement(P, null, f(t, l, u))))
				}
			}
			const k = (e, t, s) => a.a.createElement(g, null, E(e, t, s, !0, !0)),
				E = function(e, t, s) {
					let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: r,
						showModTools: s,
						isExpanded: !!o
					})
				};
			t.a = h(L)
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
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(r),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/actions/nsfwBlocking/async.tsx"),
				u = s("./src/reddit/actions/pages/profileComments/index.ts"),
				f = s("./src/reddit/actions/pages/profileShared.ts"),
				b = s("./src/reddit/components/ContentGate/index.tsx"),
				O = s("./src/reddit/components/EmptyProfile/index.ts"),
				v = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				x = s("./src/reddit/components/JumpToContent/index.tsx"),
				C = s("./src/lib/classNames/index.ts"),
				j = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				g = s("./src/lib/lessComponent.tsx"),
				P = s("./src/reddit/components/ClassicPost/index.tsx"),
				y = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				w = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				h = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				L = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				k = s("./src/reddit/constants/postLayout.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				N = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				S = s.n(_);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = g.a.wrapped(P.default, "ClassicPost", S.a),
				B = g.a.wrapped(w.a, "OverviewCommentPost", S.a),
				A = Object(E.u)({
					currentProfileName: E.i,
					pageLayer: e => e
				}),
				M = Object(c.c)({
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
			var U = A(Object(i.b)(M)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: r,
					isLastInCommentList: o,
					layout: n,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (n === k.g.Compact) return a.a.createElement(y.a, e);
				const {
					height: d,
					width: m,
					...l
				} = e;
				return a.a.createElement(K, l, r && a.a.createElement(h.a, {
					isFirst: !0
				}, n === k.g.Large ? a.a.createElement(T, F({}, e, {
					availableWidth: m,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(B, F({}, e, {
					commentId: s,
					profileName: i
				}))), a.a.createElement(h.a, {
					isLast: o
				}, a.a.createElement(L.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: i,
					showModTools: c
				})))
			}));
			const K = Object(j.a)(e => a.a.createElement("div", {
				className: Object(C.a)(S.a.backgroundMargin, {
					[S.a.isFirstInCommentList]: e.isFirstInCommentList,
					[S.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(I.e)(e)
				}
			}, e.children));
			var q = s("./src/reddit/components/ProfileItemList/index.tsx"),
				D = s("./node_modules/lodash/noop.js"),
				R = s.n(D),
				W = s("./src/reddit/actions/ads/index.ts"),
				G = s("./src/reddit/actions/comment/list.ts"),
				H = s("./src/reddit/actions/post.ts"),
				J = s("./src/reddit/components/TrackingHelper/index.tsx"),
				V = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Z = s("./src/reddit/helpers/trackers/post.ts"),
				Q = s("./src/reddit/featureFlags/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				$ = s("./src/reddit/selectors/profileComments.ts"),
				z = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/selectors/tracking.ts"),
				te = s("./src/reddit/selectors/user.ts");
			const se = Object(E.u)(),
				re = {
					apiError: $.a,
					apiPending: $.b,
					currentUser: te.k,
					measureScrollFPS: Q.d.measureScrollFPS,
					layout: E.S,
					loadMore: $.d,
					subredditsById: z.cb,
					viewportDataLoaded: ee.a,
					commentsById: X.q,
					itemIds: $.f,
					itemIdToPostId: $.e,
					postsById: Y.J,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case k.g.Medium:
								return 174;
							case k.g.Classic:
								return 129;
							case k.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case k.g.Medium:
							case k.g.Classic:
								return 90;
							case k.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				oe = Object(c.c)(re),
				ne = Object(i.b)(oe, e => ({
					onBottomViewed: (t, s) => e(Object(G.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(W.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(H.L)(t)),
					fireAdPixelsOfType: R.a,
					trackOnPostEnteredViewport: R.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(Z.k)(e, t),
					postComponentForLayout: V.b
				}));

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = e => a.a.createElement(U, ae({}, e, {
					allowModToolsUnderComments: !0
				})),
				ce = (e => Object(J.c)(se(ne(e))))(q.a);
			var de = e => a.a.createElement(ce, ae({}, e, {
					itemComponent: ie
				})),
				me = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				le = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				pe = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				ue = s("./src/reddit/helpers/name/index.ts"),
				fe = s("./src/reddit/helpers/trackers/screenview.ts"),
				be = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Oe = s("./src/reddit/layout/page/Listing/index.tsx"),
				ve = s("./src/reddit/models/ContentGate.ts"),
				xe = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Ce = s("./src/reddit/pages/ProfileBlockInterstitial/index.tsx"),
				je = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ge = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Pe = s("./src/reddit/selectors/profile.ts");

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const we = Object(E.u)(),
				he = Object(c.a)(E.E, te.kb, (e, t) => {
					let {
						location: s
					} = t;
					return o()([...Object(m.a)(s.search)])
				}, E.S, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Pe.k)(e, {
						profileName: s.params.profileName
					})
				}, te.Q, (e, t) => {
					let {
						match: s
					} = t;
					return Object(te.f)(e, d.nc + s.params.profileName)
				}, je.d, (e, t) => {
					let {
						match: s
					} = t;
					return Object(te.L)(e, {
						profileName: s.params.profileName
					})
				}, ge.f, (e, t, s, r, o, n, a, i, c, d, m) => {
					var p, u;
					const {
						sort: b,
						t: O
					} = Object(f.b)(s), v = Object(l.a)(`u_${o}`, b, s);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!n && n.isNSFW,
						layout: r,
						listingKey: v,
						profileName: o,
						sort: b,
						timeSort: O,
						avatar: null === (p = null == n ? void 0 : n.icon) || void 0 === p ? void 0 : p.url,
						isProfileBlockInterstitialEnabled: c,
						isBlocked: d,
						profileId: null !== (u = null == n ? void 0 : n.id) && void 0 !== u ? u : "",
						nsfwBlockingExperiment: m
					}
				}),
				Le = Object(i.b)(he, (e, t) => ({
					onLoadMore: () => e(Object(u.moreItemsRequested)()),
					onLayoutChange: () => e(Object(u.profileCommentsRequested)({
						...t.match,
						queryParams: o()([...Object(m.a)(t.location.search)])
					})),
					openNsfwModal: () => e(Object(p.a)())
				}));
			t.default = we(Le(Object(be.d)(e => {
				const {
					avatar: t,
					contentGateInfo: s,
					isBlocked: r,
					isOwnProfile: o,
					isProfileBlockInterstitialEnabled: i,
					isProfileNSFW: c,
					listingKey: m,
					nsfwBlockingExperiment: l,
					onLoadMore: p,
					onLayoutChange: u,
					openNsfwModal: f,
					over18Prefs: C,
					pageLayer: j,
					profileId: g,
					profileName: P,
					sort: y,
					timeSort: w
				} = e;
				if (Object(n.useEffect)(() => {
						c && !o && l === ge.a.Blurred && f()
					}, [l, o, c, f]), !P || !j) return null;
				if (s && s.profileDeleted) return a.a.createElement(b.default, {
					contentGateType: ve.a.ProfileDeleted,
					profileName: P
				});
				if (s && s.profileSuspended) return a.a.createElement(b.default, {
					contentGateType: ve.a.ProfileSuspended,
					profileName: P
				});
				if (451 === j.status || s && s.profileBlockedForLegalReason) return a.a.createElement(b.default, {
					contentGateType: ve.a.ProfileBlockedForLegalReason,
					profileName: P
				});
				const h = j.queryParams && "true" === j.queryParams.consent;
				if (403 === j.status || r && !h) return i ? a.a.createElement(Ce.a, {
					username: P,
					avatar: t,
					uid: g
				}) : a.a.createElement(xe.a, null);
				if (404 === j.status) return a.a.createElement(b.default, {
					contentGateType: ve.a.ProfileDoesNotExist,
					profileName: P
				});
				const L = P.toLowerCase(),
					k = `/user/${P}/comments/`,
					E = {
						listingKey: m,
						listingName: L
					};
				if (c && !o && l === ge.a.NoPreview) return a.a.createElement(pe.a, {
					contentTitle: Object(ue.d)(P)
				});
				if (!C && c && !o && l !== ge.a.Blurred) return a.a.createElement(b.default, {
					contentGateType: ve.a.Nsfw,
					subredditName: P
				});
				const I = {
					sort: y,
					baseUrl: k,
					sortOptions: d.Gb,
					timeSort: w
				};
				return a.a.createElement(Oe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(me.a, {
						profileName: P,
						viewBlockedConsent: h
					})),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(v.a, I), a.a.createElement(x.a, null), a.a.createElement(de, {
						listingKey: m,
						listingName: L,
						listingViewed: (e, t) => Object(fe.o)(m, y, t, e, w),
						noPostsComponent: () => a.a.createElement(O.b, {
							profileName: P,
							timeSort: w
						}),
						onLoadMore: p,
						onTryAgain: u,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(le.a, ye({}, E, {
						profileName: P
					}))
				})
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.641f89774f859cf79e17.js.map