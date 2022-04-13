// https://www.redditstatic.com/desktop2x/CommentsPage.9864cc667a31013e7e9b.js
// Retrieved at 4/13/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				o = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = o
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				let s = `linkedPosts--[post:'${e}']`;
				return t && (s += "--fallback"), s
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `nsfwLinkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				return window
			}
			var r = s("./node_modules/lodash/debounce.js"),
				i = s.n(r),
				a = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				l = s("./src/reddit/constants/promo.ts"),
				m = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var p = function() {
					const e = Object(m.a)(d.ic.Bottom_cell),
						t = Object(m.a)(d.ic.Bottom_cell_dismissible),
						s = Object(m.a)(d.ic.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.ic.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(d.ic.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.ic.Bottom_sheet);
					return e || n || o ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				u = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const b = 250,
				h = 1e3;

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function x(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
						const {
							showPromo: t
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.ic.Bottom_cell_dismissible_immediate_trigger);
						return n.useMemo(() => i()(() => {
							if (!r && s) {
								const e = document.getElementById(a.d),
									n = e ? e.scrollTop : o().scrollY,
									r = o().innerHeight,
									i = r / 3,
									d = 2 * r;
								n >= (l ? i : d) && t(s)
							}
						}, e, {
							maxWait: h
						}), [l, r, s, t, e])
					}();
					return n.createElement(e, g({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/domUtils/index.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/components/CommentSort/index.tsx"),
				i = s("./src/reddit/constants/elementIds.ts");
			const a = () => {
					o.a.write(() => {
						const e = document.getElementById(i.d);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				d = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(i.d) : window,
							s = document.getElementById(r.a);
						if (t && s) {
							const n = e ? s.offsetTop : s.offsetTop - 50;
							o.a.write(() => t.scrollTo({
								top: n,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/categories/index.ts"),
				r = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
				i = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/constants/experiments.ts");
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var p = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(n.a)({
				features: {
					categories: o.a
				}
			});
			const h = Object(r.a)(b.c),
				g = Object(r.a)(b.b),
				x = Object(r.a)(b.a),
				f = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const o = t(),
						r = Object(u.h)(o),
						p = Object(u.g)(o);
					if (r || p) return;
					e(h());
					const b = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: a.jb.GET
					}))(n());
					if (b.ok) {
						const {
							categories: t,
							categoryIds: s
						} = (e => {
							const t = {},
								s = [];
							return e.forEach((e, n) => {
								const o = {
									attr: e.category_attr,
									color: e.category_color || i.a[n % i.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(m.Df)(e.category_name)
								};
								s.push(o.id), t[o.id] = o
							}), {
								categories: t,
								categoryIds: s
							}
						})(b.body);
						e(g({
							categories: t,
							categoryIds: s
						}))
					} else e(x(b.error))
				}, C = (Object(r.a)(b.g), Object(r.a)(b.f), Object(r.a)(b.e), Object(r.a)(b.d)), v = e => async (t, s) => {
					const n = Object(u.j)(s(), {
						id: e
					});
					t(C({
						categoryId: e,
						rank: n + 1
					})), Object(p.lb)(Object(u.d)(s()))
				}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(n.a)(o.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return _
			}));
			var n, o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(o.a)(i.g),
				g = Object(o.a)(i.e),
				x = Object(o.a)(i.h),
				f = Object(o.a)(i.c),
				C = Object(o.a)(i.f),
				v = Object(o.a)(i.j),
				O = Object(o.a)(i.i),
				E = () => async (e, t, s) => {
					let {
						gqlContext: o
					} = s;
					const r = t(),
						i = Object(p.e)(r),
						c = Object(p.d)(r),
						u = Object(b.P)(r);
					if (i || !c) return;
					e(x());
					let C = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(o(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (y(t)) {
								if (j(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), C = !0
								} else if (k(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: o,
											category: r
										} = s.focusRecommendations[0],
										i = [n, o],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(n),
										p = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [o.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(h(p)), C = !0
								}
							} else C = !1
						}
					} catch (v) {
						C = !1
					}
					C || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, y = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !j(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, _ = () => async (e, t, s) => {
					var n, o;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (o = null === (n = Object(u.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							a = Object(b.Q)(i);
						return Object(r.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(C({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/otherDiscussions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/OtherDiscussions.json"),
				d = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const c = Object(n.a)(r.a),
				l = Object(n.a)(r.b),
				m = Object(n.a)(r.c),
				p = (e, t) => async (s, n, r) => {
					let {
						gqlContext: p
					} = r;
					const u = n(),
						b = Object(o.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = u.listings.postOrder.ids[b],
						g = !!u.listings.postOrder.api.error[b];
					if (h && !g) return;
					s(m({
						key: b
					}));
					const x = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(p(), t);
					Object(d.a)({
						getState: n,
						onFailure: e => s(c(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: x
					})
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return lt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return mt
			})), s.d(t, "commentsPagePending", (function() {
				return pt
			})), s.d(t, "commentsPageLoaded", (function() {
				return ut
			})), s.d(t, "commentsPageFailed", (function() {
				return bt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return ht
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return gt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return xt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return ft
			})), s.d(t, "commentsPageRequested", (function() {
				return Ct
			})), s.d(t, "commentsPageDataRequested", (function() {
				return vt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Ot
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Et
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/autosubscribeLinks/index.tsx"),
				r = s("./src/reddit/actions/category/index.ts"),
				i = s("./src/reddit/actions/discoveryUnit.ts"),
				a = s("./src/reddit/actions/pages/subreddit.ts"),
				d = s("./src/reddit/actions/shortcuts/active.ts"),
				c = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				l = s("./src/reddit/actions/subredditSettings.ts"),
				m = s("./src/reddit/endpoints/governance/posts.ts"),
				p = s("./src/reddit/endpoints/page/commentsPage.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function h(e, t) {
				return Object(u.a)(e, {
					...b,
					variables: t
				})
			}
			var g = s("./src/reddit/endpoints/page/subredditPage.ts"),
				x = s("./src/reddit/endpoints/profile/info.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/pageTitle/index.ts"),
				O = s("./src/reddit/actions/economics/helpers/async.ts"),
				E = s("./src/reddit/actions/externalAccount.ts"),
				y = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				j = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				k = s("./src/reddit/actions/platform.ts"),
				_ = s("./src/reddit/actions/post.ts"),
				I = s("./src/reddit/actions/profile/index.ts"),
				P = s("./src/reddit/actions/subreddit.ts"),
				w = s("./src/reddit/actions/subreddit/questions.ts"),
				S = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/constants/adEvents.ts"),
				L = s("./src/reddit/constants/graphql.ts"),
				T = s("./src/reddit/constants/parameters.ts"),
				M = s("./src/reddit/constants/posts.ts"),
				R = s("./src/reddit/helpers/commentList/index.ts"),
				F = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				A = s("./src/reddit/models/Comment/index.ts"),
				B = s("./src/reddit/models/Media/index.ts"),
				D = s("./src/reddit/models/Subreddit/index.ts"),
				U = s("./src/reddit/models/User/index.ts"),
				V = s("./src/reddit/selectors/category.ts"),
				W = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				H = s("./src/reddit/selectors/experiments/postSeo.ts"),
				q = s("./node_modules/reselect/es/index.js"),
				G = s("./src/reddit/constants/experiments.ts"),
				K = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Q = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				Y = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				z = s("./src/reddit/selectors/platform.ts"),
				J = s("./node_modules/fbt/lib/FbtPublic.js"),
				X = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Z = s("./src/reddit/selectors/user.ts");
			const $ = new Set([f.g.AntiEvilOps, f.g.AutomodFiltered, f.g.CommunityOps, f.g.ContentTakedown, f.g.CopyrightTakedown, f.g.Moderator, f.g.Reddit]),
				ee = new Set([f.g.Author, f.g.AuthorDeleted]),
				te = Object(q.a)(Q.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return $.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = J.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let n = Object(X.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== B.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				se = Object(q.a)(Q.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return ee.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = J.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let n = Object(X.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== B.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				ne = Object(q.a)(Z.k, Q.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				oe = Object(q.a)(z.f, Q.a, te, se, Y.a, ne, Y.b, (e, t, s, n, o, r, i) => {
					if (!e || !t || o) return !1;
					if (n) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var re = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ie = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ae = s("./src/reddit/selectors/posts.ts"),
				de = s("./src/reddit/selectors/subreddit.ts"),
				ce = s("./src/lib/makeActionCreator/index.ts"),
				le = s("./src/lib/makeCommentsPageKey/index.ts"),
				me = s("./src/reddit/actions/ads/index.ts"),
				pe = s("./src/reddit/helpers/canonicalUrls.ts"),
				ue = s("./src/reddit/helpers/correlationIdTracker.ts"),
				be = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				he = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ge = s("./src/lib/performanceTimings/index.tsx"),
				xe = s("./src/reddit/actions/gold/powerups.ts"),
				fe = s("./src/lib/makeListingKey/index.ts"),
				Ce = s("./src/reddit/actions/googleQASchema/constants.ts");
			const ve = Object(ce.a)(Ce.b),
				Oe = Object(ce.a)(Ce.a);
			var Ee = s("./src/reddit/actions/linkedPosts/constants.ts");
			const ye = Object(ce.a)(Ee.a),
				je = Object(ce.a)(Ee.c),
				ke = Object(ce.a)(Ee.b);
			var _e = s("./src/reddit/actions/otherDiscussions/index.ts"),
				Ie = s("./src/reddit/actions/subreddit/constants.ts"),
				Pe = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var we = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						s({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (i) {
						n(i)
					}
				},
				Se = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Ne = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Le = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Te = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!r || !r.linked) return;
						const a = t(),
							d = a.posts && a.posts.models,
							c = Object(Se.a)(o),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ne.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(f.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Le.a)(e)
							}
						}
						s({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				Me = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Re = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Fe = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Ae = e => {
					let {
						isLinkedPostsFallback: t,
						getState: s,
						onSuccess: n,
						onFailure: o,
						options: r,
						postId: i,
						subreddit: a
					} = e;
					try {
						if (!a) return;
						const e = a.elements || a.posts,
							o = s(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(e, o.posts && o.posts.models),
							c = Object(Re.a)(d),
							l = Fe(c),
							m = e.edges.reduce((e, t) => (t.node.id && t.node.id !== i && e.push(t.node.id), e), []),
							{
								range: p,
								sort: u,
								subredditName: b
							} = r,
							h = t && i ? Object(Se.a)(i, !0) : Object(fe.a)(b, C.W[u], {
								t: p
							});
						n({
							dist: e.dist,
							key: h,
							meta: o.meta,
							postIds: m,
							posts: l
						})
					} catch (d) {
						o(d)
					}
				},
				Be = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				De = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Ue = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!r || !r.nsfwLinked) return;
						const a = t(),
							d = a.posts && a.posts.models,
							c = Object(De.a)(o),
							l = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ne.a)(t);
								n[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(f.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Le.a)(e)
							}
						}
						s({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				Ve = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const We = Object(ce.a)(Ve.b),
				He = Object(ce.a)(Ve.a);
			var qe = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ge = Object(ce.a)(qe.b),
				Ke = Object(ce.a)(qe.a),
				Qe = Object(ce.a)(Ie.j),
				Ye = Object(ce.a)(Ie.i),
				ze = (Object(ce.a)(Ie.r), Object(ce.a)(Ie.q), e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r, i, a, d;
					const {
						includeNSFWListingBelowExperiment: c,
						includeListingBelowExperiment: l,
						includeOtherDiscussions: m,
						includePostFeed: p,
						includePostQASchemaEligibilityFlag: b,
						listingBelowExperimentVariant: h,
						postId: g,
						range: x,
						sort: f,
						subredditName: v
					} = e, O = Object(fe.a)(g, null, {
						isOtherDiscussions: !0
					}), E = s(), y = Object(ae.z)(E, {
						listingKey: O
					}), j = m && (!y || 0 === y.length), k = Object(fe.a)(v, C.W[f], {
						t: x
					}), _ = Object(ae.z)(E, {
						listingKey: k
					}), I = p && (l || !_ || 0 === _.length), P = l, w = c, S = Object(ae.G)(E, {
						postId: g
					}), N = !!S && !!S.media && (Object(B.K)(S.media) || Object(B.F)(S.media)) && !S.media.altText;
					if (!(j || I || P || w || N || b)) return;
					j && t(Object(_e.d)({
						key: O
					}));
					const L = await ((e, t) => Object(u.a)(e, {
							...Pe,
							variables: t
						}))(o(), e),
						T = L.body,
						M = Object(Be.a)(h),
						R = P && !!(null === (a = null === (i = null === (r = T.data) || void 0 === r ? void 0 : r.post) || void 0 === i ? void 0 : i.linked) || void 0 === a ? void 0 : a.isEligible),
						F = P && (M || !R);
					b && (L.ok ? T.data && T.data.post && t(ve({
						postId: g,
						isEligibleForQASchema: null !== (d = T.data.post.isEligibleForQASchema) && void 0 !== d && d
					})) : t(Oe())), j && Object(Me.a)({
						getState: s,
						onFailure: e => t(Object(_e.b)(e)),
						onSuccess: e => t(Object(_e.c)(e)),
						postId: g,
						response: L
					}), (I && !P || F) && (L.ok ? T.data && Ae({
						getState: s,
						isLinkedPostsFallback: F,
						onFailure: e => t(Ye(e)),
						onSuccess: e => t(Qe(e)),
						options: e,
						postId: g,
						subreddit: T.data.subreddit
					}) : t(Ye(L.error))), P && R && !M && L.ok && T.data && Te({
						getState: s,
						onFailure: e => t(ke(e)),
						onSuccess: e => t(je(e)),
						postId: g,
						post: T.data.post
					}), w && L.ok && Ue({
						getState: s,
						onFailure: e => t(Ke(e)),
						onSuccess: e => t(Ge(e)),
						postId: g,
						post: T.data.post
					}), N && L.ok && T.data && we({
						getState: s,
						onFailure: e => t(He(e)),
						onSuccess: e => t(We(e)),
						postId: g,
						post: T.data.post
					}), P && t(ye({
						postId: g,
						isEligibleForLinkedPosts: R
					}))
				}),
				Je = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						o = n && Object(f.t)(n),
						{
							sortToUse: r
						} = Object(F.a)(e, o);
					return (!r || r === C.u.CONFIDENCE) && Object(K.c)(e, {
						experimentEligibilitySelector: () => Object(Z.P)(e),
						experimentName: G.C
					}) === G.E.Enabled
				};
			var Xe = s("./src/reddit/selectors/chatPost.ts"),
				Ze = s("./src/reddit/selectors/seo/index.ts"),
				$e = s("./src/reddit/actions/pages/constants.ts"),
				et = s("./src/lib/initializeClient/installReducer.ts"),
				tt = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				st = s("./src/reddit/reducers/pages/comments/index.ts"),
				nt = s("./src/reddit/selectors/experiments/autosubscribeLinks.ts"),
				ot = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				rt = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				it = s("./src/reddit/selectors/i18n/index.ts"),
				at = s("./src/reddit/helpers/locales.ts"),
				dt = s("./src/reddit/selectors/experiments/countrySites.ts"),
				ct = s("./src/reddit/selectors/meta.ts");
			Object(et.a)({
				pages: {
					comments: st.a
				}
			}), Object(et.a)({
				features: {
					modUserNotes: tt.a
				}
			});
			const lt = 25,
				mt = 100,
				pt = Object(ce.a)($e.h),
				ut = Object(ce.a)($e.f),
				bt = Object(ce.a)($e.e),
				ht = Object(ce.a)($e.i),
				gt = (e, t, s) => {
					const n = !e,
						o = Object(ae.G)(t, {
							postId: s
						}).belongsTo,
						r = Object(de.K)(t, {
							identifier: o
						}),
						i = Object(Ze.c)(t, {
							identifier: o
						}),
						a = !!Object(Be.c)(t),
						d = Object(it.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || n, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || n) && (!Object(D.h)(r) && !Object(Xe.d)(t, {
						postId: s
					}) && !!r || !Object(z.i)(t) && Object(H.e)(t)), e && (c.postQASchema = Object(H.d)(t)), c
				},
				xt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				ft = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				Ct = e => async (t, s) => {
					var i, a;
					const {
						partialPostId: l,
						partialCommentId: m
					} = e.params, {
						subredditName: p
					} = e.params || "", u = l ? Object(f.t)(l) : "", b = m && Object(A.h)(m), {
						path: h,
						queryParams: g
					} = e, x = Object(j.d)(h), {
						instanceId: O
					} = g, {
						hasSortParam: y,
						sortToUse: S
					} = Object(F.a)(s(), u), N = null === (a = null === (i = Object(z.b)(s())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk, R = ["context", "depth", "limit", T.g].reduce((e, t) => {
						const s = parseInt(g[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: p,
						hasSortParam: y,
						instanceId: O,
						include_categories: !0
					});
					y && (R.sort = S), R.onOtherDiscussions = x, t(_.r(u)), Object(nt.a)(s()) && t(Object(o.a)(e.queryParams, p)), await t(vt(u, b, R, S));
					const D = s().posts.models[u],
						U = Object(Z.Q)(s());
					if (D && "subreddit" === D.belongsTo.type) {
						const e = D.belongsTo.id,
							n = Object(ge.i)(() => t(Object(xe.m)(e, {
								fullData: !0,
								includeIdentity: U
							})), {
								name: "subredditPowerupsRequested",
								page: N,
								isLoggedIn: U
							});
						await n;
						const o = s();
						if (!Object(z.i)(o)) {
							Object(ot.a)(o) && t(Object(w.b)(e))
						}
						Object(ie.i)(o, e) && await t(Object(c.c)(u))
					}
					if (D) {
						const o = ((e, t) => {
								const s = Object(ae.U)(e, {
										postId: t
									}),
									n = Object(ae.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), u),
							i = Object(de.K)(s(), {
								identifier: D.belongsTo
							});
						if (i && (e => G.Se.Redirect === Object(K.b)(e, {
								experimentEligibilitySelector: oe,
								experimentName: G.Le
							}))(s())) return void t(Object(n.c)(i.url));
						if ((D.media && D.media.type) === B.o.LIVEVIDEO) {
							const e = `/rpan${D.belongsTo.type===M.a.SUBREDDIT?i.url:"/"}${Object(f.u)(D.id)}`;
							return void t(Object(n.c)(e))
						}
						if (D.belongsTo.type !== M.a.SUBREDDIT || D.isSponsored) {
							if (D.belongsTo.type === M.a.PROFILE) {
								const e = Object(ge.i)(() => t(I.d(i.name)), {
									name: "getProfileInfo",
									page: N,
									isLoggedIn: U
								});
								await e
							}
						} else {
							if (!!!Object(de.R)(s(), {
									subredditId: D.belongsTo.id
								})) {
								const e = Object(ge.i)(() => t(P.o(i.name)), {
									name: "getSubredditRules",
									page: N,
									isLoggedIn: U
								});
								await e
							}
						}
						const a = gt(!1, s(), u),
							c = x;
						if (xt(c, a)) {
							Object(ue.e)(ue.a.LinkedPosts);
							const e = Object(ue.c)(ue.a.LinkedPosts);
							Object(ue.e)(ue.a.NsfwLinkedPosts);
							const n = Object(ue.c)(ue.a.NsfwLinkedPosts),
								o = {
									adContext: {
										layout: L.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: u
									},
									range: C.hc.WEEK.toUpperCase(),
									sort: C.P.TOP,
									subredditName: i.name
								},
								r = {
									postId: u
								},
								d = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Be.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(rt.a)(s())
								},
								m = ft(a);
							Object(ge.i)(() => t(ze({
								...r,
								...o,
								...d,
								...l,
								...m,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: U,
								page: N
							});
							0
						}
						t(Object(E.p)()), t(k.m({
							title: o
						}));
						const l = s().posts.instances[u] ? e.queryParams.instanceId : D.postId;
						t(Object(d.b)(l)); {
							const e = Object(V.c)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(r.b(e))))
						}
					} else t(k.m({
						title: v.e()
					}));
					const {
						routePrefix: W
					} = e.params;
					M.b[W] === M.a.PROFILE ? Object(pe.d)(s(), t, e) : Object(pe.b)(s(), t, e)
				}, vt = (e, t, s, n) => async (o, r, d) => {
					var c, l;
					const u = r(),
						b = Object(le.a)(e, t, s),
						{
							subredditName: f
						} = s,
						v = u.pages.comments.keyToHeadCommentId.hasOwnProperty(b),
						E = u.pages.comments.api.fullyLoaded[b],
						j = u.pages.comments.api.error[b],
						I = u.pages.comments.api.pending[b],
						P = !Object(Z.P)(u),
						w = Object(Z.k)(u),
						L = n === C.u.CHAT,
						T = !!u.platform.lastPage;
					if ((I || v && !j) && !(L && T)) {
						if (v && !u.sidebarPromotedPosts.firstFetch) {
							const e = Object(z.i)(u) ? he.a.COMMENTS_OVERLAY : he.a.COMMENTS;
							window.addEventListener("load", () => {
								o(Object(me.b)(e))
							})
						}
						return void(E || o(Et(e, t, s)))
					}
					o(i.g());
					const M = u.user.prefs.commentMode;
					o(pt({
						key: b,
						postId: e,
						commentMode: M
					}));
					const F = {
						...s,
						...L ? {
							sort: C.u.LIVE
						} : P ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(ae.G)(r(), {
							postId: e
						});
						t && t.numComments && t.numComments > mt && (F.truncate = lt)
					}
					const A = null === (l = null === (c = Object(z.b)(u)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
						B = Object(ge.i)(() => Object(p.a)(d.apiContext(), e, t, F, Object(W.a)(r()), Je(r())), {
							name: "fetchCommentsPage",
							isLoggedIn: !P,
							page: A
						}),
						D = !P && w && Object(ge.i)(() => Object(x.d)(d.gqlContext(), Object(U.e)(w)), {
							name: "fetchProfileKarma",
							isLoggedIn: !P,
							page: A
						}) || null,
						V = Object(ge.i)(() => h(d.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !P,
							page: A
						}),
						[H, q, G] = await Promise.all([B, D, V]);
					let K;
					if (o(Object(k.n)(H.status)), H.ok) {
						const t = Object.keys(H.body.posts).filter(e => !!H.body.posts[e].isMeta),
							s = H.body.posts[e];
						if (t.length) {
							const e = Object(ge.i)(() => Object(m.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: A,
									isLoggedIn: !P
								}),
								n = await e;
							n.ok && (K = n.body)
						}
						if (q && q.ok) {
							const {
								data: e
							} = q.body, t = {
								karma: {
									...x.a
								}
							};
							if (Object(x.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							H.body && H.body.account && Object.assign(H.body.account, t)
						}
						if (G && G.ok) {
							const {
								data: t
							} = G.body;
							if (!t.postInfoById || "SubredditPost" !== t.postInfoById.__typename && "ProfilePost" !== t.postInfoById.__typename || (H.body.posts[e] = {
									...H.body.posts[e],
									...t.postInfoById
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(ct.d)(u) && e && Object(dt.f)(u) && await Object(at.a)(e, o)
							}
						}
						const n = Object(R.a)(H.body, e, u);
						o(ut({
							key: b,
							postId: e,
							meta: u.meta,
							governance: K,
							shouldCollapse: n,
							...H.body
						}))
					} {
						const n = Object(ae.G)(r(), {
							postId: e
						});
						n && H.body.comments && Object.keys(H.body.comments).length < n.numComments ? o(Et(e, t, s)) : H.ok && o(Ot({
							key: b
						}));
						const i = Object(z.i)(u) ? he.a.COMMENTS_OVERLAY : he.a.COMMENTS;
						o(Object(me.b)(i))
					}
					if (H.ok) {
						o(S.g(b));
						const t = Object(ae.G)(r(), {
								postId: e
							}),
							s = Object.keys(H.body.comments);
						if (o(_.z(t, N.a.CommentsView)), Object(ie.h)(r(), {
								subredditId: t.belongsTo.id
							}) && o(Object(y.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && H.body.comments) {
							const e = Object(ge.i)(() => o(Object(O.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: A,
								isLoggedIn: !P
							});
							await e
						}
					} else {
						let e;
						f && (o(Object(a.subredditPending)({
							key: b
						})), e = await Object(be.a)("subreddit", () => Object(g.a)(d.apiContext(), f, {})), o(Object(k.n)(e.status)), o(Object(a.handleSubredditPageApiError)(e, f))), o(bt({
							error: H.error,
							key: b,
							...e ? e.body : H.body
						}))
					}
				}, Ot = Object(ce.a)($e.g), Et = (e, t, s) => async (n, o, r) => {
					var i, a;
					const d = Object(le.a)(e, t, s),
						c = o(),
						m = Object(Z.Q)(c),
						u = Object(Z.k)(c),
						b = null === (a = null === (i = Object(z.b)(o())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						g = Object(p.a)(r.apiContext(), e, t, s, Object(W.a)(c), Je(c)),
						f = m && u && Object(x.d)(r.gqlContext(), Object(U.e)(u)) || null,
						C = Object(ge.i)(() => h(r.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: m,
							page: b
						}),
						[v, E, y] = await Promise.all([g, f, C]);
					if (v.ok) {
						if (E && E.ok) {
							const {
								data: e
							} = E.body, t = {
								karma: {
									...x.a
								}
							};
							if (Object(x.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							v.body && v.body.account && Object.assign(v.body.account, t)
						}
						if (y && y.ok) {
							const {
								data: t
							} = y.body;
							v.body.posts[e] = {
								...v.body.posts[e],
								...t.postInfoById
							}
						}
						const t = Object(R.a)(v.body, e, c);
						n(ut({
							key: d,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...v.body
						})), n(Ot({
							key: d
						}));
						const s = o().posts.models[e],
							r = s && Object(ae.U)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(re.a)(c, {
							subredditId: r.id
						}) && n(Object(l.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && v.body.comments && await n(Object(O.a)({
							commentIds: Object.keys(v.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(bt({
						error: v.error,
						key: d,
						...v.body
					}))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !o && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: d.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: c.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return o.a.createElement(i.b, c({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				isCommentBoxDesign: "_2mGbbSC1nHodWNoj5NJEYY",
				editor: "_3NuRqPrgRBPdjWunXX3Q8E",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK",
				avatar: "_2gYdPXSssI0f1R9BPp9qsd"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				u = s.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				x = Object(i.b)(g),
				f = e => {
					let {
						isCommentBoxDesignEnabled: t,
						isTopLevelComment: s,
						children: n
					} = e;
					return r.a.createElement("div", {
						className: Object(m.a)(u.a.spacer, {
							[u.a.isCommentBoxDesign]: t,
							[u.a.isTopLevelComment]: s
						})
					}, n)
				},
				C = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				O = e => r.a.createElement(f, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(C, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				E = x(O),
				y = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CommentCreation/index.tsx"
					}
				}, {
					ssr: !1
				}),
				j = e => r.a.createElement(y, b({}, e, {
					fallback: r.a.createElement(E, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = j
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				CTAButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				ctaButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authControls.ts"),
				m = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(m);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: d,
					openRegisterModal: m,
					origin: b,
					sendEvent: h
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, p.a.Wrapper, {
						[p.a.LiveStreamingWrapper]: s
					})
				}, o.a.createElement("span", {
					className: Object(r.a)(p.a.Copy, {
						[p.a.LiveStreamingCopy]: s
					})
				}, u._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement("div", {
					className: p.a.CTAButtons
				}, o.a.createElement(c.t, {
					className: p.a.LoginLink,
					kind: c.b.ExternalLink,
					priority: c.c.Secondary,
					href: Object(a.a)(n, b, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, u._("Log In", null, {
					hk: "ZR3pC"
				})), o.a.createElement(c.t, {
					className: Object(r.a)(p.a.SignupLink, {
						[p.a.LiveStreamingSignupLink]: s
					}),
					kind: c.b.ExternalLink,
					priority: c.c.Primary,
					href: Object(a.a)(n, b, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), m(), h(Object(l.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, u._("Sign Up", null, {
					hk: "48wH4o"
				}))))
			})
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				g = s("./src/reddit/icons/svgs/Show/index.tsx"),
				x = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				f = s.n(x);
			const C = b.a.wrapped(g.a, "Show", f.a);
			var v = e => o.a.createElement(h.g, null, !e.comment.isApproved && o.a.createElement(h.e, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(h.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.e, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(h.i, null)), o.a.createElement(h.e, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(h.j, null)), o.a.createElement(h.e, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(h.h, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(h.e, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(C, null)));
			const O = b.a.wrapped(l.a, "StyledDropdown", f.a),
				E = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				y = Object(r.b)(E, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(a.a)(s.id)),
						onLockComment: () => e(Object(a.c)(s.id)),
						onRemoveComment: () => e(Object(a.e)(s.id, !1)),
						onSpamComment: () => e(Object(a.e)(s.id, !0)),
						onShowComment: () => e(Object(a.d)(s.id))
					}
				}),
				j = Object(d.a)(O),
				k = y(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: n,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return o.a.createElement(j, {
						isOpen: s,
						tooltipId: l
					}, o.a.createElement(v, {
						onApproveComment: () => {
							n(), c(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), c(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = k
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return z
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				x = s("./src/reddit/constants/headers.ts"),
				f = s("./src/reddit/models/Toast/index.ts");
			const C = (e, t) => async (s, o, r) => {
				let {
					apiContext: i
				} = r;
				const a = await (async (e, t, s) => Object(h.a)(Object(g.a)(e, [x.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(i(), e, t),
					d = `error-block-${t}`,
					l = `success-block-${t}`;
				if (a.ok) {
					s(Object(u.S)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(b.f({
						id: l,
						kind: f.b.SuccessCommunityGreen,
						text: o
					}))
				} else s(b.f({
					id: d,
					kind: f.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: C(e, t)
				}))
			};
			var v = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				y = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				I = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const S = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(w.y)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(w.qb)(r)
				}),
				N = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				L = e => ({
					subreddit: Object(w.gb)(e),
					userSubreddit: Object(w.qb)(e)
				}),
				T = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...L
				});
			var M = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = s("./src/reddit/icons/svgs/Info/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				A = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/tooltip.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(W),
				q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const G = Object(y.a)(k.a),
				K = e => e === q.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === q.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Q extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== q.a.None) {
							e(t === q.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", q.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", q.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", q.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, r.a.createElement(_.b, {
						className: Object(d.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${K(o)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(G, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(_.b, {
						displayText: K(q.a.First),
						isSelected: o === q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(_.b, {
						displayText: K(q.a.Last),
						isSelected: o === q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(_.b, {
						displayText: K(q.a.None),
						isSelected: o === q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Y = Q;
			const z = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Z = Object(y.a)(k.a),
				$ = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(A.m)(e, {
							commentId: s
						})
					},
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(U.b)(z),
					highlightIsOpen: Object(U.b)(J),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(B.m)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					post: D.G,
					postPermalink: D.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(V.v)(e),
							o = !!Object(B.m)(e, {
								postId: s
							}),
							r = Object(D.G)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: A.p
				}),
				ee = Object(i.b)($, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: z
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: J
							})), t()
						},
						onSetSuggestedSort: t => e(C(s, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(u.X)(t, s)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: X
						})),
						toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(S(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(N("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(T(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: o,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: p,
						isOverlay: u,
						location: b,
						post: h,
						postPermalink: g,
						selectedHighlightSort: x,
						showCommentHighlighter: f,
						sort: C,
						suggestedSort: y,
						showTooltip: j,
						toggleContestModeModal: k
					} = this.props, w = h.contestMode, S = !b.search.includes(c.u.CONFIDENCE), L = C === c.u.CONFIDENCE && S, T = p && !L, F = c.w[C], A = F ? F() : "", B = y && C === y && !L ? this.addSuggestedLabel(A) : A, D = w ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), U = w ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), V = w ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = w && !p;
					return r.a.createElement("div", {
						className: Object(d.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !f && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(_.b, {
						className: Object(d.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${B}`,
						id: z,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Z, {
						isOpen: i,
						tooltipId: z
					}, [c.u.CONFIDENCE, c.u.TOP, c.u.NEW, c.u.CONTROVERSIAL, c.u.OLD, c.u.QA].map(e => {
						const t = s || g,
							n = Object(P.b)(t),
							o = c.w[e],
							i = o ? o() : "";
						return r.a.createElement(E.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(_.b, {
							displayText: i,
							isSelected: C === e,
							skipRoleAttr: !0
						}))
					}))), T && !W && (y ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: C !== y ? this.setSortOnClick : this.clearSortOnClick
					}, C !== y ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: X,
						onMouseEnter: j,
						onMouseLeave: l
					}, r.a.createElement(O.c, {
						className: H.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: X
					}), r.a.createElement(R.a, {
						className: H.a.Info
					})))), p && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(I.a, {
						className: H.a.ToggleSwitch,
						on: w
					}))), f && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(Y, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: x,
						trackHighlight: N
					})), o && r.a.createElement(v.a, {
						actionText: U,
						headerText: D,
						modalText: V,
						onConfirm: this.setContestMode,
						toggleModal: k,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(j.c)(te))
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				expandButton: "_2Gzh48SaLz7dQBCULfOC6V",
				expandIcon: "_1tnrhhM9S7dYjApTfvd14l"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				isFollowCommentEnabled: "_3rHRwVOKmBBlBOQ4kIW_vq",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				glowHighlightContainer: "_3VH2iGVh92XtlKq0-eVoEN"
			}
		},
		"./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				gradientHighlightContainer: "TmlaIdEplCzZ0F1aRGYQh"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, s) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/components/LottieAnimation/index.tsx"),
				c = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(c);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = i.a.memo(e => {
				const t = Object(r.useRef)(null),
					[s, c] = Object(r.useState)(!1),
					p = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && c(!1), t <= .001 && c(!0)
						})
					}, []);
				Object(a.a)(t, p, m);
				const u = e.type;
				return i.a.createElement("div", {
					className: Object(o.a)(l.a.effectContainer, l.a[u + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, u === n.Lottie && i.a.createElement(d.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			})
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				redesign: "HZ-cv9q391bm8s7qT54B3",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				score: "_3ChHiOyYyUkpZ_Nm3ZyM2M",
				ActionBar: "_3KgrO85L1p9wQbgwG27q4y",
				actionBar: "_3KgrO85L1p9wQbgwG27q4y",
				HorizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				horizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				FlatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				flatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				hidden: "_1zN1-lYh2LfbYOMAho_O8g",
				visible: "O_Ica0k2O4KFcZyNfsJDU",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				restrictHeight: "_2SI6K-u7PZ8koDfUmq7jlz",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				UserIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				userIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				SupporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				supporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				UserIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				userIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				noSpacing: "_3nqqnHjXPJkfr8j5t_I85P",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/models/PostDraft/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/makeDraftKey/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/comment/moderation.ts"),
				h = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				g = s("./src/reddit/icons/fonts/helpers.tsx");
			var x = e => r.a.createElement("i", {
					className: Object(c.a)(Object(g.b)("expand", e.isFilled), e.className)
				}),
				f = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				C = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O, E, y = s("./node_modules/lodash/defer.js"),
				j = s.n(y),
				k = s("./src/lib/lessComponent.tsx"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/helpers/correlationIdTracker.ts"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				T = s("./src/reddit/helpers/trackers/lightbox.ts"),
				M = s("./src/reddit/models/Comment/index.ts"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				A = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				B = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				D = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				q = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				G = s.n(q);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(O || (O = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(E || (E = {}));
			const K = (e, t) => {
					const s = G.a[t],
						n = G.a[e];
					return Object(c.a)(s, n)
				},
				Q = e => Object(c.a)(G.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[G.a.isInOverlay]: e.isInOverlay,
					[G.a.isModModeEnabled]: e.isModModeEnabled,
					[G.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var Y = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				z = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				J = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				X = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Z = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				$ = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ee = s("./src/reddit/components/OverflowMenu/index.tsx"),
				te = s("./src/reddit/components/ReportFlow/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/new.tsx"),
				ne = s("./src/reddit/components/ShareMenu/index.tsx"),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				re = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ae = s("./src/reddit/helpers/trackers/modTools.ts"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				le = s.n(ce),
				me = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				pe = s("./src/reddit/selectors/gold/awardIcon.ts");
			var ue = e => {
					const t = Object(i.e)(D.b),
						s = Object(i.e)(e => t && Object(pe.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? r.a.createElement("img", {
						className: Object(c.a)(le.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : r.a.createElement(me.a, e)
				},
				be = s("./src/reddit/icons/fonts/index.tsx"),
				he = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				ge = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				xe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				fe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ve = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Oe = s.n(ve);
			const Ee = k.a.wrapped(he.a, "CommentIcon", Oe.a),
				ye = k.a.wrapped(Ce.a, "Report", Oe.a),
				je = k.a.wrapped(xe.a, "IgnoreReport", Oe.a),
				ke = k.a.wrapped(Z.a, "ModActionsMenu", Oe.a),
				_e = k.a.div("OverflowMenuSpacer", Oe.a),
				Ie = k.a.wrapped(ee.a, "DropdownRow", Oe.a),
				Pe = k.a.wrapped(de.a, "Flatlist", Oe.a),
				we = k.a.button("Button", Oe.a),
				Se = k.a.wrapped(Y.a, "ModToolsFlatlist", Oe.a),
				Ne = k.a.wrapped(re.a, "ViewReportsDropdown", Oe.a),
				Le = e => `Comment-${e}--Modal--DeleteComment`,
				Te = e => `Distinguish--Dropdown--${e}`,
				Me = e => `${e}-overflow-menu`,
				Re = e => `View--Reports--${e}`,
				Fe = Object(a.c)({
					claimedFreeAward: D.b,
					currentUser: W.k,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(R.a)(e) === Le(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(I.b)(Te(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.C)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(I.b)(Re(s.id))(e)
					},
					isLoggedIn: W.Q,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.A)(e, {
							postId: s.postId
						})
					},
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(U.w)(e, {
							postId: s.postId
						}) && Object(A.a)(e)
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.I)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(V.u)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: B.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(U.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: A.c,
					isParentCommentsAuthorBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.B)(e, {
							commentId: s.id
						})
					}
				});
			class Ae extends r.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(T.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ae.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ae.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ae.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(N.e)(N.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ae.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ae.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ae.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? M.a.UNFOLLOWED : M.a.FOLLOWED), t(n ? Object(ae.f)("follow", s.id) : Object(ae.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ae.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? r.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : r.a.createElement(te.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				componentDidMount() {
					this.props.isFollowedCommentExpired && this.props.onFollowedCommentExpire()
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						commentPermalink: i,
						deleteComment: a,
						depth: d,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: p,
						isLoggedIn: u,
						isPendingDeletion: b,
						onDistinguishComment: h,
						onIgnoreReports: g,
						onToggleReportsDropdown: x,
						moderatorPermissions: f,
						modModeEnabled: C,
						postIsArchived: v,
						postAuthorIsBlocked: y,
						isBlockedUserBannerEnabled: k,
						postIsLocked: _,
						renderedInOverlay: I,
						sendEvent: P,
						subreddit: w,
						subredditAboutInfo: S,
						toggleDeleteCommentModal: N,
						toggleSendReplies: T,
						trackCommentClick: R,
						isPostUnrepliable: F,
						isTrueblockPCBlockeeEnabled: A,
						isParentCommentsAuthorBlocked: B
					} = this.props, D = Object(L.a)(f), U = !!s && s.displayText === e.author, V = !!s && s.isEmployee, W = A && e.unrepliableReason, q = A && F, G = !(B && A) && !(y && A) && !(Object(M.g)(e) && A) && !(F && A) && !W && !q && !(S && S.userIsBanned) && (_ || v || y && k || D && u || e.isLocked ? D && u : u || m), Y = Object($.a)(e), Z = D && U && !e.bannedBy, te = U && V && !e.bannedBy, se = Z || te, oe = !(Object(M.g)(e) && A) && s && e.isGildable && !q && !(W && "[deleted]" === e.author), re = !v && !W, de = [];
					G && de.push(r.a.createElement(we, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), j()(() => R("reply", e.id)())
						}
					}, r.a.createElement(Ee, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), oe && de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(ue, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), de.push(r.a.createElement(ne.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == w ? void 0 : w.type
					}, r.a.createElement(we, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), U || de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(Ce.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(be.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => n.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => n.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), U && de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(be.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), re && de.push({
						breakpointGroup: E.LoggedInUser,
						icon: r.a.createElement(be.a, {
							name: "notification",
							isFilled: p
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: p ? () => n.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => n.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const ce = de.map(e => r.a.isValidElement(e) ? e : r.a.createElement(we, {
							className: K(e.breakpointGroup, O.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						le = de.map(e => r.a.isValidElement(e) ? null : r.a.createElement(Ie, {
							className: K(e.breakpointGroup, O.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Oe.a.dropdownRowText
						}, e.icon));
					return r.a.createElement(o.Fragment, null, r.a.createElement(Pe, {
						className: Object(c.a)(Q({
							depth: d,
							isInOverlay: I,
							isModModeEnabled: D && C,
							isFollowCommentEnabled: re
						}), t)
					}, ce, r.a.createElement(_e, {
						className: U ? void 0 : K(E.LoggedInUser, O.HideIfVWLarger)
					}, r.a.createElement(ee.b, {
						className: Oe.a.overflowMenu,
						disabled: b,
						dropdownId: Me(e.id),
						onClick: () => P(Object(ae.a)("comment_overflow_menu", e.id))
					}, le, U && r.a.createElement(r.a.Fragment, null, r.a.createElement(Ie, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Oe.a.dropdownRowText
					}, r.a.createElement(be.a, {
						name: "delete"
					})), r.a.createElement(ie.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: T,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && r.a.createElement(J.a, {
						actionText: n.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: n.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: n.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: n.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: a,
						toggleModal: N,
						trackClick: () => {},
						withOverlay: !0
					}), D && r.a.createElement(r.a.Fragment, null, C && r.a.createElement(Se, {
						className: K(E.Moderator, O.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: U
					}), r.a.createElement(ke, {
						className: C ? K(E.Moderator, O.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => P(Object(ae.a)("comment_mod_action_menu", e.id))
					}, r.a.createElement(fe.a, null), r.a.createElement(H.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object($.c)(e) && !C && r.a.createElement(z.a, {
						text: `${Y}`,
						onClick: () => {
							x(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Re(e.id)
					}, r.a.createElement(Ne, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Re(e.id)
					}), e.ignoreReports ? r.a.createElement(je, null) : r.a.createElement(ye, null)), se && r.a.createElement(z.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, r.a.createElement(ge.a, null), r.a.createElement(X.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: V,
						isUserMod: D,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Te(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Be = Object(i.b)(Fe, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(u.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(w.i)(Le(s.id))), e(Object(_.h)({
								tooltipId: Me(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(u.d)({
								commentId: s.id,
								draftKey: Object(l.a)(d.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(u.q)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onCommentFollow: t => e(Object(u.s)(s.id, t)),
						onDistinguishComment: (t, n) => e(Object(b.b)(s.id, t, n)),
						onFollowedCommentExpire: () => e(Object(p.n)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(P.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleSave: () => e(Object(p.m)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(_.h)({
							tooltipId: Te(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(_.h)({
							tooltipId: Re(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(w.i)(Le(s.id))),
						toggleSendReplies: () => e(Object(u.l)(s.id))
					}
				})(Object(oe.c)(Ae)),
				De = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ue = s.n(De);
			var Ve = r.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return r.a.createElement("div", {
						className: Ue.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				We = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				He = s.n(We);
			var qe = r.a.memo(e => r.a.createElement("div", {
					className: He.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ge = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				Ke = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Qe = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ye = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				ze = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Je = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Xe = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Ze = s("./src/reddit/components/ModModeReports/index.tsx"),
				$e = s("./src/reddit/components/PostTopMeta/index.tsx"),
				et = s("./src/reddit/components/RichTextJson/index.tsx"),
				tt = s("./src/reddit/components/UserIcon/index.tsx"),
				st = s("./src/reddit/components/UserIcon/constants.ts"),
				nt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ot = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				rt = s("./src/reddit/constants/componentTestIds.ts"),
				it = s("./src/reddit/contexts/PageLayer/index.tsx"),
				at = s("./src/reddit/contexts/Visibility.tsx"),
				dt = s("./src/reddit/controls/ErrorText/index.tsx"),
				ct = s("./src/reddit/controls/InternalLink/index.tsx"),
				lt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				mt = s("./src/reddit/helpers/flair.ts"),
				pt = s("./src/reddit/models/Subreddit/index.ts"),
				ut = s("./src/reddit/models/User/index.ts"),
				bt = s("./src/reddit/models/Vote/index.ts"),
				ht = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				gt = s("./src/reddit/selectors/commentSelector.ts"),
				xt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ft = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Ct = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				vt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ot = s("./src/reddit/selectors/poll/index.ts"),
				Et = s("./src/reddit/selectors/userPrefs.ts"),
				yt = s("./src/reddit/selectors/moderatingComments.ts"),
				jt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				kt = s.n(jt),
				_t = s("./src/config.ts"),
				It = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				Pt = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function wt() {
				return (wt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const St = 300,
				Nt = k.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return r.a.createElement("button", v({}, s, {
						className: Object(c.a)(t, C.a.expandButton)
					}), r.a.createElement(x, {
						className: C.a.expandIcon
					}))
				}), "ExpandButton", kt.a),
				Lt = k.a.wrapped(Be, "FlatList", kt.a),
				Tt = k.a.wrapped(dt.b, "ErrorText", kt.a),
				Mt = k.a.wrapped(Ye.a, "HorizontalVotes", kt.a),
				Rt = k.a.div("ActionBar", kt.a),
				Ft = k.a.wrapped(Ke.a, "TopMeta", kt.a),
				At = k.a.div("CommentContentWrapper", kt.a),
				Bt = k.a.wrapped(ze.b, "AuthorHovercard", kt.a),
				Dt = Object(it.u)(),
				Ut = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(gt.b)(e, t),
					currentProfileModPermissions: it.h,
					depth: (e, t) => Object(F.j)(e, t),
					collapsed: yt.b,
					collapsedBecauseCrowdControl: yt.a,
					currentUser: W.k,
					flair: F.e,
					focused: (e, t) => !t.noFocus && Object(F.t)(e, t),
					highlightAnimationDisabled: Et.c,
					isEditing: F.z,
					isLoggedIn: W.Q,
					isPendingDeletion: F.C,
					isPresenceConsumptionExpEnabled: ft.c,
					moderatorPermissions: (e, t) => {
						const s = Object(gt.b)(e, t);
						return s ? Object(vt.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Ot.f,
					modModeEnabled: it.T,
					errorMsgs: F.G,
					replyFormOpen: F.J,
					subreddit: it.r,
					subredditType: F.L,
					showNftSpecialtyTreatment: It.b,
					hasSupporterRing: Ct.a,
					isOnlineConsumptionLoadTest: ft.a,
					isOnlineUserPref: W.V,
					userIsBanned: (e, t) => {
						const s = Object(gt.b)(e, t);
						return !!s && Object(V.db)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: xt.b
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: o,
						trackCommentClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(p.o)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, o] = t === bt.a.upvoted ? [Object(p.q)(s), "upvote_comment"] : [Object(p.j)(s), "downvote_comment"];
							r(o, s)(), e(n)
						}
					}
				}),
				Vt = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Wt = e => r.a.createElement("div", e, e.children),
				Ht = e => r.a.createElement(r.a.Fragment, null, e.children),
				qt = Dt(Ut(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: p,
						currentProfileModPermissions: b,
						currentUser: g,
						depth: x,
						errorMsgs: f,
						flair: C,
						flatlist: v,
						focused: O,
						hasAwardGradient: E,
						hasSupporterRing: y,
						highlightAnimationDisabled: j,
						highlightTreatment: k,
						index: _,
						isActive: I,
						isAvatarsInCommentsEnabled: P,
						isBlockingInterstitialEnabled: w,
						isEditing: S,
						isFirstInList: N,
						isHighlighted: T,
						isLoggedIn: R,
						isOnlineConsumptionLoadTest: F,
						isOnlineUserPref: A,
						isPendingDeletion: B,
						isPresenceConsumptionExpEnabled: D,
						moderatorPermissions: U,
						modModeEnabled: V,
						noSpacing: W = !1,
						onCommentAuthorClick: H,
						onCommentTimestampClick: q,
						onCollapseClick: G,
						onIgnoreReports: K,
						onLineMouseOver: Q,
						onPresenceIndicatorInViewport: Y,
						onVoteClick: z,
						postId: J,
						prediction: X,
						renderedInOverlay: Z,
						replyFormOpen: ee,
						restrictHeight: te,
						showBlockingInterstitial: se,
						showNftSpecialtyTreatment: ne,
						subreddit: oe,
						subredditType: re,
						trackCommentClick: ie,
						userIconSmall: ae,
						userIsBanned: de
					} = e, ce = m.isDeleted, le = !S && !ce && !!f && f.length > 0, me = Object(l.a)(d.c.edit, m.id), pe = Object(l.a)(d.c.replyToComment, m.id), ue = Object(L.a)(U), be = Object(Xe.d)(m), he = Object($.c)(m), ge = m.authorIsContractor && re === pt.f.EmployeesOnly, xe = m.isLocked, fe = ue && V, Ce = !S && !ce && (R || P), ve = !!g && Object(ut.e)(g) === m.author, [Oe, Ee] = Object(o.useState)(null), [ye, je] = Object(o.useState)(null), ke = Object(o.useRef)(null), _e = Object(M.f)(m) || Object(M.g)(m), Ie = _e ? Wt : ct.a, Pe = Object(M.f)(m) ? Ht : Bt;
					Object(o.useEffect)(() => {
						if (!S && !ce && (E && Ee(r.a.createElement(qe, null)), null !== k)) {
							if (k.glowHexColor) {
								const e = k.glowHexColor;
								Ee(r.a.createElement(Ve, {
									hexColor: e
								}))
							}
							if (k.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = k.effectHighlight;
								je(r.a.createElement(Ge.b, {
									prefersReducedAnimation: j,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [S, ce, E, j, k]);
					const we = Object(at.b)();
					w && we && _ >= xt.a - 1 && se();
					const Se = !ce && !Object(M.f)(m) && (!de || de && ve) && !Object(M.g)(m) && R,
						Ne = Object(o.useCallback)(() => {
							Se && D && !ve && Y && Y(m.id)
						}, [m.id, Y, Se, D, ve]),
						Le = Object(ot.a)(m),
						Te = !!g && Object(ut.e)(g) === m.author ? null == g ? void 0 : g.accountIcon : m.profileImage,
						Me = !(!Object(Pt.d)(Te) && !ne) && Object(Pt.c)(Te);
					return r.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(c.a)(`Comment ${m.id}`, kt.a.CommentWrapper, {
							[kt.a.highlightComment]: T,
							[kt.a.deleted]: ce,
							[kt.a.focused]: O,
							[kt.a.redesign]: P,
							[kt.a.topLevel]: !x,
							[kt.a.noSpacing]: W
						})
					}, Oe, ye, !S && !ce && N && r.a.createElement("div", {
						className: kt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${_t.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), r.a.createElement(Nt, {
						className: Object(c.a)(m.id, {
							[kt.a.hidden]: !i,
							[kt.a.visible]: i
						}),
						onClick: () => {
							s(), G(), ie("collapse", m.id)()
						},
						onMouseOver: () => Q(m.id),
						onMouseOut: s
					}), r.a.createElement(Pe, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: kt.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(M.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: Z ? $e.c.Lightbox : void 0
					}, r.a.createElement(Ie, {
						className: Object(c.a)(kt.a.UserIconContainer, ae && kt.a.UserIconContainerSmall),
						"data-testid": _e ? void 0 : "comment_author_icon",
						onClick: _e ? void 0 : H,
						to: `/user/${m.author}/`
					}, we ? r.a.createElement(r.a.Fragment, null, y && !Me && r.a.createElement("div", {
						className: kt.a.supporterRing
					}), r.a.createElement(tt.a, {
						isNft: Me,
						className: Object(c.a)(kt.a.UserIcon, {
							[kt.a.UserIconNft]: Me && !Object(Pt.f)(Te)
						}),
						iconUrl: Te,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: st.a,
						userName: m.author,
						isHighlighted: T,
						shouldShowPresenceIndicator: Se && D,
						onPresenceIndicatorInViewport: Ne,
						isCommentAuthorBlocked: Object(M.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: ve,
						isOnlineOverrideValue: A,
						isOnlineStatusLoadTest: Se && F,
						authorId: m.authorId
					})) : r.a.createElement("div", {
						className: kt.a.UserIcon
					}))), r.a.createElement(At, {
						className: Object(c.a)({
							[kt.a.isActive]: I,
							[kt.a.isCollapsed]: i,
							[kt.a.isLocked]: xe && fe,
							[kt.a.isPendingDeletion]: B,
							[kt.a.isRemoved]: !!m.bannedBy && fe
						})
					}, r.a.createElement(lt.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", x + 1)], {
						hk: "2XnyAV"
					})), r.a.createElement(Ft, {
						userHasNft: Me,
						childrenInfo: t,
						className: Object(c.a)({
							[kt.a.collapsed]: i,
							[kt.a.noFlair]: Object(mt.o)(C || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: p,
						flair: C,
						isPostComment: !0,
						onCommentAuthorClick: H,
						onCommentTimestampClick: q,
						renderedInOverlay: Z,
						renderContractorBadge: ge
					}), !i && r.a.createElement(o.Fragment, null, S && r.a.createElement(h.a, {
						className: Object(c.a)(kt.a.EditCommentForm, kt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: p,
						depth: x,
						draftType: d.c.edit,
						draftKey: me,
						postId: J,
						rtJson: Object(ot.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(u.j)({
							id: m.id,
							commentsPageKey: p,
							depth: x,
							draftKey: me,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !S && !ce && r.a.createElement("div", {
						"data-testid": rt.d,
						ref: ke,
						className: Object(c.a)(kt.a.CommentBody, {
							[kt.a.restrictHeight]: !(!te || !ke.current) && ke.current.clientHeight > St
						})
					}, X ? r.a.createElement(Qe.a, {
						comment: m,
						prediction: X
					}) : r.a.createElement(et.a, {
						content: Le,
						mediaMetadata: m.media && m.media.mediaMetadata,
						rtJsonElementProps: Vt(e)
					}), r.a.createElement(ht.b, {
						content: Le
					})), V && ue && be && r.a.createElement(Je.a, {
						thing: m
					}), V && ue && he && r.a.createElement(Ze.a, {
						onIgnoreReports: K,
						reportable: m
					}), null != v ? v : Ce && r.a.createElement(Rt, null, P && r.a.createElement(Mt, {
						downvoteButtonClassName: kt.a.voteButton,
						downvoteClassName: kt.a.upDownVote,
						model: m,
						onVoteClick: z,
						scoreClassName: kt.a.score,
						upvoteButtonClassName: kt.a.voteButton,
						upvoteClassName: kt.a.upDownVote
					}), r.a.createElement(Lt, {
						comment: m,
						commentsPageKey: p,
						depth: x,
						isAvatarsInCommentsEnabled: P,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: V,
						moderatorPermissions: b || U,
						renderedInOverlay: Z,
						isCommentFocused: O,
						subreddit: oe,
						trackCommentClick: ie
					})), le && f.map(e => r.a.createElement(Tt, {
						key: e
					}, e)), ee && r.a.createElement(h.a, {
						className: Object(c.a)(kt.a.EditCommentForm, kt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: p,
						depth: x,
						draftType: d.c.replyToComment,
						draftKey: pe,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: J,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(u.t)({
								commentsPageKey: p,
								draftKey: pe,
								parentCommentDepth: x,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(u.m)({
								commentsPageKey: p,
								draftKey: pe,
								parentCommentDepth: x,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							})
						},
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => r.a.createElement(nt.a.Consumer, null, t => r.a.createElement(qt, wt({}, e, {
				trackCommentClick: t
			})))
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				glowBorderTopPadding: "_2PHrzfGnoV59y2Imtb1Y5I",
				glowBorderBottomPadding: "_3kYyDFXW4SA2vk-vehWhXw"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, s) {
			e.exports = {
				ArrowRight: "egHA5MD_goQfvgLP3zgST",
				arrowRight: "egHA5MD_goQfvgLP3zgST",
				HoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				hoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				Wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				isActive: "btJMgy_2EOVvOVP-DikGZ",
				LinkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn",
				linkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				MoreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				moreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				MoreComments: "_2HYsucNpMdUpYlGBMviq8M",
				moreComments: "_2HYsucNpMdUpYlGBMviq8M",
				MoreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				moreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				isActive: "l7--vTMsoEqrU8pjG52TF"
			}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return H
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/describeApiError/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				C = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				E = s.n(O);
			const y = l.a.wrapped(C.a, "CommentsIcon", E.a),
				j = l.a.wrapped(v.a, "SnooFacepalm", E.a),
				k = l.a.p("EmptyTitle", E.a),
				_ = l.a.p("ErrorTitle", E.a),
				I = l.a.p("EmptyText", E.a),
				P = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(E.a.StateContainer, t)
					}, a.a.createElement(y, null), a.a.createElement(k, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(I, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => a.a.createElement("div", {
					className: E.a.StateContainer
				}, a.a.createElement(y, null), a.a.createElement(k, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(I, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: E.a.StateContainer
					}, a.a.createElement(y, null), a.a.createElement(k, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), a.a.createElement(u.n, {
						to: Object(h.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				N = Object(d.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(s, n, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						onClick: s
					} = e;
					return a.a.createElement("div", {
						className: E.a.StateContainer
					}, a.a.createElement(j, null), a.a.createElement(_, null, t ? Object(b.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), a.a.createElement(u.l, {
						onClick: s
					}, n.fbt._("Retry", null, {
						hk: "NOuNi"
					})))
				}),
				L = e => {
					let {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(E.a.StateContainer, E.a.ErrorFullPage)
					}, a.a.createElement(N, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					}))
				},
				T = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", E.a),
				M = l.a.div("CommentsPlaceholderContainer", E.a),
				R = l.a.div("CommentPlaceholder", E.a),
				F = l.a.div("Avatar", E.a),
				A = l.a.div("VoteColumn", E.a),
				B = l.a.div("TextColumn", E.a),
				D = l.a.wrapped(f.a, "Upvote", E.a),
				U = l.a.wrapped(x.a, "Downvote", E.a),
				V = () => a.a.createElement("div", {
					className: Object(c.a)(E.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(E.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(M, null, r()(10, t => a.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(F, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(A, null, a.a.createElement(D, null), a.a.createElement(U, null)), a.a.createElement(B, null, a.a.createElement(V, null), a.a.createElement(W, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				hasGlowBorder: "_9UoUJEplv3y2cpdVestPb"
			}
		},
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			let n = {};

			function o(e) {
				return e in n
			}

			function r(e) {
				n[e] = !0
			}

			function i() {
				n = {}
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, s) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/Comments/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/debounce.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/constants/comments.ts"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/elementClassNames.ts"),
				v = s("./src/reddit/constants/gold.ts"),
				O = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const E = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: y,
							effectHighlight: {
								type: O.a.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				y = "ff0000";

			function j(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(_).filter(e => e !== k)
				}(e) : [])
			}
			const k = {
				glowHexColor: null,
				effectHighlight: null
			};

			function _(e) {
				for (const t of E) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return k
			}
			var I = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				P = s("./src/reddit/selectors/comments.ts"),
				w = s("./src/reddit/selectors/commentSelector.ts"),
				S = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/Comments/Comment/index.tsx"),
				R = s("./src/lib/scroll/index.ts"),
				F = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				A = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				U = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				V = s.n(U);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = u.a.wrapped(D.a, "ArrowRight", V.a), q = u.a.wrapped(F.a, "LinkOrOverlayLink", V.a), G = u.a.span("HoverSpan", V.a), K = Object(l.c)({
				permalink: (e, t) => Object(P.m)(e, {
					commentId: Object(P.r)(e, t).parentId
				})
			});
			var Q = Object(c.b)(K)(Object(A.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return d.a.createElement("div", {
						className: Object(m.a)(V.a.Wrapper, {
							[V.a.isActive]: t
						})
					}, d.a.createElement(q, {
						isOverlay: !!s,
						to: Object(B.b)(n),
						onClick: R.b
					}, d.a.createElement(G, null, W._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", d.a.createElement(H, null)))
				})),
				Y = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				z = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				J = s.n(z);
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Z = u.a.div("MoreCommentsItemWrapper", J.a), $ = u.a.p("MoreComments", J.a), ee = u.a.wrapped($, "MoreCommentsInteractive", J.a), te = Object(l.c)({
				moreCommentsItem: P.D,
				moreCommentsPending: P.E
			});
			var se = Object(c.b)(te, (e, t) => ({
					moreCommentsClicked: () => e(Object(g.l)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					const {
						isActive: t,
						moreCommentsClicked: s,
						moreCommentsItem: n,
						moreCommentsPending: o
					} = e;
					return d.a.createElement(Z, null, o ? d.a.createElement($, null, X._("loading...", null, {
						hk: "47z89"
					})) : d.a.createElement(Y.a.Consumer, null, e => d.a.createElement(ee, {
						className: Object(m.a)({
							[J.a.isActive]: t
						}),
						onClick: () => {
							s(), e("load_more_comment")()
						}
					}, X._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [X._plural(null == n ? void 0 : n.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				ne = s("./node_modules/lodash/times.js"),
				oe = s.n(ne),
				re = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				ie = s.n(re);
			const ae = u.a.wrapped(e => d.a.createElement("div", e, d.a.createElement("i", {
					className: C.m
				})), "Line", ie.a),
				de = u.a.div("LineContainer", ie.a),
				ce = u.a.div("ShortLineContainer", ie.a);
			var le = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						onLineClick: o,
						onLineMouseOver: r,
						onLineMouseOut: i,
						onShortLineClick: a,
						parentNodeIds: c,
						type: l
					} = e;
					return d.a.createElement(de, null, oe()(s + 1, e => e === s ? l !== x.a.Comment || t ? null : d.a.createElement(ce, {
						key: c[e]
					}, d.a.createElement(ae, {
						className: Object(m.a)(c[e], {
							[ie.a.hasGlowBorder]: !!n,
							[ie.a.topLevel]: 0 === s
						}),
						onClick: a,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : d.a.createElement(ae, {
						className: c[e],
						key: c[e],
						onClick: o(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				me = s("./src/reddit/contexts/Visibility.tsx"),
				pe = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ue = s("./src/reddit/selectors/moderatingComments.ts"),
				be = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				he = s.n(be);
			const ge = u.a.div("CommentListNodeWrapper", he.a),
				xe = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(C.f)
				},
				fe = () => {
					const e = document.querySelectorAll(`.${C.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(C.f)
				};
			var Ce = Object(c.b)(() => Object(l.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(ue.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(P.l)(e, t),
				depth: (e, t) => Object(P.j)(e, t),
				highlightTreatment: (e, t) => {
					let {
						commentLink: s
					} = t, n = null;
					const o = Object(P.l)(e, {
						commentLink: s
					});
					if (o && s.type === x.a.Comment) {
						n = j(o.treatmentTags)
					}
					return n
				},
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isAvatarsInCommentsEnabled: pe.a,
				isAwarded: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(P.l)(e, {
						commentLink: s
					});
					return !(s.type !== x.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(S.a)(e, t);
						return s && s.coinPrice >= v.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(P.p)(e);
					if (n === I.a.None) return !1;
					if (s.type !== x.a.Comment) return !1;
					const o = s.id,
						r = Object(w.b)(e, {
							commentId: o
						});
					if (!r) return !1;
					const i = Object(T.v)(e),
						a = !!Object(N.m)(e, {
							postId: r.postId
						}),
						d = Object(L.G)(e, {
							postId: r.postId
						});
					if (!d || !d.previousVisits || d.previousVisits.length < 1) return !1;
					const c = n === I.a.Last ? d.previousVisits[d.previousVisits.length - 1] : d.previousVisits[0];
					return (a || i) && r.created > c
				}
			}), (e, t) => {
				let {
					commentLink: s,
					commentsPageKey: n,
					scrollToAndRemeasure: o
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(g.d)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(g.o)({
						commentId: s.id,
						commentsPageKey: n,
						scrollToAndRemeasure: o
					}))
				}
			})(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: p,
					isAwarded: u,
					isFirstInList: b,
					isHidden: h,
					isHighlighted: g,
					onLineClick: C,
					onPresenceIndicatorInViewport: v,
					onShortLineClick: O,
					parentNodeIds: E,
					postId: y,
					renderedInOverlay: j,
					scrollToAndRemeasure: k,
					showBlockingInterstitial: _
				} = e, I = !!u, P = !(!a || !a.glowHexColor), w = P && i > 0, S = P, N = d.a.createElement(ge, {
					className: Object(m.a)(s, {
						[he.a.isHidden]: h,
						[he.a.glowBorderTopPadding]: w,
						[he.a.glowBorderBottomPadding]: S
					}),
					id: o.id,
					style: {
						paddingLeft: i * (f.w + f.v) + (o.type === x.a.Comment ? f.w : 0)
					},
					tabIndex: -1
				}, d.a.createElement(le, {
					collapsed: n,
					depth: i,
					hasGlowBorder: w,
					onLineClick: C,
					onLineMouseOver: xe,
					onLineMouseOut: fe,
					onShortLineClick: O,
					type: o.type,
					parentNodeIds: E
				}), ve({
					childrenInfo: t,
					clearHovered: fe,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: xe,
					hasAwardGradient: I,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: p,
					isFirstInList: b,
					isHighlighted: g,
					postId: y,
					renderedInOverlay: j,
					scrollToAndRemeasure: k,
					onPresenceIndicatorInViewport: v,
					showBlockingInterstitial: _
				}));
				return p && o.type === x.a.Comment ? d.a.createElement(me.a, null, N) : N
			});
			const ve = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					hasAwardGradient: r,
					highlightTreatment: i,
					index: a,
					isActive: c,
					isAvatarsInCommentsEnabled: l,
					isFirstInList: m,
					isHighlighted: p,
					onLineMouseOver: u,
					postId: b,
					renderedInOverlay: h,
					scrollToAndRemeasure: g,
					onPresenceIndicatorInViewport: f,
					showBlockingInterstitial: C
				} = e;
				switch (n.type) {
					case x.a.Comment:
						return d.a.createElement(M.a, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							hasAwardGradient: r,
							highlightTreatment: i,
							index: a,
							isActive: c,
							isAvatarsInCommentsEnabled: l,
							isFirstInList: m,
							isHighlighted: p,
							onLineMouseOver: u,
							postId: b,
							renderedInOverlay: h,
							scrollToAndRemeasure: g,
							onPresenceIndicatorInViewport: f,
							showBlockingInterstitial: C
						});
					case x.a.MoreComments:
						return d.a.createElement(se, {
							commentsPageKey: o,
							isActive: c,
							moreCommentsId: n.id
						});
					case x.a.ContinueThread:
						return d.a.createElement(Q, {
							id: n.id,
							isActive: c
						})
				}
			};
			var Oe = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Ee = s("./src/reddit/components/Comments/States/index.tsx"),
				ye = s("./src/reddit/components/Scroller/Simple.tsx"),
				je = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ke = s("./src/reddit/constants/elementIds.ts"),
				_e = s("./src/reddit/featureFlags/index.ts"),
				Ie = s("./src/reddit/helpers/commentList/index.ts"),
				Pe = s("./src/reddit/helpers/trackers/comment.ts"),
				we = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Se = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = s("./src/telemetry/index.ts"),
				Le = s("./src/lib/LRUCache/index.ts"),
				Te = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				Me = s("./src/reddit/selectors/telemetry.ts");
			const Re = e => t => ({
				...Object(Me.n)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(Me.d)(t, {
					reason: String(e)
				})
			});
			var Fe = s("./src/reddit/components/Comments/index.m.less"),
				Ae = s.n(Fe);
			const Be = f.f + 10,
				De = 65,
				Ue = u.a.wrapped(ye.b, "Scroller", Ae.a),
				Ve = Object(l.c)({
					allCollapsed: P.a,
					commentLinks: P.k,
					commentThreadLinkSet: P.o,
					measureScrollFPS: _e.d.measureScrollFPS,
					moreComments: P.b,
					postPermalink: L.F
				}),
				We = Object(c.b)(Ve, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(b.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(g.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(g.h)(t, s)),
					showModalOnCommentsScroll: t => e(Object(h.ab)(Object(B.b)(t)))
				})),
				He = new Le.a(500),
				qe = new Le.a(500),
				Ge = (e, t) => {
					const s = `entered-${e}`;
					let n = He.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, He.set(s, n)), n
				},
				Ke = (e, t) => {
					const s = `left-${e}`;
					let n = qe.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, qe.set(s, n)), n
				};
			class Qe extends d.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							o = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === o) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[o - 1],
							i = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.onPresenceIndicatorInViewport = e => {
						this.state.isPresenceEventSent || (this.setState({
							isPresenceEventSent: !0
						}), this.props.sendEvent(Object(Pe.b)(e)))
					}, this.showBlockingInterstitial = o()(() => {
						this.state.isBlockingModalShowed || (this.setState({
							isBlockingModalShowed: !0
						}), this.props.showModalOnCommentsScroll(this.props.postPermalink))
					}, p.K, {
						leading: !0,
						maxWait: 1e3
					}), this.parentNodeIdsMap = {}, Oe.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1,
						isBlockingModalShowed: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: n
					} = this.props;
					this.timerId && Ne.c.cancel(this.timerId), e.length && (this.timerId = Ne.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(Ne.b)(p.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < Se.a && this.props.sendEvent(Re(this.props.commentLinks.length))
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: o,
						moreComments: r
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !i()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, o, r)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !i()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && Ne.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Ne.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Ne.b)(p.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ne.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && Ne.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					Oe.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (Oe.a(c.id), i += Object(Ie.d)(c, n), c.type === x.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
							numChildren: i,
							hasContinueThread: a
						}, o = null, r = 1 / 0, i = 0, a = !1)), !o && t[c.id] && (o = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o,
						postId: r,
						renderedInOverlay: i
					} = this.props, a = Ge(e.id, n), c = Ke(e.id, o);
					return {
						estHeight: Oe.b(e.id) ? 0 : De,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: c,
						render: n => {
							let {
								placeholderRecommended: o,
								height: a,
								width: c,
								scrollToAndRemeasure: l
							} = n;
							return o ? d.a.createElement("div", {
								style: {
									height: a,
									backgroundColor: "#fff"
								}
							}) : d.a.createElement(Ce, {
								key: `comment-list-node-${e.id}`,
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								index: t,
								isFirstInList: 0 === t,
								isHidden: Oe.b(e.id),
								postId: r,
								scrollToAndRemeasure: l,
								renderedInOverlay: !!i,
								parentNodeIds: this.getParentNodeIds(e),
								onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport,
								showBlockingInterstitial: this.showBlockingInterstitial
							})
						}
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						onAllCommentsRendered: o,
						renderedInOverlay: r,
						showSignupUpsell: i
					} = this.props;
					let a;
					if (n) {
						a = `comments-${r?"lightbox":"page"}`
					}
					const c = t.map((e, t) => this.getScrollChild(e, t));
					return d.a.createElement(Ue, {
						className: Object(m.a)(Ae.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(ke.d) : null,
						onScroll: i,
						onAllChildrenRendered: o,
						preventScrollOnMount: !0,
						scrollToChildPadding: Be,
						trackingName: a
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? d.a.createElement(Ee.g, {
						link: this.props.postPermalink
					}) : d.a.createElement(Ee.c, null)
				}
			}
			t.a = We(Object(je.c)(Object(Te.a)(Object(we.d)(Qe))))
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				p = i.a.div("Byline", c.a),
				u = Object(r.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsPageNativeAd/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CommentsPageNativeAd",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CommentsPageNativeAd").then(s.bind(null, "./src/reddit/components/CommentsPageNativeAd/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsPageNativeAd/index.tsx"
				}
			})
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_2Zqrm36MciZxq2elpbtQig",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/reddit/components/ModProgressModule/index.tsx"),
				f = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				C = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				O = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				E = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				y = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				j = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				k = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/featureFlags/component.tsx"),
				I = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				P = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				S = s("./src/reddit/selectors/experiments/postSeo.ts"),
				N = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				L = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				R = s.n(M);
			const F = Object(_.a)("spPoints", b.a),
				A = Object(_.a)("spLeaderboard", h.a),
				B = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				D = Object(c.c)({
					isInNewModuleNCPV3Experiment: (e, t) => {
						let {
							post: s,
							isOverlay: n
						} = t;
						return !Object(P.q)(s) && !n && Object(w.a)(e) === k.me.NewModule
					},
					isLoggedIn: T.Q,
					postSEOV2IdCardVariant: S.h,
					shouldShowReredditPromo: N.a,
					widgets: Object(p.a)(L.s)
				}),
				U = Object(d.b)(D);
			class V extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e, t) {
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || this.props.post.id !== e.post.id
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: n,
						post: o,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(S.c)(i) && !Object(S.f)(i);
					return a.a.createElement(O.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(C.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: I.a.BOTTOM,
							refreshKey: o.id,
							sizes: m.p,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isInNewModuleNCPV3Experiment: s,
						isLoggedIn: n,
						isOverlay: o,
						post: r,
						postSEOV2IdCardVariant: i,
						shouldShowReredditPromo: d,
						subredditId: c,
						subredditName: p,
						widgets: b
					} = this.props;
					let h = 0;
					const O = Object(S.c)(i) || Object(S.f)(i),
						k = a.a.createElement(C.a, {
							postId: r.id,
							isOverlay: o,
							listingName: p,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: I.a.FIRST,
							refreshKey: r.id,
							sizes: m.i,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(R.a.outerWrapper, e)
					}, s && a.a.createElement(x.default, {
						subredditId: c,
						subredditName: p
					}), Object(P.q)(r) ? a.a.createElement(B, {
						profileName: p,
						isOverlay: o || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: p,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: O
					}), a.a.createElement(u.a, {
						cardClassName: R.a.card,
						subredditId: c
					}), a.a.createElement(F, {
						className: R.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(A, {
						className: R.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(f.a, {
						subredditId: c
					}), k, n && b.map((e, t) => a.a.createElement(v.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(j.a, {
						subredditName: p,
						widget: e
					}))), r.isSponsored && a.a.createElement(v.a, null, a.a.createElement(E.a, null)), d && a.a.createElement(y.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), this.renderFooter(h++))
				}
			}
			t.a = U(V)
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/CommentsWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = "500px";
			class b extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						innerRef: i,
						shouldTruncateComments: l,
						numberOfComments: b,
						onClick: h
					} = this.props, g = l && !e, x = l ? m.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: h,
						ref: i
					}, o.a.createElement("div", {
						className: Object(r.a)(m.a.ContentWrapper, s, x),
						style: {
							"--commentswrapper-gradient-color": Object(c.a)(this.props).body,
							maxHeight: l ? u : "unset"
						}
					}, t), g && o.a.createElement(d.l, {
						className: m.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, p._("View Entire Discussion ({number of comments} Comments)", [p._param("number of comments", Object(a.b)(b))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(i.a)(b)
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/CrosspostRecommendationsModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "CrosspostRecommendationsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CrosspostRecommendationsModal").then(s.bind(null, "./src/reddit/components/CrosspostRecommendationsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CrosspostRecommendationsModal/index.tsx"
				}
			})
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, s) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const b = a.a.div("DistinguishWrapper", u.a),
				h = a.a.wrapped(m.a, "Inline", u.a),
				g = a.a.wrapped(c.a, "RadioOff", u.a),
				x = a.a.wrapped(l.a, "RadioOn", u.a),
				f = e => o.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(x, null) : o.a.createElement(g, null), e.text),
				C = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return o.a.createElement(b, {
						className: t,
						style: s
					}, o.a.createElement(f, {
						onClick: () => p(r.G.NONE, null),
						selected: !c && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(f, {
						onClick: () => p(r.G.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(f, {
						onClick: () => p(r.G.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(f, {
						onClick: () => p(r.G.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && o.a.createElement(f, {
						onClick: () => p(r.G.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var v = Object(d.a)(C);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: p
				}, o.a.createElement(v, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.G.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.G.ADMIN ? m("admin_distinguish") : a && e !== r.G.MODERATOR ? m("undistinguish") : s && e !== r.G.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let {
					participantsCount: t
				} = e;
				return m._({
					"*": "· {total participated users} players",
					_1: "· {total participated users} player"
				}, [m._param("total participated users", Object(l.b)(t)), m._plural(t)], {
					hk: "1yrPLH"
				})
			};
			var u = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					o = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(i.e)(e => Object(c.U)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == m ? void 0 : m.displayText), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, h._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, h._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && r.a.createElement(p, {
					participantsCount: s.totalParticipantsCount
				}), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, s.name))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const a = n && n.eventInfo,
					p = Object(l.a)(n),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(d.a, {
					post: n
				}), !p && h && o.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(c);
			var m = e => o.a.createElement("i", {
				className: Object(a.a)(Object(d.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var p = e => o.a.createElement("i", {
					className: Object(a.a)(Object(d.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				u = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = s.n(b),
				g = s("./src/lib/lessComponent.tsx");
			const x = g.a.span("PostEventFutureText", h.a),
				f = g.a.span("PostEventPastText", h.a),
				C = g.a.span("PostEventNowText", h.a),
				v = g.a.span("Container", h.a),
				O = g.a.wrapped(m, "CalendarIcon", h.a),
				E = g.a.wrapped(p, "LiveIcon", h.a),
				y = g.a.div("LoadingState", h.a);
			class j extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: a,
						eventStart: d
					} = s, c = Object(r.e)(d, n);
					let l, m;
					if (this.state.mounted || c === r.a.Live) l = o.a.createElement(u.c, {
						startTime: d,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = o.a.createElement(y, {
							className: e
						})
					}
					if (a) m = o.a.createElement(C, null, o.a.createElement(E, null), l);
					else if (c === r.a.Future) m = o.a.createElement(x, null, o.a.createElement(O, null), l);
					else {
						if (c !== r.a.Past) return null;
						m = o.a.createElement(f, null, o.a.createElement(O, null), l)
					}
					return o.a.createElement(v, {
						className: e
					}, m)
				}
			}
			t.a = j
		},
		"./src/reddit/components/ExpandedCrossposts/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/subredditDiscovery.ts");
			const d = Object(n.a)({
					resolved: {},
					chunkName: () => "ExpandedCrosspost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ExpandedCrosspost").then(s.bind(null, "./src/reddit/components/ExpandedCrossposts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ExpandedCrossposts/index.tsx"
					}
				}),
				c = e => {
					return Object(i.e)(a.a) ? r.a.createElement(d, e) : null
				}
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				x = s("./src/telemetry/models/Outbound.ts"),
				f = s("./src/reddit/components/ExpandoButton/index.m.less"),
				C = s.n(f);
			const v = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.bb)(Object(p.b)(t.permalink), t.id))
				})),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(d.a)(C.a.icon, C.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = v(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: p,
					post: h,
					toggle: f,
					useMediaIcons: v
				} = e, E = s || h, y = Object(i.e)(g.b), j = t => {
					y && (t.preventDefault(), e.showModalOnPostLinkClick(E))
				}, k = o && !!s;
				return E.media && !(("rtjson" === E.media.type || "text" === E.media.type || "liveaudio" === E.media.type) && !Object(u.a)(E)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: f
				}, p ? r.a.createElement(b.a, {
					name: "collapse",
					className: C.a.icon
				}) : v ? r.a.createElement(r.a.Fragment, null, O(E.media && E.media.type, k, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(C.a.icon, C.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: C.a.icon
				})) : E.source && E.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: E.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: l ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(E.permalink),
					rel: "nofollow",
					onClick: j
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: C.a.icon
				}))
			})
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: i,
					title: d,
					textWrapperClassName: m
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, o.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? o.a.createElement(c, null, n) : o.a.createElement(c, null), o.a.createElement(l, {
					className: m
				}, o.a.createElement("div", {
					className: a.a.title
				}, d), i && o.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => r.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.a.locked,
				icon: r.a.createElement(a.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: n.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: n.fbt._("This thread is archived", null, {
					hk: "kEcat"
				})
			})
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				p = s.n(m);
			const u = r.a.createElement(d.a, {
					className: p.a.lockIcon
				}),
				b = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

			function h(e) {
				let {
					subredditOrProfile: t
				} = e;
				const s = t ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", b(t) + t.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(l.a, {
					className: p.a.bannerBase,
					color: a.a.locked,
					icon: u,
					subtitle: n.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: s
				})
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trophy/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				m = s.n(l);
			const p = a.a.wrapped(c.a, "TrophyIcon", m.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, o = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(d.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(p, null),
					subtitle: o,
					title: n.fbt._("This post has contest mode enabled", null, {
						hk: "42oz5Q"
					})
				})
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = s.n(b);
			const g = r.a.createElement(m.a, {
					className: h.a.icon
				}),
				x = Object(a.c)({
					subreddit: p.x,
					subredditAboutInfo: p.u
				}),
				f = Object(i.b)(x);
			t.a = f(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const o = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || n.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(u.a, {
					className: h.a.container,
					color: c.a.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", r.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", o ? r.a.createElement(d.a, {
						className: h.a.rawHtmlDisplay,
						html: o
					}) : i, " ", r.a.createElement(l.a, {
						className: h.a.link,
						to: "/"
					}, n.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: n.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/ItemCarousel/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var n, o = s("./src/reddit/helpers/richTextJson/index.ts"),
				r = s("./src/reddit/models/Media/index.ts");
			! function(e) {
				e.POST = "post", e.SUBREDDIT = "subreddit", e.CROSSPOST = "crosspost"
			}(n || (n = {}));
			const i = /(?:reddit\.com\/r\/)(?<subreddit>[\w]+)(?:\/comments\/)?(?<postId>[\w]+)?/,
				a = e => {
					var t, s, a;
					if ((null == e ? void 0 : e.media) && Object(r.K)(e.media) && (null === (s = null === (t = e.media.richtextContent) || void 0 === t ? void 0 : t.document) || void 0 === s ? void 0 : s.length) > 0) {
						const t = Object(o.e)(e.media.richtextContent.document, !0);
						return 0 === t.length ? [] : null === (a = t.reduce) || void 0 === a ? void 0 : a.call(t, (e, t) => {
							var s;
							const {
								subreddit: o,
								postId: r
							} = (null === (s = t.match(i)) || void 0 === s ? void 0 : s.groups) || {};
							return r && o ? [...e, {
								id: `t3_${r}`,
								url: t,
								type: n.POST
							}] : o ? [...e, {
								id: o,
								url: t,
								type: n.SUBREDDIT
							}] : e
						}, [])
					}
					return []
				}
		},
		"./src/reddit/components/ItemCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				redditLinkCard: "_3cx1eazwYdVDDYc1dPyiR5",
				title: "_39Ml3ujYhKuR2k_LFpXVKI",
				shimmer: "_1ow4mWwRckO61gSLo-7v0b",
				crosspostTitle: "_22-ViNeyjOeL6ua8KDyKye",
				crosspostLinkCard: "_2iAbfa2D0rYH0bhwTONlI_",
				subredditLink: "_218c5HLOpg15zujvZOJ-jL",
				crosspostIcon: "_8rGN4GQ7vHLKekUlLRoHr",
				imageContainer: "_18r8N8O6-u5F1b97604EtU",
				thumbnailPlaceholder: "_1s2zQgETSy4lq4_Lx3sOZr",
				postDescription: "_12PklAY2VQxTTv7zYRGtFp",
				postStats: "_32BkJbsXEUbnRV8IdWALfx",
				separator: "_1sTUU46KrE7KfTGqDC-a29",
				carouselContainer: "_1rK-TdqBly0Ah1V-s2iNL4",
				constantWidth: "_13jkDfTREXT08dxlYnS8eF",
				flexWidth: "_3u_85Dp7oQMFiSQ4sLv1st",
				flexWidthTwoItems: "_3lv5cSLrhQNAMfRDhbY5yF",
				carouselTitle: "_2rN6AyQVzdFs8i43El1QF4",
				scrollIcon: "thm33nRT_QsxwagdC3y0O",
				carouselHeader: "_4keJkmF2kMGrQiCFuVyZP",
				carouselControls: "_2nzp90JhlrKYHbygwSg66",
				hasTitle: "_2g5PF1KCS_D1_wrxAataDQ",
				buttonWrapper: "_1FeNy7DyUXo50Xg6y7vYGE",
				scrollButton: "r6d8ZhiJGupMHDZ_VT92q",
				left: "_39XyIEf8_iPNJBEO56MJf-",
				right: "_2fa9qw7f4611Kfap-xuQAs",
				hidden: "_3y0dWvmqYpVeqdC-tWTBUc",
				itemsContainer: "WrOtvEVbiINAEhr1-6kip",
				large: "B_GPQ8fojjJzonrunPyKW",
				small: "q4_nxOUe2RNORWKR6Fyqc",
				subredditItem: "_3eJ3Vuzskg5QPjF0vWpWmv",
				subredditIcon: "_1atFEw7H5vpTJAn0fGBc_P",
				carouselContent: "_2rvSe7lZ7Qt5qCgXf_J0qB",
				bannerWrapper: "_1JhjjQQiHUTuMYhG1tGhPm",
				banner: "_3KgCrfIwPj-Tdwy64OBwWr",
				description: "_3V3hHaMDC4uZNCfwyBbz4g",
				lockup: "_24tuGHItai5L2nwJXdscK1",
				lockupText: "_1yYrDsHa8VjZpORJ4q0yYS",
				subredditName: "_1SXVDK7RjZdh5oUY2F-oQy",
				subscribersCount: "_1h7eV26RDHcql9mvKfi45C",
				contentWrapper: "rgoe5x8WumPeeNjIHn671",
				backgroundImage: "_23MqHKNvwrRo1D5A8ce1zw",
				subscribeButton: "_2sGQoRqSFOXnUrrQsZO3jK",
				blur: "_3kz2nO3JA6igVlQhzIq08X",
				flair: "BkSa7JPwUk1I4IglSRWbb",
				gradientAnimation: "_2KJPHlL6kS7WEhZRcgx8PN"
			}
		},
		"./src/reddit/components/ItemCarousel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/icons.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/subreddit/subredditCarousel.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/controls/ContentType/index.tsx"),
				f = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = s("./src/reddit/components/Flair/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts");
			var O = s("./src/reddit/models/Flair/index.ts"),
				E = s("./src/telemetry/index.ts"),
				y = s("./src/reddit/components/ItemCarousel/index.m.less"),
				j = s.n(y);
			const k = e => {
				let {
					postCard: t,
					post: s,
					className: o
				} = e;
				const {
					url: r,
					commentCount: i,
					createdAt: l,
					score: m,
					title: p,
					thumbnail: y,
					isNsfw: k,
					subreddit: _
				} = t, I = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && _ && Object(E.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "post_post",
						post: e,
						subreddit: t,
						...v.n(s)
					}))(s, _)(I))
				}, []);
				return d.a.createElement(f.a, {
					to: (null == r ? void 0 : r.replace(/^.*\/\/[^\/]+/, "")) || "",
					className: Object(n.a)(j.a.redditLinkCard, o),
					onClick: () => {
						Object(E.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "post_post",
							post: e,
							subreddit: t,
							...v.n(s)
						}))(s, _)(I))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == y ? void 0 : y.url) ? d.a.createElement("img", {
					src: y.url,
					className: Object(n.a)(k && j.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: j.a.postDescription
				}, d.a.createElement("div", null, d.a.createElement("div", {
					className: j.a.title
				}, p), k && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				})), d.a.createElement("div", {
					className: j.a.postStats
				}, m && d.a.createElement(d.a.Fragment, null, d.a.createElement("span", null, Object(h.b)(m), " ", u.fbt._("points", null, {
					hk: "3jOMNh"
				})), d.a.createElement("span", {
					className: j.a.separator
				}, "•")), i && d.a.createElement("span", null, Object(h.b)(i), " ", u.fbt._("comments", null, {
					hk: "2x1D6M"
				})), d.a.createElement("span", {
					className: j.a.separator
				}, "•"), l && d.a.createElement("span", null, Object(g.a)(new Date(l).getTime() / b.Sb, !0)))))
			};
			var _ = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				S = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				N = s("./src/reddit/icons/svgs/Crosspost/index.tsx");
			const L = e => {
				let {
					crosspostCard: t,
					post: s,
					className: o
				} = e;
				const {
					permalink: r,
					commentCount: i,
					title: l,
					thumbnail: m,
					isNsfw: p,
					subreddit: b
				} = t, h = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					s && b && Object(E.a)(Object(S.c)(s, b)(h))
				}, [s, b, h]);
				return d.a.createElement(f.a, {
					to: r,
					className: Object(n.a)(j.a.redditLinkCard, j.a.crosspostLinkCard, o),
					onClick: () => {
						Object(E.a)(Object(S.a)(s, b)(h))
					}
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.imageContainer)
				}, (null == m ? void 0 : m.url) ? d.a.createElement("img", {
					src: m.url,
					className: Object(n.a)(p && j.a.blur)
				}) : d.a.createElement(x.a, {
					type: "text",
					className: j.a.thumbnailPlaceholder
				})), d.a.createElement("div", {
					className: j.a.postDescription
				}, d.a.createElement("div", {
					className: j.a.postStats
				}, d.a.createElement(N.a, {
					className: j.a.crosspostIcon
				}), d.a.createElement(w.a, {
					to: null == b ? void 0 : b.path,
					onClick: e => {
						e.stopPropagation()
					},
					className: j.a.subredditLink
				}, `r/${null==b?void 0:b.name}`), d.a.createElement("span", {
					className: j.a.separator
				}, "•"), d.a.createElement("span", null, u.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [u.fbt._plural(i || 0, "number")], {
					hk: "3QAYMS"
				}))), d.a.createElement("div", {
					className: Object(n.a)(j.a.title, j.a.crosspostTitle)
				}, p && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				}), l)))
			};
			var T = d.a.memo(e => {
					let {
						className: t
					} = e;
					return d.a.createElement("div", {
						className: Object(n.a)(j.a.redditLinkCard, t)
					}, d.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.imageContainer)
					}), d.a.createElement("div", {
						className: j.a.postDescription
					}, d.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.title)
					}), d.a.createElement("div", {
						className: Object(n.a)(j.a.shimmer, j.a.postStats)
					})))
				}),
				M = s("./src/reddit/actions/subreddit.ts"),
				R = s("./src/reddit/components/SubscribeButton/index.tsx"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				A = s("./src/reddit/icons/svgs/CommunityDefault/filled.tsx");
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = e => {
				let {
					id: t,
					index: s,
					name: o,
					subscribersCount: r,
					description: i,
					primaryColor: l,
					icon: m,
					isSubscribed: u,
					banner: b,
					path: g,
					size: x,
					isDiscovery: f,
					post: y,
					className: k,
					isNsfw: _
				} = e;
				const I = Object(c.d)();
				Object(a.useEffect)(() => {
					I(Object(M.u)(o))
				}, [I, o]);
				const P = Object(c.e)(e => Object(p.S)(e, {
						subredditId: t
					})),
					S = Object(c.e)(e => e);
				Object(a.useEffect)(() => {
					y && P && f && Object(E.a)(((e, t) => s => ({
						source: "post_discovery",
						action: "view",
						noun: "community_post",
						post: e,
						subreddit: t,
						...v.n(s)
					}))(y, P)(S))
				}, []);
				const N = Object(a.useCallback)(e => {
					if (f) return (e => {
						let {
							noun: t,
							subredditId: s,
							index: n,
							source: o,
							...r
						} = e;
						return e => ({
							...r,
							source: o,
							noun: t,
							actionInfo: {
								reason: `${n}`
							},
							subreddit: Object(p.S)(e, {
								subredditId: s
							})
						})
					})({
						action: "click",
						post: y,
						noun: e ? "unsubscribe" : "subscribe",
						subredditId: t,
						index: s,
						source: "post_discovery"
					})
				}, [t, s, u]);
				return d.a.createElement("div", {
					className: Object(n.a)(j.a.subredditItem, null === j.a || void 0 === j.a ? void 0 : j.a[x], k)
				}, d.a.createElement("div", {
					className: j.a.contentWrapper
				}, d.a.createElement("div", {
					className: j.a.bannerWrapper,
					style: {
						backgroundColor: l || void 0
					}
				}, d.a.createElement("img", {
					className: j.a.banner,
					src: b || void 0
				})), d.a.createElement("div", {
					className: j.a.carouselContent
				}, d.a.createElement(w.a, {
					to: g,
					className: j.a.lockup,
					onClick: () => {
						f && Object(E.a)(((e, t) => s => ({
							source: "post_discovery",
							action: "click",
							noun: "community_post",
							post: e,
							subreddit: t,
							...v.n(s)
						}))(y, P)(S))
					}
				}, d.a.createElement("div", {
					style: "small" === x ? {
						backgroundColor: "grey",
						backgroundImage: `url(${b||""})`
					} : {},
					className: j.a.backgroundImage
				}, m ? d.a.createElement("img", {
					src: m,
					className: j.a.subredditIcon
				}) : d.a.createElement(A.a, {
					className: j.a.subredditIcon
				})), d.a.createElement("div", {
					className: j.a.lockupText
				}, d.a.createElement("span", {
					className: j.a.subredditName
				}, "r/", o), " ", _ && d.a.createElement(C.b, {
					isFlairFilter: !0,
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					},
					className: j.a.flair
				}), d.a.createElement("span", {
					className: j.a.subscribersCount
				}, B._({
					"*": "{number} members",
					_1: "1 member"
				}, [B._plural(r, "number", Object(h.b)(r))], {
					hk: "4yqFU9"
				})))), d.a.createElement("p", {
					className: j.a.description
				}, i)), d.a.createElement(R.a, {
					className: j.a.subscribeButton,
					identifier: {
						name: o,
						type: "subreddit"
					},
					getEventFactory: N,
					priority: F.c.Tertiary,
					small: !0
				})))
			};

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = e => {
				var t, s;
				const n = null === (s = null === (t = e.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
				return n ? Math.floor(e.clientWidth / n) : 0
			}, H = Object(P.c)(e => {
				let {
					title: t,
					className: s,
					itemIds: r,
					size: u = "large",
					hasSubredditNames: b = !1,
					hasPostIds: h = !1,
					isDiscovery: g,
					post: x
				} = e;
				const f = Object(c.d)(),
					[C, v] = Object(a.useState)(null),
					[O, E] = Object(a.useState)(null),
					[y, P] = Object(a.useState)({
						left: !1,
						right: !0
					}),
					[w, S] = Object(a.useState)(0),
					[N] = Object(a.useState)(void 0),
					{
						subredditIds: M,
						crosspostIds: R,
						postIds: F,
						postUrls: A
					} = Object(a.useMemo)(() => r.reduce((e, t) => {
						let {
							type: s,
							id: n,
							url: o
						} = t;
						switch (s) {
							case I.a.SUBREDDIT:
								e.subredditIds.push(n.toLowerCase());
								break;
							case I.a.POST:
								o && (e.postUrls[n] = o), e.postIds.push(n);
								break;
							case I.a.CROSSPOST:
								e.crosspostIds.push(n)
						}
						return e
					}, {
						subredditIds: [],
						postIds: [],
						crosspostIds: [],
						postUrls: {}
					}), [r]),
					B = Object(c.e)(e => Object(p.y)(e, M)),
					V = Object(c.e)(e => Object(_.L)(e, F)),
					H = Object(c.e)(e => Object(_.L)(e, R)),
					q = B.reduce((e, t) => (e[b ? t.name.toLocaleLowerCase() : t.id] = t, e), {}),
					G = V.reduce((e, t) => (e[t.id] = t, e), {}),
					K = H.reduce((e, t) => (e[t.id] = t, e), {});
				Object(a.useEffect)(() => {
					((null == M ? void 0 : M.length) || F.length || R.length) && f(Object(l.e)(M, b, M, h, [...R, ...F]))
				}, [M, R, F, f, h, b]);
				const Q = r.filter((e, t, s) => t === s.findIndex(t => t.id === e.id)).reduce((e, t) => {
						let {
							type: s,
							id: n
						} = t;
						switch (s) {
							case I.a.SUBREDDIT:
								const t = null == q ? void 0 : q[n.toLowerCase()];
								if (!t || !g && t.isNsfw || !g && t.isSubscribed) break;
								e.push({
									type: s,
									props: t
								});
								break;
							case I.a.POST:
								const o = null == G ? void 0 : G[n];
								if (!o) break;
								e.push({
									type: s,
									props: o
								});
								break;
							case I.a.CROSSPOST:
								const r = null == K ? void 0 : K[n];
								if (!r) break;
								e.push({
									type: s,
									props: r
								})
						}
						return e
					}, []),
					Y = e => () => {
						var t, s;
						if (!O) return;
						const n = null === (s = null === (t = null == O ? void 0 : O.firstChild) || void 0 === t ? void 0 : t.getBoundingClientRect()) || void 0 === s ? void 0 : s.width;
						if (!n) return;
						const o = (Math.sign(e) ? O.scrollLeft % n : n % O.scrollLeft) || 0,
							r = n * e - o;
						O.scrollBy({
							left: r,
							behavior: "smooth"
						})
					},
					z = Object(a.useCallback)(() => {
						if (!O) return;
						const {
							width: e
						} = null == O ? void 0 : O.getBoundingClientRect(), t = (null == O ? void 0 : O.scrollLeft) > 0, s = (null == O ? void 0 : O.scrollLeft) < O.scrollWidth - e;
						0 === (null == O ? void 0 : O.scrollLeft) && O.scrollWidth - e == 0 || P({
							left: t,
							right: s
						})
					}, [O]);
				Object(a.useEffect)(() => {
					if (!C || !O) return;
					const e = i()(() => {
						const e = W(O);
						S(e)
					}, 30);
					window.addEventListener("resize", e);
					const t = W(O);
					return S(t), z(), () => {
						window.removeEventListener("resize", e)
					}
				}, [C, O, z, w, Q.length]);
				const J = () => 1 === Q.length ? j.a.flexWidth : 2 === Q.length ? j.a.flexWidthTwoItems : j.a.constantWidth;
				return d.a.createElement("div", {
					ref: v,
					className: Object(n.a)(j.a.carouselContainer, s, null === j.a || void 0 === j.a ? void 0 : j.a[u])
				}, d.a.createElement("div", {
					className: j.a.carouselHeader,
					style: {
						width: N
					}
				}, d.a.createElement("h3", {
					className: j.a.carouselTitle
				}, t)), d.a.createElement("div", {
					ref: E,
					onScroll: z,
					className: Object(n.a)(j.a.itemsContainer, null === j.a || void 0 === j.a ? void 0 : j.a[u]),
					style: {
						width: N
					}
				}, !Q.length && Array(3).fill(!0).map((e, t) => d.a.createElement(T, {
					key: t,
					className: J()
				})), null == Q ? void 0 : Q.map((e, t) => {
					let {
						type: s,
						props: n
					} = e;
					var o, r, i;
					switch (s) {
						case I.a.SUBREDDIT:
							const e = n;
							return d.a.createElement(D, U({
								className: J(),
								index: t + 1,
								size: u,
								banner: null === j.a || void 0 === j.a ? void 0 : j.a.bannerBackgroundImage,
								icon: (null === (o = null == e ? void 0 : e.styles) || void 0 === o ? void 0 : o.icon) || (null === (i = null === (r = e.styles) || void 0 === r ? void 0 : r.legacyIcon) || void 0 === i ? void 0 : i.url),
								key: `${null==e?void 0:e.name}:${t}`,
								isDiscovery: !0,
								post: x
							}, e));
						case I.a.POST:
							const s = n;
							return d.a.createElement(k, {
								postCard: {
									...s,
									url: A[s.id]
								},
								className: J(),
								post: x
							});
						case I.a.CROSSPOST:
							const a = n;
							return d.a.createElement(L, {
								crosspostCard: {
									...a
								},
								className: J(),
								post: x
							});
						default:
							return null
					}
				})), Q.length > 2 && d.a.createElement("div", {
					className: Object(n.a)(j.a.carouselControls, {
						[j.a.hasTitle]: !!t
					})
				}, d.a.createElement("div", {
					className: Object(n.a)(j.a.buttonWrapper, j.a.left, {
						[j.a.hidden]: !y.left
					})
				}, d.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Y(-w)
				}, d.a.createElement(m.a, {
					name: o.a.left_fill,
					className: j.a.scrollIcon
				}))), d.a.createElement("div", {
					className: Object(n.a)(j.a.buttonWrapper, j.a.right, {
						[j.a.hidden]: !y.right
					})
				}, d.a.createElement("button", {
					className: j.a.scrollButton,
					onClick: Y(w)
				}, d.a.createElement(m.a, {
					name: o.a.right_fill,
					className: j.a.scrollIcon
				})))))
			});
			t.a = H
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: n,
					...r
				} = e, c = Object(a.b)(n);
				return o.a.createElement(i.a, d({
					className: s,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, n = t ? c : r.a;
				return o.a.createElement(n, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				o = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(n.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/hooks/useIsClient.ts"),
				u = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/components/MediumPost/index.m.less"),
				h = s.n(b);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: b,
					shouldShowSubscribeButton: g,
					subredditOrProfile: x,
					templatePlaceholderImage: f,
					shouldShowFollowButton: C,
					isFollowed: v,
					isCommentsPage: O,
					onFollowPostClick: E
				} = e;
				return Object(p.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: C || g
					})
				}, o.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, C && o.a.createElement(a.a, {
					isFilled: !!v,
					onClick: E,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), g && x && o.a.createElement(d.a, {
					className: h.a.subscribeButton,
					getEventFactory: e => Object(m.h)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: x.name,
						type: Object(u.h)(x) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), o.a.createElement(c.a, {
					crosspost: t,
					isCommentsPage: O,
					post: s,
					redditStyle: b,
					forceShowNSFW: n,
					templatePlaceholderImage: f
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
			}
		},
		"./src/reddit/components/ModProgressModule/index.m.less": function(e, t, s) {
			e.exports = {
				ThemedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				themedWidget: "tz3-IX6gYrZlbiZWRw5jD",
				completed: "_2B0VV6SdB2XjjxadViz15Q",
				tooltipIsActive: "_28uNH-IBuxe83YxCxYlnOb",
				ModuleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				moduleTitle: "_2aJs6bbECHiAGoO2WTwYa7",
				ModSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				modSettingsIcon: "zi2IcHQ6-qpSGsOzDk6Su",
				headerButtonsContainer: "_2_EnVDjbXLqtMoZxrXfqFD",
				ChevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				chevronIcon: "wUVzkQ_WMwTxwYbvR50Yb",
				ProgressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				progressContainer: "_1oJUEnPSqSbY1munC3h7_E",
				ProgressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressDescription: "_1TqN8-iakaWhtZvgpUaWAj",
				progressCount: "_3zufL-ajBszVrFsqSo1RVV",
				progressText: "_2qiL_cOXT9k5zDizfDNl9",
				darkFont: "_3pebDR2YBVgOVPtes2otJ",
				Description: "_1--LMLAxYX0l9LaibrBWVc",
				description: "_1--LMLAxYX0l9LaibrBWVc",
				CloseButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				closeButton: "_1ODkNuC8Nwwbdi1XywFOpi",
				CardContainer: "_2YShnlNvvx9BkckLObKkwD",
				cardContainer: "_2YShnlNvvx9BkckLObKkwD",
				Card: "_-lU3INdzFYlY4zni0Pss",
				card: "_-lU3INdzFYlY4zni0Pss",
				unclickable: "_2LyLq46VyzgH6SYt5kWKmL",
				ContentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				contentContainer: "_2k3Vset5R9ftXzEIKyA8ll",
				IconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				iconContainer: "_3TqMO0quYw9KoVrQmpcHYp",
				CheckIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				checkIcon: "_3aOKPfcH1CkkyC4FOUcPkx",
				Icon: "QNbSE3fPPc1M8MakLm1Bi",
				icon: "QNbSE3fPPc1M8MakLm1Bi",
				CardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				cardTitle: "_1Q0pYNzV9Pmz1VXWG1DO3p",
				Title: "_2GyfJdanPW5aCT405tuR0i",
				title: "_2GyfJdanPW5aCT405tuR0i",
				overflowButton: "GFzLxcAwA3BPE4dxI-d4W",
				imageUploader: "_2EJWiSLsB96D6FOsAajSH-"
			}
		},
		"./src/reddit/components/ModProgressModule/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				m = s("./src/reddit/actions/subreddit/questions.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/ModWelcomeTooltip/index.tsx"),
				b = s("./src/reddit/components/ModWelcomeTooltip/async.tsx"),
				h = s("./src/reddit/components/NewCommunityProgress/icons/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/ImageInput/index.tsx"),
				O = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				E = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				k = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				_ = s("./src/reddit/models/ApiRequestState/index.ts"),
				I = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				P = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/ModProgressModule/index.m.less"),
				N = s.n(S);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = (e, t, s) => {
				let {
					id: n,
					title: r,
					iconIdentifier: i
				} = e;
				const a = h.b[i];
				return o.a.createElement("div", {
					className: Object(d.a)(N.a.Card, {
						[N.a.unclickable]: t
					}),
					key: n,
					onClick: e => {
						e.stopPropagation(), !t && s()
					}
				}, o.a.createElement("span", {
					className: N.a.ContentContainer
				}, o.a.createElement("span", {
					className: Object(d.a)(N.a.IconContainer, {
						[N.a.completed]: t
					})
				}, t ? o.a.createElement(y.a, {
					name: "checkmark",
					className: N.a.CheckIcon
				}) : o.a.createElement(y.a, {
					name: a,
					className: N.a.Icon
				})), o.a.createElement("span", {
					className: N.a.CardTitle
				}, r)))
			}, M = Object(a.c)({
				isTooltipOpen: e => Object(w.a)(e) === u.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: P.c
			});
			class R extends o.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(_.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => o.a.createElement(v.a, {
						className: N.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: this.onChangeIconFileInput
					}), this.onOpenIconUploadScreen = () => this.inputRef && this.inputRef.click(), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(E.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(E.b)(e, t))
				}
				render() {
					var e, t, s, n, r;
					const {
						isTooltipOpen: i,
						onCompleteModule: a,
						onTopBarClicked: c,
						progressModuleRecords: l,
						subredditId: m,
						subredditName: p
					} = this.props, h = l && l[m];
					if (!h) return o.a.createElement(x.a, {
						className: N.a.ThemedWidget,
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, o.a.createElement(k.a, {
							className: N.a.ChevronIcon
						})),
						title: o.a.createElement("div", {
							className: N.a.ModuleTitle
						}, o.a.createElement(j.a, {
							className: N.a.ModSettingsIcon
						}), L._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName,
						onClick: c
					});
					const g = (null === (e = null == h ? void 0 : h.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == h ? void 0 : h.progress) || void 0 === t ? void 0 : t.total),
						f = 0 === (null === (s = h.progress) || void 0 === s ? void 0 : s.done);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
						className: Object(d.a)(N.a.ThemedWidget, {
							[N.a.completed]: g,
							[N.a.tooltipIsActive]: i
						}),
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: N.a.headerButtonsContainer
						}, o.a.createElement(k.a, {
							className: N.a.ChevronIcon
						})),
						id: u.MOD_WELCOME_TOOLTIP_ID,
						onHeaderClick: c,
						title: o.a.createElement("div", {
							className: N.a.ModuleTitle
						}, o.a.createElement(j.a, {
							className: N.a.ModSettingsIcon
						}), L._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: N.a.titleClassName
					}, o.a.createElement("div", {
						className: N.a.ProgressContainer
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: N.a.Title
					}, g ? L._("Well done, you're set up!", null, {
						hk: "3sJd9H"
					}) : L._("Set up r/{subredditName}", [L._param("subredditName", p)], {
						hk: "3SHelG"
					})), o.a.createElement("div", {
						className: N.a.ProgressDescription
					}, o.a.createElement("span", {
						className: N.a.progressCount
					}, L._("{cardsComplete} of {totalCards}", [L._param("cardsComplete", null === (n = h.progress) || void 0 === n ? void 0 : n.done), L._param("totalCards", null === (r = h.progress) || void 0 === r ? void 0 : r.total)], {
						hk: "1gMzOE"
					})), " ", o.a.createElement("span", {
						className: Object(d.a)(N.a.progressText, {
							[N.a.darkFont]: f
						})
					}, L._("tasks completed", null, {
						hk: "DxeNq"
					}))), f && o.a.createElement("div", {
						className: N.a.Description
					}, L._("Get your community off the ground with these tasks", null, {
						hk: "3n0h53"
					})))), !g && o.a.createElement("div", {
						className: N.a.CardContainer
					}, h.cards.map(e => {
						const t = e.status === I.a.COMPLETED;
						return T(e, t, () => this.onClickCard(h, e.id))
					})), g && o.a.createElement(C.t, {
						className: N.a.CloseButton,
						onClick: a,
						priority: C.c.Tertiary
					}, L._("Close", null, {
						hk: "3UZAZk"
					})), o.a.createElement(b.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const F = Object(r.b)(M, (e, t) => ({
				onCompleteModule: () => e(Object(O.c)(t.subredditId, I.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(f.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(p.h)({
					tooltipId: u.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, n) => {
					e(Object(l.a)(t.subredditId, s, n)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = F(Object(g.c)(R))
		},
		"./src/reddit/components/ModWelcomeTooltip/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ModWelcomeTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/ModWelcomeTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModWelcomeTooltip/index.tsx"
				}
			})
		},
		"./src/reddit/components/NewCommentPill/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const i = Object(n.a)({
					resolved: {},
					chunkName: () => "NewCommentPill",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("NewCommentPill").then(s.bind(null, "./src/reddit/components/NewCommentPill/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/NewCommentPill/index.tsx"
					}
				}),
				a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: c,
						tooltipText: m,
						className: p
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_1H6_lZclv3OiOYYLJ3oAEN",
				BlockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockIcon: "_3XxN6-i7j-QnWYRDuXOG5a",
				blockedAuthorTextWrapper: "m2v6rWFRpijpyTUSArDdl",
				expandButton: "_1elWTUH22waxJo7g8N3y3J"
			}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(d.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				C = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(v);
			const E = Object(u.a)(() => Object(r.c)({
				basePixelMetadata: Object(f.a)((e, t) => {
					let {
						post: s
					} = t;
					return Object(h.b)(e, s.id)
				}),
				clickTrackingId: (e, t) => {
					let {
						post: s
					} = t;
					return s.id
				},
				imageGalleryCurrentItem: (e, t) => {
					let {
						post: s
					} = t;
					return Object(h.i)(e, {
						postId: s.id
					})
				},
				pageType: e => Object(g.d)(e).pageType
			}));
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: l,
						onClick: p,
						pageType: u,
						sendEvent: h,
						style: g,
						ref: f,
						shouldAddGalleryViewability: C = !0
					} = this.props, v = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: f,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => p && p(s, l, t, r, u))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && h(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(O.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, s), E = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || E ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, v) : l.media && Object(b.E)(l.media) && C ? o.a.createElement(m, {
						postId: l.id
					}, v) : v
				}
			}
			t.a = E(Object(C.a)(Object(p.c)(y)))
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				adLinkWrapper: "_3SVc61tFn_bE8SioJlUB-J",
				classicThumbnail: "_1FHUoxLVcplbcdYoOYbzlq",
				classicNotificationButton: "_3PPSzlne0JO99X7TQkgRgN",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				VideoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				videoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0",
				modModeBannerWrapper: "_2TM2Nmy6QisWK1nerxy26v"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return Nt
			})), s.d(t, "b", (function() {
				return Lt
			})), s.d(t, "a", (function() {
				return Tt
			}));
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/pubsub/index.ts"),
				h = s("./src/lib/timeAgo/index.ts"),
				g = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				f = s("./src/reddit/models/User/index.ts"),
				C = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/components/ItemCarousel/index.tsx"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				I = s("./node_modules/lodash/find.js"),
				P = s.n(I),
				w = s("./node_modules/react-motion/lib/react-motion.js");
			const S = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				N = "expando_content",
				L = {},
				T = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = P()(e, {
							key: N
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: N,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: N,
						style: {
							opacity: Object(w.spring)(1, S)
						}
					}] : [{
						key: N,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: N,
						style: {
							opacity: Object(w.spring)(0, S)
						}
					}]
				};
			class M extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), L), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: n
					} = this.props;
					return i.a.createElement(w.TransitionMotion, {
						styles: e => T(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var R = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/models/Post/index.ts"),
				A = s("./src/reddit/models/Vote/index.ts"),
				B = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				U = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				V = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/postCreations.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				q = s("./src/reddit/selectors/showPromotedCTA.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				K = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Q = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				Y = s("./src/reddit/components/AwardBadges/index.tsx"),
				z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				J = s("./src/reddit/components/Econ/Audio/async.ts"),
				X = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				Z = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				$ = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				ee = s("./src/reddit/components/ExpandoButton/index.tsx"),
				te = s("./src/reddit/components/FlairWrapper/index.tsx"),
				se = s("./src/reddit/components/Flatlist/index.tsx"),
				ne = s("./src/reddit/components/ItemCarousel/helpers.ts"),
				oe = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				re = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				ie = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				ae = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				de = s("./src/reddit/components/ModModeReports/index.tsx"),
				ce = s("./src/reddit/components/ModModeReports/helpers.ts"),
				le = s("./src/reddit/components/NotificationButton/index.tsx"),
				me = s("./src/reddit/components/PostContainer/index.tsx"),
				pe = s("./src/higherOrderComponents/makeAsync.tsx"),
				ue = s("./src/lib/loadWithRetries/index.ts"),
				be = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const he = Object(pe.a)({
				ErrorComponent: () => i.a.createElement(be.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ue.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(be.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var ge = e => i.a.createElement(he, e),
				xe = s("./src/reddit/components/PostList/index.tsx"),
				fe = s("./src/reddit/components/PostMedia/index.tsx"),
				Ce = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ve = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Oe = s("./src/reddit/components/PostTitle/index.tsx"),
				Ee = s("./src/reddit/components/PostTopLine/index.tsx"),
				ye = s("./src/reddit/components/PostTopMeta/index.tsx"),
				je = s("./src/reddit/components/SourceLink/index.tsx"),
				ke = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_e = s("./src/reddit/components/UsersCountIndicator/async.tsx"),
				Ie = s("./src/reddit/constants/componentSizes.ts"),
				Pe = s("./src/reddit/constants/componentTestIds.ts"),
				we = s("./src/reddit/constants/postLayout.ts"),
				Se = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Ne = s("./src/reddit/helpers/postEvent.ts"),
				Le = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				Te = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Me = s("./src/reddit/selectors/postFlair.ts"),
				Re = s("./src/reddit/models/Audio/index.ts"),
				Fe = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Ae = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Be = s("./src/reddit/constants/experiments.ts"),
				De = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ue = s("./src/reddit/selectors/experiments/presence.ts");
			const Ve = e => {
					return Object(De.c)(e, {
						experimentEligibilitySelector: De.a,
						experimentName: Be.wf
					}) === Be.ld
				},
				We = e => {
					if (Object(Ue.a)(e)) return !1;
					return Object(De.c)(e, {
						experimentEligibilitySelector: De.a,
						experimentName: Be.vf
					}) === Be.ld
				},
				He = (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(H.G)(e, {
						postId: s
					});
					return !(Object(Ue.a)(e) || !n || n.isSponsored) && Object(De.c)(e, {
						experimentEligibilitySelector: De.a,
						experimentName: Be.uf
					}) === Be.ld
				};
			var qe = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Ge = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ke = s("./src/reddit/constants/colors.ts"),
				Qe = s("./src/reddit/icons/fonts/index.tsx"),
				Ye = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				ze = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Je = s.n(ze);
			const Xe = i.a.createElement(Qe.a, {
				className: Je.a.BlockIcon,
				name: "block"
			});
			var Ze = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Ye.a, {
						className: Je.a.bannerBase,
						color: Ke.a.dayModeActionIcon,
						icon: Xe,
						title: Ge.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Je.a.expandButton,
							onClick: t
						}, Ge.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Je.a.blockedAuthorTextWrapper
					})
				},
				$e = s("./src/config.ts"),
				et = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				tt = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				st = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				nt = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				ot = s.n(nt);
			const {
				fbt: rt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), it = () => rt._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [rt._param("=User Agreement", i.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, rt._("User Agreement", null, {
				hk: "3MHgRl"
			}))), rt._param("=Content Policy", i.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, rt._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), at = () => rt._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [rt._param("=User Agreement", i.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, rt._("User Agreement", null, {
				hk: "yMHtU"
			}))), rt._param("=Content Policy", i.a.createElement("a", {
				className: ot.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, rt._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var dt = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: o
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return rt._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case F.g.Author:
							return rt._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case F.g.AuthorDeleted:
							return rt._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case F.g.AutomodFiltered:
							return rt._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case F.g.CommunityOps:
							return rt._("This post was removed by Reddit admin, u/{username}.", [rt._param("username", t)], {
								hk: "34nHWu"
							});
						case F.g.ContentTakedown:
							return rt._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case F.g.CopyrightTakedown:
							return rt._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case F.g.Moderator:
							return rt._("This post was removed by r/{subredditName} moderator, u/{username}.", [rt._param("subredditName", s), rt._param("username", t)], {
								hk: "270bcn"
							});
						case F.g.Reddit:
							return rt._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return rt._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(n, s, o) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return rt._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case F.g.Author:
							return rt._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case F.g.AuthorDeleted:
							return rt._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case F.g.AutomodFiltered:
							return rt._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case F.g.CommunityOps:
							return rt._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case F.g.ContentTakedown:
							return rt._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case F.g.CopyrightTakedown:
							return rt._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case F.g.Moderator:
							return rt._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [rt._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case F.g.Reddit:
							return rt._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return rt._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(n, o), a = t ? (e => {
					switch (e) {
						case F.g.AntiEvilOps:
							return i.a.createElement(it, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return rt._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case F.g.AutomodFiltered:
							return rt._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case F.g.CommunityOps:
							return rt._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [rt._param("=just ask", i.a.createElement("a", {
								className: ot.a.link,
								href: `${$e.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, rt._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case F.g.ContentTakedown:
							return i.a.createElement(at, null);
						case F.g.CopyrightTakedown:
							return rt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case F.g.Moderator:
							return rt._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case F.g.Reddit:
							return rt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return rt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(n) : ((e, t) => {
					switch (e) {
						case F.g.AntiEvilOps:
							return i.a.createElement(it, null);
						case F.g.AuthorDeleted:
						case F.g.Author:
							return rt._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case F.g.AutomodFiltered:
							return rt._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [rt._param("=[subreddit name]", i.a.createElement("a", {
								className: ot.a.link,
								href: `${$e.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, rt._("{subreddit name}", [rt._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case F.g.CommunityOps:
							return rt._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case F.g.ContentTakedown:
							return i.a.createElement(at, null);
						case F.g.CopyrightTakedown:
							return rt._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case F.g.Moderator:
							return rt._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case F.g.Reddit:
						default:
							return rt._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(n, o), d = t ? Ke.a.warning : Ke.a.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case F.g.AntiEvilOps:
						case F.g.AutomodFiltered:
						case F.g.CommunityOps:
						case F.g.ContentTakedown:
						case F.g.CopyrightTakedown:
						case F.g.Reddit:
							t = et.a;
							break;
						case F.g.AuthorDeleted:
						case F.g.Author:
							t = st.b;
							break;
						case F.g.Moderator:
							t = tt.a;
							break;
						default:
							t = et.a
					}
					return i.a.createElement(t, {
						className: ot.a.icon
					})
				})(n);
				return i.a.createElement(Ye.a, {
					className: ot.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function ct(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(dt, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var lt = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				mt = s("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				pt = s("./src/reddit/actions/modal.ts"),
				ut = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				bt = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				ht = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				gt = s("./src/reddit/components/PostUnavailableBanner/index.m.less"),
				xt = s.n(gt);
			const ft = i.a.createElement(Qe.a, {
				className: xt.a.RemoveIcon,
				name: "delete_fill"
			});
			var Ct = () => i.a.createElement(Ye.a, {
					className: xt.a.bannerBase,
					color: Ke.a.dayModeActionIcon,
					icon: ft,
					title: Ge.fbt._("Sorry, this post is no longer available.", null, {
						hk: "sb8eO"
					})
				}),
				vt = s("./src/reddit/components/PostContent/index.m.less"),
				Ot = s.n(vt);
			const {
				fbt: Et
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yt = u.a.wrapped(Oe.c, "PostTitle", Ot.a), jt = u.a.wrapped(ee.a, "ExpandoButton", Ot.a), kt = u.a.wrapped(M, "ClassicExpandoMotion", Ot.a), _t = u.a.wrapped(se.c, "FullWidthFlatlist", Ot.a), It = i.a.createElement("p", {
				className: Ot.a.VideoProcessingStatus
			}, Et._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), Pt = Object(Se.u)({
				isCommentsPage: Se.x,
				pageLayer: e => e
			}), wt = Object(a.b)(() => Object(l.c)({
				activeModalId: B.a,
				flairStyleTemplate: Se.V,
				currentUser: G.k,
				crosspost: H.d,
				hideNSFWPref: G.F,
				imageGalleryCurrentItem: H.i,
				isAdminOrMod: (e, t) => {
					const s = Object(H.U)(e, {
						postId: t.postId
					});
					return !!s && Object(U.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: H.l,
				isExpanded: H.m,
				isFollowed: H.t,
				isFollowedExpired: H.o,
				showPromotedCTA: q.a,
				post: H.G,
				moderatorPermissions: V.m,
				modModeEnabled: Se.T,
				shouldTryToShowCrosspostModal: bt.e,
				showAwardsPlaque: D.a,
				showEditFlair: Me.a,
				subredditOrProfile: H.U,
				isEditing: W.M,
				userIsOp: G.Db,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ae.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Ae.c)(e, {
					postId: t.postId
				}),
				isReadingIndicatorsExperimentEnabled: He,
				isReadingIndicatorsReadTestEnabled: We,
				isReadingIndicatorsWriteTestEnabled: Ve,
				isTrueblockPCBlockeeEnabled: Te.c,
				isTypingIndicatorsExperimentEnabled: qe.b,
				isTypingIndicatorsReadTestEnabled: qe.c
			}), (e, t) => {
				let {
					pageLayer: s,
					postId: n
				} = t;
				return {
					onIgnoreReports: () => e(Object(g.gb)(n)),
					onOpenReportsDropdown: t => e(Object(_.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const s = t === A.a.upvoted ? Object(g.kb)(n) : Object(g.w)(n);
						e(s)
					},
					fireAdPixelsOfType: (t, s) => e(Object(g.z)(t, s)),
					openPost: t => e(Object(g.L)(t)),
					onFollowPost: t => e(Object(g.jb)(n, t)),
					onFollowPostExpired: () => e(Object(g.Y)({
						id: n,
						expiresAt: 0
					}))
				}
			}), St = e => e.media && e.media.type === R.o.EMBED && e.media.provider === R.v.Imgur && e.media.height > 700, Nt = new b.a, Lt = "VISIBLE", Tt = "NOT_VISIBLE", Mt = e => Nt.publish(e ? Lt : Tt), Rt = {
				threshold: [.85, .001],
				rootMargin: `${1-Ie.f}px 0px 0px 0px`
			}, Ft = e => {
				for (const t of e) {
					const {
						intersectionRatio: e
					} = t;
					e >= .85 && Mt(!1), e <= .001 && Mt(!0)
				}
			}, At = u.a.wrapped(d.a, "ThumbLink", Ot.a), Bt = e => {
				let {
					post: t,
					templatePlaceholderImage: s,
					shouldShowFollowButton: n,
					isFollowed: o,
					onFollowPostClick: r
				} = e;
				const a = t.source ? i.a.createElement(z.a, {
					post: t,
					forceShowNSFW: !0,
					templatePlaceholderImage: s
				}) : i.a.createElement(At, {
					to: Object(E.b)(t.permalink)
				}, i.a.createElement(z.a, {
					post: t,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: Ot.a.classicThumbnail
				}, n && i.a.createElement(le.a, {
					className: Ot.a.classicNotificationButton,
					isFilled: !!o,
					onClick: r,
					hasTooltip: !0,
					tooltipText: Et._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), a)
			}, Dt = e => {
				let {
					post: t,
					isExpanded: s,
					scrollerItemRef: n
				} = e;
				return i.a.createElement(kt, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(fe.a, {
						className: Ot.a.ClassicPostMedia,
						isListing: !1,
						isNotCardView: !0,
						post: t,
						shouldLoad: !0,
						showFull: !0,
						showCentered: !0,
						scrollerItemRef: n
					})),
					shouldExpand: !!s
				})
			};
			t.c = Pt(wt(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: u,
					hideNSFWPref: b,
					imageGalleryCurrentItem: g,
					isAdminOrMod: E,
					isCommentCountAnimation: _,
					isCommentsPage: I,
					isCountAnimShadowTestEnabled: P,
					isCrosspostRecommendationsExperimentEnabled: w,
					isCurrentUserProfilePost: S,
					isEditing: N,
					isExpanded: L,
					isFollowed: T,
					isFollowedExpired: M,
					isModWithUserNotesPermissions: A,
					isOverlay: B,
					isReadingIndicatorsExperimentEnabled: D,
					isReadingIndicatorsReadTestEnabled: U,
					isReadingIndicatorsWriteTestEnabled: V,
					isTypingIndicatorsExperimentEnabled: W,
					isTypingIndicatorsReadTestEnabled: H,
					isVoteCountAnimation: q,
					moderatorPermissions: G,
					modModeEnabled: z,
					onFollowPost: ee,
					onFollowPostExpired: le,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					openPost: be,
					onVoteClick: he,
					post: Ie,
					scrollerItemRef: Se,
					sendEvent: Me,
					shouldTryToShowCrosspostModal: Ae,
					showAwardsPlaque: Be,
					showEditFlair: De,
					showPromotedCTA: Ue,
					subredditOrProfile: Ve,
					userIsOp: We,
					isTrueblockPCBlockeeEnabled: He,
					pageLayer: qe
				} = e, Ge = Object(ke.b)(), Ke = Object(r.useRef)(null), [Qe, Ye] = Object(r.useState)(Ie.authorIsBlocked), ze = Object(R.J)(Ie), Je = Object(a.e)(e => Object(Te.a)(e)), Xe = Object(c.a)(Ie), $e = D || W, et = $e || U || V || H;
				Object(r.useEffect)(() => {
					M && le()
				}, []);
				const tt = Object(a.d)(),
					st = Object(r.useRef)(null);
				Object(r.useEffect)(() => {
					if (w && Ae) return tt(Object(mt.a)(Ie)), st.current = setTimeout(() => {
						tt(Object(pt.h)(ut.a)), tt(Object(mt.b)())
					}, ut.b), () => {
						tt(Object(mt.b)()), tt(Object(pt.g)(ut.a)), st.current && clearTimeout(st.current)
					}
				}, [tt, w, Ie, Ae]), Object(Le.a)(Ke, Ft, Rt);
				const nt = Ie.isSponsored ? Object(xe.b)(Ie.id, {
						fireAdPixelsOfType: d,
						openPost: be
					}) : o.a,
					ot = Object(O.a)(G),
					rt = Object(C.a)(G),
					it = Object(v.a)(G),
					at = ot || rt,
					dt = ((e, t, s) => {
						const [n, o] = e ? [Object(f.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return n || t || o
					})(n, at, Ie),
					bt = !!Ie.media && (Ie.media.type === R.o.RTJSON || Ie.media.type === R.o.TEXT),
					gt = We && bt,
					xt = Object(ae.d)(Ie),
					ft = Object(ce.c)(Ie);
				let vt;
				const Et = !(z && ot),
					kt = Object(Ce.b)({
						hide: !$e && Et,
						editPost: !$e && Et,
						save: Et,
						report: !$e && Et
					}),
					Pt = Ie.removedByCategory === F.g.AuthorDeleted,
					wt = n && (n.displayText === Ie.author || n.username === Ie.author),
					Nt = !!Ie.unrepliableReason,
					Lt = !(Nt && He) && !Pt && !St(Ie) && (wt || E || !(Ie.removedByCategory && Ie.media && (Object(R.M)(Ie.media) || Object(R.K)(Ie.media) || Object(R.E)(Ie.media)))),
					Tt = Object(m.t)(Ie, g),
					{
						source: Mt
					} = Tt,
					At = Ie.removedByCategory === F.g.Reddit && Object(h.e)(Ie.created) > 24,
					Ut = Ie.removedByCategory && Ie.removedByCategory !== F.g.Reddit || At,
					Vt = !Ut && !Ie.isArchived,
					Wt = Object(r.useCallback)(() => {
						ee(T ? F.f.UNFOLLOWED : F.f.FOLLOWED), Ge(T ? Object(j.n)(Ie.id) : Object(j.c)(Ie.id))
					}, [ee, Ge, T, Ie.id]),
					Ht = i.a.createElement(yt, {
						post: Ie,
						innerRef: Ke,
						size: Oe.b.ExtraLarge,
						isOverlay: B,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					qt = i.a.createElement(lt.a, {
						post: Ie,
						showViewCount: dt
					}),
					Gt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? we.g.Classic : Object(Fe.c)(n) ? we.g.Large : Object(Re.b)(n) ? we.g.Large : t ? we.g.Large : n.media && !St(n) ? we.g.Large : we.g.Medium
					})(e),
					Kt = Object(a.e)(ht.b),
					Qt = Object(ne.b)(Ie),
					Yt = () => {
						const t = !(Nt && Je && Qe),
							n = Object(R.I)(Ie);
						return Nt && n ? i.a.createElement(Ct, null) : Je && Qe ? i.a.createElement(Ze, {
							onBannerClick: () => Ye(!1),
							isExpandable: ze
						}) : Ie.source && Gt === we.g.Medium ? i.a.createElement(je.a, {
							post: Ie,
							isCommentsPage: I,
							pageLayer: qe
						}) : Lt && !N && Gt === we.g.Large ? i.a.createElement(fe.a, {
							className: Object(p.a)(Ot.a.LargePostMedia, {
								[Ot.a.isCommentsPage]: I
							}),
							isCommentsPage: !0,
							isListing: !1,
							isNotCardView: B,
							isOverlay: B,
							post: Ie,
							shouldLoad: !0,
							showFull: !0,
							shouldPause: !B,
							showCentered: !0,
							showPromotedCTA: Ue,
							scrollerItemRef: Se
						}) : t && Gt === we.g.Classic ? i.a.createElement(i.a.Fragment, null, i.a.createElement(jt, {
							crosspost: s || void 0,
							isExpanded: !!L,
							post: Ie,
							useMediaIcons: !1
						}), Dt(e)) : null
					};
				if (Gt === we.g.Classic) {
					const e = Object(x.a)(Ie);
					vt = i.a.createElement("div", {
						"data-test-id": Pe.e
					}, i.a.createElement(ve.a, {
						model: Ie,
						handleVote: he,
						isCountAnimShadowTestEnabled: P,
						isOverlay: B,
						isVoteCountAnimation: q,
						postId: Ie.id
					}), i.a.createElement("div", {
						className: Ot.a.mainBody
					}, i.a.createElement("div", {
						className: Ot.a.content
					}, i.a.createElement(Ee.a, {
						hideAwards: Be,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: I,
						isCurrentUserProfilePost: S,
						isModWithUserNotesPermissions: !!A,
						isOverlay: !!B,
						isTopicPage: !1,
						post: Ie,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!B && !Ie.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Vt && !e,
						isFollowed: T,
						onFollowPostClick: Wt
					}), Ht, i.a.createElement(te.a, {
						className: I ? Ot.a.leftPadding : void 0,
						post: Ie,
						sendEvent: Me
					}), z && ot && ft && i.a.createElement(de.a, {
						onIgnoreReports: pe,
						reportable: Ie
					}), i.a.createElement(oe.d, null), i.a.createElement("div", {
						className: Ot.a.FlatlistContainer
					}, Yt(), Be && i.a.createElement(Y.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: Ie,
						tooltipType: B ? ye.c.Lightbox : void 0
					}), i.a.createElement(_t, {
						currentUser: n,
						hasModFlairPerms: rt,
						hasModFullPerms: it,
						hasModPostPerms: ot,
						isOverlay: B,
						onIgnoreReports: pe,
						onOpenReportsDropdown: ue,
						modModeEnabled: z,
						post: Ie,
						showUpvotePercent: !0,
						showViewCount: dt,
						useFlatlistBreakpoints: kt,
						isCommentCountAnimation: _,
						isCountAnimShadowTestEnabled: P
					}))), e && i.a.createElement(Bt, {
						post: Ie,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Vt,
						isFollowed: T,
						onFollowPostClick: Wt
					})))
				} else if (Gt === we.g.Medium) {
					const e = Object(x.a)(Ie);
					vt = i.a.createElement("div", {
						"data-test-id": Pe.e
					}, i.a.createElement(ve.a, {
						model: Ie,
						handleVote: he,
						isCountAnimShadowTestEnabled: P,
						isOverlay: B,
						shouldShowUpvoteRatioOnHover: $e,
						isVoteCountAnimation: q,
						postId: Ie.id
					}), i.a.createElement("div", {
						className: Ot.a.mainBody
					}, i.a.createElement("div", {
						className: Ot.a.content
					}, i.a.createElement(Ee.a, {
						hideAwards: Be,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: I,
						isCurrentUserProfilePost: S,
						isModWithUserNotesPermissions: !!A,
						isOverlay: !!B,
						isTopicPage: !1,
						post: Ie,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!B && !Ie.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Vt && !e,
						isFollowed: T,
						onFollowPostClick: Wt
					}), Ht, Yt(), Object(R.O)(Ie) && It, i.a.createElement(te.a, {
						className: I ? Ot.a.leftPadding : void 0,
						post: Ie,
						sendEvent: Me
					}), Ve && Ut && i.a.createElement(ct, {
						isAdminOrMod: E,
						post: Ie,
						subredditOrProfile: Ve
					}), z && ot && ft && i.a.createElement(de.a, {
						onIgnoreReports: pe,
						reportable: Ie
					})), e && !Xe && i.a.createElement(re.a, {
						post: Ie,
						forceShowNSFW: !0,
						hasModPostPerms: at,
						isCommentsPage: I,
						isOverlay: !0,
						modModeEnabled: z,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: Ve,
						shouldShowFollowButton: Vt,
						isFollowed: T,
						onFollowPostClick: Wt
					})), i.a.createElement(oe.d, null), Be && i.a.createElement(Y.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: Ie,
						tooltipType: B ? ye.c.Lightbox : void 0
					}), !!Kt && i.a.createElement(k.a, {
						itemIds: Qt,
						hasSubredditNames: !0,
						hasPostIds: !0,
						isDiscovery: !0,
						post: Ie,
						size: "small"
					}), i.a.createElement("div", {
						className: Ot.a.controlsContainer
					}, i.a.createElement(se.c, {
						currentUser: n,
						hasModFlairPerms: rt,
						hasModFullPerms: it,
						hasModPostPerms: ot,
						isOverlay: B,
						modModeEnabled: z,
						onIgnoreReports: pe,
						onOpenReportsDropdown: ue,
						post: Ie,
						showEditPost: gt,
						showEditFlair: De,
						tooltipType: B ? ye.c.Lightbox : void 0,
						useFlatlistBreakpoints: kt,
						isCommentCountAnimation: _,
						isCountAnimShadowTestEnabled: P,
						shouldHideItems: $e
					}), et && i.a.createElement(_e.a, {
						isReadingIndicatorsExperiment: D,
						isReadingIndicatorsReadLoadTest: U,
						isReadingIndicatorsWriteLoadTest: V,
						isTypingIndicatorsExperiment: W,
						isTypingIndicatorsReadLoadTest: H,
						postId: Ie.id
					}), !$e && qt))
				} else Gt === we.g.Large && (vt = i.a.createElement("div", {
					"data-test-id": Pe.e
				}, i.a.createElement(ve.a, {
					model: Ie,
					handleVote: he,
					isCountAnimShadowTestEnabled: P,
					isOverlay: B,
					shouldShowUpvoteRatioOnHover: $e,
					isVoteCountAnimation: q,
					postId: Ie.id
				}), Object(Fe.c)(Ie) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Z.a, {
					post: Ie
				}), i.a.createElement(X.a, {
					post: Ie
				})), !Object(Fe.c)(Ie) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ee.a, {
					forceOpenInNewTab: u,
					hideAwards: Be,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: I,
					isCurrentUserProfilePost: S,
					isModWithUserNotesPermissions: !!A,
					isOverlay: !!B,
					isTopicPage: !1,
					post: Ie,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!B && !Ie.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: Ve,
					shouldShowFollowButton: Vt,
					isFollowed: T,
					onFollowPostClick: Wt
				}), Ht, ((e, t, s, n) => e.source && !t && (s || n))(Ie, s, B, I) && i.a.createElement(je.a, {
					post: Ie,
					isCommentsPage: I,
					pageLayer: qe
				})), i.a.createElement(te.a, {
					className: I ? Ot.a.leftPadding : void 0,
					post: Ie,
					sendEvent: Me
				}), Ve && Ut && i.a.createElement(ct, {
					isAdminOrMod: E,
					post: Ie,
					subredditOrProfile: Ve
				}), N && i.a.createElement(ge, {
					post: Ie
				}), Yt(), Ue && Mt && Mt.url && !Ie.isSurveyAd && i.a.createElement(K.a, {
					className: Ot.a.adLinkWrapper
				}, i.a.createElement(Q.a, {
					post: Ie,
					adLinkContent: Tt
				})), z && ot && xt && i.a.createElement("div", {
					className: Ot.a.modModeBannerWrapper
				}, i.a.createElement(ie.a, {
					thing: Ie
				})), z && ot && ft && i.a.createElement("div", {
					className: Ot.a.modModeBannerWrapper
				}, i.a.createElement(de.a, {
					onIgnoreReports: pe,
					reportable: Ie
				})), Object(Re.b)(Ie) && i.a.createElement(J.a, {
					post: Ie
				}), i.a.createElement(oe.d, null), Be && i.a.createElement(Y.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: Ie,
					tooltipType: B ? ye.c.Lightbox : void 0
				}), !!Kt && i.a.createElement(k.a, {
					itemIds: Qt,
					hasSubredditNames: !0,
					hasPostIds: !0,
					isDiscovery: !0,
					post: Ie,
					size: "small"
				}), i.a.createElement("div", {
					className: Ot.a.controlsContainer
				}, i.a.createElement(se.c, {
					currentUser: n,
					forceOpenInNewTab: u,
					hasModFlairPerms: rt,
					hasModFullPerms: it,
					hasModPostPerms: ot,
					isOverlay: B,
					modModeEnabled: z,
					onIgnoreReports: pe,
					onOpenReportsDropdown: ue,
					post: Ie,
					showEditPost: gt,
					showEditFlair: De,
					tooltipType: B ? ye.c.Lightbox : void 0,
					useFlatlistBreakpoints: kt,
					isCommentCountAnimation: _,
					isCountAnimShadowTestEnabled: P,
					shouldHideItems: $e
				}), et && i.a.createElement(_e.a, {
					isReadingIndicatorsExperiment: D,
					isReadingIndicatorsReadLoadTest: U,
					isReadingIndicatorsWriteLoadTest: V,
					isTypingIndicatorsExperiment: W,
					isTypingIndicatorsReadLoadTest: H,
					postId: Ie.id
				}), !$e && qt)));
				const zt = Object(r.useCallback)((e, t) => Object(j.h)(e, t), []);
				return i.a.createElement(me.a, {
					className: Object(p.a)(t, Ot.a.postContainer, {
						[Ot.a.hasEventMeta]: Object(Ne.a)(Ie)
					}),
					isOverlay: B,
					post: Ie,
					eventFactory: B ? y.b : zt,
					onClick: nt
				}, i.a.createElement($.a, {
					post: Ie
				}), vt)
			}))
		},
		"./src/reddit/components/PostDetailStickyHeader/async.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(n.a)({
					resolved: {},
					chunkName: () => "PostDetailStickyHeader",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("PostDetailStickyHeader").then(s.bind(null, "./src/reddit/components/PostDetailStickyHeader/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PostDetailStickyHeader/index.tsx"
					}
				}),
				c = e => {
					const t = Object(i.e)(a.c),
						s = Object(i.e)(a.a);
					return t || s ? r.a.createElement(d, e) : null
				}
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(i.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "g", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = s("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				g = s.n(h);
			const x = r.a.wrapped(d.a, "Icon", g.a),
				f = r.a.wrapped(c.a, "Icon", g.a),
				C = r.a.wrapped(l.a, "Icon", g.a),
				v = r.a.wrapped(m.a, "Icon", g.a),
				O = r.a.wrapped(p.a, "Icon", g.a),
				E = r.a.wrapped(u.a, "Icon", g.a),
				y = () => o.a.createElement(a.a, {
					name: "mod_mute",
					className: g.a.Icon
				}),
				j = () => o.a.createElement(a.a, {
					name: "calendar",
					className: g.a.Icon
				}),
				k = () => o.a.createElement(b.a, {
					className: g.a.svgIcon
				}),
				_ = r.a.wrapped(i.b, "DropdownRow", g.a),
				I = r.a.div("ListContainer", g.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: g,
					isOverlay: x,
					isVoteCountAnimation: f,
					postId: C,
					shouldShowUpvoteRatioOnHover: v
				} = e, O = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: g
				}, n && o.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: g,
					upvoteTooltipId: O,
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: u,
					postId: C,
					scoreClassName: Object(r.a)(p.a.score, {
						[p.a.allowPointerEvents]: v
					}),
					shouldShowUpvoteRatioOnHover: v
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				g = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				k = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideAwards: j,
					hideNSFWPref: _,
					hostPostData: I,
					iconClassName: P,
					inSubredditOrProfile: w,
					isCommentsPage: S,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: L,
					isModWithUserNotesPermissions: T,
					isOverlay: M,
					isTopicPage: R,
					listingKey: F,
					post: A,
					shouldShowSubscribeButton: B,
					showCornerOutboundLink: D,
					showSubreddit: U,
					showSubredditIcon: V,
					subredditOrProfile: W,
					isFollowed: H,
					shouldShowFollowButton: q,
					onFollowPostClick: G
				} = e;
				const K = j || R,
					Q = W && Object(E.h)(W),
					Y = Object(i.e)(e => {
						if (!Q) return !0;
						const t = Object(y.Gb)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(k.a.container, t)
				}, U && W && r.a.createElement("div", {
					className: k.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: W.url
				}, V && r.a.createElement(u.b, {
					className: Object(a.a)(k.a.subredditIcon, P),
					shouldHideNsfwIcon: _,
					subredditOrProfile: W
				}))), r.a.createElement("div", {
					className: k.a.everythingElseWrapper
				}, U && r.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), r.a.createElement(p.d, {
					className: k.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: T,
					tooltipType: M ? p.c.Lightbox : void 0,
					post: A,
					showSub: U,
					subredditOrProfile: W
				}), r.a.createElement(m.a, {
					className: k.a.postBadges,
					displayText: W ? W.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: N,
					post: A,
					tooltipType: M ? p.c.Lightbox : void 0
				}), !K && r.a.createElement(d.a, {
					isPostDetail: S,
					thing: A,
					tooltipType: M ? p.c.Lightbox : void 0
				})), W && Y && U && B && !L && r.a.createElement(h.a, {
					className: k.a.SubscribeButton,
					getEventFactory: e => Object(C.h)(A.id, e ? "unsubscribe" : "subscribe", "post", F, I),
					identifier: {
						name: W.name,
						type: Q ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: A.id,
					size: x.d.XS
				}), D && r.a.createElement(f.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(O.D)(A),
					source: A.source
				}, r.a.createElement(v.a, {
					className: k.a.outboundLinkIcon
				})), q && Y && r.a.createElement(l.a, {
					isFilled: !!H,
					onClick: G,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/PostUnavailableBanner/index.m.less": function(e, t, s) {
			e.exports = {
				bannerBase: "_3pCwayT6l9aM5Uh9YuCXeP",
				RemoveIcon: "YKKq2c1RnR-x1pamdskkg",
				removeIcon: "YKKq2c1RnR-x1pamdskkg"
			}
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsHeader: "_1UbFWXvPTlrPngGxKndM-h",
				smallBanner: "_3O03kg0NTHcVFAyOQNoptz",
				footer: "Cvt0D6iVwU5TI0SY2nIGC",
				textBanner: "_1_-Wwc76dn19ch_lxyp8hf",
				container: "_2l7c_Oz0UVsamALvPrlznq",
				redditStyle: "_3f1Tk2rNUQGOPokixOdO6a",
				homeUpsellBanner: "HxVtNYGfeayfU1THFnAzK",
				homeUpsellBannerBorder: "_3afoK8x8kiKzCgwyofmvxu",
				postList: "_13FxmZ1xHIcRd_CuOaiyfo",
				loadMore: "_2gnvYSohivzo1V12YQI8DY"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/elementIds.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				E = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/screenview.ts"),
				k = s("./src/reddit/selectors/chatPost.ts"),
				_ = s("./src/reddit/selectors/commentsListTruncated.ts"),
				I = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				P = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				w = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				S = s("./src/reddit/selectors/i18n/index.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				T = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/constants/listings.ts"),
				R = s("./src/reddit/controls/InternalLink/index.tsx"),
				F = s("./src/reddit/helpers/name/index.ts"),
				A = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				B = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				D = s.n(B);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var V = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r;
					let d = null,
						c = r.url;
					return o ? (c = M.c[M.b.Popular], d = U._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = n ? U._("See more posts like this in {subredditName}", [U._param("subredditName", Object(F.c)(r.displayText))], {
						hk: "pLxW5"
					}) : U._("Continue browsing in {subredditName}", [U._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(R.a, {
						className: Object(T.a)(D.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: D.a.background
					}), a.a.createElement("div", {
						className: D.a.layout
					}, d, a.a.createElement(A.a, {
						className: D.a.arrow
					})))
				}),
				W = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				H = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				q = s.n(H);
			const G = Object(c.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, _.a, I.b, (e, t, s) => !((!t || s) && e)),
				K = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return !!s && Object(O.a)(s)
				}, (e, t) => {
					let {
						awaitAllCommentsRendered: s
					} = t;
					return s
				}, L.P, L.Q, k.d, G, (e, t, s, n, o, r) => !t && !s && !n && !o && !e && r),
				Q = Object(c.a)((e, t) => {
					let {
						post: s
					} = t;
					return s
				}, P.c, N.W, N.gb, (e, t, s, n) => {
					const o = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let r, i = "";
					if (e && (r = {
							hostPostId: e.id,
							isEligibleForLinkedPosts: !1,
							shouldShowLinkedPosts: !1,
							subreddit: n
						}), t && e && o) {
						const {
							isEligibleForLinkedPosts: o,
							id: a
						} = e;
						i = Object(p.a)(a, Object(P.a)(t) || !o), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: o,
							shouldShowLinkedPosts: o && !Object(f.Ef)(t) && !Object(P.a)(t),
							subreddit: n
						}
					}
					return {
						hostPostData: r,
						isEligibilityLoaded: o,
						listingBelowVariant: t,
						linkedPostsListingKey: i
					}
				}),
				Y = Object(c.c)({
					listingBelowLinkedPostsData: Q,
					nsfwListingBelowVariant: w.a,
					shouldShowListingBelow: K,
					shouldShowNsfwListingBelow: S.b
				}),
				z = Object(d.b)(Y, e => ({
					loadMorePosts: t => e(Object(b.r)({
						sort: l.W.HOT,
						subredditName: t
					}))
				}));
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(x.d) : null, this.onViewed = (e, t) => Object(j.f)({
						key: this.listingKey(),
						sort: l.W.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.hc.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(y.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						shouldShowNsfwListingBelow: e,
						listingBelowLinkedPostsData: {
							linkedPostsListingKey: t,
							listingBelowVariant: s
						},
						post: n,
						subredditOrProfile: o
					} = this.props;
					return s ? t : e && n && n.id ? Object(W.a)(n.id) : Object(u.a)(o.name, l.W.TOP, {
						t: l.hc.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowLinkedPostsData: e,
						nsfwListingBelowVariant: t,
						shouldShowNsfwListingBelow: s,
						subredditOrProfile: o,
						theme: r
					} = this.props, {
						isEligibilityLoaded: i,
						hostPostData: d,
						listingBelowVariant: c
					} = e;
					if (c && !Object(f.Ef)(c) && !Object(P.a)(c) && !i) return a.a.createElement("div", {
						className: q.a.smallBanner
					});
					const {
						name: l
					} = o, m = Object(E.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(P.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === f.he.DeRecs ? n.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : n.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: q.a.smallBanner,
						style: {
							color: m
						}
					}, p)
				}
				render() {
					const {
						contentContainerRef: e,
						listingBelowLinkedPostsData: t,
						shouldShowListingBelow: s,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: o
					} = this.props, {
						hostPostData: i,
						listingBelowVariant: d
					} = t;
					if (!s) return null;
					const c = !!(null == i ? void 0 : i.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: q.a.container
					}, this.renderSmallBanner(), a.a.createElement(h.a, {
						className: q.a.postList,
						disablePlaceholder: !0,
						forcedLayout: v.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: i,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: C.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: q.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(V, {
						className: q.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: o
					}))
				}
			}
			t.a = z(Object(m.a)(Object(g.c)(J)))
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: d
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === d && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), o.a.createElement("div", {
					className: Object(r.a)(c.a.content, {
						[c.a.mCollapsed]: s
					})
				}, o.a.createElement("div", {
					className: Object(r.a)(c.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === d && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(r.b)((e, t) => {
				let {
					postId: s
				} = t;
				return {
					canShowAd: Object(i.a)(e, {
						postId: s
					}) && !Object(d.E)(e) && !Object(a.a)(e)
				}
			})(e => {
				let {
					canShowAd: t,
					postId: s,
					commentsPageKey: n,
					...r
				} = e;
				return t ? o.a.createElement(c.a, r) : null
			})
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, s) {
			e.exports = {
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Footer/index.tsx"),
				l = s("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				m = s.n(l),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				u = s("./src/reddit/actions/login.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/selectors/telemetry.ts");
			const f = "nsfw_dialog";
			var C = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const v = `${a.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				O = `${a.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				E = {
					d2x_nsfw_signup_blocking_de_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				y = e => {
					const t = Object(r.d)(),
						s = Object(b.b)();
					return o.a.createElement("div", {
						className: Object(d.a)(m.a.mainCta)
					}, o.a.createElement("img", {
						src: v
					}), o.a.createElement("div", {
						className: m.a.cta
					}, (() => p.fbt._("Log in to confirm you're over 18", null, {
						hk: "RUR2Z"
					}))()), o.a.createElement("div", {
						className: m.a.contentTitle
					}, e.contentTitle), o.a.createElement("div", {
						className: m.a.warning
					}, (() => p.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), o.a.createElement("div", {
						className: m.a.buttonContainer
					}, o.a.createElement(g.j, {
						className: Object(d.a)(m.a.logIn),
						onClick: () => {
							s((() => e => ({
								...Object(x.n)(e),
								source: "xpromo",
								action: "click",
								noun: f
							}))()), t(Object(u.i)())
						}
					}, (() => p.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), o.a.createElement(g.j, {
						className: m.a.cancel,
						onClick: () => {
							s((() => e => ({
								...Object(x.n)(e),
								source: "xpromo",
								action: "dismiss",
								noun: f
							}))()), t(Object(i.b)("/"))
						}
					}, (() => p.fbt._("I'm not over 18", null, {
						hk: "11UX9Q"
					}))())))
				},
				j = e => o.a.createElement("div", {
					className: m.a.qrCodeOuter
				}, o.a.createElement("div", {
					className: m.a.qrCodeInner
				}, o.a.createElement("img", {
					className: m.a.qrCode,
					src: e.qrCodeAsset
				}), o.a.createElement("div", {
					className: m.a.copyLine1
				}, (() => p.fbt._("Download the app to use", null, {
					hk: "4i9ZxV"
				}))()), o.a.createElement("div", {
					className: m.a.copyLine2
				}, (() => p.fbt._("Anonymous Browsing", null, {
					hk: "rTJ9j"
				}))()), o.a.createElement("img", {
					className: m.a.sneakySnoo,
					src: O
				}))),
				k = e => {
					const t = Object(b.b)();
					o.a.useEffect(() => {
						t((() => e => ({
							...Object(x.n)(e),
							source: "xpromo",
							action: "view",
							noun: f
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(r.e)(C.b) === h.lc.Enabled ? E.d2x_nsfw_signup_blocking_de_v1 : E.d2x_nsfw_signup_blocking_non_us_v1;
					return o.a.createElement("div", {
						className: m.a.container
					}, o.a.createElement(y, {
						contentTitle: s
					}), o.a.createElement("div", {
						className: m.a.footerWrapper
					}, o.a.createElement(c.a, null)), o.a.createElement(j, {
						qrCodeAsset: n
					}))
				}
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/UsersCountIndicator/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "UsersCountIndicator",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("UsersCountIndicator").then(s.bind(null, "./src/reddit/components/UsersCountIndicator/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/UsersCountIndicator/index.tsx"
				}
			})
		},
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, s) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
		},
		"./src/reddit/components/Widgets/AdRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				p = i.a.div("RuleTitle", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				title: n.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, r.a.createElement(l, null, r.a.createElement(m, null, 1, "."), r.a.createElement(p, null, n.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 2, "."), r.a.createElement(p, null, n.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 3, "."), r.a.createElement(p, null, n.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 4, "."), r.a.createElement(p, null, n.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/ReredditLink/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReredditLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ReredditLink").then(s.bind(null, "./src/reddit/components/Widgets/ReredditLink/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Widgets/ReredditLink/index.tsx"
				}
			})
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				C = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts");

			function y() {
				return Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isFrontpage: u.A,
					isProfilePostListing: u.L,
					isTopicPage: u.Q,
					pageLayer: e => e
				})
			}
			const j = y(),
				k = {
					apiError: C.c,
					apiPending: C.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.R)(e, t),
					loadMore: C.g,
					postsById: v.S,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(v.D)(e, s, n, o)
					}),
					subredditsById: O.Z,
					viewportDataLoaded: E.a,
					pageReferrer: u.U,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: f.e
				},
				_ = Object(o.c)(k),
				I = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, o) => {
						e(c.O(t, n, o))
					},
					trackOnPostExitedViewport: (t, s, n, o, r) => {
						e(c.P(t, n, o, r))
					},
					showModalOnScroll: () => e(c.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				P = e => Object(b.b)({
					...e
				}),
				w = (e, t, s, n) => {
					const {
						listingKey: o,
						hostPostData: r,
						listingBelowVariant: i
					} = n;
					return Object(h.h)(e, t, "post", o, r, i, void 0)
				},
				S = Object(n.b)(_, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: P,
					postClickEventFactory: w
				}));
			t.a = e => Object(p.c)(j(S(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				i = 4,
				a = 1e4,
				d = .2,
				c = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/contexts/Visibility.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			}));
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/raf/index.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				l = a.a.createContext(!1);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || r()(this.setVisible)
					}, this.handleIntersectionChange = e => {
						const t = e.isIntersecting;
						!this.fastIsVisible && t && (this.scheduleVisibilityChange(), this.fastIsVisible = !0)
					}
				}
				render() {
					const {
						children: e,
						...t
					} = this.props, {
						isVisible: s
					} = this.state, o = {
						...c,
						...t
					};
					return a.a.createElement(n.a, d({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(l.Provider, {
						value: s
					}, e)))
				}
			}

			function p() {
				return Object(i.useContext)(l)
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: o
					} of t) s.push(Object(n.f)(o));
				return s
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				let {
					getState: t,
					onFailure: s,
					onSuccess: c,
					postId: l,
					response: m
				} = e;
				if (!m.ok) return void s(m.error);
				const p = m.body,
					{
						post: u
					} = p && p.data,
					b = t(),
					h = Object(n.a)(l, null, {
						isOtherDiscussions: !0
					});
				if (u) {
					if (u.otherDiscussions && u.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = u, {
							postFlair: s,
							postIds: n,
							posts: m,
							profiles: p,
							subreddits: g
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(r.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === d.a.Post && n.postInfo) {
										const e = Object(r.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(d.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(i.a)(e.profile)) : Object(d.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(a.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(o.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: n
									} of e.edges) {
									const e = s(n);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						c({
							count: t,
							key: h,
							meta: b.meta,
							postFlair: s,
							postId: l,
							postIds: n,
							posts: m,
							profiles: p,
							subreddits: g
						})
					}
				} else c({
					count: 0,
					key: h,
					meta: b.meta,
					postFlair: {},
					postId: l,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const s = Array.prototype.slice.call(arguments);
								return s.unshift(t), e.push(s), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const s = e.methods[t];
							e[s] = e.factory(s)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const s = document.getElementsByTagName("script")[0];
							s.parentNode.insertBefore(t, s)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/trackers/features/expandedCrossposts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => s => ({
					source: "post_discovery",
					action: "view",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.n(s)
				}),
				r = (e, t) => s => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost",
					post: e,
					subreddit: t,
					...n.n(s)
				}),
				i = () => e => ({
					source: "post_discovery",
					action: "click",
					noun: "crosspost_see_all",
					...n.n(e)
				})
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(n.n)(e),
					media: Object(n.A)(e, t),
					profile: Object(n.Q)(e),
					subreddit: Object(n.gb)(e) || Object(n.jb)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.H)(t, e),
					...o(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.H)(t, e),
					...o(t, e)
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/promo.ts"),
				o = s("./src/reddit/hooks/usePromoContext.ts");

			function r(e) {
				const {
					promos: t
				} = Object(o.a)();
				return !!e && t.get(e) === n.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function r(e) {
				const t = Object(n.e)(o.a) === e,
					s = Object(n.e)(o.c) === e,
					r = Object(n.e)(o.e) === e;
				return t || s || r
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(d.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), o.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				p = s("./src/reddit/components/LightboxHeader/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				h = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				C = s.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(r.b)(() => Object(i.c)({
					showFPR: x.O,
					showSuspended: x.X,
					showOffline: e => e.connection.showBanner
				})),
				E = Object(d.a)(e => {
					let {
						className: t,
						isCollectionLayout: s,
						theme: n,
						...r
					} = e;
					const i = Object(g.a)({
						theme: n,
						...r
					});
					return o.a.createElement("div", v({
						className: Object(a.a)(C.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(h.g)(i.canvas, i.canvasImgUrl, i.canvasImgPosition),
							"--fakelightbox-overlay-max-width": s ? `${u.h}px` : `${u.i}px`
						}
					}, r))
				});
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR,
							showOffline: this.props.showOffline
						};
						return o.a.createElement(m.a, {
							className: Object(a.a)(C.a.fakeOverlayLightboxHeaderWrapper, {
								[C.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(C.a, t))
						}, o.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(E, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(b.a, e))
				}
			}
			t.a = O(y)
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				defaultLightboxSidebar: "_20b4i5iUhjZQqDZ1BM_Q-9",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				wide: "_3lVCgGR2stdSvrxCS2yWD7",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showSuspended: "_39xFv40KohPmMxYVnMJmp",
				offline: "Jvy6k8geBbRljwIwFTLRo",
				navExperiment: "_1BAfE2MtXRmb69Ht2TsVN-"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.container = null, this.setContainerRef = e => {
						this.container = e, this.props.containerRef && this.props.containerRef(e)
					}
				}
				render() {
					const {
						content: e,
						contentBanner: t,
						isCollectionLayout: s,
						isFakeOverlay: n,
						sidebar: r
					} = this.props;
					return o.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, o.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), r && o.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, r))
				}
			}
			t.a = m
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				discoveryExperimentLink: "_1aOgrREECvp9S07UGKx-jG"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				c = s("./src/reddit/components/ExpandedCrossposts/async.tsx"),
				l = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/trackers/features/expandedCrossposts.ts"),
				b = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/hooks/usePageLayer.ts"),
				x = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				C = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				v = s.n(C);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = Object(i.c)({
				isSubredditDiscoveryCrosspostEnabled: f.a,
				headComment: x.x,
				post: x.H
			}), y = e => {
				var t;
				const s = Object(g.a)(),
					{
						isSubredditDiscoveryCrosspostEnabled: n,
						headComment: i,
						post: x
					} = Object(r.e)(t => E(t, e)),
					f = Object(m.b)(),
					{
						commentId: C,
						isOverlay: y,
						postId: j
					} = e;
				if (!x) return null;
				const k = null !== (t = x.numDuplicates) && void 0 !== t ? t : 0,
					_ = void 0 !== C,
					I = x.permalink,
					P = k > 0,
					w = Object(p.b)(Object(d.e)(I));
				return _ || P ? o.a.createElement("div", {
					className: v.a.CommentsNavigationPane
				}, _ && o.a.createElement("div", null, o.a.createElement(l.a, {
					className: v.a.linkOrOverlay,
					"data-testid": "view_all_comments_link",
					isOverlay: y,
					to: Object(p.b)(I),
					onClick: () => f(Object(h.i)(j, i, s))
				}, O._("View all comments", null, {
					hk: "3I5IX9"
				})), i && null !== i.parentId && o.a.createElement(l.a, {
					className: v.a.linkOrOverlay,
					isOverlay: y,
					to: Object(p.b)(i.permalink + "?context=8&depth=9")
				}, O._("Show parent comments", null, {
					hk: "AVRCa"
				}))), P && o.a.createElement(o.a.Fragment, null, n && o.a.createElement(c.a, {
					postId: j
				}), o.a.createElement(l.a, {
					className: Object(a.a)(v.a.OtherDiscussionsLink, {
						[v.a.discoveryExperimentLink]: n
					}),
					isOverlay: y,
					onClick: () => f(n ? Object(u.b)() : Object(b.a)(j)),
					to: w
				}, n ? o.a.createElement(o.a.Fragment, null, O._("View all", null, {
					hk: "30twDK"
				}), ` (${k})`) : O._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [O._plural(k, "other discussion communities count")], {
					hk: "3oofZ8"
				})))) : null
			}
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, s) {
			e.exports = {
				promoBanner: "_25nFZKgLc-Z-1ua1YEzuCL",
				DetailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				detailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				MoreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				moreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				PageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				pageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				LargePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				largePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				Spacer: "q6p33SkkiPu07qUoN_Kd",
				spacer: "q6p33SkkiPu07qUoN_Kd",
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				OverviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				overviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				backgroundMargin: "_34i0o0-SanTnUOM8JXdW6f",
				isFirstInCommentList: "_22yjV_JLQY-BfOOW1wgsgI",
				isLastInCommentList: "_3QJoultgeMO-1x88lIzzSe"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getCommentsPageKeyById", (function() {
				return _t
			})), s.d(t, "CommentsPage", (function() {
				return Tt
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/get.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-redux/es/index.js"),
				b = s("./node_modules/reselect/es/index.js"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				x = s("./src/telemetry/models/Timer.ts"),
				f = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/domUtils/index.ts"),
				O = s("./src/lib/fastdom/index.ts"),
				E = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/lib/performanceTimings/index.tsx"),
				_ = s("./src/reddit/actions/ads/index.ts"),
				I = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				N = s("./src/reddit/actions/login.ts"),
				L = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				M = s("./src/reddit/actions/reportFlow/index.ts"),
				R = s("./src/reddit/actions/tooltip.ts"),
				F = s("./src/reddit/actions/upvotePrompt.ts"),
				A = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				B = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				D = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				U = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				V = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				W = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				H = s("./src/reddit/constants/componentSizes.ts"),
				q = s("./src/reddit/constants/elementIds.ts"),
				G = s("./src/reddit/constants/history.ts"),
				K = s("./src/reddit/constants/keycodes.ts"),
				Q = s("./src/reddit/constants/posts.ts"),
				Y = s("./src/reddit/constants/screenWidths.ts"),
				z = s("./src/reddit/contexts/ApiContext.tsx"),
				J = s("./src/reddit/contexts/PageLayer/index.tsx"),
				X = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Z = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				$ = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ee = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				te = s("./src/reddit/selectors/subreddit.ts"),
				se = s("./src/reddit/selectors/upvotePrompt.ts"),
				ne = s("./src/reddit/featureFlags/profileCollections.ts"),
				oe = s("./src/reddit/contexts/Post/index.tsx"),
				re = s("./src/reddit/models/Comment/index.ts"),
				ie = s("./src/reddit/models/Post/index.ts"),
				ae = s("./src/reddit/models/Subreddit/index.ts"),
				de = s("./src/reddit/selectors/chatPost.ts"),
				ce = s("./src/reddit/selectors/comments.ts"),
				le = s("./src/reddit/selectors/commentSelector.ts"),
				me = s("./src/reddit/selectors/commentsListTruncated.ts"),
				pe = s("./src/reddit/selectors/creatorStats.ts"),
				ue = s("./src/reddit/selectors/discoveryUnit.ts"),
				be = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				he = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ge = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				xe = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				fe = s("./src/reddit/selectors/experiments/d2xSeoLightboxExperiment.ts"),
				Ce = s("./src/reddit/selectors/experiments/postSeo.ts"),
				ve = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Oe = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				Ee = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				ye = s("./src/reddit/selectors/meta.ts"),
				je = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ke = s("./src/reddit/selectors/posts.ts"),
				_e = s("./src/reddit/selectors/tooltip.ts"),
				Ie = s("./src/reddit/selectors/user.ts"),
				Pe = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				we = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Se = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Ne = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Le = s("./src/reddit/components/Comments/index.tsx"),
				Te = s("./src/reddit/components/Comments/States/index.tsx"),
				Me = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Re = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Fe = s("./src/reddit/components/CommentSort/index.tsx"),
				Ae = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Be = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				De = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Ue = s("./src/reddit/components/HeaderImage/index.tsx"),
				Ve = s("./src/reddit/components/Hovercards/helpers.ts"),
				We = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				He = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				qe = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ge = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Ke = s("./src/reddit/components/JumpToContent/index.tsx"),
				Qe = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Ye = s("./src/reddit/components/PostContent/index.tsx"),
				ze = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				Je = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Xe = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				Ze = s("./src/reddit/components/SubredditNav/index.tsx"),
				$e = s("./src/reddit/components/TrackingHelper/index.tsx"),
				et = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				tt = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				st = s("./src/reddit/helpers/history/index.ts"),
				nt = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				ot = s("./src/reddit/helpers/name/index.ts"),
				rt = s("./src/reddit/helpers/postCollection.ts"),
				it = s("./src/reddit/helpers/resonatePage/index.ts"),
				at = s("./src/reddit/helpers/trackers/lightbox.ts"),
				dt = s("./src/reddit/helpers/trackers/screenview.ts"),
				ct = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				lt = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				mt = s("./src/reddit/layout/page/Listing/index.tsx"),
				pt = s("./src/reddit/models/ContentGate.ts"),
				ut = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				bt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				ht = s("./src/reddit/pages/CommentsPage/index.m.less"),
				gt = s.n(ht);

			function xt() {
				return (xt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ft = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				Ct = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				vt = 200,
				Ot = 80,
				Et = 32,
				yt = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-pages-CommentsPage-OtherDiscussions",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-pages-CommentsPage-OtherDiscussions").then(s.bind(null, "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx"
					}
				}),
				jt = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-Collection",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-Collection").then(s.bind(null, "./src/reddit/components/Collection/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Collection/index.tsx"
					}
				}),
				kt = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ContentGate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ContentGate").then(s.bind(null, "./src/reddit/components/ContentGate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentGate/index.tsx"
					}
				}),
				_t = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(y.a)(t) : n
				},
				It = e => {
					const {
						state: t
					} = e.location, s = a()(t, G.b.IsOverlay, !1), n = a()(t, G.b.CloseLocation, null), o = a()(t, G.b.ScrollOnLoad, !1);
					o && Object(st.c)(G.b.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(ie.t)(i), l = r && Object(re.h)(r);
					return m.a.createElement(oe.a, {
						postId: c
					}, m.a.createElement(Tt, {
						closeLocation: n,
						commentId: l,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: o,
						sort: e.sort,
						subredditName: d
					}))
				},
				Pt = Object(J.u)(),
				wt = () => Object(b.c)({
					apiError: ce.c,
					apiPending: ce.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(ke.U)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					canShowCrosspostRecommendationsModal: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Z.a)(e, s)
					},
					canViewCreatorStats: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(pe.a)(e, s)
					},
					comment: le.b,
					communityBannerDiscoveryUnit: ue.a,
					isSubredditDiscoveryCrosspostEnabled: Oe.a,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(Ie.f)(e, s)
					},
					currentUserShowNSFW: Ie.kb,
					dismissedSubreddits: be.a,
					fullyLoaded: ce.u,
					hasModeratorPostPermissions: je.c,
					headComment: ce.x,
					isActionBarAnimationEnabled: ee.b,
					isAvatarsInCommentsEnabled: ge.a,
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							postId: s
						} = t;
						return !!Object(ke.w)(e, {
							postId: s
						}) && Object(he.a)(e)
					},
					isCountAnimShadowTestEnabled: ee.e,
					isCrawler: (e, t) => !!Object(ye.c)(e),
					isCreatorStatsEnabled: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(xe.a)(e, s)
					},
					isCrosspostRecommendationsExperimentEnabled: Z.b,
					isD2xSeoDisableLightboxEnabled: fe.a,
					isEligibleForCommentTruncation: Ee.a,
					isChatPost: de.d,
					isCommentsListTruncated: me.a,
					isLoggedIn: Ie.Q,
					isNightmodeOn: Ie.db,
					isTooltipOpen: (e, t) => !!Object(_e.a)(e),
					origin: ye.j,
					post: ke.G,
					postSEOV2IdCardVariant: Ce.h,
					profileCollectionsEnabled: ne.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: o
						} = t;
						return Object(ce.s)(e, {
							commentsPageKey: _t({
								postId: s,
								commentId: n,
								commentsPageKey: o
							})
						})
					},
					shouldOpenPostInNewTab: Ie.jb,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(te.u)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: ke.U,
					userHovercardIsOpen: (e, t) => Object(_e.b)(Object(Ve.b)({
						itemId: t.postId,
						tooltipIdPrefix: U.a,
						tooltipType: Je.c.StickyPost
					}))(e),
					userPrefs: Ie.Hb,
					inResonatePilot: ve.a,
					isQualifiedForUpvotePrompt: se.c,
					isEligibleForNsfwSignupUpsellTreatment: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(ke.U)(e, {
							postId: s
						});
						return !(!n || !n.isNSFW) && Object($.a)(e)
					},
					isTrueblockPCBlockeeEnabled: he.c,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditName: s
						} = t;
						const n = Object(te.D)(e, s);
						return !!n && Object(je.i)(e, n)
					}
				}),
				St = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(L.g)(D.a)),
					dismissTruncation: t => e(Object(Pe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(w.a)()),
					setCommentFocus: t => e(I.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(R.i)()),
					onToggleTooltip: t => e(Object(R.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(N.i)()),
					openRegisterModal: () => e(Object(N.j)()),
					openReportFlow: (t, s) => e(Object(M.c)(t, s)),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(w.b)()),
					fetchCommentsNativeAd: t => e(Object(_.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(we.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(F.b)(t, s, n))
					}
				}),
				Nt = Object(p.b)(wt, St);
			class Lt extends m.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.setAdScrollItemRef = e => {
						this.adScrollItemRef = e, setTimeout(this.handleScroll), this.needsUpdatedMeasurements = !0
					}, this.setCommentAdRef = e => {
						this.commentAdRef = e
					}, this.handleScroll = c()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didPassAdScrollThreshold: e,
							didScrollPastPost: t,
							scrollContainerEl: s,
							scrollAdThreshold: n,
							scrollPostThreshold: o,
							props: {
								userHovercardIsOpen: r,
								onToggleTooltip: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const d = s === window ? s.scrollY : s ? s.scrollTop : 0;
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== n && d >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && d < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== o && d >= o && (this.didScrollPastPost = !0), t && void 0 !== o && d < o && (this.didScrollPastPost = !1, r && O.a.write(() => {
							i(Object(Ve.b)({
								itemId: a,
								tooltipIdPrefix: U.a,
								tooltipType: Je.c.StickyPost
							}))
						}))
					}, C.K), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(at.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
						this.needsUpdatedMeasurements = !0, this.handleScroll()
					}, this.updateCommentSortRef = e => {
						this.commentSortRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCommentFormRef = e => {
						this.commentFormRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCollPostWrapperRef = e => {
						this.collectionPostWrapperRef = e
					}, this.handleViewAllCommentsClick = () => {
						const {
							dismissTruncation: e,
							expandCommentsList: t,
							post: s
						} = this.props;
						t();
						const n = s && Object(ie.s)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(tt.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === K.b.F || e.keyCode === K.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.onAllCommentsRendered = () => {
						this.props.isEligibleForCommentTruncation || this.state.allCommentsRendered || this.setState({
							allCommentsRendered: !0
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.didPassAdScrollThreshold = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						allCommentsRendered: !1,
						layoutRef: null,
						commentNativeAdId: null,
						isUpvotePromptTriggered: !1
					}
				}
				hasCommentAdRef() {
					return this.commentAdRef && this.commentAdRef.clientHeight > 0
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				async componentDidMount() {
					var e;
					this.props.isQualifiedForUpvotePrompt && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, se.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isOverlay: o,
							post: r,
							shouldScrollToComments: i
						}
					} = this, a = new URLSearchParams(this.props.location.search).get("report") || "";
					if (["true", "1"].includes(a) && this.props.openReportFlow(this.props.postId, o), r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== Q.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (o ? (this.scrollContainerEl = document.getElementById(q.d), i && (t || s || this.hasCommentAdRef()) && r && r.numComments ? this.scrollToComments() : O.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(nt.b)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(ie.t)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), O.a.read(() => {
							this.props.isOverlay || Object(k.d)(k.c.CommentsPage, n)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						C.Mb.includes(e) && Object(it.a)(e)
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.location.pathname !== this.props.location.pathname) {
						const e = new URLSearchParams(this.props.location.search).get("report") || "";
						["true", "1"].includes(e) && this.props.openReportFlow(this.props.postId, this.props.isOverlay)
					}
					if (e.postId !== this.props.postId) {
						const e = this.props.post && Object(rt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? O.a.read(this.handleScroll) : O.a.write(() => {
							e || Object(v.c)(this.scrollContainerEl, 0), O.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && O.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = H.b + (this.props.isOverlay ? H.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(q.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? Et : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && O.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(v.c)(n, i) : Object(v.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isQualifiedForUpvotePrompt && !this.state.isUpvotePromptTriggered) {
						const e = !0;
						this.props.triggerUpvotePrompt(this.props.postId, e)
					}
					this.props.isCrosspostRecommendationsExperimentEnabled && this.props.closeCrosspostRecommendationsModal()
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						subredditOrProfile: t,
						truncateCommentsList: s
					} = this.props, n = t && t.id;
					n && !e.includes(n) && s()
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = vt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = vt)
				}
				addListeners() {
					const {
						isOverlay: e
					} = this.props;
					e && window.addEventListener("resize", this.updateWindowHeight), this.props.isCommentsListTruncated && window.addEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.addEventListener("scroll", this.handleScroll)
				}
				removeListeners(e) {
					const {
						isOverlay: t
					} = this.props;
					t && window.removeEventListener("resize", this.updateWindowHeight), e && this.props.isCommentsListTruncated !== e.isCommentsListTruncated && window.removeEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.removeEventListener("scroll", this.handleScroll)
				}
				scrollToComments() {
					O.a.read(() => {
						const e = document.getElementById(q.d);
						if (e) {
							let t, s;
							this.hasCommentAdRef() ? t = this.commentAdRef.offsetTop : this.commentFormRef ? (t = this.commentFormRef.offsetTop - Ot, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - Ot, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), O.a.write(() => {
								Object(v.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => O.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s
					} = this.props;
					return g.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					O.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						n(Object(dt.c)(t, s, e, x.TimerType.InApp, r, o))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: s,
						post: n,
						subredditName: o
					} = this.props, r = !(!n || !n.isNSFW || t), i = Object(et.a)(e, r, o);
					if (!i) return null;
					let a = m.a.createElement(kt, i);
					return s && (a = m.a.createElement(ct.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						canShowCrosspostRecommendationsModal: s,
						closeCrosspostRecommendationsModal: n,
						closeLocation: o,
						commentId: r,
						commentsPageKey: i,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrawler: c,
						isCrosspostRecommendationsExperimentEnabled: l,
						isD2xSeoDisableLightboxEnabled: p,
						isEligibleForCommentTruncation: u,
						isModWithUserNotesPermissions: b,
						isLoggedIn: h,
						isNightmodeOn: g,
						isOverlay: x,
						post: v,
						postId: O,
						postSEOV2IdCardVariant: E,
						profileCollectionsEnabled: y,
						sendEvent: j,
						sort: k,
						subredditOrProfile: _,
						isEligibleForNsfwSignupUpsellTreatment: I,
						subredditName: P
					} = this.props;
					if ((null == v ? void 0 : v.isNSFW) && P && I) return m.a.createElement(W.a, {
						contentTitle: Object(ot.c)(P)
					});
					const w = Object(Ce.f)(E);
					if (!v) {
						if (t) return m.a.createElement(Te.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === C.o ? m.a.createElement(kt, {
							contentGateType: pt.a.PostBlockedForLegalReason
						}) : m.a.createElement(Te.d, {
							postId: O,
							commentId: r,
							apiError: e,
							sort: k
						}) : m.a.createElement(Te.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const S = this.isCommentPermalink(),
						N = v.belongsTo.type === Q.a.PROFILE,
						L = Object(rt.a)(v) && (!N || y),
						T = !h,
						M = _ && _.isQuarantined,
						R = !u && !this.state.allCommentsRendered && !c,
						F = l && s;
					return ft.input.channel.postID = O, m.a.createElement(Rt, {
						closeLocation: o,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isD2xSeoDisableLightboxEnabled: p,
						isLoggedIn: h,
						isOverlay: x,
						isSwapVariant: w,
						post: v,
						subredditOrProfile: _,
						shouldFitPageToContent: T,
						isCollectionLayout: L
					}, m.a.createElement(Qe.a, {
						postId: O,
						isNightMode: g,
						isOverlay: x,
						commentId: r
					}), !x && m.a.createElement(ze.a, {
						post: v
					}), M && m.a.createElement(Ge.a, {
						subredditName: _.name
					}), m.a.createElement(Ke.a, null), m.a.createElement("div", {
						className: Object(f.a)(gt.a.PageContentWrapper, {
							[gt.a.LargePageContent]: L,
							[gt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, L && m.a.createElement(jt, {
						isOverlay: x,
						isNightmodeOn: g,
						postId: O
					}), m.a.createElement(Ct, {
						condition: L,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: gt.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Ye.c, {
						isCommentPermalink: S,
						isOverlay: x,
						isModWithUserNotesPermissions: b,
						postId: O,
						redditStyle: x,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: j,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && !M && this.props.isCreatorStatsEnabled && m.a.createElement(De.a, {
						post: v,
						subreddit: _
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(A.a, {
						key: `event-post-id-${v.id}`,
						isOverlay: x,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), _ && !Object(ae.h)(_) && m.a.createElement(V.a, {
						awaitAllCommentsRendered: R,
						contentContainerRef: this.state.layoutRef,
						isOverlay: x,
						post: v,
						subredditOrProfile: _
					}), F && m.a.createElement(B.a, {
						ignoreDefaultFocus: !0,
						onCloseModal: n,
						post: v,
						withOverlay: !0
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: r,
						fullyLoaded: i,
						hasModeratorPostPermissions: a,
						headComment: d,
						isAvatarsInCommentsEnabled: c,
						isBlockedUserBannerEnabled: l,
						isChatPost: p,
						isCommentsListTruncated: u,
						isEligibleForCommentTruncation: b,
						isLoggedIn: g,
						isOverlay: x,
						location: C,
						onOtherDiscussions: v,
						openLoginModal: O,
						openRegisterModal: E,
						origin: y,
						post: k,
						postId: _,
						replyComment: I,
						sendEvent: w,
						sort: S,
						subredditAboutInfo: N,
						subredditOrProfile: L,
						isTrueblockPCBlockeeEnabled: T
					} = this.props;
					if (!k) return null;
					const M = this.isCommentPermalink(),
						R = [],
						F = k.isLocked && !s,
						A = !(M || k.isArchived || N && N.userIsBanned || k.authorIsBlocked && l || k.unrepliableReason && T);
					if (F) R.push(m.a.createElement(He.a, {
						key: "commentThreadBanner",
						subredditOrProfile: L
					}));
					else if (k.isArchived) R.push(m.a.createElement(We.a, {
						key: "commentThreadBanner"
					}));
					else if (A && !p && !v)
						if (g) {
							const e = Object(j.a)(h.c.replyToPost, _);
							R.push(m.a.createElement(Se.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: h.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: _,
								submitAction: (t, s) => {
									let {
										validate: n,
										...o
									} = t;
									return n ? P.u(_, r, e, o, s) : P.o(_, r, e, o, s)
								},
								submitButtonText: o.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else R.push(m.a.createElement(Ne.a, {
							key: "loggedOutCommentForm",
							location: C,
							openLoginModal: O,
							openRegisterModal: E,
							origin: y
						}));
					if (k.contestMode && R.push(m.a.createElement(qe.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), p || v || (this.props.isSubredditDiscoveryCrosspostEnabled ? R.push(m.a.createElement(ut.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: x,
							key: "commentNavigation",
							postId: _
						}), m.a.createElement(Fe.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: x,
							key: "commentSort",
							location: C,
							postId: _,
							sort: S,
							suggestedSort: k.suggestedSort
						})) : R.push(m.a.createElement(Fe.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: x,
							key: "commentSort",
							location: C,
							postId: _,
							sort: S,
							suggestedSort: k.suggestedSort
						}), m.a.createElement(ut.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: x,
							key: "commentNavigation",
							postId: _
						}))), R.push(m.a.createElement(Xe.a, {
							postId: _
						})), !t || d || p || v)
						if (!e || d || v)
							if (v) R.push(m.a.createElement(yt, {
								commentSort: S,
								key: "otherDiscussions",
								postId: _,
								isOverlay: x,
								postPermalink: k.permalink
							}));
							else if (p) {
						if (L && L.id) {
							const e = I ? Object(j.a)(h.c.replyToComment, I.id) : Object(j.a)(h.c.replyToPost, _),
								s = _t({
									postId: _,
									commentId: n,
									commentsPageKey: r
								});
							R.push(m.a.createElement(Me.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: _,
								renderedInOverlay: x,
								subredditId: L.id
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return g ? m.a.createElement(Re.a, {
									key: "chatCommentsForm",
									postId: _,
									replyComment: I,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: w
								}) : m.a.createElement(Ne.a, {
									key: "loggedOutCommentForm",
									className: gt.a.ChatLoggedOutForm,
									location: C,
									openLoginModal: O,
									openRegisterModal: E,
									origin: y
								})
							}))
						}
					} else R.push(m.a.createElement("div", {
						className: Object(f.a)(gt.a.CommentsPaneWrapper, {
							[gt.a.mIsInOverlay]: x
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Be.a, xt({}, this.props, {
						shouldTruncateComments: b && u,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: k.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Le.a, {
						commentId: n,
						commentsPageKey: r,
						postId: _,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: x
					})))), e && d ? R.push(m.a.createElement(Te.e, {
						key: "commentsErrorState",
						postId: _,
						commentId: n,
						sort: S,
						apiError: e
					})) : !i && t && R.push(m.a.createElement(Te.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else R.push(m.a.createElement(Te.e, {
						key: "errorState",
						postId: _,
						commentId: n,
						sort: S,
						apiError: e
					}));
					else this.didRenderLoading = !0, R.push(m.a.createElement(Te.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(X.a.Provider, {
						value: this.sendEventWithName
					}, R)
				}
			}
			const Tt = Pt(Object(z.b)(Nt(Object($e.c)(Lt)))),
				Mt = E.a.wrapped(Ae.a, "DetailsPageSidebar", gt.a),
				Rt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isD2xSeoDisableLightboxEnabled: a,
						isLoggedIn: d,
						isOverlay: c,
						isSwapVariant: l,
						post: p,
						shouldFitPageToContent: u,
						subredditOrProfile: b
					} = e;
					if (!a && !d && !c) return m.a.createElement(lt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: p,
						sidebar: b && m.a.createElement(Ae.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: p,
							subredditName: b.name,
							subredditId: b.id
						})
					});
					if (c) return m.a.createElement(ct.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: b && m.a.createElement(Ae.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: p,
							subredditName: b.name,
							subredditId: b.id
						})
					});
					const h = i ? H.i : Y.a;
					return m.a.createElement(mt.a, {
						containerRef: n,
						maxWidth: H.i,
						fitPageToContent: u,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: l,
						isCollectionLayout: i,
						navBar: b && m.a.Children.toArray([m.a.createElement(Ue.a, {
							key: b.name,
							disableFullscreen: !0,
							headerText: b.name,
							maxWidth: h,
							prefixedHeaderText: b.displayText,
							subredditOrProfile: b,
							url: b.url
						}), !Object(ae.h)(b) && m.a.createElement(Ze.a, {
							disableFullscreen: !0,
							homeUrl: b.url,
							maxWidth: h,
							subredditId: b.id
						})]),
						sidebar: b && m.a.createElement(Mt, {
							commentsPageKey: s,
							post: p,
							subredditName: b.name,
							subredditId: b.id
						})
					})
				};
			t.default = Object(bt.a)(It)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts");
			const h = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(b.t)(t)
				},
				g = (e, t, s) => {
					const n = h(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.h)(t)
						})(e),
						i = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return o()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, r, a)
				},
				x = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = h(t);
						return Object(p.a)(e, s)
					}
				}),
				f = Object(a.b)(x);

			function C(e) {
				return f(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, o = g(t, s, n), r = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: o,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: n
					};
					return i.a.createElement(e, a)
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/dismissedTruncationList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./node_modules/reselect/es/index.js");
			const o = e => e.dismissedTruncationList,
				r = Object(n.a)((e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s
				}, o, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.Q, i.P, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.I
				}), e => e === o.Q.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.u
				}) === n.x.Enabled,
				i = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.Jc
				}) === n.ld
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.Ec
				});
				return !(!t || Object(n.Ef)(t))
			}
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					expEventOverride: t
				})
			}
			const l = c(o.Qb, !0),
				m = c(o.Qb, !1),
				p = c(o.Rb, !0),
				u = (c(o.Rb, !1), Object(n.a)(l, p, (e, t) => e === o.lc.Enabled || t === o.mc.Enabled))
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(o.c)(e, {
				experimentEligibilitySelector: e => !Object(r.d)(e) && "US" === Object(r.b)(e),
				experimentName: n.Me
			}) === n.Te.Enabled
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(i.g, i.d, a.e, (e, t, s) => !e && !t && !s);

			function c(e, t) {
				return s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: d,
					throttledVariants: {
						[o.ic.Bottom_cell_dismissible]: e,
						[o.ic.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.ic.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(o.tb, !0),
				m = c(o.ub, !0),
				p = c(o.vb, !0),
				u = c(o.tb, !1),
				b = c(o.ub, !1),
				h = c(o.vb, !1)
		},
		"./src/reddit/selectors/experiments/subredditDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.bf
					}) === n.ld
				},
				a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.af
					}) === n.ld
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.yf
					}) === n.ld
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.zf
					}) === n.ld
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.xf
					});
					return t === n.qf.TypingIndicators || t === n.qf.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.xf
					});
					return (null == t ? void 0 : t.variant) === n.qf.IndicatorsPlusCTA
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.S)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				p = Object(n.a)((e, t) => {
					const s = u(e, t);
					if (!s) return m;
					const n = Object(i.W)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.S)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, n, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							i = o && Object(r.G)(e, {
								postId: n
							}) || null,
							a = o && Object(r.G)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				h = [3],
				g = Object(n.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: n
					} = t;
					const o = s.slice().sort();
					let i = -1;
					const a = Object(r.z)(e, {
							listingKey: n.listingKey
						}),
						d = [];
					return h.forEach(t => {
						let s = i + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !b(e, s, t, a, o);) s += 1;
							s < a.length && (d.push(s), i = s)
						}
					}), d
				}),
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				C = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				O = e => {
					const t = Object(a.P)(e),
						s = o.d.geoSubredditRecommendationDULoggedIn(e),
						n = o.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.Ef)(t)
				},
				d = Object(n.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/isEligibleForCommentTruncation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				r = s("./src/reddit/selectors/meta.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts");
			const c = Object(n.a)((e, t) => t.isOverlay, (e, t) => {
				const s = Object(i.U)(e, {
					postId: t.postId
				});
				return Object(o.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.U, i.G, a.P, a.Q, r.g, (e, t, s, n, o, r, i) => {
				if (!n) return !1;
				const a = !(!s || Object(d.h)(s)),
					c = n.numComments >= 3 && !e || !t;
				return i && a && c && (!o && !r)
			})
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = new Date,
				d = a.getUTCFullYear(),
				c = a.getUTCMonth(),
				l = a.getUTCDate(),
				m = Date.UTC(2008, 0, 1),
				p = Date.UTC(d, c - 7, l),
				u = Object(n.a)(e => Object(r.f)(e), e => Object(o.a)(e), (e, t) => {
					let {
						post: s
					} = t;
					return s && Object(i.U)(e, {
						postId: s.id,
						disallowProfile: !0
					})
				}, (e, t, s) => e && !!t && !t.isNSFW && !!s && !s.isNSFW && !!t.created && t.created > m && t.created < p)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(r.c)(e, {
					experimentName: o.Ae,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === o.Ie.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(n.a)(i.G, a, (e, t) => d(e, t));
			Object(n.a)((e, t) => t, a, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"a841e19c0112"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"0a569f10c6e4"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"ca3ae664c537"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"9bf5e276ac63"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"10c7c14211a7"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"ecec7ad28cab"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage.9864cc667a31013e7e9b.js.map