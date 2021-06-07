// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.cd692e3d80e4f2d15a0f.js
// Retrieved at 6/7/2021, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "CommentsPage"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, o) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, o)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseDelay.js"),
				n = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return o(e, 1, t)
				}));
			e.exports = n
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"96a6834825b1"}')
		},
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t, s, o = {}) => {
				let n = `collectionCommentsPage--[collection:'${e}']`;
				return t && (n += `--[post:'${t}']`), s && (n += `--[rootComment:'${s}']`), o && (o.sort && o.hasSortParam && (n += `--[sort:'${o.sort}']`), o.context && (n += `--[context:${o.context}]`), o.depth && (n += `--[depth:${o.depth}]`)), n
			}
		},
		"./src/reddit/actions/comment/websocket/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return U
			})), s.d(t, "b", (function() {
				return W
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = s("./node_modules/lodash/first.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/isArray.js"),
				c = s.n(d),
				l = s("./src/reddit/helpers/isComment.ts"),
				m = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/PostCreationForm/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts");
			const g = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const s = C(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(m.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							authorIconImage: e.author_icon_img,
							authorIconIsDefault: e.author_is_default_icon,
							authorIconIsNSFW: e.author_is_nsfw_icon,
							authorSnoovatarImage: e.author_snoovatar_img,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: f(s),
							id: e.name,
							isAdmin: s === p.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: s === p.e.Submitter,
							isMod: s === p.e.Moderator,
							markdown: e.body,
							media: {
								type: "rtjson",
								richtextContent: e.rtjson || {
									document: [{
										c: [{
											e: "text",
											t: e.body
										}],
										e: "par"
									}]
								},
								rteMode: h.h.RICH_TEXT
							},
							parentId: e.parent_id && Object(l.a)(e.parent_id) ? e.parent_id : null,
							permalink: e.context,
							postId: e.link_id,
							score: e.score,
							subredditId: e.subreddit_id,
							treatmentTags: e.treatment_tags,
							isSystem: !1,
							approvedAtUTC: null,
							approvedBy: null,
							bannedAtUTC: null,
							bannedBy: null,
							collapsedReason: null,
							deletedBy: null,
							editedAt: null,
							ignoreReports: !1,
							isApproved: !1,
							isAuthorPremium: !1,
							isLocked: !1,
							isDeleted: !1,
							isRemoved: !1,
							isScoreHidden: !1,
							isSpam: !1,
							isStickied: !1,
							isSaved: !1,
							modReports: [],
							modReportsDismissed: [],
							numReports: 0,
							postAuthor: null,
							postTitle: null,
							sendReplies: !0,
							userReports: [],
							userReportsDismissed: [],
							voteState: b.a.notVoted,
							...t || {}
						}
					}
				},
				f = e => {
					switch (e) {
						case p.e.Admin:
							return o.D.ADMIN;
						case p.e.Moderator:
							return o.D.MODERATOR;
						case p.e.Alumni:
							return o.D.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				C = e => a()((e || []).filter(e => c()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || p.e.None;
			const y = (e, t, s) => {
				const o = {
						[t]: {}
					},
					{
						author: n,
						author_flair_background_color: r,
						author_flair_richtext: i,
						author_flair_template_id: a,
						author_flair_text: d,
						author_flair_text_color: c,
						author_flair_type: l
					} = s;
				if (n && l) {
					if (l === u.f.Richtext) {
						if (!r || !i) return;
						return {
							[t]: {
								[n]: {
									type: l,
									backgroundColor: r,
									cssClass: void 0,
									richtext: i,
									templateId: a,
									textColor: c
								}
							}
						}
					}
					if (l === u.f.Text) {
						if (!d) return o;
						return {
							[t]: {
								[n]: {
									type: l,
									backgroundColor: r,
									cssClass: void 0,
									text: d,
									templateId: a,
									textColor: c
								}
							}
						}
					}
				}
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var x = s("./src/lib/env/index.ts");
			const v = new Map,
				O = e => e,
				k = new Set;
			var w;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(w || (w = {}));
			const E = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				P = (e, t) => {
					const s = O(t),
						o = v.get(s);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				j = (e, t, s, o) => {
					const n = O(t),
						r = v.get(n);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const i = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					v.set(n, i), i.socket.addEventListener("open", () => {
						i.retries = {
							...E
						}
					}), i.socket.addEventListener("message", S.bind(null, o)), i.socket.addEventListener("close", I.bind(null, n, o)), i.socket.addEventListener("error", L.bind(null, n)), window && window.addEventListener("beforeunload", P.bind(null, e, t))
				},
				I = (e, t, s) => {
					const o = v.get(e);
					o && (o.isClosePlanned ? v.delete(e) : _(e, t))
				},
				_ = (e, t) => {
					const s = v.get(e);
					if (!s) return;
					const {
						retries: {
							backoffTime: o,
							connectionAttempts: n,
							jitterAmount: r,
							maximumRetries: i
						},
						socket: a,
						uniqueId: d,
						url: c
					} = s;
					if (v.delete(e), n < i && a.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, n),
							i = Math.random() * r - r / 2,
							a = Math.round(e + i),
							l = {
								...s.retries,
								connectionAttempts: n + 1
							};
						setTimeout(() => {
							j(c, d, l, t)
						}, a), Object(x.a)() && console.debug(`Connection reset, retrying in ${a}ms`)
					}
				},
				S = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(x.a)() && console.error(t)
					}
				},
				L = (e, t) => {
					const s = v.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? v.delete(e) : Object(x.a)() && console.error(t)
				};
			var T = s("./src/reddit/selectors/comments.ts"),
				N = s("./src/reddit/selectors/commentSelector.ts"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				R = s("./src/reddit/actions/comment/websocket/constants.ts");
			const F = Object(n.a)(R.b),
				A = Object(n.a)(R.c),
				B = Object(n.a)(R.a),
				D = Object(n.a)(R.d),
				V = {},
				U = (e, t, s, n) => async (i, a) => {
					(e => new Promise(t => {
						const {
							cb: s,
							url: o,
							uniqueId: n
						} = e;
						k.has(n) ? t() : (k.add(n), setTimeout(() => {
							k.delete(n), j(o, n, {
								...E
							}, s), t()
						}, 1))
					}))({
						uniqueId: s,
						url: t,
						cb: t => {
							switch (t.type) {
								case w.NEW_COMMENT: {
									const d = t.payload.name,
										c = g(t.payload),
										l = a(),
										m = Object(r.a)(l, s).sortToUse === o.r.CHAT,
										p = Object(N.a)(l, {
											commentId: d
										}),
										u = !(!d || !V[d]);
									if (c && !u) {
										const s = y(0, n, t.payload),
											o = t.payload.total_comment_count;
										if (void 0 === p) {
											const n = Object(T.w)(l, {
													commentsPageKey: e
												}),
												r = t.payload.parent_id,
												a = Object(T.j)(l, {
													commentId: r,
													commentsPageKey: e
												}),
												d = Object(N.a)(l, {
													commentId: r
												}),
												p = d && d.originId ? d.originId : r,
												u = null === a ? a : a + 1;
											if (m) i(F({
												authorFlair: s,
												comment: c,
												commentsPageKey: e,
												depth: u,
												headCommentId: n,
												isChatSort: m,
												numComments: o,
												originId: p
											}));
											else {
												const t = d && d.originId ? 5e3 : 7e3;
												setTimeout(() => i(F({
													authorFlair: s,
													comment: c,
													commentsPageKey: e,
													depth: u,
													headCommentId: n,
													isChatSort: m,
													numComments: o,
													originId: p
												})), t)
											}
										} else i(A({
											authorFlair: s,
											comment: c,
											commentsPageKey: e,
											isChatSort: m,
											numComments: o
										}))
									}
									break
								}
								case w.UPDATE_COMMENT: {
									const d = t.payload.name,
										c = a(),
										l = Object(N.a)(c, {
											commentId: d
										}),
										m = g(t.payload),
										p = Object(r.a)(c, s).sortToUse === o.r.CHAT;
									if (l && m) {
										const s = y(0, n, t.payload),
											o = t.payload.total_comment_count;
										i(A({
											authorFlair: s,
											comment: m,
											commentsPageKey: e,
											isChatSort: p,
											numComments: o
										}))
									}
									break
								}
								case w.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										o = t.payload.score,
										n = a(),
										r = Object(N.a)(n, {
											commentId: s
										});
									r && i(A({
										comment: {
											...r,
											score: o
										},
										commentsPageKey: e
									}));
									break
								}
								case w.DELETE_COMMENT: {
									const e = t.payload.name,
										s = a(),
										o = Object(N.a)(s, {
											commentId: e
										});
									o && !o.isDeleted ? i(B({
										id: e
									})) : V[e] = w.DELETE_COMMENT;
									break
								}
								case w.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										o = a(),
										n = Object(N.a)(o, {
											commentId: s
										}),
										r = (o.user.account && o.user.account.id) === (n && n.authorId),
										d = !!e && !!Object(M.j)(o, {
											postId: e
										});
									!n || n.isRemoved && n.isDeleted || r || d ? V[s] = w.REMOVE_COMMENT : i(B({
										id: s
									}));
									break
								}
								case w.USER_JOIN: {
									const s = g(t.payload, {
											isSystem: !0
										}),
										o = !0;
									s && i(D({
										comment: s,
										commentsPageKey: e,
										isChatSort: o
									}));
									break
								}
							}
						}
					})
				}, W = (e, t) => async () => {
					P(0, t)
				}
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
				return y
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return P
			}));
			var o, n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
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
				f = Object(n.a)(i.h),
				C = Object(n.a)(i.c),
				y = Object(n.a)(i.f),
				x = Object(n.a)(i.j),
				v = Object(n.a)(i.i),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						r = Object(p.e)(n),
						i = Object(p.d)(n),
						c = Object(h.J)(n);
					if (r || !i) return;
					e(f());
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
							if (k(t)) {
								if (w(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), u = !0
								} else if (E(t)) {
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
					} catch (y) {
						u = !1
					}
					u || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !w(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, P = () => async (e, t, s) => {
					var o, n;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (o = Object(u.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(h.K)(i);
						return Object(r.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(y({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return K
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return q
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return G
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return z
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Y
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return Q
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				i = s("./src/lib/pageTitle.ts"),
				a = s("./src/lib/truncateText/index.ts"),
				d = s("./src/reddit/actions/ads/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/actions/shortcuts/active.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/reddit/constants/postCollection.ts"),
				x = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/endpoints/governance/posts.ts"),
				O = s("./src/config.ts"),
				k = s("./src/lib/makeApiRequest/index.ts"),
				w = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function E(e, t, s) {
				const o = `${O.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(w.a)(`${o}/${e}/${t}/${s}`) : t ? Object(w.a)(`${o}/${e}/${t}`) : Object(w.a)(`${o}/${e}`)
			}
			var P = (e, t, s, n, r) => Object(k.a)(e, {
					data: r,
					endpoint: E(t, s, n),
					method: o.fb.GET
				}),
				j = s("./src/reddit/endpoints/page/subredditPage.ts"),
				I = s("./src/reddit/helpers/canonicalUrls.ts"),
				_ = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				L = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				N = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/models/Post/index.ts"),
				R = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				F = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/reddit/selectors/postCollection.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				V = s("./src/reddit/actions/pages/comments.ts"),
				U = s("./src/reddit/actions/pages/constants.ts"),
				W = s("./src/lib/initializeClient/installReducer.ts"),
				H = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(W.a)({
				pages: {
					comments: H.a
				}
			});
			const K = Object(n.a)(U.d),
				q = Object(n.a)(U.b),
				G = Object(n.a)(U.a),
				z = e => async (t, s) => {
					const {
						collectionId: n,
						partialPostId: r,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, g = r ? Object(M.s)(r) : "", f = d && Object(N.g)(d), {
						queryParams: v
					} = e, O = s(), {
						instanceId: k
					} = v, w = {
						id: n,
						type: x.b[l]
					}, E = x.b[l] === x.a.PROFILE, {
						hasSortParam: P,
						sortToUse: j
					} = Object(S.a)(O, g), _ = ["context", "depth", "limit", C.f].reduce((e, t) => {
						const s = parseInt(v[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: P,
						instanceId: k
					});
					P && (_.sort = j), t(p.p(g)), await Promise.all([E ? t(u.d(c)) : Promise.resolve(), t(J(n, g, f, _))]);
					const L = ((e, t) => {
						const s = Object(A.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const n = Object(D.M)(e, {
								identifier: t
							}),
							r = Object(i.b)(s.title, n.name).toString();
						return Object(a.a)(r, y.c, o.eb)
					})(s(), w) || Object(i.c)();
					t(m.l({
						title: L
					}));
					const R = s().posts.models[g];
					if (R) {
						const o = Object(D.M)(s(), {
							identifier: R.belongsTo
						});
						if (!R.isSponsored)
							if (R.belongsTo.type === x.a.SUBREDDIT) {
								!!Object(D.T)(O, {
									subredditId: R.belongsTo.id
								}) || await t(b.o(o.name))
							} else await t(u.d(o.name));
						const n = s().posts.instances[g] ? e.queryParams.instanceId : R.postId;
						t(Object(h.b)(n))
					}
					E ? Object(I.d)(s(), t, e) : Object(I.e)(s(), t, e), Object(T.v)(s(), !0)
				}, Y = Object(n.a)(U.c), Q = (e, t, s, o) => async (n, i, a) => {
					const d = Object(r.a)(e, t, s, o),
						c = i();
					t = t || Object(A.p)(c, {
						collectionId: e
					});
					const l = await P(a.apiContext(), e, t, s, o);
					if (n(Object(m.m)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(_.a)(l.body, t, c);
						n(q({
							key: d,
							collectionId: e,
							meta: c.meta,
							postId: t,
							shouldCollapse: s,
							...l.body
						}));
						const o = c.user.prefs.commentMode;
						n(Y({
							commentMode: o,
							key: d,
							postId: t
						}))
					} else n(G({
						error: l.error,
						key: d,
						...l.body
					}))
				}, J = (e, t, s, o, n) => async (i, a, u) => {
					const h = Object(r.a)(e, t, s, o),
						b = a();
					t = t || Object(A.p)(b, {
						collectionId: e
					});
					const {
						subredditName: C
					} = o, y = b.pages.comments.keyToHeadCommentId.hasOwnProperty(h), x = b.pages.comments.api.fullyLoaded[h], O = b.pages.comments.api.error[h];
					if (b.pages.comments.api.pending[h] || y && !O) {
						if (y && !b.sidebarPromotedPosts.firstFetch) {
							const e = Object(F.h)(b) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(x || n || i(Q(e, t, s, o)))
					}
					const k = b.user.prefs.commentMode;
					i(K({
						key: h,
						collectionId: e,
						commentMode: k,
						postId: t
					}));
					const w = {
						...o
					}; {
						const e = t && Object(B.F)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > V.MIN_NUM_COMMENTS_TO_TRUNCATE && (w.truncate = V.NUM_COMMENTS_TRUNCATE)
					}
					let E, I = await Object(L.a)("comments", () => P(u.apiContext(), e, t, s, w));
					if (i(Object(m.m)(I.status)), I.ok && (t = t || I.body.collections[e].primaryPostId)) {
						const e = Object.keys(I.body.posts).filter(e => !!I.body.posts[e].isMeta),
							s = Object(B.F)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(v.a)(u.apiContext(), s.belongsTo.id, e);
							t.ok && (E = t.body)
						}
					}
					if (!n) {
						const n = t ? Object(B.F)(a(), {
							postId: t
						}) : null;
						n && I.body.comments && Object.keys(I.body.comments).length < n.numComments ? i(Q(e, t, s, o)) : I.ok && i(Y({
							commentMode: k,
							key: h,
							postId: t
						}));
						const r = Object(F.h)(b) ? R.a.COMMENTS_OVERLAY : R.a.COMMENTS;
						i(Object(d.b)(r))
					}
					if (I.ok) {
						if (!t) return;
						const e = Object(_.a)(I.body, t, b);
						i(Object(V.commentsPageLoaded)({
							commentMode: k,
							key: h,
							postId: t,
							meta: b.meta,
							governance: E,
							shouldCollapse: e,
							...I.body
						})), i(g.g(h));
						const s = Object(B.F)(b, {
							postId: t
						});
						s && i(p.x(s, f.a.CommentsView)), !n && s && "subreddit" === s.belongsTo.type && I.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(I.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else C && (i(Object(l.subredditPending)({
						key: h
					})), I = await Object(L.a)("subreddit", () => Object(j.a)(u.apiContext(), C, {})), i(Object(m.m)(I.status))), i(Object(l.handleSubredditPageApiError)(I, C)), i(G({
						error: I.error,
						key: h,
						...I.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return me
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return pe
			})), s.d(t, "commentsPagePending", (function() {
				return ue
			})), s.d(t, "commentsPageLoaded", (function() {
				return he
			})), s.d(t, "commentsPageFailed", (function() {
				return be
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return ge
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return fe
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return Ce
			})), s.d(t, "commentsPageRequested", (function() {
				return ye
			})), s.d(t, "commentsPageDataRequested", (function() {
				return xe
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return ve
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Oe
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
				f = s("./src/reddit/actions/economics/powerups/achievements.ts"),
				C = s("./src/reddit/actions/externalAccount.ts"),
				y = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				x = s("./src/reddit/actions/platform.ts"),
				v = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/presence.ts"),
				k = s("./src/reddit/actions/profile/index.ts"),
				w = s("./src/reddit/actions/subreddit.ts"),
				E = s("./src/reddit/actions/toaster.ts"),
				P = s("./src/reddit/constants/adEvents.ts"),
				j = s("./src/reddit/constants/graphql.ts"),
				I = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/constants/posts.ts"),
				S = s("./src/reddit/helpers/commentList/index.ts"),
				L = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				T = s("./src/reddit/models/Comment/index.ts"),
				N = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Subreddit/index.ts"),
				R = s("./src/reddit/models/User/index.ts"),
				F = s("./src/reddit/selectors/category.ts"),
				A = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				B = s("./src/reddit/selectors/experiments/postSeo.ts"),
				D = s("./src/reddit/selectors/experiments/removedPosts.ts"),
				V = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				U = s("./src/reddit/selectors/platform.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/subreddit.ts"),
				K = s("./src/reddit/selectors/user.ts"),
				q = s("./src/lib/makeActionCreator/index.ts"),
				G = s("./src/lib/makeCommentsPageKey/index.ts"),
				z = s("./src/reddit/actions/ads/index.ts"),
				Y = s("./src/reddit/helpers/canonicalUrls.ts"),
				Q = s("./src/reddit/helpers/correlationIdTracker.ts"),
				J = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				X = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Z = s("./src/reddit/actions/gold/powerups.ts"),
				$ = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				ee = s("./src/lib/performanceTimings/index.tsx"),
				te = s("./src/reddit/constants/experiments.ts"),
				se = s("./src/reddit/helpers/chooseVariant/index.ts");
			const oe = e => {
				var t, s;
				const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					n = o && Object(u.s)(o),
					{
						sortToUse: r
					} = Object(L.a)(e, n);
				return (!r || r === h.r.CONFIDENCE) && Object(se.c)(e, {
					experimentEligibilitySelector: () => Object(K.J)(e),
					experimentName: te.s
				}) === te.u.Enabled
			};
			var ne = s("./src/reddit/selectors/chatPost.ts"),
				re = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				ie = s("./src/reddit/selectors/realtimeComments.ts"),
				ae = s("./src/reddit/selectors/seo/index.ts"),
				de = s("./src/reddit/actions/pages/constants.ts"),
				ce = s("./src/lib/initializeClient/installReducer.ts"),
				le = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(ce.a)({
				pages: {
					comments: le.a
				}
			});
			const me = 25,
				pe = 100,
				ue = Object(q.a)(de.h),
				he = Object(q.a)(de.f),
				be = Object(q.a)(de.e),
				ge = (e, t, s) => {
					const o = !e,
						n = Object(W.F)(t, {
							postId: s
						}),
						r = n.belongsTo,
						i = Object(H.M)(t, {
							identifier: r
						}),
						a = Object(ae.d)(t, {
							identifier: r
						}),
						d = {
							listingBelow: !1,
							postFeed: !1,
							postImageOCRAltText: !1,
							postQASchema: !1
						};
					return Object(ae.b)(t) && !Object(re.a)(t) ? d.listingBelow = a || o : d.postFeed = (a || o) && (!Object(M.h)(i) && !Object(ne.d)(t, {
						postId: s
					}) && !!i || !Object(U.h)(t) && Object(B.f)(t)), e && (d.postImageOCRAltText = Object(B.c)(n) && !!Object(B.b)(t, n, !1), d.postQASchema = Object(B.e)(t, s, !1)), d
				},
				fe = (e, t) => e || t.postFeed || t.listingBelow || t.postImageOCRAltText || t.postQASchema,
				Ce = e => ({
					includePostFeed: e.postFeed,
					includeListingBelowExperiment: e.listingBelow,
					includePostImageOCRAltText: e.postImageOCRAltText,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				ye = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(u.s)(d) : "", p = c && Object(T.g)(c), {
						path: g,
						queryParams: f
					} = e, O = Object(y.d)(g), {
						instanceId: E
					} = f, {
						hasSortParam: P,
						sortToUse: S
					} = Object(L.a)(s(), m), M = null === (i = null === (r = Object(U.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, R = ["context", "depth", "limit", I.f].reduce((e, t) => {
						const s = parseInt(f[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: P,
						instanceId: E,
						include_categories: !0
					});
					P && (R.sort = S), R.onOtherDiscussions = O, t(v.p(m)), await t(xe(m, p, R, S));
					const A = s().posts.models[m],
						B = Object(K.K)(s());
					if (A && "subreddit" === A.belongsTo.type) {
						const e = A.belongsTo.id,
							s = Object(ee.i)(() => t(Object(Z.i)(e, {
								fullData: !0,
								includeIdentity: B
							})), {
								name: "subredditPowerupsRequested",
								page: M,
								isLoggedIn: B
							});
						await s
					}
					if (A) {
						const r = ((e, t) => {
								const s = Object(W.R)(e, {
										postId: t
									}),
									o = Object(W.F)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							i = Object(H.M)(s(), {
								identifier: A.belongsTo
							});
						if (i && Object(D.a)(s())) return void t(Object(o.c)(i.url));
						if ((A.media && A.media.type) === N.o.LIVEVIDEO) {
							const e = `/rpan${A.belongsTo.type===_.a.SUBREDDIT?i.url:"/"}${Object(u.t)(A.id)}`;
							return void t(Object(o.c)(e))
						}
						if (A.belongsTo.type !== _.a.SUBREDDIT || A.isSponsored) {
							if (A.belongsTo.type === _.a.PROFILE) {
								const e = Object(ee.i)(() => t(k.d(i.name)), {
									name: "getProfileInfo",
									page: M,
									isLoggedIn: B
								});
								await e
							}
						} else {
							if (!!!Object(H.T)(s(), {
									subredditId: A.belongsTo.id
								})) {
								const e = Object(ee.i)(() => t(w.o(i.name)), {
									name: "getSubredditRules",
									page: M,
									isLoggedIn: B
								});
								await e
							}
						}
						const d = ge(!1, s(), m),
							c = Object(re.c)(s()),
							l = O;
						if (fe(l, d)) {
							Object(Q.d)(Q.a.LinkedPosts);
							const e = Object(Q.c)(Q.a.LinkedPosts),
								o = {
									adContext: {
										layout: j.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.Zb.WEEK.toUpperCase(),
									sort: h.L.TOP,
									subredditName: i.name
								},
								n = {
									postId: m
								},
								r = {
									correlationId: e,
									experimentVariant: c
								},
								a = Ce(d);
							Object(ee.i)(() => t(Object($.a)({
								...n,
								...o,
								...r,
								...a,
								includeOtherDiscussions: l
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: B,
								page: M
							});
							0
						}
						t(Object(C.p)()), t(x.l({
							title: r
						}));
						const p = s().posts.instances[m] ? e.queryParams.instanceId : A.postId;
						t(Object(a.b)(p)); {
							const e = Object(F.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(n.c(e))))
						}
					} else t(x.l({
						title: b.c()
					}));
					const {
						routePrefix: V
					} = e.params;
					_.b[V] === _.a.PROFILE ? Object(Y.d)(s(), t, e) : Object(Y.b)(s(), t, e)
				}, xe = (e, t, s, o) => async (n, a, d) => {
					var u, b, C;
					const y = a(),
						k = Object(G.a)(e, t, s),
						{
							subredditName: w
						} = s,
						j = y.pages.comments.keyToHeadCommentId.hasOwnProperty(k),
						I = y.pages.comments.api.fullyLoaded[k],
						_ = y.pages.comments.api.error[k],
						L = y.pages.comments.api.pending[k],
						T = !Object(K.J)(y),
						N = Object(K.j)(y),
						M = o === h.r.CHAT,
						F = !!y.platform.lastPage;
					if ((L || j && !_) && !(M && F)) {
						if (j && !y.sidebarPromotedPosts.firstFetch) {
							const e = Object(U.h)(y) ? X.a.COMMENTS_OVERLAY : X.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(z.b)(e))
							})
						}
						return void(I || n(Oe(e, t, s)))
					}
					n(r.g());
					const B = y.user.prefs.commentMode;
					n(ue({
						key: k,
						postId: e,
						commentMode: B
					}));
					const D = {
						...s,
						...M ? {
							sort: h.r.LIVE
						} : T ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(W.F)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > pe && (D.truncate = me)
					}
					const V = null === (b = null === (u = Object(U.b)(y)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						H = Object(ee.i)(() => Object(l.a)(d.apiContext(), e, t, D, Object(A.a)(a()), Object(ie.a)(a()), oe(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !T,
							page: V
						}),
						q = !T && N && Object(ee.i)(() => Object(p.d)(d.gqlContext(), Object(R.e)(N)), {
							name: "fetchProfileKarma",
							isLoggedIn: !T,
							page: V
						}) || null,
						[Y, Q] = await Promise.all([H, q]);
					let Z;
					if (n(Object(x.m)(Y.status)), Y.ok) {
						const t = Object.keys(Y.body.posts).filter(e => !!Y.body.posts[e].isMeta),
							s = Y.body.posts[e];
						if (t.length) {
							const e = Object(ee.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: V,
									isLoggedIn: !T
								}),
								o = await e;
							o.ok && (Z = o.body)
						}
						if (Q && Q.ok) {
							const e = null === (C = Q.body.data.redditorInfoByName) || void 0 === C ? void 0 : C.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : p.a;
							Y.body && Y.body.account && Object.assign(Y.body.account, t)
						}
						const o = Object(S.a)(Y.body, e, y);
						n(he({
							key: k,
							postId: e,
							meta: y.meta,
							governance: Z,
							shouldCollapse: o,
							...Y.body
						}));
						const r = s && "subreddit" === s.belongsTo.type ? s.belongsTo.id : null,
							i = Y.body.comments,
							a = Y.body.posts;
						await n(Object(O.b)(a, i, r)), await n(Object(f.b)(r, i))
					} {
						const o = Object(W.F)(a(), {
							postId: e
						});
						o && Y.body.comments && Object.keys(Y.body.comments).length < o.numComments ? n(Oe(e, t, s)) : Y.ok && n(ve({
							key: k
						}));
						const r = Object(U.h)(y) ? X.a.COMMENTS_OVERLAY : X.a.COMMENTS;
						n(Object(z.b)(r))
					}
					if (Y.ok) {
						n(E.g(k));
						const t = Object(W.F)(a(), {
							postId: e
						});
						if (n(v.x(t, P.a.CommentsView)), t && "subreddit" === t.belongsTo.type && Y.body.comments) {
							const e = Object(ee.i)(() => n(Object(g.a)({
								commentIds: Object.keys(Y.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: V,
								isLoggedIn: !T
							});
							await e
						}
					} else {
						let e;
						w && (n(Object(i.subredditPending)({
							key: k
						})), e = await Object(J.a)("subreddit", () => Object(m.a)(d.apiContext(), w, {})), n(Object(x.m)(e.status)), n(Object(i.handleSubredditPageApiError)(e, w))), n(be({
							error: Y.error,
							key: k,
							...e ? e.body : Y.body
						}))
					}
				}, ve = Object(q.a)(de.g), Oe = (e, t, s) => async (o, n, r) => {
					var i;
					const a = Object(G.a)(e, t, s),
						c = n(),
						m = Object(K.K)(c),
						u = Object(K.j)(c),
						h = Object(l.a)(r.apiContext(), e, t, s, Object(A.a)(c), Object(ie.a)(c), oe(c)),
						b = m && u && Object(p.d)(r.gqlContext(), Object(R.e)(u)) || null,
						[f, C] = await Promise.all([h, b]);
					if (o(Object(x.m)(f.status)), f.ok) {
						if (C && C.ok) {
							const e = null === (i = C.body.data.redditorInfoByName) || void 0 === i ? void 0 : i.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : p.a;
							f.body && f.body.account && Object.assign(f.body.account, t)
						}
						const t = Object(S.a)(f.body, e, c);
						o(he({
							key: a,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...f.body
						})), o(ve({
							key: a
						}));
						const s = n().posts.models[e],
							r = s && Object(W.R)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(V.a)(c, {
							subredditId: r.id
						}) && o(Object(d.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && f.body.comments && await o(Object(g.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(be({
						error: f.error,
						key: a,
						...f.body
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
				f = Object(i.b)(g),
				C = ({
					isCommentBoxDesignEnabled: e,
					isTopLevelComment: t,
					children: s
				}) => r.a.createElement("div", {
					className: Object(m.a)(u.a.spacer, {
						[u.a.isCommentBoxDesign]: e,
						[u.a.isTopLevelComment]: t
					})
				}, s),
				y = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				x = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = e => r.a.createElement(C, e, e.isCommentBoxDesignEnabled ? r.a.createElement(x, null) : r.a.createElement(y, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				O = f(v),
				k = Object(o.a)({
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
				w = e => r.a.createElement(k, h({}, e, {
					fallback: r.a.createElement(O, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = w
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
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/loginHref/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				p = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = a.a.div("Wrapper", u.a), g = a.a.span("Copy", u.a), f = a.a.wrapped(l.j, "SignupLink", u.a), C = a.a.wrapped(l.m, "LoginLink", u.a);
			t.a = Object(c.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: o,
				openRegisterModal: a,
				origin: c,
				sendEvent: l
			}) => n.a.createElement(b, {
				className: Object(r.a)(e, {
					[u.a.LiveStreamingWrapper]: t
				})
			}, n.a.createElement(g, {
				className: Object(r.a)({
					[u.a.LiveStreamingCopy]: t
				})
			}, h._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), n.a.createElement(C, {
				href: Object(d.a)(s, c, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), l(Object(m.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Log In", null, {
				hk: "ZR3pC"
			})), n.a.createElement(f, {
				className: Object(r.a)({
					[u.a.LiveStreamingSignupLink]: t
				}),
				href: Object(d.a)(s, c, "/register"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), a(), l(Object(m.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Sign Up", null, {
				hk: "48wH4o"
			}))))
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
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
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
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				f = s("./src/lib/omitHeaders/index.ts"),
				C = s("./src/reddit/constants/headers.ts"),
				y = s("./src/reddit/models/Toast/index.ts");
			const x = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const i = await (async (e, t, s) => Object(g.a)(Object(f.a)(e, [C.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.fb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					s(Object(h.P)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(b.f({
						id: d,
						kind: y.b.SuccessCommunityGreen,
						text: n
					}))
				} else s(b.f({
					id: a,
					kind: y.b.Error,
					text: o.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: o.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: x(e, t)
				}))
			};
			var v = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				w = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				I = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const L = (e, t, s, o, n) => r => ({
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
				T = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				N = e => ({
					subreddit: Object(S.subreddit)(e),
					userSubreddit: Object(S.userSubreddit)(e)
				}),
				M = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...N
				});
			var R = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				F = s("./src/reddit/icons/svgs/Info/index.tsx"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/tooltip.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				K = s.n(H),
				q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const G = Object(w.a)(P.a),
				z = l.a.wrapped(R.b, "DropdownTriangle", K.a),
				Y = l.a.div("HighlightWrapper", K.a),
				Q = l.a.div("Title", K.a),
				J = e => e === q.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === q.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class X extends r.a.Component {
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
						selectedSort: n
					} = this.props;
					return r.a.createElement(Y, null, r.a.createElement(Q, {
						onClick: s
					}, o.fbt._("highlight comments since", null, {
						hk: "3AxAbU"
					})), r.a.createElement(j.b, {
						className: Object(d.a)(K.a.HighlightPicker, K.a.Row),
						displayText: J(n),
						id: t,
						onClick: s
					}), r.a.createElement(z, {
						onClick: s
					}), r.a.createElement(G, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(j.b, {
						displayText: J(q.a.First),
						isSelected: n === q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(j.b, {
						displayText: J(q.a.Last),
						isSelected: n === q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(j.b, {
						displayText: J(q.a.None),
						isSelected: n === q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Z = X;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				se = Object(w.a)(P.a),
				oe = l.a.button("ContestMode", K.a),
				ne = l.a.wrapped(R.b, "DropdownTriangle", K.a),
				re = l.a.wrapped(F.a, "Info", K.a),
				ie = l.a.wrapped(j.b, "Row", K.a),
				ae = l.a.button("SetSort", K.a),
				de = l.a.button("SortLink", K.a),
				ce = l.a.div("Title", K.a),
				le = l.a.wrapped(I.a, "ToggleSwitch", K.a),
				me = l.a.wrapped(k.a, "ViewFullLinkOrOverlayLink", K.a),
				pe = l.a.wrapped(O.c, "Tooltip", K.a),
				ue = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(B.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(A.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(U.b)($),
					highlightIsOpen: Object(U.b)(ee),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(D.j)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					post: V.F,
					postPermalink: V.E,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(W.s)(e),
							o = !!Object(D.j)(e, {
								postId: t
							}),
							n = Object(V.F)(e, {
								postId: t
							});
						return (o || s) && !!n && !!n.previousVisits && n.previousVisits.length > 0
					},
					selectedHighlightSort: B.p
				}),
				he = Object(i.b)(ue, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(p.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(m.h)({
						tooltipId: $
					})),
					onOpenHighlightDropdown: t => {
						e(Object(m.h)({
							tooltipId: ee
						})), t()
					},
					onSetSuggestedSort: s => e(x(t, s)),
					hideTooltip: () => e(Object(m.i)()),
					setContestMode: s => e(Object(h.T)(s, t)),
					showTooltip: () => e(Object(m.h)({
						tooltipId: te
					})),
					toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
				}));
			class be extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, o) => this.props.sendEvent(L(e, this.props.isOverlay, t, s, o)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(T("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(M(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						selectedHighlightSort: f,
						showCommentHighlighter: C,
						sort: y,
						suggestedSort: x,
						showTooltip: O,
						toggleContestModeModal: k
					} = this.props, w = b.contestMode, E = !h.search.includes(c.r.CONFIDENCE), P = y === c.r.CONFIDENCE && E, I = p && !P, S = c.t[y], L = S ? S() : "", N = x && y === x && !P ? this.addSuggestedLabel(L) : L, M = w ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), R = w ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), F = w ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), A = w && !p;
					return r.a.createElement("div", {
						className: Object(d.a)(t, K.a.container, {
							[K.a.hideCommentSort]: !C && A
						}),
						ref: a
					}, !A && r.a.createElement(ce, {
						onClick: this.onOpenDropdownClick
					}, o.fbt._("Sort by", null, {
						hk: "E6T9r"
					})), !A && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie, {
						className: Object(d.a)(K.a.SortPicker, K.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: N,
						id: $,
						noHover: !0,
						skipRoleAttr: !0
					}), r.a.createElement(ne, {
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(se, {
						isOpen: i,
						tooltipId: $
					}, [c.r.CONFIDENCE, c.r.TOP, c.r.NEW, c.r.CONTROVERSIAL, c.r.OLD, c.r.QA].map(e => {
						const t = s || g,
							o = Object(_.b)(t),
							n = c.t[e],
							i = n ? n() : "";
						return r.a.createElement(me, {
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, r.a.createElement(j.b, {
							displayText: i,
							isSelected: y === e,
							skipRoleAttr: !0
						}))
					}))), I && !A && (x ? r.a.createElement(de, {
						onClick: y !== x ? this.setSortOnClick : this.clearSortOnClick
					}, y !== x ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement(ae, null, r.a.createElement(de, {
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: te,
						onMouseEnter: O,
						onMouseLeave: l
					}, r.a.createElement(pe, {
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), r.a.createElement(re, null)))), p && r.a.createElement(oe, {
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(le, {
						on: w
					})), C && r.a.createElement(Z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: T
					}), n && r.a.createElement(v.a, {
						actionText: R,
						headerText: M,
						modalText: F,
						onConfirm: this.setContestMode,
						toggleModal: k,
						withOverlay: !0
					}))
				}
			}
			t.a = he(Object(E.c)(be))
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3XgXkbSTt-EadyaLszfRVf",
				component: "_3XgXkbSTt-EadyaLszfRVf"
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
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G"
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
				commentRedesignUserIconContainerStyles: "_2RMBS5Q81VaTtm4cd463Su",
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
				deleted: "JXi1tOUWoiFa2P02WKo2R",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				commentHeaderRedesign: "_3jJ0c2FXVItDFjup-54-X2",
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
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				isCollapsed: "BjX6VVsz_8JJDN1Ap9_IL",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
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
		"./src/reddit/components/Comments/MoreCommentsItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				u = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = d.a.div("MoreCommentsItemWrapper", u.a), g = d.a.p("MoreComments", u.a), f = d.a.wrapped(g, "MoreCommentsInteractive", u.a), C = Object(i.c)({
				moreCommentsItem: m.D,
				moreCommentsPending: m.E
			}), y = Object(r.b)(C, (e, t) => ({
				moreCommentsClicked: () => e(Object(c.l)(t.commentsPageKey, t.moreCommentsId))
			})), x = ({
				isActive: e,
				moreCommentsClicked: t,
				moreCommentsItem: s,
				moreCommentsPending: o,
				onMoreCommentsItemClick: r,
				count: i
			}) => n.a.createElement(b, null, o ? n.a.createElement(g, null, h._("loading...", null, {
				hk: "47z89"
			})) : n.a.createElement(l.a.Consumer, null, o => n.a.createElement(f, {
				className: Object(a.a)({
					[u.a.isActive]: e
				}),
				onClick: () => {
					i && r ? (r(), o("load_more_comment_live")()) : t && (t(), (null == s ? void 0 : s.isFromLiveWebSocket) ? o("load_more_comment_live")() : o("load_more_comment")())
				}
			}, h._({
				"*": "{number of more replies hidden} more replies",
				_1: "1 more reply"
			}, [h._plural(s ? s.numComments : i || 0, "number of more replies hidden")], {
				hk: "J0jQW"
			}))));
			t.b = y(x)
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
				return _
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
				f = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				C = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				x = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				v = s("./src/reddit/components/Comments/States/index.m.less"),
				O = s.n(v);
			const k = l.a.wrapped(y.a, "CommentsIcon", O.a),
				w = l.a.wrapped(x.a, "SnooFacepalm", O.a),
				E = l.a.p("EmptyTitle", O.a),
				P = l.a.p("ErrorTitle", O.a),
				j = l.a.p("EmptyText", O.a),
				I = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(O.a.StateContainer, e)
				}, a.a.createElement(k, null), a.a.createElement(E, null, t ? o.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : o.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(j, null, o.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				_ = () => a.a.createElement("div", {
					className: O.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(E, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(j, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: O.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(E, null, o.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(u.k, {
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
					className: O.a.StateContainer
				}, a.a.createElement(w, null), a.a.createElement(P, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : o.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(u.i, {
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
					className: Object(c.a)(O.a.StateContainer, O.a.ErrorFullPage)
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
				}, a.a.createElement(p.a, null)), "LoadingFullPage", O.a),
				M = l.a.div("CommentsPlaceholderContainer", O.a),
				R = l.a.div("CommentPlaceholder", O.a),
				F = l.a.div("Avatar", O.a),
				A = l.a.div("VoteColumn", O.a),
				B = l.a.div("TextColumn", O.a),
				D = l.a.wrapped(C.a, "Upvote", O.a),
				V = l.a.wrapped(f.a, "Downvote", O.a),
				U = () => a.a.createElement("div", {
					className: Object(c.a)(O.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(O.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(M, null, r()(10, t => a.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(F, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(A, null, a.a.createElement(D, null), a.a.createElement(V, null)), a.a.createElement(B, null, a.a.createElement(U, null), a.a.createElement(W, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				topLevel: "_3cea2-bu-AjagXhuQfp9Zu",
				commentHeaderRedesign: "jG4sBhex54vPOvOy57LBD",
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
				u = s("./src/reddit/actions/comment/index.ts"),
				h = s("./src/reddit/constants/comments.ts"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/constants/elementClassNames.ts"),
				f = s("./src/reddit/constants/gold.ts"),
				C = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				y = s("./src/reddit/components/LottieAnimation/index.tsx"),
				x = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				v = s.n(x);
			! function(e) {
				e.Lottie = "lottie"
			}(o || (o = {}));
			const O = {
				threshold: [.75, .001]
			};
			var k = a.a.memo(e => {
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
				Object(C.a)(t, r, O);
				const d = e.type;
				return a.a.createElement("div", {
					className: Object(l.a)(v.a.effectContainer, v.a[d + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, d === o.Lottie && a.a.createElement(y.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const w = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: E,
							effectHighlight: {
								type: o.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				E = "ff0000";

			function P(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						o = Math.floor(Math.random() * s.length);
					return s[o] || null
				}(e ? function(e) {
					return e.map(I).filter(e => e !== j)
				}(e) : [])
			}
			const j = {
				glowHexColor: null,
				effectHighlight: null
			};

			function I(e) {
				for (const t of w) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return j
			}
			var _ = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				S = s("./src/reddit/selectors/comments.ts"),
				L = s("./src/reddit/selectors/commentSelector.ts"),
				T = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				F = s("./node_modules/fbt/lib/FbtPublic.js"),
				A = s("./src/reddit/hooks/useTracking.ts"),
				B = s("./src/reddit/models/PostDraft/index.ts"),
				D = s("./src/lib/makeDraftKey/index.ts"),
				V = s("./src/lib/objectSelector/index.ts"),
				U = s("./src/reddit/helpers/trackers/powerups.ts"),
				W = s("./src/reddit/actions/comment/authoring.ts"),
				H = s("./src/reddit/actions/comment/moderation.ts"),
				K = s("./src/reddit/actions/gold/powerups.ts"),
				q = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				G = s("./src/reddit/icons/fonts/helpers.tsx"),
				z = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				Y = s.n(z);
			var Q, J, X = p.a.wrapped(e => a.a.createElement("i", {
					className: `${Object(G.b)("expand",e.isFilled)} ${e.className}`
				}), "Expand", Y.a),
				Z = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				$ = s.n(Z),
				ee = p.a.wrapped(e => a.a.createElement("button", e, a.a.createElement(X, null)), "Component", $.a),
				te = s("./node_modules/lodash/defer.js"),
				se = s.n(te),
				oe = s("./src/reddit/actions/tooltip.ts"),
				ne = s("./src/reddit/selectors/tooltip.ts"),
				re = s("./src/lib/makeCommentPermalink/index.ts"),
				ie = s("./src/reddit/actions/gold/modals.ts"),
				ae = s("./src/reddit/actions/modal.ts"),
				de = s("./src/reddit/actions/reportFlow/index.ts"),
				ce = s("./src/reddit/helpers/correlationIdTracker.ts"),
				le = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				me = s("./src/reddit/helpers/trackers/lightbox.ts"),
				pe = s("./src/reddit/models/Comment/index.ts"),
				ue = s("./src/reddit/selectors/activeModalId.ts"),
				he = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				be = s("./src/reddit/selectors/subreddit.ts"),
				ge = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				fe = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				Ce = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				ye = s.n(Ce);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(Q || (Q = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(J || (J = {}));
			const xe = (e, t) => {
					const s = ye.a[t],
						o = ye.a[e];
					return Object(l.a)(s, o)
				},
				ve = e => Object(l.a)(ye.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[ye.a.isInOverlay]: e.isInOverlay,
					[ye.a.isModModeEnabled]: e.isModModeEnabled,
					[ye.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var Oe = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				ke = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				we = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Ee = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Pe = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				je = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Ie = s("./src/reddit/components/OverflowMenu/index.tsx"),
				_e = s("./src/reddit/components/ReportFlow/index.tsx"),
				Se = s("./src/reddit/components/ReportFlow/new.tsx"),
				Le = s("./src/reddit/components/ShareMenu/index.tsx"),
				Te = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ne = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Me = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Re = s("./src/reddit/helpers/trackers/modTools.ts"),
				Fe = s("./src/reddit/layout/row/Inline/index.tsx"),
				Ae = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				Be = s.n(Ae),
				De = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				Ve = s("./src/reddit/selectors/gold/awardIcon.ts");
			var Ue = e => {
					const t = Object(d.e)(he.b),
						s = Object(d.e)(e => t && Object(Ve.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? a.a.createElement("img", {
						className: Object(l.a)(Be.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : a.a.createElement(De.a, e)
				},
				We = s("./src/reddit/icons/fonts/index.tsx"),
				He = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Ke = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				qe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ge = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ze = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ye = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				Qe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Je = s.n(Qe);
			const Xe = p.a.wrapped(He.a, "CommentIcon", Je.a),
				Ze = p.a.wrapped(ze.a, "Report", Je.a),
				$e = p.a.wrapped(qe.a, "IgnoreReport", Je.a),
				et = p.a.wrapped(Pe.a, "ModActionsMenu", Je.a),
				tt = p.a.div("OverflowMenuSpacer", Je.a),
				st = p.a.wrapped(Ie.a, "DropdownRow", Je.a),
				ot = p.a.wrapped(Fe.a, "Flatlist", Je.a),
				nt = p.a.button("Button", Je.a),
				rt = p.a.wrapped(Oe.a, "ModToolsFlatlist", Je.a),
				it = p.a.wrapped(Ne.a, "ViewReportsDropdown", Je.a),
				at = e => `Comment-${e}--Modal--DeleteComment`,
				dt = e => `Distinguish--Dropdown--${e}`,
				ct = e => `${e}-overflow-menu`,
				lt = e => `View--Reports--${e}`,
				mt = Object(c.c)({
					claimedFreeAward: he.b,
					currentUser: R.j,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(ue.a)(e) === at(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(ne.b)(dt(t.id))(e),
					isCommentFollowEnabled: Ye.a,
					isFollowed: (e, {
						comment: t
					}) => Object(S.z)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(S.B)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(S.C)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(ne.b)(lt(t.id))(e),
					isLoggedIn: R.K,
					postIsArchived: (e, {
						comment: t
					}) => Object(M.z)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(M.A)(e, {
						postId: t.postId
					}),
					postPermalink: (e, {
						comment: t
					}) => Object(M.E)(e, {
						postId: t.postId
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(S.J)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(be.x)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(M.R)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: ge.a
				});
			class pt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(me.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Re.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Re.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Re.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(ce.d)(ce.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Re.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Re.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Re.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: o
						} = this.props;
						e(o ? pe.a.UNFOLLOWED : pe.a.FOLLOWED), t(o ? Object(Re.f)("follow", s.id) : Object(Re.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Re.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(Se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: _e.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : a.a.createElement(_e.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: _e.b,
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
						deleteComment: o,
						depth: n,
						handleReply: r,
						isAvatarsInCommentsEnabled: d,
						isCommentFollowEnabled: c,
						isFollowed: m,
						isLoggedIn: p,
						isPendingDeletion: u,
						onDistinguishComment: h,
						onIgnoreReports: b,
						onToggleReportsDropdown: g,
						moderatorPermissions: f,
						modModeEnabled: C,
						postIsArchived: y,
						postIsLocked: x,
						postPermalink: v,
						renderedInOverlay: O,
						sendEvent: k,
						subreddit: w,
						subredditAboutInfo: E,
						toggleDeleteCommentModal: P,
						toggleSendReplies: j,
						trackCommentClick: I
					} = this.props, _ = Object(le.a)(f), S = !!s && s.displayText === e.author, L = !!s && s.isEmployee, T = !(E && E.userIsBanned) && (x || y || _ && p || e.isLocked ? _ && p : p || d), N = Object(je.a)(e), M = _ && !C && S && !e.bannedBy, R = S && L && !e.bannedBy, A = M || R, B = s && e.isGildable, D = c && !y, V = [];
					T && V.push(a.a.createElement(nt, {
						disabled: u,
						key: "reply",
						onClick: () => {
							r(), se()(() => I("reply", e.id)())
						}
					}, a.a.createElement(Xe, null), F.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), B && V.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(Ue, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => F.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), V.push(a.a.createElement(Le.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: Object(re.a)(v, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: w
					}, a.a.createElement(nt, {
						onClick: () => this.sendCommentEventWithName("share")
					}, F.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), S || V.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(ze.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => F.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), V.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(We.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => F.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => F.fbt._("Save", null, {
							hk: "4lbZXG"
						})
					}), S && V.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(We.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => F.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), D && V.push({
						breakpointGroup: J.LoggedInUser,
						icon: a.a.createElement(We.a, {
							name: "notification",
							isFilled: m
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: m ? () => F.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => F.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const U = V.map(e => a.a.isValidElement(e) ? e : a.a.createElement(nt, {
							className: xe(e.breakpointGroup, Q.HideIfVWSmaller),
							disabled: u,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						W = V.map(e => a.a.isValidElement(e) ? null : a.a.createElement(st, {
							className: xe(e.breakpointGroup, Q.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Je.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement(ot, {
						className: Object(l.a)(ve({
							depth: n,
							isInOverlay: O,
							isModModeEnabled: _ && C,
							isFollowCommentEnabled: D
						}), t)
					}, U, a.a.createElement(tt, {
						className: S ? void 0 : xe(J.LoggedInUser, Q.HideIfVWLarger)
					}, a.a.createElement(Ie.b, {
						className: Je.a.overflowMenu,
						disabled: u,
						dropdownId: ct(e.id),
						onClick: () => k(Object(Re.a)("comment_overflow_menu", e.id))
					}, W, S && a.a.createElement(a.a.Fragment, null, a.a.createElement(st, {
						displayText: F.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Je.a.dropdownRowText
					}, a.a.createElement(We.a, {
						name: "delete"
					})), a.a.createElement(Me.a, {
						text: F.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: j,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(we.a, {
						actionText: F.fbt._("delete", null, {
							hk: "1XDeYp"
						}),
						cancelActionText: F.fbt._("keep", null, {
							hk: "bO09f"
						}),
						headerText: F.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: F.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: o,
						toggleModal: P,
						trackClick: () => {},
						withOverlay: !0
					}), _ && a.a.createElement(a.a.Fragment, null, C && a.a.createElement(rt, {
						className: xe(J.Moderator, Q.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: S
					}), a.a.createElement(et, {
						className: C ? xe(J.Moderator, Q.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => k(Object(Re.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(Ge.a, null), a.a.createElement(fe.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(je.c)(e) && !C && a.a.createElement(ke.a, {
						text: `${N}`,
						onClick: () => {
							g(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: lt(e.id)
					}, a.a.createElement(it, {
						model: e,
						onIgnoreReports: () => {
							b(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: lt(e.id)
					}), e.ignoreReports ? a.a.createElement($e, null) : a.a.createElement(Ze, null)), A && a.a.createElement(ke.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(Ke.a, null), a.a.createElement(Ee.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: L,
						isUserMod: _,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: dt(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var ut = Object(d.b)(mt, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(W.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(ae.i)(at(t.id))), e(Object(oe.h)({
							tooltipId: ct(t.id)
						}))
					},
					handleEdit: () => {
						const o = t.media && t.media.rteMode;
						s && e(Object(W.d)({
							commentId: t.id,
							draftKey: Object(D.a)(B.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: o,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(W.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onCommentFollow: s => e(Object(W.r)(t.id, s)),
					onDistinguishComment: (s, o) => e(Object(H.b)(t.id, s, o)),
					onFollowedCommentExpire: () => e(Object(u.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (s, o) => e(Object(ie.d)({
						awardId: o,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(H.g)(t.id)),
					onReportClick: () => e(Object(de.c)(t.id)),
					onToggleSave: () => e(Object(u.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(oe.h)({
						tooltipId: dt(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(oe.h)({
						tooltipId: lt(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(ae.i)(at(t.id))),
					toggleSendReplies: () => e(Object(W.k)(t.id))
				}))(Object(Te.c)(pt)),
				ht = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				bt = s.n(ht);
			var gt = a.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return a.a.createElement("div", {
						className: bt.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				ft = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				Ct = s.n(ft);
			var yt = a.a.memo(e => a.a.createElement("div", {
					className: Ct.a.gradientHighlightContainer,
					role: "presentation"
				})),
				xt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				vt = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ot = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				kt = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				wt = s("./src/reddit/components/ModModeReports/index.tsx"),
				Et = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Pt = s("./src/reddit/components/RichTextJson/index.tsx"),
				jt = s("./src/reddit/components/UserIcon/index.tsx"),
				It = s("./src/reddit/components/UserIcon/constants.ts"),
				_t = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				St = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				Lt = s("./src/reddit/constants/componentTestIds.ts"),
				Tt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Nt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Mt = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Rt = s("./node_modules/raf/index.js"),
				Ft = s.n(Rt);

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Bt = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Dt = a.a.createContext(!1);
			class Vt extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Ft()(this.setVisible)
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
						...Bt,
						...t
					};
					return a.a.createElement(Mt.a, At({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Dt.Provider, {
						value: s
					}, e)))
				}
			}
			var Ut = s("./src/reddit/controls/ErrorText/index.tsx"),
				Wt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ht = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Kt = s("./src/reddit/helpers/flair.ts"),
				qt = s("./src/reddit/models/Subreddit/index.ts"),
				Gt = s("./src/reddit/models/User/index.ts"),
				zt = s("./src/reddit/models/Vote/index.ts"),
				Yt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Qt = s("./src/reddit/selectors/experiments/econ/index.ts"),
				Jt = s("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				Xt = s("./src/reddit/selectors/gold/powerups/index.ts"),
				Zt = s("./src/reddit/selectors/poll/index.ts"),
				$t = s("./src/reddit/selectors/userPrefs.ts"),
				es = s("./src/reddit/selectors/moderatingComments.ts"),
				ts = s("./src/reddit/components/Comments/Comment/index.m.less"),
				ss = s.n(ts),
				os = s("./src/config.ts");

			function ns() {
				return (ns = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const rs = p.a.wrapped(ee, "ExpandButton", ss.a),
				is = p.a.wrapped(ut, "FlatList", ss.a),
				as = p.a.wrapped(Ut.b, "ErrorText", ss.a),
				ds = p.a.wrapped(Ot.a, "HorizontalVotes", ss.a),
				cs = p.a.div("ActionBar", ss.a),
				ls = p.a.wrapped(xt.a, "TopMeta", ss.a),
				ms = p.a.div("CommentContentWrapper", ss.a),
				ps = p.a.div("CommentWrapper", ss.a),
				us = p.a.div("CommentBody", ss.a),
				hs = p.a.wrapped(kt.b, "AuthorHovercard", ss.a),
				bs = Object(Tt.t)(),
				gs = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(L.a)(e, t),
					currentProfileModPermissions: Tt.g,
					depth: (e, t) => Object(S.j)(e, t),
					collapsed: es.b,
					collapsedBecauseCrowdControl: es.a,
					currentUser: R.j,
					flair: S.e,
					focused: S.t,
					highlightAnimationDisabled: $t.c,
					isAuthorPresent: S.y,
					isEditing: S.A,
					isLoggedIn: R.K,
					isCommentHeaderRedesignEnabled: Qt.d,
					isPendingDeletion: S.C,
					isPresenceConsumptionExpEnabled: Jt.a,
					isPresenceTogglePref: R.ib,
					moderatorPermissions: (e, t) => {
						const s = Object(L.a)(e, t);
						return s ? Object(N.k)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Zt.f,
					shouldShowTopSupporterIcon: (e, t) => {
						const s = Object(L.a)(e, t);
						if (!s) return !1;
						const o = Object(Tt.q)(e, t);
						return !!o && Object(Xt.a)(e, {
							subredditId: o.id,
							userId: s.authorId
						}) && !Object(Qt.g)(e)
					},
					modModeEnabled: Tt.Q,
					errorMsgs: S.H,
					replyFormOpen: S.K,
					subreddit: Tt.q,
					subredditType: S.M
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: o,
					trackCommentClick: n
				}) => ({
					onCollapseClick: () => e(Object(u.o)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: o
					})),
					onIgnoreReports: () => e(Object(H.g)(t)),
					onOpenPowerupsModal: () => e(Object(K.d)("comment_top_supporter_badge")),
					onVoteClick: s => {
						const [o, r] = s === zt.a.upvoted ? [Object(u.q)(t), "upvote_comment"] : [Object(u.j)(t), "downvote_comment"];
						n(r, t)(), e(o)
					}
				})),
				fs = Object(V.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Cs = e => a.a.createElement("div", e, e.children),
				ys = e => a.a.createElement(a.a.Fragment, null, e.children),
				xs = bs(gs(e => {
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
						highlightAnimationDisabled: f,
						highlightTreatment: C,
						isActive: y,
						isAuthorPresent: x,
						isAvatarsInCommentsEnabled: v,
						isCommentHeaderRedesignEnabled: O,
						isEditing: w,
						isFirstInList: E,
						isHighlighted: P,
						isLoggedIn: j,
						isPendingDeletion: I,
						isPresenceConsumptionExpEnabled: _,
						isPresenceTogglePref: S,
						shouldShowTopSupporterIcon: L,
						moderatorPermissions: T,
						modModeEnabled: N,
						onCollapseClick: M,
						onIgnoreReports: R,
						onLineMouseOver: V,
						onVoteClick: H,
						onOpenPowerupsModal: K,
						prediction: G,
						replyFormOpen: z,
						subreddit: Y,
						trackCommentClick: Q,
						renderedInOverlay: J,
						subredditType: X,
						onPresenceIndicatorInViewport: Z
					} = e, $ = Object(A.a)(), ee = o.isDeleted, te = !w && !ee && !!u && u.length > 0, se = Object(D.a)(B.c.edit, o.id), oe = Object(D.a)(B.c.replyToComment, o.id), ne = Object(le.a)(T), re = o.authorIsContractor && X === qt.f.EmployeesOnly, ie = o.isLocked, ae = ne && N, de = !w && !ee && (j || v), ce = !!m && Object(Gt.e)(m) === o.author, [me, ue] = Object(i.useState)(null), [he, be] = Object(i.useState)(null), ge = Object(pe.f)(o) ? Cs : Wt.a, fe = Object(pe.f)(o) ? ys : hs;
					Object(i.useEffect)(() => {
						if (!w && !ee && (g && ue(a.a.createElement(yt, null)), null !== C)) {
							if (C.glowHexColor) {
								const e = C.glowHexColor;
								ue(a.a.createElement(gt, {
									hexColor: e
								}))
							}
							if (C.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = C.effectHighlight;
								be(a.a.createElement(k, {
									prefersReducedAnimation: f,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [w, ee, g, f, C]);
					const Ce = Object(i.useContext)(Dt),
						ye = _ && !ee && !Object(pe.f)(o) && (ce && S || !ce && x),
						xe = Object(i.useCallback)(() => {
							ye && !ce && Z && Z(o.id)
						}, [o.id, Z, ye, ce]),
						ve = Object(_t.a)(o);
					return a.a.createElement(ps, {
						className: Object(l.a)(`Comment ${o.id}`, ss.a.CommentWrapper, {
							[ss.a.highlightComment]: P,
							[ss.a.deleted]: ee,
							[ss.a.focused]: b,
							[ss.a.redesign]: v,
							[ss.a.topLevel]: !p,
							[ss.a.commentHeaderRedesign]: O
						})
					}, me, he, !w && !ee && E && a.a.createElement("div", {
						className: ss.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${os.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), (r || O) && a.a.createElement(rs, {
						className: Object(l.a)(o.id, {
							[ss.a.commentHeaderRedesign]: O,
							[ss.a.hidden]: !r,
							[ss.a.visible]: r
						}),
						onClick: () => {
							s(), M(), Q("collapse", o.id)()
						},
						onMouseOver: () => V(o.id),
						onMouseOut: s
					}), (!r || O) && a.a.createElement(fe, {
						alwaysShowChildren: !0,
						hoverDivClassName: ss.a.AuthorHoverDiv,
						postOrComment: o,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: J ? Et.c.Lightbox : void 0
					}, a.a.createElement(ge, {
						className: Object(l.a)(ss.a.UserIconContainer, {
							[ss.a.commentHeaderRedesign]: O
						}),
						to: `/user/${o.author}/`
					}, Ce ? a.a.createElement(jt.a, {
						className: ss.a.UserIcon,
						iconUrl: o.profileImage,
						isNSFW: o.profileOver18 || !1,
						nsfwIconUrl: It.a,
						userName: o.author,
						isHighlighted: P,
						shouldShowPresenceIndicator: ye,
						onPresenceIndicatorInViewport: xe
					}) : a.a.createElement("div", {
						className: ss.a.UserIcon
					}), L && a.a.createElement(St.a, {
						onClick: e => {
							$(Object(U.r)("comment")), K(), e.stopPropagation(), e.preventDefault()
						},
						className: ss.a.topSupporterIcon,
						title: F.fbt._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						})
					}))), a.a.createElement(ms, {
						className: Object(l.a)({
							[ss.a.isActive]: y,
							[ss.a.isCollapsed]: r,
							[ss.a.isLocked]: ie && ae,
							[ss.a.isPendingDeletion]: I,
							[ss.a.isRemoved]: !!o.bannedBy && ae,
							[ss.a.commentHeaderRedesign]: O
						})
					}, a.a.createElement(Ht.a, null, F.fbt._("level {depth}", [F.fbt._param("depth", p + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(ls, {
						childrenInfo: t,
						className: Object(l.a)({
							[ss.a.collapsed]: r,
							[ss.a.commentHeaderRedesign]: O,
							[ss.a.noFlair]: Object(Kt.o)(h || null)
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						comment: o,
						commentsPageKey: n,
						flair: h,
						isPostComment: !0,
						renderedInOverlay: J,
						renderContractorBadge: re
					}), !r && a.a.createElement(i.Fragment, null, w && a.a.createElement(q.a, {
						className: Object(l.a)(ss.a.EditCommentForm, ss.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: B.c.edit,
						draftKey: se,
						rtJson: Object(_t.a)(o),
						mediaMetadata: o.media && o.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: e => Object(W.i)({
							id: o.id,
							commentsPageKey: n,
							depth: p,
							draftKey: se,
							formData: e
						}),
						submitButtonText: F.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !w && !ee && a.a.createElement(us, {
						"data-test-id": Lt.d
					}, G ? a.a.createElement(vt.a, {
						comment: o,
						prediction: G
					}) : a.a.createElement(Pt.a, {
						content: ve,
						mediaMetadata: o.media && o.media.mediaMetadata,
						rtJsonElementProps: fs(e)
					}), a.a.createElement(Yt.b, {
						content: ve
					})), N && ne && Object(je.c)(o) && a.a.createElement(wt.a, {
						onIgnoreReports: R,
						reportable: o
					}), de && a.a.createElement(cs, null, v && a.a.createElement(ds, {
						downvoteButtonClassName: ss.a.voteButton,
						downvoteClassName: ss.a.upDownVote,
						model: o,
						onVoteClick: H,
						scoreClassName: ss.a.score,
						upvoteButtonClassName: ss.a.voteButton,
						upvoteClassName: ss.a.upDownVote
					}), a.a.createElement(is, {
						comment: o,
						commentsPageKey: n,
						depth: p,
						isAvatarsInCommentsEnabled: v,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: N,
						moderatorPermissions: c || T,
						renderedInOverlay: J,
						isCommentFocused: b,
						subreddit: Y,
						trackCommentClick: Q
					})), te && u.map(e => a.a.createElement(as, {
						key: e
					}, e)), z && a.a.createElement(q.a, {
						className: Object(l.a)(ss.a.EditCommentForm, ss.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: p,
						draftType: B.c.replyToComment,
						draftKey: oe,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(W.s)({
							commentsPageKey: n,
							draftKey: oe,
							parentCommentDepth: p,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}) : Object(W.l)({
							commentsPageKey: n,
							draftKey: oe,
							parentCommentDepth: p,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: F.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var vs = e => a.a.createElement(Nt.a.Consumer, null, t => a.a.createElement(xs, ns({}, e, {
					trackCommentClick: t
				}))),
				Os = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				ks = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ws = s("./src/reddit/helpers/path/index.ts"),
				Es = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Ps = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				js = s.n(Ps);
			const {
				fbt: Is
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _s = p.a.div("Wrapper", js.a), Ss = p.a.wrapped(Es.a, "ArrowRight", js.a), Ls = p.a.wrapped(Os.a, "LinkOrOverlayLink", js.a), Ts = p.a.span("HoverSpan", js.a), Ns = Object(c.c)({
				permalink: (e, t) => Object(S.m)(e, {
					commentId: Object(S.r)(e, t).parentId
				})
			});
			var Ms = Object(d.b)(Ns)(Object(ks.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement(_s, {
					className: Object(l.a)({
						[js.a.isActive]: e
					})
				}, a.a.createElement(Ls, {
					isOverlay: !!t,
					to: Object(ws.b)(s)
				}, a.a.createElement(Ts, null, Is._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(Ss, null))))),
				Rs = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				Fs = s("./node_modules/lodash/times.js"),
				As = s.n(Fs),
				Bs = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Ds = s.n(Bs);
			const Vs = p.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: g.m
				})), "Line", Ds.a),
				Us = p.a.div("LineContainer", Ds.a),
				Ws = p.a.div("ShortLineContainer", Ds.a);
			var Hs = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: o,
						onLineClick: n,
						onLineMouseOver: r,
						onLineMouseOut: i,
						onShortLineClick: c,
						parentNodeIds: m,
						type: p
					} = e, u = Object(d.e)(Qt.d);
					return a.a.createElement(Us, null, As()(s + 1, e => e === s ? p !== h.a.Comment || t ? null : a.a.createElement(Ws, {
						key: m[e]
					}, a.a.createElement(Vs, {
						className: Object(l.a)(m[e], {
							[Ds.a.hasGlowBorder]: !!o,
							[Ds.a.topLevel]: 0 === s,
							[Ds.a.commentHeaderRedesign]: u
						}),
						onClick: c,
						onMouseOver: () => r(m[e]),
						onMouseOut: () => i(m[e])
					})) : a.a.createElement(Vs, {
						className: m[e],
						key: m[e],
						onClick: n(e),
						onMouseOver: () => r(m[e]),
						onMouseOut: () => i(m[e])
					})))
				},
				Ks = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				qs = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				Gs = s.n(qs);
			const zs = p.a.div("CommentListNodeWrapper", Gs.a),
				Ys = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(g.f)
				},
				Qs = () => {
					const e = document.querySelectorAll(`.${g.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(g.f)
				};
			var Js = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(es.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(S.l)(e, t),
				depth: (e, t) => Object(S.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const o = Object(S.l)(e, {
						commentLink: t
					});
					if (o && t.type === h.a.Comment) {
						s = P(o.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: Ks.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(S.l)(e, {
						commentLink: t
					});
					return !(t.type !== h.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(T.a)(e, t);
						return s && s.coinPrice >= f.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(S.p)(e);
					if (s === _.a.None) return !1;
					if (t.type !== h.a.Comment) return !1;
					const o = t.id,
						n = Object(L.a)(e, {
							commentId: o
						});
					if (!n) return !1;
					const r = Object(R.s)(e),
						i = !!Object(N.j)(e, {
							postId: n.postId
						}),
						a = Object(M.F)(e, {
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
					e(Object(u.d)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: n,
						scrollToAndRemeasure: o
					}))
				},
				onShortLineClick: () => e(Object(u.o)({
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
					isHidden: g,
					isHighlighted: f,
					onLineClick: C,
					onPresenceIndicatorInViewport: y,
					onShortLineClick: x,
					parentNodeIds: v,
					renderedInOverlay: O,
					scrollToAndRemeasure: k
				} = e, w = !!p, E = !(!d || !d.glowHexColor), P = E && i > 0, j = E, I = a.a.createElement(zs, {
					className: Object(l.a)(s, {
						[Gs.a.isHidden]: g,
						[Gs.a.glowBorderTopPadding]: P,
						[Gs.a.glowBorderBottomPadding]: j
					}),
					id: n.id,
					style: {
						paddingLeft: i * (b.w + b.v) + (n.type === h.a.Comment ? b.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(Hs, {
					collapsed: o,
					depth: i,
					hasGlowBorder: P,
					onLineClick: C,
					onLineMouseOver: Ys,
					onLineMouseOut: Qs,
					onShortLineClick: x,
					type: n.type,
					parentNodeIds: v
				}), Xs({
					childrenInfo: t,
					clearHovered: Qs,
					commentLink: n,
					commentsPageKey: r,
					onLineMouseOver: Ys,
					hasAwardGradient: w,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: u,
					isHighlighted: f,
					renderedInOverlay: O,
					scrollToAndRemeasure: k,
					onPresenceIndicatorInViewport: y
				}));
				return m && n.type === h.a.Comment ? a.a.createElement(Vt, null, I) : I
			});
			const Xs = ({
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
				renderedInOverlay: p,
				scrollToAndRemeasure: u,
				onPresenceIndicatorInViewport: b
			}) => {
				switch (s.type) {
					case h.a.Comment:
						return a.a.createElement(vs, {
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
							renderedInOverlay: p,
							scrollToAndRemeasure: u,
							onPresenceIndicatorInViewport: b
						});
					case h.a.MoreComments:
						return a.a.createElement(Rs.b, {
							commentsPageKey: o,
							isActive: i,
							moreCommentsId: s.id
						});
					case h.a.ContinueThread:
						return a.a.createElement(Ms, {
							id: s.id,
							isActive: i
						})
				}
			};
			var Zs = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				$s = s("./src/reddit/components/Comments/States/index.tsx"),
				eo = s("./src/reddit/components/Scroller/Simple.tsx"),
				to = s("./src/reddit/constants/elementIds.ts"),
				so = s("./src/reddit/featureFlags/index.ts"),
				oo = s("./src/reddit/helpers/commentList/index.ts"),
				no = s("./src/reddit/helpers/trackers/comment.ts"),
				ro = s("./src/reddit/selectors/realtimeComments.ts"),
				io = s("./src/telemetry/index.ts"),
				ao = s("./src/lib/LRUCache/index.ts"),
				co = s("./src/reddit/actions/comment/websocket/index.ts"),
				lo = s("./src/reddit/components/Comments/index.m.less"),
				mo = s.n(lo);
			const po = b.f + 10,
				uo = 65,
				ho = p.a.wrapped(eo.b, "Scroller", mo.a),
				bo = Object(c.c)({
					allCollapsed: S.a,
					commentLinks: S.k,
					commentThreadLinkSet: S.o,
					isRealtimeCommentsExperimentEnabled: ro.a,
					liveCommentsWebsocket: M.D,
					measureScrollFPS: so.d.measureScrollFPS,
					moreComments: S.b,
					postPermalink: M.E
				}),
				go = Object(d.b)(bo, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(u.e)(t)),
					onCommentLeftViewport: (t, s) => e(Object(u.h)(t, s)),
					onLiveCommentsEnd: (t, s) => e(Object(co.b)(t, s)),
					onLiveCommentsSubscribe: (s, o, n) => e(Object(co.a)(s, o, n, t.subredditId))
				})),
				fo = new ao.a(500),
				Co = new ao.a(500),
				yo = (e, t) => {
					const s = `entered-${e}`;
					let o = fo.get(s);
					return void 0 === o && (o = () => {
						t.onCommentEnteredViewport(e)
					}, fo.set(s, o)), o
				},
				xo = (e, t) => {
					const s = `left-${e}`;
					let o = Co.get(s);
					return void 0 === o && (o = s => {
						t.onCommentLeftViewport(e, s)
					}, Co.set(s, o)), o
				};
			class vo extends a.a.Component {
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
						}), this.props.sendEvent(Object(no.b)(e)))
					}, this.parentNodeIdsMap = {}, Zs.c(), this.childrenInfoMap = {}, this.state = {
						isPresenceEventSent: !1
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						commentLinks: t,
						commentsPageKey: s,
						allCollapsed: o,
						commentThreadLinkSet: n,
						isRealtimeCommentsExperimentEnabled: r,
						liveCommentsWebsocket: i,
						moreComments: a,
						onLiveCommentsSubscribe: d,
						postId: c
					} = this.props;
					this.timerId && io.c.cancel(this.timerId), t.length && (this.timerId = io.c.start()), r && i && d && !e && (d(s, i, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = i), this.findHiddenNodes(t, o, n, a)
				}
				componentDidMount() {
					this.timerId && Object(io.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: io.c.end(this.timerId)
					})
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
					this.timerId && io.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = io.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(io.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: io.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					const {
						commentId: e,
						isRealtimeCommentsExperimentEnabled: t,
						onLiveCommentsEnd: s
					} = this.props;
					this.timerId && io.c.cancel(this.timerId), t && this._subscribedPostId && this._subscribedLiveCommentsWebsocket && s && !e && s(this._subscribedLiveCommentsWebsocket, this._subscribedPostId)
				}
				findHiddenNodes(e, t, s, o) {
					if (!t || !Object.keys(t).length) return;
					let n = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					Zs.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						n && (s[c.id].depth > r ? (Zs.a(c.id), i += Object(oo.d)(c, o), c.type === h.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[n] = {
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
						renderedInOverlay: r
					} = this.props, i = yo(e.id, {
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n
					}), d = xo(e.id, {
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n
					});
					return {
						estHeight: Zs.b(e.id) ? 0 : uo,
						id: e.id,
						trackOnEnteredViewport: i,
						trackOnExitedViewport: d,
						render: ({
							placeholderRecommended: o,
							height: n,
							width: i,
							scrollToAndRemeasure: d
						}) => o ? a.a.createElement("div", {
							style: {
								height: n,
								backgroundColor: "#fff"
							}
						}) : a.a.createElement(Js, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: Zs.b(e.id),
							scrollToAndRemeasure: d,
							renderedInOverlay: !!r,
							parentNodeIds: this.getParentNodeIds(e),
							onPresenceIndicatorInViewport: this.onPresenceIndicatorInViewport
						})
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: o,
						renderedInOverlay: n
					} = this.props;
					let r;
					if (o) {
						r = `comments-${n?"lightbox":"page"}`
					}
					const i = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(ho, {
						className: Object(l.a)(mo.a.Scroller, e),
						disableScrollCache: n,
						key: s,
						getContainer: () => n ? document.getElementById(to.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: po,
						trackingName: r
					}, i)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement($s.g, {
						link: this.props.postPermalink
					}) : a.a.createElement($s.c, null)
				}
			}
			t.a = go(Object(Te.c)(vo))
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
				f = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				C = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				y = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				v = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				O = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				k = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				w = s("./src/reddit/featureFlags/component.tsx"),
				E = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				P = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/selectors/experiments/postSeo.ts"),
				I = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				T = s.n(L);
			const N = Object(w.a)("spPoints", h.a),
				M = Object(w.a)("spLeaderboard", b.a),
				R = Object(o.a)({
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
					isLoggedIn: S.K,
					postSEOV2IdCardVariant: j.i,
					shouldShowReredditPromo: I.a,
					widgets: Object(p.a)(_.s)
				}),
				A = Object(d.b)(F);
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
					} = this.props, d = !Object(j.d)(i) && !Object(j.g)(i);
					return a.a.createElement(x.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(C.a, {
							postId: n.id,
							isOverlay: s,
							listingName: o,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: E.a.BOTTOM,
							refreshKey: n.id,
							sizes: m.n,
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
					const b = Object(j.d)(r) || Object(j.g)(r),
						x = a.a.createElement(C.a, {
							postId: n.id,
							isOverlay: o,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: E.a.FIRST,
							refreshKey: n.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(T.a.outerWrapper, e)
					}, Object(P.p)(n) ? a.a.createElement(R, {
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
					}), a.a.createElement(f.a, {
						subredditId: d
					}), x, s && p.map((e, t) => a.a.createElement(y.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(k.a, {
						subredditName: c,
						widget: e
					}))), n.isSponsored && a.a.createElement(y.a, null, a.a.createElement(v.a, null)), i && a.a.createElement(O.a, {
						directoryTimestamp: n.created,
						postId: n.id
					}), this.renderFooter(h++))
				}
			}
			t.a = A(B)
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
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				f = s.n(g);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = "500px", x = 3, v = Object(i.c)({
				hasDismissedTruncation: u.b,
				isGQLLoggedIn: b.J,
				isLoggedIn: b.K,
				isPostSEOEligible: h.f,
				postSEOV2TruncatedVariant: h.j
			}), O = Object(r.b)(v);
			class k extends n.a.Component {
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
						numberOfComments: g,
						onClick: v,
						subredditOrProfile: O
					} = this.props, k = !(!O || Object(m.h)(O)), w = d && k && (g >= x && !b || !r) && (!u && !h), E = w && !e, P = w ? f.a.TruncatedComments : "";
					return n.a.createElement("div", {
						onClick: v,
						ref: i
					}, n.a.createElement("div", {
						className: Object(a.a)(f.a.ContentWrapper, s, P),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: w ? y : "unset"
						}
					}, t), E && n.a.createElement(l.i, {
						className: f.a.MoreCommentsButton,
						onClick: o,
						"data-redditstyle": !0
					}, C._("View Entire Discussion ({number of comments} Comments)", [C._param("number of comments", Object(c.b)(g))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(d.a)(O(k))
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
				importAsync: () => Promise.all([s.e("vendors~ClaimFreeAwardModal~CollectionCommentsPage~CommentsPage~PowerupSuccessModal~SubredditWelcome~bbbfd142"), s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
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
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				postId: e
			}) => {
				const t = Object(i.e)(t => Object(c.F)(t, {
					postId: e
				}));
				if (!(null == t ? void 0 : t.predictionTournament)) return null;
				const s = t.predictionTournament,
					n = s.status === d.a.Live,
					l = s.status === d.a.Closed;
				return r.a.createElement("div", {
					className: m.a.container
				}, r.a.createElement("h3", {
					className: m.a.title
				}, s.name), r.a.createElement("div", {
					className: m.a.label
				}, p._("Predictions Tournament", null, {
					hk: "sZ4UO"
				}), n && r.a.createElement("span", {
					className: Object(o.a)(m.a.badge, m.a.live)
				}, p._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(o.a)(m.a.badge, m.a.ended)
				}, p._("Ended", null, {
					hk: "4s3hco"
				}))), r.a.createElement(a.a, {
					className: m.a.awards,
					thing: t
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
					title: d
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
				}), o ? n.a.createElement(c, null, o) : n.a.createElement(c, null), n.a.createElement(l, null, n.a.createElement("div", {
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
				f = Object(a.c)({
					subreddit: p.A,
					subredditAboutInfo: p.x
				}),
				C = Object(i.b)(f);
			t.a = C(e => {
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
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lottie-web/build/player/lottie.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/LottieAnimation/util.ts");
			const d = i.a.memo(e => {
				const t = i.a.createRef(),
					{
						assetData: s,
						assetUrl: o,
						className: d,
						hidden: c,
						loop: l,
						onClick: m,
						prefersReducedAnimation: p
					} = e,
					[u, h] = Object(r.useState)(s);
				Object(r.useEffect)(() => {
					o ? Object(a.a)(o).then(h) : s && h(s)
				}, [o, s]);
				const [b, g] = Object(r.useState)(null);
				Object(r.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || b || !u) return;
					const s = n.a.loadAnimation({
						autoplay: !1,
						loop: l,
						container: e,
						animationData: u
					});
					g(s)
				}, [l, t, b, u]), Object(r.useEffect)(() => {
					if (b)
						if (c) b.stop();
						else if (p) {
						const e = b.getDuration(!0);
						b.goToAndPlay(e, !0)
					} else b.goToAndPlay(0)
				}, [c, p, b]);
				const f = Object(r.useCallback)(() => {
					b && b.goToAndPlay(0)
				}, [b]);
				return i.a.createElement("div", {
					className: d,
					style: {
						display: c ? "none" : "block"
					},
					ref: t,
					onClick: m || f
				})
			});
			t.a = d
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./src/reddit/components/ImageWithFallback/index.tsx");
			const o = {};

			function n(e) {
				let t = o[e];
				return t || (t = o[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
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
				templatePlaceholderImage: f,
				shouldShowFollowButton: C,
				isFollowed: y,
				onFollowPostClick: x
			}) => {
				return Object(p.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(i.a)(b.a.thumbnailContainer, {
						[b.a.mShowingButtonOrOverflow]: C || h
					})
				}, n.a.createElement("div", {
					className: b.a.thumbnailContainerRow
				}, C && n.a.createElement(a.a, {
					isFilled: !!y,
					onClick: x,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && g && n.a.createElement(d.a, {
					className: b.a.subscribeButton,
					getEventFactory: e => Object(m.g)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(u.h)(g) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), n.a.createElement(c.a, {
					crosspost: e,
					post: t,
					redditStyle: o,
					forceShowNSFW: s,
					templatePlaceholderImage: f
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
				chain: "vLpzNkGe1yVXuRgtBVQWk",
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
			var o = s("./src/reddit/selectors/experiments/econ/index.ts"),
				n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				h = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				f = s("./src/reddit/models/User/index.ts"),
				C = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				x = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/trackers/lightbox.ts"),
				k = s("./src/reddit/helpers/trackers/post.ts"),
				w = s("./src/reddit/actions/tooltip.ts"),
				E = s("./node_modules/lodash/find.js"),
				P = s.n(E),
				j = s("./node_modules/react-motion/lib/react-motion.js");
			const I = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				_ = {},
				S = (e = [], t) => {
					const s = P()(e, {
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
			class L extends a.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), _), this.state = {
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
					return a.a.createElement(j.TransitionMotion, {
						styles: e => S(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => a.a.createElement("div", {
						className: s
					}, e.map(e => a.a.createElement("div", {
						key: e.key,
						style: e.style
					}, o))))
				}
			}
			var T = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Post/index.ts"),
				M = s("./src/reddit/models/Vote/index.ts"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/experiments/categories.ts"),
				A = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				B = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/postCreations.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				K = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				q = s("./src/reddit/components/AwardBadges/index.tsx"),
				G = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				z = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				Y = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				Q = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				J = s("./src/reddit/components/ExpandoButton/index.tsx"),
				X = s("./src/reddit/components/FlairWrapper/index.tsx"),
				Z = s("./src/reddit/components/Flatlist/index.tsx"),
				$ = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				ee = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				te = s("./src/reddit/components/ModModeReports/index.tsx"),
				se = s("./src/reddit/components/ModModeReports/helpers.ts"),
				oe = s("./src/reddit/components/NotificationButton/index.tsx"),
				ne = s("./src/reddit/components/PostContainer/index.tsx"),
				re = s("./src/higherOrderComponents/makeAsync.tsx"),
				ie = s("./src/lib/loadWithRetries/index.ts"),
				ae = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const de = Object(re.a)({
				ErrorComponent: () => a.a.createElement(ae.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ie.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => a.a.createElement(ae.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var ce = e => a.a.createElement(de, e),
				le = s("./src/reddit/components/PostList/index.tsx"),
				me = s("./src/reddit/components/PostMedia/index.tsx"),
				pe = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ue = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				he = s("./src/reddit/components/PostTitle/index.tsx"),
				be = s("./src/reddit/components/PostTopLine/index.tsx"),
				ge = s("./src/reddit/components/PostTopMeta/index.tsx"),
				fe = s("./src/reddit/components/SourceLink/index.tsx"),
				Ce = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ye = s("./src/reddit/constants/componentTestIds.ts"),
				xe = s("./src/reddit/constants/postLayout.ts"),
				ve = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Oe = s("./src/reddit/helpers/postEvent.ts"),
				ke = s("./src/reddit/selectors/experiments/postCommentFollow.ts"),
				we = s("./src/reddit/selectors/postFlair.ts"),
				Ee = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Pe = s("./src/reddit/constants/colors.ts"),
				je = s("./src/config.ts"),
				Ie = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				_e = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				Se = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Le = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Te = s.n(Le);
			const {
				fbt: Ne
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Me = () => Ne._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Ne._param("=User Agreement", a.a.createElement("a", {
				className: Te.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, Ne._("User Agreement", null, {
				hk: "3MHgRl"
			}))), Ne._param("=Content Policy", a.a.createElement("a", {
				className: Te.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, Ne._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), Re = () => Ne._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Ne._param("=User Agreement", a.a.createElement("a", {
				className: Te.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, Ne._("User Agreement", null, {
				hk: "yMHtU"
			}))), Ne._param("=Content Policy", a.a.createElement("a", {
				className: Te.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, Ne._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			});
			var Fe = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: o,
					subredditName: n
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return Ne._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case N.g.Author:
							return Ne._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case N.g.AuthorDeleted:
							return Ne._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case N.g.AutomodFiltered:
							return Ne._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case N.g.CommunityOps:
							return Ne._("This post was removed by Reddit admin, u/{username}.", [Ne._param("username", t)], {
								hk: "34nHWu"
							});
						case N.g.ContentTakedown:
							return Ne._("This post was removed by Reddit.", null, {
								hk: "3uR3iw"
							});
						case N.g.CopyrightTakedown:
							return Ne._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case N.g.Moderator:
							return Ne._("This post was removed by r/{subredditName} moderator, u/{username}.", [Ne._param("subredditName", s), Ne._param("username", t)], {
								hk: "270bcn"
							});
						case N.g.Reddit:
							return Ne._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return Ne._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(o, s, n) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return Ne._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case N.g.Author:
							return Ne._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case N.g.AuthorDeleted:
							return Ne._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case N.g.AutomodFiltered:
							return Ne._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case N.g.CommunityOps:
							return Ne._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case N.g.ContentTakedown:
							return Ne._("Sorry, this post was removed by Reddit.", null, {
								hk: "3XSuKc"
							});
						case N.g.CopyrightTakedown:
							return Ne._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case N.g.Moderator:
							return Ne._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [Ne._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case N.g.Reddit:
							return Ne._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return Ne._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(o, n), i = t ? (e => {
					switch (e) {
						case N.g.AntiEvilOps:
							return a.a.createElement(Me, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return Ne._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case N.g.AutomodFiltered:
							return Ne._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case N.g.CommunityOps:
							return Ne._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [Ne._param("=just ask", a.a.createElement("a", {
								className: Te.a.link,
								href: `${je.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, Ne._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case N.g.ContentTakedown:
							return a.a.createElement(Re, null);
						case N.g.CopyrightTakedown:
							return Ne._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case N.g.Moderator:
							return Ne._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case N.g.Reddit:
							return Ne._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return Ne._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(o) : ((e, t) => {
					switch (e) {
						case N.g.AntiEvilOps:
							return a.a.createElement(Me, null);
						case N.g.AuthorDeleted:
						case N.g.Author:
							return Ne._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case N.g.AutomodFiltered:
							return Ne._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [Ne._param("=[subreddit name]", a.a.createElement("a", {
								className: Te.a.link,
								href: `${je.a.redditUrl}/r/${t}`,
								target: "_blank",
								rel: "noopener noreferrer"
							}, Ne._("{subreddit name}", [Ne._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case N.g.CommunityOps:
							return Ne._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case N.g.ContentTakedown:
							return a.a.createElement(Re, null);
						case N.g.CopyrightTakedown:
							return Ne._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case N.g.Moderator:
							return Ne._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case N.g.Reddit:
						default:
							return Ne._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), d = t ? Pe.b.warning : Pe.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case N.g.AntiEvilOps:
						case N.g.AutomodFiltered:
						case N.g.CommunityOps:
						case N.g.ContentTakedown:
						case N.g.CopyrightTakedown:
						case N.g.Reddit:
							t = Ie.a;
							break;
						case N.g.AuthorDeleted:
						case N.g.Author:
							t = Se.b;
							break;
						case N.g.Moderator:
							t = _e.a;
							break;
						default:
							t = Ie.a
					}
					return a.a.createElement(t, {
						className: Te.a.icon
					})
				})(o);
				return a.a.createElement(Ee.a, {
					className: Te.a.BannerBase,
					color: d,
					icon: c,
					subtitle: i,
					title: r
				})
			};

			function Ae(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return a.a.createElement(a.a.Fragment, null, o && s.removedByCategory && a.a.createElement(Fe, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var Be = s("./node_modules/fbt/lib/FbtPublic.js"),
				De = s("./src/lib/prettyPrintNumber/index.ts"),
				Ve = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Ue = s.n(Ve);
			var We = ({
					post: e,
					showViewCount: t
				}) => {
					const {
						upvotePercentString: s,
						viewCountString: o
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(De.b)(e.viewCount);
						return {
							upvotePercentString: Be.fbt._("{percent upvoted}% Upvoted", [Be.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Be.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Be.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(e), n = t && !!e.viewCount;
					return a.a.createElement("div", {
						className: Ue.a.viewCounts
					}, n && a.a.createElement("span", null, o), n && !!e.upvoteRatio && a.a.createElement("span", {
						className: Ue.a.dotSpacer
					}), !!e.upvoteRatio && a.a.createElement("span", null, s))
				},
				He = s("./src/reddit/components/PostContent/index.m.less"),
				Ke = s.n(He);
			const {
				fbt: qe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ge = u.a.wrapped(he.c, "PostTitle", Ke.a), ze = u.a.wrapped(J.a, "ExpandoButton", Ke.a), Ye = u.a.wrapped(L, "ClassicExpandoMotion", Ke.a), Qe = u.a.wrapped(Z.c, "FullWidthFlatlist", Ke.a), Je = a.a.createElement("p", {
				className: Ke.a.VideoProcessingStatus
			}, qe._("Your video is processing. We'll send you a notification when it's done.", null, {
				hk: "1R8rKB"
			})), Xe = Object(ve.t)({
				isCommentsPage: ve.w,
				pageLayer: e => e
			}), Ze = Object(d.b)(() => Object(l.c)({
				activeModalId: R.a,
				flairStyleTemplate: ve.S,
				currentUser: W.j,
				crosspost: U.d,
				hideNSFWPref: W.C,
				imageGalleryCurrentItem: U.i,
				isAdminOrMod: (e, t) => {
					const s = Object(U.R)(e, {
						postId: t.postId
					});
					return !!s && Object(B.a)(e, {
						subredditId: s.id
					})
				},
				isCurrentUserProfilePost: U.k,
				isExpanded: U.l,
				isFollowed: U.s,
				isFollowedExpired: U.n,
				isPostFollowEnabled: ke.b,
				post: U.F,
				moderatorPermissions: D.j,
				modModeEnabled: ve.Q,
				isInCategoriesExperiment: F.a,
				showAwardsPlaque: A.a,
				showEditFlair: we.a,
				subredditOrProfile: U.R,
				isEditing: V.K,
				userIsOp: W.qb
			}), (e, {
				pageLayer: t,
				postId: s
			}) => ({
				onIgnoreReports: () => e(Object(b.X)(s)),
				onOpenReportsDropdown: t => e(Object(w.h)({
					tooltipId: t
				})),
				onVoteClick: t => {
					const o = t === M.a.upvoted ? Object(b.bb)(s) : Object(b.u)(s);
					e(o)
				},
				fireAdPixelsOfType: (t, s) => e(Object(b.x)(t, s)),
				openPost: t => e(Object(b.I)(t)),
				onFollowPost: t => e(Object(b.ab)(s, t)),
				onFollowPostExpired: () => e(Object(b.U)({
					id: s,
					expiresAt: 0
				}))
			})), $e = e => e.media && e.media.type === T.o.EMBED && e.media.provider === T.v.Imgur && e.media.height > 700, et = u.a.wrapped(c.a, "ThumbLink", Ke.a), tt = ({
				post: e,
				templatePlaceholderImage: t,
				shouldShowFollowButton: s,
				isFollowed: o,
				onFollowPostClick: n
			}) => {
				const r = e.source ? a.a.createElement(G.a, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : a.a.createElement(et, {
					to: Object(v.b)(e.permalink)
				}, a.a.createElement(G.a, {
					post: e,
					forceShowNSFW: !0
				}));
				return a.a.createElement("div", {
					className: Ke.a.classicThumbnail
				}, s && a.a.createElement(oe.a, {
					className: Ke.a.classicNotificationButton,
					isFilled: !!o,
					onClick: n,
					hasTooltip: !0,
					tooltipText: qe._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), r)
			}, st = ({
				post: e,
				isExpanded: t,
				scrollerItemRef: s
			}) => a.a.createElement(Ye, {
				content: a.a.createElement(a.a.Fragment, null, a.a.createElement(me.a, {
					className: Ke.a.ClassicPostMedia,
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
			t.a = Xe(Ze(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: c,
					flairStyleTemplate: l,
					forceOpenInNewTab: u,
					hideNSFWPref: b,
					isActionBarAnimationEnabled: v,
					imageGalleryCurrentItem: w,
					isAdminOrMod: E,
					isCommentsPage: P,
					isCurrentUserProfilePost: j,
					isEditing: I,
					isExpanded: _,
					isFollowed: S,
					isFollowedExpired: L,
					isOverlay: M,
					isPostFollowEnabled: R,
					moderatorPermissions: F,
					modModeEnabled: A,
					onFollowPost: B,
					onFollowPostExpired: D,
					onIgnoreReports: V,
					onOpenReportsDropdown: U,
					openPost: W,
					onVoteClick: G,
					post: J,
					scrollerItemRef: oe,
					sendEvent: re,
					showAwardsPlaque: ie,
					showEditFlair: ae,
					subredditOrProfile: de,
					userIsOp: ve
				} = e, ke = Object(Ce.b)(), we = Object(d.e)(e => Boolean(J.predictionTournament) && Object(o.o)(e));
				Object(i.useEffect)(() => {
					R && L && D()
				}, []);
				const Ee = J.isSponsored ? Object(le.b)(J.id, {
						fireAdPixelsOfType: c,
						openPost: W
					}) : r.a,
					Pe = Object(x.a)(F),
					je = Object(C.a)(F),
					Ie = Object(y.a)(F),
					_e = Pe || je,
					Se = ((e, t, s) => {
						const [o, n] = e ? [Object(f.e)(e) === s.author, e.isEmployee] : [!1, !1];
						return o || t || n
					})(n, _e, J),
					Le = !!J.media && (J.media.type === T.o.RTJSON || J.media.type === T.o.TEXT),
					Te = ve && Le,
					Ne = Object(se.c)(J);
				let Me;
				const Re = !(A && x.a),
					Fe = Object(pe.b)({
						hide: Re,
						editPost: Re,
						save: Re,
						report: Re
					}),
					Be = J.removedByCategory === N.g.AuthorDeleted,
					De = n && (n.displayText === J.author || n.username === J.author),
					Ve = !Be && !$e(J) && (De || E || !(J.removedByCategory && J.media && (Object(T.J)(J.media) || Object(T.H)(J.media)))),
					Ue = Object(m.t)(J, w),
					{
						source: He
					} = Ue,
					qe = J.removedByCategory === N.g.Reddit && Object(h.e)(J.created) > 24,
					Ye = J.removedByCategory && J.removedByCategory !== N.g.Reddit || qe,
					Xe = R && !Ye && !J.isArchived,
					Ze = Object(i.useCallback)(() => {
						B(S ? N.f.UNFOLLOWED : N.f.FOLLOWED), ke(S ? Object(k.h)(J.id) : Object(k.b)(J.id))
					}, [B, ke, S, J.id]),
					et = a.a.createElement(Ge, {
						post: J,
						size: he.b.ExtraLarge,
						showCategoryTag: M,
						isOverlay: M,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					ot = a.a.createElement(We, {
						post: J,
						showViewCount: Se
					}),
					nt = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e, r = Object(d.e)(e => Boolean(n.predictionTournament) && Object(o.o)(e));
						return s ? xe.g.Classic : r ? xe.g.Large : t ? xe.g.Large : n.media && !$e(n) ? xe.g.Large : xe.g.Medium
					})(e);
				if (nt === xe.g.Classic) {
					const t = Object(g.a)(J);
					Me = a.a.createElement("div", {
						"data-test-id": ye.e
					}, a.a.createElement(ue.a, {
						model: J,
						handleVote: G,
						subreddit: de,
						isOverlay: M,
						isActionBarAnimationEnabled: v,
						postId: J.id,
						isForceSelected: !M && v
					}), a.a.createElement("div", {
						className: Ke.a.mainBody
					}, a.a.createElement("div", {
						className: Ke.a.content
					}, a.a.createElement(be.a, {
						hideAwards: ie,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: P,
						isCurrentUserProfilePost: j,
						isOverlay: !!M,
						isTopicPage: !1,
						post: J,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!M && !J.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: de,
						shouldShowFollowButton: Xe && !t,
						isFollowed: S,
						onFollowPostClick: Ze
					}), et, a.a.createElement(X.a, {
						className: P ? Ke.a.leftPadding : void 0,
						post: J,
						showCategoryTag: e.isInCategoriesExperiment && P,
						sendEvent: re
					}), A && Pe && Ne && a.a.createElement(te.a, {
						onIgnoreReports: V,
						reportable: J
					}), a.a.createElement($.d, null), a.a.createElement("div", {
						className: Ke.a.FlatlistContainer
					}, a.a.createElement(ze, {
						crosspost: s || void 0,
						isExpanded: !!_,
						post: J,
						useMediaIcons: !1
					}), st(e), ie && a.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: J,
						tooltipType: M ? ge.c.Lightbox : void 0
					}), a.a.createElement(Qe, {
						currentUser: n,
						hasModFlairPerms: je,
						hasModFullPerms: Ie,
						hasModPostPerms: Pe,
						isOverlay: M,
						onIgnoreReports: V,
						onOpenReportsDropdown: U,
						modModeEnabled: A,
						post: J,
						showUpvotePercent: !0,
						showViewCount: Se,
						useFlatlistBreakpoints: Fe,
						isActionBarAnimationEnabled: v,
						isForceSelected: !M && v
					}))), t && a.a.createElement(tt, {
						post: J,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						shouldShowFollowButton: Xe,
						isFollowed: S,
						onFollowPostClick: Ze
					})))
				} else if (nt === xe.g.Medium) {
					const t = Object(g.a)(J);
					Me = a.a.createElement("div", {
						"data-test-id": ye.e
					}, a.a.createElement(ue.a, {
						model: J,
						handleVote: G,
						subreddit: de,
						isOverlay: M,
						isActionBarAnimationEnabled: v,
						postId: J.id,
						isForceSelected: !M && v
					}), a.a.createElement("div", {
						className: Ke.a.mainBody
					}, a.a.createElement("div", {
						className: Ke.a.content
					}, a.a.createElement(be.a, {
						hideAwards: ie,
						hideNSFWPref: b,
						inSubredditOrProfile: !0,
						isCommentsPage: P,
						isCurrentUserProfilePost: j,
						isOverlay: !!M,
						isTopicPage: !1,
						post: J,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!M && !J.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: de,
						shouldShowFollowButton: Xe && !t,
						isFollowed: S,
						onFollowPostClick: Ze
					}), et, J.source && a.a.createElement(fe.a, {
						post: J,
						isCommentsPage: P
					}), Object(T.L)(J) && Je, a.a.createElement(X.a, {
						className: P ? Ke.a.leftPadding : void 0,
						post: J,
						showCategoryTag: e.isInCategoriesExperiment && P,
						sendEvent: re
					}), de && Ye && a.a.createElement(Ae, {
						isAdminOrMod: E,
						post: J,
						subredditOrProfile: de
					}), A && Pe && Ne && a.a.createElement(te.a, {
						onIgnoreReports: V,
						reportable: J
					})), t && a.a.createElement(ee.a, {
						post: J,
						forceShowNSFW: !0,
						hasModPostPerms: _e,
						isCommentsPage: P,
						isOverlay: !0,
						modModeEnabled: A,
						templatePlaceholderImage: l && l.postPlaceholderImage,
						subredditOrProfile: de,
						shouldShowFollowButton: Xe,
						isFollowed: S,
						onFollowPostClick: Ze
					})), a.a.createElement($.d, null), ie && a.a.createElement(q.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: J,
						tooltipType: M ? ge.c.Lightbox : void 0
					}), a.a.createElement("div", {
						className: Ke.a.controlsContainer
					}, a.a.createElement(Z.c, {
						currentUser: n,
						hasModFlairPerms: je,
						hasModFullPerms: Ie,
						hasModPostPerms: Pe,
						isOverlay: M,
						modModeEnabled: A,
						onIgnoreReports: V,
						onOpenReportsDropdown: U,
						post: J,
						showEditPost: Te,
						showEditFlair: ae,
						tooltipType: M ? ge.c.Lightbox : void 0,
						useFlatlistBreakpoints: Fe,
						isActionBarAnimationEnabled: v,
						isForceSelected: !M && v
					}), ot))
				} else nt === xe.g.Large && (Me = a.a.createElement("div", {
					"data-test-id": ye.e
				}, a.a.createElement(ue.a, {
					model: J,
					handleVote: G,
					subreddit: de,
					isOverlay: M,
					isActionBarAnimationEnabled: v,
					postId: J.id,
					isForceSelected: !M && v
				}), we && a.a.createElement(a.a.Fragment, null, a.a.createElement(Y.a, {
					postId: J.id
				}), a.a.createElement(z.a, {
					postId: J.id
				})), !we && a.a.createElement(a.a.Fragment, null, a.a.createElement(be.a, {
					forceOpenInNewTab: u,
					hideAwards: ie,
					hideNSFWPref: b,
					inSubredditOrProfile: !0,
					isCommentsPage: P,
					isCurrentUserProfilePost: j,
					isOverlay: !!M,
					isTopicPage: !1,
					post: J,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!M && !J.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: de,
					shouldShowFollowButton: Xe,
					isFollowed: S,
					onFollowPostClick: Ze
				}), et, ((e, t, s, o) => e.source && !t && (s || o))(J, s, M, P) && a.a.createElement(fe.a, {
					post: J,
					isCommentsPage: P
				})), a.a.createElement(X.a, {
					className: P ? Ke.a.leftPadding : void 0,
					post: J,
					showCategoryTag: e.isInCategoriesExperiment && P,
					sendEvent: re
				}), de && Ye && a.a.createElement(Ae, {
					isAdminOrMod: E,
					post: J,
					subredditOrProfile: de
				}), I ? a.a.createElement(ce, {
					post: J
				}) : Ve && a.a.createElement(me.a, {
					className: Object(p.a)(Ke.a.LargePostMedia, {
						[Ke.a.isCommentsPage]: P
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: M,
					isOverlay: M,
					post: J,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !M,
					showCentered: !0,
					scrollerItemRef: oe
				}), J.isSponsored && He && He.url && a.a.createElement(H.a, {
					className: Ke.a.adLinkWrapper
				}, a.a.createElement(K.a, {
					post: J,
					adLinkContent: Ue
				})), A && Pe && Ne && a.a.createElement(te.a, {
					onIgnoreReports: V,
					reportable: J
				}), a.a.createElement($.d, null), ie && a.a.createElement(q.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: J,
					tooltipType: M ? ge.c.Lightbox : void 0
				}), a.a.createElement("div", {
					className: Ke.a.controlsContainer
				}, a.a.createElement(Z.c, {
					currentUser: n,
					forceOpenInNewTab: u,
					hasModFlairPerms: je,
					hasModFullPerms: Ie,
					hasModPostPerms: Pe,
					isOverlay: M,
					modModeEnabled: A,
					onIgnoreReports: V,
					onOpenReportsDropdown: U,
					post: J,
					showEditPost: Te,
					showEditFlair: ae,
					tooltipType: M ? ge.c.Lightbox : void 0,
					useFlatlistBreakpoints: Fe,
					isActionBarAnimationEnabled: v,
					isForceSelected: !M && v
				}), ot)));
				const rt = Object(i.useCallback)((e, t) => Object(k.g)(e, t), []);
				return a.a.createElement(ne.a, {
					className: Object(p.a)(t, Ke.a.postContainer, {
						[Ke.a.hasEventMeta]: Object(Oe.a)(J)
					}),
					isOverlay: M,
					post: J,
					eventFactory: M ? O.b : rt,
					onClick: Ee
				}, a.a.createElement(Q.a, {
					post: J
				}), Me)
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
				return Q
			})), s.d(t, "a", (function() {
				return X
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
				p = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/ads/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				f = s("./src/lib/lessComponent.tsx"),
				C = s("./src/lib/opener/index.ts"),
				y = s("./src/lib/sentry/index.ts"),
				x = s("./src/reddit/components/PostList/LoadMore.tsx"),
				v = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				k = s("./src/reddit/constants/adEvents.ts"),
				w = s("./src/reddit/constants/componentSizes.ts"),
				E = s("./src/reddit/constants/postLayout.ts"),
				P = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/controls/OutboundLink/index.tsx"),
				I = s("./src/reddit/helpers/getClickInfo.ts"),
				_ = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				S = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				L = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				N = s("./src/reddit/helpers/trackers/ads.ts"),
				M = s("./src/lib/LRUCache/index.ts"),
				R = s("./src/telemetry/index.ts"),
				F = s("./src/telemetry/models/Timer.ts"),
				A = s("./src/reddit/components/PostList/index.m.less"),
				B = s.n(A);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 500, U = new M.a(V), W = new M.a(V), H = new M.a(V), K = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, q = f.a.div("SeeMore", B.a), G = f.a.wrapped(S.a, "ArrowRight", B.a), z = (e, t, s, o, n, r, i, a) => {
				const d = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}-${r}`;
				let c = U.get(d);
				return void 0 === c && (c = () => {
					s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a)
				}, U.set(d, c)), c
			}, Y = (e, t, s, o, n) => {
				const r = `left-${e}-${t}`;
				let i = W.get(r);
				return void 0 === i && (i = r => {
					s.trackOnPostExitedViewport(e, t, r, o, n)
				}, W.set(r, i)), i
			}, Q = (e, t) => {
				const s = `click-${e}`;
				let o = H.get(s);
				return void 0 === o && (o = (e, s, o, n, r) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, k.a.Click);
						const {
							source: e
						} = Object(u.t)(s, n);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							o && (t = Object(j.a)(s.id, o, t).url), Object(N.a)(s, r), Object(C.d)(t, C.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(I.a)(e)
					})
				}, H.set(s, o)), o
			}, J = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class X extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new M.a(V), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
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
						this.props.adBrandSafetyStatusReceived(Object(T.a)(r, i))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && R.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = R.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = R.c.end(this.timerId);
						setTimeout(() => Object(R.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && R.c.cancel(this.timerId), e.postIds.length && (this.timerId = R.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && R.c.has(this.timerId)) {
						const e = R.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(R.b)(b.l.Redesign, {
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
					if (!this.shouldSendScreenview()) return;
					const o = R.c.end(e);
					setTimeout(() => {
						s(t(o, F.TimerType.InApp))
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
					if (d.some(e => o[e] !== i[e])) return !0;
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
						listingKey: p,
						listingName: u,
						pageLayer: h,
						pageReferrer: g,
						postClickEventFactory: f,
						redditStyle: C,
						shouldHideFlair: x,
						isActionBarAnimationEnabled: v,
						triggerNewPostPill: O,
						postIds: k
					} = this.props, w = 0 === t, P = `post-${o}-${e}-${t}-${s?"last-index":""}-${u}-${p}-${g}`;
					let j;
					if (void 0 === (j = this.scrollChildCache.get(P))) {
						const {
							inSubredditOrProfile: I,
							postsById: S
						} = this.props, T = S[e], N = T.crosspostRootId && S[T.crosspostRootId] ? S[T.crosspostRootId] : T;
						T.crosspostRootId && !S[T.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${T.id} is crosspost of ${T.crosspostRootId}, but ` + `${T.crosspostRootId} details are missing in the state`), y.c.captureMessage("Crosspost parent details are missing")
						});
						const M = this.props.postComponentForLayout({
								isCrosspost: !!T.crosspostRootId,
								isFirstPost: w,
								layout: o,
								post: N
							}),
							R = `post-list-item-[layout: ${o}]-[postId: ${e}]`,
							F = z(e, o, s, p, u, g, this.props, t),
							A = Y(e, o, this.props, t, h),
							B = Q(e, this.props),
							D = N.media && N.media.type === L.o.EMBED ? N.media.provider : null;
						j = {
							estHeight: Object(_.c)(T, o),
							id: e,
							isFocusable: !(!N.media || !(o === E.g.Large || o === E.g.Classic && Object(L.G)(N.media))) && (L.d.has(N.media.type) && (!D || !L.s.has(D)) && !N.isSpoiler && !N.isNSFW),
							trackOnEnteredViewport: F,
							trackOnExitedViewport: A,
							render: ({
								className: o,
								height: b,
								width: g,
								remeasure: y,
								setScrollerChildRef: E,
								shouldLoadInitially: P
							}) => m.a.createElement(M, {
								className: o,
								currentProfileName: n,
								key: R,
								availableWidth: g,
								eventFactory: f,
								first: w,
								forceLoadMedia: P,
								hostPostData: r,
								inSubredditOrProfile: I,
								isActionBarAnimationEnabled: v,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								listingKey: p,
								listingName: u,
								pageLayer: h,
								last: s,
								onClickPost: B,
								onSizeChanged: y,
								postId: e,
								postIds: k,
								redditStyle: C,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: E,
								shouldHideFlair: x,
								onceInViewport: () => {
									null == O || O(t)
								}
							})
						}, this.scrollChildCache.set(P, j)
					}
					return j
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
						className: B.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(v.a, {
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
						className: B.a.placeholder
					}, m.a.createElement(x.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: K[o]
					}), !!e && m.a.createElement(v.a, {
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
						isTruncated: r,
						layout: i,
						location: a,
						loadMore: d,
						postIds: c,
						onLoadMore: u
					} = this.props;
					let g = c.map((e, t, s) => {
						const o = t === c.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					n && (g = J(g, n));
					const f = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						C = a ? Object(o.e)(a) : null,
						y = C || r;
					return m.a.createElement(l.Fragment, null, m.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: y ? B.a.truncatedPostList : Object(h.a)(B.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: u,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: f,
						viewportTopPadding: w.f
					}, g), C && m.a.createElement(q, {
						className: B.a.seeMoreButton
					}, m.a.createElement(P.a, {
						className: B.a.seeMorePostsText,
						to: Object(p.a)(C, {
							type: b.Tb.Posts
						})
					}, D._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			X.defaultProps = {
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostTopLine/index.m.less"),
				k = s.n(O);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: O,
				hostPostData: w,
				iconClassName: E,
				inSubredditOrProfile: P,
				isCommentsPage: j,
				isCompactPinnedPost: I,
				isCurrentUserProfilePost: _,
				isOverlay: S,
				isTopicPage: L,
				listingKey: T,
				post: N,
				shouldShowSubscribeButton: M,
				showCornerOutboundLink: R,
				showSubreddit: F,
				showSubredditIcon: A,
				subredditOrProfile: B,
				isFollowed: D,
				shouldShowFollowButton: V,
				onFollowPostClick: U
			}) => {
				const W = n || L;
				return r.a.createElement("div", {
					className: Object(i.a)(k.a.container, e)
				}, F && B && r.a.createElement("div", {
					className: k.a.subredditIconWrapper
				}, r.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: B.url
				}, A && r.a.createElement(p.b, {
					className: Object(i.a)(k.a.subredditIcon, E),
					shouldHideNsfwIcon: O,
					subredditOrProfile: B
				}))), r.a.createElement("div", {
					className: k.a.everythingElseWrapper
				}, F && r.a.createElement(d.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(m.d, {
					className: k.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: S ? m.c.Lightbox : void 0,
					post: N,
					showSub: F,
					subredditOrProfile: B
				}), r.a.createElement(l.a, {
					className: k.a.postBadges,
					displayText: B ? B.displayText : null,
					inSubredditOrProfile: P,
					isCompactPinnedPost: I,
					post: N,
					tooltipType: S ? m.c.Lightbox : void 0
				}), !W && r.a.createElement(a.a, {
					isPostDetail: j,
					thing: N,
					tooltipType: S ? m.c.Lightbox : void 0
				})), B && F && M && !_ && r.a.createElement(h.a, {
					className: k.a.SubscribeButton,
					getEventFactory: e => Object(C.g)(N.id, e ? "unsubscribe" : "subscribe", "post", T, w),
					identifier: {
						name: B.name,
						type: Object(v.h)(B) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: N.id,
					size: g.c.XS
				}), R && r.a.createElement(f.b, {
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(x.D)(N),
					source: N.source
				}, r.a.createElement(y.a, {
					className: k.a.outboundLinkIcon
				})), V && r.a.createElement(c.a, {
					isFilled: !!D,
					onClick: U,
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
				f = s("./src/reddit/constants/elementIds.ts"),
				C = s("./src/reddit/constants/experiments.ts"),
				y = s("./src/reddit/constants/page.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/helpers/postCollection.ts"),
				O = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				k = s("./src/reddit/helpers/trackers/lightbox.ts"),
				w = s("./src/reddit/helpers/trackers/screenview.ts"),
				E = s("./src/reddit/selectors/chatPost.ts"),
				P = s("./src/reddit/selectors/commentsListTruncated.ts"),
				j = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				I = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				_ = s("./src/reddit/selectors/seo/index.ts"),
				S = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				T = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/controls/InternalLink/index.tsx"),
				M = s("./src/reddit/helpers/name/index.ts"),
				R = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				F = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				A = s.n(F);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var D = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: o,
						subredditOrProfile: n
					} = e, {
						primaryColor: r
					} = n;
					return a.a.createElement(N.a, {
						className: Object(T.a)(A.a.footer, t),
						onMouseDown: s,
						to: n.url,
						style: {
							backgroundColor: r
						}
					}, a.a.createElement("div", {
						className: A.a.background
					}), a.a.createElement("div", {
						className: A.a.layout
					}, o ? B._("See more posts like this in {subredditName}", [B._param("subredditName", Object(M.c)(n.displayText))], {
						hk: "pLxW5"
					}) : B._("Continue browsing in {subredditName}", [B._param("subredditName", n.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(R.a, {
						className: A.a.arrow
					})))
				}),
				V = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				U = s.n(V);
			const W = Object(c.a)((e, {
					isOverlay: t
				}) => t, P.a, j.b, (e, t, s) => !((!t || s) && e)),
				H = Object(c.a)((e, {
					post: t
				}) => !!t && Object(v.a)(t), L.J, L.K, E.d, W, (e, t, s, o, n) => !t && !s && !o && !e && n),
				K = Object(c.c)({
					includeListingBelow: _.b,
					isListingBelowAdsControl: I.a,
					listingBelowVariant: (e, t) => H(e, t) ? Object(I.b)(e) : void 0,
					requestData: S.request,
					shouldShowListingBelow: H
				}),
				q = Object(d.b)(K, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.S.HOT,
						subredditName: t
					}))
				}));
			class G extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(f.d) : null, this.onViewed = (e, t) => Object(w.f)(this.listingKey(), l.S.TOP, t, e, l.Zb.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(k.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						includeListingBelow: e,
						isListingBelowAdsControl: t,
						post: s,
						subredditOrProfile: o
					} = this.props;
					return e && s && s.id && !t ? Object(p.a)(s.id) : Object(u.a)(o.name, l.S.TOP, {
						t: l.Zb.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowVariant: e,
						subredditOrProfile: t,
						theme: s
					} = this.props, {
						name: n
					} = t, r = Object(O.a)(s.newCommunityTheme.canvas);
					let i = null;
					return i = !e || Object(C.Hd)(e) ? o.fbt._("More posts from the {name} community", [o.fbt._param("name", n)], {
						hk: "2g363L"
					}) : e === C.Xb.Nlp15Max ? o.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : o.fbt._("More posts you may like", null, {
						hk: "33WdfT"
					}), a.a.createElement("div", {
						className: U.a.smallBanner,
						style: {
							color: r
						}
					}, i)
				}
				render() {
					const {
						contentContainerRef: e,
						isListingBelowAdsControl: t,
						listingBelowVariant: s,
						post: o,
						requestData: n,
						shouldShowListingBelow: i,
						subredditOrProfile: d
					} = this.props;
					if (!i) return null;
					const c = !!s && !Object(C.Hd)(s) && !t,
						l = {
							hostPostId: o && o.id,
							baseUrl: n.base_url,
							canonicalUrl: n.canonical_url
						};
					return a.a.createElement("div", {
						className: U.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: U.a.postList,
						disablePlaceholder: !0,
						forcedLayout: x.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostData: l,
						isTruncated: !0,
						listingBelowVariant: s,
						listingKey: this.listingKey(),
						listingName: y.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: U.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(D, {
						className: U.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: c,
						subredditOrProfile: d
					}))
				}
			}
			t.a = q(Object(m.a)(Object(g.c)(G)))
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
				return w
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
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
				f = s("./src/reddit/featureFlags/index.ts"),
				C = s("./src/reddit/selectors/experiments/survey.ts"),
				y = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/tracking.ts");

			function w() {
				return Object(u.t)({
					currentProfileName: u.h,
					isCommentPermalink: u.v,
					isCommentsPage: u.w,
					isFrontpage: u.y,
					isPredictionsPage: u.L,
					isProfilePostListing: u.I,
					isTopicPage: u.N,
					pageLayer: e => e
				})
			}
			const E = w(),
				P = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(x.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(O.F)(e, t.listingName);
							return Object(y.j)(e, {
								subredditId: s
							})
						}
						return Object(v.P)(e, {
							...t
						})
					},
					postIds: Object(r.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: o,
						inSubredditOrProfile: n
					}) => {
						if (o) {
							const t = Object(O.F)(e, s);
							return Object(y.k)(e, {
								subredditId: t
							})
						}
						return Object(v.C)(e, t, s, n)
					}),
					subredditsById: O.bb,
					viewportDataLoaded: k.a,
					pageReferrer: u.R,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: C.d
				},
				j = Object(n.c)(P),
				I = (e, t) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.I(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.x(t, s))
					},
					trackOnPostEnteredViewport: (s, o, n) => {
						e(c.L(s, n, t.hostPostData))
					},
					trackOnPostExitedViewport: (t, s, o, n, r) => {
						e(c.M(t, o, n, r))
					},
					surveyTriggerScrollCounted: () => e(Object(m.h)())
				}),
				_ = Object(o.b)(j, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(b.g)(e, t, "post", s.listingKey, s.hostPostData, s.listingBelowVariant, void 0),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(E(_(e)))
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
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
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
				f = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				y = s.n(C);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(r.b)(() => Object(i.c)({
					showFPR: f.I,
					showSuspended: f.P
				})),
				O = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...o
				}) => {
					const r = Object(g.a)({
						theme: s,
						...o
					});
					return n.a.createElement("div", x({
						className: Object(a.a)(y.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${u.h}px` : `${u.i}px`
						}
					}, o))
				});
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return n.a.createElement(m.a, {
							className: Object(a.a)(y.a.fakeOverlayLightboxHeaderWrapper, {
								[y.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(y.a, t))
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
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(O, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), n.a.createElement(c.a.Consumer, null, this.renderWrapper), n.a.createElement(h.a, e))
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
				showSuspended: "_39xFv40KohPmMxYVnMJmp"
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
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/get.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				p = s("./src/reddit/constants/history.ts"),
				u = s("./src/reddit/contexts/Post/index.tsx"),
				h = s("./src/reddit/helpers/history/index.ts"),
				b = s("./src/reddit/models/Comment/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/pages/CommentsPage/index.tsx"),
				C = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				y = s("./src/reddit/selectors/postCollection.ts"),
				x = s("./node_modules/reselect/es/index.js");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(c.b)(() => Object(x.c)({
				primaryPostId: y.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? d.a.createElement(u.a, {
					postId: t
				}, d.a.createElement(f.CommentsPage, v({}, e, {
					postId: t
				}))) : null
			});
			t.default = Object(C.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, p.a.IsOverlay, !1), o = i()(t, p.a.CloseLocation, null), r = i()(t, p.a.ScrollOnLoad, !1);
				r && Object(h.c)(p.a.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: u,
						subredditName: f,
						collectionId: C
					} = a,
					y = u ? Object(g.s)(u) : void 0,
					x = c && Object(b.g)(c),
					v = n()([...Object(l.a)(e.location.search)]),
					k = {};
				e.hasSortParam && (k.sort = e.sort, k.hasSortParam = !0);
				const w = Object(m.a)(C, y, x, k);
				return d.a.createElement(O, {
					closeLocation: o,
					collectionId: C,
					commentId: x,
					commentsPageKey: w,
					isOverlay: s,
					location: e.location,
					postId: y,
					instanceId: v.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: f,
					onOtherDiscussions: !!v.onOtherDiscussions
				})
			})
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
				post: p.I
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
					f = p > 0,
					C = Object(l.b)(Object(a.e)(g));
				return u || f ? n.a.createElement("div", {
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
				}))), f && n.a.createElement(d.a, {
					className: h.a.OtherDiscussionsLink,
					isOverlay: s,
					onClick: () => i(Object(m.a)(r)),
					to: C
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
				return ct
			})), s.d(t, "CommentsPage", (function() {
				return gt
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
				f = s("./src/telemetry/models/Timer.ts"),
				C = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/domUtils/index.ts"),
				v = s("./src/lib/fastdom/index.ts"),
				O = s("./src/lib/lessComponent.tsx"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				E = s("./src/lib/performanceTimings/index.tsx"),
				P = s("./src/reddit/actions/ads/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				_ = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/actions/upvotePrompt.ts"),
				R = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				F = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				A = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				B = s("./src/reddit/constants/componentSizes.ts"),
				D = s("./src/reddit/constants/elementIds.ts"),
				V = s("./src/reddit/constants/history.ts"),
				U = s("./src/reddit/constants/keycodes.ts"),
				W = s("./src/reddit/constants/posts.ts"),
				H = s("./src/reddit/constants/screenWidths.ts"),
				K = s("./src/reddit/contexts/ApiContext.tsx"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				G = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				z = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Y = s("./src/reddit/selectors/experiments/upvotePrompt.ts"),
				Q = s("./src/reddit/featureFlags/profileCollections.ts"),
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
				ie = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ae = s("./src/reddit/selectors/experiments/postSeo.ts"),
				de = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				ce = s("./src/reddit/selectors/meta.ts"),
				le = s("./src/reddit/selectors/moderatorPermissions.ts"),
				me = s("./src/reddit/selectors/posts.ts"),
				pe = s("./src/reddit/selectors/realtimeComments.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				he = s("./src/reddit/selectors/tooltip.ts"),
				be = s("./src/reddit/selectors/user.ts"),
				ge = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				fe = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Ce = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				ye = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				xe = s("./src/reddit/components/Comments/index.tsx"),
				ve = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				Oe = s("./src/reddit/components/Comments/States/index.tsx"),
				ke = s("./src/reddit/components/CommentsChat/Loader.ts"),
				we = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ee = s("./src/reddit/components/CommentSort/index.tsx"),
				Pe = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				je = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Ie = s("./src/reddit/components/HeaderImage/index.tsx"),
				_e = s("./src/reddit/components/Hovercards/helpers.ts"),
				Se = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Le = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Te = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ne = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Me = s("./src/reddit/components/JumpToContent/index.tsx"),
				Re = s("./src/reddit/components/PostContent/index.tsx"),
				Fe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ae = s("./src/reddit/components/SubredditNav/index.tsx"),
				Be = s("./src/reddit/components/TrackingHelper/index.tsx"),
				De = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ve = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Ue = s("./src/reddit/helpers/history/index.ts"),
				We = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				He = s("./src/reddit/helpers/postCollection.ts"),
				Ke = s("./src/reddit/helpers/resonatePage/index.ts"),
				qe = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Ge = s("./src/reddit/helpers/trackers/screenview.ts"),
				ze = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Ye = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Qe = s("./src/reddit/layout/page/Listing/index.tsx"),
				Je = s("./src/reddit/models/ContentGate.ts"),
				Xe = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				Ze = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				$e = s("./src/reddit/pages/CommentsPage/index.m.less"),
				et = s.n($e);

			function tt() {
				return (tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const st = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				ot = 200,
				nt = 80,
				rt = 32,
				it = Object(o.a)({
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
				at = Object(o.a)({
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
				dt = Object(o.a)({
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
				ct = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(k.a)(e) : s,
				lt = e => {
					const {
						state: t
					} = e.location, s = a()(t, V.a.IsOverlay, !1), o = a()(t, V.a.CloseLocation, null), n = a()(t, V.a.ScrollOnLoad, !1);
					n && Object(Ue.c)(V.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(Z.s)(i), l = r && Object(X.g)(r);
					return m.a.createElement(J.a, {
						postId: c
					}, m.a.createElement(gt, {
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
				mt = Object(q.t)(),
				pt = () => Object(h.c)({
					apiError: te.c,
					apiPending: te.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(me.R)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					comment: se.a,
					communityBannerDiscoveryUnit: ne.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(be.e)(e, t),
					currentUserShowNSFW: be.db,
					dismissedSubreddits: re.a,
					fullyLoaded: te.u,
					hasModeratorPostPermissions: le.b,
					headComment: te.x,
					isActionBarAnimationEnabled: z.b,
					isAvatarsInCommentsEnabled: ie.a,
					isChatPost: ee.d,
					isCommentsListTruncated: oe.a,
					isLoggedIn: be.K,
					isNightmodeOn: be.W,
					isRealtimeCommentsExperimentEnabled: pe.a,
					isTooltipOpen: (e, t) => !!Object(he.a)(e),
					newCommentsCount: te.F,
					origin: ce.j,
					post: me.F,
					postSEOV2IdCardVariant: ae.i,
					profileCollectionsEnabled: Q.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: o
					}) => Object(te.s)(e, {
						commentsPageKey: ct({
							postId: t,
							commentId: s,
							commentsPageKey: o
						})
					}),
					shouldOpenPostInNewTab: be.cb,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(ue.x)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: me.R,
					userHovercardIsOpen: (e, t) => Object(he.b)(Object(_e.b)({
						itemId: t.postId,
						tooltipIdPrefix: F.a,
						tooltipType: Fe.c.StickyPost
					}))(e),
					userPrefs: be.vb,
					inResonatePilot: de.a,
					isUpvotePromptExpEnabled: Y.d
				}),
				ut = (e, t) => ({
					dismissTruncation: t => e(Object(ge.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(_.a)()),
					setCommentFocus: t => e(j.f({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName,
						sort: t.sort
					})),
					onHideTooltip: () => e(Object(N.i)()),
					onToggleTooltip: t => e(Object(N.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.h)()),
					openRegisterModal: () => e(Object(L.j)()),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(_.b)()),
					fetchCommentsNativeAd: t => e(Object(P.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(fe.b)(t)),
					triggerUpvotePrompt: (t, s, o) => {
						e(Object(M.b)(t, s, o))
					}
				}),
				ht = Object(p.b)(pt, ut);
			class bt extends m.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = c()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didScrollPastPost: e,
							scrollContainerEl: t,
							scrollPostThreshold: s,
							props: {
								userHovercardIsOpen: o,
								onToggleTooltip: n,
								postId: r
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const i = t === window ? t.scrollY : t ? t.scrollTop : 0;
						this.scrollY = i, !e && void 0 !== s && i >= s && (this.didScrollPastPost = !0), e && void 0 !== s && i < s && (this.didScrollPastPost = !1, o && v.a.write(() => {
							n(Object(_e.b)({
								itemId: r,
								tooltipIdPrefix: F.a,
								tooltipType: Fe.c.StickyPost
							}))
						}))
					}, y.H), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(qe.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const e = Object(Ve.a)(this.props.subredditOrProfile);
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
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
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
					this.props.isUpvotePromptExpEnabled && (this.upvotePromptId = setTimeout(() => {
						this.props.triggerUpvotePrompt(this.props.postId, !1, () => this.setState({
							isUpvotePromptTriggered: !0
						}))
					}, Y.b));
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
					if (n ? (this.scrollContainerEl = document.getElementById(D.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : v.a.write(() => {
							setTimeout(() => {
								Object(x.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(We.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(Z.s)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), v.a.read(() => {
							this.props.isOverlay || Object(E.d)(E.c.CommentsPage, o)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						y.Gb.includes(e) && Object(Ke.a)(e)
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
						const e = this.props.post && Object(He.a)(this.props.post);
						this.props.post && this.props.post.numComments ? v.a.read(this.handleScroll) : v.a.write(() => {
							e || Object(x.c)(this.scrollContainerEl, 0), v.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && v.a.write(() => {
							setTimeout(() => {
								Object(x.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = B.b + (this.props.isOverlay ? B.n : 0),
								s = t.getBoundingClientRect().top;
							let o;
							const n = (o = this.props.isOverlay ? document.getElementById(D.d) : document.getElementsByTagName("body")[0]) && o.getBoundingClientRect().top,
								r = Math.abs(n - s),
								i = this.props.isOverlay ? rt : r - e;
							(this.props.isOverlay ? o && o.scrollTop || 0 : window.pageYOffset) >= i && v.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(x.c)(o, i) : Object(x.c)(document, i)
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = ot
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
						const e = document.getElementById(D.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - nt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - nt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), v.a.write(() => {
								Object(x.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => v.a.read(this.handleScroll))
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
							sendEvent: o,
							sort: n,
							isOverlay: r,
							isActionBarAnimationEnabled: i
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const a = g.c.end(t),
							d = !r && i;
						o(Object(Ge.c)(t, s, e, f.TimerType.InApp, a, n, d))
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
					} = this.props, r = !(!o || !o.isNSFW || t), i = Object(De.a)(e, r, n);
					if (!i) return null;
					let a = m.a.createElement(dt, i);
					return s && (a = m.a.createElement(ze.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentId: o,
						commentsPageKey: n,
						isNightmodeOn: r,
						isLoggedIn: i,
						isOverlay: a,
						post: d,
						postId: c,
						postSEOV2IdCardVariant: l,
						sort: p,
						sendEvent: u,
						subredditOrProfile: h,
						profileCollectionsEnabled: b,
						isActionBarAnimationEnabled: g
					} = this.props, f = Object(ae.g)(l);
					if (!d) {
						if (t) return m.a.createElement(Oe.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === y.m ? m.a.createElement(dt, {
							contentGateType: Je.a.PostBlockedForLegalReason
						}) : m.a.createElement(Oe.d, {
							postId: c,
							commentId: o,
							apiError: e,
							sort: p
						}) : m.a.createElement(Oe.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const x = this.isCommentPermalink(),
						v = d.belongsTo.type === W.a.PROFILE,
						O = Object(He.a)(d) && (!v || b),
						k = !i;
					return m.a.createElement(Ct, {
						closeLocation: s,
						commentsPageKey: n,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: i,
						isOverlay: a,
						isSwapVariant: f,
						post: d,
						subredditOrProfile: h,
						shouldFitPageToContent: k,
						isCollectionLayout: O
					}, h && h.isQuarantined && m.a.createElement(Ne.a, {
						subredditName: h.name
					}), m.a.createElement(Me.a, null), m.a.createElement("div", {
						className: Object(C.a)(et.a.PageContentWrapper, {
							[et.a.LargePageContent]: O,
							[et.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, O && m.a.createElement(at, {
						isOverlay: a,
						isNightmodeOn: r,
						postId: c
					}), m.a.createElement(st, {
						condition: O,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: et.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Re.a, {
						isCommentPermalink: x,
						isOverlay: a,
						postId: c,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: u,
						isActionBarAnimationEnabled: g
					}), this.state.commentNativeAdId && m.a.createElement(R.a, {
						key: `event-post-id-${d.id}`,
						isOverlay: a,
						postId: this.state.commentNativeAdId
					}), this.renderCommentPanes())), h && !Object($.h)(h) && m.a.createElement(A.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						post: d,
						subredditOrProfile: h
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: o,
						commentsPageKey: r,
						fullyLoadComments: i,
						fullyLoaded: a,
						hasModeratorPostPermissions: d,
						headComment: c,
						isAvatarsInCommentsEnabled: l,
						isChatPost: p,
						isLoggedIn: u,
						isOverlay: h,
						isRealtimeCommentsExperimentEnabled: g,
						location: f,
						newCommentsCount: y,
						onOtherDiscussions: x,
						openLoginModal: v,
						openRegisterModal: O,
						origin: k,
						post: E,
						postId: P,
						replyComment: j,
						sendEvent: _,
						sort: S,
						subredditAboutInfo: L,
						subredditOrProfile: T
					} = this.props;
					if (!E) return null;
					const N = this.isCommentPermalink(),
						M = [],
						R = E.isLocked && !s,
						F = !(N || E.isArchived || L && L.userIsBanned);
					if (R) M.push(m.a.createElement(Le.a, {
						key: "commentThreadBanner",
						subredditOrProfile: T
					}));
					else if (E.isArchived) M.push(m.a.createElement(Se.a, {
						key: "commentThreadBanner"
					}));
					else if (F && !p && !x)
						if (u) {
							const e = Object(w.a)(b.c.replyToPost, P);
							M.push(m.a.createElement(Ce.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: ({
									validate: t,
									...s
								}, o) => t ? I.t(P, r, e, s, o) : I.n(P, r, e, s, o),
								submitButtonText: n.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else M.push(m.a.createElement(ye.a, {
							key: "loggedOutCommentForm",
							location: f,
							openLoginModal: v,
							openRegisterModal: O,
							origin: k
						}));
					if (E.contestMode && M.push(m.a.createElement(Te.a, {
							hasModeratorPostPermissions: d,
							key: "contestModeBanner"
						})), !p && !x && M.push(m.a.createElement(Ee.a, {
							commentId: o,
							elementRef: this.updateCommentSortRef,
							isOverlay: h,
							key: "commentSort",
							location: f,
							postId: P,
							sort: S,
							suggestedSort: E.suggestedSort
						}), m.a.createElement(Xe.a, {
							commentId: o,
							commentsPageKey: r,
							isOverlay: h,
							key: "commentNavigation",
							postId: P
						})), !t || c || p || x)
						if (!e || c || x)
							if (x) M.push(m.a.createElement(it, {
								commentSort: S,
								key: "otherDiscussions",
								postId: P,
								isOverlay: h,
								postPermalink: E.permalink
							}));
							else if (p) {
						if (T && T.id) {
							const e = j ? Object(w.a)(b.c.replyToComment, j.id) : Object(w.a)(b.c.replyToPost, P),
								s = ct({
									postId: P,
									commentId: o,
									commentsPageKey: r
								});
							M.push(m.a.createElement(ke.a, {
								commentId: o,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !c || !a && t,
								key: "commentsChat",
								postId: P,
								renderedInOverlay: h,
								subredditId: T.id
							}, ({
								scrollToBottom: t
							}) => u ? m.a.createElement(we.a, {
								key: "chatCommentsForm",
								postId: P,
								replyComment: j,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: _
							}) : m.a.createElement(ye.a, {
								key: "loggedOutCommentForm",
								className: et.a.ChatLoggedOutForm,
								location: f,
								openLoginModal: v,
								openRegisterModal: O,
								origin: k
							})))
						}
					} else M.push(m.a.createElement("div", {
						className: Object(C.a)(et.a.CommentsPaneWrapper, {
							[et.a.mIsInOverlay]: h
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(je.a, tt({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: E.numComments,
						onClick: this.handleContentClick
					}), g && y > 0 && m.a.createElement(ve.a, {
						commentsPageKey: r,
						isActive: !1,
						moreCommentsId: "",
						count: y,
						onMoreCommentsItemClick: i
					}), m.a.createElement(xe.a, {
						commentId: o,
						commentsPageKey: r,
						postId: P,
						renderedInOverlay: h
					})))), e && c ? M.push(m.a.createElement(Oe.e, {
						key: "commentsErrorState",
						postId: P,
						commentId: o,
						sort: S,
						apiError: e
					})) : !a && t && M.push(m.a.createElement(Oe.a, {
						isAvatarsInCommentsEnabled: l,
						key: "commentsPlaceholder"
					}));
					else M.push(m.a.createElement(Oe.e, {
						postId: P,
						commentId: o,
						sort: S,
						apiError: e
					}));
					else this.didRenderLoading = !0, M.push(m.a.createElement(Oe.a, {
						isAvatarsInCommentsEnabled: l,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(G.a.Provider, {
						value: this.sendEventWithName
					}, M)
				}
			}
			const gt = mt(Object(K.b)(ht(Object(Be.c)(bt)))),
				ft = O.a.wrapped(Pe.a, "DetailsPageSidebar", et.a),
				Ct = e => {
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
					if (!a && !d) return m.a.createElement(Ye.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(Pe.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement(ze.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(Pe.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? B.i : H.a;
					return m.a.createElement(Qe.a, {
						containerRef: o,
						maxWidth: B.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(Ie.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object($.h)(u) && m.a.createElement(Ae.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(ft, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(Ze.a)(lt)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
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
							return t && Object(u.g)(t)
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
				f = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				C = Object(a.b)(f);

			function y(e) {
				return C(t => {
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
					experimentName: n.y
				}), e => e === n.E.Enabled)
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
					experimentName: o.pb
				});
				return !(!t || Object(o.Hd)(t))
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
				experimentName: o.Tc
			}) === o.cd.Enabled
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "d", (function() {
				return x
			}));
			var o = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/selectors/posts.ts"),
				r = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(r.U)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				c = e => e.focusedVerticals.components.dismissed,
				l = [],
				m = (e, t) => {
					const s = p(e, t);
					if (!s) return l;
					const o = Object(r.Y)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : l
				},
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(r.U)(e, {
						subredditId: s
					}) : null
				},
				u = (e, t, s, o, r) => {
					const i = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							r = s[t],
							i = r && Object(n.F)(e, {
								postId: o
							}) || null,
							a = r && Object(n.F)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				h = [3],
				b = (e, t, {
					listingKey: s
				}) => {
					const o = t.slice().sort();
					let r = -1;
					const i = Object(n.y)(e, {
							listingKey: s
						}),
						a = [];
					return h.forEach(t => {
						let s = r + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !u(e, s, t, i, o);) s += 1;
							s < i.length && (a.push(s), r = s)
						}
					}), a
				},
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				C = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				x = e => {
					const t = Object(i.J)(e),
						s = o.d.geoSubredditRecommendationDULoggedIn(e),
						n = o.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/reddit/selectors/realtimeComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				r = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/platform.ts"));
			const i = new Set(["relationship_advice", "sex", "repsneakers", "fashionreps", "tinder", "food", "dating_advice", "skincareaddiction", "sneakers", "justnomil", "childfree", "vegan", "insaneparents", "3dprinting", "woodworking", "homegym", "cooking", "homeimprovement", "raisedbynarcissists", "femaledatingstrategy", "beautyguruchatter", "shittyfoodporn", "loseit", "fitness", "watches", "fundiesnark", "mechanicadvice", "entitledparents", "running", "intermittentfasting", "dating", "parenting", "namenerds", "progresspics", "foodporn", "babybumps", "getmotivated", "crochet", "deadbedrooms", "bjj", "repladies", "keto", "baking", "watchexchange", "curlyhair", "streetwear", "pregnant", "starbucks", "bodybuilding", "malefashionadvice", "breakups", "makeupaddiction", "tattoos", "weddingplanning", "sewing", "reptime", "edc", "piercing", "fashionrepsbst", "diy", "minipainting", "thriftstorehauls", "coffee", "smoking", "beyondthebump", "verifiedfeet", "muslimmarriage", "popping", "fragrance", "kitchenconfidential", "tools", "sneakermarket", "crossstitch", "tryingforababy", "bodyweightfitness", "survivinginfidelity", "theeroticsalon", "diwhy", "flashlight", "knitting", "fasting", "ultralight", "1200isplenty", "homebrewing", "seduction", "camping", "femalefashionadvice", "lego_raffles", "infertility", "askculinary", "polyamory", "malelivingspace", "espresso", "sourdough", "vegetablegardening", "embroidery", "medical", "breakingmom", "vegancirclejerk", "recipes", "breadit", "kibbe", "tacobell", "nattyorjuice", "modelmakers", "eatcheapandhealthy", "xxfitness", "hotpeppers", "bumble", "drunk", "watchuraffle", "weightlossadvice", "indiemakeupandmore", "frugalmalefashion", "forbiddensnacks", "crafts", "hiking", "divorce", "tretinoin", "asianbeauty", "footfetish", "zerowaste", "plasticsurgery", "whiskey", "brogress", "haircarescience", "beautyboxes", "painting", "castiron", "streetwearstartup", "hair", "stepparents", "longdistance", "vegetarian", "nutrition", "beauty", "badmuas", "nootropics", "ttc30", "testosterone", "welding", "showerbeer", "homestead", "muaonthecheap", "kniferaffle", "designerreps", "bourbon", "cocktails", "chefknives", "pizza", "poshmark", "thegirlsurvivalguide", "quittingkratom", "redditlaqueristas", "ipsy", "justnofamily", "tea", "malehairadvice", "beards", "prettyaltgirls", "mercari", "rolex", "traderjoes", "yeezys", "decidingtobebetter", "toddlers", "beer", "makeup", "dhgate", "quilting", "moissanite", "omad", "tfablineporn", "bathandbodyworks", "migraine", "fermentation", "isitbullshit", "breastfeeding", "diabetes", "somethingimade", "wine", "outdoors", "crohnsdisease", "watchescirclejerk", "martialarts", "bbq", "findfashion", "abrathatfits", "accutane", "gainit", "muacjdiscussion", "lushcosmetics", "tattoo", "campinggear", "wetshaving", "ibs", "foreveralonedating", "nails", "chronicpain", "panporn", "raisedbyborderlines", "reduction", "mealprepsunday", "stopsmoking", "wicked_edge", "femalehairadvice", "shitmomgroupssay", "learnart", "engagementrings", "yoga", "cico", "exnocontact", "stretched", "kombucha", "goodyearwelt", "kayaking", "asianparentstories", "healthyfood", "internetparents", "daddit", "crossfit", "gifrecipes", "wewantplates", "acne", "askgirls", "ketorecipes", "justnoso", "bulkorcut", "beautytalkph", "animation", "mead", "orangetheory", "momforaminute", "advancedrunning", "chinatime", "scotch", "powerlifting", "grilling", "cookingforbeginners", "nanny", "family", "opiatesrecovery", "makeupexchange", "kettlebell", "repladiesbst", "bigboobproblems", "love", "adderall", "craftbeer", "mommit", "feetish", "amateur_boxing", "whiskeytribe", "fixit", "celiac", "pelletgrills", "weightlifting", "askparents", "wedding", "breakingdad", "aldi", "narcissisticparents", "veganfitness", "trollingforababy", "starbucksbaristas", "newparents", "steak", "youniqueamua", "ehlersdanlos", "eczema", "hotsauce", "veganrecipes", "howto", "beerporn", "abusiverelationships", "bicycletouring", "snowboarding", "30plusskincare", "fondanthate", "boostedboards", "infertilitybabies", "traeger", "sousvide", "leathercraft", "canberra", "interiordesign", "ivf", "muaythai", "rawdenim", "shoebots", "chipotle", "rowing", "indianskincareaddicts", "dominos", "stupidfood", "blacksmith", "qualityreps", "electronics", "bartenders", "makeuprehab", "stilltrying", "clothdiaps", "plantbaseddiet", "skookum", "plussize", "gettingshredded", "glossier", "supremeclothing", "seiko", "reptimebst", "weddingsunder10k", "swimming", "skincareaddicts", "muacirclejerk", "weightwatchers", "snarkfriends", "workout", "highheels", "veganfoodporn", "gshock", "zerocarb", "spicy", "nonmonogamy", "fitbit", "truechildfree", "womenshealth", "climbharder", "rosacea", "malefashion", "tattoodesigns", "triathlon", "eatsandwiches", "skincareaddictionuk", "trailrunning", "fancyfollicles", "knifemaking", "slowcooking", "wildernessbackpacking", "declutter", "vettech", "jewelry", "tiki", "1500isplenty", "blackhair", "awfuleyebrows", "stockx", "glutenfree", "decaf", "homeschool", "redwingshoes", "subway", "skincare_addiction", "scacirclejerk", "stackadvice", "alcohol", "codependency", "ttcafterloss", "cheese", "malegrooming", "gastricsleeve", "nationalpark", "chefit", "nespresso", "fierceflow", "hydroponics", "longhair", "instantpot", "foodhacks", "ramen", "australianmakeup", "tmj", "toxicparents", "dunksnotdead", "supreme", "scientificnutrition", "handwriting", "carnivore", "weddingdress", "tfabchartstalkers", "adoption", "xxketo4u2", "pregnancyafterloss", "workingmoms", "fitness30plus", "old_recipes", "jeffreestarcosmetics", "womensstreetwear", "techwearclothing", "metalworking", "naturalhair", "fastfood", "seriouseats", "ausskincare", "rum", "caloriecount", "waiting_to_try", "uabat", "miscarriage", "fragranceswap", "flexicas", "random_acts_of_pizza", "sushi", "sneakerscanada", "makeupflatlays", "burgers", "askbaking", "nike", "piercedcock", "gestationaldiabetes", "parentsofmultiples", "makeuplounge", "winemaking", "mclounge", "anorexianervosa", "swatchitforme", "sneakerreps", "tequila", "kennyvsspenny", "makeupaddictioncanada", "indianfood", "tattooedgirls", "iamveryculinary", "flexibility", "52weeksofcooking", "mildlynomil", "sneakerfits", "safe_food", "prisonhooch", "fitnesscirclejerk", "palemua", "fashionadvice", "exvegans", "cookingvideos", "stronglifts5x5", "strength_training", "tallgirls", "dadswhodidnotwantpets", "warts", "ultrarunning", "barber", "strongcurves", "naturalbodybuilding", "february2019bumpers", "biggreenegg", "glasses", "dhgatereps", "keto_food", "overlyspecificedmemes", "frugalfemalefashion", "macarons", "amipregnant", "grilledcheese", "smallbooblove", "palaceclothing", "xxketo", "uglyduckling", "talesfromthepizzaguy", "salsasnobs", "trekbikes", "singleparents", "paralegal", "sharpening", "soylent", "foodscience", "louisvuitton", "nerfmods", "sephora", "adidas", "diet", "moustache", "roasting", "ffacj", "whiskyporn", "hidradenitis", "booty_lovers", "bridezillas", "sebderm", "exercise", "menopause", "eceprofessionals", "custody", "traditionaltattoos", "360waves", "veganuk", "nopoo", "sfr4r", "vintagefashion", "adultchildren", "dessertporn", "budgetfood", "ifseniorclass", "firewater", "drmartens", "legitcheck", "mountaineering", "seikomods", "scacjdiscussion", "whitewater", "nikerunclub", "indieexchange", "reptronics", "footfetishworld", "bodypositive", "deliciouscompliance", "chickfila", "konmari", "diyuk", "bonappetit", "abusiveparents", "wavyhair", "predaddit", "drugstoremua", "ttc_pcos", "supermorbidlyobese", "aerogarden", "drunkencookery", "attachmentparenting", "ketogains", "omegawatches", "skincareexchange", "goruck", "greenhouses", "soda", "dyshidrosis", "gonenatural", "paleo", "diynz", "japanesefood", "sneakerdeals", "weddingphotography", "femalelivingspace", "artisanvideos", "whisky", "ketoaustralia", "ketouk", "covidcookery", "formulafeeders", "estrangedadultchild", "behindtheclosetdoor", "nicuparents", "ketobeginners", "ulta", "myfitnesspal", "tipofmyfork", "koreanbeauty", "artfundamentals", "lesbianfashionadvice", "fitpregnancy", "watchexchangefeedback", "frugalmalefashioncdn", "jumprope", "shave_bazaar", "secondaryinfertility", "cheesemaking", "mexicanfood", "cider", "curlyhairuk", "dadforaminute", "shoes", "christmas", "petitefashionadvice", "singleteenagers", "charcuterie", "ketoscience", "euroskincare", "sugarfreemua", "cowboyboots", "vegande", "happycryingdads", "upcycling", "showerbeergonewild", "moresneakers", "strongman", "fearofgod", "weightgain", "selflove", "water_fasting", "yarnaddicts", "compulsiveskinpicking", "skin", "papajohns", "culinaryplating", "dunkindonuts", "wolfvsgoat", "cautiousbb", "standingdesk", "glitch_art", "austinfood", "whiskago", "repsneakerbst", "personaltraining", "shittygifrecipes", "nootropicsdepot", "bariatricsurgery", "ratemyplate", "babies", "furniturerestoration", "veganism", "choosemyalignment", "hotness", "ladybonersgonemild", "52weeksofbaking", "sexyoutfits", "barista", "makeuporganization", "fosterparents", "blackstonegriddle", "bollywoodfashion", "newborns", "navyblazer", "weighttraining", "crappycontouring", "bravotopchef", "bgccirclejerk", "bromance", "eood", "colourpop", "revengecommunity", "fitmeals", "vegan_food", "theordinaryskincare", "irezumi", "houseplantsuk", "osdd", "edanonymousadults", "bapeheads", "chinesewatches", "bakingnoobs", "cursedfoods", "parents", "breakfastfood", "drpepper", "noses", "march2019bumpers", "emotionalneglect", "japanesestreetwear", "hgtv", "ketodrunk", "smallboobproblems", "toolporn", "askvegans", "veganbeauty", "ethicalfashion", "gyodating", "sushiabomination", "dryfasting", "chinesefood", "benchmade", "dewalt", "njbeer", "makeupfetish", "fragsplits", "divorce_men", "airfryer", "whataburger", "edfood", "fryup", "aimeleondore", "veganbaking", "bluecollarwomen", "snakediet", "flooring", "boostmasterlin", "beardporn", "cake", "putaneggonit", "badparents", "japanesewatches", "vegetarianrecipes", "applewatchfitness", "innout", "mealprep", "jerky", "diybeauty", "skincareflatlays", "myweddingdress", "ifparents", "teespring", "dietandhealth", "repph", "makeupaddicts", "wgtow", "trollmua", "healthy_recipes", "queerception", "fitnessonline", "fashionplus", "monsterenergy", "ifbumpers2019", "todayiwore", "gastricbypass", "hearingaids", "coffeestations", "anycubic", "eloping", "legsgw", "neongenesisevangelion", "twins", "loseweight", "dairyqueen", "mancave", "powerbuilding", "sexybrownwomen", "wings", "couturereps", "cafe", "shoppingaddiction", "puer", "pizzadrivers", "veganchill", "childrenofdeadparents", "bigmenfashionadvice", "fitnessmotivation", "eyebrows", "tshirts", "chocolate", "parkrangers", "maleinfertility", "homeimprovementideas", "legitpiercing", "familyissues", "ifparenting", "kefir", "dcwhisky", "entirebodyexercise", "eustachiantubeclick", "pyrex_love", "breastfeedingsupport", "workouts", "rheumatoidarthritis", "tacos", "customsneakers", "dessert", "pizzahutemployees", "printondemand", "zerowastevegans", "foodievideos", "calmhands", "4hourbodyslowcarb", "eatcheapandvegan", "dyson", "lowcarb", "15minutefood", "swoleacceptance", "justengaged", "vintagesewing", "androgyny", "lactoseintolerant", "stonerfood", "coffeeswap", "wardrobepurge", "glutenfreerecipes", "hotdogs", "repvouch", "wendys", "charcoal", "adamragusea", "veganketo", "friend", "makeuptips", "blacksmithing", "onepotmeals", "bodyacceptance", "unconventionalmakeup", "euphorbiaceae", "whitehousedinners", "lingerieaddiction", "agingparents", "muaconspiracy", "lacqueristas", "monogamy", "randomactsofmakeup", "waiting_to_wed", "preppy", "vegrecipes", "foodscam", "sunflowers", "australianmfa", "badfoodporn", "moderatelygranolamoms", "raisingkids", "offwhitefactory", "vintagefashions", "sandwiches", "sca", "asianbeautyexchange", "rothys", "homefitness", "blendedfamilies", "cosplayers", "vostok", "taylorstitch", "septemberbumpers2017", "milk", "olivemua", "soup", "talesfromthekitchen", "breakfast", "revengexstorm", "vegansnacks", "cleanmakeup", "gucci", "fashion_design", "beginnerfitness", "pinkplants", "rbnchildcare", "narcabuseanddivorce", "perfumes", "fashionwomens35", "desiweddings", "smoothies", "sahp", "justnofil", "agegaprelationship", "vitamix", "baby", "adenium", "best_tattoos", "pandaexpress", "healthyeatingnow", "walstad", "oney", "advancedfitness", "figs", "organicgardening", "fashionporn", "fitnessgirls", "askguys", "kimchi", "dysfunctionalfamily", "veryexpensive", "sausagetalk", "ratemytea", "peeling", "topsecretrecipes", "ketotrees", "biltong", "foodie", "weightlossafterbaby", "makeupeducation", "wewantcups", "thingsmykidsaid", "fatherhood", "todayiate", "ts_withdrawal", "stopdrinkingfitness", "modestdress", "pie", "ketoprogress", "ocdmemes", "posturetipsguide", "fruit", "justnicefits", "cancerfamilysupport", "juicing", "makeupaddictionuk", "cheap_meals", "redhair", "glaucoma", "capsulewardrobe", "mezcal", "mua", "kpopfashion", "getoutofbed", "rawvegan", "foodsafety", "sneakermarketrefs", "glutenfreevegan", "prison", "straightedge", "berries", "buyingforbaby", "wemetonline", "melts", "wallets", "halfevil333", "tanning", "im5andthisismacaroni", "veganfood", "bakeoff", "famnnfp", "uksucculents", "chicagobeer", "dairyfree", "pizzahut", "greeneyed", "childrensbooks", "aj1s", "apartmenthacks", "ketocirclejerk", "braswap", "zpaletteporn", "beautyblogs", "nicotine", "dryagedbeef", "thehighchef", "weddinghashtag", "barbattlestations", "dads", "ketochow", "smokingmeat", "asexualdating", "anorexiarecovery", "budgetcooking", "weddingswap", "coldbrew", "foodhaikus", "restaurant", "shittyfertilityadvice", "kawaii", "cardmaking", "coparenting", "burgerking", "sodastream", "streetwearfits", "wegmans", "shaving", "theketodiet", "jerseymikes", "bpdpartners", "hats", "hot_dog", "veggieshake", "subscriptionboxes", "familiesyouchoose", "food_pantry", "clothingstartups", "avocado", "thehopyard", "topchef", "beerwithaview", "polyfamilies", "adventures", "searchandrescue", "kfc", "cookingcollaboration", "fabrics", "drinking", "trollxweddings", "gingerguys", "lichensclerosus", "planetfitnessmembers", "diplomacy", "wedditnyc", "backpackingdogs", "tegu", "airjordans", "minimal_setups", "koji", "sexeducation", "ketomealseatingnow", "sketchup", "sneakerwatch", "latteart", "cupcakes", "listeningspaces", "hands", "shittingadvice", "canadawhisky", "boba", "cookingtonight", "scandinavianinterior", "dehydrating", "crueltyfree", "makeupartists", "jewelrylove", "lookoftheday", "vegetarianketo", "fiveguys", "handbalancing", "distilling", "sustainablefashion", "repwatch", "bape", "asianeats", "aussiemakeuptrade", "foxbrain", "craftytrolls", "chefknifeswap", "teepublic", "majesticmanes", "ausproperty", "freeletics", "ectopicsupportgroup", "sfx", "mtbtrailbuilding", "crafting", "carhartt", "femalefashion", "80sfastfood", "plcb", "recipeinspiration", "badmakeup", "vedc", "liftingmusic", "beautyinfluencers", "wafflehouse", "crushadvice", "pho", "babyloss", "beautyaddiction", "ketomealprep", "beardtalk", "engaged", "vegetarianism", "glutenfreecooking", "octopus", "liquor", "streeteats", "icecream", "mushroom_cultivation", "satisficing", "mensfashion", "allenedmonds", "underworldmbti", "lesmills", "egg", "bbexchange", "healthyeating", "nailpolish", "mcdonalds", "cosplaybeauties", "rootedporn", "canyoneering", "cocacola", "byuidaho", "datsmiledoe", "meatlessmealprep", "midwives", "veganforbeginners", "makeup101", "psmf", "cosmeticsurgery", "prohealth", "vegetarianfoodporn", "fashionnews", "foodtrucks", "foodphotography", "crocs", "mre", "mimicrecipes", "vegangifrecipes", "tinyhouse", "handbags", "parentinginbulk", "ketodiet", "dinner", "rawring20s", "pins", "caving", "alternativehealth", "singlemothersbychoice", "adopted", "stepmom", "cutekids", "clocks", "jordans", "foodnyc", "naturalbeauty", "chickennuggets", "mom", "accuratelyrateme", "vancouvercraftbeer", "bb30", "trailguides", "canadabeautyexchange", "apartmentdesign", "ketobabies", "smokefire", "btfc", "fruitarian", "customshoes", "caffeine", "bacon", "singledads", "culinary", "filmfashion", "veganity", "foodblog", "shittywoodworking", "peptalkswithpops", "beercirclejerk", "businessfashion", "snacking", "gymshark", "neworleansbeer", "coffee_shop", "perfumeexchange", "tryingforanother", "ketomeals", "easyrecipes", "vodka", "crystalhealing", "fermentedhotsauce", "makeupselfies", "beautydiagrams", "nordicskincare", "shroom", "handtoolrescue", "weightlossfoods", "malefashionmarket", "teenmfa", "tfhcooking", "xxketoover50", "cajunfood", "amazingfitness", "sciencebasedparenting", "myopia", "asiangirlsbeingsexy", "diyweddings", "keto_diet", "fitmama", "breadmachines", "motivationvideos", "henna", "cutyourownhair", "ibsresearch", "florists", "weddingring", "foggypics", "ayurveda", "fastfoodhorrorstories", "helicopterparents", "coffee_roasters", "veganmealprep", "desiketo", "copornot", "foodwishes", "watchhorology", "filipinofood", "ttchealthy", "redditlaqueristaswap", "luxury", "weddingvideography", "allergy", "gainitmeals", "picturesofchina", "mixology", "tdcs", "brownbeauty", "doener", "bmorebourbonsociety", "marfans", "europeanmalefashion", "hypoglycemia", "muscleconfusion", "jewelers", "streetwearsales", "askdad", "landscapingtips", "gaybrosfitness", "hooters", "modulars", "mealplanyourmacros", "repfashion", "ketodessert", "bedding", "socks", "runninglifestyle", "frozendinners", "orthopaedics", "potato", "daddycringe", "accessibility", "veganzerowaste", "xxy", "menswear", "deltaco", "novemberbumpers2017", "haircare", "wholesometeenboys", "stressfreeseason", "askacobbler", "redbull", "worldwhisky", "brownreclusebites", "veganparenting", "trainerroad", "climbingpartners", "ketomealsandrecipes", "fiestaware", "neurofibromatosis", "streetfoodartists", "eggs", "kickwho", "mfacirclejerk", "lymedisease", "deondergrondse", "vegan_travel", "toolsales", "fuckcilantro", "chiropractorzone", "powerwashinggore", "dermatology", "malelifestyle", "projectpan", "neurofeedback", "dysphagia", "grainfather", "wedditgetsfit", "kinobody", "weightlossnews", "ketodietapp", "memantinehcl", "organichealthproducts", "weightlossdiets", "finedining", "fuckingmanly", "antidiet", "condiments", "audiprocdisorder", "popeyes", "exercisepostures", "pez", "onlinefriends", "bys", "wintercycling", "salsa", "outlandishalcoholics", "crossedlegs", "oklahomajoe", "pittsburghbeers", "fastfeeling", "askredditfood", "lioneltrains", "foodnerds", "toolboxmods", "sdam", "irinasabetskaya", "labeer", "yegvegan", "fattylivernafld", "fitlifevideos", "diary", "reebok", "outbreakworld", "modernfashionporn", "davidstea", "ketoconnect", "stepschallenge", "mustard", "pcosandpregnant", "portugalvegan", "xrays", "beercanada", "houstonbeer", "fastfoodreview", "tacticalmedicine", "kidsmeal", "hangovereffect", "misophoniasupport", "deepfried", "fastbuds_family", "adenomyosis", "dnp", "morganeisenberg", "ufyh", "kidsafevideos", "drycleaning", "sobrietyandrecovery", "raptors40k", "eczemabs", "femininenotfeminist", "prosopagnosia", "marriageisbliss", "costumeporn", "motherinlawsfromhell", "32dollars", "sexyness", "breakingeggs", "rabbitreddit", "spinalfusion", "amaro", "freefood", "pistollake", "9round", "purplecoco", "ect", "fmd", "csectioncentral", "dad", "raocdeletes", "olivesplace", "weightlosstechniques", "lgbtweddings", "avascularnecrosis", "naturalnutrition", "bpdrecovery", "marylandeats", "rainbow_babies", "persuasionexperts", "brandy", "nutritionsupport", "stretchedclassifieds", "sanfranciscosecrets", "cmt", "washingtonstategarden", "penpalsover40", "marriedlife", "snowblowers", "queerfamilies", "inlaws", "fragdecants", "fashion", "cordwaining", "treeparents", "autismuk", "bitters", "chd", "sportsmedicine", "stlouisbeer", "bjj_gear", "alopecia_areata", "rbnspouses", "qdoba", "weird_dreams", "psc", "trying2conceive", "asianscuckingpinkies", "blackladiesfitness", "recipegifs", "tfabgrads", "fantasyimages", "gymmotivation", "olivegarden", "girlfriendproblems", "atozplasticsurgery", "foodsandiego", "sneakersreps", "trulieve", "xxweightroom", "floridagardening", "longislandeats", "ghostkitchens", "bento", "lunch", "texasbeer", "sexdolling", "teethdrumming", "mdbeer", "bi4bi", "retinitispigmentosa", "braintumor", "dankrecoverymeme", "shinyfashion", "cozy", "gestationaldiabetics", "randomactsofpetfood", "asianbeautyrehab", "toyreviews", "thoracicoutlet", "canskincare", "hotguysworkingout", "paleolithicketogenic", "paruresis", "supersoil", "bikinisonshow", "makeupfreebies", "astrorelationships", "agricultureporn", "twackedup", "fried", "crueltyfreemua", "carlsjr", "guacmemes", "youtubebeauty", "powerliftingmemes", "budgetweddings", "skincarerehab", "beautifullyenhanced", "thericegoddess", "pottytraining", "finsubteamwork", "hardees", "diamond", "pregnancyproblems", "casualtfab", "condimentpackets", "teenstyle", "ownit", "carpets", "askfastfoodemployees", "erectiledysfunctioned", "selfcare", "snowshoeing", "thingsmadeofchocolate", "paperflowers", "weddingphotographer", "socialworkerstories", "entitledoldpeople", "hownotto", "weddingsolutions", "fitnessguides", "ketogenicdiet", "womensbodybuilding", "foodhack", "kentuckyfriedchicken", "muaeurope", "coffeeoutside", "grease", "freeforallfashion", "vegkc", "closetswap", "onlineclothing", "rhubarbhomies", "grooms", "frugalbeauty", "upliftingvegan", "mito", "lodestone_testing"]);
			var a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const c = e => (e => {
				return Object(a.c)(e, {
					experimentEligibilitySelector: () => Object(d.J)(e),
					experimentName: o.Qc
				}) === o.ad.Enabled
			})(e) && (e => {
				const t = Object(r.d)(e);
				return !!t && i.has(t.toLowerCase())
			})(e) && n.d.realtimeCommentsExperiment(e)
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.cd692e3d80e4f2d15a0f.js.map