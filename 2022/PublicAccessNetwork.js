// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.85727193c8f658f9def3.js
// Retrieved at 3/2/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PublicAccessNetwork"], {
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					o = null,
					r = {
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

				function n(e) {
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
					s.metaKey || s.altKey || s.ctrlKey || (n(e.activeElement) && a(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), d())
				}), !0), d(), e.addEventListener("focus", (function(e) {
					var s, o, i;
					n(e.target) && (t || (s = e.target, o = s.type, "INPUT" === (i = s.tagName) && r[o] && !s.readOnly || "TEXTAREA" === i && !s.readOnly || s.isContentEditable)) && a(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					n(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(o), o = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const n = Object(r.e)(e),
					a = encodeURIComponent(`${t}${n}`);
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
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/constants.ts");
			const n = Object(o.a)(r.c),
				a = Object(o.a)(r.b),
				i = Object(o.a)(r.a)
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return S
			}));
			var o = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/categories/index.ts"),
				n = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
				a = s("./src/reddit/constants/categories.tsx"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/constants/experiments.ts");
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(o.a)({
				features: {
					categories: r.a
				}
			});
			const h = Object(n.a)(b.c),
				v = Object(n.a)(b.b),
				g = Object(n.a)(b.a),
				f = () => async (e, t, {
					apiContext: s
				}) => {
					const o = t(),
						r = Object(p.h)(o),
						n = Object(p.g)(o);
					if (r || n) return;
					e(h());
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
								const r = {
									attr: e.category_attr,
									color: e.category_color || a.a[o % a.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(m.wf)(e.category_name)
								};
								s.push(r.id), t[r.id] = r
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
				}, O = (Object(n.a)(b.g), Object(n.a)(b.f), Object(n.a)(b.e), Object(n.a)(b.d)), S = e => async (t, s) => {
					const o = Object(p.j)(s(), {
						id: e
					});
					t(O({
						categoryId: e,
						rank: o + 1
					})), Object(u.mb)(Object(p.d)(s()))
				}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return w
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "b", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
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
				O = s("./src/reddit/actions/comment/constants.ts");
			const S = Object(n.a)(O.n),
				w = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(S({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, s, {
					apiContext: r
				}) => {
					if (!Object(g.O)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const n = s().features.comments.models[e];
					if (!n) return;
					const a = n.isLocked ? m.l : m.e;
					t(Object(f.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: n.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(f.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, C = Object(n.a)(O.F), E = e => async (t, s, {
					apiContext: r
				}) => {
					const n = s(),
						a = n.features.comments.models[e],
						i = n.user.account ? n.user.account.displayText : null;
					a && i && (t(Object(f.i)({
						[e]: {
							isApproved: !0,
							approvedBy: i,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(f.i)({
						[e]: {
							isApproved: a.isApproved,
							approvedBy: null,
							bannedBy: a.bannedBy,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam,
							modNote: a.modNote,
							modReasonBy: a.modReasonBy,
							modRemovalReason: a.modRemovalReason,
							numReports: a.numReports || null
						}
					})), Object(d.d)())
				}, y = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const a = r(),
						i = a.features.comments.models[e],
						l = a.user.account ? a.user.account.displayText : null;
					i && l && (s(Object(f.i)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(n(), e, t)).ok ? s(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(f.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(d.d)())
				}, x = e => async (t, s, {
					apiContext: r
				}) => {
					const n = s().features.comments.models[e];
					if (!n) return;
					const a = n.ignoreReports ? m.k : m.d;
					t(Object(f.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: n.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(f.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, k = (e, t, s) => async (n, a, {
					gqlContext: i
				}) => {
					const d = Object(h.b)(a(), {
						commentId: e
					});
					if (!d) return;
					const l = s === r.dc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) n(Object(f.i)({
						[e]: {
							userReports: Object(p.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						n(Object(c.f)(e))
					}
				}, j = (e, t, s) => async (o, n, {
					apiContext: i,
					gqlContext: d
				}) => {
					const c = n(),
						l = c.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = c.postStickiedComments.data[u],
						b = r.g[t];
					let h;
					if (o(Object(f.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === r.G.ADMIN,
								isMod: t === r.G.MODERATOR,
								isStickied: !!s
							}
						})), s && p && p !== e && o(Object(f.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(v.a)(n())) {
						const o = Object(m.b)(d(), e, t),
							r = Object(m.c)(d(), e, !!s),
							n = [o];
						(s || !s && e === p) && n.push(r), h = {
							ok: (await Promise.all(n)).every(e => e.ok)
						}
					} else h = await Object(m.g)(i(), e, b, s || null);
					h.ok ? s && o(C({
						id: e,
						postId: u,
						commentsPageKey: Object(a.a)(u, null, {
							sort: r.u.CONFIDENCE,
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
				r = s("./src/lib/makeListingKey/index.ts"),
				n = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/OtherDiscussions.json"),
				d = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const c = Object(o.a)(n.a),
				l = Object(o.a)(n.b),
				m = Object(o.a)(n.c),
				u = (e, t) => async (s, o, {
					gqlContext: n
				}) => {
					const u = o(),
						p = Object(r.a)(e, null, {
							isOtherDiscussions: !0
						}),
						b = u.listings.postOrder.ids[p],
						h = !!u.listings.postOrder.api.error[p];
					if (b && !h) return;
					s(m({
						key: p
					}));
					const v = await ((e, t) => Object(a.a)(e, {
						...i,
						variables: t
					}))(n(), t);
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
				return bt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return ht
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return vt
			})), s.d(t, "commentsPageRequested", (function() {
				return gt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return ft
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Ot
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return St
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/reddit/actions/category/index.ts"),
				n = s("./src/reddit/actions/discoveryUnit.ts"),
				a = s("./src/reddit/actions/pages/subreddit.ts"),
				i = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				c = s("./src/reddit/actions/subredditSettings.ts"),
				l = s("./src/reddit/endpoints/governance/posts.ts"),
				m = s("./src/reddit/endpoints/page/commentsPage.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				p = s("./src/redditGQL/operations/CommentsPageExtra.json");
			var b = s("./src/reddit/endpoints/page/subredditPage.ts"),
				h = s("./src/reddit/endpoints/profile/info.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/lib/pageTitle/index.ts"),
				O = s("./src/reddit/actions/economics/helpers/async.ts"),
				S = s("./src/reddit/actions/externalAccount.ts"),
				w = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				_ = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				C = s("./src/reddit/actions/platform.ts"),
				E = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/actions/profile/index.ts"),
				x = s("./src/reddit/actions/subreddit.ts"),
				k = s("./src/reddit/actions/subreddit/questions.ts"),
				j = s("./src/reddit/actions/toaster.ts"),
				R = s("./src/reddit/constants/adEvents.ts"),
				I = s("./src/reddit/constants/graphql.ts"),
				L = s("./src/reddit/constants/parameters.ts"),
				N = s("./src/reddit/constants/posts.ts"),
				P = s("./src/reddit/helpers/commentList/index.ts"),
				M = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				T = s("./src/reddit/models/Comment/index.ts"),
				A = s("./src/reddit/models/Media/index.ts"),
				D = s("./src/reddit/models/Subreddit/index.ts"),
				F = s("./src/reddit/models/User/index.ts"),
				B = s("./src/reddit/selectors/category.ts"),
				V = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				U = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				H = s("./src/reddit/selectors/experiments/postSeo.ts"),
				q = s("./node_modules/reselect/es/index.js"),
				G = s("./src/reddit/constants/experiments.ts"),
				K = s("./src/reddit/helpers/chooseVariant/index.ts"),
				W = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				J = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				Q = s("./src/reddit/selectors/platform.ts"),
				X = s("./node_modules/fbt/lib/FbtPublic.js"),
				z = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Z = s("./src/reddit/selectors/user.ts");
			const Y = new Set([v.g.AntiEvilOps, v.g.AutomodFiltered, v.g.CommunityOps, v.g.ContentTakedown, v.g.CopyrightTakedown, v.g.Moderator, v.g.Reddit]),
				$ = new Set([v.g.Author, v.g.AuthorDeleted]),
				ee = Object(q.a)(W.a, e => {
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
				te = Object(q.a)(W.a, e => {
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
				se = Object(q.a)(Z.k, W.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				oe = Object(q.a)(Q.f, W.a, ee, te, J.a, se, J.b, (e, t, s, o, r, n, a) => {
					if (!e || !t || r) return !1;
					if (o) return !0;
					const i = n || a,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || i || d)
				});
			var re = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ne = s("./src/reddit/selectors/posts.ts"),
				ae = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/lib/makeActionCreator/index.ts"),
				de = s("./src/lib/makeCommentsPageKey/index.ts"),
				ce = s("./src/reddit/actions/ads/index.ts"),
				le = s("./src/reddit/helpers/canonicalUrls.ts"),
				me = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ue = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				pe = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				be = s("./src/lib/performanceTimings/index.tsx"),
				he = s("./src/reddit/actions/gold/powerups.ts"),
				ve = s("./src/lib/makeListingKey/index.ts"),
				ge = s("./src/reddit/actions/googleQASchema/constants.ts");
			const fe = Object(ie.a)(ge.b),
				Oe = Object(ie.a)(ge.a);
			var Se = s("./src/reddit/actions/linkedPosts/constants.ts");
			const we = Object(ie.a)(Se.a),
				_e = Object(ie.a)(Se.c),
				Ce = Object(ie.a)(Se.b);
			var Ee = s("./src/reddit/actions/otherDiscussions/index.ts"),
				ye = s("./src/reddit/actions/subreddit/constants.ts"),
				xe = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var ke = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: r
				}) => {
					try {
						t({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (n) {
						s(n)
					}
				},
				je = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Re = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Le = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: r
				}) => {
					try {
						const s = [],
							n = {},
							a = {};
						if (!r || !r.linked) return;
						const i = e(),
							d = i.posts && i.posts.models,
							c = Object(je.a)(o),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Re.a)(e);
								n[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (n[t.crosspost.id] = t.crosspost)
							}
							if (Object(v.n)(e)) {
								const {
									subreddit: t
								} = e;
								a[t.id] = Object(Ie.a)(t)
							}
						}
						t({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: n,
							postIds: s,
							subreddits: a
						})
					} catch (n) {
						s(n)
					}
				},
				Ne = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Pe = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Me = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Te = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: o,
					options: r,
					postId: n,
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
							c = Object(Pe.a)(d),
							l = Me(c),
							m = o.edges.reduce((e, t) => (t.node.id && t.node.id !== n && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: b
							} = r,
							h = e && n ? Object(je.a)(n, !0) : Object(ve.a)(b, g.W[p], {
								t: u
							});
						s({
							dist: o.dist,
							key: h,
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
			var Fe = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: r
				}) => {
					try {
						const s = [],
							n = {},
							a = {};
						if (!r || !r.nsfwLinked) return;
						const i = e(),
							d = i.posts && i.posts.models,
							c = Object(De.a)(o),
							l = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Re.a)(e);
								n[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (n[t.crosspost.id] = t.crosspost)
							}
							if (Object(v.n)(e)) {
								const {
									subreddit: t
								} = e;
								a[t.id] = Object(Ie.a)(t)
							}
						}
						t({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: n,
							postIds: s,
							subreddits: a
						})
					} catch (n) {
						s(n)
					}
				},
				Be = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ve = Object(ie.a)(Be.b),
				Ue = Object(ie.a)(Be.a);
			var He = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const qe = Object(ie.a)(He.b),
				Ge = Object(ie.a)(He.a),
				Ke = Object(ie.a)(ye.j),
				We = Object(ie.a)(ye.i),
				Je = (Object(ie.a)(ye.r), Object(ie.a)(ye.q), e => async (t, s, {
					gqlContext: o
				}) => {
					var r, n, a, i;
					const {
						includeNSFWListingBelowExperiment: d,
						includeListingBelowExperiment: c,
						includeOtherDiscussions: l,
						includePostFeed: m,
						includePostQASchemaEligibilityFlag: p,
						listingBelowExperimentVariant: b,
						postId: h,
						range: v,
						sort: f,
						subredditName: O
					} = e, S = Object(ve.a)(h, null, {
						isOtherDiscussions: !0
					}), w = s(), _ = Object(ne.z)(w, {
						listingKey: S
					}), C = l && (!_ || 0 === _.length), E = Object(ve.a)(O, g.W[f], {
						t: v
					}), y = Object(ne.z)(w, {
						listingKey: E
					}), x = m && (c || !y || 0 === y.length), k = c, j = d, R = Object(ne.G)(w, {
						postId: h
					}), I = !!R && !!R.media && (Object(A.K)(R.media) || Object(A.F)(R.media)) && !R.media.altText;
					if (!(C || x || k || j || I || p)) return;
					C && t(Object(Ee.d)({
						key: S
					}));
					const L = await ((e, t) => Object(u.a)(e, {
							...xe,
							variables: t
						}))(o(), e),
						N = L.body,
						P = Object(Ae.a)(b),
						M = k && !!(null === (a = null === (n = null === (r = N.data) || void 0 === r ? void 0 : r.post) || void 0 === n ? void 0 : n.linked) || void 0 === a ? void 0 : a.isEligible),
						T = k && (P || !M);
					p && (L.ok ? N.data && N.data.post && t(fe({
						postId: h,
						isEligibleForQASchema: null !== (i = N.data.post.isEligibleForQASchema) && void 0 !== i && i
					})) : t(Oe())), C && Object(Ne.a)({
						getState: s,
						onFailure: e => t(Object(Ee.b)(e)),
						onSuccess: e => t(Object(Ee.c)(e)),
						postId: h,
						response: L
					}), (x && !k || T) && (L.ok ? N.data && Te({
						getState: s,
						isLinkedPostsFallback: T,
						onFailure: e => t(We(e)),
						onSuccess: e => t(Ke(e)),
						options: e,
						postId: h,
						subreddit: N.data.subreddit
					}) : t(We(L.error))), k && M && !P && L.ok && N.data && Le({
						getState: s,
						onFailure: e => t(Ce(e)),
						onSuccess: e => t(_e(e)),
						postId: h,
						post: N.data.post
					}), j && L.ok && Fe({
						getState: s,
						onFailure: e => t(Ge(e)),
						onSuccess: e => t(qe(e)),
						postId: h,
						post: N.data.post
					}), I && L.ok && N.data && ke({
						getState: s,
						onFailure: e => t(Ue(e)),
						onSuccess: e => t(Ve(e)),
						postId: h,
						post: N.data.post
					}), k && t(we({
						postId: h,
						isEligibleForLinkedPosts: M
					}))
				}),
				Qe = e => {
					var t, s;
					const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = o && Object(v.t)(o),
						{
							sortToUse: n
						} = Object(M.a)(e, r);
					return (!n || n === g.u.CONFIDENCE) && Object(K.c)(e, {
						experimentEligibilitySelector: () => Object(Z.N)(e),
						experimentName: G.B
					}) === G.D.Enabled
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
				rt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				nt = s("./src/reddit/helpers/locales.ts"),
				at = s("./src/reddit/selectors/experiments/countrySites.ts"),
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
				bt = (e, t, s) => {
					const o = !e,
						r = Object(ne.G)(t, {
							postId: s
						}).belongsTo,
						n = Object(ae.K)(t, {
							identifier: r
						}),
						a = Object(ze.c)(t, {
							identifier: r
						}),
						i = !!Object(Ae.c)(t),
						d = Object(ot.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return i ? (c.listingBelow = a || o, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (a || o) && (!Object(D.h)(n) && !Object(Xe.d)(t, {
						postId: s
					}) && !!n || !Object(Q.i)(t) && Object(H.e)(t)), e && (c.postQASchema = Object(H.d)(t)), c
				},
				ht = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				vt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				gt = e => async (t, s) => {
					var n, a;
					const {
						partialPostId: c,
						partialCommentId: l
					} = e.params, {
						subredditName: m
					} = e.params || "", u = c ? Object(v.t)(c) : "", p = l && Object(T.h)(l), {
						path: b,
						queryParams: h
					} = e, O = Object(_.d)(b), {
						instanceId: w
					} = h, {
						hasSortParam: j,
						sortToUse: R
					} = Object(M.a)(s(), u), P = null === (a = null === (n = Object(Q.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === a ? void 0 : a.route.chunk, D = ["context", "depth", "limit", L.f].reduce((e, t) => {
						const s = parseInt(h[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: m,
						hasSortParam: j,
						instanceId: w,
						include_categories: !0
					});
					j && (D.sort = R), D.onOtherDiscussions = O, t(E.r(u)), await t(ft(u, p, D, R));
					const F = s().posts.models[u],
						V = Object(Z.O)(s());
					if (F && "subreddit" === F.belongsTo.type) {
						const e = F.belongsTo.id,
							o = Object(be.i)(() => t(Object(he.m)(e, {
								fullData: !0,
								includeIdentity: V
							})), {
								name: "subredditPowerupsRequested",
								page: P,
								isLoggedIn: V
							});
						await o;
						const r = s();
						if (!Object(Q.i)(r)) {
							Object(tt.a)(r) && t(Object(k.b)(e))
						}
						Object(U.b)(r, e) && await t(Object(d.b)(u))
					}
					if (F) {
						const n = ((e, t) => {
								const s = Object(ne.U)(e, {
										postId: t
									}),
									o = Object(ne.G)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), u),
							a = Object(ae.K)(s(), {
								identifier: F.belongsTo
							});
						if (a && (e => G.Le.Redirect === Object(K.b)(e, {
								experimentEligibilitySelector: oe,
								experimentName: G.Ee
							}))(s())) return void t(Object(o.c)(a.url));
						if ((F.media && F.media.type) === A.o.LIVEVIDEO) {
							const e = `/rpan${F.belongsTo.type===N.a.SUBREDDIT?a.url:"/"}${Object(v.u)(F.id)}`;
							return void t(Object(o.c)(e))
						}
						if (F.belongsTo.type !== N.a.SUBREDDIT || F.isSponsored) {
							if (F.belongsTo.type === N.a.PROFILE) {
								const e = Object(be.i)(() => t(y.d(a.name)), {
									name: "getProfileInfo",
									page: P,
									isLoggedIn: V
								});
								await e
							}
						} else {
							if (!!!Object(ae.R)(s(), {
									subredditId: F.belongsTo.id
								})) {
								const e = Object(be.i)(() => t(x.o(a.name)), {
									name: "getSubredditRules",
									page: P,
									isLoggedIn: V
								});
								await e
							}
						}
						const d = bt(!1, s(), u),
							c = O;
						if (ht(c, d)) {
							Object(me.e)(me.a.LinkedPosts);
							const e = Object(me.c)(me.a.LinkedPosts);
							Object(me.e)(me.a.NsfwLinkedPosts);
							const o = Object(me.c)(me.a.NsfwLinkedPosts),
								r = {
									adContext: {
										layout: I.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: u
									},
									range: g.hc.WEEK.toUpperCase(),
									sort: g.P.TOP,
									subredditName: a.name
								},
								n = {
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
							Object(be.i)(() => t(Je({
								...n,
								...r,
								...i,
								...l,
								...m,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: V,
								page: P
							});
							0
						}
						t(Object(S.p)()), t(C.m({
							title: n
						}));
						const l = s().posts.instances[u] ? e.queryParams.instanceId : F.postId;
						t(Object(i.b)(l)); {
							const e = Object(B.c)(s(), {
								subredditName: a.name
							});
							await Promise.all(e.map(e => t(r.b(e))))
						}
					} else t(C.m({
						title: f.e()
					}));
					const {
						routePrefix: H
					} = e.params;
					N.b[H] === N.a.PROFILE ? Object(le.d)(s(), t, e) : Object(le.b)(s(), t, e)
				}, ft = (e, t, s, o) => async (r, i, d) => {
					var c, v;
					const f = i(),
						S = Object(de.a)(e, t, s),
						{
							subredditName: _
						} = s,
						y = f.pages.comments.keyToHeadCommentId.hasOwnProperty(S),
						x = f.pages.comments.api.fullyLoaded[S],
						k = f.pages.comments.api.error[S],
						I = f.pages.comments.api.pending[S],
						L = !Object(Z.N)(f),
						N = Object(Z.k)(f),
						M = o === g.u.CHAT,
						T = !!f.platform.lastPage;
					if ((I || y && !k) && !(M && T)) {
						if (y && !f.sidebarPromotedPosts.firstFetch) {
							const e = Object(Q.i)(f) ? pe.a.COMMENTS_OVERLAY : pe.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(ce.b)(e))
							})
						}
						return void(x || r(St(e, t, s)))
					}
					r(n.g());
					const A = f.user.prefs.commentMode;
					r(lt({
						key: S,
						postId: e,
						commentMode: A
					}));
					const D = {
						...s,
						...M ? {
							sort: g.u.LIVE
						} : L ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(ne.G)(i(), {
							postId: e
						});
						t && t.numComments && t.numComments > ct && (D.truncate = dt)
					}
					const B = null === (v = null === (c = Object(Q.b)(f)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === v ? void 0 : v.route.chunk,
						U = Object(be.i)(() => Object(m.a)(d.apiContext(), e, t, D, Object(V.a)(i()), Qe(i())), {
							name: "fetchCommentsPage",
							isLoggedIn: !L,
							page: B
						}),
						H = !L && N && Object(be.i)(() => Object(h.d)(d.gqlContext(), Object(F.e)(N)), {
							name: "fetchProfileKarma",
							isLoggedIn: !L,
							page: B
						}) || null,
						q = Object(be.i)(() => (async function(e, t) {
							return Object(u.a)(e, {
								...p,
								variables: t
							})
						})(d.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !L,
							page: B
						}),
						[G, K, W] = await Promise.all([U, H, q]);
					let J;
					if (r(Object(C.n)(G.status)), G.ok) {
						const t = Object.keys(G.body.posts).filter(e => !!G.body.posts[e].isMeta),
							s = G.body.posts[e];
						if (t.length) {
							const e = Object(be.i)(() => Object(l.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: B,
									isLoggedIn: !L
								}),
								o = await e;
							o.ok && (J = o.body)
						}
						if (K && K.ok) {
							const {
								data: e
							} = K.body, t = {
								karma: {
									...h.a
								}
							};
							if (Object(h.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							G.body && G.body.account && Object.assign(G.body.account, t)
						}
						if (W && W.ok) {
							const {
								data: e
							} = W.body;
							if (e.postInfoById && "SubredditPost" === e.postInfoById.__typename) {
								const t = e.postInfoById.subreddit.detectedLanguage;
								Object(it.d)(f) && t && Object(at.c)(f) && await Object(nt.a)(t, r)
							}
						}
						const o = Object(P.a)(G.body, e, f);
						r(mt({
							key: S,
							postId: e,
							meta: f.meta,
							governance: J,
							shouldCollapse: o,
							...G.body
						}))
					} {
						const o = Object(ne.G)(i(), {
							postId: e
						});
						o && G.body.comments && Object.keys(G.body.comments).length < o.numComments ? r(St(e, t, s)) : G.ok && r(Ot({
							key: S
						}));
						const n = Object(Q.i)(f) ? pe.a.COMMENTS_OVERLAY : pe.a.COMMENTS;
						r(Object(ce.b)(n))
					}
					if (G.ok) {
						r(j.g(S));
						const t = Object(ne.G)(i(), {
								postId: e
							}),
							s = Object.keys(G.body.comments);
						if (r(E.z(t, R.a.CommentsView)), Object(rt.h)(i(), {
								subredditId: t.belongsTo.id
							}) && r(Object(w.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && G.body.comments) {
							const e = Object(be.i)(() => r(Object(O.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: B,
								isLoggedIn: !L
							});
							await e
						}
					} else {
						let e;
						_ && (r(Object(a.subredditPending)({
							key: S
						})), e = await Object(ue.a)("subreddit", () => Object(b.a)(d.apiContext(), _, {})), r(Object(C.n)(e.status)), r(Object(a.handleSubredditPageApiError)(e, _))), r(ut({
							error: G.error,
							key: S,
							...e ? e.body : G.body
						}))
					}
				}, Ot = Object(ie.a)(Ze.g), St = (e, t, s) => async (o, r, n) => {
					const a = Object(de.a)(e, t, s),
						i = r(),
						d = Object(Z.O)(i),
						l = Object(Z.k)(i),
						u = Object(m.a)(n.apiContext(), e, t, s, Object(V.a)(i), Qe(i)),
						p = d && l && Object(h.d)(n.gqlContext(), Object(F.e)(l)) || null,
						[b, v] = await Promise.all([u, p]);
					if (o(Object(C.n)(b.status)), b.ok) {
						if (v && v.ok) {
							const {
								data: e
							} = v.body, t = {
								karma: {
									...h.a
								}
							};
							if (Object(h.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							b.body && b.body.account && Object.assign(b.body.account, t)
						}
						const t = Object(P.a)(b.body, e, i);
						o(mt({
							key: a,
							postId: e,
							meta: i.meta,
							shouldCollapse: t,
							...b.body
						})), o(Ot({
							key: a
						}));
						const s = r().posts.models[e],
							n = s && Object(ne.U)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && n && Object(re.a)(i, {
							subredditId: n.id
						}) && o(Object(c.h)(n.name, n.id)), s && "subreddit" === s.belongsTo.type && b.body.comments && await o(Object(O.a)({
							commentIds: Object.keys(b.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(ut({
						error: b.error,
						key: a,
						...b.body
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/page.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "publicAccessNetworkRequested", (function() {
				return i
			}));
			var o = s("./src/lib/pageTitle/index.ts"),
				r = (s("./src/reddit/actions/pages/subreddit.ts"), s("./src/reddit/actions/platform.ts")),
				n = (s("./src/reddit/actions/publicAccessNetwork/streams.ts"), s("./src/reddit/actions/users.ts")),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => async (e, t) => {
				const s = t(),
					i = o.k();
				e(r.m({
					title: i
				})), Object(a.O)(s) || await e(n.t())
			}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "f", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/query-string/index.js"),
				r = s.n(o),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const m = new Set(["home", "r/popular"]),
				u = e => {
					const t = location && location.search || "",
						s = r.a.parse(t);
					m.has(e) && (s.related = e);
					const o = r.a.stringify(s);
					return o ? `?${o}` : ""
				},
				p = Object(n.a)(a.N),
				b = Object(n.a)(a.y),
				h = Object(n.a)(a.O),
				v = Object(n.a)(a.z),
				g = Object(n.a)(a.M),
				f = Object(n.a)(a.L),
				O = Object(n.a)(a.t),
				S = Object(n.a)(a.u),
				w = e => async (t, s, {
					gqlContext: o
				}) => {
					const r = Object(d.g)(e),
						n = s();
					if (Object(c.d)(n, r)) return;
					t(p(r));
					const a = await Object(i.e)(o(), r),
						l = Date.now();
					if (a.ok && a.body && a.body.data) {
						const e = a.body.data;
						t(b({
							model: e,
							utcTimeStamp: l
						}))
					} else t(x({
						streamId: r,
						error: a.error,
						utcTimeStamp: l
					}))
				}, _ = (e, t) => async (s, o) => s(C(e, t)), C = (e, t) => async (s, o, {
					gqlContext: r
				}) => {
					const n = o();
					if (Object(c.f)(n)) return;
					s(h());
					const a = await Object(i.f)(r(), e, t),
						d = Date.now();
					if (a.ok && a.body && a.body.data) {
						const t = a.body.data;
						s(v({
							listingName: e,
							models: t,
							utcTimeStamp: d
						}))
					} else s(k({
						error: a.error,
						utcTimeStamp: d
					}))
				}, E = (e, t) => async (s, o) => s(y(e, t)), y = (e, t) => async (s, o, {
					gqlContext: r
				}) => {
					const n = o();
					if (Object(c.f)(n)) return;
					s(h());
					const a = Date.now(),
						d = e.replace("r/", ""),
						m = Object(l.D)(n, d),
						u = await Object(i.b)(r(), {
							subredditId: m,
							options: t
						}),
						p = u.body;
					u.ok && p && p.data || s(k({
						error: u.error,
						utcTimeStamp: a
					}));
					const b = p.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(i.e)(e, t),
								o = Date.now(),
								r = s.body;
							return r && r.data ? r.data : void x({
								streamId: t,
								error: s.error,
								utcTimeStamp: o
							})
						})(r(), e.node.id)),
						g = (await Promise.all(b)).filter(e => void 0 !== typeof e);
					s(v({
						listingName: e,
						models: g,
						utcTimeStamp: a
					}))
				}, x = e => async t => {
					t(g(e))
				}, k = e => async t => {
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
				r = s.n(o),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(a.B),
				d = e => async t => {
					t(i(e))
				}, c = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(i({
						correlationId: r()()
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
				return re
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ne
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
				return Oe
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Se
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return we
			})), s.d(t, "submitRemovalReason", (function() {
				return _e
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./node_modules/redux/es/redux.js");
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
				g = Object(n.c)({
					error: h,
					pending: v
				});
			const f = {};
			var O = (e = f, t) => {
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
							...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const S = {};
			var w = (e = S, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: s,
							response: o
						} = t.payload, {
							order: r
						} = o;
						return {
							...e,
							[s]: r
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
						} = t.payload, r = [...e[s]].filter(e => e !== o);
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var _ = (e = null, t) => {
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
				C = Object(n.c)({
					api: g,
					models: O,
					reasonOrder: w,
					removedItemIds: _
				}),
				E = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				x = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
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
				G = s("./src/reddit/helpers/routeKey/index.ts"),
				K = s("./src/reddit/models/ModQueue/index.ts"),
				W = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/RemovalReason/index.ts"),
				Q = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				z = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: C
				}
			});
			const Z = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(y.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: o
				}) => {
					const r = s().subreddits.models[e].name;
					t(Z());
					const n = await ((e, t) => Object(A.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.jb.GET
					}))(o(), r);
					n.ok ? t(Y({
						subredditId: e,
						response: n.body
					})) : t($(n.error))
				}, te = Object(y.a)(a), se = Object(y.a)(i), oe = Object(y.a)(d), re = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const a = r().subreddits.models[e].name;
					s(te());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.jb.POST,
						data: s
					}))(n(), a, t);
					if (i.ok) {
						const {
							id: r
						} = i.body, n = {
							...t,
							id: r
						};
						s(se({
							subredditId: e,
							reason: n
						})), s(Object(M.f)({
							kind: Q.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(oe(i.error))
				}, ne = Object(y.a)(c), ae = Object(y.a)(l), ie = Object(y.a)(m), de = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const a = r().subreddits.models[e].name;
					s(ne());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: E.jb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(n(), a, t);
					i.ok ? (s(ae({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: Q.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(i.error))
				}, ce = Object(y.a)(u), le = Object(y.a)(p), me = Object(y.a)(b), ue = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const a = r().subreddits.models[e].name;
					s(ce());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: E.jb.DELETE
					}))(n(), a, t);
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
					apiContext: r
				}) => {
					const n = o();
					n.features.removalReasons.reasonOrder[e] && n.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(N.i)(T.a.ADD_REMOVAL_REASON))
				}, he = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), fe = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Se = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), we = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), _e = (e, t, s, o, r) => async (n, a, {
					apiContext: i
				}) => {
					const d = a(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(H.a)(l) ? J.e.Post : J.e.Comment,
						u = m === J.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === J.e.Post ? P.S : R.i;
					if (!u || !c) return !1;
					n(he()), n(p({
						[l]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const b = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						h = await V(i(), b);
					if (h.ok) {
						if (n(ve()), t) {
							n(fe());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await U(i(), Object(J.h)(r, m), m);
							if (a.ok) {
								if (o === J.f.Public) {
									if (n(Se()), a.body) {
										const e = Object(q.a)(a.body, c),
											t = {
												comment: e,
												parentId: l
											},
											s = Object(z.f)(d),
											o = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let r = s && o && Object(G.a)(o, d, d.posts.models[e.postId]);
										if (r || (r = Object(x.a)(e.postId, null, {
												sort: E.v,
												hasSortParam: !0
											})), m === J.e.Post) {
											const s = Object(k.a)(W.c.replyToPost, l);
											n(Object(I.o)({
												...t,
												headCommentId: Object(X.w)(d, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const o = d.postStickiedComments.data[l];
											n(Object(L.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), o && o !== e.id && n(Object(R.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (m === J.e.Comment) {
											const e = Object(k.a)(W.c.replyToComment, u.id),
												s = Object(X.j)(d, {
													commentId: l,
													commentsPageKey: r
												});
											n(Object(I.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else n(Oe());
								return !0
							}
							return n(we(a.error)), !1
						}
					} else n(ge(h.error)), n(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, s, r, n) => async (a, i, {
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
							modNote: n,
							reasonId: t ? t.id : null
						},
						p = await V(d(), u);
					if (p.ok) {
						const o = {
							ids: e,
							operation: K.a.RemovalReason,
							username: l,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (a(Object(j.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								n = await U(d(), Object(J.h)(o, J.e.Bulk), J.e.Bulk);
							n.ok ? (a(Oe()), a(m)) : a(we(n.error))
						} else a(m)
					} else a(ge(p.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/loadableAction/index.ts");
			const r = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/shortcuts/constants.ts");
			const n = Object(o.a)(r.a),
				a = Object(o.a)(r.b)
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(a.b, {
				className: Object(n.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
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
			}) => r.a.createElement("div", {
				className: Object(n.a)(e, u.a.Wrapper, {
					[u.a.LiveStreamingWrapper]: t
				})
			}, r.a.createElement("span", {
				className: Object(n.a)(u.a.Copy, {
					[u.a.LiveStreamingCopy]: t
				})
			}, p._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), r.a.createElement("div", {
				className: u.a.CTAButtons
			}, r.a.createElement(c.t, {
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
			})), r.a.createElement(c.t, {
				className: Object(n.a)(u.a.SignupLink, {
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
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
				v = Object(n.b)(h);
			t.a = i.a.wrapped(v(({
				account: e,
				className: t,
				height: s,
				icon: o,
				isLivestreaming: n,
				isNSFW: a,
				trash: i,
				userId: p,
				width: h
			}) => {
				const v = n ? 36 : 20,
					g = p || `${null==e?void 0:e.id}`,
					f = {
						height: s || v,
						width: h || v,
						minWidth: h || v
					};
				if (i) return r.a.createElement("div", {
					className: t,
					style: f
				}, r.a.createElement(u.a, {
					className: b.a.TrashIcon
				}));
				const O = e && e.id === p ? e.accountIcon : a ? l.a : null != o ? o : void 0;
				return Object(m.b)(O) ? r.a.createElement("div", {
					className: t,
					style: f
				}, r.a.createElement(c.a, {
					headshot: O
				})) : r.a.createElement("div", {
					className: t,
					style: f
				}, r.a.createElement(d.a, {
					userId: g,
					defaultImage: O
				}))
			}), "ChatIcon", b.a)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(o.a)({
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
			t.a = r
		},
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				O = s.n(f);
			class S extends r.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: o
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(O.a.container, e, {
							[O.a.isAnimated]: o
						})
					}, n.a.createElement(g.a, {
						className: O.a.gildIcon
					}), o && s && n.a.createElement("div", {
						className: O.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), t ? n.a.createElement("div", {
						className: O.a.count
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
			}))(S);
			const _ = Object(c.b)(() => Object(l.a)(e => e, (e, {
					postId: t
				}) => Object(u.g)(e, {
					commentsPageKey: Object(m.a)(t)
				}), b.G, (e, {
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
				C = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class E extends r.Component {
				constructor(e) {
					super(e), this.state = C(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? C(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: o,
						className: r,
						isFullyLoaded: a
					} = this.props;
					if (!a) return n.a.createElement(w, {
						className: r,
						count: 0
					});
					const i = Math.max(s, e + o.length - t.length),
						d = o.length - 1,
						c = o[d],
						l = o.length !== t.length;
					return n.a.createElement(w, {
						awardId: c,
						className: r,
						count: i,
						isAnimated: l,
						key: d
					})
				}
			}
			var y = _(E),
				x = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				k = s.n(x);
			t.a = ({
				postId: e,
				showSubmitInsideTextArea: t,
				isLivestreaming: r,
				handleGiveAward: c,
				sendEvent: l
			}) => {
				return n.a.createElement(i.e, {
					className: Object(a.a)(k.a.ChatButton, {
						[k.a.LivestreamingChatButton]: r,
						[k.a.leftPad]: !t
					}),
					"aria-label": o.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async t => {
						t.stopPropagation();
						const o = Object(d.e)(d.a.GildingFlow, !0);
						c(o);
						const {
							clickGildEvent: n,
							clickRpanGiveAward: a
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						l((r ? a : n)(e))
					}
				}, n.a.createElement(y, {
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
				r = s.n(o),
				n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = a.a.div("LoaderWrapper", c.a),
				m = a.a.div("Icon", c.a),
				u = a.a.div("Byline", c.a),
				p = Object(n.a)({
					ErrorComponent: () => r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(u, null))
				});
			t.a = e => r.a.createElement(p, e)
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
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(a.a)(e => n.a.createElement(i.e, null, n.a.createElement(i.i, null, n.a.createElement(c.a, null, n.a.createElement(i.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), n.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, n.a.createElement(i.b, null)))), n.a.createElement(i.l, null, n.a.createElement(i.p, {
				className: m.a.ModalText
			}, e.modalText)), n.a.createElement(i.g, null, !e.hideCancelButton && n.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), n.a.createElement(i.u, {
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
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				O = Object(m.a)(f),
				S = c.a.button("MenuButton", g.a),
				w = c.a.wrapped(p.b, "DropdownRow", g.a),
				_ = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(h.b)(t)(e)
				}),
				C = Object(a.b)(_, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => n.a.createElement(S, {
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
			}, e.icon ? e.icon : n.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), n.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
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
				return r
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = "rpan-download-obs-modal",
				n = Object(o.a)({
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
			t.b = n
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
				return r
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				n = Object(o.a)({
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
			t.b = n
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
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				v = e => n.a.createElement(p, null, n.a.createElement(b, null, e.dropdownLabel), e.selectedReason && n.a.createElement(h, null, e.selectedReason)),
				g = a.a.wrapped(i.a, "Dropdown", u.a),
				f = a.a.wrapped(c.b, "DropdownTriangle", u.a),
				O = a.a.wrapped(d.b, "DropdownRow", u.a),
				S = a.a.button("DropdownContainer", u.a);
			t.a = e => n.a.createElement(S, {
				onClick: e.onToggleDropdown
			}, n.a.createElement(v, {
				dropdownLabel: e.isLoading ? o.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : o.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), n.a.createElement(f, null), e.isDropdownOpen && n.a.createElement(g, {
				isOverlay: !0
			}, n.a.createElement(O, {
				displayText: o.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => n.a.createElement(O, {
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
				return K
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return W
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
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
				O = s("./src/reddit/models/RemovalReason/index.ts"),
				S = s("./src/reddit/selectors/removalReasons.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				E = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				y = s.n(E);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				switch (e) {
					case O.f.Private:
						return "private_subreddit";
					case O.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, j = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: O.f.Public,
				selectedReason: null
			}, R = e => ({
				submitBulkRemovalReason: (t, s, o, r, n) => e(Object(c.submitBulkRemovalReason)(t, s, o, r, n)),
				submitRemovalReason: (t, s, o, r, n) => e(Object(c.submitRemovalReason)(t, s, o, r, n))
			}), I = Object(a.c)({
				currentUserName: e => {
					const t = Object(_.k)(e);
					if (t) return t.displayText
				},
				isLoading: S.a,
				removalReasons: S.c,
				subredditName: (e, {
					subredditId: t
				}) => Object(w.S)(e, {
					subredditId: t
				}).name
			}), L = Object(n.b)(I, R), N = d.a.wrapped(l.a, "CharacterCountdown", y.a), P = d.a.div("EmptyState", y.a), M = d.a.wrapped(m.o, "ModNoteDescription", y.a), T = d.a.wrapped(u.l, "PrimaryButton", y.a), A = d.a.wrapped(h.a, "RadioOption", y.a), D = d.a.span("BoldText", y.a), F = d.a.wrapped(m.t, "ModNoteInput", y.a), B = d.a.wrapped(m.t, "MessageInput", y.a), V = d.a.wrapped(g.a, "Info", y.a), U = d.a.div("SmallInfoText", y.a), H = d.a.div("FormOptionsContainer", y.a), q = d.a.wrapped(m.g, "ModalFooter", y.a), G = d.a.div("FooterRow", y.a), K = d.a.wrapped(G, "ButtonRow", y.a);
			class W extends r.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${k(e)}`)()
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
					}, this.canSave = () => !(this.state.message.length > O.a || this.state.modNote.length > O.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === O.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${k(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== O.e.Bulk && s.push(r.a.createElement(A, {
							key: O.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: O.f.Public
						}, r.a.createElement("div", null, t.removalContextType === O.e.Post ? x._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : x._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(r.a.createElement(A, {
							key: O.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: O.f.Private
						}, r.a.createElement("div", null, x._("Private: send a Modmail from {subredditName} to the user", [x._param("subredditName", r.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(r.a.createElement(A, {
							key: O.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: O.f.PrivateExposed
						}, r.a.createElement("div", null, x._("Private: send a Modmail from {currentUserName} to the user", [x._param("currentUserName", r.a.createElement(D, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...j,
						removalContextType: Object(O.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(m.e, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && r.a.createElement(m.i, null, r.a.createElement(f.a, null, r.a.createElement(m.q, null, x._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && x._("({number of items} posts/comments)", [x._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), r.a.createElement(v.a, {
						onClick: this.onCancel
					}, r.a.createElement(m.b, null)))), r.a.createElement(m.l, null, e.isLoading || e.removalReasons.length > 0 ? r.a.createElement(C.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : r.a.createElement(P, null, x._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), r.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, r.a.createElement(u.r, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, x._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && r.a.createElement(H, null, r.a.createElement(m.h, null, r.a.createElement(b.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), r.a.createElement(B, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), r.a.createElement(N, {
						maxChars: O.a,
						text: t.message.trim()
					}), r.a.createElement(U, null, t.removalType !== O.f.Public && r.a.createElement(r.a.Fragment, null, r.a.createElement(V, null), x._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), r.a.createElement(q, null, r.a.createElement(G, null, r.a.createElement(M, null, x._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), r.a.createElement(G, null, r.a.createElement(F, {
						placeholder: x._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), r.a.createElement(G, null, r.a.createElement(N, {
						maxChars: O.b,
						text: t.modNote.trim()
					})), r.a.createElement(K, null, r.a.createElement(u.o, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, x._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(T, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, x._("Submit", null, {
						hk: "4aU3dh"
					})))))
				}
			}
			t.default = Object(i.a)(L(W))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: r.a.overlayReportFlow
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
				r = s("./src/reddit/constants/colors.ts");
			const n = {
					backgroundColor: r.a.overlayReportFlow
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
				return O
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "j", (function() {
				return w
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				n = s.n(r);
			const a = o.a.section("FormPage", n.a),
				i = o.a.h1("HomePageTitle", n.a),
				d = o.a.button("HomePageBreadcrumb", n.a),
				c = o.a.div("HomePageGroup", n.a),
				l = o.a.h1("FormPageTitle", n.a),
				m = o.a.div("FormPageSection", n.a),
				u = o.a.div("FormGroup", n.a),
				p = o.a.h2("FormGroupTitle", n.a),
				b = o.a.div("FormElement", n.a),
				h = o.a.div("FormGroupDescription", n.a),
				v = o.a.div("FormItem", n.a),
				g = o.a.h3("FormElementTitle", n.a),
				f = o.a.div("FormElementDescription", n.a),
				O = o.a.div("FormElementError", n.a),
				S = o.a.div("FormElementSubGroup", n.a),
				w = o.a.li("FormListItem", n.a)
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
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
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
				r = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
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
					b = Object(o.a)(c, null, {
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
							profiles: h,
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
									const s = Object(n.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: o
									} = e;
									if (o && o.type === d.a.Post && o.postInfo) {
										const e = Object(n.f)(o.postInfo);
										t.posts[e.id] = e
									}
									return Object(d.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(a.a)(e.profile)) : Object(d.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(i.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(r.a)(e.subreddit))), s.id
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
							key: b,
							meta: p.meta,
							postFlair: o,
							postId: c,
							postIds: l,
							posts: m,
							profiles: h,
							subreddits: v
						})
					}
				} else s({
					count: 0,
					key: b,
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
				return O
			})), s.d(t, "x", (function() {
				return S
			})), s.d(t, "r", (function() {
				return w
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "o", (function() {
				return E
			})), s.d(t, "z", (function() {
				return y
			})), s.d(t, "s", (function() {
				return x
			})), s.d(t, "y", (function() {
				return k
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
			var o, r = s("./src/reddit/constants/chat.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(o || (o = {}));
			const i = (e, t) => {
					if (t) {
						const s = a.C(e, t.post.id),
							o = a.J(e, t.post.id),
							r = a.jb(e);
						if (t.post.authorInfo && o && (o.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const o = Object(n.j)(e, {
								streamIdFromPath: t.post.id
							});
							o === n.a.LIVE ? s.type = "stream_live" : o === n.a.VOD ? s.type = "stream_vod" : o === n.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: o,
							media: s,
							subreddit: r
						}
					}
					return {
						subreddit: a.jb(e)
					}
				},
				d = (e, t, s) => {
					if (!t || !s) return;
					const o = Object(n.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || s.chatState === r.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: o === n.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: a ? r.a.None : r.a.Compact,
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
				f = (e, t, s, o) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(r, t, s),
					...c(r),
					...i(r, t),
					actionInfo: a.d(r, {
						referralId: o
					})
				}),
				O = (e, t, s) => o => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(o, t, s),
					...c(o),
					...i(o, t)
				}),
				S = e => t => ({
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
				_ = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				C = (e, t) => s => ({
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
					const s = Object(n.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, s)
					}
				},
				x = (e, t, s) => o => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: d(o, t, s),
					...i(o, t)
				}),
				k = (e, t) => s => ({
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
					profile: a.S(t),
					screen: a.bb(t),
					...i(t, e)
				}),
				R = e => t => {
					const s = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.S(t),
						screen: a.bb(t),
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
				return n
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const n = () => e => ({
				...Object(r.o)(e),
				source: "post",
				action: o.c.CLICK,
				noun: "share_chat",
				subreddit: Object(r.jb)(e)
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(n.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(n.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("share", e.isFilled), d.a.shareIcon, e.className)
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
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
			}) => r.a.createElement("svg", d({
				className: Object(n.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Pagination/back.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
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
				return n
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
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
				return r
			})), s.d(t, "d", (function() {
				return n
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
			const r = 50,
				n = 50,
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
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
				O = s("./src/higherOrderComponents/withMux/index.tsx"),
				S = s("./src/lib/addQueryParams/index.ts");
			var w = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				_ = s("./src/lib/focusVisible/index.js"),
				C = s("./src/lib/VideoSession/util.ts"),
				E = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				y = s("./src/reddit/actions/chat/toggle.ts"),
				x = s("./src/reddit/actions/media.ts"),
				k = s("./src/reddit/actions/modal.ts"),
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
				G = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				K = s("./src/reddit/controls/Button/index.tsx"),
				W = s("./src/reddit/controls/TextButton/index.tsx"),
				J = s("./src/reddit/helpers/localStorage/index.ts"),
				Q = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				X = s("./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less"),
				z = s.n(X);
			const Z = q.a.div("Image", z.a),
				Y = q.a.wrapped(G.g, "ModalFooter", z.a),
				$ = q.a.wrapped(G.i, "ModalHeader", z.a),
				ee = q.a.wrapped(G.l, "ModalMain", z.a);
			var te = Object(H.a)(({
					toggleModal: e
				}) => {
					const t = () => {
						J.Tb(), e()
					};
					return r.a.createElement(G.e, null, r.a.createElement($, null, r.a.createElement(Q.a, null, r.a.createElement("div", null, r.a.createElement("div", {
						className: z.a.Title
					}, h.fbt._("Get ready to chat!", null, {
						hk: "1lebCx"
					})), r.a.createElement(G.p, null, h.fbt._("Before jumping in, keep these tips in mind.", null, {
						hk: "3evsT7"
					}))), r.a.createElement(W.a, {
						onClick: t
					}, r.a.createElement(G.b, null)))), r.a.createElement(ee, null, r.a.createElement("span", null, r.a.createElement("span", null, r.a.createElement("div", {
						className: z.a.SubTitle
					}, h.fbt._("Remember the human", null, {
						hk: "3oHyEM"
					})), r.a.createElement(G.o, null, h.fbt._("We're all (internet) friends here, so enjoy chatting and remember that rules still apply.", null, {
						hk: "3df1qF"
					}))), r.a.createElement(Z, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/heart-rainbow.png")`
						}
					})), r.a.createElement("span", null, r.a.createElement("span", null, r.a.createElement("div", {
						className: z.a.SubTitle
					}, h.fbt._("Look out for each other", null, {
						hk: "hrE04"
					})), r.a.createElement(G.o, null, h.fbt._("If you see any harrassment or abuse, report it by pressing and holding on the message.", null, {
						hk: "12gD31"
					}))), r.a.createElement(Z, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_beagle.png")`
						}
					})), r.a.createElement("span", null, r.a.createElement("span", null, r.a.createElement("div", {
						className: z.a.SubTitle
					}, h.fbt._("Have fun!", null, {
						hk: "20HtGT"
					})), r.a.createElement(G.o, null, h.fbt._("Chat, lol, debate, discuss human nature or quantum physics... it's all up to you.", null, {
						hk: "3Aj4Z7"
					}))), r.a.createElement(Z, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_celebrate.png")`
						}
					}))), r.a.createElement(Y, {
						className: z.a.ModalFooter
					}, r.a.createElement(K.l, {
						onClick: t,
						className: z.a.Button,
						"data-redditstyle": !0
					}, h.fbt._("Start Chatting", null, {
						hk: "3n2GtA"
					}))))
				}),
				se = s("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				oe = s.n(se),
				re = s("./src/reddit/icons/svgs/Close/index.tsx"),
				ne = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less"),
				ae = s.n(ne);
			var ie = ({
					onClickLearnMore: e,
					onClickDismiss: t,
					isDark: s = !1
				}) => r.a.createElement("div", {
					className: Object(d.a)(ae.a.banner, {
						[ae.a.dark]: s
					})
				}, r.a.createElement("div", null, h.fbt._("{=Download the RPAN studio} desktop application to broadcast live from your computer.", [h.fbt._param("=Download the RPAN studio", r.a.createElement("span", {
					className: oe.a.strongTextFont
				}, h.fbt._("Download the RPAN studio", null, {
					hk: "1rcEDr"
				})))], {
					hk: "ODJOz"
				})), r.a.createElement(K.t, {
					className: ae.a.bannerButton,
					kind: K.b.Button,
					priority: K.c.Primary,
					onClick: e,
					"data-redditstyle": !0
				}, h.fbt._("Learn more", null, {
					hk: "1Ri9Pi"
				})), r.a.createElement(re.a, {
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
				Oe = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				Se = s("./src/reddit/controls/InternalLink/index.tsx"),
				we = s("./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less"),
				_e = s.n(we);
			const {
				fbt: Ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = Object(n.b)(fe.selector, fe.dispatcher), ye = q.a.wrapped(G.g, "EndBroadcastModalFooter", _e.a), xe = q.a.wrapped(G.t, "EndBroadcastMessageInput", _e.a);
			class ke extends fe.AddRemovalReasonModal {
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.isLoading || e.removalReasons.length > 0;
					return r.a.createElement(G.e, {
						onClick: this.closeDropdown
					}, s && r.a.createElement(G.i, null, r.a.createElement(Q.a, null, r.a.createElement(G.q, null, Ce._("Remove broadcast", null, {
						hk: "1JfCvD"
					})), r.a.createElement(W.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, r.a.createElement(G.b, null)))), r.a.createElement(G.l, null, s ? r.a.createElement(Oe.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : r.a.createElement(fe.EmptyState, null, Ce._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), r.a.createElement(Se.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, r.a.createElement(K.r, {
						onClick: e.toggleRemovalReasonModal,
						"data-redditstyle": !0
					}, Ce._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: _e.a.MessageHeader
					}, Ce._("Message to the broadcaster", null, {
						hk: "bGz26"
					})), r.a.createElement(fe.FormOptionsContainer, null, r.a.createElement(xe, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), r.a.createElement(fe.CharacterCountdown, {
						maxChars: be.a,
						text: t.message.trim()
					})))), r.a.createElement(ye, null, r.a.createElement(fe.ButtonRow, null, r.a.createElement(G.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, Ce._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(G.u, {
						onClick: () => {
							t.selectedReason && this.props.submitRemoval(t.selectedReason, t.message)
						},
						disabled: !this.canSave()
					}, Ce._("Remove", null, {
						hk: "3tYl0U"
					})))))
				}
			}
			var je = Object(H.a)(Ee(ke));
			const {
				fbt: Re
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = Object(i.c)({
				isConfirmationModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
				isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e)
			}), Le = Object(n.b)(Ie, (e, {
				subredditId: t,
				postId: s
			}) => ({
				submitRemovalReason: async (t, s, o) => {
					const r = await e(Object(le.submitRemovalReason)([t], s, o, be.f.Private, ""));
					e(r ? Object(me.f)({
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
				toggleRemovalReasonModal: () => e(Object(k.i)("rpan-add-removal-reason-id")),
				toggleConfirmationModal: () => e(Object(k.i)("rpan-end-broadcast-confirmation-id")),
				onRemovePost: () => e(Object(ce.T)(s, !1))
			}));
			class Ne extends r.a.Component {
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
					return r.a.createElement(ue.a, {
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
					return r.a.createElement(je, {
						submitRemoval: this.onSubmitRemovalReasons,
						toggleRemovalReasonModal: this.props.toggleRemovalReasonModal,
						toggleConfirmationModal: this.props.toggleConfirmationModal,
						itemIds: [this.props.postId],
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleRemovalReasonModal,
						trackClick: ((e, t, s) => o => () => this.props.sendEvent(r => ({
							source: e,
							action: "click",
							noun: o,
							post: s && Object(ge.J)(r, s),
							screen: Object(ge.bb)(r),
							subreddit: Object(ge.kb)(r, t)
						})))("removal_reasons", this.props.subredditId, this.props.postId)
					})
				}
				render() {
					return this.props.isRemovalReasonModalOpen ? this.renderRemovalReasonModal() : this.props.isConfirmationModalOpen ? this.renderConfirmationModal() : r.a.createElement("div", null)
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
				Ge = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ke = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
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
				rt = 10,
				nt = 5;
			var at = s("./node_modules/uuid/v4.js"),
				it = s.n(at),
				dt = s("./src/lib/makeCommentsPageKey/index.ts"),
				ct = s("./src/reddit/actions/gold/modals.ts"),
				lt = s("./src/reddit/actions/moderatingSubreddits.ts"),
				mt = s("./src/reddit/endpoints/publicAccessNetwork/index.ts");
			const ut = e => async (t, s, {
				apiContext: o
			}) => {
				const r = await Object(mt.j)(o(), e, !0);
				r && r.ok ? t(Object(me.f)({
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
				const r = await Object(mt.j)(o(), e, !1);
				r && r.ok ? t(Object(me.f)({
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
				Ot = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				St = s("./src/reddit/routes/postCreation/constants.ts"),
				wt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_t = s("./src/reddit/selectors/subreddit.ts"),
				Ct = s("./src/reddit/selectors/comments.ts"),
				Et = s("./src/reddit/selectors/commentSelector.ts"),
				yt = s("./src/reddit/selectors/communityAwards.ts"),
				xt = s("./src/reddit/models/Gold/Award.ts");
			var kt = e => e < 500 || !e ? xt.e.Silver : e < 1800 ? xt.e.Gold : xt.e.Platinum,
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
					tier: n,
					className: a
				} = e, i = n === xt.e.Silver ? It.a.silverTierAttribution : n === xt.e.Gold ? It.a.goldTierAttribution : It.a.platinumTierAttribution;
				return r.a.createElement("div", {
					className: Object(d.a)(a, It.a.tierAttribution, i),
					role: "presentation"
				}, n !== xt.e.Silver && r.a.createElement(jt.a, {
					className: It.a.giverIcon,
					userId: o,
					width: 16,
					height: 16
				}), r.a.createElement("span", null, n !== xt.e.Silver && Lt._("{giverName} gave {space}", [Lt._param("giverName", s), Lt._param("space", " ")], {
					hk: "SzDdi"
				}), r.a.createElement("strong", {
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
				} = e, n = s === xt.e.Silver ? Dt.a.silverTierAwardIcon : s === xt.e.Gold ? Dt.a.goldTierAwardIcon : Dt.a.platinumTierAwardIcon, a = s !== xt.e.Silver, i = s === xt.e.Platinum;
				return r.a.createElement("div", {
					className: Object(d.a)(o, Dt.a.tierAwardIcon),
					role: "presentation"
				}, r.a.createElement("div", {
					className: Dt.a.awardIconContainer
				}, a && r.a.createElement(r.a.Fragment, null, r.a.createElement(Mt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundStar)
				}), r.a.createElement(Tt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundStar, Dt.a.backgroundStar2)
				})), r.a.createElement("img", {
					src: t,
					className: n
				}), i && r.a.createElement(r.a.Fragment, null, r.a.createElement(Pt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleBottomLeft)
				}), r.a.createElement(Pt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleTopRight)
				}), r.a.createElement(Pt.a, {
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
					giverName: n
				} = e, a = kt(t.coinPrice), i = t.icon128 ? t.icon128.url : t.icon.url;
				return r.a.createElement("div", {
					className: Object(d.a)(s, Vt.a.container),
					role: "presentation"
				}, r.a.createElement(Ft, {
					iconUrl: i,
					tier: a,
					className: Vt.a.awardIconAnimation
				}), r.a.createElement(Nt, {
					awardName: t.name,
					className: Vt.a.attributionAnimation,
					giverId: o,
					giverName: n,
					tier: a
				}))
			}
			var Ht = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				qt = s.n(Ht);
			class Gt extends o.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: o
					} = this.props;
					return e && o && s ? r.a.createElement("div", {
						className: Object(d.a)(t, qt.a.awardOverlay),
						role: "presentation"
					}, r.a.createElement(Ut, {
						award: e,
						giverId: o,
						giverName: s
					})) : null
				}
			}
			var Kt = Object(n.b)(() => Object(i.a)(e => e, Et.b, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: o,
						authorId: r
					} = t;
					return {
						award: s ? Object(yt.a)(e, s) : void 0,
						giverId: r,
						giverName: o
					}
				}))(Gt),
				Wt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Jt = s.n(Wt);
			const Qt = Object(n.b)(() => Object(i.c)({
					awardedCommentLinks: (e, {
						commentsPageKey: t
					}) => {
						return Object(Ct.g)(e, {
							commentsPageKey: t
						}).filter(t => {
							const s = Object(Et.b)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: Ct.u
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
					const n = e.slice(o);
					return n.length ? r.a.createElement("div", {
						className: Object(d.a)(t, Jt.a.awardOverlaySpectacle),
						role: "presentation"
					}, n.map(e => r.a.createElement(Kt, {
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
			const rs = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push(`Delay${t}`);
					return e
				})(),
				ns = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push(`X${5*t}`);
					return e
				})(),
				as = ["15Deg", "45Deg", "75Deg"],
				is = e => e[Math.floor(Math.random() * e.length)],
				ds = () => {
					const e = [is(ns), is(as), is(rs)].map(e => os.a[`particle${e}`]).join(" ");
					return `${os.a.particle} ${e} ${Math.round(Math.random())?os.a.particleReverse:""}`
				},
				cs = 40,
				ls = 20;
			class ms extends r.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < cs; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < ls; t++) e.push(this.createParticle(t, "particleLg"));
					return r.a.createElement("div", {
						className: os.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return r.a.createElement("div", {
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
						timerDiff: r,
						timer: n
					} = t;
					if (!s || !s.meter || null === n) return null;
					if (r > 0) {
						if (r < Ye) {
							const e = ts(r);
							return h.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [h.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round($t(r));
							return h.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [h.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (n > s.meter.full_meter_duration) {
						const e = Math.round($t(s.meter.full_meter_duration)).toLocaleString();
						return h.fbt._("{number of minutes}+ minutes airtime left", [h.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (es(n) && !o && n > tt) {
						const e = Math.round($t(n)).toLocaleString();
						return h.fbt._("{number of minutes} minutes airtime left", [h.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const a = Math.round(n),
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
					const r = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (o > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = o - t.estimatedTimeRemaining + e;
						s > st && (r.timer = o, r.timerDiff = s, r.timerPausedAt = o)
					}
					o !== t.estimatedTimeRemaining && Math.abs(r.timer - o) > rt && (r.timer = o, r.timerDiff = o - t.timer, r.timerPausedAt = null), null !== r.timerPausedAt && r.timerPausedAt - r.timer > nt && (r.timerDiff = 0, r.timerPausedAt = null);
					const n = bs.getPillLabel(e, r),
						a = bs.isPillVisible(r.timer, e.overlayOpen, r.timerDiff);
					return {
						estimatedTimeRemaining: o,
						...r,
						streamId: s,
						pillLabel: n,
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
						timer: n,
						pillLabel: a
					} = this.state;
					if (!(s && e && e.meter && n)) return null;
					const i = Yt(n, e.meter.full_meter_duration),
						c = !o,
						l = n < tt || t,
						m = this.state.timerDiff > 0;
					return r.a.createElement("div", {
						className: os.a.meterOverlay
					}, r.a.createElement("div", {
						className: os.a.meterPillWrapper
					}, m && r.a.createElement(us, null), r.a.createElement("div", {
						className: Object(d.a)(os.a.meterPillContainer, {
							[os.a.animateMeterInAndOut]: c && !l,
							[os.a.animateMeterInOnly]: c && l,
							[os.a.fillMeterCritical]: i === Pe.CRITICAL,
							[os.a.fillMeterLow]: i === Pe.LOW,
							[os.a.fillMeterNormal]: i === Pe.NORMAL || i === Pe.EXTENDED,
							[os.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, r.a.createElement("div", {
						className: os.a.meterLabel
					}, a))))
				}
			}
			var hs = bs,
				vs = s("./src/reddit/components/OverflowMenu/index.tsx"),
				gs = s("./src/reddit/controls/Dropdown/Row.tsx"),
				fs = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Os = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				Ss = s.n(Os);
			const {
				fbt: ws
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _s = ({
					label: e,
					onSelect: t,
					onToggle: s,
					subreddits: o
				}) => r.a.createElement(vs.b, {
					className: Ss.a.overflowMenu,
					dropdownClassName: Ss.a.dropdown,
					defaultButtonOutline: !0,
					disabled: o.length < 1,
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: r.a.createElement("div", {
						className: Ss.a.overflowMenuIcon
					}, e, r.a.createElement(fs.a, {
						className: Ss.a.dropdownTriangle
					})),
					onClick: s
				}, r.a.createElement("div", {
					className: Ss.a.dropdownLabel
				}, ws._("Pick a Community", null, {
					hk: "8MoVj"
				})), o.map(e => r.a.createElement(gs.b, {
					className: Ss.a.dropdownRow,
					displayText: e.prefixedName,
					iconWrapperClassName: Ss.a.overflowItemIconWrapper,
					key: `rpan-recommended-viewer-subreddits-dropdown-${e.prefixedName}`,
					onClick: () => t(e)
				}))),
				Cs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				Es = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				ys = s.n(Es);
			class xs extends o.Component {
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
						isPaused: n,
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
					return r.a.createElement(Cs.b, {
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
						isPaused: n,
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
			var ks = xs,
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
			class Fs extends r.a.Component {
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
					return r.a.createElement("div", {
						className: As.a.statsPanel
					}, r.a.createElement("div", {
						className: As.a.voteContainer
					}, r.a.createElement("button", {
						className: Object(d.a)(As.a.upButton, {
							[As.a.activeVote]: this.isVoteActive(Ms.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": h.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, r.a.createElement(Ps.a, {
						className: As.a.voteIcon
					})), r.a.createElement("p", {
						className: As.a.votesCounter
					}, Object(Is.b)(this.upVotes()))), r.a.createElement("div", {
						className: As.a.watchingContainer
					}, r.a.createElement("div", {
						className: As.a.watchingCounter
					}, Object(Is.b)(t)), r.a.createElement("p", {
						className: As.a.watchingCaption
					}, this.props.isLive ? h.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : h.fbt._("Views", null, {
						hk: "ixhZU"
					}))), r.a.createElement("div", {
						className: As.a.voteContainer
					}, r.a.createElement("button", {
						className: Object(d.a)(As.a.downButton, {
							[As.a.activeVote]: this.isVoteActive(Ms.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": h.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, r.a.createElement(Ns.a, {
						className: As.a.voteIcon
					})), r.a.createElement("p", {
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
			var Bs = Object(n.b)(Ds, (e, t) => ({
					vote: (t, s) => e(Object(Ls.a)(t, s))
				}))(Fs),
				Vs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				Us = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				Hs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				qs = s.n(Hs),
				Gs = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				Ks = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Ws = s.n(Ks),
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
					inStreamingUiRefreshViewer: Ge.f,
					inViewerFeedTheMeter: (e, t) => Object(Ge.g)(e, t, Zs),
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
						return !!s && Object(wt.h)(e, {
							subredditId: Object(_t.D)(e, s)
						})
					},
					isUserSubscriber: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(_t.eb)(e, {
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
						return s ? Object(_t.x)(e, {
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
						this.props.currentStreamId && window.open(`${St.b}?source_id=${this.props.currentStreamId}`, "_blank"), this.props.onCrosspost(e)
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
							r = it()(),
							n = {
								[Be.r]: r,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							};
						e(Object(S.a)(o, n)), s({
							referralId: r
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
						onHide: n,
						onReport: a,
						onToggleMenu: i,
						onUpvote: c,
						onDownvote: l
					} = this.props, m = e && e.post.id;
					return r.a.createElement("div", {
						className: Object(d.a)(Ws.a.overlay, {
							[Ws.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !t && r.a.createElement("div", {
						className: Ws.a.overlayTop
					}, this.renderRecommendedViewerSubreddit(), e && !o && r.a.createElement(r.a.Fragment, null, r.a.createElement(Vs.e, {
						onClick: this.props.onToggleVideoShareModal
					}), r.a.createElement(Vs.b, {
						onClick: i,
						onHideClick: n,
						onReportClick: a
					}))), e && !t && !o && !!m && r.a.createElement(Zt, {
						className: Ws.a.awardOverlaySpectacle,
						commentsPageKey: Object(dt.a)(m)
					}), e && !t && !o && r.a.createElement("div", {
						className: Ws.a.overlayTitle
					}, this.renderTitleContainer()), r.a.createElement("div", {
						className: Ws.a.overlayCenter
					}, this.getContent()), e && !t && !o && r.a.createElement("div", {
						className: Ws.a.overlayBottom
					}, r.a.createElement(Bs, {
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
						isLive: n,
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
						onShareToChat: O
					} = this.props;
					if (s || !e || i) return null;
					const w = e && e.post.id,
						{
							authorInfo: _
						} = e.post;
					return r.a.createElement("div", {
						className: Object(d.a)(Qs.a.overlay, {
							[Qs.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !s && !i && !!w && r.a.createElement(Zt, {
						className: Ws.a.awardOverlaySpectacle,
						commentsPageKey: Object(dt.a)(w)
					}), t && r.a.createElement(hs, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), r.a.createElement("div", {
						className: Qs.a.overlayTop
					}, r.a.createElement("div", {
						className: Qs.a.overlayTopLeft
					}, r.a.createElement("div", {
						className: Qs.a.meta
					}, r.a.createElement(Us.c, null, n ? r.a.createElement(Us.h, {
						onClick: this.handleClickLiveBroadcastStatus
					}) : r.a.createElement(Us.p, null)), r.a.createElement(Us.n, {
						text: e.post.title
					}), r.a.createElement("div", {
						className: Qs.a.subredditInfo
					}, r.a.createElement(Us.l, {
						onSelect: m,
						related: b,
						subreddit: h,
						subreddits: p
					}), r.a.createElement(Us.f, {
						onSubscribe: this.onSubscribeToSubreddit,
						isSubscribed: v
					})), r.a.createElement(Us.r, {
						broadcast: e,
						live: n
					}))), r.a.createElement("div", {
						className: Qs.a.overlayTopRight
					}, Object(Us.s)(_) ? r.a.createElement(Us.m, {
						profile: _,
						currentStream: e,
						onSubscriptionChange: this.onProfileSubscriptionChange
					}) : null, r.a.createElement(Us.i, {
						onClick: u,
						onHideClick: c,
						onReportClick: l,
						onToggleLockClick: this.onToggleLock,
						isCommentsLocked: o,
						hasModeratorPermissions: a,
						onEndBroadcastClick: g,
						onRpanStudioClick: this.props.onRpanStudioClick,
						subreddit: f
					}), r.a.createElement(Us.k, {
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
							const e = Object(S.a)(Object(Ue.a)(w), {
								[Be.r]: this.referralId,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							});
							O(e), this.props.sendEvent(Object(Gs.a)())
						}
					}), r.a.createElement("div", {
						className: Object(d.a)({
							[Qs.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, r.a.createElement(Us.q, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), r.a.createElement("div", {
						className: Qs.a.overlayBottom,
						onMouseEnter: this.onMouseHoverScrubber,
						onMouseLeave: this.onMouseLeaveScrubber,
						onMouseMove: this.onMouseHoverScrubber
					}, this.renderScrubber()), this.props.videoShareModalOpen && r.a.createElement(vt.b, {
						className: Ws.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !0,
						url: Object(S.a)(Object(Ue.a)(w), {
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
						onPlayPauseToggle: n,
						onVideoPositionUpdate: a,
						setVolume: i,
						toggleMute: d,
						videoCurrentTime: c,
						videoTotalTime: l,
						volume: m
					} = this.props, u = e ? Qs.a.controls : "", p = e || this.isVisible();
					return r.a.createElement("div", {
						className: u
					}, r.a.createElement(ks, {
						isLive: t,
						isMuted: s,
						isPaused: o,
						isVisible: p,
						onPlayPauseToggle: n,
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
						isBatchApiError: n,
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
					if (h || d && i || t && o || !t && n) return r.a.createElement(Us.d, null);
					if (d) return r.a.createElement("div", {
						className: Ws.a.intro
					}, r.a.createElement(Vs.c, {
						isMuted: l,
						onToggle: g
					}));
					if (m || !t && !n && !a && p) return null;
					if (c) return r.a.createElement(Us.o, null);
					if (e && e.stream.state === Ot.a.DISCONNECTED) return r.a.createElement(Us.b, null);
					if (v) return r.a.createElement(Us.a, {
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
					return u && f ? r.a.createElement(Us.e, {
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
					let n = "",
						a = "";
					"home" === s ? (n = "All", a = "All") : "r/popular" === s ? (n = "Popular", a = "r/popular") : o ? (n = o.replace(/^r\//, ""), a = o) : (n = "All", a = "All");
					const i = t.filter(e => e.prefixedName !== a);
					return r.a.createElement("div", {
						className: Ws.a.menuContainer
					}, r.a.createElement(_s, {
						label: n,
						onSelect: e,
						subreddits: i
					}))
				}
				renderTitleContainer() {
					const {
						currentStream: e,
						isLive: t
					} = this.props;
					if (e) return r.a.createElement("div", {
						className: Ws.a.titleContainer
					}, r.a.createElement("h1", {
						className: Ws.a.videoTitle
					}, e.post.title), !t && r.a.createElement("div", {
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
						isBatchPending: n,
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
					return p || i && a || t && s || !t && o ? r.a.createElement("div", {
						className: Ws.a.prompt
					}, Xs._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? r.a.createElement("div", {
						className: Ws.a.intro
					}, r.a.createElement(Vs.c, {
						isMuted: c,
						onToggle: h
					})) : l || !t && !o && !n && m ? null : d ? r.a.createElement("div", {
						className: Ws.a.prompt
					}, Xs._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === Ot.a.DISCONNECTED ? r.a.createElement("div", {
						className: Ws.a.prompt
					}, Xs._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : b ? r.a.createElement("div", {
						className: Ws.a.prompt
					}, r.a.createElement("div", {
						className: Ws.a.promptButtonSet
					}, r.a.createElement(Vs.g, {
						onClick: u
					}), r.a.createElement(Vs.h, {
						onClick: this.props.onToggleVideoShareModal
					}))) : null
				}
			}
			var eo = Object(n.b)(Ys, (e, t) => ({
					copyLink: t => e(Object(ce.D)(t)),
					onToggleVideoShareModal: () => {
						t.currentStreamId && e(Object(k.i)(Object(vt.a)(t.currentStreamId)))
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
				ro = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				no = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
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
					const t = Object(n.e)(t => Object(io.G)(t, {
							postId: e
						})),
						s = Object(n.d)(),
						o = Object(pe.b)(),
						a = t.isGildable;
					return r.a.createElement("span", {
						className: mo.a.InputLine
					}, r.a.createElement("span", {
						className: mo.a.FormBackground
					}, r.a.createElement("span", {
						className: mo.a.FormLine
					}, r.a.createElement("div", {
						className: mo.a.Text
					}, po._("Chat is disabled", null, {
						hk: "gQrh3"
					}))), r.a.createElement(co.a, {
						className: mo.a.SendIcon
					})), a && r.a.createElement(uo.a, {
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), go = q.a.wrapped(G.g, "ModalFooter", z.a), fo = q.a.wrapped(G.i, "ModalHeader", z.a);
			var Oo = ({
				toggleModal: e,
				bodyText: t,
				title: s
			}) => r.a.createElement(G.e, null, r.a.createElement(fo, null, r.a.createElement(Q.a, null, r.a.createElement("div", null, r.a.createElement("div", {
				className: z.a.Title
			}, s)), r.a.createElement(W.a, {
				onClick: e
			}, r.a.createElement(G.b, null)))), r.a.createElement("div", {
				className: z.a.ModalText
			}, t), r.a.createElement(go, {
				className: z.a.ModalFooter
			}, r.a.createElement(K.l, {
				onClick: e,
				className: z.a.Button,
				"data-redditstyle": !0
			}, vo._("I Understand", null, {
				hk: "1f4y1d"
			}))));
			const {
				fbt: So
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wo = () => So._("Because you’ve been flagged multiple times for violating Reddit’s {=Content Policy,} the system has removed your ability to participate in this chat. This can’t be undone (not even by a mod), but after 24 hours you’ll be able to chat again.", [So._param("=Content Policy,", r.a.createElement("a", {
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, So._("{=Content Policy},", [So._param("=Content Policy", r.a.createElement("span", {
				className: z.a.Link
			}, So._("Content Policy", null, {
				hk: "47cyc2"
			})))], {
				hk: "3BF41m"
			})))], {
				hk: "ITZAq"
			});
			var _o = Object(H.a)(({
					toggleModal: e
				}) => r.a.createElement(Oo, {
					bodyText: wo(),
					title: So._("Sit back and watch for a bit", null, {
						hk: "nd6D"
					}),
					toggleModal: e
				})),
				Co = s("./src/reddit/icons/svgs/Info/index.tsx");
			const {
				fbt: Eo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yo = Object(i.c)({
				isMuteModalOpen: e => "rpan-mute-chat-modal-id" === Object(ve.a)(e)
			});
			class xo extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickInfo = () => {
						this.props.onToggleMuteModal()
					}
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: mo.a.InputLine
					}, r.a.createElement("span", {
						className: mo.a.FormBackground
					}, r.a.createElement("span", {
						className: mo.a.FormLine
					}, r.a.createElement(Co.a, {
						className: mo.a.InfoIcon,
						onClick: this.onClickInfo
					}), r.a.createElement("div", {
						className: mo.a.Text
					}, Eo._("Chat is unavailable", null, {
						hk: "12EjN3"
					}))), r.a.createElement(co.a, {
						className: mo.a.SendIcon
					}))), this.props.isMuteModalOpen && r.a.createElement(_o, {
						toggleModal: this.props.onToggleMuteModal
					}))
				}
			}
			var ko = Object(n.b)(yo, e => ({
				onToggleMuteModal: () => e(Object(k.i)("rpan-mute-chat-modal-id"))
			}))(xo);
			const {
				fbt: jo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ro = () => jo._("Your messages have been flagged for violating Reddit’s {=Content Policy.} Have fun chatting, but if you’re flagged multiple times, you may lose the ability to participate in RPAN chats.", [jo._param("=Content Policy.", r.a.createElement("a", {
				className: z.a.Link,
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, jo._("{=Content Policy}.", [jo._param("=Content Policy", r.a.createElement("span", {
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
				}) => r.a.createElement(Oo, {
					bodyText: Ro(),
					title: jo._("Be mindful of what you say", null, {
						hk: "3CDXHh"
					}),
					toggleModal: e
				})),
				Lo = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less")),
				No = s.n(Lo);
			const Po = Object(n.b)(() => Object(i.c)({
					allAwards: e => e.awards.models,
					post: (e, {
						postId: t
					}) => Object(io.G)(e, {
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
						o = kt(e);
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
								coinPrice: r
							} = e[t];
							return {
								coinPrice: r,
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
							iconUrl: n
						} = e;
						for (let a = 0; a < s; a++) {
							const s = `${Ao()}ms`,
								i = Fo(t),
								c = r.a.createElement("img", {
									key: `${e.id}-${a}`,
									className: Object(d.a)(No.a.award, i),
									src: n,
									style: {
										animationDelay: s
									}
								});
							o.push(c)
						}
					}), r.a.createElement("div", {
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
			var Go = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Ko = s.n(Go);
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
				}) => Object(Ct.s)(e, {
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
						location: n,
						openLoginModal: a,
						openRegisterModal: i,
						sendEvent: c,
						subredditId: l,
						replyComment: m,
						onFocusMessageInput: u
					} = this.props, p = Object(dt.a)(e), b = m ? Object(so.a)(Ho.c.replyToComment, m.id) : Object(so.a)(Ho.c.replyToPost, e);
					return o ? r.a.createElement("div", {
						"aria-label": h.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Ko.a.streamingChat,
						onClick: this.props.onChatClick
					}, r.a.createElement(Uo.a, {
						postId: e
					}, r.a.createElement(ao.a, {
						className: Ko.a.chatScroller,
						emptyStateClassName: Ko.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: l,
						commentsPageKey: p
					}), s && (this.shouldMuteChat ? r.a.createElement(ko, null) : t ? r.a.createElement(bo, {
						postId: e
					}) : r.a.createElement(ho.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: m,
						draftKey: b,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: c,
						onFocusMessageInput: u,
						isLivestreaming: !0
					})), r.a.createElement(Vo, {
						postId: e
					}), !s && r.a.createElement(no.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: n,
						openLoginModal: a,
						openRegisterModal: i,
						origin
					}), this.state.automuteModal === Jo.Warning && r.a.createElement(Io, {
						toggleModal: this.onDismissModal
					}), this.state.automuteModal === Jo.Mute && r.a.createElement(_o, {
						toggleModal: this.onDismissModal
					}))) : r.a.createElement("div", {
						className: Object(d.a)(Ko.a.streamingChat, Ko.a.prompt)
					}, h.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var Xo = Object(n.b)(Wo, (e, {
					postId: t
				}) => ({
					loadComments: () => e(Object(oo.commentsPageDataRequested)(t, void 0, {
						sort: to.u.CHAT
					}, to.u.CHAT)),
					openLoginModal: () => e(Object(m.i)()),
					openRegisterModal: () => e(Object(m.j)()),
					fetchAutomuteStatus: () => e(Object(ro.b)(t))
				}))(Qo),
				zo = s("./src/reddit/icons/svgs/Pagination/back.tsx");
			var Zo = e => r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				Yo = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				$o = s.n(Yo);
			const er = ({
				isNext: e,
				onClick: t,
				stream: s
			}) => r.a.createElement("div", {
				className: Object(d.a)($o.a.switchContainer, e ? $o.a.switchContainerNext : $o.a.switchContainerPrevious)
			}, r.a.createElement("button", {
				className: $o.a.switchButton,
				disabled: !s,
				onClick: t,
				"aria-label": e ? h.fbt._("Forward arrow", null, {
					hk: "3b7sZa"
				}) : h.fbt._("Back arrow", null, {
					hk: "1upGBK"
				}),
				value: e ? "forward" : "back"
			}, r.a.createElement("div", {
				className: $o.a.streamThumbnail,
				style: s ? {
					backgroundImage: `url(${s.stream.thumbnail})`
				} : {}
			}), e ? r.a.createElement(Zo, {
				className: $o.a.arrowIcon
			}) : r.a.createElement(zo.a, {
				className: $o.a.arrowIcon
			})));
			var tr = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(er, {
				isNext: !1,
				onClick: e.onPrevious,
				stream: e.previousStream
			}), r.a.createElement(er, {
				isNext: !0,
				onClick: e.onNext,
				stream: e.nextStream
			}));
			Object(L.a)(I.s);
			const sr = Object(L.a)(I.A),
				or = (e, t) => async (s, o) => {
					const r = o(),
						n = Date.now(),
						a = e.map(e => Object(Xe.l)(r, e)).filter(Boolean).map(e => ({
							imageUrl: `${e.stream.thumbnail}?${n}`,
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await rr(a, t)
				}, rr = (e, t) => Promise.all(e.map(e => nr(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), nr = e => new Promise((t, s) => {
					const o = new Image;
					o.onload = () => t(), o.onerror = () => s(), o.src = e
				}).then(() => !0, () => !1);
			var ar, ir = s("./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less"),
				dr = s.n(ir);
			! function(e) {
				e.Loading = "Loading", e.Preview = "Preview", e.Static = "Static"
			}(ar || (ar = {}));
			class cr extends o.Component {
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: o
					} = this.props, r = [];
					e && r.push(e.post.id), s && r.push(s.post.id), o && r.push(o.post.id), r.length > 0 && t(r)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: o,
						previousStream: r
					} = this.props, n = [];
					t && this.isStreamChanged(t, e.currentStream) && n.push(t.post.id), r && this.isStreamChanged(r, e.previousStream) && n.push(r.post.id), s && this.isStreamChanged(s, e.nextStream) && n.push(s.post.id), n.length > 0 && o(n)
				}
				render() {
					const {
						previewUrl: e,
						visualEffect: t,
						visualEffectLabel: s
					} = this.props;
					let o, n;
					if (t === ar.Loading) o = dr.a.loading;
					else if (t === ar.Preview) o = dr.a.preview, n = {
						backgroundImage: `url(${e})`
					};
					else {
						if (t !== ar.Static) return null;
						o = dr.a.static
					}
					return r.a.createElement("div", {
						className: dr.a.container
					}, r.a.createElement("div", {
						className: o,
						"aria-label": s,
						style: n
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var lr = Object(n.b)(null, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, o) => {
						const r = await s(or(e, t));
						s(sr(r))
					})(t))
				}))(cr),
				mr = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				ur = s.n(mr);
			const pr = Object(O.a)(U.a, {
					playerName: "RPAN Video Player"
				}),
				br = Object(i.c)({
					currentStream: Xe.d,
					currentStreamStartTime: Xe.e,
					currentHlsUrl: Xe.b,
					inViewerFeedTheMeter: (e, t) => Object(Ge.g)(e, t, Xe.d),
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
					reportingRevampEnabled: Ke.a,
					isNightMode: Ze.bb
				}),
				hr = Object(n.b)(br, (e, t) => ({
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
					setVideoVolume: t => e(x.h(t)),
					updateVideoTimestamp: (t, s) => e(A({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(P(e))
					})(t)),
					resetHistory: () => e(T()),
					toggleIntroChatModal: () => e(Object(k.i)("rpan-intro-chat-modal-id")),
					toggleEndBroadcastModal: () => e(Object(k.i)("rpan-end-broadcast-confirmation-id")),
					toggleRemovalReasonModal: () => e(Object(k.i)("rpan-add-removal-reason-id")),
					toggleOBSDownloadModal: () => e(Object(k.i)(de.a)),
					onShareToChat: t => e(Object(y.f)(t))
				}));
			class vr extends o.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = r.a.createRef(), this.videoRef = r.a.createRef(), this.videoSessionManager = null, this.renderReportFlow = (e, t) => this.props.reportingRevampEnabled ? r.a.createElement(Ae.a, {
						withOverlay: !0,
						overlayCustomStyles: Te.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}) : r.a.createElement(Te.a, {
						withOverlay: !0,
						overlayCustomStyles: Te.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}), this.renderTheater = e => {
						const {
							currentStream: t,
							currentStreamStartTime: s,
							currentHlsUrl: o,
							inViewerFeedTheMeter: n,
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
							timestamp: O,
							unavailableVideoUrl: S,
							volume: w,
							isRemovalReasonModalOpen: _,
							isEndBroadcastModalOpen: C,
							isIntroChatModalOpen: E,
							isDownloadOBSModalOpen: y,
							isNightMode: x,
							onShareToChat: k
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
						} = this.state, F = t && t.post.id, B = o !== S, V = t && !t.post.subreddit, U = u === Xe.a.LIVE, H = t && 1e3 * t.broadcast_time;
						let q, G, K, W, J = "number" == typeof O ? O : s;
						H && J >= H && (J = 0), t && B ? (q = 1e3 * t.broadcast_time, G = F, K = U, W = t.post.title) : (q = void 0, G = void 0, K = !1, W = "RPAN Unavailable Video");
						const Q = t && t.meter && 10 * Math.round(t.estimated_remaining_time / 10),
							X = n && t && t.estimated_remaining_time < et && !a,
							z = void 0 !== Q && Q >= 0 && X ? ur.a[`meterCritical${Q}`] : void 0;
						let Z, Y;
						return I || R ? Z = p ? ar.Preview : ar.Loading : X && (Z = ar.Static), I ? Y = h.fbt._("video is loading", null, {
							hk: "jUJdy"
						}) : R ? Y = h.fbt._("unable to load video", null, {
							hk: "1Eh3Rt"
						}) : X && (Y = h.fbt._("this broadcast will expire soon. give an award to add more time.", null, {
							hk: "3dUpDV"
						})), r.a.createElement(r.a.Fragment, null, D && r.a.createElement(ie, {
							isDark: x,
							onClickLearnMore: this.onOBSBannerLearnMoreClick,
							onClickDismiss: this.onOBSBannerDismissClick
						}), r.a.createElement("div", {
							className: Object(d.a)(ur.a.theaterContainer, {
								[ur.a.overlay]: i,
								[ur.a.theaterContainerExp]: e,
								[ur.a.isObsBannerDisplayed]: D
							}),
							ref: this.focusRef,
							tabIndex: -1
						}, r.a.createElement("div", {
							className: ur.a.wrap
						}, r.a.createElement("div", {
							className: Object(d.a)(ur.a.panesWrapper, {
								[ur.a.initialized]: !a
							})
						}, r.a.createElement("div", {
							className: Object(d.a)(ur.a.pane, ur.a.leftPane)
						}, r.a.createElement("div", {
							className: ur.a.videoContainer
						}, Z && Y && r.a.createElement(lr, {
							previousStream: b,
							currentStream: t,
							nextStream: m,
							previewUrl: p,
							visualEffect: Z,
							visualEffectLabel: Y
						}), o && r.a.createElement("div", {
							className: z
						}, r.a.createElement(pr, {
							autoplay: !0,
							controls: !1,
							startTime: J,
							isPaused: P,
							muted: L,
							muxVideoDuration: q,
							muxVideoId: G,
							muxVideoIsLive: K,
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
						})), r.a.createElement(eo, {
							currentStreamId: F,
							isLoading: I,
							isLive: U,
							isMuted: L,
							isPaused: P,
							isUnavailable: u === Xe.a.UNAVAILABLE,
							isVisible: N,
							onCopyLink: this.onCopyLink,
							onCrosspost: this.onCrosspost,
							onShareToChat: k,
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
						}), (_ || C) && t && r.a.createElement(Me, {
							subredditId: t.post.subreddit.id,
							subredditName: t.post.subreddit.name,
							postId: t.post.id,
							toggleModal: this.onEndBroadcast
						}), E && r.a.createElement(te, {
							toggleModal: this.props.toggleIntroChatModal
						}), y && r.a.createElement(de.b, {
							onClickDownload: this.onOBSModalDownloadClick,
							onClickDismiss: this.onOBSModalDismissClick,
							onClickGuidebook: this.onOBSModalGuidebookClick,
							className: ur.a.downloadOBSModal
						}))), !a && r.a.createElement("div", {
							className: Object(d.a)(ur.a.pane, ur.a.rightPane)
						}, t && !V && r.a.createElement(Xo, {
							location: l,
							onChatClick: this.onChatClick,
							onFocusMessageInput: this.handleFocusMessageInput,
							postId: t.post.id,
							sendEvent: g,
							subredditId: t.post.subreddit.id
						}))), t && !a && r.a.createElement(tr, {
							nextStream: m,
							onNext: this.onNextStream,
							onPrevious: this.onPreviousStream,
							previousStream: b
						}), t && !a && r.a.createElement(gr, {
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
							scrubbingStartMs: Object(C.a)(this.state.videoCurrentTime),
							scrubbingEndMs: Object(C.a)(s)
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
						} = this.props, r = s && s.post.id === e.id ? s : o(e.id);
						if (!r) return;
						const n = !t.sessionDurationMs ? He.E : He.A,
							a = {
								...t,
								playerType: He.a.Theater
							};
						this.props.sendEvent(n(r, a))
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
					e.classList.add(ur.a.focusVisible), Object(_.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, w(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(qe.t)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream(), window.localStorage && this.setState({
						shouldShowOBSBanner: !J.k()
					})
				}
				componentDidUpdate(e, t) {
					const {
						currentStream: s,
						isIntroInProgress: o,
						isOverlay: r,
						isOverlayOpen: n,
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
					if (r || n === e.isOverlayOpen || (n ? (this.setState(({
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
					!o && e.isIntroInProgress && this.handleNewStream(), o || e.isIntroInProgress || !fr(s, e.currentStream) || this.handleNewStream(), this.updateVideoSession(e, t), this.state.isSwitchingOnStreamEndedScheduled || o || !(!s && !this.state.isLoading || l === Xe.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
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
					return r.a.createElement(f.a.Consumer, null, this.renderTheater)
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
						setIntroFinishedStatus: r
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return r(!0), void this.setState({
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
					return Object(S.a)(t, {
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
						visitStream: r
					} = this.props;
					e && (this.setState({
						hasLiveIntent: o === Xe.a.LIVE,
						videoCurrentTime: 0,
						videoTotalTime: 0
					}), r(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(He.G)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
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
					const r = !o || Object(Ue.b)(e.post.id) === o;
					s(this.getStreamLocation(e), r)
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
						video: r
					} = this;
					if (!r) return;
					const n = this.getOrCreateVideoSessionManager(r),
						{
							currentStream: a
						} = this.props,
						i = null == a ? void 0 : a.post.id,
						d = i !== (null === (s = e.currentStream) || void 0 === s ? void 0 : s.post.id);
					d && this.setState({
						isReady: !1
					}), d && n.endSession();
					const {
						isReady: c
					} = this.state, {
						isReady: l
					} = t;
					!!i && (!l && c) && (n.startSession({
						id: i
					}), this.setState({
						sessionId: (null === (o = null == n ? void 0 : n.sessionStats) || void 0 === o ? void 0 : o.id) || ""
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
			const gr = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: ur.a.closeButton,
					onClick: e,
					"aria-label": h.fbt._("close button", null, {
						hk: "2l5YIS"
					})
				}, r.a.createElement(re.a, {
					className: ur.a.closeIcon
				})),
				fr = (e, t) => (e && e.post.id) !== (t && t.post.id);
			vr.contextType = p.a;
			var Or = hr(Object(pe.c)(vr)),
				Sr = s("./src/reddit/contexts/InsideOverlay.tsx"),
				wr = s("./src/reddit/helpers/overlay/index.ts"),
				_r = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				Cr = s.n(_r);
			const {
				fbt: Er
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yr = Object(l.a)((e, {
				match: {
					params: t
				}
			}) => t), xr = Object(l.a)((e, {
				location: {
					search: t
				}
			}) => Object(c.a)(t)), kr = Object(i.a)(yr, xr, (e, t) => {
				const s = t.get(Be.s),
					{
						subredditName: o
					} = e;
				return "home" === s || "r/popular" === s ? s : "popular" === o ? "r/popular" : o ? void 0 : "home"
			}), jr = Object(i.a)(xr, e => {
				const t = e.get(Be.A);
				if (!t) return;
				const s = parseInt(t, 10);
				return isNaN(s) ? void 0 : s
			}), Rr = Object(i.c)({
				isEnabled: Ge.a,
				isIntroInProgress: ze.b,
				related: kr,
				timestamp: jr
			}), Ir = Object(n.b)(Rr, (e, t) => ({
				onOpenLoginModal: () => e(Object(m.i)()),
				onStreamByIdRequested: t => e(Object(u.d)(t)),
				updateLocation: (t, {
					isOverlay: s,
					useReplace: o
				}) => {
					const r = o ? a.c : a.b,
						n = s ? Object(wr.b)(t) : t;
					e(r(n))
				}
			}));
			class Lr extends r.a.Component {
				constructor(e) {
					super(e), this.renderPublicAccessNetwork = e => {
						const {
							isOverlay: t,
							location: s,
							match: o,
							related: n,
							timestamp: a
						} = this.props, {
							subredditName: i,
							partialPostId: c
						} = o.params;
						return r.a.createElement("div", {
							className: Object(d.a)(Cr.a.rpanContainer, {
								[Cr.a.overlay]: t,
								[Cr.a.rpanContainerExp]: e
							})
						}, r.a.createElement(p.b, null, r.a.createElement(Or, {
							isOverlay: !!t,
							location: s,
							onNavigation: this.onNavigation,
							related: n,
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
					return e ? r.a.createElement(f.a.Consumer, null, this.renderPublicAccessNetwork) : r.a.createElement(Nr, null)
				}
			}
			const Nr = () => {
				const e = Object(o.useContext)(f.a);
				return r.a.createElement("div", {
					className: Object(d.a)(Cr.a.rpanContainer, Cr.a.forbiddenScreen, {
						[Cr.a.rpanContainerExp]: e
					})
				}, r.a.createElement("h2", null, Er._("Not Found", null, {
					hk: "2ijDv5"
				})))
			};
			t.default = Ir(Object(pe.c)(Object(Sr.b)(Lr)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return _
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
				r = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				c = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				m = s.n(c)()(e => Object(r.a)(Object(o.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var u = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				O = Object(o.a)(f, e => e.ended),
				S = Object(o.a)(f, e => e.removed),
				w = Object(o.a)(p, O, S, (e, t, s) => {
					const o = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							r = D(o, a.a.ENDED) ? a.a.ENDED : o,
							n = s.stream.vod_accessible;
						return r === o && !0 === n ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							r = D(o, a.a.ENDED) ? a.a.ENDED : o,
							n = s.stream.vod_accessible;
						return r === o && !1 === n ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, o)
				}),
				_ = (e, t) => {
					return w(e)[Object(n.g)(t)]
				},
				C = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => m(t.listingName)(e, t), w, b, i.h, (e, t, s, o, r) => {
					const i = [];
					if (e) {
						const t = Object(n.g)(e);
						s[t] && i.push(t)
					}
					const d = i.concat(t),
						c = [...new Set(d)],
						l = new Set([...o, ...r]);
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
				}) => C(e, {
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
				x = Object(o.a)(g, (e, {
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
				k = Object(o.a)((e, {
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
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						n = r.find(e => e.stream.state === a.a.IS_LIVE);
					if (n) return n.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (o.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				j = Object(r.a)(Object(o.a)(k, w, (e, t) => e ? t[e] : void 0)),
				R = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(n.g)(t) : void 0, k, b, i.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: o
				}) => E(e, {
					listingName: t || o,
					streamIdFromPath: s
				}), (e, t, s, o, r) => !e || s.includes(e) || o.includes(e) ? t || r[0] : e),
				I = Object(o.a)(v, g, x, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				L = Object(o.a)(v, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				N = Object(r.a)(Object(o.a)(R, w, (e, t) => e ? t[e] : void 0)),
				P = Object(r.a)(Object(o.a)(I, w, (e, t) => e ? t[e] : void 0)),
				M = Object(r.a)(Object(o.a)(L, w, (e, t) => e ? t[e] : void 0)),
				T = (Object(r.a)(Object(o.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, w, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(o.a)(R, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				A = Object(o.a)((e, {
					streamIdFromPath: t
				}) => t ? _(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

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
					const r = o.stream.state;
					return r === a.a.IS_LIVE || r === a.a.DISCONNECTED ? B.LIVE : r === a.a.ENDED && o.stream.vod_accessible ? B.VOD : B.UNAVAILABLE
				}),
				U = Object(o.a)(N, V, u.b, d.b, d.o, (e, t, s, o, r) => s ? o : e ? t === B.LIVE || t === B.VOD ? e.stream.hls_url : r : void 0),
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
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(o.a)(a, n.n, (e, t) => t && !e.isIntroFinished),
				d = Object(o.a)(a, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => !!Object(n.b)(e) || Object(r.c)(e, {
				experimentEligibilitySelector: a.O,
				experimentName: o.k
			}) === o.f.Enabled
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = Object(o.a)(e => Object(n.c)(e, {
				experimentEligibilitySelector: a.O,
				experimentName: r.Qb
			}), e => e === r.dd)
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(r.xf)(t)
				},
				d = Object(o.a)(i, n.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"3415d2da3478"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d27755b86f"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"b124cbe98ffd"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"bbf91c873521"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"d4de17c54b78"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PublicAccessNetwork.85727193c8f658f9def3.js.map