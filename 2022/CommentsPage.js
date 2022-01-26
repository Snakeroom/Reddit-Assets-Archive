// https://www.redditstatic.com/desktop2x/CommentsPage.7755459d1286afb22c47.js
// Retrieved at 1/26/2022, 5:10:04 PM by Reddit Dataminer v1.0.0
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
					const e = Object(m.a)(d.Vb.Bottom_cell),
						t = Object(m.a)(d.Vb.Bottom_cell_dismissible),
						s = Object(m.a)(d.Vb.Bottom_cell_dismissible_immediate_trigger),
						n = Object(m.a)(d.Vb.Bottom_cell_signup_upsell_copy),
						o = Object(m.a)(d.Vb.Bottom_cell_surprise_install_copy),
						r = Object(m.a)(d.Vb.Bottom_sheet);
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

			function x(e) {
				const t = e.displayName || e.name || "Component";

				function s(t) {
					const s = function(e = h) {
						const {
							showPromo: t
						} = Object(c.a)(), s = p(), r = Object(u.a)(s), l = Object(m.a)(d.Vb.Bottom_cell_dismissible_immediate_trigger);
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
				p = (e, t) => async (s, n, {
					gqlContext: r
				}) => {
					const p = n(),
						u = Object(o.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = p.listings.postOrder.ids[u],
						b = !!p.listings.postOrder.api.error[u];
					if (h && !b) return;
					s(m({
						key: u
					}));
					const g = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(r(), t);
					Object(d.a)({
						getState: n,
						onFailure: e => s(c(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: g
					})
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return tt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return st
			})), s.d(t, "commentsPagePending", (function() {
				return nt
			})), s.d(t, "commentsPageLoaded", (function() {
				return ot
			})), s.d(t, "commentsPageFailed", (function() {
				return rt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
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
				x = s("./src/reddit/actions/externalAccount.ts"),
				C = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				f = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				O = s("./src/reddit/actions/platform.ts"),
				v = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/actions/profile/index.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				j = s("./src/reddit/actions/subreddit/questions.ts"),
				P = s("./src/reddit/actions/toaster.ts"),
				I = s("./src/reddit/constants/adEvents.ts"),
				_ = s("./src/reddit/constants/graphql.ts"),
				E = s("./src/reddit/constants/parameters.ts"),
				S = s("./src/reddit/constants/posts.ts"),
				w = s("./src/reddit/helpers/commentList/index.ts"),
				L = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/models/Comment/index.ts"),
				T = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Subreddit/index.ts"),
				A = s("./src/reddit/models/User/index.ts"),
				R = s("./src/reddit/selectors/category.ts"),
				B = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				F = s("./src/reddit/selectors/experiments/postSeo.ts"),
				D = s("./node_modules/reselect/es/index.js"),
				W = s("./src/reddit/constants/experiments.ts"),
				U = s("./src/reddit/helpers/chooseVariant/index.ts"),
				H = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				V = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				q = s("./src/reddit/selectors/platform.ts"),
				K = s("./node_modules/fbt/lib/FbtPublic.js"),
				G = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Y = s("./src/reddit/selectors/user.ts");
			const Q = new Set([u.g.AntiEvilOps, u.g.AutomodFiltered, u.g.CommunityOps, u.g.ContentTakedown, u.g.CopyrightTakedown, u.g.Moderator, u.g.Reddit]),
				z = new Set([u.g.Author, u.g.AuthorDeleted]),
				J = Object(D.a)(H.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return Q.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = K.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let n = Object(G.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== T.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				X = Object(D.a)(H.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return z.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = K.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let n = Object(G.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== T.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				Z = Object(D.a)(Y.k, H.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				$ = Object(D.a)(q.f, H.a, J, X, V.a, Z, V.b, (e, t, s, n, o, r, i) => {
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
			const xe = Object(ne.a)(ge.a),
				Ce = Object(ne.a)(ge.c),
				fe = Object(ne.a)(ge.b);
			var Oe = s("./src/reddit/actions/otherDiscussions/index.ts"),
				ve = s("./src/reddit/actions/subreddit/constants.ts"),
				ye = s("./src/lib/makeGqlRequest/index.ts"),
				ke = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var je = ({
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
				Pe = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_e = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Ee = ({
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
							c = Object(Pe.a)(n),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Ie.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(u.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(_e.a)(t)
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
				Se = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				we = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Le = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Ne = ({
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
							c = Object(we.a)(d),
							l = Le(c),
							m = n.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: p,
								sort: u,
								subredditName: b
							} = o,
							g = e && r ? Object(Pe.a)(r, !0) : Object(pe.a)(b, h.W[u], {
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
				Te = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Me = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Ae = ({
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
							c = Object(Me.a)(n),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Ie.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(u.n)(e)) {
								const {
									subreddit: t
								} = e;
								i[t.id] = Object(_e.a)(t)
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
				Re = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Be = Object(ne.a)(Re.b),
				Fe = Object(ne.a)(Re.a);
			var De = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const We = Object(ne.a)(De.b),
				Ue = Object(ne.a)(De.a),
				He = Object(ne.a)(ve.j),
				Ve = Object(ne.a)(ve.i),
				qe = (Object(ne.a)(ve.r), Object(ne.a)(ve.q), e => async (t, s, {
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
						sort: x,
						subredditName: C
					} = e, f = Object(pe.a)(b, null, {
						isOtherDiscussions: !0
					}), O = s(), v = Object(te.A)(O, {
						listingKey: f
					}), y = l && (!v || 0 === v.length), k = Object(pe.a)(C, h.W[x], {
						t: g
					}), j = Object(te.A)(O, {
						listingKey: k
					}), P = m && (c || !j || 0 === j.length), I = c, _ = d, E = Object(te.H)(O, {
						postId: b
					}), S = !!E && !!E.media && (Object(T.K)(E.media) || Object(T.F)(E.media)) && !E.media.altText;
					if (!(y || P || I || _ || S || p)) return;
					y && t(Object(Oe.d)({
						key: f
					}));
					const w = await ((e, t) => Object(ye.a)(e, {
							...ke,
							variables: t
						}))(n(), e),
						L = w.body,
						N = Object(Te.a)(u),
						M = I && !!(null === (i = null === (r = null === (o = L.data) || void 0 === o ? void 0 : o.post) || void 0 === r ? void 0 : r.linked) || void 0 === i ? void 0 : i.isEligible),
						A = I && (N || !M);
					p && (w.ok ? L.data && L.data.post && t(he({
						postId: b,
						isEligibleForQASchema: null !== (a = L.data.post.isEligibleForQASchema) && void 0 !== a && a
					})) : t(be())), y && Object(Se.a)({
						getState: s,
						onFailure: e => t(Object(Oe.b)(e)),
						onSuccess: e => t(Object(Oe.c)(e)),
						postId: b,
						response: w
					}), (P && !I || A) && (w.ok ? L.data && Ne({
						getState: s,
						isLinkedPostsFallback: A,
						onFailure: e => t(Ve(e)),
						onSuccess: e => t(He(e)),
						options: e,
						postId: b,
						subreddit: L.data.subreddit
					}) : t(Ve(w.error))), I && M && !N && w.ok && L.data && Ee({
						getState: s,
						onFailure: e => t(fe(e)),
						onSuccess: e => t(Ce(e)),
						postId: b,
						post: L.data.post
					}), _ && w.ok && Ae({
						getState: s,
						onFailure: e => t(Ue(e)),
						onSuccess: e => t(We(e)),
						postId: b,
						post: L.data.post
					}), S && w.ok && L.data && je({
						getState: s,
						onFailure: e => t(Fe(e)),
						onSuccess: e => t(Be(e)),
						postId: b,
						post: L.data.post
					}), I && t(xe({
						postId: b,
						isEligibleForLinkedPosts: M
					}))
				}),
				Ke = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						o = n && Object(u.t)(n),
						{
							sortToUse: r
						} = Object(L.a)(e, o);
					return (!r || r === h.u.CONFIDENCE) && Object(U.c)(e, {
						experimentEligibilitySelector: () => Object(Y.I)(e),
						experimentName: W.B
					}) === W.D.Enabled
				};
			var Ge = s("./src/reddit/selectors/chatPost.ts"),
				Ye = s("./src/reddit/selectors/seo/index.ts"),
				Qe = s("./src/reddit/actions/pages/constants.ts"),
				ze = s("./src/lib/initializeClient/installReducer.ts"),
				Je = s("./src/reddit/reducers/pages/comments/index.ts"),
				Xe = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Ze = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				$e = s("./src/reddit/selectors/i18n/index.ts"),
				et = s("./src/reddit/selectors/moderatorPermissions.ts");
			Object(ze.a)({
				pages: {
					comments: Je.a
				}
			});
			const tt = 25,
				st = 100,
				nt = Object(ne.a)(Qe.h),
				ot = Object(ne.a)(Qe.f),
				rt = Object(ne.a)(Qe.e),
				it = Object(ne.a)(Qe.i),
				at = (e, t, s) => {
					const n = !e,
						o = Object(te.H)(t, {
							postId: s
						}).belongsTo,
						r = Object(se.J)(t, {
							identifier: o
						}),
						i = Object(Ye.c)(t, {
							identifier: o
						}),
						a = !!Object(Te.c)(t),
						d = Object($e.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (c.listingBelow = i || n, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (i || n) && (!Object(M.h)(r) && !Object(Ge.d)(t, {
						postId: s
					}) && !!r || !Object(q.i)(t) && Object(F.e)(t)), e && (c.postQASchema = Object(F.d)(t)), c
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
					} = e.params || "", m = d ? Object(u.t)(d) : "", p = c && Object(N.h)(c), {
						path: g,
						queryParams: C
					} = e, P = Object(f.d)(g), {
						instanceId: I
					} = C, {
						hasSortParam: w,
						sortToUse: M
					} = Object(L.a)(s(), m), A = null === (i = null === (r = Object(q.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, B = ["context", "depth", "limit", E.f].reduce((e, t) => {
						const s = parseInt(C[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: w,
						instanceId: I,
						include_categories: !0
					});
					w && (B.sort = M), B.onOtherDiscussions = P, t(v.r(m)), await t(mt(m, p, B, M));
					const F = s().posts.models[m],
						D = Object(Y.J)(s());
					if (F && "subreddit" === F.belongsTo.type) {
						const e = F.belongsTo.id,
							n = Object(le.i)(() => t(Object(me.m)(e, {
								fullData: !0,
								includeIdentity: D
							})), {
								name: "subredditPowerupsRequested",
								page: A,
								isLoggedIn: D
							});
						await n;
						const o = s();
						if (!Object(q.i)(o)) {
							Object(Xe.a)(o) && t(Object(j.b)(e))
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
						if (i && (e => W.Ce.Redirect === Object(U.b)(e, {
								experimentEligibilitySelector: $,
								experimentName: W.ve
							}))(s())) return void t(Object(n.c)(i.url));
						if ((F.media && F.media.type) === T.o.LIVEVIDEO) {
							const e = `/rpan${F.belongsTo.type===S.a.SUBREDDIT?i.url:"/"}${Object(u.u)(F.id)}`;
							return void t(Object(n.c)(e))
						}
						if (F.belongsTo.type !== S.a.SUBREDDIT || F.isSponsored) {
							if (F.belongsTo.type === S.a.PROFILE) {
								const e = Object(le.i)(() => t(y.d(i.name)), {
									name: "getProfileInfo",
									page: A,
									isLoggedIn: D
								});
								await e
							}
						} else {
							if (!!!Object(se.Q)(s(), {
									subredditId: F.belongsTo.id
								})) {
								const e = Object(le.i)(() => t(k.o(i.name)), {
									name: "getSubredditRules",
									page: A,
									isLoggedIn: D
								});
								await e
							}
						}
						const d = at(!1, s(), m),
							c = P;
						if (dt(c, d)) {
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
									listingBelowExperimentVariant: Object(Te.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(Ze.a)(s())
								},
								p = ct(d);
							Object(le.i)(() => t(qe({
								...r,
								...o,
								...a,
								...l,
								...p,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: D,
								page: A
							});
							0
						}
						t(Object(x.p)()), t(O.m({
							title: r
						}));
						const l = s().posts.instances[m] ? e.queryParams.instanceId : F.postId;
						t(Object(a.b)(l)); {
							const e = Object(R.c)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(o.c(e))))
						}
					} else t(O.m({
						title: b.e()
					}));
					const {
						routePrefix: H
					} = e.params;
					S.b[H] === S.a.PROFILE ? Object(ie.d)(s(), t, e) : Object(ie.b)(s(), t, e)
				}, mt = (e, t, s, n) => async (o, a, d) => {
					var u, b;
					const x = a(),
						f = Object(oe.a)(e, t, s),
						{
							subredditName: y
						} = s,
						k = x.pages.comments.keyToHeadCommentId.hasOwnProperty(f),
						j = x.pages.comments.api.fullyLoaded[f],
						_ = x.pages.comments.api.error[f],
						E = x.pages.comments.api.pending[f],
						S = !Object(Y.I)(x),
						L = Object(Y.k)(x),
						N = n === h.u.CHAT,
						T = !!x.platform.lastPage;
					if ((E || k && !_) && !(N && T)) {
						if (k && !x.sidebarPromotedPosts.firstFetch) {
							const e = Object(q.i)(x) ? ce.a.COMMENTS_OVERLAY : ce.a.COMMENTS;
							window.addEventListener("load", () => {
								o(Object(re.b)(e))
							})
						}
						return void(j || o(ut(e, t, s)))
					}
					o(r.g());
					const M = x.user.prefs.commentMode;
					o(nt({
						key: f,
						postId: e,
						commentMode: M
					}));
					const R = {
						...s,
						...N ? {
							sort: h.u.LIVE
						} : S ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(te.H)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > st && (R.truncate = tt)
					}
					const F = null === (b = null === (u = Object(q.b)(x)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						D = Object(le.i)(() => Object(l.a)(d.apiContext(), e, t, R, Object(B.a)(a()), Ke(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !S,
							page: F
						}),
						W = !S && L && Object(le.i)(() => Object(p.d)(d.gqlContext(), Object(A.e)(L)), {
							name: "fetchProfileKarma",
							isLoggedIn: !S,
							page: F
						}) || null,
						[U, H] = await Promise.all([D, W]);
					let V;
					if (o(Object(O.n)(U.status)), U.ok) {
						const t = Object.keys(U.body.posts).filter(e => !!U.body.posts[e].isMeta),
							s = U.body.posts[e];
						if (t.length) {
							const e = Object(le.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: F,
									isLoggedIn: !S
								}),
								n = await e;
							n.ok && (V = n.body)
						}
						if (H && H.ok) {
							const {
								data: e
							} = H.body, t = {
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
						const n = Object(w.a)(U.body, e, x);
						o(ot({
							key: f,
							postId: e,
							meta: x.meta,
							governance: V,
							shouldCollapse: n,
							...U.body
						}))
					} {
						const n = Object(te.H)(a(), {
							postId: e
						});
						n && U.body.comments && Object.keys(U.body.comments).length < n.numComments ? o(ut(e, t, s)) : U.ok && o(pt({
							key: f
						}));
						const r = Object(q.i)(x) ? ce.a.COMMENTS_OVERLAY : ce.a.COMMENTS;
						o(Object(re.b)(r))
					}
					if (U.ok) {
						o(P.g(f));
						const t = Object(te.H)(a(), {
								postId: e
							}),
							s = Object.keys(U.body.comments);
						if (o(v.z(t, I.a.CommentsView)), Object(et.h)(a(), {
								subredditId: t.belongsTo.id
							}) && o(Object(C.a)({
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
								isLoggedIn: !S
							});
							await e
						}
					} else {
						let e;
						y && (o(Object(i.subredditPending)({
							key: f
						})), e = await Object(de.a)("subreddit", () => Object(m.a)(d.apiContext(), y, {})), o(Object(O.n)(e.status)), o(Object(i.handleSubredditPageApiError)(e, y))), o(rt({
							error: U.error,
							key: f,
							...e ? e.body : U.body
						}))
					}
				}, pt = Object(ne.a)(Qe.g), ut = (e, t, s) => async (n, o, r) => {
					const i = Object(oe.a)(e, t, s),
						a = o(),
						c = Object(Y.J)(a),
						m = Object(Y.k)(a),
						u = Object(l.a)(r.apiContext(), e, t, s, Object(B.a)(a), Ke(a)),
						h = c && m && Object(p.d)(r.gqlContext(), Object(A.e)(m)) || null,
						[b, x] = await Promise.all([u, h]);
					if (n(Object(O.n)(b.status)), b.ok) {
						if (x && x.ok) {
							const {
								data: e
							} = x.body, t = {
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
						const t = Object(w.a)(b.body, e, a);
						n(ot({
							key: i,
							postId: e,
							meta: a.meta,
							shouldCollapse: t,
							...b.body
						})), n(pt({
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
					} else n(rt({
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
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				x = s("./src/reddit/constants/headers.ts"),
				C = s("./src/reddit/models/Toast/index.ts");
			const f = (e, t) => async (s, o, {
				apiContext: r
			}) => {
				const i = await (async (e, t, s) => Object(b.a)(Object(g.a)(e, [x.a]), {
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
						kind: C.b.SuccessCommunityGreen,
						text: o
					}))
				} else s(h.f({
					id: a,
					kind: C.b.Error,
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
				y = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				k = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/controls/Dropdown/index.tsx"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				E = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const w = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(S.x)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(S.qb)(r)
				}),
				L = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				N = e => ({
					subreddit: Object(S.hb)(e),
					userSubreddit: Object(S.qb)(e)
				}),
				T = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...N
				});
			var M = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = s("./src/reddit/icons/svgs/Info/index.tsx"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/tooltip.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				V = s.n(H),
				q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const K = Object(k.a)(P.a),
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
						className: V.a.HighlightWrapper
					}, r.a.createElement(I.b, {
						className: Object(d.a)(V.a.HighlightPicker, V.a.Row),
						textClassName: V.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${G(o)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(M.b, {
						className: V.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(K, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(I.b, {
						displayText: G(q.a.First),
						isSelected: o === q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(I.b, {
						displayText: G(q.a.Last),
						isSelected: o === q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(I.b, {
						displayText: G(q.a.None),
						isSelected: o === q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Q = Y;
			const z = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				X = "CommentSort--Tooltip",
				Z = Object(k.a)(P.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(B.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(R.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(W.b)(z),
					highlightIsOpen: Object(W.b)(J),
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
						tooltipId: z
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
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(w(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(L("dropdown", "click"))
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
						location: h,
						post: b,
						postPermalink: g,
						selectedHighlightSort: x,
						showCommentHighlighter: C,
						sort: f,
						suggestedSort: k,
						showTooltip: j,
						toggleContestModeModal: P
					} = this.props, S = b.contestMode, w = !h.search.includes(c.u.CONFIDENCE), N = f === c.u.CONFIDENCE && w, T = p && !N, R = c.w[f], B = R ? R() : "", F = k && f === k && !N ? this.addSuggestedLabel(B) : B, D = S ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), W = S ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), U = S ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), H = S && !p;
					return r.a.createElement("div", {
						className: Object(d.a)(t, V.a.container, {
							[V.a.hideCommentSort]: !C && H
						}),
						ref: a
					}, r.a.createElement("div", {
						className: V.a.containerRow
					}, !H && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: V.a.DropdownContainer
					}, r.a.createElement(I.b, {
						className: Object(d.a)(V.a.SortPicker, V.a.Row),
						textClassName: V.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: z,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: V.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Z, {
						isOpen: i,
						tooltipId: z
					}, [c.u.CONFIDENCE, c.u.TOP, c.u.NEW, c.u.CONTROVERSIAL, c.u.OLD, c.u.QA].map(e => {
						const t = s || g,
							n = Object(E.b)(t),
							o = c.w[e],
							i = o ? o() : "";
						return r.a.createElement(y.a, {
							className: V.a.ViewFullLinkOrOverlayLink,
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(I.b, {
							displayText: i,
							isSelected: f === e,
							skipRoleAttr: !0
						}))
					}))), T && !H && (k ? r.a.createElement("button", {
						className: V.a.SortLink,
						onClick: f !== k ? this.setSortOnClick : this.clearSortOnClick
					}, f !== k ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: V.a.SetSort
					}, r.a.createElement("button", {
						className: V.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: X,
						onMouseEnter: j,
						onMouseLeave: l
					}, r.a.createElement(v.c, {
						className: V.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: X
					}), r.a.createElement(A.a, {
						className: V.a.Info
					})))), p && r.a.createElement("button", {
						className: V.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(_.a, {
						className: V.a.ToggleSwitch,
						on: S
					}))), C && r.a.createElement("div", {
						className: V.a.containerRow
					}, r.a.createElement(Q, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: x,
						trackHighlight: L
					})), o && r.a.createElement(O.a, {
						actionText: W,
						headerText: D,
						modalText: U,
						onConfirm: this.setContestMode,
						toggleModal: P,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(j.c)(te))
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
				return E
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return V
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
				x = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				C = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				O = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				v = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(v);
			const k = l.a.wrapped(f.a, "CommentsIcon", y.a),
				j = l.a.wrapped(O.a, "SnooFacepalm", y.a),
				P = l.a.p("EmptyTitle", y.a),
				I = l.a.p("ErrorTitle", y.a),
				_ = l.a.p("EmptyText", y.a),
				E = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, e)
				}, a.a.createElement(k, null), a.a.createElement(P, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(_, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				S = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(P, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(_, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				w = ({
					link: e
				}) => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(P, null, n.fbt._("That comment is missing", null, {
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
					className: y.a.StateContainer
				}, a.a.createElement(j, null), a.a.createElement(I, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(u.l, {
					onClick: t
				}, n.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				N = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				}) => a.a.createElement("div", {
					className: Object(c.a)(y.a.StateContainer, y.a.ErrorFullPage)
				}, a.a.createElement(L, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				})),
				T = l.a.wrapped(({
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(p.a, null)), "LoadingFullPage", y.a),
				M = l.a.div("CommentsPlaceholderContainer", y.a),
				A = l.a.div("CommentPlaceholder", y.a),
				R = l.a.div("Avatar", y.a),
				B = l.a.div("VoteColumn", y.a),
				F = l.a.div("TextColumn", y.a),
				D = l.a.wrapped(C.a, "Upvote", y.a),
				W = l.a.wrapped(x.a, "Downvote", y.a),
				U = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				V = e => a.a.createElement(M, null, r()(10, t => a.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(R, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(B, null, a.a.createElement(D, null), a.a.createElement(W, null)), a.a.createElement(F, null, a.a.createElement(U, null), a.a.createElement(H, null)))))
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
				h = s("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/constants/comments.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/constants/elementClassNames.ts"),
				O = s("./src/reddit/constants/gold.ts"),
				v = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx");
			const y = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: k,
							effectHighlight: {
								type: v.a.Lottie,
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
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(I).filter(e => e !== P)
				}(e) : [])
			}
			const P = {
				glowHexColor: null,
				effectHighlight: null
			};

			function I(e) {
				for (const t of y) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return P
			}
			var _ = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				E = s("./src/reddit/selectors/comments.ts"),
				S = s("./src/reddit/selectors/commentSelector.ts"),
				w = s("./src/reddit/selectors/communityAwards.ts"),
				L = s("./src/reddit/selectors/moderatorPermissions.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/Comments/Comment/index.tsx"),
				A = s("./src/lib/scroll/index.ts"),
				R = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/helpers/path/index.ts"),
				D = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				W = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				U = s.n(W);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = u.a.wrapped(D.a, "ArrowRight", U.a), q = u.a.wrapped(R.a, "LinkOrOverlayLink", U.a), K = u.a.span("HoverSpan", U.a), G = Object(l.c)({
				permalink: (e, t) => Object(E.m)(e, {
					commentId: Object(E.r)(e, t).parentId
				})
			});
			var Y = Object(c.b)(G)(Object(B.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => d.a.createElement("div", {
					className: Object(m.a)(U.a.Wrapper, {
						[U.a.isActive]: e
					})
				}, d.a.createElement(q, {
					isOverlay: !!t,
					to: Object(F.b)(s),
					onClick: A.b
				}, d.a.createElement(K, null, H._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", d.a.createElement(V, null))))),
				Q = s("./src/lib/makeCommentPermalink/index.ts"),
				z = s("./src/reddit/actions/login.ts"),
				J = s("./src/reddit/actions/modal.ts"),
				X = s("./src/reddit/constants/experiments.ts"),
				Z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				ee = s("./src/reddit/helpers/featureThrottling/store/index.ts"),
				te = s("./src/reddit/helpers/trackers/moreReplies.ts"),
				se = s("./src/reddit/hooks/useTracking.ts"),
				ne = s("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				oe = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				re = s.n(oe);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ae = u.a.div("MoreCommentsItemWrapper", re.a), de = u.a.p("MoreComments", re.a), ce = u.a.wrapped(de, "MoreCommentsInteractive", re.a), le = Object(l.c)({
				isMoreRepliesSignupEnabled: ne.a,
				moreCommentsItem: E.D,
				moreCommentsPending: E.E,
				moreRepliesSignupVariant: ne.b
			});
			var me = Object(c.b)(le, (e, t) => ({
					moreCommentsClicked: () => e(Object(g.l)(t.commentsPageKey, t.moreCommentsId)),
					openRegisterModal: () => {
						const {
							parentId: s,
							postId: n,
							postPermalink: o
						} = t;
						e((e, t) => {
							const r = t();
							e(Object(z.j)());
							const i = r.platform.currentPage,
								a = Object(Z.S)(r, i),
								d = a ? Object(Q.a)(a, n, s) : o;
							e(Object(J.k)({
								actionSource: J.a.CommentMoreReplies,
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
					} = e, c = Object(se.a)(), l = e => {
						e.preventDefault(), e.stopPropagation(), c(Object(te.c)()), a()
					};
					return d.a.createElement(ae, null, r ? d.a.createElement(de, null, ie._("loading...", null, {
						hk: "47z89"
					})) : d.a.createElement($.a.Consumer, null, e => d.a.createElement(ce, {
						className: Object(m.a)({
							[re.a.isActive]: t
						}),
						onClick: e => ((e, t) => {
							s ? (c(Object(te.a)()), i === X.Jd.ThrottledDaily ? (ee.a.throttleFeature(X.Kd.Daily), l(e)) : i === X.Jd.ThrottledWeekly ? (ee.a.throttleFeature(X.Kd.Weekly), l(e)) : l(e)) : n()
						})(e)
					}, ie._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [ie._plural(null == o ? void 0 : o.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				pe = s("./node_modules/lodash/times.js"),
				ue = s.n(pe),
				he = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				be = s.n(he);
			const ge = u.a.wrapped(e => d.a.createElement("div", e, d.a.createElement("i", {
					className: f.m
				})), "Line", be.a),
				xe = u.a.div("LineContainer", be.a),
				Ce = u.a.div("ShortLineContainer", be.a);
			var fe = e => {
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
					return d.a.createElement(xe, null, ue()(s + 1, e => e === s ? l !== x.a.Comment || t ? null : d.a.createElement(Ce, {
						key: c[e]
					}, d.a.createElement(ge, {
						className: Object(m.a)(c[e], {
							[be.a.hasGlowBorder]: !!n,
							[be.a.topLevel]: 0 === s
						}),
						onClick: a,
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})) : d.a.createElement(ge, {
						className: c[e],
						key: c[e],
						onClick: o(e),
						onMouseOver: () => r(c[e]),
						onMouseOut: () => i(c[e])
					})))
				},
				Oe = s("./src/reddit/contexts/Visibility.tsx"),
				ve = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ye = s("./src/reddit/selectors/moderatingComments.ts"),
				ke = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				je = s.n(ke);
			const Pe = u.a.div("CommentListNodeWrapper", je.a),
				Ie = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(f.f)
				},
				_e = () => {
					const e = document.querySelectorAll(`.${f.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(f.f)
				};
			var Ee = Object(c.b)(() => Object(l.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(ye.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(E.l)(e, t),
				depth: (e, t) => Object(E.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const n = Object(E.l)(e, {
						commentLink: t
					});
					if (n && t.type === x.a.Comment) {
						s = j(n.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: ve.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(E.l)(e, {
						commentLink: t
					});
					return !(t.type !== x.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(w.a)(e, t);
						return s && s.coinPrice >= O.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(E.p)(e);
					if (s === _.a.None) return !1;
					if (t.type !== x.a.Comment) return !1;
					const n = t.id,
						o = Object(S.b)(e, {
							commentId: n
						});
					if (!o) return !1;
					const r = Object(T.s)(e),
						i = !!Object(L.l)(e, {
							postId: o.postId
						}),
						a = Object(N.H)(e, {
							postId: o.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === _.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || r) && o.created > d
				},
				postPermalink: N.G
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: n
			}) => ({
				onLineClick: o => () => {
					e(Object(g.d)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: o,
						scrollToAndRemeasure: n
					}))
				},
				onShortLineClick: () => e(Object(g.o)({
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
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: p,
					isAwarded: u,
					isFirstInList: h,
					isHidden: b,
					isHighlighted: g,
					onLineClick: f,
					onPresenceIndicatorInViewport: O,
					onShortLineClick: v,
					parentNodeIds: y,
					postId: k,
					postPermalink: j,
					renderedInOverlay: P,
					scrollToAndRemeasure: I,
					showBlockingInterstitial: _
				} = e, E = !!u, S = !(!a || !a.glowHexColor), w = S && i > 0, L = S, N = d.a.createElement(Pe, {
					className: Object(m.a)(s, {
						[je.a.isHidden]: b,
						[je.a.glowBorderTopPadding]: w,
						[je.a.glowBorderBottomPadding]: L
					}),
					id: o.id,
					style: {
						paddingLeft: i * (C.w + C.v) + (o.type === x.a.Comment ? C.w : 0)
					},
					tabIndex: -1
				}, d.a.createElement(fe, {
					collapsed: n,
					depth: i,
					hasGlowBorder: w,
					onLineClick: f,
					onLineMouseOver: Ie,
					onLineMouseOut: _e,
					onShortLineClick: v,
					type: o.type,
					parentNodeIds: y
				}), Se({
					childrenInfo: t,
					clearHovered: _e,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					onLineMouseOver: Ie,
					hasAwardGradient: E,
					highlightTreatment: a,
					index: c,
					isActive: l,
					isAvatarsInCommentsEnabled: p,
					isFirstInList: h,
					isHighlighted: g,
					parentNodeIds: y,
					postId: k,
					renderedInOverlay: P,
					scrollToAndRemeasure: I,
					onPresenceIndicatorInViewport: O,
					postPermalink: j,
					showBlockingInterstitial: _
				}));
				return p && o.type === x.a.Comment ? d.a.createElement(Oe.a, null, N) : N
			});
			const Se = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: n,
				depth: o,
				hasAwardGradient: r,
				highlightTreatment: i,
				index: a,
				isActive: c,
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
						return d.a.createElement(M.default, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: n,
							hasAwardGradient: r,
							highlightTreatment: i,
							index: a,
							isActive: c,
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
						return d.a.createElement(me, {
							commentsPageKey: n,
							isActive: c,
							moreCommentsId: s.id,
							parentId: h[o - 1],
							postId: b,
							postPermalink: O
						});
					case x.a.ContinueThread:
						return d.a.createElement(Y, {
							id: s.id,
							isActive: c
						})
				}
			};
			var we = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Le = s("./src/reddit/components/Comments/States/index.tsx"),
				Ne = s("./src/reddit/components/Scroller/Simple.tsx"),
				Te = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Me = s("./src/reddit/constants/elementIds.ts"),
				Ae = s("./src/reddit/featureFlags/index.ts"),
				Re = s("./src/reddit/helpers/commentList/index.ts"),
				Be = s("./src/reddit/helpers/trackers/comment.ts"),
				Fe = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				De = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				We = s("./src/telemetry/index.ts"),
				Ue = s("./src/lib/LRUCache/index.ts"),
				He = s("./src/lib/promo/withShowSignupUpsell.tsx"),
				Ve = s("./src/reddit/selectors/telemetry.ts");
			const qe = e => t => ({
				...Object(Ve.m)(t),
				source: "post_detail",
				action: "view",
				noun: "few_comments",
				actionInfo: Object(Ve.c)(t, {
					reason: String(e)
				})
			});
			var Ke = s("./src/reddit/components/Comments/index.m.less"),
				Ge = s.n(Ke);
			const Ye = C.f + 10,
				Qe = 65,
				ze = u.a.wrapped(Ne.b, "Scroller", Ge.a),
				Je = Object(l.c)({
					allCollapsed: E.a,
					commentLinks: E.k,
					commentThreadLinkSet: E.o,
					measureScrollFPS: Ae.d.measureScrollFPS,
					moreComments: E.b,
					postPermalink: N.G
				}),
				Xe = Object(c.b)(Je, (e, t) => ({
					loadCommentAuthorsPowerupsInfo: async t => await e(Object(h.getSubredditUserCommentsPowerupsInfoFromCommentLinks)(t)),
					onCommentEnteredViewport: t => e(Object(g.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(g.h)(t, s)),
					showModalOnCommentsScroll: t => e(Object(b.Z)(Object(F.b)(t)))
				})),
				Ze = new Ue.a(500),
				$e = new Ue.a(500),
				et = (e, t) => {
					const s = `entered-${e}`;
					let n = Ze.get(s);
					return void 0 === n && (n = () => {
						t(e)
					}, Ze.set(s, n)), n
				},
				tt = (e, t) => {
					const s = `left-${e}`;
					let n = $e.get(s);
					return void 0 === n && (n = s => {
						t(e, s)
					}, $e.set(s, n)), n
				};
			class st extends d.a.Component {
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
						}), this.props.sendEvent(Object(Be.b)(e)))
					}, this.showBlockingInterstitial = o()(() => {
						this.state.isBlockingModalShowed || (this.setState({
							isBlockingModalShowed: !0
						}), this.props.showModalOnCommentsScroll(this.props.postPermalink))
					}, p.K, {
						leading: !0,
						maxWait: 1e3
					}), this.parentNodeIdsMap = {}, we.c(), this.childrenInfoMap = {}, this.state = {
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
					this.timerId && We.c.cancel(this.timerId), e.length && (this.timerId = We.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(We.b)(p.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: We.c.end(this.timerId)
					}), this.props.loadCommentAuthorsPowerupsInfo(this.props.commentLinks), this.props.commentLinks.length < De.a && this.props.sendEvent(qe(this.props.commentLinks.length))
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
					this.timerId && We.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = We.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(We.b)(p.n.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: We.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && We.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					we.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (we.a(c.id), i += Object(Re.d)(c, n), c.type === x.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
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
					} = this.props, a = et(e.id, n), c = tt(e.id, o);
					return {
						estHeight: we.b(e.id) ? 0 : Qe,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: c,
						render: ({
							placeholderRecommended: n,
							height: o,
							width: a,
							scrollToAndRemeasure: c
						}) => n ? d.a.createElement("div", {
							style: {
								height: o,
								backgroundColor: "#fff"
							}
						}) : d.a.createElement(Ee, {
							key: `comment-list-node-${e.id}`,
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							index: t,
							isFirstInList: 0 === t,
							isHidden: we.b(e.id),
							postId: r,
							scrollToAndRemeasure: c,
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
					const c = t.map((e, t) => this.getScrollChild(e, t));
					return d.a.createElement(ze, {
						className: Object(m.a)(Ge.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(Me.d) : null,
						onScroll: i,
						onAllChildrenRendered: o,
						preventScrollOnMount: !0,
						scrollToChildPadding: Ye,
						trackingName: a
					}, c)
				}
				renderEmptyState() {
					return this.props.commentId ? d.a.createElement(Le.g, {
						link: this.props.postPermalink
					}) : d.a.createElement(Le.c, null)
				}
			}
			t.a = Xe(Object(Te.c)(Object(He.a)(Object(Fe.d)(st))))
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
				x = s("./src/reddit/components/ModProgressModule/index.tsx"),
				C = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				f = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				O = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				y = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				k = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				j = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				P = s("./src/reddit/constants/experiments.ts"),
				I = s("./src/reddit/featureFlags/component.tsx"),
				_ = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				S = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				w = s("./src/reddit/selectors/experiments/postSeo.ts"),
				L = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				A = s.n(M);
			const R = Object(I.a)("spPoints", h.a),
				B = Object(I.a)("spLeaderboard", b.a),
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
					}) => !Object(E.q)(t) && !s && Object(S.a)(e) === P.Xd.NewModule,
					isLoggedIn: T.J,
					postSEOV2IdCardVariant: w.h,
					shouldShowReredditPromo: L.a,
					widgets: Object(p.a)(N.r)
				}),
				W = Object(d.b)(D);
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
					} = this.props, d = !Object(w.c)(i) && !Object(w.f)(i);
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
					const v = Object(w.c)(i) || Object(w.f)(i),
						P = a.a.createElement(f.a, {
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
						className: Object(l.a)(A.a.outerWrapper, e)
					}, s && a.a.createElement(x.default, {
						subredditId: c,
						subredditName: p
					}), Object(E.q)(r) ? a.a.createElement(F, {
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
						cardClassName: A.a.card,
						subredditId: c
					}), a.a.createElement(R, {
						className: A.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(B, {
						className: A.a.card,
						subredditId: c,
						uniqueId: r.id
					}), a.a.createElement(C.a, {
						subredditId: c
					}), P, n && h.map((e, t) => a.a.createElement(O.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(j.a, {
						subredditName: p,
						widget: e
					}))), r.isSponsored && a.a.createElement(O.a, null, a.a.createElement(y.a, null)), d && a.a.createElement(k.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), this.renderFooter(b++))
				}
			}
			t.a = W(U)
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
					} = this.props, g = l && !e, x = l ? m.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: b,
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
				x = Object(a.c)({
					subreddit: p.w,
					subredditAboutInfo: p.t
				}),
				C = Object(i.b)(x);
			t.a = C(e => {
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
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				C = s("./src/reddit/constants/modals.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/ImageInput/index.tsx"),
				v = s("./src/reddit/endpoints/subreddit/newCommunityProgress.ts"),
				y = s("./src/reddit/helpers/trackers/communityProgressModule.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/icons/fonts/ModSettings/index.tsx"),
				P = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				I = s("./src/reddit/models/ApiRequestState/index.ts"),
				_ = s("./src/reddit/models/NewCommunityProgress/index.ts"),
				E = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/ModProgressModule/index.m.less"),
				L = s.n(w);
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = ({
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
				}, n ? o.a.createElement(k.a, {
					name: "checkmark",
					className: L.a.CheckIcon
				}) : o.a.createElement(k.a, {
					name: i,
					className: L.a.Icon
				})), o.a.createElement("span", {
					className: L.a.CardTitle
				}, t)))
			}, M = Object(a.c)({
				isTooltipOpen: e => Object(S.a)(e) === u.MOD_WELCOME_TOOLTIP_ID,
				progressModuleRecords: E.c
			});
			class A extends o.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onChangeIconFileInput = e => {
						const t = Object(I.b)();
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
					this.props.progressModuleRecords && this.props.progressModuleRecords[this.props.subredditId] && this.props.sendEvent(Object(y.g)(this.props.progressModuleRecords[this.props.subredditId]))
				}
				onClickCard(e, t) {
					"add_descr" === t ? this.props.onOpenDescriptionModal() : "first_post_v3" === t ? this.props.onNavigateToSubmit() : this.onOpenIconUploadScreen(), this.props.sendEvent(Object(y.b)(e, t))
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
					if (!b) return o.a.createElement(x.a, {
						className: L.a.ThemedWidget,
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: L.a.headerButtonsContainer
						}, o.a.createElement(P.a, {
							className: L.a.ChevronIcon
						})),
						title: o.a.createElement("div", {
							className: L.a.ModuleTitle
						}, o.a.createElement(j.a, {
							className: L.a.ModSettingsIcon
						}), N._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: L.a.titleClassName,
						onClick: c
					});
					const g = (null === (e = null == b ? void 0 : b.progress) || void 0 === e ? void 0 : e.done) === (null === (t = null == b ? void 0 : b.progress) || void 0 === t ? void 0 : t.total),
						C = 0 === (null === (s = b.progress) || void 0 === s ? void 0 : s.done);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
						className: Object(d.a)(L.a.ThemedWidget, {
							[L.a.completed]: g,
							[L.a.tooltipIsActive]: i
						}),
						contentOnly: !0,
						headerButton: o.a.createElement("div", {
							className: L.a.headerButtonsContainer
						}, o.a.createElement(P.a, {
							className: L.a.ChevronIcon
						})),
						id: u.MOD_WELCOME_TOOLTIP_ID,
						onHeaderClick: c,
						title: o.a.createElement("div", {
							className: L.a.ModuleTitle
						}, o.a.createElement(j.a, {
							className: L.a.ModSettingsIcon
						}), N._("Mod Tools", null, {
							hk: "2Gg52f"
						})),
						titleClassName: L.a.titleClassName
					}, o.a.createElement("div", {
						className: L.a.ProgressContainer
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: L.a.Title
					}, g ? N._("Well done, you're set up!", null, {
						hk: "3sJd9H"
					}) : N._("Set up r/{subredditName}", [N._param("subredditName", p)], {
						hk: "3SHelG"
					})), o.a.createElement("div", {
						className: L.a.ProgressDescription
					}, o.a.createElement("span", {
						className: L.a.progressCount
					}, N._("{cardsComplete} of {totalCards}", [N._param("cardsComplete", null === (n = b.progress) || void 0 === n ? void 0 : n.done), N._param("totalCards", null === (r = b.progress) || void 0 === r ? void 0 : r.total)], {
						hk: "1gMzOE"
					})), " ", o.a.createElement("span", {
						className: Object(d.a)(L.a.progressText, {
							[L.a.darkFont]: C
						})
					}, N._("tasks completed", null, {
						hk: "DxeNq"
					}))), C && o.a.createElement("div", {
						className: L.a.Description
					}, N._("Get your community off the ground with these tasks", null, {
						hk: "3n0h53"
					})))), !g && o.a.createElement("div", {
						className: L.a.CardContainer
					}, b.cards.map(e => {
						const t = e.status === _.a.COMPLETED;
						return T(e, t, () => this.onClickCard(b, e.id))
					})), g && o.a.createElement(f.t, {
						className: L.a.CloseButton,
						onClick: a,
						priority: f.c.Tertiary
					}, N._("Close", null, {
						hk: "3UZAZk"
					})), o.a.createElement(h.a, {
						isOpen: i
					})), this.renderImageUploader())
				}
			}
			const R = Object(r.b)(M, (e, t) => ({
				onCompleteModule: () => e(Object(v.c)(t.subredditId, _.d)),
				onNavigateToSubmit: () => e(Object(i.b)(`/r/${t.subredditName}/submit`)),
				onOpenDescriptionModal: () => e(Object(c.i)(C.a.EDIT_DESCRIPTION_MODAL)),
				onOpenTooltip: () => e(Object(p.h)({
					tooltipId: u.MOD_WELCOME_TOOLTIP_ID
				})),
				onTopBarClicked: () => e(Object(i.b)(`/r/${t.subredditName}/about`)),
				uploadCommunityIcon: (s, n) => {
					e(Object(l.a)(t.subredditId, s, n)), e(Object(m.b)(t.subredditId))
				}
			}));
			t.default = R(Object(g.c)(A))
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
				x = s("./src/reddit/constants/elementIds.ts"),
				C = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/constants/page.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				k = s("./src/reddit/helpers/trackers/lightbox.ts"),
				j = s("./src/reddit/helpers/trackers/screenview.ts"),
				P = s("./src/reddit/selectors/chatPost.ts"),
				I = s("./src/reddit/selectors/commentsListTruncated.ts"),
				_ = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				E = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				S = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				w = s("./src/reddit/selectors/i18n/index.ts"),
				L = s("./src/reddit/selectors/telemetry.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				T = s("./src/lib/classNames/index.ts"),
				M = s("./src/reddit/constants/listings.ts"),
				A = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/helpers/name/index.ts"),
				B = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				F = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				D = s.n(F);
			const {
				fbt: W
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
					return o ? (c = M.c[M.b.Popular], d = W._("Explore more of Reddit", null, {
						hk: "2wgFkH"
					})) : d = n ? W._("See more posts like this in {subredditName}", [W._param("subredditName", Object(R.c)(r.displayText))], {
						hk: "pLxW5"
					}) : W._("Continue browsing in {subredditName}", [W._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(A.a, {
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
					}, d, a.a.createElement(B.a, {
						className: D.a.arrow
					})))
				}),
				H = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts"),
				V = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				q = s.n(V);
			const K = Object(c.a)((e, {
					isOverlay: t
				}) => t, I.a, _.b, (e, t, s) => !((!t || s) && e)),
				G = Object(c.a)((e, {
					post: t
				}) => !!t && Object(v.a)(t), (e, {
					awaitAllCommentsRendered: t
				}) => t, N.I, N.J, P.d, K, (e, t, s, n, o, r) => !t && !s && !n && !o && !e && r),
				Y = Object(c.a)((e, {
					post: t
				}) => t, E.c, L.W, L.hb, (e, t, s, n) => {
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
						i = Object(p.a)(a, Object(E.a)(t) || !o), r = {
							canonicalUrl: s.canonical_url,
							baseUrl: s.base_url,
							hostPostId: a,
							isEligibleForLinkedPosts: o,
							shouldShowLinkedPosts: o && !Object(C.nf)(t) && !Object(E.a)(t),
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
				Q = Object(c.c)({
					listingBelowLinkedPostsData: Y,
					nsfwListingBelowVariant: S.a,
					shouldShowListingBelow: G,
					shouldShowNsfwListingBelow: w.b
				}),
				z = Object(d.b)(Q, e => ({
					loadMorePosts: t => e(Object(h.r)({
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
						timeSort: l.gc.WEEK
					}), this.onFooterClick = e => {
						this.props.sendEvent(Object(k.c)("recommended_footer"))
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
					return s ? t : e && n && n.id ? Object(H.a)(n.id) : Object(u.a)(o.name, l.W.TOP, {
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
					if (c && !Object(C.nf)(c) && !Object(E.a)(c) && !i) return a.a.createElement("div", {
						className: q.a.smallBanner
					});
					const {
						name: l
					} = o, m = Object(y.a)(r.newCommunityTheme.canvas);
					let p = null;
					return p = !(null == d ? void 0 : d.shouldShowLinkedPosts) && !s ? n.fbt._("More posts from the {name} community", [n.fbt._param("name", l)], {
						hk: "2g363L"
					}) : Object(E.b)(c) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : t === C.Td.DeRecs ? n.fbt._("Popular Posts Near You", null, {
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
			t.a = z(Object(m.a)(Object(g.c)(J)))
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
				return P
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
				x = s("./src/reddit/selectors/telemetry.ts");
			const C = "nsfw_dialog";
			var f = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			const O = `${a.a.assetPath}/img/nsfw-blocking-promo/nsfw.png`,
				v = `${a.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`,
				y = {
					d2x_nsfw_signup_blocking_de_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${a.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				k = e => {
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
								...Object(x.m)(e),
								source: "xpromo",
								action: "click",
								noun: C
							}))()), t(Object(u.i)())
						}
					}, (() => p.fbt._("Log In", null, {
						hk: "4BITk"
					}))()), o.a.createElement(g.j, {
						className: m.a.cancel,
						onClick: () => {
							s((() => e => ({
								...Object(x.m)(e),
								source: "xpromo",
								action: "dismiss",
								noun: C
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
				P = e => {
					const t = Object(h.b)();
					o.a.useEffect(() => {
						t((() => e => ({
							...Object(x.m)(e),
							source: "xpromo",
							action: "view",
							noun: C
						}))())
					}, [t]);
					const {
						contentTitle: s
					} = e, n = Object(r.e)(f.b) === b.Yb.Enabled ? y.d2x_nsfw_signup_blocking_de_v1 : y.d2x_nsfw_signup_blocking_non_us_v1;
					return o.a.createElement("div", {
						className: m.a.container
					}, o.a.createElement(k, {
						contentTitle: s
					}), o.a.createElement("div", {
						className: m.a.footerWrapper
					}, o.a.createElement(c.a, null)), o.a.createElement(j, {
						qrCodeAsset: n
					}))
				}
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
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(n.f)(s));
				return t
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
			t.a = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: c,
				response: l
			}) => {
				if (!l.ok) return void t(l.error);
				const m = l.body,
					{
						post: p
					} = m && m.data,
					u = e(),
					h = Object(n.a)(c, null, {
						isOtherDiscussions: !0
					});
				if (p) {
					if (p.otherDiscussions && p.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = p, {
							postFlair: n,
							postIds: l,
							posts: m,
							profiles: b,
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
						s({
							count: t,
							key: h,
							meta: u.meta,
							postFlair: n,
							postId: c,
							postIds: l,
							posts: m,
							profiles: b,
							subreddits: g
						})
					}
				} else s({
					count: 0,
					key: h,
					meta: u.meta,
					postFlair: {},
					postId: c,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			}
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
					...Object(n.m)(e),
					media: Object(n.z)(e, t),
					profile: Object(n.P)(e),
					subreddit: Object(n.hb)(e) || Object(n.kb)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.G)(t, e),
					...o(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.G)(t, e),
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
				x = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				f = s.n(C);

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
					showFPR: x.H,
					showSuspended: x.Q,
					showOffline: e => e.connection.showBanner
				})),
				y = Object(d.a)(({
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
			class k extends o.a.Component {
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(y, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(h.a, e))
				}
			}
			t.a = v(k)
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
				h = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				b = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				x = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				C = s.n(x);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(r.b)(() => Object(i.c)({
				isSubredditDiscoveryCrosspostEnabled: g.a,
				headComment: b.x,
				post: b.H
			}));
			t.a = Object(m.c)(O(({
				isSubredditDiscoveryCrosspostEnabled: e,
				commentId: t,
				headComment: s,
				isOverlay: n,
				post: r,
				postId: i,
				sendEvent: m
			}) => {
				var b;
				if (!r) return null;
				const g = null !== (b = r.numDuplicates) && void 0 !== b ? b : 0,
					x = void 0 !== t,
					O = r.permalink,
					v = g > 0,
					y = Object(p.b)(Object(d.e)(O));
				return x || v ? o.a.createElement("div", {
					className: C.a.CommentsNavigationPane
				}, x && o.a.createElement("div", null, o.a.createElement(l.a, {
					className: C.a.linkOrOverlay,
					isOverlay: n,
					to: Object(p.b)(O)
				}, f._("View all comments", null, {
					hk: "3I5IX9"
				})), s && null !== s.parentId && o.a.createElement(l.a, {
					className: C.a.linkOrOverlay,
					isOverlay: n,
					to: Object(p.b)(s.permalink + "?context=8&depth=9")
				}, f._("Show parent comments", null, {
					hk: "AVRCa"
				}))), v && o.a.createElement(o.a.Fragment, null, e && o.a.createElement(c.a, {
					postId: i
				}), o.a.createElement(l.a, {
					className: Object(a.a)(C.a.OtherDiscussionsLink, {
						[C.a.discoveryExperimentLink]: e
					}),
					isOverlay: n,
					onClick: () => m(e ? Object(u.b)() : Object(h.a)(i)),
					to: y
				}, e ? o.a.createElement(o.a.Fragment, null, f._("View all", null, {
					hk: "30twDK"
				}), ` (${g})`) : f._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [f._plural(g, "other discussion communities count")], {
					hk: "3oofZ8"
				})))) : null
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
				return It
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
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				x = s("./src/telemetry/models/Timer.ts"),
				C = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				O = s("./src/lib/domUtils/index.ts"),
				v = s("./src/lib/fastdom/index.ts"),
				y = s("./src/lib/lessComponent.tsx"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				P = s("./src/lib/performanceTimings/index.tsx"),
				I = s("./src/reddit/actions/ads/index.ts"),
				_ = s("./src/reddit/actions/comment/index.ts"),
				E = s("./src/reddit/actions/comment/authoring.ts"),
				S = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				w = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				N = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				M = s("./src/reddit/actions/reportFlow/index.ts"),
				A = s("./src/reddit/actions/tooltip.ts"),
				R = s("./src/reddit/actions/upvotePrompt.ts"),
				B = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				F = s("./src/reddit/components/CrosspostRecommendationsModal/async.tsx"),
				D = s("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				W = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				U = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				H = s("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				V = s("./src/reddit/constants/componentSizes.ts"),
				q = s("./src/reddit/constants/elementIds.ts"),
				K = s("./src/reddit/constants/history.ts"),
				G = s("./src/reddit/constants/keycodes.ts"),
				Y = s("./src/reddit/constants/posts.ts"),
				Q = s("./src/reddit/constants/screenWidths.ts"),
				z = s("./src/reddit/contexts/ApiContext.tsx"),
				J = s("./src/reddit/contexts/PageLayer/index.tsx"),
				X = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Z = s("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				$ = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ee = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				te = s("./src/reddit/selectors/upvotePrompt.ts"),
				se = s("./src/reddit/featureFlags/profileCollections.ts"),
				ne = s("./src/reddit/contexts/Post/index.tsx"),
				oe = s("./src/reddit/models/Comment/index.ts"),
				re = s("./src/reddit/models/Post/index.ts"),
				ie = s("./src/reddit/models/Subreddit/index.ts"),
				ae = s("./src/reddit/selectors/chatPost.ts"),
				de = s("./src/reddit/selectors/comments.ts"),
				ce = s("./src/reddit/selectors/commentSelector.ts"),
				le = s("./src/reddit/selectors/commentsListTruncated.ts"),
				me = s("./src/reddit/selectors/creatorStats.ts"),
				pe = s("./src/reddit/selectors/discoveryUnit.ts"),
				ue = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				he = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				be = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ge = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				xe = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Ce = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				fe = s("./src/reddit/selectors/experiments/subredditDiscovery.ts"),
				Oe = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				ve = s("./src/reddit/selectors/isEligibleForCommentTruncation.ts"),
				ye = s("./src/reddit/selectors/meta.ts"),
				ke = s("./src/reddit/selectors/moderatorPermissions.ts"),
				je = s("./src/reddit/selectors/posts.ts"),
				Pe = s("./src/reddit/selectors/subreddit.ts"),
				Ie = s("./src/reddit/selectors/tooltip.ts"),
				_e = s("./src/reddit/selectors/user.ts"),
				Ee = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				Se = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				we = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Le = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Ne = s("./src/reddit/components/Comments/index.tsx"),
				Te = s("./src/reddit/components/Comments/States/index.tsx"),
				Me = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Ae = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Re = s("./src/reddit/components/CommentSort/index.tsx"),
				Be = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Fe = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				De = s("./src/reddit/components/CreatorStats/loader.tsx"),
				We = s("./src/reddit/components/HeaderImage/index.tsx"),
				Ue = s("./src/reddit/components/Hovercards/helpers.ts"),
				He = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ve = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				qe = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ke = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Ge = s("./src/reddit/components/JumpToContent/index.tsx"),
				Ye = s("./src/reddit/components/NewCommentPill/async.tsx"),
				Qe = s("./src/reddit/components/PostContent/index.tsx"),
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
				ht = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				bt = s("./src/reddit/pages/CommentsPage/index.m.less"),
				gt = s.n(bt);

			function xt() {
				return (xt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ct = {
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "POST_COUNT_UPDATE"
						}
					}
				},
				ft = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				Ot = 200,
				vt = 80,
				yt = 32,
				kt = Object(n.a)({
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
				Pt = Object(n.a)({
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
				It = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(k.a)(e) : s,
				_t = e => {
					const {
						state: t
					} = e.location, s = a()(t, K.b.IsOverlay, !1), n = a()(t, K.b.CloseLocation, null), o = a()(t, K.b.ScrollOnLoad, !1);
					o && Object(st.c)(K.b.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(re.t)(i), l = r && Object(oe.h)(r);
					return m.a.createElement(ne.a, {
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
				Et = Object(J.u)(),
				St = () => Object(h.c)({
					apiError: de.c,
					apiPending: de.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(je.V)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					canShowCrosspostRecommendationsModal: (e, {
						postId: t
					}) => Object(Z.a)(e, t),
					canViewCreatorStats: (e, {
						postId: t
					}) => Object(me.a)(e, t),
					comment: ce.b,
					communityBannerDiscoveryUnit: pe.a,
					isSubredditDiscoveryCrosspostEnabled: fe.a,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(_e.f)(e, t),
					currentUserShowNSFW: _e.db,
					dismissedSubreddits: ue.a,
					fullyLoaded: de.u,
					hasModeratorPostPermissions: ke.c,
					headComment: de.x,
					isActionBarAnimationEnabled: ee.b,
					isAvatarsInCommentsEnabled: be.a,
					isBlockedUserBannerEnabled: (e, {
						postId: t
					}) => !!Object(je.w)(e, {
						postId: t
					}) && Object(he.a)(e),
					isCountAnimShadowTestEnabled: ee.e,
					isCrawler: (e, t) => !!Object(ye.c)(e),
					isCreatorStatsEnabled: (e, {
						postId: t
					}) => Object(ge.a)(e, t),
					isCrosspostRecommendationsExperimentEnabled: Z.b,
					isEligibleForCommentTruncation: ve.a,
					isChatPost: ae.d,
					isCommentsListTruncated: le.a,
					isLoggedIn: _e.J,
					isNightmodeOn: _e.W,
					isTooltipOpen: (e, t) => !!Object(Ie.a)(e),
					origin: ye.j,
					post: je.H,
					postSEOV2IdCardVariant: xe.h,
					profileCollectionsEnabled: se.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: n
					}) => Object(de.s)(e, {
						commentsPageKey: It({
							postId: t,
							commentId: s,
							commentsPageKey: n
						})
					}),
					shouldOpenPostInNewTab: _e.cb,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(Pe.t)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: je.V,
					userHovercardIsOpen: (e, t) => Object(Ie.b)(Object(Ue.b)({
						itemId: t.postId,
						tooltipIdPrefix: W.a,
						tooltipType: Je.c.StickyPost
					}))(e),
					userPrefs: _e.yb,
					inResonatePilot: Ce.a,
					isQualifiedForUpvotePrompt: te.c,
					isTypingIndicatorsExperimentEnabled: Oe.c,
					isEligibleForNsfwSignupUpsellTreatment: (e, {
						postId: t
					}) => {
						const s = Object(je.V)(e, {
							postId: t
						});
						return !(!s || !s.isNSFW) && Object($.a)(e)
					},
					isTrueblockPCBlockeeEnabled: he.b
				}),
				wt = (e, t) => ({
					closeCrosspostRecommendationsModal: () => e(Object(N.g)(D.a)),
					dismissTruncation: t => e(Object(Ee.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(S.a)()),
					setCommentFocus: t => e(_.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(A.i)()),
					onToggleTooltip: t => e(Object(A.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.i)()),
					openRegisterModal: () => e(Object(L.j)()),
					openReportFlow: (t, s) => e(Object(M.c)(t, s)),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(S.b)()),
					fetchCommentsNativeAd: t => e(Object(I.a)(t)),
					getIsTrackingCrossposts: t => e(Object(w.b)(t)),
					getPostCrowdControlLevel: t => e(Object(Se.b)(t)),
					triggerUpvotePrompt: (t, s, n) => {
						e(Object(R.b)(t, s, n))
					}
				}),
				Lt = Object(p.b)(St, wt);
			class Nt extends m.a.Component {
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
							i(Object(Ue.b)({
								itemId: a,
								tooltipIdPrefix: W.a,
								tooltipType: Je.c.StickyPost
							}))
						}))
					}, f.K), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(at.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(re.s)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(tt.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === G.b.F || e.keyCode === G.a.F,
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
					}, te.b));
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
					if (["true", "1"].includes(a) && this.props.openReportFlow(this.props.postId, o), r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== Y.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (o ? (this.scrollContainerEl = document.getElementById(q.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : v.a.write(() => {
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
							const s = null === (e = Object(nt.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(re.t)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), v.a.read(() => {
							this.props.isOverlay || Object(P.d)(P.c.CommentsPage, n)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						f.Lb.includes(e) && Object(it.a)(e)
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
						const e = this.props.post && Object(rt.a)(this.props.post);
						this.props.post && this.props.post.numComments ? v.a.read(this.handleScroll) : v.a.write(() => {
							e || Object(O.c)(this.scrollContainerEl, 0), v.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && v.a.write(() => {
							setTimeout(() => {
								Object(O.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = V.b + (this.props.isOverlay ? V.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(q.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? yt : r - e;
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = Ot, this.state.commentNativeAdId && (this.commentAdRef ? this.scrollAdThreshold = this.commentAdRef.offsetTop + this.commentAdRef.clientHeight / 2 : this.scrollAdThreshold = Ot)
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
						const e = document.getElementById(q.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - vt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - vt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), v.a.write(() => {
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
					let a = m.a.createElement(Pt, i);
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
						isEligibleForCommentTruncation: p,
						isLoggedIn: u,
						isNightmodeOn: h,
						isOverlay: b,
						post: g,
						postId: x,
						postSEOV2IdCardVariant: O,
						profileCollectionsEnabled: v,
						sendEvent: y,
						sort: k,
						subredditOrProfile: j,
						isEligibleForNsfwSignupUpsellTreatment: P,
						subredditName: I
					} = this.props;
					if ((null == g ? void 0 : g.isNSFW) && I && P) return m.a.createElement(H.a, {
						contentTitle: Object(ot.c)(I)
					});
					const _ = Object(xe.f)(O);
					if (!g) {
						if (t) return m.a.createElement(Te.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === f.o ? m.a.createElement(Pt, {
							contentGateType: pt.a.PostBlockedForLegalReason
						}) : m.a.createElement(Te.d, {
							postId: x,
							commentId: r,
							apiError: e,
							sort: k
						}) : m.a.createElement(Te.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const E = this.isCommentPermalink(),
						S = g.belongsTo.type === Y.a.PROFILE,
						w = Object(rt.a)(g) && (!S || v),
						L = !u,
						N = j && j.isQuarantined,
						T = !p && !this.state.allCommentsRendered && !c,
						M = l && s;
					return Ct.input.channel.postID = x, m.a.createElement(At, {
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
						isCollectionLayout: w
					}, m.a.createElement(Ye.a, {
						postId: x,
						isNightMode: h,
						isOverlay: b,
						commentId: r
					}), !b && m.a.createElement(ze.a, {
						post: g
					}), N && m.a.createElement(Ke.a, {
						subredditName: j.name
					}), m.a.createElement(Ge.a, null), m.a.createElement("div", {
						className: Object(C.a)(gt.a.PageContentWrapper, {
							[gt.a.LargePageContent]: w,
							[gt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, w && m.a.createElement(jt, {
						isOverlay: b,
						isNightmodeOn: h,
						postId: x
					}), m.a.createElement(ft, {
						condition: w,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: gt.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Qe.c, {
						isCommentPermalink: E,
						isOverlay: b,
						postId: x,
						redditStyle: b,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: y,
						isActionBarAnimationEnabled: a,
						isCountAnimShadowTestEnabled: d,
						isCrosspostRecommendationsExperimentEnabled: l
					}), this.props.canViewCreatorStats && !N && this.props.isCreatorStatsEnabled && m.a.createElement(De.a, {
						post: g,
						subreddit: j
					}), this.state.commentNativeAdId && m.a.createElement("div", {
						ref: this.setCommentAdRef
					}, m.a.createElement(B.a, {
						key: `event-post-id-${g.id}`,
						isOverlay: b,
						postId: this.state.commentNativeAdId,
						scrollerItemRef: this.setAdScrollItemRef
					})), this.renderCommentPanes())), j && !Object(ie.h)(j) && m.a.createElement(U.a, {
						awaitAllCommentsRendered: T,
						contentContainerRef: this.state.layoutRef,
						isOverlay: b,
						post: g,
						subredditOrProfile: j
					}), M && m.a.createElement(F.a, {
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
						isOverlay: x,
						isTypingIndicatorsExperimentEnabled: f,
						location: O,
						onOtherDiscussions: v,
						openLoginModal: y,
						openRegisterModal: k,
						origin: P,
						post: I,
						postId: _,
						replyComment: S,
						sendEvent: w,
						sort: L,
						subredditAboutInfo: N,
						subredditOrProfile: T,
						isTrueblockPCBlockeeEnabled: M
					} = this.props;
					if (!I) return null;
					const A = this.isCommentPermalink(),
						R = [],
						B = I.isLocked && !s,
						F = !(A || I.isArchived || N && N.userIsBanned || I.authorIsBlocked && l || I.unrepliableReason && M);
					let D = !1;
					if (B) R.push(m.a.createElement(Ve.a, {
						key: "commentThreadBanner",
						subredditOrProfile: T
					}));
					else if (I.isArchived) R.push(m.a.createElement(He.a, {
						key: "commentThreadBanner"
					}));
					else if (F && !p && !v)
						if (g) {
							D = f;
							const e = Object(j.a)(b.c.replyToPost, _);
							R.push(m.a.createElement(we.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								isOverlay: x,
								isTypingIndicatorsExperimentEnabled: f,
								key: "form" + e,
								parentCommentId: "replyToPost",
								postId: _,
								submitAction: ({
									validate: t,
									...s
								}, n) => t ? E.t(_, r, e, s, n) : E.n(_, r, e, s, n),
								submitButtonText: o.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else R.push(m.a.createElement(Le.a, {
							key: "loggedOutCommentForm",
							location: O,
							openLoginModal: y,
							openRegisterModal: k,
							origin: P
						}));
					if (I.contestMode && R.push(m.a.createElement(qe.a, {
							hasModeratorPostPermissions: a,
							key: "contestModeBanner"
						})), p || v || (this.props.isSubredditDiscoveryCrosspostEnabled ? R.push(m.a.createElement(ut.a, {
							commentId: n,
							commentsPageKey: r,
							isOverlay: x,
							key: "commentNavigation",
							postId: _
						}), m.a.createElement(Re.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: x,
							key: "commentSort",
							location: O,
							postId: _,
							sort: L,
							suggestedSort: I.suggestedSort
						})) : R.push(m.a.createElement(Re.b, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: x,
							key: "commentSort",
							location: O,
							postId: _,
							sort: L,
							suggestedSort: I.suggestedSort
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
							if (v) R.push(m.a.createElement(kt, {
								commentSort: L,
								key: "otherDiscussions",
								postId: _,
								isOverlay: x,
								postPermalink: I.permalink
							}));
							else if (p) {
						if (T && T.id) {
							const e = S ? Object(j.a)(b.c.replyToComment, S.id) : Object(j.a)(b.c.replyToPost, _),
								s = It({
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
								subredditId: T.id
							}, ({
								scrollToBottom: t
							}) => g ? m.a.createElement(Ae.a, {
								key: "chatCommentsForm",
								postId: _,
								replyComment: S,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: w
							}) : m.a.createElement(Le.a, {
								key: "loggedOutCommentForm",
								className: gt.a.ChatLoggedOutForm,
								location: O,
								openLoginModal: y,
								openRegisterModal: k,
								origin: P
							})))
						}
					} else R.push(m.a.createElement("div", {
						className: Object(C.a)(gt.a.CommentsPaneWrapper, {
							[gt.a.mIsInOverlay]: x
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Fe.a, xt({}, this.props, {
						shouldTruncateComments: h && u,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: I.numComments,
						onClick: this.handleContentClick
					}), m.a.createElement(Ne.a, {
						commentId: n,
						commentsPageKey: r,
						postId: _,
						onAllCommentsRendered: this.onAllCommentsRendered,
						renderedInOverlay: x
					})))), e && d ? R.push(m.a.createElement(Te.e, {
						key: "commentsErrorState",
						postId: _,
						commentId: n,
						sort: L,
						apiError: e
					})) : !i && t && R.push(m.a.createElement(Te.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					else R.push(m.a.createElement(Te.e, {
						key: "errorState",
						postId: _,
						commentId: n,
						sort: L,
						apiError: e
					}));
					else this.didRenderLoading = !0, R.push(m.a.createElement(Te.a, {
						isAvatarsInCommentsEnabled: c,
						key: "commentsPlaceholder"
					}));
					if (D) {
						const e = R.shift();
						R.push(e)
					}
					return m.a.createElement(X.a.Provider, {
						value: this.sendEventWithName
					}, R)
				}
			}
			const Tt = Et(Object(z.b)(Lt(Object($e.c)(Nt)))),
				Mt = y.a.wrapped(Be.a, "DetailsPageSidebar", gt.a),
				At = e => {
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
					if (!a && !d) return m.a.createElement(lt.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(Be.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement(ct.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(Be.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? V.i : Q.a;
					return m.a.createElement(mt.a, {
						containerRef: n,
						maxWidth: V.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(We.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object(ie.h)(u) && m.a.createElement(Ze.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(Mt, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(ht.a)(_t)
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
				x = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				C = Object(a.b)(x);

			function f(e) {
				return C(t => {
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
			const l = c(o.Gb, !0),
				m = c(o.Gb, !1),
				p = c(o.Hb, !0),
				u = (c(o.Hb, !1), Object(n.a)(l, p, (e, t) => e === o.Yb.Enabled || t === o.Zb.Enabled))
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
				experimentName: n.we
			}) === n.De.Enabled
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
						[o.Vb.Bottom_cell_dismissible]: e,
						[o.Vb.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.Vb.Bottom_sheet]: e
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
						experimentName: n.jf
					}) === n.Wc
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.kf
					}) === n.Wc
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.if
					});
					return t === n.bf.UIChangesOnly || t === n.bf.TypingIndicators || t === n.bf.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
							experimentName: n.if
						}),
						s = null == t ? void 0 : t.variant;
					return s === n.bf.TypingIndicators || s === n.bf.IndicatorsPlusCTA
				},
				m = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.if
					});
					return (null == t ? void 0 : t.variant) === n.bf.IndicatorsPlusCTA
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
					return Boolean(t) && !Object(o.nf)(t)
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
			e.exports = JSON.parse('{"id":"b0a64ef270d7"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"296cec3bf07d"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"7d681659aaf5"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"2a407ab9ff71"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage.7755459d1286afb22c47.js.map