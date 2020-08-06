// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.4ee8cd6b23819f69e598.js
// Retrieved at 8/6/2020, 5:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9", "reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796", "ChatPost~ModQueuePages", "CommentsPage"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var s = Math.floor,
				n = Math.random;
			e.exports = function(e, t) {
				return e + s(n() * (t - e + 1))
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				o = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = o
		},
		"./node_modules/lodash/first.js": function(e, t, s) {
			e.exports = s("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				d = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && o(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (s || e % 1 || t % 1) {
					var l = d();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				o = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var s = a,
					c = d(e, a);
				t = o(t), e -= a;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./src/graphql/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"4f0149888c8c"}')
		},
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/telemetry.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const m = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = b(o.target, o.currentTarget);
					h(o.target, o.currentTarget, u.anchors) ? r && t && e(t(s, r)) : r && t && e(e => {
						const n = t(s, r)(e);
						let o;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							o = l(e, ["pageType"])
						}
						return Object.assign(Object.assign({}, n), {
							actionInfo: Object(d.previousPageActionInfo)(e, o)
						})
					}), h(o.target, o.currentTarget, u.anchorsAndButtons) && n(o)
				}
			});

			function p(e) {
				class t extends i.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return i.a.createElement(e, c({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: m(t, s, n)
						}))
					}
				}
				return Object(a.c)(t)
			}
			const u = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				h = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && h(e.parentElement, t, s)),
				b = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";

			function n(e, t, s, n) {
				const o = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: s ? "UTC" : void 0
				}).format(o)
			}
			s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let n;
			const o = new Map,
				r = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), n = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!r.get(t)) {
						r.set(t, s);
						const n = o.get(t);
						if (n) {
							n(e, s && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const i = (e, t) => {
					try {
						o.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				a = e => {
					try {
						o.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "h", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/linkify-it/index.js"),
				o = s.n(n),
				r = s("./node_modules/tlds/index.js"),
				i = s.n(r),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./node_modules/lodash/values.js"),
				c = s.n(d);
			const l = e => c()(a.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				u = o()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				h = o()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				x = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				g = o()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				f = u.normalize;
			u.normalize = e => {
				f.call(u, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const v = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				C = e => {
					return [...x.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				O = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				y = e => {
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
				o = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const r = Object(o.e)(e),
					i = encodeURIComponent("".concat(t).concat(r));
				return "".concat(n.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(i)
			}
		},
		"./src/reddit/actions/comment/websocket/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return B
			})), s.d(t, "b", (function() {
				return D
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/lodash/first.js")),
				a = s.n(i),
				d = s("./node_modules/lodash/isArray.js"),
				c = s.n(d),
				l = s("./src/reddit/helpers/isComment.ts"),
				m = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/PostCreationForm/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts");
			const x = e => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const t = f(e.attribs);
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
							distinguishType: g(t),
							id: e.name,
							isAdmin: t === p.c.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: t === p.c.Submitter,
							isMod: t === p.c.Moderator,
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
							voteState: b.a.notVoted
						}
					}
				},
				g = e => {
					switch (e) {
						case p.c.Admin:
							return n.C.ADMIN;
						case p.c.Moderator:
							return n.C.MODERATOR;
						case p.c.Alumni:
							return n.C.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				f = e => a()((e || []).filter(e => c()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || p.c.None;
			const v = (e, t, s) => {
				const n = {
						[t]: {}
					},
					{
						author: o,
						author_flair_background_color: r,
						author_flair_richtext: i,
						author_flair_template_id: a,
						author_flair_text: d,
						author_flair_text_color: c,
						author_flair_type: l
					} = s;
				if (o && l) {
					if (l === u.f.Richtext) {
						if (!r || !i) return;
						return {
							[t]: {
								[o]: {
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
						if (!d) return n;
						return {
							[t]: {
								[o]: {
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
			var C = s("./src/lib/env/index.ts");
			const O = new Map,
				y = e => e;
			var E;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment"
			}(E || (E = {}));
			const _ = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				k = (e, t) => {
					const s = y(t),
						n = O.get(s);
					n && n.socket && (n.isClosePlanned = !0, n.socket.close())
				},
				j = (e, t, s, n) => {
					const o = y(t),
						r = O.get(o);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const i = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					O.set(o, i), i.socket.addEventListener("open", () => {
						i.retries = Object.assign({}, _)
					}), i.socket.addEventListener("message", I.bind(null, n)), i.socket.addEventListener("close", w.bind(null, o, n)), i.socket.addEventListener("error", S.bind(null, o)), window && window.addEventListener("beforeunload", k.bind(null, e, t))
				},
				w = (e, t, s) => {
					const n = O.get(e);
					n && (n.isClosePlanned ? O.delete(e) : P(e, t))
				},
				P = (e, t) => {
					const s = O.get(e);
					if (!s) return;
					const {
						retries: {
							backoffTime: n,
							connectionAttempts: o,
							jitterAmount: r,
							maximumRetries: i
						},
						socket: a,
						uniqueId: d,
						url: c
					} = s;
					if (O.delete(e), o < i && a.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, o),
							i = Math.random() * r - r / 2,
							a = Math.round(e + i),
							l = Object.assign(Object.assign({}, s.retries), {
								connectionAttempts: o + 1
							});
						setTimeout(() => {
							j(c, d, l, t)
						}, a), Object(C.a)() && console.debug("Connection reset, retrying in ".concat(a, "ms"))
					}
				},
				I = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(C.a)() && console.error(t)
					}
				},
				S = (e, t) => {
					const s = O.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? O.delete(e) : Object(C.a)() && console.error(t)
				};
			var T = s("./src/reddit/selectors/comments.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/actions/comment/websocket/constants.ts");
			const L = Object(o.a)(M.b),
				R = Object(o.a)(M.c),
				A = Object(o.a)(M.a),
				F = {},
				B = (e, t, s, o) => async (i, a) => {
					(e => {
						const {
							cb: t,
							url: s,
							uniqueId: n
						} = e;
						j(s, n, Object.assign({}, _), t)
					})({
						uniqueId: s,
						url: t,
						cb: t => {
							switch (t.type) {
								case E.NEW_COMMENT: {
									const d = t.payload.name,
										c = x(t.payload),
										l = a(),
										m = Object(r.a)(l, s).sortToUse === n.r.CHAT,
										p = Object(T.n)(l, {
											commentId: d
										}),
										u = !(!d || !F[d]);
									if (c && !u) {
										const s = v(0, o, t.payload),
											n = t.payload.total_comment_count;
										if (void 0 === p) {
											const o = Object(T.x)(l, {
													commentsPageKey: e
												}),
												r = t.payload.parent_id,
												a = Object(T.j)(l, {
													commentId: r,
													commentsPageKey: e
												}),
												d = Object(T.n)(l, {
													commentId: r
												}),
												p = d && d.originId ? d.originId : r,
												u = null === a ? a : a + 1;
											if (m) i(L({
												authorFlair: s,
												comment: c,
												commentsPageKey: e,
												depth: u,
												headCommentId: o,
												isChatSort: m,
												numComments: n,
												originId: p
											}));
											else {
												const t = d && d.originId ? 5e3 : 7e3;
												setTimeout(() => i(L({
													authorFlair: s,
													comment: c,
													commentsPageKey: e,
													depth: u,
													headCommentId: o,
													isChatSort: m,
													numComments: n,
													originId: p
												})), t)
											}
										} else i(R({
											authorFlair: s,
											comment: c,
											commentsPageKey: e,
											isChatSort: m,
											numComments: n
										}))
									}
									break
								}
								case E.UPDATE_COMMENT: {
									const d = t.payload.name,
										c = a(),
										l = Object(T.n)(c, {
											commentId: d
										}),
										m = x(t.payload),
										p = Object(r.a)(c, s).sortToUse === n.r.CHAT;
									if (l && m) {
										const s = v(0, o, t.payload),
											n = t.payload.total_comment_count;
										i(R({
											authorFlair: s,
											comment: m,
											commentsPageKey: e,
											isChatSort: p,
											numComments: n
										}))
									}
									break
								}
								case E.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										n = t.payload.score,
										o = a(),
										r = Object(T.n)(o, {
											commentId: s
										});
									r && i(R({
										comment: Object.assign(Object.assign({}, r), {
											score: n
										}),
										commentsPageKey: e
									}));
									break
								}
								case E.DELETE_COMMENT: {
									const e = t.payload.name,
										s = a(),
										n = Object(T.n)(s, {
											commentId: e
										});
									n && !n.isDeleted ? i(A({
										id: e
									})) : F[e] = E.DELETE_COMMENT;
									break
								}
								case E.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										n = a(),
										o = Object(T.n)(n, {
											commentId: s
										}),
										r = (n.user.account && n.user.account.id) === (o && o.authorId),
										d = !!e && !!Object(N.i)(n, {
											postId: e
										});
									!o || o.isRemoved && o.isDeleted || r || d ? F[s] = E.REMOVE_COMMENT : i(A({
										id: s
									}));
									break
								}
							}
						}
					})
				}, D = (e, t) => async () => {
					k(0, t)
				}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(n.a)(o.a)
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return C
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return O
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return y
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return E
			})), s.d(t, "eventPostsRequested", (function() {
				return _
			})), s.d(t, "startEventNowSuccess", (function() {
				return k
			})), s.d(t, "startEventNowRequested", (function() {
				return j
			})), s.d(t, "editEventTimeSuccess", (function() {
				return w
			})), s.d(t, "editEventTimeRequested", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/graphql/operations/EventPostsBySubredditName.json"),
				c = s("./src/lib/makeGqlRequest/index.ts");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var u = (e, t, s, n, r) => Object(l.a)(Object(m.a)(e, [p.a]), {
				endpoint: "".concat(e.apiUrl, "/api/event_post_time.json"),
				method: o.db.POST,
				data: {
					id: t,
					event_start: s,
					event_end: n,
					event_tz: r
				}
			});
			var h = (e, t) => Object(l.a)(Object(m.a)(e, [p.a]), {
					endpoint: "".concat(e.apiUrl, "/api/start_event_post.json"),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				b = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/selectors/eventPosts.ts"),
				f = s("./src/reddit/selectors/posts.ts");
			const v = () => n.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				C = Object(r.a)(i.e),
				O = Object(r.a)(i.c),
				y = Object(r.a)(i.b),
				E = Object(r.a)(i.d),
				_ = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n, r = s();
					const i = Object(g.d)(r, {
							subredditName: e
						}),
						l = Object(g.b)(r, {
							subredditName: e
						}),
						m = Object(g.c)(r, {
							subredditName: e
						}),
						p = Object(g.a)(r, {
							subredditName: e
						}),
						u = l && m;
					if (i) return;
					const h = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) h.nonInclusiveCursor = p;
					else if (l && !m) return;
					const f = Object(g.e)(r, {
						subredditName: e
					});
					t(C({
						key: f
					}));
					const _ = await ((e, t) => Object(c.a)(e, Object.assign(Object.assign({}, d), {
						variables: t
					})))(o(), h);
					if (_.ok) {
						const {
							subredditInfoByName: e
						} = _.body.data, {
							eventPosts: n
						} = e, o = Object(b.a)(n);
						let i = [],
							a = {};
						const d = n.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						o.length > 0 && (i = o.map(e => e.id), a = o.reduce((e, t) => (e[t.id] = t, e), {})), r = s(), t((u ? E : O)({
							key: f,
							postIds: i,
							meta: r.meta,
							posts: a,
							pageInfo: d
						}))
					} else t(y({
						error: _.error,
						key: f
					})), t(Object(a.e)({
						kind: x.b.Error,
						text: v()
					}))
				}, k = Object(r.a)(i.f), j = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if ((await h(r(), e)).ok) {
						const o = () => n.fbt._("Following event has started successfully: {title}", [n.fbt._param("title", d)], {
							hk: "e9iz9"
						});
						t(k({
							postId: e
						}));
						const r = s(),
							i = Object(f.M)(r, {
								postId: e
							}),
							d = i && i.title || "";
						t(Object(a.e)({
							kind: x.b.SuccessMod,
							text: o()
						}))
					} else t(Object(a.e)({
						kind: x.b.Error,
						text: v()
					}))
				}, w = Object(r.a)(i.a), P = (e, t) => async (s, r, i) => {
					let {
						apiContext: d
					} = i;
					const c = await u(d(), e, t.startDate, t.endDate, t.timezoneName);
					if (c.ok) {
						const t = c.body,
							i = 14400,
							d = Math.round(t.event_start / o.Fb);
						let l = t.event_end;
						const m = {
							eventStart: d,
							eventEnd: l = l && Math.round(l / o.Fb) || d + i,
							eventIsLive: t.event_is_live
						};
						s(w({
							postId: e,
							eventInfo: m
						}));
						const p = r(),
							u = Object(f.M)(p, {
								postId: e
							}),
							h = u && u.title || "",
							b = () => n.fbt._("Following event time is updated successfully: {title}", [n.fbt._param("title", h)], {
								hk: "1m1w1c"
							});
						s(Object(a.e)({
							kind: x.b.SuccessMod,
							text: b()
						}))
					} else s(Object(a.e)({
						kind: x.b.Error,
						text: v()
					}))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return M
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = e => Object.assign({
				api_type: "json",
				show_error_list: !0,
				thing_id: e.post.id,
				validate_on_submit: !0
			}, (e => !(!e.document || !e.document.length))(e) ? (e => ({
				text: null,
				richtext_json: JSON.stringify({
					document: e.document
				})
			}))(e) : (e => ({
				text: e.markdown,
				return_rtjson: !0
			}))(e));
			var b = (e, t) => Object(d.a)(Object(c.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(m.a)("".concat(e.apiUrl, "/api/editusertext"))),
					method: a.db.POST,
					data: h(t)
				}).then(p.b),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				f = s("./src/reddit/helpers/trackers/lightbox.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/helpers/trackers/postComposer.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/PostCreationForm/index.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/actions/postCreation/constants.ts"),
				j = s("./src/reddit/actions/postCreation/general.ts");
			const w = Object(o.a)(k.m),
				P = Object(o.a)(k.n),
				I = Object(o.a)(k.z),
				S = Object(o.a)(k.F),
				T = Object(o.a)(k.G),
				N = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n(),
						a = Object(_.M)(i, {
							postId: e
						});
					t ? (s(Object(x.a)(a.permalink)), Object(f.d)(e, "edit")(i)) : Object(v.b)(e, "edit")(i);
					const {
						media: d
					} = a;
					if (!d) return;
					let c, l = y.h.RICH_TEXT,
						m = "";
					d.type === O.o.TEXT ? (l = y.h.MARKDOWN, m = d.content) : d.type === O.o.RTJSON && (m = (l = d.rteMode || y.h.RICH_TEXT) === y.h.MARKDOWN ? d.markdownContent : d.richtextContent, c = d.mediaMetadata || void 0), s(S({
						editorMode: l,
						mediaMetadata: c,
						postContent: m,
						postId: e
					}))
				}, M = e => async (t, s, o) => {
					let {
						apiContext: a
					} = o;
					const {
						post: d
					} = e, c = !d.media || "rtjson" !== d.media.type && "text" !== d.media.type ? "" : d.media.rteMode;
					C.u(s(), Object(j.o)(c)), t(I(d.id));
					const l = await b(a(), e),
						m = !1 === l.body.success;
					if (t(w(d.id)), l.ok && !m) {
						t(Object(i.e)({
							kind: E.b.SuccessCommunity,
							text: n.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(T(d.id));
						const e = Object(g.a)(l.body);
						t(Object(r.P)({
							[d.id]: e
						}))
					} else t(P(l.error))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
				x = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				f = s.n(g),
				v = s("./src/lib/lessComponent.tsx");
			const C = v.a.div("Container", f.a),
				O = v.a.div("LoadingHitbox", f.a),
				y = e => setTimeout(() => {
					throw e
				}, 0);
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1, this.refreshedOnce = !1, this.refreshInterval = null
				}
				componentDidCatch(e) {
					y(e)
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
					} catch (o) {
						y(o)
					}
				}
				destroySlot() {
					try {
						this.refreshInterval && window.clearInterval(this.refreshInterval), this.frame && l.b(this.frame)
					} catch (e) {
						y(e)
					}
				}
				refreshPeriodically() {
					this.props.isRefreshableAd && null != this.props.incrementRefreshCounter && null != this.props.refreshCount && (this.props.refreshCount >= a.a.dfpRefreshSlotIntervalLimit ? (this.refreshInterval && window.clearInterval(this.refreshInterval), this.refreshInterval = null) : (this.refresh(this.props), this.props.incrementRefreshCounter()))
				}
				async componentDidMount() {
					this.props.sendEvent(Object(x.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						y(e)
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
					return t ? o.a.createElement(C, {
						"data-slot": t
					}, o.a.createElement(O, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), o.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : o.a.createElement("div", {
						className: s
					})
				}
			}
			E.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(r.b)(() => Object(i.c)({
				properties: Object(p.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(u.b)(t.placement, e.user, Object(d.a)("".concat(n).concat(s.url), s.queryParams), Object(h.z)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? l.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(b.c)(E))
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/PostLeftRail/index.tsx"),
				c = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(u),
				b = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				x = s.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(l.t)(),
				v = Object(i.c)({
					isFakeSubreddit: l.x
				}),
				C = Object(r.b)(v),
				O = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(a.a)(e.className, x.a.emptyVerticalVotes)
					}, o.a.createElement(c.d, g({
						key: "u"
					}, t)), e.children, o.a.createElement(c.c, g({
						key: "d"
					}, t)))
				},
				y = () => o.a.createElement(O, null, o.a.createElement("div", {
					className: x.a.emptyScore,
					key: "s"
				}));
			t.b = f(C(e => o.a.createElement("div", {
				className: Object(a.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(d.b, null, o.a.createElement(y, null)), o.a.createElement("div", {
				className: x.a.mainBody
			}, o.a.createElement("div", {
				className: x.a.thumbnailContainer
			}, o.a.createElement("div", {
				className: Object(a.a)(x.a.thumbnail, Object(m.b)(e))
			})), o.a.createElement("div", {
				className: x.a.content
			}, o.a.createElement("div", {
				key: "a"
			}, o.a.createElement("div", {
				key: "aa",
				className: Object(a.a)(x.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "ab",
				className: Object(a.a)(x.a.meta, Object(m.b)(e))
			})), o.a.createElement("div", {
				key: "f",
				className: x.a.flatlist
			}, o.a.createElement("div", {
				key: "fa",
				className: Object(a.a)(x.a.flatlistExpando, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fb",
				className: x.a.flatlistSeparator
			}), o.a.createElement("div", {
				key: "fc",
				className: Object(a.a)(x.a.flatListItemOne, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fd",
				className: Object(a.a)(x.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				x = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				g = Object(i.b)(x),
				f = e => {
					let {
						isCommentBoxDesignEnabled: t,
						isTopLevelComment: s,
						children: n
					} = e;
					return r.a.createElement("div", {
						className: Object(m.a)(u.a.spacer, {
							[u.a.isCommentBoxDesign]: t,
							[u.a.isTopLevelComment]: s
						})
					}, n)
				},
				v = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				C = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				O = e => r.a.createElement(f, e, e.isCommentBoxDesignEnabled ? r.a.createElement(C, null) : r.a.createElement(v, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				y = g(O),
				E = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				_ = e => r.a.createElement(E, h({}, e, {
					fallback: r.a.createElement(y, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = _
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
				o = s.n(n),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = a.a.div("Wrapper", u.a), x = a.a.span("Copy", u.a), g = a.a.wrapped(l.g, "SignupLink", u.a), f = a.a.wrapped(l.j, "LoginLink", u.a);
			t.a = Object(c.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: a,
					openRegisterModal: c,
					origin: l,
					sendEvent: p
				} = e;
				return o.a.createElement(b, {
					className: Object(r.a)(t, {
						[u.a.LiveStreamingWrapper]: s
					})
				}, o.a.createElement(x, {
					className: Object(r.a)({
						[u.a.LiveStreamingCopy]: s
					})
				}, h._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement(f, {
					href: Object(d.a)(n, l, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), a(), p(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("log in", null, {
					hk: "37jFXB"
				})), o.a.createElement(g, {
					className: Object(r.a)({
						[u.a.LiveStreamingSignupLink]: s
					}),
					href: Object(d.a)(n, l, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), c(), p(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("sign up", null, {
					hk: "2GqETx"
				})))
			})
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/index.ts"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				g = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				f = s.n(g);
			const v = h.a.wrapped(x.a, "Show", f.a);
			var C = e => o.a.createElement(b.e, null, !e.comment.isApproved && o.a.createElement(b.c, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(b.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.c, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "VP5J0"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(b.g, null)), o.a.createElement(b.c, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(b.h, null)), o.a.createElement(b.c, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(b.f, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(b.c, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(v, null)));
			const O = h.a.wrapped(l.a, "StyledDropdown", f.a),
				y = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				E = Object(r.b)(y, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(a.H)(s.id)),
						onLockComment: () => e(Object(a.X)(s.id)),
						onRemoveComment: () => e(Object(a.cb)(s.id, !1)),
						onSpamComment: () => e(Object(a.cb)(s.id, !0)),
						onShowComment: () => e(Object(a.Y)(s.id))
					}
				}),
				_ = Object(d.a)(O),
				k = E(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: n,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return o.a.createElement(_, {
						isOpen: s,
						tooltipId: l
					}, o.a.createElement(C, {
						onApproveComment: () => {
							n(), c(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), c(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							a(), c(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = k
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
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				x = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts"),
				v = s("./src/reddit/models/Toast/index.ts");
			const C = (e, t) => async (s, o, r) => {
				let {
					apiContext: i
				} = r;
				const a = await (async (e, t, s) => Object(x.a)(Object(g.a)(e, [f.a]), {
						endpoint: "".concat(e.apiUrl, "/api/set_suggested_sort/"),
						method: c.db.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(i(), e, t),
					d = "error-block-".concat(t),
					l = "success-block-".concat(t);
				if (a.ok) {
					s(Object(h.P)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(b.e({
						id: l,
						kind: v.b.SuccessCommunityGreen,
						text: o
					}))
				} else s(b.e({
					id: d,
					kind: v.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: C(e, t)
				}))
			};
			var O = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				_ = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				P = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const T = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(S.listing)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(S.userSubreddit)(r)
				}),
				N = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				M = e => ({
					subreddit: Object(S.subreddit)(e),
					userSubreddit: Object(S.userSubreddit)(e)
				}),
				L = e => t => Object.assign({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable"
				}, M);
			var R = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = s("./src/reddit/icons/svgs/Info/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/tooltip.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				G = s.n(U),
				K = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts");
			const z = Object(_.a)(j.a),
				q = l.a.wrapped(R.b, "DropdownTriangle", G.a),
				J = l.a.div("HighlightWrapper", G.a),
				X = l.a.div("Title", G.a),
				Q = e => e === K.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === K.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== K.a.None) {
							e(t === K.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", K.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", K.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", K.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentWillUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: o
					} = this.props;
					return r.a.createElement(J, null, r.a.createElement(X, {
						onClick: s
					}, n.fbt._("highlight comments since", null, {
						hk: "3AxAbU"
					})), r.a.createElement(w.b, {
						className: Object(d.a)(G.a.HighlightPicker, G.a.Row),
						displayText: Q(o),
						id: t,
						onClick: s
					}), r.a.createElement(q, {
						onClick: s
					}), r.a.createElement(z, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(w.b, {
						displayText: Q(K.a.First),
						isSelected: o === K.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(w.b, {
						displayText: Q(K.a.Last),
						isSelected: o === K.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(w.b, {
						displayText: Q(K.a.None),
						isSelected: o === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Y = Z;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				se = Object(_.a)(j.a),
				ne = l.a.button("ContestMode", G.a),
				oe = l.a.wrapped(R.b, "DropdownTriangle", G.a),
				re = l.a.wrapped(A.a, "Info", G.a),
				ie = l.a.wrapped(w.b, "Row", G.a),
				ae = l.a.button("SetSort", G.a),
				de = l.a.button("SortLink", G.a),
				ce = l.a.div("Title", G.a),
				le = l.a.wrapped(P.a, "ToggleSwitch", G.a),
				me = l.a.wrapped(E.a, "ViewFullLinkOrOverlayLink", G.a),
				pe = l.a.wrapped(y.c, "Tooltip", G.a),
				ue = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(B.m)(e, {
							commentId: s
						})
					},
					contestModeIsEnabled: W.E,
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(H.b)($),
					highlightIsOpen: Object(H.b)(ee),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(D.i)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					postPermalink: W.L,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(V.p)(e),
							o = !!Object(D.i)(e, {
								postId: s
							}),
							r = Object(W.M)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: B.q
				}),
				he = Object(i.b)(ue, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						changeHighlightSort: t => e(Object(p.J)({
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
						onSetSuggestedSort: t => e(C(s, t)),
						hideTooltip: () => e(Object(m.i)()),
						setContestMode: t => e(Object(h.T)(t, s)),
						showTooltip: () => e(Object(m.h)({
							tooltipId: te
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class be extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(T(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(N("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(L(!this.props.contestModeIsEnabled)), this.props.setContestMode(!this.props.contestModeIsEnabled)
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
						contestModeModalIsOpen: o,
						contestModeIsEnabled: i,
						dropdownIsOpen: a,
						elementRef: l,
						hideTooltip: m,
						highlightIsOpen: p,
						hasModeratorPostPermissions: u,
						isOverlay: h,
						location: b,
						postPermalink: x,
						selectedHighlightSort: g,
						showCommentHighlighter: f,
						sort: v,
						suggestedSort: C,
						showTooltip: y,
						toggleContestModeModal: E
					} = this.props, _ = !b.search.includes(c.r.CONFIDENCE), k = v === c.r.CONFIDENCE && _, j = u && !k, P = c.t[v], S = P ? P() : "", T = C && v === C && !k ? this.addSuggestedLabel(S) : S, M = i ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), L = i ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), R = i ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), A = i && !u;
					return r.a.createElement("div", {
						className: Object(d.a)(t, G.a.container, {
							[G.a.hideCommentSort]: !f && A
						}),
						ref: l
					}, !A && r.a.createElement(ce, {
						onClick: this.onOpenDropdownClick
					}, n.fbt._("Sort by", null, {
						hk: "E6T9r"
					})), !A && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie, {
						className: Object(d.a)(G.a.SortPicker, G.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: T,
						id: $,
						noHover: !0,
						skipRoleAttr: !0
					}), r.a.createElement(oe, {
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(se, {
						isOpen: a,
						tooltipId: $
					}, [c.r.CONFIDENCE, c.r.TOP, c.r.NEW, c.r.CONTROVERSIAL, c.r.OLD, c.r.QA].map(e => {
						const t = s || x,
							n = Object(I.b)(t),
							o = c.t[e],
							i = o ? o() : "";
						return r.a.createElement(me, {
							isOverlay: h,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: "".concat(n, "?sort=").concat(e)
						}, r.a.createElement(w.b, {
							displayText: C && e === C ? this.addSuggestedLabel(i) : i,
							isSelected: v === e,
							skipRoleAttr: !0
						}))
					}))), j && !A && (C ? r.a.createElement(de, {
						onClick: v !== C ? this.setSortOnClick : this.clearSortOnClick
					}, v !== C ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement(ae, null, r.a.createElement(de, {
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: te,
						onMouseEnter: y,
						onMouseLeave: m
					}, r.a.createElement(pe, {
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), r.a.createElement(re, null)))), u && r.a.createElement(ne, {
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(le, {
						on: i
					})), f && r.a.createElement(Y, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: g,
						trackHighlight: N
					}), o && r.a.createElement(O.a, {
						actionText: L,
						headerText: M,
						modalText: R,
						onConfirm: this.setContestMode,
						toggleModal: E,
						withOverlay: !0
					}))
				}
			}
			t.a = he(Object(k.c)(be))
		},
		"./src/reddit/components/Comments/Comment/BubbleHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				bubbleHighlightContainer: "_13gxSQ0PxEaE0KssKdDcgk",
				effectContainer: "_2aXEtvAbqdRvZWJCHd389O",
				bubble: "FS2E8F_poALO3YkEsjObG",
				bubble1: "_1skMl2SFhm_3G21o0XIoMJ",
				scaleLg: "qK9WNHg9kesOYqYx8TUAV",
				float: "_3KTbhZK7RIaOpMPv5hgUAT",
				fade: "_3B6uBl15D8FA8kp66dnL0u",
				bubble2: "_2TnSa3MKonMzsMUc7wTVe4",
				scaleMd: "_3MG3j4wkQBEy1qeo0M2W58",
				bubble3: "_4cXPkz6Y5vjwIRTuejzwP",
				bubble4: "_3itgXY0DPDBmu459AleFdq",
				bubble5: "_1LOEFTDxZKTunybSuKVpB3"
			}
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3XgXkbSTt-EadyaLszfRVf",
				component: "_3XgXkbSTt-EadyaLszfRVf"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
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
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3cuXnOdiXHbT8t5tAaGgKr",
				distinguishShield: "_3cuXnOdiXHbT8t5tAaGgKr",
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Approve: "_19WnAmcAChJM1wTzSOV1p2",
				approve: "_19WnAmcAChJM1wTzSOV1p2",
				Lock: "_1-s5lNmDynkeEE7Z0x-t6q",
				lock: "_1-s5lNmDynkeEE7Z0x-t6q",
				Remove: "_1TzXdATrX8P6QZjY89r6Ln",
				remove: "_1TzXdATrX8P6QZjY89r6Ln",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				Spam: "_2rc9zwviU90yoF6FCv5jvs",
				spam: "_2rc9zwviU90yoF6FCv5jvs",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return A
			})), s.d(t, "a", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/modTools.ts"),
				C = s("./src/reddit/selectors/moderatingComments.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = s("./src/reddit/icons/fonts/helpers.tsx"),
				j = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				w = s.n(j);
			var P = l.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(k.b)("distinguishShield"), " ").concat(e.className)
				}), "DistinguishShield", w.a),
				I = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				N = s("./src/reddit/icons/svgs/Show/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				L = s.n(M),
				R = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const A = l.a.wrapped(b.c, "RestrictedButton", L.a),
				F = l.a.wrapped(_.a, "Approve", L.a),
				B = l.a.wrapped(I.a, "Lock", L.a),
				D = l.a.wrapped(S.a, "Remove", L.a),
				W = l.a.wrapped(T.a, "Spam", L.a),
				H = l.a.wrapped(N.a, "Show", L.a),
				V = l.a.wrapped(P, "DistinguishShield", L.a),
				U = Object(g.t)(),
				G = e => "Distinguish--Dropdown--".concat(e),
				K = Object(a.c)({
					currentUser: E.i,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(C.a)(e, {
							commentId: s.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(y.b)(G(s.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: s
						} = t;
						return Object(g.g)(e, t) || Object(O.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: g.P
				}),
				z = Object(i.b)(K, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(m.H)(s.id)),
						onDistinguishComment: (t, n) => e(Object(m.S)(s.id, t, n)),
						onLockComment: () => e(Object(m.X)(s.id)),
						onRemoveComment: () => e(Object(m.cb)(s.id, !1)),
						onSpamComment: () => e(Object(m.cb)(s.id, !0)),
						onShowComment: () => e(Object(m.Y)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(p.h)({
							tooltipId: G(s.id)
						}))
					}
				});
			t.c = U(z(l.a.wrapped(Object(x.c)(e => {
				var {
					className: t,
					comment: s,
					currentUser: o,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: p,
					onDistinguishComment: b,
					onLockComment: x,
					onRemoveComment: g,
					onShowComment: C,
					onSpamComment: O,
					onToggleDistinguishDropdown: y,
					sendEvent: E
				} = e, _ = R(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const k = Object(f.a)(l),
					j = Object(h.b)(s),
					w = s.isApproved && j,
					P = !!o && o.isEmployee,
					I = !s.isRemoved,
					S = a,
					T = e => E(Object(v.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || j) && r.a.createElement(A, {
					text: w ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						p(), T("approve")
					}
				}, r.a.createElement(F, null)), I && r.a.createElement(r.a.Fragment, null, r.a.createElement(A, {
					text: s.bannedBy === c.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						g(), s.bannedBy === c.k ? T("confirm_remove") : T("remove")
					}
				}, r.a.createElement(D, null)), r.a.createElement(A, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						O(), T("spam")
					}
				}, r.a.createElement(W, null))), r.a.createElement(A, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						x(), T(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(B, null)), i && !P && !s.bannedBy && r.a.createElement(A, {
					className: Object(d.a)({
						[L.a.selected]: _.isDistinguishDropdownOpen
					}),
					onClick: () => {
						T("mod_distinguish_menu"), y()
					}
				}, r.a.createElement(V, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: _.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: P,
					isUserMod: k,
					onDistinguishComment: b,
					sendEventWithName: T,
					tooltipId: G(s.id)
				})), S && r.a.createElement(A, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						C()
					}
				}, r.a.createElement(H, null)))
			}), "CommentModToolsFlatlist", L.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ApproveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				approveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				LockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				lockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AutomoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				automoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				RemoveIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				removeIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				ReportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				reportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				SpamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				spamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/humanizeDateTime/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/constants/modals.ts"),
				g = s("./src/reddit/helpers/trackers/powerups.ts"),
				f = s("./src/reddit/components/AuthorLink/index.tsx"),
				v = s("./src/reddit/components/AwardBadges/index.tsx"),
				C = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				O = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				y = s("./src/reddit/components/Flair/index.tsx"),
				E = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				_ = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				k = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				w = s("./src/reddit/components/PostTopMeta/index.tsx"),
				P = s("./src/reddit/selectors/economics.ts"),
				I = s("./src/reddit/helpers/isRemoved.ts"),
				S = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				T = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				N = s("./src/reddit/actions/comment/index.ts"),
				M = s("./src/reddit/models/Comment/index.ts"),
				L = s("./src/reddit/models/Flair/index.ts"),
				R = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				A = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				F = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				B = s("./src/reddit/icons/fonts/helpers.tsx"),
				D = s("./src/reddit/icons/fonts/Op/index.m.less"),
				W = s.n(D);
			var H = h.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(B.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(B.a, null, e.desc)), "OpIcon", W.a),
				V = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				U = s("./src/reddit/icons/fonts/Report/index.tsx"),
				G = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				K = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				z = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				q = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				J = s("./src/reddit/icons/svgs/Powerup/index.tsx"),
				X = s("./src/reddit/controls/MetaData/index.tsx"),
				Q = s("./src/reddit/selectors/subreddit.ts"),
				Z = s("./src/reddit/selectors/userFlair.ts"),
				Y = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				$ = s.n(Y);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var te = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const se = h.a.wrapped(y.b, "RightPositionedAuthorFlair", $.a),
				ne = h.a.wrapped(R.a, "AdminIcon", $.a),
				oe = h.a.wrapped(A.a, "ApproveIcon", $.a),
				re = h.a.wrapped(F.a, "LockIcon", $.a),
				ie = h.a.div("AdminEmeritus", $.a),
				ae = h.a.wrapped(K.a, "AutomoderatorIcon", $.a),
				de = h.a.wrapped(J.a, "TopSupporterIcon", $.a),
				ce = h.a.wrapped(z.a, "CakeIcon", $.a),
				le = h.a.wrapped(q.a, "ModeratorIcon", $.a),
				me = h.a.wrapped(V.a, "RemoveIcon", $.a),
				pe = h.a.wrapped(U.a, "ReportIcon", $.a),
				ue = h.a.wrapped(G.a, "SpamIcon", $.a),
				he = h.a.wrapped(H, "OpIcon", $.a),
				be = h.a.wrapped(R.a, "ContractorIcon", $.a),
				xe = h.a.a("MetaLink", $.a),
				ge = h.a.wrapped(X.a, "EditedText", $.a),
				fe = h.a.wrapped(X.a, "StickiedText", $.a),
				ve = h.a.span("DeletedText", $.a),
				Ce = h.a.wrapped(X.a, "MetaSeparator", $.a),
				Oe = h.a.wrapped(X.a, "CrowdControlText", $.a),
				ye = h.a.wrapped(_.b, "AuthorHoverCard", $.a),
				Ee = h.a.a("RemovalReason", $.a),
				_e = h.a.wrapped(C.b, "Component", $.a),
				ke = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				je = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				we = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				Pe = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				Ie = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				Se = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Te = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Ne = () => n.fbt._("Powerups Top Supporter", null, {
					hk: "1GLWsz"
				}),
				Me = Object(i.b)(() => Object(a.c)({
					adminTooltipId: ke("CommentTopMeta--Admin--"),
					cakedayTooltipId: ke("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: ke("CommentTopMeta--AdEm--"),
					automodTooltipId: ke("CommentTopMeta--Automod--"),
					approveTooltipId: ke("CommentTopMeta--Approve--"),
					createdTooltipId: ke("CommentTopMeta--Created--"),
					contractorTooltipId: ke("CommentTopMeta--Contractor--"),
					gildedTooltipId: ke("CommentTopMeta--Gold--"),
					lockedTooltipId: ke("CommentTopMeta--Locked--"),
					modTooltipId: ke("CommentTopMeta--Mod--"),
					opTooltipId: ke("CommentTopMeta--OP--"),
					removeTooltipId: ke("CommentTopMeta--Remove--"),
					reportTooltipId: ke("CommentTopMeta--Report--"),
					spamTooltipId: ke("CommentTopMeta--Spam--"),
					topSupporterTooltipId: ke("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(P.r)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(Q.H)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.d)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function s() {
							((e, t, s) => {
								window.removeEventListener("focus", s), e(Object(N.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(N.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, s)
						}))
					},
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(c.i)(x.a.ECON_POWERUPS_PURCHASE)),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Me(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: o,
					cakedayTooltipId: i,
					children: a,
					className: c,
					collapsed: l,
					collapsedBecauseCrowdControl: u,
					comment: h,
					commentsPageKey: b,
					contractorTooltipId: x,
					compact: f,
					flair: C,
					flairPosition: _,
					hasBadges: k,
					isAvatarsInCommentsEnabled: P,
					isLivestreaming: I,
					ignoreFlairPosition: S,
					ignoreLock: T,
					lockedTooltipId: N,
					modTooltipId: R,
					onHideTooltip: A,
					onShowTooltip: F,
					opTooltipId: B,
					openPowerupsModal: D,
					openRemovalReasonModal: W,
					removeTooltipId: H,
					renderContractorBadge: V,
					renderTopSupporterBadge: U,
					renderedInOverlay: G,
					reportTooltipId: K,
					spamTooltipId: z,
					subredditDisplayText: q,
					topSupporterTooltipId: J
				} = e, Q = Object(d.a)();
				if (h.isDeleted) return r.a.createElement(Le, ee({}, e, {
					className: Object(m.a)(c, $.a.container, {
						[$.a.collapsed]: l
					})
				}));
				if (l) return r.a.createElement(Re, ee({}, e, {
					className: Object(m.a)(c, $.a.container, {
						[$.a.collapsed]: l
					})
				}));
				const Z = !S && _ === L.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(c, $.a.container, {
						[$.a.collapsed]: l,
						[$.a.hasBadges]: k,
						[$.a.liveStreaming]: I
					})
				}, C && Z && r.a.createElement(y.b, {
					flair: C,
					forceSmallEmojis: f
				}), !Object(M.d)(h) && r.a.createElement(_e, {
					showAddCustom: !0,
					subredditId: h.subredditId,
					userId: h.authorId,
					uniqueIdentifier: h.id
				}), r.a.createElement(ye, {
					postOrComment: h,
					tooltipType: G ? w.c.Lightbox : void 0
				}, r.a.createElement(O.b, {
					ignore: Object(M.d)(h) || !!h.distinguishType && h.distinguishType !== p.C.NONE,
					subredditId: h.subredditId,
					userId: h.authorId
				}, r.a.createElement(Fe, {
					comment: h,
					isLivestreaming: I,
					isStrong: !!f,
					isAuthorDeleted: Object(M.d)(h)
				}, a && a))), u && r.a.createElement(Oe, null, "Crowd Control"), u && r.a.createElement(X.c, {
					className: $.a.metaText,
					key: "crowdControlSeparator"
				}), C && !Z && r.a.createElement(se, {
					flair: C,
					forceSmallEmojis: f
				}), !f && r.a.createElement(E.a, {
					className: $.a.publicPoints,
					contentId: h.id,
					metaSeparator: r.a.createElement(X.c, {
						className: $.a.metaText
					}),
					subredditId: h.subredditId,
					userId: h.authorId,
					username: h.author
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement(j.b, {
					commentId: h.id
				}), r.a.createElement(j.a, {
					commentId: h.id,
					commentsPageKey: b
				}), r.a.createElement(We, {
					comment: h,
					compact: f,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: i,
					contractorTooltipId: x,
					modTooltipId: R,
					onHideTooltip: A,
					onShowTooltip: F,
					openPowerupsModal: () => {
						Q(Object(g.f)("comment")), D()
					},
					opTooltipId: B,
					renderContractorBadge: V,
					renderTopSupporterBadge: U,
					subredditDisplayText: q,
					topSupporterTooltipId: J
				})), !f && r.a.createElement(r.a.Fragment, null, !h.isDeleted && !P && r.a.createElement(X.b, {
					className: $.a.metaText,
					isScoreHidden: h.isScoreHidden,
					score: h.score
				}), !P && r.a.createElement(X.c, {
					className: $.a.metaText,
					key: "scoreCreatedSeparator"
				}), r.a.createElement(Be, ee({
					key: "Created"
				}, e)), h.isStickied && Ve(), h.editedAt && Ae(h.editedAt)), r.a.createElement(r.a.Fragment, null, r.a.createElement(He, {
					comment: h,
					approveTooltipId: n,
					automodTooltipId: o,
					ignoreLock: T,
					lockedTooltipId: N,
					onHideTooltip: A,
					onShowTooltip: F,
					openRemovalReasonModal: W,
					removeTooltipId: H,
					reportTooltipId: K,
					spamTooltipId: z
				})), r.a.createElement(v.a, {
					thing: h,
					tooltipType: G ? w.c.Lightbox : void 0
				}))
			});
			const Le = e => {
					const {
						childrenInfo: t,
						collapsed: s,
						className: o,
						comment: i
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(ve, null, i.deletedBy === M.a.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Be, ee({
						key: "Created"
					}, e)), s && De({
						childrenInfo: t
					}))
				},
				Re = e => {
					const {
						comment: t,
						className: s,
						childrenInfo: n
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement("div", null, r.a.createElement(Fe, {
						comment: t,
						isAuthorDeleted: Object(M.d)(t)
					})), r.a.createElement(X.b, {
						className: $.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(X.c, {
						className: $.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Be, ee({
						key: "Created"
					}, e)), De({
						childrenInfo: n
					}))
				},
				Ae = e => r.a.createElement(o.Fragment, null, r.a.createElement(X.c, {
					className: $.a.metaText
				}), r.a.createElement(ge, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(b.d)(e))], {
					hk: "1tiB0u"
				}))),
				Fe = e => r.a.createElement(f.a, {
					className: $.a.CommentAuthorLink,
					author: e.comment.author,
					isAdmin: e.comment.isAdmin,
					isAdminEmeritus: e.comment.distinguishType === p.C.ALUMNI_ADMIN,
					isAuthorDeleted: e.isAuthorDeleted,
					isLivestreaming: e.isLivestreaming,
					isMod: e.comment.isMod,
					isOp: e.comment.isOp,
					isStrong: e.isStrong,
					style: e.style
				}, e.children && e.children, e.comment.author);
			class Be extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							onCreatedClick: s
						} = e,
						n = te(e, ["comment", "onCreatedClick"]);
					return r.a.createElement(xe, {
						href: t.permalink,
						id: n.createdTooltipId,
						onClick: s,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: n.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, r.a.createElement("span", null, Object(b.d)(t.created)), Ue(n.createdTooltipId, Object(u.a)(t.created)))
				}
			}
			const De = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return r.a.createElement(Ce, {
					className: $.a.metaText
				}, t ? n.fbt._({
					"*": "More than {number} children",
					_1: "More than 1 child"
				}, [n.fbt._plural(s, "number")], {
					hk: "13XC7a"
				}) : n.fbt._({
					"*": "{number} children",
					_1: "1 child"
				}, [n.fbt._plural(s, "number")], {
					hk: "dhX9w"
				}))
			};
			class We extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = te(e, ["comment"]);
					return r.a.createElement(o.Fragment, null, t.isAuthorCakeday && r.a.createElement(ce, {
						"aria-label": we(),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && Ue(s.cakedayTooltipId, we()), t.isAdmin && r.a.createElement(ne, {
						desc: je(),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && Ue(s.adminTooltipId, je()), t.distinguishType === p.C.ALUMNI_ADMIN && r.a.createElement(ie, {
						"aria-label": Pe(),
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}, "Δ"), t.distinguishType === p.C.ALUMNI_ADMIN && Ue(s.adminEmeritusTooltipId, Pe()), t.isMod && r.a.createElement(le, {
						desc: Ie(s.subredditDisplayText),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && Ue(s.modTooltipId, Ie(s.subredditDisplayText)), t.isOp && r.a.createElement(he, {
						desc: Se(),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && Ue(s.opTooltipId, Se()), s.renderContractorBadge && r.a.createElement(be, {
						desc: Te(),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && Ue(s.contractorTooltipId, Te()), s.renderTopSupporterBadge && r.a.createElement(de, {
						desc: Ne(),
						id: s.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: s.onHideTooltip,
						onClick: s.openPowerupsModal
					}), s.renderTopSupporterBadge && Ue(s.topSupporterTooltipId, Ne()))
				}
			}
			class He extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = te(e, ["comment"]);
					return r.a.createElement(o.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(oe, {
						desc: Object(S.a)(t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && Ue(s.approveTooltipId, Object(S.a)(t)), Object(I.a)(t) && r.a.createElement(me, {
						desc: Object(S.c)(t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(I.a)(t) && Ue(s.removeTooltipId, Object(S.c)(t)), Object(I.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement(Ee, {
						onClick: s.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(I.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement(Ee, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), t.isLocked && !s.ignoreLock && r.a.createElement(re, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && r.a.createElement(ue, {
						desc: Object(S.e)(t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && Ue(s.spamTooltipId, Object(S.e)(t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && r.a.createElement(ae, {
						className: Object(m.a)({
							[$.a.removed]: !!t.bannedBy
						}),
						desc: S.b,
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && Ue(s.automodTooltipId, S.b), Object(T.a)(t) && r.a.createElement(pe, {
						desc: Object(S.d)(t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(T.a)(t) && Ue(s.reportTooltipId, Object(S.d)(t.numReports)))
				}
			}
			const Ve = () => r.a.createElement(o.Fragment, null, r.a.createElement(X.c, {
					className: $.a.metaText
				}), r.a.createElement(fe, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				Ue = (e, t) => r.a.createElement(k.c, {
					tooltipId: e,
					text: t
				})
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
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2"
			}
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				isAwarded: "_3x1wnLNRJ5UQU9fODNc2V4",
				isNightmodeOn: "_1XNv4WhzL_uEQ36cwbjMOe",
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
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = d.a.div("MoreCommentsItemWrapper", u.a), x = d.a.p("MoreComments", u.a), g = d.a.wrapped(x, "MoreCommentsInteractive", u.a), f = Object(i.c)({
				moreCommentsItem: m.B,
				moreCommentsPending: m.C
			}), v = Object(r.b)(f, (e, t) => ({
				moreCommentsClicked: () => e(Object(c.Z)(t.commentsPageKey, t.moreCommentsId))
			})), C = e => {
				let {
					isActive: t,
					moreCommentsClicked: s,
					moreCommentsItem: n,
					moreCommentsPending: r,
					onMoreCommentsItemClick: i,
					count: d
				} = e;
				return o.a.createElement(b, null, r ? o.a.createElement(x, null, h._("loading...", null, {
					hk: "47z89"
				})) : o.a.createElement(l.a.Consumer, null, e => o.a.createElement(g, {
					className: Object(a.a)({
						[u.a.isActive]: t
					}),
					onClick: () => {
						d && i ? i() : s && s(), e("load_more_comment")()
					}
				}, h._({
					"*": "{number of more replies hidden} more replies",
					_1: "1 more reply"
				}, [h._plural(n ? n.numComments : d || 0, "number of more replies hidden")], {
					hk: "J0jQW"
				}))))
			};
			t.b = v(C)
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
				return P
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				x = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				g = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				C = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(O);
			const E = l.a.wrapped(v.a, "CommentsIcon", y.a),
				_ = l.a.wrapped(C.a, "SnooFacepalm", y.a),
				k = l.a.p("EmptyTitle", y.a),
				j = l.a.p("ErrorTitle", y.a),
				w = l.a.p("EmptyText", y.a),
				P = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(y.a.StateContainer, t)
					}, a.a.createElement(E, null), a.a.createElement(k, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(w, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				I = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(k, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(w, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(E, null), a.a.createElement(k, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), a.a.createElement(u.h, {
						to: Object(b.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				T = Object(d.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.q)(s, n, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						onClick: s
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(_, null), a.a.createElement(j, null, t ? Object(h.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), a.a.createElement(u.f, {
						onClick: s
					}, n.fbt._("retry", null, {
						hk: "BoP8d"
					})))
				}),
				N = e => {
					let {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(y.a.StateContainer, y.a.ErrorFullPage)
					}, a.a.createElement(T, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					}))
				},
				M = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", y.a),
				L = l.a.div("CommentsPlaceholderContainer", y.a),
				R = l.a.div("CommentPlaceholder", y.a),
				A = l.a.div("Avatar", y.a),
				F = l.a.div("VoteColumn", y.a),
				B = l.a.div("TextColumn", y.a),
				D = l.a.wrapped(f.b, "Upvote", y.a),
				W = l.a.wrapped(g.b, "Downvote", y.a),
				H = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.TopMetaPlaceholder, Object(x.a)({
						isLoading: !0
					}))
				}),
				V = () => a.a.createElement("div", {
					className: Object(c.a)(y.a.CommentBodyPlaceholder, Object(x.a)({
						isLoading: !0
					}))
				}),
				U = e => a.a.createElement(L, null, r()(10, t => a.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(A, {
					className: Object(x.a)({
						isLoading: !0
					})
				}) : a.a.createElement(F, null, a.a.createElement(D, null), a.a.createElement(W, null)), a.a.createElement(B, null, a.a.createElement(H, null), a.a.createElement(V, null)))))
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
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			let n = {};

			function o(e) {
				return e in n
			}

			function r(e) {
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
			var n = s("./node_modules/lodash/isEqual.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/constants/comments.ts"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/constants/gold.ts"),
				g = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/config.ts"));
			const f = {
				flame: {
					asset: "".concat(g.a.assetPath, "/img/gold/highlight-flame.png"),
					glowColor: "ff4500"
				},
				heart: {
					asset: "".concat(g.a.assetPath, "/img/gold/highlight-heart.png"),
					glowColor: "ff0000"
				}
			};
			var v = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				C = s("./src/reddit/selectors/comments.ts"),
				O = s("./src/reddit/selectors/communityAwards.ts"),
				y = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				k = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				j = s("./src/reddit/models/PostDraft/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				P = s("./src/lib/objectSelector/index.ts"),
				I = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				S = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				T = s("./src/reddit/components/Comments/Comment/BubbleHighlight/index.m.less"),
				N = s.n(T);
			var M = i.a.memo(e => {
					const {
						assetUrl: t
					} = e, [s, n] = Object(r.useState)(!1), o = Object(r.useRef)(null), a = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && n(!0), t <= .001 && n(!1)
						})
					}, []), d = Object(r.useMemo)(() => ({
						threshold: [.75, .001]
					}), []);
					return Object(S.a)(o, a, d), i.a.createElement("div", {
						"aria-role": "presentation",
						className: N.a.bubbleHighlightContainer
					}, i.a.createElement("div", {
						className: N.a.effectContainer,
						ref: o
					}, s && [1, 2, 3, 4, 5].map(e => i.a.createElement("img", {
						key: e,
						className: Object(c.a)(N.a.bubble, N.a["bubble".concat(e)]),
						src: t
					}))))
				}),
				L = s("./src/reddit/icons/fonts/helpers.tsx"),
				R = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				A = s.n(R);
			var F, B, D = m.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(L.b)("expand"), " ").concat(e.className)
				}), "Expand", A.a),
				W = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				H = s.n(W),
				V = m.a.wrapped(e => i.a.createElement("button", e, i.a.createElement(D, null)), "Component", H.a),
				U = s("./node_modules/lodash/defer.js"),
				G = s.n(U),
				K = s("./src/reddit/actions/tooltip.ts"),
				z = s("./src/reddit/selectors/tooltip.ts"),
				q = s("./src/lib/makeCommentPermalink/index.ts"),
				J = s("./src/reddit/actions/gold/modals.ts"),
				X = s("./src/reddit/actions/modal.ts"),
				Q = s("./src/reddit/actions/reportFlow.ts"),
				Z = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				$ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ee = s("./src/reddit/selectors/activeModalId.ts"),
				te = s("./src/reddit/selectors/subreddit.ts"),
				se = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				ne = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				oe = s.n(ne);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(F || (F = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(B || (B = {}));
			const re = (e, t) => {
					const s = oe.a[t],
						n = oe.a[e];
					return Object(c.a)(s, n)
				},
				ie = e => Object(c.a)(oe.a["depth".concat(Math.min(3 * Math.ceil(e.depth / 3), 10))], {
					[oe.a.isInOverlay]: e.isInOverlay,
					[oe.a.isModModeEnabled]: e.isModModeEnabled
				});
			var ae = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				de = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ce = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				le = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				me = s("./src/reddit/components/ModModeReports/helpers.ts"),
				pe = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ue = s("./src/reddit/components/ReportFlow/index.tsx"),
				he = s("./src/reddit/components/ShareMenu/index.tsx"),
				be = s("./src/reddit/components/TrackingHelper/index.tsx"),
				xe = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ge = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				fe = s("./src/reddit/helpers/trackers/modTools.ts"),
				ve = s("./src/reddit/layout/row/Inline/index.tsx"),
				Ce = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Oe = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				ye = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				_e = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ke = s("./src/reddit/icons/fonts/Report/index.tsx"),
				je = s("./src/reddit/icons/fonts/Save/index.tsx"),
				we = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				Pe = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ie = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Se = s.n(Ie);
			const Te = m.a.wrapped(Oe.a, "CommentIcon", Se.a),
				Ne = m.a.wrapped(ke.a, "Report", Se.a),
				Me = m.a.wrapped(Ee.a, "IgnoreReport", Se.a),
				Le = m.a.wrapped(le.a, "ModActionsMenu", Se.a),
				Re = m.a.div("OverflowMenuSpacer", Se.a),
				Ae = m.a.wrapped(pe.a, "DropdownRow", Se.a),
				Fe = m.a.wrapped(ve.a, "Flatlist", Se.a),
				Be = m.a.button("Button", Se.a),
				De = m.a.wrapped(ae.c, "ModToolsFlatlist", Se.a),
				We = m.a.wrapped(xe.a, "ViewReportsDropdown", Se.a),
				He = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ve = e => "Distinguish--Dropdown--".concat(e),
				Ue = e => "".concat(e, "-overflow-menu"),
				Ge = e => "View--Reports--".concat(e),
				Ke = Object(d.c)({
					currentUser: _.i,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ee.a)(e) === He(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.b)(Ve(s.id))(e)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(C.A)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.b)(Ge(s.id))(e)
					},
					isLoggedIn: _.H,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(E.H)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(E.I)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(E.L)(e, {
							postId: s.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(C.H)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(te.w)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(E.Z)(e, {
							postId: s.postId
						})
					}
				});
			class ze extends i.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object($.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(fe.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(fe.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(fe.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						const e = Object(Z.d)(Z.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(fe.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(fe.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(fe.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(fe.b)(e, this.props.comment.id))
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: n,
						depth: o,
						handleReply: a,
						isAvatarsInCommentsEnabled: d,
						isLoggedIn: l,
						isPendingDeletion: m,
						onDistinguishComment: p,
						onIgnoreReports: u,
						onToggleReportsDropdown: h,
						moderatorPermissions: b,
						modModeEnabled: x,
						postIsArchived: g,
						postIsLocked: f,
						postPermalink: v,
						renderedInOverlay: C,
						sendEvent: O,
						subreddit: y,
						subredditAboutInfo: E,
						toggleDeleteCommentModal: _,
						toggleSendReplies: j,
						trackClick: w
					} = this.props, P = Object(Y.a)(b), I = !!s && s.displayText === e.author, S = !!s && s.isEmployee, T = !(E && E.userIsBanned) && (f || g || P && l || e.isLocked ? P && l : l || d), N = Object(me.a)(e), M = P && !x && I && !e.bannedBy, L = I && S && !e.bannedBy, R = M || L, A = s && e.isGildable, D = [];
					T && D.push(i.a.createElement(Be, {
						disabled: m,
						key: "reply",
						onClick: () => {
							a(), G()(() => w("reply")())
						}
					}, i.a.createElement(Te, null), k.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), A && D.push({
						breakpointGroup: B.LoggedInUser,
						icon: i.a.createElement(ye.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => k.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), D.push(i.a.createElement(he.a, {
						dropdownId: "".concat(e.id, "-comment-share-menu"),
						key: "share",
						permalink: Object(q.a)(v, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: y
					}, i.a.createElement(Be, {
						onClick: () => this.sendCommentEventWithName("share")
					}, k.fbt._("share", null, {
						hk: "2oJb1J"
					})))), I || D.push({
						breakpointGroup: B.LoggedInUser,
						icon: i.a.createElement(ke.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => k.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), D.push({
						breakpointGroup: B.LoggedInUser,
						icon: e.isSaved ? i.a.createElement(Ce.f, null) : i.a.createElement(je.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => k.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => k.fbt._("Save", null, {
							hk: "4lbZXG"
						})
					}), I && D.push({
						breakpointGroup: B.LoggedInUser,
						icon: i.a.createElement(we.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => k.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					});
					const W = D.map(e => i.a.isValidElement(e) ? e : i.a.createElement(Be, {
							className: re(e.breakpointGroup, F.HideIfVWSmaller),
							disabled: m,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						H = D.map(e => i.a.isValidElement(e) ? null : i.a.createElement(Ae, {
							className: re(e.breakpointGroup, F.HideIfVWLarger),
							displayText: e.text(),
							iconWrapperClassName: Se.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: Se.a.dropdownRowText
						}, e.icon));
					return i.a.createElement(r.Fragment, null, i.a.createElement(Fe, {
						className: Object(c.a)(ie({
							depth: o,
							isInOverlay: C,
							isModModeEnabled: P && x
						}), t)
					}, W, i.a.createElement(Re, {
						className: I ? void 0 : re(B.LoggedInUser, F.HideIfVWLarger)
					}, i.a.createElement(pe.b, {
						className: Se.a.overflowMenu,
						disabled: m,
						dropdownId: Ue(e.id),
						onClick: () => O(Object(fe.a)("comment_overflow_menu", e.id))
					}, H, I && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ae, {
						displayText: k.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						iconWrapperClassName: Se.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: Se.a.dropdownRowText
					}, i.a.createElement(Pe.b, null)), i.a.createElement(ge.a, {
						text: k.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: j,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && i.a.createElement(de.a, {
						actionText: k.fbt._("delete", null, {
							hk: "1XDeYp"
						}),
						cancelActionText: k.fbt._("keep", null, {
							hk: "bO09f"
						}),
						headerText: k.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: k.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: n,
						toggleModal: _,
						trackClick: () => {},
						withOverlay: !0
					}), P && i.a.createElement(i.a.Fragment, null, x && i.a.createElement(De, {
						className: re(B.Moderator, F.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: I
					}), i.a.createElement(Le, {
						className: x ? re(B.Moderator, F.HideIfVWLarger) : void 0,
						dropdownId: "".concat(e.id, "-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: () => O(Object(fe.a)("comment_mod_action_menu", e.id))
					}, i.a.createElement(_e.a, null), i.a.createElement(se.a, {
						comment: e,
						tooltipId: "".concat(e.id, "-mod-actions-menu")
					}))), Object(me.c)(e) && !x && i.a.createElement(ae.b, {
						text: "".concat(N),
						onClick: () => {
							h(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Ge(e.id)
					}, i.a.createElement(We, {
						model: e,
						onIgnoreReports: () => {
							u(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ge(e.id)
					}), e.ignoreReports ? i.a.createElement(Me, null) : i.a.createElement(Ne, null)), R && i.a.createElement(ae.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, i.a.createElement(ae.a, null), i.a.createElement(ce.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: S,
						isUserMod: P,
						onDistinguishComment: p,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ve(e.id)
					}))), this.props.reportFlowIsOpen && i.a.createElement(ue.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ue.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var qe = Object(a.b)(Ke, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.db)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(X.i)(He(s.id))), e(Object(K.h)({
								tooltipId: Ue(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.V)({
								commentId: s.id,
								draftKey: Object(w.a)(j.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(p.ob)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onDistinguishComment: (t, n) => e(Object(p.S)(s.id, t, n)),
						onGildClick: t => e(Object(J.d)({
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(p.pb)(s.id)),
						onReportClick: () => e(Object(Q.j)(s.id)),
						onToggleSave: () => e(Object(p.gb)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(K.h)({
							tooltipId: Ve(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(K.h)({
							tooltipId: Ge(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(X.i)(He(s.id))),
						toggleSendReplies: () => e(Object(p.hb)(s.id))
					}
				})(Object(be.c)(ze)),
				Je = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Xe = s.n(Je);
			var Qe = i.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return i.a.createElement("div", {
						"aria-role": "presentation",
						className: Xe.a.glowHighlightContainer,
						style: {
							boxShadow: "#".concat(t, " 0px 0px 14px")
						}
					})
				}),
				Ze = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				Ye = s.n(Ze);
			var $e = i.a.memo(e => i.a.createElement("div", {
					"aria-role": "presentation",
					className: Ye.a.gradientHighlightContainer
				})),
				et = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				tt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				st = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				nt = s("./src/reddit/components/ModModeReports/index.tsx"),
				ot = s("./src/reddit/components/PostTopMeta/index.tsx"),
				rt = s("./src/reddit/components/RichTextJson/index.tsx"),
				it = s("./src/reddit/components/UserIcon/index.tsx"),
				at = s("./src/reddit/components/VerticalVotes/index.tsx"),
				dt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				ct = s("./src/reddit/constants/componentTestIds.ts"),
				lt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				mt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				pt = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				ut = s("./node_modules/raf/index.js"),
				ht = s.n(ut);

			function bt() {
				return (bt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var xt = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const gt = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				ft = i.a.createContext(!1);
			class vt extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || ht()(this.setVisible)
					}, this.handleIntersectionChange = e => {
						const t = e.isIntersecting;
						!this.fastIsVisible && t && (this.scheduleVisibilityChange(), this.fastIsVisible = !0)
					}
				}
				render() {
					const e = this.props,
						{
							children: t
						} = e,
						s = xt(e, ["children"]),
						{
							isVisible: n
						} = this.state,
						o = Object.assign(Object.assign({}, gt), s);
					return i.a.createElement(pt.a, bt({}, o, {
						onChange: this.handleIntersectionChange
					}), i.a.createElement("div", null, i.a.createElement(ft.Provider, {
						value: n
					}, t)))
				}
			}
			var Ct = s("./src/reddit/controls/ErrorText/index.tsx"),
				Ot = s("./src/reddit/controls/InternalLink/index.tsx"),
				yt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Et = s("./src/reddit/models/Subreddit/index.ts"),
				_t = s("./src/reddit/models/Vote/index.ts"),
				kt = s("./src/reddit/constants/experiments.ts"),
				jt = s("./src/reddit/helpers/chooseVariant/index.ts");
			const wt = e => {
				const t = Object(jt.c)(e, {
					experimentEligibilitySelector: jt.a,
					experimentName: kt.cb
				});
				return !(!t || Object(kt.Cc)(t))
			};
			var Pt = s("./src/reddit/selectors/gold/powerups.ts"),
				It = s("./src/reddit/selectors/userPrefs.ts"),
				St = s("./src/reddit/selectors/moderatingComments.ts"),
				Tt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Nt = s.n(Tt);

			function Mt() {
				return (Mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Lt = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Rt = m.a.wrapped(V, "ExpandButton", Nt.a),
				At = m.a.wrapped(qe, "FlatList", Nt.a),
				Ft = m.a.wrapped(Ct.b, "ErrorText", Nt.a),
				Bt = m.a.wrapped(at.a, "VerticalVotes", Nt.a),
				Dt = m.a.wrapped(tt.a, "HorizontalVotes", Nt.a),
				Wt = m.a.div("ActionBar", Nt.a),
				Ht = m.a.wrapped(et.a, "TopMeta", Nt.a),
				Vt = m.a.div("CommentContentWrapper", Nt.a),
				Ut = m.a.div("CommentWrapper", Nt.a),
				Gt = m.a.div("CommentBody", Nt.a),
				Kt = m.a.wrapped(st.b, "AuthorHovercard", Nt.a),
				zt = Object(lt.t)(),
				qt = Object(a.b)(() => Object(d.c)({
					comment: (e, t) => Object(C.n)(e, t),
					currentProfileModPermissions: lt.g,
					depth: (e, t) => Object(C.j)(e, t),
					collapsed: St.b,
					collapsedBecauseCrowdControl: St.a,
					flair: C.e,
					focused: C.u,
					highlightAnimationEnabled: e => (e => {
						const t = Object(jt.c)(e, {
							experimentEligibilitySelector: jt.a,
							experimentName: kt.ab
						});
						return !(!t || Object(kt.Cc)(t))
					})(e) && !Object(It.c)(e),
					highlightTagsEnabled: wt,
					isEditing: C.z,
					isLoggedIn: _.H,
					isPendingDeletion: C.A,
					moderatorPermissions: (e, t) => {
						const s = Object(C.n)(e, t);
						return s ? Object(y.j)(e, {
							subredditId: s.subredditId
						}) : null
					},
					isTopSupporter: (e, t) => {
						const s = Object(C.n)(e, t);
						if (!s) return !1;
						const n = Object(lt.q)(e, t);
						return !!n && Object(Pt.a)(e, {
							subredditId: n.id,
							userId: s.authorId
						})
					},
					modModeEnabled: lt.P,
					errorMsgs: C.F,
					replyFormOpen: C.I,
					subreddit: lt.q,
					subredditType: C.K
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: o,
						trackClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(p.nb)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(p.pb)(s)),
						onVoteClick: t => {
							const [n, o] = t === _t.a.upvoted ? [Object(p.rb)(s), "upvote_comment"] : [Object(p.T)(s), "downvote_comment"];
							r(o)(), e(n)
						}
					}
				}),
				Jt = Object(P.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Xt = zt(qt(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: o,
						collapsed: a,
						collapsedBecauseCrowdControl: d,
						currentProfileModPermissions: l,
						depth: m,
						errorMsgs: u,
						flair: h,
						focused: b,
						hasAwardGradient: x,
						highlightAnimationEnabled: g,
						highlightTagsEnabled: f,
						highlightTreatmentParams: v,
						isActive: C,
						isAvatarsInCommentsEnabled: O,
						isEditing: y,
						isHighlighted: E,
						isLoggedIn: _,
						isPendingDeletion: P,
						isTopSupporter: S,
						moderatorPermissions: T,
						modModeEnabled: N,
						onCollapseClick: L,
						onIgnoreReports: R,
						onLineMouseOver: A,
						onVoteClick: F,
						replyFormOpen: B,
						subreddit: D,
						trackClick: W,
						renderedInOverlay: H,
						subredditType: V
					} = e, U = n.isDeleted, G = !y && !U && !!u && u.length > 0, K = Object(w.a)(j.c.edit, n.id), z = Object(w.a)(j.c.replyToComment, n.id), q = Object(Y.a)(T), J = n.authorIsContractor && V === Et.d.EmployeesOnly, X = n.isLocked, Q = f && v && v.glowHexColor, Z = f && v && v.bubbleTreatmentAssetUrl, $ = f, ee = q && N, te = !y && !U && (_ || O), se = Object(r.useContext)(ft);
					return i.a.createElement(Ut, {
						className: Object(c.a)("Comment ".concat(n.id), Nt.a.CommentWrapper, {
							[Nt.a.highlightComment]: E && $,
							[Nt.a.deleted]: U,
							[Nt.a.focused]: b,
							[Nt.a.redesign]: O,
							[Nt.a.topLevel]: !m
						})
					}, !U && !a && Z && g && i.a.createElement(M, {
						assetUrl: Z
					}), !U && !a && Q && i.a.createElement(Qe, {
						hexColor: Q
					}), !U && !a && !Q && x && i.a.createElement($e, null), a && i.a.createElement(Rt, {
						className: n.id,
						onClick: () => {
							s(), L(), W("collapse")()
						},
						onMouseOver: () => A(n.id),
						onMouseOut: s
					}), !a && (O ? i.a.createElement(Kt, {
						alwaysShowChildren: !0,
						hoverDivClassName: Nt.a.AuthorHoverDiv,
						postOrComment: n,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: H ? ot.c.Lightbox : void 0
					}, i.a.createElement(Ot.a, {
						className: Nt.a.UserIconContainer,
						to: "/user/".concat(n.author, "/")
					}, se ? i.a.createElement(it.a, {
						className: Nt.a.UserIcon,
						iconUrl: n.profileImage,
						isNSFW: n.profileOver18 || !1,
						nsfwIconUrl: "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png",
						userName: n.author
					}) : i.a.createElement("div", {
						className: Nt.a.UserIcon
					}))) : U ? null : i.a.createElement(Bt, {
						compact: !0,
						downvoteButtonClassName: Nt.a.voteButton,
						downvoteClassName: Nt.a.upDownVote,
						model: n,
						onVoteClick: F,
						upvoteButtonClassName: Nt.a.voteButton,
						upvoteClassName: Nt.a.upDownVote
					})), i.a.createElement(Vt, {
						className: Object(c.a)({
							[Nt.a.highlightComment]: E && !$,
							[Nt.a.isActive]: C,
							[Nt.a.isCollapsed]: a,
							[Nt.a.isLocked]: X && (!f || ee),
							[Nt.a.isPendingDeletion]: P,
							[Nt.a.isRemoved]: !!n.bannedBy && (!f || ee)
						})
					}, i.a.createElement(yt.a, null, k.fbt._("level {depth}", [k.fbt._param("depth", m + 1)], {
						hk: "2XnyAV"
					})), i.a.createElement(Ht, {
						childrenInfo: t,
						className: Object(c.a)({
							[Nt.a.collapsed]: a
						}),
						collapsed: a,
						collapsedBecauseCrowdControl: d,
						comment: n,
						commentsPageKey: o,
						flair: h,
						isAvatarsInCommentsEnabled: O,
						renderedInOverlay: H,
						renderContractorBadge: J,
						renderTopSupporterBadge: S
					}), !a && i.a.createElement(r.Fragment, null, y && i.a.createElement(I.a, {
						className: Object(c.a)(Nt.a.EditCommentForm, Nt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: j.c.edit,
						draftKey: K,
						rtJson: Object(dt.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(p.eb)({
							id: n.id,
							commentsPageKey: o,
							depth: m,
							draftKey: K,
							formData: e
						}),
						submitButtonText: k.fbt._("save edits", null, {
							hk: "3xLSWW"
						})
					}), !y && !U && i.a.createElement(Gt, {
						"data-test-id": ct.d
					}, i.a.createElement(rt.a, {
						content: Object(dt.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: Jt(e)
					})), N && q && Object(me.c)(n) && i.a.createElement(nt.a, {
						onIgnoreReports: R,
						reportable: n
					}), te && i.a.createElement(Wt, null, O && i.a.createElement(Dt, {
						downvoteButtonClassName: Nt.a.voteButton,
						downvoteClassName: Nt.a.upDownVote,
						model: n,
						onVoteClick: F,
						scoreClassName: Nt.a.score,
						upvoteButtonClassName: Nt.a.voteButton,
						upvoteClassName: Nt.a.upDownVote
					}), i.a.createElement(At, {
						comment: n,
						commentsPageKey: o,
						depth: m,
						isAvatarsInCommentsEnabled: O,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: N,
						moderatorPermissions: l || T,
						renderedInOverlay: H,
						subreddit: D,
						trackClick: W
					})), G && u.map(e => i.a.createElement(Ft, {
						key: e
					}, e)), B && i.a.createElement(I.a, {
						className: Object(c.a)(Nt.a.EditCommentForm, Nt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: j.c.replyToComment,
						draftKey: z,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: (e, t) => {
							var {
								validate: s
							} = e, r = Lt(e, ["validate"]);
							return s ? Object(p.sb)({
								commentsPageKey: o,
								draftKey: z,
								parentCommentDepth: m,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							}) : Object(p.jb)({
								commentsPageKey: o,
								draftKey: z,
								parentCommentDepth: m,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							})
						},
						submitButtonText: k.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var Qt = e => i.a.createElement(mt.a.Consumer, null, t => i.a.createElement(Xt, Mt({}, e, {
					trackClick: t
				}))),
				Zt = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				Yt = s("./src/reddit/contexts/InsideOverlay.tsx"),
				$t = s("./src/reddit/helpers/path/index.ts"),
				es = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				ts = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				ss = s.n(ts);
			const {
				fbt: ns
			} = s("./node_modules/fbt/lib/FbtPublic.js"), os = m.a.div("Wrapper", ss.a), rs = m.a.wrapped(es.a, "ArrowRight", ss.a), is = m.a.wrapped(Zt.a, "LinkOrOverlayLink", ss.a), as = m.a.span("HoverSpan", ss.a), ds = Object(d.c)({
				permalink: (e, t) => Object(C.m)(e, {
					commentId: Object(C.s)(e, t).parentId
				})
			});
			var cs = Object(a.b)(ds)(Object(Yt.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return i.a.createElement(os, {
						className: Object(c.a)({
							[ss.a.isActive]: t
						})
					}, i.a.createElement(is, {
						isOverlay: !!s,
						to: Object($t.b)(n)
					}, i.a.createElement(as, null, ns._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", i.a.createElement(rs, null)))
				})),
				ls = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				ms = s("./node_modules/lodash/times.js"),
				ps = s.n(ms),
				us = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				hs = s.n(us);
			const bs = m.a.wrapped(e => i.a.createElement("div", e, i.a.createElement("i", {
					className: b.m
				})), "Line", hs.a),
				xs = m.a.div("LineContainer", hs.a),
				gs = m.a.div("ShortLineContainer", hs.a);
			var fs = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						isAvatarsInCommentsEnabled: o,
						onLineClick: r,
						onLineMouseOver: a,
						onLineMouseOut: d,
						onShortLineClick: l,
						parentNodeIds: m,
						type: p
					} = e;
					return i.a.createElement(xs, null, ps()(s + 1, e => e === s ? p !== u.a.Comment || t ? null : i.a.createElement(gs, {
						key: m[e]
					}, i.a.createElement(bs, {
						className: Object(c.a)(m[e], {
							[hs.a.hasGlowBorder]: !!n,
							[hs.a.topLevel]: 0 === s,
							[hs.a.redesign]: o
						}),
						onClick: l,
						onMouseOver: () => a(m[e]),
						onMouseOut: () => d(m[e])
					})) : i.a.createElement(bs, {
						className: m[e],
						key: m[e],
						onClick: r(e),
						onMouseOver: () => a(m[e]),
						onMouseOut: () => d(m[e])
					})))
				},
				vs = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Cs = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				Os = s.n(Cs);
			const ys = m.a.div("CommentListNodeWrapper", Os.a),
				Es = e => {
					const t = document.querySelectorAll(".".concat(e));
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(b.f)
				},
				_s = () => {
					const e = document.querySelectorAll(".".concat(b.f));
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(b.f)
				};
			var ks = Object(a.b)(() => Object(d.c)({
				awardingShouldHighlightViaTags: wt,
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(St.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(C.l)(e, t),
				depth: (e, t) => Object(C.j)(e, t),
				highlightTreatmentParams: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(C.l)(e, {
						commentLink: s
					});
					return s.type === u.a.Comment && n ? (e => e.reduce((e, t) => {
						const [s, n, o, r] = t.split(":");
						if ("econ" !== s && "render" !== n) return e;
						if ("glow" === o && (e.glowHexColor = r), "bubble" === o) {
							const {
								asset: t,
								glowColor: s
							} = f[r];
							e.bubbleTreatmentAssetUrl = t, e.glowHexColor = s
						}
						return e
					}, {}))(n.treatmentTags || []) : {}
				},
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isAvatarsInCommentsEnabled: vs.a,
				isAwarded: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(C.l)(e, {
						commentLink: s
					});
					return !(s.type !== u.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(O.a)(e, t);
						return s && s.coinPrice >= x.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(C.q)(e);
					if (n === v.a.None) return !1;
					if (s.type !== u.a.Comment) return !1;
					const o = s.id,
						r = Object(C.n)(e, {
							commentId: o
						});
					if (!r) return !1;
					const i = Object(_.p)(e),
						a = !!Object(y.i)(e, {
							postId: r.postId
						}),
						d = Object(E.M)(e, {
							postId: r.postId
						});
					if (!d || !d.previousVisits || d.previousVisits.length < 1) return !1;
					const c = n === v.a.Last ? d.previousVisits[d.previousVisits.length - 1] : d.previousVisits[0];
					return (a || i) && r.created > c
				},
				isNightmodeOn: _.S
			}), (e, t) => {
				let {
					commentLink: s,
					commentsPageKey: n,
					scrollToAndRemeasure: o
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(p.K)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(p.nb)({
						commentId: s.id,
						commentsPageKey: n,
						scrollToAndRemeasure: o
					}))
				}
			})(e => {
				const {
					awardingShouldHighlightViaTags: t,
					childrenInfo: s,
					className: n,
					collapsed: o,
					commentLink: r,
					commentsPageKey: a,
					depth: d,
					highlightTreatmentParams: l,
					isActive: m,
					isAvatarsInCommentsEnabled: p,
					isAwarded: b,
					isHidden: x,
					isHighlighted: g,
					isNightmodeOn: f,
					onLineClick: v,
					onShortLineClick: C,
					parentNodeIds: O,
					renderedInOverlay: y,
					scrollToAndRemeasure: E
				} = e, _ = b && !g && !t, k = !(!t || !b), j = !!(t && l && l.glowHexColor), w = j && d > 0, P = j, I = i.a.createElement(ys, {
					className: Object(c.a)(n, {
						[Os.a.isHidden]: x,
						[Os.a.isAwarded]: _,
						[Os.a.isNightmodeOn]: f,
						[Os.a.glowBorderTopPadding]: w,
						[Os.a.glowBorderBottomPadding]: P
					}),
					id: r.id,
					style: {
						paddingLeft: d * (h.w + h.v) + (r.type === u.a.Comment ? h.w : 0)
					},
					tabIndex: -1
				}, i.a.createElement(fs, {
					collapsed: o,
					depth: d,
					hasGlowBorder: w,
					isAvatarsInCommentsEnabled: p,
					onLineClick: v,
					onLineMouseOver: Es,
					onLineMouseOut: _s,
					onShortLineClick: C,
					type: r.type,
					parentNodeIds: O
				}), js({
					childrenInfo: s,
					clearHovered: _s,
					commentLink: r,
					commentsPageKey: a,
					onLineMouseOver: Es,
					hasAwardGradient: k,
					highlightTreatmentParams: l,
					isActive: m,
					isAvatarsInCommentsEnabled: p,
					isHighlighted: g,
					renderedInOverlay: y,
					scrollToAndRemeasure: E
				}));
				return p && r.type === u.a.Comment ? i.a.createElement(vt, null, I) : I
			});
			const js = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					hasAwardGradient: r,
					highlightTreatmentParams: a,
					isActive: d,
					isAvatarsInCommentsEnabled: c,
					isHighlighted: l,
					onLineMouseOver: m,
					renderedInOverlay: p,
					scrollToAndRemeasure: h
				} = e;
				switch (n.type) {
					case u.a.Comment:
						return i.a.createElement(Qt, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							hasAwardGradient: r,
							highlightTreatmentParams: a,
							isActive: d,
							isAvatarsInCommentsEnabled: c,
							isHighlighted: l,
							onLineMouseOver: m,
							renderedInOverlay: p,
							scrollToAndRemeasure: h
						});
					case u.a.MoreComments:
						return i.a.createElement(ls.b, {
							commentsPageKey: o,
							isActive: d,
							moreCommentsId: n.id
						});
					case u.a.ContinueThread:
						return i.a.createElement(cs, {
							id: n.id,
							isActive: d
						})
				}
			};
			var ws = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Ps = s("./src/reddit/components/Comments/States/index.tsx"),
				Is = s("./src/reddit/components/Scroller/Simple.tsx"),
				Ss = s("./src/reddit/constants/elementIds.ts"),
				Ts = s("./src/reddit/featureFlags/index.ts"),
				Ns = s("./src/reddit/helpers/commentList/index.ts"),
				Ms = s("./src/reddit/selectors/realtimeComments.ts"),
				Ls = s("./src/telemetry/index.ts"),
				Rs = s("./src/lib/LRUCache/index.ts"),
				As = s("./src/reddit/actions/comment/websocket/index.ts"),
				Fs = s("./src/reddit/components/Comments/index.m.less"),
				Bs = s.n(Fs);
			const Ds = h.f + 10,
				Ws = 65,
				Hs = m.a.wrapped(Is.b, "Scroller", Bs.a),
				Vs = Object(d.c)({
					allCollapsed: C.a,
					commentLinks: C.k,
					commentThreadLinkSet: C.p,
					isRealtimeCommentsExperimentEnabled: Ms.a,
					liveCommentsWebsocket: E.K,
					measureScrollFPS: Ts.d.measureScrollFPS,
					moreComments: C.b,
					postPermalink: E.L
				}),
				Us = Object(a.b)(Vs, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(p.L)(t)),
					onCommentLeftViewport: (t, s) => e(Object(p.Q)(t, s)),
					onLiveCommentsEnd: (t, s) => e(Object(As.b)(t, s)),
					onLiveCommentsSubscribe: (s, n, o) => e(Object(As.a)(s, n, o, t.subredditId))
				})),
				Gs = new Rs.a(500),
				Ks = new Rs.a(500),
				zs = (e, t) => {
					const s = "entered-".concat(e);
					let n = Gs.get(s);
					return void 0 === n && (n = () => {
						t.onCommentEnteredViewport(e)
					}, Gs.set(s, n)), n
				},
				qs = (e, t) => {
					const s = "left-".concat(e);
					let n = Ks.get(s);
					return void 0 === n && (n = s => {
						t.onCommentLeftViewport(e, s)
					}, Ks.set(s, n)), n
				};
			class Js extends i.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							o = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === o) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[o - 1],
							i = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.parentNodeIdsMap = {}, ws.c(), this.childrenInfoMap = {}
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						commentLinks: t,
						commentsPageKey: s,
						allCollapsed: n,
						commentThreadLinkSet: o,
						isRealtimeCommentsExperimentEnabled: r,
						liveCommentsWebsocket: i,
						moreComments: a,
						onLiveCommentsSubscribe: d,
						postId: c
					} = this.props;
					this.timerId && Ls.c.cancel(this.timerId), t.length && (this.timerId = Ls.c.start()), r && i && d && !e && (d(s, i, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = i), this.findHiddenNodes(t, n, o, a)
				}
				componentDidMount() {
					this.timerId && Object(Ls.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ls.c.end(this.timerId)
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
					this.timerId && Ls.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Ls.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Ls.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Ls.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					const {
						commentId: e,
						isRealtimeCommentsExperimentEnabled: t,
						onLiveCommentsEnd: s
					} = this.props;
					this.timerId && Ls.c.cancel(this.timerId), t && this._subscribedPostId && this._subscribedLiveCommentsWebsocket && s && !e && s(this._subscribedLiveCommentsWebsocket, this._subscribedPostId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					ws.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						o && (s[c.id].depth > r ? (ws.a(c.id), i += Object(Ns.d)(c, n), c.type === u.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
							numChildren: i,
							hasContinueThread: a
						}, o = null, r = 1 / 0, i = 0, a = !1)), !o && t[c.id] && (o = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o,
						renderedInOverlay: r
					} = this.props, a = zs(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					}), d = qs(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					});
					return {
						estHeight: ws.b(e.id) ? 0 : Ws,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: d,
						render: t => {
							let {
								placeholderRecommended: n,
								height: o,
								width: a,
								scrollToAndRemeasure: d
							} = t;
							return n ? i.a.createElement("div", {
								style: {
									height: o,
									backgroundColor: "#fff"
								}
							}) : i.a.createElement(ks, {
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								isHidden: ws.b(e.id),
								scrollToAndRemeasure: d,
								renderedInOverlay: !!r,
								parentNodeIds: this.getParentNodeIds(e)
							})
						}
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						renderedInOverlay: o
					} = this.props;
					let r;
					if (n) {
						r = "comments-".concat(o ? "lightbox" : "page")
					}
					const a = t.map((e, t) => this.getScrollChild(e, t));
					return i.a.createElement(Hs, {
						className: Object(c.a)(Bs.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(Ss.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: Ds,
						trackingName: r
					}, a)
				}
				renderEmptyState() {
					return this.props.commentId ? i.a.createElement(Ps.g, {
						link: this.props.postPermalink
					}) : i.a.createElement(Ps.c, null)
				}
			}
			t.a = Us(Js)
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				IconText: "_6cNM5NdF82ASM5hiBVNN5",
				iconText: "_6cNM5NdF82ASM5hiBVNN5",
				Animate: "_3j98tX1WZapEArV-4rmJe5",
				animate: "_3j98tX1WZapEArV-4rmJe5",
				top: "_3Dr1MoYY5Yv4YhbQFFcks0",
				bottom: "_1GRYNQhMsR-00cWDJcE3UJ",
				bigCircle: "_85rqvRijdIsn3s0j-gUaw",
				midCircle: "RS1g6Gd_W67wwWKSteEB1",
				smallCircle: "lRlGcfTzZ7njZnIUyvhGH",
				play: "_3Kxa8oHGuT_QpP4zIN5jrV",
				blinker: "_20WvB_9deo7bJVi4af1dSS"
			}
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/experiments/chatPost.ts"),
				m = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				p = s.n(m);
			const u = .1,
				h = Object(d.c)({
					isChatPost: l.e,
					isChatPostExperiment: l.d
				}),
				b = Object(a.b)(h, e => ({
					sendChatPostExposureEvent: (t, s) => e((e, n) => Object(l.g)(n(), t, s))
				}));
			class x extends i.a.Component {
				constructor(e) {
					super(e), this.onVisibilityChange = e => {
						e.isIntersecting && e.intersectionRatio >= u ? this.state.visible || (this.setState({
							visible: !0
						}), this.sendChatPostExposureEvent()) : this.state.visible && this.setState({
							visible: !1
						})
					}, this.state = {
						visible: null
					}
				}
				sendChatPostExposureEvent() {
					const {
						isChatPost: e,
						isMod: t,
						sendChatPostExposureEvent: s
					} = this.props;
					s(e, t)
				}
				render() {
					const {
						visible: e
					} = this.state, {
						isChatPost: t,
						isChatPostExperiment: s
					} = this.props, r = s && (null === e || e);
					return t ? i.a.createElement(n.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, s ? i.a.createElement("div", {
						className: Object(c.a)(p.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(c.a)(p.a.Animate, p.a.top, {
							[p.a.play]: r
						})
					}, i.a.createElement("span", {
						className: p.a.bigCircle
					}), i.a.createElement("span", {
						className: p.a.midCircle
					}), i.a.createElement("span", {
						className: p.a.smallCircle
					})), i.a.createElement("p", {
						className: p.a.IconText
					}, o.fbt._("Live Discussion", null, {
						hk: "2akFwx"
					})), i.a.createElement("span", {
						className: Object(c.a)(p.a.Animate, p.a.bottom, {
							[p.a.play]: r
						})
					}, i.a.createElement("span", {
						className: p.a.bigCircle
					}), i.a.createElement("span", {
						className: p.a.midCircle
					}), i.a.createElement("span", {
						className: p.a.smallCircle
					}))) : i.a.createElement("span", null)) : null
				}
			}
			t.a = b(x)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("ChatPost~ModQueuePages"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
			t.a = o
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
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				p = i.a.div("Byline", c.a),
				u = Object(r.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsLink/index.m.less": function(e, t, s) {
			e.exports = {
				commentsLink: "_1UoeAeSRhOKSNdY_h3iS1O",
				commentIcon: "_3DVrpDrMM9NLT6TlsTUMxC",
				defaultCursorWrapper: "_3m17ICJgx45k_z-t82iVuO",
				link: "_1Hw7tY9pMr-T1F4P1C-xNU",
				text: "FHCV02u6Cp2zYL0fhQPsO"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/constants/componentTestIds.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				b = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				x = s("./src/reddit/selectors/experiments/chatPost.ts"),
				g = s("./src/reddit/selectors/experiments/postSeo.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/CommentsLink/index.m.less"),
				O = s.n(C);
			const y = Object(i.b)(() => Object(d.c)({
					isChatPostExperiment: x.d,
					isPostSEOEligible: g.f,
					postPermalink: f.L,
					shouldOpenPostInNewTab: v.U
				})),
				E = e => {
					let t, {
						type: s,
						numComments: i,
						isChatPostExperiment: a,
						modModeEnabled: d,
						hasModPostPerms: c,
						shouldShowIcon: l,
						shouldShowText: p,
						text: h
					} = e;
					return t = h || (s === u.g.Compact || d && c || a ? Object(m.b)(i) : n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(i, "number", Object(m.b)(i))], {
						hk: "1QeOde"
					})), r.a.createElement(o.Fragment, null, l && r.a.createElement(b.a, {
						className: O.a.commentIcon,
						role: "presentation"
					}), p && r.a.createElement("span", {
						className: O.a.text
					}, t))
				};
			t.a = y(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPostExperiment: n,
					isCommentPermalink: o,
					isCommentsPage: i,
					isOverlay: d,
					isPostSEOEligible: m,
					modModeEnabled: u,
					numComments: b,
					onClick: x,
					postPermalink: g,
					shouldOpenPostInNewTab: f,
					shouldShowIcon: v = !0,
					shouldShowText: C = !0,
					text: y,
					type: _
				} = e, k = i && !o && !m, j = o && !d, w = r.a.createElement(E, {
					type: _,
					numComments: b,
					isChatPostExperiment: n,
					modModeEnabled: u,
					hasModPostPerms: s,
					shouldShowIcon: v,
					shouldShowText: C,
					text: y
				});
				return k ? r.a.createElement("div", {
					className: Object(c.a)(O.a.commentsLink, O.a.defaultCursorWrapper, t),
					onClick: x
				}, w) : r.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": p.a,
					className: Object(c.a)(O.a.commentsLink, O.a.link, t),
					target: f ? "_blank" : void 0,
					to: j ? Object(h.b)(g) : Object(l.a)(g, !0),
					onClick: x
				}, w)
			})
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
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
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
				x = s("./src/reddit/components/IdCard/async.tsx"),
				g = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				f = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				C = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				O = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				y = s("./src/reddit/featureFlags/component.tsx"),
				E = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				_ = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/selectors/experiments/postSeo.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				I = s.n(P);
			const S = Object(y.a)("spPoints", h.a),
				T = Object(y.a)("spLeaderboard", b.a),
				N = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Settings~reddit-components-ProfileIdCard"), s.e("reddit-components-ProfileIdCard")]).then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
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
					isLoggedIn: w.H,
					postSEOV2IdCardVariant: k.i,
					widgets: Object(p.a)(j.r)
				}),
				L = Object(d.b)(M);
			class R extends a.a.Component {
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
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets)
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: n,
						post: o,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(k.d)(i) && !Object(k.g)(i);
					return a.a.createElement(v.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(g.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: E.a.BOTTOM,
							refreshKey: o.id,
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
						post: o,
						postSEOV2IdCardVariant: r,
						subredditId: i,
						subredditName: d,
						widgets: c
					} = this.props;
					let p = 0;
					const h = Object(k.d)(r) || Object(k.g)(r),
						b = a.a.createElement(g.a, {
							postId: o.id,
							isOverlay: n,
							listingName: d,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: p++,
							position: E.a.FIRST,
							refreshKey: o.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(I.a.outerWrapper, e)
					}, Object(_.j)(o) ? a.a.createElement(N, {
						profileName: d,
						isOverlay: n || !1
					}) : a.a.createElement(x.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: d,
						postId: o.id,
						rememberPosition: o.numComments > 0,
						isMinimal: h
					}), a.a.createElement(u.a, {
						cardClassName: I.a.card,
						subredditId: i
					}), a.a.createElement(S, {
						className: I.a.card,
						subredditId: i,
						uniqueId: o.id
					}), a.a.createElement(T, {
						className: I.a.card,
						subredditId: i,
						uniqueId: o.id
					}), b, s && c.map((e, t) => a.a.createElement(f.a, {
						key: "widgetSpacer".concat(t)
					}, a.a.createElement(O.a, {
						subredditName: d,
						widget: e
					}))), o.isSponsored && a.a.createElement(f.a, null, a.a.createElement(C.a, null)), this.renderFooter(p++))
				}
			}
			t.a = L(R)
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
				o = s.n(n),
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
				x = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				g = s.n(x);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = "500px", C = 3, O = Object(i.c)({
				hasDismissedTruncation: u.b,
				isGQLLoggedIn: b.G,
				isLoggedIn: b.H,
				isPostSEOEligible: h.f,
				postSEOV2TruncatedVariant: h.j
			}), y = Object(r.b)(O);
			class E extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						hasDismissedTruncation: r,
						innerRef: i,
						isCommentsListTruncated: d,
						isGQLLoggedIn: u,
						isLoggedIn: h,
						isOverlay: b,
						numberOfComments: x,
						onClick: O,
						subredditOrProfile: y
					} = this.props, E = !(!y || Object(m.f)(y)), _ = d && E && (x >= C && !b || !r) && (!u && !h), k = _ && !e, j = _ ? g.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: O,
						ref: i
					}, o.a.createElement("div", {
						className: Object(a.a)(g.a.ContentWrapper, s, j),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: _ ? v : "unset"
						}
					}, t), k && o.a.createElement(l.f, {
						className: g.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, f._("View entire discussion ( {number of comments} comments)", [f._param("number of comments", Object(c.b)(x))], {
						hk: "OzcHJ"
					})))
				}
			}
			t.a = Object(d.a)(y(E))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/components/ContentTooltip/index.m.less"),
				b = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const f = {
					height: 200,
					width: 200
				},
				v = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				C = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: o,
						caretColor: i
					} = e, a = g(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return r.a.createElement("div", x({
						className: Object(c.a)(s, b.a.StyledTooltipContainer, {
							[b.a.caretOnTop]: "top" === o,
							[b.a.caretOnLeft]: "left" === o,
							[b.a.caretOnRight]: "right" === o,
							[b.a.caretOnBottom]: "bottom" === o
						}),
						style: Object.assign(Object.assign({}, n), {
							"--contentTooltip-caretColor": i && i[o] ? i[o] : Object(p.a)(e).body
						})
					}, a), t)
				}),
				O = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				y = Object(d.a)(C, [n.a.Click, n.a.Keydown]),
				E = Object(i.b)(O);
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
						} = this.props;
						m.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const n = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let o = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									o = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									o = n.left > t.width;
									break;
								case "right":
									o = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									o = n.top > t.height
							}
							this.setState({
								position: o ? this.props.defaultTooltipPosition : v(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: s,
						caretPosition: n
					} = this.getPositions(e);
					return r.a.createElement(y, x({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = E(_)
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(v),
				O = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = O.a.div("Container", C.a),
				_ = O.a.div("PostMetaWrapper", C.a),
				k = O.a.wrapped(u.c, "PostTitle", C.a),
				j = O.a.div("FlatList", C.a),
				w = O.a.div("FlatItem", C.a),
				P = O.a.span("FlatListDotSpacer", C.a),
				I = O.a.wrapped(E, "LinkContainer", C.a),
				S = O.a.div("Content", C.a),
				T = O.a.div("ThumbnailContainer", C.a),
				N = Object(d.c)({
					isCurrentUserProfilePost: g.j,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Bb.TOPIC),
					post: g.M,
					shouldOpenPostInNewTab: f.U,
					subreddit: g.Z
				}),
				M = Object(i.b)(N);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: i,
					subreddit: a
				} = e;
				if (!i) return null;
				const d = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: "".concat("CrosspostBox", "--").concat(o.isListing)
					},
					c = t;
				return i && !i.media ? r.a.createElement(I, {
					className: c
				}, r.a.createElement(S, null, r.a.createElement(_, null, r.a.createElement(p.a, d)), L(i), i.source && r.a.createElement(h.a, {
					post: i
				}), A(e)), B(e)) : r.a.createElement(E, {
					className: c
				}, r.a.createElement(_, null, r.a.createElement(p.a, d)), L(i), R(e), A(e))
			});
			const L = e => r.a.createElement(k, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign(Object.assign({}, t), {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(m.a, y({}, n, {
						className: C.a.mediaContainer
					})))
				},
				A = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(j, null, r.a.createElement(w, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(P, null), r.a.createElement(w, null, F(e)))
				},
				F = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				B = e => r.a.createElement(T, null, r.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, s) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const h = a.a.div("DistinguishWrapper", u.a),
				b = a.a.wrapped(m.a, "Inline", u.a),
				x = a.a.wrapped(c.a, "RadioOff", u.a),
				g = a.a.wrapped(l.a, "RadioOn", u.a),
				f = e => o.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(g, null) : o.a.createElement(x, null), e.text),
				v = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return o.a.createElement(h, {
						className: t,
						style: s
					}, o.a.createElement(f, {
						onClick: () => p(r.C.NONE, null),
						selected: !c && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(f, {
						onClick: () => p(r.C.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(f, {
						onClick: () => p(r.C.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(f, {
						onClick: () => p(r.C.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && o.a.createElement(f, {
						onClick: () => p(r.C.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var C = Object(d.a)(v);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: p
				}, o.a.createElement(C, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? m("admin_distinguish") : a && e !== r.C.MODERATOR ? m("undistinguish") : s && e !== r.C.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/reddit/featureFlags/component.tsx");
			const r = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(o.a)("spPremium", r)
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const h = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const a = n && n.eventInfo,
					p = Object(l.a)(n),
					b = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(h, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(d.a, {
					post: n
				}), !p && b && o.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				i = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				a = s("./src/lib/constants/index.ts");

			function d(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.span("PostEventFutureText", u.a),
				x = h.a.span("PostEventPastText", u.a),
				g = h.a.span("PostEventNowText", u.a),
				f = h.a.span("Container", u.a),
				v = h.a.wrapped(l.a, "CalendarIcon", u.a),
				C = h.a.wrapped(m.a, "LiveIcon", u.a),
				O = h.a.div("LoadingState", u.a);
			class y extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: l,
						eventStart: m
					} = s, p = Object(r.e)(m, n);
					let u, h;
					if (this.state.mounted || p === r.a.Live) u = function(e, t, s) {
						const n = Object(r.e)(e, t),
							o = new Date(e * a.Fb);
						let c;
						if (n === r.a.Live || s) return i.fbt._("Now", null, {
							hk: "Prpcg"
						});
						n === r.a.Future ? c = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? d(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === r.a.Past && (c = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : d(o));
						const l = function(e) {
							return e.toLocaleTimeString(void 0, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(o);
						return "".concat(c, " @ ").concat(l)
					}(m, n, l);
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						u = o.a.createElement(O, {
							className: e
						})
					}
					if (l) h = o.a.createElement(g, null, o.a.createElement(C, null), u);
					else if (p === r.a.Future) h = o.a.createElement(b, null, o.a.createElement(v, null), u);
					else {
						if (p !== r.a.Past) return null;
						h = o.a.createElement(x, null, o.a.createElement(v, null), u)
					}
					return o.a.createElement(f, {
						className: e
					}, h)
				}
			}
			t.a = y
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				x = s("./src/reddit/icons/fonts/helpers.tsx"),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				f = s.n(g);
			var v = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(x.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", f.a),
				C = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				O = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				y = s("./src/reddit/icons/fonts/Link/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				k = s("./src/reddit/icons/fonts/Text/index.tsx"),
				j = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				w = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ExpandoButton/index.m.less"),
				S = s.n(I);
			const T = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					}))
				})),
				N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(d.a)(S.a.icon, S.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: n
					});
					if (s.pollData) return r.a.createElement(w.a, {
						className: n
					});
					switch (e) {
						case P.o.GIFVIDEO:
							return r.a.createElement(O.a, {
								className: n
							});
						case P.o.IMAGE:
							return r.a.createElement(_.a, {
								className: n
							});
						case P.o.TEXT:
						case P.o.RTJSON:
							return r.a.createElement(k.a, {
								className: n
							});
						case P.o.VIDEO:
							return r.a.createElement(C.a, {
								className: n
							});
						case P.o.GALLERY:
							return r.a.createElement(j.a, {
								className: n
							});
						case P.o.EMBED:
						default:
							return r.a.createElement(y.a, {
								className: n
							})
					}
				};
			t.a = T(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: i,
					post: l,
					toggle: u,
					useMediaIcons: x
				} = e, g = s || l, f = o && !!s;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(p.a)(g)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": i,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, S.a.outer),
					"data-click-id": i ? "expando_close" : "expando_open",
					onClick: u
				}, i ? r.a.createElement(h.a, {
					className: S.a.icon
				}) : x ? r.a.createElement(r.a.Fragment, null, N(g.media && g.media.type, f, l), r.a.createElement(b.a, {
					className: Object(d.a)(S.a.icon, S.a.showOnHover)
				})) : r.a.createElement(b.a, {
					className: S.a.icon
				})) : g.source && g.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(E.a, {
					className: Object(d.a)(S.a.icon, S.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(g.permalink),
					rel: "nofollow"
				}, r.a.createElement(v, {
					className: S.a.icon
				}))
			})
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
				o = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
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
					} = this.state, r = s ? i.a.createElement(p, {
						src: a.a.assetPath + t
					}) : i.a.createElement(o.a, {
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
					}, r))
				}
			}
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/components/Flatlist/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					flatlistItem: t,
					isLoggedIn: s,
					isUserOp: n,
					noBreakpoints: d
				} = e, p = m(e, ["flatlistItem", "isLoggedIn", "isUserOp", "noBreakpoints"]);
				return o.a.createElement(a.a, l({}, p, {
					className: d ? c.a.responsiveRow : Object(r.a)(c.a.responsiveRow, Object(i.b)({
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: n
					}))
				}))
			}
		},
		"./src/reddit/components/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				hideIfVwSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				FirstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				firstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				LoggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				loggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				LoggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				loggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				OpVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				opVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				EditingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				editingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				SecondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				secondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				AwardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				awardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				HideIfVWLarger: "_1k3nXWGGz2NdPr8dg49Tbs",
				hideIfVwLarger: "_1k3nXWGGz2NdPr8dg49Tbs"
			}
		},
		"./src/reddit/components/Flatlist/constants.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE"
				}(n || (n = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return m
			}));
			var n, o, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				d = s.n(a),
				c = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(o || (o = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(r || (r = {}));
			const l = {
					[c.a.EditFlair]: o.Editing,
					[c.a.EditPost]: o.Editing,
					[c.a.Gild]: o.Awarding,
					[c.a.Hide]: o.First,
					[c.a.PostOverflowMenu]: o.First,
					[c.a.Report]: o.First,
					[c.a.Save]: o.First,
					[c.a.Share]: o.Second
				},
				m = e => {
					return (e => {
						const t = d.a[e.type],
							s = d.a[e.group],
							n = d.a[e.groupVariant];
						return Object(i.a)(t, s, n)
					})({
						type: e.breakpointType || n.HideIfVWSmaller,
						group: l[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? r.Op : e ? r.LoggedIn : r.LoggedOut)(e.isLoggedIn, e.isUserOp)
					})
				}
		},
		"./src/reddit/components/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3-miAEojrCvx_4FQ8x3P-s",
				responsiveRow: "YszYBnnIoNY8pZ6UwCivd",
				flatlistSeparator: "x7sinePdvDKj7bf-cdm4Z",
				flexSpacer: "_21pmAV9gWG6F_UKVe7YIE0",
				modActionsIcon: "_15c1hqseW25EvRu0WP2Dq5",
				shareText: "_6_44iTtZoeY6_XChKt5b0",
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
				ShareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareIcon: "_1GQDWqbF-wkYWbrpmOvjqJ",
				ShareMenu: "_JRBNstMcGxbZUxrrIKXe",
				shareMenu: "_JRBNstMcGxbZUxrrIKXe",
				liveDiscussionWrapper: "_3rnnBQZL1OOttG3tFn629n",
				large: "_26YkhAfncIjLM3iT6Gbcvt"
			}
		},
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return be
			})), s.d(t, "a", (function() {
				return xe
			})), s.d(t, "d", (function() {
				return Oe
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/timezone/index.ts"),
				p = s("./src/reddit/actions/gold/modals.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/postCreation/editing.ts"),
				x = s("./src/reddit/actions/postFlair.ts"),
				g = s("./src/reddit/actions/reportFlow.ts"),
				f = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				v = s("./src/reddit/components/CommentsLink/index.tsx"),
				C = s("./src/reddit/constants/colors.ts"),
				O = s("./src/reddit/components/ContentTooltip/index.tsx"),
				y = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				E = s.n(y);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class k extends r.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return r.a.createElement(O.a, {
						caretColor: {
							top: C.a.op
						},
						tooltipSizeEstimate: {
							height: 39,
							width: 314
						},
						tooltipId: e,
						defaultTooltipPosition: "bottom"
					}, r.a.createElement("div", {
						className: E.a.container
					}, r.a.createElement("div", {
						className: E.a.newBadge
					}, _._("New", null, {
						hk: "1XUPF"
					})), r.a.createElement("div", {
						className: E.a.text
					}, _._("Try giving a new Appreciation Award", null, {
						hk: "1V7ZWF"
					}))))
				}
			}
			var j = k,
				w = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				P = s("./src/reddit/components/ModModeReports/helpers.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				S = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				T = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				M = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				L = s("./src/reddit/components/ShareMenu/index.tsx"),
				R = s("./src/reddit/components/TrackingHelper/index.tsx"),
				A = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				F = s("./src/reddit/constants/postLayout.ts"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				W = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/trackers/modTools.ts"),
				K = s("./src/reddit/helpers/trackers/post.ts"),
				z = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				q = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				J = s("./src/reddit/icons/fonts/Report/index.tsx"),
				X = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Q = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				Y = s("./src/reddit/models/PostCreationForm/index.ts"),
				$ = s("./src/reddit/models/User/index.ts"),
				ee = s("./src/reddit/components/Flatlist/constants.ts"),
				te = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				se = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ne = s("./src/reddit/actions/postCollection/index.ts"),
				oe = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				re = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ie = s("./src/reddit/selectors/activeModalId.ts"),
				ae = s("./src/reddit/components/Flatlist/index.m.less"),
				de = s.n(ae);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var le = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			let me, pe;
			const ue = l.a.button("ShareButton", de.a),
				he = l.a.wrapped(L.a, "ShareMenu", de.a),
				be = Object(c.a)(e => {
					var {
						className: t
					} = e, s = le(e, ["className"]);
					return r.a.createElement(q.a, ce({}, s, {
						className: Object(d.a)(de.a.modActionsIcon, t),
						style: {
							color: Object(W.a)(Object(D.a)(s), Z.a.actionIcon, Z.b.actionIcon)
						}
					}))
				}),
				xe = e => r.a.createElement("div", ce({}, e, {
					className: Object(d.a)(de.a.flatlistSeparator, e.className)
				})),
				ge = Object(B.t)({
					currentProfileName: B.h,
					isCommentPermalink: B.v,
					isCommentsPage: B.w,
					isProfilePostListing: B.I,
					pageLayer: e => e
				}),
				fe = Object(a.c)({
					activeModalId: ie.a,
					layout: B.N,
					userIsOp: H.hb,
					subreddit: B.q
				}),
				ve = Object(i.b)(fe, (e, t) => {
					let {
						post: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ne.a)(t, s)),
						onToggleModal: t => e(Object(u.i)(t)),
						onToggleSave: () => e(Object(h.R)(n.postId)),
						onHide: t => e(Object(h.V)(n.postId, !n.hidden, o, !0)),
						onReportClick: () => e(Object(g.j)(n.postId, o)),
						onEdit: () => {
							const t = !o && !r;
							e(Object(b.a)(n.postId, t))
						},
						onFlairPost: () => e(Object(u.i)(Object(S.b)(n.postId, o))),
						onGildClick: t => e(Object(p.d)({
							correlationId: t,
							thingId: n.postId
						})),
						onFlairChanged: t => {
							let {
								selectedTemplateId: s,
								previewFlair: o
							} = t;
							return e(Object(x.h)({
								post: n,
								selectedTemplateId: s,
								previewFlair: o
							}))
						},
						toggleEditStartTimeModal: async () => {
							me && pe || ([me, pe] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(u.i)(Object(Y.r)(n.postId, o, Y.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							pe && e(pe(n.id, t))
						}
					}
				});
			class Ce extends r.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						const {
							onGildClick: e,
							post: t,
							sendEvent: n
						} = this.props;
						e(Object(U.d)(U.a.GildingFlow, !0));
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(o(t.id))
					}, this.onToggleCurrentModal = () => {
						this.props.activeModalId && this.props.onToggleModal(this.props.activeModalId)
					}, this.onToggleCollectionListModal = () => {
						const {
							isOverlay: e,
							post: t
						} = this.props, s = Object(Y.s)(t.id, e);
						this.props.onToggleModal(s)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = e => {
						const {
							hostPostId: t,
							isOverlay: s,
							listingKey: n,
							post: o,
							sendEvent: r
						} = this.props;
						r(Object(K.f)(o.id, e, s ? "post_detail" : "post", n, t))
					}, this.onSaveClick = () => {
						this.props.onToggleSave(), this.sendEventWithName(this.props.post.saved ? "unsave" : "save")
					}, this.onHideClick = () => {
						this.props.onHide(!!this.props.post.hidden), this.sendEventWithName(this.props.post.hidden ? "unhide" : "hide")
					}, this.onReportClick = () => {
						this.props.onReportClick(), this.sendEventWithName("report")
					}
				}
				render() {
					const {
						activeModalId: e,
						addEventStartTime: t,
						className: s,
						currentProfileName: o,
						currentUser: i,
						hasModFlairPerms: a,
						hasModFullPerms: c,
						hasModPostPerms: l,
						isCommentPermalink: p,
						isCommentsPage: u,
						isLargePost: h,
						isOverlay: b,
						isProfilePostListing: x,
						isSticky: g,
						layout: C,
						modModeEnabled: O,
						onFlairChanged: y,
						onIgnoreReports: E,
						onOpenReportsDropdown: _,
						pageLayer: k,
						post: L,
						sendEvent: R,
						showEditFlair: B,
						showEditPost: D,
						subreddit: W,
						toggleEditStartTimeModal: H,
						tooltipType: U,
						userIsOp: q
					} = this.props, Z = !!i && Object($.e)(i) === L.author, ne = Object(se.a)("View--Reports", L.id, U), ie = Object(se.a)("View--GiveAward", L.id, U), ae = Object(P.c)(L), ce = Oe("-mod-actions-menu", L.id, b, g), le = Object(P.a)(L), pe = L.postId, xe = C === F.g.Large, ge = !u && xe || l && O, fe = !(b || u || p), ve = i && L.isGildable, Ce = L.media && L.media.type === Q.o.LIVEVIDEO;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(d.a)(de.a.flatlistContainer, s)
					}, r.a.createElement(v.a, {
						className: de.a.commentsLink,
						hasModPostPerms: l,
						isCommentsPage: u,
						isCommentPermalink: p,
						isOverlay: b,
						postId: L.id,
						modModeEnabled: O,
						numComments: L.numComments
					}), ve && r.a.createElement(r.a.Fragment, null, r.a.createElement(V.a, {
						displayText: n.fbt._("Give Award", null, {
							hk: "NIFUn"
						}),
						flatlistItem: ee.a.Gild,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.handleGild,
						skipRoleAttr: !0
					}, r.a.createElement(N.a, {
						id: ie
					})), r.a.createElement(j, {
						postOrComment: L,
						tooltipId: ie
					})), r.a.createElement(he, {
						className: Object(te.b)({
							flatlistItem: ee.a.Share,
							isLoggedIn: !!i,
							isUserOp: q
						}),
						dropdownId: Oe("-share-menu", L.id, b, g),
						permalink: L.permalink,
						post: L,
						sendEventWithName: this.sendEventWithName,
						subreddit: W
					}, r.a.createElement(ue, {
						"data-click-id": "share"
					}, r.a.createElement(X.a, {
						className: de.a.shareIcon
					}), r.a.createElement("span", {
						className: de.a.shareText
					}, n.fbt._("share", null, {
						hk: "1eAfZg"
					})))), D && !ge && r.a.createElement(V.a, {
						displayText: n.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						flatlistItem: ee.a.EditPost,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(N.c, null)), (!l || !O) && r.a.createElement(V.a, {
						displayText: L.saved ? n.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : n.fbt._("save", null, {
							hk: "3NOMst"
						}),
						flatlistItem: ee.a.Save,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.onSaveClick,
						skipRoleAttr: !0
					}, L.saved ? r.a.createElement(N.f, null) : r.a.createElement(N.e, null)), !L.isSponsored && !ge && r.a.createElement(V.a, {
						displayText: L.hidden ? n.fbt._("unhide", null, {
							hk: "151XLs"
						}) : n.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						flatlistItem: ee.a.Hide,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.onHideClick,
						skipRoleAttr: !0
					}, r.a.createElement(N.b, null)), !Z && !L.isSponsored && !ge && r.a.createElement(V.a, {
						displayText: n.fbt._("report", null, {
							hk: "1phfns"
						}),
						flatlistItem: ee.a.Report,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.onReportClick,
						skipRoleAttr: !0
					}, r.a.createElement(N.d, null)), r.a.createElement(I.a, {
						isOverlay: b,
						layout: C,
						modModeEnabled: O,
						post: L,
						sendEvent: R
					}), l && r.a.createElement(w.a, {
						dropdownId: ce,
						onClick: () => R(Object(K.f)(L.id, "post_mod_action_menu"))
					}, r.a.createElement(be, null), r.a.createElement(T.a, {
						canEditFlair: a && !!B,
						hasModFullPerms: c,
						hasModPostPerms: l,
						isOverlay: !!b,
						isPostAuthor: Z,
						modModeEnabled: O,
						post: L,
						tooltipId: ce
					})), l && ae && !O && r.a.createElement(M.c, {
						text: "".concat(le),
						onClick: () => {
							_(ne), R(Object(K.f)(L.id, "post_report_menu"))
						},
						id: ne
					}, r.a.createElement(A.a, {
						model: L,
						onIgnoreReports: () => {
							E(), R(Object(G.j)(L.ignoreReports ? "restore_reports" : "ignore_reports", L.id))
						},
						tooltipId: ne
					}), L.ignoreReports ? r.a.createElement(z.a, null) : r.a.createElement(J.a, null)), (i || !L.isSponsored) && r.a.createElement(N.g, {
						currentProfileName: o,
						dropdownId: Oe("-overflow-menu", L.id, b, g),
						isCommentsPage: u,
						isFixed: g,
						isOverlay: !!b,
						isProfilePostListing: x,
						layout: C,
						modModeWithPost: O && l,
						pageLayer: k,
						permalink: L.permalink,
						postId: pe,
						sendEvent: R,
						showEditPost: !!D,
						showEditFlair: !!B,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: H,
						toggleEditStartTimeModal: H
					}), e === Object(Y.s)(L.id, b) && r.a.createElement(oe.a, {
						subredditId: L.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: L.id,
						onSelectCollection: this.addPostToCollection,
						titleText: n.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: b
					}), e === Object(Y.r)(L.id, b, Y.j.POST_OVERFLOW_MENU) && me && r.a.createElement(me, {
						onChange: t,
						onClose: H,
						schedule: Object(m.c)(L),
						shouldShowDeleteButton: !1
					}), e === Object(Y.t)(L.id, b) && r.a.createElement(re.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: L.belongsTo.id
					}), e === Object(S.b)(L.id, b) && r.a.createElement(S.a, {
						flairs: L.flair,
						subredditId: L.belongsTo.id,
						modalId: Object(S.b)(L.id, b),
						onFlairChanged: y
					}), r.a.createElement("div", {
						className: de.a.flexSpacer
					})), fe && !Ce && r.a.createElement(f.a, {
						className: Object(d.a)(de.a.liveDiscussionWrapper, {
							[de.a.large]: h
						}),
						isMod: l,
						postId: L.postId
					}))
				}
			}
			const Oe = (e, t, s, n) => {
				let o = t;
				return s && (o += "-overlay"), n && (o += "-sticky"), o += e
			};
			t.c = ge(ve(Object(R.c)(Ce)))
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/GiveAwardTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_17AlFvm1kWw8NYe0FZKlMB",
				newBadge: "_18TPfQgPhTmXJ8270Nc5nM",
				text: "_26N1OuVJykHlztxQkPEfqb"
			}
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
			const o = Object(n.a)({
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
			t.a = o
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
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
			const x = d.a.wrapped(m.a, "Planet", b.a),
				g = d.a.div("SubredditIcon", b.a),
				f = d.a.div("PositionedImage", b.a),
				v = d.a.div("HeaderContent", b.a),
				C = d.a.div("HeaderContainer", b.a),
				O = d.a.span("HeaderText", b.a),
				y = d.a.wrapped(r.a, "HeaderUrl", b.a),
				E = d.a.span("Container", b.a),
				_ = Object(a.a)(e => {
					const t = Object(p.e)(e.headerText, e.prefixedHeaderText, Object(u.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(u.a)(e).banner.positionedImageAlignment,
						r = Object(u.a)(e).banner.positionedImage,
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
					const m = !!r && !!a && "left" === n,
						h = Object(p.g)(Object(u.a)(e).banner.backgroundColor, Object(u.a)(e).banner.backgroundImage, Object(u.a)(e).banner.backgroundImagePosition),
						_ = parseInt(Object(u.a)(e).banner.iconDimensions.customSize, 10),
						k = "".concat(4 + _, "px");
					return o.a.createElement(E, {
						style: {
							background: h,
							backgroundPosition: "center top",
							height: "".concat(Object(u.a)(e).banner.height, "px")
						}
					}, o.a.createElement(y, {
						className: e.className,
						to: e.url
					}, o.a.createElement(C, {
						className: Object(i.a)({
							[b.a.fullScreenDisabled]: !e.disableFullscreen,
							[b.a.useOverlay]: !!Object(u.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && o.a.createElement(v, {
						className: Object(i.a)({
							[b.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(u.a)(e).banner.showCommunityIcon && (s ? o.a.createElement(g, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: k,
							width: k
						}
					}) : o.a.createElement(x, {
						style: {
							padding: "".concat(Object(u.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: k,
							width: k
						}
					})), o.a.createElement(O, {
						style: {
							paddingTop: 32 === _ ? "4px" : "14px"
						}
					}, t)), o.a.createElement(f, {
						className: Object(i.a)(b.a.PositionedImage, {
							[b.a.positionedImage]: !!r,
							[b.a.hoverPositionedImage]: !!r && !!a
						}),
						style: Object.assign(Object.assign({}, d), {
							height: "".concat(Object(u.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = _
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
				o = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(r);
			const a = n.a.wrapped(o.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: o,
						tooltipType: r
					} = e;
					let i = o;
					return s && (i = "".concat(i, "--").concat(s)), r && (i = "".concat(i, "--").concat(r)), t && (i = "".concat(i, "--").concat(t)), n && (i = "".concat(i, "--").concat(n)), i
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
				importAsync: () => Promise.all([s.e("IdCard~SubredditWiki"), s.e("IdCard")]).then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);
			t.a = e => {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: i,
					title: d
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, o.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? o.a.createElement(c, null, n) : o.a.createElement(c, null), o.a.createElement(l, null, o.a.createElement("div", {
					className: a.a.title
				}, d), i && o.a.createElement("div", {
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => r.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.a.locked,
				icon: r.a.createElement(a.a, {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts"),
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				m = s.n(l);
			const p = r.a.createElement(e => r.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
				})), {
					className: m.a.lockIcon
				}),
				u = e => Object(d.f)(e) ? i.d.profile : i.d.subreddit;
			t.a = e => {
				let {
					subredditOrProfile: t
				} = e;
				const s = t ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", u(t) + t.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(c.a, {
					className: m.a.bannerBase,
					color: a.a.locked,
					icon: p,
					subtitle: n.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: s
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				l = s.n(c);
			const m = a.a.wrapped(e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			}))), "TrophyIcon", l.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, o = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(d.a, {
					className: l.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(m, null),
					subtitle: o,
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
			const x = r.a.createElement(m.a, {
					className: b.a.icon
				}),
				g = Object(a.c)({
					subreddit: p.z,
					subredditAboutInfo: p.w
				}),
				f = Object(i.b)(g);
			t.a = f(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const o = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || n.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(u.a, {
					className: b.a.container,
					color: c.a.quarantine,
					icon: x,
					subtitle: r.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", r.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", o ? r.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: o
					}) : i, " ", r.a.createElement(l.a, {
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
			var c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				},
				l = e => {
					const {
						children: t,
						className: s,
						to: n
					} = e, r = c(e, ["children", "className", "to"]), l = Object(a.b)(n);
					return o.a.createElement(i.a, d({
						className: s,
						to: l
					}, r), t)
				};

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				const {
					isOverlay: t
				} = e, s = p(e, ["isOverlay"]), n = t ? l : r.a;
				return o.a.createElement(n, m({}, s, {
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
				o = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(n.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				d = s("./src/reddit/constants/posts.ts"),
				c = s("./src/reddit/helpers/trackers/post.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/components/MediumPost/index.m.less"),
				p = s.n(m);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: m,
					shouldShowSubscribeButton: u,
					subredditOrProfile: h,
					templatePlaceholderImage: b
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: u
					})
				}, o.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, u && h && o.a.createElement(i.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(c.f)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(l.f)(h) ? d.a.PROFILE : d.a.SUBREDDIT
					},
					postId: s.id
				})), o.a.createElement(a.a, {
					crosspost: t,
					post: s,
					redditStyle: m,
					forceShowNSFW: n,
					templatePlaceholderImage: b
				}))
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
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				c = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const m = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				p = Object(r.b)(m, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(a.h)({
							tooltipId: s
						}))
					}
				}),
				u = () => null;
			t.a = p(e => o.a.createElement("div", {
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? u : e.onClick
			}, e.inCommentFlatlist ? o.a.createElement(d.b, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : o.a.createElement(c.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModModeReports/index.m.less"),
				d = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", d.a), m = i.a.div("Placeholder", d.a), p = () => r.a.createElement(m, null, r.a.createElement(l, null, c._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(p, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				hideIfVwSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				ApproveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				approveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				DefaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				defaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				CompactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				compactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(n || (n = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return m
			}));
			var n, o, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				d = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				c = s.n(d);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(o || (o = {})),
			function(e) {
				e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const l = {
					[a.a.Approve]: o.Approve,
					[a.a.Remove]: o.Remove,
					[a.a.Spam]: o.Spam,
					[a.a.Flair]: o.Flair
				},
				m = e => {
					const t = l[e.flatlistItem],
						s = c.a[e.breakpointType],
						n = c.a[t],
						o = e.isCompact ? c.a[r.Compact] : c.a[r.Default];
					return Object(i.a)(s, n, o)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				g = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				E = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/postFlair.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(I);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(P.b)({
						breakpointType: P.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				N = Object(i.b)(() => Object(a.c)({
					activeModalId: _.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(j.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(k.i)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(m.s)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(p.h)({
							tooltipId: t
						})),
						onRemovePost: () => e(Object(m.Q)(s.id, !1)),
						onSpamPost: () => e(Object(m.Q)(s.id, !0)),
						onFlairPost: t => () => e(Object(l.i)(t))
					}
				});
			t.a = N(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: i,
					layout: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApprovePost: p,
					onFlairPost: _,
					onRemovePost: k,
					onSpamPost: j,
					post: P,
					sendEvent: I,
					showIconsOnly: N
				} = e, M = Object(f.a)(l), L = Object(h.b)(P), R = !(!P.approvedBy || !L), A = Object(b.b)(P.id, i), F = M && m && !P.isSponsored, B = t && m;
				let D, W, H;
				N || (D = ((e, t) => e ? n.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? n.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : n.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(R, P.approvedBy), W = ((e, t) => e ? t === c.k ? n.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : n.fbt._("removed", null, {
					hk: "35ZTch"
				}) : n.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(P.isRemoved, P.bannedBy), H = (e => e ? n.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : n.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(P.isSpam));
				const V = !i && a === g.g.Compact;
				return r.a.createElement("div", {
					className: Object(d.a)(S.a.container, s)
				}, F && r.a.createElement(o.Fragment, null, r.a.createElement(x.b, {
					className: T(w.a.Approve, V),
					key: "approveButton",
					text: D,
					disabled: !!P.approvedBy && !L,
					onClick: () => {
						p(), I(Object(v.f)(P.id, "approve"))
					}
				}, r.a.createElement(C.a, null)), r.a.createElement(x.d, {
					className: T(w.a.Remove, V),
					key: "removeButton",
					text: W,
					disabled: P.isRemoved && P.bannedBy !== c.k,
					onClick: () => {
						k(), P.isRemoved && P.bannedBy === c.k ? I(Object(v.f)(P.id, "confirm_remove")) : I(Object(v.f)(P.id, "remove"))
					}
				}, r.a.createElement(O.a, null)), r.a.createElement(x.d, {
					className: T(w.a.Spam, V),
					key: "removeSpamButton",
					text: H,
					disabled: P.isSpam,
					onClick: () => {
						j(), I(Object(v.f)(P.id, "spam"))
					}
				}, r.a.createElement(y.a, null))), B && r.a.createElement(x.c, {
					className: T(w.a.Flair, V),
					key: "tagButton",
					onClick: () => {
						_(A)(), I(Object(v.f)(P.id, "post_flair_picker"))
					}
				}, r.a.createElement(E.a, null)), r.a.createElement(u.f, {
					postId: P.id
				}))
			})
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/reportFlow.ts"),
				l = s("./src/reddit/components/Popup/index.tsx"),
				m = s("./src/reddit/components/Popup/Button.tsx"),
				p = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: b
				} = e, [x, g] = Object(o.useState)(!0), f = Object(h.b)(s.id, b), v = Object(i.c)(), C = Object(u.a)(), O = Object(h.a)(s, b), y = (e, n) => C(Object(p.a)(t, s.id, e, n));
				Object(o.useEffect)(() => {
					O && y("modal", "show")
				}, [O]);
				if (!O || !x) return null;
				const E = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: f,
					title: E,
					onClose: () => {
						g(!1), y("close", "click"), v(Object(d.E)()), v(Object(d.P)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						v(Object(d.E)())
					}
				}, r.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", r.a.createElement(a.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (g(!1), y("report", "click"), void v(Object(c.j)(s.id)))
				}, n.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/reportFlow.ts"),
				m = s("./src/reddit/components/Popup/index.tsx"),
				p = s("./src/reddit/components/Popup/Button.tsx"),
				u = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				h = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: x
				} = e, [g, f] = Object(r.useState)(n.Survey), v = Object(b.b)(s.id, x), C = Object(a.c)(), O = Object(h.a)(), y = Object(b.a)(s, x), E = (e, n) => O(Object(u.b)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					y && E("modal", "show")
				}, [y]);
				const _ = e => {
					f(n.Closed), E("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), C(Object(l.j)(s.id, void 0, e))
				};
				if (!y) return null;
				let k = null;
				const j = {
					id: v,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						f(n.Closed), E("close", "click"), C(Object(c.E)())
					},
					onClickOutside: () => {
						C(Object(c.E)())
					}
				};
				switch (g) {
					case n.Survey:
						k = i.a.createElement(m.a, j, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								f(n.OffTopic), E("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								f(n.DontLike), E("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								f(n.BreaksRules), E("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						k = i.a.createElement(m.a, j, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						k = i.a.createElement(m.a, j, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						k = i.a.createElement(m.a, j, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", i.a.createElement(d.a, {
							to: "/r/".concat(t, "/about/rules"),
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => _("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => _("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return k
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/Popup/index.m.less"),
				i = s.n(r);

			function a(e) {
				return o.a.createElement("button", {
					className: i.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, s) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/uuid/v4.js"),
				i = s.n(r),
				a = s("./src/reddit/hooks/useOnClickOutside.ts"),
				d = s("./src/reddit/components/Popup/index.m.less"),
				c = s.n(d);

			function l(e) {
				const {
					id: t = i()(),
					onClose: s,
					onClickOutside: n,
					title: r,
					children: d
				} = e;
				return Object(a.a)(t, n), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: c.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: c.a.header
				}, o.a.createElement("span", {
					className: c.a.title
				}, r), o.a.createElement("button", {
					className: c.a.closeButton,
					onClick: s
				}, "✕")), d)
			}
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/isRemoved.ts"),
				x = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				g = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				y = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				E = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Report/index.tsx"),
				k = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				w = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				P = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				I = s("./src/reddit/components/PostBadges/index.m.less"),
				S = s.n(I);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => r.a.createElement("span", T({
					className: S.a.removalReason
				}, e), e.children),
				M = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				L = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				A = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				F = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				B = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				D = Object(h.t)({
					isProfilePostListing: h.I,
					isSubreddit: h.K,
					pageLayer: e => e
				}),
				W = Object(a.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(v.t)(e, {
							postId: s.id
						})
					},
					modModeEnabled: h.P
				}),
				H = Object(i.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(H(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: i,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: h,
					isProfilePostListing: v,
					modModeEnabled: I,
					onHideTooltip: D,
					onOpenRemovalReasonModal: W,
					onShowTooltip: H,
					post: V,
					tooltipType: U
				} = e;
				const G = {
						caretOnTop: !1
					},
					K = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === u.a.SUBREDDIT,
					z = B("Approve", V.id, U),
					q = B("Archived", V.id, U),
					J = B("Automod", V.id, U),
					X = B("Lock", V.id, U),
					Q = B("Mod", V.id, U),
					Z = B("Remove", V.id, U),
					Y = B("Report", V.id, U),
					$ = B("Spam", V.id, U),
					ee = B("Sticky", V.id, U),
					te = B("Pinned", V.id, U);
				return r.a.createElement("div", {
					className: t
				}, a && s && V.distinguishType === c.C.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(P.a, {
					className: S.a.modIcon,
					desc: R(s),
					id: Q,
					onMouseEnter: H(Q),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: Q,
					text: R(s)
				}, G))), V.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					className: S.a.archivedIcon,
					desc: M(),
					id: q,
					onMouseEnter: H(q),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: q,
					text: M()
				}, G))), V.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					className: S.a.lockIcon,
					desc: L(),
					id: X,
					onMouseEnter: H(X),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: X,
					text: L()
				}, G))), i && Object(f.k)(V) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: S.a.stickyIcon,
					desc: A(),
					id: ee,
					onMouseEnter: H(ee),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: ee,
					text: A()
				}, G))), v && h && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: S.a.stickyIcon,
					desc: F(),
					id: te,
					onMouseEnter: H(te),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: te,
					text: F()
				}, G))), (V.isApproved || V.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: S.a.approveIcon,
					desc: Object(x.a)(V),
					id: z,
					onMouseEnter: H(z),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: z,
					text: Object(x.a)(V)
				}, G))), Object(b.a)(V) && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: S.a.removeIcon,
					desc: Object(x.c)(V),
					id: Z,
					onMouseEnter: H(Z),
					onMouseLeave: D
				}), K && r.a.createElement(p.a, {
					className: S.a.addRemovalReason,
					onClick: W,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (V.modRemovalReason || V.modNote) && r.a.createElement(N, {
					onMouseEnter: H(Z),
					onMouseLeave: D
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, T({
					tooltipId: Z,
					text: Object(x.c)(V)
				}, G))), V.bannedBy && V.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: S.a.spamIcon,
					desc: Object(x.e)(V),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: $,
					text: Object(x.e)(V)
				}, G))), ("AutoModerator" === V.approvedBy || "AutoModerator" === V.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					className: Object(d.a)(S.a.automoderator, !!V.bannedBy && S.a.isRemoved),
					desc: x.b,
					id: J,
					onMouseEnter: H(J),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: J,
					text: x.b
				}, G))), Object(g.a)(V) && !I && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: S.a.reportIcon,
					desc: Object(x.d)(V.numReports),
					id: Y,
					onMouseEnter: H(Y),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: Y,
					text: Object(x.d)(V.numReports)
				}, G))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/hooks/useTracking.ts");
			var l = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(c.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(a.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						"aria-role": "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/video.ts"),
				b = s("./src/lib/classNames/index.ts"),
				x = s("./src/higherOrderComponents/withClickTracking.tsx"),
				g = s("./src/reddit/components/PostContainer/index.m.less"),
				f = s.n(g);
			const v = Object(r.c)({
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(u.b)(e, s.id)
					},
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.a)(e, {
							postId: s.id
						})
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.c)(e, {
							postId: s.id
						})
					}
				}),
				C = Object(m.a)(v),
				O = e => {
					const t = Object(x.d)(e.target, e.currentTarget),
						s = Object(x.b)(e.target, e.currentTarget, x.a.buttons);
					return "subreddit" !== t && s
				};
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						makePostContainerId: r,
						post: a,
						onClick: d,
						onPostContentClick: c,
						style: m,
						ref: u
					} = this.props, h = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: m,
						ref: u,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							!this.cancelClick && s.button < 2 && (e(() => d && d(s, a, t))(s), c && O(s) && c(s, a))
						},
						className: Object(b.a)(f.a.WrappedPost, n, "Post ".concat(a.id), {
							promotedlink: a.isSponsored
						}),
						id: r ? r(a.id) : a.id,
						tabIndex: -1
					}, s), x = !!a.media && a.media.type === p.o.VIDEO;
					return a.isSponsored || x ? o.a.createElement(i.a, {
						post: a,
						trackDisplay: !0
					}, h) : a.media && Object(p.F)(a.media) ? o.a.createElement(l, {
						postId: a.id
					}, h) : h
				}
			}
			t.a = C(Object(x.c)(y))
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
				ClassicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				classicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				p = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				h = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				b = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				x = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/trackers/lightbox.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/tooltip.ts"),
				O = s("./node_modules/lodash/find.js"),
				y = s.n(O),
				E = s("./node_modules/react-motion/lib/react-motion.js");
			const _ = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				k = "expando_content",
				j = {},
				w = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = y()(e, {
							key: k
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: k,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: k,
						style: {
							opacity: Object(E.spring)(1, _)
						}
					}] : [{
						key: k,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: k,
						style: {
							opacity: Object(E.spring)(0, _)
						}
					}]
				};
			class P extends o.a.Component {
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
					return o.a.createElement(E.TransitionMotion, {
						styles: e => w(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => o.a.createElement("div", {
						className: s
					}, e.map(e => o.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var I = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Post/index.ts"),
				T = s("./src/reddit/models/Vote/index.ts"),
				N = s("./src/reddit/selectors/activeModalId.ts"),
				M = s("./src/reddit/selectors/experiments/categories.ts"),
				L = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				R = s("./src/reddit/selectors/moderatorPermissions.ts"),
				A = s("./src/reddit/selectors/postCreations.ts"),
				F = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/AwardBadges/index.tsx"),
				W = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				H = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				V = s("./src/reddit/components/ExpandoButton/index.tsx"),
				U = s("./src/reddit/components/FlairWrapper/index.tsx"),
				G = s("./src/reddit/components/Flatlist/index.tsx"),
				K = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				z = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				q = s("./src/reddit/components/ModModeReports/index.tsx"),
				J = s("./src/reddit/components/ModModeReports/helpers.ts"),
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				Q = s("./src/higherOrderComponents/makeAsync.tsx"),
				Z = s("./src/lib/loadWithRetries/index.ts"),
				Y = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const $ = Object(Q.a)({
				ErrorComponent: () => o.a.createElement(Y.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(Z.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => o.a.createElement(Y.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var ee = e => o.a.createElement($, e),
				te = s("./src/reddit/components/PostMedia/index.tsx"),
				se = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				oe = s("./src/reddit/components/PostTitle/index.tsx"),
				re = s("./src/reddit/components/PostTopLine/index.tsx"),
				ie = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ae = s("./src/reddit/components/SourceLink/index.tsx"),
				de = s("./src/reddit/constants/componentTestIds.ts"),
				ce = s("./src/reddit/constants/postLayout.ts"),
				le = s("./src/reddit/contexts/PageLayer/index.tsx"),
				me = s("./src/reddit/helpers/postEvent.ts"),
				pe = s("./src/reddit/selectors/postFlair.ts"),
				ue = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				he = s("./src/reddit/constants/colors.ts"),
				be = s("./src/config.ts"),
				xe = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				ge = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
					id: "path-1"
				}))),
				fe = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ve = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Ce = s.n(ve);
			const {
				fbt: Oe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = () => Oe._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Oe._param("=User Agreement", o.a.createElement("a", {
				className: Ce.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, Oe._("User Agreement", null, {
				hk: "3MHgRl"
			}))), Oe._param("=Content Policy", o.a.createElement("a", {
				className: Ce.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Oe._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), Ee = () => Oe._("This content was removed for a violation of Reddit's {=Content Policy} .", [Oe._param("=Content Policy", o.a.createElement("a", {
				className: Ce.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Oe._("Content Policy", null, {
				hk: "2X6v1w"
			})))], {
				hk: "4DbEQC"
			});
			var _e = e => {
					const {
						hasPerms: t,
						removedBy: s,
						removedByCategory: n,
						subredditName: r
					} = e, i = t ? ((e, t, s) => {
						switch (e) {
							case S.g.AntiEvilOps:
								return Oe._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "3a8CyR"
								});
							case S.g.Author:
								return Oe._("This post was removed by the person who originally posted it.", null, {
									hk: "2lyUgL"
								});
							case S.g.AuthorDeleted:
								return Oe._("This post was deleted by the person who originally posted it.", null, {
									hk: "16LeiH"
								});
							case S.g.AutomodFiltered:
								return Oe._("This post was reported by automod, and is waiting for your review.", null, {
									hk: "2E46dR"
								});
							case S.g.CommunityOps:
								return Oe._("This post was removed by Reddit admin, u/{username}.", [Oe._param("username", t)], {
									hk: "34nHWu"
								});
							case S.g.ContentTakedown:
								return Oe._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "1wmhiC"
								});
							case S.g.CopyrightTakedown:
								return Oe._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "Ukfj"
								});
							case S.g.Moderator:
								return Oe._("This post was removed by r/{subredditName} moderator, u/{username}.", [Oe._param("subredditName", s), Oe._param("username", t)], {
									hk: "270bcn"
								});
							case S.g.Reddit:
								return Oe._("This post was removed by Reddit's spam filters.", null, {
									hk: "1k3lsh"
								});
							default:
								return Oe._("This post was removed by Reddit's spam filters.", null, {
									hk: "3oxS8r"
								})
						}
					})(n, s, r) : ((e, t) => {
						switch (e) {
							case S.g.AntiEvilOps:
								return Oe._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "2ZqyRT"
								});
							case S.g.Author:
								return Oe._("Sorry, this post was removed by the person who originally posted it.", null, {
									hk: "4IRCN"
								});
							case S.g.AuthorDeleted:
								return Oe._("Sorry, this post was deleted by the person who originally posted it.", null, {
									hk: "4emmIp"
								});
							case S.g.AutomodFiltered:
								return Oe._("Post is awaiting moderator approval.", null, {
									hk: "wdGOr"
								});
							case S.g.CommunityOps:
								return Oe._("Sorry, this post was removed by Reddit's Community team.", null, {
									hk: "3fs5lF"
								});
							case S.g.ContentTakedown:
								return Oe._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "jiKO8"
								});
							case S.g.CopyrightTakedown:
								return Oe._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "1TbEDT"
								});
							case S.g.Moderator:
								return Oe._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [Oe._param("subredditName", t)], {
									hk: "12NWKq"
								});
							case S.g.Reddit:
								return Oe._("Sorry, this post was removed by Reddit's spam filters.", null, {
									hk: "10ItEu"
								});
							default:
								return Oe._("Sorry, this post has been removed", null, {
									hk: "11sG9V"
								})
						}
					})(n, r), a = t ? (e => {
						switch (e) {
							case S.g.AntiEvilOps:
								return o.a.createElement(ye, null);
							case S.g.AuthorDeleted:
							case S.g.Author:
								return Oe._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
									hk: "2KZLgT"
								});
							case S.g.AutomodFiltered:
								return Oe._("It won’t show up in your community feed until you or another moderator approve it.", null, {
									hk: "2X5ECb"
								});
							case S.g.CommunityOps:
								return Oe._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [Oe._param("=just ask", o.a.createElement("a", {
									className: Ce.a.link,
									href: "".concat(be.a.redditUrl, "/message/compose/?to=r/reddit.com"),
									target: "_blank"
								}, Oe._("just ask", null, {
									hk: "jn9ip"
								})))], {
									hk: "3hMocZ"
								});
							case S.g.ContentTakedown:
								return o.a.createElement(Ee, null);
							case S.g.CopyrightTakedown:
								return Oe._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "7jiV"
								});
							case S.g.Moderator:
								return Oe._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
									hk: "22qJOB"
								});
							case S.g.Reddit:
								return Oe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3S3oDL"
								});
							default:
								return Oe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "uKfHK"
								})
						}
					})(n) : ((e, t) => {
						switch (e) {
							case S.g.AntiEvilOps:
								return o.a.createElement(ye, null);
							case S.g.AuthorDeleted:
							case S.g.Author:
								return Oe._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
									hk: "2OBDBc"
								});
							case S.g.AutomodFiltered:
								return Oe._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [Oe._param("=[subreddit name]", o.a.createElement("a", {
									className: Ce.a.link,
									href: "".concat(be.a.redditUrl, "/r/").concat(t),
									target: "_blank"
								}, Oe._("{subreddit name}", [Oe._param("subreddit name", "r/".concat(t))], {
									hk: "2o22vl"
								})))], {
									hk: "3dxuEW"
								});
							case S.g.CommunityOps:
								return Oe._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
									hk: "uPiHS"
								});
							case S.g.ContentTakedown:
								return o.a.createElement(Ee, null);
							case S.g.CopyrightTakedown:
								return Oe._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "2e8fhi"
								});
							case S.g.Moderator:
								return Oe._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
									hk: "QXZPk"
								});
							case S.g.Reddit:
							default:
								return Oe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3vUmEz"
								})
						}
					})(n, r), d = t ? he.a.warning : he.a.dayModeActionIcon, c = (e => {
						let t;
						switch (e) {
							case S.g.AntiEvilOps:
							case S.g.AutomodFiltered:
							case S.g.CommunityOps:
							case S.g.ContentTakedown:
							case S.g.CopyrightTakedown:
							case S.g.Reddit:
								t = xe.a;
								break;
							case S.g.AuthorDeleted:
							case S.g.Author:
								t = fe.b;
								break;
							case S.g.Moderator:
								t = ge;
								break;
							default:
								t = xe.a
						}
						return o.a.createElement(t, {
							className: Ce.a.icon
						})
					})(n);
					return o.a.createElement(ue.a, {
						className: Ce.a.BannerBase,
						color: d,
						icon: c,
						subtitle: a,
						title: i
					})
				},
				ke = e => {
					const {
						isAdminOrMod: t,
						post: s,
						subredditOrProfile: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, n && s.removedByCategory && o.a.createElement(_e, {
						hasPerms: t,
						removedBy: s.removedBy,
						removedByCategory: s.removedByCategory,
						subredditName: n.name
					}))
				},
				je = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				we = s("./src/lib/prettyPrintNumber/index.ts"),
				Pe = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Ie = s.n(Pe);
			var Se = e => {
					let {
						post: t,
						showViewCount: s
					} = e;
					const {
						upvotePercentString: n,
						viewCountString: r
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(we.b)(e.viewCount);
						return {
							upvotePercentString: je.fbt._("{percent upvoted}% Upvoted", [je.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: je.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [je.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(t), i = s && !!t.viewCount;
					return o.a.createElement("div", {
						className: Ie.a.viewCounts
					}, i && o.a.createElement("span", null, r), i && !!t.upvoteRatio && o.a.createElement("span", {
						className: Ie.a.dotSpacer
					}), !!t.upvoteRatio && o.a.createElement("span", null, n))
				},
				Te = s("./src/reddit/components/PostContent/index.m.less"),
				Ne = s.n(Te);
			const Me = c.a.wrapped(oe.c, "PostTitle", Ne.a),
				Le = c.a.wrapped(V.a, "ExpandoButton", Ne.a),
				Re = c.a.wrapped(P, "ClassicExpandoMotion", Ne.a),
				Ae = c.a.wrapped(G.c, "FullWidthFlatlist", Ne.a),
				Fe = c.a.wrapped(W.a, "ClassicThumbnail", Ne.a),
				Be = Object(le.t)({
					isCommentsPage: le.w,
					pageLayer: e => e
				}),
				De = Object(r.b)(() => Object(a.c)({
					activeModalId: N.a,
					flairStyleTemplate: le.R,
					currentUser: B.i,
					crosspost: F.d,
					hideNSFWPref: B.z,
					isAdminOrMod: (e, t) => {
						const s = Object(F.Z)(e, {
							postId: t.postId
						});
						return !!s && Object(R.g)(e, {
							subredditId: s.id
						})
					},
					isCurrentUserProfilePost: F.j,
					isExpanded: F.l,
					post: F.M,
					moderatorPermissions: R.i,
					modModeEnabled: le.P,
					isInCategoriesExperiment: M.a,
					showAwardsPlaque: L.a,
					showEditFlair: pe.a,
					subredditOrProfile: F.Z,
					isEditing: A.C,
					userIsOp: B.hb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(v.W)(s)),
						onOpenReportsDropdown: t => e(Object(C.h)({
							tooltipId: t
						})),
						onVoteClick: t => {
							const n = t === T.a.upvoted ? Object(v.Y)(s) : Object(v.w)(s);
							e(n)
						}
					}
				}),
				We = c.a.wrapped(i.a, "ThumbLink", Ne.a),
				He = e => {
					let {
						post: t,
						templatePlaceholderImage: s
					} = e;
					return t.source ? o.a.createElement(Fe, {
						post: t,
						forceShowNSFW: !0,
						templatePlaceholderImage: s
					}) : o.a.createElement(We, {
						to: Object(x.b)(t.permalink)
					}, o.a.createElement(Fe, {
						post: t,
						forceShowNSFW: !0
					}))
				},
				Ve = e => {
					let {
						post: t,
						isExpanded: s,
						scrollerItemRef: n
					} = e;
					return o.a.createElement(Re, {
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(te.a, {
							className: Ne.a.ClassicPostMedia,
							isListing: !1,
							isNotCardView: !0,
							post: t,
							shouldLoad: !0,
							showFull: !0,
							showCentered: !0,
							scrollerItemRef: n
						})),
						shouldExpand: !!s
					})
				};
			t.a = Be(De(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					flairStyleTemplate: r,
					hideNSFWPref: i,
					isAdminOrMod: a,
					isCommentsPage: c,
					isCurrentUserProfilePost: x,
					isEditing: v,
					isExpanded: C,
					isOverlay: O,
					moderatorPermissions: y,
					modModeEnabled: E,
					onIgnoreReports: _,
					onOpenReportsDropdown: k,
					onVoteClick: j,
					post: w,
					scrollerItemRef: P,
					sendEvent: T,
					showAwardsPlaque: N,
					showEditFlair: M,
					subredditOrProfile: L,
					userIsOp: R
				} = e, A = Object(b.a)(y), F = Object(u.a)(y), B = Object(h.a)(y), W = A || F, V = ((e, t, s) => {
					const [n, o] = e ? [Object(p.e)(e) === s.author, e.isEmployee] : [!1, !1];
					return n || t || o
				})(n, W, w), Q = !!w.media && (w.media.type === I.o.RTJSON || w.media.type === I.o.TEXT), Z = R && Q, Y = Object(J.c)(w);
				let $;
				const le = !(E && b.a),
					pe = Object(se.h)({
						hide: le,
						editPost: le,
						save: le,
						report: le
					}),
					ue = w.removedByCategory === S.g.AuthorDeleted,
					he = n && (n.displayText === w.author || n.username === w.author),
					be = !ue && (he || a || !(w.removedByCategory && w.media && (Object(I.K)(w.media) || Object(I.I)(w.media)))),
					xe = w.removedByCategory === S.g.Reddit && Object(l.e)(w.created) > 24,
					ge = w.removedByCategory && w.removedByCategory !== S.g.Reddit || xe,
					fe = o.a.createElement(Me, {
						post: w,
						size: oe.b.ExtraLarge,
						showCategoryTag: O,
						isOverlay: O,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					ve = o.a.createElement(Se, {
						post: w,
						showViewCount: V
					}),
					Ce = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? ce.g.Classic : t ? ce.g.Large : n.media ? ce.g.Large : ce.g.Medium
					})(e);
				if (Ce === ce.g.Classic) $ = o.a.createElement("div", {
					"data-test-id": de.e
				}, o.a.createElement(ne.a, {
					model: w,
					handleVote: j,
					subreddit: L,
					isOverlay: O
				}), o.a.createElement("div", {
					className: Ne.a.mainBody
				}, o.a.createElement("div", {
					className: Ne.a.content
				}, o.a.createElement(re.a, {
					hideAwards: N,
					hideNSFWPref: i,
					inSubredditOrProfile: !0,
					isCommentsPage: c,
					isCurrentUserProfilePost: x,
					isOverlay: !!O,
					isTopicPage: !1,
					post: w,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !w.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: L
				}), fe, o.a.createElement(U.a, {
					className: c ? Ne.a.leftPadding : null,
					post: w,
					showCategoryTag: e.isInCategoriesExperiment && c,
					sendEvent: T
				}), E && A && Y && o.a.createElement(q.a, {
					onIgnoreReports: _,
					reportable: w
				}), o.a.createElement(K.d, {
					postId: w.id
				}), o.a.createElement("div", {
					className: Ne.a.FlatlistContainer
				}, o.a.createElement(Le, {
					crosspost: s || void 0,
					isExpanded: !!C,
					post: w,
					useMediaIcons: !1
				}), Ve(e), N && o.a.createElement(D.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: w,
					tooltipType: O ? ie.c.Lightbox : void 0
				}), o.a.createElement(Ae, {
					currentUser: n,
					hasModFlairPerms: F,
					hasModFullPerms: B,
					hasModPostPerms: A,
					isOverlay: O,
					onIgnoreReports: _,
					onOpenReportsDropdown: k,
					modModeEnabled: E,
					post: w,
					showUpvotePercent: !0,
					showViewCount: V,
					useFlatlistBreakpoints: pe
				}))), Object(m.a)(w) && o.a.createElement(He, {
					post: w,
					templatePlaceholderImage: r && r.postPlaceholderImage
				})));
				else if (Ce === ce.g.Medium) {
					const t = Object(m.a)(w);
					$ = o.a.createElement("div", {
						"data-test-id": de.e
					}, o.a.createElement(ne.a, {
						model: w,
						handleVote: j,
						subreddit: L,
						isOverlay: O
					}), o.a.createElement("div", {
						className: Ne.a.mainBody
					}, o.a.createElement("div", {
						className: Ne.a.content
					}, o.a.createElement(re.a, {
						hideAwards: N,
						hideNSFWPref: i,
						inSubredditOrProfile: !0,
						isCommentsPage: c,
						isCurrentUserProfilePost: x,
						isOverlay: !!O,
						isTopicPage: !1,
						post: w,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!O && !w.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: L
					}), fe, w.source && o.a.createElement(ae.a, {
						post: w,
						isCommentsPage: c
					}), o.a.createElement(U.a, {
						className: c ? Ne.a.leftPadding : null,
						post: w,
						showCategoryTag: e.isInCategoriesExperiment && c,
						sendEvent: T
					}), L && ge && o.a.createElement(ke, {
						isAdminOrMod: a,
						post: w,
						subredditOrProfile: L
					}), E && A && Y && o.a.createElement(q.a, {
						onIgnoreReports: _,
						reportable: w
					})), t && o.a.createElement(z.a, {
						post: w,
						forceShowNSFW: !0,
						hasModPostPerms: W,
						isCommentsPage: c,
						isOverlay: !0,
						modModeEnabled: E,
						templatePlaceholderImage: r && r.postPlaceholderImage
					})), o.a.createElement(K.d, {
						postId: w.id
					}), N && o.a.createElement(D.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: w,
						tooltipType: O ? ie.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: Ne.a.controlsContainer
					}, o.a.createElement(G.c, {
						currentUser: n,
						hasModFlairPerms: F,
						hasModFullPerms: B,
						hasModPostPerms: A,
						isOverlay: O,
						modModeEnabled: E,
						onIgnoreReports: _,
						onOpenReportsDropdown: k,
						post: w,
						showEditPost: Z,
						showEditFlair: M,
						tooltipType: O ? ie.c.Lightbox : void 0,
						useFlatlistBreakpoints: pe
					}), ve))
				} else Ce === ce.g.Large && ($ = o.a.createElement("div", {
					"data-test-id": de.e
				}, o.a.createElement(ne.a, {
					model: w,
					handleVote: j,
					subreddit: L,
					isOverlay: O
				}), o.a.createElement(re.a, {
					hideAwards: N,
					hideNSFWPref: i,
					inSubredditOrProfile: !0,
					isCommentsPage: c,
					isCurrentUserProfilePost: x,
					isOverlay: !!O,
					isTopicPage: !1,
					post: w,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !w.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: L
				}), fe, ((e, t, s, n) => e.source && !t && (s || n))(w, s, O, c) && o.a.createElement(ae.a, {
					post: w,
					isCommentsPage: c
				}), o.a.createElement(U.a, {
					className: c ? Ne.a.leftPadding : null,
					post: w,
					showCategoryTag: e.isInCategoriesExperiment && c,
					sendEvent: T
				}), L && ge && o.a.createElement(ke, {
					isAdminOrMod: a,
					post: w,
					subredditOrProfile: L
				}), v ? o.a.createElement(ee, {
					post: w
				}) : be && o.a.createElement(te.a, {
					className: Object(d.a)(Ne.a.LargePostMedia, {
						[Ne.a.isCommentsPage]: c
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: O,
					isOverlay: O,
					post: w,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !O,
					showCentered: !0,
					scrollerItemRef: P
				}), E && A && Y && o.a.createElement(q.a, {
					onIgnoreReports: _,
					reportable: w
				}), o.a.createElement(K.d, {
					postId: w.id
				}), N && o.a.createElement(D.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: w,
					tooltipType: O ? ie.c.Lightbox : void 0
				}), o.a.createElement("div", {
					className: Ne.a.controlsContainer
				}, o.a.createElement(G.c, {
					currentUser: n,
					hasModFlairPerms: F,
					hasModFullPerms: B,
					hasModPostPerms: A,
					isOverlay: O,
					modModeEnabled: E,
					onIgnoreReports: _,
					onOpenReportsDropdown: k,
					post: w,
					showEditPost: Z,
					showEditFlair: M,
					tooltipType: O ? ie.c.Lightbox : void 0,
					useFlatlistBreakpoints: pe
				}), ve)));
				return o.a.createElement(X.a, {
					className: Object(d.a)(t, Ne.a.postContainer, {
						[Ne.a.hasEventMeta]: Object(me.a)(w)
					}),
					isOverlay: O,
					post: w,
					eventFactory: O ? g.b : f.f
				}, o.a.createElement(H.a, {
					post: w
				}), $)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				m = s("./src/reddit/actions/postCreation/general.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				f = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/models/PostCreationForm/index.ts"),
				O = s("./src/reddit/selectors/postCollection.ts"),
				y = s("./src/lib/timeAgo/index.ts"),
				E = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/models/User/index.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				S = s.n(I),
				T = s("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = T.a.div("Container", S.a), L = T.a.h2("PostTitle", S.a), R = T.a.div("MetaLine", S.a), A = T.a.span("SubredditName", S.a), F = T.a.time("InfoSpan", S.a), B = Object(d.c)({
				subreddit: (e, t) => {
					let {
						collection: {
							subredditId: s
						}
					} = t;
					return s ? Object(w.Q)(e, {
						subredditId: s
					}) : void 0
				},
				user: P.i
			});
			class D extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						subreddit: t,
						user: s,
						onHoverActionText: n
					} = this.props, o = t && Object(k.f)(t) && s ? Object(_.c)(Object(j.e)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(M, {
						onClick: this.onClick,
						className: S.a.container
					}, i.a.createElement(L, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(R, {
						"data-redditstyle": !0
					}, o && i.a.createElement(A, {
						"data-redditstyle": !0
					}, o), o && i.a.createElement(E.b, null), i.a.createElement(F, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(E.b, null), i.a.createElement(F, null, N._("created {time}", [N._param("time", Object(y.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), n && i.a.createElement("div", {
						className: S.a.onHoverActionText
					}, i.a.createElement("span", null, n)))
				}
			}
			var W = Object(a.b)(B)(D),
				H = s("./src/reddit/helpers/trackers/postCollection.ts"),
				V = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				U = s.n(V);
			const G = "".concat(n.a.assetPath, "/img/snoo-drafts.png"),
				K = T.a.div("TopRow", U.a),
				z = T.a.div("TitleRow", U.a),
				q = T.a.div("DetailsContainer", U.a),
				J = T.a.wrapped(v.a, "ButtonRow", U.a),
				X = T.a.div("CloseWrapper", U.a),
				Q = T.a.wrapped(x.a, "Close", U.a),
				Z = T.a.div("Empty", U.a),
				Y = T.a.img("EmptyImage", U.a),
				$ = T.a.p("EmptyText", U.a),
				ee = T.a.div("FilterWrapper", U.a),
				te = T.a.wrapped(b.a, "FilterInput", U.a),
				se = T.a.wrapped(f.a, "SearchIcon", U.a),
				ne = T.a.wrapped(g.a, "PlusIcon", U.a),
				oe = T.a.wrapped(h.j, "CreateCollectionButton", U.a),
				re = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ie = Object(d.c)({
					collections: O.w
				}),
				ae = Object(a.b)(ie, (e, t) => {
					let {
						postId: s,
						isOverlay: n
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = C.b;
							s && (t = Object(C.t)(s, !!n)), e(Object(m.y)(t))
						}
					}
				});
			class de extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(H.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === u.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(H.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(H.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(W, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(H.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(Z, null, i.a.createElement(Y, {
						src: G
					}), i.a.createElement($, null, o.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Z, null, i.a.createElement($, null, o.fbt._("No collection matching filter", null, {
						hk: "2vawdK"
					}), ";"))
				}
				render() {
					const {
						collections: e,
						titleText: t
					} = this.props;
					let s;
					if (0 === e.length) s = this.renderNoCollections();
					else {
						const t = re(e, this.state.filterStr);
						s = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return i.a.createElement("div", {
						className: U.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(K, null, i.a.createElement(z, {
						"data-redditstyle": !0
					}, t || o.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(X, {
						onClick: this.close
					}, i.a.createElement(Q, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(se, null), i.a.createElement(te, {
						placeholder: o.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(q, null, s), i.a.createElement(J, null, i.a.createElement(oe, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(ne, null), o.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const ce = Object(c.a)(ae(Object(p.c)(de)));
			t.a = ce
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				c = s("./src/lib/formatApiError/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/ErrorText/index.tsx"),
				b = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				f = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				O = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				y = s.n(O),
				E = s("./src/lib/lessComponent.tsx");
			const _ = E.a.div("Container", y.a),
				k = E.a.div("Content", y.a),
				j = E.a.div("TitleRow", y.a),
				w = E.a.div("Details", y.a),
				P = E.a.wrapped(m.f, "Footer", y.a),
				I = E.a.wrapped(u.i, "CancelButton", y.a),
				S = E.a.div("CloseWrapper", y.a),
				T = E.a.wrapped(f.a, "CloseIcon", y.a),
				N = E.a.label("Label", y.a),
				M = E.a.wrapped(b.a, "TitleInput", y.a),
				L = E.a.wrapped(g.a, "AddCollectionIcon", y.a),
				R = E.a.wrapped(u.f, "PrimaryActionButton", y.a),
				A = E.a.wrapped(x.a, "LoadingIcon", y.a),
				F = E.a.wrapped(h.b, "ErrorText", y.a),
				B = Object(a.c)({
					collection: C.r,
					error: C.c,
					isPending: C.h
				}),
				D = Object(i.b)(B, (e, t) => ({
					onCreate: (t, s) => e(Object(l.b)(t, s)),
					onUpdate: s => e(Object(l.h)(t.collectionId, s))
				}));
			class W extends r.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: s
						} = this.state;
						if (e) {
							await this.props.onUpdate(s) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(s, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: s
					} = this.props, o = !e, i = !!this.state.collectionTitle.trim(), a = o ? n.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : n.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return r.a.createElement(_, null, r.a.createElement(S, {
						onClick: this.props.onCancel
					}, r.a.createElement(T, null)), r.a.createElement(k, null, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null, r.a.createElement(L, null), n.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(w, null, n.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, o ? n.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : n.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(M, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: n.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(P, null, r.a.createElement(v.a, null, r.a.createElement(I, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? r.a.createElement(A, {
						sizePx: 10
					}) : a)), t && r.a.createElement(F, null, Object(c.a)(t))))
				}
			}
			t.a = Object(d.a)(D(W))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				h = s("./src/reddit/components/FlairPreview/index.tsx"),
				b = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				v = s("./src/reddit/selectors/postFlair.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				_ = s.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				j = Object(d.c)({
					flairData: v.d,
					subreddit: C.Q,
					isMod: (e, t) => !!Object(f.j)(e, t)
				});
			class w extends i.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(O.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(y.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(y.c)(this.props.flairs) || null;
					return Object(y.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: r
					} = e, a = r.displayText, {
						templates: d,
						templateIds: c
					} = n, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(u.a, {
						className: s
					}, i.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: r.id,
						templates: d,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: _.a.buttonsRow
					}, i.a.createElement(x.f, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.i, {
						className: _.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const P = Object(a.b)(j, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(w);
			t.a = Object(l.a)(Object(c.c)(P))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class h extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const b = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(h))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/components/PostLeftRail/index.m.less"),
				c = s.n(d);
			const l = 40,
				m = e => e.isRemoved ? a.a.removed : e.isReported ? a.a.reported : "transparent",
				p = Object(i.a)(e => {
					const t = m(e),
						s = {
							width: "".concat(l, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return o.a.createElement("div", {
						className: Object(r.a)(c.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = p
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign(Object.assign({}, e), {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(i.a, Object.assign(Object.assign({}, e), {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(g);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: g,
					isOverlay: v,
					isTopicPage: C,
					post: O,
					shouldShowSubscribeButton: y,
					subredditOrProfile: E,
					tooltipType: _
				} = e, k = !!C;
				return o.a.createElement("div", {
					className: f.a.metaContainer
				}, !n && !O.isSponsored && E && o.a.createElement(i.a, {
					postId: O.id,
					subredditName: E.name
				}, o.a.createElement(m.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: E.url
				}, E.displayText)), E && E.isQuarantined && o.a.createElement(l.a, null), !n && !O.isSponsored && E && y && !g && o.a.createElement(p.a, {
					getEventFactory: e => Object(b.f)(O.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: E.name,
						type: Object(x.f)(E) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: O.id,
					small: !0
				}), !n && !O.isSponsored && o.a.createElement(h.b, null), !n && !O.isSponsored && o.a.createElement(a.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), o.a.createElement(c.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					post: O,
					tooltipType: _
				}), o.a.createElement(d.a, {
					displayText: E ? E.displayText : null,
					inSubredditOrProfile: !!n,
					post: O,
					tooltipType: _
				}), !k && o.a.createElement(r.a, {
					hideCta: s,
					thing: O,
					tooltipType: v ? c.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "e", (function() {
				return y
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				i = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				a = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				d = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				c = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				p = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = s.n(p);
			const h = n.a.wrapped(i.a, "Icon", u.a),
				b = n.a.wrapped(a.a, "Icon", u.a),
				x = n.a.wrapped(d.a, "Icon", u.a),
				g = n.a.wrapped(c.a, "Icon", u.a),
				f = n.a.wrapped(l.a, "Icon", u.a),
				v = n.a.wrapped(m.a, "Icon", u.a),
				C = n.a.wrapped(o.b, "CheckboxMenuItem", u.a),
				O = n.a.wrapped(r.b, "DropdownRow", u.a),
				y = n.a.div("ListContainer", u.a)
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PostOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "_1EbinKu2t3KjaT2gR156Qp",
				DropdownRow: "_1muOrgIRB6t41qDocDiXul",
				dropdownRow: "_1muOrgIRB6t41qDocDiXul",
				disabledRow: "_2Odc33_zXVGMHX8Um_2eO7",
				AddCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				addCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				CalendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				calendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r",
				LinkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				linkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				LiveIcon: "otoj2GWn145x5kC1YJdJV",
				liveIcon: "otoj2GWn145x5kC1YJdJV",
				PostCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p",
				postCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return xe
			})), s.d(t, "b", (function() {
				return ge
			})), s.d(t, "c", (function() {
				return fe
			})), s.d(t, "d", (function() {
				return ve
			})), s.d(t, "f", (function() {
				return Ce
			})), s.d(t, "e", (function() {
				return Oe
			})), s.d(t, "h", (function() {
				return Le
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/eventPosts/index.ts"),
				h = s("./src/reddit/actions/gold/modals.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/actions/pinnedPost.ts"),
				g = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/actions/postCreation/editing.ts"),
				v = s("./src/reddit/actions/reportFlow.ts"),
				C = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				O = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				E = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				k = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				j = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				w = s("./src/reddit/icons/fonts/helpers.tsx"),
				P = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				I = s.n(P);
			var S = p.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(w.b)("hide"), " ").concat(e.className)
				}), "HideIcon", I.a),
				T = s("./src/reddit/icons/fonts/Link/index.tsx"),
				N = s("./src/reddit/icons/fonts/Live/index.tsx"),
				M = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				L = s("./src/reddit/icons/fonts/Report/index.tsx"),
				R = s("./src/reddit/icons/fonts/Save/index.tsx"),
				A = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				F = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				B = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				D = s.n(B);
			var W = p.a.wrapped(e => i.a.createElement("i", {
					className: Object(m.a)(Object(w.b)("unpin"), e.className)
				}), "UnpinIcon", D.a),
				H = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				V = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				U = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				G = s("./src/reddit/components/OverflowMenu/index.tsx"),
				K = s("./src/reddit/components/ReportFlow/index.tsx"),
				z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				J = s("./src/reddit/controls/Dropdown/Row.tsx"),
				X = s("./src/reddit/components/Flatlist/constants.ts"),
				Q = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/helpers/correlationIdTracker.ts"),
				$ = s("./src/reddit/helpers/isCrosspost.ts"),
				ee = s("./src/reddit/helpers/postEvent.ts"),
				te = s("./src/reddit/helpers/trackers/post.ts"),
				se = s("./src/reddit/models/Subreddit/index.ts"),
				ne = s("./src/reddit/selectors/activeModalId.ts"),
				oe = s("./src/reddit/selectors/posts.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				ae = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				de = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ce = s("./src/reddit/actions/postCollection/index.ts"),
				le = s("./src/reddit/helpers/trackers/postCollection.ts"),
				me = s("./src/reddit/models/PostCreationForm/index.ts"),
				pe = s("./src/reddit/selectors/postCollection.ts"),
				ue = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				he = s.n(ue),
				be = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const xe = p.a.wrapped(j.a, "Icon", he.a),
				ge = p.a.wrapped(S, "Icon", he.a),
				fe = p.a.wrapped(M.a, "Icon", he.a),
				ve = p.a.wrapped(L.a, "Icon", he.a),
				Ce = p.a.wrapped(V.a, "Icon", he.a),
				Oe = p.a.wrapped(R.a, "Icon", he.a),
				ye = p.a.wrapped(E.a, "Icon", he.a),
				Ee = p.a.wrapped(H.a, "AddCollectionIcon", he.a),
				_e = p.a.wrapped(k.a, "Icon", he.a),
				ke = p.a.wrapped(A.a, "Icon", he.a),
				je = p.a.wrapped(F.a, "Icon", he.a),
				we = p.a.wrapped(U.b, "Icon", he.a),
				Pe = p.a.wrapped(W, "Icon", he.a),
				Ie = p.a.wrapped(N.a, "LiveIcon", he.a),
				Se = p.a.wrapped(_.a, "CalendarIcon", he.a),
				Te = p.a.wrapped(T.a, "LinkIcon", he.a),
				Ne = p.a.wrapped(J.b, "DropdownRow", he.a),
				Me = p.a.wrapped(q.a, "PostCheckboxMenuItem", he.a),
				Le = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: n = !0,
						report: o = !0,
						editPost: r = !0,
						hide: i = !0
					} = e;
					return {
						[X.a.Gild]: t,
						[X.a.Save]: s,
						[X.a.Share]: n,
						[X.a.Report]: o,
						[X.a.EditPost]: r,
						[X.a.Hide]: i
					}
				},
				Re = Object(a.b)(() => Object(c.c)({
					currentUser: ie.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(ne.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: pe.j,
					isSaved: oe.w,
					isHidden: oe.o,
					isSponsored: oe.y,
					isNSFW: oe.r,
					isOC: oe.s,
					isPinned: oe.t,
					isSpoiler: oe.x,
					post: oe.M,
					postSubredditAboutInfo: oe.N,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: n
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === n
					},
					sendRepliesToggled: oe.W,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, n = be(t, ["isProfilePostListing"]);
						return Object(z.B)(e, n) && s && Object(ie.hb)(e, n) && Object(ie.fb)(e, {
							userName: Object(oe.M)(e, {
								postId: n.postId
							}).author
						})
					},
					subredditOrProfile: oe.Z,
					hasSubredditRules: re.k,
					userIsOp: ie.hb,
					isPostPartOfACollection: pe.l,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(oe.M)(e, {
								postId: s
							}).isSponsored) return !1;
						const n = Object(oe.Z)(e, {
							postId: s
						});
						if (!n) return !1;
						const o = n.type === se.d.User;
						return Object(pe.s)(e, n.name, o)
					}
				}), (e, t) => {
					let {
						permalink: s,
						postId: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						onCopyLink: () => e(Object(g.B)(s)),
						onDelete: t => e(Object(g.K)(n, t, o)),
						onDistinguishPost: t => e(Object(g.v)(n, t)),
						onGildClick: t => e(Object(h.d)({
							correlationId: t,
							thingId: n
						})),
						onToggleSave: () => e(Object(g.R)(n)),
						onToggleNSFW: () => e(Object(g.G)(n)),
						onToggleOC: () => e(Object(g.H)(n)),
						onTogglePinned: () => e(Object(x.i)(n)),
						onToggleSpoiler: () => e(Object(g.U)(n)),
						onHide: t => e(Object(g.V)(n, !t, o, !0)),
						onReportClick: () => e(Object(v.j)(n, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(y.p)()(t()))), e(Object(u.startEventNowRequested)(n))
						},
						onEdit: () => {
							const t = !o && !r;
							e(Object(f.a)(n, t))
						},
						onFlairPost: () => e(Object(b.i)(Object(de.b)(n, o))),
						onToggleSendReplies: () => e(Object(g.S)(n)),
						showCollectionsList: (t, s) => {
							e(Object(ce.e)(t)).then(() => {
								const t = Object(me.s)(s, o);
								e(b.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(b.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(n)))
					}
				});
			class Ae extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = e => {
						const {
							isOverlay: t,
							post: s,
							sendEvent: n
						} = this.props;
						n(Object(te.f)(s.id, e, t ? "post_detail" : "post"))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						const e = Object(Y.d)(Y.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.postId))
					}, this.toggleHide = () => {
						const e = this.props.isHidden ? "unhide" : "hide";
						this.handlePostEvent(e), this.props.onHide(this.props.isHidden)
					}, this.toggleSave = () => {
						const e = this.props.isSaved ? "unsave" : "save";
						this.handlePostEvent(e), this.props.onToggleSave()
					}, this.handleReport = () => {
						this.handlePostEvent("report"), this.props.onReportClick()
					}, this.toggleOC = () => {
						this.handlePostEvent(this.props.isOC ? "unmark_original_content" : "mark_original_content"), this.props.onToggleOC()
					}, this.togglePinned = () => {
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(te.g)(this.props.post.id)) : this.props.sendEvent(Object(te.c)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(Q.b)({
							breakpointType: Q.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: s,
							sendEvent: n
						} = this.props;
						e || (n(Object(le.b)(s.id)), t(s.belongsTo.id, s.id))
					}
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === Z.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(Q.b)({
						breakpointType: Q.a.HideIfVWLarger,
						flatlistItem: X.a.PostOverflowMenu,
						isLoggedIn: !!e.currentUser,
						isUserOp: e.userIsOp
					})
				}
				renderDropdownIcons() {
					const {
						props: e
					} = this, {
						currentUser: t,
						isFutureEvent: s,
						isPinned: r,
						onStartEventNow: a,
						post: d,
						shouldRenderCollectionEditButtons: c,
						showEditFlair: l,
						showPinAction: m,
						toggleAddEventStartTimeModal: p,
						toggleEditStartTimeModal: u,
						userIsOp: h
					} = e, b = e.currentUser && e.currentUser.isEmployee, x = Object($.a)(e.post), g = e.post.belongsTo.type === O.a.PROFILE || Object(se.e)(e.postSubredditAboutInfo), f = t && d.isGildable, v = Object(ee.a)(e.post);
					return i.a.createElement("div", null, f && i.a.createElement(Ne, {
						className: this.getBreakpointClass(X.a.Gild),
						displayText: n.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(xe, null)), i.a.createElement(Ne, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: n.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							this.handlePostEvent("share_copy"), e.onCopyLink()
						}
					}, i.a.createElement(Te, null)), i.a.createElement(Ne, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: n.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(_e, null)), e.showEditPost && i.a.createElement(Ne, {
						className: this.getBreakpointClass(X.a.EditPost),
						displayText: n.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, i.a.createElement(fe, null)), l && i.a.createElement(Ne, {
						displayText: n.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, i.a.createElement(je, null)), i.a.createElement(Ne, {
						className: this.getBreakpointClass(X.a.Save),
						displayText: e.isSaved ? n.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : n.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? i.a.createElement(Ce, null) : i.a.createElement(Oe, null)), m && i.a.createElement(Ne, {
						displayText: r ? n.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : n.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? i.a.createElement(Pe, null) : i.a.createElement(ke, null)), !e.isSponsored && i.a.createElement(Ne, {
						className: this.getBreakpointClass(X.a.Hide),
						displayText: e.isHidden ? n.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : n.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, i.a.createElement(ge, null)), !e.isSponsored && !h && i.a.createElement(Ne, {
						className: this.getBreakpointClass(X.a.Report),
						displayText: n.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(ve, null)), c && s && a && i.a.createElement(Ne, {
						onClick: a,
						displayText: n.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(Ie, null)), c && s && u && i.a.createElement(Ne, {
						onClick: u,
						displayText: n.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(Se, null)), c && !v && p && i.a.createElement(Ne, {
						displayText: n.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: p
					}, i.a.createElement(Se, null)), c && i.a.createElement(Ne, {
						className: this.props.isPostPartOfACollection ? he.a.disabledRow : void 0,
						displayText: n.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(Ee, null)), h && i.a.createElement(Ne, {
						displayText: n.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, i.a.createElement(we, null)), b && e.userIsOp && i.a.createElement(Ne, {
						displayText: e.post.distinguishType === o.C.ADMIN ? n.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : n.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === o.C.ADMIN ? e.onDistinguishPost(o.C.NONE) : e.onDistinguishPost(o.C.ADMIN)
					}, i.a.createElement(ye, null)), h && g && !x && i.a.createElement(Me, {
						text: n.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.isOC
					}), h && i.a.createElement(Me, {
						text: n.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.isSpoiler
					}), h && i.a.createElement(Me, {
						text: n.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.isNSFW
					}), e.userIsOp && i.a.createElement(Me, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "6AmTA"
						}),
						onClick: e.onToggleSendReplies,
						isSelected: this.props.sendRepliesToggled
					}))
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement("div", null, i.a.createElement(G.b, {
						className: Object(m.a)(he.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && i.a.createElement(K.a, {
						withOverlay: !0,
						overlayCustomStyles: K.b,
						postId: e.postId,
						timestamp: this.context.currentTime
					}), this.props.isConfirmDeleteOpen && i.a.createElement(Fe, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}))
				}
			}
			const Fe = Object(d.i)(e => i.a.createElement(ae.a, {
				toggleModal: e.toggleConfirmDelete,
				onConfirm: () => e.handleDeletePost(e.location),
				actionText: n.fbt._("delete post", null, {
					hk: "49hVoG"
				}),
				headerText: n.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}),
				modalText: n.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
					hk: "2eDKWP"
				}),
				withOverlay: !0
			}));
			Ae.contextType = C.a;
			t.g = Re(Ae)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = s("./src/reddit/components/PopupPortal/index.tsx"),
				d = s("./src/reddit/components/PostLeftRail/index.tsx"),
				c = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					subreddit: g,
					isOverlay: f
				} = e, v = "upvote-button-".concat(t.id).concat(f ? "-overlay" : ""), {
					moderationPrompt: C
				} = t;
				return o.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: x
				}, n && o.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: h
				}), o.a.createElement(c.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: v
				}), C && o.a.createElement(a.b, {
					rightOf: v
				}, "survey" === C ? o.a.createElement(i.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!f
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!f
				})))
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
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(v);
			const O = s("./src/lib/lessComponent.tsx").a.div("Container", C.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: n,
					hideNSFWPref: v,
					hostPostId: y,
					iconClassName: E,
					inSubredditOrProfile: _,
					isCommentsPage: k,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: w,
					isOverlay: P,
					isTopicPage: I,
					listingKey: S,
					post: T,
					shouldShowSubscribeButton: N,
					showCornerOutboundLink: M,
					showSubreddit: L,
					showSubredditIcon: R,
					subredditOrProfile: A
				} = e, F = n || I;
				return o.a.createElement(O, {
					className: t
				}, L && A && o.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, o.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: A.url
				}, R && o.a.createElement(l.b, {
					className: Object(r.a)(C.a.subredditIcon, E),
					shouldHideNsfwIcon: v,
					subredditOrProfile: A
				}))), o.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, L && o.a.createElement(a.h, {
					type: T.belongsTo.type,
					id: T.belongsTo.id
				}), o.a.createElement(c.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: P ? c.c.Lightbox : void 0,
					post: T,
					showSub: L,
					subredditOrProfile: A
				}), o.a.createElement(d.a, {
					className: C.a.postBadges,
					displayText: A ? A.displayText : null,
					inSubredditOrProfile: _,
					isCompactPinnedPost: j,
					post: T,
					tooltipType: P ? c.c.Lightbox : void 0
				}), !F && o.a.createElement(i.a, {
					isPostDetail: k,
					thing: T,
					tooltipType: P ? c.c.Lightbox : void 0
				})), A && L && N && !w && o.a.createElement(p.a, {
					getEventFactory: e => Object(b.f)(T.id, e ? "unsubscribe" : "subscribe", "post", S, y),
					identifier: {
						name: A.name,
						type: Object(f.f)(A) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: T.id
				}, "Subscribe"), M && o.a.createElement(h.b, {
					className: C.a.OutboundLink,
					isSponsored: T.isSponsored,
					postId: T.id,
					href: Object(g.E)(e.post),
					source: T.source
				}, o.a.createElement(x.a, {
					className: C.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {}
				}),
				i = e => {
					let {
						children: t
					} = e;
					const [s, i] = Object(n.useState)(0), a = {
						currentTime: s,
						setCurrentTime: i
					};
					return o.a.createElement(r.Provider, {
						value: a
					}, t)
				}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const u = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				h = d.a.wrapped(e => r.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, s) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(n.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", p.a);
			t.a = u(Object(a.a)(h))
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
				o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
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
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/elementIds.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				v = s("./src/reddit/constants/page.ts"),
				C = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = s("./src/reddit/helpers/trackers/screenview.ts"),
				k = s("./src/reddit/selectors/commentsListTruncated.ts"),
				j = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				w = s("./src/reddit/selectors/experiments/chatPost.ts"),
				P = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				S = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/controls/InternalLink/index.tsx"),
				N = s("./src/reddit/helpers/name/index.ts"),
				M = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				L = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				R = s.n(L);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var F = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						subredditOrProfile: o
					} = e, {
						primaryColor: r
					} = o;
					return a.a.createElement(T.a, {
						className: Object(S.a)(R.a.footer, t),
						onMouseDown: s,
						to: o.url,
						style: {
							backgroundColor: r
						}
					}, a.a.createElement("div", {
						className: R.a.background
					}), a.a.createElement("div", {
						className: R.a.layout
					}, n ? A._("See more posts like this in {subredditName}", [A._param("subredditName", Object(N.b)(o.displayText))], {
						hk: "pLxW5"
					}) : A._("Continue browsing in {subredditName}", [A._param("subredditName", o.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(M.a, {
						className: R.a.arrow
					})))
				}),
				B = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				D = s.n(B);
			const W = Object(c.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, k.a, j.b, (e, t, s) => !((!t || s) && e)),
				H = Object(c.c)({
					isChatPost: w.d,
					isGQLLoggedIn: I.G,
					isLoggedIn: I.H,
					listingBelowVariant: P.b,
					shouldShowSubredditUpsell: W
				}),
				V = Object(d.b)(H, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.O.HOT,
						subredditName: t
					}))
				}));
			class U extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(g.d) : null, this.onViewed = (e, t) => Object(_.e)(this.listingKey(), l.O.TOP, t, e, l.Sb.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(E.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						listingBelowVariant: e,
						post: t,
						subredditOrProfile: s
					} = this.props;
					return e && t && t.id ? Object(p.a)(t.id) : Object(u.a)(s.name, l.O.TOP, {
						t: l.Sb.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowVariant: e,
						subredditOrProfile: t,
						theme: s
					} = this.props, {
						name: o
					} = t, r = Object(y.a)(s.newCommunityTheme.canvas);
					return a.a.createElement("div", {
						className: D.a.smallBanner,
						style: {
							color: r
						}
					}, e && !Object(f.Cc)(e) ? Object(P.a)(e) ? n.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : n.fbt._("More posts you may like", null, {
						hk: "2s2Xil"
					}) : n.fbt._("More posts from the {name} community", [n.fbt._param("name", o)], {
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
						className: D.a.textBanner
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
						listingBelowVariant: o,
						post: i,
						shouldShowSubredditUpsell: d,
						subredditOrProfile: c
					} = this.props, l = i && Object(O.a)(i), m = !!o && !Object(f.Cc)(o), p = i && i.id;
					return s || n || t || l || !d ? null : a.a.createElement("div", {
						className: D.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: D.a.postList,
						disablePlaceholder: !0,
						forcedLayout: C.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostId: p,
						isTruncated: !0,
						listingBelowVariant: o,
						listingKey: this.listingKey(),
						listingName: v.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: D.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(F, {
						className: D.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: m,
						subredditOrProfile: c
					}))
				}
			}
			t.a = V(Object(m.a)(Object(x.c)(U)))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				i = () => null;
			t.a = Object(n.a)({
				ErrorComponent: i,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = s.n(a);
			const c = i.a.span("TextWrapper", d.a),
				l = i.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(c, null, e.text, " ")), "Button", d.a),
				m = i.a.wrapped(l, "ApproveButton", d.a),
				p = i.a.wrapped(l, "RemoveButton", d.a),
				u = e => o.a.createElement("button", {
					className: Object(r.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: d
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === d && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), o.a.createElement("div", {
					className: Object(r.a)(c.a.content, {
						[c.a.mCollapsed]: s
					})
				}, o.a.createElement("div", {
					className: Object(r.a)(c.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === d && o.a.createElement("div", {
					className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				g = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				f = s("./src/reddit/icons/fonts/Link/index.tsx"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/routes/postCreation/constants.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/components/ShareMenu/index.m.less"),
				E = s.n(y),
				_ = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const k = Object(u.a)(h.a),
				j = Object(c.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(O.b)(s)(e)
					}
				}),
				w = Object(i.b)(j, (e, t) => {
					var {
						dropdownId: s,
						permalink: n
					} = t, o = _(t, ["dropdownId", "permalink"]);
					return {
						onCrosspost: () => {
							o.post && e(Object(d.b)("".concat(C.b, "?source_id=").concat(o.post.id)))
						},
						toggleDropdown: () => {
							e(Object(l.h)({
								tooltipId: s
							}))
						},
						copyLink: () => e(Object(p.B)(Object(m.a)(n, {
							utm_source: "share",
							utm_medium: "web2x"
						})))
					}
				});
			t.a = w(Object(a.i)(e => {
				const t = !e.subreddit || e.subreddit && e.subreddit.type === v.d.Public,
					s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.toggleDropdown,
					id: e.dropdownId
				}, e.children, r.a.createElement(k, {
					className: E.a.dropdown,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId
				}, r.a.createElement(b.b, {
					className: E.a.dropdownRow,
					displayText: n.fbt._("Copy link", null, {
						hk: "1tCqox"
					}),
					onClick: () => {
						e.sendEventWithName("share_copy"), e.copyLink()
					}
				}, r.a.createElement(f.a, {
					className: E.a.linkIcon
				})), s && r.a.createElement(b.b, {
					className: E.a.dropdownRow,
					displayText: n.fbt._("crosspost", null, {
						hk: "23zSN6"
					}),
					onClick: () => {
						e.sendEventWithName("share_crosspost"), e.onCrosspost()
					}
				}, r.a.createElement(x.a, {
					className: E.a.crosspostIcon
				})), t && r.a.createElement(b.b, {
					className: E.a.dropdownRow,
					displayText: n.fbt._("Embed", null, {
						hk: "2CcsuC"
					}),
					onClick: () => {
						e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
					}
				}, r.a.createElement(g.a, {
					className: E.a.embedIcon
				}))))
			}))
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
				o = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
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
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/helpers/adCount/index.ts"),
				v = s("./src/reddit/helpers/trackers/ads.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				y = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				E = s.n(y),
				_ = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/lessComponent.tsx");
			const j = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("reddit-components-SidebarNativeAd")]).then(s.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
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
				w = Object(m.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, o = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(f.a)(s, o, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch,
					IsSubredditOrCommentsPage: e => Object(O.r)(e) === _.Bb.SUBREDDIT || Object(O.r)(e) === _.Bb.COMMENTS
				}),
				P = Object(l.b)(w),
				I = k.a.wrapped(u.a, "BannerAd", E.a),
				S = k.a.wrapped(g.a, "ThemedWidget", E.a),
				T = k.a.div("SidebarAdPlaceholder", E.a),
				N = (e, t) => !(window.aax && window.aax.getAbpStatus && window.aax.getAbpStatus()) && (t && e === _.c.BELOW_THE_FOLD),
				M = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				L = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(C.G)(e.media) && e.media.content)),
				R = e => !!e && e.isBlank,
				A = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				F = Object(x.c)(class extends c.a.Component {
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
						const e = a()(0, A.length - 1),
							{
								img: t,
								href: s
							} = A[e],
							{
								className: n,
								placement: o,
								redditStyle: r,
								removeSidebarSpacer: i
							} = this.props,
							d = i ? c.a.Fragment : b.a;
						return c.a.createElement(d, null, c.a.createElement(S, {
							className: n,
							contentOnly: !0,
							redditStyle: r
						}, c.a.createElement(h.a, {
							img: t,
							href: s,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, o)
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
						isOverlay: o,
						placementIndex: r,
						refreshKey: i,
						listingName: a,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: p,
						forcePlaceholder: u,
						forceHouseAd: h,
						waitForProgrammatic: x,
						IsSubredditOrCommentsPage: g,
						removeSidebarSpacer: f
					} = this.props, v = n.fbt._("advertisement", null, {
						hk: "35HaIb"
					}), C = f ? c.a.Fragment : b.a;
					return u || t || !L(s) && x ? c.a.createElement(C, null, c.a.createElement(S, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, c.a.createElement(T, {
						"data-before-content": v
					}))) : h ? c.a.createElement(F, {
						className: e,
						redditStyle: p,
						placement: d,
						removeSidebarSpacer: f
					}) : L(s) ? c.a.createElement(C, null, c.a.createElement(j, {
						post: s,
						refreshKey: i,
						listingName: a,
						placement: d,
						placementIndex: r
					})) : c.a.createElement(C, null, c.a.createElement(S, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, R(s) && c.a.createElement(j, {
						post: s,
						refreshKey: i,
						listingName: a,
						placement: d,
						placementIndex: r
					}), c.a.createElement(I, {
						id: M(d, o, r),
						isRefreshableAd: N(d, g),
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
			t.a = P(B)
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/comments.ts"),
				d = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx"),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			t.a = Object(r.b)((e, t) => {
				let {
					postId: s,
					commentsPageKey: n
				} = t;
				return {
					canShowAd: Object(i.a)(e, {
						postId: s
					}) && !Object(c.y)(e) && !Object(d.a)(e),
					waitForProgrammatic: Object(a.d)(e, {
						commentsPageKey: n
					})
				}
			})(e => {
				var {
					canShowAd: t,
					postId: s,
					commentsPageKey: n
				} = e, r = m(e, ["canShowAd", "postId", "commentsPageKey"]);
				return t ? o.a.createElement(l.a, r) : null
			})
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(d);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.a("Link", c.a), p = Object(a.t)({
				isFrontpage: a.y
			});
			t.a = p(e => o.a.createElement(i.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: c.a.LinkContainer
			}, o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(m, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(m, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(m, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(m, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(m, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(m, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(m, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: c.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var u = e => a.a.createElement("div", {
					className: Object(n.a)(e.className, m.a.container),
					style: e.style
				}, a.a.createElement(c.f, {
					className: m.a.button,
					onClick: () => window.scroll(0, 0)
				}, p._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(g),
				v = s("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const y = d.e[1] + 24,
				E = b.f + 8 + 152 + 32 + 16,
				_ = E + y + 8,
				k = v.a.div("Container", f.a),
				j = v.a.wrapped(e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return a.a.createElement(u, C({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", f.a),
				w = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: o,
						isSticky: r
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[f.a.StickyStyles]: r && !o,
							[f.a.StickyStylesFakeOverlay]: !!o
						})
					}, t)
				};
			class P extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > _,
						shouldFooterSticky: this.windowHeight > E
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							adComponentOnFakeOverlay: t,
							children: s,
							className: n,
							hideFooter: o
						}
					} = this, r = this.state.isAdSticky && !(!e && !s);
					return a.a.createElement(k, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(w, {
						isFakeOverlay: t,
						isSticky: r
					}, e, s, !o && a.a.createElement(h.a, null)), !this.props.hideBackToTop && a.a.createElement(j, null))
				}
			}
			const I = Object(x.t)();
			t.a = I(P)
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(c),
				m = s("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(d.a, "OutboundLinkIcon", l.a),
				u = m.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: d,
					isSponsored: c
				} = s;
				return d ? o.a.createElement(u, {
					className: Object(r.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(a.a, {
					href: d.url,
					isSponsored: c,
					postId: s.id,
					source: d
				}, Object(i.a)(s), o.a.createElement(p, null))) : null
			}
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/widgets.ts"),
				m = s("./src/reddit/actions/subreddit.ts"),
				p = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				b = s("./src/reddit/components/SubredditNav/index.m.less"),
				x = s.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const v = (e, t, s) => Object(u.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: s
				}),
				C = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, r = f(e, ["children", "isActive", "isTopBannerVariant"]);
					return o.a.createElement("div", g({
						className: v(x.a.subNavTitle, s, n)
					}, r), o.a.createElement("span", null, t), o.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				O = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: r
					} = e, i = f(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const a = v(x.a.navLink, s, r);
					return n ? o.a.createElement(p.a, g({
						className: a,
						to: n
					}, i)) : o.a.createElement("a", g({
						className: a
					}, i))
				},
				y = e => {
					var {
						className: t,
						isActive: s
					} = e, n = f(e, ["className", "isActive"]);
					return o.a.createElement(p.a, g({
						className: v(x.a.navLink, s)
					}, n))
				},
				E = e => {
					var {
						className: t,
						isActive: s
					} = e, n = f(e, ["className", "isActive"]);
					return o.a.createElement("a", g({
						className: v(x.a.subNavLink, s)
					}, n))
				},
				_ = e => {
					var {
						className: t
					} = e, s = f(e, ["className"]);
					return o.a.createElement("div", g({
						className: Object(u.a)(x.a.subNavContainer, t)
					}, s))
				},
				k = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = f(e, ["className", "isOpen"]);
					return o.a.createElement("div", g({
						className: Object(u.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: s
						})
					}, n))
				},
				{
					fbt: j
				} = s("./node_modules/fbt/lib/FbtPublic.js");
			const w = Object(i.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var P = Object(d.t)()(Object(r.b)(w, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(m.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? o.a.createElement(y, {
						className: x.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(d.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, j._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				I = s("./src/lib/linkMatchers/index.ts");
			class S extends o.a.Component {
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
					return o.a.createElement(_, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, o.a.createElement(C, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), o.a.createElement(k, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var T = S;
			const N = e => {
				const t = e.url && Object(I.g)(I.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? o.a.createElement(O, {
					href: N(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : o.a.createElement(T, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => o.a.createElement(E, {
					key: "".concat(e.text, "-").concat(N(e)),
					role: "listitem",
					href: N(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				L = s("./src/lib/constants/index.ts");
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const A = Object(d.t)(),
				F = [L.Bb.SUBREDDIT, L.Bb.COMMENTS, L.Bb.COLLECTION_COMMENTS],
				B = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && F.indexOf(t.pageLayer.meta.name) > -1
				});
			var D = A(Object(r.b)(B, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(m.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isTopBannerVariant: r,
						onTurnOffMetaFilter: i
					} = e, a = n && !s;
					return o.a.createElement(O, {
						to: t,
						isActive: a,
						isTopBannerVariant: r,
						onClick: e => {
							s && (e.preventDefault(), i())
						}
					}, R._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				W = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = s("./src/higherOrderComponents/makeAsync.tsx");
			var V = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				U = s("./src/reddit/constants/postLayout.ts"),
				G = s("./src/reddit/constants/screenWidths.ts"),
				K = s("./src/reddit/models/Theme/index.ts"),
				z = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				q = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const J = Object(W.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, r = q(e, ["className", "children", "isTopBannerVariant"]);
				const i = Object(z.a)(r);
				return o.a.createElement("div", {
					className: Object(u.a)(x.a.outerContainer, t),
					style: {
						position: i.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(K.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var X = e => o.a.createElement(J, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, o.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === U.g.Large ? "".concat(e.maxWidth || G.a, "px") : "100%"
					}
				}, o.a.createElement("div", null, e.children), o.a.createElement(V, null))),
				Q = s("./src/reddit/constants/wiki.ts"),
				Z = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, r = !!n && !!n.meta && n.meta.name === L.Bb.SUBREDDIT_WIKI, i = "wiki/".concat(Q.i), a = t.endsWith("/") ? t + i : "".concat(t, "/").concat(i);
				return o.a.createElement(O, {
					isActive: r,
					isTopBannerVariant: s,
					to: a,
					onClick: () => e.sendEvent(Object(Z.g)())
				}, Y._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ee = Object(c.a)("spPolls", P),
				te = Object(d.t)(),
				se = Object(i.c)({
					layout: d.N,
					widget: l.f
				}),
				ne = Object(r.b)(se);
			t.a = te(ne(Object(a.c)(e => o.a.createElement(X, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && o.a.createElement(o.a.Fragment, null, o.a.createElement(D, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), o.a.createElement(ee, {
				subredditId: e.subredditId
			})), e.widget && o.a.createElement(o.a.Fragment, null, e.widget.showWiki && o.a.createElement($, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => o.a.createElement(M, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/constants/elementClassNames.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(m),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const g = h.a.button("IconButton", p.a),
				f = h.a.wrapped(c.a, "SubscribeIcon", p.a),
				v = h.a.wrapped(d.a, "UnsubscribeIcon", p.a),
				C = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return r.a.createElement(g, n, r.a.createElement(f, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				O = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return t ? r.a.createElement(a.f, b({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					})) : r.a.createElement(a.n, b({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				y = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(C, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(O, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				E = h.a.wrapped(e => {
					var {
						border: t,
						small: s,
						type: n
					} = e, o = x(e, ["border", "small", "type"]);
					return r.a.createElement(g, o, r.a.createElement(v, {
						className: Object(u.a)(i.n, o.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				_ = h.a.wrapped(e => {
					var {
						border: t,
						small: s,
						buttonType: o
					} = e, i = x(e, ["border", "small", "buttonType"]);
					const d = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? n.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : n.fbt._("Following", null, {
							hk: "1wQlVR"
						})), r.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === o ? n.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : n.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						c = Object(u.a)(i.className, {
							[p.a.isSmall]: s
						});
					return t ? r.a.createElement(a.i, b({}, i, {
						className: c
					}), d) : r.a.createElement(a.n, b({}, i, {
						className: c
					}), d)
				}, "UnsubscribeButton", p.a),
				k = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(E, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(_, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: n,
						small: o = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: o
					};
					return this.props.userIsSubscriber ? r.a.createElement(k, b({}, i, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(y, b({}, i, {
						id: n
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const g = h.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = x(e, ["small", "shouldReverseColor"]);
					const r = s ? a.i : a.f;
					return o.a.createElement(r, b({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				f = h.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = x(e, ["small", "belongsToType", "shouldReverseColor"]);
					const i = n ? a.f : a.i;
					return o.a.createElement(i, b({}, r, {
						className: Object(u.a)(r.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				v = h.a.wrapped(d.a, "Checkmark", p.a),
				C = h.a.wrapped(c.a, "Plus", p.a),
				O = h.a.div("ButtonSpacer", p.a);
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: i,
							sendEvent: a,
							small: d = !1,
							userIsSubscriber: c,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: h,
							onSubscriptionsRequested: y
						} = e,
						E = x(e, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						_ = this.state.isHovered;
					let k = c ? "subscribed" : "subscribe";
					c && _ && (k = "unsubscribe");
					const j = Object(l.a)({
						type: s.type,
						key: k
					});
					return c ? this.state.hasJustSubscribed || m ? o.a.createElement(f, b({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d,
							[p.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, E), d && o.a.createElement(v, null), !d && !_ && o.a.createElement(v, null), !d && j) : d ? null : o.a.createElement(O, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(g, b({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, E, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(C, null), !d && j))
				}
			}
			t.a = Object(i.a)(Object(r.c)(y))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: s
					} = e;
					return r[o({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(n.c)(r.a))
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				p = i.a.div("RuleTitle", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				title: n.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, r.a.createElement(l, null, r.a.createElement(m, null, 1, "."), r.a.createElement(p, null, n.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 2, "."), r.a.createElement(p, null, n.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 3, "."), r.a.createElement(p, null, n.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 4, "."), r.a.createElement(p, null, n.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(a),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", d.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = c(e, ["children"]);
					return o.a.createElement("div", s, o.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
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
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts");
			var u = Object(i.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(E);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(h.a, {
					className: Object(c.a)(_.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? r.a.createElement(g.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(P, k({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(x.n, {
					className: _.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(d.c)({
					hideNSFWPref: O.z
				}),
				P = Object(i.b)(w)(e => r.a.createElement("div", {
					className: _.a.communityItemContainer
				}, r.a.createElement(v.a, {
					widthRight: b.t
				}, r.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(f.a, {
					className: _.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, r.a.createElement(a.a, {
					className: _.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(y.b)(e.name, e.type),
					to: Object(y.a)(e.name, e.type)
				}, Object(y.b)(e.name, e.type)), r.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: _.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(g.a, {
					className: Object(c.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(x.n, {
					className: Object(c.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(u, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === n.a.PROFILE ? Object(o.c)(e) : Object(o.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
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
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/trackers/postFlair.ts"),
				C = s("./src/reddit/models/Widgets/index.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = s.n(y);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var k = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const j = 129,
				w = Object(b.t)({
					filterName: e => Object(b.S)(e)[h.g],
					url: e => Object(b.X)(e)
				}),
				P = Object(a.c)({
					subredditId: (e, t) => Object(O.E)(e, t.subredditName)
				}),
				I = Object(i.b)(P),
				S = l.a.div("WidgetContent", E.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, o = k(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(d.a)(E.a.StyledFlair, t === C.d.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: s,
							[E.a["m-selected"]]: o.isSelected
						}),
						onMouseDown: n
					}, r.a.createElement(m.b, _({}, o, {
						className: E.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class N extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
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
						Object(g.d)(g.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > j && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(x.n, {
						className: E.a.flairFilterButton,
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
					return r.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => r.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? j : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
						className: E.a.flairFilterContainer,
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
					return r.a.createElement("ul", null, r.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, o = this.getFlairsFromIds(n), i = e && this.getSelectedFlair(o) || void 0, a = t.order.length > n.length || s && !i;
					return r.a.createElement(u.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, r.a.createElement(S, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(o), a && this.renderButton()))
				}
			}
			t.a = w(I(Object(p.c)(N)))
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
				return k
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				m = s("./src/reddit/helpers/dom/index.ts"),
				p = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				u = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				h = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				b = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = s.n(x);
			const f = d.a.div("RuleShortName", g.a),
				v = d.a.div("RuleIndex", g.a),
				C = d.a.div("RuleTitle", g.a),
				O = d.a.div("RuleDescription", g.a),
				y = d.a.wrapped(c.a, "RawHTMLDisplay", g.a),
				E = {};
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(m.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === b.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, o = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !n(e) && !!o;
					return r.a.createElement(f, {
						className: Object(a.a)({
							[g.a.pointerCursor]: i
						}),
						onClick: n(e) || !o ? void 0 : s
					}, r.a.createElement(h.a, null, r.a.createElement(v, null, "".concat(e.humanIndex, ".")), r.a.createElement(C, null, "".concat(e.rule.shortName)), r.a.createElement("div", null, !n(e) && o && (t.isVisible ? r.a.createElement(u.a, {
						className: g.a.Chevron
					}) : r.a.createElement(p.a, {
						className: g.a.Chevron
					})))), t.isVisible && r.a.createElement(O, null, e.rule.descriptionRichText ? r.a.createElement(l.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: E
					}) : e.rule.descriptionHtml ? r.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const k = e => e.rules.length > 0 ? r.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", "r/".concat(e.subredditName))], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return r.a.createElement(_, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null;
			t.b = e => r.a.createElement(k, {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = O(e);
					return Object(v.f)(t)
				},
				_ = e => {
					const t = y(e);
					return Object(v.f)(t)
				};
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = s.n(k);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = Object(m.t)(), I = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.m)(e, t) || void 0,
						n = t.redditStyle || Object(g.m)(e, {
							subredditId: s
						}),
						o = Object(f.S)(e);
					return n || o
				},
				nigtmode: f.S,
				subredditId: m.m,
				topPostVariant: x.d
			}));
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: i,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? j.a.widgetContentOnly : j.a.widgetContent, h = !n && this.props.styles, b = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: n,
							[j.a.clickable]: !!i,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: b
					}, d && o.a.createElement("div", {
						className: j.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(a.a)(j.a.widgetTitle, l)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), o.a.createElement("div", {
						className: Object(a.a)(u, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.n, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = P(I(Object(d.a)(Object(l.c)(S))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
				x = s("./src/reddit/models/Widgets/index.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/Widgets/Button/index.m.less"),
				C = s.n(v);
			const O = (e, t, s) => {
					let n = {},
						o = {};
					n = e.kind === x.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: o,
							textColor: r
						} = e;
						return t && (n = r = s, o = "transparent"), {
							"--widget-button-background-color": "".concat(o || "transparent"),
							"--widget-button-border": "1px solid ".concat(n),
							"--widget-button-color": "".concat(r || n)
						}
					})(e, t, s);
					const r = e.hoverState || e;
					if (r.kind === x.f.Image) o = {
						"--widget-button-hover-background-image": "url('".concat(r.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: i
						} = r;
						t && (e = i = s, n = "transparent"), o = {
							"--widget-button-hover-background-color": "".concat(n || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(i || e)
						}
					}
					return Object.assign(Object.assign({}, n), o)
				},
				y = e => e.kind === x.f.Image ? C.a.imageButton : C.a.textButton,
				E = e => {
					const t = Object(x.n)(e),
						s = Object(u.g)(u.e, t);
					return s ? s.url : e.url
				},
				_ = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(b.a)(e).button;
					return o.a.createElement(c.i, {
						className: y(t),
						style: O(t, s, n)
					}, t.kind === x.f.Text && o.a.createElement("span", {
						className: t.hoverState ? C.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === x.f.Text && o.a.createElement("span", {
						className: C.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				k = e => o.a.createElement(l.b, {
					href: E(e.button),
					isSponsored: !1,
					source: null
				}, o.a.createElement(_, e)),
				j = p.a.wrapped(a.a, "RawHTMLDisplay", C.a);
			var w = Object(r.b)(() => Object(i.c)({
					forceRedditStyle: g.m,
					isNightmodeOn: f.S
				}))(e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && o.a.createElement(j, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== x.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== x.f.Image || e.hoverState.url !== h.c)).map(t => o.a.createElement(k, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				P = s("./node_modules/fbt/lib/FbtPublic.js"),
				I = s("./src/lib/humanizeDate/index.ts"),
				S = s("./src/reddit/controls/TextButton/index.tsx"),
				T = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				N = s.n(T);
			const M = 100,
				L = {
					isExpanded: !1
				},
				R = p.a.wrapped(a.a, "RawHTMLDisplay", N.a),
				A = p.a.div("EventContainer", N.a),
				F = p.a.div("EventTitle", N.a),
				B = p.a.div("EventDate", N.a),
				D = p.a.div("EventLocation", N.a),
				W = p.a.div("EventDescription", N.a),
				H = p.a.wrapped(S.a, "ToggleDescription", N.a);
			class V extends o.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = L
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > M ? o.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, M), o.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? P.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : P.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : o.a.createElement(W, null, e.text)
				}
			}
			var U = e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => o.a.createElement(A, {
					key: "".concat(s, "-").concat(t.title)
				}, o.a.createElement(F, null, t.titleHtml ? o.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && o.a.createElement(B, null, Object(I.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && o.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && o.a.createElement(D, null, t.locationHtml ? o.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && o.a.createElement(V, {
					text: t.description
				})))),
				G = s("./src/reddit/components/TrackingHelper/index.tsx"),
				K = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var z = Object(G.c)(e => o.a.createElement(K.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const q = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				J = Object(r.b)(q),
				X = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class Q extends o.a.Component {
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = X(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, o.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var Z = J(Q),
				Y = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = s.n(Y);
			var ee = p.a.div("ImageFrame", $.a),
				te = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				se = s.n(te);
			var ne = p.a.img("StyledImage", se.a);
			class oe extends o.a.Component {
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
						n = o.a.createElement(ee, null, o.a.createElement(ne, {
							alt: P.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: s.url
						}));
					return s.linkUrl ? o.a.createElement(l.b, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var re = oe,
				ie = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ae = s("./src/reddit/components/Flair/index.tsx"),
				de = s("./src/reddit/controls/InternalLink/index.tsx"),
				ce = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				le = s("./src/reddit/models/Flair/index.ts"),
				me = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				pe = s.n(me);
			const ue = p.a.div("ModeratorListItem", pe.a),
				he = p.a.div("Username", pe.a),
				be = p.a.a("MessageModsLink", pe.a),
				xe = p.a.wrapped(ae.b, "FlairComponent", pe.a),
				ge = e => e.authorFlairType === le.f.Richtext ? {
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
				fe = e => o.a.createElement(he, null, "u/".concat(e)),
				ve = p.a.wrapped(de.a, "InternalLink", pe.a),
				Ce = p.a.div("LinkContainer", pe.a);
			var Oe = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return o.a.createElement(d.a, {
						styles: s.styles,
						title: P.fbt._("Moderators", null, {
							hk: "3AMICc"
						}),
						headerButton: o.a.createElement(be, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, o.a.createElement(ce.a, null))
					}, s.mods.map(e => o.a.createElement(ue, {
						key: e.name
					}, (e => o.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, fe(e.name)))(e), o.a.createElement(xe, {
						flair: ge(e),
						forceSmallEmojis: !0
					}))), o.a.createElement(Ce, null, o.a.createElement(ve, {
						to: "/r/".concat(t, "/about/moderators/")
					}, P.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					}))))
				},
				ye = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ee = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				_e = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				ke = s.n(_e);
			const je = p.a.div("WidgetContent", ke.a),
				we = p.a.wrapped(a.a, "RawHTMLDisplay", ke.a);
			var Pe = e => o.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, o.a.createElement(je, null, o.a.createElement(we, {
					html: e.widget.textHtml || ""
				}))),
				Ie = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Se = e => o.a.createElement(Ie.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Oe;
						case "textarea":
							return Pe;
						case "button":
							return w;
						case "subreddit-rules":
							return Ee.b;
						case "community-list":
							return z;
						case "calendar":
							return U;
						case "image":
							return re;
						case "custom":
							return Z;
						case "post-flair":
							return ye.a;
						default:
							return Se
					}
				}(e.widget);
				return o.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				l = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/selectors/experiments/survey.ts"),
				f = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tracking.ts");

			function y() {
				return Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isFrontpage: p.y,
					isProfilePostListing: p.I,
					isTopicPage: p.M,
					pageLayer: e => e
				})
			}
			const E = y(),
				_ = {
					apiError: f.c,
					apiPending: f.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.N)(e, t),
					loadMore: f.g,
					postsById: v.X,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(v.J)(e, s, n, o)
					}),
					subredditsById: C.X,
					viewportDataLoaded: O.a,
					pageReferrer: p.Q,
					postListPlaceholderComponent: () => b.a,
					isNpsScrollSurveyEnabled: g.b
				},
				k = Object(o.c)(_),
				j = (e, t) => {
					let {
						isFrontpage: s
					} = t;
					return {
						onBottomViewed: (t, s) => e(c.c(t, s)),
						adBrandSafetyStatusReceived: t => {
							e(i.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							s && e(Object(a.a)({
								lastLoadedEnv: "server"
							})), e(d.I(t))
						},
						fireAdPixelsOfType: (t, s) => {
							e(d.z(t, s))
						},
						trackOnPostEnteredViewport: (t, s, n) => {
							e(d.L(t, n))
						},
						trackOnPostExitedViewport: (t, s, n, o) => {
							e(d.M(t, n, o))
						},
						surveyTriggerScrollCounted: () => e(Object(l.b)())
					}
				},
				w = Object(n.b)(k, j, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEvent: (e, t, n) => Object(h.f)(e, t, n, s.listingKey, s.hostPostId, s.listingBelowVariant),
					postComponentForLayout: e => Object(u.b)(Object.assign({}, e))
				}));
			t.a = e => Object(m.c)(E(w(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: i.bb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			}));
			const n = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			}));
			const n = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				d = a,
				c = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = e => o.a.createElement("svg", a({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const h = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: i,
						"data-redditstyle": a
					} = t, d = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, i, a);
					return o.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, c, s)
					}, d))
				},
				b = h(c.a),
				x = h(d);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? x : e.isCheckboxSelected ? b : i.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_2zOuGd5s9dLeXmKJ8TJF9T",
				checkboxSelected: "LevaZhN5EO7Pei7YvAi1W",
				sharedIconStyles: "_19iKCOTFpWIyFwZ0bqQhg",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				l = s.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const u = e => o.a.createElement("div", {
					className: Object(r.a)(l.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(d.a, {
					className: l.a.expandRight
				}, e.isSelected ? o.a.createElement(a.a, {
					className: l.a.checkboxSelected
				}) : o.a.createElement(i.a, {
					className: l.a.checkbox
				}), e.text)),
				h = e => {
					var {
						className: t
					} = e, s = p(e, ["className"]);
					return o.a.createElement(u, m({
						className: Object(r.a)(l.a.postCheckboxMenuItem, t)
					}, s))
				};
			t.b = u
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(p),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const n = Object(a.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected,
					[b.a.topics]: s.isTopicsStyle
				});
				return i.a.createElement(f, x({
					className: n
				}, s))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
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
				return j
			})), s.d(t, "c", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(o),
				i = s("./node_modules/raf/index.js"),
				a = s.n(i),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = s.n(f);
			var C = Object(b.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return c.a.createElement("div", {
						className: v.a.wrapper
					}, c.a.createElement(g.a, {
						className: v.a.titleRow
					}, s), c.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), c.a.createElement(g.a, {
						className: v.a.buttonRow
					}, c.a.createElement(x.f, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				O = s("./src/reddit/controls/ErrorText/index.m.less"),
				y = s.n(O);
			const E = Object(m.c)({
				activeModalId: h.a
			});
			class _ extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
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
					a()(() => {
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
						errorModalBody: o,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: a,
						textHasOverflowed: d
					} = this.state;
					return c.a.createElement("div", {
						className: Object(p.a)(y.a.wrapper, s)
					}, c.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), d && c.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, i), t === a && c.a.createElement(C, {
						onConfirmed: this.toggleModal,
						title: r
					}, o || e))
				}
			}
			const k = Object(l.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(_),
				j = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, i = r.length ? r : o ? [o] : [];
					return i.length ? c.a.createElement("div", {
						className: t
					}, i.map((e, t) => c.a.createElement(k, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				w = e => c.a.createElement(j, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = k
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(o);
			t.a = n.a.input("input", r.a)
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				c = s.n(d),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const m = i.a.span("metaText", c.a),
				p = e => r.a.createElement(m, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						score: s,
						useUpvotes: o
					} = e, i = l(e, ["isScoreHidden", "score", "useUpvotes"]);
					const d = Object(a.b)(s),
						c = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", d)], {
							hk: "2L3T21"
						}),
						p = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", d)], {
							hk: "gf67v"
						});
					return r.a.createElement(m, i, p)
				},
				h = e => r.a.createElement(m, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(a.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(r);
			t.a = n.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n
					} = e, r = d(e, ["featureEnabled"]);
					return n ? o.a.createElement(t, r) : void 0 !== s ? o.a.createElement(s, r) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				o = s("./src/reddit/constants/postLayout.ts");
			const r = Math.floor(100 * Math.random());
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
					layout: o.b[t.prefs.layout]
				};
				return i && !Object(n.a)(i.name) && (d.subreddit = i.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = r, a && (d.position = a), d
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", "u/".concat(e.bannedBy))], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				d = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/isUrl/index.ts"),
				a = s("./src/lib/logs/console.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/models/Media/index.ts");
			const l = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-BlankPost").then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				m = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				u = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				h = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostDraft~ProfileComments~ProfileOverview~Profil~e5ba4eb0"), s.e("ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~StandalonePostPage~reddit-components-Cl~726564d9"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[d.g.Large]: u,
					[d.g.Medium]: h,
					[d.g.Classic]: m,
					[d.g.Compact]: p
				},
				x = e => r.a.createElement(l, e),
				g = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com"],
				f = e => e.source && e.source.url && e.isSponsored && g.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === c.o.EMBED && !(c.b.has(e.media.provider) || f(e)),
				C = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case d.g.Medium:
							return 188;
						case d.g.Classic:
							return 96;
						case d.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function O(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: n,
					post: o
				} = e;
				if (o.isBlank) return x;
				const r = !o.media && !!o.source && Object(i.a)(o.source.url),
					c = t && r;
				n === d.g.Large && v(o) && !c && (n = d.g.Medium);
				const l = b[n];
				return void 0 === l ? (Object(a.a)(void 0, "Could not find component for layout ".concat(n, ".")), x) : s && o.isSponsored && n === d.g.Large ? h : l
			}
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh"
			}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => Object.assign({
					gallery: r.gallery(e, t, s),
					post: r.post(e, t)
				}, r.defaults(e)),
				a = (e, t) => s => Object.assign(Object.assign({}, i(s, e, t)), {
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: r.media(s, e)
				}),
				d = (e, t, s) => a => {
					const d = Object(o.a)(t);
					return Object.assign(Object.assign({}, i(a, e, s)), {
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, r.media(a, e)), {
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						})
					})
				},
				c = (e, t) => m(e, !0, t),
				l = (e, t) => m(e, !1, t),
				m = (e, t, s) => o => Object.assign(Object.assign({}, i(o, e, s)), {
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => Object.assign(Object.assign({}, Object(n.defaults)(e)), {
					media: Object(n.media)(e, t),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e) || Object(n.subredditByPostOrCommentId)(e, t)
				}),
				r = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.post)(t, e)
				}, o(t, e)),
				i = e => t => Object.assign({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.post)(t, e)
				}, o(t, e))
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s, o) => r => ({
					source: "report_prompt",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				}),
				r = (e, t, s, o) => r => ({
					source: "report_survey",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return a
			})), s.d(t, "E", (function() {
				return d
			})), s.d(t, "q", (function() {
				return c
			})), s.d(t, "t", (function() {
				return l
			})), s.d(t, "u", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "s", (function() {
				return h
			})), s.d(t, "v", (function() {
				return b
			})), s.d(t, "o", (function() {
				return x
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "F", (function() {
				return f
			})), s.d(t, "C", (function() {
				return v
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "r", (function() {
				return O
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "w", (function() {
				return j
			})), s.d(t, "j", (function() {
				return w
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "p", (function() {
				return I
			})), s.d(t, "y", (function() {
				return S
			})), s.d(t, "n", (function() {
				return T
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "D", (function() {
				return M
			})), s.d(t, "z", (function() {
				return L
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "x", (function() {
				return A
			})), s.d(t, "A", (function() {
				return F
			})), s.d(t, "B", (function() {
				return B
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign(Object.assign({}, o.defaults(e)), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.o)(e)
				}),
				a = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, r(e)),
				d = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, r(e)),
				c = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date"
				}, r(e)),
				l = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time"
				}, r(e)),
				m = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone"
				}, r(e)),
				p = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply"
				}, r(e)),
				u = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				h = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t)), {
					scheduledPost: i(e)
				}),
				b = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t)), {
					scheduledPost: i(e)
				}),
				x = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, r(e)),
				g = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts"
				}, r(e)),
				f = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				v = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				C = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				O = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				y = e => t => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t)), {
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "one_time_frequency"
				}, r(e)),
				_ = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				k = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				j = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				w = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				P = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "custom_frequency"
				}, r(e)),
				I = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				S = (e, t, s) => i => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: Object(n.l)(e)
				}, r(i)), {
					actionInfo: o.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				T = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				N = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				M = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				L = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				R = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				A = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				F = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				B = () => (e, t) => {
					const s = r(e);
					return Object.assign(Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, s), {
						actionInfo: Object.assign(Object.assign({}, s.actionInfo), {
							reason: "failed_post"
						}),
						scheduledPost: i(t)
					})
				}
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
				return x
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "o", (function() {
				return k
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign(Object.assign({}, o.defaults(e)), {
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				i = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, r(e)),
				a = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, r(e)),
				d = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, r(t)),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return d(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = d("compare_wiki_pages"),
				m = d("revert_wiki_page"),
				p = d("view_wiki_page"),
				u = d("view_source"),
				h = d("add_wiki_page_contributor"),
				b = d("remove_wiki_page_contributor"),
				x = d("save_wiki_page_settings"),
				g = d("copy_url"),
				f = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				C = d("ban_wiki_contributor"),
				O = d("unban_wiki_contributor"),
				y = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				_ = e => t => Object.assign(Object.assign({}, r(t)), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: o.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				k = e => t => Object.assign(Object.assign({}, r(t)), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: o.actionInfo(t, {
						settingValue: E[e]
					})
				})
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js");
			t.a = function(e, t, s) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const o = new IntersectionObserver(t, s);
					return o.observe(n), () => {
						o.unobserve(n)
					}
				}, [e, t, s])
			}
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o(e, t) {
				const s = Object(n.useCallback)(s => {
					if (!t) return;
					const n = document.getElementById(e);
					n && (n.contains(s.target) || t(s))
				}, [e, t]);
				Object(n.useEffect)(() => {
					if (t) return document.body.addEventListener("click", s), () => {
						document.body.removeEventListener("click", s)
					}
				}, [t, s])
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve"), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived"), d.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("calendar"), d.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return o.a.createElement("i", c({
					className: Object(r.a)(Object(i.b)("comment"), d.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, t, s) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("crosspost"), " ").concat(e.className)
			}), "CrosspostIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Embed/index.m.less": function(e, t, s) {
			e.exports = {
				EmbedIcon: "_1J2DOAiKZ5l1xq516M9W_Q",
				embedIcon: "_1J2DOAiKZ5l1xq516M9W_Q"
			}
		},
		"./src/reddit/icons/fonts/Embed/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Embed/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("embed"), " ").concat(e.className)
			}), "EmbedIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(e.className)
			}), "Envelope", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Hide/index.m.less": function(e, t, s) {
			e.exports = {
				HideIcon: "_1ps3GcyMra2ZVakeRQFnGj",
				hideIcon: "_1ps3GcyMra2ZVakeRQFnGj"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.m.less": function(e, t, s) {
			e.exports = {
				IgnoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf",
				ignoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live"), d.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock"), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("i", c({}, e, {
				className: Object(r.a)(Object(i.b)("modActions"), d.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove"), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report"), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Save/index.m.less": function(e, t, s) {
			e.exports = {
				SaveIcon: "_3n1jtdyipCtmS0HkOM1Tfd",
				saveIcon: "_3n1jtdyipCtmS0HkOM1Tfd"
			}
		},
		"./src/reddit/icons/fonts/Save/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Save/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("save"), " ").concat(e.className)
			}), "SaveIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share"), d.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam"), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("sticky"), d.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.m.less": function(e, t, s) {
			e.exports = {
				TagIcon: "_2e-QjEsH3vADXyIpSzLW6_",
				tagIcon: "_2e-QjEsH3vADXyIpSzLW6_"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("tag"), " ").concat(e.className)
			}), "TagIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Unpin/index.m.less": function(e, t, s) {
			e.exports = {
				UnpinIcon: "_1X-tE86a0YWmVh310hgKTZ",
				unpinIcon: "_1X-tE86a0YWmVh310hgKTZ"
			}
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("svg-add-collection"),
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), o.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), o.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), o.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), o.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Saved/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2OUcXcp-8gkoFyUSKdNTxF"
			}
		},
		"./src/reddit/icons/svgs/Saved/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Saved/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12.5 2h-11a.5.5 0 0 0 0 1A2.5 2.5 0 0 1 4 5.5v12.24a1 1 0 0 0 1.4.92l4.6-2 4.6 2a1 1 0 0 0 1.4-.92V5.5A3.5 3.5 0 0 0 12.5 2zm1 6.53l-4.26 4.29a.75.75 0 0 1-1.06 0L6.47 11.1A.75.75 0 0 1 7.53 10l1.18 1.18 3.76-3.76a.75.75 0 0 1 1.06 1.06z"
			}))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
				x = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				v = s.n(f);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const y = Object(r.b)(() => Object(i.c)({
					showFPR: g.F,
					showSuspended: g.M
				})),
				E = Object(d.a)(e => {
					var {
						className: t,
						isCollectionLayout: s,
						theme: n
					} = e, r = O(e, ["className", "isCollectionLayout", "theme"]);
					const i = Object(x.a)(Object.assign({
						theme: n
					}, r));
					return o.a.createElement("div", C({
						className: Object(a.a)(v.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(i.canvas, i.canvasImgUrl, i.canvasImgPosition),
							"--fakelightbox-overlay-max-width": "".concat(s ? u.h : u.i, "px")
						}
					}, r))
				});
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return o.a.createElement(m.a, {
							className: Object(a.a)(v.a.fakeOverlayLightboxHeaderWrapper, {
								[v.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(v.a, t))
						}, o.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(E, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(c.a.Consumer, null, this.renderWrapper), o.a.createElement(h.a, e))
				}
			}
			t.a = y(_)
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => o.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends o.a.PureComponent {
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
						sidebar: r
					} = this.props;
					return o.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, o.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), r && o.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, r))
				}
			}
			t.a = m
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(a);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(i.a)(d.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: a
				} = e, m = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", c({
					className: Object(i.a)(d.a.expandRightContainer, t)
				}, m), o.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, o;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(o || (o = {}))
		},
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/get.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				p = s("./src/reddit/constants/history.ts"),
				u = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/pages/CommentsPage/index.tsx"),
				g = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				f = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./node_modules/reselect/es/index.js");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(c.b)(() => Object(v.c)({
				primaryPostId: f.q
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? d.a.createElement(x.CommentsPage, C({}, e, {
					postId: t
				})) : null
			});
			t.default = Object(g.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, p.a.IsOverlay, !1), n = i()(t, p.a.CloseLocation, null), r = i()(t, p.a.ScrollOnLoad, !1);
				r && Object(u.c)(p.a.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: x,
						subredditName: g,
						collectionId: f
					} = a,
					v = x ? Object(b.m)(x) : void 0,
					C = c && Object(h.e)(c),
					y = o()([...Object(l.a)(e.location.search)]),
					E = {};
				e.hasSortParam && (E.sort = e.sort, E.hasSortParam = !0);
				const _ = Object(m.a)(f, v, C, E);
				return d.a.createElement(O, {
					closeLocation: n,
					collectionId: f,
					commentId: C,
					commentsPageKey: _,
					isOverlay: s,
					location: e.location,
					postId: v,
					instanceId: y.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: g,
					onOtherDiscussions: !!y.onOtherDiscussions
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				d = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/path/index.ts"),
				m = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				b = s.n(h);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(r.b)(() => Object(i.c)({
				headComment: p.y,
				otherDiscussionsCount: u.C,
				post: p.G
			}));
			t.a = Object(c.c)(g(e => {
				let {
					commentId: t,
					headComment: s,
					isOverlay: n,
					otherDiscussionsCount: r,
					post: i,
					postId: c,
					sendEvent: p
				} = e;
				if (!i) return null;
				const u = void 0 !== t,
					h = i.permalink,
					g = r > 0,
					f = Object(l.b)(Object(a.e)(h));
				return u || g ? o.a.createElement("div", {
					className: b.a.CommentsNavigationPane
				}, u && o.a.createElement("div", null, o.a.createElement(d.a, {
					className: b.a.linkOrOverlay,
					isOverlay: n,
					to: Object(l.b)(h)
				}, x._("View all comments", null, {
					hk: "3I5IX9"
				})), s && null !== s.parentId && o.a.createElement(d.a, {
					className: b.a.linkOrOverlay,
					isOverlay: n,
					to: Object(l.b)(s.permalink + "?context=8&depth=9")
				}, x._("Show parent comments", null, {
					hk: "AVRCa"
				}))), g && o.a.createElement(d.a, {
					className: b.a.OtherDiscussionsLink,
					isOverlay: n,
					onClick: () => p(Object(m.a)(c)),
					to: f
				}, x._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [x._plural(r, "other discussion communities count")], {
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
				return at
			})), s.d(t, "CommentsPage", (function() {
				return ht
			}));
			var n = s("./node_modules/core-js/modules/es6.array.sort.js"),
				o = s.n(n),
				r = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				i = s.n(r),
				a = s("./node_modules/core-js/modules/es6.symbol.js"),
				d = s.n(a),
				c = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s.n(l),
				p = s("./node_modules/lodash/get.js"),
				u = s.n(p),
				h = s("./node_modules/lodash/throttle.js"),
				b = s.n(h),
				x = s("./node_modules/react/index.js"),
				g = s.n(x),
				f = s("./node_modules/react-redux/es/index.js"),
				v = s("./node_modules/react-router-redux/es/index.js"),
				C = s("./node_modules/reselect/es/index.js"),
				O = s("./src/reddit/models/PostDraft/index.ts"),
				y = s("./src/telemetry/index.ts"),
				E = s("./src/telemetry/models/Timer.ts"),
				_ = s("./src/lib/classNames/index.ts"),
				k = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/domUtils/index.ts"),
				w = s("./src/lib/fastdom/index.ts"),
				P = s("./src/lib/lessComponent.tsx"),
				I = s("./src/lib/makeCommentsPageKey/index.ts"),
				S = s("./src/lib/makeDraftKey/index.ts"),
				T = s("./src/lib/performanceTimings/index.tsx"),
				N = s("./src/reddit/actions/ads/index.ts"),
				M = s("./src/reddit/actions/comment/index.ts"),
				L = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				R = s("./src/reddit/actions/login.ts"),
				A = s("./src/reddit/actions/page.ts"),
				F = s("./src/reddit/actions/tooltip.ts"),
				B = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				D = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				W = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				H = s("./src/reddit/constants/componentSizes.ts"),
				V = s("./src/reddit/constants/elementIds.ts"),
				U = s("./src/reddit/constants/history.ts"),
				G = s("./src/reddit/constants/keycodes.ts"),
				K = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/constants/screenWidths.ts"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				J = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				X = s("./src/reddit/featureFlags/profileCollections.ts"),
				Q = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/models/Media/index.ts"),
				Y = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/comments.ts"),
				te = s("./src/reddit/selectors/commentsListTruncated.ts"),
				se = s("./src/reddit/selectors/discoveryUnit.ts"),
				ne = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				oe = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				re = s("./src/reddit/selectors/experiments/chatPost.ts"),
				ie = s("./src/reddit/selectors/experiments/commentsPageAd.ts"),
				ae = s("./src/reddit/selectors/experiments/postSeo.ts"),
				de = s("./src/reddit/selectors/meta.ts"),
				ce = s("./src/reddit/selectors/moderatorPermissions.ts"),
				le = s("./src/reddit/selectors/posts.ts"),
				me = s("./src/reddit/selectors/realtimeComments.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				ue = s("./src/reddit/selectors/tooltip.ts"),
				he = s("./src/reddit/selectors/user.ts"),
				be = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				xe = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				ge = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				fe = s("./src/reddit/components/Comments/index.tsx"),
				ve = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				Ce = s("./src/reddit/components/Comments/States/index.tsx"),
				Oe = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ye = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ee = s("./src/reddit/components/CommentSort/index.tsx"),
				_e = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				ke = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				je = s("./src/reddit/components/HeaderImage/index.tsx"),
				we = s("./src/reddit/components/Hovercards/helpers.ts"),
				Pe = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ie = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Se = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Te = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Ne = s("./src/reddit/components/JumpToContent/index.tsx"),
				Me = s("./src/reddit/components/PostContent/index.tsx"),
				Le = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Re = s("./src/reddit/components/SubredditNav/index.tsx"),
				Ae = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Fe = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Be = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				De = s("./src/reddit/helpers/history/index.ts"),
				We = s("./src/reddit/helpers/postCollection.ts"),
				He = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Ve = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ue = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Ge = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Ke = s("./src/reddit/layout/page/Listing/index.tsx"),
				ze = s("./src/reddit/models/ContentGate.ts"),
				qe = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				Je = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				Xe = s("./src/reddit/pages/CommentsPage/index.m.less"),
				Qe = s.n(Xe);

			function Ze() {
				return (Ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Ye = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const $e = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				et = 80,
				tt = 200,
				st = 80,
				nt = 32,
				ot = Object(c.a)({
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
				rt = Object(c.a)({
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
				it = Object(c.a)({
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
				at = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(I.a)(t) : n
				},
				dt = e => {
					const {
						state: t
					} = e.location, s = u()(t, U.a.IsOverlay, !1), n = u()(t, U.a.CloseLocation, null), o = u()(t, U.a.ScrollOnLoad, !1);
					o && Object(De.c)(U.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: a
					} = e.match.params, d = Object(Y.m)(i), c = r && Object(Q.e)(r);
					return g.a.createElement(ht, {
						closeLocation: n,
						commentId: c,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: d,
						shouldScrollToComments: o,
						sort: e.sort,
						subredditName: a
					})
				},
				ct = Object(q.t)(),
				lt = () => Object(C.c)({
					apiError: ee.c,
					apiPending: ee.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(le.Z)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					comment: ee.n,
					communityBannerDiscoveryUnit: se.b,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(he.e)(e, s)
					},
					contestModeIsEnabled: le.E,
					currentUserShowNSFW: he.V,
					dismissedSubreddits: ne.a,
					fullyLoaded: ee.v,
					hasModeratorPostPermissions: ce.b,
					headComment: ee.y,
					isAvatarsInCommentsEnabled: oe.a,
					isChatPost: re.e,
					isChatPostExperiment: re.d,
					isCommentsListTruncated: te.a,
					isLoggedIn: he.H,
					isNightmodeOn: he.S,
					isRealtimeCommentsExperimentEnabled: me.a,
					isTooltipOpen: (e, t) => !!Object(ue.a)(e),
					newCommentsCount: ee.D,
					origin: de.l,
					post: ee.G,
					postSEOV2IdCardVariant: ae.i,
					profileCollectionsEnabled: X.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: o
						} = t;
						return Object(ee.t)(e, {
							commentsPageKey: at({
								postId: s,
								commentId: n,
								commentsPageKey: o
							})
						})
					},
					shouldOpenPostInNewTab: he.U,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(pe.w)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: le.Z,
					userHovercardIsOpen: (e, t) => Object(ue.b)(Object(we.b)({
						itemId: t.postId,
						tooltipIdPrefix: D.a,
						tooltipType: Le.c.StickyPost
					}))(e),
					userPrefs: he.lb,
					isInCommentsPageAdExperiment: ie.a
				}),
				mt = (e, t) => ({
					dismissTruncation: t => e(Object(be.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(L.a)()),
					setCommentFocus: t => e(M.M({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(A.z)(t.postId, void 0, {
						subredditName: t.subredditName,
						sort: t.sort
					})),
					onHideTooltip: () => e(Object(F.i)()),
					onToggleTooltip: t => e(Object(F.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(R.h)()),
					openRegisterModal: () => e(Object(R.i)()),
					goToSubredditPage: t => e(Object(v.b)(t)),
					sendChatPostExposureEvent: (t, s) => e((e, n) => Object(re.g)(n(), t, s)),
					truncateCommentsList: () => e(Object(L.b)()),
					fetchCommentsNativeAd: t => e(Object(N.a)(t))
				}),
				pt = Object(f.b)(lt, mt);
			class ut extends g.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = b()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didScrollPastPost: e,
							scrollContainerEl: t,
							scrollPostThreshold: s,
							props: {
								userHovercardIsOpen: n,
								onToggleTooltip: o,
								post: r,
								postId: i
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const a = t === window ? t.scrollY : t ? t.scrollTop : 0,
							d = null !== this.scrollY && Math.abs(a - this.scrollY) > et,
							c = r && r.media && r.media.type === Z.o.EMBED ? r.media.provider : null,
							l = r && r.media && Z.d.has(r.media.type) && (!c || !Z.s.has(c));
						this.scrollY = a, !e && void 0 !== s && a >= s && (this.didScrollPastPost = !0), e && void 0 !== s && a < s && (this.didScrollPastPost = !1, n && w.a.write(() => {
							o(Object(we.b)({
								itemId: i,
								tooltipIdPrefix: D.a,
								tooltipType: Le.c.StickyPost
							}))
						})), l && this.postScrollItemRef && (this.postPaused || !d && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (d ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * k.G) : (this.postPaused = !1, w.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, w.a.write(this.postScrollItemRef.pauseContent)))
					}, k.G), this.sendEventWithName = e => () => this.props.sendEvent(Object(He.b)(this.props.postId, e)), this.updateWindowHeight = () => {
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
						const n = s && Object(Y.l)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Be.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === G.b.F || e.keyCode === G.a.F,
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
					const {
						commentFormRef: e,
						commentSortRef: t,
						props: {
							isLoggedIn: s,
							isOverlay: n,
							post: o,
							shouldScrollToComments: r
						}
					} = this;
					if (o && !o.isSponsored && !o.isRemoved) {
						const e = await this.props.fetchCommentsNativeAd(o.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					n ? (this.scrollContainerEl = document.getElementById(V.d), r && (e || t) && o && o.numComments ? this.scrollToComments() : w.a.write(() => {
						setTimeout(() => {
							Object(j.c)(this.scrollContainerEl, 0)
						})
					})) : this.scrollContainerEl = window, this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), w.a.read(() => {
						this.props.isOverlay || Object(T.d)(T.c.CommentsPage, s)
					}), this.sendChatPostExposureEvent()
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(We.a)(this.props.post);
						this.props.post && this.props.post.numComments ? w.a.read(this.handleScroll) : w.a.write(() => {
							e || Object(j.c)(this.scrollContainerEl, 0), w.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && w.a.write(() => {
							setTimeout(() => {
								Object(j.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = H.b + (this.props.isOverlay ? H.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(V.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? nt : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && w.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(j.c)(n, i) : Object(j.c)(document, i)
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = tt
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
					w.a.read(() => {
						const e = document.getElementById(V.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - st, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - st, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), w.a.write(() => {
								Object(j.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => w.a.read(this.handleScroll))
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
					return y.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					w.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = y.c.end(t);
						n(Object(Ve.b)(t, s, e, E.TimerType.InApp, r, o))
					})
				}
				sendChatPostExposureEvent() {
					const {
						sendChatPostExposureEvent: e,
						hasModeratorPostPermissions: t,
						isChatPost: s
					} = this.props;
					e(s, t)
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
						subredditName: o
					} = this.props, r = !(!n || !n.isNSFW || t), i = Object(Fe.a)(e, r, o);
					if (!i) return null;
					let a = g.a.createElement(it, i);
					return s && (a = g.a.createElement(Ue.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentId: n,
						commentsPageKey: o,
						isNightmodeOn: r,
						isLoggedIn: i,
						isOverlay: a,
						post: d,
						postId: c,
						postSEOV2IdCardVariant: l,
						sort: m,
						sendEvent: p,
						subredditOrProfile: u,
						profileCollectionsEnabled: h,
						isInCommentsPageAdExperiment: b
					} = this.props, x = Object(ae.g)(l);
					if (!d) {
						if (t) return g.a.createElement(Ce.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === k.m ? g.a.createElement(it, {
							contentGateType: ze.a.PostBlockedForLegalReason
						}) : g.a.createElement(Ce.d, {
							postId: c,
							commentId: n,
							apiError: e,
							sort: m
						}) : g.a.createElement(Ce.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const f = this.isCommentPermalink(),
						v = d.belongsTo.type === K.a.PROFILE,
						C = Object(We.a)(d) && (!v || h),
						O = !i;
					return g.a.createElement(xt, {
						closeLocation: s,
						commentsPageKey: o,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: i,
						isOverlay: a,
						isSwapVariant: x,
						post: d,
						subredditOrProfile: u,
						shouldFitPageToContent: O,
						isCollectionLayout: C
					}, u && u.isQuarantined && g.a.createElement(Te.a, {
						subredditName: u.name
					}), g.a.createElement(Ne.a, null), g.a.createElement("div", {
						className: Object(_.a)(Qe.a.PageContentWrapper, {
							[Qe.a.LargePageContent]: C,
							[Qe.a.ChatPage]: this.props.isChatPostExperiment
						}),
						key: "PostContentWrapper"
					}, C && g.a.createElement(rt, {
						isOverlay: a,
						isNightmodeOn: r,
						postId: c
					}), g.a.createElement($e, {
						condition: C,
						wrap: e => g.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: Qe.a.CollectionBodyWrapper
						}, e)
					}, g.a.createElement(Me.a, {
						isCommentPermalink: f,
						isExclusivePost: !0,
						isOverlay: a,
						postId: c,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: p
					}), b && this.state.commentNativeAdId && g.a.createElement(B.a, {
						key: "event-post-id-".concat(d.id),
						postId: this.state.commentNativeAdId,
						isOverlay: a
					}), this.renderCommentPanes())), u && !Object($.f)(u) && g.a.createElement(W.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						post: d,
						subredditOrProfile: u
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: o,
						contestModeIsEnabled: r,
						fullyLoadComments: i,
						fullyLoaded: a,
						hasModeratorPostPermissions: d,
						headComment: c,
						isAvatarsInCommentsEnabled: m,
						isChatPostExperiment: p,
						isLoggedIn: u,
						isOverlay: h,
						isRealtimeCommentsExperimentEnabled: b,
						location: x,
						newCommentsCount: f,
						onOtherDiscussions: v,
						openLoginModal: C,
						openRegisterModal: y,
						origin: E,
						post: k,
						postId: j,
						replyComment: w,
						sendEvent: P,
						sort: I,
						subredditAboutInfo: T,
						subredditOrProfile: N
					} = this.props;
					if (!k) return null;
					const L = this.isCommentPermalink(),
						R = [],
						A = k.isLocked && !s,
						F = !(L || k.isArchived || T && T.userIsBanned);
					if (A) R.push(g.a.createElement(Ie.a, {
						key: "commentThreadBanner",
						subredditOrProfile: N
					}));
					else if (k.isArchived) R.push(g.a.createElement(Pe.a, {
						key: "commentThreadBanner"
					}));
					else if (F && !p && !v)
						if (u) {
							const e = Object(S.a)(O.c.replyToPost, j);
							R.push(g.a.createElement(xe.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: O.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: (t, s) => {
									var {
										validate: n
									} = t, r = Ye(t, ["validate"]);
									return n ? M.tb(j, o, e, r, s) : M.lb(j, o, e, r, s)
								},
								submitButtonText: l.fbt._("comment", null, {
									hk: "E1PqE"
								})
							}))
						} else R.push(g.a.createElement(ge.a, {
							key: "loggedOutCommentForm",
							location: x,
							openLoginModal: C,
							openRegisterModal: y,
							origin: E
						}));
					if (r && R.push(g.a.createElement(Se.a, {
							hasModeratorPostPermissions: d,
							key: "contestModeBanner"
						})), !p && !v && R.push(g.a.createElement(Ee.a, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: h,
							key: "commentSort",
							location: x,
							postId: j,
							sort: I,
							suggestedSort: k.suggestedSort
						}), g.a.createElement(qe.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: h,
							key: "commentNavigation",
							postId: j
						})), !t || c || p || v)
						if (!e || c || v)
							if (v) R.push(g.a.createElement(ot, {
								commentSort: I,
								key: "otherDiscussions",
								postId: j,
								isOverlay: h,
								postPermalink: k.permalink
							}));
							else if (p) {
						if (N && N.id) {
							const e = w ? Object(S.a)(O.c.replyToComment, w.id) : Object(S.a)(O.c.replyToPost, j),
								s = at({
									postId: j,
									commentId: n,
									commentsPageKey: o
								});
							R.push(g.a.createElement(Oe.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !c || !a && t,
								key: "commentsChat",
								postId: j,
								renderedInOverlay: h,
								subredditId: N.id
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return u ? g.a.createElement(ye.a, {
									key: "chatCommentsForm",
									postId: j,
									replyComment: w,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: P
								}) : g.a.createElement(ge.a, {
									key: "loggedOutCommentForm",
									className: Qe.a.ChatLoggedOutForm,
									location: x,
									openLoginModal: C,
									openRegisterModal: y,
									origin: E
								})
							}))
						}
					} else R.push(g.a.createElement("div", {
						className: Object(_.a)(Qe.a.CommentsPaneWrapper, {
							[Qe.a.mIsInOverlay]: h
						}),
						key: "commentsPaneWrapper"
					}, g.a.createElement(ke.a, Ze({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: k.numComments,
						onClick: this.handleContentClick
					}), b && f > 0 && g.a.createElement(ve.a, {
						commentsPageKey: o,
						isActive: !1,
						moreCommentsId: "",
						count: f,
						onMoreCommentsItemClick: i
					}), g.a.createElement(fe.a, {
						commentId: n,
						commentsPageKey: o,
						postId: j,
						renderedInOverlay: h
					})))), e && c ? R.push(g.a.createElement(Ce.e, {
						key: "commentsErrorState",
						postId: j,
						commentId: n,
						sort: I,
						apiError: e
					})) : !a && t && R.push(g.a.createElement(Ce.a, {
						isAvatarsInCommentsEnabled: m,
						key: "commentsPlaceholder"
					}));
					else R.push(g.a.createElement(Ce.e, {
						postId: j,
						commentId: n,
						sort: I,
						apiError: e
					}));
					else this.didRenderLoading = !0, R.push(g.a.createElement(Ce.a, {
						isAvatarsInCommentsEnabled: m,
						key: "commentsPlaceholder"
					}));
					return g.a.createElement(J.a.Provider, {
						value: this.sendEventWithName
					}, R)
				}
			}
			const ht = ct(pt(Object(Ae.c)(ut))),
				bt = P.a.wrapped(_e.a, "DetailsPageSidebar", Qe.a),
				xt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: m,
						subredditOrProfile: p
					} = e;
					if (!a && !d) return g.a.createElement(Ge.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: p && g.a.createElement(_e.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					if (d) return g.a.createElement(Ue.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: p && g.a.createElement(_e.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					const u = i ? H.i : z.a;
					return g.a.createElement(Ke.a, {
						containerRef: n,
						maxWidth: H.i,
						fitPageToContent: m,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: p && g.a.Children.toArray([g.a.createElement(je.a, {
							key: p.name,
							disableFullscreen: !0,
							headerText: p.name,
							maxWidth: u,
							prefixedHeaderText: p.displayText,
							subredditOrProfile: p,
							url: p.url
						}), !Object($.f)(p) && g.a.createElement(Re.a, {
							disableFullscreen: !0,
							homeUrl: p.url,
							maxWidth: u,
							subredditId: p.id
						})]),
						sidebar: p && g.a.createElement(bt, {
							commentsPageKey: s,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					})
				};
			t.default = Object(Je.a)(dt)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
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
					return t && Object(h.m)(t)
				},
				x = (e, t, s) => {
					const n = b(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.e)(t)
						})(e),
						i = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return o()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, r, a)
				},
				g = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				f = Object(a.b)(g);

			function v(e) {
				return f(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, o = x(t, s, n), r = Object(m.d)(t.match.path), a = Object.assign(Object.assign({}, t), {
						commentsPageKey: o,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: n
					});
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
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./node_modules/reselect/es/index.js");
			const o = e => e.dismissedTruncationList,
				r = Object(n.a)((e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s
				}, o, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/selectors/posts.ts");
			const r = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(n.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				i = (e, t) => {
					const s = r(e, t);
					return Object(o.S)(e, {
						listingKey: s
					}) || []
				},
				a = (e, t) => {
					const s = r(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				d = (e, t) => {
					const s = r(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				c = (e, t) => {
					const s = r(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return !(!n || !n.hasNextPage)
				},
				l = (e, t) => {
					const s = r(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return n && n.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/constants/postLayout.ts"),
				r = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => o.e[Object(r.N)(e, {})] === o.d.Card,
				d = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.D
				}) === n.M.Treatment
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.H, i.G, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.r
				}), e => e === o.y.Enabled)
		},
		"./src/reddit/selectors/experiments/commentsPageAd.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.F
				});
				return !!t && !Object(n.Cc)(t)
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.X
				});
				return !(!t || Object(n.Cc)(t))
			}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage.4ee8cd6b23819f69e598.js.map