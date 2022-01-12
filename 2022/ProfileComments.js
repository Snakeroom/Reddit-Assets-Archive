// https://www.redditstatic.com/desktop2x/ProfileComments.5b4a78925b4cd1bcfced.js
// Retrieved at 1/12/2022, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments"], {
		"./src/reddit/actions/pages/profileComments/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "profileCommentsPending", (function() {
				return F
			})), s.d(t, "profileCommentsLoaded", (function() {
				return A
			})), s.d(t, "profileCommentsFailed", (function() {
				return B
			})), s.d(t, "profileCommentsRequested", (function() {
				return R
			})), s.d(t, "moreItemsPending", (function() {
				return q
			})), s.d(t, "moreItemsLoaded", (function() {
				return M
			})), s.d(t, "moreItemsFailed", (function() {
				return D
			})), s.d(t, "moreItemsRequested", (function() {
				return K
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
				g = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/config.ts"),
				y = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				w = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				h = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				L = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				v = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const N = (e, t, s, r) => {
				let o = Object(w.a)(Object(y.a)(Object(L.a)(Object(v.a)(`${x.a.gatewayUrl}/desktopapi/v1/user/${t}/comments`))));
				return r && (o = Object(h.a)(o)), Object(P.a)(e, {
					data: s,
					endpoint: o,
					method: C.jb.GET
				})
			};
			var I = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				E = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				k = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				_ = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/profileComments.ts"),
				T = s("./src/reddit/actions/pages/profileComments/constants.ts");
			const F = Object(i.a)(T.f),
				A = Object(i.a)(T.e),
				B = Object(i.a)(T.d),
				R = e => async (t, s, r) => {
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
					} = s(), P = C.commentIds[y], w = C.api.error[y], h = C.api.pending[y];
					if (await t(f.d(x)), h || P && !w) {
						if (P) {
							const e = Object(_.q)(s(), {
								profileName: x
							});
							t(u.m({
								title: e
							}))
						}
						return
					}
					const L = {
						...a()(e.queryParams, [...g.m, g.i]),
						sort: i,
						t: Object(I.a)(i, j)
					};
					t(F({
						key: y
					}));
					const v = await Object(E.a)("profileComments", () => N(r.apiContext(), x, L, Object(k.a)(s())));
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
						meta: s().meta,
						...S
					})), await Promise.all([t(Object(p.c)(x)), t(Object(b.q)()), t(Object(l.b)()), t(m.o(x))])
				}, q = Object(i.a)(T.c), M = Object(i.a)(T.b), D = Object(i.a)(T.a), K = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t(),
						{
							currentPage: n
						} = r.platform;
					if (!n || !n.routeMatch) return;
					const {
						queryParams: i,
						params: d
					} = n.routeMatch.match, {
						sort: m,
						t: l
					} = Object(p.b)(i), {
						profileName: u
					} = d, f = Object(c.a)(`u_${u}`, m, i), b = Object(S.d)(r, {
						listingKey: f
					});
					if (!b) return;
					const O = Object(S.b)(r, {
							listingKey: f
						}),
						x = Object(S.c)(r, {
							listingKey: f
						}),
						y = x && x[b.token];
					if (O || y) return;
					e(q({
						key: f,
						fetchedToken: b.token
					}));
					const C = await N(s(), u, {
						after: b.token,
						dist: b.dist,
						sort: m,
						t: l,
						...a()(i, g.m),
						layout: Object(j.R)(r, {}).toLowerCase()
					}, Object(k.a)(r));
					if (C.ok) {
						const t = Object(S.f)(r, {
								listingKey: f
							}),
							s = {
								...C.body,
								commentIds: o()(C.body.commentIds, t)
							};
						e(M({
							fetchedToken: b.token,
							key: f,
							meta: r.meta,
							...s
						}))
					} else e(D({
						account: C.body.data ? C.body.data.account : null,
						error: C.error,
						fetchedToken: b.token,
						key: f
					}))
				}
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
				p = s("./src/reddit/actions/pages/profileComments/index.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				f = s("./src/reddit/components/ContentGate/index.tsx"),
				b = s("./src/reddit/components/EmptyProfile/index.ts"),
				O = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				g = s("./src/reddit/components/JumpToContent/index.tsx"),
				j = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				y = s("./src/lib/lessComponent.tsx"),
				C = s("./src/reddit/components/ClassicPost/index.tsx"),
				P = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				w = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				h = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				L = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				v = s("./src/reddit/constants/postLayout.ts"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				E = s("./src/reddit/selectors/commentSelector.ts"),
				k = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				_ = s.n(k);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
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
								users: s
							} = e, r = t.toLowerCase(), o = s.models[r];
							return o ? o.username : void 0
						})(e, t)
					}
				});
			var R = A(Object(i.b)(B)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: r,
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
				return a.a.createElement(q, l, r && a.a.createElement(h.a, {
					isFirst: !0
				}, n === v.g.Large ? a.a.createElement(T, S({}, e, {
					availableWidth: m,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(F, S({}, e, {
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
			const q = Object(x.a)(e => a.a.createElement("div", {
				className: Object(j.a)(_.a.backgroundMargin, {
					[_.a.isFirstInCommentList]: e.isFirstInCommentList,
					[_.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(I.e)(e)
				}
			}, e.children));
			var M = s("./src/reddit/components/ProfileItemList/index.tsx"),
				D = s("./node_modules/lodash/noop.js"),
				K = s.n(D),
				G = s("./src/reddit/actions/ads/index.ts"),
				J = s("./src/reddit/actions/comment/list.ts"),
				U = s("./src/reddit/actions/post.ts"),
				H = s("./src/reddit/components/TrackingHelper/index.tsx"),
				V = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				W = s("./src/reddit/helpers/trackers/post.ts"),
				$ = s("./src/reddit/featureFlags/index.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				Z = s("./src/reddit/selectors/profileComments.ts"),
				Y = s("./src/reddit/selectors/subreddit.ts"),
				z = s("./src/reddit/selectors/tracking.ts"),
				ee = s("./src/reddit/selectors/user.ts");
			const te = Object(N.u)(),
				se = {
					apiError: Z.a,
					apiPending: Z.b,
					currentUser: ee.k,
					measureScrollFPS: $.d.measureScrollFPS,
					layout: N.R,
					loadMore: Z.d,
					subredditsById: Y.Y,
					viewportDataLoaded: z.a,
					commentsById: Q.q,
					itemIds: Z.f,
					itemIdToPostId: Z.e,
					postsById: X.K,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
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
				re = Object(c.c)(se),
				oe = Object(i.b)(re, e => ({
					onBottomViewed: (t, s) => e(Object(J.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(G.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(U.L)(t)),
					fireAdPixelsOfType: K.a,
					trackOnPostEnteredViewport: K.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(W.h)(e, t),
					postComponentForLayout: V.b
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
			const ae = e => a.a.createElement(R, ne({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(H.c)(te(oe(e))))(M.a);
			var ce = e => a.a.createElement(ie, ne({}, e, {
					itemComponent: ae
				})),
				de = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				me = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				le = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				pe = s("./src/reddit/helpers/name/index.ts"),
				ue = s("./src/reddit/helpers/trackers/screenview.ts"),
				fe = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				be = s("./src/reddit/layout/page/Listing/index.tsx"),
				Oe = s("./src/reddit/models/ContentGate.ts"),
				ge = s("./src/reddit/pages/ErrorPages/index.tsx"),
				je = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
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
			const Ce = Object(N.u)(),
				Pe = Object(c.a)(N.E, ee.db, (e, {
					location: t
				}) => o()([...Object(m.a)(t.search)]), N.R, (e, {
					match: t
				}) => t.params.profileName, (e, {
					match: t
				}) => Object(xe.j)(e, {
					profileName: t.params.profileName
				}), ee.J, (e, {
					match: t
				}) => Object(ee.f)(e, d.ic + t.params.profileName), je.a, (e, t, s, r, o, n, a, i, c) => {
					const {
						sort: d,
						t: m
					} = Object(u.b)(s), p = Object(l.a)(`u_${o}`, d, s);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!n && n.isNSFW,
						layout: r,
						listingKey: p,
						profileName: o,
						sort: d,
						timeSort: m,
						isEligibleForNsfwSignupUpsellTreatment: c
					}
				}),
				we = Object(i.b)(Pe, (e, t) => ({
					onLoadMore: () => e(Object(p.moreItemsRequested)()),
					onLayoutChange: () => e(Object(p.profileCommentsRequested)({
						...t.match,
						queryParams: o()([...Object(m.a)(t.location.search)])
					}))
				}));
			t.default = Ce(we(Object(fe.d)(e => {
				const {
					contentGateInfo: t,
					over18Prefs: s,
					isOwnProfile: r,
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
					contentGateType: Oe.a.ProfileDeleted,
					profileName: l
				});
				if (t && t.profileSuspended) return a.a.createElement(f.default, {
					contentGateType: Oe.a.ProfileSuspended,
					profileName: l
				});
				if (451 === m.status || t && t.profileBlockedForLegalReason) return a.a.createElement(f.default, {
					contentGateType: Oe.a.ProfileBlockedForLegalReason,
					profileName: l
				});
				if (403 === m.status) return a.a.createElement(ge.a, null);
				if (404 === m.status) return a.a.createElement(f.default, {
					contentGateType: Oe.a.ProfileDoesNotExist,
					profileName: l
				});
				const x = l.toLowerCase(),
					y = `/user/${l}/comments/`,
					C = {
						listingKey: n,
						listingName: x
					};
				if (o && !r && j) return a.a.createElement(le.a, {
					contentTitle: Object(pe.d)(l)
				});
				if (!s && o && !r) return a.a.createElement(f.default, {
					contentGateType: Oe.a.Nsfw,
					subredditName: l
				});
				const P = {
					sort: p,
					baseUrl: y,
					sortOptions: d.Db,
					timeSort: u
				};
				return a.a.createElement(be.a, {
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
					sidebar: a.a.createElement(me.a, ye({}, C, {
						profileName: l
					}))
				})
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.5b4a78925b4cd1bcfced.js.map