// https://www.redditstatic.com/desktop2x/CommentsPage.8f58ec6b2ecbbb8835f2.js
// Retrieved at 11/12/2020, 12:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage", "ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49", "Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic", "ChatPost~ModQueuePages", "RpanListingUnit~reddit-components-MediumPost"], {
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
				c = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && o(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (s || e % 1 || t % 1) {
					var l = c();
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
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var s = a,
					d = c(e, a);
				t = o(t), e -= a;
				for (var l = n(d, t); ++s < e;) t(s);
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
			e.exports = JSON.parse('{"id":"a04c25fcce11"}')
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
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
					const r = h(o.target, o.currentTarget),
						i = x(o.target, o.currentTarget);
					r && s && t && (b(o.target, o.currentTarget, u.anchors) ? s(t(e, r, i)) : s(s => {
						const n = t(e, r, i)(s);
						let o;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							o = l(e, ["pageType"])
						}
						return Object.assign(Object.assign({}, n), {
							actionInfo: Object(c.previousPageActionInfo)(s, o)
						})
					})), b(o.target, o.currentTarget, u.anchorsAndButtons) && n(o)
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
						return i.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: m(n, s, t)
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
				b = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && b(e.parentElement, t, s)),
				h = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && h(e.parentElement, t))
				},
				x = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && x(e.parentElement, t))
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
				return b
			})), s.d(t, "f", (function() {
				return h
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
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				u = o()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = o()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				h = p(o()()).set({
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
					return [...x.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
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
				return W
			})), s.d(t, "b", (function() {
				return H
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/lodash/first.js")),
				a = s.n(i),
				c = s("./node_modules/lodash/isArray.js"),
				d = s.n(c),
				l = s("./src/reddit/helpers/isComment.ts"),
				m = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				h = s("./src/reddit/models/Vote/index.ts");
			const x = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const s = f(e.attribs),
							n = e.associated_award ? Object(m.b)(e.associated_award) : void 0;
						return Object.assign({
							allAwardings: [],
							associatedAward: n,
							author: e.author,
							authorId: e.author_fullname,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: g(s),
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
								rteMode: b.h.RICH_TEXT
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
							voteState: h.a.notVoted
						}, t || {})
					}
				},
				g = e => {
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
				f = e => a()((e || []).filter(e => d()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || p.d.None;
			const v = (e, t, s) => {
				const n = {
						[t]: {}
					},
					{
						author: o,
						author_flair_background_color: r,
						author_flair_richtext: i,
						author_flair_template_id: a,
						author_flair_text: c,
						author_flair_text_color: d,
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
									textColor: d
								}
							}
						}
					}
					if (l === u.f.Text) {
						if (!c) return n;
						return {
							[t]: {
								[o]: {
									type: l,
									backgroundColor: r,
									cssClass: void 0,
									text: c,
									templateId: a,
									textColor: d
								}
							}
						}
					}
				}
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var C = s("./src/lib/env/index.ts");
			const O = new Map,
				y = e => e,
				E = new Set;
			var k;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(k || (k = {}));
			const j = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				w = (e, t) => {
					const s = y(t),
						n = O.get(s);
					n && n.socket && (n.isClosePlanned = !0, n.socket.close())
				},
				_ = (e, t, s, n) => {
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
						i.retries = Object.assign({}, j)
					}), i.socket.addEventListener("message", S.bind(null, n)), i.socket.addEventListener("close", I.bind(null, o, n)), i.socket.addEventListener("error", T.bind(null, o)), window && window.addEventListener("beforeunload", w.bind(null, e, t))
				},
				I = (e, t, s) => {
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
						uniqueId: c,
						url: d
					} = s;
					if (O.delete(e), o < i && a.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, o),
							i = Math.random() * r - r / 2,
							a = Math.round(e + i),
							l = Object.assign(Object.assign({}, s.retries), {
								connectionAttempts: o + 1
							});
						setTimeout(() => {
							_(d, c, l, t)
						}, a), Object(C.a)() && console.debug("Connection reset, retrying in ".concat(a, "ms"))
					}
				},
				S = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(C.a)() && console.error(t)
					}
				},
				T = (e, t) => {
					const s = O.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? O.delete(e) : Object(C.a)() && console.error(t)
				};
			var N = s("./src/reddit/selectors/comments.ts"),
				A = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/actions/comment/websocket/constants.ts");
			const L = Object(o.a)(M.b),
				R = Object(o.a)(M.c),
				F = Object(o.a)(M.a),
				B = Object(o.a)(M.d),
				D = {},
				W = (e, t, s, o) => async (i, a) => {
					(e => new Promise(t => {
						const {
							cb: s,
							url: n,
							uniqueId: o
						} = e;
						E.has(o) ? t() : (E.add(o), setTimeout(() => {
							E.delete(o), _(n, o, Object.assign({}, j), s), t()
						}, 1))
					}))({
						uniqueId: s,
						url: t,
						cb: t => {
							switch (t.type) {
								case k.NEW_COMMENT: {
									const c = t.payload.name,
										d = x(t.payload),
										l = a(),
										m = Object(r.a)(l, s).sortToUse === n.r.CHAT,
										p = Object(N.n)(l, {
											commentId: c
										}),
										u = !(!c || !D[c]);
									if (d && !u) {
										const s = v(0, o, t.payload),
											n = t.payload.total_comment_count;
										if (void 0 === p) {
											const o = Object(N.x)(l, {
													commentsPageKey: e
												}),
												r = t.payload.parent_id,
												a = Object(N.j)(l, {
													commentId: r,
													commentsPageKey: e
												}),
												c = Object(N.n)(l, {
													commentId: r
												}),
												p = c && c.originId ? c.originId : r,
												u = null === a ? a : a + 1;
											if (m) i(L({
												authorFlair: s,
												comment: d,
												commentsPageKey: e,
												depth: u,
												headCommentId: o,
												isChatSort: m,
												numComments: n,
												originId: p
											}));
											else {
												const t = c && c.originId ? 5e3 : 7e3;
												setTimeout(() => i(L({
													authorFlair: s,
													comment: d,
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
											comment: d,
											commentsPageKey: e,
											isChatSort: m,
											numComments: n
										}))
									}
									break
								}
								case k.UPDATE_COMMENT: {
									const c = t.payload.name,
										d = a(),
										l = Object(N.n)(d, {
											commentId: c
										}),
										m = x(t.payload),
										p = Object(r.a)(d, s).sortToUse === n.r.CHAT;
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
								case k.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										n = t.payload.score,
										o = a(),
										r = Object(N.n)(o, {
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
								case k.DELETE_COMMENT: {
									const e = t.payload.name,
										s = a(),
										n = Object(N.n)(s, {
											commentId: e
										});
									n && !n.isDeleted ? i(F({
										id: e
									})) : D[e] = k.DELETE_COMMENT;
									break
								}
								case k.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										n = a(),
										o = Object(N.n)(n, {
											commentId: s
										}),
										r = (n.user.account && n.user.account.id) === (o && o.authorId),
										c = !!e && !!Object(A.i)(n, {
											postId: e
										});
									!o || o.isRemoved && o.isDeleted || r || c ? D[s] = k.REMOVE_COMMENT : i(F({
										id: s
									}));
									break
								}
								case k.USER_JOIN: {
									const s = x(t.payload, {
											isSystem: !0
										}),
										n = !0;
									s && i(B({
										comment: s,
										commentsPageKey: e,
										isChatSort: n
									}));
									break
								}
							}
						}
					})
				}, H = (e, t) => async () => {
					w(0, t)
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
				return k
			})), s.d(t, "startEventNowSuccess", (function() {
				return j
			})), s.d(t, "startEventNowRequested", (function() {
				return w
			})), s.d(t, "editEventTimeSuccess", (function() {
				return _
			})), s.d(t, "editEventTimeRequested", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/graphql/operations/EventPostsBySubredditName.json"),
				d = s("./src/lib/makeGqlRequest/index.ts");
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
			var b = (e, t) => Object(l.a)(Object(m.a)(e, [p.a]), {
					endpoint: "".concat(e.apiUrl, "/api/start_event_post.json"),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				h = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
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
				k = e => async (t, s, n) => {
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
					const b = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) b.nonInclusiveCursor = p;
					else if (l && !m) return;
					const f = Object(g.e)(r, {
						subredditName: e
					});
					t(C({
						key: f
					}));
					const k = await ((e, t) => Object(d.a)(e, Object.assign(Object.assign({}, c), {
						variables: t
					})))(o(), b);
					if (k.ok) {
						const {
							subredditInfoByName: e
						} = k.body.data, {
							eventPosts: n
						} = e, o = Object(h.a)(n);
						let i = [],
							a = {};
						const c = n.pageInfo || {
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
							pageInfo: c
						}))
					} else t(y({
						error: k.error,
						key: f
					})), t(Object(a.e)({
						kind: x.b.Error,
						text: v()
					}))
				}, j = Object(r.a)(i.f), w = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if ((await b(r(), e)).ok) {
						const o = () => n.fbt._("Following event has started successfully: {title}", [n.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(j({
							postId: e
						}));
						const r = s(),
							i = Object(f.O)(r, {
								postId: e
							}),
							c = i && i.title || "";
						t(Object(a.e)({
							kind: x.b.SuccessMod,
							text: o()
						}))
					} else t(Object(a.e)({
						kind: x.b.Error,
						text: v()
					}))
				}, _ = Object(r.a)(i.a), I = (e, t) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const d = await u(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (d.ok) {
						const t = d.body,
							i = 14400,
							c = Math.round(t.event_start / o.Fb);
						let l = t.event_end;
						const m = {
							eventStart: c,
							eventEnd: l = l && Math.round(l / o.Fb) || c + i,
							eventIsLive: t.event_is_live
						};
						s(_({
							postId: e,
							eventInfo: m
						}));
						const p = r(),
							u = Object(f.O)(p, {
								postId: e
							}),
							b = u && u.title || "",
							h = () => n.fbt._("Following event time is updated successfully: {title}", [n.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						s(Object(a.e)({
							kind: x.b.SuccessMod,
							text: h()
						}))
					} else s(Object(a.e)({
						kind: x.b.Error,
						text: v()
					}))
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return A
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "g", (function() {
				return F
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "c", (function() {
				return V
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "f", (function() {
				return Q
			})), s.d(t, "d", (function() {
				return ne
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/filterQueryParams/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/postCollection/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/history.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts");
			var b = (e, t, s) => Object(m.a)(Object(p.a)(e, [u.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/add_post_to_collection.json"),
				method: l.db.POST,
				data: {
					collection_id: t,
					link_fullname: s
				}
			});
			var h = (e, t, s) => Object(m.a)(Object(p.a)(e, [u.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/create_collection.json"),
				method: l.db.POST,
				data: {
					title: t,
					sr_fullname: s
				}
			});
			var x = (e, t) => Object(m.a)(Object(p.a)(e, [u.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/collections/delete_collection.json"),
					method: l.db.POST,
					data: {
						collection_id: t
					}
				}),
				g = s("./src/config.ts");
			var f = (e, t) => Object(m.a)(Object(p.a)(e, [u.a]), {
				endpoint: "".concat(g.a.gatewayUrl, "/desktopapi/v1/subreddit_collections/").concat(t),
				method: l.db.GET
			});
			var v = (e, t, s) => Object(m.a)(Object(p.a)(e, [u.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/remove_post_in_collection.json"),
				method: l.db.POST,
				data: {
					collection_id: t,
					link_fullname: s
				}
			});
			var C = (e, t, s) => Object(m.a)(Object(p.a)(e, [u.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_title.json"),
				method: l.db.POST,
				data: {
					collection_id: t,
					title: s
				}
			});
			var O = (e, t, s) => Object(m.a)(Object(p.a)(e, [u.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/reorder_collection.json"),
				method: l.db.POST,
				data: {
					collection_id: t,
					link_ids: s.join(",")
				}
			});
			var y = (e, t, s) => Object(m.a)(Object(p.a)(e, [u.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_description.json"),
				method: l.db.POST,
				data: {
					collection_id: t,
					description: s
				}
			});
			var E = (e, t, s) => Object(m.a)(Object(p.a)(e, [u.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/collections/update_collection_display_layout.json"),
					method: l.db.POST,
					data: {
						collection_id: t,
						display_layout: s
					}
				}),
				k = s("./src/reddit/helpers/overlay/index.ts"),
				j = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/postCollection.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/subreddit.ts");
			const S = Object(i.a)(a.c),
				T = Object(i.a)(a.b),
				N = Object(i.a)(a.d),
				A = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					s(S());
					const i = await h(r(), e, t);
					let a;
					if (i.ok) {
						const e = n().meta,
							t = (e => ({
								author: e.author_name || void 0,
								createdAtUTC: e.created_at_utc,
								description: e.description,
								displayLayout: e.display_layout,
								id: e.collection_id,
								lastUpdateUTC: e.last_update_utc,
								permalink: e.permalink,
								postIds: e.link_ids,
								primaryPostId: e.primary_link_id || void 0,
								subredditId: e.subreddit_id,
								title: e.title
							}))(i.body);
						s(N({
							collection: t,
							meta: e
						})), a = t
					} else {
						const e = i.error;
						s(T(e))
					}
					return a
				}, M = Object(i.a)(a.f), L = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s().postCollection.subredditToIds || {};
					if (Object.keys(i).length > 0) return;
					const a = await f(r(), e);
					a.ok ? t(M(a.body)) : t(Object(c.e)({
						kind: w.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, R = Object(i.a)(a.g), F = (e, t, s) => async (o, r, i) => {
					let {
						apiContext: a
					} = i;
					if ((await v(a(), e, t)).ok) {
						const i = r(),
							a = Object(I.O)(i, {
								postId: t
							}),
							d = a && a.title || "",
							l = Object(_.r)(i, {
								collectionId: e
							}),
							m = (l && l.postIds && l.postIds.indexOf(t) || -1) - 1;
						if (o(R({
								collectionId: e,
								postId: t
							})), s && m >= 0) {
							const t = r(),
								s = Object(_.r)(t, {
									collectionId: e
								}),
								n = s && s.postIds && s.postIds[m] || "",
								i = Object(I.O)(t, {
									postId: n
								});
							i && i.permalink && o(Object(k.a)(i.permalink))
						}
						o(Object(c.e)({
							kind: w.b.SuccessMod,
							text: n.fbt._("Following post removed from collection successfully: {postTitle}", [n.fbt._param("postTitle", d)], {
								hk: "8e1lV"
							}),
							buttonText: n.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: W(e, t)
						}))
					} else o(Object(c.e)({
						kind: w.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, B = Object(i.a)(a.a), D = Object(i.a)(a.t), W = (e, t) => async (s, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o();
					if ((await b(i(), e, t)).ok) {
						s(B({
							collectionId: e,
							postId: t
						})), s(D({
							collectionId: e,
							postId: t
						}));
						const o = Object(I.O)(a, {
								postId: t
							}),
							r = Object(_.r)(a, {
								collectionId: e
							}),
							i = r && r.title || "";
						s(Object(c.e)({
							kind: w.b.SuccessMod,
							text: n.fbt._("Success! You added a post to the collection: {title}", [n.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: n.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(k.a)(o.permalink)
						}))
					} else s(Object(c.e)({
						kind: w.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, H = Object(i.a)(a.e), V = (e, t) => async (s, i, a) => {
					let {
						apiContext: d
					} = a;
					const l = i();
					if ((await x(d(), e)).ok) {
						const {
							url: i
						} = l.platform.currentPage, a = Object(_.r)(l, {
							collectionId: e
						}), d = a && a.title || "", m = a && a.subredditId, p = m ? Object(P.c)(l, m) : "/";
						s(H({
							collectionId: e,
							collection: a
						})), s(t ? Object(o.c)(Object(r.a)(i, ["collection"])) : Object(o.b)(p)), s(Object(c.e)({
							kind: w.b.SuccessMod,
							text: n.fbt._("Collection deleted successfully: {title}", [n.fbt._param("title", d)], {
								hk: "4tcOKB"
							})
						}))
					} else s(Object(c.e)({
						kind: w.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(i.a)(a.r), G = Object(i.a)(a.n), K = Object(i.a)(a.s), q = (e, t) => async (s, o, r) => {
					let {
						apiContext: i
					} = r;
					s(U());
					const a = await C(i(), e, t);
					let d = !1;
					if (a.ok) s(K({
						collectionId: e,
						newTitle: t
					})), s(Object(c.e)({
						kind: w.b.SuccessMod,
						text: n.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), d = !0;
					else {
						const e = a.error;
						s(G(e)), s(Object(c.e)({
							kind: w.b.Error,
							text: n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return d
				}, z = Object(i.a)(a.l), J = Object(i.a)(a.m), X = Object(i.a)(a.k), Q = e => async (t, s) => {
					const n = s().platform.currentPage.locationState;
					t(!(!n || !n[d.a.IsOverlay]) ? Object(k.a)(e.permalink) : Object(o.b)(Object(j.b)(e.permalink)))
				}, Y = Object(i.a)(a.i), Z = Object(i.a)(a.j), $ = Object(i.a)(a.h), ee = Object(i.a)(a.p), te = Object(i.a)(a.o), se = Object(i.a)(a.q), ne = e => async t => {
					const s = [],
						{
							collectionId: o,
							description: r,
							displayLayout: i,
							postIds: a,
							title: d
						} = e;
					a && s.push(t(((e, t) => async (s, o, r) => {
						let {
							apiContext: i
						} = r;
						s(Y());
						const a = await O(i(), e, t);
						let d = !1;
						return a.ok ? (s(Z({
							collectionId: e,
							postIds: t
						})), s(Object(c.e)({
							kind: w.b.SuccessMod,
							text: n.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), d = !0) : (s($({
							error: a.error
						})), s(Object(c.e)({
							kind: w.b.Error,
							text: n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), d
					})(o, a))), d && s.push(t(q(o, d))), void 0 !== r && s.push(t(((e, t) => async (s, o, r) => {
						let {
							apiContext: i
						} = r;
						s(z());
						const a = await y(i(), e, t);
						let d = !1;
						if (a.ok) s(J({
							collectionId: e,
							newDescription: t
						})), s(Object(c.e)({
							kind: w.b.SuccessMod,
							text: n.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), d = !0;
						else {
							const e = a.error;
							s(X(e)), s(Object(c.e)({
								kind: w.b.Error,
								text: n.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return d
					})(o, r))), i && s.push(t(((e, t) => async (s, o, r) => {
						let {
							apiContext: i
						} = r;
						s(ee());
						const a = await E(i(), e, t);
						let d = !1;
						if (a.ok) s(se({
							collectionId: e,
							newLayout: t
						})), s(Object(c.e)({
							kind: w.b.SuccessMod,
							text: n.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), d = !0;
						else {
							const e = a.error;
							s(te(e)), s(Object(c.e)({
								kind: w.b.Error,
								text: n.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return d
					})(o, i)));
					let l = !0;
					return await Promise.all(s).then(e => {
						e.forEach(e => {
							e || (l = !1)
						})
					}), l
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return A
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const b = e => Object.assign({
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
			var h = (e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(m.a)("".concat(e.apiUrl, "/api/editusertext"))),
					method: a.db.POST,
					data: b(t)
				}).then(p.b),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				f = s("./src/reddit/helpers/trackers/lightbox.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/helpers/trackers/postComposer.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/PostCreationForm/index.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/actions/postCreation/constants.ts"),
				w = s("./src/reddit/actions/postCreation/general.ts");
			const _ = Object(o.a)(j.l),
				I = Object(o.a)(j.m),
				P = Object(o.a)(j.y),
				S = Object(o.a)(j.E),
				T = Object(o.a)(j.F),
				N = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n(),
						a = Object(k.O)(i, {
							postId: e
						});
					t ? (s(Object(x.a)(a.permalink)), Object(f.e)(e, "edit")(i)) : Object(v.b)(e, "edit")(i);
					const {
						media: c
					} = a;
					if (!c) return;
					let d, l = y.h.RICH_TEXT,
						m = "";
					c.type === O.o.TEXT ? (l = y.h.MARKDOWN, m = c.content) : c.type === O.o.RTJSON && (m = (l = c.rteMode || y.h.RICH_TEXT) === y.h.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), s(S({
						editorMode: l,
						mediaMetadata: d,
						postContent: m,
						postId: e
					}))
				}, A = e => async (t, s, o) => {
					let {
						apiContext: a
					} = o;
					const {
						post: c
					} = e, d = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					C.u(s(), Object(w.n)(d)), t(P(c.id));
					const l = await h(a(), e),
						m = !1 === l.body.success;
					if (t(_(c.id)), l.ok && !m) {
						t(Object(i.e)({
							kind: E.b.SuccessCommunity,
							text: n.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(T(c.id));
						const e = Object(g.a)(l.body);
						t(Object(r.J)({
							[c.id]: e
						}))
					} else t(I(l.error))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: c,
					callToAction: l,
					caption: m
				} = t;
				if (!c || !c.url) return null;
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, m && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: c.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
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
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/doubleclickForPublishers/index.ts"),
				m = s("./src/lib/intersectionObserver/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
				sizes: [d.e]
			};
			t.a = Object(r.b)(() => Object(i.c)({
				properties: Object(p.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(u.b)(t.placement, e.user, Object(c.a)("".concat(n).concat(s.url), s.queryParams), Object(b.B)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? l.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(h.c)(E))
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/hooks/useButtons2020.ts"),
				c = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(c);

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
					className: t
				} = e, s = m(e, ["className"]);
				const n = Object(a.a)();
				return o.a.createElement(i.a, l({
					className: Object(r.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView,
						[d.a.is2020]: n
					})
				}, s))
			}
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
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				h = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				x = s.n(h);

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
					}, o.a.createElement(d.d, g({
						key: "u"
					}, t)), e.children, o.a.createElement(d.c, g({
						key: "d"
					}, t)))
				},
				y = () => o.a.createElement(O, null, o.a.createElement("div", {
					className: x.a.emptyScore,
					key: "s"
				}));
			t.b = f(C(e => o.a.createElement("div", {
				className: Object(a.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(c.b, null, o.a.createElement(y, null)), o.a.createElement("div", {
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
				c = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				u = s.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = "bottom",
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
					className: Object(m.a)(u.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				C = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				O = e => r.a.createElement(f, e, e.isCommentBoxDesignEnabled ? r.a.createElement(C, null) : r.a.createElement(v, null), r.a.createElement(c.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
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
				k = e => r.a.createElement(E, b({}, e, {
					fallback: r.a.createElement(y, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = k
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
				c = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				p = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(p);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = a.a.div("Wrapper", u.a), x = a.a.span("Copy", u.a), g = a.a.wrapped(l.j, "SignupLink", u.a), f = a.a.wrapped(l.m, "LoginLink", u.a);
			t.a = Object(d.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: a,
					openRegisterModal: d,
					origin: l,
					sendEvent: p
				} = e;
				return o.a.createElement(h, {
					className: Object(r.a)(t, {
						[u.a.LiveStreamingWrapper]: s
					})
				}, o.a.createElement(x, {
					className: Object(r.a)({
						[u.a.LiveStreamingCopy]: s
					})
				}, b._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement(f, {
					href: Object(c.a)(n, l, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), a(), p(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, b._("Log In", null, {
					hk: "ZR3pC"
				})), o.a.createElement(g, {
					className: Object(r.a)({
						[u.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(n, l, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), p(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, b._("Sign Up", null, {
					hk: "48wH4o"
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
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				g = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				f = s.n(g);
			const v = b.a.wrapped(x.a, "Show", f.a);
			var C = e => o.a.createElement(h.e, null, !e.comment.isApproved && o.a.createElement(h.c, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(h.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.c, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "VP5J0"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(h.g, null)), o.a.createElement(h.c, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(h.h, null)), o.a.createElement(h.c, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(h.f, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(h.c, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(v, null)));
			const O = b.a.wrapped(l.a, "StyledDropdown", f.a),
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
				k = Object(c.a)(O),
				j = E(Object(d.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: n,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: c,
						sendEvent: d,
						tooltipId: l
					} = e;
					return o.a.createElement(k, {
						isOpen: s,
						tooltipId: l
					}, o.a.createElement(C, {
						onApproveComment: () => {
							n(), d(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), d(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							a(), d(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), d(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), d(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = j
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
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
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
						method: d.db.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(i(), e, t),
					c = "error-block-".concat(t),
					l = "success-block-".concat(t);
				if (a.ok) {
					s(Object(b.J)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(h.e({
						id: l,
						kind: v.b.SuccessCommunityGreen,
						text: o
					}))
				} else s(h.e({
					id: c,
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
				k = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				I = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
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
				A = e => ({
					subreddit: Object(S.subreddit)(e),
					userSubreddit: Object(S.userSubreddit)(e)
				}),
				M = e => t => Object.assign({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable"
				}, A);
			var L = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = s("./src/reddit/icons/svgs/Info/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/tooltip.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				G = s.n(U),
				K = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts");
			const q = Object(k.a)(w.a),
				z = l.a.wrapped(L.b, "DropdownTriangle", G.a),
				J = l.a.div("HighlightWrapper", G.a),
				X = l.a.div("Title", G.a),
				Q = e => e === K.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === K.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Y extends r.a.Component {
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
					})), r.a.createElement(_.b, {
						className: Object(c.a)(G.a.HighlightPicker, G.a.Row),
						displayText: Q(o),
						id: t,
						onClick: s
					}), r.a.createElement(z, {
						onClick: s
					}), r.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(_.b, {
						displayText: Q(K.a.First),
						isSelected: o === K.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(_.b, {
						displayText: Q(K.a.Last),
						isSelected: o === K.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(_.b, {
						displayText: Q(K.a.None),
						isSelected: o === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Z = Y;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				se = Object(k.a)(w.a),
				ne = l.a.button("ContestMode", G.a),
				oe = l.a.wrapped(L.b, "DropdownTriangle", G.a),
				re = l.a.wrapped(R.a, "Info", G.a),
				ie = l.a.wrapped(_.b, "Row", G.a),
				ae = l.a.button("SetSort", G.a),
				ce = l.a.button("SortLink", G.a),
				de = l.a.div("Title", G.a),
				le = l.a.wrapped(I.a, "ToggleSwitch", G.a),
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
					contestModeIsEnabled: W.F,
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
					postPermalink: W.N,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(V.q)(e),
							o = !!Object(D.i)(e, {
								postId: s
							}),
							r = Object(W.O)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: B.q
				}),
				be = Object(i.b)(ue, (e, t) => {
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
						setContestMode: t => e(Object(b.N)(t, s)),
						showTooltip: () => e(Object(m.h)({
							tooltipId: te
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class he extends r.a.Component {
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
						this.props.sendEvent(M(!this.props.contestModeIsEnabled)), this.props.setContestMode(!this.props.contestModeIsEnabled)
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
						isOverlay: b,
						location: h,
						postPermalink: x,
						selectedHighlightSort: g,
						showCommentHighlighter: f,
						sort: v,
						suggestedSort: C,
						showTooltip: y,
						toggleContestModeModal: E
					} = this.props, k = !h.search.includes(d.r.CONFIDENCE), j = v === d.r.CONFIDENCE && k, w = u && !j, I = d.t[v], S = I ? I() : "", T = C && v === C && !j ? this.addSuggestedLabel(S) : S, A = i ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), M = i ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), L = i ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), R = i && !u;
					return r.a.createElement("div", {
						className: Object(c.a)(t, G.a.container, {
							[G.a.hideCommentSort]: !f && R
						}),
						ref: l
					}, !R && r.a.createElement(de, {
						onClick: this.onOpenDropdownClick
					}, n.fbt._("Sort by", null, {
						hk: "E6T9r"
					})), !R && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie, {
						className: Object(c.a)(G.a.SortPicker, G.a.Row),
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
					}, [d.r.CONFIDENCE, d.r.TOP, d.r.NEW, d.r.CONTROVERSIAL, d.r.OLD, d.r.QA].map(e => {
						const t = s || x,
							n = Object(P.b)(t),
							o = d.t[e],
							i = o ? o() : "";
						return r.a.createElement(me, {
							isOverlay: b,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: "".concat(n, "?sort=").concat(e)
						}, r.a.createElement(_.b, {
							displayText: i,
							isSelected: v === e,
							skipRoleAttr: !0
						}))
					}))), w && !R && (C ? r.a.createElement(ce, {
						onClick: v !== C ? this.setSortOnClick : this.clearSortOnClick
					}, v !== C ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement(ae, null, r.a.createElement(ce, {
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
					})), f && r.a.createElement(Z, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: g,
						trackHighlight: N
					}), o && r.a.createElement(O.a, {
						actionText: M,
						headerText: A,
						modalText: L,
						onConfirm: this.setContestMode,
						toggleModal: E,
						withOverlay: !0
					}))
				}
			}
			t.a = be(Object(j.c)(he))
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
		"./src/reddit/components/Comments/Comment/HighlightEffect/LottieEffect/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lottie-web/build/player/lottie.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r);
			s("./src/reddit/components/ImageWithFallback/index.tsx");
			const a = {};

			function c(e) {
				let t = a[e];
				return t || (t = a[e] = fetch(e).then(t => (t.ok || function(e) {
					throw new Error('Unable to download effect asset "'.concat(e, '"'))
				}(e), t.json()))), t
			}
			const d = i.a.memo(e => {
				const t = i.a.createRef(),
					[s, n] = Object(r.useState)(null);
				Object(r.useEffect)(() => {
					const r = t.current;
					!s && r && c(e.assetUrl).then(t => {
						if (0 === r.childElementCount) {
							const s = o.a.loadAnimation({
								autoplay: !1,
								loop: e.loop,
								container: r,
								animationData: t
							});
							n(s)
						}
					})
				}, [e.assetUrl, e.loop, t, s]), Object(r.useEffect)(() => {
					if (s)
						if (e.hidden) s.stop();
						else if (e.prefersReducedAnimation) {
						const e = s.getDuration(!0);
						s.goToAndPlay(e, !0)
					} else s.goToAndPlay(0)
				}, [e.hidden, e.prefersReducedAnimation, s]);
				const a = Object(r.useCallback)(() => {
					s && s.goToAndPlay(0)
				}, [s]);
				return i.a.createElement("div", {
					style: {
						display: e.hidden ? "none" : "block"
					},
					ref: t,
					onClick: a
				})
			});
			t.a = d
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, s) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/interfaces.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Lottie = "lottie"
				}(n || (n = {}))
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
				return D
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/modTools.ts"),
				C = s("./src/reddit/selectors/moderatingComments.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				j = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				w = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				I = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				P = s("./src/reddit/icons/svgs/Show/index.tsx"),
				S = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				T = s.n(S),
				N = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const A = l.a.wrapped(h.c, "RestrictedButton", T.a),
				M = l.a.wrapped(k.a, "Approve", T.a),
				L = l.a.wrapped(w.a, "Lock", T.a),
				R = l.a.wrapped(_.a, "Remove", T.a),
				F = l.a.wrapped(I.a, "Spam", T.a),
				B = l.a.wrapped(P.a, "Show", T.a),
				D = l.a.wrapped(j.a, "DistinguishShield", T.a),
				W = Object(g.t)(),
				H = e => "Distinguish--Dropdown--".concat(e),
				V = Object(a.c)({
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
						return Object(y.b)(H(s.id))(e)
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
				U = Object(i.b)(V, (e, t) => {
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
							tooltipId: H(s.id)
						}))
					}
				});
			t.c = W(U(l.a.wrapped(Object(x.c)(e => {
				var {
					className: t,
					comment: s,
					currentUser: o,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: p,
					onDistinguishComment: h,
					onLockComment: x,
					onRemoveComment: g,
					onShowComment: C,
					onSpamComment: O,
					onToggleDistinguishDropdown: y,
					sendEvent: E
				} = e, k = N(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const j = Object(f.a)(l),
					w = Object(b.b)(s),
					_ = s.isApproved && w,
					I = !!o && o.isEmployee,
					P = !s.isRemoved,
					S = a,
					W = e => E(Object(v.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || w) && r.a.createElement(A, {
					text: _ ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						p(), W("approve")
					}
				}, r.a.createElement(M, null)), P && r.a.createElement(r.a.Fragment, null, r.a.createElement(A, {
					text: s.bannedBy === d.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						g(), s.bannedBy === d.k ? W("confirm_remove") : W("remove")
					}
				}, r.a.createElement(R, null)), r.a.createElement(A, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						O(), W("spam")
					}
				}, r.a.createElement(F, null))), r.a.createElement(A, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						x(), W(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(L, null)), i && !I && !s.bannedBy && r.a.createElement(A, {
					className: Object(c.a)({
						[T.a.selected]: k.isDistinguishDropdownOpen
					}),
					onClick: () => {
						W("mod_distinguish_menu"), y()
					}
				}, r.a.createElement(D, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: k.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: I,
					isUserMod: j,
					onDistinguishComment: h,
					sendEventWithName: W,
					tooltipId: H(s.id)
				})), S && r.a.createElement(A, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						C()
					}
				}, r.a.createElement(B, null)))
			}), "CommentModToolsFlatlist", T.a)))
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
				c = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/actions/gold/powerups.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/humanizeDateTime/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/timeAgo/index.ts"),
				g = s("./src/reddit/helpers/trackers/powerups.ts"),
				f = s("./src/reddit/components/AuthorLink/index.tsx"),
				v = s("./src/reddit/components/AwardBadges/index.tsx"),
				C = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				O = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				y = s("./src/reddit/components/Flair/index.tsx"),
				E = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				k = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				j = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				I = s("./src/reddit/selectors/economics.ts"),
				P = s("./src/reddit/helpers/isRemoved.ts"),
				S = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				T = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				N = s("./src/reddit/actions/comment/index.ts"),
				A = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/models/Flair/index.ts"),
				L = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				R = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				F = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				B = s("./src/reddit/icons/fonts/Op/index.tsx"),
				D = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				W = s("./src/reddit/icons/fonts/Report/index.tsx"),
				H = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				V = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				U = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				G = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				K = s("./src/reddit/icons/svgs/Powerup/index.tsx"),
				q = s("./src/reddit/controls/MetaData/index.tsx"),
				z = s("./src/reddit/selectors/subreddit.ts"),
				J = s("./src/reddit/selectors/userFlair.ts"),
				X = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Q = s.n(X);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Z = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const $ = h.a.wrapped(y.b, "RightPositionedAuthorFlair", Q.a),
				ee = h.a.wrapped(L.a, "AdminIcon", Q.a),
				te = h.a.wrapped(R.a, "ApproveIcon", Q.a),
				se = h.a.wrapped(F.a, "LockIcon", Q.a),
				ne = h.a.div("AdminEmeritus", Q.a),
				oe = h.a.wrapped(V.a, "AutomoderatorIcon", Q.a),
				re = h.a.wrapped(K.a, "TopSupporterIcon", Q.a),
				ie = h.a.wrapped(U.a, "CakeIcon", Q.a),
				ae = h.a.wrapped(G.a, "ModeratorIcon", Q.a),
				ce = h.a.wrapped(D.a, "RemoveIcon", Q.a),
				de = h.a.wrapped(W.a, "ReportIcon", Q.a),
				le = h.a.wrapped(H.a, "SpamIcon", Q.a),
				me = h.a.wrapped(B.a, "OpIcon", Q.a),
				pe = h.a.wrapped(L.a, "ContractorIcon", Q.a),
				ue = h.a.a("MetaLink", Q.a),
				be = h.a.wrapped(q.a, "EditedText", Q.a),
				he = h.a.wrapped(q.a, "StickiedText", Q.a),
				xe = h.a.span("DeletedText", Q.a),
				ge = h.a.wrapped(q.a, "MetaSeparator", Q.a),
				fe = h.a.wrapped(q.a, "CrowdControlText", Q.a),
				ve = h.a.wrapped(k.b, "AuthorHoverCard", Q.a),
				Ce = h.a.a("RemovalReason", Q.a),
				Oe = h.a.wrapped(C.b, "Component", Q.a),
				ye = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				Ee = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				ke = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				je = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				we = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				_e = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Ie = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Pe = () => n.fbt._("Powerups Top Supporter", null, {
					hk: "1GLWsz"
				}),
				Se = Object(i.b)(() => Object(a.c)({
					adminTooltipId: ye("CommentTopMeta--Admin--"),
					cakedayTooltipId: ye("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: ye("CommentTopMeta--AdEm--"),
					automodTooltipId: ye("CommentTopMeta--Automod--"),
					approveTooltipId: ye("CommentTopMeta--Approve--"),
					createdTooltipId: ye("CommentTopMeta--Created--"),
					contractorTooltipId: ye("CommentTopMeta--Contractor--"),
					gildedTooltipId: ye("CommentTopMeta--Gold--"),
					lockedTooltipId: ye("CommentTopMeta--Locked--"),
					modTooltipId: ye("CommentTopMeta--Mod--"),
					opTooltipId: ye("CommentTopMeta--OP--"),
					removeTooltipId: ye("CommentTopMeta--Remove--"),
					reportTooltipId: ye("CommentTopMeta--Report--"),
					spamTooltipId: ye("CommentTopMeta--Spam--"),
					topSupporterTooltipId: ye("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(I.r)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(z.J)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.d)(e, {
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
					openPowerupsModal: () => e(Object(d.b)()),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Se(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: o,
					cakedayTooltipId: i,
					children: a,
					className: d,
					collapsed: l,
					collapsedBecauseCrowdControl: m,
					comment: b,
					commentsPageKey: h,
					contractorTooltipId: x,
					compact: f,
					flair: C,
					flairPosition: k,
					hasBadges: j,
					isAvatarsInCommentsEnabled: I,
					isLivestreaming: P,
					ignoreFlairPosition: S,
					ignoreLock: T,
					lockedTooltipId: N,
					modTooltipId: L,
					onHideTooltip: R,
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
					subredditDisplayText: J,
					topSupporterTooltipId: X
				} = e, Z = Object(c.a)();
				if (b.isDeleted) return r.a.createElement(Te, Y({}, e, {
					className: Object(p.a)(d, Q.a.container, {
						[Q.a.collapsed]: l
					})
				}));
				if (l) return r.a.createElement(Ne, Y({}, e, {
					className: Object(p.a)(d, Q.a.container, {
						[Q.a.collapsed]: l
					})
				}));
				const ee = !S && k === M.b.Left;
				return r.a.createElement("div", {
					className: Object(p.a)(d, Q.a.container, {
						[Q.a.collapsed]: l,
						[Q.a.hasBadges]: j,
						[Q.a.liveStreaming]: P
					})
				}, C && ee && r.a.createElement(y.b, {
					flair: C,
					forceSmallEmojis: f
				}), !Object(A.e)(b) && r.a.createElement(Oe, {
					showAddCustom: !0,
					subredditId: b.subredditId,
					userId: b.authorId,
					uniqueIdentifier: b.id
				}), r.a.createElement(ve, {
					postOrComment: b,
					tooltipType: G ? _.c.Lightbox : void 0
				}, r.a.createElement(O.b, {
					ignore: Object(A.e)(b) || !!b.distinguishType && b.distinguishType !== u.C.NONE,
					subredditId: b.subredditId,
					userId: b.authorId
				}, r.a.createElement(Me, {
					comment: b,
					isLivestreaming: P,
					isStrong: !!f,
					isAuthorDeleted: Object(A.e)(b)
				}, a && a))), m && r.a.createElement(fe, null, "Crowd Control"), m && r.a.createElement(q.c, {
					className: Q.a.metaText,
					key: "crowdControlSeparator"
				}), C && !ee && r.a.createElement($, {
					flair: C,
					forceSmallEmojis: f
				}), !f && r.a.createElement(E.a, {
					className: Q.a.publicPoints,
					contentId: b.id,
					metaSeparator: r.a.createElement(q.c, {
						className: Q.a.metaText
					}),
					subredditId: b.subredditId,
					userId: b.authorId,
					username: b.author
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement(w.b, {
					commentId: b.id
				}), r.a.createElement(w.a, {
					commentId: b.id,
					commentsPageKey: h
				}), r.a.createElement(Fe, {
					comment: b,
					compact: f,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: i,
					contractorTooltipId: x,
					modTooltipId: L,
					onHideTooltip: R,
					onShowTooltip: F,
					openPowerupsModal: () => {
						Z(Object(g.e)("comment")), D()
					},
					opTooltipId: B,
					renderContractorBadge: V,
					renderTopSupporterBadge: U,
					subredditDisplayText: J,
					topSupporterTooltipId: X
				})), !f && r.a.createElement(r.a.Fragment, null, !b.isDeleted && !I && r.a.createElement(q.b, {
					className: Q.a.metaText,
					isScoreHidden: b.isScoreHidden,
					score: b.score
				}), !I && r.a.createElement(q.c, {
					className: Q.a.metaText,
					key: "scoreCreatedSeparator"
				}), r.a.createElement(Le, Y({
					key: "Created"
				}, e)), b.isStickied && De(), b.editedAt && Ae(b.editedAt)), r.a.createElement(r.a.Fragment, null, r.a.createElement(Be, {
					comment: b,
					approveTooltipId: n,
					automodTooltipId: o,
					ignoreLock: T,
					lockedTooltipId: N,
					onHideTooltip: R,
					onShowTooltip: F,
					openRemovalReasonModal: W,
					removeTooltipId: H,
					reportTooltipId: K,
					spamTooltipId: z
				})), r.a.createElement(v.a, {
					thing: b,
					tooltipType: G ? _.c.Lightbox : void 0
				}))
			});
			const Te = e => {
					const {
						childrenInfo: t,
						collapsed: s,
						className: o,
						comment: i
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(xe, null, i.deletedBy === A.b.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Le, Y({
						key: "Created"
					}, e)), s && Re({
						childrenInfo: t
					}))
				},
				Ne = e => {
					const {
						comment: t,
						className: s,
						childrenInfo: n
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement("div", null, r.a.createElement(Me, {
						comment: t,
						isAuthorDeleted: Object(A.e)(t)
					})), r.a.createElement(q.b, {
						className: Q.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(q.c, {
						className: Q.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Le, Y({
						key: "Created"
					}, e)), Re({
						childrenInfo: n
					}))
				},
				Ae = e => r.a.createElement(o.Fragment, null, r.a.createElement(q.c, {
					className: Q.a.metaText
				}), r.a.createElement(be, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(x.d)(e))], {
					hk: "1tiB0u"
				}))),
				Me = e => r.a.createElement(f.a, {
					className: Q.a.CommentAuthorLink,
					author: e.comment.author,
					isAdmin: e.comment.isAdmin,
					isAdminEmeritus: e.comment.distinguishType === u.C.ALUMNI_ADMIN,
					isAuthorDeleted: e.isAuthorDeleted,
					isLivestreaming: e.isLivestreaming,
					isMod: e.comment.isMod,
					isOp: e.comment.isOp,
					isStrong: e.isStrong,
					style: e.style
				}, e.children && e.children, e.comment.author);
			class Le extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							onCreatedClick: s
						} = e,
						n = Z(e, ["comment", "onCreatedClick"]);
					return r.a.createElement(ue, {
						href: Object(m.a)(t.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: n.createdTooltipId,
						onClick: s,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: n.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, Object(x.d)(t.created), We(n.createdTooltipId, Object(b.a)(t.created)))
				}
			}
			const Re = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return r.a.createElement(ge, {
					className: Q.a.metaText
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
			class Fe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = Z(e, ["comment"]);
					return r.a.createElement(o.Fragment, null, t.isAuthorCakeday && r.a.createElement(ie, {
						"aria-label": ke(),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && We(s.cakedayTooltipId, ke()), t.isAdmin && r.a.createElement(ee, {
						desc: Ee(),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && We(s.adminTooltipId, Ee()), t.distinguishType === u.C.ALUMNI_ADMIN && r.a.createElement(ne, {
						"aria-label": je(),
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}, "Δ"), t.distinguishType === u.C.ALUMNI_ADMIN && We(s.adminEmeritusTooltipId, je()), t.isMod && r.a.createElement(ae, {
						desc: we(s.subredditDisplayText),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && We(s.modTooltipId, we(s.subredditDisplayText)), t.isOp && r.a.createElement(me, {
						desc: _e(),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && We(s.opTooltipId, _e()), s.renderContractorBadge && r.a.createElement(pe, {
						desc: Ie(),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && We(s.contractorTooltipId, Ie()), s.renderTopSupporterBadge && r.a.createElement(re, {
						desc: Pe(),
						id: s.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: s.onHideTooltip,
						onClick: s.openPowerupsModal
					}), s.renderTopSupporterBadge && We(s.topSupporterTooltipId, Pe()))
				}
			}
			class Be extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = Z(e, ["comment"]);
					return r.a.createElement(o.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(te, {
						desc: Object(S.a)(t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && We(s.approveTooltipId, Object(S.a)(t)), Object(P.a)(t) && r.a.createElement(ce, {
						desc: Object(S.c)(t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(P.a)(t) && We(s.removeTooltipId, Object(S.c)(t)), Object(P.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement(Ce, {
						onClick: s.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(P.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement(Ce, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), t.isLocked && !s.ignoreLock && r.a.createElement(se, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && r.a.createElement(le, {
						desc: Object(S.e)(t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && We(s.spamTooltipId, Object(S.e)(t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && r.a.createElement(oe, {
						className: Object(p.a)({
							[Q.a.removed]: !!t.bannedBy
						}),
						desc: S.b,
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && We(s.automodTooltipId, S.b), Object(T.a)(t) && r.a.createElement(de, {
						desc: Object(S.d)(t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(T.a)(t) && We(s.reportTooltipId, Object(S.d)(t.numReports)))
				}
			}
			const De = () => r.a.createElement(o.Fragment, null, r.a.createElement(q.c, {
					className: Q.a.metaText
				}), r.a.createElement(he, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				We = (e, t) => r.a.createElement(j.c, {
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
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				u = s.n(p);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = c.a.div("MoreCommentsItemWrapper", u.a), x = c.a.p("MoreComments", u.a), g = c.a.wrapped(x, "MoreCommentsInteractive", u.a), f = Object(i.c)({
				moreCommentsItem: m.B,
				moreCommentsPending: m.C
			}), v = Object(r.b)(f, (e, t) => ({
				moreCommentsClicked: () => e(Object(d.Z)(t.commentsPageKey, t.moreCommentsId))
			})), C = e => {
				let {
					isActive: t,
					moreCommentsClicked: s,
					moreCommentsItem: n,
					moreCommentsPending: r,
					onMoreCommentsItemClick: i,
					count: c
				} = e;
				return o.a.createElement(h, null, r ? o.a.createElement(x, null, b._("loading...", null, {
					hk: "47z89"
				})) : o.a.createElement(l.a.Consumer, null, e => o.a.createElement(g, {
					className: Object(a.a)({
						[u.a.isActive]: t
					}),
					onClick: () => {
						c && i ? (i(), e("load_more_comment_live")()) : s && (s(), (null == n ? void 0 : n.isFromLiveWebSocket) ? e("load_more_comment_live")() : e("load_more_comment")())
					}
				}, b._({
					"*": "{number of more replies hidden} more replies",
					_1: "1 more reply"
				}, [b._plural(n ? n.numComments : c || 0, "number of more replies hidden")], {
					hk: "J0jQW"
				}))))
			};
			t.b = v(C)
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
				return I
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/describeApiError/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				x = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				g = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				C = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(O);
			const E = l.a.wrapped(v.a, "CommentsIcon", y.a),
				k = l.a.wrapped(C.a, "SnooFacepalm", y.a),
				j = l.a.p("EmptyTitle", y.a),
				w = l.a.p("ErrorTitle", y.a),
				_ = l.a.p("EmptyText", y.a),
				I = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(y.a.StateContainer, t)
					}, a.a.createElement(E, null), a.a.createElement(j, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(_, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				P = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(E, null), a.a.createElement(j, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(_, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(E, null), a.a.createElement(j, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), a.a.createElement(u.k, {
						to: Object(h.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				T = Object(c.b)(null, (e, t) => {
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
					}, a.a.createElement(k, null), a.a.createElement(w, null, t ? Object(b.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), a.a.createElement(u.i, {
						onClick: s
					}, n.fbt._("Retry", null, {
						hk: "NOuNi"
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
						className: Object(d.a)(y.a.StateContainer, y.a.ErrorFullPage)
					}, a.a.createElement(T, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					}))
				},
				A = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", y.a),
				M = l.a.div("CommentsPlaceholderContainer", y.a),
				L = l.a.div("CommentPlaceholder", y.a),
				R = l.a.div("Avatar", y.a),
				F = l.a.div("VoteColumn", y.a),
				B = l.a.div("TextColumn", y.a),
				D = l.a.wrapped(f.b, "Upvote", y.a),
				W = l.a.wrapped(g.b, "Downvote", y.a),
				H = () => a.a.createElement("div", {
					className: Object(d.a)(y.a.TopMetaPlaceholder, Object(x.a)({
						isLoading: !0
					}))
				}),
				V = () => a.a.createElement("div", {
					className: Object(d.a)(y.a.CommentBodyPlaceholder, Object(x.a)({
						isLoading: !0
					}))
				}),
				U = e => a.a.createElement(M, null, r()(10, t => a.a.createElement(L, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(R, {
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/constants/comments.ts"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/constants/gold.ts"),
				g = s("./src/reddit/components/Comments/Comment/HighlightEffect/interfaces.ts");
			const f = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: v,
							effectHighlight: {
								type: g.a.Lottie,
								assetUrl: "https://www.redditstatic.com/gold/awards/animations/".concat(e, ".json")
							}
						}
					}
				}],
				v = "ff0000";

			function C(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						n = Math.floor(Math.random() * s.length);
					return s[n] || null
				}(e ? function(e) {
					return e.map(y).filter(e => e !== O)
				}(e) : [])
			}
			const O = {
				glowHexColor: null,
				effectHighlight: null
			};

			function y(e) {
				for (const t of f) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return O
			}
			var E, k, j = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				w = s("./src/reddit/selectors/comments.ts"),
				_ = s("./src/reddit/selectors/communityAwards.ts"),
				I = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				T = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				N = s("./src/reddit/hooks/useTracking.ts"),
				A = s("./src/reddit/models/PostDraft/index.ts"),
				M = s("./src/lib/makeDraftKey/index.ts"),
				L = s("./src/lib/objectSelector/index.ts"),
				R = s("./src/reddit/helpers/trackers/powerups.ts"),
				F = s("./src/reddit/actions/gold/powerups.ts"),
				B = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				D = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				W = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				H = s.n(W),
				V = m.a.wrapped(e => i.a.createElement("button", e, i.a.createElement(D.a, null)), "Component", H.a),
				U = s("./node_modules/lodash/defer.js"),
				G = s.n(U),
				K = s("./src/reddit/actions/tooltip.ts"),
				q = s("./src/reddit/selectors/tooltip.ts"),
				z = s("./src/lib/makeCommentPermalink/index.ts"),
				J = s("./src/reddit/actions/gold/modals.ts"),
				X = s("./src/reddit/actions/modal.ts"),
				Q = s("./src/reddit/actions/reportFlow.ts"),
				Y = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				$ = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ee = s("./src/reddit/selectors/activeModalId.ts"),
				te = s("./src/reddit/selectors/subreddit.ts"),
				se = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ne = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				oe = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				re = s.n(oe);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(E || (E = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(k || (k = {}));
			const ie = (e, t) => {
					const s = re.a[t],
						n = re.a[e];
					return Object(d.a)(s, n)
				},
				ae = e => Object(d.a)(re.a["depth".concat(Math.min(3 * Math.ceil(e.depth / 3), 10))], {
					[re.a.isInOverlay]: e.isInOverlay,
					[re.a.isModModeEnabled]: e.isModModeEnabled
				});
			var ce = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				de = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				le = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				me = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				pe = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ue = s("./src/reddit/components/OverflowMenu/index.tsx"),
				be = s("./src/reddit/components/ReportFlow/index.tsx"),
				he = s("./src/reddit/components/ReportFlow/new.tsx"),
				xe = s("./src/reddit/components/ShareMenu/index.tsx"),
				ge = s("./src/reddit/components/TrackingHelper/index.tsx"),
				fe = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ve = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Ce = s("./src/reddit/helpers/trackers/modTools.ts"),
				Oe = s("./src/reddit/layout/row/Inline/index.tsx"),
				ye = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				ke = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				je = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				we = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				_e = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ie = s("./src/reddit/icons/fonts/Save/index.tsx"),
				Pe = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				Se = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Te = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ne = s.n(Te);
			const Ae = m.a.wrapped(Ee.a, "CommentIcon", Ne.a),
				Me = m.a.wrapped(_e.a, "Report", Ne.a),
				Le = m.a.wrapped(je.a, "IgnoreReport", Ne.a),
				Re = m.a.wrapped(me.a, "ModActionsMenu", Ne.a),
				Fe = m.a.div("OverflowMenuSpacer", Ne.a),
				Be = m.a.wrapped(ue.a, "DropdownRow", Ne.a),
				De = m.a.wrapped(Oe.a, "Flatlist", Ne.a),
				We = m.a.button("Button", Ne.a),
				He = m.a.wrapped(ce.c, "ModToolsFlatlist", Ne.a),
				Ve = m.a.wrapped(fe.a, "ViewReportsDropdown", Ne.a),
				Ue = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ge = e => "Distinguish--Dropdown--".concat(e),
				Ke = e => "".concat(e, "-overflow-menu"),
				qe = e => "View--Reports--".concat(e),
				ze = Object(c.c)({
					currentUser: S.i,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(ee.a)(e) === Ue(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.b)(Ge(s.id))(e)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.A)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.b)(qe(s.id))(e)
					},
					isLoggedIn: S.I,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(P.I)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(P.J)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(P.N)(e, {
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
						return Object(w.J)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(te.y)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(P.bb)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: se.a
				});
			class Je extends i.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object($.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Ce.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Ce.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Ce.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						const e = Object(Y.d)(Y.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Ce.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Ce.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Ce.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Ce.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(he.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: be.b,
						postId: this.props.comment.postId
					}) : i.a.createElement(be.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: be.b,
						postId: this.props.comment.postId
					})
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: n,
						depth: o,
						handleReply: a,
						isAvatarsInCommentsEnabled: c,
						isLoggedIn: l,
						isPendingDeletion: m,
						onDistinguishComment: p,
						onIgnoreReports: u,
						onToggleReportsDropdown: b,
						moderatorPermissions: h,
						modModeEnabled: x,
						postIsArchived: g,
						postIsLocked: f,
						postPermalink: v,
						renderedInOverlay: C,
						sendEvent: O,
						subreddit: y,
						subredditAboutInfo: j,
						toggleDeleteCommentModal: w,
						toggleSendReplies: _,
						trackCommentClick: I
					} = this.props, P = Object(Z.a)(h), S = !!s && s.displayText === e.author, N = !!s && s.isEmployee, A = !(j && j.userIsBanned) && (f || g || P && l || e.isLocked ? P && l : l || c), M = Object(pe.a)(e), L = P && !x && S && !e.bannedBy, R = S && N && !e.bannedBy, F = L || R, B = s && e.isGildable, D = [];
					A && D.push(i.a.createElement(We, {
						disabled: m,
						key: "reply",
						onClick: () => {
							a(), G()(() => I("reply", e.id)())
						}
					}, i.a.createElement(Ae, null), T.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), B && D.push({
						breakpointGroup: k.LoggedInUser,
						icon: i.a.createElement(ke.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => T.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), D.push(i.a.createElement(xe.a, {
						dropdownId: "".concat(e.id, "-comment-share-menu"),
						key: "share",
						permalink: Object(z.a)(v, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: y
					}, i.a.createElement(We, {
						onClick: () => this.sendCommentEventWithName("share")
					}, T.fbt._("share", null, {
						hk: "2oJb1J"
					})))), S || D.push({
						breakpointGroup: k.LoggedInUser,
						icon: i.a.createElement(_e.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => T.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), D.push({
						breakpointGroup: k.LoggedInUser,
						icon: e.isSaved ? i.a.createElement(ye.f, null) : i.a.createElement(Ie.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => T.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => T.fbt._("Save", null, {
							hk: "4lbZXG"
						})
					}), S && D.push({
						breakpointGroup: k.LoggedInUser,
						icon: i.a.createElement(Pe.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => T.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					});
					const W = D.map(e => i.a.isValidElement(e) ? e : i.a.createElement(We, {
							className: ie(e.breakpointGroup, E.HideIfVWSmaller),
							disabled: m,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						H = D.map(e => i.a.isValidElement(e) ? null : i.a.createElement(Be, {
							className: ie(e.breakpointGroup, E.HideIfVWLarger),
							displayText: e.text(),
							iconWrapperClassName: Ne.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: Ne.a.dropdownRowText
						}, e.icon));
					return i.a.createElement(r.Fragment, null, i.a.createElement(De, {
						className: Object(d.a)(ae({
							depth: o,
							isInOverlay: C,
							isModModeEnabled: P && x
						}), t)
					}, W, i.a.createElement(Fe, {
						className: S ? void 0 : ie(k.LoggedInUser, E.HideIfVWLarger)
					}, i.a.createElement(ue.b, {
						className: Ne.a.overflowMenu,
						disabled: m,
						dropdownId: Ke(e.id),
						onClick: () => O(Object(Ce.a)("comment_overflow_menu", e.id))
					}, H, S && i.a.createElement(i.a.Fragment, null, i.a.createElement(Be, {
						displayText: T.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						iconWrapperClassName: Ne.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: Ne.a.dropdownRowText
					}, i.a.createElement(Se.b, null)), i.a.createElement(ve.a, {
						text: T.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: _,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && i.a.createElement(de.a, {
						actionText: T.fbt._("delete", null, {
							hk: "1XDeYp"
						}),
						cancelActionText: T.fbt._("keep", null, {
							hk: "bO09f"
						}),
						headerText: T.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: T.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: n,
						toggleModal: w,
						trackClick: () => {},
						withOverlay: !0
					}), P && i.a.createElement(i.a.Fragment, null, x && i.a.createElement(He, {
						className: ie(k.Moderator, E.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: S
					}), i.a.createElement(Re, {
						className: x ? ie(k.Moderator, E.HideIfVWLarger) : void 0,
						dropdownId: "".concat(e.id, "-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: () => O(Object(Ce.a)("comment_mod_action_menu", e.id))
					}, i.a.createElement(we.a, null), i.a.createElement(ne.a, {
						comment: e,
						tooltipId: "".concat(e.id, "-mod-actions-menu")
					}))), Object(pe.c)(e) && !x && i.a.createElement(ce.b, {
						text: "".concat(M),
						onClick: () => {
							b(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: qe(e.id)
					}, i.a.createElement(Ve, {
						model: e,
						onIgnoreReports: () => {
							u(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: qe(e.id)
					}), e.ignoreReports ? i.a.createElement(Le, null) : i.a.createElement(Me, null)), F && i.a.createElement(ce.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, i.a.createElement(ce.a, null), i.a.createElement(le.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: N,
						isUserMod: P,
						onDistinguishComment: p,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ge(e.id)
					}))), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Xe = Object(a.b)(ze, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.db)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(X.i)(Ue(s.id))), e(Object(K.h)({
								tooltipId: Ke(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.V)({
								commentId: s.id,
								draftKey: Object(M.a)(A.c.edit, s.id),
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
							tooltipId: Ge(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(K.h)({
							tooltipId: qe(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(X.i)(Ue(s.id))),
						toggleSendReplies: () => e(Object(p.hb)(s.id))
					}
				})(Object(ge.c)(Je)),
				Qe = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ye = s.n(Qe);
			var Ze = i.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return i.a.createElement("div", {
						"aria-role": "presentation",
						className: Ye.a.glowHighlightContainer,
						style: {
							boxShadow: "#".concat(t, " 0px 0px 14px")
						}
					})
				}),
				$e = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				et = s.n($e);
			var tt = i.a.memo(e => i.a.createElement("div", {
					"aria-role": "presentation",
					className: et.a.gradientHighlightContainer
				})),
				st = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				nt = s("./src/reddit/components/Comments/Comment/HighlightEffect/LottieEffect/index.tsx"),
				ot = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				rt = s.n(ot);

			function it() {
				return (it = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const at = {
				threshold: [.75, .001]
			};
			var ct = i.a.memo(e => {
					const t = Object(r.useRef)(null),
						[s, n] = Object(r.useState)(!1),
						o = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									intersectionRatio: t
								} = e;
								t >= .75 && n(!1), t <= .001 && n(!0)
							})
						}, []);
					Object(st.a)(t, o, at);
					const a = e.type;
					return i.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(d.a)(rt.a.effectContainer, rt.a[a + "EffectContainer"]),
						ref: t
					}, a === g.a.Lottie && i.a.createElement(nt.a, it({}, e, {
						hidden: s
					})))
				}),
				dt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				lt = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				mt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				pt = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				ut = s("./src/reddit/components/ModModeReports/index.tsx"),
				bt = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ht = s("./src/reddit/components/RichTextJson/index.tsx"),
				xt = s("./src/reddit/components/UserIcon/index.tsx"),
				gt = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ft = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				vt = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				Ct = s("./src/reddit/constants/componentTestIds.ts"),
				Ot = s("./src/reddit/contexts/PageLayer/index.tsx"),
				yt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Et = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				kt = s("./node_modules/raf/index.js"),
				jt = s.n(kt);

			function wt() {
				return (wt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _t = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const It = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Pt = i.a.createContext(!1);
			class St extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || jt()(this.setVisible)
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
						s = _t(e, ["children"]),
						{
							isVisible: n
						} = this.state,
						o = Object.assign(Object.assign({}, It), s);
					return i.a.createElement(Et.a, wt({}, o, {
						onChange: this.handleIntersectionChange
					}), i.a.createElement("div", null, i.a.createElement(Pt.Provider, {
						value: n
					}, t)))
				}
			}
			var Tt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Nt = s("./src/reddit/controls/InternalLink/index.tsx"),
				At = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Mt = s("./src/reddit/models/Subreddit/index.ts"),
				Lt = s("./src/reddit/models/Vote/index.ts"),
				Rt = s("./src/reddit/selectors/gold/powerups.ts"),
				Ft = s("./src/reddit/selectors/poll/index.ts"),
				Bt = s("./src/reddit/selectors/userPrefs.ts"),
				Dt = s("./src/reddit/selectors/moderatingComments.ts"),
				Wt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Ht = s.n(Wt),
				Vt = s("./src/config.ts");

			function Ut() {
				return (Ut = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Gt = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Kt = m.a.wrapped(V, "ExpandButton", Ht.a),
				qt = m.a.wrapped(Xe, "FlatList", Ht.a),
				zt = m.a.wrapped(Tt.b, "ErrorText", Ht.a),
				Jt = m.a.wrapped(gt.a, "VerticalVotes", Ht.a),
				Xt = m.a.wrapped(mt.a, "HorizontalVotes", Ht.a),
				Qt = m.a.div("ActionBar", Ht.a),
				Yt = m.a.wrapped(dt.a, "TopMeta", Ht.a),
				Zt = m.a.div("CommentContentWrapper", Ht.a),
				$t = m.a.div("CommentWrapper", Ht.a),
				es = m.a.div("CommentBody", Ht.a),
				ts = m.a.wrapped(pt.b, "AuthorHovercard", Ht.a),
				ss = Object(Ot.t)(),
				ns = Object(a.b)(() => Object(c.c)({
					comment: (e, t) => Object(w.n)(e, t),
					currentProfileModPermissions: Ot.g,
					depth: (e, t) => Object(w.j)(e, t),
					collapsed: Dt.b,
					collapsedBecauseCrowdControl: Dt.a,
					flair: w.e,
					focused: w.u,
					highlightAnimationDisabled: Bt.c,
					isEditing: w.z,
					isLoggedIn: S.I,
					isPendingDeletion: w.A,
					moderatorPermissions: (e, t) => {
						const s = Object(w.n)(e, t);
						return s ? Object(I.j)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Ft.f,
					isTopSupporter: (e, t) => {
						const s = Object(w.n)(e, t);
						if (!s) return !1;
						const n = Object(Ot.q)(e, t);
						return !!n && Object(Rt.a)(e, {
							subredditId: n.id,
							userId: s.authorId
						})
					},
					modModeEnabled: Ot.P,
					errorMsgs: w.H,
					replyFormOpen: w.K,
					subreddit: Ot.q,
					subredditType: w.M
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: o,
						trackCommentClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(p.nb)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(p.pb)(s)),
						onOpenPowerupsModal: () => e(Object(F.b)()),
						onVoteClick: t => {
							const [n, o] = t === Lt.a.upvoted ? [Object(p.rb)(s), "upvote_comment"] : [Object(p.T)(s), "downvote_comment"];
							r(o, s)(), e(n)
						}
					}
				}),
				os = Object(L.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				rs = ss(ns(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: o,
						collapsed: a,
						collapsedBecauseCrowdControl: c,
						currentProfileModPermissions: l,
						depth: m,
						errorMsgs: u,
						flair: b,
						focused: h,
						hasAwardGradient: x,
						highlightAnimationDisabled: g,
						highlightTreatment: f,
						isActive: v,
						isAvatarsInCommentsEnabled: C,
						isEditing: O,
						isFirstInList: y,
						isHighlighted: E,
						isLoggedIn: k,
						isPendingDeletion: j,
						isTopSupporter: w,
						moderatorPermissions: _,
						modModeEnabled: I,
						onCollapseClick: P,
						onIgnoreReports: S,
						onLineMouseOver: L,
						onVoteClick: F,
						onOpenPowerupsModal: D,
						prediction: W,
						replyFormOpen: H,
						subreddit: V,
						trackCommentClick: U,
						renderedInOverlay: G,
						subredditType: K
					} = e, q = Object(N.a)(), z = n.isDeleted, J = !O && !z && !!u && u.length > 0, X = Object(M.a)(A.c.edit, n.id), Q = Object(M.a)(A.c.replyToComment, n.id), Y = Object(Z.a)(_), $ = n.authorIsContractor && K === Mt.e.EmployeesOnly, ee = n.isLocked, te = Y && I, se = !O && !z && (k || C), [ne, oe] = Object(r.useState)(null), [re, ie] = Object(r.useState)(null);
					Object(r.useEffect)(() => {
						if (!O && !z && (x && oe(i.a.createElement(tt, null)), null !== f)) {
							if (f.glowHexColor) {
								const e = f.glowHexColor;
								oe(i.a.createElement(Ze, {
									hexColor: e
								}))
							}
							if (f.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = f.effectHighlight;
								ie(i.a.createElement(ct, {
									prefersReducedAnimation: g,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [O, z, x, g, f]);
					const ae = Object(r.useContext)(Pt);
					return i.a.createElement($t, {
						className: Object(d.a)("Comment ".concat(n.id), Ht.a.CommentWrapper, {
							[Ht.a.highlightComment]: E,
							[Ht.a.deleted]: z,
							[Ht.a.focused]: h,
							[Ht.a.redesign]: C,
							[Ht.a.topLevel]: !m
						})
					}, ne, re, !O && !z && y && i.a.createElement("div", {
						className: Ht.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: '\n                <img alt="" src="'.concat(Vt.a.assetPath, '/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              ')
						}
					}), a && i.a.createElement(Kt, {
						className: n.id,
						onClick: () => {
							s(), P(), U("collapse", n.id)()
						},
						onMouseOver: () => L(n.id),
						onMouseOut: s
					}), !a && (C ? i.a.createElement(ts, {
						alwaysShowChildren: !0,
						hoverDivClassName: Ht.a.AuthorHoverDiv,
						postOrComment: n,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: G ? bt.c.Lightbox : void 0
					}, i.a.createElement(Nt.a, {
						className: Ht.a.UserIconContainer,
						to: "/user/".concat(n.author, "/")
					}, ae ? i.a.createElement(xt.a, {
						className: Ht.a.UserIcon,
						iconUrl: n.profileImage,
						isNSFW: n.profileOver18 || !1,
						nsfwIconUrl: "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png",
						userName: n.author
					}) : i.a.createElement("div", {
						className: Ht.a.UserIcon
					}), w && i.a.createElement(vt.a, {
						onClick: e => {
							q(Object(R.e)("comment")), D(), e.stopPropagation(), e.preventDefault()
						},
						className: Ht.a.topSupporterIcon,
						title: T.fbt._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						})
					}))) : z ? null : i.a.createElement(Jt, {
						compact: !0,
						downvoteButtonClassName: Ht.a.voteButton,
						downvoteClassName: Ht.a.upDownVote,
						model: n,
						onVoteClick: F,
						upvoteButtonClassName: Ht.a.voteButton,
						upvoteClassName: Ht.a.upDownVote
					})), i.a.createElement(Zt, {
						className: Object(d.a)({
							[Ht.a.isActive]: v,
							[Ht.a.isCollapsed]: a,
							[Ht.a.isLocked]: ee && te,
							[Ht.a.isPendingDeletion]: j,
							[Ht.a.isRemoved]: !!n.bannedBy && te
						})
					}, i.a.createElement(At.a, null, T.fbt._("level {depth}", [T.fbt._param("depth", m + 1)], {
						hk: "2XnyAV"
					})), i.a.createElement(Yt, {
						childrenInfo: t,
						className: Object(d.a)({
							[Ht.a.collapsed]: a
						}),
						collapsed: a,
						collapsedBecauseCrowdControl: c,
						comment: n,
						commentsPageKey: o,
						flair: b,
						isAvatarsInCommentsEnabled: C,
						renderedInOverlay: G,
						renderContractorBadge: $,
						renderTopSupporterBadge: (!C || a) && w
					}), !a && i.a.createElement(r.Fragment, null, O && i.a.createElement(B.a, {
						className: Object(d.a)(Ht.a.EditCommentForm, Ht.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: A.c.edit,
						draftKey: X,
						rtJson: Object(ft.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(p.eb)({
							id: n.id,
							commentsPageKey: o,
							depth: m,
							draftKey: X,
							formData: e
						}),
						submitButtonText: T.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !O && !z && i.a.createElement(es, {
						"data-test-id": Ct.d
					}, W ? i.a.createElement(lt.a, {
						comment: n,
						prediction: W
					}) : i.a.createElement(ht.a, {
						content: Object(ft.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: os(e)
					})), I && Y && Object(pe.c)(n) && i.a.createElement(ut.a, {
						onIgnoreReports: S,
						reportable: n
					}), se && i.a.createElement(Qt, null, C && i.a.createElement(Xt, {
						downvoteButtonClassName: Ht.a.voteButton,
						downvoteClassName: Ht.a.upDownVote,
						model: n,
						onVoteClick: F,
						scoreClassName: Ht.a.score,
						upvoteButtonClassName: Ht.a.voteButton,
						upvoteClassName: Ht.a.upDownVote
					}), i.a.createElement(qt, {
						comment: n,
						commentsPageKey: o,
						depth: m,
						isAvatarsInCommentsEnabled: C,
						collapsedBecauseCrowdControl: c,
						modModeEnabled: I,
						moderatorPermissions: l || _,
						renderedInOverlay: G,
						subreddit: V,
						trackCommentClick: U
					})), J && u.map(e => i.a.createElement(zt, {
						key: e
					}, e)), H && i.a.createElement(B.a, {
						className: Object(d.a)(Ht.a.EditCommentForm, Ht.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: A.c.replyToComment,
						draftKey: Q,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: (e, t) => {
							var {
								validate: s
							} = e, r = Gt(e, ["validate"]);
							return s ? Object(p.sb)({
								commentsPageKey: o,
								draftKey: Q,
								parentCommentDepth: m,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							}) : Object(p.jb)({
								commentsPageKey: o,
								draftKey: Q,
								parentCommentDepth: m,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							})
						},
						submitButtonText: T.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var is = e => i.a.createElement(yt.a.Consumer, null, t => i.a.createElement(rs, Ut({}, e, {
					trackCommentClick: t
				}))),
				as = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				cs = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ds = s("./src/reddit/helpers/path/index.ts"),
				ls = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				ms = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				ps = s.n(ms);
			const {
				fbt: us
			} = s("./node_modules/fbt/lib/FbtPublic.js"), bs = m.a.div("Wrapper", ps.a), hs = m.a.wrapped(ls.a, "ArrowRight", ps.a), xs = m.a.wrapped(as.a, "LinkOrOverlayLink", ps.a), gs = m.a.span("HoverSpan", ps.a), fs = Object(c.c)({
				permalink: (e, t) => Object(w.m)(e, {
					commentId: Object(w.s)(e, t).parentId
				})
			});
			var vs = Object(a.b)(fs)(Object(cs.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return i.a.createElement(bs, {
						className: Object(d.a)({
							[ps.a.isActive]: t
						})
					}, i.a.createElement(xs, {
						isOverlay: !!s,
						to: Object(ds.b)(n)
					}, i.a.createElement(gs, null, us._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", i.a.createElement(hs, null)))
				})),
				Cs = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				Os = s("./node_modules/lodash/times.js"),
				ys = s.n(Os),
				Es = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				ks = s.n(Es);
			const js = m.a.wrapped(e => i.a.createElement("div", e, i.a.createElement("i", {
					className: h.m
				})), "Line", ks.a),
				ws = m.a.div("LineContainer", ks.a),
				_s = m.a.div("ShortLineContainer", ks.a);
			var Is = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: n,
						isAvatarsInCommentsEnabled: o,
						onLineClick: r,
						onLineMouseOver: a,
						onLineMouseOut: c,
						onShortLineClick: l,
						parentNodeIds: m,
						type: p
					} = e;
					return i.a.createElement(ws, null, ys()(s + 1, e => e === s ? p !== u.a.Comment || t ? null : i.a.createElement(_s, {
						key: m[e]
					}, i.a.createElement(js, {
						className: Object(d.a)(m[e], {
							[ks.a.hasGlowBorder]: !!n,
							[ks.a.topLevel]: 0 === s,
							[ks.a.redesign]: o
						}),
						onClick: l,
						onMouseOver: () => a(m[e]),
						onMouseOut: () => c(m[e])
					})) : i.a.createElement(js, {
						className: m[e],
						key: m[e],
						onClick: r(e),
						onMouseOver: () => a(m[e]),
						onMouseOut: () => c(m[e])
					})))
				},
				Ps = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Ss = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				Ts = s.n(Ss);
			const Ns = m.a.div("CommentListNodeWrapper", Ts.a),
				As = e => {
					const t = document.querySelectorAll(".".concat(e));
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(h.f)
				},
				Ms = () => {
					const e = document.querySelectorAll(".".concat(h.f));
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(h.f)
				};
			var Ls = Object(a.b)(() => Object(c.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(Dt.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(w.l)(e, t),
				depth: (e, t) => Object(w.j)(e, t),
				highlightTreatment: (e, t) => {
					let {
						commentLink: s
					} = t, n = null;
					const o = Object(w.l)(e, {
						commentLink: s
					});
					if (o && s.type === u.a.Comment) {
						n = C(o.treatmentTags)
					}
					return n
				},
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isAvatarsInCommentsEnabled: Ps.a,
				isAwarded: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(w.l)(e, {
						commentLink: s
					});
					return !(s.type !== u.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(_.a)(e, t);
						return s && s.coinPrice >= x.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(w.q)(e);
					if (n === j.a.None) return !1;
					if (s.type !== u.a.Comment) return !1;
					const o = s.id,
						r = Object(w.n)(e, {
							commentId: o
						});
					if (!r) return !1;
					const i = Object(S.q)(e),
						a = !!Object(I.i)(e, {
							postId: r.postId
						}),
						c = Object(P.O)(e, {
							postId: r.postId
						});
					if (!c || !c.previousVisits || c.previousVisits.length < 1) return !1;
					const d = n === j.a.Last ? c.previousVisits[c.previousVisits.length - 1] : c.previousVisits[0];
					return (a || i) && r.created > d
				}
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
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: o,
					commentsPageKey: r,
					depth: a,
					highlightTreatment: c,
					isActive: l,
					isAvatarsInCommentsEnabled: m,
					isAwarded: p,
					isFirstInList: h,
					isHidden: x,
					isHighlighted: g,
					onLineClick: f,
					onShortLineClick: v,
					parentNodeIds: C,
					renderedInOverlay: O,
					scrollToAndRemeasure: y
				} = e, E = !!p, k = !(!c || !c.glowHexColor), j = k && a > 0, w = k, _ = i.a.createElement(Ns, {
					className: Object(d.a)(s, {
						[Ts.a.isHidden]: x,
						[Ts.a.glowBorderTopPadding]: j,
						[Ts.a.glowBorderBottomPadding]: w
					}),
					id: o.id,
					style: {
						paddingLeft: a * (b.w + b.v) + (o.type === u.a.Comment ? b.w : 0)
					},
					tabIndex: -1
				}, i.a.createElement(Is, {
					collapsed: n,
					depth: a,
					hasGlowBorder: j,
					isAvatarsInCommentsEnabled: m,
					onLineClick: f,
					onLineMouseOver: As,
					onLineMouseOut: Ms,
					onShortLineClick: v,
					type: o.type,
					parentNodeIds: C
				}), Rs({
					childrenInfo: t,
					clearHovered: Ms,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: As,
					hasAwardGradient: E,
					highlightTreatment: c,
					isActive: l,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: h,
					isHighlighted: g,
					renderedInOverlay: O,
					scrollToAndRemeasure: y
				}));
				return m && o.type === u.a.Comment ? i.a.createElement(St, null, _) : _
			});
			const Rs = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					hasAwardGradient: r,
					highlightTreatment: a,
					isActive: c,
					isAvatarsInCommentsEnabled: d,
					isFirstInList: l,
					isHighlighted: m,
					onLineMouseOver: p,
					renderedInOverlay: b,
					scrollToAndRemeasure: h
				} = e;
				switch (n.type) {
					case u.a.Comment:
						return i.a.createElement(is, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							hasAwardGradient: r,
							highlightTreatment: a,
							isActive: c,
							isAvatarsInCommentsEnabled: d,
							isFirstInList: l,
							isHighlighted: m,
							onLineMouseOver: p,
							renderedInOverlay: b,
							scrollToAndRemeasure: h
						});
					case u.a.MoreComments:
						return i.a.createElement(Cs.b, {
							commentsPageKey: o,
							isActive: c,
							moreCommentsId: n.id
						});
					case u.a.ContinueThread:
						return i.a.createElement(vs, {
							id: n.id,
							isActive: c
						})
				}
			};
			var Fs = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Bs = s("./src/reddit/components/Comments/States/index.tsx"),
				Ds = s("./src/reddit/components/Scroller/Simple.tsx"),
				Ws = s("./src/reddit/constants/elementIds.ts"),
				Hs = s("./src/reddit/featureFlags/index.ts"),
				Vs = s("./src/reddit/helpers/commentList/index.ts"),
				Us = s("./src/reddit/selectors/realtimeComments.ts"),
				Gs = s("./src/telemetry/index.ts"),
				Ks = s("./src/lib/LRUCache/index.ts"),
				qs = s("./src/reddit/actions/comment/websocket/index.ts"),
				zs = s("./src/reddit/components/Comments/index.m.less"),
				Js = s.n(zs);
			const Xs = b.f + 10,
				Qs = 65,
				Ys = m.a.wrapped(Ds.b, "Scroller", Js.a),
				Zs = Object(c.c)({
					allCollapsed: w.a,
					commentLinks: w.k,
					commentThreadLinkSet: w.p,
					isRealtimeCommentsExperimentEnabled: Us.a,
					liveCommentsWebsocket: P.M,
					measureScrollFPS: Hs.d.measureScrollFPS,
					moreComments: w.b,
					postPermalink: P.N
				}),
				$s = Object(a.b)(Zs, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(p.L)(t)),
					onCommentLeftViewport: (t, s) => e(Object(p.Q)(t, s)),
					onLiveCommentsEnd: (t, s) => e(Object(qs.b)(t, s)),
					onLiveCommentsSubscribe: (s, n, o) => e(Object(qs.a)(s, n, o, t.subredditId))
				})),
				en = new Ks.a(500),
				tn = new Ks.a(500),
				sn = (e, t) => {
					const s = "entered-".concat(e);
					let n = en.get(s);
					return void 0 === n && (n = () => {
						t.onCommentEnteredViewport(e)
					}, en.set(s, n)), n
				},
				nn = (e, t) => {
					const s = "left-".concat(e);
					let n = tn.get(s);
					return void 0 === n && (n = s => {
						t.onCommentLeftViewport(e, s)
					}, tn.set(s, n)), n
				};
			class on extends i.a.Component {
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
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.parentNodeIdsMap = {}, Fs.c(), this.childrenInfoMap = {}
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
						onLiveCommentsSubscribe: c,
						postId: d
					} = this.props;
					this.timerId && Gs.c.cancel(this.timerId), t.length && (this.timerId = Gs.c.start()), r && i && c && !e && (c(s, i, d), this._subscribedPostId = d, this._subscribedLiveCommentsWebsocket = i), this.findHiddenNodes(t, n, o, a)
				}
				componentDidMount() {
					this.timerId && Object(Gs.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Gs.c.end(this.timerId)
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
					this.timerId && Gs.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Gs.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Gs.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Gs.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					const {
						commentId: e,
						isRealtimeCommentsExperimentEnabled: t,
						onLiveCommentsEnd: s
					} = this.props;
					this.timerId && Gs.c.cancel(this.timerId), t && this._subscribedPostId && this._subscribedLiveCommentsWebsocket && s && !e && s(this._subscribedLiveCommentsWebsocket, this._subscribedPostId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					Fs.c();
					for (let c = 0; c < e.length; c++) {
						const d = e[c];
						o && (s[d.id].depth > r ? (Fs.a(d.id), i += Object(Vs.d)(d, n), d.type === u.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[o] = {
							numChildren: i,
							hasContinueThread: a
						}, o = null, r = 1 / 0, i = 0, a = !1)), !o && t[d.id] && (o = d.id, r = s[d.id].depth)
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
					} = this.props, a = sn(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					}), c = nn(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					});
					return {
						estHeight: Fs.b(e.id) ? 0 : Qs,
						id: e.id,
						trackOnEnteredViewport: a,
						trackOnExitedViewport: c,
						render: n => {
							let {
								placeholderRecommended: o,
								height: a,
								width: c,
								scrollToAndRemeasure: d
							} = n;
							return o ? i.a.createElement("div", {
								style: {
									height: a,
									backgroundColor: "#fff"
								}
							}) : i.a.createElement(Ls, {
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								isFirstInList: 0 === t,
								isHidden: Fs.b(e.id),
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
					return i.a.createElement(Ys, {
						className: Object(d.a)(Js.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(Ws.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: Xs,
						trackingName: r
					}, a)
				}
				renderEmptyState() {
					return this.props.commentId ? i.a.createElement(Bs.g, {
						link: this.props.postPermalink
					}) : i.a.createElement(Bs.c, null)
				}
			}
			t.a = $s(on)
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/chatPost.ts"),
				m = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				p = s.n(m);
			const u = .1,
				b = Object(c.c)({
					isChatPost: l.d
				}),
				h = Object(a.b)(b);
			class x extends i.a.Component {
				constructor(e) {
					super(e), this.onVisibilityChange = e => {
						e.isIntersecting && e.intersectionRatio >= u ? this.state.visible || this.setState({
							visible: !0
						}) : this.state.visible && this.setState({
							visible: !1
						})
					}, this.state = {
						visible: !1
					}
				}
				render() {
					const {
						visible: e
					} = this.state, {
						isChatPost: t
					} = this.props, s = t && e;
					return t ? i.a.createElement(n.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, i.a.createElement("div", {
						className: Object(d.a)(p.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(d.a)(p.a.Animate, p.a.top, {
							[p.a.play]: s
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
						className: Object(d.a)(p.a.Animate, p.a.bottom, {
							[p.a.play]: s
						})
					}, i.a.createElement("span", {
						className: p.a.bigCircle
					}), i.a.createElement("span", {
						className: p.a.midCircle
					}), i.a.createElement("span", {
						className: p.a.smallCircle
					})))) : null
				}
			}
			t.a = h(x)
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
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				d = s.n(c);
			const l = i.a.div("LoaderWrapper", d.a),
				m = i.a.div("Icon", d.a),
				p = i.a.div("Byline", d.a),
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
				text: "FHCV02u6Cp2zYL0fhQPsO",
				commentsText: "_25BV1fTi10_HqCnD195T85"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/CountAnimation/index.tsx"),
				u = s("./src/reddit/components/CountAnimation/config.ts"),
				b = s("./src/reddit/components/CountAnimation/helpers.ts"),
				h = s("./src/reddit/constants/componentTestIds.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				g = s("./src/reddit/helpers/path/index.ts"),
				f = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				v = s("./src/reddit/selectors/chatPost.ts"),
				C = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				O = s("./src/reddit/selectors/experiments/postSeo.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/CommentsLink/index.m.less"),
				j = s.n(k);
			const w = Object(i.b)(() => Object(c.c)({
					isChatPost: v.d,
					isPostSEOEligible: O.d,
					postPermalink: y.N,
					shouldOpenPostInNewTab: E.X,
					totalDiscount: C.a
				})),
				{
					commentCount: {
						inititalDelayRange: {
							lower: _,
							upper: I
						},
						subsequentRecurringDelayRange: {
							lower: P,
							upper: S
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: T,
							upper: N
						}
					}
				} = u.a,
				A = () => Object(b.h)(_, I),
				M = () => Object(b.h)(P, S),
				L = e => {
					let t, {
						type: s,
						numComments: i,
						isChatPost: a,
						modModeEnabled: c,
						hasModPostPerms: l,
						shouldShowIcon: u,
						shouldShowText: h,
						text: g,
						totalDiscount: v = 0
					} = e;
					t = g || (s === x.g.Compact || a || c && l ? Object(m.b)(i) : n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(i, "number", Object(m.b)(i))], {
						hk: "1QeOde"
					}));
					const C = Object(o.useCallback)(() => Object(b.h)(Math.ceil(v * T), Math.ceil(v * N)), [v]);
					return r.a.createElement(o.Fragment, null, u && r.a.createElement(f.a, {
						className: j.a.commentIcon,
						role: "presentation"
					}), h && r.a.createElement("span", {
						className: j.a.text
					}, v > 0 ? r.a.createElement(p.a, {
						initialDisplayCount: i - v,
						countToUpperBound: i,
						initialDelay: A,
						subsequentRecurringDelay: M,
						incrementDelta: C
					}) : t), h && v > 0 && r.a.createElement("span", {
						className: Object(d.a)(j.a.text, j.a.commentsText)
					}, n.fbt._("comments", null, {
						hk: "ZQ8MY"
					})))
				};
			t.a = w(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPost: n,
					isCommentPermalink: o,
					isCommentsPage: i,
					isOverlay: c,
					isPostSEOEligible: m,
					modModeEnabled: p,
					numComments: u,
					onClick: b,
					postPermalink: x,
					shouldOpenPostInNewTab: f,
					shouldShowIcon: v = !0,
					shouldShowText: C = !0,
					text: O,
					type: y,
					totalDiscount: E
				} = e, k = i && !o && !m, w = o && !c, _ = r.a.createElement(L, {
					type: y,
					numComments: u,
					isChatPost: n,
					totalDiscount: E,
					modModeEnabled: p,
					hasModPostPerms: s,
					shouldShowIcon: v,
					shouldShowText: C,
					text: O
				});
				return k ? r.a.createElement("div", {
					className: Object(d.a)(j.a.commentsLink, j.a.defaultCursorWrapper, t),
					onClick: b
				}, _) : r.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": h.a,
					className: Object(d.a)(j.a.commentsLink, j.a.link, t),
					target: f ? "_blank" : void 0,
					to: w ? Object(g.b)(x) : Object(l.a)(x, !0),
					onClick: b
				}, _)
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
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				b = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				h = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				x = s("./src/reddit/components/IdCard/async.tsx"),
				g = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				f = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				C = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				y = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				E = s("./src/reddit/featureFlags/component.tsx"),
				k = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				_ = s("./src/reddit/selectors/experiments/postSeo.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				T = s.n(S);
			const N = Object(E.a)("spPoints", b.a),
				A = Object(E.a)("spLeaderboard", h.a),
				M = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki~reddit-components-ProfileIdCard"), s.e("reddit-components-ProfileIdCard")]).then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
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
				L = Object(d.c)({
					isLoggedIn: P.I,
					postSEOV2IdCardVariant: _.i,
					showPowerups: w.a,
					widgets: Object(p.a)(I.t)
				}),
				R = Object(c.b)(L);
			class F extends a.a.Component {
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
						subredditName: n,
						post: o,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, c = !Object(_.c)(i) && !Object(_.f)(i);
					return a.a.createElement(C.a, {
						adComponentOnFakeOverlay: r,
						adComponent: c ? a.a.createElement(f.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: k.a.BOTTOM,
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
						showPowerups: i,
						subredditId: c,
						subredditName: d,
						widgets: p
					} = this.props;
					let b = 0;
					const h = Object(_.c)(r) || Object(_.f)(r),
						C = a.a.createElement(f.a, {
							postId: o.id,
							isOverlay: n,
							listingName: d,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: b++,
							position: k.a.FIRST,
							refreshKey: o.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(T.a.outerWrapper, e)
					}, Object(j.j)(o) ? a.a.createElement(M, {
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
						cardClassName: T.a.card,
						subredditId: c
					}), a.a.createElement(N, {
						className: T.a.card,
						subredditId: c,
						uniqueId: o.id
					}), a.a.createElement(A, {
						className: T.a.card,
						subredditId: c,
						uniqueId: o.id
					}), i && a.a.createElement(g.a, {
						subredditId: c
					}), C, s && p.map((e, t) => a.a.createElement(v.a, {
						key: "widgetSpacer".concat(t)
					}, a.a.createElement(y.a, {
						subredditName: d,
						widget: e
					}))), o.isSponsored && a.a.createElement(v.a, null, a.a.createElement(O.a, null)), this.renderFooter(b++))
				}
			}
			t.a = R(F)
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
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/models/Subreddit/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				b = s("./src/reddit/selectors/experiments/postSeo.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				g = s.n(x);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = "500px", C = 3, O = Object(i.c)({
				hasDismissedTruncation: u.b,
				isGQLLoggedIn: h.H,
				isLoggedIn: h.I,
				isPostSEOEligible: b.d,
				postSEOV2TruncatedVariant: b.j
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
						isCommentsListTruncated: c,
						isGQLLoggedIn: u,
						isLoggedIn: b,
						isOverlay: h,
						numberOfComments: x,
						onClick: O,
						subredditOrProfile: y
					} = this.props, E = !(!y || Object(m.g)(y)), k = c && E && (x >= C && !h || !r) && (!u && !b), j = k && !e, w = k ? g.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: O,
						ref: i
					}, o.a.createElement("div", {
						className: Object(a.a)(g.a.ContentWrapper, s, w),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: k ? v : "unset"
						}
					}, t), j && o.a.createElement(l.i, {
						className: g.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, f._("View Entire Discussion ({number of comments} Comments)", [f._param("number of comments", Object(d.b)(x))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(c.a)(y(E))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const p = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(d.a, null, r.a.createElement(a.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(a.o, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(a.f, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: m.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.t, {
				className: m.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
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
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				b = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(b);

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
						className: Object(d.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === o,
							[h.a.caretOnLeft]: "left" === o,
							[h.a.caretOnRight]: "right" === o,
							[h.a.caretOnBottom]: "bottom" === o
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
				y = Object(c.a)(C, [n.a.Click, n.a.Keydown]),
				E = Object(i.b)(O);
			class k extends r.a.Component {
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
			t.a = E(k)
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
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
				k = O.a.div("PostMetaWrapper", C.a),
				j = O.a.wrapped(u.c, "PostTitle", C.a),
				w = O.a.div("FlatList", C.a),
				_ = O.a.div("FlatItem", C.a),
				I = O.a.span("FlatListDotSpacer", C.a),
				P = O.a.wrapped(E, "LinkContainer", C.a),
				S = O.a.div("Content", C.a),
				T = O.a.div("ThumbnailContainer", C.a),
				N = Object(c.c)({
					isCurrentUserProfilePost: g.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Bb.TOPIC),
					post: g.O,
					shouldOpenPostInNewTab: f.X,
					subreddit: g.bb
				}),
				A = Object(i.b)(N);
			t.a = A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: i,
					subreddit: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: "".concat("CrosspostBox", "--").concat(o.isListing)
					},
					d = t;
				return i && !i.media ? r.a.createElement(P, {
					className: d
				}, r.a.createElement(S, null, r.a.createElement(k, null, r.a.createElement(p.a, c)), M(i), i.source && r.a.createElement(b.a, {
					post: i
				}), R(e)), B(e)) : r.a.createElement(E, {
					className: d
				}, r.a.createElement(k, null, r.a.createElement(p.a, c)), M(i), L(e), R(e))
			});
			const M = e => r.a.createElement(j, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				L = e => {
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
				R = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(w, null, r.a.createElement(_, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(I, null), r.a.createElement(_, null, F(e)))
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
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				B = e => r.a.createElement(T, null, r.a.createElement(h.a, {
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
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const b = a.a.div("DistinguishWrapper", u.a),
				h = a.a.wrapped(m.a, "Inline", u.a),
				x = a.a.wrapped(d.a, "RadioOff", u.a),
				g = a.a.wrapped(l.a, "RadioOn", u.a),
				f = e => o.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(g, null) : o.a.createElement(x, null), e.text),
				v = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: c,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return o.a.createElement(b, {
						className: t,
						style: s
					}, o.a.createElement(f, {
						onClick: () => p(r.C.NONE, null),
						selected: !d && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), c && o.a.createElement(f, {
						onClick: () => p(r.C.MODERATOR, null),
						selected: d && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && c && o.a.createElement(f, {
						onClick: () => p(r.C.MODERATOR, !0),
						selected: d && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(f, {
						onClick: () => p(r.C.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && c && m && o.a.createElement(f, {
						onClick: () => p(r.C.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var C = Object(c.a)(v);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: c,
					isTopLevelComment: d,
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
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? m(!c && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? m("admin_distinguish") : a && e !== r.C.MODERATOR ? m("undistinguish") : s && e !== r.C.ADMIN && m("admin_undistinguish"), c && !t && m("unsticky")
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
			t.a = Object(o.a)("spSpecialMemberships", r)
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
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const a = n && n.eventInfo,
					p = Object(l.a)(n),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: n
				}), !p && h && o.a.createElement(d.a, {
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

			function c(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", u.a),
				x = b.a.span("PostEventPastText", u.a),
				g = b.a.span("PostEventNowText", u.a),
				f = b.a.span("Container", u.a),
				v = b.a.wrapped(l.a, "CalendarIcon", u.a),
				C = b.a.wrapped(m.a, "LiveIcon", u.a),
				O = b.a.div("LoadingState", u.a);
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
					let u, b;
					if (this.state.mounted || p === r.a.Live) u = function(e, t, s) {
						const n = Object(r.e)(e, t),
							o = new Date(e * a.Fb);
						let d;
						if (n === r.a.Live || s) return i.fbt._("Now", null, {
							hk: "Prpcg"
						});
						n === r.a.Future ? d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? c(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === r.a.Past && (d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(o));
						const l = function(e) {
							return e.toLocaleTimeString(void 0, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(o);
						return "".concat(d, " @ ").concat(l)
					}(m, n, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						u = o.a.createElement(O, {
							className: e
						})
					}
					if (l) b = o.a.createElement(g, null, o.a.createElement(C, null), u);
					else if (p === r.a.Future) b = o.a.createElement(h, null, o.a.createElement(v, null), u);
					else {
						if (p !== r.a.Past) return null;
						b = o.a.createElement(x, null, o.a.createElement(v, null), u)
					}
					return o.a.createElement(f, {
						className: e
					}, b)
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
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx"),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				f = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				v = s("./src/reddit/icons/fonts/Link/index.tsx"),
				C = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				y = s("./src/reddit/icons/fonts/Text/index.tsx"),
				E = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				k = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				j = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/components/ExpandoButton/index.m.less"),
				_ = s.n(w);
			const I = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.r)({
						postId: t.post.id
					}))
				})),
				P = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(_.a.icon, _.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: n
					});
					if (s.pollData) return r.a.createElement(k.a, {
						className: n
					});
					switch (e) {
						case j.o.GIFVIDEO:
							return r.a.createElement(f.a, {
								className: n
							});
						case j.o.IMAGE:
							return r.a.createElement(O.a, {
								className: n
							});
						case j.o.TEXT:
						case j.o.RTJSON:
							return r.a.createElement(y.a, {
								className: n
							});
						case j.o.VIDEO:
							return r.a.createElement(g.a, {
								className: n
							});
						case j.o.GALLERY:
							return r.a.createElement(E.a, {
								className: n
							});
						case j.o.EMBED:
						default:
							return r.a.createElement(v.a, {
								className: n
							})
					}
				};
			t.a = I(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: i,
					post: l,
					toggle: u,
					useMediaIcons: g
				} = e, f = s || l, v = o && !!s;
				return f.media && !(("rtjson" === f.media.type || "text" === f.media.type) && !Object(p.a)(f)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": i,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, _.a.outer),
					"data-click-id": i ? "expando_close" : "expando_open",
					onClick: u
				}, i ? r.a.createElement(b.a, {
					className: _.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, P(f.media && f.media.type, v, l), r.a.createElement(h.a, {
					className: Object(c.a)(_.a.icon, _.a.showOnHover)
				})) : r.a.createElement(h.a, {
					className: _.a.icon
				})) : f.source && f.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					href: f.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(C.a, {
					className: Object(c.a)(_.a.icon, _.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(f.permalink),
					rel: "nofollow"
				}, r.a.createElement(x.a, {
					className: _.a.icon
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
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = s.n(c),
				l = s("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				p = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				u = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
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
						threshold: b
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
				c = s("./src/reddit/components/Flatlist/index.m.less"),
				d = s.n(c);

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
					noBreakpoints: c
				} = e, p = m(e, ["flatlistItem", "isLoggedIn", "isUserOp", "noBreakpoints"]);
				return o.a.createElement("div", {
					"data-ignore-click": !!p.searchIgnoreClick
				}, o.a.createElement(a.a, l({}, p, {
					className: c ? d.a.responsiveRow : Object(r.a)(d.a.responsiveRow, Object(i.b)({
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: n
					}))
				})))
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
				c = s.n(a),
				d = s("./src/reddit/components/Flatlist/constants.ts");
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
					[d.a.EditFlair]: o.Editing,
					[d.a.EditPost]: o.Editing,
					[d.a.Gild]: o.Awarding,
					[d.a.Hide]: o.First,
					[d.a.PostOverflowMenu]: o.First,
					[d.a.Report]: o.First,
					[d.a.Save]: o.First,
					[d.a.Share]: o.Second
				},
				m = e => {
					return (e => {
						const t = c.a[e.type],
							s = c.a[e.group],
							n = c.a[e.groupVariant];
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
				return xe
			})), s.d(t, "a", (function() {
				return ge
			})), s.d(t, "d", (function() {
				return ye
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/timezone/index.ts"),
				p = s("./src/reddit/actions/gold/modals.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/postCreation/editing.ts"),
				x = s("./src/reddit/actions/postFlair.ts"),
				g = s("./src/reddit/actions/reportFlow.ts"),
				f = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				v = s("./src/reddit/components/CommentsLink/index.tsx"),
				C = s("./src/reddit/constants/colors.ts"),
				O = s("./src/reddit/components/ContentTooltip/index.tsx"),
				y = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				E = s.n(y);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class j extends r.a.Component {
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
					}, k._("New", null, {
						hk: "1XUPF"
					})), r.a.createElement("div", {
						className: E.a.text
					}, k._("Try giving a new Appreciation Award", null, {
						hk: "1V7ZWF"
					}))))
				}
			}
			var w = j,
				_ = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				I = s("./src/reddit/components/ModModeReports/helpers.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				S = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				T = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				M = s("./src/reddit/components/ShareMenu/index.tsx"),
				L = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				F = s("./src/reddit/constants/postLayout.ts"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				W = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/trackers/modTools.ts"),
				K = s("./src/reddit/helpers/trackers/post.ts"),
				q = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				z = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				J = s("./src/reddit/icons/fonts/Report/index.tsx"),
				X = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Q = s("./src/reddit/models/Media/index.ts"),
				Y = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				Z = s("./src/reddit/models/PostCreationForm/index.ts"),
				$ = s("./src/reddit/models/User/index.ts"),
				ee = s("./src/reddit/components/Flatlist/constants.ts"),
				te = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				se = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ne = s("./src/reddit/actions/postCollection/index.ts"),
				oe = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				re = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ie = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				ae = s("./src/reddit/selectors/activeModalId.ts"),
				ce = s("./src/reddit/components/Flatlist/index.m.less"),
				de = s.n(ce);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var me = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			let pe, ue;
			const be = l.a.button("ShareButton", de.a),
				he = l.a.wrapped(M.a, "ShareMenu", de.a),
				xe = Object(d.a)(e => {
					var {
						className: t
					} = e, s = me(e, ["className"]);
					return r.a.createElement(z.a, le({}, s, {
						className: Object(c.a)(de.a.modActionsIcon, t),
						style: {
							color: Object(W.a)(Object(D.a)(s), Y.a.actionIcon, Y.b.actionIcon)
						}
					}))
				}),
				ge = e => r.a.createElement("div", le({}, e, {
					className: Object(c.a)(de.a.flatlistSeparator, e.className)
				})),
				fe = Object(B.t)({
					currentProfileName: B.h,
					isCommentPermalink: B.v,
					isCommentsPage: B.w,
					isProfilePostListing: B.I,
					pageLayer: e => e
				}),
				ve = Object(a.c)({
					activeModalId: ae.a,
					layout: B.N,
					userIsOp: H.kb,
					subreddit: B.q
				}),
				Ce = Object(i.b)(ve, (e, t) => {
					let {
						post: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ne.a)(t, s)),
						onToggleModal: t => e(Object(u.i)(t)),
						onToggleSave: () => e(Object(b.L)(n.postId)),
						onHide: t => e(Object(b.P)(n.postId, !n.hidden, o, !0)),
						onReportClick: () => e(Object(g.j)(n.postId, o)),
						onEdit: () => {
							const t = !o && !r;
							e(Object(h.a)(n.postId, t))
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
							pe && ue || ([pe, ue] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(u.i)(Object(Z.r)(n.postId, o, Z.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							ue && e(ue(n.id, t))
						}
					}
				});
			class Oe extends r.a.Component {
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
						} = this.props, s = Object(Z.s)(t.id, e);
						this.props.onToggleModal(s)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = (e, t) => {
						const {
							hostPostId: s,
							isOverlay: n,
							listingKey: o,
							post: r,
							sendEvent: i
						} = this.props;
						i(Object(K.f)(r.id, e, n ? "post_detail" : "post", o, s, void 0, null == t ? void 0 : t.referralId))
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
						hasModFullPerms: d,
						hasModPostPerms: l,
						isCommentPermalink: p,
						isCommentsPage: u,
						isLargePost: b,
						isOverlay: h,
						isProfilePostListing: x,
						isSticky: g,
						layout: C,
						modModeEnabled: O,
						onFlairChanged: y,
						onIgnoreReports: E,
						onOpenReportsDropdown: k,
						pageLayer: j,
						post: M,
						sendEvent: L,
						showEditFlair: B,
						showEditPost: D,
						subreddit: W,
						toggleEditStartTimeModal: H,
						tooltipType: U,
						userIsOp: z,
						searchIgnoreClick: Y,
						isActionBarAnimationEnabled: ne,
						isForceSelected: ie
					} = this.props, ae = !!i && Object($.e)(i) === M.author, ce = Object(se.a)("View--Reports", M.id, U), le = Object(se.a)("View--GiveAward", M.id, U), me = Object(I.c)(M), ue = ye("-mod-actions-menu", M.id, h, g), ge = Object(I.a)(M), fe = M.postId, ve = C === F.g.Large, Ce = !u && ve || l && O, Oe = !(h || u || p), Ee = i && M.isGildable, ke = M.media && M.media.type === Q.o.LIVEVIDEO;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(de.a.flatlistContainer, s)
					}, r.a.createElement(v.a, {
						className: de.a.commentsLink,
						hasModPostPerms: l,
						isCommentsPage: u,
						isCommentPermalink: p,
						isOverlay: h,
						postId: M.id,
						modModeEnabled: O,
						numComments: M.numComments,
						isActionBarAnimationEnabled: ne,
						isForceSelected: ie
					}), Ee && r.a.createElement(r.a.Fragment, null, r.a.createElement(V.a, {
						displayText: n.fbt._("Give Award", null, {
							hk: "NIFUn"
						}),
						flatlistItem: ee.a.Gild,
						isLoggedIn: !!i,
						isUserOp: z,
						onClick: this.handleGild,
						searchIgnoreClick: Y,
						skipRoleAttr: !0
					}, r.a.createElement(N.a, {
						id: le
					})), r.a.createElement(w, {
						postOrComment: M,
						tooltipId: le
					})), r.a.createElement(he, {
						className: Object(te.b)({
							flatlistItem: ee.a.Share,
							isLoggedIn: !!i,
							isUserOp: z
						}),
						dropdownId: ye("-share-menu", M.id, h, g),
						permalink: M.permalink,
						post: M,
						sendEventWithName: this.sendEventWithName,
						subreddit: W
					}, r.a.createElement(be, {
						"data-click-id": "share"
					}, r.a.createElement(X.a, {
						className: de.a.shareIcon
					}), r.a.createElement("span", {
						className: de.a.shareText
					}, n.fbt._("share", null, {
						hk: "1eAfZg"
					})))), D && !Ce && r.a.createElement(V.a, {
						displayText: n.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						flatlistItem: ee.a.EditPost,
						isLoggedIn: !!i,
						isUserOp: z,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(N.c, null)), (!l || !O) && r.a.createElement(V.a, {
						displayText: M.saved ? n.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : n.fbt._("save", null, {
							hk: "3NOMst"
						}),
						flatlistItem: ee.a.Save,
						isLoggedIn: !!i,
						isUserOp: z,
						onClick: this.onSaveClick,
						searchIgnoreClick: Y,
						skipRoleAttr: !0
					}, M.saved ? r.a.createElement(N.f, null) : r.a.createElement(N.e, null)), !M.isSponsored && !Ce && r.a.createElement(V.a, {
						displayText: M.hidden ? n.fbt._("unhide", null, {
							hk: "151XLs"
						}) : n.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						flatlistItem: ee.a.Hide,
						isLoggedIn: !!i,
						isUserOp: z,
						onClick: this.onHideClick,
						searchIgnoreClick: Y,
						skipRoleAttr: !0
					}, r.a.createElement(N.b, null)), !ae && !M.isSponsored && !Ce && r.a.createElement(V.a, {
						displayText: n.fbt._("report", null, {
							hk: "1phfns"
						}),
						flatlistItem: ee.a.Report,
						isLoggedIn: !!i,
						isUserOp: z,
						onClick: this.onReportClick,
						searchIgnoreClick: Y,
						skipRoleAttr: !0
					}, r.a.createElement(N.d, null)), r.a.createElement(P.a, {
						isOverlay: h,
						layout: C,
						modModeEnabled: O,
						post: M,
						sendEvent: L
					}), l && r.a.createElement(_.a, {
						dropdownId: ue,
						onClick: () => L(Object(K.f)(M.id, "post_mod_action_menu"))
					}, r.a.createElement(xe, null), r.a.createElement(T.a, {
						canEditFlair: a && !!B,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isOverlay: !!h,
						isPostAuthor: ae,
						modModeEnabled: O,
						post: M,
						tooltipId: ue
					})), l && me && !O && r.a.createElement(A.c, {
						text: "".concat(ge),
						onClick: () => {
							k(ce), L(Object(K.f)(M.id, "post_report_menu"))
						},
						id: ce
					}, r.a.createElement(R.a, {
						model: M,
						onIgnoreReports: () => {
							E(), L(Object(G.j)(M.ignoreReports ? "restore_reports" : "ignore_reports", M.id))
						},
						tooltipId: ce
					}), M.ignoreReports ? r.a.createElement(q.a, null) : r.a.createElement(J.a, null)), (i || !M.isSponsored) && r.a.createElement(N.g, {
						currentProfileName: o,
						dropdownId: ye("-overflow-menu", M.id, h, g),
						isCommentsPage: u,
						isFixed: g,
						isOverlay: !!h,
						isProfilePostListing: x,
						layout: C,
						modModeWithPost: O && l,
						pageLayer: j,
						permalink: M.permalink,
						postId: fe,
						sendEvent: L,
						showEditPost: !!D,
						showEditFlair: !!B,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: H,
						toggleEditStartTimeModal: H
					}), e === Object(Z.s)(M.id, h) && r.a.createElement(oe.a, {
						subredditId: M.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: M.id,
						onSelectCollection: this.addPostToCollection,
						titleText: n.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: h
					}), e === Object(Z.r)(M.id, h, Z.j.POST_OVERFLOW_MENU) && pe && r.a.createElement(pe, {
						onChange: t,
						onClose: H,
						schedule: Object(m.c)(M),
						shouldShowDeleteButton: !1
					}), e === Object(Z.t)(M.id, h) && r.a.createElement(re.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: M.belongsTo.id
					}), e === Object(S.b)(M.id, h) && r.a.createElement(S.a, {
						flairs: M.flair,
						subredditId: M.belongsTo.id,
						modalId: Object(S.b)(M.id, h),
						onFlairChanged: y
					}), r.a.createElement("div", {
						className: de.a.flexSpacer
					})), Oe && !ke && r.a.createElement(f.a, {
						className: Object(c.a)(de.a.liveDiscussionWrapper, {
							[de.a.large]: b
						}),
						isMod: l,
						postId: M.postId
					}))
				}
			}
			const ye = (e, t, s, n) => {
					let o = t;
					return s && (o += "-overlay"), n && (o += "-sticky"), o += e
				},
				Ee = fe(Ce(Object(L.c)(Oe)));
			t.c = r.a.memo((function(e) {
				const t = Object(ie.b)();
				return r.a.createElement(Ee, le({}, e, {
					searchIgnoreClick: t
				}))
			}))
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
				c = s.n(a);
			t.a = i.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
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
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				p = s("./src/reddit/models/Theme/index.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(b);
			const x = c.a.wrapped(m.a, "Planet", h.a),
				g = c.a.div("SubredditIcon", h.a),
				f = c.a.div("PositionedImage", h.a),
				v = c.a.div("HeaderContent", h.a),
				C = c.a.div("HeaderContainer", h.a),
				O = c.a.span("HeaderText", h.a),
				y = c.a.wrapped(r.a, "HeaderUrl", h.a),
				E = c.a.span("Container", h.a),
				k = Object(a.a)(e => {
					const t = Object(p.e)(e.headerText, e.prefixedHeaderText, Object(u.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(u.a)(e).banner.positionedImageAlignment,
						r = Object(u.a)(e).banner.positionedImage,
						a = Object(u.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (n) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const m = !!r && !!a && "left" === n,
						b = Object(p.g)(Object(u.a)(e).banner.backgroundColor, Object(u.a)(e).banner.backgroundImage, Object(u.a)(e).banner.backgroundImagePosition),
						k = parseInt(Object(u.a)(e).banner.iconDimensions.customSize, 10),
						j = "".concat(4 + k, "px");
					return o.a.createElement(E, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(u.a)(e).banner.height, "px")
						}
					}, o.a.createElement(y, {
						className: e.className,
						to: e.url
					}, o.a.createElement(C, {
						className: Object(i.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(u.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || d.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && o.a.createElement(v, {
						className: Object(i.a)({
							[h.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(u.a)(e).banner.showCommunityIcon && (s ? o.a.createElement(g, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					}) : o.a.createElement(x, {
						style: {
							padding: "".concat(Object(u.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					})), o.a.createElement(O, {
						style: {
							paddingTop: 32 === k ? "4px" : "14px"
						}
					}, t)), o.a.createElement(f, {
						className: Object(i.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!r,
							[h.a.hoverPositionedImage]: !!r && !!a
						}),
						style: Object.assign(Object.assign({}, c), {
							height: "".concat(Object(u.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = k
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
				return c
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(r);
			const a = n.a.wrapped(o.a, "UserActionItem", i.a),
				c = e => {
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				c = s("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", a.a),
				l = c.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: i,
					title: c
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
				}), n ? o.a.createElement(d, null, n) : o.a.createElement(d, null), o.a.createElement(l, null, o.a.createElement("div", {
					className: a.a.title
				}, c), i && o.a.createElement("div", {
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
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(d);
			t.a = () => r.a.createElement(c.a, {
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
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				c = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				d = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				p = s.n(m);
			const u = r.a.createElement(c.a, {
					className: p.a.lockIcon
				}),
				b = e => Object(d.g)(e) ? i.d.profile : i.d.subreddit;

			function h(e) {
				let {
					subredditOrProfile: t
				} = e;
				const s = t ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", b(t) + t.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(l.a, {
					className: p.a.bannerBase,
					color: a.a.locked,
					icon: u,
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
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trophy/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				m = s.n(l);
			const p = a.a.wrapped(d.a, "TrophyIcon", m.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, o = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(c.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(p, null),
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
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = s.n(b);
			const x = r.a.createElement(m.a, {
					className: h.a.icon
				}),
				g = Object(a.c)({
					subreddit: p.B,
					subredditAboutInfo: p.y
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
					className: h.a.container,
					color: d.a.quarantine,
					icon: x,
					subtitle: r.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", r.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", o ? r.a.createElement(c.a, {
						className: h.a.rawHtmlDisplay,
						html: o
					}) : i, " ", r.a.createElement(l.a, {
						className: h.a.link,
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

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};

			function l(e) {
				const {
					children: t,
					className: s,
					to: n
				} = e, r = d(e, ["children", "className", "to"]), l = Object(a.b)(n);
				return o.a.createElement(i.a, c({
					className: s,
					to: l
				}, r), t)
			}

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
				c = s("./src/reddit/constants/posts.ts"),
				d = s("./src/reddit/helpers/trackers/post.ts"),
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
					subredditOrProfile: b,
					templatePlaceholderImage: h
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: u
					})
				}, o.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, u && b && o.a.createElement(i.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(d.f)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: b.name,
						type: Object(l.g)(b) ? c.a.PROFILE : c.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), o.a.createElement(a.a, {
					crosspost: t,
					post: s,
					redditStyle: m,
					forceShowNSFW: n,
					templatePlaceholderImage: h
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
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
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
			}, e.inCommentFlatlist ? o.a.createElement(c.b, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : o.a.createElement(d.c, {
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
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), m = i.a.div("Placeholder", c.a), p = () => r.a.createElement(m, null, r.a.createElement(l, null, d._("Loading reports…", null, {
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
				c = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				d = s.n(c);
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
						s = d.a[e.breakpointType],
						n = d.a[t],
						o = e.isCompact ? d.a[r.Compact] : d.a[r.Default];
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
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				g = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				E = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				k = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				_ = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(P);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(I.b)({
						breakpointType: I.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				N = Object(i.b)(() => Object(a.c)({
					activeModalId: k.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(w.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(j.i)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(m.m)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(p.h)({
							tooltipId: t
						})),
						onRemovePost: () => e(Object(m.K)(s.id, !1)),
						onSpamPost: () => e(Object(m.K)(s.id, !0)),
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
					onFlairPost: k,
					onRemovePost: j,
					onSpamPost: w,
					post: I,
					sendEvent: P,
					showIconsOnly: N
				} = e, A = Object(f.a)(l), M = Object(b.b)(I), L = !(!I.approvedBy || !M), R = Object(h.b)(I.id, i), F = A && m && !I.isSponsored, B = t && m;
				let D, W, H;
				N || (D = ((e, t) => e ? n.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? n.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : n.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(L, I.approvedBy), W = ((e, t) => e ? t === d.k ? n.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : n.fbt._("removed", null, {
					hk: "35ZTch"
				}) : n.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(I.isRemoved, I.bannedBy), H = (e => e ? n.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : n.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(I.isSpam));
				const V = !i && a === g.g.Compact;
				return r.a.createElement("div", {
					className: Object(c.a)(S.a.container, s)
				}, F && r.a.createElement(o.Fragment, null, r.a.createElement(x.b, {
					className: T(_.a.Approve, V),
					key: "approveButton",
					text: D,
					disabled: !!I.approvedBy && !M,
					onClick: () => {
						p(), P(Object(v.f)(I.id, "approve"))
					}
				}, r.a.createElement(C.a, null)), r.a.createElement(x.d, {
					className: T(_.a.Remove, V),
					key: "removeButton",
					text: W,
					disabled: I.isRemoved && I.bannedBy !== d.k,
					onClick: () => {
						j(), I.isRemoved && I.bannedBy === d.k ? P(Object(v.f)(I.id, "confirm_remove")) : P(Object(v.f)(I.id, "remove"))
					}
				}, r.a.createElement(O.a, null)), r.a.createElement(x.d, {
					className: T(_.a.Spam, V),
					key: "removeSpamButton",
					text: H,
					disabled: I.isSpam,
					onClick: () => {
						w(), P(Object(v.f)(I.id, "spam"))
					}
				}, r.a.createElement(y.a, null))), B && r.a.createElement(x.c, {
					className: T(_.a.Flair, V),
					key: "tagButton",
					onClick: () => {
						k(R)(), P(Object(v.f)(I.id, "post_flair_picker"))
					}
				}, r.a.createElement(E.a, null)), r.a.createElement(u.f, {
					postId: I.id
				}))
			})
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/reportFlow.ts"),
				l = s("./src/reddit/components/Popup/index.tsx"),
				m = s("./src/reddit/components/Popup/Button.tsx"),
				p = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: h
				} = e, [x, g] = Object(o.useState)(!0), f = Object(b.b)(s.id, h), v = Object(i.c)(), C = Object(u.a)(), O = Object(b.a)(s, h), y = (e, n) => C(Object(p.a)(t, s.id, e, n));
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
						g(!1), y("close", "click"), v(Object(c.y)()), v(Object(c.J)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						v(Object(c.y)())
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
					onClick: () => (g(!1), y("report", "click"), void v(Object(d.j)(s.id)))
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
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/reportFlow.ts"),
				m = s("./src/reddit/components/Popup/index.tsx"),
				p = s("./src/reddit/components/Popup/Button.tsx"),
				u = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: x
				} = e, [g, f] = Object(r.useState)(n.Survey), v = Object(h.b)(s.id, x), C = Object(a.c)(), O = Object(b.a)(), y = Object(h.a)(s, x), E = (e, n) => O(Object(u.b)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					y && E("modal", "show")
				}, [y]);
				const k = e => {
					f(n.Closed), E("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), C(Object(l.j)(s.id, void 0, e))
				};
				if (!y) return null;
				let j = null;
				const w = {
					id: v,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						f(n.Closed), E("close", "click"), C(Object(d.y)())
					},
					onClickOutside: () => {
						C(Object(d.y)())
					}
				};
				switch (g) {
					case n.Survey:
						j = i.a.createElement(m.a, w, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
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
						j = i.a.createElement(m.a, w, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						j = i.a.createElement(m.a, w, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						j = i.a.createElement(m.a, w, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", i.a.createElement(c.a, {
							to: "/r/".concat(t, "/about/rules"),
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => k("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => k("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return j
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
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
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(x);
			const f = d.a.wrapped(p.a, "_Dropdown", g.a),
				v = Object(m.a)(f),
				C = d.a.button("MenuButton", g.a),
				O = d.a.wrapped(b.a, "MenuIcon", g.a),
				y = d.a.wrapped(u.b, "DropdownRow", g.a),
				E = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				k = Object(i.b)(E, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = k(e => r.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: j(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(O, null), r.a.createElement(v, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
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
				c = s("./src/reddit/components/Popup/index.m.less"),
				d = s.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: s,
					onClickOutside: n,
					title: r,
					children: c
				} = e;
				return Object(a.a)(t, n), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: d.a.header
				}, o.a.createElement("span", {
					className: d.a.title
				}, r), o.a.createElement("button", {
					className: d.a.closeButton,
					onClick: s
				}, "✕")), c)
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
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/isRemoved.ts"),
				x = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				g = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				y = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				E = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				k = s("./src/reddit/icons/fonts/Report/index.tsx"),
				j = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				w = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				I = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				P = s("./src/reddit/components/PostBadges/index.m.less"),
				S = s.n(P);

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
				A = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				M = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				L = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				R = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				F = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				B = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				D = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				W = Object(a.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(v.u)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.P
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
					isPinned: b,
					isProfilePostListing: v,
					modModeEnabled: P,
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
					q = B("Approve", V.id, U),
					z = B("Archived", V.id, U),
					J = B("Automod", V.id, U),
					X = B("Lock", V.id, U),
					Q = B("Mod", V.id, U),
					Y = B("Remove", V.id, U),
					Z = B("Report", V.id, U),
					$ = B("Spam", V.id, U),
					ee = B("Sticky", V.id, U),
					te = B("Pinned", V.id, U);
				return r.a.createElement("div", {
					className: t
				}, a && s && V.distinguishType === d.C.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(I.a, {
					className: S.a.modIcon,
					desc: L(s),
					id: Q,
					onMouseEnter: H(Q),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: Q,
					text: L(s)
				}, G))), V.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					className: S.a.archivedIcon,
					desc: A(),
					id: z,
					onMouseEnter: H(z),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: z,
					text: A()
				}, G))), V.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					className: S.a.lockIcon,
					desc: M(),
					id: X,
					onMouseEnter: H(X),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: X,
					text: M()
				}, G))), i && Object(f.k)(V) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					className: S.a.stickyIcon,
					desc: R(),
					id: ee,
					onMouseEnter: H(ee),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: ee,
					text: R()
				}, G))), v && b && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
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
					id: q,
					onMouseEnter: H(q),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: q,
					text: Object(x.a)(V)
				}, G))), Object(h.a)(V) && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: S.a.removeIcon,
					desc: Object(x.c)(V),
					id: Y,
					onMouseEnter: H(Y),
					onMouseLeave: D
				}), K && r.a.createElement(p.a, {
					className: S.a.addRemovalReason,
					onClick: W,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (V.modRemovalReason || V.modNote) && r.a.createElement(N, {
					onMouseEnter: H(Y),
					onMouseLeave: D
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, T({
					tooltipId: Y,
					text: Object(x.c)(V)
				}, G))), V.bannedBy && V.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: S.a.spamIcon,
					desc: Object(x.e)(V),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: $,
					text: Object(x.e)(V)
				}, G))), ("AutoModerator" === V.approvedBy || "AutoModerator" === V.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: Object(c.a)(S.a.automoderator, !!V.bannedBy && S.a.isRemoved),
					desc: x.b,
					id: J,
					onMouseEnter: H(J),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: J,
					text: x.b
				}, G))), Object(g.a)(V) && !P && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: S.a.reportIcon,
					desc: Object(x.d)(V.numReports),
					id: Z,
					onMouseEnter: H(Z),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: Z,
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
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/video.ts"),
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(C);
			const y = Object(r.c)({
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.b)(e, s.id)
					},
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					currentIndex: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.a)(e, s.id)
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.a)(e, {
							postId: s.id
						})
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(g.c)(e, {
							postId: s.id
						})
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.i)(e, {
							postId: s.id
						})
					}
				}),
				E = Object(u.a)(y),
				k = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						s = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && s
				};
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						currentIndex: r,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: p,
						onClick: u,
						onPostContentClick: h,
						sendEvent: x,
						style: g,
						ref: v
					} = this.props, C = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => u && u(s, p, t, d))(s), h && k(s) && h(s, p)), p.id && d) {
								const {
									source: e
								} = Object(i.s)(p, d);
								if (e && e.outboundUrl) {
									const t = r + 1;
									x(Object(c.c)(p.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(f.a)(O.a.WrappedPost, n, "Post ".concat(p.id), {
							promotedlink: p.isSponsored
						}),
						id: l ? l(p.id) : p.id,
						tabIndex: -1,
						"data-testid": p.id
					}, s), y = !!p.media && p.media.type === b.o.VIDEO;
					return p.isSponsored || y ? o.a.createElement(a.a, {
						post: p,
						trackDisplay: !0
					}, C) : p.media && Object(b.F)(p.media) ? o.a.createElement(m, {
						postId: p.id
					}, C) : C
				}
			}
			t.a = E(Object(v.c)(Object(p.c)(j)))
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
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/ads/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/path/index.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				j = s("./node_modules/lodash/find.js"),
				w = s.n(j),
				_ = s("./node_modules/react-motion/lib/react-motion.js");
			const I = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				P = "expando_content",
				S = {},
				T = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = w()(e, {
							key: P
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: P,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: P,
						style: {
							opacity: Object(_.spring)(1, I)
						}
					}] : [{
						key: P,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: P,
						style: {
							opacity: Object(_.spring)(0, I)
						}
					}]
				};
			class N extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), S), this.state = {
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
					return i.a.createElement(_.TransitionMotion, {
						styles: e => T(e, t),
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
			var A = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/models/Post/index.ts"),
				L = s("./src/reddit/models/Vote/index.ts"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/experiments/categories.ts"),
				B = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/postCreations.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				G = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				K = s("./src/reddit/components/AwardBadges/index.tsx"),
				q = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				z = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				J = s("./src/reddit/components/ExpandoButton/index.tsx"),
				X = s("./src/reddit/components/FlairWrapper/index.tsx"),
				Q = s("./src/reddit/components/Flatlist/index.tsx"),
				Y = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Z = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				$ = s("./src/reddit/components/ModModeReports/index.tsx"),
				ee = s("./src/reddit/components/ModModeReports/helpers.ts"),
				te = s("./src/reddit/components/PostContainer/index.tsx"),
				se = s("./src/higherOrderComponents/makeAsync.tsx"),
				ne = s("./src/lib/loadWithRetries/index.ts"),
				oe = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const re = Object(se.a)({
				ErrorComponent: () => i.a.createElement(oe.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(ne.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(oe.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var ie = e => i.a.createElement(re, e),
				ae = s("./src/reddit/components/PostList/index.tsx"),
				ce = s("./src/reddit/components/PostMedia/index.tsx"),
				de = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				le = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				me = s("./src/reddit/components/PostTitle/index.tsx"),
				pe = s("./src/reddit/components/PostTopLine/index.tsx"),
				ue = s("./src/reddit/components/PostTopMeta/index.tsx"),
				be = s("./src/reddit/components/SourceLink/index.tsx"),
				he = s("./src/reddit/constants/componentTestIds.ts"),
				xe = s("./src/reddit/constants/postLayout.ts"),
				ge = s("./src/reddit/contexts/PageLayer/index.tsx"),
				fe = s("./src/reddit/helpers/postEvent.ts"),
				ve = s("./src/reddit/selectors/postFlair.ts"),
				Ce = s("./src/reddit/selectors/experiments/econ/predictions.ts"),
				Oe = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				ye = s("./src/reddit/constants/colors.ts"),
				Ee = s("./src/config.ts"),
				ke = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				je = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				we = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				_e = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Ie = s.n(_e);
			const {
				fbt: Pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Se = () => Pe._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Pe._param("=User Agreement", i.a.createElement("a", {
				className: Ie.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, Pe._("User Agreement", null, {
				hk: "3MHgRl"
			}))), Pe._param("=Content Policy", i.a.createElement("a", {
				className: Ie.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Pe._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), Te = () => Pe._("This content was removed for a violation of Reddit's {=Content Policy} .", [Pe._param("=Content Policy", i.a.createElement("a", {
				className: Ie.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Pe._("Content Policy", null, {
				hk: "2X6v1w"
			})))], {
				hk: "4DbEQC"
			});
			var Ne = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: n,
					subredditName: o
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case M.g.AntiEvilOps:
							return Pe._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case M.g.Author:
							return Pe._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case M.g.AuthorDeleted:
							return Pe._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case M.g.AutomodFiltered:
							return Pe._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case M.g.CommunityOps:
							return Pe._("This post was removed by Reddit admin, u/{username}.", [Pe._param("username", t)], {
								hk: "34nHWu"
							});
						case M.g.ContentTakedown:
							return Pe._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "1wmhiC"
							});
						case M.g.CopyrightTakedown:
							return Pe._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case M.g.Moderator:
							return Pe._("This post was removed by r/{subredditName} moderator, u/{username}.", [Pe._param("subredditName", s), Pe._param("username", t)], {
								hk: "270bcn"
							});
						case M.g.Reddit:
							return Pe._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return Pe._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(n, s, o) : ((e, t) => {
					switch (e) {
						case M.g.AntiEvilOps:
							return Pe._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case M.g.Author:
							return Pe._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case M.g.AuthorDeleted:
							return Pe._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case M.g.AutomodFiltered:
							return Pe._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case M.g.CommunityOps:
							return Pe._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case M.g.ContentTakedown:
							return Pe._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "jiKO8"
							});
						case M.g.CopyrightTakedown:
							return Pe._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case M.g.Moderator:
							return Pe._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [Pe._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case M.g.Reddit:
							return Pe._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return Pe._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(n, o), a = t ? (e => {
					switch (e) {
						case M.g.AntiEvilOps:
							return i.a.createElement(Se, null);
						case M.g.AuthorDeleted:
						case M.g.Author:
							return Pe._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case M.g.AutomodFiltered:
							return Pe._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case M.g.CommunityOps:
							return Pe._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [Pe._param("=just ask", i.a.createElement("a", {
								className: Ie.a.link,
								href: "".concat(Ee.a.redditUrl, "/message/compose/?to=r/reddit.com"),
								target: "_blank"
							}, Pe._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case M.g.ContentTakedown:
							return i.a.createElement(Te, null);
						case M.g.CopyrightTakedown:
							return Pe._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case M.g.Moderator:
							return Pe._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case M.g.Reddit:
							return Pe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return Pe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(n) : ((e, t) => {
					switch (e) {
						case M.g.AntiEvilOps:
							return i.a.createElement(Se, null);
						case M.g.AuthorDeleted:
						case M.g.Author:
							return Pe._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case M.g.AutomodFiltered:
							return Pe._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [Pe._param("=[subreddit name]", i.a.createElement("a", {
								className: Ie.a.link,
								href: "".concat(Ee.a.redditUrl, "/r/").concat(t),
								target: "_blank"
							}, Pe._("{subreddit name}", [Pe._param("subreddit name", "r/".concat(t))], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case M.g.CommunityOps:
							return Pe._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case M.g.ContentTakedown:
							return i.a.createElement(Te, null);
						case M.g.CopyrightTakedown:
							return Pe._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case M.g.Moderator:
							return Pe._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case M.g.Reddit:
						default:
							return Pe._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(n, o), c = t ? ye.a.warning : ye.a.dayModeActionIcon, d = (e => {
					let t;
					switch (e) {
						case M.g.AntiEvilOps:
						case M.g.AutomodFiltered:
						case M.g.CommunityOps:
						case M.g.ContentTakedown:
						case M.g.CopyrightTakedown:
						case M.g.Reddit:
							t = ke.a;
							break;
						case M.g.AuthorDeleted:
						case M.g.Author:
							t = we.b;
							break;
						case M.g.Moderator:
							t = je.a;
							break;
						default:
							t = ke.a
					}
					return i.a.createElement(t, {
						className: Ie.a.icon
					})
				})(n);
				return i.a.createElement(Oe.a, {
					className: Ie.a.BannerBase,
					color: c,
					icon: d,
					subtitle: a,
					title: r
				})
			};

			function Ae(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, n && s.removedByCategory && i.a.createElement(Ne, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: n.name
				}))
			}
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var Me = s("./node_modules/fbt/lib/FbtPublic.js"),
				Le = s("./src/lib/prettyPrintNumber/index.ts"),
				Re = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Fe = s.n(Re);
			var Be = e => {
					let {
						post: t,
						showViewCount: s
					} = e;
					const {
						upvotePercentString: n,
						viewCountString: o
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(Le.b)(e.viewCount);
						return {
							upvotePercentString: Me.fbt._("{percent upvoted}% Upvoted", [Me.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Me.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Me.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(t), r = s && !!t.viewCount;
					return i.a.createElement("div", {
						className: Fe.a.viewCounts
					}, r && i.a.createElement("span", null, o), r && !!t.upvoteRatio && i.a.createElement("span", {
						className: Fe.a.dotSpacer
					}), !!t.upvoteRatio && i.a.createElement("span", null, n))
				},
				De = s("./src/reddit/components/PostContent/index.m.less"),
				We = s.n(De);
			const He = u.a.wrapped(me.c, "PostTitle", We.a),
				Ve = u.a.wrapped(J.a, "ExpandoButton", We.a),
				Ue = u.a.wrapped(N, "ClassicExpandoMotion", We.a),
				Ge = u.a.wrapped(Q.c, "FullWidthFlatlist", We.a),
				Ke = u.a.wrapped(q.a, "ClassicThumbnail", We.a),
				qe = Object(ge.t)({
					isCommentsPage: ge.w,
					pageLayer: e => e
				}),
				ze = Object(a.b)(() => Object(l.c)({
					activeModalId: R.a,
					flairStyleTemplate: ge.R,
					currentUser: V.i,
					crosspost: H.d,
					hideNSFWPref: V.A,
					imageGalleryCurrentItem: H.i,
					isAdminOrMod: (e, t) => {
						const s = Object(H.bb)(e, {
							postId: t.postId
						});
						return !!s && Object(D.g)(e, {
							subredditId: s.id
						})
					},
					isCurrentUserProfilePost: H.k,
					isExpanded: H.m,
					post: H.O,
					moderatorPermissions: D.i,
					modModeEnabled: ge.P,
					isInCategoriesExperiment: F.a,
					showAwardsPlaque: B.a,
					showEditFlair: ve.a,
					subredditOrProfile: H.bb,
					isEditing: W.G,
					userIsOp: V.kb,
					predictionsEnabled: Ce.a
				}), (e, t) => {
					let {
						pageLayer: s,
						postId: n
					} = t;
					return {
						onIgnoreReports: () => e(Object(h.Q)(n)),
						onOpenReportsDropdown: t => e(Object(k.h)({
							tooltipId: t
						})),
						onVoteClick: t => {
							const s = t === L.a.upvoted ? Object(h.S)(n) : Object(h.q)(n);
							e(s)
						},
						fireAdPixelsOfType: (t, s) => e(Object(h.t)(t, s)),
						openPost: t => e(Object(h.C)(t)),
						closePost: t => {
							var n, o;
							const r = null === (o = null === (n = null == s ? void 0 : s.locationState) || void 0 === n ? void 0 : n.closeLocation) || void 0 === o ? void 0 : o.pathname;
							r ? e(Object(d.c)(r)) : t && e(Object(d.c)(t.url))
						}
					}
				}),
				Je = u.a.wrapped(c.a, "ThumbLink", We.a),
				Xe = e => {
					let {
						post: t,
						templatePlaceholderImage: s
					} = e;
					return t.source ? i.a.createElement(Ke, {
						post: t,
						forceShowNSFW: !0,
						templatePlaceholderImage: s
					}) : i.a.createElement(Je, {
						to: Object(O.b)(t.permalink)
					}, i.a.createElement(Ke, {
						post: t,
						forceShowNSFW: !0
					}))
				},
				Qe = e => {
					let {
						post: t,
						isExpanded: s,
						scrollerItemRef: n
					} = e;
					return i.a.createElement(Ue, {
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(ce.a, {
							className: We.a.ClassicPostMedia,
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
			t.a = qe(ze(e => {
				const {
					className: t,
					closePost: s,
					crosspost: n,
					currentUser: a,
					fireAdPixelsOfType: c,
					flairStyleTemplate: d,
					hideNSFWPref: l,
					isActionBarAnimationEnabled: u,
					imageGalleryCurrentItem: h,
					isAdminOrMod: O,
					isCommentsPage: k,
					isCurrentUserProfilePost: j,
					isEditing: w,
					isExpanded: _,
					isOverlay: I,
					moderatorPermissions: P,
					modModeEnabled: S,
					onIgnoreReports: T,
					onOpenReportsDropdown: N,
					openPost: L,
					onVoteClick: R,
					post: F,
					predictionsEnabled: B,
					scrollerItemRef: D,
					sendEvent: W,
					showAwardsPlaque: H,
					showEditFlair: V,
					subredditOrProfile: q,
					userIsOp: J
				} = e, se = F.isSponsored ? Object(ae.b)(F.id, {
					fireAdPixelsOfType: c,
					openPost: L
				}) : o.a, ne = Object(C.a)(P), oe = Object(f.a)(P), re = Object(v.a)(P), ge = ne || oe, ve = ((e, t, s) => {
					const [n, o] = e ? [Object(g.e)(e) === s.author, e.isEmployee] : [!1, !1];
					return n || t || o
				})(a, ge, F), Ce = !!F.media && (F.media.type === A.o.RTJSON || F.media.type === A.o.TEXT), Oe = J && Ce, ye = Object(ee.c)(F);
				let Ee;
				const ke = !(S && C.a),
					je = Object(de.h)({
						hide: ke,
						editPost: ke,
						save: ke,
						report: ke
					}),
					we = F.removedByCategory === M.g.AuthorDeleted,
					_e = a && (a.displayText === F.author || a.username === F.author),
					Ie = !we && (_e || O || !(F.removedByCategory && F.media && (Object(A.K)(F.media) || Object(A.I)(F.media)))),
					Pe = Object(m.s)(F, h),
					{
						source: Se
					} = Pe,
					Te = F.removedByCategory === M.g.Reddit && Object(b.e)(F.created) > 24,
					Ne = F.removedByCategory && F.removedByCategory !== M.g.Reddit || Te;
				Object(r.useEffect)(() => {
					var e;
					(null === (e = F.pollData) || void 0 === e ? void 0 : e.isPrediction) && !B && s(q)
				}, [F]);
				const Me = i.a.createElement(He, {
						post: F,
						size: me.b.ExtraLarge,
						showCategoryTag: I,
						isOverlay: I,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Le = i.a.createElement(Be, {
						post: F,
						showViewCount: ve
					}),
					Re = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? xe.g.Classic : t ? xe.g.Large : n.media ? xe.g.Large : xe.g.Medium
					})(e);
				if (Re === xe.g.Classic) Ee = i.a.createElement("div", {
					"data-test-id": he.e
				}, i.a.createElement(le.a, {
					model: F,
					handleVote: R,
					subreddit: q,
					isOverlay: I,
					isActionBarAnimationEnabled: u,
					postId: F.id,
					isForceSelected: !I && u
				}), i.a.createElement("div", {
					className: We.a.mainBody
				}, i.a.createElement("div", {
					className: We.a.content
				}, i.a.createElement(pe.a, {
					hideAwards: H,
					hideNSFWPref: l,
					inSubredditOrProfile: !0,
					isCommentsPage: k,
					isCurrentUserProfilePost: j,
					isOverlay: !!I,
					isTopicPage: !1,
					post: F,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!I && !F.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: q
				}), Me, i.a.createElement(X.a, {
					className: k ? We.a.leftPadding : null,
					post: F,
					showCategoryTag: e.isInCategoriesExperiment && k,
					sendEvent: W
				}), S && ne && ye && i.a.createElement($.a, {
					onIgnoreReports: T,
					reportable: F
				}), i.a.createElement(Y.d, {
					postId: F.id
				}), i.a.createElement("div", {
					className: We.a.FlatlistContainer
				}, i.a.createElement(Ve, {
					crosspost: n || void 0,
					isExpanded: !!_,
					post: F,
					useMediaIcons: !1
				}), Qe(e), H && i.a.createElement(K.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: F,
					tooltipType: I ? ue.c.Lightbox : void 0
				}), i.a.createElement(Ge, {
					currentUser: a,
					hasModFlairPerms: oe,
					hasModFullPerms: re,
					hasModPostPerms: ne,
					isOverlay: I,
					onIgnoreReports: T,
					onOpenReportsDropdown: N,
					modModeEnabled: S,
					post: F,
					showUpvotePercent: !0,
					showViewCount: ve,
					useFlatlistBreakpoints: je,
					isActionBarAnimationEnabled: u,
					isForceSelected: !I && u
				}))), Object(x.a)(F) && i.a.createElement(Xe, {
					post: F,
					templatePlaceholderImage: d && d.postPlaceholderImage
				})));
				else if (Re === xe.g.Medium) {
					const t = Object(x.a)(F);
					Ee = i.a.createElement("div", {
						"data-test-id": he.e
					}, i.a.createElement(le.a, {
						model: F,
						handleVote: R,
						subreddit: q,
						isOverlay: I,
						isActionBarAnimationEnabled: u,
						postId: F.id,
						isForceSelected: !I && u
					}), i.a.createElement("div", {
						className: We.a.mainBody
					}, i.a.createElement("div", {
						className: We.a.content
					}, i.a.createElement(pe.a, {
						hideAwards: H,
						hideNSFWPref: l,
						inSubredditOrProfile: !0,
						isCommentsPage: k,
						isCurrentUserProfilePost: j,
						isOverlay: !!I,
						isTopicPage: !1,
						post: F,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!I && !F.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: q
					}), Me, F.source && i.a.createElement(be.a, {
						post: F,
						isCommentsPage: k
					}), i.a.createElement(X.a, {
						className: k ? We.a.leftPadding : null,
						post: F,
						showCategoryTag: e.isInCategoriesExperiment && k,
						sendEvent: W
					}), q && Ne && i.a.createElement(Ae, {
						isAdminOrMod: O,
						post: F,
						subredditOrProfile: q
					}), S && ne && ye && i.a.createElement($.a, {
						onIgnoreReports: T,
						reportable: F
					})), t && i.a.createElement(Z.a, {
						post: F,
						forceShowNSFW: !0,
						hasModPostPerms: ge,
						isCommentsPage: k,
						isOverlay: !0,
						modModeEnabled: S,
						templatePlaceholderImage: d && d.postPlaceholderImage
					})), i.a.createElement(Y.d, {
						postId: F.id
					}), H && i.a.createElement(K.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: F,
						tooltipType: I ? ue.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: We.a.controlsContainer
					}, i.a.createElement(Q.c, {
						currentUser: a,
						hasModFlairPerms: oe,
						hasModFullPerms: re,
						hasModPostPerms: ne,
						isOverlay: I,
						modModeEnabled: S,
						onIgnoreReports: T,
						onOpenReportsDropdown: N,
						post: F,
						showEditPost: Oe,
						showEditFlair: V,
						tooltipType: I ? ue.c.Lightbox : void 0,
						useFlatlistBreakpoints: je,
						isActionBarAnimationEnabled: u,
						isForceSelected: !I && u
					}), Le))
				} else Re === xe.g.Large && (Ee = i.a.createElement("div", {
					"data-test-id": he.e
				}, i.a.createElement(le.a, {
					model: F,
					handleVote: R,
					subreddit: q,
					isOverlay: I,
					isActionBarAnimationEnabled: u,
					postId: F.id,
					isForceSelected: !I && u
				}), i.a.createElement(pe.a, {
					hideAwards: H,
					hideNSFWPref: l,
					inSubredditOrProfile: !0,
					isCommentsPage: k,
					isCurrentUserProfilePost: j,
					isOverlay: !!I,
					isTopicPage: !1,
					post: F,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!I && !F.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: q
				}), Me, ((e, t, s, n) => e.source && !t && (s || n))(F, n, I, k) && i.a.createElement(be.a, {
					post: F,
					isCommentsPage: k
				}), i.a.createElement(X.a, {
					className: k ? We.a.leftPadding : null,
					post: F,
					showCategoryTag: e.isInCategoriesExperiment && k,
					sendEvent: W
				}), q && Ne && i.a.createElement(Ae, {
					isAdminOrMod: O,
					post: F,
					subredditOrProfile: q
				}), w ? i.a.createElement(ie, {
					post: F
				}) : Ie && i.a.createElement(ce.a, {
					className: Object(p.a)(We.a.LargePostMedia, {
						[We.a.isCommentsPage]: k
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: I,
					isOverlay: I,
					post: F,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !I,
					showCentered: !0,
					scrollerItemRef: D
				}), F.isSponsored && Se && Se.url && i.a.createElement(U.a, {
					className: We.a.adLinkWrapper
				}, i.a.createElement(G.a, {
					post: F,
					adLinkContent: Pe
				})), S && ne && ye && i.a.createElement($.a, {
					onIgnoreReports: T,
					reportable: F
				}), i.a.createElement(Y.d, {
					postId: F.id
				}), H && i.a.createElement(K.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: F,
					tooltipType: I ? ue.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: We.a.controlsContainer
				}, i.a.createElement(Q.c, {
					currentUser: a,
					hasModFlairPerms: oe,
					hasModFullPerms: re,
					hasModPostPerms: ne,
					isOverlay: I,
					modModeEnabled: S,
					onIgnoreReports: T,
					onOpenReportsDropdown: N,
					post: F,
					showEditPost: Oe,
					showEditFlair: V,
					tooltipType: I ? ue.c.Lightbox : void 0,
					useFlatlistBreakpoints: je,
					isActionBarAnimationEnabled: u,
					isForceSelected: !I && u
				}), Le)));
				const Fe = Object(r.useCallback)((e, t) => Object(E.f)(e, t), []);
				return i.a.createElement(te.a, {
					className: Object(p.a)(t, We.a.postContainer, {
						[We.a.hasEventMeta]: Object(fe.a)(F)
					}),
					isOverlay: I,
					post: F,
					eventFactory: I ? y.b : Fe,
					onClick: se
				}, i.a.createElement(z.a, {
					post: F
				}), Ee)
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				m = s("./src/reddit/actions/postCreation/general.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				f = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/models/PostCreationForm/index.ts"),
				O = s("./src/reddit/selectors/postCollection.ts"),
				y = s("./src/lib/timeAgo/index.ts"),
				E = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				k = s("./src/reddit/helpers/name/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts"),
				w = s("./src/reddit/models/User/index.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				S = s.n(P),
				T = s("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = T.a.div("Container", S.a), M = T.a.h2("PostTitle", S.a), L = T.a.div("MetaLine", S.a), R = T.a.span("SubredditName", S.a), F = T.a.time("InfoSpan", S.a), B = Object(c.c)({
				subreddit: (e, t) => {
					let {
						collection: {
							subredditId: s
						}
					} = t;
					return s ? Object(_.T)(e, {
						subredditId: s
					}) : void 0
				},
				user: I.i
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
					} = this.props, o = t && Object(j.g)(t) && s ? Object(k.d)(Object(w.e)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(A, {
						onClick: this.onClick,
						className: S.a.container
					}, i.a.createElement(M, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(L, {
						"data-redditstyle": !0
					}, o && i.a.createElement(R, {
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
				q = T.a.div("TitleRow", U.a),
				z = T.a.div("DetailsContainer", U.a),
				J = T.a.wrapped(v.a, "ButtonRow", U.a),
				X = T.a.div("CloseWrapper", U.a),
				Q = T.a.wrapped(x.a, "Close", U.a),
				Y = T.a.div("Empty", U.a),
				Z = T.a.img("EmptyImage", U.a),
				$ = T.a.p("EmptyText", U.a),
				ee = T.a.div("FilterWrapper", U.a),
				te = T.a.wrapped(h.a, "FilterInput", U.a),
				se = T.a.wrapped(f.a, "SearchIcon", U.a),
				ne = T.a.wrapped(g.a, "PlusIcon", U.a),
				oe = T.a.wrapped(b.m, "CreateCollectionButton", U.a),
				re = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ie = Object(c.c)({
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
							s && (t = Object(C.t)(s, !!n)), e(Object(m.x)(t))
						}
					}
				});
			class ce extends i.a.PureComponent {
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
					return i.a.createElement(Y, null, i.a.createElement(Z, {
						src: G
					}), i.a.createElement($, null, o.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Y, null, i.a.createElement($, null, o.fbt._("No collection matching filter", null, {
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
					}, i.a.createElement(K, null, i.a.createElement(q, {
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
					}))), i.a.createElement(z, null, s), i.a.createElement(J, null, i.a.createElement(oe, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(ne, null), o.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ae(Object(p.c)(ce)));
			t.a = de
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
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/formatApiError/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				f = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				O = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				y = s.n(O),
				E = s("./src/lib/lessComponent.tsx");
			const k = E.a.div("Container", y.a),
				j = E.a.div("Content", y.a),
				w = E.a.div("TitleRow", y.a),
				_ = E.a.div("Details", y.a),
				I = E.a.wrapped(m.f, "Footer", y.a),
				P = E.a.wrapped(u.l, "CancelButton", y.a),
				S = E.a.div("CloseWrapper", y.a),
				T = E.a.wrapped(f.a, "CloseIcon", y.a),
				N = E.a.label("Label", y.a),
				A = E.a.wrapped(h.a, "TitleInput", y.a),
				M = E.a.wrapped(g.a, "AddCollectionIcon", y.a),
				L = E.a.wrapped(u.i, "PrimaryActionButton", y.a),
				R = E.a.wrapped(x.a, "LoadingIcon", y.a),
				F = E.a.wrapped(b.b, "ErrorText", y.a),
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
					return r.a.createElement(k, null, r.a.createElement(S, {
						onClick: this.props.onCancel
					}, r.a.createElement(T, null)), r.a.createElement(j, null, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, r.a.createElement(M, null), n.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(_, null, n.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, o ? n.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : n.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(A, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: n.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(I, null, r.a.createElement(v.a, null, r.a.createElement(P, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(L, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? r.a.createElement(R, {
						sizePx: 10
					}) : a)), t && r.a.createElement(F, null, Object(d.a)(t))))
				}
			}
			t.a = Object(c.a)(D(W))
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
				return j
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				v = s("./src/reddit/selectors/postFlair.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				k = s.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				w = Object(c.c)({
					flairData: v.d,
					subreddit: C.T,
					isMod: (e, t) => !!Object(f.j)(e, t)
				});
			class _ extends i.a.Component {
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
						templates: c,
						templateIds: d
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
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: k.a.buttonsRow
					}, i.a.createElement(x.i, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.l, {
						className: k.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(a.b)(w, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(_);
			t.a = Object(l.a)(Object(d.c)(I))
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
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends r.a.Component {
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
						className: Object(c.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.u)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
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
				c = s("./src/reddit/components/PostLeftRail/index.m.less"),
				d = s.n(c);
			const l = 40,
				m = e => e.isRemoved ? a.a.removed : e.isReported ? a.a.reported : "transparent",
				p = Object(i.a)(e => {
					const t = m(e),
						s = {
							width: "".concat(l, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return o.a.createElement("div", {
						className: Object(r.a)(d.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = p
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
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
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton2020: "_18h85FqXFcYDKgZEKQcNj0",
				subscribeButton2020: "_18h85FqXFcYDKgZEKQcNj0"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/components/PostMeta/index.m.less"),
				v = s.n(f);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: f,
					isOverlay: C,
					isTopicPage: O,
					post: y,
					shouldShowSubscribeButton: E,
					subredditOrProfile: k,
					tooltipType: j
				} = e, w = !!O;
				return o.a.createElement("div", {
					className: v.a.metaContainer
				}, !n && !y.isSponsored && k && o.a.createElement(i.a, {
					postId: y.id,
					subredditName: k.name
				}, o.a.createElement(m.a, {
					className: v.a.subredditName,
					"data-click-id": "subreddit",
					to: k.url
				}, k.displayText)), k && k.isQuarantined && o.a.createElement(l.a, null), !n && !y.isSponsored && k && E && !f && o.a.createElement(p.a, {
					className: v.a.SubscribeButton2020,
					getEventFactory: e => Object(x.f)(y.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: k.name,
						type: Object(g.g)(k) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: y.id,
					size: b.c.XXS,
					small: !0
				}), !n && !y.isSponsored && o.a.createElement(h.b, null), !n && !y.isSponsored && o.a.createElement(a.h, {
					type: y.belongsTo.type,
					id: y.belongsTo.id
				}), o.a.createElement(d.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: t,
					post: y,
					tooltipType: j
				}), o.a.createElement(c.a, {
					displayText: k ? k.displayText : null,
					inSubredditOrProfile: !!n,
					post: y,
					tooltipType: j
				}), !w && o.a.createElement(r.a, {
					hideCta: s,
					thing: y,
					tooltipType: C ? d.c.Lightbox : void 0
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
				return b
			})), s.d(t, "d", (function() {
				return h
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
				c = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				p = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = s.n(p);
			const b = n.a.wrapped(i.a, "Icon", u.a),
				h = n.a.wrapped(a.a, "Icon", u.a),
				x = n.a.wrapped(c.a, "Icon", u.a),
				g = n.a.wrapped(d.a, "Icon", u.a),
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
				return Oe
			})), s.d(t, "b", (function() {
				return ye
			})), s.d(t, "c", (function() {
				return Ee
			})), s.d(t, "d", (function() {
				return ke
			})), s.d(t, "f", (function() {
				return je
			})), s.d(t, "e", (function() {
				return we
			})), s.d(t, "h", (function() {
				return We
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				m = s("./node_modules/uuid/v4.js"),
				p = s.n(m),
				u = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/actions/eventPosts/index.ts"),
				g = s("./src/reddit/actions/gold/modals.ts"),
				f = s("./src/reddit/actions/modal.ts"),
				v = s("./src/reddit/actions/pinnedPost.ts"),
				C = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/postCreation/editing.ts"),
				y = s("./src/reddit/actions/reportFlow.ts"),
				E = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				k = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/constants/posts.ts"),
				w = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				_ = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				P = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				S = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				T = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				N = s("./src/reddit/icons/fonts/Hide/index.tsx"),
				A = s("./src/reddit/icons/fonts/Link/index.tsx"),
				M = s("./src/reddit/icons/fonts/Live/index.tsx"),
				L = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				R = s("./src/reddit/icons/fonts/Report/index.tsx"),
				F = s("./src/reddit/icons/fonts/Save/index.tsx"),
				B = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				D = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				W = s("./src/reddit/icons/fonts/Unpin/index.tsx"),
				H = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				V = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				U = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				G = s("./src/reddit/components/OverflowMenu/index.tsx"),
				K = s("./src/reddit/components/ReportFlow/index.tsx"),
				q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				z = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				J = s("./src/reddit/controls/Dropdown/Row.tsx"),
				X = s("./src/reddit/components/Flatlist/constants.ts"),
				Q = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				Y = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				$ = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ee = s("./src/reddit/helpers/isCrosspost.ts"),
				te = s("./src/reddit/helpers/postEvent.ts"),
				se = s("./src/reddit/helpers/trackers/post.ts"),
				ne = s("./src/reddit/models/Post/index.ts"),
				oe = s("./src/reddit/models/Subreddit/index.ts"),
				re = s("./src/reddit/selectors/activeModalId.ts"),
				ie = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ae = s("./src/reddit/selectors/posts.ts"),
				ce = s("./src/reddit/selectors/subreddit.ts"),
				de = s("./src/reddit/selectors/user.ts"),
				le = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				me = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				pe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ue = s("./src/reddit/components/ReportFlow/new.tsx"),
				be = s("./src/reddit/actions/postCollection/index.ts"),
				he = s("./src/reddit/helpers/trackers/postCollection.ts"),
				xe = s("./src/reddit/models/PostCreationForm/index.ts"),
				ge = s("./src/reddit/selectors/postCollection.ts"),
				fe = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				ve = s.n(fe),
				Ce = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Oe = h.a.wrapped(T.a, "Icon", ve.a),
				ye = h.a.wrapped(N.a, "Icon", ve.a),
				Ee = h.a.wrapped(L.a, "Icon", ve.a),
				ke = h.a.wrapped(R.a, "Icon", ve.a),
				je = h.a.wrapped(V.a, "Icon", ve.a),
				we = h.a.wrapped(F.a, "Icon", ve.a),
				_e = h.a.wrapped(I.a, "Icon", ve.a),
				Ie = h.a.wrapped(H.a, "AddCollectionIcon", ve.a),
				Pe = h.a.wrapped(S.a, "Icon", ve.a),
				Se = h.a.wrapped(B.a, "Icon", ve.a),
				Te = h.a.wrapped(D.a, "Icon", ve.a),
				Ne = h.a.wrapped(U.b, "Icon", ve.a),
				Ae = h.a.wrapped(W.a, "Icon", ve.a),
				Me = h.a.wrapped(M.a, "LiveIcon", ve.a),
				Le = h.a.wrapped(P.a, "CalendarIcon", ve.a),
				Re = h.a.wrapped(A.a, "LinkIcon", ve.a),
				Fe = h.a.wrapped(J.b, "DropdownRow", ve.a),
				Be = h.a.wrapped(z.a, "PostCheckboxMenuItem", ve.a),
				De = p()(),
				We = e => {
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
				He = Object(a.b)(() => Object(d.c)({
					currentUser: de.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(re.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: ge.j,
					isSaved: ae.x,
					isHidden: ae.p,
					isSponsored: ae.z,
					isNSFW: ae.s,
					isOC: ae.t,
					isPinned: ae.u,
					isSpoiler: ae.y,
					post: ae.O,
					postSubredditAboutInfo: ae.P,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: n
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === n
					},
					sendRepliesToggled: ae.Y,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, n = Ce(t, ["isProfilePostListing"]);
						return Object(q.B)(e, n) && s && Object(de.kb)(e, n) && Object(de.ib)(e, {
							userName: Object(ae.O)(e, {
								postId: n.postId
							}).author
						})
					},
					subredditOrProfile: ae.bb,
					hasSubredditRules: ce.k,
					userIsOp: de.kb,
					isPostPartOfACollection: ge.l,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(ae.O)(e, {
								postId: s
							}).isSponsored) return !1;
						const n = Object(ae.bb)(e, {
							postId: s
						});
						if (!n) return !1;
						const o = n.type === oe.e.User;
						return Object(ge.s)(e, n.name, o)
					},
					reportingRevampEnabled: le.a,
					videoShareModalOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(re.a)(e) === Object(Y.a)(s)
					},
					inRpanSharingTimestampExperiment: ie.e
				}), (e, t) => {
					let {
						permalink: s,
						postId: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						onCopyLink: t => e(Object(C.v)(t)),
						onDelete: t => e(Object(C.E)(n, t, o)),
						onDistinguishPost: t => e(Object(C.p)(n, t)),
						onGildClick: t => e(Object(g.d)({
							correlationId: t,
							thingId: n
						})),
						onToggleSave: () => e(Object(C.L)(n)),
						onToggleNSFW: () => e(Object(C.A)(n)),
						onToggleOC: () => e(Object(C.B)(n)),
						onTogglePinned: () => e(Object(v.i)(n)),
						onToggleSpoiler: () => e(Object(C.O)(n)),
						onHide: t => e(Object(C.P)(n, !t, o, !0)),
						onReportClick: () => e(Object(y.j)(n, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(_.l)()(t()))), e(Object(x.startEventNowRequested)(n))
						},
						onEdit: () => {
							const t = !o && !r;
							e(Object(O.a)(n, t))
						},
						onFlairPost: () => e(Object(f.i)(Object(pe.b)(n, o))),
						onToggleSendReplies: () => e(Object(C.M)(n)),
						showCollectionsList: (t, s) => {
							e(Object(be.e)(t)).then(() => {
								const t = Object(xe.s)(s, o);
								e(f.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(f.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(n))),
						onToggleVideoShareModal: () => e(Object(f.i)(Object(Y.a)(n)))
					}
				});
			class Ve extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: n,
							sendEvent: o
						} = this.props;
						o(Object(se.f)(n.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						const e = Object($.d)($.a.GildingFlow, !0);
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(se.g)(this.props.post.id)) : this.props.sendEvent(Object(se.c)(this.props.post.id)), this.props.onTogglePinned()
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
						e || (n(Object(he.b)(s.id)), t(s.belongsTo.id, s.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: De
						}), this.props.onCopyLink(e)), this.props.onToggleVideoShareModal()
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(ue.a, {
						withOverlay: !0,
						overlayCustomStyles: K.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : i.a.createElement(K.a, {
						withOverlay: !0,
						overlayCustomStyles: K.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
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
						post: c,
						shouldRenderCollectionEditButtons: d,
						showEditFlair: l,
						showPinAction: m,
						toggleAddEventStartTimeModal: b,
						toggleEditStartTimeModal: h,
						userIsOp: x
					} = e, g = e.currentUser && e.currentUser.isEmployee, f = Object(ee.a)(e.post), v = e.post.belongsTo.type === j.a.PROFILE || Object(oe.f)(e.postSubredditAboutInfo), C = t && c.isGildable, O = Object(te.a)(e.post);
					return i.a.createElement("div", null, C && i.a.createElement(Fe, {
						className: this.getBreakpointClass(X.a.Gild),
						displayText: n.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(Oe, null)), i.a.createElement(Fe, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: n.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(ne.i)(s))
								if (e.inRpanSharingTimestampExperiment) e.onToggleVideoShareModal(), this.handlePostEvent("share");
								else {
									const t = Object(w.a)(s.id),
										n = p()(),
										o = Object(u.a)(t, {
											[k.q]: n,
											utm_source: "share",
											utm_medium: "web2x",
											utm_content: "rpan_stream"
										});
									this.handlePostEvent("share_copy", {
										referralId: n
									}), e.onCopyLink(o)
								}
							else this.handlePostEvent("share_copy"), e.onCopyLink(t)
						}
					}, i.a.createElement(Re, null)), i.a.createElement(Fe, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: n.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(Pe, null)), e.showEditPost && i.a.createElement(Fe, {
						className: this.getBreakpointClass(X.a.EditPost),
						displayText: n.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, i.a.createElement(Ee, null)), l && i.a.createElement(Fe, {
						displayText: n.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, i.a.createElement(Te, null)), i.a.createElement(Fe, {
						className: this.getBreakpointClass(X.a.Save),
						displayText: e.isSaved ? n.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : n.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? i.a.createElement(je, null) : i.a.createElement(we, null)), m && i.a.createElement(Fe, {
						displayText: r ? n.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : n.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? i.a.createElement(Ae, null) : i.a.createElement(Se, null)), !e.isSponsored && i.a.createElement(Fe, {
						className: this.getBreakpointClass(X.a.Hide),
						displayText: e.isHidden ? n.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : n.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, i.a.createElement(ye, null)), !e.isSponsored && !x && i.a.createElement(Fe, {
						className: this.getBreakpointClass(X.a.Report),
						displayText: n.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(ke, null)), d && s && a && i.a.createElement(Fe, {
						onClick: a,
						displayText: n.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(Me, null)), d && s && h && i.a.createElement(Fe, {
						onClick: h,
						displayText: n.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(Le, null)), d && !O && b && i.a.createElement(Fe, {
						displayText: n.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: b
					}, i.a.createElement(Le, null)), d && i.a.createElement(Fe, {
						className: this.props.isPostPartOfACollection ? ve.a.disabledRow : void 0,
						displayText: n.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(Ie, null)), x && i.a.createElement(Fe, {
						displayText: n.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, i.a.createElement(Ne, null)), g && e.userIsOp && i.a.createElement(Fe, {
						displayText: e.post.distinguishType === o.C.ADMIN ? n.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : n.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === o.C.ADMIN ? e.onDistinguishPost(o.C.NONE) : e.onDistinguishPost(o.C.ADMIN)
					}, i.a.createElement(_e, null)), x && v && !f && i.a.createElement(Be, {
						text: n.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.isOC
					}), x && i.a.createElement(Be, {
						text: n.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.isSpoiler
					}), x && i.a.createElement(Be, {
						text: n.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.isNSFW
					}), e.userIsOp && i.a.createElement(Be, {
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
						className: Object(b.a)(ve.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.props.isConfirmDeleteOpen && i.a.createElement(Ue, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}), e.videoShareModalOpen && i.a.createElement(Y.b, {
						className: ve.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !1,
						url: Object(u.a)(Object(w.a)(e.postId), {
							[k.q]: De,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
			}
			const Ue = Object(c.i)(e => i.a.createElement(me.a, {
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
			Ve.contextType = E.a, t.g = He(Ve)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = s("./src/reddit/components/PopupPortal/index.tsx"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					subreddit: g,
					isOverlay: f,
					isActionBarAnimationEnabled: v,
					postId: C,
					isForceSelected: O
				} = e, y = "upvote-button-".concat(t.id).concat(f ? "-overlay" : ""), {
					moderationPrompt: E
				} = t;
				return o.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: x
				}, n && o.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: y,
					isActionBarAnimationEnabled: v,
					postId: C,
					isForceSelected: O
				}), E && o.a.createElement(a.b, {
					rightOf: y
				}, "survey" === E ? o.a.createElement(i.a, {
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
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				f = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/components/PostTopLine/index.m.less"),
				O = s.n(C);
			const y = s("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: n,
					hideNSFWPref: C,
					hostPostId: E,
					iconClassName: k,
					inSubredditOrProfile: j,
					isCommentsPage: w,
					isCompactPinnedPost: _,
					isCurrentUserProfilePost: I,
					isOverlay: P,
					isTopicPage: S,
					listingKey: T,
					post: N,
					shouldShowSubscribeButton: A,
					showCornerOutboundLink: M,
					showSubreddit: L,
					showSubredditIcon: R,
					subredditOrProfile: F
				} = e, B = n || S;
				return o.a.createElement(y, {
					className: t
				}, L && F && o.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, o.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: F.url
				}, R && o.a.createElement(l.b, {
					className: Object(r.a)(O.a.subredditIcon, k),
					shouldHideNsfwIcon: C,
					subredditOrProfile: F
				}))), o.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, L && o.a.createElement(a.h, {
					type: N.belongsTo.type,
					id: N.belongsTo.id
				}), o.a.createElement(d.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: P ? d.c.Lightbox : void 0,
					post: N,
					showSub: L,
					subredditOrProfile: F
				}), o.a.createElement(c.a, {
					className: O.a.postBadges,
					displayText: F ? F.displayText : null,
					inSubredditOrProfile: j,
					isCompactPinnedPost: _,
					post: N,
					tooltipType: P ? d.c.Lightbox : void 0
				}), !B && o.a.createElement(i.a, {
					isPostDetail: w,
					thing: N,
					tooltipType: P ? d.c.Lightbox : void 0
				})), F && L && A && !I && o.a.createElement(p.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(x.f)(N.id, e ? "unsubscribe" : "subscribe", "post", T, E),
					identifier: {
						name: F.name,
						type: Object(v.g)(F) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: N.id,
					size: b.c.XS
				}), M && o.a.createElement(h.b, {
					className: O.a.OutboundLink,
					isSponsored: N.isSponsored,
					postId: N.id,
					href: Object(f.E)(e.post),
					source: N.source
				}, o.a.createElement(g.a, {
					className: O.a.outboundLinkIcon
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
			e.exports = JSON.parse('{"v":"5.7.1","fr":30,"ip":0,"op":40,"w":626,"h":626,"nm":"Comp 1","ddd":0,"assets":[{"id":"image_0","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_1","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_2","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_3","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_4","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_5","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_6","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_7","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_8","w":88,"h":83,"u":"","p":"data:image/png;base64,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","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Pre-comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[715.167,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":-0.4,"op":23.6,"st":-0.4,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Pre-comp 3","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[736.722,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":13.8,"op":34.8,"st":13.8,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Pre-comp 4","refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[306.5,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":13.2,"op":40.2,"st":13.2,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Pre-comp 5","refId":"comp_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[196.056,418.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4,"op":28,"st":4,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"Pre-comp 6","refId":"comp_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[393.833,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":15.8,"op":39.8,"st":15.8,"bm":0},{"ddd":0,"ind":6,"ty":0,"nm":"Pre-comp 7","refId":"comp_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[89.167,418.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.8,"op":31.8,"st":4.8,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"Pre-comp 8","refId":"comp_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[814.944,370.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":11.8,"op":41.8,"st":11.8,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"Pre-comp 9","refId":"comp_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[919.611,250.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-65,65,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.2,"op":28.2,"st":4.2,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"Pre-comp 10","refId":"comp_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[557.389,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[-120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":8.6,"op":35.6,"st":8.6,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"Pre-comp 1","refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[83.167,398.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[120,120,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":6.6,"op":30.6,"st":6.6,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"Pre-comp 3","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[648.722,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":5.8,"op":26.8,"st":5.8,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"Pre-comp 5","refId":"comp_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1040.056,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":16,"op":40,"st":16,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"Pre-comp 7","refId":"comp_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[933.167,190.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[60,60,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":12.8,"op":39.8,"st":12.8,"bm":0},{"ddd":0,"ind":14,"ty":0,"nm":"Pre-comp 8","refId":"comp_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[134.944,270.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[70,70,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":4.8,"op":34.8,"st":4.8,"bm":0},{"ddd":0,"ind":15,"ty":0,"nm":"Pre-comp 9","refId":"comp_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[503.611,358.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[50,50,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":16.2,"op":40.2,"st":16.2,"bm":0},{"ddd":0,"ind":16,"ty":0,"nm":"Pre-comp 10","refId":"comp_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[293.389,350.5,0],"ix":2},"a":{"a":0,"k":[75,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":150,"h":800,"ip":2.6,"op":29.6,"st":2.6,"bm":0}]},{"id":"comp_1","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"1/Confetti_2.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":24,"s":[406.452]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78,34,0],"to":[0,118.333,0],"ti":[0,-118.333,0]},{"t":24,"s":[78,744,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_2","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"3/Confetti_2.ai","cl":"ai","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[80.333,32,0],"to":[0,122.667,0],"ti":[0,-122.667,0]},{"t":21,"s":[80.333,768,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":14,"s":[150,150,100]},{"t":21,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":21,"st":0,"bm":0}]},{"id":"comp_3","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"4/Confetti_2.ai","cl":"ai","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[75,37,0],"to":[0,121.333,0],"ti":[0,-121.333,0]},{"t":27,"s":[75,765,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]},{"id":"comp_4","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"5/Confetti_2.ai","cl":"ai","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77.333,31,0],"to":[0,121,0],"ti":[0,-121,0]},{"t":24,"s":[77.333,757,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_5","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"6/Confetti_2.ai","cl":"ai","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[76.667,35,0],"to":[0,121,0],"ti":[0,-121,0]},{"t":24,"s":[76.667,761,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_6","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"7/Confetti_2.ai","cl":"ai","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77,35,0],"to":[0,120.333,0],"ti":[0,-120.333,0]},{"t":27,"s":[77,757,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]},{"id":"comp_7","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"8/Confetti_2.ai","cl":"ai","refId":"image_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[77.667,37,0],"to":[0,118,0],"ti":[0,-118,0]},{"t":30,"s":[77.667,745,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":10,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":20,"s":[150,150,100]},{"t":30,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":30,"st":0,"bm":0}]},{"id":"comp_8","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"9/Confetti_2.ai","cl":"ai","refId":"image_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78,35,0],"to":[0,120,0],"ti":[0,-120,0]},{"t":24,"s":[78,755,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[150,150,100]},{"t":24,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":24,"st":0,"bm":0}]},{"id":"comp_9","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"10/Confetti_2.ai","cl":"ai","refId":"image_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[406.452]},{"t":148.7998046875,"s":[720]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[78.667,28,0],"to":[0,123.333,0],"ti":[0,-123.333,0]},{"t":27,"s":[78.667,768,0]}],"ix":2},"a":{"a":0,"k":[44,41.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[40,40,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[150,150,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":18,"s":[150,150,100]},{"t":27,"s":[10,10,100]}],"ix":6}},"ao":0,"ip":0,"op":27,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"all anim","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[313,313,0],"ix":2},"a":{"a":0,"k":[562.5,562.5,0],"ix":1},"s":{"a":0,"k":[56,56,100],"ix":6}},"ao":0,"w":1125,"h":1125,"ip":0,"op":39,"st":0,"bm":0}],"markers":[]}')
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/hooks/useTracking.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/helpers/trackers/powerups.ts"),
				l = s("./src/reddit/actions/gold/powerups.ts"),
				m = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/ApiContext.tsx"),
				h = s("./src/reddit/selectors/gold/powerups.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				y = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				E = s("./src/reddit/components/PowerupsSidebar/PowerupsProgressBar/index.m.less"),
				k = s.n(E);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var w = e => {
					const {
						className: t,
						powerups: s
					} = e, {
						tier: n,
						count: r,
						tiersInfo: i
					} = s, a = (i[n] || i[n - 1]).powerupsCost;
					if (!a) return null;
					const c = Math.min(a, r) / a;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement("div", {
						className: k.a.titleRow
					}, o.a.createElement("span", null, j._("Powerups", null, {
						hk: "DrcXp"
					})), o.a.createElement("span", null, r, "/", a)), o.a.createElement("div", {
						className: k.a.barRow
					}, o.a.createElement("div", {
						className: k.a.track
					}), o.a.createElement("div", {
						className: k.a.progress,
						style: {
							width: "".concat(100 * c, "%")
						}
					}, o.a.createElement(y.a, {
						className: k.a.icon
					}))))
				},
				_ = s("./node_modules/lottie-web/build/player/lottie.js"),
				I = s.n(_),
				P = s("./node_modules/react-motion/lib/react-motion.js"),
				S = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/components/PowerupsSidebar/Supporters/confetti-animation.json"),
				N = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				A = s("./src/reddit/models/Gold/Powerups/index.ts"),
				M = s("./src/reddit/components/UserIcon/index.tsx"),
				L = s("./src/reddit/controls/InternalLink/index.tsx"),
				R = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				F = s("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				B = s.n(F);
			var D = function(e) {
					const {
						className: t,
						supporter: s
					} = e, {
						score: n,
						supporterInfo: r
					} = s, i = r ? r.name : N.fbt._({
						"*": "Anonymous Heroes",
						_1: "Anonymous Hero"
					}, [N.fbt._plural(n)], {
						hk: "8kyEI"
					}).toString(), a = r && r.icon.url ? r.icon.url : void 0, c = !!r && r.profile.isNsfw, d = n === A.b ? y.a : R.a, l = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: B.a.userIconContainer
					}, o.a.createElement(M.a, {
						userName: i,
						iconUrl: a,
						className: B.a.userIcon,
						isNSFW: c
					})), o.a.createElement("h4", {
						className: B.a.name
					}, i));
					return o.a.createElement("div", {
						className: Object(S.a)(t, B.a.container)
					}, r ? o.a.createElement(L.a, {
						className: B.a.user,
						to: "/user/".concat(i, "/")
					}, l) : o.a.createElement("div", {
						className: B.a.user
					}, l), o.a.createElement("div", {
						className: B.a.counter
					}, o.a.createElement(d, {
						className: B.a.powerupIcon
					}), n))
				},
				W = s("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				H = s.n(W);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = 100, G = 302, K = 40, q = e => "".concat(e.lastSupportedAt, "__").concat(e.score), z = (e, t) => ({
				key: q(e),
				data: {
					supporter: e,
					isInitial: t
				}
			}), J = () => ({
				width: G,
				height: Object(P.spring)(0)
			}), X = () => ({
				height: 0,
				width: 0,
				motionProgress: 0
			}), Q = e => {
				e && !e.children.length && I.a.loadAnimation({
					container: e,
					renderer: "svg",
					loop: !1,
					autoplay: !0,
					animationData: T,
					rendererSettings: {
						hideOnTransparent: !0
					}
				})
			};
			class Y extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: e.supporters.slice(0, e.maxSupporters || U).map(e => z(e, !0))
					}
				}
				render() {
					const {
						className: e
					} = this.props;
					return o.a.createElement("div", {
						className: Object(S.a)(H.a.container, e)
					}, o.a.createElement(P.TransitionMotion, {
						willLeave: J,
						willEnter: X,
						styles: this.state.items.map(e => Object.assign(Object.assign({}, e), {
							style: {
								width: Object(P.spring)(G),
								height: Object(P.spring)(K),
								motionProgress: Object(P.spring)(1)
							}
						}))
					}, e => o.a.createElement(o.a.Fragment, null, e.map(e => {
						const t = !e.data.isInitial && 1 === e.style.motionProgress;
						return o.a.createElement("div", {
							className: H.a.item,
							key: e.key,
							style: {
								zIndex: t ? 100 : "unset"
							}
						}, t && o.a.createElement("div", {
							className: H.a.animation,
							ref: Q
						}), o.a.createElement("div", {
							className: H.a.itemCropper,
							style: Object.assign({}, e.style)
						}, o.a.createElement(D, {
							supporter: e.data.supporter
						})))
					}))))
				}
				static getDerivedStateFromProps(e, t) {
					const s = t.items;
					return {
						items: e.supporters.slice(0, e.maxSupporters || U).map(e => s.some(t => t.key === q(e)) ? z(e, !0) : z(e, !1))
					}
				}
			}
			var Z = o.a.memo(Y),
				$ = s("./src/reddit/components/PowerupsSidebar/index.m.less"),
				ee = s.n($);
			const {
				fbt: te
			} = s("./node_modules/fbt/lib/FbtPublic.js"), se = Object(a.c)({
				currentUser: g.i,
				powerups: h.f,
				subreddit: x.T,
				topSupporters: h.g,
				userPowerupsData: h.l
			}), ne = Object(u.c)(e => {
				const {
					className: t,
					currentUser: s,
					powerups: n,
					subreddit: a,
					topSupporters: u,
					userPowerupsData: b
				} = e, h = Object(r.c)(), x = Object(i.a)();
				if (!n || 1 === n.tiersInfo.length || !a) return null;
				const g = !!(null == b ? void 0 : b.freeCount);
				return o.a.createElement(f.a, null, o.a.createElement(v.a, {
					className: t,
					title: te._("Powerups", null, {
						hk: "DrcXp"
					})
				}, o.a.createElement("div", {
					className: ee.a.container
				}, o.a.createElement("div", {
					className: ee.a.titleGroup
				}, o.a.createElement("h2", {
					className: ee.a.title
				}, te._("Powerup and unlock perks for {subreddit name}", [te._param("subreddit name", a.displayText)], {
					hk: "2gDqtV"
				})), o.a.createElement("button", {
					className: ee.a.perksButton,
					onClick: () => {
						x(Object(d.d)()), h(s ? Object(p.h)(c.a.ECON_POWERUPS_MARKETING) : Object(m.h)())
					}
				}, te._("Show Perks", null, {
					hk: "3TgZRL"
				}))), o.a.createElement("div", {
					className: ee.a.group
				}, o.a.createElement("h3", {
					className: ee.a.subTitle
				}, te._("Community heroes", null, {
					hk: "1hGdba"
				})), o.a.createElement(w, {
					className: ee.a.progress,
					powerups: n
				}), !!(null == u ? void 0 : u.length) && o.a.createElement(Z, {
					supporters: u,
					className: ee.a.heroes,
					maxSupporters: 50
				})), o.a.createElement("div", {
					className: ee.a.group
				}, o.a.createElement(C.i, {
					className: ee.a.button,
					onClick: () => {
						x(Object(d.d)()), h(Object(l.b)())
					}
				}, g ? te._("Apply Your Free Powerup", null, {
					hk: "3HJ66L"
				}) : te._("Become a Hero", null, {
					hk: "3IZNw3"
				})), g && o.a.createElement("div", {
					className: ee.a.premiumDescription
				}, o.a.createElement("div", {
					className: ee.a.premiumIconWrapper
				}, o.a.createElement(O.a, {
					className: ee.a.premiumIcon
				})), o.a.createElement("span", null, te._("Premium gives you 1 free Powerup", null, {
					hk: "3moHy5"
				})))))))
			});
			t.a = Object(b.b)(Object(r.b)(se)(ne))
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
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {}
				}),
				i = e => {
					let {
						children: t
					} = e;
					const [s, i] = Object(n.useState)(0), [a, c] = Object(n.useState)(!1), d = {
						currentTime: s,
						setCurrentTime: i,
						isLive: a,
						setIsLive: c
					};
					return o.a.createElement(r.Provider, {
						value: d
					}, t)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = e => "PublicAccessNetwork--VideoShare--Modal-".concat(e),
				r = Object(n.a)({
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
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const u = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				b = c.a.wrapped(e => r.a.createElement("div", {
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
			t.a = u(Object(a.a)(b))
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
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/components/ListingPostList/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/elementIds.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				v = s("./src/reddit/constants/page.ts"),
				C = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				E = s("./src/reddit/helpers/trackers/lightbox.ts"),
				k = s("./src/reddit/helpers/trackers/screenview.ts"),
				j = s("./src/reddit/selectors/chatPost.ts"),
				w = s("./src/reddit/selectors/commentsListTruncated.ts"),
				_ = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				I = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				S = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/controls/InternalLink/index.tsx"),
				N = s("./src/reddit/helpers/name/index.ts"),
				A = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				M = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				L = s.n(M);
			const {
				fbt: R
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
						className: Object(S.a)(L.a.footer, t),
						onMouseDown: s,
						to: o.url,
						style: {
							backgroundColor: r
						}
					}, a.a.createElement("div", {
						className: L.a.background
					}), a.a.createElement("div", {
						className: L.a.layout
					}, n ? R._("See more posts like this in {subredditName}", [R._param("subredditName", Object(N.c)(o.displayText))], {
						hk: "pLxW5"
					}) : R._("Continue browsing in {subredditName}", [R._param("subredditName", o.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(A.a, {
						className: L.a.arrow
					})))
				}),
				B = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				D = s.n(B);
			const W = Object(d.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, w.a, _.b, (e, t, s) => !((!t || s) && e)),
				H = Object(d.c)({
					isChatPost: j.d,
					isGQLLoggedIn: P.H,
					isLoggedIn: P.I,
					listingBelowVariant: I.b,
					shouldShowSubredditUpsell: W
				}),
				V = Object(c.b)(H, e => ({
					loadMorePosts: t => e(Object(b.r)({
						sort: l.O.HOT,
						subredditName: t
					}))
				}));
			class U extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(g.d) : null, this.onViewed = (e, t) => Object(k.f)(this.listingKey(), l.O.TOP, t, e, l.Sb.WEEK), this.onFooterClick = e => {
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
					}, e && !Object(f.ed)(e) ? Object(I.a)(e) ? n.fbt._("More posts like this", null, {
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
						shouldShowSubredditUpsell: c,
						subredditOrProfile: d
					} = this.props, l = i && Object(O.a)(i), m = !!o && !Object(f.ed)(o), p = i && i.id;
					return s || n || t || l || !c ? null : a.a.createElement("div", {
						className: D.a.container
					}, this.renderSmallBanner(), a.a.createElement(h.a, {
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
						subredditOrProfile: d
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
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			s("./src/reddit/constants/colors.ts").a.overlayReportFlow;
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"))).then(e => e.default),
				LoadingComponent: r
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
				c = s.n(a);
			const d = i.a.span("TextWrapper", c.a),
				l = i.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(d, null, e.text, " ")), "Button", c.a),
				m = i.a.wrapped(l, "ApproveButton", c.a),
				p = i.a.wrapped(l, "RemoveButton", c.a),
				u = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
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
				c = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				d = s.n(c);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: c
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === c && o.a.createElement("div", {
					className: Object(r.a)(d.a.toolbar, d.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), o.a.createElement("div", {
					className: Object(r.a)(d.a.content, {
						[d.a.mCollapsed]: s
					})
				}, o.a.createElement("div", {
					className: Object(r.a)(d.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === c && o.a.createElement("div", {
					className: Object(r.a)(d.a.toolbar, d.a.bottomToolbar, Object(a.a)({
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
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				h = s("./src/reddit/actions/tooltip.ts"),
				x = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				g = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				f = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				E = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				k = s("./src/reddit/icons/fonts/Link/index.tsx"),
				j = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/models/Subreddit/index.ts"),
				_ = s("./src/reddit/routes/postCreation/constants.ts"),
				I = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				T = s("./src/reddit/components/ShareMenu/index.m.less"),
				N = s.n(T),
				A = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const M = Object(x.a)(v.a),
				L = l()(),
				R = Object(c.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(S.b)(s)(e)
					},
					videoShareModalOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(I.b)(Object(g.a)(s))(e)
					},
					inRpanSharingTimestampExperiment: P.e
				}),
				F = Object(i.b)(R, (e, t) => {
					var {
						dropdownId: s,
						permalink: n
					} = t, o = A(t, ["dropdownId", "permalink"]);
					return {
						toggleDropdown: () => {
							e(Object(h.h)({
								tooltipId: s
							}))
						},
						copyLink: t => e(Object(u.v)(t)),
						onToggleVideoShareModal: () => {
							o.post && e(Object(b.d)(o.post.id)), e(Object(p.i)(Object(g.a)(o.post.id)))
						}
					}
				}),
				B = r.a.memo(e => {
					const t = !e.subreddit || e.subreddit && e.subreddit.type === w.e.Public,
						s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
					return r.a.createElement("div", {
						className: e.className,
						onClick: e.toggleDropdown,
						id: e.dropdownId
					}, e.children, r.a.createElement(M, {
						className: N.a.dropdown,
						isOpen: e.dropdownIsOpen,
						tooltipId: e.dropdownId
					}, r.a.createElement(C.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s,
								inRpanSharingTimestampExperiment: n
							} = e;
							if (s && Object(j.i)(s))
								if (n) e.sendEventWithName("share_copy", {
									referralId: L
								}), e.onToggleVideoShareModal();
								else {
									const t = Object(O.a)(s.id),
										n = l()(),
										o = Object(m.a)(t, {
											[f.q]: n,
											utm_source: "share",
											utm_medium: "web2x",
											utm_content: "rpan_stream",
											context: 3
										});
									e.sendEventWithName("share_copy", {
										referralId: n
									}), e.copyLink(o)
								}
							else {
								const s = Object(m.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), e.copyLink(s)
							}
						}
					}, r.a.createElement(k.a, {
						className: N.a.linkIcon
					})), s && r.a.createElement(C.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open("".concat(_.b, "?source_id=").concat(e.post.id), "_blank")
						}
					}, r.a.createElement(y.a, {
						className: N.a.crosspostIcon
					})), t && r.a.createElement(C.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(E.a, {
						className: N.a.embedIcon
					}))), e.videoShareModalOpen && e.post && r.a.createElement(g.b, {
						className: N.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: L
							}), e.copyLink(t)), e.onToggleVideoShareModal()
						},
						url: Object(m.a)(Object(O.a)(e.post.id), {
							[f.q]: L,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = F(Object(a.i)(B))
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
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/config.ts"),
				u = s("./src/reddit/components/BannerAd/index.tsx"),
				b = s("./src/reddit/components/FakeBannerAd/index.tsx"),
				h = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/helpers/adCount/index.ts"),
				v = s("./src/reddit/helpers/trackers/ads.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				y = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				E = s.n(y),
				k = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/lessComponent.tsx");
			const w = Object(r.a)({
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
				_ = Object(m.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, o = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(f.a)(s, o, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch,
					isSubredditOrCommentsPage: e => Object(O.r)(e) === k.Bb.SUBREDDIT || Object(O.r)(e) === k.Bb.COMMENTS
				}),
				I = Object(l.b)(_),
				P = j.a.wrapped(u.a, "BannerAd", E.a),
				S = j.a.wrapped(g.a, "ThemedWidget", E.a),
				T = j.a.div("SidebarAdPlaceholder", E.a),
				N = (e, t, s) => !!s && (!(window.aax && window.aax.getAbpStatus && window.aax.getAbpStatus()) && (t === k.c.BELOW_THE_FOLD || t === k.c.ABOVE_THE_FOLD && p.a.dfpRefreshAtfSlotTestSubreddits.has(e.toLowerCase()))),
				A = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				M = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(C.G)(e.media) && e.media.content)),
				L = e => !!e && e.isBlank,
				R = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				F = Object(x.c)(class extends d.a.Component {
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
						const e = a()(0, R.length - 1),
							{
								img: t,
								href: s
							} = R[e],
							{
								className: n,
								placement: o,
								redditStyle: r,
								removeSidebarSpacer: i
							} = this.props,
							c = i ? d.a.Fragment : h.a;
						return d.a.createElement(c, null, d.a.createElement(S, {
							className: n,
							contentOnly: !0,
							redditStyle: r
						}, d.a.createElement(b.a, {
							img: t,
							href: s,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, o)
						})))
					}
				});
			class B extends d.a.Component {
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
						placement: c,
						sizes: l,
						position: m,
						redditStyle: p,
						forcePlaceholder: u,
						forceHouseAd: b,
						waitForProgrammatic: x,
						isSubredditOrCommentsPage: g,
						removeSidebarSpacer: f
					} = this.props, v = n.fbt._("advertisement", null, {
						hk: "35HaIb"
					}), C = f ? d.a.Fragment : h.a;
					return u || t || !M(s) && x ? d.a.createElement(C, null, d.a.createElement(S, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, d.a.createElement(T, {
						"data-before-content": v
					}))) : b ? d.a.createElement(F, {
						className: e,
						redditStyle: p,
						placement: c,
						removeSidebarSpacer: f
					}) : M(s) ? d.a.createElement(C, null, d.a.createElement(w, {
						post: s,
						refreshKey: i,
						listingName: a,
						placement: c,
						placementIndex: r
					})) : d.a.createElement(C, null, d.a.createElement(S, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, L(s) && d.a.createElement(w, {
						post: s,
						refreshKey: i,
						listingName: a,
						placement: c,
						placementIndex: r
					}), d.a.createElement(P, {
						id: A(c, o, r),
						isRefreshableAd: N(a, c, g),
						incrementRefreshCounter: this.incrementRefreshCounter,
						sizes: l,
						placement: c,
						listingName: a,
						refreshKey: i,
						refreshCount: this.state.refreshCount,
						position: m,
						dataBeforeContent: v
					})))
				}
			}
			t.a = I(B)
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/comments.ts"),
				c = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = s("./src/reddit/selectors/user.ts"),
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
					}) && !Object(d.z)(e) && !Object(c.a)(e),
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
				c = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.a("Link", d.a), p = Object(a.t)({
				isFrontpage: a.y
			});
			t.a = p(e => o.a.createElement(i.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: d.a.LinkContainer
			}, o.a.createElement("div", {
				className: d.a.Column
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
				href: "https://www.reddit.com/posts/2020/"
			}, l._("Rereddit", null, {
				hk: "1z3k7C"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), o.a.createElement("div", {
				className: d.a.Column
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
				className: d.a.Copyright
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
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var u = e => a.a.createElement("div", {
					className: Object(n.a)(e.className, m.a.container),
					style: e.style
				}, a.a.createElement(d.i, {
					className: m.a.button,
					onClick: () => window.scroll(0, 0)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
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
			const y = c.e[1] + 24,
				E = h.f + 8 + 152 + 32 + 16,
				k = E + y + 8,
				j = v.a.div("Container", f.a),
				w = v.a.wrapped(e => {
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
				_ = e => {
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
			class I extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > k,
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
					}, c.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
					return a.a.createElement(j, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(_, {
						isFakeOverlay: t,
						isSticky: r
					}, e, s, !o && a.a.createElement(b.a, null)), !this.props.hideBackToTop && a.a.createElement(w, null))
				}
			}
			const P = Object(x.t)();
			t.a = P(I)
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
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				m = s("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(c.a, "OutboundLinkIcon", l.a),
				u = m.a.div("SourceLinkWrapper", l.a);

			function b(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: c,
					isSponsored: d
				} = s;
				return c ? o.a.createElement(u, {
					className: Object(r.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(a.a, {
					href: c.url,
					isSponsored: d,
					postId: s.id,
					source: c
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
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/widgets.ts"),
				m = s("./src/reddit/actions/subreddit.ts"),
				p = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				h = s("./src/reddit/components/SubredditNav/index.m.less"),
				x = s.n(h);

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
					}, r), o.a.createElement("span", null, t), o.a.createElement(b.b, {
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
				k = e => {
					var {
						className: t
					} = e, s = f(e, ["className"]);
					return o.a.createElement("div", g({
						className: Object(u.a)(x.a.subNavContainer, t)
					}, s))
				},
				j = e => {
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
					fbt: w
				} = s("./node_modules/fbt/lib/FbtPublic.js");
			const _ = Object(i.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var I = Object(c.t)()(Object(r.b)(_, (e, t) => ({
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
							Object(c.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, w._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				P = s("./src/lib/linkMatchers/index.ts");
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
					return o.a.createElement(k, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, o.a.createElement(C, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), o.a.createElement(j, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var T = S;
			const N = e => {
				const t = e.url && Object(P.g)(P.e, e.url);
				return t ? t.url : e.url
			};
			var A = e => e.menuItem.url ? o.a.createElement(O, {
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
				M = s("./src/lib/constants/index.ts");
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const R = Object(c.t)(),
				F = [M.Bb.SUBREDDIT, M.Bb.COMMENTS, M.Bb.COLLECTION_COMMENTS],
				B = Object(i.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && F.indexOf(t.pageLayer.meta.name) > -1
				});
			var D = R(Object(r.b)(B, (e, t) => ({
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
					}, L._("Posts", null, {
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
				q = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = function(e, t) {
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
				} = e, r = z(e, ["className", "children", "isTopBannerVariant"]);
				const i = Object(q.a)(r);
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
				Y = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, r = !!n && !!n.meta && n.meta.name === M.Bb.SUBREDDIT_WIKI, i = "wiki/".concat(Q.i), a = t.endsWith("/") ? t + i : "".concat(t, "/").concat(i);
				return o.a.createElement(O, {
					isActive: r,
					isTopBannerVariant: s,
					to: a,
					onClick: () => e.sendEvent(Object(Y.g)())
				}, Z._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ee = Object(d.a)("spPolls", I),
				te = Object(c.t)(),
				se = Object(i.c)({
					layout: c.N,
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
			}), !!e.widget.data.length && e.widget.data.map((t, s) => o.a.createElement(A, {
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
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				is2020: "_2CLbCoThTVSANDpeJGlI6a"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/hooks/useButtons2020.ts"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = s.n(d),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var b = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const h = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = b(e, ["border", "small"]);
					return t ? r.a.createElement(i.i, u({}, n, {
						className: Object(m.a)(n.className, {
							[l.a.isSmall]: s
						})
					})) : r.a.createElement(i.o, u({}, n, {
						className: Object(m.a)(n.className, {
							[l.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", l.a),
				x = e => {
					var {
						border: t,
						small: s
					} = e, n = b(e, ["border", "small"]);
					return Object(a.a)() ? r.a.createElement(i.q, u({}, n, {
						priority: t ? i.b.Primary : i.b.Plain,
						className: Object(m.a)(n.className, l.a.is2020),
						size: s ? i.c.S : i.c.M
					})) : r.a.createElement(h, u({}, n, {
						border: t,
						small: s,
						className: Object(m.a)(n.className, {
							[l.a.isSmall]: s
						})
					}))
				},
				g = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? n.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : n.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? n.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : n.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = p.a.wrapped(e => {
					var {
						border: t,
						small: s,
						buttonType: n
					} = e, o = b(e, ["border", "small", "buttonType"]);
					const a = g(n),
						c = Object(m.a)(o.className, {
							[l.a.isSmall]: s
						});
					return t ? r.a.createElement(i.l, u({}, o, {
						className: c
					}), a) : r.a.createElement(i.o, u({}, o, {
						className: c
					}), a)
				}, "UnsubscribeButton", l.a),
				v = e => {
					var {
						buttonType: t,
						border: s,
						small: n
					} = e, o = b(e, ["buttonType", "border", "small"]);
					return Object(a.a)() ? r.a.createElement(i.q, u({}, o, {
						priority: s ? i.b.Secondary : i.b.Plain,
						className: Object(m.a)(o.className, l.a.is2020),
						size: n ? i.c.S : i.c.M,
						text: g(t)
					})) : r.a.createElement(f, u({}, o, {
						border: s,
						small: n,
						buttonType: t,
						className: Object(m.a)(o.className, {
							[l.a.isSmall]: n
						})
					}))
				};
			class C extends r.a.Component {
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
						id: s,
						small: n = !1
					} = this.props, o = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: n
					};
					return this.props.userIsSubscriber ? r.a.createElement(v, u({}, o, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(x, u({}, o, {
						id: s
					}), this.props.children, Object(c.a)({
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
				r = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/contexts/Buttons2020.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				b = s.n(u),
				h = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/lessComponent.tsx");

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
			const v = x.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = f(e, ["small", "shouldReverseColor"]);
					const i = Object(r.b)(),
						a = s ? d.l : d.i;
					return o.a.createElement(a, g({}, n, {
						className: Object(h.a)(n.className, {
							[b.a.isLarge]: !t
						}),
						"data-ignore-click": !!i
					}))
				}, "SubscribeInternalButton", b.a),
				C = x.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, i = f(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = Object(r.b)(),
						c = n ? d.i : d.l;
					return o.a.createElement(c, g({}, i, {
						className: Object(h.a)(i.className, {
							[b.a.isLarge]: !t
						}),
						"data-ignore-click": !!a
					}))
				}, "UnsubscribeButton", b.a),
				O = x.a.wrapped(l.a, "Checkmark", b.a),
				y = x.a.wrapped(m.a, "Plus", b.a),
				E = x.a.div("ButtonSpacer", b.a);
			class k extends o.a.Component {
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
					}, this.renderUnsubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: r,
								onUnsubscribe: i,
								postId: a,
								sendEvent: c,
								small: l = !1,
								size: m,
								userIsSubscriber: u,
								doNotHideOtherSubscribeButtons: x,
								getEventFactory: v,
								onSubscriptionsRequested: y
							} = t,
							E = f(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							k = this.state.isHovered,
							j = Object(p.a)({
								type: n.type,
								key: k ? "unsubscribe" : "subscribed"
							});
						return e ? o.a.createElement(d.q, g({
							className: Object(h.a)(s, b.a.Button2020),
							priority: E.shouldReverseColor ? d.b.Primary : d.b.Secondary,
							Icon: l || !l && !k ? O : void 0,
							text: !l && j,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: m || (l ? d.c.XS : d.c.S)
						}, E)) : o.a.createElement(C, g({
							className: Object(h.a)(s, {
								[b.a.isLarge]: !l,
								[b.a.unsubscribeButtonHoverStyles]: !l
							}),
							onClick: this.onClick,
							small: l,
							belongsToType: n.type,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}, E), l && o.a.createElement(O, null), !l && !k && o.a.createElement(O, null), !l && j)
					}, this.renderSubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: r,
								onUnsubscribe: i,
								postId: a,
								sendEvent: c,
								small: l = !1,
								size: m,
								userIsSubscriber: u,
								doNotHideOtherSubscribeButtons: x,
								getEventFactory: C,
								onSubscriptionsRequested: O
							} = t,
							E = f(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							k = Object(p.a)({
								type: n.type,
								key: "subscribe"
							});
						return e ? o.a.createElement(d.q, g({
							className: s,
							priority: E.shouldReverseColor ? d.b.Secondary : d.b.Primary,
							Icon: y,
							size: m || (l ? d.c.XS : d.c.S),
							text: !l && k,
							onClick: this.onClick
						}, E, {
							id: "subscribe-button-".concat(a),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						})) : o.a.createElement(v, g({
							className: Object(h.a)(s, {
								[b.a.isLarge]: !l
							}),
							onClick: this.onClick,
							small: l
						}, E, {
							id: "subscribe-button-".concat(a),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}), o.a.createElement(y, null), !l && k)
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? o.a.createElement(c.a.Consumer, null, this.renderUnsubscribeButton) : e ? null : o.a.createElement(E, null) : o.a.createElement(c.a.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(a.a)(Object(i.c)(k))
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
				c = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				d = s.n(c);
			const l = i.a.div("Rule", d.a),
				m = i.a.div("RuleIndex", d.a),
				p = i.a.div("RuleTitle", d.a);
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
				c = s.n(a),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return o.a.createElement("div", s, o.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
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
				return w
			})), s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
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
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				k = s.n(E);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => r.a.createElement(b.a, {
					className: Object(d.a)(k.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: k.a.container
				}, e.isLoading ? r.a.createElement(g.a, {
					className: k.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: k.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(I, j({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(x.o, {
					className: k.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				_ = Object(c.c)({
					hideNSFWPref: O.A
				}),
				I = Object(i.b)(_)(e => r.a.createElement("div", {
					className: k.a.communityItemContainer
				}, r.a.createElement(v.a, {
					widthRight: h.t
				}, r.a.createElement("div", {
					className: k.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: k.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(f.a, {
					className: k.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: k.a.communityDescriptionContainer
				}, r.a.createElement(a.a, {
					className: k.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(y.b)(e.name, e.type),
					to: Object(y.a)(e.name, e.type)
				}, Object(y.b)(e.name, e.type)), r.a.createElement("div", {
					className: k.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: k.a.subscriberCount
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
					className: Object(d.a)(k.a.communityCta, k.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(x.o, {
					className: Object(d.a)(k.a.communityCta, {
						[k.a.showOnHover]: e.showTertiaryButtonOnHover
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
					className: k.a.communityDescription
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
				return t === n.a.PROFILE ? Object(o.d)(e) : Object(o.c)(e)
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
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ"
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
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/trackers/postFlair.ts"),
				C = s("./src/reddit/models/Widgets/index.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = s.n(y);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const w = 129,
				_ = Object(h.t)({
					filterName: e => Object(h.S)(e)[b.g],
					url: e => Object(h.X)(e)
				}),
				I = Object(a.c)({
					subredditId: (e, t) => Object(O.G)(e, t.subredditName)
				}),
				P = Object(i.b)(I),
				S = l.a.div("WidgetContent", E.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, o = j(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(c.a)(E.a.StyledFlair, t === C.d.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: s,
							[E.a["m-selected"]]: o.isSelected
						}),
						onMouseDown: n
					}, r.a.createElement(m.b, k({}, o, {
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
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > w && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(x.o, {
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
					} = this.state, s = t ? w : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
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
			t.a = _(P(Object(p.c)(N)))
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
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				m = s("./src/reddit/helpers/dom/index.ts"),
				p = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				u = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				h = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				g = s.n(x);
			const f = c.a.div("RuleShortName", g.a),
				v = c.a.div("RuleIndex", g.a),
				C = c.a.div("RuleTitle", g.a),
				O = c.a.div("RuleDescription", g.a),
				y = c.a.wrapped(d.a, "RawHTMLDisplay", g.a),
				E = {};
			class k extends r.a.Component {
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
					return e.display === h.e.FULL
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
					}, r.a.createElement(b.a, null, r.a.createElement(v, null, "".concat(e.humanIndex, ".")), r.a.createElement(C, null, "".concat(e.rule.shortName)), r.a.createElement("div", null, !n(e) && o && (t.isVisible ? r.a.createElement(u.a, {
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
			const j = e => e.rules.length > 0 ? r.a.createElement(i.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", "r/".concat(e.subredditName))], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return r.a.createElement(k, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null;
			t.b = e => r.a.createElement(j, {
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
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
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
				k = e => {
					const t = y(e);
					return Object(v.f)(t)
				};
			var j = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				w = s.n(j);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = Object(m.t)(), P = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.m)(e, t) || void 0,
						n = t.redditStyle || Object(g.m)(e, {
							subredditId: s
						}),
						o = Object(f.T)(e);
					return n || o
				},
				nigtmode: f.T,
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
						e && t && this.props.sendEvent(b(e, t)), this.setState({
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
					return e.backgroundColor = O(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = k(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: i,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? w.a.widgetContentOnly : w.a.widgetContent, b = !n && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, w.a.widgetBackground, {
							[w.a.redditStyle]: n,
							[w.a.clickable]: !!i,
							[w.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: h
					}, c && o.a.createElement("div", {
						className: w.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(a.a)(w.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(a.a)(u, {
							[w.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.o, {
						className: w.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, _._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = I(P(Object(c.a)(Object(l.c)(S))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Le
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/linkMatchers/index.ts"),
				b = s("./src/reddit/models/Image/index.tsx"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
				k = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(h.a)(e).button;
					return o.a.createElement(d.l, {
						className: y(t),
						style: O(t, s, n)
					}, t.kind === x.f.Text && o.a.createElement("span", {
						className: t.hoverState ? C.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === x.f.Text && o.a.createElement("span", {
						className: C.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => o.a.createElement(l.b, {
					href: E(e.button),
					isSponsored: !1,
					source: null
				}, o.a.createElement(k, e)),
				w = p.a.wrapped(a.a, "RawHTMLDisplay", C.a);
			var _ = Object(r.b)(() => Object(i.c)({
					forceRedditStyle: g.m,
					isNightmodeOn: f.T
				}))(e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && o.a.createElement(w, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== x.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== x.f.Image || e.hoverState.url !== b.c)).map(t => o.a.createElement(j, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				P = s("./src/lib/humanizeDate/index.ts"),
				S = s("./src/reddit/controls/TextButton/index.tsx"),
				T = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				N = s.n(T);
			const A = 100,
				M = {
					isExpanded: !1
				},
				L = p.a.wrapped(a.a, "RawHTMLDisplay", N.a),
				R = p.a.div("EventContainer", N.a),
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
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > A ? o.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, A), o.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? I.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : I.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : o.a.createElement(W, null, e.text)
				}
			}
			var U = e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => o.a.createElement(R, {
					key: "".concat(s, "-").concat(t.title)
				}, o.a.createElement(F, null, t.titleHtml ? o.a.createElement(L, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && o.a.createElement(B, null, Object(P.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && o.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && o.a.createElement(D, null, t.locationHtml ? o.a.createElement(L, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && o.a.createElement(V, {
					text: t.description
				})))),
				G = s("./src/reddit/components/TrackingHelper/index.tsx"),
				K = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var q = Object(G.c)(e => o.a.createElement(K.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const z = Object(i.c)({
					stylesheet: e => e.stylesheets
				}),
				J = Object(r.b)(z),
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
					return o.a.createElement(c.a, {
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
			var Y = J(Q),
				Z = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				$ = s.n(Z);
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
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
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
							alt: I.fbt._("Widget image", null, {
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
				ie = s("./src/config.ts"),
				ae = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = s("./src/lib/opener/index.ts"),
				de = s("./src/reddit/components/Flair/index.tsx"),
				le = s("./src/reddit/controls/InternalLink/index.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				pe = s("./src/reddit/models/Flair/index.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				be = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				he = s.n(be);
			const xe = p.a.a("ExternalLink", he.a),
				ge = p.a.div("ModeratorListItem", he.a),
				fe = p.a.div("Username", he.a),
				ve = p.a.wrapped(de.b, "FlairComponent", he.a),
				Ce = e => e.authorFlairType === pe.f.Richtext ? {
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
				Oe = e => o.a.createElement(fe, null, "u/".concat(e)),
				ye = p.a.wrapped(le.a, "InternalLink", he.a),
				Ee = p.a.div("LinkContainer", he.a),
				ke = Object(i.c)({
					userIsBanned: ue.eb
				});
			var je = Object(r.b)(ke)(e => {
					const {
						subredditName: t,
						widget: s,
						userIsBanned: n
					} = e;
					return o.a.createElement(c.a, {
						styles: s.styles,
						title: I.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (s.mods && s.mods.length || n) && o.a.createElement(d.n, {
						className: he.a.MessageModsButton,
						rel: ce.b,
						target: ce.c.BLANK,
						to: "".concat(ie.a.redditUrl, "/message/compose?to=/r/").concat(t)
					}, o.a.createElement(me.a, null), I.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), s.mods && s.mods.length && !n ? o.a.createElement(o.a.Fragment, null, s.mods.map(e => o.a.createElement(ge, {
						key: e.name
					}, (e => o.a.createElement(ae.a, {
						to: "/user/".concat(e.name, "/")
					}, Oe(e.name)))(e), o.a.createElement(ve, {
						flair: Ce(e),
						forceSmallEmojis: !0
					}))), o.a.createElement(Ee, null, o.a.createElement(ye, {
						to: "/r/".concat(t, "/about/moderators/")
					}, I.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n ? o.a.createElement("div", {
						className: he.a.HelpCenterMessage
					}, I.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", o.a.createElement(xe, {
						href: "".concat(ie.a.redditHelpUrl, "/hc/en-us/articles/360049499032"),
						rel: ce.b,
						target: ce.c.BLANK
					}, I.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : o.a.createElement("div", {
						className: he.a.UnModeratedSubreddit
					}, I.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", o.a.createElement(xe, {
						href: "".concat(ie.a.redditUrl, "/r/redditrequest"),
						rel: ce.b,
						target: ce.c.BLANK
					}, I.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", I.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				we = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				_e = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ie = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Pe = s.n(Ie);
			const Se = p.a.div("WidgetContent", Pe.a),
				Te = p.a.wrapped(a.a, "RawHTMLDisplay", Pe.a);
			var Ne = e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, o.a.createElement(Se, null, o.a.createElement(Te, {
					html: e.widget.textHtml || ""
				}))),
				Ae = s("./src/reddit/components/Widgets/Base/index.tsx");
			var Me = e => o.a.createElement(Ae.b, null, "This widget hasn't been implemented yet!");

			function Le(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return je;
						case "textarea":
							return Ne;
						case "button":
							return _;
						case "subreddit-rules":
							return _e.b;
						case "community-list":
							return q;
						case "calendar":
							return U;
						case "image":
							return re;
						case "custom":
							return Y;
						case "post-flair":
							return we.a;
						default:
							return Me
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
				return E
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "b", (function() {
				return _
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				l = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/selectors/experiments/econ/predictions.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/listings.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function E() {
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
			const k = E(),
				j = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.N)(e, t),
					loadMore: v.g,
					postsById: (e, t) => Object(C.Z)(e, Object.assign(Object.assign({}, t), {
						predictionsEnabled: Object(g.a)(e)
					})),
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(C.L)(e, s, n, o, Object(g.a)(e))
					}),
					subredditsById: O.ab,
					viewportDataLoaded: y.a,
					pageReferrer: p.Q,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: f.c
				},
				w = Object(o.c)(j),
				_ = (e, t) => {
					let {
						isFrontpage: s
					} = t;
					return {
						onBottomViewed: (t, s) => e(d.c(t, s)),
						adBrandSafetyStatusReceived: t => {
							e(i.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							s && e(Object(a.a)({
								lastLoadedEnv: "server"
							})), e(c.C(t))
						},
						fireAdPixelsOfType: (t, s) => {
							e(c.t(t, s))
						},
						trackOnPostEnteredViewport: (t, s, n) => {
							e(c.F(t, n))
						},
						trackOnPostExitedViewport: (t, s, n, o) => {
							e(c.G(t, n, o))
						},
						surveyTriggerScrollCounted: () => e(Object(l.b)())
					}
				},
				I = Object(n.b)(w, _, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEventFactory: (e, t) => Object(b.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant),
					postComponentForLayout: e => Object(u.b)(Object.assign({}, e))
				}));
			t.a = e => Object(m.c)(k(I(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: i.gb
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
				return c
			})), s.d(t, "g", (function() {
				return d
			}));
			const n = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				d = "PostCreation-AddToCollectionButton"
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
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.m.less"),
				l = s.n(d);

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
			const u = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: i,
						"data-redditstyle": a
					} = t, c = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? l.a.mDisabledRedditStyle : l.a.mDisabled : n ? l.a.mActiveRedditStyle : l.a.mActive
					})(n, i, a);
					return o.a.createElement(e, m({
						className: Object(r.a)(l.a.Checkbox, d, s)
					}, c))
				},
				b = u(c.a),
				h = u(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? b : i.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
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
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				l = s.n(d);

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
				}, o.a.createElement(c.a, {
					className: l.a.expandRight
				}, e.isSelected ? o.a.createElement(a.a, {
					className: l.a.checkboxSelected
				}) : o.a.createElement(i.a, {
					className: l.a.checkbox
				}), e.text)),
				b = e => {
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
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(p),
				b = s("./src/reddit/controls/Dropdown/row.m.less"),
				h = s.n(b);

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
					}, s = Object(a.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, x({}, t, {
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
						className: Object(a.a)(h.a.text, e.textClassName)
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
						className: Object(a.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const n = Object(a.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !s.noHover,
					[h.a.mIsSelected]: s.isSelected,
					[h.a.topics]: s.isTopicsStyle
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
				return w
			})), s.d(t, "c", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(o),
				i = s("./node_modules/raf/index.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/selectors/activeModalId.ts"),
				h = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = s.n(f);
			var C = Object(h.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: v.a.wrapper
					}, d.a.createElement(g.a, {
						className: v.a.titleRow
					}, s), d.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), d.a.createElement(g.a, {
						className: v.a.buttonRow
					}, d.a.createElement(x.i, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				O = s("./src/reddit/controls/ErrorText/index.m.less"),
				y = s.n(O);
			const E = Object(m.c)({
				activeModalId: b.a
			});
			class k extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
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
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(p.a)(y.a.wrapper, s)
					}, d.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, i), t === a && d.a.createElement(C, {
						onConfirmed: this.toggleModal,
						title: r
					}, o || e))
				}
			}
			const j = Object(l.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(k),
				w = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, i = r.length ? r : o ? [o] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(j, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				_ = e => d.a.createElement(w, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = j
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
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const m = i.a.span("metaText", d.a),
				p = e => r.a.createElement(m, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						score: s,
						useUpvotes: o
					} = e, i = l(e, ["isScoreHidden", "score", "useUpvotes"]);
					const c = Object(a.b)(s),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "2L3T21"
						}),
						p = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(m, i, p)
				},
				b = e => r.a.createElement(m, null, n.fbt._({
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
				return d
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};

			function d(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n
					} = e, r = c(e, ["featureEnabled"]);
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
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: o.b[t.prefs.layout]
				};
				return i && !Object(n.a)(i.name) && (c.subreddit = i.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = r, a && (c.position = a), c
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
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./src/reddit/helpers/parseUrl.ts");
			const o = ["old", "new", "en", "www", "np", "m"],
				r = ["reddit.com", "reddit.local"].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
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

			function c(e) {
				return (e.match(new RegExp(n.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(s) {
						return t = function(e, t) {
							const s = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const o = Object(n.a)(t);
							if (!o) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || r).indexOf(o.hostname)) return;
							const i = o.pathname.match(s.pathname);
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
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
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
				c = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
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
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/models/Media/index.ts");
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
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"), s.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"), s.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"), s.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
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
				b = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), s.e("Governance~Reddit~reddit-components-MediumPost"), s.e("RpanListingUnit~reddit-components-MediumPost"), s.e("Reddit~reddit-components-MediumPost"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
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
				h = {
					[c.g.Large]: u,
					[c.g.Medium]: b,
					[c.g.Classic]: m,
					[c.g.Compact]: p
				},
				x = e => r.a.createElement(l, e),
				g = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com"],
				f = e => e.source && e.source.url && e.isSponsored && g.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === d.o.EMBED && !(d.b.has(e.media.provider) || f(e)),
				C = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case c.g.Medium:
							return 188;
						case c.g.Classic:
							return 96;
						case c.g.Compact:
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
					d = t && r;
				n === c.g.Large && v(o) && !d && (n = c.g.Medium);
				const l = h[n];
				return void 0 === l ? (Object(a.a)(void 0, "Could not find component for layout ".concat(n, ".")), x) : s && o.isSponsored && n === c.g.Large ? b : l
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
				return c
			})), s.d(t, "b", (function() {
				return d
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
				c = (e, t, s) => a => {
					const c = Object(o.a)(t);
					return Object.assign(Object.assign({}, i(a, e, s)), {
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, r.media(a, e)), {
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						})
					})
				},
				d = (e, t) => m(e, !0, t),
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
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "p", (function() {
				return v
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "q", (function() {
				return y
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return k
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "d", (function() {
				return w
			}));
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/trackers/postEvent.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(o || (o = {}));
			const d = e => t => Object.assign({
					source: n.collection,
					noun: o.post
				}, p(t, e)),
				l = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => Object.assign({
						source: n.collection,
						noun: s ? o.unfollow : o.follow
					}, p(e, t))
				},
				m = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => Object.assign({
						source: i.a.postEvent,
						noun: s ? o.unfollow : o.follow
					}, p(e, t))
				},
				p = (e, t) => {
					const s = Object.assign(Object.assign({}, c.defaults(e)), {
						action: r.c.CLICK,
						subreddit: c.subreddit(e)
					});
					return void 0 === t ? s : Object.assign(Object.assign({}, s), {
						post: c.post(e, t),
						postCollection: c.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: c.postEventI13nSelector(e, {
							postId: t
						})
					})
				},
				u = e => Object.assign(Object.assign({}, g(e)), {
					action: r.c.VIEW,
					noun: o.collectionEducation
				}),
				b = e => Object.assign(Object.assign({}, g(e)), {
					action: r.c.CLICK,
					noun: o.collectionEducationGotIt
				}),
				h = e => Object.assign(Object.assign({}, g(e)), {
					action: r.c.VIEW,
					noun: o.eventEducation
				}),
				x = e => Object.assign(Object.assign({}, g(e)), {
					action: r.c.CLICK,
					noun: o.eventEducationGotIt
				}),
				g = e => Object.assign(Object.assign({}, c.defaults(e)), {
					subreddit: c.subreddit(e),
					source: n.postComposer
				}),
				f = (e, t) => s => Object.assign(Object.assign({}, p(s, e)), {
					source: t || n.postOverflowMenu,
					noun: o.collectionAddPost
				}),
				v = e => t => Object.assign(Object.assign({}, p(t, e)), {
					source: n.collectionComposer,
					noun: o.collectionRemovePost
				}),
				C = () => e => Object.assign(Object.assign({}, p(e)), {
					source: n.collectionComposer,
					noun: o.collectionCancel
				}),
				O = () => e => {
					const t = Object(a.o)(e) || void 0;
					return Object.assign(Object.assign({}, p(e, t)), {
						source: n.collectionComposer,
						noun: o.collectionCreate
					})
				},
				y = () => e => Object.assign(Object.assign({}, p(e)), {
					source: n.collectionComposer,
					noun: o.collectionSelect
				}),
				E = e => t => Object.assign(Object.assign({}, c.defaults(t)), {
					subreddit: c.subreddit(t),
					source: n.collectionComposer,
					action: r.c.CLICK,
					noun: o.collectionDelete,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				k = e => t => Object.assign(Object.assign({}, p(t)), {
					source: n.collectionComposer,
					noun: o.collectionEdit,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				j = e => t => Object.assign(Object.assign({}, p(t, e)), {
					source: n.collectionComposer,
					noun: o.startEvent
				}),
				w = () => e => {
					const t = Object(a.o)(e) || void 0;
					return Object.assign(Object.assign({}, p(e, t)), {
						source: n.collectionComposer,
						action: r.c.VIEW,
						noun: o.screen
					})
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			}));
			var n, o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/timezone/index.ts"),
				a = s("./src/reddit/constants/tracking.ts"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				m = s("./src/reddit/selectors/telemetry.ts"),
				p = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const u = e => m.actionInfo(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(p.a)(Object.assign(Object.assign({}, m.defaults(e)), {
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: m.subreddit(e)
					}))
				},
				h = e => {
					Object(p.a)(Object.assign(Object.assign({}, m.defaults(e)), {
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: m.subreddit(e),
						postEvent: C(e),
						postComposer: O(e)
					}))
				},
				x = () => e => ({
					source: n.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: u(e),
					postEvent: C(e)
				}),
				g = e => t => Object.assign(Object.assign({}, k(t, Object(d.o)(t))), {
					source: n.postComposer,
					noun: "apply",
					postComposer: y(e)
				}),
				f = () => e => Object.assign(Object.assign({}, k(e, Object(d.o)(e))), {
					noun: "cancel",
					actionInfo: u(e)
				}),
				v = e => t => Object.assign(Object.assign({}, k(t, Object(d.o)(t))), {
					noun: "delete",
					actionInfo: u(t),
					postComposer: O(t),
					postEvent: E(e)
				}),
				C = e => {
					const t = Object(l.p)(e);
					return t && E(t)
				},
				O = e => y(Object(l.p)(e)),
				y = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.i.AtEventTime ? Object(i.f)(e.startDate).getTime() / o.Fb : void 0
					}
				},
				E = e => {
					const t = Object(i.f)(e.startDate).getTime() / o.Fb,
						s = Object(i.f)(e.endDate).getTime() / o.Fb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(r.e)(t, s)
					}
				},
				k = (e, t) => {
					const s = {
						source: n.eventComposer,
						action: a.c.CLICK,
						subreddit: m.subreddit(e)
					};
					return t ? Object.assign(Object.assign({}, s), {
						post: m.post(e, t),
						postEvent: m.postEventI13nSelector(e, {
							postId: t
						}),
						postCollection: m.postCollectionI13nSelector(e, {
							postId: t
						})
					}) : s
				}
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
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "y", (function() {
				return c
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "q", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "r", (function() {
				return h
			})), s.d(t, "k", (function() {
				return x
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "t", (function() {
				return k
			})), s.d(t, "j", (function() {
				return j
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "x", (function() {
				return _
			})), s.d(t, "u", (function() {
				return I
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "s", (function() {
				return S
			})), s.d(t, "v", (function() {
				return T
			})), s.d(t, "w", (function() {
				return N
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
					isRecurring: Object(n.p)(e)
				}),
				a = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, r(e)),
				c = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, r(e)),
				d = () => e => Object.assign({
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
				b = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t)), {
					scheduledPost: i(e)
				}),
				h = e => t => Object.assign(Object.assign({
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
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				v = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				C = e => t => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t)), {
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				O = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				y = e => t => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : O[e]
				}, r(t)),
				E = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				k = (e, t, s) => i => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: Object(n.l)(e)
				}, r(i)), {
					actionInfo: o.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				j = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				w = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				_ = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				I = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				P = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				S = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				T = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				N = () => (e, t) => {
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
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return p
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
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
				return k
			})), s.d(t, "o", (function() {
				return j
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
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, r(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				m = c("revert_wiki_page"),
				p = c("view_wiki_page"),
				u = c("view_source"),
				b = c("add_wiki_page_contributor"),
				h = c("remove_wiki_page_contributor"),
				x = c("save_wiki_page_settings"),
				g = c("copy_url"),
				f = c("add_wiki_subreddit_contributor"),
				v = c("remove_wiki_subreddit_contributor"),
				C = c("ban_wiki_contributor"),
				O = c("unban_wiki_contributor"),
				y = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				k = e => t => Object.assign(Object.assign({}, r(t)), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: o.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				j = e => t => Object.assign(Object.assign({}, r(t)), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: o.actionInfo(t, {
						settingValue: E[e]
					})
				})
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
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve"), c.a.approveIcon, e.className),
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
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived"), c.a.archivedIcon, e.className),
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
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("calendar"), c.a.calendarIcon, e.className)
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
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
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
				return o.a.createElement("i", d({
					className: Object(r.a)(Object(i.b)("comment"), c.a.commentIcon, t)
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
			t.a = e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("crosspost"), " ").concat(a.a.CrosspostIcon, " ").concat(e.className)
			})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("distinguishShield"), " ").concat(e.className)
			}), "DistinguishShield", a.a);
			t.a = c
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", a.a);
			t.a = c
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("embed"), " ").concat(e.className)
			}), "EmbedIcon", a.a);
			t.a = c
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
			t.a = e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(a.a.Envelope, " ").concat(e.className)
			})
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
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expand"), " ").concat(e.className)
			}), "Expand", a.a);
			t.a = c
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
			t.a = c
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaLightbox"), " ").concat(e.className),
				onClick: e.onClick
			}), "LightboxIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Hide/index.m.less": function(e, t, s) {
			e.exports = {
				HideIcon: "_1ps3GcyMra2ZVakeRQFnGj",
				hideIcon: "_1ps3GcyMra2ZVakeRQFnGj"
			}
		},
		"./src/reddit/icons/fonts/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("hide"), " ").concat(e.className)
			}), "HideIcon", a.a);
			t.a = c
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live"), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock"), c.a.lockIcon, e.className),
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("i", d({}, e, {
				className: Object(r.a)(Object(i.b)("modActions"), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Op/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("op"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc)), "OpIcon", a.a);
			t.a = c
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove"), c.a.removeIcon, e.className),
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
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report"), c.a.reportIcon, e.className),
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("save"), " ").concat(e.className)
			}), "SaveIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam"), c.a.spamIcon, e.className),
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
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("sticky"), c.a.stickyIcon, e.className),
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("tag"), " ").concat(e.className)
			}), "TagIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Unpin/index.m.less": function(e, t, s) {
			e.exports = {
				UnpinIcon: "_1X-tE86a0YWmVh310hgKTZ",
				unpinIcon: "_1X-tE86a0YWmVh310hgKTZ"
			}
		},
		"./src/reddit/icons/fonts/Unpin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				c = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("unpin"), e.className)
			}), "UnpinIcon", c.a);
			t.a = d
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
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, s) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, o.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, o.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
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
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
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
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M13.27 6.67c-.083-.122-.205-.234-.314-.35l-.325-.327-.445-.44a1.198 1.198 0 00-.912-.362h-.296l-.349.001h-.083l-.001.002a.072.072 0 01-.027.012c-.004-.002-.008-.007-.008-.02l.001-.014c-.013.02.034-.062.062-.112l.093-.166.375-.672.899-1.6c.27-.479.183-1.036-.216-1.383l-.457-.458-.18-.176L11.04.56l-.023-.022-.052-.037C10.9.45 10.868.393 10.816.34c-.067-.057-.144-.1-.204-.169a1.006 1.006 0 00-.232-.113 1.418 1.418 0 00-.522-.056l-.643.014-1.159.03-2.368.076C5.349.116 5.04.166 4.787.36c-.259.188-.4.466-.47.783l-.057.224-.032.138-.065.276-.127.55c-.163.713-.318 1.417-.464 2.107l-1.03 3.631a.728.728 0 00.175.696l.22.222c.555.556.735.737.77.768.134.127.31.197.493.197l1.016.002-1.354 3.55-.032.068-.056.128-.12.276a1.15 1.15 0 00-.1.453.985.985 0 00.222.406l.775.833c.133.145.273.219.403.279.064.024.118.057.211.053.086-.005.134-.03.205-.055a1.16 1.16 0 00.424-.276l.421-.424 1.086-1.061 1.078-1.069c.729-.728 1.476-1.486 2.236-2.269l1.15-1.192.58-.61.82-.868a1.227 1.227 0 00.323-.738 1.163 1.163 0 00-.219-.767z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M11.506 6.236c.056.056.95.933.988.998a.234.234 0 01-.029.289l-7.27 7.819a.093.093 0 01-.12.012c-.03-.024-.91-.914-.966-.969a.088.088 0 00.123-.007l7.27-7.819a.238.238 0 00.004-.323zM10.215.933c.103.101.925.913.964.969.05.072.062.17.012.257L8.873 6.152l-1.525-.003 2.879-4.953a.24.24 0 00-.012-.263zM6.28 8.513l-.366.962L4.2 9.47a.24.24 0 01-.164-.065c-.058-.053-.82-.82-.961-.962a.248.248 0 00.161.063l3.043.007z",
				fill: "#C18D42"
			}), o.a.createElement("path", {
				d: "M12.494 7.234c-.038-.065-.932-.942-.988-.998a.238.238 0 01-.005.323l.428.431c.179.18.185.469.015.656-1.507 1.655-4.446 4.856-6.483 7.09a.51.51 0 01-.695.057c-.202-.16-.396-.317-.55-.404a.086.086 0 01-.107-.004c.056.055.935.944.966.969a.093.093 0 00.12-.012l7.27-7.82a.234.234 0 00.03-.288zM11.178 1.902c-.038-.056-.86-.868-.963-.969a.24.24 0 01.012.263l-.054.092c.12.144.237.273.363.399.22.22.269.56.105.824C9.91 3.689 9.198 5 8.477 6.151h.396L11.19 2.16a.237.237 0 00-.013-.257zM4.434 9.266a.703.703 0 01-.47-.181c-.217-.196-.379-.336-.64-.579h-.087a.248.248 0 01-.161-.063c.142.142.903.909.96.962a.24.24 0 00.165.065l1.713.005.12-.314c-.483.103-1.067.106-1.6.105z",
				fill: "#DDBD37"
			}), o.a.createElement("path", {
				d: "M7.733 5.881c.007-.144.096-.49.195-.731l-.58 1 1.524.002c.287-.22.456-.354.532-.68-.533.1-1.134.264-1.671.41zM5.967 8.638c-.122.187-.374.51-.5.855.111.21.182.187.447-.018l.366-.962-.762-.003c.14.03.316.066.449.128z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M8.873 6.152l2.453.002a.243.243 0 01.178.08l.003.002a.238.238 0 01-.005.323l-7.27 7.819a.088.088 0 01-.122.007l-.003-.002a.083.083 0 01-.026-.102l1.833-4.806.366-.962-3.043-.007a.248.248 0 01-.161-.063L3.06 8.43c-.055-.06-.08-.145-.055-.231l1.99-7.012a.485.485 0 01.465-.352h4.556c.08 0 .145.036.188.09 0 0 .005.002.01.01a.24.24 0 01.012.262L7.347 6.15l1.526.002z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M3.523 7.14c-.075.238-.3.798-.094.938.2-.352 3.135-5.148 3.389-5.45.594-.703 2.217-.82 2.46-1.194.097-.151-.044-.253-.333-.253H5.657c-.444 0-.596.831-.696 1.151-.174.554-1.102 3.739-1.438 4.807zM10.943 6.595c.163-.19-.234-.207-.571-.207H6.475c-.47 0-.99.22-1.475.694H9.004c.987 0 1.711-.222 1.939-.487zM7.684 8.626c.033-.115.057-.247-.009-.35-.074-.116-.231-.145-.364-.128-.331.04-.602.283-.766.57-.164.285-.831 2.06-1.436 3.848.958-1.271 2.383-3.276 2.575-3.94z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M13.898 7.37a1.232 1.232 0 00-.133-.345c-.062-.125-.183-.22-.28-.325l-.305-.313-.216-.218-.046-.047c-.017-.016-.02-.026-.075-.06-.052-.028-.061-.064-.088-.095a.613.613 0 00-.08-.087 1.094 1.094 0 00-.486-.31c-.178-.063-.386-.058-.587-.057l-.122.001-.097.007c-.003 0-.006-.001-.007-.007a.04.04 0 01-.002-.01c.003-.006-.005.005.005-.013l.064-.113.126-.226 1.096-1.949a1.157 1.157 0 00-.187-1.416L11.562.89a1.126 1.126 0 00-.695-.328c-.132-.012-.269-.003-.403-.003l-.216.004-.43.009-.216.005h-.025L9.57.58 9.555.58 9.54.578 9.533.576s-.004 0-.026-.01L9.302.485l-.41-.163-.41-.163-.126-.052c-.39-.159-.829-.14-1.203.052l-.047.024-.381.2-.345.184-.15.08-.037.026c.027.008-.31.016-.514.024l-.87.03c-.188.02-.356.064-.513.162a1.03 1.03 0 00-.368.388c-.086.151-.133.34-.177.522l-.054.219-.038.163c-.199.855-.386 1.696-.56 2.518l-.996 3.507c-.074.27.001.558.194.752.4.405.892.902.967.964.138.12.317.185.5.185l1.413.004-1.107 3.522-.08.206-.078.197-.02.05-.01.025a.65.65 0 00.089.597l.006.009.046.052c.01.013.022.025.035.04l.23.271.065.074.097.107.199.217c.133.146.276.295.424.384a1.3 1.3 0 00.218.11c.07.029.18.036.26.019.144-.038.3-.1.461-.226.156-.133.307-.29.465-.438l.623-.58c.775-.72 1.578-1.48 2.402-2.273.824-.792 1.669-1.618 2.526-2.469l.645-.643.89-.899c.108-.109.192-.229.246-.346a1.162 1.162 0 00.089-.747z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M10.98 1.82a.27.27 0 00-.037-.323c.053.05.879.872.924.924a.272.272 0 01.03.317L9.728 6.472 8.28 6.47l2.701-4.65zM12.005 6.564s.878.864.917.917a.227.227 0 01-.018.296l-7.369 7.559a.145.145 0 01-.181.023c-.046-.03-.743-.739-.92-.92a.142.142 0 00.184-.02l7.369-7.56a.222.222 0 00.016-.293l.002-.002zM2.848 8.71l3.27.007-.287.915-2.066-.005a.283.283 0 01-.188-.069c-.08-.066-.841-.839-.938-.935V8.62a.28.28 0 00.21.089z",
				fill: "#A1000A"
			}), o.a.createElement("path", {
				d: "M9.728 6.472l2.17-3.734a.272.272 0 00-.03-.317 87.777 87.777 0 00-.925-.924c.078.083.101.211.037.323l-.151.26.496.507a.23.23 0 01.035.276L9.266 6.472h.462zM12.922 7.481a57.664 57.664 0 00-.917-.917l-.002.002a.222.222 0 01-.016.294l-.13.133.455.5a.23.23 0 01-.005.315l-6.543 6.73a.23.23 0 01-.327.002l-.473-.476-.346.354a.142.142 0 01-.183.021c.176.181.873.89.919.92a.145.145 0 00.181-.024l7.369-7.558c.085-.09.08-.211.018-.296zM5.9 9.408H4.236a.458.458 0 01-.323-.133l-.567-.564-.497-.001a.28.28 0 01-.209-.09v.003c.097.096.858.869.938.935.05.044.115.069.188.069l2.066.004.07-.223z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M8.28 6.47l1.449.002c.422-.26.53-.486.533-.826-.709 0-1.645.245-1.81.528l-.172.296zM6.118 8.717h-.097c-.227.264-.451.504-.6.913.137.137.222.12.41.002l.287-.915z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M12.003 6.566a.208.208 0 00-.179-.091L9.73 6.472l-1.45-.002 2.702-4.65a.271.271 0 00-.037-.323l-.002-.002a.268.268 0 00-.195-.083H4.85a.422.422 0 00-.406.305L2.567 8.334a.293.293 0 00.073.287.28.28 0 00.209.089l3.269.007-.287.915-1.458 4.64a.135.135 0 00.02.126v.002s.005.003.01.01l.03.027a.142.142 0 00.186-.018l7.368-7.56a.221.221 0 00.016-.293z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M12.036 6.542c-.05-.08-.157-.118-.237-.11l-.235-.003-.47-.002-.938.006-1.877.013v.048c.313.11.626.183.939.239.156.03.312.055.469.073a12.007 12.007 0 001.408.097c.127.007.255 0 .383-.003a5.377 5.377 0 00-.209.289c-.204.294-.394.6-.552.939l.034.033.745-.751.372-.376c.062-.068.124-.113.187-.2a.263.263 0 00-.019-.292zM5.729 13.054c-.175.133-.355.26-.523.4l-.182.146.164-.49c.082-.235.144-.476.217-.713.071-.238.14-.477.199-.719.127-.48.238-.966.331-1.458.096-.49.169-.987.205-1.496l-.046-.014-.907 2.836-.453 1.418-.219.711-.11.356-.037.123a.187.187 0 01.026-.022l.006-.003-.01.008-.023.02-.016.052c-.008.03-.022.057-.025.1a.176.176 0 00.036.112l-.006-.018.02.032c-.003 0-.005-.002-.006-.004l.005.006.03.027-.011-.027a.04.04 0 00.04.04l-.02-.005a.181.181 0 00.195.002c.057-.043.08-.08.123-.12l.007-.007.008.011c-.003.019-.007.035-.004.027l.007-.02.023.035v-.002l-.017-.05.003-.007.005-.013-.002-.005.006-.006.01-.025.005.01.174-.182.452-.468.904-.938-.034-.034c-.19.12-.371.245-.55.374zM4.656 2.063l.04-.26a.18.18 0 01.046-.11.202.202 0 01.088-.063c.013-.005.042-.007.062-.011.09-.015.18-.027.27-.045.182-.032.363-.07.547-.114v-.048l-.553-.002-.276-.002a.45.45 0 00-.458.299l-.078.267-.154.53-.613 2.119-.591 2.125-.296 1.063-.147.532c-.067.194.098.425.306.415V8.71a.228.228 0 01-.168-.149.186.186 0 01.02-.174c.082-.168.155-.338.234-.507.145-.341.288-.683.414-1.03.137-.342.245-.694.367-1.041.113-.35.215-.704.323-1.055l.28-1.067c.078-.36.172-.715.236-1.08.033-.18.072-.36.101-.544z",
				fill: "#FFB8B8"
			}), o.a.createElement("path", {
				d: "M9.533 7.506L6.789 6.76l2.596-5.347-1.619-.69-1.4.69L4.514 7.37l3.292.67-1.172 2.776 2.899-3.309z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M5.902 6.759l2.7-5.347-.951-.385L5.42 6.87l2.341.63-1.86-.742z",
				fill: "#CDA467"
			}), o.a.createElement("path", {
				d: "M4.514 7.37l1.852-5.958-.622-.208-1.23 6.165zM9.385 1.412L6.79 6.76l3.433-5.555-.837.208z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M6.534 1.593l-1.768 5.57.437-.24 2.178-5.719-.847.389zM9.124 7.6L5.9 6.76l1.195.61 1.163.23h.865zM8.453 7.866L7.144 9.992l.768-1.94.541-.186z",
				fill: "#fff"
			}))
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
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
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
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				p = s("./src/reddit/components/LightboxHeader/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				h = s("./src/reddit/models/Theme/index.ts"),
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
					showFPR: g.G,
					showSuspended: g.N
				})),
				E = Object(c.a)(e => {
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
							"--fakelightbox-overlay-background": Object(h.g)(i.canvas, i.canvasImgUrl, i.canvasImgPosition),
							"--fakelightbox-overlay-max-width": "".concat(s ? u.h : u.i, "px")
						}
					}, r))
				});
			class k extends o.a.Component {
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
					}), o.a.createElement(d.a.Consumer, null, this.renderWrapper), o.a.createElement(b.a, e))
				}
			}
			t.a = y(k)
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
			const c = e => o.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				d = e => o.a.createElement("div", {
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
					return o.a.createElement(c, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, o.a.createElement(d, {
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
				c = s.n(a);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
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
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
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
				return o.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, m), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: c.a.right
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
				c = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/path/index.ts"),
				m = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				h = s.n(b);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = Object(r.b)(() => Object(i.c)({
				headComment: p.y,
				otherDiscussionsCount: u.D,
				post: p.I
			}));
			t.a = Object(d.c)(g(e => {
				let {
					commentId: t,
					headComment: s,
					isOverlay: n,
					otherDiscussionsCount: r,
					post: i,
					postId: d,
					sendEvent: p
				} = e;
				if (!i) return null;
				const u = void 0 !== t,
					b = i.permalink,
					g = r > 0,
					f = Object(l.b)(Object(a.e)(b));
				return u || g ? o.a.createElement("div", {
					className: h.a.CommentsNavigationPane
				}, u && o.a.createElement("div", null, o.a.createElement(c.a, {
					className: h.a.linkOrOverlay,
					isOverlay: n,
					to: Object(l.b)(b)
				}, x._("View all comments", null, {
					hk: "3I5IX9"
				})), s && null !== s.parentId && o.a.createElement(c.a, {
					className: h.a.linkOrOverlay,
					isOverlay: n,
					to: Object(l.b)(s.permalink + "?context=8&depth=9")
				}, x._("Show parent comments", null, {
					hk: "AVRCa"
				}))), g && o.a.createElement(c.a, {
					className: h.a.OtherDiscussionsLink,
					isOverlay: n,
					onClick: () => p(Object(m.a)(d)),
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
				return pt
			})), s.d(t, "CommentsPage", (function() {
				return vt
			}));
			var n = s("./node_modules/core-js/modules/es6.array.sort.js"),
				o = s.n(n),
				r = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				i = s.n(r),
				a = s("./node_modules/core-js/modules/es6.symbol.js"),
				c = s.n(a),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s.n(l),
				p = s("./node_modules/lodash/get.js"),
				u = s.n(p),
				b = s("./node_modules/lodash/throttle.js"),
				h = s.n(b),
				x = s("./node_modules/react/index.js"),
				g = s.n(x),
				f = s("./node_modules/react-redux/es/index.js"),
				v = s("./node_modules/react-router-redux/es/index.js"),
				C = s("./node_modules/reselect/es/index.js"),
				O = s("./src/reddit/models/PostDraft/index.ts"),
				y = s("./src/telemetry/index.ts"),
				E = s("./src/telemetry/models/Timer.ts"),
				k = s("./src/lib/classNames/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				w = s("./src/lib/domUtils/index.ts"),
				_ = s("./src/lib/fastdom/index.ts"),
				I = s("./src/lib/lessComponent.tsx"),
				P = s("./src/lib/makeCommentsPageKey/index.ts"),
				S = s("./src/lib/makeDraftKey/index.ts"),
				T = s("./src/lib/performanceTimings/index.tsx"),
				N = s("./src/reddit/actions/ads/index.ts"),
				A = s("./src/reddit/actions/comment/index.ts"),
				M = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				L = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				R = s("./src/reddit/actions/login.ts"),
				F = s("./src/reddit/actions/page.ts"),
				B = s("./src/reddit/actions/tooltip.ts"),
				D = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				W = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				H = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				V = s("./src/reddit/constants/componentSizes.ts"),
				U = s("./src/reddit/constants/elementIds.ts"),
				G = s("./src/reddit/constants/history.ts"),
				K = s("./src/reddit/constants/keycodes.ts"),
				q = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/constants/screenWidths.ts"),
				J = s("./src/reddit/contexts/ApiContext.tsx"),
				X = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Q = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Y = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Z = s("./src/reddit/featureFlags/profileCollections.ts"),
				$ = s("./src/reddit/models/Comment/index.ts"),
				ee = s("./src/reddit/models/Media/index.ts"),
				te = s("./src/reddit/models/Post/index.ts"),
				se = s("./src/reddit/models/Subreddit/index.ts"),
				ne = s("./src/reddit/selectors/chatPost.ts"),
				oe = s("./src/reddit/selectors/comments.ts"),
				re = s("./src/reddit/selectors/commentsListTruncated.ts"),
				ie = s("./src/reddit/selectors/discoveryUnit.ts"),
				ae = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				ce = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				de = s("./src/reddit/selectors/experiments/commentsPageAd.ts"),
				le = s("./src/reddit/selectors/experiments/postSeo.ts"),
				me = s("./src/reddit/selectors/meta.ts"),
				pe = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ue = s("./src/reddit/selectors/posts.ts"),
				be = s("./src/reddit/selectors/realtimeComments.ts"),
				he = s("./src/reddit/selectors/subreddit.ts"),
				xe = s("./src/reddit/selectors/tooltip.ts"),
				ge = s("./src/reddit/selectors/user.ts"),
				fe = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				ve = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Ce = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Oe = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ye = s("./src/reddit/components/Comments/index.tsx"),
				Ee = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				ke = s("./src/reddit/components/Comments/States/index.tsx"),
				je = s("./src/reddit/components/CommentsChat/Loader.ts"),
				we = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				_e = s("./src/reddit/components/CommentSort/index.tsx"),
				Ie = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Pe = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Se = s("./src/reddit/components/HeaderImage/index.tsx"),
				Te = s("./src/reddit/components/Hovercards/helpers.ts"),
				Ne = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Ae = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Me = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Le = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Re = s("./src/reddit/components/JumpToContent/index.tsx"),
				Fe = s("./src/reddit/components/PostContent/index.tsx"),
				Be = s("./src/reddit/components/PostTopMeta/index.tsx"),
				De = s("./src/reddit/components/SubredditNav/index.tsx"),
				We = s("./src/reddit/components/TrackingHelper/index.tsx"),
				He = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Ve = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Ue = s("./src/reddit/helpers/history/index.ts"),
				Ge = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				Ke = s("./src/reddit/helpers/postCollection.ts"),
				qe = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ze = s("./src/reddit/helpers/trackers/screenview.ts"),
				Je = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Xe = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Qe = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ye = s("./src/reddit/models/ContentGate.ts"),
				Ze = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				$e = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				et = s("./src/reddit/pages/CommentsPage/index.m.less"),
				tt = s.n(et);

			function st() {
				return (st = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var nt = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const ot = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				rt = 80,
				it = 200,
				at = 80,
				ct = 32,
				dt = Object(d.a)({
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
				lt = Object(d.a)({
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
				mt = Object(d.a)({
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
				pt = e => {
					let {
						postId: t,
						commentId: s,
						commentsPageKey: n
					} = e;
					return s ? Object(P.a)(t) : n
				},
				ut = e => {
					const {
						state: t
					} = e.location, s = u()(t, G.a.IsOverlay, !1), n = u()(t, G.a.CloseLocation, null), o = u()(t, G.a.ScrollOnLoad, !1);
					o && Object(Ue.c)(G.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: a
					} = e.match.params, c = Object(te.m)(i), d = r && Object($.f)(r);
					return g.a.createElement(vt, {
						closeLocation: n,
						commentId: d,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: o,
						sort: e.sort,
						subredditName: a
					})
				},
				bt = Object(X.t)(),
				ht = () => Object(C.c)({
					apiError: oe.c,
					apiPending: oe.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(ue.bb)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					comment: oe.n,
					communityBannerDiscoveryUnit: ie.b,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(ge.e)(e, s)
					},
					contestModeIsEnabled: ue.F,
					currentUserShowNSFW: ge.Y,
					dismissedSubreddits: ae.a,
					fullyLoaded: oe.v,
					hasModeratorPostPermissions: pe.b,
					headComment: oe.y,
					isActionBarAnimationEnabled: Y.b,
					isAvatarsInCommentsEnabled: ce.a,
					isChatPost: ne.d,
					isCommentsListTruncated: re.a,
					isLoggedIn: ge.I,
					isNightmodeOn: ge.T,
					isRealtimeCommentsExperimentEnabled: be.a,
					isTooltipOpen: (e, t) => !!Object(xe.a)(e),
					newCommentsCount: oe.D,
					origin: me.l,
					post: oe.I,
					postSEOV2IdCardVariant: le.i,
					profileCollectionsEnabled: Z.a,
					replyComment: (e, t) => {
						let {
							postId: s,
							commentId: n,
							commentsPageKey: o
						} = t;
						return Object(oe.t)(e, {
							commentsPageKey: pt({
								postId: s,
								commentId: n,
								commentsPageKey: o
							})
						})
					},
					shouldOpenPostInNewTab: ge.X,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(he.y)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: ue.bb,
					userHovercardIsOpen: (e, t) => Object(xe.b)(Object(Te.b)({
						itemId: t.postId,
						tooltipIdPrefix: W.a,
						tooltipType: Be.c.StickyPost
					}))(e),
					userPrefs: ge.ob,
					isInCommentsPageAdExperiment: de.a
				}),
				xt = (e, t) => ({
					dismissTruncation: t => e(Object(fe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(M.a)()),
					setCommentFocus: t => e(A.M({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(F.z)(t.postId, void 0, {
						subredditName: t.subredditName,
						sort: t.sort
					})),
					onHideTooltip: () => e(Object(B.i)()),
					onToggleTooltip: t => e(Object(B.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(R.h)()),
					openRegisterModal: () => e(Object(R.i)()),
					goToSubredditPage: t => e(Object(v.b)(t)),
					truncateCommentsList: () => e(Object(M.b)()),
					fetchCommentsNativeAd: t => e(Object(N.a)(t)),
					getIsTrackingCrossposts: t => e(Object(L.b)(t)),
					getPostCrowdControlLevel: t => e(Object(ve.b)(t))
				}),
				gt = Object(f.b)(ht, xt);
			class ft extends g.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = h()(() => {
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
							c = null !== this.scrollY && Math.abs(a - this.scrollY) > rt,
							d = r && r.media && r.media.type === ee.o.EMBED ? r.media.provider : null,
							l = r && r.media && ee.d.has(r.media.type) && (!d || !ee.s.has(d));
						this.scrollY = a, !e && void 0 !== s && a >= s && (this.didScrollPastPost = !0), e && void 0 !== s && a < s && (this.didScrollPastPost = !1, n && _.a.write(() => {
							o(Object(Te.b)({
								itemId: i,
								tooltipIdPrefix: W.a,
								tooltipType: Be.c.StickyPost
							}))
						})), l && this.postScrollItemRef && (this.postPaused || !c && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (c ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * j.G) : (this.postPaused = !1, _.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, _.a.write(this.postScrollItemRef.pauseContent)))
					}, j.G), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(qe.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
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
						const n = s && Object(te.l)(s) && s && s.belongsTo.id;
						n && e(n), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Ve.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === K.b.F || e.keyCode === K.a.F,
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
							isOverlay: o,
							post: r,
							shouldScrollToComments: i
						}
					} = this;
					if (r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== q.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (o ? (this.scrollContainerEl = document.getElementById(U.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : _.a.write(() => {
							setTimeout(() => {
								Object(w.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(Ge.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(te.m)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), _.a.read(() => {
						this.props.isOverlay || Object(T.d)(T.c.CommentsPage, n)
					})
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(Ke.a)(this.props.post);
						this.props.post && this.props.post.numComments ? _.a.read(this.handleScroll) : _.a.write(() => {
							e || Object(w.c)(this.scrollContainerEl, 0), _.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && _.a.write(() => {
							setTimeout(() => {
								Object(w.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = V.b + (this.props.isOverlay ? V.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(U.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								i = this.props.isOverlay ? ct : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= i && _.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(w.c)(n, i) : Object(w.c)(document, i)
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
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = it
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
					_.a.read(() => {
						const e = document.getElementById(U.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - at, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - at, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), _.a.write(() => {
								Object(w.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => _.a.read(this.handleScroll))
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
					_.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = y.c.end(t);
						n(Object(ze.c)(t, s, e, E.TimerType.InApp, r, o))
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
						subredditName: o
					} = this.props, r = !(!n || !n.isNSFW || t), i = Object(He.a)(e, r, o);
					if (!i) return null;
					let a = g.a.createElement(mt, i);
					return s && (a = g.a.createElement(Je.a, {
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
						post: c,
						postId: d,
						postSEOV2IdCardVariant: l,
						sort: m,
						sendEvent: p,
						subredditOrProfile: u,
						profileCollectionsEnabled: b,
						isInCommentsPageAdExperiment: h,
						isActionBarAnimationEnabled: x
					} = this.props, f = Object(le.f)(l);
					if (!c) {
						if (t) return g.a.createElement(ke.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === j.m ? g.a.createElement(mt, {
							contentGateType: Ye.a.PostBlockedForLegalReason
						}) : g.a.createElement(ke.d, {
							postId: d,
							commentId: n,
							apiError: e,
							sort: m
						}) : g.a.createElement(ke.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const v = this.isCommentPermalink(),
						C = c.belongsTo.type === q.a.PROFILE,
						O = Object(Ke.a)(c) && (!C || b),
						y = !i;
					return g.a.createElement(Ot, {
						closeLocation: s,
						commentsPageKey: o,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: i,
						isOverlay: a,
						isSwapVariant: f,
						post: c,
						subredditOrProfile: u,
						shouldFitPageToContent: y,
						isCollectionLayout: O
					}, u && u.isQuarantined && g.a.createElement(Le.a, {
						subredditName: u.name
					}), g.a.createElement(Re.a, null), g.a.createElement("div", {
						className: Object(k.a)(tt.a.PageContentWrapper, {
							[tt.a.LargePageContent]: O,
							[tt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, O && g.a.createElement(lt, {
						isOverlay: a,
						isNightmodeOn: r,
						postId: d
					}), g.a.createElement(ot, {
						condition: O,
						wrap: e => g.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: tt.a.CollectionBodyWrapper
						}, e)
					}, g.a.createElement(Fe.a, {
						isCommentPermalink: v,
						isExclusivePost: !0,
						isOverlay: a,
						postId: d,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: p,
						isActionBarAnimationEnabled: x
					}), h && this.state.commentNativeAdId && g.a.createElement(D.a, {
						key: "event-post-id-".concat(c.id),
						postId: this.state.commentNativeAdId,
						isOverlay: a
					}), this.renderCommentPanes())), u && !Object(se.g)(u) && g.a.createElement(H.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						post: c,
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
						hasModeratorPostPermissions: c,
						headComment: d,
						isAvatarsInCommentsEnabled: m,
						isChatPost: p,
						isLoggedIn: u,
						isOverlay: b,
						isRealtimeCommentsExperimentEnabled: h,
						location: x,
						newCommentsCount: f,
						onOtherDiscussions: v,
						openLoginModal: C,
						openRegisterModal: y,
						origin: E,
						post: j,
						postId: w,
						replyComment: _,
						sendEvent: I,
						sort: P,
						subredditAboutInfo: T,
						subredditOrProfile: N
					} = this.props;
					if (!j) return null;
					const M = this.isCommentPermalink(),
						L = [],
						R = j.isLocked && !s,
						F = !(M || j.isArchived || T && T.userIsBanned);
					if (R) L.push(g.a.createElement(Ae.a, {
						key: "commentThreadBanner",
						subredditOrProfile: N
					}));
					else if (j.isArchived) L.push(g.a.createElement(Ne.a, {
						key: "commentThreadBanner"
					}));
					else if (F && !p && !v)
						if (u) {
							const e = Object(S.a)(O.c.replyToPost, w);
							L.push(g.a.createElement(Ce.a, {
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
									} = t, r = nt(t, ["validate"]);
									return n ? A.tb(w, o, e, r, s) : A.lb(w, o, e, r, s)
								},
								submitButtonText: l.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else L.push(g.a.createElement(Oe.a, {
							key: "loggedOutCommentForm",
							location: x,
							openLoginModal: C,
							openRegisterModal: y,
							origin: E
						}));
					if (r && L.push(g.a.createElement(Me.a, {
							hasModeratorPostPermissions: c,
							key: "contestModeBanner"
						})), !p && !v && L.push(g.a.createElement(_e.a, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: b,
							key: "commentSort",
							location: x,
							postId: w,
							sort: P,
							suggestedSort: j.suggestedSort
						}), g.a.createElement(Ze.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: b,
							key: "commentNavigation",
							postId: w
						})), !t || d || p || v)
						if (!e || d || v)
							if (v) L.push(g.a.createElement(dt, {
								commentSort: P,
								key: "otherDiscussions",
								postId: w,
								isOverlay: b,
								postPermalink: j.permalink
							}));
							else if (p) {
						if (N && N.id) {
							const e = _ ? Object(S.a)(O.c.replyToComment, _.id) : Object(S.a)(O.c.replyToPost, w),
								s = pt({
									postId: w,
									commentId: n,
									commentsPageKey: o
								});
							L.push(g.a.createElement(je.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !d || !a && t,
								key: "commentsChat",
								postId: w,
								renderedInOverlay: b,
								subredditId: N.id
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return u ? g.a.createElement(we.a, {
									key: "chatCommentsForm",
									postId: w,
									replyComment: _,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: I
								}) : g.a.createElement(Oe.a, {
									key: "loggedOutCommentForm",
									className: tt.a.ChatLoggedOutForm,
									location: x,
									openLoginModal: C,
									openRegisterModal: y,
									origin: E
								})
							}))
						}
					} else L.push(g.a.createElement("div", {
						className: Object(k.a)(tt.a.CommentsPaneWrapper, {
							[tt.a.mIsInOverlay]: b
						}),
						key: "commentsPaneWrapper"
					}, g.a.createElement(Pe.a, st({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: j.numComments,
						onClick: this.handleContentClick
					}), h && f > 0 && g.a.createElement(Ee.a, {
						commentsPageKey: o,
						isActive: !1,
						moreCommentsId: "",
						count: f,
						onMoreCommentsItemClick: i
					}), g.a.createElement(ye.a, {
						commentId: n,
						commentsPageKey: o,
						postId: w,
						renderedInOverlay: b
					})))), e && d ? L.push(g.a.createElement(ke.e, {
						key: "commentsErrorState",
						postId: w,
						commentId: n,
						sort: P,
						apiError: e
					})) : !a && t && L.push(g.a.createElement(ke.a, {
						isAvatarsInCommentsEnabled: m,
						key: "commentsPlaceholder"
					}));
					else L.push(g.a.createElement(ke.e, {
						postId: w,
						commentId: n,
						sort: P,
						apiError: e
					}));
					else this.didRenderLoading = !0, L.push(g.a.createElement(ke.a, {
						isAvatarsInCommentsEnabled: m,
						key: "commentsPlaceholder"
					}));
					return g.a.createElement(Q.a.Provider, {
						value: this.sendEventWithName
					}, L)
				}
			}
			const vt = bt(Object(J.b)(gt(Object(We.c)(ft)))),
				Ct = I.a.wrapped(Ie.a, "DetailsPageSidebar", tt.a),
				Ot = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: c,
						isSwapVariant: d,
						post: l,
						shouldFitPageToContent: m,
						subredditOrProfile: p
					} = e;
					if (!a && !c) return g.a.createElement(Xe.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: p && g.a.createElement(Ie.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					if (c) return g.a.createElement(Je.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: i,
						sidebar: p && g.a.createElement(Ie.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					const u = i ? V.i : z.a;
					return g.a.createElement(Qe.a, {
						containerRef: n,
						maxWidth: V.i,
						fitPageToContent: m,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: d,
						isCollectionLayout: i,
						navBar: p && g.a.Children.toArray([g.a.createElement(Se.a, {
							key: p.name,
							disableFullscreen: !0,
							headerText: p.name,
							maxWidth: u,
							prefixedHeaderText: p.displayText,
							subredditOrProfile: p,
							url: p.url
						}), !Object(se.g)(p) && g.a.createElement(De.a, {
							disableFullscreen: !0,
							homeUrl: p.url,
							maxWidth: u,
							subredditId: p.id
						})]),
						sidebar: p && g.a.createElement(Ct, {
							commentsPageKey: s,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					})
				};
			t.default = Object($e.a)(ut)
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts");
			const h = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(b.m)(t)
				},
				x = (e, t, s) => {
					const n = h(e),
						r = (e => {
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
							return o()([...Object(d.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, r, a)
				},
				g = Object(c.c)({
					commentsPageSort: (e, t) => {
						const s = h(t);
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
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				r = s("./src/reddit/selectors/experiments/econ/predictions.ts");
			const i = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(n.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				a = (e, t) => {
					const s = i(e, t);
					return Object(o.U)(e, {
						listingKey: s,
						predictionsEnabled: Object(r.a)(e)
					}) || []
				},
				c = (e, t) => {
					const s = i(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				d = (e, t) => {
					const s = i(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				l = (e, t) => {
					const s = i(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return !(!n || !n.hasNextPage)
				},
				m = (e, t) => {
					const s = i(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return n && n.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/constants/postLayout.ts"),
				r = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => o.e[Object(r.N)(e, {})] === o.d.Card,
				c = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.J
				}) === n.T.Treatment
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.I, i.H, (e, t) => e || t),
				c = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.x
				}), e => e === o.C.Enabled)
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
					experimentName: n.M
				});
				return !!t && !Object(n.ed)(t)
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
					experimentName: n.gb
				});
				return !(!t || Object(n.ed)(t))
			}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => n.c.Enabled === Object(o.c)(e, {
				experimentEligibilitySelector: r.I,
				experimentName: n.e
			})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage.8f58ec6b2ecbbb8835f2.js.map