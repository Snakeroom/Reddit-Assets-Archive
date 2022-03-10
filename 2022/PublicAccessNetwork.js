// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.5bb01266f4e936ffda8d.js
// Retrieved at 3/10/2022, 10:00:26 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PublicAccessNetwork"], {
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					o = null,
					a = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function r(e) {
					return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
				}

				function n(e) {
					e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
				}

				function i(e) {
					t = !1
				}

				function d() {
					document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
				}

				function c(e) {
					e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
				}
				document.addEventListener("keydown", (function(s) {
					s.metaKey || s.altKey || s.ctrlKey || (r(e.activeElement) && n(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), d())
				}), !0), d(), e.addEventListener("focus", (function(e) {
					var s, o, i;
					r(e.target) && (t || (s = e.target, o = s.type, "INPUT" === (i = s.tagName) && a[o] && !s.readOnly || "TEXTAREA" === i && !s.readOnly || s.isContentEditable)) && n(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					r(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(o), o = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				a = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const r = Object(a.e)(e),
					n = encodeURIComponent(`${t}${r}`);
				return `${o.a.accountManagerOrigin}${s||"/login"}?dest=${n}`
			}
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
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(a.c),
				n = Object(o.a)(a.b),
				i = Object(o.a)(a.a)
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			}));
			var o = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/categories/index.ts"),
				r = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
				n = s("./src/reddit/constants/categories.tsx"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/constants/experiments.ts");
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				h = s("./src/reddit/actions/category/constants.ts");
			Object(o.a)({
				features: {
					categories: a.a
				}
			});
			const b = Object(r.a)(h.c),
				v = Object(r.a)(h.b),
				g = Object(r.a)(h.a),
				f = () => async (e, t, {
					apiContext: s
				}) => {
					const o = t(),
						a = Object(p.h)(o),
						r = Object(p.g)(o);
					if (a || r) return;
					e(b());
					const u = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: i.jb.GET
					}))(s());
					if (u.ok) {
						const {
							categories: t,
							categoryIds: s
						} = (e => {
							const t = {},
								s = [];
							return e.forEach((e, o) => {
								const a = {
									attr: e.category_attr,
									color: e.category_color || n.a[o % n.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(m.sf)(e.category_name)
								};
								s.push(a.id), t[a.id] = a
							}), {
								categories: t,
								categoryIds: s
							}
						})(u.body);
						e(v({
							categories: t,
							categoryIds: s
						}))
					} else e(g(u.error))
				}, S = (Object(r.a)(h.g), Object(r.a)(h.f), Object(r.a)(h.e), Object(r.a)(h.d)), O = e => async (t, s) => {
					const o = Object(p.j)(s(), {
						id: e
					});
					t(S({
						categoryId: e,
						rank: o + 1
					})), Object(u.mb)(Object(p.d)(s()))
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
				return u
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				n = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/OtherDiscussions.json"),
				d = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const c = Object(o.a)(r.a),
				l = Object(o.a)(r.b),
				m = Object(o.a)(r.c),
				u = (e, t) => async (s, o, {
					gqlContext: r
				}) => {
					const u = o(),
						p = Object(a.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = u.listings.postOrder.ids[p],
						b = !!u.listings.postOrder.api.error[p];
					if (h && !b) return;
					s(m({
						key: p
					}));
					const v = await ((e, t) => Object(n.a)(e, {
						...i,
						variables: t
					}))(r(), t);
					Object(d.a)({
						getState: o,
						onFailure: e => s(c(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: v
					})
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return dt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return ct
			})), s.d(t, "commentsPagePending", (function() {
				return lt
			})), s.d(t, "commentsPageLoaded", (function() {
				return mt
			})), s.d(t, "commentsPageFailed", (function() {
				return ut
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return pt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return ht
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return bt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return vt
			})), s.d(t, "commentsPageRequested", (function() {
				return gt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return ft
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return St
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Ot
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/discoveryUnit.ts"),
				n = s("./src/reddit/actions/pages/subreddit.ts"),
				i = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				c = s("./src/reddit/actions/subredditSettings.ts"),
				l = s("./src/reddit/endpoints/governance/posts.ts"),
				m = s("./src/reddit/endpoints/page/commentsPage.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				p = s("./src/redditGQL/operations/CommentsPageExtra.json");
			var h = s("./src/reddit/endpoints/page/subredditPage.ts"),
				b = s("./src/reddit/endpoints/profile/info.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/pageTitle/index.ts"),
				S = s("./src/reddit/actions/economics/helpers/async.ts"),
				O = s("./src/reddit/actions/externalAccount.ts"),
				_ = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				C = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				w = s("./src/reddit/actions/platform.ts"),
				E = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/actions/profile/index.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				x = s("./src/reddit/actions/subreddit/questions.ts"),
				j = s("./src/reddit/actions/toaster.ts"),
				I = s("./src/reddit/constants/adEvents.ts"),
				L = s("./src/reddit/constants/graphql.ts"),
				R = s("./src/reddit/constants/parameters.ts"),
				P = s("./src/reddit/constants/posts.ts"),
				N = s("./src/reddit/helpers/commentList/index.ts"),
				T = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				M = s("./src/reddit/models/Comment/index.ts"),
				A = s("./src/reddit/models/Media/index.ts"),
				D = s("./src/reddit/models/Subreddit/index.ts"),
				B = s("./src/reddit/models/User/index.ts"),
				F = s("./src/reddit/selectors/category.ts"),
				V = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				U = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				H = s("./src/reddit/selectors/experiments/postSeo.ts"),
				K = s("./node_modules/reselect/es/index.js"),
				q = s("./src/reddit/constants/experiments.ts"),
				G = s("./src/reddit/helpers/chooseVariant/index.ts"),
				W = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				J = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				Q = s("./src/reddit/selectors/platform.ts"),
				X = s("./node_modules/fbt/lib/FbtPublic.js"),
				z = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Z = s("./src/reddit/selectors/user.ts");
			const Y = new Set([v.g.AntiEvilOps, v.g.AutomodFiltered, v.g.CommunityOps, v.g.ContentTakedown, v.g.CopyrightTakedown, v.g.Moderator, v.g.Reddit]),
				$ = new Set([v.g.Author, v.g.AuthorDeleted]),
				ee = Object(K.a)(W.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return Y.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = X.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(z.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== A.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				te = Object(K.a)(W.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return $.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = X.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(z.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== A.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				se = Object(K.a)(Z.k, W.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				oe = Object(K.a)(Q.f, W.a, ee, te, J.a, se, J.b, (e, t, s, o, a, r, n) => {
					if (!e || !t || a) return !1;
					if (o) return !0;
					const i = r || n,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || i || d)
				});
			var ae = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				re = s("./src/reddit/selectors/posts.ts"),
				ne = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/lib/makeActionCreator/index.ts"),
				de = s("./src/lib/makeCommentsPageKey/index.ts"),
				ce = s("./src/reddit/actions/ads/index.ts"),
				le = s("./src/reddit/helpers/canonicalUrls.ts"),
				me = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ue = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				pe = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				he = s("./src/lib/performanceTimings/index.tsx"),
				be = s("./src/reddit/actions/gold/powerups.ts"),
				ve = s("./src/lib/makeListingKey/index.ts"),
				ge = s("./src/reddit/actions/googleQASchema/constants.ts");
			const fe = Object(ie.a)(ge.b),
				Se = Object(ie.a)(ge.a);
			var Oe = s("./src/reddit/actions/linkedPosts/constants.ts");
			const _e = Object(ie.a)(Oe.a),
				Ce = Object(ie.a)(Oe.c),
				we = Object(ie.a)(Oe.b);
			var Ee = s("./src/reddit/actions/otherDiscussions/index.ts"),
				ye = s("./src/reddit/actions/subreddit/constants.ts"),
				ke = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var xe = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: a
				}) => {
					try {
						t({
							altText: a && a.media && (a.media.still && a.media.still.altText || a.media.obfuscated && a.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (r) {
						s(r)
					}
				},
				je = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Le = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Re = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: a
				}) => {
					try {
						const s = [],
							r = {},
							n = {};
						if (!a || !a.linked) return;
						const i = e(),
							d = i.posts && i.posts.models,
							c = Object(je.a)(o),
							l = a.linked.posts && a.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Ie.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(v.n)(e)) {
								const {
									subreddit: t
								} = e;
								n[t.id] = Object(Le.a)(t)
							}
						}
						t({
							dist: a.linked.posts && a.linked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: r,
							postIds: s,
							subreddits: n
						})
					} catch (r) {
						s(r)
					}
				},
				Pe = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Ne = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Te = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Me = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: o,
					options: a,
					postId: r,
					subreddit: n
				}) => {
					try {
						if (!n) return;
						const o = n.elements || n.posts,
							i = t(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, o = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: o
								}
							})(o, i.posts && i.posts.models),
							c = Object(Ne.a)(d),
							l = Te(c),
							m = o.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: h
							} = a,
							b = e && r ? Object(je.a)(r, !0) : Object(ve.a)(h, g.W[p], {
								t: u
							});
						s({
							dist: o.dist,
							key: b,
							meta: i.meta,
							postIds: m,
							posts: l
						})
					} catch (i) {
						o(i)
					}
				},
				Ae = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				De = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Be = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: a
				}) => {
					try {
						const s = [],
							r = {},
							n = {};
						if (!a || !a.nsfwLinked) return;
						const i = e(),
							d = i.posts && i.posts.models,
							c = Object(De.a)(o),
							l = a.nsfwLinked.posts && a.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Ie.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(v.n)(e)) {
								const {
									subreddit: t
								} = e;
								n[t.id] = Object(Le.a)(t)
							}
						}
						t({
							dist: a.nsfwLinked.posts && a.nsfwLinked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: r,
							postIds: s,
							subreddits: n
						})
					} catch (r) {
						s(r)
					}
				},
				Fe = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ve = Object(ie.a)(Fe.b),
				Ue = Object(ie.a)(Fe.a);
			var He = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ke = Object(ie.a)(He.b),
				qe = Object(ie.a)(He.a),
				Ge = Object(ie.a)(ye.j),
				We = Object(ie.a)(ye.i),
				Je = (Object(ie.a)(ye.r), Object(ie.a)(ye.q), e => async (t, s, {
					gqlContext: o
				}) => {
					var a, r, n, i;
					const {
						includeNSFWListingBelowExperiment: d,
						includeListingBelowExperiment: c,
						includeOtherDiscussions: l,
						includePostFeed: m,
						includePostQASchemaEligibilityFlag: p,
						listingBelowExperimentVariant: h,
						postId: b,
						range: v,
						sort: f,
						subredditName: S
					} = e, O = Object(ve.a)(b, null, {
						isOtherDiscussions: !0
					}), _ = s(), C = Object(re.z)(_, {
						listingKey: O
					}), w = l && (!C || 0 === C.length), E = Object(ve.a)(S, g.W[f], {
						t: v
					}), y = Object(re.z)(_, {
						listingKey: E
					}), k = m && (c || !y || 0 === y.length), x = c, j = d, I = Object(re.G)(_, {
						postId: b
					}), L = !!I && !!I.media && (Object(A.K)(I.media) || Object(A.F)(I.media)) && !I.media.altText;
					if (!(w || k || x || j || L || p)) return;
					w && t(Object(Ee.d)({
						key: O
					}));
					const R = await ((e, t) => Object(u.a)(e, {
							...ke,
							variables: t
						}))(o(), e),
						P = R.body,
						N = Object(Ae.a)(h),
						T = x && !!(null === (n = null === (r = null === (a = P.data) || void 0 === a ? void 0 : a.post) || void 0 === r ? void 0 : r.linked) || void 0 === n ? void 0 : n.isEligible),
						M = x && (N || !T);
					p && (R.ok ? P.data && P.data.post && t(fe({
						postId: b,
						isEligibleForQASchema: null !== (i = P.data.post.isEligibleForQASchema) && void 0 !== i && i
					})) : t(Se())), w && Object(Pe.a)({
						getState: s,
						onFailure: e => t(Object(Ee.b)(e)),
						onSuccess: e => t(Object(Ee.c)(e)),
						postId: b,
						response: R
					}), (k && !x || M) && (R.ok ? P.data && Me({
						getState: s,
						isLinkedPostsFallback: M,
						onFailure: e => t(We(e)),
						onSuccess: e => t(Ge(e)),
						options: e,
						postId: b,
						subreddit: P.data.subreddit
					}) : t(We(R.error))), x && T && !N && R.ok && P.data && Re({
						getState: s,
						onFailure: e => t(we(e)),
						onSuccess: e => t(Ce(e)),
						postId: b,
						post: P.data.post
					}), j && R.ok && Be({
						getState: s,
						onFailure: e => t(qe(e)),
						onSuccess: e => t(Ke(e)),
						postId: b,
						post: P.data.post
					}), L && R.ok && P.data && xe({
						getState: s,
						onFailure: e => t(Ue(e)),
						onSuccess: e => t(Ve(e)),
						postId: b,
						post: P.data.post
					}), x && t(_e({
						postId: b,
						isEligibleForLinkedPosts: T
					}))
				}),
				Qe = e => {
					var t, s;
					const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						a = o && Object(v.t)(o),
						{
							sortToUse: r
						} = Object(T.a)(e, a);
					return (!r || r === g.u.CONFIDENCE) && Object(G.c)(e, {
						experimentEligibilitySelector: () => Object(Z.N)(e),
						experimentName: q.B
					}) === q.D.Enabled
				};
			var Xe = s("./src/reddit/selectors/chatPost.ts"),
				ze = s("./src/reddit/selectors/seo/index.ts"),
				Ze = s("./src/reddit/actions/pages/constants.ts"),
				Ye = s("./src/lib/initializeClient/installReducer.ts"),
				$e = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				et = s("./src/reddit/reducers/pages/comments/index.ts"),
				tt = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				st = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				ot = s("./src/reddit/selectors/i18n/index.ts"),
				at = s("./src/reddit/selectors/moderatorPermissions.ts"),
				rt = s("./src/reddit/helpers/locales.ts"),
				nt = s("./src/reddit/selectors/experiments/countrySites.ts"),
				it = s("./src/reddit/selectors/meta.ts");
			Object(Ye.a)({
				pages: {
					comments: et.a
				}
			}), Object(Ye.a)({
				features: {
					modUserNotes: $e.a
				}
			});
			const dt = 25,
				ct = 100,
				lt = Object(ie.a)(Ze.h),
				mt = Object(ie.a)(Ze.f),
				ut = Object(ie.a)(Ze.e),
				pt = Object(ie.a)(Ze.i),
				ht = (e, t, s) => {
					const o = !e,
						a = Object(re.G)(t, {
							postId: s
						}).belongsTo,
						r = Object(ne.K)(t, {
							identifier: a
						}),
						n = Object(ze.c)(t, {
							identifier: a
						}),
						i = !!Object(Ae.c)(t),
						d = Object(ot.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return i ? (c.listingBelow = n || o, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (n || o) && (!Object(D.h)(r) && !Object(Xe.d)(t, {
						postId: s
					}) && !!r || !Object(Q.i)(t) && Object(H.e)(t)), e && (c.postQASchema = Object(H.d)(t)), c
				},
				bt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				vt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				gt = e => async (t, s) => {
					var r, n;
					const {
						partialPostId: c,
						partialCommentId: l
					} = e.params, {
						subredditName: m
					} = e.params || "", u = c ? Object(v.t)(c) : "", p = l && Object(M.h)(l), {
						path: h,
						queryParams: b
					} = e, S = Object(C.d)(h), {
						instanceId: _
					} = b, {
						hasSortParam: j,
						sortToUse: I
					} = Object(T.a)(s(), u), N = null === (n = null === (r = Object(Q.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.route.chunk, D = ["context", "depth", "limit", R.f].reduce((e, t) => {
						const s = parseInt(b[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: m,
						hasSortParam: j,
						instanceId: _,
						include_categories: !0
					});
					j && (D.sort = I), D.onOtherDiscussions = S, t(E.r(u)), await t(ft(u, p, D, I));
					const B = s().posts.models[u],
						V = Object(Z.O)(s());
					if (B && "subreddit" === B.belongsTo.type) {
						const e = B.belongsTo.id,
							o = Object(he.i)(() => t(Object(be.m)(e, {
								fullData: !0,
								includeIdentity: V
							})), {
								name: "subredditPowerupsRequested",
								page: N,
								isLoggedIn: V
							});
						await o;
						const a = s();
						if (!Object(Q.i)(a)) {
							Object(tt.a)(a) && t(Object(x.b)(e))
						}
						Object(U.a)(a, e) && await t(Object(d.b)(u))
					}
					if (B) {
						const r = ((e, t) => {
								const s = Object(re.U)(e, {
										postId: t
									}),
									o = Object(re.G)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), u),
							n = Object(ne.K)(s(), {
								identifier: B.belongsTo
							});
						if (n && (e => q.He.Redirect === Object(G.b)(e, {
								experimentEligibilitySelector: oe,
								experimentName: q.Ae
							}))(s())) return void t(Object(o.c)(n.url));
						if ((B.media && B.media.type) === A.o.LIVEVIDEO) {
							const e = `/rpan${B.belongsTo.type===P.a.SUBREDDIT?n.url:"/"}${Object(v.u)(B.id)}`;
							return void t(Object(o.c)(e))
						}
						if (B.belongsTo.type !== P.a.SUBREDDIT || B.isSponsored) {
							if (B.belongsTo.type === P.a.PROFILE) {
								const e = Object(he.i)(() => t(y.d(n.name)), {
									name: "getProfileInfo",
									page: N,
									isLoggedIn: V
								});
								await e
							}
						} else {
							if (!!!Object(ne.R)(s(), {
									subredditId: B.belongsTo.id
								})) {
								const e = Object(he.i)(() => t(k.o(n.name)), {
									name: "getSubredditRules",
									page: N,
									isLoggedIn: V
								});
								await e
							}
						}
						const d = ht(!1, s(), u),
							c = S;
						if (bt(c, d)) {
							Object(me.e)(me.a.LinkedPosts);
							const e = Object(me.c)(me.a.LinkedPosts);
							Object(me.e)(me.a.NsfwLinkedPosts);
							const o = Object(me.c)(me.a.NsfwLinkedPosts),
								a = {
									adContext: {
										layout: L.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: u
									},
									range: g.hc.WEEK.toUpperCase(),
									sort: g.P.TOP,
									subredditName: n.name
								},
								r = {
									postId: u
								},
								i = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Ae.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object(st.a)(s())
								},
								m = vt(d);
							Object(he.i)(() => t(Je({
								...r,
								...a,
								...i,
								...l,
								...m,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: V,
								page: N
							});
							0
						}
						t(Object(O.p)()), t(w.m({
							title: r
						}));
						const l = s().posts.instances[u] ? e.queryParams.instanceId : B.postId;
						t(Object(i.b)(l)); {
							const e = Object(F.c)(s(), {
								subredditName: n.name
							});
							await Promise.all(e.map(e => t(a.b(e))))
						}
					} else t(w.m({
						title: f.e()
					}));
					const {
						routePrefix: H
					} = e.params;
					P.b[H] === P.a.PROFILE ? Object(le.d)(s(), t, e) : Object(le.b)(s(), t, e)
				}, ft = (e, t, s, o) => async (a, i, d) => {
					var c, v;
					const f = i(),
						O = Object(de.a)(e, t, s),
						{
							subredditName: C
						} = s,
						y = f.pages.comments.keyToHeadCommentId.hasOwnProperty(O),
						k = f.pages.comments.api.fullyLoaded[O],
						x = f.pages.comments.api.error[O],
						L = f.pages.comments.api.pending[O],
						R = !Object(Z.N)(f),
						P = Object(Z.k)(f),
						T = o === g.u.CHAT,
						M = !!f.platform.lastPage;
					if ((L || y && !x) && !(T && M)) {
						if (y && !f.sidebarPromotedPosts.firstFetch) {
							const e = Object(Q.i)(f) ? pe.a.COMMENTS_OVERLAY : pe.a.COMMENTS;
							window.addEventListener("load", () => {
								a(Object(ce.b)(e))
							})
						}
						return void(k || a(Ot(e, t, s)))
					}
					a(r.g());
					const A = f.user.prefs.commentMode;
					a(lt({
						key: O,
						postId: e,
						commentMode: A
					}));
					const D = {
						...s,
						...T ? {
							sort: g.u.LIVE
						} : R ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(re.G)(i(), {
							postId: e
						});
						t && t.numComments && t.numComments > ct && (D.truncate = dt)
					}
					const F = null === (v = null === (c = Object(Q.b)(f)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === v ? void 0 : v.route.chunk,
						U = Object(he.i)(() => Object(m.a)(d.apiContext(), e, t, D, Object(V.a)(i()), Qe(i())), {
							name: "fetchCommentsPage",
							isLoggedIn: !R,
							page: F
						}),
						H = !R && P && Object(he.i)(() => Object(b.d)(d.gqlContext(), Object(B.e)(P)), {
							name: "fetchProfileKarma",
							isLoggedIn: !R,
							page: F
						}) || null,
						K = Object(he.i)(() => (async function(e, t) {
							return Object(u.a)(e, {
								...p,
								variables: t
							})
						})(d.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !R,
							page: F
						}),
						[q, G, W] = await Promise.all([U, H, K]);
					let J;
					if (a(Object(w.n)(q.status)), q.ok) {
						const t = Object.keys(q.body.posts).filter(e => !!q.body.posts[e].isMeta),
							s = q.body.posts[e];
						if (t.length) {
							const e = Object(he.i)(() => Object(l.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: F,
									isLoggedIn: !R
								}),
								o = await e;
							o.ok && (J = o.body)
						}
						if (G && G.ok) {
							const {
								data: e
							} = G.body, t = {
								karma: {
									...b.a
								}
							};
							if (Object(b.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							q.body && q.body.account && Object.assign(q.body.account, t)
						}
						if (W && W.ok) {
							const {
								data: e
							} = W.body;
							if (e.postInfoById && "SubredditPost" === e.postInfoById.__typename) {
								const t = e.postInfoById.subreddit.detectedLanguage;
								Object(it.d)(f) && t && Object(nt.c)(f) && await Object(rt.a)(t, a)
							}
						}
						const o = Object(N.a)(q.body, e, f);
						a(mt({
							key: O,
							postId: e,
							meta: f.meta,
							governance: J,
							shouldCollapse: o,
							...q.body
						}))
					} {
						const o = Object(re.G)(i(), {
							postId: e
						});
						o && q.body.comments && Object.keys(q.body.comments).length < o.numComments ? a(Ot(e, t, s)) : q.ok && a(St({
							key: O
						}));
						const r = Object(Q.i)(f) ? pe.a.COMMENTS_OVERLAY : pe.a.COMMENTS;
						a(Object(ce.b)(r))
					}
					if (q.ok) {
						a(j.g(O));
						const t = Object(re.G)(i(), {
								postId: e
							}),
							s = Object.keys(q.body.comments);
						if (a(E.z(t, I.a.CommentsView)), Object(at.h)(i(), {
								subredditId: t.belongsTo.id
							}) && a(Object(_.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && q.body.comments) {
							const e = Object(he.i)(() => a(Object(S.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: F,
								isLoggedIn: !R
							});
							await e
						}
					} else {
						let e;
						C && (a(Object(n.subredditPending)({
							key: O
						})), e = await Object(ue.a)("subreddit", () => Object(h.a)(d.apiContext(), C, {})), a(Object(w.n)(e.status)), a(Object(n.handleSubredditPageApiError)(e, C))), a(ut({
							error: q.error,
							key: O,
							...e ? e.body : q.body
						}))
					}
				}, St = Object(ie.a)(Ze.g), Ot = (e, t, s) => async (o, a, r) => {
					const n = Object(de.a)(e, t, s),
						i = a(),
						d = Object(Z.O)(i),
						l = Object(Z.k)(i),
						u = Object(m.a)(r.apiContext(), e, t, s, Object(V.a)(i), Qe(i)),
						p = d && l && Object(b.d)(r.gqlContext(), Object(B.e)(l)) || null,
						[h, v] = await Promise.all([u, p]);
					if (o(Object(w.n)(h.status)), h.ok) {
						if (v && v.ok) {
							const {
								data: e
							} = v.body, t = {
								karma: {
									...b.a
								}
							};
							if (Object(b.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							h.body && h.body.account && Object.assign(h.body.account, t)
						}
						const t = Object(N.a)(h.body, e, i);
						o(mt({
							key: n,
							postId: e,
							meta: i.meta,
							shouldCollapse: t,
							...h.body
						})), o(St({
							key: n
						}));
						const s = a().posts.models[e],
							r = s && Object(re.U)(a(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(ae.a)(i, {
							subredditId: r.id
						}) && o(Object(c.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && h.body.comments && await o(Object(S.a)({
							commentIds: Object.keys(h.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(ut({
						error: h.error,
						key: n,
						...h.body
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/page.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "publicAccessNetworkRequested", (function() {
				return i
			}));
			var o = s("./src/lib/pageTitle/index.ts"),
				a = (s("./src/reddit/actions/pages/subreddit.ts"), s("./src/reddit/actions/platform.ts")),
				r = (s("./src/reddit/actions/publicAccessNetwork/streams.ts"), s("./src/reddit/actions/users.ts")),
				n = s("./src/reddit/selectors/user.ts");
			const i = e => async (e, t) => {
				const s = t(),
					i = o.k();
				e(a.m({
					title: i
				})), Object(n.O)(s) || await e(r.t())
			}
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			}));
			var o = s("./node_modules/uuid/v4.js"),
				a = s.n(o),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(r.a)(n.B),
				d = e => async t => {
					t(i(e))
				}, c = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(i({
						correlationId: a()()
					}))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Z
			})), s.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), s.d(t, "removalReasonsFailed", (function() {
				return $
			})), s.d(t, "removalReasonsRequested", (function() {
				return ee
			})), s.d(t, "removalReasonAddedPending", (function() {
				return te
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), s.d(t, "addRemovalReason", (function() {
				return ae
			})), s.d(t, "editRemovalReasonPending", (function() {
				return re
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ne
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ie
			})), s.d(t, "editRemovalReason", (function() {
				return de
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), s.d(t, "deleteRemovalReason", (function() {
				return ue
			})), s.d(t, "removedItemsSelected", (function() {
				return pe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return be
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return ge
			})), s.d(t, "removalReasonMessagePending", (function() {
				return fe
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Se
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Oe
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), s.d(t, "submitRemovalReason", (function() {
				return Ce
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return we
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const n = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				u = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var b = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case n:
					case i:
					case c:
					case l:
					case u:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case m:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var v = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case n:
						case c:
						case u:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case i:
						case d:
						case l:
						case m:
						case p:
						case h:
							return !1;
						default:
							return e
					}
				},
				g = Object(r.c)({
					error: b,
					pending: v
				});
			const f = {};
			var S = (e = f, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: s
						} = t.payload, {
							data: o
						} = s;
						return {
							...e,
							...o
						}
					}
					case i:
					case l: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case p: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: o,
							...a
						} = e;
						return a
					}
					default:
						return e
				}
			};
			const O = {};
			var _ = (e = O, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: s,
							response: o
						} = t.payload, {
							order: a
						} = o;
						return {
							...e,
							[s]: a
						}
					}
					case i: {
						const {
							subredditId: s,
							reason: o
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], o.id]
						}
					}
					case p: {
						const {
							subredditId: s,
							reasonId: o
						} = t.payload, a = [...e[s]].filter(e => e !== o);
						return {
							...e,
							[s]: a
						}
					}
					default:
						return e
				}
			};
			var C = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				w = Object(r.c)({
					api: g,
					models: S,
					reasonOrder: _,
					removedItemIds: C
				}),
				E = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				x = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/bulkActions/index.ts"),
				I = s("./src/reddit/actions/comment/index.ts"),
				L = s("./src/reddit/actions/comment/authoring.ts"),
				R = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/post.ts"),
				T = s("./src/reddit/actions/toaster.ts"),
				M = s("./src/reddit/constants/modals.ts"),
				A = s("./src/lib/makeApiRequest/index.ts"),
				D = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				F = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(A.a)(Object(D.a)(e, [B.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				U = (e, t, s) => Object(A.a)(Object(D.a)(e, [B.a]), {
					endpoint: Object(F.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: E.jb.POST,
					type: "json",
					data: t
				});
			var H = s("./src/reddit/helpers/isPost.ts"),
				K = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = s("./src/reddit/helpers/routeKey/index.ts"),
				G = s("./src/reddit/models/ModQueue/index.ts"),
				W = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/RemovalReason/index.ts"),
				Q = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				z = s("./src/reddit/selectors/platform.ts");
			Object(a.a)({
				features: {
					removalReasons: w
				}
			});
			const Z = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(y.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: o
				}) => {
					const a = s().subreddits.models[e].name;
					t(Z());
					const r = await ((e, t) => Object(A.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.jb.GET
					}))(o(), a);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t($(r.error))
				}, te = Object(y.a)(n), se = Object(y.a)(i), oe = Object(y.a)(d), ae = (e, t) => async (s, a, {
					apiContext: r
				}) => {
					const n = a().subreddits.models[e].name;
					s(te());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.jb.POST,
						data: s
					}))(r(), n, t);
					if (i.ok) {
						const {
							id: a
						} = i.body, r = {
							...t,
							id: a
						};
						s(se({
							subredditId: e,
							reason: r
						})), s(Object(T.f)({
							kind: Q.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(oe(i.error))
				}, re = Object(y.a)(c), ne = Object(y.a)(l), ie = Object(y.a)(m), de = (e, t) => async (s, a, {
					apiContext: r
				}) => {
					const n = a().subreddits.models[e].name;
					s(re());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: E.jb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(r(), n, t);
					i.ok ? (s(ne({
						subredditId: e,
						reason: t
					})), s(Object(T.f)({
						kind: Q.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(i.error))
				}, ce = Object(y.a)(u), le = Object(y.a)(p), me = Object(y.a)(h), ue = (e, t) => async (s, a, {
					apiContext: r
				}) => {
					const n = a().subreddits.models[e].name;
					s(ce());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: E.jb.DELETE
					}))(r(), n, t);
					i.ok ? (s(le({
						subredditId: e,
						reasonId: t
					})), s(Object(T.f)({
						kind: Q.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(i.error))
				}, pe = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, o, {
					apiContext: a
				}) => {
					const r = o();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(P.i)(M.a.ADD_REMOVAL_REASON))
				}, be = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), fe = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, s, o, a) => async (r, n, {
					apiContext: i
				}) => {
					const d = n(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(H.a)(l) ? J.e.Post : J.e.Comment,
						u = m === J.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === J.e.Post ? N.S : I.i;
					if (!u || !c) return !1;
					r(be()), r(p({
						[l]: {
							modNote: a,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const h = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						b = await V(i(), h);
					if (b.ok) {
						if (r(ve()), t) {
							r(fe());
							const a = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								n = await U(i(), Object(J.h)(a, m), m);
							if (n.ok) {
								if (o === J.f.Public) {
									if (r(Oe()), n.body) {
										const e = Object(K.a)(n.body, c),
											t = {
												comment: e,
												parentId: l
											},
											s = Object(z.f)(d),
											o = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let a = s && o && Object(q.a)(o, d, d.posts.models[e.postId]);
										if (a || (a = Object(k.a)(e.postId, null, {
												sort: E.v,
												hasSortParam: !0
											})), m === J.e.Post) {
											const s = Object(x.a)(W.c.replyToPost, l);
											r(Object(L.o)({
												...t,
												headCommentId: Object(X.w)(d, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: s
											}));
											const o = d.postStickiedComments.data[l];
											r(Object(R.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), o && o !== e.id && r(Object(I.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (m === J.e.Comment) {
											const e = Object(x.a)(W.c.replyToComment, u.id),
												s = Object(X.j)(d, {
													commentId: l,
													commentsPageKey: a
												});
											r(Object(L.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: a,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else r(Se());
								return !0
							}
							return r(_e(n.error)), !1
						}
					} else r(ge(b.error)), r(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, we = (e, t, s, a, r) => async (n, i, {
					apiContext: d
				}) => {
					const c = i(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					n(be());
					const m = Object(T.f)({
							kind: Q.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						u = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						p = await V(d(), u);
					if (p.ok) {
						const o = {
							ids: e,
							operation: G.a.RemovalReason,
							username: l,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (n(Object(j.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: a
								},
								r = await U(d(), Object(J.h)(o, J.e.Bulk), J.e.Bulk);
							r.ok ? (n(Se()), n(m)) : n(_e(r.error))
						} else n(m)
					} else n(ge(p.error))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(o.a)(a.a),
				n = Object(o.a)(a.b)
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(n.b, {
				className: Object(r.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
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
				a = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authControls.ts"),
				m = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: o,
				openRegisterModal: d,
				origin: m,
				sendEvent: h
			}) => a.a.createElement("div", {
				className: Object(r.a)(e, u.a.Wrapper, {
					[u.a.LiveStreamingWrapper]: t
				})
			}, a.a.createElement("span", {
				className: Object(r.a)(u.a.Copy, {
					[u.a.LiveStreamingCopy]: t
				})
			}, p._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), a.a.createElement("div", {
				className: u.a.CTAButtons
			}, a.a.createElement(c.t, {
				className: u.a.LoginLink,
				kind: c.b.ExternalLink,
				priority: c.c.Secondary,
				href: Object(i.a)(s, m, "/login"),
				onClick: e => {
					Object(n.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), h(Object(l.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, p._("Log In", null, {
				hk: "ZR3pC"
			})), a.a.createElement(c.t, {
				className: Object(r.a)(u.a.SignupLink, {
					[u.a.LiveStreamingSignupLink]: t
				}),
				kind: c.b.ExternalLink,
				priority: c.c.Primary,
				href: Object(i.a)(s, m, "/register"),
				onClick: e => {
					Object(n.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, p._("Sign Up", null, {
				hk: "48wH4o"
			})))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2SvhnxZBM2RoeILBCJaD5n",
				isAnimated: "VI293JaWpM6E2N7qA18GU",
				gildIcon: "_3rbcaT8iS8Ep2_0IS9bNaC",
				hide: "D6DLiE3WESXxUZt-3w5rF",
				show: "_2sw_2-66SMwc0my0qCmuFJ",
				awardingIcon: "_1ZO1lfp292pRk_NeA_KGVk",
				count: "_1v25u3hsWeYJihslYeyZ33"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				c = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				m = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				h = s.n(p);
			const b = Object(n.c)({
					account: e => e.user.account
				}),
				v = Object(r.b)(b);
			t.a = i.a.wrapped(v(({
				account: e,
				className: t,
				height: s,
				icon: o,
				isLivestreaming: r,
				isNSFW: n,
				trash: i,
				userId: p,
				width: b
			}) => {
				const v = r ? 36 : 20,
					g = p || `${null==e?void 0:e.id}`,
					f = {
						height: s || v,
						width: b || v,
						minWidth: b || v
					};
				if (i) return a.a.createElement("div", {
					className: t,
					style: f
				}, a.a.createElement(u.a, {
					className: h.a.TrashIcon
				}));
				const S = e && e.id === p ? e.accountIcon : n ? l.a : null != o ? o : void 0;
				return Object(m.b)(S) ? a.a.createElement("div", {
					className: t,
					style: f
				}, a.a.createElement(c.a, {
					headshot: S
				})) : a.a.createElement("div", {
					className: t,
					style: f
				}, a.a.createElement(d.a, {
					userId: g,
					defaultImage: S
				}))
			}), "ChatIcon", h.a)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(o.a)({
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
			t.a = a
		},
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/correlationIdTracker.ts"),
				c = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/makeCommentsPageKey/index.ts"),
				u = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/gold/awardIcon.ts"),
				g = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				f = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				S = s.n(f);
			class O extends a.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: o
					} = this.props;
					return r.a.createElement("div", {
						className: Object(n.a)(S.a.container, e, {
							[S.a.isAnimated]: o
						})
					}, r.a.createElement(g.a, {
						className: S.a.gildIcon
					}), o && s && r.a.createElement("div", {
						className: S.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), t ? r.a.createElement("div", {
						className: S.a.count
					}, t) : null)
				}
			}
			var _ = Object(c.b)(() => Object(l.c)({
				iconUrl: (e, {
					awardId: t
				}) => {
					if (!t) return;
					const s = Object(b.a)(e, t);
					return Object(v.a)(e, {
						award: s,
						minSize: 64
					})
				}
			}))(O);
			const C = Object(c.b)(() => Object(l.a)(e => e, (e, {
					postId: t
				}) => Object(u.g)(e, {
					commentsPageKey: Object(m.a)(t)
				}), h.G, (e, {
					postId: t
				}) => Object(u.u)(e, {
					commentsPageKey: Object(m.a)(t)
				}), (e, t, s, o) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, s) => {
							const o = Object(p.b)(e, {
								commentId: s.id
							});
							if (o) {
								const {
									associatedAwardId: e
								} = o;
								if (e) return [...t, e]
							}
							return t
						}, []) : [],
						isFullyLoaded: o,
						postAwardCount: s.awardCountsById ? Object.values(s.awardCountsById).reduce((e, t) => e + t, 0) : s.allAwardings ? s.allAwardings.reduce((e, t) => e + t.count, 0) : 0
					}
				})),
				w = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class E extends a.Component {
				constructor(e) {
					super(e), this.state = w(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? w(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: o,
						className: a,
						isFullyLoaded: n
					} = this.props;
					if (!n) return r.a.createElement(_, {
						className: a,
						count: 0
					});
					const i = Math.max(s, e + o.length - t.length),
						d = o.length - 1,
						c = o[d],
						l = o.length !== t.length;
					return r.a.createElement(_, {
						awardId: c,
						className: a,
						count: i,
						isAnimated: l,
						key: d
					})
				}
			}
			var y = C(E),
				k = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				x = s.n(k);
			t.a = ({
				postId: e,
				showSubmitInsideTextArea: t,
				isLivestreaming: a,
				handleGiveAward: c,
				sendEvent: l
			}) => {
				return r.a.createElement(i.e, {
					className: Object(n.a)(x.a.ChatButton, {
						[x.a.LivestreamingChatButton]: a,
						[x.a.leftPad]: !t
					}),
					"aria-label": o.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async t => {
						t.stopPropagation();
						const o = Object(d.e)(d.a.GildingFlow, !0);
						c(o);
						const {
							clickGildEvent: r,
							clickRpanGiveAward: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						l((a ? n : r)(e))
					}
				}, r.a.createElement(y, {
					postId: e
				}))
			}
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
				a = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = n.a.div("LoaderWrapper", c.a),
				m = n.a.div("Icon", c.a),
				u = n.a.div("Byline", c.a),
				p = Object(r.a)({
					ErrorComponent: () => a.a.createElement(l, null, a.a.createElement(m, null), a.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : a.a.createElement(l, null, a.a.createElement(m, null), a.a.createElement(u, null))
				});
			t.a = e => a.a.createElement(p, e)
		},
		"./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less": function(e, t, s) {
			e.exports = {
				FormBackground: "RC1x6aHRffvqf7VGCFZE7",
				formBackground: "RC1x6aHRffvqf7VGCFZE7",
				FormLine: "_3ztIZ_soV1oB0_2V4tAqYp",
				formLine: "_3ztIZ_soV1oB0_2V4tAqYp",
				InputLine: "JBVpqv0w-wIwNxXH9PO84",
				inputLine: "JBVpqv0w-wIwNxXH9PO84",
				Text: "_1LfRcWtoPCF5ugZjBaiuQW",
				text: "_1LfRcWtoPCF5ugZjBaiuQW",
				SendIcon: "_3igLQFt0eRxuWHQWHLPosF",
				sendIcon: "_3igLQFt0eRxuWHQWHLPosF",
				InfoIcon: "_2pRpE5oJOQrNwAS5OipItc",
				infoIcon: "_2pRpE5oJOQrNwAS5OipItc"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, s) {
			e.exports = {
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
				submitButton: "_1CLqZSQ6jz0CFFB9he7ZtW",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				Editing: "CA5bQ-3lhJvw_xfOAOs4K",
				editing: "CA5bQ-3lhJvw_xfOAOs4K",
				SmallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				smallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				ChatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				chatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				LivestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				livestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				leftPad: "_2nnsSXE8H28qTe0cmiHlbb",
				RichTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				richTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				Livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				LivestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				livestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				insetSubmitButton: "_2-jlFgTYFKmNDKFKaq5x8Z",
				RichTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				richTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				Reply: "_1VGxfswi7Ejb0tozdhOhnJ",
				reply: "_1VGxfswi7Ejb0tozdhOhnJ",
				isLivestreaming: "_1pHXu-8skDLlMxqw7GXg9W",
				ReplyComment: "_3vHha2uHlOOSaJHExNUTkt",
				replyComment: "_3vHha2uHlOOSaJHExNUTkt",
				CloseIconWrap: "_3SwwKU0q7pRO0pohludkXl",
				closeIconWrap: "_3SwwKU0q7pRO0pohludkXl",
				ReplyAuthor: "_11cxPUL8P03UB2QLjnVQA1",
				replyAuthor: "_11cxPUL8P03UB2QLjnVQA1"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "_2N03en-1hKSWiv1t19ZKG",
				button: "_2N03en-1hKSWiv1t19ZKG",
				ModalHeader: "vQpCIRoCQpqZZMhzV5pxK",
				modalHeader: "vQpCIRoCQpqZZMhzV5pxK",
				Link: "_2dGXy-vdP4qZ4_rM8YoxQa",
				link: "_2dGXy-vdP4qZ4_rM8YoxQa",
				ModalFooter: "_1SA_yROMzBC2xZ8UwIiw7o",
				modalFooter: "_1SA_yROMzBC2xZ8UwIiw7o",
				Title: "qTLc9SM-wTQjYOjoSg0pW",
				title: "qTLc9SM-wTQjYOjoSg0pW",
				SubTitle: "_3ScWa1YMrvOJHK_Bke7iLV",
				subTitle: "_3ScWa1YMrvOJHK_Bke7iLV",
				ModalMain: "yp1VmGmZtd7oHY8_6S-4s",
				modalMain: "yp1VmGmZtd7oHY8_6S-4s",
				Image: "_16op4npNx1KkLNRDSSRwEB",
				image: "_16op4npNx1KkLNRDSSRwEB",
				ModalText: "SKC5dOFw80sCsJdP5n0_d",
				modalText: "SKC5dOFw80sCsJdP5n0_d"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = "rpan-download-obs-modal",
				r = Object(o.a)({
					resolved: {},
					chunkName: () => "Download OBS Modal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Download OBS Modal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/DownloadOBSModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/DownloadOBSModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = r
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_2ZtF0KY8miGcAKH2bKpeFg",
				dark: "_9sKwZVralM5Amb07ax7Fr",
				bannerButton: "_1Txx6iEKtaOXFI0jWxe33u",
				Link: "NmW-4eoDKF7qwN1eOHIZX",
				link: "NmW-4eoDKF7qwN1eOHIZX",
				bannerCloseIcon: "_-1__4J5NGL7qL728qj4wC",
				Button: "vTaaqwnZmB5nDIVGQg46i",
				button: "vTaaqwnZmB5nDIVGQg46i",
				ModalBody: "_20P3_5OAGOA17qtM8WWosJ",
				modalBody: "_20P3_5OAGOA17qtM8WWosJ",
				ModalHeader: "_2JQJnav6BN15ouwndMS8v0",
				modalHeader: "_2JQJnav6BN15ouwndMS8v0",
				OBSImage: "_3BxgYaImNWnO-5EL124Uu",
				obsImage: "_3BxgYaImNWnO-5EL124Uu",
				ModalFooter: "_1FA99wDnuK6JYf6UZ8uvZv",
				modalFooter: "_1FA99wDnuK6JYf6UZ8uvZv",
				Title: "_3kw4Ocwkq_BMLQkOI8PNuL",
				title: "_3kw4Ocwkq_BMLQkOI8PNuL",
				SubTitle: "_3_k2jbZuNUdBs1uQB7ixME",
				subTitle: "_3_k2jbZuNUdBs1uQB7ixME",
				ModalMain: "_2-uMAk5f5ZEVHA7qRbTppQ",
				modalMain: "_2-uMAk5f5ZEVHA7qRbTppQ",
				Image: "_3Jd4_nAegc-VBQkl9fkRsc",
				image: "_3Jd4_nAegc-VBQkl9fkRsc",
				VideoLive: "_1Ug68guQT4FRvLm9KrPVS9",
				videoLive: "_1Ug68guQT4FRvLm9KrPVS9",
				ModalText: "_1JEPfF0ge4CHSOolR6mn4I",
				modalText: "_1JEPfF0ge4CHSOolR6mn4I",
				TextButton: "_2WvJWRo5J-lgzhXhcgArFK",
				textButton: "_2WvJWRo5J-lgzhXhcgArFK",
				TitleContainer: "_2i4zKcmHUk7mzsX7IQ6M2M",
				titleContainer: "_2i4zKcmHUk7mzsX7IQ6M2M",
				closeIcon: "_jhhdqQ8u6h6iv51Ae-DA"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less": function(e, t, s) {
			e.exports = {
				EndBroadcastMessageInput: "_2m1DI8ycgdiC8NTu3V708K",
				endBroadcastMessageInput: "_2m1DI8ycgdiC8NTu3V708K",
				EndBroadcastModalFooter: "_1RM2TFGQZBN3MqD3VKMngq",
				endBroadcastModalFooter: "_1RM2TFGQZBN3MqD3VKMngq",
				MessageHeader: "_7i88xKOTFWbNBxGnzvD9c",
				messageHeader: "_7i88xKOTFWbNBxGnzvD9c"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less": function(e, t, s) {
			e.exports = {
				awardBubbler: "FnKrJdIHMgaZCe4KmJpIs",
				award: "_2f1uito___1hy1e_wOG0cC",
				award_silverTier_LowCenter: "_216UpJYpySln3pOtiOy225",
				awardSilverTierLowCenter: "_216UpJYpySln3pOtiOy225",
				float75Center: "_3A9o1PdPiDWiJfITCo2qEC",
				fade: "_3FoNOebBs_9TJFnLFtbUjL",
				award_silverTier_MidCenter: "_297woX02AtKIxuMY1txb5c",
				awardSilverTierMidCenter: "_297woX02AtKIxuMY1txb5c",
				float100Center: "_3LPS-agAJGcsfANT15rYl8",
				award_silverTier_HighCenter: "_1qlxY17qEij8PWBrervj9w",
				awardSilverTierHighCenter: "_1qlxY17qEij8PWBrervj9w",
				float125Center: "_1wJt2jUSqBE-n2umgQUdln",
				award_goldTier_LowCenter: "_3aPtHCBNS901iYzOQUDPEh",
				awardGoldTierLowCenter: "_3aPtHCBNS901iYzOQUDPEh",
				scaleMd: "_15xyt6jmFtTLWmSNa5nrGQ",
				award_goldTier_MidCenter: "_2YitZz-a9SZGtnVGbRXjtq",
				awardGoldTierMidCenter: "_2YitZz-a9SZGtnVGbRXjtq",
				award_goldTier_HighCenter: "_2I3Lfdw0TvtN1xaLIij4ut",
				awardGoldTierHighCenter: "_2I3Lfdw0TvtN1xaLIij4ut",
				float150Center: "_3R1nNQWRQsoT9l6ZifsG47",
				award_platinumTier_LowCenter: "CxCnoSR3_qVd4TYKNs0Ah",
				awardPlatinumTierLowCenter: "CxCnoSR3_qVd4TYKNs0Ah",
				scaleLg: "YLRJkPNcn3c5whQvOeUXS",
				float200Center: "_2r3LWQOuuFBw-6MlgY1pQt",
				award_platinumTier_MidCenter: "kCUDFUEpYYDCRHscei3bX",
				awardPlatinumTierMidCenter: "kCUDFUEpYYDCRHscei3bX",
				float225Center: "_1Vihk7D4lCPLkj0wO_iW3u",
				award_platinumTier_HighCenter: "_30NplgVbUHf4fq3Ank601l",
				awardPlatinumTierHighCenter: "_30NplgVbUHf4fq3Ank601l",
				float250Center: "_1LhoeEsykXNuFDpKWZz889",
				award_silverTier_LowLeft: "Pqj6pwKC50iZWAA1Y7XaM",
				awardSilverTierLowLeft: "Pqj6pwKC50iZWAA1Y7XaM",
				float75Left: "_3IOoxSli9QpfsmexOXMcIK",
				award_silverTier_MidLeft: "_3ey7bKqS2YdC6084OjA798",
				awardSilverTierMidLeft: "_3ey7bKqS2YdC6084OjA798",
				float100Left: "_2q2rgJ-8FR6uz9yR7VeiLH",
				award_silverTier_HighLeft: "Mpn0Z0nB_OY_NWgpDdTWX",
				awardSilverTierHighLeft: "Mpn0Z0nB_OY_NWgpDdTWX",
				float125Left: "QIM2ONU8x6sFjUembrsJO",
				award_goldTier_LowLeft: "_1637g-O1CS-DkhdsIL-2td",
				awardGoldTierLowLeft: "_1637g-O1CS-DkhdsIL-2td",
				award_goldTier_MidLeft: "_3E2Xtm_D7XkbSSmDBOHA4x",
				awardGoldTierMidLeft: "_3E2Xtm_D7XkbSSmDBOHA4x",
				award_goldTier_HighLeft: "_1XnCilCgxYezH9XdRITdoa",
				awardGoldTierHighLeft: "_1XnCilCgxYezH9XdRITdoa",
				float150Left: "_1WhjlhiC8s6dkAybvRxr5b",
				award_platinumTier_LowLeft: "_1sM1uVxjjB_Xx6Rc7HjYNy",
				awardPlatinumTierLowLeft: "_1sM1uVxjjB_Xx6Rc7HjYNy",
				float200Left: "_2QGTN4l7AoTcovIc8t4NEQ",
				award_platinumTier_MidLeft: "_1GojdHGBcjXMuTH3CDTyN7",
				awardPlatinumTierMidLeft: "_1GojdHGBcjXMuTH3CDTyN7",
				float225Left: "ZauEx-KgYrY_KOCrJMPeW",
				award_platinumTier_HighLeft: "_3IvFxb_eSs0D9eRF1J8wE_",
				awardPlatinumTierHighLeft: "_3IvFxb_eSs0D9eRF1J8wE_",
				float250Left: "WXB-UF50Acfu-LbeVpqjw",
				award_silverTier_LowRight: "_2BonddcIYAZM0-8IgAyPi5",
				awardSilverTierLowRight: "_2BonddcIYAZM0-8IgAyPi5",
				float75Right: "YnOZON_jcjlOmnKQ42gC6",
				award_silverTier_MidRight: "a1weN6qnWYBr7MaYYKfei",
				awardSilverTierMidRight: "a1weN6qnWYBr7MaYYKfei",
				float100Right: "_3USBLUGyjBTpJNXEAbla8r",
				award_silverTier_HighRight: "_3IwP-T0K8JRA_WqpGsSFlc",
				awardSilverTierHighRight: "_3IwP-T0K8JRA_WqpGsSFlc",
				float125Right: "_2p90_prlzVa-hsep-G4nCk",
				award_goldTier_LowRight: "_2p941C7-2vs0TKRdNgQWCf",
				awardGoldTierLowRight: "_2p941C7-2vs0TKRdNgQWCf",
				award_goldTier_MidRight: "_2E4IlN2Kf4y3umZR-Vf7hx",
				awardGoldTierMidRight: "_2E4IlN2Kf4y3umZR-Vf7hx",
				award_goldTier_HighRight: "_257dp4PQnZma-9Vpc-yRgA",
				awardGoldTierHighRight: "_257dp4PQnZma-9Vpc-yRgA",
				float150Right: "_2fPS0Ooe2JD4L8rGSIVx0L",
				award_platinumTier_LowRight: "_3HqKNMDPQnu-eDjduf4_m_",
				awardPlatinumTierLowRight: "_3HqKNMDPQnu-eDjduf4_m_",
				float200Right: "_1N8AaOtkRWFat_OLw8Br3t",
				award_platinumTier_MidRight: "_4_He2TDlPCWbmBuepldJC",
				awardPlatinumTierMidRight: "_4_He2TDlPCWbmBuepldJC",
				float225Right: "_2bdGMSPwywxuBeEZkqhXpo",
				award_platinumTier_HighRight: "_25D-Z-z9HV1nYxFAKLB12",
				awardPlatinumTierHighRight: "_25D-Z-z9HV1nYxFAKLB12",
				float250Right: "oPK1nepC5Dg_KXmmXVMMV",
				float175Center: "_3QialJDN2lgx_qYSBi311Y",
				float175Left: "_2q4HlG1Po75dNuZjxSWFyz",
				float175Right: "_1MmsAgQwzi4ALilKygWHQy"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less": function(e, t, s) {
			e.exports = {
				tierAttribution: "PpfDNRwC6RdrWGjAujgud",
				platinumTierAttribution: "_2S3Arge8GOct3TsHb7Y1TU",
				awardName: "_1aJk-1fL4qyN2dcb8TKrSV",
				giverIcon: "_3v2Yx8oKFIMtM2_pvzvEzp"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				awardIconContainer: "aKtOzhWxIEjw6t4uxHXUZ",
				silverTierAwardIcon: "_1oruXtexEyPHDKeT9IX3O-",
				goldTierAwardIcon: "_25hWQnELKx76mS_3mNPBt",
				platinumTierAwardIcon: "_2mmdUsGGMugAWYqqH47Xfp",
				backgroundAnimation: "_1dalm40CELvVY0j6qOMgfD",
				backgroundStar: "_2h56XJi8B0XG4DsP74pB6s",
				spinCW: "_3WGa2d8ljXV2td2T-mMnx9",
				spinCw: "_3WGa2d8ljXV2td2T-mMnx9",
				backgroundStar2: "GPuTVexvh-6qpNAa6ZJQ5",
				backgroundSparkle: "FicKwF51rs_CK1wq09YYx",
				twinkle: "_2LKv65V9VKTKwmXJ5nEEUC",
				sparkleBottomLeft: "_2x6YhyAf4idFsw5vadFRpr",
				sparkleTopRight: "msgZtr0NMoakp8qx3-ET-",
				sparkleBottomRight: "_12bP3nOeUYSYRvSfKaUvsS"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_14ChzZxF_M44B1kvKYdn8H",
				awardIconAnimation: "_17OeWiA9f23WIagDo_qTCF",
				awardIconShow: "_2UYc6-AlDF8KgBo4iOaECW",
				awardHide: "_3NR_91K1cJK00cWs6hrEJC",
				attributionAnimation: "_19eb_9gLouu0vruXat7_Wk",
				attributionShow: "_3wbaxkPcmrPQUki8s7Gtdd",
				attributionHide: "_2u5VFqL4VPOy6GeTLryeSx"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less": function(e, t, s) {
			e.exports = {
				awardOverlay: "_3OFD4N6xzH7U_xJUgGCIJB"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less": function(e, t, s) {
			e.exports = {
				awardOverlaySpectacle: "_3POkDmO2vbDMOp12f4hNNM",
				awardOverlay: "_3N0A_QUgUzdXavU0d1w1lb"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less": function(e, t, s) {
			e.exports = {
				meterOverlay: "_1SwzjHTHbv5YOLDvhibz5f",
				meterPillWrapper: "_3Xpkpmj5-5TdrrUuqkbZEZ",
				meterPillContainer: "_5YBmJjZoc7vk-v08UWh1_",
				animateMeterInAndOut: "_2xq4pchu_eN3EWm5Jkx8QL",
				fadeInAndOut: "_3tQLJ-0XHd06LMBHpAaDD3",
				animateMeterInOnly: "_2-Fx4dYZn7ajYBLgMsCnxR",
				fadeIn: "_1eqT8ivBAWB0KPCt3tGvXt",
				fillMeterCritical: "_2y0uwouvZZzHtFXZSFuG7v",
				fillMeterLow: "_25Roektb1FL-TmyMwZRUEj",
				fillMeterNormal: "_3lQlVfIax8Me0nElY86hqX",
				fillMeterFed: "_2RJl1rp1YpLK_nECLKCl-e",
				meterLabel: "H5LQSL1OKVFrH4OzWtyFQ",
				particleWrapper: "_2JOlLJCTrII4HoAgjtUM28",
				particle: "TaJQXtUpzE9j6EeF2-FsE",
				particleSm: "_3K_epEfsOOOz3haspxn1yl",
				particleLg: "_3VHhuIv7jyPfTrKS1DgYd_",
				particleX0: "_2R-qPB5_JN4JbWFEn92ukc",
				particleX5: "_24S8klFnG4XOuvf-wuW5Mw",
				particleX10: "WHPZQrCmX-0D9rnpRs03R",
				particleX15: "_2c_GUDPeqPxosT-hFxwRYK",
				particleX20: "_3S680Y12xGT937OmODtTPP",
				particleX25: "_18lYzj0Al47z9ldVbRo7WL",
				particleX30: "_3-q5AYulX2ayc3Yom5jsmA",
				particleX35: "_3KMc9BG-Q0M6Xx4fGtyKvb",
				particleX40: "lXS_bqfbcHQJ-thnl-iF1",
				particleX45: "_2ep8T7ZeHLwVn6ZFGryz5d",
				particleX50: "_-5ko9R0ZBqe3Abz9JTaRT",
				particleX55: "_2dEcIcsiAyNbq8tRt1qe8m",
				particleX60: "_33N6ZPtAFBvR3kRrwLPkXp",
				particleX65: "_35xMB1jaLJunn7iFOvxctL",
				particleX70: "E4fvX5v0P7X5TRP2TIOIg",
				particleX75: "_1QUbiZQfb02e-5xgqdHmZl",
				particleX80: "UWHORsCQY0RD7JCSgWVbr",
				particleX85: "LT-jI6K3OlG_LIgfflAt5",
				particleX90: "_52Egx9RRo0D81S-fzaI71",
				particleX95: "_1vPkkgjPYWQ4-WF9I9S_Mr",
				particleX100: "_3G6Z2N9uXRs7s5mX6G7MR3",
				particle15Deg: "_3Jc2Wreg1kHTnDfs4-PV1w",
				move15Deg: "_3vwXcQ5OoI-Fqa8sF0bK9t",
				particle45Deg: "_1O5a1O4kMCQeYm6C59J_27",
				move45Deg: "_3DOBoVurEAJumT9Q1F_4SP",
				particle75Deg: "_34xifRAFcUFVtG7UIFbMnT",
				move75Deg: "_2xQtzdy0QLlyFmz7swubOk",
				particleDelay1: "_1ZpamcHb1_M9iHl_0api1G",
				particleDelay2: "_19QCRq04-fkp5mzf9KnQ5y",
				particleDelay3: "x1nsj5GvoOIhGg5HqapgN",
				particleDelay4: "_3XJaocXfxz-7_2ynqm3HUa",
				particleDelay5: "_2sFWfZrl3XhLj6lYCCCFpw",
				particleDelay6: "_1Wfp9G8gCkp8j-7tdKgaO9",
				particleDelay7: "_1MrBp8anZ2zF8Szl6Pr0h9",
				particleDelay8: "_2H0ACN8-9zZjFWvSL22yeB",
				particleDelay9: "_3UtZVRTbQfgJOEHRyEM8D4",
				particleDelay10: "PKfpa3Dzjl9tthpMoU3pV",
				particleReverse: "bxj_DvGI3u5PeAbe7QtU2"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "UL0EgTWUyCb0-qMWcY18N",
				dropdownTriangle: "zPDKvoROAg3PV05zDWnZP",
				overflowMenuIcon: "_7cxCI8JUyH-7A10o0Z8oa",
				dropdown: "ztqKv9F6h9Bk8Oq28W8_n",
				dropdownLabel: "GDGRC-eiS72xPHwbJuudS",
				dropdownRow: "PD3ktNCcalJOk3caRXS4-"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less": function(e, t, s) {
			e.exports = {
				scrubberBar: "_1qNcdQne5zCPqYhbbuj8dy",
				visible: "_2xzC2ncShLK6L1PpLtMNsg"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less": function(e, t, s) {
			e.exports = {
				streamingChat: "_3ZcCOjXXSQTxyjfVz91MYT",
				prompt: "_72hwd-RmhciQJPjpTun-m",
				chatScroller: "_1VA8Leq8VgzE0tcCf0nnmc",
				emptyState: "_13PmNeNdYYYFh3BVc79an"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less": function(e, t, s) {
			e.exports = {
				meterCritical0: "_1T7F7j3sbgWiyiqRRnet3p",
				meterCritical10: "_1DtSizPrgyuKf8w6idU9cz",
				meterCritical20: "_2WMEtQrqSX1GMTuAZi7BJF",
				meterCritical30: "_1EKoCygRtkeseJ016Cc2jZ",
				meterCritical40: "_11HpV5Yq5Z1B9-dIDlpT1U",
				meterCritical50: "_1tSw--7teh0GyWwcao4gdV",
				meterCritical60: "_2CKRwggQNVsKzp5kGaH5La",
				meterCritical70: "_3BDNCyLtPA5f-jumOd9ajl",
				meterCritical80: "_2TVEvSg6EvnDe3mdZRW4fk",
				meterCritical90: "EMOGPpN-w266AIH_esqnz",
				meterCritical100: "_3dChP9_PA_HHpIh-MIOkBS",
				meterCritical110: "_14lOkdk4IyPRbADMNL9QE7",
				meterCritical120: "_3KXRmja9d_BCTVxIMKBBoU",
				meterCritical130: "_3QRH7HveukgBW4ssNnAND5",
				meterCritical140: "_3lgkwJQwL5HDVSqaKJDJtx",
				meterCritical150: "_1nnHb4m3b8B0Jn8-vGvC8i",
				meterCritical160: "_3bRU8dEZlwGBZ_hpdFz2N3",
				meterCritical170: "T6gcTLzF6xZMkuDKZkl30",
				meterCritical180: "_1JPtfjGQd_XVLO8kEi6K2L",
				switchContainer: "CWoSjbtB167AZNKroCaZ_",
				switchButton: "mT9ZmVLUVuh9vAJ7zwJTF",
				streamThumbnail: "_2dFEpiLjl4l_V34KjcBiPT",
				arrowIcon: "_2rr0-UWx_dcJs5qJxx7zb6",
				switchContainerNext: "_1madTdUxB7YHTPcikPseyX",
				switchContainerPrevious: "_1uaoOY-tle0b_MqSTJ5byL"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1aOgdrnO2MSBAtzoOxpxZq",
				static: "_1ZIY7mYqRj_y6DMJbX5ytS",
				noise: "wNd3BfljscNJtL1turBKy",
				preview: "_1L9jXHNc52Qlp__ktgAXjd",
				loading: "HZckkZbcn3F04tqSALljv"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less": function(e, t, s) {
			e.exports = {
				statsPanel: "mZiwRB3IyMA2ciE9VYmM5",
				watchingContainer: "_1S1XpTfxiVE_qLOIr_7Q4T",
				watchingCounter: "_1oJlp6NNid7Mc4MQyILB-s",
				watchingCaption: "_2STAcvaW1vo-sELvkodWFV",
				voteContainer: "_1kPiN_EqJH2A8zcFqmXTsV",
				voteIcon: "mCEKjumIA4fAYzXycHXp7",
				upButton: "_1-ZeaCDlEjCCKHOO_UhElo",
				activeVote: "zgEolbsvkXlLlrgJSpWkL",
				downButton: "_3txlAk8zXSeqIrpIHIsZtK",
				votesCounter: "_1Hc9ts_bYKSv1OZS0zBGOo"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/index.m.less": function(e, t, s) {
			e.exports = {
				theaterContainer: "_2GRKD-vc7V1Y_N8mf81C73",
				wrap: "_2SKXIKsN82sEYj0P-t3_pm",
				overlay: "_3EBqsnw89Qx3UEoELcarMR",
				focusVisible: "RrzcV0hyA0BISr1eXgG9M",
				panesWrapper: "_8aA-2ZrheEy6k2e1iShKQ",
				initialized: "_2QagxVHOpd1MZxMCUI8-aC",
				pane: "_1J9WuBbLemYVOo8ibJDljN",
				leftPane: "_1YLn-G2I6GbQpuf-DZ4fOX",
				videoContainer: "_1LWq4WiRex5umy4-L1eStm",
				rightPane: "p02A8ZUESZF7fQy6pu1WF",
				isObsBannerDisplayed: "_1a3gZpNuPZFbry905f5P0q",
				theaterContainerExp: "-Sc48lylosr0lQX5S-N44",
				downloadOBSModal: "_1AP8IywWNirPJeB3GKpgz_",
				downloadObsModal: "_1AP8IywWNirPJeB3GKpgz_",
				closeButton: "_34dJmQNu3gi0aCIS1PD5uw",
				closeIcon: "UP3tR535P7cIknrcrCxQ3",
				meterCritical0: "_2T-7of-8vqAynZw1Oz4-NX",
				meterCritical10: "_3itUJfgWxcRexhqqqxQinF",
				meterCritical20: "_1Aq5PPETX3z41ibCky1_aX",
				meterCritical30: "_1RBpmHmfXPUxQgUC4uXobt",
				meterCritical40: "_2J1QDym-1XELon2WR1V4mS",
				meterCritical50: "_1fE4XQjE9zujsUme82ofuC",
				meterCritical60: "_3ONFJJcZUvYtAWF50vNx1i",
				meterCritical70: "_2cvv2EfIg0IBur6NC0WIgy",
				meterCritical80: "bvawpTY_mou8hbpn194Be",
				meterCritical90: "_3p7CDC8cj_SqaJG8P613nW",
				meterCritical100: "_3i3MCLsKesWpvlmdRPLB9P",
				meterCritical110: "_1SDfw3x3VyPkqvjELcNppA",
				meterCritical120: "_1SGt6vairhxvrHTF8afSxA",
				meterCritical130: "_2tYLpubORLk9kaT6zbJbff",
				meterCritical140: "hcs1BiyQl055s3-vqlAwD",
				meterCritical150: "_2EoBLEyd5oLeTAWhnaG7gr",
				meterCritical160: "LpClsXdrjAViEdXqQqWxn",
				meterCritical170: "tRB7qSJRizC3oDAmc20At",
				meterCritical180: "rPfp0FIXGWvZw6BpvAbid"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less": function(e, t, s) {
			e.exports = {
				DisplayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				displayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				DropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				dropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				ReasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				reasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				Dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				DropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				dropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				DropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				dropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				DropdownContainer: "_33sg6HoBYll4rCDqRzRUdu",
				dropdownContainer: "_33sg6HoBYll4rCDqRzRUdu"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				l = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = s.n(m);
			const p = n.a.wrapped(l.a, "DisplayContainer", u.a),
				h = n.a.div("DropdownLabel", u.a),
				b = n.a.div("ReasonTitle", u.a),
				v = e => r.a.createElement(p, null, r.a.createElement(h, null, e.dropdownLabel), e.selectedReason && r.a.createElement(b, null, e.selectedReason)),
				g = n.a.wrapped(i.a, "Dropdown", u.a),
				f = n.a.wrapped(c.b, "DropdownTriangle", u.a),
				S = n.a.wrapped(d.b, "DropdownRow", u.a),
				O = n.a.button("DropdownContainer", u.a);
			t.a = e => r.a.createElement(O, {
				onClick: e.onToggleDropdown
			}, r.a.createElement(v, {
				dropdownLabel: e.isLoading ? o.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : o.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), r.a.createElement(f, null), e.isDropdownOpen && r.a.createElement(g, {
				isOverlay: !0
			}, r.a.createElement(S, {
				displayText: o.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => r.a.createElement(S, {
				displayText: `${s+1}. ${t.title}`,
				key: t.title,
				onClick: () => e.onSelectReason(t)
			}))))
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less": function(e, t, s) {
			e.exports = {
				CharacterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				characterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				EmptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				emptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				ModNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				modNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				PrimaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				primaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				RadioOption: "_30JuaHooKBU-I9UQwxEwhL",
				radioOption: "_30JuaHooKBU-I9UQwxEwhL",
				BoldText: "_22_ggqyuhsjDD3F2auyNjc",
				boldText: "_22_ggqyuhsjDD3F2auyNjc",
				ModNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				modNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				MessageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				messageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				Info: "_3Bf1PCbZnJJBM391IWRv8D",
				info: "_3Bf1PCbZnJJBM391IWRv8D",
				SmallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				smallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				FormOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				formOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				ModalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				modalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				FooterRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				footerRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				ButtonRow: "_3zZmX0EjloIkzwt2-sRI2_",
				buttonRow: "_3zZmX0EjloIkzwt2-sRI2_"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "dispatcher", (function() {
				return I
			})), s.d(t, "selector", (function() {
				return L
			})), s.d(t, "connector", (function() {
				return R
			})), s.d(t, "CharacterCountdown", (function() {
				return P
			})), s.d(t, "EmptyState", (function() {
				return N
			})), s.d(t, "MessageInput", (function() {
				return F
			})), s.d(t, "FormOptionsContainer", (function() {
				return H
			})), s.d(t, "ModalFooter", (function() {
				return K
			})), s.d(t, "ButtonRow", (function() {
				return G
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return W
			}));
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/removalReasons/index.ts"),
				l = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				v = s("./src/reddit/controls/TextButton/index.tsx"),
				g = s("./src/reddit/icons/fonts/Info/index.tsx"),
				f = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				S = s("./src/reddit/models/RemovalReason/index.ts"),
				O = s("./src/reddit/selectors/removalReasons.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				E = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				y = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				switch (e) {
					case S.f.Private:
						return "private_subreddit";
					case S.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, j = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: S.f.Public,
				selectedReason: null
			}, I = e => ({
				submitBulkRemovalReason: (t, s, o, a, r) => e(Object(c.submitBulkRemovalReason)(t, s, o, a, r)),
				submitRemovalReason: (t, s, o, a, r) => e(Object(c.submitRemovalReason)(t, s, o, a, r))
			}), L = Object(n.c)({
				currentUserName: e => {
					const t = Object(C.k)(e);
					if (t) return t.displayText
				},
				isLoading: O.a,
				removalReasons: O.c,
				subredditName: (e, {
					subredditId: t
				}) => Object(_.S)(e, {
					subredditId: t
				}).name
			}), R = Object(r.b)(L, I), P = d.a.wrapped(l.a, "CharacterCountdown", y.a), N = d.a.div("EmptyState", y.a), T = d.a.wrapped(m.o, "ModNoteDescription", y.a), M = d.a.wrapped(u.l, "PrimaryButton", y.a), A = d.a.wrapped(b.a, "RadioOption", y.a), D = d.a.span("BoldText", y.a), B = d.a.wrapped(m.t, "ModNoteInput", y.a), F = d.a.wrapped(m.t, "MessageInput", y.a), V = d.a.wrapped(g.a, "Info", y.a), U = d.a.div("SmallInfoText", y.a), H = d.a.div("FormOptionsContainer", y.a), K = d.a.wrapped(m.g, "ModalFooter", y.a), q = d.a.div("FooterRow", y.a), G = d.a.wrapped(q, "ButtonRow", y.a);
			class W extends a.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${x(e)}`)()
					}, this.onMessageInputChange = e => {
						this.setState({
							message: e.currentTarget.value
						})
					}, this.onUpdateModNote = e => {
						this.setState({
							modNote: e.currentTarget.value
						})
					}, this.handleToggleDropdown = () => this.setState({
						isDropdownOpen: !this.state.isDropdownOpen
					}), this.closeDropdown = () => {
						this.state.isDropdownOpen && this.setState({
							isDropdownOpen: !1
						})
					}, this.onSelectReason = e => {
						this.setState({
							selectedReason: e
						}), this.props.trackClick("reason")(), e && this.setState({
							message: e.message
						}), this.closeDropdown()
					}, this.canSave = () => !(this.state.message.length > S.a || this.state.modNote.length > S.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === S.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${x(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== S.e.Bulk && s.push(a.a.createElement(A, {
							key: S.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: S.f.Public
						}, a.a.createElement("div", null, t.removalContextType === S.e.Post ? k._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : k._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(a.a.createElement(A, {
							key: S.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: S.f.Private
						}, a.a.createElement("div", null, k._("Private: send a Modmail from {subredditName} to the user", [k._param("subredditName", a.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(a.a.createElement(A, {
							key: S.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: S.f.PrivateExposed
						}, a.a.createElement("div", null, k._("Private: send a Modmail from {currentUserName} to the user", [k._param("currentUserName", a.a.createElement(D, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...j,
						removalContextType: Object(S.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement(m.e, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && a.a.createElement(m.i, null, a.a.createElement(f.a, null, a.a.createElement(m.q, null, k._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && k._("({number of items} posts/comments)", [k._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), a.a.createElement(v.a, {
						onClick: this.onCancel
					}, a.a.createElement(m.b, null)))), a.a.createElement(m.l, null, e.isLoading || e.removalReasons.length > 0 ? a.a.createElement(w.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : a.a.createElement(N, null, k._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), a.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, a.a.createElement(u.r, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, k._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && a.a.createElement(H, null, a.a.createElement(m.h, null, a.a.createElement(h.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), a.a.createElement(F, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), a.a.createElement(P, {
						maxChars: S.a,
						text: t.message.trim()
					}), a.a.createElement(U, null, t.removalType !== S.f.Public && a.a.createElement(a.a.Fragment, null, a.a.createElement(V, null), k._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), a.a.createElement(K, null, a.a.createElement(q, null, a.a.createElement(T, null, k._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), a.a.createElement(q, null, a.a.createElement(B, {
						placeholder: k._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), a.a.createElement(q, null, a.a.createElement(P, {
						maxChars: S.b,
						text: t.modNote.trim()
					})), a.a.createElement(G, null, a.a.createElement(u.o, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, k._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(M, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, k._("Submit", null, {
						hk: "4aU3dh"
					})))))
				}
			}
			t.default = Object(i.a)(R(W))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return n
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "o", (function() {
				return c
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "j", (function() {
				return _
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = s.n(a);
			const n = o.a.section("FormPage", r.a),
				i = o.a.h1("HomePageTitle", r.a),
				d = o.a.button("HomePageBreadcrumb", r.a),
				c = o.a.div("HomePageGroup", r.a),
				l = o.a.h1("FormPageTitle", r.a),
				m = o.a.div("FormPageSection", r.a),
				u = o.a.div("FormGroup", r.a),
				p = o.a.h2("FormGroupTitle", r.a),
				h = o.a.div("FormElement", r.a),
				b = o.a.div("FormGroupDescription", r.a),
				v = o.a.div("FormItem", r.a),
				g = o.a.h3("FormElementTitle", r.a),
				f = o.a.div("FormElementDescription", r.a),
				S = o.a.div("FormElementError", r.a),
				O = o.a.div("FormElementSubGroup", r.a),
				_ = o.a.li("FormListItem", r.a)
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var o;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(o || (o = {}));
			var a;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(a || (a = {}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const a = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(o.f)(s));
				return t
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				n = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
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
						post: u
					} = m && m.data,
					p = e(),
					h = Object(o.a)(c, null, {
						isOtherDiscussions: !0
					});
				if (u) {
					if (u.otherDiscussions && u.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = u, {
							postFlair: o,
							postIds: l,
							posts: m,
							profiles: b,
							subreddits: v
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
										crosspostRoot: o
									} = e;
									if (o && o.type === d.a.Post && o.postInfo) {
										const e = Object(r.f)(o.postInfo);
										t.posts[e.id] = e
									}
									return Object(d.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(n.a)(e.profile)) : Object(d.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(i.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(a.a)(e.subreddit))), s.id
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
							key: h,
							meta: p.meta,
							postFlair: o,
							postId: c,
							postIds: l,
							posts: m,
							profiles: b,
							subreddits: v
						})
					}
				} else s({
					count: 0,
					key: h,
					meta: p.meta,
					postFlair: {},
					postId: c,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			}
		},
		"./src/reddit/helpers/styles/mixins/fonts.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_3gUeTKT4XlFEby1H6_TC19",
				titleFontH2: "_1-mMPLU2Nlffx0JT-3revU",
				titleFontH3: "_2bunchGAjv3PLvvdL2MjZ-",
				titleFontH4: "_3gwUix9UH34NUpcjvZLXbF",
				titleFontH5: "_3fOSv3R7EbBH_IjX9NcJ6k",
				titleFontH6: "_2idh376GSaloUfQixQHScs",
				metadataFont: "yxMvMTKJ8A1hhaAmVojky",
				flairFont: "_2Ms4g8FLmBRDWAbfRO4bG6",
				labelsFont: "_2WK3LdQ4kR2aJFQqnTsu0A",
				actionFont: "_3d3pCI-qoO6psmyxodxokk",
				smallButtonFont: "_1LVr35fM7ddtvg2g2I4qJ7",
				largeButtonFont: "_1jVGMlwau5yaN1vqhiSwEo",
				strongTextFont: "_2oA70eNUJxOQ-eRN8TPT9s",
				tabFont: "_1leSu44tZ3i4KBsjGW_F9c",
				buttonFontXS: "_2hx9_-C2FZtpmqHzmEIAYR",
				buttonFontXs: "_2hx9_-C2FZtpmqHzmEIAYR",
				buttonFontS: "_87bVuwY1B7OXO-iDEwMpj",
				buttonFontM: "Cgr8csu8rgZnaC3z01hBx",
				buttonFontL: "_2pRU1zvDiQbrvBARchkUCF",
				buttonFontXL: "_3J7-ymNaQyuo5TRybj5q_h",
				buttonFontXl: "_3J7-ymNaQyuo5TRybj5q_h",
				bodyFontH1: "_2CvYC5Dor5C7bRy9T_5TQX",
				bodyFontH2: "_6n_lhbrgbPv9CUoOwND7J",
				bodyFontH3: "l6V3xHeCqsPn028sXl7VN",
				bodyFontH4: "_1XCZr-qft4wCNMbV9Ss_Ou",
				bodyFontH5: "_1d5gYDAvszTFAiNg31iR56",
				bodyFontH6: "_2aeJbvpJvTsRzIwwJHzssX",
				bodyFont: "_2pkKgwPGa4i4WMPJpHXzBM",
				bodyFontSmall: "_11mUbPPL96Bo13O8gTB7ik",
				bodyFontMono: "_386ITOzsDX5wQo_sJfUExR"
			}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "H", (function() {
				return l
			})), s.d(t, "i", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "D", (function() {
				return p
			})), s.d(t, "A", (function() {
				return h
			})), s.d(t, "E", (function() {
				return b
			})), s.d(t, "C", (function() {
				return v
			})), s.d(t, "B", (function() {
				return g
			})), s.d(t, "u", (function() {
				return f
			})), s.d(t, "v", (function() {
				return S
			})), s.d(t, "x", (function() {
				return O
			})), s.d(t, "r", (function() {
				return _
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "q", (function() {
				return w
			})), s.d(t, "o", (function() {
				return E
			})), s.d(t, "z", (function() {
				return y
			})), s.d(t, "s", (function() {
				return k
			})), s.d(t, "y", (function() {
				return x
			})), s.d(t, "G", (function() {
				return j
			})), s.d(t, "t", (function() {
				return I
			})), s.d(t, "c", (function() {
				return L
			})), s.d(t, "n", (function() {
				return R
			})), s.d(t, "k", (function() {
				return P
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "e", (function() {
				return M
			})), s.d(t, "w", (function() {
				return A
			})), s.d(t, "F", (function() {
				return D
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "l", (function() {
				return F
			})), s.d(t, "m", (function() {
				return V
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "h", (function() {
				return H
			}));
			var o, a = s("./src/reddit/constants/chat.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(o || (o = {}));
			const i = (e, t) => {
					if (t) {
						const s = n.C(e, t.post.id),
							o = n.J(e, t.post.id),
							a = n.jb(e);
						if (t.post.authorInfo && o && (o.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const o = Object(r.j)(e, {
								streamIdFromPath: t.post.id
							});
							o === r.a.LIVE ? s.type = "stream_live" : o === r.a.VOD ? s.type = "stream_vod" : o === r.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: o,
							media: s,
							subreddit: a
						}
					}
					return {
						subreddit: n.jb(e)
					}
				},
				d = (e, t, s) => {
					if (!t || !s) return;
					const o = Object(r.j)(e, {
							streamIdFromPath: t.post.id
						}),
						n = t.chat_disabled || s.chatState === a.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: o === r.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: n ? a.a.None : a.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				c = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				m = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				u = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(s, e),
					actionInfo: n.d(s, {
						position: t || 0
					})
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...e && {
						...i(s, e)
					}
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				v = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				g = (e, t, s) => o => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(o, t, s),
					...c(o),
					...i(o, t)
				}),
				f = (e, t, s, o) => a => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(a, t, s),
					...c(a),
					...i(a, t),
					actionInfo: n.d(a, {
						referralId: o
					})
				}),
				S = (e, t, s) => o => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(o, t, s),
					...c(o),
					...i(o, t)
				}),
				O = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...c(t),
					...i(t, e)
				}),
				_ = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				C = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				w = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				E = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: d(s, e, t),
					...i(s, e)
				}),
				y = e => t => {
					const s = Object(r.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, s)
					}
				},
				k = (e, t, s) => o => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: d(o, t, s),
					...i(o, t)
				}),
				x = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: d(s, e, t),
					...c(s)
				}),
				j = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: n.S(t),
					screen: n.bb(t),
					...i(t, e)
				}),
				I = e => t => {
					const s = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: n.S(t),
						screen: n.bb(t),
						...s
					}
				},
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				R = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: n.jb(t)
				}),
				N = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: d(s, e, t),
					...i(s, e)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: d(s, e, t),
					...i(s, e)
				}),
				M = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: d(s, e, t),
					...i(s, e)
				}),
				A = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: d(s, e, t),
					...i(s, e)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: d(s, e, t),
					...i(s, e)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: d(s, e, t),
					...i(s, e)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: d(s, e, t),
					...i(s, e),
					...c(s)
				}),
				V = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: d(s, e, t),
					...i(s, e),
					...c(s)
				}),
				U = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(s, t),
					...c(s)
				}),
				H = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(s, t),
					...c(s)
				})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(r.a)(Object(n.b)("share", e.isFilled), d.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = s.n(n);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...s
			}) => a.a.createElement("svg", d({
				className: Object(r.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s), a.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				a = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Pagination/back.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				a = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				a = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, a.a.createElement("g", {
				stroke: "none"
			}, a.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				a = s.n(o);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				a = s.n(o);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				a = s.n(o);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "m81.4458 35.074-29.1976 11.7753 26.9134 16.3348-28.9722-12.3194 7.4803 30.5811-11.7754-29.1976-16.3347 26.9135 12.3193-28.9723-30.581 7.4803 29.1975-11.7754-26.9134-16.3347 28.9722 12.3193-7.4802-30.581 11.7753 29.1975 16.3348-26.9134-12.3194 28.9722z",
					clipRule: "evenodd",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				a = s.n(o);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(o || (o = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return m
			}));
			var o = s("./src/reddit/helpers/isPost.ts");
			const a = 50,
				r = 50,
				n = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(o.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.m.less": function(e, t, s) {
			e.exports = {
				rpanContainer: "e00nEFei4dIvTqPPuw5rE",
				overlay: "KiogDzsSRwmKjlSPDsTQv",
				forbiddenScreen: "_1Ew8OVeA6sJ108GaDUqjQf",
				rpanContainerExp: "_32FuOYQF3BU7Vd3f-Mm_-6"
			}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				m = s("./src/reddit/actions/login.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				p = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				h = s("./src/config.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./node_modules/lodash/throttle.js"),
				g = s.n(v),
				f = s("./src/reddit/contexts/NavbarExp.ts"),
				S = s("./src/higherOrderComponents/withMux/index.tsx"),
				O = s("./src/lib/addQueryParams/index.ts");
			var _ = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				C = s("./src/lib/focusVisible/index.js"),
				w = s("./src/lib/VideoSession/util.ts"),
				E = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				y = s("./src/reddit/actions/chat/toggle.ts"),
				k = s("./src/reddit/actions/media.ts"),
				x = s("./src/reddit/actions/modal.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				L = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				R = s("./src/lib/makeActionCreator/index.ts");
			const P = Object(R.a)(L.E),
				N = Object(R.a)(L.X),
				T = e => async t => {
					t(P(e))
				}, M = Object(R.a)(L.P), A = Object(R.a)(L.V);
			var D = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				B = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				F = s("./src/reddit/actions/reportFlow/index.ts"),
				V = s("./src/reddit/actions/video.ts"),
				U = s("./src/reddit/components/HlsVideo/index.tsx"),
				H = s("./src/higherOrderComponents/asModal/index.tsx"),
				K = s("./src/lib/lessComponent.tsx"),
				q = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				G = s("./src/reddit/controls/Button/index.tsx"),
				W = s("./src/reddit/controls/TextButton/index.tsx"),
				J = s("./src/reddit/helpers/localStorage/index.ts"),
				Q = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				X = s("./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less"),
				z = s.n(X);
			const Z = K.a.div("Image", z.a),
				Y = K.a.wrapped(q.g, "ModalFooter", z.a),
				$ = K.a.wrapped(q.i, "ModalHeader", z.a),
				ee = K.a.wrapped(q.l, "ModalMain", z.a);
			var te = Object(H.a)(({
					toggleModal: e
				}) => {
					const t = () => {
						J.Tb(), e()
					};
					return a.a.createElement(q.e, null, a.a.createElement($, null, a.a.createElement(Q.a, null, a.a.createElement("div", null, a.a.createElement("div", {
						className: z.a.Title
					}, b.fbt._("Get ready to chat!", null, {
						hk: "1lebCx"
					})), a.a.createElement(q.p, null, b.fbt._("Before jumping in, keep these tips in mind.", null, {
						hk: "3evsT7"
					}))), a.a.createElement(W.a, {
						onClick: t
					}, a.a.createElement(q.b, null)))), a.a.createElement(ee, null, a.a.createElement("span", null, a.a.createElement("span", null, a.a.createElement("div", {
						className: z.a.SubTitle
					}, b.fbt._("Remember the human", null, {
						hk: "3oHyEM"
					})), a.a.createElement(q.o, null, b.fbt._("We're all (internet) friends here, so enjoy chatting and remember that rules still apply.", null, {
						hk: "3df1qF"
					}))), a.a.createElement(Z, {
						style: {
							backgroundImage: `url("${h.a.assetPath}/img/heart-rainbow.png")`
						}
					})), a.a.createElement("span", null, a.a.createElement("span", null, a.a.createElement("div", {
						className: z.a.SubTitle
					}, b.fbt._("Look out for each other", null, {
						hk: "hrE04"
					})), a.a.createElement(q.o, null, b.fbt._("If you see any harrassment or abuse, report it by pressing and holding on the message.", null, {
						hk: "12gD31"
					}))), a.a.createElement(Z, {
						style: {
							backgroundImage: `url("${h.a.assetPath}/img/award_beagle.png")`
						}
					})), a.a.createElement("span", null, a.a.createElement("span", null, a.a.createElement("div", {
						className: z.a.SubTitle
					}, b.fbt._("Have fun!", null, {
						hk: "20HtGT"
					})), a.a.createElement(q.o, null, b.fbt._("Chat, lol, debate, discuss human nature or quantum physics... it's all up to you.", null, {
						hk: "3Aj4Z7"
					}))), a.a.createElement(Z, {
						style: {
							backgroundImage: `url("${h.a.assetPath}/img/award_celebrate.png")`
						}
					}))), a.a.createElement(Y, {
						className: z.a.ModalFooter
					}, a.a.createElement(G.l, {
						onClick: t,
						className: z.a.Button,
						"data-redditstyle": !0
					}, b.fbt._("Start Chatting", null, {
						hk: "3n2GtA"
					}))))
				}),
				se = s("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				oe = s.n(se),
				ae = s("./src/reddit/icons/svgs/Close/index.tsx"),
				re = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less"),
				ne = s.n(re);
			var ie = ({
					onClickLearnMore: e,
					onClickDismiss: t,
					isDark: s = !1
				}) => a.a.createElement("div", {
					className: Object(d.a)(ne.a.banner, {
						[ne.a.dark]: s
					})
				}, a.a.createElement("div", null, b.fbt._("{=Download the RPAN studio} desktop application to broadcast live from your computer.", [b.fbt._param("=Download the RPAN studio", a.a.createElement("span", {
					className: oe.a.strongTextFont
				}, b.fbt._("Download the RPAN studio", null, {
					hk: "1rcEDr"
				})))], {
					hk: "ODJOz"
				})), a.a.createElement(G.t, {
					className: ne.a.bannerButton,
					kind: G.b.Button,
					priority: G.c.Primary,
					onClick: e,
					"data-redditstyle": !0
				}, b.fbt._("Learn more", null, {
					hk: "1Ri9Pi"
				})), a.a.createElement(ae.a, {
					"data-testid": "bannerCloseIcon",
					onClick: t,
					className: Object(d.a)(ne.a.bannerCloseIcon, {
						[ne.a.dark]: s
					})
				})),
				de = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/Loader.tsx"),
				ce = s("./src/reddit/actions/post.ts"),
				le = s("./src/reddit/actions/removalReasons/index.ts"),
				me = s("./src/reddit/actions/toaster.ts"),
				ue = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				pe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				he = s("./src/reddit/models/RemovalReason/index.ts"),
				be = s("./src/reddit/models/Toast/index.ts"),
				ve = s("./src/reddit/selectors/activeModalId.ts"),
				ge = s("./src/reddit/selectors/telemetry.ts"),
				fe = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"),
				Se = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				Oe = s("./src/reddit/controls/InternalLink/index.tsx"),
				_e = s("./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less"),
				Ce = s.n(_e);
			const {
				fbt: we
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = Object(r.b)(fe.selector, fe.dispatcher), ye = K.a.wrapped(q.g, "EndBroadcastModalFooter", Ce.a), ke = K.a.wrapped(q.t, "EndBroadcastMessageInput", Ce.a);
			class xe extends fe.AddRemovalReasonModal {
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.isLoading || e.removalReasons.length > 0;
					return a.a.createElement(q.e, {
						onClick: this.closeDropdown
					}, s && a.a.createElement(q.i, null, a.a.createElement(Q.a, null, a.a.createElement(q.q, null, we._("Remove broadcast", null, {
						hk: "1JfCvD"
					})), a.a.createElement(W.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, a.a.createElement(q.b, null)))), a.a.createElement(q.l, null, s ? a.a.createElement(Se.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : a.a.createElement(fe.EmptyState, null, we._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), a.a.createElement(Oe.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, a.a.createElement(G.r, {
						onClick: e.toggleRemovalReasonModal,
						"data-redditstyle": !0
					}, we._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Ce.a.MessageHeader
					}, we._("Message to the broadcaster", null, {
						hk: "bGz26"
					})), a.a.createElement(fe.FormOptionsContainer, null, a.a.createElement(ke, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), a.a.createElement(fe.CharacterCountdown, {
						maxChars: he.a,
						text: t.message.trim()
					})))), a.a.createElement(ye, null, a.a.createElement(fe.ButtonRow, null, a.a.createElement(q.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, we._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(q.u, {
						onClick: () => {
							t.selectedReason && this.props.submitRemoval(t.selectedReason, t.message)
						},
						disabled: !this.canSave()
					}, we._("Remove", null, {
						hk: "3tYl0U"
					})))))
				}
			}
			var je = Object(H.a)(Ee(xe));
			const {
				fbt: Ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Le = Object(i.c)({
				isConfirmationModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
				isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e)
			}), Re = Object(r.b)(Le, (e, {
				subredditId: t,
				postId: s
			}) => ({
				submitRemovalReason: async (t, s, o) => {
					const a = await e(Object(le.submitRemovalReason)([t], s, o, he.f.Private, ""));
					e(a ? Object(me.f)({
						kind: be.b.SuccessEndBroadcast,
						text: Ie._("Broadcast ended", null, {
							hk: "313j6x"
						})
					}) : Object(me.f)({
						text: Ie._("Toast:", null, {
							hk: "2dCWf"
						}),
						duration: 1e4,
						kind: be.b.Error
					}))
				},
				fetchRemovalReasons: () => e(Object(le.removalReasonsRequested)(t)),
				errorToast: t => e(Object(me.f)({
					text: t,
					duration: 1e4,
					kind: be.b.Error
				})),
				toggleRemovalReasonModal: () => e(Object(x.i)("rpan-add-removal-reason-id")),
				toggleConfirmationModal: () => e(Object(x.i)("rpan-end-broadcast-confirmation-id")),
				onRemovePost: () => e(Object(ce.T)(s, !1))
			}));
			class Pe extends a.a.Component {
				constructor(e) {
					super(e), this.onEndBroadcast = async () => {
						await this.props.onRemovePost() ? (this.props.submitRemovalReason(this.props.postId, this.state.selectedReason, this.state.message.trim()), this.props.toggleConfirmationModal()) : this.props.errorToast("Failed to end broadcast.")
					}, this.onSubmitRemovalReasons = (e, t) => {
						this.setState({
							selectedReason: e,
							message: t
						}), this.props.toggleConfirmationModal()
					}, this.props.fetchRemovalReasons()
				}
				renderConfirmationModal() {
					return a.a.createElement(ue.a, {
						headerText: Ie._("Are you sure you want to remove this broadcast?", null, {
							hk: "1Wcei3"
						}),
						modalText: Ie._("This can't be undone.", null, {
							hk: "2HfakZ"
						}),
						actionText: Ie._("Yes, remove", null, {
							hk: "4uQjqM"
						}),
						onConfirm: this.onEndBroadcast,
						onClose: this.props.toggleConfirmationModal,
						onCancel: this.props.toggleConfirmationModal,
						disableRedditStyle: !0,
						withOverlay: !0
					})
				}
				renderRemovalReasonModal() {
					return a.a.createElement(je, {
						submitRemoval: this.onSubmitRemovalReasons,
						toggleRemovalReasonModal: this.props.toggleRemovalReasonModal,
						toggleConfirmationModal: this.props.toggleConfirmationModal,
						itemIds: [this.props.postId],
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleRemovalReasonModal,
						trackClick: ((e, t, s) => o => () => this.props.sendEvent(a => ({
							source: e,
							action: "click",
							noun: o,
							post: s && Object(ge.J)(a, s),
							screen: Object(ge.bb)(a),
							subreddit: Object(ge.kb)(a, t)
						})))("removal_reasons", this.props.subredditId, this.props.postId)
					})
				}
				render() {
					return this.props.isRemovalReasonModalOpen ? this.renderRemovalReasonModal() : this.props.isConfirmationModalOpen ? this.renderConfirmationModal() : a.a.createElement("div", null)
				}
			}
			var Ne, Te = Object(H.a)(Re(Object(pe.c)(Pe))),
				Me = s("./src/reddit/components/ReportFlow/index.tsx"),
				Ae = s("./src/reddit/components/ReportFlow/new.tsx"),
				De = s("./src/reddit/constants/history.ts"),
				Be = s("./src/reddit/constants/keycodes.ts"),
				Fe = s("./src/reddit/constants/parameters.ts"),
				Ve = s("./src/reddit/helpers/dom/index.ts"),
				Ue = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				He = s("./src/reddit/helpers/trackers/rpan.ts"),
				Ke = s("./src/reddit/helpers/trackers/screenview.ts"),
				qe = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ge = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				We = s("./src/reddit/selectors/media.ts"),
				Je = s("./src/reddit/selectors/platform.ts"),
				Qe = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				Xe = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				ze = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts"),
				Ze = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(Ne || (Ne = {}));
			const Ye = 60,
				$e = 30,
				et = 3 * Ye,
				tt = 5 * Ye,
				st = 5,
				ot = 5 * Ye,
				at = 10,
				rt = 5;
			var nt = s("./node_modules/uuid/v4.js"),
				it = s.n(nt),
				dt = s("./src/lib/makeCommentsPageKey/index.ts"),
				ct = s("./src/reddit/actions/gold/modals.ts"),
				lt = s("./src/reddit/actions/moderatingSubreddits.ts"),
				mt = s("./src/reddit/endpoints/publicAccessNetwork/index.ts");
			const ut = e => async (t, s, {
				apiContext: o
			}) => {
				const a = await Object(mt.j)(o(), e, !0);
				a && a.ok ? t(Object(me.f)({
					kind: be.b.SuccessLockComment,
					text: b.fbt._("Comments locked", null, {
						hk: "3WAk9Y"
					}),
					buttonText: b.fbt._("UNDO", null, {
						hk: "3Kk8Xw"
					}),
					buttonAction: pt(e)
				})) : t(Object(me.f)(Object(me.e)(b.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), be.b.Error)))
			}, pt = e => async (t, s, {
				apiContext: o
			}) => {
				const a = await Object(mt.j)(o(), e, !1);
				a && a.ok ? t(Object(me.f)({
					kind: be.b.SuccessUnlockComment,
					text: b.fbt._("Comments unlocked", null, {
						hk: "rEYa1"
					}),
					buttonText: b.fbt._("UNDO", null, {
						hk: "OXk5v"
					}),
					buttonAction: ut(e)
				})) : t(Object(me.f)(Object(me.e)(b.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), be.b.Error)))
			};
			var ht = s("./src/reddit/actions/subscription/index.ts"),
				bt = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				vt = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				gt = s("./src/reddit/constants/posts.ts"),
				ft = s("./src/reddit/helpers/correlationIdTracker.ts"),
				St = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				Ot = s("./src/reddit/routes/postCreation/constants.ts"),
				_t = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ct = s("./src/reddit/selectors/subreddit.ts"),
				wt = s("./src/reddit/selectors/comments.ts"),
				Et = s("./src/reddit/selectors/commentSelector.ts"),
				yt = s("./src/reddit/selectors/communityAwards.ts"),
				kt = s("./src/reddit/models/Gold/Award.ts");
			var xt = e => e < 500 || !e ? kt.e.Silver : e < 1800 ? kt.e.Gold : kt.e.Platinum,
				jt = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				It = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				Lt = s.n(It);
			const {
				fbt: Rt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Pt(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: o,
					tier: r,
					className: n
				} = e, i = r === kt.e.Silver ? Lt.a.silverTierAttribution : r === kt.e.Gold ? Lt.a.goldTierAttribution : Lt.a.platinumTierAttribution;
				return a.a.createElement("div", {
					className: Object(d.a)(n, Lt.a.tierAttribution, i),
					role: "presentation"
				}, r !== kt.e.Silver && a.a.createElement(jt.a, {
					className: Lt.a.giverIcon,
					userId: o,
					width: 16,
					height: 16
				}), a.a.createElement("span", null, r !== kt.e.Silver && Rt._("{giverName} gave {space}", [Rt._param("giverName", s), Rt._param("space", " ")], {
					hk: "SzDdi"
				}), a.a.createElement("strong", {
					className: Lt.a.awardName
				}, t)))
			}
			var Nt = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Tt = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Mt = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				At = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Dt = s.n(At);

			function Bt(e) {
				const {
					iconUrl: t,
					tier: s,
					className: o
				} = e, r = s === kt.e.Silver ? Dt.a.silverTierAwardIcon : s === kt.e.Gold ? Dt.a.goldTierAwardIcon : Dt.a.platinumTierAwardIcon, n = s !== kt.e.Silver, i = s === kt.e.Platinum;
				return a.a.createElement("div", {
					className: Object(d.a)(o, Dt.a.tierAwardIcon),
					role: "presentation"
				}, a.a.createElement("div", {
					className: Dt.a.awardIconContainer
				}, n && a.a.createElement(a.a.Fragment, null, a.a.createElement(Tt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundStar)
				}), a.a.createElement(Mt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundStar, Dt.a.backgroundStar2)
				})), a.a.createElement("img", {
					src: t,
					className: r
				}), i && a.a.createElement(a.a.Fragment, null, a.a.createElement(Nt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleBottomLeft)
				}), a.a.createElement(Nt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleTopRight)
				}), a.a.createElement(Nt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleBottomRight)
				}))))
			}
			var Ft = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				Vt = s.n(Ft);

			function Ut(e) {
				const {
					award: t,
					className: s,
					giverId: o,
					giverName: r
				} = e, n = xt(t.coinPrice), i = t.icon128 ? t.icon128.url : t.icon.url;
				return a.a.createElement("div", {
					className: Object(d.a)(s, Vt.a.container),
					role: "presentation"
				}, a.a.createElement(Bt, {
					iconUrl: i,
					tier: n,
					className: Vt.a.awardIconAnimation
				}), a.a.createElement(Pt, {
					awardName: t.name,
					className: Vt.a.attributionAnimation,
					giverId: o,
					giverName: r,
					tier: n
				}))
			}
			var Ht = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				Kt = s.n(Ht);
			class qt extends o.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: o
					} = this.props;
					return e && o && s ? a.a.createElement("div", {
						className: Object(d.a)(t, Kt.a.awardOverlay),
						role: "presentation"
					}, a.a.createElement(Ut, {
						award: e,
						giverId: o,
						giverName: s
					})) : null
				}
			}
			var Gt = Object(r.b)(() => Object(i.a)(e => e, Et.b, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: o,
						authorId: a
					} = t;
					return {
						award: s ? Object(yt.a)(e, s) : void 0,
						giverId: a,
						giverName: o
					}
				}))(qt),
				Wt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Jt = s.n(Wt);
			const Qt = Object(r.b)(() => Object(i.c)({
					awardedCommentLinks: (e, {
						commentsPageKey: t
					}) => {
						return Object(wt.g)(e, {
							commentsPageKey: t
						}).filter(t => {
							const s = Object(Et.b)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: wt.u
				})),
				Xt = e => ({
					prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
					prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? e.awardedCommentLinks.length : 0,
					prevCommentsPageKey: e.commentsPageKey
				});
			class zt extends o.Component {
				constructor(e) {
					super(e), this.state = Xt(e)
				}
				shouldComponentUpdate(e) {
					const {
						awardedCommentLinks: t,
						commentsPageKey: s
					} = this.props;
					return e.commentsPageKey !== s || e.awardedCommentLinks.length !== t.length
				}
				static getDerivedStateFromProps(e, t) {
					if (e.commentsPageKey !== t.prevCommentsPageKey) return Xt(e);
					return {
						prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
						prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? t.prevAwardedCommentLinks ? t.prevAwardedCommentLinks.length : e.awardedCommentLinks.length : 0
					}
				}
				render() {
					const {
						awardedCommentLinks: e,
						className: t,
						isFullyLoaded: s
					} = this.props, {
						prevAwardedCommentLinksTopIndex: o
					} = this.state;
					if (!s) return null;
					const r = e.slice(o);
					return r.length ? a.a.createElement("div", {
						className: Object(d.a)(t, Jt.a.awardOverlaySpectacle),
						role: "presentation"
					}, r.map(e => a.a.createElement(Gt, {
						className: Jt.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var Zt = Qt(zt);
			const Yt = (e, t) => e > t ? Ne.EXTENDED : e < et ? Ne.CRITICAL : e < tt ? Ne.LOW : Ne.NORMAL,
				$t = e => e / Ye,
				es = e => ts(e) % ot == 0,
				ts = e => Math.round(e / st) * st;
			var ss = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				os = s.n(ss);
			const as = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push(`Delay${t}`);
					return e
				})(),
				rs = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push(`X${5*t}`);
					return e
				})(),
				ns = ["15Deg", "45Deg", "75Deg"],
				is = e => e[Math.floor(Math.random() * e.length)],
				ds = () => {
					const e = [is(rs), is(ns), is(as)].map(e => os.a[`particle${e}`]).join(" ");
					return `${os.a.particle} ${e} ${Math.round(Math.random())?os.a.particleReverse:""}`
				},
				cs = 40,
				ls = 20;
			class ms extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < cs; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < ls; t++) e.push(this.createParticle(t, "particleLg"));
					return a.a.createElement("div", {
						className: os.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return a.a.createElement("div", {
						key: `${t}-${e}`,
						className: `${ds()} ${os.a[t]}`
					})
				}
			}
			var us = ms;
			const ps = () => ({
				estimatedTimeRemaining: null,
				previouslyVisible: !1,
				visible: !1,
				streamId: null,
				timerPausedAt: null,
				timerDiff: 0,
				timer: null,
				pillLabel: null
			});
			class hs extends o.Component {
				constructor() {
					super(...arguments), this.state = ps(), this.timerId = 0
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateTimer(), 1e3)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateTimer() {
					this.setState(e => null === e.timer || e.timer < 1 ? null : {
						timer: e.timer - 1,
						timerDiff: null !== e.timerPausedAt ? e.timerDiff : -1
					})
				}
				static isPillVisible(e, t, s) {
					return t || s > 0 || es(e) || e < tt
				}
				static getPillLabel(e, t) {
					const {
						currentStream: s,
						overlayOpen: o
					} = e, {
						timerDiff: a,
						timer: r
					} = t;
					if (!s || !s.meter || null === r) return null;
					if (a > 0) {
						if (a < Ye) {
							const e = ts(a);
							return b.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [b.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round($t(a));
							return b.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [b.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (r > s.meter.full_meter_duration) {
						const e = Math.round($t(s.meter.full_meter_duration)).toLocaleString();
						return b.fbt._("{number of minutes}+ minutes airtime left", [b.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (es(r) && !o && r > tt) {
						const e = Math.round($t(r)).toLocaleString();
						return b.fbt._("{number of minutes} minutes airtime left", [b.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const n = Math.round(r),
						i = Math.floor($t(n)),
						d = n % Ye,
						c = `${i}:${d<10?"0":""}${d}`;
					return b.fbt._("{mm:ss timestamp of remaining time} airtime left", [b.fbt._param("mm:ss timestamp of remaining time", c)], {
						hk: "1J5pOH"
					})
				}
				static getDerivedStateFromProps(e, t) {
					if (!e.currentStream || !e.currentStream.meter) return ps();
					const s = e.currentStream.post.id,
						o = e.currentStream.estimated_remaining_time;
					if (t.streamId !== s) {
						const t = {
							estimatedTimeRemaining: o,
							previouslyVisible: !1,
							visible: !0,
							streamId: s,
							timerPausedAt: null,
							timerDiff: 0,
							timer: o,
							pillLabel: null
						};
						return t.pillLabel = hs.getPillLabel(e, t), t
					}
					const a = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (o > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = o - t.estimatedTimeRemaining + e;
						s > st && (a.timer = o, a.timerDiff = s, a.timerPausedAt = o)
					}
					o !== t.estimatedTimeRemaining && Math.abs(a.timer - o) > at && (a.timer = o, a.timerDiff = o - t.timer, a.timerPausedAt = null), null !== a.timerPausedAt && a.timerPausedAt - a.timer > rt && (a.timerDiff = 0, a.timerPausedAt = null);
					const r = hs.getPillLabel(e, a),
						n = hs.isPillVisible(a.timer, e.overlayOpen, a.timerDiff);
					return {
						estimatedTimeRemaining: o,
						...a,
						streamId: s,
						pillLabel: r,
						previouslyVisible: t.visible,
						visible: n
					}
				}
				shouldComponentUpdate(e, t) {
					return !(!t.visible && !this.state.visible) && (t.streamId !== this.state.streamId || (t.visible !== this.state.visible || t.pillLabel !== this.state.pillLabel))
				}
				render() {
					const {
						currentStream: e,
						overlayOpen: t
					} = this.props, {
						visible: s,
						previouslyVisible: o,
						timer: r,
						pillLabel: n
					} = this.state;
					if (!(s && e && e.meter && r)) return null;
					const i = Yt(r, e.meter.full_meter_duration),
						c = !o,
						l = r < tt || t,
						m = this.state.timerDiff > 0;
					return a.a.createElement("div", {
						className: os.a.meterOverlay
					}, a.a.createElement("div", {
						className: os.a.meterPillWrapper
					}, m && a.a.createElement(us, null), a.a.createElement("div", {
						className: Object(d.a)(os.a.meterPillContainer, {
							[os.a.animateMeterInAndOut]: c && !l,
							[os.a.animateMeterInOnly]: c && l,
							[os.a.fillMeterCritical]: i === Ne.CRITICAL,
							[os.a.fillMeterLow]: i === Ne.LOW,
							[os.a.fillMeterNormal]: i === Ne.NORMAL || i === Ne.EXTENDED,
							[os.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, a.a.createElement("div", {
						className: os.a.meterLabel
					}, n))))
				}
			}
			var bs = hs,
				vs = s("./src/reddit/components/OverflowMenu/index.tsx"),
				gs = s("./src/reddit/controls/Dropdown/Row.tsx"),
				fs = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Ss = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				Os = s.n(Ss);
			const {
				fbt: _s
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Cs = ({
					label: e,
					onSelect: t,
					onToggle: s,
					subreddits: o
				}) => a.a.createElement(vs.b, {
					className: Os.a.overflowMenu,
					dropdownClassName: Os.a.dropdown,
					defaultButtonOutline: !0,
					disabled: o.length < 1,
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: a.a.createElement("div", {
						className: Os.a.overflowMenuIcon
					}, e, a.a.createElement(fs.a, {
						className: Os.a.dropdownTriangle
					})),
					onClick: s
				}, a.a.createElement("div", {
					className: Os.a.dropdownLabel
				}, _s._("Pick a Community", null, {
					hk: "8MoVj"
				})), o.map(e => a.a.createElement(gs.b, {
					className: Os.a.dropdownRow,
					displayText: e.prefixedName,
					iconWrapperClassName: Os.a.overflowItemIconWrapper,
					key: `rpan-recommended-viewer-subreddits-dropdown-${e.prefixedName}`,
					onClick: () => t(e)
				}))),
				ws = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				Es = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				ys = s.n(Es);
			class ks extends o.Component {
				constructor(e) {
					super(e), this.setControlBarRef = e => {
						this.controlBarApi = e
					}, this.onToggleMute = e => {
						e.stopPropagation(), this.props.toggleMute()
					}, this.state = {
						settingChange: void 0
					}
				}
				componentDidUpdate(e) {
					const {
						videoCurrentTime: t,
						videoTotalTime: s
					} = this.props;
					this.controlBarApi && (t !== e.videoCurrentTime && this.controlBarApi.setCurrentTime(t), s !== e.videoTotalTime && this.controlBarApi.setTotalTime(s))
				}
				render() {
					const {
						className: e,
						hideControlBar: t,
						isLive: s,
						isMuted: o,
						isPaused: r,
						isVisible: n,
						onPlayPauseToggle: i,
						onVideoPositionUpdate: c,
						seekBarRef: l,
						settingChange: m,
						setVolume: u,
						hideLiveLabel: p,
						videoCurrentTime: h,
						videoTotalTime: b,
						volume: v,
						volumeRef: g
					} = this.props;
					return a.a.createElement(ws.b, {
						className: Object(d.a)(e, ys.a.scrubberBar, {
							[ys.a.visible]: n
						}),
						currentTime: h || 0,
						hasAudio: !0,
						hideControlBar: !!t,
						hideFullScreenButton: !0,
						hideGradient: !0,
						isFullScreen: !1,
						isListing: !1,
						isLive: s,
						isMuted: o,
						isPaused: r,
						playPauseVideo: i,
						ref: this.setControlBarRef,
						seekBarRef: l,
						settingChange: m,
						setVideoPosition: c,
						setVolume: u,
						hideLiveLabel: p,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.onToggleMute,
						totalTime: b || 0,
						volume: v,
						volumeRef: g
					})
				}
			}
			var xs = ks,
				js = s("./node_modules/lodash/debounce.js"),
				Is = s.n(js),
				Ls = s("./src/lib/prettyPrintNumber/index.ts"),
				Rs = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				Ps = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Ns = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Ts = s("./src/reddit/models/Vote/index.ts"),
				Ms = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				As = s.n(Ms);
			const Ds = Object(i.c)({
				currentStream: (e, {
					currentStreamId: t
				}) => Object(Xe.l)(e, t)
			});
			class Bs extends a.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(Ts.a.upvoted), this.downVotes = () => this.calculateVotes(Ts.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === Ts.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(Ts.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = Is()(() => this.vote(Ts.a.upvoted), L.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = Is()(() => this.vote(Ts.a.downvoted), L.Y, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: Ts.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState({
						...this.state,
						displayedVoteState: Object(Ts.e)(e.post.voteState)
					})
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState({
						...this.state,
						displayedVoteState: null !== t.post.voteState ? Object(Ts.e)(t.post.voteState) : Ts.a.notVoted
					}))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return a.a.createElement("div", {
						className: As.a.statsPanel
					}, a.a.createElement("div", {
						className: As.a.voteContainer
					}, a.a.createElement("button", {
						className: Object(d.a)(As.a.upButton, {
							[As.a.activeVote]: this.isVoteActive(Ts.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": b.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, a.a.createElement(Ns.a, {
						className: As.a.voteIcon
					})), a.a.createElement("p", {
						className: As.a.votesCounter
					}, Object(Ls.b)(this.upVotes()))), a.a.createElement("div", {
						className: As.a.watchingContainer
					}, a.a.createElement("div", {
						className: As.a.watchingCounter
					}, Object(Ls.b)(t)), a.a.createElement("p", {
						className: As.a.watchingCaption
					}, this.props.isLive ? b.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : b.fbt._("Views", null, {
						hk: "ixhZU"
					}))), a.a.createElement("div", {
						className: As.a.voteContainer
					}, a.a.createElement("button", {
						className: Object(d.a)(As.a.downButton, {
							[As.a.activeVote]: this.isVoteActive(Ts.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": b.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, a.a.createElement(Ps.a, {
						className: As.a.voteIcon
					})), a.a.createElement("p", {
						className: As.a.votesCounter
					}, Object(Ls.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, Ts.a.notVoted), void this.setState({
							...this.state,
							displayedVoteState: Ts.a.notVoted
						});
						this.props.vote(t.post.id, e), this.setState({
							...this.state,
							displayedVoteState: e
						}), e === Ts.a.upvoted ? this.props.onUpvote() : this.props.onDownvote()
					}
				}
			}
			var Fs = Object(r.b)(Ds, (e, t) => ({
					vote: (t, s) => e(Object(Rs.a)(t, s))
				}))(Bs),
				Vs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				Us = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				Hs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Ks = s.n(Hs),
				qs = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				Gs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Ws = s.n(Gs),
				Js = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				Qs = s.n(Js);
			const {
				fbt: Xs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var zs;
			! function(e) {
				e.EndScreen = "END_SCREEN", e.Panel = "PANEL"
			}(zs || (zs = {}));
			const Zs = (e, {
					currentStreamId: t
				}) => t ? Object(Xe.l)(e, t) : void 0,
				Ys = Object(i.c)({
					currentStream: Zs,
					inStreamingUiRefreshViewer: qe.f,
					inViewerFeedTheMeter: (e, t) => Object(qe.g)(e, t, Zs),
					isApiError: (e, {
						currentStreamId: t
					}) => Object(Qe.c)(e, t),
					isBatchApiError: Qe.e,
					isBatchPending: Qe.f,
					isCommentsLocked: (e, {
						currentStreamId: t
					}) => !!t && Object(Xe.g)(e, t),
					isConfigError: Qe.g,
					isIntroInProgress: ze.b,
					isMenuOpened: e => e.tooltip.tooltipId === Vs.d || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltip.tooltipId || e.tooltip.tooltipId === Us.j,
					lastBatchApiRequestTs: Qe.i,
					recommendedViewerSubredditOptions: Qe.j,
					isModWithPostPermissions: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(_t.h)(e, {
							subredditId: Object(Ct.D)(e, s)
						})
					},
					isUserSubscriber: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(Ct.eb)(e, {
							identifier: {
								name: s,
								type: gt.a.SUBREDDIT
							}
						}, !0)
					},
					videoShareModalOpen: (e, {
						currentStreamId: t
					}) => !!t && Object(ve.a)(e) === Object(vt.a)(t),
					subredditByName: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return s ? Object(Ct.x)(e, {
							subredditName: s
						}) : null
					}
				});
			class $s extends o.Component {
				constructor(e) {
					super(e), this.onSubscribeToSubreddit = () => {
						this.props.sendEvent(Object(He.k)(this.props.currentStream)), this.props.onSubscribeSubreddit()
					}, this.onProfileSubscriptionChange = e => {
						e ? this.props.sendEvent(Object(He.c)(this.props.currentStream)) : this.props.sendEvent(Object(He.n)(this.props.currentStream))
					}, this.onCrosspost = e => {
						this.props.currentStreamId && window.open(`${Ot.b}?source_id=${this.props.currentStreamId}`, "_blank"), this.props.onCrosspost(e)
					}, this.onShareLink = e => {
						e.source && (this.source = e.source), this.props.onToggleVideoShareModal(), this.props.onShareLink(e)
					}, this.onCloseShareModal = e => {
						e && (this.props.onCopyLink({
							referralId: this.referralId,
							source: this.source
						}), this.props.copyLink(e)), this.props.onToggleVideoShareModal()
					}, this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), L.o)
					}, this.onMouseLeave = () => {
						window.clearTimeout(this.hoverTimeout), this.setState({
							isHovered: !1,
							settingChange: void 0
						})
					}, this.onMouseDown = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: bt.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: bt.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === bt.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === bt.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === bt.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === bt.a.Volume && s && s.handleMouseUp(e), this.setState({
							settingChange: void 0
						})
					}, this.onMouseHoverScrubber = e => {
						const {
							target: t,
							currentTarget: s
						} = e;
						if (!(t instanceof Element && s instanceof Element)) return;
						const o = this.isHoveringVolumeControl(t, s);
						o !== this.state.isHoveringVolumeControl && this.setState({
							isHoveringVolumeControl: o
						})
					}, this.onMouseLeaveScrubber = () => {
						this.setState({
							isHoveringVolumeControl: !1
						})
					}, this.handleClickLiveBroadcastStatus = () => {
						this.props.onVideoPositionUpdate(this.props.videoTotalTime)
					}, this.isVisible = () => this.state.isHovered || this.props.isVisible || this.props.isMenuOpened, this.onToggleLock = () => {
						this.props.isCommentsLocked ? this.props.onUnlockComments() : this.props.onLockComments()
					}, this.onCopyLink = () => {
						const {
							copyLink: e,
							currentStream: t,
							onShareLink: s
						} = this.props;
						if (!t) return;
						const o = Object(Ue.a)(t.post.id),
							a = it()(),
							r = {
								[Fe.r]: a,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							};
						e(Object(O.a)(o, r)), s({
							referralId: a
						})
					}, this.referralId = it()(), this.source = zs.Panel, this.state = {
						isHovered: !1,
						isHoveringVolumeControl: !1,
						settingChange: void 0
					}
				}
				componentDidMount() {
					this.props.getModeratedSubreddits()
				}
				componentWillUnmount() {
					window.clearTimeout(this.hoverTimeout)
				}
				render() {
					return this.props.inStreamingUiRefreshViewer ? this.renderUiRefresh() : this.renderUiLegacy()
				}
				renderUiLegacy() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						isLive: s,
						isUnavailable: o,
						onHide: r,
						onReport: n,
						onToggleMenu: i,
						onUpvote: c,
						onDownvote: l
					} = this.props, m = e && e.post.id;
					return a.a.createElement("div", {
						className: Object(d.a)(Ws.a.overlay, {
							[Ws.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !t && a.a.createElement("div", {
						className: Ws.a.overlayTop
					}, this.renderRecommendedViewerSubreddit(), e && !o && a.a.createElement(a.a.Fragment, null, a.a.createElement(Vs.e, {
						onClick: this.props.onToggleVideoShareModal
					}), a.a.createElement(Vs.b, {
						onClick: i,
						onHideClick: r,
						onReportClick: n
					}))), e && !t && !o && !!m && a.a.createElement(Zt, {
						className: Ws.a.awardOverlaySpectacle,
						commentsPageKey: Object(dt.a)(m)
					}), e && !t && !o && a.a.createElement("div", {
						className: Ws.a.overlayTitle
					}, this.renderTitleContainer()), a.a.createElement("div", {
						className: Ws.a.overlayCenter
					}, this.getContent()), e && !t && !o && a.a.createElement("div", {
						className: Ws.a.overlayBottom
					}, a.a.createElement(Fs, {
						currentStreamId: e.post.id,
						isLive: s,
						onUpvote: c,
						onDownvote: l
					}), this.renderScrubber()))
				}
				renderUiRefresh() {
					const {
						currentStream: e,
						inViewerFeedTheMeter: t,
						isIntroInProgress: s,
						isCommentsLocked: o,
						isLive: r,
						isModWithPostPermissions: n,
						isUnavailable: i,
						onHide: c,
						onReport: l,
						onSelectSubreddit: m,
						onToggleMenu: u,
						recommendedViewerSubredditOptions: p,
						related: h,
						subreddit: b,
						isUserSubscriber: v,
						onEndBroadcast: g,
						subredditByName: f,
						onShareToChat: S
					} = this.props;
					if (s || !e || i) return null;
					const _ = e && e.post.id,
						{
							authorInfo: C
						} = e.post;
					return a.a.createElement("div", {
						className: Object(d.a)(Qs.a.overlay, {
							[Qs.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !s && !i && !!_ && a.a.createElement(Zt, {
						className: Ws.a.awardOverlaySpectacle,
						commentsPageKey: Object(dt.a)(_)
					}), t && a.a.createElement(bs, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), a.a.createElement("div", {
						className: Qs.a.overlayTop
					}, a.a.createElement("div", {
						className: Qs.a.overlayTopLeft
					}, a.a.createElement("div", {
						className: Qs.a.meta
					}, a.a.createElement(Us.c, null, r ? a.a.createElement(Us.h, {
						onClick: this.handleClickLiveBroadcastStatus
					}) : a.a.createElement(Us.p, null)), a.a.createElement(Us.n, {
						text: e.post.title
					}), a.a.createElement("div", {
						className: Qs.a.subredditInfo
					}, a.a.createElement(Us.l, {
						onSelect: m,
						related: h,
						subreddit: b,
						subreddits: p
					}), a.a.createElement(Us.f, {
						onSubscribe: this.onSubscribeToSubreddit,
						isSubscribed: v
					})), a.a.createElement(Us.r, {
						broadcast: e,
						live: r
					}))), a.a.createElement("div", {
						className: Qs.a.overlayTopRight
					}, Object(Us.s)(C) ? a.a.createElement(Us.m, {
						profile: C,
						currentStream: e,
						onSubscriptionChange: this.onProfileSubscriptionChange
					}) : null, a.a.createElement(Us.i, {
						onClick: u,
						onHideClick: c,
						onReportClick: l,
						onToggleLockClick: this.onToggleLock,
						isCommentsLocked: o,
						hasModeratorPermissions: n,
						onEndBroadcastClick: g,
						onRpanStudioClick: this.props.onRpanStudioClick,
						subreddit: f
					}), a.a.createElement(Us.k, {
						onClickShare: this.props.onShare,
						onClickCrosspost: () => {
							this.onCrosspost({
								source: zs.Panel
							})
						},
						onClickVideoShare: () => {
							this.onShareLink({
								source: zs.Panel
							})
						},
						onClickShareToChat: () => {
							const e = Object(O.a)(Object(Ue.a)(_), {
								[Fe.r]: this.referralId,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							});
							S(e), this.props.sendEvent(Object(qs.a)())
						}
					}), a.a.createElement("div", {
						className: Object(d.a)({
							[Qs.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, a.a.createElement(Us.q, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), a.a.createElement("div", {
						className: Qs.a.overlayBottom,
						onMouseEnter: this.onMouseHoverScrubber,
						onMouseLeave: this.onMouseLeaveScrubber,
						onMouseMove: this.onMouseHoverScrubber
					}, this.renderScrubber()), this.props.videoShareModalOpen && a.a.createElement(vt.b, {
						className: Ws.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !0,
						url: Object(O.a)(Object(Ue.a)(_), {
							[Fe.r]: this.referralId,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
				renderScrubber() {
					const {
						inStreamingUiRefreshViewer: e,
						isLive: t,
						isMuted: s,
						isPaused: o,
						onPlayPauseToggle: r,
						onVideoPositionUpdate: n,
						setVolume: i,
						toggleMute: d,
						videoCurrentTime: c,
						videoTotalTime: l,
						volume: m
					} = this.props, u = e ? Qs.a.controls : "", p = e || this.isVisible();
					return a.a.createElement("div", {
						className: u
					}, a.a.createElement(xs, {
						isLive: t,
						isMuted: s,
						isPaused: o,
						isVisible: p,
						onPlayPauseToggle: r,
						onVideoPositionUpdate: n,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: i,
						hideLiveLabel: e,
						toggleMute: d,
						videoCurrentTime: c,
						videoTotalTime: l,
						volume: m,
						volumeRef: e => this.volumeControl = e
					}))
				}
				renderPrompt() {
					const {
						currentStream: e,
						currentStreamId: t,
						handleGiveAward: s,
						isApiError: o,
						isBatchApiError: r,
						isBatchPending: n,
						isConfigError: i,
						isIntroInProgress: d,
						isLoading: c,
						isMuted: l,
						isUnavailable: m,
						inViewerFeedTheMeter: u,
						lastBatchApiRequestTs: p,
						onReplayVideo: h,
						showErrorPrompt: b,
						showStreamEndedPrompt: v,
						toggleMute: g
					} = this.props;
					if (b || d && i || t && o || !t && r) return a.a.createElement(Us.d, null);
					if (d) return a.a.createElement("div", {
						className: Ws.a.intro
					}, a.a.createElement(Vs.c, {
						isMuted: l,
						onToggle: g
					}));
					if (m || !t && !r && !n && p) return null;
					if (c) return a.a.createElement(Us.o, null);
					if (e && e.stream.state === St.a.DISCONNECTED) return a.a.createElement(Us.b, null);
					if (v) return a.a.createElement(Us.a, {
						onClickReplay: h,
						onClickShare: () => {
							this.onShareLink({
								source: zs.EndScreen
							}), this.source = zs.EndScreen
						},
						onClickCrosspost: () => {
							this.onCrosspost({
								source: zs.EndScreen
							})
						}
					});
					const f = e && e.meter && e.estimated_remaining_time < $e;
					return u && f ? a.a.createElement(Us.e, {
						onClickAward: s
					}) : null
				}
				renderRecommendedViewerSubreddit() {
					const {
						onSelectSubreddit: e,
						recommendedViewerSubredditOptions: t,
						related: s,
						subreddit: o
					} = this.props;
					let r = "",
						n = "";
					"home" === s ? (r = "All", n = "All") : "r/popular" === s ? (r = "Popular", n = "r/popular") : o ? (r = o.replace(/^r\//, ""), n = o) : (r = "All", n = "All");
					const i = t.filter(e => e.prefixedName !== n);
					return a.a.createElement("div", {
						className: Ws.a.menuContainer
					}, a.a.createElement(Cs, {
						label: r,
						onSelect: e,
						subreddits: i
					}))
				}
				renderTitleContainer() {
					const {
						currentStream: e,
						isLive: t
					} = this.props;
					if (e) return a.a.createElement("div", {
						className: Ws.a.titleContainer
					}, a.a.createElement("h1", {
						className: Ws.a.videoTitle
					}, e.post.title), !t && a.a.createElement("div", {
						className: Ws.a.RecordedLabel
					}, Xs._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Ks.a.ControlVolume)) return !0;
						e = e.parentElement
					}
					return !1
				}
				getContent() {
					const {
						currentStream: e,
						currentStreamId: t,
						isApiError: s,
						isBatchApiError: o,
						isBatchPending: r,
						isConfigError: n,
						isIntroInProgress: i,
						isLoading: d,
						isMuted: c,
						isUnavailable: l,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: p,
						showStreamEndedPrompt: h,
						toggleMute: b
					} = this.props;
					return p || i && n || t && s || !t && o ? a.a.createElement("div", {
						className: Ws.a.prompt
					}, Xs._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? a.a.createElement("div", {
						className: Ws.a.intro
					}, a.a.createElement(Vs.c, {
						isMuted: c,
						onToggle: b
					})) : l || !t && !o && !r && m ? null : d ? a.a.createElement("div", {
						className: Ws.a.prompt
					}, Xs._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === St.a.DISCONNECTED ? a.a.createElement("div", {
						className: Ws.a.prompt
					}, Xs._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : h ? a.a.createElement("div", {
						className: Ws.a.prompt
					}, a.a.createElement("div", {
						className: Ws.a.promptButtonSet
					}, a.a.createElement(Vs.g, {
						onClick: u
					}), a.a.createElement(Vs.h, {
						onClick: this.props.onToggleVideoShareModal
					}))) : null
				}
			}
			var eo = Object(r.b)(Ys, (e, t) => ({
					copyLink: t => e(Object(ce.D)(t)),
					onToggleVideoShareModal: () => {
						t.currentStreamId && e(Object(x.i)(Object(vt.a)(t.currentStreamId)))
					},
					onHide: () => {
						t.currentStreamId && (e(Object(ce.eb)(t.currentStreamId, !0, !0, !0)), e(T(t.currentStreamId)))
					},
					onLockComments: () => {
						t.currentStreamId && e(ut(t.currentStreamId))
					},
					onUnlockComments: () => {
						t.currentStreamId && e(pt(t.currentStreamId))
					},
					handleGiveAward: () => {
						if (t.currentStreamId) {
							const s = Object(ft.e)(ft.a.GildingFlow, !0);
							e(Object(ct.d)({
								correlationId: s,
								thingId: t.currentStreamId
							}))
						}
					},
					onSubscribeSubreddit: () => {
						const s = t.subreddit && t.subreddit.split("/").pop();
						s && e(Object(ht.d)([{
							name: s,
							type: gt.a.SUBREDDIT
						}], !0))
					},
					getModeratedSubreddits: () => e(Object(lt.b)())
				}))($s),
				to = s("./src/lib/constants/index.ts"),
				so = s("./src/lib/makeDraftKey/index.ts"),
				oo = s("./src/reddit/actions/pages/comments.ts"),
				ao = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				ro = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				no = s("./src/reddit/components/CommentsChat/Loader.ts"),
				io = s("./src/reddit/selectors/posts.ts"),
				co = s("./src/reddit/icons/svgs/Send/index.tsx"),
				lo = s("./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less"),
				mo = s.n(lo),
				uo = s("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx");
			const {
				fbt: po
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ho = ({
					postId: e
				}) => {
					const t = Object(r.e)(t => Object(io.G)(t, {
							postId: e
						})),
						s = Object(r.d)(),
						o = Object(pe.b)(),
						n = t.isGildable;
					return a.a.createElement("span", {
						className: mo.a.InputLine
					}, a.a.createElement("span", {
						className: mo.a.FormBackground
					}, a.a.createElement("span", {
						className: mo.a.FormLine
					}, a.a.createElement("div", {
						className: mo.a.Text
					}, po._("Chat is disabled", null, {
						hk: "gQrh3"
					}))), a.a.createElement(co.a, {
						className: mo.a.SendIcon
					})), n && a.a.createElement(uo.a, {
						showSubmitInsideTextArea: !0,
						isLivestreaming: !0,
						sendEvent: o,
						postId: e,
						handleGiveAward: t => {
							s(Object(ct.d)({
								correlationId: t,
								thingId: e
							}))
						}
					}))
				},
				bo = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx");
			const {
				fbt: vo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), go = K.a.wrapped(q.g, "ModalFooter", z.a), fo = K.a.wrapped(q.i, "ModalHeader", z.a);
			var So = ({
				toggleModal: e,
				bodyText: t,
				title: s
			}) => a.a.createElement(q.e, null, a.a.createElement(fo, null, a.a.createElement(Q.a, null, a.a.createElement("div", null, a.a.createElement("div", {
				className: z.a.Title
			}, s)), a.a.createElement(W.a, {
				onClick: e
			}, a.a.createElement(q.b, null)))), a.a.createElement("div", {
				className: z.a.ModalText
			}, t), a.a.createElement(go, {
				className: z.a.ModalFooter
			}, a.a.createElement(G.l, {
				onClick: e,
				className: z.a.Button,
				"data-redditstyle": !0
			}, vo._("I Understand", null, {
				hk: "1f4y1d"
			}))));
			const {
				fbt: Oo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _o = () => Oo._("Because you’ve been flagged multiple times for violating Reddit’s {=Content Policy,} the system has removed your ability to participate in this chat. This can’t be undone (not even by a mod), but after 24 hours you’ll be able to chat again.", [Oo._param("=Content Policy,", a.a.createElement("a", {
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, Oo._("{=Content Policy},", [Oo._param("=Content Policy", a.a.createElement("span", {
				className: z.a.Link
			}, Oo._("Content Policy", null, {
				hk: "47cyc2"
			})))], {
				hk: "3BF41m"
			})))], {
				hk: "ITZAq"
			});
			var Co = Object(H.a)(({
					toggleModal: e
				}) => a.a.createElement(So, {
					bodyText: _o(),
					title: Oo._("Sit back and watch for a bit", null, {
						hk: "nd6D"
					}),
					toggleModal: e
				})),
				wo = s("./src/reddit/icons/svgs/Info/index.tsx");
			const {
				fbt: Eo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yo = Object(i.c)({
				isMuteModalOpen: e => "rpan-mute-chat-modal-id" === Object(ve.a)(e)
			});
			class ko extends a.a.Component {
				constructor() {
					super(...arguments), this.onClickInfo = () => {
						this.props.onToggleMuteModal()
					}
				}
				render() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: mo.a.InputLine
					}, a.a.createElement("span", {
						className: mo.a.FormBackground
					}, a.a.createElement("span", {
						className: mo.a.FormLine
					}, a.a.createElement(wo.a, {
						className: mo.a.InfoIcon,
						onClick: this.onClickInfo
					}), a.a.createElement("div", {
						className: mo.a.Text
					}, Eo._("Chat is unavailable", null, {
						hk: "12EjN3"
					}))), a.a.createElement(co.a, {
						className: mo.a.SendIcon
					}))), this.props.isMuteModalOpen && a.a.createElement(Co, {
						toggleModal: this.props.onToggleMuteModal
					}))
				}
			}
			var xo = Object(r.b)(yo, e => ({
				onToggleMuteModal: () => e(Object(x.i)("rpan-mute-chat-modal-id"))
			}))(ko);
			const {
				fbt: jo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Io = () => jo._("Your messages have been flagged for violating Reddit’s {=Content Policy.} Have fun chatting, but if you’re flagged multiple times, you may lose the ability to participate in RPAN chats.", [jo._param("=Content Policy.", a.a.createElement("a", {
				className: z.a.Link,
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, jo._("{=Content Policy}.", [jo._param("=Content Policy", a.a.createElement("span", {
				className: z.a.Link
			}, jo._("Content Policy", null, {
				hk: "36gq1Y"
			})))], {
				hk: "2SSN6t"
			})))], {
				hk: "4aZsnf"
			});
			var Lo = Object(H.a)(({
					toggleModal: e
				}) => a.a.createElement(So, {
					bodyText: Io(),
					title: jo._("Be mindful of what you say", null, {
						hk: "3CDXHh"
					}),
					toggleModal: e
				})),
				Ro = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less")),
				Po = s.n(Ro);
			const No = Object(r.b)(() => Object(i.c)({
					allAwards: e => e.awards.models,
					post: (e, {
						postId: t
					}) => Object(io.G)(e, {
						postId: t
					})
				})),
				To = ["Center", "Left", "Right"],
				Mo = ["Low", "Mid", "High"],
				Ao = () => Math.floor(800 * Math.random()),
				Do = e => e[Math.floor(Math.random() * e.length)],
				Bo = e => {
					const t = Do(To),
						s = Do(Mo),
						o = xt(e);
					return Po.a[`award_${o}Tier_${s}${t}`]
				};
			class Fo extends o.Component {
				shouldComponentUpdate(e) {
					return !(!e.post || !e.post.awardCountsById) && (!(this.props.post && this.props.post.awardCountsById) || this.props.post.id !== e.post.id)
				}
				render() {
					const {
						allAwards: e,
						post: t
					} = this.props;
					if (!t || !t.awardCountsById) return null;
					const s = Object.entries(t.awardCountsById).map(([t, s]) => {
							const {
								icon: o,
								coinPrice: a
							} = e[t];
							return {
								coinPrice: a,
								count: s,
								iconUrl: o.url,
								id: t
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						o = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: r
						} = e;
						for (let n = 0; n < s; n++) {
							const s = `${Ao()}ms`,
								i = Bo(t),
								c = a.a.createElement("img", {
									key: `${e.id}-${n}`,
									className: Object(d.a)(Po.a.award, i),
									src: r,
									style: {
										animationDelay: s
									}
								});
							o.push(c)
						}
					}), a.a.createElement("div", {
						className: Po.a.awardBubbler,
						role: "presentation"
					}, o)
				}
			}
			var Vo = No(Fo),
				Uo = s("./src/reddit/contexts/Post/index.tsx"),
				Ho = s("./src/reddit/models/PostDraft/index.ts");
			const Ko = Object(i.a)((e, t) => t, e => e.publicAccessNetwork.automuteLevels, (e, t) => {
				var s;
				return (null === (s = null == t ? void 0 : t[e]) || void 0 === s ? void 0 : s.level) || 0
			});
			var qo = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Go = s.n(qo);
			const Wo = Object(i.c)({
				isDisabled: (e, t) => Object(Xe.f)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: Ze.O,
				isPostDataLoaded: (e, {
					postId: t
				}) => !!Object(io.G)(e, {
					postId: t
				}),
				replyComment: (e, {
					postId: t
				}) => Object(wt.s)(e, {
					commentsPageKey: Object(dt.a)(t)
				}),
				automuteViolationLevel: (e, {
					postId: t
				}) => Ko(e, t)
			});
			var Jo;
			! function(e) {
				e.Warning = "warning", e.Mute = "mute"
			}(Jo || (Jo = {}));
			class Qo extends o.Component {
				constructor(e) {
					super(e), this.onDismissModal = () => {
						this.setState({
							automuteModal: null
						})
					}, this.state = {
						automuteModal: null
					}, this.props.postId && this.props.isLoggedIn && this.props.fetchAutomuteStatus()
				}
				componentDidMount() {
					this.props.postId && this.props.loadComments()
				}
				componentDidUpdate(e) {
					this.props.postId !== e.postId && (this.props.loadComments(), this.props.isLoggedIn && this.props.fetchAutomuteStatus()), this.props.automuteViolationLevel > e.automuteViolationLevel && (1 === this.props.automuteViolationLevel ? this.setState({
						automuteModal: Jo.Warning
					}) : this.props.automuteViolationLevel > 1 && this.setState({
						automuteModal: Jo.Mute
					}))
				}
				get shouldMuteChat() {
					return this.props.automuteViolationLevel > 1
				}
				render() {
					const {
						postId: e,
						isDisabled: t,
						isLoggedIn: s,
						isPostDataLoaded: o,
						location: r,
						openLoginModal: n,
						openRegisterModal: i,
						sendEvent: c,
						subredditId: l,
						replyComment: m,
						onFocusMessageInput: u
					} = this.props, p = Object(dt.a)(e), h = m ? Object(so.a)(Ho.c.replyToComment, m.id) : Object(so.a)(Ho.c.replyToPost, e);
					return o ? a.a.createElement("div", {
						"aria-label": b.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Go.a.streamingChat,
						onClick: this.props.onChatClick
					}, a.a.createElement(Uo.a, {
						postId: e
					}, a.a.createElement(no.a, {
						className: Go.a.chatScroller,
						emptyStateClassName: Go.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: l,
						commentsPageKey: p
					}), s && (this.shouldMuteChat ? a.a.createElement(xo, null) : t ? a.a.createElement(ho, {
						postId: e
					}) : a.a.createElement(bo.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: m,
						draftKey: h,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: c,
						onFocusMessageInput: u,
						isLivestreaming: !0
					})), a.a.createElement(Vo, {
						postId: e
					}), !s && a.a.createElement(ro.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: r,
						openLoginModal: n,
						openRegisterModal: i,
						origin
					}), this.state.automuteModal === Jo.Warning && a.a.createElement(Lo, {
						toggleModal: this.onDismissModal
					}), this.state.automuteModal === Jo.Mute && a.a.createElement(Co, {
						toggleModal: this.onDismissModal
					}))) : a.a.createElement("div", {
						className: Object(d.a)(Go.a.streamingChat, Go.a.prompt)
					}, b.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var Xo = Object(r.b)(Wo, (e, {
					postId: t
				}) => ({
					loadComments: () => e(Object(oo.commentsPageDataRequested)(t, void 0, {
						sort: to.u.CHAT
					}, to.u.CHAT)),
					openLoginModal: () => e(Object(m.i)()),
					openRegisterModal: () => e(Object(m.j)()),
					fetchAutomuteStatus: () => e(Object(ao.b)(t))
				}))(Qo),
				zo = s("./src/reddit/icons/svgs/Pagination/back.tsx");
			var Zo = e => a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				Yo = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				$o = s.n(Yo);
			const ea = ({
				isNext: e,
				onClick: t,
				stream: s
			}) => a.a.createElement("div", {
				className: Object(d.a)($o.a.switchContainer, e ? $o.a.switchContainerNext : $o.a.switchContainerPrevious)
			}, a.a.createElement("button", {
				className: $o.a.switchButton,
				disabled: !s,
				onClick: t,
				"aria-label": e ? b.fbt._("Forward arrow", null, {
					hk: "3b7sZa"
				}) : b.fbt._("Back arrow", null, {
					hk: "1upGBK"
				}),
				value: e ? "forward" : "back"
			}, a.a.createElement("div", {
				className: $o.a.streamThumbnail,
				style: s ? {
					backgroundImage: `url(${s.stream.thumbnail})`
				} : {}
			}), e ? a.a.createElement(Zo, {
				className: $o.a.arrowIcon
			}) : a.a.createElement(zo.a, {
				className: $o.a.arrowIcon
			})));
			var ta = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(ea, {
				isNext: !1,
				onClick: e.onPrevious,
				stream: e.previousStream
			}), a.a.createElement(ea, {
				isNext: !0,
				onClick: e.onNext,
				stream: e.nextStream
			}));
			Object(R.a)(L.s);
			const sa = Object(R.a)(L.A),
				oa = (e, t) => async (s, o) => {
					const a = o(),
						r = Date.now(),
						n = e.map(e => Object(Xe.l)(a, e)).filter(Boolean).map(e => ({
							imageUrl: `${e.stream.thumbnail}?${r}`,
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await aa(n, t)
				}, aa = (e, t) => Promise.all(e.map(e => ra(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), ra = e => new Promise((t, s) => {
					const o = new Image;
					o.onload = () => t(), o.onerror = () => s(), o.src = e
				}).then(() => !0, () => !1);
			var na, ia = s("./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less"),
				da = s.n(ia);
			! function(e) {
				e.Loading = "Loading", e.Preview = "Preview", e.Static = "Static"
			}(na || (na = {}));
			class ca extends o.Component {
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: o
					} = this.props, a = [];
					e && a.push(e.post.id), s && a.push(s.post.id), o && a.push(o.post.id), a.length > 0 && t(a)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: o,
						previousStream: a
					} = this.props, r = [];
					t && this.isStreamChanged(t, e.currentStream) && r.push(t.post.id), a && this.isStreamChanged(a, e.previousStream) && r.push(a.post.id), s && this.isStreamChanged(s, e.nextStream) && r.push(s.post.id), r.length > 0 && o(r)
				}
				render() {
					const {
						previewUrl: e,
						visualEffect: t,
						visualEffectLabel: s
					} = this.props;
					let o, r;
					if (t === na.Loading) o = da.a.loading;
					else if (t === na.Preview) o = da.a.preview, r = {
						backgroundImage: `url(${e})`
					};
					else {
						if (t !== na.Static) return null;
						o = da.a.static
					}
					return a.a.createElement("div", {
						className: da.a.container
					}, a.a.createElement("div", {
						className: o,
						"aria-label": s,
						style: r
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var la = Object(r.b)(null, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, o) => {
						const a = await s(oa(e, t));
						s(sa(a))
					})(t))
				}))(ca),
				ma = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				ua = s.n(ma);
			const pa = Object(S.a)(U.a, {
					playerName: "RPAN Video Player"
				}),
				ha = Object(i.c)({
					currentStream: Xe.d,
					currentStreamStartTime: Xe.e,
					currentHlsUrl: Xe.b,
					inViewerFeedTheMeter: (e, t) => Object(qe.g)(e, t, Xe.d),
					isIntroInProgress: ze.b,
					isOverlayOpen: Je.i,
					isReportFlowOpen: (e, {
						streamIdFromPath: t
					}) => {
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === Object(Ue.g)(t || "")
					},
					lastChatActivityUtcTs: ze.c,
					nextStream: Xe.h,
					nextTopStream: Xe.i,
					playbackState: Xe.j,
					previousStream: Xe.k,
					streamById: e => t => Object(Xe.l)(e, t),
					unavailableVideoUrl: Qe.o,
					volume: We.d,
					isEndBroadcastModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
					isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e),
					isIntroChatModalOpen: e => "rpan-intro-chat-modal-id" === Object(ve.a)(e),
					isDownloadOBSModalOpen: e => Object(ve.a)(e) === de.a,
					previewUrl: Xe.c,
					reportingRevampEnabled: Ge.a,
					isNightMode: Ze.bb
				}),
				ba = Object(r.b)(ha, (e, t) => ({
					closeLocation: () => e(Object(n.b)(t.location.state[De.b.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(j.d)(t, !0)),
					fetchPostForStream: t => e(Object(I.a)(t)),
					subscribeConfig: () => e(D.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(D.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(D.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: (t, s) => e(Object(F.c)(t, s)),
					onStatsSubscribe: t => e(D.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(D.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(u.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(u.b)(t)),
					removeStreamFromHistory: t => e(T(t)),
					setNewCorrelationId: () => e(Object(B.b)()),
					setIntroFinishedStatus: t => e(Object(B.c)({
						isIntroFinished: t
					})),
					setMutedInFeed: t => e(V.G(t)),
					setVideoVolume: t => e(k.h(t)),
					updateVideoTimestamp: (t, s) => e(A({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(N(e))
					})(t)),
					resetHistory: () => e(M()),
					toggleIntroChatModal: () => e(Object(x.i)("rpan-intro-chat-modal-id")),
					toggleEndBroadcastModal: () => e(Object(x.i)("rpan-end-broadcast-confirmation-id")),
					toggleRemovalReasonModal: () => e(Object(x.i)("rpan-add-removal-reason-id")),
					toggleOBSDownloadModal: () => e(Object(x.i)(de.a)),
					onShareToChat: t => e(Object(y.e)(t))
				}));
			class va extends o.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = a.a.createRef(), this.videoRef = a.a.createRef(), this.videoSessionManager = null, this.renderReportFlow = (e, t) => this.props.reportingRevampEnabled ? a.a.createElement(Ae.a, {
						withOverlay: !0,
						overlayCustomStyles: Me.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}) : a.a.createElement(Me.a, {
						withOverlay: !0,
						overlayCustomStyles: Me.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}), this.renderTheater = e => {
						const {
							currentStream: t,
							currentStreamStartTime: s,
							currentHlsUrl: o,
							inViewerFeedTheMeter: r,
							isIntroInProgress: n,
							isOverlay: i,
							isReportFlowOpen: c,
							location: l,
							nextStream: m,
							playbackState: u,
							previewUrl: p,
							previousStream: h,
							related: v,
							sendEvent: g,
							subreddit: f,
							timestamp: S,
							unavailableVideoUrl: O,
							volume: _,
							isRemovalReasonModalOpen: C,
							isEndBroadcastModalOpen: w,
							isIntroChatModalOpen: E,
							isDownloadOBSModalOpen: y,
							isNightMode: k,
							onShareToChat: x
						} = this.props, {
							hasLiveIntent: j,
							isError: I,
							isLoading: L,
							isMuted: R,
							isOverlayVisible: P,
							isVideoPaused: N,
							showStreamEndedPrompt: T,
							videoCurrentTime: M,
							videoTotalTime: A,
							shouldShowOBSBanner: D
						} = this.state, B = t && t.post.id, F = o !== O, V = t && !t.post.subreddit, U = u === Xe.a.LIVE, H = t && 1e3 * t.broadcast_time;
						let K, q, G, W, J = "number" == typeof S ? S : s;
						H && J >= H && (J = 0), t && F ? (K = 1e3 * t.broadcast_time, q = B, G = U, W = t.post.title) : (K = void 0, q = void 0, G = !1, W = "RPAN Unavailable Video");
						const Q = t && t.meter && 10 * Math.round(t.estimated_remaining_time / 10),
							X = r && t && t.estimated_remaining_time < et && !n,
							z = void 0 !== Q && Q >= 0 && X ? ua.a[`meterCritical${Q}`] : void 0;
						let Z, Y;
						return L || I ? Z = p ? na.Preview : na.Loading : X && (Z = na.Static), L ? Y = b.fbt._("video is loading", null, {
							hk: "jUJdy"
						}) : I ? Y = b.fbt._("unable to load video", null, {
							hk: "1Eh3Rt"
						}) : X && (Y = b.fbt._("this broadcast will expire soon. give an award to add more time.", null, {
							hk: "3dUpDV"
						})), a.a.createElement(a.a.Fragment, null, D && a.a.createElement(ie, {
							isDark: k,
							onClickLearnMore: this.onOBSBannerLearnMoreClick,
							onClickDismiss: this.onOBSBannerDismissClick
						}), a.a.createElement("div", {
							className: Object(d.a)(ua.a.theaterContainer, {
								[ua.a.overlay]: i,
								[ua.a.theaterContainerExp]: e,
								[ua.a.isObsBannerDisplayed]: D
							}),
							ref: this.focusRef,
							tabIndex: -1
						}, a.a.createElement("div", {
							className: ua.a.wrap
						}, a.a.createElement("div", {
							className: Object(d.a)(ua.a.panesWrapper, {
								[ua.a.initialized]: !n
							})
						}, a.a.createElement("div", {
							className: Object(d.a)(ua.a.pane, ua.a.leftPane)
						}, a.a.createElement("div", {
							className: ua.a.videoContainer
						}, Z && Y && a.a.createElement(la, {
							previousStream: h,
							currentStream: t,
							nextStream: m,
							previewUrl: p,
							visualEffect: Z,
							visualEffectLabel: Y
						}), o && a.a.createElement("div", {
							className: z
						}, a.a.createElement(pa, {
							autoplay: !0,
							controls: !1,
							startTime: J,
							isPaused: N,
							muted: R,
							muxVideoDuration: K,
							muxVideoId: q,
							muxVideoIsLive: G,
							muxVideoTitle: W,
							onAutoPlayPrevented: this.onAutoPlayPrevented,
							onEnded: this.onEnded,
							onError: this.onPlayerError,
							onLevelLoaded: this.onVideoPlayerLevelLoaded,
							onLoadedData: this.onVideoPlayerLoadedData,
							onLoadingData: this.onVideoPlayerLoadingData,
							onResourceRemoved: this.onVideoPlayerResourceRemoved,
							onTimeUpdate: this.onCurrentTimeChanged,
							playMutedOnPrevented: !0,
							ref: this.onHlsRefChange,
							url: o,
							videoRef: this.videoRef,
							sessionId: this.state.sessionId
						})), a.a.createElement(eo, {
							currentStreamId: B,
							isLoading: L,
							isLive: U,
							isMuted: R,
							isPaused: N,
							isUnavailable: u === Xe.a.UNAVAILABLE,
							isVisible: P,
							onCopyLink: this.onCopyLink,
							onCrosspost: this.onCrosspost,
							onShareToChat: x,
							onReplayVideo: this.onReplayVideo,
							onShareLink: this.onShareLink,
							onShare: this.onShare,
							onPlayPauseToggle: this.onPlayPauseToggle,
							onReport: this.onReport,
							onScrubbing: this.onScrubbing,
							onEndBroadcast: this.onEndBroadcast,
							onSelectSubreddit: this.goToSubreddit,
							onToggleMenu: this.onToggleMenu,
							onUpvote: this.onUpvote,
							onDownvote: this.onDownvote,
							onRpanStudioClick: this.onRpanStudioClick,
							onVideoPositionUpdate: this.onVideoPlayerPositionUpdate,
							related: v,
							sendEvent: g,
							setVolume: this.onSetVolume,
							showErrorPrompt: I,
							showStreamEndedPrompt: T,
							subreddit: f,
							toggleMute: this.onToggleMuteVideo,
							videoCurrentTime: U && j ? A : M,
							videoTotalTime: A,
							volume: _
						}), (C || w) && t && a.a.createElement(Te, {
							subredditId: t.post.subreddit.id,
							subredditName: t.post.subreddit.name,
							postId: t.post.id,
							toggleModal: this.onEndBroadcast
						}), E && a.a.createElement(te, {
							toggleModal: this.props.toggleIntroChatModal
						}), y && a.a.createElement(de.b, {
							onClickDownload: this.onOBSModalDownloadClick,
							onClickDismiss: this.onOBSModalDismissClick,
							onClickGuidebook: this.onOBSModalGuidebookClick,
							className: ua.a.downloadOBSModal
						}))), !n && a.a.createElement("div", {
							className: Object(d.a)(ua.a.pane, ua.a.rightPane)
						}, t && !V && a.a.createElement(Xo, {
							location: l,
							onChatClick: this.onChatClick,
							onFocusMessageInput: this.handleFocusMessageInput,
							postId: t.post.id,
							sendEvent: g,
							subredditId: t.post.subreddit.id
						}))), t && !n && a.a.createElement(ta, {
							nextStream: m,
							onNext: this.onNextStream,
							onPrevious: this.onPreviousStream,
							previousStream: h
						}), t && !n && a.a.createElement(ga, {
							onClick: this.onClose
						}), t && !n && c && this.renderReportFlow(t, M))))
					}, this.onHlsRefChange = e => {
						var t;
						this.hlsVideoApi = e, null === (t = this.hlsVideoApi) || void 0 === t || t.setVolume(this.props.volume)
					}, this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = g()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: o
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && o(t.post.id, e)
					}, L.p), this.onVideoPlayerPositionUpdate = e => {
						if (e === this.state.videoCurrentTime) return;
						let t = !1;
						if (this.props.playbackState === Xe.a.LIVE && e > this.state.videoCurrentTime) {
							const s = .95;
							t = e / this.state.videoTotalTime >= s
						}
						const s = t ? this.state.videoTotalTime : e;
						this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(s), this.setState({
							hasLiveIntent: t,
							videoCurrentTime: s
						}), this.props.sendEvent(Object(He.y)(this.props.currentStream, {
							...this.playbackStats,
							scrubbingStartMs: Object(w.a)(this.state.videoCurrentTime),
							scrubbingEndMs: Object(w.a)(s)
						}))
					}, this.onNextStream = g()(() => {
						const {
							nextStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(He.l)(e, this.playbackStats)), this.goToStream(e))
					}, L.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = g()(() => {
						const {
							previousStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(He.m)(e, this.playbackStats)), this.goToStream(e))
					}, L.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(Ve.g)(e.target) ? e.stopPropagation() : e.keyCode === Be.a.ArrowRight ? this.onNextStream() : e.keyCode === Be.a.ArrowLeft && this.onPreviousStream()
					}, this.onPlayPauseToggle = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.isVideoPaused ? this.playVideo() : this.pauseVideo()
					}, this.onToggleMuteVideo = () => {
						const e = !this.state.isMuted;
						this.setVideoMute(e), this.props.setMutedInFeed(e)
					}, this.onSetVolume = (e, t) => {
						const s = this.hlsVideoApi;
						s && (t ? 0 !== e ? (this.props.setVideoVolume(e), this.props.setMutedInFeed(!1)) : (this.setState({
							isMuted: !0
						}), this.props.setMutedInFeed(!0)) : (s.setVolume(e), e || this.state.isMuted ? e && this.state.isMuted && this.setVideoMute(!1) : this.setVideoMute(!0)))
					}, this.onReplayVideo = () => {
						this.cancelSwitchingOnStreamEnded(), this.replayVideo()
					}, this.onScrubbing = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.showStreamEndedPrompt && this.playVideo()
					}, this.onEndBroadcast = () => {
						this.props.toggleRemovalReasonModal()
					}, this.onCopyLink = e => {
						if (this.props.currentStream) {
							const t = e.source === zs.EndScreen ? "copy_link_video" : "copy_link";
							this.props.sendEvent(Object(He.u)(t, this.props.currentStream, this.playbackStats, null == e ? void 0 : e.referralId))
						}
						this.cancelSwitchingOnStreamEnded()
					}, this.onShare = () => {
						this.props.currentStream && this.props.sendEvent(Object(He.B)("share", this.props.currentStream, this.playbackStats))
					}, this.onShareLink = e => {
						if (this.props.currentStream) {
							const t = e.source === zs.EndScreen ? "share_video" : "share_copy";
							this.props.sendEvent(Object(He.B)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onCrosspost = e => {
						if (this.props.currentStream) {
							const t = e.source === zs.EndScreen ? "crosspost_video" : "share_crosspost";
							this.props.sendEvent(Object(He.v)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.setVideoMute = e => {
						this.setState(() => ({
							isMuted: e
						}));
						const t = this.hlsVideoApi;
						if (!t) return;
						const s = e ? He.w : He.F;
						e || t.setVolume(this.props.volume), this.props.sendEvent(s(this.props.currentStream, this.playbackStats))
					}, this.goToSubreddit = e => {
						this.props.sendEvent(Object(He.s)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === Xe.a.LIVE || this.props.playbackState === Xe.a.VOD, this.handleHeartbeat = ({
						meta: e,
						stats: t
					}) => {
						const {
							currentStream: s,
							streamById: o
						} = this.props, a = s && s.post.id === e.id ? s : o(e.id);
						if (!a) return;
						const r = !t.sessionDurationMs ? He.E : He.A,
							n = {
								...t,
								playerType: He.a.Theater
							};
						this.props.sendEvent(r(a, n))
					}, this.state = {
						hasLiveIntent: e.playbackState === Xe.a.LIVE,
						isUnavailableVideoJustFinished: !1,
						isVodStreamJustFinished: !1,
						isError: !1,
						isLoading: !0,
						isReady: !1,
						isMuted: !1,
						isOverlayVisible: !1,
						isSwitchingOnStreamEndedScheduled: !1,
						isVideoPaused: !1,
						showStreamEndedPrompt: !1,
						videoCurrentTime: 0,
						videoTotalTime: 0,
						wasVideoPausedWhenOverlayOpened: !1,
						shouldShowOBSBanner: !1,
						sessionId: ""
					}, this.previouslyActiveElement = null, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onChatClick = this.onChatClick.bind(this), this.handleFocusMessageInput = this.handleFocusMessageInput.bind(this), this.onUpvote = this.onUpvote.bind(this), this.onDownvote = this.onDownvote.bind(this), this.onOBSModalDownloadClick = this.onOBSModalDownloadClick.bind(this), this.onOBSModalGuidebookClick = this.onOBSModalGuidebookClick.bind(this), this.onOBSBannerDismissClick = this.onOBSBannerDismissClick.bind(this), this.onOBSBannerLearnMoreClick = this.onOBSBannerLearnMoreClick.bind(this), this.onOBSModalDismissClick = this.onOBSModalDismissClick.bind(this), this.onRpanStudioClick = this.onRpanStudioClick.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				get playbackStats() {
					var e;
					return {
						...null === (e = this.videoSessionManager) || void 0 === e ? void 0 : e.stats,
						playerType: He.a.Theater
					}
				}
				get video() {
					return this.videoRef.current
				}
				componentDidMount() {
					const e = this.focusRef.current;
					e.classList.add(ua.a.focusVisible), Object(C.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, _(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(Ke.t)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream(), window.localStorage && this.setState({
						shouldShowOBSBanner: !J.k()
					})
				}
				componentDidUpdate(e, t) {
					const {
						currentStream: s,
						isIntroInProgress: o,
						isOverlay: a,
						isOverlayOpen: r,
						isReportFlowOpen: n,
						onHeartbeatSubscribe: i,
						onRecommendedViewerSubredditsSubscribe: d,
						onStatsSubscribe: c,
						playbackState: l,
						related: m,
						subreddit: u,
						subscribeConfig: p,
						subscribeStreams: h
					} = this.props;
					if (a || r === e.isOverlayOpen || (r ? (this.setState(({
							isVideoPaused: e
						}) => ({
							wasVideoPausedWhenOverlayOpened: e,
							isVideoPaused: !0
						})), this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits()) : (this.setState(({
							wasVideoPausedWhenOverlayOpened: e
						}) => ({
							isVideoPaused: e
						})), p().then(e => this.unsubscribeConfig = e), h().then(e => this.unsubscribeStreams = e), s && this.isCurrentStreamWatchable() && (i(s.post.id).then(e => this.unsubscribeHeartbeat = e), c(s.post.id).then(e => this.unsubscribeStats = e)), d().then(e => this.unsubscribeRecommendedViewerSubreddits = e))), (m || u) !== (e.related || e.subreddit)) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(s || this.setState({
						isLoading: !0
					}));
					!o && e.isIntroInProgress && this.handleNewStream(), o || e.isIntroInProgress || !fa(s, e.currentStream) || this.handleNewStream(), this.updateVideoSession(e, t), this.state.isSwitchingOnStreamEndedScheduled || o || !(!s && !this.state.isLoading || l === Xe.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), o || s || this.state.isLoading || this.state.isError || this.setState({
						...this.state,
						isError: !0
					}), n && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					}), this.context.setIsLive(l === Xe.a.LIVE), this.context.setCurrentTime(this.state.videoCurrentTime), this.context.setTotalTime(this.state.videoTotalTime)
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.consumePostTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams(), this.props.resetHistory(), this.props.isOverlay && setTimeout(() => _(this.previouslyActiveElement)), this.destroyVideoSessionManager()
				}
				render() {
					return a.a.createElement(f.a.Consumer, null, this.renderTheater)
				}
				onVideoPlayerLevelLoaded(e) {
					const {
						currentStream: t,
						playbackState: s,
						receiveHlsStreamEnded: o
					} = this.props;
					this.state.videoTotalTime !== e.totalduration && this.setState({
						videoTotalTime: e.totalduration
					}), t && !e.live && 0 !== e.endSN && s === Xe.a.LIVE && o(t.post.id)
				}
				onVideoPlayerLoadingData() {
					this.setState({
						isLoading: !0,
						isError: !1
					})
				}
				onVideoPlayerLoadedData() {
					this.setState({
						isError: !1,
						isLoading: !1,
						isReady: !0
					})
				}
				onVideoPlayerResourceRemoved() {
					const {
						currentStream: e,
						receiveHlsStreamRemoved: t
					} = this.props;
					e && this.isCurrentStreamWatchable() && t(e.post.id)
				}
				onRpanStudioClick() {
					this.props.sendEvent(Object(He.x)(this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDismissClick() {
					this.props.sendEvent(Object(He.h)("dismiss", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDownloadClick() {
					this.props.sendEvent(Object(He.h)("download", this.props.currentStream))
				}
				onOBSModalGuidebookClick() {
					this.props.sendEvent(Object(He.h)("guidebook", this.props.currentStream))
				}
				onOBSBannerDismissClick() {
					J.sb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(He.g)("not_now", this.props.currentStream))
				}
				onOBSBannerLearnMoreClick() {
					J.sb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(He.g)("learn_more", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onChatClick() {
					this.props.currentStream && this.props.sendEvent(Object(He.o)(this.props.currentStream, this.playbackStats))
				}
				handleFocusMessageInput() {
					J.Y() || this.props.toggleIntroChatModal()
				}
				onUpvote() {
					this.props.currentStream && this.props.sendEvent(Object(He.r)(this.props.currentStream, this.playbackStats))
				}
				onDownvote() {
					this.props.currentStream && this.props.sendEvent(Object(He.p)(this.props.currentStream, this.playbackStats))
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: o,
						setIntroFinishedStatus: a
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return a(!0), void this.setState({
						...this.state,
						isLoading: !!e
					});
					e && o(Object(He.C)(e, this.playbackStats)), s !== Xe.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(He.D)(this.props.currentStream, this.playbackStats)), this.setState({
						...this.state,
						isError: !0
					})
				}
				onAutoPlayPrevented() {
					this.setState({
						isMuted: !0
					})
				}
				onClose() {
					this.props.sendEvent(Object(He.b)(this.props.currentStream, this.playbackStats)), this.props.isOverlay ? this.props.closeLocation() : window.location.replace(window.location.origin)
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id, this.props.isOverlay), this.props.sendEvent(Object(He.q)(this.props.currentStream)))
				}
				hideStreamEndedPrompt() {
					this.state.showStreamEndedPrompt && this.setState({
						isOverlayVisible: !1,
						showStreamEndedPrompt: !1
					})
				}
				showStreamEndedPrompt() {
					this.state.showStreamEndedPrompt || this.setState({
						isOverlayVisible: !0,
						showStreamEndedPrompt: !0
					})
				}
				pauseVideo() {
					this.state.isVideoPaused || (this.props.sendEvent(Object(He.d)(this.props.currentStream, this.playbackStats)), this.setState({
						isVideoPaused: !0
					}))
				}
				playVideo(e = {
					sendEvent: !0
				}) {
					this.state.isVideoPaused && (e.sendEvent && this.props.sendEvent(Object(He.e)(this.props.currentStream, this.playbackStats)), this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.props.sendEvent(Object(He.f)(this.props.currentStream, this.playbackStats)), this.onVideoPlayerPositionUpdate(0), this.playVideo({
						sendEvent: !1
					})
				}
				scheduleSwitchingOnStreamEnded() {
					this.cancelSwitchingOnStreamEnded(), this.switchingOnStreamEndedTimeout = window.setTimeout(() => {
						const {
							isReportFlowOpen: e,
							lastChatActivityUtcTs: t,
							nextTopStream: s
						} = this.props;
						s && !e && !Object(ze.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, L.k), this.setState({
						...this.state,
						isSwitchingOnStreamEndedScheduled: !0
					})
				}
				cancelSwitchingOnStreamEnded() {
					window.clearTimeout(this.switchingOnStreamEndedTimeout), this.state.isSwitchingOnStreamEndedScheduled && this.setState({
						isSwitchingOnStreamEndedScheduled: !1
					})
				}
				getStreamLocation(e) {
					const t = Object(Ue.d)(e);
					return Object(O.a)(t, {
						[Fe.s]: this.props.related,
						[Fe.A]: this.props.timestamp
					})
				}
				goToStream(e) {
					const {
						onNavigation: t,
						visitStream: s
					} = this.props, o = e.post.id;
					this.cancelSwitchingOnStreamEnded(), this.hideStreamEndedPrompt(), s(o), this.setState({
						isLoading: !0,
						isVideoPaused: !1
					}), t(this.getStreamLocation(e))
				}
				async handleNewStream() {
					const {
						currentStream: e,
						fetchBroadcasterProfileInfo: t,
						fetchPostForStream: s,
						playbackState: o,
						visitStream: a
					} = this.props;
					e && (this.setState({
						hasLiveIntent: o === Xe.a.LIVE,
						videoCurrentTime: 0,
						videoTotalTime: 0
					}), a(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(He.G)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
				}
				setConsumePostTimeout() {
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(He.t)(this.props.currentStream)), h.a.telemetry.postConsumedThreshold)
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), L.n), this.setState({
						isOverlayVisible: !0
					})
				}
				syncLocationWithCurrentStreamId() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						onNavigation: s,
						streamIdFromPath: o
					} = this.props;
					if (!e || t) return;
					const a = !o || Object(Ue.b)(e.post.id) === o;
					s(this.getStreamLocation(e), a)
				}
				startJobIfLiveOrPaused() {
					const {
						currentStream: e,
						onStatsSubscribe: t,
						onHeartbeatSubscribe: s
					} = this.props;
					e && this.isCurrentStreamWatchable() && (t(e.post.id).then(e => this.unsubscribeStats = e), s(e.post.id).then(e => this.unsubscribeHeartbeat = e))
				}
				updateVideoSession(e, t) {
					var s, o;
					const {
						video: a
					} = this;
					if (!a) return;
					const r = this.getOrCreateVideoSessionManager(a),
						{
							currentStream: n
						} = this.props,
						i = null == n ? void 0 : n.post.id,
						d = i !== (null === (s = e.currentStream) || void 0 === s ? void 0 : s.post.id);
					d && this.setState({
						isReady: !1
					}), d && r.endSession();
					const {
						isReady: c
					} = this.state, {
						isReady: l
					} = t;
					!!i && (!l && c) && (r.startSession({
						id: i
					}), this.setState({
						sessionId: (null === (o = null == r ? void 0 : r.sessionStats) || void 0 === o ? void 0 : o.id) || ""
					}))
				}
				getOrCreateVideoSessionManager(e) {
					return this.videoSessionManager || (this.videoSessionManager = new E.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const ga = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: ua.a.closeButton,
					onClick: e,
					"aria-label": b.fbt._("close button", null, {
						hk: "2l5YIS"
					})
				}, a.a.createElement(ae.a, {
					className: ua.a.closeIcon
				})),
				fa = (e, t) => (e && e.post.id) !== (t && t.post.id);
			va.contextType = p.a;
			var Sa = ba(Object(pe.c)(va)),
				Oa = s("./src/reddit/contexts/InsideOverlay.tsx"),
				_a = s("./src/reddit/helpers/overlay/index.ts"),
				Ca = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				wa = s.n(Ca);
			const {
				fbt: Ea
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ya = Object(l.a)((e, {
				match: {
					params: t
				}
			}) => t), ka = Object(l.a)((e, {
				location: {
					search: t
				}
			}) => Object(c.a)(t)), xa = Object(i.a)(ya, ka, (e, t) => {
				const s = t.get(Fe.s),
					{
						subredditName: o
					} = e;
				return "home" === s || "r/popular" === s ? s : "popular" === o ? "r/popular" : o ? void 0 : "home"
			}), ja = Object(i.a)(ka, e => {
				const t = e.get(Fe.A);
				if (!t) return;
				const s = parseInt(t, 10);
				return isNaN(s) ? void 0 : s
			}), Ia = Object(i.c)({
				isEnabled: qe.a,
				isIntroInProgress: ze.b,
				related: xa,
				timestamp: ja
			}), La = Object(r.b)(Ia, (e, t) => ({
				onOpenLoginModal: () => e(Object(m.i)()),
				onStreamByIdRequested: t => e(Object(u.d)(t)),
				updateLocation: (t, {
					isOverlay: s,
					useReplace: o
				}) => {
					const a = o ? n.c : n.b,
						r = s ? Object(_a.b)(t) : t;
					e(a(r))
				}
			}));
			class Ra extends a.a.Component {
				constructor(e) {
					super(e), this.renderPublicAccessNetwork = e => {
						const {
							isOverlay: t,
							location: s,
							match: o,
							related: r,
							timestamp: n
						} = this.props, {
							subredditName: i,
							partialPostId: c
						} = o.params;
						return a.a.createElement("div", {
							className: Object(d.a)(wa.a.rpanContainer, {
								[wa.a.overlay]: t,
								[wa.a.rpanContainerExp]: e
							})
						}, a.a.createElement(p.b, null, a.a.createElement(Sa, {
							isOverlay: !!t,
							location: s,
							onNavigation: this.onNavigation,
							related: r,
							streamIdFromPath: c,
							subreddit: i && `r/${i}`,
							timestamp: c ? n : void 0
						})))
					}, this.onNavigation = this.onNavigation.bind(this)
				}
				componentDidMount() {
					const {
						match: e,
						onStreamByIdRequested: t,
						isEnabled: s
					} = this.props;
					s && e.params.partialPostId && t(e.params.partialPostId)
				}
				shouldUpdateLocation(e) {
					return e.replace(/[?].*/, "") !== this.props.match.url
				}
				onNavigation(e, t = !1) {
					if (!this.shouldUpdateLocation(e)) return;
					const {
						isOverlay: s,
						updateLocation: o
					} = this.props;
					o(e, {
						isOverlay: s,
						useReplace: t
					})
				}
				render() {
					const {
						isEnabled: e
					} = this.props;
					return e ? a.a.createElement(f.a.Consumer, null, this.renderPublicAccessNetwork) : a.a.createElement(Pa, null)
				}
			}
			const Pa = () => {
				const e = Object(o.useContext)(f.a);
				return a.a.createElement("div", {
					className: Object(d.a)(wa.a.rpanContainer, wa.a.forbiddenScreen, {
						[wa.a.rpanContainerExp]: e
					})
				}, a.a.createElement("h2", null, Ea._("Not Found", null, {
					hk: "2ijDv5"
				})))
			};
			t.default = La(Object(pe.c)(Object(Oa.b)(Ra)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return C
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "j", (function() {
				return V
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "e", (function() {
				return H
			})), s.d(t, "g", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				n = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				c = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				m = s.n(c)()(e => Object(a.a)(Object(o.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var u = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				h = e => e.publicAccessNetwork.reports.reported,
				b = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				S = Object(o.a)(f, e => e.ended),
				O = Object(o.a)(f, e => e.removed),
				_ = Object(o.a)(p, S, O, (e, t, s) => {
					const o = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							a = D(o, n.a.ENDED) ? n.a.ENDED : o,
							r = s.stream.vod_accessible;
						return a === o && !0 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: a,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							a = D(o, n.a.ENDED) ? n.a.ENDED : o,
							r = s.stream.vod_accessible;
						return a === o && !1 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: a,
									vod_accessible: !1
								}
							}
						}
					}, o)
				}),
				C = (e, t) => {
					return _(e)[Object(r.g)(t)]
				},
				w = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => m(t.listingName)(e, t), _, h, i.h, (e, t, s, o, a) => {
					const i = [];
					if (e) {
						const t = Object(r.g)(e);
						s[t] && i.push(t)
					}
					const d = i.concat(t),
						c = [...new Set(d)],
						l = new Set([...o, ...a]);
					return c.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== n.a.KILLED && t.stream.state !== n.a.PURGED
					})
				}),
				E = Object(o.a)((e, {
					count: t
				}) => t, _, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => w(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const o = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? o.slice(0, e) : o
				}),
				y = Object(o.a)(_, E, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				k = Object(o.a)(g, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: o
				}) => E(e, {
					listingName: t || o,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						o = t.filter(e => !s.has(e));
					if (o.length) return o[0]
				}),
				x = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t, _, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: o
				}) => E(e, {
					listingName: t || o,
					streamIdFromPath: s
				}), b, (e, t, s, o) => {
					if (!s.length) return;
					const a = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = a.find(e => e.stream.state === n.a.IS_LIVE);
					if (r) return r.post.id;
					const i = a.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (o.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				j = Object(a.a)(Object(o.a)(x, _, (e, t) => e ? t[e] : void 0)),
				I = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(r.g)(t) : void 0, x, h, i.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: o
				}) => E(e, {
					listingName: t || o,
					streamIdFromPath: s
				}), (e, t, s, o, a) => !e || s.includes(e) || o.includes(e) ? t || a[0] : e),
				L = Object(o.a)(v, g, k, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				R = Object(o.a)(v, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				P = Object(a.a)(Object(o.a)(I, _, (e, t) => e ? t[e] : void 0)),
				N = Object(a.a)(Object(o.a)(L, _, (e, t) => e ? t[e] : void 0)),
				T = Object(a.a)(Object(o.a)(R, _, (e, t) => e ? t[e] : void 0)),
				M = (Object(a.a)(Object(o.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(o.a)(I, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				A = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t ? C(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function D(e, t) {
				const s = {
					[n.a.NOT_STARTED]: 0,
					[n.a.PUBLISHED]: 1,
					[n.a.IS_LIVE]: 2,
					[n.a.DISCONNECTED]: 2,
					[n.a.ENDED]: 3,
					[n.a.KILLED]: 4,
					[n.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const B = Object(o.a)(I, b, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const V = Object(o.a)(I, _, u.b, (e, t, s) => {
					if (s) return F.INTRO;
					const o = e && t[e];
					if (!o) return F.UNAVAILABLE;
					const a = o.stream.state;
					return a === n.a.IS_LIVE || a === n.a.DISCONNECTED ? F.LIVE : a === n.a.ENDED && o.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				U = Object(o.a)(P, V, u.b, d.b, d.o, (e, t, s, o, a) => s ? o : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : a : void 0),
				H = Object(o.a)(P, V, B, (e, t, s) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && s < e.broadcast_time ? s : 0 : 0),
				K = (e, t) => {
					const s = p(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const n = e => e.publicAccessNetwork.theaterSettings,
				i = Object(o.a)(n, r.n, (e, t) => t && !e.isIntroFinished),
				d = Object(o.a)(n, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + a.a > Date.now()
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				n = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(n.a)(e);
					return Boolean(t) && !Object(a.tf)(t)
				},
				d = Object(o.a)(i, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"3415d2da3478"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"601b64270ca1"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"02c91a84eb54"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"1f105867b470"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"0996d0768aa6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PublicAccessNetwork.5bb01266f4e936ffda8d.js.map