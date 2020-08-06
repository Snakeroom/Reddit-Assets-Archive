// https://www.redditstatic.com/desktop2x/ChatPost.9a2b0329812f288b72ca.js
// Retrieved at 8/6/2020, 6:30:06 PM by Reddit Dataminer v1.0.0
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
			var f = s("./src/lib/env/index.ts");
			const _ = new Map,
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
						o = _.get(s);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				I = (e, t, s, o) => {
					const n = E(t),
						r = _.get(n);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					_.set(n, a), a.socket.addEventListener("open", () => {
						a.retries = Object.assign({}, T)
					}), a.socket.addEventListener("message", w.bind(null, o)), a.socket.addEventListener("close", O.bind(null, n, o)), a.socket.addEventListener("error", S.bind(null, n)), window && window.addEventListener("beforeunload", y.bind(null, e, t))
				},
				O = (e, t, s) => {
					const o = _.get(e);
					o && (o.isClosePlanned ? _.delete(e) : j(e, t))
				},
				j = (e, t) => {
					const s = _.get(e);
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
					if (_.delete(e), n < a && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, n),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							d = Object.assign(Object.assign({}, s.retries), {
								connectionAttempts: n + 1
							});
						setTimeout(() => {
							I(l, c, d, t)
						}, i), Object(f.a)() && console.debug("Connection reset, retrying in ".concat(i, "ms"))
					}
				},
				w = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(f.a)() && console.error(t)
					}
				},
				S = (e, t) => {
					const s = _.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? _.delete(e) : Object(f.a)() && console.error(t)
				};
			var L = s("./src/reddit/selectors/comments.ts"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
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
										p = Object(L.n)(d, {
											commentId: c
										}),
										u = !(!c || !D[c]);
									if (l && !u) {
										const s = x(0, n, t.payload),
											o = t.payload.total_comment_count;
										if (void 0 === p) {
											const n = Object(L.x)(d, {
													commentsPageKey: e
												}),
												r = t.payload.parent_id,
												i = Object(L.j)(d, {
													commentId: r,
													commentsPageKey: e
												}),
												c = Object(L.n)(d, {
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
										d = Object(L.n)(l, {
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
										r = Object(L.n)(n, {
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
										o = Object(L.n)(s, {
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
										n = Object(L.n)(o, {
											commentId: s
										}),
										r = (o.user.account && o.user.account.id) === (n && n.authorId),
										c = !!e && !!Object(M.i)(o, {
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
				return L
			})), s.d(t, "d", (function() {
				return M
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "a", (function() {
				return H
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
				f = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				_ = s("./src/reddit/components/Comments/States/index.m.less"),
				E = s.n(_);
			const k = d.a.wrapped(x.a, "CommentsIcon", E.a),
				T = d.a.wrapped(f.a, "SnooFacepalm", E.a),
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
				L = Object(c.b)(null, (e, t) => {
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
				M = e => {
					let {
						postId: t,
						commentId: s,
						sort: o,
						apiError: n
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(E.a.StateContainer, E.a.ErrorFullPage)
					}, i.a.createElement(L, {
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
				K = () => i.a.createElement("div", {
					className: Object(l.a)(E.a.CommentBodyPlaceholder, Object(b.a)({
						isLoading: !0
					}))
				}),
				H = e => i.a.createElement(R, null, r()(10, t => i.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(b.a)({
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
				return $t
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/setInterval/index.ts"),
				l = s("./src/lib/timeAgo/index.ts"),
				d = s("./src/reddit/actions/blockedRedditors.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/comment/websocket/index.ts"),
				u = s("./src/reddit/actions/page.ts"),
				h = s("./src/reddit/components/Comments/States/index.tsx"),
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./node_modules/lodash/defer.js"),
				g = s.n(b),
				v = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/lessComponent.tsx"),
				f = s("./src/lib/makeDraftKey/index.ts"),
				_ = s("./src/lib/objectSelector/index.ts"),
				E = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				k = s("./src/reddit/helpers/awards/getIconForSize.ts"),
				T = s("./src/reddit/helpers/awards/message.ts"),
				y = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				I = s("./src/reddit/components/RichTextJson/index.tsx"),
				O = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				j = s("./src/reddit/icons/svgs/Star/index.tsx"),
				w = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				S = s("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				L = s.n(S);
			const M = Object(_.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				N = e => {
					const {
						award: t,
						comment: s,
						prefersReducedMotion: o
					} = e, r = Object(k.a)(t, 64, o);
					let a = "",
						i = !0,
						c = !1;
					return t.coinPrice < T.a ? (a = L.a.silverTierAwardComment, i = !1) : t.coinPrice < T.b ? a = L.a.goldTierAwardComment : (a = L.a.platinumTierAwardComment, c = !0), n.a.createElement("div", {
						className: Object(v.a)(L.a.awardComment, a)
					}, n.a.createElement("div", {
						className: L.a.imageContainer
					}, i && n.a.createElement(n.a.Fragment, null, n.a.createElement(j.a, {
						className: Object(v.a)(L.a.backgroundAnimation, L.a.backgroundStar)
					}), n.a.createElement(w.a, {
						className: Object(v.a)(L.a.backgroundAnimation, L.a.backgroundStar, L.a.backgroundStar2)
					})), c && n.a.createElement(n.a.Fragment, null, n.a.createElement(O.a, {
						className: Object(v.a)(L.a.backgroundAnimation, L.a.backgroundSparkle, L.a.sparkleBottomLeft)
					}), n.a.createElement(O.a, {
						className: Object(v.a)(L.a.backgroundAnimation, L.a.backgroundSparkle, L.a.sparkleTopRight)
					}), n.a.createElement(O.a, {
						className: Object(v.a)(L.a.backgroundAnimation, L.a.backgroundSparkle, L.a.sparkleBottomRight)
					})), n.a.createElement("img", {
						src: r
					})), n.a.createElement(I.a, {
						className: L.a.awardCommentText,
						content: Object(y.a)(s),
						key: "rich-text-".concat(s.id),
						rtJsonElementProps: M(e),
						useExplicitTextColor: !0
					}))
				};
			var R = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				A = s("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				P = s.n(A);
			const B = x.a.div("CollapsedComment", P.a);
			var D = e => {
					let {
						commentCount: t,
						onClick: s
					} = e;
					return n.a.createElement(B, {
						onClick: s
					}, C.fbt._("collapsed {collapsed message} (may be sensitive)", [C.fbt._param("collapsed message", C.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [C.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				W = s("./src/lib/humanizeDateTime/index.ts"),
				U = s("./src/reddit/models/Vote/index.ts"),
				F = s("./src/reddit/actions/postCreation/general.ts"),
				K = s("./src/reddit/actions/reportFlow.ts"),
				H = s("./src/reddit/actions/tooltip.ts"),
				q = s("./src/reddit/actions/userBlocks.ts"),
				V = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				z = s("./src/reddit/constants/tracking.ts"),
				Y = s("./src/reddit/selectors/telemetry.ts"),
				Z = s("./src/telemetry/models/Event.ts");
			const J = e => ({
					screen: Object(Y.screen)(e),
					profile: Object(Y.profile)(e),
					subreddit: Object(Y.subreddit)(e)
				}),
				G = (e, t) => s => ({
					action: "load",
					noun: e,
					post: Object(Y.post)(s, t),
					source: Z.b.ChatView,
					subreddit: Object(Y.subreddit)(s)
				});
			var Q = s("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				X = s.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = x.a.button("MenuItem", X.a),
				te = x.a.a("MenuItemPermalink", X.a),
				se = e => {
					let {
						children: t,
						comment: s,
						onClick: o,
						onHideTooltip: r,
						onShowTooltip: a,
						sendEvent: i,
						tooltipId: c,
						tooltipText: l,
						trackingNoun: d
					} = e;
					return n.a.createElement(ee, {
						id: c,
						onMouseEnter: a.bind(void 0, c),
						onMouseLeave: r.bind(void 0, c),
						onClick: e => {
							o(e), d && (i(((e, t) => s => Object.assign({
								source: "comment",
								action: z.c.CLICK,
								noun: e,
								post: Object(Y.post)(s, t),
								comment: Object(Y.comment)(s, t)
							}, J(s)))(d, s.id)), i(((e, t) => s => Object.assign({
								source: "comment_overflow_menu",
								action: z.c.CLICK,
								noun: e,
								post: Object(Y.post)(s, t),
								comment: Object(Y.comment)(s, t)
							}, J(s)))(d, s.id)))
						}
					}, t, n.a.createElement(V.c, {
						tooltipId: c,
						text: l
					}))
				},
				oe = e => n.a.createElement(se, $({
					onClick: e.onHideTooltip
				}, e), n.a.createElement(te, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var ne = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				re = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ae = s("./src/reddit/components/ReportFlow/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				le = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				de = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				me = s("./src/reddit/icons/svgs/Ban/index.tsx"),
				pe = s("./src/reddit/icons/svgs/Edit/index.m.less"),
				ue = s.n(pe);
			var he = e => n.a.createElement("svg", {
					className: Object(v.a)(ue.a.edit, e.className),
					viewBox: "4 4 12 12"
				}, n.a.createElement("g", {
					transform: "translate(-68.000000, -207.000000)"
				}, n.a.createElement("path", {
					d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
				}))),
				Ce = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				be = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				ge = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				ve = s("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				xe = s.n(ve);
			var fe = e => n.a.createElement("svg", {
					className: Object(v.a)(xe.a.icon, e.className),
					viewBox: "0 0 511.63 511.631"
				}, n.a.createElement("path", {
					d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
				})),
				_e = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Ee = s("./src/reddit/models/PostDraft/index.ts"),
				ke = s("./src/reddit/selectors/activeModalId.ts"),
				Te = s("./src/reddit/selectors/blockedRedditors.ts"),
				ye = s("./src/reddit/selectors/experiments/chatPost.ts"),
				Ie = s("./src/reddit/constants/experiments.ts"),
				Oe = s("./src/reddit/helpers/chooseVariant/index.ts");
			const je = Object(a.a)(e => Object(Oe.c)(e, {
					experimentName: Ie.G,
					experimentEligibilitySelector: Oe.a
				}), e => e),
				we = e => je(e) === Ie.A.UpvoteOnly,
				Se = e => je(e) === Ie.A.UpvoteDownvote;
			var Le = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Me = s("./src/reddit/selectors/user.ts");

			function Ne() {
				return (Ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = x.a.wrapped(me.a, "BlockIcon", X.a),
				Ae = x.a.wrapped(Ce.a, "FlagIcon", X.a),
				Pe = x.a.wrapped(he, "EditIcon", X.a),
				Be = x.a.wrapped(de.a, "ApproveIcon", X.a),
				De = x.a.wrapped(fe, "ReplyIcon", X.a),
				We = x.a.wrapped(ge.a, "RemoveIcon", X.a),
				Ue = x.a.wrapped(e => n.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					fillRule: "evenodd",
					d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
				}))), "SpamIcon", X.a),
				Fe = x.a.wrapped(_e.a, "UnblockIcon", X.a),
				Ke = x.a.wrapped(le.a, "UpvoteIcon", X.a),
				He = x.a.wrapped(ce.a, "DownvoteIcon", X.a),
				qe = x.a.wrapped(be.a, "ModeratorIcon", X.a),
				Ve = e => (t, s) => {
					let {
						comment: o
					} = s;
					return "".concat(e).concat(o.id)
				},
				ze = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ye = Object(a.c)({
					currentUser: Me.i,
					isMod: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(Le.i)(e, {
							postId: s.postId
						})
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Te.c)(e, s.authorId)
					},
					isSimpleReply: ye.f,
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
						return Object(ke.a)(e) === ze(s.id)
					},
					isUpvoteOnly: we,
					isUpvoteDownvote: Se
				});
			var Ze = Object(r.b)(Ye, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						onReplyClick: () => e(Object(m.ob)({
							parentCommentId: s.id,
							commentsPageKey: o,
							singleOpen: !0
						})),
						onReportClick: () => e(Object(K.j)(s.id, !1)),
						onHideTooltip: () => e(Object(H.i)()),
						onShowTooltip: t => e(Object(H.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = s.media && s.media.rteMode;
							o && e(Object(m.V)({
								commentId: s.id,
								draftKey: Object(f.a)(Ee.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: o
							}))
						},
						onApproveClick: () => e(Object(m.H)(s.id)),
						onBlockClick: () => e(Object(q.h)(s.author)),
						onUnblockClick: () => e(Object(q.g)(s.author)),
						onUpvoteClick: () => e(Object(m.rb)(s.id)),
						onDownvoteClick: () => e(Object(m.T)(s.id)),
						onDistinguishClick: t => e(Object(m.S)(s.id, t)),
						onSpamClick: () => e(Object(m.cb)(s.id, !0)),
						onRemoveClick: () => e(Object(m.cb)(s.id, !1)),
						deleteComment: () => o && e(Object(m.db)(s.id, s.postId)),
						onDeleteClick: () => e(Object(F.m)(ze(s.id))),
						toggleDeleteCommentModal: () => e(Object(F.m)(ze(s.id)))
					}
				})(Object(ie.c)(e => {
					const {
						comment: t,
						className: s,
						createTooltipId: o,
						currentUser: r,
						deleteComment: a,
						deleteTooltipId: c,
						editTooltipId: d,
						isAuthorBlocked: m,
						isDeleteModalOpen: p,
						isLivestreaming: u,
						isMod: h,
						isSimpleReply: b,
						onApproveClick: g,
						onBlockClick: x,
						onDeleteClick: f,
						onEditClick: _,
						onHideTooltip: E,
						onRemoveClick: k,
						onReplyClick: T,
						onReportClick: y,
						onShowTooltip: I,
						onSpamClick: O,
						onUnblockClick: j,
						onUpvoteClick: w,
						onDownvoteClick: S,
						onDistinguishClick: L,
						reportFlowIsOpen: M,
						replyTooltipId: N,
						reportTooltipId: R,
						approveTooltipId: A,
						blockTooltipId: P,
						removeTooltipId: B,
						upvoteTooltipId: D,
						downvoteTooltipId: F,
						distinguishTooltipId: K,
						sendEvent: H,
						spamTooltipId: q,
						toggleDeleteCommentModal: V,
						timestampUpdateTrigger: z,
						isUpvoteOnly: Y,
						isUpvoteDownvote: Z
					} = e, J = !!r && r.id === t.authorId, G = Object(re.b)(t), Q = t.isApproved && G, $ = !t.bannedBy || t.bannedBy === i.k, ee = {
						comment: t,
						onHideTooltip: E,
						onShowTooltip: I,
						sendEvent: H
					}, te = t.isMod, {
						voteState: ie,
						score: ce,
						isDeleted: le
					} = t, de = !le && (0 === ce || 1 === ce || ie === U.a.notVoted);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement("div", {
						className: Object(v.a)(X.a.Menu, {
							[X.a.Livestreaming]: u
						})
					}, (t.bannedBy || G) && h && n.a.createElement(se, Ne({
						onClick: g,
						tooltipId: A,
						tooltipText: Q ? C.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : C.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), n.a.createElement(Be, null)), b && !t.isLocked && n.a.createElement(se, Ne({
						onClick: T,
						tooltipId: N,
						tooltipText: C.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), n.a.createElement(De, null)), h && J && n.a.createElement(se, Ne({
						onClick: () => L(te ? i.C.NONE : i.C.MODERATOR),
						tooltipId: K,
						tooltipText: te ? C.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : C.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), n.a.createElement(qe, null)), (Y || Z) && !u && de && n.a.createElement(se, Ne({
						onClick: w,
						tooltipId: D,
						tooltipText: C.fbt._("Upvote", null, {
							hk: "21XMb7"
						})
					}, e), n.a.createElement(Ke, null)), Z && !u && de && n.a.createElement(se, Ne({
						onClick: S,
						tooltipId: F,
						tooltipText: C.fbt._("Downvote", null, {
							hk: "k46Xu"
						})
					}, e), n.a.createElement(He, null)), h && $ && n.a.createElement(se, Ne({
						onClick: O,
						tooltipId: q,
						tooltipText: C.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), n.a.createElement(Ue, null)), !J && n.a.createElement(se, Ne({
						onClick: y,
						tooltipId: R,
						tooltipText: C.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), n.a.createElement(Ae, null)), M && n.a.createElement(ae.a, {
						commentId: t.id,
						overlayCustomStyles: ae.b,
						postId: t.postId,
						withOverlay: !0
					}), J && !u && n.a.createElement(se, Ne({
						onClick: _,
						tooltipId: d,
						tooltipText: C.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, ee), n.a.createElement(Pe, null)), h && $ ? n.a.createElement(se, Ne({
						onClick: k,
						tooltipId: B,
						tooltipText: t.bannedBy === i.k ? C.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : C.fbt._("Remove", null, {
							hk: "1f2QZ6"
						}),
						trackingNoun: t.bannedBy === i.k ? "confirm_remove" : "remove"
					}, ee), n.a.createElement(We, null)) : J && n.a.createElement(se, Ne({
						onClick: f,
						tooltipId: c,
						tooltipText: C.fbt._("Delete", null, {
							hk: "48iIX1"
						}),
						trackingNoun: "delete"
					}, e), n.a.createElement(We, null)), p && n.a.createElement(ne.a, {
						actionText: C.fbt._("delete", null, {
							hk: "29yw7h"
						}),
						cancelActionText: C.fbt._("keep", null, {
							hk: "1i62Aj"
						}),
						headerText: C.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: C.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: a,
						toggleModal: V,
						withOverlay: !0
					}), !u && n.a.createElement(se, Ne({
						onClick: () => m ? j() : x(),
						tooltipId: P,
						tooltipText: m ? C.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : C.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: "sitewide_".concat(m ? "unblock" : "block")
					}, ee), m ? n.a.createElement(Fe, null) : n.a.createElement(Re, null))), !u && n.a.createElement(oe, Ne({}, e, {
						tooltipId: o,
						tooltipText: Object(W.a)(t.created),
						timestampUpdateTrigger: z
					}), Object(l.d)(t.created)))
				})),
				Je = s("./src/chat/helpers/dom.ts"),
				Ge = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				Qe = s("./src/reddit/selectors/comments.ts"),
				Xe = s("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				$e = s.n(Xe);
			const et = {},
				tt = x.a.wrapped(R.a, "ChatIcon", $e.a),
				st = x.a.span("ReplyAuthor", $e.a),
				ot = x.a.div("ReplyWrapper", $e.a);
			var nt = Object(r.b)(() => Object(a.c)({
					comment: Qe.n
				}))(e => {
					let {
						comment: t,
						commentId: s,
						isLivestreaming: o,
						onReplyClick: r
					} = e;
					return t ? t.isDeleted ? n.a.createElement(ot, null, n.a.createElement("span", {
						className: Object(v.a)([$e.a.ReplyLinkBubble, $e.a.delete, {
							[$e.a.Livestreaming]: o
						}])
					}, n.a.createElement(At, null))) : n.a.createElement(ot, null, n.a.createElement("a", {
						className: Object(v.a)($e.a.ReplyLinkBubble, {
							[$e.a.Livestreaming]: o
						}),
						href: t.permalink,
						rel: "noopener noreferrer",
						target: "_blank",
						onClick: Object(Je.a)(() => r(t.id))
					}, n.a.createElement(tt, {
						userId: t.authorId
					}), n.a.createElement(st, null, t.author), n.a.createElement(Ge.a, {
						className: $e.a.ReplyComment,
						key: "rich-text-".concat(s),
						content: Object(y.a)(t),
						rtJsonElementProps: et
					}))) : null
				}),
				rt = s("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				at = s.n(rt);
			const it = Object(_.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var ct = e => {
					const {
						comment: t
					} = e;
					return void 0 === it(e) ? null : n.a.createElement(I.a, {
						className: at.a.SystemMessageText,
						content: Object(y.a)(t),
						key: "rich-text-".concat(t.id),
						rtJsonElementProps: it(e),
						useExplicitTextColor: !0
					})
				},
				lt = s("./src/reddit/components/VerticalVotes/index.tsx"),
				dt = s("./src/reddit/components/CommentsChat/Comment/Votes/index.m.less"),
				mt = s.n(dt);
			const pt = x.a.wrapped(lt.a, "ChatHorizontalVotes", mt.a),
				ut = Object(a.c)({
					isUpvoteOnly: we,
					isUpvoteDownvote: Se
				});
			class ht extends n.a.Component {
				render() {
					const {
						comment: e,
						handleVote: t,
						className: s,
						isUpvoteOnly: o,
						isUpvoteDownvote: r
					} = this.props, {
						voteState: a,
						score: i,
						isDeleted: c
					} = e, l = !c && !(0 === i || 1 === i || a === U.a.notVoted);
					return (o || r) && l && n.a.createElement("div", {
						className: Object(v.a)(mt.a.ChatHorizontalVotesWrapper, s)
					}, n.a.createElement(pt, {
						model: e,
						onVoteClick: t,
						downvoteButtonClassName: Object(v.a)(mt.a.DownvoteWrapper, {
							[mt.a.UpvoteOnlyDownvoteWrapper]: !r
						}),
						isCustomIconDisabled: !0,
						scoreClassName: mt.a.Score
					}))
				}
			}
			var Ct = Object(r.b)(ut, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						handleVote: t => {
							t === U.a.upvoted && e(Object(m.rb)(s.id)), t === U.a.downvoted && e(Object(m.T)(s.id))
						}
					}
				})(Object(ie.c)(ht)),
				bt = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				gt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				vt = s("./src/reddit/controls/ErrorText/index.tsx"),
				xt = s("./src/reddit/selectors/communityAwards.ts");
			const ft = e => Object(Oe.c)(e, {
				experimentName: Ie.F,
				experimentEligibilitySelector: Oe.a
			}) === Ie.D.Enabled;
			var _t = s("./src/reddit/selectors/userPrefs.ts"),
				Et = s("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				kt = s.n(Et);
			const Tt = 250,
				yt = 10,
				It = x.a.wrapped(vt.b, "ErrorText", kt.a),
				Ot = x.a.wrapped(E.a, "TopMeta", kt.a),
				jt = x.a.span("DeleteText", kt.a),
				wt = x.a.wrapped(nt, "Reply", kt.a),
				St = Object(gt.t)(),
				Lt = Object(r.b)(() => Object(a.c)({
					associatedAward: (e, t) => {
						let {
							commentId: s
						} = t;
						const o = Object(Qe.n)(e, {
							commentId: s
						});
						if (!o) return;
						const {
							associatedAwardId: n
						} = o;
						return n ? Object(xt.a)(e, n) : void 0
					},
					comment: Qe.n,
					errorMsgs: Qe.F,
					flair: Qe.e,
					isActive: (e, t) => {
						let {
							commentId: s
						} = t;
						return Boolean(e.shortcuts.activeCommentId && s === e.shortcuts.activeCommentId)
					},
					isEditing: Qe.z,
					prefersReducedAnimations: _t.c,
					subreddit: gt.q,
					shouldRenderSystemMessages: ft
				})),
				Mt = Object(_.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class Nt extends n.a.Component {
				constructor(e) {
					super(e), this.elemRef = n.a.createRef(), this.toggleBody = () => {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Tt && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
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
						let s = Tt;
						if (t) {
							s = e.scrollHeight + yt;
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
						errorMsgs: r,
						flair: a,
						isActive: i,
						isEditing: c,
						isLivestreaming: d,
						postId: m,
						prefersReducedAnimations: p,
						renderedInOverlay: u,
						sendEvent: h,
						targetComment: b,
						timestampUpdateTrigger: x,
						addToRefList: _,
						onReplyClick: E,
						shouldRenderSystemMessages: k
					} = this.props, {
						isCollapsed: T,
						isExpanded: O,
						isTruncated: j
					} = this.state;
					if (!s) return null;
					i && g()(() => this.elemRef.current && this.elemRef.current.focus()), g()(() => this.elemRef && this.elemRef.current && _ && _(this.elemRef));
					const w = s.isSystem,
						S = !c && !s.isDeleted && !w,
						L = !!e,
						M = Object(v.a)({
							[kt.a.SystemMessageWrapper]: w && !d && k,
							[kt.a.CommentWrapper]: !d && !w,
							[kt.a.CommentExpanded]: O,
							[kt.a.CommentTruncated]: j,
							[kt.a.HighlightTarget]: b,
							[kt.a.LivestreamingCommentWrapper]: d
						});
					return T ? n.a.createElement(D, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : n.a.createElement("div", {
						id: b ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: M
					}, c && n.a.createElement(bt.a, {
						key: "chatCommentsForm",
						isLivestreaming: d,
						postId: m,
						sendEvent: h,
						draftKey: Object(f.a)(Ee.c.edit, s.id),
						commentsPageKey: o,
						isEditing: c,
						comment: s
					}), S && n.a.createElement(n.a.Fragment, null, n.a.createElement(Ot, {
						childrenInfo: t,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: s,
						commentsPageKey: o,
						compact: !0,
						flair: a,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: d,
						renderedInOverlay: u
					}, n.a.createElement(R.a, {
						className: Object(v.a)(kt.a.ChatIcon, {
							[kt.a.Livestreaming]: d
						}),
						isLivestreaming: d,
						userId: s.authorId
					})), s.parentId && n.a.createElement(wt, {
						commentId: s.parentId,
						onReplyClick: E,
						isLivestreaming: d
					}), d && n.a.createElement("span", {
						className: kt.a.livestreamingTimeStamp
					}, Object(l.d)(s.created)), L && e && d ? n.a.createElement(N, {
						award: e,
						comment: s,
						prefersReducedMotion: p
					}) : [n.a.createElement(I.a, {
						className: Object(v.a)(kt.a.RichTextJson, {
							[kt.a.Livestreaming]: d
						}),
						content: Object(y.a)(s),
						key: "rich-text-".concat(s.id),
						rtJsonElementProps: Mt(this.props),
						useExplicitTextColor: d
					}), n.a.createElement(Ze, {
						key: "Menu",
						className: Object(v.a)(kt.a.Menu, {
							[kt.a.Livestreaming]: d
						}),
						comment: s,
						commentsPageKey: o,
						isLivestreaming: d,
						timestampUpdateTrigger: x
					})]), s.isDeleted && n.a.createElement(At, null), S && r && r.map((e, t) => n.a.createElement(It, {
						key: "".concat(t, "-").concat(e)
					}, e)), !c && j && n.a.createElement("button", {
						className: Object(v.a)(kt.a.CommentReadMoreButton, {
							[kt.a.Livestreaming]: d
						}),
						onClick: this.toggleBody
					}, C.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), !d && S && n.a.createElement(Ct, {
						className: Object(v.a)({
							[kt.a.TruncatedVotesButton]: j && !O
						}),
						comment: s
					}), w && !d && k && n.a.createElement(ct, {
						comment: s
					}))
				}
			}
			const Rt = St(Lt(Nt)),
				At = e => {
					let {
						isLivestreaming: t
					} = e;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(R.a, {
						className: Object(v.a)(kt.a.ChatIcon, {
							[kt.a.Livestreaming]: t || !1
						}),
						trash: !0
					}), n.a.createElement(jt, null, C.fbt._("deleted", null, {
						hk: "4rQ3ZP"
					})))
				};
			var Pt = Rt,
				Bt = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/first.js")),
				Dt = s.n(Bt),
				Wt = s("./node_modules/lodash/isEqual.js"),
				Ut = s.n(Wt),
				Ft = s("./node_modules/lodash/last.js"),
				Kt = s.n(Ft),
				Ht = s("./src/reddit/controls/Button/index.tsx"),
				qt = s("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Vt = s.n(qt),
				zt = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const Yt = x.a.div("ButtonWrapper", Vt.a),
				Zt = e => {
					let {
						top: t
					} = e;
					return n.a.createElement("span", {
						className: Object(v.a)(Vt.a.ChunkPlaceholder, {
							[Vt.a.top]: t
						})
					}, C.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				Jt = e => {
					var {
						className: t,
						isLivestreaming: s,
						isLoading: o,
						setRef: r
					} = e, a = zt(e, ["className", "isLivestreaming", "isLoading", "setRef"]);
					return n.a.createElement("div", {
						ref: r,
						className: Object(v.a)(t, {
							[Vt.a.ScrollerWrapper]: !s,
							[Vt.a.LivestreamingWrapper]: s,
							[Vt.a.loading]: o
						})
					}, !o && a.isPrevLoading && !s && n.a.createElement(Zt, {
						top: !0
					}), a.children, !o && a.isNextLoading && !s && n.a.createElement(Zt, null))
				};
			class Gt extends n.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this._ref = n.a.createRef(), this._refBeforeActiveComments = n.a.createRef(), this._refNextActiveComments = n.a.createRef(), this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = function() {
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
					}), this.scrollToTargetComment()
				}
				componentWillUnmount() {
					this.removeScrollListener()
				}
				getSnapshotBeforeUpdate(e) {
					const t = e.children.length !== this.props.children.length || !Ut()(Dt()(e.children), Dt()(this.props.children)) || !Ut()(Kt()(e.children), Kt()(this.props.children));
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
							o && this.setNextTopScroll(), s.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1
						})
					}
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, s = this.state.newCommentsCount > 0 ? Object(v.a)([Vt.a.NewComments, Vt.a.show]) : Vt.a.NewComments;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(Jt, {
						className: e,
						key: "chatScroller",
						chunkSize: this.chunkSize,
						isLoading: !this.state.initialized || !!this.props.isLoading,
						isPrevLoading: !this.scrolledToFirstTopChunk(),
						isLivestreaming: t,
						isNextLoading: !this.scrolledToLastBottomChunk(),
						setRef: this._ref
					}, n.a.createElement("div", {
						key: "beforeActiveCommentsSection",
						ref: this._refBeforeActiveComments,
						className: Vt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), n.a.createElement("div", {
						key: "activeCommentsSection",
						className: Vt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), n.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Vt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), n.a.createElement(Yt, null, n.a.createElement(Ht.f, {
						className: s,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", C.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [C.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var Qt = Gt,
				Xt = s("./src/reddit/selectors/posts.ts");
			const $t = 6e4,
				es = (e, t, s) => {
					let {
						authorId: o,
						id: n
					} = s;
					return e.includes(o) && !t.includes(n)
				},
				ts = Object(a.c)({
					blockedRedditors: Te.a,
					blockedRedditorsPending: Te.b,
					chatCommentLinks: Qe.g,
					isPending: Qe.d,
					liveCommentsWebsocket: Xt.K,
					moreCommentsLink: Qe.E
				}),
				ss = Object(r.b)(ts, (e, t) => ({
					onLiveCommentsSubscribe: (s, o, n) => e(Object(p.a)(s, o, n, t.subredditId)),
					offLiveCommentsSubscribe: (t, s) => e(Object(p.b)(t, s)),
					loadMoreComments: s => e(Object(m.Z)(t.commentsPageKey, s)),
					loadBlockedRedditors: () => e(Object(d.g)()),
					loadComments: async () => await e(Object(u.q)(t.postId, void 0, {
						sort: i.r.CHAT
					}, i.r.CHAT))
				}));
			class os extends n.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = n.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.state = {
						expandedCommentIds: [],
						targetCommentIndex: void 0,
						timestampUpdateTrigger: Date.now()
					}
				}
				isTimestampUpdateNeeded() {
					const {
						chatCommentLinks: e
					} = this.props, t = e[e.length - 1], s = t && t.created;
					return !!s && Object(l.c)(s) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(c.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, $t)
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
						const e = Object(c.a)(() => {
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
					t && !t.pending && (e(t.moreCommentId), o(G("history", s)))
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
						commentsPageKey: r,
						emptyStateClassName: a,
						isLivestreaming: i,
						isLoading: c,
						isPending: l,
						postId: d,
						renderedInOverlay: m,
						sendEvent: p
					} = this.props, {
						expandedCommentIds: u,
						targetCommentIndex: C,
						timestampUpdateTrigger: b
					} = this.state, g = !(t && t.length || c || l);
					return n.a.createElement(n.a.Fragment, null, g ? n.a.createElement(h.c, {
						className: a,
						isChat: !0
					}) : n.a.createElement(Qt, {
						className: s,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: i,
						isLoading: c || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: C
					}, t.map(t => es(e, u, t) ? n.a.createElement(D, {
						commentCount: 1,
						key: "scroll-node-".concat(t.id),
						onClick: () => this.expandComment(t.id)
					}) : n.a.createElement(Pt, {
						ref: t.id,
						key: "scroll-node-".concat(t.id),
						commentId: t.id,
						commentsPageKey: r,
						isLivestreaming: i,
						postId: d,
						renderedInOverlay: !!m,
						sendEvent: p,
						timestampUpdateTrigger: b,
						targetComment: t.id === o,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = ss(Object(ie.c)(os))
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
			var f = Object(C.a)(e => {
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
				_ = s("./src/reddit/controls/ErrorText/index.m.less"),
				E = s.n(_);
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
					}, a), t === i && l.a.createElement(f, {
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
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
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
//# sourceMappingURL=ChatPost.9a2b0329812f288b72ca.js.map