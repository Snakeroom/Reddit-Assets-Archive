// https://www.redditstatic.com/desktop2x/ChatPost.56ca51e956db0cd1d718.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
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
				return n(e, (function(e, n, a) {
					s = o ? (o = !1, e) : t(s, e, n, a)
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
				a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? o : r,
					l = arguments.length < 3;
				return c(e, a(t, 4), s, l, n)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > r) return [];
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
				let a, r = !1;
				const i = async () => {
					o && o.length ? await e.call(window, ...o) : await e.call(window), r || (a = window.setTimeout(i, t))
				};
				return a = window.setTimeout(i, t), () => {
					r = !0, window.clearTimeout(a)
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
				a = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				r = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/lodash/first.js")),
				i = s.n(r),
				c = s("./node_modules/lodash/isArray.js"),
				l = s.n(c),
				d = s("./src/reddit/helpers/isComment.ts"),
				m = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/PostCreationForm/index.ts"),
				C = s("./src/reddit/models/Vote/index.ts");
			const g = (e, t) => {
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
							distinguishType: b(s),
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
				b = e => {
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
			const _ = (e, t, s) => {
				const o = {
						[t]: {}
					},
					{
						author: n,
						author_flair_background_color: a,
						author_flair_richtext: r,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: l,
						author_flair_type: d
					} = s;
				if (n && d) {
					if (d === u.f.Richtext) {
						if (!a || !r) return;
						return {
							[t]: {
								[n]: {
									type: d,
									backgroundColor: a,
									cssClass: void 0,
									richtext: r,
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
									backgroundColor: a,
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
			var x = s("./src/lib/env/index.ts");
			const f = new Map,
				k = e => e;
			var E;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(E || (E = {}));
			const T = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				y = (e, t) => {
					const s = k(t),
						o = f.get(s);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				I = (e, t, s, o) => {
					const n = k(t),
						a = f.get(n);
					if (a && (a.socket.readyState === WebSocket.CONNECTING || a.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					f.set(n, r), r.socket.addEventListener("open", () => {
						r.retries = Object.assign({}, T)
					}), r.socket.addEventListener("message", j.bind(null, o)), r.socket.addEventListener("close", O.bind(null, n, o)), r.socket.addEventListener("error", S.bind(null, n)), window && window.addEventListener("beforeunload", y.bind(null, e, t))
				},
				O = (e, t, s) => {
					const o = f.get(e);
					o && (o.isClosePlanned ? f.delete(e) : w(e, t))
				},
				w = (e, t) => {
					const s = f.get(e);
					if (!s) return;
					const {
						retries: {
							backoffTime: o,
							connectionAttempts: n,
							jitterAmount: a,
							maximumRetries: r
						},
						socket: i,
						uniqueId: c,
						url: l
					} = s;
					if (f.delete(e), n < r && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, n),
							r = Math.random() * a - a / 2,
							i = Math.round(e + r),
							d = Object.assign(Object.assign({}, s.retries), {
								connectionAttempts: n + 1
							});
						setTimeout(() => {
							I(l, c, d, t)
						}, i), Object(x.a)() && console.debug("Connection reset, retrying in ".concat(i, "ms"))
					}
				},
				j = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(x.a)() && console.error(t)
					}
				},
				S = (e, t) => {
					const s = f.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? f.delete(e) : Object(x.a)() && console.error(t)
				};
			var N = s("./src/reddit/selectors/comments.ts"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				L = s("./src/reddit/actions/comment/websocket/constants.ts");
			const R = Object(n.a)(L.b),
				A = Object(n.a)(L.c),
				P = Object(n.a)(L.a),
				B = Object(n.a)(L.d),
				D = {},
				W = (e, t, s, n) => async (r, i) => {
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
								case E.NEW_COMMENT: {
									const c = t.payload.name,
										l = g(t.payload),
										d = i(),
										m = Object(a.a)(d, s).sortToUse === o.r.CHAT,
										p = Object(N.n)(d, {
											commentId: c
										}),
										u = !(!c || !D[c]);
									if (l && !u) {
										const s = _(0, n, t.payload),
											o = t.payload.total_comment_count;
										if (void 0 === p) {
											const n = Object(N.x)(d, {
													commentsPageKey: e
												}),
												a = t.payload.parent_id,
												i = Object(N.j)(d, {
													commentId: a,
													commentsPageKey: e
												}),
												c = Object(N.n)(d, {
													commentId: a
												}),
												p = c && c.originId ? c.originId : a,
												u = null === i ? i : i + 1;
											if (m) r(R({
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
												setTimeout(() => r(R({
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
										} else r(A({
											authorFlair: s,
											comment: l,
											commentsPageKey: e,
											isChatSort: m,
											numComments: o
										}))
									}
									break
								}
								case E.UPDATE_COMMENT: {
									const c = t.payload.name,
										l = i(),
										d = Object(N.n)(l, {
											commentId: c
										}),
										m = g(t.payload),
										p = Object(a.a)(l, s).sortToUse === o.r.CHAT;
									if (d && m) {
										const s = _(0, n, t.payload),
											o = t.payload.total_comment_count;
										r(A({
											authorFlair: s,
											comment: m,
											commentsPageKey: e,
											isChatSort: p,
											numComments: o
										}))
									}
									break
								}
								case E.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										o = t.payload.score,
										n = i(),
										a = Object(N.n)(n, {
											commentId: s
										});
									a && r(A({
										comment: Object.assign(Object.assign({}, a), {
											score: o
										}),
										commentsPageKey: e
									}));
									break
								}
								case E.DELETE_COMMENT: {
									const e = t.payload.name,
										s = i(),
										o = Object(N.n)(s, {
											commentId: e
										});
									o && !o.isDeleted ? r(P({
										id: e
									})) : D[e] = E.DELETE_COMMENT;
									break
								}
								case E.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										o = i(),
										n = Object(N.n)(o, {
											commentId: s
										}),
										a = (o.user.account && o.user.account.id) === (n && n.authorId),
										c = !!e && !!Object(M.i)(o, {
											postId: e
										});
									!n || n.isRemoved && n.isDeleted || a || c ? D[s] = E.REMOVE_COMMENT : r(P({
										id: s
									}));
									break
								}
								case E.USER_JOIN: {
									const s = g(t.payload, {
											isSystem: !0
										}),
										o = !0;
									s && r(B({
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
				return w
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return M
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "a", (function() {
				return V
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/times.js"),
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				C = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				b = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				v = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				x = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				f = s("./src/reddit/components/Comments/States/index.m.less"),
				k = s.n(f);
			const E = d.a.wrapped(_.a, "CommentsIcon", k.a),
				T = d.a.wrapped(x.a, "SnooFacepalm", k.a),
				y = d.a.p("EmptyTitle", k.a),
				I = d.a.p("ErrorTitle", k.a),
				O = d.a.p("EmptyText", k.a),
				w = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(k.a.StateContainer, t)
					}, i.a.createElement(E, null), i.a.createElement(y, null, s ? o.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : o.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(O, null, o.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				j = () => i.a.createElement("div", {
					className: k.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(y, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: k.a.StateContainer
					}, i.a.createElement(E, null), i.a.createElement(y, null, o.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(u.h, {
						to: Object(C.b)(t)
					}, o.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				N = Object(c.b)(null, (e, t) => {
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
						className: k.a.StateContainer
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
				M = e => {
					let {
						postId: t,
						commentId: s,
						sort: o,
						apiError: n
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(k.a.StateContainer, k.a.ErrorFullPage)
					}, i.a.createElement(N, {
						postId: t,
						commentId: s,
						sort: o,
						apiError: n
					}))
				},
				L = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(p.a, null))
				}, "LoadingFullPage", k.a),
				R = d.a.div("CommentsPlaceholderContainer", k.a),
				A = d.a.div("CommentPlaceholder", k.a),
				P = d.a.div("Avatar", k.a),
				B = d.a.div("VoteColumn", k.a),
				D = d.a.div("TextColumn", k.a),
				W = d.a.wrapped(v.b, "Upvote", k.a),
				U = d.a.wrapped(b.b, "Downvote", k.a),
				F = () => i.a.createElement("div", {
					className: Object(l.a)(k.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				K = () => i.a.createElement("div", {
					className: Object(l.a)(k.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				V = e => i.a.createElement(R, null, a()(10, t => i.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(W, null), i.a.createElement(U, null)), i.a.createElement(D, null, i.a.createElement(F, null), i.a.createElement(K, null)))))
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
				a = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = s.n(m);
			const u = l.a.div("Userpic", p.a);
			t.a = a()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: s
				} = o.a, n = (e => e.replace(c.yb.Account + "_", ""))(t), {
					avatar: a,
					color: r
				} = (e => {
					const t = d.length,
						s = parseInt(e, 36),
						o = s % 20 + 1,
						n = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + o).slice(-2),
						color: d[n]
					}
				})(n), l = "".concat(s, "/avatar_default_").concat(a, "_").concat(r, ".png");
				return i.a.createElement(u, {
					style: {
						backgroundImage: "url(".concat(l, ")"),
						backgroundColor: "#".concat(r)
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
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				l = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				d = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = s.n(m);
			const u = i.a.img("Userpic", p.a),
				h = Object(r.c)({
					account: e => e.user.account
				}),
				C = Object(a.b)(h);
			t.a = i.a.wrapped(C(e => {
				let {
					account: t,
					className: s,
					height: o,
					isLivestreaming: a,
					trash: r,
					userId: i,
					width: m
				} = e;
				const h = a ? 36 : 20,
					C = {
						height: o || h,
						width: m || h,
						minWidth: m || h
					};
				return r ? n.a.createElement("div", {
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
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				LivestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF",
				livestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF"
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
				return Qt
			}));
			var o = s("./node_modules/lodash/debounce.js"),
				n = s.n(o),
				a = s("./node_modules/lodash/last.js"),
				r = s.n(a),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/setInterval/index.ts"),
				u = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/actions/blockedRedditors.ts"),
				C = s("./src/reddit/actions/comment/index.ts"),
				g = s("./src/reddit/actions/comment/websocket/index.ts"),
				b = s("./src/reddit/actions/page.ts"),
				v = s("./src/reddit/components/Comments/States/index.tsx"),
				_ = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./node_modules/lodash/defer.js"),
				f = s.n(x),
				k = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/lessComponent.tsx"),
				T = s("./src/lib/makeDraftKey/index.ts"),
				y = s("./src/lib/objectSelector/index.ts"),
				I = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				O = s("./src/reddit/helpers/awards/message.ts"),
				w = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				j = s("./src/reddit/components/RichTextJson/index.tsx"),
				S = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				N = s("./src/reddit/icons/svgs/Star/index.tsx"),
				M = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				L = s("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				R = s.n(L);
			const A = Object(y.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				P = e => {
					const {
						award: t,
						comment: s,
						iconUrl: o
					} = e;
					let n = "",
						a = !0,
						r = !1;
					return t.coinPrice < O.a ? (n = R.a.silverTierAwardComment, a = !1) : t.coinPrice < O.b ? n = R.a.goldTierAwardComment : (n = R.a.platinumTierAwardComment, r = !0), c.a.createElement("div", {
						className: Object(k.a)(R.a.awardComment, n)
					}, c.a.createElement("div", {
						className: R.a.imageContainer
					}, a && c.a.createElement(c.a.Fragment, null, c.a.createElement(N.a, {
						className: Object(k.a)(R.a.backgroundAnimation, R.a.backgroundStar)
					}), c.a.createElement(M.a, {
						className: Object(k.a)(R.a.backgroundAnimation, R.a.backgroundStar, R.a.backgroundStar2)
					})), r && c.a.createElement(c.a.Fragment, null, c.a.createElement(S.a, {
						className: Object(k.a)(R.a.backgroundAnimation, R.a.backgroundSparkle, R.a.sparkleBottomLeft)
					}), c.a.createElement(S.a, {
						className: Object(k.a)(R.a.backgroundAnimation, R.a.backgroundSparkle, R.a.sparkleTopRight)
					}), c.a.createElement(S.a, {
						className: Object(k.a)(R.a.backgroundAnimation, R.a.backgroundSparkle, R.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: o
					})), c.a.createElement(j.a, {
						className: R.a.awardCommentText,
						content: Object(w.a)(s),
						key: "rich-text-".concat(s.id),
						rtJsonElementProps: A(e),
						useExplicitTextColor: !0
					}))
				};
			var B = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				D = s("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				W = s.n(D);
			var U = e => {
					let {
						commentCount: t,
						isLivestreaming: s,
						onClick: o
					} = e;
					const n = Object(k.a)(W.a.CollapsedComment, {
						[W.a.LivestreamingWrapper]: s
					});
					return c.a.createElement("div", {
						className: n,
						onClick: o
					}, _.fbt._("collapsed {collapsed message} (may be sensitive)", [_.fbt._param("collapsed message", _.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [_.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				F = s("./src/lib/humanizeDateTime/index.ts"),
				K = s("./src/reddit/models/Vote/index.ts"),
				V = s("./src/reddit/actions/postCreation/general.ts"),
				H = s("./src/reddit/actions/reportFlow.ts"),
				q = s("./src/reddit/actions/tooltip.ts"),
				z = s("./src/reddit/actions/userBlocks.ts"),
				Y = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				J = s("./src/reddit/constants/tracking.ts"),
				G = s("./src/reddit/selectors/telemetry.ts"),
				Q = s("./src/telemetry/models/Event.ts");
			const Z = e => ({
					screen: Object(G.screen)(e),
					profile: Object(G.profile)(e),
					subreddit: Object(G.subreddit)(e)
				}),
				X = (e, t) => s => ({
					action: "load",
					noun: e,
					post: Object(G.post)(s, t),
					source: Q.b.ChatView,
					subreddit: Object(G.subreddit)(s)
				}),
				$ = e => t => Object.assign({
					source: "chat_post",
					action: J.c.VIEW,
					noun: "last_message",
					post: Object(G.post)(t, e),
					comment: Object(G.comment)(t, e)
				}, Z(t));
			var ee = s("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = E.a.button("MenuItem", te.a),
				ne = E.a.a("MenuItemPermalink", te.a),
				ae = e => {
					let {
						children: t,
						comment: s,
						onClick: o,
						onHideTooltip: n,
						onShowTooltip: a,
						sendEvent: r,
						tooltipId: i,
						tooltipText: l,
						trackingNoun: d
					} = e;
					return c.a.createElement(oe, {
						id: i,
						onMouseEnter: a.bind(void 0, i),
						onMouseLeave: n.bind(void 0, i),
						onClick: e => {
							o(e), d && (r(((e, t) => s => Object.assign({
								source: "comment",
								action: J.c.CLICK,
								noun: e,
								post: Object(G.post)(s, t),
								comment: Object(G.comment)(s, t)
							}, Z(s)))(d, s.id)), r(((e, t) => s => Object.assign({
								source: "comment_overflow_menu",
								action: J.c.CLICK,
								noun: e,
								post: Object(G.post)(s, t),
								comment: Object(G.comment)(s, t)
							}, Z(s)))(d, s.id)))
						}
					}, t, c.a.createElement(Y.c, {
						tooltipId: i,
						text: l
					}))
				},
				re = e => c.a.createElement(ae, se({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(ne, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var ie = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ce = s("./src/reddit/components/ModModeReports/helpers.ts"),
				le = s("./src/reddit/components/ReportFlow/index.tsx"),
				de = s("./src/reddit/components/TrackingHelper/index.tsx"),
				me = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				he = s("./src/reddit/icons/svgs/Edit/index.tsx"),
				Ce = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				ge = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				be = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				ve = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				_e = s("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				xe = s("./src/reddit/icons/svgs/Spam/index.tsx"),
				fe = s("./src/reddit/models/PostDraft/index.ts"),
				ke = s("./src/reddit/selectors/activeModalId.ts"),
				Ee = s("./src/reddit/selectors/blockedRedditors.ts"),
				Te = s("./src/reddit/selectors/experiments/chatPost.ts"),
				ye = s("./src/reddit/constants/experiments.ts"),
				Ie = s("./src/reddit/helpers/chooseVariant/index.ts");
			const Oe = Object(d.a)(e => Object(Ie.c)(e, {
					experimentName: ye.F,
					experimentEligibilitySelector: Ie.a
				}), e => e),
				we = e => Oe(e) === ye.A.UpvoteOnly,
				je = e => Oe(e) === ye.A.UpvoteDownvote;
			var Se = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ne = s("./src/reddit/selectors/user.ts");

			function Me() {
				return (Me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Le = E.a.wrapped(ge.a, "BlockIcon", te.a),
				Re = E.a.wrapped(Ce.a, "FlagIcon", te.a),
				Ae = E.a.wrapped(he.a, "EditIcon", te.a),
				Pe = E.a.wrapped(ue.a, "ApproveIcon", te.a),
				Be = E.a.wrapped(_e.a, "ReplyIcon", te.a),
				De = E.a.wrapped(ve.a, "RemoveIcon", te.a),
				We = E.a.wrapped(xe.a, "SpamIcon", te.a),
				Ue = E.a.wrapped(pe.a, "UpvoteIcon", te.a),
				Fe = E.a.wrapped(me.a, "DownvoteIcon", te.a),
				Ke = E.a.wrapped(be.a, "ModeratorIcon", te.a),
				Ve = e => (t, s) => {
					let {
						comment: o
					} = s;
					return "".concat(e).concat(o.id)
				},
				He = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				qe = Object(d.c)({
					currentUser: Ne.i,
					isMod: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(Se.i)(e, {
							postId: s.postId
						})
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Ee.c)(e, s.authorId)
					},
					isSimpleReply: Te.f,
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					approveTooltipId: Ve("CommentChatPost--Approve--"),
					blockTooltipId: Ve("CommentChatPost--Block--"),
					createTooltipId: Ve("CommentChatPost--Create--"),
					editTooltipId: Ve("CommentChatPost--Edit--"),
					replyTooltipId: Ve("CommentChatPost--Reply--"),
					reportTooltipId: Ve("CommentChatPost--Report--"),
					upvoteTooltipId: Ve("CommentChatPost--Upvote--"),
					downvoteTooltipId: Ve("CommentChatPost--Downvote--"),
					distinguishTooltipId: Ve("CommentChatPost--Distinguish--"),
					spamTooltipId: Ve("CommentChatPost--Spam--"),
					removeTooltipId: Ve("CommentChatPost--Remove--"),
					deleteTooltipId: Ve("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ke.a)(e) === He(s.id)
					},
					isUpvoteOnly: we,
					isUpvoteDownvote: je
				});
			var ze = Object(l.b)(qe, (e, t) => {
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
						onReportClick: t => {
							t.stopPropagation(), e(Object(H.j)(s.id, !1))
						},
						onHideTooltip: () => e(Object(q.i)()),
						onShowTooltip: t => e(Object(q.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = s.media && s.media.rteMode;
							o && e(Object(C.V)({
								commentId: s.id,
								draftKey: Object(T.a)(fe.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: o
							}))
						},
						onApproveClick: () => e(Object(C.H)(s.id)),
						onBlockClick: () => e(Object(z.h)(s.author)),
						onUnblockClick: () => e(Object(z.g)(s.author)),
						onUpvoteClick: () => e(Object(C.rb)(s.id)),
						onDownvoteClick: () => e(Object(C.T)(s.id)),
						onDistinguishClick: t => e(Object(C.S)(s.id, t)),
						onSpamClick: () => e(Object(C.cb)(s.id, !0)),
						onRemoveClick: () => e(Object(C.cb)(s.id, !1)),
						deleteComment: () => o && e(Object(C.db)(s.id, s.postId)),
						onDeleteClick: () => e(Object(V.l)(He(s.id))),
						toggleDeleteCommentModal: () => e(Object(V.l)(He(s.id)))
					}
				})(Object(de.c)(e => {
					const {
						comment: t,
						className: s,
						createTooltipId: o,
						currentUser: n,
						deleteComment: a,
						deleteTooltipId: r,
						editTooltipId: i,
						isAuthorBlocked: l,
						isDeleteModalOpen: d,
						isLivestreaming: p,
						isMod: h,
						isSimpleReply: C,
						onApproveClick: g,
						onBlockClick: b,
						onDeleteClick: v,
						onEditClick: x,
						onHideTooltip: f,
						onRemoveClick: E,
						onReplyClick: T,
						onReportClick: y,
						onShowTooltip: I,
						onSpamClick: O,
						onUnblockClick: w,
						onUpvoteClick: j,
						onDownvoteClick: S,
						onDistinguishClick: N,
						reportFlowIsOpen: M,
						replyTooltipId: L,
						reportTooltipId: R,
						approveTooltipId: A,
						blockTooltipId: P,
						removeTooltipId: B,
						upvoteTooltipId: D,
						downvoteTooltipId: W,
						distinguishTooltipId: U,
						sendEvent: V,
						spamTooltipId: H,
						toggleDeleteCommentModal: q,
						timestampUpdateTrigger: z,
						isUpvoteOnly: Y,
						isUpvoteDownvote: J
					} = e, G = !!n && n.id === t.authorId, Q = Object(ce.b)(t), Z = t.isApproved && Q, X = !t.bannedBy || t.bannedBy === m.k, $ = {
						comment: t,
						onHideTooltip: f,
						onShowTooltip: I,
						sendEvent: V
					}, ee = t.isMod, {
						voteState: se,
						score: oe,
						isDeleted: ne
					} = t, de = !ne && (0 === oe || 1 === oe || se === K.a.notVoted);
					return c.a.createElement("div", {
						className: s
					}, c.a.createElement("div", {
						className: Object(k.a)(te.a.Menu, {
							[te.a.Livestreaming]: p
						})
					}, (t.bannedBy || Q) && h && c.a.createElement(ae, Me({
						onClick: g,
						tooltipId: A,
						tooltipText: Z ? _.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : _.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(Pe, null)), C && !t.isLocked && c.a.createElement(ae, Me({
						onClick: T,
						tooltipId: L,
						tooltipText: _.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(Be, null)), h && G && c.a.createElement(ae, Me({
						onClick: () => N(ee ? m.C.NONE : m.C.MODERATOR),
						tooltipId: U,
						tooltipText: ee ? _.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : _.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(Ke, null)), (Y || J) && !p && de && c.a.createElement(ae, Me({
						onClick: j,
						tooltipId: D,
						tooltipText: _.fbt._("Upvote", null, {
							hk: "21XMb7"
						})
					}, e), c.a.createElement(Ue, null)), J && !p && de && c.a.createElement(ae, Me({
						onClick: S,
						tooltipId: W,
						tooltipText: _.fbt._("Downvote", null, {
							hk: "k46Xu"
						})
					}, e), c.a.createElement(Fe, null)), h && X && c.a.createElement(ae, Me({
						onClick: O,
						tooltipId: H,
						tooltipText: _.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(We, null)), !G && c.a.createElement(ae, Me({
						onClick: y,
						tooltipId: R,
						tooltipText: _.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(Re, null)), M && c.a.createElement(le.a, {
						commentId: t.id,
						overlayCustomStyles: le.b,
						postId: t.postId,
						withOverlay: !0
					}), G && !p && c.a.createElement(ae, Me({
						onClick: x,
						tooltipId: i,
						tooltipText: _.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, $), c.a.createElement(Ae, null)), h && X ? c.a.createElement(ae, Me({
						onClick: E,
						tooltipId: B,
						tooltipText: t.bannedBy === m.k ? _.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : _.fbt._("Remove", null, {
							hk: "1f2QZ6"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, $), c.a.createElement(De, null)) : G && c.a.createElement(ae, Me({
						onClick: v,
						tooltipId: r,
						tooltipText: _.fbt._("Delete", null, {
							hk: "48iIX1"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(De, null)), d && c.a.createElement(ie.a, {
						actionText: _.fbt._("delete", null, {
							hk: "29yw7h"
						}),
						cancelActionText: _.fbt._("keep", null, {
							hk: "1i62Aj"
						}),
						headerText: _.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: _.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: a,
						toggleModal: q,
						withOverlay: !0
					}), !!n && c.a.createElement(ae, Me({
						onClick: () => l ? w() : b(),
						tooltipId: P,
						tooltipText: l ? _.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : _.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: "sitewide_".concat(l ? "unblock" : "block")
					}, $), c.a.createElement(Le, null))), !p && c.a.createElement(re, Me({}, e, {
						tooltipId: o,
						tooltipText: Object(F.a)(t.created),
						timestampUpdateTrigger: z
					}), Object(u.d)(t.created)))
				})),
				Ye = s("./src/chat/helpers/dom.ts"),
				Je = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				Ge = s("./src/reddit/selectors/comments.ts"),
				Qe = s("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				Ze = s.n(Qe);
			const Xe = {},
				$e = E.a.wrapped(B.a, "ChatIcon", Ze.a),
				et = E.a.span("ReplyAuthor", Ze.a),
				tt = E.a.div("ReplyWrapper", Ze.a);
			var st = Object(l.b)(() => Object(d.c)({
					comment: Ge.n
				}))(e => {
					let {
						comment: t,
						commentId: s,
						isLivestreaming: o,
						onReplyClick: n
					} = e;
					return t ? t.isDeleted ? c.a.createElement(tt, null, c.a.createElement("span", {
						className: Object(k.a)([Ze.a.ReplyLinkBubble, Ze.a.delete, {
							[Ze.a.Livestreaming]: o
						}])
					}, c.a.createElement(Rt, null))) : c.a.createElement(tt, null, c.a.createElement("a", {
						className: Object(k.a)(Ze.a.ReplyLinkBubble, {
							[Ze.a.Livestreaming]: o
						}),
						href: t.permalink,
						rel: "noopener noreferrer",
						target: "_blank",
						onClick: Object(Ye.a)(() => n(t.id))
					}, c.a.createElement($e, {
						userId: t.authorId
					}), c.a.createElement(et, null, t.author), c.a.createElement(Je.a, {
						className: Ze.a.ReplyComment,
						key: "rich-text-".concat(s),
						content: Object(w.a)(t),
						rtJsonElementProps: Xe
					}))) : null
				}),
				ot = s("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				nt = s.n(ot);
			const at = Object(y.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var rt = e => {
					const {
						comment: t
					} = e;
					return void 0 === at(e) ? null : c.a.createElement(j.a, {
						className: nt.a.SystemMessageText,
						content: Object(w.a)(t),
						key: "rich-text-".concat(t.id),
						rtJsonElementProps: at(e),
						useExplicitTextColor: !0
					})
				},
				it = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ct = s("./src/reddit/components/CommentsChat/Comment/Votes/index.m.less"),
				lt = s.n(ct);
			const dt = E.a.wrapped(it.a, "ChatHorizontalVotes", lt.a),
				mt = Object(d.c)({
					isUpvoteOnly: we,
					isUpvoteDownvote: je
				});
			class pt extends c.a.Component {
				render() {
					const {
						comment: e,
						handleVote: t,
						className: s,
						isUpvoteOnly: o,
						isUpvoteDownvote: n
					} = this.props, {
						voteState: a,
						score: r,
						isDeleted: i
					} = e, l = !i && !(0 === r || 1 === r || a === K.a.notVoted);
					return (o || n) && l && c.a.createElement("div", {
						className: Object(k.a)(lt.a.ChatHorizontalVotesWrapper, s)
					}, c.a.createElement(dt, {
						model: e,
						onVoteClick: t,
						downvoteButtonClassName: Object(k.a)(lt.a.DownvoteWrapper, {
							[lt.a.UpvoteOnlyDownvoteWrapper]: !n
						}),
						isCustomIconDisabled: !0,
						scoreClassName: lt.a.Score
					}))
				}
			}
			var ut = Object(l.b)(mt, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						handleVote: t => {
							t === K.a.upvoted && e(Object(C.rb)(s.id)), t === K.a.downvoted && e(Object(C.T)(s.id))
						}
					}
				})(Object(de.c)(pt)),
				ht = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ct = s("./src/reddit/contexts/PageLayer/index.tsx"),
				gt = s("./src/reddit/controls/ErrorText/index.tsx");
			const bt = e => Object(Ie.c)(e, {
				experimentName: ye.E,
				experimentEligibilitySelector: Ie.a
			}) === ye.C.Enabled;
			var vt = s("./src/reddit/selectors/communityAwards.ts");
			const _t = (e, t) => {
				let {
					commentId: s
				} = t;
				const o = Object(Ge.n)(e, {
					commentId: s
				});
				if (o && o.associatedAwardId) return Object(vt.a)(e, o.associatedAwardId)
			};
			var xt = s("./src/reddit/selectors/gold/awardIcon.ts"),
				ft = s("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				kt = s.n(ft);
			const Et = 250,
				Tt = 10,
				yt = E.a.wrapped(gt.b, "ErrorText", kt.a),
				It = E.a.wrapped(I.a, "TopMeta", kt.a),
				Ot = E.a.span("DeleteText", kt.a),
				wt = E.a.wrapped(st, "Reply", kt.a),
				jt = Object(Ct.t)(),
				St = Object(l.b)(() => Object(d.c)({
					associatedAward: (e, t) => {
						let {
							commentId: s
						} = t;
						return _t(e, {
							commentId: s
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: s
						} = t;
						const o = _t(e, {
							commentId: s
						});
						if (o) return Object(xt.a)(e, {
							award: o,
							minSize: 64,
							postOrCommentId: s
						})
					},
					comment: Ge.n,
					errorMsgs: Ge.F,
					flair: Ge.e,
					isActive: (e, t) => {
						let {
							commentId: s
						} = t;
						return Boolean(e.shortcuts.activeCommentId && s === e.shortcuts.activeCommentId)
					},
					isEditing: Ge.z,
					subreddit: Ct.q,
					shouldRenderSystemMessages: bt
				})),
				Nt = Object(y.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class Mt extends c.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Et && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
						let s = Et;
						if (t) {
							s = e.scrollHeight + Tt;
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
						awardIconUrl: t,
						childrenInfo: s,
						comment: o,
						commentsPageKey: n,
						errorMsgs: a,
						flair: r,
						isActive: i,
						isEditing: l,
						isLivestreaming: d,
						postId: m,
						renderedInOverlay: p,
						sendEvent: h,
						targetComment: C,
						timestampUpdateTrigger: g,
						addToRefList: b,
						onReplyClick: v,
						shouldRenderSystemMessages: x
					} = this.props, {
						isCollapsed: E,
						isExpanded: y,
						isTruncated: I
					} = this.state;
					if (!o) return null;
					i && f()(() => this.elemRef.current && this.elemRef.current.focus()), f()(() => this.elemRef && this.elemRef.current && b && b(this.elemRef));
					const O = o.isSystem,
						S = !l && !o.isDeleted && !O,
						N = !!e,
						M = Object(k.a)({
							[kt.a.SystemMessageWrapper]: O && !d && x,
							[kt.a.CommentWrapper]: !d && !O,
							[kt.a.CommentExpanded]: y,
							[kt.a.CommentTruncated]: I,
							[kt.a.HighlightTarget]: C,
							[kt.a.LivestreamingCommentWrapper]: d
						});
					return E ? c.a.createElement(U, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: M
					}, l && c.a.createElement(ht.a, {
						key: "chatCommentsForm",
						isLivestreaming: d,
						postId: m,
						sendEvent: h,
						draftKey: Object(T.a)(fe.c.edit, o.id),
						commentsPageKey: n,
						isEditing: l,
						comment: o
					}), S && c.a.createElement(c.a.Fragment, null, c.a.createElement(It, {
						childrenInfo: s,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: o,
						commentsPageKey: n,
						compact: !0,
						flair: r,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: d,
						renderedInOverlay: p
					}, c.a.createElement(B.a, {
						className: Object(k.a)(kt.a.ChatIcon, {
							[kt.a.Livestreaming]: d
						}),
						isLivestreaming: d,
						userId: o.authorId
					})), o.parentId && c.a.createElement(wt, {
						commentId: o.parentId,
						onReplyClick: v,
						isLivestreaming: d
					}), d && c.a.createElement("span", {
						className: kt.a.livestreamingTimeStamp
					}, Object(u.d)(o.created)), N && e && d ? c.a.createElement(P, {
						award: e,
						comment: o,
						iconUrl: t
					}) : [c.a.createElement(j.a, {
						className: Object(k.a)(kt.a.RichTextJson, {
							[kt.a.Livestreaming]: d
						}),
						content: Object(w.a)(o),
						key: "rich-text-".concat(o.id),
						rtJsonElementProps: Nt(this.props),
						useExplicitTextColor: d
					}), c.a.createElement(ze, {
						key: "Menu",
						className: Object(k.a)(kt.a.Menu, {
							[kt.a.Livestreaming]: d
						}),
						comment: o,
						commentsPageKey: n,
						isLivestreaming: d,
						timestampUpdateTrigger: g
					})]), o.isDeleted && c.a.createElement(Rt, null), S && a && a.map((e, t) => c.a.createElement(yt, {
						key: "".concat(t, "-").concat(e)
					}, e)), !l && I && c.a.createElement("button", {
						className: Object(k.a)(kt.a.CommentReadMoreButton, {
							[kt.a.Livestreaming]: d
						}),
						onClick: this.toggleBody
					}, _.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), !d && S && c.a.createElement(ut, {
						className: Object(k.a)({
							[kt.a.TruncatedVotesButton]: I && !y
						}),
						comment: o
					}), O && !d && x && c.a.createElement(rt, {
						comment: o
					}))
				}
			}
			const Lt = jt(St(Mt)),
				Rt = e => {
					let {
						isLivestreaming: t
					} = e;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(B.a, {
						className: Object(k.a)(kt.a.ChatIcon, {
							[kt.a.Livestreaming]: t || !1
						}),
						trash: !0
					}), c.a.createElement(Ot, null, _.fbt._("deleted", null, {
						hk: "4rQ3ZP"
					})))
				};
			var At = Lt,
				Pt = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/first.js")),
				Bt = s.n(Pt),
				Dt = s("./node_modules/lodash/isEqual.js"),
				Wt = s.n(Dt),
				Ut = s("./src/reddit/controls/Button/index.tsx"),
				Ft = s("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Kt = s.n(Ft),
				Vt = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const Ht = E.a.div("ButtonWrapper", Kt.a),
				qt = e => {
					let {
						top: t
					} = e;
					return c.a.createElement("span", {
						className: Object(k.a)(Kt.a.ChunkPlaceholder, {
							[Kt.a.top]: t
						})
					}, _.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				zt = e => {
					var {
						className: t,
						isLivestreaming: s,
						isLoading: o,
						setRef: n
					} = e, a = Vt(e, ["className", "isLivestreaming", "isLoading", "setRef"]);
					return c.a.createElement("div", {
						ref: n,
						className: Object(k.a)(t, {
							[Kt.a.ScrollerWrapper]: !s,
							[Kt.a.LivestreamingWrapper]: s,
							[Kt.a.loading]: o
						})
					}, !o && a.isPrevLoading && !s && c.a.createElement(qt, {
						top: !0
					}), a.children, !o && a.isNextLoading && !s && c.a.createElement(qt, null))
				};
			class Yt extends c.a.Component {
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
					const t = e.children.length !== this.props.children.length || !Wt()(Bt()(e.children), Bt()(this.props.children)) || !Wt()(r()(e.children), r()(this.props.children));
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
					} = this.props, s = this.state.newCommentsCount > 0 ? Object(k.a)([Kt.a.NewComments, Kt.a.show]) : Kt.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(zt, {
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
						className: Kt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: Kt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Kt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(Ht, null, c.a.createElement(Ut.f, {
						className: s,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", _.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [_.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var Jt = Yt,
				Gt = s("./src/reddit/selectors/posts.ts");
			const Qt = 6e4,
				Zt = (e, t, s) => {
					let {
						authorId: o,
						id: n
					} = s;
					return e.includes(o) && !t.includes(n)
				},
				Xt = Object(d.c)({
					blockedRedditors: Ee.a,
					blockedRedditorsPending: Ee.b,
					chatCommentLinks: Ge.g,
					isPending: Ge.d,
					liveCommentsWebsocket: Gt.L,
					moreCommentsLink: Ge.E
				}),
				$t = Object(l.b)(Xt, (e, t) => ({
					onLiveCommentsSubscribe: (s, o, n) => e(Object(g.a)(s, o, n, t.subredditId)),
					offLiveCommentsSubscribe: (t, s) => e(Object(g.b)(t, s)),
					loadMoreComments: s => e(Object(C.Z)(t.commentsPageKey, s)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object(b.q)(t.postId, void 0, {
						sort: m.r.CHAT
					}, m.r.CHAT))
				}));
			class es extends c.a.Component {
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
					}, Qt)
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
						postId: a
					} = this.props;
					s && (e && o(), n(t, s, a), this._subscribedPostId = a, this._subscribedLiveCommentsWebsocket = s)
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
						commentsPageKey: a,
						isLoading: r,
						isPending: i,
						postId: c,
						draftKey: l
					} = this.props, {
						expandedCommentIds: d,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== l || e.isLoading !== r || e.isPending !== i || e.blockedRedditorsPending !== o || e.commentsPageKey !== a || e.chatCommentLinks && e.chatCommentLinks.length !== n.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== s.ids.length || t.expandedCommentIds.length !== d.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						chatCommentLinks: t,
						commentId: s,
						commentsPageKey: o,
						liveCommentsWebsocket: n,
						offLiveCommentsSubscribe: a,
						onLiveCommentsSubscribe: r,
						postId: i
					} = this.props;
					if (i !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && a(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), i && n && (r(o, n, i), this._subscribedPostId = i, this._subscribedLiveCommentsWebsocket = n)), this.deferTimestampUpdate(), s) {
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
					t && !t.pending && (e(t.moreCommentId), o(X("history", s)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, s = r()(e);
					(null == s ? void 0 : s.id) && t($(s.id))
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
						emptyStateClassName: a,
						isLivestreaming: r,
						isLoading: i,
						isPending: l,
						postId: d,
						renderedInOverlay: m,
						sendEvent: p
					} = this.props, {
						expandedCommentIds: u,
						targetCommentIndex: h,
						timestampUpdateTrigger: C
					} = this.state, g = !(t && t.length || i || l);
					return c.a.createElement(c.a.Fragment, null, g ? c.a.createElement(v.c, {
						className: a,
						isChat: !0
					}) : c.a.createElement(Jt, {
						className: s,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: r,
						isLoading: i || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => Zt(e, u, t) ? c.a.createElement(U, {
						commentCount: 1,
						isLivestreaming: r,
						key: "scroll-node-".concat(t.id),
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(At, {
						ref: t.id,
						key: "scroll-node-".concat(t.id),
						commentId: t.id,
						commentsPageKey: n,
						isLivestreaming: r,
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
			t.default = $t(Object(de.c)(es))
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
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/RichTextJson/index.tsx"),
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
			const g = s("./src/lib/lessComponent.tsx").a.div("Container", C.a),
				b = {
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
				} = e, o = s.document, i = [], c = Object(r.b)(o), h = Object(r.c)(o);
				if (-1 !== c)
					for (let n = c; n <= h; n++) {
						const e = o[n],
							t = e && b[e.e];
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
				return n.a.createElement(g, {
					className: Object(a.a)(u.j, t)
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
				a = s.n(n),
				r = s("./node_modules/raf/index.js"),
				i = s.n(r),
				c = s("./node_modules/react/index.js"),
				l = s.n(c),
				d = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/higherOrderComponents/asModal/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				_ = s.n(v);
			var x = Object(C.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return l.a.createElement("div", {
						className: _.a.wrapper
					}, l.a.createElement(b.a, {
						className: _.a.titleRow
					}, s), l.a.createElement("div", {
						className: _.a.detailsContainer
					}, t), l.a.createElement(b.a, {
						className: _.a.buttonRow
					}, l.a.createElement(g.f, {
						className: _.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = s("./src/reddit/controls/ErrorText/index.m.less"),
				k = s.n(f);
			const E = Object(m.c)({
				activeModalId: h.a
			});
			class T extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(a()())
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
						errorModalTitle: a = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(p.a)(k.a.wrapper, s)
					}, l.a.createElement("span", {
						className: k.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: k.a.moreText,
						onClick: this.toggleModal
					}, r), t === i && l.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const y = Object(d.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(T),
				I = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: o,
						fallbackMessage: n,
						messages: a = []
					} = e, r = a.length ? a : n ? [n] : [];
					return r.length ? l.a.createElement("div", {
						className: t
					}, r.map((e, t) => l.a.createElement(y, {
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
				return a
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");

			function a(e) {
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
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = s.n(n);
			const r = e => {
					let {
						isLoading: t
					} = e;
					return Object(o.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(o.a)(a.a.loadingBar, r(e))
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
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, n.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, n.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
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
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, n.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function a(e) {
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
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function a(e) {
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
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function a(e) {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.56ca51e956db0cd1d718.js.map