// https://www.redditstatic.com/desktop2x/ChatPost.950e2b9495ce014e6f60.js
// Retrieved at 8/6/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var o = "Expected a function";
			e.exports = function(e, t, s) {
				if ("function" != typeof e) throw new TypeError(o);
				return setTimeout((function() {
					e.apply(void 0, s)
				}), t)
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, o, s, n) {
				return n(e, (function(e, n, r) {
					o = s ? (s = !1, e) : t(o, e, n, r)
				})), o
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_baseDelay.js"),
				n = o("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return s(e, 1, t)
				}));
			e.exports = n
		},
		"./node_modules/lodash/first.js": function(e, t, o) {
			e.exports = o("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_arrayReduce.js"),
				n = o("./node_modules/lodash/_baseEach.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				a = o("./node_modules/lodash/_baseReduce.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, o) {
				var c = i(e) ? s : a,
					l = arguments.length < 3;
				return c(e, r(t, 4), o, l, n)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_baseTimes.js"),
				n = o("./node_modules/lodash/_castFunction.js"),
				r = o("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var o = i,
					l = c(e, i);
				t = n(t), e -= i;
				for (var d = s(l, t); ++o < e;) t(o);
				return d
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, o) {
			var s = o("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return s(e) + t
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, o) {
			"use strict";
			t.a = function(e, t) {
				for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), n = 2; n < o; n++) s[n - 2] = arguments[n];
				let r, a = !1;
				const i = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), a || (r = window.setTimeout(i, t))
				};
				return r = window.setTimeout(i, t), () => {
					a = !0, window.clearTimeout(r)
				}
			}
		},
		"./src/reddit/actions/comment/websocket/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return D
			})), o.d(t, "b", (function() {
				return U
			}));
			var s = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = (o("./node_modules/core-js/modules/es6.array.sort.js"), o("./node_modules/lodash/first.js")),
				i = o.n(a),
				c = o("./node_modules/lodash/isArray.js"),
				l = o.n(c),
				d = o("./src/reddit/helpers/isComment.ts"),
				m = o("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				u = o("./src/reddit/models/Comment/index.ts"),
				p = o("./src/reddit/models/Flair/index.ts"),
				h = o("./src/reddit/models/PostCreationForm/index.ts"),
				C = o("./src/reddit/models/Vote/index.ts");
			const b = e => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const t = g(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(m.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							created: e.created_utc,
							distinguishType: v(t),
							id: e.name,
							isAdmin: t === u.c.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: t === u.c.Submitter,
							isMod: t === u.c.Moderator,
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
						}
					}
				},
				v = e => {
					switch (e) {
						case u.c.Admin:
							return s.C.ADMIN;
						case u.c.Moderator:
							return s.C.MODERATOR;
						case u.c.Alumni:
							return s.C.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				g = e => i()((e || []).filter(e => l()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || u.c.None;
			const x = (e, t, o) => {
				const s = {
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
					} = o;
				if (n && d) {
					if (d === p.f.Richtext) {
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
					if (d === p.f.Text) {
						if (!c) return s;
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
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var f = o("./src/lib/env/index.ts");
			const _ = new Map,
				E = e => e;
			var k;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment"
			}(k || (k = {}));
			const T = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				I = (e, t) => {
					const o = E(t),
						s = _.get(o);
					s && s.socket && (s.isClosePlanned = !0, s.socket.close())
				},
				O = (e, t, o, s) => {
					const n = E(t),
						r = _.get(n);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: o,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					_.set(n, a), a.socket.addEventListener("open", () => {
						a.retries = Object.assign({}, T)
					}), a.socket.addEventListener("message", w.bind(null, s)), a.socket.addEventListener("close", y.bind(null, n, s)), a.socket.addEventListener("error", L.bind(null, n)), window && window.addEventListener("beforeunload", I.bind(null, e, t))
				},
				y = (e, t, o) => {
					const s = _.get(e);
					s && (s.isClosePlanned ? _.delete(e) : j(e, t))
				},
				j = (e, t) => {
					const o = _.get(e);
					if (!o) return;
					const {
						retries: {
							backoffTime: s,
							connectionAttempts: n,
							jitterAmount: r,
							maximumRetries: a
						},
						socket: i,
						uniqueId: c,
						url: l
					} = o;
					if (_.delete(e), n < a && i.readyState !== WebSocket.OPEN) {
						const e = s * Math.pow(2, n),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							d = Object.assign(Object.assign({}, o.retries), {
								connectionAttempts: n + 1
							});
						setTimeout(() => {
							O(l, c, d, t)
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
				L = (e, t) => {
					const o = _.get(e);
					o && o.isClosePlanned && o.socket && o.socket.readyState === WebSocket.CLOSED ? _.delete(e) : Object(f.a)() && console.error(t)
				};
			var S = o("./src/reddit/selectors/comments.ts"),
				M = o("./src/reddit/selectors/moderatorPermissions.ts"),
				N = o("./src/reddit/actions/comment/websocket/constants.ts");
			const R = Object(n.a)(N.b),
				A = Object(n.a)(N.c),
				P = Object(n.a)(N.a),
				B = {},
				D = (e, t, o, n) => async (a, i) => {
					(e => {
						const {
							cb: t,
							url: o,
							uniqueId: s
						} = e;
						O(o, s, Object.assign({}, T), t)
					})({
						uniqueId: o,
						url: t,
						cb: t => {
							switch (t.type) {
								case k.NEW_COMMENT: {
									const c = t.payload.name,
										l = b(t.payload),
										d = i(),
										m = Object(r.a)(d, o).sortToUse === s.r.CHAT,
										u = Object(S.n)(d, {
											commentId: c
										}),
										p = !(!c || !B[c]);
									if (l && !p) {
										const o = x(0, n, t.payload),
											s = t.payload.total_comment_count;
										if (void 0 === u) {
											const n = Object(S.x)(d, {
													commentsPageKey: e
												}),
												r = t.payload.parent_id,
												i = Object(S.j)(d, {
													commentId: r,
													commentsPageKey: e
												}),
												c = Object(S.n)(d, {
													commentId: r
												}),
												u = c && c.originId ? c.originId : r,
												p = null === i ? i : i + 1;
											if (m) a(R({
												authorFlair: o,
												comment: l,
												commentsPageKey: e,
												depth: p,
												headCommentId: n,
												isChatSort: m,
												numComments: s,
												originId: u
											}));
											else {
												const t = c && c.originId ? 2500 : 5e3;
												setTimeout(() => a(R({
													authorFlair: o,
													comment: l,
													commentsPageKey: e,
													depth: p,
													headCommentId: n,
													isChatSort: m,
													numComments: s,
													originId: u
												})), t)
											}
										} else a(A({
											authorFlair: o,
											comment: l,
											commentsPageKey: e,
											isChatSort: m,
											numComments: s
										}))
									}
									break
								}
								case k.UPDATE_COMMENT: {
									const c = t.payload.name,
										l = i(),
										d = Object(S.n)(l, {
											commentId: c
										}),
										m = b(t.payload),
										u = Object(r.a)(l, o).sortToUse === s.r.CHAT;
									if (d && m) {
										const o = x(0, n, t.payload),
											s = t.payload.total_comment_count;
										a(A({
											authorFlair: o,
											comment: m,
											commentsPageKey: e,
											isChatSort: u,
											numComments: s
										}))
									}
									break
								}
								case k.UPDATE_COMMENT_SCORE: {
									const o = t.payload.name,
										s = t.payload.score,
										n = i(),
										r = Object(S.n)(n, {
											commentId: o
										});
									r && a(A({
										comment: Object.assign(Object.assign({}, r), {
											score: s
										}),
										commentsPageKey: e
									}));
									break
								}
								case k.DELETE_COMMENT: {
									const e = t.payload.name,
										o = i(),
										s = Object(S.n)(o, {
											commentId: e
										});
									s && !s.isDeleted ? a(P({
										id: e
									})) : B[e] = k.DELETE_COMMENT;
									break
								}
								case k.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										o = t.payload.name,
										s = i(),
										n = Object(S.n)(s, {
											commentId: o
										}),
										r = (s.user.account && s.user.account.id) === (n && n.authorId),
										c = !!e && !!Object(M.i)(s, {
											postId: e
										});
									!n || n.isRemoved && n.isDeleted || r || c ? B[o] = k.REMOVE_COMMENT : a(P({
										id: o
									}));
									break
								}
							}
						}
					})
				}, U = (e, t) => async () => {
					I(0, t)
				}
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return j
			})), o.d(t, "b", (function() {
				return w
			})), o.d(t, "g", (function() {
				return L
			})), o.d(t, "e", (function() {
				return S
			})), o.d(t, "d", (function() {
				return M
			})), o.d(t, "f", (function() {
				return N
			})), o.d(t, "a", (function() {
				return K
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/times.js"),
				r = o.n(n),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				c = o("./node_modules/react-redux/es/index.js"),
				l = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				m = o("./src/reddit/actions/page.ts"),
				u = o("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/helpers/describeApiError/index.ts"),
				C = o("./src/reddit/helpers/path/index.ts"),
				b = o("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = o("./src/reddit/icons/fonts/Downvote/index.tsx"),
				g = o("./src/reddit/icons/fonts/Upvote/index.tsx"),
				x = o("./src/reddit/icons/svgs/Comments/index.tsx"),
				f = o("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				_ = o("./src/reddit/components/Comments/States/index.m.less"),
				E = o.n(_);
			const k = d.a.wrapped(x.a, "CommentsIcon", E.a),
				T = d.a.wrapped(f.a, "SnooFacepalm", E.a),
				I = d.a.p("EmptyTitle", E.a),
				O = d.a.p("ErrorTitle", E.a),
				y = d.a.p("EmptyText", E.a),
				j = e => {
					let {
						className: t,
						isChat: o
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(E.a.StateContainer, t)
					}, i.a.createElement(k, null), i.a.createElement(I, null, o ? s.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : s.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(y, null, s.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(k, null), i.a.createElement(I, null, s.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(y, null, s.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				L = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: E.a.StateContainer
					}, i.a.createElement(k, null), i.a.createElement(I, null, s.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(p.h, {
						to: Object(C.b)(t)
					}, s.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				S = Object(c.b)(null, (e, t) => {
					let {
						postId: o,
						commentId: s,
						sort: n
					} = t;
					return {
						onClick: () => e(Object(m.q)(o, s, {
							sort: n
						}, n))
					}
				})(e => {
					let {
						apiError: t,
						onClick: o
					} = e;
					return i.a.createElement("div", {
						className: E.a.StateContainer
					}, i.a.createElement(T, null), i.a.createElement(O, null, t ? Object(h.a)({
						apiError: t,
						isLoggedOut: !1
					}) : s.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), i.a.createElement(p.f, {
						onClick: o
					}, s.fbt._("retry", null, {
						hk: "BoP8d"
					})))
				}),
				M = e => {
					let {
						postId: t,
						commentId: o,
						sort: s,
						apiError: n
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(E.a.StateContainer, E.a.ErrorFullPage)
					}, i.a.createElement(S, {
						postId: t,
						commentId: o,
						sort: s,
						apiError: n
					}))
				},
				N = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(u.a, null))
				}, "LoadingFullPage", E.a),
				R = d.a.div("CommentsPlaceholderContainer", E.a),
				A = d.a.div("CommentPlaceholder", E.a),
				P = d.a.div("Avatar", E.a),
				B = d.a.div("VoteColumn", E.a),
				D = d.a.div("TextColumn", E.a),
				U = d.a.wrapped(g.b, "Upvote", E.a),
				W = d.a.wrapped(v.b, "Downvote", E.a),
				F = () => i.a.createElement("div", {
					className: Object(l.a)(E.a.TopMetaPlaceholder, Object(b.a)({
						isLoading: !0
					}))
				}),
				H = () => i.a.createElement("div", {
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
				}) : i.a.createElement(B, null, i.a.createElement(U, null), i.a.createElement(W, null)), i.a.createElement(D, null, i.a.createElement(F, null), i.a.createElement(H, null)))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = o("./src/config.ts"),
				n = o("./node_modules/lodash/memoize.js"),
				r = o.n(n),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				c = o("./src/lib/constants/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				d = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				u = o.n(m);
			const p = l.a.div("Userpic", u.a);
			t.a = r()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: o
				} = s.a, n = (e => e.replace(c.yb.Account + "_", ""))(t), {
					avatar: r,
					color: a
				} = (e => {
					const t = d.length,
						o = parseInt(e, 36),
						s = o % 20 + 1,
						n = Math.floor(o / 20) % t;
					return {
						avatar: ("0" + s).slice(-2),
						color: d[n]
					}
				})(n), l = "".concat(o, "/avatar_default_").concat(r, "_").concat(a, ".png");
				return i.a.createElement(p, {
					style: {
						backgroundImage: "url(".concat(l, ")"),
						backgroundColor: "#".concat(a)
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				l = o("./src/reddit/icons/svgs/Redditor/index.tsx"),
				d = o("./src/reddit/icons/svgs/Remove/index.tsx"),
				m = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				u = o.n(m);
			const p = i.a.img("Userpic", u.a),
				h = Object(a.c)({
					account: e => e.user.account
				}),
				C = Object(r.b)(h);
			t.a = i.a.wrapped(C(e => {
				let {
					account: t,
					className: o,
					height: s,
					isLivestreaming: r,
					trash: a,
					userId: i,
					width: m
				} = e;
				const h = r ? 36 : 20,
					C = {
						height: s || h,
						width: m || h,
						minWidth: m || h
					};
				return a ? n.a.createElement("div", {
					className: o,
					style: C
				}, n.a.createElement(d.a, {
					className: u.a.TrashIcon
				})) : i ? n.a.createElement("div", {
					className: o,
					style: C
				}, t && t.accountIcon && t.id === i ? n.a.createElement(p, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(c.a, {
					userId: i
				})) : n.a.createElement("div", {
					className: o,
					style: C
				}, t && t.accountIcon ? n.a.createElement(p, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(l.a, {
					className: u.a.ProfileIcon
				}))
			}), "ChatIcon", u.a)
		},
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, o) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentsChat/Comment/Votes/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentsChat/Comment/index.m.less": function(e, t, o) {
			e.exports = {
				Menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				CommentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				commentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				CommentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
				commentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
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
		"./src/reddit/components/CommentsChat/Scroller/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return Zt
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/constants/index.ts"),
				c = o("./src/lib/setInterval/index.ts"),
				l = o("./src/lib/timeAgo/index.ts"),
				d = o("./src/reddit/actions/blockedRedditors.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				u = o("./src/reddit/actions/comment/websocket/index.ts"),
				p = o("./src/reddit/actions/page.ts"),
				h = o("./src/reddit/components/Comments/States/index.tsx"),
				C = o("./node_modules/fbt/lib/FbtPublic.js"),
				b = o("./node_modules/lodash/defer.js"),
				v = o.n(b),
				g = o("./src/lib/classNames/index.ts"),
				x = o("./src/lib/lessComponent.tsx"),
				f = o("./src/lib/makeDraftKey/index.ts"),
				_ = o("./src/lib/objectSelector/index.ts"),
				E = o("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				k = o("./src/reddit/helpers/awards/getIconForSize.ts"),
				T = o("./src/reddit/helpers/awards/message.ts"),
				I = o("./src/reddit/helpers/getRichTextContent/index.ts"),
				O = o("./src/reddit/components/RichTextJson/index.tsx"),
				y = o("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				j = o("./src/reddit/icons/svgs/Star/index.tsx"),
				w = o("./src/reddit/icons/svgs/Star2/index.tsx"),
				L = o("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				S = o.n(L);
			const M = Object(_.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				N = e => {
					const {
						award: t,
						comment: o,
						prefersReducedMotion: s
					} = e, r = Object(k.a)(t, 64, s);
					let a = "",
						i = !0,
						c = !1;
					return t.coinPrice < T.a ? (a = S.a.silverTierAwardComment, i = !1) : t.coinPrice < T.b ? a = S.a.goldTierAwardComment : (a = S.a.platinumTierAwardComment, c = !0), n.a.createElement("div", {
						className: Object(g.a)(S.a.awardComment, a)
					}, n.a.createElement("div", {
						className: S.a.imageContainer
					}, i && n.a.createElement(n.a.Fragment, null, n.a.createElement(j.a, {
						className: Object(g.a)(S.a.backgroundAnimation, S.a.backgroundStar)
					}), n.a.createElement(w.a, {
						className: Object(g.a)(S.a.backgroundAnimation, S.a.backgroundStar, S.a.backgroundStar2)
					})), c && n.a.createElement(n.a.Fragment, null, n.a.createElement(y.a, {
						className: Object(g.a)(S.a.backgroundAnimation, S.a.backgroundSparkle, S.a.sparkleBottomLeft)
					}), n.a.createElement(y.a, {
						className: Object(g.a)(S.a.backgroundAnimation, S.a.backgroundSparkle, S.a.sparkleTopRight)
					}), n.a.createElement(y.a, {
						className: Object(g.a)(S.a.backgroundAnimation, S.a.backgroundSparkle, S.a.sparkleBottomRight)
					})), n.a.createElement("img", {
						src: r
					})), n.a.createElement(O.a, {
						className: S.a.awardCommentText,
						content: Object(I.a)(o),
						key: "rich-text-".concat(o.id),
						rtJsonElementProps: M(e),
						useExplicitTextColor: !0
					}))
				};
			var R = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				A = o("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				P = o.n(A);
			const B = x.a.div("CollapsedComment", P.a);
			var D = e => {
					let {
						commentCount: t,
						onClick: o
					} = e;
					return n.a.createElement(B, {
						onClick: o
					}, C.fbt._("collapsed {collapsed message} (may be sensitive)", [C.fbt._param("collapsed message", C.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [C.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				U = o("./src/lib/humanizeDateTime/index.ts"),
				W = o("./src/reddit/models/Vote/index.ts"),
				F = o("./src/reddit/actions/postCreation/general.ts"),
				H = o("./src/reddit/actions/reportFlow.ts"),
				K = o("./src/reddit/actions/tooltip.ts"),
				V = o("./src/reddit/actions/userBlocks.ts"),
				q = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				z = o("./src/reddit/constants/tracking.ts"),
				Y = o("./src/reddit/selectors/telemetry.ts"),
				Z = o("./src/telemetry/models/Event.ts");
			const G = e => ({
					screen: Object(Y.screen)(e),
					profile: Object(Y.profile)(e),
					subreddit: Object(Y.subreddit)(e)
				}),
				J = (e, t) => o => ({
					action: "load",
					noun: e,
					post: Object(Y.post)(o, t),
					source: Z.b.ChatView,
					subreddit: Object(Y.subreddit)(o)
				});
			var Q = o("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				X = o.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = x.a.button("MenuItem", X.a),
				te = x.a.a("MenuItemPermalink", X.a),
				oe = e => {
					let {
						children: t,
						comment: o,
						onClick: s,
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
							s(e), d && (i(((e, t) => o => Object.assign({
								source: "comment",
								action: z.c.CLICK,
								noun: e,
								post: Object(Y.post)(o, t),
								comment: Object(Y.comment)(o, t)
							}, G(o)))(d, o.id)), i(((e, t) => o => Object.assign({
								source: "comment_overflow_menu",
								action: z.c.CLICK,
								noun: e,
								post: Object(Y.post)(o, t),
								comment: Object(Y.comment)(o, t)
							}, G(o)))(d, o.id)))
						}
					}, t, n.a.createElement(q.c, {
						tooltipId: c,
						text: l
					}))
				},
				se = e => n.a.createElement(oe, $({
					onClick: e.onHideTooltip
				}, e), n.a.createElement(te, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var ne = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				re = o("./src/reddit/components/ModModeReports/helpers.ts"),
				ae = o("./src/reddit/components/ReportFlow/index.tsx"),
				ie = o("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = o("./src/reddit/icons/fonts/Downvote/index.tsx"),
				le = o("./src/reddit/icons/fonts/Upvote/index.tsx"),
				de = o("./src/reddit/icons/svgs/Approve/index.tsx"),
				me = o("./src/reddit/icons/svgs/Ban/index.tsx"),
				ue = o("./src/reddit/icons/svgs/Edit/index.m.less"),
				pe = o.n(ue);
			var he = e => n.a.createElement("svg", {
					className: Object(g.a)(pe.a.edit, e.className),
					viewBox: "4 4 12 12"
				}, n.a.createElement("g", {
					transform: "translate(-68.000000, -207.000000)"
				}, n.a.createElement("path", {
					d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
				}))),
				Ce = o("./src/reddit/icons/svgs/Flag/index.tsx"),
				be = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				ve = o("./src/reddit/icons/svgs/Remove/index.tsx"),
				ge = o("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				xe = o.n(ge);
			var fe = e => n.a.createElement("svg", {
					className: Object(g.a)(xe.a.icon, e.className),
					viewBox: "0 0 511.63 511.631"
				}, n.a.createElement("path", {
					d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
				})),
				_e = o("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Ee = o("./src/reddit/models/PostDraft/index.ts"),
				ke = o("./src/reddit/selectors/activeModalId.ts"),
				Te = o("./src/reddit/selectors/blockedRedditors.ts"),
				Ie = o("./src/reddit/selectors/experiments/chatPost.ts"),
				Oe = o("./src/reddit/constants/experiments.ts"),
				ye = o("./src/reddit/helpers/chooseVariant/index.ts");
			const je = Object(a.a)(e => Object(ye.c)(e, {
					experimentName: Oe.E,
					experimentEligibilitySelector: ye.a
				}), e => e),
				we = e => je(e) === Oe.A.UpvoteOnly,
				Le = e => je(e) === Oe.A.UpvoteDownvote;
			var Se = o("./src/reddit/selectors/moderatorPermissions.ts"),
				Me = o("./src/reddit/selectors/user.ts");

			function Ne() {
				return (Ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = x.a.wrapped(me.a, "BlockIcon", X.a),
				Ae = x.a.wrapped(Ce.a, "FlagIcon", X.a),
				Pe = x.a.wrapped(he, "EditIcon", X.a),
				Be = x.a.wrapped(de.a, "ApproveIcon", X.a),
				De = x.a.wrapped(fe, "ReplyIcon", X.a),
				Ue = x.a.wrapped(ve.a, "RemoveIcon", X.a),
				We = x.a.wrapped(e => n.a.createElement("svg", {
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
				He = x.a.wrapped(le.a, "UpvoteIcon", X.a),
				Ke = x.a.wrapped(ce.a, "DownvoteIcon", X.a),
				Ve = x.a.wrapped(be.a, "ModeratorIcon", X.a),
				qe = e => (t, o) => {
					let {
						comment: s
					} = o;
					return "".concat(e).concat(s.id)
				},
				ze = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ye = Object(a.c)({
					currentUser: Me.i,
					isMod: (e, t) => {
						let {
							comment: o
						} = t;
						return !!Object(Se.i)(e, {
							postId: o.postId
						})
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: o
						} = t;
						return Object(Te.c)(e, o.authorId)
					},
					isSimpleReply: Ie.f,
					reportFlowIsOpen: (e, t) => {
						let {
							comment: o
						} = t;
						return e.reportFlow.postOrCommentId === o.id
					},
					approveTooltipId: qe("CommentChatPost--Approve--"),
					blockTooltipId: qe("CommentChatPost--Block--"),
					createTooltipId: qe("CommentChatPost--Create--"),
					editTooltipId: qe("CommentChatPost--Edit--"),
					replyTooltipId: qe("CommentChatPost--Reply--"),
					reportTooltipId: qe("CommentChatPost--Report--"),
					upvoteTooltipId: qe("CommentChatPost--Upvote--"),
					downvoteTooltipId: qe("CommentChatPost--Downvote--"),
					distinguishTooltipId: qe("CommentChatPost--Distinguish--"),
					spamTooltipId: qe("CommentChatPost--Spam--"),
					removeTooltipId: qe("CommentChatPost--Remove--"),
					deleteTooltipId: qe("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: o
						} = t;
						return Object(ke.a)(e) === ze(o.id)
					},
					isUpvoteOnly: we,
					isUpvoteDownvote: Le
				});
			var Ze = Object(r.b)(Ye, (e, t) => {
					let {
						comment: o,
						commentsPageKey: s
					} = t;
					return {
						onReplyClick: () => e(Object(m.ob)({
							parentCommentId: o.id,
							commentsPageKey: s,
							singleOpen: !0
						})),
						onReportClick: () => e(Object(H.j)(o.id, !1)),
						onHideTooltip: () => e(Object(K.i)()),
						onShowTooltip: t => e(Object(K.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = o.media && o.media.rteMode;
							s && e(Object(m.V)({
								commentId: o.id,
								draftKey: Object(f.a)(Ee.c.edit, o.id),
								text: o.bodyMD || "",
								commentMode: t,
								commentsPageKey: s
							}))
						},
						onApproveClick: () => e(Object(m.H)(o.id)),
						onBlockClick: () => e(Object(V.h)(o.author)),
						onUnblockClick: () => e(Object(V.g)(o.author)),
						onUpvoteClick: () => e(Object(m.rb)(o.id)),
						onDownvoteClick: () => e(Object(m.T)(o.id)),
						onDistinguishClick: t => e(Object(m.S)(o.id, t)),
						onSpamClick: () => e(Object(m.cb)(o.id, !0)),
						onRemoveClick: () => e(Object(m.cb)(o.id, !1)),
						deleteComment: () => s && e(Object(m.db)(o.id, o.postId)),
						onDeleteClick: () => e(Object(F.m)(ze(o.id))),
						toggleDeleteCommentModal: () => e(Object(F.m)(ze(o.id)))
					}
				})(Object(ie.c)(e => {
					const {
						comment: t,
						className: o,
						createTooltipId: s,
						currentUser: r,
						deleteComment: a,
						deleteTooltipId: c,
						editTooltipId: d,
						isAuthorBlocked: m,
						isDeleteModalOpen: u,
						isLivestreaming: p,
						isMod: h,
						isSimpleReply: b,
						onApproveClick: v,
						onBlockClick: x,
						onDeleteClick: f,
						onEditClick: _,
						onHideTooltip: E,
						onRemoveClick: k,
						onReplyClick: T,
						onReportClick: I,
						onShowTooltip: O,
						onSpamClick: y,
						onUnblockClick: j,
						onUpvoteClick: w,
						onDownvoteClick: L,
						onDistinguishClick: S,
						reportFlowIsOpen: M,
						replyTooltipId: N,
						reportTooltipId: R,
						approveTooltipId: A,
						blockTooltipId: P,
						removeTooltipId: B,
						upvoteTooltipId: D,
						downvoteTooltipId: F,
						distinguishTooltipId: H,
						sendEvent: K,
						spamTooltipId: V,
						toggleDeleteCommentModal: q,
						timestampUpdateTrigger: z,
						isUpvoteOnly: Y,
						isUpvoteDownvote: Z
					} = e, G = !!r && r.id === t.authorId, J = Object(re.b)(t), Q = t.isApproved && J, $ = !t.bannedBy || t.bannedBy === i.k, ee = {
						comment: t,
						onHideTooltip: E,
						onShowTooltip: O,
						sendEvent: K
					}, te = t.isMod, {
						voteState: ie,
						score: ce,
						isDeleted: le
					} = t, de = !le && (0 === ce || 1 === ce || ie === W.a.notVoted);
					return n.a.createElement("div", {
						className: o
					}, n.a.createElement("div", {
						className: Object(g.a)(X.a.Menu, {
							[X.a.Livestreaming]: p
						})
					}, (t.bannedBy || J) && h && n.a.createElement(oe, Ne({
						onClick: v,
						tooltipId: A,
						tooltipText: Q ? C.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : C.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), n.a.createElement(Be, null)), b && !t.isLocked && n.a.createElement(oe, Ne({
						onClick: T,
						tooltipId: N,
						tooltipText: C.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), n.a.createElement(De, null)), h && G && n.a.createElement(oe, Ne({
						onClick: () => S(te ? i.C.NONE : i.C.MODERATOR),
						tooltipId: H,
						tooltipText: te ? C.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : C.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), n.a.createElement(Ve, null)), (Y || Z) && !p && de && n.a.createElement(oe, Ne({
						onClick: w,
						tooltipId: D,
						tooltipText: C.fbt._("Upvote", null, {
							hk: "21XMb7"
						})
					}, e), n.a.createElement(He, null)), Z && !p && de && n.a.createElement(oe, Ne({
						onClick: L,
						tooltipId: F,
						tooltipText: C.fbt._("Downvote", null, {
							hk: "k46Xu"
						})
					}, e), n.a.createElement(Ke, null)), h && $ && n.a.createElement(oe, Ne({
						onClick: y,
						tooltipId: V,
						tooltipText: C.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), n.a.createElement(We, null)), !G && n.a.createElement(oe, Ne({
						onClick: I,
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
					}), G && !p && n.a.createElement(oe, Ne({
						onClick: _,
						tooltipId: d,
						tooltipText: C.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, ee), n.a.createElement(Pe, null)), h && $ ? n.a.createElement(oe, Ne({
						onClick: k,
						tooltipId: B,
						tooltipText: t.bannedBy === i.k ? C.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : C.fbt._("Remove", null, {
							hk: "1f2QZ6"
						}),
						trackingNoun: t.bannedBy === i.k ? "confirm_remove" : "remove"
					}, ee), n.a.createElement(Ue, null)) : G && n.a.createElement(oe, Ne({
						onClick: f,
						tooltipId: c,
						tooltipText: C.fbt._("Delete", null, {
							hk: "48iIX1"
						}),
						trackingNoun: "delete"
					}, e), n.a.createElement(Ue, null)), u && n.a.createElement(ne.a, {
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
						toggleModal: q,
						withOverlay: !0
					}), !p && n.a.createElement(oe, Ne({
						onClick: () => m ? j() : x(),
						tooltipId: P,
						tooltipText: m ? C.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : C.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: "sitewide_".concat(m ? "unblock" : "block")
					}, ee), m ? n.a.createElement(Fe, null) : n.a.createElement(Re, null))), !p && n.a.createElement(se, Ne({}, e, {
						tooltipId: s,
						tooltipText: Object(U.a)(t.created),
						timestampUpdateTrigger: z
					}), Object(l.d)(t.created)))
				})),
				Ge = o("./src/chat/helpers/dom.ts"),
				Je = o("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				Qe = o("./src/reddit/selectors/comments.ts"),
				Xe = o("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				$e = o.n(Xe);
			const et = {},
				tt = x.a.wrapped(R.a, "ChatIcon", $e.a),
				ot = x.a.span("ReplyAuthor", $e.a),
				st = x.a.div("ReplyWrapper", $e.a);
			var nt = Object(r.b)(() => Object(a.c)({
					comment: Qe.n
				}))(e => {
					let {
						comment: t,
						commentId: o,
						isLivestreaming: s,
						onReplyClick: r
					} = e;
					return t ? t.isDeleted ? n.a.createElement(st, null, n.a.createElement("span", {
						className: Object(g.a)([$e.a.ReplyLinkBubble, $e.a.delete, {
							[$e.a.Livestreaming]: s
						}])
					}, n.a.createElement(Lt, null))) : n.a.createElement(st, null, n.a.createElement("a", {
						className: Object(g.a)($e.a.ReplyLinkBubble, {
							[$e.a.Livestreaming]: s
						}),
						href: t.permalink,
						rel: "noopener noreferrer",
						target: "_blank",
						onClick: Object(Ge.a)(() => r(t.id))
					}, n.a.createElement(tt, {
						userId: t.authorId
					}), n.a.createElement(ot, null, t.author), n.a.createElement(Je.a, {
						className: $e.a.ReplyComment,
						key: "rich-text-".concat(o),
						content: Object(I.a)(t),
						rtJsonElementProps: et
					}))) : null
				}),
				rt = o("./src/reddit/components/VerticalVotes/index.tsx"),
				at = o("./src/reddit/components/CommentsChat/Comment/Votes/index.m.less"),
				it = o.n(at);
			const ct = x.a.wrapped(rt.a, "ChatHorizontalVotes", it.a),
				lt = Object(a.c)({
					isUpvoteOnly: we,
					isUpvoteDownvote: Le
				});
			class dt extends n.a.Component {
				render() {
					const {
						comment: e,
						handleVote: t,
						className: o,
						isUpvoteOnly: s,
						isUpvoteDownvote: r
					} = this.props, {
						voteState: a,
						score: i,
						isDeleted: c
					} = e, l = !c && !(0 === i || 1 === i || a === W.a.notVoted);
					return (s || r) && l && n.a.createElement("div", {
						className: Object(g.a)(it.a.ChatHorizontalVotesWrapper, o)
					}, n.a.createElement(ct, {
						model: e,
						onVoteClick: t,
						downvoteButtonClassName: Object(g.a)(it.a.DownvoteWrapper, {
							[it.a.UpvoteOnlyDownvoteWrapper]: !r
						}),
						isCustomIconDisabled: !0,
						scoreClassName: it.a.Score
					}))
				}
			}
			var mt = Object(r.b)(lt, (e, t) => {
					let {
						comment: o
					} = t;
					return {
						handleVote: t => {
							t === W.a.upvoted && e(Object(m.rb)(o.id)), t === W.a.downvoted && e(Object(m.T)(o.id))
						}
					}
				})(Object(ie.c)(dt)),
				ut = o("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				pt = o("./src/reddit/contexts/PageLayer/index.tsx"),
				ht = o("./src/reddit/controls/ErrorText/index.tsx"),
				Ct = o("./src/reddit/selectors/communityAwards.ts"),
				bt = o("./src/reddit/selectors/userPrefs.ts"),
				vt = o("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				gt = o.n(vt);
			const xt = 250,
				ft = 10,
				_t = x.a.wrapped(ht.b, "ErrorText", gt.a),
				Et = x.a.wrapped(E.a, "TopMeta", gt.a),
				kt = x.a.span("DeleteText", gt.a),
				Tt = x.a.wrapped(nt, "Reply", gt.a),
				It = Object(pt.t)(),
				Ot = Object(r.b)(() => Object(a.c)({
					associatedAward: (e, t) => {
						let {
							commentId: o
						} = t;
						const s = Object(Qe.n)(e, {
							commentId: o
						});
						if (!s) return;
						const {
							associatedAwardId: n
						} = s;
						return n ? Object(Ct.a)(e, n) : void 0
					},
					comment: Qe.n,
					errorMsgs: Qe.F,
					flair: Qe.e,
					isActive: (e, t) => {
						let {
							commentId: o
						} = t;
						return Boolean(e.shortcuts.activeCommentId && o === e.shortcuts.activeCommentId)
					},
					isEditing: Qe.z,
					prefersReducedAnimations: bt.c,
					subreddit: pt.q
				})),
				yt = Object(_.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class jt extends n.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > xt && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
						isTruncated: !0
					})
				}
				componentDidUpdate(e, t) {
					this.limitCommentBodyHeight(t)
				}
				limitCommentBodyHeight(e) {
					const {
						isExpanded: t,
						isTruncated: o
					} = this.state, s = t !== e.isExpanded || o !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && s) {
						const e = this.elemRef.current;
						let o = xt;
						if (t) {
							o = e.scrollHeight + ft;
							const t = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = "".concat(o, "px")
					}
				}
				render() {
					const {
						associatedAward: e,
						childrenInfo: t,
						comment: o,
						commentsPageKey: s,
						errorMsgs: r,
						flair: a,
						isActive: i,
						isEditing: c,
						isLivestreaming: d,
						postId: m,
						prefersReducedAnimations: u,
						renderedInOverlay: p,
						sendEvent: h,
						targetComment: b,
						timestampUpdateTrigger: x,
						addToRefList: _,
						onReplyClick: E
					} = this.props, {
						isCollapsed: k,
						isExpanded: T,
						isTruncated: y
					} = this.state;
					if (!o) return null;
					i && v()(() => this.elemRef.current && this.elemRef.current.focus()), v()(() => this.elemRef && this.elemRef.current && _ && _(this.elemRef));
					const j = !c && !o.isDeleted,
						w = !!e,
						L = Object(g.a)({
							[gt.a.CommentWrapper]: !d,
							[gt.a.CommentExpanded]: T,
							[gt.a.CommentTruncated]: y,
							[gt.a.HighlightTarget]: b,
							[gt.a.LivestreamingCommentWrapper]: d
						});
					return k ? n.a.createElement(D, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : n.a.createElement("div", {
						id: b ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: L
					}, c && n.a.createElement(ut.a, {
						key: "chatCommentsForm",
						isLivestreaming: d,
						postId: m,
						sendEvent: h,
						draftKey: Object(f.a)(Ee.c.edit, o.id),
						commentsPageKey: s,
						isEditing: c,
						comment: o
					}), j && n.a.createElement(n.a.Fragment, null, n.a.createElement(Et, {
						childrenInfo: t,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: o,
						commentsPageKey: s,
						compact: !0,
						flair: a,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: d,
						renderedInOverlay: p
					}, n.a.createElement(R.a, {
						className: Object(g.a)(gt.a.ChatIcon, {
							[gt.a.Livestreaming]: d
						}),
						isLivestreaming: d,
						userId: o.authorId
					})), o.parentId && n.a.createElement(Tt, {
						commentId: o.parentId,
						onReplyClick: E,
						isLivestreaming: d
					}), d && n.a.createElement("span", {
						className: gt.a.livestreamingTimeStamp
					}, Object(l.d)(o.created)), w && e && d ? n.a.createElement(N, {
						award: e,
						comment: o,
						prefersReducedMotion: u
					}) : [n.a.createElement(O.a, {
						className: Object(g.a)(gt.a.RichTextJson, {
							[gt.a.Livestreaming]: d
						}),
						content: Object(I.a)(o),
						key: "rich-text-".concat(o.id),
						rtJsonElementProps: yt(this.props),
						useExplicitTextColor: d
					}), n.a.createElement(Ze, {
						key: "Menu",
						className: Object(g.a)(gt.a.Menu, {
							[gt.a.Livestreaming]: d
						}),
						comment: o,
						commentsPageKey: s,
						isLivestreaming: d,
						timestampUpdateTrigger: x
					})]), o.isDeleted && n.a.createElement(Lt, null), j && r && r.map((e, t) => n.a.createElement(_t, {
						key: "".concat(t, "-").concat(e)
					}, e)), !c && y && n.a.createElement("button", {
						className: Object(g.a)(gt.a.CommentReadMoreButton, {
							[gt.a.Livestreaming]: d
						}),
						onClick: this.toggleBody
					}, C.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), !d && j && n.a.createElement(mt, {
						className: Object(g.a)({
							[gt.a.TruncatedVotesButton]: y && !T
						}),
						comment: o
					}))
				}
			}
			const wt = It(Ot(jt)),
				Lt = e => {
					let {
						isLivestreaming: t
					} = e;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(R.a, {
						className: Object(g.a)(gt.a.ChatIcon, {
							[gt.a.Livestreaming]: t || !1
						}),
						trash: !0
					}), n.a.createElement(kt, null, C.fbt._("deleted", null, {
						hk: "4rQ3ZP"
					})))
				};
			var St = wt,
				Mt = (o("./node_modules/core-js/modules/es6.symbol.js"), o("./node_modules/lodash/first.js")),
				Nt = o.n(Mt),
				Rt = o("./node_modules/lodash/isEqual.js"),
				At = o.n(Rt),
				Pt = o("./node_modules/lodash/last.js"),
				Bt = o.n(Pt),
				Dt = o("./src/reddit/controls/Button/index.tsx"),
				Ut = o("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Wt = o.n(Ut),
				Ft = function(e, t) {
					var o = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (o[s[n]] = e[s[n]])
					}
					return o
				};
			const Ht = x.a.div("ButtonWrapper", Wt.a),
				Kt = e => {
					let {
						top: t
					} = e;
					return n.a.createElement("span", {
						className: Object(g.a)(Wt.a.ChunkPlaceholder, {
							[Wt.a.top]: t
						})
					}, C.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				Vt = e => {
					var {
						className: t,
						isLivestreaming: o,
						isLoading: s,
						setRef: r
					} = e, a = Ft(e, ["className", "isLivestreaming", "isLoading", "setRef"]);
					return n.a.createElement("div", {
						ref: r,
						className: Object(g.a)(t, {
							[Wt.a.ScrollerWrapper]: !o,
							[Wt.a.LivestreamingWrapper]: o,
							[Wt.a.loading]: s
						})
					}, !s && a.isPrevLoading && !o && n.a.createElement(Kt, {
						top: !0
					}), a.children, !s && a.isNextLoading && !o && n.a.createElement(Kt, null))
				};
			class qt extends n.a.Component {
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
						targetCommentIndex: o,
						children: s
					} = this.props;
					if (s && s.length && void 0 !== o && s[o]) {
						const e = Math.floor(o / this.chunkSize);
						this.state.activeChunkIndex !== e && this.setState({
							activeChunkIndex: e
						});
						const s = document.querySelector("#targetComment").offsetTop;
						s > t ? this.scrollTo(s - t) : this.scrollTo(s)
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
							o = e < t ? e : t;
						this.setState({
							activeChunkIndex: o
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
							o = t > e ? e : t;
						e >= 0 && this.setState({
							activeChunkIndex: o
						}, this.setNextTopScroll)
					}
				}
				getChunkIndexOnUpdate(e, t) {
					if (this.props && this.props.children.length && this.props.children[0] && this.props.children.length - e.children.length > 1) {
						const e = t.length - this.state.chunks.length,
							o = this.state.activeChunkIndex + e;
						if (e > 1) return o
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
					const t = e.children.length !== this.props.children.length || !At()(Nt()(e.children), Nt()(this.props.children)) || !At()(Bt()(e.children), Bt()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, o) {
					if (o && o.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							s = this.getChunkIndexOnUpdate(e, t),
							n = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: s || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== n || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + n
						}, () => {
							s && this.setNextTopScroll(), o.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1
						})
					}
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, o = this.state.newCommentsCount > 0 ? Object(g.a)([Wt.a.NewComments, Wt.a.show]) : Wt.a.NewComments;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(Vt, {
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
						className: Wt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), n.a.createElement("div", {
						key: "activeCommentsSection",
						className: Wt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), n.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Wt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), n.a.createElement(Ht, null, n.a.createElement(Dt.f, {
						className: o,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", C.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [C.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var zt = qt,
				Yt = o("./src/reddit/selectors/posts.ts");
			const Zt = 6e4,
				Gt = (e, t, o) => {
					let {
						authorId: s,
						id: n
					} = o;
					return e.includes(s) && !t.includes(n)
				},
				Jt = Object(a.c)({
					blockedRedditors: Te.a,
					blockedRedditorsPending: Te.b,
					chatCommentLinks: Qe.g,
					isPending: Qe.d,
					liveCommentsWebsocket: Yt.K,
					moreCommentsLink: Qe.E
				}),
				Qt = Object(r.b)(Jt, (e, t) => ({
					onLiveCommentsSubscribe: (o, s, n) => e(Object(u.a)(o, s, n, t.subredditId)),
					offLiveCommentsSubscribe: (t, o) => e(Object(u.b)(t, o)),
					loadMoreComments: o => e(Object(m.Z)(t.commentsPageKey, o)),
					loadBlockedRedditors: () => e(Object(d.g)()),
					loadComments: async () => await e(Object(p.q)(t.postId, void 0, {
						sort: i.r.CHAT
					}, i.r.CHAT))
				}));
			class Xt extends n.a.Component {
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
					} = this.props, t = e[e.length - 1], o = t && t.created;
					return !!o && Object(l.c)(o) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(c.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, Zt)
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
						liveCommentsWebsocket: o,
						loadComments: s,
						onLiveCommentsSubscribe: n,
						postId: r
					} = this.props;
					o && (e && s(), n(t, o, r), this._subscribedPostId = r, this._subscribedLiveCommentsWebsocket = o)
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					const {
						blockedRedditors: o,
						blockedRedditorsPending: s,
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
					return e.postId !== c || e.draftKey !== l || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== s || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks.length !== n.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== o.ids.length || t.expandedCommentIds.length !== d.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						chatCommentLinks: t,
						commentId: o,
						commentsPageKey: s,
						liveCommentsWebsocket: n,
						offLiveCommentsSubscribe: r,
						onLiveCommentsSubscribe: a,
						postId: i
					} = this.props;
					if (i !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), i && n && (a(s, n, i), this._subscribedPostId = i, this._subscribedLiveCommentsWebsocket = n)), this.deferTimestampUpdate(), o) {
						const e = Object(c.a)(() => {
							const {
								targetCommentIndex: s
							} = this.state;
							void 0 === s && (this.scrollToTargetComment(), o && t.forEach((e, t) => e.id === o && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: o,
						sendEvent: s
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), s(J("history", o)))
				}
				scrollToTargetComment(e) {
					if (e && this._refList[e] && this._refList[e].current && this._refScroller && this._refScroller.current) {
						const t = this._refList[e].current,
							o = t ? t.offsetTop : 0;
						return this._refScroller.current.scrollToTargetComment(o), void(t && t.focus())
					}
					const {
						commentId: t
					} = this.props, o = t && document.querySelector("#targetComment");
					o && this._refScroller && this._refScroller.current && this._refScroller.current.scrollToTargetComment(o.offsetTop)
				}
				render() {
					const {
						blockedRedditors: {
							ids: e
						},
						chatCommentLinks: t,
						className: o,
						commentId: s,
						commentsPageKey: r,
						emptyStateClassName: a,
						isLivestreaming: i,
						isLoading: c,
						isPending: l,
						postId: d,
						renderedInOverlay: m,
						sendEvent: u
					} = this.props, {
						expandedCommentIds: p,
						targetCommentIndex: C,
						timestampUpdateTrigger: b
					} = this.state, v = !(t && t.length || c || l);
					return n.a.createElement(n.a.Fragment, null, v ? n.a.createElement(h.c, {
						className: a,
						isChat: !0
					}) : n.a.createElement(zt, {
						className: o,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: i,
						isLoading: c || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: C
					}, t.map(t => Gt(e, p, t) ? n.a.createElement(D, {
						commentCount: 1,
						key: "scroll-node-".concat(t.id),
						onClick: () => this.expandComment(t.id)
					}) : n.a.createElement(St, {
						ref: t.id,
						key: "scroll-node-".concat(t.id),
						commentId: t.id,
						commentsPageKey: r,
						isLivestreaming: i,
						postId: d,
						renderedInOverlay: !!m,
						sendEvent: u,
						timestampUpdateTrigger: b,
						targetComment: t.id === s,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = Qt(Object(ie.c)(Xt))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return s
			})), o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return r
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/RichTextJsonChatReply/index.m.less": function(e, t, o) {
			e.exports = {
				Container: "qqC8Lcm050i_jAM3CePWY",
				container: "qqC8Lcm050i_jAM3CePWY"
			}
		},
		"./src/reddit/components/RichTextJsonChatReply/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/RichTextJson/index.tsx"),
				i = o("./src/reddit/components/RichTextJson/elements.tsx"),
				c = o("./src/reddit/components/RichTextJson/renderers.tsx"),
				l = o("./src/reddit/models/RichTextJson/index.ts");
			const d = e => n.a.createElement(i.f, null, e),
				m = e => {
					const t = [],
						o = e.c || [],
						s = o.length;
					for (let n = 0; n < s; n++) {
						const e = o[n];
						t.push(e.e === l.w ? e.t : Object(c.e)(e, {}, n))
					}
					return n.a.createElement(n.a.Fragment, null, t)
				},
				u = e => e.c && e.c.length ? n.a.createElement(n.a.Fragment, null, Object(c.i)(e.c, null, {})) : n.a.createElement("br", null);
			var p = o("./src/reddit/constants/elementClassNames.ts"),
				h = o("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				C = o.n(h);
			const b = o("./src/lib/lessComponent.tsx").a.div("Container", C.a),
				v = {
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
					content: o
				} = e, s = o.document, i = [], c = Object(a.b)(s), h = Object(a.c)(s);
				if (-1 !== c)
					for (let n = c; n <= h; n++) {
						const e = s[n],
							t = e && v[e.e];
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
								i.push(u(e))
						}
					}
				return n.a.createElement(b, {
					className: Object(r.a)(p.j, t)
				}, i)
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return O
			})), o.d(t, "c", (function() {
				return y
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/uniqueId.js"),
				r = o.n(n),
				a = o("./node_modules/raf/index.js"),
				i = o.n(a),
				c = o("./node_modules/react/index.js"),
				l = o.n(c),
				d = o("./node_modules/react-redux/es/index.js"),
				m = o("./node_modules/reselect/es/index.js"),
				u = o("./src/lib/classNames/index.ts"),
				p = o("./src/reddit/actions/modal.ts"),
				h = o("./src/reddit/selectors/activeModalId.ts"),
				C = o("./src/higherOrderComponents/asModal/index.tsx"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				v = o("./src/reddit/layout/row/Inline/index.tsx"),
				g = o("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = o.n(g);
			var f = Object(C.a)(e => {
					const {
						children: t,
						title: o
					} = e;
					return l.a.createElement("div", {
						className: x.a.wrapper
					}, l.a.createElement(v.a, {
						className: x.a.titleRow
					}, o), l.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), l.a.createElement(v.a, {
						className: x.a.buttonRow
					}, l.a.createElement(b.f, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				_ = o("./src/reddit/controls/ErrorText/index.m.less"),
				E = o.n(_);
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
						className: o,
						errorModalBody: n,
						errorModalTitle: r = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(u.a)(E.a.wrapper, o)
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
			const I = Object(d.b)(k, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(T),
				O = e => {
					const {
						className: t,
						errorClassName: o,
						errorModalTitle: s,
						fallbackMessage: n,
						messages: r = []
					} = e, a = r.length ? r : n ? [n] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(I, {
						className: o,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				y = e => l.a.createElement(O, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = I
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: o
				} = e;
				switch (t.type) {
					case n.E.AUTHORIZATION_ERROR:
						return o ? s.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : s.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case n.E.VALIDATION_ERROR:
						return s.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case n.E.NOT_FOUND_ERROR:
						return s.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case n.E.SERVER_ERROR:
						return s.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case n.E.LIKELY_UBLOCK_ERROR:
						return s.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, o) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			})), o.d(t, "b", (function() {
				return i
			}));
			var s = o("./src/lib/classNames/index.ts"),
				n = o("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = o.n(n);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve"), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock"), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove"), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report"), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam"), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, o) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);

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
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);

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
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);

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
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		}
	}
]);
//# sourceMappingURL=ChatPost.950e2b9495ce014e6f60.js.map