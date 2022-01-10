// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.67185d6ad9f40e7d7e07.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PublicAccessNetwork"], {
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					o = null,
					n = {
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

				function a(e) {
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
					s.metaKey || s.altKey || s.ctrlKey || (r(e.activeElement) && a(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), d())
				}), !0), d(), e.addEventListener("focus", (function(e) {
					var s, o, i;
					r(e.target) && (t || (s = e.target, o = s.type, "INPUT" === (i = s.tagName) && n[o] && !s.readOnly || "TEXTAREA" === i && !s.readOnly || s.isContentEditable)) && a(e.target)
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
				n = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const r = Object(n.e)(e),
					a = encodeURIComponent(`${t}${r}`);
				return `${o.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
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
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(n.c),
				a = Object(o.a)(n.b),
				i = Object(o.a)(n.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return w
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "b", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				v = s("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/actions/comment/index.ts"),
				S = s("./src/reddit/actions/comment/constants.ts");
			const O = Object(r.a)(S.n),
				w = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, C = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(g.J)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.isLocked ? m.l : m.e;
					t(Object(f.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(f.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, _ = Object(r.a)(S.F), E = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s(),
						r = n.features.comments.models[e],
						a = n.user.account ? n.user.account.displayText : null;
					r && a && (t(Object(f.i)({
						[e]: {
							isApproved: !0,
							approvedBy: a,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(o(), e)).ok || t(Object(f.i)({
						[e]: {
							isApproved: r.isApproved,
							approvedBy: null,
							bannedBy: r.bannedBy,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam,
							modNote: r.modNote,
							modReasonBy: r.modReasonBy,
							modRemovalReason: r.modRemovalReason,
							numReports: r.numReports || null
						}
					})), Object(d.d)())
				}, y = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						a = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					a && i && (s(Object(f.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(n(), e, t)).ok || s(Object(f.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(d.d)())
				}, k = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.ignoreReports ? m.k : m.d;
					t(Object(f.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(f.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, x = (e, t, s) => async (r, a, {
					gqlContext: i
				}) => {
					const d = Object(h.b)(a(), {
						commentId: e
					});
					if (!d) return;
					const l = s === n.cc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) r(Object(f.i)({
						[e]: {
							userReports: Object(p.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, j = (e, t, s) => async (o, r, {
					apiContext: i,
					gqlContext: d
				}) => {
					const c = r(),
						l = c.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = c.postStickiedComments.data[u],
						b = n.g[t];
					let h;
					if (o(Object(f.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.G.ADMIN,
								isMod: t === n.G.MODERATOR,
								isStickied: !!s
							}
						})), s && p && p !== e && o(Object(f.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(v.a)(r())) {
						const o = Object(m.b)(d(), e, t),
							n = Object(m.c)(d(), e, !!s),
							r = [o];
						(s || !s && e === p) && r.push(n), h = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else h = await Object(m.g)(i(), e, b, s || null);
					h.ok ? s && o(_({
						id: e,
						postId: u,
						commentsPageKey: Object(a.a)(u, null, {
							sort: n.u.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (o(Object(f.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), o(Object(f.i)({
						[p]: {
							isStickied: c.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return rt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return at
			})), s.d(t, "commentsPagePending", (function() {
				return it
			})), s.d(t, "commentsPageLoaded", (function() {
				return dt
			})), s.d(t, "commentsPageFailed", (function() {
				return ct
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return lt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return mt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return ut
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return pt
			})), s.d(t, "commentsPageRequested", (function() {
				return bt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return ht
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return vt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return gt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/discoveryUnit.ts"),
				a = s("./src/reddit/actions/pages/subreddit.ts"),
				i = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditSettings.ts"),
				c = s("./src/reddit/endpoints/governance/posts.ts"),
				l = s("./src/reddit/endpoints/page/commentsPage.ts"),
				m = s("./src/reddit/endpoints/page/subredditPage.ts"),
				u = s("./src/reddit/endpoints/profile/info.ts"),
				p = s("./src/reddit/models/Post/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/pageTitle.ts"),
				v = s("./src/reddit/actions/economics/helpers/async.ts"),
				g = s("./src/reddit/actions/externalAccount.ts"),
				f = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				S = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				O = s("./src/reddit/actions/platform.ts"),
				w = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/profile/index.ts"),
				_ = s("./src/reddit/actions/subreddit.ts"),
				E = s("./src/reddit/actions/subreddit/questions.ts"),
				y = s("./src/reddit/actions/toaster.ts"),
				k = s("./src/reddit/constants/adEvents.ts"),
				x = s("./src/reddit/constants/graphql.ts"),
				j = s("./src/reddit/constants/parameters.ts"),
				R = s("./src/reddit/constants/posts.ts"),
				I = s("./src/reddit/helpers/commentList/index.ts"),
				L = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				N = s("./src/reddit/models/Comment/index.ts"),
				P = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Subreddit/index.ts"),
				T = s("./src/reddit/models/User/index.ts"),
				A = s("./src/reddit/selectors/category.ts"),
				D = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				F = s("./src/reddit/selectors/experiments/postSeo.ts"),
				B = s("./node_modules/reselect/es/index.js"),
				V = s("./src/reddit/constants/experiments.ts"),
				U = s("./src/reddit/helpers/chooseVariant/index.ts"),
				H = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				q = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				K = s("./src/reddit/selectors/platform.ts"),
				G = s("./node_modules/fbt/lib/FbtPublic.js"),
				W = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				J = s("./src/reddit/selectors/user.ts");
			const Q = new Set([p.g.AntiEvilOps, p.g.AutomodFiltered, p.g.CommunityOps, p.g.ContentTakedown, p.g.CopyrightTakedown, p.g.Moderator, p.g.Reddit]),
				X = new Set([p.g.Author, p.g.AuthorDeleted]),
				z = Object(B.a)(H.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return Q.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = G.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(W.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== P.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				Z = Object(B.a)(H.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return X.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = G.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(W.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== P.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				Y = Object(B.a)(J.k, H.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				$ = Object(B.a)(K.f, H.a, z, Z, q.a, Y, q.b, (e, t, s, o, n, r, a) => {
					if (!e || !t || n) return !1;
					if (o) return !0;
					const i = r || a,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || i || d)
				});
			var ee = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				oe = s("./src/lib/makeActionCreator/index.ts"),
				ne = s("./src/lib/makeCommentsPageKey/index.ts"),
				re = s("./src/reddit/actions/ads/index.ts"),
				ae = s("./src/reddit/helpers/canonicalUrls.ts"),
				ie = s("./src/reddit/helpers/correlationIdTracker.ts"),
				de = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				ce = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				le = s("./src/lib/performanceTimings/index.tsx"),
				me = s("./src/reddit/actions/gold/powerups.ts"),
				ue = s("./src/lib/makeListingKey/index.ts"),
				pe = s("./src/reddit/actions/googleQASchema/constants.ts");
			const be = Object(oe.a)(pe.b),
				he = Object(oe.a)(pe.a);
			var ve = s("./src/reddit/actions/linkedPosts/constants.ts");
			const ge = Object(oe.a)(ve.a),
				fe = Object(oe.a)(ve.c),
				Se = Object(oe.a)(ve.b);
			var Oe = s("./src/lib/makeGqlRequest/index.ts"),
				we = (s("./src/redditGQL/operations/OtherDiscussions.json"), s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				Ce = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_e = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				Ee = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var ye = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: o,
				response: n
			}) => {
				if (!n.ok) return void t(n.error);
				const r = n.body,
					{
						post: a
					} = r && r.data,
					i = e(),
					d = Object(ue.a)(o, null, {
						isOtherDiscussions: !0
					});
				if (a) {
					if (a.otherDiscussions && a.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = a, {
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
									const s = Object(Ce.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: o
									} = e;
									if (o && o.type === p.a.Post && o.postInfo) {
										const e = Object(Ce.f)(o.postInfo);
										t.posts[e.id] = e
									}
									return Object(p.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(_e.a)(e.profile)) : Object(p.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(Ee.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(we.a)(e.subreddit))), s.id
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
							meta: i.meta,
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
					meta: i.meta,
					postFlair: {},
					postId: o,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const ke = Object(oe.a)(S.a),
				xe = Object(oe.a)(S.b),
				je = Object(oe.a)(S.c);
			var Re = s("./src/reddit/actions/subreddit/constants.ts"),
				Ie = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Le = ({
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
				Ne = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var Pe = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: n
				}) => {
					try {
						const s = [],
							r = {},
							a = {};
						if (!n || !n.linked) return;
						const i = e(),
							d = i.posts && i.posts.models,
							c = Object(Ne.a)(o),
							l = n.linked.posts && n.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Ce.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(p.n)(e)) {
								const {
									subreddit: t
								} = e;
								a[t.id] = Object(Ee.a)(t)
							}
						}
						t({
							dist: n.linked.posts && n.linked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: r,
							postIds: s,
							subreddits: a
						})
					} catch (r) {
						s(r)
					}
				},
				Me = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Te = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Ae = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: o,
					options: n,
					postId: r,
					subreddit: a
				}) => {
					try {
						if (!a) return;
						const o = a.elements || a.posts,
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
							c = Object(Me.a)(d),
							l = Te(c),
							m = o.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: h
							} = n,
							v = e && r ? Object(Ne.a)(r, !0) : Object(ue.a)(h, b.W[p], {
								t: u
							});
						s({
							dist: o.dist,
							key: v,
							meta: i.meta,
							postIds: m,
							posts: l
						})
					} catch (i) {
						o(i)
					}
				},
				De = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Fe = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
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
							a = {};
						if (!n || !n.nsfwLinked) return;
						const i = e(),
							d = i.posts && i.posts.models,
							c = Object(Fe.a)(o),
							l = n.nsfwLinked.posts && n.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Ce.a)(e);
								r[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (r[t.crosspost.id] = t.crosspost)
							}
							if (Object(p.n)(e)) {
								const {
									subreddit: t
								} = e;
								a[t.id] = Object(Ee.a)(t)
							}
						}
						t({
							dist: n.nsfwLinked.posts && n.nsfwLinked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: r,
							postIds: s,
							subreddits: a
						})
					} catch (r) {
						s(r)
					}
				},
				Ve = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ue = Object(oe.a)(Ve.b),
				He = Object(oe.a)(Ve.a);
			var qe = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ke = Object(oe.a)(qe.b),
				Ge = Object(oe.a)(qe.a),
				We = Object(oe.a)(Re.j),
				Je = Object(oe.a)(Re.i),
				Qe = (Object(oe.a)(Re.r), Object(oe.a)(Re.q), e => async (t, s, {
					gqlContext: o
				}) => {
					var n, r, a, i;
					const {
						includeNSFWListingBelowExperiment: d,
						includeListingBelowExperiment: c,
						includeOtherDiscussions: l,
						includePostFeed: m,
						includePostQASchemaEligibilityFlag: u,
						listingBelowExperimentVariant: p,
						postId: h,
						range: v,
						sort: g,
						subredditName: f
					} = e, S = Object(ue.a)(h, null, {
						isOtherDiscussions: !0
					}), O = s(), w = Object(te.A)(O, {
						listingKey: S
					}), C = l && (!w || 0 === w.length), _ = Object(ue.a)(f, b.W[g], {
						t: v
					}), E = Object(te.A)(O, {
						listingKey: _
					}), y = m && (c || !E || 0 === E.length), k = c, x = d, j = Object(te.H)(O, {
						postId: h
					}), R = !!j && !!j.media && (Object(P.K)(j.media) || Object(P.F)(j.media)) && !j.media.altText;
					if (!(C || y || k || x || R || u)) return;
					C && t(je({
						key: S
					}));
					const I = await ((e, t) => Object(Oe.a)(e, {
							...Ie,
							variables: t
						}))(o(), e),
						L = I.body,
						N = Object(De.a)(p),
						M = k && !!(null === (a = null === (r = null === (n = L.data) || void 0 === n ? void 0 : n.post) || void 0 === r ? void 0 : r.linked) || void 0 === a ? void 0 : a.isEligible),
						T = k && (N || !M);
					u && (I.ok ? L.data && L.data.post && t(be({
						postId: h,
						isEligibleForQASchema: null !== (i = L.data.post.isEligibleForQASchema) && void 0 !== i && i
					})) : t(he())), C && ye({
						getState: s,
						onFailure: e => t(ke(e)),
						onSuccess: e => t(xe(e)),
						postId: h,
						response: I
					}), (y && !k || T) && (I.ok ? L.data && Ae({
						getState: s,
						isLinkedPostsFallback: T,
						onFailure: e => t(Je(e)),
						onSuccess: e => t(We(e)),
						options: e,
						postId: h,
						subreddit: L.data.subreddit
					}) : t(Je(I.error))), k && M && !N && I.ok && L.data && Pe({
						getState: s,
						onFailure: e => t(Se(e)),
						onSuccess: e => t(fe(e)),
						postId: h,
						post: L.data.post
					}), x && I.ok && Be({
						getState: s,
						onFailure: e => t(Ge(e)),
						onSuccess: e => t(Ke(e)),
						postId: h,
						post: L.data.post
					}), R && I.ok && L.data && Le({
						getState: s,
						onFailure: e => t(He(e)),
						onSuccess: e => t(Ue(e)),
						postId: h,
						post: L.data.post
					}), k && t(ge({
						postId: h,
						isEligibleForLinkedPosts: M
					}))
				}),
				Xe = e => {
					var t, s;
					const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						n = o && Object(p.t)(o),
						{
							sortToUse: r
						} = Object(L.a)(e, n);
					return (!r || r === b.u.CONFIDENCE) && Object(U.c)(e, {
						experimentEligibilitySelector: () => Object(J.I)(e),
						experimentName: V.B
					}) === V.D.Enabled
				};
			var ze = s("./src/reddit/selectors/chatPost.ts"),
				Ze = s("./src/reddit/selectors/seo/index.ts"),
				Ye = s("./src/reddit/actions/pages/constants.ts"),
				$e = s("./src/lib/initializeClient/installReducer.ts"),
				et = s("./src/reddit/reducers/pages/comments/index.ts"),
				tt = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				st = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				ot = s("./src/reddit/selectors/i18n/index.ts"),
				nt = s("./src/reddit/selectors/moderatorPermissions.ts");
			Object($e.a)({
				pages: {
					comments: et.a
				}
			});
			const rt = 25,
				at = 100,
				it = Object(oe.a)(Ye.h),
				dt = Object(oe.a)(Ye.f),
				ct = Object(oe.a)(Ye.e),
				lt = Object(oe.a)(Ye.i),
				mt = (e, t, s) => {
					const o = !e,
						n = Object(te.H)(t, {
							postId: s
						}).belongsTo,
						r = Object(se.J)(t, {
							identifier: n
						}),
						a = Object(Ze.c)(t, {
							identifier: n
						}),
						i = !!Object(De.c)(t),
						d = Object(ot.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return i ? (c.listingBelow = a || o, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (a || o) && (!Object(M.h)(r) && !Object(ze.d)(t, {
						postId: s
					}) && !!r || !Object(K.i)(t) && Object(F.e)(t)), e && (c.postQASchema = Object(F.d)(t)), c
				},
				ut = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				pt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				bt = e => async (t, s) => {
					var r, a;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(p.t)(d) : "", u = c && Object(N.h)(c), {
						path: v,
						queryParams: f
					} = e, y = Object(S.d)(v), {
						instanceId: k
					} = f, {
						hasSortParam: I,
						sortToUse: M
					} = Object(L.a)(s(), m), T = null === (a = null === (r = Object(K.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === a ? void 0 : a.route.chunk, D = ["context", "depth", "limit", j.f].reduce((e, t) => {
						const s = parseInt(f[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: I,
						instanceId: k,
						include_categories: !0
					});
					I && (D.sort = M), D.onOtherDiscussions = y, t(w.r(m)), await t(ht(m, u, D, M));
					const F = s().posts.models[m],
						B = Object(J.J)(s());
					if (F && "subreddit" === F.belongsTo.type) {
						const e = F.belongsTo.id,
							o = Object(le.i)(() => t(Object(me.m)(e, {
								fullData: !0,
								includeIdentity: B
							})), {
								name: "subredditPowerupsRequested",
								page: T,
								isLoggedIn: B
							});
						await o;
						const n = s();
						if (!Object(K.i)(n)) {
							Object(tt.a)(n) && t(Object(E.b)(e))
						}
					}
					if (F) {
						const r = ((e, t) => {
								const s = Object(te.V)(e, {
										postId: t
									}),
									o = Object(te.H)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							a = Object(se.J)(s(), {
								identifier: F.belongsTo
							});
						if (a && (e => V.Be.Redirect === Object(U.b)(e, {
								experimentEligibilitySelector: $,
								experimentName: V.ue
							}))(s())) return void t(Object(o.c)(a.url));
						if ((F.media && F.media.type) === P.o.LIVEVIDEO) {
							const e = `/rpan${F.belongsTo.type===R.a.SUBREDDIT?a.url:"/"}${Object(p.u)(F.id)}`;
							return void t(Object(o.c)(e))
						}
						if (F.belongsTo.type !== R.a.SUBREDDIT || F.isSponsored) {
							if (F.belongsTo.type === R.a.PROFILE) {
								const e = Object(le.i)(() => t(C.d(a.name)), {
									name: "getProfileInfo",
									page: T,
									isLoggedIn: B
								});
								await e
							}
						} else {
							if (!!!Object(se.Q)(s(), {
									subredditId: F.belongsTo.id
								})) {
								const e = Object(le.i)(() => t(_.o(a.name)), {
									name: "getSubredditRules",
									page: T,
									isLoggedIn: B
								});
								await e
							}
						}
						const d = mt(!1, s(), m),
							c = y;
						if (ut(c, d)) {
							Object(ie.e)(ie.a.LinkedPosts);
							const e = Object(ie.c)(ie.a.LinkedPosts);
							Object(ie.e)(ie.a.NsfwLinkedPosts);
							const o = Object(ie.c)(ie.a.NsfwLinkedPosts),
								n = {
									adContext: {
										layout: x.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: b.gc.WEEK.toUpperCase(),
									sort: b.P.TOP,
									subredditName: a.name
								},
								r = {
									postId: m
								},
								i = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(De.c)(s())
								},
								l = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object(st.a)(s())
								},
								u = pt(d);
							Object(le.i)(() => t(Qe({
								...r,
								...n,
								...i,
								...l,
								...u,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: B,
								page: T
							});
							0
						}
						t(Object(g.p)()), t(O.m({
							title: r
						}));
						const l = s().posts.instances[m] ? e.queryParams.instanceId : F.postId;
						t(Object(i.b)(l)); {
							const e = Object(A.c)(s(), {
								subredditName: a.name
							});
							await Promise.all(e.map(e => t(n.c(e))))
						}
					} else t(O.m({
						title: h.e()
					}));
					const {
						routePrefix: H
					} = e.params;
					R.b[H] === R.a.PROFILE ? Object(ae.d)(s(), t, e) : Object(ae.b)(s(), t, e)
				}, ht = (e, t, s, o) => async (n, i, d) => {
					var p, h;
					const g = i(),
						S = Object(ne.a)(e, t, s),
						{
							subredditName: C
						} = s,
						_ = g.pages.comments.keyToHeadCommentId.hasOwnProperty(S),
						E = g.pages.comments.api.fullyLoaded[S],
						x = g.pages.comments.api.error[S],
						j = g.pages.comments.api.pending[S],
						R = !Object(J.I)(g),
						L = Object(J.k)(g),
						N = o === b.u.CHAT,
						P = !!g.platform.lastPage;
					if ((j || _ && !x) && !(N && P)) {
						if (_ && !g.sidebarPromotedPosts.firstFetch) {
							const e = Object(K.i)(g) ? ce.a.COMMENTS_OVERLAY : ce.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(re.b)(e))
							})
						}
						return void(E || n(gt(e, t, s)))
					}
					n(r.g());
					const M = g.user.prefs.commentMode;
					n(it({
						key: S,
						postId: e,
						commentMode: M
					}));
					const A = {
						...s,
						...N ? {
							sort: b.u.LIVE
						} : R ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(te.H)(i(), {
							postId: e
						});
						t && t.numComments && t.numComments > at && (A.truncate = rt)
					}
					const F = null === (h = null === (p = Object(K.b)(g)) || void 0 === p ? void 0 : p.routeMatch) || void 0 === h ? void 0 : h.route.chunk,
						B = Object(le.i)(() => Object(l.a)(d.apiContext(), e, t, A, Object(D.a)(i()), Xe(i())), {
							name: "fetchCommentsPage",
							isLoggedIn: !R,
							page: F
						}),
						V = !R && L && Object(le.i)(() => Object(u.d)(d.gqlContext(), Object(T.e)(L)), {
							name: "fetchProfileKarma",
							isLoggedIn: !R,
							page: F
						}) || null,
						[U, H] = await Promise.all([B, V]);
					let q;
					if (n(Object(O.n)(U.status)), U.ok) {
						const t = Object.keys(U.body.posts).filter(e => !!U.body.posts[e].isMeta),
							s = U.body.posts[e];
						if (t.length) {
							const e = Object(le.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: F,
									isLoggedIn: !R
								}),
								o = await e;
							o.ok && (q = o.body)
						}
						if (H && H.ok) {
							const {
								data: e
							} = H.body, t = {
								karma: {
									...u.a
								}
							};
							if (Object(u.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							U.body && U.body.account && Object.assign(U.body.account, t)
						}
						const o = Object(I.a)(U.body, e, g);
						n(dt({
							key: S,
							postId: e,
							meta: g.meta,
							governance: q,
							shouldCollapse: o,
							...U.body
						}))
					} {
						const o = Object(te.H)(i(), {
							postId: e
						});
						o && U.body.comments && Object.keys(U.body.comments).length < o.numComments ? n(gt(e, t, s)) : U.ok && n(vt({
							key: S
						}));
						const r = Object(K.i)(g) ? ce.a.COMMENTS_OVERLAY : ce.a.COMMENTS;
						n(Object(re.b)(r))
					}
					if (U.ok) {
						n(y.g(S));
						const t = Object(te.H)(i(), {
								postId: e
							}),
							s = Object.keys(U.body.comments);
						if (n(w.z(t, k.a.CommentsView)), Object(nt.h)(i(), {
								subredditId: t.belongsTo.id
							}) && n(Object(f.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && U.body.comments) {
							const e = Object(le.i)(() => n(Object(v.a)({
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
						C && (n(Object(a.subredditPending)({
							key: S
						})), e = await Object(de.a)("subreddit", () => Object(m.a)(d.apiContext(), C, {})), n(Object(O.n)(e.status)), n(Object(a.handleSubredditPageApiError)(e, C))), n(ct({
							error: U.error,
							key: S,
							...e ? e.body : U.body
						}))
					}
				}, vt = Object(oe.a)(Ye.g), gt = (e, t, s) => async (o, n, r) => {
					const a = Object(ne.a)(e, t, s),
						i = n(),
						c = Object(J.J)(i),
						m = Object(J.k)(i),
						p = Object(l.a)(r.apiContext(), e, t, s, Object(D.a)(i), Xe(i)),
						b = c && m && Object(u.d)(r.gqlContext(), Object(T.e)(m)) || null,
						[h, g] = await Promise.all([p, b]);
					if (o(Object(O.n)(h.status)), h.ok) {
						if (g && g.ok) {
							const {
								data: e
							} = g.body, t = {
								karma: {
									...u.a
								}
							};
							if (Object(u.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							h.body && h.body.account && Object.assign(h.body.account, t)
						}
						const t = Object(I.a)(h.body, e, i);
						o(dt({
							key: a,
							postId: e,
							meta: i.meta,
							shouldCollapse: t,
							...h.body
						})), o(vt({
							key: a
						}));
						const s = n().posts.models[e],
							r = s && Object(te.V)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(ee.a)(i, {
							subredditId: r.id
						}) && o(Object(d.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && h.body.comments && await o(Object(v.a)({
							commentIds: Object.keys(h.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(ct({
						error: h.error,
						key: a,
						...h.body
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/page.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "publicAccessNetworkRequested", (function() {
				return i
			}));
			var o = s("./src/lib/pageTitle.ts"),
				n = (s("./src/reddit/actions/pages/subreddit.ts"), s("./src/reddit/actions/platform.ts")),
				r = (s("./src/reddit/actions/publicAccessNetwork/streams.ts"), s("./src/reddit/actions/users.ts")),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => async (e, t) => {
				const s = t(),
					i = o.k();
				e(n.m({
					title: i
				})), Object(a.J)(s) || await e(r.t())
			}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/query-string/index.js"),
				n = s.n(o),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const m = new Set(["home", "r/popular"]),
				u = e => {
					const t = location && location.search || "",
						s = n.a.parse(t);
					m.has(e) && (s.related = e);
					const o = n.a.stringify(s);
					return o ? `?${o}` : ""
				},
				p = Object(r.a)(a.N),
				b = Object(r.a)(a.y),
				h = Object(r.a)(a.O),
				v = Object(r.a)(a.z),
				g = Object(r.a)(a.M),
				f = Object(r.a)(a.L),
				S = Object(r.a)(a.t),
				O = Object(r.a)(a.u),
				w = e => async (t, s, {
					gqlContext: o
				}) => {
					const n = Object(d.g)(e),
						r = s();
					if (Object(c.d)(r, n)) return;
					t(p(n));
					const a = await Object(i.e)(o(), n),
						l = Date.now();
					if (a.ok && a.body && a.body.data) {
						const e = a.body.data;
						t(b({
							model: e,
							utcTimeStamp: l
						}))
					} else t(k({
						streamId: n,
						error: a.error,
						utcTimeStamp: l
					}))
				}, C = (e, t) => async (s, o) => s(_(e, t)), _ = (e, t) => async (s, o, {
					gqlContext: n
				}) => {
					const r = o();
					if (Object(c.f)(r)) return;
					s(h());
					const a = await Object(i.f)(n(), e, t),
						d = Date.now();
					if (a.ok && a.body && a.body.data) {
						const t = a.body.data;
						s(v({
							listingName: e,
							models: t,
							utcTimeStamp: d
						}))
					} else s(x({
						error: a.error,
						utcTimeStamp: d
					}))
				}, E = (e, t) => async (s, o) => s(y(e, t)), y = (e, t) => async (s, o, {
					gqlContext: n
				}) => {
					const r = o();
					if (Object(c.f)(r)) return;
					s(h());
					const a = Date.now(),
						d = e.replace("r/", ""),
						m = Object(l.C)(r, d),
						u = await Object(i.b)(n(), {
							subredditId: m,
							options: t
						}),
						p = u.body;
					u.ok && p && p.data || s(x({
						error: u.error,
						utcTimeStamp: a
					}));
					const b = p.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(i.e)(e, t),
								o = Date.now(),
								n = s.body;
							return n && n.data ? n.data : void k({
								streamId: t,
								error: s.error,
								utcTimeStamp: o
							})
						})(n(), e.node.id)),
						g = (await Promise.all(b)).filter(e => void 0 !== typeof e);
					s(v({
						listingName: e,
						models: g,
						utcTimeStamp: a
					}))
				}, k = e => async t => {
					t(g(e))
				}, x = e => async t => {
					t(f(e))
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
				n = s.n(o),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(r.a)(a.B),
				d = e => async t => {
					t(i(e))
				}, c = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(i({
						correlationId: n()()
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
				return ne
			})), s.d(t, "editRemovalReasonPending", (function() {
				return re
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ae
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
				return be
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return he
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
				return we
			})), s.d(t, "submitRemovalReason", (function() {
				return Ce
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return _e
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				u = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				b = "REMOVALREASONS__DELETE_FAILED";
			var h = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case a:
					case i:
					case c:
					case l:
					case u:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case m:
					case b:
						return t.payload;
					default:
						return e
				}
			};
			var v = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
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
						case b:
							return !1;
						default:
							return e
					}
				},
				g = Object(r.c)({
					error: h,
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
							...n
						} = e;
						return n
					}
					default:
						return e
				}
			};
			const O = {};
			var w = (e = O, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: s,
							response: o
						} = t.payload, {
							order: n
						} = o;
						return {
							...e,
							[s]: n
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
						} = t.payload, n = [...e[s]].filter(e => e !== o);
						return {
							...e,
							[s]: n
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
				_ = Object(r.c)({
					api: g,
					models: S,
					reasonOrder: w,
					removedItemIds: C
				}),
				E = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				x = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/bulkActions/index.ts"),
				R = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				L = s("./src/reddit/actions/comment/moderation.ts"),
				N = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				T = s("./src/reddit/constants/modals.ts"),
				A = s("./src/lib/makeApiRequest/index.ts"),
				D = s("./src/lib/omitHeaders/index.ts"),
				F = s("./src/reddit/constants/headers.ts"),
				B = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(A.a)(Object(D.a)(e, [F.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				U = (e, t, s) => Object(A.a)(Object(D.a)(e, [F.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: E.jb.POST,
					type: "json",
					data: t
				});
			var H = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = s("./src/reddit/helpers/routeKey/index.ts"),
				G = s("./src/reddit/models/ModQueue/index.ts"),
				W = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/RemovalReason/index.ts"),
				Q = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				z = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: _
				}
			});
			const Z = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(y.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().subreddits.models[e].name;
					t(Z());
					const r = await ((e, t) => Object(A.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.jb.GET
					}))(o(), n);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t($(r.error))
				}, te = Object(y.a)(a), se = Object(y.a)(i), oe = Object(y.a)(d), ne = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n().subreddits.models[e].name;
					s(te());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.jb.POST,
						data: s
					}))(r(), a, t);
					if (i.ok) {
						const {
							id: n
						} = i.body, r = {
							...t,
							id: n
						};
						s(se({
							subredditId: e,
							reason: r
						})), s(Object(M.f)({
							kind: Q.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(oe(i.error))
				}, re = Object(y.a)(c), ae = Object(y.a)(l), ie = Object(y.a)(m), de = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n().subreddits.models[e].name;
					s(re());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: E.jb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(r(), a, t);
					i.ok ? (s(ae({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: Q.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(i.error))
				}, ce = Object(y.a)(u), le = Object(y.a)(p), me = Object(y.a)(b), ue = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const a = n().subreddits.models[e].name;
					s(ce());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: E.jb.DELETE
					}))(r(), a, t);
					i.ok ? (s(le({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: Q.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(i.error))
				}, pe = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), be = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(N.i)(T.a.ADD_REMOVAL_REASON))
				}, he = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), fe = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), we = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, s, o, n) => async (r, a, {
					apiContext: i
				}) => {
					const d = a(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(H.a)(l) ? J.e.Post : J.e.Comment,
						u = m === J.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === J.e.Post ? P.S : R.i;
					if (!u || !c) return !1;
					r(he()), r(p({
						[l]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const b = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						h = await V(i(), b);
					if (h.ok) {
						if (r(ve()), t) {
							r(fe());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await U(i(), Object(J.h)(n, m), m);
							if (a.ok) {
								if (o === J.f.Public) {
									if (r(Oe()), a.body) {
										const e = Object(q.a)(a.body, c),
											t = {
												comment: e,
												parentId: l
											},
											s = Object(z.f)(d),
											o = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let n = s && o && Object(K.a)(o, d, d.posts.models[e.postId]);
										if (n || (n = Object(k.a)(e.postId, null, {
												sort: E.v,
												hasSortParam: !0
											})), m === J.e.Post) {
											const s = Object(x.a)(W.c.replyToPost, l);
											r(Object(I.o)({
												...t,
												headCommentId: Object(X.w)(d, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = d.postStickiedComments.data[l];
											r(Object(L.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), o && o !== e.id && r(Object(R.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (m === J.e.Comment) {
											const e = Object(x.a)(W.c.replyToComment, u.id),
												s = Object(X.j)(d, {
													commentId: l,
													commentsPageKey: n
												});
											r(Object(I.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else r(Se());
								return !0
							}
							return r(we(a.error)), !1
						}
					} else r(ge(h.error)), r(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, _e = (e, t, s, n, r) => async (a, i, {
					apiContext: d
				}) => {
					const c = i(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					a(he());
					const m = Object(M.f)({
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
						if (a(Object(j.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								r = await U(d(), Object(J.h)(o, J.e.Bulk), J.e.Bulk);
							r.ok ? (a(Se()), a(m)) : a(we(r.error))
						} else a(m)
					} else a(ge(p.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/loadableAction/index.ts");
			const n = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(o.a)(n.a),
				a = Object(o.a)(n.b)
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
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => n.a.createElement(a.b, {
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
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/isSimpleClick/index.ts"),
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
				sendEvent: b
			}) => n.a.createElement("div", {
				className: Object(r.a)(e, u.a.Wrapper, {
					[u.a.LiveStreamingWrapper]: t
				})
			}, n.a.createElement("span", {
				className: Object(r.a)(u.a.Copy, {
					[u.a.LiveStreamingCopy]: t
				})
			}, p._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), n.a.createElement("div", {
				className: u.a.CTAButtons
			}, n.a.createElement(c.t, {
				className: u.a.LoginLink,
				kind: c.b.ExternalLink,
				priority: c.c.Secondary,
				href: Object(i.a)(s, m, "/login"),
				onClick: e => {
					Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), b(Object(l.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, p._("Log In", null, {
				hk: "ZR3pC"
			})), n.a.createElement(c.t, {
				className: Object(r.a)(u.a.SignupLink, {
					[u.a.LiveStreamingSignupLink]: t
				}),
				kind: c.b.ExternalLink,
				priority: c.c.Primary,
				href: Object(i.a)(s, m, "/register"),
				onClick: e => {
					Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), b(Object(l.c)("user_convert")))
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
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				c = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				m = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = s.n(p);
			const h = Object(a.c)({
					account: e => e.user.account
				}),
				v = Object(r.b)(h);
			t.a = i.a.wrapped(v(({
				account: e,
				className: t,
				height: s,
				icon: o,
				isLivestreaming: r,
				isNSFW: a,
				trash: i,
				userId: p,
				width: h
			}) => {
				const v = r ? 36 : 20,
					g = p || `${null==e?void 0:e.id}`,
					f = {
						height: s || v,
						width: h || v,
						minWidth: h || v
					};
				if (i) return n.a.createElement("div", {
					className: t,
					style: f
				}, n.a.createElement(u.a, {
					className: b.a.TrashIcon
				}));
				const S = e && e.id === p ? e.accountIcon : a ? l.a : null != o ? o : void 0;
				return Object(m.a)(S) ? n.a.createElement("div", {
					className: t,
					style: f
				}, n.a.createElement(c.a, {
					headshot: S
				})) : n.a.createElement("div", {
					className: t,
					style: f
				}, n.a.createElement(d.a, {
					userId: g,
					defaultImage: S
				}))
			}), "ChatIcon", b.a)
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
			t.a = n
		},
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/correlationIdTracker.ts"),
				c = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/makeCommentsPageKey/index.ts"),
				u = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/gold/awardIcon.ts"),
				g = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				f = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				S = s.n(f);
			class O extends n.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: o
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(S.a.container, e, {
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
			var w = Object(c.b)(() => Object(l.c)({
				iconUrl: (e, {
					awardId: t
				}) => {
					if (!t) return;
					const s = Object(h.a)(e, t);
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
				}), b.H, (e, {
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
				_ = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class E extends n.Component {
				constructor(e) {
					super(e), this.state = _(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? _(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: o,
						className: n,
						isFullyLoaded: a
					} = this.props;
					if (!a) return r.a.createElement(w, {
						className: n,
						count: 0
					});
					const i = Math.max(s, e + o.length - t.length),
						d = o.length - 1,
						c = o[d],
						l = o.length !== t.length;
					return r.a.createElement(w, {
						awardId: c,
						className: n,
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
				isLivestreaming: n,
				handleGiveAward: c,
				sendEvent: l
			}) => {
				return r.a.createElement(i.e, {
					className: Object(a.a)(x.a.ChatButton, {
						[x.a.LivestreamingChatButton]: n,
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
							clickRpanGiveAward: a
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						l((n ? a : r)(e))
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
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = a.a.div("LoaderWrapper", c.a),
				m = a.a.div("Icon", c.a),
				u = a.a.div("Byline", c.a),
				p = Object(r.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null))
				});
			t.a = e => n.a.createElement(p, e)
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
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(a.a)(e => r.a.createElement(i.e, null, r.a.createElement(i.i, null, r.a.createElement(c.a, null, r.a.createElement(i.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(i.b, null)))), r.a.createElement(i.l, null, r.a.createElement(i.p, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(i.g, null, !e.hideCancelButton && r.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(i.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(v);
			const f = c.a.wrapped(u.a, "_Dropdown", g.a),
				S = Object(m.a)(f),
				O = c.a.button("MenuButton", g.a),
				w = c.a.wrapped(p.b, "DropdownRow", g.a),
				C = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				_ = Object(a.b)(C, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = _(e => r.a.createElement(O, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), r.a.createElement(S, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
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
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = "rpan-download-obs-modal",
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
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				r = Object(o.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("VideoShareModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = r
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				l = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = s.n(m);
			const p = a.a.wrapped(l.a, "DisplayContainer", u.a),
				b = a.a.div("DropdownLabel", u.a),
				h = a.a.div("ReasonTitle", u.a),
				v = e => r.a.createElement(p, null, r.a.createElement(b, null, e.dropdownLabel), e.selectedReason && r.a.createElement(h, null, e.selectedReason)),
				g = a.a.wrapped(i.a, "Dropdown", u.a),
				f = a.a.wrapped(c.b, "DropdownTriangle", u.a),
				S = a.a.wrapped(d.b, "DropdownRow", u.a),
				O = a.a.button("DropdownContainer", u.a);
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
				return R
			})), s.d(t, "selector", (function() {
				return I
			})), s.d(t, "connector", (function() {
				return L
			})), s.d(t, "CharacterCountdown", (function() {
				return N
			})), s.d(t, "EmptyState", (function() {
				return P
			})), s.d(t, "MessageInput", (function() {
				return B
			})), s.d(t, "FormOptionsContainer", (function() {
				return H
			})), s.d(t, "ModalFooter", (function() {
				return q
			})), s.d(t, "ButtonRow", (function() {
				return G
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return W
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/removalReasons/index.ts"),
				l = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				v = s("./src/reddit/controls/TextButton/index.tsx"),
				g = s("./src/reddit/icons/fonts/Info/index.tsx"),
				f = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				S = s("./src/reddit/models/RemovalReason/index.ts"),
				O = s("./src/reddit/selectors/removalReasons.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
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
			}, R = e => ({
				submitBulkRemovalReason: (t, s, o, n, r) => e(Object(c.submitBulkRemovalReason)(t, s, o, n, r)),
				submitRemovalReason: (t, s, o, n, r) => e(Object(c.submitRemovalReason)(t, s, o, n, r))
			}), I = Object(a.c)({
				currentUserName: e => {
					const t = Object(C.k)(e);
					if (t) return t.displayText
				},
				isLoading: O.a,
				removalReasons: O.c,
				subredditName: (e, {
					subredditId: t
				}) => Object(w.R)(e, {
					subredditId: t
				}).name
			}), L = Object(r.b)(I, R), N = d.a.wrapped(l.a, "CharacterCountdown", y.a), P = d.a.div("EmptyState", y.a), M = d.a.wrapped(m.o, "ModNoteDescription", y.a), T = d.a.wrapped(u.l, "PrimaryButton", y.a), A = d.a.wrapped(h.a, "RadioOption", y.a), D = d.a.span("BoldText", y.a), F = d.a.wrapped(m.t, "ModNoteInput", y.a), B = d.a.wrapped(m.t, "MessageInput", y.a), V = d.a.wrapped(g.a, "Info", y.a), U = d.a.div("SmallInfoText", y.a), H = d.a.div("FormOptionsContainer", y.a), q = d.a.wrapped(m.g, "ModalFooter", y.a), K = d.a.div("FooterRow", y.a), G = d.a.wrapped(K, "ButtonRow", y.a);
			class W extends n.a.Component {
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
						return t.removalContextType !== S.e.Bulk && s.push(n.a.createElement(A, {
							key: S.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: S.f.Public
						}, n.a.createElement("div", null, t.removalContextType === S.e.Post ? k._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : k._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(n.a.createElement(A, {
							key: S.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: S.f.Private
						}, n.a.createElement("div", null, k._("Private: send a Modmail from {subredditName} to the user", [k._param("subredditName", n.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(n.a.createElement(A, {
							key: S.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: S.f.PrivateExposed
						}, n.a.createElement("div", null, k._("Private: send a Modmail from {currentUserName} to the user", [k._param("currentUserName", n.a.createElement(D, null, `u/${e.currentUserName}`))], {
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
					return n.a.createElement(m.e, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && n.a.createElement(m.i, null, n.a.createElement(f.a, null, n.a.createElement(m.q, null, k._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && k._("({number of items} posts/comments)", [k._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), n.a.createElement(v.a, {
						onClick: this.onCancel
					}, n.a.createElement(m.b, null)))), n.a.createElement(m.l, null, e.isLoading || e.removalReasons.length > 0 ? n.a.createElement(_.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : n.a.createElement(P, null, k._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), n.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, n.a.createElement(u.r, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, k._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && n.a.createElement(H, null, n.a.createElement(m.h, null, n.a.createElement(b.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), n.a.createElement(B, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), n.a.createElement(N, {
						maxChars: S.a,
						text: t.message.trim()
					}), n.a.createElement(U, null, t.removalType !== S.f.Public && n.a.createElement(n.a.Fragment, null, n.a.createElement(V, null), k._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), n.a.createElement(q, null, n.a.createElement(K, null, n.a.createElement(M, null, k._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), n.a.createElement(K, null, n.a.createElement(F, {
						placeholder: k._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), n.a.createElement(K, null, n.a.createElement(N, {
						maxChars: S.b,
						text: t.modNote.trim()
					})), n.a.createElement(G, null, n.a.createElement(u.o, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, k._("Cancel", null, {
						hk: "2TSLl5"
					})), n.a.createElement(T, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, k._("Submit", null, {
						hk: "4aU3dh"
					})))))
				}
			}
			t.default = Object(i.a)(L(W))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: n.a.overlayReportFlow
			};
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: n.a.overlayReportFlow
				},
				a = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				i = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlowNew").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = i
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
				return a
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
				return b
			})), s.d(t, "g", (function() {
				return h
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
				return w
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = s.n(n);
			const a = o.a.section("FormPage", r.a),
				i = o.a.h1("HomePageTitle", r.a),
				d = o.a.button("HomePageBreadcrumb", r.a),
				c = o.a.div("HomePageGroup", r.a),
				l = o.a.h1("FormPageTitle", r.a),
				m = o.a.div("FormPageSection", r.a),
				u = o.a.div("FormGroup", r.a),
				p = o.a.h2("FormGroupTitle", r.a),
				b = o.a.div("FormElement", r.a),
				h = o.a.div("FormGroupDescription", r.a),
				v = o.a.div("FormItem", r.a),
				g = o.a.h3("FormElementTitle", r.a),
				f = o.a.div("FormElementDescription", r.a),
				S = o.a.div("FormElementError", r.a),
				O = o.a.div("FormElementSubGroup", r.a),
				w = o.a.li("FormListItem", r.a)
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
			var n;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(o.f)(s));
				return t
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
				return b
			})), s.d(t, "E", (function() {
				return h
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
				return w
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "q", (function() {
				return _
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
				return R
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "n", (function() {
				return L
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "d", (function() {
				return M
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "w", (function() {
				return A
			})), s.d(t, "F", (function() {
				return D
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "l", (function() {
				return B
			})), s.d(t, "m", (function() {
				return V
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "h", (function() {
				return H
			}));
			var o, n = s("./src/reddit/constants/chat.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(o || (o = {}));
			const i = (e, t) => {
					if (t) {
						const s = a.B(e, t.post.id),
							o = a.I(e, t.post.id),
							n = a.jb(e);
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
							subreddit: n
						}
					}
					return {
						subreddit: a.jb(e)
					}
				},
				d = (e, t, s) => {
					if (!t || !s) return;
					const o = Object(r.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || s.chatState === n.a.None;
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
						chatState: a ? n.a.None : n.a.Compact,
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
					actionInfo: a.d(s, {
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
				b = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				h = (e, t) => s => ({
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
				f = (e, t, s, o) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(n, t, s),
					...c(n),
					...i(n, t),
					actionInfo: a.d(n, {
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
				w = (e, t) => s => ({
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
				_ = (e, t) => s => ({
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
					profile: a.R(t),
					screen: a.ab(t),
					...i(t, e)
				}),
				R = e => t => {
					const s = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.R(t),
						screen: a.ab(t),
						...s
					}
				},
				I = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				N = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: a.jb(t)
				}),
				P = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: d(s, e, t),
					...i(s, e)
				}),
				M = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: d(s, e, t),
					...i(s, e)
				}),
				T = (e, t) => s => ({
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
				F = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: d(s, e, t),
					...i(s, e)
				}),
				B = (e, t) => s => ({
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
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
				...Object(n.o)(e),
				source: "post",
				action: o.c.CLICK,
				noun: "share_chat",
				subreddit: Object(n.jb)(e)
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(r.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("share", e.isFilled), d.a.shareIcon, e.className)
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
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = s.n(a);

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
			}) => n.a.createElement("svg", d({
				className: Object(r.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s), n.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
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
		"./src/reddit/icons/svgs/Pagination/back.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, n.a.createElement("g", {
				stroke: "none"
			}, n.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
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
				n = s.n(o);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
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
				n = s.n(o);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
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
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
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
			const n = 20,
				r = 50,
				a = 1e4,
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
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				m = s("./src/reddit/actions/login.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				p = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				b = s("./src/config.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./node_modules/lodash/throttle.js"),
				g = s.n(v),
				f = s("./src/reddit/contexts/NavbarExp.ts"),
				S = s("./src/higherOrderComponents/withMux/index.tsx"),
				O = s("./src/lib/addQueryParams/index.ts");
			var w = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				C = s("./src/lib/focusVisible/index.js"),
				_ = s("./src/lib/VideoSession/util.ts"),
				E = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				y = s("./src/reddit/actions/chat/toggle.ts"),
				k = s("./src/reddit/actions/media.ts"),
				x = s("./src/reddit/actions/modal.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				R = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				I = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				L = s("./src/lib/makeActionCreator/index.ts");
			const N = Object(L.a)(I.E),
				P = Object(L.a)(I.X),
				M = e => async t => {
					t(N(e))
				}, T = Object(L.a)(I.P), A = Object(L.a)(I.V);
			var D = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				F = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				B = s("./src/reddit/actions/reportFlow/index.ts"),
				V = s("./src/reddit/actions/video.ts"),
				U = s("./src/reddit/components/HlsVideo/index.tsx"),
				H = s("./src/higherOrderComponents/asModal/index.tsx"),
				q = s("./src/lib/lessComponent.tsx"),
				K = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				G = s("./src/reddit/controls/Button/index.tsx"),
				W = s("./src/reddit/controls/TextButton/index.tsx"),
				J = s("./src/reddit/helpers/localStorage/index.ts"),
				Q = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				X = s("./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less"),
				z = s.n(X);
			const Z = q.a.div("Image", z.a),
				Y = q.a.wrapped(K.g, "ModalFooter", z.a),
				$ = q.a.wrapped(K.i, "ModalHeader", z.a),
				ee = q.a.wrapped(K.l, "ModalMain", z.a);
			var te = Object(H.a)(({
					toggleModal: e
				}) => {
					const t = () => {
						J.Nb(), e()
					};
					return n.a.createElement(K.e, null, n.a.createElement($, null, n.a.createElement(Q.a, null, n.a.createElement("div", null, n.a.createElement("div", {
						className: z.a.Title
					}, h.fbt._("Get ready to chat!", null, {
						hk: "1lebCx"
					})), n.a.createElement(K.p, null, h.fbt._("Before jumping in, keep these tips in mind.", null, {
						hk: "3evsT7"
					}))), n.a.createElement(W.a, {
						onClick: t
					}, n.a.createElement(K.b, null)))), n.a.createElement(ee, null, n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: z.a.SubTitle
					}, h.fbt._("Remember the human", null, {
						hk: "3oHyEM"
					})), n.a.createElement(K.o, null, h.fbt._("We're all (internet) friends here, so enjoy chatting and remember that rules still apply.", null, {
						hk: "3df1qF"
					}))), n.a.createElement(Z, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/heart-rainbow.png")`
						}
					})), n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: z.a.SubTitle
					}, h.fbt._("Look out for each other", null, {
						hk: "hrE04"
					})), n.a.createElement(K.o, null, h.fbt._("If you see any harrassment or abuse, report it by pressing and holding on the message.", null, {
						hk: "12gD31"
					}))), n.a.createElement(Z, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_beagle.png")`
						}
					})), n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: z.a.SubTitle
					}, h.fbt._("Have fun!", null, {
						hk: "20HtGT"
					})), n.a.createElement(K.o, null, h.fbt._("Chat, lol, debate, discuss human nature or quantum physics... it's all up to you.", null, {
						hk: "3Aj4Z7"
					}))), n.a.createElement(Z, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_celebrate.png")`
						}
					}))), n.a.createElement(Y, {
						className: z.a.ModalFooter
					}, n.a.createElement(G.l, {
						onClick: t,
						className: z.a.Button,
						"data-redditstyle": !0
					}, h.fbt._("Start Chatting", null, {
						hk: "3n2GtA"
					}))))
				}),
				se = s("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				oe = s.n(se),
				ne = s("./src/reddit/icons/svgs/Close/index.tsx"),
				re = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less"),
				ae = s.n(re);
			var ie = ({
					onClickLearnMore: e,
					onClickDismiss: t,
					isDark: s = !1
				}) => n.a.createElement("div", {
					className: Object(d.a)(ae.a.banner, {
						[ae.a.dark]: s
					})
				}, n.a.createElement("div", null, h.fbt._("{=Download the RPAN studio} desktop application to broadcast live from your computer.", [h.fbt._param("=Download the RPAN studio", n.a.createElement("span", {
					className: oe.a.strongTextFont
				}, h.fbt._("Download the RPAN studio", null, {
					hk: "1rcEDr"
				})))], {
					hk: "ODJOz"
				})), n.a.createElement(G.t, {
					className: ae.a.bannerButton,
					kind: G.b.Button,
					priority: G.c.Primary,
					onClick: e,
					"data-redditstyle": !0
				}, h.fbt._("Learn more", null, {
					hk: "1Ri9Pi"
				})), n.a.createElement(ne.a, {
					"data-testid": "bannerCloseIcon",
					onClick: t,
					className: Object(d.a)(ae.a.bannerCloseIcon, {
						[ae.a.dark]: s
					})
				})),
				de = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/Loader.tsx"),
				ce = s("./src/reddit/actions/post.ts"),
				le = s("./src/reddit/actions/removalReasons/index.ts"),
				me = s("./src/reddit/actions/toaster.ts"),
				ue = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				pe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				be = s("./src/reddit/models/RemovalReason/index.ts"),
				he = s("./src/reddit/models/Toast/index.ts"),
				ve = s("./src/reddit/selectors/activeModalId.ts"),
				ge = s("./src/reddit/selectors/telemetry.ts"),
				fe = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"),
				Se = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				Oe = s("./src/reddit/controls/InternalLink/index.tsx"),
				we = s("./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less"),
				Ce = s.n(we);
			const {
				fbt: _e
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = Object(r.b)(fe.selector, fe.dispatcher), ye = q.a.wrapped(K.g, "EndBroadcastModalFooter", Ce.a), ke = q.a.wrapped(K.t, "EndBroadcastMessageInput", Ce.a);
			class xe extends fe.AddRemovalReasonModal {
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.isLoading || e.removalReasons.length > 0;
					return n.a.createElement(K.e, {
						onClick: this.closeDropdown
					}, s && n.a.createElement(K.i, null, n.a.createElement(Q.a, null, n.a.createElement(K.q, null, _e._("Remove broadcast", null, {
						hk: "1JfCvD"
					})), n.a.createElement(W.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, n.a.createElement(K.b, null)))), n.a.createElement(K.l, null, s ? n.a.createElement(Se.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : n.a.createElement(fe.EmptyState, null, _e._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), n.a.createElement(Oe.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, n.a.createElement(G.r, {
						onClick: e.toggleRemovalReasonModal,
						"data-redditstyle": !0
					}, _e._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Ce.a.MessageHeader
					}, _e._("Message to the broadcaster", null, {
						hk: "bGz26"
					})), n.a.createElement(fe.FormOptionsContainer, null, n.a.createElement(ke, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), n.a.createElement(fe.CharacterCountdown, {
						maxChars: be.a,
						text: t.message.trim()
					})))), n.a.createElement(ye, null, n.a.createElement(fe.ButtonRow, null, n.a.createElement(K.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, _e._("Cancel", null, {
						hk: "2TSLl5"
					})), n.a.createElement(K.u, {
						onClick: () => {
							t.selectedReason && this.props.submitRemoval(t.selectedReason, t.message)
						},
						disabled: !this.canSave()
					}, _e._("Remove", null, {
						hk: "3tYl0U"
					})))))
				}
			}
			var je = Object(H.a)(Ee(xe));
			const {
				fbt: Re
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = Object(i.c)({
				isConfirmationModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
				isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e)
			}), Le = Object(r.b)(Ie, (e, {
				subredditId: t,
				postId: s
			}) => ({
				submitRemovalReason: async (t, s, o) => {
					const n = await e(Object(le.submitRemovalReason)([t], s, o, be.f.Private, ""));
					e(n ? Object(me.f)({
						kind: he.b.SuccessEndBroadcast,
						text: Re._("Broadcast ended", null, {
							hk: "313j6x"
						})
					}) : Object(me.f)({
						text: Re._("Toast:", null, {
							hk: "2dCWf"
						}),
						duration: 1e4,
						kind: he.b.Error
					}))
				},
				fetchRemovalReasons: () => e(Object(le.removalReasonsRequested)(t)),
				errorToast: t => e(Object(me.f)({
					text: t,
					duration: 1e4,
					kind: he.b.Error
				})),
				toggleRemovalReasonModal: () => e(Object(x.i)("rpan-add-removal-reason-id")),
				toggleConfirmationModal: () => e(Object(x.i)("rpan-end-broadcast-confirmation-id")),
				onRemovePost: () => e(Object(ce.T)(s, !1))
			}));
			class Ne extends n.a.Component {
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
					return n.a.createElement(ue.a, {
						headerText: Re._("Are you sure you want to remove this broadcast?", null, {
							hk: "1Wcei3"
						}),
						modalText: Re._("This can't be undone.", null, {
							hk: "2HfakZ"
						}),
						actionText: Re._("Yes, remove", null, {
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
					return n.a.createElement(je, {
						submitRemoval: this.onSubmitRemovalReasons,
						toggleRemovalReasonModal: this.props.toggleRemovalReasonModal,
						toggleConfirmationModal: this.props.toggleConfirmationModal,
						itemIds: [this.props.postId],
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleRemovalReasonModal,
						trackClick: ((e, t, s) => o => () => this.props.sendEvent(n => ({
							source: e,
							action: "click",
							noun: o,
							post: s && Object(ge.I)(n, s),
							screen: Object(ge.ab)(n),
							subreddit: Object(ge.kb)(n, t)
						})))("removal_reasons", this.props.subredditId, this.props.postId)
					})
				}
				render() {
					return this.props.isRemovalReasonModalOpen ? this.renderRemovalReasonModal() : this.props.isConfirmationModalOpen ? this.renderConfirmationModal() : n.a.createElement("div", null)
				}
			}
			var Pe, Me = Object(H.a)(Le(Object(pe.c)(Ne))),
				Te = s("./src/reddit/components/ReportFlow/index.tsx"),
				Ae = s("./src/reddit/components/ReportFlow/new.tsx"),
				De = s("./src/reddit/constants/history.ts"),
				Fe = s("./src/reddit/constants/keycodes.ts"),
				Be = s("./src/reddit/constants/parameters.ts"),
				Ve = s("./src/reddit/helpers/dom/index.ts"),
				Ue = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				He = s("./src/reddit/helpers/trackers/rpan.ts"),
				qe = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ke = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ge = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				We = s("./src/reddit/selectors/media.ts"),
				Je = s("./src/reddit/selectors/platform.ts"),
				Qe = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				Xe = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				ze = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts"),
				Ze = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(Pe || (Pe = {}));
			const Ye = 60,
				$e = 30,
				et = 3 * Ye,
				tt = 5 * Ye,
				st = 5,
				ot = 5 * Ye,
				nt = 10,
				rt = 5;
			var at = s("./node_modules/uuid/v4.js"),
				it = s.n(at),
				dt = s("./src/lib/makeCommentsPageKey/index.ts"),
				ct = s("./src/reddit/actions/gold/modals.ts"),
				lt = s("./src/reddit/actions/moderatingSubreddits.ts"),
				mt = s("./src/reddit/endpoints/publicAccessNetwork/index.ts");
			const ut = e => async (t, s, {
				apiContext: o
			}) => {
				const n = await Object(mt.j)(o(), e, !0);
				n && n.ok ? t(Object(me.f)({
					kind: he.b.SuccessLockComment,
					text: h.fbt._("Comments locked", null, {
						hk: "3WAk9Y"
					}),
					buttonText: h.fbt._("UNDO", null, {
						hk: "3Kk8Xw"
					}),
					buttonAction: pt(e)
				})) : t(Object(me.f)(Object(me.e)(h.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), he.b.Error)))
			}, pt = e => async (t, s, {
				apiContext: o
			}) => {
				const n = await Object(mt.j)(o(), e, !1);
				n && n.ok ? t(Object(me.f)({
					kind: he.b.SuccessUnlockComment,
					text: h.fbt._("Comments unlocked", null, {
						hk: "rEYa1"
					}),
					buttonText: h.fbt._("UNDO", null, {
						hk: "OXk5v"
					}),
					buttonAction: ut(e)
				})) : t(Object(me.f)(Object(me.e)(h.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), he.b.Error)))
			};
			var bt = s("./src/reddit/actions/subscription/index.ts"),
				ht = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				vt = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				gt = s("./src/reddit/constants/posts.ts"),
				ft = s("./src/reddit/helpers/correlationIdTracker.ts"),
				St = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				Ot = s("./src/reddit/routes/postCreation/constants.ts"),
				wt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ct = s("./src/reddit/selectors/subreddit.ts"),
				_t = s("./src/reddit/selectors/comments.ts"),
				Et = s("./src/reddit/selectors/commentSelector.ts"),
				yt = s("./src/reddit/selectors/communityAwards.ts"),
				kt = s("./src/reddit/models/Gold/Award.ts");
			var xt = e => e < 500 || !e ? kt.e.Silver : e < 1800 ? kt.e.Gold : kt.e.Platinum,
				jt = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				Rt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				It = s.n(Rt);
			const {
				fbt: Lt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Nt(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: o,
					tier: r,
					className: a
				} = e, i = r === kt.e.Silver ? It.a.silverTierAttribution : r === kt.e.Gold ? It.a.goldTierAttribution : It.a.platinumTierAttribution;
				return n.a.createElement("div", {
					className: Object(d.a)(a, It.a.tierAttribution, i),
					role: "presentation"
				}, r !== kt.e.Silver && n.a.createElement(jt.a, {
					className: It.a.giverIcon,
					userId: o,
					width: 16,
					height: 16
				}), n.a.createElement("span", null, r !== kt.e.Silver && Lt._("{giverName} gave {space}", [Lt._param("giverName", s), Lt._param("space", " ")], {
					hk: "SzDdi"
				}), n.a.createElement("strong", {
					className: It.a.awardName
				}, t)))
			}
			var Pt = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Mt = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Tt = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				At = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Dt = s.n(At);

			function Ft(e) {
				const {
					iconUrl: t,
					tier: s,
					className: o
				} = e, r = s === kt.e.Silver ? Dt.a.silverTierAwardIcon : s === kt.e.Gold ? Dt.a.goldTierAwardIcon : Dt.a.platinumTierAwardIcon, a = s !== kt.e.Silver, i = s === kt.e.Platinum;
				return n.a.createElement("div", {
					className: Object(d.a)(o, Dt.a.tierAwardIcon),
					role: "presentation"
				}, n.a.createElement("div", {
					className: Dt.a.awardIconContainer
				}, a && n.a.createElement(n.a.Fragment, null, n.a.createElement(Mt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundStar)
				}), n.a.createElement(Tt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundStar, Dt.a.backgroundStar2)
				})), n.a.createElement("img", {
					src: t,
					className: r
				}), i && n.a.createElement(n.a.Fragment, null, n.a.createElement(Pt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleBottomLeft)
				}), n.a.createElement(Pt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleTopRight)
				}), n.a.createElement(Pt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleBottomRight)
				}))))
			}
			var Bt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				Vt = s.n(Bt);

			function Ut(e) {
				const {
					award: t,
					className: s,
					giverId: o,
					giverName: r
				} = e, a = xt(t.coinPrice), i = t.icon128 ? t.icon128.url : t.icon.url;
				return n.a.createElement("div", {
					className: Object(d.a)(s, Vt.a.container),
					role: "presentation"
				}, n.a.createElement(Ft, {
					iconUrl: i,
					tier: a,
					className: Vt.a.awardIconAnimation
				}), n.a.createElement(Nt, {
					awardName: t.name,
					className: Vt.a.attributionAnimation,
					giverId: o,
					giverName: r,
					tier: a
				}))
			}
			var Ht = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				qt = s.n(Ht);
			class Kt extends o.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: o
					} = this.props;
					return e && o && s ? n.a.createElement("div", {
						className: Object(d.a)(t, qt.a.awardOverlay),
						role: "presentation"
					}, n.a.createElement(Ut, {
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
						authorId: n
					} = t;
					return {
						award: s ? Object(yt.a)(e, s) : void 0,
						giverId: n,
						giverName: o
					}
				}))(Kt),
				Wt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Jt = s.n(Wt);
			const Qt = Object(r.b)(() => Object(i.c)({
					awardedCommentLinks: (e, {
						commentsPageKey: t
					}) => {
						return Object(_t.g)(e, {
							commentsPageKey: t
						}).filter(t => {
							const s = Object(Et.b)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: _t.u
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
					return r.length ? n.a.createElement("div", {
						className: Object(d.a)(t, Jt.a.awardOverlaySpectacle),
						role: "presentation"
					}, r.map(e => n.a.createElement(Gt, {
						className: Jt.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var Zt = Qt(zt);
			const Yt = (e, t) => e > t ? Pe.EXTENDED : e < et ? Pe.CRITICAL : e < tt ? Pe.LOW : Pe.NORMAL,
				$t = e => e / Ye,
				es = e => ts(e) % ot == 0,
				ts = e => Math.round(e / st) * st;
			var ss = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				os = s.n(ss);
			const ns = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push(`Delay${t}`);
					return e
				})(),
				rs = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push(`X${5*t}`);
					return e
				})(),
				as = ["15Deg", "45Deg", "75Deg"],
				is = e => e[Math.floor(Math.random() * e.length)],
				ds = () => {
					const e = [is(rs), is(as), is(ns)].map(e => os.a[`particle${e}`]).join(" ");
					return `${os.a.particle} ${e} ${Math.round(Math.random())?os.a.particleReverse:""}`
				},
				cs = 40,
				ls = 20;
			class ms extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < cs; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < ls; t++) e.push(this.createParticle(t, "particleLg"));
					return n.a.createElement("div", {
						className: os.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return n.a.createElement("div", {
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
			class bs extends o.Component {
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
						timerDiff: n,
						timer: r
					} = t;
					if (!s || !s.meter || null === r) return null;
					if (n > 0) {
						if (n < Ye) {
							const e = ts(n);
							return h.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [h.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round($t(n));
							return h.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [h.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (r > s.meter.full_meter_duration) {
						const e = Math.round($t(s.meter.full_meter_duration)).toLocaleString();
						return h.fbt._("{number of minutes}+ minutes airtime left", [h.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (es(r) && !o && r > tt) {
						const e = Math.round($t(r)).toLocaleString();
						return h.fbt._("{number of minutes} minutes airtime left", [h.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const a = Math.round(r),
						i = Math.floor($t(a)),
						d = a % Ye,
						c = `${i}:${d<10?"0":""}${d}`;
					return h.fbt._("{mm:ss timestamp of remaining time} airtime left", [h.fbt._param("mm:ss timestamp of remaining time", c)], {
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
						return t.pillLabel = bs.getPillLabel(e, t), t
					}
					const n = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (o > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = o - t.estimatedTimeRemaining + e;
						s > st && (n.timer = o, n.timerDiff = s, n.timerPausedAt = o)
					}
					o !== t.estimatedTimeRemaining && Math.abs(n.timer - o) > nt && (n.timer = o, n.timerDiff = o - t.timer, n.timerPausedAt = null), null !== n.timerPausedAt && n.timerPausedAt - n.timer > rt && (n.timerDiff = 0, n.timerPausedAt = null);
					const r = bs.getPillLabel(e, n),
						a = bs.isPillVisible(n.timer, e.overlayOpen, n.timerDiff);
					return {
						estimatedTimeRemaining: o,
						...n,
						streamId: s,
						pillLabel: r,
						previouslyVisible: t.visible,
						visible: a
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
						pillLabel: a
					} = this.state;
					if (!(s && e && e.meter && r)) return null;
					const i = Yt(r, e.meter.full_meter_duration),
						c = !o,
						l = r < tt || t,
						m = this.state.timerDiff > 0;
					return n.a.createElement("div", {
						className: os.a.meterOverlay
					}, n.a.createElement("div", {
						className: os.a.meterPillWrapper
					}, m && n.a.createElement(us, null), n.a.createElement("div", {
						className: Object(d.a)(os.a.meterPillContainer, {
							[os.a.animateMeterInAndOut]: c && !l,
							[os.a.animateMeterInOnly]: c && l,
							[os.a.fillMeterCritical]: i === Pe.CRITICAL,
							[os.a.fillMeterLow]: i === Pe.LOW,
							[os.a.fillMeterNormal]: i === Pe.NORMAL || i === Pe.EXTENDED,
							[os.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, n.a.createElement("div", {
						className: os.a.meterLabel
					}, a))))
				}
			}
			var hs = bs,
				vs = s("./src/reddit/components/OverflowMenu/index.tsx"),
				gs = s("./src/reddit/controls/Dropdown/Row.tsx"),
				fs = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Ss = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				Os = s.n(Ss);
			const {
				fbt: ws
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Cs = ({
					label: e,
					onSelect: t,
					onToggle: s,
					subreddits: o
				}) => n.a.createElement(vs.b, {
					className: Os.a.overflowMenu,
					dropdownClassName: Os.a.dropdown,
					defaultButtonOutline: !0,
					disabled: o.length < 1,
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("div", {
						className: Os.a.overflowMenuIcon
					}, e, n.a.createElement(fs.a, {
						className: Os.a.dropdownTriangle
					})),
					onClick: s
				}, n.a.createElement("div", {
					className: Os.a.dropdownLabel
				}, ws._("Pick a Community", null, {
					hk: "8MoVj"
				})), o.map(e => n.a.createElement(gs.b, {
					className: Os.a.dropdownRow,
					displayText: e.prefixedName,
					iconWrapperClassName: Os.a.overflowItemIconWrapper,
					key: `rpan-recommended-viewer-subreddits-dropdown-${e.prefixedName}`,
					onClick: () => t(e)
				}))),
				_s = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
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
						isVisible: a,
						onPlayPauseToggle: i,
						onVideoPositionUpdate: c,
						seekBarRef: l,
						settingChange: m,
						setVolume: u,
						hideLiveLabel: p,
						videoCurrentTime: b,
						videoTotalTime: h,
						volume: v,
						volumeRef: g
					} = this.props;
					return n.a.createElement(_s.b, {
						className: Object(d.a)(e, ys.a.scrubberBar, {
							[ys.a.visible]: a
						}),
						currentTime: b || 0,
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
						totalTime: h || 0,
						volume: v,
						volumeRef: g
					})
				}
			}
			var xs = ks,
				js = s("./node_modules/lodash/debounce.js"),
				Rs = s.n(js),
				Is = s("./src/lib/prettyPrintNumber/index.ts"),
				Ls = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				Ns = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Ps = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Ms = s("./src/reddit/models/Vote/index.ts"),
				Ts = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				As = s.n(Ts);
			const Ds = Object(i.c)({
				currentStream: (e, {
					currentStreamId: t
				}) => Object(Xe.l)(e, t)
			});
			class Fs extends n.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(Ms.a.upvoted), this.downVotes = () => this.calculateVotes(Ms.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === Ms.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(Ms.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = Rs()(() => this.vote(Ms.a.upvoted), I.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = Rs()(() => this.vote(Ms.a.downvoted), I.Y, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: Ms.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState({
						...this.state,
						displayedVoteState: Object(Ms.e)(e.post.voteState)
					})
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState({
						...this.state,
						displayedVoteState: null !== t.post.voteState ? Object(Ms.e)(t.post.voteState) : Ms.a.notVoted
					}))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return n.a.createElement("div", {
						className: As.a.statsPanel
					}, n.a.createElement("div", {
						className: As.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(d.a)(As.a.upButton, {
							[As.a.activeVote]: this.isVoteActive(Ms.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": h.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, n.a.createElement(Ps.a, {
						className: As.a.voteIcon
					})), n.a.createElement("p", {
						className: As.a.votesCounter
					}, Object(Is.b)(this.upVotes()))), n.a.createElement("div", {
						className: As.a.watchingContainer
					}, n.a.createElement("div", {
						className: As.a.watchingCounter
					}, Object(Is.b)(t)), n.a.createElement("p", {
						className: As.a.watchingCaption
					}, this.props.isLive ? h.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : h.fbt._("Views", null, {
						hk: "ixhZU"
					}))), n.a.createElement("div", {
						className: As.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(d.a)(As.a.downButton, {
							[As.a.activeVote]: this.isVoteActive(Ms.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": h.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, n.a.createElement(Ns.a, {
						className: As.a.voteIcon
					})), n.a.createElement("p", {
						className: As.a.votesCounter
					}, Object(Is.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, Ms.a.notVoted), void this.setState({
							...this.state,
							displayedVoteState: Ms.a.notVoted
						});
						this.props.vote(t.post.id, e), this.setState({
							...this.state,
							displayedVoteState: e
						}), e === Ms.a.upvoted ? this.props.onUpvote() : this.props.onDownvote()
					}
				}
			}
			var Bs = Object(r.b)(Ds, (e, t) => ({
					vote: (t, s) => e(Object(Ls.a)(t, s))
				}))(Fs),
				Vs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				Us = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				Hs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				qs = s.n(Hs),
				Ks = s("./src/reddit/helpers/trackers/shareToChat.ts"),
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
					inStreamingUiRefreshViewer: Ke.f,
					inViewerFeedTheMeter: (e, t) => Object(Ke.g)(e, t, Zs),
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
					isMenuOpened: e => e.tooltipId === Vs.d || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId || e.tooltipId === Us.j,
					lastBatchApiRequestTs: Qe.i,
					recommendedViewerSubredditOptions: Qe.j,
					isModWithPostPermissions: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(wt.h)(e, {
							subredditId: Object(Ct.C)(e, s)
						})
					},
					isUserSubscriber: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(Ct.db)(e, {
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
						return s ? Object(Ct.w)(e, {
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
						}), I.o)
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
							settingChange: ht.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: ht.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ht.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === ht.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ht.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === ht.a.Volume && s && s.handleMouseUp(e), this.setState({
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
							n = it()(),
							r = {
								[Be.r]: n,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							};
						e(Object(O.a)(o, r)), s({
							referralId: n
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
						onReport: a,
						onToggleMenu: i,
						onUpvote: c,
						onDownvote: l
					} = this.props, m = e && e.post.id;
					return n.a.createElement("div", {
						className: Object(d.a)(Ws.a.overlay, {
							[Ws.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !t && n.a.createElement("div", {
						className: Ws.a.overlayTop
					}, this.renderRecommendedViewerSubreddit(), e && !o && n.a.createElement(n.a.Fragment, null, n.a.createElement(Vs.e, {
						onClick: this.props.onToggleVideoShareModal
					}), n.a.createElement(Vs.b, {
						onClick: i,
						onHideClick: r,
						onReportClick: a
					}))), e && !t && !o && !!m && n.a.createElement(Zt, {
						className: Ws.a.awardOverlaySpectacle,
						commentsPageKey: Object(dt.a)(m)
					}), e && !t && !o && n.a.createElement("div", {
						className: Ws.a.overlayTitle
					}, this.renderTitleContainer()), n.a.createElement("div", {
						className: Ws.a.overlayCenter
					}, this.getContent()), e && !t && !o && n.a.createElement("div", {
						className: Ws.a.overlayBottom
					}, n.a.createElement(Bs, {
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
						isModWithPostPermissions: a,
						isUnavailable: i,
						onHide: c,
						onReport: l,
						onSelectSubreddit: m,
						onToggleMenu: u,
						recommendedViewerSubredditOptions: p,
						related: b,
						subreddit: h,
						isUserSubscriber: v,
						onEndBroadcast: g,
						subredditByName: f,
						onShareToChat: S
					} = this.props;
					if (s || !e || i) return null;
					const w = e && e.post.id,
						{
							authorInfo: C
						} = e.post;
					return n.a.createElement("div", {
						className: Object(d.a)(Qs.a.overlay, {
							[Qs.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !s && !i && !!w && n.a.createElement(Zt, {
						className: Ws.a.awardOverlaySpectacle,
						commentsPageKey: Object(dt.a)(w)
					}), t && n.a.createElement(hs, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), n.a.createElement("div", {
						className: Qs.a.overlayTop
					}, n.a.createElement("div", {
						className: Qs.a.overlayTopLeft
					}, n.a.createElement("div", {
						className: Qs.a.meta
					}, n.a.createElement(Us.c, null, r ? n.a.createElement(Us.h, {
						onClick: this.handleClickLiveBroadcastStatus
					}) : n.a.createElement(Us.p, null)), n.a.createElement(Us.n, {
						text: e.post.title
					}), n.a.createElement("div", {
						className: Qs.a.subredditInfo
					}, n.a.createElement(Us.l, {
						onSelect: m,
						related: b,
						subreddit: h,
						subreddits: p
					}), n.a.createElement(Us.f, {
						onSubscribe: this.onSubscribeToSubreddit,
						isSubscribed: v
					})), n.a.createElement(Us.r, {
						broadcast: e,
						live: r
					}))), n.a.createElement("div", {
						className: Qs.a.overlayTopRight
					}, Object(Us.s)(C) ? n.a.createElement(Us.m, {
						profile: C,
						currentStream: e,
						onSubscriptionChange: this.onProfileSubscriptionChange
					}) : null, n.a.createElement(Us.i, {
						onClick: u,
						onHideClick: c,
						onReportClick: l,
						onToggleLockClick: this.onToggleLock,
						isCommentsLocked: o,
						hasModeratorPermissions: a,
						onEndBroadcastClick: g,
						onRpanStudioClick: this.props.onRpanStudioClick,
						subreddit: f
					}), n.a.createElement(Us.k, {
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
							const e = Object(O.a)(Object(Ue.a)(w), {
								[Be.r]: this.referralId,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							});
							S(e), this.props.sendEvent(Object(Ks.a)())
						}
					}), n.a.createElement("div", {
						className: Object(d.a)({
							[Qs.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, n.a.createElement(Us.q, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), n.a.createElement("div", {
						className: Qs.a.overlayBottom,
						onMouseEnter: this.onMouseHoverScrubber,
						onMouseLeave: this.onMouseLeaveScrubber,
						onMouseMove: this.onMouseHoverScrubber
					}, this.renderScrubber()), this.props.videoShareModalOpen && n.a.createElement(vt.b, {
						className: Ws.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !0,
						url: Object(O.a)(Object(Ue.a)(w), {
							[Be.r]: this.referralId,
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
						onVideoPositionUpdate: a,
						setVolume: i,
						toggleMute: d,
						videoCurrentTime: c,
						videoTotalTime: l,
						volume: m
					} = this.props, u = e ? Qs.a.controls : "", p = e || this.isVisible();
					return n.a.createElement("div", {
						className: u
					}, n.a.createElement(xs, {
						isLive: t,
						isMuted: s,
						isPaused: o,
						isVisible: p,
						onPlayPauseToggle: r,
						onVideoPositionUpdate: a,
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
						isBatchPending: a,
						isConfigError: i,
						isIntroInProgress: d,
						isLoading: c,
						isMuted: l,
						isUnavailable: m,
						inViewerFeedTheMeter: u,
						lastBatchApiRequestTs: p,
						onReplayVideo: b,
						showErrorPrompt: h,
						showStreamEndedPrompt: v,
						toggleMute: g
					} = this.props;
					if (h || d && i || t && o || !t && r) return n.a.createElement(Us.d, null);
					if (d) return n.a.createElement("div", {
						className: Ws.a.intro
					}, n.a.createElement(Vs.c, {
						isMuted: l,
						onToggle: g
					}));
					if (m || !t && !r && !a && p) return null;
					if (c) return n.a.createElement(Us.o, null);
					if (e && e.stream.state === St.a.DISCONNECTED) return n.a.createElement(Us.b, null);
					if (v) return n.a.createElement(Us.a, {
						onClickReplay: b,
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
					return u && f ? n.a.createElement(Us.e, {
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
						a = "";
					"home" === s ? (r = "All", a = "All") : "r/popular" === s ? (r = "Popular", a = "r/popular") : o ? (r = o.replace(/^r\//, ""), a = o) : (r = "All", a = "All");
					const i = t.filter(e => e.prefixedName !== a);
					return n.a.createElement("div", {
						className: Ws.a.menuContainer
					}, n.a.createElement(Cs, {
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
					if (e) return n.a.createElement("div", {
						className: Ws.a.titleContainer
					}, n.a.createElement("h1", {
						className: Ws.a.videoTitle
					}, e.post.title), !t && n.a.createElement("div", {
						className: Ws.a.RecordedLabel
					}, Xs._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(qs.a.ControlVolume)) return !0;
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
						isConfigError: a,
						isIntroInProgress: i,
						isLoading: d,
						isMuted: c,
						isUnavailable: l,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: p,
						showStreamEndedPrompt: b,
						toggleMute: h
					} = this.props;
					return p || i && a || t && s || !t && o ? n.a.createElement("div", {
						className: Ws.a.prompt
					}, Xs._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? n.a.createElement("div", {
						className: Ws.a.intro
					}, n.a.createElement(Vs.c, {
						isMuted: c,
						onToggle: h
					})) : l || !t && !o && !r && m ? null : d ? n.a.createElement("div", {
						className: Ws.a.prompt
					}, Xs._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === St.a.DISCONNECTED ? n.a.createElement("div", {
						className: Ws.a.prompt
					}, Xs._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : b ? n.a.createElement("div", {
						className: Ws.a.prompt
					}, n.a.createElement("div", {
						className: Ws.a.promptButtonSet
					}, n.a.createElement(Vs.g, {
						onClick: u
					}), n.a.createElement(Vs.h, {
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
						t.currentStreamId && (e(Object(ce.eb)(t.currentStreamId, !0, !0, !0)), e(M(t.currentStreamId)))
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
						s && e(Object(bt.d)([{
							name: s,
							type: gt.a.SUBREDDIT
						}], !0))
					},
					getModeratedSubreddits: () => e(Object(lt.b)())
				}))($s),
				to = s("./src/lib/constants/index.ts"),
				so = s("./src/lib/makeDraftKey/index.ts"),
				oo = s("./src/reddit/actions/pages/comments.ts"),
				no = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				ro = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ao = s("./src/reddit/components/CommentsChat/Loader.ts"),
				io = s("./src/reddit/selectors/posts.ts"),
				co = s("./src/reddit/icons/svgs/Send/index.tsx"),
				lo = s("./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less"),
				mo = s.n(lo),
				uo = s("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx");
			const {
				fbt: po
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var bo = ({
					postId: e
				}) => {
					const t = Object(r.e)(t => Object(io.H)(t, {
							postId: e
						})),
						s = Object(r.d)(),
						o = Object(pe.b)(),
						a = t.isGildable;
					return n.a.createElement("span", {
						className: mo.a.InputLine
					}, n.a.createElement("span", {
						className: mo.a.FormBackground
					}, n.a.createElement("span", {
						className: mo.a.FormLine
					}, n.a.createElement("div", {
						className: mo.a.Text
					}, po._("Chat is disabled", null, {
						hk: "gQrh3"
					}))), n.a.createElement(co.a, {
						className: mo.a.SendIcon
					})), a && n.a.createElement(uo.a, {
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
				ho = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx");
			const {
				fbt: vo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), go = q.a.wrapped(K.g, "ModalFooter", z.a), fo = q.a.wrapped(K.i, "ModalHeader", z.a);
			var So = ({
				toggleModal: e,
				bodyText: t,
				title: s
			}) => n.a.createElement(K.e, null, n.a.createElement(fo, null, n.a.createElement(Q.a, null, n.a.createElement("div", null, n.a.createElement("div", {
				className: z.a.Title
			}, s)), n.a.createElement(W.a, {
				onClick: e
			}, n.a.createElement(K.b, null)))), n.a.createElement("div", {
				className: z.a.ModalText
			}, t), n.a.createElement(go, {
				className: z.a.ModalFooter
			}, n.a.createElement(G.l, {
				onClick: e,
				className: z.a.Button,
				"data-redditstyle": !0
			}, vo._("I Understand", null, {
				hk: "1f4y1d"
			}))));
			const {
				fbt: Oo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wo = () => Oo._("Because you’ve been flagged multiple times for violating Reddit’s {=Content Policy,} the system has removed your ability to participate in this chat. This can’t be undone (not even by a mod), but after 24 hours you’ll be able to chat again.", [Oo._param("=Content Policy,", n.a.createElement("a", {
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, Oo._("{=Content Policy},", [Oo._param("=Content Policy", n.a.createElement("span", {
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
				}) => n.a.createElement(So, {
					bodyText: wo(),
					title: Oo._("Sit back and watch for a bit", null, {
						hk: "nd6D"
					}),
					toggleModal: e
				})),
				_o = s("./src/reddit/icons/svgs/Info/index.tsx");
			const {
				fbt: Eo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yo = Object(i.c)({
				isMuteModalOpen: e => "rpan-mute-chat-modal-id" === Object(ve.a)(e)
			});
			class ko extends n.a.Component {
				constructor() {
					super(...arguments), this.onClickInfo = () => {
						this.props.onToggleMuteModal()
					}
				}
				render() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
						className: mo.a.InputLine
					}, n.a.createElement("span", {
						className: mo.a.FormBackground
					}, n.a.createElement("span", {
						className: mo.a.FormLine
					}, n.a.createElement(_o.a, {
						className: mo.a.InfoIcon,
						onClick: this.onClickInfo
					}), n.a.createElement("div", {
						className: mo.a.Text
					}, Eo._("Chat is unavailable", null, {
						hk: "12EjN3"
					}))), n.a.createElement(co.a, {
						className: mo.a.SendIcon
					}))), this.props.isMuteModalOpen && n.a.createElement(Co, {
						toggleModal: this.props.onToggleMuteModal
					}))
				}
			}
			var xo = Object(r.b)(yo, e => ({
				onToggleMuteModal: () => e(Object(x.i)("rpan-mute-chat-modal-id"))
			}))(ko);
			const {
				fbt: jo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ro = () => jo._("Your messages have been flagged for violating Reddit’s {=Content Policy.} Have fun chatting, but if you’re flagged multiple times, you may lose the ability to participate in RPAN chats.", [jo._param("=Content Policy.", n.a.createElement("a", {
				className: z.a.Link,
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, jo._("{=Content Policy}.", [jo._param("=Content Policy", n.a.createElement("span", {
				className: z.a.Link
			}, jo._("Content Policy", null, {
				hk: "36gq1Y"
			})))], {
				hk: "2SSN6t"
			})))], {
				hk: "4aZsnf"
			});
			var Io = Object(H.a)(({
					toggleModal: e
				}) => n.a.createElement(So, {
					bodyText: Ro(),
					title: jo._("Be mindful of what you say", null, {
						hk: "3CDXHh"
					}),
					toggleModal: e
				})),
				Lo = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less")),
				No = s.n(Lo);
			const Po = Object(r.b)(() => Object(i.c)({
					allAwards: e => e.awards.models,
					post: (e, {
						postId: t
					}) => Object(io.H)(e, {
						postId: t
					})
				})),
				Mo = ["Center", "Left", "Right"],
				To = ["Low", "Mid", "High"],
				Ao = () => Math.floor(800 * Math.random()),
				Do = e => e[Math.floor(Math.random() * e.length)],
				Fo = e => {
					const t = Do(Mo),
						s = Do(To),
						o = xt(e);
					return No.a[`award_${o}Tier_${s}${t}`]
				};
			class Bo extends o.Component {
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
								coinPrice: n
							} = e[t];
							return {
								coinPrice: n,
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
						for (let a = 0; a < s; a++) {
							const s = `${Ao()}ms`,
								i = Fo(t),
								c = n.a.createElement("img", {
									key: `${e.id}-${a}`,
									className: Object(d.a)(No.a.award, i),
									src: r,
									style: {
										animationDelay: s
									}
								});
							o.push(c)
						}
					}), n.a.createElement("div", {
						className: No.a.awardBubbler,
						role: "presentation"
					}, o)
				}
			}
			var Vo = Po(Bo),
				Uo = s("./src/reddit/contexts/Post/index.tsx"),
				Ho = s("./src/reddit/models/PostDraft/index.ts");
			const qo = Object(i.a)((e, t) => t, e => e.publicAccessNetwork.automuteLevels, (e, t) => {
				var s;
				return (null === (s = null == t ? void 0 : t[e]) || void 0 === s ? void 0 : s.level) || 0
			});
			var Ko = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Go = s.n(Ko);
			const Wo = Object(i.c)({
				isDisabled: (e, t) => Object(Xe.f)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: Ze.J,
				isPostDataLoaded: (e, {
					postId: t
				}) => !!Object(io.H)(e, {
					postId: t
				}),
				replyComment: (e, {
					postId: t
				}) => Object(_t.s)(e, {
					commentsPageKey: Object(dt.a)(t)
				}),
				automuteViolationLevel: (e, {
					postId: t
				}) => qo(e, t)
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
						openLoginModal: a,
						openRegisterModal: i,
						sendEvent: c,
						subredditId: l,
						replyComment: m,
						onFocusMessageInput: u
					} = this.props, p = Object(dt.a)(e), b = m ? Object(so.a)(Ho.c.replyToComment, m.id) : Object(so.a)(Ho.c.replyToPost, e);
					return o ? n.a.createElement("div", {
						"aria-label": h.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Go.a.streamingChat,
						onClick: this.props.onChatClick
					}, n.a.createElement(Uo.a, {
						postId: e
					}, n.a.createElement(ao.a, {
						className: Go.a.chatScroller,
						emptyStateClassName: Go.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: l,
						commentsPageKey: p
					}), s && (this.shouldMuteChat ? n.a.createElement(xo, null) : t ? n.a.createElement(bo, {
						postId: e
					}) : n.a.createElement(ho.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: m,
						draftKey: b,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: c,
						onFocusMessageInput: u,
						isLivestreaming: !0
					})), n.a.createElement(Vo, {
						postId: e
					}), !s && n.a.createElement(ro.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: r,
						openLoginModal: a,
						openRegisterModal: i,
						origin
					}), this.state.automuteModal === Jo.Warning && n.a.createElement(Io, {
						toggleModal: this.onDismissModal
					}), this.state.automuteModal === Jo.Mute && n.a.createElement(Co, {
						toggleModal: this.onDismissModal
					}))) : n.a.createElement("div", {
						className: Object(d.a)(Go.a.streamingChat, Go.a.prompt)
					}, h.fbt._("Loading...", null, {
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
					fetchAutomuteStatus: () => e(Object(no.b)(t))
				}))(Qo),
				zo = s("./src/reddit/icons/svgs/Pagination/back.tsx");
			var Zo = e => n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				Yo = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				$o = s.n(Yo);
			const en = ({
				isNext: e,
				onClick: t,
				stream: s
			}) => n.a.createElement("div", {
				className: Object(d.a)($o.a.switchContainer, e ? $o.a.switchContainerNext : $o.a.switchContainerPrevious)
			}, n.a.createElement("button", {
				className: $o.a.switchButton,
				disabled: !s,
				onClick: t,
				"aria-label": e ? h.fbt._("Forward arrow", null, {
					hk: "3b7sZa"
				}) : h.fbt._("Back arrow", null, {
					hk: "1upGBK"
				}),
				value: e ? "forward" : "back"
			}, n.a.createElement("div", {
				className: $o.a.streamThumbnail,
				style: s ? {
					backgroundImage: `url(${s.stream.thumbnail})`
				} : {}
			}), e ? n.a.createElement(Zo, {
				className: $o.a.arrowIcon
			}) : n.a.createElement(zo.a, {
				className: $o.a.arrowIcon
			})));
			var tn = e => n.a.createElement(n.a.Fragment, null, n.a.createElement(en, {
				isNext: !1,
				onClick: e.onPrevious,
				stream: e.previousStream
			}), n.a.createElement(en, {
				isNext: !0,
				onClick: e.onNext,
				stream: e.nextStream
			}));
			Object(L.a)(I.s);
			const sn = Object(L.a)(I.A),
				on = (e, t) => async (s, o) => {
					const n = o(),
						r = Date.now(),
						a = e.map(e => Object(Xe.l)(n, e)).filter(Boolean).map(e => ({
							imageUrl: `${e.stream.thumbnail}?${r}`,
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await nn(a, t)
				}, nn = (e, t) => Promise.all(e.map(e => rn(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), rn = e => new Promise((t, s) => {
					const o = new Image;
					o.onload = () => t(), o.onerror = () => s(), o.src = e
				}).then(() => !0, () => !1);
			var an, dn = s("./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less"),
				cn = s.n(dn);
			! function(e) {
				e.Loading = "Loading", e.Preview = "Preview", e.Static = "Static"
			}(an || (an = {}));
			class ln extends o.Component {
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: o
					} = this.props, n = [];
					e && n.push(e.post.id), s && n.push(s.post.id), o && n.push(o.post.id), n.length > 0 && t(n)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: o,
						previousStream: n
					} = this.props, r = [];
					t && this.isStreamChanged(t, e.currentStream) && r.push(t.post.id), n && this.isStreamChanged(n, e.previousStream) && r.push(n.post.id), s && this.isStreamChanged(s, e.nextStream) && r.push(s.post.id), r.length > 0 && o(r)
				}
				render() {
					const {
						previewUrl: e,
						visualEffect: t,
						visualEffectLabel: s
					} = this.props;
					let o, r;
					if (t === an.Loading) o = cn.a.loading;
					else if (t === an.Preview) o = cn.a.preview, r = {
						backgroundImage: `url(${e})`
					};
					else {
						if (t !== an.Static) return null;
						o = cn.a.static
					}
					return n.a.createElement("div", {
						className: cn.a.container
					}, n.a.createElement("div", {
						className: o,
						"aria-label": s,
						style: r
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var mn = Object(r.b)(null, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, o) => {
						const n = await s(on(e, t));
						s(sn(n))
					})(t))
				}))(ln),
				un = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				pn = s.n(un);
			const bn = Object(S.a)(U.a, {
					playerName: "RPAN Video Player"
				}),
				hn = Object(i.c)({
					currentStream: Xe.d,
					currentStreamStartTime: Xe.e,
					currentHlsUrl: Xe.b,
					inViewerFeedTheMeter: (e, t) => Object(Ke.g)(e, t, Xe.d),
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
					isNightMode: Ze.W
				}),
				vn = Object(r.b)(hn, (e, t) => ({
					closeLocation: () => e(Object(a.b)(t.location.state[De.b.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(j.d)(t, !0)),
					fetchPostForStream: t => e(Object(R.a)(t)),
					subscribeConfig: () => e(D.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(D.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(D.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: (t, s) => e(Object(B.c)(t, s)),
					onStatsSubscribe: t => e(D.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(D.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(u.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(u.b)(t)),
					removeStreamFromHistory: t => e(M(t)),
					setNewCorrelationId: () => e(Object(F.b)()),
					setIntroFinishedStatus: t => e(Object(F.c)({
						isIntroFinished: t
					})),
					setMutedInFeed: t => e(V.G(t)),
					setVideoVolume: t => e(k.h(t)),
					updateVideoTimestamp: (t, s) => e(A({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(P(e))
					})(t)),
					resetHistory: () => e(T()),
					toggleIntroChatModal: () => e(Object(x.i)("rpan-intro-chat-modal-id")),
					toggleEndBroadcastModal: () => e(Object(x.i)("rpan-end-broadcast-confirmation-id")),
					toggleRemovalReasonModal: () => e(Object(x.i)("rpan-add-removal-reason-id")),
					toggleOBSDownloadModal: () => e(Object(x.i)(de.a)),
					onShareToChat: t => e(Object(y.f)(t))
				}));
			class gn extends o.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = n.a.createRef(), this.videoRef = n.a.createRef(), this.videoSessionManager = null, this.renderReportFlow = (e, t) => this.props.reportingRevampEnabled ? n.a.createElement(Ae.a, {
						withOverlay: !0,
						overlayCustomStyles: Te.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}) : n.a.createElement(Te.a, {
						withOverlay: !0,
						overlayCustomStyles: Te.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}), this.renderTheater = e => {
						const {
							currentStream: t,
							currentStreamStartTime: s,
							currentHlsUrl: o,
							inViewerFeedTheMeter: r,
							isIntroInProgress: a,
							isOverlay: i,
							isReportFlowOpen: c,
							location: l,
							nextStream: m,
							playbackState: u,
							previewUrl: p,
							previousStream: b,
							related: v,
							sendEvent: g,
							subreddit: f,
							timestamp: S,
							unavailableVideoUrl: O,
							volume: w,
							isRemovalReasonModalOpen: C,
							isEndBroadcastModalOpen: _,
							isIntroChatModalOpen: E,
							isDownloadOBSModalOpen: y,
							isNightMode: k,
							onShareToChat: x
						} = this.props, {
							hasLiveIntent: j,
							isError: R,
							isLoading: I,
							isMuted: L,
							isOverlayVisible: N,
							isVideoPaused: P,
							showStreamEndedPrompt: M,
							videoCurrentTime: T,
							videoTotalTime: A,
							shouldShowOBSBanner: D
						} = this.state, F = t && t.post.id, B = o !== O, V = t && !t.post.subreddit, U = u === Xe.a.LIVE, H = t && 1e3 * t.broadcast_time;
						let q, K, G, W, J = "number" == typeof S ? S : s;
						H && J >= H && (J = 0), t && B ? (q = 1e3 * t.broadcast_time, K = F, G = U, W = t.post.title) : (q = void 0, K = void 0, G = !1, W = "RPAN Unavailable Video");
						const Q = t && t.meter && 10 * Math.round(t.estimated_remaining_time / 10),
							X = r && t && t.estimated_remaining_time < et && !a,
							z = void 0 !== Q && Q >= 0 && X ? pn.a[`meterCritical${Q}`] : void 0;
						let Z, Y;
						return I || R ? Z = p ? an.Preview : an.Loading : X && (Z = an.Static), I ? Y = h.fbt._("video is loading", null, {
							hk: "jUJdy"
						}) : R ? Y = h.fbt._("unable to load video", null, {
							hk: "1Eh3Rt"
						}) : X && (Y = h.fbt._("this broadcast will expire soon. give an award to add more time.", null, {
							hk: "3dUpDV"
						})), n.a.createElement(n.a.Fragment, null, D && n.a.createElement(ie, {
							isDark: k,
							onClickLearnMore: this.onOBSBannerLearnMoreClick,
							onClickDismiss: this.onOBSBannerDismissClick
						}), n.a.createElement("div", {
							className: Object(d.a)(pn.a.theaterContainer, {
								[pn.a.overlay]: i,
								[pn.a.theaterContainerExp]: e,
								[pn.a.isObsBannerDisplayed]: D
							}),
							ref: this.focusRef,
							tabIndex: -1
						}, n.a.createElement("div", {
							className: pn.a.wrap
						}, n.a.createElement("div", {
							className: Object(d.a)(pn.a.panesWrapper, {
								[pn.a.initialized]: !a
							})
						}, n.a.createElement("div", {
							className: Object(d.a)(pn.a.pane, pn.a.leftPane)
						}, n.a.createElement("div", {
							className: pn.a.videoContainer
						}, Z && Y && n.a.createElement(mn, {
							previousStream: b,
							currentStream: t,
							nextStream: m,
							previewUrl: p,
							visualEffect: Z,
							visualEffectLabel: Y
						}), o && n.a.createElement("div", {
							className: z
						}, n.a.createElement(bn, {
							autoplay: !0,
							controls: !1,
							startTime: J,
							isPaused: P,
							muted: L,
							muxVideoDuration: q,
							muxVideoId: K,
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
						})), n.a.createElement(eo, {
							currentStreamId: F,
							isLoading: I,
							isLive: U,
							isMuted: L,
							isPaused: P,
							isUnavailable: u === Xe.a.UNAVAILABLE,
							isVisible: N,
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
							showErrorPrompt: R,
							showStreamEndedPrompt: M,
							subreddit: f,
							toggleMute: this.onToggleMuteVideo,
							videoCurrentTime: U && j ? A : T,
							videoTotalTime: A,
							volume: w
						}), (C || _) && t && n.a.createElement(Me, {
							subredditId: t.post.subreddit.id,
							subredditName: t.post.subreddit.name,
							postId: t.post.id,
							toggleModal: this.onEndBroadcast
						}), E && n.a.createElement(te, {
							toggleModal: this.props.toggleIntroChatModal
						}), y && n.a.createElement(de.b, {
							onClickDownload: this.onOBSModalDownloadClick,
							onClickDismiss: this.onOBSModalDismissClick,
							onClickGuidebook: this.onOBSModalGuidebookClick,
							className: pn.a.downloadOBSModal
						}))), !a && n.a.createElement("div", {
							className: Object(d.a)(pn.a.pane, pn.a.rightPane)
						}, t && !V && n.a.createElement(Xo, {
							location: l,
							onChatClick: this.onChatClick,
							onFocusMessageInput: this.handleFocusMessageInput,
							postId: t.post.id,
							sendEvent: g,
							subredditId: t.post.subreddit.id
						}))), t && !a && n.a.createElement(tn, {
							nextStream: m,
							onNext: this.onNextStream,
							onPrevious: this.onPreviousStream,
							previousStream: b
						}), t && !a && n.a.createElement(fn, {
							onClick: this.onClose
						}), t && !a && c && this.renderReportFlow(t, T))))
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
					}, I.p), this.onVideoPlayerPositionUpdate = e => {
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
							scrubbingStartMs: Object(_.a)(this.state.videoCurrentTime),
							scrubbingEndMs: Object(_.a)(s)
						}))
					}, this.onNextStream = g()(() => {
						const {
							nextStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(He.l)(e, this.playbackStats)), this.goToStream(e))
					}, I.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = g()(() => {
						const {
							previousStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(He.m)(e, this.playbackStats)), this.goToStream(e))
					}, I.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(Ve.g)(e.target) ? e.stopPropagation() : e.keyCode === Fe.a.ArrowRight ? this.onNextStream() : e.keyCode === Fe.a.ArrowLeft && this.onPreviousStream()
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
						} = this.props, n = s && s.post.id === e.id ? s : o(e.id);
						if (!n) return;
						const r = !t.sessionDurationMs ? He.E : He.A,
							a = {
								...t,
								playerType: He.a.Theater
							};
						this.props.sendEvent(r(n, a))
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
					e.classList.add(pn.a.focusVisible), Object(C.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, w(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(qe.t)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream(), window.localStorage && this.setState({
						shouldShowOBSBanner: !J.k()
					})
				}
				componentDidUpdate(e, t) {
					const {
						currentStream: s,
						isIntroInProgress: o,
						isOverlay: n,
						isOverlayOpen: r,
						isReportFlowOpen: a,
						onHeartbeatSubscribe: i,
						onRecommendedViewerSubredditsSubscribe: d,
						onStatsSubscribe: c,
						playbackState: l,
						related: m,
						subreddit: u,
						subscribeConfig: p,
						subscribeStreams: b
					} = this.props;
					if (n || r === e.isOverlayOpen || (r ? (this.setState(({
							isVideoPaused: e
						}) => ({
							wasVideoPausedWhenOverlayOpened: e,
							isVideoPaused: !0
						})), this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits()) : (this.setState(({
							wasVideoPausedWhenOverlayOpened: e
						}) => ({
							isVideoPaused: e
						})), p().then(e => this.unsubscribeConfig = e), b().then(e => this.unsubscribeStreams = e), s && this.isCurrentStreamWatchable() && (i(s.post.id).then(e => this.unsubscribeHeartbeat = e), c(s.post.id).then(e => this.unsubscribeStats = e)), d().then(e => this.unsubscribeRecommendedViewerSubreddits = e))), (m || u) !== (e.related || e.subreddit)) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(s || this.setState({
						isLoading: !0
					}));
					!o && e.isIntroInProgress && this.handleNewStream(), o || e.isIntroInProgress || !Sn(s, e.currentStream) || this.handleNewStream(), this.updateVideoSession(e, t), this.state.isSwitchingOnStreamEndedScheduled || o || !(!s && !this.state.isLoading || l === Xe.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), o || s || this.state.isLoading || this.state.isError || this.setState({
						...this.state,
						isError: !0
					}), a && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					}), this.context.setIsLive(l === Xe.a.LIVE), this.context.setCurrentTime(this.state.videoCurrentTime), this.context.setTotalTime(this.state.videoTotalTime)
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.consumePostTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams(), this.props.resetHistory(), this.props.isOverlay && setTimeout(() => w(this.previouslyActiveElement)), this.destroyVideoSessionManager()
				}
				render() {
					return n.a.createElement(f.a.Consumer, null, this.renderTheater)
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
					J.ob(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(He.g)("not_now", this.props.currentStream))
				}
				onOBSBannerLearnMoreClick() {
					J.ob(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(He.g)("learn_more", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onChatClick() {
					this.props.currentStream && this.props.sendEvent(Object(He.o)(this.props.currentStream, this.playbackStats))
				}
				handleFocusMessageInput() {
					J.U() || this.props.toggleIntroChatModal()
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
						setIntroFinishedStatus: n
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return n(!0), void this.setState({
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
					}, I.k), this.setState({
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
						[Be.s]: this.props.related,
						[Be.A]: this.props.timestamp
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
						visitStream: n
					} = this.props;
					e && (this.setState({
						hasLiveIntent: o === Xe.a.LIVE,
						videoCurrentTime: 0,
						videoTotalTime: 0
					}), n(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(He.G)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
				}
				setConsumePostTimeout() {
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(He.t)(this.props.currentStream)), b.a.telemetry.postConsumedThreshold)
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), I.n), this.setState({
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
					const n = !o || Object(Ue.b)(e.post.id) === o;
					s(this.getStreamLocation(e), n)
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
						video: n
					} = this;
					if (!n) return;
					const r = this.getOrCreateVideoSessionManager(n),
						{
							currentStream: a
						} = this.props,
						i = null == a ? void 0 : a.post.id,
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
			const fn = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: pn.a.closeButton,
					onClick: e,
					"aria-label": h.fbt._("close button", null, {
						hk: "2l5YIS"
					})
				}, n.a.createElement(ne.a, {
					className: pn.a.closeIcon
				})),
				Sn = (e, t) => (e && e.post.id) !== (t && t.post.id);
			gn.contextType = p.a;
			var On = vn(Object(pe.c)(gn)),
				wn = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Cn = s("./src/reddit/helpers/overlay/index.ts"),
				_n = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				En = s.n(_n);
			const {
				fbt: yn
			} = s("./node_modules/fbt/lib/FbtPublic.js"), kn = Object(l.a)((e, {
				match: {
					params: t
				}
			}) => t), xn = Object(l.a)((e, {
				location: {
					search: t
				}
			}) => Object(c.a)(t)), jn = Object(i.a)(kn, xn, (e, t) => {
				const s = t.get(Be.s),
					{
						subredditName: o
					} = e;
				return "home" === s || "r/popular" === s ? s : "popular" === o ? "r/popular" : o ? void 0 : "home"
			}), Rn = Object(i.a)(xn, e => {
				const t = e.get(Be.A);
				if (!t) return;
				const s = parseInt(t, 10);
				return isNaN(s) ? void 0 : s
			}), In = Object(i.c)({
				isEnabled: Ke.a,
				isIntroInProgress: ze.b,
				related: jn,
				timestamp: Rn
			}), Ln = Object(r.b)(In, (e, t) => ({
				onOpenLoginModal: () => e(Object(m.i)()),
				onStreamByIdRequested: t => e(Object(u.d)(t)),
				updateLocation: (t, {
					isOverlay: s,
					useReplace: o
				}) => {
					const n = o ? a.c : a.b,
						r = s ? Object(Cn.b)(t) : t;
					e(n(r))
				}
			}));
			class Nn extends n.a.Component {
				constructor(e) {
					super(e), this.renderPublicAccessNetwork = e => {
						const {
							isOverlay: t,
							location: s,
							match: o,
							related: r,
							timestamp: a
						} = this.props, {
							subredditName: i,
							partialPostId: c
						} = o.params;
						return n.a.createElement("div", {
							className: Object(d.a)(En.a.rpanContainer, {
								[En.a.overlay]: t,
								[En.a.rpanContainerExp]: e
							})
						}, n.a.createElement(p.b, null, n.a.createElement(On, {
							isOverlay: !!t,
							location: s,
							onNavigation: this.onNavigation,
							related: r,
							streamIdFromPath: c,
							subreddit: i && `r/${i}`,
							timestamp: c ? a : void 0
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
					return e ? n.a.createElement(f.a.Consumer, null, this.renderPublicAccessNetwork) : n.a.createElement(Pn, null)
				}
			}
			const Pn = () => {
				const e = Object(o.useContext)(f.a);
				return n.a.createElement("div", {
					className: Object(d.a)(En.a.rpanContainer, En.a.forbiddenScreen, {
						[En.a.rpanContainerExp]: e
					})
				}, n.a.createElement("h2", null, yn._("Not Found", null, {
					hk: "2ijDv5"
				})))
			};
			t.default = Ln(Object(pe.c)(Object(wn.b)(Nn)))
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
				return N
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "k", (function() {
				return M
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "a", (function() {
				return B
			})), s.d(t, "j", (function() {
				return V
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "e", (function() {
				return H
			})), s.d(t, "g", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				c = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				m = s.n(c)()(e => Object(n.a)(Object(o.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var u = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				S = Object(o.a)(f, e => e.ended),
				O = Object(o.a)(f, e => e.removed),
				w = Object(o.a)(p, S, O, (e, t, s) => {
					const o = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							n = D(o, a.a.ENDED) ? a.a.ENDED : o,
							r = s.stream.vod_accessible;
						return n === o && !0 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							n = D(o, a.a.ENDED) ? a.a.ENDED : o,
							r = s.stream.vod_accessible;
						return n === o && !1 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !1
								}
							}
						}
					}, o)
				}),
				C = (e, t) => {
					return w(e)[Object(r.g)(t)]
				},
				_ = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => m(t.listingName)(e, t), w, b, i.h, (e, t, s, o, n) => {
					const i = [];
					if (e) {
						const t = Object(r.g)(e);
						s[t] && i.push(t)
					}
					const d = i.concat(t),
						c = [...new Set(d)],
						l = new Set([...o, ...n]);
					return c.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== a.a.KILLED && t.stream.state !== a.a.PURGED
					})
				}),
				E = Object(o.a)((e, {
					count: t
				}) => t, w, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => _(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const o = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? o.slice(0, e) : o
				}),
				y = Object(o.a)(w, E, (e, t) => {
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
				}) => t, w, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: o
				}) => E(e, {
					listingName: t || o,
					streamIdFromPath: s
				}), h, (e, t, s, o) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = n.find(e => e.stream.state === a.a.IS_LIVE);
					if (r) return r.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (o.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				j = Object(n.a)(Object(o.a)(x, w, (e, t) => e ? t[e] : void 0)),
				R = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(r.g)(t) : void 0, x, b, i.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: o
				}) => E(e, {
					listingName: t || o,
					streamIdFromPath: s
				}), (e, t, s, o, n) => !e || s.includes(e) || o.includes(e) ? t || n[0] : e),
				I = Object(o.a)(v, g, k, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				L = Object(o.a)(v, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				N = Object(n.a)(Object(o.a)(R, w, (e, t) => e ? t[e] : void 0)),
				P = Object(n.a)(Object(o.a)(I, w, (e, t) => e ? t[e] : void 0)),
				M = Object(n.a)(Object(o.a)(L, w, (e, t) => e ? t[e] : void 0)),
				T = (Object(n.a)(Object(o.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, w, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(o.a)(R, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				A = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t ? C(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function D(e, t) {
				const s = {
					[a.a.NOT_STARTED]: 0,
					[a.a.PUBLISHED]: 1,
					[a.a.IS_LIVE]: 2,
					[a.a.DISCONNECTED]: 2,
					[a.a.ENDED]: 3,
					[a.a.KILLED]: 4,
					[a.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const F = Object(o.a)(R, h, (e, t) => e && t.timestamps[e] || 0);
			var B;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(B || (B = {}));
			const V = Object(o.a)(R, w, u.b, (e, t, s) => {
					if (s) return B.INTRO;
					const o = e && t[e];
					if (!o) return B.UNAVAILABLE;
					const n = o.stream.state;
					return n === a.a.IS_LIVE || n === a.a.DISCONNECTED ? B.LIVE : n === a.a.ENDED && o.stream.vod_accessible ? B.VOD : B.UNAVAILABLE
				}),
				U = Object(o.a)(N, V, u.b, d.b, d.o, (e, t, s, o, n) => s ? o : e ? t === B.LIVE || t === B.VOD ? e.stream.hls_url : n : void 0),
				H = Object(o.a)(N, V, F, (e, t, s) => e ? t === B.LIVE ? e.broadcast_time : t === B.VOD && s < e.broadcast_time ? s : 0 : 0),
				q = (e, t) => {
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
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(o.a)(a, r.n, (e, t) => t && !e.isIntroFinished),
				d = Object(o.a)(a, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => !!Object(r.b)(e) || Object(n.c)(e, {
				experimentEligibilitySelector: a.J,
				experimentName: o.k
			}) === o.f.Enabled
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: a.J,
				experimentName: n.Lb
			}), e => e === n.Vc)
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(n.if)(t)
				},
				d = Object(o.a)(i, r.d, (e, t) => e && !t)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PublicAccessNetwork.67185d6ad9f40e7d7e07.js.map