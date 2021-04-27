// https://www.redditstatic.com/desktop2x/ProfileComments.fc214d888c56ec01c9c4.js
// Retrieved at 4/27/2021, 5:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileCommentsPending", (function() {
				return T
			})), r.d(t, "profileCommentsLoaded", (function() {
				return F
			})), r.d(t, "profileCommentsFailed", (function() {
				return A
			})), r.d(t, "profileCommentsRequested", (function() {
				return q
			})), r.d(t, "moreItemsPending", (function() {
				return B
			})), r.d(t, "moreItemsLoaded", (function() {
				return M
			})), r.d(t, "moreItemsFailed", (function() {
				return D
			})), r.d(t, "moreItemsRequested", (function() {
				return G
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/difference.js"),
				o = r.n(s),
				n = r("./node_modules/lodash/pick.js"),
				a = r.n(n),
				i = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				d = r("./src/reddit/actions/contentGate.ts"),
				m = r("./src/reddit/actions/externalAccount.ts"),
				l = r("./src/reddit/actions/moderatingSubreddits.ts"),
				p = r("./src/reddit/actions/pages/profileShared.ts"),
				u = r("./src/reddit/actions/platform.ts"),
				f = r("./src/reddit/actions/profile/index.ts"),
				b = r("./src/reddit/actions/subreddit.ts"),
				O = r("./src/reddit/constants/errors.ts"),
				y = r("./src/reddit/constants/parameters.ts"),
				g = r("./src/reddit/contexts/PageLayer/index.tsx"),
				j = r("./src/config.ts"),
				x = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				C = r("./src/lib/constants/index.ts"),
				P = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				w = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const L = (e, t, r, s) => {
				let o = Object(x.a)(Object(w.a)(Object(v.a)(`${j.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`)));
				return s && (o = Object(h.a)(o)), Object(P.a)(e, {
					data: r,
					endpoint: o,
					method: C.cb.GET
				})
			};
			var I = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				N = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				E = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				k = r("./src/reddit/selectors/profile.ts"),
				_ = r("./src/reddit/selectors/profileComments.ts"),
				S = r("./src/reddit/actions/pages/profileComments/constants.ts");
			const T = Object(i.a)(S.f),
				F = Object(i.a)(S.e),
				A = Object(i.a)(S.d),
				q = e => async (t, r, s) => {
					const {
						queryParams: o,
						params: n
					} = e, {
						sort: i,
						t: g
					} = Object(p.b)(o), {
						profileName: j
					} = n, x = Object(c.a)(`u_${j}`, i, e.queryParams), {
						profileCommentsPage: C
					} = r(), P = C.commentIds[x], h = C.api.error[x], w = C.api.pending[x];
					if (await t(f.d(j)), w || P && !h) {
						if (P) {
							const e = Object(k.q)(r(), {
								profileName: j
							});
							t(u.l({
								title: e
							}))
						}
						return
					}
					const v = {
						...a()(e.queryParams, [...y.l, y.h]),
						sort: i,
						t: Object(I.a)(i, g)
					};
					t(T({
						key: x
					}));
					const _ = await Object(N.a)("profileComments", () => L(s.apiContext(), j, v, Object(E.a)(r())));
					if (!_.ok) return t(A({
						account: _.body.data ? _.body.data.account : null,
						error: _.body.reason ? {
							type: _.body.reason
						} : _.error,
						key: x
					})), _.body.reason === O.a.DeletedProfile && t(Object(d.p)({
						profileName: j
					})), void t(u.m(_.status));
					const S = _.body;
					t(F({
						key: x,
						meta: r().meta,
						...S
					})), await Promise.all([t(Object(p.c)(j)), t(Object(b.q)()), t(Object(l.b)()), t(m.o(j))])
				}, B = Object(i.a)(S.c), M = Object(i.a)(S.b), D = Object(i.a)(S.a), G = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						{
							currentPage: n
						} = s.platform;
					if (!n || !n.routeMatch) return;
					const {
						queryParams: i,
						params: d
					} = n.routeMatch.match, {
						sort: m,
						t: l
					} = Object(p.b)(i), {
						profileName: u
					} = d, f = Object(c.a)(`u_${u}`, m, i), b = Object(_.d)(s, {
						listingKey: f
					});
					if (!b) return;
					const O = Object(_.b)(s, {
							listingKey: f
						}),
						j = Object(_.c)(s, {
							listingKey: f
						}),
						x = j && j[b.token];
					if (O || x) return;
					e(B({
						key: f,
						fetchedToken: b.token
					}));
					const C = await L(r(), u, {
						after: b.token,
						dist: b.dist,
						sort: m,
						t: l,
						...a()(i, y.l),
						layout: Object(g.O)(s, {}).toLowerCase()
					}, Object(E.a)(s));
					if (C.ok) {
						const t = Object(_.f)(s, {
								listingKey: f
							}),
							r = {
								...C.body,
								commentIds: o()(C.body.commentIds, t)
							};
						e(M({
							fetchedToken: b.token,
							key: f,
							meta: s.meta,
							...r
						}))
					} else e(D({
						account: C.body.data ? C.body.data.account : null,
						error: C.error,
						fetchedToken: b.token,
						key: f
					}))
				}
		},
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, r) {
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
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/lodash/fromPairs.js"),
				o = r.n(s),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/constants/index.ts"),
				m = r("./src/lib/extractQueryParams/index.ts"),
				l = r("./src/lib/makeListingKey/index.ts"),
				p = r("./src/reddit/actions/pages/profileComments/index.ts"),
				u = r("./src/reddit/actions/pages/profileShared.ts"),
				f = r("./src/reddit/components/ContentGate/index.tsx"),
				b = r("./src/reddit/components/EmptyProfile/index.ts"),
				O = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				y = r("./src/reddit/components/JumpToContent/index.tsx"),
				g = r("./src/lib/classNames/index.ts"),
				j = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = r("./src/lib/lessComponent.tsx"),
				C = r("./src/reddit/components/ClassicPost/index.tsx"),
				P = r("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				h = r("./src/reddit/components/OverviewCommentPost/index.tsx"),
				w = r("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				v = r("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				L = r("./src/reddit/constants/postLayout.ts"),
				I = r("./src/reddit/contexts/PageLayer/index.tsx"),
				N = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				E = r("./src/reddit/selectors/commentSelector.ts"),
				k = r("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				_ = r.n(k);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const T = x.a.wrapped(C.default, "ClassicPost", _.a),
				F = x.a.wrapped(h.a, "OverviewCommentPost", _.a),
				A = Object(I.t)({
					currentProfileName: I.h,
					pageLayer: e => e
				}),
				q = Object(c.c)({
					comment: (e, {
						itemId: t
					}) => Object(E.a)(e, {
						commentId: t
					}),
					profileName: (e, {
						currentProfileName: t
					}) => {
						if (t) return ((e, t) => {
							const {
								users: r
							} = e, s = t.toLowerCase(), o = r.models[s];
							return o ? o.username : void 0
						})(e, t)
					}
				});
			var B = A(Object(i.b)(q)(e => {
				const {
					comment: t,
					itemId: r,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					layout: n,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (n === L.g.Compact) return a.a.createElement(P.a, e);
				const {
					height: d,
					width: m,
					...l
				} = e;
				return a.a.createElement(M, l, s && a.a.createElement(w.a, {
					isFirst: !0
				}, n === L.g.Large ? a.a.createElement(T, S({}, e, {
					availableWidth: m,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(F, S({}, e, {
					commentId: r,
					profileName: i
				}))), a.a.createElement(w.a, {
					isLast: o
				}, a.a.createElement(v.a, {
					commentId: r,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: r,
					profileName: i,
					showModTools: c
				})))
			}));
			const M = Object(j.a)(e => a.a.createElement("div", {
				className: Object(g.a)(_.a.backgroundMargin, {
					[_.a.isFirstInCommentList]: e.isFirstInCommentList,
					[_.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(N.e)(e)
				}
			}, e.children));
			var D = r("./src/reddit/components/ProfileItemList/index.tsx"),
				G = r("./node_modules/lodash/noop.js"),
				K = r.n(G),
				R = r("./src/reddit/actions/ads/index.ts"),
				J = r("./src/reddit/actions/comment/list.ts"),
				H = r("./src/reddit/actions/post.ts"),
				U = r("./src/reddit/components/TrackingHelper/index.tsx"),
				V = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				W = r("./src/reddit/helpers/trackers/post.ts"),
				$ = r("./src/reddit/featureFlags/index.ts"),
				Q = r("./src/reddit/selectors/comments.ts"),
				X = r("./src/reddit/selectors/posts.ts"),
				Z = r("./src/reddit/selectors/profileComments.ts"),
				Y = r("./src/reddit/selectors/subreddit.ts"),
				z = r("./src/reddit/selectors/tracking.ts"),
				ee = r("./src/reddit/selectors/user.ts");
			const te = Object(I.t)(),
				re = {
					apiError: Z.a,
					apiPending: Z.b,
					currentUser: ee.i,
					measureScrollFPS: $.d.measureScrollFPS,
					layout: I.O,
					loadMore: Z.d,
					subredditsById: Y.ab,
					viewportDataLoaded: z.a,
					commentsById: Q.q,
					itemIds: Z.f,
					itemIdToPostId: Z.e,
					postsById: X.I,
					estimateItemHeight: e => (e, t, r) => {
						if (r) switch (t) {
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
				se = Object(c.c)(re),
				oe = Object(i.b)(se, e => ({
					onBottomViewed: (t, r) => e(Object(J.c)(t, r)),
					adBrandSafetyStatusReceived: t => {
						e(R.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(H.I)(t)),
					fireAdPixelsOfType: K.a,
					trackOnPostEnteredViewport: K.a
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					postClickEventFactory: (e, t) => Object(W.g)(e, t),
					postComponentForLayout: V.b
				}));

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = e => a.a.createElement(B, ne({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(U.c)(te(oe(e))))(D.a);
			var ce = e => a.a.createElement(ie, ne({}, e, {
					itemComponent: ae
				})),
				de = r("./src/reddit/components/ProfileNavMenu/index.tsx"),
				me = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				le = r("./src/reddit/helpers/trackers/screenview.ts"),
				pe = r("./src/reddit/layout/page/Listing/index.tsx"),
				ue = r("./src/reddit/models/ContentGate.ts"),
				fe = r("./src/reddit/pages/ErrorPages/index.tsx"),
				be = r("./src/reddit/selectors/profile.ts");

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = Object(I.t)(),
				ge = Object(c.a)(I.B, ee.cb, (e, {
					location: t
				}) => o()([...Object(m.a)(t.search)]), I.O, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => Object(be.j)(e, {
					profileName: t.params.profileName
				}), ee.J, (e, {
					match: t
				}) => Object(ee.e)(e, d.Yb + t.params.profileName), (e, t, r, s, o, n, a, i) => {
					const {
						sort: c,
						t: d
					} = Object(u.b)(r), m = Object(l.a)(`u_${o}`, c, r);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!n && n.isNSFW,
						layout: s,
						listingKey: m,
						profileName: o,
						sort: c,
						timeSort: d
					}
				}),
				je = Object(i.b)(ge, (e, t) => ({
					onLoadMore: () => e(Object(p.moreItemsRequested)()),
					onLayoutChange: () => e(Object(p.profileCommentsRequested)({
						...t.match,
						queryParams: o()([...Object(m.a)(t.location.search)])
					}))
				}));
			t.default = ye(je(e => {
				const {
					contentGateInfo: t,
					over18Prefs: r,
					isOwnProfile: s,
					isProfileNSFW: o,
					listingKey: n,
					onLoadMore: i,
					onLayoutChange: c,
					pageLayer: m,
					profileName: l,
					sort: p,
					timeSort: u
				} = e;
				if (!l || !m) return null;
				if (t && t.profileDeleted) return a.a.createElement(f.default, {
					contentGateType: ue.a.ProfileDeleted,
					profileName: l
				});
				if (t && t.profileSuspended) return a.a.createElement(f.default, {
					contentGateType: ue.a.ProfileSuspended,
					profileName: l
				});
				if (451 === m.status || t && t.profileBlockedForLegalReason) return a.a.createElement(f.default, {
					contentGateType: ue.a.ProfileBlockedForLegalReason,
					profileName: l
				});
				if (403 === m.status) return a.a.createElement(fe.a, null);
				if (404 === m.status) return a.a.createElement(f.default, {
					contentGateType: ue.a.ProfileDoesNotExist,
					profileName: l
				});
				const g = l.toLowerCase(),
					j = `/user/${l}/comments/`,
					x = {
						listingKey: n,
						listingName: g
					};
				if (!r && o && !s) return a.a.createElement(f.default, {
					contentGateType: ue.a.Nsfw,
					subredditName: l
				});
				const C = {
					sort: p,
					baseUrl: j,
					sortOptions: d.vb,
					timeSort: u
				};
				return a.a.createElement(pe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
						profileName: l
					})),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, C), a.a.createElement(y.a, null), a.a.createElement(ce, {
						listingKey: n,
						listingName: g,
						listingViewed: (e, t) => Object(le.o)(n, p, t, e, u),
						noPostsComponent: () => a.a.createElement(b.b, {
							profileName: l,
							timeSort: u
						}),
						onLoadMore: i,
						onTryAgain: c,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(me.a, Oe({}, x, {
						profileName: l
					}))
				})
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.fc214d888c56ec01c9c4.js.map