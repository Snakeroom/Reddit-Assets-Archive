// https://www.redditstatic.com/desktop2x/CommentsPage.0c9d3bcbf3dfa9b32e82.js
// Retrieved at 1/12/2022, 10:40:05 AM by Reddit Dataminer v1.0.0
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
				return C
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
					const e = Object(m.a)(d.Tb.Bottom_cell),
						t = Object(m.a)(d.Tb.Bottom_cell_dismissible),
						s = Object(m.a)(d.Tb.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.Tb.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(d.Tb.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.Tb.Bottom_sheet);
					return e || n || o ? l.b.SignupUpsellCell : t || s ? l.b.SignupUpsellCellDismissible : r ? l.b.SignupUpsellBottomSheet : null
				},
				u = s("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const h = 250,
				b = 1e3;

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function C(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function(e = h) {
						const {
							showPromo: t
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.Tb.Bottom_cell_dismissible_immediate_trigger);
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
							maxWait: b
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
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return rt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return it
			})), s.d(t, "commentsPagePending", (function() {
				return at
			})), s.d(t, "commentsPageLoaded", (function() {
				return dt
			})), s.d(t, "commentsPageFailed", (function() {
				return ct
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return lt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return mt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return pt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return ut
			})), s.d(t, "commentsPageRequested", (function() {
				return ht
			})), s.d(t, "commentsPageDataRequested", (function() {
				return bt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return gt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Ct
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/reddit/actions/category/index.ts"),
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
				x = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				f = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				O = s("./src/reddit/actions/platform.ts"),
				v = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/actions/profile/index.ts"),
				y = s("./src/reddit/actions/subreddit.ts"),
				j = s("./src/reddit/actions/subreddit/questions.ts"),
				I = s("./src/reddit/actions/toaster.ts"),
				E = s("./src/reddit/constants/adEvents.ts"),
				_ = s("./src/reddit/constants/graphql.ts"),
				P = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/constants/posts.ts"),
				S = s("./src/reddit/helpers/commentList/index.ts"),
				L = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				T = s("./src/reddit/models/Comment/index.ts"),
				N = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Subreddit/index.ts"),
				R = s("./src/reddit/models/User/index.ts"),
				A = s("./src/reddit/selectors/category.ts"),
				B = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				F = s("./src/reddit/selectors/experiments/postSeo.ts"),
				D = s("./node_modules/reselect/es/index.js"),
				V = s("./src/reddit/constants/experiments.ts"),
				U = s("./src/reddit/helpers/chooseVariant/index.ts"),
				W = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				H = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				q = s("./src/reddit/selectors/platform.ts"),
				K = s("./node_modules/fbt/lib/FbtPublic.js"),
				G = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Y = s("./src/reddit/selectors/user.ts");
			const z = new Set([u.g.AntiEvilOps, u.g.AutomodFiltered, u.g.CommunityOps, u.g.ContentTakedown, u.g.CopyrightTakedown, u.g.Moderator, u.g.Reddit]),
				Q = new Set([u.g.Author, u.g.AuthorDeleted]),
				J = Object(D.a)(W.a, e => {
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
					let n = Object(G.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== N.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				X = Object(D.a)(W.a, e => {
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
					let n = Object(G.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== N.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				Z = Object(D.a)(Y.k, W.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				$ = Object(D.a)(q.f, W.a, J, X, H.a, Z, H.b, (e, t, s, n, o, r, i) => {
					if (!e || !t || o) return !1;
					if (n) return !0;
					const a = r || i,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || a || d)
				});
			var ee = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				ne = s("./src/lib/makeActionCreator/index.ts"),
				oe = s("./src/lib/makeCommentsPageKey/index.ts"),
				re = s("./src/reddit/actions/ads/index.ts"),
				ie = s("./src/reddit/helpers/canonicalUrls.ts"),
				ae = s("./src/reddit/helpers/correlationIdTracker.ts"),
				de = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				ce = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				le = s("./src/lib/performanceTimings/index.tsx"),
				me = s("./src/reddit/actions/gold/powerups.ts"),
				pe = s("./src/lib/makeListingKey/index.ts"),
				ue = s("./src/reddit/actions/googleQASchema/constants.ts");
			const he = Object(ne.a)(ue.b),
				be = Object(ne.a)(ue.a);
			var ge = s("./src/reddit/actions/linkedPosts/constants.ts");
			const Ce = Object(ne.a)(ge.a),
				xe = Object(ne.a)(ge.c),
				fe = Object(ne.a)(ge.b);
			var Oe = s("./src/lib/makeGqlRequest/index.ts"),
				ve = (s("./src/redditGQL/operations/OtherDiscussions.json"), s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				ke = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				ye = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				je = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Ie = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: n,
				response: o
			}) => {
				if (!o.ok) return void t(o.error);
				const r = o.body,
					{
						post: i
					} = r && r.data,
					a = e(),
					d = Object(pe.a)(n, null, {
						isOtherDiscussions: !0
					});
				if (i) {
					if (i.otherDiscussions && i.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = i, {
							postFlair: o,
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
									const s = Object(ke.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === u.a.Post && n.postInfo) {
										const e = Object(ke.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(u.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(ye.a)(e.profile)) : Object(u.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(je.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(ve.a)(e.subreddit))), s.id
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
						s({
							count: t,
							key: d,
							meta: a.meta,
							postFlair: o,
							postId: n,
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
					postId: n,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const Ee = Object(ne.a)(f.a),
				_e = Object(ne.a)(f.b),
				Pe = Object(ne.a)(f.c);
			var we = s("./src/reddit/actions/subreddit/constants.ts"),
				Se = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Le = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: o
				}) => {
					try {
						t({
							altText: o && o.media && (o.media.still && o.media.still.altText || o.media.obfuscated && o.media.obfuscated.altText) || null,
							postId: n
						})
					} catch (r) {
						s(r)
					}
				},
				Te = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var Ne = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: o
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!o || !o.linked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Te.a)(n),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(ke.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(u.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(je.a)(t)
							}
						}
						t({
							dist: o.linked.posts && o.linked.posts.dist || null,
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
				Me = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Re = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Ae = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: n,
					options: o,
					postId: r,
					subreddit: i
				}) => {
					try {
						if (!i) return;
						const n = i.elements || i.posts,
							a = t(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(n, a.posts && a.posts.models),
							c = Object(Me.a)(d),
							l = Re(c),
							m = n.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: p,
								sort: u,
								subredditName: b
							} = o,
							g = e && r ? Object(Te.a)(r, !0) : Object(pe.a)(b, h.W[u], {
								t: p
							});
						s({
							dist: n.dist,
							key: g,
							meta: a.meta,
							postIds: m,
							posts: l
						})
					} catch (a) {
						n(a)
					}
				},
				Be = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Fe = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var De = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: n,
					post: o
				}) => {
					try {
						const s = [],
							r = {},
							i = {};
						if (!o || !o.nsfwLinked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							c = Object(Fe.a)(n),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(ke.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(u.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(je.a)(t)
							}
						}
						t({
							dist: o.nsfwLinked.posts && o.nsfwLinked.posts.dist || null,
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
				Ve = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ue = Object(ne.a)(Ve.b),
				We = Object(ne.a)(Ve.a);
			var He = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const qe = Object(ne.a)(He.b),
				Ke = Object(ne.a)(He.a),
				Ge = Object(ne.a)(we.j),
				Ye = Object(ne.a)(we.i),
				ze = (Object(ne.a)(we.r), Object(ne.a)(we.q), e => async (t, s, {
					gqlContext: n
				}) => {
					var o, r, i, a;
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
					} = e, f = Object(pe.a)(b, null, {
						isOtherDiscussions: !0
					}), O = s(), v = Object(te.A)(O, {
						listingKey: f
					}), k = l && (!v || 0 === v.length), y = Object(pe.a)(x, h.W[C], {
						t: g
					}), j = Object(te.A)(O, {
						listingKey: y
					}), I = m && (c || !j || 0 === j.length), E = c, _ = d, P = Object(te.H)(O, {
						postId: b
					}), w = !!P && !!P.media && (Object(N.K)(P.media) || Object(N.F)(P.media)) && !P.media.altText;
					if (!(k || I || E || _ || w || p)) return;
					k && t(Pe({
						key: f
					}));
					const S = await ((e, t) => Object(Oe.a)(e, {
							...Se,
							variables: t
						}))(n(), e),
						L = S.body,
						T = Object(Be.a)(u),
						M = E && !!(null === (i = null === (r = null === (o = L.data) || void 0 === o ? void 0 : o.post) || void 0 === r ? void 0 : r.linked) || void 0 === i ? void 0 : i.isEligible),
						R = E && (T || !M);
					p && (S.ok ? L.data && L.data.post && t(he({
						postId: b,
						isEligibleForQASchema: null !== (a = L.data.post.isEligibleForQASchema) && void 0 !== a && a
					})) : t(be())), k && Ie({
						getState: s,
						onFailure: e => t(Ee(e)),
						onSuccess: e => t(_e(e)),
						postId: b,
						response: S
					}), (I && !E || R) && (S.ok ? L.data && Ae({
						getState: s,
						isLinkedPostsFallback: R,
						onFailure: e => t(Ye(e)),
						onSuccess: e => t(Ge(e)),
						options: e,
						postId: b,
						subreddit: L.data.subreddit
					}) : t(Ye(S.error))), E && M && !T && S.ok && L.data && Ne({
						getState: s,
						onFailure: e => t(fe(e)),
						onSuccess: e => t(xe(e)),
						postId: b,
						post: L.data.post
					}), _ && S.ok && De({
						getState: s,
						onFailure: e => t(Ke(e)),
						onSuccess: e => t(qe(e)),
						postId: b,
						post: L.data.post
					}), w && S.ok && L.data && Le({
						getState: s,
						onFailure: e => t(We(e)),
						onSuccess: e => t(Ue(e)),
						postId: b,
						post: L.data.post
					}), E && t(Ce({
						postId: b,
						isEligibleForLinkedPosts: M
					}))
				}),
				Qe = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						o = n && Object(u.t)(n),
						{
							sortToUse: r
						} = Object(L.a)(e, o);
					return (!r || r === h.u.CONFIDENCE) && Object(U.c)(e, {
						experimentEligibilitySelector: () => Object(Y.I)(e),
						experimentName: V.B
					}) === V.D.Enabled
				};
			var Je = s("./src/reddit/selectors/chatPost.ts"),
				Xe = s("./src/reddit/selectors/seo/index.ts"),
				Ze = s("./src/reddit/actions/pages/constants.ts"),
				$e = s("./src/lib/initializeClient/installReducer.ts"),
				et = s("./src/reddit/reducers/pages/comments/index.ts"),
				tt = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				st = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				nt = s("./src/reddit/selectors/i18n/index.ts"),
				ot = s("./src/reddit/selectors/moderatorPermissions.ts");
			Object($e.a)({
				pages: {
					comments: et.a
				}
			});
			const rt = 25,
				it = 100,
				at = Object(ne.a)(Ze.h),
				dt = Object(ne.a)(Ze.f),
				ct = Object(ne.a)(Ze.e),
				lt = Object(ne.a)(Ze.i),
				mt = (e, t, s) => {
					const n = !e,
						o = Object(te.H)(t, {
							postId: s
						}).belongsTo,
						r = Object(se.J)(t, {
							identifier: o
						}),
						i = Object(Xe.c)(t, {
							identifier: o
						}),
						a = !!Object(Be.c)(t),
						d = Object(nt.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || n, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || n) && (!Object(M.h)(r) && !Object(Je.d)(t, {
						postId: s
					}) && !!r || !Object(q.i)(t) && Object(F.e)(t)), e && (c.postQASchema = Object(F.d)(t)), c
				},
				pt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				ut = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				ht = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(u.t)(d) : "", p = c && Object(T.h)(c), {
						path: g,
						queryParams: x
					} = e, I = Object(f.d)(g), {
						instanceId: E
					} = x, {
						hasSortParam: S,
						sortToUse: M
					} = Object(L.a)(s(), m), R = null === (i = null === (r = Object(q.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, B = ["context", "depth", "limit", P.f].reduce((e, t) => {
						const s = parseInt(x[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: S,
						instanceId: E,
						include_categories: !0
					});
					S && (B.sort = M), B.onOtherDiscussions = I, t(v.r(m)), await t(bt(m, p, B, M));
					const F = s().posts.models[m],
						D = Object(Y.J)(s());
					if (F && "subreddit" === F.belongsTo.type) {
						const e = F.belongsTo.id,
							n = Object(le.i)(() => t(Object(me.m)(e, {
								fullData: !0,
								includeIdentity: D
							})), {
								name: "subredditPowerupsRequested",
								page: R,
								isLoggedIn: D
							});
						await n;
						const o = s();
						if (!Object(q.i)(o)) {
							Object(tt.a)(o) && t(Object(j.b)(e))
						}
					}
					if (F) {
						const r = ((e, t) => {
								const s = Object(te.V)(e, {
										postId: t
									}),
									n = Object(te.H)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							i = Object(se.J)(s(), {
								identifier: F.belongsTo
							});
						if (i && (e => V.Be.Redirect === Object(U.b)(e, {
								experimentEligibilitySelector: $,
								experimentName: V.ue
							}))(s())) return void t(Object(n.c)(i.url));
						if ((F.media && F.media.type) === N.o.LIVEVIDEO) {
							const e = `/rpan${F.belongsTo.type===w.a.SUBREDDIT?i.url:"/"}${Object(u.u)(F.id)}`;
							return void t(Object(n.c)(e))
						}
						if (F.belongsTo.type !== w.a.SUBREDDIT || F.isSponsored) {
							if (F.belongsTo.type === w.a.PROFILE) {
								const e = Object(le.i)(() => t(k.d(i.name)), {
									name: "getProfileInfo",
									page: R,
									isLoggedIn: D
								});
								await e
							}
						} else {
							if (!!!Object(se.Q)(s(), {
									subredditId: F.belongsTo.id
								})) {
								const e = Object(le.i)(() => t(y.o(i.name)), {
									name: "getSubredditRules",
									page: R,
									isLoggedIn: D
								});
								await e
							}
						}
						const d = mt(!1, s(), m),
							c = I;
						if (pt(c, d)) {
							Object(ae.e)(ae.a.LinkedPosts);
							const e = Object(ae.c)(ae.a.LinkedPosts);
							Object(ae.e)(ae.a.NsfwLinkedPosts);
							const n = Object(ae.c)(ae.a.NsfwLinkedPosts),
								o = {
									adContext: {
										layout: _.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.gc.WEEK.toUpperCase(),
									sort: h.P.TOP,
									subredditName: i.name
								},
								r = {
									postId: m
								},
								a = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Be.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(st.a)(s())
								},
								p = ut(d);
							Object(le.i)(() => t(ze({
								...r,
								...o,
								...a,
								...l,
								...p,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: D,
								page: R
							});
							0
						}
						t(Object(C.p)()), t(O.m({
							title: r
						}));
						const l = s().posts.instances[m] ? e.queryParams.instanceId : F.postId;
						t(Object(a.b)(l)); {
							const e = Object(A.c)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(o.c(e))))
						}
					} else t(O.m({
						title: b.e()
					}));
					const {
						routePrefix: W
					} = e.params;
					w.b[W] === w.a.PROFILE ? Object(ie.d)(s(), t, e) : Object(ie.b)(s(), t, e)
				}, bt = (e, t, s, n) => async (o, a, d) => {
					var u, b;
					const C = a(),
						f = Object(oe.a)(e, t, s),
						{
							subredditName: k
						} = s,
						y = C.pages.comments.keyToHeadCommentId.hasOwnProperty(f),
						j = C.pages.comments.api.fullyLoaded[f],
						_ = C.pages.comments.api.error[f],
						P = C.pages.comments.api.pending[f],
						w = !Object(Y.I)(C),
						L = Object(Y.k)(C),
						T = n === h.u.CHAT,
						N = !!C.platform.lastPage;
					if ((P || y && !_) && !(T && N)) {
						if (y && !C.sidebarPromotedPosts.firstFetch) {
							const e = Object(q.i)(C) ? ce.a.COMMENTS_OVERLAY : ce.a.COMMENTS;
							window.addEventListener("load", () => {
								o(Object(re.b)(e))
							})
						}
						return void(j || o(Ct(e, t, s)))
					}
					o(r.g());
					const M = C.user.prefs.commentMode;
					o(at({
						key: f,
						postId: e,
						commentMode: M
					}));
					const A = {
						...s,
						...T ? {
							sort: h.u.LIVE
						} : w ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(te.H)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > it && (A.truncate = rt)
					}
					const F = null === (b = null === (u = Object(q.b)(C)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						D = Object(le.i)(() => Object(l.a)(d.apiContext(), e, t, A, Object(B.a)(a()), Qe(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !w,
							page: F
						}),
						V = !w && L && Object(le.i)(() => Object(p.d)(d.gqlContext(), Object(R.e)(L)), {
							name: "fetchProfileKarma",
							isLoggedIn: !w,
							page: F
						}) || null,
						[U, W] = await Promise.all([D, V]);
					let H;
					if (o(Object(O.n)(U.status)), U.ok) {
						const t = Object.keys(U.body.posts).filter(e => !!U.body.posts[e].isMeta),
							s = U.body.posts[e];
						if (t.length) {
							const e = Object(le.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: F,
									isLoggedIn: !w
								}),
								n = await e;
							n.ok && (H = n.body)
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
						const n = Object(S.a)(U.body, e, C);
						o(dt({
							key: f,
							postId: e,
							meta: C.meta,
							governance: H,
							shouldCollapse: n,
							...U.body
						}))
					} {
						const n = Object(te.H)(a(), {
							postId: e
						});
						n && U.body.comments && Object.keys(U.body.comments).length < n.numComments ? o(Ct(e, t, s)) : U.ok && o(gt({
							key: f
						}));
						const r = Object(q.i)(C) ? ce.a.COMMENTS_OVERLAY : ce.a.COMMENTS;
						o(Object(re.b)(r))
					}
					if (U.ok) {
						o(I.g(f));
						const t = Object(te.H)(a(), {
								postId: e
							}),
							s = Object.keys(U.body.comments);
						if (o(v.z(t, E.a.CommentsView)), Object(ot.h)(a(), {
								subredditId: t.belongsTo.id
							}) && o(Object(x.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && U.body.comments) {
							const e = Object(le.i)(() => o(Object(g.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: F,
								isLoggedIn: !w
							});
							await e
						}
					} else {
						let e;
						k && (o(Object(i.subredditPending)({
							key: f
						})), e = await Object(de.a)("subreddit", () => Object(m.a)(d.apiContext(), k, {})), o(Object(O.n)(e.status)), o(Object(i.handleSubredditPageApiError)(e, k))), o(ct({
							error: U.error,
							key: f,
							...e ? e.body : U.body
						}))
					}
				}, gt = Object(ne.a)(Ze.g), Ct = (e, t, s) => async (n, o, r) => {
					const i = Object(oe.a)(e, t, s),
						a = o(),
						c = Object(Y.J)(a),
						m = Object(Y.k)(a),
						u = Object(l.a)(r.apiContext(), e, t, s, Object(B.a)(a), Qe(a)),
						h = c && m && Object(p.d)(r.gqlContext(), Object(R.e)(m)) || null,
						[b, C] = await Promise.all([u, h]);
					if (n(Object(O.n)(b.status)), b.ok) {
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
						n(dt({
							key: i,
							postId: e,
							meta: a.meta,
							shouldCollapse: t,
							...b.body
						})), n(gt({
							key: i
						}));
						const s = o().posts.models[e],
							r = s && Object(te.V)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(ee.a)(a, {
							subredditId: r.id
						}) && n(Object(d.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && b.body.comments && await n(Object(g.a)({
							commentIds: Object.keys(b.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(ct({
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
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
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

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
				O = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = e => r.a.createElement(x, e, e.isCommentBoxDesignEnabled ? r.a.createElement(O, null) : r.a.createElement(f, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				k = C(v),
				y = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				j = e => r.a.createElement(y, h({}, e, {
					fallback: r.a.createElement(k, {
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
			t.a = Object(d.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: n,
				openRegisterModal: d,
				origin: m,
				sendEvent: h
			}) => o.a.createElement("div", {
				className: Object(r.a)(e, p.a.Wrapper, {
					[p.a.LiveStreamingWrapper]: t
				})
			}, o.a.createElement("span", {
				className: Object(r.a)(p.a.Copy, {
					[p.a.LiveStreamingCopy]: t
				})
			}, u._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), o.a.createElement("div", {
				className: p.a.CTAButtons
			}, o.a.createElement(c.t, {
				className: p.a.LoginLink,
				kind: c.b.ExternalLink,
				priority: c.c.Secondary,
				href: Object(a.a)(s, m, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), h(Object(l.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, u._("Log In", null, {
				hk: "ZR3pC"
			})), o.a.createElement(c.t, {
				className: Object(r.a)(p.a.SignupLink, {
					[p.a.LiveStreamingSignupLink]: t
				}),
				kind: c.b.ExternalLink,
				priority: c.c.Primary,
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
			s.d(t, "a", (function() {
				return Q
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
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				C = s("./src/reddit/constants/headers.ts"),
				x = s("./src/reddit/models/Toast/index.ts");
			const f = (e, t) => async (s, o, {
				apiContext: r
			}) => {
				const i = await (async (e, t, s) => Object(b.a)(Object(g.a)(e, [C.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
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
					s(h.f({
						id: d,
						kind: x.b.SuccessCommunityGreen,
						text: o
					}))
				} else s(h.f({
					id: a,
					kind: x.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: f(e, t)
				}))
			};
			var O = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				v = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				y = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
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
					listing: Object(w.z)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(w.sb)(r)
				}),
				L = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				T = e => ({
					subreddit: Object(w.jb)(e),
					userSubreddit: Object(w.sb)(e)
				}),
				N = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...T
				});
			var M = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = s("./src/reddit/icons/svgs/Info/index.tsx"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/tooltip.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(W),
				q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const K = Object(y.a)(I.a),
				G = e => e === q.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === q.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Y extends r.a.Component {
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
					}, r.a.createElement(E.b, {
						className: Object(d.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${G(o)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(K, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(E.b, {
						displayText: G(q.a.First),
						isSelected: o === q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(E.b, {
						displayText: G(q.a.Last),
						isSelected: o === q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(E.b, {
						displayText: G(q.a.None),
						isSelected: o === q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var z = Y;
			const Q = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Z = Object(y.a)(I.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(B.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(A.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(V.b)(Q),
					highlightIsOpen: Object(V.b)(J),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(F.l)(e, {
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
							n = !!Object(F.l)(e, {
								postId: t
							}),
							o = Object(D.H)(e, {
								postId: t
							});
						return (n || s) && !!o && !!o.previousVisits && o.previousVisits.length > 0
					},
					selectedHighlightSort: B.p
				}),
				ee = Object(i.b)($, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(m.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: Q
					})),
					onOpenHighlightDropdown: t => {
						e(Object(l.h)({
							tooltipId: J
						})), t()
					},
					onSetSuggestedSort: s => e(f(t, s)),
					hideTooltip: () => e(Object(l.i)()),
					setContestMode: s => e(Object(u.W)(s, t)),
					showTooltip: () => e(Object(l.h)({
						tooltipId: X
					})),
					toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
				}));
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
						this.props.onOpenHighlightDropdown(L("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(N(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						location: h,
						post: b,
						postPermalink: g,
						selectedHighlightSort: C,
						showCommentHighlighter: x,
						sort: f,
						suggestedSort: y,
						showTooltip: j,
						toggleContestModeModal: I
					} = this.props, w = b.contestMode, S = !h.search.includes(c.u.CONFIDENCE), T = f === c.u.CONFIDENCE && S, N = p && !T, A = c.w[f], B = A ? A() : "", F = y && f === y && !T ? this.addSuggestedLabel(B) : B, D = w ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), V = w ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), U = w ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = w && !p;
					return r.a.createElement("div", {
						className: Object(d.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !x && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(E.b, {
						className: Object(d.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Z, {
						isOpen: i,
						tooltipId: Q
					}, [c.u.CONFIDENCE, c.u.TOP, c.u.NEW, c.u.CONTROVERSIAL, c.u.OLD, c.u.QA].map(e => {
						const t = s || g,
							n = Object(P.b)(t),
							o = c.w[e],
							i = o ? o() : "";
						return r.a.createElement(k.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(E.b, {
							displayText: i,
							isSelected: f === e,
							skipRoleAttr: !0
						}))
					}))), N && !W && (y ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: f !== y ? this.setSortOnClick : this.clearSortOnClick
					}, f !== y ? n.fbt._("Set new suggested sort", null, {
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
					}, r.a.createElement(v.c, {
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
					}), r.a.createElement(_.a, {
						className: H.a.ToggleSwitch,
						on: w
					}))), x && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: C,
						trackHighlight: L
					})), o && r.a.createElement(O.a, {
						actionText: V,
						headerText: D,
						modalText: U,
						onConfirm: this.setContestMode,
						toggleModal: I,
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
				return L
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "f", (function() {
				return N
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
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				C = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				O = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				v = s("./src/reddit/components/Comments/States/index.m.less"),
				k = s.n(v);
			const y = l.a.wrapped(f.a, "CommentsIcon", k.a),
				j = l.a.wrapped(O.a, "SnooFacepalm", k.a),
				I = l.a.p("EmptyTitle", k.a),
				E = l.a.p("ErrorTitle", k.a),
				_ = l.a.p("EmptyText", k.a),
				P = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(k.a.StateContainer, e)
				}, a.a.createElement(y, null), a.a.createElement(I, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(_, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				w = () => a.a.createElement("div", {
					className: k.a.StateContainer
				}, a.a.createElement(y, null), a.a.createElement(I, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(_, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: k.a.StateContainer
				}, a.a.createElement(y, null), a.a.createElement(I, null, n.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(u.n, {
					to: Object(b.b)(e)
				}, n.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				L = Object(d.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: n
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: n
					}, n))
				}))(({
					apiError: e,
					onClick: t
				}) => a.a.createElement("div", {
					className: k.a.StateContainer
				}, a.a.createElement(j, null), a.a.createElement(E, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(u.l, {
					onClick: t
				}, n.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				T = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				}) => a.a.createElement("div", {
					className: Object(c.a)(k.a.StateContainer, k.a.ErrorFullPage)
				}, a.a.createElement(L, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				})),
				N = l.a.wrapped(({
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(p.a, null)), "LoadingFullPage", k.a),
				M = l.a.div("CommentsPlaceholderContainer", k.a),
				R = l.a.div("CommentPlaceholder", k.a),
				A = l.a.div("Avatar", k.a),
				B = l.a.div("VoteColumn", k.a),
				F = l.a.div("TextColumn", k.a),
				D = l.a.wrapped(x.a, "Upvote", k.a),
				V = l.a.wrapped(C.a, "Downvote", k.a),
				U = () => a.a.createElement("div", {
					className: Object(c.a)(k.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(k.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(M, null, r()(10, t => a.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(A, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(B, null, a.a.createElement(D, null), a.a.createElement(V, null)), a.a.createElement(F, null, a.a.createElement(U, null), a.a.createElement(W, null)))))
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
			var n, o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/isEqual.js"),
				a = s.n(i),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				g = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/constants/comments.ts"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/constants/elementClassNames.ts"),
				v = s("./src/reddit/constants/gold.ts"),
				k = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = s("./src/reddit/components/LottieAnimation/index.tsx"),
				j = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				I = s.n(j);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const E = {
				threshold: [.75, .001]
			};
			var _ = c.a.memo(e => {
				const t = Object(d.useRef)(null),
					[s, o] = Object(d.useState)(!1),
					r = Object(d.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && o(!1), t <= .001 && o(!0)
						})
					}, []);
				Object(k.a)(t, r, E);
				const i = e.type;
				return c.a.createElement("div", {
					className: Object(p.a)(I.a.effectContainer, I.a[i + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, i === n.Lottie && c.a.createElement(y.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const P = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: w,
							effectHighlight: {
								type: n.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				w = "ff0000";

			function S(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(T).filter(e => e !== L)
				}(e) : [])
			}
			const L = {
				glowHexColor: null,
				effectHighlight: null
			};

			function T(e) {
				for (const t of P) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return L
			}
			var N = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				M = s("./src/reddit/selectors/comments.ts"),
				R = s("./src/reddit/selectors/commentSelector.ts"),
				A = s("./src/reddit/selectors/communityAwards.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				F = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				V = s("./node_modules/fbt/lib/FbtPublic.js"),
				U = s("./src/reddit/models/PostDraft/index.ts"),
				W = s("./src/lib/makeDraftKey/index.ts"),
				H = s("./src/lib/objectSelector/index.ts"),
				q = s("./src/reddit/actions/comment/authoring.ts"),
				K = s("./src/reddit/actions/comment/moderation.ts"),
				G = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Y = s("./src/reddit/icons/fonts/helpers.tsx");
			var z = e => c.a.createElement("i", {
					className: Object(p.a)(Object(Y.b)("expand", e.isFilled), e.className)
				}),
				Q = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				J = s.n(Q);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Z, $, ee = s("./node_modules/lodash/defer.js"),
				te = s.n(ee),
				se = s("./src/reddit/actions/tooltip.ts"),
				ne = s("./src/reddit/selectors/tooltip.ts"),
				oe = s("./src/reddit/actions/gold/modals.ts"),
				re = s("./src/reddit/actions/modal.ts"),
				ie = s("./src/reddit/actions/reportFlow/index.ts"),
				ae = s("./src/reddit/helpers/correlationIdTracker.ts"),
				de = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ce = s("./src/reddit/helpers/trackers/lightbox.ts"),
				le = s("./src/reddit/models/Comment/index.ts"),
				me = s("./src/reddit/selectors/activeModalId.ts"),
				pe = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ue = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				he = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				be = s("./src/reddit/selectors/subreddit.ts"),
				ge = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				Ce = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				xe = s.n(Ce);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(Z || (Z = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}($ || ($ = {}));
			const fe = (e, t) => {
					const s = xe.a[t],
						n = xe.a[e];
					return Object(p.a)(s, n)
				},
				Oe = e => Object(p.a)(xe.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[xe.a.isInOverlay]: e.isInOverlay,
					[xe.a.isModModeEnabled]: e.isModModeEnabled,
					[xe.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var ve = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				ke = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				ye = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				je = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Ie = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ee = s("./src/reddit/components/ModModeReports/helpers.ts"),
				_e = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Pe = s("./src/reddit/components/ReportFlow/index.tsx"),
				we = s("./src/reddit/components/ReportFlow/new.tsx"),
				Se = s("./src/reddit/components/ShareMenu/index.tsx"),
				Le = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Te = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Ne = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Me = s("./src/reddit/helpers/trackers/modTools.ts"),
				Re = s("./src/reddit/layout/row/Inline/index.tsx"),
				Ae = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				Be = s.n(Ae),
				Fe = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				De = s("./src/reddit/selectors/gold/awardIcon.ts");
			var Ve = e => {
					const t = Object(l.e)(he.b),
						s = Object(l.e)(e => t && Object(De.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? c.a.createElement("img", {
						className: Object(p.a)(Be.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : c.a.createElement(Fe.a, e)
				},
				Ue = s("./src/reddit/icons/fonts/index.tsx"),
				We = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				He = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				qe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ke = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Ge = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ye = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				ze = s.n(Ye);
			const Qe = h.a.wrapped(We.a, "CommentIcon", ze.a),
				Je = h.a.wrapped(Ge.a, "Report", ze.a),
				Xe = h.a.wrapped(qe.a, "IgnoreReport", ze.a),
				Ze = h.a.wrapped(Ie.a, "ModActionsMenu", ze.a),
				$e = h.a.div("OverflowMenuSpacer", ze.a),
				et = h.a.wrapped(_e.a, "DropdownRow", ze.a),
				tt = h.a.wrapped(Re.a, "Flatlist", ze.a),
				st = h.a.button("Button", ze.a),
				nt = h.a.wrapped(ve.a, "ModToolsFlatlist", ze.a),
				ot = h.a.wrapped(Te.a, "ViewReportsDropdown", ze.a),
				rt = e => `Comment-${e}--Modal--DeleteComment`,
				it = e => `Distinguish--Dropdown--${e}`,
				at = e => `${e}-overflow-menu`,
				dt = e => `View--Reports--${e}`,
				ct = Object(m.c)({
					claimedFreeAward: he.b,
					currentUser: D.k,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(me.a)(e) === rt(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(ne.b)(it(t.id))(e),
					isFollowed: (e, {
						comment: t
					}) => Object(M.y)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(M.A)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(M.C)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(ne.b)(dt(t.id))(e),
					isLoggedIn: D.J,
					postIsArchived: (e, {
						comment: t
					}) => Object(F.B)(e, {
						postId: t.postId
					}),
					isBlockedUserBannerEnabled: (e, {
						comment: t
					}) => !!Object(F.w)(e, {
						postId: t.postId
					}) && Object(pe.a)(e),
					postAuthorIsBlocked: (e, {
						comment: t
					}) => Object(F.w)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(F.C)(e, {
						postId: t.postId
					}),
					commentPermalink: (e, {
						comment: t
					}) => Object(M.m)(e, {
						commentId: t.id
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, n;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(M.I)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(be.t)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(F.V)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: ue.a,
					isPostUnrepliable: (e, {
						comment: t
					}) => {
						var s;
						return null === (s = Object(F.H)(e, {
							postId: t.postId
						})) || void 0 === s ? void 0 : s.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: pe.b,
					isParentCommentsAuthorBlocked: (e, {
						comment: t
					}) => Object(M.B)(e, {
						commentId: t.id
					})
				});
			class lt extends c.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(ce.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Me.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Me.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Me.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(ae.e)(ae.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Me.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Me.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Me.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? le.a.UNFOLLOWED : le.a.FOLLOWED), t(n ? Object(Me.f)("follow", s.id) : Object(Me.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Me.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? c.a.createElement(we.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Pe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : c.a.createElement(Pe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Pe.b,
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
						commentPermalink: n,
						deleteComment: o,
						depth: r,
						handleReply: i,
						isAvatarsInCommentsEnabled: a,
						isFollowed: l,
						isLoggedIn: m,
						isPendingDeletion: u,
						onDistinguishComment: h,
						onIgnoreReports: b,
						onToggleReportsDropdown: g,
						moderatorPermissions: C,
						modModeEnabled: x,
						postIsArchived: f,
						postAuthorIsBlocked: O,
						isBlockedUserBannerEnabled: v,
						postIsLocked: k,
						renderedInOverlay: y,
						sendEvent: j,
						subreddit: I,
						subredditAboutInfo: E,
						toggleDeleteCommentModal: _,
						toggleSendReplies: P,
						trackCommentClick: w,
						isPostUnrepliable: S,
						isTrueblockPCBlockeeEnabled: L,
						isParentCommentsAuthorBlocked: T
					} = this.props, N = Object(de.a)(C), M = !!s && s.displayText === e.author, R = !!s && s.isEmployee, A = L && e.unrepliableReason, B = L && S, F = !(T && L) && !(O && L) && !(Object(le.g)(e) && L) && !(S && L) && !A && !B && !(E && E.userIsBanned) && (k || f || O && v || N && m || e.isLocked ? N && m : m || a), D = Object(Ee.a)(e), U = N && M && !e.bannedBy, W = M && R && !e.bannedBy, H = U || W, q = !(Object(le.g)(e) && L) && s && e.isGildable && !B && !(A && "[deleted]" === e.author), K = !f && !A, G = [];
					F && G.push(c.a.createElement(st, {
						disabled: u,
						key: "reply",
						onClick: () => {
							i(), te()(() => w("reply", e.id)())
						}
					}, c.a.createElement(Qe, null), V.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), q && G.push({
						breakpointGroup: $.LoggedInUser,
						icon: c.a.createElement(Ve, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => V.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), G.push(c.a.createElement(Se.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: n,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == I ? void 0 : I.type
					}, c.a.createElement(st, {
						onClick: () => this.sendCommentEventWithName("share")
					}, V.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), M || G.push({
						breakpointGroup: $.LoggedInUser,
						icon: c.a.createElement(Ge.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => V.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), G.push({
						breakpointGroup: $.LoggedInUser,
						icon: c.a.createElement(Ue.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => V.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => V.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), M && G.push({
						breakpointGroup: $.LoggedInUser,
						icon: c.a.createElement(Ue.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => V.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), K && G.push({
						breakpointGroup: $.LoggedInUser,
						icon: c.a.createElement(Ue.a, {
							name: "notification",
							isFilled: l
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: l ? () => V.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => V.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const Y = G.map(e => c.a.isValidElement(e) ? e : c.a.createElement(st, {
							className: fe(e.breakpointGroup, Z.HideIfVWSmaller),
							disabled: u,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						z = G.map(e => c.a.isValidElement(e) ? null : c.a.createElement(et, {
							className: fe(e.breakpointGroup, Z.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: ze.a.dropdownRowText
						}, e.icon));
					return c.a.createElement(d.Fragment, null, c.a.createElement(tt, {
						className: Object(p.a)(Oe({
							depth: r,
							isInOverlay: y,
							isModModeEnabled: N && x,
							isFollowCommentEnabled: K
						}), t)
					}, Y, c.a.createElement($e, {
						className: M ? void 0 : fe($.LoggedInUser, Z.HideIfVWLarger)
					}, c.a.createElement(_e.b, {
						className: ze.a.overflowMenu,
						disabled: u,
						dropdownId: at(e.id),
						onClick: () => j(Object(Me.a)("comment_overflow_menu", e.id))
					}, z, M && c.a.createElement(c.a.Fragment, null, c.a.createElement(et, {
						displayText: V.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: ze.a.dropdownRowText
					}, c.a.createElement(Ue.a, {
						name: "delete"
					})), c.a.createElement(Ne.a, {
						text: V.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: P,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && c.a.createElement(ye.a, {
						actionText: V.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: V.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: V.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: V.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: o,
						toggleModal: _,
						trackClick: () => {},
						withOverlay: !0
					}), N && c.a.createElement(c.a.Fragment, null, x && c.a.createElement(nt, {
						className: fe($.Moderator, Z.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: M
					}), c.a.createElement(Ze, {
						className: x ? fe($.Moderator, Z.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => j(Object(Me.a)("comment_mod_action_menu", e.id))
					}, c.a.createElement(Ke.a, null), c.a.createElement(ge.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Ee.c)(e) && !x && c.a.createElement(ke.a, {
						text: `${D}`,
						onClick: () => {
							g(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: dt(e.id)
					}, c.a.createElement(ot, {
						model: e,
						onIgnoreReports: () => {
							b(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: dt(e.id)
					}), e.ignoreReports ? c.a.createElement(Xe, null) : c.a.createElement(Je, null)), H && c.a.createElement(ke.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, c.a.createElement(He.a, null), c.a.createElement(je.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: R,
						isUserMod: N,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: it(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var mt = Object(l.b)(ct, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(q.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(re.i)(rt(t.id))), e(Object(se.h)({
							tooltipId: at(t.id)
						}))
					},
					handleEdit: () => {
						const n = t.media && t.media.rteMode;
						s && e(Object(q.d)({
							commentId: t.id,
							draftKey: Object(W.a)(U.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(q.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onCommentFollow: s => e(Object(q.r)(t.id, s)),
					onDistinguishComment: (s, n) => e(Object(K.b)(t.id, s, n)),
					onFollowedCommentExpire: () => e(Object(C.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (s, n) => e(Object(oe.d)({
						awardId: n,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(K.g)(t.id)),
					onReportClick: () => e(Object(ie.c)(t.id)),
					onToggleSave: () => e(Object(C.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(se.h)({
						tooltipId: it(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(se.h)({
						tooltipId: dt(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(re.i)(rt(t.id))),
					toggleSendReplies: () => e(Object(q.k)(t.id))
				}))(Object(Le.c)(lt)),
				pt = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				ut = s.n(pt);
			var ht = c.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return c.a.createElement("div", {
						className: ut.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				bt = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				gt = s.n(bt);
			var Ct = c.a.memo(e => c.a.createElement("div", {
					className: gt.a.gradientHighlightContainer,
					role: "presentation"
				})),
				xt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ft = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ot = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				vt = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				kt = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				yt = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				jt = s("./src/reddit/components/ModModeReports/index.tsx"),
				It = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Et = s("./src/reddit/components/RichTextJson/index.tsx"),
				_t = s("./src/reddit/components/UserIcon/index.tsx"),
				Pt = s("./src/reddit/components/UserIcon/constants.ts"),
				wt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				St = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Lt = s("./src/reddit/constants/componentTestIds.ts"),
				Tt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Nt = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Mt = s("./node_modules/raf/index.js"),
				Rt = s.n(Mt);

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Bt = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Ft = c.a.createContext(!1);
			class Dt extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Rt()(this.setVisible)
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
					} = this.state, n = {
						...Bt,
						...t
					};
					return c.a.createElement(Nt.a, At({}, n, {
						onChange: this.handleIntersectionChange
					}), c.a.createElement("div", null, c.a.createElement(Ft.Provider, {
						value: s
					}, e)))
				}
			}
			var Vt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Ut = s("./src/reddit/controls/InternalLink/index.tsx"),
				Wt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Ht = s("./src/reddit/helpers/flair.ts"),
				qt = s("./src/reddit/models/Subreddit/index.ts"),
				Kt = s("./src/reddit/models/User/index.ts"),
				Gt = s("./src/reddit/models/Vote/index.ts"),
				Yt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				zt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Qt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Jt = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				Xt = s("./src/reddit/selectors/poll/index.ts"),
				Zt = s("./src/reddit/selectors/userPrefs.ts"),
				$t = s("./src/reddit/selectors/moderatingComments.ts"),
				es = s("./src/reddit/components/Comments/Comment/index.m.less"),
				ts = s.n(es),
				ss = s("./src/config.ts"),
				ns = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				os = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function rs() {
				return (rs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const is = h.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return c.a.createElement("button", X({}, s, {
						className: Object(p.a)(t, J.a.expandButton)
					}), c.a.createElement(z, {
						className: J.a.expandIcon
					}))
				}), "ExpandButton", ts.a),
				as = h.a.wrapped(mt, "FlatList", ts.a),
				ds = h.a.wrapped(Vt.b, "ErrorText", ts.a),
				cs = h.a.wrapped(Ot.a, "HorizontalVotes", ts.a),
				ls = h.a.div("ActionBar", ts.a),
				ms = h.a.wrapped(xt.a, "TopMeta", ts.a),
				ps = h.a.div("CommentContentWrapper", ts.a),
				us = h.a.wrapped(vt.b, "AuthorHovercard", ts.a),
				hs = Object(Tt.u)(),
				bs = Object(l.b)(() => Object(m.c)({
					comment: (e, t) => Object(R.b)(e, t),
					currentProfileModPermissions: Tt.h,
					depth: (e, t) => Object(M.j)(e, t),
					collapsed: $t.b,
					collapsedBecauseCrowdControl: $t.a,
					currentUser: D.k,
					flair: M.e,
					focused: M.t,
					highlightAnimationDisabled: Zt.c,
					isEditing: M.z,
					isLoggedIn: D.J,
					isPendingDeletion: M.C,
					isPresenceConsumptionExpEnabled: Qt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(R.b)(e, t);
						return s ? Object(B.m)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Xt.f,
					modModeEnabled: Tt.T,
					errorMsgs: M.G,
					replyFormOpen: M.J,
					subreddit: Tt.r,
					subredditType: M.L,
					allowNFTs: ns.a,
					hasSupporterRing: Jt.a,
					isOnlineConsumptionLoadTest: Qt.a,
					isOnlineUserPref: D.O,
					userIsBanned: (e, t) => {
						const s = Object(R.b)(e, t);
						return !!s && Object(be.cb)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: zt.b
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: n,
					trackCommentClick: o
				}) => ({
					onCollapseClick: () => e(Object(C.o)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: n
					})),
					onIgnoreReports: () => e(Object(K.g)(t)),
					onVoteClick: s => {
						const [n, r] = s === Gt.a.upvoted ? [Object(C.q)(t), "upvote_comment"] : [Object(C.j)(t), "downvote_comment"];
						o(r, t)(), e(n)
					}
				})),
				gs = Object(H.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Cs = e => c.a.createElement("div", e, e.children),
				xs = e => c.a.createElement(c.a.Fragment, null, e.children),
				fs = hs(bs(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: o,
						collapsed: r,
						collapsedBecauseCrowdControl: i,
						currentProfileModPermissions: a,
						currentUser: l,
						depth: m,
						errorMsgs: u,
						flair: h,
						focused: b,
						hasAwardGradient: g,
						highlightAnimationDisabled: C,
						highlightTreatment: x,
						index: f,
						isActive: O,
						isAvatarsInCommentsEnabled: v,
						isEditing: k,
						isFirstInList: y,
						isHighlighted: j,
						isLoggedIn: I,
						isOnlineUserPref: E,
						isPendingDeletion: P,
						isPresenceConsumptionExpEnabled: w,
						moderatorPermissions: S,
						modModeEnabled: L,
						onCollapseClick: T,
						onIgnoreReports: N,
						onLineMouseOver: M,
						onVoteClick: R,
						prediction: A,
						postId: B,
						replyFormOpen: F,
						subreddit: D,
						trackCommentClick: H,
						renderedInOverlay: K,
						subredditType: Y,
						onPresenceIndicatorInViewport: z,
						allowNFTs: Q,
						hasSupporterRing: J,
						isOnlineConsumptionLoadTest: X,
						userIsBanned: Z,
						isBlockingInterstitialEnabled: $,
						showBlockingInterstitial: ee
					} = e, te = n.isDeleted, se = !k && !te && !!u && u.length > 0, ne = Object(W.a)(U.c.edit, n.id), oe = Object(W.a)(U.c.replyToComment, n.id), re = Object(de.a)(S), ie = Object(yt.d)(n), ae = Object(Ee.c)(n), ce = n.authorIsContractor && Y === qt.f.EmployeesOnly, me = n.isLocked, pe = re && L, ue = !k && !te && (I || v), he = !!l && Object(Kt.e)(l) === n.author, [be, ge] = Object(d.useState)(null), [Ce, xe] = Object(d.useState)(null), fe = Object(le.f)(n) || Object(le.g)(n) ? Cs : Ut.a, Oe = Object(le.f)(n) ? xs : us;
					Object(d.useEffect)(() => {
						if (!k && !te && (g && ge(c.a.createElement(Ct, null)), null !== x)) {
							if (x.glowHexColor) {
								const e = x.glowHexColor;
								ge(c.a.createElement(ht, {
									hexColor: e
								}))
							}
							if (x.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = x.effectHighlight;
								xe(c.a.createElement(_, {
									prefersReducedAnimation: C,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [k, te, g, C, x]);
					const ve = Object(d.useContext)(Ft);
					$ && ve && f >= zt.a - 1 && ee();
					const ke = !te && !Object(le.f)(n) && (!Z || Z && he) && !Object(le.g)(n) && I,
						ye = Object(d.useCallback)(() => {
							ke && w && !he && z && z(n.id)
						}, [n.id, z, ke, w, he]),
						je = Object(St.a)(n),
						Ie = !!Q && Object(os.b)(n.profileImage);
					return c.a.createElement("div", {
						key: `comment-${n.id}`,
						className: Object(p.a)(`Comment ${n.id}`, ts.a.CommentWrapper, {
							[ts.a.highlightComment]: j,
							[ts.a.deleted]: te,
							[ts.a.focused]: b,
							[ts.a.redesign]: v,
							[ts.a.topLevel]: !m
						})
					}, be, Ce, !k && !te && y && c.a.createElement("div", {
						className: ts.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${ss.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), c.a.createElement(is, {
						className: Object(p.a)(n.id, {
							[ts.a.hidden]: !r,
							[ts.a.visible]: r
						}),
						onClick: () => {
							s(), T(), H("collapse", n.id)()
						},
						onMouseOver: () => M(n.id),
						onMouseOut: s
					}), c.a.createElement(Oe, {
						alwaysShowChildren: !0,
						hoverDivClassName: ts.a.AuthorHoverDiv,
						postOrComment: n,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: K ? It.c.Lightbox : void 0,
						collapsed: r,
						isCommentAuthorBlocked: Object(le.g)(n)
					}, c.a.createElement(fe, {
						className: ts.a.UserIconContainer,
						to: `/user/${n.author}/`
					}, ve ? c.a.createElement(c.a.Fragment, null, J && c.a.createElement("div", {
						className: ts.a.supporterRing
					}), c.a.createElement(_t.a, {
						isNft: Ie,
						className: Object(p.a)(ts.a.UserIcon, {
							[ts.a.UserIconNft]: Ie
						}),
						iconUrl: n.profileImage,
						isNSFW: n.profileOver18 || !1,
						nsfwIconUrl: Pt.a,
						userName: n.author,
						isHighlighted: j,
						shouldShowPresenceIndicator: ke && w,
						onPresenceIndicatorInViewport: ye,
						isCommentAuthorBlocked: Object(le.g)(n),
						collapsed: r,
						shouldUseOnlineOverride: he,
						isOnlineOverrideValue: E,
						isOnlineStatusLoadTest: ke && X,
						authorId: n.authorId
					})) : c.a.createElement("div", {
						className: ts.a.UserIcon
					}))), c.a.createElement(ps, {
						className: Object(p.a)({
							[ts.a.isActive]: O,
							[ts.a.isCollapsed]: r,
							[ts.a.isLocked]: me && pe,
							[ts.a.isPendingDeletion]: P,
							[ts.a.isRemoved]: !!n.bannedBy && pe
						})
					}, c.a.createElement(Wt.a, null, V.fbt._("level {depth}", [V.fbt._param("depth", m + 1)], {
						hk: "2XnyAV"
					})), c.a.createElement(ms, {
						userHasNft: Ie,
						childrenInfo: t,
						className: Object(p.a)({
							[ts.a.collapsed]: r,
							[ts.a.noFlair]: Object(Ht.o)(h || null)
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: i,
						comment: n,
						commentsPageKey: o,
						flair: h,
						isPostComment: !0,
						renderedInOverlay: K,
						renderContractorBadge: ce
					}), !r && c.a.createElement(d.Fragment, null, k && c.a.createElement(G.a, {
						className: Object(p.a)(ts.a.EditCommentForm, ts.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: U.c.edit,
						draftKey: ne,
						postId: B,
						rtJson: Object(St.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(q.i)({
							id: n.id,
							commentsPageKey: o,
							depth: m,
							draftKey: ne,
							formData: e
						}),
						submitButtonText: V.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !k && !te && c.a.createElement("div", {
						"data-test-id": Lt.d,
						className: ts.a.CommentBody
					}, A ? c.a.createElement(ft.a, {
						comment: n,
						prediction: A
					}) : c.a.createElement(Et.a, {
						content: je,
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: gs(e)
					}), c.a.createElement(Yt.b, {
						content: je
					})), L && re && ie && c.a.createElement(kt.a, {
						thing: n
					}), L && re && ae && c.a.createElement(jt.a, {
						onIgnoreReports: N,
						reportable: n
					}), ue && c.a.createElement(ls, null, v && c.a.createElement(cs, {
						downvoteButtonClassName: ts.a.voteButton,
						downvoteClassName: ts.a.upDownVote,
						model: n,
						onVoteClick: R,
						scoreClassName: ts.a.score,
						upvoteButtonClassName: ts.a.voteButton,
						upvoteClassName: ts.a.upDownVote
					}), c.a.createElement(as, {
						comment: n,
						commentsPageKey: o,
						depth: m,
						isAvatarsInCommentsEnabled: v,
						collapsedBecauseCrowdControl: i,
						modModeEnabled: L,
						moderatorPermissions: a || S,
						renderedInOverlay: K,
						isCommentFocused: b,
						subreddit: D,
						trackCommentClick: H
					})), se && u.map(e => c.a.createElement(ds, {
						key: e
					}, e)), F && c.a.createElement(G.a, {
						className: Object(p.a)(ts.a.EditCommentForm, ts.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: U.c.replyToComment,
						draftKey: oe,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						postId: B,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(q.s)({
							commentsPageKey: o,
							draftKey: oe,
							parentCommentDepth: m,
							parentCommentId: n.id,
							formData: t,
							editorMode: s
						}) : Object(q.l)({
							commentsPageKey: o,
							draftKey: oe,
							parentCommentDepth: m,
							parentCommentId: n.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: V.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var Os = e => c.a.createElement(wt.a.Consumer, null, t => c.a.createElement(fs, rs({}, e, {
					trackCommentClick: t
				}))),
				vs = s("./src/lib/scroll/index.ts"),
				ks = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				ys = s("./src/reddit/contexts/InsideOverlay.tsx"),
				js = s("./src/reddit/helpers/path/index.ts"),
				Is = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Es = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				_s = s.n(Es);
			const {
				fbt: Ps
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ws = h.a.wrapped(Is.a, "ArrowRight", _s.a), Ss = h.a.wrapped(ks.a, "LinkOrOverlayLink", _s.a), Ls = h.a.span("HoverSpan", _s.a), Ts = Object(m.c)({
				permalink: (e, t) => Object(M.m)(e, {
					commentId: Object(M.r)(e, t).parentId
				})
			});
			var Ns = Object(l.b)(Ts)(Object(ys.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => c.a.createElement("div", {
					className: Object(p.a)(_s.a.Wrapper, {
						[_s.a.isActive]: e
					})
				}, c.a.createElement(Ss, {
					isOverlay: !!t,
					to: Object(js.b)(s),
					onClick: vs.b
				}, c.a.createElement(Ls, null, Ps._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", c.a.createElement(ws, null))))),
				Ms = s("./src/lib/makeCommentPermalink/index.ts"),
				Rs = s("./src/reddit/actions/login.ts"),
				As = s("./src/reddit/constants/experiments.ts"),
				Bs = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Fs = s("./src/reddit/helpers/trackers/moreReplies.ts"),
				Ds = s("./src/reddit/hooks/useTracking.ts"),
				Vs = s("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				Us = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Ws = s.n(Us);
			const {
				fbt: Hs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), qs = h.a.div("MoreCommentsItemWrapper", Ws.a), Ks = h.a.p("MoreComments", Ws.a), Gs = h.a.wrapped(Ks, "MoreCommentsInteractive", Ws.a), Ys = Object(m.c)({
				isMoreRepliesSignupEnabled: Vs.a,
				moreCommentsItem: M.D,
				moreCommentsPending: M.E,
				moreRepliesSignupVariant: Vs.b
			});
			var zs = Object(l.b)(Ys, (e, t) => ({
					moreCommentsClicked: () => e(Object(C.l)(t.commentsPageKey, t.moreCommentsId)),
					openRegisterModal: () => {
						const {
							parentId: s,
							postId: n,
							postPermalink: o
						} = t;
						e((e, t) => {
							const r = t();
							e(Object(Rs.j)());
							const i = r.platform.currentPage,
								a = Object(Tt.S)(r, i),
								d = a ? Object(Ms.a)(a, n, s) : o;
							e(Object(re.k)({
								actionSource: re.a.CommentMoreReplies,
								redirectUrl: d
							}))
						})
					}
				}))(e => {
					const {
						isActive: t,
						isMoreRepliesSignupEnabled: s,
						moreCommentsClicked: n,
						moreCommentsItem: o,
						moreCommentsPending: r,
						moreRepliesSignupVariant: i,
						openRegisterModal: a
					} = e, d = Object(Ds.a)(), l = e => {
						e.preventDefault(), e.stopPropagation(), d(Object(Fs.c)()), a()
					};
					return c.a.createElement(qs, null, r ? c.a.createElement(Ks, null, Hs._("loading...", null, {
						hk: "47z89"
					})) : c.a.createElement(wt.a.Consumer, null, e => c.a.createElement(Gs, {
						className: Object(p.a)({
							[Ws.a.isActive]: t
						}),
						onClick: e => ((e, t) => {
							s ? (d(Object(Fs.a)()), i === As.Id.ThrottledDaily ? (Bs.a.throttleFeature(As.Jd.Daily), l(e)) : i === As.Id.ThrottledWeekly ? (Bs.a.throttleFeature(As.Jd.Weekly), l(e)) : l(e)) : n()
						})(e)
					}, Hs._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [Hs._plural(null == o ? void 0 : o.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				Qs = s("./node_modules/lodash/times.js"),
				Js = s.n(Qs),
				Xs = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Zs = s.n(Xs);
			const $s = h.a.wrapped(e => c.a.createElement("div", e, c.a.createElement("i", {
					className: O.m
				})), "Line", Zs.a),
				en = h.a.div("LineContainer", Zs.a),
				tn = h.a.div("ShortLineContainer", Zs.a);
			var sn = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						onLineClick: o,
						onLineMouseOver: r,
						onLineMouseOut: i,
						onShortLineClick: a,
						parentNodeIds: d,
						type: l
					} = e;
					return c.a.createElement(en, null, Js()(s + 1, e => e === s ? l !== x.a.Comment || t ? null : c.a.createElement(tn, {
						key: d[e]
					}, c.a.createElement($s, {
						className: Object(p.a)(d[e], {
							[Zs.a.hasGlowBorder]: !!n,
							[Zs.a.topLevel]: 0 === s
						}),
						onClick: a,
						onMouseOver: () => r(d[e]),
						onMouseOut: () => i(d[e])
					})) : c.a.createElement($s, {
						className: d[e],
						key: d[e],
						onClick: o(e),
						onMouseOver: () => r(d[e]),
						onMouseOut: () => i(d[e])
					})))
				},
				nn = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				on = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				rn = s.n(on);
			const an = h.a.div("CommentListNodeWrapper", rn.a),
				dn = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(O.f)
				},
				cn = () => {
					const e = document.querySelectorAll(`.${O.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(O.f)
				};
			var ln = Object(l.b)(() => Object(m.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object($t.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(M.l)(e, t),
				depth: (e, t) => Object(M.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const n = Object(M.l)(e, {
						commentLink: t
					});
					if (n && t.type === x.a.Comment) {
						s = S(n.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: nn.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(M.l)(e, {
						commentLink: t
					});
					return !(t.type !== x.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(A.a)(e, t);
						return s && s.coinPrice >= v.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(M.p)(e);
					if (s === N.a.None) return !1;
					if (t.type !== x.a.Comment) return !1;
					const n = t.id,
						o = Object(R.b)(e, {
							commentId: n
						});
					if (!o) return !1;
					const r = Object(D.s)(e),
						i = !!Object(B.l)(e, {
							postId: o.postId
						}),
						a = Object(F.H)(e, {
							postId: o.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === N.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || r) && o.created > d
				},
				postPermalink: F.G
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: n
			}) => ({
				onLineClick: o => () => {
					e(Object(C.d)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: o,
						scrollToAndRemeasure: n
					}))
				},
				onShortLineClick: () => e(Object(C.o)({
					commentId: t.id,
					commentsPageKey: s,
					scrollToAndRemeasure: n
				}))
			}))(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					highlightTreatment: a,
					index: d,
					isActive: l,
					isAvatarsInCommentsEnabled: m,
					isAwarded: u,
					isFirstInList: h,
					isHidden: b,
					isHighlighted: g,
					onLineClick: C,
					onPresenceIndicatorInViewport: O,
					onShortLineClick: v,
					parentNodeIds: k,
					postId: y,
					postPermalink: j,
					renderedInOverlay: I,
					scrollToAndRemeasure: E,
					showBlockingInterstitial: _
				} = e, P = !!u, w = !(!a || !a.glowHexColor), S = w && i > 0, L = w, T = c.a.createElement(an, {
					className: Object(p.a)(s, {
						[rn.a.isHidden]: b,
						[rn.a.glowBorderTopPadding]: S,
						[rn.a.glowBorderBottomPadding]: L
					}),
					id: o.id,
					style: {
						paddingLeft: i * (f.w + f.v) + (o.type === x.a.Comment ? f.w : 0)
					},
					tabIndex: -1
				}, c.a.createElement(sn, {
					collapsed: n,
					depth: i,
					hasGlowBorder: S,
					onLineClick: C,
					onLineMouseOver: dn,
					onLineMouseOut: cn,
					onShortLineClick: v,
					type: o.type,
					parentNodeIds: k
				}), mn({
					childrenInfo: t,
					clearHovered: cn,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					onLineMouseOver: dn,
					hasAwardGradient: P,
					highlightTreatment: a,
					index: d,
					isActive: l,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: h,
					isHighlighted: g,
					parentNodeIds: k,
					postId: y,
					renderedInOverlay: I,
					scrollToAndRemeasure: E,
					onPresenceIndicatorInViewport: O,
					postPermalink: j,
					showBlockingInterstitial: _
				}));
				return m && o.type === x.a.Comment ? c.a.createElement(Dt, null, T) : T
			});
			const mn = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: n,
				depth: o,
				hasAwardGradient: r,
				highlightTreatment: i,
				index: a,
				isActive: d,
				isAvatarsInCommentsEnabled: l,
				isFirstInList: m,
				isHighlighted: p,
				onLineMouseOver: u,
				parentNodeIds: h,
				postId: b,
				renderedInOverlay: g,
				scrollToAndRemeasure: C,
				onPresenceIndicatorInViewport: f,
				postPermalink: O,
				showBlockingInterstitial: v
			}) => {
				switch (s.type) {
					case x.a.Comment:
						return c.a.createElement(Os, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: n,
							hasAwardGradient: r,
							highlightTreatment: i,
							index: a,
							isActive: d,
							isAvatarsInCommentsEnabled: l,
							isFirstInList: m,
							isHighlighted: p,
							onLineMouseOver: u,
							postId: b,
							renderedInOverlay: g,
							scrollToAndRemeasure: C,
							onPresenceIndicatorInViewport: f,
							showBlockingInterstitial: v
						});
					case x.a.MoreComments:
						return c.a.createElement(zs, {
							commentsPageKey: n,
							isActive: d,
							moreCommentsId: s.id,
							parentId: h[o - 1],
							postId: b,
							postPermalink: O
						});
					case x.a.ContinueThread:
						return c.a.createElement(Ns, {
							id: s.id,
							isActive: d
						})
				}
			};
			var pn = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				un = s("./src/reddit/components/Comments/States/index.tsx"),
				hn = s("./src/reddit/components/Scroller/Simple.tsx"),
				bn = s("./src/reddit/constants/elementIds.ts"),
				gn = s("./src/reddit/featureFlags/index.ts"),
				Cn = s("./src/reddit/helpers/commentList/index.ts"),
				xn = s("./src/reddit/helpers/trackers/comment.ts"),
				fn = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				On = s("./src/telemetry/index.ts"),
				vn = s("./src/lib/LRUCache/index.ts"),
				kn = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				yn = s("./src/reddit/selectors/telemetry.ts");
			const jn = e => t => ({
				...Object(yn.o)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(yn.d)(t, {
					reason: String(e)
				})
			});
			var In = s("./src/reddit/components/Comments/index.m.less"),
				En = s.n(In);
			const _n = f.f + 10,
				Pn = 65,
				wn = h.a.wrapped(hn.b, "Scroller", En.a),
				Sn = Object(m.c)({
					allCollapsed: M.a,
					commentLinks: M.k,
					commentThreadLinkSet: M.o,
					measureScrollFPS: gn.d.measureScrollFPS,
					moreComments: M.b,
					postPermalink: F.G
				}),
				Ln = Object(l.b)(Sn, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(b.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(C.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(C.h)(t, s)),
					showModalOnCommentsScroll: t => e(Object(g.Z)(Object(js.b)(t)))
				})),
				Tn = new vn.a(500),
				Nn = new vn.a(500),
				Mn = (e, t) => {
					const s = `entered-${e}`;
					let n = Tn.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, Tn.set(s, n)), n
				},
				Rn = (e, t) => {
					const s = `left-${e}`;
					let n = Nn.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, Nn.set(s, n)), n
				};
			class An extends c.a.Component {
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
						}), this.props.sendEvent(Object(xn.b)(e)))
					}, this.showBlockingInterstitial = r()(() => {
						this.state.isBlockingModalShowed || (this.setState({
							isBlockingModalShowed: !0
						}), this.props.showModalOnCommentsScroll(this.props.postPermalink))
					}, u.K, {
						leading: !0,
						maxWait: 1e3
					}), this.parentNodeIdsMap = {}, pn.c(), this.childrenInfoMap = {}, this.state = {
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
					this.timerId && On.c.cancel(this.timerId), e.length && (this.timerId = On.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(On.b)(u.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: On.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < zt.a && this.props.sendEvent(jn(this.props.commentLinks.length))
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: o,
						moreComments: r
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !a()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, o, r)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !a()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && On.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = On.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(On.b)(u.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: On.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && On.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					pn.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (pn.a(c.id), i += Object(Cn.d)(c, n), c.type === x.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
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
					} = this.props, a = Mn(e.id, n), d = Rn(e.id, o);
					return {
						estHeight: pn.b(e.id) ? 0 : Pn,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: d,
						render: ({
							placeholderRecommended: n,
							height: o,
							width: a,
							scrollToAndRemeasure: d
						}) => n ? c.a.createElement("div", {
							style: {
								height: o,
								backgroundColor: "#fff"
							}
						}) : c.a.createElement(ln, {
							key: `comment-list-node-${e.id}`,
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							index: t,
							isFirstInList: 0 === t,
							isHidden: pn.b(e.id),
							postId: r,
							scrollToAndRemeasure: d,
							renderedInOverlay: !!i,
							parentNodeIds: this.getParentNodeIds(e),
							onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport,
							showBlockingInterstitial: this.showBlockingInterstitial
						})
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
					const d = t.map((e, t) => this.getScrollChild(e, t));
					return c.a.createElement(wn, {
						className: Object(p.a)(En.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(bn.d) : null,
						onScroll: i,
						onAllChildrenRendered: o,
						preventScrollOnMount: !0,
						scrollToChildPadding: _n,
						trackingName: a
					}, d)
				}
				renderEmptyState() {
					return this.props.commentId ? c.a.createElement(un.g, {
						link: this.props.postPermalink
					}) : c.a.createElement(un.c, null)
				}
			}
			t.a = Ln(Object(Le.c)(Object(kn.a)(Object(fn.c)(An))))
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
				importAsync: () => s.e("ChatPost").then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null))
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
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				C = s("./src/reddit/components/ModProgressModule/index.tsx"),
				x = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				f = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				O = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				y = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				j = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				I = s("./src/reddit/constants/experiments.ts"),
				E = s("./src/reddit/featureFlags/component.tsx"),
				_ = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				P = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				S = s("./src/reddit/selectors/experiments/postSeo.ts"),
				L = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				R = s.n(M);
			const A = Object(E.a)("spPoints", h.a),
				B = Object(E.a)("spLeaderboard", b.a),
				F = Object(n.a)({
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
					isInNewModuleNCPV3Experiment: (e, {
						post: t,
						isOverlay: s
					}) => !Object(P.q)(t) && !s && Object(w.a)(e) === I.Wd.NewModule,
					isLoggedIn: N.J,
					postSEOV2IdCardVariant: S.h,
					shouldShowReredditPromo: L.a,
					widgets: Object(p.a)(T.r)
				}),
				V = Object(d.b)(D);
			class U extends a.a.Component {
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
					return a.a.createElement(v.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(f.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: _.a.BOTTOM,
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
						widgets: h
					} = this.props;
					let b = 0;
					const v = Object(S.c)(i) || Object(S.f)(i),
						I = a.a.createElement(f.a, {
							postId: r.id,
							isOverlay: o,
							listingName: p,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: b++,
							position: _.a.FIRST,
							refreshKey: r.id,
							sizes: m.i,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(R.a.outerWrapper, e)
					}, s && a.a.createElement(C.default, {
						subredditId: c,
						subredditName: p
					}), Object(P.q)(r) ? a.a.createElement(F, {
						profileName: p,
						isOverlay: o || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: p,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: v
					}), a.a.createElement(u.a, {
						cardClassName: R.a.card,
						subredditId: c
					}), a.a.createElement(A, {
						className: R.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(B, {
						className: R.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(x.a, {
						subredditId: c
					}), I, n && h.map((e, t) => a.a.createElement(O.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(j.a, {
						subredditName: p,
						widget: e
					}))), r.isSponsored && a.a.createElement(O.a, null, a.a.createElement(k.a, null)), d && a.a.createElement(y.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), this.renderFooter(b++))
				}
			}
			t.a = V(U)
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
			class h extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						innerRef: i,
						shouldTruncateComments: l,
						numberOfComments: h,
						onClick: b
					} = this.props, g = l && !e, C = l ? m.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: b,
						ref: i
					}, o.a.createElement("div", {
						className: Object(r.a)(m.a.ContentWrapper, s, C),
						style: {
							"--commentswrapper-gradient-color": Object(c.a)(this.props).body,
							maxHeight: l ? u : "unset"
						}
					}, t), g && o.a.createElement(d.l, {
						className: m.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, p._("View Entire Discussion ({number of comments} Comments)", [p._param("number of comments", Object(a.b)(h))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(i.a)(h)
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
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
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
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(r);
			const a = n.a.wrapped(o.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: o,
						tooltipType: r
					} = e;
					let i = o;
					return s && (i = `${i}--${s}`), r && (i = `${i}--${r}`), t && (i = `${i}--${t}`), n && (i = `${i}--${n}`), i
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
				return b
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
				h = e => Object(c.h)(e) ? i.d.profile : i.d.subreddit;

			function b({
				subredditOrProfile: e
			}) {
				const t = e ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", h(e) + e.name)], {
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
				const o = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || n.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(u.a, {
					className: b.a.container,
					color: c.a.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", r.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", o ? r.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: o
					}) : i, " ", r.a.createElement(l.a, {
						className: b.a.link,
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
				h = s("./src/reddit/components/ModWelcomeTooltip/async.tsx"),
				b = s("./src/reddit/components/NewCommunityProgress/icons/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/constants/modals.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/ImageInput/index.tsx"),
				v = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				k = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				I = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				E = s("./src/reddit/models/ApiRequestState/index.ts"),
				_ = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				P = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/components/ModProgressModule/index.m.less"),
				L = s.n(S);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = ({
				id: e,
				title: t,
				iconIdentifier: s
			}, n, r) => {
				const i = b.b[s];
				return o.a.createElement("div", {
					className: Object(d.a)(L.a.Card, {
						[L.a.unclickable]: n
					}),
					key: e,
					onClick: e => {
						e.stopPropagation(), !n && r()
					}
				}, o.a.createElement("span", {
					className: L.a.ContentContainer
				}, o.a.createElement("span", {
					className: Object(d.a)(L.a.IconContainer, {
						[L.a.completed]: n
					})
				}, n ? o.a.createElement(y.a, {
					name: "checkmark",
					className: L.a.CheckIcon
				}) : o.a.createElement(y.a, {
					name: i,
					className: L.a.Icon
				})), o.a.createElement("span", {
					className: L.a.CardTitle
				}, t)))
			}, M = Object(a.c)({
				isTooltipOpen: e => Object(w.a)(e) === u.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: P.c
			});
			class R extends o.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(E.b)();
						this.setState({
							apiRequestId: t
						}), this.props.uploadCommunityIcon(e, t)
					}, this.renderImageUploader = () => o.a.createElement(O.a, {
						className: L.a.imageUploader,
						inputRef: this.setInputRef,
						key: this.state.apiRequestId || void 0,
						multiple: !1,
						onChange: this.onChangeIconFileInput
					}), this.onOpenIconUploadScreen = () => this.inputRef && this.inputRef.click(), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(k.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(k.b)(e, t))
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
					} = this.props, b = l && l[m];
					if (!b) return o.a.createElement(C.a, {
						className: L.a.ThemedWidget,
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: L.a.headerButtonsContainer
						}, o.a.createElement(I.a, {
							className: L.a.ChevronIcon
						})),
						title: o.a.createElement("div", {
							className: L.a.ModuleTitle
						}, o.a.createElement(j.a, {
							className: L.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: L.a.titleClassName,
						onClick: c
					});
					const g = (null === (e = null == b ? void 0 : b.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == b ? void 0 : b.progress) || void 0 === t ? void 0 : t.total),
						x = 0 === (null === (s = b.progress) || void 0 === s ? void 0 : s.done);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(C.a, {
						className: Object(d.a)(L.a.ThemedWidget, {
							[L.a.completed]: g,
							[L.a.tooltipIsActive]: i
						}),
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: L.a.headerButtonsContainer
						}, o.a.createElement(I.a, {
							className: L.a.ChevronIcon
						})),
						id: u.MOD_WELCOME_TOOLTIP_ID,
						onHeaderClick: c,
						title: o.a.createElement("div", {
							className: L.a.ModuleTitle
						}, o.a.createElement(j.a, {
							className: L.a.ModSettingsIcon
						}), T._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: L.a.titleClassName
					}, o.a.createElement("div", {
						className: L.a.ProgressContainer
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: L.a.Title
					}, g ? T._("Well done, you're set up!", null, {
						hk: "3sJd9H"
					}) : T._("Set up r/{subredditName}", [T._param("subredditName", p)], {
						hk: "3SHelG"
					})), o.a.createElement("div", {
						className: L.a.ProgressDescription
					}, o.a.createElement("span", {
						className: L.a.progressCount
					}, T._("{cardsComplete} of {totalCards}", [T._param("cardsComplete", null === (n = b.progress) || void 0 === n ? void 0 : n.done), T._param("totalCards", null === (r = b.progress) || void 0 === r ? void 0 : r.total)], {
						hk: "1gMzOE"
					})), " ", o.a.createElement("span", {
						className: Object(d.a)(L.a.progressText, {
							[L.a.darkFont]: x
						})
					}, T._("tasks completed", null, {
						hk: "DxeNq"
					}))), x && o.a.createElement("div", {
						className: L.a.Description
					}, T._("Get your community off the ground with these tasks", null, {
						hk: "3n0h53"
					})))), !g && o.a.createElement("div", {
						className: L.a.CardContainer
					}, b.cards.map(e => {
						const t = e.status === _.a.COMPLETED;
						return N(e, t, () => this.onClickCard(b, e.id))
					})), g && o.a.createElement(f.t, {
						className: L.a.CloseButton,
						onClick: a,
						priority: f.c.Tertiary
					}, T._("Close", null, {
						hk: "3UZAZk"
					})), o.a.createElement(h.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const A = Object(r.b)(M, (e, t) => ({
				onCompleteModule: () => e(Object(v.c)(t.subredditId, _.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(x.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(p.h)({
					tooltipId: u.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, n) => {
					e(Object(l.a)(t.subredditId, s, n)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = A(Object(g.c)(R))
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
				h = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/constants/elementIds.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/constants/page.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/helpers/postCollection.ts"),
				k = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/screenview.ts"),
				I = s("./src/reddit/selectors/chatPost.ts"),
				E = s("./src/reddit/selectors/commentsListTruncated.ts"),
				_ = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				P = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				w = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				S = s("./src/reddit/selectors/i18n/index.ts"),
				L = s("./src/reddit/selectors/telemetry.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				N = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/constants/listings.ts"),
				R = s("./src/reddit/controls/InternalLink/index.tsx"),
				A = s("./src/reddit/helpers/name/index.ts"),
				B = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				F = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				D = s.n(F);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var U = Object(m.a)(e => {
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
					return o ? (c = M.c[M.b.Popular], d = V._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = n ? V._("See more posts like this in {subredditName}", [V._param("subredditName", Object(A.c)(r.displayText))], {
						hk: "pLxW5"
					}) : V._("Continue browsing in {subredditName}", [V._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(R.a, {
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
					}, d, a.a.createElement(B.a, {
						className: D.a.arrow
					})))
				}),
				W = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				H = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				q = s.n(H);
			const K = Object(c.a)((e, {
					isOverlay: t
				}) => t, E.a, _.b, (e, t, s) => !((!t || s) && e)),
				G = Object(c.a)((e, {
					post: t
				}) => !!t && Object(v.a)(t), (e, {
					awaitAllCommentsRendered: t
				}) => t, T.I, T.J, I.d, K, (e, t, s, n, o, r) => !t && !s && !n && !o && !e && r),
				Y = Object(c.a)((e, {
					post: t
				}) => t, P.c, L.Y, L.jb, (e, t, s, n) => {
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
							shouldShowLinkedPosts: o && !Object(x.if)(t) && !Object(P.a)(t),
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
				z = Object(c.c)({
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: w.a,
					shouldShowListingBelow: G,
					shouldShowNsfwListingBelow: S.b
				}),
				Q = Object(d.b)(z, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.W.HOT,
						subredditName: t
					}))
				}));
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(C.d) : null, this.onViewed = (e, t) => Object(j.f)({
						key: this.listingKey(),
						sort: l.W.TOP,
						timerType: t,
						timerMillis: e,
						timeSort: l.gc.WEEK
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
						t: l.gc.WEEK
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
					if (c && !Object(x.if)(c) && !Object(P.a)(c) && !i) return a.a.createElement("div", {
						className: q.a.smallBanner
					});
					const {
						name: l
					} = o, m = Object(k.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(P.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === x.Sd.DeRecs ? n.fbt._("Popular Posts Near You", null, {
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
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: q.a.postList,
						disablePlaceholder: !0,
						forcedLayout: O.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: i,
						isTruncated: !0,
						listingBelowVariant: d,
						listingKey: this.listingKey(),
						listingName: f.d.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: q.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(U, {
						className: q.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						shouldShowNsfwListingBelow: n,
						subredditOrProfile: o
					}))
				}
			}
			t.a = Q(Object(m.a)(Object(g.c)(J)))
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
				...n
			}) => e ? o.a.createElement(c.a, n) : null)
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
				return I
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
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/selectors/telemetry.ts");
			const x = "nsfw_dialog";
			var f = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const O = `${a.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				v = `${a.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				k = {
					d2x_nsfw_signup_blocking_de_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				y = e => {
					const t = Object(r.d)(),
						s = Object(h.b)();
					return o.a.createElement("div", {
						className: Object(d.a)(m.a.mainCta)
					}, o.a.createElement("img", {
						src: O
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
								...Object(C.o)(e),
								source: "xpromo",
								action: "click",
								noun: x
							}))()), t(Object(u.i)())
						}
					}, (() => p.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), o.a.createElement(g.j, {
						className: m.a.cancel,
						onClick: () => {
							s((() => e => ({
								...Object(C.o)(e),
								source: "xpromo",
								action: "dismiss",
								noun: x
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
					src: v
				}))),
				I = e => {
					const t = Object(h.b)();
					o.a.useEffect(() => {
						t((() => e => ({
							...Object(C.o)(e),
							source: "xpromo",
							action: "view",
							noun: x
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(r.e)(f.b) === b.Wb.Enabled ? k.d2x_nsfw_signup_blocking_de_v1 : k.d2x_nsfw_signup_blocking_non_us_v1;
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
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/helpers/parseUrl.ts");
			const o = ["old", "new", "en", "www", "np", "m"],
				r = ["reddit.com", "reddit.local"].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
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
				return (e.match(new RegExp(n.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(s) {
						return t = function(e, t) {
							const s = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const o = Object(n.a)(t);
							if (!o) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || r).indexOf(o.hostname)) return;
							const i = o.pathname.match(s.pathname);
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
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(n.o)(e),
					media: Object(n.B)(e, t),
					profile: Object(n.R)(e),
					subreddit: Object(n.jb)(e) || Object(n.mb)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.I)(t, e),
					...o(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.I)(t, e),
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
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), o.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
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
				h = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				f = s.n(x);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(r.b)(() => Object(i.c)({
					showFPR: C.H,
					showSuspended: C.Q,
					showOffline: e => e.connection.showBanner
				})),
				k = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...n
				}) => {
					const r = Object(g.a)({
						theme: s,
						...n
					});
					return o.a.createElement("div", O({
						className: Object(a.a)(f.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${u.h}px` : `${u.i}px`
						}
					}, n))
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
							className: Object(a.a)(f.a.fakeOverlayLightboxHeaderWrapper, {
								[f.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(f.a, t))
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(k, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(h.a, e))
				}
			}
			t.a = v(y)
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
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
				post: n,
				postId: r,
				sendEvent: i
			}) => {
				var c;
				if (!n) return null;
				const p = null !== (c = n.numDuplicates) && void 0 !== c ? c : 0,
					u = void 0 !== e,
					g = n.permalink,
					C = p > 0,
					x = Object(l.b)(Object(a.e)(g));
				return u || C ? o.a.createElement("div", {
					className: h.a.CommentsNavigationPane
				}, u && o.a.createElement("div", null, o.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(g)
				}, b._("View all comments", null, {
					hk: "3I5IX9"
				})), t && null !== t.parentId && o.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(t.permalink + "?context=8&depth=9")
				}, b._("Show parent comments", null, {
					hk: "AVRCa"
				}))), C && o.a.createElement(d.a, {
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
				return jt
			})), s.d(t, "CommentsPage", (function() {
				return Lt
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
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				O = s("./src/lib/domUtils/index.ts"),
				v = s("./src/lib/fastdom/index.ts"),
				k = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/lib/performanceTimings/index.tsx"),
				E = s("./src/reddit/actions/ads/index.ts"),
				_ = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/pages/comments.ts"),
				M = s("./src/reddit/actions/tooltip.ts"),
				R = s("./src/reddit/actions/upvotePrompt.ts"),
				A = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				B = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				F = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				D = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				V = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				U = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				W = s("./src/reddit/constants/componentSizes.ts"),
				H = s("./src/reddit/constants/elementIds.ts"),
				q = s("./src/reddit/constants/history.ts"),
				K = s("./src/reddit/constants/keycodes.ts"),
				G = s("./src/reddit/constants/posts.ts"),
				Y = s("./src/reddit/constants/screenWidths.ts"),
				z = s("./src/reddit/contexts/ApiContext.tsx"),
				Q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				J = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				X = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				Z = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				$ = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				ee = s("./src/reddit/selectors/upvotePrompt.ts"),
				te = s("./src/reddit/featureFlags/profileCollections.ts"),
				se = s("./src/reddit/contexts/Post/index.tsx"),
				ne = s("./src/reddit/models/Comment/index.ts"),
				oe = s("./src/reddit/models/Post/index.ts"),
				re = s("./src/reddit/models/Subreddit/index.ts"),
				ie = s("./src/reddit/selectors/chatPost.ts"),
				ae = s("./src/reddit/selectors/comments.ts"),
				de = s("./src/reddit/selectors/commentSelector.ts"),
				ce = s("./src/reddit/selectors/commentsListTruncated.ts"),
				le = s("./src/reddit/selectors/creatorStats.ts"),
				me = s("./src/reddit/selectors/discoveryUnit.ts"),
				pe = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ue = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				he = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				be = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				ge = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Ce = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				xe = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				fe = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				Oe = s("./src/reddit/selectors/meta.ts"),
				ve = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ke = s("./src/reddit/selectors/posts.ts"),
				ye = s("./src/reddit/selectors/subreddit.ts"),
				je = s("./src/reddit/selectors/tooltip.ts"),
				Ie = s("./src/reddit/selectors/user.ts"),
				Ee = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				_e = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Pe = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				we = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Se = s("./src/reddit/components/Comments/index.tsx"),
				Le = s("./src/reddit/components/Comments/States/index.tsx"),
				Te = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Ne = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Me = s("./src/reddit/components/CommentSort/index.tsx"),
				Re = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Ae = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Be = s("./src/reddit/components/CreatorStats/loader.tsx"),
				Fe = s("./src/reddit/components/HeaderImage/index.tsx"),
				De = s("./src/reddit/components/Hovercards/helpers.ts"),
				Ve = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ue = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				We = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				He = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				qe = s("./src/reddit/components/JumpToContent/index.tsx"),
				Ke = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Ge = s("./src/reddit/components/PostContent/index.tsx"),
				Ye = s("./src/reddit/components/PostDetailStickyHeader/async.tsx"),
				ze = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Qe = s("./src/reddit/components/SubredditForkingCTA/index.tsx"),
				Je = s("./src/reddit/components/SubredditNav/index.tsx"),
				Xe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ze = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				$e = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				et = s("./src/reddit/helpers/history/index.ts"),
				tt = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				st = s("./src/reddit/helpers/name/index.ts"),
				nt = s("./src/reddit/helpers/postCollection.ts"),
				ot = s("./src/reddit/helpers/resonatePage/index.ts"),
				rt = s("./src/reddit/helpers/trackers/lightbox.ts"),
				it = s("./src/reddit/helpers/trackers/screenview.ts"),
				at = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				dt = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				ct = s("./src/reddit/layout/page/Listing/index.tsx"),
				lt = s("./src/reddit/models/ContentGate.ts"),
				mt = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				pt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				ut = s("./src/reddit/pages/CommentsPage/index.m.less"),
				ht = s.n(ut);

			function bt() {
				return (bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const gt = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				Ct = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				xt = 200,
				ft = 80,
				Ot = 32,
				vt = Object(n.a)({
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
				kt = Object(n.a)({
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
				yt = Object(n.a)({
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
				jt = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(y.a)(e) : s,
				It = e => {
					const {
						state: t
					} = e.location, s = a()(t, q.b.IsOverlay, !1), n = a()(t, q.b.CloseLocation, null), o = a()(t, q.b.ScrollOnLoad, !1);
					o && Object(et.c)(q.b.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(oe.t)(i), l = r && Object(ne.h)(r);
					return m.a.createElement(se.a, {
						postId: c
					}, m.a.createElement(Lt, {
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
				Et = Object(Q.u)(),
				_t = () => Object(h.c)({
					apiError: ae.c,
					apiPending: ae.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(ke.V)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					canShowCrosspostRecommendationsModal: (e, {
						postId: t
					}) => Object(X.a)(e, t),
					canViewCreatorStats: (e, {
						postId: t
					}) => Object(le.a)(e, t),
					comment: de.b,
					communityBannerDiscoveryUnit: me.a,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(Ie.f)(e, t),
					currentUserShowNSFW: Ie.db,
					dismissedSubreddits: pe.a,
					fullyLoaded: ae.u,
					hasModeratorPostPermissions: ve.c,
					headComment: ae.x,
					isActionBarAnimationEnabled: $.b,
					isAvatarsInCommentsEnabled: he.a,
					isBlockedUserBannerEnabled: (e, {
						postId: t
					}) => !!Object(ke.w)(e, {
						postId: t
					}) && Object(ue.a)(e),
					isCountAnimShadowTestEnabled: $.e,
					isCrawler: (e, t) => !!Object(Oe.c)(e),
					isCreatorStatsEnabled: (e, {
						postId: t
					}) => Object(be.a)(e, t),
					isCrosspostRecommendationsExperimentEnabled: X.b,
					isEligibleForCommentTruncation: fe.a,
					isChatPost: ie.d,
					isCommentsListTruncated: ce.a,
					isLoggedIn: Ie.J,
					isNightmodeOn: Ie.W,
					isTooltipOpen: (e, t) => !!Object(je.a)(e),
					origin: Oe.j,
					post: ke.H,
					postSEOV2IdCardVariant: ge.h,
					profileCollectionsEnabled: te.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: n
					}) => Object(ae.s)(e, {
						commentsPageKey: jt({
							postId: t,
							commentId: s,
							commentsPageKey: n
						})
					}),
					shouldOpenPostInNewTab: Ie.cb,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(ye.t)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: ke.V,
					userHovercardIsOpen: (e, t) => Object(je.b)(Object(De.b)({
						itemId: t.postId,
						tooltipIdPrefix: D.a,
						tooltipType: ze.c.StickyPost
					}))(e),
					userPrefs: Ie.tb,
					inResonatePilot: Ce.a,
					isQualifiedForUpvotePrompt: ee.c,
					isTypingIndicatorsExperimentEnabled: xe.c,
					isEligibleForNsfwSignupUpsellTreatment: (e, {
						postId: t
					}) => {
						const s = Object(ke.V)(e, {
							postId: t
						});
						return !(!s || !s.isNSFW) && Object(Z.a)(e)
					},
					isTrueblockPCBlockeeEnabled: ue.b
				}),
				Pt = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(T.g)(F.a)),
					dismissTruncation: t => e(Object(Ee.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(w.a)()),
					setCommentFocus: t => e(_.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(N.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(M.i)()),
					onToggleTooltip: t => e(Object(M.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.i)()),
					openRegisterModal: () => e(Object(L.j)()),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(w.b)()),
					fetchCommentsNativeAd: t => e(Object(E.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(_e.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(R.b)(t, s, n))
					}
				}),
				wt = Object(p.b)(_t, Pt);
			class St extends m.a.Component {
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
						this.scrollY = d, this.state.commentNativeAdId && (!e && void 0 !== n && d >= n && (this.didPassAdScrollThreshold = !0, this.adScrollItemRef && this.adScrollItemRef.pauseContent()), e && void 0 !== n && d < n && (this.didPassAdScrollThreshold = !1, this.adScrollItemRef && this.adScrollItemRef.focusContent())), !t && void 0 !== o && d >= o && (this.didScrollPastPost = !0), t && void 0 !== o && d < o && (this.didScrollPastPost = !1, r && v.a.write(() => {
							i(Object(De.b)({
								itemId: a,
								tooltipIdPrefix: D.a,
								tooltipType: ze.c.StickyPost
							}))
						}))
					}, f.K), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(rt.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(oe.s)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object($e.a)(this.props.subredditOrProfile);
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
					}, ee.b));
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isOverlay: o,
							post: r,
							shouldScrollToComments: i
						}
					} = this;
					if (r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== G.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (o ? (this.scrollContainerEl = document.getElementById(H.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : v.a.write(() => {
							setTimeout(() => {
								Object(O.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(tt.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(oe.t)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), v.a.read(() => {
							this.props.isOverlay || Object(I.d)(I.c.CommentsPage, n)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						f.Lb.includes(e) && Object(ot.a)(e)
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
						const e = this.props.post && Object(nt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? v.a.read(this.handleScroll) : v.a.write(() => {
							e || Object(O.c)(this.scrollContainerEl, 0), v.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && v.a.write(() => {
							setTimeout(() => {
								Object(O.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = W.b + (this.props.isOverlay ? W.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(H.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? Ot : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && v.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(O.c)(n, i) : Object(O.c)(document, i)
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = xt, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = xt)
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
					v.a.read(() => {
						const e = document.getElementById(H.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - ft, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - ft, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), v.a.write(() => {
								Object(O.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => v.a.read(this.handleScroll))
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
					v.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = g.c.end(t);
						n(Object(it.c)(t, s, e, C.TimerType.InApp, r, o))
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
					} = this.props, r = !(!n || !n.isNSFW || t), i = Object(Ze.a)(e, r, o);
					if (!i) return null;
					let a = m.a.createElement(yt, i);
					return s && (a = m.a.createElement(at.a, {
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
						isEligibleForCommentTruncation: p,
						isLoggedIn: u,
						isNightmodeOn: h,
						isOverlay: b,
						post: g,
						postId: C,
						postSEOV2IdCardVariant: O,
						profileCollectionsEnabled: v,
						sendEvent: k,
						sort: y,
						subredditOrProfile: j,
						isEligibleForNsfwSignupUpsellTreatment: I,
						subredditName: E
					} = this.props;
					if ((null == g ? void 0 : g.isNSFW) && E && I) return m.a.createElement(U.a, {
						contentTitle: Object(st.c)(E)
					});
					const _ = Object(ge.f)(O);
					if (!g) {
						if (t) return m.a.createElement(Le.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === f.o ? m.a.createElement(yt, {
							contentGateType: lt.a.PostBlockedForLegalReason
						}) : m.a.createElement(Le.d, {
							postId: C,
							commentId: r,
							apiError: e,
							sort: y
						}) : m.a.createElement(Le.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const P = this.isCommentPermalink(),
						w = g.belongsTo.type === G.a.PROFILE,
						S = Object(nt.a)(g) && (!w || v),
						L = !u,
						T = j && j.isQuarantined,
						N = !p && !this.state.allCommentsRendered && !c,
						M = l && s;
					return gt.input.channel.postID = C, m.a.createElement(Nt, {
						closeLocation: o,
						commentsPageKey: i,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: u,
						isOverlay: b,
						isSwapVariant: _,
						post: g,
						subredditOrProfile: j,
						shouldFitPageToContent: L,
						isCollectionLayout: S
					}, m.a.createElement(Ke.a, {
						postId: C,
						isNightMode: h,
						isOverlay: b,
						commentId: r
					}), !b && m.a.createElement(Ye.a, {
						post: g
					}), T && m.a.createElement(He.a, {
						subredditName: j.name
					}), m.a.createElement(qe.a, null), m.a.createElement("div", {
						className: Object(x.a)(ht.a.PageContentWrapper, {
							[ht.a.LargePageContent]: S,
							[ht.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, S && m.a.createElement(kt, {
						isOverlay: b,
						isNightmodeOn: h,
						postId: C
					}), m.a.createElement(Ct, {
						condition: S,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: ht.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Ge.c, {
						isCommentPermalink: P,
						isOverlay: b,
						postId: C,
						redditStyle: b,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: k,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && !T && this.props.isCreatorStatsEnabled && m.a.createElement(Be.a, {
						post: g,
						subreddit: j
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(A.a, {
						key: `event-post-id-${g.id}`,
						isOverlay: b,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), j && !Object(re.h)(j) && m.a.createElement(V.a, {
						awaitAllCommentsRendered: N,
						contentContainerRef: this.state.layoutRef,
						isOverlay: b,
						post: g,
						subredditOrProfile: j
					}), M && m.a.createElement(B.a, {
						ignoreDefaultFocus: !0,
						onCloseModal: n,
						post: g,
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
						isEligibleForCommentTruncation: h,
						isLoggedIn: g,
						isOverlay: C,
						isTypingIndicatorsExperimentEnabled: f,
						location: O,
						onOtherDiscussions: v,
						openLoginModal: k,
						openRegisterModal: y,
						origin: I,
						post: E,
						postId: _,
						replyComment: w,
						sendEvent: S,
						sort: L,
						subredditAboutInfo: T,
						subredditOrProfile: N,
						isTrueblockPCBlockeeEnabled: M
					} = this.props;
					if (!E) return null;
					const R = this.isCommentPermalink(),
						A = [],
						B = E.isLocked && !s,
						F = !(R || E.isArchived || T && T.userIsBanned || E.authorIsBlocked && l || E.unrepliableReason && M);
					let D = !1;
					if (B) A.push(m.a.createElement(Ue.a, {
						key: "commentThreadBanner",
						subredditOrProfile: N
					}));
					else if (E.isArchived) A.push(m.a.createElement(Ve.a, {
						key: "commentThreadBanner"
					}));
					else if (F && !p && !v)
						if (g) {
							D = f;
							const e = Object(j.a)(b.c.replyToPost, _);
							A.push(m.a.createElement(Pe.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								isOverlay: C,
								isTypingIndicatorsExperimentEnabled: f,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: _,
								submitAction: ({
									validate: t,
									...s
								}, n) => t ? P.t(_, r, e, s, n) : P.n(_, r, e, s, n),
								submitButtonText: o.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else A.push(m.a.createElement(we.a, {
							key: "loggedOutCommentForm",
							location: O,
							openLoginModal: k,
							openRegisterModal: y,
							origin: I
						}));
					if (E.contestMode && A.push(m.a.createElement(We.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), !p && !v && A.push(m.a.createElement(Me.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: C,
							key: "commentSort",
							location: O,
							postId: _,
							sort: L,
							suggestedSort: E.suggestedSort
						}), m.a.createElement(mt.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: C,
							key: "commentNavigation",
							postId: _
						})), A.push(m.a.createElement(Qe.a, {
							postId: _
						})), !t || d || p || v)
						if (!e || d || v)
							if (v) A.push(m.a.createElement(vt, {
								commentSort: L,
								key: "otherDiscussions",
								postId: _,
								isOverlay: C,
								postPermalink: E.permalink
							}));
							else if (p) {
						if (N && N.id) {
							const e = w ? Object(j.a)(b.c.replyToComment, w.id) : Object(j.a)(b.c.replyToPost, _),
								s = jt({
									postId: _,
									commentId: n,
									commentsPageKey: r
								});
							A.push(m.a.createElement(Te.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !i && t,
								key: "commentsChat",
								postId: _,
								renderedInOverlay: C,
								subredditId: N.id
							}, ({
								scrollToBottom: t
							}) => g ? m.a.createElement(Ne.a, {
								key: "chatCommentsForm",
								postId: _,
								replyComment: w,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: S
							}) : m.a.createElement(we.a, {
								key: "loggedOutCommentForm",
								className: ht.a.ChatLoggedOutForm,
								location: O,
								openLoginModal: k,
								openRegisterModal: y,
								origin: I
							})))
						}
					} else A.push(m.a.createElement("div", {
						className: Object(x.a)(ht.a.CommentsPaneWrapper, {
							[ht.a.mIsInOverlay]: C
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Ae.a, bt({}, this.props, {
						shouldTruncateComments: h && u,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: E.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Se.a, {
						commentId: n,
						commentsPageKey: r,
						postId: _,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: C
					})))), e && d ? A.push(m.a.createElement(Le.e, {
						key: "commentsErrorState",
						postId: _,
						commentId: n,
						sort: L,
						apiError: e
					})) : !i && t && A.push(m.a.createElement(Le.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else A.push(m.a.createElement(Le.e, {
						key: "errorState",
						postId: _,
						commentId: n,
						sort: L,
						apiError: e
					}));
					else this.didRenderLoading = !0, A.push(m.a.createElement(Le.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					if (D) {
						const e = A.shift();
						A.push(e)
					}
					return m.a.createElement(J.a.Provider, {
						value: this.sendEventWithName
					}, A)
				}
			}
			const Lt = Et(Object(z.b)(wt(Object(Xe.c)(St)))),
				Tt = k.a.wrapped(Re.a, "DetailsPageSidebar", ht.a),
				Nt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: p,
						subredditOrProfile: u
					} = e;
					if (!a && !d) return m.a.createElement(dt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(Re.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement(at.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(Re.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? W.i : Y.a;
					return m.a.createElement(ct.a, {
						containerRef: n,
						maxWidth: W.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(Fe.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object(re.h)(u) && m.a.createElement(Je.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(Tt, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(pt.a)(It)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
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
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.t)(t)
				},
				g = (e, t, s) => {
					const n = b(e),
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
				r = Object(n.a)((e, {
					subredditOrProfile: t
				}) => t, o, (e, t) => {
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
			const a = Object(n.a)(i.J, i.I, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.K
				}), e => e === o.S.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: n.t
			}) === n.w.Enabled
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
			const l = c(o.Fb, !0),
				m = c(o.Fb, !1),
				p = c(o.Gb, !0),
				u = (c(o.Gb, !1), Object(n.a)(l, p, (e, t) => e === o.Wb.Enabled || t === o.Xb.Enabled))
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
				experimentName: n.ve
			}) === n.Ce.Enabled
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
				return h
			})), s.d(t, "f", (function() {
				return b
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
						[o.Tb.Bottom_cell_dismissible]: e,
						[o.Tb.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.Tb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = c(o.nb, !0),
				m = c(o.ob, !0),
				p = c(o.pb, !0),
				u = c(o.nb, !1),
				h = c(o.ob, !1),
				b = c(o.pb, !1)
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.ef
					}) === n.Vc
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.ff
					}) === n.Vc
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.df
					});
					return t === n.We.UIChangesOnly || t === n.We.TypingIndicators || t === n.We.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
							experimentName: n.df
						}),
						s = null == t ? void 0 : t.variant;
					return s === n.We.TypingIndicators || s === n.We.IndicatorsPlusCTA
				},
				m = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.df
					});
					return (null == t ? void 0 : t.variant) === n.We.IndicatorsPlusCTA
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
					return Boolean(t) && !Object(o.if)(t)
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
				const s = Object(i.V)(e, {
					postId: t.postId
				});
				return Object(o.b)(e, {
					...t,
					subredditOrProfile: s
				})
			}, i.V, i.H, a.I, a.J, r.g, (e, t, s, n, o, r, i) => {
				if (!n) return !1;
				const a = !(!s || Object(d.h)(s)),
					c = n.numComments >= 3 && !e || !t;
				return i && a && c && (!o && !r)
			})
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/selectors/platform.ts");
			const i = new Date,
				a = i.getUTCFullYear(),
				d = i.getUTCMonth(),
				c = i.getUTCDate(),
				l = Date.UTC(2008, 0, 1),
				m = Date.UTC(a, d - 7, c),
				p = Object(n.a)(e => Object(r.f)(e), e => Object(o.a)(e), (e, t) => e && !!t && !!t.created && t.created > l && t.created < m)
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"1010632dc20f"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"eabdd1184e81"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"fc59164ca1fa"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"6a6f4c7fddf6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage.0c9d3bcbf3dfa9b32e82.js.map