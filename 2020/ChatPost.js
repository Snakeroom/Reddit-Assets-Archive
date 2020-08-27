// https://www.redditstatic.com/desktop2x/ChatPost.0ee47408422f26d59a6c.js
// Retrieved at 8/27/2020, 12:40:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, o) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, o)
				}), t)
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, o, n) {
				return n(e, (function(e, n, r) {
					s = o ? (o = !1, e) : t(s, e, n, r)
				})), s
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseDelay.js"),
				n = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return o(e, 1, t)
				}));
			e.exports = n
		},
		"./node_modules/lodash/first.js": function(e, t, s) {
			e.exports = s("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? o : a,
					l = arguments.length < 3;
				return c(e, r(t, 4), s, l, n)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var s = i,
					l = c(e, i);
				t = n(t), e -= i;
				for (var d = o(l, t); ++s < e;) t(s);
				return d
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t) {
				for (var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), n = 2; n < s; n++) o[n - 2] = arguments[n];
				let r, a = !1;
				const i = async () => {
					o && o.length ? await e.call(window, ...o) : await e.call(window), a || (r = window.setTimeout(i, t))
				};
				return r = window.setTimeout(i, t), () => {
					a = !0, window.clearTimeout(r)
				}
			}
		},
		"./src/reddit/actions/comment/websocket/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return W
			})), s.d(t, "b", (function() {
				return U
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/lodash/first.js")),
				i = s.n(a),
				c = s("./node_modules/lodash/isArray.js"),
				l = s.n(c),
				d = s("./src/reddit/helpers/isComment.ts"),
				m = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/PostCreationForm/index.ts"),
				C = s("./src/reddit/models/Vote/index.ts");
			const b = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const s = v(e.attribs),
							o = e.associated_award ? Object(m.b)(e.associated_award) : void 0;
						return Object.assign({
							allAwardings: [],
							associatedAward: o,
							author: e.author,
							authorId: e.author_fullname,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							created: e.created_utc,
							distinguishType: g(s),
							id: e.name,
							isAdmin: s === p.c.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: s === p.c.Submitter,
							isMod: s === p.c.Moderator,
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
							parentId: e.parent_id && Object(d.a)(e.parent_id) ? e.parent_id : null,
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
							voteState: C.a.notVoted
						}, t || {})
					}
				},
				g = e => {
					switch (e) {
						case p.c.Admin:
							return o.C.ADMIN;
						case p.c.Moderator:
							return o.C.MODERATOR;
						case p.c.Alumni:
							return o.C.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				v = e => i()((e || []).filter(e => l()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || p.c.None;
			const x = (e, t, s) => {
				const o = {
						[t]: {}
					},
					{
						author: n,
						author_flair_background_color: r,
						author_flair_richtext: a,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: l,
						author_flair_type: d
					} = s;
				if (n && d) {
					if (d === u.f.Richtext) {
						if (!r || !a) return;
						return {
							[t]: {
								[n]: {
									type: d,
									backgroundColor: r,
									cssClass: void 0,
									richtext: a,
									templateId: i,
									textColor: l
								}
							}
						}
					}
					if (d === u.f.Text) {
						if (!c) return o;
						return {
							[t]: {
								[n]: {
									type: d,
									backgroundColor: r,
									cssClass: void 0,
									text: c,
									templateId: i,
									textColor: l
								}
							}
						}
					}
				}
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var _ = s("./src/lib/env/index.ts");
			const f = new Map,
				E = e => e;
			var k;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(k || (k = {}));
			const T = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				y = (e, t) => {
					const s = E(t),
						o = f.get(s);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				I = (e, t, s, o) => {
					const n = E(t),
						r = f.get(n);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					f.set(n, a), a.socket.addEventListener("open", () => {
						a.retries = Object.assign({}, T)
					}), a.socket.addEventListener("message", w.bind(null, o)), a.socket.addEventListener("close", O.bind(null, n, o)), a.socket.addEventListener("error", S.bind(null, n)), window && window.addEventListener("beforeunload", y.bind(null, e, t))
				},
				O = (e, t, s) => {
					const o = f.get(e);
					o && (o.isClosePlanned ? f.delete(e) : j(e, t))
				},
				j = (e, t) => {
					const s = f.get(e);
					if (!s) return;
					const {
						retries: {
							backoffTime: o,
							connectionAttempts: n,
							jitterAmount: r,
							maximumRetries: a
						},
						socket: i,
						uniqueId: c,
						url: l
					} = s;
					if (f.delete(e), n < a && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, n),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							d = Object.assign(Object.assign({}, s.retries), {
								connectionAttempts: n + 1
							});
						setTimeout(() => {
							I(l, c, d, t)
						}, i), Object(_.a)() && console.debug("Connection reset, retrying in ".concat(i, "ms"))
					}
				},
				w = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(_.a)() && console.error(t)
					}
				},
				S = (e, t) => {
					const s = f.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? f.delete(e) : Object(_.a)() && console.error(t)
				};
			var M = s("./src/reddit/selectors/comments.ts"),
				L = s("./src/reddit/selectors/moderatorPermissions.ts"),
				N = s("./src/reddit/actions/comment/websocket/constants.ts");
			const R = Object(n.a)(N.b),
				A = Object(n.a)(N.c),
				P = Object(n.a)(N.a),
				B = Object(n.a)(N.d),
				D = {},
				W = (e, t, s, n) => async (a, i) => {
					(e => {
						const {
							cb: t,
							url: s,
							uniqueId: o
						} = e;
						I(s, o, Object.assign({}, T), t)
					})({
						uniqueId: s,
						url: t,
						cb: t => {
							switch (t.type) {
								case k.NEW_COMMENT: {
									const c = t.payload.name,
										l = b(t.payload),
										d = i(),
										m = Object(r.a)(d, s).sortToUse === o.r.CHAT,
										p = Object(M.n)(d, {
											commentId: c
										}),
										u = !(!c || !D[c]);
									if (l && !u) {
										const s = x(0, n, t.payload),
											o = t.payload.total_comment_count;
										if (void 0 === p) {
											const n = Object(M.x)(d, {
													commentsPageKey: e
												}),
												r = t.payload.parent_id,
												i = Object(M.j)(d, {
													commentId: r,
													commentsPageKey: e
												}),
												c = Object(M.n)(d, {
													commentId: r
												}),
												p = c && c.originId ? c.originId : r,
												u = null === i ? i : i + 1;
											if (m) a(R({
												authorFlair: s,
												comment: l,
												commentsPageKey: e,
												depth: u,
												headCommentId: n,
												isChatSort: m,
												numComments: o,
												originId: p
											}));
											else {
												const t = c && c.originId ? 5e3 : 7e3;
												setTimeout(() => a(R({
													authorFlair: s,
													comment: l,
													commentsPageKey: e,
													depth: u,
													headCommentId: n,
													isChatSort: m,
													numComments: o,
													originId: p
												})), t)
											}
										} else a(A({
											authorFlair: s,
											comment: l,
											commentsPageKey: e,
											isChatSort: m,
											numComments: o
										}))
									}
									break
								}
								case k.UPDATE_COMMENT: {
									const c = t.payload.name,
										l = i(),
										d = Object(M.n)(l, {
											commentId: c
										}),
										m = b(t.payload),
										p = Object(r.a)(l, s).sortToUse === o.r.CHAT;
									if (d && m) {
										const s = x(0, n, t.payload),
											o = t.payload.total_comment_count;
										a(A({
											authorFlair: s,
											comment: m,
											commentsPageKey: e,
											isChatSort: p,
											numComments: o
										}))
									}
									break
								}
								case k.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										o = t.payload.score,
										n = i(),
										r = Object(M.n)(n, {
											commentId: s
										});
									r && a(A({
										comment: Object.assign(Object.assign({}, r), {
											score: o
										}),
										commentsPageKey: e
									}));
									break
								}
								case k.DELETE_COMMENT: {
									const e = t.payload.name,
										s = i(),
										o = Object(M.n)(s, {
											commentId: e
										});
									o && !o.isDeleted ? a(P({
										id: e
									})) : D[e] = k.DELETE_COMMENT;
									break
								}
								case k.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										o = i(),
										n = Object(M.n)(o, {
											commentId: s
										}),
										r = (o.user.account && o.user.account.id) === (n && n.authorId),
										c = !!e && !!Object(L.i)(o, {
											postId: e
										});
									!n || n.isRemoved && n.isDeleted || r || c ? D[s] = k.REMOVE_COMMENT : a(P({
										id: s
									}));
									break
								}
								case k.USER_JOIN: {
									const s = b(t.payload, {
											isSystem: !0
										}),
										o = !0;
									s && a(B({
										comment: s,
										commentsPageKey: e,
										isChatSort: o
									}));
									break
								}
							}
						}
					})
				}, U = (e, t) => async () => {
					y(0, t)
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
				return j
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return M
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "a", (function() {
				return K
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				C = s("./src/reddit/helpers/path/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				g = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				v = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				x = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				_ = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				f = s("./src/reddit/components/Comments/States/index.m.less"),
				E = s.n(f);
			const k = d.a.wrapped(x.a, "CommentsIcon", E.a),
				T = d.a.wrapped(_.a, "SnooFacepalm", E.a),
				y = d.a.p("EmptyTitle", E.a),
				I = d.a.p("ErrorTitle", E.a),
				O = d.a.p("EmptyText", E.a),
				j = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(E.a.StateContainer, t)
					}, i.a.createElement(k, null), i.a.createElement(y, null, s ? o.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : o.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(O, null, o.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(k, null), i.a.createElement(y, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: E.a.StateContainer
					}, i.a.createElement(k, null), i.a.createElement(y, null, o.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(u.h, {
						to: Object(C.b)(t)
					}, o.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				M = Object(c.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: o,
						sort: n
					} = t;
					return {
						onClick: () => e(Object(m.q)(s, o, {
							sort: n
						}, n))
					}
				})(e => {
					let {
						apiError: t,
						onClick: s
					} = e;
					return i.a.createElement("div", {
						className: E.a.StateContainer
					}, i.a.createElement(T, null), i.a.createElement(I, null, t ? Object(h.a)({
						apiError: t,
						isLoggedOut: !1
					}) : o.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), i.a.createElement(u.f, {
						onClick: s
					}, o.fbt._("retry", null, {
						hk: "BoP8d"
					})))
				}),
				L = e => {
					let {
						postId: t,
						commentId: s,
						sort: o,
						apiError: n
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(E.a.StateContainer, E.a.ErrorFullPage)
					}, i.a.createElement(M, {
						postId: t,
						commentId: s,
						sort: o,
						apiError: n
					}))
				},
				N = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(p.a, null))
				}, "LoadingFullPage", E.a),
				R = d.a.div("CommentsPlaceholderContainer", E.a),
				A = d.a.div("CommentPlaceholder", E.a),
				P = d.a.div("Avatar", E.a),
				B = d.a.div("VoteColumn", E.a),
				D = d.a.div("TextColumn", E.a),
				W = d.a.wrapped(v.b, "Upvote", E.a),
				U = d.a.wrapped(g.b, "Downvote", E.a),
				F = () => i.a.createElement("div", {
					className: Object(l.a)(E.a.TopMetaPlaceholder, Object(b.a)({
						isLoading: !0
					}))
				}),
				V = () => i.a.createElement("div", {
					className: Object(l.a)(E.a.CommentBodyPlaceholder, Object(b.a)({
						isLoading: !0
					}))
				}),
				K = e => i.a.createElement(R, null, r()(10, t => i.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(b.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(W, null), i.a.createElement(U, null)), i.a.createElement(D, null, i.a.createElement(F, null), i.a.createElement(V, null)))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less": function(e, t, s) {
			e.exports = {
				awardComment: "Qkdtf2CTKJDknbazL-AMW",
				silverTierAwardComment: "_2K5jTegGACZTi8TWvs4SyB",
				goldTierAwardComment: "_37sBwMRYEzwkWdokXOOlQJ",
				platinumTierAwardComment: "_11aS54KCcFm_OLfRPhp_3D",
				imageContainer: "_1vPp7dOkl_3DKjZYjW06BW",
				backgroundAnimation: "_2i4HeuNgltvyx1u5avuVnK",
				backgroundStar: "_3nk7xeDcgOeGYAfF3Spsbh",
				spinCW: "_2Puyz3btdtqWX6E5eI2hBB",
				spinCw: "_2Puyz3btdtqWX6E5eI2hBB",
				backgroundStar2: "_2kPpfDsovGUW6dzF2F4n3P",
				backgroundSparkle: "_3z4E7G1TTNdvve0FxUTLUo",
				twinkle: "Vv46qL__rbNs6Bj4N8Dsl",
				sparkleBottomLeft: "u1JiASpbiuGwsfsTCsHCf",
				sparkleTopRight: "_3rJK5s9oFDAt1F0Hpr7BRE",
				sparkleBottomRight: "_1RcdEbzgGuOANa3oJzFJdl",
				awardCommentText: "_1uqs3HOwKgnPYqpbzW9WqV",
				coinIcon: "_2uSjw9de_n2QHtDV1EiJPd"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = s.n(m);
			const u = l.a.div("Userpic", p.a);
			t.a = r()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: s
				} = o.a, n = (e => e.replace(c.yb.Account + "_", ""))(t), {
					avatar: r,
					color: a
				} = (e => {
					const t = d.length,
						s = parseInt(e, 36),
						o = s % 20 + 1,
						n = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + o).slice(-2),
						color: d[n]
					}
				})(n), l = "".concat(s, "/avatar_default_").concat(r, "_").concat(a, ".png");
				return i.a.createElement(u, {
					style: {
						backgroundImage: "url(".concat(l, ")"),
						backgroundColor: "#".concat(a)
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				l = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				d = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = s.n(m);
			const u = i.a.img("Userpic", p.a),
				h = Object(a.c)({
					account: e => e.user.account
				}),
				C = Object(r.b)(h);
			t.a = i.a.wrapped(C(e => {
				let {
					account: t,
					className: s,
					height: o,
					isLivestreaming: r,
					trash: a,
					userId: i,
					width: m
				} = e;
				const h = r ? 36 : 20,
					C = {
						height: o || h,
						width: m || h,
						minWidth: m || h
					};
				return a ? n.a.createElement("div", {
					className: s,
					style: C
				}, n.a.createElement(d.a, {
					className: p.a.TrashIcon
				})) : i ? n.a.createElement("div", {
					className: s,
					style: C
				}, t && t.accountIcon && t.id === i ? n.a.createElement(u, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(c.a, {
					userId: i
				})) : n.a.createElement("div", {
					className: s,
					style: C
				}, t && t.accountIcon ? n.a.createElement(u, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(l.a, {
					className: p.a.ProfileIcon
				}))
			}), "ChatIcon", p.a)
		},
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, s) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				Menu: "_5my6mpNfA-0tUAWEfSqKg",
				menu: "_5my6mpNfA-0tUAWEfSqKg",
				Livestreaming: "_3BiWoByLkhvgOFD5mQKC3P",
				livestreaming: "_3BiWoByLkhvgOFD5mQKC3P",
				MenuItem: "_2w0PAV-r7nSn2rWmPNSgkZ",
				menuItem: "_2w0PAV-r7nSn2rWmPNSgkZ",
				MenuItemPermalink: "_2aYTbUyyYyWA0n00oUWj1v",
				menuItemPermalink: "_2aYTbUyyYyWA0n00oUWj1v",
				ApproveIcon: "_3gt_IOdHja-rh09hVkYpPb",
				approveIcon: "_3gt_IOdHja-rh09hVkYpPb",
				BlockIcon: "_1QA0OmqFuhRg545zEsYGHt",
				blockIcon: "_1QA0OmqFuhRg545zEsYGHt",
				DownvoteIcon: "nnun3pxpJpQYatp4jQ8qI",
				downvoteIcon: "nnun3pxpJpQYatp4jQ8qI",
				EditIcon: "_3PW1UsfpSAMxomcTcf_ikU",
				editIcon: "_3PW1UsfpSAMxomcTcf_ikU",
				FlagIcon: "_269qxNSrwp7r6TRmz330pB",
				flagIcon: "_269qxNSrwp7r6TRmz330pB",
				ModeratorIcon: "XH0mr3-n4WSQOuflprs1R",
				moderatorIcon: "XH0mr3-n4WSQOuflprs1R",
				RemoveIcon: "_2buZ4_GVymVoT-epE6aVWC",
				removeIcon: "_2buZ4_GVymVoT-epE6aVWC",
				ReplyIcon: "GOcnt_7O2SheQ1cMVusGY",
				replyIcon: "GOcnt_7O2SheQ1cMVusGY",
				SpamIcon: "_2uhO8ps5ygzeaMfBqgte48",
				spamIcon: "_2uhO8ps5ygzeaMfBqgte48",
				TrashIcon: "y5OXD3zhZe6eOjDY_te9N",
				trashIcon: "y5OXD3zhZe6eOjDY_te9N",
				UnblockIcon: "_1IhZkqtDhYt8bWr9c-84ox",
				unblockIcon: "_1IhZkqtDhYt8bWr9c-84ox",
				UpvoteIcon: "_1MOqImJegfZ2kFkmYR7sN8",
				upvoteIcon: "_1MOqImJegfZ2kFkmYR7sN8",
				HorizontalVotes: "_292WfpEp6iZvLlnRwGwndc",
				horizontalVotes: "_292WfpEp6iZvLlnRwGwndc"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, s) {
			e.exports = {
				ChatIcon: "A7lJyo4aA-0ZG543rcU5N",
				chatIcon: "A7lJyo4aA-0ZG543rcU5N",
				ReplyAuthor: "_1oqAMLcBteCs1uqiee6hPH",
				replyAuthor: "_1oqAMLcBteCs1uqiee6hPH",
				ReplyComment: "_1G2J0kP9hg_lbO0_snqlRa",
				replyComment: "_1G2J0kP9hg_lbO0_snqlRa",
				ReplyWrapper: "nJ-zNz-rKWpUAVwBrcicJ",
				replyWrapper: "nJ-zNz-rKWpUAVwBrcicJ",
				ReplyLinkBubble: "_2jEkNe2J7P_4gGTPVvYH_n",
				replyLinkBubble: "_2jEkNe2J7P_4gGTPVvYH_n",
				delete: "YvyNyAbJVOuICmvKmRvEQ",
				Livestreaming: "_2cp8F9ZQJKebx4VCw7KnnY",
				livestreaming: "_2cp8F9ZQJKebx4VCw7KnnY"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less": function(e, t, s) {
			e.exports = {
				SystemMessageText: "_2QTeDg8kTAhAgxZWbsorEm",
				systemMessageText: "_2QTeDg8kTAhAgxZWbsorEm"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Votes/index.m.less": function(e, t, s) {
			e.exports = {
				ChatHorizontalVotes: "_11h6WbV5fYKK0BS9Ky-Mg9",
				chatHorizontalVotes: "_11h6WbV5fYKK0BS9Ky-Mg9",
				downvoteWrapper: "_1X87ymkKoxgnirYJcVs4Ye",
				upvoteWrapper: "_2iWPXwSHRrHuLMUmvbO2Wn",
				ChatHorizontalVotesWrapper: "_2tzLfnxPYwtq87SptxBSUC",
				chatHorizontalVotesWrapper: "_2tzLfnxPYwtq87SptxBSUC",
				UpvoteOnlyDownvoteWrapper: "_2tPbfMliIDNZtnZOxBZ81q",
				upvoteOnlyDownvoteWrapper: "_2tPbfMliIDNZtnZOxBZ81q",
				DownvoteWrapper: "_1X87ymkKoxgnirYJcVs4Ye",
				Score: "_1q-J1j6guscRCSgb3QosSZ",
				score: "_1q-J1j6guscRCSgb3QosSZ"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				Menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				CommentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				commentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				CommentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
				commentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
				SystemMessageWrapper: "_3XyD1I20-_JDHKoCJuLrOW",
				systemMessageWrapper: "_3XyD1I20-_JDHKoCJuLrOW",
				LivestreamingCommentWrapper: "_2eTWiuSXGVaOGc5m6zQgeI",
				livestreamingCommentWrapper: "_2eTWiuSXGVaOGc5m6zQgeI",
				livestreamingTimeStamp: "_3tm5nGCrgdKGC7teW20lkz",
				DeleteText: "_3NYb7Rn0lpswKMy5MQyLQd",
				deleteText: "_3NYb7Rn0lpswKMy5MQyLQd",
				HighlightTarget: "_1xb8KSvW9CPjS0xPMZ7Dwf",
				highlightTarget: "_1xb8KSvW9CPjS0xPMZ7Dwf",
				Time: "_3zcUapb9ifA8a4OWCpuUSq",
				time: "_3zcUapb9ifA8a4OWCpuUSq",
				ErrorText: "_2juClHvsqBfQddQtKSlF6V",
				errorText: "_2juClHvsqBfQddQtKSlF6V",
				RichTextJson: "_1E4TbYahRPkKEc1TNmQX-K",
				richTextJson: "_1E4TbYahRPkKEc1TNmQX-K",
				Livestreaming: "_24c_0WdNkjV_cdd2RJ6AmK",
				livestreaming: "_24c_0WdNkjV_cdd2RJ6AmK",
				TopMeta: "SJ4qRd99ApBBSiNYdfSoh",
				topMeta: "SJ4qRd99ApBBSiNYdfSoh",
				ChatIcon: "_3vCuaD6pLcosMuwzU6nhAB",
				chatIcon: "_3vCuaD6pLcosMuwzU6nhAB",
				Reply: "_3F-9o12RM4UV20egYU2h21",
				reply: "_3F-9o12RM4UV20egYU2h21",
				CommentTruncated: "_3PXAOD2xpFqPtI_Lvf2_yc",
				commentTruncated: "_3PXAOD2xpFqPtI_Lvf2_yc",
				CommentExpanded: "yvxBkSg0EB3OQJ-wQuj73",
				commentExpanded: "yvxBkSg0EB3OQJ-wQuj73",
				TruncatedVotesButton: "_3WFcMWN18wFH1DiydIjsja",
				truncatedVotesButton: "_3WFcMWN18wFH1DiydIjsja"
			}
		},
		"./src/reddit/components/CommentsChat/Scroller/index.m.less": function(e, t, s) {
			e.exports = {
				NewComments: "_3GhW7Cq0eM7vr_gXsZP1XK",
				newComments: "_3GhW7Cq0eM7vr_gXsZP1XK",
				show: "Tptm_9duqsvpN1p297GT0",
				ButtonWrapper: "ol-vdNEpF-pHpwSKyGQDF",
				buttonWrapper: "ol-vdNEpF-pHpwSKyGQDF",
				ScrollerWrapper: "_2HUS1KWemnPFcYeDdGcB5k",
				scrollerWrapper: "_2HUS1KWemnPFcYeDdGcB5k",
				loading: "_2Nsq1nyEjWMCKSWs72G7lx",
				ScrollerSection: "_3nKpelf5u6QAnrZcGbvig_",
				scrollerSection: "_3nKpelf5u6QAnrZcGbvig_",
				gradientAnimation: "_1GHoi4QoUeFfb4IzUIMCoR",
				LivestreamingWrapper: "_2kV0SeyyPoyl4Cfm2Fi2UI",
				livestreamingWrapper: "_2kV0SeyyPoyl4Cfm2Fi2UI",
				ChunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				chunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				top: "ZuYs_5l7Qf6T91OUOD4pG"
			}
		},
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return ss
			}));
			var o = s("./node_modules/lodash/debounce.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/last.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/setInterval/index.ts"),
				u = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/actions/blockedRedditors.ts"),
				C = s("./src/reddit/actions/comment/index.ts"),
				b = s("./src/reddit/actions/comment/websocket/index.ts"),
				g = s("./src/reddit/actions/page.ts"),
				v = s("./src/reddit/components/Comments/States/index.tsx"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				_ = s("./node_modules/lodash/defer.js"),
				f = s.n(_),
				E = s("./src/lib/classNames/index.ts"),
				k = s("./src/lib/lessComponent.tsx"),
				T = s("./src/lib/makeDraftKey/index.ts"),
				y = s("./src/lib/objectSelector/index.ts"),
				I = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				O = s("./src/reddit/helpers/awards/getIconForSize.ts"),
				j = s("./src/reddit/helpers/awards/message.ts"),
				w = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				S = s("./src/reddit/components/RichTextJson/index.tsx"),
				M = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				L = s("./src/reddit/icons/svgs/Star/index.tsx"),
				N = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				R = s("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				A = s.n(R);
			const P = Object(y.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				B = e => {
					const {
						award: t,
						comment: s,
						prefersReducedMotion: o
					} = e, n = Object(O.a)(t, 64, o);
					let r = "",
						a = !0,
						i = !1;
					return t.coinPrice < j.a ? (r = A.a.silverTierAwardComment, a = !1) : t.coinPrice < j.b ? r = A.a.goldTierAwardComment : (r = A.a.platinumTierAwardComment, i = !0), c.a.createElement("div", {
						className: Object(E.a)(A.a.awardComment, r)
					}, c.a.createElement("div", {
						className: A.a.imageContainer
					}, a && c.a.createElement(c.a.Fragment, null, c.a.createElement(L.a, {
						className: Object(E.a)(A.a.backgroundAnimation, A.a.backgroundStar)
					}), c.a.createElement(N.a, {
						className: Object(E.a)(A.a.backgroundAnimation, A.a.backgroundStar, A.a.backgroundStar2)
					})), i && c.a.createElement(c.a.Fragment, null, c.a.createElement(M.a, {
						className: Object(E.a)(A.a.backgroundAnimation, A.a.backgroundSparkle, A.a.sparkleBottomLeft)
					}), c.a.createElement(M.a, {
						className: Object(E.a)(A.a.backgroundAnimation, A.a.backgroundSparkle, A.a.sparkleTopRight)
					}), c.a.createElement(M.a, {
						className: Object(E.a)(A.a.backgroundAnimation, A.a.backgroundSparkle, A.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: n
					})), c.a.createElement(S.a, {
						className: A.a.awardCommentText,
						content: Object(w.a)(s),
						key: "rich-text-".concat(s.id),
						rtJsonElementProps: P(e),
						useExplicitTextColor: !0
					}))
				};
			var D = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				W = s("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				U = s.n(W);
			const F = k.a.div("CollapsedComment", U.a);
			var V = e => {
					let {
						commentCount: t,
						onClick: s
					} = e;
					return c.a.createElement(F, {
						onClick: s
					}, x.fbt._("collapsed {collapsed message} (may be sensitive)", [x.fbt._param("collapsed message", x.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [x.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				K = s("./src/lib/humanizeDateTime/index.ts"),
				H = s("./src/reddit/models/Vote/index.ts"),
				q = s("./src/reddit/actions/postCreation/general.ts"),
				z = s("./src/reddit/actions/reportFlow.ts"),
				Y = s("./src/reddit/actions/tooltip.ts"),
				J = s("./src/reddit/actions/userBlocks.ts"),
				Z = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				G = s("./src/reddit/constants/tracking.ts"),
				Q = s("./src/reddit/selectors/telemetry.ts"),
				X = s("./src/telemetry/models/Event.ts");
			const $ = e => ({
					screen: Object(Q.screen)(e),
					profile: Object(Q.profile)(e),
					subreddit: Object(Q.subreddit)(e)
				}),
				ee = (e, t) => s => ({
					action: "load",
					noun: e,
					post: Object(Q.post)(s, t),
					source: X.b.ChatView,
					subreddit: Object(Q.subreddit)(s)
				}),
				te = e => t => Object.assign({
					source: "chat_post",
					action: G.c.VIEW,
					noun: "last_message",
					post: Object(Q.post)(t, e),
					comment: Object(Q.comment)(t, e)
				}, $(t));
			var se = s("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				oe = s.n(se);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const re = k.a.button("MenuItem", oe.a),
				ae = k.a.a("MenuItemPermalink", oe.a),
				ie = e => {
					let {
						children: t,
						comment: s,
						onClick: o,
						onHideTooltip: n,
						onShowTooltip: r,
						sendEvent: a,
						tooltipId: i,
						tooltipText: l,
						trackingNoun: d
					} = e;
					return c.a.createElement(re, {
						id: i,
						onMouseEnter: r.bind(void 0, i),
						onMouseLeave: n.bind(void 0, i),
						onClick: e => {
							o(e), d && (a(((e, t) => s => Object.assign({
								source: "comment",
								action: G.c.CLICK,
								noun: e,
								post: Object(Q.post)(s, t),
								comment: Object(Q.comment)(s, t)
							}, $(s)))(d, s.id)), a(((e, t) => s => Object.assign({
								source: "comment_overflow_menu",
								action: G.c.CLICK,
								noun: e,
								post: Object(Q.post)(s, t),
								comment: Object(Q.comment)(s, t)
							}, $(s)))(d, s.id)))
						}
					}, t, c.a.createElement(Z.c, {
						tooltipId: i,
						text: l
					}))
				},
				ce = e => c.a.createElement(ie, ne({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(ae, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var le = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				de = s("./src/reddit/components/ModModeReports/helpers.ts"),
				me = s("./src/reddit/components/ReportFlow/index.tsx"),
				pe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				he = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Ce = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				be = s("./src/reddit/icons/svgs/Ban/index.tsx"),
				ge = s("./src/reddit/icons/svgs/Edit/index.m.less"),
				ve = s.n(ge);
			var xe = e => c.a.createElement("svg", {
					className: Object(E.a)(ve.a.edit, e.className),
					viewBox: "4 4 12 12"
				}, c.a.createElement("g", {
					transform: "translate(-68.000000, -207.000000)"
				}, c.a.createElement("path", {
					d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
				}))),
				_e = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				fe = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Ee = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				ke = s("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				Te = s.n(ke);
			var ye = e => c.a.createElement("svg", {
					className: Object(E.a)(Te.a.icon, e.className),
					viewBox: "0 0 511.63 511.631"
				}, c.a.createElement("path", {
					d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
				})),
				Ie = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Oe = s("./src/reddit/models/PostDraft/index.ts"),
				je = s("./src/reddit/selectors/activeModalId.ts"),
				we = s("./src/reddit/selectors/blockedRedditors.ts"),
				Se = s("./src/reddit/selectors/experiments/chatPost.ts"),
				Me = s("./src/reddit/constants/experiments.ts"),
				Le = s("./src/reddit/helpers/chooseVariant/index.ts");
			const Ne = Object(d.a)(e => Object(Le.c)(e, {
					experimentName: Me.F,
					experimentEligibilitySelector: Le.a
				}), e => e),
				Re = e => Ne(e) === Me.A.UpvoteOnly,
				Ae = e => Ne(e) === Me.A.UpvoteDownvote;
			var Pe = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Be = s("./src/reddit/selectors/user.ts");

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const We = k.a.wrapped(be.a, "BlockIcon", oe.a),
				Ue = k.a.wrapped(_e.a, "FlagIcon", oe.a),
				Fe = k.a.wrapped(xe, "EditIcon", oe.a),
				Ve = k.a.wrapped(Ce.a, "ApproveIcon", oe.a),
				Ke = k.a.wrapped(ye, "ReplyIcon", oe.a),
				He = k.a.wrapped(Ee.a, "RemoveIcon", oe.a),
				qe = k.a.wrapped(e => c.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, c.a.createElement("g", null, c.a.createElement("path", {
					fillRule: "evenodd",
					d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
				}))), "SpamIcon", oe.a),
				ze = k.a.wrapped(Ie.a, "UnblockIcon", oe.a),
				Ye = k.a.wrapped(he.a, "UpvoteIcon", oe.a),
				Je = k.a.wrapped(ue.a, "DownvoteIcon", oe.a),
				Ze = k.a.wrapped(fe.a, "ModeratorIcon", oe.a),
				Ge = e => (t, s) => {
					let {
						comment: o
					} = s;
					return "".concat(e).concat(o.id)
				},
				Qe = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Xe = Object(d.c)({
					currentUser: Be.i,
					isMod: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(Pe.i)(e, {
							postId: s.postId
						})
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(we.c)(e, s.authorId)
					},
					isSimpleReply: Se.f,
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					approveTooltipId: Ge("CommentChatPost--Approve--"),
					blockTooltipId: Ge("CommentChatPost--Block--"),
					createTooltipId: Ge("CommentChatPost--Create--"),
					editTooltipId: Ge("CommentChatPost--Edit--"),
					replyTooltipId: Ge("CommentChatPost--Reply--"),
					reportTooltipId: Ge("CommentChatPost--Report--"),
					upvoteTooltipId: Ge("CommentChatPost--Upvote--"),
					downvoteTooltipId: Ge("CommentChatPost--Downvote--"),
					distinguishTooltipId: Ge("CommentChatPost--Distinguish--"),
					spamTooltipId: Ge("CommentChatPost--Spam--"),
					removeTooltipId: Ge("CommentChatPost--Remove--"),
					deleteTooltipId: Ge("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(je.a)(e) === Qe(s.id)
					},
					isUpvoteOnly: Re,
					isUpvoteDownvote: Ae
				});
			var $e = Object(l.b)(Xe, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						onReplyClick: () => e(Object(C.ob)({
							parentCommentId: s.id,
							commentsPageKey: o,
							singleOpen: !0
						})),
						onReportClick: () => e(Object(z.j)(s.id, !1)),
						onHideTooltip: () => e(Object(Y.i)()),
						onShowTooltip: t => e(Object(Y.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = s.media && s.media.rteMode;
							o && e(Object(C.V)({
								commentId: s.id,
								draftKey: Object(T.a)(Oe.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: o
							}))
						},
						onApproveClick: () => e(Object(C.H)(s.id)),
						onBlockClick: () => e(Object(J.h)(s.author)),
						onUnblockClick: () => e(Object(J.g)(s.author)),
						onUpvoteClick: () => e(Object(C.rb)(s.id)),
						onDownvoteClick: () => e(Object(C.T)(s.id)),
						onDistinguishClick: t => e(Object(C.S)(s.id, t)),
						onSpamClick: () => e(Object(C.cb)(s.id, !0)),
						onRemoveClick: () => e(Object(C.cb)(s.id, !1)),
						deleteComment: () => o && e(Object(C.db)(s.id, s.postId)),
						onDeleteClick: () => e(Object(q.l)(Qe(s.id))),
						toggleDeleteCommentModal: () => e(Object(q.l)(Qe(s.id)))
					}
				})(Object(pe.c)(e => {
					const {
						comment: t,
						className: s,
						createTooltipId: o,
						currentUser: n,
						deleteComment: r,
						deleteTooltipId: a,
						editTooltipId: i,
						isAuthorBlocked: l,
						isDeleteModalOpen: d,
						isLivestreaming: p,
						isMod: h,
						isSimpleReply: C,
						onApproveClick: b,
						onBlockClick: g,
						onDeleteClick: v,
						onEditClick: _,
						onHideTooltip: f,
						onRemoveClick: k,
						onReplyClick: T,
						onReportClick: y,
						onShowTooltip: I,
						onSpamClick: O,
						onUnblockClick: j,
						onUpvoteClick: w,
						onDownvoteClick: S,
						onDistinguishClick: M,
						reportFlowIsOpen: L,
						replyTooltipId: N,
						reportTooltipId: R,
						approveTooltipId: A,
						blockTooltipId: P,
						removeTooltipId: B,
						upvoteTooltipId: D,
						downvoteTooltipId: W,
						distinguishTooltipId: U,
						sendEvent: F,
						spamTooltipId: V,
						toggleDeleteCommentModal: q,
						timestampUpdateTrigger: z,
						isUpvoteOnly: Y,
						isUpvoteDownvote: J
					} = e, Z = !!n && n.id === t.authorId, G = Object(de.b)(t), Q = t.isApproved && G, X = !t.bannedBy || t.bannedBy === m.k, $ = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: I,
						sendEvent: F
					}, ee = t.isMod, {
						voteState: te,
						score: se,
						isDeleted: ne
					} = t, re = !ne && (0 === se || 1 === se || te === H.a.notVoted);
					return c.a.createElement("div", {
						className: s
					}, c.a.createElement("div", {
						className: Object(E.a)(oe.a.Menu, {
							[oe.a.Livestreaming]: p
						})
					}, (t.bannedBy || G) && h && c.a.createElement(ie, De({
						onClick: b,
						tooltipId: A,
						tooltipText: Q ? x.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : x.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(Ve, null)), C && !t.isLocked && c.a.createElement(ie, De({
						onClick: T,
						tooltipId: N,
						tooltipText: x.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(Ke, null)), h && Z && c.a.createElement(ie, De({
						onClick: () => M(ee ? m.C.NONE : m.C.MODERATOR),
						tooltipId: U,
						tooltipText: ee ? x.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : x.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(Ze, null)), (Y || J) && !p && re && c.a.createElement(ie, De({
						onClick: w,
						tooltipId: D,
						tooltipText: x.fbt._("Upvote", null, {
							hk: "21XMb7"
						})
					}, e), c.a.createElement(Ye, null)), J && !p && re && c.a.createElement(ie, De({
						onClick: S,
						tooltipId: W,
						tooltipText: x.fbt._("Downvote", null, {
							hk: "k46Xu"
						})
					}, e), c.a.createElement(Je, null)), h && X && c.a.createElement(ie, De({
						onClick: O,
						tooltipId: V,
						tooltipText: x.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(qe, null)), !Z && c.a.createElement(ie, De({
						onClick: y,
						tooltipId: R,
						tooltipText: x.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(Ue, null)), L && c.a.createElement(me.a, {
						commentId: t.id,
						overlayCustomStyles: me.b,
						postId: t.postId,
						withOverlay: !0
					}), Z && !p && c.a.createElement(ie, De({
						onClick: _,
						tooltipId: i,
						tooltipText: x.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, $), c.a.createElement(Fe, null)), h && X ? c.a.createElement(ie, De({
						onClick: k,
						tooltipId: B,
						tooltipText: t.bannedBy === m.k ? x.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : x.fbt._("Remove", null, {
							hk: "1f2QZ6"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, $), c.a.createElement(He, null)) : Z && c.a.createElement(ie, De({
						onClick: v,
						tooltipId: a,
						tooltipText: x.fbt._("Delete", null, {
							hk: "48iIX1"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(He, null)), d && c.a.createElement(le.a, {
						actionText: x.fbt._("delete", null, {
							hk: "29yw7h"
						}),
						cancelActionText: x.fbt._("keep", null, {
							hk: "1i62Aj"
						}),
						headerText: x.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: x.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: r,
						toggleModal: q,
						withOverlay: !0
					}), !p && c.a.createElement(ie, De({
						onClick: () => l ? j() : g(),
						tooltipId: P,
						tooltipText: l ? x.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : x.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: "sitewide_".concat(l ? "unblock" : "block")
					}, $), l ? c.a.createElement(ze, null) : c.a.createElement(We, null))), !p && c.a.createElement(ce, De({}, e, {
						tooltipId: o,
						tooltipText: Object(K.a)(t.created),
						timestampUpdateTrigger: z
					}), Object(u.d)(t.created)))
				})),
				et = s("./src/chat/helpers/dom.ts"),
				tt = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				st = s("./src/reddit/selectors/comments.ts"),
				ot = s("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				nt = s.n(ot);
			const rt = {},
				at = k.a.wrapped(D.a, "ChatIcon", nt.a),
				it = k.a.span("ReplyAuthor", nt.a),
				ct = k.a.div("ReplyWrapper", nt.a);
			var lt = Object(l.b)(() => Object(d.c)({
					comment: st.n
				}))(e => {
					let {
						comment: t,
						commentId: s,
						isLivestreaming: o,
						onReplyClick: n
					} = e;
					return t ? t.isDeleted ? c.a.createElement(ct, null, c.a.createElement("span", {
						className: Object(E.a)([nt.a.ReplyLinkBubble, nt.a.delete, {
							[nt.a.Livestreaming]: o
						}])
					}, c.a.createElement(Ut, null))) : c.a.createElement(ct, null, c.a.createElement("a", {
						className: Object(E.a)(nt.a.ReplyLinkBubble, {
							[nt.a.Livestreaming]: o
						}),
						href: t.permalink,
						rel: "noopener noreferrer",
						target: "_blank",
						onClick: Object(et.a)(() => n(t.id))
					}, c.a.createElement(at, {
						userId: t.authorId
					}), c.a.createElement(it, null, t.author), c.a.createElement(tt.a, {
						className: nt.a.ReplyComment,
						key: "rich-text-".concat(s),
						content: Object(w.a)(t),
						rtJsonElementProps: rt
					}))) : null
				}),
				dt = s("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				mt = s.n(dt);
			const pt = Object(y.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var ut = e => {
					const {
						comment: t
					} = e;
					return void 0 === pt(e) ? null : c.a.createElement(S.a, {
						className: mt.a.SystemMessageText,
						content: Object(w.a)(t),
						key: "rich-text-".concat(t.id),
						rtJsonElementProps: pt(e),
						useExplicitTextColor: !0
					})
				},
				ht = s("./src/reddit/components/VerticalVotes/index.tsx"),
				Ct = s("./src/reddit/components/CommentsChat/Comment/Votes/index.m.less"),
				bt = s.n(Ct);
			const gt = k.a.wrapped(ht.a, "ChatHorizontalVotes", bt.a),
				vt = Object(d.c)({
					isUpvoteOnly: Re,
					isUpvoteDownvote: Ae
				});
			class xt extends c.a.Component {
				render() {
					const {
						comment: e,
						handleVote: t,
						className: s,
						isUpvoteOnly: o,
						isUpvoteDownvote: n
					} = this.props, {
						voteState: r,
						score: a,
						isDeleted: i
					} = e, l = !i && !(0 === a || 1 === a || r === H.a.notVoted);
					return (o || n) && l && c.a.createElement("div", {
						className: Object(E.a)(bt.a.ChatHorizontalVotesWrapper, s)
					}, c.a.createElement(gt, {
						model: e,
						onVoteClick: t,
						downvoteButtonClassName: Object(E.a)(bt.a.DownvoteWrapper, {
							[bt.a.UpvoteOnlyDownvoteWrapper]: !n
						}),
						isCustomIconDisabled: !0,
						scoreClassName: bt.a.Score
					}))
				}
			}
			var _t = Object(l.b)(vt, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						handleVote: t => {
							t === H.a.upvoted && e(Object(C.rb)(s.id)), t === H.a.downvoted && e(Object(C.T)(s.id))
						}
					}
				})(Object(pe.c)(xt)),
				ft = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Et = s("./src/reddit/contexts/PageLayer/index.tsx"),
				kt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Tt = s("./src/reddit/selectors/communityAwards.ts");
			const yt = e => Object(Le.c)(e, {
				experimentName: Me.E,
				experimentEligibilitySelector: Le.a
			}) === Me.C.Enabled;
			var It = s("./src/reddit/selectors/userPrefs.ts"),
				Ot = s("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				jt = s.n(Ot);
			const wt = 250,
				St = 10,
				Mt = k.a.wrapped(kt.b, "ErrorText", jt.a),
				Lt = k.a.wrapped(I.a, "TopMeta", jt.a),
				Nt = k.a.span("DeleteText", jt.a),
				Rt = k.a.wrapped(lt, "Reply", jt.a),
				At = Object(Et.t)(),
				Pt = Object(l.b)(() => Object(d.c)({
					associatedAward: (e, t) => {
						let {
							commentId: s
						} = t;
						const o = Object(st.n)(e, {
							commentId: s
						});
						if (!o) return;
						const {
							associatedAwardId: n
						} = o;
						return n ? Object(Tt.a)(e, n) : void 0
					},
					comment: st.n,
					errorMsgs: st.F,
					flair: st.e,
					isActive: (e, t) => {
						let {
							commentId: s
						} = t;
						return Boolean(e.shortcuts.activeCommentId && s === e.shortcuts.activeCommentId)
					},
					isEditing: st.z,
					prefersReducedAnimations: It.c,
					subreddit: Et.q,
					shouldRenderSystemMessages: yt
				})),
				Bt = Object(y.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class Dt extends c.a.Component {
				constructor(e) {
					super(e), this.elemRef = c.a.createRef(), this.toggleBody = () => {
						const e = !this.state.isExpanded;
						this.setState({
							isExpanded: e
						})
					}, this.expandCollapsedComment = () => {
						const e = !this.state.isCollapsed;
						this.setState({
							isCollapsed: e
						})
					};
					const t = Boolean(e.comment && e.comment.collapsed);
					this.state = {
						isCollapsed: t,
						isExpanded: !1,
						isTruncated: !1
					}
				}
				componentDidMount() {
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > wt && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
						isTruncated: !0
					})
				}
				componentDidUpdate(e, t) {
					this.limitCommentBodyHeight(t)
				}
				limitCommentBodyHeight(e) {
					const {
						isExpanded: t,
						isTruncated: s
					} = this.state, o = t !== e.isExpanded || s !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && o) {
						const e = this.elemRef.current;
						let s = wt;
						if (t) {
							s = e.scrollHeight + St;
							const t = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = "".concat(s, "px")
					}
				}
				render() {
					const {
						associatedAward: e,
						childrenInfo: t,
						comment: s,
						commentsPageKey: o,
						errorMsgs: n,
						flair: r,
						isActive: a,
						isEditing: i,
						isLivestreaming: l,
						postId: d,
						prefersReducedAnimations: m,
						renderedInOverlay: p,
						sendEvent: h,
						targetComment: C,
						timestampUpdateTrigger: b,
						addToRefList: g,
						onReplyClick: v,
						shouldRenderSystemMessages: _
					} = this.props, {
						isCollapsed: k,
						isExpanded: y,
						isTruncated: I
					} = this.state;
					if (!s) return null;
					a && f()(() => this.elemRef.current && this.elemRef.current.focus()), f()(() => this.elemRef && this.elemRef.current && g && g(this.elemRef));
					const O = s.isSystem,
						j = !i && !s.isDeleted && !O,
						M = !!e,
						L = Object(E.a)({
							[jt.a.SystemMessageWrapper]: O && !l && _,
							[jt.a.CommentWrapper]: !l && !O,
							[jt.a.CommentExpanded]: y,
							[jt.a.CommentTruncated]: I,
							[jt.a.HighlightTarget]: C,
							[jt.a.LivestreamingCommentWrapper]: l
						});
					return k ? c.a.createElement(V, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: L
					}, i && c.a.createElement(ft.a, {
						key: "chatCommentsForm",
						isLivestreaming: l,
						postId: d,
						sendEvent: h,
						draftKey: Object(T.a)(Oe.c.edit, s.id),
						commentsPageKey: o,
						isEditing: i,
						comment: s
					}), j && c.a.createElement(c.a.Fragment, null, c.a.createElement(Lt, {
						childrenInfo: t,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: s,
						commentsPageKey: o,
						compact: !0,
						flair: r,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: l,
						renderedInOverlay: p
					}, c.a.createElement(D.a, {
						className: Object(E.a)(jt.a.ChatIcon, {
							[jt.a.Livestreaming]: l
						}),
						isLivestreaming: l,
						userId: s.authorId
					})), s.parentId && c.a.createElement(Rt, {
						commentId: s.parentId,
						onReplyClick: v,
						isLivestreaming: l
					}), l && c.a.createElement("span", {
						className: jt.a.livestreamingTimeStamp
					}, Object(u.d)(s.created)), M && e && l ? c.a.createElement(B, {
						award: e,
						comment: s,
						prefersReducedMotion: m
					}) : [c.a.createElement(S.a, {
						className: Object(E.a)(jt.a.RichTextJson, {
							[jt.a.Livestreaming]: l
						}),
						content: Object(w.a)(s),
						key: "rich-text-".concat(s.id),
						rtJsonElementProps: Bt(this.props),
						useExplicitTextColor: l
					}), c.a.createElement($e, {
						key: "Menu",
						className: Object(E.a)(jt.a.Menu, {
							[jt.a.Livestreaming]: l
						}),
						comment: s,
						commentsPageKey: o,
						isLivestreaming: l,
						timestampUpdateTrigger: b
					})]), s.isDeleted && c.a.createElement(Ut, null), j && n && n.map((e, t) => c.a.createElement(Mt, {
						key: "".concat(t, "-").concat(e)
					}, e)), !i && I && c.a.createElement("button", {
						className: Object(E.a)(jt.a.CommentReadMoreButton, {
							[jt.a.Livestreaming]: l
						}),
						onClick: this.toggleBody
					}, x.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), !l && j && c.a.createElement(_t, {
						className: Object(E.a)({
							[jt.a.TruncatedVotesButton]: I && !y
						}),
						comment: s
					}), O && !l && _ && c.a.createElement(ut, {
						comment: s
					}))
				}
			}
			const Wt = At(Pt(Dt)),
				Ut = e => {
					let {
						isLivestreaming: t
					} = e;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(D.a, {
						className: Object(E.a)(jt.a.ChatIcon, {
							[jt.a.Livestreaming]: t || !1
						}),
						trash: !0
					}), c.a.createElement(Nt, null, x.fbt._("deleted", null, {
						hk: "4rQ3ZP"
					})))
				};
			var Ft = Wt,
				Vt = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/first.js")),
				Kt = s.n(Vt),
				Ht = s("./node_modules/lodash/isEqual.js"),
				qt = s.n(Ht),
				zt = s("./src/reddit/controls/Button/index.tsx"),
				Yt = s("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Jt = s.n(Yt),
				Zt = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const Gt = k.a.div("ButtonWrapper", Jt.a),
				Qt = e => {
					let {
						top: t
					} = e;
					return c.a.createElement("span", {
						className: Object(E.a)(Jt.a.ChunkPlaceholder, {
							[Jt.a.top]: t
						})
					}, x.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				Xt = e => {
					var {
						className: t,
						isLivestreaming: s,
						isLoading: o,
						setRef: n
					} = e, r = Zt(e, ["className", "isLivestreaming", "isLoading", "setRef"]);
					return c.a.createElement("div", {
						ref: n,
						className: Object(E.a)(t, {
							[Jt.a.ScrollerWrapper]: !s,
							[Jt.a.LivestreamingWrapper]: s,
							[Jt.a.loading]: o
						})
					}, !o && r.isPrevLoading && !s && c.a.createElement(Qt, {
						top: !0
					}), r.children, !o && r.isNextLoading && !s && c.a.createElement(Qt, null))
				};
			class $t extends c.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this._ref = c.a.createRef(), this._refBeforeActiveComments = c.a.createRef(), this._refNextActiveComments = c.a.createRef(), this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						return e >= t.scrolledPosition()
					}, this.scrollToLastBottomChunk = () => {
						const e = this.state.chunks.length - 1;
						e !== this.state.activeChunkIndex ? this.setState({
							activeChunkIndex: e
						}, () => {
							this.scrollToBottom(), this.hideNewComments(!0)
						}) : (this.scrollToBottom(), this.hideNewComments(!0))
					}, this.addScrollListener = () => this.$ref && this.$ref.addEventListener("wheel", this.onScroll), this.removeScrollListener = () => this.$ref && this.$ref.removeEventListener("wheel", this.onScroll), this.preventParentScroll = e => {
						e.preventDefault();
						const t = this.$ref && this.$ref.scrollTop + e.deltaY;
						this.scrollTo(t || 0)
					}, this.shouldLoadMoreData = () => {
						this.props.loadMore && this.scrolledToTop() && this.props.loadMore(), this.loadedMore = !(!this.scrolledToTop() || !this.props.hasMoreComments)
					}, this.onScroll = e => {
						this.preventParentScroll(e), this.setNextTopChunk(), this.setNextBottomChunk(), this.shouldLoadMoreData(), this.hideNewComments()
					}, this.state = {
						initialized: !1,
						list: this.props.children,
						chunks: this.splitChunks([...this.props.children]),
						activeChunkIndex: 0,
						newCommentsCount: 0
					}
				}
				get $ref() {
					return this._ref.current
				}
				get $refBeforeActiveComments() {
					return this._refBeforeActiveComments.current
				}
				get $refNextActiveComments() {
					return this._refNextActiveComments.current
				}
				scrollTo(e) {
					this.$ref && (this.$ref.scrollTo ? this.$ref.scrollTo({
						top: e
					}) : this.$ref.scrollTop = e)
				}
				scrollToBottom() {
					this.$ref && (this.$ref.scrollTo ? this.$ref.scrollTo({
						top: this.scrollHeight() - this.clientHeight()
					}) : this.$ref.scrollTop = this.scrollHeight())
				}
				scrolledToFirstTopChunk() {
					return !this.props.hasMoreComments && this.state.activeChunkIndex <= 1
				}
				scrolledToLastBottomChunk() {
					const e = this.state.chunks.length - 1;
					return this.state.activeChunkIndex + 1 >= e
				}
				scrollToTargetComment(e) {
					const t = Math.floor(this.clientHeight() / 2);
					if (void 0 !== e) return void this.scrollTo(e - t);
					const {
						targetCommentIndex: s,
						children: o
					} = this.props;
					if (o && o.length && void 0 !== s && o[s]) {
						const e = Math.floor(s / this.chunkSize);
						this.state.activeChunkIndex !== e && this.setState({
							activeChunkIndex: e
						});
						const o = document.querySelector("#targetComment").offsetTop;
						o > t ? this.scrollTo(o - t) : this.scrollTo(o)
					}
				}
				hideNewComments(e) {
					(this.state.newCommentsCount > 0 && this.scrolledToBottom() || e) && this.setState({
						newCommentsCount: 0
					})
				}
				splitChunks(e) {
					const t = [];
					for (; e.length;) t.push(e.splice(0, this.chunkSize));
					return t
				}
				setNextBottomScroll() {
					const e = this.$refNextActiveComments ? this.$refNextActiveComments.clientHeight : 0;
					this.scrollTo(this.scrollHeight() - this.clientHeight() - e)
				}
				setNextBottomChunk() {
					if (this.scrolledToBottom()) {
						const e = this.state.activeChunkIndex + 1,
							t = this.state.chunks.length - 1,
							s = e < t ? e : t;
						this.setState({
							activeChunkIndex: s
						}, this.setNextBottomScroll)
					}
				}
				setNextTopScroll() {
					this.scrollTo(this.$refBeforeActiveComments && this.$refBeforeActiveComments.clientHeight || 0)
				}
				setNextTopChunk() {
					if (this.scrolledToTop()) {
						const e = this.state.activeChunkIndex - 1,
							t = this.state.chunks.length - 1,
							s = t > e ? e : t;
						e >= 0 && this.setState({
							activeChunkIndex: s
						}, this.setNextTopScroll)
					}
				}
				getChunkIndexOnUpdate(e, t) {
					if (this.props && this.props.children.length && this.props.children[0] && this.props.children.length - e.children.length > 1) {
						const e = t.length - this.state.chunks.length,
							s = this.state.activeChunkIndex + e;
						if (e > 1) return s
					}
				}
				componentDidMount() {
					this.addScrollListener(), this.scrollToLastBottomChunk(), this.setState({
						initialized: !0
					}), this.scrollToTargetComment(), this.props.targetCommentIndex || this.props.onLastMessageView && this.props.onLastMessageView()
				}
				componentWillUnmount() {
					this.removeScrollListener()
				}
				getSnapshotBeforeUpdate(e) {
					const t = e.children.length !== this.props.children.length || !qt()(Kt()(e.children), Kt()(this.props.children)) || !qt()(a()(e.children), a()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, s) {
					if (s && s.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							o = this.getChunkIndexOnUpdate(e, t),
							n = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: o || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== n || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + n
						}, () => {
							o && this.setNextTopScroll(), s.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1, s.scrolledBottom && n > 0 && this.props.onLastMessageView && this.props.onLastMessageView()
						})
					} else t.newCommentsCount > 0 && 0 === this.state.newCommentsCount && this.props.onLastMessageView && this.props.onLastMessageView()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, s = this.state.newCommentsCount > 0 ? Object(E.a)([Jt.a.NewComments, Jt.a.show]) : Jt.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Xt, {
						className: e,
						key: "chatScroller",
						chunkSize: this.chunkSize,
						isLoading: !this.state.initialized || !!this.props.isLoading,
						isPrevLoading: !this.scrolledToFirstTopChunk(),
						isLivestreaming: t,
						isNextLoading: !this.scrolledToLastBottomChunk(),
						setRef: this._ref
					}, c.a.createElement("div", {
						key: "beforeActiveCommentsSection",
						ref: this._refBeforeActiveComments,
						className: Jt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: Jt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Jt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(Gt, null, c.a.createElement(zt.f, {
						className: s,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", x.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [x.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var es = $t,
				ts = s("./src/reddit/selectors/posts.ts");
			const ss = 6e4,
				os = (e, t, s) => {
					let {
						authorId: o,
						id: n
					} = s;
					return e.includes(o) && !t.includes(n)
				},
				ns = Object(d.c)({
					blockedRedditors: we.a,
					blockedRedditorsPending: we.b,
					chatCommentLinks: st.g,
					isPending: st.d,
					liveCommentsWebsocket: ts.L,
					moreCommentsLink: st.E
				}),
				rs = Object(l.b)(ns, (e, t) => ({
					onLiveCommentsSubscribe: (s, o, n) => e(Object(b.a)(s, o, n, t.subredditId)),
					offLiveCommentsSubscribe: (t, s) => e(Object(b.b)(t, s)),
					loadMoreComments: s => e(Object(C.Z)(t.commentsPageKey, s)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object(g.q)(t.postId, void 0, {
						sort: m.r.CHAT
					}, m.r.CHAT))
				}));
			class as extends c.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = c.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.sendViewLastMessageTelemetry = n()(this.sendViewLastMessageTelemetry.bind(this), 100), this.state = {
						expandedCommentIds: [],
						targetCommentIndex: void 0,
						timestampUpdateTrigger: Date.now()
					}
				}
				isTimestampUpdateNeeded() {
					const {
						chatCommentLinks: e
					} = this.props, t = e[e.length - 1], s = t && t.created;
					return !!s && Object(u.c)(s) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(p.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, ss)
				}
				expandComment(e) {
					this.setState({
						expandedCommentIds: [...this.state.expandedCommentIds, e]
					})
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						commentsPageKey: t,
						liveCommentsWebsocket: s,
						loadComments: o,
						onLiveCommentsSubscribe: n,
						postId: r
					} = this.props;
					s && (e && o(), n(t, s, r), this._subscribedPostId = r, this._subscribedLiveCommentsWebsocket = s)
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					const {
						blockedRedditors: s,
						blockedRedditorsPending: o,
						chatCommentLinks: n,
						commentsPageKey: r,
						isLoading: a,
						isPending: i,
						postId: c,
						draftKey: l
					} = this.props, {
						expandedCommentIds: d,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== l || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== o || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks.length !== n.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== s.ids.length || t.expandedCommentIds.length !== d.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						chatCommentLinks: t,
						commentId: s,
						commentsPageKey: o,
						liveCommentsWebsocket: n,
						offLiveCommentsSubscribe: r,
						onLiveCommentsSubscribe: a,
						postId: i
					} = this.props;
					if (i !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), i && n && (a(o, n, i), this._subscribedPostId = i, this._subscribedLiveCommentsWebsocket = n)), this.deferTimestampUpdate(), s) {
						const e = Object(p.a)(() => {
							const {
								targetCommentIndex: o
							} = this.state;
							void 0 === o && (this.scrollToTargetComment(), s && t.forEach((e, t) => e.id === s && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: s,
						sendEvent: o
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), o(ee("history", s)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, s = a()(e);
					(null == s ? void 0 : s.id) && t(te(s.id))
				}
				scrollToTargetComment(e) {
					if (e && this._refList[e] && this._refList[e].current && this._refScroller && this._refScroller.current) {
						const t = this._refList[e].current,
							s = t ? t.offsetTop : 0;
						return this._refScroller.current.scrollToTargetComment(s), void(t && t.focus())
					}
					const {
						commentId: t
					} = this.props, s = t && document.querySelector("#targetComment");
					s && this._refScroller && this._refScroller.current && this._refScroller.current.scrollToTargetComment(s.offsetTop)
				}
				render() {
					const {
						blockedRedditors: {
							ids: e
						},
						chatCommentLinks: t,
						className: s,
						commentId: o,
						commentsPageKey: n,
						emptyStateClassName: r,
						isLivestreaming: a,
						isLoading: i,
						isPending: l,
						postId: d,
						renderedInOverlay: m,
						sendEvent: p
					} = this.props, {
						expandedCommentIds: u,
						targetCommentIndex: h,
						timestampUpdateTrigger: C
					} = this.state, b = !(t && t.length || i || l);
					return c.a.createElement(c.a.Fragment, null, b ? c.a.createElement(v.c, {
						className: r,
						isChat: !0
					}) : c.a.createElement(es, {
						className: s,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: a,
						isLoading: i || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => os(e, u, t) ? c.a.createElement(V, {
						commentCount: 1,
						key: "scroll-node-".concat(t.id),
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(Ft, {
						ref: t.id,
						key: "scroll-node-".concat(t.id),
						commentId: t.id,
						commentsPageKey: n,
						isLivestreaming: a,
						postId: d,
						renderedInOverlay: !!m,
						sendEvent: p,
						timestampUpdateTrigger: C,
						targetComment: t.id === o,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = rs(Object(pe.c)(as))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/RichTextJsonChatReply/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "qqC8Lcm050i_jAM3CePWY",
				container: "qqC8Lcm050i_jAM3CePWY"
			}
		},
		"./src/reddit/components/RichTextJsonChatReply/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				l = s("./src/reddit/models/RichTextJson/index.ts");
			const d = e => n.a.createElement(i.f, null, e),
				m = e => {
					const t = [],
						s = e.c || [],
						o = s.length;
					for (let n = 0; n < o; n++) {
						const e = s[n];
						t.push(e.e === l.w ? e.t : Object(c.e)(e, {}, n))
					}
					return n.a.createElement(n.a.Fragment, null, t)
				},
				p = e => e.c && e.c.length ? n.a.createElement(n.a.Fragment, null, Object(c.i)(e.c, null, {})) : n.a.createElement("br", null);
			var u = s("./src/reddit/constants/elementClassNames.ts"),
				h = s("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				C = s.n(h);
			const b = s("./src/lib/lessComponent.tsx").a.div("Container", C.a),
				g = {
					[l.a]: "<animated image>",
					[l.b]: "<quote>",
					[l.c]: "<code block>",
					[l.h]: "<embed>",
					[l.m]: "<image>",
					[l.p]: "<list>",
					[l.z]: "<table>",
					[l.D]: "<video>"
				};
			t.a = e => {
				const {
					className: t,
					content: s
				} = e, o = s.document, i = [], c = Object(a.b)(o), h = Object(a.c)(o);
				if (-1 !== c)
					for (let n = c; n <= h; n++) {
						const e = o[n],
							t = e && g[e.e];
						switch (e.e) {
							case l.l:
								break;
							case l.b:
							case l.c:
							case l.p:
							case l.z:
							case l.m:
							case l.a:
							case l.D:
							case l.h:
								i.push(d(t));
								break;
							case l.k:
								i.push(m(e));
								break;
							case l.u:
								i.push(p(e))
						}
					}
				return n.a.createElement(b, {
					className: Object(r.a)(u.j, t)
				}, i)
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "c", (function() {
				return O
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(n),
				a = s("./node_modules/raf/index.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				l = s.n(c),
				d = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/higherOrderComponents/asModal/index.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = s.n(v);
			var _ = Object(C.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return l.a.createElement("div", {
						className: x.a.wrapper
					}, l.a.createElement(g.a, {
						className: x.a.titleRow
					}, s), l.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), l.a.createElement(g.a, {
						className: x.a.buttonRow
					}, l.a.createElement(b.f, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = s("./src/reddit/controls/ErrorText/index.m.less"),
				E = s.n(f);
			const k = Object(m.c)({
				activeModalId: h.a
			});
			class T extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(r()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: n,
						errorModalTitle: r = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(p.a)(E.a.wrapper, s)
					}, l.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && l.a.createElement(_, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const y = Object(d.b)(k, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(T),
				I = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: o,
						fallbackMessage: n,
						messages: r = []
					} = e, a = r.length ? r : n ? [n] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(y, {
						className: s,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				O = e => l.a.createElement(I, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = y
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: s
				} = e;
				switch (t.type) {
					case n.E.AUTHORIZATION_ERROR:
						return s ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case n.E.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case n.E.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case n.E.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case n.E.LIKELY_UBLOCK_ERROR:
						return o.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(n);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(o.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				i = e => Object(o.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve"), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock"), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove"), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report"), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam"), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, s) {
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
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), n.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, s) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
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
		}
	}
]);
//# sourceMappingURL=ChatPost.0ee47408422f26d59a6c.js.map