// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.9a0d94f35e09162bc4f2.js
// Retrieved at 3/11/2021, 7:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "CommentsPage"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				r = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = r
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./node_modules/uuid/index.js": function(e, t, s) {
			var n = s("./node_modules/uuid/v1.js"),
				r = s("./node_modules/uuid/v4.js"),
				o = r;
			o.v1 = n, o.v4 = r, e.exports = o
		},
		"./node_modules/uuid/v1.js": function(e, t, s) {
			var n, r, o = s("./node_modules/uuid/lib/rng-browser.js"),
				i = s("./node_modules/uuid/lib/bytesToUuid.js"),
				a = 0,
				d = 0;
			e.exports = function(e, t, s) {
				var c = t && s || 0,
					l = t || [],
					m = (e = e || {}).node || n,
					p = void 0 !== e.clockseq ? e.clockseq : r;
				if (null == m || null == p) {
					var u = o();
					null == m && (m = n = [1 | u[0], u[1], u[2], u[3], u[4], u[5]]), null == p && (p = r = 16383 & (u[6] << 8 | u[7]))
				}
				var h = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					b = void 0 !== e.nsecs ? e.nsecs : d + 1,
					g = h - a + (b - d) / 1e4;
				if (g < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (g < 0 || h > a) && void 0 === e.nsecs && (b = 0), b >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				a = h, d = b, r = p;
				var f = (1e4 * (268435455 & (h += 122192928e5)) + b) % 4294967296;
				l[c++] = f >>> 24 & 255, l[c++] = f >>> 16 & 255, l[c++] = f >>> 8 & 255, l[c++] = 255 & f;
				var x = h / 4294967296 * 1e4 & 268435455;
				l[c++] = x >>> 8 & 255, l[c++] = 255 & x, l[c++] = x >>> 24 & 15 | 16, l[c++] = x >>> 16 & 255, l[c++] = p >>> 8 | 128, l[c++] = 255 & p;
				for (var v = 0; v < 6; ++v) l[c + v] = m[v];
				return t || i(l)
			}
		},
		"./src/graphql/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"595acecb7f6e"}')
		},
		"./src/graphql/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"51591a693756"}')
		},
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"6829c428155b"}')
		},
		"./src/graphql/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"6cd935a036e1"}')
		},
		"./src/graphql/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
		},
		"./src/graphql/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/graphql/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"2245303550b1"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";

			function n(e, t, s, n) {
				const r = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: s ? "UTC" : void 0
				}).format(r)
			}
			s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return u
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "i", (function() {
				return O
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				r = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				i = s.n(o),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./node_modules/lodash/values.js"),
				c = s.n(d);
			const l = e => c()(a.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				u = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				h = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = p(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				g = p(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				f = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				x = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				v = u.normalize;
			u.normalize = e => {
				v.call(u, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const y = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				C = e => {
					return [...g.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				k = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				O = e => {
					const t = u.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(r.e)(e),
					i = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${i}`
			}
		},
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t, s, n = {}) => {
				let r = `collectionCommentsPage--[collection:'${e}']`;
				return t && (r += `--[post:'${t}']`), s && (r += `--[rootComment:'${s}']`), n && (n.sort && n.hasSortParam && (r += `--[sort:'${n.sort}']`), n.context && (r += `--[context:${n.context}]`), n.depth && (r += `--[depth:${n.depth}]`)), r
			}
		},
		"./src/reddit/actions/comment/websocket/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return W
			})), s.d(t, "b", (function() {
				return U
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
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
						const s = x(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(m.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: f(s),
							id: e.name,
							isAdmin: s === p.d.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: s === p.d.Submitter,
							isMod: s === p.d.Moderator,
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
						case p.d.Admin:
							return n.C.ADMIN;
						case p.d.Moderator:
							return n.C.MODERATOR;
						case p.d.Alumni:
							return n.C.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				x = e => a()((e || []).filter(e => c()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || p.d.None;
			const v = (e, t, s) => {
				const n = {
						[t]: {}
					},
					{
						author: r,
						author_flair_background_color: o,
						author_flair_richtext: i,
						author_flair_template_id: a,
						author_flair_text: d,
						author_flair_text_color: c,
						author_flair_type: l
					} = s;
				if (r && l) {
					if (l === u.f.Richtext) {
						if (!o || !i) return;
						return {
							[t]: {
								[r]: {
									type: l,
									backgroundColor: o,
									cssClass: void 0,
									richtext: i,
									templateId: a,
									textColor: c
								}
							}
						}
					}
					if (l === u.f.Text) {
						if (!d) return n;
						return {
							[t]: {
								[r]: {
									type: l,
									backgroundColor: o,
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
			var y = s("./src/lib/env/index.ts");
			const C = new Map,
				k = e => e,
				O = new Set;
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
					const s = k(t),
						n = C.get(s);
					n && n.socket && (n.isClosePlanned = !0, n.socket.close())
				},
				I = (e, t, s, n) => {
					const r = k(t),
						o = C.get(r);
					if (o && (o.socket.readyState === WebSocket.CONNECTING || o.socket.readyState === WebSocket.OPEN)) return;
					const i = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					C.set(r, i), i.socket.addEventListener("open", () => {
						i.retries = {
							...E
						}
					}), i.socket.addEventListener("message", A.bind(null, n)), i.socket.addEventListener("close", j.bind(null, r, n)), i.socket.addEventListener("error", L.bind(null, r)), window && window.addEventListener("beforeunload", P.bind(null, e, t))
				},
				j = (e, t, s) => {
					const n = C.get(e);
					n && (n.isClosePlanned ? C.delete(e) : S(e, t))
				},
				S = (e, t) => {
					const s = C.get(e);
					if (!s) return;
					const {
						retries: {
							backoffTime: n,
							connectionAttempts: r,
							jitterAmount: o,
							maximumRetries: i
						},
						socket: a,
						uniqueId: d,
						url: c
					} = s;
					if (C.delete(e), r < i && a.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, r),
							i = Math.random() * o - o / 2,
							a = Math.round(e + i),
							l = {
								...s.retries,
								connectionAttempts: r + 1
							};
						setTimeout(() => {
							I(c, d, l, t)
						}, a), Object(y.a)() && console.debug(`Connection reset, retrying in ${a}ms`)
					}
				},
				A = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(y.a)() && console.error(t)
					}
				},
				L = (e, t) => {
					const s = C.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? C.delete(e) : Object(y.a)() && console.error(t)
				};
			var N = s("./src/reddit/selectors/comments.ts"),
				T = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				R = s("./src/reddit/actions/comment/websocket/constants.ts");
			const M = Object(r.a)(R.b),
				F = Object(r.a)(R.c),
				B = Object(r.a)(R.a),
				D = Object(r.a)(R.d),
				V = {},
				W = (e, t, s, r) => async (i, a) => {
					(e => new Promise(t => {
						const {
							cb: s,
							url: n,
							uniqueId: r
						} = e;
						O.has(r) ? t() : (O.add(r), setTimeout(() => {
							O.delete(r), I(n, r, {
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
										m = Object(o.a)(l, s).sortToUse === n.r.CHAT,
										p = Object(T.a)(l, {
											commentId: d
										}),
										u = !(!d || !V[d]);
									if (c && !u) {
										const s = v(0, r, t.payload),
											n = t.payload.total_comment_count;
										if (void 0 === p) {
											const r = Object(N.w)(l, {
													commentsPageKey: e
												}),
												o = t.payload.parent_id,
												a = Object(N.j)(l, {
													commentId: o,
													commentsPageKey: e
												}),
												d = Object(T.a)(l, {
													commentId: o
												}),
												p = d && d.originId ? d.originId : o,
												u = null === a ? a : a + 1;
											if (m) i(M({
												authorFlair: s,
												comment: c,
												commentsPageKey: e,
												depth: u,
												headCommentId: r,
												isChatSort: m,
												numComments: n,
												originId: p
											}));
											else {
												const t = d && d.originId ? 5e3 : 7e3;
												setTimeout(() => i(M({
													authorFlair: s,
													comment: c,
													commentsPageKey: e,
													depth: u,
													headCommentId: r,
													isChatSort: m,
													numComments: n,
													originId: p
												})), t)
											}
										} else i(F({
											authorFlair: s,
											comment: c,
											commentsPageKey: e,
											isChatSort: m,
											numComments: n
										}))
									}
									break
								}
								case w.UPDATE_COMMENT: {
									const d = t.payload.name,
										c = a(),
										l = Object(T.a)(c, {
											commentId: d
										}),
										m = g(t.payload),
										p = Object(o.a)(c, s).sortToUse === n.r.CHAT;
									if (l && m) {
										const s = v(0, r, t.payload),
											n = t.payload.total_comment_count;
										i(F({
											authorFlair: s,
											comment: m,
											commentsPageKey: e,
											isChatSort: p,
											numComments: n
										}))
									}
									break
								}
								case w.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										n = t.payload.score,
										r = a(),
										o = Object(T.a)(r, {
											commentId: s
										});
									o && i(F({
										comment: {
											...o,
											score: n
										},
										commentsPageKey: e
									}));
									break
								}
								case w.DELETE_COMMENT: {
									const e = t.payload.name,
										s = a(),
										n = Object(T.a)(s, {
											commentId: e
										});
									n && !n.isDeleted ? i(B({
										id: e
									})) : V[e] = w.DELETE_COMMENT;
									break
								}
								case w.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										n = a(),
										r = Object(T.a)(n, {
											commentId: s
										}),
										o = (n.user.account && n.user.account.id) === (r && r.authorId),
										d = !!e && !!Object(_.h)(n, {
											postId: e
										});
									!r || r.isRemoved && r.isDeleted || o || d ? V[s] = w.REMOVE_COMMENT : i(B({
										id: s
									}));
									break
								}
								case w.USER_JOIN: {
									const s = g(t.payload, {
											isSystem: !0
										}),
										n = !0;
									s && i(D({
										comment: s,
										commentsPageKey: e,
										isChatSort: n
									}));
									break
								}
							}
						}
					})
				}, U = (e, t) => async () => {
					P(0, t)
				}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const o = Object(n.a)(r.a),
				i = Object(n.a)(r.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const o = Object(n.a)(r.a)
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "b", (function() {
				return k
			}));
			s("./node_modules/uuid/index.js");
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/predictions/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/endpoints/economics/predictions.ts"),
				a = s("./src/reddit/selectors/experiments/econ/predictions.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/subreddit.ts"),
				l = s("./src/reddit/selectors/user.ts");
			s("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: r.a
				}
			});
			var m = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				p = s("./src/reddit/actions/economics/predictions/constants.ts");
			Object(n.a)({
				features: {
					predictions: r.a
				}
			});
			const u = Object(o.a)(p.d),
				h = Object(o.a)(p.f),
				b = Object(o.a)(p.e),
				g = (e, t, s, n) => async (r, o, {
					gqlContext: a
				}) => {
					const d = Object(l.K)(o()),
						c = await Object(i.f)(a(), {
							subredditId: e,
							period: t,
							top: s,
							includeCurrentRank: d,
							tournamentId: n
						});
					if (c.error || !c.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: m
					} = c.body.data;
					if (!m || !m.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: p
					} = m, h = {
						subredditId: e,
						...p
					};
					return r(u(h)), h
				}, f = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = s(),
						o = Object(d.P)(r, {
							postId: e,
							disallowProfile: !0
						});
					if (!o) throw new Error("Post does not belong to a subreddit");
					const c = await Object(i.e)(n(), o.name, Object(a.a)(r));
					if (c.error || !c.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: l
					} = c.body.data;
					if (!l || !l.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return l.predictionCoinPackages
				}, x = ({
					coinPackageId: e,
					optionId: t,
					postId: s,
					price: n
				}) => async (r, o, {
					gqlContext: a
				}) => {
					const d = await Object(i.j)(a(), {
						coinPackageId: e,
						optionId: t,
						postId: s,
						price: n
					});
					if (d.error || !d.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: c
					} = d.body.data;
					if (!c) throw new Error("Failed to create prediction vote");
					return r(h({
						pollId: s,
						prediction: c.poll,
						price: n
					})), c.poll
				}, v = ({
					optionId: e,
					postId: t
				}) => async (s, n, {
					gqlContext: r
				}) => {
					const o = await Object(i.h)(r(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: a
						} = o.body.data;
					if (!(null == a ? void 0 : a.poll)) throw new Error("Failed to resolve prediction");
					return s(b({
						pollId: t,
						prediction: a.poll
					})), a.poll
				}, y = Object(o.a)(p.b), C = Object(o.a)(p.c), k = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = s(),
						o = Object(c.F)(r, e);
					if (Object(m.h)(r, {
							subredditId: o
						})) return Object(m.f)(r, {
						subredditId: o
					});
					t(y({
						subredditId: o
					}));
					const a = await Object(i.g)(n(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (a.error || !a.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: d
					} = a.body.data;
					if (!d.predictionTournaments) return [];
					const l = d.predictionTournaments;
					return t(C({
						subredditId: o,
						tournaments: l
					})), l
				};
			Object(o.a)(p.a), Object(o.a)(p.g), Object(o.a)(p.h)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "b", (function() {
				return P
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(r.a)(i.g),
				g = Object(r.a)(i.e),
				f = Object(r.a)(i.h),
				x = Object(r.a)(i.c),
				v = Object(r.a)(i.f),
				y = Object(r.a)(i.j),
				C = Object(r.a)(i.i),
				k = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						o = Object(p.e)(r),
						i = Object(p.d)(r),
						c = Object(h.J)(r);
					if (o || !i) return;
					e(f());
					let u = !1;
					try {
						const t = c ? n.LoggedInGeo : n.LoggedOutGeo,
							r = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (O(t)) {
								if (w(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), u = !0
								} else if (E(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										i = [n, r],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(n),
										p = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: o,
											lastLoadedEnv: "client"
										};
									e(b(p)), u = !0
								}
							} else u = !1
						}
					} catch (v) {
						u = !1
					}
					u || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !w(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, P = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(u.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(h.K)(i);
						return Object(o.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return W
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return U
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return H
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return K
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return q
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return z
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/economics/helpers/async.ts"),
				a = s("./src/reddit/actions/pages/subreddit.ts"),
				d = s("./src/reddit/actions/platform.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/profile/index.ts"),
				m = s("./src/reddit/actions/shortcuts/active.ts"),
				p = s("./src/reddit/actions/subreddit.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/constants/adEvents.ts"),
				b = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/endpoints/governance/posts.ts"),
				x = s("./src/config.ts"),
				v = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeApiRequest/index.ts"),
				C = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function k(e, t, s) {
				const n = `${x.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(C.a)(`${n}/${e}/${t}/${s}`) : t ? Object(C.a)(`${n}/${e}/${t}`) : Object(C.a)(`${n}/${e}`)
			}
			var O = (e, t, s, n, r) => Object(y.a)(e, {
					data: r,
					endpoint: k(t, s, n),
					method: v.cb.GET
				}),
				w = s("./src/reddit/endpoints/page/subredditPage.ts"),
				E = s("./src/reddit/helpers/canonicalUrls.ts"),
				P = s("./src/reddit/helpers/commentList/index.ts"),
				I = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				j = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = s("./src/reddit/helpers/trackers/screenview.ts"),
				A = s("./src/reddit/models/Comment/index.ts"),
				L = s("./src/reddit/models/Post/index.ts"),
				N = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				T = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/postCollection.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				M = s("./src/reddit/selectors/subreddit.ts"),
				F = s("./src/reddit/actions/pages/comments.ts"),
				B = s("./src/reddit/actions/pages/constants.ts"),
				D = s("./src/lib/initializeClient/installReducer.ts"),
				V = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(D.a)({
				pages: {
					comments: V.a
				}
			});
			const W = Object(n.a)(B.d),
				U = Object(n.a)(B.b),
				H = Object(n.a)(B.a),
				K = e => async (t, s) => {
					const {
						collectionId: n,
						partialPostId: r,
						partialCommentId: o,
						subredditName: i = "",
						routePrefix: a
					} = e.params, d = r ? Object(L.r)(r) : "", u = o && Object(A.f)(o), {
						queryParams: h
					} = e, f = s(), {
						instanceId: x
					} = h, v = g.b[a] === g.a.PROFILE, {
						hasSortParam: y,
						sortToUse: C
					} = Object(I.a)(f, d), k = ["context", "depth", "limit", b.f].reduce((e, t) => {
						const s = parseInt(h[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: i,
						hasSortParam: y,
						instanceId: x
					});
					y && (k.sort = C), t(c.m(d)), await Promise.all([v ? t(l.d(i)) : Promise.resolve(), t(G(n, d, u, k))]);
					const O = s().posts.models[d];
					if (O) {
						const n = Object(M.L)(s(), {
							identifier: O.belongsTo
						});
						if (!O.isSponsored)
							if (O.belongsTo.type === g.a.SUBREDDIT) {
								!!Object(M.S)(f, {
									subredditId: O.belongsTo.id
								}) || await t(p.o(n.name))
							} else await t(l.d(n.name));
						const r = s().posts.instances[d] ? e.queryParams.instanceId : O.postId;
						t(Object(m.b)(r))
					}
					v ? Object(E.d)(s(), t, e) : Object(E.e)(s(), t, e), Object(S.v)(s(), !0)
				}, q = Object(n.a)(B.c), z = (e, t, s, n) => async (o, i, a) => {
					const c = Object(r.a)(e, t, s, n),
						l = i();
					t = t || Object(_.p)(l, {
						collectionId: e
					});
					const m = await O(a.apiContext(), e, t, s, n);
					if (o(Object(d.l)(m.status)), m.ok) {
						if (!(t = t || m.body.collections[e].primaryPostId)) return;
						const s = Object(P.a)(m.body, t, l);
						o(U({
							key: c,
							collectionId: e,
							meta: l.meta,
							postId: t,
							shouldCollapse: s,
							...m.body
						}));
						const n = l.user.prefs.commentMode;
						o(q({
							commentMode: n,
							key: c,
							postId: t
						}))
					} else o(H({
						error: m.error,
						key: c,
						...m.body
					}))
				}, G = (e, t, s, n, l) => async (m, p, b) => {
					const g = Object(r.a)(e, t, s, n),
						x = p();
					t = t || Object(_.p)(x, {
						collectionId: e
					});
					const {
						subredditName: v
					} = n, y = x.pages.comments.keyToHeadCommentId.hasOwnProperty(g), C = x.pages.comments.api.fullyLoaded[g], k = x.pages.comments.api.error[g];
					if (x.pages.comments.api.pending[g] || y && !k) {
						if (y && !x.sidebarPromotedPosts.firstFetch) {
							const e = Object(T.h)(x) ? N.a.COMMENTS_OVERLAY : N.a.COMMENTS;
							window.addEventListener("load", () => {
								m(Object(o.b)(e))
							})
						}
						return void(C || l || m(z(e, t, s, n)))
					}
					const E = x.user.prefs.commentMode;
					m(W({
						key: g,
						collectionId: e,
						commentMode: E,
						postId: t
					}));
					const I = {
						...n
					}; {
						const e = t && Object(R.D)(p(), {
							postId: t
						});
						e && e.numComments && e.numComments > F.MIN_NUM_COMMENTS_TO_TRUNCATE && (I.truncate = F.NUM_COMMENTS_TRUNCATE)
					}
					let S, A = await Object(j.a)("comments", () => O(b.apiContext(), e, t, s, I));
					if (m(Object(d.l)(A.status)), A.ok && (t = t || A.body.collections[e].primaryPostId)) {
						const e = Object.keys(A.body.posts).filter(e => !!A.body.posts[e].isMeta),
							s = Object(R.D)(p(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(f.a)(b.apiContext(), s.belongsTo.id, e);
							t.ok && (S = t.body)
						}
					}
					if (!l) {
						const r = t ? Object(R.D)(p(), {
							postId: t
						}) : null;
						r && A.body.comments && Object.keys(A.body.comments).length < r.numComments ? m(z(e, t, s, n)) : A.ok && m(q({
							commentMode: E,
							key: g,
							postId: t
						}));
						const i = Object(T.h)(x) ? N.a.COMMENTS_OVERLAY : N.a.COMMENTS;
						m(Object(o.b)(i))
					}
					if (A.ok) {
						if (!t) return;
						const e = Object(P.a)(A.body, t, x);
						m(Object(F.commentsPageLoaded)({
							commentMode: E,
							key: g,
							postId: t,
							meta: x.meta,
							governance: S,
							shouldCollapse: e,
							...A.body
						})), m(u.g(g));
						const s = Object(R.D)(x, {
							postId: t
						});
						s && m(c.u(s, h.a.CommentsView)), !l && s && "subreddit" === s.belongsTo.type && A.body.comments && await m(Object(i.a)({
							commentIds: Object.keys(A.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else v && (m(Object(a.subredditPending)({
						key: g
					})), A = await Object(j.a)("subreddit", () => Object(w.a)(b.apiContext(), v, {})), m(Object(d.l)(A.status))), m(Object(a.handleSubredditPageApiError)(A, v)), m(H({
						error: A.error,
						key: g,
						...A.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return de
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return ce
			})), s.d(t, "commentsPagePending", (function() {
				return le
			})), s.d(t, "commentsPageLoaded", (function() {
				return me
			})), s.d(t, "commentsPageFailed", (function() {
				return pe
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return ue
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return he
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return be
			})), s.d(t, "commentsPageRequested", (function() {
				return ge
			})), s.d(t, "commentsPageDataRequested", (function() {
				return fe
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return xe
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return ve
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/reddit/actions/category/index.ts"),
				o = s("./src/reddit/actions/discoveryUnit.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts"),
				a = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditSettings.ts"),
				c = s("./src/reddit/endpoints/governance/posts.ts"),
				l = s("./src/reddit/endpoints/page/commentsPage.ts"),
				m = s("./src/reddit/endpoints/page/subredditPage.ts"),
				p = s("./src/reddit/endpoints/profile/info.ts"),
				u = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/economics/helpers/async.ts"),
				g = s("./src/reddit/actions/externalAccount.ts"),
				f = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				x = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/profile/index.ts"),
				y = s("./src/reddit/actions/subreddit.ts"),
				C = s("./src/reddit/actions/toaster.ts"),
				k = s("./src/reddit/constants/adEvents.ts"),
				O = s("./src/reddit/constants/graphql.ts"),
				w = s("./src/reddit/constants/parameters.ts"),
				E = s("./src/reddit/constants/posts.ts"),
				P = s("./src/reddit/helpers/commentList/index.ts"),
				I = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				j = s("./src/reddit/models/Comment/index.ts"),
				S = s("./src/reddit/models/Media/index.ts"),
				A = s("./src/reddit/models/Subreddit/index.ts"),
				L = s("./src/reddit/models/User/index.ts"),
				N = s("./src/reddit/selectors/category.ts"),
				T = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				_ = s("./src/reddit/selectors/experiments/postSeo.ts"),
				R = s("./src/reddit/selectors/experiments/removedPosts.ts"),
				M = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				F = s("./src/reddit/selectors/platform.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				W = s("./src/lib/makeActionCreator/index.ts"),
				U = s("./src/lib/makeCommentsPageKey/index.ts"),
				H = s("./src/reddit/actions/ads/index.ts"),
				K = s("./src/reddit/actions/platform.ts"),
				q = s("./src/reddit/helpers/canonicalUrls.ts"),
				z = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				Y = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				J = s("./src/reddit/actions/gold/powerups.ts"),
				Q = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				X = s("./src/lib/performanceTimings/index.tsx"),
				Z = s("./src/reddit/constants/experiments.ts"),
				$ = s("./src/reddit/helpers/chooseVariant/index.ts");
			const ee = e => {
				var t, s;
				const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					r = n && Object(u.r)(n),
					{
						sortToUse: o
					} = Object(I.a)(e, r);
				return (!o || o === h.r.CONFIDENCE) && Object($.c)(e, {
					experimentEligibilitySelector: () => Object(V.J)(e),
					experimentName: Z.r
				}) === Z.t.Enabled
			};
			var te = s("./src/reddit/selectors/chatPost.ts"),
				se = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				ne = s("./src/reddit/selectors/realtimeComments.ts"),
				re = s("./src/reddit/selectors/seo/index.ts"),
				oe = s("./src/reddit/actions/pages/constants.ts"),
				ie = s("./src/lib/initializeClient/installReducer.ts"),
				ae = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(ie.a)({
				pages: {
					comments: ae.a
				}
			});
			const de = 25,
				ce = 100,
				le = Object(W.a)(oe.h),
				me = Object(W.a)(oe.f),
				pe = Object(W.a)(oe.e),
				ue = (e, t, s) => {
					const n = !e,
						r = Object(B.D)(t, {
							postId: s
						}),
						o = r.belongsTo,
						i = Object(D.L)(t, {
							identifier: o
						}),
						a = Object(re.c)(t, {
							identifier: o
						}),
						d = {
							listingBelow: !1,
							postFeed: !1,
							postImageOCRAltText: !1,
							postQASchema: !1
						};
					return Object(re.b)(t) ? d.listingBelow = a || n : d.postFeed = (a || n) && (!Object(A.g)(i) && !Object(te.d)(t, {
						postId: s
					}) && !!i || !Object(F.h)(t) && Object(_.e)(t)), e && (d.postImageOCRAltText = Object(_.c)(r) && !!Object(_.b)(t, r, !1), d.postQASchema = Object(_.f)(t, r)), d
				},
				he = (e, t) => e || t.postFeed || t.listingBelow || t.postImageOCRAltText || t.postQASchema,
				be = e => ({
					includePostFeed: e.postFeed,
					includeListingBelowExperiment: e.listingBelow,
					includePostImageOCRAltText: e.postImageOCRAltText,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				ge = e => async (t, s) => {
					var o, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(u.r)(d) : "", p = c && Object(j.f)(c), {
						path: b,
						queryParams: C
					} = e, k = Object(f.d)(b), {
						instanceId: P
					} = C, {
						hasSortParam: A,
						sortToUse: L
					} = Object(I.a)(s(), m), T = null === (i = null === (o = Object(F.b)(s())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === i ? void 0 : i.route.chunk, _ = ["context", "depth", "limit", w.f].reduce((e, t) => {
						const s = parseInt(C[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: A,
						instanceId: P,
						include_categories: !0
					});
					A && (_.sort = L), _.onOtherDiscussions = k, t(x.m(m)), await t(fe(m, p, _, L));
					const M = s().posts.models[m],
						B = Object(V.K)(s());
					if (M && "subreddit" === M.belongsTo.type) {
						const e = M.belongsTo.id,
							s = Object(X.i)(() => t(Object(J.f)(e, {
								fullData: !0,
								includeIdentity: B
							})), {
								name: "subredditPowerupsRequested",
								page: T,
								isLoggedIn: B
							});
						await s
					}
					if (M) {
						const o = Object(D.L)(s(), {
							identifier: M.belongsTo
						});
						if (o && Object(R.a)(s())) return void t(Object(n.c)(o.url));
						if ((M.media && M.media.type) === S.o.LIVEVIDEO) {
							const e = `/rpan${M.belongsTo.type===E.a.SUBREDDIT?o.url:"/"}${Object(u.s)(M.id)}`;
							return void t(Object(n.c)(e))
						}
						if (M.belongsTo.type !== E.a.SUBREDDIT || M.isSponsored) {
							if (M.belongsTo.type === E.a.PROFILE) {
								const e = Object(X.i)(() => t(v.d(o.name)), {
									name: "getProfileInfo",
									page: T,
									isLoggedIn: B
								});
								await e
							}
						} else {
							if (!!!Object(D.S)(s(), {
									subredditId: M.belongsTo.id
								})) {
								const e = Object(X.i)(() => t(y.o(o.name)), {
									name: "getSubredditRules",
									page: T,
									isLoggedIn: B
								});
								await e
							}
						}
						const i = ue(!1, s(), m),
							d = Object(se.c)(s()),
							c = k;
						if (he(c, i)) {
							Object(z.d)(z.a.LinkedPosts);
							const e = Object(z.c)(z.a.LinkedPosts),
								n = {
									adContext: {
										layout: O.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.Ub.WEEK.toUpperCase(),
									sort: h.I.TOP,
									subredditName: o.name
								},
								r = {
									postId: m
								},
								a = {
									correlationId: e,
									experimentVariant: d
								},
								l = be(i);
							Object(X.i)(() => t(Object(Q.a)({
								...r,
								...n,
								...a,
								...l,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: B,
								page: T
							});
							0
						}
						t(Object(g.p)());
						const l = s().posts.instances[m] ? e.queryParams.instanceId : M.postId;
						t(Object(a.b)(l)); {
							const e = Object(N.d)(s(), {
								subredditName: o.name
							});
							await Promise.all(e.map(e => t(r.c(e))))
						}
					}
					const {
						routePrefix: W
					} = e.params;
					E.b[W] === E.a.PROFILE ? Object(q.d)(s(), t, e) : Object(q.b)(s(), t, e)
				}, fe = (e, t, s, n) => async (r, a, d) => {
					var u, g, f;
					const v = a(),
						y = Object(U.a)(e, t, s),
						{
							subredditName: O
						} = s,
						w = v.pages.comments.keyToHeadCommentId.hasOwnProperty(y),
						E = v.pages.comments.api.fullyLoaded[y],
						I = v.pages.comments.api.error[y],
						j = v.pages.comments.api.pending[y],
						S = !Object(V.J)(v),
						A = Object(V.j)(v),
						N = n === h.r.CHAT,
						_ = !!v.platform.lastPage;
					if ((j || w && !I) && !(N && _)) {
						if (w && !v.sidebarPromotedPosts.firstFetch) {
							const t = Object(F.h)(v) ? Y.a.COMMENTS_OVERLAY : Y.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(H.b)(t)), Math.random() <= .01 && r(Object(H.a)(e))
							})
						}
						return void(E || r(ve(e, t, s)))
					}
					r(o.g());
					const R = v.user.prefs.commentMode;
					r(le({
						key: y,
						postId: e,
						commentMode: R
					}));
					const M = {
						...s,
						...N ? {
							sort: h.r.LIVE
						} : S ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(B.D)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > ce && (M.truncate = de)
					}
					const D = null === (g = null === (u = Object(F.b)(v)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === g ? void 0 : g.route.chunk,
						W = Object(X.i)(() => Object(l.a)(d.apiContext(), e, t, M, Object(T.a)(a()), Object(ne.a)(a()), ee(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !S,
							page: D
						}),
						q = !S && A && Object(X.i)(() => Object(p.d)(d.gqlContext(), Object(L.e)(A)), {
							name: "fetchProfileKarma",
							isLoggedIn: !S,
							page: D
						}) || null,
						[z, J] = await Promise.all([W, q]);
					let Q;
					if (r(Object(K.l)(z.status)), z.ok) {
						const t = Object.keys(z.body.posts).filter(e => !!z.body.posts[e].isMeta),
							s = z.body.posts[e];
						if (t.length) {
							const e = Object(X.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: D,
									isLoggedIn: !S
								}),
								n = await e;
							n.ok && (Q = n.body)
						}
						if (J && J.ok) {
							const e = null === (f = J.body.data.redditorInfoByName) || void 0 === f ? void 0 : f.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : p.a;
							z.body && z.body.account && Object.assign(z.body.account, t)
						}
						const n = Object(P.a)(z.body, e, v);
						r(me({
							key: y,
							postId: e,
							meta: v.meta,
							governance: Q,
							shouldCollapse: n,
							...z.body
						}))
					} {
						const n = Object(B.D)(a(), {
							postId: e
						});
						n && z.body.comments && Object.keys(z.body.comments).length < n.numComments ? r(ve(e, t, s)) : z.ok && r(xe({
							key: y
						}));
						const o = Object(F.h)(v) ? Y.a.COMMENTS_OVERLAY : Y.a.COMMENTS;
						r(Object(H.b)(o)), Math.random() <= .01 && r(Object(H.a)(e))
					}
					if (z.ok) {
						r(C.g(y));
						const t = Object(B.D)(a(), {
							postId: e
						});
						if (r(x.u(t, k.a.CommentsView)), t && "subreddit" === t.belongsTo.type && z.body.comments) {
							const e = Object(X.i)(() => r(Object(b.a)({
								commentIds: Object.keys(z.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: D,
								isLoggedIn: !S
							});
							await e
						}
					} else {
						let e;
						O && (r(Object(i.subredditPending)({
							key: y
						})), e = await Object(G.a)("subreddit", () => Object(m.a)(d.apiContext(), O, {})), r(Object(K.l)(e.status)), r(Object(i.handleSubredditPageApiError)(e, O))), r(pe({
							error: z.error,
							key: y,
							...e ? e.body : z.body
						}))
					}
				}, xe = Object(W.a)(oe.g), ve = (e, t, s) => async (n, r, o) => {
					var i;
					const a = Object(U.a)(e, t, s),
						c = r(),
						m = Object(V.K)(c),
						u = Object(V.j)(c),
						h = Object(l.a)(o.apiContext(), e, t, s, Object(T.a)(c), Object(ne.a)(c), ee(c)),
						g = m && u && Object(p.d)(o.gqlContext(), Object(L.e)(u)) || null,
						[f, x] = await Promise.all([h, g]);
					if (n(Object(K.l)(f.status)), f.ok) {
						if (x && x.ok) {
							const e = null === (i = x.body.data.redditorInfoByName) || void 0 === i ? void 0 : i.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : p.a;
							f.body && f.body.account && Object.assign(f.body.account, t)
						}
						const t = Object(P.a)(f.body, e, c);
						n(me({
							key: a,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...f.body
						})), n(xe({
							key: a
						}));
						const s = r().posts.models[e],
							o = s && Object(B.P)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(M.a)(c, {
							subredditId: o.id
						}) && n(Object(d.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && f.body.comments && await n(Object(b.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(pe({
						error: f.error,
						key: a,
						...f.body
					}))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/shortcuts/constants.ts");
			const o = Object(n.a)(r.a),
				i = Object(n.a)(r.b)
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/doubleclickForPublishers/index.ts"),
				m = s("./src/lib/intersectionObserver/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/helpers/trackers/ads.ts"),
				f = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(f),
				v = s("./src/lib/lessComponent.tsx");
			const y = v.a.div("Container", x.a),
				C = v.a.div("LoadingHitbox", x.a),
				k = e => setTimeout(() => {
					throw e
				}, 0);
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1, this.refreshedOnce = !1, this.refreshInterval = null
				}
				componentDidCatch(e) {
					k(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && l.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (r) {
						k(r)
					}
				}
				destroySlot() {
					try {
						this.refreshInterval && window.clearInterval(this.refreshInterval), this.frame && l.b(this.frame)
					} catch (e) {
						k(e)
					}
				}
				refreshPeriodically() {
					this.props.isRefreshableAd && null != this.props.incrementRefreshCounter && null != this.props.refreshCount && (this.props.refreshCount >= a.a.dfpRefreshSlotIntervalLimit ? (this.refreshInterval && window.clearInterval(this.refreshInterval), this.refreshInterval = null) : (this.refresh(this.props), this.props.incrementRefreshCounter()))
				}
				async componentDidMount() {
					this.props.sendEvent(Object(g.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						k(e)
					}
					this.loader && m.a(this.loader, e => {
						this.isWithinLoadingDistance = !0, this.refreshedOnce || (this.frame && l.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.refresh(this.props), this.refreshedOnce = !0), this.props.isRefreshableAd && (!this.refreshInterval && e.isIntersecting && null != this.props.refreshCount ? this.props.refreshCount < a.a.dfpRefreshSlotIntervalLimit && (this.refreshInterval = window.setInterval(this.refreshPeriodically.bind(this), a.a.dfpRefreshSlotInterval)) : this.refreshInterval && !e.isIntersecting && (window.clearInterval(this.refreshInterval), this.refreshInterval = null))
					})
				}
				componentWillUnmount() {
					this.loader && m.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && l.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3) return this.refresh(e), void(this.refreshedOnce = !0)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? r.a.createElement(y, {
						"data-slot": t
					}, r.a.createElement(C, {
						key: `${e}-loadinghitbox`,
						innerRef: e => {
							this.loader = e
						}
					}), r.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: `${e}-div`,
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : r.a.createElement("div", {
						className: s
					})
				}
			}
			O.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(o.b)(() => Object(i.c)({
				properties: Object(p.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = `${e.meta.protocol}://${e.meta.domain}`;
					return Object(u.b)(t.placement, e.user, Object(d.a)(`${n}${s.url}`, s.queryParams), Object(h.A)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? l.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(b.c)(O))
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
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				f = Object(i.b)(g),
				x = ({
					isCommentBoxDesignEnabled: e,
					isTopLevelComment: t,
					children: s
				}) => o.a.createElement("div", {
					className: Object(m.a)(u.a.spacer, {
						[u.a.isCommentBoxDesign]: e,
						[u.a.isTopLevelComment]: t
					})
				}, s),
				v = () => o.a.createElement("div", {
					className: Object(m.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				y = () => o.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				C = e => o.a.createElement(x, e, e.isCommentBoxDesignEnabled ? o.a.createElement(y, null) : o.a.createElement(v, null), o.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				k = f(C),
				O = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				w = e => o.a.createElement(O, h({}, e, {
					fallback: o.a.createElement(k, {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = a.a.div("Wrapper", u.a), g = a.a.span("Copy", u.a), f = a.a.wrapped(l.j, "SignupLink", u.a), x = a.a.wrapped(l.m, "LoginLink", u.a);
			t.a = Object(c.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: n,
				openRegisterModal: a,
				origin: c,
				sendEvent: l
			}) => r.a.createElement(b, {
				className: Object(o.a)(e, {
					[u.a.LiveStreamingWrapper]: t
				})
			}, r.a.createElement(g, {
				className: Object(o.a)({
					[u.a.LiveStreamingCopy]: t
				})
			}, h._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), r.a.createElement(x, {
				href: Object(d.a)(s, c, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), n(), l(Object(m.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Log In", null, {
				hk: "ZR3pC"
			})), r.a.createElement(f, {
				className: Object(o.a)({
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				x = s("./src/reddit/constants/headers.ts"),
				v = s("./src/reddit/models/Toast/index.ts");
			const y = (e, t) => async (s, r, {
				apiContext: o
			}) => {
				const i = await (async (e, t, s) => Object(g.a)(Object(f.a)(e, [x.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.cb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(o(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					s(Object(h.L)({
						[e]: {
							suggestedSort: t
						}
					}));
					const r = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(b.f({
						id: d,
						kind: v.b.SuccessCommunityGreen,
						text: r
					}))
				} else s(b.f({
					id: a,
					kind: v.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: y(e, t)
				}))
			};
			var C = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				k = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				O = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				w = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/controls/Dropdown/index.tsx"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = s("./src/reddit/helpers/path/index.ts"),
				A = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const L = (e, t, s, n, r) => o => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(A.listing)(o, void 0, {
						oldSort: s,
						sort: n,
						source: r
					}),
					userSubreddit: Object(A.userSubreddit)(o)
				}),
				N = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				T = e => ({
					subreddit: Object(A.subreddit)(e),
					userSubreddit: Object(A.userSubreddit)(e)
				}),
				_ = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...T
				});
			var R = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				M = s("./src/reddit/icons/svgs/Info/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/tooltip.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				K = s.n(H),
				q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const z = Object(w.a)(P.a),
				G = l.a.wrapped(R.b, "DropdownTriangle", K.a),
				Y = l.a.div("HighlightWrapper", K.a),
				J = l.a.div("Title", K.a),
				Q = e => e === q.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === q.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class X extends o.a.Component {
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
						selectedSort: r
					} = this.props;
					return o.a.createElement(Y, null, o.a.createElement(J, {
						onClick: s
					}, n.fbt._("highlight comments since", null, {
						hk: "3AxAbU"
					})), o.a.createElement(I.b, {
						className: Object(d.a)(K.a.HighlightPicker, K.a.Row),
						displayText: Q(r),
						id: t,
						onClick: s
					}), o.a.createElement(G, {
						onClick: s
					}), o.a.createElement(z, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, o.a.createElement(I.b, {
						displayText: Q(q.a.First),
						isSelected: r === q.a.First,
						onClick: this.onDropdownClickFirst
					}), o.a.createElement(I.b, {
						displayText: Q(q.a.Last),
						isSelected: r === q.a.Last,
						onClick: this.onDropdownClickLast
					}), o.a.createElement(I.b, {
						displayText: Q(q.a.None),
						isSelected: r === q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Z = X;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				se = Object(w.a)(P.a),
				ne = l.a.button("ContestMode", K.a),
				re = l.a.wrapped(R.b, "DropdownTriangle", K.a),
				oe = l.a.wrapped(M.a, "Info", K.a),
				ie = l.a.wrapped(I.b, "Row", K.a),
				ae = l.a.button("SetSort", K.a),
				de = l.a.button("SortLink", K.a),
				ce = l.a.div("Title", K.a),
				le = l.a.wrapped(j.a, "ToggleSwitch", K.a),
				me = l.a.wrapped(O.a, "ViewFullLinkOrOverlayLink", K.a),
				pe = l.a.wrapped(k.c, "Tooltip", K.a),
				ue = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(B.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(W.b)($),
					highlightIsOpen: Object(W.b)(ee),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(D.h)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					post: V.D,
					postPermalink: V.C,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(U.s)(e),
							n = !!Object(D.h)(e, {
								postId: t
							}),
							r = Object(V.D)(e, {
								postId: t
							});
						return (n || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
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
					onSetSuggestedSort: s => e(y(t, s)),
					hideTooltip: () => e(Object(m.i)()),
					setContestMode: s => e(Object(h.P)(s, t)),
					showTooltip: () => e(Object(m.h)({
						tooltipId: te
					})),
					toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
				}));
			class be extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(L(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(N("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(_(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						contestModeModalIsOpen: r,
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
						showCommentHighlighter: x,
						sort: v,
						suggestedSort: y,
						showTooltip: k,
						toggleContestModeModal: O
					} = this.props, w = b.contestMode, E = !h.search.includes(c.r.CONFIDENCE), P = v === c.r.CONFIDENCE && E, j = p && !P, A = c.t[v], L = A ? A() : "", T = y && v === y && !P ? this.addSuggestedLabel(L) : L, _ = w ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), R = w ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), M = w ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), F = w && !p;
					return o.a.createElement("div", {
						className: Object(d.a)(t, K.a.container, {
							[K.a.hideCommentSort]: !x && F
						}),
						ref: a
					}, !F && o.a.createElement(ce, {
						onClick: this.onOpenDropdownClick
					}, n.fbt._("Sort by", null, {
						hk: "E6T9r"
					})), !F && o.a.createElement(o.a.Fragment, null, o.a.createElement(ie, {
						className: Object(d.a)(K.a.SortPicker, K.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: T,
						id: $,
						noHover: !0,
						skipRoleAttr: !0
					}), o.a.createElement(re, {
						onClick: this.onOpenDropdownClick
					}), o.a.createElement(se, {
						isOpen: i,
						tooltipId: $
					}, [c.r.CONFIDENCE, c.r.TOP, c.r.NEW, c.r.CONTROVERSIAL, c.r.OLD, c.r.QA].map(e => {
						const t = s || g,
							n = Object(S.b)(t),
							r = c.t[e],
							i = r ? r() : "";
						return o.a.createElement(me, {
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, o.a.createElement(I.b, {
							displayText: i,
							isSelected: v === e,
							skipRoleAttr: !0
						}))
					}))), j && !F && (y ? o.a.createElement(de, {
						onClick: v !== y ? this.setSortOnClick : this.clearSortOnClick
					}, v !== y ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : o.a.createElement(ae, null, o.a.createElement(de, {
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), o.a.createElement("span", {
						id: te,
						onMouseEnter: k,
						onMouseLeave: l
					}, o.a.createElement(pe, {
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), o.a.createElement(oe, null)))), p && o.a.createElement(ne, {
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), o.a.createElement(le, {
						on: w
					})), x && o.a.createElement(Z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: N
					}), r && o.a.createElement(C.a, {
						actionText: R,
						headerText: _,
						modalText: M,
						onConfirm: this.setContestMode,
						toggleModal: O,
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
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk"
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
				iconWrapper: "jap7xdwXZKV3I9Oj8GdgQ",
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
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
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
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = d.a.div("MoreCommentsItemWrapper", u.a), g = d.a.p("MoreComments", u.a), f = d.a.wrapped(g, "MoreCommentsInteractive", u.a), x = Object(i.c)({
				moreCommentsItem: m.A,
				moreCommentsPending: m.B
			}), v = Object(o.b)(x, (e, t) => ({
				moreCommentsClicked: () => e(Object(c.j)(t.commentsPageKey, t.moreCommentsId))
			})), y = ({
				isActive: e,
				moreCommentsClicked: t,
				moreCommentsItem: s,
				moreCommentsPending: n,
				onMoreCommentsItemClick: o,
				count: i
			}) => r.a.createElement(b, null, n ? r.a.createElement(g, null, h._("loading...", null, {
				hk: "47z89"
			})) : r.a.createElement(l.a.Consumer, null, n => r.a.createElement(f, {
				className: Object(a.a)({
					[u.a.isActive]: e
				}),
				onClick: () => {
					i && o ? (o(), n("load_more_comment_live")()) : t && (t(), (null == s ? void 0 : s.isFromLiveWebSocket) ? n("load_more_comment_live")() : n("load_more_comment")())
				}
			}, h._({
				"*": "{number of more replies hidden} more replies",
				_1: "1 more reply"
			}, [h._plural(s ? s.numComments : i || 0, "number of more replies hidden")], {
				hk: "J0jQW"
			}))));
			t.b = v(y)
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment-index-tsx",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment-index-tsx").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
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
				return j
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return H
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/times.js"),
				o = s.n(r),
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
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				y = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				C = s("./src/reddit/components/Comments/States/index.m.less"),
				k = s.n(C);
			const O = l.a.wrapped(v.a, "CommentsIcon", k.a),
				w = l.a.wrapped(y.a, "SnooFacepalm", k.a),
				E = l.a.p("EmptyTitle", k.a),
				P = l.a.p("ErrorTitle", k.a),
				I = l.a.p("EmptyText", k.a),
				j = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(k.a.StateContainer, e)
				}, a.a.createElement(O, null), a.a.createElement(E, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(I, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				S = () => a.a.createElement("div", {
					className: k.a.StateContainer
				}, a.a.createElement(O, null), a.a.createElement(E, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(I, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				A = ({
					link: e
				}) => a.a.createElement("div", {
					className: k.a.StateContainer
				}, a.a.createElement(O, null), a.a.createElement(E, null, n.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(u.k, {
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
					className: k.a.StateContainer
				}, a.a.createElement(w, null), a.a.createElement(P, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(u.i, {
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
					className: Object(c.a)(k.a.StateContainer, k.a.ErrorFullPage)
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
				}, a.a.createElement(p.a, null)), "LoadingFullPage", k.a),
				_ = l.a.div("CommentsPlaceholderContainer", k.a),
				R = l.a.div("CommentPlaceholder", k.a),
				M = l.a.div("Avatar", k.a),
				F = l.a.div("VoteColumn", k.a),
				B = l.a.div("TextColumn", k.a),
				D = l.a.wrapped(x.b, "Upvote", k.a),
				V = l.a.wrapped(f.b, "Downvote", k.a),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(k.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = () => a.a.createElement("div", {
					className: Object(c.a)(k.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = e => a.a.createElement(_, null, o()(10, t => a.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(M, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(F, null, a.a.createElement(D, null), a.a.createElement(V, null)), a.a.createElement(B, null, a.a.createElement(W, null), a.a.createElement(U, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				redesign: "_3ic5Ze6xyK9NmcG7HpKTAZ",
				topLevel: "_3cea2-bu-AjagXhuQfp9Zu",
				hasGlowBorder: "_9UoUJEplv3y2cpdVestPb"
			}
		},
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			}));
			let n = {};

			function r(e) {
				return e in n
			}

			function o(e) {
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
			var n, r = s("./node_modules/lodash/isEqual.js"),
				o = s.n(r),
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
				x = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/components/LottieAnimation/index.tsx"),
				y = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				C = s.n(y);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const k = {
				threshold: [.75, .001]
			};
			var O = a.a.memo(e => {
				const t = Object(i.useRef)(null),
					[s, r] = Object(i.useState)(!1),
					o = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && r(!1), t <= .001 && r(!0)
						})
					}, []);
				Object(x.a)(t, o, k);
				const d = e.type;
				return a.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(l.a)(C.a.effectContainer, C.a[d + "EffectContainer"]),
					ref: t
				}, d === n.Lottie && a.a.createElement(v.a, {
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
								type: n.Lottie,
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
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(j).filter(e => e !== I)
				}(e) : [])
			}
			const I = {
				glowHexColor: null,
				effectHighlight: null
			};

			function j(e) {
				for (const t of w) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return I
			}
			var S, A, L = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				N = s("./src/reddit/selectors/comments.ts"),
				T = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/communityAwards.ts"),
				R = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				B = s("./node_modules/fbt/lib/FbtPublic.js"),
				D = s("./src/reddit/hooks/useTracking.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				W = s("./src/lib/makeDraftKey/index.ts"),
				U = s("./src/lib/objectSelector/index.ts"),
				H = s("./src/reddit/helpers/trackers/powerups.ts"),
				K = s("./src/reddit/actions/comment/authoring.ts"),
				q = s("./src/reddit/actions/comment/moderation.ts"),
				z = s("./src/reddit/actions/gold/powerups.ts"),
				G = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Y = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				J = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				Q = s.n(J),
				X = p.a.wrapped(e => a.a.createElement("button", e, a.a.createElement(Y.a, null)), "Component", Q.a),
				Z = s("./node_modules/lodash/defer.js"),
				$ = s.n(Z),
				ee = s("./src/reddit/actions/tooltip.ts"),
				te = s("./src/reddit/selectors/tooltip.ts"),
				se = s("./src/lib/makeCommentPermalink/index.ts"),
				ne = s("./src/reddit/actions/gold/modals.ts"),
				re = s("./src/reddit/actions/modal.ts"),
				oe = s("./src/reddit/actions/reportFlow/index.ts"),
				ie = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ae = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				de = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ce = s("./src/reddit/selectors/activeModalId.ts"),
				le = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				me = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				ue = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				he = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				be = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				ge = s.n(be);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(S || (S = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(A || (A = {}));
			const fe = (e, t) => {
					const s = ge.a[t],
						n = ge.a[e];
					return Object(l.a)(s, n)
				},
				xe = e => Object(l.a)(ge.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[ge.a.isInOverlay]: e.isInOverlay,
					[ge.a.isModModeEnabled]: e.isModModeEnabled
				});
			var ve = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				ye = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Ce = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ke = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Oe = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				we = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Ee = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Pe = s("./src/reddit/components/ReportFlow/index.tsx"),
				Ie = s("./src/reddit/components/ReportFlow/new.tsx"),
				je = s("./src/reddit/components/ShareMenu/index.tsx"),
				Se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Le = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Ne = s("./src/reddit/helpers/trackers/modTools.ts"),
				Te = s("./src/reddit/layout/row/Inline/index.tsx"),
				_e = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				Re = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Me = s("./src/reddit/icons/fonts/index.tsx"),
				Fe = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Be = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				De = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				We = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ue = s("./src/reddit/icons/fonts/Save/index.tsx"),
				He = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				Ke = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				qe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				ze = s.n(qe);
			const Ge = p.a.wrapped(Fe.a, "CommentIcon", ze.a),
				Ye = p.a.wrapped(We.a, "Report", ze.a),
				Je = p.a.wrapped(De.a, "IgnoreReport", ze.a),
				Qe = p.a.wrapped(Oe.a, "ModActionsMenu", ze.a),
				Xe = p.a.div("OverflowMenuSpacer", ze.a),
				Ze = p.a.wrapped(Ee.a, "DropdownRow", ze.a),
				$e = p.a.wrapped(Te.a, "Flatlist", ze.a),
				et = p.a.button("Button", ze.a),
				tt = p.a.wrapped(ve.a, "ModToolsFlatlist", ze.a),
				st = p.a.wrapped(Ae.a, "ViewReportsDropdown", ze.a),
				nt = e => `Comment-${e}--Modal--DeleteComment`,
				rt = e => `Distinguish--Dropdown--${e}`,
				ot = e => `${e}-overflow-menu`,
				it = e => `View--Reports--${e}`,
				at = Object(c.c)({
					claimedFreeAward: le.b,
					currentUser: F.j,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(ce.a)(e) === nt(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(te.b)(rt(t.id))(e),
					isInIcons2020: pe.a,
					isPendingDeletion: (e, {
						comment: t
					}) => Object(N.z)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(te.b)(it(t.id))(e),
					isLoggedIn: F.K,
					postIsArchived: (e, {
						comment: t
					}) => Object(M.x)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(M.y)(e, {
						postId: t.postId
					}),
					postPermalink: (e, {
						comment: t
					}) => Object(M.C)(e, {
						postId: t.postId
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, n;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(N.G)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(me.x)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(M.P)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: ue.a
				});
			class dt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(de.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Ne.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Ne.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Ne.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(ie.d)(ie.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Ne.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Ne.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Ne.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Ne.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(Ie.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Pe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : a.a.createElement(Pe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Pe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: n,
						depth: r,
						handleReply: o,
						isAvatarsInCommentsEnabled: d,
						isInIcons2020: c,
						isLoggedIn: m,
						isPendingDeletion: p,
						onDistinguishComment: u,
						onIgnoreReports: h,
						onToggleReportsDropdown: b,
						moderatorPermissions: g,
						modModeEnabled: f,
						postIsArchived: x,
						postIsLocked: v,
						postPermalink: y,
						renderedInOverlay: C,
						sendEvent: k,
						subreddit: O,
						subredditAboutInfo: w,
						toggleDeleteCommentModal: E,
						toggleSendReplies: P,
						trackCommentClick: I
					} = this.props, j = Object(ae.a)(g), L = !!s && s.displayText === e.author, N = !!s && s.isEmployee, T = !(w && w.userIsBanned) && (v || x || j && m || e.isLocked ? j && m : m || d), _ = Object(we.a)(e), R = j && !f && L && !e.bannedBy, M = L && N && !e.bannedBy, F = R || M, D = s && e.isGildable, V = [];
					T && V.push(a.a.createElement(et, {
						disabled: p,
						key: "reply",
						onClick: () => {
							o(), $()(() => I("reply", e.id)())
						}
					}, a.a.createElement(Ge, null), B.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), D && V.push({
						breakpointGroup: A.LoggedInUser,
						icon: a.a.createElement(_e.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => B.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), V.push(a.a.createElement(je.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: Object(se.a)(y, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: O
					}, a.a.createElement(et, {
						onClick: () => this.sendCommentEventWithName("share")
					}, B.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), L || V.push({
						breakpointGroup: A.LoggedInUser,
						icon: a.a.createElement(We.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => B.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), V.push({
						breakpointGroup: A.LoggedInUser,
						icon: e.isSaved ? a.a.createElement(Re.f, null) : a.a.createElement(Ue.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => B.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => B.fbt._("Save", null, {
							hk: "4lbZXG"
						})
					}), L && V.push({
						breakpointGroup: A.LoggedInUser,
						icon: c ? a.a.createElement(Me.a, {
							name: "edit"
						}) : a.a.createElement(He.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => B.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					});
					const W = V.map(e => a.a.isValidElement(e) ? e : a.a.createElement(et, {
							className: fe(e.breakpointGroup, S.HideIfVWSmaller),
							disabled: p,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						U = V.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Ze, {
							className: fe(e.breakpointGroup, S.HideIfVWLarger),
							displayText: e.text(),
							iconWrapperClassName: ze.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: ze.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement($e, {
						className: Object(l.a)(xe({
							depth: r,
							isInOverlay: C,
							isModModeEnabled: j && f
						}), t)
					}, W, a.a.createElement(Xe, {
						className: L ? void 0 : fe(A.LoggedInUser, S.HideIfVWLarger)
					}, a.a.createElement(Ee.b, {
						className: ze.a.overflowMenu,
						disabled: p,
						dropdownId: ot(e.id),
						onClick: () => k(Object(Ne.a)("comment_overflow_menu", e.id))
					}, U, L && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ze, {
						displayText: B.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						iconWrapperClassName: ze.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: ze.a.dropdownRowText
					}, c ? a.a.createElement(Me.a, {
						name: "delete"
					}) : a.a.createElement(Ke.b, null)), a.a.createElement(Le.a, {
						text: B.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: P,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(Ce.a, {
						actionText: B.fbt._("delete", null, {
							hk: "1XDeYp"
						}),
						cancelActionText: B.fbt._("keep", null, {
							hk: "bO09f"
						}),
						headerText: B.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: B.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: n,
						toggleModal: E,
						trackClick: () => {},
						withOverlay: !0
					}), j && a.a.createElement(a.a.Fragment, null, f && a.a.createElement(tt, {
						className: fe(A.Moderator, S.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: L
					}), a.a.createElement(Qe, {
						className: f ? fe(A.Moderator, S.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => k(Object(Ne.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(Ve.a, null), a.a.createElement(he.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(we.c)(e) && !f && a.a.createElement(ye.a, {
						text: `${_}`,
						onClick: () => {
							b(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: it(e.id)
					}, a.a.createElement(st, {
						model: e,
						onIgnoreReports: () => {
							h(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: it(e.id)
					}), e.ignoreReports ? a.a.createElement(Je, null) : a.a.createElement(Ye, null)), F && a.a.createElement(ye.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(Be.a, null), a.a.createElement(ke.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: N,
						isUserMod: j,
						onDistinguishComment: u,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: rt(e.id)
					}))), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var ct = Object(d.b)(at, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(K.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(re.i)(nt(t.id))), e(Object(ee.h)({
							tooltipId: ot(t.id)
						}))
					},
					handleEdit: () => {
						const n = t.media && t.media.rteMode;
						s && e(Object(K.d)({
							commentId: t.id,
							draftKey: Object(W.a)(V.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(K.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onDistinguishComment: (s, n) => e(Object(q.b)(t.id, s, n)),
					onGildClick: (s, n) => e(Object(ne.d)({
						awardId: n,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(q.g)(t.id)),
					onReportClick: () => e(Object(oe.c)(t.id)),
					onToggleSave: () => e(Object(u.k)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(ee.h)({
						tooltipId: rt(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(ee.h)({
						tooltipId: it(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(re.i)(nt(t.id))),
					toggleSendReplies: () => e(Object(K.k)(t.id))
				}))(Object(Se.c)(dt)),
				lt = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				mt = s.n(lt);
			var pt = a.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return a.a.createElement("div", {
						"aria-role": "presentation",
						className: mt.a.glowHighlightContainer,
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				ut = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				ht = s.n(ut);
			var bt = a.a.memo(e => a.a.createElement("div", {
					"aria-role": "presentation",
					className: ht.a.gradientHighlightContainer
				})),
				gt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ft = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				xt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				vt = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				yt = s("./src/reddit/components/ModModeReports/index.tsx"),
				Ct = s("./src/reddit/components/PostTopMeta/index.tsx"),
				kt = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ot = s("./src/reddit/components/UserIcon/index.tsx"),
				wt = s("./src/reddit/components/VerticalVotes/index.tsx"),
				Et = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Pt = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				It = s("./src/reddit/constants/componentTestIds.ts"),
				jt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				St = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				At = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Lt = s("./node_modules/raf/index.js"),
				Nt = s.n(Lt);

			function Tt() {
				return (Tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _t = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Rt = a.a.createContext(!1);
			class Mt extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Nt()(this.setVisible)
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
					} = this.state, n = {
						..._t,
						...t
					};
					return a.a.createElement(At.a, Tt({}, n, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Rt.Provider, {
						value: s
					}, e)))
				}
			}
			var Ft = s("./src/reddit/controls/ErrorText/index.tsx"),
				Bt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Dt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Vt = s("./src/reddit/models/Subreddit/index.ts"),
				Wt = s("./src/reddit/models/Vote/index.ts"),
				Ut = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Ht = s("./src/reddit/selectors/gold/powerups.ts"),
				Kt = s("./src/reddit/selectors/poll/index.ts"),
				qt = s("./src/reddit/selectors/userPrefs.ts"),
				zt = s("./src/reddit/selectors/moderatingComments.ts"),
				Gt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Yt = s.n(Gt),
				Jt = s("./src/config.ts");

			function Qt() {
				return (Qt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Xt = p.a.wrapped(X, "ExpandButton", Yt.a),
				Zt = p.a.wrapped(ct, "FlatList", Yt.a),
				$t = p.a.wrapped(Ft.b, "ErrorText", Yt.a),
				es = p.a.wrapped(wt.a, "VerticalVotes", Yt.a),
				ts = p.a.wrapped(xt.a, "HorizontalVotes", Yt.a),
				ss = p.a.div("ActionBar", Yt.a),
				ns = p.a.wrapped(gt.a, "TopMeta", Yt.a),
				rs = p.a.div("CommentContentWrapper", Yt.a),
				os = p.a.div("CommentWrapper", Yt.a),
				is = p.a.div("CommentBody", Yt.a),
				as = p.a.wrapped(vt.b, "AuthorHovercard", Yt.a),
				ds = Object(jt.t)(),
				cs = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(T.a)(e, t),
					currentProfileModPermissions: jt.g,
					depth: (e, t) => Object(N.j)(e, t),
					collapsed: zt.b,
					collapsedBecauseCrowdControl: zt.a,
					flair: N.e,
					focused: N.t,
					highlightAnimationDisabled: qt.c,
					isEditing: N.y,
					isLoggedIn: F.K,
					isPendingDeletion: N.z,
					moderatorPermissions: (e, t) => {
						const s = Object(T.a)(e, t);
						return s ? Object(R.i)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Kt.f,
					isTopSupporter: (e, t) => {
						const s = Object(T.a)(e, t);
						if (!s) return !1;
						const n = Object(jt.q)(e, t);
						return !!n && Object(Ht.a)(e, {
							subredditId: n.id,
							userId: s.authorId
						})
					},
					modModeEnabled: jt.Q,
					errorMsgs: N.E,
					replyFormOpen: N.H,
					subreddit: jt.q,
					subredditType: N.J
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: n,
					trackCommentClick: r
				}) => ({
					onCollapseClick: () => e(Object(u.l)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: n
					})),
					onIgnoreReports: () => e(Object(q.g)(t)),
					onOpenPowerupsModal: () => e(Object(z.b)()),
					onVoteClick: s => {
						const [n, o] = s === Wt.a.upvoted ? [Object(u.n)(t), "upvote_comment"] : [Object(u.i)(t), "downvote_comment"];
						r(o, t)(), e(n)
					}
				})),
				ls = Object(U.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				ms = ds(cs(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: r,
						collapsed: o,
						collapsedBecauseCrowdControl: d,
						currentProfileModPermissions: c,
						depth: m,
						errorMsgs: p,
						flair: u,
						focused: h,
						hasAwardGradient: b,
						highlightAnimationDisabled: g,
						highlightTreatment: f,
						isActive: x,
						isAvatarsInCommentsEnabled: v,
						isEditing: y,
						isFirstInList: C,
						isHighlighted: k,
						isLoggedIn: w,
						isPendingDeletion: E,
						isTopSupporter: P,
						moderatorPermissions: I,
						modModeEnabled: j,
						onCollapseClick: S,
						onIgnoreReports: A,
						onLineMouseOver: L,
						onVoteClick: N,
						onOpenPowerupsModal: T,
						prediction: _,
						replyFormOpen: R,
						subreddit: M,
						trackCommentClick: F,
						renderedInOverlay: U,
						subredditType: q
					} = e, z = Object(D.a)(), Y = n.isDeleted, J = !y && !Y && !!p && p.length > 0, Q = Object(W.a)(V.c.edit, n.id), X = Object(W.a)(V.c.replyToComment, n.id), Z = Object(ae.a)(I), $ = n.authorIsContractor && q === Vt.e.EmployeesOnly, ee = n.isLocked, te = Z && j, se = !y && !Y && (w || v), [ne, re] = Object(i.useState)(null), [oe, ie] = Object(i.useState)(null);
					Object(i.useEffect)(() => {
						if (!y && !Y && (b && re(a.a.createElement(bt, null)), null !== f)) {
							if (f.glowHexColor) {
								const e = f.glowHexColor;
								re(a.a.createElement(pt, {
									hexColor: e
								}))
							}
							if (f.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = f.effectHighlight;
								ie(a.a.createElement(O, {
									prefersReducedAnimation: g,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [y, Y, b, g, f]);
					const de = Object(i.useContext)(Rt),
						ce = Object(Et.a)(n);
					return a.a.createElement(os, {
						className: Object(l.a)(`Comment ${n.id}`, Yt.a.CommentWrapper, {
							[Yt.a.highlightComment]: k,
							[Yt.a.deleted]: Y,
							[Yt.a.focused]: h,
							[Yt.a.redesign]: v,
							[Yt.a.topLevel]: !m
						})
					}, ne, oe, !y && !Y && C && a.a.createElement("div", {
						className: Yt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${Jt.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), o && a.a.createElement(Xt, {
						className: n.id,
						onClick: () => {
							s(), S(), F("collapse", n.id)()
						},
						onMouseOver: () => L(n.id),
						onMouseOut: s
					}), !o && (v ? a.a.createElement(as, {
						alwaysShowChildren: !0,
						hoverDivClassName: Yt.a.AuthorHoverDiv,
						postOrComment: n,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: U ? Ct.c.Lightbox : void 0
					}, a.a.createElement(Bt.a, {
						className: Yt.a.UserIconContainer,
						to: `/user/${n.author}/`
					}, de ? a.a.createElement(Ot.a, {
						className: Yt.a.UserIcon,
						iconUrl: n.profileImage,
						isNSFW: n.profileOver18 || !1,
						nsfwIconUrl: "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png",
						userName: n.author
					}) : a.a.createElement("div", {
						className: Yt.a.UserIcon
					}), P && a.a.createElement(Pt.a, {
						onClick: e => {
							z(Object(H.k)("comment")), T(), e.stopPropagation(), e.preventDefault()
						},
						className: Yt.a.topSupporterIcon,
						title: B.fbt._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						})
					}))) : Y ? null : a.a.createElement(es, {
						compact: !0,
						downvoteButtonClassName: Yt.a.voteButton,
						downvoteClassName: Yt.a.upDownVote,
						model: n,
						onVoteClick: N,
						upvoteButtonClassName: Yt.a.voteButton,
						upvoteClassName: Yt.a.upDownVote
					})), a.a.createElement(rs, {
						className: Object(l.a)({
							[Yt.a.isActive]: x,
							[Yt.a.isCollapsed]: o,
							[Yt.a.isLocked]: ee && te,
							[Yt.a.isPendingDeletion]: E,
							[Yt.a.isRemoved]: !!n.bannedBy && te
						})
					}, a.a.createElement(Dt.a, null, B.fbt._("level {depth}", [B.fbt._param("depth", m + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(ns, {
						childrenInfo: t,
						className: Object(l.a)({
							[Yt.a.collapsed]: o
						}),
						collapsed: o,
						collapsedBecauseCrowdControl: d,
						comment: n,
						commentsPageKey: r,
						flair: u,
						isAvatarsInCommentsEnabled: v,
						renderedInOverlay: U,
						renderContractorBadge: $,
						renderTopSupporterBadge: (!v || o) && P
					}), !o && a.a.createElement(i.Fragment, null, y && a.a.createElement(G.a, {
						className: Object(l.a)(Yt.a.EditCommentForm, Yt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: r,
						depth: m,
						draftType: V.c.edit,
						draftKey: Q,
						rtJson: Object(Et.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(K.i)({
							id: n.id,
							commentsPageKey: r,
							depth: m,
							draftKey: Q,
							formData: e
						}),
						submitButtonText: B.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !y && !Y && a.a.createElement(is, {
						"data-test-id": It.d
					}, _ ? a.a.createElement(ft.a, {
						comment: n,
						prediction: _
					}) : a.a.createElement(kt.a, {
						content: ce,
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: ls(e)
					}), a.a.createElement(Ut.b, {
						content: ce
					})), j && Z && Object(we.c)(n) && a.a.createElement(yt.a, {
						onIgnoreReports: A,
						reportable: n
					}), se && a.a.createElement(ss, null, v && a.a.createElement(ts, {
						downvoteButtonClassName: Yt.a.voteButton,
						downvoteClassName: Yt.a.upDownVote,
						model: n,
						onVoteClick: N,
						scoreClassName: Yt.a.score,
						upvoteButtonClassName: Yt.a.voteButton,
						upvoteClassName: Yt.a.upDownVote
					}), a.a.createElement(Zt, {
						comment: n,
						commentsPageKey: r,
						depth: m,
						isAvatarsInCommentsEnabled: v,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: j,
						moderatorPermissions: c || I,
						renderedInOverlay: U,
						subreddit: M,
						trackCommentClick: F
					})), J && p.map(e => a.a.createElement($t, {
						key: e
					}, e)), R && a.a.createElement(G.a, {
						className: Object(l.a)(Yt.a.EditCommentForm, Yt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: r,
						depth: m,
						draftType: V.c.replyToComment,
						draftKey: X,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(K.r)({
							commentsPageKey: r,
							draftKey: X,
							parentCommentDepth: m,
							parentCommentId: n.id,
							formData: t,
							editorMode: s
						}) : Object(K.l)({
							commentsPageKey: r,
							draftKey: X,
							parentCommentDepth: m,
							parentCommentId: n.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: B.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var ps = e => a.a.createElement(St.a.Consumer, null, t => a.a.createElement(ms, Qt({}, e, {
					trackCommentClick: t
				}))),
				us = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				hs = s("./src/reddit/contexts/InsideOverlay.tsx"),
				bs = s("./src/reddit/helpers/path/index.ts"),
				gs = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				fs = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				xs = s.n(fs);
			const {
				fbt: vs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ys = p.a.div("Wrapper", xs.a), Cs = p.a.wrapped(gs.a, "ArrowRight", xs.a), ks = p.a.wrapped(us.a, "LinkOrOverlayLink", xs.a), Os = p.a.span("HoverSpan", xs.a), ws = Object(c.c)({
				permalink: (e, t) => Object(N.m)(e, {
					commentId: Object(N.r)(e, t).parentId
				})
			});
			var Es = Object(d.b)(ws)(Object(hs.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement(ys, {
					className: Object(l.a)({
						[xs.a.isActive]: e
					})
				}, a.a.createElement(ks, {
					isOverlay: !!t,
					to: Object(bs.b)(s)
				}, a.a.createElement(Os, null, vs._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(Cs, null))))),
				Ps = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				Is = s("./node_modules/lodash/times.js"),
				js = s.n(Is),
				Ss = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				As = s.n(Ss);
			const Ls = p.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: g.m
				})), "Line", As.a),
				Ns = p.a.div("LineContainer", As.a),
				Ts = p.a.div("ShortLineContainer", As.a);
			var _s = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						isAvatarsInCommentsEnabled: r,
						onLineClick: o,
						onLineMouseOver: i,
						onLineMouseOut: d,
						onShortLineClick: c,
						parentNodeIds: m,
						type: p
					} = e;
					return a.a.createElement(Ns, null, js()(s + 1, e => e === s ? p !== h.a.Comment || t ? null : a.a.createElement(Ts, {
						key: m[e]
					}, a.a.createElement(Ls, {
						className: Object(l.a)(m[e], {
							[As.a.hasGlowBorder]: !!n,
							[As.a.topLevel]: 0 === s,
							[As.a.redesign]: r
						}),
						onClick: c,
						onMouseOver: () => i(m[e]),
						onMouseOut: () => d(m[e])
					})) : a.a.createElement(Ls, {
						className: m[e],
						key: m[e],
						onClick: o(e),
						onMouseOver: () => i(m[e]),
						onMouseOut: () => d(m[e])
					})))
				},
				Rs = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Ms = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				Fs = s.n(Ms);
			const Bs = p.a.div("CommentListNodeWrapper", Fs.a),
				Ds = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(g.f)
				},
				Vs = () => {
					const e = document.querySelectorAll(`.${g.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(g.f)
				};
			var Ws = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(zt.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(N.l)(e, t),
				depth: (e, t) => Object(N.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const n = Object(N.l)(e, {
						commentLink: t
					});
					if (n && t.type === h.a.Comment) {
						s = P(n.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: Rs.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(N.l)(e, {
						commentLink: t
					});
					return !(t.type !== h.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(_.a)(e, t);
						return s && s.coinPrice >= f.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(N.p)(e);
					if (s === L.a.None) return !1;
					if (t.type !== h.a.Comment) return !1;
					const n = t.id,
						r = Object(T.a)(e, {
							commentId: n
						});
					if (!r) return !1;
					const o = Object(F.s)(e),
						i = !!Object(R.h)(e, {
							postId: r.postId
						}),
						a = Object(M.D)(e, {
							postId: r.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === L.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || o) && r.created > d
				}
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: n
			}) => ({
				onLineClick: r => () => {
					e(Object(u.c)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: r,
						scrollToAndRemeasure: n
					}))
				},
				onShortLineClick: () => e(Object(u.l)({
					commentId: t.id,
					commentsPageKey: s,
					scrollToAndRemeasure: n
				}))
			}))(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: r,
					commentsPageKey: o,
					depth: i,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isAwarded: p,
					isFirstInList: u,
					isHidden: g,
					isHighlighted: f,
					onLineClick: x,
					onShortLineClick: v,
					parentNodeIds: y,
					renderedInOverlay: C,
					scrollToAndRemeasure: k
				} = e, O = !!p, w = !(!d || !d.glowHexColor), E = w && i > 0, P = w, I = a.a.createElement(Bs, {
					className: Object(l.a)(s, {
						[Fs.a.isHidden]: g,
						[Fs.a.glowBorderTopPadding]: E,
						[Fs.a.glowBorderBottomPadding]: P
					}),
					id: r.id,
					style: {
						paddingLeft: i * (b.w + b.v) + (r.type === h.a.Comment ? b.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(_s, {
					collapsed: n,
					depth: i,
					hasGlowBorder: E,
					isAvatarsInCommentsEnabled: m,
					onLineClick: x,
					onLineMouseOver: Ds,
					onLineMouseOut: Vs,
					onShortLineClick: v,
					type: r.type,
					parentNodeIds: y
				}), Us({
					childrenInfo: t,
					clearHovered: Vs,
					commentLink: r,
					commentsPageKey: o,
					onLineMouseOver: Ds,
					hasAwardGradient: O,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: u,
					isHighlighted: f,
					renderedInOverlay: C,
					scrollToAndRemeasure: k
				}));
				return m && r.type === h.a.Comment ? a.a.createElement(Mt, null, I) : I
			});
			const Us = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: n,
				hasAwardGradient: r,
				highlightTreatment: o,
				isActive: i,
				isAvatarsInCommentsEnabled: d,
				isFirstInList: c,
				isHighlighted: l,
				onLineMouseOver: m,
				renderedInOverlay: p,
				scrollToAndRemeasure: u
			}) => {
				switch (s.type) {
					case h.a.Comment:
						return a.a.createElement(ps, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: n,
							hasAwardGradient: r,
							highlightTreatment: o,
							isActive: i,
							isAvatarsInCommentsEnabled: d,
							isFirstInList: c,
							isHighlighted: l,
							onLineMouseOver: m,
							renderedInOverlay: p,
							scrollToAndRemeasure: u
						});
					case h.a.MoreComments:
						return a.a.createElement(Ps.b, {
							commentsPageKey: n,
							isActive: i,
							moreCommentsId: s.id
						});
					case h.a.ContinueThread:
						return a.a.createElement(Es, {
							id: s.id,
							isActive: i
						})
				}
			};
			var Hs = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Ks = s("./src/reddit/components/Comments/States/index.tsx"),
				qs = s("./src/reddit/components/Scroller/Simple.tsx"),
				zs = s("./src/reddit/constants/elementIds.ts"),
				Gs = s("./src/reddit/featureFlags/index.ts"),
				Ys = s("./src/reddit/helpers/commentList/index.ts"),
				Js = s("./src/reddit/selectors/realtimeComments.ts"),
				Qs = s("./src/telemetry/index.ts"),
				Xs = s("./src/lib/LRUCache/index.ts"),
				Zs = s("./src/reddit/actions/comment/websocket/index.ts"),
				$s = s("./src/reddit/components/Comments/index.m.less"),
				en = s.n($s);
			const tn = b.f + 10,
				sn = 65,
				nn = p.a.wrapped(qs.b, "Scroller", en.a),
				rn = Object(c.c)({
					allCollapsed: N.a,
					commentLinks: N.k,
					commentThreadLinkSet: N.o,
					isRealtimeCommentsExperimentEnabled: Js.a,
					liveCommentsWebsocket: M.B,
					measureScrollFPS: Gs.d.measureScrollFPS,
					moreComments: N.b,
					postPermalink: M.C
				}),
				on = Object(d.b)(rn, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(u.d)(t)),
					onCommentLeftViewport: (t, s) => e(Object(u.g)(t, s)),
					onLiveCommentsEnd: (t, s) => e(Object(Zs.b)(t, s)),
					onLiveCommentsSubscribe: (s, n, r) => e(Object(Zs.a)(s, n, r, t.subredditId))
				})),
				an = new Xs.a(500),
				dn = new Xs.a(500),
				cn = (e, t) => {
					const s = `entered-${e}`;
					let n = an.get(s);
					return void 0 === n && (n = () => {
						t.onCommentEnteredViewport(e)
					}, an.set(s, n)), n
				},
				ln = (e, t) => {
					const s = `left-${e}`;
					let n = dn.get(s);
					return void 0 === n && (n = s => {
						t.onCommentLeftViewport(e, s)
					}, dn.set(s, n)), n
				};
			class mn extends a.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							r = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === r) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const o = t[r - 1],
							i = this.parentNodeIdsMap[o.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.parentNodeIdsMap = {}, Hs.c(), this.childrenInfoMap = {}
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						commentLinks: t,
						commentsPageKey: s,
						allCollapsed: n,
						commentThreadLinkSet: r,
						isRealtimeCommentsExperimentEnabled: o,
						liveCommentsWebsocket: i,
						moreComments: a,
						onLiveCommentsSubscribe: d,
						postId: c
					} = this.props;
					this.timerId && Qs.c.cancel(this.timerId), t.length && (this.timerId = Qs.c.start()), o && i && d && !e && (d(s, i, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = i), this.findHiddenNodes(t, n, r, a)
				}
				componentDidMount() {
					this.timerId && Object(Qs.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Qs.c.end(this.timerId)
					})
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: r,
						moreComments: i
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !o()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, r, i)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !o()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && Qs.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Qs.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Qs.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Qs.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					const {
						commentId: e,
						isRealtimeCommentsExperimentEnabled: t,
						onLiveCommentsEnd: s
					} = this.props;
					this.timerId && Qs.c.cancel(this.timerId), t && this._subscribedPostId && this._subscribedLiveCommentsWebsocket && s && !e && s(this._subscribedLiveCommentsWebsocket, this._subscribedPostId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let r = null,
						o = 1 / 0,
						i = 0,
						a = !1;
					Hs.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						r && (s[c.id].depth > o ? (Hs.a(c.id), i += Object(Ys.d)(c, n), c.type === h.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[r] = {
							numChildren: i,
							hasContinueThread: a
						}, r = null, o = 1 / 0, i = 0, a = !1)), !r && t[c.id] && (r = c.id, o = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: r,
						renderedInOverlay: o
					} = this.props, i = cn(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: r
					}), d = ln(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: r
					});
					return {
						estHeight: Hs.b(e.id) ? 0 : sn,
						id: e.id,
						trackOnEnteredViewport: i,
						trackOnExitedViewport: d,
						render: ({
							placeholderRecommended: n,
							height: r,
							width: i,
							scrollToAndRemeasure: d
						}) => n ? a.a.createElement("div", {
							style: {
								height: r,
								backgroundColor: "#fff"
							}
						}) : a.a.createElement(Ws, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: Hs.b(e.id),
							scrollToAndRemeasure: d,
							renderedInOverlay: !!o,
							parentNodeIds: this.getParentNodeIds(e)
						})
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						renderedInOverlay: r
					} = this.props;
					let o;
					if (n) {
						o = `comments-${r?"lightbox":"page"}`
					}
					const i = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(nn, {
						className: Object(l.a)(en.a.Scroller, e),
						disableScrollCache: r,
						key: s,
						getContainer: () => r ? document.getElementById(zs.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: tn,
						trackingName: o
					}, i)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(Ks.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(Ks.c, null)
				}
			}
			t.a = on(mn)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
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
			t.a = r
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
				r = s.n(n),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				p = i.a.div("Byline", c.a),
				u = Object(o.a)({
					ErrorComponent: () => r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(p, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(p, null))
				});
			t.a = e => r.a.createElement(u, e)
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
				r = s("./node_modules/lodash/isEqual.js"),
				o = s.n(r),
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
				x = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				k = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				O = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				w = s("./src/reddit/featureFlags/component.tsx"),
				E = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				P = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/selectors/experiments/postSeo.ts"),
				j = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				N = s.n(L);
			const T = Object(w.a)("spPoints", h.a),
				_ = Object(w.a)("spLeaderboard", b.a),
				R = Object(n.a)({
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
				M = Object(c.c)({
					isLoggedIn: A.K,
					postSEOV2IdCardVariant: I.i,
					shouldShowReredditPromo: j.a,
					widgets: Object(p.a)(S.s)
				}),
				F = Object(d.b)(M);
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
					return this.props.subredditName !== e.subredditName || !o()(this.props.widgets, e.widgets) || this.props.post.id !== e.post.id
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: n,
						post: r,
						isFakeOverlay: o,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(I.d)(i) && !Object(I.g)(i);
					return a.a.createElement(y.a, {
						adComponentOnFakeOverlay: o,
						adComponent: d ? a.a.createElement(x.a, {
							postId: r.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: E.a.BOTTOM,
							refreshKey: r.id,
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
						isOverlay: n,
						post: r,
						postSEOV2IdCardVariant: o,
						shouldShowReredditPromo: i,
						subredditId: d,
						subredditName: c,
						widgets: p
					} = this.props;
					let h = 0;
					const b = Object(I.d)(o) || Object(I.g)(o),
						y = a.a.createElement(x.a, {
							postId: r.id,
							isOverlay: n,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: E.a.FIRST,
							refreshKey: r.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(N.a.outerWrapper, e)
					}, Object(P.o)(r) ? a.a.createElement(R, {
						profileName: c,
						isOverlay: n || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: c,
						postId: r.id,
						rememberPosition: r.numComments > 0,
						isMinimal: b
					}), a.a.createElement(u.a, {
						cardClassName: N.a.card,
						subredditId: d
					}), a.a.createElement(T, {
						className: N.a.card,
						subredditId: d,
						uniqueId: r.id
					}), a.a.createElement(_, {
						className: N.a.card,
						subredditId: d,
						uniqueId: r.id
					}), a.a.createElement(f.a, {
						subredditId: d
					}), y, s && p.map((e, t) => a.a.createElement(v.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(O.a, {
						subredditName: c,
						widget: e
					}))), r.isSponsored && a.a.createElement(v.a, null, a.a.createElement(C.a, null)), i && a.a.createElement(k.a, {
						directoryTimestamp: r.created,
						postId: r.id
					}), this.renderFooter(h++))
				}
			}
			t.a = F(B)
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = "500px", y = 3, C = Object(i.c)({
				hasDismissedTruncation: u.b,
				isGQLLoggedIn: b.J,
				isLoggedIn: b.K,
				isPostSEOEligible: h.e,
				postSEOV2TruncatedVariant: h.j
			}), k = Object(o.b)(C);
			class O extends r.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						hasDismissedTruncation: o,
						innerRef: i,
						isCommentsListTruncated: d,
						isGQLLoggedIn: u,
						isLoggedIn: h,
						isOverlay: b,
						numberOfComments: g,
						onClick: C,
						subredditOrProfile: k
					} = this.props, O = !(!k || Object(m.g)(k)), w = d && O && (g >= y && !b || !o) && (!u && !h), E = w && !e, P = w ? f.a.TruncatedComments : "";
					return r.a.createElement("div", {
						onClick: C,
						ref: i
					}, r.a.createElement("div", {
						className: Object(a.a)(f.a.ContentWrapper, s, P),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: w ? v : "unset"
						}
					}, t), E && r.a.createElement(l.i, {
						className: f.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, x._("View Entire Discussion ({number of comments} Comments)", [x._param("number of comments", Object(c.b)(g))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(d.a)(k(O))
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsSubredditPremiumSidebarCards").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", o)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/config.ts"),
				d = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = s.n(d),
				l = s("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				p = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				u = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				h = .5;
			class b extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < h || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								s = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, s), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: s
					} = this.state, o = s ? i.a.createElement(p, {
						src: a.a.assetPath + t
					}) : i.a.createElement(r.a, {
						onChange: this.handleVisibilityChange,
						threshold: h
					}, i.a.createElement(p, {
						src: a.a.assetPath + t
					}));
					return i.a.createElement(m, {
						bannerRef: this.bannerRef,
						className: u,
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, i.a.createElement("a", {
						href: a.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o))
				}
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => r.a.createElement("div", {
				className: Object(o.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-CommunityCard").then(s.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Leaderboard").then(s.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				p = s("./src/reddit/models/Theme/index.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = s("./src/reddit/components/HeaderImage/index.m.less"),
				b = s.n(h);
			const g = d.a.wrapped(m.a, "Planet", b.a),
				f = d.a.div("SubredditIcon", b.a),
				x = d.a.div("PositionedImage", b.a),
				v = d.a.div("HeaderContent", b.a),
				y = d.a.div("HeaderContainer", b.a),
				C = d.a.span("HeaderText", b.a),
				k = d.a.wrapped(o.a, "HeaderUrl", b.a),
				O = d.a.span("Container", b.a),
				w = Object(a.a)(e => {
					const t = Object(p.e)(e.headerText, e.prefixedHeaderText, Object(u.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(u.a)(e).banner.positionedImageAlignment,
						o = Object(u.a)(e).banner.positionedImage,
						a = Object(u.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (n) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const m = !!o && !!a && "left" === n,
						h = Object(p.g)(Object(u.a)(e).banner.backgroundColor, Object(u.a)(e).banner.backgroundImage, Object(u.a)(e).banner.backgroundImagePosition),
						w = parseInt(Object(u.a)(e).banner.iconDimensions.customSize, 10),
						E = `${4+w}px`;
					return r.a.createElement(O, {
						style: {
							background: h,
							backgroundPosition: "center top",
							height: `${Object(u.a)(e).banner.height}px`
						}
					}, r.a.createElement(k, {
						className: e.className,
						to: e.url
					}, r.a.createElement(y, {
						className: Object(i.a)({
							[b.a.fullScreenDisabled]: !e.disableFullscreen,
							[b.a.useOverlay]: !!Object(u.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(v, {
						className: Object(i.a)({
							[b.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(u.a)(e).banner.showCommunityIcon && (s ? r.a.createElement(f, {
						style: {
							backgroundImage: `url(${s})`,
							borderRadius: `${Object(u.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					}) : r.a.createElement(g, {
						style: {
							padding: `${Object(u.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(u.a)(e).banner.iconDimensions.borderRadius}px`,
							height: E,
							width: E
						}
					})), r.a.createElement(C, {
						style: {
							paddingTop: 32 === w ? "4px" : "14px"
						}
					}, t)), r.a.createElement(x, {
						className: Object(i.a)(b.a.PositionedImage, {
							[b.a.positionedImage]: !!o,
							[b.a.hoverPositionedImage]: !!o && !!a
						}),
						style: {
							...d,
							height: `${Object(u.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = w
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
				r = s("./src/reddit/layout/row/Inline/index.tsx"),
				o = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(o);
			const a = n.a.wrapped(r.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: r,
						tooltipType: o
					} = e;
					let i = r;
					return s && (i = `${i}--${s}`), o && (i = `${i}--${o}`), t && (i = `${i}--${t}`), n && (i = `${i}--${n}`), i
				}
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: i,
					title: d
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, r.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? r.a.createElement(c, null, n) : r.a.createElement(c, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: a.a.title
				}, d), i && r.a.createElement("div", {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => o.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.b.locked,
				icon: o.a.createElement(a.a, {
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				p = s.n(m);
			const u = o.a.createElement(d.a, {
					className: p.a.lockIcon
				}),
				h = e => Object(c.g)(e) ? i.d.profile : i.d.subreddit;

			function b({
				subredditOrProfile: e
			}) {
				const t = e ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", h(e) + e.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return o.a.createElement(l.a, {
					className: p.a.bannerBase,
					color: a.b.locked,
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				} = e, r = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return o.a.createElement(d.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: o.a.createElement(p, null),
					subtitle: r,
					title: n.fbt._("This post has contest mode enabled", null, {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
			const g = o.a.createElement(m.a, {
					className: b.a.icon
				}),
				f = Object(a.c)({
					subreddit: p.A,
					subredditAboutInfo: p.x
				}),
				x = Object(i.b)(f);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || n.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return o.a.createElement(u.a, {
					className: b.a.container,
					color: c.b.quarantine,
					icon: g,
					subtitle: o.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", o.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? o.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: r
					}) : i, " ", o.a.createElement(l.a, {
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
				r = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
					...o
				} = e, c = Object(a.b)(n);
				return r.a.createElement(i.a, d({
					className: s,
					to: c
				}, o), t)
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
				} = e, n = t ? c : o.a;
				return r.a.createElement(n, l({}, s, {
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
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lottie-web/build/player/lottie.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/LottieAnimation/util.ts");
			const d = i.a.memo(e => {
				const t = i.a.createRef(),
					{
						assetData: s,
						assetUrl: n,
						className: d,
						hidden: c,
						loop: l,
						onClick: m,
						prefersReducedAnimation: p
					} = e,
					[u, h] = Object(o.useState)(s);
				Object(o.useEffect)(() => {
					n ? Object(a.a)(n).then(h) : s && h(s)
				}, [n, s]);
				const [b, g] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || b || !u) return;
					const s = r.a.loadAnimation({
						autoplay: !1,
						loop: l,
						container: e,
						animationData: u
					});
					g(s)
				}, [l, t, b, u]), Object(o.useEffect)(() => {
					if (b)
						if (c) b.stop();
						else if (p) {
						const e = b.getDuration(!0);
						b.goToAndPlay(e, !0)
					} else b.goToAndPlay(0)
				}, [c, p, b]);
				const f = Object(o.useCallback)(() => {
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
				return r
			}));
			s("./src/reddit/components/ImageWithFallback/index.tsx");
			const n = {};

			function r(e) {
				let t = n[e];
				return t || (t = n[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				d = s("./src/reddit/constants/posts.ts"),
				c = s("./src/reddit/helpers/trackers/post.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/components/MediumPost/index.m.less"),
				p = s.n(m);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: n,
				shouldShowSubscribeButton: m,
				subredditOrProfile: u,
				templatePlaceholderImage: h
			}) => r.a.createElement("div", {
				className: Object(o.a)(p.a.thumbnailContainer, {
					[p.a.mShowingButtonOrOverflow]: m
				})
			}, r.a.createElement("div", {
				className: p.a.thumbnailContainerRow
			}, m && u && r.a.createElement(i.a, {
				className: p.a.subscribeButton,
				getEventFactory: e => Object(c.f)(t.id, e ? "unsubscribe" : "subscribe"),
				identifier: {
					name: u.name,
					type: Object(l.g)(u) ? d.a.PROFILE : d.a.SUBREDDIT
				},
				postId: t.id,
				small: !0
			})), r.a.createElement(a.a, {
				crosspost: e,
				post: t,
				redditStyle: n,
				forceShowNSFW: s,
				templatePlaceholderImage: h
			}))
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
				ClassicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				classicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				x = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				y = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/trackers/lightbox.ts"),
				k = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/actions/tooltip.ts"),
				w = s("./node_modules/lodash/find.js"),
				E = s.n(w),
				P = s("./node_modules/react-motion/lib/react-motion.js");
			const I = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				j = {},
				S = (e = [], t) => {
					const s = E()(e, {
							key: "expando_content"
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: "expando_content",
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: "expando_content",
						style: {
							opacity: Object(P.spring)(1, I)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(P.spring)(0, I)
						}
					}]
				};
			class A extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), j), this.state = {
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
						content: n
					} = this.props;
					return i.a.createElement(P.TransitionMotion, {
						styles: e => S(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var L = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Post/index.ts"),
				T = s("./src/reddit/models/Vote/index.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				R = s("./src/reddit/selectors/experiments/categories.ts"),
				M = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				F = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/postCreations.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				H = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				K = s("./src/reddit/components/AwardBadges/index.tsx"),
				q = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				z = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				G = s("./src/reddit/components/ExpandoButton/index.tsx"),
				Y = s("./src/reddit/components/FlairWrapper/index.tsx"),
				J = s("./src/reddit/components/Flatlist/index.tsx"),
				Q = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				X = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Z = s("./src/reddit/components/ModModeReports/index.tsx"),
				$ = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ee = s("./src/reddit/components/PostContainer/index.tsx"),
				te = s("./src/higherOrderComponents/makeAsync.tsx"),
				se = s("./src/lib/loadWithRetries/index.ts"),
				ne = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const re = Object(te.a)({
				ErrorComponent: () => i.a.createElement(ne.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(se.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(ne.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var oe = e => i.a.createElement(re, e),
				ie = s("./src/reddit/components/PostList/index.tsx"),
				ae = s("./src/reddit/components/PostMedia/index.tsx"),
				de = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ce = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				le = s("./src/reddit/components/PostTitle/index.tsx"),
				me = s("./src/reddit/components/PostTopLine/index.tsx"),
				pe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ue = s("./src/reddit/components/SourceLink/index.tsx"),
				he = s("./src/reddit/constants/componentTestIds.ts"),
				be = s("./src/reddit/constants/postLayout.ts"),
				ge = s("./src/reddit/contexts/PageLayer/index.tsx"),
				fe = s("./src/reddit/helpers/postEvent.ts"),
				xe = s("./src/reddit/selectors/postFlair.ts"),
				ve = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				ye = s("./src/reddit/constants/colors.ts"),
				Ce = s("./src/config.ts"),
				ke = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Oe = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				we = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ee = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Pe = s.n(Ee);
			const {
				fbt: Ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), je = () => Ie._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Ie._param("=User Agreement", i.a.createElement("a", {
				className: Pe.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, Ie._("User Agreement", null, {
				hk: "3MHgRl"
			}))), Ie._param("=Content Policy", i.a.createElement("a", {
				className: Pe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Ie._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), Se = () => Ie._("This content was removed for a violation of Reddit's {=Content Policy} .", [Ie._param("=Content Policy", i.a.createElement("a", {
				className: Pe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Ie._("Content Policy", null, {
				hk: "2X6v1w"
			})))], {
				hk: "4DbEQC"
			});
			var Ae = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: r
				} = e, o = t ? ((e, t, s) => {
					switch (e) {
						case N.f.AntiEvilOps:
							return Ie._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case N.f.Author:
							return Ie._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case N.f.AuthorDeleted:
							return Ie._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case N.f.AutomodFiltered:
							return Ie._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case N.f.CommunityOps:
							return Ie._("This post was removed by Reddit admin, u/{username}.", [Ie._param("username", t)], {
								hk: "34nHWu"
							});
						case N.f.ContentTakedown:
							return Ie._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "1wmhiC"
							});
						case N.f.CopyrightTakedown:
							return Ie._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case N.f.Moderator:
							return Ie._("This post was removed by r/{subredditName} moderator, u/{username}.", [Ie._param("subredditName", s), Ie._param("username", t)], {
								hk: "270bcn"
							});
						case N.f.Reddit:
							return Ie._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return Ie._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(n, s, r) : ((e, t) => {
					switch (e) {
						case N.f.AntiEvilOps:
							return Ie._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case N.f.Author:
							return Ie._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case N.f.AuthorDeleted:
							return Ie._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case N.f.AutomodFiltered:
							return Ie._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case N.f.CommunityOps:
							return Ie._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case N.f.ContentTakedown:
							return Ie._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "jiKO8"
							});
						case N.f.CopyrightTakedown:
							return Ie._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case N.f.Moderator:
							return Ie._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [Ie._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case N.f.Reddit:
							return Ie._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return Ie._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(n, r), a = t ? (e => {
					switch (e) {
						case N.f.AntiEvilOps:
							return i.a.createElement(je, null);
						case N.f.AuthorDeleted:
						case N.f.Author:
							return Ie._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case N.f.AutomodFiltered:
							return Ie._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case N.f.CommunityOps:
							return Ie._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [Ie._param("=just ask", i.a.createElement("a", {
								className: Pe.a.link,
								href: `${Ce.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank"
							}, Ie._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case N.f.ContentTakedown:
							return i.a.createElement(Se, null);
						case N.f.CopyrightTakedown:
							return Ie._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case N.f.Moderator:
							return Ie._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case N.f.Reddit:
							return Ie._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return Ie._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(n) : ((e, t) => {
					switch (e) {
						case N.f.AntiEvilOps:
							return i.a.createElement(je, null);
						case N.f.AuthorDeleted:
						case N.f.Author:
							return Ie._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case N.f.AutomodFiltered:
							return Ie._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [Ie._param("=[subreddit name]", i.a.createElement("a", {
								className: Pe.a.link,
								href: `${Ce.a.redditUrl}/r/${t}`,
								target: "_blank"
							}, Ie._("{subreddit name}", [Ie._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case N.f.CommunityOps:
							return Ie._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case N.f.ContentTakedown:
							return i.a.createElement(Se, null);
						case N.f.CopyrightTakedown:
							return Ie._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case N.f.Moderator:
							return Ie._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case N.f.Reddit:
						default:
							return Ie._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(n, r), d = t ? ye.b.warning : ye.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case N.f.AntiEvilOps:
						case N.f.AutomodFiltered:
						case N.f.CommunityOps:
						case N.f.ContentTakedown:
						case N.f.CopyrightTakedown:
						case N.f.Reddit:
							t = ke.a;
							break;
						case N.f.AuthorDeleted:
						case N.f.Author:
							t = we.b;
							break;
						case N.f.Moderator:
							t = Oe.a;
							break;
						default:
							t = ke.a
					}
					return i.a.createElement(t, {
						className: Pe.a.icon
					})
				})(n);
				return i.a.createElement(ve.a, {
					className: Pe.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: o
				})
			};

			function Le(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(Ae, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			var Ne = s("./node_modules/fbt/lib/FbtPublic.js"),
				Te = s("./src/lib/prettyPrintNumber/index.ts"),
				_e = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Re = s.n(_e);
			var Me = ({
					post: e,
					showViewCount: t
				}) => {
					const {
						upvotePercentString: s,
						viewCountString: n
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(Te.b)(e.viewCount);
						return {
							upvotePercentString: Ne.fbt._("{percent upvoted}% Upvoted", [Ne.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Ne.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Ne.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(e), r = t && !!e.viewCount;
					return i.a.createElement("div", {
						className: Re.a.viewCounts
					}, r && i.a.createElement("span", null, n), r && !!e.upvoteRatio && i.a.createElement("span", {
						className: Re.a.dotSpacer
					}), !!e.upvoteRatio && i.a.createElement("span", null, s))
				},
				Fe = s("./src/reddit/components/PostContent/index.m.less"),
				Be = s.n(Fe);
			const De = p.a.wrapped(le.c, "PostTitle", Be.a),
				Ve = p.a.wrapped(G.a, "ExpandoButton", Be.a),
				We = p.a.wrapped(A, "ClassicExpandoMotion", Be.a),
				Ue = p.a.wrapped(J.c, "FullWidthFlatlist", Be.a),
				He = p.a.wrapped(q.a, "ClassicThumbnail", Be.a),
				Ke = Object(ge.t)({
					isCommentsPage: ge.w,
					pageLayer: e => e
				}),
				qe = Object(a.b)(() => Object(c.c)({
					activeModalId: _.a,
					flairStyleTemplate: ge.S,
					currentUser: W.j,
					crosspost: V.d,
					hideNSFWPref: W.C,
					imageGalleryCurrentItem: V.i,
					isAdminOrMod: (e, t) => {
						const s = Object(V.P)(e, {
							postId: t.postId
						});
						return !!s && Object(F.a)(e, {
							subredditId: s.id
						})
					},
					isCurrentUserProfilePost: V.k,
					isExpanded: V.l,
					post: V.D,
					moderatorPermissions: B.h,
					modModeEnabled: ge.Q,
					isInCategoriesExperiment: R.a,
					showAwardsPlaque: M.a,
					showEditFlair: xe.a,
					subredditOrProfile: V.P,
					isEditing: D.F,
					userIsOp: W.pb
				}), (e, {
					pageLayer: t,
					postId: s
				}) => ({
					onIgnoreReports: () => e(Object(h.S)(s)),
					onOpenReportsDropdown: t => e(Object(O.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const n = t === T.a.upvoted ? Object(h.U)(s) : Object(h.r)(s);
						e(n)
					},
					fireAdPixelsOfType: (t, s) => e(Object(h.u)(t, s)),
					openPost: t => e(Object(h.E)(t))
				})),
				ze = p.a.wrapped(d.a, "ThumbLink", Be.a),
				Ge = ({
					post: e,
					templatePlaceholderImage: t
				}) => e.source ? i.a.createElement(He, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : i.a.createElement(ze, {
					to: Object(y.b)(e.permalink)
				}, i.a.createElement(He, {
					post: e,
					forceShowNSFW: !0
				})),
				Ye = ({
					post: e,
					isExpanded: t,
					scrollerItemRef: s
				}) => i.a.createElement(We, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(ae.a, {
						className: Be.a.ClassicPostMedia,
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
			t.a = Ke(qe(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					fireAdPixelsOfType: a,
					flairStyleTemplate: d,
					hideNSFWPref: c,
					isActionBarAnimationEnabled: p,
					imageGalleryCurrentItem: h,
					isAdminOrMod: y,
					isCommentsPage: O,
					isCurrentUserProfilePost: w,
					isEditing: E,
					isExpanded: P,
					isOverlay: I,
					moderatorPermissions: j,
					modModeEnabled: S,
					onIgnoreReports: A,
					onOpenReportsDropdown: T,
					openPost: _,
					onVoteClick: R,
					post: M,
					scrollerItemRef: F,
					sendEvent: B,
					showAwardsPlaque: D,
					showEditFlair: V,
					subredditOrProfile: W,
					userIsOp: q
				} = e, G = M.isSponsored ? Object(ie.b)(M.id, {
					fireAdPixelsOfType: a,
					openPost: _
				}) : r.a, te = Object(v.a)(j), se = Object(f.a)(j), ne = Object(x.a)(j), re = te || se, ge = ((e, t, s) => {
					const [n, r] = e ? [Object(g.e)(e) === s.author, e.isEmployee] : [!1, !1];
					return n || t || r
				})(n, re, M), xe = !!M.media && (M.media.type === L.o.RTJSON || M.media.type === L.o.TEXT), ve = q && xe, ye = Object($.c)(M);
				let Ce;
				const ke = !(S && v.a),
					Oe = Object(de.h)({
						hide: ke,
						editPost: ke,
						save: ke,
						report: ke
					}),
					we = M.removedByCategory === N.f.AuthorDeleted,
					Ee = n && (n.displayText === M.author || n.username === M.author),
					Pe = !we && (Ee || y || !(M.removedByCategory && M.media && (Object(L.J)(M.media) || Object(L.H)(M.media)))),
					Ie = Object(l.t)(M, h),
					{
						source: je
					} = Ie,
					Se = M.removedByCategory === N.f.Reddit && Object(u.e)(M.created) > 24,
					Ae = M.removedByCategory && M.removedByCategory !== N.f.Reddit || Se,
					Ne = i.a.createElement(De, {
						post: M,
						size: le.b.ExtraLarge,
						showCategoryTag: I,
						isOverlay: I,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Te = i.a.createElement(Me, {
						post: M,
						showViewCount: ge
					}),
					_e = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? be.g.Classic : t ? be.g.Large : n.media ? be.g.Large : be.g.Medium
					})(e);
				if (_e === be.g.Classic) Ce = i.a.createElement("div", {
					"data-test-id": he.e
				}, i.a.createElement(ce.a, {
					model: M,
					handleVote: R,
					subreddit: W,
					isOverlay: I,
					isActionBarAnimationEnabled: p,
					postId: M.id,
					isForceSelected: !I && p
				}), i.a.createElement("div", {
					className: Be.a.mainBody
				}, i.a.createElement("div", {
					className: Be.a.content
				}, i.a.createElement(me.a, {
					hideAwards: D,
					hideNSFWPref: c,
					inSubredditOrProfile: !0,
					isCommentsPage: O,
					isCurrentUserProfilePost: w,
					isOverlay: !!I,
					isTopicPage: !1,
					post: M,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!I && !M.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: W
				}), Ne, i.a.createElement(Y.a, {
					className: O ? Be.a.leftPadding : void 0,
					post: M,
					showCategoryTag: e.isInCategoriesExperiment && O,
					sendEvent: B
				}), S && te && ye && i.a.createElement(Z.a, {
					onIgnoreReports: A,
					reportable: M
				}), i.a.createElement(Q.d, null), i.a.createElement("div", {
					className: Be.a.FlatlistContainer
				}, i.a.createElement(Ve, {
					crosspost: s || void 0,
					isExpanded: !!P,
					post: M,
					useMediaIcons: !1
				}), Ye(e), D && i.a.createElement(K.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: M,
					tooltipType: I ? pe.c.Lightbox : void 0
				}), i.a.createElement(Ue, {
					currentUser: n,
					hasModFlairPerms: se,
					hasModFullPerms: ne,
					hasModPostPerms: te,
					isOverlay: I,
					onIgnoreReports: A,
					onOpenReportsDropdown: T,
					modModeEnabled: S,
					post: M,
					showUpvotePercent: !0,
					showViewCount: ge,
					useFlatlistBreakpoints: Oe,
					isActionBarAnimationEnabled: p,
					isForceSelected: !I && p
				}))), Object(b.a)(M) && i.a.createElement(Ge, {
					post: M,
					templatePlaceholderImage: d && d.postPlaceholderImage
				})));
				else if (_e === be.g.Medium) {
					const t = Object(b.a)(M);
					Ce = i.a.createElement("div", {
						"data-test-id": he.e
					}, i.a.createElement(ce.a, {
						model: M,
						handleVote: R,
						subreddit: W,
						isOverlay: I,
						isActionBarAnimationEnabled: p,
						postId: M.id,
						isForceSelected: !I && p
					}), i.a.createElement("div", {
						className: Be.a.mainBody
					}, i.a.createElement("div", {
						className: Be.a.content
					}, i.a.createElement(me.a, {
						hideAwards: D,
						hideNSFWPref: c,
						inSubredditOrProfile: !0,
						isCommentsPage: O,
						isCurrentUserProfilePost: w,
						isOverlay: !!I,
						isTopicPage: !1,
						post: M,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!I && !M.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: W
					}), Ne, M.source && i.a.createElement(ue.a, {
						post: M,
						isCommentsPage: O
					}), i.a.createElement(Y.a, {
						className: O ? Be.a.leftPadding : void 0,
						post: M,
						showCategoryTag: e.isInCategoriesExperiment && O,
						sendEvent: B
					}), W && Ae && i.a.createElement(Le, {
						isAdminOrMod: y,
						post: M,
						subredditOrProfile: W
					}), S && te && ye && i.a.createElement(Z.a, {
						onIgnoreReports: A,
						reportable: M
					})), t && i.a.createElement(X.a, {
						post: M,
						forceShowNSFW: !0,
						hasModPostPerms: re,
						isCommentsPage: O,
						isOverlay: !0,
						modModeEnabled: S,
						templatePlaceholderImage: d && d.postPlaceholderImage,
						subredditOrProfile: W
					})), i.a.createElement(Q.d, null), D && i.a.createElement(K.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: M,
						tooltipType: I ? pe.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: Be.a.controlsContainer
					}, i.a.createElement(J.c, {
						currentUser: n,
						hasModFlairPerms: se,
						hasModFullPerms: ne,
						hasModPostPerms: te,
						isOverlay: I,
						modModeEnabled: S,
						onIgnoreReports: A,
						onOpenReportsDropdown: T,
						post: M,
						showEditPost: ve,
						showEditFlair: V,
						tooltipType: I ? pe.c.Lightbox : void 0,
						useFlatlistBreakpoints: Oe,
						isActionBarAnimationEnabled: p,
						isForceSelected: !I && p
					}), Te))
				} else _e === be.g.Large && (Ce = i.a.createElement("div", {
					"data-test-id": he.e
				}, i.a.createElement(ce.a, {
					model: M,
					handleVote: R,
					subreddit: W,
					isOverlay: I,
					isActionBarAnimationEnabled: p,
					postId: M.id,
					isForceSelected: !I && p
				}), i.a.createElement(me.a, {
					hideAwards: D,
					hideNSFWPref: c,
					inSubredditOrProfile: !0,
					isCommentsPage: O,
					isCurrentUserProfilePost: w,
					isOverlay: !!I,
					isTopicPage: !1,
					post: M,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!I && !M.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: W
				}), Ne, ((e, t, s, n) => e.source && !t && (s || n))(M, s, I, O) && i.a.createElement(ue.a, {
					post: M,
					isCommentsPage: O
				}), i.a.createElement(Y.a, {
					className: O ? Be.a.leftPadding : void 0,
					post: M,
					showCategoryTag: e.isInCategoriesExperiment && O,
					sendEvent: B
				}), W && Ae && i.a.createElement(Le, {
					isAdminOrMod: y,
					post: M,
					subredditOrProfile: W
				}), E ? i.a.createElement(oe, {
					post: M
				}) : Pe && i.a.createElement(ae.a, {
					className: Object(m.a)(Be.a.LargePostMedia, {
						[Be.a.isCommentsPage]: O
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: I,
					isOverlay: I,
					post: M,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !I,
					showCentered: !0,
					scrollerItemRef: F
				}), M.isSponsored && je && je.url && i.a.createElement(U.a, {
					className: Be.a.adLinkWrapper
				}, i.a.createElement(H.a, {
					post: M,
					adLinkContent: Ie
				})), S && te && ye && i.a.createElement(Z.a, {
					onIgnoreReports: A,
					reportable: M
				}), i.a.createElement(Q.d, null), D && i.a.createElement(K.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: M,
					tooltipType: I ? pe.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: Be.a.controlsContainer
				}, i.a.createElement(J.c, {
					currentUser: n,
					hasModFlairPerms: se,
					hasModFullPerms: ne,
					hasModPostPerms: te,
					isOverlay: I,
					modModeEnabled: S,
					onIgnoreReports: A,
					onOpenReportsDropdown: T,
					post: M,
					showEditPost: ve,
					showEditFlair: V,
					tooltipType: I ? pe.c.Lightbox : void 0,
					useFlatlistBreakpoints: Oe,
					isActionBarAnimationEnabled: p,
					isForceSelected: !I && p
				}), Te)));
				const Re = Object(o.useCallback)((e, t) => Object(k.f)(e, t), []);
				return i.a.createElement(ee.a, {
					className: Object(m.a)(t, Be.a.postContainer, {
						[Be.a.hasEventMeta]: Object(fe.a)(M)
					}),
					isOverlay: I,
					post: M,
					eventFactory: I ? C.b : Re,
					onClick: G
				}, i.a.createElement(z.a, {
					post: M
				}), Ce)
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
				return Y
			})), s.d(t, "a", (function() {
				return Q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
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
				x = s("./src/lib/opener/index.ts"),
				v = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				C = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				k = s("./src/reddit/components/Scroller/Simple.tsx"),
				O = s("./src/reddit/constants/adEvents.ts"),
				w = s("./src/reddit/constants/componentSizes.ts"),
				E = s("./src/reddit/constants/postLayout.ts"),
				P = s("./src/reddit/controls/InternalLink/index.tsx"),
				I = s("./src/reddit/controls/OutboundLink/index.tsx"),
				j = s("./src/reddit/helpers/getClickInfo.ts"),
				S = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				A = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				L = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				_ = s("./src/telemetry/index.ts"),
				R = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				F = s.n(M);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = 500, V = new T.a(D), W = new T.a(D), U = new T.a(D), H = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, K = f.a.div("SeeMore", F.a), q = f.a.wrapped(A.a, "ArrowRight", F.a), z = (e, t, s, n, r, o, i, a) => {
				const d = `entered-${e}-${t}-${s?`last-${n}-${r}`:""}-${o}`;
				let c = V.get(d);
				return void 0 === c && (c = () => {
					s && i.onBottomViewed(n, r), i.trackOnPostEnteredViewport(e, t, a)
				}, V.set(d, c)), c
			}, G = (e, t, s, n, r) => {
				const o = `left-${e}-${t}`;
				let i = W.get(o);
				return void 0 === i && (i = o => {
					s.trackOnPostExitedViewport(e, t, o, n, r)
				}, W.set(o, i)), i
			}, Y = (e, t) => {
				const s = `click-${e}`;
				let n = U.get(s);
				return void 0 === n && (n = (e, s, n, r) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, O.a.Click);
						const {
							source: e
						} = Object(u.t)(s, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(I.a)(s.id, n, t).url), Object(x.d)(t, x.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(j.a)(e)
					})
				}, U.set(s, n)), n
			}, J = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class Q extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(D), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = o()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, n = e(), r = [];
						n.forEach(e => r.push(e.id));
						const o = r.map(e => t[e]).filter(Boolean),
							i = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(N.a)(o, i))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && _.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = _.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = _.c.end(this.timerId);
						setTimeout(() => Object(_.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && _.c.cancel(this.timerId), e.postIds.length && (this.timerId = _.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && _.c.has(this.timerId)) {
						const e = _.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(_.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const n = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					n && n !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(n)
				}
				componentWillUnmount() {
					this.timerId && _.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return _.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = _.c.end(e);
					setTimeout(() => {
						s(t(n, R.TimerType.InApp))
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
						...s
					} = this.props, {
						postsById: n,
						...r
					} = e, o = Object.keys(s), i = Object.keys(r);
					if (i.length !== o.length) return !0;
					if (i.some(e => s[e] !== r[e])) return !0;
					if (t === n) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((r, o) => {
							const i = 0 === o;
							return s({
								isFirstPost: i,
								layout: e,
								post: t[r]
							}) !== s({
								isFirstPost: i,
								layout: e,
								post: n[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						hostPostId: o,
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
						redditStyle: x,
						shouldHideFlair: y,
						isActionBarAnimationEnabled: C,
						postIds: k
					} = this.props, O = 0 === t, w = `post-${n}-${e}-${t}-${s?"last-index":""}-${u}-${p}-${g}`;
					let P;
					if (void 0 === (P = this.scrollChildCache.get(w))) {
						const {
							inSubredditOrProfile: I,
							postsById: j
						} = this.props, A = j[e], N = A.crosspostRootId && j[A.crosspostRootId] ? j[A.crosspostRootId] : A;
						A.crosspostRootId && !j[A.crosspostRootId] && v.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${A.id} is crosspost of ${A.crosspostRootId}, but ` + `${A.crosspostRootId} details are missing in the state`), v.c.captureMessage("Crosspost parent details are missing")
						});
						const T = this.props.postComponentForLayout({
								isCrosspost: !!A.crosspostRootId,
								isFirstPost: O,
								layout: n,
								post: N
							}),
							_ = `post-list-item-[layout: ${n}]-[postId: ${e}]`,
							R = z(e, n, s, p, u, g, this.props, t),
							M = G(e, n, this.props, t, h),
							F = Y(e, this.props),
							B = N.media && N.media.type === L.o.EMBED ? N.media.provider : null;
						P = {
							estHeight: Object(S.c)(A, n),
							id: e,
							isFocusable: !(!N.media || !(n === E.g.Large || n === E.g.Classic && Object(L.G)(N.media))) && (L.d.has(N.media.type) && (!B || !L.s.has(B)) && !N.isSpoiler && !N.isNSFW),
							trackOnEnteredViewport: R,
							trackOnExitedViewport: M,
							render: ({
								className: t,
								height: n,
								width: b,
								remeasure: g,
								setScrollerChildRef: v,
								shouldLoadInitially: w
							}) => m.a.createElement(T, {
								className: t,
								currentProfileName: r,
								key: _,
								availableWidth: b,
								eventFactory: f,
								first: O,
								forceLoadMedia: w,
								hostPostId: o,
								inSubredditOrProfile: I,
								isActionBarAnimationEnabled: C,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								listingKey: p,
								listingName: u,
								pageLayer: h,
								last: s,
								onClickPost: F,
								onSizeChanged: g,
								postId: e,
								postIds: k,
								redditStyle: x,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: v,
								shouldHideFlair: y
							})
						}, this.scrollChildCache.set(w, P)
					}
					return P
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
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const i = o;
					return m.a.createElement("div", {
						className: F.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && m.a.createElement(C.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: F.a.placeholder
					}, m.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: H[n]
					}), !!e && m.a.createElement(C.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: o,
						layout: i,
						location: a,
						loadMore: d,
						postIds: c,
						onLoadMore: u
					} = this.props;
					let g = c.map((e, t, s) => {
						const n = t === c.length - 1;
						return this.scrollChildForPost(e, t, n, i)
					});
					r && (g = J(g, r));
					const f = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						x = a ? Object(n.e)(a) : null,
						v = x || o;
					return m.a.createElement(l.Fragment, null, m.a.createElement(k.b, {
						innerRef: this.updateScrollerRef,
						className: v ? F.a.truncatedPostList : Object(h.a)(F.a.postList, this.props.className),
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
					}, g), x && m.a.createElement(K, {
						className: F.a.seeMoreButton
					}, m.a.createElement(P.a, {
						className: F.a.seeMorePostsText,
						to: Object(p.a)(x, {
							type: b.Pb.Posts
						})
					}, B._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(q, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Q.defaultProps = {
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
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(y);
			const k = s("./src/lib/lessComponent.tsx").a.div("Container", C.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: n,
					hideNSFWPref: y,
					hostPostId: O,
					iconClassName: w,
					inSubredditOrProfile: E,
					isCommentsPage: P,
					isCompactPinnedPost: I,
					isCurrentUserProfilePost: j,
					isOverlay: S,
					isTopicPage: A,
					listingKey: L,
					post: N,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: _,
					showSubreddit: R,
					showSubredditIcon: M,
					subredditOrProfile: F
				} = e, B = n || A;
				return r.a.createElement(k, {
					className: t
				}, R && F && r.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, r.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: F.url
				}, M && r.a.createElement(l.b, {
					className: Object(o.a)(C.a.subredditIcon, w),
					shouldHideNsfwIcon: y,
					subredditOrProfile: F
				}))), r.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, R && r.a.createElement(a.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), r.a.createElement(c.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: S ? c.c.Lightbox : void 0,
					post: N,
					showSub: R,
					subredditOrProfile: F
				}), r.a.createElement(d.a, {
					className: C.a.postBadges,
					displayText: F ? F.displayText : null,
					inSubredditOrProfile: E,
					isCompactPinnedPost: I,
					post: N,
					tooltipType: S ? c.c.Lightbox : void 0
				}), !B && r.a.createElement(i.a, {
					isPostDetail: P,
					thing: N,
					tooltipType: S ? c.c.Lightbox : void 0
				})), F && R && T && !j && r.a.createElement(p.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(g.f)(N.id, e ? "unsubscribe" : "subscribe", "post", L, O),
					identifier: {
						name: F.name,
						type: Object(v.g)(F) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: N.id,
					size: h.c.XS
				}), _ && r.a.createElement(b.b, {
					className: C.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(x.D)(e.post),
					source: N.source
				}, r.a.createElement(f.a, {
					className: C.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsProgressBar/index.m.less": function(e, t, s) {
			e.exports = {
				titleRow: "ewR4vxWiJWGeWBdmzw6xS",
				barRow: "_1u97iAB8jvIzM_2sl3sjGu",
				track: "_19jmSuCu8wb_2oUOO1Ksr7",
				progress: "_1kpFqrDgv8X9yOZp129xkr",
				icon: "_1SSPWxztrUgxbJZ-XoxKNd"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, s) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/confetti-animation.json": function(e) {
			e.exports = JSON.parse('{"v":"5.7.1","fr":30,"ip":0,"op":40,"w":626,"h":626,"nm":"Comp 1","ddd":0,"assets":[{"id":"image_0","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_1","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_2","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_3","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_4","w":88,"h":83,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABTCAYAAAAbUsD3AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAJYklEQVR4nO2dTWwb1xHHf3IZRIbtkiway9UhWlkHB0gQMYCDGmkLUQVspCdTQQ9tAUfU0SczgAMU6MH0uQWi9tLcQtVAkVMs3dL4IBJ1A6MwalKAgfhgd5WDUEVoRUJNpQSC2cNw+fn26+1SS9L+AwtKu2+Xs/+dN29m3uzjGIOPBJABUo0NoAisAuWIZBoZZMegBtRttjIt0p/DJ7I0iIzHqM8lZUNNdDYqIYcVaRBCb89Sr19sbbvz1D84J6TTSfJAavJY1AKo8OZ3+fuvfsCbuZft25T3IH0faofNXRUGkOTvRC1AN44f48+vneSnf3jFWbYzL8LBUyjttnYBSeDTPovoC8eiFqALuf2n/PLnE7zgpXF+BqbGO3ZdQ8zLwGCQTEQKeBCPQXXe+0mFLVh62LFrs3GtapjC6WJQNDiB+LU42V0VspMwe6pj1xSQD0es4BgUggvAVDwGuSn/Jy+f69k1MKZiEAjOAZdBtDcR83+BdBLmkj27C0jPiBRRexEphIjxeAw+fh3G3R75Wxm49iFMGLBRbO5OJ+H3X3a0TADHidiriJrgTxGbya8NePv7Hs74zcfwyg9hNg2MNUlOvADmAVT2OlpfAEqAGZrEPhGlF5EHbgDEY2D+xKN5+Kze+f/781ApAlA9BOOvHcEHROxVRGWDUzTIBRmkdGwvANcLcFJMbSKm9EKmEDsfCaIguOmSgQQK2ckAV5uYgoUWf7mpnuAD5GFGEkZHQXCeht0FicYC452cDHqIFttcsxDCN/nGUROcRnxUQAKEQNpr4UQc3s03/81OKt22WSIIQI6S4ARdWqQIENyxUVLvv7jY1GKw1eIjNxVHRbABLNNmGuaS4rv6xn8dnIE2LU4n4fJLylariCZnGnL1Ff1w0wxa82fpxme8u9GDC5A61b3XA67k4coNh+PTsG0CYO7D9F3XK9aQOb5y22doLp2uc2TBwAOZ3Vic1CQX4LHLPOc7OfijeBXGcbhxFm4+cTwjjoTql2m5jpu0yLaI14IfDTbQILMb8RiUL8jNa+FkAj7ZtT/+dQ2uGE1TYhN86KBEJ+Gml5OcCDYQO5VGyNTIcwniMcicFruYTgYg18KHZTg7a3/81k24lW/+W9yF5U35DIFoCzXEnlubEiqCDWS0nwvy7dYgljkdwBzY4eoyLFyzP/51DRbUibTyHqx+JWSXHDqCT1SQme0e+9VNcBYZ7X13/anxNi39XoDQ1wveykD+tnOb3y3BZwXXS1lkF3d7EkU6WKLLFW0nOA2se71SPNbS0FC6vV/crkqAYYftTbHFPlA9hOJ/YHVHPjcPtCSbp21QtAhOIEbbUXPn2gjt6fYzKUkhzqTE4X9dYWE2SvDJMnxua7K84/2CBBdu2ChJtm2j2My6eYW539JuH4R3ZO8sgvO0ZbfaMZeUDFXmtOLghAGXsrJN+BgDr77h7m65wYuZUCEg4ZZ2r+04Nn0PMbVNgqsotPf2rAOx7+a9aZAKYRAM7mbCCz5fE7L/ttoMULxAUfjSjmYRzFjjjwfdLW6ctYnnL2VlFNe9sTsr8Nus3rndcIvq/OJJRQZGj2SX9+CNe7aHk0B1DPF1e/raP3+sGLguZeH6Rz4k7kKY5IIEHbfM4Fqswp0V+FPelejUPVvvYx4oHsMmu9RD7oShT+72pkzthEkuSLR2PS1+b9i4uCgBzYxz8s3NHT2GTRHz6lddO84Y3oWzcGdFiL1i+B5QPONxuX8kn4jLYOoAc9/5ErY2ePaU5Aw6cHVZzIRdl9woyQ1bo7RTajFsnEzI1NGPMs5htB9slCCfsb2P/GPHRNI0YFpehIki17A4CYVXFafOpJoTjYCQepRkeoHlk59INKb4Ufvm7dgoyX148CoUNXHt2KSRa3b1g21Jfobh4j1AW8jsKZL74Jz/orxRhYv/C23aC63KngPgC+AXqjP+8m/xKkLPig0ZqodC7va3js0WaMsVt5dOfYFodFp11tqORHVnXgws51DCIvfR/xybLdGVG1blgwuAMgaOx6B4/tnU5PR91/zxCoq3nVQEJ5B0m9LX8VVHNiLIPoSVLccmJWx6vmravtporPTca42uUg1v6mWgkX/sSm4FSTco4TQnl0I0WelZKAOREYOLrwuihGkcXul1qg/+V2NTPp3tb6UeV5nOHAEUd2Gh4trsZ4CjR+xWgF3GwbOo7I0myeU9ePsf8M1Tx2Y9HoMKXirci0hcrUwrVfZGy0euHkoK0mV6fwWPhYReXyEoIt3hjOrg2s5okGz5ui5zb2vYBGQq+KnscQynR8FHdkieW6gg5tJzZstPdaUn960cvLYgEmQfupJbQwZ8X2lDv+WrZRzed6gdiqDDhsKWq68Lolym32vr1AcXgJt2B4cxwvNQNLOE5vI1ugXYecTYPwtYIcD7HYPwKu2gwwxychCCleWLw+hF9FPm0AkeRhvsIrMR5NpBCA5p6nbgYQQ5OXQbnPC0GMzgId6nnqdLsGF3YBhtMDjKHei9utAJHkEEKnx77qb1GboE23Ybo/dN96GAy1unad3r6hJsuxbOkb+rMeB4biK8QXtxJV2C07pfOKhw6XnankSoGqxYo2Fo0C/TFroN7heKu1Kj4Fbw3Cdo369u/HIkYXL1UJLhy5utebKbT2QdiOxkuLPZLvkIbRMRaoAYVhRn7kP+ibzGoJrdXduRbWpcFkHKTgZPMvUrAtUxEYbdgaA3WdiSeb3puzKF4/Zm/OYBvPcIkusyVdXH+UBD90QdSrS/TAVzX4gtbGm/GwzIA1nZkpKu3MshLbbUgvZSDpH5wcVd0brpu2JXg5Dbjsqe1JMl1iH3yN+gONsHMxEqwaYLSdaglboH8/c9zeRqo3Yoi4VO34VMWR6om2whLGfQA91Fkep2B9bP98b15j4sfynkhrjiiG/YDYpWRY8Dwbb1v/2Cic2Ph8Rj8jMM6+flJxouv2T72xd+tiJSPW4gM9q23+9li8eoL06KjB+9Sn32lOs5y+FR5w15LzcScKsi0+WGjQxZhPh+y1EngtRAAiGgHzdjIuR5jZ4M5EH0S56iRzlCR86DcH62AsE0JYE8GDNkuSJZtdVCQSGQX23NE/4UVDoE2eoMyG8k5dHrds6vsYcDA71BsXpE8nlGGvcBp4qMxkYUAuJ9UCwQooxhLw5qIE8+Qavc00RurBjyd+nCoLXyqmVffS+Z+BwDgv8DYaOwqLxJzNwAAAAASUVORK5CYII=","e":1},{"id":"image_5","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_6","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_7","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_8","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Pre-comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[715.167,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":-0.4,"op":23.6,"st":-0.4,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Pre-comp 3","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[736.722,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":13.8,"op":34.8,"st":13.8,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Pre-comp 4","refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[306.5,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":13.2,"op":40.2,"st":13.2,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Pre-comp 5","refId":"comp_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[196.056,418.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4,"op":28,"st":4,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"Pre-comp 6","refId":"comp_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[393.833,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":15.8,"op":39.8,"st":15.8,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"Pre-comp 7","refId":"comp_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[89.167,418.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.8,"op":31.8,"st":4.8,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"Pre-comp 8","refId":"comp_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[814.944,370.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":11.8,"op":41.8,"st":11.8,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"Pre-comp 9","refId":"comp_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[919.611,250.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.2,"op":28.2,"st":4.2,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"Pre-comp 10","refId":"comp_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[557.389,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":8.6,"op":35.6,"st":8.6,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"Pre-comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[83.167,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":6.6,"op":30.6,"st":6.6,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"Pre-comp 3","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[648.722,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":5.8,"op":26.8,"st":5.8,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"Pre-comp 5","refId":"comp_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1040.056,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":16,"op":40,"st":16,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"Pre-comp 7","refId":"comp_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[933.167,190.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[60,60,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":12.8,"op":39.8,"st":12.8,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"Pre-comp 8","refId":"comp_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[134.944,270.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.8,"op":34.8,"st":4.8,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"Pre-comp 9","refId":"comp_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[503.611,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":16.2,"op":40.2,"st":16.2,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"Pre-comp 10","refId":"comp_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[293.389,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":2.6,"op":29.6,"st":2.6,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"1/Confetti_2.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":24,"s":[406.452]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78,34,0],"to":[0,118.333,0],"ti":[0,-118.333,0]},{"t":24,"s":[78,744,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"3/Confetti_2.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[80.333,32,0],"to":[0,122.667,0],"ti":[0,-122.667,0]},{"t":21,"s":[80.333,768,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":14,"s":[150,150,100]},{"t":21,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":21,"st":0,"bm":0}]},{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"4/Confetti_2.ai","cl":"ai","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[75,37,0],"to":[0,121.333,0],"ti":[0,-121.333,0]},{"t":27,"s":[75,765,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]},{"id":"comp_4","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"5/Confetti_2.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77.333,31,0],"to":[0,121,0],"ti":[0,-121,0]},{"t":24,"s":[77.333,757,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_5","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"6/Confetti_2.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[76.667,35,0],"to":[0,121,0],"ti":[0,-121,0]},{"t":24,"s":[76.667,761,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_6","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"7/Confetti_2.ai","cl":"ai","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77,35,0],"to":[0,120.333,0],"ti":[0,-120.333,0]},{"t":27,"s":[77,757,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]},{"id":"comp_7","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"8/Confetti_2.ai","cl":"ai","refId":"image_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77.667,37,0],"to":[0,118,0],"ti":[0,-118,0]},{"t":30,"s":[77.667,745,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[150,150,100]},{"t":30,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":30,"st":0,"bm":0}]},{"id":"comp_8","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"9/Confetti_2.ai","cl":"ai","refId":"image_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78,35,0],"to":[0,120,0],"ti":[0,-120,0]},{"t":24,"s":[78,755,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_9","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"10/Confetti_2.ai","cl":"ai","refId":"image_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78.667,28,0],"to":[0,123.333,0],"ti":[0,-123.333,0]},{"t":27,"s":[78.667,768,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"all anim","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[313,313,0],"ix":2},"a":{"a":0,"k":[562.5,562.5,0],"ix":1},"s":{"a":0,"k":[56,56,100],"ix":6}},"ao":0,"w":1125,"h":1125,"ip":0,"op":39,"st":0,"bm":0}],"markers":[]}')
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, s) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "YgQMt0wJgGwSzvy9w0JK8",
				titleGroup: "_2Fz8jK5e-6cq1YKgYEj-n0",
				group: "_33p4q-VA_ubIAGTrkYy18Z",
				title: "_11_vLMByyp2z23bapR4owd",
				perksButton: "l_DpA1PxJZF1VgtfMYTmH",
				Icon: "_1RbtxFt4ax1dr88gEaw4ei",
				icon: "_1RbtxFt4ax1dr88gEaw4ei",
				isLeft: "_306IYOFAyc7DNe0yxnopfx",
				isRight: "_3IBC8iz6vb1bAK-tnNHYqz",
				active: "_3nzY1PxewxdnUvnDIkdLGq",
				redditStyle: "_1uz5vLZgNj3zHMeVyKFNN3",
				subTitle: "Bks9fiWNtmEGkO-O02zvZ",
				progress: "_3kNzltm7kFAgzESGFqpNKJ",
				heroes: "_36CBrbv63kmBRBZvTC9Ty9",
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/hooks/useTracking.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/helpers/trackers/powerups.ts"),
				l = s("./src/reddit/actions/gold/powerups.ts"),
				m = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/ApiContext.tsx"),
				b = s("./src/reddit/selectors/gold/powerups.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				k = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				O = s("./src/reddit/components/PowerupsSidebar/PowerupsProgressBar/index.m.less"),
				w = s.n(O);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var P = e => {
					const {
						className: t,
						powerups: s
					} = e, {
						tier: n,
						count: o,
						tiersInfo: i
					} = s, a = (i[n] || i[n - 1]).powerupsCost;
					if (!a) return null;
					const d = Math.min(a, o) / a;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement("div", {
						className: w.a.titleRow
					}, r.a.createElement("span", null, E._("Powerups", null, {
						hk: "DrcXp"
					})), r.a.createElement("span", null, o < a ? `${o}/${a}` : o)), r.a.createElement("div", {
						className: w.a.barRow
					}, r.a.createElement("div", {
						className: w.a.track
					}), r.a.createElement("div", {
						className: w.a.progress,
						style: {
							width: `${100*d}%`
						}
					}, r.a.createElement(k.a, {
						className: w.a.icon
					}))))
				},
				I = s("./node_modules/lottie-web/build/player/lottie.js"),
				j = s.n(I),
				S = s("./node_modules/react-motion/lib/react-motion.js"),
				A = s("./src/lib/classNames/index.ts"),
				L = s("./src/reddit/components/PowerupsSidebar/Supporters/confetti-animation.json"),
				N = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/reddit/models/Gold/Powerups/index.ts"),
				_ = s("./src/reddit/components/UserIcon/index.tsx"),
				R = s("./src/reddit/controls/InternalLink/index.tsx"),
				M = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				F = s("./src/reddit/icons/svgs/PowerupTier3/index.tsx"),
				B = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				D = s.n(B);
			var V = function(e) {
					var t, s;
					const {
						className: n,
						supporter: o
					} = e, {
						score: i,
						supporterInfo: a
					} = o, d = a ? a.displayName : N.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [N.fbt._plural(i)], {
						hk: "8kyEI"
					}).toString();
					if (!d) return null;
					const c = null === (t = null == a ? void 0 : a.icon) || void 0 === t ? void 0 : t.url,
						l = !!(null === (s = null == a ? void 0 : a.profile) || void 0 === s ? void 0 : s.isNsfw),
						m = i === T.b ? M.a : i < T.c ? k.a : F.a,
						p = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
							className: D.a.userIconContainer
						}, r.a.createElement(_.a, {
							userName: d,
							iconUrl: c,
							className: D.a.userIcon,
							isNSFW: l
						})), r.a.createElement("h4", {
							className: D.a.name
						}, d));
					return r.a.createElement("div", {
						className: Object(A.a)(n, D.a.container)
					}, a ? r.a.createElement(R.a, {
						className: D.a.user,
						to: `/user/${d}/`
					}, p) : r.a.createElement("div", {
						className: D.a.user
					}, p), r.a.createElement("div", {
						className: D.a.counter
					}, r.a.createElement(m, {
						className: D.a.powerupIcon
					}), i))
				},
				W = s("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				U = s.n(W);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = 100, q = 302, z = 40, G = e => `${e.lastSupportedAt}__${e.score}`, Y = (e, t) => ({
				key: G(e),
				data: {
					supporter: e,
					isInitial: t
				}
			}), J = () => ({
				width: q,
				height: Object(S.spring)(0)
			}), Q = () => ({
				height: 0,
				width: 0,
				motionProgress: 0
			}), X = e => {
				e && !e.children.length && j.a.loadAnimation({
					container: e,
					renderer: "svg",
					loop: !1,
					autoplay: !0,
					animationData: L,
					rendererSettings: {
						hideOnTransparent: !0
					}
				})
			};
			class Z extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: e.supporters.slice(0, e.maxSupporters || K).map(e => Y(e, !0))
					}
				}
				render() {
					const {
						className: e
					} = this.props;
					return r.a.createElement("div", {
						className: Object(A.a)(U.a.container, e)
					}, r.a.createElement(S.TransitionMotion, {
						willLeave: J,
						willEnter: Q,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(S.spring)(q),
								height: Object(S.spring)(z),
								motionProgress: Object(S.spring)(1)
							}
						}))
					}, e => r.a.createElement(r.a.Fragment, null, e.map(e => {
						const t = !e.data.isInitial && 1 === e.style.motionProgress;
						return r.a.createElement("div", {
							className: U.a.item,
							key: e.key,
							style: {
								zIndex: t ? 100 : "unset"
							}
						}, t && r.a.createElement("div", {
							className: U.a.animation,
							ref: X
						}), r.a.createElement("div", {
							className: U.a.itemCropper,
							style: {
								...e.style
							}
						}, r.a.createElement(V, {
							supporter: e.data.supporter
						})))
					}))))
				}
				static getDerivedStateFromProps(e, t) {
					const s = t.items;
					return {
						items: e.supporters.slice(0, e.maxSupporters || K).map(e => s.some(t => t.key === G(e)) ? Y(e, !0) : Y(e, !1))
					}
				}
			}
			var $ = r.a.memo(Z),
				ee = s("./src/reddit/components/PowerupsSidebar/index.m.less"),
				te = s.n(ee);
			const {
				fbt: se
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ne = Object(a.c)({
				currentUser: f.j,
				powerups: b.i,
				subreddit: g.T,
				topSupporters: b.k,
				userPowerupsData: b.r
			}), re = Object(u.c)(e => {
				const {
					className: t,
					currentUser: s,
					powerups: n,
					subreddit: a,
					topSupporters: u,
					userPowerupsData: h
				} = e, b = Object(o.d)(), g = Object(i.a)();
				if (!n || 1 === n.tiersInfo.length || !a) return null;
				const f = !!(null == h ? void 0 : h.freeCount);
				return r.a.createElement(x.a, null, r.a.createElement(v.a, {
					className: t,
					title: se._("Powerups", null, {
						hk: "DrcXp"
					})
				}, r.a.createElement("div", {
					className: te.a.container
				}, r.a.createElement("div", {
					className: te.a.titleGroup
				}, r.a.createElement("h2", {
					className: te.a.title
				}, se._("Powerup and unlock perks for {subreddit name}", [se._param("subreddit name", a.displayText)], {
					hk: "2gDqtV"
				})), r.a.createElement("button", {
					className: te.a.perksButton,
					onClick: () => {
						g(Object(c.i)()), b(s ? Object(p.h)(d.a.ECON_POWERUPS_MARKETING) : Object(m.h)())
					}
				}, se._("Show Perks", null, {
					hk: "3TgZRL"
				}))), r.a.createElement("div", {
					className: te.a.group
				}, r.a.createElement("h3", {
					className: te.a.subTitle
				}, se._("Community heroes", null, {
					hk: "1hGdba"
				})), r.a.createElement(P, {
					className: te.a.progress,
					powerups: n
				}), !!(null == u ? void 0 : u.length) && r.a.createElement($, {
					supporters: u,
					className: te.a.heroes,
					maxSupporters: 50
				})), r.a.createElement("div", {
					className: te.a.group
				}, r.a.createElement(y.i, {
					className: te.a.button,
					onClick: () => {
						g(Object(c.i)()), b(Object(l.b)())
					}
				}, f ? se._("Apply Your Free Powerup", null, {
					hk: "3HJ66L"
				}) : se._("Become a Hero", null, {
					hk: "3IZNw3"
				})), f && r.a.createElement("div", {
					className: te.a.premiumDescription
				}, r.a.createElement("div", {
					className: te.a.premiumIconWrapper
				}, r.a.createElement(C.a, {
					className: te.a.premiumIcon
				})), r.a.createElement("span", null, se._("Premium gives you 1 free Powerup", null, {
					hk: "3moHy5"
				})))))))
			});
			t.a = Object(h.b)(Object(o.b)(ne)(re))
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
				r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
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
				x = s("./src/reddit/constants/experiments.ts"),
				v = s("./src/reddit/constants/page.ts"),
				y = s("./src/reddit/constants/postLayout.ts"),
				C = s("./src/reddit/helpers/postCollection.ts"),
				k = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = s("./src/reddit/helpers/trackers/lightbox.ts"),
				w = s("./src/reddit/helpers/trackers/screenview.ts"),
				E = s("./src/reddit/selectors/chatPost.ts"),
				P = s("./src/reddit/selectors/commentsListTruncated.ts"),
				I = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				j = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				S = s("./src/reddit/selectors/seo/index.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				L = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/controls/InternalLink/index.tsx"),
				T = s("./src/reddit/helpers/name/index.ts"),
				_ = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				R = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				M = s.n(R);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var B = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						subredditOrProfile: r
					} = e, {
						primaryColor: o
					} = r;
					return a.a.createElement(N.a, {
						className: Object(L.a)(M.a.footer, t),
						onMouseDown: s,
						to: r.url,
						style: {
							backgroundColor: o
						}
					}, a.a.createElement("div", {
						className: M.a.background
					}), a.a.createElement("div", {
						className: M.a.layout
					}, n ? F._("See more posts like this in {subredditName}", [F._param("subredditName", Object(T.c)(r.displayText))], {
						hk: "pLxW5"
					}) : F._("Continue browsing in {subredditName}", [F._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(_.a, {
						className: M.a.arrow
					})))
				}),
				D = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				V = s.n(D);
			const W = Object(c.a)((e, {
					isOverlay: t
				}) => t, P.a, I.b, (e, t, s) => !((!t || s) && e)),
				U = Object(c.c)({
					includeListingBelow: S.b,
					isChatPost: E.d,
					isGQLLoggedIn: A.J,
					isLoggedIn: A.K,
					listingBelowMonthlyVariant: j.c,
					listingBelowVariant: j.b,
					shouldShowSubredditUpsell: W
				}),
				H = Object(d.b)(U, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.P.HOT,
						subredditName: t
					}))
				}));
			class K extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(f.d) : null, this.onViewed = (e, t) => Object(w.f)(this.listingKey(), l.P.TOP, t, e, l.Ub.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(O.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						includeListingBelow: e,
						post: t,
						subredditOrProfile: s
					} = this.props;
					return e && t && t.id ? Object(p.a)(t.id) : Object(u.a)(s.name, l.P.TOP, {
						t: l.Ub.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowVariant: e,
						subredditOrProfile: t,
						theme: s
					} = this.props, {
						name: r
					} = t, o = Object(k.a)(s.newCommunityTheme.canvas);
					return a.a.createElement("div", {
						className: V.a.smallBanner,
						style: {
							color: o
						}
					}, e && !Object(x.yd)(e) ? Object(j.a)(e) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : n.fbt._("More posts you may like", null, {
						hk: "2s2Xil"
					}) : n.fbt._("More posts from the {name} community", [n.fbt._param("name", r)], {
						hk: "2g363L"
					}))
				}
				renderTextBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return a.a.createElement("span", {
						className: V.a.textBanner
					}, n.fbt._("More from {name}", [n.fbt._param("name", t)], {
						hk: "Hv1mS"
					}))
				}
				render() {
					const {
						contentContainerRef: e,
						isChatPost: t,
						isGQLLoggedIn: s,
						isLoggedIn: n,
						listingBelowMonthlyVariant: r,
						listingBelowVariant: i,
						post: d,
						shouldShowSubredditUpsell: c,
						subredditOrProfile: l
					} = this.props, m = d && Object(C.a)(d), p = !!i && !Object(x.yd)(i), u = d && d.id;
					return s || n || t || m || !c ? null : a.a.createElement("div", {
						className: V.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: V.a.postList,
						disablePlaceholder: !0,
						forcedLayout: y.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostId: u,
						isTruncated: !0,
						listingBelowMonthlyVariant: r,
						listingBelowVariant: i,
						listingKey: this.listingKey(),
						listingName: v.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: V.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: o.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(B, {
						className: V.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: p,
						subredditOrProfile: l
					}))
				}
			}
			t.a = H(Object(m.a)(Object(g.c)(K)))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: s,
				toolbarPosition: n
			}) => r.a.createElement("div", {
				className: e
			}, r.a.createElement(i.a, {
				isFocused: !1
			}, !t && "top" === n && r.a.createElement("div", {
				className: Object(o.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
					isLoading: s
				}))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.prompt, Object(a.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === n && r.a.createElement("div", {
				className: Object(o.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
					isLoading: s
				}))
			})))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(n),
				o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./node_modules/lodash/random.js"),
				a = s.n(i),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/config.ts"),
				u = s("./src/reddit/components/BannerAd/index.tsx"),
				h = s("./src/reddit/components/FakeBannerAd/index.tsx"),
				b = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/helpers/adCount/index.ts"),
				v = s("./src/reddit/helpers/trackers/ads.ts"),
				y = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/selectors/platform.ts"),
				k = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				O = s.n(k),
				w = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/lessComponent.tsx");
			const P = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("reddit-components-SidebarNativeAd")]).then(s.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				I = Object(m.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(x.a)(s, r, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch,
					isSubredditOrCommentsPage: e => Object(C.p)(e) === w.Db.SUBREDDIT || Object(C.p)(e) === w.Db.COMMENTS
				}),
				j = Object(l.b)(I),
				S = E.a.wrapped(u.a, "BannerAd", O.a),
				A = E.a.wrapped(f.a, "ThemedWidget", O.a),
				L = E.a.div("SidebarAdPlaceholder", O.a),
				N = e => !(window.aax && window.aax.getAbpStatus && window.aax.getAbpStatus()) && e,
				T = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += `sidebar-${e}`, null != s && (n += `-${s}`), n
				},
				_ = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(y.F)(e.media) && e.media.content)),
				R = e => !!e && e.isBlank,
				M = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				F = Object(g.c)(class extends c.a.Component {
					shouldComponentUpdate(e, t) {
						const {
							className: s,
							redditStyle: n
						} = this.props;
						return s !== e.className || n !== e.redditStyle
					}
					trackViewability(e, t, s) {
						Math.random() <= p.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(v.d)(e, t, s))
					}
					render() {
						const e = a()(0, M.length - 1),
							{
								img: t,
								href: s
							} = M[e],
							{
								className: n,
								placement: r,
								redditStyle: o,
								removeSidebarSpacer: i
							} = this.props,
							d = i ? c.a.Fragment : b.a;
						return c.a.createElement(d, null, c.a.createElement(A, {
							className: n,
							contentOnly: !0,
							redditStyle: o
						}, c.a.createElement(h.a, {
							img: t,
							href: s,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, r)
						})))
					}
				});
			class B extends c.a.Component {
				constructor(e) {
					super(e), this.incrementRefreshCounter = this.incrementRefreshCounter.bind(this), this.state = {
						refreshCount: 0
					}
				}
				incrementRefreshCounter() {
					this.setState(e => ({
						refreshCount: e.refreshCount + 1
					}))
				}
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: r,
						placementIndex: o,
						refreshKey: i,
						listingName: a,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: p,
						forcePlaceholder: u,
						forceHouseAd: h,
						waitForProgrammatic: g,
						isSubredditOrCommentsPage: f,
						removeSidebarSpacer: x
					} = this.props, v = n.fbt._("advertisement", null, {
						hk: "35HaIb"
					}), y = x ? c.a.Fragment : b.a;
					return u || t || !_(s) && g ? c.a.createElement(y, null, c.a.createElement(A, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, c.a.createElement(L, {
						"data-before-content": v
					}))) : h ? c.a.createElement(F, {
						className: e,
						redditStyle: p,
						placement: d,
						removeSidebarSpacer: x
					}) : _(s) ? c.a.createElement(y, null, c.a.createElement(P, {
						post: s,
						refreshKey: i,
						listingName: a,
						placement: d,
						placementIndex: o
					})) : c.a.createElement(y, null, c.a.createElement(A, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, R(s) && c.a.createElement(P, {
						post: s,
						refreshKey: i,
						listingName: a,
						placement: d,
						placementIndex: o
					}), c.a.createElement(S, {
						id: T(d, r, o),
						isRefreshableAd: N(f),
						incrementRefreshCounter: this.incrementRefreshCounter,
						sizes: l,
						placement: d,
						listingName: a,
						refreshKey: i,
						refreshCount: this.state.refreshCount,
						position: m,
						dataBeforeContent: v
					})))
				}
			}
			t.a = j(B)
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/comments.ts"),
				d = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(o.b)((e, {
				postId: t,
				commentsPageKey: s
			}) => ({
				canShowAd: Object(i.a)(e, {
					postId: t
				}) && !Object(c.B)(e) && !Object(d.a)(e),
				waitForProgrammatic: Object(a.d)(e, {
					commentsPageKey: s
				})
			}))(({
				canShowAd: e,
				postId: t,
				commentsPageKey: s,
				...n
			}) => e ? r.a.createElement(l.a, n) : null)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/widgets.ts"),
				m = s("./src/reddit/actions/subreddit.ts"),
				p = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				b = s("./src/reddit/components/SubredditNav/index.m.less"),
				g = s.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = (e, t, s) => Object(u.a)(e, {
					[g.a.mActive]: t
				}, {
					[g.a.topBannerVariant]: s
				}),
				v = ({
					children: e,
					isActive: t,
					isTopBannerVariant: s,
					...n
				}) => r.a.createElement("div", f({
					className: x(g.a.subNavTitle, t, s)
				}, n), r.a.createElement("span", null, e), r.a.createElement(h.b, {
					className: g.a.navDropdownIcon
				})),
				y = ({
					className: e,
					isActive: t,
					to: s,
					isTopBannerVariant: n,
					...o
				}) => {
					const i = x(g.a.navLink, t, n);
					return s ? r.a.createElement(p.a, f({
						className: i,
						to: s
					}, o)) : r.a.createElement("a", f({
						className: i
					}, o))
				},
				C = ({
					className: e,
					isActive: t,
					...s
				}) => r.a.createElement(p.a, f({
					className: x(g.a.navLink, t)
				}, s)),
				k = ({
					className: e,
					isActive: t,
					...s
				}) => r.a.createElement("a", f({
					className: x(g.a.subNavLink, t)
				}, s)),
				O = ({
					className: e,
					...t
				}) => r.a.createElement("div", f({
					className: Object(u.a)(g.a.subNavContainer, e)
				}, t)),
				w = ({
					className: e,
					isOpen: t,
					...s
				}) => r.a.createElement("div", f({
					className: Object(u.a)(g.a.subNavList, e, {
						[g.a.mIsOpen]: t
					})
				}, s)),
				{
					fbt: E
				} = s("./node_modules/fbt/lib/FbtPublic.js");
			const P = Object(i.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var I = Object(d.t)()(Object(o.b)(P, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(m.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? r.a.createElement(C, {
						className: g.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(d.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, E._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				j = s("./src/lib/linkMatchers/index.ts");
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(O, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(v, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(w, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var A = S;
			const L = e => {
				const t = e.url && Object(j.h)(j.f, e.url);
				return t ? t.url : e.url
			};
			var N = e => e.menuItem.url ? r.a.createElement(y, {
					href: L(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(A, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(k, {
					key: `${e.text}-${L(e)}`,
					role: "listitem",
					href: L(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				T = s("./src/reddit/actions/economics/predictions/index.ts"),
				_ = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				R = s("./src/reddit/hooks/usePageLayer.ts"),
				M = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				F = s("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function D({
				subredditId: e
			}) {
				const t = Object(o.d)(),
					s = Object(R.a)(),
					i = Object(_.K)(s),
					[a, d] = Object(n.useState)(!1),
					c = Object(o.e)(t => Object(F.T)(t, {
						subredditId: e
					})),
					l = Object(o.e)(t => Object(F.N)(t, {
						subredditId: e
					})),
					m = Object(o.e)(t => Object(M.d)(t, {
						subredditId: e
					}));
				return Object(n.useEffect)(() => {
					(async () => {
						l && !a && (t(Object(T.b)(c.name)), d(!0))
					})()
				}, [l, a, t, c.name]), l && m ? r.a.createElement(C, {
					className: g.a.metaNavLink,
					isActive: i,
					to: `${c.url}predictions/`
				}, B._("Predictions", null, {
					hk: "Cv5GC"
				})) : null
			}
			var V = s("./src/lib/constants/index.ts");
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const U = Object(d.t)(),
				H = [V.Db.SUBREDDIT, V.Db.COMMENTS, V.Db.COLLECTION_COMMENTS],
				K = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && H.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.L)(t.pageLayer)
				});
			var q = U(Object(o.b)(K, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(m.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isPredictionsPage: o,
						isTopBannerVariant: i,
						onTurnOffMetaFilter: a
					} = e, d = n && !s && !o;
					return r.a.createElement(y, {
						to: t,
						isActive: d,
						isTopBannerVariant: i,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, W._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				z = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				G = s("./src/higherOrderComponents/makeAsync.tsx");
			var Y = Object(G.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				J = s("./src/reddit/constants/postLayout.ts"),
				Q = s("./src/reddit/constants/screenWidths.ts"),
				X = s("./src/reddit/models/Theme/index.ts"),
				Z = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const $ = Object(z.a)(({
				className: e,
				children: t,
				isTopBannerVariant: s,
				...n
			}) => {
				const o = Object(Z.a)(n);
				return r.a.createElement("div", {
					className: Object(u.a)(g.a.outerContainer, e),
					style: {
						position: o.navBar.useOverlay && !s ? "absolute" : "static",
						background: s ? "inherit" : Object(X.g)(o.navBar.backgroundColor, o.navBar.backgroundImage, "tiled")
					}
				}, t)
			});
			var ee = e => r.a.createElement($, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: g.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === J.g.Large ? `${e.maxWidth||Q.a}px` : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(Y, null))),
				te = s("./src/reddit/constants/wiki.ts"),
				se = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var re = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, o = !!n && !!n.meta && n.meta.name === V.Db.SUBREDDIT_WIKI, i = `wiki/${te.i}`, a = t.endsWith("/") ? t + i : `${t}/${i}`;
				return r.a.createElement(y, {
					isActive: o,
					isTopBannerVariant: s,
					to: a,
					onClick: () => e.sendEvent(Object(se.g)())
				}, ne._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const oe = Object(c.a)("spPolls", I),
				ie = Object(d.t)(),
				ae = Object(i.c)({
					layout: d.O,
					widget: l.f
				}),
				de = Object(o.b)(ae);
			t.a = ie(de(Object(a.c)(e => r.a.createElement(ee, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(q, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(oe, {
				subredditId: e.subredditId
			}), r.a.createElement(D, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement(re, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => r.a.createElement(N, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-helmet/es/Helmet.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/pageTitle.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				l = s("./src/reddit/selectors/appBadges.ts");
			const m = Object(a.a)(l.c, e => ({
				badgeCount: e
			}));
			class p extends n.Component {
				constructor() {
					super(...arguments), this.title = Object(d.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(d.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(c.b)(this.props.badgeCount > 0), r.a.createElement(o.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(i.b)(m)(p)
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				p = i.a.div("RuleTitle", c.a);
			t.a = e => o.a.createElement(a.a, {
				className: e.className,
				title: n.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, o.a.createElement(l, null, o.a.createElement(m, null, 1, "."), o.a.createElement(p, null, n.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), o.a.createElement(l, null, o.a.createElement(m, null, 2, "."), o.a.createElement(p, null, n.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), o.a.createElement(l, null, o.a.createElement(m, null, 3, "."), o.a.createElement(p, null, n.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), o.a.createElement(l, null, o.a.createElement(m, null, 4, "."), o.a.createElement(p, null, n.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				HelpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				helpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				UnModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				unModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				ExternalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				externalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				MessageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				MessageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF",
				messageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				x = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/trackers/postFlair.ts"),
				y = s("./src/reddit/models/Widgets/index.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				O = s.n(k);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 129,
				P = Object(b.t)({
					filterName: e => Object(b.T)(e)[h.g],
					url: e => Object(b.Y)(e)
				}),
				I = Object(a.c)({
					subredditId: (e, t) => Object(C.F)(e, t.subredditName)
				}),
				j = Object(i.b)(I),
				S = l.a.div("WidgetContent", O.a),
				A = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: s,
					...n
				}) => o.a.createElement("li", {
					className: Object(d.a)(O.a.StyledFlair, e === y.d.Cloud && O.a.cloudDisplay, {
						[O.a.flairFilter]: t,
						[O.a["m-selected"]]: n.isSelected
					}),
					onMouseDown: s
				}, o.a.createElement(m.b, w({}, n, {
					className: O.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class L extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > E && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(g.o, {
						className: O.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(A, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? E : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: O.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", null, o.a.createElement(A, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), i = e && this.getSelectedFlair(r) || void 0, a = t.order.length > n.length || s && !i;
					return o.a.createElement(u.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(S, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), a && this.renderButton()))
				}
			}
			t.a = P(j(Object(p.c)(L)))
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
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				p = s("./src/reddit/helpers/dom/index.ts"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				f = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				v = s.n(x);
			const y = c.a.div("RuleShortName", v.a),
				C = c.a.div("RuleIndex", v.a),
				k = c.a.div("RuleTitle", v.a),
				O = c.a.div("RuleDescription", v.a),
				w = c.a.wrapped(l.a, "RawHTMLDisplay", v.a),
				E = {};
			class P extends o.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(p.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === f.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !n(e) && !!r;
					return o.a.createElement(y, {
						className: Object(d.a)({
							[v.a.pointerCursor]: i
						}),
						onClick: n(e) || !r ? void 0 : s
					}, o.a.createElement(g.a, null, o.a.createElement(C, null, `${e.humanIndex}.`), o.a.createElement(k, null, `${e.rule.shortName}`), o.a.createElement("div", null, !n(e) && r && (e.isInIcons2020 ? o.a.createElement(u.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}) : t.isVisible ? o.a.createElement(b.a, {
						className: v.a.Chevron
					}) : o.a.createElement(h.a, {
						className: v.a.Chevron
					})))), t.isVisible && o.a.createElement(O, null, e.rule.descriptionRichText ? o.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: E
					}) : e.rule.descriptionHtml ? o.a.createElement(w, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const I = e => {
				const t = Object(a.a)();
				return e.rules.length > 0 ? o.a.createElement(i.a, {
					className: e.className,
					styles: e.styles,
					title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
						hk: "2AwRLk"
					}),
					redditStyle: e.redditStyle
				}, e.rules.map((function(s, n) {
					return o.a.createElement(P, {
						key: `rule${s.shortName}${s.createdUtc}`,
						rule: s,
						display: e.display,
						humanIndex: n + 1,
						isInIcons2020: t
					})
				}))) : null
			};
			t.b = e => o.a.createElement(I, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Re
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/linkMatchers/index.ts"),
				h = s("./src/reddit/models/Image/index.tsx"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/Widgets/Button/index.m.less"),
				y = s.n(v);
			const C = (e, t, s) => {
					let n = {},
						r = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: r,
							textColor: o
						} = e;
						return t && (n = o = s, r = "transparent"), {
							"--widget-button-background-color": `${r||"transparent"}`,
							"--widget-button-border": `1px solid ${n}`,
							"--widget-button-color": `${o||n}`
						}
					})(e, t, s);
					const o = e.hoverState || e;
					if (o.kind === g.f.Image) r = {
						"--widget-button-hover-background-image": `url('${o.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: i
						} = o;
						t && (e = i = s, n = "transparent"), r = {
							"--widget-button-hover-background-color": `${n||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${i||e}`
						}
					}
					return {
						...n,
						...r
					}
				},
				k = e => e.kind === g.f.Image ? y.a.imageButton : y.a.textButton,
				O = e => {
					const t = Object(g.n)(e),
						s = Object(u.h)(u.f, t);
					return s ? s.url : e.url
				},
				w = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(b.a)(e).button;
					return r.a.createElement(c.l, {
						className: k(t),
						style: C(t, s, n)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? y.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: y.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				E = e => r.a.createElement(l.b, {
					href: O(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(w, e)),
				P = p.a.wrapped(a.a, "RawHTMLDisplay", y.a);
			var I = Object(o.b)(() => Object(i.c)({
					forceRedditStyle: f.l,
					isNightmodeOn: x.V
				}))(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(P, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== h.c)).map(t => r.a.createElement(E, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				j = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./src/lib/humanizeDate/index.ts"),
				A = s("./src/reddit/controls/TextButton/index.tsx"),
				L = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				N = s.n(L);
			const T = 100,
				_ = {
					isExpanded: !1
				},
				R = p.a.wrapped(a.a, "RawHTMLDisplay", N.a),
				M = p.a.div("EventContainer", N.a),
				F = p.a.div("EventTitle", N.a),
				B = p.a.div("EventDate", N.a),
				D = p.a.div("EventLocation", N.a),
				V = p.a.div("EventDescription", N.a),
				W = p.a.wrapped(A.a, "ToggleDescription", N.a);
			class U extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = _
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > T ? r.a.createElement(V, null, t.isExpanded ? e.text : e.text.slice(0, T), r.a.createElement(W, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? j.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : j.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : r.a.createElement(V, null, e.text)
				}
			}
			var H = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(M, {
					key: `${s}-${t.title}`
				}, r.a.createElement(F, null, t.titleHtml ? r.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(B, null, Object(S.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${s}:0${n}` : `${s}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(D, null, t.locationHtml ? r.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(U, {
					text: t.description
				})))),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var z = Object(K.c)(e => r.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const G = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				Y = Object(o.b)(G),
				J = (e, t, s) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${s}</body>`;
			class Q extends r.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = J(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, r.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var X = Y(Q),
				Z = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = s.n(Z);
			var ee = p.a.div("ImageFrame", $.a),
				te = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = s.n(te);
			var ne = p.a.img("StyledImage", se.a);
			class re extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						n = r.a.createElement(ee, null, r.a.createElement(ne, {
							alt: j.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: s.url
						}));
					return s.linkUrl ? r.a.createElement(l.b, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var oe = re,
				ie = s("./src/config.ts"),
				ae = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = s("./src/lib/opener/index.ts"),
				ce = s("./src/reddit/components/Flair/index.tsx"),
				le = s("./src/reddit/controls/InternalLink/index.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				pe = s("./src/reddit/models/Flair/index.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				he = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				be = s.n(he);
			const ge = p.a.a("ExternalLink", be.a),
				fe = p.a.div("ModeratorListItem", be.a),
				xe = p.a.div("Username", be.a),
				ve = p.a.wrapped(ce.b, "FlairComponent", be.a),
				ye = e => e.authorFlairType === pe.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				Ce = e => r.a.createElement(xe, null, `u/${e}`),
				ke = p.a.wrapped(le.a, "InternalLink", be.a),
				Oe = p.a.div("LinkContainer", be.a),
				we = Object(i.c)({
					userIsBanned: ue.eb
				});
			var Ee = Object(o.b)(we)(e => {
					const {
						subredditName: t,
						widget: s,
						userIsBanned: n
					} = e;
					return r.a.createElement(d.a, {
						styles: s.styles,
						title: j.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (s.mods && s.mods.length || n) && r.a.createElement(c.n, {
						className: be.a.MessageModsButton,
						rel: de.b,
						target: de.c.BLANK,
						to: `${ie.a.redditUrl}/message/compose?to=/r/${t}`
					}, r.a.createElement(me.a, {
						className: be.a.MessageModsButtonIcon
					}), j.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), s.mods && s.mods.length && !n ? r.a.createElement(r.a.Fragment, null, s.mods.map(e => r.a.createElement(fe, {
						key: e.name
					}, (e => r.a.createElement(ae.a, {
						to: `/user/${e.name}/`
					}, Ce(e.name)))(e), r.a.createElement(ve, {
						flair: ye(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(Oe, null, r.a.createElement(ke, {
						to: `/r/${t}/about/moderators/`
					}, j.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n ? r.a.createElement("div", {
						className: be.a.HelpCenterMessage
					}, j.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", r.a.createElement(ge, {
						href: `${ie.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: de.b,
						target: de.c.BLANK
					}, j.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : r.a.createElement("div", {
						className: be.a.UnModeratedSubreddit
					}, j.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", r.a.createElement(ge, {
						href: `${ie.a.redditUrl}/r/redditrequest`,
						rel: de.b,
						target: de.c.BLANK
					}, j.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", j.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Pe = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ie = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				je = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Se = s.n(je);
			const Ae = p.a.div("WidgetContent", Se.a),
				Le = p.a.wrapped(a.a, "RawHTMLDisplay", Se.a);
			var Ne = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(Ae, null, r.a.createElement(Le, {
					html: e.widget.textHtml || ""
				}))),
				Te = s("./src/reddit/components/Widgets/Base/index.tsx");
			var _e = e => r.a.createElement(Te.b, null, "This widget hasn't been implemented yet!");

			function Re(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Ee;
						case "textarea":
							return Ne;
						case "button":
							return I;
						case "subreddit-rules":
							return Ie.b;
						case "community-list":
							return z;
						case "calendar":
							return H;
						case "image":
							return oe;
						case "custom":
							return X;
						case "post-flair":
							return Pe.a;
						default:
							return _e
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
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
				x = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

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
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage && !Object(v.a)(e, t.listingKey) ? null : Object(y.g)(e, t),
					postsById: (e, t) => Object(C.N)(e, {
						...t
					}),
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: n,
						inSubredditOrProfile: r
					}) => {
						if (n) {
							const n = Object(k.F)(e, s);
							return Object(v.i)(e, {
								subredditId: n,
								listingKey: t
							})
						}
						return Object(C.A)(e, t, s, r)
					}),
					subredditsById: k.ab,
					viewportDataLoaded: O.a,
					pageReferrer: u.R,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: x.d
				},
				I = Object(r.c)(P),
				j = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.E(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.u(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(c.H(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r, o) => {
						e(c.I(t, n, r, o))
					},
					surveyTriggerScrollCounted: () => e(Object(m.h)())
				}),
				S = Object(n.b)(I, j, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(b.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0, s.listingBelowMonthlyVariant),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(E(S(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "d", (function() {
				return C
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/graphql/operations/AddPredictionDrafts.json"),
				o = s("./src/graphql/operations/CreatePredictionTournament.json"),
				i = s("./src/graphql/operations/GetPredictionCoinPackages.json"),
				a = s("./src/graphql/operations/GetTournaments.json"),
				d = s("./src/graphql/operations/ResolvePrediction.json"),
				c = s("./src/graphql/operations/SubredditTopPredictors.json"),
				l = s("./src/graphql/operations/UpdatePredictionTournament.json"),
				m = s("./src/graphql/operations/VotePrediction.json");
			const p = (e, t, s) => Object(n.a)(e, {
					...i,
					variables: {
						subredditName: t,
						includeFreePackage: s
					}
				}),
				u = (e, {
					postId: t,
					optionId: s,
					coinPackageId: r,
					price: o
				}) => Object(n.a)(e, {
					...m,
					variables: {
						input: {
							postId: t,
							optionId: s,
							coinPackageId: r,
							price: o
						}
					}
				}),
				h = (e, {
					postId: t,
					optionId: s
				}) => Object(n.a)(e, {
					...d,
					variables: {
						input: {
							postId: t,
							optionId: s
						}
					}
				});
			var b;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(b || (b = {}));
			const g = (e, {
					subredditId: t,
					period: s,
					top: r,
					includeCurrentRank: o,
					tournamentId: i
				}) => Object(n.a)(e, {
					...c,
					variables: {
						subredditId: t,
						period: s,
						top: r,
						includeCurrentRank: o,
						tournamentId: i
					}
				}),
				f = (e, t) => Object(n.a)(e, {
					...o,
					variables: {
						input: t
					}
				}),
				x = (e, t) => Object(n.a)(e, {
					...a,
					variables: t
				}),
				v = (e, t) => Object(n.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				y = (e, t) => Object(n.a)(e, {
					...l,
					variables: {
						input: t
					}
				}),
				C = (e, t) => Object(n.a)(e, {
					...l,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				r = s("./src/reddit/constants/postLayout.ts");
			const o = Math.floor(100 * Math.random());
			var i;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(i || (i = {}));
			t.b = (e, t, s, i, a) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: r.b[t.prefs.layout]
				};
				return i && !Object(n.a)(i.name) && (d.subreddit = i.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = o, a && (d.position = a), d
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/helpers/parseUrl.ts");
			const r = ["old", "new", "en", "www", "np", "m"],
				o = ["reddit.com", "reddit.local"].concat("").concat(r.map((function(e) {
					return e + ".reddit.com"
				}))).concat(r.map((function(e) {
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
						hostnames: o.concat("redd.it"),
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
							const r = Object(n.a)(t);
							if (!r) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || o).indexOf(r.hostname)) return;
							const i = r.pathname.match(s.pathname);
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
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					...Object(n.defaults)(e),
					media: Object(n.media)(e, t),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e) || Object(n.subredditByPostOrCommentId)(e, t)
				}),
				o = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.post)(t, e),
					...r(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.post)(t, e),
					...r(t, e)
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return p
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "l", (function() {
				return k
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "o", (function() {
				return E
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.defaults(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				i = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...o(e)
				}),
				a = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...o(e)
				}),
				d = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...o(t)
				}),
				c = (e = !1) => d(e ? "create_wiki_page" : "save_wiki_page"),
				l = d("compare_wiki_pages"),
				m = d("revert_wiki_page"),
				p = d("view_wiki_page"),
				u = d("view_source"),
				h = d("add_wiki_page_contributor"),
				b = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				f = d("copy_url"),
				x = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				y = d("ban_wiki_contributor"),
				C = d("unban_wiki_contributor"),
				k = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				O = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				w = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				E = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: r.actionInfo(t, {
						settingValue: O[e]
					})
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = n.Z
		},
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
			}
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("expand",e.isFilled)} ${e.className}`
			}), "Expand", a.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = ({
				className: e
			}) => r.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), r.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), r.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), r.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), r.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), r.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), r.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), r.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), r.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			}))
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
				x = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				v = s.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = Object(o.b)(() => Object(i.c)({
					showFPR: f.I,
					showSuspended: f.P
				})),
				k = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...n
				}) => {
					const o = Object(g.a)({
						theme: s,
						...n
					});
					return r.a.createElement("div", y({
						className: Object(a.a)(v.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${u.h}px` : `${u.i}px`
						}
					}, n))
				});
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return r.a.createElement(m.a, {
							className: Object(a.a)(v.a.fakeOverlayLightboxHeaderWrapper, {
								[v.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(v.a, t))
						}, r.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(k, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), r.a.createElement(c.a.Consumer, null, this.renderWrapper), r.a.createElement(h.a, e))
				}
			}
			t.a = C(O)
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => r.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(o.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => r.a.createElement("div", {
					className: Object(o.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => r.a.createElement("div", {
					className: Object(o.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends r.a.PureComponent {
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
						sidebar: o
					} = this.props;
					return r.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, r.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), o && r.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, o))
				}
			}
			t.a = m
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/get.js"),
				i = s.n(o),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/extractQueryParams/index.ts"),
				p = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				u = s("./src/lib/pageTitle.ts"),
				h = s("./src/lib/truncateText/index.ts"),
				b = s("./src/reddit/components/TitleTagManager/index.tsx"),
				g = s("./src/reddit/constants/history.ts"),
				f = s("./src/reddit/constants/postCollection.ts"),
				x = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/contexts/Post/index.tsx"),
				y = s("./src/reddit/helpers/history/index.ts"),
				C = s("./src/reddit/models/Comment/index.ts"),
				k = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/pages/CommentsPage/index.tsx"),
				w = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				E = s("./src/reddit/selectors/postCollection.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./node_modules/reselect/es/index.js");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = (e, {
					collectionId: t,
					routePrefix: s
				}) => {
					const n = {
							id: t,
							type: x.b[s]
						},
						r = Object(E.q)(e, {
							collectionId: n.id
						});
					if (!r) return "";
					const o = Object(P.L)(e, {
							identifier: n
						}),
						i = Object(u.b)(r.title, o.name).toString();
					return Object(h.a)(i, f.c, l.bb)
				},
				A = Object(c.b)(() => Object(I.c)({
					pageTitle: S,
					primaryPostId: E.p
				}))(e => {
					const t = e.postId || e.primaryPostId;
					return t ? d.a.createElement(v.a, {
						postId: t
					}, d.a.createElement(b.a, {
						title: e.pageTitle
					}), d.a.createElement(O.CommentsPage, j({}, e, {
						postId: t
					}))) : null
				});
			t.default = Object(w.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, g.a.IsOverlay, !1), n = i()(t, g.a.CloseLocation, null), o = i()(t, g.a.ScrollOnLoad, !1);
				o && Object(y.c)(g.a.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: l,
						routePrefix: u,
						subredditName: h,
						collectionId: b
					} = a,
					f = l ? Object(k.r)(l) : void 0,
					x = c && Object(C.f)(c),
					v = r()([...Object(m.a)(e.location.search)]),
					O = {};
				e.hasSortParam && (O.sort = e.sort, O.hasSortParam = !0);
				const w = Object(p.a)(b, f, x, O);
				return d.a.createElement(A, {
					closeLocation: n,
					collectionId: b,
					commentId: x,
					commentsPageKey: w,
					isOverlay: s,
					location: e.location,
					postId: f,
					instanceId: v.instanceId,
					routePrefix: u,
					shouldScrollToComments: o,
					sort: e.sort,
					subredditName: h,
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(o.b)(() => Object(i.c)({
				headComment: p.x,
				post: p.F
			}));
			t.a = Object(c.c)(g(({
				commentId: e,
				headComment: t,
				isOverlay: s,
				post: n,
				postId: o,
				sendEvent: i
			}) => {
				var c;
				if (!n) return null;
				const p = null !== (c = n.numDuplicates) && void 0 !== c ? c : 0,
					u = void 0 !== e,
					g = n.permalink,
					f = p > 0,
					x = Object(l.b)(Object(a.e)(g));
				return u || f ? r.a.createElement("div", {
					className: h.a.CommentsNavigationPane
				}, u && r.a.createElement("div", null, r.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(g)
				}, b._("View all comments", null, {
					hk: "3I5IX9"
				})), t && null !== t.parentId && r.a.createElement(d.a, {
					className: h.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(t.permalink + "?context=8&depth=9")
				}, b._("Show parent comments", null, {
					hk: "AVRCa"
				}))), f && r.a.createElement(d.a, {
					className: h.a.OtherDiscussionsLink,
					isOverlay: s,
					onClick: () => i(Object(m.a)(o)),
					to: x
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
				return ut
			})), s.d(t, "CommentsPage", (function() {
				return Ct
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s.n(r),
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
				x = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/domUtils/index.ts"),
				C = s("./src/lib/fastdom/index.ts"),
				k = s("./src/lib/lessComponent.tsx"),
				O = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				E = s("./src/lib/pageTitle.ts"),
				P = s("./src/lib/performanceTimings/index.tsx"),
				I = s("./src/reddit/actions/ads/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				S = s("./src/reddit/actions/comment/authoring.ts"),
				A = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				L = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				N = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				R = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				M = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				F = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				B = s("./src/reddit/constants/componentSizes.ts"),
				D = s("./src/reddit/constants/elementIds.ts"),
				V = s("./src/reddit/constants/history.ts"),
				W = s("./src/reddit/constants/keycodes.ts"),
				U = s("./src/reddit/constants/posts.ts"),
				H = s("./src/reddit/constants/screenWidths.ts"),
				K = s("./src/reddit/contexts/ApiContext.tsx"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				z = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				G = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Y = s("./src/reddit/featureFlags/profileCollections.ts"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				Q = s("./src/reddit/models/Comment/index.ts"),
				X = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/chatPost.ts"),
				te = s("./src/reddit/selectors/comments.ts"),
				se = s("./src/reddit/selectors/commentSelector.ts"),
				ne = s("./src/reddit/selectors/commentsListTruncated.ts"),
				re = s("./src/reddit/selectors/discoveryUnit.ts"),
				oe = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ie = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ae = s("./src/reddit/selectors/experiments/commentsPageAd.ts"),
				de = s("./src/reddit/selectors/experiments/postSeo.ts"),
				ce = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				le = s("./src/reddit/selectors/experiments/video.ts"),
				me = s("./src/reddit/selectors/meta.ts"),
				pe = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ue = s("./src/reddit/selectors/posts.ts"),
				he = s("./src/reddit/selectors/realtimeComments.ts"),
				be = s("./src/reddit/selectors/subreddit.ts"),
				ge = s("./src/reddit/selectors/tooltip.ts"),
				fe = s("./src/reddit/selectors/user.ts"),
				xe = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				ve = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				ye = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Ce = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ke = s("./src/reddit/components/Comments/index.tsx"),
				Oe = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				we = s("./src/reddit/components/Comments/States/index.tsx"),
				Ee = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Pe = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ie = s("./src/reddit/components/CommentSort/index.tsx"),
				je = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Se = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Ae = s("./src/reddit/components/HeaderImage/index.tsx"),
				Le = s("./src/reddit/components/Hovercards/helpers.ts"),
				Ne = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Te = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				_e = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Re = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Me = s("./src/reddit/components/JumpToContent/index.tsx"),
				Fe = s("./src/reddit/components/PostContent/index.tsx"),
				Be = s("./src/reddit/components/PostTopMeta/index.tsx"),
				De = s("./src/reddit/components/SubredditNav/index.tsx"),
				Ve = s("./src/reddit/components/TitleTagManager/index.tsx"),
				We = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ue = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				He = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Ke = s("./src/reddit/helpers/history/index.ts"),
				qe = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				ze = s("./src/reddit/helpers/postCollection.ts"),
				Ge = s("./src/reddit/helpers/resonatePage/index.ts"),
				Ye = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Je = s("./src/reddit/helpers/trackers/screenview.ts"),
				Qe = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Xe = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Ze = s("./src/reddit/layout/page/Listing/index.tsx"),
				$e = s("./src/reddit/models/ContentGate.ts"),
				et = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				tt = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				st = s("./src/reddit/pages/CommentsPage/index.m.less"),
				nt = s.n(st);

			function rt() {
				return (rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ot = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				it = 80,
				at = 200,
				dt = 80,
				ct = 32,
				lt = Object(n.a)({
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
				mt = Object(n.a)({
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
				pt = Object(n.a)({
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
				ut = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(O.a)(e) : s,
				ht = e => {
					const {
						state: t
					} = e.location, s = a()(t, V.a.IsOverlay, !1), n = a()(t, V.a.CloseLocation, null), r = a()(t, V.a.ScrollOnLoad, !1);
					r && Object(Ke.c)(V.a.ScrollOnLoad);
					const {
						partialCommentId: o,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(Z.r)(i), l = o && Object(Q.f)(o);
					return m.a.createElement(J.a, {
						postId: c
					}, m.a.createElement(Ct, {
						closeLocation: n,
						commentId: l,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: r,
						sort: e.sort,
						subredditName: d
					}))
				},
				bt = Object(q.t)(),
				gt = (e, {
					postId: t
				}) => {
					const s = Object(ue.P)(e, {
							postId: t
						}),
						n = Object(ue.D)(e, {
							postId: t
						});
					if (s && n) {
						return `${e.posts.models[t].title} : ${s.name}`
					}
					return Object(E.c)().toString()
				},
				ft = () => Object(h.c)({
					apiError: te.c,
					apiPending: te.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(ue.P)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					comment: se.a,
					communityBannerDiscoveryUnit: re.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(fe.e)(e, t),
					currentUserShowNSFW: fe.cb,
					dismissedSubreddits: oe.a,
					fullyLoaded: te.u,
					hasModeratorPostPermissions: pe.b,
					headComment: te.x,
					isActionBarAnimationEnabled: G.b,
					isAvatarsInCommentsEnabled: ie.a,
					isChatPost: ee.d,
					isCommentsListTruncated: ne.a,
					isInVideoRemoveScrollingThrottleExperiment: le.b,
					isLoggedIn: fe.K,
					isNightmodeOn: fe.V,
					isRealtimeCommentsExperimentEnabled: he.a,
					isTooltipOpen: (e, t) => !!Object(ge.a)(e),
					newCommentsCount: te.C,
					origin: me.i,
					pageTitle: gt,
					post: te.F,
					postSEOV2IdCardVariant: de.i,
					profileCollectionsEnabled: Y.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: n
					}) => Object(te.s)(e, {
						commentsPageKey: ut({
							postId: t,
							commentId: s,
							commentsPageKey: n
						})
					}),
					shouldOpenPostInNewTab: fe.bb,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(be.x)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: ue.P,
					userHovercardIsOpen: (e, t) => Object(ge.b)(Object(Le.b)({
						itemId: t.postId,
						tooltipIdPrefix: M.a,
						tooltipType: Be.c.StickyPost
					}))(e),
					userPrefs: fe.ub,
					isInCommentsPageAdExperiment: ae.a,
					inResonatePilot: ce.a
				}),
				xt = (e, t) => ({
					dismissTruncation: t => e(Object(xe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(A.a)()),
					setCommentFocus: t => e(j.e({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName,
						sort: t.sort
					})),
					onHideTooltip: () => e(Object(_.i)()),
					onToggleTooltip: t => e(Object(_.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(N.h)()),
					openRegisterModal: () => e(Object(N.j)()),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(A.b)()),
					fetchCommentsNativeAd: t => e(Object(I.a)(t)),
					getIsTrackingCrossposts: t => e(Object(L.b)(t)),
					getPostCrowdControlLevel: t => e(Object(ve.b)(t))
				}),
				vt = Object(p.b)(ft, xt);
			class yt extends m.a.Component {
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
								isInVideoRemoveScrollingThrottleExperiment: n,
								userHovercardIsOpen: r,
								onToggleTooltip: o,
								post: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const d = t === window ? t.scrollY : t ? t.scrollTop : 0,
							c = null !== this.scrollY && Math.abs(d - this.scrollY) > it,
							l = i && i.media && i.media.type === X.o.EMBED ? i.media.provider : null,
							m = i && i.media && X.d.has(i.media.type) && (!l || !X.s.has(l));
						this.scrollY = d, !e && void 0 !== s && d >= s && (this.didScrollPastPost = !0), e && void 0 !== s && d < s && (this.didScrollPastPost = !1, r && C.a.write(() => {
							o(Object(Le.b)({
								itemId: a,
								tooltipIdPrefix: M.a,
								tooltipType: Be.c.StickyPost
							}))
						})), !n && m && this.postScrollItemRef && (this.postPaused || !c && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (c ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * v.G) : (this.postPaused = !1, C.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, C.a.write(this.postScrollItemRef.pauseContent)))
					}, v.G), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(Ye.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(Z.q)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(He.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === W.b.F || e.keyCode === W.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null,
						commentNativeAdId: null
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
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: n,
							isOverlay: r,
							post: o,
							shouldScrollToComments: i
						}
					} = this;
					if (o && !o.isSponsored && !o.isRemoved && o.belongsTo.type !== U.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(o.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (r ? (this.scrollContainerEl = document.getElementById(D.d), i && (t || s) && o && o.numComments ? this.scrollToComments() : C.a.write(() => {
							setTimeout(() => {
								Object(y.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(qe.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(Z.r)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), C.a.read(() => {
							this.props.isOverlay || Object(P.d)(P.c.CommentsPage, n)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						v.Cb.includes(e) && Object(Ge.a)(e)
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
						const e = this.props.post && Object(ze.a)(this.props.post);
						this.props.post && this.props.post.numComments ? C.a.read(this.handleScroll) : C.a.write(() => {
							e || Object(y.c)(this.scrollContainerEl, 0), C.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && C.a.write(() => {
							setTimeout(() => {
								Object(y.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = B.b + (this.props.isOverlay ? B.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const r = (n = this.props.isOverlay ? document.getElementById(D.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								o = Math.abs(r - s),
								i = this.props.isOverlay ? ct : o - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && C.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(y.c)(n, i) : Object(y.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = at
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
					C.a.read(() => {
						const e = document.getElementById(D.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - dt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - dt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), C.a.write(() => {
								Object(y.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => C.a.read(this.handleScroll))
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
					C.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: r,
							isOverlay: o,
							isActionBarAnimationEnabled: i
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const a = g.c.end(t),
							d = !o && i;
						n(Object(Je.c)(t, s, e, f.TimerType.InApp, a, r, d))
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
						subredditName: r
					} = this.props, o = !(!n || !n.isNSFW || t), i = Object(Ue.a)(e, o, r);
					if (!i) return null;
					let a = m.a.createElement(pt, i);
					return s && (a = m.a.createElement(Qe.a, {
						content: a
					})), a
				}
				render() {
					const {
						pageTitle: e
					} = this.props;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Ve.a, {
						title: e
					}), this.renderContent())
				}
				renderContent() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentId: n,
						commentsPageKey: r,
						isNightmodeOn: o,
						isLoggedIn: i,
						isOverlay: a,
						post: d,
						postId: c,
						postSEOV2IdCardVariant: l,
						sort: p,
						sendEvent: u,
						subredditOrProfile: h,
						profileCollectionsEnabled: b,
						isInCommentsPageAdExperiment: g,
						isActionBarAnimationEnabled: f
					} = this.props, y = Object(de.g)(l);
					if (!d) {
						if (t) return m.a.createElement(we.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === v.m ? m.a.createElement(pt, {
							contentGateType: $e.a.PostBlockedForLegalReason
						}) : m.a.createElement(we.d, {
							postId: c,
							commentId: n,
							apiError: e,
							sort: p
						}) : m.a.createElement(we.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const C = this.isCommentPermalink(),
						k = d.belongsTo.type === U.a.PROFILE,
						O = Object(ze.a)(d) && (!k || b),
						w = !i;
					return m.a.createElement(Ot, {
						closeLocation: s,
						commentsPageKey: r,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: i,
						isOverlay: a,
						isSwapVariant: y,
						post: d,
						subredditOrProfile: h,
						shouldFitPageToContent: w,
						isCollectionLayout: O
					}, h && h.isQuarantined && m.a.createElement(Re.a, {
						subredditName: h.name
					}), m.a.createElement(Me.a, null), m.a.createElement("div", {
						className: Object(x.a)(nt.a.PageContentWrapper, {
							[nt.a.LargePageContent]: O,
							[nt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, O && m.a.createElement(mt, {
						isOverlay: a,
						isNightmodeOn: o,
						postId: c
					}), m.a.createElement(ot, {
						condition: O,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: nt.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Fe.a, {
						isCommentPermalink: C,
						isExclusivePost: !0,
						isOverlay: a,
						postId: c,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: u,
						isActionBarAnimationEnabled: f
					}), g && this.state.commentNativeAdId && m.a.createElement(R.a, {
						key: `event-post-id-${d.id}`,
						isOverlay: a,
						postId: this.state.commentNativeAdId
					}), this.renderCommentPanes())), h && !Object($.g)(h) && m.a.createElement(F.a, {
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
						commentId: n,
						commentsPageKey: o,
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
						newCommentsCount: v,
						onOtherDiscussions: y,
						openLoginModal: C,
						openRegisterModal: k,
						origin: O,
						post: E,
						postId: P,
						replyComment: I,
						sendEvent: j,
						sort: A,
						subredditAboutInfo: L,
						subredditOrProfile: N
					} = this.props;
					if (!E) return null;
					const T = this.isCommentPermalink(),
						_ = [],
						R = E.isLocked && !s,
						M = !(T || E.isArchived || L && L.userIsBanned);
					if (R) _.push(m.a.createElement(Te.a, {
						key: "commentThreadBanner",
						subredditOrProfile: N
					}));
					else if (E.isArchived) _.push(m.a.createElement(Ne.a, {
						key: "commentThreadBanner"
					}));
					else if (M && !p && !y)
						if (u) {
							const e = Object(w.a)(b.c.replyToPost, P);
							_.push(m.a.createElement(ye.a, {
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
								}, n) => t ? S.s(P, o, e, s, n) : S.n(P, o, e, s, n),
								submitButtonText: r.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else _.push(m.a.createElement(Ce.a, {
							key: "loggedOutCommentForm",
							location: f,
							openLoginModal: C,
							openRegisterModal: k,
							origin: O
						}));
					if (E.contestMode && _.push(m.a.createElement(_e.a, {
							hasModeratorPostPermissions: d,
							key: "contestModeBanner"
						})), !p && !y && _.push(m.a.createElement(Ie.a, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: h,
							key: "commentSort",
							location: f,
							postId: P,
							sort: A,
							suggestedSort: E.suggestedSort
						}), m.a.createElement(et.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: h,
							key: "commentNavigation",
							postId: P
						})), !t || c || p || y)
						if (!e || c || y)
							if (y) _.push(m.a.createElement(lt, {
								commentSort: A,
								key: "otherDiscussions",
								postId: P,
								isOverlay: h,
								postPermalink: E.permalink
							}));
							else if (p) {
						if (N && N.id) {
							const e = I ? Object(w.a)(b.c.replyToComment, I.id) : Object(w.a)(b.c.replyToPost, P),
								s = ut({
									postId: P,
									commentId: n,
									commentsPageKey: o
								});
							_.push(m.a.createElement(Ee.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !c || !a && t,
								key: "commentsChat",
								postId: P,
								renderedInOverlay: h,
								subredditId: N.id
							}, ({
								scrollToBottom: t
							}) => u ? m.a.createElement(Pe.a, {
								key: "chatCommentsForm",
								postId: P,
								replyComment: I,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: j
							}) : m.a.createElement(Ce.a, {
								key: "loggedOutCommentForm",
								className: nt.a.ChatLoggedOutForm,
								location: f,
								openLoginModal: C,
								openRegisterModal: k,
								origin: O
							})))
						}
					} else _.push(m.a.createElement("div", {
						className: Object(x.a)(nt.a.CommentsPaneWrapper, {
							[nt.a.mIsInOverlay]: h
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Se.a, rt({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: E.numComments,
						onClick: this.handleContentClick
					}), g && v > 0 && m.a.createElement(Oe.a, {
						commentsPageKey: o,
						isActive: !1,
						moreCommentsId: "",
						count: v,
						onMoreCommentsItemClick: i
					}), m.a.createElement(ke.a, {
						commentId: n,
						commentsPageKey: o,
						postId: P,
						renderedInOverlay: h
					})))), e && c ? _.push(m.a.createElement(we.e, {
						key: "commentsErrorState",
						postId: P,
						commentId: n,
						sort: A,
						apiError: e
					})) : !a && t && _.push(m.a.createElement(we.a, {
						isAvatarsInCommentsEnabled: l,
						key: "commentsPlaceholder"
					}));
					else _.push(m.a.createElement(we.e, {
						postId: P,
						commentId: n,
						sort: A,
						apiError: e
					}));
					else this.didRenderLoading = !0, _.push(m.a.createElement(we.a, {
						isAvatarsInCommentsEnabled: l,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(z.a.Provider, {
						value: this.sendEventWithName
					}, _)
				}
			}
			const Ct = bt(Object(K.b)(vt(Object(We.c)(yt)))),
				kt = k.a.wrapped(je.a, "DetailsPageSidebar", nt.a),
				Ot = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: r,
						handleFakeLightboxOverlayClick: o,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: p,
						subredditOrProfile: u
					} = e;
					if (!a && !d) return m.a.createElement(Xe.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: r,
						handleFakeLightboxOverlayClick: o,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(je.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement(Qe.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(je.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? B.i : H.a;
					return m.a.createElement(Ze.a, {
						containerRef: n,
						maxWidth: B.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(Ae.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object($.g)(u) && m.a.createElement(De.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(kt, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object(tt.a)(ht)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
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
					return t && Object(h.r)(t)
				},
				g = (e, t, s) => {
					const n = b(e),
						o = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.f)(t)
						})(e),
						i = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return r()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, o, a)
				},
				f = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				x = Object(a.b)(f);

			function v(e) {
				return x(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, r = g(t, s, n), o = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: r,
						hasSortParam: s,
						onOtherDiscussions: o,
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
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/reselect/es/index.js");
			const r = e => e.dismissedTruncationList,
				o = Object(n.a)((e, {
					subredditOrProfile: t
				}) => t, r, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/constants/postLayout.ts"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => r.e[Object(o.O)(e, {})] === r.d.Card,
				d = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.J
				}) === n.bb.Treatment
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.K, i.J, (e, t) => e || t),
				d = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.x
				}), e => e === r.C.Enabled)
		},
		"./src/reddit/selectors/experiments/commentsPageAd.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.M
				});
				return !!t && !Object(n.yd)(t)
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.sb
				});
				return !(!t || Object(n.yd)(t))
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(r.c)(e, {
				experimentEligibilitySelector: e => !Object(o.d)(e) && "US" === Object(o.b)(e),
				experimentName: n.Nc
			}) === n.Wc.Enabled
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
				return x
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "d", (function() {
				return y
			}));
			var n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(o.T)(e, {
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
					const n = Object(o.X)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : l
				},
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(o.T)(e, {
						subredditId: s
					}) : null
				},
				u = (e, t, s, n, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							i = o && Object(r.D)(e, {
								postId: n
							}) || null,
							a = o && Object(r.D)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				h = [3],
				b = (e, t, {
					listingKey: s
				}) => {
					const n = t.slice().sort();
					let o = -1;
					const i = Object(r.w)(e, {
							listingKey: s
						}),
						a = [];
					return h.forEach(t => {
						let s = o + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !u(e, s, t, i, n);) s += 1;
							s < i.length && (a.push(s), o = s)
						}
					}), a
				},
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				v = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(i.J)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						r = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
				}
		},
		"./src/reddit/selectors/realtimeComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/platform.ts"));
			const i = new Set(["relationship_advice", "sex", "repsneakers", "fashionreps", "tinder", "food", "dating_advice", "skincareaddiction", "sneakers", "justnomil", "childfree", "vegan", "insaneparents", "3dprinting", "woodworking", "homegym", "cooking", "homeimprovement", "raisedbynarcissists", "femaledatingstrategy", "beautyguruchatter", "shittyfoodporn", "loseit", "fitness", "watches", "fundiesnark", "mechanicadvice", "entitledparents", "running", "intermittentfasting", "dating", "parenting", "namenerds", "progresspics", "foodporn", "babybumps", "getmotivated", "crochet", "deadbedrooms", "bjj", "repladies", "keto", "baking", "watchexchange", "curlyhair", "streetwear", "pregnant", "starbucks", "bodybuilding", "malefashionadvice", "breakups", "makeupaddiction", "tattoos", "weddingplanning", "sewing", "reptime", "edc", "piercing", "fashionrepsbst", "diy", "minipainting", "thriftstorehauls", "coffee", "smoking", "beyondthebump", "verifiedfeet", "muslimmarriage", "popping", "fragrance", "kitchenconfidential", "tools", "sneakermarket", "crossstitch", "tryingforababy", "bodyweightfitness", "survivinginfidelity", "theeroticsalon", "diwhy", "flashlight", "knitting", "fasting", "ultralight", "1200isplenty", "homebrewing", "seduction", "camping", "femalefashionadvice", "lego_raffles", "infertility", "askculinary", "polyamory", "malelivingspace", "espresso", "sourdough", "vegetablegardening", "embroidery", "medical", "breakingmom", "vegancirclejerk", "recipes", "breadit", "kibbe", "tacobell", "nattyorjuice", "modelmakers", "eatcheapandhealthy", "xxfitness", "hotpeppers", "bumble", "drunk", "watchuraffle", "weightlossadvice", "indiemakeupandmore", "frugalmalefashion", "forbiddensnacks", "crafts", "hiking", "divorce", "tretinoin", "asianbeauty", "footfetish", "zerowaste", "plasticsurgery", "whiskey", "brogress", "haircarescience", "beautyboxes", "painting", "castiron", "streetwearstartup", "hair", "stepparents", "longdistance", "vegetarian", "nutrition", "beauty", "badmuas", "nootropics", "ttc30", "testosterone", "welding", "showerbeer", "homestead", "muaonthecheap", "kniferaffle", "designerreps", "bourbon", "cocktails", "chefknives", "pizza", "poshmark", "thegirlsurvivalguide", "quittingkratom", "redditlaqueristas", "ipsy", "justnofamily", "tea", "malehairadvice", "beards", "prettyaltgirls", "mercari", "rolex", "traderjoes", "yeezys", "decidingtobebetter", "toddlers", "beer", "makeup", "dhgate", "quilting", "moissanite", "omad", "tfablineporn", "bathandbodyworks", "migraine", "fermentation", "isitbullshit", "breastfeeding", "diabetes", "somethingimade", "wine", "outdoors", "crohnsdisease", "watchescirclejerk", "martialarts", "bbq", "findfashion", "abrathatfits", "accutane", "gainit", "muacjdiscussion", "lushcosmetics", "tattoo", "campinggear", "wetshaving", "ibs", "foreveralonedating", "nails", "chronicpain", "panporn", "raisedbyborderlines", "reduction", "mealprepsunday", "stopsmoking", "wicked_edge", "femalehairadvice", "shitmomgroupssay", "learnart", "engagementrings", "yoga", "cico", "exnocontact", "stretched", "kombucha", "goodyearwelt", "kayaking", "asianparentstories", "healthyfood", "internetparents", "daddit", "crossfit", "gifrecipes", "wewantplates", "acne", "askgirls", "ketorecipes", "justnoso", "bulkorcut", "beautytalkph", "animation", "mead", "orangetheory", "momforaminute", "advancedrunning", "chinatime", "scotch", "powerlifting", "grilling", "cookingforbeginners", "nanny", "family", "opiatesrecovery", "makeupexchange", "kettlebell", "repladiesbst", "bigboobproblems", "love", "adderall", "craftbeer", "mommit", "feetish", "amateur_boxing", "whiskeytribe", "fixit", "celiac", "pelletgrills", "weightlifting", "askparents", "wedding", "breakingdad", "aldi", "narcissisticparents", "veganfitness", "trollingforababy", "starbucksbaristas", "newparents", "steak", "youniqueamua", "ehlersdanlos", "eczema", "hotsauce", "veganrecipes", "howto", "beerporn", "abusiverelationships", "bicycletouring", "snowboarding", "30plusskincare", "fondanthate", "boostedboards", "infertilitybabies", "traeger", "sousvide", "leathercraft", "canberra", "interiordesign", "ivf", "muaythai", "rawdenim", "shoebots", "chipotle", "rowing", "indianskincareaddicts", "dominos", "stupidfood", "blacksmith", "qualityreps", "electronics", "bartenders", "makeuprehab", "stilltrying", "clothdiaps", "plantbaseddiet", "skookum", "plussize", "gettingshredded", "glossier", "supremeclothing", "seiko", "reptimebst", "weddingsunder10k", "swimming", "skincareaddicts", "muacirclejerk", "weightwatchers", "snarkfriends", "workout", "highheels", "veganfoodporn", "gshock", "zerocarb", "spicy", "nonmonogamy", "fitbit", "truechildfree", "womenshealth", "climbharder", "rosacea", "malefashion", "tattoodesigns", "triathlon", "eatsandwiches", "skincareaddictionuk", "trailrunning", "fancyfollicles", "knifemaking", "slowcooking", "wildernessbackpacking", "declutter", "vettech", "jewelry", "tiki", "1500isplenty", "blackhair", "awfuleyebrows", "stockx", "glutenfree", "decaf", "homeschool", "redwingshoes", "subway", "skincare_addiction", "scacirclejerk", "stackadvice", "alcohol", "codependency", "ttcafterloss", "cheese", "malegrooming", "gastricsleeve", "nationalpark", "chefit", "nespresso", "fierceflow", "hydroponics", "longhair", "instantpot", "foodhacks", "ramen", "australianmakeup", "tmj", "toxicparents", "dunksnotdead", "supreme", "scientificnutrition", "handwriting", "carnivore", "weddingdress", "tfabchartstalkers", "adoption", "xxketo4u2", "pregnancyafterloss", "workingmoms", "fitness30plus", "old_recipes", "jeffreestarcosmetics", "womensstreetwear", "techwearclothing", "metalworking", "naturalhair", "fastfood", "seriouseats", "ausskincare", "rum", "caloriecount", "waiting_to_try", "uabat", "miscarriage", "fragranceswap", "flexicas", "random_acts_of_pizza", "sushi", "sneakerscanada", "makeupflatlays", "burgers", "askbaking", "nike", "piercedcock", "gestationaldiabetes", "parentsofmultiples", "makeuplounge", "winemaking", "mclounge", "anorexianervosa", "swatchitforme", "sneakerreps", "tequila", "kennyvsspenny", "makeupaddictioncanada", "indianfood", "tattooedgirls", "iamveryculinary", "flexibility", "52weeksofcooking", "mildlynomil", "sneakerfits", "safe_food", "prisonhooch", "fitnesscirclejerk", "palemua", "fashionadvice", "exvegans", "cookingvideos", "stronglifts5x5", "strength_training", "tallgirls", "dadswhodidnotwantpets", "warts", "ultrarunning", "barber", "strongcurves", "naturalbodybuilding", "february2019bumpers", "biggreenegg", "glasses", "dhgatereps", "keto_food", "overlyspecificedmemes", "frugalfemalefashion", "macarons", "amipregnant", "grilledcheese", "smallbooblove", "palaceclothing", "xxketo", "uglyduckling", "talesfromthepizzaguy", "salsasnobs", "trekbikes", "singleparents", "paralegal", "sharpening", "soylent", "foodscience", "louisvuitton", "nerfmods", "sephora", "adidas", "diet", "moustache", "roasting", "ffacj", "whiskyporn", "hidradenitis", "booty_lovers", "bridezillas", "sebderm", "exercise", "menopause", "eceprofessionals", "custody", "traditionaltattoos", "360waves", "veganuk", "nopoo", "sfr4r", "vintagefashion", "adultchildren", "dessertporn", "budgetfood", "ifseniorclass", "firewater", "drmartens", "legitcheck", "mountaineering", "seikomods", "scacjdiscussion", "whitewater", "nikerunclub", "indieexchange", "reptronics", "footfetishworld", "bodypositive", "deliciouscompliance", "chickfila", "konmari", "diyuk", "bonappetit", "abusiveparents", "wavyhair", "predaddit", "drugstoremua", "ttc_pcos", "supermorbidlyobese", "aerogarden", "drunkencookery", "attachmentparenting", "ketogains", "omegawatches", "skincareexchange", "goruck", "greenhouses", "soda", "dyshidrosis", "gonenatural", "paleo", "diynz", "japanesefood", "sneakerdeals", "weddingphotography", "femalelivingspace", "artisanvideos", "whisky", "ketoaustralia", "ketouk", "covidcookery", "formulafeeders", "estrangedadultchild", "behindtheclosetdoor", "nicuparents", "ketobeginners", "ulta", "myfitnesspal", "tipofmyfork", "koreanbeauty", "artfundamentals", "lesbianfashionadvice", "fitpregnancy", "watchexchangefeedback", "frugalmalefashioncdn", "jumprope", "shave_bazaar", "secondaryinfertility", "cheesemaking", "mexicanfood", "cider", "curlyhairuk", "dadforaminute", "shoes", "christmas", "petitefashionadvice", "singleteenagers", "charcuterie", "ketoscience", "euroskincare", "sugarfreemua", "cowboyboots", "vegande", "happycryingdads", "upcycling", "showerbeergonewild", "moresneakers", "strongman", "fearofgod", "weightgain", "selflove", "water_fasting", "yarnaddicts", "compulsiveskinpicking", "skin", "papajohns", "culinaryplating", "dunkindonuts", "wolfvsgoat", "cautiousbb", "standingdesk", "glitch_art", "austinfood", "whiskago", "repsneakerbst", "personaltraining", "shittygifrecipes", "nootropicsdepot", "bariatricsurgery", "ratemyplate", "babies", "furniturerestoration", "veganism", "choosemyalignment", "hotness", "ladybonersgonemild", "52weeksofbaking", "sexyoutfits", "barista", "makeuporganization", "fosterparents", "blackstonegriddle", "bollywoodfashion", "newborns", "navyblazer", "weighttraining", "crappycontouring", "bravotopchef", "bgccirclejerk", "bromance", "eood", "colourpop", "revengecommunity", "fitmeals", "vegan_food", "theordinaryskincare", "irezumi", "houseplantsuk", "osdd", "edanonymousadults", "bapeheads", "chinesewatches", "bakingnoobs", "cursedfoods", "parents", "breakfastfood", "drpepper", "noses", "march2019bumpers", "emotionalneglect", "japanesestreetwear", "hgtv", "ketodrunk", "smallboobproblems", "toolporn", "askvegans", "veganbeauty", "ethicalfashion", "gyodating", "sushiabomination", "dryfasting", "chinesefood", "benchmade", "dewalt", "njbeer", "makeupfetish", "fragsplits", "divorce_men", "airfryer", "whataburger", "edfood", "fryup", "aimeleondore", "veganbaking", "bluecollarwomen", "snakediet", "flooring", "boostmasterlin", "beardporn", "cake", "putaneggonit", "badparents", "japanesewatches", "vegetarianrecipes", "applewatchfitness", "innout", "mealprep", "jerky", "diybeauty", "skincareflatlays", "myweddingdress", "ifparents", "teespring", "dietandhealth", "repph", "makeupaddicts", "wgtow", "trollmua", "healthy_recipes", "queerception", "fitnessonline", "fashionplus", "monsterenergy", "ifbumpers2019", "todayiwore", "gastricbypass", "hearingaids", "coffeestations", "anycubic", "eloping", "legsgw", "neongenesisevangelion", "twins", "loseweight", "dairyqueen", "mancave", "powerbuilding", "sexybrownwomen", "wings", "couturereps", "cafe", "shoppingaddiction", "puer", "pizzadrivers", "veganchill", "childrenofdeadparents", "bigmenfashionadvice", "fitnessmotivation", "eyebrows", "tshirts", "chocolate", "parkrangers", "maleinfertility", "homeimprovementideas", "legitpiercing", "familyissues", "ifparenting", "kefir", "dcwhisky", "entirebodyexercise", "eustachiantubeclick", "pyrex_love", "breastfeedingsupport", "workouts", "rheumatoidarthritis", "tacos", "customsneakers", "dessert", "pizzahutemployees", "printondemand", "zerowastevegans", "foodievideos", "calmhands", "4hourbodyslowcarb", "eatcheapandvegan", "dyson", "lowcarb", "15minutefood", "swoleacceptance", "justengaged", "vintagesewing", "androgyny", "lactoseintolerant", "stonerfood", "coffeeswap", "wardrobepurge", "glutenfreerecipes", "hotdogs", "repvouch", "wendys", "charcoal", "adamragusea", "veganketo", "friend", "makeuptips", "blacksmithing", "onepotmeals", "bodyacceptance", "unconventionalmakeup", "euphorbiaceae", "whitehousedinners", "lingerieaddiction", "agingparents", "muaconspiracy", "lacqueristas", "monogamy", "randomactsofmakeup", "waiting_to_wed", "preppy", "vegrecipes", "foodscam", "sunflowers", "australianmfa", "badfoodporn", "moderatelygranolamoms", "raisingkids", "offwhitefactory", "vintagefashions", "sandwiches", "sca", "asianbeautyexchange", "rothys", "homefitness", "blendedfamilies", "cosplayers", "vostok", "taylorstitch", "septemberbumpers2017", "milk", "olivemua", "soup", "talesfromthekitchen", "breakfast", "revengexstorm", "vegansnacks", "cleanmakeup", "gucci", "fashion_design", "beginnerfitness", "pinkplants", "rbnchildcare", "narcabuseanddivorce", "perfumes", "fashionwomens35", "desiweddings", "smoothies", "sahp", "justnofil", "agegaprelationship", "vitamix", "baby", "adenium", "best_tattoos", "pandaexpress", "healthyeatingnow", "walstad", "oney", "advancedfitness", "figs", "organicgardening", "fashionporn", "fitnessgirls", "askguys", "kimchi", "dysfunctionalfamily", "veryexpensive", "sausagetalk", "ratemytea", "peeling", "topsecretrecipes", "ketotrees", "biltong", "foodie", "weightlossafterbaby", "makeupeducation", "wewantcups", "thingsmykidsaid", "fatherhood", "todayiate", "ts_withdrawal", "stopdrinkingfitness", "modestdress", "pie", "ketoprogress", "ocdmemes", "posturetipsguide", "fruit", "justnicefits", "cancerfamilysupport", "juicing", "makeupaddictionuk", "cheap_meals", "redhair", "glaucoma", "capsulewardrobe", "mezcal", "mua", "kpopfashion", "getoutofbed", "rawvegan", "foodsafety", "sneakermarketrefs", "glutenfreevegan", "prison", "straightedge", "berries", "buyingforbaby", "wemetonline", "melts", "wallets", "halfevil333", "tanning", "im5andthisismacaroni", "veganfood", "bakeoff", "famnnfp", "uksucculents", "chicagobeer", "dairyfree", "pizzahut", "greeneyed", "childrensbooks", "aj1s", "apartmenthacks", "ketocirclejerk", "braswap", "zpaletteporn", "beautyblogs", "nicotine", "dryagedbeef", "thehighchef", "weddinghashtag", "barbattlestations", "dads", "ketochow", "smokingmeat", "asexualdating", "anorexiarecovery", "budgetcooking", "weddingswap", "coldbrew", "foodhaikus", "restaurant", "shittyfertilityadvice", "kawaii", "cardmaking", "coparenting", "burgerking", "sodastream", "streetwearfits", "wegmans", "shaving", "theketodiet", "jerseymikes", "bpdpartners", "hats", "hot_dog", "veggieshake", "subscriptionboxes", "familiesyouchoose", "food_pantry", "clothingstartups", "avocado", "thehopyard", "topchef", "beerwithaview", "polyfamilies", "adventures", "searchandrescue", "kfc", "cookingcollaboration", "fabrics", "drinking", "trollxweddings", "gingerguys", "lichensclerosus", "planetfitnessmembers", "diplomacy", "wedditnyc", "backpackingdogs", "tegu", "airjordans", "minimal_setups", "koji", "sexeducation", "ketomealseatingnow", "sketchup", "sneakerwatch", "latteart", "cupcakes", "listeningspaces", "hands", "shittingadvice", "canadawhisky", "boba", "cookingtonight", "scandinavianinterior", "dehydrating", "crueltyfree", "makeupartists", "jewelrylove", "lookoftheday", "vegetarianketo", "fiveguys", "handbalancing", "distilling", "sustainablefashion", "repwatch", "bape", "asianeats", "aussiemakeuptrade", "foxbrain", "craftytrolls", "chefknifeswap", "teepublic", "majesticmanes", "ausproperty", "freeletics", "ectopicsupportgroup", "sfx", "mtbtrailbuilding", "crafting", "carhartt", "femalefashion", "80sfastfood", "plcb", "recipeinspiration", "badmakeup", "vedc", "liftingmusic", "beautyinfluencers", "wafflehouse", "crushadvice", "pho", "babyloss", "beautyaddiction", "ketomealprep", "beardtalk", "engaged", "vegetarianism", "glutenfreecooking", "octopus", "liquor", "streeteats", "icecream", "mushroom_cultivation", "satisficing", "mensfashion", "allenedmonds", "underworldmbti", "lesmills", "egg", "bbexchange", "healthyeating", "nailpolish", "mcdonalds", "cosplaybeauties", "rootedporn", "canyoneering", "cocacola", "byuidaho", "datsmiledoe", "meatlessmealprep", "midwives", "veganforbeginners", "makeup101", "psmf", "cosmeticsurgery", "prohealth", "vegetarianfoodporn", "fashionnews", "foodtrucks", "foodphotography", "crocs", "mre", "mimicrecipes", "vegangifrecipes", "tinyhouse", "handbags", "parentinginbulk", "ketodiet", "dinner", "rawring20s", "pins", "caving", "alternativehealth", "singlemothersbychoice", "adopted", "stepmom", "cutekids", "clocks", "jordans", "foodnyc", "naturalbeauty", "chickennuggets", "mom", "accuratelyrateme", "vancouvercraftbeer", "bb30", "trailguides", "canadabeautyexchange", "apartmentdesign", "ketobabies", "smokefire", "btfc", "fruitarian", "customshoes", "caffeine", "bacon", "singledads", "culinary", "filmfashion", "veganity", "foodblog", "shittywoodworking", "peptalkswithpops", "beercirclejerk", "businessfashion", "snacking", "gymshark", "neworleansbeer", "coffee_shop", "perfumeexchange", "tryingforanother", "ketomeals", "easyrecipes", "vodka", "crystalhealing", "fermentedhotsauce", "makeupselfies", "beautydiagrams", "nordicskincare", "shroom", "handtoolrescue", "weightlossfoods", "malefashionmarket", "teenmfa", "tfhcooking", "xxketoover50", "cajunfood", "amazingfitness", "sciencebasedparenting", "myopia", "asiangirlsbeingsexy", "diyweddings", "keto_diet", "fitmama", "breadmachines", "motivationvideos", "henna", "cutyourownhair", "ibsresearch", "florists", "weddingring", "foggypics", "ayurveda", "fastfoodhorrorstories", "helicopterparents", "coffee_roasters", "veganmealprep", "desiketo", "copornot", "foodwishes", "watchhorology", "filipinofood", "ttchealthy", "redditlaqueristaswap", "luxury", "weddingvideography", "allergy", "gainitmeals", "picturesofchina", "mixology", "tdcs", "brownbeauty", "doener", "bmorebourbonsociety", "marfans", "europeanmalefashion", "hypoglycemia", "muscleconfusion", "jewelers", "streetwearsales", "askdad", "landscapingtips", "gaybrosfitness", "hooters", "modulars", "mealplanyourmacros", "repfashion", "ketodessert", "bedding", "socks", "runninglifestyle", "frozendinners", "orthopaedics", "potato", "daddycringe", "accessibility", "veganzerowaste", "xxy", "menswear", "deltaco", "novemberbumpers2017", "haircare", "wholesometeenboys", "stressfreeseason", "askacobbler", "redbull", "worldwhisky", "brownreclusebites", "veganparenting", "trainerroad", "climbingpartners", "ketomealsandrecipes", "fiestaware", "neurofibromatosis", "streetfoodartists", "eggs", "kickwho", "mfacirclejerk", "lymedisease", "deondergrondse", "vegan_travel", "toolsales", "fuckcilantro", "chiropractorzone", "powerwashinggore", "dermatology", "malelifestyle", "projectpan", "neurofeedback", "dysphagia", "grainfather", "wedditgetsfit", "kinobody", "weightlossnews", "ketodietapp", "memantinehcl", "organichealthproducts", "weightlossdiets", "finedining", "fuckingmanly", "antidiet", "condiments", "audiprocdisorder", "popeyes", "exercisepostures", "pez", "onlinefriends", "bys", "wintercycling", "salsa", "outlandishalcoholics", "crossedlegs", "oklahomajoe", "pittsburghbeers", "fastfeeling", "askredditfood", "lioneltrains", "foodnerds", "toolboxmods", "sdam", "irinasabetskaya", "labeer", "yegvegan", "fattylivernafld", "fitlifevideos", "diary", "reebok", "outbreakworld", "modernfashionporn", "davidstea", "ketoconnect", "stepschallenge", "mustard", "pcosandpregnant", "portugalvegan", "xrays", "beercanada", "houstonbeer", "fastfoodreview", "tacticalmedicine", "kidsmeal", "hangovereffect", "misophoniasupport", "deepfried", "fastbuds_family", "adenomyosis", "dnp", "morganeisenberg", "ufyh", "kidsafevideos", "drycleaning", "sobrietyandrecovery", "raptors40k", "eczemabs", "femininenotfeminist", "prosopagnosia", "marriageisbliss", "costumeporn", "motherinlawsfromhell", "32dollars", "sexyness", "breakingeggs", "rabbitreddit", "spinalfusion", "amaro", "freefood", "pistollake", "9round", "purplecoco", "ect", "fmd", "csectioncentral", "dad", "raocdeletes", "olivesplace", "weightlosstechniques", "lgbtweddings", "avascularnecrosis", "naturalnutrition", "bpdrecovery", "marylandeats", "rainbow_babies", "persuasionexperts", "brandy", "nutritionsupport", "stretchedclassifieds", "sanfranciscosecrets", "cmt", "washingtonstategarden", "penpalsover40", "marriedlife", "snowblowers", "queerfamilies", "inlaws", "fragdecants", "fashion", "cordwaining", "treeparents", "autismuk", "bitters", "chd", "sportsmedicine", "stlouisbeer", "bjj_gear", "alopecia_areata", "rbnspouses", "qdoba", "weird_dreams", "psc", "trying2conceive", "asianscuckingpinkies", "blackladiesfitness", "recipegifs", "tfabgrads", "fantasyimages", "gymmotivation", "olivegarden", "girlfriendproblems", "atozplasticsurgery", "foodsandiego", "sneakersreps", "trulieve", "xxweightroom", "floridagardening", "longislandeats", "ghostkitchens", "bento", "lunch", "texasbeer", "sexdolling", "teethdrumming", "mdbeer", "bi4bi", "retinitispigmentosa", "braintumor", "dankrecoverymeme", "shinyfashion", "cozy", "gestationaldiabetics", "randomactsofpetfood", "asianbeautyrehab", "toyreviews", "thoracicoutlet", "canskincare", "hotguysworkingout", "paleolithicketogenic", "paruresis", "supersoil", "bikinisonshow", "makeupfreebies", "astrorelationships", "agricultureporn", "twackedup", "fried", "crueltyfreemua", "carlsjr", "guacmemes", "youtubebeauty", "powerliftingmemes", "budgetweddings", "skincarerehab", "beautifullyenhanced", "thericegoddess", "pottytraining", "finsubteamwork", "hardees", "diamond", "pregnancyproblems", "casualtfab", "condimentpackets", "teenstyle", "ownit", "carpets", "askfastfoodemployees", "erectiledysfunctioned", "selfcare", "snowshoeing", "thingsmadeofchocolate", "paperflowers", "weddingphotographer", "socialworkerstories", "entitledoldpeople", "hownotto", "weddingsolutions", "fitnessguides", "ketogenicdiet", "womensbodybuilding", "foodhack", "kentuckyfriedchicken", "muaeurope", "coffeeoutside", "grease", "freeforallfashion", "vegkc", "closetswap", "onlineclothing", "rhubarbhomies", "grooms", "frugalbeauty", "upliftingvegan", "mito", "lodestone_testing"]);
			var a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const c = e => (e => {
				return Object(a.c)(e, {
					experimentEligibilitySelector: () => Object(d.J)(e),
					experimentName: n.Kc
				}) === n.Uc.Enabled
			})(e) && (e => {
				const t = Object(o.d)(e);
				return !!t && i.has(t.toLowerCase())
			})(e) && r.d.realtimeCommentsExperiment(e)
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = s("./src/reddit/selectors/platform.ts");
			const i = new Date,
				a = i.getUTCFullYear(),
				d = i.getUTCMonth(),
				c = i.getUTCDate(),
				l = Date.UTC(2008, 0, 1),
				m = Date.UTC(a, d - 7, c),
				p = Object(n.a)(e => Object(o.f)(e), e => Object(r.a)(e), (e, t) => e && !!t && !!t.created && t.created > l && t.created < m)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.9a0d94f35e09162bc4f2.js.map