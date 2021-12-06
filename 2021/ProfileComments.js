// https://www.redditstatic.com/desktop2x/ProfileComments.ddc20d93763c5ba7368c.js
// Retrieved at 12/6/2021, 1:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "profileCommentsPending", (function() {
				return F
			})), r.d(t, "profileCommentsLoaded", (function() {
				return A
			})), r.d(t, "profileCommentsFailed", (function() {
				return B
			})), r.d(t, "profileCommentsRequested", (function() {
				return q
			})), r.d(t, "moreItemsPending", (function() {
				return D
			})), r.d(t, "moreItemsLoaded", (function() {
				return K
			})), r.d(t, "moreItemsFailed", (function() {
				return M
			})), r.d(t, "moreItemsRequested", (function() {
				return R
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
				g = r("./src/reddit/constants/parameters.ts"),
				j = r("./src/reddit/contexts/PageLayer/index.tsx"),
				x = r("./src/config.ts"),
				y = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				C = r("./src/lib/constants/index.ts"),
				P = r("./src/lib/makeApiRequest/index.ts"),
				w = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				h = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				L = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const N = (e, t, r, s) => {
				let o = Object(w.a)(Object(y.a)(Object(L.a)(Object(v.a)(`${x.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return s && (o = Object(h.a)(o)), Object(P.a)(e, {
					data: r,
					endpoint: o,
					method: C.jb.GET
				})
			};
			var I = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				E = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				k = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				_ = r("./src/reddit/selectors/profile.ts"),
				S = r("./src/reddit/selectors/profileComments.ts"),
				T = r("./src/reddit/actions/pages/profileComments/constants.ts");
			const F = Object(i.a)(T.f),
				A = Object(i.a)(T.e),
				B = Object(i.a)(T.d),
				q = e => async (t, r, s) => {
					const {
						queryParams: o,
						params: n
					} = e, {
						sort: i,
						t: j
					} = Object(p.b)(o), {
						profileName: x
					} = n, y = Object(c.a)(`u_${x}`, i, e.queryParams), {
						profileCommentsPage: C
					} = r(), P = C.commentIds[y], w = C.api.error[y], h = C.api.pending[y];
					if (await t(f.d(x)), h || P && !w) {
						if (P) {
							const e = Object(_.q)(r(), {
								profileName: x
							});
							t(u.m({
								title: e
							}))
						}
						return
					}
					const L = {
						...a()(e.queryParams, [...g.l, g.h]),
						sort: i,
						t: Object(I.a)(i, j)
					};
					t(F({
						key: y
					}));
					const v = await Object(E.a)("profileComments", () => N(s.apiContext(), x, L, Object(k.a)(r())));
					if (!v.ok) return t(B({
						account: v.body.data ? v.body.data.account : null,
						error: v.body.reason ? {
							type: v.body.reason
						} : v.error,
						key: y
					})), v.body.reason === O.a.DeletedProfile && t(Object(d.p)({
						profileName: x
					})), void t(u.n(v.status));
					const S = v.body;
					t(A({
						key: y,
						meta: r().meta,
						...S
					})), await Promise.all([t(Object(p.c)(x)), t(Object(b.q)()), t(Object(l.b)()), t(m.o(x))])
				}, D = Object(i.a)(T.c), K = Object(i.a)(T.b), M = Object(i.a)(T.a), R = () => async (e, t, {
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
					} = d, f = Object(c.a)(`u_${u}`, m, i), b = Object(S.d)(s, {
						listingKey: f
					});
					if (!b) return;
					const O = Object(S.b)(s, {
							listingKey: f
						}),
						x = Object(S.c)(s, {
							listingKey: f
						}),
						y = x && x[b.token];
					if (O || y) return;
					e(D({
						key: f,
						fetchedToken: b.token
					}));
					const C = await N(r(), u, {
						after: b.token,
						dist: b.dist,
						sort: m,
						t: l,
						...a()(i, g.l),
						layout: Object(j.Q)(s, {}).toLowerCase()
					}, Object(k.a)(s));
					if (C.ok) {
						const t = Object(S.f)(s, {
								listingKey: f
							}),
							r = {
								...C.body,
								commentIds: o()(C.body.commentIds, t)
							};
						e(K({
							fetchedToken: b.token,
							key: f,
							meta: s.meta,
							...r
						}))
					} else e(M({
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
				g = r("./src/reddit/components/JumpToContent/index.tsx"),
				j = r("./src/lib/classNames/index.ts"),
				x = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				y = r("./src/lib/lessComponent.tsx"),
				C = r("./src/reddit/components/ClassicPost/index.tsx"),
				P = r("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				w = r("./src/reddit/components/OverviewCommentPost/index.tsx"),
				h = r("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				L = r("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				v = r("./src/reddit/constants/postLayout.ts"),
				N = r("./src/reddit/contexts/PageLayer/index.tsx"),
				I = r("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			const T = y.a.wrapped(C.default, "ClassicPost", _.a),
				F = y.a.wrapped(w.a, "OverviewCommentPost", _.a),
				A = Object(N.u)({
					currentProfileName: N.i,
					pageLayer: e => e
				}),
				B = Object(c.c)({
					comment: (e, {
						itemId: t
					}) => Object(E.b)(e, {
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
			var q = A(Object(i.b)(B)(e => {
				const {
					comment: t,
					itemId: r,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					layout: n,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (n === v.g.Compact) return a.a.createElement(P.a, e);
				const {
					height: d,
					width: m,
					...l
				} = e;
				return a.a.createElement(D, l, s && a.a.createElement(h.a, {
					isFirst: !0
				}, n === v.g.Large ? a.a.createElement(T, S({}, e, {
					availableWidth: m,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(F, S({}, e, {
					commentId: r,
					profileName: i
				}))), a.a.createElement(h.a, {
					isLast: o
				}, a.a.createElement(L.a, {
					commentId: r,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: r,
					profileName: i,
					showModTools: c
				})))
			}));
			const D = Object(x.a)(e => a.a.createElement("div", {
				className: Object(j.a)(_.a.backgroundMargin, {
					[_.a.isFirstInCommentList]: e.isFirstInCommentList,
					[_.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(I.e)(e)
				}
			}, e.children));
			var K = r("./src/reddit/components/ProfileItemList/index.tsx"),
				M = r("./node_modules/lodash/noop.js"),
				R = r.n(M),
				G = r("./src/reddit/actions/ads/index.ts"),
				U = r("./src/reddit/actions/comment/list.ts"),
				J = r("./src/reddit/actions/post.ts"),
				H = r("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				V = r("./src/reddit/helpers/trackers/post.ts"),
				W = r("./src/reddit/featureFlags/index.ts"),
				$ = r("./src/reddit/selectors/comments.ts"),
				X = r("./src/reddit/selectors/posts.ts"),
				Z = r("./src/reddit/selectors/profileComments.ts"),
				Y = r("./src/reddit/selectors/subreddit.ts"),
				z = r("./src/reddit/selectors/tracking.ts"),
				ee = r("./src/reddit/selectors/user.ts");
			const te = Object(N.u)(),
				re = {
					apiError: Z.a,
					apiPending: Z.b,
					currentUser: ee.k,
					measureScrollFPS: W.d.measureScrollFPS,
					layout: N.Q,
					loadMore: Z.d,
					subredditsById: Y.Y,
					viewportDataLoaded: z.a,
					commentsById: $.q,
					itemIds: Z.f,
					itemIdToPostId: Z.e,
					postsById: X.K,
					estimateItemHeight: e => (e, t, r) => {
						if (r) switch (t) {
							case v.g.Medium:
								return 174;
							case v.g.Classic:
								return 129;
							case v.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case v.g.Medium:
							case v.g.Classic:
								return 90;
							case v.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				se = Object(c.c)(re),
				oe = Object(i.b)(se, e => ({
					onBottomViewed: (t, r) => e(Object(U.c)(t, r)),
					adBrandSafetyStatusReceived: t => {
						e(G.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(J.K)(t)),
					fireAdPixelsOfType: R.a,
					trackOnPostEnteredViewport: R.a
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					postClickEventFactory: (e, t) => Object(V.h)(e, t),
					postComponentForLayout: Q.b
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
			const ae = e => a.a.createElement(q, ne({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(H.c)(te(oe(e))))(K.a);
			var ce = e => a.a.createElement(ie, ne({}, e, {
					itemComponent: ae
				})),
				de = r("./src/reddit/components/ProfileNavMenu/index.tsx"),
				me = r("./src/reddit/components/ProfileSidebar/index.tsx"),
				le = r("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				pe = r("./src/reddit/helpers/name/index.ts"),
				ue = r("./src/reddit/helpers/trackers/screenview.ts"),
				fe = r("./src/reddit/layout/page/Listing/index.tsx"),
				be = r("./src/reddit/models/ContentGate.ts"),
				Oe = r("./src/reddit/pages/ErrorPages/index.tsx"),
				ge = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				je = r("./src/reddit/selectors/profile.ts");

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = Object(N.u)(),
				Ce = Object(c.a)(N.D, ee.eb, (e, {
					location: t
				}) => o()([...Object(m.a)(t.search)]), N.Q, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => Object(je.j)(e, {
					profileName: t.params.profileName
				}), ee.K, (e, {
					match: t
				}) => Object(ee.f)(e, d.hc + t.params.profileName), ge.a, (e, t, r, s, o, n, a, i, c) => {
					const {
						sort: d,
						t: m
					} = Object(u.b)(r), p = Object(l.a)(`u_${o}`, d, r);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!n && n.isNSFW,
						layout: s,
						listingKey: p,
						profileName: o,
						sort: d,
						timeSort: m,
						isEligibleForNsfwSignupUpsellTreatment: c
					}
				}),
				Pe = Object(i.b)(Ce, (e, t) => ({
					onLoadMore: () => e(Object(p.moreItemsRequested)()),
					onLayoutChange: () => e(Object(p.profileCommentsRequested)({
						...t.match,
						queryParams: o()([...Object(m.a)(t.location.search)])
					}))
				}));
			t.default = ye(Pe(e => {
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
					timeSort: u,
					isEligibleForNsfwSignupUpsellTreatment: j
				} = e;
				if (!l || !m) return null;
				if (t && t.profileDeleted) return a.a.createElement(f.default, {
					contentGateType: be.a.ProfileDeleted,
					profileName: l
				});
				if (t && t.profileSuspended) return a.a.createElement(f.default, {
					contentGateType: be.a.ProfileSuspended,
					profileName: l
				});
				if (451 === m.status || t && t.profileBlockedForLegalReason) return a.a.createElement(f.default, {
					contentGateType: be.a.ProfileBlockedForLegalReason,
					profileName: l
				});
				if (403 === m.status) return a.a.createElement(Oe.a, null);
				if (404 === m.status) return a.a.createElement(f.default, {
					contentGateType: be.a.ProfileDoesNotExist,
					profileName: l
				});
				const x = l.toLowerCase(),
					y = `/user/${l}/comments/`,
					C = {
						listingKey: n,
						listingName: x
					};
				if (o && !s && j) return a.a.createElement(le.a, {
					contentTitle: Object(pe.d)(l)
				});
				if (!r && o && !s) return a.a.createElement(f.default, {
					contentGateType: be.a.Nsfw,
					subredditName: l
				});
				const P = {
					sort: p,
					baseUrl: y,
					sortOptions: d.Db,
					timeSort: u
				};
				return a.a.createElement(fe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
						profileName: l
					})),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, P), a.a.createElement(g.a, null), a.a.createElement(ce, {
						listingKey: n,
						listingName: x,
						listingViewed: (e, t) => Object(ue.o)(n, p, t, e, u),
						noPostsComponent: () => a.a.createElement(b.b, {
							profileName: l,
							timeSort: u
						}),
						onLoadMore: i,
						onTryAgain: c,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(me.a, xe({}, C, {
						profileName: l
					}))
				})
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.ddc20d93763c5ba7368c.js.map