// https://www.redditstatic.com/desktop2x/CommentsPage.94f276de745c76a78ce2.js
// Retrieved at 9/22/2021, 1:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage"], {
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
				return f
			}));
			var o = s("./node_modules/react/index.js");
			var n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/constants/promo.ts"),
				d = s("./src/reddit/hooks/usePromoContext.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/hooks/useExperimentVariant.ts"),
				m = s("./src/reddit/selectors/experiments/index.ts"),
				p = s("./src/reddit/selectors/meta.ts");
			const u = Object(c.a)(p.g, p.d, m.e, (e, t, s) => !e && !t && !s);

			function h(e) {
				const t = Object(l.a)(i.Z, u) === e,
					s = Object(l.a)(i.ab, u) === e,
					o = Object(l.a)(i.bb, u) === e;
				return t || s || o
			}
			const b = 250,
				g = 1e3;

			function C(e = b) {
				const {
					showPromo: t
				} = Object(d.a)(), s = function() {
					const e = h(i.ub.Bottom_cell),
						t = h(i.ub.Bottom_sheet);
					return e ? a.b.SignupUpsellCell : t ? a.b.SignupUpsellBottomSheet : null
				}(), n = o.useRef(!1);
				return o.useMemo(() => r()(e => {
					var o;
					if (!n.current && s && (null === (o = null == e ? void 0 : e.primaryChild) || void 0 === o ? void 0 : o.rectangle)) {
						const {
							top: o
						} = e.primaryChild.rectangle;
						o > 2 * window.innerHeight && (t(s), n.current = !0)
					}
				}, e, {
					maxWait: g
				}), [s, t, e])
			}

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function f(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = C();
					return o.createElement(e, x({
						showSignupUpsell: s
					}, t))
				}
				return s.displayName = `withShowSignupUpsell(${t})`, s
			}
		},
		"./src/reddit/actions/celebratoryMoments/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/celebratoryMoments/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(o.a)(n.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return k
			}));
			var o, n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(o || (o = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.a)(i.g),
				g = Object(n.a)(i.e),
				C = Object(n.a)(i.h),
				x = Object(n.a)(i.c),
				f = Object(n.a)(i.f),
				v = Object(n.a)(i.j),
				O = Object(n.a)(i.i),
				y = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						r = Object(p.e)(n),
						i = Object(p.d)(n),
						c = Object(h.J)(n);
					if (r || !i) return;
					e(C());
					let u = !1;
					try {
						const t = c ? o.LoggedInGeo : o.LoggedOutGeo,
							n = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (E(t)) {
								if (P(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), u = !0
								} else if (w(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: o,
											interactedSubreddit: n,
											category: r
										} = s.focusRecommendations[0],
										i = [o, n],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(o),
										p = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(b(p)), u = !0
								}
							} else u = !1
						}
					} catch (f) {
						u = !1
					}
					u || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, P = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !P(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, k = () => async (e, t, s) => {
					var o, n;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (o = Object(u.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(h.K)(i);
						return Object(r.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(f({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return st
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return ot
			})), s.d(t, "commentsPagePending", (function() {
				return nt
			})), s.d(t, "commentsPageLoaded", (function() {
				return rt
			})), s.d(t, "commentsPageFailed", (function() {
				return it
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return at
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return dt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return ct
			})), s.d(t, "commentsPageRequested", (function() {
				return lt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return mt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return pt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return ut
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/discoveryUnit.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts"),
				a = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditSettings.ts"),
				c = s("./src/reddit/endpoints/governance/posts.ts"),
				l = s("./src/reddit/endpoints/page/commentsPage.ts"),
				m = s("./src/reddit/endpoints/page/subredditPage.ts"),
				p = s("./src/reddit/endpoints/profile/info.ts"),
				u = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/pageTitle.ts"),
				g = s("./src/reddit/actions/economics/helpers/async.ts"),
				C = s("./src/reddit/actions/externalAccount.ts"),
				x = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				f = s("./src/reddit/actions/platform.ts"),
				v = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/presence.ts"),
				y = s("./src/reddit/actions/profile/index.ts"),
				E = s("./src/reddit/actions/subreddit.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				w = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/constants/graphql.ts"),
				j = s("./src/reddit/constants/parameters.ts"),
				I = s("./src/reddit/constants/posts.ts"),
				S = s("./src/reddit/helpers/commentList/index.ts"),
				_ = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				T = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Subreddit/index.ts"),
				M = s("./src/reddit/models/User/index.ts"),
				A = s("./src/reddit/selectors/category.ts"),
				F = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				R = s("./src/reddit/selectors/experiments/postSeo.ts"),
				B = s("./node_modules/reselect/es/index.js"),
				D = s("./src/reddit/constants/experiments.ts"),
				V = s("./src/reddit/helpers/chooseVariant/index.ts"),
				U = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				W = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				H = s("./src/reddit/selectors/platform.ts"),
				K = s("./node_modules/fbt/lib/FbtPublic.js"),
				G = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				q = s("./src/reddit/selectors/user.ts");
			const z = new Set([u.g.AntiEvilOps, u.g.AutomodFiltered, u.g.CommunityOps, u.g.ContentTakedown, u.g.CopyrightTakedown, u.g.Moderator, u.g.Reddit]),
				Q = new Set([u.g.Author, u.g.AuthorDeleted]),
				Y = Object(B.a)(U.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return z.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = K.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(G.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== T.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				J = Object(B.a)(U.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return Q.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = K.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(G.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== T.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				X = Object(B.a)(q.k, U.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				Z = Object(B.a)(H.f, U.a, Y, J, W.a, X, W.b, (e, t, s, o, n, r, i) => {
					if (!e || !t || n) return !1;
					if (o) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var $ = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ee = s("./src/reddit/selectors/posts.ts"),
				te = s("./src/reddit/selectors/subreddit.ts"),
				se = s("./src/lib/makeActionCreator/index.ts"),
				oe = s("./src/lib/makeCommentsPageKey/index.ts"),
				ne = s("./src/reddit/actions/ads/index.ts"),
				re = s("./src/reddit/helpers/canonicalUrls.ts"),
				ie = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ae = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				de = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ce = s("./src/lib/performanceTimings/index.tsx"),
				le = s("./src/reddit/actions/gold/powerups.ts"),
				me = s("./src/lib/makeListingKey/index.ts"),
				pe = s("./src/reddit/actions/googleQASchema/constants.ts");
			const ue = Object(se.a)(pe.b),
				he = Object(se.a)(pe.a);
			var be = s("./src/reddit/actions/linkedPosts/constants.ts");
			const ge = Object(se.a)(be.a),
				Ce = Object(se.a)(be.c),
				xe = Object(se.a)(be.b);
			var fe = s("./src/lib/makeGqlRequest/index.ts"),
				ve = (s("./src/redditGQL/operations/OtherDiscussions.json"), s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				Oe = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				ye = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				Ee = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Pe = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: o,
				response: n
			}) => {
				if (!n.ok) return void t(n.error);
				const r = n.body,
					{
						post: i
					} = r && r.data,
					a = e(),
					d = Object(me.a)(o, null, {
						isOtherDiscussions: !0
					});
				if (i) {
					if (i.otherDiscussions && i.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = i, {
							postFlair: n,
							postIds: r,
							posts: c,
							profiles: l,
							subreddits: m
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(Oe.e)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: o
									} = e;
									if (o && o.type === u.a.Post && o.postInfo) {
										const e = Object(Oe.e)(o.postInfo);
										t.posts[e.id] = e
									}
									return Object(u.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(ye.a)(e.profile)) : Object(u.m)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(Ee.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(ve.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: o
									} of e.edges) {
									const e = s(o);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						s({
							count: t,
							key: d,
							meta: a.meta,
							postFlair: n,
							postId: o,
							postIds: r,
							posts: c,
							profiles: l,
							subreddits: m
						})
					}
				} else s({
					count: 0,
					key: d,
					meta: a.meta,
					postFlair: {},
					postId: o,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const we = Object(se.a)(x.a),
				ke = Object(se.a)(x.b),
				je = Object(se.a)(x.c);
			var Ie = s("./src/reddit/actions/subreddit/constants.ts"),
				Se = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var _e = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						t({
							altText: n && n.media && (n.media.still && n.media.still.altText || n.media.obfuscated && n.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (r) {
						s(r)
					}
				},
				Le = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var Te = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!n || !n.linked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Le.a)(o),
							l = n.linked.posts && n.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Oe.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(u.m)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(Ee.a)(t)
							}
						}
						t({
							dist: n.linked.posts && n.linked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				Ne = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Me = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Ae = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: o,
					options: n,
					postId: r,
					subreddit: i
				}) => {
					try {
						if (!i) return;
						const o = i.elements || i.posts,
							a = t(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, o = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: o
								}
							})(o, a.posts && a.posts.models),
							c = Object(Ne.a)(d),
							l = Me(c),
							m = o.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: p,
								sort: u,
								subredditName: b
							} = n,
							g = e && r ? Object(Le.a)(r, !0) : Object(me.a)(b, h.V[u], {
								t: p
							});
						s({
							dist: o.dist,
							key: g,
							meta: a.meta,
							postIds: m,
							posts: l
						})
					} catch (a) {
						o(a)
					}
				},
				Fe = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Re = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Be = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!n || !n.nsfwLinked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Re.a)(o),
							l = n.nsfwLinked.posts && n.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Oe.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(u.m)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(Ee.a)(t)
							}
						}
						t({
							dist: n.nsfwLinked.posts && n.nsfwLinked.posts.dist || null,
							key: c,
							meta: a.meta,
							posts: r,
							postIds: s,
							subreddits: i
						})
					} catch (r) {
						s(r)
					}
				},
				De = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ve = Object(se.a)(De.b),
				Ue = Object(se.a)(De.a);
			var We = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const He = Object(se.a)(We.b),
				Ke = Object(se.a)(We.a),
				Ge = Object(se.a)(Ie.j),
				qe = Object(se.a)(Ie.i),
				ze = (Object(se.a)(Ie.r), Object(se.a)(Ie.q), e => async (t, s, {
					gqlContext: o
				}) => {
					var n, r, i, a;
					const {
						includeNSFWListingBelowExperiment: d,
						includeListingBelowExperiment: c,
						includeOtherDiscussions: l,
						includePostFeed: m,
						includePostQASchemaEligibilityFlag: p,
						listingBelowExperimentVariant: u,
						postId: b,
						range: g,
						sort: C,
						subredditName: x
					} = e, f = Object(me.a)(b, null, {
						isOtherDiscussions: !0
					}), v = s(), O = Object(ee.A)(v, {
						listingKey: f
					}), y = l && (!O || 0 === O.length), E = Object(me.a)(x, h.V[C], {
						t: g
					}), P = Object(ee.A)(v, {
						listingKey: E
					}), w = m && (c || !P || 0 === P.length), k = c, j = d, I = Object(ee.H)(v, {
						postId: b
					}), S = !!I && !!I.media && (Object(T.I)(I.media) || Object(T.F)(I.media)) && !I.media.altText;
					if (!(y || w || k || j || S || p)) return;
					y && t(je({
						key: f
					}));
					const _ = await ((e, t) => Object(fe.a)(e, {
							...Se,
							variables: t
						}))(o(), e),
						L = _.body,
						N = Object(Fe.a)(u),
						M = k && !!(null === (i = null === (r = null === (n = L.data) || void 0 === n ? void 0 : n.post) || void 0 === r ? void 0 : r.linked) || void 0 === i ? void 0 : i.isEligible),
						A = k && (N || !M);
					p && (_.ok ? L.data && L.data.post && t(ue({
						postId: b,
						isEligibleForQASchema: null !== (a = L.data.post.isEligibleForQASchema) && void 0 !== a && a
					})) : t(he())), y && Pe({
						getState: s,
						onFailure: e => t(we(e)),
						onSuccess: e => t(ke(e)),
						postId: b,
						response: _
					}), (w && !k || A) && (_.ok ? L.data && Ae({
						getState: s,
						isLinkedPostsFallback: A,
						onFailure: e => t(qe(e)),
						onSuccess: e => t(Ge(e)),
						options: e,
						postId: b,
						subreddit: L.data.subreddit
					}) : t(qe(_.error))), k && M && !N && _.ok && L.data && Te({
						getState: s,
						onFailure: e => t(xe(e)),
						onSuccess: e => t(Ce(e)),
						postId: b,
						post: L.data.post
					}), j && _.ok && Be({
						getState: s,
						onFailure: e => t(Ke(e)),
						onSuccess: e => t(He(e)),
						postId: b,
						post: L.data.post
					}), S && _.ok && L.data && _e({
						getState: s,
						onFailure: e => t(Ue(e)),
						onSuccess: e => t(Ve(e)),
						postId: b,
						post: L.data.post
					}), k && t(ge({
						postId: b,
						isEligibleForLinkedPosts: M
					}))
				}),
				Qe = e => {
					var t, s;
					const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						n = o && Object(u.s)(o),
						{
							sortToUse: r
						} = Object(_.a)(e, n);
					return (!r || r === h.t.CONFIDENCE) && Object(V.c)(e, {
						experimentEligibilitySelector: () => Object(q.J)(e),
						experimentName: D.y
					}) === D.A.Enabled
				};
			var Ye = s("./src/reddit/selectors/chatPost.ts"),
				Je = s("./src/reddit/selectors/seo/index.ts"),
				Xe = s("./src/reddit/actions/pages/constants.ts"),
				Ze = s("./src/lib/initializeClient/installReducer.ts"),
				$e = s("./src/reddit/reducers/pages/comments/index.ts"),
				et = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				tt = s("./src/reddit/selectors/i18n/index.ts");
			Object(Ze.a)({
				pages: {
					comments: $e.a
				}
			});
			const st = 25,
				ot = 100,
				nt = Object(se.a)(Xe.h),
				rt = Object(se.a)(Xe.f),
				it = Object(se.a)(Xe.e),
				at = (e, t, s) => {
					const o = !e,
						n = Object(ee.H)(t, {
							postId: s
						}).belongsTo,
						r = Object(te.I)(t, {
							identifier: n
						}),
						i = Object(Je.c)(t, {
							identifier: n
						}),
						a = !!Object(Fe.c)(t),
						d = Object(tt.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || o, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || o) && (!Object(N.h)(r) && !Object(Ye.d)(t, {
						postId: s
					}) && !!r || !Object(H.h)(t) && Object(R.e)(t)), e && (c.postQASchema = Object(R.d)(t)), c
				},
				dt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				ct = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				lt = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(u.s)(d) : "", p = c && Object(L.h)(c), {
						path: g,
						queryParams: O
					} = e, P = Object(x.d)(g), {
						instanceId: w
					} = O, {
						hasSortParam: S,
						sortToUse: N
					} = Object(_.a)(s(), m), M = null === (i = null === (r = Object(H.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, F = ["context", "depth", "limit", j.f].reduce((e, t) => {
						const s = parseInt(O[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: S,
						instanceId: w,
						include_categories: !0
					});
					S && (F.sort = N), F.onOtherDiscussions = P, t(v.r(m)), await t(mt(m, p, F, N));
					const R = s().posts.models[m],
						B = Object(q.K)(s());
					if (R && "subreddit" === R.belongsTo.type) {
						const e = R.belongsTo.id,
							s = Object(ce.i)(() => t(Object(le.l)(e, {
								fullData: !0,
								includeIdentity: B
							})), {
								name: "subredditPowerupsRequested",
								page: M,
								isLoggedIn: B
							});
						await s
					}
					if (R) {
						const r = ((e, t) => {
								const s = Object(ee.U)(e, {
										postId: t
									}),
									o = Object(ee.H)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							i = Object(te.I)(s(), {
								identifier: R.belongsTo
							});
						if (i && (e => D.Pd.Redirect === Object(V.b)(e, {
								experimentEligibilitySelector: Z,
								experimentName: D.Hd
							}))(s())) return void t(Object(o.c)(i.url));
						if ((R.media && R.media.type) === T.o.LIVEVIDEO) {
							const e = `/rpan${R.belongsTo.type===I.a.SUBREDDIT?i.url:"/"}${Object(u.t)(R.id)}`;
							return void t(Object(o.c)(e))
						}
						if (R.belongsTo.type !== I.a.SUBREDDIT || R.isSponsored) {
							if (R.belongsTo.type === I.a.PROFILE) {
								const e = Object(ce.i)(() => t(y.d(i.name)), {
									name: "getProfileInfo",
									page: M,
									isLoggedIn: B
								});
								await e
							}
						} else {
							if (!!!Object(te.P)(s(), {
									subredditId: R.belongsTo.id
								})) {
								const e = Object(ce.i)(() => t(E.o(i.name)), {
									name: "getSubredditRules",
									page: M,
									isLoggedIn: B
								});
								await e
							}
						}
						const d = at(!1, s(), m),
							c = P;
						if (dt(c, d)) {
							Object(ie.d)(ie.a.LinkedPosts);
							const e = Object(ie.c)(ie.a.LinkedPosts);
							Object(ie.d)(ie.a.NsfwLinkedPosts);
							const o = Object(ie.c)(ie.a.NsfwLinkedPosts),
								n = {
									adContext: {
										layout: k.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.dc.WEEK.toUpperCase(),
									sort: h.O.TOP,
									subredditName: i.name
								},
								r = {
									postId: m
								},
								a = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Fe.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object(et.a)(s())
								},
								p = ct(d);
							Object(ce.i)(() => t(ze({
								...r,
								...n,
								...a,
								...l,
								...p,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: B,
								page: M
							});
							0
						}
						t(Object(C.p)()), t(f.l({
							title: r
						}));
						const l = s().posts.instances[m] ? e.queryParams.instanceId : R.postId;
						t(Object(a.b)(l)); {
							const e = Object(A.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(n.c(e))))
						}
					} else t(f.l({
						title: b.d()
					}));
					const {
						routePrefix: U
					} = e.params;
					I.b[U] === I.a.PROFILE ? Object(re.d)(s(), t, e) : Object(re.b)(s(), t, e)
				}, mt = (e, t, s, o) => async (n, a, d) => {
					var u, b;
					const C = a(),
						x = Object(oe.a)(e, t, s),
						{
							subredditName: y
						} = s,
						E = C.pages.comments.keyToHeadCommentId.hasOwnProperty(x),
						k = C.pages.comments.api.fullyLoaded[x],
						j = C.pages.comments.api.error[x],
						I = C.pages.comments.api.pending[x],
						_ = !Object(q.J)(C),
						L = Object(q.k)(C),
						T = o === h.t.CHAT,
						N = !!C.platform.lastPage;
					if ((I || E && !j) && !(T && N)) {
						if (E && !C.sidebarPromotedPosts.firstFetch) {
							const e = Object(H.h)(C) ? de.a.COMMENTS_OVERLAY : de.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(ne.b)(e))
							})
						}
						return void(k || n(ut(e, t, s)))
					}
					n(r.g());
					const A = C.user.prefs.commentMode;
					n(nt({
						key: x,
						postId: e,
						commentMode: A
					}));
					const R = {
						...s,
						...T ? {
							sort: h.t.LIVE
						} : _ ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(ee.H)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > ot && (R.truncate = st)
					}
					const B = null === (b = null === (u = Object(H.b)(C)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						D = Object(ce.i)(() => Object(l.a)(d.apiContext(), e, t, R, Object(F.a)(a()), Qe(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !_,
							page: B
						}),
						V = !_ && L && Object(ce.i)(() => Object(p.d)(d.gqlContext(), Object(M.e)(L)), {
							name: "fetchProfileKarma",
							isLoggedIn: !_,
							page: B
						}) || null,
						[U, W] = await Promise.all([D, V]);
					let K;
					if (n(Object(f.m)(U.status)), U.ok) {
						const t = Object.keys(U.body.posts).filter(e => !!U.body.posts[e].isMeta),
							s = U.body.posts[e];
						if (t.length) {
							const e = Object(ce.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: B,
									isLoggedIn: !_
								}),
								o = await e;
							o.ok && (K = o.body)
						}
						if (W && W.ok) {
							const {
								data: e
							} = W.body, t = {
								karma: {
									...p.a
								}
							};
							if (Object(p.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							U.body && U.body.account && Object.assign(U.body.account, t)
						}
						const o = Object(S.a)(U.body, e, C);
						n(rt({
							key: x,
							postId: e,
							meta: C.meta,
							governance: K,
							shouldCollapse: o,
							...U.body
						}));
						const r = s && "subreddit" === s.belongsTo.type ? s.belongsTo.id : null,
							i = U.body.comments,
							a = U.body.posts;
						await n(Object(O.b)(a, i, r))
					} {
						const o = Object(ee.H)(a(), {
							postId: e
						});
						o && U.body.comments && Object.keys(U.body.comments).length < o.numComments ? n(ut(e, t, s)) : U.ok && n(pt({
							key: x
						}));
						const r = Object(H.h)(C) ? de.a.COMMENTS_OVERLAY : de.a.COMMENTS;
						n(Object(ne.b)(r))
					}
					if (U.ok) {
						n(P.g(x));
						const t = Object(ee.H)(a(), {
							postId: e
						});
						if (n(v.z(t, w.a.CommentsView)), t && "subreddit" === t.belongsTo.type && U.body.comments) {
							const e = Object(ce.i)(() => n(Object(g.a)({
								commentIds: Object.keys(U.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: B,
								isLoggedIn: !_
							});
							await e
						}
					} else {
						let e;
						y && (n(Object(i.subredditPending)({
							key: x
						})), e = await Object(ae.a)("subreddit", () => Object(m.a)(d.apiContext(), y, {})), n(Object(f.m)(e.status)), n(Object(i.handleSubredditPageApiError)(e, y))), n(it({
							error: U.error,
							key: x,
							...e ? e.body : U.body
						}))
					}
				}, pt = Object(se.a)(Xe.g), ut = (e, t, s) => async (o, n, r) => {
					const i = Object(oe.a)(e, t, s),
						a = n(),
						c = Object(q.K)(a),
						m = Object(q.k)(a),
						u = Object(l.a)(r.apiContext(), e, t, s, Object(F.a)(a), Qe(a)),
						h = c && m && Object(p.d)(r.gqlContext(), Object(M.e)(m)) || null,
						[b, C] = await Promise.all([u, h]);
					if (o(Object(f.m)(b.status)), b.ok) {
						if (C && C.ok) {
							const {
								data: e
							} = C.body, t = {
								karma: {
									...p.a
								}
							};
							if (Object(p.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							b.body && b.body.account && Object.assign(b.body.account, t)
						}
						const t = Object(S.a)(b.body, e, a);
						o(rt({
							key: i,
							postId: e,
							meta: a.meta,
							shouldCollapse: t,
							...b.body
						})), o(pt({
							key: i
						}));
						const s = n().posts.models[e],
							r = s && Object(ee.U)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object($.a)(a, {
							subredditId: r.id
						}) && o(Object(d.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && b.body.comments && await o(Object(g.a)({
							commentIds: Object.keys(b.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(it({
						error: b.error,
						key: i,
						...b.body
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
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
		},
		"./src/reddit/components/CelebratoryMoments/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const o = 700,
				n = 1400,
				r = 1500
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
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				u = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				C = Object(i.b)(g),
				x = ({
					isCommentBoxDesignEnabled: e,
					isTopLevelComment: t,
					children: s
				}) => r.a.createElement("div", {
					className: Object(m.a)(u.a.spacer, {
						[u.a.isCommentBoxDesign]: e,
						[u.a.isTopLevelComment]: t
					})
				}, s),
				f = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				O = e => r.a.createElement(x, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(f, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				y = C(O),
				E = Object(o.a)({
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
				P = e => r.a.createElement(E, h({}, e, {
					fallback: r.a.createElement(y, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = P
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
			t.a = Object(d.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: o,
				openRegisterModal: d,
				origin: m,
				sendEvent: h
			}) => n.a.createElement("div", {
				className: Object(r.a)(e, p.a.Wrapper, {
					[p.a.LiveStreamingWrapper]: t
				})
			}, n.a.createElement("span", {
				className: Object(r.a)(p.a.Copy, {
					[p.a.LiveStreamingCopy]: t
				})
			}, u._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), n.a.createElement("div", {
				className: p.a.CTAButtons
			}, n.a.createElement(c.s, {
				className: p.a.LoginLink,
				kind: c.a.ExternalLink,
				priority: c.b.Secondary,
				href: Object(a.a)(s, m, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), h(Object(l.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, u._("Log In", null, {
				hk: "ZR3pC"
			})), n.a.createElement(c.s, {
				className: Object(r.a)(p.a.SignupLink, {
					[p.a.LiveStreamingSignupLink]: t
				}),
				kind: c.a.ExternalLink,
				priority: c.b.Primary,
				href: Object(a.a)(s, m, "/register"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, u._("Sign Up", null, {
				hk: "48wH4o"
			})))))
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				C = s("./src/reddit/constants/headers.ts"),
				x = s("./src/reddit/models/Toast/index.ts");
			const f = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const i = await (async (e, t, s) => Object(b.a)(Object(g.a)(e, [C.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.ib.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					s(Object(u.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(h.f({
						id: d,
						kind: x.b.SuccessCommunityGreen,
						text: n
					}))
				} else s(h.f({
					id: a,
					kind: x.b.Error,
					text: o.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: o.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: f(e, t)
				}))
			};
			var v = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				E = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const _ = (e, t, s, o, n) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(S.listing)(r, void 0, {
						oldSort: s,
						sort: o,
						source: n
					}),
					userSubreddit: Object(S.userSubreddit)(r)
				}),
				L = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				T = e => ({
					subreddit: Object(S.subreddit)(e),
					userSubreddit: Object(S.userSubreddit)(e)
				}),
				N = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...T
				});
			var M = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = s("./src/reddit/icons/svgs/Info/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				R = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/tooltip.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(W),
				K = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const G = Object(E.a)(w.a),
				q = e => e === K.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === K.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== K.a.None) {
							e(t === K.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", K.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", K.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", K.a.None)
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
						selectedSort: n
					} = this.props;
					return r.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, r.a.createElement(k.b, {
						className: Object(d.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${q(n)}`,
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
					}, r.a.createElement(k.b, {
						displayText: q(K.a.First),
						isSelected: n === K.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(k.b, {
						displayText: q(K.a.Last),
						isSelected: n === K.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(k.b, {
						displayText: q(K.a.None),
						isSelected: n === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Q = z;
			const Y = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Z = Object(E.a)(w.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(R.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(V.b)(Y),
					highlightIsOpen: Object(V.b)(J),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(B.k)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					post: D.H,
					postPermalink: D.G,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(U.s)(e),
							o = !!Object(B.k)(e, {
								postId: t
							}),
							n = Object(D.H)(e, {
								postId: t
							});
						return (o || s) && !!n && !!n.previousVisits && n.previousVisits.length > 0
					},
					selectedHighlightSort: R.p
				}),
				ee = Object(i.b)($, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(m.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: Y
					})),
					onOpenHighlightDropdown: t => {
						e(Object(l.h)({
							tooltipId: J
						})), t()
					},
					onSetSuggestedSort: s => e(f(t, s)),
					hideTooltip: () => e(Object(l.i)()),
					setContestMode: s => e(Object(u.V)(s, t)),
					showTooltip: () => e(Object(l.h)({
						tooltipId: X
					})),
					toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
				}));
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, o) => this.props.sendEvent(_(e, this.props.isOverlay, t, s, o)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(L("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(N(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return o.fbt._("{sort name} (suggested)", [o.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: n,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: p,
						isOverlay: u,
						location: h,
						post: b,
						postPermalink: g,
						selectedHighlightSort: C,
						showCommentHighlighter: x,
						sort: f,
						suggestedSort: E,
						showTooltip: P,
						toggleContestModeModal: w
					} = this.props, S = b.contestMode, _ = !h.search.includes(c.t.CONFIDENCE), T = f === c.t.CONFIDENCE && _, N = p && !T, F = c.v[f], R = F ? F() : "", B = E && f === E && !T ? this.addSuggestedLabel(R) : R, D = S ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), V = S ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), U = S ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = S && !p;
					return r.a.createElement("div", {
						className: Object(d.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !x && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(k.b, {
						className: Object(d.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Sort by",null,{hk:"E6T9r"})}: ${B}`,
						id: Y,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Z, {
						isOpen: i,
						tooltipId: Y
					}, [c.t.CONFIDENCE, c.t.TOP, c.t.NEW, c.t.CONTROVERSIAL, c.t.OLD, c.t.QA].map(e => {
						const t = s || g,
							o = Object(I.b)(t),
							n = c.v[e],
							i = n ? n() : "";
						return r.a.createElement(y.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, r.a.createElement(k.b, {
							displayText: i,
							isSelected: f === e,
							skipRoleAttr: !0
						}))
					}))), N && !W && (E ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: f !== E ? this.setSortOnClick : this.clearSortOnClick
					}, f !== E ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: X,
						onMouseEnter: P,
						onMouseLeave: l
					}, r.a.createElement(O.c, {
						className: H.a.Tooltip,
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: X
					}), r.a.createElement(A.a, {
						className: H.a.Info
					})))), p && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(j.a, {
						className: H.a.ToggleSwitch,
						on: S
					}))), x && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(Q, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: C,
						trackHighlight: L
					})), n && r.a.createElement(v.a, {
						actionText: V,
						headerText: D,
						modalText: U,
						onConfirm: this.setContestMode,
						toggleModal: w,
						withOverlay: !0
					}))
				}
			}
			t.a = ee(Object(P.c)(te))
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
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				userIconContainerStyles: "_3W217SmtnKG5RvNrTd7YW0",
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
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
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
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				CommentCreationWithUpvote: "_309bpvXJ7EHKGz8bf2ywJT",
				commentCreationWithUpvote: "_309bpvXJ7EHKGz8bf2ywJT",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
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
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
				return I
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "a", (function() {
				return H
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				C = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(O);
			const E = l.a.wrapped(f.a, "CommentsIcon", y.a),
				P = l.a.wrapped(v.a, "SnooFacepalm", y.a),
				w = l.a.p("EmptyTitle", y.a),
				k = l.a.p("ErrorTitle", y.a),
				j = l.a.p("EmptyText", y.a),
				I = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, e)
				}, a.a.createElement(E, null), a.a.createElement(w, null, t ? o.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : o.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(j, null, o.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				S = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(w, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(j, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				_ = ({
					link: e
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(w, null, o.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(u.m, {
					to: Object(b.b)(e)
				}, o.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				L = Object(d.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: o
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: o
					}, o))
				}))(({
					apiError: e,
					onClick: t
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(P, null), a.a.createElement(k, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : o.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(u.k, {
					onClick: t
				}, o.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				T = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: o
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, y.a.ErrorFullPage)
				}, a.a.createElement(L, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: o
				})),
				N = l.a.wrapped(({
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(p.a, null)), "LoadingFullPage", y.a),
				M = l.a.div("CommentsPlaceholderContainer", y.a),
				A = l.a.div("CommentPlaceholder", y.a),
				F = l.a.div("Avatar", y.a),
				R = l.a.div("VoteColumn", y.a),
				B = l.a.div("TextColumn", y.a),
				D = l.a.wrapped(x.a, "Upvote", y.a),
				V = l.a.wrapped(C.a, "Downvote", y.a),
				U = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(M, null, r()(10, t => a.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(F, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(R, null, a.a.createElement(D, null), a.a.createElement(V, null)), a.a.createElement(B, null, a.a.createElement(U, null), a.a.createElement(W, null)))))
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
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			let o = {};

			function n(e) {
				return e in o
			}

			function r(e) {
				o[e] = !0
			}

			function i() {
				o = {}
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
			var o, n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				b = s("./src/reddit/constants/comments.ts"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/constants/gold.ts"),
				f = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/components/LottieAnimation/index.tsx"),
				O = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				y = s.n(O);
			! function(e) {
				e.Lottie = "lottie"
			}(o || (o = {}));
			const E = {
				threshold: [.75, .001]
			};
			var P = a.a.memo(e => {
				const t = Object(i.useRef)(null),
					[s, n] = Object(i.useState)(!1),
					r = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && n(!1), t <= .001 && n(!0)
						})
					}, []);
				Object(f.a)(t, r, E);
				const d = e.type;
				return a.a.createElement("div", {
					className: Object(l.a)(y.a.effectContainer, y.a[d + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, d === o.Lottie && a.a.createElement(v.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const w = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: k,
							effectHighlight: {
								type: o.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				k = "ff0000";

			function j(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						o = Math.floor(Math.random() * s.length);
					return s[o] || null
				}(e ? function(e) {
					return e.map(S).filter(e => e !== I)
				}(e) : [])
			}
			const I = {
				glowHexColor: null,
				effectHighlight: null
			};

			function S(e) {
				for (const t of w) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return I
			}
			var _ = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				L = s("./src/reddit/selectors/comments.ts"),
				T = s("./src/reddit/selectors/commentSelector.ts"),
				N = s("./src/reddit/selectors/communityAwards.ts"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				R = s("./node_modules/fbt/lib/FbtPublic.js"),
				B = s("./src/reddit/models/PostDraft/index.ts"),
				D = s("./src/lib/makeDraftKey/index.ts"),
				V = s("./src/lib/objectSelector/index.ts"),
				U = s("./src/reddit/actions/comment/authoring.ts"),
				W = s("./src/reddit/actions/comment/moderation.ts"),
				H = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				K = s("./src/reddit/icons/fonts/helpers.tsx");
			var G = e => a.a.createElement("i", {
					className: Object(l.a)(Object(K.b)("expand", e.isFilled), e.className)
				}),
				q = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				z = s.n(q);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Y, J, X = s("./node_modules/lodash/defer.js"),
				Z = s.n(X),
				$ = s("./src/reddit/actions/tooltip.ts"),
				ee = s("./src/reddit/selectors/tooltip.ts"),
				te = s("./src/reddit/actions/gold/modals.ts"),
				se = s("./src/reddit/actions/modal.ts"),
				oe = s("./src/reddit/actions/reportFlow/index.ts"),
				ne = s("./src/reddit/helpers/correlationIdTracker.ts"),
				re = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ie = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ae = s("./src/reddit/models/Comment/index.ts"),
				de = s("./src/reddit/selectors/activeModalId.ts"),
				ce = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				le = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				me = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				he = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				be = s.n(he);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(Y || (Y = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(J || (J = {}));
			const ge = (e, t) => {
					const s = be.a[t],
						o = be.a[e];
					return Object(l.a)(s, o)
				},
				Ce = e => Object(l.a)(be.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[be.a.isInOverlay]: e.isInOverlay,
					[be.a.isModModeEnabled]: e.isModModeEnabled,
					[be.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var xe = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				fe = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				ve = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Oe = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ye = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ee = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Pe = s("./src/reddit/components/OverflowMenu/index.tsx"),
				we = s("./src/reddit/components/ReportFlow/index.tsx"),
				ke = s("./src/reddit/components/ReportFlow/new.tsx"),
				je = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Se = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				_e = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Le = s("./src/reddit/helpers/trackers/modTools.ts"),
				Te = s("./src/reddit/layout/row/Inline/index.tsx"),
				Ne = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				Me = s.n(Ne),
				Ae = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				Fe = s("./src/reddit/selectors/gold/awardIcon.ts");
			var Re = e => {
					const t = Object(d.e)(me.b),
						s = Object(d.e)(e => t && Object(Fe.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? a.a.createElement("img", {
						className: Object(l.a)(Me.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : a.a.createElement(Ae.a, e)
				},
				Be = s("./src/reddit/icons/fonts/index.tsx"),
				De = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				We = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				He = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ke = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				Ge = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				qe = s.n(Ge);
			const ze = p.a.wrapped(De.a, "CommentIcon", qe.a),
				Qe = p.a.wrapped(He.a, "Report", qe.a),
				Ye = p.a.wrapped(Ue.a, "IgnoreReport", qe.a),
				Je = p.a.wrapped(ye.a, "ModActionsMenu", qe.a),
				Xe = p.a.div("OverflowMenuSpacer", qe.a),
				Ze = p.a.wrapped(Pe.a, "DropdownRow", qe.a),
				$e = p.a.wrapped(Te.a, "Flatlist", qe.a),
				et = p.a.button("Button", qe.a),
				tt = p.a.wrapped(xe.a, "ModToolsFlatlist", qe.a),
				st = p.a.wrapped(Se.a, "ViewReportsDropdown", qe.a),
				ot = e => `Comment-${e}--Modal--DeleteComment`,
				nt = e => `Distinguish--Dropdown--${e}`,
				rt = e => `${e}-overflow-menu`,
				it = e => `View--Reports--${e}`,
				at = Object(c.c)({
					claimedFreeAward: me.b,
					currentUser: F.k,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(de.a)(e) === ot(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(ee.b)(nt(t.id))(e),
					isCommentFollowEnabled: Ke.a,
					isFollowed: (e, {
						comment: t
					}) => Object(L.z)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(L.B)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(L.C)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(ee.b)(it(t.id))(e),
					isLoggedIn: F.K,
					postIsArchived: (e, {
						comment: t
					}) => Object(A.B)(e, {
						postId: t.postId
					}),
					isBlockedUserBannerEnabled: (e, {
						comment: t
					}) => !!Object(A.w)(e, {
						postId: t.postId
					}) && Object(ce.a)(e),
					postAuthorIsBlocked: (e, {
						comment: t
					}) => Object(A.w)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(A.C)(e, {
						postId: t.postId
					}),
					commentPermalink: (e, {
						comment: t
					}) => Object(L.m)(e, {
						commentId: t.id
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(L.I)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(pe.t)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(A.U)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: le.a
				});
			class dt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(ie.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Le.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Le.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Le.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(ne.d)(ne.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Le.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Le.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Le.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: o
						} = this.props;
						e(o ? ae.a.UNFOLLOWED : ae.a.FOLLOWED), t(o ? Object(Le.f)("follow", s.id) : Object(Le.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Le.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(ke.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: we.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : a.a.createElement(we.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: we.b,
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
						commentPermalink: o,
						deleteComment: n,
						depth: r,
						handleReply: d,
						isAvatarsInCommentsEnabled: c,
						isCommentFollowEnabled: m,
						isFollowed: p,
						isLoggedIn: u,
						isPendingDeletion: h,
						onDistinguishComment: b,
						onIgnoreReports: g,
						onToggleReportsDropdown: C,
						moderatorPermissions: x,
						modModeEnabled: f,
						postIsArchived: v,
						postAuthorIsBlocked: O,
						isBlockedUserBannerEnabled: y,
						postIsLocked: E,
						renderedInOverlay: P,
						sendEvent: w,
						subreddit: k,
						subredditAboutInfo: j,
						toggleDeleteCommentModal: I,
						toggleSendReplies: S,
						trackCommentClick: _
					} = this.props, L = Object(re.a)(x), T = !!s && s.displayText === e.author, N = !!s && s.isEmployee, M = !(j && j.userIsBanned) && (E || v || O && y || L && u || e.isLocked ? L && u : u || c), A = Object(Ee.a)(e), F = L && T && !e.bannedBy, B = T && N && !e.bannedBy, D = F || B, V = s && e.isGildable, U = m && !v, W = [];
					M && W.push(a.a.createElement(et, {
						disabled: h,
						key: "reply",
						onClick: () => {
							d(), Z()(() => _("reply", e.id)())
						}
					}, a.a.createElement(ze, null), R.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), V && W.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Re, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => R.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), W.push(a.a.createElement(je.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: o,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == k ? void 0 : k.type
					}, a.a.createElement(et, {
						onClick: () => this.sendCommentEventWithName("share")
					}, R.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), T || W.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(He.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => R.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), W.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => R.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => R.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), T && W.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => R.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), U && W.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Be.a, {
							name: "notification",
							isFilled: p
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: p ? () => R.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => R.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const H = W.map(e => a.a.isValidElement(e) ? e : a.a.createElement(et, {
							className: ge(e.breakpointGroup, Y.HideIfVWSmaller),
							disabled: h,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						K = W.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Ze, {
							className: ge(e.breakpointGroup, Y.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: qe.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement($e, {
						className: Object(l.a)(Ce({
							depth: r,
							isInOverlay: P,
							isModModeEnabled: L && f,
							isFollowCommentEnabled: U
						}), t)
					}, H, a.a.createElement(Xe, {
						className: T ? void 0 : ge(J.LoggedInUser, Y.HideIfVWLarger)
					}, a.a.createElement(Pe.b, {
						className: qe.a.overflowMenu,
						disabled: h,
						dropdownId: rt(e.id),
						onClick: () => w(Object(Le.a)("comment_overflow_menu", e.id))
					}, K, T && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ze, {
						displayText: R.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: qe.a.dropdownRowText
					}, a.a.createElement(Be.a, {
						name: "delete"
					})), a.a.createElement(_e.a, {
						text: R.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: S,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(ve.a, {
						actionText: R.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: R.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: R.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: R.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: n,
						toggleModal: I,
						trackClick: () => {},
						withOverlay: !0
					}), L && a.a.createElement(a.a.Fragment, null, f && a.a.createElement(tt, {
						className: ge(J.Moderator, Y.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: T
					}), a.a.createElement(Je, {
						className: f ? ge(J.Moderator, Y.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => w(Object(Le.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(We.a, null), a.a.createElement(ue.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Ee.c)(e) && !f && a.a.createElement(fe.a, {
						text: `${A}`,
						onClick: () => {
							C(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: it(e.id)
					}, a.a.createElement(st, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: it(e.id)
					}), e.ignoreReports ? a.a.createElement(Ye, null) : a.a.createElement(Qe, null)), D && a.a.createElement(fe.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(Ve.a, null), a.a.createElement(Oe.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: N,
						isUserMod: L,
						onDistinguishComment: b,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: nt(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var ct = Object(d.b)(at, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(U.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(se.i)(ot(t.id))), e(Object($.h)({
							tooltipId: rt(t.id)
						}))
					},
					handleEdit: () => {
						const o = t.media && t.media.rteMode;
						s && e(Object(U.d)({
							commentId: t.id,
							draftKey: Object(D.a)(B.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: o,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(U.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onCommentFollow: s => e(Object(U.r)(t.id, s)),
					onDistinguishComment: (s, o) => e(Object(W.b)(t.id, s, o)),
					onFollowedCommentExpire: () => e(Object(h.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (s, o) => e(Object(te.d)({
						awardId: o,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(W.g)(t.id)),
					onReportClick: () => e(Object(oe.c)(t.id)),
					onToggleSave: () => e(Object(h.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object($.h)({
						tooltipId: nt(t.id)
					})),
					onToggleReportsDropdown: () => e(Object($.h)({
						tooltipId: it(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(se.i)(ot(t.id))),
					toggleSendReplies: () => e(Object(U.k)(t.id))
				}))(Object(Ie.c)(dt)),
				lt = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				mt = s.n(lt);
			var pt = a.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return a.a.createElement("div", {
						className: mt.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				ut = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				ht = s.n(ut);
			var bt = a.a.memo(e => a.a.createElement("div", {
					className: ht.a.gradientHighlightContainer,
					role: "presentation"
				})),
				gt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ct = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				xt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				ft = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				vt = s("./src/reddit/components/ModModeReports/index.tsx"),
				Ot = s("./src/reddit/components/PostTopMeta/index.tsx"),
				yt = s("./src/reddit/components/RichTextJson/index.tsx"),
				Et = s("./src/reddit/components/UserIcon/index.tsx"),
				Pt = s("./src/reddit/components/UserIcon/constants.ts"),
				wt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				kt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				jt = s("./src/reddit/constants/componentTestIds.ts"),
				It = s("./src/reddit/contexts/PageLayer/index.tsx"),
				St = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				_t = s("./node_modules/raf/index.js"),
				Lt = s.n(_t);

			function Tt() {
				return (Tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Nt = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Mt = a.a.createContext(!1);
			class At extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Lt()(this.setVisible)
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
						...Nt,
						...t
					};
					return a.a.createElement(St.a, Tt({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Mt.Provider, {
						value: s
					}, e)))
				}
			}
			var Ft = s("./src/reddit/controls/ErrorText/index.tsx"),
				Rt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Bt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Dt = s("./src/reddit/helpers/flair.ts"),
				Vt = s("./src/reddit/models/Subreddit/index.ts"),
				Ut = s("./src/reddit/models/User/index.ts"),
				Wt = s("./src/reddit/models/Vote/index.ts"),
				Ht = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Kt = s("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				Gt = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				qt = s("./src/reddit/selectors/poll/index.ts"),
				zt = s("./src/reddit/selectors/userPrefs.ts"),
				Qt = s("./src/reddit/selectors/moderatingComments.ts"),
				Yt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Jt = s.n(Yt),
				Xt = s("./src/config.ts"),
				Zt = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				$t = s("./src/reddit/selectors/experiments/replyWithUpvote.ts"),
				es = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function ts() {
				return (ts = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ss = p.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return a.a.createElement("button", Q({}, s, {
						className: Object(l.a)(t, z.a.expandButton)
					}), a.a.createElement(G, {
						className: z.a.expandIcon
					}))
				}), "ExpandButton", Jt.a),
				os = p.a.wrapped(ct, "FlatList", Jt.a),
				ns = p.a.wrapped(Ft.b, "ErrorText", Jt.a),
				rs = p.a.wrapped(xt.a, "HorizontalVotes", Jt.a),
				is = p.a.div("ActionBar", Jt.a),
				as = p.a.wrapped(gt.a, "TopMeta", Jt.a),
				ds = p.a.div("CommentContentWrapper", Jt.a),
				cs = p.a.div("CommentWrapper", Jt.a),
				ls = p.a.div("CommentBody", Jt.a),
				ms = p.a.wrapped(ft.b, "AuthorHovercard", Jt.a),
				ps = Object(It.u)(),
				us = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(T.b)(e, t),
					currentProfileModPermissions: It.h,
					depth: (e, t) => Object(L.j)(e, t),
					collapsed: Qt.b,
					collapsedBecauseCrowdControl: Qt.a,
					currentUser: F.k,
					flair: L.e,
					focused: L.t,
					highlightAnimationDisabled: zt.c,
					isAuthorPresent: L.y,
					isEditing: L.A,
					isLoggedIn: F.K,
					isPendingDeletion: L.C,
					isPresenceConsumptionExpEnabled: Kt.a,
					isPresenceTogglePref: F.jb,
					isReplyWithUpvoteExperiment: $t.a,
					moderatorPermissions: (e, t) => {
						const s = Object(T.b)(e, t);
						return s ? Object(M.l)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: qt.f,
					modModeEnabled: It.S,
					errorMsgs: L.G,
					replyFormOpen: L.J,
					subreddit: It.r,
					subredditType: L.L,
					allowNFTs: Zt.a,
					hasSupporterRing: Gt.a
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: o,
					trackCommentClick: n
				}) => ({
					onCollapseClick: () => e(Object(h.o)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: o
					})),
					onIgnoreReports: () => e(Object(W.g)(t)),
					onVoteClick: s => {
						const [o, r] = s === Wt.a.upvoted ? [Object(h.q)(t), "upvote_comment"] : [Object(h.j)(t), "downvote_comment"];
						n(r, t)(), e(o)
					}
				})),
				hs = Object(V.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				bs = e => a.a.createElement("div", e, e.children),
				gs = e => a.a.createElement(a.a.Fragment, null, e.children),
				Cs = ps(us(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: o,
						commentsPageKey: n,
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						currentProfileModPermissions: c,
						currentUser: m,
						depth: p,
						errorMsgs: u,
						flair: h,
						focused: b,
						hasAwardGradient: g,
						highlightAnimationDisabled: C,
						highlightTreatment: x,
						isActive: f,
						isAuthorPresent: v,
						isAvatarsInCommentsEnabled: O,
						isEditing: y,
						isFirstInList: E,
						isHighlighted: w,
						isLoggedIn: k,
						isPendingDeletion: j,
						isPresenceConsumptionExpEnabled: I,
						isPresenceTogglePref: S,
						isReplyWithUpvoteExperiment: _,
						moderatorPermissions: L,
						modModeEnabled: T,
						onCollapseClick: N,
						onIgnoreReports: M,
						onLineMouseOver: A,
						onVoteClick: F,
						prediction: V,
						postId: W,
						replyFormOpen: K,
						subreddit: G,
						trackCommentClick: q,
						triggerCelebratoryMoment: z,
						renderedInOverlay: Q,
						subredditType: Y,
						onPresenceIndicatorInViewport: J,
						allowNFTs: X,
						hasSupporterRing: Z
					} = e, $ = o.isDeleted, ee = !y && !$ && !!u && u.length > 0, te = Object(D.a)(B.c.edit, o.id), se = Object(D.a)(B.c.replyToComment, o.id), oe = Object(re.a)(L), ne = o.authorIsContractor && Y === Vt.f.EmployeesOnly, ie = o.isLocked, de = oe && T, ce = !y && !$ && (k || O), le = !!m && Object(Ut.e)(m) === o.author, [me, pe] = Object(i.useState)(null), [ue, he] = Object(i.useState)(null), be = Object(ae.f)(o) || Object(ae.g)(o) ? bs : Rt.a, ge = Object(ae.f)(o) ? gs : ms;
					Object(i.useEffect)(() => {
						if (!y && !$ && (g && pe(a.a.createElement(bt, null)), null !== x)) {
							if (x.glowHexColor) {
								const e = x.glowHexColor;
								pe(a.a.createElement(pt, {
									hexColor: e
								}))
							}
							if (x.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = x.effectHighlight;
								he(a.a.createElement(P, {
									prefersReducedAnimation: C,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [y, $, g, C, x]);
					const Ce = Object(i.useContext)(Mt),
						xe = I && !$ && !Object(ae.f)(o) && (le && S || !le && v),
						fe = Object(i.useCallback)(() => {
							xe && !le && J && J(o.id)
						}, [o.id, J, xe, le]),
						ve = Object(kt.a)(o),
						Oe = !!X && Object(es.b)(o.profileImage);
					return a.a.createElement(cs, {
						className: Object(l.a)(`Comment ${o.id}`, Jt.a.CommentWrapper, {
							[Jt.a.highlightComment]: w,
							[Jt.a.deleted]: $,
							[Jt.a.focused]: b,
							[Jt.a.redesign]: O,
							[Jt.a.topLevel]: !p
						})
					}, me, ue, !y && !$ && E && a.a.createElement("div", {
						className: Jt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${Xt.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), a.a.createElement(ss, {
						className: Object(l.a)(o.id, {
							[Jt.a.hidden]: !r,
							[Jt.a.visible]: r
						}),
						onClick: () => {
							s(), N(), q("collapse", o.id)()
						},
						onMouseOver: () => A(o.id),
						onMouseOut: s
					}), a.a.createElement(ge, {
						alwaysShowChildren: !0,
						hoverDivClassName: Jt.a.AuthorHoverDiv,
						postOrComment: o,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: Q ? Ot.c.Lightbox : void 0,
						collapsed: r,
						isCommentAuthorBlocked: Object(ae.g)(o)
					}, a.a.createElement(be, {
						className: Jt.a.UserIconContainer,
						to: `/user/${o.author}/`
					}, Ce ? a.a.createElement(a.a.Fragment, null, Z && a.a.createElement("div", {
						className: Jt.a.supporterRing
					}), a.a.createElement(Et.a, {
						isNft: Oe,
						className: Object(l.a)(Jt.a.UserIcon, {
							[Jt.a.UserIconNft]: Oe
						}),
						iconUrl: o.profileImage,
						isNSFW: o.profileOver18 || !1,
						nsfwIconUrl: Pt.a,
						userName: o.author,
						isHighlighted: w,
						shouldShowPresenceIndicator: xe,
						onPresenceIndicatorInViewport: fe,
						isCommentAuthorBlocked: Object(ae.g)(o),
						collapsed: r
					})) : a.a.createElement("div", {
						className: Jt.a.UserIcon
					}))), a.a.createElement(ds, {
						className: Object(l.a)({
							[Jt.a.isActive]: f,
							[Jt.a.isCollapsed]: r,
							[Jt.a.isLocked]: ie && de,
							[Jt.a.isPendingDeletion]: j,
							[Jt.a.isRemoved]: !!o.bannedBy && de
						})
					}, a.a.createElement(Bt.a, null, R.fbt._("level {depth}", [R.fbt._param("depth", p + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(as, {
						userHasNft: Oe,
						childrenInfo: t,
						className: Object(l.a)({
							[Jt.a.collapsed]: r,
							[Jt.a.noFlair]: Object(Dt.o)(h || null)
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						comment: o,
						commentsPageKey: n,
						flair: h,
						isPostComment: !0,
						renderedInOverlay: Q,
						renderContractorBadge: ne
					}), !r && a.a.createElement(i.Fragment, null, y && a.a.createElement(H.a, {
						className: Object(l.a)(Jt.a.EditCommentForm, Jt.a.CommentCreation, {
							[Jt.a.CommentCreationWithUpvote]: _
						}),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: B.c.edit,
						draftKey: te,
						postId: W,
						rtJson: Object(kt.a)(o),
						mediaMetadata: o.media && o.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: e => Object(U.i)({
							id: o.id,
							commentsPageKey: n,
							depth: p,
							draftKey: te,
							formData: e
						}),
						submitButtonText: R.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !y && !$ && a.a.createElement(ls, {
						"data-test-id": jt.d
					}, V ? a.a.createElement(Ct.a, {
						comment: o,
						prediction: V
					}) : a.a.createElement(yt.a, {
						content: ve,
						mediaMetadata: o.media && o.media.mediaMetadata,
						rtJsonElementProps: hs(e)
					}), a.a.createElement(Ht.b, {
						content: ve
					})), T && oe && Object(Ee.c)(o) && a.a.createElement(vt.a, {
						onIgnoreReports: M,
						reportable: o
					}), ce && a.a.createElement(is, null, O && a.a.createElement(rs, {
						downvoteButtonClassName: Jt.a.voteButton,
						downvoteClassName: Jt.a.upDownVote,
						model: o,
						onVoteClick: F,
						scoreClassName: Jt.a.score,
						upvoteButtonClassName: Jt.a.voteButton,
						upvoteClassName: Jt.a.upDownVote,
						triggerCelebratoryMoment: z
					}), a.a.createElement(os, {
						comment: o,
						commentsPageKey: n,
						depth: p,
						isAvatarsInCommentsEnabled: O,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: T,
						moderatorPermissions: c || L,
						renderedInOverlay: Q,
						isCommentFocused: b,
						subreddit: G,
						trackCommentClick: q
					})), ee && u.map(e => a.a.createElement(ns, {
						key: e
					}, e)), K && a.a.createElement(H.a, {
						className: Object(l.a)(Jt.a.EditCommentForm, Jt.a.CommentCreation, {
							[Jt.a.CommentCreationWithUpvote]: _
						}),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: B.c.replyToComment,
						draftKey: se,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						postId: W,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(U.s)({
							commentsPageKey: n,
							draftKey: se,
							parentCommentDepth: p,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}) : Object(U.l)({
							commentsPageKey: n,
							draftKey: se,
							parentCommentDepth: p,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: R.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var xs = e => a.a.createElement(wt.a.Consumer, null, t => a.a.createElement(Cs, ts({}, e, {
					trackCommentClick: t
				}))),
				fs = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				vs = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Os = s("./src/reddit/helpers/path/index.ts"),
				ys = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Es = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				Ps = s.n(Es);
			const {
				fbt: ws
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ks = p.a.div("Wrapper", Ps.a), js = p.a.wrapped(ys.a, "ArrowRight", Ps.a), Is = p.a.wrapped(fs.a, "LinkOrOverlayLink", Ps.a), Ss = p.a.span("HoverSpan", Ps.a), _s = Object(c.c)({
				permalink: (e, t) => Object(L.m)(e, {
					commentId: Object(L.r)(e, t).parentId
				})
			});
			var Ls = Object(d.b)(_s)(Object(vs.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement(ks, {
					className: Object(l.a)({
						[Ps.a.isActive]: e
					})
				}, a.a.createElement(Is, {
					isOverlay: !!t,
					to: Object(Os.b)(s)
				}, a.a.createElement(Ss, null, ws._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(js, null))))),
				Ts = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Ns = s.n(Ts);
			const {
				fbt: Ms
			} = s("./node_modules/fbt/lib/FbtPublic.js"), As = p.a.div("MoreCommentsItemWrapper", Ns.a), Fs = p.a.p("MoreComments", Ns.a), Rs = p.a.wrapped(Fs, "MoreCommentsInteractive", Ns.a), Bs = Object(c.c)({
				moreCommentsItem: L.D,
				moreCommentsPending: L.E
			});
			var Ds = Object(d.b)(Bs, (e, t) => ({
					moreCommentsClicked: () => e(Object(h.l)(t.commentsPageKey, t.moreCommentsId))
				}))(({
					isActive: e,
					moreCommentsClicked: t,
					moreCommentsItem: s,
					moreCommentsPending: o
				}) => a.a.createElement(As, null, o ? a.a.createElement(Fs, null, Ms._("loading...", null, {
					hk: "47z89"
				})) : a.a.createElement(wt.a.Consumer, null, o => a.a.createElement(Rs, {
					className: Object(l.a)({
						[Ns.a.isActive]: e
					}),
					onClick: () => {
						t(), o("load_more_comment")()
					}
				}, Ms._({
					"*": "{number of more replies hidden} more replies",
					_1: "1 more reply"
				}, [Ms._plural(s.numComments, "number of more replies hidden")], {
					hk: "J0jQW"
				}))))),
				Vs = s("./node_modules/lodash/times.js"),
				Us = s.n(Vs),
				Ws = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Hs = s.n(Ws);
			const Ks = p.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: C.m
				})), "Line", Hs.a),
				Gs = p.a.div("LineContainer", Hs.a),
				qs = p.a.div("ShortLineContainer", Hs.a);
			var zs = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: o,
						onLineClick: n,
						onLineMouseOver: r,
						onLineMouseOut: i,
						onShortLineClick: d,
						parentNodeIds: c,
						type: m
					} = e;
					return a.a.createElement(Gs, null, Us()(s + 1, e => e === s ? m !== b.a.Comment || t ? null : a.a.createElement(qs, {
						key: c[e]
					}, a.a.createElement(Ks, {
						className: Object(l.a)(c[e], {
							[Hs.a.hasGlowBorder]: !!o,
							[Hs.a.topLevel]: 0 === s
						}),
						onClick: d,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : a.a.createElement(Ks, {
						className: c[e],
						key: c[e],
						onClick: n(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				Qs = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Ys = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				Js = s.n(Ys);
			const Xs = p.a.div("CommentListNodeWrapper", Js.a),
				Zs = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(C.f)
				},
				$s = () => {
					const e = document.querySelectorAll(`.${C.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(C.f)
				};
			var eo = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(Qt.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(L.l)(e, t),
				depth: (e, t) => Object(L.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const o = Object(L.l)(e, {
						commentLink: t
					});
					if (o && t.type === b.a.Comment) {
						s = j(o.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: Qs.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(L.l)(e, {
						commentLink: t
					});
					return !(t.type !== b.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(N.a)(e, t);
						return s && s.coinPrice >= x.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(L.p)(e);
					if (s === _.a.None) return !1;
					if (t.type !== b.a.Comment) return !1;
					const o = t.id,
						n = Object(T.b)(e, {
							commentId: o
						});
					if (!n) return !1;
					const r = Object(F.s)(e),
						i = !!Object(M.k)(e, {
							postId: n.postId
						}),
						a = Object(A.H)(e, {
							postId: n.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === _.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || r) && n.created > d
				}
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: o
			}) => ({
				onLineClick: n => () => {
					e(Object(h.d)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: n,
						scrollToAndRemeasure: o
					}))
				},
				onShortLineClick: () => e(Object(h.o)({
					commentId: t.id,
					commentsPageKey: s,
					scrollToAndRemeasure: o
				}))
			}))(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: o,
					commentLink: n,
					commentsPageKey: r,
					depth: i,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isAwarded: p,
					isFirstInList: u,
					isHidden: h,
					isHighlighted: C,
					onLineClick: x,
					onPresenceIndicatorInViewport: f,
					onShortLineClick: v,
					parentNodeIds: O,
					postId: y,
					renderedInOverlay: E,
					scrollToAndRemeasure: P,
					triggerCelebratoryMoment: w
				} = e, k = !!p, j = !(!d || !d.glowHexColor), I = j && i > 0, S = j, _ = a.a.createElement(Xs, {
					className: Object(l.a)(s, {
						[Js.a.isHidden]: h,
						[Js.a.glowBorderTopPadding]: I,
						[Js.a.glowBorderBottomPadding]: S
					}),
					id: n.id,
					style: {
						paddingLeft: i * (g.w + g.v) + (n.type === b.a.Comment ? g.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(zs, {
					collapsed: o,
					depth: i,
					hasGlowBorder: I,
					onLineClick: x,
					onLineMouseOver: Zs,
					onLineMouseOut: $s,
					onShortLineClick: v,
					type: n.type,
					parentNodeIds: O
				}), to({
					childrenInfo: t,
					clearHovered: $s,
					commentLink: n,
					commentsPageKey: r,
					onLineMouseOver: Zs,
					hasAwardGradient: k,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: u,
					isHighlighted: C,
					postId: y,
					renderedInOverlay: E,
					scrollToAndRemeasure: P,
					onPresenceIndicatorInViewport: f,
					triggerCelebratoryMoment: w
				}));
				return m && n.type === b.a.Comment ? a.a.createElement(At, null, _) : _
			});
			const to = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: o,
				hasAwardGradient: n,
				highlightTreatment: r,
				isActive: i,
				isAvatarsInCommentsEnabled: d,
				isFirstInList: c,
				isHighlighted: l,
				onLineMouseOver: m,
				postId: p,
				renderedInOverlay: u,
				scrollToAndRemeasure: h,
				onPresenceIndicatorInViewport: g,
				triggerCelebratoryMoment: C
			}) => {
				switch (s.type) {
					case b.a.Comment:
						return a.a.createElement(xs, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: o,
							hasAwardGradient: n,
							highlightTreatment: r,
							isActive: i,
							isAvatarsInCommentsEnabled: d,
							isFirstInList: c,
							isHighlighted: l,
							onLineMouseOver: m,
							postId: p,
							renderedInOverlay: u,
							scrollToAndRemeasure: h,
							onPresenceIndicatorInViewport: g,
							triggerCelebratoryMoment: C
						});
					case b.a.MoreComments:
						return a.a.createElement(Ds, {
							commentsPageKey: o,
							isActive: i,
							moreCommentsId: s.id
						});
					case b.a.ContinueThread:
						return a.a.createElement(Ls, {
							id: s.id,
							isActive: i
						})
				}
			};
			var so = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				oo = s("./src/reddit/components/Comments/States/index.tsx"),
				no = s("./src/reddit/components/Scroller/Simple.tsx"),
				ro = s("./src/reddit/constants/elementIds.ts"),
				io = s("./src/reddit/featureFlags/index.ts"),
				ao = s("./src/reddit/helpers/commentList/index.ts"),
				co = s("./src/reddit/helpers/trackers/comment.ts"),
				lo = s("./src/telemetry/index.ts"),
				mo = s("./src/lib/LRUCache/index.ts"),
				po = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				uo = s("./src/reddit/components/Comments/index.m.less"),
				ho = s.n(uo);
			const bo = g.f + 10,
				go = 65,
				Co = p.a.wrapped(no.b, "Scroller", ho.a),
				xo = Object(c.c)({
					allCollapsed: L.a,
					commentLinks: L.k,
					commentThreadLinkSet: L.o,
					measureScrollFPS: io.d.measureScrollFPS,
					moreComments: L.b,
					postPermalink: A.G
				}),
				fo = Object(d.b)(xo, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(u.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(h.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(h.h)(t, s))
				})),
				vo = new mo.a(500),
				Oo = new mo.a(500),
				yo = (e, t) => {
					const s = `entered-${e}`;
					let o = vo.get(s);
					return void 0 === o && (o = () => {
						t(e)
					}, vo.set(s, o)), o
				},
				Eo = (e, t) => {
					const s = `left-${e}`;
					let o = Oo.get(s);
					return void 0 === o && (o = s => {
						t(e, s)
					}, Oo.set(s, o)), o
				};
			class Po extends a.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const o = s[e.id].depth,
							n = t.findIndex(t => t.id === e.id);
						if (0 === o || 0 === n) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[n - 1],
							i = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < o), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.onPresenceIndicatorInViewport = e => {
						this.state.isPresenceEventSent || (this.setState({
							isPresenceEventSent: !0
						}), this.props.sendEvent(Object(co.b)(e)))
					}, this.parentNodeIdsMap = {}, so.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: o
					} = this.props;
					this.timerId && lo.c.cancel(this.timerId), e.length && (this.timerId = lo.c.start()), this.findHiddenNodes(e, t, s, o)
				}
				componentDidMount() {
					this.timerId && Object(lo.b)(m.m.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: lo.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: o,
						commentThreadLinkSet: n,
						moreComments: i
					} = e;
					(s !== this.props.commentsPageKey || o.length > this.props.commentLinks.length || !r()(t, this.props.allCollapsed)) && this.findHiddenNodes(o, t, n, i)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: o
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !r()(e.allCollapsed, o) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && lo.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = lo.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(lo.b)(m.m.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: lo.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && lo.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, o) {
					if (!t || !Object.keys(t).length) return;
					let n = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					so.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						n && (s[c.id].depth > r ? (so.a(c.id), i += Object(ao.d)(c, o), c.type === b.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[n] = {
							numChildren: i,
							hasContinueThread: a
						}, n = null, r = 1 / 0, i = 0, a = !1)), !n && t[c.id] && (n = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n,
						postId: r,
						renderedInOverlay: i,
						triggerCelebratoryMoment: d
					} = this.props, c = yo(e.id, o), l = Eo(e.id, n);
					return {
						estHeight: so.b(e.id) ? 0 : go,
						id: e.id,
						trackOnEnteredViewport: c,
						trackOnExitedViewport: l,
						render: ({
							placeholderRecommended: o,
							height: n,
							width: c,
							scrollToAndRemeasure: l
						}) => o ? a.a.createElement("div", {
							style: {
								height: n,
								backgroundColor: "#fff"
							}
						}) : a.a.createElement(eo, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: so.b(e.id),
							postId: r,
							scrollToAndRemeasure: l,
							renderedInOverlay: !!i,
							parentNodeIds: this.getParentNodeIds(e),
							onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport,
							triggerCelebratoryMoment: d
						})
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: o,
						renderedInOverlay: n,
						showSignupUpsell: r
					} = this.props;
					let i;
					if (o) {
						i = `comments-${n?"lightbox":"page"}`
					}
					const d = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(Co, {
						className: Object(l.a)(ho.a.Scroller, e),
						disableScrollCache: n,
						key: s,
						getContainer: () => n ? document.getElementById(ro.d) : null,
						onScroll: r,
						preventScrollOnMount: !0,
						scrollToChildPadding: bo,
						trackingName: i
					}, d)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(oo.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(oo.c, null)
				}
			}
			t.a = fo(Object(Ie.c)(Object(po.a)(Po)))
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(o.a)({
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
			t.a = n
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				p = i.a.div("Byline", c.a),
				u = Object(r.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(p, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(p, null))
				});
			t.a = e => n.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsPageNativeAd/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				C = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				x = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				f = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				y = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				E = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				P = s("./src/reddit/featureFlags/component.tsx"),
				w = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				k = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/selectors/experiments/postSeo.ts"),
				I = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				T = s.n(L);
			const N = Object(P.a)("spPoints", h.a),
				M = Object(P.a)("spLeaderboard", b.a),
				A = Object(o.a)({
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
				F = Object(c.c)({
					isLoggedIn: _.K,
					postSEOV2IdCardVariant: j.h,
					shouldShowReredditPromo: I.a,
					widgets: Object(p.a)(S.r)
				}),
				R = Object(d.b)(F);
			class B extends a.a.Component {
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
						subredditName: o,
						post: n,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(j.c)(i) && !Object(j.f)(i);
					return a.a.createElement(v.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(x.a, {
							postId: n.id,
							isOverlay: s,
							listingName: o,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: w.a.BOTTOM,
							refreshKey: n.id,
							sizes: m.o,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: s,
						isOverlay: o,
						post: n,
						postSEOV2IdCardVariant: r,
						shouldShowReredditPromo: i,
						subredditId: d,
						subredditName: c,
						widgets: p
					} = this.props;
					let h = 0;
					const b = Object(j.c)(r) || Object(j.f)(r),
						v = a.a.createElement(x.a, {
							postId: n.id,
							isOverlay: o,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: w.a.FIRST,
							refreshKey: n.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(T.a.outerWrapper, e)
					}, Object(k.p)(n) ? a.a.createElement(A, {
						profileName: c,
						isOverlay: o || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: c,
						postId: n.id,
						rememberPosition: n.numComments > 0,
						isMinimal: b
					}), a.a.createElement(u.a, {
						cardClassName: T.a.card,
						subredditId: d
					}), a.a.createElement(N, {
						className: T.a.card,
						subredditId: d,
						uniqueId: n.id
					}), a.a.createElement(M, {
						className: T.a.card,
						subredditId: d,
						uniqueId: n.id
					}), a.a.createElement(C.a, {
						subredditId: d
					}), v, s && p.map((e, t) => a.a.createElement(f.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(E.a, {
						subredditName: c,
						widget: e
					}))), n.isSponsored && a.a.createElement(f.a, null, a.a.createElement(O.a, null)), i && a.a.createElement(y.a, {
						directoryTimestamp: n.created,
						postId: n.id
					}), this.renderFooter(h++))
				}
			}
			t.a = R(B)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/models/Subreddit/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				h = s("./src/reddit/selectors/experiments/postSeo.ts"),
				b = s("./src/reddit/selectors/meta.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				x = s.n(C);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = "500px", O = 3, y = Object(i.c)({
				hasDismissedTruncation: u.b,
				isGQLLoggedIn: g.J,
				isLoggedIn: g.K,
				isPostSEOEligible: h.e,
				isSEOSession: b.g,
				postSEOV2TruncatedVariant: h.i
			}), E = Object(r.b)(y);
			class P extends n.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: o,
						hasDismissedTruncation: r,
						innerRef: i,
						isCommentsListTruncated: d,
						isGQLLoggedIn: u,
						isLoggedIn: h,
						isOverlay: b,
						isSEOSession: g,
						numberOfComments: C,
						onClick: y,
						subredditOrProfile: E
					} = this.props, P = !(!E || Object(m.h)(E)), w = g && d && P && (C >= O && !b || !r) && (!u && !h), k = w && !e, j = w ? x.a.TruncatedComments : "";
					return n.a.createElement("div", {
						onClick: y,
						ref: i
					}, n.a.createElement("div", {
						className: Object(a.a)(x.a.ContentWrapper, s, j),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: w ? v : "unset"
						}
					}, t), k && n.a.createElement(l.k, {
						className: x.a.MoreCommentsButton,
						onClick: o,
						"data-redditstyle": !0
					}, f._("View Entire Discussion ({number of comments} Comments)", [f._param("number of comments", Object(c.b)(C))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(d.a)(E(P))
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
				predictions: "_2NCzRZuzUTspyIjeCOMgux",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				tournamentStatus: e,
				participantsCount: t
			}) => 0 === t ? null : e === d.a.Live ? p._({
				"*": "· {total participated users} users predicting",
				_1: "· {total participated users} user predicting"
			}, [p._param("total participated users", Object(m.b)(t)), p._plural(t)], {
				hk: "1PPQpS"
			}) : e === d.a.Closed ? p._({
				"*": "· {total participated users} users predicted",
				_1: "· {total participated users} user predicted"
			}, [p._param("total participated users", Object(m.b)(t)), p._plural(t)], {
				hk: "4ehhqy"
			}) : null;
			var h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = ({
				post: e
			}) => {
				const t = e.predictionTournament,
					s = t.status === d.a.Live,
					n = t.status === d.a.Closed,
					m = Object(i.e)(c.u),
					p = Object(i.e)(t => Object(l.U)(t, {
						postId: e.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("h3", {
					className: b.a.title
				}, t.name), r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, m ? null == p ? void 0 : p.displayText : g._("Predictions Tournament", null, {
					hk: "sZ4UO"
				})), s && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.live)
				}, g._("Live", null, {
					hk: "1G2P1W"
				})), n && r.a.createElement("span", {
					className: Object(o.a)(b.a.badge, b.a.ended)
				}, g._("Ended", null, {
					hk: "4s3hco"
				})), m && r.a.createElement("span", {
					className: b.a.predictions
				}, r.a.createElement(u, {
					tournamentStatus: t.status,
					participantsCount: t.totalParticipantsCount
				}))), r.a.createElement(a.a, {
					className: b.a.awards,
					thing: e
				}))
			}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => n.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(r);
			const a = o.a.wrapped(n.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: o,
						tooltipIdPrefix: n,
						tooltipType: r
					} = e;
					let i = n;
					return s && (i = `${i}--${s}`), r && (i = `${i}--${r}`), t && (i = `${i}--${t}`), o && (i = `${i}--${o}`), i
				}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
					icon: o,
					subtitle: i,
					title: d,
					textWrapperClassName: m
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, n.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), o ? n.a.createElement(c, null, o) : n.a.createElement(c, null), n.a.createElement(l, {
					className: m
				}, n.a.createElement("div", {
					className: a.a.title
				}, d), i && n.a.createElement("div", {
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => r.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.b.locked,
				icon: r.a.createElement(a.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: o.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: o.fbt._("This thread is archived", null, {
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
				return b
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
				h = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

			function b({
				subredditOrProfile: e
			}) {
				const t = e ? o.fbt._("This thread has been locked by the moderators of {communityname}", [o.fbt._param("communityname", h(e) + e.name)], {
					hk: "2HSQXz"
				}) : o.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(l.a, {
					className: p.a.bannerBase,
					color: a.b.locked,
					icon: u,
					subtitle: o.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: t
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
				} = e, n = t ? o.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : o.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(d.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(p, null),
					subtitle: n,
					title: o.fbt._("This post has contest mode enabled", null, {
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				h = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				b = s.n(h);
			const g = r.a.createElement(m.a, {
					className: b.a.icon
				}),
				C = Object(a.c)({
					subreddit: p.w,
					subredditAboutInfo: p.t
				}),
				x = Object(i.b)(C);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const n = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || o.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(u.a, {
					className: b.a.container,
					color: c.b.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, o.fbt._("This community is {=quarantined}", [o.fbt._param("=quarantined", r.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, o.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", n ? r.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: n
					}) : i, " ", r.a.createElement(l.a, {
						className: b.a.link,
						to: "/"
					}, o.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: o.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: o,
					...r
				} = e, c = Object(a.b)(o);
				return n.a.createElement(i.a, d({
					className: s,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, o = t ? c : r.a;
				return n.a.createElement(o, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(o.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/hooks/useIsClient.ts"),
				u = s("./src/reddit/models/Subreddit/index.ts"),
				h = s("./src/reddit/components/MediumPost/index.m.less"),
				b = s.n(h);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: o,
				shouldShowSubscribeButton: h,
				subredditOrProfile: g,
				templatePlaceholderImage: C,
				shouldShowFollowButton: x,
				isFollowed: f,
				isCommentsPage: v,
				onFollowPostClick: O
			}) => {
				return Object(p.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: x || h
					})
				}, n.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, x && n.a.createElement(a.a, {
					isFilled: !!f,
					onClick: O,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && g && n.a.createElement(d.a, {
					className: b.a.subscribeButton,
					getEventFactory: e => Object(m.h)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(u.h)(g) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), n.a.createElement(c.a, {
					crosspost: e,
					isCommentsPage: v,
					post: t,
					redditStyle: o,
					forceShowNSFW: s,
					templatePlaceholderImage: C
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
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
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
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
						onClick: o,
						hasTooltip: c,
						tooltipText: m,
						className: p
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, p),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, n.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && n.a.createElement(i.a, {
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
				videoProcessingStatus: "_16S8F-ykERyNWpmVnAU9y0"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				h = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				C = s("./src/reddit/models/User/index.ts"),
				x = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				f = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				w = s("./node_modules/lodash/find.js"),
				k = s.n(w),
				j = s("./node_modules/react-motion/lib/react-motion.js");
			const I = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				S = {},
				_ = (e = [], t) => {
					const s = k()(e, {
							key: "expando_content"
						}),
						o = s && s.style ? s.style.opacity : 0;
					return t ? o >= 1 ? [{
						key: "expando_content",
						style: {
							opacity: 1
						}
					}] : o > 0 ? [{
						key: "expando_content",
						style: {
							opacity: Object(j.spring)(1, I)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(j.spring)(0, I)
						}
					}]
				};
			class L extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), S), this.state = {
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
						content: o
					} = this.props;
					return i.a.createElement(j.TransitionMotion, {
						styles: e => _(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, o))))
				}
			}
			var T = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Post/index.ts"),
				M = s("./src/reddit/models/Vote/index.ts"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/experiments/categories.ts"),
				R = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				B = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/postCreations.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/showPromotedCTA.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				K = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				G = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				q = s("./src/reddit/components/AwardBadges/index.tsx"),
				z = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				Q = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				Y = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				J = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				X = s("./src/reddit/components/ExpandoButton/index.tsx"),
				Z = s("./src/reddit/components/FlairWrapper/index.tsx"),
				$ = s("./src/reddit/components/Flatlist/index.tsx"),
				ee = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				te = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				se = s("./src/reddit/components/ModModeReports/index.tsx"),
				oe = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ne = s("./src/reddit/components/NotificationButton/index.tsx"),
				re = s("./src/reddit/components/PostContainer/index.tsx"),
				ie = s("./src/higherOrderComponents/makeAsync.tsx"),
				ae = s("./src/lib/loadWithRetries/index.ts"),
				de = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const ce = Object(ie.a)({
				ErrorComponent: () => i.a.createElement(de.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ae.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(de.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var le = e => i.a.createElement(ce, e),
				me = s("./src/reddit/components/PostList/index.tsx"),
				pe = s("./src/reddit/components/PostMedia/index.tsx"),
				ue = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				he = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				be = s("./src/reddit/components/PostTitle/index.tsx"),
				ge = s("./src/reddit/components/PostTopLine/index.tsx"),
				Ce = s("./src/reddit/components/PostTopMeta/index.tsx"),
				xe = s("./src/reddit/components/SourceLink/index.tsx"),
				fe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ve = s("./src/reddit/constants/componentTestIds.ts"),
				Oe = s("./src/reddit/constants/postLayout.ts"),
				ye = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Ee = s("./src/reddit/helpers/postEvent.ts"),
				Pe = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				we = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				ke = s("./src/reddit/selectors/postFlair.ts"),
				je = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				Ie = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Se = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				_e = s("./node_modules/fbt/lib/FbtPublic.js"),
				Le = s("./src/reddit/constants/colors.ts"),
				Te = s("./src/reddit/icons/fonts/index.tsx"),
				Ne = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Me = s("./src/reddit/components/PostAuthorIsBlockedBanner/index.m.less"),
				Ae = s.n(Me);
			const Fe = i.a.createElement(Te.a, {
				className: Ae.a.BlockIcon,
				name: "block"
			});
			var Re = e => {
					const {
						onBannerClick: t,
						isExpandable: s
					} = e;
					return i.a.createElement(Ne.a, {
						className: Ae.a.bannerBase,
						color: Le.b.dayModeActionIcon,
						icon: Fe,
						title: _e.fbt._("Posted by a blocked user", null, {
							hk: "1Bg4AI"
						}),
						subtitle: s && i.a.createElement("button", {
							className: Ae.a.expandButton,
							onClick: t
						}, _e.fbt._("EXPAND", null, {
							hk: "2t0KIg"
						})),
						textWrapperClassName: Ae.a.blockedAuthorTextWrapper
					})
				},
				Be = s("./src/config.ts"),
				De = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Ve = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				Ue = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				We = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				He = s.n(We);
			const {
				fbt: Ke
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ge = () => Ke._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Ke._param("=User Agreement", i.a.createElement("a", {
				className: He.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, Ke._("User Agreement", null, {
				hk: "3MHgRl"
			}))), Ke._param("=Content Policy", i.a.createElement("a", {
				className: He.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, Ke._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), qe = () => Ke._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Ke._param("=User Agreement", i.a.createElement("a", {
				className: He.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, Ke._("User Agreement", null, {
				hk: "yMHtU"
			}))), Ke._param("=Content Policy", i.a.createElement("a", {
				className: He.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, Ke._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var ze = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: o,
					subredditName: n
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return Ke._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case N.g.Author:
							return Ke._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case N.g.AuthorDeleted:
							return Ke._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case N.g.AutomodFiltered:
							return Ke._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case N.g.CommunityOps:
							return Ke._("This post was removed by Reddit admin, u/{username}.", [Ke._param("username", t)], {
								hk: "34nHWu"
							});
						case N.g.ContentTakedown:
							return Ke._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case N.g.CopyrightTakedown:
							return Ke._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case N.g.Moderator:
							return Ke._("This post was removed by r/{subredditName} moderator, u/{username}.", [Ke._param("subredditName", s), Ke._param("username", t)], {
								hk: "270bcn"
							});
						case N.g.Reddit:
							return Ke._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return Ke._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(o, s, n) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return Ke._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case N.g.Author:
							return Ke._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case N.g.AuthorDeleted:
							return Ke._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case N.g.AutomodFiltered:
							return Ke._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case N.g.CommunityOps:
							return Ke._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case N.g.ContentTakedown:
							return Ke._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case N.g.CopyrightTakedown:
							return Ke._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case N.g.Moderator:
							return Ke._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [Ke._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case N.g.Reddit:
							return Ke._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return Ke._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(o, n), a = t ? (e => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(Ge, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return Ke._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case N.g.AutomodFiltered:
							return Ke._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case N.g.CommunityOps:
							return Ke._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [Ke._param("=just ask", i.a.createElement("a", {
								className: He.a.link,
								href: `${Be.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, Ke._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(qe, null);
						case N.g.CopyrightTakedown:
							return Ke._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case N.g.Moderator:
							return Ke._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case N.g.Reddit:
							return Ke._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return Ke._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(o) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return i.a.createElement(Ge, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return Ke._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case N.g.AutomodFiltered:
							return Ke._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [Ke._param("=[subreddit name]", i.a.createElement("a", {
								className: He.a.link,
								href: `${Be.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, Ke._("{subreddit name}", [Ke._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case N.g.CommunityOps:
							return Ke._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case N.g.ContentTakedown:
							return i.a.createElement(qe, null);
						case N.g.CopyrightTakedown:
							return Ke._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case N.g.Moderator:
							return Ke._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case N.g.Reddit:
						default:
							return Ke._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), d = t ? Le.b.warning : Le.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case N.g.AntiEvilOps:
						case N.g.AutomodFiltered:
						case N.g.CommunityOps:
						case N.g.ContentTakedown:
						case N.g.CopyrightTakedown:
						case N.g.Reddit:
							t = De.a;
							break;
						case N.g.AuthorDeleted:
						case N.g.Author:
							t = Ue.b;
							break;
						case N.g.Moderator:
							t = Ve.a;
							break;
						default:
							t = De.a
					}
					return i.a.createElement(t, {
						className: He.a.icon
					})
				})(o);
				return i.a.createElement(Ne.a, {
					className: He.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function Qe(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return i.a.createElement(i.a.Fragment, null, o && s.removedByCategory && i.a.createElement(ze, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var Ye = s("./src/lib/prettyPrintNumber/index.ts"),
				Je = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Xe = s.n(Je);
			var Ze = ({
					post: e,
					showViewCount: t
				}) => {
					const {
						upvotePercentString: s,
						viewCountString: o
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(Ye.b)(e.viewCount);
						return {
							upvotePercentString: _e.fbt._("{percent upvoted}% Upvoted", [_e.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: _e.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [_e.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(e), n = t && !!e.viewCount;
					return i.a.createElement("div", {
						className: Xe.a.viewCounts
					}, n && i.a.createElement("span", null, o), n && !!e.upvoteRatio && i.a.createElement("span", {
						className: Xe.a.dotSpacer
					}), !!e.upvoteRatio && i.a.createElement("span", null, s))
				},
				$e = s("./src/reddit/components/PostContent/index.m.less"),
				et = s.n($e);
			const {
				fbt: tt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), st = u.a.wrapped(be.c, "PostTitle", et.a), ot = u.a.wrapped(X.a, "ExpandoButton", et.a), nt = u.a.wrapped(L, "ClassicExpandoMotion", et.a), rt = u.a.wrapped($.c, "FullWidthFlatlist", et.a), it = i.a.createElement("p", {
				className: et.a.VideoProcessingStatus
			}, tt._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), at = Object(ye.u)({
				isCommentsPage: ye.x,
				pageLayer: e => e
			}), dt = Object(a.b)(() => Object(l.c)({
				activeModalId: A.a,
				flairStyleTemplate: ye.U,
				currentUser: H.k,
				crosspost: U.d,
				hideNSFWPref: H.C,
				imageGalleryCurrentItem: U.i,
				isAdminOrMod: (e, t) => {
					const s = Object(U.U)(e, {
						postId: t.postId
					});
					return !!s && Object(B.c)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: U.l,
				isExpanded: U.m,
				isFollowed: U.t,
				isFollowedExpired: U.o,
				isPostFollowEnabled: we.b,
				showPromotedCTA: W.b,
				post: U.H,
				moderatorPermissions: D.k,
				modModeEnabled: ye.S,
				isInCategoriesExperiment: F.a,
				showAwardsPlaque: R.a,
				showEditFlair: ke.a,
				subredditOrProfile: U.U,
				isEditing: V.K,
				userIsOp: H.rb,
				isVoteCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Se.f)(e, {
					postId: t.postId
				}),
				isCommentCountAnimation: (e, t) => !!t.isActionBarAnimationEnabled && Object(Se.c)(e, {
					postId: t.postId
				})
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(b.Z)(s)),
				onOpenReportsDropdown: t => e(Object(P.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const o = t === M.a.upvoted ? Object(b.db)(s) : Object(b.w)(s);
					e(o)
				},
				fireAdPixelsOfType: (t, s) => e(Object(b.z)(t, s)),
				openPost: t => e(Object(b.K)(t)),
				onFollowPost: t => e(Object(b.cb)(s, t)),
				onFollowPostExpired: () => e(Object(b.W)({
					id: s,
					expiresAt: 0
				}))
			})), ct = e => e.media && e.media.type === T.o.EMBED && e.media.provider === T.v.Imgur && e.media.height > 700, lt = u.a.wrapped(d.a, "ThumbLink", et.a), mt = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: o,
				onFollowPostClick: n
			}) => {
				const r = e.source ? i.a.createElement(z.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : i.a.createElement(lt, {
					to: Object(O.b)(e.permalink)
				}, i.a.createElement(z.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return i.a.createElement("div", {
					className: et.a.classicThumbnail
				}, s && i.a.createElement(ne.a, {
					className: et.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: tt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), r)
			}, pt = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => i.a.createElement(nt, {
				content: i.a.createElement(i.a.Fragment, null, i.a.createElement(pe.a, {
					className: et.a.ClassicPostMedia,
					isListing: !1,
					isNotCardView: !0,
					post: e,
					shouldLoad: !0,
					showFull: !0,
					showCentered: !0,
					scrollerItemRef: s
				})),
				shouldExpand: !!t
			});
			t.a = at(dt(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: o,
					fireAdPixelsOfType: d,
					flairStyleTemplate: l,
					forceOpenInNewTab: u,
					hideNSFWPref: b,
					imageGalleryCurrentItem: O,
					isAdminOrMod: P,
					triggerCelebratoryMoment: w,
					isCommentCountAnimation: k,
					isCommentsPage: j,
					isCountAnimShadowTestEnabled: I,
					isCurrentUserProfilePost: S,
					isEditing: _,
					isExpanded: L,
					isFollowed: M,
					isFollowedExpired: A,
					isOverlay: F,
					isPostFollowEnabled: R,
					isVoteCountAnimation: B,
					moderatorPermissions: D,
					modModeEnabled: V,
					onFollowPost: U,
					onFollowPostExpired: W,
					onIgnoreReports: H,
					onOpenReportsDropdown: z,
					openPost: X,
					onVoteClick: ne,
					post: ie,
					scrollerItemRef: ae,
					sendEvent: de,
					showAwardsPlaque: ce,
					showEditFlair: ye,
					showPromotedCTA: we,
					subredditOrProfile: ke,
					userIsOp: Se
				} = e, _e = Object(fe.b)(), [Le, Te] = Object(r.useState)(ie.authorIsBlocked), Ne = Object(T.H)(ie), Me = Object(a.e)(e => Boolean(ie.predictionTournament) && Object(Ie.t)(e)), Ae = Object(a.e)(e => Object(Pe.a)(e)), Fe = Object(c.a)(ie);
				Object(r.useEffect)(() => {
					R && A && W()
				}, []);
				const Be = ie.isSponsored ? Object(me.b)(ie.id, {
						fireAdPixelsOfType: d,
						openPost: X
					}) : n.a,
					De = Object(v.a)(D),
					Ve = Object(x.a)(D),
					Ue = Object(f.a)(D),
					We = De || Ve,
					He = ((e, t, s) => {
						const [o, n] = e ? [Object(C.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(o, We, ie),
					Ke = !!ie.media && (ie.media.type === T.o.RTJSON || ie.media.type === T.o.TEXT),
					Ge = Se && Ke,
					qe = Object(oe.c)(ie);
				let ze;
				const Ye = !(V && v.a),
					Je = Object(ue.b)({
						hide: Ye,
						editPost: Ye,
						save: Ye,
						report: Ye
					}),
					Xe = ie.removedByCategory === N.g.AuthorDeleted,
					$e = o && (o.displayText === ie.author || o.username === ie.author),
					tt = !Xe && !ct(ie) && ($e || P || !(ie.removedByCategory && ie.media && (Object(T.K)(ie.media) || Object(T.I)(ie.media) || Object(T.E)(ie.media)))),
					nt = Object(m.t)(ie, O),
					{
						source: at
					} = nt,
					dt = ie.removedByCategory === N.g.Reddit && Object(h.e)(ie.created) > 24,
					lt = ie.removedByCategory && ie.removedByCategory !== N.g.Reddit || dt,
					ut = R && !lt && !ie.isArchived,
					ht = Object(r.useCallback)(() => {
						U(M ? N.f.UNFOLLOWED : N.f.FOLLOWED), _e(M ? Object(E.i)(ie.id) : Object(E.c)(ie.id))
					}, [U, _e, M, ie.id]),
					bt = i.a.createElement(st, {
						post: ie,
						size: be.b.ExtraLarge,
						showCategoryTag: F,
						isOverlay: F,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					gt = i.a.createElement(Ze, {
						post: ie,
						showViewCount: He
					}),
					Ct = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: o
						} = e, n = Object(a.e)(e => Boolean(o.predictionTournament) && Object(Ie.t)(e));
						return s ? Oe.g.Classic : n ? Oe.g.Large : t ? Oe.g.Large : o.media && !ct(o) ? Oe.g.Large : Oe.g.Medium
					})(e);
				if (Ct === Oe.g.Classic) {
					const t = Object(g.a)(ie);
					ze = i.a.createElement("div", {
						"data-test-id": ve.e
					}, i.a.createElement(he.a, {
						model: ie,
						handleVote: ne,
						isCountAnimShadowTestEnabled: I,
						isOverlay: F,
						isVoteCountAnimation: B,
						postId: ie.id
					}), i.a.createElement("div", {
						className: et.a.mainBody
					}, i.a.createElement("div", {
						className: et.a.content
					}, i.a.createElement(ge.a, {
						hideAwards: ce,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: j,
						isCurrentUserProfilePost: S,
						isOverlay: !!F,
						isTopicPage: !1,
						post: ie,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!F && !ie.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ke,
						shouldShowFollowButton: ut && !t,
						isFollowed: M,
						onFollowPostClick: ht
					}), bt, i.a.createElement(Z.a, {
						className: j ? et.a.leftPadding : void 0,
						post: ie,
						showCategoryTag: e.isInCategoriesExperiment && j,
						sendEvent: de
					}), V && De && qe && i.a.createElement(se.a, {
						onIgnoreReports: H,
						reportable: ie
					}), i.a.createElement(ee.d, null), i.a.createElement("div", {
						className: et.a.FlatlistContainer
					}, Ae && Le ? i.a.createElement(Re, {
						onBannerClick: () => Te(!1),
						isExpandable: Ne
					}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(ot, {
						crosspost: s || void 0,
						isExpanded: !!L,
						post: ie,
						useMediaIcons: !1
					}), pt(e)), ce && i.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: ie,
						tooltipType: F ? Ce.c.Lightbox : void 0
					}), i.a.createElement(rt, {
						currentUser: o,
						hasModFlairPerms: Ve,
						hasModFullPerms: Ue,
						hasModPostPerms: De,
						isOverlay: F,
						onIgnoreReports: H,
						onOpenReportsDropdown: z,
						modModeEnabled: V,
						post: ie,
						showUpvotePercent: !0,
						showViewCount: He,
						useFlatlistBreakpoints: Je,
						isCommentCountAnimation: k,
						isCountAnimShadowTestEnabled: I
					}))), t && i.a.createElement(mt, {
						post: ie,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: ut,
						isFollowed: M,
						onFollowPostClick: ht
					})))
				} else if (Ct === Oe.g.Medium) {
					const t = Object(g.a)(ie);
					ze = i.a.createElement("div", {
						"data-test-id": ve.e
					}, i.a.createElement(he.a, {
						model: ie,
						handleVote: ne,
						isCountAnimShadowTestEnabled: I,
						isOverlay: F,
						isVoteCountAnimation: B,
						postId: ie.id
					}), i.a.createElement("div", {
						className: et.a.mainBody
					}, i.a.createElement("div", {
						className: et.a.content
					}, i.a.createElement(ge.a, {
						hideAwards: ce,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: j,
						isCurrentUserProfilePost: S,
						isOverlay: !!F,
						isTopicPage: !1,
						post: ie,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!F && !ie.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ke,
						shouldShowFollowButton: ut && !t,
						isFollowed: M,
						onFollowPostClick: ht
					}), bt, Ae && Le ? i.a.createElement(Re, {
						onBannerClick: () => Te(!1),
						isExpandable: Ne
					}) : ie.source && i.a.createElement(xe.a, {
						post: ie,
						isCommentsPage: j
					}), Object(T.M)(ie) && it, i.a.createElement(Z.a, {
						className: j ? et.a.leftPadding : void 0,
						post: ie,
						showCategoryTag: e.isInCategoriesExperiment && j,
						sendEvent: de
					}), ke && lt && i.a.createElement(Qe, {
						isAdminOrMod: P,
						post: ie,
						subredditOrProfile: ke
					}), V && De && qe && i.a.createElement(se.a, {
						onIgnoreReports: H,
						reportable: ie
					})), t && !Fe && i.a.createElement(te.a, {
						post: ie,
						forceShowNSFW: !0,
						hasModPostPerms: We,
						isCommentsPage: j,
						isOverlay: !0,
						modModeEnabled: V,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: ke,
						shouldShowFollowButton: ut,
						isFollowed: M,
						onFollowPostClick: ht
					})), i.a.createElement(ee.d, null), ce && i.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: ie,
						tooltipType: F ? Ce.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: et.a.controlsContainer
					}, i.a.createElement($.c, {
						currentUser: o,
						hasModFlairPerms: Ve,
						hasModFullPerms: Ue,
						hasModPostPerms: De,
						isOverlay: F,
						modModeEnabled: V,
						onIgnoreReports: H,
						onOpenReportsDropdown: z,
						post: ie,
						showEditPost: Ge,
						showEditFlair: ye,
						tooltipType: F ? Ce.c.Lightbox : void 0,
						useFlatlistBreakpoints: Je,
						isCommentCountAnimation: k,
						isCountAnimShadowTestEnabled: I
					}), gt))
				} else Ct === Oe.g.Large && (ze = i.a.createElement("div", {
					"data-test-id": ve.e
				}, i.a.createElement(he.a, {
					model: ie,
					handleVote: ne,
					isCountAnimShadowTestEnabled: I,
					isOverlay: F,
					isVoteCountAnimation: B,
					triggerCelebratoryMoment: w,
					postId: ie.id
				}), Me && Object(je.c)(ie) && i.a.createElement(i.a.Fragment, null, i.a.createElement(Y.a, {
					post: ie
				}), i.a.createElement(Q.a, {
					post: ie
				})), !Me && i.a.createElement(i.a.Fragment, null, i.a.createElement(ge.a, {
					forceOpenInNewTab: u,
					hideAwards: ce,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: j,
					isCurrentUserProfilePost: S,
					isOverlay: !!F,
					isTopicPage: !1,
					post: ie,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!F && !ie.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: ke,
					shouldShowFollowButton: ut,
					isFollowed: M,
					onFollowPostClick: ht
				}), bt, ((e, t, s, o) => e.source && !t && (s || o))(ie, s, F, j) && i.a.createElement(xe.a, {
					post: ie,
					isCommentsPage: j
				})), i.a.createElement(Z.a, {
					className: j ? et.a.leftPadding : void 0,
					post: ie,
					showCategoryTag: e.isInCategoriesExperiment && j,
					sendEvent: de
				}), ke && lt && i.a.createElement(Qe, {
					isAdminOrMod: P,
					post: ie,
					subredditOrProfile: ke
				}), _ && i.a.createElement(le, {
					post: ie
				}), Ae && Le ? i.a.createElement(Re, {
					onBannerClick: () => Te(!1),
					isExpandable: Ne
				}) : tt && !_ && i.a.createElement(pe.a, {
					className: Object(p.a)(et.a.LargePostMedia, {
						[et.a.isCommentsPage]: j
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: F,
					isOverlay: F,
					post: ie,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !F,
					showCentered: !0,
					showPromotedCTA: we,
					scrollerItemRef: ae
				}), we && at && at.url && i.a.createElement(K.a, {
					className: et.a.adLinkWrapper
				}, i.a.createElement(G.a, {
					post: ie,
					adLinkContent: nt
				})), V && De && qe && i.a.createElement(se.a, {
					onIgnoreReports: H,
					reportable: ie
				}), i.a.createElement(ee.d, null), ce && i.a.createElement(q.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: ie,
					tooltipType: F ? Ce.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: et.a.controlsContainer
				}, i.a.createElement($.c, {
					currentUser: o,
					forceOpenInNewTab: u,
					hasModFlairPerms: Ve,
					hasModFullPerms: Ue,
					hasModPostPerms: De,
					isOverlay: F,
					modModeEnabled: V,
					onIgnoreReports: H,
					onOpenReportsDropdown: z,
					post: ie,
					showEditPost: Ge,
					showEditFlair: ye,
					tooltipType: F ? Ce.c.Lightbox : void 0,
					useFlatlistBreakpoints: Je,
					isCommentCountAnimation: k,
					isCountAnimShadowTestEnabled: I
				}), gt)));
				const xt = Object(r.useCallback)((e, t) => Object(E.h)(e, t), []);
				return i.a.createElement(re.a, {
					className: Object(p.a)(t, et.a.postContainer, {
						[et.a.hasEventMeta]: Object(Ee.a)(ie)
					}),
					isOverlay: F,
					post: ie,
					eventFactory: F ? y.b : xt,
					onClick: Be
				}, i.a.createElement(J.a, {
					post: ie
				}), ze)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return X
			})), s.d(t, "a", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/shallowequal/index.js"),
				u = s.n(p),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/ads/index.ts"),
				g = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/fastdom/index.ts"),
				f = s("./src/lib/lessComponent.tsx"),
				v = s("./src/lib/opener/index.ts"),
				O = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				E = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				P = s("./src/reddit/components/Scroller/Simple.tsx"),
				w = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				I = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/helpers/getClickInfo.ts"),
				L = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/helpers/brandSafety/index.ts"),
				A = s("./src/reddit/helpers/trackers/ads.ts"),
				F = s("./src/lib/LRUCache/index.ts"),
				R = s("./src/telemetry/index.ts"),
				B = s("./src/telemetry/models/Timer.ts"),
				D = s("./src/reddit/components/PostList/index.m.less"),
				V = s.n(D);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = 500, H = new F.a(W), K = new F.a(W), G = new F.a(W), q = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, z = f.a.div("SeeMore", V.a), Q = f.a.wrapped(T.a, "ArrowRight", V.a), Y = (e, t, s, o, n, r, i, a, d) => {
				const c = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}-${r}`;
				let l = H.get(c);
				return void 0 === l && (l = () => {
					s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a, d)
				}, H.set(c, l)), l
			}, J = (e, t, s, o, n) => {
				const r = `left-${e}-${t}`;
				let i = K.get(r);
				return void 0 === i && (i = r => {
					s.trackOnPostExitedViewport(e, t, r, o, n)
				}, K.set(r, i)), i
			}, X = (e, t, s = !1) => {
				const o = `click-${e}`;
				let n = G.get(o);
				return void 0 === n && (n = (e, o, n, r, i) => {
					if (o.isSponsored) {
						t.fireAdPixelsOfType(o, w.a.Click);
						const {
							source: e
						} = Object(b.t)(o, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(S.a)(o.id, n, t).url), Object(A.a)(o, i), Object(v.e)(t, v.d.BLANK)
						}
					} else t.openPost({
						postOrComment: o,
						clickInfo: Object(_.a)(e),
						isFrontpage: s
					})
				}, G.set(o, n)), n
			}, Z = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class $ extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new F.a(W), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						const {
							isNpsScrollSurveyEnabled: t,
							onScroll: s,
							surveyTriggerScrollCounted: o
						} = this.props;
						this.dispatchBrandSafety(e), t && o && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = r()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, o = e(), n = [];
						o.forEach(e => n.push(e.id));
						const r = n.map(e => t[e]).filter(Boolean),
							i = r.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(M.a)(r, i))
					}, C.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && R.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = R.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = R.c.end(this.timerId);
						setTimeout(() => Object(R.b)(C.m.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && R.c.cancel(this.timerId), e.postIds.length && (this.timerId = R.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (x.a.read(() => this.checkAndSendScreenview()), this.timerId && R.c.has(this.timerId)) {
						const e = R.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(R.b)(C.m.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const o = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					o && o !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(o)
				}
				componentWillUnmount() {
					this.timerId && R.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return R.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const o = R.c.end(e);
					setTimeout(() => {
						s(t(o, B.TimerType.InApp))
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
						...o
					} = this.props, {
						postsById: n,
						triggerNewPostPill: r,
						...i
					} = e, a = Object.keys(o), d = Object.keys(i);
					if (d.length !== a.length) return !0;
					if (d.some(e => {
							let t = !1;
							return t = "function" == typeof o[e] || "object" == typeof o[e] ? !u()(o[e], i[e]) : o[e] !== i[e]
						})) return !0;
					if (t === n) return !1;
					if (s !== r) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((o, r) => {
							const i = 0 === r;
							return s({
								isFirstPost: i,
								layout: e,
								post: t[o]
							}) !== s({
								isFirstPost: i,
								layout: e,
								post: n[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: n,
						hostPostData: r,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						isCommentCountAnimationEnabled: p,
						isVoteCountAnimationEnabled: u,
						isCountAnimShadowTestEnabled: h,
						listingBelowVariant: b,
						listingKey: g,
						listingName: x,
						pageLayer: f,
						pageReferrer: v,
						redditStyle: y,
						shouldHideFlair: E,
						triggerCelebratoryMoment: P,
						triggerNewPostPill: w,
						postIds: k
					} = this.props, I = 0 === t, S = `post-${o}-${e}-${t}-${s?"last-index":""}-${x}-${g}-${v}`;
					let _;
					if (void 0 === (_ = this.scrollChildCache.get(S))) {
						const {
							inSubredditOrProfile: T,
							postsById: M
						} = this.props, A = M[e], F = A.crosspostRootId && M[A.crosspostRootId] ? M[A.crosspostRootId] : A;
						A.crosspostRootId && !M[A.crosspostRootId] && O.c.withScope(e => {
							e.setExtra("errorType", C.s.API), e.setExtra("description", `Post ${A.id} is crosspost of ${A.crosspostRootId}, but ` + `${A.crosspostRootId} details are missing in the state`), O.c.captureMessage("Crosspost parent details are missing")
						});
						const R = this.props.postComponentForLayout({
							isCrosspost: !!A.crosspostRootId,
							isFirstPost: I,
							layout: o,
							post: F
						});
						let B = `post-list-item-[layout: ${o}]-[postId: ${e}]`;
						this.props.listingBelowVariant && g && (B += `--${g}`);
						const D = Y(e, o, s, g, x, v, this.props, t, this.props.hostPostData),
							V = J(e, o, this.props, t, f),
							U = X(e, this.props, d),
							W = F.media && F.media.type === N.o.EMBED ? F.media.provider : null,
							H = p && !A.isSponsored,
							K = u && !A.isSponsored && !A.isScoreHidden,
							G = !A.isSponsored && !A.isArchived;
						_ = {
							estHeight: Object(L.c)(A, o),
							id: e,
							isFocusable: !(!F.media || !(o === j.g.Large || o === j.g.Classic && Object(N.G)(F.media))) && (N.d.has(F.media.type) && (!W || !N.s.has(W)) && !F.isSpoiler),
							trackOnEnteredViewport: D,
							trackOnExitedViewport: V,
							render: ({
								className: o,
								height: p,
								width: u,
								remeasure: C,
								setScrollerChildRef: v,
								shouldLoadInitially: O
							}) => m.a.createElement(R, {
								className: o,
								currentProfileName: n,
								key: B,
								availableWidth: u,
								eventFactory: this.eventFactoryHandler,
								first: I,
								forceLoadMedia: O,
								hostPostData: r,
								inSubredditOrProfile: T,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								isCommentCountAnimationEnabled: H,
								isVoteCountAnimationEnabled: K,
								isCountAnimShadowTestEnabled: h,
								listingBelowVariant: b,
								listingIndex: t,
								listingKey: g,
								listingName: x,
								pageLayer: f,
								last: s,
								onClickPost: U,
								onSizeChanged: C,
								postId: e,
								postIds: k,
								redditStyle: y,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: v,
								shouldHideFlair: E,
								triggerCelebratoryMoment: G ? P : void 0,
								onceInViewport: w
							})
						}, this.scrollChildCache.set(S, _)
					}
					return _
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return m.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: n,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const i = r;
					return m.a.createElement("div", {
						className: V.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(E.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: n,
						onLoadMore: r
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: V.a.placeholder
					}, m.a.createElement(y.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: q[o]
					}), !!e && m.a.createElement(E.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isSerpExperimentOverride: r,
						isTruncated: i,
						layout: a,
						location: d,
						loadMore: c,
						postIds: p,
						postsById: u,
						onLoadMore: b
					} = this.props;
					let x = p.filter(e => Boolean(u[e])).map((e, t, s) => {
						const o = t === s.length - 1;
						return this.scrollChildForPost(e, t, o, a)
					});
					n && (x = Z(x, n));
					const f = this.props.measureScrollFPS ? `post-listings-${a}` : void 0,
						v = d ? Object(o.e)(d) : null,
						O = v || i;
					return m.a.createElement(l.Fragment, null, m.a.createElement(P.b, {
						innerRef: this.updateScrollerRef,
						className: O ? V.a.truncatedPostList : Object(g.a)(V.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: f,
						viewportTopPadding: k.f
					}, x), !r && v && m.a.createElement(z, {
						className: V.a.seeMoreButton
					}, m.a.createElement(I.a, {
						className: V.a.seeMorePostsText,
						to: Object(h.a)(v, {
							type: C.Xb.Posts
						})
					}, U._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(Q, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			$.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: m.a.Fragment
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				g = s("./src/reddit/constants/posts.ts"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/PostTopLine/index.m.less"),
				w = s.n(P);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: P,
				hostPostData: k,
				iconClassName: j,
				inSubredditOrProfile: I,
				isCommentsPage: S,
				isCompactPinnedPost: _,
				isCurrentUserProfilePost: L,
				isOverlay: T,
				isTopicPage: N,
				listingKey: M,
				post: A,
				shouldShowSubscribeButton: F,
				showCornerOutboundLink: R,
				showSubreddit: B,
				showSubredditIcon: D,
				subredditOrProfile: V,
				isFollowed: U,
				shouldShowFollowButton: W,
				onFollowPostClick: H
			}) => {
				const K = n || N,
					G = V && Object(y.h)(V),
					q = Object(i.e)(e => {
						if (!G) return !0;
						const t = Object(E.ub)(e, A.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(w.a.container, e)
				}, B && V && r.a.createElement("div", {
					className: w.a.subredditIconWrapper
				}, r.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, D && r.a.createElement(u.b, {
					className: Object(a.a)(w.a.subredditIcon, j),
					shouldHideNsfwIcon: P,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: w.a.everythingElseWrapper
				}, B && r.a.createElement(c.h, {
					type: A.belongsTo.type,
					id: A.belongsTo.id
				}), r.a.createElement(p.d, {
					className: w.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: T ? p.c.Lightbox : void 0,
					post: A,
					showSub: B,
					subredditOrProfile: V
				}), r.a.createElement(m.a, {
					className: w.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: I,
					isCompactPinnedPost: _,
					post: A,
					tooltipType: T ? p.c.Lightbox : void 0
				}), !K && r.a.createElement(d.a, {
					isPostDetail: S,
					thing: A,
					tooltipType: T ? p.c.Lightbox : void 0
				})), V && q && B && F && !L && r.a.createElement(b.a, {
					className: w.a.SubscribeButton,
					getEventFactory: e => Object(f.h)(A.id, e ? "unsubscribe" : "subscribe", "post", M, k),
					identifier: {
						name: V.name,
						type: G ? g.a.PROFILE : g.a.SUBREDDIT
					},
					postId: A.id,
					size: C.c.XS
				}), R && r.a.createElement(x.b, {
					isSponsored: A.isSponsored,
					postId: A.id,
					href: Object(O.D)(A),
					source: A.source
				}, r.a.createElement(v.a, {
					className: w.a.outboundLinkIcon
				})), W && q && r.a.createElement(l.a, {
					isFilled: !!U,
					onClick: H,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/constants/elementIds.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				P = s("./src/reddit/helpers/trackers/screenview.ts"),
				w = s("./src/reddit/selectors/chatPost.ts"),
				k = s("./src/reddit/selectors/commentsListTruncated.ts"),
				j = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				I = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				S = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				_ = s("./src/reddit/selectors/i18n/index.ts"),
				L = s("./src/reddit/selectors/telemetry.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				N = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/constants/listings.ts"),
				A = s("./src/reddit/controls/InternalLink/index.tsx"),
				F = s("./src/reddit/helpers/name/index.ts"),
				R = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				B = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				D = s.n(B);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var U = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: o,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r;
					let d = null,
						c = r.url;
					return n ? (c = M.c[M.b.Popular], d = V._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = o ? V._("See more posts like this in {subredditName}", [V._param("subredditName", Object(F.c)(r.displayText))], {
						hk: "pLxW5"
					}) : V._("Continue browsing in {subredditName}", [V._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(A.a, {
						className: Object(N.a)(D.a.footer, t),
						onMouseDown: s,
						to: c,
						style: {
							backgroundColor: i
						}
					}, a.a.createElement("div", {
						className: D.a.background
					}), a.a.createElement("div", {
						className: D.a.layout
					}, d, a.a.createElement(R.a, {
						className: D.a.arrow
					})))
				}),
				W = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				H = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				K = s.n(H);
			const G = Object(c.a)((e, {
					isOverlay: t
				}) => t, k.a, j.b, (e, t, s) => !((!t || s) && e)),
				q = Object(c.a)((e, {
					post: t
				}) => !!t && Object(O.a)(t), T.J, T.K, w.d, G, (e, t, s, o, n) => !t && !s && !o && !e && n),
				z = Object(c.a)((e, {
					post: t
				}) => t, I.c, L.request, L.subreddit, (e, t, s, o) => {
					const n = !!e && void 0 !== e.isEligibleForLinkedPosts;
					let r, i = "";
					if (t && e && n) {
						const {
							isEligibleForLinkedPosts: n,
							id: a
						} = e;
						i = Object(p.a)(a, Object(I.a)(t) || !n), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: n,
							shouldShowLinkedPosts: n && !Object(x.ye)(t) && !Object(I.a)(t),
							subreddit: o
						}
					}
					return {
						hostPostData: r,
						isEligibilityLoaded: n,
						listingBelowVariant: t,
						linkedPostsListingKey: i
					}
				}),
				Q = Object(c.c)({
					listingBelowLinkedPostsData: z,
					nsfwListingBelowVariant: S.a,
					shouldShowListingBelow: q,
					shouldShowNsfwListingBelow: _.b
				}),
				Y = Object(d.b)(Q, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.V.HOT,
						subredditName: t
					}))
				}));
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(C.d) : null, this.onViewed = (e, t) => Object(P.f)(this.listingKey(), l.V.TOP, t, e, l.dc.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(E.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						shouldShowNsfwListingBelow: e,
						listingBelowLinkedPostsData: {
							linkedPostsListingKey: t,
							listingBelowVariant: s
						},
						post: o,
						subredditOrProfile: n
					} = this.props;
					return s ? t : e && o && o.id ? Object(W.a)(o.id) : Object(u.a)(n.name, l.V.TOP, {
						t: l.dc.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowLinkedPostsData: e,
						nsfwListingBelowVariant: t,
						shouldShowNsfwListingBelow: s,
						subredditOrProfile: n,
						theme: r
					} = this.props, {
						isEligibilityLoaded: i,
						hostPostData: d,
						listingBelowVariant: c
					} = e;
					if (c && !Object(x.ye)(c) && !Object(I.a)(c) && !i) return a.a.createElement("div", {
						className: K.a.smallBanner
					});
					const {
						name: l
					} = n, m = Object(y.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? o.fbt._("More posts from the {name} community", [o.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(I.b)(c) ? o.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.hd.SfwRecs ? o.fbt._("Top posts on Reddit this week", null, {
						hk: "w3BDa"
					}) : t === x.hd.DeRecs ? o.fbt._("Popular Posts Near You", null, {
						hk: "22vlW0"
					}) : o.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: K.a.smallBanner,
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
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: n
					} = this.props, {
						hostPostData: i,
						listingBelowVariant: d
					} = t;
					if (!s) return null;
					const c = !!(null == i ? void 0 : i.shouldShowLinkedPosts);
					return a.a.createElement("div", {
						className: K.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: K.a.postList,
						disablePlaceholder: !0,
						forcedLayout: v.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: i,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: f.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: K.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(U, {
						className: K.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						shouldShowNsfwListingBelow: o,
						subredditOrProfile: n
					}))
				}
			}
			t.a = Y(Object(m.a)(Object(g.c)(J)))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: s,
				toolbarPosition: o
			}) => n.a.createElement("div", {
				className: e
			}, n.a.createElement(i.a, {
				isFocused: !1
			}, !t && "top" === o && n.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
					isLoading: s
				}))
			}), n.a.createElement("div", {
				className: Object(r.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, n.a.createElement("div", {
				className: Object(r.a)(c.a.prompt, Object(a.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === o && n.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
					isLoading: s
				}))
			})))
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(r.b)((e, {
				postId: t
			}) => ({
				canShowAd: Object(i.a)(e, {
					postId: t
				}) && !Object(d.B)(e) && !Object(a.a)(e)
			}))(({
				canShowAd: e,
				postId: t,
				commentsPageKey: s,
				...o
			}) => e ? n.a.createElement(c.a, o) : null)
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				p = i.a.div("RuleTitle", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				title: o.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, r.a.createElement(l, null, r.a.createElement(m, null, 1, "."), r.a.createElement(p, null, o.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 2, "."), r.a.createElement(p, null, o.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 3, "."), r.a.createElement(p, null, o.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 4, "."), r.a.createElement(p, null, o.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/ReredditLink/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
				return E
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return j
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				C = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				f = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function E() {
				return Object(u.u)({
					currentProfileName: u.i,
					isCommentPermalink: u.w,
					isCommentsPage: u.x,
					isFrontpage: u.z,
					isProfilePostListing: u.K,
					isTopicPage: u.P,
					pageLayer: e => e
				})
			}
			const P = E(),
				w = {
					apiError: f.c,
					apiPending: f.d,
					measureScrollFPS: C.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.Q)(e, t),
					loadMore: f.g,
					postsById: v.S,
					postIds: Object(r.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: o
					}) => Object(v.E)(e, t, s, o)),
					subredditsById: O.X,
					viewportDataLoaded: y.a,
					pageReferrer: u.T,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: x.d
				},
				k = Object(n.c)(w),
				j = e => ({
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
						})), e(c.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, o, n) => {
						e(c.N(t, o, n))
					},
					trackOnPostExitedViewport: (t, s, o, n, r) => {
						e(c.O(t, o, n, r))
					},
					surveyTriggerScrollCounted: () => e(Object(m.i)())
				}),
				I = e => Object(h.b)({
					...e
				}),
				S = (e, t, s, o) => {
					const {
						listingKey: n,
						hostPostData: r,
						listingBelowVariant: i
					} = o;
					return Object(b.h)(e, t, "post", n, r, i, void 0)
				},
				_ = Object(o.b)(k, j, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: I,
					postClickEventFactory: S
				}));
			t.a = e => Object(p.c)(P(_(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext(() => () => {})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/reddit/helpers/parseUrl.ts");
			const n = ["old", "new", "en", "www", "np", "m"],
				r = ["reddit.com", "reddit.local"].concat("").concat(n.map((function(e) {
					return e + ".reddit.com"
				}))).concat(n.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				a = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: r.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e) {
				return (e.match(new RegExp(o.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(s) {
						return t = function(e, t) {
							const s = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const n = Object(o.a)(t);
							if (!n) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || r).indexOf(n.hostname)) return;
							const i = n.pathname.match(s.pathname);
							if (i) {
								return {
									url: t,
									routeName: e,
									components: s.pathnameComponents.reduce((function(e, t, s) {
										return e[t] = i[s + 1], e
									}), {})
								}
							}
						}(s, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = e => {
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
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => ({
					...Object(o.defaults)(e),
					media: Object(o.media)(e, t),
					profile: Object(o.profile)(e),
					subreddit: Object(o.subreddit)(e) || Object(o.subredditByPostOrCommentId)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(o.post)(t, e),
					...n(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(o.post)(t, e),
					...n(t, e)
				})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js");

			function n() {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(o.useContext)(n.a)
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = ({
				className: e
			}) => n.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), n.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const d = e => n.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				p = s("./src/reddit/components/LightboxHeader/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				f = s.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(r.b)(() => Object(i.c)({
					showFPR: C.I,
					showSuspended: C.Q,
					showOffline: e => e.connection.showBanner
				})),
				y = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...o
				}) => {
					const r = Object(g.a)({
						theme: s,
						...o
					});
					return n.a.createElement("div", v({
						className: Object(a.a)(f.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${u.h}px` : `${u.i}px`
						}
					}, o))
				});
			class E extends n.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR,
							showOffline: this.props.showOffline
						};
						return n.a.createElement(m.a, {
							className: Object(a.a)(f.a.fakeOverlayLightboxHeaderWrapper, {
								[f.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(f.a, t))
						}, n.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(y, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), n.a.createElement(c.a.Consumer, null, this.renderWrapper), n.a.createElement(h.a, e))
				}
			}
			t.a = O(E)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => n.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => n.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => n.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends n.a.PureComponent {
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
						isFakeOverlay: o,
						sidebar: r
					} = this.props;
					return n.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: o,
						tabIndex: -1
					}, n.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: o,
						redditStyle: !0
					}, t, e), r && n.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: o
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
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				d = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/path/index.ts"),
				m = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				u = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(r.b)(() => Object(i.c)({
				headComment: p.x,
				post: p.H
			}));
			t.a = Object(c.c)(g(({
				commentId: e,
				headComment: t,
				isOverlay: s,
				post: o,
				postId: r,
				sendEvent: i
			}) => {
				var c;
				if (!o) return null;
				const p = null !== (c = o.numDuplicates) && void 0 !== c ? c : 0,
					u = void 0 !== e,
					g = o.permalink,
					C = p > 0,
					x = Object(l.b)(Object(a.e)(g));
				return u || C ? n.a.createElement("div", {
					className: h.a.CommentsNavigationPane
				}, u && n.a.createElement("div", null, n.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(g)
				}, b._("View all comments", null, {
					hk: "3I5IX9"
				})), t && null !== t.parentId && n.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(t.permalink + "?context=8&depth=9")
				}, b._("Show parent comments", null, {
					hk: "AVRCa"
				}))), C && n.a.createElement(d.a, {
					className: h.a.OtherDiscussionsLink,
					isOverlay: s,
					onClick: () => i(Object(m.a)(r)),
					to: x
				}, b._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [b._plural(p, "other discussion communities count")], {
					hk: "3oofZ8"
				}))) : null
			}))
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
				return gt
			})), s.d(t, "CommentsPage", (function() {
				return Et
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/get.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/domUtils/index.ts"),
				O = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/lessComponent.tsx"),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				P = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/lib/performanceTimings/index.tsx"),
				k = s("./src/reddit/actions/ads/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				S = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				_ = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/actions/upvotePrompt.ts"),
				A = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				F = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				R = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				B = s("./src/reddit/constants/componentSizes.ts"),
				D = s("./src/reddit/constants/elementIds.ts"),
				V = s("./src/reddit/constants/history.ts"),
				U = s("./src/reddit/constants/keycodes.ts"),
				W = s("./src/reddit/constants/posts.ts"),
				H = s("./src/reddit/constants/screenWidths.ts"),
				K = s("./src/reddit/contexts/ApiContext.tsx"),
				G = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				z = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Q = s("./src/reddit/selectors/experiments/upvotePrompt.ts"),
				Y = s("./src/reddit/featureFlags/profileCollections.ts"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				X = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/chatPost.ts"),
				te = s("./src/reddit/selectors/comments.ts"),
				se = s("./src/reddit/selectors/commentSelector.ts"),
				oe = s("./src/reddit/selectors/commentsListTruncated.ts"),
				ne = s("./src/reddit/selectors/discoveryUnit.ts"),
				re = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ie = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ae = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				de = s("./src/reddit/selectors/experiments/celebratoryMoments.ts"),
				ce = s("./src/reddit/selectors/experiments/postSeo.ts"),
				le = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				me = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				pe = s("./src/reddit/selectors/meta.ts"),
				ue = s("./src/reddit/selectors/moderatorPermissions.ts"),
				he = s("./src/reddit/selectors/posts.ts"),
				be = s("./src/reddit/selectors/subreddit.ts"),
				ge = s("./src/reddit/selectors/tooltip.ts"),
				Ce = s("./src/reddit/selectors/user.ts"),
				xe = s("./src/reddit/actions/celebratoryMoments/index.ts"),
				fe = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				ve = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Oe = s("./src/reddit/components/CelebratoryMoments/constants.ts"),
				ye = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Ee = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Pe = s("./src/reddit/components/Comments/index.tsx"),
				we = s("./src/reddit/components/Comments/States/index.tsx"),
				ke = s("./src/reddit/components/CommentsChat/Loader.ts"),
				je = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ie = s("./src/reddit/components/CommentSort/index.tsx"),
				Se = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				_e = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Le = s("./src/reddit/components/HeaderImage/index.tsx"),
				Te = s("./src/reddit/components/Hovercards/helpers.ts"),
				Ne = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Me = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Ae = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Fe = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Re = s("./src/reddit/components/JumpToContent/index.tsx"),
				Be = s("./src/reddit/components/PostContent/index.tsx"),
				De = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ve = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				Ue = s("./src/reddit/components/SubredditNav/index.tsx"),
				We = s("./src/reddit/components/TrackingHelper/index.tsx"),
				He = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ke = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Ge = s("./src/reddit/helpers/history/index.ts"),
				qe = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				ze = s("./src/reddit/helpers/postCollection.ts"),
				Qe = s("./src/reddit/helpers/resonatePage/index.ts"),
				Ye = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Je = s("./src/reddit/helpers/trackers/screenview.ts"),
				Xe = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Ze = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				$e = s("./src/reddit/layout/page/Listing/index.tsx"),
				et = s("./src/reddit/models/ContentGate.ts"),
				tt = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				st = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				ot = s("./src/config.ts"),
				nt = s("./src/reddit/pages/CommentsPage/index.m.less"),
				rt = s.n(nt);

			function it() {
				return (it = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const at = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-CelebratoryMoments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-CelebratoryMoments").then(s.bind(null, "./src/reddit/components/CelebratoryMoments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CelebratoryMoments/index.tsx"
					}
				}),
				dt = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				ct = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				lt = 200,
				mt = 80,
				pt = 32,
				ut = Object(o.a)({
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
				ht = Object(o.a)({
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
				bt = Object(o.a)({
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
				gt = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(E.a)(e) : s,
				Ct = e => {
					const {
						state: t
					} = e.location, s = a()(t, V.a.IsOverlay, !1), o = a()(t, V.a.CloseLocation, null), n = a()(t, V.a.ScrollOnLoad, !1);
					n && Object(Ge.c)(V.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(Z.s)(i), l = r && Object(X.h)(r);
					return m.a.createElement(J.a, {
						postId: c
					}, m.a.createElement(Et, {
						closeLocation: o,
						commentId: l,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: n,
						sort: e.sort,
						subredditName: d
					}))
				},
				xt = Object(G.u)(),
				ft = () => Object(h.c)({
					apiError: te.c,
					apiPending: te.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(he.U)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					comment: se.b,
					communityBannerDiscoveryUnit: ne.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(Ce.f)(e, t),
					currentUserShowNSFW: Ce.eb,
					dismissedSubreddits: re.a,
					fullyLoaded: te.u,
					hasModeratorPostPermissions: ue.c,
					headComment: te.x,
					isActionBarAnimationEnabled: z.b,
					isAvatarsInCommentsEnabled: ae.a,
					isBlockedUserBannerEnabled: (e, {
						postId: t
					}) => !!Object(he.w)(e, {
						postId: t
					}) && Object(ie.a)(e),
					isCountAnimShadowTestEnabled: z.e,
					isCelebratoryMomentsEnabled: de.c,
					isRenderCelebratoryMoment: de.d,
					isUpvoteCelebratoryMoment: de.e,
					celebratoryMomentsNumCooldownDays: de.b,
					isChatPost: ee.d,
					isCommentsListTruncated: oe.a,
					isLoggedIn: Ce.K,
					isNightmodeOn: Ce.X,
					isTooltipOpen: (e, t) => !!Object(ge.a)(e),
					origin: pe.j,
					post: he.H,
					postSEOV2IdCardVariant: ce.h,
					profileCollectionsEnabled: Y.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: o
					}) => Object(te.s)(e, {
						commentsPageKey: gt({
							postId: t,
							commentId: s,
							commentsPageKey: o
						})
					}),
					shouldOpenPostInNewTab: Ce.db,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(be.t)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: he.U,
					userHovercardIsOpen: (e, t) => Object(ge.b)(Object(Te.b)({
						itemId: t.postId,
						tooltipIdPrefix: F.a,
						tooltipType: De.c.StickyPost
					}))(e),
					userPrefs: Ce.vb,
					inResonatePilot: le.a,
					isUpvotePromptExpEnabled: Q.d,
					isTypingIndicatorsPostShadowTestEnabled: me.b
				}),
				vt = (e, t) => ({
					dismissTruncation: t => e(Object(fe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(S.a)()),
					setCommentFocus: t => e(j.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(N.i)()),
					onToggleTooltip: t => e(Object(N.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.i)()),
					openRegisterModal: () => e(Object(L.k)()),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(S.b)()),
					fetchCommentsNativeAd: t => e(Object(k.a)(t)),
					getIsTrackingCrossposts: t => e(Object(_.b)(t)),
					getPostCrowdControlLevel: t => e(Object(ve.b)(t)),
					renderCelebratoryMoment: (t, s) => e(Object(xe.a)({
						isUpvote: t,
						postId: s
					})),
					triggerUpvotePrompt: (t, s, o) => {
						e(Object(M.b)(t, s, o))
					}
				}),
				Ot = Object(p.b)(ft, vt);
			class yt extends m.a.Component {
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
							scrollAdThreshold: o,
							scrollPostThreshold: n,
							props: {
								userHovercardIsOpen: r,
								onToggleTooltip: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const d = s === window ? s.scrollY : s ? s.scrollTop : 0;
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== o && d >= o && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== o && d < o && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== n && d >= n && (this.didScrollPastPost = !0), t && void 0 !== n && d < n && (this.didScrollPastPost = !1, r && O.a.write(() => {
							i(Object(Te.b)({
								itemId: a,
								tooltipIdPrefix: F.a,
								tooltipType: De.c.StickyPost
							}))
						}))
					}, f.J), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(Ye.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const o = s && Object(Z.r)(s) && s && s.belongsTo.id;
						o && e(o), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Ke.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === U.b.F || e.keyCode === U.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.shouldTriggerCelebratoryMoment = () => {
						const {
							isCelebratoryMomentsEnabled: e,
							isOverlay: t,
							post: s
						} = this.props;
						return e && !(null == s ? void 0 : s.isSponsored) && !(null == s ? void 0 : s.isArchived) && !t
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.didPassAdScrollThreshold = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null,
						commentNativeAdId: null,
						isUpvotePromptTriggered: !1,
						shouldShowCelebratoryMoment: !1
					}
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
					this.props.isUpvotePromptExpEnabled && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, Q.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: o,
							isOverlay: n,
							post: r,
							shouldScrollToComments: i
						}
					} = this;
					if (r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== W.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (n ? (this.scrollContainerEl = document.getElementById(D.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : O.a.write(() => {
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
							const s = null === (e = Object(qe.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(Z.s)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), O.a.read(() => {
							this.props.isOverlay || Object(w.d)(w.c.CommentsPage, o)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						f.Jb.includes(e) && Object(Qe.a)(e)
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(ze.a)(this.props.post);
						this.props.post && this.props.post.numComments ? O.a.read(this.handleScroll) : O.a.write(() => {
							e || Object(v.c)(this.scrollContainerEl, 0), O.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && O.a.write(() => {
							setTimeout(() => {
								Object(v.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = B.b + (this.props.isOverlay ? B.n : 0),
								s = t.getBoundingClientRect().top;
							let o;
							const n = (o = this.props.isOverlay ? document.getElementById(D.d) : document.getElementsByTagName("body")[0]) && o.getBoundingClientRect().top,
								r = Math.abs(n - s),
								i = this.props.isOverlay ? pt : r - e;
							(this.props.isOverlay ? o && o.scrollTop || 0 : window.pageYOffset) >= i && O.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(v.c)(o, i) : Object(v.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					if (this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0, this.upvotePromptId && clearTimeout(this.upvotePromptId), this.props.isOverlay && this.props.isUpvotePromptExpEnabled && !this.state.isUpvotePromptTriggered) {
						const e = !0;
						this.props.triggerUpvotePrompt(this.props.postId, e)
					}
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						subredditOrProfile: t,
						truncateCommentsList: s
					} = this.props, o = t && t.id;
					o && !e.includes(o) && s()
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = lt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = lt)
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
						const e = document.getElementById(D.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - mt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - mt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), O.a.write(() => {
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
							sendEvent: o,
							sort: n
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						o(Object(Je.c)(t, s, e, C.TimerType.InApp, r, n))
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
						post: o,
						subredditName: n
					} = this.props, r = !(!o || !o.isNSFW || t), i = Object(He.a)(e, r, n);
					if (!i) return null;
					let a = m.a.createElement(bt, i);
					return s && (a = m.a.createElement(Xe.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						isRenderCelebratoryMoment: s,
						isUpvoteCelebratoryMoment: o,
						closeLocation: r,
						commentId: i,
						commentsPageKey: a,
						isActionBarAnimationEnabled: d,
						isCountAnimShadowTestEnabled: c,
						isLoggedIn: l,
						isNightmodeOn: p,
						isOverlay: u,
						post: h,
						postId: b,
						postSEOV2IdCardVariant: g,
						profileCollectionsEnabled: C,
						renderCelebratoryMoment: v,
						sendEvent: O,
						sort: y,
						subredditOrProfile: E
					} = this.props, P = Object(ce.f)(g);
					if (!h) {
						if (t) return m.a.createElement(we.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === f.n ? m.a.createElement(bt, {
							contentGateType: et.a.PostBlockedForLegalReason
						}) : m.a.createElement(we.d, {
							postId: b,
							commentId: i,
							apiError: e,
							sort: y
						}) : m.a.createElement(we.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const w = this.isCommentPermalink(),
						k = h.belongsTo.type === W.a.PROFILE,
						j = Object(ze.a)(h) && (!k || C),
						I = !l,
						S = n.fbt._("Thanks for the comment", null, {
							hk: "13Osok"
						}),
						_ = `${ot.a.assetPath}/img/celebratory-moments/thumbs-up-snoo.png`;
					return dt.input.channel.postID = b, m.a.createElement(wt, {
						closeLocation: r,
						commentsPageKey: a,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: l,
						isOverlay: u,
						isSwapVariant: P,
						post: h,
						subredditOrProfile: E,
						shouldFitPageToContent: I,
						isCollectionLayout: j
					}, E && E.isQuarantined && m.a.createElement(Fe.a, {
						subredditName: E.name
					}), m.a.createElement(Re.a, null), s && m.a.createElement(at, {
						iconUrl: o ? void 0 : _,
						minWindowWidthInPx: Oe.b,
						text: o ? void 0 : S
					}), m.a.createElement("div", {
						className: Object(x.a)(rt.a.PageContentWrapper, {
							[rt.a.LargePageContent]: j,
							[rt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, j && m.a.createElement(ht, {
						isOverlay: u,
						isNightmodeOn: p,
						postId: b
					}), m.a.createElement(ct, {
						condition: j,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: rt.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Be.a, {
						isCommentPermalink: w,
						isOverlay: u,
						postId: b,
						redditStyle: u,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: O,
						isActionBarAnimationEnabled: d,
						isCountAnimShadowTestEnabled: c,
						triggerCelebratoryMoment: this.shouldTriggerCelebratoryMoment() ? v : void 0
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(A.a, {
						key: `event-post-id-${h.id}`,
						isOverlay: u,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), E && !Object($.h)(E) && m.a.createElement(R.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: u,
						post: h,
						subredditOrProfile: E
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: o,
						commentsPageKey: r,
						fullyLoaded: i,
						hasModeratorPostPermissions: a,
						headComment: d,
						isAvatarsInCommentsEnabled: c,
						isBlockedUserBannerEnabled: l,
						isChatPost: p,
						isLoggedIn: u,
						isOverlay: h,
						isTypingIndicatorsPostShadowTestEnabled: g,
						location: C,
						onOtherDiscussions: f,
						openLoginModal: v,
						openRegisterModal: O,
						origin: y,
						post: E,
						postId: w,
						renderCelebratoryMoment: k,
						replyComment: j,
						sendEvent: S,
						sort: _,
						subredditAboutInfo: L,
						subredditOrProfile: T
					} = this.props;
					if (!E) return null;
					const N = this.isCommentPermalink(),
						M = [],
						A = E.isLocked && !s,
						F = !(N || E.isArchived || L && L.userIsBanned || E.authorIsBlocked && l);
					if (A) M.push(m.a.createElement(Me.a, {
						key: "commentThreadBanner",
						subredditOrProfile: T
					}));
					else if (E.isArchived) M.push(m.a.createElement(Ne.a, {
						key: "commentThreadBanner"
					}));
					else if (F && !p && !f)
						if (u) {
							const e = Object(P.a)(b.c.replyToPost, w);
							M.push(m.a.createElement(ye.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: w,
								submitAction: ({
									validate: t,
									...s
								}, o) => t ? I.t(w, r, e, s, o) : I.n(w, r, e, s, o),
								submitButtonText: n.fbt._("Comment", null, {
									hk: "m3FAA"
								}),
								triggerCelebratoryMoment: this.shouldTriggerCelebratoryMoment() ? k : void 0,
								isTypingIndicatorsPostShadowTestEnabled: g
							}))
						} else M.push(m.a.createElement(Ee.a, {
							key: "loggedOutCommentForm",
							location: C,
							openLoginModal: v,
							openRegisterModal: O,
							origin: y
						}));
					if (E.contestMode && M.push(m.a.createElement(Ae.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), !p && !f && M.push(m.a.createElement(Ie.a, {
							commentId: o,
							elementRef: this.updateCommentSortRef,
							isOverlay: h,
							key: "commentSort",
							location: C,
							postId: w,
							sort: _,
							suggestedSort: E.suggestedSort
						}), m.a.createElement(tt.a, {
							commentId: o,
							commentsPageKey: r,
							isOverlay: h,
							key: "commentNavigation",
							postId: w
						})), M.push(m.a.createElement(Ve.a, {
							postId: w
						})), !t || d || p || f)
						if (!e || d || f)
							if (f) M.push(m.a.createElement(ut, {
								commentSort: _,
								key: "otherDiscussions",
								postId: w,
								isOverlay: h,
								postPermalink: E.permalink
							}));
							else if (p) {
						if (T && T.id) {
							const e = j ? Object(P.a)(b.c.replyToComment, j.id) : Object(P.a)(b.c.replyToPost, w),
								s = gt({
									postId: w,
									commentId: o,
									commentsPageKey: r
								});
							M.push(m.a.createElement(ke.a, {
								commentId: o,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: w,
								renderedInOverlay: h,
								subredditId: T.id
							}, ({
								scrollToBottom: t
							}) => u ? m.a.createElement(je.a, {
								key: "chatCommentsForm",
								postId: w,
								replyComment: j,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: S
							}) : m.a.createElement(Ee.a, {
								key: "loggedOutCommentForm",
								className: rt.a.ChatLoggedOutForm,
								location: C,
								openLoginModal: v,
								openRegisterModal: O,
								origin: y
							})))
						}
					} else M.push(m.a.createElement("div", {
						className: Object(x.a)(rt.a.CommentsPaneWrapper, {
							[rt.a.mIsInOverlay]: h
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(_e.a, it({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: E.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Pe.a, {
						commentId: o,
						commentsPageKey: r,
						postId: w,
						renderedInOverlay: h,
						triggerCelebratoryMoment: this.shouldTriggerCelebratoryMoment() ? k : void 0
					})))), e && d ? M.push(m.a.createElement(we.e, {
						key: "commentsErrorState",
						postId: w,
						commentId: o,
						sort: _,
						apiError: e
					})) : !i && t && M.push(m.a.createElement(we.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else M.push(m.a.createElement(we.e, {
						postId: w,
						commentId: o,
						sort: _,
						apiError: e
					}));
					else this.didRenderLoading = !0, M.push(m.a.createElement(we.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(q.a.Provider, {
						value: this.sendEventWithName
					}, M)
				}
			}
			const Et = xt(Object(K.b)(Ot(Object(We.c)(yt)))),
				Pt = y.a.wrapped(Se.a, "DetailsPageSidebar", rt.a),
				wt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: o,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: p,
						subredditOrProfile: u
					} = e;
					if (!a && !d) return m.a.createElement(Ze.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(Se.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement(Xe.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(Se.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? B.i : H.a;
					return m.a.createElement($e.a, {
						containerRef: o,
						maxWidth: B.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(Le.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object($.h)(u) && m.a.createElement(Ue.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(Pt, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(st.a)(Ct)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.s)(t)
				},
				g = (e, t, s) => {
					const o = b(e),
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
							return n()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(o, r, a)
				},
				C = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				x = Object(a.b)(C);

			function f(e) {
				return x(t => {
					const {
						hasSortParam: s,
						sortToUse: o
					} = t.commentsPageSort, n = g(t, s, o), r = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: n,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: o
					};
					return i.a.createElement(e, a)
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/dismissedTruncationList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			var o = s("./node_modules/reselect/es/index.js");
			const n = e => e.dismissedTruncationList,
				r = Object(o.a)((e, {
					subredditOrProfile: t
				}) => t, n, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/celebratoryMoments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const i = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.te
					});
					return t === o.L.TwoDayCooldown || t === o.L.FiveDayCooldown
				},
				a = e => {
					const t = Object(r.d)(e, {
							experimentName: o.te
						}),
						s = null == t ? void 0 : t.variant;
					return s === o.L.TwoDayCooldown ? 2 : s === o.L.FiveDayCooldown ? 5 : 0
				},
				d = e => e.celebratoryMoments.isRenderCelebratoryMoment,
				c = e => !1 !== e.celebratoryMoments.isUpvote,
				l = e => e.celebratoryMoments.postId
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(i.K, i.J, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.E
				}), e => e === n.N.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: o.q
			}) === o.t.Enabled
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.Pb
				});
				return !(!t || Object(o.ye)(t))
			}
		},
		"./src/reddit/selectors/experiments/replyWithUpvote.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");

			function i(e) {
				const t = Object(r.k)(e);
				return !(!t || (null == t ? void 0 : t.karma) && t.karma.fromPosts < 5 && t.karma.fromComments < 10) && Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.mb
				}) === o.rc
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(n.c)(e, {
				experimentEligibilitySelector: e => !Object(r.d)(e) && "US" === Object(r.b)(e),
				experimentName: o.Id
			}) === o.Qd.Enabled
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.ve
					}) === o.ne.Enabled
				},
				i = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.ue
					}) === o.me.Enabled
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
				return C
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return O
			}));
			var o = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.Q)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				p = Object(o.a)((e, t) => {
					const s = u(e, t);
					if (!s) return m;
					const o = Object(i.U)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : m
				}),
				u = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.Q)(e, {
						subredditId: s
					}) : null
				},
				h = (e, t, s, o, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							n = s[t],
							i = n && Object(r.H)(e, {
								postId: o
							}) || null,
							a = n && Object(r.H)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				b = [3],
				g = Object(o.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const o = t.slice().sort();
					let n = -1;
					const i = Object(r.A)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return b.forEach(t => {
						let s = n + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !h(e, s, t, i, o);) s += 1;
							s < i.length && (a.push(s), n = s)
						}
					}), a
				}),
				C = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				f = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				O = e => {
					const t = Object(a.J)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						o = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && o
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(n.ye)(t)
				},
				d = Object(o.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/selectors/platform.ts");
			const i = new Date,
				a = i.getUTCFullYear(),
				d = i.getUTCMonth(),
				c = i.getUTCDate(),
				l = Date.UTC(2008, 0, 1),
				m = Date.UTC(a, d - 7, c),
				p = Object(o.a)(e => Object(r.f)(e), e => Object(n.a)(e), (e, t) => e && !!t && !!t.created && t.created > l && t.created < m)
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"69910b35bc53"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"758976ad5ad8"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"d5b9525ce2ca"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"e46817f7bd83"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"1d2279f811ea"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage.94f276de745c76a78ce2.js.map