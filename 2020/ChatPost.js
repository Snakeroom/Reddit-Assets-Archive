// https://www.redditstatic.com/desktop2x/ChatPost.34bb52de6f04c1af4de8.js
// Retrieved at 11/12/2020, 11:40:06 AM by Reddit Dataminer v1.0.0
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
				return U
			})), o.d(t, "b", (function() {
				return F
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
				p = o("./src/reddit/models/Comment/index.ts"),
				u = o("./src/reddit/models/Flair/index.ts"),
				h = o("./src/reddit/models/PostCreationForm/index.ts"),
				C = o("./src/reddit/models/Vote/index.ts");
			const g = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const o = v(e.attribs),
							s = e.associated_award ? Object(m.b)(e.associated_award) : void 0;
						return Object.assign({
							allAwardings: [],
							associatedAward: s,
							author: e.author,
							authorId: e.author_fullname,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: b(o),
							id: e.name,
							isAdmin: o === p.d.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: o === p.d.Submitter,
							isMod: o === p.d.Moderator,
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
						case p.d.Admin:
							return s.C.ADMIN;
						case p.d.Moderator:
							return s.C.MODERATOR;
						case p.d.Alumni:
							return s.C.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				v = e => i()((e || []).filter(e => l()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || p.d.None;
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
			var _ = o("./src/lib/env/index.ts");
			const f = new Map,
				k = e => e,
				E = new Set;
			var T;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(T || (T = {}));
			const I = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				y = (e, t) => {
					const o = k(t),
						s = f.get(o);
					s && s.socket && (s.isClosePlanned = !0, s.socket.close())
				},
				O = (e, t, o, s) => {
					const n = k(t),
						r = f.get(n);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: o,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					f.set(n, a), a.socket.addEventListener("open", () => {
						a.retries = Object.assign({}, I)
					}), a.socket.addEventListener("message", S.bind(null, s)), a.socket.addEventListener("close", w.bind(null, n, s)), a.socket.addEventListener("error", N.bind(null, n)), window && window.addEventListener("beforeunload", y.bind(null, e, t))
				},
				w = (e, t, o) => {
					const s = f.get(e);
					s && (s.isClosePlanned ? f.delete(e) : j(e, t))
				},
				j = (e, t) => {
					const o = f.get(e);
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
					if (f.delete(e), n < a && i.readyState !== WebSocket.OPEN) {
						const e = s * Math.pow(2, n),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							d = Object.assign(Object.assign({}, o.retries), {
								connectionAttempts: n + 1
							});
						setTimeout(() => {
							O(l, c, d, t)
						}, i), Object(_.a)() && console.debug("Connection reset, retrying in ".concat(i, "ms"))
					}
				},
				S = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(_.a)() && console.error(t)
					}
				},
				N = (e, t) => {
					const o = f.get(e);
					o && o.isClosePlanned && o.socket && o.socket.readyState === WebSocket.CLOSED ? f.delete(e) : Object(_.a)() && console.error(t)
				};
			var M = o("./src/reddit/selectors/comments.ts"),
				L = o("./src/reddit/selectors/moderatorPermissions.ts"),
				R = o("./src/reddit/actions/comment/websocket/constants.ts");
			const A = Object(n.a)(R.b),
				P = Object(n.a)(R.c),
				B = Object(n.a)(R.a),
				D = Object(n.a)(R.d),
				W = {},
				U = (e, t, o, n) => async (a, i) => {
					(e => new Promise(t => {
						const {
							cb: o,
							url: s,
							uniqueId: n
						} = e;
						E.has(n) ? t() : (E.add(n), setTimeout(() => {
							E.delete(n), O(s, n, Object.assign({}, I), o), t()
						}, 1))
					}))({
						uniqueId: o,
						url: t,
						cb: t => {
							switch (t.type) {
								case T.NEW_COMMENT: {
									const c = t.payload.name,
										l = g(t.payload),
										d = i(),
										m = Object(r.a)(d, o).sortToUse === s.r.CHAT,
										p = Object(M.n)(d, {
											commentId: c
										}),
										u = !(!c || !W[c]);
									if (l && !u) {
										const o = x(0, n, t.payload),
											s = t.payload.total_comment_count;
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
											if (m) a(A({
												authorFlair: o,
												comment: l,
												commentsPageKey: e,
												depth: u,
												headCommentId: n,
												isChatSort: m,
												numComments: s,
												originId: p
											}));
											else {
												const t = c && c.originId ? 5e3 : 7e3;
												setTimeout(() => a(A({
													authorFlair: o,
													comment: l,
													commentsPageKey: e,
													depth: u,
													headCommentId: n,
													isChatSort: m,
													numComments: s,
													originId: p
												})), t)
											}
										} else a(P({
											authorFlair: o,
											comment: l,
											commentsPageKey: e,
											isChatSort: m,
											numComments: s
										}))
									}
									break
								}
								case T.UPDATE_COMMENT: {
									const c = t.payload.name,
										l = i(),
										d = Object(M.n)(l, {
											commentId: c
										}),
										m = g(t.payload),
										p = Object(r.a)(l, o).sortToUse === s.r.CHAT;
									if (d && m) {
										const o = x(0, n, t.payload),
											s = t.payload.total_comment_count;
										a(P({
											authorFlair: o,
											comment: m,
											commentsPageKey: e,
											isChatSort: p,
											numComments: s
										}))
									}
									break
								}
								case T.UPDATE_COMMENT_SCORE: {
									const o = t.payload.name,
										s = t.payload.score,
										n = i(),
										r = Object(M.n)(n, {
											commentId: o
										});
									r && a(P({
										comment: Object.assign(Object.assign({}, r), {
											score: s
										}),
										commentsPageKey: e
									}));
									break
								}
								case T.DELETE_COMMENT: {
									const e = t.payload.name,
										o = i(),
										s = Object(M.n)(o, {
											commentId: e
										});
									s && !s.isDeleted ? a(B({
										id: e
									})) : W[e] = T.DELETE_COMMENT;
									break
								}
								case T.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										o = t.payload.name,
										s = i(),
										n = Object(M.n)(s, {
											commentId: o
										}),
										r = (s.user.account && s.user.account.id) === (n && n.authorId),
										c = !!e && !!Object(L.i)(s, {
											postId: e
										});
									!n || n.isRemoved && n.isDeleted || r || c ? W[o] = T.REMOVE_COMMENT : a(B({
										id: o
									}));
									break
								}
								case T.USER_JOIN: {
									const o = g(t.payload, {
											isSystem: !0
										}),
										s = !0;
									o && a(D({
										comment: o,
										commentsPageKey: e,
										isChatSort: s
									}));
									break
								}
							}
						}
					})
				}, F = (e, t) => async () => {
					y(0, t)
				}
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment-index-tsx",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("reddit-components-Comments-PredictionComment-index-tsx").then(o.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
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
				return w
			})), o.d(t, "b", (function() {
				return j
			})), o.d(t, "g", (function() {
				return S
			})), o.d(t, "e", (function() {
				return N
			})), o.d(t, "d", (function() {
				return M
			})), o.d(t, "f", (function() {
				return L
			})), o.d(t, "a", (function() {
				return H
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
				p = o("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/helpers/describeApiError/index.ts"),
				C = o("./src/reddit/helpers/path/index.ts"),
				g = o("./src/reddit/helpers/styles/mixins/loading.ts"),
				b = o("./src/reddit/icons/fonts/Downvote/index.tsx"),
				v = o("./src/reddit/icons/fonts/Upvote/index.tsx"),
				x = o("./src/reddit/icons/svgs/Comments/index.tsx"),
				_ = o("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				f = o("./src/reddit/components/Comments/States/index.m.less"),
				k = o.n(f);
			const E = d.a.wrapped(x.a, "CommentsIcon", k.a),
				T = d.a.wrapped(_.a, "SnooFacepalm", k.a),
				I = d.a.p("EmptyTitle", k.a),
				y = d.a.p("ErrorTitle", k.a),
				O = d.a.p("EmptyText", k.a),
				w = e => {
					let {
						className: t,
						isChat: o
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(k.a.StateContainer, t)
					}, i.a.createElement(E, null), i.a.createElement(I, null, o ? s.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : s.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(O, null, s.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				j = () => i.a.createElement("div", {
					className: k.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(I, null, s.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(O, null, s.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: k.a.StateContainer
					}, i.a.createElement(E, null), i.a.createElement(I, null, s.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(u.k, {
						to: Object(C.b)(t)
					}, s.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				N = Object(c.b)(null, (e, t) => {
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
						className: k.a.StateContainer
					}, i.a.createElement(T, null), i.a.createElement(y, null, t ? Object(h.a)({
						apiError: t,
						isLoggedOut: !1
					}) : s.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), i.a.createElement(u.i, {
						onClick: o
					}, s.fbt._("Retry", null, {
						hk: "NOuNi"
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
						className: Object(l.a)(k.a.StateContainer, k.a.ErrorFullPage)
					}, i.a.createElement(N, {
						postId: t,
						commentId: o,
						sort: s,
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
				V = () => i.a.createElement("div", {
					className: Object(l.a)(k.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => i.a.createElement(R, null, r()(10, t => i.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(W, null), i.a.createElement(U, null)), i.a.createElement(D, null, i.a.createElement(F, null), i.a.createElement(V, null)))))
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
				p = o.n(m);
			const u = l.a.div("Userpic", p.a);
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
				return i.a.createElement(u, {
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
				l = o("./src/reddit/components/UserIcon/helpers.ts"),
				d = o("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = o("./src/reddit/icons/svgs/Redditor/index.tsx"),
				p = o("./src/reddit/icons/svgs/Remove/index.tsx"),
				u = o("./src/reddit/selectors/experiments/econ/snoovatar.ts"),
				h = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				C = o.n(h);
			const g = i.a.img("Userpic", C.a),
				b = Object(a.c)({
					account: e => e.user.account,
					isSnoovatarEnabled: u.a
				}),
				v = Object(r.b)(b);
			t.a = i.a.wrapped(v(e => {
				let {
					account: t,
					className: o,
					height: s,
					icon: r,
					isLivestreaming: a,
					isSnoovatarEnabled: i,
					trash: u,
					userId: h,
					width: b
				} = e;
				const v = a ? 36 : 20,
					x = {
						height: s || v,
						width: b || v,
						minWidth: b || v
					};
				if (u) return n.a.createElement("div", {
					className: o,
					style: x
				}, n.a.createElement(p.a, {
					className: C.a.TrashIcon
				}));
				const _ = t && t.id === h,
					f = _ ? t.accountIcon : r;
				return i && Object(l.a)(f) ? n.a.createElement("div", {
					className: o,
					style: x
				}, n.a.createElement(d.a, {
					headshot: f
				})) : h ? n.a.createElement("div", {
					className: o,
					style: x
				}, _ && t.accountIcon ? n.a.createElement(g, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(c.a, {
					userId: h
				})) : n.a.createElement("div", {
					className: o,
					style: x
				}, t && t.accountIcon && !a ? n.a.createElement(g, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(m.a, {
					className: C.a.ProfileIcon
				}))
			}), "ChatIcon", C.a)
		},
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, o) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				LivestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF",
				livestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF"
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
		"./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less": function(e, t, o) {
			e.exports = {
				SystemMessageText: "_2QTeDg8kTAhAgxZWbsorEm",
				systemMessageText: "_2QTeDg8kTAhAgxZWbsorEm"
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
			var s = o("./node_modules/lodash/debounce.js"),
				n = o.n(s),
				r = o("./node_modules/lodash/last.js"),
				a = o.n(r),
				i = o("./node_modules/react/index.js"),
				c = o.n(i),
				l = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				m = o("./src/lib/constants/index.ts"),
				p = o("./src/lib/setInterval/index.ts"),
				u = o("./src/lib/timeAgo/index.ts"),
				h = o("./src/reddit/actions/blockedRedditors.ts"),
				C = o("./src/reddit/actions/comment/index.ts"),
				g = o("./src/reddit/actions/comment/websocket/index.ts"),
				b = o("./src/reddit/actions/page.ts"),
				v = o("./src/reddit/components/Comments/States/index.tsx"),
				x = o("./node_modules/fbt/lib/FbtPublic.js"),
				_ = o("./node_modules/lodash/defer.js"),
				f = o.n(_),
				k = o("./src/lib/classNames/index.ts"),
				E = o("./src/lib/lessComponent.tsx"),
				T = o("./src/lib/makeDraftKey/index.ts"),
				I = o("./src/lib/objectSelector/index.ts"),
				y = o("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				O = o("./src/reddit/components/Comments/PredictionComment/async.ts"),
				w = o("./src/reddit/helpers/awards/message.ts"),
				j = o("./src/reddit/helpers/getRichTextContent/index.ts"),
				S = o("./src/reddit/components/RichTextJson/index.tsx"),
				N = o("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				M = o("./src/reddit/icons/svgs/Star/index.tsx"),
				L = o("./src/reddit/icons/svgs/Star2/index.tsx"),
				R = o("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				A = o.n(R);
			const P = Object(I.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				B = e => {
					const {
						award: t,
						comment: o,
						iconUrl: s
					} = e;
					let n = "",
						r = !0,
						a = !1;
					return t.coinPrice < w.a ? (n = A.a.silverTierAwardComment, r = !1) : t.coinPrice < w.b ? n = A.a.goldTierAwardComment : (n = A.a.platinumTierAwardComment, a = !0), c.a.createElement("div", {
						className: Object(k.a)(A.a.awardComment, n)
					}, c.a.createElement("div", {
						className: A.a.imageContainer
					}, r && c.a.createElement(c.a.Fragment, null, c.a.createElement(M.a, {
						className: Object(k.a)(A.a.backgroundAnimation, A.a.backgroundStar)
					}), c.a.createElement(L.a, {
						className: Object(k.a)(A.a.backgroundAnimation, A.a.backgroundStar, A.a.backgroundStar2)
					})), a && c.a.createElement(c.a.Fragment, null, c.a.createElement(N.a, {
						className: Object(k.a)(A.a.backgroundAnimation, A.a.backgroundSparkle, A.a.sparkleBottomLeft)
					}), c.a.createElement(N.a, {
						className: Object(k.a)(A.a.backgroundAnimation, A.a.backgroundSparkle, A.a.sparkleTopRight)
					}), c.a.createElement(N.a, {
						className: Object(k.a)(A.a.backgroundAnimation, A.a.backgroundSparkle, A.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: s
					})), c.a.createElement(S.a, {
						className: A.a.awardCommentText,
						content: Object(j.a)(o),
						key: "rich-text-".concat(o.id),
						rtJsonElementProps: P(e),
						useExplicitTextColor: !0
					}))
				};
			var D = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				W = o("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				U = o.n(W);
			var F = e => {
					let {
						commentCount: t,
						isLivestreaming: o,
						onClick: s
					} = e;
					const n = Object(k.a)(U.a.CollapsedComment, {
						[U.a.LivestreamingWrapper]: o
					});
					return c.a.createElement("div", {
						className: n,
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
				V = o("./src/lib/humanizeDateTime/index.ts"),
				H = o("./src/reddit/models/Vote/index.ts"),
				K = o("./src/reddit/actions/postCreation/general.ts"),
				q = o("./src/reddit/actions/reportFlow.ts"),
				z = o("./src/reddit/actions/tooltip.ts"),
				Y = o("./src/reddit/actions/userBlocks.ts"),
				J = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				G = o("./src/reddit/constants/tracking.ts"),
				Q = o("./src/reddit/selectors/telemetry.ts"),
				Z = o("./src/telemetry/models/Event.ts");
			const X = e => ({
					screen: Object(Q.screen)(e),
					profile: Object(Q.profile)(e),
					subreddit: Object(Q.subreddit)(e)
				}),
				$ = (e, t) => o => ({
					action: "load",
					noun: e,
					post: Object(Q.post)(o, t),
					source: Z.b.ChatView,
					subreddit: Object(Q.subreddit)(o)
				}),
				ee = e => t => Object.assign({
					source: "chat_post",
					action: G.c.VIEW,
					noun: "last_message",
					post: Object(Q.post)(t, e),
					comment: Object(Q.comment)(t, e)
				}, X(t));
			var te = o("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				oe = o.n(te);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = E.a.button("MenuItem", oe.a),
				re = E.a.a("MenuItemPermalink", oe.a),
				ae = e => {
					let {
						children: t,
						comment: o,
						onClick: s,
						onHideTooltip: n,
						onShowTooltip: r,
						sendEvent: a,
						tooltipId: i,
						tooltipText: l,
						trackingNoun: d
					} = e;
					return c.a.createElement(ne, {
						id: i,
						onMouseEnter: r.bind(void 0, i),
						onMouseLeave: n.bind(void 0, i),
						onClick: e => {
							s(e), d && (a(((e, t) => o => Object.assign({
								source: "comment",
								action: G.c.CLICK,
								noun: e,
								post: Object(Q.post)(o, t),
								comment: Object(Q.comment)(o, t)
							}, X(o)))(d, o.id)), a(((e, t) => o => Object.assign({
								source: "comment_overflow_menu",
								action: G.c.CLICK,
								noun: e,
								post: Object(Q.post)(o, t),
								comment: Object(Q.comment)(o, t)
							}, X(o)))(d, o.id)))
						}
					}, t, c.a.createElement(J.c, {
						tooltipId: i,
						text: l
					}))
				},
				ie = e => c.a.createElement(ae, se({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(re, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var ce = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				le = o("./src/reddit/components/ModModeReports/helpers.ts"),
				de = o("./src/reddit/components/ReportFlow/index.tsx"),
				me = o("./src/reddit/components/TrackingHelper/index.tsx"),
				pe = o("./src/reddit/icons/fonts/Downvote/index.tsx"),
				ue = o("./src/reddit/icons/fonts/Upvote/index.tsx"),
				he = o("./src/reddit/icons/svgs/Approve/index.tsx"),
				Ce = o("./src/reddit/icons/svgs/Edit/index.tsx"),
				ge = o("./src/reddit/icons/svgs/Flag/index.tsx"),
				be = o("./src/reddit/icons/svgs/Hide/index.tsx"),
				ve = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				xe = o("./src/reddit/icons/svgs/Remove/index.tsx"),
				_e = o("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				fe = o("./src/reddit/icons/svgs/Spam/index.tsx"),
				ke = o("./src/reddit/models/PostDraft/index.ts"),
				Ee = o("./src/reddit/selectors/activeModalId.ts"),
				Te = o("./src/reddit/selectors/blockedRedditors.ts"),
				Ie = o("./src/reddit/constants/experiments.ts"),
				ye = o("./src/reddit/helpers/chooseVariant/index.ts");
			const Oe = Object(d.a)(e => Object(ye.c)(e, {
					experimentName: Ie.L,
					experimentEligibilitySelector: ye.a
				}), e => e),
				we = e => Oe(e) === Ie.F.UpvoteOnly,
				je = e => Oe(e) === Ie.F.UpvoteDownvote;
			var Se = o("./src/reddit/selectors/moderatorPermissions.ts"),
				Ne = o("./src/reddit/selectors/user.ts");

			function Me() {
				return (Me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Le = E.a.wrapped(be.a, "BlockIcon", oe.a),
				Re = E.a.wrapped(ge.a, "FlagIcon", oe.a),
				Ae = E.a.wrapped(Ce.a, "EditIcon", oe.a),
				Pe = E.a.wrapped(he.a, "ApproveIcon", oe.a),
				Be = E.a.wrapped(_e.a, "ReplyIcon", oe.a),
				De = E.a.wrapped(xe.a, "RemoveIcon", oe.a),
				We = E.a.wrapped(fe.a, "SpamIcon", oe.a),
				Ue = E.a.wrapped(ue.a, "UpvoteIcon", oe.a),
				Fe = E.a.wrapped(pe.a, "DownvoteIcon", oe.a),
				Ve = E.a.wrapped(ve.a, "ModeratorIcon", oe.a),
				He = e => (t, o) => {
					let {
						comment: s
					} = o;
					return "".concat(e).concat(s.id)
				},
				Ke = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				qe = Object(d.c)({
					currentUser: Ne.i,
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
					reportFlowIsOpen: (e, t) => {
						let {
							comment: o
						} = t;
						return e.reportFlow.postOrCommentId === o.id
					},
					approveTooltipId: He("CommentChatPost--Approve--"),
					blockTooltipId: He("CommentChatPost--Block--"),
					createTooltipId: He("CommentChatPost--Create--"),
					editTooltipId: He("CommentChatPost--Edit--"),
					replyTooltipId: He("CommentChatPost--Reply--"),
					reportTooltipId: He("CommentChatPost--Report--"),
					upvoteTooltipId: He("CommentChatPost--Upvote--"),
					downvoteTooltipId: He("CommentChatPost--Downvote--"),
					distinguishTooltipId: He("CommentChatPost--Distinguish--"),
					spamTooltipId: He("CommentChatPost--Spam--"),
					removeTooltipId: He("CommentChatPost--Remove--"),
					deleteTooltipId: He("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: o
						} = t;
						return Object(Ee.a)(e) === Ke(o.id)
					},
					isUpvoteOnly: we,
					isUpvoteDownvote: je
				});
			var ze = Object(l.b)(qe, (e, t) => {
					let {
						comment: o,
						commentsPageKey: s
					} = t;
					return {
						onReplyClick: () => e(Object(C.ob)({
							parentCommentId: o.id,
							commentsPageKey: s,
							singleOpen: !0
						})),
						onReportClick: t => {
							t.stopPropagation(), e(Object(q.j)(o.id, !1))
						},
						onHideTooltip: () => e(Object(z.i)()),
						onShowTooltip: t => e(Object(z.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = o.media && o.media.rteMode;
							s && e(Object(C.V)({
								commentId: o.id,
								draftKey: Object(T.a)(ke.c.edit, o.id),
								text: o.bodyMD || "",
								commentMode: t,
								commentsPageKey: s
							}))
						},
						onApproveClick: () => e(Object(C.H)(o.id)),
						onBlockClick: () => e(Object(Y.h)(o.author)),
						onUnblockClick: () => e(Object(Y.g)(o.author)),
						onUpvoteClick: () => e(Object(C.rb)(o.id)),
						onDownvoteClick: () => e(Object(C.T)(o.id)),
						onDistinguishClick: t => e(Object(C.S)(o.id, t)),
						onSpamClick: () => e(Object(C.cb)(o.id, !0)),
						onRemoveClick: () => e(Object(C.cb)(o.id, !1)),
						deleteComment: () => s && e(Object(C.db)(o.id, o.postId)),
						onDeleteClick: () => e(Object(K.l)(Ke(o.id))),
						toggleDeleteCommentModal: () => e(Object(K.l)(Ke(o.id)))
					}
				})(Object(me.c)(e => {
					const {
						comment: t,
						className: o,
						createTooltipId: s,
						currentUser: n,
						deleteComment: r,
						deleteTooltipId: a,
						editTooltipId: i,
						isAuthorBlocked: l,
						isDeleteModalOpen: d,
						isLivestreaming: p,
						isMod: h,
						onApproveClick: C,
						onBlockClick: g,
						onDeleteClick: b,
						onEditClick: v,
						onHideTooltip: _,
						onRemoveClick: f,
						onReplyClick: E,
						onReportClick: T,
						onShowTooltip: I,
						onSpamClick: y,
						onUnblockClick: O,
						onUpvoteClick: w,
						onDownvoteClick: j,
						onDistinguishClick: S,
						reportFlowIsOpen: N,
						replyTooltipId: M,
						reportTooltipId: L,
						approveTooltipId: R,
						blockTooltipId: A,
						removeTooltipId: P,
						upvoteTooltipId: B,
						downvoteTooltipId: D,
						distinguishTooltipId: W,
						sendEvent: U,
						spamTooltipId: F,
						toggleDeleteCommentModal: K,
						timestampUpdateTrigger: q,
						isUpvoteOnly: z,
						isUpvoteDownvote: Y
					} = e, J = !!n && n.id === t.authorId, G = Object(le.b)(t), Q = t.isApproved && G, Z = !t.bannedBy || t.bannedBy === m.k, X = {
						comment: t,
						onHideTooltip: _,
						onShowTooltip: I,
						sendEvent: U
					}, $ = t.isMod, {
						voteState: ee,
						score: te,
						isDeleted: se
					} = t, ne = !se && (0 === te || 1 === te || ee === H.a.notVoted);
					return c.a.createElement("div", {
						className: o
					}, c.a.createElement("div", {
						className: Object(k.a)(oe.a.Menu, {
							[oe.a.Livestreaming]: p
						})
					}, (t.bannedBy || G) && h && c.a.createElement(ae, Me({
						onClick: C,
						tooltipId: R,
						tooltipText: Q ? x.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : x.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(Pe, null)), !t.isLocked && c.a.createElement(ae, Me({
						onClick: E,
						tooltipId: M,
						tooltipText: x.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(Be, null)), h && J && c.a.createElement(ae, Me({
						onClick: () => S($ ? m.C.NONE : m.C.MODERATOR),
						tooltipId: W,
						tooltipText: $ ? x.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : x.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(Ve, null)), (z || Y) && !p && ne && c.a.createElement(ae, Me({
						onClick: w,
						tooltipId: B,
						tooltipText: x.fbt._("Upvote", null, {
							hk: "21XMb7"
						})
					}, e), c.a.createElement(Ue, null)), Y && !p && ne && c.a.createElement(ae, Me({
						onClick: j,
						tooltipId: D,
						tooltipText: x.fbt._("Downvote", null, {
							hk: "k46Xu"
						})
					}, e), c.a.createElement(Fe, null)), h && Z && c.a.createElement(ae, Me({
						onClick: y,
						tooltipId: F,
						tooltipText: x.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(We, null)), !J && c.a.createElement(ae, Me({
						onClick: T,
						tooltipId: L,
						tooltipText: x.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(Re, null)), N && c.a.createElement(de.a, {
						commentId: t.id,
						overlayCustomStyles: de.b,
						postId: t.postId,
						withOverlay: !0
					}), J && !p && c.a.createElement(ae, Me({
						onClick: v,
						tooltipId: i,
						tooltipText: x.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, X), c.a.createElement(Ae, null)), h && Z ? c.a.createElement(ae, Me({
						onClick: f,
						tooltipId: P,
						tooltipText: t.bannedBy === m.k ? x.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : x.fbt._("Remove", null, {
							hk: "1f2QZ6"
						}),
						trackingNoun: t.bannedBy === m.k ? "confirm_remove" : "remove"
					}, X), c.a.createElement(De, null)) : J && c.a.createElement(ae, Me({
						onClick: b,
						tooltipId: a,
						tooltipText: x.fbt._("Delete", null, {
							hk: "48iIX1"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(De, null)), d && c.a.createElement(ce.a, {
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
						toggleModal: K,
						withOverlay: !0
					}), !!n && !J && c.a.createElement(ae, Me({
						onClick: () => l ? O() : g(),
						tooltipId: A,
						tooltipText: l ? x.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : x.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: "sitewide_".concat(l ? "unblock" : "block")
					}, X), c.a.createElement(Le, null))), !p && c.a.createElement(ie, Me({}, e, {
						tooltipId: s,
						tooltipText: Object(V.a)(t.created),
						timestampUpdateTrigger: q
					}), Object(u.d)(t.created)))
				})),
				Ye = o("./src/chat/helpers/dom.ts"),
				Je = o("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				Ge = o("./src/reddit/selectors/comments.ts"),
				Qe = o("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				Ze = o.n(Qe);
			const Xe = {},
				$e = E.a.wrapped(D.a, "ChatIcon", Ze.a),
				et = E.a.span("ReplyAuthor", Ze.a),
				tt = E.a.div("ReplyWrapper", Ze.a);
			var ot = Object(l.b)(() => Object(d.c)({
					comment: Ge.n
				}))(e => {
					let {
						comment: t,
						commentId: o,
						isLivestreaming: s,
						onReplyClick: n
					} = e;
					return t ? t.isDeleted ? c.a.createElement(tt, null, c.a.createElement("span", {
						className: Object(k.a)([Ze.a.ReplyLinkBubble, Ze.a.delete, {
							[Ze.a.Livestreaming]: s
						}])
					}, c.a.createElement(At, null))) : c.a.createElement(tt, null, c.a.createElement("a", {
						className: Object(k.a)(Ze.a.ReplyLinkBubble, {
							[Ze.a.Livestreaming]: s
						}),
						href: t.permalink,
						rel: "noopener noreferrer",
						target: "_blank",
						onClick: Object(Ye.a)(() => n(t.id))
					}, c.a.createElement($e, {
						userId: t.authorId,
						icon: t.profileImage
					}), c.a.createElement(et, null, t.author), c.a.createElement(Je.a, {
						className: Ze.a.ReplyComment,
						key: "rich-text-".concat(o),
						content: Object(j.a)(t),
						rtJsonElementProps: Xe
					}))) : null
				}),
				st = o("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				nt = o.n(st);
			const rt = Object(I.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var at = e => {
					const {
						comment: t
					} = e;
					return void 0 === rt(e) ? null : c.a.createElement(S.a, {
						className: nt.a.SystemMessageText,
						content: Object(j.a)(t),
						key: "rich-text-".concat(t.id),
						rtJsonElementProps: rt(e),
						useExplicitTextColor: !0
					})
				},
				it = o("./src/reddit/components/VerticalVotes/index.tsx"),
				ct = o("./src/reddit/components/CommentsChat/Comment/Votes/index.m.less"),
				lt = o.n(ct);
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
						className: o,
						isUpvoteOnly: s,
						isUpvoteDownvote: n
					} = this.props, {
						voteState: r,
						score: a,
						isDeleted: i
					} = e, l = !i && !(0 === a || 1 === a || r === H.a.notVoted);
					return (s || n) && l && c.a.createElement("div", {
						className: Object(k.a)(lt.a.ChatHorizontalVotesWrapper, o)
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
						comment: o
					} = t;
					return {
						handleVote: t => {
							t === H.a.upvoted && e(Object(C.rb)(o.id)), t === H.a.downvoted && e(Object(C.T)(o.id))
						}
					}
				})(Object(me.c)(pt)),
				ht = o("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ct = o("./src/reddit/contexts/PageLayer/index.tsx"),
				gt = o("./src/reddit/controls/ErrorText/index.tsx");
			const bt = e => Object(ye.c)(e, {
				experimentName: Ie.K,
				experimentEligibilitySelector: ye.a
			}) === Ie.I.Enabled;
			var vt = o("./src/reddit/selectors/communityAwards.ts");
			const xt = (e, t) => {
				let {
					commentId: o
				} = t;
				const s = Object(Ge.n)(e, {
					commentId: o
				});
				if (s && s.associatedAwardId) return Object(vt.a)(e, s.associatedAwardId)
			};
			var _t = o("./src/reddit/selectors/gold/awardIcon.ts"),
				ft = o("./src/reddit/selectors/poll/index.ts"),
				kt = o("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				Et = o.n(kt);
			const Tt = 250,
				It = 10,
				yt = E.a.wrapped(gt.b, "ErrorText", Et.a),
				Ot = E.a.wrapped(y.a, "TopMeta", Et.a),
				wt = E.a.span("DeleteText", Et.a),
				jt = E.a.wrapped(ot, "Reply", Et.a),
				St = Object(Ct.t)(),
				Nt = Object(l.b)(() => Object(d.c)({
					associatedAward: (e, t) => {
						let {
							commentId: o
						} = t;
						return xt(e, {
							commentId: o
						})
					},
					awardIconUrl: (e, t) => {
						let {
							commentId: o
						} = t;
						const s = xt(e, {
							commentId: o
						});
						if (s) return Object(_t.a)(e, {
							award: s,
							minSize: 64,
							postOrCommentId: o
						})
					},
					comment: Ge.n,
					errorMsgs: Ge.H,
					flair: Ge.e,
					isActive: (e, t) => {
						let {
							commentId: o
						} = t;
						return Boolean(e.shortcuts.activeCommentId && o === e.shortcuts.activeCommentId)
					},
					isEditing: Ge.z,
					prediction: ft.f,
					subreddit: Ct.q,
					shouldRenderSystemMessages: bt
				})),
				Mt = Object(I.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class Lt extends c.a.Component {
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
						isTruncated: o
					} = this.state, s = t !== e.isExpanded || o !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && s) {
						const e = this.elemRef.current;
						let o = Tt;
						if (t) {
							o = e.scrollHeight + It;
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
						awardIconUrl: t,
						childrenInfo: o,
						comment: s,
						commentsPageKey: n,
						errorMsgs: r,
						flair: a,
						isActive: i,
						isEditing: l,
						isLivestreaming: d,
						postId: m,
						prediction: p,
						renderedInOverlay: h,
						sendEvent: C,
						targetComment: g,
						timestampUpdateTrigger: b,
						addToRefList: v,
						onReplyClick: _,
						shouldRenderSystemMessages: E
					} = this.props, {
						isCollapsed: I,
						isExpanded: y,
						isTruncated: w
					} = this.state;
					if (!s) return null;
					i && f()(() => this.elemRef.current && this.elemRef.current.focus()), f()(() => this.elemRef && this.elemRef.current && v && v(this.elemRef));
					const N = s.isSystem,
						M = !l && !s.isDeleted && !N,
						L = !!e,
						R = Object(k.a)({
							[Et.a.SystemMessageWrapper]: N && !d && E,
							[Et.a.CommentWrapper]: !d && !N,
							[Et.a.CommentExpanded]: y,
							[Et.a.CommentTruncated]: w,
							[Et.a.HighlightTarget]: g,
							[Et.a.LivestreamingCommentWrapper]: d
						});
					return I ? c.a.createElement(F, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: g ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: R
					}, l && c.a.createElement(ht.a, {
						key: "chatCommentsForm",
						isLivestreaming: d,
						postId: m,
						sendEvent: C,
						draftKey: Object(T.a)(ke.c.edit, s.id),
						commentsPageKey: n,
						isEditing: l,
						comment: s
					}), M && c.a.createElement(c.a.Fragment, null, c.a.createElement(Ot, {
						childrenInfo: o,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: s,
						commentsPageKey: n,
						compact: !0,
						flair: a,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: d,
						renderedInOverlay: h
					}, c.a.createElement(D.a, {
						className: Object(k.a)(Et.a.ChatIcon, {
							[Et.a.Livestreaming]: d
						}),
						isLivestreaming: d,
						icon: s.profileImage,
						userId: s.authorId
					})), s.parentId && c.a.createElement(jt, {
						commentId: s.parentId,
						onReplyClick: _,
						isLivestreaming: d
					}), d && c.a.createElement("span", {
						className: Et.a.livestreamingTimeStamp
					}, Object(u.d)(s.created)), L && e && d ? c.a.createElement(B, {
						award: e,
						comment: s,
						iconUrl: t
					}) : p ? c.a.createElement(O.a, {
						comment: s,
						prediction: p
					}) : [c.a.createElement(S.a, {
						className: Object(k.a)(Et.a.RichTextJson, {
							[Et.a.Livestreaming]: d
						}),
						content: Object(j.a)(s),
						key: "rich-text-".concat(s.id),
						rtJsonElementProps: Mt(this.props),
						useExplicitTextColor: d
					}), c.a.createElement(ze, {
						key: "Menu",
						className: Object(k.a)(Et.a.Menu, {
							[Et.a.Livestreaming]: d
						}),
						comment: s,
						commentsPageKey: n,
						isLivestreaming: d,
						timestampUpdateTrigger: b
					})]), s.isDeleted && c.a.createElement(At, null), M && r && r.map((e, t) => c.a.createElement(yt, {
						key: "".concat(t, "-").concat(e)
					}, e)), !l && w && c.a.createElement("button", {
						className: Object(k.a)(Et.a.CommentReadMoreButton, {
							[Et.a.Livestreaming]: d
						}),
						onClick: this.toggleBody
					}, x.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), !d && M && c.a.createElement(ut, {
						className: Object(k.a)({
							[Et.a.TruncatedVotesButton]: w && !y
						}),
						comment: s
					}), N && !d && E && c.a.createElement(at, {
						comment: s
					}))
				}
			}
			const Rt = St(Nt(Lt)),
				At = e => {
					let {
						isLivestreaming: t
					} = e;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(D.a, {
						className: Object(k.a)(Et.a.ChatIcon, {
							[Et.a.Livestreaming]: t || !1
						}),
						trash: !0
					}), c.a.createElement(wt, null, x.fbt._("deleted", null, {
						hk: "4rQ3ZP"
					})))
				};
			var Pt = Rt,
				Bt = (o("./node_modules/core-js/modules/es6.symbol.js"), o("./node_modules/lodash/first.js")),
				Dt = o.n(Bt),
				Wt = o("./node_modules/lodash/isEqual.js"),
				Ut = o.n(Wt),
				Ft = o("./src/reddit/controls/Button/index.tsx"),
				Vt = o("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Ht = o.n(Vt),
				Kt = function(e, t) {
					var o = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (o[s[n]] = e[s[n]])
					}
					return o
				};
			const qt = E.a.div("ButtonWrapper", Ht.a),
				zt = e => {
					let {
						top: t
					} = e;
					return c.a.createElement("span", {
						className: Object(k.a)(Ht.a.ChunkPlaceholder, {
							[Ht.a.top]: t
						})
					}, x.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				Yt = e => {
					var {
						className: t,
						isLivestreaming: o,
						isLoading: s,
						setRef: n
					} = e, r = Kt(e, ["className", "isLivestreaming", "isLoading", "setRef"]);
					return c.a.createElement("div", {
						ref: n,
						className: Object(k.a)(t, {
							[Ht.a.ScrollerWrapper]: !o,
							[Ht.a.LivestreamingWrapper]: o,
							[Ht.a.loading]: s
						})
					}, !s && r.isPrevLoading && !o && c.a.createElement(zt, {
						top: !0
					}), r.children, !s && r.isNextLoading && !o && c.a.createElement(zt, null))
				};
			class Jt extends c.a.Component {
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
					}), this.scrollToTargetComment(), this.props.targetCommentIndex || this.props.onLastMessageView && this.props.onLastMessageView()
				}
				componentWillUnmount() {
					this.removeScrollListener()
				}
				getSnapshotBeforeUpdate(e) {
					const t = e.children.length !== this.props.children.length || !Ut()(Dt()(e.children), Dt()(this.props.children)) || !Ut()(a()(e.children), a()(this.props.children));
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
							s && this.setNextTopScroll(), o.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1, o.scrolledBottom && n > 0 && this.props.onLastMessageView && this.props.onLastMessageView()
						})
					} else t.newCommentsCount > 0 && 0 === this.state.newCommentsCount && this.props.onLastMessageView && this.props.onLastMessageView()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, o = this.state.newCommentsCount > 0 ? Object(k.a)([Ht.a.NewComments, Ht.a.show]) : Ht.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Yt, {
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
						className: Ht.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: Ht.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Ht.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(qt, null, c.a.createElement(Ft.i, {
						className: o,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", x.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [x.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var Gt = Jt,
				Qt = o("./src/reddit/selectors/posts.ts");
			const Zt = 6e4,
				Xt = (e, t, o) => {
					let {
						authorId: s,
						id: n
					} = o;
					return e.includes(s) && !t.includes(n)
				},
				$t = Object(d.c)({
					blockedRedditors: Te.a,
					blockedRedditorsPending: Te.b,
					chatCommentLinks: Ge.g,
					isPending: Ge.d,
					liveCommentsWebsocket: Qt.M,
					moreCommentsLink: Ge.E
				}),
				eo = Object(l.b)($t, (e, t) => ({
					onLiveCommentsSubscribe: (o, s, n) => e(Object(g.a)(o, s, n, t.subredditId)),
					offLiveCommentsSubscribe: (t, o) => e(Object(g.b)(t, o)),
					loadMoreComments: o => e(Object(C.Z)(t.commentsPageKey, o)),
					loadBlockedRedditors: () => e(Object(h.g)()),
					loadComments: async () => await e(Object(b.q)(t.postId, void 0, {
						sort: m.r.CHAT
					}, m.r.CHAT))
				}));
			class to extends c.a.Component {
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
					} = this.props, t = e[e.length - 1], o = t && t.created;
					return !!o && Object(u.c)(o) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(p.a)(() => {
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
						const e = Object(p.a)(() => {
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
					t && !t.pending && (e(t.moreCommentId), s($("history", o)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, o = a()(e);
					(null == o ? void 0 : o.id) && t(ee(o.id))
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
					} = this.state, g = !(t && t.length || i || l);
					return c.a.createElement(c.a.Fragment, null, g ? c.a.createElement(v.c, {
						className: r,
						isChat: !0
					}) : c.a.createElement(Gt, {
						className: o,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: a,
						isLoading: i || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => Xt(e, u, t) ? c.a.createElement(F, {
						commentCount: 1,
						isLivestreaming: a,
						key: "scroll-node-".concat(t.id),
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(Pt, {
						ref: t.id,
						key: "scroll-node-".concat(t.id),
						commentId: t.id,
						commentsPageKey: n,
						isLivestreaming: a,
						postId: d,
						renderedInOverlay: !!m,
						sendEvent: p,
						timestampUpdateTrigger: C,
						targetComment: t.id === s,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = eo(Object(me.c)(to))
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
				p = e => e.c && e.c.length ? n.a.createElement(n.a.Fragment, null, Object(c.i)(e.c, null, {})) : n.a.createElement("br", null);
			var u = o("./src/reddit/constants/elementClassNames.ts"),
				h = o("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				C = o.n(h);
			const g = o("./src/lib/lessComponent.tsx").a.div("Container", C.a),
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
					content: o
				} = e, s = o.document, i = [], c = Object(a.b)(s), h = Object(a.c)(s);
				if (-1 !== c)
					for (let n = c; n <= h; n++) {
						const e = s[n],
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
					className: Object(r.a)(u.j, t)
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
				return y
			})), o.d(t, "c", (function() {
				return O
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
				p = o("./src/lib/classNames/index.ts"),
				u = o("./src/reddit/actions/modal.ts"),
				h = o("./src/reddit/selectors/activeModalId.ts"),
				C = o("./src/higherOrderComponents/asModal/index.tsx"),
				g = o("./src/reddit/controls/Button/index.tsx"),
				b = o("./src/reddit/layout/row/Inline/index.tsx"),
				v = o("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = o.n(v);
			var _ = Object(C.a)(e => {
					const {
						children: t,
						title: o
					} = e;
					return l.a.createElement("div", {
						className: x.a.wrapper
					}, l.a.createElement(b.a, {
						className: x.a.titleRow
					}, o), l.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), l.a.createElement(b.a, {
						className: x.a.buttonRow
					}, l.a.createElement(g.i, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = o("./src/reddit/controls/ErrorText/index.m.less"),
				k = o.n(f);
			const E = Object(m.c)({
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
						className: Object(p.a)(k.a.wrapper, o)
					}, l.a.createElement("span", {
						className: k.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: k.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && l.a.createElement(_, {
						onConfirmed: this.toggleModal,
						title: r
					}, n || e))
				}
			}
			const I = Object(d.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(T),
				y = e => {
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
				O = e => l.a.createElement(y, {
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
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = o.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, n.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, n.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
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
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = o.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, n.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/selectors/poll/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "g", (function() {
				return c
			})), o.d(t, "f", (function() {
				return l
			})), o.d(t, "d", (function() {
				return d
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "c", (function() {
				return p
			}));
			var s = o("./src/reddit/models/Comment/index.ts"),
				n = o("./src/reddit/models/Poll/index.ts"),
				r = o("./src/reddit/selectors/comments.ts");
			const a = (e, t) => {
					let {
						postId: o
					} = t;
					return e.posts.metaMap[o]
				},
				i = (e, t) => {
					let {
						postId: o
					} = t;
					const s = a(e, {
						postId: o
					});
					if (s) return e.polls.models[s]
				},
				c = (e, t) => {
					let {
						postId: o
					} = t;
					const s = i(e, {
						postId: o
					});
					return s && Object(n.e)(s) ? s : null
				},
				l = (e, t) => {
					let {
						commentId: o
					} = t;
					const n = Object(r.n)(e, {
						commentId: o
					});
					return n && n.commentType === s.a.Prediction && c(e, n) || null
				},
				d = (e, t) => {
					let {
						postId: o
					} = t;
					const s = a(e, {
						postId: o
					});
					if (s) return e.polls.rewards[s]
				},
				m = (e, t) => {
					let {
						postId: o
					} = t;
					const s = a(e, {
						postId: o
					});
					if (s) return e.polls.results.byVotingPower[s]
				},
				p = (e, t) => {
					let {
						postId: o
					} = t;
					const s = a(e, {
						postId: o
					});
					if (s) return e.polls.results.byVoters[s]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.34bb52de6f04c1af4de8.js.map